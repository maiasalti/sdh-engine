import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DrugCard } from "@/components/drugs/drug-card";
import { SEED_DRUGS } from "@/data/seed/drugs";
import { STATUS_ORDER } from "@/lib/scoring/constants";

export default async function DrugsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const pathwayFilter =
    typeof params.pathway === "string" ? params.pathway : null;
  const statusFilter =
    typeof params.status === "string" ? params.status : null;
  const sortBy =
    typeof params.sort === "string" ? params.sort : "score";

  let drugs = [...SEED_DRUGS];

  if (pathwayFilter) {
    drugs = drugs.filter((d) => d.pathway_slugs.includes(pathwayFilter));
  }
  if (statusFilter) {
    drugs = drugs.filter((d) => d.status === statusFilter);
  }

  if (sortBy === "score") {
    drugs.sort((a, b) => b.evidence_score - a.evidence_score);
  } else if (sortBy === "name") {
    drugs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "status") {
    drugs.sort(
      (a, b) => (STATUS_ORDER[a.status] || 99) - (STATUS_ORDER[b.status] || 99)
    );
  }

  const statuses = ["established", "clinical_trial", "preclinical", "theoretical"];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Drug Candidates</h2>
        <p className="text-muted-foreground">
          {drugs.length} candidates mapped to SDH-deficient disease pathways
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <a href="/drugs">
          <Badge
            variant={!pathwayFilter && !statusFilter ? "default" : "outline"}
            className="cursor-pointer"
          >
            All ({SEED_DRUGS.length})
          </Badge>
        </a>
        {statuses.map((status) => {
          const count = SEED_DRUGS.filter((d) => d.status === status).length;
          return (
            <a key={status} href={`/drugs?status=${status}`}>
              <Badge
                variant={statusFilter === status ? "default" : "outline"}
                className="cursor-pointer"
              >
                {status.replace("_", " ")} ({count})
              </Badge>
            </a>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {drugs.map((drug, i) => (
          <DrugCard key={drug.name} drug={drug} index={i} />
        ))}
      </div>

      {drugs.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">
              No drug candidates match the current filters.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
