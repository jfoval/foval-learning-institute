# Review history: 02 Names and values

## 2026-09-10, Stage 4, Tier A

**Tier A**, one reviewer in a fresh context. Correct by the rule in `.claude/commands/review-lesson.md`:
not a sensitive domain, not a standpoint course, first review rather than a re-review.

**The fact-check was executed, not fetched.** Every code block, both exercises and every claimed
output were run on CPython 3.14.7 and compared byte for byte.

**The neutrality pass was skipped, and this is the line saying why.** The lesson is assignment
semantics, four built-in types, `input()`, conversion, IEEE 754 rounding and object identity. Every
claim in it is settled and demonstrable by running code. There is no contested empirical question
and no value question in it, so there is nothing for an ideological Turing test to be applied to.
Auditing this lesson for balance would be money spent on nothing.

### Findings

Fifteen findings. Passes that returned clean: all executed code (including the central `is` claim,
verified separately in a file and at the prompt), `npm run validate`, `npm run minutes` (60 stated,
60 measured), quiz option shape, dashes, banned vocabulary, the `unread:` line, block blank lines,
the exercise timing cue, links, and every required element of standard 1.2. No padding found.

| ID | Pass | Severity | Finding |
|---|---|---|---|
| L2-01 | Pedagogy | high | Quiz item 2 turned on `*` repeating a string, and **the lesson never taught it.** The body taught only `+`. A reader who understood the lesson perfectly had no basis to prefer the key over "a string cannot be multiplied at all", which is the honest inference from what was actually taught. |
| L2-02 | Pedagogy | high | Quiz item 4's explain told the reader to note "which of the two errors from lesson 1 this is". The answer is `TypeError`, which is neither of lesson 1's two. The field whose job is to teach was asking for a classification into a set the answer is not in. |
| L2-03 | Pedagogy | high | Quiz item 3 asked what makes `0.1 + 0.2 == 0.3` evaluate to True. Nothing does. The key changed the expression rather than the result, and the explain conceded that the "wrong" option was "nearly right", so a precise reader was punished for precision. It also recycled the body's own numbers, which is defect 5b. |
| L2-04 | Fact-check | high | The failing-program output block began at `Traceback`. The real terminal prints `Year you were born: 1999` first. The lesson then asked the reader to notice that the prompt appeared before the traceback, which was the whole spaced-review point, using evidence it had not shown them. |
| L2-05 | Voice | high | **Zero contractions in 1,824 words.** The only apostrophe in the file was the possessive in "Python's". Lesson 1 of the same course carries about thirty. The two did not sound like the same teacher, and this was the manual-sounding one. |
| L2-06 | Depth | medium | The `is` demonstration never said why 257, and never mentioned the small-integer cache. A curious reader who substitutes 5 gets `True` both ways, the opposite of what the lesson just told them, with nothing on the page to explain it. SOURCES records the interning fact and the lesson had waved it away. |
| L2-07 | Depth | medium | The `TypeError` paragraph is the exact place *explicit is better than implicit* settles the argument, and PEP 20, which SOURCES records as read in full, went uncited. Defect 1. |
| L2-08 | Fact-check | medium | "every language that uses the same number format has it, and most of them do" never named the format and cited nothing. It is IEEE 754 binary64, which the cited tutorial chapter says. |
| L2-09 | Fact-check | medium | "That is what real accounting software does" is authority by assertion about an unnamed class of software, with nothing in SOURCES behind it. |
| L2-10 | Pedagogy | medium | Quiz item 5 was recall: the stem asked what the body answers almost word for word, and the explain reproduced the body's own `c = 257` example. Its option D ("`is` only works on text") was a silly option, which 4.3 forbids. With item 3 also recycling the body, two of five items tested recall of the page. |
| L2-11 | Voice | medium | A "Here is the part that catches everyone" opener; "the whole mechanism" as learner-facing pipeline vocabulary; and four compressed one-line morals ending paragraphs, where one lands and four is a tic. |
| L2-12 | Media | low | PEP 8 named in the body and never linked, while the other three named resources were. |
| L2-13 | Fact-check | low | The `~~~~~^~~~~~` markers are 3.11 and later, and SOURCES says their absence on older versions must be mentioned. Lesson 1 says it; the reader meets the markers again here. |
| L2-14 | Pedagogy | low | Three deviations from the outline. The one that mattered: the outline's checkpoint "what does `input()` return when the user types 7?" was spent as a bold assertion in body text instead of asked. The highest-value retrieval opportunity in the lesson was given away. |
| L2-15 | Depth | low | The type table said `float` is "a number with a decimal point". `type(1e5)` is `float` with no decimal point in it. |

### Resolutions applied

**All fifteen fixed.**

- L2-01. A short `*` section added after `+`, with `"ab" * 3` run and pasted, and the reason it
  matters said plainly: a program can do something entirely reasonable with text you thought was a
  number and never complain. The quiz item now tests something taught.
- L2-02. Reworded to "which of lesson 1's two kinds of failure this is, the sort found before the
  program runs or the sort found while it is running", which is what was meant.
- L2-03. Item rewritten onto numbers not in the body: `0.7 + 0.1` against `0.8`, which really does
  come to `0.7999999999999999`, verified. The stem now asks what the programmer should change,
  which is answerable, and the key is rounding or whole units. The "nothing does" option is gone,
  since it was the honest answer to the old stem.
- L2-04. `Year you were born: 1999` prepended to the block, so the evidence the next paragraph
  points at is on the page.
- L2-05. Contraction pass over the whole body: **0 to 28.**
- L2-06. Two sentences added. Try it with 5 and you get `True` both ways, because CPython keeps one
  shared object per small integer, so the answer moves with the size of the number *and* with how
  you ran the code. That is the argument against `is`, made properly rather than waved away.
- L2-07. PEP 20 cited and linked, with `import this`, and a new footnote 5.
- L2-08. Now names IEEE 754 binary64 and says C, Java and JavaScript print the same thing.
- L2-09. The vague claim is replaced by Python's own `decimal` module, linked, with its real cost
  named (slower and wordier), and the flat line that `float` for money is not an answer.
- L2-10. Rewritten as application on a case not in the text, and a good one: `total is 500` after
  adding 250 and 250 fails, while the same check passed a small test that added 2 and 3. Both
  behaviours were run before the item was written, and Python's own `SyntaxWarning: "is" with 'int'
  literal. Did you mean "=="?` is quoted in the explain. The silly option D is replaced with a
  genuine near-miss.
- L2-11. Opener and pipeline vocabulary rewritten; two of the four one-line morals absorbed into
  their preceding sentences.
- L2-12, L2-13, L2-15. Linked, noted, and reworded to "a number that can have a fraction" with
  `1e6` added to the examples.
- L2-14. The outline's checkpoint is restored as a `:::checkpoint` before the broken program, asking
  what `age` is worth and what type it is, with `age * 2` giving `"4141"` as the sting. The other
  two deviations stand: the three-line `a`/`b` trace fits the objective better than the swap puzzle,
  and dropping the name from the worked example keeps it on one idea.

### Also caught, outside this lesson

The reviewer flagged lesson 1's `/courses/using-ai-effectively/` link as dead and wrongly routed.
It was, and it had already been removed under L1-01 before this review returned. No action needed.

### After the fixes

`npm run validate` clean. `check-quiz-shape.cjs`: no quiz passable by option shape alone, keys
BACDB. `check-quiz-letters.cjs`: no explanation contradicts its key. `npm run minutes`: 65 measured
against 60 stated, inside precision. Body 2,284 words, zero em dashes, zero en dashes, 28
contractions, three predict/checkpoint blocks.

**Still owed on this lesson:** the voice pass, and its podcast episode.
