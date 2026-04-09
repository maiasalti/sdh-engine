const BASE_URL = "https://clinicaltrials.gov/api/v2/studies";

export type ClinicalTrialResult = {
  nctId: string;
  title: string;
  status: string;
  phase: string;
  conditions: string[];
  interventions: string[];
  locations: string[];
  enrollment: number | null;
  startDate: string | null;
  completionDate: string | null;
  url: string;
};

type StudyResponse = {
  studies?: Array<{
    protocolSection?: {
      identificationModule?: {
        nctId?: string;
        briefTitle?: string;
      };
      statusModule?: {
        overallStatus?: string;
        startDateStruct?: { date?: string };
        completionDateStruct?: { date?: string };
      };
      designModule?: {
        phases?: string[];
      };
      conditionsModule?: {
        conditions?: string[];
      };
      armsInterventionsModule?: {
        interventions?: Array<{
          name?: string;
          type?: string;
        }>;
      };
      contactsLocationsModule?: {
        locations?: Array<{
          facility?: string;
          city?: string;
          state?: string;
          country?: string;
        }>;
      };
      designModule2?: {
        enrollmentInfo?: {
          count?: number;
        };
      };
    };
  }>;
  totalCount?: number;
};

export async function searchTrials(
  query: string,
  maxResults: number = 20
): Promise<ClinicalTrialResult[]> {
  const params = new URLSearchParams({
    "query.term": query,
    pageSize: String(maxResults),
    format: "json",
    sort: "LastUpdatePostDate:desc",
  });

  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) throw new Error(`ClinicalTrials.gov search failed: ${res.status}`);

  const data: StudyResponse = await res.json();

  return (data.studies || []).map((study) => {
    const proto = study.protocolSection;
    const id = proto?.identificationModule;
    const status = proto?.statusModule;
    const design = proto?.designModule;
    const conditions = proto?.conditionsModule;
    const arms = proto?.armsInterventionsModule;
    const contacts = proto?.contactsLocationsModule;

    const nctId = id?.nctId || "";

    const locations = (contacts?.locations || [])
      .slice(0, 3)
      .map((loc) =>
        [loc.facility, loc.city, loc.state, loc.country]
          .filter(Boolean)
          .join(", ")
      );

    const interventions = (arms?.interventions || []).map(
      (i) => `${i.name || "Unknown"}${i.type ? ` (${i.type})` : ""}`
    );

    // Enrollment can be in different locations depending on API version
    let enrollment: number | null = null;
    const enrollmentInfo = (proto as Record<string, unknown>)?.designModule as
      | Record<string, unknown>
      | undefined;
    if (enrollmentInfo?.enrollmentInfo) {
      enrollment =
        (enrollmentInfo.enrollmentInfo as { count?: number }).count || null;
    }

    return {
      nctId,
      title: id?.briefTitle || "Untitled",
      status: status?.overallStatus || "Unknown",
      phase: (design?.phases || []).join(", ") || "N/A",
      conditions: conditions?.conditions || [],
      interventions,
      locations,
      enrollment,
      startDate: status?.startDateStruct?.date || null,
      completionDate: status?.completionDateStruct?.date || null,
      url: `https://clinicaltrials.gov/study/${nctId}`,
    };
  });
}

/** Pre-configured SDH-relevant trial searches */
export const SDH_TRIAL_QUERIES = [
  "SDH-deficient GIST",
  "succinate dehydrogenase paraganglioma",
  "succinate dehydrogenase pheochromocytoma",
  "belzutifan SDH",
  "temozolomide paraganglioma",
  "sunitinib GIST",
];

export async function searchSDHTrials(
  maxResults: number = 20
): Promise<ClinicalTrialResult[]> {
  return searchTrials(
    "succinate dehydrogenase OR SDH-deficient OR paraganglioma OR pheochromocytoma GIST",
    maxResults
  );
}
