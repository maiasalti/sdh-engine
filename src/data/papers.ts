/**
 * Curated, manually verified papers on SDH-deficient tumors and drug repurposing.
 * Each entry is verified via PubMed. The `date` field ("YYYY-MM") drives the
 * "Most recent papers" section on the Research tab — any entry dated within the
 * last ~3 months will surface there automatically.
 */

export type CuratedPaper = {
  title: string;
  /** Abbreviated authors, e.g. "Smith A, Jones B, et al." */
  authors: string;
  /** ISO journal abbreviation */
  journal: string;
  year: number;
  /** Bare DOI, no https://doi.org/ prefix */
  doi: string;
  topic:
    | "Review / Overview"
    | "Diagnosis & Pathology"
    | "Genetics & Syndromes"
    | "Tumor Biology"
    | "Treatment & Trials"
    | "Case Reports";
  /** 1-2 sentence plain-language summary focused on drug-repurposing relevance */
  description: string;
  pmid?: string;
  /** Publication month, "YYYY-MM" */
  date?: string;
};

export const PAPERS: CuratedPaper[] = [
  // --- Papers added 2026-07-01 (last-3-month scan) ---
  {
    title:
      "Fibroblast growth factor receptor inhibition for succinate dehydrogenase-deficient gastrointestinal stromal tumors: a phase 2 trial.",
    authors: "Merriam P, Morrow JJ, Mazzola E, et al.",
    journal: "Nat Med",
    year: 2026,
    doi: "10.1038/s41591-026-04376-9",
    topic: "Treatment & Trials",
    description:
      "A Phase 2 trial of rogaratinib (pan-FGFR inhibitor) in 24 patients with advanced SDH-deficient GIST achieved a 41.7% objective response rate and a median progression-free survival of 31 months — strikingly better than existing options. The mechanism is directly epigenetic: SDH-loss-driven DNA hypermethylation silences CTCF genomic insulators, enabling aberrant FGF3/FGF4 oncogene expression and an autocrine FGFR1 signaling loop that rogaratinib blocks.",
    pmid: "42191879",
    date: "2026-05",
  },
  {
    title:
      "Unbiased CRISPR synthetic lethal screening for genetic vulnerabilities in a succinate dehydrogenase-loss model of paraganglioma.",
    authors: "Al Khazal FJ, Emch MJ, Correia C, et al.",
    journal: "iScience",
    year: 2026,
    doi: "10.1016/j.isci.2026.115885",
    topic: "Tumor Biology",
    description:
      "An unbiased CRISPR-Cas9 synthetic lethal screen in Sdhb-null mouse chromaffin cells identified the neddylation pathway as a selective vulnerability: loss of the neddylation E2 enzyme UBE2F suppressed growth specifically in SDH-deficient cells, while MLN4924 (pevonedistat), a clinical NAE1 inhibitor, reduced proliferation selectively in SDH-deficient versus wild-type cells. This implicates CRL-mediated protein degradation as an unexplored druggable axis in SDH-deficient tumors.",
    pmid: "42181244",
    date: "2026-04",
  },
  {
    title:
      "Functional profiling of somatostatin receptors identifies somatostatin receptor subtype 2 as a vulnerability in succinate dehydrogenase SDHB-deficient pheochromocytomas and paragangliomas.",
    authors: "García-Vioque V, Pedraza-Arevalo S, Moreno-Montilla MT, et al.",
    journal: "Mol Biomed",
    year: 2026,
    doi: "10.1186/s43556-026-00440-5",
    topic: "Treatment & Trials",
    description:
      "Comprehensive profiling of somatostatin receptor expression in PPGL cell lines found that SDHB-knockdown cells show enhanced membrane SSTR2 expression and rapid receptor internalization compared to wild-type. The selective SSTR2 agonist BIM-23120 significantly reduced proliferation and induced apoptosis specifically in SDHB-deficient cells, while the commonly used somatostatin analogs octreotide and pasireotide showed no differential effect — suggesting that SSTR2-selective compounds, rather than broad somatostatin analogs, warrant investigation in metastatic SDHB-mutant PPGL.",
    pmid: "41928014",
    date: "2026-04",
  },
];
