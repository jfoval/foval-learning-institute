# Reading Well: course-wide findings

Findings that belong to no single lesson. Read this before reviewing or drafting anything here.

## 2026-09-17 — Two standing hazards created by this course's own sources

Both came out of the Stage 4 review of lesson 1 and neither is confined to it.

### 1. The Adler text this course reads is an unauthorised scan

`research/SOURCES.md` records that Adler and Van Doren's 1972 edition was read in full from the
Internet Archive's OCR. That item (`howtoreadabook1972edition`) is a **community upload**: its
collections are `opensource` and `community`, its uploader is a private Gmail address, and it
carries no `licenseurl` and no `rights` field. *How to Read a Book* is a 1972 Simon & Schuster book
and is in copyright.

Reading it to research a course is one thing. **Recommending it to learners as "readable free" is
another**, and standard 4.5 says to use only what we are allowed to use. Lesson 1 did exactly that,
twice, and the links were removed at review.

**The standing rule for this course, until John decides otherwise:** cite the scan in `## Sources`
as the text that was consulted, and never link it in the body or in Go deeper as a reading route.
Point learners at Open Library, a library, or the publisher instead.

**This blocked the outline's plan for lesson 2**, which was to survey Adler's own book in front of
the reader "so the reader can follow along". **Resolved 2026-09-17:** lesson 2 surveys Darwin's *On
the Origin of Species* ([Gutenberg #1228](https://www.gutenberg.org/cache/epub/1228/pg1228.txt))
instead. It was checked against all six of Adler's steps and carries every target, including the
"Detailed Contents" that is the analytical table of contents Adler praises and thinks has died out.
Gibbon, Adler's own example, was checked and rejected: the Gutenberg edition loses his marginal
summaries. The outline records the choice and the neutrality note that goes with it.

### 2. Brysbaert is a source under tension with Carver, not a source that confirms him

Lesson 1 drew Carver's five reading gears from Brysbaert's 2019 review and framed them as
measurement confirming Adler. Brysbaert is in fact partly arguing against Carver: he writes that
Carver "ventured" the five gears and "estimated" their speeds, names him "a final author influential
in promoting the 300 wpm norm" the paper exists to correct, and devotes a section to testing his
theory. `SOURCES.md` also overstated the calibration point, saying Carver's figures were calibrated
on the 300 wpm norm while Brysbaert says the norm "was also established independently" from Carver's
compressed-speech work. Both were corrected on 2026-09-17.

**Corrected again on the second pass, and this is the version that stands.** Reading Brysbaert's
general discussion, rather than only his abstract and history sections, shows he does not merely
doubt Carver: his section heading is "There is no evidence for reading gears except for the
distinction between reading and scanning". He found no difference between reading for recognition
and reading out of interest, no bimodal curve, and no difference in kind for reading for recall,
which is slower because of "an increased structuring and organization of text information" seen as
"many regressions and rereadings".

**Standing rule:** no lesson may hand a reader the five-gear ladder. Two things survive and both are
usable. Reading against scanning is a real distinction with eye-movement evidence behind it. And the
recall finding says the extra time goes into what the reader is building rather than into a
different mode, which is this course's central claim arriving from the measurement side, so it is
worth more to us than the ladder was. Lesson 4 owns the rates and should state the rejection
directly.

## 2026-09-18 — What the Stage 4 reviews of lessons 2, 3 and 4 have in common

Three findings recur across lessons and are worth naming once rather than three times.

### 3. SOURCES.md is the thing to check, and twice it was the thing that was wrong

Lesson 4's review found three separate drifts off a source that was sitting in the repo the whole
time: Rayner's constructive finding recorded as "vocabulary and practice" but written into the
lesson as "vocabulary and background knowledge", which is this course's own theme read back into a
citation that does not carry it; a claim about the perceptual span of a fixation that came from
`OUTLINE.md`, which is a plan and not a source; and a band of "175 to 320" that merges the
non-fiction and fiction ranges into a figure Brysbaert never reports.

Lesson 3's review found the error one level further back. `SOURCES.md` itself compressed the 2025
baseball review's two charges into one, saying it "argues the texts demand trivia and specialised
vocabulary". The abstract says the **measures of knowledge** focused on vocabulary and trivia, and
separately that **the most common comprehension text was deceptively complex**. Different charges,
different targets, and the second is the more damaging one for a lesson built on "the words were
easy". The entry has been corrected.

Worse, that entry carried a quotation, "uniquely designed to make non-baseball fans appear to be
poor comprehenders of that text", attributed to a paper recorded as read at abstract level. It is
**not in the abstract**, re-read from the Semantic Scholar API on 2026-09-18, and nobody here has
opened the paper. It was in the lesson too. Both are removed.

**Standing rules that follow.** Give every Stage 4 review this course's `SOURCES.md`, because a
reviewer who only checks the lesson against itself cannot catch any of the above. `OUTLINE.md` is a
plan and never a citation. And a source read at abstract level may be quoted only from its abstract,
which means the abstract has to be in front of you when you write the quotation marks.

### 4. Author names were invented

Lesson 3 shipped "Julianne Reynolds, Courtney Hattan and Paul Markham" in a footnote. The authors
are **Dan Reynolds, Courtney Hattan and Marissa Markham**, confirmed through Crossref and Semantic
Scholar. `SOURCES.md` recorded no first names at all, so two of the three were supplied by the
drafter. **If SOURCES has no first name, the footnote uses surnames**, or somebody looks it up.

### 5. The quizzes were gameable in the same way twice

Lessons 3 and 4 both shipped with every answer at index 1 and the correct option the longest in
every item, which is a quiz a reader can pass without opening the lesson. Both are fixed and
`npm run quiz` now reports nothing for this course. **Run `npm run quiz` before the review, not
after it**: it takes a second and it takes a whole class of finding off the reviewer's plate.
