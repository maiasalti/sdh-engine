"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  FlaskConical,
  Search,
  Loader2,
  ExternalLink,
  MapPin,
  Users,
  Calendar,
} from "lucide-react";
import { SDH_TRIAL_QUERIES } from "@/lib/apis/clinicaltrials";
import { cn } from "@/lib/utils";

type Trial = {
  nctId: string;
  title: string;
  status: string;
  phase: string;
  conditions: string[];
  interventions: string[];
  locations: string[];
  enrollment: number | null;
  startDate: string | null;
  completionDate: string | null;
  url: string;
};

const STATUS_COLORS: Record<string, string> = {
  RECRUITING:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "ACTIVE, NOT RECRUITING":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  COMPLETED:
    "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  "NOT YET RECRUITING":
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  WITHDRAWN:
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  TERMINATED:
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

function TrialCard({ trial }: { trial: Trial }) {
  return (
    <Card>
      <CardContent className="pt-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <a
              href={trial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold hover:underline inline-flex items-start gap-1"
            >
              {trial.title}
              <ExternalLink className="h-3 w-3 flex-shrink-0 mt-0.5" />
            </a>
          </div>
          <Badge
            variant="secondary"
            className={cn(
              "text-[10px] whitespace-nowrap",
              STATUS_COLORS[trial.status] || "bg-muted"
            )}
          >
            {trial.status}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="font-mono">{trial.nctId}</span>
          {trial.phase !== "N/A" && (
            <Badge variant="outline" className="text-[10px]">
              {trial.phase}
            </Badge>
          )}
          {trial.enrollment && (
            <span className="inline-flex items-center gap-1">
              <Users className="h-3 w-3" />
              {trial.enrollment} enrolled
            </span>
          )}
          {trial.startDate && (
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {trial.startDate}
            </span>
          )}
        </div>

        {trial.conditions.length > 0 && (
          <div>
            <p className="text-[10px] font-medium text-muted-foreground mb-1">
              Conditions
            </p>
            <div className="flex flex-wrap gap-1">
              {trial.conditions.map((c) => (
                <Badge key={c} variant="outline" className="text-[10px]">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {trial.interventions.length > 0 && (
          <div>
            <p className="text-[10px] font-medium text-muted-foreground mb-1">
              Interventions
            </p>
            <div className="flex flex-wrap gap-1">
              {trial.interventions.map((i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="text-[10px]"
                >
                  {i}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {trial.locations.length > 0 && (
          <div className="flex items-start gap-1">
            <MapPin className="h-3 w-3 text-muted-foreground mt-0.5" />
            <p className="text-[10px] text-muted-foreground">
              {trial.locations.join(" | ")}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function TrialsPage() {
  const [query, setQuery] = useState("");
  const [trials, setTrials] = useState<Trial[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function search(searchQuery?: string) {
    const q = searchQuery || query;
    setLoading(true);
    setSearched(true);

    try {
      const params = q ? `?q=${encodeURIComponent(q)}` : "";
      const res = await fetch(`/api/trials/search${params}`);
      if (res.ok) {
        const data = await res.json();
        setTrials(data.trials || []);
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
        <h2 className="text-2xl font-bold tracking-tight">
          Clinical Trial Finder
        </h2>
        <p className="text-muted-foreground">
          Find active clinical trials relevant to SDH-deficient cancers
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
                placeholder="Search clinical trials (e.g., GIST belzutifan)..."
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
              {SDH_TRIAL_QUERIES.map((q) => (
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
            Searching ClinicalTrials.gov...
          </span>
        </div>
      )}

      {!loading && trials.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {trials.length} trials found
          </p>
          {trials.map((trial) => (
            <TrialCard key={trial.nctId} trial={trial} />
          ))}
        </div>
      )}

      {!loading && searched && trials.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <FlaskConical className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold">No trials found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search query or use one of the quick searches.
            </p>
          </CardContent>
        </Card>
      )}

      {!searched && (
        <Card>
          <CardContent className="py-12 text-center">
            <FlaskConical className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold">
              Find relevant clinical trials
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Search ClinicalTrials.gov for active trials related to
              SDH-deficient cancers, specific drugs, or conditions. Click a
              quick search to get started.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
