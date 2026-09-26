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

## 2026-09-25 — Lesson 07 fix pass: notes for later lessons

- **Topping up a sealed heating system is now on OUTLINE decision 1's list** (dated amendment, R2
  option (a)), only by the boiler's own user instructions where they give the user a method. Any
  exercise that has a reader top up carries the conditions in the exercise: a user filling method
  in the manual, controls clearly identifiable under or built into the boiler, the boiler off and
  cold, own home or the landlord's agreement (a renter asks the landlord), and a loop elsewhere or
  unidentifiable controls go to the installer or a heating engineer. Ideal's method is for combis
  only; Worcester Bosch's has the user take off the boiler's bottom panel for its built-in links, so
  never write that a maker's user task "doesn't open the boiler".
- **DOE's tankless page converts 5 gallons to 15.2 litres, which is wrong** (18.9 L). Any lesson
  giving DOE's flow figure gives the litres as the course's own conversion (SOURCES "Stage 4 note,
  lesson 07").
- **DOE does give the reason for its heat pump setback rule** (backup heat is less efficient and
  costs more). Lesson 10 or any later heat pump mention should not say it gives none.
- **EST describes a TRV by flow, not as a target temperature.** Keep to its wording.
- **Quiz keys unchanged for lesson 7** (3,0,3,2,1), rechecked against lessons 1 to 6 and 8 as they
  now stand, value shifts included.

## 2026-09-25 — Lesson 05 fix pass: notes for later lessons

- **The trip rule is "keeps tripping", not "a second trip".** No source read says reset once or that
  a second trip means a fault. SCE's step 5 says a second trip "could be" an overload among other
  causes; its repeat rule is for a breaker that "trips repeatedly"; ESF's is for an RCD that "keeps
  tripping"; HSE's workplace leaflet treats any trip as a sign of a fault and sends frequent trips
  with no fault found to the RCD's maker. What the sources support: a trip that comes back with the
  load still off rules out SCE's plug-in causes and goes to an electrician; a device that keeps
  tripping goes to an electrician. Any "one reset" line in lessons 6, 18 or the assessments is this
  course's reading and says so. SOURCES' gate closure and synthesis carried the old wording; the
  gate closure is corrected, and the synthesis's "after one reset" ("Safety-critical guidance", item 2) is
  left as the course's own rule.
- **ESF is a UK charity**: never the authority for a US case. US cases use SCE, CPSC or a named US
  body.
- **SCE's "open the cover" is undefined.** The course's line is the door in front of the switches,
  opened by hand, never anything screwed on, and it is given as the course's reading.
- **A "T" button does not prove a device is not acting on overload** (CPSC's GFCI breaker protects
  against both). Name the device from the button; don't infer the cause from it.
- **New quotable strings** (SOURCES "Stage 4 note, lesson 05"): ESF's "If this doesn't work, you
  should get a registered electrician to investigate" for a failed RCD test; ESF's "would be
  recommended ... but it is not urgent" for a fusebox without RCD protection; "An EICR will tell you
  if yours is still safe or not."; CPSC's "states, counties or local jurisdictions".
- **Quiz keys:** lesson 05 unchanged at 0,2,3,2,0,1. Keys so far: 01 1,3,0,2,3,0; 02 2,0,3,1,3; 03
  3,1,0,1,2; 04 3,2,0,1,3,2; 05 0,2,3,2,0,1; 06 1,3,2,1,2,0; 07 3,0,3,2,1; 08 1,2,1,3,0.

## 2026-09-25 — Lesson 08 fix pass: notes for later lessons

- **Lesson 1 does not list the T&P valve test among what the course leaves out.** Lesson 8 now says
  it "adds testing a water heater's relief valve to that list". If lesson 1 is edited, its "What this
  course leaves out" could gain the item; until then no lesson may say lesson 1 lists it.
- **Mixing valves resolve nothing, on what was read.** A. O. Smith offers them only as a scald
  measure, at the heater or the taps, and never mentions legionella. SOURCES Part A's "usually
  resolved in practice by storing hot and blending down at the tap" is commentary (SOURCES "Stage 4
  note, lesson 08"). Lessons 18, 19 and the assessments say no more than A. O. Smith does.
- **Scald against legionella is US against GB in this course's sources.** Any later mention (the
  test, the project, lesson 19) says the scald figures are CPSC's (US) and the legionella guidance
  HSE's (Great Britain, landlords), that the course read no UK scald source and no US legionella
  source, and that HSE's own low-risk example has outlets at 50°C. Neither body's advice is called
  unsafe; each page's silence on the other hazard is stated as a fact.
- **Thermostat label.** Any thermostat behind a cover on an electric water heater or a UK immersion
  heater is **Call someone**, with the lesson 5 pointer; not only the US electric heater.
- **CPSC's building-manager line is scoped to its "Furnace heater" paragraph.** Use it for a US
  apartment only with that scope.
- **Quiz keys:** lesson 08 unchanged at 1,2,1,3,0. Keys so far: 01 1,3,0,2,3,0; 02 2,0,3,1,3; 03
  3,1,0,1,2; 04 3,2,0,1,3,2; 05 0,2,3,2,0,1; 06 1,3,2,1,2,0; 07 3,0,3,2,1; 08 1,2,1,3,0.

## 2026-09-25 — Lesson 06 fix pass: notes for later lessons

- **The fire statistics are MHCLG's**, not the Home Office's: fire-related responsibilities moved on
  1 April 2025, and the year ending March 2026 release is published "From: Ministry of Housing,
  Communities and Local Government". GOV.UK's 2022 "Fire safety in the home" guide is still the Home
  Office's. Lesson 10 (smoke alarms, D33's alarm figures) cites MHCLG.
- **No ESF page splits warning signs between appliance and wiring.** Its plugs and sockets pages send
  burn marks, arcing, blowing fuses, tripping and a hot plug to the retailer, maker or repair
  technician; its FAQ sends much the same list to a registered electrician. Any split is the
  course's reading and says so.
- **SI 2020/312 binds "specified tenancies" only.** Any later lesson (18, "Who may do what") gives the
  Schedule 1 exclusions or points to lesson 6's law section, and says the landlord supplies the
  report (existing tenants within 28 days, a new tenant before moving in), and "sooner if the last
  report says so".
- **No source read gives a method for adding up a lead's load by hand.** ESF offers a calculator
  that did not render. Say so, and use ESF's 13A list or its 700 to 3,000 watt guide only as a flag
  for checking.
- **ESF's "RCDs Explained" address redirects to its "Home buyers" page**; cite it by that name.
- **Quiz keys:** lesson 06 unchanged at 1,3,2,1,2,0.

## 2026-09-26 — Lesson 09 fix pass: notes for later lessons

- **Cadent's advice is Cadent's network's.** Its area, on its own homepage: the North West, the West
  and East Midlands, the East of England and North London. A GB case outside that area rests on
  National Gas, whose guidelines "apply to all gas users", and gives Cadent's extra lines as Cadent's.
  No other GB network's page has been read.
- **Two cellar conditions, not one.** Cadent's is about where the leak is (and says evacuate);
  National Gas's is about where the meter is ("in the cellar", nothing on leaving); SSE and Phoenix
  give both. "Take both" is the course's reading and says so.
- **Going outside in a GB leak is the course's reading**, from Cadent's "Once you're safe" and its
  all-clear line. Say so where it is used.
- **US meter advice varies by utility.** SoCalGas's earthquake and emergency page tells customers to
  turn the meter off "and ONLY if it is safe to do so"; the three leak pages say leave. Never write
  "in the US you don't touch the meter" as a rule; defer to the reader's own utility, leaving first.
- **Northern Ireland: the call comes first** on both pages read (SSE Airtricity, Phoenix Energy).
  Phoenix is cited as "a Northern Ireland gas network company", not "the" network.
- **"Every source" claims about gas don'ts:** Atmos and HSE give neither a flame nor a switch line.
- **Pointers not fixed here:** lesson 9's "the next lesson" and "lesson 10", and lessons 1, 7 and 8's
  pre-split title, are the renumbering pass's.
- **Quiz keys:** lesson 09 unchanged at 1,3,0,1,2.

## 2026-09-26 — Lesson 11 fix pass: notes for later lessons

- **J3 has two wordings.** The Building Regulations 2010's own J3 ("Where a combustion appliance is
  provided, appropriate provision having regard to the design and location of the appliance ...
  early warning ... at levels harmful to persons") is the law; Approved Document J prints a shorter
  version. Quote the statute when calling it law, and AD J's words only as AD J's (SOURCES "Stage 4
  note, lesson 11").
- **SI 2022/707**, not 2022/578, amended the 2015 alarm Regulations (D23 corrected in place).
- **HSE's faqs.htm is "Domestic gas: frequently asked questions"**; cite it by that title.
- **RIDDOR reg 11(1)** binds pipe-gas conveyors and LPG fillers, importers and non-retail suppliers,
  on notice of a death, loss of consciousness or hospital visit; RIDGAS 2020/21 and 2021/22 carry
  HSE's pandemic note.
- **"Every source gives this order"** claims: CDC lists CO detectors first; any ranking of
  protections is the course's own and says so.
- **Places now used by lesson 11:** Cumbria and Kentucky (quiz), plus Cheshire, the Scottish
  Borders, Lancashire and Indiana.
- **Quiz keys:** lesson 11 unchanged at 2,3,1,0,3.

## 2026-09-26 — Lesson 12 fix pass: notes for later lessons

- **England's advice is not "the UK advice".** GOV.UK marks "Fire safety in the home" as England
  only, and Fire Kills names no nation. Say "England's advice" (Fire Kills, the Home Office guide);
  Wales and Northern Ireland alarm law and advice were not read.
- **MHCLG Table 5.1 has two columns.** Across all dwelling fires, siting reasons are 66% of failures
  to operate and battery reasons about 5%; in fires with a casualty, batteries about 16% and siting
  about 19%, with "other" commonest. Quote either column only with its scope (SOURCES "Stage 4
  note, lesson 12").
- **MHCLG's footnote 10 says "can be"** poorly sited, not "usually". Fire Kills' "more than a third"
  is undated and a different measure from MHCLG's (about 9% of dwelling fires).
- **The tumble dryer** is the commonest appliance outside MHCLG's cooking appliances and electrical
  distribution categories, not the commonest non-cooker appliance (microwaves and toasters are
  cooking appliances there).
- **Renters in quizzes:** a keyed answer never has a renter move, fit or remove anything; the
  landlord is asked.
- **Places now used by lesson 12:** Gloucestershire, Derbyshire, the Pacific Northwest, Perthshire.
- **Quiz keys:** lesson 12 now 2,0,1,2,3 (was 0,1,3,2,0, a positional shift of lesson 04's).

## 2026-09-26 — Lesson 10 fix pass: notes for later lessons

- **HSE's bayonet-cooker lines are landlord guidance**, items 4 and 5 of its tips on tenants' own
  appliances in the landlord section of "Domestic gas: frequently asked questions" (SOURCES C15
  corrected). Any later use says so, and gives the Register's "never try to fix, fit or move"
  beside it.
- **"The exact position" on gas is the Gas Safety Regulations' position.** In England and Wales the
  Building Regulations 2010 also list a heat-producing gas appliance (Schedule 3 item 1); lesson 22
  owns that, and Scotland's building warrant regime (C18).
- **The £60 reasoning** (a paid occasional favour is self-employment under HSWA s 53, carried into
  the 1998 Regulations by IA 1978 s 11) is recorded in SOURCES as [V] and is always labelled the
  course's reading. Lesson 22 may reuse it with that label.
- **Checking an engineer:** HSE's home-owner page asks for "the licence number from the engineers ID
  card"; its card page calls the front's number a registration number. The Register's helpline,
  0800 408 5500, was re-read on HSE's page on 26 September 2026. Lesson 23 re-reads it on its own
  drafting day (G-N1).
- **L56 para 93 is dated** ("At the time of publication of this edition"). Cite HSE's live
  newschemecontract page for the Register as the approved class.
- **Places:** lessons 11 to 15 reused lesson 10's first-draft places (Rutland in 11's quiz, Isle of
  Wight in 14 and 18, Bedfordshire in 12 and 14, Moray in 13 and 15). Lesson 10 now uses only
  Rutland of those; the others are the later lessons' to keep or change. Iowa is First Aid
  lesson 15's.
- **Quiz-key near-miss (reviewer P):** lesson 15's last four keys plus 2 equal lesson 10's first
  four at offset 1. The written rule doesn't bar a value-shifted run; if the rule is extended, the
  change is lesson 15's.
- **Quiz keys:** lesson 10 unchanged at 0,1,3,1,3,2.

## 2026-09-26 — Lesson 14 fix pass: notes for later lessons

- **ESF's cable-route line is a UK requirement.** Scope it to UK homes, quote ESF's own "A quality
  cable detector can help track buried cables before you start work" as the reason to scan anyway,
  and say that nothing read covers where cables run in American walls (G-E3 still open).
- **A struck gas pipe:** only National Gas (Great Britain) was read. For Northern Ireland and the US,
  following lesson 9's steps is the course's reading and says so; SoCalGas's "DO NOT attempt to
  control the leak or repair a damaged pipe or meter" is the US line to quote.
- **After a cable hit:** leave the circuit off, Call someone whether or not anything tripped, and
  point to First Aid and CPR lesson 2, "Danger, the call, and recognising cardiac arrest" (its title
  has a comma after "call"), for a person who has had a shock.
- **EPA's asbestos line starts at "Generally,".** `npm run quotes` passes the trimmed version, so
  check it by eye.
- **WIS23 is wood dust at work.** Applying its class M clean-up line to plaster or brick dust is the
  course's reading, labelled.
- **Places now used by lesson 14:** Bedfordshire, Caithness, Dorset and Iowa (quiz), the Isle of
  Wight and the American Southwest (body).
- **Quiz keys:** lesson 14 unchanged at 2,1,0,3,2; lesson 16's fixer changes its own.

## 2026-09-26 — Lesson 13 fix pass: notes for later lessons

- **Methylene chloride is not "banned".** EPA's rule page says supply is prohibited (manufacture,
  processing, distribution, retailers included: for consumer paint and coating removal from November
  2019, all consumer uses from the April 2024 rule), and for a tin a householder already has it says
  only that EPA "is encouraging all consumers to stop using". EPA's VOC page still says to use such
  products outdoors when possible. Any later lesson (19, 20) that mentions it states both, and says
  nothing about what the law allows a householder to do with an old tin.
- **OSHA's "disconnect" is the plug**, on the booklet's own "disconnect it from the receptacle" line.
  OSHA 3080 never mentions batteries; taking out a cordless tool's battery is the course's reading,
  labelled, with the tool's manual first.
- **HSE's outdoor caveat travels with its enclosed-space line.** Where a lesson quotes CIS36's "the
  more enclosed a space, the more the dust will build up", it also gives "do not assume that dust
  levels will be low when working outside with high-energy tools", and never offers a shut room as
  the answer.
- **FFP3, not FFP2, for construction and wood dust.** HSE's sheets set a factor of 20; FFP2 is 10.
  OUTLINE's lesson 13 objective was corrected with a dated note.
- **LFB's battery advice is written for devices.** Applying it to tool packs is the course's reading,
  in quiz stems too; keep "certified technician".
- **Places now used by lesson 13:** Ceredigion, Stirlingshire (replacing Moray), Hawaii, Shetland
  (quiz); Denbighshire and New Mexico (body).
- **Quiz keys:** lesson 13 now 3,1,2,1,0,2, checked against every lesson on disk and lesson 12's keys
  both before and after its own fix.

## 2026-09-26 — Lesson 16 fix pass: notes for later lessons

- **Socias's "43% of fatal falls in the last decade have involved a ladder" is not used**, in lesson
  16, its podcast script or any later lesson. Read as written (all US fatal falls; its source,
  Rockett 2012, unread), it can't be squared with ladder deaths that run to hundreds a year. OUTLINE
  lesson 16 and SOURCES "Stage 4 note, lesson 16" carry the reasoning.
- **Socias's fall heights were recorded for about a third** of the nonfatal cases (11,400 of
  34,000). "Nearly 90% under 16 feet" always carries "where the height was recorded" and "work-related",
  and is a count, not a risk per use (Socias names the missing denominator).
- **CPSC's 65-and-over figures are for "Ladders and step stools"** (the 79 deaths, 16%, 39%), and
  D'Souza's abstract says only "ladder product codes", so never call either "ladders alone" or say
  the two differ by step stools.
- **LA455 section 09**: "Stepladders should not be used to access another level, unless they have
  been specifically designed for this." Now [V] in SOURCES; lesson 16's exercise uses it for loft
  hatches.
- **The Scottish Government's "Installation of alarms"** page is [V] in SOURCES (fit per the maker's
  guidance; battery alarms by adhesive over an asbestos ceiling). Lesson 19 may point to it.
- **Places now used by lesson 16:** Puerto Rico, Guam, Gower, the Great Plains, East Lothian,
  Inverclyde (now a two-storey maisonette).
- **Quiz keys:** lesson 16 now 2,1,0,2,3 (was 2,1,0,3,2, identical to lesson 14's).

## 2026-09-26 — Lesson 15 fix pass: notes for later lessons

- **A US overhead-line distance exists.** 29 CFR 1910.333(c)(3), OSHA's electrical rule for
  employers in general industry, keeps an unqualified worker and the longest conductive object they
  may touch at least "10 ft. (305 cm)" from an unguarded, energized line of 50 kV or below, and has
  de-energizing arranged with "the person or organization that operates or controls the electric
  circuits involved" (SOURCES "Stage 4 note, lesson 15"). Construction's own overhead-line rules were
  not read. Lesson 17 (gutters) gives it beside HSE's 6 m, each labelled, if it needs a US distance.
- **"Protected with insulation":** nothing read says whether a service cable's covering counts. The
  course treats a covered cable as a line until its owner says otherwise, and sends the reader to
  the line's owner to ask whether it can be made dead or protected for the job.
- **"The best there is" is never the course's claim.** Say "the most carefully specified this course
  read".
- **OSHA's rules and the QuickCard carry "for employers" or "workplace advice" at each mention**, not
  only at the first. 1926.1053's scope is 1926.1050(a), construction workplaces "including painting
  and decorating".
- **The QuickCard's top-three-rungs line** extracts whole now and may be quoted: "Do not stand on the
  three top rungs of a straight, single or extension ladder."
- **HSE's no-handhold sentence belongs to leaning ladders**, and is quoted with "or mitigate the
  consequences if one happened". The stepladder three-points sentence is lesson 16's.
- **Exercises that stand a ladder up** limit the reader to one they can raise without extending it,
  by the maker's user instructions (HSE page 3), since the course teaches no method.
- **SOURCES corrected in place:** D38, the synthesis's safety item 4 and Part D note 8 (the 22 are
  under "Ladder", target unstated); RoSPA's whole "Neil" sentence; OSHA (b) has 22 clauses. OUTLINE
  lesson 15 corrected with a dated note.
- **Places:** lesson 15 now uses the Isles of Scilly, Argyll, the Fens, the Rhondda and the Gulf
  Coast (Moray dropped). Lesson 18 reuses the Rhondda; lesson 15 had it first, so the change is
  lesson 18's.
- **Quiz keys:** lesson 15 now 0,2,1,3,2 (was 0,2,3,1,3), clearing the value-shifted run of four with
  lesson 10's keys. No sequence clears value-shifted runs against all of lessons 01 to 18.
