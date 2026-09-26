# Reviews: Home Repair lesson 12, "Smoke alarms: where they go, and why they stay silent"

## 2026-09-26 — Lesson 12 — Stage 4, Tier A

**Reviewer:** one fresh-context Tier A reviewer under this course's `research/pipeline-briefs.md`,
all six passes. Re-read live (curl with a browser User-Agent; GOV.UK through the content API, then
pandoc or pdftotext): the MHCLG release and its Table 5.1, FIRE0602 (by script), SI 2015/1693 reg 2
and reg 4, the Scottish Government factsheet, Fire Kills "Detection", the Home Office guide, USFA's
smoke alarm page and dryer flyer, and NFPA's fact and tip sheets. The chart rendered with
rsvg-convert and read by eye; every bar width and sum redone.

**Verdicts.** Facts and law: needs fixes (9 major). Safety: one major (quiz 3 told a renter to move
the alarm); callout byte-identical; no wiring or gas procedure. Neutrality: no contested or value
claims (the lesson reports alarm law, official advice and official statistics, side by side and
without a verdict); pass skipped. Depth and pedagogy: one major (quiz keys). Cold start: two minor
gaps. Voice and media: minor only; chart correct. Count: 0 critical, 11 major, 15 minor. Second
pass trigger met: wrong facts (R2 to R4).

**Findings:**
1. R1 [major] Table 5.1's casualty column left out; in fires with a casualty, battery reasons
   (15.9%) and siting reasons (18.7%) are close, and MHCLG says "other" is commonest there.
2. R2 [major] "This course read nothing that explains the gap": NFPA's sheet shows a different
   category scheme (a separate "fire too small to operate"; no "did not reach" category).
3. R3 [major] The tumble dryer called the commonest non-cooker appliance; FIRE0602 has hot plates,
   batteries and generators, microwaves and toasters above it.
4. R4 [major] MHCLG footnote 10's "can be" turned into "usually means".
5. R5 [major] Fire Kills' undated "more than a third of fires" set beside MHCLG's figure (about 9% of
   dwelling fires) as "the same point".
6. R6 [major] "In the UK" / "the UK advice" for advice that is England's (GOV.UK marks the guide as
   England only).
7. R7 [major] "Differs mostly in how many alarms" misstated England's advice; Fire Kills' ceiling,
   hallway and landing, bedrooms and heat-alarm lines, and USFA's ceiling line, left out.
8. R8 [major] No law for Wales, Northern Ireland or the US, and objective 1 unmeetable; USFA's
   local fire marshal pointer available.
9. R9 [major] Scotland's rule without whose duty it is (the property owner's), and the factsheet
   presented as the law itself; England's rule binds landlords only.
10. R10 [minor] Reg 4(2) (bathroom counts) and 4(4) (hall or landing is a room) never stated, but
    quiz 2 relies on 4(2).
11. R11 [minor] The two government risk figures presented as one figure that "has moved".
12. R12 [minor] Dryer section: "isn't fuel-burning" when USFA covers gas dryers; no UK dryer advice
    read; moving a gas dryer unlabelled.
13. R13 [minor] The opening gives away the predict's answer.
14. R14 [minor] "About 5%" is the course's addition, unlabelled.
15. R15 [major, safety] Quiz 3's key told a renter to move the alarm; plus three minor label notes
    (checkpoint "yours" for moving; sealed alarm replaced whole; pointer to lesson 16).
16. R16 [minor] Places reused: Bedfordshire (lessons 10, 14), East Lothian and "a couple" (lesson
    16), Delaware (Personal Safety lesson 10).
17. R17 [major] Keys 0,1,3,2,0 are lesson 04's shifted two places.
18. R18 [minor] Key the sole longest option in items 1, 2 and 5 (build warning).
19. R19 [minor] Quiz 5 replays the body's figures; allowed, as it is interpretive.
20. R20 [minor] "Heat alarm" never explained.
21. R21 [minor] Padding: "the reason most people give"; the opening's figures repeated; an
    unsourced one-line moral on the second alarm.
22. R22 [minor] Caption doesn't name the gold bars; should say the chart is the Fires column.
23. R23 [minor] No links in the teaching prose (build warning).
24. R24 [minor] Three passages repeated from lesson 11 (build warning).
25. R25 [minor] A misconception restates law instead of pointing back.
26. R26 [minor] Contractions 11 per 1,000 non-quoted words.

### Resolutions applied

**SOURCES.md:** appended "Stage 4 note, lesson 12 (2026-09-26)" with every new string (MHCLG's
casualty column and its "other" sentence, footnote 10 in full, FIRE0602's 2025/26 rows with
MHCLG's categories, Fire Kills' five siting lines, USFA's four new lines, NFPA's chart categories
and reasons heading, the Scottish factsheet's mains line and open-plan rule), each string-matched by
the fixer in the reviewer's saved copies; FIRE0602 re-counted by script. No earlier entry was wrong.

- R1 fixed: a paragraph on the casualty column (16% battery by the course's addition, 8.7% and 10%
  siting, MHCLG's "other" sentence); predict answer scoped to all fires; misconception gives both
  columns; quiz 1 stem says "for all dwelling fires" and its explanation adds the casualty clause.
- R2 fixed with the reviewer's wording; NFPA's 8% of fires and 21% of deaths added as "a related
  pattern of its own"; quiz 5's explanation now names the category difference, and its fourth
  option no longer says "added up in different ways".
- R3 fixed: opening and dryer section say "more than any appliance outside its cooking appliances
  and its wiring and electrical distribution rows". MHCLG files microwaves and toasters under
  cooking appliances and batteries and generators under electrical distribution, confirmed by script.
- R4 fixed ("can mean"). R5 fixed with the reviewer's wording (0.49 × 19% = 9.3%, redone).
- R6 fixed: heading "In England"; Fire Kills as "the UK government's campaign"; "England's advice"
  or "the Home Office guide, for England" at each former "UK advice".
- R7 fixed: "mostly in how many alarms" gone; Fire Kills' ceiling, bedrooms and heat-alarm lines
  added to England; USFA's ceiling and "interconnected" lines added to the US.
- R8 fixed: a sentence that the course read no smoke alarm law for Wales, Northern Ireland or any US
  state, with USFA's fire marshal pointer; objective 1 reworded as the reviewer gave it.
- R9 fixed: Scotland's tolerable standard quoted from SSI 2019/8 (in force 1 February 2022, new
  Sources entry 10) with the factsheet as the Government's statement of what meets it, and "It is
  the property owner’s responsibility"; England's Regulations "bind landlords".
- R10 fixed: 4(2) and 4(4) stated; quiz 2 replaced with a house whose loft holds only a bathroom
  (key: all three floors).
- R11 fixed: "two figures, in slightly different words"; nothing read says one replaced the other.
- R12 fixed: "counted among electrical appliances"; "no UK official page on dryer care"; cleaning
  behind the dryer is Yours, on conditions, with moving a gas dryer labelled as the course's reading
  of "serviced by a professional", and Call someone.
- R13 fixed (opening ends at "didn't go off"). R14 fixed at each "about 5%".
- R15 fixed: quiz 3 keeps the renter and the key is now "ask her landlord about moving the alarm";
  moving it herself is a distractor, and the explanation says why. The body adds "if you rent, tell
  the landlord" to fitting or moving; the checkpoint labels moving a battery alarm Yours, on
  conditions; a sealed alarm is replaced whole; the pointer names lessons 15 and 16.
- R16 fixed by grep across every course's lessons: Derbyshire (quiz 2), the Pacific Northwest
  (quiz 3), a widower in Perthshire (quiz 4), each unused anywhere; Gloucestershire (quiz 1) kept,
  unused elsewhere.
- R17 fixed: keys 2,0,1,2,3, the reviewer's candidate, reordered with `scripts/quiz-permute.cjs`
  and re-checked by script against lessons 01 to 18 on disk after the edits (all four positions, no
  adjacent repeat, not identical, no value shift, no positional shift, no shared run of four at
  offsets 0 or ±1): passes. Each explanation read against its new key.
- R18 fixed by lengthening distractors; no key is the sole longest; warning gone.
- R19 no change beyond R2 and R18. R20 fixed per decision 13 (no source gives the mechanism; the
  maker's instructions). R21 fixed: the aside cut, the repeat cut, the moral replaced by Fire Kills'
  "Having more smoke alarms in more places" line. R22 fixed (gold bars named; Fires column stated).
- R23 fixed: links on the first quotation of each source; warning gone.
- R24 **left alone**, on the orchestrator's instruction: lesson 11's fixer is rewording lesson 11's
  copies, so this lesson keeps its own. The repetition warning no longer names this file.
- R25 fixed (points back to "Where smoke alarms go"). R26 fixed: seven "didn't" uncontracted.

**Final measures:** about 3,375 body words; minutes 65 (`npm run minutes`); bold 10 per 1,000;
contractions about 7.7 per 1,000 non-quoted words; no em or en dashes; quiz keys 2,0,1,2,3; option
lengths per item 89 to 103, 83 to 88, 82 to 89, 98 to 106, 86 to 93 (spread 14 at most); places
Gloucestershire, Derbyshire, the Pacific Northwest, Perthshire. `npm run validate` exit 0 with no
line naming this file; `npm run quotes home-repair` finds nothing in this lesson.

**Status after review:** needs a second pass. R2 to R4 were wrong facts, and the fixes add new
figures and quotations; a second fresh reader should check them.
