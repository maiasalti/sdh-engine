import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Research Feed</h2>
        <p className="text-muted-foreground">
          Search PubMed for SDH-deficient disease research with AI-powered
          summaries
        </p>
      </div>

      <Card>
        <CardContent className="py-12 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/30" />
          <h3 className="mt-4 text-lg font-semibold">Coming in Phase 3</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            This page will search PubMed with pre-configured queries for
            SDH-deficient diseases, display papers with abstracts, and offer
            AI-powered plain-language summaries focused on drug repurposing
            implications.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {[
              "SDH-deficient GIST",
              "succinate dehydrogenase cancer therapy",
              "pseudohypoxia drug target",
              "SDH paraganglioma treatment",
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
