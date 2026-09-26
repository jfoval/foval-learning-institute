# Reviews: Car Basics lesson 07, "Tyres I: pressure, the placard and TPMS"

## 2026-09-26 — Lesson 07 — Stage 4, Tier A
**Reviewer:** one fresh-context reviewer, all six passes. Primaries re-fetched live with curl (eCFR
571.110, 571.138, 571.139, 574.5, 575.104; GOV.UK Annex 6, Highway Code Introduction, MOT manual
section 5 and Introduction; legislation.gov.uk reg 27 and s.41A; TyreSafe; AAA Exchange) and NHTSA,
NHTSA winter and NY DMV from Internet Archive captures. Every quotation string-matched by script; every
sum redone by hand; SVG rendered and read.
**Verdicts:** facts and law revise (R1, R2 wrong claims; R3 breaks a settled course-wide rule); safety
pass with R11; neutrality skipped (no contested claims; R7); depth and pedagogy pass with fixes (R5,
R10, R13, R16); cold start revise (R5); voice and media pass with minor fixes (R6, R14, R17). 5 major,
13 minor, 0 critical.

**Findings:**
1. R1 [major] The TPMS trigger taught as "placard x 0.75" for every tyre; FMVSS 138 Table 1 sets 23 psi
   (extra load), 29 psi (Load Range C) and 35 psi (D, E), and quiz 1's pickup could be on LT tyres.
2. R2 [major] The legal latest point treated as the car's own threshold ("on most cars it would be
   dark"; "close to a quarter low"; checkpoint "at or near 26 psi"); NHTSA's "likely" dropped.
3. R3 [major] "The law is that the tyres are at the maker's pressure": the course-wide rule says to name
   the Code's statement of the law beside reg 27's words. Quiz 4's explanation the same; option D
   half-true.
4. R4 [major] Quiz 2 (a UK case) and the TPMS misconception give the US 25 per cent rule without its
   country.
5. R5 [major] Cold start: no instruction for taking a reading with a gauge; "valve stem" unexplained.
6. R6 [minor] Chart: fourth row unlabelled; "Light part" puns on the warning light.
7. R7 [minor] TyreSafe and AAA labelled at first use only.
8. R8 [minor] The warning-light H2 states law with no label; the opening counts one law section.
9. R9 [minor] Morpeth: add NHTSA's "compensate for the extra pressure in warm tires"; say the England
   case leans on US sources.
10. R10 [minor] UTQG: "wore" for "would wear"; "winter tyres" for "deep tread, winter-type snow tires".
11. R11 [minor] Exercise step 5 sends the reader driving; the body's spare label lacks the inside-the-car
    condition.
12. R12 [minor] MOT Introduction quoted under the section 5 citation.
13. R13 [minor] The AA's "every 2 weeks", in OUTLINE's core ideas, dropped.
14. R14 [minor] Nested double quotes in the NHTSA "cold" line.
15. R15 [minor] Unsourced reason in the date-code predict.
16. R16 [minor] Quiz 5 restates the Pueblo case.
17. R17 [minor] One-line moral after the chart.
18. R18 [minor, optional] "The law cited beneath it": Annex 6 cites reg 27 after the whole tyre block.

### Resolutions applied
**Checked live by the fixer before editing** (curl, browser User-Agent, no personal data): FMVSS 138
S4.2(a) and Table 1 on eCFR (P-metric Standard 20 psi, Extra Load 23, Load Range C 29, D 35, E 35;
"not more than 20 minutes after"; "whichever is higher"); S4.5's "replacement or alternate tires or
wheels"; AAA's gauge steps 1 to 5; the AA's "every 2 weeks"; the MOT Introduction (updated 1 June 2026);
575.104(c)(1) and (d). The reviewer is right on R1 and R2.

**SOURCES:** appended "Stage 4 note, lesson 07 (2026-09-26)": Table 1 and the correction that the
0.75 rule holds only on standard-load tyres and is the latest point, not the car's threshold; AAA's
steps [V]; the AA line whole [V]; the MOT Introduction lines; 575.104's exact scope; the quote-check
note for R14.

- R1 fixed with the reviewer's text, one change: "almost always the higher one" (unsourced) became
  "the higher one whenever the placard figure is above about 26.7 psi (this course's arithmetic)".
  Quiz 1 stem now "A car sold in the US, on standard-load passenger tyres" (pickup dropped) and the
  explanation says the 20 psi minimum doesn't apply; key unchanged and right for those tyres. Chart
  subtitle "FMVSS 138, standard-load tyres (psi)" (the reviewer's longer subtitle clipped in a wide
  font per validate) and `<desc>` addition; exercise step 4 and its checkpoint; the 33 psi predict now
  says "on standard-load tyres". Objective 3 adds "or at a higher floor for some tyres".
- R2 fixed: predict line and the cold-morning bullet with the reviewer's text; the checkpoint's stem
  and answer rewritten. Declined one clause of the reviewer's answer, "could have been as much as about
  9 psi under": that is no bound either, so the answer says the threshold "can be no lower than 26.25
  psi, and the light alone does not say by how much". "Pressure you can lose with a dark dashboard"
  (after the chart) was the same inference and now reads "without the standard requiring any warning".
- R3 fixed with the reviewer's text for the law paragraph and quiz 4's explanation. Option D not taken
  as given: "Any figure up to the sidewall maximum" overlapped option B; D is now "Any pressure she
  chooses, since Annex 6's rule doesn't point to any figure for the tyres", unambiguously wrong because
  the stem asks about Annex 6's MUST. Option C's "the law in Great Britain" became "Annex 6's rule" too.
- R4 fixed with the reviewer's text (quiz 2 explanation; misconception).
- R5 fixed: AAA's three quoted steps added after the gauge paragraph, labelled. Reviewer's gloss "short
  rubber or metal stalk" not used (from no source); it now says the valve stem "is the one the cap
  screws onto", from AAA's own order of steps. The reviewer's "this course read no guide to forecourt
  air lines" declined as wrong: AAA's step 3 is one, so the lesson quotes it ("push the air hose into
  the valve firmly, until the air stops escaping"; "Check the pressure every few seconds").
- R6 fixed as given: fourth-row label, axis and footer moved down 20, viewBox 350; legend "Gold part:
  the 25% with no warning required."
- R7 fixed at every use in body, table, quiz 2, quiz 6 and Go deeper: "TyreSafe, the industry-backed
  charity"; "AAA, whose clubs sell roadside assistance" (chosen over "the US motoring clubs" because it
  carries the commercial fact the convention's label is for).
- R8, R9, R10, R14, R15, R17, R18 fixed with the reviewer's text (R9's England note worded to say why
  US sources are used).
- R11 fixed as given; the spare sentence re-split so "which" doesn't attach to the car.
- R12 fixed: new source [17], MOT manual Introduction; the M1 definition and the minor-defects line cite
  it.
- R13 fixed: a third table row for the AA with its label, source [16]; the line after the table adds
  "and every two weeks the AA's".
- R16 fixed as given: winter wheels case; explanation adds the standard's cause. Options and key
  unchanged.

**Final measures:** about 6,100 body words; `minutes: 90` (measured 90, the ceiling given for this
fix); bold 4.8 per 1,000; contractions about 7.9 per 1,000 outside quotations (brought into band by
spelling out five in new text); two `:::predict`, four `:::checkpoint`, Morpeth worked example with a
gap. Quiz keys 0,3,2,0,1,0 (unchanged): all four used, no adjacent repeat; checked by script against
01, 02, 03, 04, 05, 06 and 08 on disk: no identical sequence, no value shift, no run of four at any
offset under any constant shift. Option-length spreads 2 to 5; the key is never the sole longest (item 1 ties
at 89). Places: Morpeth, Pueblo (unchanged). Callout byte-identical. No em dashes or
spaced en dashes. `npm run validate`: exit 0, nothing naming this file. `npm run quotes car-basics`:
one miss for this file, explained: the R14 single quotes inside NHTSA's line (words unchanged;
noted in SOURCES). `npm run quiz` exits 1 on GAMEABLE quizzes in other courses; nothing in Car Basics.

**Status after review:** needs second pass (R1 and R2 were wrong claims: a fact-check re-read of the
TPMS passages, the chart, quiz 1 and the law paragraph before publish).
