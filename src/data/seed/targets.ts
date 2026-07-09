import { Target } from "@/types/domain";

/**
 * Seed targets reference pathway slugs for linkage.
 * pathway_id will be resolved at seed time by matching slug.
 */
export type SeedTarget = Omit<Target, "id" | "pathway_id"> & {
  pathway_slug: string;
};

export const SEED_TARGETS: SeedTarget[] = [
  {
    gene_symbol: "HIF1A",
    name: "Hypoxia-inducible factor 1-alpha",
    uniprot_id: "Q16665",
    pathway_slug: "hif-pseudohypoxia",
    target_type: "direct",
    description:
      "Master transcription factor stabilized by PHD inhibition. Drives glycolytic shift and VEGF expression.",
  },
  {
    gene_symbol: "EPAS1",
    name: "Hypoxia-inducible factor 2-alpha (HIF-2α)",
    uniprot_id: "Q99814",
    pathway_slug: "hif-pseudohypoxia",
    target_type: "direct",
    description:
      "HIF-2α is the primary therapeutic target in pseudohypoxic tumors. Belzutifan (MK-6482) directly inhibits HIF-2α.",
  },
  {
    gene_symbol: "VEGFA",
    name: "Vascular endothelial growth factor A",
    uniprot_id: "P15692",
    pathway_slug: "vegf-signaling",
    target_type: "downstream",
    description:
      "Key HIF target gene driving tumor angiogenesis. Target of bevacizumab.",
  },
  {
    gene_symbol: "KDR",
    name: "VEGF receptor 2 (VEGFR2)",
    uniprot_id: "P35968",
    pathway_slug: "vegf-signaling",
    target_type: "downstream",
    description:
      "Primary VEGF receptor on endothelial cells. Target of sunitinib, regorafenib, and other multi-kinase inhibitors.",
  },
  {
    gene_symbol: "MTOR",
    name: "Mechanistic target of rapamycin",
    uniprot_id: "P42345",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Central growth/metabolism regulator activated downstream of SDH loss. Target of everolimus and temsirolimus.",
  },
  {
    gene_symbol: "PIK3CA",
    name: "PI3K catalytic subunit alpha",
    uniprot_id: "P42336",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Upstream kinase in PI3K/AKT/mTOR axis. Frequently activated in metabolically reprogrammed tumors.",
  },
  {
    gene_symbol: "GLS",
    name: "Glutaminase (kidney isoform)",
    uniprot_id: "O94925",
    pathway_slug: "glutamine-dependency",
    target_type: "metabolic",
    description:
      "Converts glutamine to glutamate for TCA anaplerosis. SDH-deficient cells are glutamine-addicted. Target of telaglenastat (CB-839).",
  },
  {
    gene_symbol: "DNMT1",
    name: "DNA methyltransferase 1",
    uniprot_id: "P26358",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "downstream",
    description:
      "Maintenance DNA methyltransferase. Contributes to hypermethylation phenotype. Target of azacitidine and decitabine.",
  },
  {
    gene_symbol: "DNMT3A",
    name: "DNA methyltransferase 3A",
    uniprot_id: "Q9Y6K1",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "downstream",
    description:
      "De novo DNA methyltransferase. Works with DNMT1 to establish aberrant methylation patterns.",
  },
  {
    gene_symbol: "TET2",
    name: "Tet methylcytosine dioxygenase 2",
    uniprot_id: "Q6N021",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "direct",
    description:
      "α-KG-dependent DNA demethylase directly inhibited by succinate. Its inhibition drives the CIMP phenotype.",
  },
  {
    gene_symbol: "IDH1",
    name: "Isocitrate dehydrogenase 1",
    uniprot_id: "O75874",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "metabolic",
    description:
      "Produces α-KG. IDH mutations produce 2-HG (oncometabolite analogous to succinate). Cross-pathway therapeutic insights.",
  },
  {
    gene_symbol: "LDHA",
    name: "Lactate dehydrogenase A",
    uniprot_id: "P00338",
    pathway_slug: "hif-pseudohypoxia",
    target_type: "downstream",
    description:
      "HIF target gene driving aerobic glycolysis (Warburg effect). Converts pyruvate to lactate.",
  },
  {
    gene_symbol: "PDK1",
    name: "Pyruvate dehydrogenase kinase 1",
    uniprot_id: "Q15118",
    pathway_slug: "hif-pseudohypoxia",
    target_type: "downstream",
    description:
      "HIF target that suppresses pyruvate entry into TCA cycle, reinforcing glycolytic shift. Target of dichloroacetate (DCA).",
  },
  {
    gene_symbol: "EGFR",
    name: "Epidermal growth factor receptor",
    uniprot_id: "P00533",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Growth factor receptor upstream of PI3K/AKT. May be activated in some SDH-deficient tumors.",
  },
  {
    gene_symbol: "KIT",
    name: "KIT proto-oncogene receptor tyrosine kinase",
    uniprot_id: "P10721",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Primary oncogene in most GISTs, but SDH-deficient GISTs typically have wild-type KIT. Some residual KIT signaling may persist.",
  },
  {
    gene_symbol: "PARP1",
    name: "Poly(ADP-ribose) polymerase 1",
    uniprot_id: "P09874",
    pathway_slug: "oxidative-stress-ros",
    target_type: "synthetic_lethal",
    description:
      "DNA repair enzyme activated by ROS-induced damage. PARP inhibition in ROS-elevated cells may cause synthetic lethality.",
  },
  {
    gene_symbol: "EZH2",
    name: "Enhancer of zeste homolog 2 (PRC2 catalytic subunit)",
    uniprot_id: "Q15910",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "synthetic_lethal",
    description:
      "Histone H3K27 methyltransferase and catalytic subunit of PRC2. Succinate inhibits KDM6A (UTX) and KDM6B (JMJD3), the H3K27me3-erasing demethylases, causing H3K27me3 accumulation in SDH-deficient tumors. EZH2 inhibition prevents further H3K27me3 deposition, potentially reactivating silenced differentiation and tumor suppressor programs. Target of tazemetostat.",
  },
  {
    gene_symbol: "BECN1",
    name: "Beclin-1",
    uniprot_id: "Q14457",
    pathway_slug: "autophagy-survival",
    target_type: "downstream",
    description:
      "Core autophagy initiation protein; part of the PIK3C3/VPS34 complex that nucleates autophagosomes. In SDH-deficient tumors, chronic metabolic stress from TCA disruption upregulates autophagy via BECN1. Lysosomal inhibitors (chloroquine, hydroxychloroquine) block the terminal step of autophagic flux, depriving tumor cells of this survival mechanism.",
  },
  {
    gene_symbol: "NAMPT",
    name: "Nicotinamide phosphoribosyltransferase",
    uniprot_id: "P43490",
    pathway_slug: "nad-metabolism",
    target_type: "metabolic",
    description:
      "Rate-limiting enzyme in the NAD⁺ salvage pathway; converts nicotinamide to NMN, the immediate NAD⁺ precursor. SDH-deficient cells with elevated PARP1 activity and impaired ETC-mediated NAD⁺ regeneration upregulate NAMPT as an adaptive survival response, creating a dependency exploitable by NAMPT inhibitors such as daporinad (FK866).",
  },
  {
    gene_symbol: "FGFR1",
    name: "Fibroblast growth factor receptor 1",
    uniprot_id: "P11362",
    pathway_slug: "fgfr-signaling",
    target_type: "downstream",
    description:
      "Receptor tyrosine kinase that mediates FGF3/FGF4 signaling. In SDH-deficient GIST, aberrant FGF3/FGF4 overexpression driven by DNA-hypermethylation-induced insulator disruption activates FGFR1 in an autocrine loop. Target of rogaratinib (pan-FGFR inhibitor) in the Phase 2 trial showing 41.7% ORR (Nat Med 2026, PMID 42191879).",
  },
  {
    gene_symbol: "FGFR2",
    name: "Fibroblast growth factor receptor 2",
    uniprot_id: "P21802",
    pathway_slug: "fgfr-signaling",
    target_type: "downstream",
    description:
      "Second FGFR subtype co-expressed in SDH-deficient tumors; pan-FGFR inhibitors including rogaratinib and erdafitinib target FGFR1-4. Inhibited by rogaratinib in the SDH-deficient GIST Phase 2 trial and by erdafitinib (FDA-approved pan-FGFR, urothelial carcinoma).",
  },
  {
    gene_symbol: "SAT1",
    name: "Spermidine/spermine N1-acetyltransferase 1",
    uniprot_id: "P21673",
    pathway_slug: "polyamine-metabolism",
    target_type: "metabolic",
    description:
      "Rate-limiting enzyme of polyamine catabolism and the principal intracellular target induced by polyamine analogues including DENSPM. SAT1 acetylates spermidine and spermine, targeting them for export or oxidation by polyamine oxidase (PAOX), thereby depleting intracellular polyamine pools. Elevated SSAT/SAT1 activity in response to DENSPM treatment drives further ROS generation via SMOX, creating a toxic cycle in SDH-deficient cells already under oxidative stress.",
  },
  {
    gene_symbol: "UBE2F",
    name: "Ubiquitin-conjugating enzyme E2 F (neddylation E2)",
    uniprot_id: "Q969M7",
    pathway_slug: "neddylation",
    target_type: "synthetic_lethal",
    description:
      "NEDD8-specific E2 conjugating enzyme that cooperates with RBX2 to neddylate cullin-5-based RING E3 ligases. Identified in an unbiased CRISPR screen as a selective synthetic lethal dependency in SDHB-deficient chromaffin cells: loss of UBE2F suppressed growth specifically in SDH-deficient cells, while loss of its related enzyme UBE2M promoted growth. Upstream NAE1/UBA3 inhibitors (e.g., pevonedistat) block the entire neddylation cascade (PMID 42181244).",
  },
  {
    gene_symbol: "KDM4A",
    name: "Lysine demethylase 4A (JMJD2A / KDM4A)",
    uniprot_id: "O75164",
    pathway_slug: "kdm4-dna-repair",
    target_type: "direct",
    description:
      "α-KG-dependent Jumonji-domain demethylase for H3K9me3 and H3K36me3. Directly inhibited by succinate (competitive inhibitor of α-KG binding site) in SDH-deficient cells. KDM4A is required for DNA double-strand break (DSB) repair: it removes H3K9me3 at DSB sites to allow RAD51 loading and productive homologous recombination. SDH loss → KDM4A inhibition → DSB repair defect → synthetic lethality with DNA-damaging agents such as Ym155. Validated experimentally in SDHB-deficient cells; pharmacological SDH inhibition with atpenin A5 recapitulated KDM4 inhibition and Ym155 sensitisation (Guo et al., PMID 41711310).",
  },
];
