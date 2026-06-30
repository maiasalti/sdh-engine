/**
 * Curated list of key papers on SDH-deficient tumors and drug repurposing.
 *
 * Each entry is verified against PubMed (PMID listed where available).
 * Papers whose `date` is within the last ~3 months are surfaced first in the UI.
 *
 * Topic options:
 *   "Review / Overview" | "Diagnosis & Pathology" | "Genetics & Syndromes"
 *   "Tumor Biology" | "Treatment & Trials" | "Case Reports"
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
  /** Abbreviated: "Last F, Last F, et al." */
  authors: string;
  /** ISO journal abbreviation */
  journal: string;
  year: number;
  /** Bare DOI (no https://doi.org/ prefix) */
  doi: string;
  topic: PaperTopic;
  /** 1-2 sentence plain-language summary */
  description: string;
  pmid?: string;
  /** YYYY-MM of publication */
  date?: string;
};

export const PAPERS: CuratedPaper[] = [
  // ── MOST RECENT (2026) ─────────────────────────────────────────────────────

  {
    title:
      "Fibroblast growth factor receptor inhibition for succinate dehydrogenase-deficient gastrointestinal stromal tumors: a phase 2 trial",
    authors: "Merriam P, Morrow JJ, Mazzola E, et al.",
    journal: "Nat Med",
    year: 2026,
    doi: "10.1038/s41591-026-04376-9",
    topic: "Treatment & Trials",
    description:
      "Phase 2 trial of the pan-FGFR inhibitor rogaratinib in 24 patients with advanced SDH-deficient GIST showed an objective response rate of 41.7% and median PFS of 31.0 months — the highest efficacy ever reported for a systemic agent in this disease. The mechanism is epigenetic: DNA hypermethylation from SDH loss disrupts CTCF genomic insulators, unleashing autocrine FGF3/FGF4–FGFR1 signaling.",
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
      "Genome-wide CRISPR-Cas9 screen in SDHB-deficient chromaffin cells identified the neddylation pathway (UBE2F/UBE2M) as a synthetic-lethal vulnerability; the NAE inhibitor pevonedistat (MLN4924) selectively inhibited growth of SDH-deficient cells. The screen also showed that subunits of the transcriptional mediator complex act as tumor suppressors specifically in the SDH-deficient context.",
    pmid: "42181244",
    date: "2026-04",
  },
  {
    title:
      "Succinate dehydrogenase-deficient cancer cells have increased susceptibility to Ym155-induced DNA damage",
    authors: "Guo Q, Lee S, Armstrong N, et al.",
    journal: "Endocr Relat Cancer",
    year: 2026,
    doi: "10.1530/ERC-25-0397",
    topic: "Tumor Biology",
    description:
      "Ym155 (a ROS-generating compound) showed preferential synthetic-lethal cytotoxicity toward SDHB-deficient cells across multiple models including primary human pheochromocytoma cells. The mechanism links to KDM4 inhibition by succinate: impaired KDM4-mediated histone demethylation disrupts DNA repair, rendering cells hyper-sensitive to Ym155-induced DNA damage.",
    pmid: "41711310",
    date: "2026-03",
  },
  {
    title:
      "Cytoreductive Surgery in Patients With Metastatic Succinate Dehydrogenase-Deficient Gastrointestinal Stromal Tumors",
    authors: "Chen KY, Antkowiak M, Sharma AK, et al.",
    journal: "J Surg Oncol",
    year: 2026,
    doi: "10.1002/jso.70259",
    topic: "Treatment & Trials",
    description:
      "Single-institution retrospective analysis (n = 9) showing that complete cytoreductive surgery in metastatic SDH-deficient GIST achieved a median time-to-recurrence of 26.1 months — significantly longer than prior systemic therapy lines. The study highlights surgery as a meaningful disease-control option in carefully selected patients with slow-growing disease.",
    pmid: "42003827",
    date: "2026-04",
  },
  {
    title:
      "Gastric GIST with life-threatening anaemia and paraganglioma: a rare presentation of suspected Carney-Stratakis syndrome in a young adult",
    authors: "Ganju N, Ndulue C, Erega HT, et al.",
    journal: "J Surg Case Rep",
    year: 2026,
    doi: "10.1093/jscr/rjag517",
    topic: "Case Reports",
    description:
      "Case report of a 23-year-old male with co-occurring gastric SDH-deficient GIST and carotid paraganglioma confirmed by germline SDHx mutation — illustrating Carney-Stratakis syndrome. The case underscores the importance of SDHB immunohistochemistry and germline testing when GIST presents in young patients with atypical (hematologic) manifestations.",
    pmid: "42368654",
    date: "2026-06",
  },
  {
    title:
      "Genome-wide SNP-based Profiling of Loss of Heterozygosity Reveals Distinct Molecular Subgroup-specific Patterns in Gastrointestinal Stromal Tumors",
    authors: "Maloberti T, Nannini M, Astolfi A, et al.",
    journal: "Lab Invest",
    year: 2026,
    doi: "10.1016/j.labinv.2026.106148",
    topic: "Genetics & Syndromes",
    description:
      "SNP-based NGS panel analysis of 49 GISTs showed that SDH-deficient tumors (n = 8) display minimal chromosomal instability compared to KIT-mutant GIST, confirming their epigenetically driven biology rather than genomic instability as the dominant mechanism. Chromosome 14 loss was the most common event across all subtypes.",
    pmid: "42336245",
    date: "2026-06",
  },
  {
    title:
      "Genomic Profile and Clinicopathologic Analyses of Wild-Type Gastrointestinal Stromal Tumors",
    authors: "Sun L, Li J, Liu H, et al.",
    journal: "Mol Cancer Res",
    year: 2026,
    doi: "10.1158/1541-7786.MCR-25-0524",
    topic: "Genetics & Syndromes",
    description:
      "Analysis of 119 wild-type GISTs in two cohorts identified novel fusions and mutations (ARID1B, SETD2, PLCG2) in quadruple wild-type cases and found HIF-1 pathway enrichment as a prognostic factor. Stratified comparisons showed SDH-deficient GISTs had better recurrence-free survival than quadruple wild-type tumors in the low-risk setting.",
    pmid: "41342592",
    date: "2026-04",
  },
  {
    title:
      "Hereditary syndromes and RCC: what radiologists need to know",
    authors: "Charbel C, Withey SJ, Serrao E, et al.",
    journal: "Abdom Radiol (NY)",
    year: 2025,
    doi: "10.1007/s00261-025-05302-2",
    topic: "Diagnosis & Pathology",
    description:
      "Comprehensive radiology review of all seven hereditary RCC syndromes recognised by NCCN, with a dedicated section on SDH-deficient RCC. Covers imaging characteristics, the radiologic differential with other hereditary subtypes, and surveillance strategies for patients and at-risk family members.",
    pmid: "41284030",
    date: "2025-11",
  },

  // ── FOUNDATIONAL PAPERS ───────────────────────────────────────────────────

  {
    title:
      "SDH mutations establish a hypermethylator phenotype in paraganglioma",
    authors: "Letouzé E, Martinelli C, Loriot C, et al.",
    journal: "Cancer Cell",
    year: 2013,
    doi: "10.1016/j.ccr.2013.04.018",
    topic: "Tumor Biology",
    description:
      "Landmark study demonstrating that succinate accumulation from SDH mutations inhibits α-KG-dependent histone and DNA demethylases, establishing a global DNA hypermethylator phenotype (CIMP) in paraganglioma. Showed that decitabine treatment reversed epigenetic silencing and the migratory phenotype in SDH-deficient chromaffin cells — providing the first mechanistic rationale for DNMT inhibitors in SDH-deficient tumors.",
    pmid: "23707781",
    date: "2013-05",
  },
  {
    title:
      "Succinate dehydrogenase mutation underlies global epigenomic divergence in gastrointestinal stromal tumor",
    authors: "Killian JK, Kim SY, Miettinen M, et al.",
    journal: "Cancer Discov",
    year: 2013,
    doi: "10.1158/2159-8290.CD-13-0092",
    topic: "Tumor Biology",
    description:
      "Infinium 450K methylation array analysis revealed an order-of-magnitude greater DNA hypermethylation in SDH-deficient GIST (84,900 targets) versus KIT-mutant GIST (8,400 targets). Established the direct link between SDH loss and global CpG hypermethylation in GIST and showed the same pattern in SDH-mutant paraganglioma/pheochromocytoma — cementing the oncometabolite model.",
    pmid: "23550148",
    date: "2013-04",
  },
];
