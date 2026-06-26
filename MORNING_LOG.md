# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-06-26

**Direction:** drug-pool + evidence-source
**Angle:** FGFR/FGF signaling axis via SDH-loss-driven CTCF insulator disruption (rogaratinib, pan-FGFR inhibitor); creation of curated static papers library (src/data/papers.ts)
**Papers added:** 4 — PMIDs 42191879, 42181244, 42003827, 42281449
**Summary:** PubMed scan (2026-03 to 2026-06) found a landmark Nature Medicine Phase 2 trial (PMID 42191879, Merriam et al.) of rogaratinib in SDH-deficient GIST: 41.7% ORR, 31-month median PFS — the highest response rate of any targeted agent reported specifically in this subtype. The mechanism (SDH loss → DNA hypermethylation → CTCF insulator disruption → ectopic FGF3/FGF4 → autocrine FGFR1 loop) is a wholly new FGFR pathway not in the engine. Added rogaratinib to the drug pool, a new FGFR/FGF signaling pathway and FGFR1 target, updated the SDH biology context, and added pathway color. Also found a CRISPR screen paper (PMID 42181244, iScience) nominating neddylation/pevonedistat in SDH-deficient paraganglioma — noted for a future run (mechanistically new but one step removed from core SDH-biology pathways). Created src/data/papers.ts (curated static library, previously missing) and wired it into the Research page with a "Most recent papers" section. Open question: rogaratinib ChEMBL/PubChem IDs not verified — owner may want to fill these in.
**PR:** morning/2026-06-26-fgfr-pathway-curated-papers
