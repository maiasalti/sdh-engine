import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PathwayDiagram } from "@/components/dashboard/pathway-diagram";
import { StatCards } from "@/components/dashboard/stat-cards";
import { DrugCard } from "@/components/drugs/drug-card";
import { SEED_DRUGS } from "@/data/seed/drugs";

export default function DashboardPage() {
  const topDrugs = [...SEED_DRUGS]
    .sort((a, b) => b.evidence_score - a.evidence_score)
    .slice(0, 6);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          SDH-deficient disease drug repurposing overview
        </p>
      </div>

      <StatCards />

      <Card>
        <CardHeader>
          <CardTitle>SDH Deficiency Molecular Cascade</CardTitle>
          <p className="text-sm text-muted-foreground">
            From mutation to druggable pathways — click a pathway to see
            targeting drugs
          </p>
        </CardHeader>
        <CardContent>
          <PathwayDiagram />
        </CardContent>
      </Card>

      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Top Drug Candidates by Evidence Score
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topDrugs.map((drug, i) => (
            <DrugCard key={drug.name} drug={drug} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
