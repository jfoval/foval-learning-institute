# Review history: 06 Lists and dictionaries

## 2026-09-10, Stage 4, Tier A

**Tier A**, one reviewer, fresh context. **Fact-check executed, not fetched**: every code block run
on CPython 3.14.7 and byte-compared, all three tracebacks reconstructed from the code as shown and
checked to the caret column, all three exercises run, and nine external URLs fetched.

**Neutrality pass run, and not skipped.** Most of the lesson is lists, dictionaries and aliasing,
and that part has no contested claim in it. But the outline's neutrality notes put one standard 3.1
type-2 question in this lesson and nowhere else, **Python as a first language**, in the closing
section, and the "classes deferred" claim sits beside it. Both were audited, both were found
wanting, and both are fixed below.

### Findings

Twenty-four. Clean on: all three tracebacks byte-exact including caret columns and line numbers;
the `.get()` and `in` behaviour; `.items()`; the dict insertion-order demo; `wipe` against
`replace`; the mutable-default sequence; the checkpoint's `.lower().split()` answer; all three
exercises; the Python Tutor URL decoded against its prose; **no citation to any name on the
`unread:` line**; **defect 12 clean**, nothing refers to the unwritten assessments; zero em dashes,
zero en dashes; quiz option lengths within 11 characters on every item.

| ID | Pass | Severity | Finding |
|---|---|---|---|
| L6-01 | Fact-check | blocking | **The prose contradicted the output printed directly above it.** "On identical lists in different boxes, `==` is `True` and `is` is `False`", under a block that prints `False False`, because `.append(4)` had run before the comparison. The reader is told to expect one thing and shown another, in the section teaching the distinction. |
| L6-02 | Media | blocking | **A blank line inside a code fence inside a `:::` block corrupts the rendered page**, because `renderBlocks` emitted HTML and the document was parsed a second time, and Markdown ends a raw-HTML block at the first blank line. **This had already shipped**: Python Basics lesson 3 was serving `<pre><code>score = 95\n\n<p>if score &gt;= 70:` on the live site. Fixed in `scripts/build.mjs`, not in the lesson, with a check behind it. |
| L6-03 | Fact-check | blocking | "Gave you a new error in every lesson since" is false; lesson 5 adds none and says so. |
| L6-04 | Fact-check | blocking | "The only honest use of `is` you will meet" contradicted lesson 2's rule, lesson 5's restatement of it, and this lesson's own `if log is None`. It also made the identity check the honest one, which is the opposite of the rule lesson 2 set. |
| L6-05 | Fact-check | significant | The static-typing comparison was backwards on timing: "you would have met fewer of those, and later". A language that checks before running surfaces those mistakes **earlier**, from a compiler, not later. |
| L6-06 | Neutrality 3.2 | significant | **The one contested paragraph named no alternative and gave no alternative's case.** Counting test: zero citations either side, no opposing person, language or argument named, and the concession immediately recuperated into a virtue of this course, so Python's design got the last word. No Java or Racket advocate could read it and say "yes, that is my case". The refusal to claim Python is objectively best was correct, so this was a 3.2 failure rather than a 3.1 one. |
| L6-07 | Neutrality 3.1 | significant | The classes-deferred **rationale** was asserted as settled. SOURCES.md classifies objects-first against procedural-first as settled in practice for a course like this one and **contested for CS-majors courses**, and no source in the file states the rationale the lesson gave. |
| L6-08 | Fact-check | significant | The 3.7 claim is correct, and its only listed source does not support it: tutorial chapter 5 says "in insertion order" and gives no version. |
| L6-09 | Depth | significant | The typosquatting callout was the one paragraph that could have been written without knowing Python: "an active and ongoing campaign rather than a theoretical risk". SOURCES.md carries named 2025 packages. Defect 1. |
| L6-10 | Pedagogy | significant | Objective 4 was untested: no quiz item handed the reader a message and asked for the cause. The lesson also showed three tracebacks and never read one bottom-up, which lessons 2, 4 and 5 all do explicitly. L4-05 and L4-09 recurring. |
| L6-11 | Depth | significant | The multi-plan claim was asserted bare. It is the rainfall finding, it is why the outline puts the word counter here, and SOURCES records success rates under twenty per cent. Nothing attributed it. L4-07 recurring. |
| L6-12 | Pedagogy | significant | Two think-blocks in the course's longest lesson, against three each in lessons 1 to 4, and the two hardest ideas had none: `wipe`/`replace`, which the quiz's own explain calls the hardest idea here, and the mutable default, which is the purest predict in the lesson. Both printed their answers immediately. |
| L6-13 | Media | significant | The lesson's central mechanism existed only behind an external link. A reader on a phone, offline, or who does not click, gets no picture of the thing the lesson calls its whole point. |
| L6-14 | Pedagogy | minor | Defect 5b family. The predict, exercise One and quiz item 1 all tested that `b = a` aliases, and exercise One and the quiz both assigned 99 to index 0, so doing the exercise handed over the quiz answer. |
| L6-15 | Pedagogy | minor | Answer indices repeated adjacently on items 2 and 3. |
| L6-16 | Pedagogy | minor | Quiz item 5 asked no question; the stem ended in a full stop. |
| L6-17 | Fact-check | minor | `sorted()` is a built-in function, not a method; `.pop()` returns a value **and** mutates; and the convention is about the built-in types, so it does not support the sentence about a function you did not write. |
| L6-18 | Voice | minor | Two `>>>` prompts above tracebacks that name a file and a `print(...)` call the prompt line does not contain. |
| L6-19 | Depth | minor | Lesson 1 showed an `IndexError` and promised it would return here; the callback was not made. `IndentationError`, named in lesson 3, is absent from the closing list of seven without a word saying it is folded into `SyntaxError`. |
| L6-20 | Voice | minor | Aliasing announced as the big one four separate times. Nine paragraphs ending on a one-line moral. Contraction count 8 in 2,972 words, against 38, 28, 49 and 43 in lessons 1 to 4. |
| L6-21 | Media | minor | No inline footnote markers in the body; all seven sit in the Sources list. Lessons 3, 4 and 5 do the same, so this is a course-wide item. |
| L6-22 | Fact-check | minor | Two claims about Downey's treatment of aliasing were written while SOURCES.md recorded Think Python as TOC-read only. Both turned out **true** on opening chapter 9, which is the good outcome and still the wrong order. |
| L6-23 | Voice | minor | Three invented frequencies reading as measurements: "half the time the key is `"Ada"`", "after ten years", "surprises people for years". |
| L6-24 | Fact-check | minor | "If that thing is mutable and it was handed the thing itself" implies a case where Python hands something else. It does not. |

### Resolutions applied

- **L6-01.** The copy block now prints the comparison **twice**, before and after the append, and
  the output shows `True False` then `False False`. The prose reads the two lines against each
  other, which is the teaching the section was reaching for and had thrown away.
- **L6-02.** Fixed in the platform, not the content, on its own branch and merged.
  `renderBlocks` now hands each rendered block back behind a placeholder comment and `renderBody`
  substitutes after the outer parse, so emitted HTML is never re-parsed. Per CLAUDE.md rule 9 there
  is a check rather than a paragraph: `checkRenderedHtml` fails the build on a `<p>` inside a
  `<pre>`, and it was verified to fire on the old output. Lesson 3's shipped corruption is gone;
  confirmed by reading the rendered page, not only `courses.js`.
- **L6-03, L6-04.** Corrected. The error line now says six more across the five lessons since, and
  the `is` paragraph is rewritten so that lesson 2's rule stands and this is named as the other
  half of it, the half you read rather than write.
- **L6-05, L6-06.** The closing paragraph is rebuilt. The timing claim is corrected, the
  recuperation is cut, and a new paragraph gives the other side in its own terms: the compiler
  catching a class of mistake before the program exists, types as documentation for the next
  reader, the charge that Python moves the difficulty somewhere worse, and the Racket case from the
  rainfall literature. Both are named as serious positions held by people who teach beginners.
- **L6-07.** The rationale is now attributed rather than asserted, and the sentence says plainly
  that it is more settled for a course aimed at everybody than for one aimed at computing majors,
  which is what SOURCES.md actually records.
- **L6-08.** *What's New In Python 3.7* added as source 1b and linked in the body, quoting
  "declared to be an official part of the Python language spec", with the pre-3.7 situation stated.
- **L6-09.** The callout now names `sisaws` against the real `sisa`, says what the real package is
  for, says what the malicious one did, and links Zscaler ThreatLabz, 4 August 2025, which is
  source 6. Footnote 6 keeps its disclaimer that **no download count or incident total is quoted**,
  because those figures are still second-hand.
- **L6-10, L6-15, L6-16.** A sixth quiz item is added that hands over a `KeyError` message and the
  marker line and asks what went wrong and where to look, which is objective 4. It is placed so the
  adjacent repeat disappears. Item 5 gets its question mark. The `IndexError` traceback is now read
  from the bottom in the body, with the markers explained.
- **L6-11.** One paragraph names Soloway's task, describes it, gives the under-twenty-per-cent
  figure and the forty years of argument, and tells the reader that finding it hard is the
  documented experience of a great many people. **Fisler and Seppälä are not cited**: both are on
  the `unread:` line.
- **L6-12.** Both hardest ideas get a `:::predict`. The mutable-default trap is lifted out of its
  callout and restructured: code, then a predict on what the three calls print, then the
  explanation, then a smaller callout carrying only the fix. Think-blocks: four, up from two.
- **L6-13.** An inline SVG is added: two names arrowing into one box, against two names with a box
  each, under the two lines of code that produce them. viewBox 344 wide, so it renders at 343px on
  a 375px phone with no label under 15px and nothing past the edge. Checked by opening the page in
  both themes at phone width, not by trusting the validator. The Python Tutor link stays, now as
  the animated version rather than as the only version.
- **L6-14, L6-17, L6-18, L6-19, L6-20, L6-23, L6-24.** Exercise One is repointed at different
  values and a change made through the other name. The convention is restated as the rule it
  actually is, the built-in list methods that change the list return `None`, with `.pop()` named as
  the exception and the claim about third-party code withdrawn. Both `>>>` prompts replaced with
  the lines as they appear in the file. Lesson 1's promise about `IndexError` is now closed. Three
  of the four aliasing announcements cut. The three invented frequencies replaced with what is
  actually true. The vacuous qualifier cut.
- **L6-22.** SOURCES.md now records that Think Python chapter 9 was opened on 2026-09-10, quoting
  section 9.10's opening line. The evaluative "clearest short one there is" is replaced with the
  checkable fact that aliasing has its own named section.

**Not fixed, and why.** L6-20's contraction count and most of the one-line morals are the voice
pass, which is owed on all six lessons; the number is recorded here so that pass has something to
work against. L6-21 belongs in `course-wide.md` rather than here, since lessons 3, 4 and 5 do the
same thing, and moving footnote markers into the body of one lesson out of four would be
inconsistency rather than a fix.

### After the fixes

`npm run validate` clean, including the new rendered-HTML check. Quiz answers 1,2,0,2,0,3: all four
indices used, no adjacent repeat, six items. `npm run minutes`: 95 measured, 95 written. Body 4,440
words including the diagram's markup, about 3,750 of prose. That is past the 3,000 the drafting
command suggests as a guide, and the standards say plainly that there is no ceiling and that
nothing is to be cut to hit a count; the reviewer looked for padding and found none, and this is
the lesson carrying the course's closing section. Zero em dashes, zero en dashes. Four think-blocks
and one diagram, up from two think-blocks and none.

**Still owed on this lesson:** the voice pass, and its podcast episode.
