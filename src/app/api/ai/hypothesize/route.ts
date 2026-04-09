import { getClaudeClient } from "@/lib/claude";
import { SEED_DRUGS } from "@/data/seed/drugs";
import { SEED_PATHWAYS } from "@/data/seed/pathways";

export const maxDuration = 60;

const COMPACT_CONTEXT = `You are a molecular oncology expert on SDH-deficient tumors. SDH loss causes succinate accumulation, inhibiting PHDs (stabilizing HIF-1a/2a) and TETs (causing DNA hypermethylation). Druggable pathways: HIF/pseudohypoxia, epigenetic dysregulation, VEGF, mTOR/PI3K/AKT, glutamine dependency, ROS, autophagy. Tumor types: GIST, paraganglioma, pheochromocytoma, RCC, pituitary adenoma.`;

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
      max_tokens: 4096,
      system: COMPACT_CONTEXT,
      messages: [
        {
          role: "user",
          content: `Propose 3 NEW drug repurposing candidates for SDH-deficient tumors NOT in: ${drugNames}. ${focusLine} ${contextLine}

Be concise. For each drug give: name, class, whether FDA approved, what it's approved for, which pathway slugs it connects to, a 2-sentence rationale, confidence level, one next step, and one reference.

Respond with ONLY a JSON object, no markdown, no code fences:
{"hypotheses":[{"drug_name":"","drug_class":"","fda_approved":true,"approved_for":"","pathway_connections":[""],"title":"","rationale":"","confidence":"","suggested_next_steps":[""],"key_references":[""]}]}

Pathway slugs: hif-pseudohypoxia, epigenetic-dysregulation, vegf-signaling, mtor-pi3k-akt, glutamine-dependency, oxidative-stress-ros, autophagy-survival`,
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
    // Strip any markdown fences
    jsonStr = jsonStr
      .replace(/^```(?:json)?\s*\n?/, "")
      .replace(/\n?```\s*$/, "");

    // Extract from first { to last }
    const firstBrace = jsonStr.indexOf("{");
    const lastBrace = jsonStr.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace !== -1) {
      jsonStr = jsonStr.slice(firstBrace, lastBrace + 1);
    }

    // If JSON was truncated (missing closing brackets), try to fix it
    let result;
    try {
      result = JSON.parse(jsonStr);
    } catch {
      // Try to repair truncated JSON by closing open arrays/objects
      let repaired = jsonStr;
      // Count open brackets
      const openBraces =
        (repaired.match(/{/g) || []).length -
        (repaired.match(/}/g) || []).length;
      const openBrackets =
        (repaired.match(/\[/g) || []).length -
        (repaired.match(/]/g) || []).length;

      // Remove any trailing partial entry (incomplete object)
      const lastCompleteObj = repaired.lastIndexOf("}");
      if (lastCompleteObj > 0) {
        repaired = repaired.slice(0, lastCompleteObj + 1);
      }

      // Close remaining brackets
      for (let i = 0; i < openBrackets; i++) repaired += "]";
      for (let i = 0; i < openBraces; i++) repaired += "}";

      result = JSON.parse(repaired);
    }

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
