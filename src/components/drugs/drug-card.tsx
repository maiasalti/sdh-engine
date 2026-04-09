import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STATUS_COLORS, PATHWAY_COLORS } from "@/lib/scoring/constants";
import { cn } from "@/lib/utils";
import type { SeedDrug } from "@/data/seed/drugs";

function ScoreBar({ score }: { score: number }) {
  const color =
    score >= 70
      ? "bg-green-500"
      : score >= 50
        ? "bg-amber-500"
        : score >= 30
          ? "bg-orange-500"
          : "bg-red-500";

  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-24 rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full transition-all", color)}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs font-medium tabular-nums">{score}</span>
    </div>
  );
}

export function DrugCard({
  drug,
  index,
}: {
  drug: SeedDrug;
  index: number;
}) {
  const drugId = drug.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <Link href={`/drugs/${drugId}`}>
      <Card className="transition-all hover:shadow-md hover:border-primary/30 cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-base">{drug.name}</CardTitle>
              {drug.brand_names.length > 0 && (
                <p className="text-xs text-muted-foreground">
                  {drug.brand_names.join(", ")}
                </p>
              )}
            </div>
            <Badge
              variant="secondary"
              className={cn(
                "text-[10px]",
                STATUS_COLORS[drug.status]
              )}
            >
              {drug.status.replace("_", " ")}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs text-muted-foreground">{drug.drug_class}</p>

          <div className="flex flex-wrap gap-1">
            {drug.pathway_slugs.map((slug) => (
              <span
                key={slug}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-medium",
                  PATHWAY_COLORS[slug] || "bg-gray-100 text-gray-800"
                )}
              >
                {slug
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Evidence Score
            </span>
            <ScoreBar score={drug.evidence_score} />
          </div>

          {drug.fda_approved && (
            <Badge variant="outline" className="text-[10px] border-green-500 text-green-500">
              FDA Approved
            </Badge>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
