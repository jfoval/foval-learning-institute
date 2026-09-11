---
description: Stage 3. Draft ONE lesson from the research and outline
argument-hint: <courses/school/course-id> <lesson-number>
---
You are doing Stage 3 (Draft) of the Foval Learning Institute content pipeline. Arguments: `$ARGUMENTS` (course path, then lesson number).

Read first, all of them: `docs/EDITORIAL_STANDARDS.md`, `<course>/course.yaml`, `<course>/research/SOURCES.md`, `<course>/research/OUTLINE.md` (the section for this lesson and the ones before and after), the previous lesson file if it exists, and `templates/lesson.md`.

If SOURCES.md or OUTLINE.md is missing, stop and say which stage must run first.

**Check that SOURCES.md actually covers this lesson's domain before you draft it**, not just the course's. Personal Finance lesson 6 was drafted for a 3.4-sensitive domain (tax) with no tax research in the file, and the neutrality audit traced the lesson's worst finding straight to that gap. Running Stage 1 on the gap first costs far less than the rewrite it prevents. Lessons 7 to 10 of that course each got their own Stage 1 pass first, and it worked.

Draft exactly one lesson to `<course>/lessons/NN-slug.md` (NN zero-padded). Requirements, from the standards:
- Every required element from Part 1.2: reason to care, precise core idea, mechanism, 2+ worked examples, misconceptions, practice, connections, go-deeper, quiz
- As long as the material needs and no longer (standards 1.3 sets no ceiling; live lessons run from about 2,200 words on a procedural course to over 10,000 on a prose one). Written from the sources, with specifics: numbers, names, cases, mechanisms
- Footnote markers on checkable claims and a `## Sources` section at the end
- Claims sorted correctly as established / contested / value (Part 3.1). Contested and value questions handled per Part 3
- Quiz of 3 to 6 questions in frontmatter, at least half application questions, plausible distractors, `explain` on every question
- Frontmatter `objectives` list
- Reads well on a phone: short paragraphs, headings every few hundred words

Before writing, answer for yourself: what would an expert say a beginner always gets wrong here, and what is the one worked example that makes the mechanism click? Build the lesson around those.

## Defects this drafter repeats

Confirmed across seventeen lessons in two courses, then again in every course since. This list is the accumulated record of what actually goes wrong at Stage 3, and it is the highest-yield thing to read before writing and again before handing the draft to a reviewer. Read your own draft against it; each one has shipped.

1. **Research gathered at Stage 1 and never used.** The largest category every time. Named textbooks uncited, verified passages unquoted, explicit SOURCES.md instructions dropped. Lesson 2 of Bible Basics had eleven such items.
2. **Citing sources that were never read.** Logic lesson 2 cited Hurley and Copi as authorities while SOURCES.md recorded that neither chapter was opened. The worst class, because it is an integrity problem rather than an error. SOURCES.md carries an `<!-- unread: ... -->` line and the build now fails on a citation to anything named there.
3. **Diagrams that contradict the lesson.** One taught the misconception its own quiz punished; one put a ninth-century-BC object below fifth-century-BC events in a timeline; one was drawn on three different scales while its caption claimed one. Algebra shipped three charts with a line struck through a label, and one whose marked crossing point was ten pixels off the actual crossing.
4. **Self-checks that print their own answer** in plain body text instead of hiding it behind `:::predict` or `:::checkpoint`. **Found in eight consecutive Bible Basics lessons**, usually signalled by "Now do it yourself" or "Here's mine". The compounding form is a block whose *stem* states the thing it then asks for.
5. **Quiz items answerable by option shape alone**: the key being the only hedged option, the only one without an absolute, the only one that applies the method, or the longest. **Measure it, do not eyeball it.** At Bible Basics lesson 8 the key was the longest option in five of six items, so "pick the longest" scored 83% against a 70% pass mark. Personal Finance lesson 7's first draft was six out of six, a clean 100% for a reader who read nothing. Target after a fix pass: option lengths within about 15 characters, all four indices used, no adjacent repeat, at least two options per item carrying no absolute.
5b. **Quiz items that reuse the body's own people and numbers.** Four of six in the same draft, one of them the same named person from a checkpoint forty lines above. That tests recall of the page, not the idea.
6. **Contested claims asserted as settled** in the direction that favours the course's position.
7. **Voice tics**: "Here is" section openers, paragraphs ending on a compressed one-line moral, pipeline vocabulary in learner-facing headings ("worked example", "the mechanism", "Do it now").
8. **`minutes` understating real load** by a third to two thirds. Understated in every lesson measured so far; the 2026-09-08 pass found one out by a factor of three. Run `npm run minutes` and take its number.
9. **Quotations trimmed of the qualifier that carries the other side's case.** Three instances in one session: Ehrman's "none of your cherished doctrines appears to be in real danger" with "(at least the variations that we know about)" removed; Chicago's Article XIX quoted for its first denial with the second, "nor can inerrancy be rejected without grave consequences", dropped; the Society for Old Testament Study quoted for "too long to be a parable" while the premise opening its paragraph, "granted that the book is not a historical narrative", was left out. **Each cut in the direction that helped the lesson's argument.** Quote a disagreeing source's shape, not its convenient half.
10. **Positions described in the words of the people who oppose them**, usually because the only sources in the file are the critiques. Bible Basics lesson 11 had three at once, one attributed to a scholar who has published *against* the view it was attached to. The tell is a footnote pointing at a book written against the position it is being used to describe. If the research file has no primary statement of a view, get one or say in the lesson that the course has not read one.
11. **Charts that pass the validator by putting their attributes where it does not look.** Every `font-size` on a `<g>` wrapper rather than on the `<text>` elements, and 24 illegible labels shipped clean. That route is closed now, but the general lesson stands: a green `npm run validate` on a chart means less than opening the page.
12. **Assessments specified in `research/OUTLINE.md` and never written**, while a lesson refers to them as though they exist. Bible Basics lesson 12 pointed at the course project in four places, naming a book list and a format, and the file did not exist.
13. **"If you got X, you probably did Y" that does not trace backwards.** Three times in the Algebra rebuild the lesson blamed a slip that cannot produce the number it was attached to, and once the blamed route produces the right answer. **Work every diagnosis backwards from the wrong answer before it ships.** A wrong diagnosis is worse than none, because the reader who made the slip is told they made a different one.
14. **Fairness that fails at the level of selection rather than accuracy.** Writing Clearly lesson 8 presented as a discovery a qualification its opponent quotes in his own essay, conceded the half of his case he explicitly disclaims, and omitted his strongest evidence. Every sentence in it was true. Personal Finance lessons 7 and 9 failed the same way. **When two positions are described, count the citations each side gets, count who gets the last word, count who is explained against who is merely quoted, and count whose errors are in the misconception list, before reading a word for tone.** Three domains, one defect.

## Two mechanical traps

- **Blocks need blank lines inside them.** `:::predict`, `:::checkpoint`, `:::callout` and `:::exercise` bodies parse with `breaks: false`, so single newlines render as one run-on paragraph; six blocks once shipped as 160 to 290-word walls. `:::figure` and `:::video` are the opposite: they use `parseInline` and must stay one paragraph. **Never put a blank line inside an `<svg>`**, which truncates the chart (the build now fails on it).
- **Open exercise timings with a cue word immediately followed by a digit.** `npm run minutes` only sees a stated duration when a cue (`about`, `around`, `roughly`, `take`, `spend`, `allow`, `give`) is followed straight away by a number that is a digit or a single word. "Allow about thirty minutes" does not match and "twenty five" does not either. Write **"Take 30 minutes over these."** Two Algebra lessons shipped 25 minutes light because of this, which was the whole length of their exercises.

## Before you hand it over

Run `npm run validate` and `npm run minutes`, fix what they report, then re-read your draft against the three tests in Part 1.1 and against the defect list above. Report what you wrote, the sources used, and anything you were unsure about; the reviewer will want to know.

**One lesson per session on a prose course** (`courses/CLAUDE.md`). Two are allowed on a procedural course whose lessons are short and mechanical.
