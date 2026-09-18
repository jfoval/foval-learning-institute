# Reading Well, lesson 8: Reading a research paper

Newest review at the bottom.

## 2026-09-18 — Lesson 08 — depth, fact-check and pedagogy, Tier A
**Reviewer:** fresh-context subagent, which extracted the Brysbaert PDF with both `pdftotext` and
`pdftohtml -xml` and so read the paper's own embedded outline. Neutrality is not applicable to this
lesson and the reviewer said so rather than manufacturing a finding. **All eleven quotations
verbatim**, and every finding again in a sentence without quotation marks.

**Findings:**

1. [critical] **The heading list was wrong, and it is the one element the lesson dares the reader to
   check.** The lesson printed seven headings; the paper has nineteen substantive top-level headings.
   Two of the seven were sub-sections presented as peers of "General discussion". Both sections
   beginning "A meta-analysis of", which are the paper's spine, were missing. So was
   "Fiction reading as a critical test of Carver's theory", and so was the bare sub-heading **Carver**,
   which this course has a standing rule about.
2. [critical] "That is a judgement you can make without reading a word of the body", of a paragraph
   concluding the paper is "a meta-analysis" from a heading list containing no meta-analysis heading,
   and calling the new study "small enough to be a section rather than a paper" on evidence that is in
   the body and, by the only structural signal headings give, points the other way.
3. [critical] **"The abstract does not mention the methods" and "the section the abstract never
   summarises", stated twice as flat universals and refuted by all three of the lesson's own papers.**
   Brysbaert's abstract opens "Based on the analysis of 190 studies (18,573 participants)"; Delgado's
   names its designs and participant count; Reynolds' names nineteen studies from 1978 to 2018.
4. [critical] The worked example for "the abstract is the paper" was Delgado, whose abstract states
   all three moderators explicitly, and which lesson 4 records as read at abstract level *because* the
   abstract carries them. Lesson 8 contradicted lesson 4 on lesson 4's own material.
5. [high] Two of the five Cs were answered from body text the pass told the reader to skip: a date
   that appears only inside a sub-section, and a judgement about how the historical sections read.
6. [high] Keshav's first-pass instruction was misquoted. He says read the section **and sub-section**
   headings; dropping two words is what let the drafter blend two heading levels into one list.
7. [high] **The showpiece conflated two papers' first passes.** Both Reynolds findings are verbatim in
   the review's *own* abstract, and lesson 3 records reading them there, so "neither finding is visible
   on a first pass" is true only of a first pass on the originals. And "both are in the methods" is
   false of the second: no paper reports that its own passage was harder than it looks, and the
   reviewers had to obtain the stimulus and analyse it, which is nearer Keshav's third pass than his
   second.
8. [high] The compressed retelling dropped the conclusion lesson 3 works hardest to establish, so a
   reader meeting this material first in lesson 8 leaves with "the baseball study was debunked", which
   is the sentence lesson 3's checkpoint exists to refuse.
9. [high] The peer-review sentence misdescribed the process twice: journals in these fields use two or
   three reviewers, and reviewers almost always object at length, so publication means the objections
   were answered rather than absent. They also usually work from the manuscript without the data.
10. [medium] A frequency claim put inside a Keshav footnote cluster; the Recommendations section
    credited with naming the gaps, which are in a separate section called "Remaining issues"; the
    General discussion never read, whose three sub-headings are declarative sentences and include the
    reading-gears rejection this course has a standing rule about; a dropped qualifier on the
    thousand-words-a-minute claim; "it is almost never the syntax", which overrides lesson 3's own
    three-obstacle teaching; an unsourced superlative about abstracts reused as the reason a quiz
    answer is right; `minutes: 75` understated by the tool's documented blind spot; item 5's options
    keyable on form alone, since only the correct one answered both halves of the stem; one predict in
    the whole lesson and none in the showpiece; and `SOURCES.md` not covering what the lesson now
    reads.
11. [low] Invented precision about forty minutes; a missing contribution; a verdict shape that
    disagreed with lesson 7's; no contractions; a run of one-line paragraph closers; no starting point
    named for finding an open-access paper.

**Resolutions:** all applied.

**The heading list was rebuilt from the PDF's own embedded outline, read by font**, which is how the
reviewer got it and is now recorded in `SOURCES.md` as the way to do it. The corrected list is longer
and the length became the teaching point: nineteen headings is itself information, two of them begin
"a meta-analysis of" so the pooling is the spine, and **a heading that is a bare surname tells you the
paper is going to argue with that person.** The five Cs are now answered only from what the pass read,
and the pass now reads the General discussion, whose three declarative sub-headings hand a first-pass
reader the conclusions for nothing, including the reading-gears rejection lesson 4 rests on. That is a
better demonstration than the one it replaces and it exists because the review caught the drafter
skipping it.

**Finding 7 produced the lesson's new predict block**, which asks the reader where each of the two
findings would have to have come from before telling them. One was in nineteen methods sections in
print for thirty years; the other was in none of them and took re-doing the work. And the lesson now
ends the section by saying both are in the review's own abstract, so a first pass on the review gets
all of it in ninety seconds: the first pass is cheap on the paper in front of you, and what it cannot
do is reach the paper behind it.

**Status after review:** a second pass is owed on the three rewritten passages, and the reviewer
scoped it and said what each repair was for, per course-wide finding 9. `npm run validate` exits 0,
`npm run quiz` reports nothing for this lesson, `minutes` is 95 with an `EXCEPTIONS` entry.

## 2026-09-18 — Lesson 08 — second pass
**Reviewer:** fresh-context subagent, which read the PDF's bookmark tree with `pypdf` rather than a
text dump. **All eleven quotations verbatim again**, across five sources.

**Findings:**

1. [critical] **The lesson said nineteen and printed eighteen**, in the one paragraph that dares the
   reader to check, in the same sentence the first review found off by twelve. Nineteen is right only
   counting the introduction, which the lesson handles as its own bullet, and only excluding the four
   back-matter headings the PDF also carries at top level, which the lesson neither listed nor
   excluded, so a reader counting in the PDF arrives at twenty-three and cannot see how the lesson
   got nineteen. The error was repeated in footnote 3 and in `SOURCES.md`.
2. [critical] The Category answer still called the new study "small" eight lines after the lesson had
   added a sentence saying the first pass cannot tell you how big it is.
3. [high] **The predict overcorrected.** The repair was for "both findings are in the methods", which
   was false of the second. It now credited the second pass with the first finding entire, when the
   reviewers say they found the vocabulary-and-trivia emphasis "**when analyzing** the measures",
   which meant obtaining them. Which instrument a study used is in a methods section; what the
   instrument asks is not.
4. [high] Two new flat universals introduced by the repair, which is the defect class the first
   review raised: "No paper reports that its own passage was harder than it looks", false of a
   literature that routinely reports readability scores; and a bolded rule that a surname heading
   means the paper will argue with that person, contradicted by the lesson's own Context answer
   eleven lines later.
5. [high] The Carey quotation used at a wider scope than the source gives it: "no correct or
   incorrect approach" is about whether you take the figures before the results text, not about the
   order of sections, and as printed it made Carey contradict the lesson's own central claim.
6. [high] The Connections paragraph sorted an overclaiming abstract onto lesson 7's fourth ground,
   where lesson 7 puts exactly that objection onto rule 11 instead.
7. [medium] "two findings" over a sentence listing three charges; the Delgado sentence vouching for
   lesson 4's sourcing more than lesson 4 can carry; peer review stated as definitional where it is
   typical; a sixteen-word clause reused verbatim from lesson 3 below the validator's threshold; and
   `SOURCES.md` still carrying the Keshav misquote whose two dropped words caused the original
   heading error, so the next drafter would have inherited it.

**Resolutions:** all applied. The heading paragraph now gives the count with its basis, prints the
eighteen post-introduction headings in full and in order, and names the four back-matter headings it
is excluding, so a reader counting in the PDF can reconcile. `SOURCES.md` now records both the count
with its basis and Keshav's instruction with its two restored words and a note saying why they
matter.

**Status after review:** a third pass is owed on the heading paragraph and its downstream counts, and
on the predict's methods claim, which is what the reviewer scoped it to, because both have now been
wrong twice in the same place.
