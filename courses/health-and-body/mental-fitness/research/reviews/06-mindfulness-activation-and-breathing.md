# Reviews: Mental Fitness lesson 6

## 2026-09-24 — Lesson 06 — Stage 4, two reviewers in parallel
**Reviewer 1 (facts, neutrality, safety):** fact-check fail (fixable), **neutrality fail** (fixable),
safety pass with fixes. The crisis callout is identical to the course's; there is no diagnosis and no
checklist; the 1.4.12 wording is accurate but in the wrong place. **Reviewer 2 (depth, pedagogy, cold
start, voice):** **depth fail** (fixable), **pedagogy fail**, cold start needs fixes, voice pass with
fixes. `npm run validate` exited 0, `minutes` 75 matched the measurement, and `npm run quotes` had one
miss (line 171).

**The tilt runs against mindfulness.** Positive sources were cut to their numbers while the cautions
were quoted whole. The critique had the last word in the mindfulness section and two of the four
misconceptions. Proponents spoke only through a hypothetical teacher, and that teacher's line was
wrong. This is defect 14 at the level of selection.

**Overlaps, each resolved once:** F3 = D3, N2 = D4, N6 = D2 (partly), N4 = D1, S1 = D10, F12 = D9,
N5 = D6, F11 = D7.

### Findings

**Facts**
- **F1, line 242.** "The one waiting-list trial the review found: 26 participants" is wrong. Only the
  efficacy result rests on 1 RCT of 26. Acceptability draws on "8 RCTs. 359 participants". Say "the
  one waiting-list trial with efficacy data (the review had eight waiting-list trials in all)".
- **F2, lines 156–162 and 268–270, objective 2.** Van Dam cites Goyal 2014 as the source of
  "comparable". Goyal's own Discussion (PMC4142584) has the sentence: "These small effects are
  comparable with what would be expected from the use of an antidepressant in a primary care
  population, without the associated toxicities." The lesson never says Goyal made that across-study
  comparison, and never says why it misleads: no evidence of being better is not evidence of being as
  good, and the comparison runs across studies, which is lesson 2's question. Record the sentence in
  SOURCES §9a with its read level, say it in the body, and label the reasoning as the course's.
- **F3 (= D3), lines 133 and 26, SOURCES §9c.** "An app used alone on a phone is none of the first
  four" is false, because an app user can be a community adult who volunteered. Galante 2023 included
  only "in-person, expert-defined MBPs". Say "An app used alone is neither group-based nor teacher-led,
  and the review included only in-person programmes." Fix quiz 1's explanation too.
- **F4, lines 168–171.** "A trial was designed to test that very comparison" overstates. Hoge
  recruited from June 2018 (NCT03522844), at the same time as Van Dam. Van Dam's sentence was about
  depression and stress; Hoge's trial was about anxiety disorders. Say "Five years later, a trial
  tested the comparison for anxiety disorders."
- **F5, lines 172–178.** For Hoge, add the intent-to-treat confirmation. Add the drop-outs from
  adverse events: 10 (8%) on escitalopram and none on MBSR. Name the primary outcome, the CGI-S, a
  clinician's rating of severity.
- **F6, lines 115–117.** The Goyal quotation stops before "and low evidence of improved
  stress/distress". Restore it, and add the population, "diverse adult clinical populations".
- **F7, line 151.** Kuyken's sample was in "full or partial remission", not "currently well". Add the
  abstract's rider that the effect was larger for people with "more pronounced residual symptoms".
- **F8, lines 204–206.** "The programme with the strongest evidence was designed for people without a
  psychiatric disorder" runs Galante's MBPs together with MBSR's standards. Hoge gave MBSR to people
  with diagnosed anxiety disorders, and NICE describes its group mindfulness as "specifically designed
  for people with depression". Say "MBSR's own standards exclude suicidality and any psychiatric
  disorder, though it has since been trialled in anxiety disorders." Keep "a clinician first" for
  suicidality.
- **F9, line 200.** "NICE's depression guideline says the same" overstates. NICE's note is milder.
  Say "adds a related caution".
- **F10 (with D4), lines 252–260.** Fincham's comparator is missing: "compared to non-breathwork
  controls".
- **F11 (= D7), lines 210, 247 and 225.** "The least known of the three and has the most clinical
  backing" has no source. Replace it with a labelled trial count (53). Drop "CBT-related", which has
  no source: NG222 lists CBT and BA separately. Label the gloss of "worst-case" as the course's.
- **F12 (= D9).** Read levels are missing at the point of use for Goyal, both Galante papers, Kuyken,
  Hoge, Fincham and Van Dam.
- **F13, lines 279–280.** Change to "in 785 people across 12 trials, most at moderate risk of bias".

**Neutrality**
- **N1, lines 136–139.** Galante 2021 is trimmed. The conclusion opens "Compared with taking no
  action, MBPs of the included studies promote mental health in nonclinical settings, but given the
  heterogeneity between studies…". The lesson also leaves out the no-intervention effects (anxiety SMD
  −0.56), the depression benefit against nonspecific active controls, and "MBPs may have specific
  effects on some common mental health symptoms". "Reached a similar place" is inaccurate. Quote the
  whole conclusion and one no-intervention figure, and keep the qualifiers.
- **N2 (with D4), lines 257–259.** Before Fincham's "However, we urge caution…", add "Overall, results
  showed that breathwork may be effective for improving stress and mental health."
- **N3, lines 200–202 and 247–248.** NICE's positive placements are left out. NG222 Table 1 lists
  group mindfulness and meditation as a first-line option for less severe depression. Group BA is
  third in Table 1, and individual BA is third in Table 2. Give one sentence to each, with the caveat
  from the table heading that the order is not a ranking by effect size.
- **N4 (= D1, second half).** The outline's worked example (b) is missing. Kuyken 2016 compared MBCT
  with "usual care and other active treatments, including antidepressants" and found a lower relapse
  risk against active treatments (HR 0.79). Add it, scoped narrowly: it is relapse prevention only,
  and the abstract does not report the antidepressant arms separately.
- **N5 (= D6), line 242.** "It's an honest oddity, and it cuts against BA" is wrong. Sparse data (RR
  2.14, CI 0.90 to 5.09) means uncertainty, not evidence against BA. Say something like "one small
  trial can't settle it."
- **N6 (with D2), lines 164–166.** "Serious programmes were never sold as a treatment for psychiatric
  disorders" is inaccurate. MBCT was built for recurrent depression, NICE offers it, and Hoge trialled
  MBSR in anxiety disorders. Say "MBSR was designed for general stress, and its own standards exclude
  psychiatric disorder; MBCT was built specifically for depression relapse."
- **Count (defect 14).** See the tilt note above.

**Safety**
- **S1 (= D10), lines 187–190.** NG222 1.4.12 must end the lesson. Move it to a closing callout.
- **S2, line 272.** The "Meditation is harmless" misconception could cite Hoge's 15.4% of the MBSR
  arm with a study-related adverse event.
- **S3, quiz 3.** "Recent thoughts of self-harm" is not the same as MBSR's exclusion of
  "suicidality". Either make the stem "thoughts of suicide" or rest the key on "a clinician first".
- **S4, quiz 3 explanation.** "Which isn't this person's situation" assumes the person is not in
  remission. Reword it.

**Depth**
- **D1 (critical).** Objective 2 has no mechanism. Add a paragraph. Goyal found "no evidence that
  meditation programs were better than any active treatment", and this was read as "as good as". No
  evidence of a difference is not evidence of no difference. A non-inferiority design with a pre-set
  margin tests the second claim, which leads into Hoge. Then give Kuyken's HR 0.79 against active
  treatments, including antidepressants, in remission, as the narrow fair case (N4).
- **D2 (critical).** Four statements about who mindfulness is for contradict the lesson: line 165,
  line 200 (NG222's row is trimmed of its first half, "Uses a programme such as mindfulness-based
  cognitive therapy specifically designed for people with depression.", which is defect 9), line 204
  and line 272. Limit the teacher's point to MBSR. Quote the whole NG222 row. Rewrite line 204. Make
  "If that's you" refer to suicidality.
- **D5 (high).** The mindfulness section is not really sorted by comparison. Goyal's trials were in
  clinical populations and Galante's in non-clinical volunteers, so name both populations. Restore
  "low evidence of improved stress/distress". At line 109, use Goyal's unused "low evidence of no
  effect or insufficient evidence of any effect … on … attention" to link to Focus and Deep Work
  lesson 6.
- **D6 (medium, = N5).** In the BA predict (lines 240–244), give RR 2.14. "The lesson from lesson 2
  applies: the comparison with the fewest data…" misattributes: lesson 2 taught that waiting lists
  flatter, and intervals came from Sleep lesson 5. Say "It's uninformative, not bad news", then "the
  comparison lesson 2 said usually flatters".
- **D8 (medium).** BA is taught thinly. Say that the course has no protocol source. Develop "doing
  before feeling", which SOURCES §10 calls the most teachable mechanism, as far as the file supports.
  "Looked at behaviour change from the other side" (line 216) is vague; name the lesson and the idea.

**Pedagogy**
- **P1 (critical).** The key can be spotted by its shape: it is the only option without an absolute,
  the only one without a "since" clause, or the only longest. Lengths were Q1 81/73/102/85 (key C), Q2
  75/79/81/80 (D), Q3 73/73/72/70 (B), Q4 80/79/81/85 (B), Q5 70/72/77/71 (C) and Q6 84/75/78/86 (D).
  The shape heuristic scores 83%.
- **P2.** Keys run 2,3,1,1,2,3. Position 0 is never used, and there is an adjacent repeat. Suggested
  3,0,2,1,3,0.
- **P3.** Only 2 of 6 items ask for application. Suggested recasts:
  - Q2: a non-inferiority trial of app-based CBT-I against a sleeping pill, with no placebo arm.
  - Q4: two plans for low mood, a scheduled walk with mood rated before and after, and "filling every
    hour".
  - Q5: an app claims a heart-rate effect from a review whose outcome was self-reported calm.
  - Q6: an invented therapy whose result disappears under intention-to-treat.
- **P4.** Q3's key, "the course's own standards", is ambiguous. Change it to "MBSR's own standards".
- **P5.** Drop "best" from Q5's stem. The explanations for Q4, Q5 and Q6 do not teach the wrong
  options.
- **P6.** There is no worked example with a gap. Suggested: Hoge's "Is −0.38 inside −0.495?", and
  Kuyken's 0.69 as about a 31% lower hazard.
- **P7.** The practice covers only mindfulness. Add a breathing-app claim to exercise 1. Exercise 2
  needs a line for a reader who finds they are in the excluded group: a clinician, and the crisis
  callout.

**Cold start**
- **C1 (high).** Hoge is unreadable for a newcomer. Define non-inferiority before using it and name
  the scale (CGI-S). Explain "(0.16", "P = .65", the lower bound, and that a negative number means
  MBSR did worse.
- **C2.** Goyal reports improvement as positive (0.38), while Galante (−0.32) and Fincham (−0.35)
  report it as negative. All three are improvements; add a line saying so.
- **C3.** Define "passive control" (a waiting list or nothing).
- **C4.** Line 149's hazard ratio gloss should read "at any point in the 60 weeks, relapse ran at
  about 0.69 times the comparison group's rate". Spell out NIH and NCCIH.
- **C5.** Gloss sensitivity analyses and intention-to-treat (pointing to lesson 5), humanistic,
  psychodynamic, random-effects and partial remission.
- **C6.** Say that the adverse-event percentages are of those randomised.

**Voice**
- **V1.** "Robust" at line 93 (Q6 explanation) should become "doesn't hold up".
- **V2.** Provenance labels close the paragraphs at lines 133, 184, 206 and 215. Fold each one into
  the sentence where its claim starts.
- **V3.** "Real" is a tic (lines 40, 99, 151, 182), and line 133 says the same thing three times.
- **V4.** Two sentences are tangled, at lines 247–248 and 164–166. Rewrite line 247 as: "NICE's guided
  self-help for depression can use structured BA materials, supported by a trained practitioner
  (lesson 3's table)." Two section openers share the shape "the X-est of the three" (lines 210 and
  252).
- **V5.** One-line morals at lines 270 and 307.
- **V6.** Contractions run at 10.3 per 1,000; bring them into the band.
- **V9.** Link each primary source at first use: Galante 2023 PMC7615230, Kuyken PMC6640038, Van Dam
  PMC5758421, Hoge PMC9647561, Uphoff PMC7390059, NG222, and Fincham PMC9828383.
- **V10.** The quotes miss at line 171: quote the whole "The outcome assessments were performed by
  blinded clinical interviewer".
- **V11.** The superlative in Go deeper about Van Dam is unverified. Consider adding Galante 2023,
  which is open access.

### Errors in SOURCES.md (fix with the lesson)
1. §9c: "An app used alone on a phone is none of those things" is false. The header read level says
   "abstract's Results" but the entry quotes the Conclusions too.
2. §9e closing note: "never sold as a treatment by its serious proponents" contradicts §9d, §2 and
   §19h.
3. §19h: "a trial designed to test exactly that" overstates.
4. §9a lacks Goyal's Discussion sentence (read from PMC4142584 on 2026-09-24).
5. The verbatim bullets in §9b and §11 leave out Galante 2021's "Compared with taking no action, MBPs
   … promote mental health" and Fincham's "Overall, results showed that breathwork may be effective".
6. §10 gives no waiting-list data (efficacy from 1 RCT of 26; acceptability from 8 RCTs of 359).

### Resolutions applied (2026-09-24)

Every finding was applied. None was found wrong on checking the source. Two were done differently from
the reviewer's wording, and both are noted below. Checks:

- Every added quotation matches `SOURCES.md` by string, and `npm run quotes mental-fitness` finds no
  miss (the line-171 miss is gone).
- `npm run validate` exits 0 with no warning on this lesson, including cross-lesson repetition.
- The crisis callout is byte-identical to before.

**Goyal's Discussion sentence (F2).** It was fetched from the PMC full text (PMC4142584) on
2026-09-24 and matched character for character: "These small effects are comparable with what would
be expected from the use of an antidepressant in a primary care population, without the associated
toxicities." It is recorded in §9a with its read level (that one paragraph of the Discussion, nothing
else of the body), and only then quoted.

- **F1** uses the reviewer's wording, inside the BA predict.
- **F2 and D1.** A new paragraph quotes Goyal's Discussion. A labelled two-step reading follows
  ([7]):
  1. The comparison runs across studies, which is lesson 2's question.
  2. "No evidence … better" is not "as good as". Showing "as good as" takes a pre-set margin, which is
     non-inferiority, and that leads into Hoge.
- **F3 and D3.** Fixed in the predict and in quiz 1's explanation, and the Methods inclusion sentence
  is now quoted.
- **F4.** Fixed.
- **F5.** Added the ITT sentence, the 10 (8%) against none adverse-event drop-outs, and the CGI-S
  named as the clinician-rated primary outcome.
- **F6.** Goyal's findings are now quoted whole, pain and "low evidence of improved stress/distress"
  included, with "diverse adult clinical populations".
- **F7.** "In full or partial remission" is glossed. Rather than paraphrase the rider, the lesson
  quotes the conclusion whole ("appears efficacious … particularly those with more pronounced residual
  symptoms"), which keeps the authors' hedge.
- **F8.** Uses the reviewer's wording, labelled [7], with the suicidality sentence pointing to the
  callout.
- **F9.** Now "adds a related caution".
- **F10, N2 and D4.** Done.
- **F11 and D7.** The opener is now a labelled trial count: 53 trials, against Goyal's 47 and
  Fincham's 12 on the primary outcome. "CBT-related" is gone, and the "worst-case" gloss is labelled
  [7], because the abstract doesn't define the term.
- **F12 and D9.** Read levels are folded into the sentence at first mention for all seven sources.
- **F13.** Done.
- **N1.** Galante 2021 now gives:
  - the no-intervention anxiety figure (−0.56), quoted;
  - the nonspecific-active depression result, paraphrased with "most but not all scenarios" and "no
    statistically significant evidence" kept;
  - the specific-active sentence, quoted;
  - the conclusion quoted whole, "Compared with taking no action" to "may be equally effective".

  "Reached a similar place" is gone.
- **N3.** Group mindfulness gets 1.5.2's "all treatments in table 1 can be used as first-line
  treatments". The BA placements are given (group BA third in Table 1, individual BA third in Table
  2), with Table 1's heading caveat. The caveat is attributed to Table 1 only, because `SOURCES.md`
  records only Table 1's heading.
- **N4.** Added as a checkpoint after Kuyken: 0.79 is about 21% lower. The abstract doesn't report the
  drug arms separately, and the result is about relapse prevention in remission only. The objective
  line mentions it too.
- **N5 and D6.** The predict is now "Neither. It's uninformative", with RR 2.14 and its interval.
  Lesson 2 is credited only with waiting lists flattering (Furukawa's nocebo).
- **N6 and D2.** The teacher now makes the scope point about MBSR only, and MBCT is described as built
  for depression, pointing to NICE's row. The row is quoted whole in "Who mindfulness isn't for". The
  line-204 claim was rewritten per F8, "If that's you" now reads "if you're having thoughts of
  suicide", and the misconception on line 272 now names MBSR's standards.
  - **Not done as worded:** "MBSR was designed for general stress". `SOURCES.md` has no statement of
    MBSR's design intent, so the lesson says only that MBSR is a stress course (its name) and that
    its standards exclude psychiatric disorder, which Van Dam supports.
- **Count (defect 14):**
  - Galante 2021, Fincham, Kuyken and Goyal's positive sentences are now quoted, not cut to numbers.
  - Hoge's authors speak for the trial in the closing checkpoint.
  - A new misconception, "Mindfulness is all hype", corrects the sceptical side, so the list is now
    five, two of them on the cautious side.
  - The last word in the mindfulness material is still the exclusions section. That order was kept on
    purpose: it is safety content, and it now opens with NICE's first-line placement.
- **S1 and D10.** NG222 1.4.12 has moved to a closing callout, "Before you change a treatment", after
  Go deeper. It quotes all three parts of 1.4.12, including "most people stop antidepressants
  successfully", and its wording differs from lesson 5's so the repetition check stays quiet.
- **S2.** Hoge's 15.4% is added to "Meditation is harmless", as a share of those randomised.
- **S3 and P4.** The stem is now "thoughts of suicide in the past few weeks", and the key is "A
  clinician first, because MBSR's own standards exclude people with suicidality".
- **S4.** The explanation no longer guesses at remission status. It says MBCT's evidence is for
  relapse prevention in remission and is not a substitute for treatment.
- **D5.** The section now has subheadings by population and comparator. There is a sign-convention
  line (C2), and Goyal's attention sentence links to Focus and Deep Work lesson 6.
- **Optional table.** Added: five rows (Goyal, Galante ×2, Kuyken, Hoge) by who was studied, what they
  were compared with, and the main finding. It is Markdown, with the arrangement labelled [7].
- **D8.**
  - The lesson now says the course has no BA manual or protocol source and won't guess at session
    content.
  - "Doing before feeling" is developed within the file and labelled [7].
  - The Habits link is named: lesson 1's habit as an action triggered by a context, set against BA's
    deliberate planning.
- **P1 and P2.** The quiz was rebuilt.
  - The key sequence is **2,0,1,3,2,1**. It uses all four positions with no adjacent repeat. Its
    first-seen pattern (a,b,c,d,a,c) differs from lesson 5's (a,b,c,d,c,b) and lesson 7's
    (a,b,c,d,b,c).
  - **Not 3,0,2,1,3,0.** The suggested sequence is 0,2,1,3 rotated to start at 3, which defect 16 and
    the brief both rule out.
  - Option spreads are 6/4/3/5/12/8 characters. No key is the longest option. Every item has at
    least two options without an absolute, and the "because"/"since" clauses sit on keys and
    distractors alike.
  - `check-quiz-shape` reports "No quiz is passable by option shape alone."
- **P3.** Five of six items are now applications on invented cases: the app citation, sleep app
  against pill, Sam and Priya, the heart-rate app, and the new talking therapy. Q3 is an invented case
  too.
- **P5.** "Best" is dropped. Every explanation was read against its key after the reorder, and each
  names its distractors by content.
- **P6.** The Hoge result is worked in steps (direction of the sign, the 0.08 gap against the reported
  −0.07, the unlabelled 0.16, the interval, what P = .65 does and doesn't say, the margin). The gap
  step, "Is −0.38 inside −0.495, and what would −0.60 have meant?", is a checkpoint. Kuyken's 31% is
  in the body.
- **P7.** Exercise 1 now includes a breathing claim and a feel-or-body question. Exercise 2 has a line
  for a reader in an excluded group: a clinician, and the crisis callout's lines now if the group is
  suicidality.
- **C1 to C6.** All done:
  - Non-inferiority is defined before Hoge.
  - The CGI-S is named and described.
  - The sign convention, the unlabelled 0.16, P and the lower bound are explained.
  - Passive control is defined.
  - The hazard ratio is glossed as the reviewer worded it.
  - NIH and NCCIH are spelled out.
  - Sensitivity analysis, intention-to-treat (pointing to lesson 5), humanistic, psychodynamic,
    random-effects, k, heterogeneity and partial remission are glossed.
  - Adverse-event percentages are stated as of those randomised.
- **V1 to V11.**
  - "Robust" is gone.
  - All four trailing provenance labels are folded into the sentence where the claim starts.
  - The "real" tic is gone: no uses are left.
  - Both tangled sentences are rewritten, line 247 per the reviewer.
  - The section openers differ: BA is "the method of the three most people haven't heard of", and
    breathing is "costs nothing and takes a minute".
  - Both morals are rewritten.
  - Primary sources are linked at first use, with Goyal also linked to PMC.
  - The V10 quotation is whole.
  - Go deeper drops the Van Dam superlative and adds Galante 2023.
- **Voice.**
  - No em dashes or spaced en dashes.
  - No banned words outside quotations ("nuanced" is Fincham's).
  - 28 bold spans in 4,786 body words (5.9 per 1,000).
  - Contractions at 7.1 per 1,000 by the validator's count, down from 10.3; 15 were expanded.
  - Three predicts and three checkpoints.
  - Every block body has blank lines between its paragraphs.
- **minutes** is measured at 95 (was 75).
- **SOURCES.md.** All six are fixed, each with a dated correction note where a sentence was changed:
  1. §9c: the app sentence is corrected, the read level widened to the whole abstract (as the
     appendix holds it), and the Methods inclusion sentence added.
  2. §9e: the closing note is corrected.
  3. §19h: "designed to test exactly that" is corrected, and the ITT sentence, the adverse-event
     drop-outs and the CGI-S are added.
  4. §9a: the Discussion sentence is added with its read level and the across-study caution, along
     with the population and attention sentences from the abstract.
  5. §9b: the nonspecific-active result and the whole conclusion are added. §11: the comparator and
     "Overall, results showed…" are added.
  6. §10: the waiting-list efficacy (1 RCT, 26) and acceptability (8 RCTs, 359) are added, with a
     warning against the old phrasing.

**Chosen not to fix:** nothing beyond the two partial items above (N6's "designed for general stress",
and the P2 sequence swapped for a non-rotated one).
