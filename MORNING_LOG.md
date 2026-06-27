# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-06-27

**Direction:** drug-pool
**Angle:** FGFR / epigenetic oncogene activation (FGF3/FGF4 insulator collapse → autocrine FGFR1 loop)
**Papers added:** 5 (PMIDs: 42191879, 41711310, 42181244, 42003827, 42281449)
**Summary:** PubMed scan found 10 recent SDH-GIST papers; standout was a Nature Medicine Phase 2 trial (PMID 42191879) of rogaratinib (pan-FGFR inhibitor) in 24 SDH-deficient GIST patients showing 41.7% ORR and 31-month median PFS — the strongest single-agent result in this disease. Mechanism: SDH-loss-driven DNA hypermethylation disrupts CTCF insulators at the FGF3/FGF4 locus, de-repressing these ligands and creating an autocrine FGFR1 autocrine loop. Added the `fgfr-epigenetic` pathway, FGFR1 target, and rogaratinib (evidence_score 78, clinical_trial status) to the engine. Also created `src/data/papers.ts` with 5 verified curated papers and updated the Research page to surface them with a "Most recent papers" section. The FGFR mechanism is genuinely new (not covered by regorafenib's multi-kinase profile), is SDH-deficient-GIST-specific, and is now the top validated clinical signal in the field.
**PR:** morning/2026-06-27-fgfr-epigenetic-axis
