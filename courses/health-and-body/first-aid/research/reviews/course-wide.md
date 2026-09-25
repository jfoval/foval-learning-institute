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

## 2026-09-25 — from lesson 16's and the project's Stage 4

- **A reviewer's suggested twist is a claim to check, not a fix to apply.** P proposed seven new
  twists for the project's scenarios; four repeated a lesson case (lesson 8's two-year-old, lesson
  13's "feels fine, wants to walk", lesson 14's 3:20 case, lesson 9's groin and armpit). Search the
  lessons for the twist before writing it in.
- **RevivR's feedback is "on your chest compression exercise"; its page doesn't say depth.** Lesson
  3 (line 609), lesson 16 and the project said "rate and depth" and are corrected. Scripts should say
  "feedback on your compressions".
- **SOURCES D42 (Yeung) is completed**: "... on laypeople compared to healthcare providers". The
  trimmed line read as no lay data at all.
- **The project is now `assessments/project-your-households-first-ten-minutes.md`** (renamed from
  `project.md`; nothing linked the old path). Its findings live in `reviews/assessments.md`.
- **Lesson 16's length, for the QUEUE:** 105 measured minutes against the outline's ~70, after P21's
  trims; clean seam at "## How fast a skill fades". Not split (fourteen lessons and the project
  point to "lesson 16" for the where-to-train list). John's decision, as for lessons 2, 3 and 5.
- **Places:** lesson 16 uses Brighton, Guildford, Columbus, Swindon, Sioux Falls, Cleveland,
  Aberystwyth and Doncaster (Tampa, Rochdale and Maine are free again); the project uses Oldham,
  Scranton, Kalamazoo, Eastbourne, Peoria, Dumfries, Olympia, Lowestoft, Cheyenne and Bradford.
- **Quiz keys:** lesson 16 kept 0,1,3,2,1,0, re-checked against lesson 15's current 0,3,2,1,3,0.
- **G16 not worked for lesson 16** (Commons `Steps of CPR-1964.jpg`, licence unverified); no image.

## 2026-09-25 — course-wide neutrality audit

**STATUS: AUDITED AND APPLIED, same session. VERDICT: PASS after fixes.** Medicine is a sensitive
domain under standards 3.4, so this audit is mandatory before publish (`courses/CLAUDE.md` rule 6,
standards 3.5). Eleven findings: ten fixed at sentence level in lessons 2, 6, 8, 9, 11, 12, 13 and
16 and the project, and one reported for lesson 3 (another agent's file); two research gaps. No
quiz item edited, no safety callout touched, every guideline-and-year parenthesis kept, nothing a
Stage 4 review closed reopened. Lessons 1 to 15 were audited first; lesson 16 and the project were
audited after commit 85cea2a (their Stage 4 fixes, 15:17) and then edited. Lesson 3 was read and not
edited: it was in another agent's hands when the audit began.

Fresh context. Read: standards Part 3 in full; `.claude/commands/neutrality-audit.md`; Nutrition's
course-wide audit (7fa8baa) for shape; OUTLINE's twelve decisions (2 and 9 closely) and Neutrality
notes; this file; all sixteen lessons in full with their quizzes; the project in full.

### Counts (lessons 1 to 15, by string count of body names in lesson text, not distinct sources)

| | US | UK and Europe |
|---|---|---|
| Guideline bodies | AHA (with AHA/Red Cross 2024) 966 | RCUK 662, ERC 225: 887 |
| Public pages and other bodies | American Red Cross 172, CDC 24, ASA 23, Stop the Bleed 21, PoisonHelp 14, 911.gov 9, FDA 4: 267 | NHS 396, St John 252, British Red Cross 111, BHF 59, MHRA 30, British Burn Association 25, Epilepsy Action 12: 885 |
| International | ILCOR 197 | |

The guideline citations are level. The public pages run about 3.3 to 1 towards the UK, because
RCUK 2025 has no section on burns, fractures and sprains, seizures, swallowed poisons, frostbite,
stings or ticks, so UK advice there comes from NHS and charity pages, and the lessons say so each
time.

**Public pages named as behind, or at odds with, their own country's guideline (lessons 1 to 15):**
UK 14 (St John DR ABC, L2; St John bed-to-floor, L3; BHF "blow hard" and BHF hands-only since
Covid, L4; British Red Cross two fingers, L6; NHS and British Red Cross two fingers for infant
thrusts, and a St John 2016 and a British Red Cross 2024 video, L8; NHS "any order", L8; NHS fainting
call order, L7; NHS cuts elevation, L9 and L10; St John tourniquet page, L9, dated only; St John
spinal recovery position, L11), Europe 1 (the ERC lay guide's 10%, L5), US 3 (American Red Cross
infant two fingers, L8; the AHA's own 2024 infant film, L6; American Red Cross nosebleed page, L10).
The 4.7 to 1 ratio runs ahead of the 3.3 to 1 citation ratio, and the reason is in the texts: RCUK's
October 2025 changes (the call before the breathing check, no bed-to-floor move) left more UK pages
out of step than the AHA's changes left US pages, and the AHA's two changes did catch the US pages
that cover them. Every one is dated and said plainly; none sneers. Two are said more than once in
one lesson (St John's bed page in L3, four times; BHF in L4, twice for two different lines), which
is N11 below and a kept item.

**Last word in each US/UK comparison.** About twenty comparisons. Seventeen end on the course's
neutral line ("neither is wrong", "follow the country you're in", "the call handler decides").
Three end on a body's own words, each even-handed: RCUK's "far better ... than to do nothing" (L6,
favours neither order), the ERC's "not sufficient to recommend" after the AHA's 2b (L7, both
stated), the ASA's "call for any sign" (L12).

**Explained or only quoted.** The AHA prints supporting text, so it is explained more often; RCUK
prints ungraded steps, so the UK side more often gets its instruction and "gives no reason". Counted
"no reason given" lines: UK 7 (naloxone training condition, aspirin reasoning, second-dose clock,
seizure side-wait, febrile cooling, BBA's 20 minutes, ice durations),
US 6 (arm placement, leg-raise trauma limit, second-dose timing, PoisonHelp's water, CDC salt
tablets, dressing stacking). Where the course supplied a body's reasoning it said so (L6 RCUK's step
from cause to breaths; L4 the breaths side's reply) except once (N1). Candour words ("openly",
"candid", "frank") go to the AHA six times, ILCOR once, because the AHA prints its limits;
"admission" went to the AHA only, twice (N2).

**Misconception lists.** Corrections landing on a US-origin position: 3 (abdominal thrusts first,
L8; two fingers, L6, both countries' old teaching; "he can get up now", voiced by a US coach, L13).
On a UK-origin one: 4 (hands-only since Covid and "blow hard", L4; "the order doesn't matter", L8;
"always move them to the floor", L3). On the contested questions, mirrors are present for breaths
(L4), naloxone (L7), ice (L11); the FAST and BE-FAST list corrected one side only (N5).

### Classification (3.1)

Sorted correctly throughout: the adult numbers, bystander CPR's association with survival, "acting
beats not acting" established; every US/UK difference, the tourniquet's size of effect, improvised
tourniquets, suction devices, shock position, PEACE and LOVE, FAST against BE-FAST, oral dilution
contested; duty to rescue, "everyone should learn CPR", DNACPR handling value, described. One
overclaim (N3): an observational association stated as an effect.

### Perspectives checked, and what each would object to

1. **AHA instructor.** Would recognise compressions first for children with its 5.74-second reason
   (L6), the drowning split (L6), the back-blow change with its cohort (L8), aspirin's 2b (L12).
   Would object that the course's own voice backed the UK call order (N1), that "admission" was used
   only of the AHA (N2), and that lesson 16 and the project reduced the AHA's reasons to
   "consistency" (N9, N10).
2. **RCUK/ERC instructor.** Would recognise the call-first reasoning, five breaths from the cause
   of child arrest, cool first transfer second, the anaphylaxis posture texts. Would object that
   UK pages are named behind their guideline far more often than US ones (counted above, explained,
   kept) and that a public-page summary in lesson 16 listed only UK-side pages bar one (N8).
3. **Sceptic of guideline-by-consensus.** Would find the grading key (L4), "good practice
   statement" defined as expert opinion, C-EO on every fracture line (L11), the collar history read
   against ILCOR's cadaver caveat (L11), and "what would settle it" on BE-FAST (L12). Would object to
   the child-breaths sentence stating an association as an effect (N3). Nothing else.
4. **Disability and chronic-condition perspective** (epilepsy, diabetes, wheelchair user, someone
   with a DNACPR). Would recognise "most seizures need no ambulance", the care plan as theirs, the
   dignity line (L14), the wheelchair choking steps (L8), and awake-and-swallowing as the sugar rule.
   The DNACPR reading ("unless you have been shown it, carry on", L1, L16) errs towards resuscitation
   and is labelled the course's; someone who holds a DNACPR would want the ReSPECT and "should be
   respected" lines beside it, and they are. No sentence-level objection.
5. **Rural or remote rescuer.** Would recognise the lone rescuer with no phone (L2), the AED too
   far to fetch (L5), refreezing (L15), elapid bandages declined with the reason (L15), cooling in
   classic heatstroke with no tub (L15). No objection.
6. **Person of faith uneasy about DNACPR, or about touching and undressing.** Modesty is handled from
   ILCOR's and the ERC's text only (L5), with dignity measures labelled as the course's. No faith
   tradition is described or judged. The omission of religious or cultural rules on touching and
   resuscitation stands as the OUTLINE's research gap (not fixed).
7. **Harm-reduction worker.** Would recognise public-health language, no stigmatising terms, the
   DHSC's "Anyone can use available naloxone", the GAO Good Samaritan laws, and naloxone's safety
   line. Would object that the lessons set the AHA's CPR-first order against "the leaflet" but never
   describe what UK or US take-home naloxone training teaches in its own words (not in SOURCES;
   research gap, not fixed).
8. **Editors of the public pages (NHS, St John, British and American Red Cross, BHF).** Each lag is
   dated and said once without scorn, bar N11 and the kept BHF item; the heatstroke wet sheet and St
   John's legs-up are, correctly, not called lags. "Charity pages" as a label for the UK shock column
   read as a downgrade (N7).
9. **Clinician trained in the older US thrusts-only teaching.** Would object that the AHA's case
   reports of thrust injury were repeated in the technique section, where the reader is being taught
   the thrust both countries grade COR 1 or recommend (N4). L8 discloses that the case for the old
   order was not read.
10. **Stroke clinician on the FAST side.** Would recognise the ASA's own recall study, its funder and
   its caveats. Would object that the misconception list corrected only the FAST side (N5).

### Findings and fixes

- **N1 (L2, call order).** "The breathing check you'd have done alone ... is a check a trained person
  does better with you ... Doing it yourself first costs time and adds little." The course's voice
  arguing RCUK's side, just before "Neither is wrong". **Fixed:** "On their reasoning, the breathing
  check you'd have done alone, uncertain and frightened, is one a trained person does better with
  you on the line, so doing it yourself first costs time and adds little."
- **N2 (L6, L11).** "opens with an admission" (L6) and "its own admission that cold has not been
  shown" (L11), both of the AHA only. **Fixed:** "opens with the AHA's own caveat"; "its own
  statement that".
- **N3 (L6, Kitamura).** "breaths add a great deal on top": an observational registry stated as an
  effect (3.1). **Fixed:** "So compressions alone went with far better outcomes than standing back,
  and in the common kind of child arrest, the children who also got breaths did far better still."
- **N4 (L8, thrusts).** "And this is the manoeuvre the AHA's case reports of a burst stomach and a
  torn aorta describe", a second telling of the same harm inside the how-to. **Fixed:** "The AHA's
  case reports of injury, above, are about this manoeuvre; they describe single cases, not a rate."
- **N5 (L12, misconceptions).** "FAST catches every stroke" with no mirror. **Fixed:** added
  "**"BE-FAST has been shown to be better."** Not yet. Aroor's study counted no false alarms, and
  in the ASA's own study fewer of those taught BE-FAST could say what F, A and S stood for.[15][13]"
- **N6 (L13, Harrogate).** The wrong advice is voiced by "a visiting coach from the US", and the
  course added "He's guessing where his guideline is silent." **Fixed:** "The visiting coach isn't
  breaking a US rule, because the US guideline's anaphylaxis section has no posture rule; in England
  the UK texts apply, and on this point they are explicit."
- **N7 (L9, shock).** "the UK column comes from charity pages". **Fixed:** "public pages".
- **N8 (L16, the lag list).** The summary of pages behind their guidelines named BHF, St John, NHS
  twice and the ERC guide, with the American Red Cross only inside the two-finger item. **Fixed:**
  added "the American Red Cross's nosebleed page, with a shorter pinch than the guideline it
  co-wrote (lesson 10)".
- **N9 (L16, case study).** "the AHA's stated reasons included consistency" picked the
  teaching-convenience reason. **Fixed:** "the AHA's stated reasons were one cohort study, case
  reports of injury from thrusts, and consistency, one sequence taught for every age."
- **N10 (project, scenarios A and B).** The AHA's child-sequence reason given as "consistency" only,
  and "RCUK says the call handler recognises arrest better than a frightened bystander", words
  neither body uses. **Fixed:** A adds "and its finding that starting with compressions delays the
  first breath by only seconds"; B reads "the AHA's consistency across ages and the few seconds
  compressions first delay the first breath" and "RCUK and the ERC say the call handler is often
  better placed than a bystander to recognise arrest".
- **N11 (L3, reported, not edited).** St John's bed page is named four times: the table, the dated
  sentence (line 362), the case intro "on a public page that lags" (line 475), and the
  misconception list. Decision 2 says once. Suggested fix for lesson 3's next editor: line 475, "on
  a public page written before RCUK's 2025 guideline", or drop that clause.

### Checks

`npm run validate` exits 0 (its first-aid line is the expected "status drafting, not built").
`npm run quotes first-aid`: 417 sourced quotations, 0 not found. No em dash or spaced en dash added.
`npm run minutes`: lessons 9, 12 and 16 measure 110, 90 and 110 against 105, 85 and 105 stamped,
each "+5, inside precision", so `minutes:` is left as stamped. Callout unchanged in all sixteen
lessons and the project. No quiz edited.

### Not fixed, and why (for `docs/QUEUE.md`, which this audit does not edit)

- **Take-home naloxone training in its own words** (L7, perspective 7): no drug-service or
  naloxone-programme training text is in SOURCES. A Stage 1 read would let L7 set the AHA's order
  beside what those programmes teach, not only beside "the leaflet".
- **Religious and cultural rules on touching, undressing and resuscitation**: still the OUTLINE's
  research gap; L5 handles modesty from ILCOR and the ERC only, correctly.
- **The case for the older US thrusts-only order** (L8) and **US DNR and POLST forms** (L16): unread,
  and both lessons say so.
- **The breaths side's reply to the dispatcher trials** (L4) is the course's reading, labelled; a
  source from that side would replace it.
- **Kept on purpose:** the UK-heavy lag count (explained above; the annual re-check in decision 3
  should drop each note as pages catch up); BHF flagged twice in L4 for two different lines; L11's
  "The UK pages give no source for their figures" (true, and the American Red Cross page's source
  was not checked, so the sentence was not widened); L1's caveat on the BHF's commissioned polls
  (about polls, not the charity); the AHA's candour vocabulary (earned by its supporting text).
