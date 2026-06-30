# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-06-30

**Direction:** drug-pool
**Angle:** FGFR1/FGF3-FGF4 epigenetic autocrine loop — DNA hypermethylation from SDH loss disrupts CTCF chromatin insulators at FGF3/FGF4, unleashing an autocrine FGFR1 proliferative circuit
**Papers added:** 8 recent papers (PMIDs: 42191879, 42181244, 41711310, 42003827, 42368654, 42336245, 41342592, 41284030) + 2 foundational papers (23707781, 23550148) bootstrapped into a new src/data/papers.ts file
**Summary:** The June 2026 Nature Medicine Phase 2 trial (Merriam et al., PMID 42191879) showed rogaratinib (pan-FGFR inhibitor) achieved 41.7% ORR and 31-month median PFS in SDH-deficient GIST — the highest efficacy ever reported for a systemic agent in this disease. The mechanism is a direct epigenetic consequence of SDH loss: hypermethylation disrupts CTCF insulators at the FGF3/FGF4 locus, causing autocrine FGFR1 activation. Added rogaratinib to the drug pool (evidence_score 80, status clinical_trial), a new fgfr1-autocrine pathway, and FGFR1 as a new target. Also bootstrapped src/data/papers.ts (previously referenced in run instructions but not existing) with 10 verified papers. Also retrieved from the same PubMed sweep: a CRISPR screen (PMID 42181244) identifying neddylation/pevonedistat as a vulnerability, and Ym155/KDM4 synthetic lethality data (PMID 41711310) — not added to drugs yet as both remain preclinical with no SDH-specific clinical data. Candidate directions for future runs: (1) neddylation/pevonedistat from CRISPR screen, (2) Ym155/KDM4 synthetic lethality axis, (3) cabozantinib (MET+VEGFR, Phase 2 data PMID 42363143 though mixed population), (4) IGF1R/linsitinib axis (classic SDH-GIST vulnerability, no recent trial data found).
**PR:** morning/2026-06-30-fgfr1-fgf-autocrine
