import { searchPubMed, fetchArticles, searchSDHArticles } from "@/lib/apis/pubmed";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const maxResults = Math.min(
      parseInt(searchParams.get("max") || "20", 10),
      50
    );

    let articles;

    if (query) {
      const pmids = await searchPubMed(query, maxResults);
      articles = await fetchArticles(pmids);
    } else {
      articles = await searchSDHArticles(maxResults);
    }

    return Response.json({ articles, count: articles.length });
  } catch (error) {
    console.error("PubMed search error:", error);
    return Response.json(
      { error: "Failed to search PubMed" },
      { status: 500 }
    );
  }
}
