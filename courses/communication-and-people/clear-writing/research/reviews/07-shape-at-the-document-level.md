# Reviews: Writing Clearly, lesson 7 — Shape at the document level

## 2026-09-11 — Lesson 07 — depth, fact-check, pedagogy, voice and media, Tier A
**Reviewer:** one subagent, fresh context, all passes. Given `course-wide.md` first.

**Verdict on the draft:** not at standard. The worked example the lesson's whole argument rests on
("the same words... Nothing is rewritten") rewrote its source in six places and printed three
counts that sum past their own total. And the lesson cited the wrong GOV.UK page for front-loading,
which is the error CW-03 closed in lesson 2 the day before.

**CW-01:** clean, and the lesson already carries lesson 1's corrected figures. **CW-02:** five of
six present. **CW-04:** clean. **CW-05:** two failures.

### Findings

**Fact-check**

1. [major] **F1.** The consultation note reports 412 responses and then breaks the objections down
   as 260, 140 and 38, which is **438**. Nothing says a respondent could object more than once, and
   the table presents the three as an exhaustive split of one population. In a course that spends a
   lesson telling readers to count, a reader who counts catches it.
2. [major] **F2.** "Nothing is rewritten", of a restructure that changed "will go" to "goes",
   "we would need to know... in order to model it" to "we need to know... so it can be modelled",
   "We are proposing to reduce... to move... and to leave" to three imperatives, "roughly four
   times" to "four times" (the hedge dropped), and "particularly on the east side" to "particularly
   the east side". The lesson's own exercise then says "**Change no sentences in this exercise**...
   If you catch yourself rewriting, you are avoiding the exercise", and asks the learner to count
   changed words and start again if the count "is not close to zero". The demonstration failed the
   test the exercise sets.
3. [major] **F3.** Sources cites GOV.UK "Use clear language" "**on front-loading** and on writing
   so that a reader can find what they need". That page carries neither. It is sentence length,
   word choice, active voice and literacy figures. The clear-structure page is the one that carries
   front-loading and headings, it was added to `SOURCES.md` on 2026-09-10 **specifically for this
   lesson**, and the lesson never used it.
4. [major] **F4, and the sharpest finding of the round.** GOV.UK's clear-structure page gives four
   criteria for a heading: "descriptive", "frontloaded", "active" and "**removable – the content
   should still make sense with the headings removed**". The lesson's thesis is that "headings are
   the document a skimmer actually reads" and its central test is that the headings alone "tell the
   story". "Removable" pulls against that, and it is the one criterion of the four the lesson does
   not mention. CW-02 defect 5 in its purest form: the omission runs in the direction that helps
   the argument.
5. [medium] **F5.** Four quotations from digital.gov's "Design for understanding", all verbatim and
   in context when the reviewer fetched the page, but `SOURCES.md` records only that guide's
   top-level structure as read, with an instruction to "open each page before drafting the lesson
   that uses them". A bookkeeping failure rather than a fabrication.
6. [minor] **F6.** `SOURCES.md` for this course carries no `<!-- unread: ... -->` line at all, so
   the build's unread-citation check has nothing to match on. Course-level; recorded in
   `course-wide.md`.
7. Verified clean: all four digital.gov quotations; the three-word claim about *although*,
   *exactly* and *therefore*; every count of bullets, rows and headings in the prose.

**Depth**

8. [major] **D1.** Front-loading absent, though the outline requires it here as the spaced review
   of lesson 2 at document scale, and names GOV.UK's heading and front-loading guidance as the
   source.
9. [major] **D2.** No "Go deeper". Seven for seven.
10. [medium] **D3.** The worked example is 142 words against the outline's 600. At that length the
    note is one a reader would simply read, so the restructure demonstrates tidying rather than
    navigation.

**Neutrality**

11. None found, and the pass is not needed: no political, religious or contested empirical claim.
    The one contestable position, that formatting is not the designer's job, is argued from a
    stated premise. The predict block on convention headings is a model of not overclaiming.

**Pedagogy**

12. [major] **P1.** Three of six items test recall of the page. Two asked "What does this lesson
    say" and "How does this lesson suggest", and a third restated a misconception almost verbatim.
13. [minor] **P2.** The checkpoint header was an instruction rather than a question.
14. [minor] **P3.** Two think-while-reading blocks in 2,375 words, with nothing across the whole
    prose/list/table section or either worked example.
15. [minor] **P4.** The exercise's "Take the document you have carried" uses a cue word with no
    digit after it, so the minutes tool saw nothing.
16. [good] **P5.** Option shapes clean in the draft, 50 and 33 percent, with one adjacent repeat.

**Voice and media**

17. [medium] **V1.** "navigate" three times in the metaphorical sense the style guide restricts to
    maps.
18. [medium] **V2.** Three "Here is" openers. **V3.** Zero contractions in 2,375 words, seventh
    lesson running. **V4.** Four one-line morals.
19. [major] **V5.** `minutes: 45` against a real load near 70, with no cue the tool can see.
20. [major] **V6.** **No figure at all, in a lesson about the visual shape of a document.** The
    lesson argues that shape is content and shows the reader nothing but prose and two tables.
21. [major] **V7.** The restructured example's headings are bold paragraphs. They render as
    `<p><strong>`, which no screen reader announces as a heading, in a lesson that quotes "use
    heading levels consistently and appropriately to create hierarchy".
22. [minor] **V8.** One link in the whole body.

**Block grammar**

23. Clean, and verified against the built HTML.

### Resolutions

1. F1 — fixed. The middle count is now 114, so 260 plus 114 plus 38 is exactly 412, and the lesson
   stops to say so and to say what would have been wrong if it hadn't. The correction becomes a use
   of the course's own habit rather than a silent patch.
2. F2 — fixed by making the claim true and then making the exception into the teaching. The two
   prose sections are now the note's own sentences verbatim, and the table and list cells are its
   own phrases. **The comparison was run word by word rather than asserted**, and it showed that a
   prose-to-table conversion necessarily deletes something: the note's "The main objection, raised
   in 260 responses, was", "The second most common" and "A smaller number" are gone. That is now a
   paragraph of its own, and it is the best thing in the section: *a table doesn't just rearrange
   prose, it deletes the words the prose needed to carry the comparison and takes over the carrying
   itself.* The lesson says plainly that the four headings are the only new words, and the exercise
   now says headings don't count against the changed-word tally.
3. F3, D1 — fixed together. GOV.UK's clear-structure page is now linked in the body, quoted, and
   cited correctly in Sources, and the wrong entry is gone. A new paragraph brings front-loading up
   to document scale, quoting "put the most important information first" and the inverted pyramid,
   and pointing back at lesson 2.
4. F4 — fixed, and taught rather than mentioned. All four criteria are quoted, and "removable" gets
   a paragraph of its own explaining that both things have to be true at once: strip the headings
   and the prose must still work, keep them and they must still tell the story. A document failing
   the first has put content in its headings; one failing the second has put labels there. Step 4
   of the exercise now runs the test both ways.
5. F5 — fixed by recording in Sources that the digital.gov page was opened and read on 2026-09-11.
6. D2 — fixed, four items.
7. D3 — **declined.** Lengthening the note to 600 words would mean inventing five paragraphs of
   consultation prose, and the section's job is to show three form decisions, which it does. The
   outline's figure is noted as unmet rather than met on paper.
8. P1, P2, P3, P4 — fixed. Two items rebuilt on fresh cases: three shortlisted candidates on three
   properties, and a four-heading list that fails the test in two different ways at once. The
   checkpoint header is a question. The exercise opens "Take 35 minutes over this".
9. P5 — re-measured, and **the rewrite broke it for the fourth round running**: two adjacent
   repeats, D never used, and one spread of 30. Three keys moved and two options resized. Final:
   indices B D C A B D, all four used, no adjacent repeat, spreads 2 to 23, "always longest" 33
   percent, "always shortest" 0 percent.
10. V1 to V4 — fixed. 58 contractions, the three "navigate" uses replaced, the "Here is" openers
    rewritten, morals reduced.
11. V5 — fixed. `minutes: 75`, measured.
12. V6 — fixed. A figure at viewBox 420 showing the same note twice: one unbroken block of fourteen
    prose lines on the left, four sections on the right with heading bars, a three-row table and a
    three-item list, labelled "nowhere to aim" and "four places to aim". Read by eye in the dark
    theme; every fill is a token and every label clears the phone floor.
13. V7 — fixed by disclosure, since a block quotation can't hold real headings. A paragraph now
    says the bold lines stand in for headings, that a real document would use heading elements, and
    why it matters: a screen reader announces a heading and lets a listener jump between them, and
    bold text is just bold text.

**Checks after the fixes:** `npm run validate` clean. `npm run quiz` clean. `npm run minutes` 75
against a stated 75. The restructured example compared with its original word by word. The counts
added up by hand. The figure read by eye.

**Status after review:** clean. No second pass. Next: the voice pass, then its podcast episode.
