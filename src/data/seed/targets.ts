import { Target } from "@/types/domain";

/**
 * Seed targets reference pathway slugs for linkage.
 * pathway_id will be resolved at seed time by matching slug.
 */
export type SeedTarget = Omit<Target, "id" | "pathway_id"> & {
  pathway_slug: string;
};

export const SEED_TARGETS: SeedTarget[] = [
  {
    gene_symbol: "HIF1A",
    name: "Hypoxia-inducible factor 1-alpha",
    uniprot_id: "Q16665",
    pathway_slug: "hif-pseudohypoxia",
    target_type: "direct",
    description:
      "Master transcription factor stabilized by PHD inhibition. Drives glycolytic shift and VEGF expression.",
  },
  {
    gene_symbol: "EPAS1",
    name: "Hypoxia-inducible factor 2-alpha (HIF-2α)",
    uniprot_id: "Q99814",
    pathway_slug: "hif-pseudohypoxia",
    target_type: "direct",
    description:
      "HIF-2α is the primary therapeutic target in pseudohypoxic tumors. Belzutifan (MK-6482) directly inhibits HIF-2α.",
  },
  {
    gene_symbol: "VEGFA",
    name: "Vascular endothelial growth factor A",
    uniprot_id: "P15692",
    pathway_slug: "vegf-signaling",
    target_type: "downstream",
    description:
      "Key HIF target gene driving tumor angiogenesis. Target of bevacizumab.",
  },
  {
    gene_symbol: "KDR",
    name: "VEGF receptor 2 (VEGFR2)",
    uniprot_id: "P35968",
    pathway_slug: "vegf-signaling",
    target_type: "downstream",
    description:
      "Primary VEGF receptor on endothelial cells. Target of sunitinib, regorafenib, and other multi-kinase inhibitors.",
  },
  {
    gene_symbol: "MTOR",
    name: "Mechanistic target of rapamycin",
    uniprot_id: "P42345",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Central growth/metabolism regulator activated downstream of SDH loss. Target of everolimus and temsirolimus.",
  },
  {
    gene_symbol: "PIK3CA",
    name: "PI3K catalytic subunit alpha",
    uniprot_id: "P42336",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Upstream kinase in PI3K/AKT/mTOR axis. Frequently activated in metabolically reprogrammed tumors.",
  },
  {
    gene_symbol: "GLS",
    name: "Glutaminase (kidney isoform)",
    uniprot_id: "O94925",
    pathway_slug: "glutamine-dependency",
    target_type: "metabolic",
    description:
      "Converts glutamine to glutamate for TCA anaplerosis. SDH-deficient cells are glutamine-addicted. Target of telaglenastat (CB-839).",
  },
  {
    gene_symbol: "DNMT1",
    name: "DNA methyltransferase 1",
    uniprot_id: "P26358",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "downstream",
    description:
      "Maintenance DNA methyltransferase. Contributes to hypermethylation phenotype. Target of azacitidine and decitabine.",
  },
  {
    gene_symbol: "DNMT3A",
    name: "DNA methyltransferase 3A",
    uniprot_id: "Q9Y6K1",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "downstream",
    description:
      "De novo DNA methyltransferase. Works with DNMT1 to establish aberrant methylation patterns.",
  },
  {
    gene_symbol: "TET2",
    name: "Tet methylcytosine dioxygenase 2",
    uniprot_id: "Q6N021",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "direct",
    description:
      "α-KG-dependent DNA demethylase directly inhibited by succinate. Its inhibition drives the CIMP phenotype.",
  },
  {
    gene_symbol: "IDH1",
    name: "Isocitrate dehydrogenase 1",
    uniprot_id: "O75874",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "metabolic",
    description:
      "Produces α-KG. IDH mutations produce 2-HG (oncometabolite analogous to succinate). Cross-pathway therapeutic insights.",
  },
  {
    gene_symbol: "LDHA",
    name: "Lactate dehydrogenase A",
    uniprot_id: "P00338",
    pathway_slug: "hif-pseudohypoxia",
    target_type: "downstream",
    description:
      "HIF target gene driving aerobic glycolysis (Warburg effect). Converts pyruvate to lactate.",
  },
  {
    gene_symbol: "PDK1",
    name: "Pyruvate dehydrogenase kinase 1",
    uniprot_id: "Q15118",
    pathway_slug: "hif-pseudohypoxia",
    target_type: "downstream",
    description:
      "HIF target that suppresses pyruvate entry into TCA cycle, reinforcing glycolytic shift. Target of dichloroacetate (DCA).",
  },
  {
    gene_symbol: "EGFR",
    name: "Epidermal growth factor receptor",
    uniprot_id: "P00533",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Growth factor receptor upstream of PI3K/AKT. May be activated in some SDH-deficient tumors.",
  },
  {
    gene_symbol: "KIT",
    name: "KIT proto-oncogene receptor tyrosine kinase",
    uniprot_id: "P10721",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Primary oncogene in most GISTs, but SDH-deficient GISTs typically have wild-type KIT. Some residual KIT signaling may persist.",
  },
  {
    gene_symbol: "PARP1",
    name: "Poly(ADP-ribose) polymerase 1",
    uniprot_id: "P09874",
    pathway_slug: "oxidative-stress-ros",
    target_type: "synthetic_lethal",
    description:
      "DNA repair enzyme activated by ROS-induced damage. PARP inhibition in ROS-elevated cells may cause synthetic lethality.",
  },
  {
    gene_symbol: "EZH2",
    name: "Enhancer of zeste homolog 2 (PRC2 catalytic subunit)",
    uniprot_id: "Q15910",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "synthetic_lethal",
    description:
      "Histone H3K27 methyltransferase and catalytic subunit of PRC2. Succinate inhibits KDM6A (UTX) and KDM6B (JMJD3), the H3K27me3-erasing demethylases, causing H3K27me3 accumulation in SDH-deficient tumors. EZH2 inhibition prevents further H3K27me3 deposition, potentially reactivating silenced differentiation and tumor suppressor programs. Target of tazemetostat.",
  },
  {
    gene_symbol: "BECN1",
    name: "Beclin-1",
    uniprot_id: "Q14457",
    pathway_slug: "autophagy-survival",
    target_type: "downstream",
    description:
      "Core autophagy initiation protein; part of the PIK3C3/VPS34 complex that nucleates autophagosomes. In SDH-deficient tumors, chronic metabolic stress from TCA disruption upregulates autophagy via BECN1. Lysosomal inhibitors (chloroquine, hydroxychloroquine) block the terminal step of autophagic flux, depriving tumor cells of this survival mechanism.",
  },
  {
    gene_symbol: "NAMPT",
    name: "Nicotinamide phosphoribosyltransferase",
    uniprot_id: "P43490",
    pathway_slug: "nad-metabolism",
    target_type: "metabolic",
    description:
      "Rate-limiting enzyme in the NAD⁺ salvage pathway; converts nicotinamide to NMN, the immediate NAD⁺ precursor. SDH-deficient cells with elevated PARP1 activity and impaired ETC-mediated NAD⁺ regeneration upregulate NAMPT as an adaptive survival response, creating a dependency exploitable by NAMPT inhibitors such as daporinad (FK866).",
  },
  {
    gene_symbol: "FGFR1",
    name: "Fibroblast growth factor receptor 1",
    uniprot_id: "P11362",
    pathway_slug: "fgfr-signaling",
    target_type: "downstream",
    description:
      "Receptor tyrosine kinase that mediates FGF3/FGF4 signaling. In SDH-deficient GIST, aberrant FGF3/FGF4 overexpression driven by DNA-hypermethylation-induced insulator disruption activates FGFR1 in an autocrine loop. Target of rogaratinib (pan-FGFR inhibitor) in the Phase 2 trial showing 41.7% ORR (Nat Med 2026, PMID 42191879).",
  },
  {
    gene_symbol: "FGFR2",
    name: "Fibroblast growth factor receptor 2",
    uniprot_id: "P21802",
    pathway_slug: "fgfr-signaling",
    target_type: "downstream",
    description:
      "Second FGFR subtype co-expressed in SDH-deficient tumors; pan-FGFR inhibitors including rogaratinib and erdafitinib target FGFR1-4. Inhibited by rogaratinib in the SDH-deficient GIST Phase 2 trial and by erdafitinib (FDA-approved pan-FGFR, urothelial carcinoma).",
  },
  {
    gene_symbol: "SAT1",
    name: "Spermidine/spermine N1-acetyltransferase 1",
    uniprot_id: "P21673",
    pathway_slug: "polyamine-metabolism",
    target_type: "metabolic",
    description:
      "Rate-limiting enzyme of polyamine catabolism and the principal intracellular target induced by polyamine analogues including DENSPM. SAT1 acetylates spermidine and spermine, targeting them for export or oxidation by polyamine oxidase (PAOX), thereby depleting intracellular polyamine pools. Elevated SSAT/SAT1 activity in response to DENSPM treatment drives further ROS generation via SMOX, creating a toxic cycle in SDH-deficient cells already under oxidative stress.",
  },
  {
    gene_symbol: "ODC1",
    name: "Ornithine decarboxylase 1",
    uniprot_id: "P11926",
    pathway_slug: "polyamine-metabolism",
    target_type: "metabolic",
    description:
      "Rate-limiting enzyme of polyamine biosynthesis, catalyzing the decarboxylation of ornithine to putrescine — the obligate precursor for spermidine and spermine. Eflornithine (DFMO) is a mechanism-based irreversible suicide inhibitor of ODC1: it is decarboxylated as a substrate mimic and generates a reactive electrophile that permanently modifies the active-site Cys360, permanently inactivating the enzyme. Polyamine levels (spermidine, spermine) are significantly elevated in SDHx-mutated PCC/PGL tissue and SDHB-knockdown cells versus wild-type counterparts (Rai et al., Metabolism 2020, PMID 32562798), implicating the ODC1-driven synthesis pathway as upregulated by SDH loss. ODC1 inhibition with eflornithine prevents replenishment of the polyamine pools depleted by SAT1/SSAT-mediated catabolism (the mechanism of DENSPM), making ODC1 the synthesis-side complement to SAT1 in a combined polyamine depletion strategy.",
  },
  {
    gene_symbol: "SLC16A1",
    name: "Monocarboxylate transporter 1 (MCT1)",
    uniprot_id: "P53985",
    pathway_slug: "succinate-immune-evasion",
    target_type: "downstream",
    description:
      "Bidirectional plasma-membrane transporter for small monocarboxylates including lactate, pyruvate, and succinate. In the SDH-deficient tumor microenvironment, high extracellular succinate is transported into tumor-infiltrating CD4+ and CD8+ T cells via MCT1, inhibiting succinyl-CoA synthetase and impairing TCA-cycle glucose oxidation; the net effect is suppressed IFN-γ secretion and degranulation — demonstrated in human T cells at physiological tumor-associated succinate concentrations (PMID 35977513). MCT1 inhibition would block this immunosuppressive succinate uptake in T cells while also disrupting metabolic symbiosis between glycolytic and oxidative tumor cells (lactate recycling). Target of AZD3965.",
  },
  {
    gene_symbol: "IDO1",
    name: "Indoleamine 2,3-dioxygenase 1",
    uniprot_id: "P14902",
    pathway_slug: "succinate-immune-evasion",
    target_type: "downstream",
    description:
      "Rate-limiting enzyme in tryptophan catabolism via the kynurenine pathway. IDO1 degrades tryptophan to N-formylkynurenine → kynurenine, depleting this essential amino acid from the TME and producing immunosuppressive kynurenine metabolites that exhaust effector T cells and expand FoxP3+ regulatory T cells. In SDH-deficient tumors, the pseudohypoxic HIF-1α program (driven by succinate-mediated PHD inhibition) is known to upregulate IDO1 expression; aberrant kynurenine pathway activity has been confirmed in metastatic SDHB-driven PPGL by multi-omics analysis (PMID 42230482). Target of IDO1 inhibitors including epacadostat.",
  },
  {
    gene_symbol: "UBE2F",
    name: "Ubiquitin-conjugating enzyme E2 F (neddylation E2)",
    uniprot_id: "Q969M7",
    pathway_slug: "neddylation",
    target_type: "synthetic_lethal",
    description:
      "NEDD8-specific E2 conjugating enzyme that cooperates with RBX2 to neddylate cullin-5-based RING E3 ligases. Identified in an unbiased CRISPR screen as a selective synthetic lethal dependency in SDHB-deficient chromaffin cells: loss of UBE2F suppressed growth specifically in SDH-deficient cells, while loss of its related enzyme UBE2M promoted growth. Upstream NAE1/UBA3 inhibitors (e.g., pevonedistat) block the entire neddylation cascade (PMID 42181244).",
  },
  {
    gene_symbol: "KDM4A",
    name: "Lysine demethylase 4A (JMJD2A)",
    uniprot_id: "O75164",
    pathway_slug: "sdh-driven-hrd",
    target_type: "direct",
    description:
      "α-KG-dependent Jumonji-domain histone demethylase that erases the repressive H3K9me3 mark. Competitively inhibited by succinate, which binds the catalytic iron-binding site shared with α-KG. At DNA double-strand break sites, KDM4A/B-mediated H3K9me3 removal is required for TIP60 acetyltransferase recruitment and subsequent ATM activation and DNA end-resection; succinate-driven inhibition causes H3K9me3 hypermethylation at breaks, impairing HR initiation (Sulkowski et al., Nature 2020, PMID: 32494005).",
  },
  {
    gene_symbol: "KDM4B",
    name: "Lysine demethylase 4B (JMJD2B)",
    uniprot_id: "O94953",
    pathway_slug: "sdh-driven-hrd",
    target_type: "direct",
    description:
      "Primary α-KG-dependent H3K9me3 demethylase at DNA break sites. KDM4B is the demethylase whose oncometabolite-mediated inhibition was identified as the mechanistic basis for HR deficiency in succinate-accumulating (SDH-deficient) and fumarate-accumulating (FH-deficient) tumors. Sulkowski et al. (Nature 2020, PMID: 32494005) showed that 2-HG, succinate, and fumarate all inhibit KDM4B, causing H3K9me3-masked DNA breaks that cannot recruit the HR machinery; restoration of KDM4B activity rescued HR competence. Together with KDM4A, KDM4B constitutes the α-KG-dependent chromatin checkpoint for DNA end-resection.",
  },
  {
    gene_symbol: "ATR",
    name: "Ataxia telangiectasia and Rad3-related protein kinase",
    uniprot_id: "Q13535",
    pathway_slug: "atrx-alt-replication-stress",
    target_type: "synthetic_lethal",
    description:
      "The primary replication stress checkpoint kinase. Phosphorylates and activates CHK1, stabilizes stalled replication forks, and coordinates origin firing suppression under genotoxic stress. In ATRX-loss/ALT cells, constitutive telomeric G-quadruplex formation and R-loop accumulation generate persistent stalled replication forks that require ATR signaling for resolution; ALT cells are therefore dependent on ATR for survival. Flynn et al. (Science 2015, PMID 25614623) established that ATR inhibition is synthetically lethal with ALT in multiple cancer types with ATRX or DAXX loss, showing 10–30× greater sensitivity in ALT-positive versus ALT-negative cells.",
  },
  {
    gene_symbol: "BRD4",
    name: "Bromodomain-containing protein 4",
    uniprot_id: "O60885",
    pathway_slug: "epigenetic-dysregulation",
    target_type: "synthetic_lethal",
    description:
      "BET (Bromodomain and Extra-Terminal) family protein that binds acetylated histones — particularly H3K27ac at active enhancers and super-enhancers — and recruits Mediator and P-TEFb to drive RNA Pol II pause-release and transcriptional elongation. In SDH-deficient tumors, succinate-mediated inhibition of KDM6A/B causes global H3K27me3 accumulation that compresses residual active chromatin into denser, fewer super-enhancer hubs; the Nat Med 2026 Phase 2 trial (PMID 42191879) provided direct evidence of such ectopic super-enhancer formation in SDH-deficient GIST (at the FGF3/FGF4 locus). BRD4-dependent transcription at these compressed, ectopic super-enhancers becomes disproportionately sensitive to BET inhibitors, which preferentially displace BRD4 from super-enhancers over typical enhancers (Loven et al., Cell 2013, PMID 23582323). Target of birabresib (OTX015) and molibresib (GSK525762).",
  },
  {
    gene_symbol: "BIRC5",
    name: "Baculoviral IAP repeat-containing protein 5 (Survivin)",
    uniprot_id: "O15392",
    pathway_slug: "hif-driven-survivin-apoptosis",
    target_type: "synthetic_lethal",
    description:
      "IAP (inhibitor of apoptosis) family protein encoded by BIRC5. Survivin inhibits caspase-3/7-mediated apoptotic execution and serves as a core subunit of the Chromosomal Passenger Complex (CPC) governing mitotic fidelity. Its promoter contains canonical hypoxia-response elements (HREs) directly activated by HIF-1α, making BIRC5 a transcriptional target of the pseudohypoxic program that is constitutively active in all SDH-deficient tumors. SDH-deficient cells with elevated Survivin depend on BIRC5 to evade apoptosis despite accumulated DNA damage from BRCAness; BIRC5 knockdown or inhibition with Ym155 shows selective susceptibility in SDH-deficient cancer cell lines (PMID 41711310).",
  },
  {
    gene_symbol: "DHODH",
    name: "Dihydroorotate dehydrogenase (mitochondrial)",
    uniprot_id: "Q02127",
    pathway_slug: "pyrimidine-synthesis-vulnerability",
    target_type: "synthetic_lethal",
    description:
      "Mitochondrial inner-membrane flavoenzyme catalyzing the fourth step of de novo pyrimidine synthesis: dihydroorotate → orotate (coupled to the reduction of ubiquinone). DHODH is the only step in pyrimidine biosynthesis that is mitochondrially located and strictly dependent on a functional electron transport chain to re-oxidize FMNH2. In SDH-deficient cells, de novo pyrimidine synthesis is already suppressed by the succinate-mediated block at ATCase (step 2), leaving residual pathway flux dependent on DHODH at step 4. Inhibiting DHODH compounds this pre-existing block, selectively depleting SDH-deficient cells of UMP and downstream pyrimidines. Normal cells, with intact ATCase and adequate aspartate supply, have substantially more reserve to tolerate DHODH inhibition. Targeted by brequinar (DUP-785) and by leflunomide/teriflunomide (FDA-approved for rheumatoid arthritis / relapsing MS). Primary anchor reference: Hart et al., Nat Metab 2026, PMID 42082831.",
  },
  {
    gene_symbol: "POLQ",
    name: "DNA polymerase theta",
    uniprot_id: "O75417",
    pathway_slug: "polq-tmej-backup-repair",
    target_type: "synthetic_lethal",
    description:
      "DNA polymerase theta (POLQ) is the effector enzyme of Pol θ-mediated end-joining (TMEJ, also called MMEJ), the major backup pathway for DNA double-strand break repair in homologous recombination (HR)-deficient cells. POLQ extends from short microhomology sequences exposed after resection, bridging and ligating the break ends in an error-prone manner. Ceccaldi et al. (Nature 2015, PMID 25642963) established the synthetic lethal relationship between HR deficiency and POLQ in ovarian cancer: POLQ expression is elevated in HR-deficient tumors, POLQ depletion selectively kills HR-deficient cells, and the combination of HR deficiency + POLQ loss is non-viable. In SDH-deficient tumors, succinate-mediated inhibition of KDM4A/KDM4B creates a universal (all-DSB, all-SDH-deficient-cell) HR deficiency (Sulkowski et al., Nat Genet 2018, PMID 30013182; Nature 2020, PMID 32494005); this should drive compensatory POLQ/TMEJ upregulation, creating synthetic lethality with POLQ inhibitors. ART558 (Artios Pharma) is the first-in-class selective, oral POLQ inhibitor; it is in Phase 1 clinical development in solid tumors with DNA-damage-response defects.",
  },
  {
    gene_symbol: "SSTR2",
    name: "Somatostatin receptor type 2",
    uniprot_id: "P30874",
    pathway_slug: "sstr2-somatostatin-vulnerability",
    target_type: "direct",
    description:
      "Gi-coupled G protein-coupled receptor for somatostatin and synthetic analogues. Highly expressed in SDH-deficient pheochromocytoma and paraganglioma; full agonist activation (BIM-23120) selectively suppresses proliferation and induces apoptosis in SDHB-deficient versus wild-type cells (PMID 41928014). High SSTR2 expression in SDH-deficient PPGL enables targeted peptide receptor radionuclide therapy (PRRT) with 177Lu-DOTATATE, which combines high-affinity SSTR2 binding with intratumoural β-radiation delivery. Partial agonists (cold SSAs: octreotide, lanreotide) bind SSTR2 but do not recapitulate the selective cytotoxicity observed with full agonism or PRRT. Target of Lutathera (177Lu-DOTATATE).",
  },
  {
    gene_symbol: "FASN",
    name: "Fatty acid synthase",
    uniprot_id: "P49327",
    pathway_slug: "de-novo-lipogenesis",
    target_type: "metabolic",
    description:
      "Multifunctional cytoplasmic enzyme catalyzing de novo synthesis of long-chain fatty acids from acetyl-CoA and malonyl-CoA. In SDH-deficient cells, the truncated TCA cycle forces acetyl-CoA generation via reductive carboxylation of glutamine (reverse IDH1/2 reaction: α-KG → isocitrate → citrate; ACLY cleavage: citrate → acetyl-CoA), making FASN the terminal effector of a glutamine-dependent lipid supply route. FASN products also feed mitochondrial fatty acid synthesis (mtFAS), which produces the lipoic acid cofactor required by pyruvate dehydrogenase and α-ketoglutarate dehydrogenase complexes; in cells already compromised at Complex II, additional impairment of mtFAS via FASN inhibition compounds mitochondrial dysfunction. A direct FASN-SDHB synthetic lethal interaction was demonstrated using G28UCM (a FASN KS-domain inhibitor) in SDHB-knockout cell lines: G28UCM impaired FASN activity and mitochondrial fatty acid synthesis more profoundly in SDHB-deficient cells than in WT controls (Rodríguez-Flores et al., Pharmacol Res 2026, PMID 41520938). Primary clinical candidate: denifanstat (TVB-2640).",
  },
  {
    gene_symbol: "MET",
    name: "MET proto-oncogene (hepatocyte growth factor receptor, HGFR)",
    uniprot_id: "P08581",
    pathway_slug: "hif-met-axl-signaling",
    target_type: "downstream",
    description:
      "Receptor tyrosine kinase for hepatocyte growth factor (HGF). MET transcription is directly activated by HIF-1α via canonical hypoxia-response elements (HREs) in the MET promoter — established by Pennacchietti et al. (Cancer Cell 2003, PMID 12726861) as the mechanism by which hypoxia promotes invasive growth. In SDH-deficient tumors, constitutive pseudohypoxic HIF-1α stabilization drives MET overexpression independent of oxygen tension. MET activation by HGF initiates a PI3K/AKT/mTOR → HIF-1α positive-feedback loop that amplifies pseudohypoxic signaling. MET is a primary target of cabozantinib (IC50 ~1.3 nM), which provided ORR 25% and median PFS 16.6 months in metastatic SDH-deficient PPGL (Natalie trial, Lancet Oncol 2024, PMID 38608693; SDHB-enriched cohort up to 50%).",
  },
  {
    gene_symbol: "AXL",
    name: "AXL receptor tyrosine kinase",
    uniprot_id: "P30530",
    pathway_slug: "hif-met-axl-signaling",
    target_type: "downstream",
    description:
      "TAM (TYRO3/AXL/MERTK) family receptor tyrosine kinase activated by the ligand GAS6. AXL is upregulated in pseudohypoxic and immunosuppressive tumor microenvironments downstream of HIF-1α stabilization. AXL signaling promotes tumor cell survival, epithelial-to-mesenchymal transition (EMT), metastasis, and innate immune evasion. In SDH-deficient tumors, constitutive pseudohypoxia creates conditions that elevate AXL expression. AXL is co-inhibited by cabozantinib alongside VEGFR2 and MET, contributing to the drug's multi-pronged activity against the HIF-driven receptor tyrosine kinase landscape in these tumors.",
  },
  {
    gene_symbol: "CD274",
    name: "Programmed death-ligand 1 (PD-L1 / B7-H1)",
    uniprot_id: "Q9NZQ7",
    pathway_slug: "hif-pdl1-checkpoint-evasion",
    target_type: "downstream",
    description:
      "Type I transmembrane protein and ligand of PD-1 (PDCD1). CD274 promoter contains canonical hypoxia-response elements (HREs) directly activated by HIF-1α, making PD-L1 a transcriptional output of the pseudohypoxic program constitutively active in SDH-deficient tumors. Noman et al. (J Exp Med 2014, PMID 24493797) demonstrated that hypoxia, via HIF-1α, drives PD-L1 expression on tumor cells and that PD-L1 upregulation mediates immune evasion in hypoxic tumor microenvironments. In SDH-deficient tumors, constitutive HIF-1α stabilization via succinate-mediated PHD inhibition creates a persistent pseudohypoxic state that continuously drives CD274 transcription. This HIF-driven PD-L1 expression enables tumor cells to engage PD-1 on cytotoxic T cells and suppress anti-tumor immunity — a second immune-evasion mechanism complementary to the succinate-MCT1 and HIF-IDO1 arms (Mechanism 11). Blocked by PD-1 antibodies (pembrolizumab, nivolumab) which prevent PD-L1/PD-1 engagement.",
  },
  {
    gene_symbol: "AKT1",
    name: "AKT serine/threonine kinase 1 (Protein kinase B alpha)",
    uniprot_id: "P31749",
    pathway_slug: "mtor-pi3k-akt",
    target_type: "downstream",
    description:
      "Central serine/threonine kinase in the PI3K/AKT/mTOR axis, activated downstream of receptor tyrosine kinases (IGF1R, MET) that are transcriptionally upregulated by HIF-1α in SDH-deficient pseudohypoxic tumors. AKT is recruited to the plasma membrane via its pleckstrin homology (PH) domain by PIP3 generated by PI3K, then activated by PDK1 (Thr308) and mTORC2 (Ser473). Active AKT phosphorylates TSC2 to release Rheb-GTP and activate mTORC1. Target of capivasertib (Truqap, FDA-approved), which inhibits all three AKT isoforms (AKT1/2/3) via allosteric PH-domain binding, preventing the paradoxical AKT reactivation that limits mTORC1 inhibitor (everolimus) durability in SDH-deficient tumors.",
  },
  {
    gene_symbol: "CDK4",
    name: "Cyclin-dependent kinase 4",
    uniprot_id: "P11802",
    pathway_slug: "cdkn2a-cdk46-cell-cycle",
    target_type: "downstream",
    description:
      "Serine/threonine kinase that, in complex with cyclin D proteins (cyclin D1/D2/D3), phosphorylates RB1 (retinoblastoma protein) at multiple residues to drive the G1→S cell cycle transition. CDK4 (and its paralog CDK6) is physiologically inhibited by p16/INK4A (encoded by CDKN2A), which occupies the CDK4/6 allosteric binding site that cyclin D requires, preventing catalytic activation and keeping RB1 in its growth-suppressive hypophosphorylated state. In SDH-deficient GIST, CIMP-driven promoter hypermethylation silences CDKN2A — identified by Killian et al. (Cancer Discov 2013, PMID 23550148) among ~85,000 hypermethylated CpG sites specific to SDH-deficient GIST (vs ~8,400 in KIT/PDGFRA GIST). Loss of p16/INK4A removes the physiological CDK4/6 brake, enabling constitutive CDK4/6 activity, chronic RB1 hyperphosphorylation, and unrestrained E2F-driven S-phase entry — a cell cycle deregulation downstream of the SDH-CIMP cascade. CDK4/6 inhibitors (palbociclib/Ibrance, ribociclib/Kisqali, abemaciclib/Verzenio) pharmacologically reimpose CDK4/6 inhibition that p16/INK4A silencing ablated, restoring RB1 hypophosphorylation and G1 arrest in RB1-proficient tumor cells.",
  },
  {
    gene_symbol: "CHEK1",
    name: "Checkpoint kinase 1 (CHK1)",
    uniprot_id: "O14757",
    pathway_slug: "chk1-brcas-replication-checkpoint",
    target_type: "synthetic_lethal",
    description:
      "Serine/threonine kinase and primary effector of the ATR-mediated replication stress response. CHK1 is phosphorylated by ATR at Ser317/Ser345 in response to single-stranded DNA (ssDNA) coated by RPA, which accumulates at stalled replication forks. Activated CHK1 inactivates CDC25A (by phosphorylation → ubiquitin-mediated degradation) to suppress CDK2 activity and arrest S-phase progression, and inactivates CDC25C to prevent premature CDK1 activation and mitotic entry. CHK1 also stabilizes stalled replication forks by limiting new origin firing and promoting fork restart.\n\nIn SDH-deficient tumors, the BRCAness phenotype (Sulkowski et al. Nat Genet 2018, PMID 30013182; Nature 2020, PMID 32494005) — epigenetic HR deficiency driven by succinate-mediated KDM4A/KDM4B inhibition and H3K9me3 accumulation at DSB sites — generates constitutive replication stress from stalled forks that cannot be efficiently repaired by HR. This creates an acute CHK1 dependency: BRCAness-positive SDH-deficient cells must rely on CHK1 to tolerate ongoing replication stress, whereas HR-proficient SDH-intact cells have redundant fork protection mechanisms.\n\nSynthetic lethality rationale: CHK1 inhibition in BRCAness-positive cells causes (1) unscheduled origin firing (origin dormancy is CHK1-regulated), (2) replication catastrophe from collision of active forks with unresolved stalled forks, (3) ssDNA accumulation and RPA exhaustion, and (4) premature mitotic entry of cells with under-replicated DNA → mitotic catastrophe and cell death. This mechanism applies to all BRCAness-positive SDH-deficient tumors, distinct from ceralasertib (ATR inhibitor, Mechanism 13) which is further restricted to the ATRX-null/ALT subset. Prexasertib (LY2606368, Eli Lilly) is the clinical-stage CHK1/CHK2 inhibitor with Phase 2 data in HR-deficient solid tumors.",
  },
  {
    gene_symbol: "TERT",
    name: "Telomerase reverse transcriptase",
    uniprot_id: "O14746",
    pathway_slug: "tert-telomerase-reactivation",
    target_type: "direct",
    description:
      "The catalytic reverse transcriptase subunit of the telomerase holoenzyme (TERT/TERC complex). TERT adds telomeric TTAGGG repeats to chromosome ends using the RNA template component TERC, maintaining replicative capacity in stem cells, germ cells, and cancers. In somatic cells, TERT is silenced; TERT promoter hotspot mutations (C228T/c.-124C>T and C250T/c.-146C>T) create de novo ETS transcription factor binding sites that constitutively reactivate TERT expression, restoring telomerase activity in cancer cells. Batini et al. (Arch Endocrinol Metab 2026, PMID 42155081) identified TERT promoter C228T in 16.7% of SDHB-germline-positive metastatic PPGL — co-occurring exclusively with SDHB pathogenic variants — establishing TERT reactivation as a recurrent genomic alteration in the most malignant SDH-deficient tumor subset. TERT-promoter-mutant tumors depend on active telomerase (telomerase-dependent telomere maintenance), mechanistically distinct from ATRX-null/ALT tumors which use recombination-based, telomerase-independent telomere maintenance. Imetelstat (Rytelo; FDA-approved June 2024 for lower-risk MDS) is a 13-mer thio-phosphoramidate oligonucleotide that binds the TERT active site as a competitive RNA-template antagonist, directly inhibiting telomerase activity.",
  },
];
