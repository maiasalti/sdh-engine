"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SeedDrug } from "@/data/seed/drugs";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";

type ScoreResult = {
  overall_score: number;
  breakdown: {
    mechanistic_rationale: number;
    preclinical_evidence: number;
    clinical_evidence: number;
    sdh_specificity: number;
    druggability: number;
  };
  reasoning: string;
  key_strengths: string[];
  key_gaps: string[];
};

const DIMENSION_LABELS: Record<string, string> = {
  mechanistic_rationale: "Mechanistic Rationale",
  preclinical_evidence: "Preclinical Evidence",
  clinical_evidence: "Clinical Evidence",
  sdh_specificity: "SDH Specificity",
  druggability: "Druggability",
};

function ScoreBar({ label, score }: { label: string; score: number }) {
  const color =
    score >= 70
      ? "bg-green-500"
      : score >= 50
        ? "bg-amber-500"
        : score >= 30
          ? "bg-orange-500"
          : "bg-red-500";

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-xs font-medium tabular-nums">{score}/100</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full transition-all", color)}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export function AiAnalysis({ drug }: { drug: SeedDrug }) {
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runAnalysis() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drug }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to run analysis"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="h-4 w-4" />
          AI Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!result && !loading && (
          <>
            <p className="text-sm text-muted-foreground mb-3">
              Have Claude analyze this drug&apos;s repurposing potential for
              SDH-deficient diseases.
            </p>
            <button
              onClick={runAnalysis}
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Sparkles className="mr-2 inline h-4 w-4" />
              Analyze with AI
            </button>
          </>
        )}

        {loading && (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            <span className="ml-2 text-sm text-muted-foreground">
              Analyzing...
            </span>
          </div>
        )}

        {error && (
          <div className="space-y-2">
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
            <button
              onClick={runAnalysis}
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Retry
            </button>
          </div>
        )}

        {result && (
          <div className="space-y-4">
            {/* Overall score */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground">AI Evidence Score</p>
              <p
                className={cn(
                  "text-4xl font-bold tabular-nums",
                  result.overall_score >= 70
                    ? "text-green-500"
                    : result.overall_score >= 50
                      ? "text-amber-500"
                      : result.overall_score >= 30
                        ? "text-orange-500"
                        : "text-red-500"
                )}
              >
                {result.overall_score}
              </p>
            </div>

            {/* Breakdown */}
            <div className="space-y-2">
              {Object.entries(result.breakdown).map(([key, score]) => (
                <ScoreBar
                  key={key}
                  label={DIMENSION_LABELS[key] || key}
                  score={score}
                />
              ))}
            </div>

            {/* Reasoning */}
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">
                Assessment
              </p>
              <p className="text-sm leading-relaxed">{result.reasoning}</p>
            </div>

            {/* Strengths */}
            {result.key_strengths?.length > 0 && (
              <div>
                <p className="text-xs font-medium text-green-500 mb-1">
                  Key Strengths
                </p>
                <ul className="space-y-1">
                  {result.key_strengths.map((s, i) => (
                    <li key={i} className="text-xs text-muted-foreground">
                      + {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gaps */}
            {result.key_gaps?.length > 0 && (
              <div>
                <p className="text-xs font-medium text-amber-500 mb-1">
                  Key Gaps
                </p>
                <ul className="space-y-1">
                  {result.key_gaps.map((g, i) => (
                    <li key={i} className="text-xs text-muted-foreground">
                      - {g}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <MedicalDisclaimer variant="inline" />

            {/* Re-run */}
            <button
              onClick={runAnalysis}
              disabled={loading}
              className="w-full rounded-md border border-border px-4 py-2 text-xs text-muted-foreground hover:bg-muted transition-colors"
            >
              Re-run Analysis
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
