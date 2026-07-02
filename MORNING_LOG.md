# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-07-02

**Direction:** drug-pool
**Angle:** FGFR signaling (epigenetic insulator disruption → FGF3/FGF4 autocrine loop → FGFR1) + neddylation / CRL pathway as CRISPR-identified synthetic lethality
**Papers added:** 4 — PMIDs 42191879, 42181244, 42003827, 42281449
**Summary:** PubMed scan found a landmark Nature Medicine Phase 2 trial (Merriam et al., PMID 42191879, NCT04595747) showing rogaratinib (pan-FGFR inhibitor) achieved 41.7% ORR and 31-month median PFS in SDH-deficient GIST, the strongest therapeutic results in this indication to date. The mechanism — SDH-loss DNA hypermethylation silences CTCF chromatin insulators, derepressing FGF3/FGF4 and creating an FGFR1 autocrine loop — is an entirely new pathway not yet in the engine. Added rogaratinib (score 74, clinical_trial) and erdafitinib (score 40, theoretical/FDA-approved class member) to a new FGFR signaling pathway. A concurrent iScience CRISPR screen (Al Khazal et al., PMID 42181244) identified neddylation as a selective synthetic-lethal dependency in SDH-deficient paraganglioma; added pevonedistat/MLN4924 (score 38, preclinical) to a new neddylation/CRL pathway. Also created src/data/papers.ts (curated paper registry) and wired a "Most recent papers" section into the Research page. 3 drugs added (rogaratinib, erdafitinib, pevonedistat), 2 pathways (fgfr-signaling, neddylation-ubiquitin), 2 targets (FGFR1, NAE1).
**PR:** morning/2026-07-02-fgfr-neddylation
