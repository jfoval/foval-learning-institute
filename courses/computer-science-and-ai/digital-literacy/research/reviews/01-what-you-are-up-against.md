# Reviews: Digital Literacy lesson 1, "What you are up against, and what this course can honestly do"

## 2026-09-18 — Lesson 01 — depth, fact-check, neutrality, pedagogy, cold-start, voice, Tier A
**Reviewer:** one fresh-context subagent, all six passes (Tier A per `/review-lesson`; the course
carries `sensitive_domain: false` and is not a standpoint course, so Tier B was not indicated).

**Findings:**

1. [major] L1-01 "In 2010 Rick Wash interviewed 33 people in three American cities" — the
   interviews were run in summer 2007 (23) and summer 2008 (10); 2010 is the publication year, and
   SOURCES.md records this correctly, so the drafter drifted off a source that was in front of it.
   Dropping "midwestern" also loses a limitation on generalisability. Fix: state the publication
   year and the interview years separately, and restore "midwestern".
2. [major] L1-02 "over half of the trained employees in the best-measured study we have clicked at
   least once" and "Over half the employees at that health system clicked at least once in eight
   months, after training" — the recorded finding is over 56% of users, **trained or not**. The
   study had explicit untrained control groups, so attaching the figure to trained employees
   isolates a subgroup the finding does not. Fix: restore "trained or not" in both places and use
   56% rather than "over half".
3. [major] L1-03 the Go deeper link to `cups.cs.cmu.edu/soups/2010/proceedings/a11_Wash.pdf`
   returns 404, and the line calls SOUPS "Carnegie Mellon's" symposium, which it is not. Fix: link
   the author's own copy at rickwash.com and drop the attribution.
4. [major] L1-04 the callout carrying the case *for* training has no footnote, no year and no
   figure, while the case against it gets two named studies with numbers and its own section. The
   substance of the neutrality requirement is met; the sourcing asymmetry is the selection-level
   failure in defect 14. Fix: name the 7,089 Korean organisations and the nature of the finding
   (a correlation), and attribute both to the 2025 authors, who report them against their own
   result.
5. [major] L1-05 not one authorial contraction in about 4,900 words, against 111 uncontracted
   forms. The style guide names their absence as the fastest way to sound like a manual.
6. [major] L1-06 one predict and one checkpoint, both in the second half; the evidence section,
   where every surprising number lives, has no think-while-reading block at all.
7. [minor] L1-07 "Training as organisations actually run it moves the outcome by about two points"
   conflates the two arms: annual awareness training showed no significant relationship, and only
   embedded training moved about two points.
8. [minor] L1-08 four unsourced or undated claims: botnets as "one of the commonest things that
   actually happens to a home computer"; currency mining and residential proxying, which are not in
   Wash and not in SOURCES.md; "most credential attacks never guess anything"; and "truer in 1999
   than it is now" using a date as evidence.
9. [minor] L1-09 a two-jurisdiction legal claim about card and bank fraud rules with no citation,
   and the standards 2.5 education-not-advice note absent from the course's first lesson.
10. [minor] L1-10 "this course spends five lessons on where files are and how a request reaches a
    server" — the build is lessons 2 to 7, which is six, and 8 and 9 also precede passwords.
11. [minor] L1-11 "Almost none of the eight pictures makes all twelve worth doing" — Table 3 shows
    that **no** model marks all twelve important, so "almost none" weakens a claim the source
    supports outright. The table also carries a fourth mark, "not applicable", the lesson ignored.
12. [minor] L1-12 "four researchers at Carnegie Mellon" is an affiliation SOURCES.md does not
    record; and the read level is stated for Ho and not for Ion (abstract only) or UNESCO
    (search-summary), which are the thinner reads.
13. [minor] L1-13 "something none of his eight pictures could handle" overstates: Wash hedges on
    the graffiti model. His unhedged claim is about respondents, not models.
14. [minor] L1-14 quiz shapes measured clean (spreads 7, 8, 1, 7, 7, 11; all four indices; no
    adjacent repeat; key longest in 3 of 6, at chance). Two residuals: Q3 option A reused the
    body's own "about two percentage points" (defect 5b), and Q4 had only one option free of an
    absolute against the two-minimum target.
15. [minor] L1-15 three voice tics: "Now the wrinkle", which is pipeline vocabulary from the
    outline plus a self-rating; "The mechanism is worth having in your hands"; and "So here is the
    sentence", a "Here is" opener.
16. [minor] L1-16 no figure anywhere, while Wash's eight counts out of 33 and his Table 3 are real
    data from a source read in full, carried entirely by the densest prose in the lesson.
17. [minor] L1-17 `minutes: 110` is correct as measured, but the outline planned ~45. Not a lesson
    defect; the outline's estimate is wrong.

**Passes that came back clean:** depth against Part 1 (all three tests, every required element);
every other figure checked against SOURCES.md, including all eight model counts, the twelve-item
advice list in order, 28 / 17 / 11 / 14 / 13, 4 against 2.56, 231 / 294, 19,500, ten campaigns and
the two-point embedded effect; no surname from the `unread:` line anywhere; no em dash or en dash;
no banned word or sentence shape; cold start clean against `npm run taught`, with the three
carry-overs and every forward reference checked against the outline; `npm run validate` exit 0.

**Neutrality: passed.** No overcorrection into "training is useless" and no fatalism. The one
weakness was the sourcing asymmetry at L1-04, which sits inside a passing check.

**Resolutions applied, same day:**

1. L1-01 fixed. Publication year and interview years separated, "midwestern" restored.
2. L1-02 fixed in both places; "over 56% of employees ... trained or not".
3. L1-03 fixed. Link now points at the author's copy; "Carnegie Mellon's" dropped; the page count
   dropped rather than restated for a version this session did not open.
4. L1-04 fixed. The Korean study is named with its 7,089 organisations and described as a
   correlation, and both it and the lab studies are attributed to the 2025 authors reporting them
   against their own result, which is how this course actually knows them.
5. L1-05 fixed. Thirty-nine contractions added through the body, heaviest in the direct passages.
   The emphatic negations ("It did not predict doing more") were deliberately left uncontracted.
6. L1-06 fixed. A `:::predict` added before the Kang result, asking the reader to guess whether the
   people with layered pictures also took more precautions. That is now three think-blocks.
7. L1-07 fixed: "The annual training organisations run moved the outcome not at all, and the page
   you land on after clicking moved it about two points."
8. L1-08 fixed. The prevalence claim is now Wash's own framing about why he wrote the paper;
   mining and residential proxying are gone, replaced by spam, a part in an attack on somebody
   else, and traffic laundering, which the source supports; "most credential attacks" softened to
   "a great deal of"; the 1999 date replaced by "an older kind of attacker".
9. L1-09 fixed. The claim is narrowed to what the lesson needs, the jurisdiction dependence is
   named, and the education-not-advice sentence is now in the lesson.
10. L1-10 fixed by dropping the count.
11. L1-11 fixed: "Not one of the eight pictures", with the fourth mark ("nothing to say about")
    added.
12. L1-12 fixed. Affiliation dropped; read levels now stated for Ion and for UNESCO in the body.
13. L1-13 fixed: "something not one of his 33 respondents could conceive of".
14. L1-14 fixed. Q3 option A no longer reuses the body's figure; Q4 option A no longer carries an
    absolute. `check-quiz-shape` and `check-quiz-letters` both clean.
15. L1-15 fixed, all three.
16. L1-16 fixed. An SVG bar chart of the eight models with their counts out of 33 now sits between
    the virus models and the hacker models, drawn on the bible-basics lesson 8 pattern: no `<g>`,
    every size an attribute, `var(--token, #literal)` fills, a `<desc>` naming every row, viewBox
    420 wide. Table 3 was **not** also reproduced; one figure, not two, per the finding's own
    advice.
17. L1-17 **declined as a lesson change** and carried out on the outline instead. `minutes: 110` is
    the measured number and stands. The outline's ~45 estimate for this lesson is wrong and is
    corrected in the same commit; the outline's decision 3 also carried the L1-02 wording and is
    corrected there too, so the next drafter does not inherit the error.

**Status after review:** clean. Wrong facts were found (L1-01, L1-02, L1-07, L1-11) but the fixes
were sentence-level corrections rather than a heavy rewrite, so the Tier B trigger in
`/review-lesson` is not met and the lesson was not escalated.
