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
      "Functional profiling of somatostatin receptors identifies somatostatin receptor subtype 2 as a vulnerability in Succinate Dehydrogenase SDHB-deficient pheochromocytomas and paragangliomas",
    authors: "García-Vioque V, Pedraza-Arevalo S, Moreno-Montilla MT, et al.",
    journal: "Mol Biomed",
    year: 2026,
    doi: "10.1186/s43556-026-00440-5",
    topic: "Tumor Biology",
    description:
      "Systematic functional screening of somatostatin receptor agonists in SDHB-knockdown versus wild-type pheochromocytoma/paraganglioma cell lines found that SDHB-deficient cells exhibit stronger membrane SSTR2 expression and receptor internalization, and that the selective SSTR2-full agonist BIM-23120 — but not octreotide or pasireotide — selectively reduced proliferation and induced apoptosis in SDHB-deficient cells by dephosphorylating pro-survival kinase cascades. Providing a mechanistic explanation for why cold somatostatin analogs have historically failed in PPGL clinical trials while PRRT (which relies on SSTR2 binding) succeeds: SDHB deficiency specifically sensitizes tumor cells to SSTR2 full agonism, identifying this receptor subtype as a selective pharmacological vulnerability in the SDHB-deficient subset.",
    pmid: "41928014",
    date: "2026-04",
  },
  {
    title:
      "The clinical landscape of HIF2α inhibitors in oncology",
    authors: "Saad E, Machaalani M, McDermott DF, Choueiri TK.",
    journal: "Nat Rev Clin Oncol",
    year: 2026,
    doi: "10.1038/s41571-026-01145-y",
    topic: "Review / Overview",
    description:
      "Comprehensive Nat Rev Clin Oncol review of HIF-2α biology and the clinical milestones of belzutifan from VHL disease through sporadic clear-cell RCC to pheochromocytoma and paraganglioma, directly validating the pseudohypoxic mechanism as a cross-tumor therapeutic target. Covers the structural basis for HIF-2α druggability, resistance mechanisms, and the rationale for extending HIF-2α inhibition to SDH-deficient and other pseudohypoxic tumor types.",
    pmid: "42050152",
    date: "2026-04",
  },
  {
    title:
      "Succinate dehydrogenase loss suppresses pyrimidine biosynthesis via succinate-mediated inhibition of aspartate transcarbamylase",
    authors: "Hart ML, Sokolov D, Danquah S, Zheng E, Doan AD, Davidsen K, et al.",
    journal: "Nat Metab",
    year: 2026,
    doi: "10.1038/s42255-026-01524-w",
    topic: "Tumor Biology",
    description:
      "In cells with SDH inhibition, pyrimidine biosynthesis is suppressed through a dual mechanism: aspartate depletion (as oxidative aspartate synthesis via the TCA cycle is lost) and direct succinate-mediated inhibition of aspartate transcarbamylase (ATCase), the enzyme committing aspartate to the pyrimidine de novo synthesis pathway. Unlike other models of aspartate limitation, SDH inhibition produces an unexpected aspartate rebound that still fails to rescue proliferation, suggesting the succinate-ATCase block is the dominant anti-proliferative mechanism — a new metabolic vulnerability with potential implications for nucleotide-synthesis-targeted therapy in SDH-deficient cancers.",
    pmid: "42082831",
    date: "2026-05",
  },
  {
    title: "Epigenetics and disease progression in neuroendocrine neoplasms",
    authors: "Lobato EC, Lafranchi AF, Freitas-Castro F, et al.",
    journal: "Endocr Rev",
    year: 2026,
    doi: "10.1210/endrev/bnag005",
    topic: "Review / Overview",
    description:
      "Comprehensive Endocrine Reviews synthesis of epigenetic regulation across all major neuroendocrine neoplasm types — including detailed coverage of pheochromocytomas and paragangliomas — cataloguing SDHx-driven CIMP hypermethylation, ATRX/TERT alterations governing metastatic risk, histone modification patterns, and non-coding RNA dysregulation as both prognostic markers and therapeutic targets. Reviews methylation-based classifiers and circulating epigenetic biomarkers as emerging precision tools, and covers DNA methyltransferase inhibitors, HDAC inhibitors, and RNA-modifying enzyme modulators under active investigation in neuroendocrine malignancies.",
    pmid: "41693399",
    date: "2026-07",
  },
  {
    title:
      "Molecular Imaging and Radioligand Therapies in Pheochromocytomas and Paragangliomas",
    authors: "Hernandez-Felix JH, Golagha M, Jha A, Varghese D, Grozinsky-Glasberg S, Riechelmann R, et al.",
    journal: "Endocr Relat Cancer",
    year: 2026,
    doi: "10.1530/ERC-26-0036",
    topic: "Treatment & Trials",
    description:
      "Authoritative review of molecular imaging and radioligand therapy in PPGL, explaining how germline genotype (SDHx, VHL, RET, NF1, TMEM127/MAX) shapes selection among 68Ga/64Cu-DOTATATE, 18F-FDOPA, 18F-FDG, and 123I/131I-MIBG and governs eligibility for PRRT (Lu-177-DOTATATE) versus MIBG therapy. SDH-deficient PPGLs are profiled as typically high SSTR2-expressing (supporting DOTATATE imaging and PRRT) and FDG-avid (reflecting pseudohypoxic glucose upregulation), providing a practical guide to radioligand selection based on SDH-specific tumor biology.",
    pmid: "42454478",
    date: "2026-07",
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
  {
    title:
      "Genotype-location interaction defines the SSTR-PET phenotype in paragangliomas and pheochromocytomas",
    authors: "Imperiale A, Montanini F, Canu L, Rapizzi E, Pacak K, Taieb D, Berti V, et al.",
    journal: "Eur J Nucl Med Mol Imaging",
    year: 2026,
    doi: "10.1007/s00259-026-08117-5",
    topic: "Diagnosis & Pathology",
    description:
      "Multi-center study of 174 PPGLs (91 patients) demonstrating that SDHx genotype and anatomical location interact significantly (p<0.001) on all DOTATATE-PET parameters: SDHx-related PPGLs show uniform high SSTR uptake regardless of anatomical location, whereas sporadic PPGLs display a cranio-caudal gradient (highest uptake in head-and-neck, substantially lower in abdominal lesions). SDHx genotype versus sporadic disease in head-and-neck PGL was discriminated with 87.3% accuracy using SSTR-PET parameters alone. These findings define an SDHx-specific SSTR-PET phenotype with direct implications for DOTATATE-PET interpretation and PRRT eligibility assessment in SDH-deficient patients regardless of tumor location.",
    pmid: "42554827",
    date: "2026-08",
  },
  {
    title:
      "Belzutifan, A Hypoxia-Inducible Factor 2-Alpha Inhibitor, for Patients with Advanced Pheochromocytoma and Paraganglioma.",
    authors: "Jimenez C, Waguespack SG, Kaplan J, Habra MA, Varghese J.",
    journal: "J Clin Endocrinol Metab",
    year: 2026,
    doi: "10.1210/clinem/dgag324",
    topic: "Treatment & Trials",
    description:
      "Review of belzutifan's clinical development for pseudohypoxia-driven PPGLs, anchored by the LITESPARK-015 Phase 2 trial results: 85% disease control rate and 26% overall response rate in locally advanced or metastatic disease. Belzutifan is now the first oral and second FDA-approved therapy for metastatic PPGL, directly validating HIF-2α inhibition — the same pseudohypoxic mechanism driven by SDHx loss — as a clinical target in this disease.",
    pmid: "42573142",
    date: "2026-08",
  },
  {
    title:
      "First-in-human, open-label, single-arm phase 1 study of [211At] meta-astatobenzylguanidine in patients with pheochromocytoma or paraganglioma.",
    authors: "Okamoto S, Nomura K, Shiga T, et al.",
    journal: "Clin Cancer Res",
    year: 2026,
    doi: "10.1158/1078-0432.CCR-26-1047",
    topic: "Treatment & Trials",
    description:
      "Phase 1 dose-escalation study of [211At]MABG — an alpha-emitting astatine-211 MIBG analog — in 10 patients with refractory MIBG-avid pheochromocytoma or paraganglioma: no dose-limiting toxicities up to 2.1 MBq/kg, 1 partial response and 7 stable disease, with rapid systemic clearance (65% urinary excretion within 72 hours). Establishes clinical feasibility for alpha-particle MIBG therapy as a radiobiologically distinct complement to beta-particle 131I-MIBG and PRRT in MIBG-avid PPGLs.",
    pmid: "42490294",
    date: "2026-07",
  },
  {
    title:
      "SDHC c.397C>T-Related Pheochromocytomas and Paragangliomas: Insights from an International Study.",
    authors: "Parisien-La Salle S, Perreault F, Mahrokhian S, et al.",
    journal: "Endocr Relat Cancer",
    year: 2026,
    doi: "10.1530/ERC-26-0296",
    topic: "Genetics & Syndromes",
    description:
      "International cohort study of 45 patients carrying the SDHC c.397C>T (p.Arg133Ter) founder variant — present in >40% of mutation-positive PGLs in French Canadians — characterizing its phenotype: 97.8% paragangliomas (59.1% head-and-neck, 27.3% thoracic, 13.6% abdominal), 11.1% metastatic disease at diagnosis, and 15.4% post-surgical recurrence over 7.9-year mean follow-up. SDHB IHC loss was confirmed in all available specimens, and the variant likely originated in France before migrating to Quebec and New England.",
    pmid: "42573129",
    date: "2026-08",
  },
  {
    title:
      "Genetic alterations of telomere maintenance pathways in paragangliomas.",
    authors: "Batini L, Lobato EC, Freitas-Castro F, et al.",
    journal: "Arch Endocrinol Metab",
    year: 2026,
    doi: "10.20945/2359-4292-2026-0050",
    topic: "Genetics & Syndromes",
    description:
      "Brazilian cohort of 79 pheochromocytomas and paragangliomas (53 non-metastatic, 26 metastatic) enriched for Cluster 1A germline variants (35.4%; SDHB 25.3%) found somatic TERT promoter PVs (c.-124C>T/C228T) in 2.5% overall — rising to 16.7% of SDHB-germline-positive metastatic patients — with TERT PVs co-occurring exclusively with germline SDHB PVs and associating with extra-adrenal location and metastatic disease; ATRX somatic variants were found in 11.5% but classified as likely benign. Quantifies the TERT/SDHB co-occurrence frequency in a PPGL cohort and directly supports the ATRX/TERT metastatic risk axis, where TERT promoter activation bypasses ATRX-loss-driven ALT to achieve telomere lengthening in the most aggressive SDHB-metastatic subset.",
    pmid: "42155081",
    date: "2026-08",
  },
  {
    title:
      "Pro-tumoural effects of vitamin C supplementation in a zebrafish model for SDHB-associated pheochromocytoma and paraganglioma.",
    authors: "Rapizzi E, Canu L, Bechmann N, et al.",
    journal: "Endocr Relat Cancer",
    year: 2026,
    doi: "10.1530/ERC-25-0370",
    topic: "Tumor Biology",
    description:
      "CRITICAL SAFETY SIGNAL: In a SDHB-deficient pheochromocytoma/paraganglioma zebrafish model, vitamin C (ascorbic acid) supplementation PROMOTED rather than suppressed tumor growth — a counterintuitive finding directly opposite to the hypothesized TET-rescue or pro-oxidant anti-tumor benefit. Plausible mechanisms for the pro-tumorigenic effect include reactivation of pro-survival gene programs silenced by CIMP hypermethylation, paradoxical HIF-1α survival pathway activation, or metabolic anaplerosis support. Clinically important for SDH-deficient patients: oral or IV vitamin C supplementation may be counterproductive in SDHB-PPGL until dedicated mammalian-model and prospective clinical data are available. Cited in this engine's Ascorbic Acid drug entry, which was downgraded from evidence_score 38/preclinical to 18/theoretical based on this finding.",
    pmid: "41404848",
    date: "2026-01",
  },
];
