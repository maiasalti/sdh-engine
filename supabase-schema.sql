-- SDH-Engine Database Schema
-- Drug Repurposing Engine for SDH-Deficient Diseases

-- Pathways: biological cascades from SDH loss
CREATE TABLE pathways (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  upstream_event TEXT NOT NULL,
  downstream_effects TEXT[] NOT NULL DEFAULT '{}',
  druggable BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Targets: druggable molecular targets linked to pathways
CREATE TABLE targets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  gene_symbol TEXT NOT NULL,
  name TEXT NOT NULL,
  uniprot_id TEXT,
  pathway_id UUID NOT NULL REFERENCES pathways(id) ON DELETE CASCADE,
  target_type TEXT NOT NULL CHECK (target_type IN ('direct', 'downstream', 'synthetic_lethal', 'metabolic')),
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Drugs: candidate drugs for repurposing
CREATE TABLE drugs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  brand_names TEXT[] NOT NULL DEFAULT '{}',
  chembl_id TEXT,
  pubchem_cid TEXT,
  drug_class TEXT NOT NULL,
  mechanism_of_action TEXT NOT NULL,
  fda_approved BOOLEAN NOT NULL DEFAULT false,
  approved_indications TEXT[] NOT NULL DEFAULT '{}',
  target_ids UUID[] NOT NULL DEFAULT '{}',
  pathway_ids UUID[] NOT NULL DEFAULT '{}',
  evidence_score INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL CHECK (status IN ('established', 'preclinical', 'clinical_trial', 'theoretical')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Evidence: individual pieces of evidence linking drugs to SDH-deficiency
CREATE TABLE evidence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  drug_id UUID NOT NULL REFERENCES drugs(id) ON DELETE CASCADE,
  evidence_type TEXT NOT NULL CHECK (evidence_type IN ('clinical_trial', 'case_report', 'preclinical', 'mechanistic', 'ai_hypothesis')),
  source TEXT NOT NULL CHECK (source IN ('pubmed', 'opentargets', 'chembl', 'clinicaltrials_gov', 'ai_generated')),
  source_id TEXT,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  relevance_score INTEGER NOT NULL DEFAULT 0,
  sdh_specific BOOLEAN NOT NULL DEFAULT false,
  url TEXT,
  published_date DATE,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Hypotheses: AI-generated repurposing hypotheses
CREATE TABLE hypotheses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  drug_id UUID REFERENCES drugs(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  rationale TEXT NOT NULL,
  pathway_connections TEXT[] NOT NULL DEFAULT '{}',
  confidence TEXT NOT NULL CHECK (confidence IN ('high', 'medium', 'low', 'speculative')),
  supporting_evidence UUID[] NOT NULL DEFAULT '{}',
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  model_used TEXT NOT NULL,
  prompt_context TEXT NOT NULL
);

-- Papers: cached PubMed papers
CREATE TABLE papers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pmid TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  authors TEXT[] NOT NULL DEFAULT '{}',
  journal TEXT,
  abstract TEXT,
  published_date DATE,
  mesh_terms TEXT[] NOT NULL DEFAULT '{}',
  ai_summary TEXT,
  relevance_score INTEGER,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Clinical trials: cached ClinicalTrials.gov results
CREATE TABLE clinical_trials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nct_id TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  status TEXT NOT NULL,
  phase TEXT,
  conditions TEXT[] NOT NULL DEFAULT '{}',
  interventions TEXT[] NOT NULL DEFAULT '{}',
  locations TEXT[] NOT NULL DEFAULT '{}',
  enrollment INTEGER,
  start_date DATE,
  completion_date DATE,
  url TEXT,
  ai_summary TEXT,
  relevance_score INTEGER,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX idx_targets_pathway ON targets(pathway_id);
CREATE INDEX idx_evidence_drug ON evidence(drug_id);
CREATE INDEX idx_drugs_status ON drugs(status);
CREATE INDEX idx_drugs_evidence_score ON drugs(evidence_score DESC);
CREATE INDEX idx_papers_pmid ON papers(pmid);
CREATE INDEX idx_clinical_trials_nct ON clinical_trials(nct_id);

-- Updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER pathways_updated_at BEFORE UPDATE ON pathways FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER targets_updated_at BEFORE UPDATE ON targets FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER drugs_updated_at BEFORE UPDATE ON drugs FOR EACH ROW EXECUTE FUNCTION update_updated_at();
