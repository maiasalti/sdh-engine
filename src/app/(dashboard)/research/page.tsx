"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Search,
  Loader2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SDH_QUERIES } from "@/lib/apis/pubmed";
import { cn } from "@/lib/utils";

type Article = {
  pmid: string;
  title: string;
  authors: string[];
  journal: string;
  pubDate: string;
  abstract: string;
};

type AiSummary = {
  plain_language_summary: string;
  repurposing_implications: string;
  relevance: string;
  key_takeaway: string;
};

const RELEVANCE_COLORS: Record<string, string> = {
  high: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  low: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  none: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
};

function PaperCard({ article }: { article: Article }) {
  const [summary, setSummary] = useState<AiSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  async function summarize() {
    setLoading(true);
    try {
      const res = await fetch("/api/ai/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: article.title,
          abstract: article.abstract,
          type: "paper",
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setSummary(data);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${article.pmid}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline inline-flex items-center gap-1"
            >
              {article.title}
              <ExternalLink className="h-3 w-3 flex-shrink-0" />
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              {article.authors.slice(0, 3).join(", ")}
              {article.authors.length > 3 && " et al."}
            </p>
            <p className="text-xs text-muted-foreground">
              {article.journal} - {article.pubDate}
            </p>
          </div>
          <span className="text-[10px] text-muted-foreground font-mono">
            PMID: {article.pmid}
          </span>
        </div>

        {/* Abstract toggle */}
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            {expanded ? "Hide abstract" : "Show abstract"}
          </button>
          {expanded && (
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              {article.abstract}
            </p>
          )}
        </div>

        {/* AI Summary */}
        {!summary && (
          <button
            onClick={summarize}
            disabled={loading}
            className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-muted transition-colors"
          >
            {loading ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <Sparkles className="h-3 w-3" />
            )}
            {loading ? "Summarizing..." : "Summarize with AI"}
          </button>
        )}

        {summary && (
          <div className="rounded-lg bg-muted/50 p-3 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-[10px] font-medium">AI Summary</span>
              <Badge
                variant="secondary"
                className={cn(
                  "text-[10px]",
                  RELEVANCE_COLORS[summary.relevance]
                )}
              >
                {summary.relevance} relevance
              </Badge>
            </div>
            <p className="text-xs leading-relaxed">
              {summary.plain_language_summary}
            </p>
            {summary.repurposing_implications !==
              "No direct repurposing implications identified" && (
              <div>
                <p className="text-[10px] font-medium text-muted-foreground">
                  Repurposing implications:
                </p>
                <p className="text-xs">{summary.repurposing_implications}</p>
              </div>
            )}
            <p className="text-[10px] text-muted-foreground italic">
              {summary.key_takeaway}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ResearchPage() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function search(searchQuery?: string) {
    const q = searchQuery || query;
    setLoading(true);
    setSearched(true);

    try {
      const params = q ? `?q=${encodeURIComponent(q)}` : "";
      const res = await fetch(`/api/pubmed/search${params}`);
      if (res.ok) {
        const data = await res.json();
        setArticles(data.articles || []);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Research Feed</h2>
        <p className="text-muted-foreground">
          Search PubMed for SDH-deficient disease research with AI-powered
          summaries
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && search()}
                placeholder="Search PubMed (e.g., SDH-deficient GIST belzutifan)..."
                className="pl-10"
              />
            </div>
            <button
              onClick={() => search()}
              disabled={loading}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Search"
              )}
            </button>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-2">
              Quick searches:
            </p>
            <div className="flex flex-wrap gap-2">
              {SDH_QUERIES.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setQuery(q);
                    search(q);
                  }}
                  className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground hover:bg-muted/80 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          <span className="ml-2 text-sm text-muted-foreground">
            Searching PubMed...
          </span>
        </div>
      )}

      {!loading && articles.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {articles.length} results
          </p>
          {articles.map((article) => (
            <PaperCard key={article.pmid} article={article} />
          ))}
        </div>
      )}

      {!loading && searched && articles.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold">No results found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search query or use one of the quick searches
              above.
            </p>
          </CardContent>
        </Card>
      )}

      {!searched && (
        <Card>
          <CardContent className="py-12 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold">
              Search PubMed for SDH research
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter a search query or click a quick search to find relevant
              papers. Use the AI summarize button on any paper to get a
              plain-language summary focused on drug repurposing.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
