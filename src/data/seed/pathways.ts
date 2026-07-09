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
    name: "FGFR Signaling (Epigenetic Insulator Disruption)",
    slug: "fgfr-signaling",
    description:
      "SDH-loss-driven genome-wide DNA hypermethylation disrupts CTCF-binding insulator elements flanking the FGF3/FGF4 gene locus, causing aberrant, high-level transcription of these oncogenic FGF ligands. The ligands activate an autocrine/paracrine FGFR1 signaling loop that promotes SDH-deficient tumor growth. This mechanism was established in GIST by a 2026 Phase 2 trial of rogaratinib (Nat Med 2026, PMID 42191879).",
    upstream_event:
      "Succinate-driven TET inhibition → genome-wide DNA hypermethylation → CTCF insulator disruption → aberrant FGF3/FGF4 activation",
    downstream_effects: [
      "Autocrine FGFR1 signaling",
      "Tumor cell proliferation and survival",
      "FGF3/FGF4 as pharmacodynamic biomarkers",
      "Hyperphosphatemia as on-target FGFR1 engagement marker",
      "Selective vulnerability in SDH-deficient vs. SDH-intact tumors",
    ],
    druggable: true,
    display_order: 9,
  },
  {
    name: "Polyamine Metabolism",
    slug: "polyamine-metabolism",
    description:
      "Spermidine and spermine are significantly elevated in SDHx-mutated pheochromocytoma/paraganglioma tissues and in SDHB-knockdown cells compared with wild-type controls, implying that SDH loss drives upregulation of the polyamine biosynthesis pathway. Polyamines support rapid cell proliferation and mitochondrial function; in SDH-deficient cells already under chronic oxidative stress, this pathway represents a synthetic vulnerability. Polyamine analogues such as DENSPM deplete natural polyamines by inducing SSAT-mediated catabolism and generate additional ROS via spermine oxidase, pushing these cells past their apoptotic threshold.",
    upstream_event:
      "SDH loss → altered mitochondrial metabolism → upregulation of polyamine biosynthesis (elevated spermidine, spermine in SDHx-mutated tumors)",
    downstream_effects: [
      "Elevated spermidine and spermine in SDHx-mutated tumor tissue",
      "SSAT upregulation as compensatory catabolism",
      "ROS generation via spermine oxidase (SMOX) during catabolism",
      "Dependency on polyamine turnover for mitochondrial and proliferative support",
      "Selective sensitivity to polyamine depletion in SDHB-deficient cells",
    ],
    druggable: true,
    display_order: 11,
  },
  {
    name: "Neddylation / Ubiquitin-Proteasome Axis",
    slug: "neddylation",
    description:
      "An unbiased genome-wide CRISPR-Cas9 synthetic lethality screen in SDHB-deficient chromaffin cells identified the neddylation pathway as selectively essential for SDH-deficient tumor survival. Neddylation — attachment of the ubiquitin-like modifier NEDD8 to cullin-RING E3 ligases by NAE1/UBA3 and specific E2 enzymes — controls ubiquitin-mediated proteolysis. Loss of UBE2F suppressed growth of SDHB-deficient cells specifically, while neddylation inhibitors (pevonedistat, HA-9104) preferentially blocked proliferation in the SDH-deficient context (PMID 42181244).",
    upstream_event:
      "SDH loss → metabolic and proteotoxic stress → upregulated dependency on cullin-RING ligase-mediated protein degradation via neddylation",
    downstream_effects: [
      "Selective UBE2F dependency in SDHB-deficient cells",
      "Cullin-RING ligase inactivation upon NAE inhibition",
      "Proteotoxic stress accumulation",
      "Selective growth suppression in SDH-deficient tumor cells",
    ],
    druggable: true,
    display_order: 10,
  },
  {
    name: "KDM4 / DNA Repair Vulnerability",
    slug: "kdm4-dna-repair",
    description:
      "Succinate accumulated in SDH-deficient cells competitively inhibits KDM4 (KDM4A/B/C; JMJD2 family) — α-KG-dependent Jumonji-domain demethylases that erase H3K9me3 and H3K36me3. Beyond its epigenetic roles, KDM4 is required for timely DNA double-strand break (DSB) repair: it removes H3K9me3 at DSB sites to enable RAD51 loading and productive homologous recombination. SDH-deficient cells therefore carry an intrinsic DSB repair deficit, creating synthetic lethality with agents that induce ROS or DNA damage. Validated in SDHB-deficient UOK269 RCC cells, primary human pheochromocytoma cells, and MPC mouse pheochromocytoma cells by Guo et al. (Endocr Relat Cancer 2026, PMID 41711310).",
    upstream_event:
      "SDH loss → succinate accumulation → competitive inhibition of KDM4 (α-KG-dependent H3K9me3/H3K36me3 demethylase) → impaired DNA DSB repair",
    downstream_effects: [
      "H3K9me3/H3K36me3 accumulation at DNA break sites",
      "Impaired RAD51 loading and homologous recombination",
      "Selective sensitisation to DNA-damaging agents and ROS inducers",
      "Synthetic lethality with Ym155 (sepantronium) and mitochondrial ionophores in SDHB-deficient cells",
      "Mechanistic overlap with KDM6A/B inhibition — both are downstream of succinate-mediated α-KG dioxygenase inhibition",
    ],
    druggable: true,
    display_order: 12,
  },
];
