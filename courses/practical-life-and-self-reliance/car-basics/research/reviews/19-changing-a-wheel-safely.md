# Reviews: Car Basics lesson 19, "Changing a wheel safely"

## 2026-09-26 — Lesson 19 — Stage 4, Tier B (split)
**Reviewers:** F (facts and law, safety, neutrality) and P (depth and pedagogy, cold start, voice and
media), each in a fresh context, in parallel. F re-read on the primary with curl (generic browser
User-Agent, no personal data): Toyota OM02568U pp. 370 to 379; Honda's 2024 Civic Sedan "Changing a
Flat Tire"; Mazda3 8GD7-EE-17H pages 08020100 to 08020303 (08020302 is 404); Nissan's 2024 LEAF (US)
PDF pp. 6-4 to 6-8 and 8-2; the 1998 NHTSA jack note (300 dpi OCR against Tables 1 to 3); HSE
"Working under vehicles"; Highway Code Rules 275 to 287 (content API); the RAC and Green Flag pages;
the California Driver Handbook. Every quotation string-matched; the callout byte-identical.
**Verdicts.** F: facts pass after minors; safety one major (F1), then F17 added from P's notes; no
critical; neutrality passes with label fixes. "Fix, then pass". 0 critical, 1 high, 5 moderate, 13
minor or low. P: depth and pedagogy fail on P1 and P3; cold start passes with fixes (P2 major); voice
and media pass with minors. "Revise". 0 critical, 3 major, 14 minor.

**Findings, Reviewer F:**
1. F1 [high] The harder case's answer says three problems end the job and the missing chock doesn't,
   in a case with "nothing solid in sight"; with no chock and no substitute, all four do.
2. F2 [moderate] The stuck-nut reasoning calls forcing a nut "exactly" Green Flag's warning, which is
   about a wheel that won't come off a raised car; lines 221 to 224 blur the same line.
3. F3 [moderate] Hornsea raises a Mazda by Toyota's height rule; Mazda raises it "high enough so that
   the spare tyre can be installed".
4. F4 [moderate] Honda's step placing the spare under the body before loosening is left out, though
   the lesson says differences are shown.
5. F5 [moderate] Q1's explanation uses Nissan's US sealant-kit line, unlabelled, in a Great Britain
   case; the keyed answer is the course's reading, not the Code's.
6. F6 [minor to moderate] Q4's key makes Toyota's torque-wrench line universal.
7. F7 [minor] Step 12 quotes Honda's consequence sentence, not its rule.
8. F8 [minor] "five words" is six.
9. F9 [minor] Clean surfaces: Honda left out; hand-tight: Honda given words it doesn't use.
10. F10 [minor] The 1998 note's scope narrowed to "a jack failing during work on a vehicle".
11. F11 [minor] Green Flag and the RAC lose their commercial labels after first use (and in Q3).
12. F12 [minor] Rule 276 framed as a general condition for all readers; the US freeway line unsourced.
13. F13 [minor] "Dusk, as lesson 18 said" drops lesson 18's course's-reading label; "grass verge" is
    later called soft.
14. F14 [low] Law restated in an unlabelled H2 (the 50 mph); Mazda's range lacks lbf·ft.
15. F15 [low] The torque Call someone rests on a reading of Toyota's grammar.
16. F16 [low] The ranking predict gives the weaker of two reasons.
17. F17 [minor to moderate, addendum] Step 4 "Engine off" says nothing about a hybrid or EV's off state.
18. F18 [minor, addendum] "All three ... use only the one that came with the car" shown for Toyota only.
19. F19 [low, addendum] HSE's sloping-car-park example is a trade job on a coach with three wheels off.
F also confirmed (P's note 4) that Honda's "R" for manual models is the Civic Sedan page's own text.

**Findings, Reviewer P:**
1. P1 [major] = F1: the gap answer contradicts its own setup and the outline ("each of them").
2. P2 [major, safety] "Engine off" silent on hybrids and EVs; a silent car in READY is the obvious
   misreading on a car about to go on a jack. Nissan UK's READY line is 404 and not usable.
3. P3 [major] The injury predict misses the main reason: the note counts people hurt, not jobs done.
4. P4 [minor] The checkpoint is answered by the list directly above it.
5. P5 [minor] Cold start: wheel nuts (lug nuts), jacking point and torque wrench never glossed.
6. P6 [minor] Locking wheel nut mentioned in the exercise and never explained.
7. P7 [minor] Exercise item 4 repeats lesson 18's exercise.
8. P8 [minor] Q1's key is the only option not beginning "Change it"; "her" has no antecedent.
9. P9 [minor] = F5 (Nissan with no car, and not among this lesson's read pages).
10. P10 [minor] Q4 gives a US handbook's torque in N·m only.
11. P11 [minor] Q5's distractors B and D are rejectable without the lesson.
12. P12 [minor] The SVG's labels render at 12.25 px at phone width; `<desc>` says "dark" wheels that
    render light in the dark theme; no left and right labels.
13. P13 [minor] = F14(a).
14. P14 [minor] = F11.
15. P15 [minor] Voice: two stiff expansions, a note-form sentence, an outline phrase, a triad and two
    morals, "this course's reading" three times in seven lines, "nearside" unglossed, "Some Models".
16. P16 [minor] "ft·lbf" in the course's voice; Mazda's lbf·ft missing (with F14(b)).
17. P17 [minor] Q2's distractor uses "studs", never defined.

**Added by the orchestrator from lesson 18's Reviewer F (F2 there):** "Not on a motorway" is too narrow
as the road condition; the callout covers motorways and other fast roads, so a lay-by on a fast road
must not pass every condition.

### Resolutions applied
**SOURCES first.** Appended "Stage 4 note, lesson 19 (2026-09-26)": Honda's spare-under-the-body step,
jack-point, raise-height, own-jack, wipe and "touch the lips" lines and the manual "R" (re-read live);
Mazda's raise-height step, its "Never go under" heading and the torque table's ft·lbf; Toyota's
own-jack sentence in full; HSE's coach sentence re-checked; Nissan UK not used. No earlier entry
corrected. (Another session's commit, f5244e3, took the appended note into `main` along with its own
SOURCES changes; the text is this fixer's and is complete there.)

**Merged: F1 and P1 (safety).** The answer now opens "All four, each on its own." The chock sentence
says every handbook read chocks before the car is raised, quotes Mazda ("may move and fall off the
jack"), says it is the only one of the four a handbook gives a way round (Honda a rock; Mazda rocks or
wood blocks "of sufficient size"), and that there's nothing solid in sight. "Here it doesn't matter"
is gone. Checked against Honda step 5, Mazda step 6 and 08020301's warning, and Toyota's step 1.

**Merged: P2 and F17 (safety).** Step 4 now says: on a hybrid or electric car, off means switched off
in the way its handbook describes; such a car can be silent and still on, and so can a petrol car whose
stop-start has stopped the engine; READY isn't off, and silence proves nothing; lesson 14 has why. The
wording follows lesson 14's line 223 (read) and the course convention. No new source quoted; Nissan UK
not used. The Hornsea case's preparation now says "switched off as the handbook describes".

**Reviewer F.**
- F2 fixed: the predict's stuck-nut reason is now that no handbook read offers a way to free a nut that
  won't turn with the car's own brace, and Honda warns against force by "your foot or a pipe"; the
  step 8 paragraph drops Green Flag altogether (it stays correctly described in step 8's first
  paragraph).
- F3 fixed: Hornsea raises the car "high enough for the spare to go on, as Mazda puts it, and no
  higher" (08020301 step 8, re-read). Step 11 now shows all three heights (Toyota slightly, Honda off
  the ground, Mazda by the spare) and says to follow your handbook's words.
- F4 fixed with F's wording, re-read on Honda's page. The fixer changed F's last sentence ("nothing in
  any handbook read has you reach under once the jack takes the weight"), because Honda's own spare
  comes out from under the body later; it now says, as this course's reading, that step 12 still
  holds when the spare comes out: take hold of it from the side and don't reach under the car.
- F5 fixed (with P8, P9): stem "on this course's reading of the Highway Code's advice and the handbooks
  read"; Nissan's kit line replaced by Mazda's "Stopping in traffic or on the shoulder of a busy road is
  dangerous" (08020300, re-read).
- F6 fixed (with P10): key "Her handbook's 89 lbf·ft, set with a torque wrench, by a tyre fitter or a
  garage"; the explanation adds the course's reading. 120 N·m / 1.3558 = 88.5, rounded to 89, by hand.
  The friend's figure is now "about 75" (lbf·ft) so the stem doesn't mix units.
- F7 fixed with F's wording.
- F8 fixed: "six words".
- F9 fixed: (a) all three clean the surface, Honda's "Wipe" quoted; (b) Toyota and Mazda by hand,
  Honda to "touch the lips around the mounting holes". Both re-read on Honda's page.
- F10 fixed: "a jack failure, in that sense, during some activity involving a motor vehicle". The
  optional Table 7 hand-injury figure was not added: it isn't in SOURCES and the fixer did not re-read
  the scan.
- F11 fixed (with P14): Green Flag "which sells breakdown cover and repairs" in the first section and
  step 8, "which sells breakdown cover too" in the torque section; the step 8 stuck-nut use is gone;
  the RAC labelled in Q3. The checkpoint no longer names Green Flag; the predict never does now.
- F12 fixed: (a) the third condition leads with Mazda's "to a level spot that is well off the road and
  out of the way of traffic" for every reader, then "In Great Britain, Rule 276"; the paragraph after
  says Mazda's traffic for everyone and Rule 276 in Great Britain. (b) The US freeway line adds the
  callout's US steps with both exceptions, pointing to lesson 16.
- F13 fixed: "Dusk, on this course's reading in lesson 18"; "a soft grass verge".
- F14 fixed (with P13, P16): "The spare's speed limit is 80 km/h (50 mph) in Mazda's words; lesson 18
  has what the law in Great Britain adds."; Mazda "108 to 147 N·m (80 to 108 lbf·ft)", re-read on the
  table.
- F15 fixed: "Toyota's words set the deadline, 'as soon as possible after changing wheels'. On this
  course's reading, and for the reason lesson 1 gave (a page can't check a torque), the final torque is
  Call someone". Lesson 1's sentence found (its line 440).
- F16 fixed with P3, below.
- F18 fixed: step 9 quotes Honda ("Use the jack provided in your vehicle", other jacks "may not support
  the weight" or "may not fit the jacking point") and Mazda ("Use only the jack provided with your
  Mazda"); the first section's line points to step 9. **Line 135's claim verified:** Toyota ("Only use
  the tire jack that comes with this vehicle ... do not use other tire jacks"), Honda and Mazda all
  say it, each re-read today.
- F19 fixed: "one of HSE's fatal examples was a coach 'parked on a sloping car park', though that was a
  trade job with three wheels already off, and HSE doesn't say the slope caused it". **The HSE
  paraphrase verified** against the live page: the old "a coach being jacked 'on a sloping car park'"
  put the slope under the jacking; HSE's words put it under the parking.
- **Honda's "R for a manual" verified** on the Civic Sedan page ("Manual transmission models ... 2. Put
  the transmission into R."). Step 3 unchanged.

**Reviewer P.**
- P3 fixed with P's wording, labelled as the course's reading; P's shortened last sentence kept, with
  "and the note doesn't try to rank anything".
- P4 fixed with P's case (a manual car, rear right flat, one chock), checked: R on Honda's, R or 1 on
  Mazda's; Toyota's p. 374 table puts the chock in front of the front left for a rear right flat. The
  answer keeps Mazda's reason for the chock, so "what it prevents" is still asked of one step, and no
  longer cites Green Flag.
- P5 fixed: "wheel nuts (lug nuts)" and the wheel brace glossed in the words line; step 9 says what a
  jacking point is (Toyota's "jack point", Mazda's "jack-up position"; Honda and Mazda use the one
  closest to the flat, both re-read); the torque wrench glossed as a different tool from the brace.
- P6 fixed, cut down: one clause in step 8, "a locking wheel nut (one nut on the wheel that needs its
  own key) when the key isn't in the car" is Call someone, labelled with the stuck nut's course's
  reading, and "no handbook read covers them". The fixer dropped P's "an adaptor kept with the car's
  tools": no source read says where the key is kept (decision 14).
- P7 fixed with P's wording, "as Honda and Mazda allow".
- P8 fixed: "Her flat is..."; option B is now the lull; the explanation answers it.
- P9: as F5.
- P10: as F6.
- P11 fixed with P's two distractors; the explanation now says the largest activity group was
  repairing, at 40 per cent, not three quarters, which answers D, and "not a recent count" answers C.
  The GB clause went with the old option B.
- P12 fixed, and taken further than P's viewBox: the drawing moved 12 units left, the right-hand
  labels to x 238, `viewBox="16 14 340 392"`. At 375 px the SVG is 343 px wide, so 15-unit labels render
  at 15.1 px (P's 350-wide box gave 14.7). `npm run validate` raised a wide-font clipping warning at
  a 330-wide box and none at 340. "left" and "right" labels added; `<desc>` now says the front left
  wheel is outlined in red and "the other three are filled" (no colour word); aria-label and caption
  say seen from above, front at the top. Rendered headless (Chrome through playwright-core) at 375 px
  and 1280 px in both themes with the site's tokens: every label visible, nothing clipped, wheels and
  chocks visible in dark.
- P13: as F14.
- P15 fixed: "won't", "it's"; the nut line ("fit each nut with its tapered or bevelled end facing
  inward", keeping Toyota's word, not P's "towards the wheel"); "Here's what it found, and how far it
  goes."; "Each handbook shows..." folded into the new jacking-point sentence; "The first section's
  check."; the three course's-reading labels merged; the triad and "Tighter isn't safer." cut;
  "The note's own limits are worth knowing" now "Its limits are these."; "nearside ... (the left, the
  side away from the traffic)" at first use; "Some Models" replaced by Mazda's "may or may not be
  equipped with a spare tyre, jack, wheel brace, and tool bag" (08020100, in SOURCES).
- P16 fixed: "Toyota's 76 lbf·ft (103 N·m)" in Chico; Toyota's "ft•lbf" kept only inside its quotation.
- P17 fixed: "The spare propped against the flat wheel, so it can be lifted straight on in one go";
  the explanation says nothing read has that, and Honda, the only one to move the spare before
  lifting, lays it flat under the body.

**From lesson 18's F2 (orchestrator).** The first condition is now "Not on a motorway or other fast
road, and not on a hard shoulder or in an emergency area": Rule 277 and Green Flag for motorways; on
any other fast road in Great Britain the callout's steps apply, so on this course's reading there's no
wheel change there either, "lay-by or not", with lesson 17 pointed to. Hornsea's "Whether" says "Not a
motorway or other fast road", and the case now sets it on "a quiet local road". No new source.

**Final measures.** `minutes: 85` (measured 85; 5,731 words by `npm run minutes`). Bold 40 spans, 7.9
per 1,000 body words; contractions about 8.0 per 1,000 outside quotations (top of the band; validate
raises no contraction warning). 2 `:::predict`, 1 `:::checkpoint`, 1 `:::exercise`, 1 SVG. No em or
spaced en dashes. Callout byte-identical (validate passes it). Quiz keys 3,1,0,2,0 (unchanged): all
four positions, no adjacent repeat, no identical sequence or value shift against lessons 1 to 18 and
20, no shared run of four with lessons 14 to 18 or 20 at offsets 0 or ±1 (checked by script). Option
lengths 82 to 90, 83 to 88, 86 to 89, 80 to 88, 80 to 89 (spreads 8, 5, 3, 8, 9); Q2's key shortened
so no key is the sole longest. Every explanation read against its options after the rewrites. Places:
Hornsea and Chico (unchanged). `npm run validate`: exit 0, no line naming this file. `npm run quotes
car-basics`: no miss for this file after the SOURCES note. `npm run quiz`: exits 1 on other courses'
items and flags lesson 18 as gameable; no line names this lesson.

**Status after review:** needs second pass (F1 and P2 were safety corrections: a fresh-context read of
the harder case's answer against the handbooks' chock steps, step 4's hybrid and EV off-state line
against lesson 14, Honda's spare-under-the-body paragraph against step 12 and the callout, and the
widened fast-road condition against the callout and lesson 17).
