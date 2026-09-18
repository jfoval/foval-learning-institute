# Reading Well, lesson 4: What reading costs

Newest review at the bottom.

## 2026-09-18 — Lesson 04 — depth, fact-check and pedagogy, Tier A
**Reviewer:** fresh-context subagent, full pass against SOURCES.md, OUTLINE.md, the editorial
standards, the style guide and `/review-lesson`. Verdict: not Tier B, 21 findings, four of them
named as the ones that "would embarrass the course if it shipped as it stands" (F1, F3, F5, F8).

**Findings:**

1. [blocking] Quiz Q3 option B, "roughly five times the average", and its explain, "five times the
   low-300s average" — 1,500 ÷ 238 is 6.3, and "the low 300s" is the inflated norm this lesson
   exists to correct, not its average — state it against 238.
2. [blocking] Quiz Q3 option A, "about four times the top of the measured band" — the top of the
   non-fiction band is 300, so 1,500 is five times it, and the explain endorsed the wrong figure by
   saying A "gets the direction right".
3. [blocking] Body, "four to six times what they just recorded" and "four to six times more per
   fixation" — against the 175 to 300 band the true ratio is 5.0 to 8.6; four times would need a
   reader above the band entirely.
4. [blocking] "the American Psychological Science summary" — no such body. It is the Association
   for Psychological Science.
5. [blocking] "the useful width of a fixation is a few characters, not a line" — uncited, and
   absent from SOURCES, whose Rayner entry carries the saccade quotation, the 200 to 400 band, the
   1,000 ceiling, RSVP and peripheral fuzziness and nothing about perceptual span. The phrasing came
   from OUTLINE.md, which is not a source. It also falsified the lesson's own promise that it claims
   nothing beyond what the two summary sources support.
6. [blocking] "vocabulary and background knowledge.[2]" — SOURCES records Rayner's constructive
   finding as vocabulary and **practice**. Background knowledge is lesson 3's theme read back into a
   citation that does not carry it.
7. [blocking] The chart drew a band of 175 to 320 labelled "most adults" — that merges two
   distributions, 175 to 300 for non-fiction and 200 to 320 for fiction, into a figure Brysbaert
   never reports, and the `<desc>` repeated it.
8. [blocking] The quiz could be passed without reading the lesson: every answer was index 1, and in
   all five items the correct option was much the longest. Q1 and Q3 also carried only one option
   each free of an absolute, against the rule of at least two.
9. [serious] One of five items was application. Q2, Q4 and Q5 were recall of the lesson's own
   sections, and Q3's case is worked in the body. Q1 and Q5 restated the body's own figures in the
   stem, which tests the page rather than the idea.
10. [serious] Q5's explain rested on the 2022 *Media Psychology* meta-analysis, which is in SOURCES
    but appeared nowhere in the body.
11. [serious] Two different things were both called skimming: Rayner's concession is about getting
    the gist of running text fast, while lesson 2 taught Adler's systematic skimming, which reads the
    contents page and index and explicitly is not skimming the argument. The lesson also called it
    "a named level of reading" when SOURCES records it as one of two **sublevels** of inspectional
    reading.
12. [serious] The chart's three markers could not be told apart: circles at cx 59, 71 and 75 with
    r=4, the 183 marker sitting inside a band of its own colour, and colour as the only key.
13. [serious] The 1,500 line was drawn like data. It is the lesson's own hypothetical and the
    caption attributed the other three marks but not that one. The axis also carried no unit in the
    drawing, only in the `<desc>` that a sighted reader never sees, and the chart was never referred
    to in the body.
14. [serious] Chart label "1000, comprehension lost" overstated the source, which says rates above
    1,000 are not possible without severe loss.
15. [moderate] "about 300 words a page for a typical non-fiction book" hedged a number without
    telling the reader it is a stand-in. SOURCES records nothing about words per page.
16. [moderate] The caption promised a Tinker quotation the body never gave; it sat only in footnote 1.
17. [moderate] One predict block, and not at the reveal. The 238 / 260 / 183 figures arrived flat,
    immediately after an exercise that had just put the reader's own number in their hand. The single
    checkpoint asked book-length arithmetic from the end of the five-gears section.
18. [moderate] Zero contractions in 2,417 words. All 18 apostrophes were possessives.
19. [moderate] Broken quotation seam: "describe saccades as moving 'to the parts of text ... and to
    move back to material ...'" does not parse.
20. [moderate] The disclosure that the Rayner monograph was never opened arrived one claim after the
    first thing attributed to it.
21. [moderate] Delgado was cited three times and linked nowhere, while the other two sources carried
    links in the body, in Go deeper and in the footnote.

**Resolutions:**

1. Fixed. Q3 rewritten: the correct option now reads "more than six times the measured average",
   and the explain gives both ratios, 6.3 against the average of 238 and five times the top of the
   band.
2. Fixed with it, as option B of the rewritten item.
3. Fixed. Both read "five to eight times".
4. Fixed to "the Association for Psychological Science's public summary".
5. Fixed by cutting the clause. The sentence now ends at "the jumps are called saccades and the
   stops fixations", and the limit on what a fixation delivers is carried by the peripheral-vision
   citation further down, which SOURCES does support.
6. Fixed to "vocabulary and practice", with the link to lesson 3 made in the lesson's own voice in
   the following sentence rather than inside the citation.
7. Fixed. The chart now draws the non-fiction band alone, 175 to 300, labelled as non-fiction.
8. Fixed. Keys are now BCADC: all four positions used, no adjacent repeat, and `npm run quiz`
   reports nothing for this lesson. Absolutes reduced to one per item in Q1 and Q3.
9. Fixed. Q1 is now a transfer case the lesson never works (a reader timing 210 on their own field
   and 280 on a magazine, asking which is their real rate), and Q4 is a transfer case about a study
   guide selling two of Carver's gears as settings. Neither restates a body figure in the stem.
10. Fixed by adding the 2022 *Media Psychology* result to the Screens section, where SOURCES
    already holds it, so the explain now rests on something the reader was given.
11. Fixed in both places. The body now names the two senses and says which lesson 2 taught, and
    calls systematic skimming one of the two sublevels of inspectional reading.
12. Fixed by redrawing. The chart is now four labelled rows on one scale rather than markers on one
    axis, with the average of 238 as a bar and the 175 to 300 band as a bracket above it. The 183
    and 260 figures moved to the caption and the `<desc>`, which is the reviewer's second option and
    the honest one: at this scale they cannot be drawn apart.
13. Fixed. The caption now says the 1,500 mark is not a measurement of anything, the drawing carries
    "words a minute" under the axis, and a sentence before the figure refers to it.
14. Fixed to "Above 1000: severe loss".
15. Fixed with the reviewer's own wording: count a page of your own book, and 300 only if you cannot.
16. Fixed. Tinker's verdict is now quoted in the body where the history is traced.
17. Fixed. A predict now sits before the 238 / 260 / 183 reveal and asks the reader to order the
    three and guess the gap, and the checkpoint moved up to sit under the chart with the rates.
18. Fixed in eight places, including the section heading "why this course won't hand them to you".
19. Fixed to the form SOURCES records: movements that "naturally move to the parts of text ...".
20. Fixed. The disclosure now opens the section, before anything is attributed to that source.
21. Fixed. The DOI was confirmed through the Crossref API and now appears in the body, in Go deeper
    and in footnote 3.

**Status after review:** clean. `npm run validate` exits 0, `npm run quiz` reports nothing for this
lesson, `npm run minutes` measures 35 against a declared 40, inside precision.
