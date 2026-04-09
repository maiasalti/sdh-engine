import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Sparkles } from "lucide-react";
import { SEED_PATHWAYS } from "@/data/seed/pathways";
import { PATHWAY_COLORS } from "@/lib/scoring/constants";
import { cn } from "@/lib/utils";

export default function HypothesesPage() {
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
                  disabled
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium opacity-50 cursor-not-allowed",
                    PATHWAY_COLORS[p.slug]
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
              Optionally provide focus areas (e.g., &quot;FDA-approved oral
              drugs only&quot; or &quot;drugs that cross the blood-brain
              barrier&quot;)
            </p>
            <textarea
              disabled
              placeholder="Optional: add constraints or focus areas..."
              className="w-full rounded-md border border-border bg-muted/50 p-3 text-sm placeholder:text-muted-foreground/50 cursor-not-allowed"
              rows={3}
            />
          </div>

          <button
            disabled
            className="w-full rounded-md bg-primary/20 px-4 py-3 text-sm font-medium text-primary/50 cursor-not-allowed"
          >
            <Lightbulb className="mr-2 inline h-4 w-4" />
            Generate Hypotheses (Coming in Phase 2)
          </button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="py-12 text-center">
          <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground/30" />
          <h3 className="mt-4 text-lg font-semibold">No hypotheses yet</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The AI hypothesis generator will use Claude to analyze SDH deficiency
            pathways and propose novel drug repurposing candidates with
            structured reasoning and confidence levels.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
