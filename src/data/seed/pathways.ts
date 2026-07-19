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
    name: "Succinate-Driven Immune Evasion",
    slug: "succinate-immune-evasion",
    description:
      "SDH loss creates an immunosuppressive tumor microenvironment through two distinct succinate-dependent mechanisms: (1) extracellular succinate is directly taken up by tumor-infiltrating T cells via MCT1 (SLC16A1), impairing TCA-cycle glucose oxidation in T cells and suppressing IFN-γ secretion and degranulation — demonstrated in human CD4+/CD8+ T cells at tumor-associated succinate concentrations (Gudgeon et al., Cell Rep 2022, PMID 35977513), with RNA-seq of SDH-deficient pheochromocytoma/paraganglioma confirming profound in-vivo IFN-γ signaling suppression; and (2) the pseudohypoxic HIF-1α program drives upregulation of IDO1 (indoleamine 2,3-dioxygenase 1), the rate-limiting enzyme in the tryptophan→kynurenine degradation pathway, with aberrant kynurenine pathway activity confirmed in metastatic SDHB-driven PPGL by multi-omics (PMID 42230482). Together these mechanisms create a profoundly T-cell-hostile TME in SDH-deficient tumors.",
    upstream_event:
      "SDH loss → intracellular and extracellular succinate accumulation; HIF-1α stabilization (pseudohypoxia)",
    downstream_effects: [
      "MCT1-mediated succinate uptake by CD4+/CD8+ T cells in TME",
      "Suppressed T-cell IFN-γ secretion and degranulation",
      "HIF-1α-driven IDO1 upregulation",
      "Kynurenine accumulation → Treg expansion and T-cell anergy",
      "Broad IFN-γ signaling suppression in SDH-deficient tumor tissue",
    ],
    druggable: true,
    display_order: 12,
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
    name: "Succinate-Driven Homologous Recombination Deficiency",
    slug: "sdh-driven-hrd",
    description:
      "Succinate accumulation competitively inhibits the α-KG-dependent histone demethylases KDM4A and KDM4B (JMJD2A/B), which normally erase repressive H3K9me3 marks at sites of DNA double-strand breaks. When KDM4B is inhibited, H3K9me3 hypermethylation persists at break sites, blocking recruitment of TIP60 acetyltransferase and ATM kinase — both required for DNA end-resection and initiation of homology-directed repair (HDR/HR). The result is a 'BRCAness' phenotype: SDH-deficient tumor cells have impaired HR capacity despite wild-type BRCA1/2. Sulkowski et al. (Nat Genet 2018, PMID: 30013182) directly demonstrated HR deficiency and olaparib hypersensitivity in cells and tumors from SDH-deficient hereditary paraganglioma/PPGL patients; Sulkowski et al. (Nature 2020, PMID: 32494005) dissected the KDM4B/H3K9me3 chromatin mechanism.",
    upstream_event:
      "SDH loss → succinate accumulation → competitive inhibition of KDM4A/KDM4B (α-KG-dependent H3K9me3 demethylases) → H3K9me3 persistence at DNA double-strand break sites → impaired TIP60/ATM recruitment → defective DNA end-resection → HR deficiency",
    downstream_effects: [
      "H3K9me3 hypermethylation at DNA double-strand break sites",
      "Impaired TIP60 acetyltransferase and ATM kinase recruitment",
      "Defective homologous recombination (BRCAness phenotype in BRCA1/2-wild-type cells)",
      "PARP inhibitor synthetic lethality (trapping unrepaired single-strand breaks in HR-deficient background)",
      "Selective sensitivity to olaparib and other PARP inhibitors in SDH-deficient versus SDH-intact cells",
    ],
    druggable: true,
    display_order: 14,
  },
  {
    name: "De Novo Lipogenesis / FASN Dependency",
    slug: "fatty-acid-synthesis",
    description:
      "SDH loss truncates the TCA cycle at succinate, forcing cells to rely on reductive carboxylation of glutamine (via reverse IDH1) to supply citrate for cytoplasmic acetyl-CoA production and de novo fatty acid synthesis. FASN (fatty acid synthase) catalyzes the committed step converting acetyl-CoA and malonyl-CoA to palmitate. SDH-deficient cells also have impaired mitochondrial fatty acid synthesis (mtFASN) and lipoylation, creating a dual vulnerability to FASN inhibition. Navarro-Marchena et al. (Pharmacol Res 2026, PMID 41520938) directly demonstrated that G28UCM — a compound targeting both FASN and the mtFASN/lipoylation pathway — reveals a synthetic lethal interaction with SDHB loss: SDHB-deficient cells showed significantly greater growth inhibition than SDHB-wild-type controls.",
    upstream_event:
      "SDH loss → TCA truncation → compensatory reductive carboxylation of glutamine → elevated cytoplasmic citrate and acetyl-CoA → upregulated de novo lipogenesis; concurrent mtFASN/lipoylation impairment",
    downstream_effects: [
      "Elevated FASN-dependent palmitate synthesis for membrane phospholipids and signaling lipids",
      "Dependency on de novo lipogenesis as oxidative TCA anaplerosis is disrupted",
      "Impaired lipoylation of mitochondrial enzyme complexes (PDH, α-KGDH)",
      "Selective FASN inhibitor hypersensitivity in SDHB-deficient vs. wild-type cells",
      "Synthetic lethality between FASN inhibition and SDHB loss in cell line models",
    ],
    druggable: true,
    display_order: 15,
  },
  {
    name: "ATRX Loss / ALT Replication Stress",
    slug: "atrx-alt-replication-stress",
    description:
      "In SDHB-driven metastatic pheochromocytoma and paraganglioma, ATRX co-mutations occur in ~30–40% of cases and are among the strongest genomic predictors of malignancy (confirmed by multi-omics profiling: PMID 42230482). ATRX loss activates the Alternative Lengthening of Telomeres (ALT) pathway — a recombination-based telomere maintenance mechanism — which creates constitutive replication stress at telomeric sequences through G-quadruplex DNA accumulation, R-loop formation, and fragile telomeres. ALT-positive cells are rendered hypersensitive to ATR kinase inhibition: Flynn et al. (Science 2015, PMID 25614623) demonstrated that ATRX-loss/ALT-positive cancer cells are 10–30× more sensitive to ATR inhibitors than ALT-negative cells across multiple cancer types, establishing a synthetic lethality that is absent in ATRX-wild-type tumors.",
    upstream_event:
      "SDH loss (particularly SDHB mutation) → epigenetic instability → ATRX co-mutation → ALT pathway activation → constitutive telomeric replication stress → ATR dependency",
    downstream_effects: [
      "G-quadruplex DNA accumulation at telomeres",
      "R-loop formation and replication fork stalling",
      "Constitutive ATR kinase activation at stalled forks",
      "Synthetic lethality with ATR inhibition (10–30× sensitization vs. ALT-negative cells)",
      "C-circles as an extrachromosomal DNA biomarker of ALT activity",
      "High metastatic potential in SDHB-driven PPGL",
    ],
    druggable: true,
    display_order: 13,
  },
];
