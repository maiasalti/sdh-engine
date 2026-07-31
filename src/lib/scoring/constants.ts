/** Weights for multi-factor drug repurposing evidence scoring */
export const SCORING_WEIGHTS = {
  mechanistic_rationale: 0.25,
  preclinical_evidence: 0.2,
  clinical_evidence: 0.25,
  sdh_specificity: 0.15,
  druggability: 0.15,
} as const;

/** Status tier ordering for display */
export const STATUS_ORDER: Record<string, number> = {
  established: 1,
  clinical_trial: 2,
  preclinical: 3,
  theoretical: 4,
};

/** Color mapping for status badges */
export const STATUS_COLORS: Record<string, string> = {
  established: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  clinical_trial: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  preclinical: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  theoretical: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

/** Human-readable labels for tumor type applicability values */
export const TUMOR_TYPE_LABELS: Record<string, string> = {
  gist: "GIST",
  ppgl: "PPGL/PCC",
  "ppgl:atrx": "PPGL (ATRX+)",
  rcc: "RCC",
  all: "All SDH tumors",
};

/** Color mapping for tumor type applicability badges */
export const TUMOR_TYPE_COLORS: Record<string, string> = {
  gist: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  ppgl: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "ppgl:atrx": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  rcc: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
  all: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
};

/** Color mapping for pathway badges */
export const PATHWAY_COLORS: Record<string, string> = {
  "hif-pseudohypoxia": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "epigenetic-dysregulation": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  "vegf-signaling": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  "mtor-pi3k-akt": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "glutamine-dependency": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  "oxidative-stress-ros": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "autophagy-survival": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  "nad-metabolism": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  "fgfr-signaling": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "neddylation": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  "hif-driven-survivin-apoptosis": "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  "de-novo-lipogenesis": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
  "sdh-driven-hrd": "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200",
  "atrx-alt-replication-stress": "bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-200",
  "polyamine-metabolism": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "succinate-immune-evasion": "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
  "pyrimidine-synthesis-vulnerability": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200",
  "polq-tmej-backup-repair": "bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200",
  "sstr2-somatostatin-vulnerability": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "hif-met-axl-signaling": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};
