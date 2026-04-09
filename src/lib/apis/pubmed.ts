const BASE_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";

export type PubMedArticle = {
  pmid: string;
  title: string;
  authors: string[];
  journal: string;
  pubDate: string;
  abstract: string;
};

function getApiKeyParam(): string {
  const key = process.env.NCBI_API_KEY;
  return key ? `&api_key=${key}` : "";
}

export async function searchPubMed(
  query: string,
  maxResults: number = 20
): Promise<string[]> {
  const url = `${BASE_URL}/esearch.fcgi?db=pubmed&retmode=json&retmax=${maxResults}&sort=date&term=${encodeURIComponent(query)}${getApiKeyParam()}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`PubMed search failed: ${res.status}`);

  const data = await res.json();
  return data.esearchresult?.idlist || [];
}

export async function fetchArticles(
  pmids: string[]
): Promise<PubMedArticle[]> {
  if (pmids.length === 0) return [];

  const url = `${BASE_URL}/efetch.fcgi?db=pubmed&retmode=xml&id=${pmids.join(",")}${getApiKeyParam()}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`PubMed fetch failed: ${res.status}`);

  const xml = await res.text();
  return parseArticlesXml(xml);
}

function parseArticlesXml(xml: string): PubMedArticle[] {
  const articles: PubMedArticle[] = [];

  // Simple XML parsing without a library — extract article blocks
  const articleBlocks = xml.split("<PubmedArticle>").slice(1);

  for (const block of articleBlocks) {
    const pmid = extractTag(block, "PMID") || "";
    const title = extractTag(block, "ArticleTitle") || "Untitled";
    const journal = extractTag(block, "Title") || "";
    const abstractText = extractAbstract(block);

    // Extract authors
    const authors: string[] = [];
    const authorMatches = block.matchAll(
      /<Author[^>]*>[\s\S]*?<LastName>(.*?)<\/LastName>[\s\S]*?<Initials>(.*?)<\/Initials>[\s\S]*?<\/Author>/g
    );
    for (const match of authorMatches) {
      authors.push(`${match[1]} ${match[2]}`);
    }

    // Extract date
    const year = extractTag(block, "Year") || "";
    const month = extractTag(block, "Month") || "";
    const pubDate = month ? `${year} ${month}` : year;

    if (pmid) {
      articles.push({
        pmid,
        title: cleanHtml(title),
        authors,
        journal,
        pubDate,
        abstract: cleanHtml(abstractText),
      });
    }
  }

  return articles;
}

function extractTag(xml: string, tag: string): string | null {
  const match = xml.match(new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, "s"));
  return match ? match[1].trim() : null;
}

function extractAbstract(block: string): string {
  // Abstract can have multiple AbstractText elements
  const texts: string[] = [];
  const matches = block.matchAll(
    /<AbstractText[^>]*>([\s\S]*?)<\/AbstractText>/g
  );
  for (const match of matches) {
    texts.push(match[1].trim());
  }
  return texts.join(" ") || "No abstract available.";
}

function cleanHtml(text: string): string {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

/** Pre-configured SDH-relevant search queries */
export const SDH_QUERIES = [
  "SDH-deficient GIST",
  "succinate dehydrogenase deficient neoplasm",
  "SDH paraganglioma treatment",
  "succinate dehydrogenase cancer therapy",
  "pseudohypoxia drug target",
  "SDH-deficient renal cell carcinoma",
];

export async function searchSDHArticles(
  maxResults: number = 20
): Promise<PubMedArticle[]> {
  const query =
    '("succinate dehydrogenase"[MeSH] OR "SDH-deficient") AND ("neoplasms"[MeSH] OR "drug therapy"[MeSH] OR "therapy")';
  const pmids = await searchPubMed(query, maxResults);
  return fetchArticles(pmids);
}
