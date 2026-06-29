# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-06-29

**Direction:** drug-pool
**Angle:** FGFR1 signaling via epigenetic oncogene activation (SDH-loss-driven CTCF insulator hypermethylation → FGF3/FGF4 de-repression → FGFR1 autocrine loop)
**Papers added:** 3 — PMIDs 42191879, 42082831, 42181244
**Summary:** Paper scan found three major papers from the last 3 months: (1) Phase 2 trial of rogaratinib in SDH-deficient GIST (Nat Med, PMID 42191879) reporting 41.7% ORR and 31-month median PFS via FGFR1 blockade of an epigenetically-activated FGF3/FGF4 autocrine loop — the strongest prospective clinical signal ever published for this specific tumor subtype; (2) Nature Metabolism paper (PMID 42082831) showing succinate inhibits aspartate transcarbamylase (ATCase), blocking pyrimidine biosynthesis and creating ATR kinase sensitivity — an entirely new mechanism; (3) CRISPR screen in SDH-deficient paraganglioma (PMID 42181244) identifying neddylation/pevonedistat as a selective vulnerability. Part B added the FGFR1 signaling pathway (fgfr-signaling) and rogaratinib (evidence_score 78, status: clinical_trial), plus created src/data/papers.ts with a curated paper schema and a research-page section surfacing recent papers. Key open questions: (a) Should rogaratinib be given higher priority given the ORR exceeds belzutifan in VHL-RCC? (b) ATR kinase inhibitors (ceralasertib, elimusertib) are strong candidates for a future run given the ATCase mechanism. (c) Neddylation/pevonedistat direction deserves follow-up once paraganglioma-specific data matures.
**PR:** morning/2026-06-29-fgfr-rogaratinib
