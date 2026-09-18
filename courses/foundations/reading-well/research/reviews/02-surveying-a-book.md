# Reading Well, lesson 2: Surveying a book before you read it

## 2026-09-18 — Lesson 02 — depth, fact-check, pedagogy, voice, Tier A
**Reviewer:** one reviewer in a fresh context, reading the lesson against SOURCES.md, the outline,
the course-wide findings, and the Gutenberg text of Darwin.

**Findings:**
1. [high] The quiz was answerable without reading the lesson: all five keys were option B, and in
   four of five the key was also the longest option, by 25 to 75 characters. `npm run quiz` scored
   both "longest" and "index B" at 100%.
2. [high] "Open chapter 9 anywhere and you find Darwin stating an objection against himself: the
   absence of intermediate fossil links is 'the most obvious and forcible of the many objections
   which may be urged against my theory'." That sentence is in chapter 14, not chapter 9. Chapter
   9's sentence is "Geology assuredly does not reveal any such finely graduated organic chain; and
   this, perhaps, is the most obvious and gravest objection which can be urged against my theory."
3. [high] "It happens to carry every one of the six targets" was contradicted twice by the lesson
   itself, which then says there is no preface and no blurb.
4. [high] An Adler quotation was used against its own sense. "A superficial knowledge of the book at
   the same time that they are trying to understand it" describes readers who do **not** skim, and
   lesson 1 uses it correctly. The misconception list had it as the cost of skimming.
5. [medium] A checkpoint asked which of "Adler's four questions from lesson 1" the survey answers.
   Lesson 1 teaches the four levels, not the four questions, so the checkpoint was unanswerable for
   a reader who has done lesson 1 and nothing else.
6. [medium] The verdict's chapter arithmetic came to 13 of 14 and put chapter 10 under distribution
   and classification rather than the geological succession.
7. [medium] Two Adler quotations had no provenance anywhere in the repo, including "the book may not
   be worth bothering with anyway".
8. [medium] `minutes: 45` counted neither the one-hour survey in the practice block nor the second
   survey in the follow-up exercise.
9. [medium] Quiz item 4 reused the body's own invented book verbatim, so it tested recall of two
   paragraphs. Item 5's explain said "one eighth" over a stem with no page count.
10. [medium] The wrinkle example was a hypothetical trade paperback, where the outline's standing
    convention for this course is a real text the reader can open.
11. [low] Cross-lesson repetition: a sentence about Open Library shared with lesson 1, and Bacon's
    "distilled books" used under the same heading it already fills in lesson 1.
12. [low] The Gutenberg file misprints the heading as "DETEAILED CONTENTS", so a reader following
    along and searching for the correct spelling finds nothing.
13. [low] Three overclaims: "a dozen more" for eleven more, "you will not find in a book published
    this year" for a claim about decline, and "arguing with named contemporaries" where Hooker,
    Lyell and Wallace are Darwin's allies.
14. [low] One `:::predict` where the style guide asks for two or three, and a worked example with no
    gap for the reader to fill.
15. [low] Voice: two "Here is" section openers, and "the mechanism" used as learner-facing prose.
16. [low] Harvard Library is a listed source for this lesson in the outline and appeared only in Go
    deeper, not in the body or in `## Sources`.
17. [low] The 1859 front matter carries two epigraphs, Whewell and Bacon, which are exactly what
    step 1 is for and were not reported.
18. [low] Quiz item 1's explain called the last chapter "step six", where step six is the last two
    or three pages.
19. [note] The frontmatter did not parse as YAML while the review was running, because an explain
    contained a colon followed by a space. Fixed during the review; `npm run validate` had flagged
    it as a draft-only warning.

**Resolutions:**
1 to 18: all fixed. The quiz was rewritten with keys CADBC, no adjacent repeats and option lengths
within about 20 characters, and `npm run quiz` now reports nothing for this lesson. The chapter 9
quotation was replaced with the sentence Darwin actually writes there, and Sources note 2 with it.
The overclaim about the six targets became "five of the six steps land on something, the two that do
not are instructive". The misused Adler quotation was dropped and the misconception rewritten. The
four questions are now introduced in the body before the checkpoint that uses them, with a pointer
to lesson 5. The chapter arithmetic is corrected to five, four, four and one, and the contents walk
now includes chapter 10. The two unsourced quotations are paraphrased. `minutes` is 90. The wrinkle
example is now Bacon's *Essays* at Project Gutenberg, a real text the reader can open, whose
contents page names topics and encodes no argument and which has no index and no publisher's note;
the modern trade-book case stays as a type rather than a named book. The repeated sentences are
replaced, a second predict is added at step 5 with the answer withheld until the next paragraph, the
epigraphs are reported under step 1, Harvard is cited in the body and in Sources, and the
"DETEAILED CONTENTS" misprint is flagged for anyone following along.

19: fixed before the review reported.

**Status after review:** clean.
