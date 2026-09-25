# Reviews: First Aid and CPR lesson 11, Bones, joints, head and spine

## 2026-09-25 — Lesson 11 — Stage 4, two reviewers in parallel, Tier B (split)
**Reviewers:** F (facts, neutrality, safety) and P (depth, pedagogy, cold start, voice and media),
each in a fresh context. F re-fetched the AHA/Red Cross 2024 guideline (Wayback 20260502024223),
RCUK 2025 first aid, three NHS pages, NICE NG232, four St John pages, three British Red Cross pages
and Dubois and Esculier (Wayback 20241221192948) by curl, and read the ERC 2025 First Aid publisher
page, the ILCOR 2025 typeset text and the two American Red Cross pages in the browser pane; it
string-matched 101 sentences by script and redid every sum and conversion. P measured the lesson,
built it with `build:drafts` and opened it at 375 px, checked every cross-reference against
lessons 2, 4, 7 and 9, and compared the quiz keys with lessons 1 to 10.

**Verdicts.** F: 0 critical, 7 major, 13 minor; fact-check, neutrality and safety each fail until
fixed; every number, date, grade and quotation otherwise checks out; the callout is byte-identical.
F upheld five of the drafter's six claimed SOURCES defects (the sixth, the airway-priority sentence,
was already credited to RCUK) and found four more. P: 5 major, 13 minor; depth passes with P5
added; pedagogy fails until P1 and P2; cold start passes with glosses; voice and media pass with
minor fixes. Both: do not split.

**Findings, Reviewer F:**
1. F1 [major] The American Red Cross page's starred emergency list (significant cause of injury,
   head or neck pain, nausea or vomiting, fluid from nose or ears, damaged helmet) and its
   own-height fall line left out; "the US lists signs, not mechanism" true only of the AHA.
2. F2 [major, neutrality] Vomiting framed as a US/UK difference; the British Red Cross sends it,
   and suspected concussion, to 999.
3. F3 [major, safety] Wing-mirror case: NICE counts a pedestrian struck by a vehicle as
   high-energy, a 999 item; the answer said 111.
4. F4 [major] "None of these texts says where its number comes from" false for the AHA ("Experts
   recommend"); the British Red Cross gives no skin reason.
5. F5 [major, neutrality] "Everyone says yes" and "every source agrees on cold" contradict the
   PEACE and LOVE dissent; only the AHA and British Red Cross say "never" on skin.
6. F6 [major, safety] Helmet: "now it is [needed]" reads as an instruction to remove it, and no
   source says the call handler coaches removal.
7. F7 [major] St John's spinal recovery position omitted; the vomiting checkpoint said no source
   addresses a case one does.
8. F8 [minor] St John credited with over 65 and a past brain injury.
9. F9 [minor] "Both Red Crosses and St John" suggest cold for the bump; the American Red Cross
   head page gives none.
10. F10 [minor] "Secondary brain injury" read as a second injury.
11. F11 [minor] Misconception drops the American Red Cross's "usually" on X-rays.
12. F12 [minor] "No study showing ... safely" for "no study evaluating whether".
13. F13 [minor] B-NR called a grade; "almost" when it is the only B-level LOE.
14. F14 [minor] Step 4's "for a class" withholds RCUK's step; "Airway and CPR before the neck"
    credited to RCUK alone.
15. F15 [minor, neutrality] PEACE and LOVE's compression view missing; "they accept it's mostly a
    painkiller" hardens a conditional.
16. F16 [minor] American Red Cross fracture list summarised selectively; skate park skips the pop
    or snap question; the wrist filed under St John's "smaller bones".
17. F17 [minor] "Neither country's text explains its route" wider than NICE's read level.
18. F18 [minor] SOURCES gaps for primaries the lesson paraphrases; closing block of 101 sentences.
19. F19 [minor] Collar misconception drops the "routine" and trained-provider scope.
20. F20 [minor, decision 2] Steps 1 to 6 give no US line; no step for someone found on their side.

**Findings, Reviewer P:**
1. P1 [major] Quiz 4, 5 and 6 replay the lane example, the lane checkpoint and exercise F.
2. P2 [major] Quiz 2's distractors implausible; objective 2's evidence comparison untested.
3. P3 [major] Leg raise with a fracture given as St John's exception only; the US rule (no leg raise
   after any injury) dropped, so a US reader would raise the legs with a broken arm.
4. P4 [major] A skin-harm reason credited to the British Red Cross, which gives none (with F4).
5. P5 [major] St John's spinal recovery position missing from the unresponsive section (with F7).
6. P6 [minor] Exercise cases A and B replay the checkpoint's beam and climbing frame.
7. P7 [minor] Fracture and head-injury tables a screen or more tall at 375 px (head table 1,078 px).
8. P8 [minor] The UK worked example takes three steps from a US page without saying so.
9. P9 [minor] The lane's call justified by the suspicion lists, not a call instruction.
10. P10 [minor] York and Plymouth reused; the brief's place list incomplete.
11. P11 [minor] ILCOR, NICE, two NHS pages, St John, the British Red Cross, the American Red Cross
    and the ERC not linked where first quoted.
12. P12 [minor] Unglossed: NICE, open fracture, in-line immobilisation, jaw thrust, trapezius
    squeeze, long spine board, anticoagulant and aspirin monotherapy.
13. P13 [minor] US/UK interleaved in the skate park, the netball checkpoint and the table restatement.
14. P14 [minor] Habit bold openers, three rhetorical questions, one-line morals.
15. P15 [minor] "Stronger than almost anything" (with F13).
16. P16 [minor] "Part C" in the visible Sources list.
17. P17 [minor] The collar predict answered by its heading and the bullets above it.
18. P18 [minor] Two "every source" sentences (with F5).

### Resolutions applied

**SOURCES.md corrections first** (drafting defect 26), each checked against F's saved primaries in
`r11f/` before editing, as small targeted edits plus one appended section:
- Part B 8: ILCOR "not precluded" marked as manuscript-only wording, with the typeset text's
  "remains unchanged" and the ERC's report of the 2024 acknowledgement (drafter 1).
- Part B 6.2: AHA rec 2 completed with "to avoid cold injury"; "Experts recommend ... 3 to 4 times
  daily" now verbatim (drafter 2).
- Part B 8: RCUK "Never force" completed (drafter 3).
- Part B 6.2: PEACE and LOVE's anti-inflammatory concession added (drafter 4).
- Part B 8: American Red Cross remain-in-position lines and starred lists added (drafter 5).
- Part B 7: the St John and British Red Cross seek-advice lists split by body; the British Red
  Cross's two 999 lines added. **F8 was partly wrong**: St John's page (F's own copy) says "they are
  over the age of 65", so the merged line was right on age and loose only on brain injury (British
  Red Cross) against brain surgery (St John).
- Part B 8: St John's "a collapsed rugby scrum" added; the ERC lay brochure's "unsafe situation"
  line moved from CPR to danger.
- Part B 6.1: the X-ray line carries each Red Cross's own words.
- "Gate closures, lesson 11 (2026-09-25)" appended at the end: the corrections list, F's 101
  sentences, and twelve more lines the fixer string-matched for the fixes (St John's age and
  brain-surgery items, 999 line, head hold and lay jaw thrust; the British Red Cross's serious
  accident line; NICE 1.2.2's ambulance sentence; the NHS clear-fluid item; the American Red
  Cross's further starred items, mechanism list, cold-or-overheated line and open and closed
  fracture definitions, the last from the drafter's same-day live copy).

**Reviewer F:**
- F1 fixed: the head-injury section gives the American Red Cross page its own bullet with its
  starred signs and its list of causes; the section opens "The US guideline lists signs; the
  American Red Cross page and the UK lists also count how it happened". The climbing-frame case is
  now a 2 m fall, more than an 8-year-old's own height, with the American Red Cross's line; the
  six-stairs exercise case is gone (P6).
- F2 fixed as F proposed, and the British Red Cross's concussion line added to exercise F.
- F3 fixed by option (a): the case is now a man who stands up into an open kitchen cupboard door,
  so the vomiting routes stay clean; the answer adds the British Red Cross's 999.
- F4 and P4 fixed: the AHA's expert-recommendation source and its three-or-four-times-a-day
  frequency, its "to avoid cold injury", the British Red Cross's unspecified "further damage", and
  "The UK pages give no source for their figures".
- F5, P18 fixed: heading "Cold: the guidance says yes, and disagrees on how long"; "Every guideline
  and first aid page read here uses cold, and all of them wrap it; the one dissent ... comes below."
- F6 fixed: the American Red Cross leaves a helmet on unless CPR is needed and gives no method for
  taking one off an injured neck, nor does any other source read here; tell the call handler and
  follow what they say.
- F7 and P5 fixed: "If they won't respond" names St John's spinal recovery position (April 2025,
  its method page not read) against RCUK and the ERC (October 2025), calls it a UK-internal
  difference and says the course follows the 2025 guidelines; the vomiting checkpoint now says no
  guideline has a step and names both texts it combines.
- F8 declined in part (see SOURCES above); the lesson now says both add over 65 and nobody to look
  after them, the British Red Cross a past brain injury and St John past brain surgery.
- F9 to F13 fixed as proposed.
- F14 fixed: "RCUK expects a first aider to do this, and a class teaches the grip"; the checkpoint's
  last line splits airway before the neck (RCUK 2025) from CPR before staying put (American Red
  Cross; AHA/Red Cross 2024, COR 1).
- F15 fixed: PEACE and LOVE's authors on compression ("seems to reduce swelling"), and "they allow
  that it may be mostly a painkiller".
- F16 fixed: the American Red Cross list now includes a pop or snap, a serious cause, several
  injuries and shock; the skate park asks the pop-or-snap question; the UK wrist line uses the NHS
  crack line and says St John doesn't define long bones.
- F17, F19 fixed as proposed. F18 closed by the SOURCES append.
- F20 fixed in step 4 (in the US there's no graded line, the positioning caution leans against
  moving them, and the call handler decides, including for someone found on their side). A
  separate numbered step for the on-their-side case was not added: no source covers it and it
  would only repeat the call-handler line.

**Reviewer P:**
- P1 fixed: quiz 4 is now a face-down cyclist in Kendal (RCUK's roll as a unit), quiz 5 a stabbing
  in Dayton (the AHA's COR 3: Harm against routine immobilisation for penetrating trauma, pressure
  first), quiz 6 a warehouse worker in Wakefield (RCUK and the ERC's concussion line off the sports
  field). None is in the body.
- P2 fixed: quiz 2 is now a Truro friend who thinks ice speeds healing, graded on what the AHA's
  supporting text, the British Red Cross's 10 minutes, the compression review and PEACE and LOVE
  show (objective 2), with distractors that each misread one of them.
- P3 fixed as proposed, in the fracture section and in Connections.
- P6 fixed: exercise A is a 70-year-old living alone (St John and the British Red Cross's
  seek-advice lists), B a cyclist over the handlebars with a cracked helmet (American Red Cross,
  NHS high speed, NICE bicycle collision). The checkpoint's beam case was cut, leaving two cases.
- P7 fixed: both big tables are now "In the US / In the UK" headed lists; their caption lines were
  folded into footnote markers on each bullet.
- P8 fixed: step 3 gives St John's head hold with its reason (she needs to hear you) instead of the
  American Red Cross's answer-out-loud line; step 4 says the helmet line is the American Red
  Cross's and no UK page read here mentions helmets; step 5 labels the cold-or-overheated line.
- P9 fixed: St John's own "call 999 or 112" for a suspected spinal injury.
- P10 fixed: York is Truro, Plymouth is Oxford. Places checked by script against lessons 1 to 12
  and the final test.
- P11 fixed: ILCOR, NICE, both NHS pages, St John, the British Red Cross, the American Red Cross
  and the ERC linked at first quotation (ILCOR's link moved up from the collar section).
- P12 fixed except NICE, which the intro already glosses as "written for health services rather
  than bystanders": open and closed fracture (American Red Cross), in-line (held in line with the
  body), jaw thrust in St John's lay words, long spine board, anticoagulant and antiplatelet as
  blood thinners, aspirin monotherapy as aspirin taken on its own.
- P13 fixed: the table restatement cut to the analysis; the skate park's UK route in its own
  sentence after the US steps; the netball answer split US and UK.
- P14 fixed: bold removed from eight habit openers and from Lesson 12 and Car Basics; "What does
  cold do?" and "Why these signs?" made statements (the one kept is "Why not straighten it?");
  the friend's one-line moral and "Nothing read here shows it speeds healing" cut.
- P15, P16 fixed. P17 fixed: the section is "Collars and boards" and the predict comes before the
  recommendations.
- Also cut to hold the minutes: the British Red Cross's purpose-of-support line (the AHA's splinting
  line gives the same reasons), a restated RCUK clause under the awake table, the lane checkpoint's
  closing diagnosis sentence, the Go deeper NHS item (linked in the body), and trims to two Go
  deeper descriptions.

**Final test:** one lesson 11 item added (Salisbury, UK: clear fluid from the nose after a head
injury is on the NHS 999 list; key 3, options 81/81/80/81 characters). The test now has twenty
items, fourteen to pass (70 per cent of 20 is 14), and no adjacent key repeat (…, 1, 3).

**Final measures.** Body words to "## Sources" 7,065; the minutes model counts 7,959 words and
gives 90 (raw 92.4, a few words under the rounding line), so `minutes: 90` stands. Bold 71 spans,
10.0 per 1,000. Contractions 60 in 7,480 words by the validator's method, 8.0 per 1,000. Two
predicts, four checkpoints, one worked example with a gap (the lane), three exercises. No em
dashes; banned words only inside AHA quotations ("facilitate") and the acronym letter "Elevate".
Every `[n]` has a source entry. Quiz keys 1,0,1,2,3,0, unchanged, checked by script against
lessons 1 to 10 under the 2026-09-25 rule (at most two positional matches, no shared run of three,
no shift or rotation). Option-length spreads 5, 4, 8, 9, 8, 3 characters; key sole longest on 2 of
6, shortest on 1. Each explanation read against the option its key selects. `npm run validate`
exit 0; `npm run quotes first-aid`: 0 of 379 not found.

**Status after review:** needs second pass. The four new quiz items, the rewritten head-injury
lists, the St John recovery-position paragraph, the rewritten lane steps and checkpoint, the two
new exercise cases and the final-test item are new text no reviewer has read.

## 2026-09-25 — Lesson 11 — Stage 4 second pass, one reviewer (facts and safety)
**Reviewer:** F2, fresh context, Reviewer F's brief, scoped to the fix pass (commit 228f011): the
four new quiz items and every key and explanation, the head-injury lists, the St John spinal
recovery position paragraph, the lane steps and checkpoint, exercise cases A and B, the final-test
item, and the SOURCES corrections and "Gate closures, lesson 11". Checked against F's saved
primaries in `r11f/` (AHA 2024 Wayback text, RCUK 2025, NICE NG232 1.2.2 and 1.2.3, the NHS head,
arm and sprain pages, the four St John pages, the three British Red Cross pages, PEACE and LOVE, and
`browser_extracts.txt` for the two American Red Cross pages, the ERC publisher page and the ILCOR
typeset text).

**Claimed fixes, verified:** F1 to F20 and P3, P8, P9 each hold against the primary. F8's partial
decline is right: St John's head page has "they are over the age of 65" and "they had previous brain
surgery". Every grade re-read in the AHA tables (fracture recs 1 C-EO, 2a C-EO, 2b C-EO; cold 2a
C-LD with the 20 to 30 minutes inside the recommendation; compression 2b C-LD; spinal 1 C-EO, 3: Harm
C-LD twice; concussion 1 B-NR, severe head injury 1 C-EO; shock leg raise 2b C-LD for no trauma or
injury; direct pressure 1 C-LD). The SOURCES corrections (ILCOR typeset "remains unchanged", AHA rec
2 and "Experts recommend", RCUK "Never force", PEACE and LOVE's concession, the American Red Cross
starred lists, the British Red Cross 999 lines, the X-ray lines) each match the saved copies.

**Quiz.** Keys 1,0,1,2,3,0. Option lengths 83/87/82/82, 84/82/86/86, 82/74/78/79, 87/85/88/79,
85/77/77/80, 82/82/80/83: spreads 5, 4, 8, 9, 8, 3, as the fixer reported. Each stem executed
against its key under the body it names: Kendal (RCUK face-down roll as a unit, verbatim), Dayton
(AHA 3: Harm C-LD for penetrating trauma; direct pressure 1 C-LD), Wakefield (RCUK's signs and
remove-and-refer; the ERC's "of any cause"), Truro (see S7), Oxford (NHS 111 for alcohol; NICE 1.2.3
intoxication). **Final test** (Salisbury): key 3, options 81/81/80/81; the NHS 999 clear-fluid item,
the drive-yourself line and the American Red Cross's starred "Blood or other fluids in nose or ears"
all verbatim; 70 per cent of 20 is 14.

**Sums redone by hand:** 2 m is 6 ft 6.7 in (6 ft 7 in); 1 m is 3 ft 3.4 in; 2 m exceeds an
8-year-old's height (about 1.3 m); the cold range 10 to 30 minutes, and 20 minutes sits inside the
AHA's 20 to 30, the American Red Cross's 20, the NHS's 20 and St John's 20 but not the British Red
Cross's 10.

**Findings:**
1. S1 [minor] Head-injury UK list: the British Red Cross bullet gave four 999 items as if the whole
   list; the page also sends less responsive, numbness, clear fluid or blood from ears or nose, a
   seizure, and "a serious accident or ... a severe blow to the head" to 999. Fixed: ", among
   others".
2. S2 [minor, neutrality] "Vomiting is on ... the British Red Cross's 999 list; the NHS page sends it
   to 111": St John's head page lists "vomiting episodes" among the signs of a serious head injury,
   which it sends to 999, so the UK split is two pages against one. Fixed in the sentence, with [5];
   the St John lines were not in SOURCES and are appended (see below).
3. S3 [minor] "Its FAQ adds watching for a persistent headache or a change in vision": the FAQ says
   to call 9-1-1 immediately for these. Fixed to "adds calling 911 for"; the FAQ sentence was not in
   SOURCES and is appended.
4. S4 [minor] American Red Cross fracture list: "several injuries" for "Severe or multiple
   injuries*", and "Bleeding or" dropped from "Bleeding or bone protruding through skin*". Fixed.
5. S5 [minor, safety] UK fracture emergency list omitted the British Red Cross broken-bone page's
   "Call 999 if the person is unable to move for themselves or is in a lot of pain", already recorded
   in SOURCES. Added to the UK bullet with [6].
6. S6 [minor, safety] Exercise F answer: "In the UK the NHS lists aren't met." The NHS 999 list has
   "problems with their vision" and the 111 list "any other symptoms you're worried about", so light
   sensitivity is not cleanly outside them. Fixed: "the NHS lists name neither sign, though 111 takes
   other worrying symptoms".
7. S7 [minor, neutrality] Quiz 2 names PEACE and LOVE in its stem, but the explanation answered
   option D only with the AHA's compression review, leaving out Dubois and Esculier's view that
   compression "seems to reduce swelling"; D's real flaw is "tightly". Fixed: the explanation now
   gives the AHA's "without compromising circulation" and the British Red Cross's not-tight line,
   then both sides on whether wraps help.
8. S8 [minor] "That's the commonest reason people skip the X-ray": a claim in the course's own voice
   with no source. Cut.
9. S9 [minor] "a misconception that every source here covering the neck corrects": ILCOR covers the
   neck and names no moving exceptions (the "every source" pattern, P18). Fixed: "The guidance read
   here names these exceptions."
10. S10 [minor, not fixed] The NHS head page's home care also has a wrapped ice pack for the bump;
    "For the bump itself" names only the British Red Cross and St John. Not wrong, and left because
    the minutes budget is at the rounding line.

**Also changed to hold the minutes:** "Two NHS lines are easy to miss" is "The NHS adds", and the
Connections sentence on Strength and Fitness lesson 8 is one clause shorter. Body words 7,976; the
model gives 90 (raw about 92.47, under the 92.5 line), so `minutes: 90` stands. **Anything added to
the body now needs an equal cut.**

**SOURCES.md:** two lines appended to "Gate closures, lesson 11" (St John's serious head injury
signs and 999 line; the American Red Cross FAQ's 9-1-1 line), each string-matched against `r11f/`.

**Checks:** `npm run validate` exit 0 (no lesson 11 warnings); `npm run quotes first-aid`: 396
sourced quotations, 0 not found. Neutrality: no country's guidance called wrong; the St John
recovery position difference is stated as a UK-internal difference with each side dated; PEACE and
LOVE now appear on compression wherever the AHA review does. Safety: the callout is unchanged; every
new instruction carries its body and year; the "course putting those together" line in the lane
checkpoint is labelled as the course's own synthesis; no exercise involves another person.

**Status after review:** clean
