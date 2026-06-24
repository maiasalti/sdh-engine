import { Pathway } from "@/types/domain";

export const SEED_PATHWAYS: Omit<Pathway, "id">[] = [
  {
    name: "Pseudohypoxia / HIF Pathway",
    slug: "hif-pseudohypoxia",
    description:
      "Succinate accumulation inhibits PHD enzymes, stabilizing HIF-1α and HIF-2α regardless of oxygen levels. This drives angiogenesis (VEGF), metabolic reprogramming (glycolysis shift), and growth factor signaling.",
    upstream_event: "Succinate inhibits PHD1/2/3 (α-KG-dependent dioxygenases)",
    downstream_effects: [
      "HIF-1α/2α stabilization",
      "VEGF upregulation",
      "GLUT1/3 upregulation",
      "Glycolytic enzyme induction",
      "EPO production",
    ],
    druggable: true,
    display_order: 1,
  },
  {
    name: "Epigenetic Dysregulation",
    slug: "epigenetic-dysregulation",
    description:
      "Succinate inhibits TET family DNA demethylases and Jumonji-domain histone demethylases, causing global DNA and histone hypermethylation. This silences tumor suppressors and blocks differentiation.",
    upstream_event:
      "Succinate inhibits TET1/2/3 and KDM histone demethylases",
    downstream_effects: [
      "DNA hypermethylation (CIMP phenotype)",
      "5-hydroxymethylcytosine loss",
      "Tumor suppressor silencing",
      "Histone hypermethylation",
      "Differentiation block",
    ],
    druggable: true,
    display_order: 2,
  },
  {
    name: "VEGF Signaling",
    slug: "vegf-signaling",
    description:
      "Downstream of HIF activation, VEGF/VEGFR2 signaling drives tumor angiogenesis — the formation of new blood vessels that supply the tumor with oxygen and nutrients.",
    upstream_event: "HIF-mediated VEGFA transcriptional activation",
    downstream_effects: [
      "Tumor angiogenesis",
      "Vascular permeability",
      "Endothelial cell proliferation",
      "Tumor blood supply",
    ],
    druggable: true,
    display_order: 3,
  },
  {
    name: "mTOR / PI3K / AKT",
    slug: "mtor-pi3k-akt",
    description:
      "Metabolic reprogramming from SDH loss activates the PI3K/AKT/mTOR signaling axis, promoting cell growth, proliferation, and survival. Multiple upstream inputs converge on mTOR.",
    upstream_event:
      "HIF-mediated growth factor signaling + metabolic stress + AMPK dysregulation",
    downstream_effects: [
      "Cell growth and proliferation",
      "Protein synthesis",
      "Metabolic reprogramming",
      "Survival signaling",
    ],
    druggable: true,
    display_order: 4,
  },
  {
    name: "Glutamine Dependency",
    slug: "glutamine-dependency",
    description:
      "With the TCA cycle disrupted at Complex II, SDH-deficient cells become addicted to glutamine for anaplerosis and lipid synthesis via reductive carboxylation.",
    upstream_event:
      "TCA cycle disruption at succinate → fumarate step",
    downstream_effects: [
      "Glutaminase (GLS) upregulation",
      "Reductive carboxylation for lipid synthesis",
      "α-KG production via glutaminolysis",
      "Metabolic vulnerability",
    ],
    druggable: true,
    display_order: 5,
  },
  {
    name: "Oxidative Stress / ROS",
    slug: "oxidative-stress-ros",
    description:
      "Complex II dysfunction causes electron leak in the electron transport chain, increasing reactive oxygen species (ROS). This drives DNA damage but also creates a therapeutic vulnerability.",
    upstream_event:
      "Impaired electron flow through Complex II → electron leak",
    downstream_effects: [
      "Increased ROS production",
      "Oxidative DNA damage",
      "Genomic instability",
      "PARP activation for DNA repair",
      "Therapeutic vulnerability to further ROS stress",
    ],
    druggable: true,
    display_order: 6,
  },
  {
    name: "Autophagy / Survival",
    slug: "autophagy-survival",
    description:
      "Metabolic stress from SDH loss triggers autophagy as a survival mechanism. Cells rely on autophagy to maintain metabolic homeostasis under energy stress.",
    upstream_event: "Metabolic stress + nutrient sensing dysregulation",
    downstream_effects: [
      "Autophagosome formation",
      "Lysosomal degradation",
      "Metabolic homeostasis maintenance",
      "Survival under stress",
    ],
    druggable: true,
    display_order: 7,
  },
  {
    name: "NAD⁺ Metabolism / NAMPT Axis",
    slug: "nad-metabolism",
    description:
      "SDH loss impairs Complex II of the electron transport chain, causing NADH accumulation and increased mitochondrial ROS. Sustained ROS drives DNA damage that chronically activates PARP1, consuming NAD⁺. Cells compensate by upregulating the NAMPT-mediated NAD⁺ salvage pathway, creating a targetable dependency.",
    upstream_event:
      "Complex II dysfunction → NADH/NAD⁺ imbalance + ROS-driven DNA damage → PARP1 hyperactivation",
    downstream_effects: [
      "Chronic NAD⁺ depletion",
      "PARP-mediated parthanatos vulnerability",
      "Glycolytic NAD⁺ regeneration dependency",
      "NAMPT upregulation as adaptive response",
      "Selective lethality to NAD⁺ biosynthesis inhibition",
    ],
    druggable: true,
    display_order: 8,
  },
  {
    name: "FGFR / FGF Ligand Upregulation",
    slug: "fgfr-signaling",
    description:
      "In SDH-deficient GIST, genome-wide CIMP hypermethylates CTCF-binding genomic insulators, collapsing topologically associating domains and allowing previously insulated enhancers to drive aberrant expression of FGF3 and FGF4. These ligands signal through FGFR1 in an autocrine loop, fueling tumor proliferation. A Phase 2 trial of the pan-FGFR inhibitor rogaratinib achieved a 41.7% objective response rate in advanced SDH-deficient GIST (Merriam et al., Nat Med 2026, PMID: 42191879).",
    upstream_event:
      "SDH loss → CIMP → insulator hypermethylation → FGF3/FGF4 aberrant expression → FGFR1 autocrine activation",
    downstream_effects: [
      "FGFR1 kinase autophosphorylation",
      "RAS/MAPK and PI3K/AKT/mTOR co-activation",
      "Cell proliferation and survival signaling",
      "Tumor angiogenesis (secondary)",
    ],
    druggable: true,
    display_order: 9,
  },
  {
    name: "Neddylation / Protein Quality Control",
    slug: "neddylation-protein-homeostasis",
    description:
      "Metabolic reprogramming and elevated ROS from SDH loss increase proteotoxic burden, making SDH-deficient cells more dependent on neddylation-mediated Cullin-RING E3 ubiquitin ligase (CRL) activity for selective protein turnover. An unbiased CRISPR screen in Sdhb-deficient mouse chromaffin cells identified UBE2F (a neddylation E2 enzyme) loss as selectively lethal, and the neddylation inhibitor pevonedistat (MLN4924) suppressed SDH-deficient cell growth in vitro (Al Khazal et al., iScience 2026, PMID: 42181244).",
    upstream_event:
      "SDH loss → metabolic / oxidative stress → elevated proteotoxic burden → neddylation-CRL dependency for protein homeostasis",
    downstream_effects: [
      "CRL E3 ligase hyperactivation for protein degradation",
      "Cell cycle regulator turnover (CDT1, p27, p21)",
      "DNA damage response protein degradation",
      "Selective lethality to neddylation blockade in SDH-deficient cells",
    ],
    druggable: true,
    display_order: 10,
  },
];
