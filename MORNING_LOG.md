# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-06-24

**Direction:** drug-pool
**Angle:** FGFR/FGF3-FGF4 autocrine axis (CIMP-driven insulator disruption) and neddylation pathway synthetic lethality (CRISPR screen)
**Papers added:** 2 — PMIDs 42191879 (Merriam et al., Nat Med 2026, Phase 2 rogaratinib in SDH-deficient GIST) and 42181244 (Al Khazal et al., iScience 2026, CRISPR screen / neddylation). Created src/data/papers.ts as the curated-paper registry.
**Summary:** PubMed scan found two landmark papers published this quarter. The first (PMID 42191879) reports a Phase 2 trial of rogaratinib achieving 41.7% ORR and 31-month median PFS specifically in SDH-deficient GIST, driven by CIMP-mediated insulator hypermethylation releasing FGF3/FGF4 into an FGFR1 autocrine loop — the strongest single-agent clinical evidence reported for this tumor type. Added rogaratinib (evidence_score 73, clinical_trial) and the fgfr-signaling pathway. The second (PMID 42181244) reports a CRISPR screen in Sdhb-deficient mouse chromaffin cells identifying the neddylation E2 UBE2F as a selective dependency; pevonedistat inhibited SDH-deficient growth in vitro. Added pevonedistat (evidence_score 42, preclinical) and the neddylation-protein-homeostasis pathway. Both additions are new angles not covered in any prior log entry. IGF1R (the originally-planned angle) remains a viable future direction.
**PR:** morning/2026-06-24-fgfr-neddylation
