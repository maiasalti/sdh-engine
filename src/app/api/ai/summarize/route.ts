import { getClaudeClient } from "@/lib/claude";
import { SDH_BIOLOGY_CONTEXT } from "@/data/seed/sdh-biology";

export async function POST(request: Request) {
  try {
    const { title, abstract, type } = await request.json();

    if (!title) {
      return Response.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const client = getClaudeClient();

    const contentType = type === "trial" ? "clinical trial" : "research paper";

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 2000,
      system: SDH_BIOLOGY_CONTEXT,
      messages: [
        {
          role: "user",
          content: `Summarize this ${contentType} for a patient with SDH-deficient GIST who is researching drug repurposing options.

Title: ${title}
${abstract ? `Abstract: ${abstract}` : ""}

Provide a summary focused on:
1. What was studied and the key findings
2. Any drug repurposing implications for SDH-deficient diseases
3. Relevance rating for SDH-deficient disease research

Respond ONLY with valid JSON:
{
  "plain_language_summary": "<2-3 sentence summary in accessible language>",
  "repurposing_implications": "<1-2 sentences on drug repurposing relevance, or 'No direct repurposing implications identified'>",
  "relevance": "<high|medium|low|none>",
  "key_takeaway": "<one sentence key takeaway>"
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
    const jsonMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }

    const summary = JSON.parse(jsonStr);

    return Response.json(summary);
  } catch (error) {
    console.error("AI Summarize error:", error);
    return Response.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}
