# Reviews: Writing Clearly, lesson 2 — Put the point where the reader is looking

## 2026-09-10 — Lesson 02 — depth, fact-check, neutrality, pedagogy, voice and media, Tier A
**Reviewer:** one subagent, fresh context, all passes. The reviewer was given lesson 1's review
from earlier the same day and asked to look for the same failures here, since the same drafter
wrote both from the same sources. It found three of them.

**Verdict on the draft:** not at standard. Two of the three sources it leans on were misused, and
its chart showed a document that does not exist in the lesson.

### Findings

**Depth**

1. [major] **D1.** No "Go deeper" section. Required by 1.2, and the identical finding was raised
   on lesson 1 today.
2. [major] **D2.** One worked example, not the two 1.2 asks for. The email is fully worked; the
   wrinkle section, which the outline calls the place "where the course earns trust", is
   exposition with no before and after.
3. [major] **D3.** The wrinkle section is drafted into a research gap. "The usual advice is to
   soften it with praise, which is worse: it buries the decision and reads as insincere" and
   "opening with the conclusion invites them to spend the rest of the document arguing with you"
   are empirical claims about reader behaviour with no source in the lesson and nothing on
   bad-news messages in `SOURCES.md`.
4. [minor] **D4.** "is doing the washing-clothes exercise again, at small scale" — a callback to
   an exercise the reader never did. The demonstration in this lesson is painting a room; washing
   clothes is the Bransford and Johnson study, which the course has deliberately not used.
5. [minor] **D5.** Callout titled "Two words, not two paragraphs" over a body saying "Three
   words", about a three-word title.

**Fact-check**

6. [major] **F1.** The lesson hangs on "they have about 130 words before they decide whether this
   is worth it", cited to lesson 1 and linked to Nielsen. Lesson 1 no longer contains the figure,
   because this morning's review found it is not in Nielsen either. The link cites a source for a
   number it does not have. Nine occurrences in this lesson, and the same figure is in lessons 7
   and 8. Recorded course-wide; see `course-wide.md`.
7. [major] **F2.** Principle 6 quoted as "provide context for your reader before asking
   consideration of anything new." The source reads: "**In general,** provide context for your
   reader before asking **that reader to** consider anything new." The dropped "In general" is
   the qualifier that makes it a default rather than a rule, which the wrinkle section then
   presents as the lesson's own discovery. Trimmed in the direction that helps the argument.
8. [major] **F3.** `SOURCES.md` says the authors' caveat "must survive into the lessons":
   "None of these reader-expectation principles should be considered 'rules.'" It is absent.
9. [major] **F4.** GOV.UK misattributed. The lesson cites the "Use clear language" page as
   treating headings "as navigation rather than decoration". That page covers plain words,
   jargon, active voice, paragraph and sentence length. It says nothing about headings and
   nothing about front-loading, and `SOURCES.md`'s own summary of it lists no heading rule.
10. [minor] **F5.** "A readability formula would have scored it well" — asserted, never computed.
11. [minor] **F6.** Bransford and Johnson: the disclosure is honest and matches `SOURCES.md`, but
    the design detail ("giving different groups its title before, after, or not at all") is known
    to the course only from secondary summaries, while the note says the paper was not read.
12. Verified, no action: principle 6 is correctly the sixth of seven and correctly the context
    principle; the worked email's word counts as stated at the time.

**Neutrality**

13. [minor] **N1.** One hit, and it is the one lesson 1 was corrected for this morning. "A
    readability formula would have scored it well, which is lesson 1's point about formulas
    making a second appearance" restates as settled a question `SOURCES.md` records as contested
    and on which no primary critique was ever opened. Otherwise the pass found nothing: the
    lesson makes no political, religious or value claims and does not touch the Strunk and White
    question, which belongs to lesson 8.

**Pedagogy**

14. [major] **P1.** The checkpoint header is an instruction, not a question: "For each of these,
    decide whether to front-load, and say what the deciding factor was." The header is the
    visible line and the body is hidden, so the reader must be able to answer from the header.
15. [minor] **P2.** Quiz option shapes measured, and this is the one place the drafter's habit did
    not recur: spreads 3 to 13 characters, all four indices used, no adjacent repeat, "always
    longest" 33 percent and "always shortest" 17 percent, both under the 70 percent pass mark.
16. [minor] **P3.** Five of six items use new cases and no body numbers are reused. Items 1 and 5
    had explanations resting on F1's phantom figure.
17. [minor] **P4.** Two distractors close to obviously silly: "Readers never read past the first
    sentence" and "readers dislike change and their reaction should be given no weight".

**Voice and media**

18. [minor] **V1.** Zero contractions in 2,773 words. Lesson 1's V1 repeating verbatim.
19. [minor] **V2.** Three "Here is" section openers, which is in the drafter's own defect list.
20. [minor] **V3.** Pipeline vocabulary in a learner-facing heading: "## Worked example: the email
    with five clauses of throat-clearing".
21. [minor] **V4.** Compressed one-line morals: "That question is the whole test."
22. [major] **V5.** `minutes: 40` against a real load nearer 55, and the exercise carried no
    timing cue, so `npm run minutes` could not see it. Lesson 1's V5 repeating.
23. [major] **V6.** The chart contradicts the lesson. Its caption says "Each bar is the same
    400-word email" with the decision about 340 words down, while the email worked twelve lines
    above it is 69 words with its decision at word 12. A 400-word document appears nowhere in the
    lesson.
24. [major] **V7.** `viewBox="0 0 520 300"`, so eight of the ten labels render at 9.9px in a
    343px phone container, under the 10px floor.
25. [minor] **V8.** All fills are `var(--token, #fallback)` and every token exists in both themes;
    no label runs past the viewBox and no line strikes a label. One stale fallback:
    `var(--text, #1a1a1a)` against a `--text` of `#111418`, which can never render.
26. [good] **V9.** Four think-while-reading blocks, and the opening predict makes the effect
    happen to the reader rather than describing it, which is the best move in the lesson.

**Block grammar**

27. **B1.** Clean. Five blocks, each opening `:::kind` and closing with a bare `:::`, blank lines
    between body paragraphs, no nesting, no blank line inside the `<svg>`, no self-check printing
    its answer in body text.

### Resolutions

1. F1 — fixed here and in lessons 7 and 8, and recorded in `course-wide.md` as CW-01. Every
   occurrence of the 130-word figure is replaced with Nielsen's real pair: about a fifth of an
   average page, and half the information read only on pages of about 111 words or fewer. The
   quiz explanations that rested on it are rewritten.
2. F2, F3 — fixed. Principle 6 is quoted in full with "In general", and the paragraph after it
   quotes the authors' own "None of these reader-expectation principles should be considered
   'rules.'" and points forward to lesson 8. The wrinkle section now opens by crediting them with
   the hedge instead of supplying it for them.
3. F4 — fixed, and the replacement is better than the original claim. The lesson now cites
   **"Create a clear structure for your content"**, which was fetched and read for this review. It
   carries "Put the most important information first. The quicker you get to the point, the
   greater the chance your users will see the information you want them to", the inverted-pyramid
   recommendation, and the requirement that headings be "descriptive" and "frontloaded" and avoid
   "generic headings like 'Introduction'". Quiz item 3 is re-stemmed onto it. The page also
   states independently that users "only read 20 to 28% of text on a webpage", which corroborates
   lesson 1's figures from a second institution. Add it to `SOURCES.md` as read.
4. F5, N1 — fixed together. The passage was scored: Flesch reading-ease 69, Flesch-Kincaid grade
   7.7. The lesson now gives the number and makes the narrow claim ("that's the narrow thing a
   formula can't see: it counts syllables and sentence lengths, and the problem here was in
   neither") rather than restating the contested position as settled.
5. F6 — fixed by adding "as secondary summaries describe it".
6. D1 — fixed. A "Go deeper" section with four items.
7. D2 — fixed. The wrinkle section now works the benefit-refusal letter three ways: buried,
   front-loaded without its reason, and front-loaded with the one reason attached, with the
   reasoning between them. That is the second worked example 1.2 asks for, and it is the case the
   section exists to teach.
8. D3 — fixed by disclosure rather than by sourcing, since no source exists in this course's
   research. A callout now says the three exceptions are the drafter's working judgement reasoned
   from principle 6, that the softening-with-praise and arguing-reader claims are unresearched
   here, and asks a reader who knows the literature to say so in the feedback form. The Sources
   list repeats it. **This is the honest form of a research gap**: it is not hidden, and it gives
   the feedback loop something to catch.
9. D4, D5 — fixed.
10. P1 — fixed: "Which of these four should be front-loaded, and what decides it in each case?"
11. P3, P4 — fixed. Items 1, 4 and 5 have their weak distractors replaced with ones that are
    wrong for a reason a reader has to think about. Re-measured after the rewrite: spreads 7, 10,
    7, 3, 13 and 7 characters; keys B C D C A B, all four positions used, no adjacent repeat;
    "always longest" 33 percent, "always shortest" 17 percent. `npm run quiz` clean.
12. V1, V2, V3, V4 — fixed by a contraction pass and a rewrite of the three "Here is" openers and
    the heading.
13. V5 — fixed. `minutes: 75`, from `npm run minutes` after the rewrite, and the exercise opens
    "Take 30 minutes over this". The jump from 40 is mostly the rewrite: the lesson grew from
    2,553 to 3,292 words, because the worked email is now complete and the refusal letter is
    worked.
14. V6, V7 — fixed by redrawing. **The worked email was the real problem, not the chart.** The
    original was a single 69-word opening paragraph presented as a whole email, so there was no
    honest way to draw where its decision sat: there was no decision in it. The lesson now quotes
    the complete rambling email, 235 words with the decision at word 211, against the front-loaded
    version at 91 words with the decision at word 3. Both counts were measured from the file, not
    estimated. The chart is redrawn at viewBox 420, both bars to one scale, with the 111-word line
    crossing the first bar above its decision and passing clear below the whole of the second.
    Read by eye at desktop and phone width in both themes.
15. V8 — fixed; the stale `#1a1a1a` fallback is gone with the redraw.

**Declined:** nothing.

**Checks after the fixes:** `npm run validate` clean on this lesson. `npm run quiz` clean.
`npm run minutes` reports 75 against a stated 75. Word counts in the prose and in the chart's
`desc` were computed from the file.

**Status after review:** clean. No second pass: the trigger is wrong facts surviving the round,
and these did not.  Next: the voice pass, then its podcast episode.
