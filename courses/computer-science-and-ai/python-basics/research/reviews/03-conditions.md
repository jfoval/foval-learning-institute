# Review history: 03 Making decisions

## 2026-09-10, Stage 4, Tier A

**Tier A**, one reviewer, fresh context. **Fact-check executed, not fetched**: every block run on
CPython 3.14.7 and byte-compared, both exercises run, every distractor diagnosis traced backwards by
execution, and the SVG read by eye against the body.

**Neutrality pass skipped, and this is the line saying why.** Comparison operators, chains, boolean
logic, truthiness and input validation. No contested empirical claim, no value claim, and every
assertion in the lesson is executable and was executed.

### Findings

Fifteen. Clean on: validate, `minutes:`, quiz option shape and letters, dashes, banned vocabulary,
links, the `unread:` line, block blank lines, the exercise cue, all required elements of 1.2, every
"if you got X" trace, and every cross-lesson claim, which the reviewer checked against lessons 1 and
2 rather than taking on trust.

| ID | Pass | Severity | Finding |
|---|---|---|---|
| L3-01 | Fact-check | high | **The `SyntaxError` caret line was wrong.** Five carets under `age =`; Python emits eight, under `age = 18`. The footnote certified the block as a terminal paste, and lesson 1 teaches the reader to read those markers as pointing at the failing expression, so a wrong span teaches the wrong thing about a thing we taught them to read. |
| L3-02 | Pedagogy | high | **Four of five quiz items reused the body's own examples**, and item 5 was the `:::predict` block almost word for word, same numbers, same answer, with its moral reproduced in the explain. At most one item was genuine transfer, against 4.3's half. `check-quiz-shape.cjs` passes it, because novelty is precisely what that script cannot see. |
| L3-03 | Pedagogy | high | Both exercises need input the lesson's only validation tool rejects: a negative in one, a decimal in the other, and the lesson had just said `.isdigit()` refuses both. A reader applying the guard they were handed finds their program refuses every input the exercise requires, with no alternative offered and `try`/`except` out of scope. A trap with no exit. |
| L3-04 | Depth | medium | The outline says in as many words: break the grader deliberately, run it on 95, get `C`, "makes the reader watch it happen". The lesson asserted it in a predict block with no code and no output. That was the named improvement over the stub. |
| L3-05 | Fact-check | medium | **`.isdigit()` is not a sound guard for `int()`.** `"²".isdigit()` is `True` and `int("²")` raises `ValueError`. The lesson presented it as the fix for exactly that error. `.isdecimal()` is the one whose answer matches what `int()` accepts. Standard 1.1's expert test: this was the simplified version people tell beginners. |
| L3-06 | Depth | medium | "Indentation is the syntax" stated its own most important claim, that a misplaced line runs every time, and never showed it. No code, no error, no output, in a lesson where every other section earns its place with a run. |
| L3-07 | Fact-check | medium | "The lesson after that will lean on short-circuiting again." Lesson 5 is functions, and neither its outline nor lesson 6's mentions short-circuiting. Defect 12's shape: a forward reference to work that is not planned to exist. |
| L3-08 | Depth | medium | "`if x:` says the same thing" followed three lines later by the lesson correctly explaining that it does not. A reader who stopped after the second sentence was taught the misconception the paragraph exists to correct. |
| L3-09 | Voice | low | A "Here are" opener, "the wrinkle" (pipeline spec vocabulary) in learner-facing text, and four one-line morals in a 1,600-word lesson. |
| L3-10 | Fact-check | low | The `ValueError` traceback matches the basic REPL; 3.14's default interactive shell prints `<python-input-0>` rather than `<stdin>`, and lesson 1 teaches the reader to read that line. |
| L3-11 | Media | low | The SVG is otherwise sound and was verified attribute by attribute. Two nits: the text said "arrows" where the exits have no arrowheads, and the `else` exit was drawn in the colour the chart reserves for "true". |
| L3-12 | Pedagogy | low | One `:::predict` where the style guide asks for two or three. |
| L3-13 | Copy | low | "the six comparisons" above a four-row table. |
| L3-14 | Consistency | low | `ZeroDivisionError` used cold, while the outline allocates it to lesson 4 and this lesson's own Connections claims a running count that the body had quietly exceeded. |
| L3-15 | Exercise | low | "the wrong order" is underdetermined: reversed gives 9, another wrong order gives 5, and the singular "which price" implies one answer. |

### Resolutions applied

**All fifteen fixed.**

- L3-01. Eight carets, pasted from a fresh run.
- L3-02. **Four of the five items replaced outright**, onto cases the body never runs: a library fine
  chain whose first test swallows every overdue book so two branches are unreachable; a list-index
  guard for short-circuiting; a four-way truthiness item built on `"False"`, `" "`, `"0.0"` and
  `0.0`, where the single space is the one that catches people; and an item that asks whether a
  stray `=` could explain a program that printed two lines before failing, which applies lesson 1's
  evidence idea rather than restating this lesson's rule. The fifth tests `.isdecimal()` against
  `.isdigit()`, which is the new material from L3-05. Every value run before it was written.
- L3-03. The exercise section now opens by naming the problem: both tasks need input `.isdigit()`
  would refuse, that is the previous section proving its own point, assume sensible input for now,
  and `try`/`except` is past where this course goes. The trap becomes the teaching.
- L3-04. The mis-ordered chain is now shown as code with its output, `C`, and the lesson adds that
  an `A` is unreachable for any score at all.
- L3-05. A new passage: `"²".isdigit()` is `True`, `int("²")` raises, so `.isdecimal()` is the guard
  to use when the conversion has to succeed, with all four comparison values pasted.
- L3-06. The four-space demonstration, both versions run: one prints "Remember your coat.", the
  other prints nothing at all, on the same input, with no error either way.
- L3-07. Sentence replaced with one that is true of lesson 4: the guard is what stops a loop
  dividing by a count that is still zero.
- L3-08. Rewritten to lead with the difference between equalling `True` and being truthy.
- L3-09, L3-13, L3-14, L3-15. Reworded. The exercise now says "reverse the tests, largest threshold
  first", so every reader lands on the same number.
- L3-10. Half a sentence: at your own prompt that filename may read `<python-input-0>`, and it means
  the same thing.
- L3-11. "arrows" to "exits", and the `else` exit redrawn in `--text-2` so the chart's colour no
  longer says "true" about a branch taken when nothing was true.
- L3-12. A second `:::predict`, on `if reply:` when the user types `0`, placed **before** the answer
  instead of after it. That also freed the old quiz item 3, which is what L3-02 needed.

### After the fixes

`npm run validate` clean, and the chart is not in the undersized-label list (viewBox 420, smallest
label 12.3px on a phone). `check-quiz-shape.cjs`: not passable by option shape, keys ACDBB.
`check-quiz-letters.cjs`: clean. `npm run minutes`: 65 against a stated 60, inside precision. Body
2,413 words, up from 1,606; zero em dashes, zero en dashes, 50 contractions, two predict blocks and
one checkpoint.

**Still owed on this lesson:** the voice pass, and its podcast episode.

### One note for SOURCES.md

The reviewer checked the "Go deeper" claim that Sweigart's chapter 2 "spends longer than most books
on flow control diagrams" and found it true: 26 mentions of "flowchart" across 18 images. But
`SOURCES.md` records only that chapter's table of contents, so the claim went beyond the research
file at drafting time even though it happens to hold. Recorded here rather than silently relied on.
