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
];
