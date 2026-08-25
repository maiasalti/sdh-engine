"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Library, Search, ExternalLink, Sparkles } from "lucide-react";
import { PAPERS, PAPER_TOPICS, type CuratedPaper, type PaperTopic } from "@/data/papers";
import { cn } from "@/lib/utils";

type Filter = "All" | PaperTopic;
type SortKey = "recent" | "oldest";

const FILTERS: Filter[] = ["All", ...PAPER_TOPICS];

/** Papers with a `date` inside this window appear in the "Most recent" section. */
const RECENT_WINDOW_DAYS = 92; // ~3 months

/** Comparable sort value: prefer the precise date, fall back to the year. */
function sortValue(p: CuratedPaper): string {
  return p.date ?? String(p.year);
}

// Read the current time once on the client (cached so the store snapshot is
// stable) and 0 during SSR/prerender. This keeps Date.now() out of the render
// path — satisfying React's purity rule — while still computing the "recent"
// window against the real current date with no hydration mismatch.
let cachedNow = 0;
function getClientNow() {
  if (cachedNow === 0) cachedNow = Date.now();
  return cachedNow;
}
const noop = () => () => {};
function useClientNow() {
  return useSyncExternalStore(noop, getClientNow, () => 0);
}

function PaperCard({ paper }: { paper: CuratedPaper }) {
  const href = `https://doi.org/${paper.doi}`;
  return (
    <Card>
      <CardContent className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-base font-semibold leading-snug hover:underline inline-flex items-start gap-1.5"
          >
            {paper.title}
            <ExternalLink className="h-3.5 w-3.5 mt-1 flex-shrink-0 text-muted-foreground" />
          </a>
          <Badge variant="secondary" className="flex-shrink-0">
            {paper.topic}
          </Badge>
        </div>

        <p className="text-xs text-muted-foreground">{paper.authors}</p>
        <p className="text-xs text-muted-foreground">
          {paper.journal} · {paper.year}
        </p>

        <p className="text-sm leading-relaxed">{paper.description}</p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
        >
          doi.org/{paper.doi}
          <ExternalLink className="h-3 w-3" />
        </a>
      </CardContent>
    </Card>
  );
}

export default function PapersPage() {
  const [topic, setTopic] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("recent");

  // Compute the recent window client-side so it's current at view time
  // (and to avoid a hydration mismatch from build-time prerendering).
  const now = useClientNow();

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: PAPERS.length };
    for (const t of PAPER_TOPICS) {
      map[t] = PAPERS.filter((p) => p.topic === t).length;
    }
    return map;
  }, []);

  const recentPapers = useMemo(() => {
    if (!now) return [];
    const cutoff = now - RECENT_WINDOW_DAYS * 24 * 60 * 60 * 1000;
    return PAPERS.filter((p) => {
      if (!p.date) return false;
      const t = Date.parse(p.date);
      return !Number.isNaN(t) && t >= cutoff;
    }).sort((a, b) => sortValue(b).localeCompare(sortValue(a)));
  }, [now]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = PAPERS.filter((p) => {
      const matchesTopic = topic === "All" || p.topic === topic;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesTopic && matchesQuery;
    });
    return filtered.sort((a, b) => {
      const cmp = sortValue(a).localeCompare(sortValue(b));
      return sort === "recent" ? -cmp : cmp;
    });
  }, [topic, query, sort]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Research Papers</h2>
        <p className="text-muted-foreground">
          A curated, filterable library of key academic papers on SDH-deficient
          GIST and the wider SDH-deficient tumour family. Each entry links out to
          the original via its DOI.
        </p>
      </div>

      {/* Most recent papers (only shown when something falls in the window) */}
      {recentPapers.length > 0 && (
        <section aria-labelledby="recent-heading" className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 id="recent-heading" className="text-sm font-semibold">
              Most recent papers
            </h3>
            <span className="text-xs text-muted-foreground">
              (last {Math.round(RECENT_WINDOW_DAYS / 30)} months)
            </span>
          </div>
          <div className="space-y-3">
            {recentPapers.map((paper) => (
              <PaperCard key={`recent-${paper.doi}`} paper={paper} />
            ))}
          </div>
        </section>
      )}

      {/* Filters + search + sort */}
      <Card>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search titles and descriptions..."
                aria-label="Search papers by title or description"
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-xs text-muted-foreground">
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="recent">Most recent</option>
                <option value="oldest">Least recent</option>
              </select>
            </div>
          </div>

          <div
            role="group"
            aria-label="Filter papers by topic"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => {
              const isActive = topic === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setTopic(f)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {f}
                  <span className="ml-1.5 opacity-60">{counts[f]}</span>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <p className="text-sm text-muted-foreground" aria-live="polite">
        Showing {visible.length} of {PAPERS.length} papers
      </p>

      {visible.length > 0 ? (
        <ul className="space-y-3">
          {visible.map((paper) => (
            <li key={paper.doi}>
              <PaperCard paper={paper} />
            </li>
          ))}
        </ul>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <Library className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold">No matching papers</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different topic filter or clear your search.
            </p>
          </CardContent>
        </Card>
      )}

      <p className="text-[10px] text-muted-foreground border-t border-border pt-4">
        Paper metadata sourced from PubMed. Please cite original authors via the
        linked DOIs.
      </p>
    </div>
  );
}
