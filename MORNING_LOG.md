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

## 2026-07-06

**Direction:** drug-pool
**Angle:** Polyamine metabolism — DENSPM (polyamine analog / SSAT inducer, xenograft evidence in SDHB-KD cells) and eflornithine (ODC1 inhibitor, FDA-approved for neuroblastoma, same neural crest lineage)
**Papers added:** 2 — PMIDs 41985045, 41904096
**Papers rejected (logged to tracker.md):** 4 (PMIDs 42080642, 40827068, 39337514 outside scan window; 40827068 case report)
**Summary:** Implemented the polyamine metabolism direction flagged in the 2026-07-03 log as a candidate for future runs. An overactive polyamine pathway in SDHB-deficient cells was discovered by untargeted metabolomics and validated in large-scale human PPGL tumor samples (PMID 39337514); DENSPM selectively induced caspase-3 apoptosis and suppressed SDHB-KD xenograft growth by collapsing lipid metabolism (plasmanyl ether lipids, FA synthesis — PMID 42249664, 39337514). Added: `polyamine-metabolism` pathway, ODC1 and SAT1 targets, DENSPM (evidence_score 42, preclinical), and eflornithine (evidence_score 33, theoretical; FDA-approved for neuroblastoma — neural crest precedent). Paper scan found 2 qualifying new papers (SDHB IHC staining patterns study; rare RCC oncology review). Candidate directions for future runs: (1) kynurenine/IDO1 immune-metabolic axis in SDHB PPGL — aberrant kynurenine pathway flagged in PMID 42230482; IDO1 inhibitors (epacadostat, linrodostat) have clinical data; (2) ferroptosis sensitivity — DENSPM depletes plasmanyl ether lipids that protect SDH-deficient cells from ferroptosis, suggesting GPX4 inhibitors or system Xc- inhibitors may have selective activity; (3) Open Targets/DepMap evidence-source integration to re-rank existing drug pool.
**PR:** morning/2026-07-06-polyamine-metabolism
