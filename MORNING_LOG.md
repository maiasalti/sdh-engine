# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-06-25

**Direction:** drug-pool
**Angle:** FGFR signaling via CIMP-driven epigenetic insulator disruption → FGF3/FGF4 autocrine loop → FGFR1
**Papers added:** 3 (PMIDs: 42191879, 42003827, 41342592). Also created `src/data/papers.ts` as a new curated paper registry (file did not previously exist).
**Summary:** PubMed scan found a landmark Nat Med (May 2026) Phase 2 trial of rogaratinib (pan-FGFR inhibitor) in SDH-deficient GIST — 41.7% ORR, 31-month median PFS — establishing FGFR signaling as a validated therapeutic axis. The mechanism is SDH-specific: succinate-driven TET inhibition → CIMP → CTCF insulator disruption → FGF3/FGF4 co-overexpression → FGFR1 autocrine loop. Added a new `fgfr-signaling` pathway, FGFR1 and FGF3 targets, rogaratinib (clinical_trial, evidence_score 72), and erdafitinib (FDA-approved pan-FGFR inhibitor, preclinical/off-label rationale, evidence_score 48). The FGFR direction is entirely new to the log and orthogonal to the EZH2/autophagy/NAD⁺ angle from the prior run. One open question for the owner: two other recently published papers (PMID 41184234, olverembatinib Phase 1b in SDH-deficient GIST with 84.6% clinical benefit rate; PMID 41118055, GRPR expression and Lu-177-NeoB theranostics in wt-GIST) are from Oct–Nov 2025 and thus outside the 3-month window — worth reviewing manually.
**PR:** #4
