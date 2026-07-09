# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-07-03

**Direction:** drug-pool
**Angle:** FGFR signaling via epigenetic insulator disruption (FGF3/FGF4 autocrine loop) + neddylation pathway synthetic lethality (UBE2F/pevonedistat, CRISPR-identified)
**Papers added:** 6 — PMIDs 42191879, 42181244, 42003827, 42281449, 42249664, 42230482
**Papers rejected (logged to tracker.md):** 15
**Summary:** The standout event this week was a Nature Medicine Phase 2 trial (Merriam et al., PMID 42191879) reporting 41.7% ORR and 31-month median PFS for rogaratinib (pan-FGFR inhibitor) in SDH-deficient GIST — mechanistically driven by hypermethylation-induced insulator disruption releasing oncogenic FGF3/FGF4 autocrine FGFR1 signaling, an SDH-specific epigenetic consequence not previously in the engine. Added the `fgfr-signaling` pathway, FGFR1/FGFR2 targets, rogaratinib (evidence_score 76, clinical_trial), and erdafitinib (FDA-approved pan-FGFR, evidence_score 42, theoretical — accessible alternative pending SDH-GIST-specific data). Separately, an iScience CRISPR screen (Al Khazal et al., PMID 42181244) identified the neddylation pathway as a synthetic lethal vulnerability in SDHB-deficient cells; added the `neddylation` pathway, UBE2F target, and pevonedistat (NAE inhibitor, evidence_score 30, preclinical). Also created `src/data/papers.ts` (curated static paper array) and wired a "Most recent papers" section into the Research tab. Candidate directions not yet explored for future runs: (1) polyamine metabolism / DENSPM (new preclinical data in SDHB KD cells, PMID 42249664), (2) immune microenvironment / kynurenine pathway in metastatic PPGL (PMID 42230482), (3) cytoreductive surgery patient selection criteria.
**PR:** morning/2026-07-03-fgfr-neddylation

## 2026-07-04

**Direction:** drug-pool
**Angle:** Polyamine metabolism — SSAT/SAT1 dependency in SDHx-mutated tumors; DENSPM (N1,N11-diethylnorspermine)
**Papers added:** 1 — PMID 41985045 (SDHB IHC false-negative patterns, Diagnosis & Pathology)
**Papers rejected (logged to tracker.md):** 1 (PMID 42080642, KIT+SDHC concurrent case report); 2 additional out-of-window papers logged (PMIDs 32562798, 31792037)
**Summary:** The 2026-07-03 run explicitly flagged polyamine metabolism / DENSPM as the top candidate direction for follow-up. Completed that work: added the `polyamine-metabolism` pathway (spermidine/spermine specifically elevated in SDHx-mutated PCC/PGL tissues and SDHB KD cells — Rai et al. Metabolism 2020, PMID 32562798), added SAT1 as a target gene, and added DENSPM (directly tested in SDHB-deficient cells and xenografts, showing significantly greater apoptosis than WT; second supporting paper PMID 42249664 was already in papers.ts). Evaluated but rejected the IGF2/IGF1R direction: the only completed Phase II trial of an IGF1R inhibitor (linsitinib) in WT/SDH-deficient GIST showed 0 objective responses (PMID 31792037), disqualifying it as a candidate. SDHB IHC paper (PMID 41985045) added to Diagnosis & Pathology — the 49% false-negative rate for standard SDHB IHC is practically important for the disease community. Candidate directions not yet explored: (1) kynurenine pathway / IDO1 inhibition in SDHB-PPGL (PMID 42230482 supports; epacadostat or linrodostat), (2) ATRX/TERT co-mutations in SDHB-driven metastatic tumors as biomarkers for PARP inhibitor sensitivity, (3) DFMO/eflornithine (FDA-approved ODC inhibitor, upstream of the polyamine elevation — no SDH-specific data yet but a logical mechanistic extension of today's direction).
**PR:** morning/2026-07-04-polyamine-metabolism

## 2026-07-09

**Direction:** drug-pool
**Angle:** KDM4 / DNA repair synthetic lethality — Ym155 (sepantronium bromide) exploits succinate-driven KDM4A/B/C inhibition and impaired DSB repair in SDH-deficient cells
**Papers added:** 1 — PMID 41711310
**Papers rejected (logged to tracker.md):** 16 (12 off-target pituitary/RCC/GIST-general; 3 outside 3-month window; 1 SDH-RCC case report with no new mechanism)
**Summary:** PubMed scan surfaced a directly relevant Stanford preclinical paper (Guo et al., Endocr Relat Cancer 2026, PMID 41711310) identifying Ym155 (sepantronium bromide) as synthetically lethal with SDHB deficiency across four validated cell models including primary human pheochromocytoma cells. The mechanism is mechanistically distinct from all previous engine pathways: succinate inhibits KDM4A/B/C (α-KG-dependent H3K9/K36 demethylases) which are required for DNA DSB repair; Ym155-induced ROS/DNA damage is therefore selectively lethal where KDM4-mediated repair is compromised. Added new `kdm4-dna-repair` pathway, KDM4A target gene, and Ym155 drug entry (evidence_score 38, preclinical) with citation to PMID 41711310 and NCT00514267 for clinical safety data. Paper added to papers.ts (date 2026-03; PubMed returned it within April+ filter despite March pub date, likely an indexing lag). IDO1/kynurenine direction (flagged in prior two runs) was not pursued today because the PubMed search returned zero results specifically linking IDO1 to PPGL, making the evidence too indirect to clear the hard relevance gate with a new drug entry; this direction remains available for a future run if direct mechanistic data emerge.
**PR:** morning/2026-07-09-kdm4-dna-repair-ym155
