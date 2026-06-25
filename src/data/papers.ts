/**
 * Curated key papers on SDH-deficient tumors and related biology.
 * Each entry is manually verified against PubMed.
 * The `date` field ("YYYY-MM") drives the "Recent papers" surface in the UI.
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
  authors: string;
  journal: string;
  year: number;
  doi: string;
  topic: PaperTopic;
  description: string;
  pmid?: string;
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
      "Positive Phase 2 trial (NCT04595747) of rogaratinib, a pan-FGFR inhibitor, in advanced SDH-deficient GIST: 41.7% objective response rate and 31-month median PFS. Mechanistically, SDH-loss-driven DNA hypermethylation disrupts CTCF insulator elements, causing aberrant FGF3/FGF4 co-expression that drives an FGFR1 autocrine loop targetable by pan-FGFR inhibition.",
    pmid: "42191879",
    date: "2026-05",
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
      "Single-institution retrospective series of 9 metastatic SDH-deficient GIST patients who underwent complete cytoreductive surgery (CC-0). Median time-to-recurrence after surgery was 26.1 months versus 3.4 months on prior systemic therapy, suggesting debulking is a viable option for highly selected patients.",
    pmid: "42003827",
    date: "2026-04",
  },
  {
    title:
      "Genomic Profile and Clinicopathologic Analyses of Wild-Type Gastrointestinal Stromal Tumors.",
    authors: "Sun L, Li J, Liu H, et al.",
    journal: "Mol Cancer Res",
    year: 2026,
    doi: "10.1158/1541-7786.MCR-25-0524",
    topic: "Genetics & Syndromes",
    description:
      "NGS study of 119 wild-type GISTs demonstrating that quadruple wild-type tumors (qWT-GIST) harbor ARID1B, SETD2, and PLCG2 alterations with HIF-1 pathway enrichment, and show distinct recurrence-free and overall survival patterns from SDH-deficient and RAS-related subtypes, supporting subtype-specific management.",
    pmid: "41342592",
    date: "2026-04",
  },
];
