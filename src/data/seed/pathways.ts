import { Pathway } from "@/types/domain";

export const SEED_PATHWAYS: Omit<Pathway, "id">[] = [
  {
    name: "Pseudohypoxia / HIF Pathway",
    slug: "hif-pseudohypoxia",
    description:
      "Succinate accumulation inhibits PHD enzymes, stabilizing HIF-1α and HIF-2α regardless of oxygen levels. This drives angiogenesis (VEGF), metabolic reprogramming (glycolysis shift), and growth factor signaling.",
    upstream_event: "Succinate inhibits PHD1/2/3 (α-KG-dependent dioxygenases)",
    downstream_effects: [
      "HIF-1α/2α stabilization",
      "VEGF upregulation",
      "GLUT1/3 upregulation",
      "Glycolytic enzyme induction",
      "EPO production",
    ],
    druggable: true,
    display_order: 1,
  },
  {
    name: "Epigenetic Dysregulation",
    slug: "epigenetic-dysregulation",
    description:
      "Succinate inhibits TET family DNA demethylases and Jumonji-domain histone demethylases, causing global DNA and histone hypermethylation. This silences tumor suppressors and blocks differentiation.",
    upstream_event:
      "Succinate inhibits TET1/2/3 and KDM histone demethylases",
    downstream_effects: [
      "DNA hypermethylation (CIMP phenotype)",
      "5-hydroxymethylcytosine loss",
      "Tumor suppressor silencing",
      "Histone hypermethylation",
      "Differentiation block",
    ],
    druggable: true,
    display_order: 2,
  },
  {
    name: "VEGF Signaling",
    slug: "vegf-signaling",
    description:
      "Downstream of HIF activation, VEGF/VEGFR2 signaling drives tumor angiogenesis — the formation of new blood vessels that supply the tumor with oxygen and nutrients.",
    upstream_event: "HIF-mediated VEGFA transcriptional activation",
    downstream_effects: [
      "Tumor angiogenesis",
      "Vascular permeability",
      "Endothelial cell proliferation",
      "Tumor blood supply",
    ],
    druggable: true,
    display_order: 3,
  },
  {
    name: "mTOR / PI3K / AKT",
    slug: "mtor-pi3k-akt",
    description:
      "Metabolic reprogramming from SDH loss activates the PI3K/AKT/mTOR signaling axis, promoting cell growth, proliferation, and survival. Multiple upstream inputs converge on mTOR.",
    upstream_event:
      "HIF-mediated growth factor signaling + metabolic stress + AMPK dysregulation",
    downstream_effects: [
      "Cell growth and proliferation",
      "Protein synthesis",
      "Metabolic reprogramming",
      "Survival signaling",
    ],
    druggable: true,
    display_order: 4,
  },
  {
    name: "Glutamine Dependency",
    slug: "glutamine-dependency",
    description:
      "With the TCA cycle disrupted at Complex II, SDH-deficient cells become addicted to glutamine for anaplerosis and lipid synthesis via reductive carboxylation.",
    upstream_event:
      "TCA cycle disruption at succinate → fumarate step",
    downstream_effects: [
      "Glutaminase (GLS) upregulation",
      "Reductive carboxylation for lipid synthesis",
      "α-KG production via glutaminolysis",
      "Metabolic vulnerability",
    ],
    druggable: true,
    display_order: 5,
  },
  {
    name: "Oxidative Stress / ROS",
    slug: "oxidative-stress-ros",
    description:
      "Complex II dysfunction causes electron leak in the electron transport chain, increasing reactive oxygen species (ROS). This drives DNA damage but also creates a therapeutic vulnerability.",
    upstream_event:
      "Impaired electron flow through Complex II → electron leak",
    downstream_effects: [
      "Increased ROS production",
      "Oxidative DNA damage",
      "Genomic instability",
      "PARP activation for DNA repair",
      "Therapeutic vulnerability to further ROS stress",
    ],
    druggable: true,
    display_order: 6,
  },
  {
    name: "Autophagy / Survival",
    slug: "autophagy-survival",
    description:
      "Metabolic stress from SDH loss triggers autophagy as a survival mechanism. Cells rely on autophagy to maintain metabolic homeostasis under energy stress.",
    upstream_event: "Metabolic stress + nutrient sensing dysregulation",
    downstream_effects: [
      "Autophagosome formation",
      "Lysosomal degradation",
      "Metabolic homeostasis maintenance",
      "Survival under stress",
    ],
    druggable: true,
    display_order: 7,
  },
  {
    name: "NAD⁺ Metabolism / NAMPT Axis",
    slug: "nad-metabolism",
    description:
      "SDH loss impairs Complex II of the electron transport chain, causing NADH accumulation and increased mitochondrial ROS. Sustained ROS drives DNA damage that chronically activates PARP1, consuming NAD⁺. Cells compensate by upregulating the NAMPT-mediated NAD⁺ salvage pathway, creating a targetable dependency.",
    upstream_event:
      "Complex II dysfunction → NADH/NAD⁺ imbalance + ROS-driven DNA damage → PARP1 hyperactivation",
    downstream_effects: [
      "Chronic NAD⁺ depletion",
      "PARP-mediated parthanatos vulnerability",
      "Glycolytic NAD⁺ regeneration dependency",
      "NAMPT upregulation as adaptive response",
      "Selective lethality to NAD⁺ biosynthesis inhibition",
    ],
    druggable: true,
    display_order: 8,
  },
  {
    name: "FGFR Signaling (Epigenetic Insulator Disruption)",
    slug: "fgfr-signaling",
    description:
      "SDH-loss-driven genome-wide DNA hypermethylation disrupts CTCF-binding insulator elements flanking the FGF3/FGF4 gene locus, causing aberrant, high-level transcription of these oncogenic FGF ligands. The ligands activate an autocrine/paracrine FGFR1 signaling loop that promotes SDH-deficient tumor growth. This mechanism was established in GIST by a 2026 Phase 2 trial of rogaratinib (Nat Med 2026, PMID 42191879).",
    upstream_event:
      "Succinate-driven TET inhibition → genome-wide DNA hypermethylation → CTCF insulator disruption → aberrant FGF3/FGF4 activation",
    downstream_effects: [
      "Autocrine FGFR1 signaling",
      "Tumor cell proliferation and survival",
      "FGF3/FGF4 as pharmacodynamic biomarkers",
      "Hyperphosphatemia as on-target FGFR1 engagement marker",
      "Selective vulnerability in SDH-deficient vs. SDH-intact tumors",
    ],
    druggable: true,
    display_order: 9,
  },
  {
    name: "Neddylation / Ubiquitin-Proteasome Axis",
    slug: "neddylation",
    description:
      "An unbiased genome-wide CRISPR-Cas9 synthetic lethality screen in SDHB-deficient chromaffin cells identified the neddylation pathway as selectively essential for SDH-deficient tumor survival. Neddylation — attachment of the ubiquitin-like modifier NEDD8 to cullin-RING E3 ligases by NAE1/UBA3 and specific E2 enzymes — controls ubiquitin-mediated proteolysis. Loss of UBE2F suppressed growth of SDHB-deficient cells specifically, while neddylation inhibitors (pevonedistat, HA-9104) preferentially blocked proliferation in the SDH-deficient context (PMID 42181244).",
    upstream_event:
      "SDH loss → metabolic and proteotoxic stress → upregulated dependency on cullin-RING ligase-mediated protein degradation via neddylation",
    downstream_effects: [
      "Selective UBE2F dependency in SDHB-deficient cells",
      "Cullin-RING ligase inactivation upon NAE inhibition",
      "Proteotoxic stress accumulation",
      "Selective growth suppression in SDH-deficient tumor cells",
    ],
    druggable: true,
    display_order: 10,
  },
  {
    name: "Polyamine Metabolism",
    slug: "polyamine-metabolism",
    description:
      "Spermidine and spermine are significantly elevated in SDHx-mutated pheochromocytoma/paraganglioma tissues and in SDHB-knockdown cells compared with wild-type controls, implying that SDH loss drives upregulation of the polyamine biosynthesis pathway. Polyamines support rapid cell proliferation and mitochondrial function; in SDH-deficient cells already under chronic oxidative stress, this pathway represents a synthetic vulnerability. Polyamine analogues such as DENSPM deplete natural polyamines by inducing SSAT-mediated catabolism and generate additional ROS via spermine oxidase, pushing these cells past their apoptotic threshold.",
    upstream_event:
      "SDH loss → altered mitochondrial metabolism → upregulation of polyamine biosynthesis (elevated spermidine, spermine in SDHx-mutated tumors)",
    downstream_effects: [
      "Elevated spermidine and spermine in SDHx-mutated tumor tissue",
      "SSAT upregulation as compensatory catabolism",
      "ROS generation via spermine oxidase (SMOX) during catabolism",
      "Dependency on polyamine turnover for mitochondrial and proliferative support",
      "Selective sensitivity to polyamine depletion in SDHB-deficient cells",
    ],
    druggable: true,
    display_order: 11,
  },
  {
    name: "Succinate-Driven Immune Evasion",
    slug: "succinate-immune-evasion",
    description:
      "SDH loss creates an immunosuppressive tumor microenvironment through two distinct succinate-dependent mechanisms: (1) extracellular succinate is directly taken up by tumor-infiltrating T cells via MCT1 (SLC16A1), impairing TCA-cycle glucose oxidation in T cells and suppressing IFN-γ secretion and degranulation — demonstrated in human CD4+/CD8+ T cells at tumor-associated succinate concentrations (Gudgeon et al., Cell Rep 2022, PMID 35977513), with RNA-seq of SDH-deficient pheochromocytoma/paraganglioma confirming profound in-vivo IFN-γ signaling suppression; and (2) the pseudohypoxic HIF-1α program drives upregulation of IDO1 (indoleamine 2,3-dioxygenase 1), the rate-limiting enzyme in the tryptophan→kynurenine degradation pathway, with aberrant kynurenine pathway activity confirmed in metastatic SDHB-driven PPGL by multi-omics (PMID 42230482). Together these mechanisms create a profoundly T-cell-hostile TME in SDH-deficient tumors.",
    upstream_event:
      "SDH loss → intracellular and extracellular succinate accumulation; HIF-1α stabilization (pseudohypoxia)",
    downstream_effects: [
      "MCT1-mediated succinate uptake by CD4+/CD8+ T cells in TME",
      "Suppressed T-cell IFN-γ secretion and degranulation",
      "HIF-1α-driven IDO1 upregulation",
      "Kynurenine accumulation → Treg expansion and T-cell anergy",
      "Broad IFN-γ signaling suppression in SDH-deficient tumor tissue",
    ],
    druggable: true,
    display_order: 12,
  },
  {
    name: "ATRX Loss / ALT Replication Stress",
    slug: "atrx-alt-replication-stress",
    description:
      "In SDHB-driven metastatic pheochromocytoma and paraganglioma, ATRX co-mutations occur in ~30–40% of cases and are among the strongest genomic predictors of malignancy (confirmed by multi-omics profiling: PMID 42230482). ATRX loss activates the Alternative Lengthening of Telomeres (ALT) pathway — a recombination-based telomere maintenance mechanism — which creates constitutive replication stress at telomeric sequences through G-quadruplex DNA accumulation, R-loop formation, and fragile telomeres. ALT-positive cells are rendered hypersensitive to ATR kinase inhibition: Flynn et al. (Science 2015, PMID 25614623) demonstrated that ATRX-loss/ALT-positive cancer cells are 10–30× more sensitive to ATR inhibitors than ALT-negative cells across multiple cancer types, establishing a synthetic lethality that is absent in ATRX-wild-type tumors.",
    upstream_event:
      "SDH loss (particularly SDHB mutation) → epigenetic instability → ATRX co-mutation → ALT pathway activation → constitutive telomeric replication stress → ATR dependency",
    downstream_effects: [
      "G-quadruplex DNA accumulation at telomeres",
      "R-loop formation and replication fork stalling",
      "Constitutive ATR kinase activation at stalled forks",
      "Synthetic lethality with ATR inhibition (10–30× sensitization vs. ALT-negative cells)",
      "C-circles as an extrachromosomal DNA biomarker of ALT activity",
      "High metastatic potential in SDHB-driven PPGL",
    ],
    druggable: true,
    display_order: 13,
  },
  {
    name: "Succinate-Driven Homologous Recombination Deficiency",
    slug: "sdh-driven-hrd",
    description:
      "Succinate accumulation competitively inhibits the α-KG-dependent histone demethylases KDM4A and KDM4B (JMJD2A/B), which normally erase repressive H3K9me3 marks at sites of DNA double-strand breaks. When KDM4B is inhibited, H3K9me3 hypermethylation persists at break sites, blocking recruitment of TIP60 acetyltransferase and ATM kinase — both required for DNA end-resection and initiation of homology-directed repair (HDR/HR). The result is a 'BRCAness' phenotype: SDH-deficient tumor cells have impaired HR capacity despite wild-type BRCA1/2. Sulkowski et al. (Nat Genet 2018, PMID: 30013182) directly demonstrated HR deficiency and olaparib hypersensitivity in cells and tumors from SDH-deficient hereditary paraganglioma/PPGL patients; Sulkowski et al. (Nature 2020, PMID: 32494005) dissected the KDM4B/H3K9me3 chromatin mechanism.",
    upstream_event:
      "SDH loss → succinate accumulation → competitive inhibition of KDM4A/KDM4B (α-KG-dependent H3K9me3 demethylases) → H3K9me3 persistence at DNA double-strand break sites → impaired TIP60/ATM recruitment → defective DNA end-resection → HR deficiency",
    downstream_effects: [
      "H3K9me3 hypermethylation at DNA double-strand break sites",
      "Impaired TIP60 acetyltransferase and ATM kinase recruitment",
      "Defective homologous recombination (BRCAness phenotype in BRCA1/2-wild-type cells)",
      "PARP inhibitor synthetic lethality (trapping unrepaired single-strand breaks in HR-deficient background)",
      "Selective sensitivity to olaparib and other PARP inhibitors in SDH-deficient versus SDH-intact cells",
    ],
    druggable: true,
    display_order: 14,
  },
  {
    name: "De Novo Lipogenesis / FASN Dependency",
    slug: "de-novo-lipogenesis",
    description:
      "SDH loss truncates the TCA cycle at the succinate → fumarate step, forcing cells to generate lipid precursors via reductive carboxylation of glutamine: glutamate → α-KG → isocitrate → citrate (reverse TCA via IDH1/IDH2), which is exported to the cytoplasm and cleaved by ATP-citrate lyase (ACLY) to yield acetyl-CoA. Fatty acid synthase (FASN) then converts acetyl-CoA and malonyl-CoA into palmitate and longer-chain fatty acids required for membrane biogenesis, lipid signalling, and mitochondrial lipid supply. Independently, FASN products are required for mitochondrial fatty acid synthesis (mtFAS), which produces the lipoic acid moiety needed by key mitochondrial enzyme complexes. A FASN-SDHB synthetic interaction was directly demonstrated using the FASN inhibitor G28UCM in SDHB-knockout cell lines: G28UCM impaired FASN activity and mitochondrial fatty acid synthesis more profoundly in SDHB-deficient cells than in WT controls, establishing selective synthetic lethality (Rodríguez-Flores et al., Pharmacol Res 2026, PMID 41520938).",
    upstream_event:
      "SDH loss → TCA cycle truncation at Complex II → reductive glutamine carboxylation as primary citrate-generation route → ACLY-mediated cytoplasmic acetyl-CoA production → upregulated FASN-mediated de novo fatty acid synthesis; concurrent dependence on FASN products for mitochondrial lipid supply and mtFAS",
    downstream_effects: [
      "Reductive carboxylation of glutamine as primary lipid precursor route (replaces pyruvate-derived acetyl-CoA)",
      "Elevated FASN-mediated palmitate and long-chain fatty acid synthesis",
      "Dependency on FASN products for mitochondrial membrane lipids and lipoic acid (via mtFAS)",
      "FASN inhibition (G28UCM) selectively impairs mitochondrial fatty acid synthesis and induces lethality in SDHB-deficient vs. WT cells (PMID 41520938)",
      "Dual cytoplasmic + mitochondrial lipid impairment under FASN inhibition exceeds the threshold tolerated by SDH-compromised cells",
    ],
    druggable: true,
    display_order: 15,
  },
  {
    name: "HIF-1α-Driven Apoptosis Evasion (Survivin / BIRC5)",
    slug: "hif-driven-survivin-apoptosis",
    description:
      "Pseudohypoxic HIF-1α stabilization — a universal consequence of SDH loss — transcriptionally activates BIRC5 (survivin), an inhibitor of apoptosis (IAP) family protein. The survivin promoter contains canonical hypoxia-response elements (HREs) directly bound by HIF-1α. Elevated survivin in SDH-deficient cells enables two pro-tumor functions: (1) apoptosis evasion by inhibiting caspase-3/7 and forming a ternary anti-apoptotic complex with XIAP and caspase-9, protecting cells from executing the apoptosis that would normally follow accumulated DNA damage; and (2) mitotic survival as a core subunit of the Chromosomal Passenger Complex (CPC), which governs spindle assembly checkpoint and chromosomal segregation in genomically unstable cells. SDH-deficient cells accumulate DNA damage via BRCAness (Mechanism 14) but evade apoptosis through elevated Survivin — creating a synthetic lethal dependency on BIRC5 that can be exploited by Survivin inhibitors. Direct evidence: PMID 41711310 demonstrated selective susceptibility of SDH-deficient cancer cells to the Survivin inhibitor Ym155 (Endocr Relat Cancer 2026).",
    upstream_event:
      "SDH loss → succinate accumulation → PHD inhibition → HIF-1α stabilization → HRE-driven BIRC5/Survivin transcriptional upregulation",
    downstream_effects: [
      "Elevated BIRC5/Survivin protein in SDH-deficient tumor cells",
      "Caspase-3/7 inhibition — apoptosis evasion despite DNA damage accumulation",
      "XIAP-Survivin-caspase-9 ternary complex preventing apoptotic cascade initiation",
      "CPC-mediated mitotic survival in genomically unstable cells",
      "Synthetic lethality with Survivin inhibitors (Ym155) in SDH-deficient cells",
    ],
    druggable: true,
    display_order: 16,
  },
  {
    name: "Pyrimidine Synthesis Vulnerability",
    slug: "pyrimidine-synthesis-vulnerability",
    description:
      "SDH loss creates a dual block in de novo pyrimidine synthesis: (1) TCA cycle truncation depletes the aspartate pool (aspartate is a required nitrogen and carbon donor for the pyrimidine ring), and (2) accumulated succinate directly and competitively inhibits aspartate transcarbamylase (ATCase/CAD), the enzyme that commits aspartate to carbamoyl aspartate — the second step of pyrimidine synthesis (Hart et al., Nat Metab 2026, PMID 42082831). This dual impairment leaves SDH-deficient cells near a pyrimidine synthesis floor, with far less buffer to absorb additional de novo pathway blockade compared with normal cells. DHODH inhibitors (blocking dihydroorotate → orotate, step 4 of the same de novo pathway) selectively tip SDH-deficient cells into pyrimidine starvation while normal cells — with intact ATCase and adequate aspartate — sustain sufficient UMP production.",
    upstream_event:
      "SDH loss → succinate accumulation → (1) OAA/aspartate pool depletion via TCA truncation + (2) direct succinate-mediated inhibition of ATCase (CAD) → de novo pyrimidine synthesis suppression",
    downstream_effects: [
      "Reduced UMP/CTP/TTP biosynthesis in SDH-deficient cells",
      "Aspartate rebound that fails to rescue pyrimidine synthesis (succinate-ATCase block is the dominant constraint)",
      "Increased dependency on pyrimidine salvage (which may not fully compensate under proliferative demand)",
      "Selective synthetic vulnerability to DHODH inhibition in SDH-deficient vs. SDH-intact cells",
      "Potential synthetic lethal interaction with the concurrent aspartate and nucleotide deficiency imposed by the BRCAness pathway (Mechanism 14)",
    ],
    druggable: true,
    display_order: 17,
  },
  {
    name: "Pol θ-Mediated End-Joining (TMEJ) Backup Repair",
    slug: "polq-tmej-backup-repair",
    description:
      "SDH loss drives succinate accumulation, which competitively inhibits KDM4A/KDM4B (α-KG-dependent H3K9me3 demethylases) at DNA double-strand break sites. H3K9me3 persistence blocks TIP60/ATM recruitment and DNA end-resection, producing a global homologous recombination (HR) deficiency — the 'BRCAness' phenotype described by Sulkowski et al. (Nat Genet 2018; Nature 2020). HR-deficient cells cannot repair DSBs via the high-fidelity HR route and instead upregulate Pol θ-mediated end-joining (TMEJ, also called MMEJ), the backup DSB repair pathway executed by DNA polymerase theta (POLQ). TMEJ is error-prone (generating short deletions and microhomology footprints) but essential for survival when HR is unavailable. Ceccaldi et al. (Nature 2015, PMID 25642963) demonstrated that HR-deficient cancer cells are synthetically lethal with POLQ inhibition or depletion: when both HR and TMEJ are unavailable, unrepaired DSBs cause cell death. ART558, a first-in-class selective POLQ inhibitor (Artios Pharma), exploits this dependency and is in Phase 1 clinical development. The POLQ/TMEJ direction is mechanistically complementary to PARP inhibition in the same BRCAness context: PARP inhibitors trap SSBs that collapse into DSBs, which HR-deficient cells cannot resolve; POLQ inhibition blocks the backup TMEJ pathway those same cells depend on to survive accumulated DSBs.",
    upstream_event:
      "SDH loss → succinate accumulation → KDM4A/KDM4B inhibition → H3K9me3 persistence at DSBs → HR deficiency (BRCAness) → compensatory TMEJ/POLQ upregulation",
    downstream_effects: [
      "Homologous recombination (HR) deficiency in SDH-deficient cells",
      "Upregulation of POLQ-mediated end-joining (TMEJ/MMEJ) as backup DSB repair",
      "Increased dependency on POLQ for survival",
      "Synthetic lethality with POLQ inhibition (ART558) — confirmed in HR-deficient cancer models",
      "Error-prone TMEJ generates genomic instability (short deletions, microhomology junctions) contributing to tumor evolution",
    ],
    druggable: true,
    display_order: 18,
  },
  {
    name: "SSTR2 / Somatostatin Receptor Vulnerability",
    slug: "sstr2-somatostatin-vulnerability",
    description:
      "SDH-deficient pheochromocytomas and paragangliomas (PCC/PGL) maintain high-level somatostatin receptor subtype 2 (SSTR2) expression. Full agonist activation of SSTR2 selectively suppresses proliferation and induces apoptosis in SDHB-deficient cells versus wild-type controls, identifying SSTR2 as a direct pharmacological vulnerability (Ballard et al., Mol Biomed 2026, PMID 41928014). Cold somatostatin analogues (partial agonists: octreotide, lanreotide) do not recapitulate the selective cytotoxicity — full receptor activation is required. The clinical corollary is that SSTR2 high expression in SDH-deficient PPGL confers eligibility for peptide receptor radionuclide therapy (PRRT) with 177Lu-DOTATATE, which simultaneously delivers full SSTR2 agonism and targeted β-radiation. The concurrent BRCAness phenotype (Mechanism 14) may synergize with PRRT-induced DSBs, since SDH-deficient cells have impaired HR capacity to resolve radiation damage. This mechanism is relevant to SDH-deficient PPGL (neuroendocrine lineage, SSTR2-high); SDH-deficient GIST and RCC are not typically SSTR2-expressing.",
    upstream_event:
      "SDH loss (SDHB mutation predominantly) → maintained neuroendocrine differentiation state with high SSTR2 expression; full SSTR2 agonism is selectively cytotoxic in SDHB-deficient versus SDH-intact PCC/PGL cells",
    downstream_effects: [
      "Gi-GPCR coupling: SSTR2 full activation → adenylyl cyclase inhibition → cAMP suppression → anti-proliferative downstream signaling",
      "Selective apoptosis in SDHB-deficient cells upon SSTR2 full agonism (BIM-23120; PMID 41928014)",
      "High 177Lu-DOTATATE uptake in SSTR2-high SDH-deficient PPGL → targeted intratumoural β-radiation causing dense DSBs",
      "PRRT eligibility for SSTR2-positive SDH-deficient PPGL (confirmed SSTR2-high by DOTATATE-PET; PMID 42454478)",
      "Potential synergy of PRRT-induced DSBs with BRCAness (Mechanism 14): SDH-deficient cells cannot efficiently repair radiation-induced DSBs via HR",
    ],
    druggable: true,
    display_order: 19,
  },
  {
    name: "HIF-Driven MET and AXL Signaling",
    slug: "hif-met-axl-signaling",
    description:
      "SDH loss → succinate accumulation → PHD inhibition → pseudohypoxic HIF-1α/2α stabilization. HIF-1α transcriptionally activates the MET proto-oncogene (hepatocyte growth factor receptor) via direct binding to hypoxia-response elements (HREs) in the MET promoter (Pennacchietti et al., Cancer Cell 2003, PMID 12726861). MET upregulation drives invasive growth, PI3K/AKT/mTOR activation, and a positive-feedback HIF loop (MET → PI3K → HIF-1α). AXL (a TAM receptor tyrosine kinase) is co-upregulated in the pseudohypoxic tumor microenvironment and promotes tumor cell survival, EMT, and immune evasion. Multi-kinase inhibitors targeting VEGFR2/MET/AXL (cabozantinib) exploit this HIF-driven receptor tyrosine kinase upregulation.",
    upstream_event:
      "SDH loss → succinate → PHD inhibition → HIF-1α/2α stabilization → HRE-driven MET and AXL transcriptional upregulation",
    downstream_effects: [
      "MET overexpression → HGF-driven invasive growth and PI3K/AKT/mTOR activation",
      "MET → PI3K/AKT/mTOR → HIF-1α positive-feedback loop amplifying pseudohypoxic signaling",
      "AXL upregulation → tumor cell survival, EMT, and immunosuppressive TME contribution",
      "Multi-kinase vulnerability co-targeting VEGFR2/MET/AXL via cabozantinib",
      "SDH-deficient PPGL clinical activity: ORR 25%, median PFS 16.6 months (Natalie trial, Lancet Oncol 2024, PMID 38608693)",
    ],
    druggable: true,
    display_order: 20,
  },
  {
    name: "HIF-Driven PD-L1 / Checkpoint Immune Evasion",
    slug: "hif-pdl1-checkpoint-evasion",
    description:
      "Constitutive HIF-1α stabilization in SDH-deficient tumors (via succinate-mediated PHD inhibition) directly transcriptionally activates CD274 (PD-L1/B7-H1) via canonical hypoxia-response elements in the CD274 promoter. Tumor-surface PD-L1 engages PD-1 receptors on infiltrating cytotoxic T cells, triggering functional exhaustion and suppressing anti-tumor immunity. This is a second, HIF-driven immune-evasion arm that operates in parallel to the succinate-MCT1-IDO1 axis: both converge on T-cell suppression in the SDH-deficient tumor microenvironment. Blocking PD-1 with checkpoint inhibitors (pembrolizumab, nivolumab) restores T-cell effector function and is under clinical evaluation in GIST and paraganglioma.",
    upstream_event:
      "SDH loss → succinate → PHD inhibition → HIF-1α stabilization → HRE-driven CD274 transcription → tumor-surface PD-L1 → PD-1 ligation on T cells → T-cell exhaustion",
    downstream_effects: [
      "CD274 (PD-L1) upregulation on tumor cells via HIF-1α-driven HRE transcription",
      "PD-1/PD-L1 ligation suppresses CD8+ T-cell cytotoxicity and IFN-γ secretion",
      "Immunosuppressive tumor microenvironment synergistic with succinate-MCT1 and IDO1 arms",
      "Anti-PD-1 checkpoint blockade (pembrolizumab, nivolumab) restores T-cell effector function",
      "Clinical evaluation ongoing in GIST (NCT02834013 DART) and PPGL (NCT02721732, NCT02834013)",
    ],
    druggable: true,
    display_order: 21,
  },
  {
    name: "CDKN2A/CDK4/6 Cell Cycle Dysregulation",
    slug: "cdkn2a-cdk46-cell-cycle",
    description:
      "SDH loss drives CIMP-dependent epigenetic silencing of CDKN2A (encoding p16/INK4A), the principal physiological inhibitor of CDK4 and CDK6. Killian et al. (Cancer Discov 2013, PMID 23550148) identified CDKN2A promoter hypermethylation among ~85,000 hypermethylated CpG targets in SDH-deficient GIST (vs ~8,400 in KIT/PDGFRA-mutant GIST), demonstrating that CDKN2A silencing is part of the CIMP signature unique to SDH-deficient tumors. Loss of p16/INK4A removes the allosteric CDK4/6 brake, allowing cyclin D–CDK4/6 complexes to constitutively hyperphosphorylate RB1 and release E2F transcription factors, driving unrestrained G1→S transition. CDK4/6 inhibitors (palbociclib, ribociclib, abemaciclib) pharmacologically reimpose the CDK4/6 checkpoint that CIMP-driven p16 silencing ablated, restoring RB1-mediated cell cycle arrest.",
    upstream_event:
      "SDH loss → succinate → TET enzyme inhibition → CIMP → CDKN2A promoter hypermethylation → p16/INK4A silencing → constitutive CDK4/6 activity → RB1 hyperphosphorylation → E2F release → unrestrained S-phase entry",
    downstream_effects: [
      "CDKN2A promoter hypermethylation and p16/INK4A silencing (part of CIMP signature; Killian et al. Cancer Discov 2013, PMID 23550148)",
      "CDK4/6 constitutive activation due to loss of p16/INK4A allosteric inhibition",
      "RB1 chronic hyperphosphorylation → E2F transcription factors constitutively released",
      "Unrestrained G1/S transition; tumor cells bypass p16/INK4A restriction point",
      "Pharmacological CDK4/6 inhibition (palbociclib) restores RB1 hypophosphorylation and G1 arrest in RB1-intact tumors",
    ],
    druggable: true,
    display_order: 22,
  },
  {
    name: "CHK1 / Replication Stress Checkpoint (BRCAness)",
    slug: "chk1-brcas-replication-checkpoint",
    description:
      "SDH loss drives epigenetic silencing of homologous recombination (HR) repair factors — the BRCAness phenotype (Sulkowski et al. Nat Genet 2018, PMID 30013182; Nature 2020, PMID 32494005). HR-deficient cells accumulate stalled replication forks and become acutely dependent on the ATR→CHK1 checkpoint kinase axis to stabilize forks, coordinate origin firing, and prevent premature mitotic entry. CHK1 (CHEK1) inhibition in BRCAness-positive cells causes replication catastrophe and mitotic catastrophe — a mechanistic vulnerability distinct from ATR inhibition (Mechanism 13, which is further restricted to ATRX-null/ALT subsets) because CHK1 is the downstream effector relevant to all BRCAness-positive SDH-deficient tumors regardless of ATRX status.",
    upstream_event:
      "SDH loss → succinate → KDM4A/KDM4B inhibition (α-KG-dependent histone demethylases) → H3K9me3 persistence at double-strand break sites → impaired TIP60 acetyltransferase and ATM kinase recruitment → HR deficiency (BRCAness) → stalled replication forks → CHK1 checkpoint activation → tumor CHK1 dependency for fork stability and cell cycle coordination",
    downstream_effects: [
      "Stalled replication forks accumulate in BRCAness-positive SDH-deficient cells due to HR repair impairment",
      "CHK1 (phospho-Ser345 by ATR) stabilizes stalled forks by inactivating CDC25A→CDK2 and CDC25C→CDK1",
      "CHK1 inhibition causes unscheduled origin firing, replication catastrophe, and ssDNA accumulation",
      "Premature CDK1 activation drives mitotic catastrophe in cells with under-replicated DNA",
      "CHK1 inhibition is selective for BRCAness-positive (HR-deficient) cells; HR-proficient cells tolerate CHK1 loss via redundant checkpoint pathways",
      "Prexasertib (LY2606368) provides pharmacological CHK1/CHK2 inhibition with Phase 2 clinical data in HR-deficient solid tumors",
    ],
    druggable: true,
    display_order: 23,
  },
  {
    name: "TERT Telomerase Reactivation",
    slug: "tert-telomerase-reactivation",
    description:
      "TERT promoter mutations (c.-124C>T, C228T) occur in ~16.7% of SDHB-germline-positive metastatic pheochromocytoma/paraganglioma (PPGL), co-occurring exclusively with SDHB pathogenic variants (Batini et al., Arch Endocrinol Metab 2026, PMID 42155081). These hotspot mutations create de novo E-twenty-six (ETS) transcription factor binding sites in the TERT promoter, driving constitutive telomerase (TERT/TERC) transcription and telomere maintenance via the telomerase-dependent pathway. This is mechanistically distinct from the ATRX-loss/ALT pathway (Mechanism 13): ATRX-null tumors use recombination-based, telomerase-independent ALT, whereas TERT-promoter-mutant tumors rely on telomerase enzyme activity. Imetelstat (Rytelo) — a 13-mer thio-phosphoramidate oligonucleotide that competitively binds the TERT catalytic site as a template antagonist — directly inhibits telomerase and is FDA-approved (June 2024) for lower-risk MDS with transfusion-dependent anemia.",
    upstream_event:
      "SDHB loss (predominantly) → epigenetic instability → TERT promoter C228T mutation → de novo ETS binding site → constitutive TERT transcription → active telomerase complex → telomere maintenance in metastatic PPGL",
    downstream_effects: [
      "Constitutive TERT expression and telomerase enzyme activity in TERT-promoter-mutant PPGL",
      "Telomere-length maintenance enabling indefinite replicative potential in SDHB-metastatic tumors",
      "TERT promoter C228T co-occurs exclusively with SDHB PVs (16.7% of metastatic SDHB-PPGL; PMID 42155081)",
      "Telomerase-dependent pathway — mechanistically non-overlapping with ATRX-null/ALT (Mechanism 13)",
      "Imetelstat-mediated TERT catalytic-site blockade → progressive telomere shortening → replicative crisis → selective cell death in TERT-promoter-mutant tumors",
    ],
    druggable: true,
    display_order: 24,
  },
  {
    name: "MIBG / NET-Targeted Radionuclide Therapy",
    slug: "mibg-net-targeted-radiation",
    description:
      "The norepinephrine transporter (NET, encoded by SLC6A2) is selectively expressed on chromaffin-lineage cells including pheochromocytoma and paraganglioma, enabling tumor-selective intracellular delivery of radiolabeled guanethidine analogs (MIBG: meta-iodo/astatobenzylguanidine). NET actively transports MIBG analogs into catecholamine-storing vesicles, concentrating intracellular ionizing radiation in tumor cells expressing NET. In BRCAness-positive SDH-deficient PPGL, the established HR deficiency (Sulkowski et al. PMID 30013182/32494005) creates an additional vulnerability to radiation-induced DSBs — particularly high-LET alpha-particle radiation — because HR-impaired cells cannot efficiently repair complex clustered DNA lesions. ¹³¹I-MIBG (Azedra) delivers beta-particle radiation and is FDA-approved for iobenguane-avid PPGL. [²¹¹At]MABG delivers high-LET alpha-particle radiation, creating more complex DSBs especially cytotoxic in HR-deficient (BRCAness-positive) SDH-deficient cells.",
    upstream_event:
      "SDH loss → SDHB/SDHD-mutant chromaffin cell lineage → NET (SLC6A2) expression on tumor surface → MIBG analog selective intracellular uptake via NET → intracellular ionizing radiation → DNA DSBs; additional sensitization: SDH loss → succinate → KDM4A/KDM4B inhibition → H3K9me3 persistence at DSBs → HR deficiency (BRCAness) → impaired radiation-induced DSB repair",
    downstream_effects: [
      "NET/SLC6A2 mediates selective intracellular MIBG uptake in chromaffin-lineage PPGL cells; non-NET-expressing tissues receive minimal radiation dose",
      "¹³¹I-MIBG (Azedra): beta-particle (β⁻, max range ~2mm) delivered intracellularly; FDA-approved July 2018 for iobenguane-avid locally advanced/metastatic PPGL; ORR ~25%, CBR ~92% in MACS0010 registration trial",
      "[²¹¹At]MABG: alpha-particle (⁴He²⁺, path length 50–80μm, high-LET ~80 keV/μm) creates complex clustered DSBs; Phase 1 (Okamoto et al. CCR 2026, PMID 42490294): 1 PR + 7 SD in 10 MIBG-avid PCC/PGL patients at 2.1 MBq/kg, no DLTs",
      "BRCAness (Mechanism 14) predicts enhanced sensitivity to high-LET alpha-particle radiation: complex clustered DSBs require HR for accurate repair; HR-deficient SDH-deficient cells cannot efficiently resolve them, amplifying [²¹¹At]MABG cytotoxicity relative to NET-expressing SDH-intact tissues",
      "Panobinostat upregulates NET/SLC6A2 expression and MIBG uptake in PPGL cells at nanomolar concentrations (Martiniova et al. PMID 21098082), providing a combination rationale to enhance MIBG delivery",
      "Mechanistically distinct from ¹⁷⁷Lu-DOTATATE (Mechanism 19, SSTR2-targeted): different tumor surface receptor (NET vs SSTR2), different radiation type (alpha vs beta particles), different patient eligibility (MIBG-avid vs DOTATATE-avid PPGL)",
      "Limitation: NET expression is restricted to catecholamine-secreting neuroendocrine lineage — not applicable to SDH-deficient GIST (mesenchymal, no NET expression) or SDH-deficient RCC",
    ],
    druggable: true,
    display_order: 25,
  },
  {
    name: "NHEJ / DNA-PK Backup Repair",
    slug: "nhej-dnapk-backup-repair",
    description:
      "In HR-deficient BRCAness-positive SDH-deficient cells, the non-homologous end-joining (NHEJ) pathway becomes the primary backup for DNA double-strand break (DSB) repair. DNA-PKcs (PRKDC), together with Ku70/Ku80, forms the DNA-PK holoenzyme at DSB ends — phosphorylating H2AX, activating ARTEMIS nuclease for end processing, and enabling XRCC4-DNA ligase IV ligation. Inhibiting DNA-PKcs in HR-deficient cells (BRCAness from SDH loss) removes this compensatory NHEJ backup, creating synthetic lethality. HR-proficient normal cells retain HR as an alternative DSB repair route and are substantially less affected.",
    upstream_event:
      "SDH loss → succinate → KDM4A/KDM4B inhibition → H3K9me3 persistence at DSBs → impaired TIP60/ATM → HR deficiency (BRCAness) → NHEJ becomes dominant/sole DSB repair pathway → dependency on DNA-PKcs for NHEJ execution",
    downstream_effects: [
      "NHEJ is the primary DSB repair pathway in BRCAness-positive HR-deficient SDH-deficient cells",
      "DNA-PKcs (PRKDC) is required for DSB end-synapsis, processing, and ligation via XRCC4-DNA ligase IV",
      "Peposertib (M3814) inhibits DNA-PKcs → blocks NHEJ → unrepaired DSBs accumulate in BRCAness-positive cells",
      "HR-proficient normal cells tolerate DNA-PK inhibition via intact HR backup — providing a therapeutic window",
      "Combination with PRRT (Lu-177 DOTATATE, alpha-particle RLT) in SDH-deficient PPGL: radiation-induced DSBs + HR impairment (BRCAness) + NHEJ inhibition (peposertib) = triple DSB repair failure",
    ],
    druggable: true,
    display_order: 26,
  },
  {
    name: "cGAS-STING Innate Immune Activation",
    slug: "cgas-sting-innate-immune",
    description:
      "The BRCAness phenotype established in all SDH-deficient tumors (Sulkowski et al. Nat Genet 2018, PMID 30013182; Nature 2020, PMID 32494005) generates constitutive replication stress and chromosomal instability. Stalled, unrepaired replication forks lead to chromosomal mis-segregation during mitosis and formation of micronuclei — fragments of chromatin enclosed in abnormal nuclear membranes. Mackenzie et al. (Nature 2017, PMID 28738408) demonstrated that cGAS (cyclic GMP-AMP synthase; CGAS/MB21D1) localises to ruptured micronuclei and is activated by the exposed chromatin, producing 2′3′-cGAMP. This second messenger binds and activates STING (stimulator of interferon genes; STING1/TMEM173), which recruits TBK1 and activates IRF3 and NF-κB, driving IFN-β and type I interferon-stimulated gene (ISG) expression — an innate immune programme that can prime antitumor adaptive immunity. STING agonists bypass the cGAS sensing step entirely by directly binding and activating STING, amplifying this innate immune response in the SDH-deficient tumour microenvironment. Note: Liu et al. (Nature 2018, PMID 30356214) showed that a distinct nuclear pool of cGAS suppresses homologous recombination via PARP1 interaction; STING agonists act downstream of and independently from this nuclear cGAS pool. A second, complementary druggable node sits on the same axis: ENPP1 (ectonucleotide pyrophosphatase/phosphodiesterase 1) is the dominant extracellular hydrolase for 2\u20323\u2032-cGAMP. By degrading secreted cGAMP before it reaches STING on neighbouring dendritic and stromal cells, ENPP1 blunts paracrine STING signalling; ENPP1 inhibition preserves the cGAMP pool, sustains STING activation, and promotes dendritic-cell maturation and cytotoxic T-cell cross-priming.",
    upstream_event:
      "SDH loss → BRCAness (succinate → KDM4A/KDM4B inhibition → H3K9me3 at DSBs → HR deficiency) → chromosomal mis-segregation → micronuclei formation → micronuclear envelope rupture → cytoplasmic chromatin exposure → cGAS activation → cGAMP → STING → TBK1 → IRF3/NF-κB → IFN-β / ISG expression",
    downstream_effects: [
      "Micronuclei formation from BRCAness-driven chromosomal instability in SDH-deficient cells",
      "cGAS accumulation at ruptured micronuclei → 2′3′-cGAMP production (Mackenzie et al. Nature 2017, PMID 28738408)",
      "STING-TBK1 complex activation → IRF3 phosphorylation → nuclear translocation",
      "IFN-β and type I interferon-stimulated gene (ISG) transcription → innate immune priming",
      "Potential enhancement of adaptive antitumor immunity in the tumour microenvironment",
      "STING agonists (e.g. ulevostinag/MK-1454) amplify this response directly at STING, bypassing upstream cGAS sensing",
      "ENPP1 hydrolyses extracellular 2\u20323\u2032-cGAMP, limiting paracrine STING activation in the tumour microenvironment",
      "ENPP1 inhibition (RBS2418/uzaribat) restores cGAMP-driven STING signalling and enhances immune infiltration",
    ],
    druggable: true,
    display_order: 27,
  },
  {
    name: "HIF-Driven CXCR4/CXCL12 Chemokine Metastasis",
    slug: "hif-cxcr4-chemokine-metastasis",
    description:
      "Constitutive HIF-1α stabilization in SDH-deficient pseudohypoxic tumors transcriptionally activates CXCR4, the chemokine receptor for the CXCL12/SDF-1 gradient — a mechanism first described in VHL-deficient RCC (same pseudohypoxic phenotype) by Staller et al. (Nature 2003, PMID 13679920). CXCR4 overexpression drives chemotactic migration toward CXCL12-rich microenvironments (bone marrow, lymph nodes, vascular niches), mediating metastatic homing and dissemination. This pathway is pharmacologically targetable by plerixafor (AMD3100/Mozobil), an FDA-approved CXCR4 antagonist already in clinical use for stem cell mobilization.",
    upstream_event:
      "SDH loss → succinate → PHD inhibition → HIF-1α stabilization → HRE-driven CXCR4 transcriptional upregulation → CXCL12 gradient-directed chemotaxis → metastatic dissemination to CXCL12-rich organ niches",
    downstream_effects: [
      "CXCR4 transcriptionally upregulated by HIF-1α via hypoxia-response elements (HREs) in its promoter — mechanism established in VHL-deficient RCC (Staller et al. Nature 2003, PMID 13679920)",
      "CXCR4/CXCL12 axis drives chemotactic migration toward CXCL12-rich metastatic niches (bone marrow, lung parenchyma, lymph nodes)",
      "CXCR4 signaling activates PI3K/AKT, MAPK/ERK, and JAK/STAT3 pathways to promote tumor cell survival and proliferation at metastatic sites",
      "SDHB-deficient paraganglioma/pheochromocytoma has high metastatic potential (~30–70% for SDHB) — CXCR4 upregulation via pseudohypoxia may contribute to metastatic organotropism",
      "Plerixafor (AMD3100) is a competitive CXCR4 antagonist that blocks CXCL12 binding and CXCR4-mediated chemotaxis, FDA-approved for stem cell mobilization (Mozobil)",
    ],
    druggable: true,
    display_order: 28,
  },
  {
    name: "HSP90-Dependent HIF Pseudohypoxic Proteome Stability",
    slug: "hsp90-hif-client-chaperone",
    description:
      "HIF-1α and HIF-2α are obligate HSP90 client proteins: HSP90 maintains HIF-α subunits in a stable, VHL-competent conformation under normoxia and in an active, transcription-competent conformation under hypoxia. In SDH-deficient tumors, constitutive PHD inhibition by accumulated succinate drives permanent HIF-α stabilization, creating an absolute cellular dependence on HSP90 chaperone activity to maintain the hyperactive pseudohypoxic transcriptome. HSP90 inhibition at sufficient doses disrupts HIF-1α/2α conformation, directing these client proteins to proteasomal degradation independently of VHL, collapsing the SDH-loss-driven pseudohypoxic gene expression program.",
    upstream_event:
      "SDH loss → succinate accumulation → PHD2/PHD3 inhibition → VHL-independent HIF-1α/2α stabilization → constitutive pseudohypoxic transcription → HSP90 required to maintain HIF-α client proteins in active conformation → tumor HSP90 chaperone dependency for pseudohypoxic proteome maintenance",
    downstream_effects: [
      "HIF-1α and HIF-2α are obligate HSP90 client proteins; HSP90 inhibition routes HIF-α to proteasomal degradation via an alternative ubiquitin ligase pathway independent of VHL",
      "High-dose HSP90 inhibition reduces HIF-1α protein levels and suppresses HIF target gene transcription (VEGF, GLUT1, LDHA, CAIX)",
      "Ganetespib (STA-9090), a second-generation non-ansamycin HSP90 inhibitor, achieves HIF-1α client degradation without the hepatotoxicity of first-generation agents",
      "HSP90 inhibition in SDH-deficient cells disrupts the constitutively activated pseudohypoxic proteome that drives tumor growth and metastatic potential",
      "Caution: low-dose HSP90 inhibition can paradoxically increase HIF-1α by impairing VHL-binding competency; anti-tumor effect requires doses sufficient to trigger proteasomal client degradation",
      "NCT01039519 (Phase 2 ganetespib in refractory GIST, n=27, completed) provides the most direct clinical anchor for this mechanism in GIST",
    ],
    druggable: true,
    display_order: 29,
  },
  {
    name: "Cuproptosis via Lipoylation-mtFAS Vulnerability",
    slug: "cuproptosis-lipoylation-mtfas",
    description:
      "SDH loss constitutively upregulates FASN-dependent lipid synthesis (Rodríguez-Flores et al. Cancer Res 2026, PMID 41520938); FASN supplies mitochondrial fatty acid synthesis (mtFAS) with octanoyl-ACP, the obligate precursor for lipoic acid biosynthesis. Elevated lipoic acid synthesis increases the lipoylated pool of TCA cycle proteins (DLAT, DLST). Copper ionophores (elesclomol) deliver Cu²⁺ intracellularly; FDX1 (ferredoxin-1) reduces Cu²⁺ → Cu⁺, which directly attacks lipoylated TCA proteins, triggering proteotoxic aggregation and cell death via cuproptosis (Tsvetkov et al. Science 2022, PMID 35588000). SDH-deficient cells, with constitutively elevated lipoylated TCA proteins via the FASN→mtFAS→lipoic acid chain, may be selectively vulnerable to copper ionophore-induced cuproptosis.",
    upstream_event:
      "SDH loss → succinate accumulation → FASN upregulation (PMID 41520938) → elevated FASN→mtFAS octanoyl-ACP flux → increased lipoic acid biosynthesis (LIPT1/LIPT2) → elevated lipoylated TCA proteins (DLAT, DLST) → heightened FDX1-mediated Cu⁺ attack sensitivity → cuproptosis",
    downstream_effects: [
      "FDX1 reduces Cu²⁺ → Cu⁺; Cu⁺ directly attacks lipoylated DLAT and DLST, causing toxic aggregation and proteotoxic cell death (Tsvetkov et al. Science 2022, PMID 35588000)",
      "Elesclomol (STA-4783) is a copper ionophore that shuttles Cu²⁺ across the plasma membrane to mitochondrial FDX1, inducing cuproptosis",
      "FDX1 expression level is the primary determinant of cuproptosis sensitivity; lipoylated-DLAT aggregation is the proximal cytotoxic event",
      "SDH-deficient cells exhibit FASN dependency (PMID 41520938); the FASN→mtFAS→lipoic acid flux elevation predicts an elevated lipoylated DLAT/DLST substrate pool that lowers the cuproptosis threshold",
      "Cuproptosis is mechanistically distinct from apoptosis, ferroptosis, and necroptosis — cells resistant to conventional cell death may retain cuproptosis sensitivity",
      "Phase I/II clinical context for elesclomol: NCT04710888 (advanced mesothelioma, FDX1-high tumors) establishes tolerability and dosing for the copper ionophore class",
    ],
    druggable: true,
    display_order: 30,
  },
  {
    name: "Reductive Carboxylation / ACLY Bottleneck",
    slug: "reductive-carboxylation",
    description:
      "With SDH (Complex II) inactivated, SDH-deficient cells cannot synthesize citrate via the forward TCA cycle. Instead, they run IDH reactions in reverse — reductive carboxylation — using glutamine-derived α-ketoglutarate to generate isocitrate and then citrate. This reductively generated citrate is exported to the cytoplasm and cleaved by ATP-citrate lyase (ACLY) into acetyl-CoA and oxaloacetate. ACLY therefore acts as the obligate bottleneck enzyme converting the products of reductive carboxylation into biosynthetic substrates. This was established by 13C isotopic tracing in tumor cells with ETC-complex defects and fumarate hydratase mutations (Mullen et al., Nature 2012, PMID 22101431).",
    upstream_event:
      "SDH loss (Complex II inactivation) → forward TCA citrate synthesis blocked → glutamine-dependent reductive carboxylation via reverse IDH1/2 → cytosolic citrate → ACLY cleavage to acetyl-CoA + oxaloacetate",
    downstream_effects: [
      "Acetyl-CoA production for de novo fatty acid synthesis (FASN/ACC) and histone acetylation",
      "Oxaloacetate for aspartate synthesis and gluconeogenic intermediates",
      "Selective dependency on ACLY as the obligate bottleneck of the alternative biosynthetic route",
      "SDH-deficient cells disproportionately vulnerable to ACLY inhibition compared to normal cells using forward TCA",
      "ACLY inhibition by bempedoic acid cuts acetyl-CoA supply at the reductive carboxylation node",
    ],
    druggable: true,
    display_order: 31,
  },
  {
    name: "HIF-Driven IGF2/IGF1R Autocrine Growth Loop",
    slug: "hif-igf2-igf1r-growth-signaling",
    description:
      "SDH loss constitutively activates HIF-1α/2α pseudohypoxia and drives CIMP DNA hypermethylation — two independent mechanisms that both upregulate IGF2 (insulin-like growth factor 2), creating an autocrine/paracrine growth loop via IGF1R and IR-A. IGF2 is among the most uniformly overexpressed transcripts in pseudohypoxic pheochromocytoma/paraganglioma (100% overexpression in PCC in one cohort: Nielsen et al. Endocr Relat Cancer 2015, PMID 26400872). This IGF1R-driven mitogenic and survival axis is pharmacologically targetable by linsitinib (OSI-906), a dual IGF1R/insulin receptor inhibitor.",
    upstream_event:
      "SDH loss → succinate → (1) PHD inhibition → HIF-1α/2α constitutive stabilisation → hypoxia-response element (HRE)-driven IGF2 transcriptional induction; AND (2) succinate → TET1/2/3 inhibition → CIMP epigenetic silencing → H19 imprinting control region (ICR) hypermethylation → loss of genomic imprinting → biallelic IGF2 expression → massive IGF2 protein secretion → IGF1R and IR-A receptor activation → PI3K/AKT/mTOR and MAPK/ERK proliferative and survival signalling",
    downstream_effects: [
      "HIF-1α/2α constitutively transcribes IGF2 via hypoxia-response elements (HREs) in the IGF2 promoter — the same pseudohypoxic mechanism that drives VEGF, CAIX, and GLUT1 in SDH-deficient tumours",
      "CIMP-driven methylation of the H19 imprinting control region (ICR) silences the H19 non-coding RNA repressor, de-repressing the adjacent IGF2 locus on the normally silent maternal allele (loss of imprinting → biallelic IGF2 expression; Nielsen et al. Endocr Relat Cancer 2015, PMID 26400872)",
      "IGF2 overexpression is near-universal in pheochromocytomas (100% in a 10-PCC cohort; Nielsen et al. 2015, PMID 26400872) and elevated in adrenocortical carcinoma, the closest analogue with the same IGF2-driven mechanism",
      "IGF2 binds IGF1R (high affinity) and IR-A (isoform expressed in foetal/cancer tissue) → receptor autophosphorylation → IRS1/IRS2 docking → PI3K/AKT/mTOR activation (converging with Mechanism 4) and MAPK/ERK proliferative signalling",
      "Linsitinib (OSI-906) is an ATP-competitive dual inhibitor of IGF1R kinase (IC50 ~35 nM) and IR (IC50 ~75 nM); it was advanced to a Phase 3 randomised controlled trial (NCT00924989) in IGF2-overexpressing adrenocortical carcinoma, establishing clinical-stage pharmacology and tolerability data directly in an IGF2-driven tumour",
      "Downstream PI3K/AKT/mTOR engagement creates rationale for combination with mTOR inhibitors (everolimus, Mechanism 4) or AKT inhibitors (capivasertib, Mechanism 27) — IGF1R inhibition could prevent feedback AKT re-activation seen with mTOR monotherapy",
    ],
    druggable: true,
    display_order: 32,
  },
  {
    name: "HIF-Driven CD73/Adenosine Immunosuppression",
    slug: "hif-cd73-adenosine-immunosuppression",
    description:
      "Constitutive HIF-1α stabilization in SDH-deficient tumors transcriptionally activates NT5E (CD73), a cell-surface ecto-5'-nucleotidase, via a canonical hypoxia-response element in the NT5E promoter. CD73 converts extracellular AMP to adenosine, which accumulates in the tumor microenvironment and binds A2A and A2B receptors on infiltrating T cells and NK cells. A2A/A2B signaling elevates cAMP and suppresses effector T-cell activation, IFN-γ secretion, and cytotoxic function — a third, mechanistically distinct immune-evasion arm complementary to the succinate-MCT1, IDO1, and PD-L1 axes.",
    upstream_event:
      "SDH loss → succinate accumulation → PHD inhibition → constitutive HIF-1α stabilization → HRE-driven NT5E/CD73 transcriptional activation → CD73-catalyzed extracellular AMP → adenosine",
    downstream_effects: [
      "NT5E/CD73 upregulation on tumor cells via HIF-1α binding to hypoxia-response element (HRE) in the NT5E promoter",
      "Elevated extracellular adenosine in the tumor microenvironment",
      "Adenosine → A2A/A2B receptor activation on CD4+/CD8+ T cells and NK cells → cAMP/PKA elevation → effector function suppression",
      "IFN-γ secretion, TCR signaling, and cytotoxic T-cell degranulation suppressed",
      "Anti-CD73 antibodies (oleclumab/MEDI9447) block CD73 enzymatic activity, reducing adenosine production",
    ],
    druggable: true,
    display_order: 33,
  },
  {
    name: "One-Carbon Folate / Nucleotide Synthesis Dependency (MTHFD2)",
    slug: "one-carbon-folate-nucleotide-synthesis",
    description:
      "Unvalidated research hypothesis: metabolic stress after SDH loss may create a one-carbon metabolism vulnerability. SDH-specific MTHFD2 dependency is not established by the sources checked for the October 7 drug-identity correction. The former LY3410738 pairing was incorrect: LY3410738 inhibits mutant IDH1/IDH2, not MTHFD2/MTHFD1L (PMID 41026608; NCT04521686). TH9619 is a verified MTHFD1/2 biochemical inhibitor and clinical-stage research lead, but cellular mitochondrial MTHFD2 inhibition was not observed in the primary cancer study (PMID 37012496). SDH-specific TH9619 sensitivity remains unvalidated; drug identity is not proof of this dependency.",
    upstream_event:
      "Hypothesis only: SDH loss and metabolic stress may alter one-carbon metabolism; the proposed MTHFD2 dependency requires direct SDH-specific validation.",
    downstream_effects: [
      "SDH-specific MTHFD2 upregulation and selective inhibitor sensitivity remain unresolved",
      "LY3410738 must not be used as an MTHFD2 inhibitor or evidence for this pathway",
    ],
    druggable: false,
    display_order: 34,
  },
  {
    name: "G-Quadruplex DNA Stabilization — BRCAness Synthetic Lethality",
    slug: "g4-quadruplex-brcas-lethality",
    description:
      "G-quadruplex (G4) DNA structures form at guanine-rich sequences genome-wide — at telomeres, gene promoters, replication origins, and non-B-DNA sites — during transcription and replication. CX-5461 stabilizes G4 DNA, blocking replication fork progression and inducing DNA strand breaks that require BRCA-mediated homologous recombination (HR) for repair (Xu et al., Nat Commun 2017, PMID 28211448). In SDH-deficient tumors, succinate accumulation inhibits KDM4A and KDM4B histone demethylases at double-strand break sites, impairs TIP60 acetyltransferase and ATM kinase recruitment, and establishes constitutive HR deficiency (BRCAness) independently of BRCA1/2 mutation status (Sulkowski et al., Nat Genet 2018, PMID 30013182; Nature 2020, PMID 32494005). This BRCAness renders SDH-deficient cells unable to repair G4-induced DNA damage, creating synthetic lethality. In ATRX-null/ALT-positive SDHB-metastatic PPGL (~30–40% of metastatic cases), ATRX loss independently elevates the G4 burden at telomeric and non-telomeric chromatin, amplifying CX-5461 sensitivity beyond the BRCAness baseline.",
    upstream_event:
      "SDH loss → succinate accumulation → competitive inhibition of α-KG-dependent KDM4A/KDM4B histone demethylases → H3K9me3 persistence at DSB sites → impaired TIP60/ATM → HR deficiency (BRCAness); CX-5461 stabilizes G4 DNA → stalled replication forks → DSBs → BRCAness-selective lethality; amplified in ATRX-null/ALT cells by elevated baseline G4 burden",
    downstream_effects: [
      "CX-5461 stabilizes G-quadruplex DNA structures genome-wide, blocking replication fork progression and generating single-stranded DNA gaps and DSBs",
      "Resulting DNA damage requires BRCA1/2-mediated HR for repair; SDH-deficient BRCAness cells cannot execute HR → selective cytotoxicity",
      "Xu et al. 2017 (PMID 28211448) demonstrated CX-5461 selectivity in BRCA1/2-deficient patient-derived xenograft models, including tumours resistant to PARP inhibition — establishing a mechanistic distinction from PARP inhibitors",
      "ATRX-null/ALT SDHB-metastatic PPGL (~30–40% of metastatic cases) carries elevated G4 burden from ATRX-mediated G4 resolution failure, predicted to amplify CX-5461 sensitivity beyond BRCAness alone",
      "Non-redundant with PARP inhibitors (olaparib/niraparib), DNA-PKcs inhibitors (elimusertib), CHK1 inhibitors (prexasertib), or POLQ inhibitors (ART558) — G4 stabilization generates the upstream DSB load rather than preventing its resolution",
      "Phase 1 NCT02719977 (BRCA1/2-deficient hematologic malignancies) and Phase 1b NCT03914288 (BRCA1/2-mutated solid tumours) establish CX-5461 clinical pharmacology in the BRCAness patient population",
    ],
    druggable: true,
    display_order: 35,
  },
  {
    name: "CDK9 / P-TEFb Super-Enhancer Transcription Elongation",
    slug: "cdk9-super-enhancer-elongation",
    description:
      "SDH loss in GIST drives CIMP (CpG island methylator phenotype) via succinate-mediated TET inhibition. CIMP-driven methylation of CTCF insulator sequences disrupts chromatin boundaries, enabling the formation of an ectopic FGF3/FGF4 super-enhancer — directly established by Merriam et al. in SDH-deficient GIST (Nat Med 2026, PMID 42191879). Active super-enhancers are dependent on CDK9 (cyclin-dependent kinase 9), the catalytic subunit of the positive transcription elongation factor b (P-TEFb). CDK9 phosphorylates Ser2 of the RNA polymerase II C-terminal domain (CTD), releasing Pol II from promoter-proximal pausing (held by DSIF/NELF) and enabling productive transcriptional elongation. At super-enhancers — densely clustered transcription factor and Mediator binding regions marked by high H3K27ac — CDK9-mediated Pol II CTD Ser2 phosphorylation is rate-limiting for transcription of SDH-deficient-GIST-specific oncogenes driven from the ectopic super-enhancer. BRD4 (inhibited by BET inhibitors, already in the engine) reads H3K27ac and recruits P-TEFb/CDK9 to super-enhancers; CDK9 inhibition therefore acts downstream of BRD4 on the same super-enhancer axis but at the elongation kinase step rather than the chromatin reader step — pharmacologically distinct and non-redundant.",
    upstream_event:
      "SDH loss → succinate → TET inhibition → CIMP → CTCF insulator methylation → chromatin boundary disruption → ectopic FGF3/FGF4 super-enhancer (Merriam Nat Med 2026, PMID 42191879) → BRD4-recruited CDK9/P-TEFb → Pol II CTD Ser2 phosphorylation → transcriptional elongation of SE-driven oncogenes",
    downstream_effects: [
      "CDK9 phosphorylates Ser2 of the RNA Pol II CTD heptapeptide repeat, releasing Pol II from promoter-proximal pause (DSIF/NELF-mediated) and enabling elongation through gene bodies",
      "Super-enhancer-driven oncogene transcription (including FGF3/FGF4 and other SE-associated genes in SDH-deficient GIST) is disproportionately sensitive to CDK9 inhibition relative to constitutively transcribed housekeeping genes",
      "CDK9/P-TEFb is directly recruited to super-enhancers by BRD4 (via its BRD4 interaction domain on Cyclin T1), creating a hierarchical dependency: CIMP → SE formation → BRD4 → CDK9 → SE gene elongation",
      "CDK9 inhibition produces selective transcriptional downregulation of high-output SE-driven genes (including MCL1, MYC, and tumor-specific SE-activated oncogenes) versus housekeeping genes — the mechanistic basis for therapeutic window",
      "BRD4 inhibitors (already in engine) block CDK9 recruitment; CDK9 inhibitors block CDK9 kinase activity directly — orthogonal pharmacological nodes on the same elongation axis",
    ],
    druggable: true,
    display_order: 36,
  },
  {
    name: "CBP/p300 HAT Co-Activator",
    slug: "cbp-p300-hat-coactivator",
    description:
      "HIF-1α and HIF-2α require CBP (CREBBP) and p300 (EP300) as obligate transcriptional co-activators. In SDH-deficient pseudohypoxic tumors, constitutively stabilized HIF-α subunits recruit CBP/p300 via the HIF C-TAD domain (Arany et al. PNAS 1996, PMID 8917528). p300/CBP then write H3K27ac marks at HIF target gene promoters and at ectopic super-enhancers — as demonstrated at the FGF3/FGF4 locus in SDH-deficient GIST (Merriam et al. Nat Med 2026, PMID 42191879). Blocking the p300/CBP bromodomain prevents co-activator recruitment to HIF-α C-TAD and collapses the SDH-loss-driven HIF transcriptome, including VEGF, CXCR4, PD-L1, BIRC5, and IGF2.",
    upstream_event:
      "SDH loss → succinate → PHD inhibition → HIF-1α/2α stabilization → HIF C-TAD domain recruits CBP/p300 bromodomain → p300/CBP HAT domain writes H3K27ac at HIF target promoters and super-enhancers",
    downstream_effects: [
      "H3K27ac deposition at HIF target gene promoters (VEGF, CXCR4, PD-L1, BIRC5, IGF2)",
      "Super-enhancer maintenance at ectopic HIF-activated loci (e.g. FGF3/FGF4 in SDH-deficient GIST, PMID 42191879)",
      "CBP/p300 bromodomain inhibition displaces HIF co-activator complex → transcriptional shutdown of HIF-driven genes",
      "Mechanistically distinct from BRD4/BET (H3K27ac reader) and EZH2 (H3K27me3 writer) — inhibits the H3K27ac writer step",
      "HIF co-activator dependency is universal across SDH-deficient tumor types (GIST, PPGL, RCC)",
    ],
    druggable: true,
    display_order: 37,
  },
  {
    name: "HIF→CA9 Tumour pH Regulation",
    slug: "hif-ca9-ph-regulation",
    description:
      "SDH-deficient cells constitutively activate HIF-1α and HIF-2α via the pseudohypoxia pathway. One of the direct HIF transcriptional targets is Carbonic Anhydrase IX (CA9/CAIX) — Wykoff et al. (Cancer Res 2000, PMID 11156414) identified a HIF-1-dependent hypoxia-response element (HRE) in the CA9 minimal promoter and showed that CA9 is among the most tightly HIF-regulated genes in tumour cells. CA9 is a transmembrane metalloenzyme (UniProt Q16790) that catalyses the reversible hydration of CO₂ to H⁺ and HCO₃⁻ (CO₂ + H₂O ⇌ H⁺ + HCO₃⁻). The extracellular-facing active site releases H⁺ into the tumour microenvironment, creating a low extracellular pH (pHe ~6.5–6.9) while bicarbonate is imported to buffer intracellular pH. This enforced reverse pH gradient — acid outside, near-neutral inside — promotes invasion (via acid-activated cathepsins and matrix metalloproteinases), immune evasion (acidic TME suppresses T-cell cytotoxicity), and multidrug resistance (weakly basic drugs trapped in acidic extracellular space). CAIX membranous staining is detected in SDHx/VHL-related pseudohypoxic PPGLs (Mete et al. Am J Surg Pathol 2021, PMID 33826547).",
    upstream_event:
      "SDH loss → succinate accumulation → competitive PHD2/PHD3 inhibition → constitutive HIF-1α/2α stabilisation → HRE-driven CA9 transcription → transmembrane CA9 protein expression → extracellular CO₂ → H⁺ + HCO₃⁻ catalysis → tumour acidosis",
    downstream_effects: [
      "Extracellular acidification (pHe 6.5–6.9) activates matrix metalloproteinases and cathepsins → enhanced local invasion and basement membrane degradation",
      "Acidic TME suppresses CD8⁺ T-cell cytolytic function and NK cell activity → immune evasion",
      "Reverse pH gradient traps weakly basic chemotherapeutics in extracellular space (protonated, membrane-impermeant form) → reduced intracellular drug accumulation → multidrug resistance",
      "CA9 inhibition by SLC-0111 (WBI-5111) restores extracellular pH homeostasis and sensitises tumours to immune effector cells",
      "SLC-0111 completed Phase 1 monotherapy safety/PK study in solid tumours (NCT02215850) and Phase 1b/2 combination with gemcitabine in CAIX-positive pancreatic adenocarcinoma (NCT03450018)",
    ],
    druggable: true,
    display_order: 38,
  },
  {
    name: "Aurora A Kinase / HIF Transcriptional Amplification",
    slug: "aurora-kinase-hif-feedback",
    description:
      "Nuclear Aurora A kinase (AURKA) directly binds HIF1β (ARNT — the constitutively expressed HIF dimerization partner) and co-activates transcription of HIF target genes under normoxic conditions, independently of HIF1α protein stabilization. Whately et al. (Oncogene 2021, PMID 34326467) demonstrated that nuclear AURKA recruits CBP/p300 coactivators and TFIIB/RNA Pol II to HRE-containing promoters, driving HIF-dependent gene expression without elevating HIF1α protein. In SDH-deficient tumors, where succinate-mediated PHD inhibition already constitutively stabilizes HIF1α/2α, AURKA overexpression adds a second, independent HIF co-activation signal that amplifies the pseudohypoxic transcriptional program. AURKA also stabilizes MYCN protein in neuroendocrine-lineage tumors by preventing FBXW7-mediated proteasomal degradation — relevant to PPGL. Alisertib (MLN8237) is an oral selective AURKA inhibitor with Phase 2 clinical data in neuroendocrine tumors (NCT01799278).",
    upstream_event:
      "SDH loss → constitutive pseudohypoxia (succinate → PHD inhibition → HIF1α/2α stabilization) PLUS AURKA overexpression → nuclear AURKA directly binds HIF1β (ARNT) on HRE-containing promoters → CBP/p300 and TFIIB/RNA Pol II recruitment → amplified HIF target gene transcription independent of HIF1α levels; secondary axis: AURKA phosphorylates MYCN Thr58, blocking FBXW7-mediated proteasomal degradation and stabilizing MYCN in neural crest-lineage PPGL cells",
    downstream_effects: [
      "Nuclear AURKA binds HIF1β (ARNT) and co-activates transcription of HIF target genes (VEGFA, survival/invasion genes, stemness factors) without requiring elevated HIF1α protein (Whately et al. Oncogene 2021, PMID 34326467)",
      "AURKA-HIF1β complex recruits CBP, p300, and TFIIB/RNA Pol II components, forming a transcriptionally active complex on HRE-containing promoters confirmed by mass spectrometry",
      "In SDH-deficient tumors, both HIF arms are simultaneously active: canonical HIF1α/2α stabilization (succinate-PHD inhibition) AND AURKA-HIF1β co-activation — dual convergent HIF transcription",
      "AURKA stabilizes MYCN protein by phosphorylating Thr58, preventing FBXW7 ubiquitin ligase recognition and proteasomal degradation — relevant to neural crest chromaffin-lineage PPGL",
      "Alisertib (MLN8237) is an oral selective AURKA inhibitor (IC50 1.2 nM AURKA vs 396 nM AURKB; >300-fold selectivity); Phase 2 data in neuroendocrine tumors (NCT01799278, n=60, completed with results)",
    ],
    druggable: true,
    display_order: 39,
  },
  {
    name: "HIF→CD47 Phagocytosis Evasion",
    slug: "hif-cd47-phagocytosis-evasion",
    description:
      "SDH-deficient cells constitutively activate HIF-1α and HIF-2α via the pseudohypoxia pathway (succinate → PHD2/PHD3 inhibition → HIF-α stabilisation). Samanta et al. (PNAS 2018, PMID 29367423) reported, in chemotherapy-enriched triple-negative breast cancer cells (a non-SDH model), that HIF-1α simultaneously co-induces three immune-checkpoint/evasion genes — CD73 (NT5E), CD47, and CD274 (PD-L1) — via canonical hypoxia-response elements (HREs) in their respective promoters. CD47 (Integrin-Associated Protein; UniProt Q08722) is a ubiquitously expressed 'don't eat me' signal: its extracellular domain engages SIRPα (CD172a) on tumour-associated macrophages (TAMs) and tumour-associated neutrophils, triggering SIRPα ITIM phosphorylation, SHP-1/SHP-2 phosphatase recruitment, and myosin IIA dephosphorylation — collectively preventing the cytoskeletal reorganisation required for phagocytosis. In SDH-deficient tumours, constitutive pseudohypoxic HIF-1α activity is predicted to drive constitutive CD47 overexpression on the tumour cell surface, delivering a chronic, oxygen-independent anti-phagocytic signal that shields tumour cells from macrophage and neutrophil innate immune surveillance. This is mechanistically distinct from all T-cell adaptive immune axes (PD-1, LAG-3), metabolic suppression of T-cells (adenosine, IDO1, succinate direct suppression), and the innate cGAS-STING pathway — it is the first myeloid phagocytosis-checkpoint direction in this engine.",
    upstream_event:
      "SDH loss → succinate accumulation → competitive PHD2/PHD3 prolyl hydroxylase inhibition → constitutive VHL-independent HIF-1α/2α stabilisation → HIF-1α binding to HRE in CD47 promoter (Samanta et al. PNAS 2018, PMID 29367423) → constitutive CD47 mRNA and protein overexpression on tumour cell surface → CD47 extracellular domain engages SIRPα (CD172a) ITIM receptor on tumour-associated macrophages and tumour-associated neutrophils → SIRPα ITIM tyrosine phosphorylation → SHP-1 and SHP-2 phosphatase recruitment → myosin IIA dephosphorylation → impaired actin-myosin cytoskeletal reorganisation → anti-phagocytic 'don't eat me' signal → macrophage and neutrophil phagocytosis escape",
    downstream_effects: [
      "Constitutive HIF-1α binding to the CD47 gene HRE drives oxygen-independent CD47 overexpression in SDH-deficient pseudohypoxic tumour cells (mechanistic basis: PMID 29367423)",
      "CD47-SIRPα ligation on tumour-associated macrophages (TAMs) delivers ITIM-mediated co-inhibitory signal → SHP-1/SHP-2 recruitment → myosin IIA dephosphorylation → impaired phagosome formation → phagocytosis escape",
      "High CD47 expression correlates with poor prognosis and immune evasion in multiple solid tumour types; CD47 acts as a 'do not eat me' marker enabling tumour cell immune surveillance escape from innate myeloid cells",
      "Magrolimab (Hu5F9-G4; Gilead) is an anti-CD47 IgG4 monoclonal antibody that blocks CD47-SIRPα interactions, eliminating the anti-phagocytic signal and permitting macrophage-mediated phagocytosis; Phase 1b data in solid tumours available (NCT02216409)",
      "CD47 blockade combined with tumour-opsonising antibodies (rituximab, cetuximab, trastuzumab) produces synergistic macrophage phagocytosis via simultaneous SIRPα de-inhibition (magrolimab) and Fcγ receptor activation (Fc-bearing opsonins)",
    ],
    druggable: true,
    display_order: 41,
  },
  {
    name: "Succinate → T-Cell Exhaustion / LAG-3 Checkpoint",
    slug: "succinate-lag3-exhaustion",
    description:
      "Extracellular succinate accumulation in the SDH-deficient tumor microenvironment (TME) directly suppresses T-cell function and can promote T-cell exhaustion, which is hypothesised (not shown in the cited work) to drive upregulation of inhibitory checkpoint receptors including LAG-3 (Lymphocyte Activation Gene 3) on tumor-infiltrating CD8⁺ T cells. LAG-3 binds MHC-II on antigen-presenting cells with higher affinity than CD4, and ligation of LAG-3 on exhausted TILs delivers a co-inhibitory signal that arrests T-cell effector programs. Relatlimab, an FDA-approved anti-LAG-3 monoclonal antibody (Opdualag, with nivolumab), targets this exhaustion-driven checkpoint.",
    upstream_event:
      "SDH loss → succinate accumulation → T-cell functional suppression and exhaustion in immunosuppressive TME (Gudgeon et al. Cell Rep 2022, PMID 35977513; Pfefer T et al., Immunol Lett 2026 review, PMID 41724335) → (inferred, untested) LAG-3 upregulation on exhausted TILs",
    downstream_effects: [
      "Extracellular succinate directly suppresses CD8⁺ T-cell cytolytic function in the TME (PMID 35977513)",
      "Succinate can promote T-cell exhaustion (PMID 41724335, review); LAG-3 upregulation in this setting is an inference, not shown in the cited work",
      "LAG-3 on exhausted TILs binds MHC-II on tumor cells and APCs, delivering co-inhibitory signals that reinforce the exhausted phenotype and impair TCR-proximal signaling",
      "Anti-LAG-3 blockade with relatlimab restores T-cell effector function in combination with PD-1 blockade (NCT03470922, RELATIVITY-047)",
    ],
    druggable: true,
    display_order: 40,
  },
  {
    name: "IDO1–Kynurenine–Treg–CTLA-4 Immunosuppression Axis",
    slug: "ido1-kynurenine-treg-ctla4",
    description:
      "SDH applicability is hypothetical. PMID 42230482 is Zhou et al.'s 2026 review of metastatic PPGL multi-omics, including aberrant kynurenine metabolism and immunosuppression, not primary confirmation of HIF-driven IDO1 overexpression or a CTLA-4/Treg dependency in SDHB tumors. The proposed SDH -> kynurenine -> Treg -> CTLA-4 chain needs direct validation. Ipilimumab blocks CTLA-4 interactions with CD80/CD86, augmenting T-cell activation; reduced Treg function may contribute (Yervoy prescribing information). Fc-dependent Treg depletion is supported in human-Fc-receptor mouse models (Arce Vargas et al., PMID 29576375), but human tumor studies found no significant FOXP3+ Treg depletion (Sharma et al., PMID 30054281). It must not be described as a proven dominant human mechanism or demonstrated in SDH-deficient tumors. DART (NCT02834013) includes GIST and pheochromocytoma/paraganglioma cohorts, but histology-based eligibility is not a dedicated SDH-deficient cohort or proof of benefit in that molecular subgroup. Final overall DART results are Patel et al., 2026, PMID 41997295; combination outcomes do not establish ipilimumab monotherapy efficacy.",
    upstream_event:
      "Hypothesis: SDH-associated metabolic and immune changes may affect kynurenine/Treg/CTLA-4 signaling; no direct SDH-specific CTLA-4 dependency is established here.",
    downstream_effects: [
      "CTLA-4 blockade can augment effector T-cell activation; SDH-specific sensitivity remains unresolved",
      "Fc-mediated Treg depletion is model-dependent and not established as a dominant human mechanism",
      "DART is a rare-tumor combination trial, not proof of SDH-specific benefit",
    ],
    druggable: true,
    display_order: 42,
  },
  {
    name: "CD155/PVR-TIGIT Immune Evasion (unvalidated SDH hypothesis)",
    slug: "hif-cd155-tigit-exhaustion",
    description: "Unvalidated SDH research hypothesis: succinate-associated pseudohypoxia might alter CD155/PVR expression and TIGIT checkpoint activity. Neither this chain nor selective benefit from TIGIT blockade is established in SDH-deficient cancers by the sources reviewed. No SDH-specific tiragolumab result was verified in this review. This is a research lead, not a treatment recommendation. Eskandari et al. (PMID 42160101, Effect of HIF-1\u03b1 and LDHA Blockade on Gene Expression of Tumor Immune Evasion in Myeloid Leukemia Cell Lines) treated HL-60 and K-562 leukemia cells with silibinin or sodium oxamate for 48 hours. Silibinin reduced CD155 mRNA in HL-60 but not K-562; sodium oxamate did not significantly change CD155 expression. The authors call these pharmacologically induced associations, not direct evidence of HIF-1\u03b1 or LDHA pathway blockade. They do not establish CD155 protein changes, immune-cell function, direct HIF-promoter binding or an SDH-specific dependency. Completed Phase 3 SKYSCRAPER-01 (NCT04294810) tested tiragolumab plus atezolizumab against placebo plus atezolizumab in previously untreated PD-L1-high advanced NSCLC. The final publication (PMID 42507968, J Clin Oncol 2026) reported no statistically significant progression-free or overall survival benefit under the study criteria. Combination results do not establish tiragolumab monotherapy benefit or SDH-specific efficacy.",
    upstream_event: "Hypothesis only: SDH-associated pseudohypoxia may alter CD155/PVR expression; causality and TIGIT dependency require direct SDH-specific testing.",
    downstream_effects: [
      "TIGIT is an inhibitory receptor that interacts with CD155/PVR; tiragolumab binds TIGIT and blocks this interaction (RCSB 8JEO)",
      "Leukemia-cell CD155 mRNA changes after silibinin do not establish HIF-driven CD155 expression or immune exhaustion in SDH tumors",
      "SDH-specific ligand expression, functional immune effects and benefit from TIGIT blockade remain unresolved",
    ],
    druggable: false,
    display_order: 43,
  },
  {
    name: "SDHB/C/D Loss → Elevated ROS → Thioredoxin System Dependency",
    slug: "sdhb-ros-txnrd1-antioxidant",
    description:
      "SDHB (and by extension SDHC/SDHD) loss disrupts electron flow through mitochondrial Complex II, causing normoxic superoxide and H₂O₂ elevation directly demonstrated in SDHB-knockdown cancer cells (Guzy et al., Mol Cell Biol 2008, PMID 17967865). In contrast, isolated SDHA loss causes bioenergetic deficiency without the same ROS signature. Elevated ROS activates the NRF2/KEAP1 antioxidant response, upregulating the thioredoxin system — specifically TXNRD1 (thioredoxin reductase 1) and peroxiredoxins — to maintain redox homeostasis. SDHB/C/D-deficient cells are therefore more dependent on TXNRD1 as a survival enzyme. Auranofin (Ridaura; FDA-approved for rheumatoid arthritis) irreversibly inhibits TXNRD1 by reacting with the selenocysteine (Sec498) in the enzyme's C-terminal active site, blocking regeneration of reduced thioredoxin (TXN) from its oxidised form, impairing the entire peroxiredoxin ROS-scavenging axis, and causing selective apoptosis in cancer cells with elevated intrinsic oxidative stress.",
    upstream_event:
      "SDHB/C/D loss → disrupted Complex II electron flow → normoxic superoxide/H₂O₂ elevation (Guzy et al. Mol Cell Biol 2008, PMID 17967865) → KEAP1 cysteine oxidation → NRF2 nuclear translocation → constitutive TXNRD1 upregulation via ARE elements",
    downstream_effects: [
      "SDHB/C/D-deficient cancer cells have elevated normoxic ROS that drives HIF activation in a ROS-dependent manner, distinct from the succinate-PHD inhibition pathway (PMID 17967865); SDHA loss does not produce the same ROS signature",
      "NRF2-activated, TrxR1-elevated cancer cells are selectively killed by auranofin in vitro and in patient-derived xenograft models (Raninga et al. Mol Ther 2022, PMID 36560881)",
      "Auranofin plus GLS1 inhibition (CB-839/telaglenastat, already in engine) is synergistic in NRF2-high cancer models (PMID 36560881), suggesting a potential combination strategy in SDHB/C/D-deficient PPGL and RCC",
      "Mechanistically distinct from elesclomol/cuproptosis (FASN→mtFAS→lipoylated-proteins→FDX1 pathway) and from all HIF/immune/DNA-repair mechanisms in the engine",
    ],
    druggable: true,
    display_order: 44,
  },
  {
    name: "Succinate → TET2/3 Inhibition → CIMP → DNMT Inhibitor Reversal",
    slug: "succinate-tet-cimp-dnmt",
    description:
      "SDH loss causes succinate accumulation that competitively inhibits TET2 and TET3 (2-oxoglutarate-dependent dioxygenases responsible for 5-methylcytosine oxidation and active DNA demethylation), producing a CpG island methylator phenotype (CIMP) with genome-wide promoter hypermethylation and silencing of differentiation and tumour-suppressor genes. Letouzé et al. (Cancer Cell 2013, PMID 23707781) demonstrated this directly in SDH-deficient mouse chromaffin cells and a large PPGL cohort: SDHx-mutated tumours clustered into a distinct CIMP methylation group; succinate-driven TET inhibition established a migratory phenotype that was reversed by decitabine treatment.",
    upstream_event:
      "SDH loss → succinate accumulation → competitive inhibition of TET2/TET3 (2-OG-dependent dioxygenases) → failure of 5-methylcytosine oxidation to 5-hydroxymethylcytosine → impaired active DNA demethylation → DNMT1-perpetuated CpG island methylator phenotype (CIMP) (Letouzé et al. Cancer Cell 2013, PMID 23707781)",
    downstream_effects: [
      "SDHx-mutated PPGL cluster into a distinct CIMP methylation group separate from VHL-mutated and RET/NF1-mutated tumours; SDHB-mutated tumours show the most severe epigenetic silencing, potentially explaining their higher malignant risk (PMID 23707781)",
      "Decitabine treatment reversed the SDH-deficiency-driven migratory phenotype in SDH-deficient mouse chromaffin cells — direct experimental proof that DNMT inhibition can counteract SDH-loss-driven epigenetics in a disease-relevant model (PMID 23707781)",
      "Distinct from H3K27me3/EZH2 (PRC2 complex; already in engine as epigenetic-dysregulation), H3K9me3/KDM4 (sdh-driven-hrd), and H3K27ac/CBP/p300 (cbp-p300-hat-coactivator) axes; DNMT inhibition targets the DNA methylation layer non-redundantly",
      "Re-expression of silenced differentiation and antigen-presentation genes may synergise with immune checkpoint blockade in CIMP-high SDH-deficient tumours",
    ],
    druggable: true,
    display_order: 45,
  },
  {
    name: "SDH-Loss CoQ Oxidation → Ferroptosis Sensitization",
    slug: "sdh-coq-ferroptosis-sensitization",
    description:
      "Active SDH (Complex II) reduces coenzyme Q (CoQ/ubiquinone) to ubiquinol (CoQH₂), which redistributes to mitochondrial and plasma membranes to scavenge lipid reactive oxygen species (ROS) as a radical-trapping antioxidant — a key ferroptosis-resistance mechanism directly demonstrated by Jain et al. (Cell Metab 2026, PMID 42202783). SDH-DEFICIENT tumours cannot sustain this CoQ-reduction step, leaving the mitochondrial and plasma membrane CoQ pool more oxidised (ubiquinone-dominant), impairing ubiquinol-mediated lipid peroxide scavenging. These cells become more dependent on the complementary lipid ROS detox arm: SLC7A11 (xCT) imports cystine → intracellular cysteine → reduced glutathione (GSH) → GPX4 reduces lipid hydroperoxides → ferroptosis suppression. Blocking SLC7A11 with sulfasalazine removes this compensatory defence and triggers ferroptotic cell death selectively amplified in SDH-deficient cells whose CoQ-ubiquinol lipid ROS shield is already absent.",
    upstream_event:
      "SDH loss → inactive Complex II → CoQ not reduced to ubiquinol → mitochondrial and plasma membrane ubiquinol pool depleted → impaired lipid ROS radical-trapping (Jain C et al., Cell Metab 2026, PMID 42202783; Sun LJ & DeNicola GM, Cell Metab 2026, PMID 42551410); in SDHB/C/D-deficient tumours additionally: elevated normoxic ROS (Guzy RD et al., Mol Cell Biol 2008, PMID 17967865) further compounds lipid peroxide load",
    downstream_effects: [
      "SDH-deficient cells shift lipid ROS detox burden to the SLC7A11/GSH/GPX4 axis; SLC7A11 inhibition (sulfasalazine) blocks cystine import → GSH depletion → GPX4 failure → lipid peroxide accumulation → ferroptosis",
      "SDHB/C/D-deficient tumours (PPGL, SDH-deficient RCC, SDHB-deficient GIST) predicted to show the strongest ferroptosis sensitization: double impairment of lipid ROS defence (elevated lipid peroxides from SDHB/C/D-specific ROS + impaired CoQ-ubiquinol scavenging from SDH loss)",
      "SDHA-deficient GIST also loses CoQ-ubiquinol lipid ROS scavenging (SDH inactive) but without the SDHB/C/D-specific ROS elevation; SLC7A11 dependency still predicted, though with lower baseline lipid peroxide stress",
      "Mechanistically distinct from auranofin/TXNRD1 (thioredoxin reductase arm, Mechanism 56): auranofin targets the TXN/PRDX cytoplasmic H₂O₂ arm; sulfasalazine targets SLC7A11/GSH/GPX4 lipid peroxide arm — two independent redox defence axes",
    ],
    druggable: true,
    display_order: 46,
  },
  {
    name: "WEE1 / CDK1 G2-M Checkpoint (BRCAness Synthetic Lethality)",
    slug: "sdh-brcaness-wee1-g2m-checkpoint",
    description:
      "SDH loss drives succinate accumulation, which competitively inhibits the Jumonji-domain histone demethylase KDM4A/B (2-OG-dependent). KDM4A/B are required to demethylate H3K9me3 marks at sites of DNA double-strand breaks (DSBs), enabling assembly of the TIP60-ATM activation complex and downstream recruitment of BRCA1/RAD51 for homologous recombination (HR) repair. Succinate-mediated KDM4A/B inhibition → H3K9me3 accumulation at DSBs → TIP60/ATM blocked → BRCA1/RAD51 not recruited → HR deficiency (BRCAness). This was directly established by Guo et al. (Endocr Relat Cancer 2026, PMID 41711310) in isogenic SDHB-KO vs WT cell models. The resulting BRCAness creates cells with a chronic deficit in DSB repair that are heavily dependent on the WEE1 kinase–CDK1 G2/M checkpoint to delay mitotic entry and allow any available, slower repair to proceed. WEE1 phosphorylates CDK1 at Tyr15 (inhibitory), maintaining the G2/M checkpoint gate. Abrogating WEE1 with adavosertib (AZD1775) forces premature CDK1 activation → cells with unrepaired DSBs enter mitosis → mitotic catastrophe and cell death. This G2/M abrogation is selectively lethal in HR-deficient (BRCAness) contexts because HR-proficient cells can repair DSBs rapidly in G2 before mitotic checkpoint abrogation becomes lethal.",
    upstream_event:
      "SDH loss → succinate accumulation → competitive KDM4A/B inhibition → H3K9me3 at DSBs → TIP60/ATM/BRCA1/RAD51 recruitment blocked → HR deficiency (BRCAness) [Guo et al., Endocr Relat Cancer 2026, PMID 41711310] → chronic unrepaired DSBs → WEE1-CDK1 G2/M checkpoint dependency for cell viability",
    downstream_effects: [
      "WEE1 inhibition (adavosertib/AZD1775) → premature CDK1 Tyr15 dephosphorylation → unscheduled CDK1 activation → mitotic entry with unrepaired DSBs → mitotic catastrophe and apoptosis; selectively lethal in BRCAness/HR-deficient cells",
      "BRCAness in SDH-deficient tumours is mechanistically distinct from BRCA1/2 mutation-driven HRD: caused by H3K9me3 accumulation at DSB sites (epigenetic block) rather than protein truncation. However, downstream HR deficiency is functionally equivalent — predicts sensitivity to all HR-deficiency-exploiting strategies, including WEE1 inhibition",
      "Adavosertib + PARP inhibitor synergy predicted: WEE1i abrogates G2/M checkpoint (removes the repair window); PARPi blocks SSB-to-DSB repair (increases DSB load) — combined DSB load in a BRCAness background exceeds the mitotic catastrophe threshold at lower individual drug doses (Krajewska M et al., Oncogene 2013, PMID 22797065)",
      "Mechanistically distinct from CHK1/prexasertib (already in engine, sdh-chk1-brcas-replication-checkpoint): CHK1 inhibition abrogates S-phase and intra-S checkpoints (replication stress response); WEE1 inhibition abrogates the G2/M checkpoint specifically (pre-mitotic entry gate). Different cell-cycle phase, different mechanistic target, non-redundant therapeutic action",
    ],
    druggable: true,
    display_order: 47,
  },
  {
    name: "HIF-1α → Furin → TGF-β1 Immune Exclusion (TGFBR1/SMAD2-3 Axis)",
    slug: "hif-furin-tgfbeta-immunosuppression",
    description:
      "SDH loss → constitutive HIF-1α stabilization (pseudohypoxia) → HIF-1α transcriptionally drives furin proprotein convertase expression via a canonical hypoxia-response element (HRE) in the furin promoter → furin proteolytically cleaves latent pro-TGF-β1 into active TGF-β1 in the secretory pathway and at the cell surface → active TGF-β1 binds TGFBR2 → recruits and transphosphorylates TGFBR1 (ALK5) → TGFBR1 phosphorylates SMAD2/3 → SMAD2/3-SMAD4 complex translocates to nucleus → transcription of immune-exclusion and stromal-remodelling genes. Downstream consequences: CD8+ T-cell exclusion from the tumour core, Treg expansion, cancer-associated fibroblast (CAF) activation, TGF-β-driven EMT, and tumour immune privilege. Galunisertib (LY2157299), a selective TGFBR1 (ALK5) kinase inhibitor, blocks SMAD2/3 phosphorylation and interrupts the entire downstream programme.",
    upstream_event:
      "SDH loss → succinate → PHD inhibition → constitutive HIF-1α stabilization → HIF-1α binds HRE in furin promoter → furin overexpression → furin cleaves pro-TGF-β1 → active TGF-β1 → TGFBR2/TGFBR1 (ALK5) → SMAD2/3 phosphorylation → nuclear SMAD2/3-SMAD4 → immune-exclusion gene programme [McMahon et al., J Biol Chem 2005, PMID 15611046: direct demonstration of HIF-1α → furin via HRE and furin → active TGF-β1 in cancer cells under hypoxia]",
    downstream_effects: [
      "Active TGF-β1 → SMAD2/3 → transcription of CCL2, CCL5 in immunosuppressive configuration → CD8+ T-cell exclusion from tumour centre",
      "SMAD3 → FOXP3 promoter activation → Treg expansion → IL-10/TGF-β positive feedback loop maintaining immune privilege",
      "TGF-β1/SMAD → CAF activation → extracellular matrix remodelling → physical barrier to T-cell infiltration (stromal exclusion)",
      "SMAD2/3 → ZEB1/2, SNAI1 → epithelial-mesenchymal transition (EMT) markers, invasion, and metastatic potential",
      "Galunisertib (LY2157299; TGFBR1/ALK5 kinase inhibitor) blocks TGFBR1 kinase → prevents SMAD2/3 phosphorylation → abrogates entire downstream immune-exclusion programme",
    ],
    druggable: true,
    display_order: 48,
  },
  {
    name: "APE1/Ref-1 Redox Co-activation of HIF-1α (APEX1 Cys65 → HIF-1α Cys800 Reduction)",
    slug: "apex1-ref1-hif-redox-activation",
    description:
      "SDH loss → constitutive HIF-1α stabilisation (pseudohypoxia) → elevated nuclear HIF-1α requires Cys800 in the C-terminal transactivation domain (C-TAD) to be in the reduced thiol state for interaction with the co-activators CBP/p300; APE1/Ref-1 (APEX1) mediates this reduction via its redox function (Cys65), enabling HIF-1α-driven transcription. In SDH-deficient tumours, constitutive HIF-1α stabilisation creates a chronic dependency on APE1/Ref-1 redox activity to maintain HIF-1α transcriptional output. APX3330 (E3330) selectively inhibits APE1/Ref-1 redox function without affecting its DNA repair (BER) activity.",
    upstream_event:
      "SDH loss → succinate → PHD inhibition → constitutive HIF-1α stabilisation → HIF-1α C-TAD Cys800 requires reduction by APE1/Ref-1 (APEX1 Cys65 thioredoxin-like mechanism) → reduced HIF-1α Cys800 → interaction with CBP/p300 → HIF-1α target gene transcription [Gangwar P et al. Biochem Biophys Res Commun 2026, PMID 42476069: APE1/Ref-1 activates HIF-1α by mediating thiol reduction of Cys800]",
    downstream_effects: [
      "HIF-1α Cys800 reduction by APE1/Ref-1 → HIF-1α C-TAD/CBP-p300 interaction → transcription of VEGF, GLUT1, EPO, PDK1, and full HIF-1α target gene programme",
      "APX3330 (APE1/Ref-1 redox inhibitor) blocks Cys65-mediated reduction of HIF-1α Cys800 → C-TAD/CBP-p300 interaction lost → HIF-1α transcriptional output suppressed despite continued HIF-1α protein stabilisation",
      "APE1/Ref-1 redox function also activates AP-1 (FOS/JUN), NF-κB, STAT3, CREB, PAX-8 by reducing their cysteine residues → APX3330 broadly attenuates nuclear redox-regulated transcription",
      "SDH-deficient cells with constitutive HIF-1α show chronic dependence on APE1/Ref-1 redox co-activation → elevated APEX1 expression/activity creates a context-specific vulnerability to APX3330",
      "Synergy with elevated ROS in SDHB/C/D-deficient tumours (Guzy RD et al. Mol Cell Biol 2008, PMID 17967865): redox-stressed cells have elevated thioredoxin pathway demand → APX3330 blockade of APE1/Ref-1 hits a more critically loaded redox node",
    ],
    druggable: true,
    display_order: 49,
  },
];
