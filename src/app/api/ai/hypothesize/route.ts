import { getClaudeClient } from "@/lib/claude";
import { SDH_BIOLOGY_CONTEXT } from "@/data/seed/sdh-biology";
import { SEED_DRUGS } from "@/data/seed/drugs";
import { SEED_PATHWAYS } from "@/data/seed/pathways";

export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const { pathwaySlug, context } = await request.json();

    const client = getClaudeClient();

    const drugNames = SEED_DRUGS.map((d) => d.name).join(", ");

    const pathwayFocus = pathwaySlug
      ? SEED_PATHWAYS.find((p) => p.slug === pathwaySlug)
      : null;

    const focusLine = pathwayFocus
      ? `Focus on the "${pathwayFocus.name}" pathway.`
      : "";

    const contextLine = context ? `User constraint: ${context}` : "";

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      system: SDH_BIOLOGY_CONTEXT,
      messages: [
        {
          role: "user",
          content: `Propose 3 NEW drug repurposing candidates for SDH-deficient tumors NOT in this list: ${drugNames}.

${focusLine} ${contextLine}

Respond ONLY with valid JSON:
{"hypotheses":[{"drug_name":"<name>","drug_class":"<class>","fda_approved":true/false,"approved_for":"<indication>","pathway_connections":["<slug>"],"title":"<title>","rationale":"<3 sentence rationale>","confidence":"high|medium|low|speculative","suggested_next_steps":["<step>"],"key_references":["<evidence>"]}]}

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
    const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
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
