# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-06-28

**Direction:** drug-pool
**Angle:** FGFR autocrine signaling (FGF3/FGF4 via CIMP-driven insulator disruption) + neddylation/CRL synthetic lethality
**Papers added:** 0 (no papers.ts exists; research page uses live PubMed API. Two highly relevant papers found for future reference: PMID 42191879, PMID 42181244)
**Summary:** Added two mechanistically distinct, newly-evidenced pathways not in the engine: (1) FGFR autocrine axis — SDH-loss CIMP disrupts 11q13 insulators derepressing FGF3/FGF4→FGFR1; Phase 2 trial (NCT04595747) of rogaratinib in SDH-deficient GIST achieved 41.7% ORR/31-month PFS (Merriam et al. Nat Med May 2026, PMID 42191879), the highest-efficacy trial result yet seen for any targeted agent in this tumor type. Added Rogaratinib (evidence_score 84, clinical_trial) and Erdafitinib (FDA-approved pan-FGFR, score 67, preclinical status for SDH-GIST). (2) Neddylation dependency — CRISPR screen in SDHB-deficient chromaffin cells found neddylation/UBE2F as synthetic lethal (Al Khazal et al. iScience Apr 2026, PMID 42181244); added Pevonedistat/MLN4924 (NAE1 inhibitor, score 57, preclinical). Added pathways fgfr-autocrine and neddylation, targets FGFR1 and NAE1, and updated SDH biology context. Future directions still open: IGF1R/linsitinib axis, ferroptosis/GPX4, SSTR2 agonism (BIM-23120, SDHB-specific but no approved drug yet).
**PR:** morning/2026-06-28-fgfr-neddylation
