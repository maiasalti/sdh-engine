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

## 2026-07-07

**Direction:** drug-pool
**Angle:** IGF1R / IGF2 autocrine axis — HIF-2α-driven IGF2 creates an IGF1R signalling loop in KIT/PDGFRA-null SDH-deficient GIST; supported by SARC Phase 2 trial of linsitinib
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 4 (outside 3-month window; used in Part B): PMID 32562798, 39337514, 31792037, 24133624
**Summary:** No new papers published in the last 3 months passed the relevance gate (all recent SDH papers had been tracked in the 2026-07-03 run). For Part B, implemented the IGF1R/IGF2 autocrine axis — the oldest uncharted mechanistic consequence of HIF-2α stabilisation in SDH-deficient GIST. Added pathway `igf1r-signaling`, two new targets (IGF1R, IGF2), and linsitinib (Phase 2 CBR 40% in SDHB-loss WT GIST cohort, PMID 31792037). Also updated sdh-biology.ts context and the druggable-targets table. Two candidate directions remain for future runs: (1) polyamine metabolism / DENSPM — foundational xenograft data in SDHB-PPGL (PMID 32562798) with mechanistic follow-up (PMID 39337514) still not in the drug pool; (2) immune microenvironment (kynurenine/IDO1 angle) — multi-omics evidence from PMID 42230482 but direct SDH-deficient evidence is thin and warrants a dedicated PubMed search.
**PR:** morning/2026-07-07-igf1r-signaling
