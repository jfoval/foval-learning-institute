# Reviews: Using AI Effectively lesson 11, "Reading a claim about AI"

## 2026-09-18 — Lesson 11 — facts, quotations, sourcing, decisions, pedagogy, quiz, voice, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **FAIL** on two Part 2 defects and a quiz
that was one-sixth application. Nothing needed a rewrite. The reviewer also ran a neutrality pass,
because the lesson handles a contested productivity question and a named vendor dispute, and it came
back clean: the vendors' case is put at its strongest before it is measured, and "the vendors weren't
simply lying" is the ideological Turing test done properly.

Recorded before the findings, because it is the first time in this course: `npm run minutes`
measured the declared figure exactly, and the key was never the sole longest option in any item.

### The two that carried the verdict

**L11-01 a capability claim with no model, no date and no source, asserted as true, in the lesson
that teaches readers to refuse exactly that.** The lesson printed "Scored 92% on the bar
examination", called it "already measured", and then said "the claim is true". Nothing in
`SOURCES.md` supports any bar-examination figure. Lesson 1 handles the same example correctly, as a
hypothetical: "Somebody tells you that a new model scored 92% on a professional benchmark." Lesson
11 hardened the hypothetical into a fact, six lines after telling the reader this course has carried
a model and a date in every sentence that needed one, and it breached decision 2 in the one lesson
decision 2 names as the container for perishable material.

**Closed** by sorting the claim without the number: "Scored at the top of a professional
examination", with the two-step preserved and made sharper, since the lesson can now say the claim
may be perfectly true and the inference still untested.

**L11-02 an altered quotation, the same one lesson 7 had altered.** The lesson printed
`"eliminating"` and `"avoid[ing]"`, where `SOURCES.md` records `"eliminat[es]"` and `"avoid[s]"`,
and printed the first with no brackets at all, which claims the source wrote that word. Two lessons
of one course quoting one sentence two different ways. **Closed**, matching lesson 7's corrected
version, which was fixed in the same session for the same reason.

### Sourcing and cross-references

**L11-03 three cross-references sent the reader to an argument lesson 6 does not make.** All three
said lesson 6 explains why a benchmark result does not transfer. The word *benchmark* does not
appear in lesson 6, which argues something related and different: that the frontier does not track
human difficulty, and that tasks split on whether they are constrained by what is in the request.
**All three closed** by naming what lesson 6 actually supplies and letting the benchmark step be
this lesson's own.

**L11-04 the Sources block said the body labels the feel-fast account as the course's own, and the
body did not.** The body offered testability ("you can test it against your own week") and never
said no source states it. Four other lessons observe the convention properly. **Closed** with one
clause at the point of use. This is the same defect as L8-01, caught in two lessons on the same day,
which is why it is now in `docs/QUEUE.md` as a drafting defect rather than a lesson fix.

**L11-05 Go deeper described and rated unread material.** The course has METR's abstract only, and
the entry named "the forecast-against-outcome table" inside the paper and called it the single most
useful thing in this lesson, which is also an internal muddle, since the table would be in the paper
rather than in the lesson. **Closed**: the entry now recommends the paper as a whole and says the
abstract carries the three numbers.

**L11-06 three unsourced claims about what people do**: "the commonest error in reading this
material", "these are rarer than people think", "most writing on this subject slides between them
without noticing". **All three closed** by rewriting them as claims about the claims rather than
about readers. Same family as L7-06.

### Nits, all closed

**L11-07** "Nine lessons ago this course told you" pointed at lesson 2; the sentence is lesson 1's.
**L11-08** "a thousand students" where the source says nearly a thousand high-school mathematics
students, inside the sentence arguing that scope-carrying facts are what survives.
**L11-09** "most of them weren't lying" attached to sixteen VPN products, where Digital Literacy's
claim is about the twelve that misrepresented.
**L11-10** "the sorting is the same" was not quite true: Digital Literacy sorts into measurable,
unmeasurable, and false or empty, and this lesson splits that third pile. The adaptation is the
better taxonomy and it is now presented as an adaptation.

### Pedagogy

**L11-11 the quiz was one-sixth application**, against standards 4.3's at least half. Five of six
stems were the lesson's own material read back, one of them near-verbatim. Defect 5b, closed on
lesson 6 at L6-16 and back here. **Closed**: items 1, 3 and 6 were rebuilt on cases that appear
nowhere in the body, which puts the lesson at four of six requiring application.

**L11-12 one `:::predict` and no `:::checkpoint`, in the course's final lesson**, with nothing at all
checking the hardest idea, which the lesson itself flags. **Closed** with a checkpoint on exactly
that idea: whether two timed tasks count for anything against a colleague's "that is not a study".
It is the right place for it, because the lesson's own argument is that a tiny measurement beats an
impression, and a reader who has just been told his year of use is worthless needs to be told what
is not.

### The quiz, mechanically

**L11-13 position 3 was never the key and items 5 and 6 were an adjacent repeat.** Both slip under
the linter's thresholds, so only a hand count catches them; defect 5's stated target is all four
positions and no adjacent repeat. **Closed**: keys now run DCACBD.

**L11-14 defect 17, once**: item 6's explanation named "the first answer". Every other explanation in
the lesson named distractors by content. **Closed with the rebuild.**

### Voice

**L11-15 the banned "not X. It is Y" across a full stop**, with a five-item list for rhythm attached
to it. Closed on lesson 6 at L6-19 and back here. **Closed.**
**L11-16 the "Here is" section opener**, defect 7. **Closed**, and the same sentence now carries the
L11-04 label, which is the tidier fix.
**L11-17 contractions at 9.0 per 1,000**, over the 5 to 8 band and under the ceiling. **Closed at
7.8**, after overshooting to 3.4 on the first pass. Same two-pass mistake as L7-19, and the note
recorded there applies: the validator counts `it's`, `that's`, `there's` and their family as
contractions and excludes ordinary possessives, and it counts the Sources block in the word total.

**Recorded as clean:** no em dashes, no en dashes, no banned vocabulary, nothing cited from the
`unread:` line, and the opener is not the "Two X" formula the lesson 6 review warned lessons 9 to 11
away from. One-line morals are present but lighter than lessons 3 to 6.

**Open, and in `docs/QUEUE.md`:** the body names Digital Literacy, How to Learn Anything and four
lessons of this course and links none of them. That is a repo-wide convention question rather than
a defect in this lesson, and it should be settled once and applied everywhere.

### Verified clean by the reviewer, recorded so it is not re-checked

METR's figures exact against the research file (16 developers, 24% forecast, 19% slower, 20% still
estimated afterwards). "Between 17% and 33% of the time" verbatim. The reduction against a general
chatbot supported. Cross-references to lessons 1, 3 and 7 all say what those lessons say. Digital
Literacy's VPN evaluation and its sorting objective check out. How to Learn Anything's
retrieve-then-check argument supports the second exercise. Decision 1 holds: no product named, no
interface instruction.

### After the fixes

`npm run validate` exits 0 with no warning on this file. Measured minutes 95, declared 95.
Contractions 7.8 per 1,000. Quiz keys DCACBD: four positions, no adjacent repeat, key never the sole
longest, four of six items requiring application.
