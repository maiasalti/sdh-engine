import { getClaudeClient } from "@/lib/claude";
import { SDH_BIOLOGY_CONTEXT } from "@/data/seed/sdh-biology";
import { SEED_DRUGS } from "@/data/seed/drugs";
import { SEED_PATHWAYS } from "@/data/seed/pathways";

export async function POST(request: Request) {
  try {
    const { pathwaySlug, context } = await request.json();

    const client = getClaudeClient();

    const currentDrugs = SEED_DRUGS.map(
      (d) =>
        `- ${d.name} (${d.drug_class}) — targets: ${d.pathway_slugs.join(", ")} — status: ${d.status}`
    ).join("\n");

    const pathwayFocus = pathwaySlug
      ? SEED_PATHWAYS.find((p) => p.slug === pathwaySlug)
      : null;

    const focusInstruction = pathwayFocus
      ? `\n\nFOCUS: Generate hypotheses specifically targeting the "${pathwayFocus.name}" pathway. ${pathwayFocus.description}`
      : "\n\nGenerate hypotheses across any relevant pathway.";

    const contextInstruction = context
      ? `\n\nADDITIONAL CONTEXT FROM USER: ${context}`
      : "";

    const stream = client.messages.stream({
      model: "claude-opus-4-6",
      max_tokens: 8000,
      thinking: { type: "adaptive" },
      system: SDH_BIOLOGY_CONTEXT,
      messages: [
        {
          role: "user",
          content: `You are generating novel drug repurposing hypotheses for SDH-deficient diseases.

CURRENT DRUG CANDIDATES ALREADY IN OUR DATABASE:
${currentDrugs}

YOUR TASK: Propose 3-5 NEW drug repurposing candidates that are NOT already in our database. For each, provide a novel mechanistic rationale connecting the drug to SDH deficiency biology.

Think creatively about:
- Drugs targeting synthetic lethal interactions with SDH loss
- Drugs from other oncometabolite-driven cancers (IDH-mutant, FH-deficient)
- Metabolic vulnerabilities unique to SDH-deficient cells
- Immune checkpoint interactions with the pseudohypoxic microenvironment
- Drugs targeting the epigenetic consequences of succinate accumulation
- Combination strategies that could work synergistically
${focusInstruction}${contextInstruction}

Respond ONLY with valid JSON in this exact format:
{
  "hypotheses": [
    {
      "drug_name": "<generic drug name>",
      "drug_class": "<drug class>",
      "fda_approved": <true/false>,
      "approved_for": "<current approved indication or 'Not approved'>",
      "pathway_connections": ["<pathway slug 1>", "<pathway slug 2>"],
      "title": "<concise hypothesis title>",
      "rationale": "<detailed 3-5 sentence mechanistic rationale explaining WHY this drug could work in SDH-deficient tumors>",
      "confidence": "<high|medium|low|speculative>",
      "suggested_next_steps": ["<step 1>", "<step 2>"],
      "key_references": ["<brief description of supporting evidence if any>"]
    }
  ]
}

Use these pathway slugs: hif-pseudohypoxia, epigenetic-dysregulation, vegf-signaling, mtor-pi3k-akt, glutamine-dependency, oxidative-stress-ros, autophagy-survival`,
        },
      ],
    });

    const finalMessage = await stream.finalMessage();

    const textBlock = finalMessage.content.find((b) => b.type === "text");
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
    return Response.json(
      { error: "Failed to generate hypotheses" },
      { status: 500 }
    );
  }
}
