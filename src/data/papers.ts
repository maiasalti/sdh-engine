export type CuratedPaper = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  topic:
    | "Review / Overview"
    | "Diagnosis & Pathology"
    | "Genetics & Syndromes"
    | "Tumor Biology"
    | "Treatment & Trials"
    | "Case Reports";
  description: string;
  pmid?: string;
  date?: string; // "YYYY-MM"
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
      "Phase 2 trial (NCT04595747) of rogaratinib in 24 patients with advanced SDH-deficient GIST achieved a 41.7% objective response rate and 31-month median PFS. The mechanism exploits SDH-loss-driven DNA hypermethylation disrupting CTCF genomic insulators, unleashing aberrant FGF3/FGF4 oncogene expression and an autocrine FGFR1 signaling loop — the first targeted therapy built on this epigenetic oncogene-activation mechanism.",
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
      "CRISPR-Cas9 screen in SDH-deficient mouse chromaffin cells identifies the neddylation pathway (ubiquitin-mediated selective protein degradation) as a selective vulnerability: loss of neddylation regulator UBE2F suppressed SDH-deficient cell growth while loss of UBE2M enhanced it. The neddylation inhibitors pevonedistat (MLN4924) and HA-9104 preferentially reduced proliferation of SDH-deficient versus control cells.",
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
      "Retrospective single-institution study of 9 patients with metastatic SDH-deficient GIST who underwent complete cytoreductive surgery (CC-0 CRS); median time-to-recurrence post-surgery was 26.1 months versus 3.4 months on prior systemic therapy. Provides initial evidence that surgical debulking may offer durable disease control in carefully selected patients whose tumors are refractory to all available drugs.",
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
    topic: "Review / Overview",
    description:
      "Comprehensive pathology-focused review of the full SDH-deficient tumor spectrum — PGL1–5, SDH-deficient GIST, SDH-deficient RCC, Carney-Stratakis syndrome, and Carney triad — covering morphologic clues, a stepwise IHC and molecular testing algorithm, and key interpretive pitfalls in SDHB staining. Intended as a practical reference for identifying patients who need genetic counseling.",
    pmid: "42281449",
    date: "2026-06",
  },
];
