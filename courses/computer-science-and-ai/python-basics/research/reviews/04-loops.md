# Review history: 04 Repeating work

## 2026-09-10, Stage 4, Tier A

**Tier A**, one reviewer, fresh context. **Fact-check executed, not fetched**: every code block run on
CPython 3.14.7 and byte-compared, both exercises run, and the reviewer reconstructed the traceback's
program to check its line number.

**Neutrality pass skipped, and this is the line saying why.** The lesson is `for`, `while`, `range`,
the accumulator pattern and two failure modes. There is no contested empirical claim and no value
claim in it. Auditing it for balance would be money spent on nothing.

### Findings

Fourteen. Clean on: every executed output, the state table, `while readings:`, `KeyboardInterrupt`,
both exercises, dashes, banned vocabulary, quiz option shape, `minutes:`, links, block blank lines,
the exercise timing cue, and the `unread:` line (the Guttag removal held).

| ID | Pass | Severity | Finding |
|---|---|---|---|
| L4-01 | Depth | high | **The second worked example was described and never shown.** "Take the sentinel program above and have it average the readings" and then no program. The averaging version did not exist anywhere in the lesson, and the infinite loop was prose only. Standard 1.2 wants two fully worked examples; this had one. |
| L4-02 | Pedagogy | high | Quiz item 2 said `total = 0` was "inside the loop" without saying where. First line of the body gives 4; last line gives 0, which was option B, marked wrong. The explain admitted it. A learner reading the stem faithfully was told they had misunderstood. |
| L4-03 | Fact-check | med-high | **The `ZeroDivisionError` traceback said line 9, and no version of the described program puts the division on line 9.** The real one is line 15. The footnote claimed every block was pasted from the terminal. It was not, and that is an integrity problem rather than a typo. |
| L4-04 | Pedagogy | med-high | "If a total ever comes out equal to the last item in your data, this is why" is not a unique fingerprint. `total = r` in place of `total = total + r`, with the reset correctly outside, gives the identical symptom, and is arguably the commoner typo. Defect 13: a reader who made that slip was told they made a different one. |
| L4-05 | Pedagogy | medium | Objective 4 promised identifying an off-by-one "in someone else's loop". The lesson never showed a loop containing one, and no block or exercise asked the reader to find one. |
| L4-06 | Pedagogy | medium | Defect 5b, three times. Quiz item 1 was the `:::predict` block verbatim, answer and all. Quiz item 2 and exercise 1 both used `[12, 7, 19, 4]`, whose average and count are worked out in the body's own table. Honest count of application items: 2 of 5, against 4.3's half. |
| L4-07 | Depth | medium | SOURCES.md says explicitly that "lesson 4 or 5 must give the learner a multi-plan problem and walk the composition explicitly", because the rainfall literature finds that combining easy plans is a separate skill. The lesson had all four plans present in pieces and never joined them, and nothing in it built toward the course project. Defect 1. |
| L4-08 | Media | medium | The outline required a Python Tutor link **with the program already in it**. The lesson linked the bare homepage, which asks a beginner to retype the program, which is where most of them stop. |
| L4-09 | Depth | medium | The outline promised spaced review of traceback reading on `ZeroDivisionError`. The lesson showed a traceback and then asserted the cause without reading a line of it, while lessons 2 and 3 both do this explicitly. |
| L4-10 | Pedagogy | low-med | Quiz item 4's stem never said the sentinel was checked before conversion, but the explain ruled out an option on exactly that ground. |
| L4-11 | Voice | low | A "Here's" opener, and it miscounted: "the two names" above a table with three. |
| L4-12 | Voice | low | Two one-line morals, one an overclaim ("Every off-by-one you avoid later comes from that"). |
| L4-13 | Truth | low | Two Sources entries, one of them a self-attestation, while the lesson had read more than that. Lessons 2 and 3 carry four each. |
| L4-14 | Fact-check | low | "You can't do it in a single pass" is loose: a nested loop or a sort gets there. The reason is sound and the wording was not. |

### Resolutions applied

**All fourteen fixed.**

- L4-01, L4-03, L4-09. The complete `readings.py` is now in the lesson, both halves joined, and it
  was run twice: once with three readings, giving `Average: 12.666666666666666`, and once with
  `done` typed straight away. **The traceback is the real one, at line 15**, and the lesson now
  reads it bottom-up and names the `~~~~~~^~~~~~~` marker as the thing that points at
  `total / count` rather than at the whole line. The infinite loop is shown as a real three-line
  program with its runaway output, its `KeyboardInterrupt` traceback and its one-line fix.
- L4-02. The stem now gives both body lines in order and uses a different list. The explain points
  out that the order of those two lines decides the answer, which turns the old ambiguity into the
  teaching.
- L4-04. The lesson now names **both** slips that produce a total equal to the last item, and says
  to check for both.
- L4-05. A new `:::checkpoint` hands the reader a five-line loop with `range(1, len(items))` and
  asks which item goes missing and why. Run before it was written: it prints `b c d`.
- L4-06. Quiz item 1 is now `range(10, 0, -2)`, counting down, which the body never runs, with the
  distractor being the stronger downward temptation to finish on 0. Item 2 uses `[3, 8, 100, 6]`.
  Exercise 1 checks against `[5, 5, 5, 40]`, where the answer is **1** and the surprise is the
  point, rather than the body's own list.
- L4-07. A third exercise, the course project in miniature: read until `done`, reject negatives with
  a message, report count and average, survive the empty case. It is handed over in five stages on
  purpose, and the lesson says in a sentence that combining four easy pieces is a separate skill
  from having the pieces.
- L4-08. The Python Tutor link now carries the averaging loop in its URL fragment, verified by
  decoding it back, and the text says what to watch.
- L4-10, L4-11, L4-12, L4-14. Reworded. "Single pass" is now "two loops rather than one", with the
  reason stated in the exercise's own terms.
- L4-13. Sources goes from two entries to five: the tutorial, Sweigart ch. 3, Downey ch. 7, PEP 657
  for the marker line, and the run attestation, which now also says that the traceback paths are
  shown as `/home/you/` in place of the machine's own. That disclosure is the honest version of
  what L4-03 caught.

### After the fixes

`npm run validate` clean. `check-quiz-shape.cjs`: not passable by option shape, keys BBCAD.
`check-quiz-letters.cjs`: clean. `npm run minutes`: 65 measured, written. Body 2,209 words, up from
1,518, zero em dashes, zero en dashes, 44 contractions, three predict/checkpoint blocks.

**Still owed on this lesson:** the voice pass, and its podcast episode.
