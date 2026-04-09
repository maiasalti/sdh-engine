import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical } from "lucide-react";

export default function TrialsPage() {
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

      <Card>
        <CardContent className="py-12 text-center">
          <FlaskConical className="mx-auto h-12 w-12 text-muted-foreground/30" />
          <h3 className="mt-4 text-lg font-semibold">Coming in Phase 3</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            This page will search ClinicalTrials.gov for active trials
            matching SDH-deficient tumors and the drug candidates in this
            engine. Trials will show status, phase, interventions, locations,
            and enrollment.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {[
              "SDH-deficient GIST",
              "Paraganglioma",
              "Pheochromocytoma",
              "Belzutifan",
              "Temozolomide + PGL",
            ].map((query) => (
              <span
                key={query}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {query}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
