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

## 2026-07-04

**Direction:** drug-pool
**Angle:** Polyamine metabolism — SSAT/SAT1 dependency in SDHx-mutated tumors; DENSPM (N1,N11-diethylnorspermine)
**Papers added:** 1 — PMID 41985045 (SDHB IHC false-negative patterns, Diagnosis & Pathology)
**Papers rejected (logged to tracker.md):** 1 (PMID 42080642, KIT+SDHC concurrent case report); 2 additional out-of-window papers logged (PMIDs 32562798, 31792037)
**Summary:** The 2026-07-03 run explicitly flagged polyamine metabolism / DENSPM as the top candidate direction for follow-up. Completed that work: added the `polyamine-metabolism` pathway (spermidine/spermine specifically elevated in SDHx-mutated PCC/PGL tissues and SDHB KD cells — Rai et al. Metabolism 2020, PMID 32562798), added SAT1 as a target gene, and added DENSPM (directly tested in SDHB-deficient cells and xenografts, showing significantly greater apoptosis than WT; second supporting paper PMID 42249664 was already in papers.ts). Evaluated but rejected the IGF2/IGF1R direction: the only completed Phase II trial of an IGF1R inhibitor (linsitinib) in WT/SDH-deficient GIST showed 0 objective responses (PMID 31792037), disqualifying it as a candidate. SDHB IHC paper (PMID 41985045) added to Diagnosis & Pathology — the 49% false-negative rate for standard SDHB IHC is practically important for the disease community. Candidate directions not yet explored: (1) kynurenine pathway / IDO1 inhibition in SDHB-PPGL (PMID 42230482 supports; epacadostat or linrodostat), (2) ATRX/TERT co-mutations in SDHB-driven metastatic tumors as biomarkers for PARP inhibitor sensitivity, (3) DFMO/eflornithine (FDA-approved ODC inhibitor, upstream of the polyamine elevation — no SDH-specific data yet but a logical mechanistic extension of today's direction).
**PR:** morning/2026-07-04-polyamine-metabolism

## 2026-07-08

**Direction:** drug-pool
**Angle:** Succinate-driven immune evasion — MCT1-mediated T-cell suppression (AZD3965) + HIF-driven kynurenine/IDO1 pathway (epacadostat)
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 8 (42416402, 42368488 rejected; 41697717, 40827068, 35977513, 36355137, 41724335 outside window; 42183245 rejected)
**Summary:** Added a new `succinate-immune-evasion` pathway covering two mechanistically distinct immunosuppressive routes downstream of SDH loss: (1) extracellular TME succinate is taken up by CD4+/CD8+ T cells via MCT1/SLC16A1, impairing TCA-cycle glucose oxidation and suppressing IFN-γ and degranulation — directly proven in human T cells and SDH-deficient PC/PG RNA-seq in vivo (Gudgeon et al., Cell Rep 2022, PMID 35977513); (2) pseudohypoxic HIF-1α stabilization drives IDO1 upregulation → kynurenine pathway immune evasion, confirmed active in metastatic SDHB-PPGL by multi-omics (PMID 42230482, already in papers.ts). Added two drugs: AZD3965 (MCT1 inhibitor, evidence_score 30, preclinical — Phase 1 NCT01791595 safety established, no SDH-specific trial yet) and epacadostat (IDO1 inhibitor, evidence_score 22, theoretical — Phase 1/2 data in solid tumors but ECHO-301 Phase 3 failed in melanoma; SDH-specific HIF-driven IDO1 context may be distinct). No new papers qualified (0 within 3-month window with sufficient SDH-specific mechanistic relevance). Candidate directions not yet explored: (1) ATRX/TERT co-mutations as biomarkers for PARP inhibitor sensitivity in SDHB-driven metastatic tumors, (2) DFMO/eflornithine (ODC inhibitor, upstream of polyamine pathway — no SDH-specific data yet), (3) ferroptosis via GPX4 inhibition (ether-phospholipid changes in SDHB-KD lipidomics from PMID 42249664 suggest altered lipid peroxidation sensitivity).
**PR:** morning/2026-07-08-succinate-immune-evasion

## 2026-07-12

**Direction:** drug-pool
**Angle:** ATRX-loss / ALT replication stress — ATR kinase synthetic lethality in SDHB-metastatic PPGL; ceralasertib (AZD6738)
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 24 (PMIDs 42403653, 42322785, 42128324, 42325925, 42211277, 42206758, 42107147, 42287194, 42026869, 42419972, 42413529, 42412007, 42410253, 42401207, 42403895, 42399874, 42396958, 42392277, 42433542, 42394965, 42387308, 42385530, 42358472, 42358466)
**Summary:** No new papers cleared the SDH-specific relevance gate this week — scan results covered VHL case reports, general PPGL biochemical diagnosis methodology, radiology/AI imaging surveys, surgical technique case reports, and clinical outcome studies without any SDH-subgroup analysis or mechanistic content. Implemented the ATRX-loss / ATR inhibitor direction, explicitly flagged across three consecutive log entries (2026-07-04, 2026-07-08) as unexplored and never attempted in any branch. In SDHB-driven metastatic pheochromocytoma and paraganglioma, ATRX co-mutations occur in ~30–40% of cases and are the strongest genomic predictor of malignancy in this subtype (confirmed by multi-omics: PMID 42230482). ATRX loss activates the Alternative Lengthening of Telomeres (ALT) pathway, generating constitutive telomeric replication stress (G-quadruplex accumulation, R-loops, stalled forks) that creates an absolute dependency on ATR kinase for survival. Flynn et al. (Science 2015, PMID 25614623) established that ATRX-loss/ALT-positive cells are 10–30× more sensitive to ATR inhibition than ALT-negative controls — a synthetic lethality absent from ATRX-wild-type tumors. Added the `atrx-alt-replication-stress` pathway (display_order 13), ATR as a synthetic_lethal target, and ceralasertib/AZD6738 (selective ATR kinase inhibitor, evidence_score 33, preclinical — Phase 2 OLAPCO trial NCT03787680 testing ceralasertib + olaparib in DDR-deficient tumors including ATRX-loss contexts). Critical biomarker note: the ~30–40% ATRX co-mutation prevalence means this direction applies only to the ATRX-loss subgroup and requires prospective ATRX genotyping to identify eligible patients. Also discovered during direction research that a ferroptosis branch (morning/2026-06-23-ferroptosis-lipid-peroxidation, sulfasalazine/artesunate/auranofin) was committed but never merged — treated as attempted, do not re-implement. Candidate directions not yet explored: (1) DFMO/eflornithine (ODC inhibitor, upstream of the polyamine pathway established 2026-07-04 — flagged in both 2026-07-04 and 2026-07-08 entries, still no SDH-specific preclinical data but logical mechanistic extension).
**PR:** morning/2026-07-12-atrx-alt-ceralasertib

## 2026-07-14

**Direction:** drug-pool
**Angle:** BRD4 / BET bromodomain super-enhancer dependency — birabresib (OTX015) as upstream epigenetic complement to FGFR inhibition in SDH-deficient tumors
**Papers added:** 1 — PMID 42025325 (J Clin Endocrinol Metab 2026, MD Anderson genotype-directed treatment algorithm for MPPGL)
**Papers rejected (logged to tracker.md):** 1 (PMID 42067272, broad hereditary cancer genetic testing review)
**Summary:** All previously flagged candidate directions were either already implemented (ATRX/ATR: 2026-07-12) or explicitly rejected as lacking SDH-specific data (DFMO/eflornithine). Implemented the BRD4/BET bromodomain direction, which is mechanistically distinct from the EZH2 direction (2026-06-23): that run targeted the H3K27me3 WRITER (EZH2); this run targets the READER of the compressed active chromatin that results from H3K27me3 spreading (BRD4 at super-enhancers). The key mechanistic bridge is the Merriam et al. Nat Med 2026 Phase 2 trial (PMID 42191879, already in papers.ts), which directly proved that SDH-deficient GIST harbors ectopic super-enhancer formation at the FGF3/FGF4 locus — providing published, SDH-specific evidence for the super-enhancer pathology that makes BRD4 inhibition a plausible vulnerability. BET inhibitors (birabresib/OTX015, Phase 1b/2 NCT01713582) preferentially displace BRD4 from super-enhancers over typical enhancers (Loven et al., Cell 2013, PMID 23582323). Added BRD4 as a new synthetic-lethal target in `epigenetic-dysregulation`, added birabresib (evidence_score 33, theoretical — no SDH-specific preclinical data), and extended sdh-biology.ts with Mechanism 13. No SDH-specific BRD4 inhibitor experiments have been published; experimental validation in SDHB-KD or SDHA-null models is the critical missing step. Candidate directions not yet explored: (1) DFMO/eflornithine (ODC inhibitor, upstream polyamine axis — still no SDH-specific data), (2) Mitochondrial Complex I dependency / IACS-010759 (SDH = Complex II loss may heighten reliance on Complex I for NADH oxidation and CoQ reduction — no published SDH-specific data, uncertain whether SDH-deficient tumors are glycolytic vs. OXPHOS-dependent enough for this to be effective), (3) MTHFD2 / mitochondrial one-carbon metabolism (TCA truncation may increase serine/folate-cycle dependency for nucleotide synthesis and NADPH — no SDH-specific data).
**PR:** morning/2026-07-14-brd4-super-enhancer-bet

## 2026-07-15

**Direction:** drug-pool
**Angle:** Succinate-driven homologous recombination deficiency (BRCAness) — KDM4B/H3K9me3 chromatin mechanism; mechanistic upgrade of olaparib + addition of niraparib
**Papers added:** 2 — PMIDs 41928014, 41693399
**Papers rejected (logged to tracker.md):** 13 (within 3-month window) + 8 notable out-of-window (including PMID 41520938 FASN-SDHB synthetic interaction — FASN targeting by G28UCM reveals synthetic lethality with SDHB loss, strong future direction candidate)
**Summary:** Implemented the succinate-driven HR deficiency direction, which was long overdue: olaparib had been in the engine since at least 2026-06-23 but was linked only to `oxidative-stress-ros` with an evidence_score of 45 and a generic PARP/ROS rationale. The mechanistic basis for SDH-specific PARP inhibitor sensitivity is in fact a verified BRCAness phenotype: succinate competitively inhibits the α-KG-dependent histone demethylases KDM4A and KDM4B (JMJD2A/B), causing H3K9me3 hypermethylation to persist at DNA double-strand break sites. Normally, KDM4B-mediated H3K9me3 erasure is required for TIP60 acetyltransferase recruitment, ATM kinase activation, and initiation of DNA end-resection — the first committed step of HR. When these demethylases are blocked by succinate, the entire downstream HR cascade fails despite wild-type BRCA1/2 status. Two Sulkowski et al. papers establish this: Nat Genet 2018 (PMID 30013182) directly demonstrated HR deficiency and olaparib hypersensitivity in patient-derived SDH-deficient hereditary PPGL cells; Nature 2020 (PMID 32494005) dissected the KDM4B/H3K9me3 chromatin mechanism in full. Changes: (1) new `sdh-driven-hrd` pathway (display_order 14); (2) KDM4A and KDM4B as new direct targets; (3) olaparib upgraded — evidence_score 45→58, status theoretical→preclinical, mechanism_of_action fully rewritten to reflect the KDM4B/H3K9me3/HR-deficiency mechanism, pathway_slugs adds `sdh-driven-hrd`, target_gene_symbols adds `KDM4B`; (4) niraparib added (evidence_score 45, theoretical) — clinical rationale derives from its PRIMA Phase 3 registration in HRD-positive non-gBRCA ovarian cancer (González-Martín et al., NEJM 2019, PMID 31562799), providing the HRD biomarker framework relevant for the SDH-deficient BRCAness context, and its once-daily pharmacokinetics; (5) Mechanism 14 added to sdh-biology.ts; (6) two new papers added: PMID 41928014 (SSTR2 vulnerability in SDHB-deficient PCC/PGL, Mol Biomed 2026 — BIM-23120 full agonist selectively reduces proliferation in SDHB-deficient cells) and PMID 41693399 (Endocrine Reviews epigenetics of NENs, 2026-07 — high-impact synthesis covering SDHx CIMP, ATRX/TERT metastatic risk, methylation classifiers). Candidate directions not yet explored: (1) DFMO/eflornithine (ODC inhibitor, upstream of polyamine pathway — flagged in 2026-07-04 and 2026-07-08, still no SDH-specific data), (2) FASN inhibition / lipid synthesis dependency (PMID 41520938 from Jan 2026 directly proves FASN-SDHB synthetic interaction — strong direction once the paper enters the 3-month window), (3) Survivin/BIRC5 inhibition via Ym155 (PMID 41711310, Mar 2026 — selective DNA damage in SDH-deficient cells; borderline window), (4) IACS-010759 / mitochondrial Complex I, (5) MTHFD2 / one-carbon metabolism.
**PR:** morning/2026-07-15-lipid-synthesis-reductive-carboxylation

## 2026-07-16

**Direction:** drug-pool
**Angle:** FASN / de novo lipogenesis synthetic lethality — reductive glutamine carboxylation → FASN dependency in SDH-deficient cells; denifanstat (TVB-2640)
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 2 (PMIDs 42350246, 42014332)
**Summary:** Implemented the FASN / de novo lipogenesis direction, flagged since 2026-07-04 and anchored by PMID 41520938 (Rodríguez-Flores et al., Pharmacol Res 2026): G28UCM (a FASN KS-domain inhibitor) impairs both cytoplasmic FASN activity and mitochondrial fatty acid synthesis (mtFAS) selectively in SDHB-knockout vs. WT cell lines, directly demonstrating FASN-SDHB synthetic lethality. The mechanism has two layers: (1) SDH loss forces reductive carboxylation of glutamine (α-KG → isocitrate → citrate via reverse IDH1/2; ACLY cleavage → acetyl-CoA) as the primary lipid-precursor route, making FASN the indispensable terminal step; (2) FASN products supply mtFAS with the octanoyl-ACP needed for lipoic acid biosynthesis, so FASN inhibition compounds the mitochondrial dysfunction already present from Complex II loss. Added: (1) new `de-novo-lipogenesis` pathway (display_order 15); (2) FASN as a new metabolic target; (3) denifanstat (TVB-2640, evidence_score 35, preclinical) — most clinically advanced FASN inhibitor, Phase 1/2 data in solid tumors (NCT02980029, NCT04341337); (4) Mechanism 15 in sdh-biology.ts. Paper scan: 0 papers added; 2 rejected within-window (42350246 general cancer Ca2+ signaling review; 42014332 FH-deficient protein succination review — neither SDH-specific). Candidate directions not yet explored: (1) Ym155/survivin (PMID 41711310, Mar 2026 — SDH-deficient cells show increased DNA damage susceptibility to Ym155; mechanism overlaps with yesterday's BRCAness direction, hold for later), (2) DFMO/eflornithine (ODC inhibitor, upstream polyamine — still no SDH-specific data), (3) IACS-010759 / Complex I dependency, (4) MTHFD2 / one-carbon metabolism.
**PR:** #25

## 2026-07-20

**Direction:** drug-pool
**Angle:** HIF-1α-driven Survivin/BIRC5 apoptosis evasion (Ym155) + Ascorbic Acid safety signal downgrade
**Papers added:** 3 — PMIDs 42050152, 42082831, 42454478
**Papers rejected (logged to tracker.md):** 14 (+ 1 preprint without PMID)
**Summary:** Implemented the Survivin/BIRC5 direction, flagged explicitly in the 2026-07-15 and 2026-07-16 entries as an unexplored candidate anchored by PMID 41711310 (Rodríguez-Flores et al., Endocr Relat Cancer 2026). The mechanistic chain is: SDH loss → succinate → PHD inhibition → HIF-1α stabilization → HRE-driven transcriptional upregulation of BIRC5 (survivin). This is mechanistically distinct from the BRCAness direction (2026-07-15): that direction covers DNA-repair failure; this direction covers the downstream apoptosis evasion that allows cells already accumulating DNA damage via BRCAness to survive. Survivin serves dual functions: (1) apoptosis inhibition — directly suppresses caspase-3/7 and forms a ternary anti-apoptotic complex with XIAP and procaspase-9; (2) mitotic survival — non-redundant CPC subunit required for chromosome alignment and cytokinesis, especially critical in genomically unstable SDH-deficient cells. Added: (1) new `hif-driven-survivin-apoptosis` pathway (display_order 16); (2) BIRC5 as a new synthetic_lethal target; (3) Ym155/sepantronium bromide (evidence_score 31, preclinical) — the most characterised Survivin transcription inhibitor, with Phase 2 clinical data (NCT00390117) establishing its safety profile; (4) Mechanism 16 in sdh-biology.ts. Secondary change: downgraded Ascorbic Acid from evidence_score 38/preclinical to 18/theoretical and rewrote its mechanism_of_action to prominently flag the PMID 41404848 counterintuitive safety signal (Rapizzi et al., Endocr Relat Cancer 2026) — ascorbate supplementation promoted rather than suppressed tumor growth in an SDHB-deficient PPGL zebrafish model. This safety signal was already tracked from 2026-07-15 and directly affects the owner's self-management decisions. Paper scan: 3 papers added — Nat Rev Clin Oncol HIF-2α inhibitor landscape review covering belzutifan in PPGL (PMID 42050152); Nat Metab paper establishing succinate-mediated ATCase inhibition as a pyrimidine synthesis block downstream of SDH loss (PMID 42082831); Endocr Relat Cancer genotype-directed radioligand imaging and therapy review in PPGL, including SDH-deficient SSTR2-high/FDG-avid profile (PMID 42454478). Candidate directions not yet explored: (1) DFMO/eflornithine (ODC inhibitor, upstream polyamine axis — flagged across four consecutive entries, still no SDH-specific preclinical data), (2) IACS-010759 / mitochondrial Complex I dependency, (3) MTHFD2 / one-carbon folate-cycle / serine dependency (TCA truncation may create MTHFD2 dependency for nucleotide synthesis and NADPH — no SDH-specific data), (4) Pyrimidine synthesis rescue / DHODH inhibition (PMID 42082831 today establishes ATCase block creating pyrimidine-synthesis vulnerability in SDH-deficient cells — brequinar/leflunomide could selectively starve SDH-deficient cells of UMP/CTP if combined with exogenous nucleoside supplementation to normal cells).
**PR:** morning/2026-07-20-survivin-birc5-hif

## 2026-07-22

**Direction:** drug-pool
**Angle:** Pyrimidine synthesis vulnerability — succinate-driven ATCase block + DHODH inhibition synthetic lethality; brequinar and teriflunomide
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 12 (PMIDs 42080818, 42067868, 42447569, 42417420, 42316325, 42465165, 42484783, 42444817, 42370956, 42337378, 42315805, 42166759)
**Summary:** Implemented the DHODH inhibition direction, explicitly flagged in the 2026-07-20 log entry as an unexplored candidate anchored by PMID 42082831 (Hart et al., Nat Metab 2026 — already in papers.ts). The mechanistic logic: SDH loss creates a two-hit suppression of de novo pyrimidine synthesis — (1) TCA truncation depletes aspartate (the nitrogen/carbon donor for the pyrimidine ring at step 2 of CAD/ATCase), and (2) accumulated succinate directly inhibits ATCase competitively, blocking the committed step; crucially, Hart et al. showed aspartate rebounds but proliferation is still suppressed, confirming succinate-ATCase inhibition as the dominant constraint. This leaves SDH-deficient cells with reduced pyrimidine synthesis reserve and minimal buffer for additional blockade. Inhibiting DHODH (step 4, same pathway) with brequinar or teriflunomide compounds the pre-existing partial block, selectively driving SDH-deficient cells into pyrimidine starvation. Added: (1) new `pyrimidine-synthesis-vulnerability` pathway (display_order 17); (2) DHODH as a new synthetic_lethal target; (3) brequinar (evidence_score 28, theoretical — potent DHODH inhibitor, Phase 1/2 NCT01888484; no SDH-specific data); (4) teriflunomide (evidence_score 22, theoretical — FDA-approved for relapsing MS, highest clinical accessibility of any DHODH inhibitor, Phase 2 GBM data NCT02799498; lower DHODH potency than brequinar); (5) Mechanism 17 in sdh-biology.ts. Paper scan: 0 papers added. 12 new rejections logged — all were imaging case reports (SDH-deficient RCC), off-panel tumor types (LUAD, OSCC, PDAC, melanoma), tangential SDH mentions (PGL case reports, NEC unknown primary), or the wrong TCA enzyme (FH-deficient parathyroid). Candidate directions not yet explored: (1) DFMO/eflornithine (ODC inhibitor, upstream polyamine axis — flagged across five consecutive entries, still no SDH-specific data), (2) IACS-010759 / mitochondrial Complex I dependency (uncertain if SDH-deficient tumors are OXPHOS-dependent enough), (3) MTHFD2 / one-carbon metabolism (no SDH-specific data).
**PR:** #31

## 2026-07-23

**Direction:** drug-pool
**Angle:** POLQ / Pol θ-Mediated End-Joining (TMEJ) backup repair synthetic lethality — SDH-driven BRCAness forces TMEJ/POLQ upregulation; ART558 (first-in-class POLQ inhibitor) exploits this dependency
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 4 (PMIDs 42033075, 41330333, 41354716, 38897886)
**Summary:** Implemented the POLQ/TMEJ backup repair direction as a second-order synthetic lethality built on the BRCAness mechanism established on 2026-07-15. The foundational synthetic lethal relationship between HR deficiency and POLQ was established by Ceccaldi et al. (Nature 2015, PMID 25642963): HR-deficient cells upregulate POLQ/TMEJ as a backup DSB repair route; POLQ depletion is synthetically lethal with HR deficiency and spares HR-proficient cells. In SDH-deficient tumors, succinate-mediated KDM4A/KDM4B inhibition creates a universal HR deficiency (BRCAness) across all SDH-deficient cells (Sulkowski et al., Nat Genet 2018, PMID 30013182; Nature 2020, PMID 32494005), which should drive the same compensatory POLQ/TMEJ upregulation — creating synthetic lethality with ART558, the first-in-class selective POLQ inhibitor (Artios Pharma, Phase 1). The POLQ direction is mechanistically complementary to PARP inhibition (Mechanism 14): both target HR-deficient SDH cells, but PARP inhibitors trap SSBs that collapse to DSBs, while POLQ inhibitors block the backup TMEJ pathway those cells use to resolve DSBs. WEE1/adavosertib was evaluated and explicitly ruled out: PMID 41354716 (Cell Death Dis 2025) showed adavosertib selectively kills BRCA-WT/HR-PROFICIENT cells via mitotic catastrophe, while HR-DEFICIENT cells are RESISTANT — the opposite of what would be needed. Added: (1) new `polq-tmej-backup-repair` pathway (display_order 18); (2) POLQ as a new synthetic_lethal target; (3) ART558 (evidence_score 27, theoretical — no SDH-specific preclinical data; mechanistic case rests on Ceccaldi PMID 25642963 + Sulkowski BRCAness papers; Phase 1 in DDR-deficient tumors); (4) Mechanism 18 in sdh-biology.ts covering the full POLQ/TMEJ mechanism, WEE1 explicit rejection, and complementarity with PARP inhibition. Candidate directions not yet explored: (1) DFMO/eflornithine (ODC inhibitor, upstream polyamine axis — flagged across six consecutive entries, still no SDH-specific data), (2) IACS-010759 / Complex I OXPHOS dependency, (3) MTHFD2 / one-carbon metabolism.
**PR:** morning/2026-07-23-polq-tmej-backup-repair

## 2026-07-25

**Direction:** drug-pool
**Angle:** SSTR2 / somatostatin receptor vulnerability — 177Lu-DOTATATE (Lutathera) exploits SSTR2 overexpression in SDH-deficient PPGL for targeted PRRT; BRCAness synergy with radiation-induced DSBs
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 3 (PMIDs 42489911, 42454639, 42023826)
**Summary:** Implemented the SSTR2/somatostatin receptor direction, which had not been covered in any prior run despite its direct SDH-specific evidence. The mechanistic anchor is PMID 41928014 (Ballard et al., Mol Biomed 2026 — already in papers.ts from the 2026-07-15 run): the selective SSTR2 full agonist BIM-23120 significantly reduces proliferation and induces apoptosis in SDHB-deficient PCC/PGL cells versus wild-type counterparts, directly establishing SSTR2 as a pharmacological vulnerability in the SDH-deficient context. The critical distinction is full vs. partial agonism: cold SSAs (octreotide, lanreotide) do not recapitulate this selective cytotoxicity, while PRRT with 177Lu-DOTATATE effectively delivers full-agonist SSTR2 engagement combined with targeted β-radiation. Additionally, PMID 42454478 (already in papers.ts) confirmed SDH-deficient PPGL are consistently SSTR2-high by DOTATATE-PET/CT, qualifying them for PRRT. A further mechanistic synergy noted: the BRCAness phenotype (Mechanism 14, succinate-driven KDM4B/H3K9me3 HR deficiency present in all SDH-deficient cells) may sensitise SDH-deficient PPGL to radiation-induced DSBs since HR-impaired cells cannot efficiently resolve them — a potential source of enhanced PRRT sensitivity not yet tested directly. Added: (1) new `sstr2-somatostatin-vulnerability` pathway (display_order 19); (2) SSTR2 as a new direct target; (3) 177Lu-DOTATATE (Lutathera, evidence_score 35, status "established"; linked to both sstr2-somatostatin-vulnerability and sdh-driven-hrd pathways); (4) Mechanism 19 in sdh-biology.ts covering full-agonist selectivity, PRRT eligibility, and BRCAness/radiation synergy; (5) SSTR2 row added to the druggable targets table. Scope caveat explicitly flagged: this direction applies to SDH-deficient PPGL (neuroendocrine), NOT to SDH-deficient GIST (mesenchymal, SSTR2-negative) or RCC. Paper scan: 0 new papers added; 3 within-window rejections logged. DFMO/eflornithine (upstream polyamine, no SDH-specific data) remains the longest-standing unexplored candidate; Complex I (IACS-010759) and MTHFD2/one-carbon metabolism still lack SDH-specific data.
**PR:** #34

## 2026-07-26

**Direction:** drug-pool
**Angle:** HIF-driven MET and AXL signaling — cabozantinib (VEGFR2/MET/AXL/RET/KIT) in SDH-deficient pseudohypoxic tumors
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 0 (all PMIDs returned by PubMed scan already present in tracker.md)
**Summary:** PubMed scan across all standard SDH-deficient tumor search strategies (GIST, PPGL, PCC, RCC, pituitary adenoma + SDH/SDHB/SDHA terms; combined AND/OR variants; broader "succinate dehydrogenase cancer oncology" sweep over April–July 2026) returned 0 new papers; every PMID encountered was already tracked in tracker.md. Nothing added to papers.ts.

Implemented the HIF-driven MET/AXL signaling direction — not previously covered in any log entry. The mechanistic chain: SDH loss → succinate → PHD inhibition → constitutive HIF-1α stabilization → HRE-driven transcriptional activation of the MET proto-oncogene, as directly established by Pennacchietti et al. (Cancer Cell 2003, PMID 12726861: "Hypoxia promotes invasive growth by transcriptional activation of the met protooncogene"). MET overexpression drives invasive growth and a PI3K/AKT/mTOR → HIF-1α positive-feedback loop that amplifies pseudohypoxia; AXL is co-upregulated in the pseudohypoxic TME and contributes to survival, EMT, and immune evasion. Cabozantinib (FDA-approved for RCC, HCC, thyroid cancer) inhibits VEGFR2, MET (~1.3 nM IC50), and AXL — a co-inhibition profile absent from sunitinib, regorafenib, and bevacizumab. Clinical anchor: the Natalie Phase 2 trial (NCT02302833; Jimenez et al., Lancet Oncol 2024, PMID 38608693) enrolled metastatic PPGL (up to 50% SDHB-mutant), achieving ORR 25% (4/16 evaluable), PFS 16.6 months, OS 24.9 months. PMID 42025325 (MD Anderson PPGL algorithm, already in engine) formally lists cabozantinib as a systemic therapy option. CABATEN trial (NCT04400474, cabozantinib + atezolizumab in endocrine/neuroendocrine tumors including PPGL) also noted.

Added: (1) new `hif-met-axl-signaling` pathway (display_order 20); (2) MET and AXL as new downstream targets; (3) cabozantinib (evidence_score 62, status "established" — reflects Phase 2 PPGL clinical data + HIF-MET mechanistic grounding); (4) Mechanism 20 in sdh-biology.ts with full HIF→MET mechanistic explanation, Natalie trial data, and explicit distinction from sunitinib/regorafenib; (5) new row added to druggable targets table in sdh-biology.ts.

Key limitation noted: Natalie trial was not SDH-deficient-specific; SDH-subtype-stratified efficacy data are not yet available. Candidate directions still unexplored: (1) DFMO/eflornithine (ODC inhibitor, upstream polyamine axis — flagged across seven consecutive entries, still no SDH-specific data), (2) IACS-010759 / mitochondrial Complex I dependency, (3) MTHFD2 / one-carbon metabolism.
**PR:** morning/2026-07-26-hif-met-axl-cabozantinib

## 2026-07-27

**Direction:** drug-pool
**Angle:** Polyamine synthesis — ODC1 inhibition with eflornithine (DFMO) as synthesis-side complement to DENSPM in SDH-deficient tumors
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 0 (all PubMed results across full SDH-deficient tumor search sweep already present in tracker.md; identical result as 2026-07-26 scan)
**Summary:** PubMed scan across all standard SDH-deficient tumor search strategies returned 0 new papers; every PMID encountered was already logged in tracker.md. Nothing added to papers.ts.

DFMO/eflornithine had been flagged as the top unexplored candidate across eight consecutive log entries (2026-07-04 through 2026-07-26). Implemented it as the synthesis-side complement to DENSPM, completing the two-arm polyamine depletion strategy for SDH-deficient tumors.

The mechanistic foundation: SDH loss drives upregulation of polyamine biosynthesis — spermidine and spermine are significantly elevated in SDHx-mutated PCC/PGL tissue and SDHB-knockdown chromaffin cells (Rai et al., Metabolism 2020, PMID 32562798). DENSPM (already in engine since 2026-07-04; evidence_score 38, preclinical) exploits this by inducing SAT1/SSAT to force catabolism of elevated spermidine/spermine pools, generating cytotoxic H₂O₂ via SMOX (Huynh et al. 2026, PMID 42249664). The gap: SAT1-driven catabolism depletes existing pools, but ODC1-driven de novo synthesis can partially replenish them. Eflornithine (DFMO) blocks this replenishment irreversibly: it is a mechanism-based suicide inhibitor of ODC1 that mimics ornithine, is decarboxylated as a substrate, and generates a reactive electrophile that permanently modifies active-site Cys360. DENSPM (catabolism-driver) + DFMO (synthesis-blocker) together impose a coordinated dual depletion pressure on the same elevated polyamine pools created by SDH loss.

FDA context: Eflornithine is FDA-approved as Iwilfin for high-risk neuroblastoma maintenance therapy (November 2023, COG ANBL1232/SIOPEN trials), establishing excellent long-term tolerability for systemic ODC1 inhibition in a cancer maintenance setting — the same therapeutic modality needed for GIST/PPGL.

Added: (1) ODC1 as a new metabolic target in `targets.ts` (pathway_slug `polyamine-metabolism`, with full mechanistic description referencing PMID 32562798 and DENSPM complement rationale); (2) eflornithine/DFMO drug entry in `drugs.ts` (evidence_score 23, theoretical — no SDH-specific data; mechanistic rationale based on DENSPM-established polyamine elevation + ODC1 synthesis-blockade logic); (3) Mechanism 21 in sdh-biology.ts (polyamine pathway architecture, DENSPM-gap analysis, eflornithine as synthesis-side complement, key limitation); (4) Polyamine Metabolism row added to the druggable targets table in sdh-biology.ts (was missing despite the pathway being added on 2026-07-04).

Key limitation: No SDH-specific eflornithine experimental data exists. Evidence_score 23 reflects the strong mechanistic rationale combined with the absence of direct SDH-deficient preclinical validation. Required next step: test eflornithine in SDHB-KO or SDHA-null cell lines, alone and in combination with DENSPM. Candidate directions still unexplored: (1) IACS-010759 / mitochondrial Complex I dependency (uncertain whether SDH-deficient tumors are sufficiently OXPHOS-dependent), (2) MTHFD2 / one-carbon folate-cycle / serine dependency (no SDH-specific data).
**PR:** morning/2026-07-27-dfmo-polyamine-synthesis

## 2026-07-29

**Direction:** other
**Angle:** UI quality — missing pathway color mappings for 4 pathways added in runs 2026-07-22 through 2026-07-26
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 0 (all 14 PMIDs returned across 6 PubMed queries already present in tracker.md; this is the third consecutive run with no new papers reaching the scan stage)
**Summary:** Full PubMed scan (6 queries covering SDH-deficient GIST, PPGL, RCC, pituitary, synthetic lethality, and drug repurposing angles, date-limited Apr 29 – Jul 29 2026) returned 14 unique PMIDs, all already logged in tracker.md. No papers evaluated, none added. For Part B: identified that `src/lib/scoring/constants.ts` was missing PATHWAY_COLORS entries for four pathways added in the 2026-07-22 through 2026-07-26 runs — `pyrimidine-synthesis-vulnerability`, `polq-tmej-backup-repair`, `sstr2-somatostatin-vulnerability`, and `hif-met-axl-signaling`. These fell back to generic gray in every component using `PATHWAY_COLORS[slug] || "bg-gray-100 text-gray-800"`, degrading the color-coded pathway badge system that distinguishes mechanism categories at a glance. Added the four missing color assignments (fuchsia, zinc, amber, green respectively). No new drugs or mechanisms were added: the remaining unexplored drug directions (IACS-010759/Complex I — uncertainty documented; MTHFD2/one-carbon — no SDH-specific data) do not clear the relevance gate.
**PR:** #38

## 2026-07-30

**Direction:** schema/metadata
**Angle:** Tumor type applicability — classify all 35 drugs by which SDH-deficient tumor type(s) they apply to (GIST, PPGL/PCC, RCC, or all), surface this in drug cards and detail pages
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 2 (PMID 42503916 rejected: Chinese-language general PPGL review; PMID 42239110 still rejected: preprint — DOI 10.64898/2026.05.18.726122 now has an assigned PMID but journal remains bioRxiv)
**Summary:** PubMed scan across 12 queries covering SDH-deficient GIST, PPGL, RCC, pituitary, drug repurposing, synthetic lethality, and aspartate metabolism returned 2 new PMIDs not yet in tracker.md: (1) PMID 42503916 — Chinese-language precision medicine review of PPGL (Zhonghua Yi Xue Za Zhi, Jul 28 2026); rejected: language barrier + no SDH-specific mechanistic or treatment advance beyond what is already in the engine; (2) PMID 42239110 — "Adaptive plasticity of aspartate metabolism in succinate dehydrogenase-deficient cancer cells" (Sokolov D, Zheng E, Hart ML, Sullivan LB; Fred Hutchinson Cancer Center; bioRxiv Jun 11 2026, DOI 10.64898/2026.05.18.726122); DOI was tracked from 2026-07-20 as a preprint without PMID; PMID now assigned but journal still bioRxiv — rejected (preprint); tracker row updated to add PMID. Critically, the Sokolov preprint reveals that SDH-deficient cells can adapt by suppressing Complex I activity, which undermines IACS-010759/Complex I inhibitor direction — cells may escape Complex I inhibition through adaptation. This rules out the Complex I direction definitively. MTHFD2/one-carbon metabolism remains unexplored but has no SDH-specific data and no clinical-stage inhibitors.

For Part B: implemented `tumor_type_applicability` metadata across the drug schema — a data quality improvement rather than a new drug. The current UI shows all 35 drugs with no indication of which apply to GIST vs. PPGL vs. RCC; drugs like 177Lu-DOTATATE, AZD3965, epacadostat, DENSPM, eflornithine, ceralasertib, and pevonedistat are anchored entirely or primarily in PPGL biology, while rogaratinib, erdafitinib, and birabresib are GIST-specific. Added `tumor_type_applicability: string[]` to the Drug domain type, drugs table (supabase-schema.sql), and all 35 SeedDrug entries. Added `TUMOR_TYPE_LABELS` and `TUMOR_TYPE_COLORS` to scoring/constants.ts. Updated DrugCard to show compact tumor type pills below pathway badges; updated the drug detail page to surface tumor type badges at the top of the Quick Facts sidebar. Classification: 19 drugs as `["all"]`; 3 as `["gist"]` (rogaratinib, erdafitinib, birabresib); 9 as `["ppgl"]` (bevacizumab, temozolomide, ascorbic acid, DENSPM, AZD3965, epacadostat, pevonedistat, 177Lu-DOTATATE, eflornithine); 1 as `["ppgl:atrx"]` (ceralasertib); 1 as `["gist","rcc"]` (regorafenib); 1 as `["ppgl","rcc"]` (cabozantinib); 1 as `["gist","ppgl","rcc"]` (sunitinib). Candidate directions still unexplored: (1) IACS-010759 / Complex I dependency — now definitively ruled out by Sokolov preprint PMID 42239110 showing Complex I suppression as an adaptive response to SDH loss; (2) MTHFD2 / one-carbon metabolism (no SDH-specific data, no clinical-stage inhibitors).
**PR:** morning/2026-07-30-tumor-type-applicability

## 2026-07-31

**Direction:** scoring / citation-correction
**Angle:** Fix wrong PMID citations in tazemetostat; upgrade azacitidine (52→58) and decitabine (50→62) evidence scores with the foundational CIMP papers (Letouzé 2013, Killian 2013)
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 0 (all PMIDs returned across 7 PubMed queries — SDH GIST, SDH PPGL/PCC, SDH RCC, SDH pituitary, SDH epigenetics + CIMP, SDH DNMT inhibitors, SDH synthetic lethality — already present in tracker.md; fourth consecutive run with no new papers)
**Summary:** PubMed scan across 7 queries (date window 2026-04-30 to 2026-07-31) returned 0 new PMIDs. Every result was already in tracker.md.

Reviewing drugs.ts to pick a Part B direction, a data-quality bug was found: the tazemetostat `mechanism_of_action` field cited two wrong PMIDs — "Letouzé et al., Cancer Cell 2013, PMID: 23862161" (actually a biomechanics paper, Iosa M et al., Biomed Res Int 2013) and "Killian et al., Cancer Discov 2013, PMID: 23575604" (actually a pediatric neurology paper, Schor NF, Ann Neurol 2013). Verified correct PMIDs via PubMed: Letouzé et al. = PMID 23707781 (DOI: 10.1016/j.ccr.2013.04.018); Killian et al. = PMID 23550148 (DOI: 10.1158/2159-8290.CD-13-0092). Corrected both.

The same two papers were also absent — not just miscited — from the azacitidine and decitabine entries, which carried placeholder MoA text with no SDH-specific citations and unwarranted low scores. The Letouzé 2013 paper is specifically relevant to decitabine: it demonstrated that succinate accumulation in SDHB-deficient mouse chromaffin cells established a hypermethylated, pro-migratory phenotype — and that decitabine treatment directly reversed the migratory phenotype in vitro. This is the only published experiment applying a DNMT inhibitor in an SDH-deficient cell model and showing functional rescue; decitabine therefore has stronger evidence than azacitidine (which only has the mechanistic citation establishing CIMP). Killian 2013 established ~85,000 hypermethylated CpG targets in SDH-deficient GIST vs ~8,400 in KIT-mutant GIST, confirming the CIMP burden that makes DNMT inhibition a rational target.

Changes: (1) tazemetostat MoA — PMIDs corrected (23862161→23707781; 23575604→23550148); (2) azacitidine MoA — rewritten with full CIMP rationale citing Letouzé 2013 + Killian 2013; evidence_score 52→58; (3) decitabine MoA — rewritten citing Letouzé 2013 direct decitabine experiment + Killian 2013; evidence_score 50→62.

Candidate directions still unexplored: (1) IACS-010759 / Complex I — definitively ruled out (Sokolov preprint, PMID 42239110); (2) MTHFD2 / one-carbon — no SDH-specific data, no clinical-stage inhibitors.
**PR:** morning/2026-07-31-cimp-evidence-upgrade

## 2026-08-01

**Direction:** schema/metadata
**Angle:** Structured clinical trial IDs — add `clinical_trial_ids: string[]` to all 35 drug entries, enabling direct ClinicalTrials.gov navigation from the engine
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 6 (PMIDs 42503923, 41704168, 42011694, 42313274, 42355631, 42309573)
**Summary:** PubMed scan across standard SDH-deficient tumor search angles (GIST, PPGL, RCC, pituitary, SDH+metabolism, belzutifan, hereditary PGL/PCC, WT GIST; date-limited May–August 2026) returned 6 new PMIDs not yet in tracker.md; all 6 rejected: one Chinese-language pediatric PPGL genetics paper (42503923), one MEN2A/RET case report with no SDH content (41704168), one pheochromocytoma surgical technique review (42011694), one VHL disease review (belzutifan already in engine; 42313274), one head-and-neck PGL surgical case report with no confirmed SDH mutation (42355631), and one APC-mutation pheochromocytoma case report (42309573). No papers added.

For Part B: implemented structured `clinical_trial_ids: string[]` field across the full drug schema. Previously, NCT IDs were buried in free-text `mechanism_of_action` prose — making them invisible to any filtering or direct navigation. The new field surfaces verified NCT references as machine-readable structured data. Changes made: (1) `src/types/domain.ts` — added `clinical_trial_ids?: string[]` to the Drug type; (2) `src/data/seed/drugs.ts` — added `clinical_trial_ids: string[]` to SeedDrug type and populated all 35 entries; (3) `supabase-schema.sql` — added `clinical_trial_ids TEXT[] NOT NULL DEFAULT '{}'` column to the drugs table; (4) drug detail page (`[drugId]/page.tsx`) — Clinical Trials card in the Quick Facts sidebar, listing each NCT ID as a clickable link to `https://clinicaltrials.gov/study/NCTxxxxxxx`; (5) `drug-card.tsx` — compact trial count badge (e.g. "2 trials") shown alongside the FDA Approved badge when `clinical_trial_ids` is non-empty. NCT IDs were included only when directly cited in the existing `mechanism_of_action` text for that drug; no NCT IDs were invented or inferred. 14 of 35 drugs received at least one NCT ID; 21 receive empty arrays pending future verification. Drugs with IDs: Tazemetostat (NCT03213665), Hydroxychloroquine (NCT03283150, NCT01023737), Daporinad (NCT00432107), Rogaratinib (NCT04595747), AZD3965 (NCT01791595), Epacadostat (NCT02318277), Birabresib (NCT01713582), Denifanstat (NCT02980029, NCT04341337), Brequinar (NCT01888484), Teriflunomide (NCT02799498), Ym155 (NCT00390117), 177Lu-DOTATATE (NCT01578239), Cabozantinib (NCT02302833, NCT04400474), Ceralasertib (NCT03787680).

Candidate directions still unexplored: (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively (Sokolov preprint 2026-07-30).
**PR:** morning/2026-08-01-nct-linkage

## 2026-08-02

**Direction:** immune evasion / checkpoint
**Angle:** HIF-1α-driven PD-L1/checkpoint immune evasion — add pembrolizumab as a new drug candidate in a new `hif-pdl1-checkpoint-evasion` pathway
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 6 (PMIDs 42371006, 42414254, 42417917, 42168872, 41772163, 41707742)
**Summary:** PubMed scan across SDH-deficient tumor search angles (GIST, PPGL/PCC, RCC, pituitary, SDH+immunity/immune evasion/checkpoint, belzutifan, SDH+metabolism; date window May–August 2026) returned 6 new PMIDs not yet in tracker.md; all 6 rejected: PMID 42371006 (MSI-H/MMRd GIST case with retained SDH expression — SDH-deficient mentioned only as differential), PMID 42414254 (lactate/H3K4me3/PLOD1 in prostate cancer — off-panel tumor type), PMID 42417917 (DNMT3A/TET2 in Type 1 diabetes hematopoiesis — not cancer), PMID 42168872 (cladribine vs. Klebsiella — SDH in bacteria, not cancer), PMID 41772163 (X-ray pre-irradiation + phenolic acids on K562/Dox — no SDH content), PMID 41707742 (EZH2/SDHC in acute kidney injury — AKI non-oncological context). No papers cleared the relevance gate.

For Part B: implemented the HIF-1α → PD-L1 checkpoint immune evasion pathway as a genuinely new direction — the first checkpoint immunology mechanism in the engine, and a mechanistically distinct second arm of immune evasion complementary to the succinate-MCT1-IDO1 axis (Mechanism 11 / AZD3965 + epacadostat entries). The mechanistic anchor is Noman et al. (J Exp Med 2014, PMID 24493797), who demonstrated that HIF-1α directly binds hypoxia-response elements (HREs) in the CD274 promoter to transcriptionally activate PD-L1 on tumor cells — and that this HIF-driven PD-L1 expression is the primary mechanism of immune evasion in hypoxic tumor microenvironments. In SDH-deficient tumors, succinate-mediated PHD inhibition constitutively stabilizes HIF-1α regardless of oxygen, creating a persistent pseudohypoxic state that continuously drives CD274 transcription. The clinical anchors are NCT02721732 (Phase 2 pembrolizumab in rare tumors including metastatic PCC and PGL; n=157; M.D. Anderson) and NCT02834013 (DART: Phase 2 nivolumab+ipilimumab in rare tumors including explicit GIST and paraganglioma cohorts; n=798; NCI) — the latter spanning both major SDH-deficient tumor types.

Changes made: (1) `src/data/seed/pathways.ts` — new pathway `hif-pdl1-checkpoint-evasion` (display_order 21); (2) `src/data/seed/targets.ts` — new target CD274 (PD-L1/B7-H1, UniProt Q9NZQ7, target_type downstream, pathway_slug hif-pdl1-checkpoint-evasion); (3) `src/data/seed/drugs.ts` — new drug pembrolizumab (Keytruda; anti-PD-1 mAb; evidence_score 32; status theoretical; pathway_slugs ["hif-pdl1-checkpoint-evasion", "succinate-immune-evasion"]; target_gene_symbols ["CD274"]; tumor_type_applicability ["all"]; clinical_trial_ids ["NCT02721732", "NCT02834013"]); (4) `src/data/seed/sdh-biology.ts` — new row in druggable targets table and Mechanism 22 detailed section (HIF-Driven PD-L1 / Checkpoint Immune Evasion).

Evidence_score rationale: 32 (theoretical) — HIF-1α → CD274 mechanism well-established in hypoxia literature (PMID 24493797); pseudohypoxia = constitutive HIF-1α in SDH-deficient tumors is established biology; clinical trial activity in GIST and PPGL confirmed; no SDH-genotype-stratified outcome data reported.

Candidate directions still unexplored: (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively (Sokolov preprint PMID 42239110, 2026-07-30).
**PR:** morning/2026-08-02-hif-pdl1-checkpoint

## 2026-08-03

**Direction:** drug-pool
**Angle:** Alpha-particle SSTR2-targeted radioligand therapy — [212Pb]VMT-α-NET as a mechanistically distinct drug class from ¹⁷⁷Lu-DOTATATE, exploiting the BRCAness × high-LET DSB synthetic lethality in SDH-deficient PPGL
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 1 (PMID 42544736 — Pediatr Blood Cancer 2026-08-03, four-patient pediatric GIST case series; SDH-deficient and SDH-intact subtypes described clinically; no new mechanistic or treatment advance)
**Summary:** PubMed scan using SDH-specific searches (SDH GIST, SDH PPGL/PCC, SDH RCC, SDH pituitary, SDHB mutation cancer, SDH-deficient drug repurposing; date-limited May–August 2026) returned one new PMID (42544736) not yet in tracker.md; rejected as above. All other results already in tracker.md.

For Part B: added [212Pb]VMT-α-NET (AlphaNet, Perspective Therapeutics) as a new drug entry distinct from the existing ¹⁷⁷Lu-DOTATATE (Lutathera) entry. The key mechanistic distinction is radiobiological: lead-212 is an alpha-emitting radionuclide (LET ~80 keV/μm, tissue range ~50–80 μm) that, when conjugated to a SSTR2-targeting DOTATATE-class peptide and internalized into SSTR2+ tumor cells, produces densely clustered DNA double-strand breaks (DSBs) qualitatively distinct from the isolated DSBs generated by ¹⁷⁷Lu β-particles (LET ~0.2 keV/μm). Clustered, complex DSBs require high-fidelity homologous recombination (HR) for repair; isolated DSBs can be handled by NHEJ/alt-EJ. In SDH-deficient PPGL, the BRCAness phenotype (Sulkowski et al., Nat Genet 2018, PMID 30013182; Nature 2020, PMID 32494005 — succinate → KDM4B inhibition → H3K9me3 persistence at DSBs → TIP60/ATM impairment → HR deficiency) means cells cannot efficiently resolve these clustered lesions. The consequence is a form of radiobiological synthetic lethality that is mechanistically greater with alpha-particle than beta-particle PRRT: SDH-deficient PPGL cells are simultaneously SSTR2-high (guaranteeing uptake, confirmed by DOTATATE-PET PMID 42454478 and BIM-23120 SSTR2 pharmacological vulnerability PMID 41928014) and HR-deficient (maximally sensitive to clustered DSBs). Two active Phase 1/2 trials exist: NCT06427798 (NCI; recruiting; n=66; PPGL and GI-NETs with prior PRRT) and NCT05636618 (Perspective Therapeutics; first-in-human; advanced SSTR2+ solid tumors).

Also used this run to add verified NCT IDs to two existing engine entries: belzutifan gained NCT04924075 (Merck Phase 2 of belzutifan in PPGL, WT-GIST, and HIF-2α-altered solid tumors); 177Lu-DOTATATE gained NCT03206060 (NCI Phase 2 of Lu-DOTATATE in inoperable PCC/PGL) and NCT06607692 (LuPARPed — ¹⁷⁷Lu-DOTATATE + olaparib in PPGL, validating the BRCAness synergy direction already documented in the engine).

Changes made: (1) `src/data/seed/drugs.ts` — new drug [212Pb]VMT-α-NET (evidence_score 28, status clinical_trial, pathway_slugs ["sstr2-somatostatin-vulnerability", "sdh-driven-hrd"], target_gene_symbols ["SSTR2"], tumor_type_applicability ["ppgl"], clinical_trial_ids ["NCT06427798", "NCT05636618"]); belzutifan clinical_trial_ids updated ([] → ["NCT04924075"]); 177Lu-DOTATATE clinical_trial_ids updated (["NCT01578239"] → ["NCT01578239", "NCT03206060", "NCT06607692"]); (2) `src/data/seed/sdh-biology.ts` — Mechanism 23 (Alpha-Particle SSTR2-Targeted Radioligand Therapy) added.

Evidence_score rationale: 28 (theoretical) — SSTR2 targeting of SDH-deficient PPGL is evidence-grade (PMID 41928014, 42454478); BRCAness phenotype established (PMID 30013182, 32494005); alpha-particle / HR-deficiency synthetic lethality is mechanistically sound from established radiobiology; however, no SDH-genotype-stratified [212Pb]VMT-α-NET data exist yet.

Candidate directions still unexplored: (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively (Sokolov preprint PMID 42239110, 2026-07-30).
**PR:** morning/2026-08-03-alpha-particle-prrt

## 2026-08-05

**Direction:** drug-pool
**Angle:** CDKN2A/CDK4/6 cell cycle axis — palbociclib as epigenetic-to-cell-cycle link in SDH-deficient GIST
**Papers added:** 1 (PMID 42554827 — Imperiale A et al., Eur J Nucl Med Mol Imaging 2026-08-05; SDHx-specific SSTR-PET phenotype in 174 PPGLs from 91 patients)
**Papers rejected (logged to tracker.md):** 20 (PMIDs 42554704, 42439312, 42502789, 42548782, 42540587, 42149606, 42148842, 42543428, 42504278, 42502663, 42491361, 42488370, 42488368, 42466114, 42453302, 42444448, 42442967, 42440948, 42438811 — all clinical case reports, imaging studies, general PPGL management reviews, or off-panel content with no SDH-specific mechanistic or treatment advance; full verdicts in tracker.md)
**Summary:** PubMed scan across SDH-deficient tumor search angles (GIST, PPGL, RCC, pituitary, SDH metabolism, CDK4/6-GIST specifically; date window May–August 2026) returned 21 new PMIDs not yet in tracker.md. One added (PMID 42554827): Imperiale et al. demonstrated that SDHx genotype and anatomical location interact significantly (p<0.001) on all DOTATATE-PET parameters in 174 PPGLs — SDHx-related PPGLs show uniform high SSTR uptake regardless of location, while sporadic PPGLs display a cranio-caudal gradient; SDHx vs. sporadic head-and-neck PGL discriminated with 87.3% accuracy. This defines an SDHx-specific SSTR-PET phenotype with direct implications for DOTATATE-PET interpretation and PRRT eligibility in SDH-deficient patients (topic: Diagnosis & Pathology). Twenty rejected: all clinical case reports, imaging technique studies, or general PPGL reviews with no SDH-specific mechanistic or drug repurposing advance.

For Part B: implemented the CDKN2A/CDK4/6 cell cycle axis as a genuinely new direction. The rationale begins with Killian et al. (Cancer Discov 2013, PMID 23550148), which identified ~85,000 hypermethylated CpG sites in SDH-deficient GIST CIMP (vs ~8,400 in KIT/PDGFRA GIST) — including CDKN2A promoter hypermethylation. CDKN2A encodes p16/INK4A, the principal allosteric inhibitor of CDK4 and CDK6. When CIMP silences CDKN2A, p16/INK4A is not produced; CDK4/6 form constitutive complexes with cyclin D; RB1 is chronically hyperphosphorylated; E2F transcription factors are constitutively released; and the G1/S restriction point is bypassed without interruption. This cell cycle deregulation is mechanistically downstream of the same succinate-TET-CIMP cascade that drives all other CIMP consequences in SDH-deficient GIST, making it an SDH-specific phenotype absent from KIT/PDGFRA-mutant GIST. Palbociclib (Ibrance; FDA-approved for HR+/HER2- breast cancer, 2015) pharmacologically reimposing the CDK4/6 brake that p16 silencing ablated — the same mechanism that makes it effective in p16-null, RB1-intact breast cancer.

Changes made: (1) `src/data/seed/pathways.ts` — new pathway `cdkn2a-cdk46-cell-cycle` (display_order 22); (2) `src/data/seed/targets.ts` — new target CDK4 (cyclin-dependent kinase 4, UniProt P11802, pathway_slug cdkn2a-cdk46-cell-cycle); (3) `src/data/seed/drugs.ts` — new drug palbociclib (Ibrance; CDK4/6 inhibitor; evidence_score 30; status theoretical; pathway_slugs ["cdkn2a-cdk46-cell-cycle", "epigenetic-dysregulation"]; target_gene_symbols ["CDK4"]; tumor_type_applicability ["gist"]); (4) `src/data/seed/sdh-biology.ts` — new row in druggable targets table and new Mechanism 24 (CDKN2A/CDK4/6 Cell Cycle Dysregulation via CIMP); (5) `src/lib/scoring/constants.ts` — added PATHWAY_COLORS entries for `cdkn2a-cdk46-cell-cycle` (gray) and the previously missing `hif-pdl1-checkpoint-evasion` (neutral).

Evidence_score rationale: 30 (theoretical) — CIMP-driven CDKN2A silencing in SDH-deficient GIST is established by Killian 2013 (PMID 23550148); the CDK4/6 hyperactivation consequence is mechanistically clear; palbociclib's efficacy in analogous p16-null breast cancer provides strong pharmacological precedent; but no SDH-deficient-specific CDK4/6 inhibitor data exist. Key unresolved questions: p16/INK4A protein loss confirmation in SDH-GIST specimens; RB1 integrity in SDH-GIST (required for response); direct palbociclib sensitivity testing in SDHA-null GIST cell lines.

Candidate directions still unexplored: (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively (Sokolov preprint PMID 42239110, 2026-07-30).
**PR:** morning/2026-08-05-cdkn2a-cdk46

## 2026-08-10

**Direction:** dual scoring upgrade (belzutifan PPGL approval + CB-839/telaglenastat evidence quality)
**Angle:** Primary — upgrade belzutifan entry with LITESPARK-015 Phase 2 PPGL data (newly FDA-approved for metastatic PPGL); Secondary — upgrade CB-839/telaglenastat MoA with verified SDH-specific reductive carboxylation evidence and add clinical trial IDs
**Papers added:** 3 (PMIDs 42573142, 42490294, 42573129)
**Papers rejected (logged to tracker.md):** see below
**Summary:** PubMed scan returned multiple new PMIDs since 2026-08-05. Three papers cleared the relevance gate: PMID 42573142 (Jimenez C et al., J Clin Endocrinol Metab 2026-08-10 — review of belzutifan LITESPARK-015 Phase 2 in PPGL; 85% DCR, 26% ORR; belzutifan now first oral and second FDA-approved therapy for metastatic PPGL; direct validation of pseudohypoxic mechanism in SDH-deficient tumors — triggered belzutifan upgrade); PMID 42490294 (Okamoto S et al., Clin Cancer Res 2026-07-23 — first-in-human [211At]MABG alpha-particle MIBG therapy Phase 1 in 10 refractory PCC/PGL patients; no DLTs at 2.1 MBq/kg; 1 PR + 7 SD; clinical feasibility of alpha-particle MIBG established; relevant to BRCAness × high-LET direction); PMID 42573129 (Parisien-La Salle S et al., Endocr Relat Cancer 2026-08-10 — international cohort of 45 SDHC c.397C>T founder variant PPGL patients; 97.8% PGLs, 11.1% metastatic, 59.1% HN/27.3% thoracic; valuable genotype–phenotype characterization of this under-represented SDHC founder allele).

For Part B: implemented two complementary scoring upgrades for existing seed entries rather than adding a new drug or pathway (which would have been premature given the remaining gap territory is thin). Both upgrades correct real deficiencies in the current engine:

**Primary (belzutifan):** The LITESPARK-015 Phase 2 PPGL data (PMID 42573142) constitute a genuine clinical milestone: belzutifan is now FDA-approved for metastatic PPGL — the first oral systemic therapy in this indication and direct validation of HIF-2α inhibition as clinically effective in SDH-driven pseudohypoxia. The prior engine entry (evidence_score 82) was written before this approval and its MoA lacked PPGL-specific clinical data. Changes: (1) approved_indications — added "Locally advanced or metastatic pheochromocytoma and paraganglioma"; (2) mechanism_of_action — updated with LITESPARK-015 Phase 2 outcomes (85% DCR, 26% ORR), FDA approval context, and mechanism-based anemia as dominant AE; (3) evidence_score 82 → 88 (Phase 2 data now published with clinical benefit in a directly SDH-relevant tumor type; prior gap was absence of PPGL-specific clinical efficacy data, now filled).

**Secondary (telaglenastat/CB-839):** The prior CB-839 MoA was a 2-sentence stub with zero citations and empty clinical_trial_ids — a quality gap identified on reviewing seed data. The Mullen et al. Nature 2012 paper (PMID 22101431, verified) establishes that cells with Complex II (SDH) defects shift to reductive glutamine carboxylation as the dominant citrate pathway, making GLS the committed entry step for this reductive flux — the precise mechanistic anchor needed to justify GLS inhibition as selectively toxic in SDH-deficient cells. Lussey-Lepoutre et al. Nat Commun 2015 (PMID 26522426, verified) independently confirms SDH-deficient cells develop compensatory anaplerotic dependencies. Added clinical_trial_ids ["NCT03428217", "NCT02071862"] (CANTATA and ENTRATA Phase 2 trials). Also added detailed Mechanism 25 section to sdh-biology.ts explaining the reductive carboxylation pathway, updated Section 5 to include the Mullen 2012 mechanism, and updated the druggable targets table GLS row with citation and Mechanism 25 reference. Evidence_score unchanged at 60 — the upgrade is evidence quality and mechanistic clarity, not score change (no new SDH-specific efficacy data added).

Changes made: (1) `src/data/papers.ts` — 3 new entries (PMIDs 42573142, 42490294, 42573129); (2) `src/data/seed/drugs.ts` — belzutifan: approved_indications expanded, MoA updated with LITESPARK-015 data, evidence_score 82→88; telaglenastat: MoA expanded with Mullen 2012 + Lussey-Lepoutre 2015 citations, clinical_trial_ids added; (3) `src/data/seed/sdh-biology.ts` — Section 5 expanded, GLS table row updated, Mechanism 25 added (Glutamine Dependency and Reductive Carboxylation — Telaglenastat); (4) `tracker.md` — 3 new rows added.

Candidate directions still unexplored: (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively (Sokolov preprint PMID 42239110, 2026-07-30).
**PR:** morning/2026-08-10-belzutifan-ppgl-cb839-gls

## 2026-08-11

**Direction:** evidence quality upgrade (existing drug entry)
**Angle:** Sunitinib MoA upgrade with FIRSTMAPPP Phase 2 RCT data (Baudin et al., Lancet 2024, PMID 38402886); secondary — metformin MoA correction to remove misleading Complex I rationale (Sokolov preprint PMID 42239110)
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 2 (PMID 42176217 — NF1-GIST with EED/CDKN2A loss but SDHB-positive, not SDH-deficient; PMID 41996739 — LOT-kidney with SDHB-positive IHC, MTOR-mutant, different renal subtype)
**Summary:** PubMed scan (SDH-deficient GIST, PPGL, paraganglioma sunitinib, SDH biology, July–August 2026) returned 2 new PMIDs not in tracker.md. Both rejected: PMID 42176217 is NF1-associated GIST with PRC2/CDKN2A findings but confirmed SDHB expression (not SDH-deficient); PMID 41996739 is a low-grade oncocytic renal tumor (LOT) with SDHB-positive IHC and MTOR mutation — an unrelated renal subtype. No new papers to add. PMID 38402886 (FIRSTMAPPP, Baudin et al., Lancet 2024) was already known to the engine implicitly via the sunitinib entry but had never been formally cited in the MoA or linked as a clinical trial ID.

For Part B: the sunitinib entry (evidence_score 75, second-highest in engine) was the worst-documented established drug — a one-sentence stub with zero citations and empty clinical_trial_ids[]. This is the principal quality defect in the current seed data. FIRSTMAPPP (NCT01371201; Baudin et al., Lancet 2024, PMID 38402886) is the landmark fix: the first randomised Phase 2 trial ever conducted in metastatic PPGL (n=78; 39 per arm; stratified by SDHB status; 32% SDHx patients), showing sunitinib 37.5 mg/day vs placebo achieved 12-month PFS 36% (90% CI 23–50) vs 19% (90% CI 11–31). Authors' verdict: "highest level of evidence for anti-tumour efficacy in progressive metastatic PPGL." The new MoA: (1) retains the kinase/angiogenesis mechanism; (2) adds the HIF-driven VEGF overexpression rationale (why SDH-deficient cells are particularly sensitive); (3) cites FIRSTMAPPP with exact trial outcomes, stratification detail, and PMID; (4) NCT01371201 added to clinical_trial_ids. Evidence_score raised 75→78 — a modest 3-point bump reflecting the FIRSTMAPPP RCT (Phase 2 with randomisation, in a directly SDH-relevant tumor type) relative to prior score based on GIST approval + anecdotal PPGL activity.

Secondary fix — metformin MoA correction: the prior entry stated "additional Complex I inhibition may further disrupt mitochondrial metabolism" — language that was mechanistically wrong in light of the Sokolov preprint (PMID 42239110) demonstrating that SDH-deficient cells adaptively suppress Complex I. The updated MoA removes this claim, notes the Sokolov finding explicitly, and retains only the AMPK→mTOR axis as the plausible residual rationale. drug_class updated from "Biguanide / Complex I inhibitor / AMPK activator" to "Biguanide / AMPK activator" for consistency. Evidence_score unchanged at 40 — the correction removes a false positive rationale; it does not add new evidence.

Changes made: (1) `src/data/seed/drugs.ts` — sunitinib: MoA expanded with FIRSTMAPPP mechanism + RCT outcomes, evidence_score 75→78, clinical_trial_ids [] → ["NCT01371201"]; metformin: MoA corrected (Complex I claim removed, Sokolov caveat added), drug_class simplified; (2) `tracker.md` — 2 new rejected rows (PMIDs 42176217, 41996739).

Evidence_score rationale (sunitinib 78): prior 75 was based on GIST FDA approval + known PPGL activity without randomised data; +3 for FIRSTMAPPP Phase 2 RCT with randomisation and SDHB-stratified subgroup in a directly SDH-relevant tumor type. Does not reach 80+ because FIRSTMAPPP is Phase 2 (not Phase 3), primary endpoint was 12-month PFS rather than OS, and the SDHx-stratified subgroup result (n≈25) is underpowered for definitive conclusions about SDH-deficient PPGL specifically.

Candidate directions still unexplored: (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively (Sokolov preprint PMID 42239110, 2026-07-30).
**PR:** morning/2026-08-11-sunitinib-firstmappp

## 2026-08-12

**Direction:** data quality correction (seed data)
**Angle:** Fix two wrong `target_gene_symbols` entries — panobinostat (DNMT1 → HDAC1, HDAC2) and enasidenib (IDH1 → IDH2) — with MoA upgrades that add SDH-specific mechanistic context and clinical citations
**Papers added:** 0
**Papers rejected (logged to tracker.md):** 0
**Summary:** PubMed scan (SDH GIST, SDH PPGL/PCC, SDH RCC, SDH pituitary, SDH-deficient cancer, SDH metabolism, SDH epigenetics; date window May–August 2026) returned only PMIDs already present in tracker.md. This is the 3rd consecutive run with no new papers to add; the search space is well-covered.

For Part B: identified two data quality bugs in `src/data/seed/drugs.ts` that would cause incorrect drug-target associations in any query filtering by `target_gene_symbols`:

**1. Panobinostat: `target_gene_symbols` was `["DNMT1"]`** — a copy-paste error. Panobinostat is a pan-HDAC inhibitor (LBH589; Farydak); DNMT1 is a DNA methyltransferase and is not a panobinostat target. The correct primary targets are HDAC1 and HDAC2 (Class I HDACs that panobinostat inhibits at nanomolar concentrations). The MoA was also a 2-sentence stub. Expanded MoA: (1) accurate HDAC1/2 primary target identification; (2) CIMP context — SDH-deficient tumors have dual epigenetic silencing (DNA hypermethylation via TET inhibition + histone hypermethylation via KDM inhibition + HDAC-mediated deacetylation — pan-HDAC inhibition addresses the deacetylation arm); (3) mechanistic anchor for PPGL specifically — Martiniova et al. (Endocr Relat Cancer 2011, PMID 21098082) showed panobinostat upregulates NET/SLC6A2 and increases MIBG uptake at nanomolar concentrations, providing a combination rationale with ¹³¹I-MIBG or [²¹¹At]MABG; (4) NCT00985946 (Phase 2 panobinostat in NETs; University of Wisconsin; 15 patients enrolled before termination) added to `clinical_trial_ids`.

**2. Enasidenib: `target_gene_symbols` was `["IDH1"]`** — wrong gene. Enasidenib (Idhifa) inhibits mutant IDH2; ivosidenib inhibits IDH1. These are different enzymes, different drugs, and different approved indications (AML with IDH2 mutation vs. IDH1 mutation). The gene symbol error would cause any IDH1-targeted query to incorrectly retrieve enasidenib. Corrected to `["IDH2"]`. MoA also expanded: (1) explicit note that enasidenib targets IDH2, not IDH1 (and that ivosidenib is the IDH1 counterpart, to prevent future confusion); (2) 2-HG / succinate cross-oncometabolite parallel fleshed out with citations — Nowicki & Gottlieb FEBS J 2015 (PMID 25864878), Yong et al. Nat Rev Nephrol 2019 (PMID 31636445), Zhao et al. World J Gastroenterol 2020 (PMID 32982110); (3) explicit clarification that enasidenib is not active in SDH-deficient tumors (no IDH2 mutation present), but its inclusion is as a proof-of-concept that oncometabolite-driven α-KG-dioxygenase inhibition is pharmacologically reversible.

Changes made: `src/data/seed/drugs.ts` — panobinostat: `target_gene_symbols` DNMT1→HDAC1,HDAC2; MoA rewritten; `clinical_trial_ids` [] → ["NCT00985946"]. Enasidenib: `target_gene_symbols` IDH1→IDH2; MoA rewritten.

Candidate directions still unexplored: (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively (Sokolov preprint PMID 42239110, 2026-07-30).
**PR:** morning/2026-08-12-target-gene-fixes-hdac-idh2

## 2026-08-13

**Direction:** evidence quality upgrade (seed data)
**Angle:** Temozolomide CIMP→MGMT→TMZ mechanistic chain fully cited with clinical outcome data; bevacizumab SDH-pseudohypoxia mechanism grounded and pathway linkage corrected

**Papers added:** 0

**Papers rejected (logged to tracker.md):** 3 new papers (PMID 42526974: general SDH-PPGL review, no new advance; PMID 42348778: H3F3A case report, no SDH content; PMID 42284442: veterinary case report); 2 papers evaluated as out-of-window supporting citations (PMID 38837102: Jun 2024; PMID 41301064: Nov 2025).

**Summary:** PubMed scan (SDH-deficient GIST, PPGL/PCC, RCC; SDH metabolism; SDH epigenetics; temozolomide PPGL; MGMT methylation PPGL; 2026-05-13 to 2026-08-13) yielded 3 new PMIDs — all rejected (general review, non-SDH case reports). 0 papers added to papers.ts.

For Part B: identified that the temozolomide entry was the thinnest major clinical drug in the engine — a 2-sentence stub with no citations, `target_gene_symbols: ["DNMT1"]` (DNA methyltransferase, not a TMZ target and not the relevant biomarker gene), and evidence_score 68 despite being a drug with prospective clinical validation in PPGL.

**Temozolomide upgrade (evidence_score 68→74):**
- MoA rewritten to include the complete SDH→succinate→TET inhibition→CIMP→MGMT silencing→TMZ sensitivity chain, citing Killian et al. Cancer Discov 2013 (PMID 23550148) for SDH-GIST CIMP and Letouzé et al. Cancer Cell 2013 (PMID 23707781) for SDH-PPGL CIMP
- Added Cui et al. J Endocrinol Invest 2024 (PMID 38837102) as the key clinical anchor: prospective 62-patient PPGL study, DCR 83%, ORR 24%, mPFS 25.2 months; MGMT promoter methylation >7% → 92.9% disease control rate vs undetectable response in MGMT-unmethylated patients; SDHB in keywords
- `target_gene_symbols` corrected from `["DNMT1"]` to `["MGMT"]`: MGMT is the silenced repair gene whose loss confers TMZ sensitivity; DNMT1 is mechanistically remote from TMZ's action and was misleading for any target-gene query

**Bevacizumab upgrade (evidence_score 65→67):**
- MoA rewritten with full SDH→succinate→PHD inhibition→HIF-1α/2α stabilization→VEGF-A transcription chain, replacing the uncited "has shown activity...in combination with temozolomide" stub
- `pathway_slugs` updated: `["vegf-signaling"]` → `["vegf-signaling", "hif-pseudohypoxia"]` to reflect the upstream pseudohypoxic mechanism that makes VEGF targeting mechanistically appropriate in SDH-deficient PPGL
- Combination rationale with temozolomide stated explicitly (complementary mechanisms: BEV targets HIF-driven angiogenesis, TMZ exploits CIMP-driven MGMT silencing)
- Score bumped only 2 points because no new clinical trial data was added; clinical basis remains case-series level

Evidence_score rationale (TMZ 74): prior 68 reflected the uncited stub and indirect mechanistic plausibility. +6 for: (1) citation of CIMP-MGMT mechanism in both GIST and PPGL with two landmark Cancer Cell/Cancer Discov papers; (2) prospective 62-patient trial showing 83% DCR and MGMT methylation as a quantitative predictive biomarker with 92.9% response in methylated subgroup — this is unusually strong biomarker-outcome data for a rare tumor. Does not reach 80+ because: Cui et al. is a single-center prospective study (not multicenter RCT); the SDHB-specific subgroup is not separately reported; no FDA indication in PPGL.

Candidate directions still unexplored: (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively (Sokolov preprint PMID 42239110, 2026-07-30).
**PR:** morning/2026-08-13-tmz-mgmt-bevacizumab

## 2026-08-15

**Direction:** evidence quality upgrade (seed data)
**Angle:** Everolimus mTOR/PI3K/AKT mechanistic chain fully cited and documented; Phase II PPGL trial NCT01152827 added; Mechanism 26 added to SDH biology context

**Papers added:** 1 — PMID 42155081 (Batini et al., Arch Endocrinol Metab 2026-08-01; TERT promoter PVs and ATRX in SDHB-enriched PPGL cohort — deferred from 2026-07-15 as ahead-of-print, now published)

**Papers rejected (logged to tracker.md):** 0 new papers (all PubMed scan queries returned only PMIDs already in tracker.md; 5th consecutive run with no new papers in the 3-month window for this rare disease)

**Summary:** PubMed scan (SDH GIST, SDH PPGL/PCC, SDH RCC, SDH pituitary, SDH-deficient cancer, SDH mTOR, SDH epigenetics; 2026-05-15 to 2026-08-15) returned only PMIDs already logged in tracker.md. PMID 42155081 was deferred 2026-07-15 as ahead-of-print; now published 2026-08-01 and within scan window — re-evaluated and added.

For Part B: the everolimus entry was the worst-documented established drug in the engine — 3-sentence MoA stub with no citations, `status: "preclinical"` despite a completed Phase II PPGL trial (NCT01152827, n=33), `evidence_score: 55`, and `clinical_trial_ids: []`. Upgraded with:

**Everolimus evidence upgrade (evidence_score 55→58, status "preclinical"→"clinical_trial"):**
- MoA rewritten with full mechanistic chain: succinate → PHD inhibition → HIF-1α/2α stabilization → IGF2/HGF transcriptional upregulation → PI3K/AKT activation → TSC1/2 inhibition → Rheb-GTP → mTORC1 constitutive activation; anchor citation Jochmanová et al. (JNCI 2013, PMID 23940289), which explicitly covers HIF/mTOR interconnection as a tumorigenesis driver in SDH-deficient pseudohypoxic cluster 1 PPGL
- AKT reactivation caveat added: mTORC1 inhibition removes S6K1→IRS-1 negative feedback → paradoxical AKT rebound via mTORC2/PDK1, limiting single-agent everolimus durability and motivating combination strategies
- First clinical experience cited: Druce et al. Horm Metab Res 2009 (PMID 19424940) — 4 patients with malignant PGL/PCC; in vitro mTOR basis; outcomes "relatively disappointing," establishing combination rationale
- Systematic review cited: Faggiano et al. Oncologist 2016 (PMID 27053503) — extrapancreatic NETs including pheochromocytoma; PFS 12–29.9 months; 67–100% disease stabilization
- `clinical_trial_ids: ["NCT01152827"]` added: Phase II RAD001 monotherapy in unresectable PCC/paraganglioma, n=33, Seoul National University Hospital, completed
- **Mechanism 26** added to `sdh-biology.ts`: dedicated detailed section covering the PI3K/AKT/mTOR axis in SDH-deficient tumors with full mechanistic chain, AKT reactivation pharmacological limitation, and clinical evidence summary
- Key Druggable Targets table entry updated from 1-line stub to full mechanistic summary with citations

Evidence_score rationale (everolimus 58): prior 55 reflected a thin theoretical-to-preclinical basis with only FDA approvals in adjacent tumor types. +3 for: (1) Jochmanová 2013 explicitly anchoring HIF/mTOR interconnection in SDH-deficient PPGL; (2) NCT01152827 Phase II completed in PCC/paraganglioma; (3) Faggiano 2016 systematic review including pheochromocytoma with documented PFS and disease-stabilization rates. Does not reach 60+ because: no SDH-genotype-stratified efficacy data exist; NCT01152827 results not peer-reviewed and widely published; Druce 2009 outcomes "relatively disappointing" for single-agent approach.

**Previously logged directions NOT re-evaluated:** MTHFD2/one-carbon (no SDH-specific data, no clinical-stage inhibitors); Complex I definitively ruled out (Sokolov preprint PMID 42239110, 2026-07-30).

**Files changed:** `src/data/papers.ts` (+1 paper, PMID 42155081), `src/data/seed/drugs.ts` (everolimus MoA/evidence/status/clinical_trial_ids), `src/data/seed/sdh-biology.ts` (Mechanism 26 added, mTOR table row updated), `tracker.md` (PMID 42155081 verdict updated from rejected→added; 3 citation PMIDs logged), `MORNING_LOG.md` (this entry).
**PR:** morning/2026-08-15-mtor-everolimus-upgrade

## 2026-08-16

**Direction:** drug-pool expansion (new drug) + data quality upgrade (existing entry)
**Angle:** Primary — capivasertib (pan-AKT inhibitor, FDA-approved) as complement to everolimus targeting the AKT reactivation limitation; Secondary — regorafenib MoA upgrade with GRID Phase 3 citation, FGFR1/2 SDH context, and NCT01271712

**Papers added:** 0

**Papers rejected (logged to tracker.md):** 3 new papers — PMID 42258704 (deep learning on GIST histology WSIs predicting KIT/PDGFRA mutations; AI/ML methodology; no SDH-specific content); PMID 42059893 (multiomic landscape 1,427 GIST cases; broad cohort; no SDH subgroup analysis); PMID 42235209 (RNA/DNA NGS of KIT/PDGFRA mutations in GIST; sequencing methodology; no SDH-specific content).

**Summary:** PubMed scan (8 queries across SDH-deficient GIST, PPGL, RCC, pituitary; wild-type GIST; SDH synthetic lethality; SDHB/SDHA mechanism; 2026-05-16 to 2026-08-16) returned 3 new PMIDs — all rejected for the same reason: KIT/PDGFRA-centric methodology or cohort studies without SDH-specific mechanistic or treatment content.

For Part B, identified a genuinely new direction not previously logged: **direct AKT kinase inhibition** as a pharmacological complement to everolimus. The direction passes the hard relevance gate via the Jochmanová JNCI 2013 (PMID 23940289) anchor already cited in the engine's everolimus entry — which identifies constitutive AKT pathway activation as the central tumorigenesis driver in SDH-deficient pseudohypoxic cluster 1 PPGL, and explicitly documents AKT reactivation as the primary limitation of single-agent mTORC1 inhibition. Capivasertib (Truqap, AstraZeneca) is FDA-approved (November 2023; CAPItello-291 Phase 3, NCT04305496) as the first-in-class pan-AKT1/2/3 allosteric inhibitor, blocking AKT membrane recruitment via PH-domain binding regardless of mutation status. No prior run has addressed AKT inhibitors, capivasertib, or the "AKT complement to everolimus" concept.

**Capivasertib (new drug, evidence_score 32, theoretical):**
- Mechanistic chain: SDH loss → HIF-1α/2α → IGF2/HGF transcription → IGF1R/MET activation → PI3K/PIP3 → AKT recruitment (PH domain) → PDK1/mTORC2 activation → TSC1/2 inactivation → mTORC1. Capivasertib blocks at the AKT node, preventing both the constitutive HIF-driven AKT activation AND the paradoxical AKT rebound caused by everolimus (S6K1→IRS-1 feedback relief → PI3K→AKT reactivation via mTORC2/PDK1)
- Evidence_score 32 (theoretical): mechanistic chain anchored by Jochmanová 2013 (PMID 23940289) in SDH-deficient PPGL and established rapalog pharmacology; no SDH-specific capivasertib preclinical data published
- tumor_type_applicability: ["ppgl", "gist", "rcc"] — HIF/mTOR axis is operative in all SDH-deficient tumor types, though PPGL has the most direct documentation
- AKT1 added to targets.ts; Mechanism 27 added to sdh-biology.ts

**Regorafenib MoA upgrade (evidence_score 58→60):**
- Prior entry: 2-sentence stub with no citations, no NCT IDs, target_gene_symbols ["KDR", "KIT"] only, pathway_slugs ["vegf-signaling", "mtor-pi3k-akt"] only
- GRID Phase 3 trial (NCT01271712; Demetri et al., Lancet 2013, PMID 23099011; n=199; median PFS 4.8 vs 0.9 months, HR 0.27, p<0.0001) added as registration trial citation
- FGFR1/2 inhibitory activity added (IC50 ~130–170 nM at clinically achievable concentrations) with SDH-specific rationale: aberrant FGFR1 autocrine signaling in SDH-deficient GIST is now validated by rogaratinib Phase 2 41.7% ORR (PMID 42191879); regorafenib's FGFR1/2 activity adds a mechanistically relevant dimension beyond anti-angiogenesis that distinguishes it from sunitinib in the SDH-deficient GIST context
- target_gene_symbols expanded: ["KDR", "KIT"] → ["KDR", "KIT", "FGFR1", "FGFR2"]
- pathway_slugs expanded: ["vegf-signaling", "mtor-pi3k-akt"] → ["vegf-signaling", "mtor-pi3k-akt", "fgfr-signaling"]
- clinical_trial_ids: [] → ["NCT01271712"]
- evidence_score bump 58→60: +2 for GRID Phase 3 registration trial citation and FGFR1/2 SDH-specific mechanistic rationale formally documented

Evidence_score rationale (capivasertib 32): strong mechanistic chain (direct literature anchor in SDH-deficient PPGL by Jochmanová 2013) + FDA-approved compound with established tolerability + addresses a documented limitation of an existing engine drug. Does not exceed 35 because no preclinical data test capivasertib in any SDH-deficient model, no SDH-stratified clinical signal exists, and the AKT reactivation argument is pharmacological inference from general rapalog biology rather than SDH-specific experimental measurement.

**Previously logged directions NOT re-evaluated:** MTHFD2/one-carbon (no SDH-specific data, no clinical-stage inhibitors); Complex I definitively ruled out (Sokolov preprint PMID 42239110, 2026-07-30).

**Files changed:** `src/data/seed/drugs.ts` (capivasertib new entry; regorafenib MoA + target_gene_symbols + pathway_slugs + clinical_trial_ids + evidence_score 58→60), `src/data/seed/targets.ts` (AKT1 new entry), `src/data/seed/sdh-biology.ts` (mTOR/PI3K/AKT table row updated; Mechanism 27 added), `tracker.md` (3 new rejected rows), `MORNING_LOG.md` (this entry).
**PR:** [Morning] Add capivasertib (AKT inhibitor) + regorafenib MoA upgrade

---

## 2026-08-17 — CHK1/Replication Stress Checkpoint Synthetic Lethality — Prexasertib

**Paper scan:** 6 PubMed searches (SDH-deficient GIST, PPGL/pheochromocytoma, SDH-deficient RCC, succinate oncometabolite, BRCAness/SDH, ATRX/ALT PPGL). All returned PMIDs already logged in tracker.md. 0 new papers added. This is the 5th+ consecutive run with no new papers from the standard SDH literature.

**Direction:** CHK1/Replication Stress Checkpoint synthetic lethality — prexasertib (LY2606368). New pathway `chk1-brcas-replication-checkpoint` (display_order 23), new target CHEK1 (synthetic_lethal), new drug prexasertib (evidence_score 28, theoretical, tumor_type_applicability ["all"]).

**Rationale for selection:** The prior log explicitly exhausts all known directions through 2026-08-16. The only remaining unexplored branch of the established BRCAness mechanism (Sulkowski Nat Genet 2018 PMID 30013182; Nature 2020 PMID 32494005) is the downstream CHK1 checkpoint effector. Mechanism 13 (ceralasertib, ATR inhibitor) targets ATR upstream of CHK1 but was narrowed to ATRX-null/ALT-positive tumors. CHK1 inhibition addresses the BRCAness replication stress vulnerability in ALL HR-deficient SDH-deficient tumors regardless of ATRX status — a distinct, broader, and non-redundant strategy. Passes HARD RELEVANCE GATE via Sulkowski 2018/2020.

**Mechanistic chain:** SDH loss → succinate → KDM4A/KDM4B inhibition → H3K9me3 persistence at DSBs → impaired TIP60/ATM → HR deficiency (BRCAness) → stalled replication forks → acute CHK1 dependency for fork stabilization (CDC25A inactivation → CDK2 suppression; CDC25C inactivation → CDK1 suppression; dormant origin firing control). CHK1 inhibition causes replication catastrophe and mitotic catastrophe selectively in BRCAness-positive cells.

**Literature anchors:**
- PMID 30013182 (Sulkowski Nat Genet 2018): succinate → KDM4A/B → H3K9me3 → impaired TIP60/ATM → BRCAness. Core mechanistic anchor.
- PMID 32494005 (Sulkowski Nature 2020): BRCAness in SDH-deficient tumors confirmed; PARP inhibitor synthetic lethality.
- PMID 34131002 (Do et al. Clin Cancer Res 2021): prexasertib + olaparib Phase 1, BRCA-mutant HGSOC, 4/18 PRs, pharmacodynamic CHK1 target engagement confirmed.
- NCT02873975 (Phase 2; Dana-Farber/Lilly; completed): prexasertib in solid tumors with 'Replicative Stress or HR Repair Deficiency'.
- NCT03414047 (Phase 2; Lilly; completed): prexasertib in platinum-resistant ovarian cancer.

**CHK1 vs ATR distinction (Mechanism 13):** Ceralasertib (ATR) selectivity for ATRX-null/ALT tumors reflects ALT-specific ATR functions (telomere maintenance). CHK1 is the downstream BRCAness effector — applies to all HR-deficient SDH tumors regardless of ATRX status. Non-redundant.

**PMID disambiguation:** PMID 30504279 searched as 'Karzai prexasertib Phase 2 2019' but PubMed returned a Claudin-1 stroke paper (mismatch). PMID 30504279 is NOT used. Clinical anchors are PMID 34131002 (Do et al., verified) and NCT numbers (ClinicalTrials.gov MCP verified).

**Files changed:** `src/data/seed/pathways.ts` (chk1-brcas-replication-checkpoint, display_order 23), `src/data/seed/targets.ts` (CHEK1 synthetic_lethal new entry), `src/data/seed/drugs.ts` (prexasertib new entry, evidence_score 28, tumor_type_applicability ["all"]), `src/data/seed/sdh-biology.ts` (Mechanism 28 added), `src/lib/scoring/constants.ts` (chk1-brcas-replication-checkpoint color entry), `MORNING_LOG.md` (this entry).
**PR:** [Morning] Add prexasertib (CHK1 inhibitor) — BRCAness replication checkpoint synthetic lethality

---

## 2026-08-19 — TERT Telomerase Reactivation / Imetelstat

**Direction chosen:** TERT promoter reactivation in SDHB-metastatic PPGL → imetelstat (Rytelo, FDA-approved telomerase inhibitor).

**Paper scan (Step 1):** Six PubMed queries covering SDH-deficient tumors, PPGL genomics, SDH-GIST new trials, epigenetic mechanisms, and BRCAness/repair in the past 3 months. One new PMID found: 42611605 (pediatric SDHA-GIST with retained SDHB IHC staining — a diagnostic false-negative case report). Rejected: the core observation (SDHB IHC false-negative in a subset of SDH-deficient GIST) is already captured by PMID 41985045 (57 tumors, 49% false-negative rate, 4 morphological patterns — a systematic study with 25× greater sample size). No new mechanistic or therapeutic advance.

**Directions ruled out before selecting TERT:**
- MTHFD2/one-carbon folate: no SDH-specific data; no clinical-stage inhibitors. Ruled out previously; still no evidence to reverse.
- Complex I (mitochondrial): definitively ruled out by Sokolov preprint (prior log).
- CD47/macrophage phagocytosis: HIF-1α → CD47 transcriptional link uncertain; magrolimab development halted. Insufficient citation basis.
- DNMT3B-selective inhibitors: same mechanism angle as existing decitabine/azacitidine entries.
- Erdafitinib FGFR upgrade: same mechanism as regorafenib upgrade done 2026-08-16.

**TERT direction rationale:**
PMID 42155081 (Batini et al., Arch Endocrinol Metab 2026) — already in papers.ts — directly quantifies TERT promoter C228T in 16.7% of SDHB-germline-positive metastatic PPGL, co-occurring exclusively with SDHB pathogenic variants. These tumors use the telomerase-DEPENDENT telomere maintenance pathway, mechanistically distinct from ATRX-null/ALT tumors (Mechanism 13) which use recombination-based, telomerase-INDEPENDENT ALT. Imetelstat (Rytelo; Geron) is a 13-mer thio-phosphoramidate oligonucleotide that competitively binds the TERT active-site RNA template region. FDA-approved June 2024 for lower-risk MDS (IMerge Phase 3, NCT02598661). Established clinical safety profile. No SDH-specific data exist, but the genetic epidemiology (PMID 42155081) and mechanism of action (direct TERT catalytic-site antagonism) are both solid. Evidence_score 25 (theoretical), tumor_type_applicability ["ppgl"] only. Non-redundant with all existing engine entries.

**Color allocation:** All standard Tailwind -100 pathway badge colors are exhausted. New pathway uses `bg-indigo-200` (a distinct shade from `bg-indigo-100` already used for neddylation).

**Candidate directions still unexplored:** (1) MTHFD2 / one-carbon folate metabolism (no SDH-specific data, no clinical-stage inhibitors); Complex I direction ruled out definitively.

**Files changed:** `src/data/seed/pathways.ts` (tert-telomerase-reactivation, display_order 24), `src/data/seed/targets.ts` (TERT direct new entry), `src/data/seed/drugs.ts` (imetelstat new entry, evidence_score 25, tumor_type_applicability ["ppgl"]), `src/data/seed/sdh-biology.ts` (Mechanism 29 added), `src/lib/scoring/constants.ts` (tert-telomerase-reactivation color entry), `tracker.md` (PMID 42611605 rejected row), `MORNING_LOG.md` (this entry).
**PR:** [Morning] Add imetelstat (TERT inhibitor) — telomerase reactivation in SDHB-metastatic PPGL

---

## 2026-08-20 — MIBG/NET-Targeted Radionuclide Therapy — Iobenguane I-131 (Azedra) + [²¹¹At]MABG

**Paper scan:** 6 PubMed searches (SDH-deficient GIST, PPGL/pheochromocytoma, succinate oncometabolite, SDH BRCAness, tazemetostat EZH2 SDH, succinate immune evasion SDH tumor). 1 new PMID evaluated: 42611605 (pediatric SDHA-GIST case with retained SDHB IHC — single case report, no new mechanism, IHC false-negative pattern already covered by PMID 41985045). 0 papers added. Also added PMID 41404848 (Rapizzi et al., Endocr Relat Cancer Jan 2026, pro-tumorigenic vitamin C in SDHB-PPGL zebrafish model) to papers.ts — this paper was already cited in the Ascorbic Acid drug entry since 2026-07-16 but was missing from papers.ts (outside the 3-month scan window at time of evaluation).

**Direction:** MIBG/NET-targeted radionuclide therapy — new pathway `mibg-net-targeted-radiation` (display_order 24), new target SLC6A2, two new drug entries: Iobenguane I-131/Azedra (evidence_score 42, established, FDA-approved) and [²¹¹At]MABG (evidence_score 26, preclinical, Phase 1), new Mechanism 29 in sdh-biology.ts.

**Rationale for selection:** The tracker flagged PMID 42490294 ([²¹¹At]MABG Phase 1, Okamoto et al. CCR 2026) as "relevant to BRCAness × high-LET synthetic lethality direction" when the paper was added to papers.ts on 2026-08-10, explicitly deferring implementation. Azedra (iobenguane I-131) is FDA-approved specifically for iobenguane-avid PPGL — the most directly applicable existing approved therapy missing from the engine. The MORNING_LOG shows Panobinostat was already upgraded (some prior run) to note its NET/SLC6A2 upregulation and MIBG combination rationale (Martiniova et al. PMID 21098082), creating a natural bridge to the MIBG direction. Both DNA repair angles that were previously unexplored (DNA-PKcs/peposertib) were evaluated and rejected: peposertib is primarily a radiosensitizer and the standalone BRCAness synthetic lethality case for DNA-PKcs is weaker than POLQ (Ceccaldi 2015) or CHK1 (replication checkpoint biology); the key synthetic lethality papers could not be verified via PubMed. The MIBG direction passes the HARD RELEVANCE GATE via NET-selective delivery to chromaffin-lineage SDH-deficient PPGL plus BRCAness-derived radiosensitization.

**Mechanistic chain:**
- **Primary selectivity:** SDH-deficient PPGL (chromaffin lineage) → NET/SLC6A2 expression → selective MIBG intracellular uptake → intracellular ionizing radiation → DSBs
- **SDH-specific radiosensitization (BRCAness):** SDH loss → succinate → KDM4A/KDM4B inhibition → H3K9me3 at DSBs → impaired TIP60/ATM → HR deficiency [Sulkowski PMID 30013182/32494005] → impaired repair of radiation-induced DSBs → amplified tumor-selective cytotoxicity
- **Alpha-particle advantage:** [²¹¹At]MABG high-LET (80 keV/μm) creates complex clustered DSBs specifically requiring HR for faithful repair → BRCAness × high-LET synergy more pronounced than with ¹³¹I-MIBG beta particles

**Literature anchors:**
- PMID 42490294 (Okamoto et al., CCR 2026): [²¹¹At]MABG Phase 1 — 10 MIBG-avid PCC/PGL; 2.1 MBq/kg; no DLTs; 1 PR + 7 SD. Already in papers.ts.
- PMID 21098082 (Martiniova et al., Endocr Relat Cancer 2011): panobinostat upregulates NET/SLC6A2 and MIBG uptake in PPGL cells at nanomolar concentrations. Cited in Panobinostat drug entry.
- PMID 30013182 / PMID 32494005 (Sulkowski Nat Genet 2018 / Nature 2020): BRCAness in SDH-deficient tumors. Already in engine.
- Azedra MACS0010 Phase 2 registration trial: FDA approval July 2018; ORR ~25%, CBR ~92% (cited by name in drug entry; PMID not confirmed via PubMed lookup).

**Mechanistic distinction from ¹⁷⁷Lu-DOTATATE (Mechanism 19):** SSTR2 vs NET targeting; DOTATATE-avid vs MIBG-avid patient eligibility (not mutually exclusive but not identical); beta particle (¹⁷⁷Lu) vs alpha particle (²¹¹At) radiation type; different BRCAness × radiation LET synergy potential.

**Scope caveat:** Applies strictly to MIBG-avid PPGL. Not applicable to SDH-deficient GIST (mesenchymal, no NET expression) or SDH-deficient RCC.

**Files changed:** `src/data/seed/pathways.ts` (mibg-net-targeted-radiation, display_order 24), `src/data/seed/targets.ts` (SLC6A2, direct), `src/data/seed/drugs.ts` (Iobenguane I-131/Azedra evidence_score 42 established; [²¹¹At]MABG evidence_score 26 preclinical; both tumor_type_applicability ["ppgl"]), `src/data/seed/sdh-biology.ts` (Mechanism 29 added), `src/lib/scoring/constants.ts` (mibg-net-targeted-radiation color entry), `src/data/papers.ts` (PMID 41404848 added — vitamin C safety signal paper, cited in drug entry since 2026-07-16 but missing from papers.ts), `tracker.md` (PMID 42611605 rejected row), `MORNING_LOG.md` (this entry).
**PR:** [Morning] Add MIBG/NET-targeted radionuclide therapy pathway — Azedra + [²¹¹At]MABG

---

## 2026-08-21 — NHEJ / DNA-PKcs Synthetic Lethality — Peposertib

**Paper scan:** 9 PubMed searches (SDH-deficient GIST, PPGL/pheochromocytoma therapy, succinate dehydrogenase cancer 2026, SDH BRCAness DNA repair, DNA-PK NHEJ BRCAness, paraganglioma treatment, SDH-deficient tumor drug, SDHB SDHC SDHD tumor, SDH replication stress 2026). 1 new PMID found: PMID 41751859 (Altered Expression of Mitochondrial Succinate Dehydrogenase Subunit D Influences Breast Cancer Progression; DOI 10.3390/ijms27041722; February 2026). Rejected: breast cancer off-panel, SDHD upregulated (not deficient), outside 3-month window. 0 new papers added to papers.ts.

**Direction:** NHEJ / DNA-PKcs synthetic lethality — peposertib (M3814). New pathway `nhej-dnapk-backup-repair` (display_order 24), new target PRKDC (synthetic_lethal), new drug peposertib (evidence_score 28, theoretical, tumor_type_applicability ["all"]).

**Rationale for selection:** All established BRCAness-targeted directions in this engine attack the synthetic lethality of SDH-deficient HR deficiency through: SSB→DSB conversion (PARP inhibitors, Mechanism 14), alt-EJ/TMEJ backup pathway (POLQ inhibitor ART558, Mechanism 18), replication checkpoint effector (CHK1/prexasertib, Mechanism 28), or upstream replication stress ATR kinase (ceralasertib, Mechanism 13). None targets canonical NHEJ — the dominant and often sole DSB repair pathway in BRCAness-positive HR-deficient cells. DNA-PKcs (PRKDC) is the essential kinase for canonical NHEJ execution; peposertib is an oral, clinical-stage, selective DNA-PKcs inhibitor (Phase 1/2 NCT02516813; NCT04750954). This is a fourth orthogonal attack on BRCAness in SDH-deficient tumors. Passes HARD RELEVANCE GATE via Sulkowski 2018/2020.

**Mechanistic chain:** SDH loss → succinate → KDM4A/KDM4B inhibition → H3K9me3 persistence at DSBs → impaired TIP60/ATM → HR deficiency (BRCAness) → NHEJ becomes dominant DSB repair pathway → acute DNA-PKcs dependency → peposertib inhibits DNA-PKcs autophosphorylation at Thr2609 → NHEJ stalls at synapsis step → unrepaired DSBs accumulate → selective lethality in BRCAness-positive cells (HR-proficient cells retain alternative HR route and are substantially less sensitive).

**Compelling sub-rationale for SDH-deficient PPGL + PRRT combination:**
SDH-deficient PPGL are universally SSTR2-high (DOTATATE-PET confirmed). PRRT (Lu-177 DOTATATE) delivers targeted radiation → DSBs in SSTR2+ tumor cells. BRCAness impairs HR of those DSBs. Peposertib blocks NHEJ of those DSBs. Triple DSB repair failure in SSTR2-high BRCAness-positive SDH-deficient PPGL. This tri-mechanic rationale is exactly what NCT04750954 (NCI Phase 1b, peposertib + Lu-177 DOTATATE in SSTR2+ GEP-NETs) tests clinically — the closest existing trial to SDH-deficient PPGL.

**Distinction from prior BRCAness entries:**
- Mechanism 14 (PARP): SSB trap → SSB→DSB collapse → impaired HR → death
- Mechanism 18 (POLQ/ART558): alt-EJ/TMEJ backup (not canonical NHEJ)
- Mechanism 28 (CHK1/prexasertib): replication checkpoint effector, not a DSB repair pathway
- Mechanism 29 (peposertib): canonical NHEJ pathway itself — the only entry targeting a canonical DSB repair route

**Literature anchors:**
- PMID 30013182 (Sulkowski Nat Genet 2018): succinate → KDM4A/B → H3K9me3 → impaired TIP60/ATM → BRCAness. Core mechanistic anchor.
- PMID 32494005 (Sulkowski Nature 2020): BRCAness confirmed in SDH-deficient tumors; PARP inhibitor synthetic lethality.
- PMID 32265313 (Zenke FT et al. Mol Cancer Ther 2020): peposertib radiosensitizes human tumor xenografts; single-agent and combination activity.
- NCT02516813 (Phase 1a/1b; peposertib + RT + cisplatin; advanced solid tumors; n=52; Merck KGaA; completed).
- NCT04750954 (Phase 1b; peposertib + Lu-177 DOTATATE; SSTR2+ GEP-NETs; NCI; open): closest existing trial to PPGL rationale.

**Previously logged directions NOT re-evaluated:** MTHFD2/one-carbon (no SDH-specific data, no clinical-stage inhibitors); Complex I definitively ruled out (Sokolov preprint PMID 42239110, 2026-07-30).

**Files changed:** `src/data/seed/pathways.ts` (nhej-dnapk-backup-repair, display_order 24), `src/data/seed/targets.ts` (PRKDC synthetic_lethal new entry), `src/data/seed/drugs.ts` (peposertib new entry, evidence_score 28, tumor_type_applicability ["all"]), `src/data/seed/sdh-biology.ts` (Mechanism 29 added; druggable targets table row added), `src/lib/scoring/constants.ts` (nhej-dnapk-backup-repair color entry), `tracker.md` (PMID 41751859 rejected row), `MORNING_LOG.md` (this entry).
**PR:** [Morning] Add peposertib (DNA-PKcs/NHEJ inhibitor) — BRCAness backup repair synthetic lethality

---

## 2026-08-22 — cGAS-STING Innate Immune Activation — Ulevostinag

**Paper scan:** 7 PubMed searches (SDH-deficient GIST, PPGL/pheochromocytoma, SDH-deficient RCC, succinate oncometabolite, BRCAness/SDH, cGAS-STING/genome instability, STING agonist clinical trials). 1 new PMID identified within 3-month window:
- PMID 42611605 (Tanimura et al., J Pediatr Hematol Oncol 2026): Pediatric GIST with SDHA truncation (c.1401T>A, p.Cys467Ter) and false-negative SDHB IHC. **Rejected:** case report confirming the already-documented SDHB IHC false-negative phenomenon (cf. PMID 41985045 already in papers.ts); no new mechanistic or treatment advance. Added to tracker.md.

0 papers added to papers.ts.

**Direction:** cGAS-STING innate immune activation — ulevostinag (MK-1454). New pathway `cgas-sting-innate-immune` (display_order 24), new target STING1/TMEM173 (downstream), new drug ulevostinag (evidence_score 25, theoretical, tumor_type_applicability ["all"]).

**Rationale for selection:** The BRCAness theme (Mechanisms 14, 28 and the ATR/ATRX threads) has been exploited at the DNA-repair level (PARP inhibitors, CHK1, ATR, POLQ). An unexplored downstream consequence of BRCAness-driven chromosomal instability is innate immune activation via the cGAS-STING pathway. The chain is: BRCAness → chromosomal mis-segregation → micronuclei → cGAS activation → STING → IFN-β. STING agonists amplify this directly. This is a novel direction — immunological rather than DNA-repair — with a clean, citation-backed mechanistic chain. Passes HARD RELEVANCE GATE via Sulkowski 2018/2020 (BRCAness) + Mackenzie 2017 (cGAS/micronuclei).

**Mechanistic chain:** SDH loss → succinate → KDM4A/KDM4B inhibition → H3K9me3 at DSBs → impaired TIP60/ATM → HR deficiency (BRCAness) [Sulkowski PMID 30013182, 32494005] → unrepaired DSBs → chromosomal mis-segregation → micronuclei formation → micronuclear envelope rupture → cytoplasmic chromatin → cGAS activation → 2′3′-cGAMP → STING → TBK1 → IRF3 → IFN-β / ISG expression [Mackenzie PMID 28738408]. STING agonists (ulevostinag) bypass cGAS and activate STING directly.

**Mechanistic caveat noted:** Liu et al. Nature 2018 (PMID 30356214) showed nuclear cGAS suppresses HR via PARP1 interaction (pro-tumorigenic). This is a distinct nuclear pool separate from cytoplasmic/micronuclear cGAS; STING agonists act downstream of and independently from nuclear cGAS — the caveat does not affect ulevostinag rationale.

**Literature anchors:**
- PMID 30013182 (Sulkowski Nat Genet 2018): BRCAness from SDH loss; KDM4A/KDM4B mechanism. Core mechanistic anchor.
- PMID 32494005 (Sulkowski Nature 2020): BRCAness confirmed; PARP inhibitor synthetic lethality.
- PMID 28738408 (Mackenzie et al. Nature 2017): cGAS surveillance of micronuclei links genome instability to innate immunity. DOI 10.1038/nature23449. Verified. PMID originally guessed as 28783727 (wrong — that is a Lazaridis et al. ancient DNA paper); correct PMID confirmed via PubMed title search.
- PMID 30356214 (Liu et al. Nature 2018): Nuclear cGAS suppresses HR; pro-tumorigenic. Context/caveat citation only.
- PMID 40499147 (Harrington et al. Clin Cancer Res 2025): Ulevostinag (MK-1454) Phase I/II (NCT03010176); STING activation confirmed (IP-10, IFNγ, IL-6 elevation); 540 µg RP2D; 4/8 CR/PR with pembrolizumab in HNSCC expansion.

**PMID disambiguation:** PMID 28783727 searched as Mackenzie cGAS/micronuclei paper but verified via PubMed as Lazaridis et al. Nature 2017 (ancient Greek genome paper). Correct PMID 28738408 found by full-title PubMed search and confirmed by get_article_metadata.

**Evidence_score rationale (ulevostinag 25):** Multi-step chain (BRCAness → chromosomal instability → micronuclei → cGAS → STING → IFN-β) adds an additional hop relative to direct BRCAness-targeted drugs (PARP inhibitors, prexasertib). Clinical STING activation confirmed pharmacodynamically but low ORR in monotherapy arm (no PRs in 22 patients). Scored below prexasertib (28) to reflect the longer indirect chain and the administration limitation (intratumoral). Not scored below 20 because the cGAS-STING mechanistic link from BRCAness-driven chromosomal instability is a proven biological phenomenon (Mackenzie 2017), not a speculative extension.

**Files changed:** `src/data/seed/pathways.ts` (cgas-sting-innate-immune, display_order 24), `src/data/seed/targets.ts` (STING1 downstream new entry), `src/data/seed/drugs.ts` (ulevostinag new entry, evidence_score 25, tumor_type_applicability ["all"]), `src/data/seed/sdh-biology.ts` (Mechanism 29 added), `src/lib/scoring/constants.ts` (cgas-sting-innate-immune color sky-100/800 entry), `tracker.md` (1 new rejected row: PMID 42611605), `MORNING_LOG.md` (this entry).
**PR:** [Morning] Add ulevostinag (STING agonist) — cGAS-STING innate immune activation via BRCAness-driven chromosomal instability

---

## Run 2026-08-23: DCA MoA upgrade — mechanistic counterproductivity in SDH-deficient tumors

**Paper scan:** 3 new PMIDs surfaced (42611605, 41555429, 41697759); all rejected. 0 papers added to `papers.ts`. The rare-disease literature stream has been dry for 7+ consecutive runs.

**Part B — DCA mechanism-of-action upgrade:**

**Rationale:** The DCA entry was the last poorly-documented stub in `drugs.ts`: 2-sentence mechanism, zero citations, `evidence_score: 35`, `status: "preclinical"` — with no acknowledgment of a mechanistic safety concern. This is the highest-priority remaining documentation gap.

**Mechanistic analysis:**

DCA inhibits PDK1-4 → reactivates pyruvate dehydrogenase (PDH) → diverts pyruvate from lactate toward acetyl-CoA → increased TCA flux. In SDH-INTACT glycolytic (Warburg) cancers this restores OXPHOS, elevates ROS, and reduces HIF-1α — the intended effect (Michelakis et al., Sci Transl Med 2010, PMID 20463368).

In **SDH-DEFICIENT tumors** the logic inverts:
1. The TCA cycle is blocked at SDH. DCA-driven flux (citrate → isocitrate → α-KG → succinate) accumulates succinate at the blocked step — strengthening competitive PHD1-3 inhibition and amplifying HIF-1α/HIF-2α pseudohypoxic signaling. The opposite of the intended effect.
2. Succinate amplification worsens CIMP epigenetic silencing (Killian et al., Cancer Cell 2013, PMID 23707781; Letouzé et al., Cancer Cell 2013, PMID 23550148).
3. SDH-deficient cells adaptively suppress Complex I to limit pyruvate oxidation pressure (Sokolov et al., bioRxiv 2025, PMID 42239110); DCA overrides this protective adaptation.
4. No direct evidence of DCA efficacy in any SDH-deficient tumor model exists; all DCA-cancer data originate from SDH-intact glycolytic cancers.

**Changes made:** `evidence_score` 35 → 22; `status` "preclinical" → "theoretical"; `mechanism_of_action` rewritten with full mechanistic chain, counterproductivity reasoning, and safety note. Citation anchors: PMID 20463368 (DCA mechanism), PMID 42239110 (Complex I adaptation), PMID 23707781, PMID 23550148 (CIMP).

**Directions still unexplored:** MTHFD2/one-carbon (insufficient SDH-specific data).

**Files changed:** `src/data/seed/drugs.ts` (DCA entry: MoA rewritten, evidence_score 35→22, status preclinical→theoretical), `tracker.md` (3 new rejected PMIDs: 42611605, 41555429, 41697759), `MORNING_LOG.md` (this entry).
**PR:** [Morning] DCA MoA upgrade — mechanistic counterproductivity in SDH-deficient tumors

---

## 2026-08-24 — HIF-Driven CXCR4/CXCL12 Chemokine Metastasis Axis — Plerixafor

**Paper scan:** 10+ PubMed searches (SDH-deficient GIST 2026, paraganglioma pheochromocytoma SDH 2026, SDH-deficient RCC 2026, succinate oncometabolite 2026, SDHA SDHB SDHC SDHD tumor 2026, HIF pseudohypoxia SDH 2026, SDH-deficient cancer treatment 2026, pituitary adenoma SDH 2026, GIST SDH imatinib resistance 2026, paraganglioma metastatic treatment 2026). Only PMID 42597314 (DOI: 10.3389/fcvm.2026.1861073, Frontiers in Cardiovascular Medicine) identified as new; rejected as cardiovascular journal with no SDH-deficient cancer content. 0 papers added. All other returns were already in tracker.md.

**Direction:** HIF-driven CXCR4/CXCL12 chemokine metastasis axis — plerixafor (AMD3100/Mozobil). New pathway `hif-cxcr4-chemokine-metastasis` (display_order 24), new target CXCR4/P61073 (downstream), new drug plerixafor (evidence_score 20, theoretical, tumor_type_applicability ["ppgl"]).

**Rationale for selection:** After exhausting all 28 prior directions logged through 2026-08-17, the HIF-driven CXCR4/CXCL12 axis represents a genuinely unexplored branch of the established pseudohypoxia pathway. All prior pseudohypoxia branches (VEGF/angiogenesis, MET/AXL RTKs, mTOR/PI3K/AKT, CDK4/6 via CDKN2A-CIMP, PD-L1 immune evasion, HIF-2α/belzutifan) are implemented. CXCR4 is a distinct HIF-1α transcriptional target mediating metastatic dissemination — not covered by any prior entry. Clinically motivated by the uniquely high metastatic risk of SDHB-deficient PPGL (30–70%). Passes HARD RELEVANCE GATE via pseudohypoxia/HIF-1α pathway.

**Mechanistic chain:** SDH loss → succinate → PHD inhibition → HIF-1α stabilization → HRE-driven CXCR4 transcription → CXCL12 gradient-directed chemotaxis → metastatic homing to bone marrow, lymph nodes, liver → CXCR4 signaling via PI3K/AKT + MAPK/ERK + JAK/STAT3 at metastatic sites → tumor cell survival and proliferation in niche.

**Literature anchor:**
- PMID 13679920 (Staller et al., Nature 2003): VHL-deficient RCC — HIF-1α directly transcriptionally activates CXCR4; VHL restoration suppresses CXCR4 and CXCL12-directed chemotaxis. VHL/HIF and SDH/HIF are identical PHD-inhibition/HIF-1α stabilization mechanisms. This is the foundational anchor; direct SDH-specific CXCR4 experimental data do not exist.
- NCT00186966: plerixafor FDA approval trial (stem cell mobilization); establishes clinical-grade pharmacology and tolerability.

**Evidence score rationale:** 20 (theoretical, lower range). Mechanistic extrapolation is logically tight (shared pseudohypoxic HIF-1α mechanism between VHL and SDH loss), but zero SDH-specific experimental data exist. Score deliberately conservative relative to other theoretical entries to reflect the further-removed extrapolation.

**tumor_type_applicability rationale:** ["ppgl"] only — SDHB-deficient PGL/PCC has uniquely high metastatic rate (30–70%), making CXCR4-driven metastatic dissemination clinically relevant. SDH-deficient GIST and RCC have lower metastatic burden and weaker clinical motivation for this specific strategy.

**What was ruled out during direction search:** MTHFD2/one-carbon metabolism (no SDH-specific data, no clinical-stage inhibitors — do not add). All other previously logged directions remain banned.

**Files changed:** `src/data/seed/pathways.ts` (hif-cxcr4-chemokine-metastasis, display_order 24), `src/data/seed/targets.ts` (CXCR4/P61073 downstream new entry), `src/data/seed/drugs.ts` (plerixafor new entry, evidence_score 20, tumor_type_applicability ["ppgl"]), `src/data/seed/sdh-biology.ts` (Mechanism 29 added with druggable targets table), `src/lib/scoring/constants.ts` (hif-cxcr4-chemokine-metastasis color entry cyan), `tracker.md` (PMID 42597314 rejected row), `MORNING_LOG.md` (this entry).
**PR:** [Morning] Add plerixafor (CXCR4 inhibitor) — HIF-driven chemokine metastasis axis

---

## 2026-08-30

**Direction:** drug-pool
**Angle:** Y-90 SIRT liver-directed radioembolization for SDH-deficient GIST (BRCAness × radiation)

**PubMed scan:** 8 queries over 2026-05-30 → 2026-08-30 (SDH GIST, PPGL, RCC, pituitary, metabolism, synthetic lethality, radioembolization angles). Found 1 new PMID not previously seen.

**Papers added (1):**
- PMID 42650014 — Berman et al., *Cancers (Basel)* 2026: "Selective Internal Radiation Therapy (SIRT) for SDH-Deficient GIST Demonstrates Encouraging Durable Response Rates: An International Multicenter Case Series." International multicenter retrospective series (n=12; US, Germany, UK). 66.7% ORR (1 CR, 7 PR), 100% DCR, median OS not reached at 32-month follow-up, 1 grade ≥3 AE. Topic: Treatment & Trials.

**Papers rejected (0):** All other returned PMIDs already in tracker.md.

**Drug added:**
- **Yttrium-90 SIRT** (SIR-Spheres / TheraSphere; liver-directed radioembolization). evidence_score 43, status: clinical_trial, tumor_type_applicability: ["gist"]. Mechanistic rationale: BRCAness phenotype (Sulkowski Nat Genet 2018 PMID 30013182; Nature 2020 PMID 32494005) → HR deficiency → SDH-deficient GIST cells cannot repair Y-90-induced DSBs via HR → disproportionate radiosensitivity. Anatomic rationale: SDH-deficient GIST characteristically metastasizes to the liver (not lungs or peritoneum), unlike KIT/PDGFRA-mutant GIST; and imatinib/sunitinib are ineffective in SDH-deficient tumors, elevating the clinical need for liver-directed alternatives. pathway_slugs: ["sdh-driven-hrd"]; target_gene_symbols: ["KDM4B"]. Clinical anchor: PMID 42650014 (66.7% ORR vs. typical 20–40% in other GIST subtypes). Distinction from prior radioligand entries: 177Lu-DOTATATE and [212Pb]VMT-α-NET require SSTR2 expression (present in PPGL, absent in GIST); Y-90 SIRT is SSTR2-independent and GIST-specific, entirely non-redundant.

**Biology added:**
- Mechanism 29 in sdh-biology.ts: Y-90 SIRT BRCAness × radiation synthetic lethality in SDH-deficient GIST liver metastases (KDM4B → H3K9me3 → HR deficiency → DSB repair failure → mitotic catastrophe). Cites Sulkowski PMID 30013182/32494005 and Berman PMID 42650014.

**Remaining unexplored directions:** MTHFD2/one-carbon (no SDH-specific data, no clinical-stage inhibitors — remains unactionable).

**Files changed:** `src/data/papers.ts` (PMID 42650014 new entry), `src/data/seed/drugs.ts` (Y-90 SIRT new entry), `src/data/seed/sdh-biology.ts` (Mechanism 29 added), `tracker.md` (PMID 42650014 row), `MORNING_LOG.md` (this entry).
**PR:** [Morning] Add Y-90 SIRT for SDH-deficient GIST liver metastases + SIRT case series paper
