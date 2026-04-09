import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SEED_DRUGS } from "@/data/seed/drugs";
import { SEED_TARGETS } from "@/data/seed/targets";
import { SEED_PATHWAYS } from "@/data/seed/pathways";
import {
  STATUS_COLORS,
  PATHWAY_COLORS,
} from "@/lib/scoring/constants";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ExternalLink,
  Pill,
  Target,
  Network,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { AiAnalysis } from "@/components/drugs/ai-analysis";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";

function getDrugById(drugId: string) {
  return SEED_DRUGS.find(
    (d) => d.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === drugId
  );
}

export default async function DrugDetailPage({
  params,
}: {
  params: Promise<{ drugId: string }>;
}) {
  const { drugId } = await params;
  const drug = getDrugById(drugId);

  if (!drug) {
    notFound();
  }

  const relatedPathways = SEED_PATHWAYS.filter((p) =>
    drug.pathway_slugs.includes(p.slug)
  );
  const relatedTargets = SEED_TARGETS.filter((t) =>
    drug.target_gene_symbols.includes(t.gene_symbol)
  );

  const scoreColor =
    drug.evidence_score >= 70
      ? "text-green-500"
      : drug.evidence_score >= 50
        ? "text-amber-500"
        : drug.evidence_score >= 30
          ? "text-orange-500"
          : "text-red-500";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/drugs"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Drug Candidates
        </Link>

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{drug.name}</h2>
            {drug.brand_names.length > 0 && (
              <p className="text-muted-foreground">
                {drug.brand_names.join(", ")}
              </p>
            )}
            <p className="mt-1 text-sm text-muted-foreground">
              {drug.drug_class}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Evidence Score</p>
              <p className={cn("text-3xl font-bold tabular-nums", scoreColor)}>
                {drug.evidence_score}
              </p>
            </div>
            <Badge
              variant="secondary"
              className={cn("text-xs", STATUS_COLORS[drug.status])}
            >
              {drug.status.replace("_", " ")}
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Mechanism of Action */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Pill className="h-4 w-4" />
                Mechanism of Action
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                {drug.mechanism_of_action}
              </p>
            </CardContent>
          </Card>

          {/* Pathway Connections */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Network className="h-4 w-4" />
                Pathway Connections
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {relatedPathways.map((pathway) => (
                <div
                  key={pathway.slug}
                  className="rounded-lg border border-border p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-medium",
                        PATHWAY_COLORS[pathway.slug]
                      )}
                    >
                      {pathway.name}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {pathway.description}
                  </p>
                  <div className="mt-2">
                    <p className="text-xs font-medium text-muted-foreground">
                      Upstream event:
                    </p>
                    <p className="text-xs">{pathway.upstream_event}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-medium text-muted-foreground">
                      Downstream effects:
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {pathway.downstream_effects.map((effect) => (
                        <Badge
                          key={effect}
                          variant="outline"
                          className="text-[10px]"
                        >
                          {effect}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Molecular Targets */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Target className="h-4 w-4" />
                Molecular Targets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {relatedTargets.map((target) => (
                <div
                  key={target.gene_symbol}
                  className="rounded-lg border border-border p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-sm font-bold">
                        {target.gene_symbol}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {target.name}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      {target.target_type}
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {target.description}
                  </p>
                  {target.uniprot_id && (
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      UniProt: {target.uniprot_id}
                    </p>
                  )}
                </div>
              ))}
              {relatedTargets.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No specific targets mapped yet.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                {drug.fda_approved ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                )}
                <span className="text-sm">
                  {drug.fda_approved
                    ? "FDA Approved"
                    : "Not FDA Approved"}
                </span>
              </div>

              {drug.approved_indications.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Approved Indications
                  </p>
                  <ul className="space-y-1">
                    {drug.approved_indications.map((indication) => (
                      <li
                        key={indication}
                        className="text-xs text-muted-foreground"
                      >
                        {indication}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Separator />

              {drug.chembl_id && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    ChEMBL ID
                  </span>
                  <span className="font-mono text-xs">{drug.chembl_id}</span>
                </div>
              )}
              {drug.pubchem_cid && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    PubChem CID
                  </span>
                  <span className="font-mono text-xs">{drug.pubchem_cid}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Evidence placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Evidence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Evidence from PubMed, OpenTargets, and ChEMBL will appear here
                once external data integration is enabled.
              </p>
              <div className="mt-3 rounded-lg border border-dashed border-border p-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Coming in Phase 3
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Analysis */}
          <MedicalDisclaimer variant="compact" className="mb-2" />
          <AiAnalysis drug={drug} />
        </div>
      </div>
    </div>
  );
}
