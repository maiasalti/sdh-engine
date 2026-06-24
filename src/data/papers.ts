/**
 * Curated papers registry for the SDH-Engine research tab.
 * Each entry is hand-verified against PubMed (PMID + DOI confirmed).
 * topic must be one of the six fixed categories below.
 */
export type PaperTopic =
  | "Review / Overview"
  | "Diagnosis & Pathology"
  | "Genetics & Syndromes"
  | "Tumor Biology"
  | "Treatment & Trials"
  | "Case Reports";

export type CuratedPaper = {
  title: string;
  authors: string; // abbreviated: "Smith A, Jones B, et al."
  journal: string; // ISO abbreviation
  year: number;
  doi: string; // bare DOI, no "https://doi.org/" prefix
  topic: PaperTopic;
  description: string; // 1-2 sentence plain-language summary
  pmid?: string;
  date?: string; // "YYYY-MM" — drives "Most recent papers" section if within ~3 months
};

export const PAPERS: CuratedPaper[] = [
  {
    title:
      "Fibroblast growth factor receptor inhibition for succinate dehydrogenase-deficient gastrointestinal stromal tumors: a phase 2 trial",
    authors: "Merriam P, Morrow JJ, Mazzola E, et al.",
    journal: "Nat Med",
    year: 2026,
    doi: "10.1038/s41591-026-04376-9",
    topic: "Treatment & Trials",
    description:
      "Phase 2 trial of rogaratinib (pan-FGFR inhibitor) in 24 patients with advanced SDH-deficient GIST achieved a 41.7% objective response rate and median progression-free survival of 31.0 months. The study establishes that CIMP-driven hypermethylation of genomic insulators aberrantly activates an FGF3/FGF4–FGFR1 autocrine loop, making FGFR inhibition a mechanistically grounded targeted therapy for SDH-deficient GIST.",
    pmid: "42191879",
    date: "2026-05",
  },
  {
    title:
      "Unbiased CRISPR synthetic lethal screening for genetic vulnerabilities in a succinate dehydrogenase-loss model of paraganglioma",
    authors: "Al Khazal FJ, Emch MJ, Correia C, et al.",
    journal: "iScience",
    year: 2026,
    doi: "10.1016/j.isci.2026.115885",
    topic: "Tumor Biology",
    description:
      "Genome-wide CRISPR-Cas9 screen in Sdhb-deficient mouse chromaffin cells identified the neddylation pathway (UBE2F, UBE2M) as a selective survival dependency absent in normal cells. The neddylation inhibitors pevonedistat (MLN4924) and HA-9104 suppressed proliferation specifically in SDH-deficient cells, nominating neddylation-mediated protein quality control as a novel synthetic-lethal target.",
    pmid: "42181244",
    date: "2026-04",
  },
];
