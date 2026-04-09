import { getClaudeClient } from "@/lib/claude";
import { SDH_BIOLOGY_CONTEXT } from "@/data/seed/sdh-biology";
import { SCORING_WEIGHTS } from "@/lib/scoring/constants";

export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    const { drug } = await request.json();

    if (!drug?.name) {
      return Response.json({ error: "Drug data is required" }, { status: 400 });
    }

    const client = getClaudeClient();

    const weightsDescription = Object.entries(SCORING_WEIGHTS)
      .map(([k, v]) => `- ${k.replace(/_/g, " ")}: ${v * 100}%`)
      .join("\n");

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      system: SDH_BIOLOGY_CONTEXT,
      messages: [
        {
          role: "user",
          content: `Analyze the following drug as a repurposing candidate for SDH-deficient diseases.

Drug: ${drug.name}
Class: ${drug.drug_class}
Mechanism: ${drug.mechanism_of_action}
FDA Approved: ${drug.fda_approved ? "Yes" : "No"}
Approved Indications: ${drug.approved_indications?.join(", ") || "None"}
Current Status: ${drug.status}
Pathways: ${drug.pathway_slugs?.join(", ") || "Unknown"}
Targets: ${drug.target_gene_symbols?.join(", ") || "Unknown"}

Score this drug across these 5 dimensions (each 0-100):
${weightsDescription}

Respond ONLY with valid JSON in this exact format:
{
  "overall_score": <weighted average>,
  "breakdown": {
    "mechanistic_rationale": <0-100>,
    "preclinical_evidence": <0-100>,
    "clinical_evidence": <0-100>,
    "sdh_specificity": <0-100>,
    "druggability": <0-100>
  },
  "reasoning": "<2-3 sentence explanation of the overall assessment>",
  "key_strengths": ["<strength 1>", "<strength 2>"],
  "key_gaps": ["<gap 1>", "<gap 2>"]
}`,
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
    jsonStr = jsonStr.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");
    const firstBrace = jsonStr.indexOf("{");
    const lastBrace = jsonStr.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace !== -1) {
      jsonStr = jsonStr.slice(firstBrace, lastBrace + 1);
    }

    const score = JSON.parse(jsonStr);

    return Response.json(score);
  } catch (error) {
    console.error("AI Score error:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Failed to generate AI score: ${message}` },
      { status: 500 }
    );
  }
}
