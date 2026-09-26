# Reviews: Car Basics lesson 11, "Dashboard warning lights"

## 2026-09-26 — Lesson 11 — Stage 4, Tier A
**Reviewer:** one fresh-context reviewer, all six passes. Primaries re-read live: eCFR 49 CFR 571.101
and 571.135 (version of 1 September 2026) and FMVSS 101 Table 1 from the five Federal Register images;
UN R121 (MLIT 2014 copy); ISO 2575:2021 publisher sample; Highway Code Annex 6; MOT manual Introduction
and sections 1, 5, 7 and 8; NY DMV capture 20260610152208; EPA420-F-03-042; fueleconomy.gov
maintain.jsp; both RAC pages; Ford 2024 Maverick capture 20250505042038 (pp. 113, 114, 164, 183);
Nissan 2024 LEAF (pp. 1-65 to 1-66, 2-15 to 2-20). iso.org refused the reader.
**Verdicts:** facts and law revise (one trimmed quotation, one omitted instruction on a cited page, one
unsourced US claim, several overstatements); safety pass; neutrality not needed beyond labels (R21);
depth and pedagogy pass with fixes; cold start pass; voice pass with R18 and R19. 0 critical, 4 major,
21 minor.

**Findings:**
1. R1 [major] The RAC's steady-light advice quoted without its next sentence ("Continuing to drive ...
   further damage"); "Ford is the bluntest" then misstates the sources.
2. R2 [major] The Durango answer works "from Ford's two pages" but omits p. 164's line for the MIL and
   powertrain lamp lit together: "stop your vehicle as soon as it is safe to do so".
3. R3 [major] "most US states have neither" is unsourced.
4. R4 [major] Lesson 2 sends the glow-plug light that stays on to lesson 11, and lesson 11 sent it back.
5. R5 [minor] "the handbooks read say to stop the car" overstates Ford.
6. R6 [minor] Ford p. 183 covers the battery and temperature lamps too; the lesson set Ford as the mild
   voice on the charge light.
7. R7 [minor] FMVSS 101 sets a symbol or a word, if fitted, not "what the oil light must look like".
8. R8 [minor] R121's footnote points to ISO 2575:2004, unread; "amber-then-red" is the course's gloss.
9. R9 [minor] EPA spells it "re-circulation"; the SOURCES correction is itself wrong; "most" makers.
10. R10 [minor] Lesson 6's pointer (why ABS is amber) only half kept.
11. R11 [minor] The ABS example doesn't show the RAC softening its red row.
12. R12 [minor] fueleconomy.gov does not say "soon".
13. R13 [minor] The stop-now lead-in claims both kinds of source for all four lights.
14. R14 [minor] The DPF and AdBlue paragraph restates lesson 3.
15. R15 [minor] "Lights at start-up" states US law without the label.
16. R16 [minor] Quiz 1: the key is the only option without an absolute.
17. R17 [minor] Quiz 3 puts a US-market Ford on a dual carriageway.
18. R18 [minor] Opening uses the "by the end of this lesson" shape; "the one distinction every driver
    needs" leans salesy.
19. R19 [minor] Cross-references without titles; label form ("Yours on conditions", "is yours").
20. R20 [minor] New York's threshold is a rating; no metric.
21. R21 [minor] RAC label missing at first use in two sections.
22. R22 [minor] Ford's mechanism lost its hedges.
23. R23 [minor] The LEAF's regenerative light illustrated straight after the ABS rule.
24. R24 [minor, SOURCES] MOT 1.1.10 (g) recorded as Major; it is Minor.
25. R25 [minor] "one country's colours"; "Durango" reads as a car name.

### Resolutions applied
**SOURCES first.**
- R9: the lesson 11/12 gate-closure "correction to Part A §5" withdrawn in place with a dated italic
  note; the same closure's quoted list respelled "re-circulation" with a dated marker. The fixer
  re-read EPA420-F-03-042 live (pdftotext -raw): question 4's OBD II list breaks "re-" /
  "circulation" at a line end, and every other occurrence is "re-circulation".
- R24: 1.1.10 (g) corrected in place to Minor with a dated marker, after a live re-read of section 1
  through the content API (`public_updated_at` 2026-06-01).
- New "Stage 4 note, lesson 11 (2026-09-26)" appended at the end: the RAC EML page's two sentences
  together, the RAC table row, DENSO's stays-on sentence and its causes sentence (new), EPA's
  question 7, MOT 1.1.10 (f) and (g), NY's GVWR, GAO's scope here, and the Ford p. 164 and p. 183
  reads recorded as the reviewer's, not the fixer's.

**The lesson.**
- R1 fixed as given: the RAC's next sentence added; "Ford is the bluntest" replaced with "Ford adds the
  warranty. On its catalytic converter page, beside the temperature, battery and engine lamps". RAC
  EML page re-read live by the fixer; both sentences verbatim.
- R2 fixed as given: "Neither line about the engine light says stop at once"; p. 164's powertrain-lamp
  line added before "The cause is **Call someone**". **Not re-read by the fixer:** the Internet Archive
  was unreachable from the fixer's sandbox, so this quotation and R6's p. 183 lamps rest on the
  reviewer's reading of capture 20250505042038 that day. `npm run quotes` finds the quotation in
  SOURCES.
- R3 fixed with the reviewer's first text, lightly reworded: GAO named as "the US Congress's audit
  office", 16 states with periodic safety inspection in 2015, fewer since, emissions testing by where
  a car is registered; new footnote [15] (GAO-15-705, as lesson 1 cites it; "fewer since" rests on
  Texas, Part D).
- R4 fixed: a new "Glow plugs, on a diesel" paragraph teaches the stays-on case from DENSO (re-read
  live): "should not be ignored", DENSO's likeliest causes (the plugs or their sensors) and its "could
  also indicate a problem with the engine itself"; no handbook read gives the step, so the reader
  copies the handbook's; the cause is **Call someone**. New footnote [14], DENSO labelled as a
  glow-plug maker. Exercise step 2 now includes the glow-plug light for a diesel. Lesson 2 untouched.
- R5, R6, R7, R8, R12, R13, R20, R21, R22, R23, R25 fixed with the reviewer's text. R7 also carried to
  the predict answer and the table ("Symbol or word set").
- R9 fixed in the lesson: "exhaust gas re-circulation (EGR) system"; "most makers got waivers for 1994
  and 1995".
- R10 fixed: the ABS paragraph now says why it's amber, citing ISO 5.2 and 5.1 [1]; "a red brake light
  can mean the brakes themselves are affected" is labelled as this course's reading.
- R11 fixed by cutting the ABS sentence (the reviewer's first option); the ABS-with-brake case is
  already quoted in the ABS paragraph, so it isn't repeated here.
- R12 also carried to two places it recurred: the misconception ("Every source read says to have it
  looked at, the RAC warns that driving on will likely do further damage") and the sort checkpoint.
- R14 fixed as given.
- R15 fixed by adding the short label as the section's first line; the opening now says three sections
  state law and names the US brake standard's start-up check.
- R16 and R7 in quiz 1: option 2 "... on pickups", option 3 "FMVSS 101 sets how the oil light is marked
  but leaves its colour to the maker"; explanation "a symbol or a word". Explanations re-read against
  every key.
- R17: "On a divided highway". R18 both fixed. R19: titles added for lessons 1, 2, 16 and 17; label
  form fixed in exercise step 4 and the oil paragraph.
- R25: heading "A climb out of the town of Durango"; the body's first mention left as is.

**Final measures:** about 6,200 body words; `minutes: 85` (measured, unchanged); bold 45 spans, about
7 per 1,000 body words; contractions about 7.6 per 1,000; no em dashes, no spaced en dashes; callout
byte-identical across all 15 lesson files (one md5). Quiz keys 3,0,3,2,1 (unchanged); option-length
spreads 6, 2, 6, 13, 9; the key never the sole longest; checked by script against lessons 01 to 10 and
12 to 15 under decision 20's relaxed rule (no identical sequence, no value shift, no shared run of four
at offsets 0 or ±1). Places: Durango only. `npm run validate` exit 0 with no line naming this file;
`npm run quotes car-basics` no misses for this lesson after the SOURCES note; `npm run quiz` nothing
for this lesson.

**Status after review:** needs second pass. R1 and R2 were half-quotations. A second reader re-reads
Ford pp. 164 and 183 from capture 20250505042038 (not re-read by the fixer) and checks the R1 and R2
passages, the Durango answer and the new glow-plug paragraph against their sources.

## Second pass (2026-09-26)
**Reviewer:** one fresh-context second reader. Reads made live with curl (generic browser
User-Agent, no personal data in any header): Ford 2024 Maverick handbook, Internet Archive capture
20250505042038 (`id_` raw PDF, pdftotext -raw), printed pp. 113, 114, 164 and 183 (PDF pp. 117, 118,
168, 187); RAC EML page; DENSO Europe glow-plug page; GAO-15-705 from Internet Archive capture
20260109053421 of gao.gov's PDF.

- **Ford p. 164 (R2): verified.** Under "Starting and Stopping the Engine – Warning Lamps", after the
  MIL and Powertrain Warning Lamp entries: "If both lamps illuminate when the engine is running, stop
  your vehicle as soon as it is safe to do so. Continuing to drive your vehicle could cause reduced
  power or the engine to stop." The condition is the MIL and the powertrain lamp lit together. The
  Durango answer's "if the powertrain warning lamp comes on as well" is a fair reading, and
  "Neither line about the engine light says stop at once" is right for the steady and flashing lines.
- **Ford p. 183 (R6): verified.** "Catalytic Converter – Warning Lamps" shows icons E103308, E67021
  and E67028, which p. 113 and p. 114 name as Engine or Motor Coolant Temperature, Battery and
  Malfunction Indicator Lamp. The sentence "Continuing to drive ... may cause reduced power or the
  engine to stop. Failure to respond to a warning lamp may cause damage that your vehicle Warranty may
  not cover. Have your vehicle checked as soon as possible." is verbatim. The lesson's three uses (the
  charge-light paragraph, "Ford adds the warranty ... beside the temperature, battery and engine
  lamps", the RAC-table paragraph and the misconception) match it. Ford frames those lamps as possible
  emission-control faults; the lesson's "for the battery lamp among others" is accurate as far as it goes.
- **p. 113 and p. 114**: battery, temperature, ABS, brake (parking brake first) and oil lines, and
  p. 114's "If it flashes, have your vehicle checked immediately", all verbatim.
- **RAC (R1): verified.** The two sentences are consecutive on the live page, as quoted. "Ford adds
  the warranty" is accurate.
- **Durango answer: sound.** Ease off, then the nearest place that can check it, labelled as the
  course's reading; the p. 164 powertrain line now sits before the label.
- **GAO (R3): verified.** "As of July 2015, we found 16 states with periodic inspection programs."
  The replacement wording (16 in 2015, fewer since, emissions testing by where a car is registered,
  lesson 22 for the rest) matches SOURCES Part D and makes no 50-state claim.
- **Glow-plug paragraph (R4): quotations verbatim; one omission fixed here.** DENSO's page goes on to
  say that when the sensors fail "the engine or DPF will suffer damage" in the worst case, so
  "immediate remedial action to find the underlying cause must be undertaken". The paragraph had only
  "should not be ignored", which undersells DENSO in the same way R1 undersold the RAC. Added as a
  paraphrase (no new quotation, so SOURCES is untouched): "In the worst case, it says, the engine or
  the DPF can be damaged, so the cause should be found at once." The label **Call someone** for the
  cause is right; DENSO gives no owner step and does not say stop, so the light stays under "Amber
  lights that aren't stop-now". The DENSO date (10 November 2023) in footnote 14 is right. For the
  fixer's SOURCES note next time: DENSO's "immediate remedial action" sentence is unrecorded.
- **Other first-pass fixes (R5 to R25):** each read against the review's fix text; all in place.
  8,501 lb = 3,856 kg checked.
- **Quiz:** each explanation read against its options and key; all fit. Keys 3,0,3,2,1: all four
  positions, no adjacent repeat, not identical to or a value shift of any lesson on disk (01 to 10,
  12 to 16), no shared run of four at offsets 0 or ±1 with any of them.
- **Measures:** no em dashes, no spaced en dashes; callout byte-identical across all 16 lesson files
  (one md5); `npm run minutes` 85 measured, 85 set; `npm run quotes car-basics` 0 not found;
  `npm run validate` exit 0, no line naming this file.

**Verdict: CLEAN.**
