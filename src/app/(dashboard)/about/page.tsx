import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Network,
  Brain,
  Database,
  Pill,
  FlaskConical,
  BookOpen,
  Lightbulb,
  Target,
  Scale,
  Info,
  Heart,
} from "lucide-react";
import { SCORING_WEIGHTS } from "@/lib/scoring/constants";

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          About SDH-Engine
        </h2>
        <p className="text-muted-foreground">
          How this drug repurposing engine works, what the scores mean, and why
          it exists
        </p>
      </div>

      {/* Origin Story */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Why This Exists
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            SDH-Engine was built by a patient diagnosed with{" "}
            <strong>SDH-deficient GIST</strong> (gastrointestinal stromal tumor).
            SDH-deficient cancers are rare. Information is scattered across
            journals, databases, and clinical trial registries. There is no
            dedicated cure.
          </p>
          <p>
            This tool exists to systematically map the molecular consequences of
            SDH deficiency to existing approved drugs that could potentially be
            repurposed — accelerating the path from biology to treatment by
            connecting dots that are hard to connect manually.
          </p>
          <p>
            The entire application was built using{" "}
            <strong>Claude Code</strong> (Anthropic&apos;s AI coding tool) in
            collaboration with the patient. The AI layer that powers drug scoring
            and hypothesis generation runs on <strong>Claude</strong> by
            Anthropic.
          </p>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            How It Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            SDH-Engine maps the molecular cascade from SDH loss to druggable
            targets in three layers:
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-primary" />
                <span className="font-semibold">Biology Layer</span>
              </div>
              <p className="text-xs text-muted-foreground">
                A curated knowledge base encoding the complete SDH deficiency
                molecular cascade — from succinate accumulation through 7
                downstream druggable pathways, 16 molecular targets, and their
                biological relationships.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4 text-primary" />
                <span className="font-semibold">AI Layer</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Claude AI analyzes drug candidates against the SDH biology
                context, scores evidence across multiple dimensions, generates
                novel repurposing hypotheses, and summarizes research papers in
                plain language.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="font-semibold">Data Layer</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Live data from PubMed (research papers), ClinicalTrials.gov
                (active trials), OpenTargets (drug-target associations), and
                ChEMBL (bioactivity data) enriches the curated knowledge base
                with real-world evidence.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Biology */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5" />
            SDH Deficiency Biology
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            <strong>Succinate dehydrogenase (SDH)</strong>, also known as
            mitochondrial Complex II, is an enzyme that sits at the intersection
            of the TCA cycle and the electron transport chain. It has four
            subunits: <strong>SDHA, SDHB, SDHC, SDHD</strong>, plus assembly
            factors (SDHAF1, SDHAF2).
          </p>
          <p>
            Loss-of-function mutations in any subunit cause{" "}
            <strong>succinate to accumulate massively</strong> (100x+ normal
            levels). Succinate acts as an oncometabolite, triggering a cascade
            of downstream effects:
          </p>

          <div className="space-y-2">
            {[
              {
                pathway: "Pseudohypoxia / HIF",
                description:
                  "Succinate inhibits PHD enzymes, stabilizing HIF-1\u03B1/2\u03B1 regardless of oxygen. This drives VEGF, glycolysis, and angiogenesis.",
              },
              {
                pathway: "Epigenetic Dysregulation",
                description:
                  "Succinate inhibits TET DNA demethylases and KDM histone demethylases, causing global hypermethylation and tumor suppressor silencing.",
              },
              {
                pathway: "VEGF Signaling",
                description:
                  "Downstream of HIF activation, VEGF/VEGFR2 signaling drives tumor angiogenesis — new blood vessels feeding the tumor.",
              },
              {
                pathway: "mTOR / PI3K / AKT",
                description:
                  "Metabolic reprogramming activates the PI3K/AKT/mTOR growth signaling axis through multiple upstream inputs.",
              },
              {
                pathway: "Glutamine Dependency",
                description:
                  "With the TCA cycle broken at Complex II, cells become addicted to glutamine for fuel via reductive carboxylation.",
              },
              {
                pathway: "Oxidative Stress / ROS",
                description:
                  "Complex II dysfunction causes electron leak, increasing reactive oxygen species — a vulnerability that could be therapeutically exploited.",
              },
              {
                pathway: "Autophagy / Survival",
                description:
                  "Metabolic stress triggers autophagy as a survival mechanism, which itself becomes a potential therapeutic target.",
              },
            ].map((item) => (
              <div key={item.pathway} className="flex gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">{item.pathway}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Each pathway represents a potential therapeutic intervention point.
            The drug candidates in this engine target one or more of these
            pathways.
          </p>
        </CardContent>
      </Card>

      {/* SDH-Deficient Tumors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            SDH-Deficient Tumor Types
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            SDH mutations cause several distinct tumor types, collectively known
            as SDH-deficient tumor syndrome:
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              {
                name: "GIST",
                full: "Gastrointestinal Stromal Tumor",
                detail:
                  "5-7.5% of all GISTs are SDH-deficient. Unlike KIT/PDGFRA-mutant GIST, these are resistant to imatinib.",
              },
              {
                name: "Paraganglioma",
                full: "Extra-adrenal Neuroendocrine Tumor",
                detail:
                  "Especially associated with SDHB mutations. Can be metastatic.",
              },
              {
                name: "Pheochromocytoma",
                full: "Adrenal Medullary Tumor",
                detail:
                  "Associated with SDHB and SDHD mutations. Produces excess catecholamines.",
              },
              {
                name: "Renal Cell Carcinoma",
                full: "SDH-deficient RCC",
                detail:
                  "A distinct WHO-recognized subtype of kidney cancer.",
              },
              {
                name: "Pituitary Adenoma",
                full: "Pituitary Tumor",
                detail: "Rare, associated with SDHA and SDHB mutations.",
              },
            ].map((tumor) => (
              <div
                key={tumor.name}
                className="rounded-lg border border-border p-3"
              >
                <p className="font-semibold">{tumor.name}</p>
                <p className="text-xs text-muted-foreground">{tumor.full}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {tumor.detail}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scoring System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Evidence Scoring System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            Each drug candidate receives an <strong>evidence score</strong>{" "}
            (0-100) based on a weighted evaluation across five dimensions. The AI
            scoring uses Claude to assess each dimension, combining quantitative
            evidence counting with qualitative mechanistic reasoning.
          </p>

          <div className="space-y-3">
            {[
              {
                key: "mechanistic_rationale",
                label: "Mechanistic Rationale",
                weight: SCORING_WEIGHTS.mechanistic_rationale,
                description:
                  "How directly does this drug target the SDH-loss molecular cascade? Is the mechanism of action clearly connected to one of the 7 downstream pathways?",
              },
              {
                key: "preclinical_evidence",
                label: "Preclinical Evidence",
                weight: SCORING_WEIGHTS.preclinical_evidence,
                description:
                  "Is there in vitro or in vivo data showing activity in SDH-deficient models? Have cell lines or animal models been tested?",
              },
              {
                key: "clinical_evidence",
                label: "Clinical Evidence",
                weight: SCORING_WEIGHTS.clinical_evidence,
                description:
                  "Are there case reports, case series, or clinical trials showing response in SDH-deficient patients? This is the strongest form of evidence.",
              },
              {
                key: "sdh_specificity",
                label: "SDH Specificity",
                weight: SCORING_WEIGHTS.sdh_specificity,
                description:
                  "Is the evidence specifically about SDH-deficient tumors, or extrapolated from general cancer data? SDH-specific evidence is weighted more heavily.",
              },
              {
                key: "druggability",
                label: "Druggability",
                weight: SCORING_WEIGHTS.druggability,
                description:
                  "Is the drug FDA-approved? Orally available? Well-tolerated for long-term use? Accessible to patients? Practical factors that affect real-world repurposing feasibility.",
              },
            ].map((dim) => (
              <div
                key={dim.key}
                className="rounded-lg border border-border p-4"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">{dim.label}</span>
                  <Badge variant="outline" className="text-[10px]">
                    {dim.weight * 100}% weight
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {dim.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-xs font-medium mb-1">Score interpretation:</p>
            <div className="grid grid-cols-4 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span>70-100: Strong candidate</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-amber-500" />
                <span>50-69: Moderate evidence</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-orange-500" />
                <span>30-49: Early stage</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <span>0-29: Theoretical</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Drug Status Tiers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5" />
            Drug Candidate Status Tiers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {[
            {
              status: "Established",
              color:
                "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
              description:
                "Drugs with clinical use or strong clinical evidence in SDH-deficient or closely related tumors. These are currently being used or actively studied in relevant patient populations.",
            },
            {
              status: "Clinical Trial",
              color:
                "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
              description:
                "Drugs currently in clinical trials for SDH-deficient tumors or with trial data in closely related conditions (e.g., paraganglioma, VHL disease).",
            },
            {
              status: "Preclinical",
              color:
                "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
              description:
                "Drugs with preclinical evidence (cell lines, animal models) suggesting activity against SDH-deficient biology, but without clinical trial data yet.",
            },
            {
              status: "Theoretical",
              color:
                "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
              description:
                "Drugs with a strong mechanistic rationale for targeting SDH-deficient pathways, but limited or no direct experimental evidence. These represent hypotheses worth investigating.",
            },
          ].map((tier) => (
            <div
              key={tier.status}
              className="flex items-start gap-3"
            >
              <Badge
                variant="secondary"
                className={`text-[10px] mt-0.5 ${tier.color}`}
              >
                {tier.status}
              </Badge>
              <p className="text-xs text-muted-foreground">
                {tier.description}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Hypothesis Generator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            AI Hypothesis Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            The hypothesis generator uses <strong>Claude Opus</strong>{" "}
            (Anthropic&apos;s most capable model) with adaptive thinking to
            propose novel drug repurposing candidates not already in the
            database.
          </p>
          <p>The AI receives:</p>
          <ul className="space-y-1 text-xs text-muted-foreground list-disc pl-5">
            <li>
              The complete SDH biology context (~2,500 tokens of curated
              molecular oncology knowledge)
            </li>
            <li>All current drug candidates and their pathway mappings</li>
            <li>The selected focus pathway (if any)</li>
            <li>User-provided constraints or context</li>
          </ul>
          <p>
            It then reasons about synthetic lethal interactions, metabolic
            vulnerabilities, cross-disease parallels (IDH-mutant, FH-deficient,
            VHL), and combination strategies to propose 3-5 novel candidates with
            mechanistic rationale and confidence levels.
          </p>
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-xs">
              <strong>Important:</strong> AI-generated hypotheses are starting
              points for investigation, not clinical recommendations. Always
              discuss any treatment ideas with your oncology team. The confidence
              levels reflect the AI&apos;s assessment of the mechanistic
              plausibility, not clinical proof.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Data Sources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data Sources
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {[
            {
              name: "PubMed / NCBI",
              description:
                "Biomedical literature database. Used for the research feed — searching and displaying published papers on SDH-deficient diseases.",
              url: "https://pubmed.ncbi.nlm.nih.gov",
            },
            {
              name: "ClinicalTrials.gov",
              description:
                "U.S. National Library of Medicine database of clinical studies. Used to find active and completed trials relevant to SDH-deficient cancers.",
              url: "https://clinicaltrials.gov",
            },
            {
              name: "Open Targets",
              description:
                "Drug-target-disease association platform. Used for evidence enrichment — connecting drugs to targets and diseases with association scores.",
              url: "https://platform.opentargets.org",
            },
            {
              name: "ChEMBL",
              description:
                "Bioactivity database from the European Bioinformatics Institute. Used for compound details, mechanisms of action, and bioactivity data.",
              url: "https://www.ebi.ac.uk/chembl",
            },
            {
              name: "Claude AI (Anthropic)",
              description:
                "Powers the AI scoring, hypothesis generation, and paper summarization. The biology context is curated and validated, not AI-generated.",
              url: "https://anthropic.com",
            },
          ].map((source) => (
            <div
              key={source.name}
              className="flex items-start gap-3 rounded-lg border border-border p-3"
            >
              <div className="flex-1">
                <p className="font-semibold">{source.name}</p>
                <p className="text-xs text-muted-foreground">
                  {source.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Built With
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 16",
              "TypeScript",
              "Tailwind CSS",
              "shadcn/ui",
              "Claude API",
              "Claude Code",
              "Vercel",
              "PubMed E-utilities",
              "ClinicalTrials.gov API",
              "OpenTargets GraphQL",
              "ChEMBL REST API",
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="border-amber-500/50">
        <CardContent className="pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-amber-500">Disclaimer:</strong> SDH-Engine
            is a research and information tool built by a patient, not a medical
            device. The drug candidates, evidence scores, and AI-generated
            hypotheses are intended for research exploration and discussion with
            your medical team — not as clinical recommendations. Always consult
            your oncologist or healthcare provider before considering any
            treatment changes. The scoring reflects available evidence and
            mechanistic plausibility, not clinical efficacy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
