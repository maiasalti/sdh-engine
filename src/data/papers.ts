/**
 * Curated SDH-deficient tumor research papers.
 * Each entry is manually verified via PubMed before addition.
 * Papers with `date` within the last ~3 months are surfaced in the
 * "Most recent papers" section of the Research page.
 */
export type CuratedPaper = {
  title: string;
  /** Abbreviated author list, e.g. "Smith A, Jones B, et al." */
  authors: string;
  /** ISO journal abbreviation */
  journal: string;
  year: number;
  /** Bare DOI without https://doi.org/ prefix */
  doi: string;
  topic:
    | "Review / Overview"
    | "Diagnosis & Pathology"
    | "Genetics & Syndromes"
    | "Tumor Biology"
    | "Treatment & Trials"
    | "Case Reports";
  /** 1-2 sentence plain-language summary */
  description: string;
  pmid?: string;
  /** "YYYY-MM" publication date for recency filtering */
  date?: string;
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
      "Phase 2 trial of rogaratinib (pan-FGFR inhibitor) in 24 patients with advanced SDH-deficient GIST achieved a 41.7% objective response rate and median progression-free survival of 31 months. The trial validated an epigenetic mechanism: SDH-loss-driven DNA hypermethylation disrupts CTCF chromatin insulators, causing FGF3/FGF4 overexpression and autocrine FGFR1 activation.",
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
      "Genome-wide CRISPR screen in SDH-deficient mouse chromaffin cells identified the neddylation pathway — specifically the UBE2F–NAE1 axis — as a selective dependency absent in normal cells. The neddylation inhibitor pevonedistat (MLN4924) suppressed growth of SDH-deficient but not normal chromaffin cells, nominating neddylation as a druggable vulnerability in paraganglioma and pheochromocytoma.",
    pmid: "42181244",
    date: "2026-04",
  },
  {
    title:
      "Cytoreductive surgery in patients with metastatic succinate dehydrogenase-deficient gastrointestinal stromal tumors",
    authors: "Chen KY, Antkowiak M, Sharma AK, et al.",
    journal: "J Surg Oncol",
    year: 2026,
    doi: "10.1002/jso.70259",
    topic: "Treatment & Trials",
    description:
      "Retrospective single-institution analysis of nine metastatic SDH-deficient GIST patients who underwent complete cytoreductive surgery showed a median time-to-recurrence of 26.1 months — significantly longer than disease control on the last systemic therapy before surgery (median 3.4 months). Results suggest cytoreduction is a viable management option in highly selected patients when systemic options are inadequate.",
    pmid: "42003827",
    date: "2026-04",
  },
  {
    title:
      "The role of the surgical pathologist in the recognition of hereditary SDH-deficient tumor syndromes",
    authors: "Juhlin CC, Mete O.",
    journal: "Adv Anat Pathol",
    year: 2026,
    doi: "10.1097/PAP.0000000000000541",
    topic: "Diagnosis & Pathology",
    description:
      "Comprehensive pathology-focused review of SDH-deficient tumor syndromes (PGL1–5, GIST, SDH-deficient RCC, Carney-Stratakis syndrome, Carney triad), with a practical stepwise workflow integrating SDHB/SDHA immunohistochemistry, targeted molecular testing, and interpretive pitfalls. Provides guidance to support risk stratification, treatment selection, and identification of patients requiring genetic counselling.",
    pmid: "42281449",
    date: "2026-06",
  },
];
