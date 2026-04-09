export type SdhSubunit = "SDHA" | "SDHB" | "SDHC" | "SDHD" | "SDHAF2";

export type Pathway = {
  id: string;
  name: string;
  slug: string;
  description: string;
  upstream_event: string;
  downstream_effects: string[];
  druggable: boolean;
  display_order: number;
};

export type Target = {
  id: string;
  gene_symbol: string;
  name: string;
  uniprot_id: string | null;
  pathway_id: string;
  target_type: "direct" | "downstream" | "synthetic_lethal" | "metabolic";
  description: string;
};

export type Drug = {
  id: string;
  name: string;
  brand_names: string[];
  chembl_id: string | null;
  pubchem_cid: string | null;
  drug_class: string;
  mechanism_of_action: string;
  fda_approved: boolean;
  approved_indications: string[];
  target_ids: string[];
  pathway_ids: string[];
  evidence_score: number;
  status: "established" | "preclinical" | "clinical_trial" | "theoretical";
};

export type Evidence = {
  id: string;
  drug_id: string;
  evidence_type:
    | "clinical_trial"
    | "case_report"
    | "preclinical"
    | "mechanistic"
    | "ai_hypothesis";
  source:
    | "pubmed"
    | "opentargets"
    | "chembl"
    | "clinicaltrials_gov"
    | "ai_generated";
  source_id: string | null;
  title: string;
  summary: string;
  relevance_score: number;
  sdh_specific: boolean;
  url: string | null;
  published_date: string | null;
  fetched_at: string;
};

export type Hypothesis = {
  id: string;
  drug_id: string | null;
  title: string;
  rationale: string;
  pathway_connections: string[];
  confidence: "high" | "medium" | "low" | "speculative";
  supporting_evidence: string[];
  generated_at: string;
  model_used: string;
  prompt_context: string;
};

export type Paper = {
  id: string;
  pmid: string;
  title: string;
  authors: string[];
  journal: string | null;
  abstract: string | null;
  published_date: string | null;
  mesh_terms: string[];
  ai_summary: string | null;
  relevance_score: number | null;
  fetched_at: string;
};

export type ClinicalTrial = {
  id: string;
  nct_id: string;
  title: string;
  status: string;
  phase: string | null;
  conditions: string[];
  interventions: string[];
  locations: string[];
  enrollment: number | null;
  start_date: string | null;
  completion_date: string | null;
  url: string | null;
  ai_summary: string | null;
  relevance_score: number | null;
  fetched_at: string;
};

export type EvidenceScore = {
  overall_score: number;
  breakdown: {
    mechanistic_rationale: number;
    preclinical_evidence: number;
    clinical_evidence: number;
    sdh_specificity: number;
    druggability: number;
  };
  reasoning: string;
  key_strengths: string[];
  key_gaps: string[];
};
