# Reviews: Note-Taking lesson 6

## 2026-09-19 — Lesson 06 — Stage 4, all passes, Tier A
**Verdicts as returned:** 25 findings, two critical, six major, ten medium, seven low, plus two
course-wide. Measurements clean on every style band: bold 16.0 per 1,000, 18 percent of paragraphs
opening bold, contractions 9.78, mean sentence 20 words, no em dashes, no unbalanced `**`, `minutes`
accurate, quiz sequence 2,1,2,3,0,1 with no adjacent repeat and no match with lesson 5.

**Defect 24 was checked the hard way and is clean.** The block-quoted abstract was extracted,
whitespace-normalised and diffed against `SOURCES.md` character by character: 1,332 against 1,332,
byte-identical, including the American spellings and the comma placement in "We urge that children,
from an early age, must be exposed".

### Findings

1. **[critical] Footnote 2 claimed an inline label the body did not carry**, for the lesson's
   central explanation. Two places: the syllogism reading and the step-counting generalisation, each
   a marker and nothing else. The third appearance of this in one course (lesson 1 finding 4, lesson
   3 findings 7 and 8). **Applied:** both labelled at the point of use, in the convention the file
   already used forty lines below.
2. **[critical] A fifth `[2]` carried a claim footnote 2 did not list, and it was the lesson's
   strongest judgement about the authors.** "That gap was opened by the abstract's own last two
   sentences rather than by anybody misreporting it" assigns responsibility for the public
   misreading to the authors, unlabelled and neutrality-relevant. **Applied:** softened to the
   checkable form, "the abstract's own last two sentences are where a reader would pick it up".
3. **[major] An invented number, stated flatly, no marker, no label**: the added design "would have
   cost this one an extra twenty minutes per participant", for a study nobody ran. Defect 22's third
   form with a number attached. **Applied:** cut.
4. **[major] Quiz item 5's explanation contradicted the body's own inline label**, attributing to
   the commentary the one elaboration the body took care to call the course's own. **Applied:**
   corrected, and the item has since been recast entirely (finding 5).
5. **[major] Standards 4.3: one application item of six.** Items 1, 2, 3, 5 and 6 all ran on this
   lesson's own two papers, three of them near-verbatim lifts of body sentences, which is defect 5b
   at full strength. **Applied:** item 3 recast into a walking-against-cycling trial whose cycling
   condition was a stationary bike at fixed low resistance, and item 5 into a sleep trial reporting
   only a difference between groups. Three of six now apply outside the lesson.
6. **[major] The outline's second worked example was missing.** Outline §6 specifies a constructed
   claim of the same shape from another domain, so the reader sorts the structure rather than the
   subject; 1.2 requires two worked examples and there was one. **Applied:** a school district
   reporting a forty per cent rise in library check-outs as evidence that literacy is rising,
   labelled in the body as constructed, with a `:::predict` where the reader names the measurement
   that would close the gap.
7. **[major] The commentary's second objection was quoted and never explained**, in a lesson whose
   second objective promises all three. A reader who had never met theta/alpha bands could not
   restate it. **Applied:** the bands glossed and the objection explained as the same step the
   lesson has already counted, which is also its best corroboration.
8. **[major] Neutrality: "both things are true at once" was asserted and not delivered.** Counted
   before reading for tone: the commentary got the last word in both the paragraph and the
   summing-up; the study's reason was quoted but never explained, so a reader could not tell whether
   it was a good one, while the commentary's objection was quoted *and* restated in the course's
   words; and "anyway" conceded the reason and removed its force. **Applied:** the study's case
   stated at strength at the point where the reason is quoted, so the symmetry is now real.
9. **[medium] The study's read level appeared nowhere in the teaching prose** while the
   commentary's did, which reads as the study being the better attested of the two. **Applied:**
   stated where the abstract is introduced.
10. **[medium] "Short" asserted of two documents the course did not read.** Defect 21.
    **Applied:** cut in both places.
11. **[medium] Exercise 2 asked the reader to find something the lesson printed 120 lines
    earlier**, and told them which of the three objections it applied to. Defect 4's compounding
    form. **Applied:** repointed at the papers.
12. **[medium] The whole vocabulary of the instrument was unglossed.** EEG unexpanded everywhere in
    the repo, and the reader handed theta/alpha connectivity, network hubs and nodes, and crossover
    effects. A lesson arguing that a physiological measure is one step further from a learning claim
    than it looks needs a reader who can say what the measure is. **Applied.**
13. **[medium] "Dependent variable" appears in no other lesson in this repo.** **Applied:**
    replaced with plain words.
14. **[medium] Zero links in the teaching prose**, with both open-access papers quoted at length and
    all four links in Go deeper and Sources. Fourth consecutive lesson with this finding; already in
    `course-wide.md`. **Applied.**
15. **[medium] Two think-blocks, and none in the longest stretch of new material.** The section
    introducing all three objections had no block. **Applied:** a `:::predict` before the objections
    asking the reader to raise their own first, and noting afterwards that none of the three is
    about the sample.
16. **[medium] The commentary shared footnote `[1]` with the study.** Six markers attributed the
    commentary's words to an entry headed with the study's title and authors. **Applied:** three
    entries now, the study, the commentary and the course's own constructions, with every marker
    renumbered.
17. **[low] "The one people wave away"** is an empirical claim about other people, in the course's
    voice, with no source, and the lesson's only tonal slip. **Applied:** "the one with a real
    answer on the other side".
18. **[low] The Sources entry said three quoted fragments where the body quotes four.**
    **Applied**, in the entry and in the body.
19. **[low] The commentary's title truncated without an ellipsis** in two places. **Applied:** full
    title restored.
20. **[low] Quiz item 5: option spread 17 characters and the key longest by 5.** **Applied**, by
    the recast at finding 5; the replacement spreads 6 and its key is not the longest.
21. **[low] "Above some baseline" implied a baseline condition** the study did not have.
    **Applied.**
22. **[low] Half of a verbatim commentary fragment printed outside its quotation marks.**
    **Applied.**
23. **[low] No diagram, where standards 4.5 names exactly this case**: an argument whose structure
    the lesson states twice in prose. **Applied:** a three-box SVG with the measured step separated
    from the two asserted ones, captioned as the course's own diagram.
24. **[low] Five bolded one-line morals**, under the style guide's threshold but at the edge.
    **Applied:** two cut. Bold now 15.2 per 1,000.
25. **[low] Quiz item 6 has one option carrying no absolute**, which the reviewer logged as a
    measurement rather than a defect, since neither item is guessable by shape. **Not changed.**

### Course-wide, from this review

- **`SOURCES.md` carried the pre-correction "two" in two places** after correcting itself at line
  47. Both were corrected to three before lesson 7 was drafted.
- **Lessons 4 and 5 had no review files.** Both written since.
