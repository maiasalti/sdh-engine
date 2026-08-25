/**
 * Curated library of academic papers on SDH-deficient GIST (and the wider
 * SDH-deficient tumour family).
 *
 * Paper metadata sourced from PubMed. Cite original authors via the linked DOIs.
 * DOI links are built as `https://doi.org/<doi>`.
 *
 * `date` is an ISO-ish publication date (`YYYY-MM` or `YYYY-MM-DD`) used for
 * sorting and for the "Most recent papers" section. When only the year is
 * known, omit `date` and rely on `year`.
 */

export const PAPER_TOPICS = [
  "Review / Overview",
  "Diagnosis & Pathology",
  "Genetics & Syndromes",
  "Tumor Biology",
  "Treatment & Trials",
  "Case Reports",
] as const;

export type PaperTopic = (typeof PAPER_TOPICS)[number];

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
      "Selective Internal Radiation Therapy (SIRT) for SDH-Deficient GIST Demonstrates Encouraging Durable Response Rates: An International Multicenter Case Series.",
    authors: "Berman ZT, Hohenberger P, Bulusu R, et al.",
    journal: "Cancers (Basel)",
    year: 2026,
    doi: "10.3390/cancers18162704",
    topic: "Treatment & Trials",
    description:
      "International multicenter retrospective series (n=12; 3 centers in US, Germany, and UK) of Y-90 selective internal radiation therapy (SIRT/radioembolization) for progressive, unresectable SDH-deficient GIST hepatic metastases: 66.7% objective response rate (1 CR, 7 PR), 100% disease control rate, only 1 grade ≥3 adverse event, and median overall survival not reached at 32-month follow-up. Suggests SDH-deficient GIST may be disproportionately radiosensitive and that liver-directed SIRT is a useful option when systemic therapies are limited.",
    pmid: "42650014",
    date: "2026-08",
  },
  {
    title: "Succinate Dehydrogenase-Deficient Gastrointestinal Stromal Tumors",
    authors: "Ibrahim A, Chopra S",
    journal: "Arch Pathol Lab Med",
    year: 2019,
    date: "2019-06",
    pmid: "31169996",
    doi: "10.5858/arpa.2018-0370-RS",
    topic: "Review / Overview",
    description:
      "Concise overview of SDH-deficient GIST as ~10% of gastric GISTs: female predilection, young patients, distinctive morphology, imatinib resistance, and the central role of pathology in diagnosis.",
  },
  {
    title: "Succinate dehydrogenase-deficient gastrointestinal stromal tumors",
    authors: "Wang YM, Gu ML, Ji F",
    journal: "World J Gastroenterol",
    year: 2015,
    date: "2015-02",
    pmid: "25741136",
    doi: "10.3748/wjg.v21.i8.2303",
    topic: "Review / Overview",
    description:
      "Review situating SDH-deficient GIST within wild-type GISTs, covering SDHB loss, IGF1R/HIF-1α and VEGFR signaling, and emerging therapeutic targets.",
  },
  {
    title:
      "Succinate dehydrogenase deficient gastrointestinal stromal tumors (GISTs) — a review",
    authors: "Miettinen M, Lasota J",
    journal: "Int J Biochem Cell Biol",
    year: 2014,
    doi: "10.1016/j.biocel.2014.05.033",
    topic: "Review / Overview",
    description:
      "Foundational review framing SDH deficiency as an energy-metabolism defect; details gastric-only location, SDHB IHC loss, germline mutation spectrum, and succinate-driven pseudohypoxia.",
  },
  {
    title: "Gastrointestinal stromal tumours (GIST) in children: An update of this orphan disease",
    authors: "Min V, Corradini N, Macagno N, et al.",
    journal: "Bull Cancer",
    year: 2024,
    date: "2024-10",
    pmid: "39455327",
    doi: "10.1016/j.bulcan.2024.07.011",
    topic: "Review / Overview",
    description:
      "Update on paediatric GIST — which is overwhelmingly SDH-deficient — covering its distinct biology, diagnosis, and management challenges versus adult KIT/PDGFRA-mutant disease.",
  },
  {
    title:
      "A Review of Genomic Testing and SDH-Deficiency in Gastrointestinal Stromal Tumors: Getting to the GIST",
    authors: "Florou V, Jacobs MF, Casey R, et al.",
    journal: "Cancer Med",
    year: 2025,
    doi: "10.1002/cam4.70669",
    topic: "Genetics & Syndromes",
    description:
      "Proposes a simplified genomic workup algorithm for GIST and argues all SDH-deficient GIST patients need ongoing surveillance for other SDHx-related tumors regardless of germline testing results.",
  },
  {
    title: "Gastrointestinal Stromal Tumors: The GIST of Precision Medicine",
    authors: "Mei L, Smith SC, Faber AC, et al.",
    journal: "Trends Cancer",
    year: 2017,
    doi: "10.1016/j.trecan.2017.11.006",
    topic: "Genetics & Syndromes",
    description:
      "Integrates clinicopathologic, genetic, and epigenetic data to split GISTs into SDH-competent vs SDH-deficient groups, including SDHC epimutation, Carney triad, and Carney–Stratakis syndrome.",
  },
  {
    title:
      "A Duodenal SDH-Deficient Gastrointestinal Stromal Tumor in a Patient With a Germline SDHB Mutation",
    authors: "Elston MS, Sehgal S, Dray M, et al.",
    journal: "J Clin Endocrinol Metab",
    year: 2017,
    date: "2017-05",
    pmid: "28324028",
    doi: "10.1210/jc.2017-00165",
    topic: "Genetics & Syndromes",
    description:
      "Notable case of an SDH-deficient GIST arising in the duodenum rather than the stomach, in a patient with a germline SDHB mutation — expanding the recognized anatomic range.",
  },
  {
    title:
      "Carney Triad, Carney-Stratakis Syndrome, 3PAS and Other Tumors Due to SDH Deficiency",
    authors: "Pitsava G, Settas N, Faucz FR, et al.",
    journal: "Front Endocrinol (Lausanne)",
    year: 2021,
    date: "2021-05",
    pmid: "34012423",
    doi: "10.3389/fendo.2021.680609",
    topic: "Genetics & Syndromes",
    description:
      "Review of the SDH-deficiency syndromes — Carney triad, Carney–Stratakis syndrome and the 3PAs association — clarifying how germline versus epigenetic SDH loss produces overlapping tumour combinations.",
  },
  {
    title:
      "Succinate dehydrogenase (SDH) deficiency, Carney triad and the epigenome",
    authors: "Settas N, Faucz FR, Stratakis CA",
    journal: "Mol Cell Endocrinol",
    year: 2017,
    date: "2017-07",
    pmid: "28739378",
    doi: "10.1016/j.mce.2017.07.018",
    topic: "Genetics & Syndromes",
    description:
      "Explores how SDH loss reshapes the epigenome through succinate-driven DNA hypermethylation — the mechanism thought to underlie Carney triad in the absence of a germline SDHx mutation.",
  },
  {
    title:
      "Succinate Dehydrogenase (SDH)-Deficient Pancreatic Neuroendocrine Tumor Expands the SDH-Related Tumor Spectrum",
    authors: "Niemeijer ND, Papathomas TG, Korpershoek E, et al.",
    journal: "J Clin Endocrinol Metab",
    year: 2015,
    date: "2015-08",
    pmid: "26259135",
    doi: "10.1210/jc.2015-2689",
    topic: "Genetics & Syndromes",
    description:
      "Documents an SDH-deficient pancreatic neuroendocrine tumour, adding pNET to the growing list of tumours that can arise from germline SDHx deficiency.",
  },
  {
    title:
      "Identification of succinate dehydrogenase-deficient bladder paragangliomas",
    authors: "Mason EF, Sadow PM, Wagner AJ, et al.",
    journal: "Am J Surg Pathol",
    year: 2013,
    date: "2013-10",
    pmid: "23797725",
    doi: "10.1097/PAS.0b013e318293d83c",
    topic: "Genetics & Syndromes",
    description:
      "Reports SDH-deficient paragangliomas arising in the bladder, broadening the anatomic spectrum of SDH-related tumours and underscoring SDHB immunostaining as a screening tool across sites.",
  },
  {
    title: "Succinate dehydrogenase (SDH)-deficient neoplasia",
    authors: "Gill AJ",
    journal: "Histopathology",
    year: 2018,
    date: "2018-01",
    pmid: "29239034",
    doi: "10.1111/his.13277",
    topic: "Diagnosis & Pathology",
    description:
      "Authoritative pathology review of the whole SDH-deficient tumour family (GIST, paraganglioma, renal cell carcinoma, pituitary), establishing loss of SDHB immunostaining as the unifying diagnostic marker regardless of which subunit is mutated.",
  },
  {
    title:
      "Clinicopathologic features of succinate dehydrogenase-deficient gastrointestinal stromal tumor",
    authors: "Cheng Y, Zhang Z, Zhu H, et al.",
    journal: "Zhonghua Bing Li Xue Za Zhi",
    year: 2016,
    date: "2016-03",
    pmid: "26956958",
    doi: "10.3760/cma.j.issn.0529-5807.2016.03.003",
    topic: "Diagnosis & Pathology",
    description:
      "Clinicopathologic series characterising the morphology, SDHB-loss immunophenotype, and clinical behaviour of SDH-deficient gastric GIST. (Published in Chinese.)",
  },
  {
    title:
      "Gastrointestinal stromal tumors of the stomach and precursor lesions",
    authors: "Wardelmann E, Hartmann W, Trautmann M, et al.",
    journal: "Pathologe",
    year: 2017,
    date: "2017-03",
    pmid: "28243730",
    doi: "10.1007/s00292-017-0275-z",
    topic: "Diagnosis & Pathology",
    description:
      "Pathology review of gastric GIST and precursor lesions, including recognition and work-up of the SDH-deficient subtype. (Published in German.)",
  },
  {
    title: "Preferential MGMT hypermethylation in SDH-deficient wild-type GIST",
    authors: "Giger OT, Ten Hoopen R, Shorthouse D, et al.",
    journal: "J Clin Pathol",
    year: 2023,
    doi: "10.1136/jcp-2022-208462",
    topic: "Tumor Biology",
    description:
      "Finds MGMT promoter hypermethylation exclusively in a subset of SDH-deficient wild-type GIST, supporting MGMT testing to identify patients who may benefit from temozolomide.",
  },
  {
    title:
      "Gene Expression Landscape of SDH-Deficient Gastrointestinal Stromal Tumors",
    authors: "Indio V, Schipani A, Nannini M, et al.",
    journal: "J Clin Med",
    year: 2021,
    doi: "10.3390/jcm10051057",
    topic: "Tumor Biology",
    description:
      "Transcriptomic profiling showing SDH-deficient GISTs have a distinct expression signature — elevated neural markers, FGFR signaling, hypoxia/EMT, and a depleted immune microenvironment.",
  },
  {
    title:
      "Succinate dehydrogenase-deficient GISTs are characterized by IGF1R overexpression",
    authors: "Chou A, Chen J, Clarkson A, et al.",
    journal: "Mod Pathol",
    year: 2012,
    date: "2012-05",
    pmid: "22555179",
    doi: "10.1038/modpathol.2012.77",
    topic: "Tumor Biology",
    description:
      "Shows SDH-deficient GISTs strongly overexpress IGF1R, nominating the IGF1R axis as a potential therapeutic target distinct from KIT/PDGFRA-driven GIST.",
  },
  {
    title:
      "Overexpression of insulin-like growth factor 1 receptor and frequent mutational inactivation of SDHA in wild-type SDHB-negative gastrointestinal stromal tumors",
    authors: "Belinsky MG, Rink L, Flieder DB, et al.",
    journal: "Genes Chromosomes Cancer",
    year: 2012,
    date: "2012-10",
    pmid: "23109135",
    doi: "10.1002/gcc.22023",
    topic: "Tumor Biology",
    description:
      "Identifies frequent SDHA mutations in SDHB-negative wild-type GIST alongside IGF1R overexpression, refining the genetic and molecular definition of the SDH-deficient subset.",
  },
  {
    title:
      "Carney triad, SDH-deficient tumors, and Sdhb+/- mice share abnormal mitochondria",
    authors: "Szarek E, Ball ER, Imperiale A, et al.",
    journal: "Endocr Relat Cancer",
    year: 2015,
    date: "2015-03",
    pmid: "25808178",
    doi: "10.1530/ERC-15-0069",
    topic: "Tumor Biology",
    description:
      "Finds shared mitochondrial structural abnormalities across Carney triad tumours, SDH-deficient human tumours, and Sdhb+/- mice, tying the morphologic phenotype directly to defective SDH/mitochondrial function.",
  },
  {
    title:
      "The role of metabolic enzymes in mesenchymal tumors and tumor syndromes: genetics, pathology, and molecular mechanisms",
    authors: "Schaefer IM, Hornick JL, Bovée JVMG",
    journal: "Lab Invest",
    year: 2018,
    date: "2018-01",
    pmid: "29339836",
    doi: "10.1038/s41374-017-0003-6",
    topic: "Tumor Biology",
    description:
      "Reviews how mutations in metabolic enzymes (including SDH) drive mesenchymal tumours and tumour syndromes, connecting genetics, pathology, and the molecular mechanisms of metabolic-enzyme deficiency.",
  },
  {
    title:
      "Novel Genomic Risk Stratification Model for Primary GIST in the Adjuvant Therapy Era",
    authors: "Dermawan JK, Kelly C, Gao Z, et al.",
    journal: "Clin Cancer Res",
    year: 2023,
    doi: "10.1158/1078-0432.CCR-23-1184",
    topic: "Tumor Biology",
    description:
      "Machine-learning genomic risk model for primary GIST; in SDH-deficient cases, TP53 mutations or chr1q amplification predicted worse recurrence-free and disease-free survival.",
  },
  {
    title:
      "Genomic Profile and Clinicopathologic Analyses of Wild-Type Gastrointestinal Stromal Tumors",
    authors: "Sun L, Li J, Liu H, et al.",
    journal: "Mol Cancer Res",
    year: 2026,
    date: "2026-04",
    pmid: "41342592",
    doi: "10.1158/1541-7786.MCR-25-0524",
    topic: "Tumor Biology",
    description:
      "Recent genomic and clinicopathologic profiling of wild-type (including SDH-deficient) GIST, mapping the mutational landscape that distinguishes these tumours from KIT/PDGFRA-driven disease.",
  },
  {
    title:
      "Current management of succinate dehydrogenase-deficient gastrointestinal stromal tumors",
    authors: "Neppala P, Banerjee S, Fanta PT, et al. (incl. Sicklick JK)",
    journal: "Cancer Metastasis Rev",
    year: 2019,
    doi: "10.1007/s10555-019-09818-0",
    topic: "Treatment & Trials",
    description:
      "Management-focused review: surgery as mainstay for localized disease, TKI resistance and controversy, association with Carney–Stratakis syndrome, and ongoing trials of systemic agents.",
  },
  {
    title: "Targeted therapy in SDH-deficient GIST",
    authors: "Nannini M, Rizzo A, Indio V, et al.",
    journal: "Ther Adv Med Oncol",
    year: 2021,
    date: "2021-06",
    pmid: "34262616",
    doi: "10.1177/17588359211023278",
    topic: "Treatment & Trials",
    description:
      "Reviews the controversial and conflicting evidence on TKIs in SDH-deficient GIST and synthesizes current medical-treatment options for this rare subgroup.",
  },
  {
    title: "Identifying and managing rare subtypes of gastrointestinal stromal tumors",
    authors: "Mavroeidis L, Kalofonou F, Casey R, et al.",
    journal: "Expert Rev Gastroenterol Hepatol",
    year: 2025,
    date: "2025-04",
    pmid: "40156874",
    doi: "10.1080/17474124.2025.2486304",
    topic: "Treatment & Trials",
    description:
      "Practical review on recognising and managing rare GIST subtypes, including SDH-deficient GIST, and how their distinct biology should reshape surveillance and systemic-treatment decisions.",
  },
  {
    title:
      "Olverembatinib, a multikinase inhibitor that modulates lipid metabolism, in advanced SDH-deficient GIST: a phase 1b study and translational research",
    authors: "Qiu HB, Liang Z, Yang J, et al. (NCT03594422)",
    journal: "Signal Transduct Target Ther",
    year: 2025,
    doi: "10.1038/s41392-025-02456-9",
    topic: "Treatment & Trials",
    description:
      "Largest prospective trial in this subtype: olverembatinib showed a 23% response rate and 25.7-month median PFS in TKI-failed SDH-deficient GIST, with a lipid-metabolism/CD36 mechanism.",
  },
  {
    title:
      "A dedifferentiated SDH-deficient GIST with MDM2 amplification: case report and literature review",
    authors: "Gong QX, Ding Y, Zhang WM, et al.",
    journal: "Front Oncol",
    year: 2023,
    date: "2023-09",
    pmid: "37781202",
    doi: "10.3389/fonc.2023.1233561",
    topic: "Case Reports",
    description:
      "Rare case of dedifferentiation in an SDHC-mutated GIST with MDM2 amplification, exploring p53-associated and KIT-independent escape mechanisms.",
  },
  {
    title:
      "An unusual paraesophageal and diaphragmatic SDHA-deficient GIST metastases case report",
    authors: "Teke ME, Choi A, Sarvestani AL, et al.",
    journal: "J Gastrointest Oncol",
    year: 2023,
    date: "2023-02",
    pmid: "36915446",
    doi: "10.21037/jgo-22-714",
    topic: "Case Reports",
    description:
      "Documents previously undescribed extra-abdominal metastasis (diaphragm/mediastinum) of SDHA-deficient GIST, managed with robotic metastasectomy.",
  },
  {
    title:
      "Multiple Succinate Dehydrogenase-Deficient Gastrointestinal Stromal Tumors of the Stomach: A Case Report",
    authors: "Yang X, Yang P, Guo P, et al.",
    journal: "Am J Case Rep",
    year: 2025,
    doi: "10.12659/AJCR.947545",
    topic: "Case Reports",
    description:
      "Young male with multifocal gastric SDH-deficient GIST presenting with bleeding, treated surgically; reinforces multifocality, indolent course, and imatinib resistance with possible sunitinib/regorafenib benefit.",
  },
];
