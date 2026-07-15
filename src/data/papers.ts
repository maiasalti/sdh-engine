export type PaperTopic =
  | "Review / Overview"
  | "Diagnosis & Pathology"
  | "Genetics & Syndromes"
  | "Tumor Biology"
  | "Treatment & Trials"
  | "Case Reports";

export type CuratedPaper = {
  title: string;
  /** Abbreviated: "Smith A, Jones B, et al." */
  authors: string;
  /** ISO journal abbreviation */
  journal: string;
  year: number;
  /** Bare DOI, no https://doi.org/ prefix */
  doi: string;
  topic: PaperTopic;
  /** 1-2 sentence plain-language summary */
  description: string;
  pmid?: string;
  /** YYYY-MM publication date — used to surface papers in "Most recent" section */
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
      "Phase 2 trial of rogaratinib (pan-FGFR inhibitor) in 24 patients with advanced SDH-deficient GIST achieved a 41.7% objective response rate and 31-month median progression-free survival — the strongest prospective efficacy signal yet reported for this rare disease. The mechanistic basis is that SDH-loss-driven DNA hypermethylation disrupts genomic insulator elements at the FGF3/FGF4 locus, aberrantly activating these ligands and creating an autocrine FGFR1 signaling loop selectively in SDH-deficient tumor cells.",
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
      "Genome-wide CRISPR-Cas9 synthetic lethality screen in immortalized SDHB-deficient chromaffin cells identified the neddylation pathway — specifically the ubiquitin-conjugating enzyme UBE2F — as a selective vulnerability absent in normal cells. Neddylation inhibitors pevonedistat (MLN4924) and HA-9104 preferentially suppressed growth of SDHB-deficient cells, nominating the cullin-RING ligase neddylation axis as a new, unbiased drug target.",
    pmid: "42181244",
    date: "2026-04",
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
      "Retrospective series of 9 patients with metastatic SDH-deficient GIST who underwent complete (CC-0) cytoreductive surgery showed a median time to recurrence of 26.1 months post-CRS versus 3.4 months on the last systemic therapy before surgery. While the sample is small and patient selection was stringent, the data suggest surgical debulking may offer meaningful disease control where systemic options have exhausted.",
    pmid: "42003827",
    date: "2026-04",
  },
  {
    title:
      "The Role of the Surgical Pathologist in the Recognition of Hereditary SDH-Deficient Tumor Syndromes",
    authors: "Juhlin CC, Mete O.",
    journal: "Adv Anat Pathol",
    year: 2026,
    doi: "10.1097/PAP.0000000000000541",
    topic: "Diagnosis & Pathology",
    description:
      "Practical pathology-focused review of the full SDH-deficient tumor spectrum — paraganglioma-pheochromocytoma syndromes (PGL1–5), SDH-deficient GIST, SDH-deficient renal cell carcinoma, Carney-Stratakis syndrome, and Carney triad — with a stepwise diagnostic workflow integrating SDHB/SDHA IHC, morphologic cues, and molecular testing, plus guidance on which cases warrant urgent genetic counseling and family surveillance.",
    pmid: "42281449",
    date: "2026-06",
  },
  {
    title:
      "Targeted lipidomics between hPheo1 and SDHB KD cells reveal changes in bioactive lipids and PKC with polyamine pathway inhibition",
    authors: "Alli AA, Bala N, Xu Y, et al.",
    journal: "Physiol Rep",
    year: 2026,
    doi: "10.14814/phy2.70894",
    topic: "Tumor Biology",
    description:
      "Targeted lipidomics in SDHB-knockdown pheochromocytoma cells revealed distinct baseline ether-phospholipid and sphingomyelin signatures versus wild-type cells; treatment with the polyamine pathway inhibitor DENSPM (N1,N11-diethylnorspermine) induced far greater lipid remodeling and caspase-3-dependent apoptosis in SDHB-deficient cells, suggesting polyamine metabolism as a previously unrecognized SDH-specific metabolic vulnerability.",
    pmid: "42249664",
    date: "2026-06",
  },
  {
    title:
      "Multi-omics insights into metastatic pheochromocytomas and paragangliomas: Mechanisms, signatures, and prediction models",
    authors: "Zhou Y, Cui Y, Li T, Tong A.",
    journal: "Hormones (Athens)",
    year: 2026,
    doi: "10.1007/s42000-026-00792-1",
    topic: "Review / Overview",
    description:
      "Comprehensive review synthesizing multi-omics signatures in metastatic PPGL, confirming SDHB-driven pseudohypoxia and CIMP hypermethylation as primary metastatic drivers and cataloguing novel co-occurring alterations: ATRX/TERT mutations, elevated tumor mutational burden, aberrant kynurenine metabolic pathway activity, and an immunosuppressive microenvironment — all emerging as both biomarkers and candidate therapeutic targets.",
    pmid: "42230482",
    date: "2026-06",
  },
  {
    title:
      "Expression Patterns of Succinate Dehydrogenase B: An Immunohistochemical Study of 57 Tumors With Known Germline Pathogenic Alterations",
    authors: "Ornstead MJ, Sirohi D, Albertson DJ, et al.",
    journal: "Int J Surg Pathol",
    year: 2026,
    doi: "10.1177/10668969261439732",
    topic: "Diagnosis & Pathology",
    description:
      "IHC study of 57 SDH-related tumors (paraganglioma, pheochromocytoma, RCC, GIST, seminoma) from patients with confirmed germline SDH pathogenic variants found that 49% showed aberrant retained SDHB staining — divided into four atypical patterns including fine granular blush and focal retention — underscoring that SDHB IHC loss alone cannot exclude SDH deficiency and that any amount of abnormal staining should prompt genetic testing.",
    pmid: "41985045",
    date: "2026-04",
  },
  {
    title:
      "Approach to the Patient with Metastatic Pheochromocytoma and Paraganglioma: Advances in Systemic Therapy",
    authors: "Glover M, Waguespack SG, Campbell MT, et al.",
    journal: "J Clin Endocrinol Metab",
    year: 2026,
    doi: "10.1210/clinem/dgag182",
    topic: "Treatment & Trials",
    description:
      "Contemporary MD Anderson clinical review providing a genotype-directed treatment algorithm for metastatic pheochromocytoma and paraganglioma (MPPGL), integrating belzutifan (recently FDA-approved for MPPGL), sunitinib, cabozantinib, radiopharmaceuticals (131I-MIBG, 177Lu-DOTATATE), and chemotherapy into a clinical decision framework based on SDHx and other genotypes, catecholamine phenotype, and tumor burden. The most current comprehensive guidance for matching systemic therapy to individual patient genotype in advanced PPGL.",
    pmid: "42025325",
    date: "2026-04",
  },
];
