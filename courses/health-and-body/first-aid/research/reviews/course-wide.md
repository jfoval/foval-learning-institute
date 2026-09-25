# Reviews: First Aid and CPR, course-wide

Findings that belong to no single lesson. Lesson reviews are one file each in this directory.

## 2026-09-24 — from lesson 5's Stage 4

- **Quiz keys drift across lessons, not only within one.** Lesson 5's first four keys matched lesson
  2's and were a one-step rotation of lesson 4's (defect 16 spread over three lessons, which the
  neighbour check in `npm run validate` does not see). Fixers: compare the new sequence against
  every earlier lesson of the course, not the previous one only.
- **Law entries in SOURCES recorded the subsections that suited the lesson.** D36 carried (a)'s
  first half, (b)(1) and (c)(1)(B); the drafter then wrote "nothing in it requires training" and a
  gloss on "perceived" into the gap, and two reviewers caught it only by reading the statute. Any
  later lesson that quotes a statute (lesson 1's state laws, lesson 7's overdose laws) should have
  its fixer read the whole section once, not the recorded excerpts.
- **Lesson length.** Lessons 2, 3 and 5 each measure 100 to 140 minutes against the outline's
  roughly 65. Each is honest and not padded, and each review recorded a natural seam. A course-wide
  decision on whether to split any of them belongs to John, via `docs/QUEUE.md`, not to a fixer.

## 2026-09-24 — from lesson 4's Stage 4

Restored by the orchestrator: lesson 4's fixer wrote these first and lesson 5's fixer, running at
the same time, recreated the file over them. The fix brief now says to append, never create.

- **The AHA's "almost immediate" hedge has dropped in two lessons** (3 and 4, each restored at
  review). Any lesson quoting the AHA on compression-only survival should be checked for it.
- **S6 may not be described as "read in full"**; its read level is as SOURCES records it, and
  lesson 4's Sources entry was corrected to match.
- **Drowning's sequence splits by rescuer, not by country** (ILCOR 2025: compressions first for lay
  people, breaths first for trained duty-to-respond rescuers). Lesson 6 keeps that framing.
- **The course needs `assessments/final-test.md`** before `npm run build:drafts` will pass with six
  or more lessons, and before publishing. The outline's Assessments section has the blueprint.

## 2026-09-25 — from lesson 6's Stage 4

- **RCUK's "little or no harm" runs one way only**: an adult mistakenly given the paediatric
  algorithm. Lesson 6's exercise answer had it reversed, and a reviewer's suggested quiz key
  repeated the reversal. Any later lesson or script that paraphrases the age boundary should quote
  the sentence.
- **ILCOR's 2025 lay compression-first drowning statement covers adults only** (narrowed from the
  2023 "adults and children"). The lesson 4 entry above ("compressions first for lay people") is
  true for adults; for a drowned child in the UK the call handler coaches five breaths first.
- **"Both sides admit" recurred twice in one lesson** (minimal evidence on the child sequence; no
  human comparison on drowning order). Each time only the AHA said it. Reviewers: check every
  symmetric admission against each body's own text.

## 2026-09-25 — from lesson 7's Stage 4

- **Slow or snoring breathing is never normal breathing in this course.** Lesson 7's draft taught a
  slow, softly snoring man as breathing normally; RCUK Adult BLS, the AHA's "snoring respirations"
  and the British Red Cross all treat it as a warning sign, and lesson 2 already did. The error came
  from OUTLINE lesson 7's worked example (a), "breathing normally and snoring softly". Lesson 14
  (seizure recovery, low blood sugar), any podcast script and the final test should describe normal
  breathing as quiet and regular at an ordinary pace, and never as slow or snoring.
- **The AHA/Red Cross "leave as found" row is for a responsive injured person.** Table 14 has no
  row for an injured person who won't respond (SOURCES, "Gate closures, lesson 7"). For that person
  cite the ERC/RCUK exclusion and the ERC's "kept in supine position". Lesson 11 should start there.
- **The AHA says lay rescuers and the public can give naloxone** (Part 10 Top 10); its COR 1 is
  the narrower trained-rescuer line. RCUK is the body with the training condition.
- **RCUK's first aid page prints no recovery-position method;** the steps are the ERC's.
- **Quiz keys are running out of room.** Against lessons 1 to 6 and the lesson 8 draft, only 22 of
  4,096 six-item sequences have at most two positional matches and no two consecutive matches with
  any of them. Later fixers should search by script rather than by eye.
- **G16 was not worked for lesson 7** (Commons recovery-position images); the lesson describes the
  position in words and a table.

## 2026-09-25 — from lesson 8's Stage 4

- **A choking person who stops responding gets CPR with no breathing check.** Both guidelines go
  straight from "unresponsive" to CPR (the AHA: "regardless of whether or not the patient has a
  pulse"). Lesson 8's draft routed them through lesson 2's two-part test. Podcast scripts and the
  final test should never put a breathing check between the collapse and CPR in a choking case.
- **Quiz keys: 19 sequences left.** Against lessons 1 to 8, count by script before choosing
  (at most two positional matches, none consecutive, no constant-offset rotation); lesson 8 took
  3,1,2,0,2,3.
- **`npm run quotes` passes a whole-sentence quotation when SOURCES holds a fragment of it** (lesson
  8 P2: two full AHA recommendations passed on fragments). Worth a QUEUE note for the tool.
- **G16 was not worked for lesson 8** (three adult choking images named in OUTLINE); no UK source
  on self-rescue or a silent 999 call was found, a research gap for a later pass.

## 2026-09-25 — from lesson 9's Stage 4

- **RCUK 2025 First aid does set a training condition, as a general principle**: "only use
  equipment and medications you have been trained to use", with the exception that the emergency
  services may direct a first aider to use equipment they haven't trained on. Lesson 9's draft and
  SOURCES Part B 12 said RCUK had none (corrected in both). Any later lesson or script on
  tourniquets, naloxone, adrenaline or oxygen should quote the principle and the exception, not
  "for anyone".
- **OUTLINE decision 2 lists "St John's legs-up for bleeding (lesson 9)" as a page lagging its
  guideline.** There is no UK guideline position for it to lag (RCUK 2025 has no shock-position
  section; ILCOR has not reviewed it since 2020), so lesson 9 dates the page instead. Worth a
  one-line OUTLINE correction by whoever next edits it.
- **The fracture exception to raising the legs is St John's fractures page only**, and it covers an
  injured hip or pelvis as well as a suspected broken leg; the British Red Cross page has none.
  Lesson 11 (fractures) and the podcast script should use that wording.
- **Quiz keys: 7 sequences left** against lessons 1 to 8 under the course's rule (at most two
  positional matches, none consecutive, no constant-offset shift, no positional rotation matching
  five of six). Lesson 9 took 1,2,0,3,1,0; lesson 10's fixer should re-run the search including it.
- **G16 and G4 were not worked for lesson 9** (three Commons tourniquet images; the ACS and British
  Red Cross bleeding videos).

## 2026-09-25 — quiz key rule relaxed (orchestrator)

Lesson 9's fixer found only 7 key sequences left that match no earlier lesson in more than two
positions, with seven lessons still to write. That rule was a fixer's own tightening of defect 16,
not the standard. From lesson 10 on: **no earlier lesson's sequence shared in more than three
positions, no run of three consecutive positions shared, and not a rotation or shift of any
earlier sequence.** Still chosen by script.

## 2026-09-25 — from lesson 10's Stage 4

- **The NHS "no creams, oils or butter" line is healing-stage advice**, in its list for while a burn
  heals, not first aid before assessment. Gate G13's reconciliation fails (SOURCES Part B 4.2
  corrected; OUTLINE's G13 row still says the old thing, for whoever next edits OUTLINE). Podcast
  scripts and the final test should present the NHS, the AHA's petrolatum item and the American Red
  Cross FAQ as three unreconciled texts about after-care.
- **The AHA's burn-depth definitions are now in SOURCES** ("Gate closures, lesson 10"): superficial
  means no blistering; a blistered burn is partial or full thickness by that definition. Lesson 10
  teaches it; later lessons and scripts can use the words without re-teaching them.
- **The American Red Cross burns page changed between 18 May and 29 August 2026**; date it that way,
  not "January".
- **Minutes are the binding constraint on long lessons.** Lesson 10 held 95 only by declining two
  checkpoints the reviewer asked for (P15, P17) and cutting padding; its raw measure sits a few words
  under the rounding line. Fixers of lessons 11 to 16 should expect the same trade.
- **Quiz keys:** lesson 10 took 1,3,2,0,3,1 under the relaxed rule. The final test now has nineteen
  items (fourteen to pass) and ends on key 1.
- **G16 not worked for lesson 10** (a Commons photograph of cling film on a burn).

## 2026-09-25 — from lesson 11's Stage 4

- **The American Red Cross first aid pages mark emergency signs with an asterisk** ("Signs and
  symptoms with a * require immediate emergency medical treatment"), and the spinal page stars
  "Significant cause of injury", "Nausea or vomiting", head or neck pain and a damaged helmet.
  Lesson 11's draft cited only the head page's FAQ and so called the US side "signs, not heights".
  Any later lesson or script citing an American Red Cross page should read its starred list, not
  only its FAQ.
- **The British Red Cross head page says 999 for vomiting and for suspected concussion**, so
  "vomiting is 111 in the UK" is the NHS page's route, not the UK's. Credit the body, not the
  country (the measured pattern again).
- **St John's spinal page (April 2025) puts a spinal casualty whose airway can't be kept open into a
  "spinal recovery position"**; RCUK and the ERC (October 2025) say not to use the recovery position
  after trauma. A UK-internal difference; lesson 11 names it and follows the 2025 guidelines. The
  St John recovery-position page itself was not read.
- **Places:** the brief's do-not-reuse list was missing at least Norwich, Sacramento, Chester and
  Savannah, and names Boise, which no current lesson uses. Build the list by script from lessons
  and `assessments/final-test.md`. Lesson 11 uses Louisville, Truro, Oxford, Kendal, Dayton,
  Wakefield, Richmond (Virginia) and Hereford; the final test's lesson 11 item uses Salisbury.
- **Quiz keys:** lesson 11 kept 1,0,1,2,3,0 (at most two positional matches with lessons 1 to 10,
  no shared run of three, no shift or rotation). The final test now has twenty items (fourteen to
  pass) and ends on key 3.
- **G16 not worked for lesson 11** (a Commons arm-sling image); no image.

## 2026-09-25 — from lesson 12's Stage 4

- **The verbs for aspirin differ by body, and SOURCES said otherwise until today.** "Encourage"
  (AHA), "encourage and assist ... self-administering" (RCUK, ERC concise), but "administer" (ERC's
  own ABCDE section), "Give them" (St John), "offer" (British Red Cross), "assist them to take"
  (American Red Cross). SOURCES is corrected; OUTLINE's lesson 12 core ideas still carry the old
  line. Scripts and the final test should quote each body's own verb.
- **Grades come from the version of record, never cpr.heart.org's HTML guideline.** That page prints
  the presyncope heart-attack-or-stroke row as 3: Harm; the publisher's table says 3: No Benefit.
- **A suspected heart attack without chest pain** is covered by neither guideline's aspirin line;
  the public pages attach aspirin to "a heart attack" without saying. Lesson 12 sends it to the call
  handler, labelled as the course's suggestion. Lesson 13 and scripts should not say otherwise.
- **Contractions overshoot in fix passes.** Restoring a reviewer's list while writing new text with
  contractions took lesson 12 to 11.8 per 1,000; measure after the fix, not before.
- **Places:** Carlisle is used (final test). Lesson 12 uses Pittsburgh, Newcastle, Darlington,
  Colchester, Sunderland, Toledo, Fargo, Bangor and Raleigh; the final test's lesson 12 item uses
  Boulder. Stirling, Memphis, Anchorage and Gloucester, in the draft, are free again.
- **Quiz keys:** lesson 12 kept 2,0,1,3,0,1. The final test now has twenty-one items (fifteen to
  pass) and ends on key 1.
- **G4 not worked for lesson 12's videos** (NHS Act FAST, AHA B.E. F.A.S.T., American Red Cross and
  BHF heart attack); none embedded.

## 2026-09-25 — from lesson 13's Stage 4

- **SOURCES Part C 4 and 5 carried four trims, now corrected** (Gate closures, lesson 13): RCUK
  2021's venous-return sentence is about "a patient with cardiovascular instability"; the AHA kit
  line is Table 3's *optional* items for an American Red Cross kit; ILCOR's asthma review is "unknown
  whether bronchodilators could result in harm", not "no significant harm"; the NHS's "should not be
  given a blue reliever inhaler to use on its own" is a prescribing note. Scripts and the final test
  should use the corrected lines.
- **RCUK 2025's adrenaline step names who gives it** ("either self-administered or by trained
  individuals"), and its emergency-services exception is worded for equipment. Like aspirin in
  lesson 12, the course does not say how the exception applies to a device; St John's "or do it
  yourself" is the UK text that covers a first aider injecting.
- **RCUK 2021 does order adrenaline before a bronchodilator** for asthma after possible exposure to a
  known allergen (§5.6); lesson 13's draft said no source did. Lesson 15 (stings) and scripts can
  cite it.
- **Any exercise that puts a device in the reader's hand needs a handling line.** Lesson 13's draft
  had the reader pick up a real auto-injector and then a look-alike trainer with no needle-end
  warning; the fix leaves the real device to its owner. Lessons 14 to 16 (glucose, naloxone,
  inhalers, kits) should do the same.
- **Places:** lesson 13 uses Warrington, Blackpool, Winchester, Wigan, Akron, Grimsby, Des Moines,
  Harrogate, Scarborough, Chattanooga and London; the final test's lesson 13 item uses Missoula.
  Peterborough and Whitby, first chosen, were already in lesson 15's working draft. Stockport,
  Duluth, Santa Fe and Tampa, in the draft, are free again.
- **Quiz keys:** lesson 13 kept 0,2,3,1,0,3. The final test now has twenty-two items (sixteen to
  pass) and ends on key 2.
- **Contractions overshot again in the fix pass** (10.3 per 1,000 before 18 were expanded), as in
  lesson 12.
- **G16 and G4 not worked for lesson 13** (Commons EpiPen images; MHRA, British Red Cross and
  Asthma + Lung UK videos); none embedded.

## 2026-09-25 — from lesson 14's Stage 4

- **A seizure checkpoint must not say "don't call" for someone who isn't responding.** Lesson 14's
  draft let the NHS seizure list overrule RCUK 2025's "Call 999 for any unresponsive person" and
  marked the reader who followed lessons 2 and 7 wrong. The fix makes the case a groggy, responding
  man and states the rule once: unresponsive after the jerking stops is lesson 2's call; the seizure
  lists are for a person coming round. Scripts and lesson 16 should keep that order.
- **CPR rules must keep "unresponsive".** "Breathing that is ... laboured or snoring: CPR" without it
  puts a postictal person who groans and moves into CPR. Every restatement of lesson 2's rule needs
  both halves.
- **A stated deliberate overdose is the emergency number first.** PoisonHelp.org's online tool makes
  the user confirm they are not trying to harm themselves or others; its crisis line is still the old
  1-800-273-8255, not 988, which lesson 16 should know.
- **SOURCES Part C 9 was wrong on the UK poisoning call** (now corrected, as is OUTLINE lesson 14):
  the NHS sends any suspected swallow, touch or breath of something harmful to 999 or A&E, and 111
  only when unsure whether it is harmful. Part C 7 credited RCUK with a glucagon line it doesn't have.
  Scripts and the final test should use the corrected lines.
- **Places:** lesson 14 uses Salem (Oregon), Eugene, Ogden, Wrexham, Kettering,
  Provo, Cheltenham, Milwaukee, Ely, Stirling, Asheville, Taunton, Lubbock, Aylesbury, Flagstaff,
  Stockton and Tempe; the final test's lesson 14 item uses Dorchester. Bolton, in the draft, is free again. Names: Dev, Owen, Leila.
- **Quiz keys:** lesson 14 kept 3,2,0,1,2,1. The final test now has twenty-three items (seventeen to
  pass) and ends on key 3.
- **G4 not worked for lesson 14's videos** (Epilepsy Action, Epilepsy Foundation, St John); none
  embedded.

## 2026-09-25 — from lesson 15's Stage 4

- **A stricter rule the course applies must not be credited to a body that doesn't make it.**
  Lesson 15's draft credited "no drink while confused" to the AHA, whose heatstroke row allows cool
  liquids if the person can swallow; the NWS says no fluids. The course's own line is lesson 14's
  rule, and it now says so. Scripts and lesson 16 should keep the attribution.
- **Decision 2: the UK heatstroke pages are not a lag.** The NHS heat page (28 May 2026) postdates
  RCUK 2025, and RCUK lists a fan among its alternatives. SOURCES Part C 10 and OUTLINE decision 2
  are corrected; the lesson says only that neither UK page mentions immersion.
- **Hypothermia stages** (AHA Table 11) are now verbatim in SOURCES, Gate closures, lesson 15.
- **Places:** lesson 15 uses Driffield, Roanoke (Virginia), Steamboat Springs, Whitby, Allentown,
  Cedar Rapids, Knoxville, Peterborough, Brecon Beacons, Tallahassee, Dorset, Bakersfield and
  Exmoor; Macon, Pembrokeshire, Laramie, Lexington and Charleston, in the draft, are free again. The
  final test's lesson 15 item uses Bismarck, North Dakota.
- **Quiz keys:** lesson 15 kept 0,3,2,1,3,0. The final test now has its full twenty-four items
  (seventeen to pass) and ends on key 2.
