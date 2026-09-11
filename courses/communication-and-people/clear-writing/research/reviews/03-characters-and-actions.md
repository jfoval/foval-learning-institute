# Reviews: Writing Clearly, lesson 3 — Characters and actions

## 2026-09-10 — Lesson 03 — depth, fact-check, neutrality, pedagogy, voice and media, Tier A
**Reviewer:** one subagent, fresh context, all passes. Given `course-wide.md` first and asked to
check CW-02's list explicitly. Four of the six recurred.

**Verdict on the draft:** send back. A factual error in the opening sentence, a worked example
whose own rewrite contradicts its claim, a quiz where four of six items test recall of the page,
and a ten-item exercise that rendered as a wall of run-on text.

**CW-01 clean:** no Nielsen figure, no 130-word number anywhere in this lesson.

**CW-02 present:** no Go deeper (D1), `minutes:` understated with no timing cue (V4), zero
contractions (V1), three "Here is" openers (V2), a quotation's qualifier omitted (F1). The sixth,
the key as longest option, was inverted here: the key was the *shortest* in four of six.

### Findings

**Depth**

1. [major] **D1.** No "Go deeper" section. Required by 1.2, and the third lesson in a row to miss it.
2. [minor] **D2.** "Most readers will do that once or twice and then stop." An empirical claim
   about reader behaviour with no source. Neither of the course's two behavioural sources says
   anything of the kind. This is CW-01's exact shape: an invented number beside real ones.
3. [minor] **D3.** "The ending finds you candidates in about two seconds", and a callout titled
   "The two-second sweep". Nothing measures this.
4. [minor] **D4.** "this is where most people who learn this idea go wrong first" — unsupported
   quantification.
5. No padding. Two worked examples present and genuinely worked, five well-chosen misconceptions,
   and the length is earned.

**Fact-check**

6. [major] **F1.** The principle is stated in bold as a rule, and Gopen and Swan's own caveat is
   absent: "None of these reader-expectation principles should be considered 'rules.'"
   `SOURCES.md` says in terms that the caveat "must survive into the lessons". It did not.
   Second lesson running for this defect.
7. [major] **F2.** "only twenty-three words long" of a sentence that is **20 words**. Counted.
8. [major] **F3.** "Nothing was removed. The consultation period, the representations, the
   delegation, the decision are all still there." The rewrite is "Officers with delegated
   authority decided the application after reading the responses." **The consultation period is
   gone.** A before-and-after that does not demonstrate what it claims, in the lesson's first two
   hundred words, on a course whose own exercise step 5 asks the reader to check exactly this.
9. [medium] **F4.** Williams cited as "lessons two and three". `SOURCES.md` records the book as
   contents-read, text-unread, and gives part names rather than lesson numbers. Unverifiable.
10. [medium] **F5.** "Two people arriving independently at the same rule... That is the strongest
    signal in the research that this is not one author's preference." Gopen and Swan are two
    people and Williams a third; and they published nine years after him, so independence is
    asserted, not established, and the course has not read Williams to check whether they cite
    him. `SOURCES.md` says only "strong evidence"; the lesson escalated to "the strongest signal".
11. [medium] **F6.** Williams's read-status is disclosed only in the Sources footer, while the
    body presents him as a read authority ("built his book *Style* around two principles",
    "Williams was teaching writers").
12. Verified against the primary texts, no action: Strunk's "a common fault is to use as the
    subject of a passive construction a noun which expresses the entire action" is verbatim; both
    example pairs are verbatim; rule 10 is "Use the active voice"; Gopen and Swan's principles 3
    and 5 are correctly numbered and worded; GOV.UK's "-ion" and "-ment" quotation is verbatim.

**Neutrality**

13. [minor] **N1.** The lesson's refusal to treat "avoid the passive" as settled is the right call
    and is correctly sourced: Gopen and Swan's paper contains the word "passive" zero times, so
    nothing is put in their mouths. The gap is one of selection. The lesson cites GOV.UK's
    clear-language page for its detector while omitting that the same page says "Use the active
    voice rather than the passive voice." Leaning on a source and passing over where it disagrees
    with you is not accuracy. Neither of this course's two recorded contested questions is
    touched, correctly.

**Pedagogy**

14. [major] **P1.** Only two of six items test application; 4.3 asks for at least half. Items 3 to
    6 were recall: item 3's explanation reused the body's own list of innocent "-ion" words,
    item 4's key restated a line from "When to leave it alone", item 5's key restated the predict
    block's answer word for word, and item 6's stem was the checkpoint header almost verbatim,
    which its own explanation admitted ("The lesson's harder example is exactly this").
15. [minor] **P2.** Option shapes measured. CW-02's sixth defect inverted: the key was the
    shortest option in four of six items, and "always pick the shortest" scored **67 percent**,
    one item below the 70 percent pass mark. Item 2 was the worst, 14 characters shorter than the
    next. In a lesson arguing that plainer sentences are better, a reader who learned only the
    slogan picks correctly without reading.
16. [minor] **P3.** Exercise step 2 has no determinate answer. It asks for "two of the ten", and
    the checkpoint then supplies one clean case, one half-case, and a third it concedes is "a
    defensible reading".
17. [minor] **P4.** The checkpoint header is an instruction, not a question.
18. [minor] **P5.** The callout and exercise step 4 both tell the reader to search for "tion"
    only, while the body quotes GOV.UK on "-ion **and -ment**" and the exercise's own item (e) is
    "Improvement in the results was observed", which that search would never find.

**Voice and media**

19. [major] **V1.** Zero contractions in 2,874 words. Every apostrophe in the file is a possessive.
20. [minor] **V2.** Three "Here is" openers, two of them opening a section.
21. [minor] **V3.** Pipeline vocabulary in learner-facing headings: "## Worked example: the pair
    that is not about the passive", and "## The single highest-yield move in this course", which
    is lifted from the outline and reads as a sales line.
22. [major] **V4.** `minutes: 50` against a real load of 70 to 80, with an exercise asking for ten
    written diagnoses, five rewrites, a document search and three more rewrites. No timing cue, so
    the tool could not see any of it.
23. [minor] **V5.** Textbook sentences and two one-line morals eleven lines apart.
24. No em dashes, no en dashes, no banned vocabulary. No SVG, and the outline specifies none for
    this lesson; the diagnosis table carries the structural work and fits phone width. Three
    primary sources linked in the body.

**Block grammar**

25. [major] **B1.** The ten exercise items, (a) to (j), were ten consecutive lines with no blank
    lines between them inside a `:::exercise`. Bodies parse with `breaks: false`, so they rendered
    as **one run-on paragraph**: "(a) There was considerable disagreement among the trustees
    regarding the proposal. (b) Notification of the change was not received..." This is the whole
    of the lesson's practice, and it was unusable on a phone. Everything else clean.

### Resolutions

1. B1 — fixed, and **fixed as a check**, in its own commit before this one. The scan found three
   more sites doing the same thing, in Clear Writing 5 and Logic and Argument 1, and the build now
   fails on hand-lettered list items with no blank line between them, with three test cases.
   `courses/CLAUDE.md` already said blank lines were required; per rule 9 the prose now has a
   check behind it.
2. F2 — fixed. Twenty words, counted.
3. F3 — fixed honestly rather than by deleting the claim. The lesson now says what actually
   happened: the consultation period was dropped, everything else moved, and if the period matters
   it goes back and the sentence still runs to fourteen words. That is a better teaching moment
   than the false "nothing was removed", because it shows the reader the judgement call.
4. F1, F5, F6 — fixed together in the section that states the principle. The principle is followed
   immediately by Gopen and Swan's own caveat, quoted, with a line saying they are describing
   expectations rather than issuing prohibitions and pointing at lesson 8 and at this lesson's own
   "When to leave it alone". Williams's read-status is now in the body at first mention ("as
   everyone who has read it reports, including the sources this course has read"). The
   independence claim is replaced with an honest one that notes the nine-year gap and that this
   course cannot check whether Gopen and Swan are downstream of Williams.
5. F4 — fixed: "Part Two, Clarity", no lesson numbers, and the Sources entry says why.
6. N1 — fixed. The passive section now quotes GOV.UK's "use the active voice" and its reason,
   states that this is a defensible position, and narrows its own claim to the one it can support:
   that the *particular* fault Strunk named is about buried actions, and conflating the two makes
   you fix the wrong one. The Sources entry records the same.
7. D1 — fixed. Four items, including Williams's Part Two named as the thing to read beyond this
   course, which is the honest place for a book the course has not read.
8. D2 — fixed: replaced with the cost, not a behaviour claim, and pointed at lesson 1.
9. D3, D4 — fixed by dropping the invented numbers.
10. P1 — fixed. Items 5 and 6 are rebuilt on material the reader has not seen. Item 5 uses
    **Strunk's third pair**, "Confirmation of these reports cannot be obtained" against "These
    reports cannot be confirmed", which was fetched from Gutenberg and verified verbatim for this
    review and which the lesson never shows. Item 6 is a school newsletter sentence written for
    the item. Four of six now test application.
11. P2 — fixed. Item 2's fourth option is now the shortest of the four *and* the second worst, so
    a reader picking by length picks badly, which is itself the lesson's point about concision
    being a different move. Re-measured: spreads 4 to 20; keys C A D B C A, all four positions
    used, no adjacent repeat; "always longest" 33 percent, "always shortest" 17 percent.
12. P3 — fixed: step 2 now asks for two, warns that one of them is only half a case, and asks
    which half. The checkpoint header answers that question.
13. P4, P5 — fixed.
14. V1, V2, V3, V5 — fixed. Contraction pass, the three "Here is" openers rewritten, both headings
    renamed, and one of the two morals cut.
15. V4 — fixed. `minutes: 75`, measured. The exercise opens "Allow 50 minutes for this". **Note
    for the next lesson:** the tool's cue words are about / around / roughly / take / spend /
    allow / give it, and the per-lesson total is capped at 30. "Set aside 50 minutes" was written
    first and matched nothing, and the lesson read 45 until the wording changed. Use one of the
    words the tool knows.

**Declined:** nothing.

**Checks after the fixes:** `npm run validate` clean on this lesson. `npm run quiz` clean.
`npm run minutes` reports 75 against a stated 75. No em dashes, no en dashes. The ten-item
exercise re-rendered and read as ten separate paragraphs.

**Status after review:** clean. No second pass. Next: the voice pass, then its podcast episode.
