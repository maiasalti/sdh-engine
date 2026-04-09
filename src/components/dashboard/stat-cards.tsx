import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill, FlaskConical, Lightbulb, Network } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
};

function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function StatCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Drug Candidates"
        value={15}
        description="Across 7 pathways"
        icon={<Pill className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="Pathways Mapped"
        value={7}
        description="Druggable downstream pathways"
        icon={<Network className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="Molecular Targets"
        value={16}
        description="Identified drug targets"
        icon={<FlaskConical className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="AI Hypotheses"
        value={0}
        description="Generate your first hypothesis"
        icon={<Lightbulb className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}
