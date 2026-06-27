export type CuratedPaper = {
  title: string;
  /** Abbreviated author list, e.g. "Smith A, Jones B, et al." */
  authors: string;
  /** ISO journal abbreviation */
  journal: string;
  year: number;
  /** Bare DOI, without "https://doi.org/" prefix */
  doi: string;
  topic:
    | "Review / Overview"
    | "Diagnosis & Pathology"
    | "Genetics & Syndromes"
    | "Tumor Biology"
    | "Treatment & Trials"
    | "Case Reports";
  /** 1-2 sentence plain-language summary focused on repurposing relevance */
  description: string;
  pmid?: string;
  /** Publication month in YYYY-MM format; used for "recent papers" filtering */
  date?: string;
};

export const PAPERS: CuratedPaper[] = [
  {
    title:
      "Fibroblast growth factor receptor inhibition for succinate dehydrogenase-deficient gastrointestinal stromal tumors: a phase 2 trial.",
    authors: "Merriam P, Morrow JJ, Mazzola E, et al.",
    journal: "Nat Med",
    year: 2026,
    doi: "10.1038/s41591-026-04376-9",
    topic: "Treatment & Trials",
    description:
      "Phase 2 trial of rogaratinib (pan-FGFR inhibitor) in 24 SDH-deficient GIST patients achieved a 41.7% objective response rate and 31-month median PFS — the strongest single-agent results reported in this disease. The mechanism is epigenetic: SDH-loss-driven DNA hypermethylation disrupts CTCF genomic insulators at the FGF3/FGF4 locus, creating an autocrine FGFR1 signaling loop.",
    pmid: "42191879",
    date: "2026-05",
  },
  {
    title:
      "Succinate dehydrogenase-deficient cancer cells have increased susceptibility to Ym155-induced DNA damage.",
    authors: "Guo Q, Lee S, Armstrong N, et al.",
    journal: "Endocr Relat Cancer",
    year: 2026,
    doi: "10.1530/ERC-25-0397",
    topic: "Tumor Biology",
    description:
      "SDHB-deficient RCC cells, primary human pheochromocytoma cells, and a mouse pheochromocytoma line all show synthetic-lethal hypersensitivity to Ym155 (sepantronium bromide). Succinate accumulation inhibits KDM4 histone demethylase, impairing DNA double-strand break repair and amplifying Ym155-induced ROS-mediated DNA damage — a new SDH-specific vulnerability.",
    pmid: "41711310",
    date: "2026-03",
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
      "Genome-wide CRISPR-Cas9 screen in SDHB-deficient mouse chromaffin cells identified the neddylation pathway (UBE2F) as a selective survival dependency; neddylation inhibitors pevonedistat (MLN4924) and HA-9104 preferentially suppressed SDH-deficient cell growth. The transcriptional mediator complex also emerged as a potential tumor suppressor whose loss selectively promoted SDH-deficient proliferation.",
    pmid: "42181244",
    date: "2026-04",
  },
  {
    title:
      "Cytoreductive Surgery in Patients With Metastatic Succinate Dehydrogenase-Deficient Gastrointestinal Stromal Tumors.",
    authors: "Chen KY, Antkowiak M, Sharma AK, et al.",
    journal: "J Surg Oncol",
    year: 2026,
    doi: "10.1002/jso.70259",
    topic: "Treatment & Trials",
    description:
      "Nine SDH-deficient GIST patients who underwent complete cytoreductive surgery achieved a 26.1-month median time-to-recurrence — far exceeding the 3.4-month time-to-progression on prior systemic therapy. This retrospective series supports surgical cytoreduction as a viable option in carefully selected patients refractory to systemic treatment.",
    pmid: "42003827",
    date: "2026-04",
  },
  {
    title:
      "The Role of the Surgical Pathologist in the Recognition of Hereditary SDH-Deficient Tumor Syndromes.",
    authors: "Juhlin CC, Mete O.",
    journal: "Adv Anat Pathol",
    year: 2026,
    doi: "10.1097/PAP.0000000000000541",
    topic: "Review / Overview",
    description:
      "Practical pathology-focused review covering the clinicopathologic spectrum of SDH-deficient tumor syndromes — paraganglioma/pheochromocytoma (PGL1-5), SDH-deficient GIST, SDH-deficient RCC, Carney-Stratakis syndrome, and Carney triad — with a stepwise diagnostic workflow integrating histology, SDHB/SDHA immunohistochemistry, and molecular testing.",
    pmid: "42281449",
    date: "2026-06",
  },
];
