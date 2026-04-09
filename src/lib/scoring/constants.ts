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

/** Color mapping for pathway badges */
export const PATHWAY_COLORS: Record<string, string> = {
  "hif-pseudohypoxia": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "epigenetic-dysregulation": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  "vegf-signaling": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  "mtor-pi3k-akt": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "glutamine-dependency": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  "oxidative-stress-ros": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "autophagy-survival": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
};
