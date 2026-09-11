# Course-wide review findings: Writing Clearly

Findings that belong to no single lesson. See `README.md` for the layout.

## CW-01 — A figure that was never in the source, carried by four lessons

**Raised 2026-09-10, during lesson 1's Stage 4. Closed the same day.**

Lesson 1 told the reader that "a reader will finish about 130 words", and drew a chart whose
largest type said so. The number came from crossing two lines that should never have been put on
the same axes: Nielsen's 25-second cost of arriving at a page, and the time it takes to read a
page's words. The 25 seconds is not reading time. Nielsen says it is the time "people spend some
of their time understanding the page layout and navigation features, as well as looking at the
images", so the two lines are not comparable at the origin and their crossing point is an
artefact of the arithmetic. **The figure is not in Nielsen and never was.**

It had spread. Lessons 2, 7 and 8 all cited it, and lesson 2 cited it *to lesson 1* while also
linking Nielsen's article for it, which is a citation to a source for a number the source does
not contain. Twelve occurrences across four lessons, including two quiz options and two quiz
explanations.

Fixing lesson 1 first is what exposed it. Removing the figure from lesson 1 left three lessons
pointing at something that was no longer there, and for a few hours the live site said so.

**What replaced it.** Nielsen's two real figures, which do the same teaching work:

- a reader takes in about a fifth of an average page (his 593-word average, 28 percent "if they
  devote all of their time to reading", 20 percent realistically);
- readers get through half the information only on pages of about 111 words or fewer.

The second is the one that carries a length budget, and it is now what lessons 2 and 7 use.

**The lesson for this course, and for the pipeline.** A number invented in lesson 1 of a course
becomes load-bearing by lesson 8. A Stage 4 reviewer reading one lesson cannot see that, because
the figure looks sourced: it is attributed to an earlier lesson of the same course, which is
exactly the shape of a legitimate callback. **When a review changes a figure, grep the whole
course for it before committing.** That is what found these three.

## CW-02 — The same five defects recur lesson to lesson

**Raised 2026-09-10, after lessons 1 and 2.** Both lessons were reviewed by fresh contexts a few
hours apart, and the second was given the first's review and asked to look for the same failures.
Five recurred verbatim, which means they belong to the drafter rather than to either lesson:

1. **No "Go deeper" section.** Required by standard 1.2. Missing in both.
2. **`minutes:` understated**, and the exercise carrying no timing cue, so `npm run minutes`
   cannot see the largest part of the load. Both lessons: 40 stated against 65 and 75 measured.
3. **Zero contractions.** One in 2,700 words and none in 2,773, against the style guide's "their
   absence is the fastest way to sound like a manual".
4. **"Here is" section openers**, which is already in `/draft-lesson`'s defect list.
5. **A quotation trimmed of the qualifier that limits it**, in the direction that helps the
   lesson's argument. Lesson 1 dropped "if they devote all of their time to reading" from
   Nielsen's 28 percent; lesson 2 dropped "In general" from Gopen and Swan's principle 6 and
   omitted their "None of these reader-expectation principles should be considered 'rules.'"
   entirely, though `SOURCES.md` says in terms that the caveat "must survive into the lessons".

A sixth appeared in lesson 1 only at the fixing stage and is worth the same attention: **writing
the rewritten quiz key as the full reasoning and its distractors as one-liners**, which made the
key the longest option in four of six items. That is the habit behind the fourteen gameable
quizzes closed on 2026-09-10. It is invisible to the eye and obvious to a measurement, so measure
every quiz after rewriting it, not just before.

**Lesson 3 confirmed it.** Four of the five recurred there (no Go deeper, understated `minutes:`
with no cue, zero contractions, three "Here is" openers, and the Gopen and Swan caveat omitted for
a second time). The sixth appeared inverted: the key was the *shortest* option in four of six
items, and "always pick the shortest" scored 67 percent. So the rule is not "watch for long keys",
it is **measure the quiz both ways after every rewrite**.

**Expect all six in lessons 4 to 9.** Check them first; they are cheap to find and cheap to fix,
and finding them early leaves the review's attention for the lesson's own problems.

Two practical notes learned in lesson 3:

- **`npm run minutes` only sees a timing cue in words it knows**: about, around, roughly, take,
  spend, allow, "give it / this / yourself", followed by a number and "minutes". "Set aside 50
  minutes" matches nothing. The per-lesson total from cues is also capped at 30.
- **A colon inside an unquoted quiz value breaks the frontmatter.** Two of the rewritten
  explanations in lesson 3 did it and the build caught both. Write the sentence without the colon
  rather than quoting the value.

## CW-04 — Hand-lettered lists collapsed inside ::: blocks

**Raised and closed 2026-09-10, during lesson 3's Stage 4.**

Lesson 3's practice exercise listed ten sentences as `(a)` to `(j)`, one per line, with no blank
lines between them, inside a `:::exercise`. Block bodies parse with `breaks: false`, and Markdown
only rescues the list markers it recognises: a dash or a numeral becomes a real list, a
hand-lettered `(a)` does not. So all ten rendered as **one run-on paragraph**, which is the whole
of that lesson's practice and unusable on a phone.

A scan found three more: Clear Writing lesson 5 and two blocks in Logic and Argument lesson 1,
all on quoted sentences a reader is asked to compare.

`courses/CLAUDE.md` already said blank lines were required inside a block body. Per root rule 9
that prose now has a check behind it, which fails the build and names the line, with three tests:
hand-lettered items with no blank line fail, the same items spaced pass, and a real Markdown list
passes. Four sites in 61 lessons, all fixed.

## CW-03 — Two sources to add to SOURCES.md

**Raised 2026-09-10.** Both were opened and read during lesson 2's review and are now cited:

- **GOV.UK, "Create a clear structure for your content"**, the sibling of the clear-language page
  the research file already records. It carries "Put the most important information first", the
  inverted pyramid, and the rule that headings be "descriptive" and "frontloaded" and avoid
  "generic headings like 'Introduction'". It is the correct source for the heading and
  front-loading claims that lesson 2 had attributed to the clear-language page, which contains
  neither. It also states independently that users "only read 20 to 28% of text on a webpage",
  corroborating Nielsen from a second institution, which is worth having given CW-01.
- The **Flesch reading-ease score of 69** for lesson 2's untitled passage, computed for the
  lesson rather than asserted.

Both are recorded in `research/SOURCES.md` as of 2026-09-10.
