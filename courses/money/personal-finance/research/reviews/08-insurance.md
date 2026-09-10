# Reviews: Personal Finance Fundamentals — 08-insurance

Append-only. Newest at the bottom.

## Lesson 8, "Handing off what you cannot absorb" — Stage 4, Tier B, 2026-09-09

Drafted 2026-09-09 from the insurance research added to `SOURCES.md` the same day. **Tier B, five
reviewers, one per pass**, because health insurance is a 3.4 sensitive domain and the outline made
the neutrality audit mandatory. It earned the cost: the fact-check found a fabricated quotation and
the neutrality audit returned a plain fail. Everything below is applied.

### The two findings that justify the tier

**8.1 An invented quotation attributed to a named regulator.** The lesson quoted the NAIC's buyer's
guide as saying "the cash value is the accumulation of premiums collected minus expenses and
charges". The reviewer downloaded the guide from the lesson's own footnote link, extracted its text,
and the sentence is not in it; nor is it on the NAIC consumer pages; nor does the exact string appear
anywhere on the web. The mechanism it describes is right, which is presumably how it survived
drafting. **Fixed:** the quotation marks and the attribution are gone and the mechanism is stated in
the lesson's own voice. **This is the worst class of defect the pipeline has produced, worse than a
wrong number, because a reader who checks the source finds the course inventing evidence.** The
general rule it argues for: when a sentence appears in quotation marks with an institution's name
attached, open the institution's document and search for the string.

**8.2 A fabricated statistic doing the work in a worked example.** "If you claim about once every
seven years, which is roughly the industry-average frequency for a comprehensive claim" is off by
about four times; comprehensive frequency runs near 3 claims per 100 car-years. **Fixed** by removing
the statistic rather than replacing it: the checkpoint now runs the arithmetic across a range of
claim frequencies and tells the reader to get their own claim history from their insurer, which is
better teaching and needs no source. Note the direction: the invented figure **weakened** the
lesson's own conclusion, so this was not motivated reasoning, which makes it more worrying rather
than less.

### The neutrality audit: failed as written, on three blocking findings

**8.3 The organising claim was false for most of what the lesson teaches.** "Insurance is not
supposed to pay off on average" holds for a policy bought at its full loaded price. It does not hold
for US employer coverage, where the employer pays roughly six sevenths of the premium untaxed, and
that is the coverage the lesson spends most of its length on. The audit's point is that presenting
all health coverage as an individually purchased negative-expected-value product **adopts one side's
framing of health coverage in the author's voice**, and it also hands the learner a rule that gives
the wrong answer on their own plan. **Fixed** with a bounding paragraph immediately after the trade
is introduced.

**8.4 A market-oriented reader would not have found their position anywhere.** The lesson ran two
long sections on deductibles and never mentioned the RAND Health Insurance Experiment, the HSA, or
the fact that ACA plans cover preventive care before the deductible, and it presented the
high-deductible plan only as a trap for people without savings. **Fixed:** the case for the high
deductible is stated in its own terms, with RAND's 39% spending reduction behind it, and the lesson
says plainly that what that reduced use did to health is the disputed part. Note the honest limit
recorded in the sources: **rand.org refuses automated retrieval, so the original health-outcome
papers were not opened and are not cited**, exactly as EPI was handled in lesson 7.

**8.5 The bankruptcy exchange repeated lesson 7's finding 7.5 in mirror image, and the audit found it
by counting rather than by reading for tone.** The 4% position had a named journal citation with a
free PDF link; the 60% position had no footnote of its own, only a trailing clause inside its
opponent's. The 4% argument was taught in the lesson's own voice with a memorable analogy; the 60%
reply was handed over in quotation marks and ended on its weakest point. The only source given for
the 60% side was an advocacy organisation's page, unlabelled. **Fixed:** both teams named in the
body, both with their own numbered sources, the advocacy organisation labelled as one, each design
given a one-clause statement of what it is good for, and the 60% side's strongest point (the
admissions design measures one channel and leaves the rest unmeasured rather than zero) moved into
the lesson's own explanatory voice.

**The rule this and 7.5 together establish, and it should be in every future review brief: when a
lesson describes two positions, count the citations, count who gets the last word, and check who is
explained against who is quoted, before reading a single sentence for tone.**

### The rest, applied

- **The Oregon nulls were over-read.** "A null result is not proof of no effect" is a generic hedge
  standing in for the specific point, which is that the biomarker arms were underpowered. The section
  now says so, and it now carries the findings it had omitted (more care used, better diabetes
  detection and treatment, better self-reported health) so that both camps' readings are available.
- **Both diagrams contradicted the lesson.** The pooling chart showed insurance removing the bad year
  entirely, which the lesson spends a section demolishing, and it drew the rare year five times
  taller in one panel than the other, so insuring appeared to make bad years more likely. Redrawn:
  one shared scale, the rare year at the same height in both, and the bad year still present after
  insuring. The plan chart's crossing label was struck through by both data lines; moved below the
  crossing with a leader, verified in the browser with `getBBox` at desktop and phone width in both
  themes.
- **Three of six quiz items were recall of sentences printed in the body**, one of them a restatement
  of the section's own conclusion. Two rebuilt as transfer items on new cases (the same deductible
  result on a different product, and the same survey-against-causal-design problem on job loss and
  foreclosure). A fourth objective added, since reading two disagreeing findings had a section, a
  quiz item and no objective.
- **1,900 words of the densest evidence in the lesson had no reader task.** Two blocks added: a
  predict that makes the reader compute the 4% themselves from the three numbers, and a checkpoint
  that asks what an admissions record cannot see before the reply is read.
- Contractions restored in the teacher's voice (there were three in the file and all three were
  inside quotations), the closing one-line moral cut from the paragraphs where it was a tic, three
  headings that gave away their own sections reworded, and a heading promising two paragraphs over a
  four-paragraph section fixed.
- Citations: the Oregon trial had been footnoted to the bankruptcy paper. It now has its own entry.
- Sydnor's interpretation is no longer presented as settled; the probability-distortion reading is
  named. The extended-warranty figures now admit that they put a mean against a median, and say why
  the argument survives it.
- The life insurance section gained the worked obligation-sizing example the outline asked for, and
  the two cases the simple needs test misses (insurability, and debts that survive death).

### Not fixed, and why

- **`minutes`.** The voice reviewer measured about 128 minutes; `npm run minutes` says 100 and now
  reads 95 as correct. The script is the project's measure and the disagreement is recorded rather
  than resolved. If a learner reports it running long, the script's model is what to revisit.
- **Three diagrams the reviewers wanted** (the Sydnor bars, the Oregon result, and a picture of which
  routes each bankruptcy design can see) are not drawn. The third is the strongest suggestion in
  either report and is worth doing when the course next gets a media pass; it is logged here rather
  than left in a subagent transcript.
- **Property insurance beyond the deductible question is untaught**, and that is a Stage 1 gap rather
  than a drafting one. Recorded in SOURCES.md's open concerns.

---
