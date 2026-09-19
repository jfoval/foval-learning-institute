---
description: Stage 3. Draft lessons from the research and outline, as many as the budget allows
argument-hint: <courses/school/course-id> <lesson-number>
---
**Run `npm run taught <course>` before drafting.** It prints every objective a learner has already
met on the Core path, so this lesson builds on them by name instead of re-teaching them or assuming
something that was never taught. Its second half lists earlier courses that do not exist yet:
assume none of that.

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
15. **This drafter writes its first pass with no contractions at all, and it is not close.** Measured on three consecutive drafts on 2026-09-18: the Digital Literacy project came in at 2.9 per 1,000 body words, and Using AI Effectively lessons 1 and 2 at **0.0 and 0.3**, against the repo's band of 5 to 8. The style guide names their absence as "the fastest way to sound like a manual", and a reader meets it in the first sentence. `npm run validate` warns on it, so the cost is only that a fix pass is needed every time; **write the draft in the voice and save the pass**. The tell while drafting is "it is", "does not", "cannot" and "you will" three times in a paragraph.
16. **The same drafter's quiz keys run long and cluster on one position, every time.** Same three drafts: the key was the sole longest option in 4 of 6, 5 of 6 and, on a 32-item test, 15 of 32, and one lesson used only two of the four answer positions across six items. Both are measured by `npm run validate`. **Fix them by lengthening distractors rather than trimming the key**, which is what the warning says and is the right way round, because the key is usually longest for the good reason that it carries the reasoning.
17. **Explanations that refer to options by position collide with explanations that refer to anything else by position.** A review on 2026-09-18 found a test where "the fourth-named" meant the fourth thing mentioned in the explanation while every other explanation used the fourth *option*, and a lesson where one explanation said "the first request" about the stem and "the first" about an option in consecutive sentences. **Name each distractor by its content instead**, which survives the options being reordered to fix defect 16 and reads better anyway.

18. **Quotations re-worded inside their own marks, most often by re-inflecting a verb.** Measured
    across one course on 2026-09-19: five of eleven lessons, and then a podcast script one stage
    later, in the same course, on the same sentence. A vendor's `"eliminat[es]"` and `"avoid[s]"`
    were printed as "eliminating" and "avoid[ing]", the second with its bracket moved to cover the
    change; a textbook's "we now *try to* reserve" lost its hedge; a study's "largely mitigated"
    gained a verb it did not have. **The bracket convention exists to declare an alteration, and
    each of these used it to hide one.** Check quotations by string match against `SOURCES.md`
    rather than by eye, because every one of these reads perfectly.
19. **A hedge or a scope dropped in the unquoted lead-in to an accurate quotation.** The mirror of
    18 and harder to see, because the marks are clean. "Risks arise" for NIST's "Risks from
    confabulations **may** arise"; "the standards body describes" for a definition NIST quotes from
    somewhere else; "nothing you withhold prevents an inference" for a source that says a system
    "may be able to correctly infer". Four lessons of one course in one session. **The sentence
    before the quotation is part of the citation.**
20. **Anything the course constructed itself, labelled in a footnote instead of in the body.** Two
    lessons of one course had a Sources block asserting "the lesson says so in the body" where the
    body said no such thing, and in one of them the footnote carried no marker, so it was
    unreachable, while four quiz items graded the reader on the construction as though it were
    established. **Label it where the reader meets it**, in one clause, and keep the footnote for
    the detail.
22. **A hedge can dress a fabrication, and it reads as scrupulousness.** Measured on 2026-09-19.
    A Sources entry said a case was reported "from Orbell and Verplanken" and added "this course has
    not read the Orbell and Verplanken paper itself, so the case is carried at one remove". Nothing
    in the research file mentioned either name in that connection: **the chain of custody was
    invented, and then hedged against.** The same entry claimed the body did not quote the case, and
    the body quoted it. **An unprompted hedge is a thing to check, not a reason to relax**, because
    the drafter produces them exactly where it is least certain. For a reviewer: every "at one
    remove", "this course has not read" and "reported from" is a claim about provenance, and
    provenance claims are checkable against `SOURCES.md` in seconds.

    **Measured again on 2026-09-19, three times in one course, and the mechanism is now clear.**
    Time Management lessons 1, 3 and 4 each shipped a constructed case or an attribution labelled
    only in the Sources block, and in two of the three the footnote had **no marker anywhere in the
    body**, so it was unreachable. The drafter is not forgetting the label. It writes the footnote
    first, honestly and in full, and the footnote then feels like the job done. **So check the other
    way round: for every Sources entry that begins "this is the course's own" or "X is constructed",
    go and find the sentence in the body that says so.** If there is only a marker, that is the
    defect; if there is not even a marker, the reader cannot reach the admission at all. The convention already exists in this repo: "which is this course's inference from
    the same mechanism rather than a finding", inline, at the point of use.
21. **Go deeper recommending, describing or ranking a part of a source nobody here has opened.**
    "Read section 4 for the typology, which is the most transferable thing in it", where the
    research file records the abstract only. Four lessons of one course, plus one that named a
    table's contents and called it the most useful thing in a paper the course had not downloaded.
    **Recommend the work and state the read level**, which is both honest and usually the better
    recommendation.

## Two mechanical traps

- **Blocks need blank lines inside them.** `:::predict`, `:::checkpoint`, `:::callout` and `:::exercise` bodies parse with `breaks: false`, so single newlines render as one run-on paragraph; six blocks once shipped as 160 to 290-word walls. `:::figure` and `:::video` are the opposite: they use `parseInline` and must stay one paragraph. **Never put a blank line inside an `<svg>`**, which truncates the chart (the build now fails on it).
- **Open exercise timings with a cue word immediately followed by a digit.** `npm run minutes` only sees a stated duration when a cue (`about`, `around`, `roughly`, `take`, `spend`, `allow`, `give`) is followed straight away by a number that is a digit or a single word. "Allow about thirty minutes" does not match and "twenty five" does not either. Write **"Take 30 minutes over these."** Two Algebra lessons shipped 25 minutes light because of this, which was the whole length of their exercises.

## Before you hand it over

Run `npm run validate` and `npm run minutes`, fix what they report, then re-read your draft against the three tests in Part 1.1 and against the defect list above. Report what you wrote, the sources used, and anything you were unsure about; the reviewer will want to know.

**Draft as many lessons as the budget allows** (`courses/CLAUDE.md` rule 2, changed 2026-09-18). There is no per-session cap. What must not be relaxed to go faster: each lesson gets its own Stage 4 review in a fresh context, never one review for the batch; re-read the outline and run `npm run taught <course>` before each lesson rather than working from what is still in context; and read the repetition warnings from `npm run validate`, because lessons written in one sitting reuse each other's examples and the drafter cannot see it.


**Stage 6 catches lesson defects that Stage 4 does not, and this is now measured.** Writing a
podcast script from a lesson is a close reading of it that nothing else in the pipeline performs,
and on 2026-09-19 eleven scripts written against a course that had just passed eleven Stage 4
reviews and a neutrality audit turned up three defects in the lessons themselves: a task design
credited to the wrong study, a Sources cross-reference pointing at the wrong note after a
renumbering, and a worked costing whose total did not fit its own double-counting story. The last
is the instructive one. **A figure a reader can squint past in print is a column of numbers a
listener is invited to add up.** So write the script promptly rather than treating it as packaging,
and when a fact-check reports a defect, check whether it belongs to the script or to the lesson
before fixing it in the script.

### Two measured patterns, moved here from docs/QUEUE.md on 2026-09-19

They were in the marching order, where a session read them before deciding what to work on rather
than while drafting. They belong with the defect list above, which is what a reviewer is told to
read.

**This drafter quotes accurately and describes carelessly, measured over five Reading Well
lessons.** Every quotation in lesson 5 was verbatim, checked character by character against the
source. Six of its findings were critical and every one was a claim *about* the book rather than a
quotation from it: a sentence placed at the end of a chapter when it is in the second paragraph, a
chapter said to be about cabbage growers when cabbage appears twice in passing, three consecutive
sentences called distributed across three paragraphs in the very passage arguing that arguments are
distributed, and a premise called too obvious to state when the author states it flatly four pages
on. **Point a review at the sentences with no quotation marks in them**, and give it the source text
so it can check them.

**A lesson's Stage 4 review also catches this, measured over four Reading Well lessons.** Not
invented facts. Arithmetic the drafter did not redo (a marketed 1,500 wpm called "four to six times"
a band that makes it five to eight); a publisher's name half-remembered (the "American Psychological
Science"); a claim carried in from the outline rather than from a source, which then falsified the
lesson's own promise to claim nothing beyond its sources; a source's finding quietly rewritten to
match the course's theme ("vocabulary and practice" becoming "vocabulary and background knowledge");
two different things given one name across two lessons; two invented author first names; and a quiz
that could be passed without reading the lesson because every answer was B and every correct option
the longest. **Prompt a lesson review for those**, and give it the course's SOURCES.md, because
three of the eight were the drafter drifting off a source that was sitting right there.
