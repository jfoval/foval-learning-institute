# Reviews: Mental Fitness lesson 3

## 2026-09-23 — Lesson 03 — Stage 4, two reviewers in parallel
**Reviewer 1 (facts, neutrality, safety):** fact-check fail (fixable), **neutrality fail** (fixable),
safety pass with changes. Every quotation verbatim against the Europe PMC abstracts and NICE; every
table figure correct. **Reviewer 2 (depth, pedagogy, cold start, voice):** depth and pedagogy fail,
cold start and voice pass with fixes.

**The same defect a third time, and it was fixed at the root.** Every omission reviewer 1 found was a
sentence missing from `SOURCES.md` as well as from the lesson, and every one cut against the framing
the file had adopted: Karyotaki 2017's positive conclusion, Karyotaki 2021's "both guided and unguided
... over the short term and the long term", Mayo-Wilson's response result (not significantly inferior
to face-to-face) and its call for pragmatic trials, Lewis's "The addition of guidance ... improved
treatment outcome", Pauley's figure favouring digital. **So every cited abstract in `SOURCES.md` is now
reproduced whole in an appendix** (commit fa0e3ac), and the lesson was rewritten from the whole
abstracts rather than from the file's selections.

### Findings, all applied

- **Facts**: "the anxiety reviews found no guided-unguided difference" was false (Lewis found guidance
  helped) and "low certainty" should have been "very low"; the Mayo-Wilson qualifier was attached to
  the wrong result; the table's column header misdescribed three of four comparison groups; study and
  participant counts (101 included, 92 pooled; 8,107 analysed); "Structured self-help helps modestly"
  applied the depression figure to anxiety, where the reviews found medium to large effects.
- **Neutrality**: the cuts leaned against unguided and digital self-help, the form this reader uses,
  and the one therapy-side misconception was answered with a half-quotation. Both halves now quoted,
  and a mirror misconception added ("An app is as good as seeing a therapist").
- **Safety**: harm was never measured (Mayo-Wilson, Olthuis) and the lesson now says so; the severity
  finding now points back to NG222's note and says it was measured at the end of treatment.
- **Depth**: worked example (b), "this course is itself unguided self-help", is now worked step by
  step (match, comparator, certainty, for whom, what's licensed); depression covered as well as anxiety;
  the mixed "no intervention" control now has its consequence drawn.
- **Pedagogy**: quiz item 5 duplicated the checkpoint and three keys were spottable as the only
  cautious option; the quiz was rebuilt on new cases. A gapped predict added on the Haug and Lewis
  comparators; a model sentence for exercise 2 behind a checkpoint.
- **Cold start**: evidence-quality grades explained and distinguished from Sleep lesson 6's
  recommendation grades; Cochrane, iCBT, baseline, subthreshold and individual-participant data glossed.
- **Voice**: "Here's the worked case", "Now the wrinkle", the provenance-label tic, "honest", and
  bolded read levels.

`npm run quotes mental-fitness`: 61 of 61, plus a paragraph-level check of every quotation in the
lesson against `SOURCES.md` (the tool only checks quotations followed by a marker). `minutes: 85`.
`npm run validate` exits 0.
