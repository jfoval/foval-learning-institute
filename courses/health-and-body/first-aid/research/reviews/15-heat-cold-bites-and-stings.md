# Reviews: First Aid and CPR lesson 15, Heat, cold, bites and stings

## 2026-09-25 — Lesson 15 — Stage 4, two reviewers in parallel, Tier B (split)
**Reviewers:** F (facts, neutrality, safety) and P (depth, pedagogy, cold start, voice and media),
each in a fresh context, on the draft committed in 8390e66. F read the AHA/Red Cross 2024 guideline
(Wayback 20260329073336 prose, Tables 26, 27, 32, 33 and 35 from archived images, Tables 29 and 34
from SOURCES G3), re-fetched RCUK 2025 first aid, read the ERC 2025 first aid publisher page, the
ILCOR 2020 heatstroke CoSTR and the ILCOR 2025 manuscript, re-fetched the NHS heat, hypothermia,
frostbite, snake bite, insect bite and Lyme pages and St John's hypothermia page, read the drafter's
CDC, NIOSH, NWS and other St John copies, string-matched 102 sentences by script, and redid every sum
and conversion. P measured the lesson, built it with `build:drafts`, measured every table at 375 and
1280 px, checked keys against lessons 1 to 14 and places against lessons 1 to 14 and the final test,
and read every cross-referenced passage.

**Verdicts.** F: 0 critical, 3 major, 14 minor; fact-check, neutrality and safety pass after fixes;
decision 2 ruling (no "lag"; dates given) endorsed. P: 0 critical, 4 major, 10 minor; depth passes;
pedagogy fix before shipping (P1, P3, P4); cold start passes with fixes; voice and media fix the
tables (P2).

**Findings, Reviewer F:**
1. F1 [major] "No drink" for a confused heatstroke patient credited to the AHA four times; the AHA's
   heatstroke row (T34 row 1) allows cool liquids if the person can swallow, and the US cell dropped
   that clause. The NWS's "Do NOT give fluids." is the real US difference.
2. F2 [major, safety] "Open windows" in the Peterborough heat wave: invented, credited to RCUK, and
   against the NHS's "close windows if it's hotter outside".
3. F3 [major, safety] The normal-breathing clause in Knoxville parsed backwards (quiet, regular
   breathing read as the arrest sign).
4. F4 [minor] The predict stem said ILCOR ranked cooling methods; ILCOR says it could not. The
   ranked list is the ERC's.
5. F5 [minor] "Not reviewed again since 2020" dropped the 2022 evidence update.
6. F6 [minor] "The one real difference is the hot water bottle" hid the bath scope and St John's
   body warmth; St John's "and keep them warm" was trimmed.
7. F7 [minor] Decision 2 paragraph: "their guideline", "lists those methods as alternatives" and
   "neither says why" each wrong or edged.
8. F8 [minor] "With snow" credited to the NHS and St John, who don't mention snow.
9. F9 [minor] The AHA heat row is for exertional hyperthermia or heatstroke, not heat exhaustion.
10. F10 [minor] RCUK's hypothermia list is headed "Prevention of hypothermia".
11. F11 [minor] "Cool first, transfer second" applied in the US case without its bodies; the opener
    said "the guidelines" rule out the tick twist (the CDC does).
12. F12 [minor] Neutrality: the NWS's "Call 911 or get the victim to a hospital immediately" left
    out while two UK pages were named as differing.
13. F13 [minor] The ERC's thermometer passage lost its hedge.
14. F14 [minor] Exercise answers A and B mixed countries.
15. F15 [minor] Smaller trims: "pressure injury"; "particularly susceptible"; "The eye"; "cannot be
    woken"; the blacklegged tick; RCUK's fan alone; Cooking lesson 2 as this course's explanation.
16. F16 [minor, safety] "Use the wet sheet when there's no water" left immersion as a bare
    instruction with no conditions.
17. F17 [minor] The 20-minute predict and the 15-minute stopping rule unexplained side by side.

**Findings, Reviewer P:**
1. P1 [major] Four of six quiz items (Q1, Q2, Q5, Q6) replayed the body's own cases; the NHS
   30-minute rule, the US snakebite rows, the wasp and the 72-hour window were untested.
2. P2 [major] Four tables 1,134 to 1,900 px tall at 375 px; the snakebite table overflowed its
   column (356 px in 343).
3. P3 [major] The first predict's answer printed above it three times, and its stem set up a ranking
   the answer took back.
4. P4 [major, safety] Q3 (ice fishing, two-hour walk) was a remote case the course doesn't cover,
   its key walked him out on frozen toes against a COR 1 rule, and its explanation used UK texts
   under a US stem.
5. P5 [minor] Peterborough's "run the arithmetic" applied the ERC's exertional figure to classic
   heatstroke; the 20 against 15 minutes unexplained.
6. P6 [minor] The breathing sentence (with F3), and the recovery position left her in the tub.
7. P7 [minor] Hypothermia stages never defined; "active rewarming", "cold stress", "hyperthermia",
   "technical remark", "heat index", "wheal" and the 4% to 9% label unexplained.
8. P8 [minor] Lesson 4 cross-references claimed more than lesson 4 says; "no recommendation" first
   appears in lesson 8.
9. P9 [minor] The ERC, ILCOR, CDC/NIOSH, NWS, NHS and St John pages not linked at first mention.
10. P10 [minor] Exercise answers A and B not under their own country (with F14).
11. P11 [minor] Body-to-body warming and "Afterwards" interleaved US and UK in one sentence.
12. P12 [minor] Voice: source jargon ("row", "table"), "folk remedy" for the ambulance plan,
    "neither says why", a redundant sentence, stiff sentences, "Acetaminophen is paracetamol." alone,
    section labels bolded.
13. P13 [minor] 95 minutes against ~75: mostly scope; some cuttable repetition; the heat-wave plan
    had no timing cue.
14. P14 [minor] The sledging checkpoint gave its answer away in the stem.

### Resolutions applied

**SOURCES.md.** Appended "Gate closures, lesson 15 (2026-09-25)" with F's 100 script-checked
sentences and the [V-img] table rows, plus AHA Table 11 (the hypothermia stages, read from the
drafter's Wayback copy) and the rec 10 supporting sentence on cold stress, which F6 and P7 needed.
Part C 10's "UK lay pages lag" corrected in place to the decision 2 ruling. **OUTLINE.md** decision 2:
the heatstroke wet sheet taken off the lag list, with a note saying why, in one edit.

**Reviewer F:** all 17 fixed.
- F1: the US heatstroke "First" item now carries "cool liquids if able to swallow"; the
  heat-exhaustion paragraph states the AHA's heatstroke row, its rehydration recommendation and the
  NWS's line, then applies lesson 14's rule as this course's. Knoxville, Peterborough and the
  misconception credit lesson 14 and the NWS. The quiz 1 explanation it named was replaced under P1.
- F2: "Open windows" removed; the NHS's close-curtains-and-windows line added with its condition.
- F3 with P6: F's wording, plus P's out-of-the-tub step for the recovery position, with cooling
  carried on by wet towels and ice packs (the AHA's alternatives).
- F4 with P3: the predict now asks which of tub, ice packs and fan is fastest, sits before the
  summary, and says ILCOR declined to rank; the ERC's order is labelled as the ERC's.
- F5: F's sentence, citing [1] and [5]. F6: F's three-differences paragraph; St John's line
  restored in full in its own UK item (with P11).
- F7, F12, F16: F's replacement paragraph, with the NWS's call line, and F16's neck-down condition.
- F8 to F11, F13 to F15, F17: as proposed. F14's A answer now leads with the NHS and St John and
  drops the AHA soaked-clothing line; B cites the AHA for the definition and the call.

**Reviewer P:** all 14 fixed, P13 in part.
- P1 and P4: five new items, keys kept where they were (0,3,2,1,3,0). Q1 Driffield (NHS: heat
  exhaustion still unwell at 40 minutes, key 999). Q2 Roanoke, Virginia (copperhead: suction kit,
  ice, elastic wrap; key rest, limb still, rings off). Q3 Steamboat Springs, Colorado (frostbitten
  fingertips, a hot tap and the last lift; key: no last run, 37 to 40 °C water, seen promptly). This
  departs from P's proposed key ("keep them frozen until she's done with the cold"), which would have
  had her riding on frozen fingers; the AHA's "earliest opportunity" with no refreezing risk is met by
  staying down. Every option is answered from AHA lines. Q5 Allentown, Pennsylvania (engorged tick;
  key: a health professional within 72 hours; the NHS's 3-month watch as a distractor). Q6 Cedar
  Rapids, Iowa (wasp, nothing left in; key wash and a cold pack). Q4 Whitby kept.
- P2: the heatstroke and hypothermia tables became US and UK lists; the method quotations moved
  below as one sentence each; RCUK's prevention list moved to a sentence. Stings table cells cut;
  snakebite's four "don't" rows merged into one "Ruled out" row. Measured again at 375 px: stings
  866 px, snakebite 799 px, exercises 623 px, no table wider than its column, page 39,436 px.
- P5: Peterborough now cites RCUK's cool-first for any suspected heatstroke; the 20-minute predict
  answer says you would stop at 15 minutes without a thermometer and the crew keeps cooling.
- P7: the AHA's stages in one paragraph (cold stress, mild, moderate, severe, by signs), with this
  course's reading that anyone less responsive than they should be gets the moderate treatment.
  Glosses for active and passive rewarming (Table 11's own wording), exertional hyperthermia, the
  4% to 9% label (grams per 100 mL), heat index; "technical remark" is now "notes on the evidence";
  "wheal" gone with the old Q6.
- P8, P9, P10 (with F14), P11, P12, P14: as proposed. P12's bolded labels reworded into sentences
  (alcohol, own body, the rest of the US list, in the UK, afterwards, who, why keep still).
- P13: the salt-tablet misconception line and the NHS's advice-to-the-bitten lines cut; "Take 15
  minutes." added to the heat-wave plan. Declined: cutting the ILCOR 2025 sentence (F5 needed it
  corrected, not removed) and the antibiotic-trial clause (it is the reason for the 72 hours, and F15
  asked for its species).

**Final test.** Lesson 15's item added: Bismarck, North Dakota (hypothermia, locked out in freezing
rain; key 2: into the house, wet clothes off gently, blankets, wrapped heat packs; distractors a warm
shower, rubbing with heat packs on the limbs, hot coffee first). Twenty-four items, seventeen to pass;
the "still to be added" comment removed. Key sequence ends 3,2, no adjacent repeat.

**Measures.** Body 7,176 words; `minutes: 115` (measured; up from 95, from the 15-minute plan cue
and the added definitions and pairs); bold 76 spans, 10.6 per 1,000; contractions 55, 7.7 per 1,000;
no em dashes, no spaced en dashes, no banned words; three `:::predict`, four `:::checkpoint`, one
worked example with a gap (Peterborough). Quiz keys 0,3,2,1,3,0: at most 3 positional matches with
any of lessons 1 to 14 or lesson 16's draft, longest aligned run 2, no rotation or shift. Option
lengths (characters): Q1 79/75/81/80, Q2 73/77/70/73, Q3 76/76/75/75, Q4 74/77/76/75,
Q5 73/77/76/72, Q6 76/74/71/76; spreads 1 to 7, key sole longest once (Q4). Callout byte-identical.
`npm run validate` exit 0; `npm run quotes first-aid` 0 not found.

**Status after review:** needs second pass (five new quiz items, a new final test item, and the
heatstroke and hypothermia sections restructured).

## 2026-09-25 — Lesson 15 — Stage 4 second pass, one reviewer (facts and safety)
**Reviewer:** F2, fresh context, on the fix pass committed in 1ebd7ca. Read the Reviewer F brief,
the lessons 6 to 9 patterns, the first review above and "Gate closures, lesson 15" in SOURCES; read
the lesson against the primaries in the session scratchpad (AHA Wayback prose extract with Table 11,
SOURCES G3's transcriptions of Tables 29, 34 and 35, RCUK 2025 live page, NHS heat, hypothermia and
frostbite pages, St John hypothermia, NWS, CDC/NIOSH).

**Checked and sound.** All six quiz items executed against their keys (0,3,2,1,3,0; no adjacent
repeat): Driffield against the NHS call-999 list (the 30-minute line is on it); Roanoke against T29
(rest and immobilise 2a C-LD, rings 2a C-EO, ice 3: No Benefit, suction and pressure bandage
3: Harm, all C-LD; copperhead a pit viper); Steamboat Springs against T33 and the supporting text
(37 to 40 °C, earliest opportunity with no refreezing risk, prompt care, all COR 1; 45 °C harmful in
one of the animal studies; warm room air or skin as the alternatives); Whitby; Allentown against T27
row 1 (COR 1, B-R, engorged tick, high-prevalence region, 72 hours) and the doxycycline sentence;
Cedar Rapids against T26 rows 8 and 10. Option lengths re-measured: Q1 79/75/81/80, Q2 73/77/70/73,
Q3 76/76/75/75, Q4 74/77/76/75, Q5 73/77/76/72, Q6 76/74/71/76; key sole longest once (Q4). Each
explanation reads true against its key. The US and UK heatstroke and hypothermia lists read against
T34, T32, RCUK and the NHS and St John pages, row by row; the no-drink line credited to lesson 14's
rule and the NWS's "Do NOT give fluids." beside the AHA's "cool liquids if able to swallow"; the
immersion conditions (neck down, someone stays, no wrestling a person who can't stand into a bath);
the stages against Table 11 as printed. Conversions redone by hand: 1 to 26 °C is 33.8 to 78.8 °F,
39 °C is 102.2 °F, 37 to 40 °C is 98.6 to 104 °F, 45 °C is 113 °F, 3 ÷ 0.15 = 20. Final test:
Bismarck item against T32 rows 1, 3, 4, 7 and 10 and Table 11 (sound; options 79/78/77/77); 24 items,
keys 2,0,1,3,2,1,3,0,3,2,3,1,0,2,1,0,2,3,1,3,1,2,3,2 with no adjacent repeat; 70% of 24 is 16.8, so
17 to pass, as the intro says. Places Driffield to Exmoor and Bismarck appear nowhere else in the
course.

**Findings.**
1. S1 [minor, safety] Knoxville's breathing sentence named only gasping and noisy breathing as not
   normal; lessons 7 and 14 and the course pattern also rule out slow and irregular. Fixed: "slow,
   noisy, gasping or irregular breathing is not normal", with the paragraph rewrapped.
2. S2 [minor] The US heatstroke "No water" item gave only the adult grade; T34 grades the children's
   row C-EO, as the "Best method" item already says. Fixed: "(COR 2a, LOE C-LD; children C-EO)".
3. S3 [minor] Moderate hypothermia "often with frostbite": Table 11 says "Associated with frozen
   tissue/frostbite", no frequency. Fixed: "sometimes with frostbite".
4. S4 [minor, not fixed, for QUEUE] The hypothermia "If they stop responding" paragraph applies
   lesson 2's rule, so a severely hypothermic person with slow breathing (Table 11's own sign) gets
   CPR. The lesson says plainly that the course has not read the hypothermic-arrest guidance and
   defers to the call handler, which is honest, but the ERC and AHA resuscitation texts on
   hypothermia (not read here) are the place a longer breathing check would come from. Worth a
   Stage 1 read before the course is called written; not a change to make from this page.
5. S5 [observation] St John's "if fully alert" condition on warm drinks is in its outdoor steps; its
   indoor steps give a warm drink without it. The lesson's UK item is the stricter reading and
   agrees with the NHS, so no change.

**Timing.** `minutes: 115` is the model's figure (8,478 words at 140 wpm is about 61 minutes, plus
two exercises, three predicts, four checkpoints and six quiz items). "Take 15 minutes" for a
one-page heat-wave plan about a real person is an honest figure; the model adds it on top of 2.5
minutes a step, so it prices that exercise at about 25, some ten minutes above what the page asks.
The rest is reading, and getting back toward 95 would take cutting about 2,000 words of the heat,
cold, sting, tick and snake material the objectives require. No trim made: none small enough to
matter is available without losing teaching.

**Measures.** `npm run validate` exit 0 (callout byte-identical); `npm run quotes first-aid` 417
quotations, 0 not found; `npm run minutes` 115, unchanged.

**Status after review:** clean.

## S4 resolved: hypothermic arrest (2026-09-25)

A targeted Stage 1 read, recorded in SOURCES.md under "Stage 1 addition: hypothermia and arrest
(2026-09-25)": AHA 2025 Part 10 §17 (Wayback 20251027153841, full for the section and its scope),
RCUK 2025 Special circumstances and Adult BLS (full, direct), ERC 2025 Special Circumstances (full,
on the publisher's page, with Fig. 5 from the image) and the ERC 2025 lay guide's hypothermia
passage (full, direct). The ERC chapter's 2026 corrigendum could not be read (bot wall).

**What it found.** No guideline read gives a lay rescuer a different recognition rule for a cold
person, so lesson 2's rule stands and the paragraph's conclusion was right. The one-minute check
S4 anticipated is real (RCUK 2025; ERC 2025, ungraded), but it is about "vital signs" (pulse and
breathing), the ERC's evidence text does it with ECG and ultrasound, and the ERC's own lay guide
leaves it out; the AHA gives no check duration at all. The AHA's scope says Part 10 is "designed
primarily for North American health care professionals" and marks no hypothermia line for lay
rescuers; its COR 1 line (full resuscitation immediately, with rewarming) is the only one a lay
rescuer acts on. The ERC lay guide's line is continuous CPR at the standard protocol.

**Changes to the lesson.**
1. "If they stop responding" rewritten. It no longer says the course has not read the guidance.
   It keeps lesson 2's rule and adds a decision 2 pair: AHA 2025 COR 1 (C-LD adults, C-EO
   children), with the AHA's own scope sentence, and the ERC 2025 lay guide's continuous-CPR line.
   Three professional-only items follow, each labelled as not a lay step: the one-minute check
   (RCUK 2025; ERC 2025, ungraded; why the course reads it as professional, and the slow-breathing
   point tied back to the UK call-first rule); delayed or intermittent CPR (AHA 2025 2b, C-EO;
   RCUK and ERC below 28 °C core); and when to stop (the AHA's "findings that mimic death" and
   unreliable signs of death, with its metabolic reason; the ERC flowchart's "Do not terminate
   CPR"), ending on lesson 2's keep-going-until-the-crew-take-over.
2. Handling: one sentence added quoting the ERC 2025 professional flowchart, "Minimal and cautious
   movements to avoid rescue collapse", with a note that the passages read don't define the term.
   "will not add a reason" became "will not add a reason of its own".
3. Four footnotes added (14 ERC 2025 Special Circumstances, 15 AHA 2025 Part 10, 16 ERC 2025 lay
   guide, 17 RCUK 2025 Special circumstances and Adult BLS).
4. No quiz item or exercise depended on the paragraph (exercise A's hiker is responsive), so none
   changed. Safety callout untouched.

**Measures.** `npm run validate` exit 0; `npm run quotes first-aid` 417 quotations, 0 not found;
every quotation in the hypothermia section also checked by hand against the new SOURCES section.
`npm run minutes` 120 (was 115); `minutes:` set to 120.

**Status:** S4 resolved. The rewritten paragraph has not had a fresh-context Stage 4 read; a
single reviewer on the hypothermia section is worth running before the script is written.
