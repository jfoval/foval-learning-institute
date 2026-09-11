# Review history: 05 Functions

## 2026-09-10, Stage 4, Tier A

**Tier A**, one reviewer, fresh context. **Fact-check executed, not fetched**: all eight code blocks
written to files and run on CPython 3.14.7 and byte-compared, tracebacks included, down to the
caret and tilde columns. Every quiz stem executed against its own key. Both tutorial section
numbers fetched live. The Python Tutor URL decoded and checked against the prose describing it.

**Neutrality pass skipped, and this is the line saying why.** The lesson is `def`, `return`, scope,
defaults and keyword arguments. It contains no contested empirical claim and no value claim. The
nearest thing is the note in Sources that CS50P and Downey teach functions before loops while MIT
and this course do not, and that already names both sides and reaches no verdict.

### Findings

Twenty-four. Clean on: all eight code blocks byte-exact, including `~~~~~~~~~~^~~` at ten tildes
with the caret on the `*`; all five quiz keys correct by execution; zero em dashes, zero en dashes,
zero banned vocabulary; quiz not passable by option shape; **no citation to any name on the
`unread:` line**, the Guttag removal having held from the drafting session; all four external links
live; blank lines present inside every `:::` body.

| ID | Pass | Severity | Finding |
|---|---|---|---|
| L5-01 | Fact-check | blocking | **Both Python tutorial section numbers were wrong.** The lesson cited 4.7 for Defining Functions and 4.8 for defaults and keyword arguments. `match` statements were inserted at 4.7 and everything shifted: the real numbers are 4.8 and 4.9, with defaults at 4.9.1 and keyword arguments at 4.9.2. The anchor still resolved, so the link worked and the number beside it was wrong, which is the worst combination. |
| L5-02 | Fact-check | blocking | Lesson 6 said the course "gave you a new error in every lesson since" lesson 1. This lesson is the counterexample and says so. Fixed in lesson 6; recorded here because it lands on this lesson's claim. |
| L5-03 | Pedagogy | blocking | **Quiz item 5's explain named the wrong failure.** It said the join would fail. Executing `label("go", "+")` raises `TypeError: can't multiply sequence by non-int of type 'str'` on `["go"] * "+"`, before the join is reached. Defect 13 in miniature: the reader who picks that option is told the wrong thing broke. |
| L5-04 | Depth | blocking | "It is the lesson 4 code unchanged" was false, and the change it hid is the subject of the next section: `print` had become `return`. A reader told the body is unchanged has been told the opposite of what they need to notice. |
| L5-05 | Fact-check | significant | "A parameter with a default must come after the ones without, or the definition itself is a `SyntaxError`" was stated as an absolute and is not one. `def f(a=1, *, b)` is legal and runs, and the exception is documented in 4.9.3, inside the range the lesson cites. |
| L5-06 | Fact-check | significant | "The only way a function changes anything out here is by returning something" is false, and lesson 6 demonstrates the exception 73 lines of reading later. The caveat existed but sat in Connections, too far from an absolute. |
| L5-07 | Depth | significant | Both rules about defaults were asserted with no demonstration, in a lesson whose footnote says every block was run. Both are one-liners and both are surprising. |
| L5-08 | Pedagogy | significant | **The whole second half had no think-block.** Predict at the top, checkpoint a third in, exercise at the end, and nothing across `return` as an exit, scope, defaults and keyword arguments, which is roughly half the body and includes the two sections most likely to be misread. |
| L5-09 | Fact-check | significant | "Downey separates the two across three chapters" contradicted the lesson's own Sources entry, which names two, and SOURCES.md records Downey as TOC-read, so a claim about how he distributes a topic is not supportable from what was read. |
| L5-10 | Voice | significant | Register a full step more formal than lessons 3 and 4. Contraction ratio 0.22 against 0.89 and 0.98. **Left for the voice pass**, which is still owed on this lesson and on all five before it. |
| L5-11 | Pedagogy | significant | The `else` claim was attached to `describe`, which has a `print` between its two `if`s and therefore cannot be written as an `elif` chain at all. A reader checking the claim on the example in front of them gets a `SyntaxError`. `band` is the example that shows it. |
| L5-12 | Depth | significant | Two things the outline specified were not delivered (defect 1): the before-and-after shown **side by side**, and a **supplied** twenty-line program with three copies of one block, which the outline calls the transfer test for this lesson. The exercise instead asked the reader to write the bad version themselves. |
| L5-13 | Voice | minor | "`def` creates the function. It does not run it" against "a default is worked out once, when the `def` runs". Both true of different things, and a careful reader stops. |
| L5-14 | Media | minor | The Python Tutor frame was described as holding `numbers`, `total` and `count`. The loop name `n` is also a local and appears in that box. |
| L5-15 | Fact-check | minor | Three different line counts for three different things, none labelled: five lines, seven lines, five lines again. |
| L5-16 | Voice | minor | "Here is the averaging from lesson 4", defect 7, a "Here is" section opener. The same tic was caught as L4-11 last cycle. |
| L5-17 | Depth | minor | "The four things a program is made of" is contradicted by the next sentence, which says the reader has nowhere to put more than one value. |
| L5-18 | Fact-check | minor | `print(average(readings))` used a name defined in no code block in the lesson. |
| L5-19 | Voice | minor | "You will read keyword arguments in other people's code within the hour": invented specificity, and the nearest thing in the lesson to a sales line. |
| L5-20 | Pedagogy | minor | Defect 5b. Exercise Three used both of the body's own lists, whose averages are printed forty lines above. |
| L5-21 | Voice | minor | Seven paragraphs ending on a compressed one-line moral. **Partly left for the voice pass.** |
| L5-22 | Media | minor | One link in the body, and the primary source only in Go deeper, against 4.5. |
| L5-23 | Pedagogy | minor | `minutes: 75` measured clean, but 30 minutes did not cover three exercises of which the third is "write it twice, then time a change across both". |
| L5-24 | Pedagogy | minor | Objective 4 is the transfer objective and no quiz item tested it. |

### Resolutions applied

- **L5-01.** 4.7 and 4.8 become 4.8 and 4.9, in the Go deeper link, in Sources and in the footnote.
  4.9.3 is now named as where the `*` exception lives, which L5-05 needed anyway.
- **L5-03.** The explain now names the real error and the expression that raises it.
- **L5-04, L5-12, L5-15, L5-16.** The opening section is rebuilt. The lesson 4 block is now printed
  above the function, under its own heading, so the before and after are on the page together as
  the outline asked. The "unchanged" sentence now names all three changes and points at the one
  that matters. "Here is" is gone, and the counts are consistent.
- **L5-05.** The rule is qualified to the ordinary parameters, the real `SyntaxError` is shown with
  its message, and the `*` route is named with its tutorial section.
- **L5-06.** Hedged to "for everything you have met so far", with the exception promised to lesson 6
  rather than retracted in Connections.
- **L5-07 and L5-08.** Both defaults rules are now demonstrated rather than asserted. The
  once-at-`def` rule gets a runnable program whose default announces itself, and a `:::predict` on
  how many times it fires and where. A second `:::checkpoint` on `band(90, 95)` lands in the
  keyword-argument section, and doubles as spaced review of lesson 3's rule about ordering a chain.
  Think-blocks in the second half: two, from none.
- **L5-09.** Rewritten to the TOC-safe claim, which is stronger anyway: functions at chapter 3,
  `return` withheld until chapter 6. The Sources entry now says it is cited for where the topics sit
  in his contents, which is what was read.
- **L5-11.** Moved off `describe` and pointed at `band`, which has the shape the claim describes.
- **L5-13, L5-14, L5-17, L5-18, L5-19.** Reworded. "It does not run the body"; `n` added to the
  Python Tutor frame; "the four things this course has given you so far"; the undefined name
  replaced with the list the lesson actually ran; the invented hour cut.
- **L5-20, L5-12, L5-23.** Exercise Three is replaced. It now supplies the twenty-four-line
  three-copy program the outline asked for, over three sets of readings the body never used, and
  asks for the collapse rather than for the reader to write bad code first. It carries the
  follow-on change and the edit count, and a fourth empty-list call that connects it to Exercise
  Two. Timing raised to 40 minutes, and `minutes:` re-measured at 85.

**Not fixed, and why.** L5-10 and most of L5-21 are the voice pass, which is a separate stage and is
owed on all six lessons of this course. Recording the contraction ratio here so that pass has a
number to work against. L5-22 is partly addressed, in that the tutorial is now cited by section in
the body text, but the body still carries few links; a programming lesson's primary source is the
code the reader runs, and padding the prose with documentation links would not help anyone.
L5-24 is not fixed: the transfer objective is tested by Exercise Three, which is the right place for
it, and a four-option quiz item cannot test a refactor.

### After the fixes

`npm run validate` clean. Quiz answers 0,1,2,3,1: all four indices used, no adjacent repeat.
`npm run minutes`: 85 measured, 85 written. Body 3,203 words, up from 2,573 at draft and from the
479-word stub. Zero em dashes, zero en dashes. Three think-blocks, up from two.

**Still owed on this lesson:** the voice pass, and its podcast episode.
