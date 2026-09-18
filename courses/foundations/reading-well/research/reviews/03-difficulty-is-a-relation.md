# Reading Well, lesson 3: Difficulty is a relation

Newest review at the bottom.

## 2026-09-18 — Lesson 03 — depth, fact-check and pedagogy, Tier A
**Reviewer:** fresh-context subagent, full pass against SOURCES.md, OUTLINE.md, the editorial
standards, the style guide and `/review-lesson`. Verdict: stay Tier A, but three wrong facts, which
is a trigger for a second full pass after the fixes land. The reviewer also noted that the file
changed under it mid-review, because the quiz had been rewritten and committed while it was reading,
and it re-checked everything against the on-disk state.

**Findings:**

1. [critical] Footnote 2 named "Julianne Reynolds, Courtney Hattan and Paul Markham". The authors are
   Dan Reynolds, Courtney Hattan and Marissa Markham. SOURCES recorded no first names at all, so two
   of the three were invented by the drafter.
2. [critical] "reconstructed what had happened using wooden pieces on a model field, which is a
   clever way of measuring understanding without measuring writing" asserts that the reconstruction
   was *the* measure, when the study used several, and adds a methodological judgement that no
   abstract-level reading supports.
3. [critical] "The claim that prior knowledge is a large determinant of comprehension is well
   supported, from many directions, and is not in doubt" is the sentence the whole lesson rests on
   and it had no source. The lesson names no other direction, and quiz item 3's correct answer
   depends on it.
4. [high] The 2025 review's argument was misattributed. The lesson said it argues "the passages in
   these studies demand trivia and specialised vocabulary". The abstract says the *measures of
   knowledge* focused on vocabulary and trivia, and makes a separate charge against the *text*. The
   error originates in SOURCES.md, not in the lesson, and the lesson contradicted itself two
   paragraphs later by paraphrasing it correctly.
5. [high] The review's second finding, that "the most common baseball comprehension text was
   deceptively complex", is absent from lesson and SOURCES alike. It is the more damaging half for
   a lesson whose opening move is "the words are easy and the knowledge is missing", and leaving out
   the half that cuts against the lesson's own framing reads as motivated.
6. [high] The cricket paragraph fails on jargon and the lesson's word list was curated to hide it.
   "No word in the paragraph is technical in the sense of being unfamiliar. Round, wicket, length,
   followed, edged, slip, overs, captain, glove" omits *off-spinner* and *leg slip*, the two
   genuinely technical compounds. The lesson then conceded the opposite forty-four lines later. Worst
   of all, this is a lesson that teaches the 2025 objection that baseball studies measured jargon
   familiarity, resting on an example that commits it.
7. [high] "you read every word and got nothing. Not a vague impression: nothing" is overstated. A
   reader does get a vague impression, will check, will find they got a little, and will distrust
   what follows.
8. [medium] The three obstacles did not separate. The vocabulary signature was "you can point at
   them", and the lesson's own checkpoint then routed a word the reader can point at, *duration*, to
   missing background. Quiz item 1 rode on the same case.
9. [medium] The syntax worked example was not worked. "Then take the interruptions one at a time"
   never takes them one at a time.
10. [medium] The forward reference pointed at the wrong thing, promising a fairer test in the next
    section, whose plain-words example is a syntax demonstration rather than a knowledge one.
11. [medium] Neither worked example is a real text, against this course's standing convention of
    opening with a real text the reader can open. Lessons 1 and 2 both comply.
12. [medium] The Go deeper hand-off cited How to Learn Anything "lessons 1 and 3" for highlighting,
    which appears in its lessons 1, 2 and 6.
13. [medium] Four flat empirical claims about what most people do, none sourced and none sourceable.
14. [medium] A sneer the lesson cannot afford: the study "gets quoted constantly, including by people
    who have not looked at it closely", written by a lesson that read the abstract and the secondary
    accounts.
15. [medium] An outline element not delivered: Brysbaert on second-language readers, which SOURCES
    flags as a standing gap in the course's evidence base.
16. [medium] The readability misconception was uncited, and the outline's planned cross-reference to
    Writing Clearly lesson 1, which carries actual evidence, was missing.
17. [medium] `minutes: 40` did not cover an exercise step that asks for lesson 2's hour-long survey
    plus a chapter.
18. [medium] Two quiz items tested the page rather than the idea.
19. [low] One predict where the style guide asks for two or three; two Go deeper entries with no
    links; `/courses/how-to-learn-anything` missing the trailing slash the build writes; the claim
    that lesson 4 shows "a single rate is a fiction" when lesson 4's spine is a single figure; "why
    the captain made the change he made" overstated; no figure anywhere; "the author's own use of
    his words".

**Additional finding, from applying the above rather than from the review:** SOURCES.md and the
lesson both carried a quotation, "uniquely designed to make non-baseball fans appear to be poor
comprehenders of that text", attributed to a paper recorded as read at abstract level. **It is not
in the abstract**, re-read from the Semantic Scholar API on 2026-09-18, and nobody here has opened
the paper. Removed from both. The reviewer did not catch this, because it quoted the same sentence
back in its own proposed fix.

**Resolutions:**

1. Fixed to Dan Reynolds, Courtney Hattan and Marissa Markham, confirmed through Crossref and
   Semantic Scholar. A course-wide rule now says that where SOURCES has no first name, the footnote
   uses surnames.
2. Fixed to "one of several ways the study measured what they had taken in", and the judgement
   clause is cut. The footnote says so explicitly.
3. Fixed from the review's own abstract, which is the best evidence available and was sitting in
   hand: the reviewers grant that the links "have been widely documented for decades" and close by
   calling for "reliance on non-baseball studies". The lesson now makes that the answer, which turns
   its weakest sentence into one of its better ones.
4. Fixed in the body and in quiz item 3's stem. SOURCES.md is corrected at the root and the error is
   recorded in `course-wide.md`.
5. Added, with the sentence that says why it matters here more than elsewhere and that it cuts
   against this lesson's own framing.
6. Fixed by replacing the opener. It is now four lines of Hansard from 8 June 1875, verbatim, under
   the Open Parliament Licence and linked: a motion on the international rules for preventing
   collisions at sea, killed by a count-out before it was debated. Not one technical word in it, and
   a newcomer still reads the evening wrongly. The jargon concession is gone, replaced by a paragraph
   explaining why the opener is not about cricket, which is now a point in the lesson's favour rather
   than an apology. This also resolves finding 11.
7. Fixed, and improved by the replacement: the newcomer does not get nothing from the Hansard page,
   they get a confident and wrong reading, which is a more useful thing to demonstrate and is what
   the lesson now says.
8. Fixed with the discriminator the reviewer proposed. The vocabulary signature now includes "the
   test is whether a definition fixes it", and the checkpoint's answer is rewritten around it, so
   *duration* is taught as a knowledge gap wearing a vocabulary costume rather than as an
   inconsistency.
9. Fixed. The nested sentence is now peeled clause by clause, with the second predict block the
   style guide wanted placed where the reader has to do two of the peels. Resolves finding 19's
   predict item.
10. Fixed. The pointer now names the checkpoint at the end of the next section.
11. Resolved for the opener, see 6. **Declined for the syntax example**, which remains an invented
    sentence. A real deeply nested sentence is easy to find, but the invented one is calibrated to
    contain exactly three interruptions and no domain knowledge at all, which is what makes the peel
    teachable. The lesson says in its own voice that the sentence was built for the job.
12. Fixed to lessons 1, 2 and 3 in Go deeper, and the vaguer body version now says "its first three
    lessons" rather than naming a lesson that does not exist.
13. All four hedged to what they are, which is what the drafter has seen rather than what is known.
14. Replaced with a disclosure: this lesson read the abstract and the accounts rather than the paper,
    and says so before criticising it.
15. Added as a callout naming the limit, cited to Brysbaert for the one thing the sources do say,
    that second-language rates are lower, and saying plainly that the rest is a gap.
16. Fixed with a link to Writing Clearly lesson 1, which carries Gooding and colleagues 2021 and its
    518 readers. Citing Gooding directly here would need Stage 1 work; linking the lesson that
    already did it is what the outline asked for.
17. Fixed. The exercise step now states its own time and says it is a separate sitting, and `minutes`
    is 50 against a modelled 50.
18. Fixed. Item 1 no longer restates the body's bond checkpoint and now tests the discriminator on
    an unnamed case.
19. All fixed except the figure, which is now present: a three-block drawing of the obstacles with
    their signatures and fixes, and a caption naming the question that separates the first two.

**Status after review:** clean, and **a second full pass is owed**, because findings 1 to 5 were
wrong facts and `/review-lesson` calls for one after wrong facts are repaired. `npm run validate`
exits 0, `npm run quiz` reports nothing for this course, `npm run minutes` measures 50 against a
declared 50.
