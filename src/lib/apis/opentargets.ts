const GRAPHQL_URL = "https://api.platform.opentargets.org/api/v4/graphql";

export type DrugTargetAssociation = {
  drugId: string;
  drugName: string;
  mechanismOfAction: string;
  targetId: string;
  targetName: string;
  diseaseId: string;
  diseaseName: string;
  phase: number;
  status: string;
};

async function queryOpenTargets(query: string, variables: Record<string, unknown>) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) throw new Error(`OpenTargets query failed: ${res.status}`);
  return res.json();
}

/** Get drugs targeting a specific gene */
export async function getDrugsByTarget(
  ensemblId: string
): Promise<DrugTargetAssociation[]> {
  const query = `
    query DrugsByTarget($ensemblId: String!) {
      target(ensemblId: $ensemblId) {
        id
        approvedSymbol
        knownDrugs {
          rows {
            drug {
              id
              name
              mechanismsOfAction {
                rows {
                  mechanismOfAction
                }
              }
            }
            disease {
              id
              name
            }
            phase
            status
          }
        }
      }
    }
  `;

  const data = await queryOpenTargets(query, { ensemblId });
  const target = data?.data?.target;
  if (!target?.knownDrugs?.rows) return [];

  return target.knownDrugs.rows.map((row: Record<string, unknown>) => {
    const drug = row.drug as Record<string, unknown>;
    const disease = row.disease as Record<string, unknown>;
    const mechanisms = drug?.mechanismsOfAction as { rows?: Array<{ mechanismOfAction?: string }> };

    return {
      drugId: (drug?.id as string) || "",
      drugName: (drug?.name as string) || "",
      mechanismOfAction:
        mechanisms?.rows?.[0]?.mechanismOfAction || "",
      targetId: target.id,
      targetName: target.approvedSymbol,
      diseaseId: (disease?.id as string) || "",
      diseaseName: (disease?.name as string) || "",
      phase: (row.phase as number) || 0,
      status: (row.status as string) || "",
    };
  });
}

/** Search for disease associations */
export async function searchDiseaseAssociations(
  efoId: string,
  maxResults: number = 25
) {
  const query = `
    query DiseaseAssociations($efoId: String!, $size: Int!) {
      disease(efoId: $efoId) {
        id
        name
        knownDrugs(size: $size) {
          rows {
            drug {
              id
              name
            }
            target {
              id
              approvedSymbol
            }
            phase
            status
          }
        }
      }
    }
  `;

  const data = await queryOpenTargets(query, { efoId, size: maxResults });
  return data?.data?.disease?.knownDrugs?.rows || [];
}

/** SDH-relevant disease EFO IDs */
export const SDH_DISEASE_EFOS = {
  GIST: "MONDO_0011719",
  paraganglioma: "EFO_0000656",
  pheochromocytoma: "EFO_0000668",
  renal_cell_carcinoma: "EFO_0000681",
};
