import { getClaudeClient } from "@/lib/claude";
import { SEED_DRUGS } from "@/data/seed/drugs";
import { SEED_PATHWAYS } from "@/data/seed/pathways";

export const maxDuration = 60;

const COMPACT_CONTEXT = `You are a molecular oncology expert on SDH-deficient tumors. SDH loss causes succinate accumulation, which inhibits PHDs (stabilizing HIF-1a/2a, causing pseudohypoxia) and TETs (causing DNA hypermethylation). Downstream druggable pathways: HIF/pseudohypoxia, epigenetic dysregulation, VEGF signaling, mTOR/PI3K/AKT, glutamine dependency, oxidative stress/ROS, autophagy. SDH-deficient tumors include GIST, paraganglioma, pheochromocytoma, RCC, and pituitary adenoma. SDH-deficient GIST is resistant to imatinib. The pseudohypoxic phenotype is shared with VHL-deficient tumors. The oncometabolite mechanism parallels IDH-mutant tumors.`;

export async function POST(request: Request) {
  try {
    const { pathwaySlug, context } = await request.json();

    const client = getClaudeClient();

    const drugNames = SEED_DRUGS.map((d) => d.name).join(", ");

    const pathwayFocus = pathwaySlug
      ? SEED_PATHWAYS.find((p) => p.slug === pathwaySlug)
      : null;

    const focusLine = pathwayFocus
      ? `Focus on "${pathwayFocus.name}".`
      : "";

    const contextLine = context ? `Constraint: ${context}` : "";

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 3000,
      system: COMPACT_CONTEXT,
      messages: [
        {
          role: "user",
          content: `Propose 3 NEW drug repurposing candidates for SDH-deficient tumors NOT in: ${drugNames}. ${focusLine} ${contextLine}

JSON only: {"hypotheses":[{"drug_name":"","drug_class":"","fda_approved":true,"approved_for":"","pathway_connections":[""],"title":"","rationale":"","confidence":"high|medium|low|speculative","suggested_next_steps":[""],"key_references":[""]}]}

Slugs: hif-pseudohypoxia, epigenetic-dysregulation, vegf-signaling, mtor-pi3k-akt, glutamine-dependency, oxidative-stress-ros, autophagy-survival`,
        },
      ],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return Response.json(
        { error: "No text response from AI" },
        { status: 500 }
      );
    }

    let jsonStr = textBlock.text.trim();
    // Strip markdown code fences if present
    jsonStr = jsonStr.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");
    // Find the first { and last } to extract JSON
    const firstBrace = jsonStr.indexOf("{");
    const lastBrace = jsonStr.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace !== -1) {
      jsonStr = jsonStr.slice(firstBrace, lastBrace + 1);
    }

    const result = JSON.parse(jsonStr);

    return Response.json(result);
  } catch (error) {
    console.error("AI Hypothesize error:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Failed to generate hypotheses: ${message}` },
      { status: 500 }
    );
  }
}
