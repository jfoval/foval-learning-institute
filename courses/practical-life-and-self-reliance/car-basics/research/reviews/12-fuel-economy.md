# Reviews: Car Basics lesson 12, "Fuel economy: what maintenance buys, and the figures that were withdrawn"

## 2026-09-26 — Lesson 12 — Stage 4, Tier A
**Reviewer:** one fresh-context reviewer, all six passes; neutrality run on the one contested item
(windows against air conditioning). Primaries re-read with curl: fueleconomy.gov's maintenance page live
and in six captures (plus two 2016 captures to bracket "Revised June 27, 2016"), its myths, octane,
cold-weather, driving and hot-weather pages, NHTSA "Tires" (capture 20260924154655), the Energy Saving
Trust (capture 20260731174146), Highway Code Rules 103 to 158 (content API), C&U regs 98 and 107.
**Verdicts:** facts and law fail on R1 (two wrong fuel prices, copied from SOURCES); safety passes;
neutrality passes, with the departure from OUTLINE's "small either way" judged right and two fixes owed
(R6); depth and pedagogy minor (R2, R11, R14, R15, R16); cold start minor (R17); voice minor (R18);
minutes 70 against a measured 70. The capture table, the withdrawal dates, the no-reason line, Rule 123's
MUST, should and "permissible", the jurisdictions and the US octane label verified. Reviewer's verdict:
pass after fixes. 1 high, 6 medium, 11 low, 1 note, 0 critical.

**Findings:**
1. R1 [high] "$3.02 in 2021, $3.60 in 2023": the captures serve $3.09 and $3.58. Same error in SOURCES.
2. R2 [medium] "Three of the five figures fell or disappeared, one at a time": four fell, in three changes.
3. R3 [medium] The knock gloss ("before the spark should light it") describes pre-ignition, not knock.
4. R4 [medium] Reg 98's paraphrase drops 98(2)(b)'s second limb while saying the regs say it "more fully".
5. R5 [medium] The warm-up misconception restates Rule 123 instead of pointing back to the labelled H2.
6. R6 [medium] Windows against AC: "an Oak Ridge test" (the page cites two SAE papers and labels neither
   Oak Ridge); the EST's next sentence missing; "your comfort is a fair tiebreaker" unlabelled. SOURCES
   (c)1 and neutrality row 9 still say "small either way".
7. R7 [medium] "The roof box is the biggest figure in this lesson": false (40 and 14 per cent appear).
8. R8 [low] Hedges dropped in lead-ins: "Many newer vehicles ... spark timing"; "typically has".
9. R9 [low] The severe-duty quotation stops before "by a few percent".
10. R10 [low] The tune-up quotation presented as the 2007 to 2021 wording; 2019 and 2021 write "%".
11. R11 [low] "wrong for nearly every car on the road in 2007" overstates the 2010 page.
12. R12 [low] "still widely repeated": no source read.
13. R13 [low] Cents ($10.37, $51.84) imply precision the approximation lacks; heading "about fivefold".
14. R14 [low] "checking them saves no fuel at all" is the course's reading, unlabelled; "dangerously soft"
    unsourced.
15. R15 [low] Checkpoint (c) uses the 5W-20 example the body never gave; (b) not a year range.
16. R16 [low] Quiz: Q4's "badly clogged" invites the 14 per cent figure; Q5 stem; Q2 option A's "afresh";
    Q1 explanation's "2010 to 2013 wording".
17. R17 [low] Cold start: carburettor glossed late; turbocharger, supercharger, compression ratio; bonnet
    without hood; psi without bar.
18. R18 [low] Voice: four sentences; no think-block in the octane or idling sections (optional predict).
19. R19 [note] OUTLINE drift: E10 and petrol storage not in the lesson; the SVG timeline is a table.

### Resolutions applied
**SOURCES and OUTLINE first.**
- R1 verified by the fixer before any change: captures 20210708122652 and 20230706032230 re-fetched with
  and without `id_` (curl, default User-Agent). Both serve `$3.09` and `$3.58` in the `fuelpricebott`
  span, the `gblfuelprice` input and `regpricedef`. SOURCES "Lesson 12 reads" corrected in place with
  dated notes.
- SOURCES neutrality table row 9, Part A (c)1 and the Part A §6 EST conflict line: "small either way" and
  "ORNL test" corrected in place with dated notes. The hot-weather entry in "Lesson 12 reads" corrected
  ("Oak Ridge papers" to its references 1 and 4, two SAE papers).
- SOURCES: "Stage 4 note, lesson 12 (2026-09-26)" appended at the end, with the new verified strings
  (the 2010 page's "prevalent" sentence, hot weather's "more than needed", the octane hedges, regs 98(2)(b)
  and 107(2)), each re-read live or from the capture.
- OUTLINE lesson 12: "the small, unsettled thing" and "citing an Oak Ridge test; small either way"
  corrected with a dated note, which also records the table kept in place of the SVG timeline.

**The lesson.**
- R1 fixed: "$3.09 in 2021, $3.58 in 2023". No sum in the lesson used either price; every sum redone by
  hand anyway (12,000/30 = 400; 0.6% of 400 = 2.4 gal; 2.4 x 4.32 = 10.37; 3% of 400 = 12, or 11.65 by
  400 - 400/1.03; 12 x 4.32 = 51.84; 0.6% of 4.32 = 2.59 cents; 0.03 x 400 = 12; 0.6% of £1,500 = £9;
  3.3/0.6 = 5.5; 100 lb = 45.4 kg; 65 to 75 mph = 104.6 to 120.7 km/h; 1 psi = 0.069 bar). No podcast
  script exists yet for lesson 12.
- R2 fixed with the reviewer's text.
- R3 fixed differently: the reviewer offered a gloss ("exploding on its own ... after the spark") or a
  cut. The gloss is a mechanism no source read gives (decision 14), so the gloss is cut: "The page takes
  knock no further than that definition, and nor does this course."
- R4 fixed with the reviewer's text, and reg 107's exceptions added (both re-read live).
- R5 fixed with the reviewer's text.
- R6 fixed: "two published studies, which this course did not read"; the two agreeing sentences added,
  both quoted from pages re-read today; "your comfort is a fair tiebreaker" cut; Sources entry 12 now
  says "The studies it cites were not read." The departure from OUTLINE's "small either way" is settled:
  no page read measures the gap, and the one AC figure read is "more than 25%".
- R7 fixed with the reviewer's text.
- R8 fixed in the body and the Q2 explanation.
- R9 fixed: quoted to the sentence's end.
- R10 fixed with the reviewer's text.
- R11 fixed with the reviewer's text, both halves labelled.
- R12 fixed with the reviewer's text.
- R13 fixed: "about $10 a year"; "about 12 gallons, roughly $50 a year"; heading "cut more than fivefold".
  The $12 and 2.6-cent rounding paragraph kept.
- R14 fixed: "on this course's reading of that footnote"; "dangerously soft" became "a quarter under
  their placard figure" (the lesson 7 TPMS version was not used, to keep FMVSS 138's scope out of it).
- R15 fixed: the page's 5W-20 example added to the oil paragraph (re-read live), so checkpoint (c) now
  rests on the body; (b) given as a range.
- R16 fixed as given. Keys unchanged, so no permutation; each explanation read against its keyed option.
- R17 fixed: the carburettor gloss moved to first use; turbocharger or supercharger glossed with the
  page's "more air into the engine"; compression ratio given as "they squeeze the mixture harder", which
  lesson 2's compression stroke supports; "(hood)" in the exercise; "(1 psi is about 0.07 bar)".
- R18 fixed: the three sentences rewritten as given; a `:::predict` added before the restart paragraph
  (restart against a minute of idling), its answer labelled as the course's arithmetic.
- R19 noted, no change: E10 is not added (optional, and the lesson has room only for what it teaches);
  the table stays, since dated text cells read better in a table.

**Voice checks:** no em dashes; the only en dashes are inside quoted "1%–2%" and "1%–1.5%"; callout
byte-identical (same md5 as lesson 01); no banned words found; bold about 5.7 per 1,000 body words;
contractions about 7.7 per 1,000; three `:::predict`, two `:::checkpoint`, one worked example with a
gap; footnotes [1] to [12] all present.

**Final measures:** about 5,280 body words; `minutes: 75` (measured; was 70); quiz keys 0,2,0,3,1
(unchanged; all four positions, no adjacent repeat, no identical sequence or value shift against lessons
01 to 11 and 13, no run of four at offsets 0 or ±1 with lessons 7 to 11 and 13); option-length spreads
10, 11, 14, 6 and 8, the key never the sole longest; places Mesa and Wellingborough (unchanged).
`npm run quotes car-basics`: no misses in this lesson. `npm run validate`: exit 0, nothing naming this
file. `npm run quiz`: nothing for this lesson.

**Status after review:** needs second pass, narrow: R1 was a wrong fact. A second reader checks only the
seven fuel prices against the captures and the worked-example sums and roundings.
