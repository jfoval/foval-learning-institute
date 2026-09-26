# Reviews: Car Basics lesson 10, "Lights, wipers, glass and the walk-round"

## 2026-09-26 — Lesson 10 — Stage 4, Tier A
**Reviewer:** one fresh-context reviewer, all six passes. Primaries re-read live or through the named
capture: RVLR 1989 reg 23; C&U regs 30 and 34; MOT manual sections 3 and 4 and the main page; Highway
Code Annex 6; National Highways' vehicle-check page; the Met Office winter page; the New York DMV
inspection page (capture 20260710141515); PennDOT's FAQ; the Virginia State Police page; Nissan's 2024
LEAF handbook (live PDF); Ford's 2024 Maverick handbook (capture 20250505042038).
**Verdicts:** facts and law pass after fixes (no wrong fact of substance; the reg 23(3)(c) correction is
right); safety one major (R1); neutrality skipped, no contested or value claims; depth and pedagogy pass
after fixes; cold start minor glosses; voice one moral, and the SVG needs R2. Keys 0,1,2,0,3 valid under
decision 20's relaxed rule. 3 major, 15 minor, 0 critical. "Revise, then settle": no second full pass.

**Findings:**
1. R1 [major] "never in a closed garage" (body and exercise) invites running the engine in an open
   garage; Home Repair lesson 11 quotes the CDC ruling that out.
2. R2 [major] The zone A rect gave the band a height of its own, stopping short of the swept edge on
   the left and poking outside it on the right; the steering-wheel label ran into the circle; the
   manual's date was only in `<desc>`; "badly" for the manual's "significantly".
3. R3 [major for Q5, minor otherwise] Q5's key the only option with no absolute; Q1 had one
   absolute-free option; Q2's "not his", "badly", and no "as general information" in the stem.
4. R4 [minor] The zone A H2 and the Welshpool H2 state or pose law without the label.
5. R5 [minor] The Welshpool answer doesn't say "reasonable expedition" is undefined.
6. R6 [minor] Damage over the figure that doesn't significantly affect the view is still a Minor.
7. R7 [minor] The RAC unlabelled at two uses in the body and in the Q5 explanation.
8. R8 [minor] The exercise's "park with the back of the car toward a window" asks the reader to move
   the car.
9. R9 [minor] The brake-light misconception heading states something the lesson shows is true.
10. R10 [minor] Q4's explanation claims, unsourced, that the reflection method works in daylight.
11. R11 [minor] Q5's 14 months replays the body's fourteen months; Q2's chip replays the body's case.
12. R12 [minor] Three handbook lead-ins say more than the handbooks (Nissan's "same list", Ford's
    "commonest question" and "mean", Ford explaining the walk-round's spray step).
13. R13 [minor] "For your plan" drops Annex 6's "at least" weekly.
14. R14 [minor] The walk-round checkpoint omits Dangerous for every stop lamp out, and diagnoses "a
    bulb or unit to replace" in the course's voice.
15. R15 [minor] The course's reading of reg 34 on a smearing blade is unlabelled.
16. R16 [minor] Cold start: stop lamp not tied to brake lights; windscreen and windshield unpaired;
    dipped and main beam without the US words; position lamps unexplained.
17. R17 [minor] The GB table's washers row asserts a Major the body never quotes; the New York
    windscreen cell reads as though a chip passes.
18. R18 [minor] One one-line moral closing the New York predict.

### Resolutions applied
**SOURCES first.** New section "Stage 4 note, lesson 10 (2026-09-26)" appended at the end: the CDC's
attached-garage line and its detached-garage line (capture 20260920191925, page updated 12 January
2026; cdc.gov refuses curl); the MOT manual 3.2 Minor and Major damage rows and the zone A drawing's
shape (content API, section updated 2024-11-29); Ford's FAQ question (capture 20250505042038,
pdftotext); Annex 6's "at least weekly". All re-read by the fixer today with curl and a generic
User-Agent.

**The lesson.**
- R1 fixed, going slightly beyond the reviewer's text. The body now says "never inside a garage, even
  with the door open", and quotes the CDC's sentence in the words Home Repair lesson 11 uses, with a
  new footnote [14]. On re-reading the CDC page, the fixer found that its next line allows a *detached*
  garage with the door open. So the lesson says the CDC's words are about a garage joined to a house,
  and that keeping a running engine out of every garage is this course's own precaution. "Both
  precautions that follow are this course's own, not National Highways'" now opens the passage. The
  exercise uses the reviewer's text.
- R2 fixed, with one coordinate change. The reviewer's `Q 292,79` only approximates the swept area's
  edge. The fixer took the exact sub-curve of the swept path's second Bézier between x=254 and x=330
  (t≈0.157 to 0.515, control point 300.3,83.5), so the band's top lies on the swept edge:
  `M 254,205 L 254,74.7 Q 300.3,83.5 330,108.3 L 330,205 Z`. The label, "significantly", `<desc>`,
  viewBox 420×420 and the caption sentence are as given. The source line was shortened to "Source: DVSA
  MOT manual 3.2, 29 Nov 2024." because `npm run validate` warned that the reviewer's wording clips in a
  wide system font. Rendered in headless Chrome in both themes: nothing overlaps, everything sits
  inside the viewBox, every label is 15px or larger, and the fills are tokens with literal fallbacks.
  The manual's own drawing (winscreen_zone_A.png) was viewed and matches the new band.
- R3 fixed: Q1 D and Q5 B as given. Q2 was replaced under R11 (below), so the reviewer's D and B
  wordings for the old case weren't needed; the new item opens "As general information", and its key
  has no absolute.
- R4 fixed: the label added under the zone A H2. The Welshpool H2 merged into "The law on lamps, in
  Great Britain", directly after its label.
- R5, R6 fixed. R6 quotes the manual's "not adversely affecting driver's view" rather than
  paraphrasing it.
- R7 fixed at 163 and in the Q5 explanation as given. At line 166, "a motoring organisation's list"
  became "that checklist", so the RAC isn't used there a second time without its label.
- R8, R9, R10, R12, R13, R14, R15 and R16 fixed with the reviewer's text. For R16, "position lamps" is
  glossed at both uses, with no definition supplied.
- R11 fixed. The body now uses two years and six months. Q2 is a new case: a 30 mm chip 400 mm to the
  left of the wheel's centre line, outside zone A and under the 40 mm figure. The key stays at
  position 1, and the explanation was rewritten and read against the keyed option.
- R17 fixed: the 3.5 washer row quoted with [10], verified today; the New York cell given the
  reviewer's clause.
- R18 fixed by the cut.

**Voice checks:** no em dashes and no spaced en dashes. No banned words: "journey" appears only in the
regulation's text. Bold is 26 spans, about 6 per 1,000 body words. Contractions are about 7 to 10 per
1,000 body words, depending on how possessives are counted; they were left as drafted. There are two
`:::predict` and two `:::checkpoint` blocks, one worked example with a gap (Welshpool), and footnotes
[1] to [14], all present and used.

**Final measures:**
- About 4,300 body words. `minutes: 75` (measured 75).
- Quiz keys 0,1,2,0,3, unchanged. Rechecked by script against lessons 01 to 09, 11 and 12 as on disk:
  no identical sequence or value shift, and no unshifted run of four. The one shifted run is with
  lesson 01 (+1), which the relaxed rule allows.
- Option-length spreads are 3, 4, 3, 4 and 6 characters, and no key is the sole longest option.
- Places: Welshpool and Poughkeepsie, unchanged.
- `npm run quotes car-basics`: 453 quotations, 0 missing. `npm run validate`: exit 0, with no line
  naming this file. `npm run quiz`: no line for this course.

**Status after review:** needs targeted re-read (R1, R2). A reader should check the garage passage and
the CDC attribution against the capture, and look at the rendered SVG on the built page. Nothing else
needs a second full pass.
