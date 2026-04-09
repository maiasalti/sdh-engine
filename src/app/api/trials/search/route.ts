import { searchTrials, searchSDHTrials } from "@/lib/apis/clinicaltrials";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const maxResults = Math.min(
      parseInt(searchParams.get("max") || "20", 10),
      50
    );

    let trials;

    if (query) {
      trials = await searchTrials(query, maxResults);
    } else {
      trials = await searchSDHTrials(maxResults);
    }

    return Response.json({ trials, count: trials.length });
  } catch (error) {
    console.error("ClinicalTrials.gov search error:", error);
    return Response.json(
      { error: "Failed to search clinical trials" },
      { status: 500 }
    );
  }
}
