# Reviews: Home Repair and Maintenance, course-wide

Findings that belong to no single lesson, and notes a fixer leaves for later lessons.

## 2026-09-25 — Lesson 03 fix pass: notes for later lessons

- **Makers' leaflets in picture panels are read as the rendered page, not only as extracted
  text.** Bristan 576945's maintenance panel was misread from pdftotext as "fitting a replacement"
  cartridge; the rendered page shows the cartridge cleaned, descaled and refitted. SOURCES Part B
  §3 now carries a Stage 4 note. Any lesson citing a maker's leaflet (boilers, cisterns, alarms)
  should check the panel image (pdftoppm) before stating what it shows.
- **The dye test on a UK cistern and "turn the tap on to check" are this course's own steps**, not
  EPA's or Southern Water's. Label them wherever a lesson uses them.
- **Nothing read says loft header tanks feed a tap the stop tap doesn't control.** EST says only
  that a regular (heat-only) boiler has two header tanks storing cold water, usually in the loft.
  Lesson 6 must not state the mechanism unless it reads a source that gives it.
- **Quiz keys:** lesson 03 is now 3,1,0,1,2. Keys so far: 01 1,3,0,2,0,3; 02 2,0,3,1,3; 03
  3,1,0,1,2; 04 3,2,0,1,3,2.

## 2026-09-25 — Lesson 02 fix pass: notes for later lessons

- **G-W4 is closed for England and Wales** from SI 2008/594 reg 17G (England) and reg 10 (Wales),
  read live; SOURCES "Gate closures, lesson 02". The 7 m standard is measured in the communication
  pipe (the company's side of the boundary), never at a tap. Payments: England £50, capped at £250 a
  financial year; Wales £25, once a financial year. Scotland and Northern Ireland are unread.
- **CCW says "responsible for", not "owns"**, for everything but the main. Write "the homeowner's
  responsibility" or "the homeowner's side of the boundary", never "your pipe" or "at your cost", and
  give a renter the landlord or owner as the person to tell.
- **The American Red Cross is a charity, not an official body.** Its advice is "advice from the
  sources this course read", never "official" or "the authorities'". Its thawing page never mentions
  the supply, so "with the supply on" is not its advice.
- **The validate repetition warning fires on decision 9's sentence** whenever a lesson states two
  legal rules. It is required text, not a copy left by a fix pass; leave it and say so in the review.
- **Places now used in lesson 2:** Suffolk, Arkansas, Oklahoma, County Durham, Lincolnshire,
  Hertfordshire, Hampshire, Fife, North Dakota, Missouri. Grep for adjective uses ("a Norfolk
  bungalow") and house types (ranch, bungalow, terraced, semi, cottage), not only "in X".

## 2026-09-25 — Lesson 04 fix pass: notes for later lessons

- **Drain chemicals: every usage condition is Poison Control's (US).** UKHSA's sodium hydroxide page
  gives only "correct use" and storage. Never credit goggles, gloves, ventilation, pouring or
  never-mix to a UK body; no UK official page on mixing cleaners has been read.
- **A method list labelled Yours needs its exclusions stated where the list is.** Lesson 4 now says
  at the end of WaterSafe's list not to start it with a drain cleaner already in the sink. Any later
  lesson that gives a householder's sequence (a boiler reset, a damp clean-up with bleach in lesson
  12) should say at the list what state of things it assumes.
- **The general-information label, as applied in lesson 4:** the full decision 9 sentence once, in
  the introduction; "This is general information, not legal advice." opening each H2 that states law
  and in the exercise. Two full copies in one lesson trip the 25-word repetition warning; lessons 1
  and 2 still trip it. This follows the convention the lesson 01 fixer was recording; if the briefs
  settle it differently, lesson 4 changes to match.
- **Thames Water's fatberg survey** is commissioned (Opinion Matters, 2,501 adults, London and five
  counties, late 2025), never "its own survey". **WRc's restart of testing** was written in 2024.
  **UGA's septic pumping** is hire-a-professional, Call someone. **ASHI's jug** is an analogy, not a
  diagnosis of a gurgle.
- **Quiz keys unchanged for lesson 4** (3,2,0,1,3,2).

## 2026-09-25 — Lesson 01 fix pass: notes for later lessons

- **The general-information label is settled** in the briefs' conventions (dated bullet): the full
  decision 9 sentence once in the opening, at the top of each H2 that states law, and in the
  exercise; never in H3s under a labelled H2, hidden answers or quiz explanations; law quiz stems say
  "as general information". Lesson 4 used the short first sentence at its H2s and exercise; bringing
  it to the full sentence is one edit per place, for the orchestrator to call. The within-lesson
  25-word duplicate check warns on every lesson that follows the convention (lessons 1 and 2 now);
  exempting the label in `build.mjs` is a platform change, not done here.
- **The course's reading on water near electrics now includes the box itself**: go to the consumer
  unit or panel only if the box and the wall around it are dry, with no water on it, in it or running
  towards it, and you can reach it without standing in water or touching anything wet. Lessons 5 and
  12 (and any flood or leak case) should use this wording, and say that for a US panel it is the
  course's own reading: no American source on water near a panel has been read.
- **WSSC is one Maryland utility.** Its outside valve is a scheduled, charged service for its own
  customers, not an emergency route; its open-a-faucet step is the only US burst-pipe-type order read
  (SOURCES "Stage 4 note, lesson 01"). Lever valves close with a quarter turn, and a sprinklered home
  keeps the sprinkler pipe live; any exercise that has the reader turn a valve should carry both.
- **Atmos and HSE's home-owner page give no switch advice.** "Every source says don't touch a switch"
  is false; name Cadent, SSE Airtricity, Con Edison and SoCalGas.
- **Personal Safety lesson 5 no longer says this course teaches fitting a lock** (commit 66e65db).
  Nothing in this course should say it does, or that that lesson promised it.
- **Quiz keys:** lesson 1 is now 1,3,0,2,3,0. The drafted 1,3,0,2,0,3 was a +2 value shift of lesson
  3's keys as they stood at review (3,1,2,0,2); rechecked against lessons 2 to 6 as they now stand. The fixer of any later lesson should check value shifts, not only positional
  ones. Places used in lesson 1: Wales, Norfolk, Oregon, Nebraska, a 1930s semi in England, the
  American Midwest.
