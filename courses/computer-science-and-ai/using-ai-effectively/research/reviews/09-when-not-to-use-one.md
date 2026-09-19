# Reviews: Using AI Effectively lesson 9, "When not to use one"

## 2026-09-18 — Lesson 09 — facts, quotations, sourcing, decisions, pedagogy, quiz, voice, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **FAIL**, bounded fixes rather than a
rewrite. `sensitive_domain: true`, so the neutrality handling was checked rather than skipped.

Recorded first, because it is the best first-pass set of mechanics the course has produced:
`npm run validate` exit 0 with no warning, minutes declared and modelled both 95, the quiz absent
from `npm run quiz`'s findings, **contractions at 6.64 per 1,000 on the first pass** (only lesson 6
has managed that here), keys ACBDBC across all four positions with no adjacent repeat, and **defect
17 absent for the third lesson running**.

### The two that carried the verdict

**L9-01 a quotation re-inflected inside its own marks.** The lesson printed the negative effects
`"are largely mitigated by the safeguards in GPT Tutor"`; `SOURCES.md` records the quoted unit as
`"largely mitigated by the safeguards in GPT Tutor"`, with the verb outside. **Closed.** Fifth
lesson in this course to show the family (L3-01, L5-03, L7-01, L11-02), and it is the defect these
reviews keep closing, which is why it is now first on the drafting defect list.

**L9-02 the study's design misdescribed, in a sentence with no quotation marks in it.** "The
students got access to GPT-4 during practice sessions, in one of two forms" says every student had
access. Sixteen lines later the lesson compares against "students who had never had it at all", and
later still counts "the three conditions". The lesson contradicted itself about the design of the
one study it rests on. **Closed**: three conditions are named where the study is introduced, with
the no-access group given its own line, because it is the comparison the 17% is measured against.

### Decision 6, which the outline makes this lesson's job

**L9-06 both exercises assumed the reader already uses one.** "List every task you currently hand
over"; "Take one task you use a system for and intend to keep using it for." A reader who has not
chosen to use one, or is required to and would rather not, could not begin either, in the lesson
decision 6 exists for. This is L1-10 exactly, closed on lesson 1 the same way. **Closed**: the first
exercise now takes tasks you hand over, tasks you are expected to hand over, and tasks you have
declined, with a mirror-image step 4 for the last of those; the second works on a hypothetical, and
says why that is worth doing.

**L9-07 the subtler breach, and the better catch.** The misconception answer made declining
legitimate *conditional on having run the course's own procedure*: "somebody who's weighed the trade
and decided isn't being averse. They're doing what this lesson asks." That leaves a reader who
declines on any other ground inside NIST's "unnecessarily averse". **Closed**: the lesson now points
at the word "unnecessarily", names grounds this course has no standing to weigh, and ends "This
lesson supplies one consideration. It doesn't supply the licence."

### Pedagogy

**L9-04 the wrinkle worked example was three narrated sentences**, and the simple one printed none of
the work it existed to show: "She gets three more" named no flag. Sixth consecutive lesson with this
defect (L3-06, L4-03, L5-06, L6-10, L7-12, L8-15). **Both closed.** The claims handler's two lists
are now on the page, three flags against five, with the two she missed named and one of them still
missed on the next file, so the reader can watch the trained eye being built instead of being told
it is. The withdrawal letter is worked through the lesson's own question, and then a second version
of it turns the verdict over by changing one fact about the man's next twelve months.

**L9-15 cross-lesson repetition the validator cannot see.** The spine example was a conveyancing
paralegal; lesson 6's spine example is a conveyancer and lesson 1's quiz has a paralegal. The
overlap check only sees reused wording, not a reused profession. **Closed**: the trade is now
insurance claims handling.

**L9-11 the mechanism lived only behind a button.** The outline names the retrieval account as this
lesson's mechanism and all of it was the hidden answer of the `:::predict`. L5-07's shape. **Closed**
with one sentence in the body, which the predict block then expands rather than supplies.

**L9-19 the worked example asserted what a system produces with no line saying the case was
constructed**, which L8-09 closed on lesson 8 with a framing line. **Closed the same way.**

**L9-22 zero media, ninth lesson running**, on three arms across two time points held in prose over
eighteen lines. **Closed**: a three-row table, which is the second piece of media in the course after
lesson 8's.

### Sourcing and cross-references

**L9-08 a cross-reference that says the opposite of the named lesson.** "**How to Learn Anything**
taught that retrieval strength is built by retrieving." That course teaches that rereading raises
retrieval strength and fluency while doing little for storage strength, and storage strength is what
this lesson's whole argument is about, since it is what survives when the tool goes away. **Closed**
without the jargon, which is the right call for a Term 1 reader: reconstructing from nothing is what
builds the memory that lasts.

**L9-05 Go deeper described and rated material the course has not read** ("the significance
statement, which is four sentences"), where `SOURCES.md` records abstract only. Fourth recurrence
(L3-03, L7-03, L11-05). **Closed.**

**L9-16 an unsourced claim about what most people use** ("a standard chat interface, of the kind most
people use", where the source says "a standard ChatGPT-style interface"). **Closed** with the design
rewrite.

**L9-09 an unscoped superlative about the literature** ("the best-designed thing anybody has on this
question"). **Closed** to what the research file supports. The body's other superlative, "the
best-evidenced study in this course's research", was correctly scoped and stays.

**L9-10 footnote 3 had no marker in the body.** Milder than L8-01, because the body does carry the
label and carries it well. **Closed** with the marker.

**L9-12 an inference stated as the study's finding.** "The students in the study couldn't tell
either" in the section grading the reader's beliefs; the study measured grades, not self-assessment.
**Closed**, labelled at the point of use.

**L9-17 a forward reference lesson 11 does not honour** ("including claims about learning"). Lesson
11 sorts a capability claim, a productivity claim and a vendor claim, and no claim about learning.
L4-05 / L11-03 family. **Closed.**

**L9-18** Go deeper said NIST names both failures in the same paragraph where the body and the
research file say section. **Closed.**
**L9-20** objective 1 asked for "both of the study's figures" where the body insists three travel
together. **Closed.**
**L9-21** a quiz explanation pointed at "a different lesson" that does not exist in this course,
which is defect 12's shape. **Closed.**
**L9-23** "propaganda" as a loaded word in the author's voice for how a figure gets presented.
**Closed** to what was meant, which is an argument the study does not support.

### The quiz

**L9-03 two of six items required application**, against standards 4.3's at least half. Item 3's stem
was the body's own man-and-his-letter case handed back near-verbatim, and items 5 and 6 restated
body sentences. Defect 5b, closed at L6-16 and L11-11, and L11-11 carried a FAIL on exactly this
count. **Closed to four of six**: item 3 is now a bookkeeper asked to review somebody else's coding,
and item 6 a trainee whose rule protects the wrong half of his job. Both are cases that appear
nowhere in the body, and both turn on the lesson's distinction rather than on its sentences.

### Voice

**L9-13** the "Here is" section opener, defect 7, closed on lessons 2, 3, 4, 7 and 11. **Closed.**
**L9-14** the banned "not X, it's Y" across a full stop, closed at L4-15, L6-19, L7-21, L8-26 and
L11-15. **Closed.**

**Contractions.** 6.64 on arrival and in band, then the fixes above added roughly 750 words of prose
with almost no contractions in it and pushed the file down to 2.0, under the floor. **Closed again at
5.3.** Recorded because it is the third lesson in a row where applying a review moved the contraction
rate out of band in the opposite direction: **measure after the fixes, not before them.**

**Recorded as clean:** both NIST quotations and the "crutch" quotation exact. Nothing cited from the
`unread:` line. Decisions 1, 3, 4 and 7 clean. The course's own generalisation is labelled in the
body at the point of use, which is the convention L8-01 and L11-04 were about, done right here on
the first pass. Three standalone one-line morals, the lightest density in the course. The opener is
not a pair.

### After the fixes

`npm run validate` exits 0 with no warning on this file. Measured minutes 100, declared 100.
Contractions 5.3 per 1,000. Quiz keys ACBDBC: four positions, no adjacent repeat, four of six items
requiring application.
