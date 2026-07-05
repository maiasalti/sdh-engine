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

## 2026-07-05

**Direction:** drug-pool
**Angle:** Polyamine metabolism / SAT1-mediated ROS amplification (DENSPM)
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 0 (all PubMed searches in the 2026-06-15 to 2026-07-05 window returned only PMIDs already in tracker.md; no new papers discovered)
**Summary:** Implemented the polyamine metabolism direction flagged as unexplored in the 2026-07-03 run. DENSPM (N1,N11-diethylnorspermine), a synthetic polyamine analog, potently induces SAT1 (SSAT), whose oxidative catabolism of spermidine/spermine generates H2O2 as a stoichiometric byproduct. In SDHB-deficient cells already burdened by elevated mitochondrial ROS from Complex II dysfunction, this additional H2O2 amplifies oxidative stress past the apoptotic threshold — a ROS-overload synthetic lethality. Direct SDH-specific preclinical evidence: DENSPM triggered markedly greater caspase-3-dependent apoptosis and lipid remodeling in SDHB-KD pheochromocytoma cells vs. WT (Alli et al., PMID 42249664); Phase 1 safety data in humans exists (Hahm et al., PMID 11948118). Added `polyamine-metabolism` pathway, SAT1 target, DENSPM drug (evidence_score 36, preclinical), and updated SDH biology context and pathway color registry. Remaining unexplored directions for future runs: (1) immune microenvironment / IDO1-kynurenine pathway (PMID 42230482), (2) fatty acid synthesis dependency (reductive carboxylation via FASN/ACC — SDH-deficient lipid vulnerability), (3) IGF1R signaling (overexpressed in SDH-deficient GIST/PPGL, linsitinib/OSI-906 tested in sarcoma).
**PR:** morning/2026-07-05-polyamine-metabolism
