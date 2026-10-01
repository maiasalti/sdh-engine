<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:evidence-quality -->
# Evidence quality for research claims

These rules apply to every claim written into MORNING_LOG.md, tracker.md, papers.ts, or any other research or data file in this repo.

- Name the tested model for every claim: the cell line, animal model, or tumor type, and whether it was SDH-deficient.
- Keep SDH-specific evidence separate from extrapolation. A result from a non-SDH model is a hypothesis to test in SDH-deficient systems, not an SDH conclusion.
- When a literature scan finds nothing on a target, drug, or pathway, write "not supported by this scan, SDH applicability unresolved". An empty search result is not evidence against the idea.
- Never declare a target or drug "permanently ruled out" (or similarly final wording) on the basis of no search hits.
<!-- END:evidence-quality -->
