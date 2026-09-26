# Sources: Car Basics

<!-- unread: 2014 MOU, 2024 Toyota Corolla owner's manual, 40 CFR 86.1806, 91 FR 7870, AA breakdown advice, AA car repairs legal advice, AA winter tyres, AAA Electric Vehicle Range Testing, Alliance for Automotive Innovation v. Campbell Memorandum of Decision, ASE electric vehicle certification, ASE xEV, Auto Warranties Routine Maintenance and Repairs: Is Using the Dealer a Must?, Automotive Technician Training, Ballotpedia, Basic Car Care and Maintenance (Johnson County Community College), Be an Ace with Jacks, BMW owner's handbook, Bosch Automotive Handbook, BS AU 159 itself, California DMV inspection requirements, ChargeSafe, Charity Commission TyreSafe, check-mot.service.gov.uk, Citizens Advice Scotland car repairs, City & Guilds 3902, City & Guilds 4290, COMEAP 2008, Congratulations on Your New Tire Purchase, Construction and Use Regulations regulation 32, Consumer Contracts Regulations 2013, Consumer Rights Act 2015 section 9, Consumerline, Date of the first MOT test: consultation response, Directive 98/69/EC, EPA Enforcement Alert on tampering and defeat devices, EPA OBD regulation, EPA tampering enforcement policy, EPA420-R-01-015, Extending first MOT date to 4 years, FCC Text to 911, First Circuit No. 25-1262, Ford Fiesta owner manual, Ford Focus owner manual, GEM Motoring Assist winter driving tips, General Product Safety Regulations 2005, GHSA Move Over, Glovebox Guide, GN103, GOV.UK E10 petrol guidance, Haynes, Hillier's Fundamentals of Motor Vehicle Technology 6th edition, HSG261, IACD-2025-10, IACD-2026-05, IMI Level 2 Light Vehicle Maintenance, IMI Level 3 Light Vehicle Maintenance, IMI Level 4 scope, Independent Garage Association, INDG434, Internal Combustion Engine Fundamentals, ISO 2575 Amendment 1, ISO 2575 annexes, MIRA, MIRA wet braking test, MOT inspection manual Appendix A, MOT inspection manual section 2 Steering, MOT inspection manual section 6 Body structure and attachments, Motor Ombudsman consumer guide, Motor Vehicles (Tests) Regulations 1981, NCSL Move Over, NEISS data, New Car Code, NFPA electric vehicle safety information page, NHTSA 2023 letter on Massachusetts data access law, Nixing the Fix, North Carolina safety inspection, OpenLearn Transport and sustainability, ORNL/TM-2009/021, ORR quality assurance of smart motorways, ORR stopped vehicle detection letter, Owner Related Fuel Economy Improvements, Pennsylvania Vehicle Safety Inspection Program Effectiveness Study, RAC car repairs advice, RAC How to repair a tyre, Retail Motor Industry Federation, right to repair memorandum of understanding, Road Traffic (Northern Ireland) Order 1995, Road Vehicles Lighting Regulations 1989 regulation 27, Roadside Assistance Providers Fatally Struck by Vehicles, Royal Mint 20p specification, RSPCA dogs in hot cars, SAE 2012-01-1717, SAE 2013-01-0311, SAE 2014-01-1614, Sentencing Council brakes defective guideline, Sentencing Council steering defective guideline, Sentencing Council using vehicle in dangerous condition guideline, Smart Motorway Safety Evidence Stocktake and Action Plan 2020, smart motorway stocktake third year progress report, SMMT hybrid definitions, The Pneumatic Tire, The road user and the law, The safety of smart motorways blog, Tire Buyers' FAQ, Transport Committee Rollout and safety of smart motorways, TxDMV inspections page, TyreSafe annual accounts, UKHSA carbon monoxide guidance, UN Regulation 121 consolidated, UN Regulation 13-H, UNECE R121 Rev 1, Utah safety inspection, Vauxhall owner's manual, Vehicle and Traffic Law 398-c, Vehicle Warranty Products Code, Volkswagen owner's manual, VS-77 Inspection Groups and Fee Chart, VW Golf owner's manual, Write It Right -->

*Stage 1 research, 2026-09-26. Written before any lesson is drafted. Five researchers each worked
one part of the subject in parallel, in a fresh context, from a shared brief. Part A covers how a
car works, the textbooks, syllabi and free resources, and fuel economy and emissions as maintenance
bears on them. Part B covers the owner's routine checks, dashboard warning lights, the 12 V battery,
electric and hybrid safety for owners, and winter and summer checks. Part C covers roadworthiness
law in Great Britain and Northern Ireland, UK recalls, and dealing with a garage in the UK. Part D
covers the same for the US: state inspections, NHTSA recalls, federal tyre rules, state repair
laws and the FTC on warranties. Part E covers breakdowns, flat tyres and the roadside in both
countries, including making a road scene safe. The five parts are brought together here. The
synthesiser re-read the tread rule in the Construction and Use Regulations independently of Part C
(next section but one), because it is the number in this course most likely to be stated wrongly.
All reading was done on 2026-09-26 unless a capture date is given. For each source the parts say
what it is good for, what it establishes and exactly how much of it was read.*

**This is a practical, safety-critical course that states law in two countries, and in the US in
several states.** It is not a standards 3.4 domain as a whole (`sensitive_domain: false` stays),
but three places need more care than a Foundation course usually gets:

- **The law.** Every legal statement is general information, not legal advice, and the course says
  so once. Every rule carries its jurisdiction in the same sentence ("In Great Britain ...", "In
  Northern Ireland ...", "In Pennsylvania ..."), because the MOT, the tread rule, the estimate rule
  and the recall rule all change at a border. **"The UK" is right only where Parts C and E read a
  rule that covers Northern Ireland too.** The MOT does not.
- **Public policy questions.** Smart motorways (Part E (c)1), whether periodic inspection reduces
  crashes (Part D (c)), and right to repair (Part D §7) are contested empirical or value questions.
  A lesson that touches any of them gets the neutrality pass even though the course is not flagged
  sensitive.
- **Industry-funded sources.** TyreSafe (backed by tyre makers, carmakers and retailers), The Motor
  Ombudsman (funded by fees from accredited garages), the AA, RAC and AAA (motoring organisations
  that sell breakdown cover and repairs), and the Car Care Council are useful and are labelled
  every time they are cited. None is quoted as though it were a regulator.

A wrong instruction here could hurt someone: a car falling off a jack, a hot radiator cap, a person
standing between a stopped car and traffic, an orange cable. Every number goes through the
fact-check against the source text, not against this file. This file tells the drafter which text
to check against.

**How to read the quotation marks.** The five parts use one convention:

- **[V]**: copied from text the researcher extracted directly: curl with pandoc or a stripper,
  pdftotext on the publisher's PDF, the GOV.UK content API, legislation.gov.uk, the eCFR API, or an
  Internet Archive capture (ID given).
- **[V-img]** (Part B): transcribed by the researcher from an official image (the FMVSS 101 colour
  table, which eCFR publishes only as images).
- **[V, OCR]** (Part E): from the researcher's own OCR of a scanned PDF (the 1998 NHTSA research
  note on jacks). Check spelling against the scan before quoting.
- **[T]**: returned by a summarising tool. **No part used one**, so nothing in this file is [T].
- **Snippet only**: seen only in a search result. Nothing so marked is in quotation marks, and
  nothing so marked may be stated in a lesson as a finding.

Quoted text in the parts keeps the source's own punctuation, including a few dashes. A lesson that
quotes such a line keeps the author's dash (courses/CLAUDE.md rule 4) or picks another sentence.

**The raw extracts are not durable.** The parts name text files under a scratchpad `cb/A/` to
`cb/E/`. That folder is session scratch and will not survive. The quotations were checked when
they were read. A drafter who needs a quoted line re-reads the live source, not a raw file.

## Access and provenance problems a drafter inherits

1. **nhtsa.gov refuses automated readers** (HTTP 403, Akamai) for every page tried, by all four
   researchers who needed it. Every NHTSA page in this file was read from an Internet Archive
   capture taken 18 to 24 September 2026 (IDs in the parts). NHTSA figures that move (tyre deaths,
   Takata counts, Move Over states) are gated for a re-read before a lesson states them.
2. **Also blocked:** cdc.gov, 911.gov, dmv.ny.gov, nysenate.gov and gao.gov (read through captures
   or an identical copy, as the parts record), energysavingtrust.org.uk (capture 20260731174146),
   open.edu (not read), the GOV.UK MOT history service itself (not read), tesla.com, and Ford's
   owner-manual site.
3. **Owner's handbooks actually read.** Toyota Corolla 2023 (PDF, printed page numbers, Part E);
   Honda Civic 2024, Mazda3 (European English) and Nissan LEAF UK 2023 (online, no page numbers,
   Part E); Nissan LEAF 2024 (US) and Ford Maverick 2024, petrol and hybrid (PDFs with page numbers,
   Part B, Ford from an archive capture); Toyota Corolla 1998 (Part B, one line on brake fluid); and
   one page of the Tesla Model 3 UK manual, "Instructions for Transporters", from an October 2024
   capture (Part E). **The full Tesla manual could not be read** (Part B: the only capture is
   truncated), and Ford's online Focus and Fiesta manuals are unreadable live or archived. Every
   figure in a handbook is per-car: torque (Toyota 103 N·m; Honda and Nissan 108 N·m; Mazda 108 to
   147 N·m), coolant-cap waiting time, the space-saver speed. A lesson gives the pattern and tells
   the learner to read their own handbook.
4. **EPA's current OBD page is gone** (404). Part A used EPA fact sheet EPA420-F-03-042 and the
   January 2021 archived page.
5. **The textbooks were read as tables of contents only** (Part A §4): Halderman and Ward,
   *Automotive Technology* 7th edition (Pearson 2025, 136 chapters); Erjavec and Thompson,
   *Automotive Technology: A Systems Approach* 7th edition (Cengage 2020, 55 chapters); Denton and
   Pells, *Automobile Mechanical and Electrical Systems* 3rd edition (Routledge 2023, top-level
   contents); *Auto Upkeep* 5th edition (2025). A lesson may name them as further reading but must
   not attribute content to them beyond the chapter headings. Hillier's 6th edition was not seen at
   all and is on the unread line.
6. **The RAC's DPF page carries an FAQ block that reads as machine-written** and contradicts the
   article above it, and the RAC says Euro 5 was about CO2 (Part A §5). The AA's AdBlue page says a
   spill forms "uric acid crystals". Use the articles' main text and cross-check.
7. **Everything with a date on it moves.** Read on 2026-09-26: the GB MOT maximum fee (£54.85 for a
   car), the DVA fee (£38.00), NI Temporary Exemption Certificates, the DfT consultation on no-MOT
   penalties (closed 11 May 2026, no outcome), the MOT manual (last changed 1 June 2026), US DEF
   derate guidance (changed August 2025, February 2026 and March 2026), California's Move Over
   extension (1 January 2026), the Texas inspection change (1 January 2025), the Massachusetts
   appeal (outcome unknown), the UK block exemption order (expires 31 May 2029). Recheck each at
   drafting.

**The `unread:` line is the build's enforcement.** It combines the five parts' "Not read" lists,
deduplicated. The build matches each entry as a whole word, case-sensitively. These changes were
made so that no source that **was** read is blocked:

- **Tesla Model 3 Owner's Manual** and **Tesla owner's manual** (Part B) are **off the line**. Part
  E read the manual's "Instructions for Transporters" page. Only that page was read: gate G-H2.
- **IMI Level 1** (Part B) is **off the line**. Part A read the IMI Level 1 unit list from IMI's
  own page. What IMI Levels permit a person to do is still gate G-H6.
- The four textbook entries marked "(book text)" and **Auto Upkeep (book text)** (Part A) are **off
  the line**, because their contents lists were read and a lesson may name them as further reading.
  That limit is enforced by the fact-check, not the build.
- **owner's handbook (any maker)** (Part A) is **off the line**. It is not a title, and seven
  handbooks were read by Parts B and E.
- **Wikipedia** (Part D) is **off the line**. The standards allow a Wikipedia link as a starting
  point for names and dates. Nothing in this file rests on Wikipedia.
- **repairer's lien** (Part C) is **off the line**, because it would fail a lesson for naming the
  concept that Citizens Advice and the 1977 Act describe. That the common-law lien itself was not
  read is gate G-G4.
- **2024 Toyota Corolla owner's manual** (Part B) stays on. Part E read the **2023** Corolla
  handbook, which the entry does not match.

## The tread rule, stated exactly

The synthesiser read regulation 27 of the Road Vehicles (Construction and Use) Regulations 1986
(SI 1986/1078) on legislation.gov.uk independently of Part C, and the two readings agree.

- **For cars**, reg 27(4)(d) disapplies the general 1 mm rule in reg 27(1)(f) and (g) for the
  vehicles in reg 27(4)(e), which include "passenger vehicles other than motor cycles constructed or
  adapted to carry no more than 8 seated passengers in addition to the driver" [V], first used on or
  after 3 January 1933. Reg 27(4)(f) then requires that "the grooves of the tread pattern of every
  tyre fitted to the wheels of a vehicle mentioned in sub-paragraph (e) shall be of a depth of at
  least 1.6 mm throughout a continuous band comprising the central three-quarters of the breadth of
  tread and round the entire outer circumference of the tyre." [V]
- **"Breadth of tread"** is defined in reg 27(5) as "the breadth of that part of the tyre which can
  contact the road under normal conditions of use measured at 90 degrees to the peripheral line of
  the tread" [V]. Tie bars and tread wear indicators are excluded from "grooves".
- **Depth is not the only test.** Reg 27(1) also makes it an offence to use a tyre that is not
  inflated fit for the use (1)(b); has a cut "in excess of 25 mm or 10% of the section width of the
  tyre, whichever is the greater ... deep enough to reach the ply or cord" [V] (1)(c); has "any lump,
  bulge or tear caused by separation or partial failure of its structure" [V] (1)(d); or has ply or
  cord exposed (1)(e).
- The regulation was amended as recently as 1 June 2026 (SI 2026/501, goods vehicles). None of that
  amendment touches the car rule, but a lesson cites the regulation "as amended" and the date read.

What a lesson must not say, from Parts B, C and D together:

- **Not "1.6 mm anywhere on the tyre".** It is the central three-quarters, all the way round.
- **Not "3 points per illegal tyre".** The Sentencing Council tyres guideline (Part C): the fine is
  per tyre, "but ordinarily only one set of points apply where several offences committed on the
  same occasion" [V]. The research brief itself carried the per-tyre version.
- **Not "the 20p test shows whether a tyre is legal".** The AA, the only source to give a width,
  says the 20p outer band is "just under 3 mm wide" (Part B). A hidden band shows more than about
  3 mm at that spot; a visible band does not prove the tyre is illegal.
- **Not "the US minimum is 2/32 inch".** It is 2/32 inch in Pennsylvania, New York and Virginia
  (Part D). It is state law. The federal 4/32 and 2/32 figures in 49 CFR 393.75 apply to commercial
  motor vehicles only.

## The first things Stage 1 found, and they shape the course

1. **The driver, not the test, is responsible for roadworthiness at all times** (Part C). GOV.UK:
   a vehicle "can be unsafe even if you have a current MOT certificate". nidirect: the certificate
   "isn't a substitute for regular maintenance". The whole law lesson hangs on this: the MOT or
   state inspection is a snapshot; the offences in the Road Traffic Act 1988 apply every time the
   car is used.
2. **The routine checks have legal weight in Great Britain** (Part C). Under the Road Traffic
   Offenders Act 1988 s.48, a driver who "did not know, and had no reasonable cause to suspect" a
   brake, steering or tyre defect avoids the points and disqualification, though not the fine. The
   owner's checks are what "reasonable cause to suspect" is measured against. This is the best
   reason in the course to check tyres, and a lesson should say so.
3. **The GB MOT is still at three years, then yearly** (Part C). The DfT rejected four years in
   2018 and again in January 2024 ("does not intend to proceed"). Search results claiming a 2026
   change come from SEO sites. RTA 1988 s.47 is the basis, and s.47(9) lets ministers change the
   period. Northern Ireland tests cars at four years, at 17 state-run DVA centres, for £38.00, and a
   car that fails there "should not be on the road, regardless of whether you have time remaining on
   an existing MOT certificate" (nidirect). In Great Britain a car that fails may be driven while the
   old certificate lasts only if no dangerous defect was listed, and it must still be roadworthy.
4. **The US has no national roadworthiness regime** (Part D). The only official count, GAO-15-705
   (August 2015), found 16 states with periodic safety inspection and research on whether it
   reduces crashes "remains inconclusive". Texas ended safety inspection for non-commercial vehicles
   from 1 January 2025 (HB 3297; owners pay a $7.50 fee instead; emissions testing continues in
   named counties). Emissions testing is a separate programme driven by the Clean Air Act and can
   exist with no safety inspection (California's Smog Check). **A lesson teaches the shape, uses
   Pennsylvania, New York, Virginia, Texas and California as worked examples, and sends the learner
   to their own state.**
5. **Recalls are free, within limits, and the lookup does not show everything.** UK: GOV.UK says
   you "will not usually have to pay" for safety recall work; DVSA's code of practice separates a
   "Safety Recall (Stop Drive)" from an ordinary safety recall; an old recall still applies to a
   used car (Part C). US: 49 U.S.C. 30120 gives a free remedy for vehicles up to 15 calendar years
   from first sale and tyres up to 5 years, with 180 days to present a tyre; NHTSA's VIN search may
   not show brand-new, very old, small-maker or non-safety campaigns, and NHTSA advises checking
   twice a year (Part D). Takata: never disable an airbag.
6. **Use the carmaker's pressure, not the tyre's** (Parts B and D). The door-pillar placard (FMVSS
   110 S4.3 in the US; door, fuel flap or handbook in UK sources) gives the vehicle maker's cold
   pressure; the sidewall figure is the tyre's maximum. TPMS is required to warn only at 25 percent
   under, within 20 minutes (FMVSS 138 S4.2), and the law's own owner's-manual text says it "is not
   a substitute for proper tire maintenance". The Highway Code puts correct inflation under MUST and
   says check weekly; NHTSA, AAA and TyreSafe say monthly.
7. **The warning-light colours are a standard, not (everywhere) a law** (Part B). ISO 2575:2021
   clause 5.1 (read from the publisher's free sample): red means "danger to persons or very serious
   damage to equipment, immediate or imminent"; amber a malfunction or longer-term hazard; green or
   blue information. UN R121 fixes oil pressure, coolant temperature and charging telltales as red.
   FMVSS 101 fixes brake red and ABS, ESC and TPMS yellow but leaves oil, temperature and charge to
   the maker. **The stop-now group in every handbook read is oil pressure, coolant temperature,
   brake and (in an EV, per Nissan) charging.** A flashing check-engine light means a misfire that
   "could damage the catalytic converter" (Ford Maverick handbook p. 164) and is more urgent than a
   steady one. In Great Britain a lit engine MIL, airbag or ESC lamp is an MOT Major fail (Part C).
8. **UK and US breakdown advice differ on the one question learners most need** (Part E). UK
   (Highway Code rules 275 to 277, National Highways): get off the road; if you cannot, get out on
   the side away from traffic and behind the barrier, and "DO NOT return to your vehicle even if
   it's raining, cold or dark". US (AAA, California DMV handbook): default to staying in, belted,
   on the shoulder, and get out only if there is a guardrail or no room. **Both agree on a live
   lane: stay in, seat belts on, hazards on, call 999 or 911.** A lesson teaches the decision and
   each country's advice as its authorities give it, not one slogan.
9. **Every handbook read forbids anything under the jack; the RAC recommends a plank** (Part E).
   Toyota p. 373, Honda, Mazda and Nissan all say so in near-identical words. The handbooks govern.
   All four also say never put any part of your body under a car on a jack; HSE says "do not rely on
   jacks alone". The only injury data found is an NHTSA 1998 research note (CPSC data, 1994 to 95):
   an estimated 4,822 emergency-room cases, 74% struck by the falling vehicle, 19% while changing a
   tyre. It is old and from a small sample, and a lesson says so.
10. **"Temporary" means temporary.** Every handbook read limits a space-saver or sealant repair to
    50 mph (80 km/h); C&U reg 27(3) is the GB legal basis for the space-saver limit (Part C). A
    proper puncture repair is off the wheel, in the central tread, at most 6 mm, plug plus patch
    (BTMA's summary of BS AU 159; USTMA: "A plug alone is an unacceptable repair").
11. **The fuel-economy numbers everyone repeats have been withdrawn** (Part A). fueleconomy.gov,
    dated from its own archive captures: air filter "as much as 10 percent" (2007) became no gain on
    fuel-injected engines (2010); tyre pressure "around 3.3 percent" became "0.6% on average" (27
    June 2016); the "4%" tune-up and "40%" oxygen-sensor figures were dropped between 2021 and 2023.
    Maintenance matters for safety and for the engine. Its fuel-economy payoff is small, and the
    lesson says so with the dates.
12. **You do not have to use the dealer to keep the warranty, in either country.** US: 15 U.S.C.
    2302(c), 16 CFR 700.10 and the FTC (Part D). UK: CMA guidance on the motor vehicle block
    exemption, paras 5.36 to 5.41, subject to a causal-link exception where a bad repair or third-
    party part caused the fault (Part C). An "extended warranty" bought separately is a service
    contract, not a warranty (FTC).
13. **How far over an estimate a garage may go is state law, and "10 percent" is a misconception**
    (Part D). California B&P 9884.9: written estimate always, no tolerance without consent, old parts
    back on request (9884.10). Florida: written estimate over $150, the greater of $10 or 10 percent,
    capped at $50. Michigan: the lesser of 10% or $50. Ohio: over $50 the customer chooses, then ten
    per cent. New York: written estimate on request. UK (Part C): a quote binds, an estimate does not
    (Citizens Advice); where no price was agreed the Consumer Rights Act 2015 s.51 implies "a
    reasonable price"; the garage can keep the car while a bill is disputed but cannot sell it
    (Citizens Advice; Torts (Interference with Goods) Act 1977 Sch 1 para 7, England, Wales and NI).
14. **EVs need less maintenance, not none** (Parts A and B). AFDC says "less"; AA breakdown data
    (2021) puts the 12 V battery and tyres at the top of EV call-outs. Every EV has a 12 V battery,
    can be jump-started, and cannot be a donor (Nissan). Orange cables mean no user-serviceable
    parts. An EV goes on a flatbed or with the driven wheels off the ground and cannot be push- or
    tow-started (Nissan, Tesla).

## Boundaries with other Core courses, settled here so no lesson re-opens them

- **First Aid and CPR** (T3, published). This course inherits a promise. First Aid lesson 2 says
  "Car Basics and Personal Safety, later this term, cover the roadside." Lesson 11 says "making a
  road safe belongs to Car Basics, later this term" and that "Car Basics, later this term, can
  assume you know the road-scene danger check and to keep an injured person still, with the airway
  first." **So this course owns the vehicle and road side of an incident**: where to stop, hazard
  lights, sidelights, warning triangles, where people stand, not stopping to help on a motorway
  (National Highways), what to tell the 999 or 911 operator about location (marker posts, driver
  location signs, a mapping app, eCall), dangerous-goods vehicles (Rule 285), and Highway Code
  rules 283 to 287 on incidents. **It does not teach casualty care.** Rule 283's "DO NOT move
  injured people" is quoted as the Highway Code gives it and the lesson links back to First Aid
  lessons 2 and 11. Heatstroke in a child left in a car is First Aid's (lesson 15); this course owns
  "never leave a child or animal in a car" and why. Carbon monoxide symptoms are First Aid's (lesson
  14) and Home Repair's (lesson 11); this course owns the snow-blocked exhaust.
- **Personal Safety** (T3, published). Lesson 6 covers being out and away; First Aid's lesson 2
  names Personal Safety as covering the roadside too. This course keeps the breakdown procedure;
  Personal Safety keeps threat from other people. A stranded lone driver's personal safety is a
  one-line link there.
- **Home Repair and Maintenance** (T3, published). Home Repair owns tools, dust, fumes and working
  safely in general (lessons 13 and 14) and carbon monoxide in the home. **This course keeps car-
  specific kit only**: the car's own jack, a tyre gauge, a tread gauge, jump leads or a booster
  pack. Axle stands and getting under a car are garage work and are not taught as a procedure.
  Home Repair lessons 22 and 23 (who may do what, hiring a tradesperson) are the model for the
  garage lessons and are linked, not repeated: the Consumer Rights Act ss.49 to 52 are taught there
  for services generally and here only as they apply to a garage.
- **Personal Finance Fundamentals** (T2, published). Lesson 3 owns car loans; lesson 8 owns
  insurance, including car insurance. This course says only that driving an unroadworthy car "may"
  affect insurance, with the sources' own hedge (Part C gate), and links there. Whether an extended
  service contract is worth buying is Personal Finance's question; this course explains what one is.
  Warranty robocall scams are one line with a link to Personal Finance lesson 10.
- **A driving course does not exist.** Checked against `curriculum/TAXONOMY.md` on 2026-09-26: no
  course on the map teaches driving skills, the driving test or road craft. **This course does not
  teach driving.** It uses Highway Code rules only where they bear on the car's condition (Annex 6,
  rules 89, 97, 116, 123, 229) or on a breakdown or incident (rules 275 to 287, and the motorway
  rules on hard shoulders, emergency areas and red X). Blowout handling (NHTSA: hold speed, steer,
  slow gradually) is the one borderline item and is kept because it is what to do when the car
  fails. If a driving course is added later, it takes weather driving technique; this course keeps
  preparing the car for the weather.
- **Emergency Preparedness** (T24, planned) owns an emergency kit for the household. This course
  keeps the car's kit.
- **Energy: How the World Is Powered** (T9, planned) owns the energy and climate case for or against
  electric cars. **This course takes no side on whether to buy an EV, a hybrid or a diesel.** It
  explains how each works and what each needs from its owner. The one purchasing remark the sources
  support, that the AA and RAC advise against a DPF diesel for mainly short urban trips, is
  attributed to them.

## What the field considers essential (the outline's backbone)

In the order the ideas build. The parts' own (a) lists have the detail and the sources.

1. **The owner's handbook is the authority.** Every source that gives an interval, a pressure, a
   fluid grade, a jacking point or a torque sends the reader to the handbook: BAR, CalRecycle,
   fueleconomy.gov, AAA, the RAC, the Highway Code Annex 6, and every handbook read.
2. **One system map.** Halderman, Erjavec and Thompson, Denton and Pells, the ASE 2024 standards,
   the IMI Level 1 units and Auto Upkeep all divide the car the same way: engine (lubrication,
   cooling, fuel, ignition, exhaust and emissions), electrical (12 V battery, starting, charging,
   lighting), brakes, steering and suspension, tyres and wheels, transmission and driveline, heating
   and air conditioning, and now hybrid and electric. ASE defines high voltage as "greater than 30
   VAC or 60 VDC" and makes xEV safety a required task.
3. **How each powertrain works**, in enough depth to explain what the owner's checks are for:
   the four-stroke cycle, spark and compression ignition, oil and coolant, the DPF and AdBlue on a
   diesel; motor, power electronics, traction battery and regenerative braking on hybrids and EVs.
4. **Brakes are hydraulic and the fluid absorbs water** (FMVSS 116 requires the "ABSORPTION OF
   MOISTURE" warning and sets wet boiling points). A falling level means worn pads or a leak. A red
   brake light is stop-now. ABS keeps steering, and does not promise shorter stops (Highway Code
   Rule 120).
5. **Tyres are the most checked and most regulated part.** Pressure, tread, damage, age; the placard
   and TPMS; the sidewall code (TIN date code, 49 CFR 574.5; UTQG, 49 CFR 575.104).
6. **The routine checks**: tyres, oil, coolant (only cold), brake fluid, screenwash, lights, wipers
   and glass, and the warning lights at start-up (Highway Code Annex 6: weekly for pressures, "stop
   and investigate" for warnings that stay on).
7. **Warning lights by colour and by the stop-now four.**
8. **The 12 V battery and jump-starting**: hydrogen, acid, the final negative clamp on bare metal
   away from the battery (HSE INDG139: at least 15 cm), the handbook's jump points.
9. **High voltage is not for owners.** Orange cables, "no user serviceable parts", silent starts,
   fire and flood.
10. **The seasons**: in winter, battery, antifreeze, washer fluid, lights, wipers, and clearing all
    glass and lights before driving (Rule 229, a legal duty); in summer, cooling, tyres, battery,
    and never a child or animal left in the car.
11. **Stopping safely when the car fails**, UK and US, including a live lane.
12. **Flat tyres**: the decision whether to change it at all, then the handbook procedure, then
    temporary means temporary, then a proper repair.
13. **The law on the car's condition**: the driver's continuing duty; GB's RTA ss.40A, 41A, 42 and
    47 with the C&U Regulations; NI's DVA test; US state inspection and state tread law.
14. **The periodic test**: the MOT's defect categories and history; DVA; state inspection and Smog
    Check.
15. **Recalls**: how to check, what is free, what "stop drive" means.
16. **The garage**: choosing (IMI and ASE as individual credentials; the Motor Ombudsman; BAR as a
    regulator), service schedules and records, warranties, quotes and estimates, authorising extra
    work, the invoice and the old parts, disputes.
17. **Fuel economy and emissions as maintenance bears on them**: what the current federal figures
    say, which folk figures were withdrawn, what a DPF needs, and why a "delete" is illegal.

## Common misconceptions

Each is named by a source in a part. The parts' (b) lists have the sources and exact words.

| # | Misconception | Correction | Part |
|---|---|---|---|
| 1 | A current MOT means the car is roadworthy | The certificate records one day; the driver's duty is continuous (GOV.UK, nidirect) | C |
| 2 | An MOT is a service | It does not cover engine, clutch or gearbox condition (GOV.UK) | C |
| 3 | Three penalty points per illegal tyre | Fine per tyre; ordinarily one set of points (Sentencing Council) | C |
| 4 | Inflate to the number on the tyre | That is the tyre's maximum; use the carmaker's placard figure (NHTSA, FMVSS 139) | B, D |
| 5 | The TPMS light will tell me when to add air | It warns only at 25 percent under (FMVSS 138) | B, D |
| 6 | The 20p test shows whether a tyre is legal | The band is about 3 mm (AA); it flags tyres well above 1.6 mm | B |
| 7 | Every recall means stop driving | Only a "Stop Drive" recall does (DVSA code) | C |
| 8 | A clear VIN check means no recall | Recent, very old and small-maker recalls may not show (NHTSA) | D |
| 9 | Using an independent garage voids the warranty | Not in the US (Magnuson-Moss) or, in principle, the UK (CMA) | C, D |
| 10 | An estimate is a fixed price / a shop can always go 10% over | Quote versus estimate (Citizens Advice); the tolerance is state law and California has none | C, D |
| 11 | Change the oil every 3,000 miles | "out of date" (CalRecycle); follow the handbook or the oil-life monitor | A |
| 12 | Premium fuel helps any car | No benefit unless the car was designed for it (fueleconomy.gov) | A |
| 13 | A clogged air filter hurts fuel economy | Not on fuel-injected engines since fueleconomy.gov's 2010 revision | A |
| 14 | Warm the engine up before driving | Drive off gently after about 30 seconds (fueleconomy.gov); idling on a public road can be an offence (Rule 123) | A |
| 15 | EVs need no maintenance / have no 12 V battery / can jump another car | Less maintenance (AFDC); every EV has a 12 V battery; Nissan says the LEAF "cannot be used as a booster vehicle" | A, B |
| 16 | ABS stops you shorter | "do not assume" it will (Highway Code Rule 120) | A |
| 17 | AdBlue is a fuel additive | It goes in its own tank; in the fuel tank it causes serious damage (AA) | A |
| 18 | Winter kills batteries | Heat does most of the damage; winter is when they fail (AAA) | B |
| 19 | A window open makes a hot car safe | "does little to change the interior temperature" (NHTSA) | B |
| 20 | The hard shoulder is safe | Rule 275: "less protection"; National Highways' own report says so | E |
| 21 | Put a plank under the jack | All four handbooks forbid anything under the jack (the RAC recommends a plank) | E |
| 22 | A plug from outside is a repair | "A plug alone is an unacceptable repair" (USTMA; BTMA) | E |
| 23 | Stop and help another stranded driver on the motorway | "Don't stop to assist another vehicle" (National Highways) | E |
| 24 | Put the car in neutral for the tow truck | "A common mistake" (AAA Club Alliance) | E |
| 25 | Certified means honest | "certification alone is no guarantee of good or honest work" (FTC) | D |
| 26 | Every US state inspects cars | 16 in 2015 (GAO), fewer since | D |
| 27 | Treadwear 400 means 40,000 miles | UTQG is comparative only (49 CFR 575.104) | D |
| 28 | Classic cars need not be roadworthy | Exempt from the MOT, not from roadworthiness (GOV.UK) | C |

## Contested questions and the positions on each

| # | Question | Classification | Where |
|---|---|---|---|
| 1 | When to replace tyres: the legal floor (1.6 mm; 2/32 inch in inspection states) or earlier (3 mm TyreSafe and RAC; 4/32 inch AAA)? | **Contested empirical** with a value element. For earlier: TyreSafe (industry-backed) and RAC citing MIRA's 44% wet-braking figure (report unread); AAA's own 2018 tests. Against: Michelin, on TyreSafe's own site, "tread depth does not guarantee safe tyres", arguing for full use on cost and environmental grounds; AAA says the 2/32 guidance "minimizes manufacturer warranty costs". Teach the legal floor as law and the earlier point as a recommendation, naming who recommends it | B (c)1 |
| 2 | Tyre age | **Established** that tyres age; **contested** how fast. NHTSA "six to 10 years", some makers six, RAC five or six for low-mileage cars. No UK legal age limit for private cars | B (c)2, D (c) |
| 3 | Are all-lane-running smart motorways as safe as motorways with a hard shoulder? | **Contested empirical** with a **value** element. National Highways (fourth year report, December 2024): all types safer "in terms of deaths or serious injuries", but stopped-vehicle injury collisions 0.29 on ALR against 0.19 conventional. Named critic: Edmund King, AA president, for reinstating the hard shoulder. Settled fact: new ALR paused January 2022, new smart motorways cancelled April 2023 for "lack of public confidence" and "cost pressures". Attribute each; say the government's stated reason for cancelling was confidence and cost | E (c)1 |
| 4 | Stay in the car or get out? | **Established**, but setting-dependent and framed differently by UK and US authorities (finding 8) | E (c)2 |
| 5 | Do periodic safety inspections reduce crashes? | **Contested empirical.** GAO-15-705: "remains inconclusive". PennDOT cites its own 2009 study as finding its programme effective (snippet only, unread). States have gone both ways (Texas ended it in 2025) | D (c) |
| 6 | Right to repair and vehicle data (Massachusetts) | **Contested**, legal and value. Owner and independent-shop access against automakers' cybersecurity and safety claims. District court upheld the 2020 law in February 2025; the appeal outcome is unknown. Mention only if needed, both sides named, and never describe the 2014 MOU (unread) | D §7 |
| 7 | Should the GB first MOT move to four years? Should no-MOT carry points? | **Policy, settled for now** on four years (rejected 2018 and 2024); **undecided** on penalties (consultation closed May 2026, no outcome). State the current rule | C (c) |
| 8 | Oil-change intervals: normal or severe schedule? | **Contested empirical and partly commercial.** Read the handbook's definition of severe service honestly, or use the monitor | A (c)2 |
| 9 | Windows or air conditioning at speed | **Contested empirical**; no page read measures the gap (corrected 2026-09-26 at lesson 12 Stage 4: this row said "small either way", which no source read supports). EST: windows even at higher speeds; fueleconomy.gov citing two SAE papers (not labelled Oak Ridge by the page): AC at highway speed. Not a rule | A (c)1 |
| 10 | Charging practice: extension leads, 80%, overnight | **Contested practice.** Nissan and NFPA: never an extension cord; ESF allows an outdoor-rated reel as a fallback. ESF lists overnight charging under AVOID while NHTSA advises plugging in at night in winter. Teach the strict version and the handbook; do not teach "80%" as fire safety | B (c)7, 8 |
| 11 | Charging light: stop now or check soon? | **Practical judgement**, handbook governs. RAC: do not drive; Highway Code and Ford: check as soon as possible [Stage 4 note, lesson 05, 2026-09-26: wrong for the Highway Code, whose general advice for a light that comes on while driving is "stop and investigate"; see B (c)5's note]; Nissan (EV): stop immediately. Explain why (the car runs on the battery until it is flat) | B (c)5 |
| 12 | Jump-lead removal with engines running or off | **Established only** that the order reverses and the handbook governs; HSE, Ford and the AA differ | B (c)6 |
| 13 | Repairing run-flat tyres | **Contested practice** among industry bodies and makers | E (c)3 |
| 14 | Is an extended service contract worth buying? | **Value / individual judgement.** Personal Finance's question | D (c) |

## UK vs US differences

- **Vocabulary**: petrol / gasoline, bonnet / hood, boot / trunk, tyre / tire, cambelt / timing belt,
  handbrake / parking brake, hard shoulder / shoulder, space saver / compact spare, engine management
  light / check engine light (both the MIL), AdBlue / DEF, MOT / state inspection. Pick one per
  sentence and gloss the other once per lesson.
- **Units**: tread in mm against 32nds of an inch; pressure in psi and bar against psi and kPa;
  torque in N·m against lbf·ft; 80 km/h against 50 mph.
- **The periodic test**: one national MOT in Great Britain at approved private garages with a legal
  maximum fee; a state-run test at four years in Northern Ireland; state programmes or nothing in
  the US.
- **The legal duty**: national criminal law with roadside enforcement and penalty points in Great
  Britain; state law in the US, enforced mainly at inspection in inspection states.
- **Tread**: 1.6 mm across the central three-quarters (GB); 2/32 inch in two adjacent grooves in the
  states read. Nearly the same number, different law, different measuring rule.
- **Recalls**: DVSA lookup by registration and a code of practice with makers (UK); NHTSA and a
  statutory free remedy with 15- and 5-year limits, VIN lookup (US).
- **Garage law**: the Consumer Rights Act 2015 nationwide, with industry ADR (UK); state repair acts
  with estimate, authorisation and old-parts rules, and a state regulator in California (US).
- **Warranty and independent servicing**: competition law and CMA guidance (UK); Magnuson-Moss and
  the FTC rule (US). Same answer, different law.
- **Credentials**: IMI and IMI TechSafe (UK, voluntary); ASE for individuals and ASE Education
  Foundation for programmes (US, voluntary); Michigan licenses mechanics itself.
- **Warning-light colours**: UN R121 fixes more of them than FMVSS 101 does.
- **Breakdowns**: out and behind the barrier (UK) against in and belted unless there is a guardrail
  (US); triangles 45 m back but never on a motorway (UK advice) against no federal rule for private
  cars (US; FMCSA 392.22 is commercial); smart motorways and emergency areas exist only in England;
  Move Over laws exist in every US state for emergency vehicles, and in some for any car with
  hazards on.
- **Emergency numbers**: 999 (UK; 112 also works, not verified in the parts); 911 (US). National
  Highways' 0300 123 5000 is for England's motorways and major A roads.
- **Diesel**: common in UK cars, rare in US cars. AdBlue and the DPF are UK car issues; DEF is mainly
  a US truck issue.
- **Charging**: UK 230 V domestic, Type 2 and CCS, a dedicated charge point by a qualified
  electrician; US Level 1 (120 V) and Level 2 (240 V). UK charging facts are gated (Part A (f)7).
- **Hot-car deaths**: NHTSA counts US child deaths ("In 2025, 31 children"); no UK figure was found.

## Safety-critical guidance

What a lesson must say, and must never say. The parts' (e) lists have the sources.

**Must say**
- Stop somewhere designed for stopping if you can; on a fast road, go left; hazards on; get
  everyone out on the side away from traffic and behind the barrier (UK), or stay belted if the
  setting calls for it (US, and a live lane anywhere); call 999 or 911.
- Never open a hot coolant cap or reservoir. Wait until the engine "has cooled naturally" (Highway
  Code Annex 6); Ford says wait at least 10 minutes, others say until cold; the handbook governs.
- A red brake light or a falling brake-fluid level means stop and find out why, not top up and carry
  on. Brake fluid is poisonous and strips paint.
- Oil pressure and coolant temperature lights: stop safely and switch off.
- A flashing check-engine light: ease off and get it checked promptly (Ford p. 164).
- Engine fire: do not open the bonnet; get everyone out; call the fire service (Annex 6). EV or
  hybrid fire: get out, get well away, call 999 or 911 and say it is an electric or hybrid car. A
  damaged EV is kept well away from buildings (NHTSA 50 ft; Ford 15 m).
- Jump-starting: the handbook's procedure and jump points; no flames or sparks; eye protection; never
  jump a frozen, damaged or leaking battery; final negative clamp on bare metal away from the
  battery.
- An EV or hybrid can start or move silently; switch off, Park, parking brake, key away before
  opening the bonnet.
- Changing a wheel: only if you can do it "without putting yourself or others at risk" (Annex 6);
  firm level ground, well away from traffic; chock the diagonally opposite wheel; loosen before
  lifting; the maker's jack at the maker's jacking point; nothing under the jack; no part of your
  body under the car; raise only enough; re-torque as the handbook says.
- Space savers and sealant are for getting to a repair, at no more than the handbook's speed.
- Snow: clear the exhaust before running the engine to keep warm, and run it only in short spells
  (NHTSA, CDC, Toyota p. 46).
- Never leave a child or animal in a car; lock the car so children cannot climb in (NHTSA).
- Takata or any airbag recall: never disable the airbag; follow a "Do Not Drive" notice.

**Must never say**
- Any roadside repair, wheel change or triangle placement on a motorway, hard shoulder or emergency
  area (Rule 277, National Highways).
- "Put a plank or block under the jack."
- "Get under the car to look" at the roadside, or any procedure using axle stands. That is garage
  work.
- One torque figure, one space-saver speed or one coolant wait as universal.
- Any instruction to touch, cut, probe or open an orange cable, a traction battery or an inverter.
- A DPF, EGR or catalytic converter "delete" as an option, except to say it is illegal (C&U reg
  61A in GB; 42 U.S.C. 7522 in the US) and fails the test.
- "Charge to 80% to prevent fires" as a safety fact.
- That the 45 m triangle distance or hazard use when stopped is a legal duty. They are Highway Code
  advice ("should"), not MUST rules.
- Anything about casualty care beyond the link to First Aid.

## Best existing free resources (to link, not duplicate)

Part A's link table has the live status of 28 links on 2026-09-26. The ones a lesson is likeliest to
send a learner to:

- **The Highway Code** on GOV.UK: Annex 6 (vehicle maintenance), rules 275 to 287 (breakdowns and
  incidents), the motorway rules. Cite by rule number; the page slugs do not match the titles.
- **GOV.UK: Getting an MOT, Check the MOT history of a vehicle, Check if a vehicle has been
  recalled.** nidirect for Northern Ireland.
- **National Highways**: "Go left" breakdown advice and "How to check your vehicle".
- **NHTSA**: Recalls (VIN lookup), Tires, Winter Weather Driving Tips, Heatstroke. Link the live
  pages; this file read them from captures.
- **fueleconomy.gov**: keeping your vehicle in shape, driving more efficiently, gas mileage tips.
- **AFDC** (afdc.energy.gov): how hybrid, plug-in hybrid and all-electric cars work.
- **California BAR** consumer pages; **FTC** "Auto Warranties and Auto Service Contracts" and auto
  repair basics.
- **Citizens Advice**: "Problem with a car repair".
- **The learner's own owner's handbook**, which every source ranks first.

Commercial and industry sources (TyreSafe, the AA, RAC, AAA, the Motor Ombudsman) are linked for
what they do well and labelled. No lesson links to a sales page.

## Gates: what must be read before a lesson states it

Consolidated from the five parts' (f) lists and deduplicated. Each gate names the lesson area it
blocks. The parts' own lists keep the detail. **Closed in this synthesis:**

- Part A gate 1 (flashing MIL) is **closed** by Part B's reading of the Ford Maverick handbook p. 164
  ("If it flashes, engine misfire could be occurring ... could damage the catalytic converter"). The
  claim that it can start a fire remains unsourced and is not made.
- Part B gate 8 (a lit engine light is an MOT Major fail) is **closed** by Part C's reading of the
  MOT inspection manual: "Engine MIL inoperative or indicating a malfunction" is Major.
- Part B gate 6, the washer half, is **partly closed** by Part C: C&U reg 34(6) requires every wiper
  and washer fitted to be maintained in efficient working order, and the MOT manual makes washers
  "not providing sufficient fluid to clear the windscreen" a Major defect. Whether an empty
  reservoir on the road is itself an offence is still a question of reg 34's text: a lesson quotes
  the regulation and does not paraphrase the AA's claim.
- The tread rule is closed by two independent readings (above).

**Hardware and how it works (G-H)**
- G-H1. Alternator, fuses, lighting, steering and suspension mechanisms, and the word "inverter": no
  free official source was read. Draft from a textbook chapter read in full, or a maker's technical
  page (Part A (f)3, 4).
- G-H2. Tesla: only "Instructions for Transporters" (October 2024 capture) was read. Recheck the live
  page before quoting speeds or distances.
- G-H3. Timing belt against chain life, and interference engines: commercial snippets only (A (f)2).
- G-H4. Brake-fluid change interval (commonly two years in UK handbooks) and brake fluid damaging
  paint: from a handbook (A (f)5). That the level falls as pads wear rests on the 1998 Toyota
  handbook alone (B (f)3).
- G-H5. Hybrid categories (micro, mild, full) and a mild hybrid's voltage: AFDC's "400 to 1,000
  volts" is too broad; use a maker's figure (A (f)13, 15).
- G-H6. What IMI Levels 1 to 4 and TechSafe permit; ASE xEV certification (B (f)12).
- G-H7. Hydraulic power-steering fluid check: no handbook read for a car that has it (B (f)9).
- G-H8. Maker oil intervals by name (A (f)6); the unnamed DOE study behind the EV battery-life figure
  (A (f)11); a newer AA or RAC figure on EV breakdown causes than 2021 (A (f)12).
- G-H9. UK fuel facts (RON 95, E10) and UK charging facts (230 V, Type 2, kW, chargepoint rules,
  whether the network operator must by law be told): not read (A (f)7, 8; B (f)7).
- G-H10. EOBD fitment dates (Directive 98/69/EC); the EPA OBD regulation behind the US check-engine
  light (A (f)9; B (f)11).
- G-H11. US DEF inducement behaviour for light-duty cars: read the EPA guidance letters and date any
  statement (A (f)10).

**Tyres (G-T)**
- G-T1. The 20p outer band at "just under 3 mm" rests on the AA alone. Attribute it (B (f)1).
- G-T2. MIRA's "44%" wet-braking figure: attribute to TyreSafe and the RAC; the report is unread
  (B (f)2).
- G-T3. TPMS on all UK cars built after 1 November 2014 (the AA): read the regulation (B (f)5).
- G-T4. BS AU 159: only the BTMA's summary of the 1997 "f" issue was read. Say "the British Standard
  BS AU 159, as summarised by the BTMA". Do not say repairs outside it are illegal (TyreSafe's claim)
  (E (f)).
- G-T5. Run-flat limits (50 miles at 50 mph is TyreSafe's): no run-flat handbook read (E (f)).
- G-T6. NHTSA's 511 tyre-related deaths in 2024: re-read before stating (D (f)11).

**The law (G-L)**
- G-L1. The Motor Vehicles (Tests) Regulations 1981: contents list only. No regulation number or text
  (C (f)2).
- G-L2. MOT manual sections not read: 0, 2 (steering), 6 (body), 9, 10 and the appendices. Read the
  section before citing it; cite the manual with its date (C (f)1, 12).
- G-L3. Insurance: keep the sources' hedge ("may invalidate"; the ABI says a lapsed MOT "would not
  necessarily" do so). Insurance itself is Personal Finance's (C (f)3).
- G-L4. Scotland: fines, penalties and consumer law not read, and the 1977 Act does not extend there
  (C (f)4).
- G-L5. Sentencing Council guidelines for brakes, steering and dangerous condition: not extracted.
  Only the tyres guideline was read (C (f)7).
- G-L6. Whether the GOV.UK MOT history service shows advisories: the service was not readable
  (C (f)6).
- G-L7. NI Temporary Exemption Certificates; the no-MOT penalties and in-use emissions consultations:
  recheck before publishing (C (f)8, 9).
- G-L8. Consumer Rights Act 2015 goods sections (ss.9 to 24) for parts fitted during a repair;
  General Product Safety Regulations 2005 (C (f)10, 11).
- G-L9. Whether UK law requires a car to carry a warning triangle: not read. Do not state either way
  (E (f)).
- G-L10. National Highways' fixed penalty for a foreseeable breakdown (running out of fuel): needs
  the primary law (B (f)6).
- G-L11. A current list of US states with periodic safety inspection. Say "16 states at the last
  official count in 2015, and fewer since", or read each state's page (D (f)1).
- G-L12. That California has no periodic safety inspection: an inference. Confirm from the
  California DMV before stating it flatly (D (f)2).
- G-L13. "No federal tread minimum for private cars": phrase as "federal tread rules apply to
  commercial vehicles; for private cars tread law is set by states" (D (f)3).
- G-L14. New York repair-shop registration (VTL § 398-c); inspection fees in New York and
  Pennsylvania (D (f)9, 10).
- G-L15. The Move Over count (NHTSA's "19 states and DC" is undated) and the February 2026 amendment
  to 49 CFR 392.22 (E (f)).
- G-L16. EPA and DOJ tampering enforcement in 2025 to 2026: state only the statute (D (f)6).
- G-L17. Right to repair: the 2014 MOU and the First Circuit outcome (D (f)4, 5).

**Garages (G-G)**
- G-G1. The FTC's older "Is Using the Dealer a Must?" article: cite the current page instead (D (f)8).
- G-G2. PennDOT's 2009 effectiveness study: do not cite (D (f)7).
- G-G3. TyreSafe's funding figure: say "backed by tyre makers, carmakers and retailers" (B (f)13).
- G-G4. The common-law repairer's lien: no primary read. State only what Citizens Advice says (the
  garage can keep the car while the bill is disputed and cannot sell it) and the 1977 Act's
  schedule (C (f)5).

**Roadside and breakdowns (G-R)**
- G-R1. The ORR's stopped vehicle detection letter and the AA's KSI figures (1.31 and 1.43): quote
  the ORR only through the AA, or read the letter (E (f)).
- G-R2. A UK official source on snow-blocked exhausts in a stranded car: none found. Use NHTSA, CDC
  and the Toyota handbook, attributed (E (f)).
- G-R3. The AAA Foundation's 2,100 roadside deaths figure: attribute to the AAA Foundation (E (f)).
- G-R4. HSE HSG261 and INDG434: not read (E (f)).
- G-R5. Text-to-911 availability: snippet only (E (f)).
- G-R6. EV fire frequency against petrol and diesel: no normalised primary dataset. Make no
  comparative claim (B (f)10).
- G-R7. Takata figures (67 million inflators, 28 US deaths): re-read before stating (D (f)11).

## Open concerns about scope

1. **The course is wide.** It spans how four powertrains work, the checks, the law in two countries
   and several states, breakdowns, and garages. The last course's lessons all ran long, so the
   sequence below plans **24 smaller lessons**, each meant to sit well under 100 minutes, and Stage 2
   should split rather than merge if a lesson grows. The measured minutes decide, not the plan.
2. **How far to teach mechanism.** Deep enough that each owner's check has a reason (oil because
   metal slides on metal; coolant because combustion heat has to go somewhere; brake fluid because
   the pedal pushes liquid). Not so deep that it becomes a technician course. The free official
   sources run out at the alternator, steering and suspension (G-H1), so those lessons need a
   textbook chapter read in full before drafting.
3. **The US cannot be covered state by state.** Part D read five states for inspection and five for
   repair law. Teach the shape, use named states as worked examples, and send the learner to their
   own state. Do not claim coverage the research lacks.
4. **Scotland and Wales.** The MOT and the RTA apply across Great Britain, but Scottish consumer law
   and the 1977 Act's reach differ (G-L4). The garage lessons name England, Wales and Northern
   Ireland where the source does, and say Scotland differs.
5. **What owners do by hand.** The course teaches checks, topping up screenwash, oil and coolant
   (cold), reading warning lights, jump-starting, and changing a wheel where safe. It does not teach
   changing oil, pads, bulbs behind panels, or anything under the car. Bulbs and wiper blades are a
   handbook-by-handbook judgement: the lesson points to the handbook and does not generalise.
6. **Industry-funded sources are everywhere in this subject.** The consumer-facing tyre, breakdown
   and repair advice is overwhelmingly from bodies that sell tyres, cover or repairs. The course
   labels them, prefers the regulator or the handbook where both exist, and says where they
   disagree with each other (the plank, the 20p test, the extension lead).
7. **Three places the institute takes no side**: when to replace tyres above the legal floor, smart
   motorways, and whether inspections work. Right to repair joins them if a lesson mentions it.
   Each is attributed and not resolved editorially. Whether to buy an EV is out of scope.

## Suggested lesson sequence (for Stage 2 to confirm)

Twenty-four lessons in six groups. Each is sized to one sitting and meant to stay well under 100
minutes; if Stage 2 finds one growing past about 70, it splits.

**How a car works**
1. What a car is made of, and why the handbook comes first (the system map; UK and US words; the
   handbook as the authority; what this course will and will not teach)
2. The engine: petrol and diesel (four strokes, spark and compression, oil, cooling, air and fuel)
3. Diesel exhaust: the DPF and AdBlue, and what they need from how the car is driven
4. Hybrids and electric cars (motor, power electronics, traction battery, regenerative braking,
   charging, and why there is still a 12 V battery)
5. Electricity in every car: the 12 V battery, charging, fuses, lights
6. Brakes: hydraulics, pads and discs, brake fluid, ABS
7. Steering, suspension, wheels and the rest of the chassis

**Checks and warnings**
8. Tyres I: pressure, the placard, TPMS, and reading the sidewall
9. Tyres II: tread, damage, age, and when to replace (the legal floor and the contested margin)
10. Under the bonnet: oil, coolant, brake fluid, screenwash, and doing it safely
11. Lights, wipers, glass, and the weekly walk-round
12. Dashboard warning lights: the colour code, the stop-now four, the check-engine light

**Batteries, high voltage and the seasons**
13. A flat battery and jump-starting
14. Electric and hybrid safety for owners: high voltage, charging at home, fire and flood
15. Winter and summer (seasonal checks, stuck in snow and carbon monoxide, hot cars)

**When it goes wrong on the road**
16. Stopping safely: where, hazard lights, where people stand, triangles, the call, and making the
    scene safe for someone else (the First Aid handover)
17. Motorways and live lanes: go left, emergency areas, smart motorways and the evidence, and the US
    shoulder
18. A flat tyre: the decision, and spare, space saver, sealant or run-flat
19. Changing a wheel safely: the handbook procedure, the jack, torque, and a proper repair after

**The law**
20. Roadworthiness law in Great Britain and Northern Ireland: the driver's duty, the offences, the
    penalties and the "did not know" defence
21. The MOT and the DVA test: when, what, the defect categories, history, and classic cars
22. The US: state inspections, emissions tests, state tread law and federal tyre rules
23. Recalls: checking, what is free, "stop drive", and the limits of the lookup (UK and US)

**The garage**
24. Choosing and dealing with a garage: credentials, servicing schedules and records, warranties,
    quotes and estimates, authorising work, the invoice and old parts, disputes (UK and US)

Stage 2 should consider splitting lesson 24 into two (choosing, servicing and warranties; then
quotes, estimates, bills and disputes), and whether fuel economy and emissions (Part A §6) is a
short lesson of its own after lesson 3 or is threaded through lessons 2, 3, 8 and 10. The research
supports either; the withdrawn-figures story (finding 11) is strong enough to carry a short lesson.

**Project:** a car file for the learner's own car (or a named car whose handbook is online): the
handbook's service schedule and the grade of each fluid, the placard pressures, a month of recorded
checks, a recall check, the periodic test due date and what it covers in the learner's jurisdiction,
the location of the jack, jacking points and spare or sealant kit, and a written breakdown plan for
the roads they use.

---

## Part A: How a car works; textbooks, syllabi and free resources; fuel economy and emissions as maintenance bears on them

Researcher A, Stage 1, Car Basics. Read 26 September 2026.

Conventions: **[V]** copied verbatim from text I extracted myself (curl plus a small HTML stripper or pandoc, pdftotext, the GOV.UK content API, the eCFR API, or an Internet Archive capture whose ID is given). **[T]** would mark words returned through WebFetch; I did not use WebFetch at all, so nothing in this part is [T]. **Snippet only** marks something seen only in a search result; it is never quoted and never a finding. Raw extracts are in `scratchpad/cb/A/`.

Access problems that matter to the whole course:
- **nhtsa.gov refuses curl** (HTTP 403 from Akamai) for every page I tried, including `/vehicle-safety/tires` and `/recalls`. I read NHTSA's tyre page through a Wayback capture (ID 20260924154655, two days old). Other researchers will hit the same wall: use Wayback, and note the capture ID.
- **energysavingtrust.org.uk refuses curl** (Cloudflare 403). Read through Wayback capture 20260731174146.
- **open.edu (OpenLearn) refuses curl** (403). Not read.
- **epa.gov's current OBD page has moved or gone** (404 at `/state-and-local-transportation/vehicle-emissions-board-diagnostics-obd_`). I read EPA's January 2021 snapshot and EPA fact sheet EPA420-F-03-042 instead.
- **The RAC and AA pages carry sales copy for their own garages, breakdown cover and mobile mechanics.** Both are "motoring organisation, not official" and both sell the services they advise on. The RAC DPF page also carries an FAQ block at the bottom that reads as machine-written and contradicts the article above it (see section 5).
- **No page on AFDC or fueleconomy.gov shows a "last updated" date** in its HTML. Where I say a page was revised, that comes from comparing Wayback captures, with IDs given.

---

### 1. How the engine works: petrol and diesel

#### US Department of Energy, Vehicle Technologies Office, "Internal Combustion Engine Basics"
https://www.energy.gov/eere/vehicles/articles/internal-combustion-engine-basics
Read: full article text, curl plus stripper. Page metadata `dateModified` 2023-06-22. Publisher: US federal energy department, its vehicle research office.
What it establishes:
- The four-stroke cycle in one official sentence: "Most of these are four-stroke cycle engines, meaning four piston strokes are needed to complete a cycle. The cycle includes four distinct processes: intake, compression, combustion and power stroke, and exhaust." [V]
- How petrol and diesel differ: "In a spark ignition engine, the fuel is mixed with air and then inducted into the cylinder during the intake process. After the piston compresses the fuel-air mixture, the spark ignites it, causing combustion." [V] and "In a diesel engine, only air is inducted into the engine and then compressed. Diesel engines then spray the fuel into the hot compressed air at a suitable, measured rate, causing it to ignite." [V]
- The mechanical chain from combustion to wheels: "The expanding combustion gases push the piston, which in turn rotates the crankshaft. Ultimately, through a system of gears in the powertrain, this motion drives the vehicle's wheels." [V]
- Emissions context: R&D has helped reduce "nitrogen oxides (NOx) and particulate matter (PM) by more than 99% to comply with EPA emissions standards" [V] over "the last 30 years" [V].
- Caution: the spark-ignition description ("fuel is mixed with air and then inducted") describes port injection. Direct-injection petrol engines inject into the cylinder. AFDC (next entry) covers both. A drafter should not imply all petrol engines premix.
Good for: the "how an engine works" lesson; the one-sentence petrol versus diesel distinction.

#### Alternative Fuels Data Center (AFDC, US DOE), "How Do Gasoline Cars Work?"
https://afdc.energy.gov/vehicles/how-do-gasoline-cars-work
Read: full text, curl plus stripper. No page date shown. Publisher: US DOE's Transportation Technologies Office.
What it establishes:
- Component glossary written for the public. Engine: "fuel is injected into either the intake manifold or the combustion chamber, where it is combined with air, and the air/fuel mixture is ignited by the spark from a spark plug." [V] (This covers port and direct injection.)
- Engine computer: "The ECM controls the fuel mixture, ignition timing, and emissions system; monitors the operation of the vehicle; safeguards the engine from abuse; and detects and troubleshoots problems." [V]
- 12 V battery on a conventional car: "The battery provides electricity to start the engine and power vehicle electronics/accessories." [V]
- Exhaust: "A three-way catalyst is designed to reduce engine-out emissions within the exhaust system." [V]
- Also defines fuel pump, fuel line, fuel tank, fuel injection system and transmission ("transfers mechanical power from the engine and/or electric traction motor to drive the wheels" [V]).
Good for: a labelled diagram lesson; the vocabulary list.

#### AFDC, "How Do Diesel Vehicles Work?"
https://afdc.energy.gov/vehicles/how-do-diesel-cars-work
Read: full text, curl plus stripper. No page date.
What it establishes:
- Compression ignition: "the diesel fuel is injected into the combustion chamber of the engine and ignited by the high temperatures achieved when the gas is compressed by the engine piston." [V]
- Aftertreatment, the source of the DPF and AdBlue warning lights: "After the exhaust gas of the engine is filtered through the diesel particulate filter (DPF) and the diesel oxidation catalyst to reduce particulate matter, diesel exhaust fluid (DEF) is injected into the exhaust gas mixture, then reduced to nitrogen and water by chemical conversion within the selective catalytic reducer (SCR) before being released into the atmosphere via the vehicle's tailpipe." [V]
- DEF tank: "This tank holds diesel exhaust fluid, an aqueous urea solution, which is injected into the exhaust stream during selective catalytic reduction." [V]
- Caution: AFDC names the DPF before the oxidation catalyst. In many layouts the oxidation catalyst comes first. The lesson does not need the order; do not state one.
Good for: the diesel lesson; explaining why a modern diesel has two extra warning lights.

#### fueleconomy.gov (US DOE and EPA, administered by Oak Ridge National Laboratory), "Diesel Vehicles" and "Where the Energy Goes: Gasoline Vehicles"
https://www.fueleconomy.gov/feg/di_diesels.shtml and https://www.fueleconomy.gov/feg/atv.shtml
Read: full body text of both, curl plus stripper. No page dates.
What they establish:
- Diesel economy: "diesel fuel contains roughly 10% to 15% more energy than gasoline. So, diesel vehicles can often go about 20% to 35% farther on a gallon of fuel than their gasoline counterparts." [V]
- Diesel emissions: "Although emissions of particulates and smog-forming nitrogen oxides (NOx) are still relatively high" [V], and "Today's diesels must meet the same emissions standards as gasoline vehicles." [V]
- Petrol engine efficiency: "Only about 12%–30% of the energy from the fuel you put in a conventional vehicle is used to move it down the road, depending on the drive cycle." [V] Also: "Diesel engines have inherently lower losses and are generally one-third more efficient than their gasoline counterparts." [V]
- Engine-driven parts the owner meets: "The water pump, fuel pump, oil pump, ignition system, and engine control system use energy generated by the engine." [V]
Good for: why engines get hot (most energy leaves as heat), which motivates the cooling system and the oil.

#### RAC (motoring organisation, not official; sells cambelt changes), "What is a cambelt and how do you replace it?"
https://www.rac.co.uk/drive/advice/car-maintenance/what-is-a-cambelt-and-how-do-you-replace-it/
Read: full article text, curl plus stripper; page `dateModified` 2026-07-31.
What it establishes:
- What the belt does: "The cambelt is a rubber belt that has teeth which are designed to grip onto the cogs on the crankshaft and camshafts, which keeps them in sync." [V]
- Naming: "Cambelt is the common name for the item in the UK – but in other parts of the world it is known as a timing belt." [V]
- Interval: "Replacement is typically recommended every 60,000 to 100,000 miles, but some vehicle manufacturers may suggest the belt is changed when the vehicle reaches five or six years of age" [V], and the handbook governs: "The replacement interval for your car's cambelt will be detailed in the owner's manual for the vehicle. This will be after a specific number of years or miles, whichever comes first." [V]
- MOT: "At your annual MOT, your mechanic will not check your cambelt." [V]
- Warning to drafters: the same page says "Many cambelts show no obvious symptoms before failure." [V] and also suggests it is "most likely checked every year during your annual service" [V]. On many engines the belt sits behind covers and a visual check at a service is limited. Teach the interval from the handbook as the rule, not symptoms.
- Not sourced here: the difference between an interference engine (valves can hit pistons if the belt breaks) and a non-interference engine, and the general claim that timing chains are designed to last the engine's life. Both appeared only in search snippets from commercial sites. See (f).
Good for: the service-schedule lesson (why a cambelt is a "by date or mileage, whichever first" item).

#### DENSO Europe (glow plug manufacturer; commercial), "Why might the glow plug warning light come on?"
https://www.denso-am.eu/news/why-might-the-glow-plug-warning-light-come-on
Read: full article text, curl plus stripper. No date shown.
What it establishes:
- Glow plug purpose: "To start combustion within a diesel engine, air is compressed in a cylinder to raise its temperature and pressure, fuel is then added to start the combustion cycle. If the temperature of the air is too low, then some of the fuel that is supplied may not be burnt." [V] "glow plugs provide extra heat to the air and ensure that the cylinders reach the required temperature for a clean combustion cycle." [V]
- The light at start-up is normal: the driver "should wait until the light goes out, before starting the engine." [V]
- Service item: "vehicle manufacturers (VMs) specify changing the glow plugs at specific intervals as part of the vehicle's service schedule." [V]
- Do not use: the claim that glow plugs "provide heat to the diesel particulate filter (DPF)" [V] is at best a loose description and should not be taught. The "10 to 15 seconds" rule for a failing plug is a manufacturer's marketing rule of thumb; treat it as unsourced.
Good for: one line in the diesel lesson and the warning-lights lesson. A maker's handbook is a better source (see (f)).

### 2. Hybrids and battery-electric cars

#### AFDC, "How Do All-Electric Cars Work?"
https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work
Read: full text, curl plus stripper. No date.
What it establishes:
- The whole EV in one paragraph: BEVs "have an electric motor instead of an internal combustion engine. The vehicle uses a large traction battery pack to power the electric motor and must be plugged in to a wall outlet or charging equipment, also called electric vehicle supply equipment (EVSE)." [V] No "fuel pump, fuel line, or fuel tank" [V].
- The 12 V battery: "Battery (all-electric auxiliary): In an electric drive vehicle, the auxiliary battery provides electricity to power vehicle accessories." [V]
- DC/DC converter: "converts higher-voltage DC power from the traction battery pack to the lower-voltage DC power needed to run vehicle accessories and recharge the auxiliary battery." [V] This is the fact behind "an EV has no alternator but still has a 12 V battery that can go flat".
- Onboard charger: "Takes the incoming AC electricity supplied via the charge port and converts it to DC power for charging the traction battery." [V]
- Power electronics controller: "manages the flow of electrical energy delivered by the traction battery, controlling the speed of the electric traction motor and the torque it produces." [V] (AFDC does not use the word "inverter". The textbooks do. A lesson can say the controller contains the inverter; see (f).)
- Motor and regeneration: "Some vehicles use motor generators that perform both the drive and regeneration functions." [V]
- Minor artefact: the EV page's thermal system entry mentions "the engine" [V], copied from the hybrid page. Do not quote that sentence for an EV.
Good for: the EV lesson; a labelled diagram.

#### AFDC, "How Do Hybrid Electric Cars Work?" and "Hybrid Electric Vehicles" (basics)
https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work and https://afdc.energy.gov/vehicles/electric-basics-hev
Read: full text of both, curl plus stripper. No dates.
What they establish:
- "A hybrid electric vehicle cannot be plugged in to charge the battery. Instead, the battery is charged through regenerative braking and by the internal combustion engine." [V]
- The 12 V battery in a hybrid: "the low-voltage auxiliary battery provides electricity to start the car before the traction battery is engaged; it also powers vehicle accessories." [V]
- Mild versus full: AFDC says mild hybrids are "also called micro hybrids" [V] and use a battery and motor to help power the car and allow stop-start; "Mild hybrid systems cannot power the vehicle using electricity alone." [V] "Full hybrids have larger batteries and more powerful electric motors, which can power the vehicle for short distances and at low speeds." [V]
- Parallel versus series: AFDC calls parallel hybrids "the most common HEV design" [V]; they connect engine and motor to the wheels mechanically; "Series hybrids, which use only the electric motor to drive the wheels, are more commonly found in plug-in hybrid electric vehicles." [V]
- Terminology flag: AFDC treats "mild" and "micro" hybrid as synonyms. Many European sources use "micro hybrid" for stop-start only and "mild hybrid" for a 48 V motor-assist system. The lesson should define the three owner-facing categories (mild, full, plug-in) and avoid "micro".
Good for: the hybrid lesson.

#### AFDC, "How Do Plug-In Hybrid Electric Cars Work?" and "Plug-In Hybrid Electric Vehicles" (basics)
https://afdc.energy.gov/vehicles/how-do-plug-in-hybrid-electric-cars-work and https://afdc.energy.gov/vehicles/electric-basics-phev
Read: full text of both. No dates.
What they establish:
- "The vehicle typically runs on electric power until the battery is nearly depleted, and then the car automatically switches over to use the ICE." [V]
- Electric range: "about 15 to 60-plus miles in current models" [V].
- Charging matters: "if the vehicle is never plugged in to charge, fuel economy will be about the same as a similarly sized hybrid electric vehicle." [V] "consistently charging the vehicle is the best way to maximize the electric benefits." [V]
- Series PHEVs: "Vehicles of this type are often referred to as extended-range electric vehicles." [V]
Good for: the hybrid lesson, and the maintenance point that a PHEV still has an engine to service.

#### AFDC, "Developing Infrastructure to Charge Electric Vehicles" (charging levels)
https://afdc.energy.gov/fuels/electricity-stations
Read: full text, curl plus stripper. No date; the page cites 2023 figures.
What it establishes (US only; UK plugs and supply differ):
- Level 1: "Approximately 5 miles of range per 1 hour of charging" [V], assuming "1.9 kW charging power" [V]; "provides charging through a 120 volt (V) AC plug." [V]
- Level 2: "Approximately 25 miles of range per 1 hour of charging" [V]; "240 V (typical in residential applications) or 208 V (typical in commercial applications)" [V]; "A Level 2 unit can range from 2.9 to 19.2 kW power output." [V]; "Most residential Level 2 chargers operate at up to 30 Amps, delivering 7.2 kW of power. These units require a dedicated 40-Amp circuit to comply with the National Electric Code requirements in Article 625." [V]
- DC fast: "Approximately 100 to 200+ miles of range per 30 minutes of charging" [V]; "power outputs up to 500 kW. This is also referred to as Level 3 charging." [V]
- Connectors: CCS, CHAdeMO and J3400 (Tesla's design being standardised by SAE).
- UK note: "Level 1/2/3" is US vocabulary. UK homes supply 230 V single phase and the UK talks of "slow, fast, rapid, ultra-rapid" and kW. I did not read a UK government charging page (see (g)); Part B or D may have.
Good for: the EV lesson (charging as the EV owner's equivalent of refuelling); electrical safety cross-reference to Part D.

#### AFDC, "Maintenance and Safety of Electric Vehicles"
https://afdc.energy.gov/vehicles/electric-maintenance
Read: full text, curl plus stripper. No date.
What it establishes:
- The honest version of "EVs need no maintenance": "PHEVs and HEVs require the same general maintenance as conventional vehicles, but all-electric vehicles require less maintenance because they have fewer moving parts and fluids to change." [V]
- Why less: "The battery, motor, and associated electronics require little to no regular maintenance" [V]; "There are fewer fluids, such as engine oil, that require regular maintenance" [V]; "Brake wear is significantly reduced due to regenerative braking" [V]. [Stage 4 note, lesson 04, 2026-09-26: the page's list has a fourth reason, "There are far fewer moving parts relative to a conventional fuel engine." [V]; do not call the list three reasons. These are for all-electric cars; for hybrids see the lesson 04 note at the end of this file.]
- Battery coolant: "Some automotive battery systems use liquid coolant to maintain safe operating temperatures. These systems may require regular checks." [V]
- Battery warranty: "many manufacturers offer 8-year/100,000-mile warranties for their EV batteries." [V]
- Voltage: "All-electric vehicles, PHEVs, and HEVs have high-voltage electrical systems that typically range from 400 to 1,000 volts." [V] Caution: this is too sweeping for 48 V mild hybrids and for older hybrids around 200 to 300 V. Say "several hundred volts in most hybrids and EVs" and cite a maker for any specific figure.
- Orange cables: "high-voltage power cables typically are clearly designated with distinctive coloring or markings (usually orange)." [V]
- Fire: responders "should also be aware of the potential for delayed ignition of a damaged vehicle or reignition of a battery fire, even after it is believed to be extinguished." [V]
Good for: the EV and hybrid safety lesson (cross-reference Part D), and the misconception lesson.

#### AFDC, "Batteries for Electric Vehicles"
https://afdc.energy.gov/vehicles/electric-batteries
Read: full text. No date.
What it establishes:
- "Most of today's all-electric vehicles and PHEVs use lithium-ion batteries" [V]; nickel-metal hydride "have been widely used in HEVs" [V]; lead-acid batteries "are only used in commercially available electric vehicles for ancillary loads" [V] and "for stop-start functionality in internal combustion engine vehicles" [V].
- End of life: "an electric vehicle battery could have at least 70% of its initial capacity left at the end of its life if it has not failed or been damaged." [V]
Good for: one paragraph on battery types in the EV lesson.

#### fueleconomy.gov, "All-Electric Vehicles", "How Hybrids Work" and "Tips for Hybrids, Plug-in Hybrids, and Electric Vehicles"
https://www.fueleconomy.gov/feg/evtech.shtml, https://www.fueleconomy.gov/feg/hybridtech.shtml, https://www.fueleconomy.gov/feg/evtips.shtml
Read: full body text of all three. No dates.
What they establish:
- Regenerative braking in one line: it "uses the forward motion of the wheels to turn the motor. This generates electricity and helps slow the vehicle." [V]
- Why hard braking wastes regen: "Hard braking causes the vehicle to use its conventional friction brakes, which do not recover energy." [V]
- Owner's manual first: "Tips that apply to one model may not apply to another." [V]
- EV efficiency: "EVs convert over 77% of the electrical energy from the grid to power at the wheels." [V]
- Battery life: "a DOE study suggests these batteries may last 12 to 15 years in moderate climates and 8 to 12 years in severe climates." [V] The study is not named on the page; see (f).
- Stale content warning: the EV page says "Most EVs can travel more than 100 miles on a charge" [V] and "Fully recharging the battery pack can take 3 to 12 hours" [V]. These read as a decade old. Do not quote them as current.
Good for: the regenerative braking explanation; a caution in the EV lesson about dated government pages.

#### The AA (motoring organisation, not official), press release "AA gives power to electric drivers", 23 July 2021
https://www.theaa.com/about-us/newsroom/aa-gives-power-to-electric-drivers
Read: full text, curl plus stripper. Dated 23 July 2021 on the page; the poll cited is dated June 2021.
What it establishes:
- "The top two causes of breakdowns in an EV are no different to those of conventionally fuelled cars; namely the low-voltage 12v battery which can be found in all cars, and tyre faults due to potholes, punctures and wear. The third relates to charging equipment (cable, plug)." [V]
- "96% of EV breakdowns have nothing to do with battery range." [V] (Edmund King, AA president.)
- The two-battery point in a patrol's words: "In EVs it's similar, but it starts the onboard computer system. A separate, high voltage battery powers the vehicle." [V]
- Date the figures: they are 2021 and from one breakdown provider's call-outs.
Good for: the EV misconception lesson; the breakdown lesson (the 12 V battery and tyre faults are the "top two", unranked between themselves). [Stage 4 correction, lesson 04, 2026-09-26: this line said "the 12 V battery is still the commonest failure". The release names a "top two" and does not rank them; no lesson may say the 12 V battery comes first. It also says running out of charge "doesn't feature within the top three EV breakdown causes" [V].]

### 3. The chassis and the rest of the car

#### US federal law, 49 CFR 571.116, FMVSS No. 116 "Motor vehicle brake fluids"
https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.116
Read: full regulation text via the eCFR versioner API (point-in-time 2026-09-01), converted to text. Most recent amendment on eCFR is 2017.
What it establishes:
- Brake fluid absorbs water, stated in the law's own required container warning, S5.2.2.2(g)(3): "STORE BRAKE FLUID ONLY IN ITS ORIGINAL CONTAINER. KEEP CONTAINER CLEAN AND TIGHTLY CLOSED TO PREVENT ABSORPTION OF MOISTURE." [V] and (g)(2): "KEEP BRAKE FLUID CLEAN AND DRY. Contamination with dirt, water, petroleum products or other materials may result in brake failure or costly repairs." [V]
- Why it matters, in numbers: S5.1.1 minimum dry boiling points "(a) DOT 3: 205 °C. (401 °F.)." and "(b) DOT 4: 230 °C. (446 °F.)." [V]; S5.1.2 minimum "wet" boiling points "(a) DOT 3: 140 °C. (284 °F.)." and "(b) DOT 4: 155 °C. (311 °F.)." [V]. The "wet" test humidifies the fluid until a reference fluid reaches "3.70 ±0.05 percent by weight" [V] water (S6.2). So a few per cent water drops the boiling point by about 65 to 75 °C. That is the physics behind "change brake fluid by date".
- Grades: DOT 3, DOT 4 and DOT 5; DOT 5 silicone base is coloured purple, others "colorless to amber" [V] (S5.1.14). Labels must distinguish "DOT 5 SILICONE BASE" from "DOT 5.1 NON-SILICONE BASE" [V].
- Note: the extracted DOT 5 wet figure reads "1 180 °C" because of a footnote marker in the XML; the value is 180 °C. Not needed in a lesson.
Good for: the brakes lesson; the fluids check lesson ("use only the fluid named on the cap").

#### US federal law, 49 CFR 571.135, FMVSS No. 135 "Light vehicle brake systems"
https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.135
Read: definitions (S4), S5.4 reservoir and S5.5 warning indicator in full, via eCFR API 2026-09-01. The test procedures I skimmed only.
What it establishes:
- ABS, defined: a portion of the service brake system "that automatically controls the degree of rotational wheel slip during braking by" sensing wheel rotation, sending signals to controllers, and "Transmitting those controlling signals to one or more modulator devices which adjust brake actuating forces in response to those signals." [V]
- Two circuits: "Split service brake system means a brake system consisting of two or more subsystems actuated by a single control, designed so that a single failure in any subsystem ... does not impair the operation of any other subsystem." [V] (Ellipsis mine; the omitted words give examples of failures.)
- Reservoir: "Brake fluid reservoirs shall be so constructed that the level of fluid can be checked without need for the reservoir to be opened." [V] (S5.4.4) This is why an owner checks the level through a translucent reservoir.
- Cap warning required by law: "WARNING: Clean filler cap before removing. Use only ______ fluid from a sealed container." [V] (S5.4.3)
- Red brake light triggers include low fluid, loss of pressure, the parking brake, "Any electrical functional failure in an antilock or variable brake proportioning system" [V], and "For an EV with a regenerative braking system that is part of the service brake system, failure of the RBS." [V] (S5.5.1)
- A separate ABS light must be yellow and labelled "Antilock" or "Anti-lock" or "ABS" (S5.5.5(d)(3)).
- Bulb check: indicators must light as a function check when the ignition is turned on (S5.5.2).
Good for: the brakes lesson; the warning-lights lesson (red BRAKE versus amber ABS). UK equivalent is UN Regulation 13-H; not read.

#### The Highway Code (GOV.UK), Annex 6 "Vehicle maintenance, safety and security", and Rules 120, 121 and 123
https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security and https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158
Read: full body of Annex 6 and of Rules 103 to 158 via the GOV.UK content API. Annex 6 `public_updated_at` 2022-01-29; Rules 103 to 158 2023-09-17.
What it establishes (Part B and C may also cite this; these are the how-it-works lines):
- Warning lights at start-up: "When you turn the ignition key, warning lights will be illuminated but will go out when the engine starts (except the handbrake warning light). If they do not, or if they come on while you are driving, stop and investigate the problem, as you could have a serious fault." [V]
- Charging system: "If the charge warning light comes on while you are driving, it may mean that the battery isn't charging." [V]
- Brake fluid: "Low brake fluid may result in brake failure and a crash." [V]
- Suspension: if the vehicle "continues to bounce after pushing down on the front or rear, its shock absorbers are worn." [V]
- Brakes or tyres: if it "pulls to one side when braking, it is most likely to be a brake fault or incorrectly inflated tyres." [V]
- Cooling: "Most engines are water-cooled. If your engine overheats, you should wait until it has cooled naturally. Only then remove the coolant filler cap and add water or other coolant." [V]
- Engine fire: "Do not attempt to extinguish a fire in the engine compartment, as opening the bonnet will make the fire flare." [V]
- Rule 120, ABS: "The ABS should ensure that steering control will be retained, but do not assume that a vehicle with ABS will stop in a shorter distance." [V]
- Rule 123, idling (the warm-up misconception in UK law): "You MUST NOT leave a parked vehicle unattended with the engine running or leave a vehicle engine running unnecessarily while that vehicle is stationary on a public road." [V] Law cited: "CUR regs 98 & 107" [V].
Good for: brakes, cooling, electrical and warm-up lessons; UK framing throughout.

#### NHTSA, "Tire Safety Ratings and Awareness | TireWise"
https://www.nhtsa.gov/vehicle-safety/tires
Read: full text through Wayback capture 20260924154655 (live site refuses curl). Part B or D likely owns tyres; recorded here for the basics and a cross-source conflict.
What it establishes:
- "Check the pressure of all tires, including your spare, at least once a month when the tires are "cold," meaning that the car hasn't been driven for at least three hours." [V]
- US tread guidance: "Tires are not safe and should be replaced when the tread is worn down to 2/32 of an inch." [V]
- TPMS limitation: TPMS "only activate a warning when a tire is significantly underinflated." [V]; required on "All passenger cars, light trucks and vans that are model year 2008 or newer" [V].
- "In 2024, a total of 511 people died on the road in tire-related crashes." [V]
- Fuel claim that conflicts with fueleconomy.gov: "Properly inflating your tires can save you as much as 11 cents per gallon on fuel." [V] fueleconomy.gov gives "$0.03/gallon" [V] for an average 0.6% gain at $4.32 per gallon (section 6). NHTSA's "as much as" figure is a best case; fueleconomy.gov's is the average. A lesson should use the average and say so.
Good for: tyres basics, cross-reference to the checks lesson.

#### fueleconomy.gov, "Advanced Transmission Technologies"
https://www.fueleconomy.gov/feg/tech_transmission.shtml
Read: full body text. No date.
What it establishes:
- CVT: "Instead of gears, CVTs use a pair of variable-diameter pulleys connected by a belt or chain that can produce an infinite number of engine-to-wheel speed ratios." [V]
- DCT: "DCTs operate much like manual transmissions, except that they use two clutches and automatic shifting." [V]
- Extra gears: 6 to 8 speeds give "2%–4%" [V] efficiency over a 4-speed automatic (source: National Academy of Sciences 2015).
- Myth page (section 6) adds that automatics now often match or beat manuals on economy.
Good for: a short transmission section (manual, conventional automatic, CVT, DCT, and the single-speed reduction gear in an EV).

#### Not found in a free official source: 12 V charging system (alternator), fuses, lights, steering and suspension explained for owners
I found no government page that explains the alternator, fuses, or steering and suspension layouts in plain terms. The Highway Code gives the owner-facing symptoms (above). The mechanism is textbook material: Halderman Section VII (starting, charging, lighting circuits) and Section XII (steering and suspension); Erjavec Parts III and VII (section 4). A drafter should write these from a textbook read in full, or from a maker's handbook, and cite it. See (f).

### 4. Textbooks, syllabi and consumer courses

#### Pearson, Halderman and Ward, *Automotive Technology: Principles, Diagnosis, and Service*, 7th edition
https://www.pearson.com/en-us/subject-catalog/p/automotive-technology-principles-diagnosis-and-service/P200000009691?view=educator
Read: the publisher page's full table of contents (section and chapter titles only) and blurb, curl plus stripper. I did not read the book.
What it establishes:
- Publication: "Published by Pearson (May 16, 2025) © 2026" [V]; authors James Halderman and Curt Ward.
- Scope: "Written to current ASE tasks, the text examines the eight major areas of automotive service in 136 concise chapters." [V] Halderman is described as a former "professor of automotive technology at a leading U.S. community college" [V].
- Structure, fifteen sections: I Automotive Service Industry; II Safety and Health Issues; III Fasteners, Tools and Shop Equipment; IV Measuring, Math and Scientific Principles; V Service Information and Routine Maintenance (chapters "Service Information, Work Orders, and Vehicle Identification" and "Preventative Maintenance and Service Procedures" [V]); VI Engine Repair (A1), including "Diesel Engine Parts, Operation, and Aftertreatment", "Antifreeze and Coolant", "Engine Oil and Filters" [V]; VII Electrical Systems, including "Automotive 12-Volt Batteries", "Charging System Parts and Operation", "Lighting and Signaling Circuits" [V]; VIII HVAC (A7); IX Engine Performance (A8), including "Onboard Diagnosis" and "Vehicle Emissions Standards and Testing" [V]; X EV and HEV (L3): "Hybrid and Electric Vehicle Safety", "Introduction to Electric and Hybrid Electric Vehicles", "Hybrid and Electric Vehicle Maintenance", "EV and HEV High-Voltage Batteries", "EV and PHEV Charging", "Regenerative Brakes", "Fuel Cells and Advanced Technologies" [V]; XI Brakes (A5), including "Brake Fluid, Lines, and Bleeding", "ABS Components and Operation" [V]; XII Steering and Suspension (A4), including "Tires and Wheels", "Tire-Pressure Monitoring Systems" [V]; XIII Manual Drivetrains (A3); XIV Automatic Transmissions (A2), including "Continuously Variable and Dual-Clutch Automatic Transmissions" and "EV and HEV Transmissions" [V]; XV Specialty ASE Certification Content (including "Service Consultant (C1)" [V]).
- What the field treats as core: the ASE areas A1 to A8 plus L3 (hybrid and EV), with safety first and routine maintenance as its own section.
Good for: the course map; confirms that EV and hybrid safety is now a standard section, not an appendix.

#### Cengage, Erjavec and Thompson, *Automotive Technology: A Systems Approach*, 7th edition
https://www.cengageasia.com/TitleDetails/isbn/9781337794213 (the US cengage.com page redirected and returned nothing usable)
Read: full table of contents and description on Cengage Asia's page, curl plus stripper. I did not read the book.
What it establishes:
- "ISBN-13: 9781337794213 | Copyright 2020 || Published | 1728 pages" [V]. Aligned to "the latest ASE Education Foundation requirements for Maintenance and Light Repair (MLR), Automotive Service Technology (AST), and Master Service Technology (MAST)" [V].
- 55 chapters in nine parts: I Automotive Technology (including "4. Automotive Systems." and "8. Preventative Maintenance and Basic Services." [V]); II Engines ("14. Lubricating and Cooling Systems." [V]); III Electricity ("17. Batteries: Theory, Diagnosis, and Service.", "19. Charging Systems.", "20. Lighting Systems." [V]); IV Engine Performance ("33. Emission Control Systems.", "35. Hybrid Vehicles.", "36. Electric Vehicles." [V]); V Manual Transmissions and Transaxles; VI Automatic Transmissions and Transaxles; VII Suspension and Steering ("45. Tires and Wheels." [V]); VIII Brakes ("53. Antilock Brake, Traction Control, and Stability Control Systems." [V]); IX Passenger Comfort.
- Rob Thompson "currently teaches 11th- and 12th-grade students in an ASE Education Foundation-accredited maintenance and light repair (MLR) program" [V]. Jack Erjavec "spent 20 years at Columbus State Community College as an instructor and administrator." [V]
- An 8th edition appears in search snippets only; not verified.
Good for: confirms the Halderman map from a second US publisher.

#### Routledge, Denton and Pells, *Automobile Mechanical and Electrical Systems*, 3rd edition
https://www.routledge.com/Automobile-Mechanical-and-Electrical-Systems/Denton-Pells/p/book/9781032289083
Read: publisher page, description and top-level table of contents only. I did not read the book or see chapter subsections.
What it establishes:
- "Copyright 2023| 420 Pages| 1040 Color Illustrations" [V] (search snippets give 408 pages and a 25 November 2022 date; the page says 420).
- Top-level contents: "1. Overview and introduction", "2. Engine systems", "3. Electrical systems", "4. Chassis systems", "5. Transmission systems", "6. Automotive Technology Academy" [V].
- Aim: "the guide no student enrolled on an automotive maintenance and repair course should be without." [V]
- Authors: Tom Denton "is a Fellow of the Institute of the Motor Industry" [V]; Hayley Pells "is an experienced MOT tester" [V].
Good for: the UK standard reference. Its engine, electrical, chassis, transmission split is the same map as the US books.

#### Hillier, *Hillier's Fundamentals of Motor Vehicle Technology*, Book 1
https://trid.trb.org/View/873486 (TRID record, Transport Research Board database)
Read: the TRID abstract only. The Oxford University Press product page for the 6th edition (ISBN 9781408515181) returned an empty 202 response. I did not see a real table of contents.
What it establishes:
- The TRID record links to ISBN 0748780823, which is the 5th edition (Nelson Thornes), not the current 6th.
- Its abstract says the content is "aligned to and exceeds the requirements of Motor Vehicle Level 2 N/SVQ qualifications" [V] and lists eight chapters: vehicle evolution and layout; engines; transmission; steering and suspension; braking; body and chassis; vehicle electrical systems; bearings.
Good for: evidence that Hillier is the long-standing UK Level 2 text. Do not cite the 6th edition's contents from this.

#### Rolling Hills Publishing, Mike and Linda Gray, *Auto Upkeep: Basic Car Care, Maintenance, and Repair*, 5th edition (2025)
https://www.autoupkeep.com/shop/auto-upkeep-5th-edition-2025-homeschool-curriculum-kit/ and https://www.autoupkeep.com/standards/
Read: publisher product page (full chapter list with each chapter's activities) and the standards page. I did not read the book. Commercial publisher.
What it establishes:
- This is the nearest thing to a consumer "car care" course with a published curriculum. It is written for owners first: "an introductory automotive course that focuses on what all car owners and entry level technicians should know and be able to do" [V].
- 22 chapters: "Chapter 1 – Introduction and How Cars Work", "Chapter 4 – Repair Facilities", "Chapter 5 – Safety Around the Automobile", "Chapter 8 – Fluid Level Check", "Chapter 9 – Electrical System", "Chapter 10 – Lubrication System", "Chapter 12 – Cooling System and Climate Control", "Chapter 14 – Suspension, Steering, and Tires", "Chapter 15 – Braking System", "Chapter 17 – Exhaust and Emission System", "Chapter 20 – Common Problems and Roadside Emergencies", "Chapter 21 – Electric Vehicles", "Chapter 22 – Next-Generation Vehicles" [V], plus buying, expenses, cleaning, accessories.
- Chapter 20 activities include "Changing a Flat Tire Activity", "Jump-Starting Activity" and "On-Board Diagnostics Activity – Retrieve diagnostic trouble codes (DTCs) from an OBD II system using a basic scan tool." [V]
- Standards claim: "Auto Upkeep correlates to beginning MLR standards (over 60%)" [V] and to 100% of the Texas "Automotive Basics" TEKS. The site says it has been "adopted by over 700 automotive programs" [V] and promotes adult and continuing-education "Car Care" classes.
- Its scope overlaps our course closely, including buying, insurance and expenses, which our course leaves to Personal Finance.
Good for: benchmarking our outline. Its chapter 4 (repair facilities), 8 (fluid check) and 20 (roadside) match our outcomes.

#### ASE Education Foundation, "Automobile Program Standards", effective 1 July 2024
https://www.aseeducationfoundation.org/wp-content/uploads/2024-Automobile-Program-Standards-1.pdf
Read: pdftotext of the full 108-page PDF; I read the supplemental task lists (pp. 42 to 44), Engine Repair section A (p. 45), Brakes section A (the hydraulic tasks), the glossary and the tool lists. I did not read every task area.
What it establishes:
- The three US programme levels and their hours: "Maintenance & Light Repair (MLR) ... 540 Hours", "Automobile Service Technology (AST) ... 840 Hours", "Master Automobile Service Technology (MAST) ... 1200 Hours" (column headings on p. 45, assembled from the three-column layout; not one continuous string).
- Priority rule: "At least 90% of all Priority 1 (P-1) tasks must be taught" [V].
- xEV safety is a required supplemental task: "Demonstrate knowledge of hazards related to high voltage systems/electric vehicles, including electrocution, fire, explosion, arc flash, gases and fumes, hazardous chemicals, and EMF" [V]; "Demonstrate knowledge of high voltage system and component coloring, warning labels, lights, signage, and lock-out/tag-out procedures." [V]; "awareness of automatic systems that may operate while the key switch/ignition is off." [V]
- Definitions useful to the course: "HIGH VOLTAGE – Automotive system voltages greater than 30 VAC or 60 VDC." [V]; "xEV – Any electrified propulsion vehicle with a high-voltage system, including, but not limited to, HEV, PHEV, PEV, BEV, FCEV, and EV (SAE J715-1 SEP (2022))." [V]
- MLR engine task 1 (P-1): research "fluid type, internal combustion engine operation, vehicle service history, service precautions, technical service bulletins, and recalls including xEVs" (MLR column; line-wrapped in the PDF, reconstructed, so not marked [V]).
- Brakes MLR tasks (P-1): "Select, handle, store, and fill brake fluids to proper level; use proper fluid type per manufacturer specification." and "Bleed and/or replace fluid in the brake system." [V]; P-2 "Test brake fluid for contamination." [V]
- Customer-facing tasks: "Demonstrate use of the three C's (concern, cause, and correction)." [V]; "Perform a vehicle multi-point inspection and complete a vehicle inspection report" [V].
Good for: the US vocational benchmark; the 60 V line is a clean, citable definition of "high voltage" for the safety lesson; "three Cs" is a useful frame for the garage lesson.

#### IMI (Institute of the Motor Industry), Level 1 Award, Certificate and Diploma in Automotive Maintenance (603/7605/3, 603/7606/5, 603/7607/7)
https://tide.theimi.org.uk/learn/qualifications/603_7605_3 and the qualification specification PDF (Issue 3, 23 September 2021) hosted at https://oakfield.wigan.sch.uk/wp-content/uploads/2023/11/IMI-Fix-it-Automotive-Maintenance.pdf
Read: the IMI qualification page in full; the 12-page specification in full. The specification does not contain the unit content; I did not see unit learning outcomes.
What it establishes:
- Unit list [V, from IMI's page]: "L1AM01 - Health and Safety in the Workplace", "L1AM03 – Engine Operation and Components", "L1AM04 – Lubrication System Components and Maintenance", "L1AM05 – Engine Cooling System Components and Maintenance", "L1AM06 – Spark Ignition System Components and Maintenance", "L1AM08 – Compression Ignition Engine Fuel System Components and Maintenance", "L1AM09 – Exhaust System Components and Maintenance", "L1AM10 – Steering System Components and Maintenance", "L1AM11 – Suspension System Components and Maintenance", "L1AM12 – Braking System Components and Maintenance", "L1AM13 – Wheel and Tyre Construction and Maintenance", "L1AM14 – Vehicle Transmission System Components and Maintenance", "L1AM15 – Vehicle Electrical Circuits and Components".
- Size: Award "(GLH: 37 – 62)", Certificate "(GLH: 183 – 238)", Diploma "(GLH: 276 – 301)" [V]; Group A mandatory units "GLH: 44" [V].
- Regulated by Ofqual; "generally aimed at learners 16-19 years old" [V]; certificate end date shown as "Wed, 31/07/2030" [V].
- The Level 1 list has no hybrid or EV unit. A search snippet mentioned an IMI unit "introduction to low carbon technologies" on another Level 1 qualification; not read.
Good for: the UK entry-level map, which matches the US MLR and the textbooks system by system.

#### Pearson, BTEC Level 2 and 3 Diploma in Light Vehicle Maintenance and Repair Principles and Competence, specification Issue 2, June 2016
https://qualifications.pearson.com/content/dam/pdf/btec-specialist/9781446935378_Edex_Lvl2Lvl3_LightVehicleMain_Issue_2.pdf
Read: pdftotext of the full specification; I read the unit list and Unit 9 "Knowledge of Routine Light Vehicle Maintenance" in full. "First registration September 2010" [V]; this is an older qualification and may be closed to new registrations (not checked).
What it establishes:
- Routine maintenance covers seven systems: "engine", "chassis", "wheels and tyres", "transmission and driveline", "electrical and electronic", "exterior vehicle body", "vehicle interior" (Unit 9, criterion 1.3, a to g [V]).
- Criterion 2.1: "describe the requirements of correct maintenance in order to maintain the vehicle in a roadworthy and legal condition" [V]; 2.2: "describe the importance of correct maintenance for warranty purposes" [V].
- Service records: "importance and process of completing all relevant documentation relating to routine maintenance: inspection records, job cards, vehicle repair records, in-vehicle service history" (list flattened from Unit 9 content item i; not a single string).
Good for: the service-record and garage lesson; "roadworthy and legal" as a maintenance aim.

#### Consumer car-care courses at colleges
- Johnson County Community College (Kansas) lists a non-credit "Basic Car Care and Maintenance" course. Snippet only: its pages are rendered by script and the Wayback capture failed. Not read.
- Maricopa Community Colleges "Basic Automotive Maintenance" and De Anza College non-credit pages both returned 403. Not read.
- Denver Tool Library "Knowing Your Car" class page was fetched but not read closely; it is a community workshop, not an institution. Not used.
- Finding: I found no university-extension consumer car-care course with a published syllabus that I could read. The published consumer curriculum I could read is Auto Upkeep (above), which sells to adult and continuing-education programmes.

### 5. Warning lights our part raises: DPF, AdBlue/DEF, check engine

#### DVSA and DfT (GOV.UK), "Diesel particulate filters on vehicles" guidance note
https://www.gov.uk/government/publications/diesel-particulate-filters-guidance-note
Read: the landing page and the HTML publication in full via the content API. Last revised 4 December 2013 ("Revision of diesel particulate filters guidance note to include MOT test." [V]); first published 24 September 2013.
What it establishes:
- "A diesel particulate filter (DPF) is a device fitted to a diesel vehicle which filters particulate matter (PM) from exhaust gases." [V]
- Regeneration: "This is done by a process called regeneration, which involves burning the soot to gas at a very high temperature, leaving behind only a very small residue. Regeneration, If not carried out properly, can lead to a build up of soot which can affect performance and ultimately lead to expensive repair costs." [V]
- MOT: "Since February 2014 the inspection of the exhaust system carried out during the MOT test includes a check for the presence of a DPF. A missing DPF, where one was fitted when the vehicle was built, will result in an MOT failure." [V]
- Offence: removal breaches "Road vehicles (construction and use) regulations (Regulation 61a(3))" [V]; "fines of up to £1,000 for a car or £2,500 for a light goods vehicle." [V]
- The health figures (29,000 early deaths, COMEAP 2008) date from 2013 and should not be quoted as current.
Good for: the diesel section; the "never remove a DPF" safety and legal point (Part C may own the MOT detail).

#### RAC (motoring organisation, not official), "Diesel particulate filters: everything you need to know about DPFs"
https://www.rac.co.uk/drive/advice/emissions/diesel-particulate-filters/
Read: full article text, curl plus stripper. `dateModified` 2026-08-03.
What it establishes:
- The driving pattern that blocks a DPF: "Short journeys at low speeds are the prime cause of blocked diesel particulate filters." [V]
- Passive regeneration: "it is advised that drivers regularly give their diesel vehicle a good 30 to 50 minute run at sustained speed on a motorway or A-road to help clear the filter." [V]
- Active regeneration: "extra fuel is injected automatically, as part of the vehicle's ECU, when a filter reaches a predetermined limit (normally about 45%)" [V]; to clear the light, "driving for 10 minutes or so at speeds greater than 40mph." [V]
- Oil and fuel level: "some oils contain additives that can actually block filters." [V]; "running the car frequently on a low fuel level as the car may avoid DPF regeneration in order to save fuel." [V]
- Life and cost: "generally, they should last for at least 100,000 miles." [V]; forced regeneration at a garage "usually costs around £100-£200" [V]; a new one "can cost £1,000 and £3,500" [V] (sic).
- MOT: "no dashboard warning lights should remain on during the test." [V] (Too broad as stated; the MOT manual names specific lamps. Part C should check.)
- Errors on the page, not to be repeated: (1) it says Euro 5 was introduced "to help lower car CO2 emissions" [V]; Euro standards regulate pollutants such as particulates, not CO2, and DPFs do not lower CO2. (2) The FAQ block at the foot describes "forced regeneration" as adding "a special chemical agent" to the fuel [V], contradicting the article's own description of forced regeneration as a garage procedure. The FAQ reads as machine-generated; use the article body only.
Good for: the DPF section of the diesel lesson; the "a diesel suits long runs" buying point.

#### The AA (motoring organisation, not official), "Diesel particulate filters"
https://www.theaa.com/driving-advice/fuels-environment/diesel-particulate-filters
Read: full article text. No date extracted.
What it establishes (agrees with RAC and adds):
- "Active regeneration will be initiated every 300 miles or so depending on how you use your car and will take 5 to 10 minutes to complete." [V]
- Fuel level: "Low fuel level – generally less than a quarter of a tank – will prevent active regeneration taking place." [V]
- Limp mode: keep driving slow stop-start with the light on and "soot will build up in the filter until your car goes into 'restricted performance mode' to prevent damage." [V]
- Additive-type DPFs: some cars need "Eolys™ fluid" [V] in a separate tank; "A full tank of additive should last around 70,000 miles." [V]
- Ash: "The ash can't be removed – unless the DPF is removed from the vehicle and sent away for specialist cleaning" [V].
- Buying advice: for mainly town stop-start use "you'd be wise to avoid diesels fitted with a particulate filter" [V].
Good for: same as RAC; the AA and RAC agree on the 10 minutes above 40 mph figure, which gives two independent (if commercial) sources.

#### The AA (motoring organisation, not official), "What is AdBlue?"
https://www.theaa.com/breakdown-cover/advice/adblue
Read: full article text. No date extracted.
What it establishes:
- "AdBlue is a diesel exhaust fluid, not a fuel additive. It's stored in a separate tank" [V]; "It's extremely important that AdBlue is never added to the fuel tank of your vehicle or irreparable damage will occur." [V]
- Name: "a trade name registered by the German car manufacturers association" [V]; "a colourless, non-toxic mixture of urea and de-ionised water. It's not actually blue at all." [V]
- Running out: "Once you've stopped, you won't be able to restart the engine if the AdBlue tank's empty." [V] Warning comes early: "around 1500 miles' worth of AdBlue left." [V]
- Refill: "5 litres should be enough to make sure your car will restart if you've run out completely" [V].
- Consumption: "Typical consumption is around a litre of AdBlue every 600 miles." [V] "you could need to refill somewhere between 3,000 and 12,000 miles" [V].
- Wrong-tank action: "Don't turn on the ignition or start the engine and call us for help." [V] **[Corrected 2026-09-26, Stage 4 note, lesson 03: this line sits under "What happens if I put diesel in the AdBlue tank?", so it is the AA's advice for diesel in the AdBlue tank. For AdBlue in the fuel tank the AA says "...so don't touch the ignition." and "You'll need to get the tank drained and the contents disposed of safely before you can refill it." See "Gate closures, lesson 03".]**
- Which cars: "If you've got a diesel from Jaguar, Land Rover or any French or German manufacturer, and it was registered new after September 2015, it'll use AdBlue." [V] This is a generalisation; check the handbook.
- Error on the page: it says spilled AdBlue forms "uric acid crystals" [V]. Urea is not uric acid. Say "white crystals".
Good for: the diesel lesson and the warning-lights lesson.

#### US EPA, "Diesel Exhaust Fluid" and fact sheet EPA-420-F-25-011 (August 2025)
https://www.epa.gov/regulations-emissions-vehicles-and-engines/diesel-exhaust-fluid and https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P101HKDJ.pdf
Read: the web page in full ("Last updated on July 9, 2026" [V]); the two-page fact sheet via pdftotext, including its tables (the table layout extracts poorly; see caution).
What it establishes:
- US derates: SCR systems "can force a vehicle to drastically reduce speed or become inoperable if DEF runs out or if system sensors fail." [V] The fact sheet: "within four hours, the vehicle speed is reduced to five miles per hour." [V]
- Policy is moving: EPA has issued guidance (August 2025, revised February and March 2026) urging makers to update software to soften derates, and "Starting with model year (MY) 2027, all new on-road diesel vehicles must be engineered to avoid sudden power and speed loss after DEF depletion." [V]
- Requirements: vehicles using DEF must have OBD "to monitor the SCR system to detect low-DEF levels, system failures, and alert the driver via a warning light." [V]
- Neutrality note: the web page's wording is partisan in places ("The Trump EPA is taking this action" [V]). Cite the facts, not the framing.
- Caution: the fact sheet's table for "HD Pickups and Light Duty Cars" appears to give a single final step at "4,200 miles / 80 hours" and "45 mph" [V] before "5 mph" [V], but the column layout is garbled in extraction. Do not quote figures from the table without reading the PDF visually.
Good for: the US side of the AdBlue lesson, with a date on it. This is a live policy area; see (f).

#### US EPA, "On-Board Diagnostic (OBD) Regulations and Requirements: Questions and Answers", EPA420-F-03-042, December 2003
https://nepis.epa.gov/Exe/ZyPDF.cgi/P100LW9G.PDF?Dockey=P100LW9G.PDF
Read: pdftotext, questions 1 to 8 in full (the rest skimmed). Also EPA's archived OBD page (snapshot of 19 January 2021): https://19january2021snapshot.epa.gov/state-and-local-transportation/vehicle-emissions-board-diagnostics-obd_.html
What it establishes:
- What the check engine light is: OBD "is able to determine the presence of a malfunction or deterioration that can affect emissions and illuminate the "Check Engine" or "Service Engine Soon" light (also known as the malfunction indicator lamp or MIL) on the dashboard." [V]
- "In some instances, the computer software may identify a problem before there is an overt indication to the vehicle operator." [V]
- OBD II light behaviour: the MIL "extinguishes after 3 consecutive trips where the problem did not re-occur." [V]
- Dates: "The OBD requirements were implemented beginning with the 1994 model year." [V] Waivers meant "1996 is commonly identified as the first year of full implementation" [V].
- What it monitors: "catalyst efficiency, oxygen sensor response and heater, exhaust gas re-circulation (EGR) system, fuel delivery system, engine misfire, evaporative system" [V] and more.
- The archived page: "The Clean Air Act requires 33 state and local areas to conduct vehicle inspection and maintenance programs" [V] (as of January 2021; Part C should verify current state list).
Good for: the check-engine light explanation; OBD as the basis of US emissions inspections (Part C).

#### fueleconomy.gov, "Keeping Your Vehicle in Shape", check engine section
https://www.fueleconomy.gov/feg/maintain.jsp
Read: full body text.
What it establishes:
- "It could be something as minor as a loose gas cap, but it could also be a more serious issue that could reduce your fuel economy, increase emissions, and/or lead to costly repairs later." [V] "So, when the check engine light comes on, have your vehicle inspected by a mechanic." [V]
- "Modern vehicles are so advanced that they may seem to drive normally even when a repair is needed, which sometimes leads drivers to ignore the indicator." [V]
Good for: the warning-lights lesson.

#### DVSA, "MOT inspection manual: cars and passenger vehicles", section 8 "Nuisance" (emissions)
https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles/8-nuisance
Read: full section 8 via the content API; `public_updated_at` 2025-06-24. Part C probably owns the MOT; recorded here for the emissions context the brief asks for.
What it establishes:
- MIL is checked at the MOT: "Turn on the ignition and check that the engine malfunction indicator lamp (MIL) illuminates and then goes off." (Assembled from a line-broken extract, so not marked [V].) Petrol cars are checked if "first used on or after 1 July 2003" [V]; diesels "first used on or after 1 July 2008" [V]. Defect "Engine MIL inoperative or indicating a malfunction" is Major.
- Diesel emission equipment: "You only need to check components that are visible and identifiable, such as diesel oxidation catalysts, diesel particulate filters, exhaust gas recirculation valves and selective catalytic reduction valves." [V] "Evidence that the diesel particulate filter has been tampered with" [V] is a Major defect.
- Smoke limits without a maker's plate: "For vehicles first used on or after 1 January 2014 the maximum level is 0.7m-1 for all engines." [V] "For vehicles first used between 1 July 2008 and 31 December 2013 the maximum level is 1.5m-1 for all engines." [V]
Good for: the link between "keep the DPF working" and "pass the MOT".

### 6. Fuel economy and emissions as maintenance bears on them

#### fueleconomy.gov, "Keeping Your Vehicle in Shape" (current) and its earlier versions
https://www.fueleconomy.gov/feg/maintain.jsp (current); Wayback captures 20071226033438, 20101226073534, 20130102005358, 20190104073529, 20210708122652, 20230706032230, 20250621175720
Read: current page full text; each capture's maintenance section, curl plus stripper.
What the current page says (read 26 September 2026):
- Tyres: "You can improve your gas mileage by 0.6% on average" [V] (the sentence continues "up to 3% in some cases", joined by an em dash in the source); "Under-inflated tires can lower gas mileage by about 0.2% for every 1 psi drop in the average pressure of all tires." [V]; "Do not use the maximum pressure printed on the tire's sidewall." [V] Table: "Fuel Economy Benefit: 0.6%", "Equivalent Gasoline Savings: $0.03/gallon" (table cells, flattened). Footnote: "Revised June 27, 2016." [V], assuming "an average under-inflation rate of 10% across all tires (25% for worst-case tire inflation scenarios)" [V].
- Oil grade: "You can improve your gas mileage by 1%–2% by using the manufacturer's recommended grade of motor oil. For example, using 10W-30 motor oil in an engine designed to use 5W-30 can lower your gas mileage by 1%–2%. Using 5W-30 in an engine designed for 5W-20 can lower your gas mileage by 1%–1.5%." [V] Source: a 2001 Energy and Environmental Analysis report.
- Air filter, heading: "Replacing a Clogged Air Filter on Modern Cars Improves Performance but Not MPG" [V]. Body: on fuel-injected, computer-controlled petrol engines (early 1980s onward) or diesels, replacing a clogged filter "does not improve fuel economy, but it can improve acceleration." [V] "Replacing a clogged air filter on an older vehicle with a carbureted engine can improve both fuel economy and acceleration by a few percent under normal replacement conditions." [V] Sources: ORNL 2009 (ORNL/TM-2009/021), SAE 2012-01-1717 (petrol) and SAE 2013-01-0311 (diesel).
- Price basis: "Cost savings are based on an assumed fuel price of $4.32/gallon." [V]
What changed, and when (this is the finding the brief asked for):
- **Air filter.** December 2007 capture: "Replacing a clogged air filter can improve your car's gas mileage by as much as 10 percent." [V] (line breaks removed). December 2010 capture, under "NEW INFORMATION": replacing a clogged filter on fuel-injected, computer-controlled petrol cars "does not improve fuel economy but it can improve acceleration time by around 6 to 11 percent" [V]; carbureted cars "may improve fuel economy 2 to 6 percent under normal replacement conditions or up to 14 percent if the filter is so clogged that it significantly affects drivability." [V]; and "The effect of a clogged air filter on diesel vehicles will be tested in the near future." [V] The diesel result (SAE 2013-01-0311) was added later; the current page includes diesels in the "no MPG gain" statement. So the 10 per cent claim was withdrawn by 2010 on the strength of ORNL's 2009 study.
- **Tyres.** 2007: "around 3.3 percent" and "0.4 percent for every 1 psi drop" [V]. 2010 and 2013: "up to 3.3 percent" and "0.3 percent for every 1 psi drop" [V]. Revised 27 June 2016 to the current 0.6% average and 0.2% per psi. The headline benefit fell about fivefold; the old 3.3% is now the worst case.
- **Tune-up and oxygen sensor.** The 2007 to 2021 versions said fixing a car "noticeably out of tune or has failed an emissions test can improve its gas mileage by an average of 4 percent" [V, 2010 wording] and "Fixing a serious maintenance problem, such as a faulty oxygen sensor, can improve your mileage by as much as 40 percent." [V, 2010 wording] The capture of 8 July 2021 still has it; the capture of 6 July 2023 has replaced it with the check-engine paragraph above. So both figures were dropped between July 2021 and July 2023. The 40 per cent oxygen-sensor figure still circulates widely and should not be used.
- **Oil grade.** Unchanged from 2010 to now.
Good for: the fuel-economy lesson, and a teaching example of how good advice gets revised. Drafters: always cite the current page and give the date read.

#### fueleconomy.gov, "Fuel Economy Myths and Misconceptions"
https://www.fueleconomy.gov/feg/myths.shtml
Read: full body text. No date; it refers to "the 2023 model year" [V].
What it establishes (each is a misconception with a government answer):
- Warm-up: "Modern vehicles can be driven within seconds of being started, though the engine should not be subjected to extreme loads until it has reached its normal operating temperature. Plus, the quickest way to warm up a vehicle's engine is to drive it." [V]
- Restarting: "Modern fuel-injected engines start very efficiently, especially when warmed up." [V]
- Air filter: "Changing a dirty air filter won't increase your fuel economy, but it might improve your engine's performance." [V]
- Premium: "Unless your vehicle was specifically designed for premium fuel or knocks severely with regular fuel, you will probably experience no benefit from using premium fuel over regular under normal conditions." [V]
- Additives and gadgets: "tests have shown that such devices and additives do not improve fuel economy and may damage your engine and/or increase your tailpipe emissions." [V]
- Ageing: "Vehicles that are 10 or even 15 years old will experience little decrease in fuel economy if properly maintained." [V]
- Manuals versus automatics: "the automatic version of a vehicle often gets the same or better fuel economy than the version with a manual transmission." [V]
- Petrol storage: in a sealed container "gasoline will stay within the ATSM standards for gasoline sold in the US for at least a year." [V] (sic, "ATSM" for ASTM in the source).
- E10: "The use of gasoline with 10% ethanol can decrease fuel economy by about 3% due to its lower energy density." [V]
Good for: the misconceptions lesson; nearly every item has a direct government answer.

#### fueleconomy.gov, "Selecting the Right Octane Fuel"
https://www.fueleconomy.gov/feg/octane.shtml
Read: full body text. No date.
What it establishes:
- "Octane rating is the measure of a fuel's ability to resist "knocking" or "pinging" during combustion" [V].
- "You should use the octane rating required for your vehicle by the manufacturer. So, check your owner's manual. Most gasoline vehicles are designed to run on 87 octane" [V] (US AKI scale).
- Lower than required: "can cause the engine to run poorly and can damage the engine and emissions control system over time. It may also void your warranty." [V]
- Higher than required: "under normal driving conditions, you may get little to no benefit." [V] If premium is only recommended, "The cost increase is typically higher than the fuel savings." [V]
- UK note: US pumps show AKI (87 regular); UK pumps show RON (95 standard, 97 to 99 super). The numbers are not comparable. I did not read a UK source on RON; see (f).
Good for: the premium-fuel misconception; the fuel lesson.

#### fueleconomy.gov, "Driving More Efficiently"
https://www.fueleconomy.gov/feg/driveHabits.jsp
Read: full body text.
What it establishes (only the maintenance-adjacent items; driving technique is out of scope):
- Roof boxes: "A large, blunt roof-top cargo box, for example, can reduce fuel economy by around 2% to 8% in city driving, 6% to 17% on the highway, and 10% to 25% at Interstate speeds (65 mph to 75 mph)." [V]
- Weight: "An extra 100 pounds in your vehicle could reduce your MPG by about 1%." [V]
- Idling: "Idling can use a quarter to a half gallon of fuel per hour, depending on engine size and air conditioner (AC) use." [V] "It only takes about 10 seconds worth of fuel to restart your vehicle." [V]
- Starter wear (Argonne 2015): limit engine starts to about 10 a day on average unless the car has a start-stop system (paraphrased; the source sentence contains an em dash). "Drive at least 5 miles between start cycles to fully recharge the battery." [V] This last line is useful for the battery lesson: short trips flatten 12 V batteries.
Good for: the battery lesson (short trips), the fuel-economy lesson (roof boxes, weight).

#### fueleconomy.gov, "Fuel Economy in Cold Weather" and "Fuel Economy in Hot Weather"
https://www.fueleconomy.gov/feg/coldweather.shtml and https://www.fueleconomy.gov/feg/hotweather.shtml
Read: full body text of both.
What they establish:
- Cold: "a conventional gasoline car's gas mileage is roughly 15% lower at 20°F than it would be at 77°F. It can drop as much as 24% for short (3- to 4-mile) trips." [V] Hybrids "can drop about 30% to 34%" [V]. EVs: "fuel economy can drop roughly 39% in mixed city and highway driving, and range can drop by 41%. About two-thirds of the extra energy consumed is used to heat the cabin." [V] (EV figures from a 2019 AAA test.) [Stage 4 note, lesson 04, 2026-09-26: the page's cold figures are at 20°F against 77°F (75°F in the EV no-heater line); print the temperature with the figure. More in the lesson 04 note at the end of this file.]
- Warm-up, again: warming up before a trip lowers fuel economy because "idling gets 0 miles per gallon" [V] and "Most manufacturers recommend driving off gently after about 30 seconds." [V]
- Cold and tyres: "Tire pressure decreases in colder temperatures, increasing rolling resistance." [V]
- Cold and the 12 V battery: "Battery performance decreases in cold weather, making it harder for your alternator to keep your battery charged." [V]
- EV tip: "preheating the cabin while plugged into the charger can extend your vehicle's range." [V]
- Hot: "Under very hot conditions, AC use can reduce a conventional vehicle's fuel economy by more than 25%, particularly on short trips." [V] Advice: "Roll the windows down at lower speeds; use the AC at highway speeds." [V]
Good for: the seasonal checks lesson; the EV winter range point.

#### Energy Saving Trust (UK, independent organisation funded largely by government contracts), "Reduce emissions through efficient driving"
https://energysavingtrust.org.uk/advice/efficient-driving/
Read: full text through Wayback capture 20260731174146 (live site refuses curl).
What it establishes:
- Tyres: "Under-inflated tyres increase your fuel consumption and can be dangerous, so check them at least once a month and before long journeys." [V]
- Idling: "Many newer cars automatically turn off when stationary in neutral. If yours doesn't, turn off your engine if you're going to be stationary for more than a minute." [V]
- EV regen: "use the higher levels of regen once you're comfortable to do so." [V]
- Conflict with fueleconomy.gov: "It's more fuel efficient to open a window than use air conditioning when driving, even at higher speeds." [V] fueleconomy.gov, citing two SAE papers (its references 1 and 4; the page does not call them Oak Ridge work), advises the reverse at highway speeds. See (c). (Corrected 2026-09-26 at lesson 12 Stage 4: this line said "an ORNL test".)
Good for: the UK voice on the same tips; the one place UK and US official-ish advice disagree.

#### CalRecycle (California state agency), "Check Your Number, Because 3,000 Miles May Be Too Early to Change Your Oil"
https://calrecycle.ca.gov/usedoil/oilchange/
Read: full page text. No date shown.
What it establishes:
- "The old standard of 3,000 miles is out of date and no longer applies to most cars." [V]
- "Many cars, even older models, can be driven up to 5,000, 7,500, 10,000, and even 15,000 miles before needing an oil change." [V]
- The instruction is to use the handbook: the campaign "urges Californians to check the recommended oil change interval in their owner's manual." [V] Disclaimer: "CalRecycle does not make recommendations regarding oil change frequency for any specific make or model of vehicle" [V].
- Why a waste agency cares: "115 million gallons of motor oil are sold in California a year." [V]
Good for: the 3,000-mile misconception, from a government source.

#### AAA (motoring organisation, not official; runs an "Approved Auto Repair" network), "How Often Should You Change Your Oil?"
https://www.aaa.com/autorepair/articles/does-your-car-need-an-oil-change-every-3000-miles
Read: full article text. No date extracted.
What it establishes:
- "Until recently, it was standard to change your car's engine oil every 3,000 miles, but advancements in oil blends and automotive technology now recommend oil changes every 5,000 to 7,500 miles for most engines." [V]
- Oil-life monitors: "Newer cars eliminate severe service recommendations because the oil-life monitoring system automatically shortens the oil change interval when it detects heavy-duty operation." [V] (This is a generalisation; some makers still publish severe-service schedules. Use the handbook.)
- Severe service includes "Primarily short trips (5 miles or less)" [V].
- Level checks between changes: "not getting your oil changed as often makes checking your oil level regularly more important" [V].
- Quality flags: the article says synthetic oil "Is more viscous at extreme temperatures" [V] (the useful property is that it stays fluid in cold and resists thinning in heat; "more viscous" is misleading) and that degraded oil causes the engine to release "toxic chemicals through the exhaust" [V]. Do not reuse either line.
Good for: corroborating CalRecycle from a motoring body; not for technical detail.

#### Car Care Council (US; industry-funded), "Be Car Care Aware"
https://www.carcare.org/ and PR Newswire release of 28 January 2019
Read: home page text; the 2019 release in full.
What it establishes:
- Funding, in its own director's words: the council "has been funded and directed by the Auto Care Association for nearly 20 years" [V] (Rich White, executive director, 2019). The Auto Care Association is the US aftermarket parts and service trade body.
- It calls itself "a non-profit organization dedicated to educating motorists about the importance of regular vehicle care, maintenance and repair" [V].
- California BAR links to it for "car care guides, videos, and do-it-yourself tips" [V].
Good for: a labelled link only. Its interest is in more maintenance being sold; say so.

#### California Bureau of Automotive Repair, "Maintenance and repairs"
https://www.bar.ca.gov/auto-repairs
Read: full page text. No date.
What it establishes (maintenance framing; consumer-rights detail belongs to the garage part):
- "Follow your owner's manual. Your vehicle owner's manual is a key resource for keeping your vehicle running its best. It includes the manufacturer's recommended maintenance schedule and other important vehicle information. It also explains your vehicle's warning lights and what to do if they come on." [V]
- "Use the service reminder system." [V]
- Warranty: "You can get warranty repairs at any auto shop, not just the dealership." [V] (California-framed; federal basis is Magnuson-Moss, not read here.)
Good for: "the handbook is the primary source" as a course-wide principle, from a regulator.

---

### Free resources to link, with status on 26 September 2026 (curl with the brief's user agent)

| Resource | URL | Status | Label |
|---|---|---|---|
| AFDC, How do all-electric cars work | https://afdc.energy.gov/vehicles/how-do-all-electric-cars-work | 200 | US government |
| AFDC, How do hybrid electric cars work | https://afdc.energy.gov/vehicles/how-do-hybrid-electric-cars-work | 200 | US government |
| AFDC, How do plug-in hybrids work | https://afdc.energy.gov/vehicles/how-do-plug-in-hybrid-electric-cars-work | 200 | US government |
| AFDC, How do gasoline cars work | https://afdc.energy.gov/vehicles/how-do-gasoline-cars-work | 200 | US government |
| AFDC, How do diesel vehicles work | https://afdc.energy.gov/vehicles/how-do-diesel-cars-work | 200 | US government |
| AFDC, Maintenance and safety of EVs | https://afdc.energy.gov/vehicles/electric-maintenance | 200 | US government |
| AFDC, Charging infrastructure | https://afdc.energy.gov/fuels/electricity-stations | 200 | US government |
| fueleconomy.gov, Keeping your vehicle in shape | https://www.fueleconomy.gov/feg/maintain.jsp | 200 | US government |
| fueleconomy.gov, Myths | https://www.fueleconomy.gov/feg/myths.shtml | 200 | US government |
| fueleconomy.gov, Octane | https://www.fueleconomy.gov/feg/octane.shtml | 200 | US government |
| fueleconomy.gov, Cold weather | https://www.fueleconomy.gov/feg/coldweather.shtml | 200 | US government |
| DOE, Internal combustion engine basics | https://www.energy.gov/eere/vehicles/articles/internal-combustion-engine-basics | 200 | US government |
| NHTSA TireWise | https://www.nhtsa.gov/vehicle-safety/tires | 403 to curl; live per Wayback 2026-09-24 | US government |
| NHTSA recalls | https://www.nhtsa.gov/recalls | 403 to curl; not verified | US government |
| Highway Code Annex 6 | https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security | 200 | UK government |
| DPF guidance note | https://www.gov.uk/government/publications/diesel-particulate-filters-guidance-note | 200 | UK government |
| MOT inspection manual s.8 | https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles/8-nuisance | 200 | UK government |
| EPA, Diesel exhaust fluid | https://www.epa.gov/regulations-emissions-vehicles-and-engines/diesel-exhaust-fluid | 200 | US government |
| CalRecycle, Check your number | https://calrecycle.ca.gov/usedoil/oilchange/ | 200 | California government |
| BAR, Maintenance and repairs | https://www.bar.ca.gov/auto-repairs | 200 | California regulator |
| eCFR, FMVSS 116 | https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.116 | 200 | US law |
| eCFR, FMVSS 135 | https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.135 | 200 | US law |
| Energy Saving Trust, Efficient driving | https://energysavingtrust.org.uk/advice/efficient-driving/ | 403 to curl; live per Wayback 2026-07-31 | UK, independent |
| RAC, DPFs | https://www.rac.co.uk/drive/advice/emissions/diesel-particulate-filters/ | 200 | motoring organisation, sells repairs |
| AA, DPFs | https://www.theaa.com/driving-advice/fuels-environment/diesel-particulate-filters | 200 | motoring organisation |
| AA, AdBlue | https://www.theaa.com/breakdown-cover/advice/adblue | 200 | motoring organisation |
| Car Care Council | https://www.carcare.org/ | 200 | industry-funded (Auto Care Association) |
| Auto Upkeep | https://www.autoupkeep.com/ | 200 | commercial publisher |

For a learner, the best three free links are AFDC's "How do ... work" pages (clear diagrams, one per powertrain), fueleconomy.gov's myths page, and the Highway Code Annex 6.

---

### (a) What this part says the field considers essential

1. **The same system map everywhere.** Halderman (US, 2025), Erjavec and Thompson (US, 2020), Denton and Pells (UK, 2023), Hillier (UK), the ASE MLR task list (US, 2024), the IMI Level 1 units (UK, 2021) and Auto Upkeep (US consumer, 2025) all divide the car the same way: engine (with lubrication, cooling, fuel, ignition, exhaust and emissions), electrical (12 V battery, starting, charging, lighting), brakes, steering and suspension, tyres and wheels, transmission and driveline, heating and air conditioning, and now hybrid and electric. Our "how a car works" lessons can follow that map without apology.
2. **Safety first, and xEV safety is now standard.** Halderman's Section X, Erjavec's chapters 35 and 36, and the ASE 2024 supplemental "xEV Vehicle Safety" tasks all treat high voltage as core. ASE's line is "greater than 30 VAC or 60 VDC" [V].
3. **Routine maintenance is its own subject.** Halderman Section V, Erjavec chapter 8, BTEC Unit 9, Auto Upkeep chapter 8. It covers fluid levels, lubricants, the service schedule, records and "roadworthy and legal condition".
4. **The owner's handbook is the authority.** BAR, CalRecycle, fueleconomy.gov (octane, oil grade, EV tips), AAA and the RAC (cambelt) all send the reader to the handbook for intervals and specifications.
5. **Diesel aftertreatment is part of owning a diesel.** The DPF needs the right driving pattern; SCR needs AdBlue. Both have warning lights, both can put the car into reduced power, and both are checked at the UK MOT.
6. **Hybrids still need engine maintenance; EVs need less, not none.** AFDC says so directly.

### (b) Common misconceptions (each named by a source)

1. **"Change your oil every 3,000 miles."** CalRecycle: "The old standard of 3,000 miles is out of date and no longer applies to most cars." [V] AAA: "5,000 to 7,500 miles for most engines" [V]. Answer: follow the handbook or oil-life monitor, and check the level between changes.
2. **"Premium fuel helps any car."** fueleconomy.gov myths page: "Unless your vehicle was specifically designed for premium fuel or knocks severely with regular fuel, you will probably experience no benefit" [V]. Octane page: "under normal driving conditions, you may get little to no benefit." [V]
3. **"EVs need no maintenance."** AFDC: EVs "require less maintenance" [V]; some battery cooling systems "may require regular checks" [V]; the AA's breakdown data put the 12 V battery and tyres at the top of EV call-outs.
4. **"A clogged air filter hurts fuel economy."** fueleconomy.gov has said since 2010 that on fuel-injected, computer-controlled engines, and now diesels, it does not; it affects acceleration. It was true for carburetted cars, and fueleconomy.gov itself said "as much as 10 percent" [V] in 2007.
5. **"Warm the engine up before driving."** fueleconomy.gov: "the quickest way to warm up a vehicle's engine is to drive it." [V]; "Most manufacturers recommend driving off gently after about 30 seconds." [V] UK law adds that running a stationary engine unnecessarily on a public road is an offence (Highway Code Rule 123, CUR regs 98 and 107).
6. **"Restarting uses more fuel than idling."** fueleconomy.gov: "It only takes about 10 seconds worth of fuel to restart your vehicle." [V]
7. **"Fixing an oxygen sensor improves mileage by 40%."** fueleconomy.gov published this until at least July 2021 and removed it by July 2023. It still circulates. Do not repeat it.
8. **"Tyre pressure gives you 3% better mileage."** fueleconomy.gov's average is now 0.6% (revised 27 June 2016); 3% is its worst case. NHTSA's "as much as 11 cents per gallon" is also a best case.
9. **"Fuel additives and gadgets improve economy."** fueleconomy.gov: tests show they "do not improve fuel economy and may damage your engine and/or increase your tailpipe emissions." [V]
10. **"ABS stops you shorter."** Highway Code Rule 120: "do not assume that a vehicle with ABS will stop in a shorter distance." [V]
11. **"AdBlue is a fuel additive" / "AdBlue is blue."** AA: "not a fuel additive" and "not actually blue at all" [V]; putting it in the fuel tank causes serious damage.
12. **"Petrol goes off in a few months."** fueleconomy.gov: sealed, at typical temperatures, it stays in specification "for at least a year" [V]. (Relevant to PHEV owners, and to seasonal storage.)

### (c) Contested questions

1. **Windows or air conditioning at speed.** Energy Saving Trust: opening a window is more efficient "even at higher speeds" [V]. fueleconomy.gov, citing two SAE papers (2013 and 2014; the page does not call either Oak Ridge work): windows at low speed, AC at highway speed. *Contested empirical.* The effect depends on the car's shape, the speed and the outside temperature. The lesson should present both, attribute each, and not make it a rule. (Corrected 2026-09-26 at lesson 12 Stage 4: this item said "say the difference is small either way", but no page read measures the gap, and fueleconomy.gov's one AC figure is "more than 25%" under very hot conditions. It also said "ORNL's 2014 test".)
2. **Oil-change intervals: handbook versus "severe service".** Many handbooks give a "normal" and a "severe" schedule, and a great deal of ordinary driving (short trips, cold starts, towing) meets "severe". AAA says oil-life monitors replace the severe schedule. *Contested empirical, and partly commercial* (garages profit from shorter intervals; makers advertise longer ones). Teach: read your own handbook's definition of severe service honestly, or use the monitor if fitted.
3. **How much fuel economy maintenance buys.** The figures have been revised down repeatedly (air filter, tyres, tune-up). *Established* in the narrow sense that current federal figures are small (0.6% tyres, 1% to 2% oil grade); the popular larger figures are out of date. Not really contested among sources, but contested in the wider market, which is why it matters to teach.
4. **Whether a diesel suits a low-mileage urban driver.** The AA and RAC both advise against a DPF diesel for mainly short, slow trips. *Established* as a practical matter by two motoring bodies; no source disagrees. It is a purchasing judgement, so frame it as advice.
5. **US DEF derates.** EPA guidance is changing month by month (August 2025, February 2026, March 2026), and the MY2027 rule changes behaviour for new vehicles. *Contested policy (value) and moving fact.* State only what the EPA page says, with its date.

### (d) UK vs US differences

- **Vocabulary.** petrol / gasoline; bonnet / hood; boot / trunk; tyre / tire; cambelt / timing belt; handbrake / parking brake; engine management light / check engine light (both are the MIL); AdBlue / DEF (AdBlue is a trade name; DEF is the generic US term); MOT / state inspection (Part C).
- **Diesel share.** Diesel cars are common in the UK and rare as US passenger cars (Part of why US consumer pages say little about DPFs). AdBlue in the UK is mainly a car issue; in the US DEF is mainly a truck and heavy pickup issue, and the EPA page is written for farmers and truckers.
- **Octane.** US pumps show AKI ("87" regular); UK pumps show RON ("95" standard, higher for super). Different scales. Not verified from a UK source in this part.
- **Charging.** US Level 1 (120 V), Level 2 (208 or 240 V), DC fast. UK single-phase domestic supply is 230 V; there is no "Level 1" in UK usage; UK connectors are Type 2 and CCS. UK facts need a UK source (not read here).
- **Brake fluid and ABS lights.** US: FMVSS 135 prescribes red "Brake" and yellow "ABS" indicators. UK and EU: UN Regulation 13-H (not read). The owner-facing meaning is the same.
- **Emissions checks.** UK MOT checks the MIL (petrol from 1 July 2003, diesel from 1 July 2008), DPF presence and smoke opacity. US checks are state programmes, many using the OBD port (Part C).
- **Idling.** UK: an offence to leave an engine running unnecessarily when stationary on a public road (Rule 123). US: local anti-idling rules vary (not researched here).
- **Tyre tread.** UK legal minimum 1.6 mm across the central three-quarters (Highway Code Annex 6); NHTSA advises replacement at 2/32 inch (about 1.6 mm) but that is guidance; US legal minimums are state law (Part B or C).
- **Qualifications.** UK: IMI and BTEC/Pearson Level 1 to 3, regulated by Ofqual. US: ASE Education Foundation accredits programmes (MLR 540 hours, AST 840, MAST 1200); individual ASE certification is separate.

### (e) Safety-critical notes for drafters

1. **Hot coolant.** Never open a hot cooling system. The Highway Code: wait "until it has cooled naturally" [V] before removing the filler cap. Say why: the system is pressurised and the coolant is above its normal boiling point.
2. **Engine fire.** Do not open the bonnet (Highway Code Annex 6). Get people out and call the fire service. Cross-reference the breakdown lesson.
3. **Brake fluid.** Absorbs water (FMVSS 116 label text); use only the grade on the reservoir cap; never mix DOT 5 silicone with the others; low fluid "may result in brake failure" [V]. A red brake light while driving is a stop-safely signal. Brake fluid also damages paint (not sourced here; see (f)).
4. **High voltage.** Orange cables; "greater than 30 VAC or 60 VDC" is high voltage (ASE 2024). Owners do not open, cut or probe orange cables or the traction battery. Some systems "may operate while the key switch/ignition is off" [V] (ASE). Damaged EV batteries can ignite late or reignite (AFDC). Cross-reference Part D.
5. **AdBlue in the fuel tank.** Do not start the engine or switch on the ignition (AA). Call for help.
6. **Wrong octane.** Using lower octane than required "can damage the engine and emissions control system over time" [V] (fueleconomy.gov).
7. **Flashing check engine light.** Widely described in makers' handbooks as a severe misfire that can overheat the catalytic converter and even start a fire. I have only snippets for this; it must be sourced from a handbook before a lesson says it (see (f)). It is the one check-engine behaviour an owner must know.
8. **DPF removal.** Illegal in the UK (C&U Regulation 61A; fines up to £1,000 for a car), an MOT failure since February 2014, and it may void insurance (RAC and AA). Lessons should not describe "delete" services except to warn against them.
9. **Do not trust TPMS alone.** It warns only when a tyre is "significantly underinflated" [V] (NHTSA). Monthly gauge checks still apply.

### (f) Gates: claims that need a primary read before a lesson states them

1. **Flashing MIL means severe misfire and catalyst damage risk.** Read at least one maker's owner's handbook (Ford, Toyota, Vauxhall or VW) in full for the MIL section and quote it.
2. **Timing chain versus belt life, and interference engines.** Only commercial snippets. Read a maker's handbook service schedule for one belt engine and one chain engine, or Halderman "Camshafts and Valve Trains" / Denton chapter 2.
3. **Inverter.** AFDC uses "power electronics controller". If a lesson says "inverter", cite a textbook chapter or a maker's technical page.
4. **Alternator, fuses, lighting, steering and suspension mechanisms.** No free official source read. Draft from Halderman Section VII and XII, Erjavec Parts III and VII, or Denton chapters 3 and 4, read in full, and cite page numbers.
5. **Brake fluid change intervals and paint damage.** FMVSS 116 establishes the water absorption; the interval (commonly two years in UK handbooks) must come from a handbook.
6. **Oil-change interval examples by maker** (for example "Ford 10,000 miles", "BMW 15,000 miles"): snippets only. Read the handbook or maker's service page before naming any maker.
7. **UK EV charging facts** (230 V, Type 2, speeds in kW, home charger rules). Read GOV.UK or OZEV pages; not read here.
8. **UK fuel octane (RON 95, E10 since September 2021).** Read GOV.UK E10 guidance; not read here.
9. **EOBD dates in the UK/EU** (petrol 2001, diesel 2004 under Directive 98/69/EC). Not read. The MOT manual's MIL dates (2003 and 2008) are for the test, not for when EOBD was fitted.
10. **US DEF inducement behaviour for light-duty cars.** Read the EPA guidance letter (IACD-2025-10 and IACD-2026-05) directly and date the statement. The fact sheet table did not extract cleanly.
11. **"DOE study" that EV batteries last 12 to 15 years (fueleconomy.gov).** The study is not named on the page. Find and read it, or attribute the figure to fueleconomy.gov only.
12. **The AA's EV breakdown figures are from 2021.** Look for a newer AA or RAC release before stating "the commonest EV breakdown" as current.
13. **"Micro", "mild", "full" hybrid definitions.** AFDC treats micro and mild as one. Read an SMMT or maker definition for 48 V mild hybrids before a UK lesson defines them.
14. **Hillier 6th edition contents.** Only the 5th edition abstract was read.
15. **High voltage figure for hybrids.** AFDC's "400 to 1,000 volts" is too broad for mild hybrids. Cite a maker's figure for any specific car.

### (g) Not read

*Each part's own "Not read" list and UNREAD line below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*


- Halderman, Erjavec and Thompson, Denton and Pells, Hillier, Auto Upkeep: only publisher tables of contents and blurbs were read, not the books.
- Hillier 6th edition table of contents (OUP page returned empty); Hillier 5th edition read only as a TRID abstract.
- Erjavec 8th edition (search snippet only).
- Tom Denton's other IMI-linked books, including *Automotive Technician Training*; the automotive-technology.org site.
- City & Guilds light vehicle maintenance qualifications (for example 4290 or 3902): not searched in depth, not read.
- IMI Level 1 unit content (learning outcomes); IMI Level 2 and 3 light vehicle specifications; the IMI International L1 Certificate page.
- UN Regulation 13-H (braking) and any UK or EU type-approval text on warning lamps.
- EU Directive 98/69/EC (EOBD).
- Johnson County Community College "Basic Car Care and Maintenance" course page (snippet only); Maricopa and De Anza pages (403); Denver Tool Library class page (fetched, not used).
- OpenLearn "Transport and sustainability" sections (403).
- Makers' owner's handbooks of any kind.
- The ORNL and SAE studies behind fueleconomy.gov figures (ORNL/TM-2009/021; SAE 2012-01-1717; SAE 2013-01-0311; SAE 2014-01-1614; Argonne 2015 stop-start study; AAA 2019 EV range test).
- The Energy and Environmental Analysis 2001 report "Owner Related Fuel Economy Improvements".
- NHTSA's live website (read only through Wayback); NHTSA's ABS consumer material and ABS research reports (snippets only); NHTSA "The Pneumatic Tire".
- EPA guidance letters on DEF (IACD-2025-10; IACD-2026-05); the EPA I/M OBD guidance (EPA420-R-01-015).
- COMEAP 2008 report.
- UK government pages on EV charging, E10 petrol, and anti-idling enforcement.
- Bosch Automotive Handbook; Haynes manuals; Heywood's *Internal Combustion Engine Fundamentals*.
- The RAC and AA pages on dashboard warning lights (the AA page was fetched but not read for this part; Part B likely covers it).
- SMMT definitions of hybrid types.

Part's own list (superseded): Automotive Technology: Principles Diagnosis and Service (book text); Automotive Technology: A Systems Approach (book text); Automobile Mechanical and Electrical Systems (book text); Hillier's Fundamentals of Motor Vehicle Technology 6th edition; Auto Upkeep (book text); Automotive Technician Training; City & Guilds 4290; City & Guilds 3902; IMI Level 2 Light Vehicle Maintenance; IMI Level 3 Light Vehicle Maintenance; UN Regulation 13-H; Directive 98/69/EC; Basic Car Care and Maintenance (Johnson County Community College); OpenLearn Transport and sustainability; ORNL/TM-2009/021; SAE 2012-01-1717; SAE 2013-01-0311; SAE 2014-01-1614; Owner Related Fuel Economy Improvements; The Pneumatic Tire; EPA420-R-01-015; IACD-2025-10; IACD-2026-05; COMEAP 2008; Bosch Automotive Handbook; Haynes; Internal Combustion Engine Fundamentals; owner's handbook (any maker); AAA Electric Vehicle Range Testing; SMMT hybrid definitions; GOV.UK E10 petrol guidance

---

## Part B: Owner's routine checks, warning lights, the 12 V battery, EV and hybrid safety, seasonal checks

Researcher B, Stage 1, Car Basics. Read 26 September 2026.

Conventions: **[V]** copied verbatim from text I extracted myself (curl plus pandoc, pdftotext, GOV.UK content API, eCFR API, or an Internet Archive capture). **[T]** words returned through WebFetch (none used in this part). **Snippet only**: seen only in a search result, never quoted, never a finding. Where a quotation in a source contained a dash I have either chosen a different sentence or paraphrased, so that this file carries no em dashes.

Access notes that matter to the whole course:
- **nhtsa.gov blocks curl** (Akamai "Access Denied"). Every NHTSA page below was read through an Internet Archive capture; the capture ID is given for each. Other researchers will hit the same wall.
- **fordservicecontent.com blocks curl** the same way. The Ford handbook was read from an Internet Archive raw capture.
- **tesla.com blocks curl (403)**, and the only Internet Archive capture of the Model 3 owner's manual PDF is truncated at exactly 5 MB and will not parse. The Tesla manual is therefore unread.
- **eCFR tables for FMVSS 101 are images**. The text of 49 CFR 571.101 was read through the eCFR API; Table 1 (the colour table) was read by viewing the Federal Register image files at img.federalregister.gov (ER03JA25.001 to .005). Strings from those images are marked [V-img]: transcribed by me from the official image, not machine-extracted.
- GOV.UK Highway Code pages read through the content API; the API gives a public_updated_at date but the Code itself has no page numbers online, so rules are cited by rule number and Annex 6 by its heading.

### 1. Tyres as an owner's check

#### GOV.UK, The Highway Code, "Annex 6. Vehicle maintenance, safety and security"
https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security
Read: full text, GOV.UK content API. public_updated_at 2022-01-29. The Highway Code is issued by the Department for Transport and DVSA; rules with MUST are legal requirements, with the law cited under each.
What it establishes:
- Tyre pressure is a legal as well as a safety matter: "Tyres MUST be correctly inflated to the vehicle manufacturer's specification for the load being carried. Always refer to the vehicle's handbook or data." [V] Law cited: "Law CUR reg 27" [V].
- How and when: "Tyre pressures. Check weekly. Do this before your journey, when tyres are cold. Warm or hot tyres may give a misleading reading." [V] Note the Code says weekly; NHTSA, AAA, TyreSafe and the AA say monthly or fortnightly (see (c)).
- What wear tells you: "Excessive or uneven tyre wear may be caused by faults in the braking or suspension systems, or wheels which are out of alignment." [V]
- Damage: tyres "should also be free from certain cuts and other defects." [V]
- Tread (noted only, legal limits belong to Parts C and D): "Cars, light vans and light trailers MUST have a tread depth of at least 1.6 mm across the central three-quarters of the breadth of the tread and around the entire circumference." [V]
- Tyre age: the 10-year rule in Annex 6 applies only to front axles of goods vehicles over 3.5 tonnes and passenger vehicles with more than 8 passenger seats (and rear single-wheel axles of 9 to 16 seat vehicles). It does **not** apply to private cars. "To prove the age of a tyre, it is further required that the date of tyre manufacture marking MUST always be legible." [V] Noted for Part C.
- Flat tyre: "Only change the tyre if you can do so without putting yourself or others at risk - otherwise call a breakdown service." [V] (hyphen as in source).
Good for: tyre check lesson; the UK framing of pressure as a legal duty.

#### NHTSA, "Tires" (vehicle-safety/tires)
https://www.nhtsa.gov/vehicle-safety/tires
Read: full text via Internet Archive capture 20260924021938. US federal regulator.
What it establishes:
- Pressure is the first check: "Proper tire pressure is the most important part of maintaining your tires." [V]
- Cold defined: "Check the pressure of all tires, including your spare, at least once a month when the tires are "cold," meaning that the car hasn't been driven for at least three hours." [V]
- Where the figure is: on "the Tire and Loading Information Label on the driver's side door edge or in your owner's manual." [V] And the sidewall trap: "(Remember, the correct pressure for your tire is what the vehicle manufacturer has listed, NOT what is listed on the tire itself.)" [V]
- Warm-tyre compromise when away from home: "it is safer to drive with air pressure that is slightly lower than the vehicle manufacturer's recommended" (sentence continues) [V]; recheck when cold.
- Tread: "Tires are not safe and should be replaced when the tread is worn down to 2/32 of an inch." [V]
- Tread wear indicators: "Tires have built-in "treadwear indicators," which are raised sections that run in between the tire's tread. When the tread is worn down so that it's level with the tread indicator, it's time to replace your tires." [V]
- Penny test: "You can also check your tread by placing a penny in the tread with Lincoln's head upside down and facing you. If you can see the top of Lincoln's head, replace your tires." [V]
- TPMS is not a substitute: "Newer vehicles have Tire Pressure Monitoring Systems, but these only activate a warning when a tire is significantly underinflated. You should still conduct a monthly tire pressure check to ensure your tires are always properly inflated." [V]
- TPMS required on "All passenger cars, light trucks and vans that are model year 2008 or newer" [V].
- TPMS cold-morning flicker: "On cold mornings, the TPMS symbol may illuminate for a short period of time and then turn off." [V] Malfunction: "A system malfunction may be indicated by a flashing of the TPMS symbol for 60 to 90 seconds with the warning lamp remaining illuminated after the flashing sequence." [V]
- Age: "Some vehicle and tire manufacturers recommend replacing tires that are six to 10 years old, regardless of treadwear." [V] Reading the date: "The last four digits of the TIN indicate the week and year the tire was made. If the TIN reads 0308 it was made in the third week of 2008." [V] "The TIN may not be on both sides." [V]
- Damage signs: stop using tyres for "signs of physical damage (cuts, cracks, bulges, etc.)" [V].
- Spare: NHTSA recommends a full-size spare "not be used as a replacement for worn tires, except in emergencies such as replacing a flat tire." [V]
- Blowout: "Hold the steering wheel with both hands." then "Gradually release the accelerator." [V] (listed steps; do not slam on brakes).
Good for: US side of tyre checks, TPMS, tyre age and DOT date code.

#### eCFR, 49 CFR 571.138 (FMVSS No. 138, Tire pressure monitoring systems), S4.2
https://www.ecfr.gov/api/versioner/v1/full/2026-09-01/title-49.xml?part=571&section=571.138
Read: S4.2 only, eCFR API (version dated 2026-09-01).
What it establishes:
- The TPMS light is required to come on "not more than 20 minutes after the inflation pressure in one or more of the vehicle's tires, up to a total of four tires, is equal to or less than either the pressure 25 percent below the vehicle manufacturer's recommended cold inflation pressure" (or a table minimum, whichever is higher) [V]. This is the primary source for "significantly underinflated": a tyre can be up to a quarter low before the light is required.
Good for: why TPMS does not replace a gauge.

#### TyreSafe, "How to Check Your Tyre Tread Depth"; "How to check your tyre tread depth with a 20p coin"; "Check your pressures"; "How to check your tyres condition"; "About TyreSafe"
https://www.tyresafe.org/tyre-safety/tread-depth (redirected to the checks section), https://www.tyresafe.org/the-checks/tread-depth/20p-test/, https://www.tyresafe.org/the-checks/check-your-pressures/, https://www.tyresafe.org/the-checks/condition/, https://www.tyresafe.org/about-tyresafe/
Read: full text of all five, curl plus pandoc. Tread page "Last updated: September 16, 2026"; 20p page "Last updated: December 11, 2025"; pressures "September 16, 2026"; condition "December 11, 2025".
Who they are: a registered charity ("registration number 1168354" [V], "founded in 2006" [V]). **Industry funded in practice:** its supporters list (linked from every page) names tyre makers (Michelin, Bridgestone, Continental, Goodyear, Dunlop, Hankook, Kumho, Falken, Nankang), carmakers (Ford, Audi, Mercedes-Benz, Fiat, Jeep, Lexus, Chrysler, Alfa Romeo, Abarth), and tyre retailers (Halfords, Asda Tyres, Blackcircles.com, Micheldever, National Tyres and Autocare). I did not find a published statement of income sources on the pages read; the Charity Commission register entry was not read. Lessons should call TyreSafe "a UK tyre safety charity backed by the tyre industry" and not treat its "replace at 3mm" line as neutral.
What it establishes:
- The 20p test, TyreSafe's version: "If the outer band of the 20p coin is obscured when it is inserted, then your tread is above the legal limit. If the outer band of the coin is visible, then your tyres may be illegal and unsafe and should be checked immediately by a qualified tyre professional." [V] "check at least three locations around each tyre" [V].
- The tread page's own summary: "Use the 20p test or a tread depth gauge to measure tyre tread" [V]; "Tyre and safety experts recommend replacing tyres at 3mm" [V]; "Check tyres monthly or before long trips" [V].
- The MIRA figure (secondhand, see (f)): "In tests carried out by MIRA , cars with 1.6mm tread had up to 44% longer braking distances in the wet than those with 3mm." [V] (spacing as in source).
- New tyre depth: "New tyres generally have a tread depth of between 7-9 mm." [V]
- Penalty: "fines of up to £2,500 and three penalty points PER tyre" [V] (legal figure; Part C to confirm from primary law).
- Pressures: "You should try to check your tyre pressure every month or before every long journey." [V] "TPMS is designed to be a critical warning system and not a reminder to check the vehicle's tyres." [V] Where to find the figure: "in your vehicle manual, on a plaque in one of the front door sills or the inside of your fuel cap." [V]
- Over-inflation: "Over-inflation will round out the middle of the tread pattern, and the tyre will have a reduced contact area with the road" [V].
- Condition: "If the tyre has lumps or bulges it must be examined by a tyre specialist since these could indicate internal damage." [V]
- Winter tyres: "The minimum tread depth recommended for winter tyres is 4mm." [V]
Good for: UK tyre check; the 20p test; the recommendation-versus-law distinction.

#### TyreSafe supporter page, "Michelin"
https://www.tyresafe.org/about-tyresafe/latest-news/tyresafe-supporters/michelin/
Read: full text, curl plus pandoc.
What it establishes:
- A TyreSafe supporter, on TyreSafe's own site, disputes the tread-depth replacement message: "Contrary to popular belief, tread depth does not guarantee safe tyres. The real difference lies in how well tyres are designed." [V] Michelin argues for running tyres to the legal limit on environmental and cost grounds ("having tyres that are still safe when worn means changing our tyres less often" [V]). This is the other side of the 3mm question and comes from an interested party.
Good for: contested question on when to replace.

#### The AA, "Check your tyres for proper tread depth"
https://www.theaa.com/driving-advice/legal/tyres
Read: full text, curl plus pandoc. "Updated: 29 October 2024 | Author: The AA" [V]. Motoring organisation (and a commercial breakdown and insurance business).
What it establishes:
- **The only source I found that says what the 20p test actually measures:** "If you don't have a gauge, you can test your tyres with a 20p coin, as its outer rim is just under 3 mm wide." [V] and "If the outer rim of the coin is obscured, it means your tyre is comfortably above the legal minimum tread depth." [V] "If you can see part of the rim of the coin then it's time to check your tyres more carefully using a proper tyre tread depth gauge." [V]
- Tread wear indicators: "usually small bars, about 5 mm wide, built into the base of the tyre's main grooves." [V] "If the tyre tread is level with the top of the wear indicator, it means your tyres have reached the legal limit of 1.6 mm." [V]
- AA's own replacement advice: "Check your tyre tread depth more often once they get down to 3 mm. Aim to replace tyres before the tread wears below 2 mm." [V]
- Defects (for Part C to confirm in law): "A cut or tear bigger than 25 mm or 10% of the width of the tyre, whichever is greater, and which is deep enough to reach the ply or cord." [V]
Good for: explaining what the 20p test shows.

#### RAC Drive, "Tyre tread depth, UK law and tyre safety checks"
https://www.rac.co.uk/drive/advice/tyres/checking-tyre-tread/
Read: full text, curl plus pandoc. Page JSON "date":"2026-09-07". Motoring organisation (commercial).
What it establishes:
- The common wording: "If you can't see the outer band on the coin, your tyres are above the legal limit." [V] RAC suggests the test "around every two weeks and before long journeys." [V]
- "Tyre and safety experts believe the 1.6mm legal minimum is insufficient to guarantee safety" [V]; the sentence continues after a dash in the original that most experts recommend 3mm for replacement (paraphrase).
- Age: "Even if you drive limited miles each year, tyres should be replaced every five or six years." [V] This is stricter than NHTSA's "six to 10 years" range; see (c).
Good for: showing where the popular phrasing comes from.

#### National Highways, "How to check your vehicle"
https://nationalhighways.co.uk/road-safety/how-to-check-your-vehicle/
Read: full text, curl plus pandoc. No date shown. Government-owned company running England's motorways and major A roads.
What it establishes:
- "Place a 20p coin into the main grooves of the tread. If you can't see the raised outer rim of the coin (with the words "TWENTY PENCE" engraved), then the tyre has sufficient tread depth." [V]
- "Also look around each tyre to make sure they don't have any cuts, bulges or other damage to the tyre walls." [V]
- Imprecision to avoid copying: "All tyres are legally required to have a minimum tread depth of 1.6mm." [V] True for cars, not for motorcycles or large vehicles (1 mm per Annex 6).
- Breakdown statistic: "Every year our traffic officers deal with more than 85,000 breakdowns. Over 40 per cent of these are caused by vehicles running out of fuel, poor tyre maintenance, power loss and engine trouble." [V]
Good for: official UK checklist wording (also used in section 2).

#### AAA, "Tread Lightly: Worn Tires Put Drivers at Risk" (news release) and AAA Exchange, "Tire Safety and Maintenance"
https://newsroom.aaa.com/2018/06/tread-lightly-worn-tires-drivers-risk/ ; https://exchange.aaa.com/automotive/car-care-repair-and-maintenance/tire-safety-and-maintenance/
Read: full text of both, curl plus pandoc. News release dated "Jun. 7, 2018" [V]; Exchange page undated. AAA is a US federation of motor clubs (motoring organisation).
What it establishes:
- AAA test with the Automobile Club of Southern California: tyres worn to 4/32" showed "An average increased stopping distance of 87 feet for a passenger car and 86 feet for a light truck." [V] on wet pavement at highway speed.
- AAA's position against the common 2/32" point: "AAA maintains that tires should be replaced once the tread depth reaches 4/32”, when stopping distances have already begun to deteriorate significantly." [V]
- Quarter test: "Insert a quarter into a tread groove with the top of Washington's head facing down. If the top of his head is not visible, your tires have at least 4/32” of tread and are fine for continued use." [V] Penny test by contrast: "if you can see above the top of Lincoln's head your tires have less than 2/32” of tread" [V].
- AAA's penny sentence then adds "which is below the legal minimum" [V]; this is a generalisation. AAA's own release says state requirements "range from inadequate to non-existent" [V]. Part D owns the state picture; drafters should not repeat "the legal minimum" as if it were national.
- Pressure gauges: "Pressure gauges built into air hoses at gas stations are often abused and frequently inaccurate." [V] Warm tyres can read "up to 5 psi higher than the recommended pressure" [V].
- Wear patterns: over-inflation wears the centre; under-inflation wears "both edges" [V]; wear on one edge "typically occurs when the wheels are out of alignment." [V]
Good for: US tread tests; the quarter-versus-penny argument.

### 2. Fluids, lights and wipers

#### The Highway Code, Annex 6 (as above)
What it establishes for fluids and other checks:
- "Fluid levels. Check the fluid levels in your vehicle at least weekly. Low brake fluid may result in brake failure and a crash. Make sure you recognise the low fluid warning lights if your vehicle has them fitted." [V]
- Coolant and heat: "If your engine overheats, you should wait until it has cooled naturally. Only then remove the coolant filler cap and add water or other coolant." [V]
- Lights, windows, wipers (legal): "lights, indicators, reflectors, and number plates MUST be kept clean and clear" [V]; "windscreens and windows MUST be kept clean and free from obstructions to vision" [V]; "Take special care that lights, brakes, steering, exhaust system, seat belts, demisters, wipers, washers and any audible warning systems are all working." [V] Laws cited "RVLR 1989 regs 23 & 27, & CUR regs 30 & 61" [V].
- Symptoms an owner can notice: a car that "pulls to one side when braking, it is most likely to be a brake fault or incorrectly inflated tyres. Consult a garage or mechanic immediately" [V]; one that "continues to bounce after pushing down on the front or rear, its shock absorbers are worn." [V]; smells of "burning rubber, petrol or an electrical fault; investigate immediately. Do not risk a fire." [V]
- Fuel cap and leaks: check "the seal in the cap is not torn, perished or missing" [V].
Good for: the checks lesson, and the legal framing of lights and glass.

#### Ford Motor Company, "2024 Maverick Owner's Manual" (edition 202307, first printing), USA/Canada
https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/2024_Ford_Maverick_Owners_Manual_version_1_om_EN-US.pdf
Read: via Internet Archive raw capture 20250505042038 (direct curl blocked). 558 PDF pages; read pages on oil, coolant, brake fluid, washer, warning lamps, high-voltage battery, crash and jump starting in full (printed pages 89, 90, 113, 114, 164, 184, 193, 283 to 286, 308, 309). The Maverick is sold with a 2.0 L petrol engine or as a full hybrid, so one handbook covers both. Printed page numbers are the handbook's own; each page footer reads "2024 Maverick (CFE) Canada/United States of America, enUSA, Edition date: 202307, First-Printing" [V].
What it establishes:
- **Oil (p. 308):** "1. Make sure that your vehicle is on level ground." [V] "2. Check the oil level before starting the engine, or switch the engine off after warm up and wait 15 minutes for the oil to drain into the oil pan." [V] "Note: Read both sides of the dipstick and use the lowest oil level as the correct reading." [V] "Note: If the oil level is between the maximum and minimum marks, the oil level is acceptable. Do not add oil." [V] "6. If the oil level is at the minimum mark, immediately add oil." [V] "WARNING: Do not add engine oil when the engine is hot." [V] "Do not use supplemental engine oil additives because they are unnecessary and could lead to engine damage that the vehicle warranty may not cover." [V] Grade: "Add engine oil that meets our specifications. See Capacities and Specifications (page 367)." [V] (p. 309) "Oil levels above the maximum mark may cause engine damage." [V]
- **Coolant (p. 309):** "When the engine is cold, check the concentration and level of the coolant" [V]; "Note: Coolant expands when it is hot. The level may extend beyond the MAX mark." [V]; "WARNING: Do not remove the coolant reservoir cap when the engine is on or the cooling system is hot. Wait 10 minutes for the cooling system to cool down. Cover the coolant reservoir cap with a thick cloth to prevent the possibility of scalding and slowly remove the cap." [V] Note Ford's "10 minutes" is shorter than most general advice; lessons should say "until cold, per your handbook".
- **Brake fluid (p. 193):** "Look at the brake fluid reservoir to see where the brake fluid level is relative to the MIN and the MAX marks on the reservoir." [V] "WARNING: Only use brake fluid from a sealed container." [V] "WARNING: The brake system could be affected if the brake fluid level is below the MIN mark or above the MAX mark on the brake fluid reservoir." [V]
- **Washer fluid (p. 89 to 90):** "WARNING: If you operate your vehicle in temperatures below 41°F (5°C), use washer fluid with antifreeze protection." [V] "Do not operate the washers when the washer reservoir is empty. This could cause the washer pump to overheat." [V]
Good for: petrol and hybrid handbook checks, US.

#### Nissan North America, "2024 LEAF Owner's Manual and Maintenance Information"
https://www.nissanusa.com/content/dam/Nissan/us/manuals-and-guides/leaf/2024/2024-nissan-leaf-owner-manual.pdf
Read: pdftotext, 610 PDF pages (PDF created 20 April 2023). Read in full: EV-7 to EV-8, CH-2, CH-12, 2-15 to 2-23, 6-10 to 6-12, 8-2, 8-5 to 8-8, 9-3 to 9-4. Printed page labels are the handbook's own section-page numbers.
What it establishes (fluids in an EV):
- **Coolant in an EV still exists (p. 8-6):** "Check the coolant level in the reservoir when the high-voltage parts are cold." [V] "Never remove the coolant reservoir cap when the motor compartment is hot. Serious burns could be caused by high-pressure fluid escaping from the radiator." [V]
- **Brake fluid (p. 8-7):** "If the fluid is below the MIN line or the brake warning light illuminates, add Genuine NISSAN Super Heavy Duty Brake Fluid or equivalent DOT 3 fluid up to the MAX line" [V: the source has a figure callout letter between "MIN line" and "or"; I have dropped it]. "If fluid must be added frequently, the system should be checked." [V] "Brake fluid is poisonous and should be stored carefully in marked containers out of the reach of children." [V]
- **Owner check list (pp. 9-3 to 9-4):** "Brake fluid level*: Make sure that the brake fluid levels are between the MAX and MIN lines on the reservoir." [V] "Lights*: Clean the headlights on a regular basis." [V] "Windshield wiper blades*: Check for cracks or wear if they do not wipe properly." [V] "Fluid leaks: Check under the vehicle for water or other fluid leaks after the vehicle has been parked for a while. Water dripping from the air conditioner after use is normal." [V] "Brake pedal: ... If the brake pedal suddenly goes down further than normal, the pedal feels spongy or the vehicle seems to take longer to stop, it is recommended that you visit a NISSAN certified LEAF dealer immediately." [V, ellipsis mine]
- General precautions (p. 8-2): "Always wear eye protection whenever you work on your vehicle." [V] "Never get under the vehicle while it is supported only by a jack." [V]
Good for: showing that an EV still has brake fluid, coolant, washer, tyres and a 12 V battery to check.

#### Toyota Motor Corporation, "Corolla (U)" Owner's Manual, publication OM12691U, printed 1998
https://assets.sia.toyota.com/publications/en/om-s/OM12704U/pdf/OM12704U.pdf
Read: pdftotext, 228 PDF pages; searched, and read printed page 190 (PDF 197) in full. The file served at the OM12704U address carries "Publication No. OM12691U" and "©1998 TOYOTA MOTOR CORPORATION" [V]: a late-1990s US Corolla handbook. Old, but it is the one maker text I found that states the pad-wear link directly.
What it establishes:
- "It is normal for the brake fluid level to go down slightly as the brake pads wear. So be sure to keep the reservoir filled." [V] "If the reservoir needs frequent refilling, it may indicate a serious mechanical problem." [V] (p. 190)
- Pad wear indicators: "The brake pad wear limit indicators on your disc brakes give a warning noise when the brake pads are worn to where replacement is required." [V]
Good for: the brake-fluid-falls-as-pads-wear point. A current handbook saying the same would be better; see (f).

#### The AA, "10 essential car maintenance tips"
https://www.theaa.com/breakdown-cover/advice/car-maintenance-tips
Read: full text, curl plus pandoc. "Updated: 10 July 2025" [V].
What it establishes:
- "Battery problems are the number one cause of breakdowns at any time of year, and particularly for vehicles that aren't used very often." [V]
- "Most car batteries have a life of 3 to 5 years" [V] (contradicted by the AA's own jump-start and flat-battery pages, which say 5 to 7; see (c)).
- Brake fluid "every few months" [V]; tyres "every 2 weeks" [V]; "The best time to check a tyre pressure is when the tyres are cold." [V]
- A claim that needs a legal source (Part C): "If you run out of washer fluid and therefore don't have the ability to clear your windscreen, this will be considered an offence." [V]
- A claim that needs a legal source (Parts C and D): "Tyre pressure monitoring systems (TPMS) are fitted to all cars built after 1 November 2014." [V]
Good for: UK motoring-organisation framing; flagged claims.

#### The AA, "How to check and top up your car engine oil"
https://www.theaa.com/breakdown-cover/advice/how-to-check-and-change-your-car-oil
Read: full text, curl plus pandoc. No date shown.
What it establishes:
- "For the most accurate oil reading, park your car on level ground." [V] "Never try to check anything under the bonnet with the engine running." [V]
- "The difference between the minimum and maximum notches on a dipstick is about a litre of oil." [V] (engine-dependent; the handbook governs.)
- "Putting too much oil into your car is just as bad as having too little." [V]
- Grade: "It's important to use oil that meets the right technical specifications (ACEA, API, VW, etc). It also needs to be the right grade (the numbers separated by a 'w', such as 5w30)." [V]
- Oil appearance: "Oil with a milky, creamy or foamy appearance means coolant or water is leaking into the oil." [V] (the AA says to have this checked; some milkiness on the filler cap after short trips is a known innocent cause, not covered by this page).
- Low oil symptom: "you might see the oil pressure warning light come on when you're cornering." [V]
Good for: dipstick procedure, UK.

#### National Highways, "How to check your vehicle" (as above)
What it establishes for fluids and lights:
- Oil: "Ensure your engine is switched off for at least five minutes and your vehicle is parked on an even surface." [V] "*Some newer vehicles don't have dipsticks and use dashboard vehicle check systems instead. Refer to your vehicle manual for details." [V]
- Screenwash: the reservoir "can be filled to the top" and mix per the bottle [V paraphrased around quoted words].
- Lights: "Ask a friend to help you, or park your vehicle near a reflective surface eg a window or garage door." [V]
- Fuel: "Always keep your tank at least one quarter full to avoid running out of fuel." [V] and "You can be issued a Fixed Penalty Notice in some locations if your breakdown was foreseeable, which includes running out of fuel." [V] (Part C to confirm the legal basis.)
Good for: UK checklist.

#### AAA, "Quick Tips For Checking Vehicle Fluids" and "Car Fluids: How to Check and Maintain Them"
https://www.aaa.com/autorepair/articles/Quick-Tips-For-Checking-Vehicle-Fluids ; https://www.aaa.com/autorepair/articles/car-fluids-how-to-check-and-maintain-them-for-peak-performance
Read: fetched (1,371 and 1,403 words); skimmed only, not quoted. They cover the same ground as the handbooks (oil, coolant, brake, power steering, transmission, washer). Treat as seen, not relied on.

**Power steering fluid:** none of the handbooks I read has a power steering fluid check (Leaf and Maverick use electric power steering; the Leaf has a "Power steering warning light" at p. 2-23). AAA's heat release lists "power steering fluid" among fluids to check [V]. A lesson should say "where fitted; many modern cars have electric power steering with no fluid". I did not read a handbook for a car with hydraulic power steering; see (f).

### 3. Dashboard warning lights

#### ISO, "ISO 2575:2021 Road vehicles, Symbols for controls, indicators and tell-tales", clause 5 (Colour)
https://cdn.standards.iteh.ai/samples/68409/6480e873c14b4e56b7a0066b3ef65afc/ISO-2575-2021.pdf (publisher sample from iTeh Standards; catalogue page https://www.iso.org/standard/68409.html)
Read: the free sample only: foreword, scope, clauses 1 to 5 in full, start of clause 6 (pages up to 3 of the standard). The symbol annexes are not in the sample. Ninth edition; "This ninth edition cancels and replaces the eight edition (ISO 2575:2010)" [V, typo as in source]. Amendment 1:2024 exists and is unread.
What it establishes:
- The colour code itself, clause 5.1: "red: danger to persons or very serious damage to equipment, immediate or imminent;" [V] "yellow or amber: caution, outside normal operating limits, vehicle system malfunction, damage to vehicle likely, or other condition which can produce hazard in the longer term;" [V] "green: safe, normal operating condition (where blue or yellow is not required)." [V]
- 5.2 examples: blue "e.g. high beam, main beam" [V]; yellow or amber "e.g. failure of anti-lock brake system" [V].
- 5.4 "The colour white may be used where none of the above conditions applies." [V]
- 5.5 "A given symbol may be shown in more than one of the colours specified in 5.1 in order to convey a change in the operating condition." [V] (so the same symbol can appear amber then red).
- It is a voluntary standard; it becomes binding through UN Regulation 121 and national law (below).
Good for: the red, amber, green rule and where it comes from.

#### UNECE, "Regulation No. 121: Uniform provisions concerning the approval of vehicles with regard to the location and identification of hand controls, tell-tales and indicators" (bilingual English and Japanese copy)
https://www.mlit.go.jp/jidosha/un/UN_R121.pdf
Read: pdftotext, 27 pages; paragraphs 5.1 to 5.5 and Table 1 read in full. This is the Japanese transport ministry's bilingual copy, PDF created 23 March 2014, so it may predate later amendments. The official UNECE and EUR-Lex copies did not download (empty file and 6-word stub).
What it establishes:
- Symbols must follow ISO 2575: the symbol "designated for the purpose in standard ISO 2575:2004 where one exists" [V] (the 2004 edition in this text).
- 5.4.1: "Light of each tell-tale listed in Table 1 shall be of the colour shown in column 5 of this" table [V, sentence continues].
- Table 1 colours (as extracted; layout garbled but rows clear): Engine oil pressure tell-tale "Red"; Engine coolant temperature tell-tale "Red"; Electrical charging condition tell-tale "Red"; Seat belt "Red"; Airbag malfunction "Yellow and/or Red"; Antilock brake system malfunction "Yellow"; Engine on-board diagnostics or engine malfunction "Yellow"; Diesel pre-heat "Yellow"; Brake lining wear-out condition "Yellow"; Rear fog lamp "Yellow"; Front fog lamps "Green" [V for each colour word and item name].
- Footnote 18 lets those symbols be "shown in other colours, in order to convey different meanings, according to the general colour coding as proposed in paragraph 5. of standard ISO 2575:2004." [V]
- Whether and how UN R121 applies to GB-approved cars after 2021 is a Part C question; not researched here.
Good for: why the oil, temperature and charge lights are red on European cars.

#### eCFR, 49 CFR 571.101 (FMVSS No. 101, Controls and displays), text and Table 1
https://www.ecfr.gov/api/versioner/v1/full/2026-09-01/title-49.xml?part=571&section=571.101 ; Table 1 images https://img.federalregister.gov/ER03JA25.001/ER03JA25.001_original_size.png (and .002 to .005)
Read: full regulatory text via eCFR API (version 2026-09-01; amendment history ends "90 FR 459, Jan. 3, 2025" [V]); Table 1 and its notes read by viewing the five official images.
What it establishes:
- Telltale defined: "Telltale means an optical signal that, when illuminated, indicates the actuation of a device, a correct or improper functioning or condition, or a failure to function." [V]
- S5.4.1 "The light of each telltale listed in Table 1 must be of the color specified for that telltale in column 6 of that table." [V]
- Table 1 colours [V-img]: Brake system malfunction "Red"; Low brake fluid condition "Red"; Parking brake applied "Red"; Antilock brake system malfunction "Yellow"; Regenerative brake system malfunction "Yellow"; Electronic Stability Control malfunction "Yellow"; Low Tire Pressure "Yellow"; TPMS malfunction "Yellow"; turn signals "Green"; high beam "Blue or Green". Note 4: "Blue may be blue-green. Red may be red-orange." [V-img]
- **Important difference from UN R121:** for "Engine oil pressure", "Engine coolant temperature" and "Electrical charge", FMVSS 101 Table 1 prescribes the symbol but the colour column is blank ("-------") [V-img]. US law does not fix those lights as red; most makers use red by convention. Note 13: "Combination of the engine oil pressure symbol and the engine coolant temperature symbol in a single telltale is permitted." [V-img]
- The check engine (MIL) light is not in FMVSS 101 Table 1; it is an emissions (OBD) requirement. I did not read the EPA OBD regulation (40 CFR 86.1806); see (g).
- S5.5.6(b): red telltales "must not be cancelable while the underlying condition for their activation exists." [V]
Good for: the US side; correcting the idea that colour meanings are uniformly law.

#### Ford, 2024 Maverick Owner's Manual (as above), warning lamps pp. 113 to 114 and 164
What it establishes (maker wording, US):
- Engine or Motor Coolant Temperature: "If it illuminates, safely stop your vehicle and switch your vehicle off. Have your vehicle checked as soon as possible." [V] (p. 113)
- Battery (charging): "If it illuminates when the engine is running, this indicates your vehicle requires service. Have your vehicle checked as soon as possible." [V] (p. 113). Ford does not say "stop now" for this light; the RAC does (see (c)).
- Brake System: "If it illuminates when your vehicle is moving, make sure the parking brake is released. If the parking brake is released, this indicates low brake fluid level or the brake system requires service." [V] (p. 113)
- Anti-Lock Braking System: "Your vehicle continues to have normal braking without the anti-lock brake system function." [V] (p. 113)
- Oil Pressure: "It illuminates when the engine oil pressure is low." [V] (p. 114)
- Low Tire Pressure Warning: "If illuminated, check your tire pressure as soon as possible. If it begins to flash at anytime, have the system checked as soon as possible." [V] (p. 114)
- High Voltage Electric System Failure (hybrid): lights for a fault "that causes your vehicle to shutdown or enter a limited operating mode." [V] (p. 113)
- **Check engine light (MIL), steady vs flashing (p. 164):** "If it illuminates when the engine is running, the on-board diagnostics system is detecting a malfunction of the vehicle emission control system." [V] "If it flashes, engine misfire could be occurring. Increased exhaust gas temperatures could damage the catalytic converter or other vehicle components. Avoid heavy acceleration and deceleration, and have your vehicle checked as soon as possible." [V] On p. 114: "If it flashes, have your vehicle checked immediately." [V]
- Bulb check: MIL "illuminates when the ignition is on and the engine is off, this is normal operation." [V] (p. 114)
Good for: warning-light lesson with a real handbook's words.

#### Nissan, 2024 LEAF Owner's Manual (as above), warning lights pp. 2-15 to 2-23
What it establishes (EV):
- Bulb check (p. 2-16): "If any light does not come on or operate in a way other than described, it may indicate a burned-out bulb and/or a system malfunction." [V]
- **The 12 V charge light exists in an EV** (p. 2-16): the DC/DC converter steps the 400 volt Li-ion battery down "to charge the 12-volt battery." [V for the quoted words; the original writes the voltage with a dash]. If it stays on in READY: "Immediately stop the vehicle in a safe location and have the system checked." [V]
- Brake warning (p. 2-17): "If the BRAKE warning light illuminates, stop the vehicle immediately and have the system checked." [V] Low brake fluid warning: "stop the vehicle and perform the following items. 1. Check the brake fluid level." [V]
- Brake system, driveability judgement (p. 2-17): "If you judge the brake system to be safe, drive carefully to the nearest service station for repairs. Otherwise, have your vehicle towed because driving it could be dangerous." [V]
- Airbag (p. 2-19): "If the supplemental air bag warning light is on, it could mean that the front air bag, side air bag, curtain air bag and/or pretensioner systems will not operate in an accident." [V]
- TPMS (p. 2-22): "If the light illuminates while driving, avoid sudden steering maneuvers or abrupt braking, reduce vehicle speed, pull off the road to a safe location and stop the vehicle as soon as possible." [V] "The TPMS is not a substitute for the regular tire pressure check." [V]
- Master warning light (p. 2-22): "There are two types of master warning lights: yellow and red." [V]
- Power limitation (p. 2-23): lights when battery charge "is extremely low" or battery temperature "is very low (approximately −4°F (−20°C)" [V, parenthesis unclosed as in source].
Good for: EV-specific lights; showing red/yellow applied by a maker.

#### RAC Drive, "Dashboard warning lights guide: red, amber and green symbols explained"
https://www.rac.co.uk/drive/advice/know-how/car-dashboard-warning-lights-meaning/
Read: full text, curl plus pandoc. Page JSON "date":"2026-08-18". Motoring organisation; the page advertises its mobile mechanics and breakdown cover.
What it establishes:
- The table: "Red | Stop driving as soon as it is safe to do so and call for recovery." [V] "Amber | Have the vehicle checked by a mechanic as soon as possible." [V] "Green | The vehicle's systems are operating normally." [V]
- "When you start your vehicle it is quite normal for warning lights to illuminate briefly before switching off again." [V]
- Battery light: "You should not drive if the battery warning light is on. It may result in a break down caused by a sudden power failure." [V]
- Oil light: "If the low engine oil light is on then you should stop as soon as safely possible and switch off the engine." [V]
- Oil light, two sentences earlier (added by the lesson 02 Stage 4 fixer, re-read live 26 September 2026): "The oil warning light comes on when either the oil temperature gets too high or the oil level or pressure is too low. If the oil is not lubricating the engine effectively it could lead to expensive or even irreparable engine damage, so it's important to act quickly." [V] This names oil's job (lubricating); it does not explain the mechanism, so G-H12 stays open.
- Temperature light: "If the red engine temperature warning light is on, you should stop straight away" [V]; but then "If you can't see any and the light goes off after topping up then you should be fine to continue your journey." [V] (so "red means call recovery" is softened on the same page).
- Brake light: "you should not drive if you see a red car warning light." [V]
Good for: the plain-English colour rule in the UK.

#### RAC Drive, "Reasons your amber or orange engine management light (EML) is on"
https://www.rac.co.uk/drive/advice/know-how/reasons-your-engine-management-light-is-on/
Read: full text, curl plus pandoc. Page JSON "date":"2026-08-11".
What it establishes:
- "While you can typically drive whilst your engine light is on, we'd strongly recommend getting a mechanic to look at your car as soon as possible." [V]
- "If the light is flashing then this suggests a more serious issue and you should get have the vehicle inspected by a qualified professional." [V, grammar as in source]
- MOT link (for Part C): "Yes, if a car has its engine management light (EML) on it is classed as a major fault and will result in an MOT failure." [V]
Good for: UK EML wording; flashing versus steady.

#### The Highway Code, Annex 6, "Warning displays"
What it establishes:
- "Make sure that you understand the meaning of all warning displays on the vehicle instrument panel. Do not ignore warning signs, they could indicate a dangerous fault developing." [V]
- "When you turn the ignition key, warning lights will be illuminated but will go out when the engine starts (except the handbrake warning light). If they do not, or if they come on while you are driving, stop and investigate the problem, as you could have a serious fault." [V]
- "If the charge warning light comes on while you are driving, it may mean that the battery isn't charging. This should also be checked as soon as possible to avoid loss of power to lights and other electrical systems." [V]
Good for: the official UK baseline, which is less alarmed about the charge light than the RAC.

### 4. The 12 V battery

#### NHTSA, "Electric and Hybrid Vehicles"
https://www.nhtsa.gov/vehicle-safety/electric-and-hybrid-vehicles
Read: full text via Internet Archive capture 20260924154857.
What it establishes:
- EVs have a 12 V battery too: "This high-voltage battery is very different from a vehicle's 12-volt battery that powers lighting and instrumentation systems." [V]
- How it is charged: "Typically, fully electric and many hybrid-electric vehicles do not use a conventional alternator to recharge the 12-volt battery. Instead, these vehicles use a DC-DC converter to step high-voltage from the battery pack down to low-voltage" [V].
- "The high-voltage battery found in EVs and HEVs cannot be jumped." [V] "However, in most cases, the 12-volt battery, which powers things like lighting and instrumentation, can be jumped" [V].
Good for: the 12 V battery in every car type.

#### Nissan, 2024 LEAF Owner's Manual, "Jump starting", pp. 6-10 to 6-12
What it establishes:
- "Jump starting does not charge the Li-ion battery. The Li-ion battery must be charged before the vehicle can be driven." [V] (p. 6-10)
- Hazards: "Explosive hydrogen gas is always present in the vicinity of the 12-volt battery. Keep all sparks and flames away from the 12-volt battery." [V] "Battery fluid is a corrosive sulfuric acid solution that can cause severe burns." [V] "Do not attempt to jump start a frozen battery. It could explode and cause serious injury." [V] "Do not lean over the 12-volt battery when jump starting." [V] "remove rings, metal bands, or any other jewelry." [V] (p. 6-10)
- An EV cannot give a jump: "LEAF cannot be used as a booster vehicle because it cannot supply enough power to start a gasoline engine." [V] (p. 6-11)
- Earth point: "Always connect positive (+) to positive (+) and negative (−) to body ground (for example, as illustrated), not to the 12-volt battery." [V] (p. 6-12)
- After: keep in READY "over 20 minutes to charge the 12-volt battery." [V]; "it is recommended you visit a NISSAN certified LEAF dealer to have the 12V battery tested." [V] (p. 6-12)
- Battery drain from accessories and short trips (p. 9-4): "Vehicle is not driven regularly and/or only driven short distances." [V]
Good for: jump-start safety; EV 12 V specifics.

#### Ford, 2024 Maverick Owner's Manual, "Jump Starting the Vehicle", pp. 284 to 286
What it establishes:
- "WARNING: Batteries normally produce explosive gases which can cause personal injury. Therefore, do not allow flames, sparks or lighted substances to come near the battery." [V] (p. 284)
- "Batteries contain sulfuric acid." [V]; acid in eyes: "flush immediately with water for a minimum of 15 minutes and get prompt medical attention." [V] (p. 284; treatment detail belongs to First Aid.)
- "WARNING: Use only adequately sized cables with insulated clamps." [V] "WARNING: Connect batteries with only the same nominal voltage." [V] (p. 285)
- Connection order, petrol version (p. 285): positive to discharged battery, positive to booster, negative to booster negative, then "4. Make the final connection of the negative (-) jumper cable to an exposed metal part of the disabled vehicle's engine, as shown in the following illustration, away from the battery and fuel injection system, or connect the negative (-) jumper cable to a ground connection point if available." [V]
- "Do not disconnect the battery of the disabled vehicle. This could damage your vehicle's electrical system." [V] "Do not attempt to push-start an automatic transmission vehicle." [V]
- Hybrid version (p. 286): the 12 V battery "has two pins accessible from under the hood" [V], jumped the same way.
- After starting: "run both vehicle engines for an additional three minutes before disconnecting the jumper cables." [V] "Remove the jumper cables in the reverse order that they were connected." [V] "Note: Do not switch the headlamps on when disconnecting the cables. The peak voltage could blow the bulbs." [V] (p. 286)
Good for: a maker's connection order with the earth point away from the battery.

#### Health and Safety Executive, "Using electric storage batteries safely" (INDG139 rev1)
https://www.hse.gov.uk/pubns/indg139.pdf
Read: full text, pdftotext, 10 pages. "First published 05/06." and "INDG139(rev1) 07/11" [V]: dated 2011, and written for workplaces, but it is the UK regulator's explanation of lead-acid hazards and has a jump-starting section.
What it establishes:
- Why the gas matters: "Hydrogen and oxygen are usually produced inside a battery when it is being charged." [V] "The explosion is often so violent that it shatters the battery and produces a highly dangerous shower of fragments and corrosive chemicals." [V] (para 12) Gas is produced faster near full charge (para 13).
- "Many explosions happen when batteries are being connected or disconnected." [V] (para 20)
- Short circuits: energy released "when the terminals are short-circuited, for example with an uninsulated metal spanner or screwdriver." [V] (para 17)
- "Most batteries produce quite low voltages, and so there is little risk of electric shock." [V] (para 19) Useful to separate the 12 V hazards (gas, acid, short circuit) from EV traction battery hazards (shock).
- Jump-starting: "Whenever possible, follow the manufacturer's instructions for jump-starting a vehicle." [V] (para 24) Earth lead to "a suitable unpainted metal part of the chassis or engine of the dead vehicle. The point of attachment should be at least 15 cm from the battery and away from fuel and brake lines." [V] (para 28) "Check that the vehicles use the same voltage, eg 12 or 24 volts. If you are not sure that the vehicles have the same voltage, do not proceed." [V] (para 27)
- Disconnection: stop the good vehicle, leave the other running, "Disconnect the leads in the reverse order to the one used to connect them." [V] (para 31)
- "Valve-regulated ('maintenance-free') batteries are much less likely to release hydrogen than vented batteries." [V] (para 16)
Good for: lead-acid hazards; a primary UK safety source for jump-starting.

#### The AA, "How to jump start a car in 9 steps" (using jump leads)
https://www.theaa.com/breakdown-cover/advice/using-jump-leads
Read: full text, curl plus pandoc. No date shown.
What it establishes:
- The AA's preference: "For your safety, and our peace of mind, we'd always prefer you to give us a call and leave the jump starting to our trained mechanics." [V] (commercial interest; note it.)
- "make sure you read the instructions in your handbook and follow those if they're different to our steps." [V]
- Donor car: "avoid a hybrid or electric car as this could cause damage" [V].
- "Never try to jump start a battery that looks damaged or is leaking" [V]; "Stop using the jump leads if they get hot" [V].
- Earth point: "attach it to an earthing point (unpainted metal on the engine block or chassis) well away from the flat battery and fuel system" [V].
- **Internal inconsistency:** the safety list says "Don't remove the jump leads while the car engines are running." [V], and the steps say "Turn off both cars' engines and carefully disconnect the leads" [V]; but the booster-pack steps have the engine running while leads are removed. Ford says run both engines three minutes then disconnect (engines running); HSE says stop the good vehicle, leave the other running. See (c).
- After: "Charge the battery by driving normally (not in stop-start traffic) for at least 30 minutes." [V]
- Battery life: "On average, batteries last between 5 and 7 years" [V].
Good for: the UK motoring-organisation procedure, with its caveats.

#### The AA, "What to do if your car has a flat battery"
https://www.theaa.com/breakdown-cover/advice/flat-battery
Read: full text, curl plus pandoc. Reviewer named on the page (not recorded here).
What it establishes:
- Signs: "If the dash lights are flickering or don't come on, it's likely the battery is discharged." [V]
- "Most batteries will last somewhere between 5 and 7 years. However, our mechanics see cases where the battery has failed after only 2 or 3 years because of how the car was driven." [V]
- "most car batteries fail because they don't get the chance to recharge properly." [V] "You can halve the battery's lifetime by not fully charging it regularly." [V]
- "Car batteries contain several 2.1 volt batteries known as cells." [V]
Good for: signs of failure and why short trips matter.

#### AAA (Mountain West Group), "How Cold Weather Impacts Your Battery"
https://mwg.aaa.com/via/car/how-cold-weather-impacts-battery
Read: full text, curl plus pandoc. No date shown. A regional AAA club.
What it establishes:
- "Cold weather can slow this chemical reaction. This, coupled with the fact that starting a car in the winter requires more power, puts additional stress on the battery." [V]
- "while winter weather is most likely to cause your battery to fail, it's actually hot weather that does most of the damage" [V].
- Signs: "Slow Crank." "Dim Lights." "If you've had your car battery for more than 3 to 5 years, it's worth getting it tested." "If your battery leaks acid, you'll see a green or blue powdery substance on the terminals." [V each]
- "A battery light doesn't usually mean you need (just) a battery" [V].
- "Drive for at least a 30-minute stretch once a week. Repeated short trips can drain your battery without giving your alternator a chance to recharge it." [V]
Good for: signs of failure; seasonal battery lesson.

### 5. Electric and hybrid safety for owners

#### Nissan, 2024 LEAF Owner's Manual, "High voltage precautions" EV-8 and "Maintenance precautions" 8-2
What it establishes:
- "The EV system uses high voltage up to approximately DC 400 volt." [V]
- "Never disassemble, remove or replace high-voltage parts and cables as well as their connectors because they can cause severe burns or electric shock that may result in serious injury or death. High-voltage cables are colored orange. The vehicle high voltage system has no user serviceable parts." [V] (p. EV-8; repeated p. 8-2)
- "Your vehicle is equipped with an automatic cooling fan. It may come on at any time without warning" [V] (p. 8-2). [Stage 4 correction, lesson 04, 2026-09-26: the sentence continues "even if the power switch is not in the ACC, ON or READY to drive position." [V, p. 8-2, read on the PDF]. Quote it whole: the dropped clause is the one that says a switched-off car can still start its fan.]
Good for: what an owner must not touch.

#### Ford, 2024 Maverick Owner's Manual, "High Voltage Battery Precautions" p. 184 and crash/fire pp. 283 to 284
What it establishes:
- "WARNING: This battery pack should only be serviced by an authorized electric vehicle technician. Improper handling can result in personal injury or death." [V] (p. 184)
- Hybrids can restart themselves: "If you do not switch the ignition off, the engine could restart at any time." [V] (p. 184)
- "All of the high-voltage power flows through specific wiring assemblies labeled as such or covered with a solid orange convolute, or orange striped tape, or both. Do not come in contact with these components." [V] (p. 184)
- After damage or fire: "Assume the high-voltage battery and associated components are energized and fully charged." [V] "Physical damage to the vehicle or high-voltage battery could result in immediate or delayed release of toxic, flammable gases and fire." [V] (p. 283)
- Crash steps: "Roll down the windows before you switch your vehicle off." and move "your key(s) at least 16 ft (5 m) away from the vehicle." [V] (p. 283)
- Fire (p. 284): "As with any vehicle, call emergency assistance immediately if you see sparks, smoke or flames coming from the vehicle." [V] "1. Exit the vehicle immediately." [V] "2. Advise emergency assistance that an electric or hybrid-electric vehicle is involved." [V] "do not inhale smoke, vapors or gas from the vehicle" [V].
- Post-incident: "Do not store a severely damaged vehicle with a lithium-ion battery inside a structure or within 49 ft (15 m) of any structure or vehicle." [V] "Call emergency assistance if you observe leaking fluids, sparks, smoke or flames, or hear gurgling or bubbling from the high-voltage battery." [V]
Good for: owner EV/hybrid safety and what to do in a fire.

#### NHTSA, "Electric and Hybrid Vehicles" (as above), FAQs
What it establishes:
- Service: "It is important that a qualified technician with specialized EV-specific high-voltage training service your electric vehicle." [V] "You should never try to service the traction battery without proper training and specialized equipment." [V]
- Rain: "Is it OK to charge my EV in the rain? Yes, plug-in electric vehicle chargers are weather-resistant." [V]
- Flood: "The batteries in hybrid and electric vehicles are highly corrosive and should not be exposed to standing water. Flooded vehicles lead to high-voltage shock hazards, which could lead to a fire. Do not park a damaged vehicle with a lithium-ion battery in a garage or within 50 feet of your house, other structure, vehicle, or combustibles." [V] (Ford says 49 ft (15 m); same guidance, different rounding.)
- Fire: "If an emergency such as a fire occurs, contact 911 immediately." [V]
- Towing: EVs and hybrids "can be damaged if towed on their drive axle" [V].
- Standards: FMVSS No. 305a covers propulsion battery fire safety "during normal vehicle operations, charging and post-crash" [V].
Good for: the US regulator's owner advice; floods.

#### NFPA, "Electric Vehicles: Safe Charging at Home" (safety tip sheet)
https://www.nfpa.org/-/media/project/storefront/catalog/files/safety-tip-sheets/ev-safe-charging-at-home.pdf
Read: full text via Internet Archive raw capture 20240718031252 (live URL returned a server error). "©NFPA 2024" [V]. US National Fire Protection Association, a standards body.
What it establishes:
- "Do not use extension cords with the charger." [V]
- Before home charging, "have a qualified electrician: Check your electrical system to see if it can handle charging." and "Install a new circuit just for your charging device." [V]
- Level 1: "Make sure charger or outlet has GFCI protection." [V] "Use only a dedicated circuit to charge." [V]
- "Do not touch the orange high voltage cables." [V] "Battery maintenance should be performed by the manufacturer." [V]
Good for: US home charging safety.

#### Nissan, 2024 LEAF Owner's Manual, "Precautions on charging" CH-2 and CH-12
What it establishes:
- Nissan's own ban: "Never use extension cords or plug adapters with EVSE." [V] (p. CH-12); and at CH-2 "Do not use extension cords or adapters unless they are Genuine NISSAN parts." [V]
- Circuit: the 120 V cable "draws 12 amps continuously" and should not be plugged in "unless it is inspected by a licensed electrician to confirm that the electrical circuit can accept a 12 amp draw." [V] "Discontinue EVSE use immediately if plug or outlet becomes hot to the touch or if you notice any unusual odors." [V] "Do not use the EVSE in structures more than 40 years old." [V] (p. CH-12; US-market advice.)
- "If you notice an unusual odor, smoke or abnormal noises coming from the vehicle, stop charging immediately." [V] (p. CH-2)
- Medical devices: owners with a pacemaker or implantable defibrillator should check with the device maker "concerning the effects that charging may have on implanted devices before starting the charge operation." [V] (p. CH-2)
Good for: charging safety from the maker.

#### Electrical Safety First, "Electric vehicles" (safety advice)
https://www.electricalsafetyfirst.org.uk/safety-advice/products-and-appliances/transport/electric-vehicles/
Read: full text, curl plus pandoc. No date shown. UK electrical safety charity.
What it establishes:
- "The safest way to charge at home is with a dedicated EVCP." [V] "A home charging point must be installed by a registered and competent electrician, trained and qualified to install electric vehicle charge points" [V].
- Standard sockets: "The extended load and duration of charging an EV are likely to exceed what a standard socket-outlet and standard wiring is designed for." [V] "13A sockets for EV charging are constructed/tested to be more robust and are marked 'BS1363/EV' to identify them. They should be supplied by dedicated circuits." [V]
- DNO (for Part C to verify): "Notify your Distribution Network Operator (DNO) as, by law, they must be informed when an EVCP is connected to the network. Your installer should be able to do this on your behalf." [V]
- **A line not to copy:** under AVOID the page lists "Charging the battery continuously or overnight." [V] and "Charging the battery close to combustible materials or in direct sunlight." [V]. This reads like generic lithium battery (e-bike) advice. It conflicts with NHTSA's winter advice to plug the EV in at night and with normal EV practice. Do not state it as EV guidance without a better source.
Good for: UK home charging; with care.

#### Electrical Safety First, "Driven to danger: Electric Vehicle drivers charging dangerously due to lack of public infrastructure" (press release)
https://www.electricalsafetyfirst.org.uk/media-centre/press-releases/2019/05/driven-to-danger-electric-vehicle-drivers-charging-dangerously-due-to-lack-of-public-infrastructure/
Read: full text, curl plus pandoc. May 2019 (from URL).
What it establishes:
- "Never use a domestic multi socket extension lead when charging your electric vehicle. If you do need to use an extension lead only ever use one that is suitable for outdoor use such as a reel cable." [V]
- "Never 'daisy-chain' extension leads." [V]
- Survey (Censuswide, 1,500 UK plug-in owners): "73.7% of respondents excluding those who charge exclusively using public charging points" had used a domestic multi-socket extension lead outside at least sometimes [V for the figure and quoted phrase].
- Note: ESF 2019 permits an outdoor reel cable as a fallback; Nissan and NFPA say no extension cords at all. See (c).
Good for: the extension lead question, UK.

#### GOV.UK, "Electric vehicle chargepoint grants"
https://www.gov.uk/guidance/electric-vehicle-chargepoint-grants
Read: full text, GOV.UK content API. public_updated_at 2026-04-01. Office for Zero Emission Vehicles (OZEV).
What it establishes:
- "OZEV's home and workplace chargepoint grants have been extended for a final year" [V]; "Five chargepoint grant schemes are available until 31 March 2027" [V]; home grants "up to £500 towards the cost of installing a chargepoint" [V] for renters and flat owners with off-street parking, and for on-street households installing "a cross-pavement solution, for example a charging gully" [V].
- The linked grant-application page (https://www.gov.uk/electric-vehicle-chargepoint-grant-household, public_updated_at 2022-12-12, read in full) says to "Contact an OZEV-authorised installer" [V] and "Your installer will assess if your parking space allows an electric vehicle to charge safely." [V] That page predates the April 2026 changes; the guidance page governs.
Good for: a pointer only; money belongs to Personal Finance. The safety point is "use an authorised installer".

#### Derbyshire Fire and Rescue Service, "Electric Vehicle Safety Advice"
https://www.ddfire.gov.uk/electric-vehicle-safety-advice
Read: full text, curl plus pandoc. No date shown. A UK fire and rescue service.
What it establishes:
- "If your vehicle does unfortunately catch fire, get to a point of safety and call 999. Do not attempt to try and extinguish the fire yourself as this is unlikely to be effective." [V]
- "Where possible, charge your car on your drive rather than in a garage. Fit a smoke detector in your garage if this is your primary charging location." [V]
- "If you have any accidents, even small bumps that only appear to cause cosmetic damage, have the vehicle battery inspected by an EV specialist or car dealership." [V]
- Relative frequency (secondhand, dated): "In 2019 London Fire Brigade had 54 EV fires, over the same period they had 1,898 ICE fires." [V] Not normalised for fleet size; see (f).
- Contested advice: "Day to day use, the vehicle should be charged up to 80%" [V] and "Don't charge your car immediately after a journey" [V]. These are battery-longevity habits that some makers recommend and others do not; the handbook governs. See (c).
Good for: UK fire service wording on EV fires.

#### The Highway Code, Annex 6, "Overheated engines or fire"
What it establishes:
- "If your vehicle catches fire, get the occupants out of the vehicle quickly and to a safe place. Do not attempt to extinguish a fire in the engine compartment, as opening the bonnet will make the fire flare. Call the fire brigade." [V]
Good for: the general fire rule, which EV advice agrees with.

#### Institute of the Motor Industry, "IMI TechSafe"; "IMI International Level 3 Award in Electric/Hybrid Vehicle System Repair and Replacement"; news release on mandatory TechSafe
https://tide.theimi.org.uk/membership/imi-techsafe ; https://tide.theimi.org.uk/learn/qualifications/INT-EHVSR3-A-23 ; https://tide.theimi.org.uk/industry-latest/news/industry-leaders-and-shadow-secretary-state-transport-unite-call-mandatory
Read: full text of all three, curl plus pandoc. News release describes an event on "Thursday 14th May 2026" [V]. The IMI is the UK professional body for the motor industry and also an awarding organisation (it sells the qualifications it recommends).
What it establishes:
- "IMI TechSafe recognition is evidence of being safe and qualified to work on vehicles with systems and technologies that have significant safety implications, e.g. electric vehicles." [V]
- Qualification ladder named on the TechSafe page: "IMI Level 2 Award in Electric/Hybrid Vehicle Routine Maintenance Activities" [V], "IMI Level 3 Award in Electric/Hybrid Vehicle System Repair and Replacement" [V], "IMI Level 4 Award in the Diagnosis, Testing and Repair of Electric/Hybrid Vehicles and Components" [V]. The Level 3 page: completing it gives "the ability to remove and replace Electric/Hybrid vehicle high voltage components." [V]
- **TechSafe is not mandatory:** the IMI and others are "calling on government to mandate its use" [V]; "The latest IMI TechSafe data shows that just over a third of technicians have some level of qualification to work on electric vehicles." [V, double space in source removed]
- I did not read an IMI page that sets out what Level 1 and Level 4 permit; a search result described them (snippet only). Lessons should say only that high-voltage work is graded by training level and is not owner work.
Good for: who may work on high voltage; choosing a garage for an EV (link to the garage lesson).

### 6. Winter and summer checks

#### The Highway Code, rules 226 to 237 (adverse weather), rule 123, Annex 6 "Before winter" and "Vehicle security"
https://www.gov.uk/guidance/the-highway-code/driving-in-adverse-weather-conditions-226-to-237 (public_updated_at 2021-09-14); rules 103 to 158 page (public_updated_at 2023-09-17)
Read: full text of both pages, GOV.UK content API.
What it establishes:
- Rule 229: "you MUST be able to see, so clear all snow and ice from all your windows" [V]; "you MUST ensure that lights are clean and number plates are clearly visible and legible" [V]; "make sure the mirrors are clear and the windows are demisted thoroughly" [V]; "remove all snow that might fall off into the path of other road users" [V]. Laws: "CUR reg 30, RVLR reg 23, VERA sect 43 & RV(DRM)R reg 11" [V].
- Rule 226: "You MUST use headlights when visibility is seriously reduced, generally when you cannot see for more than 100 metres (328 feet)." [V] Rule 236: "You MUST NOT use front or rear fog lights unless visibility is seriously reduced (see Rule 226) as they dazzle other road users and can obscure your brake lights. You MUST switch them off when visibility improves." [V]
- Rule 228 winter kit: "de-icer and ice scraper, torch, warm clothing and boots, first aid kit, jump leads and a shovel, together with a warm drink and emergency food" [V].
- Rule 230: stopping distances "can be ten times greater than on dry roads" [V].
- Rule 237 (hot weather): "Keep your vehicle well ventilated to avoid drowsiness." [V] and road surfaces "may become soft" [V].
- Rule 123 (relevant to leaving a car running to defrost): "You MUST NOT leave a parked vehicle unattended with the engine running or leave a vehicle engine running unnecessarily while that vehicle is stationary on a public road." [V] Law "CUR regs 98 & 107" [V].
- Rule 121: after deep water, "your brakes may be less effective. Test them at the first safe opportunity" [V].
- Annex 6 "Before winter. Ensure that the battery is well maintained and that there are appropriate anti-freeze agents in your radiator and windscreen bottle." [V]
- Annex 6 "Vehicle security": "never leave children or pets in an unventilated car" [V].
Good for: winter checks and the legal duty to clear glass and lights.

#### Met Office, "6 simple checks to prepare your vehicle for winter"
https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/travel/6-things-to-do-to-prepare-your-vehicle-for-winter-weather
Read: full text, curl plus pandoc. No date shown. The UK's national weather service; this page reproduces the RAC's "FORCES" checklist (Fuel, Oil, Rubber, Coolant, Electrics, Screenwash).
What it establishes:
- Screenwash concentration: "Make sure you top up your screenwash with a product that is effective down to at least -15 degrees Celsius." [V]
- Coolant: "Remember only check this when the engine is cool otherwise you risk scalding yourself. It's not normal for coolant levels to drop suddenly, so if it does, get it checked out at a garage." [V]
- Battery: "Battery problems are the reason for more RAC call-outs in winter than anything else." [V]
- Wipers: run your fingers along the blades "to check for splits. It's recommended to change wiper blades every 12 months." [V, second sentence verbatim]
- Repeats the 20p wording: "If you can't see the outer band of the 20p your tyres are within the legal limit." [V]
Good for: UK winter checklist.

#### National Highways, "Travelling in snow and ice" and "Travelling in extreme heat"
https://nationalhighways.co.uk/road-safety/travelling-in-severe-weather/travelling-in-snow-and-ice/ ; https://nationalhighways.co.uk/road-safety/travelling-in-severe-weather/travelling-in-extreme-heat
Read: full text of both, curl plus pandoc. No dates shown.
What it establishes:
- Snow and ice: "Check the weather forecast. If snow or ice is expected, consider delaying your journey until it clears." [V] "Slow down - it can take 10 times longer to stop in icy conditions." [V]
- Heat: "During particularly hot weather, make sure your engine stays within the normal operating temperature range. If it begins to overheat, find somewhere safe to stop and allow it cool down." [V, grammar as in source] "take plenty of drinking water with you" [V].
Good for: UK seasonal framing (driving technique itself is out of scope).

#### NHTSA, "Winter Weather Driving Tips"
https://www.nhtsa.gov/winter-driving-tips
Read: full text via Internet Archive capture 20260812080428.
What it establishes:
- Pressure falls with temperature: "As the outside temperature drops, so does tire inflation pressure." [V] "Do not inflate your tires to the pressure listed on the tire itself. That number is the maximum pressure the tire can hold, not the recommended pressure for the your vehicle." [V, typo as in source]
- Battery: "In cold weather, gasoline and diesel engines take more battery power to start, and electric and hybrid-electric vehicles' driving range can be reduced." [V]
- Washer fluid: "Make sure your vehicle's reservoir is full of high-quality "winter" fluid with de-icer before winter weather hits." [V]
- Tread: "The tread should be at least 2/32 of an inch or greater on all tires" [V]. "Some vehicle manufacturers recommend replacing tires every six years regardless of use." [V]
- Snow tyres: "Consider installing snow tires" [V].
- Stranded: "Make sure your exhaust pipe is clear of any snow and run your car only sporadically" [V] (carbon monoxide).
- Floor mats: "Improperly installed floor mats in your vehicle could interfere with the operation of the accelerator or brake pedal" [V].
- EVs: "A common way to do this is plugging your vehicle in at night during the winter" [V]. [Stage 4 correction, lesson 04, 2026-09-26: the gloss "(to keep the battery warm)" hid the antecedent. "This" is the preceding sentence: "The battery drain due to heating can be minimized by keeping your electric vehicle as warm as possible during freezing temperatures." [V] The page says most batteries use their own charge to heat themselves in the cold; the point of plugging in is to cut that drain. The source's next clause follows a spaced en dash; split before it.]
- Statistic: "In 2023 there were 320 fatal traffic crashes, and an estimated 22,293 injury crashes that occurred when there was snow/sleet conditions at the time of the crash." [V]
Good for: US winter checks; EV in cold.

#### NHTSA, "Heatstroke" (campaign page)
https://www.nhtsa.gov/campaign/heatstroke
Read: full text via Internet Archive capture 20260924021947.
What it establishes (vehicle side only; treatment belongs to First Aid):
- "Never leave a child in a vehicle unattended for any length of time. Rolling windows down or parking in the shade does little to change the interior temperature of the vehicle." [V]
- "In 2025, 31 children died of heatstroke in vehicles." [V] "Over 50% of pediatric vehicular heatstroke deaths are a result of a parent or caregiver forgetting a child in a car." [V]
- "Always lock your car when you aren't using it." [V] "Over 230 children have died from vehicular heatstroke since 1998 because they gained access to a vehicle and became trapped." [V]
- "A child's body temperature rises three to five times faster than an adult's." [V]
Good for: the summer section; look-before-you-lock habit.

#### AAA (The Auto Club Group), "AAA: Hot Tips For Motorists During Extreme Heat" (news release)
https://newsroom.acg.aaa.com/aaa-hot-tips-for-motorists-during-extreme-heat/
Read: full text, curl plus pandoc. Dated "(June 14, 2022)" [V]. Regional AAA club.
What it establishes:
- Battery in heat: "If a vehicle's battery is more than three years old, get it tested by a trained technician to determine how much more life it has." [V]
- Tyres: "Inflate tires to the pressure recommended by the vehicle manufacturer, not the number molded into the tire sidewall." [V]
- Fluids: "Check all vehicle fluids including coolant, motor oil, transmission fluid, power steering fluid and brake fluid" [V].
- Hot car: "Never leave children or animals unattended in a car, not even for a short period of time. Outside air temperatures in the nineties can rise to 125 degrees inside the vehicle very quickly" [V].
Good for: summer checks, US.

#### RAC Drive, "Winter tyres" (winter tyres explained)
https://www.rac.co.uk/drive/advice/winter-driving/winter-tyres/
Read: full text, curl plus pandoc. Page JSON "date":"2025-09-02".
What it establishes:
- "Winter tyres aren't mandatory in the UK." [V]
- "Winter tyres work best at temperatures below seven degrees Celsius." [V]
- Markings: "the M+S symbol and the three-peak mountain snowflake (3PMSF) symbol" [V].
- Chains: "drivers generally need to remove the chains when driving on clear roads, as they can damage both the road and the tyres when used on non-icy surfaces." [V]
Good for: brief winter tyres and chains note, UK.

#### Caltrans, "Winter Driving Tips"
https://dot.ca.gov/travel/winter-driving-tips
Read: full text, curl plus pandoc. No date shown. California Department of Transportation.
What it establishes:
- US chain controls are state law: "You must stop and put on chains when highway signs indicate chains are required. You can be cited by the California Highway Patrol and fined if you don't." [V] "The speed limit when chains are required is 25 or 30 miles an hour." [V] "Chains must be installed on the drive wheels." [V]
Good for: one US state example; Part D may want the state-law angle.

#### The AA, "Winter tyres"
https://www.theaa.com/driving-advice/seasonal/winter-tyres
Read: fetched but the extract contained only site navigation (page likely moved or rendered by script). Treat as unread.

### (a) What this part says the field considers essential

1. Tyre pressure checked cold, with a gauge, to the carmaker's figure (door placard, fuel flap or handbook), never the sidewall maximum. Monthly is the common US and UK motoring advice; the Highway Code says weekly.
2. TPMS is a warning, not a check: it is only required to light at 25% under (FMVSS 138 S4.2).
3. Tread checked with a gauge, the wear bars, or a coin test, across the tyre and at several points; plus a look for cuts, bulges and uneven wear, which point to pressure, alignment or suspension faults. Tyre age from the DOT date code.
4. The fluids an owner checks: oil (level ground, cold or after a wait, between the marks, handbook grade, do not overfill), coolant (only cold, never open a hot cap), brake fluid (between MIN and MAX; frequent topping up means a fault), screenwash (with antifreeze in winter). Lights, wipers and glass: the law in the UK, and on the US inspection side for Part D.
5. Warning lights follow a colour code (ISO 2575 clause 5): red means immediate danger, amber a fault to book in, green or blue information. Oil pressure, coolant temperature, brake and charging lights are the ones makers and motoring bodies treat as stop-now. A flashing check engine light is more urgent than a steady one.
6. Every car, including an EV, has a 12 V battery; lead-acid gives off explosive hydrogen and contains sulphuric acid; jump-start per the handbook, final negative clamp on bare metal away from the battery; an EV can be jumped but cannot be a donor.
7. High-voltage parts are orange and not owner-serviceable; an EV or hybrid fire means get out, get clear, call 999 or 911, and say it is an EV.
8. Home charging: a dedicated charge point fitted by a qualified electrician; no domestic extension leads.
9. Seasonal: in winter, battery, antifreeze in coolant and washer, lights, wipers, clear all glass and lights before driving (a UK legal duty), tyres; in summer, cooling system, tyres, battery, and never leave a child or animal in a car.

### (b) Common misconceptions (each named by a source)

- **"Inflate to the number on the tyre."** NHTSA: the correct pressure is the vehicle maker's figure, "NOT what is listed on the tire itself"; NHTSA winter page: the sidewall number "is the maximum pressure the tire can hold". AAA heat release says the same.
- **"The TPMS light will tell me if my pressures are wrong."** NHTSA: TPMS only warns "when a tire is significantly underinflated"; TyreSafe: TPMS is "not a reminder to check"; Nissan p. 2-22: "The TPMS is not a substitute for the regular tire pressure check." FMVSS 138 sets the trigger at 25% below.
- **"If the 20p band is hidden, my tyres are legal and fine" / "visible means illegal".** The AA gives the band as "just under 3 mm wide", so the test flags tyres well above 1.6 mm. A visible band does not prove illegality (TyreSafe says "may be illegal"); a hidden band proves only that there is more than about 3 mm at that spot. RAC, National Highways and the Met Office all phrase it loosely.
- **"Legal tread is safe tread."** Contested (see (c)), but TyreSafe, RAC and AAA all say wet braking worsens well before the legal limit.
- **"Warning lights are the same colours by law everywhere."** FMVSS 101 Table 1 leaves oil pressure, coolant temperature and charge telltale colours unspecified; UN R121 makes them red.
- **"EVs don't have a 12 V battery / can't be jump-started."** NHTSA: the 12 V battery "can be jumped", the high-voltage battery cannot. Nissan: jump starting "does not charge the Li-ion battery".
- **"You can jump-start someone from an EV."** Nissan p. 6-11: LEAF "cannot be used as a booster vehicle". AA: avoid a hybrid or electric donor.
- **"Winter kills batteries."** AAA (Mountain West Group): winter is when they fail, but "it's actually hot weather that does most of the damage".
- **"Leaving the window open or parking in shade makes a hot car safe."** NHTSA: it "does little to change the interior temperature".
- **"Top up coolant straight away when the light comes on."** Highway Code Annex 6, Ford p. 309, Nissan p. 8-6: wait until cold; never open a hot cap.
- **"Oil additives help."** Ford p. 308: "unnecessary and could lead to engine damage".

### (c) Contested questions

1. **When to replace tyres: legal limit (1.6 mm UK, commonly 2/32" US) or earlier (3 mm UK; 4/32" AAA).** Contested empirical, with a value element. For earlier: TyreSafe (industry-backed charity) citing MIRA, RAC, AAA's own 2018 tests. Against: Michelin (a TyreSafe supporter) says "tread depth does not guarantee safe tyres" and argues for full use on cost and environmental grounds. AAA says 2/32" guidance "minimizes manufacturer warranty costs". Lessons should present the legal floor as law and the earlier point as the widely recommended safety margin, naming who recommends it.
2. **Tyre age.** Established that tyres age; contested how fast. NHTSA: "six to 10 years"; NHTSA winter page: "every six years" (some makers); RAC: "every five or six years" for low-mileage cars. No UK legal age limit for private cars (Annex 6 limits apply to heavy vehicles and minibuses). Contested empirical.
3. **How often to check pressures.** Highway Code: weekly. NHTSA, AAA, TyreSafe: monthly. AA: every 2 weeks. RAC: fortnightly (via Met Office). Not a real dispute; present "at least monthly, and before long journeys, and the Highway Code says weekly".
4. **Battery life.** AA contradicts itself: "3 to 5 years" (maintenance tips, 2025) and "5 and 7 years" (flat battery and jump-start pages). AAA: get it tested after "3 to 5 years" or "more than three years old". Contested empirical; lesson should say "typically several years; get it tested from about three years".
5. **Charging light: stop now or get it checked soon?** RAC: "You should not drive if the battery warning light is on". Highway Code Annex 6: "should also be checked as soon as possible". Ford p. 113: "Have your vehicle checked as soon as possible." Nissan (EV) p. 2-16: "Immediately stop the vehicle in a safe location". The honest answer is: the car will run only until the battery is flat (conventional car) and may lose power steering, lights and in some cars the engine; in an EV the handbook says stop. Contested practical judgement; handbook governs. [Stage 4 note, lesson 05, 2026-09-26: framed wrongly. Annex 6's sentence before the charge-light line says a warning light that comes on while you are driving means "stop and investigate the problem, as you could have a serious fault" [V], and the charge-light line adds a check ("also"). The Highway Code is not a check-soon source; see the lesson 05 Stage 4 note at the end of this file.]
6. **Jump lead removal: engines running or off?** HSE: stop the good vehicle, leave the dead one running, then disconnect. Ford: run both engines three minutes, then disconnect. AA: "Turn off both cars' engines" before disconnecting, yet also "Don't remove the jump leads while the car engines are running" and the booster-pack method removes leads with the engine running. Nissan: disconnect after the EV is in READY. Established only that the order is reversed and the handbook governs.
7. **Extension leads for EV charging.** Nissan: "Never use extension cords". NFPA: "Do not use extension cords with the charger." ESF (2019): never a domestic multi-socket lead, but an outdoor-rated reel cable is acceptable if you must. Contested practical; lesson should give the strict version and say the handbook governs.
8. **Charge to 80% and don't charge straight after a drive.** Derbyshire FRS recommends both as fire-risk measures; ESF lists "Charging the battery continuously or overnight" under AVOID; NHTSA recommends plugging in at night in winter. No maker handbook I read says 80% is a fire-safety measure. Contested empirical; do not teach as safety fact.
9. **Coolant cap wait time.** Ford: "Wait 10 minutes". Others: until cold. Established that a hot cap must not be opened; the time is maker-specific.

### (d) UK vs US differences

- **Tread test coin:** UK 20p (outer band just under 3 mm, per the AA); US penny (2/32") and quarter (4/32", AAA).
- **Units:** UK tread in mm, pressures in psi and bar; US tread in 32nds of an inch, pressure in psi and kPa.
- **Where the pressure figure is:** US federal label on the driver's door edge or B-pillar (NHTSA "Tire and Loading Information Label"); UK sources add the fuel filler flap.
- **TPMS:** US mandatory from model year 2008 (NHTSA); UK date given by the AA as cars "built after 1 November 2014" (unverified; Part C).
- **Warning light colours:** UN R121 (Europe, Japan, UK tradition) fixes oil pressure, coolant temperature and charging telltales red and engine malfunction yellow; FMVSS 101 fixes brake red and ABS, ESC and TPMS yellow but leaves the oil, temperature and charge colours to the maker.
- **Legal status of checks:** in the UK, the Highway Code puts clean lights, clear glass, correct tyre pressure and clearing snow under MUST with regulations cited. In the US, equivalent duties sit in state law (Part D).
- **Emergency number:** 999 (UK, Derbyshire FRS), 911 (US, NHTSA). 112 also works in the UK (not verified in this part).
- **Home charging:** UK 230 V, dedicated charge point by a registered electrician, DNO notification, BS1363/EV sockets (ESF); US Level 1 (120 V, GFCI, dedicated circuit) and Level 2 (240 V) (NFPA, Nissan CH-12).
- **Winter tyres and chains:** not mandatory in the UK (RAC); US chain controls are state law (Caltrans).
- **Workforce:** UK has IMI TechSafe as voluntary recognition; I did not research the US equivalent (ASE xEV certification is known but unread).
- **Hot-car deaths:** NHTSA counts US child deaths ("In 2025, 31 children"); I found no UK equivalent figure.

### (e) Safety-critical notes for drafters

- Never tell a learner to open a coolant cap, reservoir or radiator while hot. Handbook wording: Ford "Do not remove the coolant reservoir cap when the engine is on or the cooling system is hot"; Nissan "Never remove the coolant reservoir cap when the motor compartment is hot."
- Brake fluid: low level or a red brake light is a stop-and-check condition (Nissan p. 2-17: "stop the vehicle immediately"). Frequent topping up means a leak or worn pads: have it checked, do not just keep filling. Brake fluid is poisonous and strips paint.
- Oil pressure and coolant temperature lights: stop safely and switch off (Ford p. 113 for temperature; RAC for oil). Do not teach "top up and carry on" as a default.
- Flashing check-engine light: reduce load and get it checked promptly (Ford p. 164); it can mean a misfire damaging the catalytic converter.
- 12 V battery: no flames, sparks or smoking; eye protection; remove metal jewellery; never jump a frozen, damaged or leaking battery; same voltage only; final negative clamp on bare metal away from the battery and fuel lines (HSE: at least 15 cm); never let clamps touch. Point learners to their handbook first: some cars have remote jump posts (Ford hybrid "two pins"; Nissan body ground).
- An EV or hybrid can move or start silently. Ford: a hybrid engine "could restart at any time" unless switched off; Nissan: the cooling fan "may come on at any time". Switch off, Park, parking brake, key away before opening the bonnet.
- Orange cables and high-voltage parts: do not touch, do not disassemble; there are "no user serviceable parts" (Nissan). This is technician work (IMI qualification levels).
- EV or hybrid fire: get everyone out, move well away, call 999 or 911, say it is an electric or hybrid vehicle, do not fight it (Ford p. 284; Derbyshire FRS; Highway Code Annex 6 for any car fire). Damaged EV: do not park it in or near a building (NHTSA 50 ft; Ford 15 m).
- Flooded EV or hybrid: shock and fire hazard; contact the dealer or emergency services (NHTSA). After any deep water, test the brakes (Highway Code rule 121).
- Home charging: no domestic multi-socket extension leads, no daisy-chaining; stop if the plug or socket gets hot or smells (Nissan CH-12); installation by a qualified electrician.
- Winter: clear all glass, lights and number plates (UK legal duty, rule 229); do not leave the engine running unattended to defrost on a public road (rule 123); if stranded, keep the exhaust clear of snow (carbon monoxide, NHTSA).
- Hot cars: never leave a child or animal in a car; lock the car so children cannot climb in (NHTSA). Treatment of heatstroke is First Aid's territory; say "call 999 or 911" and link across.
- Jacking during checks: Nissan p. 8-2 "Never get under the vehicle while it is supported only by a jack."

### (f) Gates: claims that need a primary read before a lesson states them

1. **The 20p outer band is "just under 3 mm".** Only the AA states a width. A Royal Mint specification for the 20p border width would settle it. Until then, attribute it to the AA.
2. **MIRA "44%" wet braking figure** (1.6 mm vs 3 mm). Quoted by TyreSafe and RAC; the MIRA test report is unread. Attribute, do not state as fact.
3. **Brake fluid level falls as pads wear.** Only the 1998 Toyota Corolla handbook read here states it. A current handbook or a technical text should confirm before a lesson states it without attribution.
4. **UN R121 current text and its application in Great Britain.** I read a 2014 copy via Japan's MLIT. The current UNECE consolidated text and GB type-approval status are unread (Part C).
5. **TPMS on all UK cars built after 1 November 2014** (AA). Needs the EU/UN regulation (Part C/D).
6. **"Running out of washer fluid is an offence"** (AA) and **fixed penalty for a foreseeable breakdown** (National Highways). Need primary law (Part C).
7. **DNO must be notified by law when a chargepoint is installed** (ESF). Needs the primary source (Part C or a GOV.UK/Ofgem page).
8. **EML on is an MOT major fault** (RAC). Part C should confirm from the MOT inspection manual.
9. **Hydraulic power steering fluid check.** No handbook read for a car that has it; if a lesson describes the check, read one.
10. **EV fire frequency relative to petrol and diesel.** Derbyshire FRS's London 2019 numbers are secondhand and not normalised per vehicle. Do not make a comparative claim without a primary dataset.
11. **Check-engine light is an emissions (OBD) requirement in the US.** The EPA OBD regulation was not read; the Ford handbook wording is the source for now.
12. **IMI Level 1 and Level 4 scope.** Only a search snippet described them; read the IMI qualification pages before naming what each level permits.
13. **TyreSafe funding.** The supporter list is read; the Charity Commission accounts are not. Say "backed by tyre makers, carmakers and retailers", not a figure.

### (g) Not read

*Each part's own "Not read" list and UNREAD line below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*


- Tesla Model 3 Owner's Manual (403 on tesla.com; the only Internet Archive capture of the PDF is truncated at 5 MB).
- ISO 2575:2021 beyond the free sample (clauses 1 to 5 read; symbol annexes and Amendment 1:2024 unread).
- UN Regulation 121 current consolidated text (UNECE and EUR-Lex copies failed to download; 2014 MLIT copy read instead).
- EPA on-board diagnostics regulation (40 CFR 86.1806).
- MIRA wet braking test report cited by TyreSafe and RAC.
- Royal Mint specification of the 20p coin.
- Charity Commission register entry and accounts for TyreSafe.
- The AA "Winter tyres" page (extract was navigation only).
- NFPA EV safety web page (fetched empty; only the tip sheet PDF was read).
- Electrical Safety First "Glovebox Guide" (mentioned in the 2019 press release).
- London Fire Brigade ChargeSafe page and GN103 (search results only; mostly e-bikes).
- IMI pages describing Level 1 and Level 4 scope (snippet only).
- ASE electric vehicle certification (US).
- A current Toyota, Vauxhall or Volkswagen full owner's handbook (only the 1998 Corolla and 2024 Toyota short-version titles were seen).
- AAA "Quick Tips For Checking Vehicle Fluids" and "Car Fluids" pages were fetched and skimmed but not relied on; they are not listed below as unread.
- RSPCA advice on dogs in hot cars (not sought; Highway Code and NHTSA cover the vehicle side).

Part's own list (superseded): Tesla Model 3 Owner's Manual; Tesla owner's manual; ISO 2575 Amendment 1; ISO 2575 annexes; UN Regulation 121 consolidated; UNECE R121 Rev 1; 40 CFR 86.1806; EPA OBD regulation; MIRA; MIRA wet braking test; Royal Mint 20p specification; Charity Commission TyreSafe; TyreSafe annual accounts; AA winter tyres; NFPA electric vehicle safety information page; Glovebox Guide; ChargeSafe; GN103; IMI Level 1; IMI Level 4 scope; ASE xEV; ASE electric vehicle certification; Vauxhall owner's manual; Volkswagen owner's manual; 2024 Toyota Corolla owner's manual; RSPCA dogs in hot cars

---

## Part C: UK roadworthiness law, UK recalls, and dealing with a garage in the UK

Researcher C, Stage 1, Car Basics. Read 26 September 2026.

Conventions: **[V]** copied verbatim from text I extracted myself (curl plus pandoc, the GOV.UK
content API, legislation.gov.uk HTML, pdftotext). **[T]** words returned through WebFetch (none in
this part). **Snippet only**: seen only in a search result; never quoted, never a finding.

Access notes that matter to the whole course:
- The GOV.UK content API (`https://www.gov.uk/api/content/<path>`) worked for every GOV.UK page
  tried, including every section of the DVSA MOT inspection manual and the Highway Code. It returns a
  `public_updated_at` date, recorded below as "GOV.UK updated".
- legislation.gov.uk served each section as HTML. The text read is the "latest available (revised)"
  version as shown on 26 September 2026. legislation.gov.uk warns that revised text may have
  outstanding changes not yet applied; I did not open the "changes to legislation" panels.
- The DVSA transactional service `check-mot.service.gov.uk` returned a bot-block page ("Request
  unsuccessful. Incapsula incident ID") to curl. I read GOV.UK's own start page for the service
  instead. The recalls service `check-vehicle-recalls.service.gov.uk` landing page did load.
- nidirect.gov.uk pages load with curl; their `dateModified` values are recorded.
- The Sentencing Council's old `/offences/magistrates-court/item/...` URLs now 404; the current
  guideline URLs are `sentencingcouncil.org.uk/guidelines/<slug>/`.
- Citizens Advice pages carry no visible review date in the HTML I extracted.

---

### 1. The MOT in Great Britain (DVSA)

#### GOV.UK (DVSA), "Getting an MOT"
https://www.gov.uk/getting-an-mot (all nine parts, via content API)
Read: full text of every part, content API plus pandoc. GOV.UK updated 28 November 2024 (first
published 26 January 2012). GOV.UK is the government's publishing platform; this guide is DVSA's.
What it establishes:
- When due: "You must get an MOT for your vehicle by either: the third anniversary of its
  registration; the anniversary of its last MOT, if it's over 3 years old" [V] (list items joined
  with semicolons by me). "Some vehicles need to be tested at one year old" [V] (taxis, ambulances,
  9+ passenger seat vehicles, per the fees table).
- Northern Ireland is separate: "There are different rules and processes in Northern Ireland for
  MOTs for vehicles registered in Northern Ireland." [V]
- If the MOT has run out, the order is SORN if tax is due, book the test, tax once passed: "you
  cannot renew your vehicle tax if your MOT has expired." [V]
- Driving with an expired MOT: "You cannot drive or park your vehicle on the road if the MOT has run
  out. You can be prosecuted if caught." [V] The only exceptions: "to or from somewhere to be
  repaired" and "to a pre-arranged MOT test" [V].
- Penalty: "You can be fined up to £1,000 for driving a vehicle without a valid MOT." [V]
- Validity and early testing: "An MOT lasts for a year." [V] "You can get an MOT up to a month
  (minus a day) before it runs out and keep the same renewal date." [V] Worked example on the page:
  expiry 15 May, earliest test keeping the date is 16 April [V]. This does not apply where the last
  MOT was in NI and the next is in GB.
- Where: "You must use an approved MOT test centre to get your MOT." [V] "Only centres showing the
  blue sign with 3 white triangles can carry out your MOT." [V]
- Maximum fee: "The maximum fee for a car is £54.85 and £29.65 for a standard motorcycle." [V] "You
  do not pay VAT on the fee." [V] Fees table: Class 4 "Cars (up to 8 passenger seats)", first MOT at
  3 years, "£54.85" [V]. Class 7 goods vehicles over 3,000 kg up to 3,500 kg: £58.60.
- What it is not: "The test does not cover the condition of the engine, clutch or gearbox." [V]
- You may watch: "You can watch the test from a viewing area but you're not allowed to interrupt the
  tester." [V]
- Result categories: "Your vehicle will fail if the test result lists 'dangerous' or 'major' problems
  with your vehicle." [V] "You might also get a list of 'minor' or 'advisory' problems to monitor or
  fix in the future." [V]
- Driving after a fail: "You can take your vehicle away if: your current MOT is still valid; no
  'dangerous' problems were listed in the MOT" [V] (list joined). "Otherwise, you'll need to get it
  repaired before you can drive." [V] "If you can take your vehicle away, it must still meet the
  minimum standards of roadworthiness at all times." [V]
- Penalty for driving after a dangerous fail: "You can be fined up to £2,500, be banned from driving
  and get 3 penalty points for driving a vehicle that has failed its MOT because of a 'dangerous'
  problem." [V]
- Retests: free partial retest if left at the centre for repair and retested "within 10 working
  days" [V]; free partial retest if returned to the same centre "before the end of the next working
  day" [V] for a listed set of items (includes lamps, wipers, windscreen glass, wheels and tyres,
  horn, mirrors, seatbelts, tyre pressure monitoring system, registration plates, battery); a
  partial retest fee may be charged if taken away and returned within 10 working days; otherwise
  full fee.
- Appeals: fail appeals to DVSA "within 14 working days of the test" [V]; "You should not have any
  repairs made until the appeal process has finished." [V] Pass-but-should-have-failed appeals:
  "within 3 months of the MOT if it's a corrosion-related problem" and "within 28 days has passed
  for other defects" [V] (the page's own grammar). DVSA phone "0300 123 9000", "Monday to Friday,
  8am to 5pm" [V].
- Mileage errors can be corrected; MOT history records mileage.
- Exempt vehicles include "goods vehicles powered by electricity and registered before 1 March 2015",
  "tractors", "some historic ('classic') vehicles" [V]; form V112.
- Note: this page does not itself say anything about insurance validity.
Good for: MOT lesson (timing, fees, categories, driving after failure, appeals).

#### DVSA, "MOT inspection manual: cars and passenger vehicles"
https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles
Read: Introduction in full; sections 1 (Brakes), 3 (Visibility), 4 (Lamps), 5 (Axles, wheels, tyres
and suspension), 7 (Other equipment), 8 (Nuisance) extracted in full and searched; section 5.2.3
(Tyres) read in full; other sections not read. Manual GOV.UK updated 1 June 2026 (latest change note
1 June 2026, speed limiter). Applies to England, Scotland and Wales. DVSA's standard for testers.
What it establishes:
- Defect categories, verbatim from Introduction section 7: "minor - defects that have no significant
  effect on the safety of the vehicle or impact on the environment and other minor non-compliances"
  [V]; "major - defects that may prejudice the safety of the vehicle, have an impact on the
  environment, put other road users at risk or other more significant non-compliances" [V];
  "dangerous - defects that are a direct and immediate risk to road safety or having an impact on
  the environment" [V].
- "If a vehicle has only minor defects, it will pass its MOT inspection and a test certificate will
  be issued. If a vehicle has any major or dangerous defects, it must be failed and a refusal notice
  issued." [V]
- Advisory: "When an item is not sufficiently deteriorated to justify rejection, there may be an
  option to select 'advisory' to inform the presenter of this fact." [V] "Unlike advisory items, the
  use of minor defects, where appropriate, is mandatory." [V]
- No dismantling: "The MOT test must be carried out without dismantling, so it is not always possible
  to inspect some testable items." [V] (Supports the teaching point that an MOT is not a service.)
- EV and hybrid, Introduction section 20: "High voltage wiring insulation is orange in colour so it
  can be easily identified, though some imported vehicles may have high voltage wiring insulation of
  a different colour." [V] "Many mild hybrids only use 48V systems which may use blue coloured
  insulation" [V]; "the internal combustion engine may start without warning when electrical
  equipment is operated or if the battery voltage drops." [V] (Useful for Part D's EV safety area.)
- Tyres, 5.2.3: "The primary grooves of the tread pattern must be at least 1.6mm deep within the
  central three-quarters of the breadth of tread and around the entire outer circumference of the
  tyre" [V]. "Either side of the central three-quarters of the tyre can be devoid of tread ('bald')."
  [V] Defect table: "(e) Tyre tread depth not in accordance with the requirements" is
  "Dangerous" [V]. "(d)(ii) A tyre with a lump, bulge or tear caused by separation or partial failure
  of its structure, including any lifting of the tread rubber or with cords exposed or damaged" is
  "Dangerous" [V]. "(l) Tyre obviously under-inflated" is "Minor" [V]. "(h) Tyre pressure
  monitoring system malfunctioning or obviously not working" is "Major" [V]; TPMS inspected on "M1
  vehicles first used on or after 1 January 2012" [V]. Mixing radial and cross-ply on one axle is
  Major. Tyre age (10 years) check applies only to vehicles with more than 8 passenger seats.
- Brakes, 1.1 table: "Brake lining or pad worn down to wear indicator" Major; "Brake lining or pad
  worn below 1.5mm" "Dangerous" [V]. "Brake fluid warning light illuminated or defective" Minor [V].
- Visibility, 3.2: damage "in windscreen zone A more than 10mm in diameter" and "in the remainder of
  the windscreen's swept area more than 40mm in diameter" [V]; zone A is "290mm wide" and "centred on
  the steering wheel" [V]. Wiper "blade missing or obviously not clearing the windscreen" Major;
  washers "not working or not providing sufficient fluid to clear the windscreen" Major [V].
- Lamps: "A headlamp missing, inoperative or more than ½ not functioning in the case of LED" Major
  [V]; headlamp aim outside limits Major.
- Warning lamps: "Engine MIL inoperative or indicating a malfunction" Major [V] (petrol cars first
  used on or after 1 July 2003; diesels on or after 1 July 2008). "An SRS malfunction indicator lamp
  (MIL) indicates a system malfunction" Major [V]. "ESC MIL indicates a system malfunction" Major [V].
- Diesel: "Exhaust on a vehicle fitted with a diesel particulate filter emits visible smoke of any
  colour" Major; "Evidence that the diesel particulate filter has been tampered with" Major [V].
Good for: MOT lesson; tyres, brakes, lights and dashboard warning lights lessons (a lit warning lamp
is an MOT fail for engine MIL, SRS and ESC).

#### DVSA, "Car parts checked at an MOT"
https://www.gov.uk/government/publications/car-parts-checked-at-an-mot/car-parts-checked-at-an-mot
Read: full text, content API. GOV.UK updated 21 May 2015 (older plain-English guide; check against
the 2026 manual before quoting details).
What it establishes:
- "It isn't the same as having your vehicle serviced and doesn't check its general mechanical
  condition." [V]
- Diesel: "The MOT tester will refuse to test your vehicle if they think that the smoke test may
  damage your engine." [V]
Good for: MOT lesson, "MOT is not a service".

#### GOV.UK (DfT), "Changes to the date of the first MOT test and research into other MOT enhancements"
https://www.gov.uk/government/consultations/changes-to-the-date-of-the-first-mot-test-and-research-into-other-mot-enhancements
Read: consultation page and outcome summary text via content API. Consultation opened 18 January
2023, closed 22 March 2023; outcome published 25 January 2024. Response PDF not read.
What it establishes:
- Outcome: "the government does not intend to proceed in changing the date of a vehicle's first
  MOT." [V] Reasons given: "significant concerns about road safety" and "any potential savings made
  by motorists would be limited by the additional cost of potential defects not identified at the
  MOT" [V].
- "We received more than 4,400 responses" [V]. Five priority areas for future reform "including
  electric vehicles and advanced driver assistance systems" [V]; diesel emissions test under
  consideration.
- Earlier round: DfT news story of 18 January 2018, "First MOT test to remain at 3 years to protect
  road safety" (read in full, content API): "By law, all vehicles must be roadworthy, regardless of
  whether they have passed an MOT" [V]; "The test was introduced in 1960, requiring vehicles to
  undergo a first check after 10 years. It was changed in 1967 to 3 years." [V]; 2016 first-test
  pass rate "about 85%" and "the most common reasons for failure include lighting, tyres and braking
  faults" [V].
- As of 26 September 2026, the GOV.UK "Getting an MOT" page still says third anniversary. A GOV.UK
  search for consultations found no newer MOT-timing consultation. SEO sites claiming a 2026
  "decision" were seen as snippets only and are not findings.
- Related, still open question: DfT consultation "Proposed changes to penalties for motoring
  offences" (opened 7 January 2026, closed 11 May 2026; read the consultation text via content API,
  MOT section only). It asks: "should the government introduce penalty points for the offence of
  driving or using a vehicle with no current MOT?" (Question 29) and "should the government introduce
  vehicle seizure for the offence of driving or using a vehicle with no current MOT?" (Question 30)
  [V]. It states "This consultation does not present a preferred option" [V]. No outcome published
  as of reading. A lesson must not say points or seizure for no MOT have been introduced.
- Also noted, not read beyond summary: DfT "In-use emissions of road vehicles: regulating
  environmental impacts" (closed 6 September 2026), proposals "to strengthen the law around emissions
  from road vehicles that are in-use" [V]. No outcome.
Good for: MOT lesson (why 3 years; the law requires roadworthiness regardless of MOT).

#### GOV.UK (DVLA/DVSA), "Historic (classic) vehicles: MOT and vehicle tax" and "Historic (classic) vehicles: MOT exemption criteria"
https://www.gov.uk/historic-vehicles and
https://www.gov.uk/government/publications/historic-classic-vehicles-mot-exemption-criteria/historic-classic-vehicles-mot-exemption-criteria--2
Read: full text of both. Guide GOV.UK updated 24 January 2025; criteria updated 19 May 2026 (change
note: "Clarifying that vehicles are exempt from MOT testing if they are over 40 years old and have not
been substantially changed in the last 30 years" [V]).
What it establishes:
- "A vehicle does not need an MOT if: it was built or first registered more than 40 years ago; no
  substantial changes have been made to the vehicle in the last 30 years" [V] (list joined).
- "Your vehicle must be roadworthy whether it is exempt or not, you may wish to voluntarily undertake
  an MOT test anyway." [V]
- The guide: "You do not have to apply to stop getting an MOT for your vehicle each year. However,
  you must still keep it in a roadworthy condition." [V] "You can be fined up to £2,500 and get 3
  penalty points for using a vehicle in a dangerous condition." [V]
- Tax: "If your vehicle was built before 1 January 1986, you can stop paying vehicle tax from 1 April
  2026." [V] "You must tax your vehicle even if you do not have to pay." [V]
- MOT still needed if substantially changed, Q plate, kit car, reconstructed classic, and so on.
Good for: MOT lesson (brief aside on the 40-year exemption; exempt is not the same as unregulated).

#### Legislation: Road Traffic Act 1988, ss.45 and 47 (the MOT's legal basis)
https://www.legislation.gov.uk/ukpga/1988/52/section/47 and /section/45
Read: full revised text of both sections.
What it establishes:
- s.47(1): "A person who uses on a road at any time, or causes or permits to be so used, a motor
  vehicle to which this section applies, and as respects which no test certificate has been issued
  within the appropriate period before that time, is guilty of an offence." [V] "the 'appropriate
  period' means a period of twelve months or such shorter period as may be prescribed." [V]
- s.47(2)(a): applies to vehicles first registered "not less than three years before that time" [V].
- s.47(9): the Secretary of State may by order substitute for three years "such other period (not
  being more than ten years)" [V], subject to affirmative resolution of both Houses. (This is the
  power a 3-to-4-year change would use.)
- s.45(1)(b): the test checks "the requirement that the condition of motor vehicles should not be
  such that their use on a road would involve a danger of injury to any person." [V]
- Extent of both: E+W+S (Great Britain).
- Penalty (Road Traffic Offenders Act 1988, Sch 2 Part I, read as the table rows only): s.47
  "Level 3 on the standard scale in any other case" [V] (Level 4 for vehicles adapted to carry more
  than eight passengers). Level 3 is £1,000 (Sentencing Act 2020 s.122 table, offences on or after
  1 October 1992, read). No endorsement column entry, so no penalty points (consistent with Highway
  Code Annex 5: "No MOT certificate", "£1,000 fine", points "-" [V]).
- Motor Vehicles (Tests) Regulations 1981 (S.I. 1981/1694): I read only the contents list
  (regulation titles, e.g. "4.The prescribed statutory requirements" [V], "Part IV Appeals"). The
  regulations themselves are unread.
Good for: MOT lesson (legal basis, why the fine is £1,000).

---

### 2. Northern Ireland (DVA)

#### nidirect (Driver and Vehicle Agency), "How the MOT scheme works"
https://www.nidirect.gov.uk/articles/how-mot-scheme-works
Read: full text, curl plus pandoc. dateModified 22 May 2026. nidirect is the NI government's
citizen site; DVA is part of the Department for Infrastructure.
What it establishes:
- "It is an offence to use a vehicle of MOT test age that doesn't have a current test certificate on
  a public road." [V]
- Timing: "cars and motorcycles which are four years old and over" [V]; "light goods vehicles from
  three years old" [V]. (So a car's first NI test is at four years, against three in GB.)
- Vehicles of historical interest: same 40-year and 30-year-no-major-change rule as GB; "Even if the
  vehicle is exempt from annual testing, it must be maintained in a roadworthy condition." [V]
- Demand: "DVA is experiencing a high demand for its testing services. As a result, there are longer
  than normal appointment waiting times and you may not be able to get a vehicle test appointment
  before your current MOT expires. If this is the case, you must book the earliest available test
  appointment for your vehicle." [V]
Good for: MOT lesson, NI box.

#### nidirect (DVA), "Vehicle test fees"
https://www.nidirect.gov.uk/articles/vehicle-test-fees
Read: full text. dateModified 12 March 2026.
What it establishes:
- "Class IV Motor Car and Heavy Motor Car" full test "38.00", retest "29.50" (£) [V].
- These are the DVA's own fees, not a maximum set for private garages.
Good for: MOT lesson, NI box.

#### nidirect (DVA), "Driving and vehicle test centres"
https://www.nidirect.gov.uk/articles/driving-and-vehicle-test-centres
Read: full text. dateModified 31 August 2026.
What it establishes:
- Tests are done at DVA's own test centres, listed by county: five in Antrim, two in Armagh, four in
  Down, one in Fermanagh, three in Londonderry, two in Tyrone (17 in total, my count from the page's
  sentences such as "There are five test centres in County Antrim" [V]).
- The key structural difference from GB: in NI the state tests cars at its own centres; in GB private
  garages approved by DVSA test them.
Good for: MOT lesson, NI box.

#### nidirect (DVA), "A guide to booking your MOT/ vehicle test"
https://www.nidirect.gov.uk/articles/guide-booking-your-mot-vehicle-test
Read: full text. dateModified 9 June 2026.
What it establishes:
- Temporary Exemption Certificates: "Private cars that were first registered between 1 June 2019 and
  31 May 2020 or between 1 June 2021 and 31 May 2022 and have a valid Northern Ireland MOT will be
  given a Temporary Exemption Certificate (TEC)." [V] "This means they will not need a vehicle test
  (MOT) for 12 months from the date their current certificate expires." [V] This is time-limited and
  may change; do not teach as permanent.
- Police stance where no slot is available before expiry: "The PSNI has agreed not to penalise
  drivers whose MOT has expired so long as" the vehicle is roadworthy, not SORN, insured, and an
  appointment is booked and can be proved [V for the lead-in].
- Insurance: "The ABI has confirmed that the lack of a valid MOT certificate would not necessarily
  invalidate a motor insurance policy. However they say that if you can't get a test appointment
  until after the current certificate expires, you should check your policy documents or speak to
  your insurer." [V] "These arrangements only apply in Northern Ireland." [V]
- The page also carried a DVA notice about a Citroën 'stop drive' airbag recall from 20 June 2025
  (useful real example of a stop-drive recall; check current status before citing).
Good for: MOT lesson NI box; insurance caution; recall example.

#### nidirect (DVA), "After the MOT/ vehicle test" and "The MOT certificate"
https://www.nidirect.gov.uk/articles/after-mot-vehicle-test and /articles/mot-certificate
Read: full text of both. dateModified 22 May 2026 and 21 September 2026.
What it establishes:
- A significant NI difference: "If your vehicle fails an MOT test it is treated as not being
  roadworthy and it should not be on the road, regardless of whether you have time remaining on an
  existing MOT certificate." [V] (Compare GB, where you may drive away on a still-valid certificate if
  no dangerous defect was listed.)
- Retest: "An application for a re-test must be made within 21 days of the original test. After 21
  days a full test fee will be needed. Re-tests must be completed within 60 days of the original
  test." [V]
- Appeals within 14 days; phone "0300 200 7862" [V].
- Certificate meaning: "It doesn't mean that the vehicle is roadworthy for the life of the certificate
  and isn't a substitute for regular maintenance." [V] Driving to a test or repair: "Even in the
  above circumstances you may still be prosecuted for driving an unroadworthy vehicle if it doesn't
  meet various regulations affecting its construction and use. The insurance may also not be
  valid." [V]
- Duplicate certificate "£10.00" [V].
Good for: MOT lesson; the "MOT is a snapshot" theme.

---

### 3. The driver's legal duties (Great Britain)

#### Road Traffic Act 1988, s.40A (using vehicle in dangerous condition)
https://www.legislation.gov.uk/ukpga/1988/52/section/40A
Read: full revised text. Extent E+W+S.
What it establishes:
- "A person is guilty of an offence if he uses, or causes or permits another to use, a motor vehicle
  or trailer on a road when (a) the condition of the motor vehicle or trailer, or of its accessories
  or equipment, or (b) the purpose for which it is used, or (c) the number of passengers carried by
  it, or the manner in which they are carried, or (d) the weight, position or distribution of its
  load, or the manner in which it is secured, is such that the use of the motor vehicle or trailer
  involves a danger of injury to any person." [V] (paragraph letters as in the source; I removed only
  the line breaks and the dash after "when")
- Penalty (RTOA 1988 Sch 2 Part I, row read): Level 4 for a car ("Level 4 on the standard scale in any
  other case" [V]); Level 5 for goods vehicles and vehicles adapted to carry more than eight
  passengers; disqualification obligatory if within three years of a previous s.40A conviction,
  otherwise discretionary; endorsement obligatory; "3" points [V].
Good for: law lesson.

#### Road Traffic Act 1988, s.41A (brakes, steering-gear or tyres)
https://www.legislation.gov.uk/ukpga/1988/52/section/41A
Read: full revised text.
What it establishes:
- "A person who (a) contravenes or fails to comply with a construction and use requirement as to
  brakes, steering-gear or tyres, or (b) uses on a road a motor vehicle or trailer which does not
  comply with such a requirement, or causes or permits a motor vehicle or trailer to be so used, is
  guilty of an offence." [V] (line breaks removed)
- RTOA Sch 2: Level 4 for cars, Level 5 for goods and 9+ seat vehicles; disqualification
  discretionary; endorsement obligatory; 3 points [V row].
Good for: law lesson; tyre lesson.

#### Road Traffic Act 1988, s.42 (other construction and use requirements) and s.41
https://www.legislation.gov.uk/ukpga/1988/52/section/42 and /section/41
Read: full revised text of both.
What it establishes:
- s.42 makes breach of "any construction or use requirement other than one within section 41A(a) or
  41B(1)(a) or 41D" an offence [V]. RTOA Sch 2: "Level 3 on the standard scale in any other case" [V]
  (Level 4 for goods and 9+ seat vehicles); no endorsement. So lights, wipers, washers, dirty
  windscreen and the like are generally s.42 matters (£1,000 maximum, no points), while brakes,
  steering and tyres are s.41A (£2,500, 3 points).
- s.41(2)(g) lets regulations secure "that brakes, silencers and steering gear are efficient and kept
  in proper working order" [V].
Good for: law lesson (why some defects carry points and others do not).

#### Road Traffic Offenders Act 1988, s.48 (the "did not know" defence to endorsement)
https://www.legislation.gov.uk/ukpga/1988/53/section/48
Read: full revised text.
What it establishes:
- For s.41A the court must not disqualify or endorse "if he proves that he did not know, and had no
  reasonable cause to suspect, that the facts of the case were such that the offence would be
  committed." [V] A parallel rule applies to s.40A ("did not know, and had no reasonable cause to
  suspect, that the use of the vehicle involved a danger of injury to any person" [V]).
- Teaching use: the law expects the driver to check. Routine checks are what give or remove
  "reasonable cause to suspect". Do not present this as a loophole; the fine still applies.
Good for: law lesson, framing owner's checks.

#### Sentencing Act 2020, s.122 (standard scale)
https://www.legislation.gov.uk/ukpga/2020/17/section/122
Read: s.122(1) to (4). Extent E+W.
What it establishes:
- For offences committed on or after 1 October 1992: level 3 "£1,000", level 4 "£2,500", level 5
  "£5,000." [V] with s.122(3) applying LASPO 2012 s.85 (level 5 unlimited for offences on or after 12
  March 2015). Scotland has its own standard scale (not read).
Good for: law lesson (converting "Level 4" to £2,500).

#### Sentencing Council, "Tyres defective" (magistrates' guideline)
https://sentencingcouncil.org.uk/guidelines/tyres-defective/
Read: full guideline page, curl plus pandoc. "Effective from 04 August 2008" [V]. England and Wales
sentencing guideline body.
What it establishes:
- "Road Traffic Act 1988, s.41A" [V]; "Maximum for vehicles up to 3.5 tonnes: Level 4 fine" [V];
  level table "Level 4 £2,500" [V].
- "Must endorse and impose 3 points" [V].
- Crucially: "Fine is for each single tyre (but ordinarily only one set of points apply where several
  offences committed on the same occasion)." [V]
- Starting point for a driver: "Band B fine" [V] (100% of relevant weekly income).
- Pages "brakes-defective" and "steering-defective" exist at the same path pattern (HTTP 200); I did
  not extract their text.
Good for: tyre lesson and law lesson; corrects the "3 points per bald tyre" myth (see (b)).

#### GOV.UK (DVLA), "Penalty points (endorsements)": endorsement codes
https://www.gov.uk/penalty-points-endorsements/endorsement-codes-and-penalty-points
Read: full guide, content API. GOV.UK updated 27 January 2025.
What it establishes:
- "Construction and use offences" codes "must stay on a driving record for 4 years from the date of
  the offence." [V]
- "CU10 Using a vehicle with defective brakes" 3; "CU20 Causing or likely to cause danger by reason of
  use of unsuitable vehicle or using a vehicle with parts or accessories (excluding brakes, steering
  or tyres) in a dangerous condition" 3; "CU30 Using a vehicle with defective tyre(s)" 3; "CU40 Using
  a vehicle with defective steering" 3 [V].
Good for: law lesson.

#### GOV.UK (DVSA), "Check your vehicle is safe to drive"
https://www.gov.uk/check-vehicle-safe
Read: full text. GOV.UK updated 5 April 2018.
What it establishes:
- "You're responsible for making sure your vehicle is always safe to drive ('roadworthy'). It can be
  unsafe even if you have a current MOT certificate." [V]
- "You can be fined up to £2,500, be banned from driving and get 3 penalty points for driving a
  vehicle in a dangerous condition." [V]
- Every time you drive: windscreen, windows and mirrors clean; all lights work; brakes work. The
  handbook sets intervals for oil, coolant, brake fluid, battery, washer fluid, tyres.
- "There must be tread across the middle three-quarters and around the entire tyre." [V]
Good for: owner's checks lesson; law lesson.

#### GOV.UK, "Legal obligations of drivers and riders"
https://www.gov.uk/legal-obligations-drivers-riders
Read: full text. GOV.UK updated 27 August 2015.
What it establishes:
- The vehicle must "be registered with DVLA", "have up to date vehicle tax", "have a current MOT
  certificate (if your vehicle needs one)", "be roadworthy" [V]; plus "a minimum of third party
  insurance" [V].
- On police request you must be able to show licence, insurance certificate and "a valid MOT
  certificate (if your vehicle needs one)" [V]; "you may be asked to take them to a police station
  within 7 days." [V]
Good for: law lesson summary box.

#### Road Vehicles (Construction and Use) Regulations 1986 (S.I. 1986/1078)
https://www.legislation.gov.uk/uksi/1986/1078/regulation/27 (and /30, /32 heading only, /34, /61, /100)
Read: full revised text of regs 27, 30, 34, 100; reg 61 paragraphs (1) to (8) only (the emissions
tables not read). Extent E+W+S.
What it establishes:
- Reg 27 heading "Condition and maintenance of tyres" [V]. Reg 27(1): a vehicle "shall not be used
  on a road, if" [V], among others:
  - "(b) the tyre is not so inflated as to make it fit for the use to which the motor vehicle or
    trailer is being put;" [V]
  - "(c) the tyre has a cut in excess of 25 mm or 10% of the section width of the tyre, whichever is
    the greater, measured in any direction on the outside of the tyre and deep enough to reach the
    ply or cord;" [V]
  - "(d) the tyre has any lump, bulge or tear caused by separation or partial failure of its
    structure;" [V]
  - "(e) the tyre has any of the ply or cord exposed;" [V]
  - "(h) ... has a defect which might in any way cause damage to the surface of the road or damage to
    persons on or in the vehicle or to other persons using the road;" [V, with omission]
- The 1.6 mm rule is **reg 27(4)(f)**, applied by 27(4)(d) and (e) to "passenger vehicles other than
  motor cycles constructed or adapted to carry no more than 8 seated passengers in addition to the
  driver", light goods vehicles, and light trailers, "first used on or after 3rd January 1933" [V].
  Exact wording: "the grooves of the tread pattern of every tyre fitted to the wheels of a vehicle
  mentioned in sub-paragraph (e) shall be of a depth of at least 1.6 mm throughout a continuous band
  comprising the central three-quarters of the breadth of tread and round the entire outer
  circumference of the tyre." [V] Note the legal text says "round the entire outer circumference",
  not "around"; the Highway Code paraphrase is "around the entire circumference".
- "breadth of tread" means "the breadth of that part of the tyre which can contact the road under
  normal conditions of use measured at 90 degrees to the peripheral line of the tread" [V]. "tread
  pattern" excludes "tie bars or tread wear indicators" [V].
- Space-saver spares: reg 27(3): reg 27(1)(a) does not prohibit use "by reason only of the fact that a
  wheel of the vehicle is fitted with a temporary use spare tyre, unless the vehicle is driven at a
  speed exceeding 50 mph." [V] (Useful for Part E's flat tyre lesson.)
- Run-flat tyres: reg 27(2) permits a deflated tyre with cut, bulge or ply defects if the tyre and
  wheel are constructed and marked to be fit for use in that condition.
- 10-year tyre age rule (27(1)(i) to (k), (1A)) applies only to buses, minibuses and heavy goods
  vehicles, not cars.
- Reg 30(1): driver "can at all times have a full view of the road and traffic ahead" [V]. Reg
  30(3): "All glass or other transparent material fitted to a motor vehicle shall be maintained in
  such condition that it does not obscure the vision of the driver while the vehicle is being driven
  on a road." [V]
- Reg 34 (wipers and washers): wipers must be "efficient automatic windscreen wipers" [V]; reg
  34(6): "Every wiper and washer fitted in accordance with this regulation shall at all times while a
  vehicle is being used on a road be maintained in efficient working order and be properly
  adjusted." [V]
- Reg 61(1): "every vehicle shall be constructed and maintained so as not to emit any avoidable smoke
  or avoidable visible vapour." [V] (bracketed amendment markers removed). Reg 61(5)(a) forbids use
  of a vehicle emitting smoke, vapour or oily substance that causes or is likely to cause damage or
  danger.
- Reg 100(1) heading "Maintenance and use of vehicle so as not to be a danger, etc" [V]: "A motor
  vehicle, every trailer drawn thereby and all parts and accessories of such vehicle and trailer
  shall at all times be in such condition ... that no danger is caused or is likely to be caused to
  any person in or on the vehicle or trailer or on a road." [V, with omission of the passenger and
  load words]
Good for: law lesson; tyre, wiper and washer checks.

#### Road Vehicles Lighting Regulations 1989 (S.I. 1989/1796), reg 23
https://www.legislation.gov.uk/uksi/1989/1796/regulation/23
Read: full revised text of reg 23. Reg 27 fetched but not read closely.
What it establishes:
- Reg 23(1): "No person shall use, or cause or permit to be used, on a road a vehicle unless every
  lamp, reflector, rear marking and device to which this paragraph applies is in good working order
  and, in the case of a lamp, clean." [V] Applies to required lamps (position, headlamps, rear plate
  lamp, rear fog, reflectors, daytime running lamps, reversing lamps) and to any fitted stop lamp,
  direction indicator, hazard warning device, headlamp levelling device, front fog lamp.
- Reg 23(3)(c) daytime concession: not an offence in daylight for a lamp that "became defective
  during the journey which is in progress or if arrangements have been made to remedy the defect
  with all reasonable expedition" [V]. This is a narrow concession. [Stage 3 correction, 2026-09-26: the live text says only "a defective
  lamp", with no list and no exclusion; the earlier claim that it does not cover stop lamps or
  indicators was wrong. See Gate closures, lesson 09/10.]
Good for: owner's checks (lights).

---

### 4. The Highway Code (GB)

#### DfT/DVSA, The Highway Code, "Introduction"
https://www.gov.uk/guidance/the-highway-code/introduction
Read: full text of the Introduction section to Rule H3, content API. GOV.UK updated 1 July 2022.
What it establishes:
- Scope: "This Highway Code applies to England, Scotland and Wales." [V]
- Legal status: "Many of the rules in the Code are legal requirements, and if you disobey these rules
  you are committing a criminal offence. You may be fined, given penalty points on your licence or be
  disqualified from driving. In the most serious cases you may be sent to prison. Such rules are
  identified by the use of the words 'MUST/MUST NOT'." [V]
- "Although failure to comply with the other rules of the Code will not, in itself, cause a person to
  be prosecuted, The Highway Code may be used in evidence in any court proceedings under the Traffic
  Acts (see The road user and the law) to establish liability. This includes rules which use advisory
  wording such as 'should/should not' or 'do/do not'." [V]
- Self-driving vehicles section: "The vehicle MUST be road legal (for example, it must have an MOT
  certificate, if applicable, and it must be taxed and insured). The vehicle must be roadworthy (see
  Rules 89 and 97 ...)" [V, truncated].
Good for: law lesson (MUST versus should).

#### The Highway Code, Rules 89 and 97
https://www.gov.uk/guidance/the-highway-code/rules-for-drivers-and-motorcyclists-89-to-102
Read: Rules 89 to 98 in full. GOV.UK updated 14 September 2021.
What it establishes:
- Rule 89: "Vehicle condition. You MUST ensure your vehicle and trailer comply with the full
  requirements of the Road Vehicles (Construction and Use) Regulations and Road Vehicles Lighting
  Regulations" [V].
- Rule 97: "Before setting off. You MUST ensure that ... your vehicle is legal and roadworthy" [V,
  with omission]; you SHOULD ensure "you have sufficient fuel or charge for your journey, especially
  if it includes motorway driving" [V].
Good for: law lesson; pre-journey checks.

#### The Highway Code, Annex 6, "Vehicle maintenance, safety and security"
https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security
Read: full text. GOV.UK updated 29 January 2022.
What it establishes (MUST items and the laws cited):
- "lights, indicators, reflectors, and number plates MUST be kept clean and clear" [V];
  "windscreens and windows MUST be kept clean and free from obstructions to vision" [V]; "lights MUST
  be properly adjusted to prevent dazzling other road users." [V]; "exhaust emissions MUST NOT exceed
  prescribed levels" [V]. Laws cited: "RVLR 1989 regs 23 & 27, & CUR regs 30 & 61" [V].
- Warning displays: "Do not ignore warning signs, they could indicate a dangerous fault developing."
  [V] "When you turn the ignition key, warning lights will be illuminated but will go out when the
  engine starts (except the handbrake warning light). If they do not, or if they come on while you
  are driving, stop and investigate the problem, as you could have a serious fault." [V] Charge
  warning light: "it may mean that the battery isn't charging." [V]
- Window tints: "You MUST NOT use a vehicle with excessively dark tinting applied to the windscreen,
  or to the glass in any front window to either side of the driver." [V] "There are no VLT limits for
  rear windscreens or rear passenger windows." [V] Laws "RTA 1988 sect 42 & CUR reg 32" [V].
- Tyres: "Tyres MUST be correctly inflated to the vehicle manufacturer's specification for the load
  being carried." [V] "Cars, light vans and light trailers MUST have a tread depth of at least 1.6 mm
  across the central three-quarters of the breadth of the tread and around the entire
  circumference." [V] "Be aware that some vehicle defects can attract penalty points." [V] Law "CUR
  reg 27" [V].
- Tyre age rules (10 years) apply to heavy goods and 9+ seat passenger vehicles, not cars [V gist].
- Blowout: "Grip the steering wheel firmly and allow the vehicle to roll to a stop at the side of the
  road." [V] Flat tyre: "Only change the tyre if you can do so without putting yourself or others at
  risk - otherwise call a breakdown service." [V]
- "Tyre pressures. Check weekly. Do this before your journey, when tyres are cold. Warm or hot tyres
  may give a misleading reading." [V]
- "Fluid levels. Check the fluid levels in your vehicle at least weekly. Low brake fluid may result
  in brake failure and a crash." [V]
- "Before winter. Ensure that the battery is well maintained and that there are appropriate
  anti-freeze agents in your radiator and windscreen bottle." [V]
- Pulling to one side when braking: "most likely to be a brake fault or incorrectly inflated tyres.
  Consult a garage or mechanic immediately" [V]. Bouncing: "its shock absorbers are worn" [V].
  Unusual smells: "investigate immediately. Do not risk a fire." [V]
- Overheating: "If your engine overheats, you should wait until it has cooled naturally. Only then
  remove the coolant filler cap and add water or other coolant." [V]
- Fire: "Do not attempt to extinguish a fire in the engine compartment, as opening the bonnet will
  make the fire flare. Call the fire brigade." [V]
- Fuel: "Never smoke, or use a mobile phone, on the forecourt of petrol stations" [V].
- Note: Annex 6 has no rule numbers; it is cited as "Annex 6".
Good for: owner's checks, warning lights, seasonal checks, law lesson, breakdown (overheating, fire).

#### The Highway Code, Annex 3 and Annex 5
https://www.gov.uk/guidance/the-highway-code/annex-3-motor-vehicle-documentation-and-learner-driver-requirements
https://www.gov.uk/guidance/the-highway-code/annex-5-penalties
Read: Annex 3 full (GOV.UK updated 20 May 2018); Annex 5 full (updated 27 July 2022).
What it establishes:
- Annex 3: "Cars and motorcycles MUST normally pass an MOT test three years from the date of the
  first registration and every year after that. You MUST NOT drive a motor vehicle without an MOT
  certificate when it should have one." [V] "Driving an unroadworthy motor vehicle may invalidate
  your insurance." [V] Laws "RTA 1988 sects 45, 47, 49 & 53" [V].
- Annex 5: "Certain non-motoring offences, e.g. failure to rectify vehicle defects, can also attract
  penalty points." [V] Penalty table: "Using a vehicle in a dangerous condition" "LGV or PCV
  unlimited, other vehicles £2,500" with "3 in each case" [V]; "No MOT certificate" "£1,000 fine"
  [V], no points.
Good for: law lesson.

---

### 5. DVLA: tax, SORN, V5C, MOT history (brief)

#### GOV.UK (DVLA), "When you need to make a SORN" and "Register your vehicle as off the road (SORN)"
https://www.gov.uk/sorn-statutory-off-road-notification and https://www.gov.uk/make-a-sorn
Read: full text of both. GOV.UK updated 25 November 2014 and 4 December 2014 (old stamps; the pages
are live).
What it establishes:
- You must SORN if "your vehicle is not taxed" or "your vehicle is not insured (even for a short
  time ...)" [V, truncated].
- "You must insure and tax your vehicle if you do not have a SORN. If you do not, you'll automatically
  be fined £80 for not having a SORN." [V]
- "You can only drive a vehicle with a SORN on a public road to go to or from a pre-booked MOT or
  other testing appointment." [V] Otherwise "a fine of up to £2,500" [V].
- DVLA vehicle phone "0300 123 4321" [V].
Good for: MOT lesson sidebar (an expired MOT and taxing).

#### GOV.UK (DVLA), "Tax your vehicle" and "Change your address on your vehicle log book (V5C)"
https://www.gov.uk/vehicle-tax and https://www.gov.uk/change-address-v5c
Read: full text of both; also "Get a vehicle log book (V5C)" at https://www.gov.uk/vehicle-log-book
(full) and "Change vehicle details on a V5C" (full).
What it establishes:
- "You must tax your vehicle even if you do not have to pay anything because it's exempt from vehicle
  tax." [V]
- "You can be fined up to £1,000 if you do not tell DVLA when your address changes." [V]
- A replacement V5C "usually costs £25" [V gist from "The service usually costs £25."].
- V5C changes: you must tell DVLA about alterations such as engine replacement.
Good for: law lesson sidebar only.

#### GOV.UK (DVSA), "Check the MOT history of a vehicle"
https://www.gov.uk/check-mot-history
Read: full GOV.UK start page. GOV.UK updated 20 October 2017. The service itself
(check-mot.service.gov.uk) blocked curl; not read.
What it establishes:
- Shows "if it passed or failed", "the mileage recorded when it was tested", "when the next MOT is
  due" [V]; for GB tests you can "see what parts failed at each test, and if any parts had minor
  problems" [V] and download certificates. The start page does not use the word "advisory"; the
  service's own display of advisories was not verified.
- "Your MOT history may also tell you if your vehicle has been recalled for a safety reason,
  depending on the manufacturer." [V]
- Records: cars since 2005 (GB); NI tests since 2017 (nidirect says December 2017).
Good for: garage and buying-used sidebar; MOT lesson.

---

### 6. Recalls in the UK

#### GOV.UK (DVSA), "Check if a vehicle, part or accessory has been recalled"
https://www.gov.uk/check-vehicle-recall
Read: full text. GOV.UK updated 27 March 2018.
What it establishes:
- "You need to get your car fixed or replaced by the manufacturer if there's a problem. You will not
  usually have to pay for any repairs or parts." [V]
- "If your vehicle has a serious safety defect, the manufacturer will write to you to tell you what
  to do. You must not drive the vehicle." [V] (Read carefully: this sentence is in the context of a
  serious safety defect notified by letter. The Code of Practice distinguishes "stop drive" recalls
  from ordinary safety recalls, so a lesson should not say every recall means stop driving.)
- Check by registration number; or by make, model and year; parts including "child car seats",
  "tyres" [V].
- "You'll be told by the manufacturer if a car has been recalled for any reason other than safety."
  [V]
- The service landing page (check-vehicle-recalls.service.gov.uk, read) offers vehicle and equipment
  searches and a download of "All recalls since 1992 (CSV, 5MB)" [V].
Good for: recalls lesson.

#### GOV.UK (DVSA), "Vehicle recalls and faults"
https://www.gov.uk/vehicle-recalls-and-faults
Read: full text, all four parts. GOV.UK updated 11 June 2015.
What it establishes:
- Letter tells you "why it's being recalled", "what you need to do next", "who you should contact"
  [V]. "You will not get a letter if the manufacturer does not have your contact details, for
  example for car child seats." [V]
- "You will not usually have to pay for any repairs or parts under a safety recall." [V]
- Owner's duty: "You're legally responsible for making sure that your vehicle is: kept in a safe
  condition; safe to drive whenever you drive it" [V, list joined]. Not getting it fixed could "affect
  any insurance claim you make" and "put yourself and others at serious risk" [V].
- Reporting a defect: report to the manufacturer first; "Tell the Driver and Vehicle Standards Agency
  (DVSA) if you're not happy with how the manufacturer is dealing with your report." [V]
- What counts: "about the way the vehicle is designed or made that's likely to cause injury or death"
  and "that happens suddenly and without warning" [V]. Not counted: things "found during routine
  maintenance and servicing", things "you're warned about ... by warning lights, noticeable changes in
  handling and unusual noises", and misuse such as "overloading your vehicle causing a tyre failure"
  [V, lightly trimmed].
- Registered (non-recall) faults: "You usually do not have to pay to get the fault fixed." [V] "You do
  not have to do anything about the fault if you do not want to." [V] but it may fail the MOT.
Good for: recalls lesson.

#### DVSA, "Vehicle safety defects and recalls: code of practice"
https://www.gov.uk/government/publications/code-of-practice-on-vehicle-safety-defects-and-recalls/vehicle-safety-defects-and-recalls-code-of-practice
Read: full HTML text via content API (about 5,200 words), searched and sections 1 to 8, 11, 14 and
Annex B read. GOV.UK updated 6 March 2024. Addressed to manufacturers and distributors.
What it establishes:
- Status: "The code is not an interpretation or reframing of the law." [V] The legal basis "is
  primarily the General Product Safety Regulations (GPSR)" [V]. (I did not read the GPSR 2005.)
- Definition 3.1: "A safety related defect is a failure due to design and/or construction, which is
  likely to affect the safe operation of the product – and pose a significant risk to the driver,
  occupants and others." [V] (The source uses an en dash here; a lesson must paraphrase or quote
  around it, not reproduce a dash.)
- Actions table 7.4: "Safety Recall (Stop Drive)": "there is an immediate threat to safety so the
  vehicle must not be driven." [V]; "Safety Recall": "the threat is not immediate or can be mitigated
  with 'reasonable' consumer action" [V]; "Consumer / Garage Warning"; amended maintenance
  requirements. Non-safety recalls and service campaigns are separate.
- 8.6: manufacturers "may request the assistance of DVLA to locate names and addresses of the
  registered keepers" [V]. (Why keeping V5C details current matters for recalls.)
- 8.8: "User responsibilities are described in DVSA's publicly available guidance." [V]
- 11.2: a recall is closed for reporting at "normally 90%" [V] completion, but "the recall is still in
  place, and producers or distributors are still expected to act upon it should a vehicle be
  presented" [V]. (So an old recall on a used car is still actionable.)
- The code does not itself state that recall work is free; that wording comes from the GOV.UK pages
  above ("will not usually have to pay").
Good for: recalls lesson (stop-drive versus ordinary recall; used cars).

---

### 7. Dealing with a garage (UK)

#### Consumer Rights Act 2015, ss.49 to 52 and 54 to 57
https://www.legislation.gov.uk/ukpga/2015/15/section/49 (and 50, 51, 52, 54, 55, 56, 57)
Read: full revised text of each of these eight sections. Extent U.K. (Northern Ireland included).
Commencement 1 October 2015.
What it establishes:
- s.49(1): "Every contract to supply a service is to be treated as including a term that the trader
  must perform the service with reasonable care and skill." [V]
- s.50(1): anything "said or written to the consumer, by or on behalf of the trader, about the trader
  or the service" is a term of the contract if the consumer took it into account [V, truncated]. (What
  the garage told you, for instance "we'll use genuine parts", is binding.)
- s.51(2): where no price is fixed, "the contract is to be treated as including a term that the
  consumer must pay a reasonable price for the service, and no more." [V] s.51(3): "What is a
  reasonable price is a question of fact." [V]
- s.52(2): where no time is fixed, "the trader must perform the service within a reasonable time." [V]
- s.54(3): if the service does not conform, the consumer's rights are "the right to require repeat
  performance (see section 55)" and "the right to a price reduction (see section 56)" [V]. s.54(7)
  keeps other remedies (damages, and so on) open.
- s.55(2): repeat performance must be provided "within a reasonable time and without significant
  inconvenience to the consumer" and the trader "must bear any necessary costs incurred in doing so
  (including in particular the cost of any labour or materials)." [V]
- s.56(2): "The amount of the reduction may, where appropriate, be the full amount of the price." [V]
  s.56(3): price reduction is available only if repeat performance is impossible or was not done
  within a reasonable time without significant inconvenience. s.56(4): refund "within 14 days
  beginning with the day on which the trader agrees" [V].
- s.57(1): a term "is not binding on the consumer to the extent that it would exclude the trader's
  liability arising under section 49" [V]. (Signs saying "no responsibility for damage" cannot
  exclude the duty of care and skill; Citizens Advice makes the same point.)
- Parts fitted during a repair are goods; the goods sections of the Act (ss.9 to 24) were not read.
Good for: garage lesson.

#### Citizens Advice, "Problem with a car repair"
https://www.citizensadvice.org.uk/consumer/buying-or-repairing-a-car/problems-with-a-car-repair/
Read: full text, curl plus pandoc. England version (the page links separate NI, Scotland and Wales
versions, not read). No review date shown. Citizens Advice is a national charity giving free advice;
not a regulator.
What it establishes:
- Bad work: "If the work wasn't done with 'reasonable skill and care', you have the legal right to
  get the work done again or get a price reduction." [V] Get a second opinion or a jointly agreed
  independent report.
- Quote versus estimate: "A quote is when a trader has promised to do work at an agreed price - it
  should say what work will be done and the price." [V] "An estimate is a trader's best guess as to how
  much the work will cost - it's not a quote." [V] With a quote: "you'll have to pay the full bill.
  This is because you've entered into a contract with the garage (even if you didn't sign anything)."
  [V] With only an estimate: "they can charge you more within reason." [V]
- No price agreed: the CRA 2015 "gives you the legal right to only pay a 'reasonable price'." [V]
- Open instructions: "If you told the garage to do whatever needs to be done to fix the car, then you
  gave them the right to decide what work to do. You'll have to pay if the work was necessary and the
  price is reasonable." [V] Unrequested extra work on a specific job: "you should insist you only pay
  for the work that was agreed." [V]
- Holding the car (lien): "The garage is not allowed to sell or get rid of the car while you're
  disputing the bill. They can, however, keep your car while the bill is being disputed." [V]
- Paying under protest: "Write the words 'paying under protest' clearly on their copy of the repair
  order sheet and any copies of receipts that the garage make." [V]
- Damage at the garage: a disclaimer sign "can be considered an 'unfair term', which means they're
  still liable" [V].
- Escalation: trade association conciliation (names The Motor Ombudsman, the Retail Motor Industry
  Federation, the Motor Cycle Industry Association), ADR, Trading Standards, court; chargeback; "If you
  paid by credit card and the repair cost more than £100, it may be easier to tell your bank you want
  to 'make a section 75 claim'." [V] (Section 75 is Personal Finance's ground; mention only.)
- Helpline "0808 223 1133" [V]; in NI, Consumerline.
Good for: garage lesson (quotes, estimates, disputes).

#### Citizens Advice, "Find an approved garage"
https://www.citizensadvice.org.uk/consumer/buying-or-repairing-a-car/find-an-approved-garage/
Read: full text (short).
What it establishes:
- "It's a good idea to use an approved car garage for work on your car, such as a service, repair or
  MOT." [V] "You should search for a garage that is accredited by The Motor Ombudsman." [V]
Good for: garage lesson (choosing a garage). Note: this is Citizens Advice recommending one
industry-funded scheme; present it as such.

#### Torts (Interference with Goods) Act 1977, s.12 and Schedule 1
https://www.legislation.gov.uk/ukpga/1977/32/section/12 and /schedule/1
Read: s.12 in full; Schedule 1 read for notice periods and para 7. Extent E+W+N.I.
What it establishes:
- A bailee (such as a garage holding an uncollected car) may sell uncollected goods after proper
  notice (s.12(3)). Where money is owed, the notice period "shall be not less than three months" [V]
  (Sch 1 para 6(3)); notice must be in writing by registered or recorded post.
- Sch 1 para 7(1): the bailee "shall not give a notice under section 12(3), or exercise his right to
  sell the goods pursuant to such a notice, at a time when he has notice that, because of a dispute
  concerning the goods, the bailor is questioning or refusing to pay all or any part of what the
  bailee claims to be due to him in respect of the goods." [V] (The statutory basis for Citizens
  Advice's "not allowed to sell ... while you're disputing the bill".)
- The right to keep the car until paid is a common-law repairer's lien; I found no primary source
  for it in this session (Citizens Advice states the effect). Scotland is not covered by this Act.
Good for: garage lesson (why the garage can keep the car but not sell it during a dispute).

#### The Motor Ombudsman, "The Motor Industry Code of Practice for Service and Repair"
https://www.themotorombudsman.org/wp-content/uploads/2025/06/TMO_ServiceRepairCode.pdf
Read: full PDF text (pdftotext, about 5,000 words), sections 1 to 4 and the Appendix read closely.
"Issued by The Motor Ombudsman 1st June 2025" [V]. Industry self-regulatory body; CTSI-approved code.
What it establishes:
- Who it is: "The Motor Ombudsman is the first Ombudsman to be focused solely on the automotive
  sector, and self-regulates the UK's motor industry through its comprehensive Chartered Trading
  Standards Institute (CTSI)-approved Codes of Practice." [V] (about page, read)
- Funding (TMO knowledge-base page "How is The Motor Ombudsman funded?", dated 1 September 2025,
  read): "The Motor Ombudsman is funded by annual accreditations and service fees paid for by
  businesses that meet the strict requirements to be a part of the organisation." [V] and "The
  payment of fees by businesses have no influence or bearing on the independent and impartial
  decisions made by The Motor Ombudsman's adjudicators and ombudsmen." [V] SMMT's consumer-advice
  page (read) says "SMMT supports the work of The Motor Ombudsman." [V]. It is not a statutory
  ombudsman; it only handles garages that are accredited.
- Code applies to "business to Consumer contracts only" [V] and UK work only.
- Estimate (2.8): "a general guide to the cost of the Work required (which could go up or down)" [V].
  Quotation (2.9): "a breakdown of the firm agreed price to complete the Work requested" [V].
- 2.10: no deposits "unless the parts required for the Work are bespoke" [V].
- 3.2: extra work found during the job needs the customer's authorisation before it starts [V gist].
- 3.4: "The Accredited Business will Guarantee all service and repair Work against failure" [V].
- 3.6: records kept "for six years from the point of the completion of the Work" [V].
- 3.7: "Replaced parts will be made available for you to view and examine until collection of the
  Vehicle unless otherwise agreed." [V]
- 3.8: "Servicing will be carried out in accordance with the manufacturer's service specification
  unless expressly stated" [V].
- 3.11: parts agreed in advance, "including whether parts will be genuine or non-genuine." [V]
- 4.2: final invoice "should match the Quotation" unless extra work was authorised [V gist]; 4.3
  itemised invoice with "the labour rate and number of hours spent" [V].
- Complaints: the garage has "up to eight weeks" [V] to give a final response; then referral to TMO,
  which is "free to Consumers" [V]; adjudication, then ombudsman final decision: "If the Consumer
  accepts the final decision of the ombudsman, it becomes legally binding on all parties." [V]
Good for: garage lesson (what a good garage commits to; ADR route). Describe TMO as industry-funded
ADR, not a government ombudsman.

#### Competition law: servicing outside the dealer network and the warranty
Competition Act 1998 (Motor Vehicle Agreements Block Exemption) (No. 2) Order 2023, S.I. 2023/586,
article 13: https://www.legislation.gov.uk/uksi/2023/586/article/13
CMA, "Guidance on motor vehicle agreements" (5 June 2023):
https://assets.publishing.service.gov.uk/media/647d9cb15f7bb700127fa41a/2.0_CMA_Guidance_on_Motor_Vehicle_Agreements.pdf
Read: article 13 in full; CMA guidance PDF full text extracted, paragraphs 5.35 to 5.41 (warranty
restrictions) and 8.1 read closely; GOV.UK consultation page read. CMA is the UK competition
regulator.
What it establishes:
- The UK MVBEO replaced the retained EU MVBER and "came into force on 1 June 2023" [V gist from the
  GOV.UK page: "The MVBEO came into force on 1 June 2023."]. Art. 13: "This Order ceases to have
  effect at the end of 31st May 2029" [V]. CMA guidance 8.1: "The MVBEO applies from 1 June 2023 and
  will cease to have effect at the end of 31st May 2029 (Article 13)." [V]
- 5.36: a manufacturer's warranty "whether standard or extended" made "conditional on the end user
  having repair and maintenance work that is not covered by warranty carried out only by members of
  the Authorised Network" [V] may be caught by the Chapter I prohibition.
- 5.37: conditions requiring OEM-branded parts for replacements not covered by the warranty may
  likewise be caught; but a warranty provider may still "legitimately" refuse a claim "causally
  linked i) to a failure on the part of a repairer to carry out a particular repair or maintenance
  operation in the correct manner, or ii) to the failure of a spare part supplied by a third party."
  [V]
- 5.41: terms "that clearly state the consumer's right to use the services of an independent repairer
  without losing the benefit of the warranty are unlikely to give rise to competition concerns." [V]
- Careful wording for lessons: this is competition law governing agreements between makers and
  dealers. It does not in terms create a consumer right, and the guidance says such restrictions "may
  be caught" or are "likely to be" caught, not that they are void in every case. Safe teaching line:
  using an independent garage does not by itself cost you the manufacturer's warranty if the work is
  done correctly to the maker's schedule with parts of matching quality; keep records; a bad repair
  or a failed third-party part can still lead to a refused claim.
Good for: garage lesson (dealer versus independent).

---

### (a) What this part says the field considers essential

1. The driver, not the MOT, is responsible for roadworthiness at all times. GOV.UK: "It can be unsafe
   even if you have a current MOT certificate." DfT 2018: "all vehicles must be roadworthy,
   regardless of whether they have passed an MOT". nidirect: the certificate "isn't a substitute for
   regular maintenance."
2. The MOT is a yearly snapshot of listed safety and environmental items, done without dismantling,
   not a service, and it does not look at engine, clutch or gearbox condition.
3. GB timing is third anniversary of registration then yearly (RTA 1988 s.47; still current on 26
   September 2026 after DfT rejected four years in 2018 and again in January 2024). NI cars are first
   tested at four years at DVA's own centres.
4. The defect categories (dangerous, major, minor, advisory) and what each means for driving away.
5. Brakes, steering and tyres are a separate, endorsable offence (RTA s.41A, 3 points, up to £2,500
   for a car); other construction and use breaches are s.42 (up to £1,000, no points); dangerous
   condition is s.40A (3 points, up to £2,500). No MOT is s.47 (up to £1,000, no points at present).
6. The 1.6 mm tread rule, its exact scope (central three-quarters, whole circumference), and the other
   tyre defects that are illegal regardless of depth (cuts over 25 mm or 10%, bulges, exposed cord,
   wrong inflation).
7. Weekly checks of tyre pressures and fluid levels (Highway Code Annex 6), lights and glass clean,
   warning lights understood.
8. Recalls: check by registration on GOV.UK; safety recall work is usually free; a "stop drive" recall
   means do not drive; old recalls remain open on used cars.
9. Garage rights: reasonable care and skill, reasonable price if none agreed, reasonable time; repeat
   performance then price reduction; quote binds, estimate does not; get extra work authorised;
   records and itemised invoices.

### (b) Common misconceptions (each named by a source, with the source)

- "A current MOT means the car is roadworthy." Contradicted by GOV.UK "Check your vehicle is safe to
  drive" ("It can be unsafe even if you have a current MOT certificate") and nidirect "The MOT
  certificate" ("It doesn't mean that the vehicle is roadworthy for the life of the certificate").
- "An MOT is a service." GOV.UK "Car parts checked at an MOT": "It isn't the same as having your
  vehicle serviced". "Getting an MOT": the test "does not cover the condition of the engine, clutch
  or gearbox."
- "If it failed but the old certificate has time left, I can drive it anywhere." GB: only if no
  dangerous defect is listed, and it must still be roadworthy (GOV.UK). NI: a failed vehicle "should
  not be on the road, regardless of whether you have time remaining on an existing MOT certificate"
  (nidirect).
- "Three points per bald tyre." The Sentencing Council tyres guideline says "Fine is for each single
  tyre (but ordinarily only one set of points apply where several offences committed on the same
  occasion)." The fine can multiply; the points ordinarily do not. (The brief itself carried the
  per-tyre version; drafters should not repeat it.)
- "Classic cars don't have to be roadworthy." GOV.UK historic vehicles: exempt vehicles "must still
  keep it in a roadworthy condition" with the £2,500 and 3 points warning.
- "Every recall means stop driving." The DVSA Code separates "Safety Recall (Stop Drive)" from ordinary
  "Safety Recall" where the threat "is not immediate or can be mitigated". The owner follows the
  maker's letter.
- "An estimate is a fixed price." Citizens Advice: "An estimate is a trader's best guess ... it's not
  a quote." TMO code 2.8 says an estimate "could go up or down".
- "Using an independent garage voids the warranty." CMA guidance 5.36 to 5.41: tying the warranty to
  dealer-only servicing is likely caught by competition law, subject to the causal-link exception in
  5.37.
- "The garage can sell my car if I don't pay the disputed bill." Citizens Advice and the 1977 Act Sch
  1 para 7: not while the bill is disputed (England, Wales, NI).

### (c) Contested questions

- Should the first MOT move to four years? DfT consulted twice and decided against both times (2018;
  January 2024). Classification: settled as policy for now (established); the underlying trade-off
  between cost and undetected defects is a value question with an empirical component. A lesson
  states the current rule and, if it mentions the debate, reports the government's stated reasons.
- Should no MOT carry penalty points or vehicle seizure? Open DfT consultation question (closed 11 May
  2026, no outcome published by 26 September 2026). Classification: value/policy, undecided. Do not
  present as law.
- Does using an independent garage affect a manufacturer warranty? The legal position is established
  in competition law (CMA guidance), but individual claims can be refused for a causal link to a bad
  repair or third-party part. Classification: established in principle; fact-dependent in any case.

### (d) UK vs US differences

(This part covers the UK only; notes for the drafter comparing with Part D or E's US material.)
- GB: a single national periodic test (MOT) at private approved garages with a legal maximum fee
  (£54.85 for a car). NI: state-run DVA test centres, first car test at four years, fee £38.00. The
  US has no national equivalent.
- UK roadworthiness is a continuing duty backed by national criminal law (RTA 1988 and the C&U
  Regulations) enforced at the roadside with penalty points; the test certificate only proves a past
  date.
- UK recalls: DVSA runs a public lookup by registration number and a Code of Practice with
  manufacturers under the GPSR. The US equivalent is NHTSA under federal law (Part D/E).
- UK consumer services law is statutory and nationwide (CRA 2015 ss.49 to 57) with ADR via industry
  schemes; US repair law varies by state.
- UK uses "tread depth 1.6 mm across the central three-quarters"; US state rules commonly differ (do
  not import US numbers into UK text).

### (e) Safety-critical notes for drafters

- Tyres: bulges, exposed cord, and deep cuts are illegal and dangerous regardless of tread depth;
  under the MOT manual, tread below the legal minimum and bulges are "Dangerous" defects.
- Space-saver spares: legal only up to 50 mph (C&U reg 27(3)); tell learners to follow the sidewall
  and handbook limit, which may be lower.
- Brake warning light and low brake fluid: the Highway Code links low brake fluid to "brake failure
  and a crash". A lesson should say stop and seek help, not top up and carry on without checking why.
- Warning lights that stay on or come on while driving: Highway Code Annex 6 says "stop and
  investigate". Engine MIL, airbag (SRS) and ESC lamps lit are MOT Major fails.
- Hot coolant: only remove the filler cap after the engine has "cooled naturally" (Annex 6).
- Engine fire: do not open the bonnet; get everyone out; call the fire service (Annex 6).
- Stop-drive recalls: do not drive until repaired (DVSA Code; nidirect's Citroën example).
- EV and hybrid: orange cabling is high voltage; the MOT manual tells testers to avoid touching it, and
  warns that a hybrid's engine "may start without warning". Owners should not touch orange cables.
- Driving to a pre-booked MOT or to repairs with an expired certificate is permitted, but the car must
  still be roadworthy; driving a car with a listed "dangerous" defect is an offence carrying up to
  £2,500 and 3 points.

### (f) Gates: claims that need a primary read before a lesson states them

1. Anything about the MOT inspection manual sections not read (2 Steering, 6 Body and corrosion
   detail, 0 Identification, Appendix A). Read the section before citing it.
2. The Motor Vehicles (Tests) Regulations 1981: only the contents list read. Do not cite regulation
   numbers or text.
3. "Driving an unroadworthy car invalidates insurance": sources say "may invalidate" (Highway Code
   Annex 3), "may also not be valid" (nidirect), and the ABI says a lapsed MOT "would not necessarily
   invalidate" a policy (via nidirect). A lesson must keep the hedge. Insurance itself belongs to
   Personal Finance.
4. Scotland: the standard scale of fines, Scottish penalties, and the Scottish Citizens Advice and
   consumer-law detail (the 1977 Act does not extend to Scotland) were not read.
5. Common-law repairer's lien: no primary read. State only what Citizens Advice says (they can keep
   the car while the bill is disputed; they cannot sell it).
6. The GOV.UK MOT history service display of advisories: the service blocked curl. The start page
   says "minor problems"; do not state that it shows advisories without a reading (the MOT result
   itself lists advisories per "Getting an MOT").
7. Sentencing Council brakes and steering guidelines: pages exist, text not extracted. Tyres only is
   read.
8. NI Temporary Exemption Certificates: time-limited arrangement; recheck nidirect before publishing.
9. The DfT penalties consultation (no-MOT points and seizure) and the in-use emissions consultation:
   check for an outcome before publishing.
10. Consumer Rights Act 2015 goods sections for parts fitted during repairs (ss.9 to 24): not read.
11. General Product Safety Regulations 2005: not read; only cited through the DVSA Code.
12. The DVSA manual's exact MOT defect wording changes periodically (latest change 1 June 2026); cite
    with a date.

### (g) Not read

*Each part's own "Not read" list and UNREAD line below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*


- Motor Vehicles (Tests) Regulations 1981 (contents list only).
- DVSA MOT inspection manual sections 0, 2, 6, 9, 10 and appendices A to C.
- DfT "Date of the first MOT test: consultation response" PDF and the 2022 MOT impact assessment.
- DfT 2017 consultation "Extending first MOT date to 4 years" (only the 2018 news story read).
- General Product Safety Regulations 2005.
- Road Vehicles Lighting Regulations 1989 reg 27 (fetched, not read closely) and all other RVLR
  regulations.
- Road Vehicles (Construction and Use) Regulations 1986 reg 32 (glass and tints; heading seen only)
  and reg 61 Tables I and II.
- Sentencing Council guidelines for brakes defective, steering defective, and using a vehicle in
  dangerous condition.
- check-mot.service.gov.uk (the service itself; blocked).
- Citizens Advice NI, Scotland and Wales versions of the car repair page; Consumerline (NI).
- The Motor Ombudsman consumer guide; Vehicle Warranty Products Code; New Car Code.
- Retail Motor Industry Federation and Independent Garage Association material.
- Consumer Rights Act 2015 goods provisions; Consumer Contracts (Information, Cancellation and
  Additional Charges) Regulations 2013.
- Road Traffic (Northern Ireland) Order 1995 and NI construction and use regulations.
- The Highway Code "The road user and the law" section.
- AA and RAC legal-advice pages on car repairs (seen as search results only).

Part's own list (superseded): Motor Vehicles (Tests) Regulations 1981; MOT inspection manual section 2 Steering; MOT inspection manual section 6 Body structure and attachments; MOT inspection manual Appendix A; Date of the first MOT test: consultation response; Extending first MOT date to 4 years; General Product Safety Regulations 2005; Road Vehicles Lighting Regulations 1989 regulation 27; Construction and Use Regulations regulation 32; Sentencing Council brakes defective guideline; Sentencing Council steering defective guideline; Sentencing Council using vehicle in dangerous condition guideline; check-mot.service.gov.uk; Citizens Advice Scotland car repairs; Consumerline; Motor Ombudsman consumer guide; Vehicle Warranty Products Code; New Car Code; Retail Motor Industry Federation; Independent Garage Association; Consumer Rights Act 2015 section 9; Consumer Contracts Regulations 2013; Road Traffic (Northern Ireland) Order 1995; The road user and the law; AA car repairs legal advice; RAC car repairs advice; repairer's lien

---

## Part D: US roadworthiness law, US recalls and tire information, and dealing with a garage in the US

Researcher D, Stage 1, Car Basics. Read 26 September 2026.

Conventions: **[V]** copied verbatim from text I extracted myself (curl plus pandoc or a python HTML stripper, pdftotext, the eCFR versioner API, the US Code site, or an Internet Archive capture). **[T]** words returned through WebFetch: none are used in this part. **Snippet only**: seen only in a search result; never quoted, never a finding. Raw extracts are in `scratchpad/cb/D/`.

Access problems that matter to the whole course:
- **nhtsa.gov refuses curl (HTTP 403).** Every NHTSA page in this part was read from an Internet Archive capture taken 18 to 24 September 2026 (capture IDs given per source). The captures are days old and complete, so they are treated as current, but a drafter who cites a figure should know it came through the Archive.
- **dmv.ny.gov refuses curl (HTTP 403).** The two New York DMV pages were read from Archive captures of July 2026. nysenate.gov (statute text) also refused; the Vehicle and Traffic Law sections were read from Archive captures of 2025.
- **gao.gov refuses curl.** GAO-15-705 was read in full from a copy of the same PDF posted by the Vermont Legislature (a committee exhibit, January 2024). It is the GAO report itself, not a summary.
- The eCFR text was pulled from the versioner API at the 2026-09-01 point in time, which is the current text.

### 1. State safety inspections: they vary, and many states have none

#### US Government Accountability Office, "Vehicle Safety Inspections: Improved DOT Communication Could Better Inform State Programs" (GAO-15-705)
https://www.gao.gov/products/gao-15-705 (read from the PDF copy at legislature.vermont.gov, "W~Bob Church~GAO Vehicle Inspections~1-31-2024.pdf")
Read: full text, pdftotext. Dated August 2015. GAO is the investigative arm of the US Congress: official and neutral, but eleven years old.
What it establishes:
- The only official national overview I found of which states inspect. "As of July 2015, we found 16 states with periodic inspection" [V] programs. Of these, "11 of the 16 states with inspection programs require an annual vehicle safety inspection, three states require a biennial inspection, and two states require time frames other than annual or biennial" [V].
- Appendix table lists the 16 states then inspecting, with start years: Pennsylvania 1929, Maine 1930, Massachusetts 1930, New Hampshire 1931, Virginia 1932, Delaware 1933, Utah 1936, Vermont 1936, Texas 1951, West Virginia 1955, New York 1957, Rhode Island 1959, Louisiana 1961, Hawaii 1961, North Carolina 1966, Missouri 1969. It also lists states that repealed their programs, among them New Jersey (ended 2010), District of Columbia (2009), Mississippi (2015), Oklahoma (2001) and Florida (1981).
- Why the number fell: before 1976 DOT could withhold federal highway money from states without inspection; "Since 1976, after legislation limited NHTSA's authority to" [V] do so, the number of states has declined (the report cites Pub. L. No. 94-280 § 208 (1976)).
- On whether inspections reduce crashes: "research remains inconclusive about the effect of safety inspection programs on crash rates" [V], and of three US econometric studies "none were able to establish a statistically significant effect of safety inspection programs on crashes involving either fatalities or injuries" [V]. NHTSA-derived estimates put vehicle component failure as "a factor in about 2 to 7 percent of crashes" [V]. State officials nonetheless said inspections remove unsafe vehicles: Pennsylvania data showed that in 2014 "more than 529,000 vehicles (about 20 percent of vehicles in the state) failed inspection and then underwent repairs to pass" [V].
- **The list is out of date.** Texas has since ended inspections for non-commercial vehicles (confirmed below). Other changes since 2015 were not confirmed from primaries (see (f)). No current official or neutral national list was found; the only current lists are secondary (encyclopedia, trade and SEO pages), which I did not use.
Good for: the lesson on US roadworthiness law (the patchwork, and why), and the contested question of whether inspections work.

#### Pennsylvania Department of Transportation (PennDOT), "Safety Inspection Program" and "Safety Inspection Program Frequently Asked Questions for Consumers"
https://www.pa.gov/agencies/dmv/vehicle-services/inspection-and-safety-requirements/safety-inspection-program
https://www.pa.gov/agencies/dmv/faqs/motor-vehicle-faqs/safety-inspection-consumers-faqs
Read: both pages in full, curl plus pandoc. No date shown. PennDOT is the state agency that runs the programme.
What it establishes:
- Inspections are done at "official PennDOT Inspection Stations (usually a repair garage or a service station with a repair shop). Inspection fees are posted at official inspection stations. These fees do not include repairs to correct vehicle defects." [V] The state does not set one fee on this page.
- What is checked on cars and light trucks: "suspension components, steering, braking systems, tires and wheels, lighting and electrical systems, glazing (glass), mirrors, windshield washer, defroster, wipers, fuel systems, the speedometer, the odometer, the exhaust systems, horns and warning devices, the body, and the chassis." [V] In the 42 counties without emissions testing, a "Visual Anti-Tampering Check" [V] of emissions parts is added.
- Frequency: most cars and light trucks "will receive an inspection sticker valid for one year from the month of inspection" [V].
- Complaints about a station go to the state Quality Assurance Officer for the county.
Good for: US roadworthiness lesson; example of an annual safety state.

#### PennDOT, "Pub 45: Vehicle Equipment and Inspection Regulations" (67 Pa. Code Chapter 175)
https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bmv/bmv-manuals/pub_45-inspections-regulations/pub-45.pdf
Read: full PDF extracted with pdftotext; read § 175.6 and § 175.80 (the passenger car and light truck inspection procedure) closely, searched the rest. Edition "PUB 45 (2-26)" [V], i.e. February 2026.
What it establishes:
- § 175.80(e)(1): reject if "A tire has two adjacent treads with less than 2/32-inch tread remaining at any point - less than 4/32-inch tread on front tires of the vehicles having a gross weight in excess of 10,000 pounds." [V] Also reject if "the tread wear indicators contact the road in any two adjacent grooves" [V], ply or cord is exposed, the tyre has "a bump, bulge or separation" [V], is marked "not for highway use" [V], or tyres on the same axle are "not the same size or type of construction" [V].
- § 175.80(d) is the visual emissions-parts check in non-emissions counties: reject if "The catalytic converter has been removed, disconnected or is the wrong type" [V], with the same test for EGR, PCV, fuel inlet restrictor, air pump and evaporative controls.
Good for: tread law (US), the tie between safety inspection and emissions tampering.

#### New York State DMV, "About New York State Inspections" and "New York State Vehicle Safety/Emissions Inspection Program"
https://dmv.ny.gov/inspections/about-new-york-state-inspections (Archive capture 20260703020606)
https://dmv.ny.gov/new-york-state-vehicle-safetyemissions-inspection-program (Archive capture 20260710141515)
Read: both pages in full from the captures. The state motor vehicle agency.
What it establishes:
- "Each vehicle registered in New York State must be inspected at least every 12 months." [V] Also on change of ownership: "When the vehicle is registered in a different name, the new registrant must have the vehicle inspected." [V]
- Expired sticker fines: within 60 days "a fine of $25 to $50" [V]; over 60 days or no sticker "between $50 and $100" [V]; plus "A mandatory state surcharge of $88 ($93 in town and village courts)" [V].
- Tyres: "Tread depth - must be at least 2/32 inch when measured in two adjacent major tread grooves showing the most wear" [V]. Tyre pressure outside the maker's figure is reported but "This is an advisement only, and not cause for rejection." [V] The airbag warning lamp is checked on the same advisory-only basis.
- Other items with numbers: brake linings at least 1/16 inch bonded or 1/32 inch over rivets; windshield: "No crack of 11 inches long or longer is allowed if any part of the crack is within the area cleared by the windshield wiper." [V] Seat belts, brakes (one front wheel removed), steering, suspension, lights, glass and tint, wipers, horn, mirrors, fuel leaks ("Any fuel leak that causes dripping or pooling is not acceptable." [V]).
- Emissions is done in the same visit: the OBDII check applies to "Most 1996 or newer gasoline-powered vehicles and most 1997 or newer diesel-powered vehicles" [V] under 8,501 lb GVWR and examines the "check engine" light. Exempt from emissions: vehicles "less than two model years old" [V], "more than 25 model years old" [V], and "electric-powered" [V], among others. Registration cannot be renewed without a passing emissions record in the last 12 months.
- Consumer rights at the inspection: "The inspection station must have your permission before beginning any repairs." [V] and "You are not required to have your vehicle repaired or re-inspected at the station that performed the initial inspection." [V]
- Complaints about repair shops: form VS-35 to the DMV Consumer & Facilities Services Complaint Unit, phone 1-518-474-8943; "The DMV cannot accept complaints against Repair Shops after 90 days or 3,000 miles (whichever comes first)." [V]
Good for: US roadworthiness lesson (a combined annual safety and emissions state), garage lesson (you need not repair where you were inspected).

#### Virginia State Police, "Vehicle Safety Inspection", "Vehicle Inspection FAQs", and the "Motor Vehicle Safety Inspection Manual" (approved March 17, 2026)
https://vsp.virginia.gov/safety-and-enforcement/vehicle-safety-inspection/
https://vsp.virginia.gov/safety-and-enforcement/safety-division/vehicle-inspection-faqs/
https://vsp.virginia.gov/wp-content/uploads/2026/05/Official-Motor-Vehicle-Safety-Inspection-Manual-2026.pdf
Read: both web pages in full; the manual extracted in full with pdftotext, with 19VAC30-70-40 (fees) and 19VAC30-70-130 (tyres) read closely. The State Police Safety Division runs the programme.
What it establishes:
- The web page lists the 23-plus items of the "Required Official Inspection Procedure" [V]: brakes, parking brake, headlights, other lights, signals, steering and suspension, tyres wheels and rims, mirrors, horn, glass, wipers and defroster, exhaust, the rear plate lamp, the hood latch, fluid levels ("Brake fluid" and "Power steering fluid" [V]), the air pollution control system ("No parts removed, disconnected, or rendered inoperable." [V]), driver's seat, seat belts, airbag and its readiness light, doors, fuel system, floor pan.
- Frequency, FAQ: vehicles "must be reinspected within twelve months of the month of the first inspection or purchase and at least once every twelve months thereafter and display a valid inspection decal." [V]
- Fee, manual 19VAC30-70-40 B: the maximum fees effective July 1, 2019 are "$20 for each inspection of any other vehicle, including trailers and motor homes." [V] ($12 for a motorcycle, $51 for heavy trucks and large buses.)
- Tread, 19VAC30-70-130: reject a tyre with "a tread depth measuring less than 2/32 of an inch" [V], measured "in two adjacent tread grooves where tread is thinnest" [V], and "Do not take measurements from the tread wear indicators." [V] Also reject "a space saver emergency spare tire that is intended for temporary use" [V] fitted on any axle.
Good for: US roadworthiness lesson; the airbag light as an inspection item.

#### Texas Department of Public Safety, "Vehicle Safety Inspection Program Changes Now in Effect" (news release, January 3, 2025) and "Vehicle Inspection Program Overview"
https://www.dps.texas.gov/news/vehicle-safety-inspection-program-changes-now-effect
https://www.dps.texas.gov/section/vehicle-inspection/vehicle-inspection-program-overview
Read: both in full, curl. DPS regulates inspection stations in Texas. The TxDMV page I tried returned 404 and was not read.
What it establishes:
- Confirmed: "as of Jan. 1, 2025, non-commercial vehicles no longer need a vehicle safety inspection prior to registration." [V] The change is "due to House Bill 3297" [V], passed by the 88th Legislature in 2023.
- A fee replaces it: "All non-commercial vehicles in the state are still subject to a $7.50 inspection program replacement fee per HB 3297." [V] New vehicles pay "an initial inspection program replacement fee of $16.75 to cover two years." [V]
- Emissions testing continues in named counties: "Brazoria, Fort Bend, Galveston, Harris and Montgomery counties; Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Parker, Rockwall and Tarrant counties; Travis and Williamson counties; and El Paso County. Bexar County will be added to the list of counties requiring emissions tests in 2026 ." [V] "Vehicles exempt from emissions inspections, including electric-only vehicles, continue to be exempt." [V]
- "All commercial vehicles in all counties are still required to obtain a passing vehicle safety inspection." [V]
Good for: US roadworthiness lesson; the point that a state can drop inspection while the owner's duty to keep the car safe remains.

#### California Bureau of Automotive Repair (BAR), "Smog Check: When you need one and what's required"
https://www.bar.ca.gov/consumer/smog-check-program
Read: full page, curl. No date shown. BAR is the California state regulator of repair shops and the Smog Check programme.
What it establishes:
- California is the example of an emissions-only state: the page concerns emissions testing only. (That California has no periodic safety inspection is my inference from the GAO list and the absence of any such programme on BAR's site; I found no California page that says so in words. See (f).)
- "A Smog Check is required every other year to renew your vehicle registration." [V] Also on change of ownership and first registration in California.
- Exempt: "Gasoline, hybrid, and alternative-fuel vehicles - eight model years and newer ( for vehicle registration renewal only )" [V], "model year 1975 and older" [V], diesels "model year 1997 and older" [V], and "Electric vehicles" [V]. A newer car pays a "smog abatement fee" [V] instead. Worked example on the page: "a 2020 model-year vehicle will need a Smog Check for registration renewal in 2028 (2020 + 8 = 2028)." [V]
- Two kinds of station: "Test-and-repair station" and "Test-only station" [V].
Good for: US roadworthiness lesson (emissions without safety), and the emissions section.

### 2. Federal recalls (NHTSA)

#### NHTSA, "Check for Recalls: Vehicle, Car Seat, Tire, Equipment"
https://www.nhtsa.gov/recalls (Archive capture 20260924153654)
Read: full page from the capture. NHTSA is the federal vehicle safety regulator (US Department of Transportation).
What it establishes:
- Finding the VIN: "Look on the lower left of your car's windshield for your 17-character VIN. Your VIN is also located on your car's registration card, and it may be shown on your insurance card." [V]
- A clean result reads: "0 unrepaired recalls associated with this VIN." [V]
- **What the VIN search will not show** (an important limit): "A safety recall that has already been repaired." [V]; "Some recently announced safety recalls for which not all VINs have been identified." [V]; "Safety recalls that are more than 15 years old (except where a manufacturer offers more coverage)." [V]; recalls by "small vehicle manufacturers, including some ultra-luxury brands" [V]; "Manufacturer customer service or other non-safety recall campaigns." [V]; and "A recall involving an international vehicle." [V]
- "Most decisions to conduct a recall and remedy a safety defect are made voluntarily by manufacturers prior to any involvement by NHTSA." [V]
- Notification: "Manufacturers will notify registered owners by first class mail within 60 days of notifying NHTSA of a recall decision." [V] Advice: "Register your vehicle, tires, car seats & equipment and check recalls twice a year." [V]
- Complaints are added to a public database "after personally identifying information is removed." [V]
Good for: recalls lesson.

#### NHTSA, "Motor Vehicle Safety Defects and Recalls: What Every Vehicle Owner Should Know" (booklet, November 2024 update)
https://www.nhtsa.gov/sites/nhtsa.gov/files/2024-11/MVSDefectsandRecalls-Update_112124_v1a_tag.pdf (Archive capture 20260918233001)
Read: full booklet, pdftotext. This is the document NHTSA's recall page offers as its FAQ.
What it establishes:
- When a recall is needed: non-compliance with a Federal Motor Vehicle Safety Standard, or "a safety-related defect" [V]. The statutory definition quoted in the booklet: motor vehicle safety means performance that "protects the public against unreasonable risk of accidents occurring because of the design, construction, or performance of a motor vehicle" [V].
- Examples not considered safety defects (useful for expectations): "Ordinary wear of equipment such as shock absorbers, batteries, brake pads and shoes, and exhaust systems" [V], "Nonstructural or body panel rust" [V], "Excessive oil consumption" [V], radios, paint.
- Reporting: online at NHTSA.gov, or the Vehicle Safety Hotline: "Call 888-327-4236 or 800-424-9393 toll-free" [V]; TTY 888-275-9171. Investigations "are generally resolved within 18 months from the date they are opened." [V]
- Notice: "Within 60 days after a recall is initiated for a safety defect or noncompliance, manufacturers must notify, by first-class mail, all registered owners and lessees" [V].
- Remedy: repair, replacement, or refund "minus a reasonable allowance for depreciation" [V].
- **Age limit:** "the vehicle cannot be more than 15 years old on the date the defect or noncompliance is determined." [V] Age runs from first sale. "Manufacturers may still provide a free remedy for older vehicles, even though not legally required." [V]
- **Tyres:** free remedy only for tyres "purchased within five years of the defect or noncompliance determination" [V], and "consumers must bring the tire to the dealer within 180 days of receiving the recall notification letter" [V].
- Reimbursement for repairs paid before a recall exists, under conditions and with documentation.
- If a dealer refuses: "you should immediately notify the manufacturer." [V] Dealers generally must honour the recall "regardless of where the vehicle or equipment was originally purchased." [V]
Good for: recalls lesson; what a recall is not.

#### 49 U.S.C. § 30120, "Remedies for defects and noncompliance"
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title49-section30120&num=0&edition=prelim
Read: full section, curl. Office of the Law Revision Counsel, US House: the official US Code.
What it establishes:
- (a)(1): the manufacturer "shall remedy the defect or noncompliance without charge when the vehicle or equipment is presented for remedy." [V]
- (g)(1), the limits: "The requirement that a remedy be provided without charge does not apply if the motor vehicle or replacement equipment was bought by the first purchaser more than 15 calendar years, or the tire, including an original equipment tire, was bought by the first purchaser more than 5 calendar years, before notice is given" [V].
- (b)(1): a tyre must be presented "not later than 180 days after" [V] the later of notice or availability of a replacement.
- (d): the remedy programme must include a plan for reimbursing owners who paid for the remedy in advance.
- (i): restrictions on dealers selling new vehicles and on rental companies renting vehicles under an open recall. **Nothing in this section stops a private seller selling a used car with an open recall**, so the buyer should check the VIN. (My reading of the section: (i) applies to dealers' new-vehicle inventory and rental companies; a drafter who states the used-car point should phrase it as "federal law does not require the fix before a private sale" and not go further.)
Good for: recalls lesson (free remedy and its limits).

#### NHTSA, "Takata Recall Spotlight"
https://www.nhtsa.gov/vehicle-safety/takata-recall-spotlight (Archive capture 20260924153455)
Read: full page from the capture.
What it establishes:
- "Approximately 67 million Takata air bags (priority groups 1-12) have been recalled because these air bags can explode when deployed, causing serious injury or even death." [V] Cause: "Long-term exposure to high heat and humidity can cause these air bags to explode when deployed." [V]
- "NHTSA has confirmed that 28 people in the United States have been killed when their defective Takata PSAN air bag inflators exploded." [V] and "at least 400" [V] allegedly injured.
- "Do Not Drive warnings have been issued for some of the vehicles." [V]
- Do not disable the airbag while waiting: "An air bag that is purposely disabled has a 100-percent chance of failing to provide any protection in a crash." [V]
- Why check twice a year: vehicles scheduled for future recall under the Consent Order "will not be searchable until they are actually recalled" [V].
- A bankruptcy or class action letter does not affect the right to the free recall repair.
- "NHTSA does not conduct recalls. The vehicle manufacturers issue and conduct recalls and report to NHTSA on how the recalls are going." [V]
Good for: recalls lesson, the worked example.

### 3. Tyre information (federal)

#### NHTSA, "Tire Safety Ratings and Awareness | TireWise"
https://www.nhtsa.gov/vehicle-safety/tires (Archive capture 20260924154655)
Read: full page from the capture.
What it establishes:
- "In 2024, a total of 511 people died on the road in tire-related crashes." [V]
- Pressure: "Check the pressure of all tires, including your spare, at least once a month when the tires are "cold," meaning that the car hasn't been driven for at least three hours." [V] Use the vehicle's figure: "the correct pressure for your tire is what the vehicle manufacturer has listed, NOT what is listed on the tire itself." [V] Label location: "the driver's side doorjamb, called a "B-pillar."" [V]
- Tread: "Tires are not safe and should be replaced when the tread is worn down to 2/32 of an inch." [V] The penny test: place a penny "with Lincoln's head upside down and facing you. If you can see the top of Lincoln's head, replace your tires." [V] Built-in "treadwear indicators" [V].
- TPMS only warns at significant under-inflation; "The TPMS is not intended to be a substitute for regular tire maintenance." [V] Required on "model year 2008 or newer" [V] passenger cars, light trucks and vans. A flashing TPMS lamp for "60 to 90 seconds" [V] then steady means a system malfunction. Cold mornings can switch it on briefly.
- Blowout: "Maintain your vehicle speed if possible and if it's safe to do so." [V], correct the steering, then slow and pull off. "Any overreaction – including slamming on the brakes or abruptly removing your foot from the accelerator – can result in a loss of control" [V].
- Age: "Some vehicle and tire manufacturers recommend replacing tires that are six to 10 years old, regardless of treadwear." [V] "The last four digits of the TIN indicate the week and year the tire was made. If the TIN reads 0308 it was made in the third week of 2008." [V] "The TIN may not be on both sides." [V] Full-size spares should not replace worn tyres except in emergencies.
- Rotation: if the maker recommends it, "every 5,000 to 8,000 miles" [V]; some vehicles should not be rotated.
- Fuel: proper inflation "can save you as much as 11 cents per gallon" [V]; "only 19 percent of consumers properly inflate their tires" [V].
Good for: tyre checks, flat tyre and blowout, seasonal checks.

#### 49 CFR 571.110, FMVSS No. 110, "Tire selection and rims and motor home/recreation vehicle trailer load carrying capacity information"
eCFR versioner API, title 49, part 571, section 571.110, point in time 2026-09-01
Read: full section text.
What it establishes:
- S4.3, the placard location: "on a placard permanently affixed to the driver's side B-pillar" [V]; if there is no B-pillar, the forward edge of the rear side door, then "the rear edge of the driver's side door" [V], then the inward-facing surface next to the driver's seat.
- Placard content: vehicle capacity weight as "The combined weight of occupants and cargo should never exceed XXX kilograms or XXX pounds" [V]; seating capacity; "Vehicle manufacturer's recommended cold tire inflation pressure for front, rear and spare tires" [V]; tyre size; the heading "Tire and Loading Information" [V]; and "See Owner's Manual for Additional Information" [V].
- S4.2.1: the vehicle's maximum load on a tyre may not exceed the load rating on its sidewall.
Good for: tyre checks (where to find the right pressure), loading.

#### 49 CFR 571.138, FMVSS No. 138, "Tire pressure monitoring systems"
eCFR, point in time 2026-09-01
Read: full section text.
What it establishes:
- Applies to light vehicles of "10,000 pounds" [V] GVWR or less, except dual-wheel axles.
- S4.2(a), the trigger: illuminate a warning "not more than 20 minutes after the inflation pressure in one or more of the vehicle's tires, up to a total of four tires, is equal to or less than either the pressure 25 percent below the vehicle manufacturer's recommended cold inflation pressure, or the pressure specified in the 3rd column of Table 1 of this standard for the corresponding type of tire, whichever is higher" [V].
- S4.4: a malfunction warning within 20 minutes.
- S4.5, required owner's manual text, including: "Please note that the TPMS is not a substitute for proper tire maintenance, and it is the driver's responsibility to maintain correct tire pressure, even if under-inflation has not reached the level to trigger illumination of the TPMS low tire pressure telltale." [V] And: "Always check the TPMS malfunction telltale after replacing one or more tires or wheels on your vehicle" [V].
- S7 phase-in began October 5, 2005, which is why NHTSA says 2008 model year and newer.
Good for: warning lights lesson (TPMS), tyre checks.

#### 49 CFR 571.139, FMVSS No. 139, "New pneumatic radial tires for light vehicles" (brief)
eCFR, point in time 2026-09-01
Read: S1 to S5.5 read; test procedures skimmed.
What it establishes:
- Applies to new radial tyres for vehicles of 10,000 lb GVWR or less.
- S5.4: at least six treadwear indicators that let a person see "whether the tire has worn to a tread depth of one sixteenth of an inch." [V] (One sixteenth equals 2/32, which is why the indicator and the common 2/32 figure coincide.)
- S5.5 sidewall markings include the "maximum permissible inflation pressure" [V], defined in S3 as "the maximum cold inflation pressure to which a tire may be inflated" [V]: the source of the common confusion with the placard pressure.
- Defines "Snow tire" [V] by a traction index and an "Alpine Symbol" [V] (the three-peak mountain snowflake).
Good for: reading a tyre sidewall.

#### 49 CFR 574.5, "Tire identification requirements"
eCFR, point in time 2026-09-01
Read: full section.
What it establishes:
- A new tyre carries on one sidewall a TIN of "13 symbols" [V]: a three-symbol plant code, a six-symbol manufacturer's code, then the date code.
- (b)(3): "The date code, consisting of four numerical symbols, is the final group. The date code must identify the week and year of manufacture." [V] Example: "0109 means the tire was manufactured in the first full calendar week of 2009" [V].
- (e)(1): "The DOT symbol constitutes a certification that the marked tire conforms to an applicable Federal Motor Vehicle Safety Standard." [V]
- Retreads carry an "R" and a seven-symbol TIN.
Good for: tyre age, reading a sidewall, recall lookup by TIN.

#### 49 CFR 574.7 and 574.8, tyre registration
eCFR, point in time 2026-09-01
Read: 574.8 in full; 574.7 (a)(1) to (a)(2) read.
What it establishes:
- Independent tyre dealers must at the time of sale either give the buyer a paper registration form already filled in with "The entire tire identification number" [V] and the dealer's details, or send the registration to the maker themselves "at no charge to the tire purchaser and within 30 days" [V]. Dealers that are not independent (maker-owned or controlled) must register tyres themselves.
- (d): dealers "shall immediately stop selling any group of tires when so directed by a notification" [V] under 49 U.S.C. 30118.
- Practical point: registration is how a tyre maker can reach you in a recall; a drafter can tell US students to make sure it is done.
Good for: recalls and tyres.

#### 49 CFR 575.104, "Uniform tire quality grading standards" (UTQG)
eCFR, point in time 2026-09-01
Read: (a) to (d) and the Figure 2 consumer text read; test procedures skimmed.
What it establishes:
- Applies to new passenger car tyres but "does not apply to deep tread, winter-type snow tires, space-saver or temporary use spare tires, tires with nominal rim diameters of 12 inches or less" [V] or limited-production tyres.
- Three grades: TREADWEAR (a number), TRACTION ("AA, A, B, or C" [V]), TEMPERATURE (A, B, C).
- The regulation's own consumer caveats: treadwear "is a comparative rating based on the wear rate of the tire when tested under controlled conditions on a specified government test course. For example, a tire graded 150 would wear one and one-half (1 1/2 ) times as well on the government course as a tire graded 100." [V] Traction is wet straight-line braking only: it "does not include acceleration, cornering, hydroplaning, or peak traction characteristics." [V] Temperature grade C is the legal minimum.
- The treadwear course is about 400 miles of public roads near San Angelo, Texas.
Good for: buying tyres; a misconception (treadwear numbers are not miles, and are comparative).

#### 49 CFR 393.75 (FMCSA), "Tires", with 49 CFR 390.3 and 390.5
eCFR, point in time 2026-09-01
Read: 393.75 in full; the applicability rule (390.3) and the "Commercial motor vehicle" definition (390.5) read.
What it establishes:
- 393.75(b): steer tyres on "a bus, truck, or truck tractor shall have a tread groove pattern depth of at least 4/32 of an inch" [V]; (c): other tyres "at least 2/32 of an inch when measured in a major tread groove" [V].
- **Commercial only.** Part 393 sits in the Federal Motor Carrier Safety Regulations, whose rules "are applicable to all employers, employees, and commercial motor vehicles that transport property or passengers in interstate commerce." [V] A commercial motor vehicle is one used in interstate commerce with a weight rating of "10,001 pounds" [V] or more, or carrying more than 8 passengers for pay or 15 not for pay, or placarded hazmat.
- I found **no federal tread minimum for private cars**. The 2/32 figure for private cars comes from state law (Pennsylvania, New York, Virginia above) and from NHTSA's consumer advice, not from a federal rule binding the owner. This is stated as "as far as I could confirm": I did not search every federal title (see (f)).
Good for: tread law, UK vs US.

### 4. Emissions: I/M programmes, OBD-II, tampering

#### US EPA, "Vehicle Emissions Inspection & Maintenance (I/M): General Information for Motorists"
https://www.epa.gov/state-and-local-transportation/vehicle-emissions-inspection-maintenance-im-general-information
Read: full page, curl. The federal environmental regulator.
What it establishes:
- "The 1990 Amendments to the Clean Air Act established I/M requirements for several areas across the country." [V] Testing is run by states and localities; the page links to state programmes.
Good for: emissions section.

#### US EPA, "Overview of Vehicle Inspection and Maintenance (I/M) Programs" (EPA-420-F-21-067, October 2021)
https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1013CC0.pdf
Read: full, pdftotext.
What it establishes:
- I/M is "the periodic inspection of the emissions control systems of motor vehicles" [V], required mainly in ozone nonattainment and maintenance areas; "Basic" and "Enhanced" programmes.
- Three test types: visual (deters tampering, e.g. "catalytic converter replaced with a straight pipe" [V]), tailpipe (mostly model year 1995 and older), and OBD: "Beginning with the 1996 model year, vehicles have been equipped with OBD computerized systems. The OBD system continuously monitors the emission control systems and will activate the ''Check Engine'' light" [V], "most commonly from the catalytic converter or an oxygen sensor" [V].
- "In 2018, nearly 68 million vehicles were inspected nationally, and 3.5 million vehicles, or 5%, initially failed." [V]
Good for: the check engine light; emissions testing.

#### US EPA, "Emissions Warranties for 1995 and Newer Light-duty Cars and Trucks under 8,500 Pounds GVWR" (EPA-420-F-15-035, October 2015)
https://nepis.epa.gov/Exe/ZyPDF.cgi/P100NNQH.PDF?Dockey=P100NNQH.pdf
Read: full, pdftotext.
What it establishes:
- Federal emissions warranties: emission control and related parts "for the first 2 years or 24,000 miles" [V]; three "specified major emission control components" [V] (catalytic converter, the emissions ECU, the OBD computer) for "the first 8 years or 80,000 miles" [V]. They apply to used cars within the limits. California cars may have more.
- On who may service the car: "You may either perform scheduled maintenance yourself or have a qualified repair facility perform it for you." [V] And "Proof of maintenance is not required in order to obtain coverage under the emissions warranty" [V] where a part is defective, though records help if neglect is suspected.
- Tampering or missing emission parts may void the emissions warranties.
Good for: garage lesson (you need not use the dealer), emissions.

#### 42 U.S.C. § 7522 (Clean Air Act § 203) and EPA, "Fact Sheet: Clean Air Act Vehicle Aftermarket Defeat Devices and Tampering" (March 2020)
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title42-section7522&num=0&edition=prelim
https://www.epa.gov/system/files/documents/2021-11/epafactsheetreaftermarketddsandtampering.pdf
Read: § 7522(a) in full; the fact sheet in full.
What it establishes:
- (a)(3)(A) prohibits any person "knowingly to remove or render inoperative any such device or element of design after such sale and delivery to the ultimate purchaser" [V].
- (a)(3)(B) prohibits making, selling or installing a part "where a principal effect of the part or component is to bypass, defeat, or render inoperative any device or element of design" [V] installed to meet the emissions rules.
- The EPA fact sheet (2020) says EPA "generally takes no enforcement for the sale and use of aftermarket parts" [V] where there is a reasonable basis to know emissions are not harmed. How vigorously this is enforced in 2025 to 2026 was not checked (see (f)).
Good for: emissions section, briefly: "deletes" and "tunes" that remove emissions parts are illegal and fail inspection.

### 5. Dealing with a garage in the US

#### California Business and Professions Code §§ 9884.6 to 9884.10 (Automotive Repair Act)
https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=9884.9 (and 9884.6, 9884.7, 9884.8, 9884.10)
Read: full text of each of the five sections, curl. The official California legislative site.
What it establishes:
- § 9884.6(a): "It is unlawful for any person to be an automotive repair dealer unless that person has registered in accordance with this chapter" [V].
- § 9884.9(a), the core rule: "The automotive repair dealer shall give to the customer a written estimated price for labor and parts necessary for a specific job" [V]. "No work shall be done and no charges shall accrue before authorization to proceed is obtained from the customer. No charge shall be made for work done or parts supplied in excess of the estimated price ... without the oral or written consent of the customer" [V], obtained after the shop finds the estimate insufficient and before the extra work. Oral consent must be noted on the work order with date, time, name and number called, and the customer may be asked to sign: "I acknowledge notice and oral approval of an increase in the original estimated price." [V] **There is no percentage tolerance in the California text.**
- § 9884.9(b): the estimate must say if any work will be sublet, and "No service shall be done by other than the dealer or his or her employees without the consent of the customer" [V] unless the customer cannot reasonably be reached.
- § 9884.9(c): collision estimates must itemise and say whether each part is new, used, rebuilt or reconditioned and OEM or aftermarket.
- § 9884.9(e): no written estimate needed for listed preventive maintenance if free or the price is conspicuously posted.
- § 9884.8: all work goes on an invoice listing service work and parts separately; used or rebuilt parts must be stated.
- § 9884.10: "Upon request of the customer at the time the work order is taken, the automotive repair dealer shall return replaced parts to the customer" [V], except warranty parts that must go back to the maker, which the shop must offer to show.
- § 9884.7 lists grounds for discipline, including untrue or misleading statements, "Causing or allowing a customer to sign any work order that does not state the repairs requested by the customer or the automobile's odometer reading" [V], fraud, and "Making false promises of a character likely to influence, persuade, or induce a customer to authorize the repair" [V].
Good for: garage lesson (estimate, authorisation, invoice, old parts).

#### California BAR, "A Consumer's Guide to Auto Repair" and "File a complaint"
https://www.bar.ca.gov/pdf/auto-rep-guide.pdf
https://www.bar.ca.gov/complaint
Read: the guide in full (pdftotext); the complaint page in full. The guide carries no date; its print code "14-357HSA" suggests 2014, so treat it as older than the statute text, which was read directly.
What it establishes:
- BAR's four recommendations: follow the owner's manual; select a shop before you need one and check it is registered with BAR; know your rights; keep the guide in the car.
- "By law, the auto repair shop must provide a written estimate before doing any work. Ask if there is a charge for the estimate." [V]
- Every shop must post a sign saying the customer is entitled to "a written estimate for repair work" [V], "a detailed invoice of work done and parts supplied" [V], and "return of replaced parts, if requested at the time a work order is placed" [V] (the sign text is in small capitals in the original).
- "Do not sign a blank work order." [V]
- Teardown estimates: there may be a charge even if you do not proceed, and the estimate must include "Notice that the vehicle may not be able to be reassembled." [V]
- Old parts and cores: a rebuilt-part exchange may mean paying a "core" charge to keep the old part.
- "A repair shop is not required by law to guarantee its work, but many shops do." [V]
- It names ASE certification as a thing to look for in technicians.
- Complaints: BAR phone "(800) 952-5210" [V]. The current complaint page: "We mediate complaints between consumers and auto repair shops." [V] A representative "will contact you within 7-10 business days." [V] Filing "does not automatically mean the shop violated the law" [V]. The guide adds that BAR "cannot represent you in court, collect money, or levy fines for you" [V].
Good for: garage lesson; complaints.

#### California Civil Code § 3068 (possessory lien on vehicles)
https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=3068
Read: subdivisions (a) to (c)(3), curl.
What it establishes:
- "Every person has a lien dependent upon possession for the compensation to which the person is legally entitled for making repairs or performing labor upon ... any vehicle" [V]. The lien arises when a written statement of charges is presented or 15 days after completion, whichever is first.
- The lien is lost unless the shop applies to conduct a lien sale or files in court "within 30 days after the lien has arisen" [V].
- In plain terms: a shop can lawfully keep the car until it is paid what it is legally entitled to, and may eventually sell it through a lien sale process. The phrase "legally entitled" matters: charges not authorised under § 9884.9 are not money the shop is entitled to (my reading; Florida says it outright, below).
Good for: garage lesson (why a shop can hold your car; why disputes should go through the channels).

#### New York Vehicle and Traffic Law Article 12-A, § 398-d, "Motor vehicle repair shop requirements" (with §§ 398-e, 398-f)
https://www.nysenate.gov/legislation/laws/VAT/398-D (Archive capture 20251116215122; 398-E capture 20250614084617; 398-F capture 20251211114505)
Read: § 398-d in full; the headings and opening of §§ 398-e and 398-f. The registration section (§ 398-c) was not read.
What it establishes:
- § 398-d(1): all work on an invoice; used parts stated; the customer may inspect the repaired car and "all replaced parts and components thereof, except warranty or exchange parts" [V]; the shop must keep replaced parts on timely written demand or for telephone-authorised work.
- § 398-d(2): "Upon the request of any customer, a motor vehicle repair shop shall make an estimate in writing of the parts and labor necessary for a specific job and shall not charge for work done or parts supplied in excess of the estimate without the consent of such customer. The motor vehicle repair shop may charge a reasonable fee for making an estimate." [V] Note: in New York the written estimate is **on request**, unlike California.
- § 398-d(4) requires a posted sign that an insurer may not require repairs at a particular shop: "YOU HAVE A RIGHT TO HAVE YOUR AUTOMOBILE REPAIRED IN THE SHOP OF YOUR CHOICE." [V]
- § 398-e allows the commissioner to suspend or revoke a repair shop's registration, impose civil penalties and order restitution.
Good for: garage lesson; comparison of states.

#### Florida Statutes §§ 559.905 and 559.909 (Florida Motor Vehicle Repair Act)
http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0559/Sections/0559.905.html (and 0559.909)
Read: both sections in full, curl. The official Florida legislature site. § 559.905 last amended "s. 29, ch. 2024-137" [V].
What it establishes:
- § 559.905(1): where repair work "will exceed $150 to the customer, the shop shall prepare a written repair estimate" [V] before any diagnostic work or repair, listing items (a) to (n), including whether the charge is flat rate or hourly, shop supplies charges, the charge for the estimate, any guarantee, whether replaced parts should be saved, and daily storage charges (which "may not accrue or be due and payable for a period of 3 working days" [V] after notice of completion).
- § 559.905(2): the customer signs a boxed choice beginning "I UNDERSTAND THAT, UNDER STATE LAW, I AM ENTITLED TO A WRITTEN ESTIMATE IF MY FINAL BILL WILL EXCEED $150." [V] with options to request one, set a ceiling, or decline.
- § 559.909(3), the tolerance: it is unlawful "to charge more than the written estimate plus $10 or 10 percent, whichever is greater, but not to exceed $50" [V] without authorisation.
- § 559.909(4): "It shall be unlawful for any motor vehicle repair shop to fail to return any customer's motor vehicle because the customer has refused to pay for unauthorized repairs" [V].
- § 559.909(5): on request at authorisation, the customer may inspect removed parts or, if no warranty or exchange programme applies, have them returned.
Good for: garage lesson; the "10 percent" question.

#### Michigan Compiled Laws § 257.1332 and § 257.1311 (Motor Vehicle Service and Repair Act, 1974 PA 300)
https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-1332 (also mcl-257-1311, mcl-257-1334)
Read: § 257.1332 in full; the opening of § 257.1311 and § 257.1334. § 257.1332 history shows "Am. 2025, Act 59 , Eff. Feb. 1, 2026" [V].
What it establishes:
- § 257.1332(1): "Before beginning repair work, a motor vehicle repair facility shall give to the customer a written estimate that itemizes as closely as possible the price for labor and parts necessary for the work." [V] No charge above the estimate without "the knowing written or oral consent of the customer" [V], except that if "the estimated price is exceeded by not more than 10% or $50.00, whichever is lesser" [V] consent is not required unless the customer asked for it. "If the actual cost of a repair is less than the agreed on estimated cost, the customer shall pay only the actual cost." [V]
- § 257.1332(3): a customer may sign a prescribed waiver in "14 point or larger bold capital type" [V] giving up the right to a written estimate up to a stated amount.
- § 257.1311(1): "An individual shall not engage or offer to engage in employment as a specialty or master mechanic if he or she has not applied for and received a certificate for that employment from the department." [V] Michigan is therefore an example of a state that certifies mechanics itself, unlike the voluntary ASE credential.
- § 257.1334: a written statement on return of the repaired vehicle.
Good for: garage lesson; the contrast between state licensing and ASE.

#### Ohio Administrative Code 109:4-3-13, "Motor vehicle repairs or services"
https://codes.ohio.gov/ohio-administrative-code/rule-109:4-3-13
Read: full rule, curl. Effective "March 21, 2026" [V]. A rule of the Ohio Attorney General under the Consumer Sales Practices Act.
What it establishes:
- For face-to-face repairs where the anticipated cost exceeds fifty dollars, the shop must give a form letting the customer choose "written estimate", "oral estimate" or "no estimate" [V], and post or hand over a notice that includes: "Your bill will not be higher than the estimate by more than ten per cent unless you approve a larger amount before repairs are finished." [V]
- (C)(12): failing to give a written itemised list of repairs, parts (stating if used, remanufactured or rebuilt), labour and "the identity of the individual performing the repair or service" [V] is a deceptive act.
- (C)(13): failing to "tender to the consumer any replaced parts" [V] is deceptive unless the parts are to be rebuilt, sold or returned under warranty and the customer was told beforehand.
Good for: garage lesson; comparison of states.

#### Federal Trade Commission, "Auto Repair Basics"
https://consumer.ftc.gov/articles/auto-repair-basics
Read: full page, curl. Page metadata shows updated 2022-01-31. The FTC is the federal consumer protection agency.
What it establishes:
- Choose a shop before you need one; ask to see licences where state law requires them.
- On certification: shops that display certifications "like an Automotive Service Excellence seal" [V]; "Certification indicates that some or all of the technicians meet basic standards of knowledge and competence in specific technical areas. Make sure the certifications are current, but remember that certification alone is no guarantee of good or honest work." [V]
- Labour pricing: "Some shops charge a flat rate for labor on auto repairs. This published rate is based on an independent or manufacturer's estimate of the time required to complete repairs. Others charge on the basis of the actual time the technician worked on the repair." [V]
- Diagnostic fees, second opinions, written estimates ("Make sure you get a signed copy." [V]), parts types (new, remanufactured, salvage), and the completed repair order listing parts, labour and odometer readings.
- Maintenance schedules: "Some repair shops create their own maintenance schedules, which call for more frequent servicing than the manufacturer's recommendations." [V]
- There is "no "standard warranty" on repairs" [V].
- Disputes: shop manager first, then the state Attorney General or local consumer agency, or small claims court.
- A long symptoms section (fluid colours under the car, smells, noises, handling). One line worth flagging for safety: a sweet smell with steam and a hot metallic scent means overheating: "Pull over immediately." [V]
Good for: garage lesson; symptoms and when to stop.

#### FTC, "Auto Warranties and Auto Service Contracts"
https://consumer.ftc.gov/articles/auto-warranties-and-auto-service-contracts
Read: full page, curl. Metadata: published 2023-08-20, updated 2026-06-30. (This page appears to have replaced the older "Auto Warranties, Routine Maintenance, and Repairs: Is Using the Dealer a Must?", whose old URL returned 404; the older title was not read.)
What it establishes:
- "You don't have to use the dealer for repairs or maintenance to keep your warranty in effect. In fact, it's illegal for a dealer to deny your warranty coverage because you had routine maintenance or repairs done by someone else." [V] Exceptions: if the warranty provides work or parts free, the maker can require its chosen facilities or parts.
- "Your warranty stays in effect if you use aftermarket or recycled parts." [V] But a defective or badly fitted part that damages a covered part can lead to denial for that damage, and "The manufacturer or dealer must prove the aftermarket or recycled part caused the damage before they can deny warranty coverage." [V]
- Keep maintenance records: "Otherwise, your claim might be denied." [V]
- Service contracts: "Auto service contracts — sometimes called "extended warranties" — are optional contracts" [V]; they are not warranties under federal law. Questions to ask (cost, deductible, administrator, what is covered, "mechanical breakdowns" versus wear and tear, depreciation factors, teardown labour, where repairs can be done, maintenance conditions).
- Mail and call scams use phrases like "Motor Vehicle Notification," "Final Warranty Notice," or "Notice of Interruption" [V]; "They probably aren't working with your vehicle dealer or manufacturer." [V]
Good for: garage lesson; warranties; scams.

#### FTC consumer alert, "Hang up on auto warranty robocalls" (May 2021)
https://consumer.ftc.gov/consumer-alerts/2021/05/hang-auto-warranty-robocalls
Read: full alert (the comments below it were ignored). Published 2021-05-19.
What it establishes:
- "This is an illegal robocall and likely a scam. The companies behind this type of robocall are not with your car dealer or manufacturer, and the "extended warranty" they're trying to sell you is actually a service contract that often sells for hundreds or thousands of dollars." [V] Advice: hang up; use call blocking.
Good for: garage lesson, briefly.

#### 15 U.S.C. § 2302(c) (Magnuson-Moss Warranty Act § 102(c)) and 16 CFR 700.10 ("Prohibited tying")
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section2302&num=0&edition=prelim
eCFR title 16, part 700, section 700.10, point in time 2026-09-01
Read: § 2302 subsection (c) in full; § 700.10 in full.
What it establishes:
- "No warrantor of a consumer product may condition his written or implied warranty of such product on the consumer's using, in connection with such product, any article or service (other than article or service provided without charge under the terms of the warranty) which is identified by brand, trade, or corporate name" [V], unless the FTC grants a waiver.
- 16 CFR 700.10(c): "No warrantor may condition the continued validity of a warranty on the use of only authorized repair service and/or authorized replacement parts for non-warranty service and maintenance" [V]. Its example of a prohibited clause: "This warranty is void if service is performed by anyone other than an authorized `ABC' dealer and all replacement parts must be genuine `ABC' parts," [V].
Good for: garage lesson (the legal basis for "you need not use the dealer").

#### FTC press release, "FTC Warns Companies to Stop Warranty Practices That Harm Consumers' Right to Repair" (July 3, 2024)
https://www.ftc.gov/news-events/news/press-releases/2024/07/ftc-warns-companies-stop-warranty-practices-harm-consumers-right-repair (Archive capture 20260924145851; the live page returned only navigation text)
Read: full release.
What it establishes:
- FTC staff sent warning letters to eight companies over statements that consumers "must use specified parts or service providers to keep their warranties intact" [V] and over "warranty void if removed" [V] stickers.
- **None of the eight is a car or car-parts company** (air purifiers, a treadmill maker, PC hardware). It shows current FTC enforcement of § 2302(c), but a lesson must not present it as action against automakers. I found no FTC action of 2024 or later aimed at automakers on this point.
Good for: background only.

### 6. What a US garage's certificate means: ASE

#### National Institute for Automotive Service Excellence (ASE), "About ASE", "ASE Certification" and "Consumers"
https://www.ase.com/about-ase ; https://www.ase.com/ase-certification ; https://www.ase.com/consumers
Read: all three pages in full, curl. ASE describes itself as a non-profit set up by the industry; it is the certifying body, so it is an interested source on its own value.
What it establishes:
- "Established by the automotive industry in 1972 as a non-profit organization, ASE is an independent third party that upholds and promotes high standards of service and repair through the assessment, certification and credentialing" [V] of professionals. The "Blue Seal logo" [V] marks certified individuals.
- **ASE certifies people, not shops:** "ASE certifies technicians, not businesses." [V] (A shop can carry the "Blue Seal of Excellence" recognition when a proportion of staff are certified: the About page says "at least 75% of their employees ASE Certified" [V]; the Consumers page says only "a large percentage" [V]. Use the About page figure with care.)
- Requirements: "technicians must complete a minimum of 2 years of qualified work experience and pass a challenging test for each certification." [V] Recertification: "ASE Certified Technicians must retest every 5 years to maintain their certifications" [V].
- It is voluntary and was created partly to avoid state licensing: the About page says it "kept the government from licensing jobs and having oversight" [V]. (Contrast Michigan § 257.1311 above.)
- Test series include automobile and light truck, maintenance and light repair, advanced engine performance, "Light Duty Hybrid/Electric Vehicle Specialist" [V], and "Advanced Driver Assistance Systems (ADAS) Specialist" [V].
- Pair with the FTC caveat: "certification alone is no guarantee of good or honest work" [V].
Good for: choosing a garage (US); the UK comparison (IMI, Part C).

### 7. Right to repair: Massachusetts

#### Massachusetts General Laws chapter 93K, § 2
https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93K/Section2
Read: full section, curl. The official Massachusetts Legislature site.
What it establishes:
- (a): for model year 2002 and later, makers must make available for purchase by owners and independent repair facilities "the same diagnostic and repair information, including repair technical updates, that such manufacturer makes available to its dealers" [V], on daily, monthly and yearly subscriptions "upon fair and reasonable terms" [V].
- (c): the same for diagnostic repair tools.
- (d)(1): from model year 2018, access through an off-the-shelf computer and a non-proprietary interface (SAE J2534 and others).
- (e): makers may exclude immobiliser and security reset information, to be obtained through the National Automotive Service Task Force secure data release model.
- (f), added by the 2020 ballot question: from model year 2022, vehicles that use telematics must have "an inter-operable, standardized and open access platform across all of the manufacturer's makes and models" [V], accessible by the owner through a mobile app and, on the owner's authorisation, by an independent repair facility.
Good for: garage lesson (why an independent shop can work on a modern car), briefly.

#### Massachusetts Secretary of the Commonwealth, Election Statistics: 2012 Question 1 and 2020 Question 1
https://electionstats.state.ma.us/ballot_questions/search/year_from:2012/year_to:2012 and .../year_from:2020/year_to:2020
Read: the ballot question summaries and statewide totals.
What it establishes:
- 2012 Question 1 (repair information access from model year 2015): Yes 2,353,603 (85.7%), No 392,562 (14.3%).
- 2020 Question 1 (telematics "mechanical data" access from model year 2022): Yes 2,599,182 (75.0%), No 867,674 (25.0%). Summary: owners and independent repair facilities "be provided with expanded access to mechanical data related to vehicle maintenance and repair" [V].
Good for: context.

#### Alliance for Automotive Innovation v. Campbell, No. 1:20-cv-12090 (D. Mass.), docket
https://www.courtlistener.com/docket/18666877/alliance-for-automotive-innovation-v-andrea-joy-campbell/
Read: the docket entries on CourtListener (a free public mirror of PACER), not the opinion itself.
What it establishes:
- The automakers' trade association sued to overturn the 2020 law. Judge Denise J. Casper entered a Memorandum of Decision on February 11, 2025 (unsealed February 13) and judgment on February 13, 2025; the case was terminated that day. The Alliance filed a notice of appeal on March 14, 2025 (USCA Case Number 25-1262, First Circuit).
- I did not read the decision or learn the outcome of the appeal. **Treat the telematics provision as in force but legally contested** unless a drafter confirms the First Circuit outcome.
Good for: classifying right to repair as contested.

The 2014 industry memorandum of understanding (automaker and aftermarket trade groups extending the Massachusetts 2013 law nationally): I found only trade-press and trade-association accounts and no copy of the MOU itself. Not read; not used.

### (a) What this part says the field considers essential

1. **There is no single US roadworthiness regime.** Whether a car is inspected, how often, and what for is set by each state. In 2015 GAO counted 16 states with periodic safety inspection; Texas has since dropped it for non-commercial vehicles (1 January 2025). Emissions testing is separate, driven by the Clean Air Act in areas with poor air quality, and can exist without any safety inspection (California, and now Texas's metro counties).
2. **Where states set a tread minimum it is 2/32 inch** (Pennsylvania, New York, Virginia), measured in two adjacent grooves; treadwear indicators on new tyres show 1/16 inch (the same figure). There is no federal tread minimum for private cars that I could find; the federal 4/32 and 2/32 figures are for commercial motor vehicles.
3. **Recalls are free, but with limits.** Check by the 17-character VIN at least twice a year; the free remedy covers vehicles up to 15 calendar years from first sale and tyres up to 5 years, and a tyre must be presented within 180 days. The VIN search does not show every recall (new ones not yet loaded, very old ones, small makers). Register tyres at purchase.
4. **Use the placard pressure, not the sidewall figure.** The Tire and Loading Information placard on the driver's B-pillar gives the maker's cold pressure; the sidewall gives the tyre's maximum. TPMS warns only at about 25 percent under, and the law's own owner's-manual text says it is not a substitute for monthly checks.
5. **Garage law: estimate, authorisation, invoice, old parts.** Every state read requires some form of estimate before work (California and Michigan always in writing; New York on request; Florida over $150 with a signed choice; Ohio over $50 with a signed choice), consent before exceeding it, an itemised invoice, and return or inspection of replaced parts on request.
6. **You do not have to use the dealer to keep a warranty** (15 U.S.C. 2302(c); 16 CFR 700.10; FTC; EPA for emissions warranties), provided the maintenance is done and recorded. An "extended warranty" bought separately is a service contract, not a warranty.
7. **ASE is a voluntary credential for individual technicians,** requiring two years' experience and a test, renewed every five years. It says something about knowledge, not honesty.

### (b) Common misconceptions (each named by a source, with the source)

- **Inflating to the number on the tyre.** NHTSA TireWise: the correct pressure "is what the vehicle manufacturer has listed, NOT what is listed on the tire itself" [V]; FMVSS 139 defines the sidewall figure as the maximum.
- **"The TPMS light will tell me when my tyres are low."** NHTSA and FMVSS 138 S4.5: it warns only at significant under-inflation and "is not a substitute for proper tire maintenance" [V].
- **"I have to use the dealer or my warranty is void."** FTC, "Auto Warranties and Auto Service Contracts": "it's illegal for a dealer to deny your warranty coverage because you had routine maintenance or repairs done by someone else" [V]; 16 CFR 700.10(c).
- **"An extended warranty is a warranty."** FTC: service contracts are "not a warranty as defined by federal law" [V] (the sentence continues past my extract; the words quoted are from the extract).
- **"Disable my airbag until the recall fix."** NHTSA Takata page: No.
- **"If the VIN check is clear there's no recall."** NHTSA recalls page: recent recalls may not have all VINs loaded and recalls older than 15 years are not shown.
- **"A shop can go 10 percent over the estimate."** True in some states and not in others. Ohio's notice allows up to ten per cent; Michigan allows the lesser of 10% or $50; Florida allows the greater of $10 or 10 percent capped at $50; California § 9884.9 has no tolerance at all. (A legal-services website seen in a search snippet claimed a 10 percent tolerance in California; snippet only, not used, but it shows the misconception exists.)
- **"Treadwear 400 means 40,000 miles."** 49 CFR 575.104: the grade is comparative on a government test course and actual wear "may depart significantly from the norm" [V].
- **"Certified means honest."** FTC: "certification alone is no guarantee of good or honest work" [V].
- **"Every state inspects cars."** GAO-15-705: 16 states in 2015, and fewer now.

### (c) Contested questions

- **Do periodic safety inspections reduce crashes?** Contested empirical. GAO-15-705: research "remains inconclusive" [V] and no US study found a statistically significant effect; PennDOT cites its own commissioned 2009 effectiveness study as finding the programme effective (the study PDF was not read; the claim appears only in a search snippet of PennDOT's page and is not used). A lesson should say the evidence is mixed and that states have gone both ways.
- **Right to repair and vehicle data (Massachusetts).** Contested, both legal and value. The 2020 law was upheld at district court in February 2025 and appealed to the First Circuit; outcome not confirmed. The value question (owner and independent-shop access versus automaker claims about cybersecurity and safety) should be presented neutrally, with both sides named, if it is mentioned at all.
- **Whether extended service contracts are worth buying.** Value / individual judgement. The FTC gives questions to ask, not a verdict. Money questions belong to Personal Finance; this course should only explain what a service contract is.
- **Tyre age limits (six to ten years).** Established that ageing happens; the specific replacement age is a maker recommendation, not law. NHTSA says "Some vehicle and tire manufacturers recommend" [V]. Present as a range from makers.

### (d) UK vs US differences

- **Inspection:** the UK has one national MOT (Part C); the US has none at federal level, and state regimes range from annual safety plus emissions (New York), annual safety only (Virginia, Pennsylvania outside emissions counties), emissions only (California, Texas metro counties since 2025), to nothing in many states.
- **Who inspects:** in Pennsylvania, New York and Virginia licensed private garages inspect, as with MOT testing stations. New York states outright that you need not have repairs done at the inspecting station.
- **Tread:** UK legal minimum for cars is 1.6 mm (Part C to confirm). The US state figure is 2/32 inch (about 1.6 mm), so the numbers nearly coincide, but in the US it is state law, enforced mainly at inspection in inspection states.
- **Recalls:** US recalls are run by makers under NHTSA oversight, with a statutory free remedy limited to 15 years (5 for tyres); the UK system (DVSA) is covered by Part C. The US VIN is 17 characters and is visible through the lower left of the windscreen.
- **Tyre information:** US drivers have UTQG grades on the sidewall; the UK and EU use the tyre label (Part C). The DOT TIN date code (week and year) appears on tyres in both markets.
- **Garage law:** the US has state-by-state repair acts with estimate, authorisation and return-of-parts rules; the UK relies on the Consumer Rights Act 2015 (Part C). California's BAR is a dedicated state regulator with a complaint mediation service; the nearest UK analogue is Part C's business.
- **Mechanic credentials:** ASE (US, voluntary, individual) and IMI (UK, Part C). Michigan is an example of a US state that licenses mechanics itself.
- **Warranty and independent servicing:** US protection is Magnuson-Moss § 2302(c) and the FTC rule; the UK equivalent (block exemption rules) belongs to Part C.

### (e) Safety-critical notes for drafters

- **Takata airbags:** never suggest disabling an airbag; follow any "Do Not Drive" warning; the fix is free. NHTSA's figures (67 million inflators, 28 US deaths) are dated to the September 2026 capture: re-read before stating numbers.
- **Blowouts:** NHTSA says do not brake hard or lift off abruptly; hold speed if safe, steer, then slow gradually. This is counter-intuitive and should be stated exactly as NHTSA gives it.
- **Space-saver spares:** Virginia rejects a temporary spare fitted on any axle at inspection; it is for getting to a repair, not for driving on. Tie to the breakdown lesson (other parts cover the speed limits printed on the spare).
- **Overheating:** the FTC advises to "Pull over immediately" [V] when steam and a hot metallic smell accompany a sweet coolant smell. Do not advise opening a hot radiator cap (Part B or C should give the maker's warning).
- **Fuel leaks:** any dripping or pooling fuel fails New York inspection; a lesson should say to stop using the car and get it towed.
- **TPMS:** the law gives the warning up to 20 minutes after pressure falls 25 percent. A fast leak or puncture can be well ahead of the light.
- **Emissions tampering:** removing a catalytic converter or EGR is illegal under 42 U.S.C. § 7522 and fails state checks; do not present "deletes" as a maintenance option.
- **Robocall scams:** do not give payment details to unsolicited "warranty" callers (FTC).

### (f) Gates: claims that need a primary read before a lesson states them

1. **A current list of states with periodic safety inspection.** GAO-15-705 is from 2015. Texas ended in 2025 (confirmed). Changes in other states (for example Utah, which I believe narrowed its programme around 2018, and North Carolina, where a search snippet said only the window-tint check was dropped in 2025) are unconfirmed. Either read each state's official page or say "about fifteen states, as of the last official count in 2015, and fewer since".
2. **California has no periodic safety inspection.** Inferred from GAO and the BAR site; not stated in words on an official California page I read. Confirm from the California DMV before stating it flatly.
3. **No federal tread minimum for private cars.** I confirmed that 49 CFR 393.75 is commercial only and found no other federal rule; I did not exhaustively search every title. Phrase as "federal tread rules apply to commercial vehicles; for private cars tread law is set by states".
4. **The 2014 right to repair MOU:** not read. Do not describe its terms.
5. **The First Circuit outcome in Alliance for Automotive Innovation v. Campbell (No. 25-1262)** and NHTSA's 2023 letters to automakers about the Massachusetts law: not read.
6. **EPA and DOJ tampering enforcement policy in 2025 to 2026:** not checked. The statute is current; how it is enforced may have changed. State only the statutory prohibition.
7. **PennDOT's 2009 inspection effectiveness study:** not read. Do not cite it as evidence.
8. **The FTC's older article "Auto Warranties, Routine Maintenance, and Repairs: Is Using the Dealer a Must?":** not read; cite the current "Auto Warranties and Auto Service Contracts" page instead.
9. **New York repair shop registration (VTL § 398-c):** not read. The requirement to register is implied by §§ 398-d to 398-f; confirm before stating registration details or fees.
10. **Inspection fees in New York and Pennsylvania:** not read (New York's fee chart VS-77 and Pennsylvania station-posted fees). Only Virginia's $20 cap was read.
11. **NHTSA figures (511 tyre-related deaths in 2024; 67 million Takata inflators; 28 deaths):** read from 24 September 2026 captures. Re-read the live page or a fresh capture before a lesson states them, as they change.

### (g) Not read

*Each part's own "Not read" list and UNREAD line below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*


- PennDOT, "Pennsylvania's Vehicle Safety Inspection Program Effectiveness Study" (2009).
- The 2014 national right to repair memorandum of understanding (Alliance of Automobile Manufacturers, Association of Global Automakers, AAIA, CARE).
- The district court Memorandum of Decision in Alliance for Automotive Innovation v. Campbell (February 2025) and any First Circuit decision.
- NHTSA's June and August 2023 letters to automakers on the Massachusetts data access law.
- Texas Department of Motor Vehicles inspection page (URL returned 404).
- New York DMV "Inspection Groups and Fee Chart" (VS-77); New York VTL § 398-c.
- North Carolina DMV and Utah DMV inspection pages; any current national list of inspection states.
- California DMV pages on vehicle inspection requirements.
- The FTC article "Auto Warranties, Routine Maintenance, and Repairs: Is Using the Dealer a Must?"; the FTC report "Nixing the Fix" (2021).
- EPA tampering enforcement alert (the 2020 PDF returned 403) and EPA's 2020 tampering enforcement policy.
- NHTSA "Tire Buyers' FAQ" and "Congratulations on Your New Tire Purchase" PDFs.
- California BAR "Write It Right" (the shop-facing guide).
- Wikipedia and Ballotpedia pages on Massachusetts Question 1 (search results only).

Part's own list (superseded): Pennsylvania Vehicle Safety Inspection Program Effectiveness Study; right to repair memorandum of understanding; 2014 MOU; Alliance for Automotive Innovation v. Campbell Memorandum of Decision; First Circuit No. 25-1262; NHTSA 2023 letter on Massachusetts data access law; TxDMV inspections page; VS-77 Inspection Groups and Fee Chart; Vehicle and Traffic Law 398-c; North Carolina safety inspection; Utah safety inspection; California DMV inspection requirements; Auto Warranties Routine Maintenance and Repairs: Is Using the Dealer a Must?; Nixing the Fix; EPA Enforcement Alert on tampering and defeat devices; EPA tampering enforcement policy; Tire Buyers' FAQ; Congratulations on Your New Tire Purchase; Write It Right; Ballotpedia; Wikipedia

---

## Part E: Breakdowns, flat tyres and the roadside, UK and US

Researcher E, Stage 1, Car Basics. Read 26 September 2026.

Conventions: **[V]** copied verbatim from text I extracted myself (curl plus pandoc, the GOV.UK content API, eCFR API, pdftotext, or an Internet Archive capture). **[V, OCR]** copied from my own OCR of a scanned PDF (tesseract): treat as verbatim but check spelling against the scan before quoting. **[T]** words returned through a summariser: none are used below. **Snippet only**: seen only in a search result; never quoted, never a finding.

Boundary kept: the First Aid course owns casualty care. This part covers only the vehicle and road side of an incident: where to stop, hazard lights, warning triangles, where people stand, calling for help and what to tell the operator, changing a wheel, and when not to try.

Access problems that matter to the whole course:
- nhtsa.gov, cdc.gov, 911.gov, tesla.com and fordservicecontent.com all return HTTP 403 (Akamai) to curl. I read NHTSA, CDC, 911.gov and Tesla pages through Internet Archive captures (IDs given). The Ford online owner manual could not be read at all, live or archived.
- The Highway Code on GOV.UK has an internal inconsistency in section titles: the URL slug is `breakdowns-and-incidents-274-to-287` but the page title is "Breakdowns and incidents (275 to 287)", and the motorway page slug says `253-to-273` while its title says "Motorways (253 to 274)". Rule 274 is now the last motorway rule (leaving the motorway), and the breakdown rules run 275 to 287. Cite rules by number, not by section range.
- Several maker manuals are online-only with no page numbers (Honda, Mazda, Nissan UK). I cite them by section title and URL. Only the Toyota Corolla PDF has printed page numbers.

### 1. The UK rules: the Highway Code

#### Department for Transport / GOV.UK, "The Highway Code: Breakdowns and incidents (275 to 287)"
https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287
Read: full text, via the GOV.UK content API (`/api/content/guidance/the-highway-code/breakdowns-and-incidents-274-to-287`), plus the HTML structure checked for how the Rule 277 lists nest. public_updated_at 2021-09-14; API `updated_at` 2026-09-17. The change note (14 September 2021) records a new Rule 275 and rewritten Rules 277 to 283 and 286. The Highway Code is DfT's official code; rules with MUST/MUST NOT are legal requirements, the others are advice (see gate in (f)).
What it establishes:
- **Rule 275, place of relative safety (new in 2021).** "If you need to stop your vehicle in the event of a breakdown or incident, try to stop in a place of relative safety. A place of relative safety is where you, your passengers and your vehicle are less likely to be at risk from moving traffic." [V] "The safest place to stop is a location which is designed for parking. On motorways and other high-speed roads, the safest place to stop is a service area." [V] Other places: "lay-bys", "emergency areas (see Rule 270)", "hard shoulders (see Rule 269)" [V]. "Be aware that hard shoulders provide less protection than other places of relative safety because they are so close to high-speed traffic." [V] "You and your passengers should, where possible, keep well away from your vehicle and moving traffic. Otherwise moving traffic could collide with your vehicle, forcing it into you and your passengers." [V]
- **Rule 276, breakdowns (all roads).** "If your vehicle breaks down, think first of all other road users and" [V], then the list: "get your vehicle off the road if possible" [V]; "warn other traffic by using your hazard warning lights if your vehicle is causing an obstruction" [V]; "help other road users see you by wearing light-coloured or fluorescent clothing in daylight and reflective clothing at night or in poor visibility" [V]; "put a warning triangle on the road at least 45 metres (147 feet) behind your broken-down vehicle on the same side of the road, or use other permitted warning devices if you have them. Always take great care when placing or retrieving them, but never use them on motorways" [V]; "if possible, keep your sidelights on if it is dark or visibility is poor" [V]; "do not stand (or let anybody else stand) between your vehicle and oncoming traffic" [V]; "at night or in poor visibility do not stand where you will prevent other road users seeing your lights" [V].
- **Rule 277, motorways: Go left, Get safe, Get help.** Opens: "If your vehicle develops a problem, leave the carriageway at the next exit or pull into a service area if possible (see Rule 275 for places of relative safety). If you cannot, you should" [V].
  - Go left: "move into the left lane" [V]; "pull into an emergency area or onto a hard shoulder if you can" [V]; "stop as far to the left as possible, leaving space to exit your vehicle and with your wheels turned to the left" [V]; "if you can, stop just beyond an emergency telephone" [V]; "switch your hazard warning lights on" [V]; "if it’s dark or visibility is poor, use sidelights." [V]
  - Get safe: "exit your vehicle by the side furthest from traffic, if it is safe and possible to do so, and ensure passengers do the same" [V]. Note the wording: "the side furthest from traffic", not "the left-hand door"; in the UK that is normally the left, but the rule does not say "left".
  - The live-lane box inside Get safe: "If you can’t" get to the left lane or a place of relative safety and exit safely, "you should" [V]: "stay in your vehicle" [V]; "keep your seat belts and hazard warning lights on" [V]; "call 999 immediately and ask for the police. Alternatively, press your SOS button if your vehicle has one and ask for the police." [V]
  - The rest of Get safe (in the HTML these bullets follow the live-lane box and belong to the "Get safe" heading): "put on high-visibility clothing if you have it and it is within easy reach" [V]; "get behind a safety barrier where there is one, but be aware of any unseen hazards such as sudden drops, uneven ground or debris" [V]; "DO NOT stand in a place where your vehicle could be forced into you if moving traffic collides with it" [V]; "DO NOT return to your vehicle even if it’s raining, cold or dark" [V]; "remain alert and aware of vehicles or debris coming towards you" [V]; "keep passengers away from the carriageway and children under control" [V]; "DO NOT attempt repairs on your vehicle" [V]; "DO NOT place a warning triangle on the carriageway" [V]; "animals MUST be kept in the vehicle or, in an emergency, under control on the verge." [V]
  - Get help: "use the free emergency telephone to obtain advice and assistance" [V]; "contact a breakdown recovery service" [V]; "always face the traffic when you speak to remain aware of vehicles or debris coming towards you" [V]; "inform them if you are a vulnerable motorist such as disabled, older or travelling alone" [V]; "wait well away from your vehicle and moving traffic, behind the safety barrier where there is one" [V]; "if you are unable to exit your vehicle or if you have not stopped near a free emergency telephone, call 999 immediately and ask for the police. Alternatively, press your SOS button if your vehicle has one and ask for the police." [V]
  - Location table, "Communicating your location. How to identify your location to the emergency services." [V]: eCall, "Press the SOS button if your vehicle has one." [V]; App, "Use a mobile telephone mapping application." [V]; Marker post or driver location sign, "Quote the numbers and letters on marker posts or driver location signs which are located along the edge of the road." [V]
  - Laws cited: "MT(E&W)R reg 14 & MT(S)R reg 12" [V] (the animals MUST).
- **Rule 278, rejoining.** From a hard shoulder: "build up speed, indicate and watch for a safe gap in the traffic. Be aware that vehicles, obstructions or debris may be present on the hard shoulder" [V]. From an emergency area: "you MUST use the emergency telephone provided and follow the operator’s advice for exiting the emergency area. A lane may need to be closed so that you can rejoin the carriageway safely." [V] Law: "RTA 1988 sect 36" [V].
- **Rule 279, disabled drivers.** "switch on your hazard warning lights" [V]; "stay in your vehicle and keep your seat belt on" [V]; "call 999 immediately and ask for the police. Alternatively, press your SOS button if your vehicle has one and ask for the police." [V] Also: "If you are deaf, hard of hearing or speech impaired, it is recommended that you register for the 999 text service (emergencySMS.net) before making a journey." [V]
- **Rule 280, obstructions.** "If anything falls from a vehicle on to a motorway or other high-speed road, DO NOT remove the obstruction yourself. Stop in a place of relative safety (see Rule 275) and call the emergency services on 999." [V] "On other roads, you should only remove obstructions if it is safe to do so." [V]
- **Rule 281** (passing incidents) and **Rule 282** (do not slow unnecessarily; "focus on the road ahead" [V]). Rule 281: "You MUST follow any directions given by police or traffic officers as to whether you can safely pass the incident or obstruction." [V] Law: "RTA 1988 sects 35 & 163 as amended by TMA sect 6" [V].
- **Rule 283, involved in an incident or stopping to help** (vehicle-side items only; the casualty items belong to First Aid): "if possible, stop in a place of relative safety (see Rule 275)" [V]; "use your hazard warning lights to warn other traffic" [V]; "put on high-visibility clothing if you have it" [V]; "ask drivers to switch off their engines" [V]; "ask drivers and passengers to stop smoking" [V]; "contact the emergency services on 999 and provide full details of the incident location and any casualties. Use an emergency telephone, a mobile telephone, or press the SOS button if your vehicle has one" [V]; "move uninjured people away from the vehicles to a place of relative safety (see Rule 275)" [V]; "stay at the scene until the emergency services arrive" [V]; "be prepared to exchange details (see Rule 286)." [V] (Rule 283 also has "DO NOT move injured people from their vehicles unless they are in immediate danger" [V] and a motorcycle-helmet line: First Aid territory, noted here only so the lesson does not contradict it.)
- **Rules 284 and 285, dangerous goods.** Plain orange reflective plates on packaged loads; hazard warning plates on tankers (Rule 284). Rule 285: "switch off engines and DO NOT SMOKE" [V]; "keep well away from the vehicle and do not be tempted to try to rescue casualties as you yourself could become one" [V]; "call the emergency services and give as much information as possible about the labels and markings on the vehicle. DO NOT use a mobile phone close to a vehicle carrying flammable loads." [V]
- **Rule 286, documentation.** If a collision causes damage or injury you MUST "stop. If possible, stop in a place of relative safety" [V]; give "your own and the vehicle owner’s name and address, and the registration number of the vehicle, to anyone having reasonable grounds for requiring them" [V]; if you do not, "report it to the police as soon as reasonably practicable, and in any case within 24 hours." [V] Law: "RTA 1988 sect 170" [V].
- **Rule 287.** If another person is injured and you do not produce your insurance certificate at the time, you MUST "report it to the police as soon as possible and in any case within 24 hours" [V] and "produce your insurance certificate for the police within seven days." [V] (Insurance detail belongs to Personal Finance; the reporting duty is roadside procedure.)
Good for: the breakdown lesson (UK half), the motorway lesson, the "what to tell the operator" section.

#### GOV.UK, "The Highway Code: Motorways (253 to 274)"
https://www.gov.uk/guidance/the-highway-code/motorways-253-to-273
Read: full text via the content API; rules 253 to 274 read, 258 and 269 to 274 extracted. public_updated_at 2021-09-14.
What it establishes:
- **Rule 258, Red X.** "Red flashing light signals and a red ‘X’ on a sign identify a closed lane in which people, stopped vehicles or other hazards are present. You" [V] "MUST follow the instructions on signs in advance of a closed lane to move safely to an open lane" [V] and "MUST NOT drive in a closed lane." [V] "emergency services and traffic authorities use closed lanes to reach incidents and help people in need" [V]. "Lane and road closures indicated by red flashing lights are enforced by the police." [V] Laws include "TSRGD reg 3 and sched 15" [V].
- **Rule 269, hard shoulder.** "You MUST NOT use a hard shoulder except in an emergency or if directed to do so by the police, traffic officers or a traffic sign." [V] Where it is used as a lane: "A red ‘X’ or blank sign above the hard shoulder means that you MUST NOT use the hard shoulder except in an emergency." [V] "You can only use the hard shoulder as an extra lane when a speed limit is shown above the hard shoulder." [V]
- **Rule 270, emergency areas.** "Emergency areas are located along motorways with no hard shoulder or where the hard shoulder can be used as an extra lane (see Rule 269) and MUST only be used in an emergency." [V] "They are marked by blue signs with an orange SOS telephone symbol and may have orange surfacing." [V]
- **Rule 271.** "You MUST NOT stop on any carriageway, emergency area, hard shoulder, slip road, central reservation or verge except in an emergency, or when told to do so by the police, traffic officers, an emergency sign or by red flashing light signals." [V] "Do not stop on any part of a motorway to make or receive mobile telephone calls, except in an emergency." [V]
- **Rule 272.** "You MUST NOT pick up or set down anyone, or walk on a motorway, except in an emergency." [V]
Good for: the motorway breakdown lesson, the smart motorway explainer.

#### GOV.UK, "The Highway Code: General rules, techniques and advice for all drivers and riders (103 to 158)"
https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158
Read: full text via the content API; Rule 116 extracted. public_updated_at 2023-09-17.
What it establishes:
- **Rule 116, hazard warning lights.** "These may be used when your vehicle is stationary, to warn that it is temporarily obstructing traffic. Never use them as an excuse for dangerous or illegal parking. You MUST NOT use hazard warning lights while driving or being towed unless you are on a motorway or unrestricted dual carriageway and you need to warn drivers behind you of a hazard or obstruction ahead. Only use them for long enough to ensure that your warning has been observed." [V] Law: "RVLR reg 27" [V].
Good for: hazard lights, both what they are for and the moving-vehicle restriction.

#### GOV.UK, "The Highway Code: Annex 6. Vehicle maintenance, safety and security"
https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security
Read: full text via the content API. public_updated_at 2022-01-29.
What it establishes:
- Tyre burst: "If a tyre bursts while you are driving, try to keep control of your vehicle. Grip the steering wheel firmly and allow the vehicle to roll to a stop at the side of the road." [V]
- Flat tyre, the key sentence for "when not to": "If you have a flat tyre, stop as soon as it is safe to do so. Only change the tyre if you can do so without putting yourself or others at risk - otherwise call a breakdown service." [V]
- Overheating: "If your engine overheats, you should wait until it has cooled naturally. Only then remove the coolant filler cap and add water or other coolant." [V]
- Fire: "If your vehicle catches fire, get the occupants out of the vehicle quickly and to a safe place. Do not attempt to extinguish a fire in the engine compartment, as opening the bonnet will make the fire flare. Call the fire brigade." [V]
- Smells: "smells of anything unusual such as burning rubber, petrol or an electrical fault; investigate immediately. Do not risk a fire." [V]
Good for: flat tyre lesson, "when not to" lesson, and cross-reference for Part B/warning-light lessons.

### 2. National Highways, smart motorways and the Stocktake

#### National Highways, "Driving on motorways" (breakdown advice page)
https://nationalhighways.co.uk/road-safety/breakdowns/ (redirects to the "Driving on motorways" page)
Read: full text, curl plus pandoc (videos not viewed). No page date shown. National Highways is the government-owned company that runs England's motorways and major A roads.
What it establishes:
- Scale: "Around 25 per cent of the motorway network is now made up of smart motorways." [V]
- Trigger for action: "If your vehicle develops a problem, or if you see a red or amber warning light on your vehicle’s dashboard, leave the carriageway at the next exit or pull into a service area if possible." [V] "Do not stop in a live lane unless absolutely necessary." [V]
- Three steps, matching Rule 277 almost word for word, with one addition: Go left includes "Pull into an emergency area, lay-by or onto a hard shoulder if you can" [V] (adds lay-by).
- The phone number, verbatim: "Use the free emergency telephone (where provided) or a mobile phone to call National Highways on 0300 123 5000 to obtain advice and assistance" [V]. This applies "If you’ve stopped in an emergency area, lay-by or on the hard shoulder" [V].
- Live lane: "Stay in your vehicle" [V]; "Keep your seatbelts and hazard warning lights on" [V]; "Call 999 immediately and ask for the police." [V] Why: "The emergency services can alert us, so we can close motorway lanes and send other help as required, such as a Traffic Officer." [V]
- Text line for impaired callers: "If you have a hearing, speech or physical impairment text us on 0738 028 3600 for roadside assistance." [V]
- Rejoining from an emergency area: "Do not exit an emergency area without speaking to National Highways first. We can set signs and warn approaching traffic that you're about to exit an emergency area. We can even close the lane to help you rejoin the motorway if required." [V]
- Do not stop to help on a motorway: "Don't stop to assist another vehicle that has broken down or been involved in a collision. You may feel you want to help, but it's safer to call National Highways,on 0300 123 5000, or if there is an immediate risk to life call 999." [V] (sic, "Highways,on").
- Kit to carry: "Warm clothes", "Hi-vis jacket", "A torch", "Breakdown cover details" [V]; before a long journey "Any medication you need", "Charged mobile phone", "Food and water" [V].
- Hidden Disabilities Sunflower for vehicles: offered free, so traffic officers know a driver "may need additional support" [V].
Good for: motorway breakdown lesson; the "who do I call" section.

#### National Highways, "Smart motorways evidence stocktake"
https://nationalhighways.co.uk/our-work/smart-motorways-evidence-stocktake/
Read: full text, curl plus pandoc. No page date; the latest report listed is the 2024 fourth year report.
What it establishes:
- The official safety statement: "The latest safety data for smart motorways (2018-2022) continues to show that overall, all three types of smart motorway are safer than conventional motorways in terms of deaths or serious injuries." [V]
- The cancellation: "In April 2023 the Government cancelled plans for new smart motorways. The decision recognised the lack of public confidence and cost pressures." [V]
- The stocktake: commissioned 2019, "Smart Motorway Evidence Stocktake and Action Plan, published in March 2020" [V].
- Completion: "Our fourth year progress report confirms we have now delivered and completed all our stocktake actions." [V] Including "installing more than 700 additional signs informing drivers of the distance to the next place to stop in an emergency" [V]; "upgrading enforcement cameras on smart motorways to enable them to be used to detect vehicles passing under a Red X or entering a lane beyond a Red X" [V]; "ensuring radar stopped vehicle detection (SVD) is in place on every all lane running (ALR) motorway" [V].
Good for: the smart motorway explainer (status as of 2026).

#### National Highways, "Smart motorways stocktake: Fourth year progress report: December 2024"
https://nationalhighways.co.uk/media/mk5hcv3t/cre24_0128-smart-motorways-stocktake-4ypr-120325-final.pdf
Read: executive summary (report pp. 6 to 9) and the stopped-vehicle section of "Updated safety evidence" read in pdftotext; the rest (about 35,000 words, annexes) not read. Cover date "December 2024" [V]; file name suggests publication 12 March 2025, which matches the ORR listing "Published 13 March 2025" for its companion QA report.
What it establishes:
- Headline: "overall, all three types of smart motorway continue to be better than conventional motorways for those safety metrics which consider deaths or serious injuries, and that no one type of motorway, smart or conventional, is ranked best against every safety metric." [V]
- Moving vs stopped: "The majority (96%) of collisions on our network involve only moving vehicles and the risk of being killed or seriously injured in this type of collision continues to be highest on A-roads followed by motorways with a permanent hard shoulder." [V] "The minority (4%) of collisions on our network involve stopped vehicles, and the risk of being killed or seriously injured in this type of collision continues to be highest on A-roads followed by motorways without a permanent hard shoulder." [V]
- Hard shoulders are not safe either: "The hard shoulder is perceived to be a place of safety but, in reality, it does not provide a completely safe place to stop. Between 2018 and 2022 one out of every 18 motorway deaths resulted from a vehicle entering, leaving or being on a hard shoulder. There have been no deaths resulting from a vehicle entering, leaving or being in an emergency area." [V]
- The stopped-vehicle numbers that the critics lean on: "The statistical testing suggests that we can be confident that the stopped vehicle PIC rates for conventional motorways (0.19) and controlled motorways (0.19) are lower than that of ALR (0.29). However, the evidence for statistical differences between other motorway types is not as strong." [V] (PIC = personal injury collisions, per hundred million vehicle miles.)
Good for: the contested-question box on smart motorways. Both sides' strongest facts are in this one official document.

#### National Highways, "National emergency area retrofit"
https://nationalhighways.co.uk/our-work/smart-motorways-evidence-stocktake/national-emergency-area-retrofit/
Read: full text. No page date.
What it establishes:
- "£390m" for "over 150 additional emergency areas" [V]; "This commitment was met in Spring 2025." [V] "there are now around 50% more emergency areas across the ALR network, in comparison to January 2022" [V].
- Description: "They are marked by blue signs featuring an orange SOS telephone symbol. Each is coloured orange and is around the same length as a football pitch. They are positioned at regular intervals, providing somewhere safe to stop and have phones linked directly to our control rooms." [V]
Good for: smart motorway explainer.

#### Department for Transport (GOV.UK press releases), "Smart motorway rollout to be paused as government responds to Transport Committee report" (12 January 2022) and "All new smart motorways scrapped" (15 April 2023)
https://www.gov.uk/government/news/smart-motorway-rollout-to-be-paused-as-government-responds-to-transport-committee-report
https://www.gov.uk/government/news/all-new-smart-motorways-scrapped
Read: full text of both via the content API. First published 2022-01-12 and 2023-04-15.
What it establishes:
- 2022 pause: "rollout of new all lane running smart motorway schemes will be paused until 5 years of safety data is available" [V]. DfT position then: "it does not agree with the view that smart motorways were rolled out prematurely or unsafely." [V] It also records the committee view that "evidence suggests hard shoulders do not always provide a safe place to stop" [V].
- 2023 cancellation: "plans for new smart motorways will be cancelled in recognition of the current lack of public confidence felt by drivers and cost pressures" [V]; "the 11 already paused from the second Road Investment Strategy (2020 to 2025) and the 3 earmarked for construction during the third Road Investment Strategy (2025 to 2030)" [V] removed; "the M56 J6-8 and M6 J21a-26 will be completed given they are already over three quarters constructed." [V]
- Note the brief's phrase "paused new all-lane-running schemes in 2023" is inexact: the pause was January 2022; April 2023 was a cancellation. Lessons must use the right word for each date.
Good for: smart motorway explainer.

#### Office of Rail and Road, "Monitoring smart motorways"
https://www.orr.gov.uk/monitoring-and-regulation/roads-monitoring/smart-motorways
Read: full page text (the listed PDFs not opened). ORR is the independent regulator that monitors National Highways.
What it establishes:
- Quotes the Secretary of State in April 2020 on the stocktake: "overall, what the evidence shows is that in most ways, smart motorways are as safe as, or safer than, the conventional ones. But not in every way." [V]
- Lists a 21 July 2023 ORR letter to National Highways on "Performance of stopped vehicle detection systems on smart motorways" [V] (not read).
Good for: the contested box; a neutral regulator framing.

#### The AA (motoring organisation, not official), two newsroom statements by Edmund King, AA president
https://www.theaa.com/about-us/newsroom/smart-motorways-safety-update (15 December 2022)
https://www.theaa.com/about-us/newsroom/smart-motorways-third-year-progress-report (undated; comments on the third year report, so late 2023 or 2024)
Read: full text of both. The AA sells breakdown cover and has campaigned against all-lane running; label it as a named critic, not a neutral source.
What it establishes:
- On SVD (2022): the ORR report said "SVD performance is falling short of the performance requirements the company set itself" [V] (the AA quoting ORR); King: "The radar system should be identifying 80% of stopped vehicles in a live lane and operators checking the alarms within 20 seconds. Neither of these targets have been met and it is simply unacceptable" [V].
- On the third year report: "The fundamental problem remains that stopped vehicle incidents are more frequent on All Lane Running (ALR) ‘smart’ motorways compared to motorways with hard shoulders. To address this, the hard shoulder needs to be reinstated or at the very least the number of Emergency Areas needs to be radically increased." [V]
- Live-lane advice agrees with official advice: "if you breakdown in a live lane and can’t exit the vehicle safely via the passenger seat, you should keep your seat belt on, put on hazard lights and other lights and dial 999. It is an emergency." [V]
Good for: the contested box, as the named critic.

### 3. The US side

#### NHTSA, "Move Over: It's the Law"
https://www.nhtsa.gov/move-over-its-law
Read: full text via Internet Archive capture 20260918175528 (live site 403). No page date.
What it establishes:
- "For the safety of everyone on and off the road, all 50 states have Move Over laws." [V]
- "All states require drivers to move over and slow down for emergency vehicles with flashing lights." [V]
- "In 19 states and Washington, DC, laws include moving over for all vehicles with flashing or hazard lights, such as: law enforcement, EMS, fire, highway maintenance, construction, utility, trash, and disabled vehicles." [V]
- What drivers should do: "change into a lane not immediately adjacent to the vehicle, or" [V] "slow down to a reasonable speed if you’re unable to safely make a lane change." [V] "Violation of the Move Over law results in fines and in some cases jail time." [V]
Good for: US breakdown lesson: why hazard lights may carry legal weight for passing drivers in some states.

#### California Legislature, Vehicle Code § 21809 (example state Move Over statute)
https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=VEH&sectionNum=21809
Read: full section text. Status line: "(Amended by Stats. 2025, Ch. 58, Sec. 1. (AB 390) Effective January 1, 2026.)" [V]
What it establishes:
- Since 1 January 2026 California's law covers "any other stationary vehicle displaying flashing hazard lights or another warning device, including, but not limited to, cones, flares, or retroreflective devices" [V]. Drivers must change lanes "if practicable" or "slow to a reasonable and prudent speed" [V].
- Penalty: "A violation of subdivision (a) is an infraction, punishable by a fine of not more than fifty dollars ($50)." [V]
- Exception: does not apply where the stopped vehicle "is not adjacent to the highway or is separated from the highway by a protective physical barrier." [V]
- Drafting consequence: NHTSA's "19 states and Washington, DC" count may pre-date California's 2026 change. A lesson should not repeat a state count without a date, and should say "some states" or give a dated figure.
Good for: US breakdown lesson, one statute as a worked example.

#### California DMV, California Driver Handbook, "Section 8: Safe Driving (Continued)"
https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving-cont2/
Read: full section text. No date shown. Official state driver handbook.
What it establishes:
- "If Your Vehicle Becomes Disabled on the Freeway" [V]: "Safely pull over to the right shoulder." [V] "Exit on the right side so you are away from traffic if you must get out of the vehicle." [V] "Dial 511 from your cell phone or locate call box for assistance.." [V] (sic, double full stop). "Return to your vehicle as soon as you can. Get back into the vehicle from the right side (away from traffic)." [V] "Stay inside your vehicle with your seat belt on until help arrives." [V] "Use your emergency flashers at your discretion." [V]
- Exceptions: "There are certain circumstances where it is safer to get out of your vehicle and stay away. These include situations where there is:" [V] "Not enough space on the shoulder." [V] "A guardrail." [V] "An area for you to safely stay away from freeway lanes." [V]
- CHP Freeway Service Patrol: "During commute times, the CHP FSP provides free emergency roadside services in certain areas." [V] It will "Change a flat tire." [V] and "Jump start your vehicle if the battery is dead." [V]
- Railway crossing: if a train is approaching, "Immediately exit your vehicle. Run away from the tracks diagonally in the direction the train is coming from. Then call 911." [V] If no train: "Dial the number located on the railroad crossing posts or metal control box near the tracks. Provide the crossing number (if posted). Tell them a vehicle is on the tracks. Then call 911." [V]
Good for: the UK/US contrast on whether to stay in the car; railway crossing box.

#### AAA Club Alliance (motoring organisation, not official), "The Key To Staying Safe When Your Car Breaks Down"
https://cluballiance.aaa.com/the-extra-mile/advice/car/staying-safe-when-your-car-breaks-down
Read: full article text. No date. AAA clubs sell roadside assistance; this is an interview with a named AAA fleet manager.
What it establishes:
- "In the event your vehicle becomes disabled on a highway or surface street, pull over as far to the right as you're able and turn on your hazard lights." [V]
- Stay in: "Vehicles have airbags and side curtain bags. That along with your seat belt will protect you from serious injury if your disabled vehicle is struck by another vehicle," [V] (the manager, Chris Overpeck).
- If you must get out (and only after pulling to the right shoulder): "exit the vehicle from the passenger side and wait beyond the protective guard rail, if one exists. A good rule of thumb is to remain at least 40 feet from your disabled vehicle." [V]
- Kit: "an emergency flashing light, flares, orange triangles, safety blanket, bottles of water, and jumper cables" [V].
- A named mistake: "A common mistake we see is drivers placing the vehicle into neutral to try and help the tow operator. This is highly dangerous because the vehicle isn't secured and can move at any time" [V]; "When assistance arrives, you should remain in your vehicle with seatbelt fastened until the tow operator approaches to give you instructions." [V]
Good for: US breakdown lesson; the stay-in versus get-out contrast.

#### AAA Foundation for Traffic Safety, "Understanding the Circumstances of Roadside Fatalities" (project page)
https://aaafoundation.org/research/understanding-the-circumstances-of-roadside-fatalities/
Read: full project page (not a report; the study is described as in progress). The Foundation is AAA's research charity.
What it establishes:
- "Data from the National Highway Traffic Safety Administration (NHTSA) indicate that more than 2,100 people were killed outside of disabled vehicles at the roadside in 2019-2023." [V] The victims include "motorists who exited their own disabled vehicles as well as “Good Samaritans” attempting to help them." [V]
- Undercount: earlier Foundation work "found that fewer than half of all towing providers killed at the roadside were identifiable in NHTSA’s data as incident response personnel" [V] (citing Tefft et al., 2024).
Good for: why standing near a broken-down car is the danger, US side. Use the 2,100 figure with its attribution (AAA Foundation citing NHTSA data); the NHTSA dataset itself was not read.

#### FMCSA, 49 CFR 392.22 "Emergency signals; stopped commercial motor vehicles" (COMMERCIAL VEHICLES ONLY)
eCFR API, full text as of 2026-09-01: https://www.ecfr.gov/current/title-49/section-392.22
Read: full section text. Source note ends "91 FR 7870, Feb. 19, 2026" [V], so the section was amended in February 2026 (amendment not read; see (f)).
What it establishes (for trucks and buses, not private cars):
- Hazard flashers "immediately" when a CMV stops on the traveled portion or shoulder [V, paraphrase of (a)].
- Warning devices "as soon as possible, but in any event within 10 minutes" [V]; placement "One on the traffic side of and 4 paces (approximately 3 meters or 10 feet) from the stopped commercial motor vehicle in the direction of approaching traffic" [V], and two at "40 paces (approximately 30 meters or 100 feet)" [V] behind and ahead.
- Divided or one-way roads: one device "at a distance of 200 feet and one warning device at a distance of 100 feet in a direction toward approaching traffic" [V], plus one within 10 feet of the rear.
- Hills and curves: within 500 feet of a curve or crest, place the device "a distance of 100 feet to 500 feet from the stopped commercial motor vehicle" [V].
- Fuel leak: "no emergency warning signal producing a flame shall be lighted or placed except at such a distance from any such liquid or gas as will assure the prevention of a fire or explosion." [V]
- Related: 49 CFR 393.95(f) requires "Three bidirectional emergency reflective triangles that conform to the requirements of Federal Motor Vehicle Safety Standard No. 125" [V] or "At least 6 fusees" [V] on commercial vehicles. FMVSS 125 (49 CFR 571.125) S3: applies to devices "designed to be carried in buses and trucks that have a gross vehicle weight rating (GVWR) greater than 10,000 pounds." [V]
- Drafting consequence: there is no federal rule requiring a private car driver in the US to carry or place triangles. The FMCSA distances may be offered only as a reference pattern, clearly labelled as the commercial rule.
Good for: US warning-device paragraph, as contrast with Highway Code Rule 276 (45 metres, never on motorways).

#### 911.gov (US DOT/NHTSA National 911 Program), "Calling 911"
https://www.911.gov/calling-911/
Read: full text via Internet Archive capture 20260907153825 (live site 403).
What it establishes:
- "An emergency is any situation that requires immediate assistance from the police, fire department or ambulance." [V]
- The caller should be ready for "The location of the emergency, including the street address" [V] and details of the emergency. "Do not hang up until the call-taker instructs you to do so." [V]
- Text-to-911 (from search snippets only, FCC page not read): Snippet only, not a finding.
Good for: US "calling for help" paragraph. Pair with UK Rule 277 location table (marker posts, apps, eCall).

### 4. Flat tyres: owner handbooks, workplace guidance, injury data, repair standards

#### Toyota Motor Sales USA, 2023 Corolla Owner's Manual (OM02568U), section 7-2 "Steps to take in an emergency"
https://assets.sia.toyota.com/publications/en/om-s/OM02568U/pdf/OM02568U.pdf
Read: pp. 46, 350 to 353, 370 to 386 read in pdftotext -layout (printed page numbers match PDF page numbers). PDF created March 2024. 468 pages.
What it establishes:
- p. 370, before jacking: "Stop the vehicle in a safe place on a hard, flat surface." [V] "Set the parking brake." [V] "Shift the shift lever to P." [V] "Stop the engine." [V] "Turn on the emergency flashers." [V] Warning: "Do not continue driving with a flat tire. Driving even a short distance with a flat tire can damage the tire and the wheel beyond repair, which could result in an accident." [V]
- p. 372, jack warnings: "Improper use of the tire jack may cause the vehicle to suddenly fall off the jack, leading to death or serious injury." [V] "Do not put any part of your body under the vehicle while it is supported by the jack." [V] "Do not raise the vehicle while someone is inside." [V] "Only use the tire jack that comes with this vehicle for replacing a flat tire." [V]
- p. 373: "When raising the vehicle, do not put an object on or under the jack." [V] "Do not raise the vehicle to a height greater than that required to replace the tire." [V] "Use a jack stand if it is necessary to get under the vehicle." [V] "When lowering the vehicle, make sure that there is no-one near the vehicle." [V]
- p. 374: "1 Chock the tires." [V] with a diagram placing the chock at the diagonally opposite wheel; "3 Slightly loosen the wheel nuts (one turn)." [V] before raising.
- p. 375: "6 Raise the vehicle until the tire is slightly raised off the ground." [V] Hot brakes: "the disc wheels and the area around the brakes will be extremely hot." [V]
- p. 376, re-torque: "Have the wheel nuts tightened with a torque wrench to 76 ft•lbf (103 N•m, 10.5 kgf•m) as soon as possible after changing wheels." [V] Clean the contact surface first, or "the wheel nuts may loosen while the vehicle is in motion" [V].
- p. 377: "Tightening torque: 76 ft•lbf (103 N•m, 10.5 kgf•m)" [V]; the compact spare is labelled "TEMPORARY USE ONLY" [V] on the sidewall; the TPMS does not monitor the spare.
- p. 378, speed: "Do not drive at speeds in excess of 50 mph (80 km/h) when a compact spare tire is installed on the vehicle." [V] With the spare fitted, ABS, VSC, TRAC, PCS and other systems "may not operate correctly" [V]. "Do not use more than one compact spare tires simultaneously." [V] (sic).
- p. 379: "Do not fit tire chains to the compact spare tire." [V] Liquid sealant may damage the TPMS valve and transmitter.
- p. 46, exhaust (for the snow item): "Do not leave the engine running in an area with snow build-up, or where it is snowing. If snowbanks build up around the vehicle while the engine is running, exhaust gases may collect and enter the vehicle." [V]
- p. 351, towing: "we recommend having your vehicle towed by your Toyota dealer or commercial towing service, using a wheel-lift type truck or flatbed truck." [V] p. 353, emergency tow by cable: "at most 50 miles (80 km) at under 18 mph (30 km/h)" [V], with "A driver must be in the vehicle to steer and operate the brakes." [V]
Good for: flat tyre lesson (the US handbook model), towing paragraph, snow and CO.

#### American Honda, 2024 Civic Sedan Owner's Manual (online), "If a Tire Goes Flat"
https://techinfo.honda.com/rjanisis/pubs/OM/AH/AT202424IOM/enu/details/131229047-15363.html
Read: full section text (online HTML manual; no page numbers).
What it establishes:
- "Park the vehicle on a firm, level, non-slippery surface and apply the parking brake." [V] "Turn on the hazard warning lights" [V].
- Compact spare: "keep the vehicle speed under 50 mph (80 km/h). Replace with a full-size tire as soon as possible." [V] Spare pressure "60 psi (420 kPa, 4.2 kgf/cm²)" [V].
- Chocking: "Place a wheel block or rock in front and rear of the wheel diagonal to the flat tire." [V]
- "Loosen each wheel nut about one turn using the wheel nut wrench." [V] before jacking.
- The key warning: "The vehicle can easily roll off the jack, seriously injuring anyone underneath." [V] "Follow the directions for changing a tire exactly, and never get under the vehicle when it is supported only by the jack." [V] "Do not use the jack with people or luggage in the vehicle." [V] "Use only where the ground is firm and level." [V] "Use only at the jacking points." [V] "Do not put anything on top of or underneath the jack." [V]
- Wheel nuts: tighten in a star pattern "two to three times"; torque "80 lbf∙ft (108 N∙m, 11 kgf∙m)" [V]; "Do not over tighten the wheel nuts by applying extra torque using your foot or a pipe." [V]
- Tyre repair kit limits: do not use it if "The tire sealant has expired." [V], "More than one tire is punctured." [V], "The puncture or cut is larger than 5/32 inch (4 mm)." [V], "The tire side wall is damaged or the puncture is outside the contact area." [V], "The tire bead is no longer seated." [V], "The rim is damaged." [V] "Do not remove a nail or screw that punctured the tire." [V] After sealing: "Do not exceed 50 mph (80 km/h)." [V] If pressure is "Less than 19 psi (130 kPa)" [V] after 10 minutes, "Do not add air or continue driving. The leak is too severe. Call for help and have your vehicle towed." [V]
- CO while running the compressor: "Only run the engine to power the air compressor with the vehicle outdoors." [V]
- Kit placement: "on flat ground near the flat tire, and away from traffic" [V].
Good for: flat tyre lesson; tyre repair kit limits.

#### Mazda Motor Corporation, Mazda3 Owner's Manual (online, European English, edition code 8GD7-EE-17H), chapter "Flat Tyre" (sections 08020100 to 08020303)
https://owners-manual.mazda.com/gen/en/mazda3/mazda3_8gd7ee17h/contents/08020100.html (and sibling pages 08020101 to 08020303)
Read: all nine Flat Tyre pages, full text (no page numbers).
What it establishes:
- Where to stop: "If you have a flat tyre, drive slowly to a level spot that is well off the road and out of the way of traffic to change the tyre." [V] "Stopping in traffic or on the shoulder of a busy road is dangerous." [V]
- "Have everyone get out of the vehicle and away from the vehicle and traffic." [V]
- Chocking: "Block the wheel diagonally opposite the flat tyre. When blocking a wheel, place a tyre block both in front and behind the tyre." [V] "Changing a flat tyre without using wheel blocks is dangerous because the vehicle may move and fall off the jack even with the shift lever in 1st or R, or the select lever is in P" [V].
- Nuts: "Loosen the wheel nuts by turning them anticlockwise one turn each, but do not remove any wheel nuts until the tyre has been raised off the ground." [V]
- Jack: "Never place objects under the jack:" [V] "Use only the jack provided with your Mazda:" [V] "Never go under the vehicle while it is jacked up:" [V] "Never allow anyone inside a vehicle supported by a jack:" [V]
- Nut torque "108―147 (12―14, 80―108)" N·m [V]; "Do not apply oil or grease to wheel nuts and bolts" [V]; "If you are unsure of how tight the nuts should be, have them inspected at an expert repairer" [V].
- Temporary spare: "Do not exceed 80 km/h (50 mph)." [V] "Do not install the temporary spare tyre on the front wheels (driving wheels):" [V] (this model's own instruction; others, e.g. Toyota, allow front fitting except with chains).
- Repair kit: step 4 "If necessary, flash the hazard warning lights and set up the roadside emergency triangle." [V] Cannot be used if "The tear or puncture exceeds about 4 mm (0.16 in)." [V], "The damage has occurred to an area of the tyre other than the tread." [V], "The tyre has two or more punctures." [V], or the sealant has expired. Drive "at a speed of 80 km/h (50 mph) or less" [V]; stop if pressure falls below "130 kPa (1.3 kgf/cm² or bar, 18.9 psi)" [V]. "Mazda recommends that the tyre be replaced with a new one as soon as possible." [V]
Good for: flat tyre lesson (UK/European terminology), repair kit limits.

#### Nissan (UK), 2023 LEAF Owner's Manual (online), chapter "In case of emergency" and related sections
Base URL: https://www.nissan.co.uk/owners/car-repair/car-owner-manual/manuals/iom/leaf/0ze1/e0/2023/ ; pages read: stopping-vehicle-1, blocking-wheels-1, removing-or-installing-the-wheel-1, removing-tyre-1, installing-spare-tyre-1, temporary-use-spare-wheel-tyre-1, before-using-emergency-tyre-puncture-repair-kit-1, repairing-tyre-1 (first part), after-repairing-tyre-1, hazard-warning-flasher-switch-1, jump-starting-1 (first part), push-starting-1, towing-your-vehicle-1, towing-recommended-by-nissan-1, flat-towing-1.
Read: those pages' main text. Section numbers on the pages are inconsistent with the manual's own table of contents (for example the page heading "10.3.4.3. Towing recommended by NISSAN" against a TOC entry "10.7.1"), so cite by section title.
What it establishes (the EV case):
- Stopping: "Never change or repair tyres when the vehicle is on a slope, ice or slippery areas. This is hazardous." [V] "Never change or repair tyres if oncoming traffic is close to your vehicle. Wait for professional road assistance." [V] "Open the bonnet: To warn other traffic. To signal professional road assistance personnel that you need assistance." [V] "Have all passengers exit the vehicle and stand in a safe place, away from traffic and clear of the vehicle." [V]
- Jack: "DO NOT GET UNDER A VEHICLE THAT IS SUPPORTED BY A JACK." [V] "Never use blocks on or under the jack." [V] "Never place the power switch in the READY to drive position while the vehicle is on the jack." [V] "The jack should be used on level firm ground." [V] "Do not remove the wheel nuts until the tyre is off the ground." [V]
- Re-torque: "Tighten the wheel nuts to the specified torque with a torque wrench as soon as possible." [V] "108 N·m (11 kg-m, 80 ft-lb)" [V].
- T-type spare: "Do not drive your vehicle faster than 80 km/h (50 MPH)" [V]; pressure "420 kPa (4.2 bar, 60 psi)" [V].
- Sealant: "The Emergency Tyre Sealant cannot permanently seal a punctured tyre." [V] "your knowledgeable LEAF repairer such as a NISSAN certified electric vehicle dealer will also need to replace the tyre." [V] "Do not stand directly beside the damaged tyre while it is being inflated because of the risk of rupture." [V]
- EV towing: "NISSAN recommends that your vehicle be towed with the driving (front) wheels off the ground or that the vehicle be placed on a flatbed truck as illustrated." [V] "Never tow with the front wheels on the ground or four wheels on the ground (forward or backward), as this may cause serious and expensive damage to the motor." [V] "DO NOT tow this vehicle with all four wheels on the ground (flat towing)." [V] "Never ride in a vehicle that is being towed." [V]
- Push starting: "An electric vehicle cannot be push-started or tow-started. Attempting to do so may cause traction motor damage." [V]
- Jump starting (12-volt): "Jump starting does not charge the Li-ion battery." [V] "The LEAF cannot be used as a booster vehicle because it cannot supply enough power to start a petrol or diesel engine vehicle." [V]
- Hazard lights: "When an impact that could activate the supplemental air bags is detected, the hazard warning flasher lights are activated automatically." [V]
Good for: EV section of the breakdown lesson; towing; jump start caveat.

#### Tesla, Model 3 Owner's Manual (UK English), "Instructions for Transporters"
https://www.tesla.com/ownersmanual/model3/en_gb/GUID-FA9E3DC9-805C-45BD-A64D-C4B3F491B8C0.html
Read: full section text via Internet Archive capture 20241004175445 (live site 403). The capture is two years old; the live page may differ.
What it establishes:
- "DO NOT TRANSPORT WITH WHEELS ON THE GROUND" [V]. "The motor(s) in Model 3 generates power when the wheels spin. Always transport Model 3 with all four tires off the ground." [V] "IN RARE CASES EXTREME OVERHEATING MAY CAUSE THE SURROUNDING COMPONENTS TO IGNITE." [V]
- "A flatbed truck or comparable transport vehicle is the recommended method of transporting Model 3." [V] Wheel lifts and dollies only "for a maximum of 35 miles (55 km)" [V].
- Transport Mode lets the tyres turn only "slowly (under 3 mph or 5 km/h) and for a very short distance (less than 30 feet or 10 meters)." [V]
- After a collision, "it is important to assume these components are energized." [V]
Good for: EV towing paragraph (tell the recovery operator it is an EV; do not push it far).

#### Health and Safety Executive (HSE), "Working under vehicles" (Motor vehicle repair pages)
https://www.hse.gov.uk/MVR/mechanical-repair/under-vehicles.htm
Read: full page text. No date shown. HSE is Great Britain's workplace regulator; this is trade guidance, but its principles transfer.
What it establishes:
- "Vehicles falling or rolling off incorrectly positioned jacks or stands, particularly where they are not chocked, are one of the main causes of fatal accidents in motor vehicle repair (MVR)." [V]
- Rules: "you use stands on a hard, level surface for example concrete and avoid lifting on sloping ground" [V]; "to securely chock wheels remaining on the ground" [V]; "that all lifting points for jacks and stands are correct for that vehicle - consult the vehicle manufacturer's handbook for guidance" [V]; "that vehicles are always properly supported - do not rely on jacks alone" [V]; "you use the correct pins for axle stands - screwdrivers, nails and bolts are not acceptable" [V].
- Away from a workshop: "the ground is firm and level before raising a vehicle" [V].
- Incident examples include a tyre fitter killed changing coach tyres "parked on a sloping car park" [V], and "Roadside rescue - an HGV recovery fitter was crushed to death under the air-lifted axle of a tractor unit they were attempting to rescue from the roadside. No supplementary supports were used." [V]
- Points to HSG261 and INDG434 (not read).
Good for: the "never under a car on a jack" box, UK source.

#### NHTSA National Center for Statistics and Analysis, Research Note "Injuries Associated With Hazards Involving Motor Vehicle 'Jack Failures'" (September 1998), NTIS PB99-111775
https://ntlrepository.blob.core.windows.net/lib/21000/21300/21317/PB99111775.pdf (found via TRID record https://trid.trb.org/View/658636, report no. HS-042 858)
Read: all four pages, by my own OCR of the scanned PDF (pages 1 to 2 closely; tables 1 to 3). Uses CPSC NEISS data; this is the nearest real "CPSC jack injury report" I found.
What it establishes:
- Study period "November 1, 1994 through October 31, 1995" [V, OCR]; "data from 102 cases" [V, OCR]; "an estimated 4,822 persons nationwide were treated in hospital emergency rooms for injuries resulting from the failure of a jack while engaged in an activity involving a motor vehicle during the one-year period." [V, OCR]
- "Approximately three-fourths (74%) of the persons injured in motor vehicle jack failures were injured as a result of being struck by the vehicle as it fell from the jack." [V, OCR]
- "Another 913 (19%) persons were injured as they used the jack to lift the vehicle while attempting to change a tire." [V, OCR]
- Limits: follow-back interviews not done because "funding limitations precluded this" [V, OCR]. The data are 30 years old and from a small sample.
Good for: one dated, clearly caveated number in the jack-safety box, or leave it out.

#### British Tyre Manufacturers' Association (BTMA, trade body), "Tyre Industry Professionals": summary of BS AU 159
https://btmauk.com/advice-about-tyres/tyre-industry-professionals/
Read: full page text. No date shown. The page reproduces extracts of "BS AU 159f :1997" [V] under BSI licence and says the current issue is "suffix g" [V]. I did not read BS AU 159 itself (it is a paid BSI standard).
What it establishes:
- "Some minor damage to car or light van tyres can be safely repaired; principally punctures to the central area of the tread that are less than 6mm in diameter. Repairs to the sidewalls, other than for cosmetic damage, may not assure the structural integrity of the tyre and are not approved." [V]
- Repairable area "T" as a percentage of nominal section width: up to 155 mm, 60%; over 155 up to 200 mm, 65%; over 200 mm, 70%; maximum penetration 6 mm in all cases [V, from the table].
- The tyre must be removed from the wheel: "Remove the tyre from the wheel and thoroughly inspect, both internally and externally." [V] No repair if, among others, "Secondary effects, e.g. under-inflation/deflation damage" [V].
- Not acceptable: "Plugs applied externally to fitted tyres." [V] "Inner tubes fitted to tubeless tyres." [V]
- "Tyres repaired to BS AU 159 are able to operate at their original speed and load capabilities." [V]
- "The British Standard does not apply to T-type temporary use spare tyres." [V]
Good for: "can my puncture be repaired" section, UK.

#### TyreSafe (UK tyre safety charity, industry funded), "The Complete Guide To Punctures and Repairs"
https://www.tyresafe.org/tyre-advice/tyre-care-repair/punctures-and-puncture-repairs/
Read: full page text. No date.
What it establishes:
- "Puncture repairs to car tyres must only be carried out by a tyre specialist and in accordance with the current British Standard AU159." [V]
- "Permanent repairs can only be carried out following removal of the tyre from the wheel" [V].
- "tyre repairs can only be carried out on the central ¾ of the tyre" [V], prefaced by "To stay compliant with the law" [V]. This is simpler than, and not identical to, the BTMA table (60 to 70% of section width), and the "law" claim is not supported by anything I read (see (f)).
- Motorways: "the advice from National Highways is not to change a tyre by the side of the road, especially in the age of Smart motorways (even if you have a space saver)." [V] (I did not find this wording on the National Highways page itself; the NH page says do not attempt repairs.)
- Run-flat: "Run flat tyres are designed only to be used for 50 miles at a maximum speed of 50 mph." [V] "Driving on a punctured or deflated run-flat subjects the tyre structure to high stress" [V]; "several associations do not recommend repairing a run-flat tyre." [V]
- Kits: "Puncture repair kits are designed to be temporary measures only" [V].
Good for: puncture repair and run-flat, with care.

#### US Tire Manufacturers Association (USTMA, trade body), "Tire Repair Basics"
https://www.ustires.org/tire-care-safety/tire-repair-basics
Read: full page text. No date.
What it establishes:
- "considering repairs only if damage is limited to the tread area only and the puncture injury is no greater than 1/4 inch (6mm) in diameter." [V]
- "Tires must be removed from the rim/wheel assembly and inspected for all possible damage—including damage to the inner liner." [V] (the dash is the source's; do not reproduce it in a lesson)
- "A rubber stem, or plug, must be applied to fill the puncture injury and a patch must be applied to seal the inner liner. (A plug alone is an unacceptable repair.)" [V]
- "NEVER perform an outside-in tire repair or on-the-wheel repair." [V] "some tire manufacturers may have repair limits or restrictions for some tires, such as runflat tires and others." [V]
Good for: US half of the puncture repair section. The UK and US industry rules agree on 6 mm, tread only, off the wheel, plug plus patch.

#### RAC (motoring organisation, not official), "How to change a tyre in 10 simple steps"
https://www.rac.co.uk/drive/advice/car-maintenance/how-to-change-a-tyre/
Read: full article text (commercial offers skipped). No date visible.
What it establishes:
- "Due to the dangers posed by fast-moving traffic, you should never attempt to change a tyre on the motorway." [V] "Instead, pull onto the hard shoulder, exit everyone from the vehicle through the left-hand doors and contact your breakdown provider." [V]
- "It’s better to drive further and risk damaging the wheel rim than stop somewhere dangerous – such as on a busy road with no hard shoulder - but only drive to the nearest safe point." [V]
- Triangle: "Place your warning triangle 45 metres (147 feet) behind your vehicle (do not do this on the motorway)" [V].
- Chock: "For example, if your left-front tyre has a puncture, put a chock behind the right-rear wheel." [V] "Bricks or large rocks can do the same job if you don’t have a dedicated chock." [V]
- "Raise the car slowly until the flat tyre is 10-15cm off the ground." [V]
- **Conflict with handbooks:** "Placing a small plank of wood under the jack will help keep it stable." [V] Every handbook I read forbids objects under the jack (Toyota p. 373, Honda, Mazda, Nissan). See (b).
- "Consider giving the wheel nuts a final check for tightness." [V] "Don’t drive on a space-saver spare wheel for longer than is strictly necessary" [V].
Good for: the UK "not on a motorway" point from a second source; a named misconception.

#### Green Flag (breakdown provider, not official), "Changing a tyre"
https://www.greenflag.com/advice/maintenance/replace-tyre
Read: full article text. No date.
What it establishes:
- "If you're on the motorway, do not try to change a tyre (even if you’re on the hard shoulder or in an emergency area)." [V]
- "If the wheel won’t budge, call Green Flag: pushing and pulling it could bring the car off the jack." [V]
- "Remember if your car has a space saver spare wheel your top speed and the number of miles you can cover is limited." [V]
Good for: a third provider agreeing on "never on the motorway".

### 5. When not to attempt a roadside fix

This section draws together what the sources above say; no new sources.
- **Motorway hard shoulder or emergency area: do not repair.** Confirmed: Highway Code Rule 277, "DO NOT attempt repairs on your vehicle" [V], and National Highways, "Do not attempt repairs on your vehicle" [V]. RAC and Green Flag say never change a tyre on a motorway, including the hard shoulder and emergency areas (Green Flag explicitly). The brief's wording "even simple repairs" is fair: Rule 277 has no exception for small jobs.
- **Live lane: do not get out if you cannot do so safely; stay belted with hazards on and call 999** (Rule 277; NH; AA). In the US, AAA and the California handbook say stay in with the belt on unless the shoulder is too narrow or there is a guardrail to get behind.
- **Close traffic, slopes, ice, soft ground:** Nissan LEAF, "Never change or repair tyres if oncoming traffic is close to your vehicle. Wait for professional road assistance." [V] and never "on a slope, ice or slippery areas" [V]. Mazda: "Stopping in traffic or on the shoulder of a busy road is dangerous." [V] Highway Code Annex 6: only change the tyre "without putting yourself or others at risk - otherwise call a breakdown service." [V]
- **Darkness and poor visibility:** Rule 276 covers sidelights, reflective clothing and not blocking your own lights. No source read gives a rule "do not change a wheel in the dark" as such; the RAC lists a "Torch – for working at night" [V], which implies it is sometimes done. Lessons should frame darkness as raising the risk and favouring a call-out, not as a rule.
- **Damage beyond a kit's limits:** sidewall damage, holes over 4 mm (Honda, Mazda kits), bead unseated, rim damaged, more than one puncture, expired sealant (Honda, Mazda, Nissan). Tow instead.
- **Stopping to help others on a motorway:** National Highways: "Don't stop to assist another vehicle" [V]; call 0300 123 5000 or 999.
- **EVs:** do not flat-tow or push-start (Nissan, Tesla). Tell the recovery service the car is an EV so it sends a flatbed or all-wheels-off equipment.
- **Towing by rope:** Toyota allows emergency cable towing only "for at most 50 miles (80 km) at under 18 mph (30 km/h)" [V] with a driver in the towed car; Nissan says have a service operator tow. Neither is a roadside job on a fast road.
- **Breakdown services named as organisations only:** in the UK the AA, the RAC and Green Flag; in the US, AAA clubs; plus public services (National Highways traffic officers in England; CHP Freeway Service Patrol in parts of California). No endorsement; several are cited above only for what they publish.

### 6. Jump-starting at the roadside, and carbon monoxide in snow

#### Roadside hazards of a jump start (Part B covers the battery itself)
- Sources: Nissan LEAF manual (jump-starting-1), Toyota Corolla manual pp. 384 to 386.
- Nissan: "If done incorrectly, jump starting can lead to a 12-volt battery explosion, resulting in severe injury or death." [V] "Explosive hydrogen gas is always present in the vicinity of the 12-volt battery. Keep all sparks and flames away from the 12- volt battery." [V] "Do not attempt to jump start a frozen battery." [V] "Do not allow the two vehicles to touch." [V]
- Toyota p. 386: "Do not allow the + and - clamps of the jumper cables to come into contact with each other." [V] "Do not smoke, use matches, cigarette lighters or allow open flame near the battery." [V] "Do not lean over the battery." [V]
- Roadside point for drafters: a jump start needs two cars nose to nose with bonnets up and people standing between or beside them. None of the sources I read describes doing this on a hard shoulder, and Rule 277 forbids repairs on motorways. On other roads the same rules as a wheel change apply (off the road, hazards, triangle where allowed, nobody standing between the cars and traffic). This is my synthesis; no single source says it in one place.
- EV points: a LEAF "cannot be used as a booster vehicle" [V]; jump-starting an EV's 12-volt battery "does not charge the Li-ion battery" [V].

#### Carbon monoxide when stuck in snow (vehicle side only)
- **NHTSA, "Winter Weather Driving Tips"** https://www.nhtsa.gov/winter-driving-tips, read in full via Internet Archive capture 20260812080428. "If you are stopped or stalled in wintry weather, stay focused on yourself and your passengers, your car, and your surroundings." [V] "Stay with your car and don’t overexert yourself." [V] "Let your car be seen. Put bright markers on the antenna or windows and keep the interior dome light on." [V] "Be mindful of carbon monoxide poisoning. Make sure your exhaust pipe is clear of any snow and run your car only sporadically — just long enough to stay warm. Don’t run your car for long periods of time with the windows up or in an enclosed space." [V] (The em dash is NHTSA's; lessons must not reproduce it.) Kit list includes "jumper cables, flashlight, and warning devices (flares and emergency markers);" [V].
- **CDC, "Clear Snow from Tailpipes" (PSA toolkit)** https://www.cdc.gov/natural-disasters/psa-toolkit/clear-snow-from-tailpipes.html, read via capture 20260725201242. "Before you drive after a storm, check to be sure that your vehicle's tailpipe is clear of snow. If the tailpipe is blocked, carbon monoxide, an odorless, colorless, and deadly gas produced by your engine can build up quickly inside your vehicle, poisoning anyone inside." [V]
- **CDC MMWR, "Carbon Monoxide Poisonings Associated with Snow-Obstructed Vehicle Exhaust Systems -- Philadelphia and New York City, January 1996"** https://www.cdc.gov/mmwr/preview/mmwrhtml/00039929.htm, read in full via capture 20260725225621. In New York City, "a total of 21 persons were admitted directly to the Jacobi Medical Center or transferred from other hospitals for hyperbaric oxygen therapy because of CO poisoning" [V] during 8 to 9 January 1996; "The cause of the CO poisonings was directly related to exposure to automobile exhaust from vehicle exhaust systems blocked with snow." [V] Mechanism: "CO can seep into the cabin of a vehicle through leaks or cracks in the floorboard if the exhaust pipe is obstructed." [V] Advice: "the public should be reminded to inspect vehicles to ensure that exhaust pipes are cleared of snow before engines are started." [V]
- **Toyota p. 46** (above): do not run the engine where snow is building up around the car.
- **UK:** NHS "Carbon monoxide poisoning" (https://www.nhs.uk/conditions/carbon-monoxide-poisoning/, read in full, "Page last reviewed: 16 December 2025" [V]) mentions only "turning on vehicle or lawn mower engines in an enclosed space (such as a garage)" [V]. I found no UK government page on snow-blocked exhausts in a stranded car; see (f).
Good for: seasonal lesson and the breakdown-in-winter box. Symptoms and treatment belong to First Aid.

### (a) What this part says the field considers essential

1. Get off the road if you can; on a motorway or fast road, leave at the next exit or services, and if you cannot, go left into an emergency area, lay-by or hard shoulder (Highway Code Rules 275 to 277; National Highways).
2. Hazard warning lights on whenever you are stopped and causing an obstruction; sidelights at night or in poor visibility (Rules 116, 276, 277).
3. People, not the car, are what matter: get everyone out on the side away from traffic, behind a barrier if there is one, and never between the car and oncoming traffic. Do not go back to the car (UK). The single strongest reason is that stopped cars get hit and push into the people beside them (Rule 275; AAA Foundation's 2,100 roadside deaths outside disabled vehicles, 2019 to 2023, US).
4. The exception: if you are stuck in a live lane or cannot get out safely, stay in with seat belts on and hazards on and call 999 (UK) or 911 (US) at once (Rule 277; NH; AA; AAA).
5. Warning triangle 45 metres behind on ordinary UK roads, same side, with care; never on a motorway (Rule 276, Rule 277, RAC). In the US there is no federal rule for private cars; the triangle and flare rules in 49 CFR 392.22 are for commercial vehicles.
6. Tell the operator where you are: marker posts and driver location signs, a phone mapping app, or the car's eCall/SOS button (Rule 277). In the US, the street address or the nearest landmark (911.gov).
7. Changing a wheel, if and only if it is safe: firm level ground away from traffic, parking brake, P or gear, engine off, hazards, everyone out, chock the diagonally opposite wheel, loosen nuts about one turn before lifting, use only the maker's jacking point and jack, nothing under the jack, never any part of your body under a car on a jack, raise only enough, tighten in a star pattern, re-torque with a torque wrench as soon as possible (Toyota, Honda, Mazda, Nissan; HSE).
8. Compact spares and sealant kits are temporary: 50 mph (80 km/h) in all four handbooks read, and get the tyre repaired or replaced at once.
9. A proper puncture repair is done off the wheel, in the central tread only, no bigger than 6 mm, plug plus patch (BTMA summary of BS AU 159; USTMA).
10. EVs go on a flatbed or with all driven wheels off the ground; they cannot be push-started or flat-towed (Nissan, Tesla).

### (b) Common misconceptions (each named by a source)

- **"The hard shoulder is a safe place."** National Highways fourth year report: "The hard shoulder is perceived to be a place of safety but, in reality, it does not provide a completely safe place to stop." [V] Highway Code Rule 275 says hard shoulders "provide less protection than other places of relative safety" [V].
- **"Put a plank or block under the jack for stability."** The RAC recommends a plank [V]; all four handbooks read forbid it: Toyota "do not put an object on or under the jack" [V] (p. 373), Honda "Do not put anything on top of or underneath the jack" [V], Mazda "Never place objects under the jack" [V], Nissan "Never use blocks on or under the jack." [V] Lessons should follow the handbooks and say so.
- **"Stay in the car on the hard shoulder where it is warm."** Rule 277: "DO NOT return to your vehicle even if it’s raining, cold or dark" [V].
- **"Put it in neutral to help the tow driver."** AAA Club Alliance names this as "A common mistake" [V].
- **"A plug from outside is a repair."** USTMA: "A plug alone is an unacceptable repair." [V] BTMA: "Plugs applied externally to fitted tyres" [V] are not acceptable.
- **"A space saver is just another wheel."** Toyota: with the compact spare fitted, ABS, VSC and other systems "may not operate correctly" [V]; all makers cap speed at 50 mph.
- **"You can push-start or tow-start an EV."** Nissan: "An electric vehicle cannot be push-started or tow-started." [V]
- **"Idling in the snow to keep warm is fine."** CDC MMWR 1996 and NHTSA: only with the exhaust clear, and only sporadically.
- **"Stop and help another stranded motorist on the motorway."** National Highways: "Don't stop to assist another vehicle" [V].

### (c) Contested questions

1. **Are all-lane-running smart motorways as safe as motorways with a hard shoulder?** Classification: **contested empirical**, with a **value** element (how to weigh fewer moving-traffic casualties against more, and more frightening, stopped-vehicle incidents, and how much weight public confidence should carry).
   - Official data statement (National Highways, fourth year report, December 2024; and the stocktake page): all three types of smart motorway are safer than conventional motorways "in terms of deaths or serious injuries" [V], and "no one type of motorway, smart or conventional, is ranked best against every safety metric." [V]
   - The same report's stopped-vehicle numbers: stopped-vehicle PIC rate 0.29 on ALR against 0.19 on conventional and controlled motorways, a difference it says is statistically significant.
   - Named critic: Edmund King, AA president: "stopped vehicle incidents are more frequent on All Lane Running (ALR) ‘smart’ motorways compared to motorways with hard shoulders" [V]; calls for the hard shoulder to be "reinstated" [V]. The AA also cites controlled motorways' lower KSI rate (1.31 against 1.43), figures I did not check against the third year report.
   - Regulator framing: the 2020 stocktake conclusion, quoted by ORR, "in most ways, smart motorways are as safe as, or safer than, the conventional ones. But not in every way." [V]
   - Policy status (settled facts, not contested): new ALR schemes paused January 2022; all new smart motorways cancelled April 2023 citing "lack of public confidence" and "cost pressures" [V]; stocktake actions complete; SVD on every ALR motorway; over 150 extra emergency areas finished spring 2025.
   - Drafting: present both the official finding and the critic's point, attribute each, and say that the government's own reason for cancelling was public confidence and cost, not a finding that they were less safe.
2. **Stay in the car or get out?** Classification: **established**, but the answer depends on the setting, and UK and US sources frame it differently. UK: get out on the side away from traffic and behind the barrier, unless you cannot, then stay in belted. US (AAA, California DMV): default to staying in belted on the shoulder, get out and away if there is a guardrail or no room. Both agree on the live-lane case. Lessons should teach the decision, not one slogan.
3. **Repairing run-flat tyres.** Classification: **contested practice** (among industry bodies and makers). TyreSafe: "several associations do not recommend repairing a run-flat tyre" [V]; USTMA: makers "may have repair limits or restrictions" [V]. Not a question for owners to settle at the roadside.

### (d) UK vs US differences

- **Emergency number:** 999 (UK; Rules 277, 279, 283) against 911 (US). National Highways non-emergency line 0300 123 5000 (England only); California uses 511 and call boxes.
- **Location:** UK marker posts and driver location signs are named in Rule 277; US guidance asks for address, cross street or landmark (911.gov). eCall/SOS buttons appear in the UK rules.
- **Warning triangles:** UK Highway Code advises 45 m behind on ordinary roads, never on motorways. US has no federal requirement for private cars; FMCSA 392.22 (10 feet, 100 feet, 100 feet; 100 and 200 feet on divided roads; within 10 minutes) is for commercial vehicles only. Flares (fusees) are common in US kits (NHTSA, AAA) and rare in UK advice.
- **Stay in or get out:** UK default is out and behind the barrier; US default in AAA and California DMV advice is in, belted, unless there is a guardrail or no room.
- **Move Over laws:** every US state has one for emergency vehicles, some (19 plus DC per NHTSA; California since 2026) for any vehicle with hazards. The UK has no general statutory equivalent in what I read; Rule 281 asks drivers to slow and be prepared to change lanes near incidents, and Rule 258 makes Red X lanes legally closed.
- **Smart motorways and emergency areas** are a UK (England) feature with no US equivalent in the sources read.
- **Units and terms:** tyre/tire, bonnet/hood, boot/trunk, hard shoulder/shoulder, space saver/compact spare or T-type, 80 km/h/50 mph; torque in N·m and lbf·ft.
- **Puncture repair standard:** BS AU 159 (UK, via BTMA) and USTMA procedures (US) agree in substance.

### (e) Safety-critical notes for drafters

- Never tell a learner to change a wheel, do a repair, or place a triangle on a motorway, hard shoulder or emergency area (Rule 277; NH).
- Never suggest putting anything under the jack, and never suggest any part of the body goes under a car on the car's own jack (all four handbooks; HSE). If someone must get under a car it is on axle stands on firm level ground, which is Home Repair or garage territory, not roadside.
- Loosen nuts before lifting; do not remove them until the wheel is off the ground; chock the diagonally opposite wheel.
- Use the torque figure and the re-torque instruction from the car's own handbook; figures differ (Toyota 103 N·m, Honda and Nissan 108 N·m, Mazda 108 to 147 N·m). Do not print one number as universal.
- Space saver and sealant: 50 mph (80 km/h) in every handbook read, but say "check your handbook", since this is a per-car figure. Do not use chains on a compact spare.
- Sealant kits: the car's engine may run to power the compressor; do it outdoors only (Honda: CO). Do not stand beside a tyre being inflated (Nissan).
- Live lane: stay in, belted, hazards on, 999/911. Do not tell learners to push the car or to walk along a motorway.
- Snow: clear the exhaust before starting, run the engine only in short spells, window open a little is not stated by any source I read (NHTSA says do not run it "with the windows up" [V]); keep wording to what sources say.
- EV: do not flat-tow or push; tell the recovery operator it is an EV; assume high-voltage parts are live after a crash (Tesla).
- Dangerous goods vehicles: keep well away, no phone near a flammable load (Rule 285).
- Keep casualty care out: point to the First Aid course for injured people, and keep Rule 283's "DO NOT move injured people" consistent.
- The Highway Code's MUST rules carry legal force; its "should" rules are advice. Do not present Rule 276's 45 metres or hazard use when stopped as legal duties.

### (f) Gates: claims that need a primary read before a lesson states them

- **Whether the UK requires cars to carry a warning triangle.** Not read. Do not state either way until a primary (legislation or GOV.UK) is read. Many European countries do require one; not read either.
- **The 2026 amendment to 49 CFR 392.22 (91 FR 7870, 19 February 2026).** I read the current text but not the Federal Register notice. Do not describe what changed.
- **NHTSA's "19 states and Washington, DC" count** is undated and may be out of date given California's 2026 change. Needs a dated source (GHSA or NCSL) before any count is given.
- **"To stay compliant with the law" (TyreSafe) on BS AU 159 repairs.** No statute read. Do not say repairs outside BS AU 159 are illegal; say the industry standard requires it. The legal link (if any, for example through part-worn tyre regulations) needs legislation.gov.uk.
- **BS AU 159 current suffix "g"** and its exact repairable-area figures: read only via the BTMA's summary of the 1997 "f" issue. Say "the British Standard BS AU 159, as summarised by the BTMA".
- **Run-flat limits (50 miles at 50 mph, TyreSafe).** Makers differ; no run-flat handbook read. Say "check the handbook".
- **HSG261 and INDG434** named by HSE; not read.
- **ORR SVD letter (21 July 2023) and ORR QA reports**: only the listing and the AA's quotation read. Quote the ORR only via the AA or read the letter.
- **AA's KSI figures 1.31 and 1.43** for controlled vs ALR: from the AA, not checked in the third year report.
- **Text-to-911 availability** (FCC): snippet only.
- **UK official advice on snow-blocked exhausts in a stranded car:** none found. Use US official sources (NHTSA, CDC) and the Toyota handbook, or find a UK source.
- **The AAA Foundation's "2,100" figure** rests on NHTSA data I did not read; attribute it to the AAA Foundation.
- **Tesla capture is from October 2024.** Recheck the live manual before quoting speeds or distances.
- **Ford owner manual** (Fiesta, Focus): not readable (403). Do not cite Ford.

### (g) Not read

*Each part's own "Not read" list and UNREAD line below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*


- Ford online owner manuals (Focus, Fiesta, Transit): blocked, live and archived.
- VW Golf and BMW handbooks: not attempted after Ford failed; BMW run-flat figures seen only in snippets.
- BS AU 159 itself (BSI, paid); HSE HSG261 and INDG434; ORR stopped vehicle detection letter of 21 July 2023; ORR quality assurance reports; the smart motorway stocktake third year report; DfT 2020 Stocktake and Action Plan; House of Commons Transport Committee 2021 to 22 report.
- National Highways "The safety of smart motorways" blog (403).
- FCC Text to 911 page; NIOSH "Be an Ace with Jacks" tip sheet (403); CPSC NEISS data directly.
- AAA national newsroom and other AAA club pages; AAA Foundation report "Roadside Assistance Providers Fatally Struck by Vehicles" (Tefft et al. 2024).
- GHSA and NCSL Move Over summaries; other states' statutes.
- Federal Register notice 91 FR 7870.
- GEM Motoring Assist winter driving leaflet (hosted by an NHS trust); UKHSA carbon monoxide guidance.
- RAC tyre repair page; AA breakdown and tyre pages.

Part's own list (superseded): Ford Focus owner manual; Ford Fiesta owner manual; VW Golf owner's manual; BMW owner's handbook; BS AU 159 itself; HSG261; INDG434; ORR stopped vehicle detection letter; ORR quality assurance of smart motorways; smart motorway stocktake third year progress report; Smart Motorway Safety Evidence Stocktake and Action Plan 2020; Transport Committee Rollout and safety of smart motorways; The safety of smart motorways blog; FCC Text to 911; Be an Ace with Jacks; NEISS data; Roadside Assistance Providers Fatally Struck by Vehicles; GHSA Move Over; NCSL Move Over; 91 FR 7870; GEM Motoring Assist winter driving tips; UKHSA carbon monoxide guidance; RAC How to repair a tyre; AA breakdown advice

---

## Gate closures, lesson 03 (2026-09-26)

Read by the lesson 3 drafter on 26 September 2026 with curl (a browser User-Agent, no personal
data) and a small HTML stripper, the GOV.UK content API, and pdftotext plus a visual read of the
rendered PDF page. **[V]** as above. Nothing here clears an entry on the `unread:` line: EPA's
guidance letters IACD-2025-10 and IACD-2026-05 were **not** read and stay on it.

**G-H11 (US DEF inducement for light-duty vehicles): partly closed, from the fact sheet, not the
letters.**

- US EPA, "Fact Sheet: Diesel Exhaust Fluid (DEF) Guidance", EPA-420-F-25-011, August 2025,
  https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P101HKDJ.pdf. **Read: both pages in full, and page 2's
  tables read visually from the rendered page**, which settles Part A's caution about garbled
  extraction. The table headed "HD PICKUPS AND LD CARS" [V] gives, for "HD Pickups and Light Duty
  Cars" [V]: Initial "n/a", Secondary "n/a", Final timing "4,200 miles / 80 hours" [V] and level
  "45 mph" [V]; the red "Before" column gives timing "4 hours" and level "5 mph" [V]. So the
  guidance's final step for this class is a 45 mph limit after 4,200 miles or 80 hours, against the
  earlier 5 mph within four hours. It is guidance: the first bullet reads "EPA is issuing guidance
  urging engine and equipment manufacturers to revise their DEF system software in existing
  vehicles and equipment to reduce derates." [V] Also: "However, these sensors can fail,
  triggering an automatic derate." [V] The MY2027 sentence Part A records ("Starting with model
  year (MY) 2027 ...") is on this fact sheet, not on the web page.
- US EPA, "Diesel Exhaust Fluid", https://www.epa.gov/regulations-emissions-vehicles-and-engines/diesel-exhaust-fluid,
  **re-read in full**; still "Last updated on July 9, 2026" [V]. New lines: "By law, EPA cannot
  mandate field fixes for in-use vehicles and nonroad equipment, which is why the Agency is
  issuing voluntary guidance to manufacturers on system modifications to reduce derates." [V] "In
  2022, EPA finalized a revised inducement strategy, starting with model year 2027 heavy-duty
  on-highway vehicles and engines." [V] The page also lists, as a link title only (not read), a
  "Proposed Rule: Amendments and Nonconformance Penalties for Model Year 2027 and Later Heavy-Duty
  Highway Engines and Amendments to Inducement Provisions for SCR-Equipped Diesel Engines" [V]. The
  page is addressed to "farmers, truckers, and other diesel vehicle operators" [V]. Partisan
  framing on the page ("The Trump EPA is taking this action") is not used.

**G-L16 (tampering enforcement): not closed.** The statute only, re-read:

- 42 U.S.C. § 7522, https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title42-section7522&num=0&edition=prelim,
  "Text contains those laws in effect on September 25, 2026" [V]. **Read: § 7522(a) in full.**
  Opening words: "The following acts and the causing thereof are prohibited-" [V] (the site's
  hyphen). (a)(3)(A) and (B) as Part D records. The paragraph closing (a) adds: "Nothing in
  paragraph (3) shall be construed to require the use of manufacturer parts in maintaining or
  repairing any motor vehicle or motor vehicle engine." [V] and no prohibited act where "the action
  is for the purpose of repair or replacement of the device or element" [V] and "such action
  thereafter results in the proper functioning of the device or element" [V].

**Re-read live for lesson 3 (decision 9: every rule re-read, whole section once):**

- The Road Vehicles (Construction and Use) Regulations 1986 (SI 1986/1078), **regulation 61A**, as
  amended, https://www.legislation.gov.uk/uksi/1986/1078/regulation/61A. **Read: the whole
  regulation and its table on the live page.** Extent shown "E+W+S". "There are currently no known
  outstanding effects" [V]. 61A(1): "This regulation shall apply to motor vehicles first used on or
  after 1st January 2001." [V] 61A(3): "no person shall use, or cause or permit to be used, on a road
  a motor vehicle if the motor vehicle does not comply with such limit values as may apply to it"
  [V] under the listed Directives, "unless the following conditions are satisfied" [V]: (a) "the
  failure to meet the limit values does not result from an alteration to the propulsion unit or
  exhaust system of the motor vehicle" [V]; (b) that normal periodic servicing would not bring it
  within the limits; (c) that the failure does not result from an emission-control device being
  "other than in good and efficient working order" [V]. 61A(4): where a car with such a device
  fails the limit values and conditions (a) and (b) are met, "nothing in paragraph (3) shall prevent
  the motor vehicle being driven to a place where the device is to be repaired or replaced." [V]
  (the site's amendment markers removed). 61A(8)(c): "“limit values” means the permitted amounts
  of gaseous and particulate pollutants and smoke and evaporative emissions" [V].
- DVSA and DfT, "Diesel particulate filters" (the HTML publication inside the guidance note),
  https://www.gov.uk/government/publications/diesel-particulate-filters-guidance-note/diesel-particulate-filters,
  **re-read in full** through the content API; still dated 4 December 2013. The offence paragraph
  in full: "It is an offence under the Road vehicles (construction and use) regulations
  (Regulation 61a(3)) to use a vehicle which has been modified in such a way that it no longer
  complies with the air pollutant emissions standards it was designed to meet. Removal of a DPF
  will almost invariably contravene these requirements, making the vehicle illegal for road use."
  [V] Also: "It does this by trapping solid particles while letting gaseous components escape."
  [V]; "This has led to some diesel vehicle owners removing their DPFs." [V]; "A vehicle might still
  pass the MOT visible smoke emissions test, which is primarily intended to identify vehicles that
  are in a very poor state of repair" [V]. The landing page's summary: "their removal is almost
  always illegal." [V]
- DVSA, MOT inspection manual, section 8 "Nuisance",
  https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles/8-nuisance,
  **re-read**: section GOV.UK updated 24 June 2025; manual 1 June 2026. 8.2.2.1 adds, not recorded
  in Part A: "If a diesel particulate filter has clearly been cut open and rewelded, you should
  reject it unless the vehicle presenter can show evidence that there was a valid reason to cut it
  open, such as for filter cleaning." [V] The defects "Evidence that the diesel particulate filter
  has been tampered with" and "Exhaust on a vehicle fitted with a diesel particulate filter emits
  visible smoke of any colour" are both "Major" [V], as Part C records.

**The motoring organisations' pages, re-read in full (G-N1: every figure re-read):**

- RAC, "Diesel particulate filters" (URL as Part A), `dateModified` 2026-08-03 as before. Every Part A
  quotation still stands. New lines from the article body (the FAQ block is still not used):
  "If your warning light continues to stay on, turns red, or additional DPF lights come on, do not
  leave it too long before getting it checked out." [V] "There is no need to call out the RAC if
  your DPF warning light is glowing." [V] "if it fails to extinguish, take your car to a garage."
  [V] "On some models the engine may not restart after a number of miles" [V]. Active
  regeneration's signs, as a list: "Engine note change", "Cooling fans running", "A slight increase
  in fuel consumption", "Increased idle speed", "Deactivation of automatic Stop/Start", "A hot,
  acrid smell from the exhaust" [V]. "This is why car makers often go as far as recommending
  city-bound or short-hop drivers choose a petrol or electric car instead of diesel." [V] (the RAC's
  claim about makers; no maker's statement read). "Some garages can clean blocked DPFs, in a
  process called forced regeneration." [V]
- The AA, "Diesel particulate filters" (URL as Part A): **dated "updated 7 August 2017"** [V] (Part A
  extracted no date). Every Part A quotation still stands. New lines: "Follow any advice in your
  vehicle handbook." [V] "If there's a fault with the DPF or the differential pressure sensor, which
  lets your car know the DPF's status, the engine management light might also come on." [V] "You'll
  have to get a dealer to do a manual or 'forced' filter regeneration." [V] The page's "What prevents
  normal regeneration?" list includes "Frequent short journeys where the engine doesn't get hot",
  "The wrong type of engine oil", "Going over the recommended service interval" [V] and the
  low-fuel line. "a DPF in a car used correctly should be good for well over 100,000 miles." [V]
  During active regeneration "you may notice" [V] cooling fans, faster idle, Stop/Start not
  working, more fuel used, "A hot, acrid smell from the exhaust." [V]
- The AA, "What is AdBlue?" (URL as Part A): **"Published: 05 January 2017 | Updated: 11 July
  2024"** [V]. **A correction to Part A's entry.** The line Part A records as the "Wrong-tank
  action", "Don't turn on the ignition or start the engine and call us for help.", sits under the
  heading "What happens if I put diesel in the AdBlue tank?" [V], so it is the AA's advice for
  **diesel in the AdBlue tank**, not AdBlue in the fuel tank. For **AdBlue in the fuel tank** the
  AA says: "Putting it directly into your fuel tank could cause expensive damage to your fuel tank,
  pump and injection system. If you start the engine it's likely to be an expensive write-off, so
  don't touch the ignition." [V] and "You'll need to get the tank drained and the contents disposed
  of safely before you can refill it." [V] OUTLINE's lesson 3 entry carries Part A's attribution;
  the lesson uses the corrected one. Other new lines: "You can refill the Adblue tank yourself."
  [V]; "Follow any instructions given in your handbook or on the pack" [V]; "AdBlue is non-toxic
  but can cause irritation to your skin and eyes and may damage the paintwork" [V]; "It's not a
  major safety issue, but if you don't top up, you'll eventually run out of AdBlue and you won't be
  able to start the car." [V]; "usually accompanied by a milage countdown" [V] (sic); "But it could
  be as high as a litre every 350 miles." [V]; "The solution should always be 32.5% urea and 67.5%
  de-ionised water." [V]; "If you run out of AdBlue while you're driving, then the engine's power and
  performance will be reduced to limit its emissions." [V]; the filler is "(usually) blue" [V]. The
  "uric acid crystals" line is still on the page and is still not repeated.
- AFDC, "How Do Diesel Vehicles Work?": re-read; the Part A quotations stand unchanged.

## Gate closures, lesson 02 (2026-09-26)

*Read by the lesson 02 drafter on 26 September 2026, curl with a browser user agent plus a small HTML
stripper, and pdftotext for the Toyota PDF. Quotations marked [V] were copied from that extracted
text. Gates G-H12 (what oil does inside an engine) and G-H3 (belt against chain; interference
engines) were **not** closed: nothing read explains either, and lesson 2 writes both fallbacks.*

- **US DOE, Vehicle Technologies Office, "Internal Combustion Engine Basics"**
  (https://www.energy.gov/eere/vehicles/articles/internal-combustion-engine-basics). Re-read in full;
  `dateModified` 2023-06-22 unchanged; the Part A quotations stand. Also: "Combustion, also known as
  burning, is the basic chemical process of releasing energy from a fuel and air mixture." [V]; "In
  an internal combustion engine (ICE), the ignition and combustion of the fuel occurs within the
  engine itself." [V]; "The engine then partially converts the energy from the combustion to work."
  [V]; "The engine consists of a fixed cylinder and a moving piston. The expanding combustion gases
  push the piston, which in turn rotates the crankshaft. Ultimately, through a system of gears in the
  powertrain, this motion drives the vehicle's wheels." [V, the passage whole]; "The expansion of the
  combustion gases pushes the piston during the power stroke." [V]; "There are two kinds of internal
  combustion engines currently in production: the spark ignition gasoline engine and the compression
  ignition diesel engine." [V]. The page names the exhaust stroke
  and does not describe it, and it does not describe the piston's travel in any stroke.
- **AFDC, "How Do Gasoline Cars Work?"** Re-read; Part A quotations stand. Also, from the intro: "In a
  spark-ignited system, the fuel is injected into the combustion chamber and combined with air." [V];
  and the glossary: "Exhaust system: The exhaust system channels the exhaust gases from the engine out
  through the tailpipe." [V]; "Fuel injection system: This system introduces fuel into the engine's
  combustion chambers for ignition." [V]
- **AFDC, "How Do Diesel Vehicles Work?"** Re-read; Part A's sentence is in the page's introduction.
  The glossary words it differently: "Internal combustion engine (compression-ignited): In this
  configuration, fuel is injected into the combustion chamber and ignited by the high temperature
  achieved when a gas is greatly compressed." [V]
- **fueleconomy.gov, "Where the Energy Goes: Gasoline Vehicles"** (https://www.fueleconomy.gov/feg/atv.shtml).
  Re-read in full, with the diagrams' alt and title text. This closes the "rest leaves as heat" step
  the OUTLINE gives lesson 2, which Part A recorded only as a gloss. The opening passage whole: "Only
  about 12%–30% of the energy from the fuel you put in a conventional vehicle is used to move it down
  the road, depending on the drive cycle. The rest of the energy is lost to engine and driveline
  inefficiencies or used to power accessories." [V]; "In gasoline-powered
  vehicles, most of the fuel's energy is lost in the engine, primarily as heat. Smaller amounts of
  energy are lost through engine friction, pumping air into and out of the engine, and combustion
  inefficiency." [V]; "Energy is lost in the transmission and other parts of the driveline." [V];
  "The water pump, fuel pump, oil pump, ignition system, and engine control system use energy
  generated by the engine." [V] (on this page, beside the parasitic-loss label); "Any time you use
  your brakes in a conventional vehicle, energy initially used to overcome inertia and propel the
  vehicle is lost as heat through friction at the brakes." [V]; "Note: Energy use and losses vary
  from vehicle to vehicle. These estimates are provided to illustrate the general differences in
  energy flow in different vehicle types during different drive cycles." [V]. The diagrams' labels
  (alt text, flattened): **city** (EPA FTP-75), "Engine Losses: 71% - 75%", "Energy to Wheels: 14% -
  20%", "Drivetrain Losses: 4% to 5%", "Parasitic Losses: 5% - 7%"; **highway** (EPA HWFET, "average
  speed of about 48 mph and no intermediate stops" [V]), "Engine Losses: 64% - 69%", "Energy to
  Wheels: 22% - 30%", "Drivetrain Losses: 3% to 5%", "Parasitic Losses: 3% - 4%"; and on both, "Auxiliary Electrical Losses: 0% - 2%" [V] (added at
  Stage 4, lesson 02: this entry first left that row out), with "Idle Losses: 0%" on both, and the
  city image's alt text adding "In this figure, idle losses are accounted for as part of the engine
  and parasitic losses." [V]. The combined
  diagram gives energy to wheels as "18% to 25%" in one label and "16% - 25%" in another, so the
  combined figures are not used.
- **fueleconomy.gov, "Diesel Vehicles"**. Re-read; Part A quotations stand. The sentence continues:
  "Diesel engines are more fuel-efficient and have more low-end torque than similar-sized gasoline
  engines" [V].
- **fueleconomy.gov, "Advanced Transmission Technologies"**. Re-read in full with its table. "Adding
  gears allows your engine to operate at a more efficient speed more often." [V]; "Most conventional
  transmissions use a fixed number of metal gears to control the ratio between engine speed and wheel
  speed." [V]; table, "compared to a 4-speed automatic transmission" [V]: 6 gears 2%, 7 gears 2%–3%, 8
  gears 3%–4% (cells, flattened; source National Academy of Sciences 2015). DCT paragraph in full:
  "Dual clutch transmissions (DCTs) combine the efficiency of manual transmissions with the
  convenience of automatics. Automatic transmissions are less efficient than manuals due to parasitic
  losses. DCTs operate much like manual transmissions, except that they use two clutches and
  automatic shifting. They are generally not quite as smooth as regular automatics, but
  manufacturers are making strides to improve this." [V]. **The same site's myths page says
  automatics now often match or beat manuals**; a lesson reports both, the myths page as the current
  comparison of one model's two versions.
- **fueleconomy.gov, "Fuel Economy Myths and Misconceptions"**. Re-read; the manual-versus-automatic
  answer in full: "Advances in automatic transmissions have improved their efficiency to the point
  that the automatic version of a vehicle often gets the same or better fuel economy than the version
  with a manual transmission." [V] It continues: "For vehicles offered in both automatic and manual transmissions,
  consumers can easily compare fuel economy using our Find a Car feature." [V]
- **fueleconomy.gov, "Keeping Your Vehicle in Shape"**, oil paragraph. Re-read: "Also, look for
  motor oil that says "Energy Conserving" on the API performance symbol to be sure it contains
  friction-reducing additives." [V]. The nearest any source read comes to what oil does; it is not
  a mechanism, and G-H12 stays open.
- **RAC, "What is a cambelt and how do you replace it?"** Re-read in full; Part A quotations stand.
  Also: "The camshaft controls the opening and closing of the engine's valves, controlling the
  air-fuel mixture that enters and is expelled from the engine." [V]; "A cambelt controls the timing
  of a vehicle's internal combustion engines between when the valves to the engine cylinders open and
  close. This controls the flow of air in and out of the engine." [V]; "A damaged cambelt can lead to
  further, serious damage to the rest of the vehicle, resulting in costly repairs and potential engine
  failure." [V]; "If it fails it could result in catastrophic damage to the engine." [V]; the page
  lists five signs (misfire, poor idling, unusual noises, difficulty starting, a cracked or frayed
  belt), introduced by "This is why it is important to look out for the 5 signs of cambelt failure."
  [V] and followed by "If you're experiencing any of these symptoms, it's important to have your
  vehicle checked as soon as possible by a qualified mechanic." [V], and only then "Many cambelts show
  no obvious symptoms before failure." [V] (corrected at Stage 4, lesson 02: this entry first said the
  list came "directly before" that line); "Regardless of
  the cost, it's important to have a cambelt change done at the manufacturer's recommended interval."
  [V]; "However, if you ask your local mechanic to check the cambelt at the annual service then they
  should inform you of any problems." [V]. Its naming sentence contains a spaced en dash and is
  paraphrased, not quoted. Its price table (sourced to a comparison site) and its "Stop the car
  immediately" line are not used. Its "Cam chains" section was not relied on (G-H3).
- **DENSO Europe, "Why might the glow plug warning light come on?"** Re-read; Part A quotations stand.
  Also: "Although the glow plug warning light is designed to illuminate briefly before starting the
  engine, it should not be ignored if it remains on while the engine is running." [V]; "the glow plug
  warning light will come on as the vehicle's ignition is turned on, because this warning is to inform
  the driver that the glow plugs are going through their heating cycle in order for them to be hot
  enough to make starting the engine quick and efficient." [V]
- **Toyota Motor Sales USA, 2023 Corolla Owner's Manual (OM02568U)**, pp. 305 to 307, "Do-it-yourself
  maintenance" (oil and coolant), read in full in pdftotext -layout. p. 305: "A certain amount of
  engine oil will be consumed while driving." [V]; p. 306: "To prevent serious engine damage" [V]
  (a NOTICE heading) above "Check the oil level on a regular basis." [V]; "Avoid overfilling, or the
  engine could be damaged." [V]; p. 307: "The cooling system may be under pressure and may spray hot
  coolant if the cap is removed, causing serious injuries, such as burns." [V]; "Coolant is neither
  plain water nor straight antifreeze. The correct mixture of water and antifreeze must be used to
  provide proper lubrication, corrosion protection and cooling." [V]; if the level drops soon after
  topping up, "Visually check the radiator, hoses, engine coolant reservoir caps, drain cock and water
  pump." [V]. These are Toyota's, for that car, and say nothing of how coolant carries heat.

## Gate closures, lesson 03 (2026-09-26), continued

Further [V] lines from the same re-reads of 26 September 2026 (the earlier lesson 03 section above
has the read levels), recorded because lesson 3 quotes them:

- RAC DPF page, article body: the light is "a piped box that has dots in the middle" [V], varying by
  maker; "Problems can occur, however, if the journey is too short, as the regeneration process may
  not complete fully." [V]; "sometimes even puts the car into a restricted 'limp-home mode'" [V];
  "removing a DPF can also invalidate your car insurance policy" [V].
- AA DPF page: "our patrols are often called to cars with a blocked DPF." [V]; passive regeneration
  happens "when the exhaust temperature's high enough, on motorways or fast A-roads." [V]; "The
  collected soot is burnt off, leaving only a tiny ash residue." [V]; "If you ignore a DPF warning
  light and keep driving in a relatively slow, stop/start pattern, soot will build up" [V]; "Driving
  at speed alone won't be enough." [V]; "The wrong type of engine oil – check your handbook" [V];
  "without additive the DPF will quickly become blocked." [V]; "Removing a DPF could also invalidate
  any insurance cover because it makes the vehicle illegal for road use." [V]; "If you're buying a new
  car and will use it mainly for town-based, stop/start driving you'd be wise to avoid diesels fitted
  with a particulate filter" [V]; "It's sometimes suggested that you can get a DPF cut out of the
  exhaust and the engine management software reprogrammed rather than pay to get it repaired." [V]
- AA AdBlue page: "If you start the engine it's likely to be an expensive write-off, so don't touch
  the ignition." (as above); "You'll usually see a text warning on the dashboard when there's around
  1500 miles' worth of AdBlue left." [V]; "AdBlue crystalises on soft surfaces such as upholstery and
  carpets." [V] (sic).

## Gate closures, lesson 01 (2026-09-26)

*Read on 26 September 2026 by the lesson 1 drafter, with curl and a browser User-Agent (no personal
data in any header), text extracted with a small HTML stripper, the GOV.UK content API, the eCFR
versioner API or pdftotext. Quotations marked [V] were copied from that extracted text.*

**G-N1 (lesson 1: the callout's numbers).** Re-read today:
- **999**: The Highway Code, "Breakdowns and incidents (275 to 287)", GOV.UK content API (page
  updated 14 September 2021). The live-lane step: "call 999 immediately and ask for the police" [V],
  in Rules 277, 278 and 279's boxes as read. Great Britain.
- **911**: 911.gov "Calling 911", Internet Archive capture 20260907153825 (live site 403 to curl):
  "An emergency is any situation that requires immediate assistance from the police, fire department
  or ambulance." [V] US.
- 112 not re-read; not printed.

**G-N3 (Northern Ireland's Highway Code): not closed.** The breakdown and motorway rules were not
read. Read instead, for lesson 1's one line on jurisdiction: nidirect, "The Highway Code" (contents
page, dateModified 21 September 2026) and "Introduction to the Highway Code" (dateModified 22
September 2026), https://www.nidirect.gov.uk/articles/highway-code and
https://www.nidirect.gov.uk/articles/introduction-highway-code, main text of both. What they establish:
- Northern Ireland has its own version: "The Highway Code for Northern Ireland is also called The
  Highway Code or the Code." [V] Its contents page lists sections by rule range, including
  "Breakdowns and incidents (274 to 287)" [V] (GB's GOV.UK heading reads 275 to 287). The rules
  themselves were not opened.
- The same two voices: rules that are legal requirements "are identified by the use of the words
  'must' and 'must not'" [V]; other rules "may be used in evidence in any court proceedings under the
  Traffic Legislation to establish liability" [V].
- Why the versions differ: "Northern Ireland is largely responsible for its own road safety policy and
  legislation which explains the differences that exist between the Northern Ireland and Great
  Britain versions of the Highway Code." [V]
The callout keeps "Great Britain" (OUTLINE decision 4's fallback).

**Primaries re-read for lesson 1, with what they add to the parts above.**
- **GOV.UK (DVSA), "Check your vehicle is safe to drive"** (Part C §3), full text, content API,
  updated 5 April 2018. Quotations stand. Also: "Every time you drive you should check:" [V] "the
  windscreen, windows and mirrors are clean" [V], "all lights work" [V], "the brakes work" [V];
  "Your vehicle’s handbook will tell you how often to check the:" [V] "engine oil" [V], "water level
  in the radiator or expansion tank" [V], "brake fluid level" [V], "battery" [V], "windscreen and rear
  window washer bottles - top up with windscreen washer fluid if necessary" [V] (hyphen as in
  source), "tyres - they must have the correct tread depth and be free of cuts and defects" [V]; "The
  handbook will also tell you when your vehicle needs to be serviced." [V]
- **The Highway Code, "Introduction"** (Part C §4), full text, content API, updated 1 July 2022.
  Quotations stand. Also: "Such rules are identified by the use of the words 'MUST/MUST NOT'." [V]
  (spacing inside the quotation marks normalised).
- **The Highway Code, Annex 6** (Parts B §1, C §4), full text, content API, updated 29 January
  2022. Quotations stand. Also: "lights, indicators, reflectors, and number plates MUST be kept clean
  and clear" [V]; "Check the fluid levels in your vehicle at least weekly." [V]; "Low brake fluid may
  result in brake failure and a crash." [V]; "If your vehicle pulls to one side when braking, it is
  most likely to be a brake fault or incorrectly inflated tyres. Consult a garage or mechanic
  immediately" [V]; the shock-absorber item survives only in part in the extracted text, "continues
  to bounce after pushing down on the front or rear, its shock absorbers are worn" [V]; "If your
  engine overheats, you should wait until it has cooled naturally." [V] The laws cited under the
  vehicle maintenance paragraph: "Laws RVLR 1989 regs 23 & 27 , & CUR regs 30 & 61" [V].
- **DVSA, MOT inspection manual, "Introduction"**, content API, manual updated 1 June 2026, "Applies
  to England, Scotland, and Wales" [V]. Read in full. Quotations stand. The mild-hybrid sentence in
  full: "Many mild hybrids only use 48V systems which may use blue coloured insulation, rather than
  orange, as these are not regarded as being high voltage. However, the wiring on these systems
  should still be avoided." [V]
- **nidirect, "The MOT certificate"** (Part C §2), full text. Quotation stands.
- **49 CFR 571.110 (FMVSS 110)**, eCFR versioner API, point in time 2026-09-24. S4.3 read in full.
  Quotations stand.
- **49 CFR 571.139 (FMVSS 139)**, eCFR versioner API, point in time 2026-09-24. S3 definitions and
  S5.5 read. Quotation stands. S5.5(c): each tyre must be marked on each sidewall with "The maximum
  permissible inflation pressure" [V].
- **NHTSA, "Tires"**, capture 20260924154655, full page re-read. Quotations stand. Also: "On new
  vehicles, the label will be located on the driver’s side doorjamb, called a “B-pillar.”" [V]
- **Toyota, 2023 Corolla Owner's Manual (OM02568U)** (Part E §4), PDF re-read today, pp. 372 and 376
  to 378: quotations stand. **New, p. 397 ("8-1. Specifications", "Tires and wheels"):** the
  recommended cold pressures differ by the tyres fitted. "Type A", tyre size "195/65R15 91S": front
  "33 psi (230 kPa, 2.3 kgf/cm2 or bar)" [V], rear "30 psi (210 kPa, 2.1 kgf/cm2 or bar)" [V].
  "Type B", "205/55R16 91H": front "35 psi (240 kPa, 2.4 kgf/cm2 or bar)" [V], rear "33 psi (230
  kPa, 2.3 kgf/cm2 or bar)" [V]. Compact spare, every type: "60 psi (420 kPa, 4.2 kgf/cm2 or bar)"
  [V]. "Wheel nut torque 76 ft•lbf (103 N•m, 10.5 kgf•m)" [V] for each type.
- **Honda, 2024 Civic Sedan, "If a Tire Goes Flat"** (Part E §4), online, full section re-read.
  Quotations stand (torque "80 lbf∙ft (108 N∙m, 11 kgf∙m)"; compact spare "under 50 mph (80
  km/h)").
- **Mazda3 Owner's Manual, European English, 8GD7-EE-17H** (Part E §4): pages 08020102 and 08020303
  re-read. Quotations stand ("Do not exceed 80 km/h (50 mph)." [V] on 08020102; torque "108―147
  (12―14, 80―108)" N·m (kgf·m, ft·lbf) on 08020303).
- **Nissan (UK), 2023 LEAF online manual** (Part E §4): the pages now end in `.shtml` (the `.html`
  addresses in Part E return 404). Re-read "installing-spare-tyre-1.shtml" and
  "temporary-use-spare-wheel-tyre-1.shtml": "Wheel nut tightening torque: 108 N·m (11 kg-m, 80
  ft-lb)" [V]; "Do not drive your vehicle faster than 80 km/h (50 MPH)" [V].
- **Nissan, 2024 LEAF Owner's Manual (US)** (Part B §5), PDF re-read: the EV-8 quotation stands.
- **Ford, 2024 Maverick Owner's Manual** (Part B §2), capture 20250505042038 re-read: p. 309, "Do not
  remove the coolant reservoir cap when the engine is on or the cooling system is hot. Wait 10
  minutes for the cooling system to cool down." [V] stands (printed page 309 confirmed).
- **California BAR, "Maintenance and repairs"** (Part A §6), full text re-read. Quotation stands. The
  paragraph continues: "Manuals are available online. Visit the manufacturer’s website to find
  yours." [V]
- **fueleconomy.gov, "Tips for Hybrids, Plug-in Hybrids, and Electric Vehicles"** (Part A §2), re-read.
  Quotation stands; the next sentence: "The automaker knows how to operate and maintain your vehicle
  to maximize fuel economy, driving range, and battery life." [V]
- **CalRecycle, "Check Your Number"** (Part A §6), re-read. Quotations stand.
- **AAA, "How Often Should You Change Your Oil?"** (Part A §6), re-read. Quotation stands.
- **TyreSafe, "Check your pressures"** (last updated September 16, 2026) and **"Checking Tyre Tread
  Depth"** (last updated September 16, 2026) (Part B §1), re-read. Quotations stand ("in your vehicle
  manual, on a plaque in one of the front door sills or the inside of your fuel cap." [V]; "Tyre and
  safety experts recommend replacing tyres at 3mm" [V]).

**G-N4 (photographs), lesson 1: not closed.** A Wikimedia Commons search found no openly licensed
photograph of a tyre placard. The lesson has no photograph.

## Stage 4 note, lesson 04 (2026-09-26)

Read by the lesson 04 reviewer on 2026-09-26 with curl and a browser User-Agent (no personal data in any
header), and the AFDC, fueleconomy.gov and AA strings re-checked by the lesson 04 fixer the same day.
Captures: NHTSA "Electric and Hybrid Vehicles" IA 20260924154857; NHTSA "Winter Weather Driving Tips" IA
20260812080428; EST IA 20260731174146; Tesla Model 3 UK IA 20241004175445; Ford 2024 Maverick IA
20250505042038. Nissan 2024 LEAF read on the live PDF. In-place corrections made the same day, each marked
"Stage 4 correction, lesson 04": Part A §2 the AA's Good-for line (the "top two" is not ranked); Part A §2
AFDC maintenance (four reasons, not three); Part A §6 fueleconomy.gov cold (the temperatures); Part B §5
Nissan p. 8-2 (the fan sentence was trimmed); Part B §6 NHTSA winter (the gloss hid the antecedent).

**Additions, all [V]:**
- AFDC, "Hybrid Electric Vehicles" (basics): "The vehicle captures energy normally lost during braking by
  using the electric motor as a generator and storing the captured energy in the battery." [V] Mild
  hybrids "can allow the engine to shut off when the vehicle stops (such as at traffic lights or in
  stop-and-go traffic)" [V].
- AFDC, "How Do Plug-In Hybrid Electric Cars Work?": "PHEV batteries can be charged using a wall outlet or
  charging equipment, by the ICE, or through regenerative braking." [V] AFDC, "Plug-In Hybrid Electric
  Vehicles" (basics): "During braking, the electric motor acts as a generator, using the energy to charge
  the battery, thereby recapturing energy that would have been lost." [V] Series design: "The internal
  combustion engine is used to generate electricity for the motor." [V] So a plug-in's traction battery
  is charged by the plug, the engine and braking, not the plug alone. The same PHEV basics paragraph
  qualifies "only": "The electric motor drives the wheels almost all of the time, but the vehicle can
  switch to work like a parallel hybrid at highway speeds when the battery is depleted." [V, read by the
  lesson 04 fixer] So never say a series plug-in's engine never turns the wheels.
- AFDC, "How Do All-Electric Cars Work?": "Transmission (electric): The transmission transfers mechanical
  power from the electric traction motor to drive the wheels." [V] No source read describes it further;
  Halderman and Ward's contents list a chapter "EV and HEV Transmissions" (contents only).
- AFDC charging: DC fast charging equipment is "(typically a three-phase AC input)" [V].
- AFDC maintenance, hybrids: "The electrical system (battery, motor, and associated electronics) typically
  requires minimal scheduled maintenance, and brake systems generally last longer than those on
  conventional vehicles because of regenerative braking." [V] Fourth all-electric reason: "There are far
  fewer moving parts relative to a conventional fuel engine." [V]
- fueleconomy.gov, "Tips for Hybrids, Plug-in Hybrids, and Electric Vehicles", under "Avoid Hard
  Braking": "Anticipate stops and brake gently or moderately. This allows the regenerative braking system
  to recover energy from the vehicle's forward motion and store it as electricity. Hard braking causes the
  vehicle to use its conventional friction brakes, which do not recover energy." [V]
- fueleconomy.gov, "All-Electric Vehicles": the page itself sets its 77% beside "Conventional gasoline
  vehicles only convert about 12%–30% of the energy stored in gasoline to power at the wheels." [V]
- fueleconomy.gov, "Fuel Economy in Cold Weather": the conventional figure is "at 20°F than it would be at
  77°F" [V]; the hybrid figure applies "under these conditions" [V]; "Estimates for EVs are based on a
  2019 study by AAA" [V]; "This also affects the performance of the regenerative braking system on
  hybrids, plug-in hybrids, and electric vehicles." [V]; "When the cabin heater is not used, EV fuel
  economy is 8% lower at 20°F than at 75°F. Driving range is about 12% lower." [V] The page names the AAA
  study in a parenthesis; lessons keep to "a 2019 AAA test, as fueleconomy.gov reports it".
- NHTSA winter (IA 20260812080428): "The battery drain due to heating can be minimized by keeping your
  electric vehicle as warm as possible during freezing temperatures." [V]
- The AA, 23 July 2021: "it doesn't feature within the top three EV breakdown causes" [V] (running out of
  charge); the patrol's antecedent sentence, "In conventional cars, the low voltage battery starts the
  engine when you turn the ignition" [V] (Ben Sheridan, AA Patrol of the Year).
- Nissan 2024 LEAF (US), p. 8-2: "It may come on at any time without warning, even if the power switch is
  not in the ACC, ON or READY to drive position." [V] p. 9-4 lists among no-start causes "Vehicle is not
  driven regularly and/or only driven short distances." [V]

**Vocabulary, checked:** "traction battery" is AFDC's word (and NHTSA's once). It appears 0 times in the
Nissan LEAF manual, the Ford Maverick manual and the AA release: Nissan says "Li-ion battery", Ford and the
AA "high voltage battery". Do not say handbooks or breakdown services use "traction".

**Verified strings (checked 2026-09-26 against the primary named), beyond those above:**
- AFDC all-electric: "manages the flow of electrical energy delivered by the traction battery, controlling
  the speed of the electric traction motor and the torque it produces."; "Some vehicles use motor
  generators that perform both the drive and regeneration functions."; "Takes the incoming AC electricity
  supplied via the charge port and converts it to DC power for charging the traction battery."; "converts
  higher-voltage DC power from the traction battery pack to the lower-voltage DC power needed to run
  vehicle accessories and recharge the auxiliary battery."
- AFDC hybrid and HEV basics: "A hybrid electric vehicle cannot be plugged in to charge the battery.
  Instead, the battery is charged through regenerative braking and by the internal combustion engine.";
  "the low-voltage auxiliary battery provides electricity to start the car before the traction battery is
  engaged; it also powers vehicle accessories."; "Mild hybrid systems cannot power the vehicle using
  electricity alone."; "larger batteries and more powerful electric motors, which can power the vehicle
  for short distances and at low speeds."; "the most common HEV design"; "Series hybrids, which use only
  the electric motor to drive the wheels, are more commonly found in plug-in hybrid electric vehicles."
- AFDC plug-in and PHEV basics: "The vehicle typically runs on electric power until the battery is nearly
  depleted, and then the car automatically switches over to use the ICE."; "about 15 to 60-plus miles in
  current models"; "if the vehicle is never plugged in to charge, fuel economy will be about the same as a
  similarly sized hybrid electric vehicle."; "consistently charging the vehicle is the best way to maximize
  the electric benefits."; "often referred to as extended-range electric vehicles."
- AFDC charging: "a 120 volt (V) AC plug"; "Approximately 5 miles of range per 1 hour of charging";
  "Assumes 1.9 kW charging power"; "240 V (typical in residential applications) or 208 V (typical in
  commercial applications)"; "2.9 to 19.2 kW"; "Most residential Level 2 chargers operate at up to 30 Amps,
  delivering 7.2 kW of power. These units require a dedicated 40-Amp circuit to comply with the National
  Electric Code requirements in Article 625."; "Approximately 100 to 200+ miles of range per 30 minutes of
  charging"; "up to 500 kW. This is also referred to as Level 3 charging."
- AFDC maintenance: "PHEVs and HEVs require the same general maintenance as conventional vehicles, but
  all-electric vehicles require less maintenance because they have fewer moving parts and fluids to
  change."; "use liquid coolant to maintain safe operating temperatures. These systems may require regular
  checks."; "typically range from 400 to 1,000 volts"; "many manufacturers offer 8-year/100,000-mile
  warranties for their EV batteries."
- AFDC batteries: "could have at least 70% of its initial capacity left at the end of its life if it has
  not failed or been damaged".
- fueleconomy.gov: "uses the forward motion of the wheels to turn the motor. This generates electricity and
  helps slow the vehicle." (hybridtech); "EVs convert over 77% of the electrical energy from the grid to
  power at the wheels." and "a DOE study suggests these batteries may last 12 to 15 years in moderate
  climates and 8 to 12 years in severe climates." (evtech); "Only about 12%–30% of the energy from the fuel
  you put in a conventional vehicle is used to move it down the road, depending on the drive cycle." (atv);
  "fuel economy can drop roughly 39% in mixed city and highway driving, and range can drop by 41%. About
  two-thirds of the extra energy consumed is used to heat the cabin."; "about 30% to 34%"; "preheating the
  cabin while plugged into the charger can extend your vehicle's range."; "making it harder for your
  alternator to keep your battery charged" (coldweather).
- NHTSA EV (IA 20260924154857): "This high-voltage battery is very different from a vehicle's 12-volt
  battery that powers lighting and instrumentation systems."; "Typically, fully electric and many
  hybrid-electric vehicles do not use a conventional alternator to recharge the 12-volt battery. Instead,
  these vehicles use a DC-DC converter to step high-voltage from the battery pack down to low-voltage";
  "The high-voltage battery found in EVs and HEVs cannot be jumped."; "It is important that a qualified
  technician with specialized EV-specific high-voltage training service your electric vehicle."
- NHTSA winter (IA 20260812080428): "In cold weather, gasoline and diesel engines take more battery power
  to start, and electric and hybrid-electric vehicles' driving range can be reduced." (curly apostrophe in
  the source); "A common way to do this is plugging your vehicle in at night during the winter".
- The AA, 23 July 2021: "the low-voltage 12v battery which can be found in all cars, and tyre faults due to
  potholes, punctures and wear."; "The third relates to charging equipment (cable, plug)."; "96% of EV
  breakdowns have nothing to do with battery range." (Edmund King, AA president); "In EVs it's similar, but
  it starts the onboard computer system. A separate, high voltage battery powers the vehicle." (Ben
  Sheridan).
- Nissan 2024 LEAF (US), on the PDF: EV-8 "The EV system uses high voltage up to approximately DC 400 volt"
  and "High-voltage cables are colored orange. The vehicle high voltage system has no user serviceable
  parts."; 2-16 "Immediately stop the vehicle in a safe location and have the system checked."; 6-10
  "Jump starting does not charge the Li-ion battery. The Li-ion battery must be charged before the vehicle
  can be driven."; 6-11 "LEAF cannot be used as a booster vehicle because it cannot supply enough power to
  start a gasoline engine."; 8-6 "Check the coolant level in the reservoir when the high-voltage parts are
  cold". Pages 9-3 and 9-4 list lights, tires, wiper blades, wiper and washer, the 12-volt battery, brake
  fluid level (MAX and MIN lines) and coolant level (MAX and MIN lines).
- Ford 2024 Maverick, p. 184: "labeled as such or covered with a solid orange convolute, or orange striped
  tape, or both."; "This battery pack should only be serviced by an authorized electric vehicle
  technician."; "If you do not switch the ignition off, the engine could restart at any time."
- MOT manual Introduction §20 (GOV.UK, updated 1 June 2026): "some imported vehicles may have high voltage
  wiring insulation of a different colour"; "Many mild hybrids only use 48V systems which may use blue
  coloured insulation, rather than orange, as these are not regarded as being high voltage"; "the internal
  combustion engine may start without warning when electrical equipment is operated or if the battery
  voltage drops."
- ASE 2024 standards glossary: "Automotive system voltages greater than 30 VAC or 60 VDC."
- EST (IA 20260731174146): "use the higher levels of regen once you're comfortable to do so." (curly
  apostrophe in the source).
- ESF: "The safest way to charge at home is with a dedicated EVCP"; "a registered and competent
  electrician".
- Tesla Model 3 UK (IA 20241004175445): "The motor(s) in Model 3 generates power when the wheels spin.
  Always transport Model 3 with all four tires off the ground."

## Stage 4 note, lesson 03 (2026-09-26)

**Gate closure (G-H11, currency): EPA's July 2026 proposal.** US EPA, "Proposed Rule: Amendments and
Nonconformance Penalties for Model Year 2027 and Later Heavy-Duty Highway Engines and Amendments to
Inducement Provisions for SCR-Equipped Diesel Engines",
https://www.epa.gov/regulations-emissions-vehicles-and-engines/proposed-rule-amendments-and-nonconformance-penalties
("Last updated on August 31, 2026" [V]). Read: the rule summary in full, curl, 26 September 2026. The
Notice of Proposed Rule itself (Federal Register PDF) was not read. Docket EPA-HQ-OAR-2026-0728 [V].
- "On July 14, 2026, the U.S. Environmental Protection Agency published proposed regulatory
  amendments" [V]; "announced on July 9, 2026, and published on July 14, 2026, in the Federal
  Register" [V].
- "The proposal would replace the requirement for engine derates and vehicle speed reductions with
  audible and/or visible notifications for newly manufactured diesel-fueled highway engines and
  vehicles (i.e., light-duty and medium-duty vehicles and heavy-duty engines) and nonroad engines and
  equipment." [V]
- "EPA is also considering a process to issue updated guidance that would allow manufacturers to modify
  in-use engines and vehicles" [V].
- The comment period "ended on August 29, 2026." [V] No final rule is listed on the page.
- The EPA DEF page (re-read today, "Last updated on July 9, 2026" [V]) scopes the 2022 rule narrowly:
  "In 2022, EPA finalized a revised inducement strategy, starting with model year 2027 heavy-duty
  on-highway vehicles and engines." [V] So Part A §5's fact-sheet line "Starting with model year (MY)
  2027, all new on-road diesel vehicles must be engineered..." is a 2025 fact sheet's forecast, not the
  settled position; a lesson uses the DEF page's heavy-duty wording and the 2026 proposal, dated.
- EPA 420-F-26-006 (March 2026, per the lesson 03 reviewer): "EPA will be issuing a new deregulatory
  proposal this spring that will completely remove all DEF deratements for new vehicles and engines."
  [V, reviewer's read]. Framing not for use. The proposed-rule page links a "Timeline of Trump EPA DEF
  Actions and Guidance"; not read, and its framing not for use.

**Corrections to earlier entries.**
- Part A §5, the AA's "What is AdBlue?": the "Wrong-tank action" line is diesel-in-the-AdBlue-tank
  advice, not AdBlue-in-the-fuel-tank advice. Corrected in place with a marker; "Gate closures, lesson
  03" has the full reading. The podcast script and the course test (OUTLINE assessments, "AdBlue in the
  fuel tank") use "don't touch the ignition" and a drained tank for that case.
- "Short journeys at low speeds are the prime cause of blocked diesel particulate filters." is the
  RAC's sentence alone (Part A §5 files it correctly under the RAC). OUTLINE's lesson 3 entry had
  credited it to the RAC and the AA; corrected there with a dated note. The RAC gives no buying advice
  in its own voice; "This is why car makers often go as far as recommending city-bound or short-hop
  drivers choose a petrol or electric car instead of diesel." [V] is its claim about makers, and no
  maker's statement was read.
- The DVSA note's health figures come from the 2008 COMEAP report, not from 2013.

**Verified strings, live primaries, 26 September 2026** (the lesson 03 reviewer's re-reads; the EPA
proposed-rule page re-read by the fixer).
- The AA, "What is AdBlue?" ("Published: 05 January 2017 | Updated: 11 July 2024"): "AdBlue is a
  diesel exhaust fluid, not a fuel additive. It's stored in a separate tank"; "(usually) blue filler
  cap"; "AdBlue is a colourless, non-toxic mixture of urea and de-ionised water. It's not actually blue
  at all."; "It's a trade name registered by the German car manufacturers association"; "You'll
  usually see a text warning on the dashboard when there's around 1500 miles' worth of AdBlue left.";
  "If you run out of AdBlue while you're driving, then the engine's power and performance will be
  reduced to limit its emissions. Once you've stopped, you won't be able to restart the engine if the
  AdBlue tank's empty."; "Typical consumption is around a litre of AdBlue every 600 miles."; "But it
  could be as high as a litre every 350 miles."; "you could need to refill somewhere between 3,000 and
  12,000 miles"; "You can refill the Adblue tank yourself."; "Follow any instructions given in your
  handbook or on the pack" (in a list introduced by "If you can't find the Adblue filler cap you
  should:"); "5 litres should be enough to make sure your car will restart if you've run out
  completely"; "AdBlue is non-toxic but can cause irritation to your skin and eyes and may damage the
  paintwork"; "These crystals will cause damage over time."; under "What happens if I put AdBlue in
  the diesel tank?": "Putting it directly into your fuel tank could cause expensive damage to your
  fuel tank, pump and injection system. If you start the engine it's likely to be an expensive
  write-off, so don't touch the ignition." and "You'll need to get the tank drained and the contents
  disposed of safely before you can refill it. Call us, and we'll sort the problem out."; under "What
  happens if I put diesel in the AdBlue tank?": "Don't turn on the ignition or start the engine and
  call us for help." and "If you do start your engine, then the damage could mean that you have to get
  the entire Selective Catalytic Reduction and AdBlue injection system replaced."; "If you've got a
  diesel from Jaguar, Land Rover or any French or German manufacturer, and it was registered new after
  September 2015, it'll use AdBlue."; "However, some older cars or vehicles from other manufacturers
  use it."
- The AA, "Diesel particulate filters" ("updated 7 August 2017"): "our patrols are often called to
  cars with a blocked DPF"; "on motorways or fast A-roads"; "leaving only a tiny ash residue"; "The ash
  can't be removed – unless the DPF is removed from the vehicle and sent away for specialist cleaning –
  but a DPF in a car used correctly should be good for well over 100,000 miles."; "every 300 miles or
  so depending on how you use your car and will take 5 to 10 minutes to complete"; "A hot, acrid smell
  from the exhaust."; "by driving for 10 minutes or so at speeds over 40mph"; "in a relatively slow,
  stop/start pattern"; "'restricted performance mode'"; "Driving at speed alone won't be enough.";
  "You'll have to get a dealer to do a manual or 'forced' filter regeneration."; "If there's a fault
  with the DPF or the differential pressure sensor ... the engine management light might also come
  on."; "mainly for town-based, stop/start driving you'd be wise to avoid diesels fitted with a
  particulate filter"; "Follow any advice in your vehicle handbook."; "Frequent short journeys where
  the engine doesn't get hot"; "The wrong type of engine oil – check your handbook"; "Going over the
  recommended service interval"; "Low fuel level – generally less than a quarter of a tank – will
  prevent active regeneration taking place."; "Removing a DPF could also invalidate any insurance cover
  because it makes the vehicle illegal for road use."
- The RAC, DPF page (dateModified 2026-08-03), article body only: "Short journeys at low speeds are the
  prime cause of blocked diesel particulate filters."; "regularly give their diesel vehicle a good 30
  to 50 minute run at sustained speed on a motorway or A-road to help clear the filter"; "(normally
  about 45%)"; "the regeneration process may not complete fully"; "driving for 10 minutes or so at
  speeds greater than 40mph"; "some oils contain additives that can actually block filters"; "the car
  may avoid DPF regeneration in order to save fuel"; "generally, they should last for at least 100,000
  miles" (after "A diesel particulate filter on a poorly serviced car may fail sooner"); "a piped box
  that has dots in the middle"; "'limp-home mode'"; "On some models the engine may not restart after a
  number of miles"; "If your warning light continues to stay on, turns red, or additional DPF lights
  come on, do not leave it too long before getting it checked out."; "There is no need to call out the
  RAC if your DPF warning light is glowing."; "if it fails to extinguish, take your car to a garage";
  "removing a DPF can also invalidate your car insurance policy".
- C&U Regs 1986 reg 61A (E+W+S): 61A(1) "This regulation shall apply to motor vehicles first used on
  or after 1st January 2001."; 61A(3) "no person shall use, or cause or permit to be used, on a road a
  motor vehicle if the motor vehicle does not comply with such limit values as may apply to it";
  61A(3)(a) "the failure to meet the limit values does not result from an alteration to the propulsion
  unit or exhaust system of the motor vehicle"; 61A(4) "nothing in paragraph (3) shall prevent the
  motor vehicle being driven to a place where the device is to be repaired or replaced."; "There are
  currently no known outstanding effects".
- DVSA and DfT note (first published 24 September 2013, revised 4 December 2013): "by trapping solid
  particles while letting gaseous components escape"; "has led to some diesel vehicle owners removing
  their DPFs"; "might still pass"; "It is an offence ... (Regulation 61a(3)) to use a vehicle which has
  been modified in such a way that it no longer complies with the air pollutant emissions standards it
  was designed to meet. Removal of a DPF will almost invariably contravene these requirements, making
  the vehicle illegal for road use."; "The potential penalties for failing to comply with Regulation
  61a are fines of up to £1,000 for a car or £2,500 for a light goods vehicle."
- MOT inspection manual section 8 (section 24 June 2025; manual 1 June 2026, "MOT inspection manual:
  cars and passenger vehicles"): "Evidence that the diesel particulate filter has been tampered with"
  (Major); "Exhaust on a vehicle fitted with a diesel particulate filter emits visible smoke of any
  colour" (Major); "If a diesel particulate filter has clearly been cut open and rewelded, you should
  reject it unless the vehicle presenter can show evidence that there was a valid reason to cut it
  open, such as for filter cleaning."
- EPA DEF page ("Last updated on July 9, 2026"): "farmers, truckers, and other diesel vehicle
  operators"; "These systems can force a vehicle to drastically reduce speed or become inoperable if
  DEF runs out or if system sensors fail."; "By law, EPA cannot mandate field fixes for in-use vehicles
  and nonroad equipment, which is why the Agency is issuing voluntary guidance ..."; "alert the driver
  via a warning light".
- EPA-420-F-25-011 (August 2025): "EPA is issuing guidance urging engine and equipment manufacturers
  to revise their DEF system software in existing vehicles and equipment to reduce derates."; "within
  four hours, the vehicle speed is reduced to five miles per hour"; page 2 read by eye: "HD Pickups and
  Light Duty Cars", Final "4,200 miles / 80 hours", "45 mph"; Before "4 hours", "5 mph". The table does
  not say whether the two figures are whichever comes first.
- 42 U.S.C. 7522 (text in effect 25 September 2026): (a)(3)(A) "knowingly to remove or render
  inoperative any such device or element of design after such sale and delivery to the ultimate
  purchaser"; (a)(3)(B) "where a principal effect of the part or component is to bypass, defeat, or
  render inoperative any device or element of design" and "where the person knows or should know";
  "for the purpose of repair or replacement of the device or element"; "such action thereafter results
  in the proper functioning of the device or element"; "Nothing in paragraph (3) shall be construed to
  require the use of manufacturer parts in maintaining or repairing any motor vehicle or motor vehicle
  engine."
- AFDC, "How Do Diesel Vehicles Work?": "ignited by the high temperatures achieved when the gas is
  compressed by the engine piston."; "an aqueous urea solution"; "reduced to nitrogen and water by
  chemical conversion within the selective catalytic reducer (SCR)"; "many diesel vehicles have
  additional aftertreatment components".
- fueleconomy.gov, "Diesel Vehicles": "Today's diesels must meet the same emissions standards as
  gasoline vehicles."; "Although emissions of particulates and smog-forming nitrogen oxides (NOx) are
  still relatively high, new 'clean' diesel fuels ... will reduce these pollutants also." The fixer
  re-read the page live on 26 September 2026; the full sentence is "Although emissions of
  particulates and smog-forming nitrogen oxides (NOx) are still relatively high, new "clean" diesel
  fuels, such as ultra-low sulfur diesel and biodiesel, and advances in emission control technologies
  will reduce these pollutants also." [V] The page states no comparison for "relatively high".

## Stage 4 note, lesson 02 (2026-09-26)

*Verified strings from the lesson 02 Stage 4 review, each string-matched by the reviewer against the
live primary on 26 September 2026 (curl, browser user agent, HTML stripped; pdftotext -layout for the
Toyota PDF). The fixer re-read the RAC cambelt page, the RAC warning-lights page, AFDC's gasoline
page and fueleconomy.gov's atv.shtml (with every diagram alt and title attribute) the same day.
Three corrections were made in place above, each marked: the RAC cambelt entry in "Gate closures,
lesson 02" (the five signs are not "directly before" the no-symptoms line), the atv.shtml entry there
(the auxiliary electrical row was missing), and Part B §3's RAC warning-lights entry (the
"lubricating" sentence added).*

- **US DOE, "Internal Combustion Engine Basics"** (dateModified 2023-06-22): "the basic chemical
  process of releasing energy from a fuel and air mixture" [V]; "Most of these are four-stroke cycle
  engines, meaning four piston strokes are needed to complete a cycle. The cycle includes four
  distinct processes: intake, compression, combustion and power stroke, and exhaust." [V]; "In a
  spark ignition engine, the fuel is mixed with air and then inducted into the cylinder during the
  intake process. After the piston compresses the fuel-air mixture, the spark ignites it, causing
  combustion." [V]; "In a diesel engine, only air is inducted into the engine and then compressed.
  Diesel engines then spray the fuel into the hot compressed air at a suitable, measured rate,
  causing it to ignite." [V]. The engine passage and the two-kinds sentence stand as recorded above.
- **AFDC, gasoline and diesel pages**: "is injected into either the intake manifold or the combustion
  chamber, where it is combined with air, and the air/fuel mixture is ignited by the spark from a
  spark plug." [V] (the page's only mention of the intake manifold; it is not defined); "The ECM
  controls the fuel mixture, ignition timing, and emissions system; monitors the operation of the
  vehicle; safeguards the engine from abuse; and detects and troubleshoots problems." [V];
  "transfers mechanical power from the engine and/or electric traction motor to drive the wheels"
  [V]; "ignited by the high temperatures achieved when the gas is compressed by the engine piston."
  [V]. Neither AFDC nor DOE uses the term "direct injection".
- **fueleconomy.gov, atv.shtml**: diagram labels as corrected above; both diagrams also carry
  "Auxiliary Electrical Losses: 0% - 2%" [V]. The page's toggles include braking and "Wind
  Resistance (Aerodynamic Drag)". The matching pages https://www.fueleconomy.gov/feg/atv-hev.shtml
  and https://www.fueleconomy.gov/feg/atv-ev.shtml exist (HTTP 200) and are linked from atv.shtml;
  their contents were not read.
- **fueleconomy.gov, di_diesels**: "diesel fuel contains roughly 10% to 15% more energy than
  gasoline. So, diesel vehicles can often go about 20% to 35% farther on a gallon of fuel than their
  gasoline counterparts" [V].
- **fueleconomy.gov, tech_transmission**: "use a fixed number of metal gears to control the ratio
  between engine speed and wheel speed." [V]; "Instead of gears, CVTs use a pair of variable-diameter
  pulleys connected by a belt or chain that can produce an infinite number of engine-to-wheel speed
  ratios." [V]; table 6 gears 2%, 7 gears 2%–3%, 8 gears 3%–4% (National Academy of Sciences 2015).
- **fueleconomy.gov, maintain.jsp**: "Energy Conserving" ... "to be sure it contains
  friction-reducing additives." [V] (the page's phrase is "API performance symbol").
- **RAC, cambelt page** (dateModified 2026-07-31): "This is why it is important to look out for the 5
  signs of cambelt failure." [V]; the five sign headings: Engine misfire; Poor idling; Unusual noises;
  Difficulty starting the engine; Belt is cracked or frayed [V]; in the fifth, "if the cambelt appears
  cracked or damaged then it's important to get it changed." [V]; then "If you're experiencing any of
  these symptoms, it's important to have your vehicle checked as soon as possible by a qualified
  mechanic." [V] (the stripped text has a space before the full stop, from a link); then "Many
  cambelts show no obvious symptoms before failure." [V]; "Replacement is typically recommended every
  60,000 to 100,000 miles, but some vehicle manufacturers may suggest the belt is changed when the
  vehicle reaches five or six years of age" [V]; "The replacement interval for your car's cambelt will
  be detailed in the owner's manual for the vehicle. This will be after a specific number of years or
  miles, whichever comes first." [V]; "At your annual MOT, your mechanic will not check your cambelt."
  [V] (the page links "MOT", which leaves a space before the comma in stripped text).
- **RAC, warning-lights page** (dateModified 2026-08-18): "If the oil is not lubricating the engine
  effectively it could lead to expensive or even irreparable engine damage, so it's important to act
  quickly." [V]. It names the job, not the mechanism: G-H12 stays open.
- **DENSO Europe, glow-plug page**: "To start combustion within a diesel engine, air is compressed in
  a cylinder to raise its temperature and pressure, fuel is then added to start the combustion cycle.
  If the temperature of the air is too low, then some of the fuel that is supplied may not be burnt."
  [V]; "glow plugs provide extra heat to the air and ensure that the cylinders reach the required
  temperature for a clean combustion cycle." [V]; "should wait until the light goes out, before
  starting the engine." [V]; "vehicle manufacturers (VMs) specify changing the glow plugs at specific
  intervals as part of the vehicle's service schedule" [V]. The page does not mention cold mornings,
  frost or winter; its light comes on at every start.
- **The Highway Code, Annex 6** (content API, public_updated_at 2022-01-29): "Most engines are
  water-cooled." [V]; "If your engine overheats, you should wait until it has cooled naturally." [V].
- **Toyota 2023 Corolla, OM02568U (US)**, pp. 305 to 307: the quotations in "Gate closures, lesson
  02" stand; the hot-cap warning sits under "When the engine is hot / Do not remove the engine
  coolant reservoir cap."
- **Textbooks** (contents only, Part A §4): Halderman and Ward, 7th ed. (Pearson, 2025), chapters
  "Engine Oil and Filters" and "Antifreeze and Coolant"; Erjavec and Thompson, 7th ed. (Cengage,
  2020), chapter "14. Lubricating and Cooling Systems." Match Part A.

## Gate closures, lesson 05 (2026-09-26)

*Read by the lesson 05 drafter on 26 September 2026 with curl and a browser User-Agent (no personal data
in any header), text extracted with pandoc, pdftotext (-layout and -raw) or the GOV.UK content API.
Quotations marked [V] were copied from that extracted text. **G-H1 is not closed**: nothing read explains
how an alternator works, and lesson 5 names it only (decision 14's fallback). Nothing here clears an entry
on the `unread:` line.*

- **The AA, "What to do if your car has a flat battery"** (https://www.theaa.com/breakdown-cover/advice/flat-battery),
  "Last updated 11 January 2024" [V]. **Re-read: full article text.** Part B's quotations stand. The same
  page gives two different life figures: "Most batteries will last somewhere between 5 and 7 years." [V]
  and, further down, "A car battery could typically last anywhere from 3-6 years, largely because
  differences in driving habits and frequency of use can cause batteries to age at different rates." [V]
  Also: "A flat battery is one of the top 10 breakdown causes." [V]; before concluding the battery is flat:
  "Make sure there's fuel in the tank." [V], "If the central locking isn't working, your key fob might have
  died so try a spare key." [V], "If you can't turn the ignition, check the wheels aren't jammed against
  the kerb." [V]; "If the engine struggles to start before the battery is 5 years old, it probably means:"
  [V] followed by "The battery isn't getting enough charge.", "The car's doing too many short journeys, or"
  and "There's a vehicle fault draining the battery or affecting charging." [V each]; "Starting problems
  after 5 years are more likely to mean:" [V] "The battery's getting tired and may need replacing." [V];
  among the commonest causes of a dead battery, "The car hasn't been used for a while" and "The car's only
  used for short or stop-start journeys" [V each]; "Batteries can fail for other reasons, like too much
  vibration from the engine, over-charging, corrosion and extreme temperatures." [V]; "Flat batteries are
  the most common reason why cars won't start in winter." [V]; "The cold weather can affect cars by slowing
  down their internal processes." [V]; "With severe enough temperatures your car battery will have a
  reduced capability to hold a charge." [V]; "Problems with the alternator are sometimes the cause of a car
  battery not charging, though it can also be due to the battery cables or battery terminals becoming
  corroded." [V]; "30 minutes or more will help the battery recharge." [V]; "The 12 volt battery on an
  electric vehicle can be just as problematic as a conventional vehicle." [V]; "The longer you leave a flat
  battery alone without recharging it, the more likely it is to become a dead battery." [V]. The page sells
  the AA's own battery service and names chargers; neither is used.
- **The AA, "10 essential car maintenance tips"** (https://www.theaa.com/breakdown-cover/advice/car-maintenance-tips),
  "Published: 29 March 2016 | Updated: 10 July 2025" [V]. **Re-read: full article text.** Part B's
  quotations stand ("Most car batteries have a life of 3 to 5 years" [V] continues ", so if yours is getting
  a bit old replace it with a new one before it lets you down." [V]). New: "Many plug-in vehicles
  automatically maintain the 12- volt battery when they're plugged in" [V, spacing as in source], the
  sentence continuing after a spaced dash that the handbook will say whether this is so; "If you haven't
  got your vehicle plugged in, it's good practice to plug in at least once a month to help maintain
  systems." [V]; "The most common cause of a flat battery is leaving the lights on after turning the engine
  off." [V]
- **AAA (Mountain West Group), "How Cold Weather Impacts Your Battery"** (https://mwg.aaa.com/via/car/how-cold-weather-impacts-battery),
  no date shown. **Re-read: full article text.** Part B's quotations stand. New: "A car battery provides
  the power to start your car and run some accessories, but it doesn't provide continual power (that's the
  job of the alternator)." [V]; "The battery generates electricity using lead-acid technology to create a
  chemical reaction that turns it into energy." [V]; the heat sentence continues "which becomes evident
  when the temperature drops and more power is required to get the car started." [V]; the battery-light
  item continues "but if it goes on, your battery might have been fatally damaged by a bad alternator. Get
  the car towed to your local mechanic shop for a complete charging system check." [V]; "Get your battery
  tested annually before winter." [V]; "Leaking or a swollen battery can often indicate your battery is
  near failure." [V]; "Check your battery after jump-starting your car to ensure a bad battery wasn't the
  root cause." [V]; "After jump-starting the car, drive around for at least 30 minutes to allow the
  alternator (which powers the vehicle while it's running) to recharge the battery." [V]. AAA clubs sell
  roadside assistance and the page advertises AAA's battery service; neither is used.
- **fueleconomy.gov, "Driving More Efficiently"** (https://www.fueleconomy.gov/feg/driveHabits.jsp).
  **Re-read: full body text.** The 5-mile line sits in a "Best Practices" list introduced by "Here are some
  tips to help you maximize your savings." [V], footnoted to "Argonne National Laboratory. 2015. Stop and
  Restart Effects on Modern Vehicle Starting System Components" [V, title truncated]. Other items in the
  list: "Limit electric accessory use during shutdown, particularly during longer shutdown periods." [V]
  and the starts-per-day line, which carries an em dash and is not quoted.
- **fueleconomy.gov, "Fuel Economy in Cold Weather"**. Re-read in full; the battery line stands and continues
  "This also affects the performance of the regenerative braking system on hybrids, plug-in hybrids, and
  electric vehicles." [V] (as the lesson 04 note records).
- **Health and Safety Executive, INDG139(rev1)** (https://www.hse.gov.uk/pubns/indg139.pdf). **Re-read: full
  text**, pdftotext. Written for workplaces: "The advice is aimed at supervisors, technicians, safety
  professionals and others involved in:" [V] a list that begins "motor vehicle repair and maintenance" [V].
  Part B's quotations stand. New: "Lead/acid batteries are the most common large-capacity rechargeable
  batteries. There is one in almost every car, motorcycle and wagon on the road." [V]; "Serious electric
  shocks and burns are common in accidents involving high-voltage battery packs." [V] (para 3); "These very
  corrosive chemicals can permanently damage the eyes and produce serious chemical burns to the skin." [V]
  (para 9); "A source of ignition" [V] in para 12 is listed as "a flame, a spark, a cigarette or any hot
  object, electrical equipment, a mobile phone" [V]; "Hydrogen and oxygen are produced more quickly as the
  battery gets close to being fully charged." [V] (para 13); "When this happens, a large amount of
  electricity flows through the metal object, making it very hot very quickly." [V] (para 18); para 19
  continues "However, some large batteries produce more than 120 volts DC." [V]; "In valve-regulated
  batteries, any hydrogen and oxygen produced during charging does not escape but is converted back into
  water." [V] (para 7). HSE's connect-and-disconnect procedure (para 20) is a workshop procedure and is not
  taught.
- **The Highway Code, Annex 6** (GOV.UK content API, `public_updated_at` 2022-01-29). Re-read in full. The
  charge-light passage stands, whole: "If the charge warning light comes on while you are driving, it may
  mean that the battery isn’t charging. This should also be checked as soon as possible to avoid loss of
  power to lights and other electrical systems." [V] Also "Before winter. Ensure that the battery is well
  maintained and that there are appropriate anti-freeze agents in your radiator and windscreen bottle." [V]
- **RAC, "Dashboard warning lights guide"** (URL as Part B). **Re-read: the battery warning light section.**
  Part B's quotations stand. New: "It may indicate the battery is not charging or a fault is present. This
  could be due to a problem with your car’s electrical system, such as a faulty alternator, bad electrical
  connection or damaged cabling. The battery itself may be faulty or worn out." [V]
- **Nissan, 2024 LEAF Owner's Manual (US)**, PDF (URL as Part B), re-read in pdftotext -raw. **p. 2-16, the
  12-volt battery charge warning light, read in full.** Part B's quotation stands. New: "The DC/DC converter
  converts 400–volt Li-ion battery voltage to charge the 12-volt battery." [V, the source's en dash];
  when the light comes on "a chime sounds" [V] and the display flashes "Stop the vehicle" [V] while
  driving; "Do not charge the 12-volt battery while this warning light is illuminated. It may lead to a
  malfunction of the DC/DC converter system." [V]; and, in the note, if the light "turns off when the
  vehicle is in the READY to drive mode, the 12-volt battery may be discharged or there may be a
  malfunction in the 12-volt battery related system." [V, the source's hyphenation joined]. **p. 9-4**: the
  note after the 12-volt battery item lists "Installation or extended use of electronic accessories that
  consume battery power when the EV system is not running (Phone chargers, GPS, DVD players, etc.)" [V]
  and "Vehicle is not driven regularly and/or only driven short distances." [V], then "In these cases, the
  battery may need to be charged to maintain battery health" [V].
- **Ford, 2024 Maverick Owner's Manual (US and Canada)**, Internet Archive capture 20250505042038, re-read in
  pdftotext -raw. **p. 113, "Battery"**: "It illuminates when you switch the ignition on." [V] then Part
  B's quotation, which stands. **p. 457, "Check Every Six Months"**: "Battery connections. Clean if
  necessary." [V] (an owner check on Ford's list; not taught here).
- **Toyota, 2023 Corolla Owner's Manual (US), OM02568U**, PDF (URL as Part E), read in pdftotext -layout.
  **p. 357, "Charging system warning light"**: "Indicates a malfunction in the vehicle’s charging system"
  [V] and "Immediately stop the vehicle in a safe place and contact your Toyota dealer." [V] **p. 309 to
  310, "Battery"**: "Make sure that the battery terminals are not corroded and that there are no loose
  connections, cracks, or loose clamps." [V]; "The battery contains poisonous and corrosive sulfuric acid
  and may produce hydrogen gas which is flammable and explosive." [V]; "Wear protective safety glasses when
  working near the battery." [V]; "Keep children away from the battery." [V]; "Always charge the battery in
  an open area." [V]. Toyota's recharging steps are not taught.
- **AFDC, "How Do Gasoline Cars Work?"** Re-read; Part A's battery quotation stands.
- **Whole sentences, for quotation** (lesson 05; each copied from the extracted texts above): AAA Mountain
  West, "while winter weather is most likely to cause your battery to fail, it's actually hot weather that
  does most of the damage, which becomes evident when the temperature drops and more power is required to
  get the car started." [V]; "A battery light doesn't usually mean you need (just) a battery, but if it goes
  on, your battery might have been fatally damaged by a bad alternator." [V]. Nissan 2024 LEAF p. 2-16,
  CAUTION: "The DC/DC converter system may not be functioning properly if the 12-volt battery charge
  warning light illuminates continuously when the power switch is in the READY to drive position." [V]
  HSE INDG139 para 12, whole: "Hydrogen and oxygen are usually produced inside a battery when it is being
  charged. A source of ignition – for example, a flame, a spark, a cigarette or any hot object, electrical
  equipment, a mobile phone – will often cause mixtures of these gases to ignite and explode. The
  explosion is often so violent that it shatters the battery and produces a highly dangerous shower of
  fragments and corrosive chemicals." [V, the leaflet's spaced dashes]; its "don't" list on page 1
  includes "Wear a watch, ring, chain, bracelet or any other metal item." [V]. The AA flat-battery page:
  "If your car battery is flat and your car is less than three years old, then there's a decent chance
  you'll be able to revive your battery with a jump start or simple recharge. This is also the case if you
  accidentally left an interior light on in your car and the battery was drained because of it." [V]

## Stage 4 note, lesson 01 (2026-09-26)

*Re-read on 26 September 2026 by lesson 1's Stage 4 reviewer and, for the items marked (fixer), again
by its fixer, with curl and a browser User-Agent (no personal data in any header), text extracted with
a small HTML stripper, the GOV.UK content API, the eCFR versioner API or pdftotext. Quotations marked
[V] were copied from that extracted text. Nothing earlier in this file was wrong; this note adds what
the fix used.*

- **The Road Vehicles (Construction and Use) Regulations 1986, reg 27** (fixer),
  https://www.legislation.gov.uk/uksi/1986/1078/regulation/27, the regulation read in full. Great
  Britain. Reg 27(1)(b): a vehicle is not to be used on a road if "the tyre is not so inflated as to
  make it fit for the use to which the motor vehicle or trailer is being put" [V]. The regulation does
  not mention the vehicle maker's specification; the Highway Code's Annex 6 MUST line ("Tyres MUST be
  correctly inflated to the vehicle manufacturer's specification for the load being carried." [V])
  cites "Law CUR reg 27" [V], so the maker's-specification wording is the Code's statement of the law.
  Reg 27(3): "Paragraph (1) (a) does not prohibit the use on a road of a passenger vehicle (not being a
  bus) by reason only of the fact that a wheel of the vehicle is fitted with a temporary use spare
  tyre, unless the vehicle is driven at a speed exceeding 50 mph." [V]
- **The Road Vehicles Lighting Regulations 1989, reg 23** (fixer),
  https://www.legislation.gov.uk/uksi/1989/1796/regulation/23. Great Britain. Reg 23(1): "No person
  shall use, or cause or permit to be used, on a road a vehicle unless every lamp, reflector, rear
  marking and device to which this paragraph applies is in good working order and, in the case of a
  lamp, clean." [V] Annex 6's clean-lights MUST cites it ("Laws RVLR 1989 regs 23 & 27 , & CUR regs 30
  & 61" [V], as recorded in "Gate closures, lesson 01").
- **The Highway Code, Annex 6**, content API (updated 29 January 2022), re-read by the reviewer. Adds to
  "Gate closures, lesson 01": "If your engine overheats, you should wait until it has cooled naturally.
  Only then remove the coolant filler cap and add water or other coolant." [V] (the rule is conditional
  on an overheat); "Tyre pressures. Check weekly. Do this before your journey, when tyres are cold." [V];
  "Cars, light vans and light trailers MUST have a tread depth of at least 1.6 mm across the central
  three-quarters of the breadth of the tread and around the entire circumference." [V]
- **nidirect, "Introduction to the Highway Code"**: the "same two voices" line rests on the
  introduction only (as "Gate closures, lesson 01" records); no Northern Ireland rule was opened.
- **CalRecycle, "Check Your Number"** (fixer), https://calrecycle.ca.gov/usedoil/oilchange/. Part A §6's
  quotations stand, in this order on the page: "The old standard of 3,000 miles is out of date and no
  longer applies to most cars." [V] then "Many cars, even older models, can be driven up to 5,000,
  7,500, 10,000, and even 15,000 miles before needing an oil change." [V], and "CalRecycle does not make
  recommendations regarding oil change frequency for any specific make or model of vehicle" [V]. The
  page gives a spread of figures; it declines only to recommend for a make or model.
- **GAO-15-705** (fixer), August 2015, re-read from the Internet Archive's copy of
  https://www.gao.gov/assets/gao-15-705.pdf (capture 20260109053421; gao.gov refuses curl). Page 1:
  "As of July 2015, we found 16 states with periodic inspection programs." [V] The same paragraph gives
  the mid-1970s high point as "31 states and the District of Columbia" [V]. This is the most recent
  official national count this course found; the course does not claim it is the last one made.
- **Toyota, 2023 Corolla Owner's Manual (US), OM02568U** (fixer), pdftotext -layout, pp. 397 and 398
  ("Tires and wheels"). Four tyre types, not two: Type A "195/65R15 91S" and Type B "205/55R16 91H" as
  "Gate closures, lesson 01" records; Type C "225/40R18 88V" [V] (p. 397) and Type D "225/40R18 88W"
  [V] (p. 398), each front "33 psi (230 kPa, 2.3 kgf/cm2 or bar)" [V] and rear "30 psi (210 kPa, 2.1
  kgf/cm2 or bar)" [V]. Compact spare "60 psi (420 kPa, 4.2 kgf/cm2 or bar)" [V] for all four.
- **Honda, 2024 Civic Sedan, "If a Tire Goes Flat"**, re-read by the reviewer: "never get under the
  vehicle when it is supported only by the jack" [V]; "your foot or a pipe" [V].
- **Mazda3 (European English)**: "Never go under the vehicle while it is jacked up" [V] (SOURCES Part E
  §4, not re-read at Stage 4). "If you are unsure of how tight the nuts should be, have them inspected at
  an expert repairer" [V] continues ", we recommend an authorised Mazda repairer" [V].
- **Nissan (UK), 2023 LEAF (.shtml)**, re-read by the reviewer: "DO NOT GET UNDER A VEHICLE THAT IS
  SUPPORTED BY A JACK." [V]
- **Ford, 2024 Maverick Owner's Manual**, capture 20250505042038, p. 309, re-read by the reviewer: "Do
  not remove the coolant reservoir cap when the engine is on or the cooling system is hot. Wait 10
  minutes for the cooling system to cool down. Cover the coolant reservoir cap with a thick cloth to
  prevent..." [V, the sentence continues past the capture's extracted line]. Ford's handbook permits
  the cap off after the wait and under a cloth, for that car; the course's "cold" condition (OUTLINE
  decision 5) is stricter and is labelled as the course's.
- **DVSA, MOT inspection manual, "Introduction"** (updated 1 June 2026), re-read by the reviewer. The
  quotations in "Gate closures, lesson 01" stand, and "The MOT test must be carried out without
  dismantling, so it is not always possible to inspect some testable items." [V]
- **The textbook contents (Part A §4)**, not re-read: the reviewer's check of lesson 1's "the same
  way" used Part A §4's recorded contents. Halderman puts "Tires and Wheels" inside Steering and
  Suspension; Erjavec's "45. Tires and Wheels." sits in Suspension and Steering and "35. Hybrid
  Vehicles." and "36. Electric Vehicles." under Engine Performance; Denton and Pells' top level is
  engine, electrical, chassis and transmission systems. The three share a core, not a whole division.

## Gate closures, lesson 07 (2026-09-26)

*Read on 26 September 2026 by the lesson 7 drafter, with curl and a browser User-Agent (no personal
data in any header), text extracted with a small HTML stripper, the GOV.UK content API, the eCFR
versioner API (version of 24 September 2026) or pdftotext. Quotations marked [V] were copied from
that extracted text; curly apostrophes are written straight. Nothing here clears an entry on the
`unread:` line.*

**G-T6 (NHTSA's 511): closed by re-reading the latest capture.** NHTSA, "Tires",
https://www.nhtsa.gov/vehicle-safety/tires, live page 403 to curl. The Internet Archive's CDX index
lists no capture after 20260924154655, and every capture from 24 September carries the same content
digest, so capture 20260924154655 was re-read in full. "In 2024, a total of 511 people died on the
road in tire-related crashes." [V] stands. New lines used by lesson 7:
- "Underinflated tires are visually difficult to detect." [V] "It is recommended that you inspect
  tires monthly with an accurate gauge. The TPMS is not intended to be a substitute for regular tire
  maintenance." [V]
- "Keep a tire pressure gauge in your vehicle. A tire can suddenly lose pressure if you drive over a
  pothole or bump into a curb when you park." [V]
- The label gives the pressure "measured in both kilopascals (kPA) and pounds per square inch" (the
  sentence contains a dash; paraphrase only).
- Step 3: "If the tire pressure is too high in any of the tires, slowly release air by gently
  pressing on the tire valve stem with the edge of your tire gauge until you get to the correct
  pressure." [V] Step 4: "If the tire pressure is too low, note the difference between the measured
  tire pressure and the correct tire pressure. These "missing" pounds of pressure are what you will
  need to add." [V] "At a service station, add the missing pounds of air pressure to each tire that
  is under inflated." [V]
- The warm-tyre passage continues after Part B's "(sentence continues)": "than to drive with a
  significantly underinflated tire." [V] and "Since this is a temporary fix, don't forget to recheck
  and adjust the tire's pressure when you can obtain a cold reading." [V] Also: "To get an accurate
  tire pressure reading, you must measure tire pressure when the tires are cold or compensate for the
  extra pressure in warm tires." [V]
- TPMS: "Tire pressure monitoring systems monitor the tire pressure through sensors located in the
  tires (direct system) or wheel speed use and other vehicle sensors (indirect system)." [V] "All
  passenger cars, light trucks and vans that are model year 2008 or newer are required to come
  equipped with this feature." [V] "When the TPMS symbol appears on your dashboard, it means at least
  one of your tires is significantly underinflated. You should inspect your tires and check the tire
  pressure as soon as possible." [V] The cold-morning line continues: "This is likely caused by
  marginally low tire pressure that dips below the warning threshold overnight but rises to an
  acceptable level as the tires heat up through vehicle operation or an increase in external
  temperatures." [V] After the malfunction sentence: "The flashing sequence followed by continuous
  illumination of the warning lamp will repeat at each subsequent vehicle start-up until the
  malfunction is corrected. You should contact your vehicle dealer for a system inspection." [V]
- Age and tread (for lesson 8): "Tire aging occurs when the rubber and other components in a tire
  change over time due to service, storage, and environmental conditions." [V] "Most of us drive our
  vehicles enough that the tires' treads wear out, and we replace our tires before aging becomes an
  issue." [V] "In addition to infrequent use, exposure to sunlight and warmer climate, poor storage
  and poor maintenance also contribute to tire aging." [V] "You cannot detect tire aging simply by
  looking at your tires." [V] "As tires age, they are more prone to failure." [V] "Look on both sides
  of the tire. The TIN may not be on both sides." [V] "You should stop using tires for several
  reasons, including if a tire's tread is worn down to a minimum depth using the penny test, signs of
  physical damage (cuts, cracks, bulges, etc.), or signs of irregular wear or other damage due to
  underinflation or overloading." [V] "Tire tread provides the gripping action and traction that
  prevents your car or truck from slipping and sliding, especially when the road is icy or wet." [V]
  "Check your tire's tread at least once a month when you're checking their pressure." [V]
- Grades: "A control tire is assigned a grade of 100. Other tires are compared to the control tire.
  For example, a tire grade of 200 should wear twice as long as the control tire." [V]

**49 CFR 571.138 (FMVSS 138), full section re-read.** S3: a TPMS is "a system that detects when one or
more of a vehicle's tires is significantly under-inflated and illuminates a low tire pressure warning
telltale." [V] S4.2(a) as Part D records. Table 1, column 3, "P-metric—Standard Load": minimum
activation pressure 140 kPa, 20 psi [V] ("Extra Load" 160 kPa, 23 psi). S4.4(c)(2): a combined
telltale "Flashes for a period of at least 60 seconds but no longer than 90 seconds" [V], then stays
lit. S4.5(a), the required owner's-manual text, includes: "Each tire, including the spare (if
provided), should be checked monthly when cold and inflated to the inflation pressure recommended by
the vehicle manufacturer on the vehicle placard or tire inflation pressure label." [V] "Accordingly,
when the low tire pressure telltale illuminates, you should stop and check your tires as soon as
possible, and inflate them to the proper pressure." [V] "Driving on a significantly under-inflated
tire causes the tire to overheat and can lead to tire failure. Under-inflation also reduces fuel
efficiency and tire tread life, and may affect the vehicle's handling and stopping ability." [V]
"When the malfunction indicator is illuminated, the system may not be able to detect or signal low
tire pressure as intended. TPMS malfunctions may occur for a variety of reasons, including the
installation of replacement or alternate tires or wheels on the vehicle that prevent the TPMS from
functioning properly." [V] S7.1 begins with vehicles "manufactured on or after October 5, 2005" [V];
S7.3: "Except as provided in S7.7, all vehicles manufactured on or after September 1, 2007 must
comply with all requirements of this standard." [V] The standard gives no reason for the 25 per cent
figure.

**49 CFR 571.110 (FMVSS 110), S4.2.1 and S4.3 re-read.** S4.2.1.1: "The vehicle maximum load on the
tire shall not be greater than the applicable maximum load rating as marked on the sidewall of the
tire." [V] S4.2.1.2: "The vehicle normal load on the tire shall not be greater than 94 percent of the
load rating at the vehicle manufacturer's recommended cold inflation pressure for that tire." [V]
S4.3 places the placard on the driver's side B-pillar, and for a car without one names other places in
order, as Part D records.

**49 CFR 574.5, re-read.** "The first and second symbols of the date code must identify the week of
the year" [V]; "The third and fourth symbols of the date code must identify the last two digits of
the year of manufacture." [V] The 0109 example stands.

**49 CFR 575.104, (c) and the Figure 2 text re-read.** The treadwear sentence continues: "The relative
performance of tires depends upon the actual conditions of their use, however, and may depart
significantly from the norm due to variations in driving habits, service practices and differences
in road characteristics and climate." [V] Traction: "Warning: The traction grade assigned to this tire
is based on straight-ahead braking traction tests, and does not include acceleration, cornering,
hydroplaning, or peak traction characteristics." [V]

**The Highway Code, Annex 6** (content API, updated 29 January 2022), tyre paragraph re-read. New lines:
"Your brakes and steering will be adversely affected by under-inflated or over-inflated tyres." [V]
"Excessive or uneven tyre wear may be caused by faults in the braking or suspension systems, or wheels
which are out of alignment. Have these faults corrected as soon as possible." [V] "Tyres should also be
free from certain cuts and other defects." [V]

**The Road Vehicles (Construction and Use) Regulations 1986, reg 27, the whole regulation re-read on
the live page.** A correction to "The tread rule, stated exactly" and Part C §3: **"breadth of tread"
is defined in reg 27(6)(a), not 27(5).** Reg 27(5) is about recut tyres ("A recut pneumatic tyre shall
not be fitted to any wheel of a motor vehicle or trailer if" [V]). 27(6)(a) also defines "tread
pattern", excluding "(i) tie bars or tread wear indicators; (ii) features which are designed to wear
out substantially before the rest of the pattern under normal conditions of use; and (iii) other
minor features" [V]. Reg 27(1)(a): "the tyre is unsuitable having regard to the use to which the
motor vehicle or trailer is being put or to the types of tyres fitted to its other wheels;" [V]
27(1)(h) in full: "the tyre is not maintained in such condition as to be fit for the use to which the
vehicle or trailer is being put or has a defect which might in any way cause damage to the surface of
the road or damage to persons on or in the vehicle or to other persons using the road;" [V] The
10-year rule, 27(1)(i) to (k), is limited by 27(1A) to buses, minibuses and heavy goods vehicles, as
Part C records.

**DVSA, MOT inspection manual, section 5 "Axles, wheels, tyres and suspension"**,
https://www.gov.uk/guidance/mot-inspection-manual-for-private-passenger-and-light-commercial-vehicles/5-axles-wheels-tyres-and-suspension,
content API, updated 1 June 2026; 5.2.1 to 5.2.3 read in full. New lines:
- "For example, a 215/55R15 has an aspect ratio of 55%." [V] The manual decodes no other part of the
  size.
- "In simple terms, grooves containing tread wear indicators (TWI) or grooves cut as deep as those
  containing the wear indicators when new, are considered to be primary grooves. Other grooves or
  sipes that are not cut as deep as the primary grooves are secondary grooves and are not to be
  considered when assessing tread depth." [V]
- TPMS: "The TPMS warning lamp (see diagram 3) will generally illuminate and go off again when the
  ignition is switched on. If the system has identified a previous pressure loss, the lamp will remain
  illuminated. This does not automatically mean the system has a malfunction. In the event of a system
  malfunction, the lamp may flash a number of times and then remain on." [V]
- "Tyres with a three-digit code will be more than 10 years old." [V] "The first two digits of the code
  represent the week of manufacture of the tyre and the second two digits represent the year of
  manufacture." [V]
- Cuts: "Before failing a cut, you must make sure it's the cords that you can feel not a foreign
  object. If you're not sure, then you should pass and advise." [V] "If you notice a defect on a spare
  tyre, you should advise the vehicle presenter." [V]
- Defect table, **one line Part C did not record**: "(d)(i) A tyre with a cut in excess of the
  requirements deep enough to reach the ply or cords" is "Major" [V]. The rest stand: (d)(ii) lump,
  bulge or tear, Dangerous; (e) tread depth, Dangerous; (h) TPMS, Major; (l) "Tyre obviously
  under-inflated", Minor.
- Introduction, section 1 (read today for the definition): "category M1 vehicle A vehicle with 4 or
  more wheels used for the carriage of passengers, with no more than 8 passenger seats in addition to
  the driver's seat." [V] The class table lists "Cars and Taxis - category M1" [V].

**G-T3 (UK TPMS fitment): not closed; fallback written.** No UK or UN regulation was read. Lesson 7
states no UK fitment law and gives the MOT manual's "M1 vehicles first used on or after 1 January
2012" as what the MOT tests.

**G-G3: fallback.** TyreSafe is labelled "a UK tyre safety charity backed by tyre makers, carmakers
and retailers". **TyreSafe, "Check your pressures"**, re-read (last updated 16 September 2026). New
lines: "Pressure affects the tyre's speed capability, load carrying capacity, handling response, wear
rate and overall safety. Underinflated tyres also use more fuel." [V] "Low tyre pressure will increase
the chances of tyres suffering catastrophic failure." [V] "While your car is likely to have a Tyre
Pressure Monitoring System (TPMS), you should always use an accurate pressure gauge to check the
settings are correct." [V] The page offers "one of our supporter websites" [V] to look up a car's
pressure; not used.

**AAA Exchange, "Tire Safety and Maintenance"**, re-read in full, undated. New lines: "Over inflation:
Too much air pressure causes mostly the tire's middle section to contact the road." [V] "Under
inflation: Too little air pressure causes mostly the tire's outer edges to contact the road. This
creates wear primarily on both edges of the tire tread, with less wear in the center." [V] "Tread wear
on one edge of the tire: This typically occurs when the wheels are out of alignment." [V] "Check your
car's tire pressure at least once a month with a quality gauge" [V]; "The digital and dial designs
tend to be more accurate and easier to read, although a good pen/stick gauge will do the job as
well." [V] "Checking tire pressure on a car that has warm tires can result in a pressure reading of
up to 5 psi higher than the recommended pressure." [V] "On older cars the decal may be in the glove
box or inside the fuel filler door." [V] Tread: "Tires depend on good tread condition depth to
maintain traction and to shed water on wet roads." [V] "Take measurements in three locations across
the tire's tread: (1)outer edge, (2) center, and (3) inside edge." [V] The page's stopping-distance
figures are attributed to a tyre tester this course did not read, and are not used.

**NHTSA, "Winter Weather Driving Tips"**, capture 20260812080428 (the latest in the CDX index), tyre
section re-read: the Part B quotations stand. Also: "Inspect your tires at least once a month and
before long road trips." [V]

**New York State DMV, "New York State Vehicle Safety/Emissions Inspection Program"**, capture
20260710141515 re-read (the next capture, 20260712164006, is a 403 page). The tyre items sit under
"Tires (Except Spare)" [V]; the tread and pressure lines stand as Part D records (the page's own "in
not within" typo sits inside the pressure sentence).

**Road Traffic Act 1988 s.41A and Road Traffic Offenders Act 1988 s.48**, re-read on the live pages;
Part C's quotations stand.

**G-N4 (photographs), lesson 7: not closed.** Wikimedia Commons searched through its API.
"File:DOT tire code.jpg" (CC BY-SA 4.0) was rejected: its labels ("Tire Size", "Tire Type Code")
follow an older layout of the code and don't match 49 CFR 574.5's current structure, so it would
contradict the lesson. No licensed photograph of a placard was found. Lesson 7 has no photograph.

## Stage 4 note, lesson 02 second pass (2026-09-26)

- RAC, "What is a cambelt and how do you replace it?", FAQ "When should a cambelt be changed?",
  fetched live 2026-09-26 [V]: "generally, it's advised to replace it every 40,000 to 100,000
  miles." The page's introduction says 60,000 to 100,000 (already recorded). The page disagrees
  with itself; lesson 02 quotes both and leans on neither.

## Gate closures, lesson 06 (2026-09-26)

*Read by the lesson 06 drafter on 26 September 2026 with curl and a browser User-Agent (no personal data
in any header), the eCFR versioner API (point in time 2026-09-24, compressed response), the GOV.UK
content API, and pdftotext (-layout and -raw). Quotations marked [V] were copied from that extracted text.
**G-H4 is closed** (a current handbook gives a brake-fluid interval; a current handbook states the
pad-wear link; a current handbook says brake fluid damages paint). **G-H13 is not closed**: no source read
explains how a hydraulic brake turns pedal effort into braking; the regulation's and handbooks' words name
the parts (master cylinder, reservoir compartments, wheel cylinders or caliper pistons) and the lesson says
no more. **G-H1 is not closed for steering and suspension**: no source read explains how either works; the
lesson gives owner-visible signs from Annex 6, Nissan's and Ford's handbooks and the MOT manual. Nothing
here clears an entry on the `unread:` line (the MOT manual's section 2, Steering, stays unread).*

- **49 CFR 571.116, FMVSS No. 116** (eCFR versioner, 2026-09-24; last amended 2017-09-05). **Read: S1 to
  S5.2.2.3 in full, and S6.2 (the wet test).** S2: "The purpose of this standard is to reduce failures in
  the hydraulic braking systems of motor vehicles which may occur because of the manufacture or use of
  improper or contaminated fluid." [V] S5.1.1 and S5.1.2 as Part A records ("(a) DOT 3: 205 °C. (401
  °F.)."; "(b) DOT 4: 230 °C. (446 °F.)."; "(a) DOT 3: 140 °C. (284 °F.)."; "(b) DOT 4: 155 °C. (311
  °F.)." [V]); these are minimums: "the ERBP shall not be less than the following value for the grade
  indicated" [V] (ERBP, "Equilibrium reflux boiling point" [V]). **The wet test, exactly (S6.2.5):** the
  fluid under test and a reference fluid (SAE TEGME) are humidified in the same desiccators; "When the
  water content of the SAE fluid reaches 3.70 ±0.05 percent by weight (average of the duplicates). remove
  the two test fluid specimens from their desiccators" [V, the source's full stop]; the test fluid's own
  water content is then measured, not set. So "wet" means humidified until the **reference** fluid holds
  3.70 per cent water, not that the brake fluid under test does (OUTLINE's "wet defined at about 3.7 per
  cent water" is loose; Part A's wording is right). S5.2.2.2(g)(1): "FOLLOW VEHICLE MANUFACTURER'S
  RECOMMENDATIONS WHEN ADDING BRAKE FLUID." [V] S5.1.14: "DOT 3, DOT 4, and DOT 5.1 non-SBBF—colorless to
  amber." [V, the source's em dash; not quoted in a lesson] and "DOT 5 SBBF—purple." [V, likewise].
- **49 CFR 571.135, FMVSS No. 135** (eCFR versioner, 2026-09-24; last amended 2023-12-05). **Read: S1 to
  S5.5.5 in full.** S3: it applies "to passenger cars manufactured on or after September 1, 2000" [V] and
  to light multipurpose vehicles, trucks and buses from 1 September 2002. S4: "Regenerative braking system
  or RBS means an electrical energy system that is installed in an EV for recovering or dissipating kinetic
  energy, and which uses the propulsion motor(s) as a retarder for partial braking of the EV while
  returning electrical energy to the propulsion battery(s) or dissipating electrical energy." [V] S5.1.3(b):
  "For an EV that is equipped with both ABS and RBS that is part of the service brake system, the ABS must
  control the RBS." [V] S5.4.1: "A master cylinder shall have a reservoir compartment for each service
  brake subsystem serviced by the master cylinder. Loss of fluid from one compartment shall not result in a
  complete loss of brake fluid from another compartment." [V] S5.4.2 sizes the reservoir: "a total minimum
  capacity equivalent to the fluid displacement resulting when all the wheel cylinders or caliper pistons
  serviced by the reservoirs move from a new lining, fully retracted position (as adjusted initially to the
  manufacturer's recommended setting) to a fully worn, fully applied position" [V]. S5.4.4 as Part A,
  continuing: "This requirement is deemed to have been met if the vehicle is equipped with a transparent
  brake fluid reservoir or a brake fluid level indicator meeting the requirements of S5.5.1(a)(1)." [V]
  S5.5.1(a)(1): the indicator comes on at "A drop in the level of the brake fluid in any master cylinder
  reservoir compartment to less than the recommended safe level specified by the manufacturer or to
  one-fourth of the fluid capacity of that reservoir compartment, whichever is greater." [V] S5.5.1(c):
  "Application of the parking brake." [V] S5.5.1(d): "Brake lining wear-out, if the manufacturer has elected
  to use an electrical device to provide an optical warning" [V]. S5.5.2: indicators light as a check "when
  the ignition (start) switch is turned to the “on” (“run”) position when the engine is not running" [V]
  (the first of the options). S5.5.3: an indicator "shall remain activated as long as the condition exists"
  [V]. S5.5.5(b): a common indicator "shall display the word “Brake.”" [V]
- **DVSA, MOT inspection manual, section 1 "Brakes"** (content API; section updated 1 June 2026). **Read:
  the section in full once; 1.1.10, 1.1.13, 1.6 and 1.8 closely.** Great Britain. 1.1.10: "Hydraulic brake
  fluid level checks are confined to transparent reservoirs or where an indicator is fitted. Reservoir caps
  should not be removed." [V]; "A brake fluid warning lamp may be shared with other components, for example
  to indicate that brake pads are worn or the parking brake is applied." [V]; defects "Brake fluid below
  minimum mark" Minor, "Brake fluid significantly below minimum mark" Major, "Brake fluid not visible"
  Dangerous, "Master cylinder leaking" Dangerous, "Master cylinder reservoir cap missing" Major, "Brake fluid
  warning light illuminated or defective" Minor [V each]. 1.1.13: "Some brake pads have metal wear
  indicators so that when the pads become excessively worn the metal indicator touches the disc making a
  squealing sound." [V]; "An illuminated brake wear indicator is not a reason for failure." [V]; "Brake
  lining or pad worn down to wear indicator" Major, "Brake lining or pad worn below 1.5mm" Dangerous [V].
  1.6: "It’s not permissible to remove or disable the ABS from a vehicle first used on or after 1 January
  2010." [V]; "Warning device shows system malfunction" Major [V]. 1.8: "On many vehicles, you will not be
  able to see if the brake fluid is contaminated. You should only fail a vehicle if you can clearly see that
  the fluid is contaminated." [V]; "Brake fluid contaminated" Major [V].
- **DVSA, MOT inspection manual, section 5, 5.3.2 "Shock absorbers"** (content API; updated 1 June 2026).
  **Read: 5.3 to 5.3.2 in full, the 5.3 contents list.** "A shock absorber must be rejected if negligible
  damping effect becomes evident at any point during the inspection." [V]; "Slight seepage causing a film
  of fluid on a shock absorber is not a reason for rejection." [V]; "A shock absorber which has negligible
  damping effect" Major; "A shock absorber damaged to the extent that it does not function or showing signs
  of severe leakage" Major [V]. The 5.3 contents list: "Springs", "Shock absorbers", "Suspension arms, rods,
  struts, sub-frames, anti-roll bars etc.", "Suspension joints, pins and bushes" [V]. Nothing in it explains
  what the parts do.
- **The Highway Code, Annex 6** (content API, 2022-01-29), re-read in full. The shock-absorber item whole:
  "continues to bounce after pushing down on the front or rear, its shock absorbers are worn. Worn shock
  absorbers can seriously affect the operation of a vehicle and should be replaced" [V] (the list item, after
  "If your vehicle"). The pull item whole: "pulls to one side when braking, it is most likely to be a brake
  fault or incorrectly inflated tyres. Consult a garage or mechanic immediately" [V]. "Take special care
  that lights, brakes, steering, exhaust system, seat belts, demisters, wipers, washers and any audible
  warning systems are all working." [V]
- **The Highway Code, Rules 103 to 158** (content API, 2023-09-17). **Read: Rules 117 to 123 in full.** Rule
  120 whole: "ABS. If your vehicle is fitted with anti-lock brakes, you should follow the advice given in the
  vehicle handbook. However, in the case of an emergency, apply the footbrake firmly; do not release the
  pressure until the vehicle has slowed to the desired speed. The ABS should ensure that steering control
  will be retained, but do not assume that a vehicle with ABS will stop in a shorter distance." [V] Rule 121
  whole: "Brakes affected by water. If you have driven through deep water your brakes may be less effective.
  Test them at the first safe opportunity by pushing gently on the brake pedal to make sure that they work.
  If they are not fully effective, gently apply light pressure while driving slowly. This will help to dry
  them out." [V] Both are advice (should, do), not MUST rules.
- **Nissan, 2024 LEAF Owner's Manual (US)**, PDF, re-read in pdftotext -raw. **p. 2-17**: the brake light
  "remains illuminated for about a few seconds" at start-up; "If the light illuminates at any other time, it
  may indicate that the hydraulic brake system is not functioning properly. If the BRAKE warning light
  illuminates, stop the vehicle immediately and have the system checked." [V, hyphenation joined]; the low
  brake fluid warning: "If the brake fluid level is correct, have the warning system checked." [V]; "If you
  judge the brake system to be safe, drive carefully to the nearest service station for repairs. Otherwise,
  have your vehicle towed because driving it could be dangerous." [V]; "If the brake fluid level is below the
  minimum or MIN mark on the brake fluid reservoir, do not drive until the brake system has been checked." [V]
  **pp. 5-160 to 5-163** ("Brake system", "Anti-lock Braking System (ABS)"): "Avoid resting your foot on the
  brake pedal while driving. This will cause overheating of the brakes, wearing out of the brake pads and
  shoes faster, and will reduce driving range." [V]; "Overheated brakes may reduce braking performance and
  could result in loss of vehicle control." [V]; wet brakes: "the braking distance will be longer and the
  vehicle may pull to one side during braking." [V]; ABS: "The ABS controls the brakes so the wheels do not
  lock during hard braking or when braking on slippery surfaces. The system detects the rotation speed at
  each wheel and varies the brake fluid pressure to prevent each wheel from locking and sliding." [V]; "By
  preventing each wheel from locking, the system helps the driver maintain steering control and helps to
  minimize swerving and spinning on slippery surfaces." [V]; "Remember that stopping distances on slippery
  surfaces will be longer than on normal surfaces even with ABS." [V]; "Stopping distances may also be longer
  on rough, gravel or snow covered roads, or if you are using tire chains." [V]; "If the computer senses a
  malfunction, it switches the ABS off and illuminates the ABS warning light on the instrument panel. The
  brake system then operates normally, but without anti-lock assistance." [V]; "When the ABS senses that one
  or more wheels are close to locking up, the actuator rapidly applies and releases hydraulic pressure. This
  action is similar to pumping the brakes very quickly." [V]; "The vehicle brakes are not affected by
  regenerative brake system operation." [V]. **p. 8-7** ("Brake fluid"): "Use only new fluid from a sealed
  container. Old, inferior or contaminated fluid may damage the brake system." [V]; "Clean the filler cap
  before removing." [V]; "Do not spill the fluid on any painted surfaces. This will damage the paint." [V];
  and Part B's quotations, which stand. **pp. 9-3 to 9-4** (owner checks): "Brakes: Check that the brakes do
  not pull the vehicle to one side when applied." [V]; "Wheel alignment and balance: If the vehicle pulls to
  either side while driving on a straight and level road, or if you detect uneven or abnormal tire wear,
  there may be a need for wheel alignment." [V]; "If the steering wheel or seat vibrates at normal highway
  speeds, wheel balancing may be needed." [V]; "Steering wheel: Check for changes in the steering
  conditions, such as excessive free play, hard steering or strange noises." [V]; Part B's brake-pedal line
  stands. **pp. 9-6 to 9-9** (maintenance schedules): "Perform at number of miles, kilometers or months,
  whichever comes first." [V]; the standard schedule lists "Replace brake fluid" [V] at "30,000 miles/(48,000
  km)/ 24 months" [V, line break joined] and at each 30,000 miles thereafter; the severe-use schedule adds it
  at 15,000 miles/12 months and every 30,000 miles after that (so every 15,000 miles or 12 months); the
  severe conditions include "Repeated short trips of less than 5 miles (8 km)." [V]; inspection items
  include "Suspension components (shocks, sub-frame, tie rods)" [V], "Steering gear and linkage" [V] and
  "Brake pads & rotors" [V]. Nissan's figures are Nissan's, for this car.
- **Ford, 2024 Maverick Owner's Manual** (US and Canada), Internet Archive capture 20250505042038, read in
  pdftotext -raw. **pp. 192 to 194 read in full, and p. 379.** p. 192: "Wet brakes result in reduced braking
  efficiency. Gently press the brake pedal a few times when leaving a car wash or driving from standing
  water to dry the brakes." [V]; "The anti-lock braking system does not eliminate the risk of crash when:"
  [V], followed by driving too close, hydroplaning, cornering too fast and a poor road surface; "This system
  helps you maintain steering control during emergency stops by keeping the brakes from locking." [V]; "Note:
  If the system activates, the brake pedal could pulse and travel further. Maintain pressure on the brake
  pedal." [V]. p. 193: "WARNING: Do not use any fluid other than the recommended brake fluid as this will
  reduce brake efficiency." [V]; "Note: To avoid fluid contamination, the reservoir cap must remain in place
  and fully tight, unless you are adding fluid." [V]; "WARNING: Do not allow the fluid to touch your skin or
  eyes." [V]; "1. Park your vehicle on a level surface." [V]. p. 194: "WARNING: Driving your vehicle with the
  warning lamp on is dangerous. A significant decrease in braking performance may occur. It may take you
  longer to stop your vehicle." [V]; "If a metal-to-metal, continuous grinding or continuous squeal sound is
  present, the brake linings may be worn-out and an authorized dealer should check them." [V]; "If the
  vehicle has continuous vibration or shudder in the steering wheel while braking, an authorized dealer
  should check your vehicle." [V]; "Brake fluid absorbs water over time which degrades the effectiveness of
  the brake fluid. Change the brake fluid at the specified intervals to prevent degraded braking
  performance." [V]. p. 379: Ford recommends "Dot 4 Low Viscosity (LV) High Performance Brake Fluid" [V,
  spacing restored]. p. 457: "For your scheduled maintenance service intervals, visit
  https://www.ford.com/support/maintenance-schedule." [V]; the handbook itself prints no brake-fluid
  interval. p. 459 multi-point inspection lists "Suspension components for leaks or damage" and "Steering
  and linkage" [V each].
- **Toyota, 2023 Corolla Owner's Manual (US), OM02568U**, PDF (URL as Part E), pdftotext -layout. **p. 147**:
  "If you hear a squealing or scraping noise (brake pad wear indicators)" [V, heading] "Have the brake pads
  checked and replaced by your Toyota dealer as soon as possible." [V]; "It is dangerous to drive the vehicle
  when the wear limits of the brake pads and/or those of the brake discs are exceeded." [V]. **pp. 308 to
  309** ("Checking and adding the brake fluid"): "The brake fluid level should be between the “MAX” and
  “MIN” lines on the tank." [V]; fluid type "FMVSS No.116 DOT 3 or SAE J1703 brake fluid" or "FMVSS No.116
  DOT 4 or SAE J1704 brake fluid" [V]; "Excess moisture in the brake fluid can cause a dangerous loss of
  braking efficiency. Use only newly opened brake fluid." [V]; "Take care as brake fluid can harm your hands
  and eyes and damage painted surfaces." [V]; "It is normal for the brake fluid level to go down slightly as
  the brake pads wear out or when the fluid level in the accumulator is high. If the reservoir needs
  frequent refilling, there may be a serious problem." [V]. This is the current handbook G-H4 asked for.
  **p. 356** ("Brake system warning light", red): it indicates that "The brake fluid level is low; or" "The
  brake system is malfunctioning" [V] and says "Immediately stop the vehicle in a safe place and contact your
  Toyota dealer. Continuing to drive the vehicle may be dangerous." [V]
- **Also read for lesson 06, [V]:** FMVSS 116 S1: "This standard specifies requirements for fluids for use in
  hydraulic brake systems of motor vehicles, containers for these fluids, and labeling of the containers."
  [V]; S5.2.2.2(g)(4): "CAUTION: DO NOT REFILL CONTAINER, AND DO NOT USE FOR OTHER LIQUIDS." [V] (the fourth
  warning). Nissan 2024 LEAF p. 5-162: "The Anti-lock Braking System (ABS) operates at speeds above 3 to 6
  mph (5 to 10 km/h)." [V]
  FMVSS 135 S5.4.4 whole: "Brake fluid reservoirs shall be so constructed that the level of fluid can be
  checked without need for the reservoir to be opened. This requirement is deemed to have been met if the
  vehicle is equipped with a transparent brake fluid reservoir or a brake fluid level indicator meeting the
  requirements of S5.5.1(a)(1)." [V]
  Ford 2024 Maverick p. 194, FAQ "Is brake noise considered normal?": "Occasional brake noise is normal." [V]

## Gate closures, lesson 08 (2026-09-26)

*Read on 26 September 2026 by the lesson 8 drafter, with curl and a browser User-Agent (no personal
data in any header), text extracted with a small HTML stripper or pdftotext, and the GOV.UK content
API. Quotations marked [V] were copied from that extracted text; curly apostrophes are written
straight. The reads shared with lesson 7 (reg 27 in full, the MOT manual's section 5, Annex 6, NHTSA
"Tires", 49 CFR 574.5 and 575.104, AAA Exchange, s.41A and s.48) are recorded in "Gate closures,
lesson 07" above. Nothing here clears an entry on the `unread:` line: "MIRA", "MIRA wet braking
test" and "Royal Mint 20p specification" stay on it.*

**G-T1 (the 20p band): not closed; fallback.** The width rests on the AA alone, attributed. **The AA,
"Check your tyres for proper tread depth"**, re-read in full ("Published: 29 October 2024 | Updated: 29
October 2024 | Author: The AA" [V]). Part B's quotations stand. New lines: "New tyres start with about 8
mm of tread depth" [V]; "You should consider replacing them at 3 mm" [V] (in the page's summary list,
above the body's "Aim to replace tyres before the tread wears below 2 mm." [V], so the page gives both);
"The best way to test your tyres is to use a calibrated tyre gauge." [V]; "To use, place the gauge into
the tyre's groove." [V]; "It could get you a fine of up to £2,500 and 3 points on your licence. And
that's just per tyre." [V] (the per-tyre points claim the Sentencing Council contradicts; not
repeated as fact); "You can expect around 1,000 miles out of your tyres if they're down to 2 mm of
tread." [V]; "You can expect to get around 20,000 miles out of 5 mm of tyre tread" [V] (the sentence
continues after a dash).

**G-T2 (the 44% test): not closed; fallback.** The report was not read, and the test house is not
named in the lesson. **TyreSafe, "How to Check Your Tyre Tread Depth"** (last updated 16 September
2026), re-read in full. Its 44% sentence names the test house and is paraphrased, not quoted. New
lines: "The deeper the tyre tread, the more water it can clear from the road surface and the better
its grip. As the tread wears down or water depth increases, grip is reduced." [V] "Aquaplaning occurs
when the water cannot be removed from between the tyre and the road." [V] "While the legal limit is
1.6mm, experts actually recommend that you have your tyres replaced sooner. You should have your tyre
replaced once it reaches 2mm and the minimum tread depth commonly advised by tyre and safety experts is
3mm." [V] "Tyre treads are designed to give good grip on wet roads but in general wet grip decreases as
the tyre tread depth approaches the legal minimum." [V] "For the same reason, motorists may wish to
consider replacing tyres before reaching the tyre tread limit." [V] "You should check your tyres at
least once a month and before any long journeys." [V] "Generally, tyres with 3mm of tread depth may last
between 10,000 and 20,000 miles. Actual lifespan can vary widely depending on factors like driving
style, tyre type, road surface, and maintenance. Manufacturors do not provide mileage predictions for
tread depth for this reason." [V, spelling as in source] "tyres with 2mm of tread depth may last ~1000
miles" [V]. "If you can't see the coin's outer band, your tyres are above the legal limit." [V] (the
page's own looser wording, beside the 20p page's "may be illegal"). The page still carries "three
penalty points PER tyre" [V]. **The 20p page** (last updated 11 December 2025) and **the condition
page** (last updated 11 December 2025) re-read: Part B's quotations stand.

**G-G3: fallback.** TyreSafe labelled as a charity backed by tyre makers, carmakers and retailers. The
"About TyreSafe" page (last updated 16 September 2026) re-read; it gives no income sources.

**TyreSafe supporter page, "Michelin"**, re-read in full. The sentence before Part B's quotation, which
concedes ground: "The fact that wet braking performance, which is key to safety, decreases as tyres
are used highlights the importance of evaluating worn tyres." [V] The cost and environment passage in
full: "But Michelin's Long-Lasting Performance approach goes beyond enabling everyone to insist on
tyres that stay safe from the first mile to the last: it's also good for the environment and
consumers' budgets. How? Because having tyres that are still safe when worn means changing our tyres
less often. That's better for the planet since it saves resources and reduces CO2 emissions." [V] The
page also makes a product claim about one of its tyres' braking distance after 18,000 miles; not used,
and no test data comparing depths is given.

**RAC Drive, "Tyre tread depth, UK law and tyre safety checks"** (page data "date":"2026-09-07"), re-read
in full. New lines: "The difference in wet braking distance between a tyre worn to 3mm and one worn to
1.6mm can be as much as 44%." [V] (the sentence before it names the test house and is not quoted);
"Driving a car with bald tyres can risk a fine of £2,500 and three penalty points. That's per tyre,
too." [V] (the per-tyre claim; not repeated as fact); "If your tyre tread is below or neat the legal
limit, we would recommend that you purchase a replacement tyre. Head over to RAC Tyres where we sell
everything from budget to premium brands." [V, "neat" as in source]. The RAC sells tyres as well as
breakdown cover. "We suggest drivers conduct the 20p test around every two weeks and before long
journeys." [V]

**AAA, "Tread Lightly: Worn Tires Put Drivers at Risk"** (news release, 7 June 2018), re-read in full.
The lede: worn tyres "can increase average stopping distances by a staggering 43 percent, or an
additional 87 feet" (the sentence continues after a dash) "when compared to new tires" [V]. "While
AAA's research found that tire performance does vary by brand, price is not necessarily an indicator of
quality. In fact, worn tire performance deteriorated significantly for all tires tested, including those
at a higher price point." [V] The warranty passage whole: "Unfortunately, current industry guidelines
and state laws and regulations frequently recommend that drivers wait until tread depth reaches 2/32"
to replace tires. Not only does this recommendation jeopardize a driver's safety, it minimizes
manufacturer warranty costs and is often paired with environmental concerns." [V] The test compared new
tyres with tyres worn to 4/32 inch; the release reports no 2/32 condition. The full research report it
links to was not read.

**Virginia State Police, Motor Vehicle Safety Inspection Manual (2026)**, 19VAC30-70-130 re-read in full
(pdftotext -layout). New lines: "NOTE: Measure in two adjacent tread grooves where tread is thinnest.
Refer to Figure 1. If either of the grooves measure 2/32 of an inch or more, no further measurements are
necessary and tread depth is satisfactory. Do not take measurements from the tread wear indicators."
[V] "If both adjacent grooves measure less than 2/32 of an inch, the tire tread depth must be measured
again at two additional equally spaced intervals around the circumference of the tire in a like manner
as the first measurement." [V] "If the tread depth is less than 2/32 of an inch in two adjacent tread
grooves at each of the equally spaced intervals, the tire must be rejected." [V] Item 7 rejects a tyre
with wear indicators "in contact with the pavement in any two adjacent grooves at three equally spaced
intervals around the circumference of the tire." [V] Item 8: "Any tire has a cut or puncture into the
fabric. This does not include a plug or patch that may be used as a manner of repair." [V] "Plugs or
patches shall be in the tread area only." [V] Item 10 covers "knots or bulges in its sidewalls" [V].
No age rule in the section.

**PennDOT Pub 45 (2-26), § 175.80(e)(1)**, re-read. Part D's quotations stand. Also "(iii) A part of ply
or cord is exposed." [V] and "(v) There is a bump, bulge or separation." [V] The (i) sentence continues
after a spaced hyphen to "less than 4/32-inch tread on front tires of the vehicles having a gross weight
in excess of 10,000 pounds." [V] No age rule in the paragraph.

**New York State DMV** (capture 20260710141515; see "Gate closures, lesson 07"): "Tire condition - check
for any fabric break or cut over the length or width of 1 inch, visible bumps, bulges or knots, and any
restricted use designation on the tire" [V] (the hyphen is the page's).

**49 CFR 393.75**, eCFR versioner API (version of 24 September 2026), re-read. "(b) Any tire on the front
wheels of a bus, truck, or truck tractor shall have a tread groove pattern depth of at least 4/32 of an
inch when measured at any point on a major tread groove." [V] "(c) Except as provided in paragraph (b)
of this section, tires shall have a tread groove pattern depth of at least 2/32 of an inch when measured
in a major tread groove." [V] **G-L13: fallback**, as OUTLINE gives it.

**Sentencing Council, "Tyres defective"** and **DVLA endorsement codes** (updated 27 January 2025),
re-read. Part C's quotations stand. The guideline's own table gives "Level 4" as "£2,500" [V], and its
maximum line reads "Maximum for vehicles up to 3.5 tonnes: Level 4 fine" [V].

**G-N4 (photographs), lesson 8: closed for one photograph.** Wikimedia Commons, "File:Autoreifen mit
Verschleißanzeige.JPG", https://commons.wikimedia.org/wiki/File:Autoreifen_mit_Verschlei%C3%9Fanzeige.JPG,
by Quallyptus, 19 November 2015, "Own work"; licence read from the file's metadata through the Commons
API: "CC0" [V], http://creativecommons.org/publicdomain/zero/1.0/deed.en. The file's description:
"Reifenprofil zur Veranschaulichung der Reifenverschleißanzeige" [V] (a tread shown to illustrate the
wear indicator). The picture shows a worn tread with "TWI" moulded near the shoulder; no brand is
legible. The file page itself, read the same day, states "This file is made available under the
Creative Commons CC0 1.0 Universal Public Domain Dedication." [V]

## Stage 4 note, lesson 05 (2026-09-26)

*Read by the lesson 05 fixer on 26 September 2026 with curl and a browser User-Agent (no personal data in
any header), text extracted by stripping tags, pdftotext -raw for HSE, or the GOV.UK content API.
Quotations marked [V] were copied from that extracted text.*

- **Correction: the Highway Code on the charge warning light.** Annex 6 (content API,
  `public_updated_at` 2022-01-29), re-read in full. The paragraph directly before the charge-light
  sentence: "When you turn the ignition key, warning lights will be illuminated but will go out when the
  engine starts (except the handbrake warning light). If they do not, or if they come on while you are
  driving, stop and investigate the problem, as you could have a serious fault." [V] Then "If the charge
  warning light comes on while you are driving, it may mean that the battery isn’t charging. This should
  also be checked as soon as possible to avoid loss of power to lights and other electrical systems." [V]
  The "also" adds a check on top of the stop-and-investigate advice. **Never cite the Highway Code as a
  "check soon" source for this light**; it sits with the stop-now sources, as advice (no MUST). Part B
  (c)5 and the contested-questions row 11 near the top carried the wrong framing and are marked in place.
  OUTLINE's lesson 5 entry carries it too and was not edited (fixer's scope).
- **The AA, "How to jump start a car in 9 steps"** (https://www.theaa.com/breakdown-cover/advice/using-jump-leads),
  "Last updated: 26 June 2024" [V]. Re-read. The battery-life line, whole: "On average, batteries last
  between 5 and 7 years but you should only consider changing a car battery when it's showing signs of
  deterioration." [V] and "If the battery's more than 5 years old and seems like it's struggling to start
  the car, get it checked out." [V] After a jump: "Charge the battery by driving normally (not in
  stop-start traffic) for at least 30 minutes." [V] The page advertises the AA's battery replacement
  service ("our Battery Assist team can replace a car battery on the same day" [V]). Part B's
  "On average, batteries last between 5 and 7 years" [V] was the line's first half only.
- **The AA, "10 essential car maintenance tips"**, "Updated: 10 July 2025" [V]. Re-read. The life line,
  whole: "Most car batteries have a life of 3 to 5 years, so if yours is getting a bit old replace it with
  a new one before it lets you down." [V] Directly followed by "Replace your battery easily with Battery
  Assist" [V]. "Battery problems are the number one cause of breakdowns at any time of year, and
  particularly for vehicles that aren't used very often." [V] gives no data, year or geography: quote it
  only as the AA's claim, never in the course's voice.
- **The AA, "What to do if your car has a flat battery"**, "Last updated 11 January 2024" [V]. Re-read.
  Part B's "2 or 3 years" line stands whole: "However, our mechanics see cases where the battery has
  failed after only 2 or 3 years because of how the car was driven." [V] "A flat battery is one of the
  top 10 breakdown causes." [V] stands.
- **The AA press release "AA gives power to electric drivers"**, 23 July 2021, re-read. Part A's
  quotations stand. The "onboard computer system" line is Ben Sheridan's, "AA Patrol of the Year" [V].
- **HSE INDG139(rev1)**, re-read (pdftotext -raw). Para 16, whole: "Valve-regulated (‘maintenance-free’)
  batteries are much less likely to release hydrogen than vented batteries. However, it is still
  important to take care when charging them. Gas pressure may build up inside the battery if it is
  charged too quickly or for too long. If this happens, the pressure relief valves in the battery may
  open and let the gases escape. An explosion is likely if this happens close to an ignition source." [V]
  Para 7's valve-regulated line is not to be quoted without para 16's warning.
- **fueleconomy.gov, "Driving More Efficiently"**, re-read. The 5-mile line sits under "Avoid Excessive
  Idling", in "Best Practices" introduced by "Turning your engine off when your vehicle is parked can
  save you money." [V]
- **Checked and not found:** no source read says a Nissan handbook tells owners to clean the battery
  terminals; only Ford's p. 457 "Battery connections. Clean if necessary." [V] (lesson 05 gate closures)
  is on record.

## Stage 4 note, lesson 07 (2026-09-26)

Primaries re-read live by the lesson 07 fixer, 26 September 2026, with curl (browser User-Agent, no
personal data in any header).

- **FMVSS 138 Table 1** (eCFR, 49 CFR 571.138, current). Column 3, minimum activation pressure: P-metric
  Standard Load 140 kPa, 20 psi; P-metric Extra Load 160 kPa, 23 psi; Load Range C 200 kPa, 29 psi; Load
  Range D 240 kPa, 35 psi; Load Range E 240 kPa, 35 psi [V]. S4.2(a) takes "whichever is higher" [V] of
  that and the 25 per cent point. **Correction for every later lesson, the script and the test: the TPMS
  trigger is "placard x 0.75" only on standard-load passenger tyres, and on those only when the placard
  is above about 26.7 psi (arithmetic).** On extra-load or light-truck tyres the floor can be higher. Any
  quoted "trigger" is the latest point the standard allows ("not more than 20 minutes after" [V]), not
  the car's own threshold: nothing in S4.2 stops a maker warning earlier, and no source read says how
  makers set it. NHTSA's cold-morning explanation opens "This is likely caused by" (Part B §1): keep
  "likely".
- **FMVSS 138 S4.5**, manual text: "TPMS malfunctions may occur for a variety of reasons, including the
  installation of replacement or alternate tires or wheels on the vehicle that prevent the TPMS from
  functioning properly." [V]
- **AAA Exchange, "Tire Safety and Maintenance"**, live, "Checking Air Pressure": "1. Remove the tire's
  valve cap. 2. Place the gauge over the tire's valve stem and press firmly so that no escaping air is
  heard. The tire gauge will indicate how much pressure is in the tire. 3. Adjust the tire's air pressure
  as needed. When adding air, push the air hose into the valve firmly, until the air stops escaping.
  Check the pressure every few seconds to help judge the amount of air going into the tire, until you
  reach the recommended air pressure." [V] "4. Replace the valve cap. 5. Repeat the process for the other
  tires. Don't forget the spare tire." [V] (The reviewer's suggested "this course read no guide to
  forecourt air lines" was not used: step 3 is one.)
- **The AA, "10 essential car maintenance tips"**, live, "Updated: 10 July 2025" [V]: "We recommend you
  check your tyres – including the spare – every 2 weeks, as tyres do naturally deflate over time." [V]
  (the dashes are the AA's). Part B §2's "every 2 weeks" stands; it is the tyres check as a whole, under
  the heading "Check tyre condition as well as pressure" [V].
- **DVSA, MOT inspection manual, Introduction** (GOV.UK content API, updated 1 June 2026): "If a vehicle
  has only minor defects, it will pass its MOT inspection and a test certificate will be issued." [V]
  and the M1 definition as recorded in "Gate closures, lesson 07" [V]. Both are the Introduction's, not
  section 5's: cite the Introduction for them.
- **49 CFR 575.104**, live: "a tire graded 150 would wear one and one-half (1 1/2) times as well on the
  government course as a tire graded 100" [V]; (c)(1) excludes "deep tread, winter-type snow tires" [V],
  not winter tyres in general.
- **NHTSA "Tires"** (capture 20260924154655): the lesson renders the inner quotation marks of "at least
  once a month when the tires are "cold," meaning ..." as single quotes so it reads as one quotation;
  `npm run quotes` reports that line as a miss, and the words are NHTSA's unchanged.

## Stage 4 note, lesson 06 (2026-09-26)

*Re-read by the lesson 06 fixer on 26 September 2026 with curl and a browser User-Agent (no personal data
in any header): the eCFR versioner API (point in time 2026-09-24, compressed response) for 49 CFR 571.135
S1 to S5.6 and 571.116 S1 to S5.2.2 and S6.2; the Nissan 2024 LEAF PDF fetched fresh from nissanusa.com
(byte-identical to the drafter's copy) through pdftotext -raw; the GOV.UK content API for MOT manual
section 1 (updated 2026-06-01). Quotations marked [V] were copied from that text.*

- **Correction to "Gate closures, lesson 06": FMVSS 135 S5.5.1 does not say what lights "the brake
  warning light".** It says "An indicator shall be activated ... whenever any of conditions (a) through (g)
  occur" [V, elision the fixer's]. S5.5.5(b): "Vehicles manufactured with a split service brake system may
  use a common brake warning indicator to indicate two or more of the functions described in S5.5.1(a)
  through S5.5.1(g). If a common indicator is used, it shall display the word “Brake.”" [V]. S5.5.5(d)(3),
  a separate ABS indicator: "the letters and background shall be of contrasting colors, one of which is
  yellow." [V]; (d)(5): a separate lining-wear indicator uses "the words “Brake Wear”" [V]; (d)(6), a
  separate RBS indicator: "one of which is yellow. The indicator shall be labeled with the symbol “RBS.”"
  [V], or "a yellow lamp that also indicates “ABS” failure and displays the symbol “ABS/RBS.”" [V]. So
  the conditions may share one red BRAKE light or have their own lights, and the ABS and RBS ones are
  yellow when separate. Lesson 11 must not say the red light covers ABS or RBS faults as a rule.
- **S5.5.1(a) has three options, not two**: (1) the level, (2) "a differential pressure of 1.5 MPa (218
  psi) between the intact and failed brake subsystems" [V], and (3) "A drop in the supply pressure in a
  brake power unit to one-half of the normal system pressure." [V]. The split-system definition's elided
  words: "(such as a leakage-type failure of a pressure component of a hydraulic subsystem except
  structural failure of a housing that is common to two or more subsystems, or an electrical failure in
  an electric subsystem)" [V]; S5.5.1(a) repeats the housing exception.
- **S5.5.2, the function check, has two routes**: "(1) Automatic activation when the ignition (start)
  switch is turned to the “on” (“run”) position when the engine is not running" [V] or "(2) A single
  manual action by the driver, such as momentary activation of a test button or switch mounted on the
  instrument panel" [V]; "(c) The manufacturer shall explain the brake check function test procedure in
  the owner's manual." [V].
- **S5.1 and S5.1.1**: "Each vehicle shall be equipped with a service brake system acting on all wheels."
  [V]; "Wear of the service brakes shall be compensated for by means of a system of automatic
  adjustment." [V]. S5.4.3's letters: "at least 3.2 mm ( 1/8 inch) high" [V, the source's space]; the
  distance: "within 100 mm (3.94 inches) of the brake fluid reservoir filler plug or cap" [V].
- **FMVSS 116 S6.2.4 to S6.2.5, the wet test's vessel**: the fluid goes "into an open corrosion test jar"
  [V]; test fluid and reference fluid go "into the same desiccator" [V], a covered glass desiccator over
  "450 ±10 ml. of distilled water" [V], in "an oven with temperature controlled at 50 ±1 °C. (122 ±1.8
  °F.)" [V]. "Same sealed container" (the draft's words) was wrong. S5.1.14 lists DOT 5.1 non-SBBF with
  DOT 3 and DOT 4 as colorless to amber and gives no reason for the colours; S5.2.2.2(e) requires the
  container to say "DOT 5 SILICONE BASE" [V] or "DOT 5.1 NON-SILICONE BASE" [V] as applicable.
- **Nissan 2024 LEAF, pp. 2-17 to 2-18 and 2-20.** The low brake fluid warning (p. 2-17): "If this warning
  light illuminates, the Vehicle Dynamic Control (VDC) warning light and the brake system warning light
  (yellow) also illuminate." [V]; "stop the vehicle and perform the following items." [V]; "1. Check the
  brake fluid level. If brake fluid is necessary, add fluid and have the system checked." [V, spacing
  restored]; the WARNING box opens "Your brake system may not be working properly if the warning light is
  on. Driving could be dangerous." [V, spacing restored], and its last bullet, "If the brake fluid level
  is below the minimum or MIN mark on the brake fluid reservoir, do not drive until the brake system has
  been checked." [V], runs onto p. 2-18. So the "drive carefully" line is never quoted without the MIN
  line beside it. p. 2-20, the brake system warning light: "This light functions for both the
  cooperative regenerative brake and the electronically driven intelligent brake systems." [V, spacing
  restored]; "If the BRAKE warning light (red) also illuminates, stop the vehicle immediately and have
  the system checked." [V]. The reviewer placed the regenerative light on p. 2-17; it is p. 2-20, and its
  colour (yellow) is stated on p. 2-17.
- **MOT manual section 1 headings** (updated 2026-06-01): "1.1.13. Brake linings and pads" [V] and
  "1.1.14. Brake discs and drums" [V] (the fixer re-read the headings for this point).

## Gate closures, lesson 09/10 (2026-09-26)

*Read by the lessons 09 and 10 drafter on 26 September 2026 with curl and a generic browser User-Agent
(no personal data in any header), the GOV.UK content API, legislation.gov.uk's revised HTML, pdftotext
(-raw) on the two handbooks, and the Internet Archive for Ford's handbook and the New York DMV page.
Quotations marked [V] were copied from that extracted text (hyphenation and pdftotext's run-together
words restored). Nothing here clears an entry on the `unread:` line. "Construction and Use Regulations
regulation 32" (the tint rule Annex 6 cites) and "Road Vehicles Lighting Regulations 1989 regulation
27" stay unread and are not cited.*

**Gates.** **G-H12 is partly closed**: two pages now say what oil does in a sentence (National
Highways' "lubricates, cleans, cools and protects"; the AA's "less lubricant for the bearings and other
moving parts ... Metal rubs on metal"); neither explains how a film of oil works, and lesson 09 says the
textbooks cover that. **G-H7: fallback**, as OUTLINE gives it; no handbook for a car with hydraulic
power steering was read. Nissan's LEAF handbook calls its system "electric power steering" [V] (p.
2-23), and Ford's Maverick under-hood overviews (pp. 306 to 307) show no power steering reservoir.
**G-H4** was closed at lesson 06. **G-L2**: MOT manual sections 3 and 4 read in full. **G-L10**: reg
34(6) quoted; the AA's "will be considered an offence" not repeated. **G-N4, lesson 09: closed for one
photograph** (below); no licensed coolant-reservoir photograph was found in a Commons search, so lesson
09 has none. **Lesson 10's zone A drawing** is an SVG schematic of the manual's words, labelled as such.

**A correction to Part C §3 and OUTLINE lesson 10 (for the orchestrator; OUTLINE not edited here).**
Part C says RVLR reg 23(3)(c)'s daytime exception "does not cover stop lamps or indicators (those are
not in the 23(3)(c) list)". The whole regulation, re-read today, gives (3)(c) as "a defective lamp,
reflector, dim-dip device or headlamp levelling device on a vehicle in use on a road between sunrise
and sunset, if any such lamp, reflector or device became defective during the journey which is in
progress or if arrangements have been made to remedy the defect with all reasonable expedition" [V].
It names no lamps and excludes none; "a defective lamp" is unqualified. Part C's reading is not in the
words, and lesson 10 does not repeat it: it says the paragraph doesn't list which lamps it covers.

- **The Highway Code, Annex 6** (content API, public_updated_at 2022-01-29), re-read in full. "Fluid
  levels. Check the fluid levels in your vehicle at least weekly." [V]; "If your engine overheats, you
  should wait until it has cooled naturally. Only then remove the coolant filler cap and add water or
  other coolant." [V]; "lights, indicators, reflectors, and number plates MUST be kept clean and clear"
  [V]; "windscreens and windows MUST be kept clean and free from obstructions to vision" [V]; "lights
  MUST be properly adjusted to prevent dazzling other road users." [V]; "You MUST NOT use a vehicle with
  excessively dark tinting applied to the windscreen, or to the glass in any front window to either side
  of the driver." [V]; "There are no VLT limits for rear windscreens or rear passenger windows." [V];
  tints cite "RTA 1988 sect 42 & CUR reg 32" [V].
- **The AA, "How to check and top up your car engine oil"**, https://www.theaa.com/breakdown-cover/advice/how-to-check-and-change-your-car-oil,
  "Updated: 17 June 2024 | Author: The AA" [V]. **Read: full article text.** A motoring organisation that
  sells breakdown cover and repairs. "Never try to check anything under the bonnet with the engine
  running." [V]; "For the most accurate oil reading, park your car on level ground. Never park on a
  slope." [V]; "The best time to check the oil is before you use the car. Make sure the engine is cold.
  If you've just driven, wait for 5 to10 minutes before you check the oil level." [V, the page's
  "5 to10"; lesson 09 paraphrases it]; "Some cars have electronic oil monitors which show the oil level on
  your dashboard." [V]; "If the top of the oil streak is between the minimum and maximum marks, the level
  is fine." [V]; "If the level is below halfway between the marks, then we would recommend adding some
  oil." [V]; "If it's close to or even below the minimum mark, then you need to add some oil." [V]; "The
  difference between the minimum and maximum notches on a dipstick is about a litre of oil." [V];
  "Putting too much oil into your car is just as bad as having too little." [V]; "It's important to use
  oil that meets the right technical specifications (ACEA, API, VW, etc). It also needs to be the right
  grade (the numbers separated by a 'w', such as 5w30)." [V] (lesson 09 quotes the first clause and the
  second sentence, and names no maker); "With low oil pressure, there's less lubricant for the bearings
  and other moving parts in your engine. Metal rubs on metal, quickly causing irreversible and expensive
  damage." [V]; "New oil is clean and golden in colour, but quickly turns dark brown or black when it's in
  use. This darkening is quite normal and is nothing to worry about." [V]; "Oil with a milky, creamy or
  foamy appearance means coolant or water is leaking into the oil. You'll need to get this checked by a
  mechanic." [V]. The page names two oil sellers' matching services; not used (no products).
- **The AA, "What is AdBlue?"** (updated 11 July 2024), re-read. The filler is "located either next to
  your fuel filler, in the boot or under the bonnet" [V]; "You can refill the Adblue tank yourself." [V].
- **National Highways, "How to check your vehicle"**, re-read in full. "If your indicators, hazard
  lights, headlights, fog lights, reverse lights or brake lights aren't working properly, you're putting
  yourself and others at risk." [V]; "They can be a reason for your vehicle to fail its MoT." [V]; "Ask a
  friend to help you, or park your vehicle near a reflective surface eg a window or garage door." [V];
  "In sequence, turn on your indicators, hazard lights, headlights and fog lights to check they're
  working" [V]; "Press the brake pedal to check your brake lights, and finally select reverse to ensure
  your reverse light is working." [V]; "Take your car back to the garage if you're topping up more than
  usual." [V]; "Ensure your engine is switched off for at least five minutes and your vehicle is parked
  on an even surface." [V]; "If the oil residue is below the minimum marking, you need to top up your oil
  level." [V]; "Maintaining the correct oil level is essential as the oil lubricates, cleans, cools and
  protects the moving parts of your engine, preventing your engine from seizing up and breaking down."
  [V]; "Some newer vehicles don't have dipsticks and use dashboard vehicle check systems instead." [V];
  screenwash: "this reservoir can be filled to the top" [V] and "Please refer to the screen wash mixing
  instructions on the bottle to get the correct mixture." [V].
- **Met Office, "6 simple checks to prepare your vehicle for winter"**, re-read in full. "Coolant (a
  mixture of water and antifreeze) is pumped around your engine to cool it." [V]; "Remember only check
  this when the engine is cool otherwise you risk scalding yourself. It's not normal for coolant levels
  to drop suddenly, so if it does, get it checked out at a garage." [V]; "Make sure you top up your
  screenwash with a product that is effective down to at least -15 degrees Celsius." [V]; "check your
  wipers are doing the job by spraying some washer fluid and checking they clean the windscreen" [V];
  run your fingers along the blades "to check for splits" [V]; "It's recommended to change wiper blades
  every 12 months." [V]. The page also says to "replace bulbs or fuses if required" [V]; not used (decision
  7).
- **Ford, 2024 Maverick Owner's Manual** (US and Canada, edition 202307), Internet Archive capture
  20250505042038, pdftotext -raw. **Read: printed pp. 87 to 91, 193 and 303 to 310 in full; the warning
  boxes on pp. 170 and 184.** The 2.5 L engine is the hybrid ("Engine Specifications - 2.5L, Hybrid" [V], contents).
  p. 88: "Run the tip of your fingers over the edge of the blade to check for roughness." [V]; "Do not
  operate the wipers on a dry windshield. This could scratch the glass or damage the wiper blades." [V]
  (p. 88, "Wiper precautions"). p. 89: "If you operate your vehicle in temperatures below 41°F (5°C), use
  washer fluid with antifreeze protection. Failure to use washer fluid with antifreeze protection in cold
  weather could result in impaired windshield vision and increase the risk of injury or accident." [V];
  "Do not operate the washers when the washer reservoir is empty. This could cause the washer pump to
  overheat." [V]. p. 91: "The wiper blades could be dirty, worn or damaged." [V]. p. 170 (hybrid,
  Auto-Start-Stop) [corrected 2026-09-26 at lesson 09's Stage 4: not hybrid; p. 170 is in the chapter
  "Auto-Start-Stop - Gasoline", per the contents and the page's side tab; see "Stage 4 note, lesson 09"]
  and p. 184 (high voltage battery precautions), the same warning: "Apply the parking
  brake, shift into park (P), switch the ignition off and remove the key before you open the hood or have
  any service or repair work completed. If you do not switch the ignition off, the engine could restart
  at any time." [V]. p. 193: "Look at the brake fluid reservoir to see where the brake fluid level is
  relative to the MIN and the MAX marks on the reservoir." [V]. p. 304: "Do not work on a hot engine."
  [V]; "Make sure that nothing gets caught in moving parts." [V]; "Set the parking brake, shift the
  transmission to park (P) and block the wheels." [V]; "There is no secondary hood release under the
  hood." [V]; the hood opens with two pulls of the release lever. p. 307 (2.5 L): "Low temp coolant cap"
  and "High temp coolant cap" [V]. p. 308: "1. Make sure that your vehicle is on level ground." [V];
  "Check the oil level before starting the engine, or switch the engine off after warm up and wait 15
  minutes for the oil to drain into the oil pan." [V]; "Checking the oil level too soon could result in
  an inaccurate reading." [V]; "Read both sides of the dipstick and use the lowest oil level as the
  correct reading." [V]; "If the oil level is between the maximum and minimum marks, the oil level is
  acceptable. Do not add oil." [V]; "If the oil level is at the minimum mark, immediately add oil." [V];
  "Increases in oil level can occur from frequent short trips that do not allow the engine to get to
  operating temperature, as well as frequent idling or low speed driving for long periods of time." [V];
  "If oil levels are continuously noted above the maximum mark, have your vehicle checked as soon as
  possible." [V]; "Do not add engine oil when the engine is hot." [V]; "Do not use supplemental engine oil
  additives because they are unnecessary and could lead to engine damage that the vehicle warranty may
  not cover." [V]. p. 309: "Oil levels above the maximum mark may cause engine damage." [V]; "When the
  engine is cold, check the concentration and level of the coolant" [V]; "Coolant expands when it is hot.
  The level may extend beyond the MAX mark." [V]; "Keep your hands and clothing clear of the cooling
  fan." [V]; "Do not remove the coolant reservoir cap when the engine is on or the cooling system is hot.
  Wait 10 minutes for the cooling system to cool down. Cover the coolant reservoir cap with a thick cloth
  to prevent the possibility of scalding and slowly remove the cap." [V]. p. 310: "Do not put coolant in
  the windshield washer reservoir. If sprayed on the windshield, coolant could make it difficult to see
  through the windshield." [V]; "Do not mix different colors or types of coolant in your vehicle." [V];
  "Unscrew the cap slowly. Any pressure escapes as you unscrew the cap." [V]; "If you have to add more
  than 1.1 qt (1 L) of engine coolant per month, have your vehicle checked as soon as possible." [V];
  "In case of emergency, you can add a large amount of water without engine coolant in order to reach a
  vehicle service location. Service your vehicle as soon as possible." [V]; "Water alone, without engine
  coolant, can cause engine damage from corrosion, overheating or freezing." [V].
- **Nissan, 2024 LEAF Owner's Manual (US)**, PDF fetched fresh from nissanusa.com, pdftotext -raw.
  **Read: pp. 8-2 to 8-12 and 9-2 to 9-4 in full; the lines cited on pp.
  2-17 to 2-18 and 2-23.** p. 8-2: "Your vehicle is equipped
  with an automatic cooling fan. It may come on at any time without warning, even if the power switch is
  not in the ACC, ON or READY to drive position. To avoid injury, always disconnect the negative 12-volt
  battery cable before working near the fan." [V]; "Always wear eye protection whenever you work on your
  vehicle." [V]; "Do not work under the hood while the motor compartment is hot. Push the power switch in
  the OFF position and wait until it cools down." [V]; "It is advisable to secure or remove any loose
  clothing and remove any jewelry, such as rings, watches, etc. before working on your vehicle." [V]. p.
  8-4, motor compartment check locations: brake fluid reservoir, 12-volt battery, windshield-washer fluid
  reservoir, coolant reservoir cap, fuse holders [V, list]. p. 8-5: "The coolant reservoir is equipped
  with a pressure type coolant reservoir cap." [V]; "Wait until the motor compartment cools down." [V];
  "Never use any additives in the coolant such as radiator sealer in the cooling system." [V]. p. 8-6:
  "Check the coolant level in the reservoir when the high-voltage parts are cold." [V]; "If the cooling
  system frequently requires coolant, it is recommended that you visit a NISSAN certified LEAF dealer."
  [V]; "Never remove the coolant reservoir cap when the motor compartment is hot. Serious burns could be
  caused by high-pressure fluid escaping from the radiator." [V]. p. 8-8: "In the winter season, add a
  windshield-washer antifreeze." [V]; "Do not substitute antifreeze coolant for windshield-washer
  solution. This may result in damage to the paint." [V]. p. 8-11: "Your windshield is clean if beads do
  not form when rinsing with clear water." [V]; "Worn windshield wiper blades can damage the windshield
  and impair driver vision." [V]. p. 8-12: "Replace the wiper blades if they are worn." [V]. p. 9-3:
  "Lights*: Clean the headlights on a regular basis. Make sure that the headlights, stop lights,
  taillights, turn signal lights, and other lights are all operating properly and installed securely.
  Also check headlight aim." [V]; "Check the windshield at least every six months for cracks or other
  damage. Have a damaged windshield repaired by a qualified repair facility." [V]; "Windshield wiper
  blades*: Check for cracks or wear if they do not wipe properly." [V]. p. 9-4: "Fluid leaks: Check
  under the vehicle for water or other fluid leaks after the vehicle has been parked for a while. Water
  dripping from the air conditioner after use is normal. If you should notice any leaks, check for cause
  and have it corrected immediately." [V]. pp. 2-17 to 2-18: "If the brake fluid level is below the
  minimum or MIN mark on the brake fluid reservoir, do not drive until the brake system has been
  checked." [V]. p. 2-23: "electric power steering" [V].
- **Road Vehicles (Construction and Use) Regulations 1986, reg 30** (legislation.gov.uk, revised text,
  E+W+S), whole regulation. "(1) Every motor vehicle shall be so designed and constructed that the driver
  thereof while controlling the vehicle can at all times have a full view of the road and traffic ahead
  of the motor vehicle." [V]; "(3) All glass or other transparent material fitted to a motor vehicle
  shall be maintained in such condition that it does not obscure the vision of the driver while the
  vehicle is being driven on a road." [V].
- **Reg 34**, whole regulation. (1): "one or more efficient automatic windscreen wipers" [V], unless "the
  driver can obtain an adequate view to the front of the vehicle without looking through the windscreen"
  [V]; (2): a washer "capable of cleaning, in conjunction with the windscreen wiper, the area of the
  windscreen swept by the wiper of mud or similar deposit" [V]; (3)(c): the washer requirement does not
  apply to "a vehicle having a maximum speed not exceeding 20 mph" [V], among others; (6): "Every wiper
  and washer fitted in accordance with this regulation shall at all times while a vehicle is being used
  on a road be maintained in efficient working order and be properly adjusted." [V].
- **Road Vehicles Lighting Regulations 1989, reg 23** (legislation.gov.uk, revised text), whole
  regulation. (1): "No person shall use, or cause or permit to be used, on a road a vehicle unless every
  lamp, reflector, rear marking and device to which this paragraph applies is in good working order and,
  in the case of a lamp, clean." [V]. (2)(a) covers, among others, front and rear position lamps,
  headlamps, the "rear registration plate lamp" [V], the rear fog lamp, retro reflectors, daytime running
  lamps and reversing lamps "with which the vehicle is required by these Regulations to be fitted" [V];
  (2)(b) "every" stop lamp, direction indicator, running lamp, dim-dip device, headlamp levelling device,
  hazard warning signal device and front fog lamp "with which it is fitted" [V]. (3)(c) as quoted above.
  (3)(e) excludes a front fog lamp or daytime running lamp on a vehicle first registered before 1 March
  2018. Which lamps a car must have is set elsewhere in the Regulations, not read.
- **DVSA, MOT inspection manual** (content API): main page updated 2026-06-01; **section 3 "Visibility"**
  (updated 2024-11-29) and **section 4 "Lamps, reflectors and electrical equipment"** (updated
  2024-04-02), read in full. 3.2: "damage in windscreen zone A more than 10mm in diameter" [V]; "damage
  in the remainder of the windscreen's swept area more than 40mm in diameter" [V]; "Failure for damage is
  only justified if the damage significantly affects the driver's view of the road." [V]; zone A is "in
  the swept area of the windscreen", "290mm wide", "centred on the steering wheel" [V each]; "An
  'invisible' or barely detectable repair, finished flush with the surrounding glass, does not count as
  damage." [V]. The manual gives zone A no height. 3.4: "Wiper blade defective" Minor; "Wiper blade
  missing or obviously not clearing the windscreen" Major [V]. 3.5: "Washers must provide enough fluid
  for the wipers to clear the windscreen effectively." [V]; "Windscreen washers not working or not
  providing sufficient fluid to clear the windscreen" Major [V]. 4.1.1: "A headlamp with up to ½ light
  sources not functioning in the case of LED" Minor; "A headlamp missing, inoperative or more than ½ not
  functioning in the case of LED" Major [V]. 4.3.1: "Stop lamp(s) with a multiple light source up to 1/2
  not functioning" Minor; "Stop lamp(s) missing, inoperative or in the case of a multiple light source
  more than 1/2 not functioning" Major; "Stop lamp(s) all missing or inoperative" Dangerous [V]. 4.4.1:
  "A direction indicator lamp with a multiple light source up to 1/2 not functioning" Minor; "A direction
  indicator lamp missing, inoperative or in the case of a multiple light source more than 1/2 not
  functioning" Major [V]. 4.7.1: "A rear registration plate lamp or light source missing or inoperative
  when rear registration plate has 2 or more lamps or light sources" Minor; "A rear registration plate
  lamp or light source missing or inoperative when rear registration plate has only one lamp or all lamps
  not working" Major [V].
- **New York State DMV, "New York State Vehicle Safety/Emissions Inspection Program"**, Internet Archive
  capture 20260710141515 (live page 403 to curl today), read in full. "Motor vehicles are required by law
  to be in safe operating condition whenever they are driven on a public street or roadway in New York
  State." [V]; lights listed include "Headlamps (low and high beam)", "Tail lamps", "Stop lamps",
  "Directional signals", "Backup lights (1969 and newer)", "License plate lights" [V each]; windshield:
  "Check for presence and condition" [V]; "No crack of 11 inches long or longer is allowed if any part of
  the crack is within the area cleared by the windshield wiper." [V]; "Wipers - check for presence and
  operation" and "Blades - check condition" [V, the page's hyphens]. No washer item on the page.
- **PennDOT, "Safety Inspection Program Frequently Asked Questions for Consumers"**, re-read: the
  passenger-car list includes "lighting and electrical systems, glazing (glass), mirrors, windshield
  washer, defroster, wipers" [V].
- **Virginia State Police, "Vehicle Safety Inspection"**, re-read in full: under glass, "Cracked,
  scratched or broken glass." [V]; wipers, "Condition of wiper blades." [V]; rear plate, "Illumination of
  rear plate" [V]; under the hood, fluid levels below the proper level: "Brake fluid." and "Power
  steering fluid." [V].
- **G-N4, lesson 09: closed for one photograph.** Wikimedia Commons, "File:Engine oil dipstick reading
  level.JPG", https://commons.wikimedia.org/wiki/File:Engine_oil_dipstick_reading_level.JPG, by
  Dvortygirl, 11 February 2007, "Own work" [V]; licence read on the file page: "This file is licensed
  under the Creative Commons Attribution-Share Alike 3.0 Unported, 2.5 Generic, 2.0 Generic and 1.0
  Generic license." [V, spacing normalised], also GFDL 1.2; the lesson uses CC BY-SA 3.0. Description:
  "Dipstick for measuring the level of motor oil in an automobile." [V]. Viewed by the drafter: a
  dipstick on a blue paper towel with oil on its tip and small marks along it; no brand visible. The
  caption does not say which mark is which or where the level sits.

## Stage 4 note, lesson 08 (2026-09-26)

*Re-read on 26 September 2026 by the lesson 8 fixer, with curl and a generic browser User-Agent (no
personal data in any header), tags stripped, curly quotes straightened. Nothing here clears an entry on
the `unread:` line; "MIRA" and "MIRA wet braking test" stay on it. Tire Rack's research was not read and
Tire Rack has no entry here: its figures are used only as AAA Exchange's report of them.*

- **AAA Exchange, "Tire Safety and Maintenance"**, re-read in full. The comparison of the disputed depths
  the lesson had said was not read: "The difference between 4/32" and 2/32" of tread depth might not
  seem like much, but based on research by the Tire Rack, America's largest independent tire tester the
  difference is significant. For example, a pickup truck traveling at 70 miles per hour that passes the
  penny test can take up to 499.5 feet to stop on wet pavement . However, the same truck has a stopping
  distance 122 feet shorter if it passes the quarter test instead. This is a 24 percent difference in
  stopping distance, and the equivalent of six or more car lengths." [V, spacing before the full stop as
  in source] The quarter's method: "Insert a quarter into a tread groove with the top of Washington's head
  facing down." [V] The alignment line keeps its hedge: "Tread wear on one edge of the tire: This
  typically occurs when the wheels are out of alignment." [V] AAA's description of Tire Rack is AAA's; this
  course read nothing about Tire Rack's business, so the lesson gives it no label of its own.
- **AAA, "Tread Lightly" (2018 release)**, re-read. The concession before the price-point line, now in the
  lesson: "While AAA's research found that tire performance does vary by brand, price is not necessarily
  an indicator of quality." [V] The release gives no figures by brand.
- **TyreSafe supporter page, "Michelin"**, re-read. The product claim recorded as "not used" in "Gate
  closures, lesson 08" is now used, without the product's name: "Made with a high level of safety even
  after over 18,000 miles of use, the braking distance remains below the official level for a new tyre."
  [V] It is about one named Michelin tyre and cites no test; the page does not say what the "official
  level" is. The next sentence after Part B's blockquote, "That's why Michelin invests over 600 million
  euros in research and development every year." [V], is not used.
- **The AA, tyre tread page**, re-read. "If all 4 tyres are found to be dangerous, you could be looking at
  a £10,000 fine and 12 points." [V] (the page frames this under being prosecuted "for using a vehicle in
  a dangerous condition").
- **RAC Drive, tread page**, re-read. Its penalties list: "Three penalty points per illegal tyre" [V] and
  "Up to 12 penalty points across four illegal tyres" [V]. Its 3 mm is reported, not its own: "most
  recommend a minimum tread depth of 3mm for tyre replacement" [V] (of "Tyre and safety experts") and
  "Industry experts recommend a minimum tread depth of 3mm for tyres." [V]; its own recommendation is to
  buy a replacement when tread is "below or neat the legal limit" [V].
- **TyreSafe, tread page** (last updated 16 September 2026), re-read. The 3 mm mileage line is followed at
  once by "It is recommended that tyres with 3mm tread depth are replaced as quickly as possible." [V]
- **NHTSA, "Tires"**, capture 20260924154655, re-read: "Tires are not safe and should be replaced when the
  tread is worn down to 2/32 of an inch." [V] unchanged.
- **C&U reg 27(1A)**, re-read live: (1)(i) and (j) apply only to tyres fitted "to a front axle of a bus
  other than a minibus", "in single configuration on any axle of a minibus", and "to a front axle of a
  goods vehicle with a maximum gross weight exceeding 3,500 kg" [V]. The lesson's age predict now says so.

## Gate closures, lesson 11/12 (2026-09-26)

*Read on 26 September 2026 by the drafter of lessons 11 ("Dashboard warning lights") and 12 ("Fuel
economy: what maintenance buys, and the figures that were withdrawn"), with curl and a generic browser
User-Agent (no personal data in any header), text extracted with a small HTML stripper, pdftotext, the
GOV.UK content API and the eCFR API. Quotations marked [V] were copied from that extracted text;
[V-img] from an official image viewed by the drafter; curly apostrophes and quotation marks are written
straight. Nothing here clears an entry on the `unread:` line.*

**Gates.** G-H10 (EOBD dates; the EPA OBD regulation): **not closed; fallback written**. Lesson 11
gives the MOT manual's MIL dates as the test's scope, not fitment law, and describes the US check-engine
light from EPA's 2003 fact sheet, saying the regulation itself and the European fitment rules were not
read. G-H9 (UK octane): **not closed; fallback written**. Lesson 12 prints US pump octane numbers only,
labelled US, and says the course read no official UK page on octane. G-H8: no maker's oil interval is
named. Nothing in either lesson needs G-N1 (no phone number or fee is printed).

**A correction to Part A §5.** EPA420-F-03-042's list of monitored systems reads "exhaust gas
recirculation (EGR) system" [V] (one word) in question 4's list that the lesson quotes; Part A's line
has "re-circulation", which is the spelling of a different list on the same page ("oxygen sensors,
exhaust gas re-circulation (EGR) system" [V]). Lesson 11 quotes the first list with its own spelling.
*Withdrawn 2026-09-26 (Stage 4, lesson 11): this correction was wrong. In question 4's OBD II list the
word breaks at a line end ("exhaust gas re-" / "circulation (EGR) system"), and pdftotext joined it;
the fact sheet spells it "re-circulation" everywhere. Part A's spelling stands. See "Stage 4 note,
lesson 11".*

### Lesson 11 reads

**ISO 2575:2021, free publisher sample** (https://cdn.standards.iteh.ai/samples/68409/6480e873c14b4e56b7a0066b3ef65afc/ISO-2575-2021.pdf),
re-read: clauses 1 to 5 in full, as Part B §3. Quoted: "red: danger to persons or very serious damage
to equipment, immediate or imminent;" [V]; "yellow or amber: caution, outside normal operating limits,
vehicle system malfunction, damage to vehicle likely, or other condition which can produce hazard in the
longer term;" [V]; "green: safe, normal operating condition (where blue or yellow is not required)." [V];
5.2 "yellow or amber: e.g. failure of anti-lock brake system;" [V]; 5.4 "The colour white may be used
where none of the above conditions applies." [V]; 5.5 "A given symbol may be shown in more than one of
the colours specified in 5.1 in order to convey a change in the operating condition." [V]. Also 5.3:
"If colour is used on symbols for heating and/or cooling systems, the colour red shall be used to
indicate hot, and the colour blue shall be used to indicate cold." [V] (not used).

**UN Regulation 121, MLIT bilingual copy** (https://www.mlit.go.jp/jidosha/un/UN_R121.pdf, PDF created
23 March 2014), re-read: paragraph 5.4 and Table 1; the table's page 15 viewed as an image. 5.4.1:
"Light of each tell-tale listed in Table 1 shall be of the colour shown in column 5 of this table." [V,
line broken across the bilingual layout]. Table 1, English column: engine oil pressure tell-tale "Red";
engine coolant temperature tell-tale "Red"; electrical charging condition tell-tale "Red" [V-img for all
three]; "Antilock brake system malfunction" "Yellow"; "Engine on-board diagnostics or engine
malfunction" "Yellow"; brake lining wear-out "Yellow" [V]. **New:** row 25, "Brake system malfunction",
has no colour in column 5; the column reads "See Regulation Nos. 13-H and 13 as appropriate" [V], and
those regulations are on the `unread:` line ("UN Regulation 13-H"), so the lesson says only that the
braking regulations set it. Footnote 18: "Symbol may be shown in other colours than specified in column 5
in order to convey different meanings according to the general colour coding as proposed in paragraph 5
of ISO 2575-2004." [V]

**49 CFR 571.101, FMVSS 101** (eCFR API, version of 1 September 2026, fetched with compression), full
text re-read; **Table 1 and its notes viewed from the five official images**
(https://img.federalregister.gov/ER03JA25.001/ER03JA25.001_original_size.png to .005). S5.4.1: "The
light of each telltale listed in Table 1 must be of the color specified for that telltale in column 6 of
that table." [V]. Table 1 [V-img]: brake system malfunction "Red"; antilock "Yellow"; regenerative brake
system malfunction "Yellow"; brake pressure, low brake fluid condition, parking brake applied "Red";
**brake lining wear-out condition (for vehicles subject to FMVSS 135) "Red"** (new; Part B's list did not
record this row); ESC malfunction "Yellow"; low tire pressure and TPMS malfunction "Yellow"; engine oil
pressure, engine coolant temperature and electrical charge: telltale colour "-------" (blank). Note 4:
"Blue may be blue-green. Red may be red-orange." [V-img]. S5.5.6(b): "telltales for which the color red is
required in table 1 to this section must not be cancelable while the underlying condition for their
activation exists." [V]; its scope is S5.5, "Common space for displaying multiple messages" [V] (not used
in the lesson after cuts).

**49 CFR 571.135, FMVSS 135** (eCFR API, version of 1 September 2026), S5.5 to S5.5.5 re-read. S5.5.2:
the brake indicator is activated as a check function at ignition "on" or by "A single manual action by
the driver" [V]; S5.5.3: "Each indicator activated due to a condition specified in S5.5.1 shall remain
activated as long as the condition exists" [V]. S5.5.5(b): "Vehicles manufactured with a split service
brake system may use a common brake warning indicator to indicate two or more of the functions described
in S5.5.1(a) through S5.5.1(g). If a common indicator is used, it shall display the word "Brake."" [V].
S5.5.5(d)(3), for a separate indicator for the S5.5.1(b) antilock or variable-proportioning condition:
"the letters and background shall be of contrasting colors, one of which is yellow." [V]. Per the lesson
05/06 Stage 4 notes, lesson 11 does not say ABS, regenerative-braking or pad-wear faults light "the brake
warning light".

**The Highway Code, Annex 6** (content API, `public_updated_at` 2022-01-29), re-read in full. Quoted:
"When you turn the ignition key, warning lights will be illuminated but will go out when the engine
starts (except the handbrake warning light). If they do not, or if they come on while you are driving,
stop and investigate the problem, as you could have a serious fault." [V]; "If the charge warning light
comes on while you are driving, it may mean that the battery isn't charging. This should also be checked
as soon as possible to avoid loss of power to lights and other electrical systems." [V] (lesson 11 quotes
the two together, per the lesson 05 Stage 4 note); "you should wait until it has cooled naturally. Only
then remove the coolant filler cap and add water or other coolant." [V].

**Ford, 2024 Maverick Owner's Manual** (Internet Archive capture 20250505042038 of
https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/2024_Ford_Maverick_Owners_Manual_version_1_om_EN-US.pdf),
pp. 113, 114, 164 re-read and **p. 183 read for the first time**. p. 113: "If it illuminates, safely stop
your vehicle and switch your vehicle off. Have your vehicle checked as soon as possible." [V] (coolant
temperature); ABS: "Your vehicle continues to have normal braking without the anti-lock brake system
function. Have your vehicle checked as soon as possible." [V]; battery: "Have your vehicle checked as
soon as possible." [V]. p. 114: oil pressure, "It illuminates when the engine oil pressure is low." [V]
(no action given on that page); MIL, "It illuminates when the ignition is on and the engine is off, this
is normal operation." [V]; "If it flashes, have your vehicle checked immediately." [V]. p. 164: "If it
illuminates when the engine is running, the on-board diagnostics system is detecting a malfunction of the
vehicle emission control system." [V]; "If it flashes, engine misfire could be occurring. Increased
exhaust gas temperatures could damage the catalytic converter or other vehicle components. Avoid heavy
acceleration and deceleration, and have your vehicle checked as soon as possible." [V]. **p. 183
(Catalytic converter, warning lamps), new:** "Your vehicle has an on-board diagnostics system that
monitors the emission control system. If any of the following warning lamps illuminate, this may
indicate that the on-board diagnostics system has detected an emission control system malfunction." [V];
"Continuing to drive your vehicle may cause reduced power or the engine to stop. Failure to respond to a
warning lamp may cause damage that your vehicle Warranty may not cover. Have your vehicle checked as soon
as possible." [V].

**Nissan, 2024 LEAF Owner's Manual (US)**
(https://www.nissanusa.com/content/dam/Nissan/us/manuals-and-guides/leaf/2024/2024-nissan-leaf-owner-manual.pdf),
pp. 2-15 to 2-20 re-read. Quoted: "If any light does not come on or operate in a way other than
described, it may indicate a burned-out bulb and/or a system malfunction." [V]; "If the BRAKE warning
light illuminates, stop the vehicle immediately and have the system checked." [V]; 12 V charge light:
"The DC/DC converter system may not be functioning properly" [V] and "Immediately stop the vehicle in a
safe location and have the system checked." [V]; airbag: "If the supplemental air bag warning light is
on, it could mean that the front air bag, side air bag, curtain air bag and/or pretensioner systems will
not operate in an accident." [V]. p. 2-20: the yellow "Brake system warning light" covers "the
cooperative regenerative brake and the electronically driven intelligent brake systems" [V]; "If the
BRAKE warning light (red) also illuminates, stop the vehicle immediately and have the system checked."
[V]. ABS, p. 2-19: "If an ABS malfunction occurs, the anti-lock function is turned off." [V] (the next
sentence is paraphrased in the lesson because the PDF breaks "antilock" across a line). "There are two
types of master warning lights: yellow and red." [V] (cut from the lesson).

**RAC, "Dashboard warning lights guide: red, amber and green symbols explained"**
(https://www.rac.co.uk/drive/advice/know-how/car-dashboard-warning-lights-meaning/), JSON
`dateModified` 2026-08-18, re-read in full. Motoring organisation; the page advertises RAC Breakdown
cover and RAC Mobile Mechanics. The table: "Stop driving as soon as it is safe to do so and call for
recovery." [V]; "Have the vehicle checked by a mechanic as soon as possible." [V]; "The vehicle's systems
are operating normally." [V]. Oil: "The oil warning light comes on when either the oil temperature gets
too high or the oil level or pressure is too low. If the oil is not lubricating the engine effectively it
could lead to expensive or even irreparable engine damage, so it's important to act quickly." [V]; "If
the low engine oil light is on then you should stop as soon as safely possible and switch off the
engine." [V]; "If the oil levels are fine, then the oil pump may be faulty. In this case call for
recovery if you have breakdown cover, as driving any further could damage the engine." [V]. Temperature:
"If the red engine temperature warning light is on, you should stop straight away as without enough
coolant your engine could get so hot that it effectively welds itself together, causing irreparable
damage." [V]; **new since Part B:** "Stop and wait until the engine has cooled off before checking the
gauge on the side of the coolant tank under the bonnet, topping up as required." [V]; "Have a look to see
if there are any obvious leaks. If you can't see any and the light goes off after topping up then you
should be fine to continue your journey." [V]; "An overheating engine can cut out as well. Rather than
risk it, you should call for recovery if you have breakdown cover." [V]. Battery: "You should not drive
if the battery warning light is on." [V]. Brakes: "you should not drive if you see a red car warning
light." [V]; "Unless you know how to check your brake fluid levels yourself, this will be one for the
professionals, so get yourself to a garage." [V]. ABS: "If the ABS light comes on by itself you should
still have normal, unassisted braking, so it's safe to continue your journey" [V] (the sentence continues
after a spaced dash); "If it comes on with the brake warning light, it could indicate that the brake
system is failing and you should stop straight away and call for recovery if you have breakdown cover."
[V]. The page's opening list now has a "traffic light colour system" in prose, with a spaced hyphen, not
quoted. The oil section also tells the reader to look "for any obvious oil leaks under the car" [V]; the
lesson does not repeat it.

**RAC, "Reasons your amber or orange engine management light (EML) is on"**
(https://www.rac.co.uk/drive/advice/know-how/reasons-your-engine-management-light-is-on/), JSON
`dateModified` 2026-08-11, re-read in full. Quoted: "While you can typically drive whilst your engine
light is on, we'd strongly recommend getting a mechanic to look at your car as soon as possible." [V];
"If the light is flashing then this suggests a more serious issue and you should get have the vehicle
inspected by a qualified professional." [V, grammar as in source]. The sentence after the first:
"Continuing to drive with this light on will likely lead to further damage to the engine and the
surrounding systems." [V] (not quoted in the lesson).

**EPA, EPA420-F-03-042** (https://nepis.epa.gov/Exe/ZyPDF.cgi/P100LW9G.PDF?Dockey=P100LW9G.PDF),
questions 1 to 8 re-read. Quoted: OBD "is additional computer software that monitors the emission control
and emission-related components/systems, along with certain engine components" [V]; "the on-board
computer is able to determine the presence of a malfunction or deterioration that can affect emissions
and illuminate the "Check Engine" or "Service Engine Soon" light" [V]; "catalyst efficiency, oxygen sensor
response and heater, exhaust gas re-circulation (EGR) system, fuel delivery system, engine misfire,
evaporative system" [V] (spelling corrected 2026-09-26 at lesson 11's Stage 4); "In some instances, the computer software may identify a problem before there
is an overt indication to the vehicle operator." [V]; OBD II: "Malfunction indicator lamp (MIL)
extinguishes after 3 consecutive trips where the problem did not re-occur." [V]; "The OBD requirements
were implemented beginning with the 1994 model year." [V]; "1996 is commonly identified as the first year
of full implementation once waivers were no longer available." [V].

**fueleconomy.gov, "Keeping Your Vehicle in Shape"** (https://www.fueleconomy.gov/feg/maintain.jsp),
re-read in full. The check-engine paragraph, as Part A §5: "The check engine light, or malfunction
indicator lamp, on your dash board indicates that something is wrong with your engine. Modern vehicles
are so advanced that they may seem to drive normally even when a repair is needed, which sometimes leads
drivers to ignore the indicator." [V]; "It could be something as minor as a loose gas cap, but it could also be a more serious issue that
could reduce your fuel economy, increase emissions, and/or lead to costly repairs later. So, when the
check engine light comes on, have your vehicle inspected by a mechanic." [V]. (Lesson 12's reads of the same page are below.)

**DVSA, MOT inspection manual** (content API; sections 1 and 7 `public_updated_at` 2026-06-01, section 8
2025-06-24; manual changed 1 June 2026). **Section 1 read in full; sections 7 and 8 re-read in full.**
8.2.1.2: "Turn on the ignition and check that the engine malfunction indicator lamp (MIL) illuminates and
then goes off. On some vehicles it will be necessary to start the engine before the MIL goes off." [V];
MIL inspected on "petrol vehicles including hybrids with 4 or more wheels, not more than 8 passenger seats
in addition to the driver's seat and first used on or after 1 July 2003" [V]; defect (h) "Engine MIL
inoperative or indicating a malfunction" Major [V]. 8.2.2: "You need to inspect MIL fitted to diesel
vehicles including hybrids with 4 or more wheels and first used on or after 1 July 2008." [V]; the same
defect Major. 7.1.6: "The SRS MIL (Malfunction Indicator Lamp) should only be failed if it is indicating
a system malfunction. A lamp illuminated to indicate the passenger airbag is disabled is not to be
regarded as a defect." [V]; "(a) An SRS malfunction indicator lamp (MIL) indicates a system malfunction"
Major [V]. 7.12: "Electronic stability control is also referred to as ESC, ESP, VDC, and DSC, among many
other names." [V]; "The dashboard warning lamp for these systems might take various forms and you should
only fail a vehicle if you're certain that the warning lamp is indicating an ESC malfunction. You might
need to check the owner's handbook." [V]; "(e) ESC MIL indicates a system malfunction" Major [V]. **Section
1, new for this course's warning-light reading:** 1.1.10 "(f) Brake fluid warning light illuminated or
defective" Minor [V]; "(g) Incorrect functioning of brake fluid level warning device" Minor [V] (corrected 2026-09-26 at
lesson 11's Stage 4: first recorded here as Major; the live section, updated 1 June 2026, says Minor); "A brake
fluid warning lamp may be shared with other components, for example to indicate that brake pads are worn
or the parking brake is applied." [V]; 1.6 (ABS) "(a) Warning device not working" Major and "(b) Warning
device shows system malfunction" Major [V]; 1.4 "(e) Electronic parking brake MIL indicates a
malfunction" Major [V].

**New York State DMV, "New York State Vehicle Safety/Emissions Inspection Program".** Part D's capture
20260710141515 returned a challenge page (HTTP 403) three times on 26 September 2026; the CDX index lists
it as a 200 capture. **Read instead: capture 20260610152208**
(https://web.archive.org/web/20260610152208/https://dmv.ny.gov/new-york-state-vehicle-safetyemissions-inspection-program),
in full; capture 20260415190425 has the same lines. The live page refuses automated readers. Quoted:
"Most 1996 or newer gasoline-powered vehicles and most 1997 or newer diesel-powered vehicles that have a
gross vehicle weight rating (GVWR) less than 8,501 pounds are subject to the OBDII emissions inspection.
This test examines the Malfunction Indicator Lamp (MIL), also known as the "check engine" light, for
operation/illumination, and verifies the test results of the vehicle's "on-board emissions diagnostic"
system." [V]; "You can help your vehicle pass an OBDII emissions inspection by keeping it properly
maintained. If the vehicle's Malfunction Indicator Lamp (MIL, or "check engine" light) indicates there may
be a malfunction or other problem, have the vehicle properly repaired." [V]; "Your vehicle's Air Bag
Warning Lamp will be checked for proper operation. You will be informed if the vehicle's air bag warning
lamp is on or is not working. This is an advisement only and not cause for rejection." [V].

### Lesson 12 reads

**fueleconomy.gov, "Keeping Your Vehicle in Shape", current page** (read 26 September 2026). Quoted:
"You can improve your gas mileage by 0.6% on average" [V] (continues after an unspaced em dash "up to 3%
in some cases" [V]); "Under-inflated tires can lower gas mileage by about 0.2% for every 1 psi drop in the
average pressure of all tires." [V]; "Properly inflated tires are safer and last longer." [V]; table
"Fuel Economy Benefit: 0.6%", "Equivalent Gasoline Savings: $0.03/gallon" [V, flattened cells]; "You can
improve your gas mileage by 1%–2% by using the manufacturer's recommended grade of motor oil. For example,
using 10W-30 motor oil in an engine designed to use 5W-30 can lower your gas mileage by 1%–2%. Using
5W-30 in an engine designed for 5W-20 can lower your gas mileage by 1%–1.5%." [V]; oil "Equivalent
Gasoline Savings: $0.04–$0.09/gallon" [V]; heading "Replacing a Clogged Air Filter on Modern Cars Improves
Performance but Not MPG" [V]; "Replacing a clogged air filter on vehicles with fuel-injected,
computer-controlled gasoline engines" [V], then after an em dash "such as those manufactured from the
early 1980s to the present" [V], then after a second "or diesel engines does not improve fuel economy,
but it can improve acceleration." [V]; "Replacing a clogged air filter on an older vehicle with a
carbureted engine can improve both fuel economy and acceleration by a few percent under normal
replacement conditions." [V]; "Cost savings are based on an assumed fuel price of $4.32/gallon." [V];
"Revised June 27, 2016. Estimates for fuel economy improvement from properly inflating tires assume a
vehicle with an average under-inflation rate of 10% across all tires (25% for worst-case tire inflation
scenarios)." [V]. The page lists its data sources, including titles on the `unread:` line; the lesson
names none of them.

**The same page in six Internet Archive captures** (http://www.fueleconomy.gov/feg/maintain.shtml, each
fetched with the `id_` suffix; maintenance section of each read in full):

- **20071226033438.** "Fixing a car that is noticeably out of tune or has failed an emissions test can
  improve its gas mileage by an average of 4 percent, though results vary based on the kind of repair and
  how well it is done. Fixing a serious maintenance problem, such as a faulty oxygen sensor, can improve
  your mileage by as much as 40 percent." [V]; "Replacing a clogged air filter can improve your car's gas
  mileage by as much as 10 percent." [V] (table "Fuel Economy Benefit: up to 10%" [V]); "You can improve
  your gas mileage by around 3.3 percent by keeping your tires inflated to the proper pressure.
  Under-inflated tires can lower gas mileage by 0.4 percent for every 1 psi drop in pressure of all four
  tires. Properly inflated tires are safer and last longer." [V] (table "Fuel Economy Benefit: up to 3%"
  [V]); "You can improve your gas mileage by 1-2 percent by using the manufacturer's recommended grade of
  motor oil." [V]; "based on an assumed fuel price of $3.10/gallon" [V].
- **20101226073534.** The tune-up and oxygen-sensor sentences as in 2007 [V]; "You can improve your gas
  mileage by up to 3.3 percent by keeping your tires inflated to the proper pressure. Under-inflated tires
  can lower gas mileage by 0.3 percent for every 1 psi drop in pressure of all four tires." [V]; "NEW
  INFORMATION: Replacing a Clogged Air Filter on Modern Cars Improves Performance but Not MPG" [V]; "A new
  study shows that replacing a clogged air filter on cars with fuel-injected, computer-controlled gasoline
  engines does not improve fuel economy but it can improve acceleration time by around 6 to 11 percent."
  [V]; "Tests suggest that replacing a clogged air filter on an older car with a carbureted engine may
  improve fuel economy 2 to 6 percent under normal replacement conditions or up to 14 percent if the filter
  is so clogged that it significantly affects drivability." [V]; "The effect of a clogged air filter on
  diesel vehicles will be tested in the near future." [V]; its data source: "a study by Kevin Norman,
  Shean Huff, and Brian West, Effect of Intake Air Filter Condition on Vehicle Fuel Economy, Oak Ridge
  National Laboratory, 2009" [V] (the lesson says "a study from Oak Ridge in 2009"; the study was not
  read); "$2.87/gallon" [V].
- **20130102005358.** As 2010 for tyres ("up to 3.3 percent", "0.3 percent") and the filter [V];
  tune-up and oxygen sensor present [V]; "$3.25/gallon" [V].
- **20190104073529.** Tyres: "Updated Information You can improve your gas mileage by 0.6% on average"
  [V], "Revised June 27, 2016." [V]; filter as the current page [V]; tune-up "an average of 4%" and oxygen
  sensor "as much as 40%" [V]; "$2.37/gallon" [V].
- **20210708122652.** As 2019, tune-up and oxygen-sensor sentences still present [V]; "$3.09/gallon" [V]. (Corrected 2026-09-26 at lesson 12 Stage 4: the first record had "$3.02"; the capture serves 3.09 in the price span, the input and `regpricedef`.)
- **20230706032230.** Tune-up and oxygen-sensor sentences absent; "Address Engine Issues Promptly" [V]
  heads the check-engine paragraph; tyres and filter as now [V]; "$3.58/gallon" [V]. (Corrected 2026-09-26 at lesson 12 Stage 4: the first record had "$3.60"; the capture serves 3.58 in all three places.)

No capture read says why any figure changed, except the 2010 filter note's "A new study shows".

**fueleconomy.gov, "Fuel Economy Myths and Misconceptions"** (https://www.fueleconomy.gov/feg/myths.shtml),
re-read in full; eleven MYTH/FACT pairs. Quoted: "Modern vehicles can be driven within seconds of being
started, though the engine should not be subjected to extreme loads until it has reached its normal
operating temperature. Plus, the quickest way to warm up a vehicle's engine is to drive it." [V]; "Modern
fuel-injected engines start very efficiently, especially when warmed up. Idling can use a quarter to a
half gallon of fuel per hour, depending on your vehicle's engine size, costing you about 1 to 2 cents per
minute. Turn off your engine when your vehicle is sitting still, except when you are waiting in traffic or
waiting in a line where you would need to turn it on and off frequently." [V]; air filter: "This is true
for older vehicles with carbureted engines, but modern fuel-injected engines have on-board computers that
automatically adjust the fuel-air ratio to the proper level. Changing a dirty air filter won't increase
your fuel economy, but it might improve your engine's performance." [V]; "Excluding full conversions that
meet all EPA certification standards, tests have shown that such devices and additives do not improve fuel
economy and may damage your engine and/or increase your tailpipe emissions." [V]; "Vehicles that are 10 or
even 15 years old will experience little decrease in fuel economy if properly maintained." [V]; premium:
"Under severe duty operation, such as towing or hauling heavy loads (especially in hot weather), higher
octane fuel might improve performance and gas mileage and reduce carbon dioxide (CO2) emissions by a few
percent." [V].

**fueleconomy.gov, "Selecting the Right Octane Fuel"** (https://www.fueleconomy.gov/feg/octane.shtml),
re-read in full. Quoted: "Octane rating is the measure of a fuel's ability to resist "knocking" or
"pinging" during combustion, caused by the air/fuel mixture detonating prematurely in the engine." [V];
"In the U.S., unleaded gasoline typically has octane ratings of 87 (regular), 88–90 (midgrade), and 91–94
(premium)." [V]; "You should use the octane rating required for your vehicle by the manufacturer. So,
check your owner's manual. Most gasoline vehicles are designed to run on 87 octane, but others are
designed to use higher octane fuel." [V]; "Higher octane fuels are often required or recommended for
engines that use a higher compression ratio and/or use supercharging or turbocharging to force more air
into the engine. Increasing pressure in the cylinder allows an engine to extract more mechanical energy
from a given air/fuel mixture but requires higher octane fuel to keep the mixture from pre-detonating."
[V]; "Using a lower octane fuel than required can cause the engine to run poorly and can damage the engine
and emissions control system over time. It may also void your warranty." [V]; "Many newer vehicles can
adjust the spark timing to reduce knock, but engine power and fuel economy will still suffer." [V];
"However, under normal driving conditions, you may get little to no benefit." [V]; "If your vehicle
requires midgrade or premium fuel, absolutely. If your owner's manual says your vehicle doesn't require
premium but says that your vehicle will run better on higher octane fuel, it's really up to you. The cost
increase is typically higher than the fuel savings." [V]. Its data sources include two titles on the
`unread:` line; the lesson names none of them.

**fueleconomy.gov, "Fuel Economy in Cold Weather"** (https://www.fueleconomy.gov/feg/coldweather.shtml),
re-read. "Minimize idling your car to warm it up. Most manufacturers recommend driving off gently after
about 30 seconds." [V].

**fueleconomy.gov, "Driving More Efficiently"** (https://www.fueleconomy.gov/feg/driveHabits.jsp),
re-read. "A large, blunt roof-top cargo box, for example, can reduce fuel economy by around 2% to 8% in
city driving, 6% to 17% on the highway, and 10% to 25% at Interstate speeds (65 mph to 75 mph)." [V];
"Avoid keeping unnecessary items in your vehicle, especially heavy ones. An extra 100 pounds in your
vehicle could reduce your MPG by about 1%." [V]; "The reduction is based on the percentage of extra weight
relative to the vehicle's weight and affects smaller vehicles more than larger ones." [V]; "Idling can use
a quarter to a half gallon of fuel per hour, depending on engine size and air conditioner (AC) use. Turn
off your engine when your vehicle is parked. It only takes about 10 seconds worth of fuel to restart your
vehicle." [V].

**fueleconomy.gov, "Fuel Economy in Hot Weather"** (https://www.fueleconomy.gov/feg/hotweather.shtml),
read in full. "Under very hot conditions, AC use can reduce a conventional vehicle's fuel economy by more
than 25%, particularly on short trips." [V]; "Driving with your windows down can also reduce fuel economy.
Open windows increase aerodynamic drag (wind resistance), making your vehicle use more energy to push
through the air. This effect is quite small at low speeds but increases at highway speeds." [V]; "Roll the
windows down at lower speeds; use the AC at highway speeds." [V]. For the windows lines it cites its
references 1 and 4, two SAE papers (2013 and 2014), and the page labels only reference 3 as ORNL; the
lesson says "two published studies" and names none. (Corrected 2026-09-26 at lesson 12 Stage 4: this
entry said the sources were "Oak Ridge papers" and the lesson "an Oak Ridge test".)

**NHTSA, "Tires"**, Internet Archive capture 20260924154655, re-read. "Properly inflating your tires can
save you as much as 11 cents per gallon on fuel. Yet only 19 percent of consumers properly inflate their
tires." [V].

**Energy Saving Trust, "Reduce emissions through efficient driving"**, Internet Archive capture
20260731174146 (gzip-encoded; the live site returned 403 to curl), re-read in full. "Many newer cars
automatically turn off when stationary in neutral. If yours doesn't, turn off your engine if you're going
to be stationary for more than a minute." [V]; "Under-inflated tyres increase your fuel consumption and can
be dangerous, so check them at least once a month and before long journeys." [V]; "Having these attached to
your car will increase drag and fuel costs, especially at higher speeds, so try to take them off when
they're not being used." [V] (roof racks, boxes and bars); "It's more fuel efficient to open a window than
use air conditioning when driving, even at higher speeds." [V]; the next sentence: "However, we appreciate
that open windows are not always pleasant on very hot days or at higher speeds, so if you need to use air
conditioning, try to use it sparingly." [V]. The page gives no test or reason for the windows line.

**The Highway Code, Rules 103 to 158** (content API, `public_updated_at` 2023-09-17), Rule 123 re-read in
full: "The driver and the environment. You MUST NOT leave a parked vehicle unattended with the engine
running or leave a vehicle engine running unnecessarily while that vehicle is stationary on a public road.
Generally, if the vehicle is stationary and is likely to remain so for more than a couple of minutes, you
should apply the parking brake and switch off the engine to reduce emissions and noise pollution. However
it is permissible to leave the engine running if the vehicle is stationary in traffic or for diagnosing
faults." [V]; "Law CUR regs 98 & 107" [V]. Part A §3 and Part B §6 recorded only the MUST sentence; the
should and the exception are added here.

**The Road Vehicles (Construction and Use) Regulations 1986, regulations 98 and 107**
(https://www.legislation.gov.uk/uksi/1986/1078/regulation/98 and /107), read in full on the live pages;
both extend to England, Wales and Scotland ("E+W+S" [V]). Reg 98(1): the driver "shall, when the vehicle is
stationary, stop the action of any machinery attached to or forming part of the vehicle so far as may be
necessary for the prevention of noise" [V], with "or of exhaust emissions" inserted from 2 February 1998
(SI 1998/1); 98(2)(a) and (b): it does not apply "when the vehicle is stationary owing to the necessities
of traffic" [V], or "so as to prevent the examination or working of the machinery where the examination is
necessitated by any failure or derangement of the machinery or where the machinery is required to be
worked for a purpose other than driving the vehicle" [V]. Reg 107(1): "no person shall leave, or cause or
permit to be left, on a road a motor vehicle which is not attended by a person licensed to drive it unless
the engine is stopped and any parking brake with which the vehicle is required to be equipped is
effectively set." [V]; 107(2) exempts fire, police and ambulance use and vehicles using the engine to drive
machinery [summarised].

## Stage 4 note, lesson 08 neutrality re-check (2026-09-26)

- Tire Rack, home page, Internet Archive capture 20260917012351 (the live site refuses automated
  readers), read 26 September 2026 [V]: "We are the only retailer that performs in-house,
  independent tire tests." A US online tyre retailer. Lesson 08 labels it so wherever AAA's report
  of its braking test appears. Its test reports were not read.

## Stage 4 note, lesson 10 (2026-09-26)

Read by the lesson 10 fixer on 26 September 2026, with curl and a generic browser User-Agent (no
personal data in any header).

- **CDC, "Carbon Monoxide Poisoning Basics"** (https://www.cdc.gov/carbon-monoxide/about/index.html),
  page updated 12 January 2026, read from Internet Archive capture 20260920191925 (live page HTTP 403
  to curl). Under "Automobile": "Never run your car or truck inside a garage that is attached to a
  house, even with the garage door open." [V] The next line, not quoted in lesson 10: "Always open the
  door to a detached garage to let in fresh air when you run a car or truck inside." [V] Lesson 10's
  "never inside a garage, even with the door open" is labelled as the course's own precaution, stricter
  than the CDC's for a detached garage. Home Repair lesson 11 quotes the same attached-garage line.
- **DVSA, MOT inspection manual, section 3** (GOV.UK content API, `public_updated_at` 2024-11-29), 3.2
  defect table: "(a)(i) Windscreen or window damaged or seriously discoloured but not adversely
  affecting driver's view" Minor [V]; "(a)(ii) Windscreen or window damaged or seriously discoloured and
  affecting the driver's view of the road or of an obligatory external mirror" Major [V]. The zone A
  drawing (winscreen_zone_A.png) shows the band filling the swept area's full height within its width;
  the text gives no height.
- **Ford, 2024 Maverick Owner's Manual**, capture 20250505042038 (pdftotext), "Wipers and Washers –
  Frequently Asked Questions": "Why are there streaks and smears on the windshield?" [V], answered "The
  wiper blades could be dirty, worn or damaged." [V]
- **The Highway Code, Annex 6** (content API), re-read: "Check the fluid levels in your vehicle at least
  weekly." [V]

## Stage 4 note, lesson 12 (2026-09-26)

Re-read with curl (default User-Agent, no personal data in any header) on 26 September 2026.

- **fueleconomy.gov maintenance page, captures 20210708122652 and 20230706032230** (`id_` and rendered):
  the assumed price is "$3.09" in 2021 and "$3.58" in 2023, in the `fuelpricebott` span, the
  `gblfuelprice` input and `regpricedef` alike [V]. The two bullets in "Lesson 12 reads" are corrected in
  place. No sum in lesson 12 used either price.
- **The same page, capture 20101226073534**: "This kind of engine is prevalent on most gasoline cars
  manufactured from the early 1980s onward." [V] (follows the "A new study shows" sentence).
- **fueleconomy.gov, "Fuel Economy in Hot Weather"** (live): "Don't use the AC more than needed or set the
  temperature lower than needed." [V]. Its data sources for the windows lines are its references 1 and 4,
  both SAE papers; reference 3 is the only one the page gives as an ORNL report. The lesson names none.
- **fueleconomy.gov, "Selecting the Right Octane Fuel"** (live): "Many newer vehicles can adjust the spark
  timing to reduce knock" [V] and "In the U.S., unleaded gasoline typically has octane ratings of 87" [V]
  re-read; the lesson's lead-ins now keep "Many" and "typically".
- **C&U regulations 98 and 107** (live, legislation.gov.uk): 98(2)(b)'s second limb, "or where the
  machinery is required to be worked for a purpose other than driving the vehicle" [V], and 107(2)'s
  exceptions (fire, police, ambulance; a vehicle "in such a position and condition as not to be likely
  to endanger any person or property" whose engine drives machinery on it [V]) re-read; the lesson now
  paraphrases both.
- **(c)1 and the neutrality table row 9** no longer say "small either way" (corrected in place, dated).
  Neither page read measures the windows-against-AC gap.

## Gate closures, lesson 15/16 (2026-09-26)

Read by the lessons 15 and 16 drafter on 26 September 2026 with curl (a generic browser User-Agent, no
personal data), pandoc or a small HTML stripper, the GOV.UK content API, the eCFR versioner API and
pdftotext. Sites that refuse automated readers (nhtsa.gov, cdc.gov, 911.gov, tesla.com: HTTP 403 today)
were read through the Internet Archive captures named. **[V]** as above. Nothing here clears an entry on
the `unread:` line.

### Lesson 15 reads

- **The Highway Code, Rules 226 to 237** (content API, `public_updated_at` 2021-09-14), read in full.
  Rule 228: "Take an emergency kit of de-icer and ice scraper, torch, warm clothing and boots, first aid
  kit, jump leads and a shovel, together with a warm drink and emergency food in case you get stuck or
  your vehicle breaks down." [V] Rule 229, headed "Before you set off" [V]: "you MUST be able to see, so
  clear all snow and ice from all your windows" [V]; "you MUST ensure that lights are clean and number
  plates are clearly visible and legible" [V]; "make sure the mirrors are clear and the windows are
  demisted thoroughly" [V]; "remove all snow that might fall off into the path of other road users" [V];
  "check your planned route is clear of delays and that no further snowfalls or severe weather are
  predicted." [V] "Laws CUR reg 30, RVLR reg 23, VERA sect 43 & RV(DRM)R reg 11" [V]. Only the first two
  items carry MUST; the other three are advice. Rule 237: "Keep your vehicle well ventilated to avoid
  drowsiness." [V]
- **The Highway Code, Introduction** (content API, `public_updated_at` 2022-07-01): "This Highway Code
  applies to England, Scotland and Wales." [V] "Such rules are identified by the use of the words
  ‘MUST/MUST NOT’." [V] "The Highway Code may be used in evidence in any court proceedings under the
  Traffic Acts (see The road user and the law) to establish liability. This includes rules which use
  advisory wording such as ‘should/should not’ or ‘do/do not’." [V] (So a capitalised "DO NOT" in a rule
  is advisory wording, not a MUST NOT.)
- **The Highway Code, Annex 6** (content API, `public_updated_at` 2022-01-29), re-read in full. "Before
  winter. Ensure that the battery is well maintained and that there are appropriate anti-freeze agents
  in your radiator and windscreen bottle." [V] "Vehicle security" opens "When you leave your vehicle you
  should" [V], then "remove the ignition key and engage the steering lock" [V]; "lock the car, even if
  you only leave it for a few minutes" [V]; "never leave children or pets in an unventilated car" [V].
  The children line is a should, advice, under "Vehicle security". Overheating: "If your engine
  overheats, you should wait until it has cooled naturally." [V]
- **The Highway Code, Rules 103 to 158**, Rule 123 re-read (as "Gate closures, lesson 11/12" records it,
  unchanged): "You MUST NOT leave a parked vehicle unattended with the engine running or leave a vehicle
  engine running unnecessarily while that vehicle is stationary on a public road." [V]
- **Met Office, "6 simple checks to prepare your vehicle for winter"** (live, HTTP 200), read in full.
  "The RAC recommends using the acronym ‘FORCES’ to remember the simple winter checks:" [V] "Battery
  problems are the reason for more RAC call-outs in winter than anything else." [V] "The RAC recommends
  changing your tyres before they get to the low limit and ideally a minimum tread depth of 3mm in icy
  or very wet conditions." [V] The page also repeats the 20p "within the legal limit" wording and says to
  "replace bulbs or fuses if required" [V]; neither is used.
- **National Highways, "Travelling in snow and ice"** (live), read in full: "Check the weather forecast.
  If snow or ice is expected, consider delaying your journey until it clears." [V] Winter kit list:
  "Water", "De-icer", "Food", "Warm clothes", "Ice scraper", "Fully charged mobile and car charger",
  "Torch", "Blankets", "Boots", "Snow shovel", "Sunglasses to cope with the low winter sun" [V].
- **National Highways, "Travelling in extreme heat"** (live), read in full: "During particularly hot
  weather, make sure your engine stays within the normal operating temperature range. If it begins to
  overheat, find somewhere safe to stop and allow it cool down." [V, grammar as in source] "If hot
  weather is forecast, take plenty of drinking water with you – enough for you and your passengers" [V;
  the dash is the page's]. Summer kit: "drinking water", "snacks that won’t be affected by the heat", "a
  fully charged mobile phone and a charger", "a hat", "sunglasses", "sun block", "any emergency medication
  you may need" [V].
- **NHTSA, "Winter Weather Driving Tips"**, Internet Archive capture 20260812080428 (the newest capture;
  live 403), read in full today. "If you are stopped or stalled in wintry weather, stay focused on
  yourself and your passengers, your car, and your surroundings." [V] "Stay with your car and don’t
  overexert yourself." [V] "Let your car be seen. Put bright markers on the antenna or windows and keep
  the interior dome light on." [V] "Be mindful of carbon monoxide poisoning. Make sure your exhaust pipe
  is clear of any snow and run your car only sporadically" [V], then after the page's em dash "just long
  enough to stay warm. Don’t run your car for long periods of time with the windows up or in an enclosed
  space." [V] "As the outside temperature drops, so does tire inflation pressure." [V] "When the
  temperature drops, so does battery power." [V] "Have a mechanic check your battery, charging system,
  belts, and for any other needed repairs or replacements." [V] "Improperly installed floor mats in your
  vehicle could interfere with the operation of the accelerator or brake pedal, increasing the risk of a
  crash." [V] "Make sure your vehicle’s reservoir is full of high-quality “winter” fluid with de-icer
  before winter weather hits." [V] "Consider installing snow tires" [V]. Kit: "a snow shovel, broom, and
  ice scraper;" [V] "abrasive material (sand or kitty litter), in case your vehicle gets stuck in the
  snow;" [V] "blankets for protection from the cold; and" [V] "a cell phone and charger, water, food, and
  any necessary medicine." [V] "Keep your gas tank close to full whenever possible." [V] EVs: "The battery
  drain due to heating can be minimized by keeping your electric vehicle as warm as possible during
  freezing temperatures." [V] "A common way to do this is plugging your vehicle in at night during the
  winter" [V] (a spaced en dash follows; split before it).
- **CDC, "Clear Snow from Tailpipes"** (PSA toolkit), capture 20260725201242 (live 403), read in full:
  "Before you drive after a storm, check to be sure that your vehicle's tailpipe is clear of snow. If the
  tailpipe is blocked, carbon monoxide, an odorless, colorless, and deadly gas produced by your engine
  can build up quickly inside your vehicle, poisoning anyone inside." [V]
- **CDC, MMWR, "Carbon Monoxide Poisonings Associated with Snow-Obstructed Vehicle Exhaust Systems --
  Philadelphia and New York City, January 1996"**, capture 20260725225621 (live 403), read in full. Case
  1: "A 4-year-old girl who had accompanied her family while they were digging their car out of a deep
  snow embankment became cold; to warm the child, she was placed in the car with both the engine and
  heater running while deep snow surrounded the rear of the automobile." [V] "The child's grandmother and
  sister also were in the car but exited the vehicle after a few minutes when the grandmother became
  dizzy and lightheaded." [V] She was "allowed to remain in the car for approximately 30 minutes before
  she was found to be unconscious and could not be awakened." [V] She was treated and "discharged on
  January 9." [V] Case 2: "the patient informed his wife he was going to test the car to ensure it would
  run after the severe storm. He made no attempt to remove any snow surrounding the car before starting
  the engine." [V] He was found unconscious about an hour later, and "residual deficits in short-term
  memory persisted." [V] Case 3: an 81-year-old found in a running car "surrounded by deep snow" [V] was
  declared dead. The second city: "During January 8-9, a total of 21 persons were admitted directly to
  the Jacobi Medical Center or transferred from other hospitals for hyperbaric oxygen therapy because of
  CO poisoning." [V] "In addition, one fatal case of CO poisoning was reported in which the victim was not
  admitted to the hospital." [V] "The 21 persons admitted to the hospital were found unconscious inside
  automobiles with engines running." [V] "Of these blizzard-related cases, eight were aged less than 16
  years and 12 were aged greater than 50 years" [V]. Editorial note: "CO is a component of vehicle
  exhaust, and CO can seep into the cabin of a vehicle through leaks or cracks in the floorboard if the
  exhaust pipe is obstructed." [V] "Because CO is colorless, tasteless, odorless, and nonirritating, its
  presence usually is not detected." [V] "Following heavy snowfalls, the public should be reminded to
  inspect vehicles to ensure that exhaust pipes are cleared of snow before engines are started." [V]
- **CDC, "Carbon Monoxide Poisoning Basics"**, capture 20260920191925, re-read (as "Stage 4 note, lesson
  10" records it): "Never run your car or truck inside a garage that is attached to a house, even with
  the garage door open." [V] and "Always open the door to a detached garage to let in fresh air when you
  run a car or truck inside." [V]
- **Road Vehicles (Construction and Use) Regulations 1986, reg 30(3)** (legislation.gov.uk, live), re-read:
  "All glass or other transparent material fitted to a motor vehicle shall be maintained in such condition
  that it does not obscure the vision of the driver while the vehicle is being driven on a road." [V]
- **Toyota, 2023 Corolla Owner's Manual (OM02568U), US**, PDF re-read, p. 46 ("Exhaust gas
  precautions"): "Exhaust gases include harmful carbon monoxide (CO), which is colorless and odorless."
  [V] "Do not leave the engine running in an area with snow build-up, or where it is snowing. If
  snowbanks build up around the vehicle while the engine is running, exhaust gases may collect and enter
  the vehicle." [V] "If the vehicle is in a poorly ventilated area or a closed area, such as a garage,
  stop the engine." [V]
- **Caltrans, "Winter Driving Tips"** (live), read in full: "You must stop and put on chains when
  highway signs indicate chains are required. You can be cited by the California Highway Patrol and
  fined if you don't." [V] "The speed limit when chains are required is 25 or 30 miles an hour." [V]
  "Chains must be installed on the drive wheels." [V] "When you put on chains, wait until you can pull
  completely off the roadway to the right. Do not stop in a traffic lane where you will endanger yourself
  and block traffic." [V] "When stalled, stay with your vehicle and try to conserve fuel while maintaining
  warmth. Be alert to any possible exhaust or monoxide problems." [V] The chain rules are the state
  department's summary of California law; the Vehicle Code section behind them was not read.
- **RAC Drive, "Winter tyres"** (live), read in full: "Winter tyres aren’t mandatory in the UK." [V]
  "You can identify winter tyres by the symbols on the sidewall. These are the M+S symbol and the
  three-peak mountain snowflake (3PMSF) symbol, and both are industry standards." [V] The page also says
  driving with snow on the car "could land you with a big fine" [V]; not used (no primary read).
- **fueleconomy.gov, "Fuel Economy in Cold Weather"** (live), read in full: "Fuel economy tests show
  that, in city driving, a conventional gasoline car's gas mileage is roughly 15% lower at 20°F than it
  would be at 77°F. It can drop as much as 24% for short (3- to 4-mile) trips." [V] "Engine and
  transmission friction increases in cold temperatures due to cold engine oil and other drive-line
  fluids." [V] "It takes longer for your engine to reach its most fuel-efficient temperature." [V]
  "idling gets 0 miles per gallon" [V; the page's em dash precedes it].
- **AAA (The Auto Club Group), "AAA: Hot Tips For Motorists During Extreme Heat"**, dated "(June 14,
  2022)" [V], live, read in full: "If a vehicle's battery is more than three years old, get it tested by
  a trained technician to determine how much more life it has." [V] "Inflate tires to the pressure
  recommended by the vehicle manufacturer, not the number molded into the tire sidewall." [V] "Check all
  vehicle fluids including coolant, motor oil, transmission fluid, power steering fluid and brake fluid
  to ensure they are filled to the appropriate levels." [V] "Never leave children or animals unattended
  in a car, not even for a short period of time. Outside air temperatures in the nineties can rise to
  125 degrees inside the vehicle very quickly and can cause brain damage or death." [V]
- **AAA Mountain West, "How Cold Weather Impacts Your Battery"** (live), re-read: "while winter weather
  is most likely to cause your battery to fail, it’s actually hot weather that does most of the damage,
  which becomes evident when the temperature drops and more power is required to get the car started."
  [V]
- **NHTSA, "Heatstroke"** (the page now titled "Child Heatstroke Prevention: Prevent Hot Car Deaths"
  [V]), capture 20260924021947 (live 403), read in full today. "More than 1,000 children have died of
  heatstroke, because they were left or became trapped in a hot car over the past 25 years." [V] "A
  child's body temperature rises three to five times faster than an adult's." [V] "In 2025, 31 children
  died of heatstroke in vehicles." [V] "Never leave a child in a vehicle unattended for any length of
  time. Rolling windows down or parking in the shade does little to change the interior temperature of
  the vehicle." [V] "Make it a habit to check your entire vehicle" [V], then, after the page's em dash,
  "before locking the doors and walking away." [V] "Over 50% of pediatric vehicular heatstroke deaths are
  a result of a parent or caregiver forgetting a child in a car." [V] "Ask your childcare provider to call
  if your child doesn’t show up for care as expected." [V] "Place a personal item like a purse or
  briefcase in the back seat, as another reminder to look before you lock." [V] "Store car keys and fobs
  out of a child's reach and teach children that a vehicle is not a play area." [V] "Always lock your car
  when you aren't using it." [V] "Even if you don't have a child of your own, a child in your neighborhood
  could get into your unlocked vehicle." [V] "Over 230 children have died from vehicular heatstroke since 1998
  because they gained access to a vehicle and became trapped." [V] "If you see a child alone in a locked
  car, act immediately and call 911. A child in distress due to heat should be removed from the vehicle
  as quickly as possible and rapidly cooled." [V] The page gives no mechanism for how a parked car heats
  up, and no source read for this lesson does; nor did this course read any law, in Great Britain,
  Northern Ireland or any US state, on leaving a child or an animal in a car or on breaking into a car to
  reach one. No UK figure for child deaths in hot cars was found.

### Lesson 16 reads

- **The Highway Code, Rules 275 to 287** (content API, `public_updated_at` 2021-09-14), re-read in full
  today; every quotation in Part E §1 matches. Additionally: Rule 283 also lists "be prepared to give
  first aid (see First aid on the road and Useful websites)" [V] and "DO NOT remove a motorcyclist’s helmet
  unless it is essential and you are trained to do so" [V]; its Rule 277 cross-reference reads "(see Rule
  277 on how to identify your location on a motorway or other high-speed road)" [V]; its last line is "If
  you are involved in any other medical emergency, you should contact the emergency services in the same
  way." [V] Rule 281: "You should slow down and be prepared to move safely into another lane or stop."
  [V] Rule 286's MUST list opens "If you are involved in a collision which causes damage or injury to any
  other person, vehicle, animal or property, you MUST" [V]. Rule 275's list opens "Other places of
  relative safety include" [V]. Rule 283 opens "If you are involved in an incident or collision or stop to
  give assistance" [V]. Rule 284: "Vehicles carrying dangerous goods in packages will be marked with plain
  orange reflective plates." [V] None of Rules 275, 276, 280 (its "other roads"
  line), 283 or 285 uses MUST: by the Introduction, their "should" and "DO NOT" are advisory wording.
- **The Highway Code, Rule 116** (Rules 103 to 158, content API), re-read: as Part E §1 records it, and
  "Law RVLR reg 27" [V]. The regulation itself was not re-read; the lesson states the Code's rule and
  names the regulation it cites, nothing more.
- **National Highways, "How to check your vehicle"** (live), re-read: "Every year our traffic officers
  deal with more than 85,000 breakdowns. Over 40 per cent of these are caused by vehicles running out of
  fuel, poor tyre maintenance, power loss and engine trouble." [V] "Always keep your tank at least one
  quarter full to avoid running out of fuel." [V] "You can be issued a Fixed Penalty Notice in some
  locations if your breakdown was foreseeable, which includes running out of fuel." [V] The law behind the
  last line was not read (gate G-L10 stays open; the lesson attributes it with its "in some locations").
- **AAA Club Alliance, "The Key To Staying Safe When Your Car Breaks Down"** (live), re-read in full; the
  quotations in Part E §3 match. Additionally: "You should never leave your vehicle if you haven’t pulled
  over, particularly if there is traffic moving around it." [V] "This is an ideal distance that will put
  you and any passengers away from the danger of flying debris should the disabled vehicle be struck."
  [V, the sentence after "40 feet"] "possibly running over the driver, tow operator, or rolling into
  traffic," [V, the rest of the neutral sentence].
- **NHTSA, "Move Over: It's the Law"**, capture 20260917235712 (live 403), read in full today; the Part E
  §3 quotations match. The "19 states and Washington, DC" line is still undated on the page.
- **California Vehicle Code § 21809** (leginfo, live), re-read in full. Status line "(Amended by Stats.
  2025, Ch. 58, Sec. 1. (AB 390) Effective January 1, 2026.)" [V]. Part E §3's quotations match.
  Subdivision (a)(2): "slow to a reasonable and prudent speed that is safe for existing weather, road,
  and vehicular or pedestrian traffic conditions." [V]
- **California DMV, California Driver Handbook, Section 8** (live), re-read; Part E §3's quotations
  match. The railroad-crossing heading is "Disabled Vehicles on Railroad Tracks" [V], and the first case
  opens "If your vehicle stalls or stops while blocking part of a train track with a train approaching
  and warning lights flashing:" [V]; the second "If you do not see a train approaching and warning lights
  are not flashing:" [V], and its steps, in full: "Exit your vehicle. Dial the number located on the
  railroad crossing posts or metal control box near the tracks. Provide the crossing number (if posted).
  Tell them a vehicle is on the tracks. Then call 911." [V] The FSP line: "During commute times, the CHP FSP provides free emergency
  roadside services in certain areas." [V]
- **eCFR, 49 CFR 392.22** (versioner API, as of 2026-09-01), re-read in full: (a) "the driver of the
  stopped commercial motor vehicle shall immediately activate the vehicular hazard warning signal
  flashers" [V]; (b)(1) "as soon as possible, but in any event within 10 minutes" [V]; placement as Part
  E §3 records. **49 CFR 393.95(f)** re-read: "Three bidirectional emergency reflective triangles that
  conform to the requirements of Federal Motor Vehicle Safety Standard No. 125, § 571.125 of this title;
  or" [V] "At least 6 fusees." [V, as (f)(2) opens]. Both are in FMCSA's rules for commercial motor
  vehicles.
- **911.gov, "Calling 911"**, capture 20260907153825 (the newest capture; live 403), read in full today:
  "An emergency is any situation that requires immediate assistance from the police, fire department or
  ambulance." [V] "The location of the emergency, including the street address" [V]; "The phone number
  you are calling from" [V]; "The nature of the emergency" [V]. "Be prepared to follow any instructions
  the call-taker gives you." [V] "Do not hang up until the call-taker instructs you to do so." [V] "Last
  Updated: 01/24/2023" [V]. The number 911 is also on NHTSA's heatstroke page (capture 20260924021947,
  above).
- **AAA Foundation for Traffic Safety, "Understanding the Circumstances of Roadside Fatalities"** (live),
  re-read: the Part E §3 quotation matches, and the victims listed are "roadside assistance providers,
  law enforcement officers, emergency medical services providers, and motorists who exited their own
  disabled vehicles as well as “Good Samaritans” attempting to help them." [V] So the 2,100 counts
  responders as well as motorists.
- **Nissan North America, 2024 LEAF Owner's Manual (US)**, PDF re-read, pp. 6-13 to 6-14 ("Towing your
  vehicle", "Towing recommended by NISSAN"): "NISSAN recommends that your vehicle be towed with the
  driving (front) wheels off the ground or that the vehicle be placed on a flatbed truck as illustrated."
  [V] "Never tow with the front wheels on the ground or four wheels on the ground (forward or backward),
  as this may cause serious and expensive damage to the motor." [V] "NISSAN recommends that you have a
  service operator tow your vehicle." [V] "Never ride in a vehicle that is being towed." [V] **Nissan UK's
  online 2023 LEAF manual returned HTTP 404 today** for every page tried, including the base URL, and has
  no Internet Archive capture; its Part E §4 quotations could not be re-read, so lesson 16 cites the US
  handbook instead.
- **Tesla, Model 3 Owner's Manual (UK English), "Instructions for Transporters"**: live 403 today; the
  only capture is 20241004175445 (October 2024), re-read today; the Part E §4 quotations match. Gate
  G-H2 stays open: the lesson cites the capture with its date and quotes no speed or distance.
- **Not closed.** G-N3 (Northern Ireland's Highway Code): not attempted; the fallback is written. G-L9
  (whether UK law requires a car to carry a triangle): not read; the lesson says so. G-L15 (a dated Move
  Over count): not read; the fallback is written. G-R5 (text-to-911): not read; not stated.

## Stage 4 note, lesson 09 (2026-09-26)

- **Ford, 2024 Maverick Owner's Manual, p. 170: the chapter is petrol, not hybrid.** Re-read today from
  Internet Archive capture 20250505042038 (`id_` raw PDF, pdftotext -raw). The contents list the
  chapter heading "Auto-Start-Stop - Gasoline" [V] over "What Is Auto-Start-Stop ....170" and
  "Auto-Start-Stop Precautions ....170" [V]. Printed p. 170's side tab reads "Auto-Start-Stop -
  Gasoline" [V] (p. 169's belongs to the Hybrid Electric Vehicle Information chapter; p. 184's reads
  "High Voltage Battery - Hybrid Electric Vehicle (HEV)" [V]). Under "AUTO-START-STOP PRECAUTIONS" on
  p. 170: "WARNING: Apply the parking brake, shift into park (P), switch the ignition off and remove the
  key before you open the hood or have any service or repair work completed. If you do not switch the
  ignition off, the engine could restart at any time. Failure to follow this instruction could result
  in personal injury or death." [V] The same box is on p. 184 for the hybrid. So Ford gives the restart
  warning for the petrol truck's stop-start as well as for the hybrid; no lesson may say only hybrids
  and EVs carry it on Ford's authority. The lesson 09/10 gate-closure entry above is corrected in place.
- **Ford p. 308**, the dipstick overview: "Minimum. A", "Nominal. B", "Maximum. C" [V]: three marks, not
  two. **Ford p. 309**: "Coolant concentration should be checked using a refractometer." [V]; "Do not
  remove the coolant reservoir cap when the engine is on or the cooling system is hot." [V]
- **The AA, "How to check and top up your car engine oil"**, re-read live today: "If the top of the oil
  streak is between the minimum and maximum marks, the level is fine. If the level is below halfway
  between the marks, then we would recommend adding some oil. If it's close to or even below the minimum
  mark, then you need to add some oil." [V] "This darkening is quite normal and is nothing to worry
  about. It can even look black right after you refill it, when new oil mixes with leftover old oil.
  However, if it's black and the texture is sludgy, it'll need replacing." [V] Quote the middle sentence
  of each only with its neighbour.
- **Nissan, 2024 LEAF (US)**, re-read live today: p. 8-2, "To avoid injury, always disconnect the
  negative 12-volt battery cable before working near the fan." [V] The "below the minimum or MIN mark"
  sentence is in the brake warning light section (pp. 2-17 and 2-20), not the p. 9-3 checklist, which
  says "Make sure that the brake fluid levels are between the MAX and MIN lines on the reservoir." [V]
- **Toyota, 2023 Corolla (US), OM02568U**, re-read live today: "It is normal for the brake fluid level to
  go down slightly as the brake pads wear out or when the fluid level in the accumulator is high." [V]
- **C&U reg 34(1)**, re-read live today: "one or more efficient automatic windscreen wipers" [V]; reg
  34(6) "while a vehicle is being used on a road" [V].

## Gate closures, lesson 13/14 (2026-09-26)

*Read by the lesson 13 and 14 drafter on 26 September 2026 with curl and a generic browser
User-Agent (no personal data in any header), text extracted with pdftotext (-layout and -raw),
pandoc, or the GOV.UK content API. Quotations marked [V] were copied from that extracted text; line
breaks and PDF hyphenation joined. Nothing here clears an entry on the `unread:` line.*

**Gates.** G-N4 not closed: no photograph used in either lesson (fallback; lesson 13 has an SVG
schematic labelled "schematic"). G-H6 not closed: what each IMI level permits was not read; lesson
14 writes the fallback. G-R6 not closed: no normalised EV fire dataset; lesson 14 makes no
comparison. G-H9: UK charging facts from ESF only; the DNO notification duty is left out. G-H2: Tesla
not used. Nissan UK's online LEAF pages now load their text from JSON and were not re-read; neither
lesson cites them. ASE's certification page returned no test list to curl; the ASE hybrid test is
not named.

**Correction to Part B §4 (the AA jump page).** Part B says the AA's booster-pack steps remove the
leads with the engine running. As re-read today (page "Last updated: 26 June 2024" [V]), booster
step 7 reads "Turn off the engine." [V] then "Remove the leads in the reverse order to how you placed
them on (first disconnect the black lead, then the red lead)." [V] So the AA page is consistent with
itself (engines off before leads come off, in both methods, and its safety list says "Don't remove
the jump leads while the car engines are running." [V]); what it disagrees with is Ford, Nissan and
HSE, which have the rescued car running. OUTLINE lesson 13's "the AA's internal inconsistency" is
not carried into the lesson. Also: Ford's hybrid jump steps run over printed pp. 286 to 287, not
p. 286 alone.

- **Nissan, 2024 LEAF Owner's Manual (US)**, PDF (URL as Part B), pp. 6-10 to 6-13, EV-8, CH-2,
  CH-12 and 8-2 re-read in full. Part B's quotations stand. New: "The booster battery must be rated
  at 12 volt." [V]; "Whenever working on or near a 12-volt battery, always wear suitable eye
  protectors (for example, goggles or industrial safety spectacles) and remove rings, metal bands, or
  any other jewelry." [V]; "Do not attempt to perform a jump start on the 12-volt battery at the same
  time that the Li-ion battery is being charged." [V] (p. 6-10); "However, a gasoline engine vehicle
  can be used to jump start LEAF's 12-volt battery." [V]; "Do not allow the two vehicles to touch."
  [V]; "Connect jumper cables in the sequence as illustrated" [V] (p. 6-11); "carefully disconnect
  the negative cable and then the positive cable" [V], the sequence given as 4 to 1, with the LEAF in
  READY and the booster's engine started at step 8 (p. 6-12); "An EV cannot be push-started or
  tow-started. Attempting to do so may cause traction motor damage." [V] (p. 6-13). EV-8: "The system
  can be hot during and after starting and when the vehicle is shut off." [V]; "Follow the warning
  labels that are attached to the vehicle." [V]. CH-2: "Do not touch the plug or the Genuine NISSAN
  Adapter if they are wet or with wet hands." [V]; "Do not touch the vehicle and EVSE when there is
  lightning." [V]. CH-12, in its list of conditions: "Do not use the EVSE in structures using
  fuse-based circuit protection." [V]; "Do not use the EVSE on electrical circuits with two-prong
  outlets." [V]; "Do not use the EVSE if other devices are plugged into the same circuit." [V]. p. 8-2
  continues after the fan sentence: "To avoid injury, always disconnect the negative 12-volt battery
  cable before working near the fan." [V] (reported as Nissan's; the course does not teach it).
- **Ford, 2024 Maverick Owner's Manual**, capture 20250505042038, printed pp. 184 and 283 to 287
  re-read in full (pdftotext -raw). Part B's quotations stand. p. 184, whole: "Apply the parking
  brake, shift into park (P), switch the ignition off and remove the key before you open the hood or
  have any service or repair work completed. If you do not switch the ignition off, the engine could
  restart at any time." [V]. p. 283: "In the event of damage or fire involving an electric vehicle or
  hybrid-electric vehicle" [V]; "Move your vehicle to a safe, nearby location and remain on the
  scene." [V]. p. 284: "Avoid contact with leaking fluids and gases, and remain out of the way of
  oncoming traffic until emergency responders arrive." [V]; the fire paragraph whole, "As with any
  vehicle, call emergency assistance immediately if you see sparks, smoke or flames coming from the
  vehicle. Remain a safe distance from the vehicle and try to stay clear of the smoke." [V]. p. 285: "Park the booster vehicle close to the hood of the
  disabled vehicle, making sure the two vehicles do not touch." [V]; "Use only a 12 volt supply to
  start your vehicle." [V]; "Do not connect the negative jumper cable to any other part of your
  vehicle. Use the ground point." [V]; "If you are using a jump pack or booster box, follow the
  manufacturer's instructions." [V]; "Make sure that the cables are clear of any moving parts and fuel
  delivery system parts." [V]. p. 286, starting: "Start the engine of the booster vehicle and
  moderately rev the engine" [V].
- **Toyota, 2023 Corolla Owner's Manual (US), OM02568U**, PDF (URL as Part E), pp. 383 to 386 re-read
  (pdftotext -layout). p. 383: "You can also call your Toyota dealer or a qualified repair shop." [V].
  p. 384: "If you have a set of jumper (or booster) cables and a second vehicle with a 12-volt battery,
  you can jump start your vehicle by following the steps below." [V]; the four connection points, in
  order: "Positive (+) battery terminal (your vehicle)" [V], "Positive (+) battery terminal (second
  vehicle)" [V], "Negative (-) battery terminal (second vehicle)" [V], "Metallic point shown in the
  illustration" [V]. p. 385: "Start the engine of the second vehicle. Increase the engine speed
  slightly and maintain at that level for approximately 5 minutes to recharge the battery of your
  vehicle." [V]; "Once the vehicle's engine has started, remove the jumper cables in the exact reverse
  order from which they were connected." [V]; "Once the engine starts, have the vehicle inspected at
  your Toyota dealer as soon as possible." [V]; "The engine cannot be started by push-starting." [V].
  p. 386: "Do not allow the other end of the jumper cable connected to the "+" terminal to come into
  contact with any other parts or metal surfaces in the area, such as brackets or unpainted metal."
  [V]; "When working with the battery, always wear safety glasses" [V].
- **HSE, INDG139(rev1)** (URL as Part B), paras 20 and 24 to 31 re-read (pdftotext -raw). Part B's
  quotations stand. Para 20, whole first two sentences: "Many explosions happen when batteries are
  being connected or disconnected. The sparks produced when this is done incorrectly may cause the
  battery to explode, especially if it has just been charged." [V] (para 20's own procedure is a
  workshop disconnection routine, not taught). Para 25: "Usually the negative terminal of the battery
  is connected to the chassis." [V]. Para 28, the black-lead bullet whole: "Use the black jump lead to
  connect the earthed terminal (the terminal connected to the vehicle chassis) of the good battery to
  a suitable unpainted metal part of the chassis or engine of the dead vehicle. The point of
  attachment should be at least 15 cm from the battery and away from fuel and brake lines." [V]. Para
  31: "Stop the engine of the good vehicle and turn off the ignition. Leave the engine of the other
  vehicle running" [V], the sentence continuing after the leaflet's spaced dash, "the battery is
  still flat, so you will need to drive several miles before it has enough energy to restart the
  engine." [V]; "Do not allow the exposed metal parts of the leads to touch each other or other metal
  parts of the vehicles until both leads have been disconnected." [V].
- **The AA, "How to jump start a car in 9 steps"** (URL as Part B), re-read in full. Part B's
  quotations stand. New: "Don't let any metal objects touch the car batteries - these could cause a
  spark and possibly make the battery explode." [V] (hyphen as in source); "Don't use jump leads that
  are damaged" [V]; "Their car must have a fully charged battery with the same voltage as yours
  (usually 12 volts)." [V]; "Leave both cars to idle, at a fast pace, for around 10 minutes" [V];
  "Turn off both cars' engines and carefully disconnect the leads in the reverse order to the way they
  were connected (remove the black lead from your car first and finish with the red lead from the
  other car)" [V]; "If your car won't start there's probably a more serious problem requiring
  professional help" [V]; "Yes, it's possible to jump start a car in the rain, though it's not ideal."
  [V]. The page also says a jump start "can carry potential risks, like shocking the user" [V], which
  sits against HSE's "little risk of electric shock"; not used.
- **The Highway Code, "Breakdowns and incidents"** (content API, `public_updated_at` 2021-09-14).
  Rules 276 and 277 re-read in full; Part E's quotations stand, including "DO NOT attempt repairs on
  your vehicle" [V] under Rule 277's "you should".
- **The Highway Code, "General rules, techniques and advice for all drivers and riders (103 to
  158)"** (content API, `public_updated_at` 2023-09-17). Rule 121, whole: "Brakes affected by water.
  If you have driven through deep water your brakes may be less effective. Test them at the first
  safe opportunity by pushing gently on the brake pedal to make sure that they work. If they are not
  fully effective, gently apply light pressure while driving slowly. This will help to dry them
  out." [V] Advice, no MUST.
- **The Highway Code, Annex 6** (content API, `public_updated_at` 2022-01-29). The fire paragraph
  re-read; it stands.
- **NHTSA, "Electric and Hybrid Vehicles"**, capture 20260924154857 re-read (no newer capture exists;
  the live page is 403 to curl). Part B's quotations stand. New: "If your EV has been exposed to flood
  conditions and you suspect your battery is damaged, contact your dealer and/or emergency services."
  [V]; in the flood FAQ, "If you suspect your battery is damaged, contact your dealer and/or emergency
  services." [V]; "Exposed electrical components, wires, and high-voltage batteries may cause
  high-voltage shock hazards." [V]; "Physical damage to the vehicle or high-voltage battery may result
  in immediate or delayed release of toxic and/or flammable gases and fire." [V].
- **NFPA, "Electric Vehicles: Safe Charging at Home"**, capture 20240718031252 re-read (the live URL
  returned "Runtime Error" today). Part B's quotations stand. New: "Cover charging station outlet to
  keep water out." [V]; "Check chargers and cords for damage before using." [V]; "Only use outdoor
  rated charging stations outdoors." [V].
- **Electrical Safety First, "Electric vehicles"** (URL as Part B), re-read in full. Part B's
  quotations stand, the AVOID list included. New: "Charge your EV at home with a dedicated EVCP." [V].
- **Electrical Safety First, "Driven to danger"** (May 2019, URL as Part B), re-read in full. Part B's
  quotations stand. The survey note: "All consumer research, unless otherwise stated, was undertaken
  from 01 to 16 January 2019 by Censuswide with a sample of 1,500 adults who own a plug-in vehicle
  (whether hybrid or all-electric) across the United Kingdom." [V]. The body text rounds the 73.7% to
  "74%" [V].
- **Derbyshire Fire and Rescue Service, "Electric Vehicle Safety Advice"** (URL as Part B), re-read in
  full. Part B's quotations stand. New: "If you are charging from a 13A mains socket in your home,
  ensure the wiring in your property has been checked prior to doing so." [V]. Its opening sentence
  calls EV fires "rare and less likely compared to internal combustion engine (ICE) vehicles" [V] on
  the London 2019 counts; not normalised, not used (decision 8, G-R6).
- **GOV.UK, "Electric vehicle chargepoint grants"** (content API, `public_updated_at` 2026-04-01),
  re-read in full. Part B's quotations stand.
- **DVSA, MOT inspection manual, Introduction** (content API, manual updated 1 June 2026), section 20
  re-read in full: "The high voltage components on these vehicles are often inaccessible. However,
  where they are accessible, they are well insulated and do not present a high risk." [V]; "It is
  considered best practice when testing these vehicles to avoid touching any high voltage components
  and wiring." [V]; the colour, 48 V and restart sentences stand as recorded for lesson 01.
- **AFDC, "Maintenance and Safety of Electric Vehicles"**, re-read in full. Part A's quotations stand.
  New: "light-duty vehicles are required to have safety features that can deactivate or isolate the
  electrical system when they detect a collision or short circuit." [V]
- **ASE Education Foundation, 2024 Automobile Program Standards** (URL as Part A), the supplemental
  safety task and glossary re-read: "Demonstrate knowledge of hazards related to high voltage
  systems/electric vehicles, including electrocution, fire, explosion, arc flash, gases and fumes,
  hazardous chemicals, and EMF, and how to properly respond to emergency situations." [V]; "HIGH
  VOLTAGE – Automotive system voltages greater than 30 VAC or 60 VDC." [V] (the glossary's dash).
- **IMI, "IMI TechSafe"** and the May 2026 news release (URLs as Part B), re-read in full. Part B's
  quotations stand, including "calling on government to mandate its use" [V] and "just over a third
  of technicians have some level of qualification to work on electric vehicles" [V].

**Places used:** lesson 13, Portree and Grand Rapids; lesson 14, Haverfordwest and Sarasota. Each
checked with `grep -rlw` outside car-basics/research on 26 September 2026 and unused.

## Stage 4 note, lesson 11 (2026-09-26)

Fixer, after one fresh-context Tier A review. Reads made by the fixer with curl (generic browser
User-Agent, no personal data in any header):

- **RAC, "Reasons your amber or orange engine management light (EML) is on"** (URL as Part B §3),
  re-read live. The steady-light advice and the sentence after it, now quoted together in lesson 11:
  "While you can typically drive whilst your engine light is on, we'd strongly recommend getting a
  mechanic to look at your car as soon as possible." [V] "Continuing to drive with this light on will
  likely lead to further damage to the engine and the surrounding systems." [V] The second sentence
  must not be dropped from the first again.
- **RAC, "Dashboard warning lights guide"** (URL as Part B §3), re-read live; the table's red row
  "Stop driving as soon as it is safe to do so and call for recovery." [V] stands.
- **DENSO Europe, "Why might the glow plug warning light come on?"** (URL as Part A §1), re-read live.
  The page now shows a date, 10 November 2023 (lesson 2's footnote says "No date shown"; a later
  pass may update it). "it should not be ignored if it remains on while the engine is running." [V];
  new: "Generally, the most likely reasons for the warning light are an underlying issue with
  one/all of the glow plugs or the sensors that control them, but it could also indicate a problem
  with the engine itself." [V] Its "10 to 15 seconds" rule stays unused (Part A §1).
- **EPA, EPA420-F-03-042** (URL as Part A §5), re-read live, pdftotext -raw. Question 4's OBD II list
  breaks the word at a line end ("exhaust gas re-" / "circulation (EGR) system"); the OBD I list,
  question 5, question 11 and the Attachment all spell it "re-circulation". The gate-closure
  "correction" to Part A is withdrawn in place. Question 7: "Since most manufacturers requested and
  received OBD waivers during the 1994 and 1995 model years, 1996 is commonly identified as the first
  year of full implementation once waivers were no longer available." [V]
- **DVSA, MOT inspection manual, section 1 "Brakes"** (content API, `public_updated_at`
  2026-06-01), re-read live: 1.1.10 "(f) Brake fluid warning light illuminated or defective" Minor
  [V]; "(g) Incorrect functioning of brake fluid level warning device" **Minor** [V]. The lesson 11/12
  gate closure recorded (g) as Major; corrected there in place. Lesson 11 does not use (g).
- **Ford, 2024 Maverick Owner's Manual, p. 164** (capture 20250505042038): **not re-read by the
  fixer.** The Internet Archive was unreachable from the fixer's sandbox. Lesson 11 now quotes p. 164's
  "stop your vehicle as soon as it is safe to do so" (the MIL and the powertrain warning lamp lit
  together) and describes p. 183's lamps as temperature, battery and engine on the reviewer's reading
  of the same capture that day, marked [V] in the review. The second pass re-reads pp. 164 and 183.
- **New York DMV** threshold: the lesson now gives it as a rating, "gross vehicle weight rating
  (GVWR) less than 8,501 pounds" (as recorded in the lesson 11/12 gate closures), with 3,856 kg added
  (8,501 × 0.45359237 = 3,856.0).
- **GAO-15-705** is cited in lesson 11 for the 2015 count only, as recorded in "Stage 4 note, lesson
  01"; "fewer since" rests on Texas (Part D).

## Stage 4 note, lesson 11 second pass (2026-09-26)

- DENSO Europe, "Why might the glow plug warning light come on?", re-read live 26 September 2026
  [V]: "In the worst case, it is possible that the engine or DPF will suffer damage, so immediate
  remedial action to find the underlying cause must be undertaken." Lesson 11 paraphrases it
  beside "should not be ignored".
