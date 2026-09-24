# Reviews: Mental Fitness lesson 2

## 2026-09-23 — Lesson 02 — Stage 4, two reviewers in parallel
**Reviewer 1 (facts, neutrality, safety):** fact-check pass with fixes, **neutrality fail**, safety pass
with one fix; every quotation verbatim against Europe PMC, every number redone. **Reviewer 2 (depth,
pedagogy, cold start, voice):** depth, pedagogy and cold start **fail**, voice pass with fixes.

### The two findings that changed the lesson

1. **The course's "added question" was already taught.** **Logic and Argument** lesson 9 has a section
   titled "Compared with what", and Sleep lesson 6 made this lesson's CBT-I point. The lesson now
   credits Logic 9 and adds the sharper, trial-specific question, **what did the comparison group
   get?**, and the outline's decision 4 is amended to match. The chain of added questions also left
   out Note-Taking's setting question; fixed in body and quiz.
2. **The comparator point was used against CBT and against apps harder than the sources allow**
   (defect 9, in the favour of the lesson's argument, twice). Cuijpers's 0.79 sentence stopped before
   "which remained similar in sensitivity analyses and were still significant at 6-12 month
   follow-up", and its medication sentence before the longer-term result in CBT's favour; Linardon's
   robustness-to-control-type clause and its active-comparison sentence were omitted, and the file
   carried the same omissions (defect 26). All restored, in lesson and `SOURCES.md`.

### Other findings, all applied

- "The one number above it has a reason, which is the subject of this lesson" claimed a cause the
  abstract doesn't give and the table contradicts (0.45 and 0.79 come from the same meta-analysis).
- "Usual care" grouped with "no treatment", which Furukawa didn't study; now five comparison types,
  including the psychological placebo the sources use and the lesson had omitted.
- The 0.79 described as "against a waiting list" where it is against waiting lists and usual care;
  "more than twice as good" read a ratio of g values as a ratio of benefit.
- Outline decision 3: the lesson touched medication without NG222 1.4.12. Added.
- The anxiety half was missing (defect 1): Carl 2020 (whose authors state this lesson's warning in
  their own abstract) and Zhu 2014 added from `SOURCES.md` §19e.
- A trial's waiting list set against lesson 1's "active monitoring", which a reader would collide.
- Odds ratio, response, network meta-analysis and the authors' sensitivity-analysis qualifier given
  plain glosses, labelled as the course's.
- No worked example with a gap: now three predicts (the trial set-up, the 0.06 interval, the app) and a
  checkpoint.
- Quiz: four of six reused the page and several could be answered by shape; recast onto new cases with
  measured distractors. Exercise 1 couldn't be done as set; rebuilt from six comparisons that differ.

`npm run quotes mental-fitness`: 31 of 31. `minutes: 95`. `npm run validate` exits 0.
