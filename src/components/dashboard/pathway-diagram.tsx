"use client";

import { PATHWAY_COLORS } from "@/lib/scoring/constants";
import { cn } from "@/lib/utils";

type PathwayNode = {
  slug: string;
  label: string;
  shortLabel: string;
  drugCount: number;
};

const pathwayNodes: PathwayNode[] = [
  {
    slug: "hif-pseudohypoxia",
    label: "Pseudohypoxia / HIF Pathway",
    shortLabel: "HIF",
    drugCount: 3,
  },
  {
    slug: "epigenetic-dysregulation",
    label: "Epigenetic Dysregulation",
    shortLabel: "Epigenetic",
    drugCount: 5,
  },
  {
    slug: "vegf-signaling",
    label: "VEGF Signaling",
    shortLabel: "VEGF",
    drugCount: 3,
  },
  {
    slug: "mtor-pi3k-akt",
    label: "mTOR / PI3K / AKT",
    shortLabel: "mTOR",
    drugCount: 3,
  },
  {
    slug: "glutamine-dependency",
    label: "Glutamine Dependency",
    shortLabel: "Glutamine",
    drugCount: 1,
  },
  {
    slug: "oxidative-stress-ros",
    label: "Oxidative Stress / ROS",
    shortLabel: "ROS",
    drugCount: 3,
  },
  {
    slug: "autophagy-survival",
    label: "Autophagy / Survival",
    shortLabel: "Autophagy",
    drugCount: 0,
  },
];

export function PathwayDiagram() {
  return (
    <div className="relative w-full">
      {/* Central cascade */}
      <div className="flex flex-col items-center gap-3">
        {/* Mutation */}
        <div className="rounded-lg border-2 border-destructive bg-destructive/10 px-6 py-3 text-center">
          <p className="text-xs font-medium text-muted-foreground">
            MUTATION
          </p>
          <p className="text-sm font-bold text-destructive">
            SDH Loss (SDHA/B/C/D/AF2)
          </p>
        </div>

        <Arrow />

        {/* Primary event */}
        <div className="rounded-lg border-2 border-amber-500 bg-amber-500/10 px-6 py-3 text-center">
          <p className="text-xs font-medium text-muted-foreground">
            PRIMARY EVENT
          </p>
          <p className="text-sm font-bold text-amber-400">
            Succinate Accumulation
          </p>
          <p className="text-[10px] text-muted-foreground">
            Oncometabolite ({">"} 100x normal levels)
          </p>
        </div>

        <Arrow />

        {/* Mechanism */}
        <div className="rounded-lg border border-border bg-card px-6 py-3 text-center">
          <p className="text-xs font-medium text-muted-foreground">
            MECHANISM
          </p>
          <p className="text-sm font-semibold">
            Inhibits α-KG-dependent dioxygenases
          </p>
          <p className="text-[10px] text-muted-foreground">
            PHDs, TETs, KDMs, and other 2-oxoglutarate enzymes
          </p>
        </div>

        <Arrow />

        {/* Downstream pathways */}
        <div className="w-full">
          <p className="mb-3 text-center text-xs font-medium text-muted-foreground">
            DOWNSTREAM DRUGGABLE PATHWAYS
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {pathwayNodes.map((node) => (
              <a
                key={node.slug}
                href={`/drugs?pathway=${node.slug}`}
                className={cn(
                  "group relative rounded-lg border border-border p-3 transition-all hover:scale-[1.02] hover:shadow-md",
                  "cursor-pointer"
                )}
              >
                <div
                  className={cn(
                    "mb-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium",
                    PATHWAY_COLORS[node.slug] || "bg-gray-100 text-gray-800"
                  )}
                >
                  {node.shortLabel}
                </div>
                <p className="text-xs font-medium leading-tight">
                  {node.label}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  {node.drugCount} drug{node.drugCount !== 1 ? "s" : ""}{" "}
                  targeting
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex h-6 items-center justify-center">
      <div className="h-full w-px bg-border" />
      <svg
        className="absolute text-muted-foreground"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        style={{ marginTop: "18px" }}
      >
        <path d="M0 0 L5 6 L10 0" fill="currentColor" />
      </svg>
    </div>
  );
}
