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
];
