# Reviews: Nutrition lesson 1

## 2026-09-24 — Lesson 01 — Stage 4, two reviewers in parallel, Tier B (split)

**Reviewers:** F (facts, neutrality, safety) and P (depth, pedagogy, cold start, voice and media),
each in a fresh context; fixes applied in a third.

**F's verdicts:** Facts **fail** on F1 to F3 (Schwingshackl 2021 misread; F fetched the full text
with curl), everything else verbatim and every sum and SVG coordinate correct. Neutrality **passes
with fixes**: the two-position sections are balanced with neutral last words, but the misconception
list corrects only errors in the critics' direction (F4). Safety **passes with one major fix**: the
callout is byte-identical and correctly placed, but the beta-carotene harm in smokers was hedged
(F5).

**P's verdicts:** Depth pass with fixes (one expert-test failure, P1). Pedagogy pass with fixes (a
predict spoiled by its heading, two weak quiz items, one recall item). Cold start pass with fixes
(the prediction interval was never distinguished from a confidence interval). Voice and media pass
with fixes. Length: 90 measured against 60 planned, mostly earned; cut about 450 words and do not
chase 60.

### Findings

- **F1 [major]** "97 pairs … each compared as a ratio": the 1.09 pools binary pairs only (71 of 97,
  full text); continuous pairs were differences of mean differences.
- **F2 [major]** "on the same question" contradicts the lesson's own point that many pairs were
  loosely matched on PI/ECO.
- **F3 [major]** The 0.80 × 1.09 = 0.87 example reads the ratio as "trials find less benefit",
  which the authors' methods explicitly warn against (0.95/0.90 and 1.06/1.00 both give 1.06).
- **F4 [major]** Every misconception corrects the critics' side; add one for the defenders
  (beta-carotene's tight 0.69 as "close to proof").
- **F5 [major, safety]** "may have raised it" understates a significant harm in both smoker trials;
  add the USPSTF D recommendation.
- **F6 [minor]** WHI 19.6-year result stated flatly although SOURCES 5.3 says "suggestive"; the
  unmarked "most women didn't reach the fat target" needs [3].
- **F7 [minor]** Hall: "then at the NIH" rests on a search-summary claim; the doubly labelled water
  figure (151 ± 63) omitted; "Nobody in it had a heart attack" is unsourced.
- **F8 [minor]** Table head reads as effects; Jakobsen found no MUFA association where Li found 15%
  lower; "In 2015 … followed for 24 to 30 years" misdates the follow-up.
- **F9 [minor]** "The order of this course follows Wageningen's" is true of the first module only;
  the 2018 syllabus is described in the present tense.
- **F10 [minor]** MR row's flat "Cause" overstates.
- **F11 [minor]** "The defence's claim … is strong" reads as a verdict; "Cohorts aren't coin
  tosses" is a light straw man; Go deeper framing asymmetric and "leadership" inaccurate; the
  critic's headline claim ("almost all foods …") absent.
- **F12 [minor]** Quiz 2 key covers only "less of something else", not "more in total".
- **F13 [minor]** PHS "close to the dashed line" is unlabelled course arithmetic; Ioannidis DOI is
  paywalled and should say so.
- **P1 [major]** "Controlled feeding cannot show disease" and "a diet trial cannot be blinded" are
  absolutes the Minnesota Coronary Experiment contradicts; Satija says "typically".
- **P2 [minor]** The randomised-trial subsection never says a diet trial tests being told to eat a
  way; "intention-to-eat" is used undefined.
- **P3 [minor]** The MR threat is described but not named (pleiotropy).
- **P4 [minor]** "What made trans fat … settled" is an unsourced causal claim in a checkpoint.
- **P5 [major]** The heading "The famous failure" and the "packaged in a pill" set-up give away the
  beta-carotene predict.
- **P6 [major]** Quiz 3 answerable by absolutes; replace option B.
- **P7 [major]** Quiz 6 distractors implausible; replace all three.
- **P8 [minor]** Quiz 5 is recall of the page; make it application.
- **P9 [minor]** Quiz 2 stem says the course asks the question "first", which the body never says.
- **P10 [minor]** "Take 15 minutes" under-times 21 written items; say 25.
- **P11 [minor]** Quiz 4 reuses the body's gene; quiz 1 D is refuted by its own stem.
- **P12 [major]** The prediction interval is not distinguished from the confidence interval; I2 and
  τ2 unglossed.
- **P13 [minor]** MR jargon (alleles, meiosis, ALDH2, HFE) unglossed.
- **P14 [minor]** Undefined terms: ketogenic, metabolic chambers, hard endpoints, energy balance,
  macronutrients, PUFA/MUFA, healthy user bias, n-6, crossover, "the research file".
- **P15 [minor]** Pipeline and moral sentences: "Here are…", the circular "research file reached as
  well", the provenance label in bold with "checked twice", "(in this course's summary…)" before
  the sentence, "it's worth", an ambiguous "it notes", a bolded moral, "Cohorts aren't coin
  tosses", "The famous failure is the kind of pair that fails".
- **P16 [minor]** SVG caption "pills against placebo" is wrong for ATBC's factorial comparison.
- **P17 [minor]** Satija and Schwingshackl not linked where the reader meets them; Wageningen
  unlinked while Stanford is linked.
- **P18 [minor]** Contractions about 9.8 per 1,000, above the band; do not add more.
- **Length** Cut: Ioannidis's 1,000-article sentence; MR to about 140 words; Jakobsen; the WHO
  energy-balance sentence; the Wageningen paragraphs.
- **Found in the fix pass:** "Here are the three death results" introduced a chart that shows two
  trials; the Physicians' Health Study is not on it.

### Resolutions applied

Applied (29 of 31 findings, all or in part):

- **Schwingshackl (F1, F2, F3, P12).** The Methods and Results passages F quoted were verified by
  curl against Europe PMC's fullTextXML for PMC8441535 and **added to SOURCES.md Part A 4.3 first**,
  dated, with read level. The lesson now: describes the pairs as matched as closely as the authors
  could, some well and some not; restricts the ratio to yes-or-no outcomes and says 71 of the 97;
  replaces the 0.80 example with the authors' own 0.95/0.90 and 1.06/1.00 example and quotes their
  warning; distinguishes the prediction interval from the confidence interval and glosses I2. The
  gapped worked example survives: the authors' division is shown, the reader then does 1.08 ÷ 0.69.
  Read levels in the body, Sources 4 and Go deeper updated.
- **F4.** New misconception, the defenders' error, before the hazelnut entry.
- **F5.** Harm stated plainly for both smoker trials, with the USPSTF D recommendation and a pointer
  to lesson 10 (which the outline gives USPSTF 2022); USPSTF added as Sources 18 from SOURCES F 1.1.
- **F6 and the brief's WHI instruction.** WHI is now one sentence in "The outcomes are slow", saying
  the result's weight is argued over and that lesson 2 reads it in full. The randomised-trial
  subsection no longer discusses WHI, so the unmarked sentence is gone rather than marked.
- **F7 (a, b, c), F8 (a, b, c), F9, F10, F11 (a to d), F12, F13.** As proposed, with F8b written as
  one sentence pointing to lesson 6 rather than a paragraph, since P asked for Jakobsen's result to
  move there.
- **P1.** Table cell now "Disease, as a rule", pointing to lesson 6's hospital trials; misconception
  says "usually cannot be blinded".
- **P2, P3, P4, P5, P6, P7, P8, P9, P11 (both), P13 (by the MR cut), P15 (all), P16, P18.** As
  proposed. P16's caption is "Trials: given the pills or not", since ATBC's comparison group
  included vitamin E pills, so "no pills" would also be wrong. Quiz option lengths re-measured
  (spreads 5 to 9 characters, key never the sole longest, keys 2, 3, 0, 2, 1, 0) and every
  explanation read against its key; a colon in Q5's new key parsed as a YAML mapping and was
  reworded.
- **P14.** All glossed except the two fat types (below). "Research file" glossed at its first use.
- **P17.** Satija and Schwingshackl linked in the body. Wageningen left unlinked: the research file
  holds no URL for it and the current edX page was not read.
- **Length.** Every cut P listed, plus tightening of the scope list, the callout paragraph, the
  Connections, Go deeper and the Sources "Supports" notes (every quotation still has its source).
  Larsson 2021 dropped with its sentence; sources renumbered 9 to 18 → 8 to 17, USPSTF added as 18.
  The cookbook study's "Effect sizes shrink" line dropped from the hazelnut entry.
- **The fix pass's own finding.** The chart's lead-in now says "the two trials' death results".
- **The DGA Scientific Foundation line (brief).** Kept: it is dated in the body ("published
  alongside … in January 2026"), and the paragraph now ends pointing to lesson 9 "as they stood in
  September 2026", which satisfies OUTLINE decision 5.

Declined:

- **P10 (exercise timing to 25 minutes).** `reading-time.mjs` adds 2.5 minutes per numbered step to
  any stated duration, so the exercise is already priced at 27.5 minutes, above the 20 to 25 P
  estimated. Saying 25 would price it at 37.5.
- **P14, the monounsaturated and polyunsaturated gloss.** The only source in the research file that
  names which oils carry which fat is the WHO healthy diet fact sheet, revised in January 2026 and
  quarantined in lesson 9 by OUTLINE decision 5; the course voice should not supply it unsourced.

**For lesson 6's drafter:** Jakobsen 2009's carbohydrate hazard ratio (1.07 for events, 0.96 for
deaths) and its null MUFA result, set against Li 2015's 15%, were moved out of lesson 1 for lesson
6 to carry.

**Voice checks.** No em dashes; the three en dashes are inside quotations or a title. "Robustly" and
"Paradigm" occur only inside a quotation and a paper title. Bold 7.2 per 1,000 body words, 16 of 76
prose paragraphs opening bold. Two predicts, five checkpoints, one gapped worked example. Every
marker has a footnote. Contractions 8.7 per 1,000, down from 9.8 and a shade above the band;
expanding them would add words to a lesson at the edge of its rounding, so left. Opening read
aloud; unchanged.

**Measured:** 6,499 words, `minutes: 85` (from 90; the model gives 87.4, so it sits just under the
rounding line and any addition of about ten words will tip it back to 90). `npm run quotes --
nutrition`: 60 sourced quotations, 0 not found. `npm run validate`: exit 0.

**Status after review:** clean. No second pass triggered: the facts failures were one source misread
in one section, now corrected against the primary text, not a heavy rewrite.
