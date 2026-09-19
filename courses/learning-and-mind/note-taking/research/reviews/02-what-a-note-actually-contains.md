# Reviews: Note-Taking lesson 2

## 2026-09-19 — Lesson 02 — Stage 4, all passes, Tier A
**Verdicts as returned:** **depth fail on required elements** (one worked example where 1.2 asks
for two, one Go deeper resource where it asks for two to four), **fact-check FAIL**, **neutrality
skipped with reason** (no contested or value claim in this lesson; the course's contested material
is in lessons 5 and 6), **pedagogy FAIL on 4.3**, cold start pass, voice pass with fixes.

### Findings

1. **[critical] Two different sets of studies welded together, and the join attributed to the
   authors.** The lesson said "the caveat is theirs, not this lesson's" and then gave the nine and
   the three, which are counts of studies inside the pooled analysis that reported what students
   *recorded*. The 30 percent and the 10 to 20 percent come from three cited papers that reported
   what was *presented*. Nothing in the source joins them, and the coincidence of "three" was doing
   all the work.
2. **[major] "Fifteen studies reported a numerator with no denominator" contradicted the quotation
   ten lines above it.** The source says fifteen did not report the total presented, which is a
   missing denominator and says nothing about a numerator, and at most nine could have reported one.
   Quiz 3's explanation repeated the error.
3. **[major] The lesson's mechanism is in no source, carries no marker and no label, and a graded
   quiz key rested on it.** "Writing is much slower than speech, so selecting is the whole job"
   appears nowhere in the research file, came from the outline, and gained an intensifier on the
   way.
4. **[major] "There is no evidence the extra words buy anything" is contradicted by this course's
   own source.** Urry's abstract reports higher word count associated with *better* quiz
   performance in both the original and the replication. The Flanigan sentence says something
   narrower: no evidence that typists' volume advantage gives typists an advantage over
   handwriters.
5. **[major] The same claim was attributed to lesson 4 in one place and lesson 5 in two others**,
   and lesson 4 was the wrong one. Neither lesson exists yet, so it would have shipped uncatchable.
6. **[major] Sources entry 2 promised a label the body did not carry**, for the invented
   fifteen-second figure, and the same pattern recurred unpromised at "a low ratio is the usual
   result".
7. **[major] Standards 4.3: one application item of six.** Item 1 also reused the predict block's
   own number, which is defect 5b.
8. **[major] Exercise 1's stated 25 minutes was not the exercise.** Watching a fifteen-to-forty
   minute talk twice while counting every idea in it is an hour or more; `npm run minutes` reads
   the stated cue and cannot check it, so it reported "ok". The outline had asked for a ten-minute
   talk.
9. **[medium] "About one image in six" turned a 10 to 20 percent range into a point estimate at its
   high end.**
10. **[medium] "Two thirds of it was said" did not match the lesson's own figure**, which implies
    about seventy percent, and carried no population.
11. **[medium] Outline decision 2 breached at four of five appearances of the figure**, twice
    becoming a universal claim about note-taking rather than about college lectures.
12. **[medium] One worked example where 1.2 requires two**, and the heading said two.
13. **[medium] Go deeper had one resource, and described the source's extent in a way the research
    file does not record.**
14. **[medium] Three broken bold runs and one broken list item**, rendering literal asterisks.
15 to 18. **[low]** One `:::predict`; no link in the teaching prose; two near-duplicate sentences
    from lesson 1; and a Sources entry claiming lesson 1's scope table says something it does not.

### Clean on inspection
All five quotations string-matched character for character, including the en dash inside "10–20%"
and the ellipsis with what it replaces recorded in the research file: **defect 24 clean, and defect
18 clean, with no verb re-inflected and no hedge removed inside the marks.** The read level is
copied out of `SOURCES.md` and claims less than was read, which is the safe direction. All
arithmetic redone by hand: 18/60, 4/4, three citations each for the two figures. Quiz option spreads
all inside fifteen characters, the key never the sole longest, and the answer sequence does not
match lesson 1's. Every cross-reference opened and confirmed except the one in finding 5. Bold at
16.0 per 1,000 with 18 percent of paragraphs opening bold; no dashes in the lesson's own prose; no
banned words or shapes; block grammar clean; `npm run validate` exits 0.

### Applied
All of them. The nine and the three are separated from the thirty percent, and the judgement that
the base is thin is labelled as the lesson's. The fifteen studies now say what the source says. The
writing-speed mechanism is labelled at the point of use and the quiz explanation requalified. The
volume claim is corrected in both places and now says what Urry actually reports. Every lesson 4
reference is a lesson 5 reference. The two expectations are labelled inline with markers and the
Sources entry lists all four of the lesson's own claims. Quiz item 1 is replaced with a summarising
tool's count and item 5's stem is a case rather than a recall frame. The exercise asks for a ten to
fifteen minute talk, which is what the outline specified. The range is a range, the seventy percent
is scoped, and four appearances of the figure now carry their population. A second `:::predict`
goes into the worked case before the second denominator, a second Go deeper resource is added at
its stated read level, the meta-analysis is linked in the prose, and all four broken runs are
repaired.

### Carried forward
**The broken bold runs were not a drafting defect.** Every one came from an edit: a scripted cut of
one span out of a pair, or a span wrapped that was already wrapped. A repo-wide scan the same day
found fourteen across five courses, three of them live and two of those predating this session.
`npm run validate` now fails on an odd number of `**` runs in a paragraph and on four in a row.
