export type PaperTopic =
  | "Review / Overview"
  | "Diagnosis & Pathology"
  | "Genetics & Syndromes"
  | "Tumor Biology"
  | "Treatment & Trials"
  | "Case Reports";

export type PaperEntry = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  topic: PaperTopic;
  description: string;
  pmid?: string;
  date?: string;
};

export const PAPERS: PaperEntry[] = [
  {
    title:
      "Fibroblast growth factor receptor inhibition for succinate dehydrogenase-deficient gastrointestinal stromal tumors: a phase 2 trial",
    authors: "Merriam P, Morrow JJ, et al.",
    journal: "Nat Med",
    year: 2026,
    doi: "10.1038/s41591-026-04376-9",
    topic: "Treatment & Trials",
    description:
      "Phase 2 trial of rogaratinib (pan-FGFR1-4 inhibitor) in 24 patients with advanced SDH-deficient GIST achieved a 41.7% objective response rate and 31-month median PFS — the strongest prospective clinical signal reported in this specific disease subtype. The mechanism is epigenetic: DNA hypermethylation from SDH loss disrupts CTCF insulators at the FGF3/FGF4 locus, creating an autocrine FGFR1 signaling loop that rogaratinib blocks.",
    pmid: "42191879",
    date: "2026-05",
  },
  {
    title:
      "Succinate dehydrogenase loss suppresses pyrimidine biosynthesis via succinate-mediated inhibition of aspartate transcarbamylase",
    authors: "Hart ML, Sokolov D, et al.",
    journal: "Nat Metab",
    year: 2026,
    doi: "10.1038/s42255-026-01524-w",
    topic: "Tumor Biology",
    description:
      "Succinate accumulation from SDH loss directly inhibits aspartate transcarbamylase (ATCase), blocking the first committed step of pyrimidine de novo biosynthesis and causing replication stress. SDH-deficient cells are selectively sensitive to ATR kinase inhibition, revealing an entirely new druggable vulnerability — distinct from pseudohypoxia, epigenetic, or metabolic mechanisms already established.",
    pmid: "42082831",
    date: "2026-05",
  },
  {
    title:
      "Unbiased CRISPR synthetic lethal screening for genetic vulnerabilities in a succinate dehydrogenase-loss model of paraganglioma",
    authors: "Al Khazal FJ, Emch MJ, et al.",
    journal: "iScience",
    year: 2026,
    doi: "10.1016/j.isci.2026.115885",
    topic: "Tumor Biology",
    description:
      "Genome-wide CRISPR-Cas9 screen in SDHB-deficient mouse chromaffin cells identified the neddylation pathway as a selective survival dependency. The NAE inhibitor pevonedistat (MLN4924) selectively inhibited growth of SDHB-deficient versus normal cells in vitro, nominating NEDD8-pathway inhibition as a candidate therapeutic strategy in SDH-deficient paraganglioma.",
    pmid: "42181244",
    date: "2026-04",
  },
];
