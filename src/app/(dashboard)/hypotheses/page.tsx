"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Sparkles, Loader2 } from "lucide-react";
import { SEED_PATHWAYS } from "@/data/seed/pathways";
import { PATHWAY_COLORS } from "@/lib/scoring/constants";
import { cn } from "@/lib/utils";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";

type Hypothesis = {
  drug_name: string;
  drug_class: string;
  fda_approved: boolean;
  approved_for: string;
  pathway_connections: string[];
  title: string;
  rationale: string;
  confidence: string;
  suggested_next_steps: string[];
  key_references: string[];
};

const CONFIDENCE_COLORS: Record<string, string> = {
  high: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  low: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  speculative:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

export default function HypothesesPage() {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);
  const [context, setContext] = useState("");
  const [hypotheses, setHypotheses] = useState<Hypothesis[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generateHypotheses() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/hypothesize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pathwaySlug: selectedPathway,
          context: context || undefined,
        }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      setHypotheses(data.hypotheses || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate hypotheses"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          AI Hypothesis Generator
        </h2>
        <p className="text-muted-foreground">
          Generate novel drug repurposing hypotheses using AI analysis of SDH
          deficiency pathways
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Generate New Hypotheses
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Focus Pathway</label>
            <p className="text-xs text-muted-foreground mb-2">
              Select a pathway to focus the AI analysis on, or leave blank for
              broad analysis
            </p>
            <div className="flex flex-wrap gap-2">
              {SEED_PATHWAYS.map((p) => (
                <button
                  key={p.slug}
                  onClick={() =>
                    setSelectedPathway(
                      selectedPathway === p.slug ? null : p.slug
                    )
                  }
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-all",
                    selectedPathway === p.slug
                      ? cn(PATHWAY_COLORS[p.slug], "ring-2 ring-primary")
                      : cn(PATHWAY_COLORS[p.slug], "opacity-60 hover:opacity-100")
                  )}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Additional Context</label>
            <p className="text-xs text-muted-foreground mb-2">
              Optionally provide focus areas (e.g., &quot;FDA-approved oral drugs
              only&quot; or &quot;drugs that cross the blood-brain barrier&quot;)
            </p>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Optional: add constraints or focus areas..."
              className="w-full rounded-md border border-border bg-background p-3 text-sm placeholder:text-muted-foreground/50"
              rows={3}
            />
          </div>

          <button
            onClick={generateHypotheses}
            disabled={loading}
            className={cn(
              "w-full rounded-md px-4 py-3 text-sm font-medium transition-colors",
              loading
                ? "bg-primary/20 text-primary/50 cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
                Generating hypotheses (this may take 30-60 seconds)...
              </>
            ) : (
              <>
                <Lightbulb className="mr-2 inline h-4 w-4" />
                Generate Hypotheses
              </>
            )}
          </button>

          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {hypotheses.length > 0 && (
        <div className="space-y-4">
          <MedicalDisclaimer variant="inline" />
          <h3 className="text-lg font-semibold">
            Generated Hypotheses ({hypotheses.length})
          </h3>
          {hypotheses.map((h, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-base">{h.title}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {h.drug_name} — {h.drug_class}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={cn("text-[10px]", CONFIDENCE_COLORS[h.confidence])}
                    >
                      {h.confidence}
                    </Badge>
                    {h.fda_approved && (
                      <Badge
                        variant="outline"
                        className="text-[10px] border-green-500 text-green-500"
                      >
                        FDA Approved
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Currently approved for
                  </p>
                  <p className="text-sm">{h.approved_for}</p>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Pathway connections
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {h.pathway_connections.map((slug) => (
                      <span
                        key={slug}
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-medium",
                          PATHWAY_COLORS[slug] || "bg-gray-100 text-gray-800"
                        )}
                      >
                        {slug.replace(/-/g, " ")}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Rationale
                  </p>
                  <p className="text-sm leading-relaxed">{h.rationale}</p>
                </div>

                {h.suggested_next_steps?.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">
                      Suggested next steps
                    </p>
                    <ul className="space-y-1">
                      {h.suggested_next_steps.map((step, j) => (
                        <li key={j} className="text-xs text-muted-foreground">
                          {j + 1}. {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {h.key_references?.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">
                      Supporting evidence
                    </p>
                    <ul className="space-y-1">
                      {h.key_references.map((ref, j) => (
                        <li
                          key={j}
                          className="text-[10px] text-muted-foreground"
                        >
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {hypotheses.length === 0 && !loading && (
        <Card>
          <CardContent className="py-12 text-center">
            <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <h3 className="mt-4 text-lg font-semibold">No hypotheses yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Select a pathway (optional), add any constraints, and click
              Generate to have Claude propose novel drug repurposing candidates.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
