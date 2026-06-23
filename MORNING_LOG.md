# Morning Run Log

A running record of what each scheduled morning agent attempted. Each new run MUST read this file first and avoid repeating prior directions.

## 2026-06-23

**Direction:** drug-pool
**Angle:** EZH2 histone-methylation axis (KDM6A/B inhibition by succinate), autophagy survival dependency, and NAD⁺/NAMPT synthetic lethality
**Summary:** Added three drugs covering three mechanistically distinct angles absent from the existing pool: tazemetostat (EZH2 inhibitor, FDA-approved for SMARCB1-null sarcoma; H3K27me3 accumulates in SDH-deficient tumors when succinate blocks KDM6A/B demethylases), hydroxychloroquine (lysosomal autophagy inhibitor, fills the existing autophagy-survival pathway which had no drugs assigned), and daporinad/FK866 (NAMPT inhibitor; elevated ROS from Complex II dysfunction drives chronic PARP1 activation consuming NAD+, creating NAMPT dependency). Added EZH2, BECN1, and NAMPT as new targets, added a NAD+ metabolism pathway, and updated the SDH biology context to cover these mechanisms.
**PR:** morning/2026-06-23-ezh2-autophagy-nampt

## 2026-06-23 (run 2)

**Direction:** drug-pool
**Angle:** Ferroptosis vulnerability — GPX4/xCT/TXNRD1 axis under SDH-driven oxidative stress and HIF-iron amplification
**Summary:** Added a new ferroptosis-lipid-peroxidation pathway (9th) exploiting the convergence of Complex-II-derived ROS and HIF-1α-driven transferrin receptor (TFRC) upregulation that enlarges the labile iron pool in SDH-deficient tumors. Three FDA-approved drugs added: sulfasalazine (SLC7A11/xCT inhibitor, depletes cystine → glutathione → GPX4 substrate; PMID: 11587223, 22632970), artesunate (iron-activated endoperoxide inducing ferroptotic lipid peroxidation, amplified by HIF-iron axis; NCT03093129), and auranofin (TXNRD1 inhibitor removing parallel antioxidant redundancy; PMID: 24443368, NCT02961829). Three new targets added: GPX4 (synthetic_lethal), SLC7A11 (metabolic), TXNRD1 (synthetic_lethal). Key limitation: all three candidates have only indirect SDH-specific preclinical evidence; ferroptosis sensitivity in SDH-deficient cell lines has not been directly demonstrated and should be a priority experiment.
**PR:** morning/2026-06-23-ferroptosis-lipid-peroxidation
