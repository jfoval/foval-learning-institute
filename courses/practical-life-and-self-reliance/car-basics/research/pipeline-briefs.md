# Pipeline briefs for this course's Stage 3 and Stage 4

Kept so any session can run the lessons the same way, adapted on 2026-09-26 from
`practical-life-and-self-reliance/home-repair/research/pipeline-briefs.md`, with every convention that
course's reviews found carried over from the start. Each lesson: one drafting subagent (DRAFT brief), a
fresh-context review (REVIEW brief: Tier A, one reviewer, for most lessons; Tier B split, reviewers F and
P in parallel, for lessons 14, 16, 17, 18, 19, 20, 22 and 25), and one fixer in a further context (FIX
brief). Findings files live in the session's scratchpad and do not survive it; the lesson's review file
in `reviews/` is the record.

**Before a lesson is drafted, check its gates** in OUTLINE "Stage 1 gates". No gate blocks a whole
lesson. G-N2 blocks lesson 24's right-to-repair block: if it doesn't close, lesson 24 states the law, the
votes and the court challenge as facts, with no argument block. G-N1 (every number re-read) applies to
every lesson that prints a number. Every other gate has a written fallback, and the drafter either closes
the gate or writes the fallback, never neither.

**Before lesson 1 is drafted,** the orchestrator adds `CAR_BASICS_SAFETY` to `scripts/build.mjs` (OUTLINE
decision 4), so the first draft is checked by the build.

---

## Course conventions settled so far

Read this section first. It binds every lesson, and it grows as lessons land: a fixer who learns
something a later lesson needs adds a dated bullet at the end. Everything below the first bullet was
learned by Home Repair and Maintenance lesson by lesson, and is settled here before any lesson is
written, so this course does not learn it again.

- **Twenty-five lessons**, numbered and titled as in OUTLINE "How many lessons, and why". Cross-references
  use the number and the title ("lesson 17, Motorways and fast roads: go left, the live lane, and the
  smart motorway question"), so a split, if one is ever accepted, is a find-and-replace.

- **The safety callout, byte for byte, on every lesson, directly after the opening paragraph(s).** The
  build enforces it as `CAR_BASICS_SAFETY` (OUTLINE decision 4), so no word of it changes in a lesson.
  Copy it from here or, once it exists, from lesson 1:

      :::callout Before the car lets you down
      This course is education, not mechanical training, and not legal advice about your own car. If your car fails on a motorway or other fast road in Great Britain, leave at the next exit or services if you can; if you can't, go left into an emergency area or onto the hard shoulder, switch on your hazard lights, get everyone out on the side away from traffic and behind the barrier if there is one, and don't go back to the car. If you're stuck in a live lane or can't get out safely, stay in with seat belts and hazard lights on and call 999 and ask for the police. In the US, pull as far onto the right shoulder as you can, switch on your hazard lights and stay in with your seat belt on, unless the shoulder is too narrow or there's a guardrail to wait behind, in which case get out on the side away from traffic; call 911 in an emergency. Never put any part of your body under a car held up only by a jack, and never touch the orange high-voltage cables on a hybrid or electric car. The law on a car's condition differs between Great Britain, Northern Ireland and each US state, and it changes.
      :::

  The callout's body is one line in the file (no line breaks inside it). A short paragraph after it may
  explain one clause where the lesson needs it. It never replaces the lesson's own teaching: lesson 17
  teaches Rule 277 in full, lesson 19 the wheel change, lesson 14 high voltage. If gate G-N3 closes and
  Northern Ireland's Highway Code gives the same steps, "in Great Britain" becomes "in the UK" in the
  constant and every lesson in one edit, by the orchestrator only.

- **The general-information label** (decision 9, Home Repair's settled rule). The full sentence, **"This
  is general information, not legal advice. The rules differ between England and Wales, Scotland,
  Northern Ireland and each US state, and they change."**, goes **once in the lesson's opening** (after
  the callout) in any lesson that states law. After that, **"This is general information, not legal
  advice."** opens each H2 section that states law and each exercise that asks about law. It does not go
  at every mention, in an H3 under a labelled H2, in a hidden checkpoint or predict answer, or in a quiz
  explanation; a quiz item on the law says "as general information" in its stem. A lesson that states
  law gives it its own H2 ("The tread rule, and what follows from breaking it"), not an H3 inside a
  practical section. A misconception about the law points back to the labelled section rather than
  restating the rule. The full sentence appears once per lesson, so the within-lesson 25-word duplicate
  check stays quiet.

- **The course's question and the job labels** (decision 5). Every rule carries, in the sentence: **law,
  handbook or advice: whose, and for which car?** (and, from decision 2, where). Every job carries one of
  three labels in the prose, not as a badge: **Yours**; **Yours, on conditions** (name the condition);
  **Call someone**. Where the law allows the owner more than the advice, both, law first, adjacent; the
  label follows the advice (decision 10).

- **The handbook governs every per-car figure** (decision 6). A torque, pressure, interval, grade,
  coolant wait, jacking point, jump point or space-saver speed is always a named maker's, for a named car
  and market: "Toyota, in the handbook for the 2023 Corolla sold in the US, gives 76 ft·lbf (103 N·m)".
  Never "the torque". No maker is named beyond the handbooks SOURCES read.

- **The UK and the US side by side, and neither called wrong** (decision 3). Differences go in a table or
  an "In the UK / In the US" set, never interleaved; agreement gets one sentence. **A reader is never
  handed the other country's roadside steps.** Where no source gives a reason for a difference, the
  lesson says so and supplies none. Words and units both at first use in each lesson (bonnet and hood,
  tyre and tire, mm and 32nds, psi with bar or kPa, N·m and lbf·ft, km/h and mph, °C and °F). UK spelling
  in the course's prose; US spelling only in US quotations and titles.

- **Jurisdictions named exactly** (decision 2). "Great Britain" for the RTA, the C&U and Lighting
  Regulations, the MOT and the Highway Code; "England" for National Highways and smart motorways;
  "England and Wales" for the Sentencing Council and the standard scale; "England, Wales and Northern
  Ireland" for the 1977 Act; "the UK" for the Consumer Rights Act; "Northern Ireland" for the DVA test
  and nothing else read. US rules are federal (named as federal; FMCSA's as commercial only) or a named
  state. **Never "the US minimum tread is 2/32 inch", never "US law requires" what a state requires.**
  999 and 911; 112 not printed unless re-read.

- **High voltage is said one way** (decision 8): orange, with the MOT manual's two caveats (imported
  cars may differ; 48 V mild hybrids "may use blue coloured insulation"); "no user serviceable parts";
  silent restarts and fans; assume energised after damage; no comparative fire claim. No sentence,
  exercise, checkpoint answer or quiz explanation has anyone touch, open, unplug or go near a
  high-voltage part.

- **No procedure for anything decision 7 leaves out**, anywhere: no getting under the car, no axle
  stands, no oil, pad, filter or fuse change, no plugging a tyre, no forced DPF regeneration, no fault-code
  reading, no high-voltage work. Where a source gives a procedure the course does not teach (Toyota's
  "Use a jack stand if it is necessary to get under the vehicle"), report it as the source's and say the
  course stops there, as its own scope decision, not as a claim that the work is unlawful.

- **Cars that are not yours** (decision 16). No lease, finance, fleet or hire terms were read. The course's
  line, labelled as the course's: the agreement and the company decide who arranges servicing, tyres,
  repairs and recalls; tell them in writing and do only the owner's checks. Exercises that touch a car say
  "if it's yours, or its keeper agrees". A keyed quiz answer never has a reader who doesn't keep the car
  arrange a repair on it.

- **Free routes first** (decision 17). Before a lesson sends a reader to pay anyone, it gives the free route
  the sources name, and never implies the free route is always enough.

- **The course's own reading is always labelled** (decision 22). Where the lesson concludes something no
  single source states (a roadside jump start follows a wheel change's placement rules; darkness favours a
  call-out; a leased car goes to the lease company), it says "this course's reading" in the sentence, and
  keeps the label in the podcast script and the test.

- **No products** (decision 11). No tyre, gauge, booster, charger, jack, oil, additive, sealant, breakdown
  provider or garage chain is recommended or linked for purchase. **Every industry-funded or commercial
  source carries its label at each use**: TyreSafe ("a UK tyre safety charity backed by tyre makers,
  carmakers and retailers"); the AA, the RAC, Green Flag (sell breakdown cover and repairs); AAA clubs
  (sell roadside assistance, run a repair network); The Motor Ombudsman (funded by accredited garages'
  fees; not statutory); the Car Care Council (funded by the Auto Care Association); ASE and the IMI (on
  their own credentials); DENSO (a glow-plug maker). No prices except the dated fees OUTLINE decision 9
  lists.

- **Boundaries** (decision 15), each by name and never retaught. **Car Basics makes the road safe and
  makes the call; casualty care is First Aid's.** Point, at the place the reader needs it, to First Aid
  and CPR lesson 2, "Danger, the call, and recognising cardiac arrest" (its title has a comma after
  "call"); lesson 7, "Breathing but not awake"; lesson 9, "Severe bleeding and shock"; lesson 10, "Burns,
  cuts and small injuries" (battery acid, eye splashes, burns); lesson 11, "Bones, joints, head and spine"
  (keep an injured person still; the helmet stays on); lesson 14, "Seizures, low blood sugar and
  poisoning" (carbon monoxide); lesson 15, "Heat, cold, bites and stings" (heatstroke; cold). Rule 283's
  "DO NOT move injured people from their vehicles unless they are in immediate danger" is quoted beside
  the pointer. **Home Repair**: lesson 11 (CO in the house and an attached garage), lesson 13 (tools, eye
  protection), lessons 5 and 6 (the house side of charging), lessons 22 and 23 (licensing; hiring; the
  CRA for services in general). **Personal Safety** lesson 6, "Out and away: streets, travel and meeting
  people", for threat from other people (it does not mention breakdowns; don't say it does). **Personal
  Finance** lessons 3 (car loans), 8 (insurance; whether a service contract is worth it) and 10 (scams;
  section 75). **Digital Literacy** lesson 11 (call back on a number you found yourself). **Logic and
  Argument** lesson 7 for every contested block. **Open the earlier lesson and find the sentence before
  you write "as lesson N showed".**

- **Exercises** stay inside OUTLINE decision 1's list, with the limits written into the exercise: no
  lifting the car, no leads connected, no cap or reservoir opened, nothing high-voltage touched, nobody
  under the car, nobody at a roadside for the exercise, no driving for the exercise, and a car that is
  the reader's or whose keeper agrees.

- **Places are never reused** (decision 21). Before naming any town, region or road, run
  `grep -rlw "<place>" courses curriculum | grep -v "car-basics/research"` and use it only if the output
  is empty. OUTLINE reserves places per lesson; re-check them anyway. A law case names the state or nation
  whose law was read; a case that is not about law names a town, city, road or region and no state. Grep
  bare names and adjectives, not only "in X".

- **The quiz-key rule, relaxed from lesson 1** (decision 20, where Home Repair ended): all four positions
  used, no adjacent repeat, not identical to and not a pure value shift of any earlier lesson's sequence
  in this course, and no shared run of four at offsets 0 or ±1 with the five lessons nearest it. Keys are
  chosen by script. The fixer rechecks against every lesson on disk, value shifts included, and records
  the sequence in `reviews/course-wide.md`.

- **Plan for the 100-minute ceiling from the start.** Every lesson is planned at 60 to 85 measured
  minutes. Where a draft would pass 100, cut the lesson's "Cut first if long" items in order; do not
  split. A drafter who has cut the whole list and is still past 100 says so in the reply and the
  orchestrator decides.

- **The unread-line traps** (decision 13) a drafter will reach for: **"MIRA"** (TyreSafe's 44% is "a test
  TyreSafe and the RAC cite"); **"Haynes"**; **"NEISS data"** (the 1998 jack note uses "CPSC's
  emergency-room injury data"); **"Retail Motor Industry Federation"**, **"Independent Garage
  Association"** and **"Consumerline"** (Citizens Advice names two of them; the lesson does not);
  **"Road Traffic (Northern Ireland) Order 1995"**, **"Motor Vehicles (Tests) Regulations 1981"**,
  **"General Product Safety Regulations 2005"**, **"Consumer Contracts Regulations 2013"**; **"AAA
  Electric Vehicle Range Testing"** (say "a 2019 AAA test, as fueleconomy.gov reports it"); the ORNL and
  SAE report numbers. Run `npm run validate` and read every unread-line error.

- Record new conventions below as lessons land, each as a dated bullet.

---

## Drafting brief: Car Basics, Stage 3

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/car-basics`. You are drafting ONE lesson (number given in your
task). Other agents may be working on other lessons in the same tree: never touch any file outside the
one lesson file you are writing, except SOURCES.md as the gate rule below allows. Do not commit, do not
run git add. Do not edit OUTLINE.md, build.mjs or anything else.

## Read first, in full, in this order
1. `.claude/commands/draft-lesson.md` (the whole thing, especially "Defects this drafter repeats": read
   your draft against it before you finish).
2. `docs/EDITORIAL_STANDARDS.md` and `docs/STYLE_GUIDE.md`.
3. `courses/CLAUDE.md` (lesson format, block grammar).
4. This file's "Course conventions settled so far", above. It binds you.
5. The course's `course.yaml`, then `research/OUTLINE.md`: "How many lessons", "What is deliberately
   left out", the **twenty-two decisions** (they bind you), the "Stage 1 gates" table, then your lesson's
   section and the ones either side, then "Neutrality notes".
6. `research/SOURCES.md`: the synthesis at the top (through "Suggested lesson sequence"), including the
   access problems, the tread rule, the safety-critical guidance and the unread line; then **every Part
   and section your lesson's outline section cites, read in full**. The file is long (74k words); read the
   parts you need, fully, not by grep snippets. The `<!-- unread: -->` line binds you: nothing named there
   is cited, and a gate that is not closed is not relied on.
7. Run `npm run taught courses/practical-life-and-self-reliance/car-basics` and read what earlier courses
   taught. Build on them by name and reteach nothing OUTLINE decision 15 assigns elsewhere. **Open the
   earlier lesson and find the sentence before you write "as lesson N showed".**
8. Every lesson of this course already in `lessons/` (for connections, the conventions they settled, and
   to avoid repeating their examples, figures, places and phrasing).
9. The two most recent review files in `research/reviews/`, and `reviews/course-wide.md` if it exists.
   If this course has none yet, read Home Repair's `reviews/course-wide.md`: most of its notes are about
   drafting defects that are not specific to houses.

## Gates first
For each gate your lesson depends on, either close it (read the source in a browser or with curl, and
append a dated "Gate closures, lesson NN" section to the end of SOURCES.md with the read level, the URL or
capture ID, and any quotation marked [V]; remove any unread entry it clears) or write the fallback exactly
as OUTLINE gives it. **Every phone number and fee you print is re-read on the service's own page on the
day you draft (gate G-N1)**, and the date goes in SOURCES. **Every statute, regulation, rule or threshold
you state is re-read on the live page** (legislation.gov.uk; the eCFR; uscode.house.gov; leginfo; the
state's own site; GOV.UK's Highway Code), and you read the whole section once, not only the lines SOURCES
recorded. **Every NHTSA figure is re-read** through the live page or a fresh Internet Archive capture
(nhtsa.gov refuses automated readers). **Every handbook figure is read on the handbook itself.** Say in
your reply which gates you closed and which fallbacks you wrote.

## Hard requirements
- File: `courses/practical-life-and-self-reliance/car-basics/lessons/NN-slug.md` (slug from the outline
  title, short, lowercase, hyphens).
- **The safety callout**, byte for byte, directly after the opening paragraph(s) (conventions above).
- **Jurisdictions named exactly**; **UK and US side by side, neither called wrong**; differences in a table
  or an "In the UK / In the US" set; no figures merged across countries; no country's roadside steps given
  to the other's reader.
- **Every rule carries law, handbook or advice, whose, and for which car** (decision 5); every job its
  label. Where the law allows more than the advice, both, together, law first (decision 10). **The
  Highway Code's MUST and should are named as law and advice every time** (decision 9).
- **The law is general information** with the label rule above. Legal examples and exercises ask which
  rule applies in a named place and what to ask the named body.
- **No per-car figure as universal** (decision 6). **No procedure for anything decision 7 leaves out**, and
  nothing high-voltage (decision 8), including in checkpoint answers and quiz explanations.
- **Every figure carries source, year, geography and what it counts** (decision 12). Old and small data
  with their limits in the same sentence. A value you computed is labelled as the course's arithmetic.
- **No mechanism and no method from general knowledge** (decision 14): where SOURCES gives none, give the
  finding and say the sources read give no mechanism, and where to find one (the handbook; the textbooks
  in Go deeper).
- **No products; every industry-funded source labelled** (decision 11). **Exercises inside decision 1**,
  with the limits written into each exercise.
- Every required element of standards 1.2; 2 to 3 `:::predict`, at least 2 `:::checkpoint`, at least one
  `:::exercise` with a timing that opens "Take NN minutes" (digits), one worked example with a gap. End the
  body with a short "For your plan" paragraph naming what this lesson adds to the car file.
- Footnote markers `[1]` on checkable claims and a `## Sources` section. Each source entry states its read
  level **copied from SOURCES.md** in plain words, names the section or page read, and for an Internet
  Archive read gives the capture ID, with the SOURCES part and section only in an HTML comment
  (`<!-- SOURCES Part E §1 -->`, or `<!-- lesson NN gate closure G-N3 -->` for facts read at drafting).
  Handbooks are cited with their market, edition and page or section title.
- **Quotation marks only around text you copied out of SOURCES.md's own [V] quotations** (or a gate
  closure you recorded). Your summary of a source is your sentence. Keep every hedge and scope ("may",
  "some", "in some locations", "as archived", "typically"). Run `npm run quotes
  courses/practical-life-and-self-reliance/car-basics` and fix anything it flags. A quotation keeps its
  author's punctuation, including a dash; your own prose never has an em dash or a spaced en dash. Split
  around a source's dash (NHTSA's snow sentence, USTMA's repair sentence, DVSA's defect definition) rather
  than reproducing it.
- Links in the teaching prose where a source is quoted (not only in Go deeper); use the URLs recorded in
  SOURCES. Link live pages for the reader even where SOURCES read a capture, and say so in the Sources
  entry. Never link a sales page.
- Photographs only under decision 18 and gate G-N4: an open licence you checked on the file page, the
  credit and licence in the caption. No stock photos, no AI images, no photographs of crashes or injuries,
  no coin images.
- No em dashes, no spaced en dashes in your prose, nothing from the banned list. Contractions at roughly 5
  to 8 per 1,000 body words. Bold under about 25 spans per 1,000 words, key terms only. Internal pipeline
  words ("SOURCES", "Part E", "gate G-N3", "the research file", "decision 7") never appear in learner-facing
  text; say "this course read the page as archived in September 2026" or "this course didn't find an
  official source on that".
- Quiz: 4 to 6 items, at least half application with new cases (no people, places or numbers from the
  body), each law or roadside item naming its jurisdiction or correct everywhere the course covers, **no
  item whose correct answer is anything decision 1 bars or the safety guidance says "must never say"**
  (decision 20), option lengths within about 15 characters, all four positions used, no adjacent repeat,
  explanations naming distractors by content, never by position. **Keys chosen by script** under the
  relaxed rule (conventions above).
- `minutes:` from `npm run minutes` (use its measured value; edit the number by hand). If it passes 100,
  cut from the lesson's "Cut first if long" list, in order.
- A self-check never prints its own answer in body text.
- Charts (optional, only if one teaches better than prose): inline SVG per the rules in
  `.claude/commands/review-lesson.md` (no `<g>`, every size an attribute ≥ 15, viewBox near 420, no blank
  lines inside, `var(--token, #literal)` fills, a `<desc>`), drawn only from numbers in SOURCES, with
  source, year and scope in the title or caption. OUTLINE names the candidate per lesson.

## Measured patterns, carried over from Home Repair, First Aid and Personal Safety
Each was found in two or more lessons of those courses. None is specific to their subjects; each will
happen here unless you look for it:
- **A rule applied outside its scope.** The traps here: FMCSA's triangles and tread are commercial-vehicle
  rules; the Highway Code is Great Britain's, not Northern Ireland's; National Highways' advice is for
  England's motorways and major A roads; a handbook's figure is that car's; HSE's jack and battery pages
  are written for workplaces; Ford's 10-minute coolant wait is Ford's; Mazda's no-spare-on-the-front rule
  is Mazda's; the California handbook's 511 and call boxes are California's; the AA's EV breakdown causes
  are 2021's and one provider's; NHTSA's "19 states and DC" is undated.
- **A grade, source or year attached to the wrong sentence.** The jack figures are 1994 to 1995; GAO's 16
  states are July 2015; the fuel-economy figures belong to the capture that shows them; the Toyota line on
  pads is 1998's.
- **"Every source says" when one does.** "Handbooks say" when one was read for that point; "the sources
  agree" on jump-lead removal (they don't). Check each symmetric claim against each source's own text.
- **A mechanism called absent when a source gives one** (or supplied when none does). HSE gives the
  jump-lead clamp's; Nissan gives the pressurised coolant's; the MMWR gives the snow-exhaust's; GAO gives
  the inspection decline's. No source read gives oil's or tread's.
- **Cross-references that claim what an earlier lesson does not say.** Open it and find the sentence.
- **Quiz items that replay the body's own cases.** New people, new places, new numbers.
- **Primary text paraphrased that SOURCES does not record.** If you read a statute, a handbook page or a
  service page beyond what SOURCES holds, list it with its URL in your reply; it goes into a dated "Gate
  closures, lesson NN" section of SOURCES.
- **A quotation quoted by its reassuring half, or a lead-in that drops its hedge.** The RAC's "you can
  typically drive" with its "strongly recommend"; NHTSA's warm-tyre "slightly lower"; the ABI's "would not
  necessarily"; CMA's "may be caught".
- **A predict block that asks what the sentence above it said.**
- **Places reused.** Decision 21's grep, bare names included. Say in your reply which places you used.

## Before you finish
Run `npm run validate` (check the exit code; warnings about other courses and audio debt are not yours)
and fix every line that names your file. Re-read your draft against the defect list, the measured
patterns and the conventions above. Search your draft for "illegal", "legal", "law", "must", "UK", "US",
"always" and "never", and check each against decisions 2, 6, 9 and 10. Then reply with: the file path,
word count, measured minutes, the quiz key sequence, the SOURCES sections used, the gates you closed and
the fallbacks you wrote, every statute, handbook page, fee and phone number you re-read (with the date),
the places you used, anything you cut and why, anything you were unsure of, and any place where the
lesson wanted something SOURCES did not have (and what you did instead).

---

## Stage 4 review brief, Tier A: Car Basics (one reviewer; lessons other than 14, 16, 17, 18, 19, 20, 22, 25)

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/car-basics`. You are the reviewer of one lesson, in a fresh
context. **You report; you do not edit anything in the repo.** Write your findings to the scratch file
named in your task, then reply with a short summary (verdicts per pass and the count of findings by
severity).

Not a standards 3.4 domain, but a practical, safety-critical course that states law in Great Britain,
Northern Ireland and nine US states. Assume the lesson contains errors and find them. **Every legal
statement, phone number, fee, threshold, handbook figure and safety step is checked against the primary
itself, not against SOURCES** (OUTLINE decisions 2, 6, 9, 12).

## Read first
- `.claude/commands/review-lesson.md` (the passes and the traps).
- `.claude/commands/draft-lesson.md`, the whole "Defects this drafter repeats" list, and the "Measured
  patterns" list in this file's drafting brief.
- This file's "Course conventions settled so far".
- `docs/EDITORIAL_STANDARDS.md`, `docs/STYLE_GUIDE.md`.
- The course's `research/OUTLINE.md` (the twenty-two decisions bind the lesson; the gates table; this
  lesson's section; the neutrality notes) and `research/SOURCES.md` (the sections the lesson cites, read in
  full, plus the synthesis at the top, the unread line, any "Gate closures" sections at the end).
- The earlier review files in `research/reviews/`.
- The lesson itself.

## The passes
1. **Facts and law.** Check every number, name, date, quotation, read level and jurisdiction against
   SOURCES, and string-match every quotation against SOURCES' [V] text or a recorded gate closure.
   **Re-read on the live page, today, every phone number, fee, statute, regulation, Highway Code rule and
   threshold the lesson states** (legislation.gov.uk; GOV.UK; the eCFR; uscode.house.gov; the state's own
   site; NHTSA through a fresh capture; curl with a browser User-Agent or a browser). Read every handbook
   figure on the handbook. Redo every sum and conversion by hand (mm to 32nds, psi to bar, °C to °F, N·m to
   lbf·ft, the TPMS trigger, the tolerances) and say that you did. Check each unquoted lead-in for a
   dropped hedge. Check nothing on the unread line or behind an open gate is cited or named, including the
   slips the build can't see (a handbook figure given as universal; "the UK" for a Great Britain rule;
   "the US minimum"; 112; a comparative EV fire claim; oil's or tread's mechanism in the course's voice).
   For each mechanism or method in the course's voice, ask which source it came from (decision 14).
2. **Safety.** The callout present and byte-identical (the build checks it; confirm by eye too); no
   procedure for anything decision 7 leaves out, anywhere, including checkpoint answers and quiz
   explanations; nothing high-voltage touched; nobody under a car or anything under a jack; no repair,
   wheel change, jump start or triangle on a motorway, hard shoulder or emergency area; no hot cap opened;
   the law and the advice together where they differ; every exercise within decision 1, with its limits
   written in; no UK step given to a US reader or the reverse in anything that could be acted on at the
   roadside; casualty care left to First Aid with the right pointer; every place a reader might take a
   description as an instruction they can't safely carry out from a page.
3. **Neutrality**, where the lesson has contested or value claims (lessons 8 and 24 at least; 5, 12, 13
   for their practice disagreements): sort each claim (3.1), Turing-test each position, check language and
   omitted facts, check that neither country's advice is called wrong, and check that every industry-funded
   source carries its label and none is endorsed or suspected in the course's voice. For lesson 8,
   Turing-test as a road-safety charity, a tyre maker arguing for full use, and a driver paying for tyres;
   for lesson 24, as an independent repairer, an automaker and an owner, and confirm gate G-N2's state
   (argument block present only if it closed). Where the lesson has no contested claims, write the one
   line the review-lesson command asks for.
4. **Depth and pedagogy**: specificity, expert and transfer tests per section; required elements of 1.2;
   objectives testable from a page; worked examples before problems, one with a gap; the job labels and
   "law, handbook or advice: whose, and for which car" in the prose; predicts that ask for a real
   prediction; quiz items with new cases, jurisdictions named, keys by the relaxed rule; the "For your
   plan" paragraph.
5. **Cold start**: read the lesson as someone who has done exactly the courses `npm run taught` lists and
   the earlier lessons of this one. Walk every instruction literally, as an owner standing by the car with
   the handbook in hand, and flag every term, part or habit never explained ("placard", "MIL", "live lane",
   "emergency area", "DOT code", "severe service", "B-pillar", "READY"). Check every "as First Aid lesson N
   taught" against that lesson.
6. **Voice and media**: em and en dashes, banned words and shapes (quote line numbers), contractions per
   1,000 body words (band 5 to 8), bold per 1,000 (over 25 is a finding), one-line morals, pipeline talk in
   learner prose; `minutes:` against `npm run minutes` (over 100 is a finding); links in teaching prose;
   every photograph's licence checked on its file page; every chart against SOURCES' numbers; **open every
   SVG and read it**; build with `npm run build:drafts` and open the page.

## Findings format
Numbered (R1, R2...), each with severity [critical/major/minor], the quoted passage with its line number,
the problem, the evidence, and a specific fix (replacement text where you can). **Always critical:** a
wrong emergency number; the other country's roadside steps given to a reader; anything under a car on a
jack, or under the jack, as a step; a repair, wheel change, jump start or triangle on a motorway, hard
shoulder or emergency area; a hot cap opened; anything high-voltage touched or opened; a legal rule with
the wrong jurisdiction; a per-car figure stated as universal where acting on it could hurt someone (a
torque, a space-saver speed, a coolant wait). End with your verdicts per pass.

---

## Stage 4 review brief, Tier B split: lessons 14, 16, 17, 18, 19, 20, 22 and 25 (two reviewers, F and P)

As the Tier A brief, but two reviewers run in parallel, each in a fresh context, and neither edits
anything. **Reviewer F** runs passes 1, 2 and 3 (facts and law, safety, neutrality); **Reviewer P** runs
passes 4, 5 and 6 (depth and pedagogy, cold start, voice and media). Findings are numbered F1... and P1....

Additionally, Reviewer F:
- **Lesson 14 (high voltage):** re-reads Nissan's LEAF handbook EV-8, 8-2, CH-2 and CH-12, Ford's Maverick
  pp. 184 and 283 to 284, NHTSA's "Electric and Hybrid Vehicles" (a fresh capture), NFPA's tip sheet, ESF's
  EV page and the MOT manual's Introduction section 20; checks that no sentence, exercise, checkpoint or
  quiz explanation has anyone touch, open, unplug or go near a high-voltage part; checks every "must" is
  attributed; checks that the extension-lead and charging-habit disagreements are reported, not resolved,
  and that "80%" is nowhere taught as fire safety.
- **Lessons 16 and 17 (the roadside):** re-read Highway Code Rules 116, 258, 269 to 287 live and verdict
  every MUST and should in the lesson; re-read National Highways' breakdown page, 911.gov (a fresh capture),
  the California handbook section and California Vehicle Code § 21809; check that no step would put a
  reader in a traffic lane, that each country's steps stay in their own table or set, and that no casualty
  care is taught. **Lesson 17 also gets the neutrality pass on smart motorways**: sort every claim
  (established, contested empirical, value); Turing-test as National Highways and the DfT, as the AA, and
  as a driver who uses an all-lane-running motorway every day; check the fourth-year report's
  deaths-or-serious-injuries headline sits beside the stopped-vehicle rates wherever either appears
  (including the chart); check "paused" (January 2022) and "cancelled" (April 2023) against their dates;
  check the government's stated reasons are reported as its reasons; name the perspectives checked.
- **Lessons 18 and 19 (flat tyres and the jack):** re-read every handbook step and limit the lesson states
  on the handbook itself (Toyota's 2023 Corolla PDF; Honda's, Mazda's and Nissan UK's online pages), C&U
  reg 27(2) and (3) live, the BTMA and USTMA pages, HSE's "Working under vehicles" page, and the 1998 NHTSA
  note's figures against its scan; check that nothing in the lesson, an exercise, a checkpoint or the quiz
  puts a body part under the car, anything under the jack, or a wheel change on any motorway.
- **Lesson 20 (GB law):** re-reads RTA ss.40A, 41A, 42 and 47, RTOA s.48 and the Sch 2 rows, the Sentencing
  Act 2020 s.122, C&U regs 27 and 100, and the Sentencing Council's tyres guideline live; searches the
  lesson for "offence", "illegal", "legal", "law" and "must" and verdicts each; checks nothing is said about
  Northern Ireland's or Scotland's law beyond what was read.
- **Lesson 22 (the US):** re-reads each state page and rule live (PennDOT and Pub 45 § 175.80; the New York
  DMV pages through fresh captures; Virginia's manual, 19VAC30-70-40 and -130; Texas DPS; BAR's Smog Check
  page), GAO-15-705's findings, and 42 U.S.C. 7522(a)(3); **runs the neutrality pass on whether periodic
  inspection reduces crashes**: Turing-test as a state inspection official, as a proponent of ending
  inspection, and as an owner who pays for it; check that GAO's "inconclusive" is not turned into "no
  effect", that the state officials' view is reported as GAO reports it, that PennDOT's 2009 study is not
  cited, and that the lesson imports no GB duty into US law; name the perspectives checked.
- **Lesson 25 (garage law):** re-reads CRA 2015 ss.49 to 52 and 54 to 57, the 1977 Act s.12 and Sch 1, and
  each US statute or rule live (California B&P §§ 9884.6 to 9884.10 and Civil Code § 3068; Florida
  §§ 559.905 and 559.909; Michigan § 257.1332; Ohio Adm. Code 109:4-3-13; New York VTL § 398-d through a
  fresh capture); redoes every tolerance sum by hand; checks no sentence tells a reader what they may do in
  their own dispute.

---

## Fix brief: Car Basics, Stage 4 fix pass and voice checks

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/car-basics`. You apply the reviewer's (or both reviewers')
findings to one lesson, in a context that neither wrote nor reviewed it. Touch only: the lesson file, its
review file `research/reviews/<lesson-id>.md` (create it), and `research/reviews/course-wide.md` if it
needs an entry (**if it exists, append a dated section with one small edit; never create it over an
existing file or rewrite it**: on 2026-09-24 two First Aid fixers ran at once and the second recreated the
file over the first's four notes). SOURCES.md only as below. Do not commit or git add. Do not touch any
other file (other agents work in this tree).

## Read first
`.claude/commands/review-lesson.md` ("After the review"), the "Defects this drafter repeats" list in
`.claude/commands/draft-lesson.md` and the "Measured patterns" in this file's drafting brief, this file's
"Course conventions settled so far", `docs/STYLE_GUIDE.md`, `templates/REVIEWS.md`, the course's
`research/OUTLINE.md` (the twenty-two decisions and this lesson's section), the SOURCES.md sections the
lesson cites, an earlier review file in `reviews/` for the shape (Home Repair's if this course has none
yet), the lesson, and the findings file or files.

## Do
1. Write the review file: a dated entry "## YYYY-MM-DD — Lesson NN — Stage 4, Tier A" or "Tier B (split)"
   (that header's dash is the template's and is allowed in review files), naming the reviewer(s), their
   verdicts, and every finding with its ID in one or two lines.
2. Apply every finding you agree with. Verify a factual finding against SOURCES.md (and the primary where
   the reviewer fetched it; **for a phone number, a fee, a statute, a threshold or a handbook figure, fetch
   it yourself**) before applying it; if a reviewer is wrong, decline it and say why. Rewrite generic
   passages with specifics from SOURCES; never add a fact that is not in SOURCES or a recorded gate
   closure. Keep the safety callout byte-identical; keep every jurisdiction label, every figure's labels,
   every job label, every "law, handbook or advice" attribution, every industry label and every point-of-use
   legal label. A fix that removes a hedge or a label is not a fix. A fix never adds a procedure decision 7
   leaves out, or anything high-voltage.
3. Then the voice checks, in the same pass: dashes and banned words; bold to key terms (under 25 per 1,000
   body words); contractions in the 5 to 8 band; two or three `:::predict`, a `:::checkpoint` after each
   hard idea, one worked example with a gap; every `[n]` has a footnote; read the opening, and walk every
   instruction once more as an owner standing by the car with the handbook in hand.
4. After any quiz edit, read each explanation against the option its key now selects. Re-measure option
   lengths. Re-check the key sequence by script against every earlier lesson of this course under the
   relaxed rule, value shifts included.
5. `npm run minutes` and set `minutes:` to the measured value for this file. If it passes 100, cut from the
   lesson's "Cut first if long" list before adding anything. `npm run validate` and check its exit code;
   fix every line naming this file. `npm run quotes courses/practical-life-and-self-reliance/car-basics`
   and fix anything for this lesson.
6. Append "### Resolutions applied" to the review entry: each finding fixed or declined with a reason, and
   the final measures (words, minutes, bold and contraction densities, quiz key sequence and option-length
   spread, places used). "**Status after review:** clean" or "needs second pass".
7. Reply with a 6-line summary, including anything a later lesson, the course-wide file, or this file's
   "Course conventions" should know.

## When a finding is in SOURCES.md too
If a reviewer shows that `research/SOURCES.md` itself carries the error (a trimmed quotation, a misread
figure, a claim about a source that the source does not make, a number that has changed), correct
SOURCES.md first, then the lesson. Verify against the primary text before editing. Edit SOURCES.md only by
appending a dated "Stage 4 note, lesson NN (date)" section at the end of the file, or with small targeted
replacements, never by rewriting the file, because other fixers may be editing other entries at the same
time. List the SOURCES corrections in the review file.
