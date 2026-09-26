# Sources: Home Repair and Maintenance

<!-- unread: 18th Edition, 210.12, 210.8, A Citizen's Guide to Radon, ADAO, afcisafety.org, American Ladder Institute, Anglian Water, ANSI Z87.1, Approved Document A, Approved Document G, Asbestos Disease Awareness Organization, Asbestos in the Home, Asbestos: are you at risk?, Assessing Damp in Historic Buildings, Association of Professional Independent Chimney Sweeps, BEIR VI, Better Business Bureau, BS 7671:2018, BS EN 50292, Buy Safe, Certification Register, Chimney Fire Safety Week, Collins Complete DIY Manual, Competent Persons Register, Construction Skills Certification Scheme, Consumer Credit Act, Consumer Reports, Current Best Practices for Preventing Asbestos Disease Among Brake and Clutch Repair Workers, Digest 245, ELECSA, Electrical Competent Person Register, EN 131, EN 166, Fatal Incidents Associated with Non-Fire Carbon Monoxide Poisoning from Engine-Driven Generators, Get Water Fit, Glue Traps (Offences) Act, GS38, Guild of Master Chimney Sweeps, Haynes, Hazards in Social Housing, Health and Safety Code 19825, Home Accident Surveillance System, Home Electrical Fires, Hospital Episode Statistics, How Safe Is Your Home, HS034, HSENI, HSG274, HUD Guidelines for the Evaluation and Control of Lead-Based Paint Hazards in Housing, IFGC, INDG455, Institute for Justice, International Fuel Gas Code, International Plumbing Code, International Residential Code, Iowa Radon Lung Cancer Study, IRC, L143, LABC Front Door, Lead Safe Housing Rule, License to Work, Moulton Niguel, National Association of Chimney Sweeps, National Electrical Code, National Pest Management Association, NFPA 70, NFPA 72, NFPA 720, PaintSafe, Party Wall etc. Act 1996, PGMA G300, Planning Portal, R105, Registered Competent Person Electrical, Renovate Lead-Safe Fact Sheet, Safe removal of lead paint, SELECT, spab.org.uk, Spartanburg Water, Steps to LEAD Safe Renovation, Storage or Tank-Type Water Heaters, Technical Booklet E, Texas Chemistry Council, Texas Occupations Code 1305.003, This Old House, Tolerable Standard Guidance, Total Exposure Assessment Methodology, Trade Association Forum, UL 2034, UL 217, UL 2201, Uniform Plumbing Code, Warm Homes Plan, water.org.uk, Wessex Water, which.co.uk, Which? Trusted Traders -->

*Stage 1 research, 2026-09-25. Written before any lesson is drafted. Four researchers each worked
one part of the subject in parallel, in a fresh context. Part A covers how a house works, plus the
manuals, syllabi and free resources. Part B covers tools, ladders, common repairs, decorating,
pests, seasonal maintenance and hiring a tradesperson. Part C covers the rules that reserve work to
registered or licensed trades. Part D covers the hazards: asbestos, lead paint, carbon monoxide,
electric shock and electrical fire, and dust, fumes and radon. The four parts are brought together
here. The synthesiser re-read the gas-work law independently of Part C (next section) because it is
the claim in this course most likely to be stated wrongly. All reading was done on 2026-09-25 unless
a capture date is given. For each source the parts say what it is good for, what it establishes and
exactly how much of it was read.*

**This is a practical, safety-critical course that states law in two countries and four UK
nations.** It is not a standards 3.4 domain as a whole (`sensitive_domain: false` stays), but two
parts of it need more care than a Foundation course usually gets:

- **The law.** Every legal statement is general information, not legal advice, and the lesson must
  say so. Every rule carries its jurisdiction in the same sentence ("In England ...", "In Florida
  ..."), because the rule changes at every border (Part C).
- **Occupational licensing is an economics question** (standards 3.4 lists economics). The lesson
  that asks whether licensing does what it claims should get the neutrality pass even though the
  course is not flagged sensitive. At present that side of the question rests on one federal
  report (Part C, C33). The trade and safety case appears only in Electrical Safety First's
  consumer advice, and the Institute for Justice material is unread.

A wrong instruction here could hurt someone: gas, a ladder, an asbestos sheet, a live cable. Every
number goes through the fact-check against the source text, not against this file. This file tells
the drafter which text to check against.

**How to read the quotation marks.** The four parts use one convention:

- **[V]**: copied from text the researcher extracted directly. That means curl with pandoc or an
  HTML stripper, pdftotext on the publisher's PDF, the GOV.UK content API, the legislation.gov.uk or
  eCFR renderers, the PubMed E-utilities API, or an Internet Archive capture (ID given).
  **[V, catalogue note]** (Part A): copied from a library catalogue's contents note, not the book.
- **[T]**: returned by the WebFetch summarising tool, which is a small model. Only Part A has any,
  and only for the Collins manual's contents. Nothing marked [T] is quoted in a lesson.
- **Snippet only**: seen only in a search result. Nothing so marked is in quotation marks, and
  nothing so marked may be stated in a lesson as a finding.
- **Abstract only** (Part B, the ladder-injury papers): a lesson may report what the abstract says
  and no more.

**The raw extracts are not durable.** The parts name text files in a scratchpad `hr/raw/` folder.
That folder is session scratch and will not survive. Part B also reports that the shared helper was
overwritten partway through, so some of its later extracts sat in `hr/B/raw/`. The quotations below
were checked when they were read. A drafter who needs a quoted line re-reads the live source, not a
raw file.

## Access and provenance problems a drafter inherits

1. **US DOE Energy Saver is gone** (Part A). Every energy.gov/energysaver URL returned 404 on
   2026-09-25, and the section root redirects to the energy.gov home page. The furnace, water
   heater, heat pump, ventilation and air-sealing pages were read from 2024 and 2025 Internet
   Archive captures (IDs in Part A). **No lesson links energy.gov/energysaver as a live
   resource.** If a lesson cites those pages, it cites them "as archived". ENERGY STAR is live
   and covers some of the same ground.
2. **Sites that block automated readers.** Gas Safe Register (403), Water UK, Ofwat, SPAB, the live
   Energy Saving Trust and Historic England pages, ESFi's AFCI page, CPSC's HTML safety-centre
   pages and CDC all blocked curl. The Gas Safe pages that matter were read from Internet Archive
   captures: **20251023004454** ("Don't DIY when it comes to gas appliances") and
   **20260221055602** ("Concerns & Reporting Illegal Gas Work"). EST was read from a capture.
   Electrical Safety First loads some page bodies by script, which is why its RCD figures are
   gates (below).
3. **INDG455 no longer exists** (Part B). HSE's ladder leaflet was replaced in July 2021 by
   **LA455**, published jointly by the Ladder Association and HSE (current revision "09/26"). LA455
   says it is written for employers. Cite LA455 and HSE's web guide, never INDG455.
4. **CPSC's "Asbestos in the Home" guide has been removed**, and its archived copy is a 404
   (Part D). It is on the unread line.
5. **Defra's lead paint leaflet was withdrawn in April 2024** (Part D, D19). The British Coatings
   Federation's current guidance (HS032, October 2025) still points readers to it. A lesson that
   uses Defra's figures (the 450°C heat-gun limit, the 1960s date) must say the leaflet has been
   withdrawn.
6. **NFPA's web pages rendered empty** through curl, the Internet Archive and WebFetch (Part D). The
   NFPA figures in this file come from dated PDF reports: 2009 to 2013 and 2015 to 2019 data, and
   the February 2022 electrical-fires report. There is no current NFPA web guidance on smoke
   alarms, CO or electrical fires.
7. **The manuals were read only as catalogue contents** (Part A §7). This covers Reader's Digest
   (1973 contents note), Black & Decker (2008 contents note) and Collins (publisher description via
   WebFetch, [T]). A lesson may name them as further reading but must not attribute any content to
   them beyond the chapter headings. **Collins Complete DIY Manual** is on the unread line.
8. **England is not the UK, and Wales is not England.** This is the single largest source of error
   the research found (Part C). England and Wales share the Building Regulations 2010 but no
   longer share their electrical rules. Scotland and Northern Ireland have separate systems.
   GOV.UK's "Building regulations approval" guide covers England and Wales in one summary that is
   right only for England on electrics. **The course description says "the UK"; lessons must name
   the nation.**
9. **Everything with a date on it moves.** All phone numbers, fees, thresholds and editions were
   read on 2026-09-25 and must be rechecked at drafting. Examples: gas emergency numbers,
   California's $1,000 minor-work threshold (in force from 2025), the Consumer Contracts
   Regulations' £42 threshold, the FTC's $25 and $130 thresholds, AD P 2013, and the 10-year s36
   enforcement window (commenced in Wales on 1 July 2026). The current edition of BS 7671 is also
   unread, and a lesson does not name an edition as current.

**The `unread:` line is the build's enforcement.** It combines the four parts' "Not read" lists,
deduplicated. The build matches each entry as a whole word, case-sensitively. These changes were
made so that no source that **was** read is blocked:

- **Gas Safe Register** (Part D) is **off the line**. Part C and the synthesiser read the Register's
  own pages from Internet Archive captures. Lessons will name the Register constantly.
- **BS 7671** bare (Part D) is **off the line**. Nobody read the standard. But AD P, the IET FAQ and
  ESF, which were read, all name it, and a lesson may say what they say about it. The unread edition
  stays blocked as **BS 7671:2018** and **18th Edition**. Whether a lesson may describe "safe zones"
  for cables is a gate, not a build rule.
- **Federal Trade Commission** (Part C) is **off the line**, because Part B read the FTC's contractor,
  disaster-scam and Cooling-Off Rule pages. The FTC licensing material Part C meant is covered by
  gate G-L3.
- **ESFi** and **Electrical Safety Foundation International** (Part C) are **off the line**, because
  Parts A and D read ESFi's GFCI page.
- **Approved Document J** and **Approved Document H** (Part C) are **off the line**. Part D read AD J
  (2010 edition incorporating the 2022 amendments) on alarms and servicing. Part A read AD H 2015
  Section 1 and Table 1 on traps. AD J's ventilation sections were not read, and neither were AD
  H's other sections. That limit is enforced by the fact-check, not the build.
- **Electrical Safety Standards in the Private Rented Sector** (Part D) is **off the line**, because
  Part C read regulation 3 of those Regulations (C12).
- The manuals Part A read as catalogue contents only (Reader's Digest, Black & Decker) are **off the
  line**, so a lesson can name them as further reading. Collins, known only through [T], is **on**.
- **IRC**, **R105**, **International Residential Code**, **National Electrical Code**, **NFPA 70**,
  **210.8** and **210.12** stay on. Nobody read a model code's text. A lesson may say "the model
  codes that states adopt" and cite CPSC's or ESFi's account of where GFCIs are required, but it may
  not quote or cite a code section.

## The gas-work law, stated exactly

This is the point the brief named as a known confusion. The synthesiser read the primaries
independently of Part C, and the two readings agree. The sources:

- **The Gas Safety (Installation and Use) Regulations 1998 (SI 1998/2451), regulation 3**, from
  https://www.legislation.gov.uk/uksi/1998/2451/regulation/3. Read in full on 2026-09-25 via
  curl and pandoc. Page status: [V] "There are currently no known outstanding effects for The Gas
  Safety (Installation and Use) Regulations 1998, Section 3." Regulation 3 extends to England,
  Wales and Scotland (Part C, C13).
- **HSE, L56, *Safety in the installation and use of gas systems and appliances*, Approved Code of
  Practice and guidance**, [V] "L56 (Fifth edition)", [V] "Published 2018", from
  https://www.hse.gov.uk/pubns/priced/l56.pdf, via pdftotext. Read: regulation 2(1) guidance
  paragraphs 52 to 55, the regulation 3 summary, ACOP paragraph 81, guidance paragraphs 82 to 87,
  and the glossary entry "gas engineer".
- **HSE, "Gas safety: home owners"**, https://www.hse.gov.uk/gas/domestic/faqownerocc.htm, read in
  full via curl.
- **Gas Safe Register, "Don't DIY when it comes to gas appliances"**, read in full from Internet
  Archive capture 20251023004454. **Gas Safe Register, "Concerns & Reporting Illegal Gas Work"**,
  read in full from capture 20260221055602.

**Regulation 3, word for word (the parts that decide the question):**

- 3(1): [V] "No person shall carry out any work in relation to a gas fitting or gas storage vessel
  unless he is competent to do so."
- 3(3): [V] "Without prejudice to the generality of paragraphs (1) and (2) above and subject to
  paragraph (4) below, no employer shall allow any of his employees to carry out any work in
  relation to a gas fitting or service pipework and no self-employed person shall carry out any
  such work, unless the employer or self-employed person, as the case may be, is a member of a class
  of persons approved for the time being by the Health and Safety Executive for the purposes of this
  paragraph."
- 3(4): [V] "The requirements of paragraph (3) above shall not apply in respect of— (a)the
  replacement of a hose or regulator on a portable or mobile space heater; or (b)the replacement of
  a hose connecting a re-fillable cylinder to installation pipework." (The dash and the missing
  spaces after "(a)" and "(b)" are as legislation.gov.uk renders them. The lesson quotes the words,
  not the rendering.)
- 3(7): [V] "No person shall falsely pretend to be a member of a class of persons required to be
  approved under paragraph (3) above."

**HSE's Approved Code of Practice and guidance (L56), word for word:**

- Guidance para 52: [V] "For the purposes of GSIUR, ‘work’ includes do-it-yourself activities, work
  undertaken as a favour for friends and relatives, and work for which there is no expectation of
  reward or gain, eg voluntary activity for charities. This means that anyone carrying out such work
  must have the necessary competence, as required by regulation 3(1). However, membership of an
  HSE-approved class of persons (under regulation 3(3)) is required only by businesses carrying out
  gas-fitting work."
- Guidance para 83: [V] "Anyone who does work on a gas fitting or gas storage vessel must be
  competent to do so (whether or not they are required to be a member of an approved class of
  persons). Therefore, do-it-yourself gas engineers and those performing favours for friends and
  relatives all need to have the required competence."
- ACOP para 81 (Code text, not guidance): [V] "Gas work should only be undertaken: (a) by a person
  who has successfully completed an industry-recognised training course followed by assessment of
  competence." Limbs (b) and (c) cover a currently or previously registered person who has proved
  competence through a certification scheme, and premises outside the Regulations.
- Guidance para 85: [V] "Competence is a combination of practical skill, training, knowledge and
  experience to carry out the job in hand safely, and ensuring the installation is left in a safe
  condition for use."
- Glossary, "gas engineer": it includes anyone who does the work, [V] "whether they are an employer,
  employee, self-employed or working on their own behalf, ie in a ‘do-it-yourself’ activity."
- The ACOP's legal status, from the copyright page as Part C read it (C14): [V] "If you are
  prosecuted for breach of health and safety law, and it is proved that you did not follow the
  relevant provisions of the Code, you will need to show that you have complied with the law in
  some other way or a Court will find you at fault."

**HSE's page for home owners, word for word:**

- [V] "Anyone employed to work on gas appliances in domestic premises must be a Gas Safe registered
  engineer and competent in that area of gas work."
- [V] "HSE strongly advises that all gas appliances, flues and pipework should be installed,
  regularly maintained and serviced at least annually by a Gas Safe registered engineer."
- [V] "It is illegal for anyone to use a gas appliance if they suspect it is unsafe."

**Gas Safe Register, word for word (archived pages):**

- [V] "By law, anyone carrying out work on gas appliances and fittings as part of their business
  must be competent and registered with us. That’s why you should only ever use a Gas Safe
  registered engineer to carry out gas work in your home."
- [V] "Don’t DIY with gas appliances, always use a Gas Safe registered engineer"
- [V] "It is illegal for someone who is not Gas Safe registered to fit a gas appliance or do other
  gas work and then have the work checked by a Gas Safe registered engineer. Both parties would be
  breaking the law."
- What a consumer may do: [V] "you can perform the tasks set out in the user’s instructions,
  (provided by the appliance manufacturer) that are intended for the user to carry out. This would
  not be a breach of the law." And: [V] "The law allows you to replace or adjust any component or
  control that is designed to be operated or replaced by the consumer e.g., a cooker tap control
  knob."
- [V] "Approximately two thirds of illegal gas work inspected by the Register has been found to be
  unsafe."

**What this means, and how a lesson says it.** In Great Britain the duty to be Gas Safe
registered, regulation 3(3), binds employers and the self-employed: businesses. It does not bind a
householder working on their own home. The duty to be competent, regulation 3(1), binds everyone,
householders included. HSE's Code sets competence at industry-recognised training followed by an
assessment, a bar almost no householder meets. So:

- "It is illegal to do any gas work yourself" **overstates** the law.
- "You may legally do your own gas work" **misleads**, because the competence test is the law too.
- Every official source read tells a householder to use a Gas Safe registered engineer, and a
  lesson says so plainly.
- Gas Safe's "both parties would be breaking the law" line has no provision that Part C or the
  synthesiser could find that makes a householder who does competent work, then has it checked,
  a law-breaker. A lesson either quotes it as Gas Safe's statement or leaves it out. It is not
  stated as law (gate G-G1).

Suggested framing for a lesson, in the course's own words: *In Great Britain the law says anyone
who works on a gas fitting must be competent, and anyone who does it as a business must be on the
Gas Safe Register. HSE's code of practice measures competence by recognised training and an
assessment. So the official advice to every householder is the same: gas work is for a Gas Safe
registered engineer. What you can do is what the appliance's user instructions tell you to do.*

**Northern Ireland** has its own instrument, the Gas Safety (Installation and Use) Regulations
(Northern Ireland) 2004 (SR 2004/63). Part C read its regulation 3 in full: it mirrors GB's, with
the approval given by "the Executive" (HSENI). HSE's Gas Safe page says the Register covers
[V] "Great Britain, Northern Ireland, the Isle of Man and Guernsey". No HSENI page confirming the
approval was read (gate G-G2).

**Correction applied to Parts A and B.** Part A's UK vs US table said "Gas Safe registered engineer
required for work on gas appliances (HSE)". Part B's said "Gas Safe registration mandatory for gas
work". Both were written before this reconciliation and are corrected in place. Part B's Citizens
Advice quotation ("If you're getting gas work done, you must use a Gas Safe registered engineer") is
advice to someone hiring, which is accurate: anyone you hire is a business.

## The first things Stage 1 found, and they shape the course

1. **Two questions, never one: must the work comply, and must someone be told?** In England and
   Wales, requirement P1 applies to all electrical work in a dwelling, but only some of it is
   notifiable. In Scotland, work that needs no building warrant must still meet the standards
   (reg 5). A lesson that answers only "do I need permission?" teaches the wrong half.
2. **England notifies three kinds of electrical work; Wales still notifies more** (Part C, C2, C3,
   C6, C9). Since 6 April 2013, England requires notice only for a new circuit, a replacement
   consumer unit, and additions or alterations in a bathroom's special location or a room with a
   pool or sauna. Wales never adopted the 2013 change, so kitchen work, outdoor work and special
   installations are still notifiable there.
3. **A householder may do notifiable electrical work in England and Wales** by notifying building
   control before starting (AD P 3.8; gov.wales). The other routes are a registered competent
   person, or a third-party certifier appointed before work starts.
4. **Northern Ireland's Part P is not about electricity.** It covers sanitary appliances and
   unvented hot water. There is no statutory building regulation for domestic electrical work in NI
   (Part C, C22; ESF). A Scottish house (not a flat) needs no warrant for most electrical work, but
   standard 4.5 still applies (C18, C19).
5. **Gas: registration binds businesses; competence binds everyone** (the section above).
6. **US homeowner exemptions are real but conditional, and they differ by state** (Part C, C24 to
   C28). The conditions are usually: your own home, your own hands, often owner-occupied, often a
   permit and an inspection, and often lost if you sell or let within a year. Texas exempts a
   homestead owner from the state plumbing licence, and "plumbing" includes gas piping. Florida
   lets an owner act as their own electrical contractor on their own single-family home. Washington
   issues a property-owner electrical permit. New York City requires a licensed master plumber even
   for permit-exempt plumbing. **A lesson never says "in the US you can do your own wiring."**
7. **Asbestos: the law permits more than the advice does** (Part D, D1 to D11). In Great Britain,
   an owner-occupier doing their own work is outside the Control of Asbestos Regulations 2012. US
   federal law requires no training for work on a single-family home. But every authority read
   (HSE, UKHSA, EPA) says to leave sound material alone and not to repair or remove it without
   training. The lesson states the law and the advice together, the same pattern as gas.
8. **A CO alarm is not the protection; servicing is.** Approved Document J says an alarm [V] "should
   not be regarded as a substitute for the correct installation and regular servicing" (Part D,
   D25). The same order appears in HSE, CDC and CPSC: install correctly, service annually, keep
   flues clear, do not block ventilation, and then fit an alarm.
9. **Official gas-leak advice differs between the countries** (Part A §4). UK networks say: open
   doors and windows, turn off at the meter's emergency control valve if safe (not if the meter is
   in a cellar), and call 0800 111 999. In Northern Ireland the number is 0800 002 001. US
   utilities say: leave immediately, touch nothing (the phone and light switches included), and
   call 911 and the utility from outside. The shared core is no flames, no switches, and get out if
   the smell is strong. Teach each country's advice as its authorities give it.
10. **Ladders are the commonest serious DIY injury the research could quantify** (Part B). D'Souza
    and colleagues 2007 (abstract): about 136,118 US emergency-department ladder cases a year,
    97.3% of them away from work. HSE's and OSHA's rules are workplace rules (the Work at Height
    Regulations 2005 bind work, not a householder's own DIY), but they are the best-specified
    practice there is: 1 in 4, 1 m or 3 feet above the landing, off the top three rungs, secure the
    ladder, 30 minutes as the guide for how long to stay on one. **No UK ladder-injury figure could
    be sourced**, and the RoSPA numbers that circulate were seen only in snippets.
11. **Rising damp is a live dispute, and the English government now calls it "often misdiagnosed"**
    (Part A §6). The damp-proofing trade body (PCA) and a 2017 doctoral study reported in the RICS
    journal defend diagnosis and treatment. Conservation voices call injected damp-proof courses
    largely unnecessary. The 2022 joint position statement signed by RICS, Historic England and the
    PCA is the common ground.
12. **Hot water sits between two established hazards** (Part A §1). CPSC says 120°F (49°C) at the
    tap to prevent scalds; HSE says store at 60°C against legionella. Neither is wrong, and the
    lesson does not tell a learner simply to turn the heater down or up.

## Boundaries with other Core courses, settled here so no lesson re-opens them

- **First Aid and CPR** (T3, published). Lesson 2 teaches "power off before you touch" and CO's signs
  ("get outside and call from there"). Lesson 10 teaches electrical burns (every one to 999 or A&E).
  Lesson 14 teaches the poisoning response, including CO and the 0800 111 999 number, and says the
  later course can assume the learner knows CO's signs and that every room with a burning appliance
  needs an alarm. **This course does not reteach symptoms or rescue.** It teaches where the hazard
  comes from and what keeps it away, and links back.
- **Personal Safety** (T3, published). Lesson 5 owns the evidence on what deters burglary (WIDE, the
  England and Wales survey's security-device findings) and the doorstep con. **This course owns
  fitting and maintaining locks, and links there for which devices matter.** Personal Safety's
  doorstep-caller material also overlaps the rogue-trader section here. This course keeps the
  contractual side (quotes, deposits, cancellation rights, licence checks) and links there for the
  pressure pattern and the call-back rule.
- **Personal Finance Fundamentals** (T2, published). Lesson 8 owns insurance, and lesson 10 owns scams
  in general. This course mentions only that illegal gas work "may invalidate your home insurance"
  (Gas Safe) and links there.
- **Cooking Fundamentals** (T3, published). Lesson 4 owns kitchen hygiene. Fats, oils and grease down
  the sink belong to this course's drainage lesson, not to Cooking.
- **Emergency Preparedness** (T24, planned) owns floods, storms and grid-down. This course keeps the
  house-side basics: shut-offs, frozen pipes, generators and CO.
- **Tools and Making Things** (T23, planned) owns woodworking and fabrication. This course keeps the
  small kit a householder needs for repairs, and how to use it safely.
- **Energy: How the World Is Powered** (T9, planned) owns energy policy. Heat pumps appear here only
  as equipment to maintain.

## What the field considers essential (the outline's backbone)

In the order the ideas build. The parts' own lists (Part A (a), B (a), C (a), D (a)) have the
detail and the sources.

1. **Know your shut-offs before you need them.** The stop tap or main shut-off valve, the consumer
   unit or panel and its main switch, the gas emergency control valve. Every source on each service
   puts finding the control first (WaterSafe, WSSC, ESF, Cadent). The UGA checklist and the manuals
   treat labelling breakers and exercising valves as routine.
2. **A house is a set of flows.** Pressurised water in; gravity drainage out through traps that hold a
   water seal against sewer air, with vents so the seals are not sucked out (AD H: 75 mm seal for a
   sink, 25 mm retained). Power in through protective devices. Fuel in, and combustion products out
   through a flue.
3. **Protective devices are there to trip.** RCDs and GFCIs protect people from shock. Breakers,
   fuses and AFCIs protect the wiring from fire (CPSC 1989: [V, Part D] "circuit breakers and fuses
   function primarily to prevent the home wiring system from causing a fire"). A device that trips again is reporting a fault, not
   being a nuisance.
4. **Moisture is what destroys a building.** Four kinds of damp with different causes (GOV.UK).
   Moisture control is mould control (EPA). Most basement water is grading, gutters and
   condensation (UMN). Most of a seasonal checklist is about keeping water off and out.
5. **Tight homes need deliberate ventilation.** Seal the leaks, then ventilate on purpose, and never
   block the air a fuel-burning appliance needs (DOE, GOV.UK, EST, AD J).
6. **Isolate before you fix, and prove it.** Water off at the isolation valve; plug out, or circuit
   off and proved dead with a tester that has itself been proved (HSG85); heating off and radiators
   cool before bleeding.
7. **Most common repairs are diagnosis first.** A washer tap and a ceramic-disc tap fail
   differently. A dye test finds a leaking toilet. Cold at the top of a radiator means air; cold at
   the bottom means sludge. A cable detector finds only live cables.
8. **Height is the commonest serious risk.** Choose the right equipment, set the ladder up
   properly, do not overreach, and keep it short.
9. **Hazardous materials are a stop-work signal.** Assume by date (UK: any building built or
   refurbished before 2000 may contain asbestos; US: pre-1978 for lead). If it is sound, leave it.
   Never sand, burn or break it. Know who to call.
10. **Know which jobs the law or plain safety reserves**, and which nation or state you are in
    before you know the rule.
11. **Hire with evidence.** Several written quotes; check registration on the scheme's own site; keep
    deposits small (California caps them by law); pay in stages and by card; know the doorstep
    cancellation rights (UK 14 days; US 3 business days under the federal rule); in the US, guard
    against liens.
12. **Maintenance is a calendar.** Test smoke alarms monthly and replace them at ten years. Service
    fuel-burning appliances every year. Sweep chimneys every year (twice for wood, UK). Clear
    gutters. Clean dryer lint. Prepare the pipes and the stop tap for winter. Change or check
    filters. Use IPM for pests.

## Common misconceptions

The parts each list these with their source (A (b), B (b), C (b), D (b)). These are the ones a
lesson should correct directly.

- **"It's illegal to do any gas work on your own home" / "It's legal, so it's fine."** Both wrong
  (gas section above).
- **"Part P means you can't do any electrical work yourself."** Wrong in England and Wales: notify
  building control before starting, or do non-notifiable work, which needs no notice but must still
  meet P1 (AD P 2.7, 3.8, 3.13).
- **"Kitchen electrical work is notifiable."** Wrong in England since 2013; right in Wales (Part C).
- **"Part P applies in Northern Ireland."** Wrong (Part C, C22).
- **"The council only has 12 months to act."** Out of date: s36(4) now gives 10 years (Building
  Safety Act 2022 amendment; Wales from 1 July 2026).
- **"California lets a handyman do any job under $1,000."** Not if the job needs a permit, or if the
  handyman employs anyone (B&P 7048; CSLB 24-07).
- **"A CO alarm means the boiler doesn't need servicing."** AD J says the opposite in terms (Part D).
- **"A volt stick showing nothing means the wire is dead."** HSE does not recommend non-contact
  devices for proving dead (HSG85, Part D). **"A cable detector that shows nothing means there is no
  cable."** Bosch: it detects only cables carrying current (Part B).
- **"Breakers and fuses protect you from shock."** They protect the wiring; the RCD or GFCI protects
  the person (CPSC, Part D).
- **"If you find asbestos you must have it removed."** Often best left in place (HSE); EPA says
  "don't panic" (Part D).
- **"A negative home lead test means no lead."** BCF says a negative cannot be relied on (Part D).
- **"Someone footing the ladder makes it safe."** HSE ranks footing as the last resort (Part B).
- **"Flushable wipes can be flushed."** Thames Water: they block pipes, [V, Part B] "even the ones
  labelled ‘flushable’". The Fine to Flush standard was withdrawn in March 2024 (Part A).
- **"A radiator cold at the bottom needs bleeding."** Cold at the top is air; cold at the bottom is
  likely sludge (Worcester Bosch, Part A).
- **"A damp-meter reading means rising damp."** Salts affect resistance meters, and rising damp
  [V, Part A] "is often misdiagnosed" (GOV.UK; the 2022 joint position statement).
- **"Damp and mould are the tenant's lifestyle."** GOV.UK calls blaming tenants' lifestyle choices
  "totally unreasonable" (Part A).
- **"Bug bombs clear cockroaches."** They fail on German cockroaches and leave residues (DeVries and
  colleagues 2019; UC IPM, Part B).
- **"A quote and an estimate are the same thing."** A quote is fixed; an estimate is not (Citizens
  Advice, Part B).
- **"Paying the contractor in full protects you from liens."** Unpaid subcontractors can still lien
  the home (CSLB, Part B).
- **"Turning the thermostat up heats the house faster."** It does not (EST, Part A).

## Contested questions and the positions on each

Classified under standards 3.1. The parts give each position in its own proponents' words.

| # | Question | Classification and handling | Part |
|---|---|---|---|
| 1 | How common is rising damp, and do injected damp-proof courses work? | **Contested** on frequency and on treatment efficacy. **Established** that the mechanism exists. England's official line is that it is "often misdiagnosed". Present the PCA and the RICS-reported 2017 study against the conservation sceptics, with the 2022 joint position statement as common ground | A §6, A (c)1 |
| 2 | Should DIY electrical work be allowed at all? | **Value.** The rules differ (established): England and Wales and Washington say yes with notice or a permit; NYC says no for wiring. Electrical Safety First argues for registered electricians. The liberty and cost side was not read in anyone's own words: gate G-L4 | C (c) |
| 3 | Does occupational licensing improve safety and quality? | **Contested** (economics). The 2015 federal report finds little evidence in most studies and real costs, but endorses licensing aimed at health and safety. The trade case appears only as ESF advice. The Institute for Justice was not read. Neutrality pass required | C (c), C33 |
| 4 | Should a householder remove small amounts of asbestos cement themselves? | The **law** is established: it permits it in GB and in the federal US. Whether it is **advisable** is a value judgement on which every official source says no without training. State both | D (c)1 |
| 5 | Must a householder test for lead before sanding old paint? | **Established** that there is no legal duty for DIY in either country. **Contested** only on whether a DIY kit is good enough: BCF and EPA say a negative is not proof. Consensus: assume lead in older paint and work wet, or test professionally | D (c)2 |
| 6 | Where does a CO alarm go? | Not a dispute: **different national standards**. UK: the appliance room, 1 to 3 m from the appliance (AD J, Scotland). US: every level and outside sleeping areas (CPSC, CDC). Give each | D (c)4 |
| 7 | How much of the UK's house-fire problem is "electrical"? | **Definitional.** ESF's "almost half" is snippet only. The Home Office table gives about a quarter for electrical distribution plus non-cooking appliances. Say what is counted | D (c)5 |
| 8 | Hot water: scald risk against legionella | Two **established** hazards and a **value/risk** trade-off. The usual resolution, a thermostatic mixing valve, was not read (gate) | A (c)2 |
| 9 | Mould: bleach or not? | **Contested practice**, minor. CDC allows a dilute solution; EPA says not routinely; GOV.UK prefers mould products. All agree: fix the moisture first, and never mix bleach with ammonia | A (c)3 |
| 10 | Should a second person foot a leaning ladder? | **Contested in emphasis**, not fact. HSE: footing is the last resort. RoSPA (home): consider having another person present. Teach HSE's order, and that a helper nearby is worth having | B (c)1 |
| 11 | Frozen pipe: turn off the stop tap before thawing? | CCW (UK) says yes; the Red Cross (US) says keep the tap open and does not mention isolating. **Established**: no naked flame. Give CCW's order and its reason (a split pipe floods) | A (c)8, B (c)2 |
| 12 | Woodworm: chemicals or damp management? | **Contested** in practice. The council and conservation view (fix the damp; old holes need no action) is read; the commercial view is snippet only. Attribute | B (c)3 |
| 13 | Glue traps and rodent poison | **Established** that non-chemical methods come first. Whether glue traps are humane is a **value** question, and their legal status differs (England's Act unread, gate) | B (c)4 |
| 14 | How much of the fall in US electrocutions is owed to GFCIs? | The decline is **established**. GFCIs' share is an **estimate** (CPSC: GFCI effectiveness 81 to 95% from a UL study) | D (c)6 |
| 15 | Radon action level: 200 Bq/m³ (UK) or 4 pCi/L (US)? | **Established** that they differ; the threshold is a policy judgement | D (c)7 |
| 16 | Gas Safe's "both parties would be breaking the law" | **Contested interpretation.** No provision found that binds a householder in the way it says. Quote it as Gas Safe's, or leave it out | C16, gas section |

## UK vs US differences

Each part has its own table: Part A (d) for the systems, Part B (d) for ladders, repairs and
hiring, Part C (d) for the law nation by nation and state by state, and Part D (d) for the hazards.
A lesson reads the table for its own topic. The differences a learner meets first:

- **Names:** stop tap or stopcock against main shut-off valve; consumer unit against breaker panel;
  RCD against GFCI; emulsion against latex; mould against mold.
- **Ladders:** 1 m above the landing against 3 feet; 75° or 1 in 4 against a quarter of the working
  length.
- **Heating:** wet central heating with a boiler, radiators, TRVs and a pressure gauge, against
  (mostly) forced-air furnaces with filters.
- **Plugs:** fused BS 1363 plugs (3 A or 13 A) against none.
- **Gas leak:** ventilate, valve off and call, against leave and call from outside.
- **CO alarm:** BS EN 50291 in the appliance room, against every level and outside sleeping areas.
- **Hazard dates and limits:** asbestos (GB 1999 white ban) against the US partial ban and the 2024
  chrysotile rule. Lead: the UK dates vary by source, the US uses pre-1978. The heat-gun limit is
  450°C (Defra, withdrawn) against 1,100°F (EPA rule, paid work).
- **Hiring:** a 14-day cancellation right (UK, off-premises contracts over £42) against 3 business
  days (US federal rule, $25 at home). Deposits are guidance in England (Citizens Advice: at most
  25%) against law in California (the lesser of $1,000 or 10%).
- **Units:** bar, °C, metres and Bq/m³ against psi, °F, feet and pCi/L.

## Safety-critical guidance

Collected from the four parts' notes for drafters (A (e), B (e), C (e), D (e)). These are not
optional.

1. **Gas.** The course teaches what to do on smelling gas, how to find the emergency control valve,
   annual servicing and how to check a Gas Safe card, including the categories on the back. It
   teaches no gas work. The user tasks the manufacturer's instructions allow are named as the
   boundary. The UK leak steps are never taught to US learners, whose utilities say leave and touch
   nothing. Give the GB (0800 111 999) and NI (0800 002 001) numbers.
2. **Electricity.** Householder work stops at the front of the consumer unit or panel: switching,
   resetting, testing RCDs and GFCIs, plug fuses and plug-in RCDs. CPSC says panels [V, Part A] "are
   usually electrically live, even with the main circuit breakers turned off". A device that trips
   again after one reset is not forced, taped or held on; call an electrician. No lesson implies a
   volt stick proves a circuit dead. Any wiring the law allows a householder (non-notifiable work in
   England) is described as legal and never taught as a procedure in this Foundation course. That
   is a scope decision recorded under Open concerns.
3. **Before drilling:** turn the power off where you can, use a detector, and know that it misses
   cables that are not carrying current. Cables often run straight up, down or across from sockets
   and switches, but do not state BS 7671 "safe zones" as a rule (gate G-E3).
4. **Ladders:** give the numbers exactly (75°, 1 in 4, 1 m or 3 feet above the landing, top three
   rungs, 6 m from overhead lines, the 30-minute guide). Say the rules are written for workplaces
   and that most injuries happen at home. CPSC's electrocution data include ladders touching
   overhead lines (22 deaths, 2011 to 2020).
5. **Asbestos:** do not tell a UK reader they may remove asbestos cement, textured coating or floor
   tiles because the law allows it. State the law and the advice together. Never suggest breaking
   AC sheets, sanding Artex or vacuuming suspected debris with a household vacuum. Artex removal is
   not taught as a DIY task.
6. **Lead:** no open flame, no dry sanding, no power sanding without HEPA extraction. Keep children
   and pregnant women out. Give the heat-gun limit with its source and unit.
7. **CO:** the alarm is never presented as the protection (the order is in the first-findings list,
   item 8). No generator, barbecue, camping stove or gas oven used for heat indoors. Generators go
   20 feet (about 6 m) from the house (CPSC, a US figure).
8. **Water and electricity together:** after a burst pipe, never reach through water to the
   consumer unit. The Met Office's wording on this is ambiguous (gate G-W5).
9. **Hot water:** never "turn it down" without the legionella caveat or "turn it up" without the
   scald caveat. A T&P valve test can release scalding water and may not reseat, so it is not taught
   without a manufacturer's source.
10. **Mould:** small areas only (EPA: under about 10 sq ft). Gloves and eye protection; never mix
    bleach and ammonia; fix the moisture.
11. **Rodents:** never sweep or vacuum droppings. Air the room, wear gloves, soak with disinfectant,
    double-bag. Bait only in tamper-resistant stations; no outdoor pesticide indoors; no foggers.
12. **Dust:** FFP2 or FFP3 (UK), N95 (US). A mask stops dust, not solvent vapour, and a beard
    defeats the seal. Silica from cutting masonry is the biggest construction health risk after
    asbestos (HSE).
13. **Hiring:** never sign blank papers or sign over an insurance cheque. Never pay by wire, gift card
    or cash. The UK urgent-repairs exclusion removes the 14-day right for a trader you called out in
    an emergency, but not for extra work sold on the same visit.
14. **First aid is not retaught.** Refer back to First Aid lessons 2, 10 and 14.

## Best existing free resources (to link, not duplicate)

Status as read on 2026-09-25. Part A §7 and the parts' source entries have the URLs.

- **UK:** GOV.UK damp and mould guidance (updated 1 April 2026); HSE gas pages for home owners;
  Gas Safe Register "Find" and "Check an Engineer" (live, but blocks automated readers, so check it
  by hand before linking); WaterSafe (stop tap, pressure, finding a plumber); Cadent or National Gas
  on smelling gas; Electrical Safety First (with care, since some pages load by script); Energy
  Saving Trust on draught-proofing; HSE and Ladder Association LA455 and HSE's ladder web guide;
  Citizens Advice "Before you get work done on your home"; TrustMark; UKradon maps; Home Office
  *Fire Safety in the Home*; the British Coatings Federation's HS032 on lead paint.
- **US:** EPA's mould guide, WaterSense and "Lead-Safe Renovations for DIYers"; EPA asbestos pages;
  ENERGY STAR maintenance checklist; university extension services (UGA Circular 1082, the best
  published seasonal checklist; University of Minnesota on moisture); CPSC CO and GFCI fact sheets;
  CDC Seal Up, Trap Up, Clean Up; FTC "How To Avoid a Home Improvement Scam"; the OSHA Portable
  Ladder QuickCard; state licence lookups (CSLB for California).
- **Do not link:** energy.gov/energysaver (404), INDG455 (withdrawn), Defra's lead leaflet
  (withdrawn), CPSC "Asbestos in the Home" (removed), and This Old House and Which? how-to pages
  (not read).

## Canonical textbooks and university syllabi

There is no university discipline of household repair, so the canon is the general manuals and
the extension-service and adult-education courses (Part A §7). **Reader's Digest *Complete
Do-It-Yourself Manual*** (1973 onward), **Black & Decker *The Complete Photo Guide to Home Repair*
and *The Book of Home How-To***, and **Jackson and Day's *Collins Complete DIY Manual*** (UK). North
Seattle College's continuing-education course names the first two as the usual books. All three
were read only as catalogue contents or a publisher description. Their shared order is: tools,
fixings, interior, exterior, plumbing, electrics, heating, decorating, with pests and damp as their
own chapters. The courses read are UGA Extension Circular 1082 (full), North Seattle College's
course page, the Goodlife Centre's London beginners' classes and the City & Guilds 6219 unit list.
City & Guilds is a useful benchmark for what a beginner is trusted with: radiators and push-fit
fittings, while electrical units are done in a training workshop, not a home.

## Gates: what must be read before a lesson states it

Consolidated from the four parts' (f) lists and deduplicated. Each gate names the lesson area it
blocks. The parts' own lists keep the detail. **Closed in this synthesis:** Part B's gate 20 (the
current California threshold) is closed by Part C's reading of B&P 7048 and CSLB 24-07. Part A's
gate 19 (US gas and electrical licensing) is closed for the five states Part C read. Part D's gate
14 (the Gas Safe Register's own advice) is closed for the DIY and illegal-work pages by the archived
captures above; its CO and servicing pages are still unread.

**Gas and the law (G-G, G-L)**
- G-G1. The legal basis, if any, for Gas Safe's "both parties would be breaking the law" statement.
- G-G2. HSENI confirmation that the Gas Safe Register is the approved class under the NI 2004
  Regulations, reg 3(3).
- G-G3. The source for HSE's "around 7 people die" each year from gas-related CO.
- G-G4. The Isle of Man and Channel Islands gas emergency numbers, only if a lesson says "UK" broadly.
- G-L1. IRC R105 (permits required and work exempt): not read at all. The ICC site returned 403.
- G-L2. Texas Occupations Code 1305.003(a)(6) and 1305.201 in the official text; whether TSBPE has
  moved into TDLR; whether Texas has any state general contractor licence.
- G-L3. The Institute for Justice and FTC positions on occupational licensing, before the licensing
  question is taught.
- G-L4. A read statement of the liberty and cost case for DIY electrical work, in its own words.
- G-L5. The 2013 Part P review and its arguments, before the change is characterised.
- G-L6. The previous s36(4) period and the transitional rule (SI 2023/993 reg 7).
- G-L7. Whether a later Scottish domestic technical handbook has replaced the June 2022 one.
- G-L8. Scottish approved certifier scheme names (SELECT, NICEIC): snippets only.
- G-L9. California local permit rules for owner-occupants; New York State outside NYC;
  Massachusetts (not attempted).
- G-L10. TA6 question numbers from the form itself.
- G-L11. Approved Document G (unvented hot water), AD J's ventilation sections and AD H beyond
  Section 1; the Party Wall etc. Act 1996 and permitted development, if a lesson says more than
  "separate from building regulations".
- G-L12. Consumer Rights Act 2015 ss.54, 56 and 57; s.75 of the Consumer Credit Act 1974 (known only
  through Citizens Advice); TrustMark's "Government Endorsed" status (stated only by TrustMark and
  Citizens Advice).
- G-L13. US lien law in any state other than California.
- G-L14. The Glue Traps (Offences) Act 2022, before any UK statement on glue traps.

**Electricity (G-E)**
- G-E1. The RCD 30 mA rating and ESF's three-monthly test interval: snippets only.
- G-E2. Ring and radial circuit definitions and MCB ratings.
- G-E3. The current BS 7671 edition and amendment, and its "safe zones" for cables.
- G-E4. Current NEC GFCI and AFCI locations: CPSC's list stops at 2005.
- G-E5. An authoritative step-by-step for resetting a tripped circuit and finding the faulty
  appliance.
- G-E6. ESF's "almost half of severe shocks are DIY" and "almost half of domestic fires are
  electrical" figures, and its 2013 shock survey: snippets only.
- G-E7. Which appliances take which plug fuse. ESF's current and older pages disagree, so teach
  "follow the manufacturer".
- G-E8. Current NFPA web guidance and figures on home electrical fires, smoke alarms and CO.

**Water, heating and the envelope (G-W)**
- G-W1. What a T&P relief valve does, and how and how often to test it; water heater flushing
  intervals (a manufacturer's manual).
- G-W2. UK cistern mechanics (siphon, flush valve, float valve).
- G-W3. Plunging a sink, removing a trap, and chemical drain cleaners.
- G-W4. Ofwat's 7 m (0.7 bar) guaranteed minimum pressure: known only via WaterSafe.
- G-W5. The Met Office burst-pipe sentence on electrics.
- G-W6. Thermostatic mixing valves.
- G-W7. Boiler pressure for makes other than Worcester Bosch and Vaillant (1 to 1.5 bar cold is those
  two makers' figure, not a standard).
- G-W8. What the gas emergency control valve looks like open and closed.
- G-W9. Awaab's Law commencement and scope; the HHSRS review outcome; the wet-wipe ban dates for
  Wales, Scotland and NI.
- G-W10. Energy Saving Trust savings figures in pounds (price-period bound).

**Repairs, decorating, pests (G-R)**
- G-R1. Sticking doors, silicone sealant, wallpaper, filling: no primary source read. Needs a
  manufacturer or extension source before a lesson gives a method.
- G-R2. The revised (post-Brexit) text of the VOC Regulations 2012; US consumer paint VOC labelling.
- G-R3. EPA's 2019 methylene chloride paint-stripper ban and the 2024 TSCA rule.
- G-R4. Wasp nests: no official source read.
- G-R5. The EPA 2008 rodenticide decision document; CRRU pack-size limits; hantavirus in the UK.
- G-R6. The USFA dryer-fire figure (about 2,900 a year): snippet only.
- G-R7. NFPA 211 itself (known only as CSIA quotes it).

**Height and tools (G-H)**
- G-H1. Any UK ladder-injury figure. Leave UK figures out until a RoSPA, NHS or HES primary source
  is read.
- G-H2. Whether WAHR reg 3(3)(b) reaches a householder who controls a tradesperson's work.
- G-H3. LA455 and HSE web guide pages 7 and 8 (inspection, EN 131).
- G-H4. OSHA's assigned protection factors (do not give one for N95); EN 166 and ANSI Z87.1 (advise
  eye protection in general terms only).
- G-H5. CPSC's lithium-ion and ladder safety-centre pages (blocked).

**Hazards (G-Z)**
- G-Z1. The current court status of EPA's March 2024 chrysotile rule. Say no more than "EPA finalised
  a ban in March 2024" until it is read.
- G-Z2. Scotland's in-force date for the alarm standard (widely given as 1 February 2022) and the
  Tolerable Standard Guidance.
- G-Z3. UL 2034, UL 217, UL 2201 and PGMA G300 as the US alarm and generator standards.
- G-Z4. HSE's individual asbestos essentials task sheets, before any method is described; council
  and state asbestos disposal rules.
- G-Z5. The contents of the "Renovate Right" pamphlet; HUD's Lead Safe Housing Rule.
- G-Z6. UK annual radon lung-cancer deaths; the 2005 Surgeon General radon advisory text.

## Open concerns about scope

1. **The course is wide.** It spans eight topic areas and two countries' law, all at Foundation
   level. Stage 2 should expect about 14 to 16 lessons and resist more. The seasonal checklist is
   better as the project than as a lesson.
2. **How far to teach electrical work.** The outcomes stop at resetting a tripped circuit, which is
   right for Foundation. England allows a householder non-notifiable work, such as replacing a
   socket faceplate like for like. This research recommends the course *explain* that the law
   allows it and what compliance means (P1, inspection and testing to BS 7671), but not teach the
   procedure. Proving dead needs a two-pole tester and training that HSG85 describes for
   professionals, and a video lesson cannot check the learner's work. This is an ordinary scope
   call, recorded here so Stage 2 does not reopen it.
3. **The US cannot be covered state by state.** Part C read five states (California, Texas, Florida,
   Washington and New York City). The lesson should teach the *shape* of US rules (state licensing,
   local permits, conditional homeowner exemptions), use two or three named states as worked
   examples, and send the learner to their own building department. It should not claim coverage it
   lacks.
4. **Northern Ireland is thin.** Its gas regulation 3 and its building regulations contents were
   read, but not its fire-alarm law or its asbestos disposal. Mention NI where a primary was read,
   and otherwise say "different again".
5. **UK ladder figures are missing** (G-H1). The ladder lesson has to carry US numbers and say so.
6. **Damp and mould crosses into law for renters** (Awaab's Law, HHSRS). Keep this course to the
   building and the householder's side, with one pointer for renters, and do not teach landlord and
   tenant law.
7. **Rising damp, occupational licensing and DIY electrics are the three places where the institute
   takes no side.** Each is a contested or value question. The lessons attribute each position and do
   not resolve it editorially.

## Suggested lesson sequence (for Stage 2 to confirm)

1. How a house works, and where its off-switches are (water, electricity, gas; a first walk-round)
2. Water in: supply, stop taps, pressure, hot water, frozen and burst pipes
3. Water out: drains, traps, vents, what not to put down them
4. Electricity: the consumer unit or panel, RCDs, GFCIs and AFCIs, tripping, plug fuses, what not to
   touch
5. Gas and heating: boilers and furnaces, radiators, filters, servicing, smelling gas
6. Carbon monoxide, smoke and fire: sources, servicing, alarms (links to First Aid)
7. The building envelope: roof, gutters, damp, condensation, mould, ventilation
8. Tools and working safely: the basic kit, dust, eyes, detectors, batteries
9. Ladders and working at height
10. Common repairs I: taps, toilets, blockages, silicone
11. Common repairs II: doors, walls and filling, radiators, resetting a circuit
12. Decorating: preparation, paint, and old paint (lead)
13. Asbestos and the other hidden hazards (silica, solvents, radon)
14. Pests: IPM, rodents, insects, wood
15. Who may do what: the rules for registered and licensed trades, UK nations and US states
16. Hiring and checking a tradesperson, and when to stop and call one

Project: a seasonal maintenance plan for the learner's own home, built from UGA Circular 1082 and the
UK sources, with its shut-offs located and labelled.

---

## Part A: How a house works, and the textbooks, syllabi and free resources

Researcher A, Stage 1, Home Repair and Maintenance. Read 25 September 2026.

Conventions. [V] means copied from text I extracted myself (curl plus pandoc, pdftotext, the GOV.UK content API, or a Wayback Machine capture with its ID). [T] means the words came through WebFetch, which summarises, so they are not safe to quote as the source's own. "Snippet only" means I saw it only in a search-result summary: it is not a finding and nothing from it is quoted.

Two access findings that matter to the whole course:

1. **The US Department of Energy's Energy Saver pages are gone from the live web.** Every energy.gov/energysaver URL I tried (furnaces and boilers, storage water heaters, tankless water heaters, heat pumps, ventilation, air sealing, maintaining an air conditioner) returned HTTP 404 on 25 September 2026, and the section root now redirects to the energy.gov home page. A Wayback capture of the furnace page from 6 September 2026 is also a 404. I read the pages from late 2024 and early 2025 Wayback captures (IDs below). **Lessons must not send learners to energy.gov/energysaver as a live free resource.** ENERGY STAR (energystar.gov) is still live and covers some of the same ground.
2. Several key UK sites block automated reading: Gas Safe Register, Water UK, Ofwat, SPAB, the Energy Saving Trust (live), Historic England (live), ESFi (live), CPSC's HTML pages and CDC (live). I got round this with Wayback captures, other official pages, or WebFetch where noted. Where I could not, the source is on the "Not read" list.

---

### 1. Water supply

#### WaterSafe, "How can I locate my internal stop tap to turn off my water in an emergency?"
https://www.watersafe.org.uk/advice/general_plumbing_advice/winter_advice/locate-internal-stop-tap/
Read: full text, curl plus pandoc. No date shown. WaterSafe is the UK's approved-plumber register, run for the water industry; its scheme operators listed on the page are APHC, CIPHE, SNIPEF and WIAPS.
What it establishes:
- Definition: the internal stop tap is "also sometimes called a stop valve or stopcock" and is "the point where you can shut off the water supply to your home or business." [V]
- What it looks like: "It looks like a spout-less tap or lever and sits between two lengths of pipe acting as a connector." [V]
- Where: usually under the kitchen sink; also kitchen cupboard, downstairs bathroom or toilet, garage or utility room, cellar, under the stairs.
- How to use: "Turning the valve clockwise will close it" [V]; it "may take a few minutes for the water to stop altogether" [V]; "Turn it on and off slowly, never force it." [V] If it will not turn or shut off, call a plumber.
Good for: the Lesson 1 shut-off drill, UK side.

#### Met Office, "What to do if you have a frozen or burst pipe"
https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/your-home/frozen-or-burst-pipes
Read: full text, curl plus pandoc. No date shown. Advice given jointly in tone with WaterSafe (it sends readers to watersafe.org.uk).
- Suspected frozen pipe: "turn off your inside stop tap immediately." [V] Open taps to drain, keeping some water in a bucket for flushing. Thaw slowly "with hot water bottles or towels soaked in hot water. Never use a naked flame or blowtorch" [V]. Turn on nearby cold taps with the stop tap still off to relieve pressure.
- Burst pipe: stop tap off, switch off the boiler, open taps to drain, soak up water, call a WaterSafe plumber. "If water has leaked near your electrics, do not touch them and switch them off at the fuse box." [V] (Drafters: this sentence tells people both not to touch the electrics and to switch them off at the fuse box. A lesson should say plainly: do not touch wet fittings, and only go to the consumer unit if you can reach it without standing in water; otherwise keep clear and call an electrician. See Gates.)
- Prevention: "Make sure you know where your stop tap is and check it’s working every six months." [V] Leave heating on low when away; insulate loft pipes.

#### American Red Cross, "Preventing and Thawing Frozen Pipes"
https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm/frozen-pipes.html
Read: full text, curl plus pandoc. No date shown.
- Mechanism: water "expands as it freezes" and "No matter the strength of a container, expanding water can cause pipes to break." [V]
- Prevention: drain hose bibs and sprinkler lines, close the inside valve to an outdoor hose bib and leave the outside tap open; insulate; open cabinet doors under sinks; "let the cold water drip from the faucet served by exposed pipes" [V]; keep the same thermostat setting day and night; if away, heat "no lower than 55° F." [V]
- Thawing: "Keep the faucet open." [V] Heat with a heating pad, hair dryer, space heater kept away from flammables, or hot towels; no blowtorch, kerosene or propane heater or open flame; call a licensed plumber if you cannot find or reach the frozen section.
Good for: the US side. Note the difference from the UK advice: the US source keeps the supply on and the tap open while thawing; the UK source shuts the stop tap first. See UK vs US.

#### Consumer Council for Water (CCW), "Who is responsible for my water pipes?"
https://www.ccw.org.uk/faq/who-is-responsible-for-my-water-pipes/
Read: full text, curl plus pandoc. No date shown. CCW is the statutory consumer body for water in England and Wales.
- The water company owns the main and the pipe up to the property boundary, and "The external stop tap usually located in the public footpath." [V]
- "The homeowner is responsible for maintaining any water pipes located on private property up to the boundary of the road where the company’s water main is laid." [V] Shared supply pipes are the joint responsibility of all the owners connected. Internal leaks are the homeowner's to fix.

#### WaterSafe, "What is the minimum water pressure that a water supplier must supply?"
https://www.watersafe.org.uk/advice/common_plumbing_questions1/pressure/what_is_the_minimum_water_pressure_that_a_water_supplier_must_supply/
Read: full text, curl plus pandoc.
- Pressure is measured "usually the outside stop valve or property boundary" [V].
- Home test: the first tap (usually the kitchen) "should be able to fill a 4.5 litre (one gallon) bucket in 30 seconds, with all other taps and appliances turned off." [V]
- "Most water companies will aim to provide at least 10 metres head (approximately 14 psi or 1.0 bar) at the end of their communication pipes. They are committed to a guaranteed standard of service to provide a minimum of 7 metres static head (0.7 bar)." [V]
Ofwat's own pressure page returned 403; the guaranteed standard is therefore stated here from WaterSafe, not from the regulator (see Gates).

#### WSSC Water (Washington Suburban Sanitary Commission, Maryland), "Find and Operate Your Home's Main Water Valve"
https://www.wsscwater.com/customer-service/report-problem/find-and-operate-your-main-water-valve
Read: full text, curl plus pandoc. A US public water utility.
- "Every home was required to have a main water shut-off valve installed inside the home when it was built." [V] (This is WSSC's statement about its own service area, not a national rule.) The outside underground valve at the property line is for a registered master plumber or the utility.
- Where to look, by house type: basements, "typically located near the front foundation wall" and "typically within three to five feet of where the main water enters" [V]; crawl-space homes and slab-on-grade homes, near the water heater or under the kitchen sink, "but anywhere is possible." [V]
- Operation: "Round “wheel” handle valves will turn off by turning the handle clockwise. It may take two or more full revolutions." [V] Turn back on slowly, part-way first.
- Fire sprinklers: in a home with sprinklers, shut the plumbing supply and leave the sprinkler piping live unless the sprinkler pipe is what is leaking.
Good for: the US side of the shut-off lesson. One search-engine summary I saw during this research stated the direction the wrong way round (clockwise to turn water on). The primary sources above agree that clockwise closes. Drafters should cite WSSC or WaterSafe, not a summary.

#### EPA WaterSense, "Fix a Leak Week"
https://www.epa.gov/watersense/fix-leak-week
Read: full text, curl plus pandoc. "Last updated on March 13, 2026."
- "The average household's leaks can account for more than 9,300 gallons of water wasted every year and nine percent of homes have leaks that waste 50 gallons or more per day." [V]
- Meter test: check the meter "before and after a two-hour period when no water is being used. If the meter changes at all, you probably have a leak." [V]
- Toilet dye test: food colouring in the tank; "If any color shows up in the bowl after 10 minutes, you have a leak." [V]
- Flapper: "should be checked periodically and replaced at least every five years" [V].
Good for: the running-toilet and leak lessons (Part A supplies the "how the supply works" frame; the repair itself may be another researcher's part).

#### Hot water: UK (combi, system, regular) 
**Energy Saving Trust, "Boilers"** (energysavingtrust.org.uk/advice/boilers/). Read: full text from Wayback capture 20260919232017 (live site returns 403 to curl). The EST is the UK's government-funded energy advice body.
- "Combi boilers don’t use a hot water cylinder – all the heat and hot water comes directly from the boiler itself." [V] They suit smaller households; less suitable for "Houses with multiple bathrooms or higher hot water demands." [V]
- "System boilers have a separate water cylinder to store hot water." [V] Good for larger families; heat is lost from the cylinder over time; the cylinder can store energy from solar panels.
- "Heat-only boilers, also called regular or conventional boilers, work in a similar way to system boilers. The main difference is that heat-only boilers have two extra header tanks to store cold water, usually installed in the loft if there is one." [V]
- Recognising a condensing boiler: "The flue is made of plastic. If it’s made of metal, it’s unlikely to be a condensing boiler." [V]
- Heating and hot water are "over half of what you spend in a year on energy bills" [V].

#### Hot water: US (tank and tankless)
**US DOE Energy Saver, "Tankless or Demand-Type Water Heaters."** Read: full text from Wayback capture 20250102084025 (page now 404 live).
- Flow: "Typically, tankless water heaters provide hot water at a rate of 2–5 gallons (7.6–15.2 liters) per minute." [V] Gas units give higher flow than electric.
- For homes using "41 gallons or less of hot water daily, demand water heaters can be 24%–34% more energy efficient than conventional storage tank water heaters" [V]; 8% to 14% for heavy users around 86 gallons a day.
- Maintenance: "Read your owner's manual for specific maintenance recommendations." [V]
The companion "Storage or Tank-Type Water Heaters" page could not be read: 404 live, and no Wayback capture returned content. See Not read.

**CPSC Publication 5098, "Avoiding Tap Water Scalds"** (https://www.cpsc.gov/s3fs-public/5098-Tap-Water-Scalds.pdf). Read: full text, pdftotext. Dated on the sheet "032012".
- "The U.S. Consumer Product Safety Commission (CPSC) urges all users to lower their water heaters to 120 degrees Fahrenheit." [V] Also: "a thermostat setting of 120 degrees Fahrenheit (49 degrees Celsius) may be necessary for residential water heaters to reduce or eliminate the risk of most tap water scald injuries." [V]
- Exposure times: "Most adults will suffer third-degree burns if exposed to 150 degree water for two seconds. Burns will also occur with a six-second exposure to 140 degree water or with a thirty second exposure to 130 degree water. Even if the temperature is 120 degrees, a five minute exposure could result in third-degree burns." [V]
- Adjusting an electric heater: shut off power at the breaker first; "Most electric water heaters have two thermostats" [V] behind access panels.

**HSE, "Legionella and landlords' responsibilities"** (https://www.hse.gov.uk/legionnaires/legionella-landlords-responsibilities.htm). Read: full text, curl plus pandoc.
- For domestic systems "temperature is the most reliable way of ensuring the risk of exposure to legionella bacteria is minimised – keep the hot water hot, cold water cold and keep it moving." [V]
- Control measure named: "setting the temperature of the hot water cylinder (calorifier) to ensure water is stored at 60°C" [V].
- Testing for legionella "is not usually required for domestic hot and cold water systems" [V].
This sits in tension with CPSC's 49°C. See Contested questions.

**Temperature and pressure (T&P) relief valve.** I did not find an official consumer page that states a test interval. What I read:
- DOE Energy Saver, "Furnaces and Boilers" (Wayback 20250102062644), lists "Test pressure-relief valve" [V] among jobs for "a heating system professional" on hot-water heating systems. This is the boiler's valve, not the water heater's.
- UGA Extension Circular 1082 (below) lists, under Plumbing, "Test the water-heater pressure and temperature-relief valve for proper operation." [V] with spring and fall tick boxes.
- ASHI's plumbing page (below) says to drain a gallon or two from the bottom of the water heater every month.
The mechanism (a valve that opens if tank temperature or pressure gets too high, to stop the tank bursting) and the manufacturer's test instructions need a primary read: see Gates.

---

### 2. Drainage

#### HM Government, Approved Document H, "Drainage and waste disposal", 2015 edition (England)
https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/442889/BR_PDF_AD_H_2015.pdf
Read: Section 1 (Sanitary pipework), paragraphs 1.1 to 1.34 and Table 1, pdftotext. This is statutory guidance under the Building Regulations 2010 for England.
- Performance: a foul drainage system should "prevent foul air from the drainage system from entering the building under working conditions" and "is ventilated" and "is accessible for clearing blockages" [V] (Requirement H1 guidance, page 5).
- Para 1.3: "All points of discharge into the system should be fitted with a trap (e.g. a water seal trap) to prevent foul air from the system entering the building. Under working and test conditions traps should retain a minimum seal of 25mm of water or equivalent." [V]
- Table 1 (page 6), minimum trap sizes and seal depths: washbasin and bidet, 32 mm trap, 75 mm seal; bath and shower, 40 mm, 50 mm; sink, washing machine, dishwasher, food waste unit, urinal bowl, 40 mm, 75 mm; WC pan, 75 mm or 100 mm outlet, 50 mm seal. Footnotes allow reduced seals where appliances discharge to a gully.
- Para 1.6: traps "should be removable or be fitted with a cleaning eye." [V] This is the regulatory basis for a householder being able to undo a sink trap.
- Para 1.29: "To prevent water seals in the traps from being lost by pressures which can develop in the system, discharge stacks should be ventilated." [V] Air admittance valves are an accepted alternative in some layouts (para 1.20 area).
- Boiler condensate may join sanitary pipework through "a 75mm condensate trap" [V] (para 1.17 area).
Good for: why the U-bend holds water, why a drain gurgles or smells (lost seal, siphonage, blocked vent), and what a gully and soil stack are. It gives UK numbers; it is England-specific, and Wales publishes its own version.

#### American Society of Home Inspectors (ASHI), "Plumbing System"
https://www.homeinspector.org/for-consumers/homeowner-resources/home-systems/plumbing-system/
Read: full text, curl plus pandoc. Trade body for US home inspectors.
- Vent piping: "Vent piping allows air into the system so drains flow easily." [V] Its analogy: an upturned gallon jug goes "glub, glub" until you poke a second hole. "The vent pipe also allows sewer gas out of the system." [V]
- Signs of trouble: backing up and "the smell of sewer gas in the house" [V].
- Advice to "Drain a gallon or two of water from the bottom of your water heater every month to prevent sediment build up." [V] (A trade-body tip; manufacturers may differ. Gate.)

#### City of Superior, Wisconsin, "Sewer Smarts and Plumbing Basics"
https://www.superiorwi.gov/963/Sewer-Smarts-and-Plumbing-Basics
Read: full text, curl plus pandoc. A US municipal page.
- Older homes may have a "house trap" or "whole house trap" on the main sewer line that "provides a single liquid seal to stop sewer gases from rising up into the home" [V]; modern fixtures each have their own trap, so these are "no longer necessary" [V] and collect debris.
- Quotes a code definition of a stack as "the vertical main of a system of soil, waste, or vent piping extending through one or more stories." [V] The page attributes it to the "Universal Plumbing Code (UPC)" [V]; the US model code is usually called the Uniform Plumbing Code. Code text not read.
- Sump pumps and foundation drains explained; disconnect flexible sump hoses in winter.

#### Fats, oils and grease (FOG)
**Thames Water, "Don’t feed the fatberg" (news release, November 2025)**, https://www.thameswater.co.uk/news/2025/nov/avoid-festive-fatbergs. Read: full text, curl plus pandoc.
- "Pouring fats, oils and grease (FOG) down the kitchen sink is one of the leading causes of blockage-related internal flooding." [V]
- "Every year, Thames Water clears up to 75,000 blockages" [V] costing up to £40 million; FOG "account for 28% (20,000+) blockages in the Thames Water network annually" [V].
- From its own commissioned survey of over 2,500 adults: milk (61%) and meat juices (31%) were among the substances most poured down sinks; "a quarter (25%) of respondents being under the impression that disposable wet wipes are safe to flush down the toilet." [V] (A company-commissioned survey; cite as such.)
**City of Portland Bureau of Environmental Services, "Fats, Oil, and Grease"**, https://www.portland.gov/bes/preventing-pollution/fats-oil-and-grease. Read: full text, curl plus pandoc.
- FOG "doesn't break down in water, separates from other liquids, and sticks to pipes." [V] Blockages "can cause sewer backups and overflows" [V]. Scrape scraps to the bin; FOG "gets thick and sticky when it cools" [V].

#### What not to flush: the end of "Fine to Flush"
**WRc, "After Fine to Flush, what happens next?"** https://www.wrcgroup.com/headlines/bite-sized-views/after-fine-to-flush,-what-happens-next/ Read: full text, curl plus pandoc. WRc developed and ran the testing.
- "The beginning of March 2024 saw the end of the Fine to Flush (F2F) certification scheme, which had been operated by Water UK since 2019" [V]. Technical name WIS 4-02-06.
- Why it ended, in WRc's account: messaging, "reinforced by the view from the then Secretary of State, Therese Coffey, which stated that the term flushable (and by default the Fine to Flush scheme) confused customers" [V] and weakened the "Bin the Wipe" and "3Ps (pee, poo and paper only down the loo)" [V] messages.
- WRc's own position, which dissents: "flushable products are not the real problem for sewer networks. The evidence clearly shows that plastic wipes that don’t disintegrate are the primary cause of blockages and pump clogs." [V] WRc says it is resuming flushability testing for plastic-free moist toilet tissue.
**The Water Report, "Fine to flush certification to go down the pan"**, https://www.thewaterreport.co.uk/single-post/fine-to-flush-certification-to-go-down-the-pan. Read: full text. Confirms withdrawal in March 2024 and gives the reason as consumer confusion, "ranged from a blanket belief that all wipes were now safe to flush to failure to follow instructions" [V].
**The Environmental Protection (Wet Wipes Containing Plastic) (England) Regulations 2025, SI 2025/1218**, https://www.legislation.gov.uk/uksi/2025/1218/made. Read: citation and commencement provisions only. They "come into force 18 months after the day on which they are made" [V]; the page shows 19 May 2027. They ban supply of plastic-containing wet wipes in England (Wales has its own ban; not read).
Water UK's own Fine to Flush pages returned 403. Drafters: **do not teach the Fine to Flush logo as a current guide**; teach the 3Ps.

---

### 3. Electricity

#### Electrical Safety First (ESF), "RCDs Explained" and "FAQ for Electrical Safety"
https://www.electricalsafetyfirst.org.uk/guidance/safety-around-the-home/rcds-explained/ and https://www.electricalsafetyfirst.org.uk/safety-advice/your-questions-answered/
Read: full extracted text of both, curl plus pandoc and HTML parsing. ESF is a UK electrical safety charity. The RCD page's main explanatory body appears to load by script and did not come through; what extracted is the home-buyer checklist and FAQ. WebFetch of the page also returned no RCD explanation or 30 mA figure [T].
What it establishes:
- "Modern consumer units have a main switch and fuses and/or circuit breakers." [V]
- "To check whether your consumer unit has an RCD, look for the ‘Test’ or ‘T’ button. If you have one, pressing it will switch off the power to the areas of the home it protects." [V]
- "Older units may not have an RCD or circuit breakers, but this does not necessarily mean they are unsafe or require upgrading." [V] Without a working RCD, use plug-in RCDs.
- Warning signs: burn marks on plugs or sockets, "crackling sounds from light switches, light fittings, or socket-outlets" [V], curled labels or scorching on light fittings.
- Home surveys do not cover electrics: "Don’t rely on the standard home survey as this will not cover electrical safety." [V]
- FAQ: "If the RCD in your fusebox keeps tripping, there is likely to be a fault that needs investigating - either with a particular appliance or the wiring itself. You should get a registered electrician to investigate" [V].
- Periodic inspection (EICR): "for tenanted properties, every 5 years or at each change of occupancy, whichever is sooner at least every 10 years for an owner-occupied home" [V] (list items run together in the extraction).
- "The neutral wire is blue." [V]
- Part P: notifiable work is "all installation work and anything in a bathroom" [V] in ESF's summary, and must be done by a registered electrician or reported to building control.
**ESF, "Plugs and fuses"** (https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/). Read: full text. "An RCD (residual current device) in your consumer unit (fusebox) protects you from electric shocks if a product is faulty." [V]
Not established from a read source: the 30 mA trip rating, the ESF "test every three months" interval (search snippet only), the ring final circuit and radial circuit definitions, MCB ratings. See Gates.

#### IET, "Part P (England and Wales): Frequently Asked Questions"
https://electrical.theiet.org/bs-7671/building-regulations/part-p-england-and-wales/frequently-asked-questions/
Read: full text, curl plus pandoc. The IET publishes BS 7671 jointly with BSI.
- "Part P came into effect in England and Wales on 1 January 2005." [V] "The current edition of Part P of the Building Regulations came into effect on 6 April 2013" [V].
- The standard: "BS 7671:2018, Requirements for electrical installations (The IET Wiring Regulations 18th Edition)." [V] (The FAQ may be behind the current amendment; see Gates.)
- Notifiable: "new installations, house re-wires, and the installation of new circuits" and "additions to existing circuits in special locations" [V]. Everything else, "maintenance, replacement and repair work" [V], is non-notifiable.
- Special location, bathroom: the zone extends to 2.25 m above floor and 0.6 m horizontally from the bath or shower tray edge (or 1.2 m from a showerhead with no tray).
- "Part P will apply to all electrical work in dwellings, whether carried out by professionals or DIYers." [V] Minor non-notifiable examples: "adding a lighting or power point to an existing circuit, adding a spur to an existing circuit or replacing a light fitting." [V]
This overlaps outcome 5 (who may do what); flag for whichever researcher owns the regulation part.

#### City & Guilds 6219, unit 133 (a small but useful fact)
The 6219 handbook (below) records a change "Unit 133 – change ‘ring main’ to ‘ring final circuit’ in title and throughout unit." [V] The trade term is "ring final circuit"; "ring main" is the everyday name.

#### CPSC, "GFCIs Fact Sheet" (CPSC Document 099)
https://www.cpsc.gov/s3fs-public/099_0.pdf
Read: full text, pdftotext (two pages; layout is two-column, so I checked each quoted phrase in context). The footer carries the code "092010" above "Pub. 099" (probably a September 2010 revision code; the sheet doesn't say). (Stage 4 note, lesson 05: formerly "Undated on the sheet".)
- A GFCI "is an inexpensive electrical device that can either be installed in your electrical system or built into a power cord to protect you from severe electrical shocks." [V]
- How: it compares current out and back; if they differ "as little as 0.006 amperes" [V] it cuts power. (Note: 0.006 A is 6 mA. The UK RCD rating for personal protection is 30 mA; the two figures are not the same standard. Gate.)
- "A ground fault is an unintentional electrical path between a power source and a grounded surface." [V]
- NEC GFCI requirements with effective dates, as CPSC lists them: underwater pool lighting (1968); receptacles outdoors (1973), bathrooms (1975), garages (1978), kitchens (1987), crawl spaces and unfinished basements (1990), wet bar sinks (1993), laundry and utility sinks (2005). "The NEC typically only applies to new construction/major renovations." [V] The list is old: it stops at 2005 and the NEC is revised every three years. Do not present it as current.
- Test: "At least once a month" [V], press test (light should go out), then reset.
- Install: circuit-breaker GFCIs by a qualified electrician; receptacle GFCIs may be fitted by consumers "with adequate knowledge and skills" [V], otherwise by an electrician.

#### ESFi, "Ground Fault Circuit Interrupters" 
https://www.esfi.org/gfci/ Read: full page text from Wayback capture 20250524154705 (live site 403). Thin page. "GFCIs should be tested every month to ensure they are in working order." [V] GFCI described as "a special type of electrical outlet designed to cut off power before an electrical shock can occur." [V]

#### CPSC Publication 5133, "Preventing Home Fires: Arc Fault Circuit Interrupters (AFCIs)"
https://www.cpsc.gov/s3fs-public/5133.pdf Read: full text, pdftotext. Dated "R042012".
- "Typical household fuses and circuit breakers do not respond to early arcing and sparking conditions in home wiring." [V]
- "AFCIs are intended to address fire hazards; GFCIs address shock hazards. Combination devices include both AFCI and GFCI protection in one unit." [V]
- Older homes "especially may benefit" [V].
- "Be sure to have a qualified electrician install AFCIs; do not attempt this work yourself. The installation involves working within electrical panel boxes that are usually electrically live, even with the main circuit breakers turned off." [V]
Where the current NEC requires AFCIs: search snippets name NEC 210.12 and a long list of rooms; I did not read NFPA or ESFi's AFCI page. Gate.

#### Resetting a tripped circuit and finding the fault
No official page I could read gives the step-by-step. What is established from read sources: an RCD that keeps tripping means a fault in an appliance or the wiring, for a registered electrician (ESF FAQ [V]); fuses and breakers are not arc detectors (CPSC 5133 [V]); UGA's checklist says to "Trip the circuit breakers and test ground fault interrupters to ensure proper protection; label switches if needed." [V] Search snippets from electrical contractors describe the usual method (switch everything off, unplug appliances on the circuit, reset, reconnect one at a time; do not hold a breaker on; do not keep resetting if it trips instantly with nothing connected). That method is sound practice but needs an authoritative source before a lesson states it. Gate.

---

### 4. Gas

#### Cadent Gas, "What to do if you smell gas"
https://cadentgas.com/smell-gas Read: full text, curl plus pandoc. Cadent is the largest gas distribution network in Great Britain.
- Number: "call us immediately on 0800 111 999* at any time of the day or night." [V] It is the National Gas Emergency Service number, free and 24/7.
- Steps before and while calling: "Open doors and windows to ventilate the property." [V] "Turn off the gas at the mains tap. This can usually be located near the gas meter and has a handle that can be turned 90 degrees. If the gas leak is in a cellar or basement, do not enter and instead evacuate the building." [V]
- Do not: "Turn any power or light switches on or off." [V] (The rest of the don't list is in images and did not extract; the text version below from Con Edison covers the same ground for the US.)
- Symptoms such as dizziness, nausea and headaches with no gas smell "could be a sign of a carbon monoxide leak." [V]
- Loss of smell: points to the charity SmellTaste.
- Gas smelled outside: still call 0800 111 999 and avoid naked flames.

#### National Gas, "Emergency Contacts"
https://www.nationalgas.com/emergency-contacts Read: full text. Confirms "Call 0800 111 999" [V] and that "these emergency guidelines apply to all gas users." [V]

#### SSE Airtricity Gas Supply NI, "In an emergency"
https://www.sseairtricitygasni.com/in-an-emergency/ Read: full text.
- Northern Ireland number: "phone the 24-hour Northern Ireland Gas Emergency Service on 0800 002 001." [V]
- "Turn off the gas supply at the meter, unless the meter is located in a cellar or basement – in which case, do not enter." [V] "Open doors and windows for ventilation." [V] "Never leave it to anyone else to call the Emergency number" [V].
Not covered by any source read: the Isle of Man and Channel Islands numbers.

#### HSE, "Domestic gas: frequently asked questions" and "Carbon monoxide awareness"
https://www.hse.gov.uk/gas/domestic/faqs.htm and https://www.hse.gov.uk/gas/domestic/co.htm Read: full text of both.
- "It is illegal for anyone to use a gas appliance if they suspect it is unsafe. Turn the appliance off and do not touch it until it has been checked by a Gas Safe registered engineer." [V]
- "HSE strongly advises that all gas appliances, flues and pipework should be installed, regularly maintained and serviced at least annually by a Gas Safe registered engineer." [V]
- "Anyone employed to work on gas appliances in domestic premises must be a Gas Safe registered engineer and competent in that area of gas work." [V]
- "Every year around 7 people die from gas-related carbon monoxide (CO) poisoning." [V] (No year given for the figure.)
- CO alarms: HSE "strongly recommends" them but they "should not be regarded as a replacement for regular maintenance" [V]; buy to "British Standard EN 50291" [V].
- HSE Gas Safety Advice Line 0800 300 363 (office hours).
- Note: the FAQ still names "National Grid's Gas Emergency Freephone number: 0800 111 999" [V]. The number is right; the operator name is out of date. Lessons should say "National Gas Emergency Service".
- CO symptoms "can mimic many common ailments" [V]: headaches, dizziness and others; seek urgent advice from a GP or A&E.

#### US: gas utilities
**SoCalGas, "Natural Gas Leaks"** (https://www.socalgas.com/safety/safety-and-prevention/natural-gas-leak). Read: full text; page stamped 07/23/2024.
- "IMMEDIATELY EVACUATE THE AREA and call us from a safe location" [V]; call 911 from a safe location if life or property is at risk; do not smoke, light a flame, or "turn electrical appliances or lights on or off" [V].
- Odour fade: odorant can be lost in new steel pipe, at higher pressures with intermittent flow, and with rust or other substances, so "it's important to not rely only on your sense of smell" [V]. Signs to see and hear: hissing or whistling, dirt or water blowing, a dry patch of grass.
**Con Edison, "Gas Safety"** (https://www.coned.com/en/safety/energy-safety/gas-safety). Read: full text.
- "Leave immediately and take others with you." [V] Call 911 or the utility. "Don’t light a match, smoke, flip a switch, ring a doorbell, or touch appliances or electronics, including your phone. Doing so can produce sparks that might cause the gas to explode." [V] "Don’t assume someone else has already called." [V]
**Atmos Energy** (https://www.atmosenergy.com/safety/recognizing-leak/). Read: full text. "leave the area immediately! From a safe distance call 911" [V]; use smell, sound and sight.
PHMSA's page returned 403 (not read).

Where the meter and emergency control valve are: Cadent's text says near the meter with a 90-degree handle. A description of the valve's colour or handle position (open when in line with the pipe) was seen only in snippets. Gate.

---

### 5. Heating

#### UK: boilers, pressure, radiators, TRVs
**Worcester Bosch, "Boiler Pressure: How often should I need to top up the pressure in the heating system?"** https://www.worcester-bosch.co.uk/support/troubleshooting/faqs/all-faqs/how-often-should-i-need-to-top-up-the-pressure-in-the-heating-system Read: full text, curl plus pandoc. A major UK boiler manufacturer (Bosch group).
- **Who says 1 to 1.5 bar:** "When the heating system is cool, the pressure should be between 1 and 1.5 bar on the pressure gauge (the indicator needle would usually be in the green section)." [V]
- "If pressure is below 0.5 bar (down in the red section), water has been lost from the system and must be replaced." [V] Red can also mean too high, "about 2.75 bar or more" [V]; overfilled systems are brought down by bleeding a radiator.
- "If pressure rises by more than 1 bar when the heating is up to temperature then the expansion vessel may require repressurising. This will require a service engineer." [V]
- "The pressure in the system will usually require topping up once or twice a year." [V] More often suggests a leak: contact the installer.
This is one manufacturer's figure for its sealed systems. The range is widely repeated by other brands and installers (snippet only). A lesson should say "check the figure in your boiler's manual; Worcester Bosch, for example, gives 1 to 1.5 bar cold." It applies to sealed (combi and system) circuits, not open-vented regular systems with a header tank.

**Worcester Bosch, "How to bleed a radiator"** https://www.worcester-bosch.co.uk/support/troubleshooting/faqs/all-faqs/how-to-bleed-a-radiator Read: full text.
- Diagnosis: radiators needing bleeding are "colder at the top than at the bottom"; if the reverse, "cold at the bottom and hot at the top" this "could mean that sludge has built up in your radiator and you might need your system cleaned." [V]
- Steps: heat on to find the cold ones; "Turn off your heating system and wait for the radiators to cool" [V]; key in the bleed screw at the top; anti-clockwise to open, hiss of gas, close clockwise when water flows steadily; heating back on; check; then "make sure you top up the pressure on your boiler. Boiler pressure can be lost when bleeding radiators." [V]

**Energy Saving Trust, "The most economical ways to use your central heating"** (energysavingtrust.org.uk/take-control-your-heating-home/). Read: full text from Wayback capture 20260417064839 (live 403).
- "turning up your room thermostat won’t make your home heat any faster!" [V]
- Room thermostat: "For most people, this is between 18°C and 21°C." [V] Keep it clear of curtains, furniture and radiators.
- TRVs "work by sensing the air temperature around them. If the room is warmer than the setting on the TRV, the valve will close a little." [V] "TRVs usually have a scale from 0 – 6, where zero (0) is off and six (6) is fully open." [V] Suggests 3 to 4 in main rooms and 2 to 3 in bedrooms.
- Savings figures (e.g. programmer, thermostat and TRVs "can save £110 a year" [V]) are EST estimates tied to a price cap period; they date quickly. Use with a date or leave out.
- Boiler flow temperature explained as the temperature of water pumped to the radiators.

#### US: furnaces, filters, heat pumps, boilers
**DOE Energy Saver, "Furnaces and Boilers."** Read: full text from Wayback capture 20250102062644 (404 live).
- "Furnaces heat air and distribute the heated air through the house using ducts. Boilers heat water, and provide either hot water or steam for heating." [V]
- AFUE: "An AFUE of 90% means that 90% of the energy in the fuel becomes heat for the home" [V]. AFUE excludes duct losses, "which can be as much as 35% of the energy for output of the furnace when ducts are located in the attic, garage, or other partially conditioned or unconditioned space." [V] Old systems 56% to 70%; modern up to 98.5%.
- Maintenance "should be provided by a heating system professional" [V]: vent connector and chimney, heat exchanger integrity. "Furnace heat exchangers mix combustion gases with house air when they leak" [V], which the page gives as an important safety reason for inspection. "It is suggested that ever home have a working carbon monoxide alarm." [V] (sic: "ever").
- Hot-water systems: "Test pressure-relief valve", "Test high-limit control" [V]; steam systems: test the low-water cutoff.
- Venting: "If you smell gases, you have a venting problem that could affect your health." [V]
**DOE Energy Saver, "Operating and Maintaining Your Heat Pump."** Read: full text, Wayback 20250102062920 (404 live).
- "You should have a professional technician service your heat pump at least once a year." [V]
- "Clean or change filters every 3 months or as recommended by the manufacturer or installer." [V]
- Neglect penalty: "can range from 10% to 25% (NREL)" [V].
- "Do not set back the heat pump's thermostat if it causes the backup heating to come on." [V] Clean outdoor coils with the fan power off.
**DOE Energy Saver, "Maintaining Your Air Conditioner."** Read: full text, Wayback 20241215045250.
- "Clean or replace your air conditioning system's filter or filters every month or two during the cooling season." [V] Keep 2 feet (0.6 m) clear round the condenser; fin combs; condensate drains.
**DOE Energy Saver, "Heat Pump Systems."** Read: full text, Wayback 20241231180018. Air-source heat pumps "can reduce your electricity use for heating by up to 75% compared to electric resistance heating" [V]; ENERGY STAR Cold Climate label for regions that regularly freeze.
**ENERGY STAR, "Maintenance Checklist"** (https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist). Read: full text, live. Annual pre-season contractor check-ups: cooling in spring, heating in fall. Contractor checks include "Check all gas (or oil) connections, gas pressure, burner combustion and heat exchanger." [V] Do-it-yourself: "Inspect, clean, or change air filters once a month in your central air conditioner, furnace, and/or heat pump." [V] Check the condensate drain: "A plugged drain can cause water damage in the house" [V].
Filter frequency therefore differs by source: ENERGY STAR "inspect, clean, or change" monthly; DOE heat pump page every 3 months; DOE air conditioner page every month or two in season. They are consistent if taught as "check monthly, change when dirty and at least as often as the maker says." See Contested questions.

---

### 6. The building envelope: roof, gutters, damp, condensation, mould, ventilation

#### GOV.UK (DHSC, MHCLG, OHID, UKHSA), "Understanding and addressing the health risks of damp and mould in the home"
https://www.gov.uk/government/publications/damp-and-mould-understanding-and-addressing-the-health-risks-for-rented-housing-providers/understanding-and-addressing-the-health-risks-of-damp-and-mould-in-the-home--2
Read: full body text via the GOV.UK content API (about 16,700 words). First published 7 September 2023; updated 1 April 2026. Audience: landlords, health and housing professionals in England; still the best official plain-language account of damp types for a householder.
- Origin: "In December 2020, 2-year-old Awaab Ishak died from a severe respiratory infection caused by prolonged exposure to damp and mould in his home." [V] The guidance responds to the Coroner's concerns after the inquest.
- The four types, as defined:
  - "Condensation damp happens when moisture generated inside the home cools and condenses onto colder parts of the buildings (for example window frames, corners and low points on walls behind sofas or wardrobes)." [V]
  - "Penetrating damp is water that gets into the building from outside due to defects in the walls, roofs, windows or floors." [V]
  - "Rising damp is moisture from the ground that rises up through parts of the buildings in contact with the ground (walls and floors); it is usually found in older properties and is often misdiagnosed." [V]
  - "Traumatic damp can be caused by leaking water from waste and heating pipes, overflowing baths or sinks, burst pipes or defective water storage vessels inside the building." [V]
- "Condensation is one of the most common causes of damp and mould in homes." [V]
- Causes can combine: "traumatic or penetrating dampness may exacerbate condensation dampness." [V]
- External checks listed: "damaged or blocked pipes, gutters or downpipes", broken window seals, cracks in render, "missing or broken roof finishes", "bridged (compromised) damp proof course" [V]. Internal checks: peeling wallpaper, staining, visible condensation, defective plaster, high humidity, low insulation, "damaged, blocked, absent or switched off mechanical ventilation (for example, extractors in kitchens and bathrooms)" [V].
- Hidden mould: "The smell of mould without visible evidence of mould may indicate that there is mould behind a surface" [V].
- Cleaning: "most tenants could reasonably be expected to remove condensation and very small amounts of mould using an appropriate mould and mildew cleaner, larger areas of mould should only be addressed by qualified professionals." [V] "Mould and mildew products should be used in preference to bleach, for health and safety reasons." [V]
- Ventilation: "Under building regulations, all replacement windows are required to have trickle vents." [V] Kitchens and bathrooms especially need adequate ventilation. Practical suggestions include "cooking with pan lids on, and keeping internal doors shut when cooking and bathing" [V].
- Blame: "We are absolutely clear that it is totally unreasonable to blame damp and mould in the home on ‘lifestyle choices’." [V] and "Approaches that attach blame to occupants’ behaviour are unjust and counterproductive." [V] (Drafting point: a course that tells householders how to cut moisture must not slide into implying that damp is the occupant's fault. The guidance says both things: small behavioural adjustments help; blame is wrong.)
- Law (England): Housing Act 2004 and the HHSRS; "Generally, a ‘category 1’ hazard means that an occupier of or visitor to the property may require some form of medical attention over the course of a year." [V] Also the Homes (Fitness for Human Habitation) Act 2018, Landlord and Tenant Act 1985, Decent Homes Standard. "The government’s review of the HHSRS has now concluded" [V] with findings to follow.
- The body text I extracted does not mention "Awaab's Law" or the Hazards in Social Housing regulations by name. Gate.

#### US EPA, "A Brief Guide to Mold, Moisture and Your Home"
https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home Read: full text, curl plus pandoc. "Last updated on February 18, 2026." Web version of EPA publication 402-K-02-003.
- "The key to mold control is moisture control." [V]
- "It is important to dry water-damaged areas and items within 24-48 hours to prevent mold growth." [V]
- "It is impossible to get rid of all mold and mold spores indoors" [V]; spores do not grow without moisture.
- DIY threshold: if the area is "less than about 10 square feet (less than roughly a 3 ft. by 3 ft. patch), in most cases, you can handle the job yourself" [V]; bigger areas or lots of water damage, consult EPA's remediation guide.
- "keep indoor humidity below 60 percent (ideally between 30 and 50 percent) relative humidity" [V]; hygrometers cost "$10-$50" [V].
- Biocides: "The use of a chemical or biocide that kills organisms such as mold (chlorine bleach, for example) is not recommended as a routine practice during mold cleanup." [V] Never mix bleach with ammonia products.
- "You must have completely fixed the water or moisture problem before the cleanup or remediation can be considered finished." [V]
- Renters: report leaks and moisture to the owner; escalate to health or housing authorities.

#### CDC, "About Mold and Your Health" (or similar title)
https://www.cdc.gov/mold-health/about/index.html Read: full text from Wayback capture 20260923211319 (live 403).
- Humidity "no higher than 50%" [V]; dry out within 24 to 48 hours after a flood.
- Cleaning: hard surfaces "with household products, soap and water, or a bleach solution of no more than 1 cup of household laundry bleach in 1 gallon of water." [V] "Never mix bleach with ammonia or other cleaners." [V]
- Health: cites the 2004 Institute of Medicine finding of "sufficient evidence" [V] linking indoor mould with upper respiratory symptoms, cough and wheeze, asthma symptoms in people with asthma, and hypersensitivity pneumonitis in susceptible people; and the 2009 WHO dampness and mould guidelines (neither read).

#### University of Minnesota Extension, "Controlling moisture problems in your home" and "Moisture in basements: causes and solutions"
https://extension.umn.edu/moisture-and-mold-indoors/do-you-have-too-much-moisture-your-home and https://extension.umn.edu/moisture-and-mold-indoors/moisture-basements-causes-and-solutions Read: full text of both. A US land-grant university extension service.
- Symptoms: "window condensation, mildew, mold, peeling paint and excessive dust mites." [V] "When the relative humidity is more than 50%, moisture problems may occur." [V] Target "25% (winter) to 50% (summer)" [V] in a cold climate.
- Roof water volume: "In a 1-inch rain, 1,250 gallons of water fall on the roof of a 2,000-square-foot house." [V]
- Grading: slope soil away "a minimum of 1 inch per foot for at least 6 feet." [V]
- Gutters: "A downspout without an extender or splash block is worse than no downspout at all." [V] "Place a minimum of one downspout per 50 linear feet of roof eave. Extensions should discharge water at least 4 feet beyond the wall." [V]
- A named misconception: summer basement condensation is often mistaken for leakage: "Many homeowners see this moisture and believe they are experiencing basement wall leakage, when in fact the accumulated moisture is from condensation." [V]

#### DOE Energy Saver, "Whole-House Ventilation" and "Air Sealing Your Home"
Read: full text from Wayback captures 20250102092834 and 20241231180120 (both 404 live).
- "Energy-efficient homes -- both new and existing -- require mechanical ventilation to maintain indoor air quality." [V] Four types: exhaust, supply, balanced, energy recovery. Exhaust systems "Can cause backdrafting in combustion appliances" [V]; supply systems "Can cause moisture problems in cold climates" [V].
- Air sealing: "Relying on air leakage for natural ventilation is not recommended." [V] "The recommended strategy is to reduce air leakage as much as possible and to provide controlled ventilation as needed." [V] Caulk and weatherstrip; "Check your dryer vent to be sure it is not blocked. This will save energy and may prevent a fire." [V]
This is the US statement of "build tight, ventilate right", and matches the GOV.UK guidance's point that an energy-efficient home is less prone to condensation "provided it is adequately ventilated" [V].

#### The rising damp question: both sides in their own words

**Side 1: the damp-proofing industry (Property Care Association).**
**PCA, "Rising Damp Advice"** https://www.property-care.org/homeowners/advice/rising-damp/ Read: full text. The PCA is the trade body for damp-proofing and related specialists.
- "Rising damp is simply due to the process of external ground water being drawn up through brickwork by what is known as capillary action." [V]
- Signs: moisture at the base reducing with height, often a "‘tide-mark’" [V]; "Hygroscopic salts (particularly chlorides/nitrates) are almost invariably present in groundwater" [V].
- Causes include bridging of the DPC by raised ground or a patio, and incorrect installation. A DPC is "installed roughly at about 6 inches from the ground" [V].
- Remedy: remove bridging first; if the DPC "has failed in some way" [V], get a PCA specialist survey; salt-contaminated plaster may need replacing with salt-resistant plaster.
**RICS Property Journal, Michael Cooper FRICS and Andrew Thompson FRICS, "Rising damp needs continuing research", 23 November 2020** https://ww3.rics.org/uk/en/journals/property-journal/rising-damp-needs-continuing-research.html Read: full text. This article reports, and leans towards, the "rising damp is real" side. It summarises Leslie Sellers' 2017 University of Salford doctoral thesis (not read) as concluding: "Rising damp is a real phenomenon that warrants treatment and the contemporary method of damp-proofing, installed as it would be on a real construction site, does provide effective control." [V] It also describes the other side's claim that "rising damp was simply a myth used by surveyors as a cash cow" [V] and notes Hart v Large [2020] EWHC 985 (TCC), where a surveyor who missed a damp defect was found negligent.

**Side 2: sceptics (conservation professionals and some surveyors).**
**The Architects' Journal, "Rising damp is a myth, says former RICS chief", 26 June 2009** https://www.architectsjournal.co.uk/home/-rising-damp-is-a-myth-says-former-rics-chief/5204095.article Read: full text.
- Stephen Boniface, former chair of the RICS construction faculty, said "‘true rising damp’ is a myth" and chemically injected DPCs are "‘a complete waste of money’" [V]; and "‘The most likely causes of damp are moisture penetration and, most commonly, condensation’" [V].
- Elaine Blackett-Ord (building conservation architects' register) called injected DPCs "ineffective and grossly expensive" and cement-based internal renders damaging to historic buildings [V].
- Jeff Howell (author of The Rising Damp Myth, 2008, not read) on his laboratory brick-pillar trials [V, as quoted].
- The counter-voice in the same article, Terry Brown of GMW Architects: "It’s right to question the diagnostic skills of commercial damp proofing firms, but to state categorically there is no such thing as rising damp undermines a whole litany of rules of brickwork detailing" and "the challenge has to be scientific and not anecdotal." [V]

**The settled middle: the 2022 Joint Position Statement.**
**RICS, Historic England and PCA, "Investigation of moisture and its effects on traditional buildings: Principles and competencies", Joint position statement, 1st edition, September 2022** (ISBN 978 1 78321 478 5). https://ihbc.org.uk/toolbox/docs/JPS2022%20Investigation%20of%20moisture%20v3.pdf Read: full text, pdftotext (15 pages).
- Adopted also by Cadw, Historic Environment Scotland, HED Northern Ireland, IHBC and SPAB. This is the one document both camps have signed.
- "Traditional" means "buildings with solid walls built from permeable materials such as brick, stone, earth, timber and lime-based mortars, plasters and renders. Traditional construction absorbs moisture but allows it to evaporate when conditions become drier." [V]
- Section 1B: surveyors should "Recognise that traditional buildings are constructed with different detailing and performance expectations from modern buildings, and that moisture presence in such buildings may not be down to a construction failure." [V]
- Section 2 item 9 and section 3: understand salts and "how this might influence a resistance meter" [V]; the listed measuring methods include gravimetric analysis, carbide meters, resistance and capacitance meters.
- Section 5: recommendations "must be proportionate to the defect and the significance of the building." [V]
- Explanatory notes: a contractor who quotes must "report objectively on the facts of the problem, only suggest remedial works that are proportionate to any defects discovered" [V] and declare any financial interest in the product or treatment specified.
**Historic England, "Damp in Historic Buildings"** landing page, Wayback 20250717054548 (live 403). Read: full extracted text (about 320 words). "Damp is a significant problem in many buildings. It causes decay of building fabric and contents, creates unhealthy conditions for occupants and makes buildings more expensive to heat." [V] Links to the JPS and to conference recordings; the guidance publication "Assessing Damp in Historic Buildings" was not read.
**Cadw, "Investigation of moisture in traditional buildings"** (https://cadw.gov.wales/investigation-moisture-traditional-buildings). Read: full text (about 260 words); confirms Cadw's adoption.

What a householder course can teach from this: rising damp exists as a mechanism (both sides' documents describe capillarity), is less common than condensation and penetrating damp, is "often misdiagnosed" (GOV.UK [V]), and a resistance moisture meter reading on a wall is not a diagnosis because salts distort it (JPS [V]). Check the cheap outside causes first (gutters, downpipes, ground level against the wall, bridged DPC, cement render or pointing on an old wall), and treat a quote from someone selling a treatment with the JPS's own standard: proportionate, declared interest.

---

### 7. Canonical textbooks, courses and free resources

#### Manuals most often recommended
Evidence that these are the standard general manuals: North Seattle College's continuing-education course "Basic Hands-On Home Repair and Maintenance" (https://conted.northseattle.edu/courses/basic-hands-home-repair-and-maintenance, read in full) says "No textbooks are needed but a general home repair book (Readers Digest, Black & Decker, etc.) might enhance class demos." [V]

**Reader's Digest, Complete Do-It-Yourself Manual** (first published 1973; "New Complete" edition 1991, 528 pp, ISBN 0895773783; "Completely Revised and Updated" edition with Family Handyman, 2005 (Publishers Weekly listing ISBN 978-0-7621-0579-3) and a 2009 Canadian printing, ISBN 9780888509604).
Read: TOC only, from the Internet Archive catalogue record for the 1973 edition (readersdigestcom0000unse_x7w4, contents note), plus the Publishers Weekly review of the revised edition (full text) and the archive.org description of the 2009 printing. Book text not read (lending-restricted).
- 1973 sections: 1 Hand tools; 2 Power tools; 3 Fasteners, hardware and adhesives; 4 Interior repairs (walls and ceilings, floors, windows, weatherstripping, doors and locks, ceramic tile, basements, household pests); 5 Exterior repairs (roof repairs, asphalt and slate shingles, flat roofs, "Gutters and downspouts", waterproofing basement walls); 6 Furniture; 7 Plumbing ("Plumbing emergencies", "Home plumbing systems", "Hot-water heaters", "Sewage disposal"); 8 Electricity ("solving power problems safely"); 9 Climate control (heating and air conditioning, heat pump, controls); 10 Painting and decorating; further sections beyond the extract.
- Publishers Weekly on the revision: "Seventeen chapters" and "more than 3,000 photos and illustrations" [V]; new Landscaping and Storage sections.
Use: the shape of the field. Tools first, then fixings, then interior, exterior, plumbing, electrics, heating, decoration.

**Black & Decker (Creative Publishing International, now Cool Springs Press / Quarto), The Complete Photo Guide to Home Repair** (1999, 504 pp; 2004, 598 pp; 2008 edition 559 pp, ISBN 9781589234178; 4th edition c. 2016, ISBN 9781591866633) and its successor **The Book of Home How-To** (2014, 600 pp, ISBN 9781591865988; updated editions since).
Read: TOC only, from the Internet Archive catalogue record for the 2008 edition (contents note), plus the Quarto product page for "Black & Decker The Book of Home How-To" (full text).
- 2008 contents: "Introduction -- Interior -- Maintaining windows & doors -- Exterior repairs -- Plumbing & wiring -- Heating, ventilation, & air conditioning -- Reference charts" [V, catalogue note]; publisher blurb: "more than 200 essential home repair projects, including common wiring, plumbing, interior and exterior repairs" [V].
- Quarto page: the current "Home How-To Home Repair" covers "over 50 of the most common household repairs, including wiring and plumbing, all current with the latest 2019–2020 codes" [V]. US codes only.

**Albert Jackson and David Day, Collins Complete DIY Manual** (HarperCollins; 1993, 528 pp; revised 1997, 2001, 2004 (550 pp, ISBN 9780007185238), 2007, 2011 (552 pp, ISBN 9780007425952)).
Read: publisher description via Google Books through WebFetch [T], and Open Library and Internet Archive catalogue records (edition data). Book text and full TOC not read.
- 2004 contents per the publisher description [T]: planning; decorating; repairs and maintenance; home security; infestation, rot and damp; insulation and ventilation; electricity; plumbing; heating; garden projects; tools and techniques.
Use: the standard UK manual. Its section on "infestation, rot and damp" and "insulation and ventilation" as chapters of their own is itself a signal of what British practice treats as core. Its regulatory content predates Part P's 2013 edition in the 2011 printing at best; do not rely on it for current rules.

**Haynes home manuals.** Searches returned only the motoring manuals and bookseller category pages. I found no specific Haynes home-maintenance title with a readable contents list. Not read.

#### Real syllabi and course outlines
**UGA Cooperative Extension Circular 1082, "Home Maintenance Checklist"**, Pamela R. Turner and Lindsey Bailey, "Reviewed June 2021". https://www.fcs.uga.edu/docs/HomeMaintChecklist_update_6.21.pdf Read: full text, pdftotext (3 pp). A land-grant extension publication and the best model for the seasonal-schedule outcome.
- Organised as spring and fall checks under: Basement/Crawl Space; Exterior; Yard; Windows and Walls; Roof and Attic; Appliances; Plumbing and Bathrooms; Electrical; Heating and Cooling. Note "maintenance frequencies may vary depending on your local climate and appliance manufacturing recommendations." [V]
- Examples: "Clean gutters and downspouts (may need to be done more frequently). Make sure they discharge water 2-3 feet away from the house." [V] "Check flashing around the chimney, plumbing vent, skylight" [V]. "Check ductwork connections to make sure that fans exhaust to outdoors." [V] "Vacuum clothes dryer lint from ducts" [V]. Septic tank pumping "every 3 - 7 years" [V]. "Test the water-heater pressure and temperature-relief valve" [V]. "Trip the circuit breakers and test ground fault interrupters" [V]. "Replace air filters" [V] (with a note that it may be more often). "Hire a professional to tune-up the heating and cooling system." [V]
- Where it says hire a professional: sewer line clearing, foundation cracks, pest treatment, septic pumping, HVAC tune-up, chimney (optional).
Note that UGA's downspout figure (2 to 3 feet) and UMN's (at least 4 feet) differ; both are US extension services. Teach "well away from the wall; your local guidance may give a figure."

**Utah State University Extension, "Home Maintenance Checklist"** (https://extension.usu.edu/finance/faq/home-maintenance-checklist). Fetched in full (about 700 words) but only skimmed for structure; not relied on.

**North Seattle College continuing education, "Basic Hands-On Home Repair and Maintenance."** Read: full course page. Content: "hand tools, how to work with electrical outlets, switches, lighting; plumbing, faucets, wall repair and more. Get an overview of door and window installation, weatherization and remodeling." [V] Required safety gear: "eye goggles, a respiratory mask, and ear protection" [V].

**The Goodlife Centre, London, "7 DIY Courses for Beginners in London."** https://www.thegoodlifecentre.co.uk/7-diy-courses-for-beginners-in-london/ Read: full text. A private UK adult-education workshop, the closest UK analogue to a community-college home-repair class.
- Beginners' plumbing: "Plumbing = water in and water out." [V] It teaches how to "isolate water supply, fix a leaky tap, rescue something from a U-bend and unclog a blocked sink" [V], replace cistern parts, and fit washing machines.
- Beginners' electrics: wire a simple lighting circuit and "Stay safe in your home by finding out what you can and can’t do yourself without certification." [V]
- Also drilling and fixings, preparing and painting, tiling.

**City & Guilds 6219, Entry Level and Level 1 Awards, Certificates and Diplomas in Basic Construction Skills, Qualification handbook**, "July 2025 Version 4.9". https://www.cityandguilds.com/-/media/productdocuments/construction_and_the_built_environment/construction/6219/centre_documents/6219_e3_l1_a_c_d_qualification_handbook_v4,-d-,9-pdf.pdf Read: contents and unit list (pages 1 to 5), pdftotext. This is pre-vocational trade training, not a homeowner course, but it is the recognised UK entry qualification in the same skills.
- Entry 3 units include "Painting techniques", "Tiling a plain wall", "Removing and refitting water-filled radiators", "Working with non-manipulative fittings", "Connecting flex to common apparatus" [V]. Level 1 units include "Introduction to health and safety in construction", "Fitting locks and latches", "Painting and wallpapering", "Cutting and fixing tiles to wet areas", "Bending and jointing copper pipes", "Installing rain water goods", "Assembling 13amp switched sockets wired in ring final" (circuits) and lighting circuits [V].
- Useful as a benchmark: the practical plumbing units a beginner is trusted with are radiators and push-fit (non-manipulative) fittings; the electrical units are done in a training workshop, not in a home.

#### Best free resources to link (status as of 25 September 2026)
- **ENERGY STAR** (energystar.gov): live; maintenance checklist read. Recommended.
- **US DOE Energy Saver**: **not live** (404). Do not link. Cite Wayback if needed.
- **EPA** mold guide and WaterSense: live, dated 2026. Recommended.
- **University extension services** (UGA, UMN): live, free, research-based. Recommended.
- **GOV.UK damp and mould guidance**: live, updated April 2026. Recommended.
- **WaterSafe** (stop tap, pressure, find a plumber): live. Recommended for UK.
- **Energy Saving Trust**: live but blocks automated reading; content read via Wayback. Recommended.
- **Electrical Safety First**: live; some content script-loaded. Recommended with care.
- **HSE gas pages**: live. Recommended.
- **Cadent / National Gas**: live. Recommended.
- **This Old House** and **Which?** how-to pages: not read. Do not cite until read.

---

### (a) What this part says the field considers essential

1. **Know your shut-offs before you need them.** Every source on water, gas and electricity makes finding the control point the first skill: the internal stop tap or main shut-off valve (WaterSafe, WSSC), the consumer unit or panel and its main switch (ESF), the gas emergency control valve by the meter (Cadent, SSE NI). The manuals and the UGA checklist both treat labelling breakers and exercising valves as routine.
2. **Water gets in, water gets out, and air and gas must not come back.** The house is a set of flows: pressurised supply in, gravity drainage out through traps that hold a water seal against sewer air, with vents to stop the seals being sucked out (Approved Document H, ASHI).
3. **Moisture is the enemy of the building.** EPA: moisture control is mould control; GOV.UK: four kinds of damp with different causes; UMN: most basement water is grading, gutters and condensation. The seasonal lists (UGA) are mostly about keeping water off and out.
4. **Protective devices are there to trip.** RCDs and GFCIs protect people from shock; AFCIs and breakers protect against fire; a repeated trip means a fault, not a nuisance (ESF, CPSC).
5. **Gas is a stop-and-call trade.** Owners may shut off and ventilate (UK) or leave (US); appliance and pipework work is for a Gas Safe registered engineer (HSE); annual service; CO alarms.
6. **Tight homes need controlled ventilation.** DOE and GOV.UK agree: seal leaks, then ventilate deliberately; extractors and trickle vents matter.
7. **A seasonal schedule is the course's backbone.** UGA's spring and fall layout, ENERGY STAR's spring cooling and fall heating check-ups, the Met Office's six-monthly stop tap check.

### (b) Common misconceptions (named by a source)

- "Turning up your room thermostat" heats the home faster. It does not (EST [V]).
- A radiator cold at the bottom needs bleeding. Cold at the top is air; cold at the bottom is likely sludge (Worcester Bosch [V]).
- Wet basement walls in summer mean a leak. Often it is condensation (UMN [V]).
- Wet wipes are safe to flush: a quarter of Thames Water's survey respondents thought so (Thames Water [V]); the Fine to Flush logo caused "a blanket belief that all wipes were now safe to flush" (The Water Report [V]).
- A home survey covers the electrics. It does not (ESF [V]).
- An older consumer unit without RCDs must be replaced. "not necessarily" (ESF [V]).
- Ordinary breakers and fuses protect against arcing faults. They do not respond to early arcing (CPSC 5133 [V]).
- AFCIs and GFCIs do the same job. One is for fire, the other for shock (CPSC 5133 [V]).
- If you cannot smell gas there is no leak. Odour fade and loss of smell (SoCalGas [V]; Cadent on anosmia).
- Mould can be eradicated or should be routinely bleached. "impossible to get rid of all mold" and bleach "not recommended as a routine practice" (EPA [V]).
- A damp reading on a meter means rising damp. Rising damp "is often misdiagnosed" (GOV.UK [V]); salts affect resistance meters (JPS [V]).
- Damp and mould are caused by tenants' "lifestyle choices". The guidance calls this "totally unreasonable" (GOV.UK [V]).
- Leaky old houses ventilate themselves adequately. "Relying on air leakage for natural ventilation is not recommended" (DOE [V]).
- An AFUE figure is what you get. It excludes duct losses of up to 35% (DOE [V]).

### (c) Contested questions

1. **How common is rising damp, and does injected damp-proofing work?**
   Positions: the damp-proofing trade body says rising damp is capillary rise from the ground, found where a DPC is absent, failed or bridged, and a remedial DPC and salt-resistant replastering can cure it (PCA [V]); a 2017 doctoral study summarised in the RICS journal concludes it "is a real phenomenon that warrants treatment" and modern damp-proofing "does provide effective control" (RICS, 2020 [V]). Sceptics say "true rising damp" is a myth or rare, and injected DPCs are "a complete waste of money", with condensation and penetrating damp the usual causes (Boniface, Blackett-Ord, Howell, in AJ 2009 [V]). Common ground, signed by RICS, Historic England and the PCA in 2022: moisture in old solid walls may not be a defect; diagnosis must be proper and meter readings interpreted with salts in mind; remedies proportionate; interests declared (JPS [V]). GOV.UK: "often misdiagnosed" [V].
   Status: **contested** as to frequency and treatment efficacy; the mechanism exists (established fact); that it is overdiagnosed is now the official line in England (GOV.UK, JPS), though the trade body frames it as poor diagnosis rather than non-existence.
2. **Hot water temperature: scald risk against legionella.** CPSC: set heaters to 120°F (49°C) [V]. HSE: store hot water in cylinders at 60°C [V]. Both are established facts about different hazards; the choice is a **value/risk trade-off**, usually resolved in practice by storing hot and blending down at the tap (thermostatic mixing valves: not read, gate).
3. **Mould cleaning with bleach.** CDC: bleach solution of no more than 1 cup per gallon is acceptable [V]. EPA: biocides like bleach "not recommended as a routine practice" [V]. GOV.UK: mould products "in preference to bleach" [V]. **Contested practice** (minor); all agree fix the moisture first and never mix bleach with ammonia.
4. **Indoor humidity targets.** EPA below 60%, ideally 30 to 50% [V]; CDC no higher than 50% [V]; UMN 25% winter to 50% summer in a cold climate [V]. Not really contested: climate-dependent. Teach a range and the reason.
5. **Filter change interval.** ENERGY STAR monthly inspect, clean or change [V]; DOE heat pumps every 3 months [V]; DOE air conditioners every month or two in season [V]. **Varies by equipment and use**; teach "check monthly, follow the maker."
6. **Flushability labelling.** Water UK and the government withdrew Fine to Flush in favour of the 3Ps message (WRc, The Water Report [V]); WRc argues plastic wipes, not certified flushable ones, are the problem and is restarting testing [V] (written in 2024; see the Stage 4 note, lesson 04). **Contested** between sector bodies; for a householder the safe teaching (only the 3Ps) is not in dispute.
7. **What to do on smelling gas.** UK networks: ventilate, turn off at the meter valve if safe (not in a cellar), call 0800 111 999 (Cadent, SSE NI [V]). US utilities: leave immediately, touch nothing including the phone, call 911 and the utility from outside (Con Edison, SoCalGas, Atmos [V]). **Established fact that the official advice differs**; the lesson should teach each country's advice as given and note the shared core (no flames, no switches, get out if the smell is strong or the meter is in an enclosed space).
8. **Frozen pipes.** UK: stop tap off first, drain, thaw slowly (Met Office [V]). US: keep the faucet open so flowing water helps melt the ice, heat the pipe (Red Cross [V]). **Different established practices**; both forbid open flames.

### (d) UK vs US differences

| Topic | UK | US |
|---|---|---|
| Water shut-off name | internal stop tap, stop valve or stopcock (WaterSafe) | main shut-off valve (WSSC) |
| Outside valve | external stop tap, usually in the public footpath, water company's (CCW) | underground valve at property line, often in a meter pit; utility or master plumber operates (WSSC) |
| Pipe ownership | owner responsible from the boundary of the road where the main is laid (CCW) | varies by utility (not researched further) |
| Pressure units | bar and metres head; 0.7 bar guaranteed minimum, 1.0 bar aim (WaterSafe) | psi (no US standard read) |
| Hot water | combi (no cylinder), system (cylinder), heat-only/regular (cylinder plus loft tanks) (EST) | storage tank water heater or tankless on-demand (DOE); T&P valve on tanks |
| Heating | wet central heating: boiler and radiators, TRVs, sealed-system pressure gauge (EST, Worcester Bosch) | mostly forced-air furnaces with ducts and filters; also boilers and heat pumps (DOE) |
| Protective devices | consumer unit with main switch, MCBs, RCDs; RCD test button (ESF) | panel or load centre with breakers; GFCI (shock, about 6 mA per CPSC) and AFCI (fire) (CPSC) |
| Wiring terms | live brown, neutral blue (ESF); ring final circuits and radials (C&G 6219) | NEC-based; circuits are radial (not researched further) |
| Rules on DIY electrics | Part P (England and Wales): notifiable vs non-notifiable (IET) | state and local adoption of the NEC; permits vary (not researched) |
| Gas emergency | 0800 111 999 (GB); 0800 002 001 (NI); ventilate, ECV off if safe | leave, then 911 and utility from outside; do not touch anything |
| Gas workers | Gas Safe registration required of anyone doing gas work as a business; competence required of everyone, householders included (GSIUR reg 3; corrected at synthesis, see "The gas-work law, stated exactly") | licensed plumbers or gas fitters by state (not researched) |
| Damp vocabulary | rising, penetrating, condensation, traumatic damp; DPC (GOV.UK) | "moisture" and "mold"; grading, gutters, sump pumps, crawl spaces (EPA, UMN) |
| Temperatures | °C; thermostat 18 to 21°C (EST) | °F; water heater 120°F (CPSC); leave heat no lower than 55°F when away (Red Cross) |
| Spelling | mould | mold |

### (e) Safety-critical notes for drafters

1. **Gas:** do not teach the UK "ventilate and turn off at the meter" steps to US learners, whose utilities tell them to leave immediately and touch nothing. In both countries: no flames, no switches, do not enter a cellar or basement where the meter is if you smell gas, call from outside or from a safe place. Give both GB (0800 111 999) and NI (0800 002 001) numbers.
2. **CO:** annual service by a Gas Safe engineer (UK) or professional (US); CO alarm to EN 50291 (UK); symptoms mimic flu. Link to the First Aid course for response.
3. **Electricity:** householder work stops at the front of the consumer unit or panel: switching, resetting, testing RCDs and GFCIs, and plug-in RCDs. Working inside a panel is for an electrician; CPSC says panels "are usually electrically live, even with the main circuit breakers turned off" [V]. A breaker or RCD that trips again immediately must not be forced or held on. Water near electrics: do not touch.
4. **Water and electricity together:** after a burst pipe, do not reach through water to the consumer unit; the Met Office sentence is ambiguous (see Gates).
5. **Hot water:** 49°C tap safety against 60°C storage for legionella; do not tell learners simply to "turn the water heater down" without the legionella caveat, or to "turn it up" without the scald caveat. Adjusting an electric water heater thermostat means isolating the power first and removing panels (CPSC 5098): this may belong in the "call a professional" column for a Foundation course.
6. **T&P valves:** testing one can release scalding water and a valve that will not reseat will keep leaking. Do not teach the test without a manufacturer source.
7. **Mould:** small areas only (EPA under about 10 sq ft; GOV.UK "very small amounts"); gloves, eye protection, never mix bleach and ammonia.
8. **Frozen pipes:** no blowtorch or naked flame (Met Office, Red Cross).
9. **Heating pressure:** repressurising via a filling loop is a user task on many sealed systems, but overfilling to the red zone and a pressure that keeps dropping (a leak) or rises by more than 1 bar when hot (expansion vessel) are engineer jobs (Worcester Bosch).
10. **Drain chemicals and FOG:** this part did not research chemical drain cleaners; if a lesson mentions them it needs a source on their hazards.

### (f) Gates: claims that need a primary read before a lesson states them

1. **RCD 30 mA** rating for socket and personal protection, and ESF's "test every three months" interval: seen only in snippets. Read BS 7671 guidance, the IET's On-Site Guide or a readable ESF page.
2. **Ring final circuit and radial circuit definitions, MCB ratings (32 A ring, 20 A or 16 A radial)**: snippets only from contractors.
3. **Current BS 7671 edition and amendment**: the IET FAQ cites BS 7671:2018; check whether a later amendment or a new edition is in force at drafting time.
4. **Current NEC GFCI and AFCI locations** (e.g. NEC 210.8, 210.12, 2023 or 2026 edition): CPSC's list stops at 2005 and I read no NFPA text. Use NFPA or ESFi primary pages, and say the NEC applies as adopted by each state.
5. **Resetting a tripped circuit and isolating the faulty appliance**: the step-by-step needs an authoritative source (ESF, ESFi, a manufacturer).
6. **T&P relief valve**: what it does, test interval and method: read a water heater manufacturer's manual (e.g. A. O. Smith, Rheem) or a code-body page.
7. **Water heater flushing interval** (ASHI monthly, others annually): read a manufacturer's manual.
8. **Gas emergency control valve**: position when open and closed, typical colour, location for flats and outside meter boxes. Read Gas Safe Register's page (blocked) via another route, or a network's meter guide.
9. **Isle of Man and Channel Islands gas emergency numbers**, if the course names "UK" broadly.
10. **Ofwat guaranteed standard of 7 m head (0.7 bar)**: stated here via WaterSafe; confirm on Ofwat or legislation.gov.uk (Water Supply and Sewerage Services (Customer Service Standards) Regulations).
11. **Awaab's Law** (Hazards in Social Housing (Prescribed Requirements) (England) Regulations 2025): commencement date and scope; not in the GOV.UK guidance text I extracted.
12. **HHSRS review outcome**: GOV.UK says findings to be published; check before stating any change.
13. **Wet wipes ban**: Wales, Scotland and Northern Ireland dates; I read only the England SI's commencement.
14. **The Met Office burst-pipe sentence** on electrics ("do not touch them and switch them off at the fuse box"): confirm current advice with ESF before paraphrasing.
15. **Thermostatic mixing valves** as the resolution to scald against legionella: not read.
16. **Boiler pressure range for other makes**: the 1 to 1.5 bar figure is Worcester Bosch's; other makers' manuals not read.
17. **Collins Complete DIY Manual contents** and edition currency: publisher description came through WebFetch [T] only.
18. **Energy Saving Trust savings figures** (£ per year): tied to a price period; re-read before use or omit.
19. **US gas work licensing and US electrical permit rules**: not researched in this part.

### (g) Not read


*The part's own "Not read" list below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*

Strings for the build-time blocklist (whole words, case-sensitive). Each is a work or site named above or met in my searches that I did not read. I checked every string against the extracted text of every source in the shared raw folder (mine and the other researchers'), and removed any that matched a source someone read.

- Assessing Damp in Historic Buildings
- Digest 245
- spab.org.uk
- water.org.uk
- afcisafety.org
- Storage or Tank-Type Water Heaters
- Hazards in Social Housing
- HSG274
- 210.12
- 210.8
- This Old House
- which.co.uk
- Haynes

Named in this part but known only through a source I did read, so deliberately left off the blocklist (a lesson may mention them only as that source reports them, never as if read): Howell, The Rising Damp Myth (via AJ 2009 and RICS 2020); Leslie Sellers' 2017 thesis (via RICS 2020); BRE DG 245 and BS 5250 (named in RICS 2020); EPA's "Mold Remediation in Schools and Commercial Buildings" (named in the EPA guide); the 2004 Institute of Medicine report and the 2009 WHO dampness and mould guidelines (named by CDC and GOV.UK); PAS 2035 (named by GOV.UK); the Uniform Plumbing Code (not read); Gas Safe Register's own pages, Ofwat's pages, NFPA and PHMSA pages (blocked for me; other researchers' files show some were read by them).

Read at catalogue or table-of-contents level only (the books themselves not read; name them as recommended reading, but do not attribute any content beyond the chapter headings recorded above):
- Reader's Digest Complete Do-It-Yourself Manual (all editions)
- Black & Decker The Complete Photo Guide to Home Repair; The Book of Home How-To
- Collins Complete DIY Manual (description via WebFetch [T] only)

---

## Part B: tools, working at height, common repairs, decorating, pests, seasonal maintenance, hiring a tradesperson

Researcher B. Sources read 2026-09-25. Extraction tools: curl with pandoc or a small HTML-to-text script, pdftotext for PDFs, the PubMed E-utilities API, the legislation.gov.uk and eCFR renderers, and Internet Archive captures where a site returned 403 to curl (capture IDs given). Nothing below comes from WebFetch, so there are no [T] items. Where a fact was seen only in a search-engine summary it is marked "Snippet only" and must not be stated as a finding.

A caution on the shared scratch directory: the helper scripts in `hr/` were rewritten by another researcher partway through this session, so from the pest section onward my extracts sit in `hr/B/raw/`. Earlier ones are in `hr/raw/` and may have been overwritten since; the quotations below were checked at the time of reading.

---

### 1. Tools and safe use

#### OSHA, *Hand and Power Tools*, OSHA 3080, 2002 (Revised)
https://www.osha.gov/sites/default/files/publications/osha3080.pdf
Read: the whole booklet, pdftotext; general precautions and the sections on guards, electric tools and abrasive wheels read closely. Dated "2002 (Revised)" on the cover.
Good for: the standard list of power tool precautions. Written for employers and employees under 29 CFR 1910 and 1926, so it describes duties at work, but the precautions carry straight over to the home.
- Hand tools: most harm comes from "misuse and improper maintenance". Its examples: a chisel used as a screwdriver can shatter, a loose hammer head can fly off, sprung wrench jaws slip, and mushroomed chisel heads can splinter.
- Power tool precautions, all [V]: "Never carry a tool by the cord or hose."; "Disconnect tools when not using them, before servicing and cleaning them, and when changing accessories such as blades, bits, and cutters."; "Secure work with clamps or a vise, freeing both hands to operate the tool."; "Avoid accidental starting. Do not hold fingers on the switch button while carrying a plugged-in tool." Also: dress so loose clothing, ties and jewellery cannot catch; keep bystanders at a distance; tag damaged tools "Do Not Use".
- Guards: "Safety guards must never be removed when a tool is being used." [V]
- Electric tools should be grounded, double-insulated or low-voltage. Eye and face protection are required with grinders and similar tools.
- Dull tools: "dull tools can cause more hazards than sharp ones" [V].

#### London Fire Brigade, "Batteries and chargers" and "E-bikes and e-scooters: fire safety advice"
https://www.london-fire.gov.uk/safety/the-home/electrical-items/batteries-and-chargers/ and https://www.london-fire.gov.uk/safety/lithium-batteries/
Read: the full text of both pages (curl). No date shown.
Good for: lithium-ion charging advice in the UK. The advice is written about phones, laptops and e-bikes, not cordless tool packs, though the principles are the same.
- The e-bike page: "On average there’s a fire from a lithium-ion battery in an e-bike or e-scooter every two days in London." [V] Many of these fires start while a battery is charging at home.
- Batteries are a fire risk "when over-charged, short-circuited, submerged in water or if they are damaged" [V].
- Charging tips: use the charger supplied with the device; if you replace it, buy a branded, genuine one from a trusted seller; avoid charging or storing batteries at very high or very low temperatures; protect them from crushing, puncture and water; "Don’t leave items continuously on charge after the charge cycle is complete" [V]; never cover a charger while it is working.
- If a battery swells: stop charging at once, do not open the casing, and contact the manufacturer.

#### Office for Product Safety and Standards, "Statutory guidelines on lithium-ion battery safety for e-bikes" (GOV.UK)
https://www.gov.uk/guidance/statutory-guidelines-on-lithium-ion-battery-safety-for-e-bikes
Read: only the title, description and date, through the GOV.UK content API. Published 2024-12-12. The description says it is "Guidance for businesses." [V]
Good for: showing that the UK regulator's formal lithium-ion document is aimed at producers, not households. Consumer advice should come from LFB.

#### HSE, "All you need to know about disposable dust masks"
https://www.hse.gov.uk/agriculture/dustmasks.htm
Read: full text (curl). No date is shown. The page points to "e-COSHH essentials which will come on line in autumn 2005", so the text is about twenty years old. It was written for farm work.
Good for: FFP grades explained in plain terms, and the point about fit.
- FFP1, FFP2 and FFP3 "can reduce the amount of dust you breathe by factors of 4, 10 and 20 respectively" [V]. These are the grades marked to EN 149:2001.
- Fit: a tight-fitting respirator "is useless if you have a beard or thick beard stubble" [V]. Do a pre-use check each time you put it on.
- These masks filter dust only. They "must not be used where there is an oxygen-deficient atmosphere or harmful gases and vapours" [V]. So they give no protection against solvent vapour from paint strippers.
- "Nuisance dust masks" or comfort masks that carry no standard mark and often have one strap are not respirators.

#### NIOSH, "Find Filtering Facepiece Respirators on the Certified Equipment List"
https://www.cdc.gov/niosh/ppe/niosh-approved-respirators/ffr-cel.html (Wayback capture 20260923185140)
Read: full page.
Good for: the US counterpart to the FFP grades. An N95 "Filters at least 95% of airborne particles. Not resistant to oil." [V] Each type of respirator has an assigned protection factor, set out in Table 1 of the OSHA respiratory protection standard. I did not read that table (see Gates).

#### Bosch DIY, "How to drill without any nasty surprises"
https://www.bosch-diy.com/gb/en/all-about-diy/drill-more-safely
Read: full text (curl). This is manufacturer guidance for its own detectors. I found no official UK or US consumer page on cable detectors; Electrical Safety First's advice on this was seen only as a social media post in search results.
Good for: how cable and pipe detectors work, and where they fall short. Take off rings and watches. Keep the whole device flat on the wall. Pass over the same spot more than once. "A cable must have a current in order to be picked up by the device." [V] Switch on something on that circuit while scanning, then turn the power off completely before drilling.
Implication for drafters: a detector that finds nothing does not prove there is no cable. Where cables are likely to run is a wiring question for the electricity part of the course.

---

### 2. Ladders and working at height (the priority)

#### HSE and the Ladder Association, *LA455 Safe Use of Ladders and Stepladders: A brief guide* (replaces INDG455)
Landing page: https://ladderassociation.org.uk/la455/. PDF: https://ladderassociation.org.uk/wp-content/uploads/2026/09/LA455-Safe-Use-of-Ladders-and-Stepladders-A-brief-guide-Ver-1-Rev-1-0926.pdf
Read: the landing page in full, and the PDF through pdftotext, with the scope, leaning ladder, stepladder and securing sections read closely. The landing page says "LA455 – Version 1, Rev 1, 09/26" and "Page last updated 02 September 2026".
Answer to the brief's question: **INDG455 has no current URL.** hse.gov.uk/pubns/indg455.pdf returns 404. The landing page says: "Released in July 2021, the guidance replaces the HSE Guidance Document INDG455." [V] The guide was produced jointly by the Ladder Association and HSE, with the text under Crown copyright.
Scope: "This guidance is for employers on the simple, sensible precautions they should take to keep people safe when using portable leaning ladders and stepladders in the workplace." [V] (PDF p. 2). Lessons can use it as the best available standard of practice, but must say that it is written for workplaces.

#### HSE, "Safe use of ladders and stepladders" (web guide, 8 pages)
https://www.hse.gov.uk/work-at-height/ladders/index.htm and its sub-pages
Read: pages 1 to 6 in full through curl, with lists extracted: overview, when to use, pre-use check, types of ladder, where to use, securing. I did not read page 7 (inspection) or page 8 (product standards).
What it establishes, all [V] unless marked:
- "Ladders and stepladders are not banned under health and safety law." They suit "low-risk, short-duration tasks".
- The 30-minute guide: "if your task would require staying up a leaning ladder or stepladder for more than 30 minutes at a time, it is recommended you use alternative equipment." Also: "Short duration is not the deciding factor in establishing whether use of a ladder is acceptable – you must have first considered risk."
- The 1-in-4 rule: "you should use the 1-in-4 rule. This is where the ladder should be one space or unit of measurement out for every four spaces or units up (a 75° angle)". This is the same rule as the brief's "1 out, 4 up".
- Overreaching: "make sure your belt buckle (or navel) stays within the stiles".
- Height: "Don’t work off the top three rungs. Try to make sure that the ladder extends at least 1 metre or three rungs above where you are working".
- Three points of contact "when climbing and wherever possible at the work position". On a stepladder this means "two feet and one hand, or when both hands need to be free for a brief period, two feet and the body supported by the stepladder".
- Power lines: "Don’t work within 6 m horizontally of any overhead power line, unless it has been made dead or it is protected with insulation." Use a non-conductive ladder for electrical work.
- The top rest must be strong: do not rest a ladder against glazing or plastic gutters. Do not stand it on movable objects, and level it with proper devices, not "ad-hoc packing such as bricks, blocks, timbers".
- Securing, in order of preference: tie both stiles; use a stability device; wedge; "If you cannot achieve any of these options, foot the ladder. Footing is the last resort".
- Stepladders: all four feet on the ground; locks engaged; face the work where possible; avoid side-loading, such as drilling side-on into brick; do not work from the top three steps unless there is a suitable handhold. HSE lists hanging wallpaper and fitting a smoke detector on a ceiling as tasks where losing your handhold has to be justified.
- Pre-use check: stiles, feet, rungs, locking mechanisms, platform, treads. Check the feet again when moving from soft ground to hard ground.
- Telescopic ladders: check that each section locks, and watch for fingers trapped between sections as they close.

#### Work at Height Regulations 2005 (SI 2005/735), regulation 3 (Application)
https://www.legislation.gov.uk/uksi/2005/735/regulation/3
Read: regulation 3 in full on legislation.gov.uk, revised version. Extent E+W+S (Great Britain).
What it establishes: the Regulations place duties on an employer "in relation to work" by an employee or a person under the employer's control, on a "relevant self-employed person", and on other persons in relation to work by people under their control (regs 3(2) and 3(3)). They contain no duty on a householder doing their own jobs at home. **Say so in the lesson**: the law's ladder rules bind people at work, and a householder follows them as good practice, not as a legal duty. Reg 3(3)(b) might reach a householder who controls someone else's work; I have not settled that (see Gates).

#### OSHA, 29 CFR 1926.1053 Ladders (construction)
eCFR, current: https://www.ecfr.gov/current/title-29/part-1926/section-1926.1053
Read: paragraph (b) "Use", clauses (1) to (17), in full from the eCFR renderer.
What it establishes, all [V]:
- (b)(1): when a portable ladder is used to reach an upper landing, its side rails "shall extend at least 3 feet (.9 m) above the upper landing surface". If the ladder is too short, secure it at the top and provide a grab rail.
- (b)(5)(i): a non-self-supporting ladder is set so that the horizontal distance from the top support to the foot is "approximately one-quarter of the working length of the ladder". This is the US 4-to-1 rule.
- (b)(13): "The top or top step of a stepladder shall not be used as a step."
- (b)(11): ladders "shall not be moved, shifted, or extended while occupied."
- (b)(12): non-conductive side rails near exposed energised equipment.
- (b)(14): do not climb the rear cross-bracing of a stepladder unless it is designed for it.
This is a workplace rule, like WAHR. OSHA does not regulate householders.

#### OSHA QuickCard, "Portable Ladder Safety"
https://www.osha.gov/sites/default/files/publications/portable_ladder_qc.pdf
Read: full two-sided card, pdftotext. Some diagram text was garbled.
Establishes: 3-point contact ("two hands and a foot, or two feet and a hand" [V]); face the ladder and keep your body near the middle of the step; do not use a stepladder as a single ladder or partly closed; "not stand on the three top rungs of a straight, single or extension ladder" (a fragment rejoined across a line break, so quote it only as a paraphrase); set the base "a quarter of the working length of the ladder from the wall" [V]; extend 3 feet above the point of support; look for overhead power lines before handling a ladder; avoid metal ladders near power.

#### D'Souza AL, Smith GA, Trifiletti LB. "Ladder-related injuries treated in emergency departments in the United States, 1990-2005." *Am J Prev Med* 2007;32(5):413-8. doi:10.1016/j.amepre.2007.01.012. PMID 17478268
Read: abstract only (PubMed efetch).
What it establishes: from NEISS, an estimated 2,177,888 people were treated in US emergency departments for ladder injuries over 16 years, "an average of 136,118 cases annually" [V], or 49.5 per 100,000. 76.5% were male. Fractures were the most common injury (31.5%). About 10% were admitted or transferred, "approximately twice that of consumer product-related injuries overall" [V]. Injuries rose by more than 50% over the period. Of cases where the location was recorded, "97.3% occurred in non-occupational settings, such as homes and farms" [V]. This is the key figure for a home course: most ladder injuries happen at home, not at work.

#### Barbat A, Partiali B, Oska S, Folbe A. "Head, Face, and Neck Fractures Secondary to Ladder-Related Injuries Treated in United States Emergency Departments in 2009-2018." *J Emerg Med* 2020;59(2):186-192. PMID 32561108
Read: abstract only (PubMed).
Establishes: a weighted national estimate of 20,450 ladder-related head, face and neck fractures. Mean age 53. "the majority of cases occurred in home settings" [V]. About 25% of patients were over 65. Admission rates were much higher than for ladder injuries overall.

#### Wakim J et al. "Etiologies, incidence, and demographics of lumbar vertebral fractures in U.S. emergency departments." *J Spine Surg* 2022;8(1):21-28. PMID 35441096
Read: abstract only.
Establishes: across 2010 to 2018, ladders were the third most common cause of lumbar fractures seen in US emergency departments (an estimated 31,053), after floors and stairs. Declared conflicts: one author has industry consulting fees and stock holdings, none related to ladders. Supporting evidence only.

#### Socias CM et al. (NIOSH), "Occupational Ladder Fall Injuries: United States, 2011." *MMWR* 2014;63(16)
https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6316a2.htm (Wayback capture 20260907020506; cdc.gov returns 403 to curl)
Read: full text. An erratum exists and I did not read it.
Establishes: "43% of fatal falls in the last decade have involved a ladder" [V]. The figure covers all falls, not just falls at work. In 2011, work-related ladder falls caused 113 deaths and an estimated 34,000 emergency department visits. The ED admission rate was 14%. "nearly 90% were from heights <16 feet (<4.9 m)" [V], and falls of 6 to 10 feet were the most common. Head injuries were involved in about half of the fatal falls. Useful for teaching that low falls are dangerous too.

#### US CPSC, *Consumer Product-Related Injuries and Deaths in the United States: Estimated Injuries Occurring in 2020* (Schroeder, September 2021)
https://www.cpsc.gov/s3fs-public/ConsumerProductRelatedInjuriesandDeathsintheUnitedStates.pdf
Read: the whole document through pdftotext, with Table F read closely. It is a staff analysis that the Commission has not reviewed.
Establishes: "Ladders, stools" accounted for an estimated 227,000 emergency department treated injuries in 2020 and 633,000 medically attended injuries (Table F). This is the most recent CPSC ladder figure I could read. The cpsc.gov ladder safety centre page returned 403 and has no Wayback capture.

#### US CPSC, *Hazard Screening Report: Injuries to Persons 65 Years of Age and Older* (NEISS data 1997 to 2002)
https://www.cpsc.gov/s3fs-public/hazard_older.pdf
Read: the full text, with the ladder rows read closely. The data are old.
Establishes: "Persons 65 and older account for half (79) of all ladder deaths." [V] Older people made up 16% of ED-treated ladder injuries but 39% of those admitted to hospital. Use it only with its date.

#### RoSPA, "Garden safety" and "Neil's story" (case study)
https://www.rospa.com/home-safety/garden-safety ; https://www.rospa.com/case-studies/neil
Read: full text of both (curl).
Good for: the only DIY-focused UK ladder advice I read. Use a 1:4 ratio or 75° angle, keep three points of contact, don't overreach, and "Consider having another person present, especially when using leaning ladders." [V] The case study describes a hedge-cutting fall that caused a punctured lung and nine broken ribs; the man says it "should have been a two-person job".
**UK ladder injury figures:** I could not find a primary source. Search summaries attribute to RoSPA figures of about 6,000 hospital admissions and about 48,000 A&E attendances a year from ladder accidents at home. These are Snippet only, from commercial training and ladder retail sites. Neither figure appears on any RoSPA page I read, and both may come from the Home Accident Surveillance System, which ended in 2002. Do not state them (see Gates).

#### American Ladder Institute
Not read. americanladderinstitute.org returned 403, and a Wayback capture of its Ladder Safety Month page was a 404. Search summaries say ALI sponsors National Ladder Safety Month in March (Snippet only).

---

### 3. Common repairs

#### US EPA WaterSense, "Fix a Leak Week" and "Statistics and Facts"
https://www.epa.gov/watersense/fix-leak-week (last updated March 13, 2026); https://www.epa.gov/watersense/statistics-and-facts (last updated March 11, 2026)
Read: full text of both (curl).
Establishes:
- Toilet dye test: "Identify toilet leaks by placing a few drops of food coloring in the toilet tank. If any color shows up in the bowl after 10 minutes, you have a leak." [V]
- US flapper: "the flapper should be checked periodically and replaced at least every five years" [V]. A worn flapper can make a toilet refill by itself or leak silently.
- Taps: "Old and worn faucet washers and gaskets frequently cause leaks in faucets. A leaky faucet that drips at the rate of one drip per second can waste more than 3,000 gallons per year." [V] Tip: "Don't forget to turn off the water line before you start!" [V]
- Showerheads: re-seat with thread-seal tape (PTFE, "teflon tape"). Call a plumber for valve leaks.
- **The two EPA pages disagree.** One says household leaks nationally waste "nearly 1 trillion gallons" and the average household loses "more than 9,300 gallons". The other says "approximately nearly 900 billion gallons" and "9,400 gallons". Use rounded wording, such as "nearly a trillion gallons", "about 9,000 gallons", or cite one page by name.

#### Southern Water, "How to fix a dripping tap"
https://www.southernwater.co.uk/help-and-support/how-to-fix-a-dripping-tap/ (Wayback capture 20260515022127; the live site returned 403)
Read: full text.
Establishes: a slow drip can waste "up to 10,000 litres per year" [V]. Most drips come from a worn washer. The sequence for a traditional washer (compression) tap: turn off the water at the stop tap; unscrew the cover; loosen the hexagon nut with a spanner and lift out the tap top; lay the parts out in order; lift out the jumper plate, undo the nut and replace the washer; do not overtighten when putting it back. If that fails, use a plumber "qualified to meet the regulations for working safely with drinking water" [V].

#### Bristan, *Installation Instructions & User Guide* (tap, product file 576945)
https://www.bristan.com/product-files/576945/fitting-instructions.pdf
Read: pdftotext of the whole leaflet. The layout is heavily columnar, so read the extract for meaning only and quote nothing from it.
Good for: modern ceramic-disc (quarter-turn) taps. The maintenance panel shows turning off the isolation valve, removing the shroud, taking out the cartridge and fitting a replacement. The troubleshooting table puts continued dripping down to the "ceramic disc valves/cartridge". The main difference from a washer tap: the fix is a new cartridge, usually specific to that make and model, not a new washer. Isolation valves "must be fitted to the inlet water supplies to ensure ease of future maintenance" is the gist of the fitting text; it is garbled, so do not quote it.

**Stage 4 note, lesson 03 (2026-09-25): the entry above misreads the maintenance panel.** Re-read
on the live PDF and as the rendered page image (pdftoppm, page 2), which resolves the columns. The
panel is headed "Maintenance - Cleaning/Replacing Cartridge" [V], and its six steps are: 1 "IMPORTANT
Isolate the water supply before starting!" [V], with the drawing showing the valve on the flexible
pipe, and "Unscrew and loosen grub screw to remove handle." [V] (2.5 mm hex key); 2 "Remove shroud
and retaining nut. Remove cartridge." [V]; 3 "Place cartridge in a suitable solution and soak until
fully de-scaled." [V]; 4 "Replace cartridge, retaining nut and shroud." [V]; 5 "Replace the handle."
[V]; 6 "Turn on the mains water supply, letting the water flow for a few minutes to flush through
the system." [V] Step 4's "Replace" is refitting, since it covers the nut and shroud too. **The panel
shows the cartridge cleaned and descaled and put back, not a new cartridge fitted.** The leaflet's
only word on new parts is its Spare Parts panel: visit bristan.com "and search for your product" [V].
**"Usually specific to that make and model" is this file's gloss, not the leaflet's; do not cite it
to Bristan.** Nor does the leaflet say "mixer" or "kitchen": it shows a single-lever sink tap, product
code K SNKSL EF C (D2), and its panels show a retaining nut under the shroud, so a nut alone does not
tell a washer tap from a ceramic one. Troubleshooting, "Water dripping from taps": "This is normal for
a short time after using the taps." [V], cause "This is caused by residual water tension, the build up
of water in the tap body." [V]; and "If water continues to drip, possibly due to the ceramic disc
valves/cartridge" [V], remedy "Refer to the Maintenance section" [V]. Fitting text, read clean on the
rendered page: "Isolation valves must be fitted to the inlet water supplies to ensure ease of future
maintenance." [V] It also recommends servicing the tap at least once a year.

#### United Utilities, "Find leaks inside your home or business"
https://www.unitedutilities.com/help-and-support/your-water-supply/your-pipes/leakage/inside-leaks/
Read: full text.
Establishes (UK toilets): "Nearly 80% of all leaks reported to us last year were leaky loos!" [V] It blames "modern push button toilet cisterns" and says a faulty cistern can cost "as much as £400 a year" [V]. On an older cistern, a dripping overflow pipe through the outside wall is the sign of a fault. It points to WaterSafe-approved plumbers and a leak allowance for metered customers who fix a leak within six weeks.
**Gap:** I read no source describing the parts of a UK cistern (siphon, drop-valve flush valve, float or fill valve). See Gates.

#### Electrical Safety First, "Plugs and fuses usage and safety"
https://www.electricalsafetyfirst.org.uk/guidance/safety-around-the-home/plugs-and-fuses/
Read: full text (curl).
Establishes (UK plug fuses):
- The fuse "will 'blow' if an electrical appliance or extension lead draws too much current" [V].
- "If you have to replace a fuse, replace it only with another of the same rating." [V] Plugs usually take 3 A or 13 A fuses. Its 3 A examples are a table lamp, television and computer. Its 13 A examples include a washing machine, fridge, power drill, kettle and iron. Appliances of 700 to 3000 W take 13 A. 5 A fuses survive in some older equipment.
- Fuses to BS 1362 and plugs to BS 1363 carry the standard's number. Wiring colours: brown is live, blue is neutral, green and yellow is earth. Only open a plug once it is out of the socket.
- Owner-occupied homes should have the wiring inspected and tested "at least every 10 years" [V]; tenanted properties every 5 years or at each change of occupier.
- The page also says test smoke alarms at least monthly and replace them every ten years.
- Snippet only: a search summary of an older ESF page listed fridges and power drills under 3 A. The page I read puts both under 13 A. Teach "use the rating the manufacturer specifies", not a list of appliances.

#### Electrical Safety First, "If my RCD keeps 'tripping', what action is required?"
https://www.electricalsafetyfirst.org.uk/guidance/your-questions-answered/questions/if-my-rcd-keeps-tripping-what-action-is-required/
Read: full answer.
Establishes: a repeatedly tripping RCD probably means a fault "either with a particular appliance or the wiring itself" [V], and a registered electrician should investigate. The method often described, unplugging appliances one at a time and resetting, was seen only in a search summary (Snippet only). Leave the detail to the electricity part.

#### Worcester Bosch, "How to bleed a radiator"; Vaillant, "How to bleed a radiator"
https://www.worcester-bosch.co.uk/support/troubleshooting/faqs/all-faqs/how-to-bleed-a-radiator ; https://www.vaillant.co.uk/advice/heating-tips/home-advice/how-to-bleed-a-radiator/
Read: full text of both (curl). Both are manufacturer pages.
Establishes: a radiator cold at the top holds air. One cold at the bottom may hold sludge, which a bleed will not fix (Worcester). Turn the heating off and let the radiators cool; Vaillant says about an hour, or two to be cautious. Put a cloth under the valve, turn the key anticlockwise until it hisses, and close it when water runs steadily. Vaillant suggests a quarter to half a turn and warns against overtightening when closing. Then check the boiler pressure: Vaillant says "The boiler should read between 1 to 1.5 bar of pressure when the central heating is cold." [V] Top it up following the boiler's instructions. Vaillant adds that radiators needing repeated bleeding point to an underlying fault for the installer to find.
Minor difference: Worcester says to run the heating first so you can find the cold radiators, then turn it off before bleeding.

#### American Red Cross, "Preventing & Thawing Frozen Pipes"
https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm/frozen-pipes.html
Read: full text. No date shown.
Establishes (US): the pipes most at risk are outdoor hose bibs, pipes in unheated basements, crawl spaces, attics and garages, and pipes on uninsulated exterior walls. To prevent freezing: close the inside valve to the hose bib and leave the outside tap open to drain; insulate; open cabinet doors under sinks; let a cold tap drip in severe cold; keep the thermostat steady day and night; if you are away, keep the heat "no lower than 55° F" [V]. To thaw: keep the tap open and warm the pipe with a heating pad, hair dryer, space heater or hot towels. "Do not use a blowtorch, kerosene or propane heater, charcoal stove, or other open flame device." [V] Call a licensed plumber if you cannot find or reach the frozen section.

#### CCW (Consumer Council for Water), "Winter advice"
https://www.ccw.org.uk/advice-and-support/households/winter-advice/
Read: full text.
Establishes (UK): find your stop tap, lag exposed pipes, fit covers on outside taps, and insulate tanks and cisterns. Signs of a frozen pipe include no water or only a trickle, frost on the pipe, and a boiler that will not fire or gurgles. To thaw: "Turn off your water supply at the stop tap" [V], switch off the immersion heater and central heating, leave the cold tap open, and warm the pipe slowly with a hair dryer or hot water bottle. "Never use a naked flame or blow torch." [V] For a burst: stop tap off, heating off, open the taps to drain the system, call a plumber, and photograph the damage for the insurer. Water companies in England and Wales run free Priority Services Registers.

#### Water company advice on blockages: Thames Water, "Blockages and blocked drains"
https://www.thameswater.co.uk/help/water-and-waste-help/blockages
Read: full text.
Establishes: the "three Ps" (pee, poo and toilet paper) are the only things to flush. Fat, oil and food scraps set solid in pipes. Wet wipes block pipes, "even the ones labelled ‘flushable’" [V]. A blockage inside the property is the owner's to clear. The water company clears public sewers and aims to attend within 48 hours, or 72 when exceptionally busy. Leave cooking fat to cool and put it in the bin.
**Gap:** I read no official or manufacturer source on plunging a sink or taking off a trap (U-bend). Search summaries mentioned coat hangers and bicarbonate of soda with vinegar (Snippet only). Drain chemical safety was not researched. See Gates.

#### Not researched in this part
A sticking door, filling holes and cracks (Dulux and Polycell cover filling, below), and silicone sealant around a bath. UGA's checklist says to scrape out damaged caulk and re-caulk (see §6). I read no manufacturer instructions for a sealant. See Gates.

---

### 4. Decorating basics

#### US EPA, "Volatile Organic Compounds' Impact on Indoor Air Quality"
https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality (last updated June 23, 2026)
Read: full text.
Establishes: "Concentrations of many VOCs are consistently higher indoors (up to ten times higher) than outdoors." [V] Paints, varnishes and paint strippers are named sources. During and soon after paint stripping, "levels may be 1,000 times background outdoor levels" [V]. Short-term effects include headaches, nausea and loss of coordination. Advice: increase ventilation; if a label says to use in a well-ventilated area, work outdoors or open the windows; buy only as much paint as you need; do not bin leftovers but use household hazardous waste collection. Methylene chloride strippers turn into carbon monoxide in the body; use them outdoors where possible.

#### The Volatile Organic Compounds in Paints, Varnishes and Vehicle Refinishing Products Regulations 2012 (SI 2012/1715)
https://www.legislation.gov.uk/uksi/2012/1715 (regs 3, 4, 5 and Schedule 2)
Read: regs 3 to 5 in the "as made" version and Schedule 2 on legislation.gov.uk. I did not check the revised version, and post-Brexit amendments are likely (the scope in reg 3(2) refers to the EU customs territory).
Establishes: a relevant product may not be placed on the market unless its VOC content is within the Schedule 2 limit and it is labelled under reg 5 (reg 4(1)). The label must show "the sub-category of the product and the relevant VOC limit values, measured in g/l" and "the maximum content of VOC in g/l of the product in a ready to use condition" (reg 5(1)) [V]. Schedule 2: interior matt walls and ceilings (gloss ≤25 at 60°), 30 g/l for both water-borne and solvent-borne.
Implication: every UK tin of decorative paint carries its VOC figure, and a lesson can teach students to read it.

#### Dulux, "Preparing Walls For Painting" and "Dr Dulux: How To Paint New Plaster"
https://www.dulux.co.uk/en/articles/preparation-and-tools ; https://www.dulux.co.uk/en/expert-help/dr-dulux-painting-on-new-plaster
Read: full text of both. Manufacturer pages with product promotion.
Establishes: matt emulsion hides imperfections, while satin, silk, eggshell and gloss reflect more light. Synthetic brushes suit water-based paint. Choose a filler for the job and a flexible one for gaps at skirtings and frames. Set aside time for preparation. New plaster must dry first: "As a rule of thumb, plaster takes up to 4 weeks to dry completely." [V] Then apply a mist coat of thinned white emulsion: "Ten parts paint to one part water should work." [V]
Caution: a search summary of another Dulux page gave 2 to 3 weeks for a skim and 6 months for full plaster (Snippet only). Drying times vary, so tell students to follow the plasterer's and the paint maker's advice.
Terminology: "emulsion" in the UK is a water-based wall paint, broadly what US retail calls "latex" paint. I read no US source that defines latex paint.

#### Sanding old paint
I read nothing in this part on sanding. Lead paint belongs to another part. Drafters should note that HSE's dust mask page (§1) covers only dust, not vapours. See Gates.

#### Wallpaper
Not researched. The only source I read that mentions it is HSE's stepladder guidance, which lists hanging wallpaper as a task where losing your handhold must be justified.

---

### 5. Pests

#### CDC, "Controlling Wild Rodent Infestations" and "Seal Up", "Trap Up", "Clean Up"
https://www.cdc.gov/healthy-pets/rodent-control/index.html (Wayback 20260913133434), seal-up.html (20260917020302), trap-up.html (20260806235217), clean-up.html (20260918085500). All four pages are dated April 8, 2024.
Read: the full text of all four.
Establishes:
- Signs: droppings ("pointed at one end and often contain hair" [V]) and gnaw marks. Clean the area, then look again: fresh droppings mean rodents are still active.
- Seal up: "Mice can fit through a hole the width of a pencil (1/4 inch or 6 millimeters in diameter)." [V] Pack small holes with steel wool held in with caulk or spray foam. Use lath screen, cement, hardware cloth or metal sheeting for large holes. Store food in thick plastic, metal or glass. Keep compost bins and woodpiles 100 feet from the house.
- Trap up: "Traditional snap traps are recommended". Use poison or bait stations only for infestations that persist. "Do not use glue traps and live traps." [V] Glue and live traps frighten rodents into urinating, which raises the risk of infection. Set traps in a T against the wall. Pre-bait for rats, which are wary of new objects. If a week passes with no catches and no new signs, the rodents are gone.
- Clean up (the hantavirus precautions): "Don't vacuum or sweep rodent urine, droppings, or nesting materials." [V] Open doors and windows for 30 minutes before cleaning and leave the area while it airs. Wear rubber or plastic gloves. Spray with disinfectant or bleach solution ("1 part bleach to 9 parts water" [V]) and leave it to soak for 5 minutes. Bag dead rodents twice. The disease list includes hantavirus, leptospirosis and salmonellosis.
Note: hantavirus pulmonary syndrome is a US and Americas concern. I read nothing on UK hantavirus risk.

#### US EPA, "Restrictions on Rodenticide Products"
https://www.epa.gov/rodenticides/restrictions-rodenticide-products (last updated September 8, 2026)
Read: full text.
Establishes the 2008 risk mitigation decision as it applies today: "second-generation anticoagulant rodenticides no longer are registered for use in products geared toward consumers" [V]. They are sold only to professionals. "Pelleted baits no longer are permitted to be used in rodenticide products targeted for consumer markets." [V] Consumer products are ready-to-use bait stations (bromethalin, chlorophacinone or diphacinone) labelled for indoor use or for use within 50 feet of buildings, depending on tamper-resistance testing against children and dogs. Anticoagulants kill in four days to two weeks. The 2008 decision document itself was not read.

#### HSE, "Rodenticides" (biocides)
https://www.hse.gov.uk/biocides/using/rodenticides.htm
Read: full text.
Establishes (GB and NI): regulators' risk assessments show that anticoagulants "present a higher risk to people and non-target animals than is normally acceptable for authorisation". They are authorised only because society needs them, and with controls. The public should consider other control methods before turning to anticoagulants. Amateur products may be restricted in strength and to use "only within a bait box" [V]. Professional use must follow a UK rodenticide stewardship regime built on IPM principles. HSE chairs the Government Oversight Group.

#### CRRU UK, "Stewardship" (thinkwildlife.org)
https://www.thinkwildlife.org/stewardship-regime/
Read: full text (short).
Establishes: CRRU runs the industry-led stewardship regime. Search summaries give amateur pack-size caps (300 g of block bait, 150 g of loose bait) and a strength cap under 30 ppm (Snippet only; neither appears on the page I read).

#### US EPA, "Integrated Pest Management (IPM) Principles"
https://www.epa.gov/safepestcontrol/integrated-pest-management-ipm-principles (the old /ipm/introduction URL redirects here; last updated July 22, 2026)
Read: full text.
Establishes the four tiers: set action thresholds ("Sighting a single pest does not always mean control is needed." [V]); monitor and identify; prevent; then control, with "Effective, less risky pest controls are chosen first". "Broadcast spraying of non-specific pesticides is a last resort." [V] It is written mainly for growers but says it applies to the home.

#### US EPA bed bug pages: "Top Ten Tips", "Bed Bug Myths", "Safety Issues in Controlling Bed Bugs"
https://www.epa.gov/bedbugs/top-ten-tips-prevent-or-control-bed-bugs (updated August 19, 2026); /bed-bug-myths (July 17, 2026); /safety-issues-controlling-bed-bugs (September 8, 2026)
Read: full text of all three.
Establishes: confirm it is bed bugs before treating, and an extension agent can identify them. Don't throw everything out. Don't reach first for the spray can. Reduce clutter. Mattress encasements, left on for a year. Wash and heat-dry bedding. Home freezing is unreliable. Turning up the thermostat will not work: "Bed bugs die when their body temperatures reaches 45°C (113°F)." [V] Vacuum thoroughly and bin the bag sealed and outdoors. Slash or destroy any infested mattress you throw away. Use a professional who follows IPM. "Never use a pesticide indoors that is intended for outdoor use." [V] Myths page: bed bugs are a public health pest, but "There have been no cases or studies that indicate bed bugs transmit diseases between humans." [V] A lit room will not deter them, and pesticide alone will not clear them because of resistance.

#### UC Statewide IPM Program, "Cockroaches" (Pest Notes, home and landscape)
https://ipm.ucanr.edu/home-and-landscape/cockroaches/
Read: the whole page (about 5,500 words), with control sections read closely. Revision date not captured.
Establishes: "Good sanitation and exclusion are important for effective control; pesticides alone will not solve cockroach problems. When using insecticides, baits provide better control than sprays." [V] Avoid foggers, bombs and aerosol sprays, which "may repel and disperse cockroaches" [V]. Cockroach allergens are risk factors for childhood asthma. Use a HEPA vacuum. Gel baits may take 7 days or more to show results.

#### DeVries ZC, Santangelo RG, Crissman J, Mick R, Schal C. "Exposure risks and ineffectiveness of total release foggers (TRFs) used for cockroach control in residential settings." *BMC Public Health* 2019;19:96. PMID 30686267
Read: abstract only.
Establishes: in 20 infested homes, "TRFs failed to reduce cockroach populations, whereas similarly priced gel baits caused significant declines" [V] (10 homes had baits). After fogging, pesticide residues on kitchen surfaces were 603 times baseline on average, with a median of 85 times.

#### DeVries ZC et al. "Pervasive Resistance to Pyrethroids in German Cockroaches ... Related to Lack of Efficacy of Total Release Foggers." *J Econ Entomol* 2019;112(5):2295-2301. PMID 31121031
Read: abstract only.
Establishes the mechanism: cockroaches collected from apartments had 202-fold resistance to cypermethrin, and more than 96% carried the kdr mutation. Foggers killed susceptible sentinel insects but not the apartment ones.

#### US EPA, "Termites: How to Identify and Control Them"
https://www.epa.gov/safepestcontrol/termites-how-identify-and-control-them (last updated October 21, 2025)
Read: full text.
Establishes: termites cause "billions of dollars in structural damage" a year [V]. The native subterranean termite is the most common in the US. Signs: hollow-sounding wood when probed with a screwdriver, and swarms, which can be confused with ant swarms. Prevention: keep soil at the foundation dry by maintaining gutters and grading, seal cracks where utilities pass through walls, keep vents clear, don't stack firewood against the house, and keep plants off exposed wood. Soil barrier treatments done badly can contaminate the home and wells, so "it is important to hire a pest management professional who is licensed and trained" [V]. The page also describes bait systems. Termites are a US topic. I read nothing on termites in the UK.

#### Natural History Museum, "Clothes moths identification guide"
https://www.nhm.ac.uk/take-part/identify-nature/common-insect-pest-species-in-homes/clothes-moths-identification-guide.html
Read: full text.
Establishes: the common clothes moth (*Tineola bisselliella*) and the case-bearing clothes moth (*Tinea pellionella*). The larvae do the damage by feeding on keratin in wool, fur and similar fibres; the adults do not feed. "Freezing to -20°C for a week or heating fabric to temperatures of 49°C for over 30 minutes kills all life stages" [V], which a home freezer or washing machine can do. Dry cleaning, airtight storage and vacuuming carpets also help. Pheromone traps catch adult males and are for monitoring. Note that the page calls pyrethrin sprays free of toxic residues; that is the NHM's claim and I have not checked it.

#### Babergh and Mid Suffolk District Councils, "Wood-boring insects"
https://www.babergh.gov.uk/wood-boring-insects
Read: full text. A council heritage page.
Establishes (UK woodworm): an active attack shows holes with sharp edges and bore dust (frass) "the colour of freshly-cut timber" [V]. Otherwise "holes may indicate an old infestation, that's no longer active. In these cases, no action is normally needed." [V] Common furniture beetle holes are 1 to 2 mm. To test, cover holes with tissue paper for a year and see whether new holes appear. Wood-boring insects are "a symptom of excess damp" [V], so the fix is to deal with the damp, often caused by cement render or modern paints on old buildings.

#### NHS, "Insect bites and stings"
https://www.nhs.uk/conditions/insect-bites-and-stings/
Read: full text.
Good for: a first-aid handoff only, covering stinger removal and when to call 999 for a severe reaction. It says nothing about wasp nests. I read no official source on wasp nest removal. See Gates.

#### BPCA (British Pest Control Association), "Find a pest controller"
https://bpca.org.uk/find (Wayback capture 20260208074048)
Read: full text (short).
Establishes the membership criteria: "at least £2M public liability insurance" [V]; audited to BS EN 16636, the European pest management standard; members follow BPCA Codes of Best Practice. This gives a UK check on a pest controller, like the trade checks in §7.

#### NPMA / pestworld.org
Fetched, not read (the home page only). US: EPA's bed bug and termite pages advise using a licensed professional and checking with the state pesticide agency.

---

### 6. Seasonal maintenance

#### University of Georgia Cooperative Extension, *Home Maintenance Checklist*, Circular 1082 (Turner PR, Bailey L), reviewed June 2021
https://www.fcs.uga.edu/docs/HomeMaintChecklist_update_6.21.pdf
Read: full text (pdftotext). **This is the published seasonal checklist from an extension source that the brief asked for.**
Structure: spring and fall tick-columns under Basement/Crawl Space, Exterior, Yard, Windows & Walls, Roof & Attic, Appliances, Plumbing & Bathrooms, Electrical, Heating & Cooling. Frequencies "may vary depending on your local climate and appliance manufacturing recommendations" [V]. Items include:
- Gutters: "Clean gutters and downspouts (may need to be done more frequently). Make sure they discharge water 2-3 feet away from the house." [V]
- Drain outdoor taps and store hoses for winter. Check weather-stripping and caulk. Re-caulk tubs and sinks where the seal has failed.
- Dryer: vacuum lint from the ducts; clean the filter after every use.
- Fridge door seal test: close the door on a dollar bill, and if it slides out easily, replace the gasket.
- Septic tank: "Hire a professional to pump your septic tank to prevent backup." [V], "every 3 - 7 years" [V], more often with a garbage disposal. (Stage 4 note, lesson 04: this line said only "pumped every 3 to 7 years", which dropped the instruction to hire a professional; the job label is Call someone.) Test the water heater's temperature and pressure relief valve.
- Electrical: "Trip the circuit breakers and test ground fault interrupters" [V].
- Hire a professional to tune the heating and cooling system. Check the fireplace damper and clean the chimney.
Drafters: some items, such as the T&P valve and tripping breakers, carry scald or electrical risk. Frame them as "check or have checked".

#### NFPA, "Smoke Alarms at Home" safety tip sheet (©2018)
https://www.nfpa.org/-/media/project/storefront/catalog/files/safety-tip-sheets/smokealarmssafetytips.pdf
Read: full text (pdftotext). The nfpa.org smoke alarm web page renders by script and gave no text, even from Wayback.
Establishes: alarms in every bedroom, outside each sleeping area and on every level; interconnected is best; "Test all smoke alarms at least once a month." [V]; at least 10 feet (3 m) from the stove; "Replace all smoke alarms when they are 10 years old." [V]; "Roughly 3 out of 5 fire deaths happen in homes with no smoke alarms or no working smoke alarms" [V].

#### US Fire Administration, "Smoke Alarms"
https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/smoke-alarms/
Read: full text.
Establishes: "Test the alarm monthly." [V] Replace the whole alarm every 10 years. Replace the batteries in 9-volt alarms (wording on the page is garbled across items; confirm before quoting).

#### UK Home Office, *Fire Safety in the Home* (v4, GOV.UK PDF) and the Fire Kills campaign, "Detection"
https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1077145/Fire_Safety_in_the_Home_v4_-_Web_accessible.pdf ; https://firekills.campaign.gov.uk/detect/
Read: the whole PDF (pdftotext; smoke alarm pages read closely) and the Fire Kills page in full.
Establishes: at least one alarm on every level; "test them at least monthly" [V] (Fire Kills); change one-year batteries every year; vacuum alarms every six months; replace ten-year alarms after ten years; never take the battery out after a false alarm; don't fit alarms in or near kitchens or bathrooms; fire and rescue services may fit alarms for people who need help. Fire Kills: "you are around 11 times more likely to die in a fire if you do not have any working smoke alarms" [V].

#### HSE, "Gas safety in the home: FAQs"
https://www.hse.gov.uk/gas/domestic/faqs.htm
(Stage 4 note, lesson 11, 2026-09-26: the live page's title and heading are "Domestic gas:
frequently asked questions"; lessons cite it by that title.)
Read: the sections on servicing and checking engineers (the page is about 9,500 words; I searched it for these topics and did not read it all).
Establishes: HSE "strongly advises that all gas appliances, flues and pipework should be installed, regularly maintained and serviced at least annually by a Gas Safe registered engineer" [V]. "Every year around 7 people die from gas-related carbon monoxide (CO) poisoning." [V] To check an engineer: the Gas Safe Register's "Check an Engineer" service using the licence number on the engineer's ID card, a freephone line, or a text service. A statutory annual check applies to landlords, which the gas part of the course covers.

#### HETAS, "When should I get my chimney swept?"
https://www.hetas.co.uk/consumer/advice-hub/advice-articles/when-should-i-get-my-chimney-swept/
Read: full text.
Establishes (UK): "HETAS encourage having your chimney swept at least twice a year when burning wood and at least once a year when burning smokeless fuels." [V] The best times are just before the heating season and after a long period of disuse. Use a HETAS Approved sweep and ask for ID. England had 2,608 chimney fires from April 2021 to March 2022.

#### CSIA, "Homeowner Resources"
https://www.csia.org/homeowner-resources
Read: full text (curl).
Establishes (US): CSIA follows NFPA 211, which it quotes: "Chimneys, fireplaces, and vents shall be inspected at least once a year for soundness, freedom from deposits, and correct clearances. Cleaning, maintenance, and repairs shall be done if necessary." [V] Gas-appliance flues still need an annual inspection, because nests and debris can block them. Ask for a "Level 1" inspection. I did not read NFPA 211 itself.

#### US Fire Administration, *Clothes Dryer Fire Safety* flyer
https://www.usfa.fema.gov/downloads/pdf/publications/clothes_dryer_fire_safety_flyer.pdf
Read: full text (one page).
Establishes: "Clean the lint filter before and after each cycle." [V] Don't run the dryer without its filter. Clean behind the dryer. Check that the vent is not crushed or restricted. Make sure the outdoor vent flap opens while the dryer runs. Have the dryer installed and serviced by a professional. The widely quoted figure of about 2,900 dryer fires a year, 5 deaths and $35 million in losses was seen only in search summaries (Snippet only).

#### Energy Saving Trust, "Draught proofing"
https://energysavingtrust.org.uk/advice/draught-proofing/ (Wayback 20260916151311; the live site returned 403)
Read: full text.
Establishes: draught proofing around windows, floors and doors "could save you around £55 a year in Great Britain (GB) and £80 in Northern Ireland (NI)" [V]. Draught proofing an unused open chimney could save about £45 in GB and £60 in NI. Professional draught proofing of a whole house costs about £250. **Do not block** extractor fans, underfloor airbricks, wall vents or trickle vents. "You must not block fixed ventilation openings needed for flueless or open-flue gas heaters." [V] Very airtight homes may not suit more draught proofing. Get three quotes, for example through TrustMark.

#### Met Office, "10 things you should do now to prepare for winter"
https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/10-things-you-should-do-now-to-prepare-for-winter
Read: full text.
Establishes: lag pipes; know where your stop tap is "and to check it regularly to make sure it is working" [V]; get the boiler serviced before the cold weather; heat the home to at least 18°C, especially for people over 65; secure garden items against storms; remember the power cut number, 105. The old WeatherReady URL returned 404; this page replaces it.

---

### 7. Hiring and checking a tradesperson

#### UK: Consumer Rights Act 2015, ss. 49 to 52 and 55
https://www.legislation.gov.uk/ukpga/2015/15/section/49 (and /50, /51, /52, /55)
Read: each section in full on legislation.gov.uk, revised version. In force for these purposes from 1 October 2015. Extent U.K.
Establishes, all [V]:
- s.49(1): "Every contract to supply a service is to be treated as including a term that the trader must perform the service with reasonable care and skill."
- s.50: anything the trader says or writes about itself or the service is binding if the consumer took it into account when deciding. This includes the pre-contract information required under the Consumer Contracts Regulations.
- s.51: where no price is fixed, "the consumer must pay a reasonable price for the service, and no more". "What is a reasonable price is a question of fact."
- s.52: where no time is fixed, "the trader must perform the service within a reasonable time".
- s.55: the right to repeat performance, within a reasonable time, at the trader's cost "(including in particular the cost of any labour or materials)". I did not read s.54 (the index of remedies) or s.56 (price reduction).

#### UK: Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 (SI 2013/3134), regs 5, 6, 7, 28 to 31, 36
https://www.legislation.gov.uk/uksi/2013/3134
Read: those regulations in full, revised version.
Establishes:
- Reg 5, "off-premises contract": among other things, a contract concluded "in the simultaneous physical presence of the trader and the consumer, in a place which is not the business premises of the trader" [V]. That covers a builder signing you up at your kitchen table.
- Reg 7(4): the cancellation Part does not apply to off-premises contracts where the consumer pays "not more than £42" [V].
- Reg 6(1)(e): excludes contracts for "the construction of new buildings, or the construction of substantially new buildings by the conversion of existing buildings" [V]. Ordinary repair and improvement work is not excluded.
- Reg 29: the consumer may cancel a distance or off-premises contract within the cancellation period "without giving any reason" [V].
- Reg 30(2): for a service contract, "the cancellation period ends at the end of 14 days after the day on which the contract is entered into" [V].
- Reg 31: if the trader fails to give the required cancellation information, the period is extended by up to 12 months.
- Reg 36: the trader must not start work within the 14 days unless the consumer expressly asks, and for an off-premises contract that request must be "on a durable medium" [V]. If the consumer then cancels, they pay for what has been supplied, in proportion. They pay nothing if the trader failed to give the cancellation information.
- Reg 28(1)(e): no right to cancel for "contracts where the consumer has specifically requested a visit from the trader for the purpose of carrying out urgent repairs or maintenance" [V]. Reg 28(2) keeps the right for extra services or goods sold on that same visit.

#### Citizens Advice, "Before you get work done on your home" (England)
https://www.citizensadvice.org.uk/consumer/getting-home-improvements-done/before-you-get-building-work-done/
Read: full text (about 4,700 words). The page says "This advice applies to England" [V] and links to separate advice for Northern Ireland, Scotland and Wales.
Establishes:
- Permissions: planning permission; building regulations approval, which covers most plumbing, electrical and heating work; competent person schemes, which avoid a separate application; conservation areas, listed buildings, tree preservation orders, covenants, leases and mortgage conditions.
- Gas and electricity: "If you're getting gas work done, you must use a Gas Safe registered engineer" [V]. For electrical work you should use a properly qualified or registered electrician.
- Checking a trader: get 2 or 3 recent references and speak to the customers yourself, because "written references aren’t always genuine" [V]. Ring the business to confirm it exists. Check membership claims on the scheme's own website. Be wary of a mobile number only.
- Quotes: "Try to get written quotes from at least 3 different traders before you decide on one." [V] A quote is a fixed price; an estimate is a guess. The trader can't charge more than the quote unless you ask for extra work or agree to it. Be wary of a price far below the others.
- Insurance: public liability, employers' liability ("If a trader which has employees doesn’t have employer’s liability insurance, they are breaking the law." [V]), professional indemnity, and contractors' all-risk. Tell your own buildings insurer.
- The contract covers timings, tidying up, materials, subcontractors and payment. You may be able to cancel within 14 days.
- Payment: pay by card, or failing that bank transfer, and "Don’t pay with cash." [V] Section 75 applies to credit card payments "between £100.01 and £30,000" [V], including a deposit paid by credit card. Pay in stages. Offer to buy materials yourself instead of paying a deposit. On long jobs, keep any deposit low "and don’t agree to more than 25%" [V].

#### Citizens Advice, "Find a trader and check you can trust them"
https://www.citizensadvice.org.uk/consumer/get-more-help/find-a-trader-and-check-you-can-trust-them/
Read: full text.
Establishes: start with the council's Trading Standards pages or "approved traders" list. TrustMark is listed as "the Government’s trader scheme" [V]. Check any trade association membership on the association's own site.

#### TrustMark, "Why TrustMark?"
https://www.trustmark.org.uk/homeowners/why-use-trustmark
Read: full text (short).
Establishes TrustMark's own description: "TrustMark is the Government Endorsed Quality Scheme that covers work a consumer chooses to have carried out in or around their home." [V] Registered businesses are vetted. The claim of government endorsement comes from TrustMark and from Citizens Advice; I read no government source for it.

#### Federation of Master Builders, "Find a builder"
https://www.fmb.org.uk/find-a-builder/
Read: full text.
Establishes: members pass vetting and inspection. Some are also TrustMark registered, and TrustMark businesses "are also expected to provide a minimum two-year financial protection policy" [V]. FMB offers dispute resolution. Check membership, because "some places claim to be a member when they're not" [V].

#### US: FTC, "How To Avoid a Home Improvement Scam"
https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam (the old 0242-hiring-contractor URL redirects here; updated 2025-12-10 according to page metadata)
Read: full text.
Establishes: signs of a scam include knocking on your door because they are "in the area", materials "left over from a previous job", pressure for an immediate decision, demanding everything up front or cash only, "Scammers ask you to get any required building permits." [V], and suggesting a lender they know. Advice: use only licensed and insured contractors and confirm the licence with the state or county; get several written estimates and don't simply pick the lowest; the contract should include the contractor's name, address, phone and licence number, start and completion dates, any verbal promises, and the three-day cancellation notice where it applies; fill in every blank. "Some states actually limit the amount of money a contractor can ask for as a down payment." [V] Never make the final payment until you are satisfied. The home-improvement loan scam: never sign blank papers, never transfer your deed.

#### US: FTC, "How To Avoid Scams After Weather Emergencies and Natural Disasters"
https://consumer.ftc.gov/articles/how-avoid-scams-after-weather-emergencies-and-natural-disasters (updated 2026-04-28)
Read: full text.
Establishes: scammers claim they don't need a licence, want payment up front, and insist on wire transfer, gift card, payment app, crypto or cash; "FEMA doesn’t charge application fees" [V]; "never sign your insurance check over to a contractor" [V] (arrange staged payments through your bank instead); be sceptical of anyone promising immediate repairs.

#### US: FTC Cooling-Off Rule, 16 CFR Part 429, and FTC consumer page "Buyer's Remorse: The FTC's Cooling-Off Rule May Help"
eCFR: https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-429 ; https://consumer.ftc.gov/articles/buyers-remorse-ftcs-cooling-rule-may-help
Read: Part 429 in full from the eCFR renderer; the FTC page in full.
Establishes:
- §429.0(a): a "door-to-door sale" has "a purchase price of $25 or more if the sale is made at the buyer's residence or a purchase price of $130 or more if the sale is made at locations other than the buyer's residence" [V]. This includes visits made at the buyer's invitation.
- The required notice: "You, the buyer, may cancel this transaction at any time prior to midnight of the third business day after the date of this transaction." [V] "Business Day" excludes Sundays and federal holidays, so Saturday counts (§429.0(f)).
- The seller must refund within 10 business days (§429.1(g)).
- Exclusions, per §429.0(a)(3) and the FTC page: a buyer-initiated bona fide emergency, which needs a handwritten, signed waiver from the buyer; repairs or maintenance on personal property that the buyer asked the seller to come and do (anything bought beyond that request is covered); real estate, insurance and securities.
- §429.2: state laws giving equal or greater rights are not pre-empted.

#### US: California Contractors State License Board, *A Consumer Guide to Home Improvement Contracts* and Business and Professions Code §7159
https://www.cslb.ca.gov/Resources/GuidesAndPublications/HomeImprovementContractsConsumerGuide.pdf ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7159
Read: the guide in full (pdftotext; no date shown) and the statute text, with the down payment notice and definitions read closely.
Establishes:
- The deposit limit, stated in BPC 7159 as mandatory contract text: "THE DOWNPAYMENT MAY NOT EXCEED $1,000 OR 10 PERCENT OF THE CONTRACT PRICE, WHICHEVER IS LESS." [V] The guide adds that this excludes finance charges, that there are "no exceptions for special order materials" [V], and that the only exception is contractors with a blanket performance and payment bond on file with CSLB.
- A home improvement contract over $500 falls under §7159(b). Payments must not run ahead of the value of the work done. Price changes need a written change order.
- Mechanic's liens: unpaid subcontractors, suppliers and workers can lien the property even when the contractor has been paid in full. "A property owner could be forced to pay twice or have the court sell the home to pay the lien." [V] Suppliers and subcontractors must send a "Preliminary Notice" within 20 days. Protect yourself by getting a list of subcontractors and suppliers, lien releases (the brief's "lien waivers") as each part of the work is finished, or joint cheques.
- California's right to cancel is three business days, or five if the buyer is 65 or over. It does not apply to a contract negotiated at the contractor's premises, or to a service and repair contract for emergency work the consumer asked for once the work has started.

#### State contractor licence lookups, BBB
CSLB (above) is one state's licensing board. The FTC tells consumers to check with "your state or county government" [V]. I did not read any other state's lookup page, and I did not read the BBB.

#### The "cowboy builder" problem
No source I read uses the phrase. Citizens Advice's warnings (cash only, mobile number only, no written quote, a price far below the others, doorstep approaches) and the FTC's scam signs describe the same thing. Snippet only: a Citizens Advice press release title seen in search results reported "more than 700 complaints a week" about shoddy trades work. It was not read.

---

### (a) What this part says the field considers essential

1. **Ladders: use the right equipment first, set the ladder up properly, and don't overreach.** Consider whether a ladder is right for the job at all: under 30 minutes, low risk, level firm ground. Then set it at 1 in 4 (75°), extend it 1 m or 3 feet above the landing, keep three points of contact, keep your belt buckle between the stiles, stay off the top three rungs or steps, secure it (footing is the last resort), and keep 6 m from overhead power lines. US emergency department data show nearly all ladder injuries happen away from work, in homes and on farms.
2. **Power tools:** unplug to change a bit or blade, never remove guards, clamp the work, protect your eyes, and use the right dust mask (FFP2/FFP3 or N95). Know that a mask stops dust, not vapour, and that it only works if it fits.
3. **Isolate before you fix:** stop tap or isolation valve for taps and toilets; switch off at the socket and unplug before opening a plug; heating off and radiators cool before bleeding.
4. **Common repairs are mostly about diagnosis.** A washer tap and a ceramic-disc tap fail in different ways. A leaking toilet shows up with a dye test. Cold at the top of a radiator means air; cold at the bottom means sludge. A repeatedly tripping RCD means a fault for an electrician.
5. **Pests: IPM.** Identify, exclude and clean up, trap, and use poison only as a later step. Use snap traps rather than glue traps (CDC). Consumer rodenticide comes only in tamper-resistant bait stations. Never sweep or vacuum rodent droppings. Foggers do not work on German cockroaches. Bed bugs need more than pesticide.
6. **Seasonal routine:** test smoke alarms monthly and replace them at ten years; service gas appliances every year; sweep or inspect chimneys every year (twice for wood in the UK); clean gutters so water discharges away from the house; clean dryer lint; draught proof without blocking ventilation; prepare pipes and the stop tap for winter.
7. **Hiring:** get several written quotes, check registration and insurance on the scheme's own website, keep deposits small (California caps them by law), pay in stages and by card, know the doorstep cancellation rights (14 days in the UK, 3 business days under the US federal rule), and in the US protect yourself against liens.

### (b) Common misconceptions (each named by a source)

- "Ladders are banned under health and safety law." HSE: they are not.
- "A short job justifies a ladder." HSE: "Short duration is not the deciding factor" [V]; risk comes first.
- "Someone footing the ladder makes it safe." HSE ranks footing as the last resort after tying, a stability device and wedging. RoSPA still suggests having a second person present (see Contested).
- "A cable detector that shows nothing means there is no cable." Bosch: it detects only cables carrying current.
- "Any dust mask will do." HSE: nuisance or comfort masks are not respirators, and a beard defeats the seal.
- "Flushable wipes can be flushed." Thames Water: they block pipes "even the ones labelled ‘flushable’".
- Bed bug myths (EPA): that they live only in dirty places, carry disease between people, avoid light, or can be cleared with pesticide alone. Also that turning up the thermostat kills them (EPA Top Ten).
- "Bug bombs clear cockroaches." DeVries et al. 2019 and UC IPM: they fail, and they leave residues.
- "Woodworm holes mean live woodworm." Babergh council: old holes usually need no action.
- "A quote and an estimate are the same thing." Citizens Advice: a quote is fixed, an estimate is not.
- "Paying the contractor in full protects you from liens." CSLB: unpaid subcontractors can still lien the home.

### (c) Contested questions

1. **Should a second person foot or hold a leaning ladder?**
   - HSE/LA455 (workplace): "Footing is the last resort". Prefer tying, a stability device or wedging.
   - RoSPA (home): "Consider having another person present, especially when using leaning ladders."
   - Status: **contested in emphasis, not in fact.** Both agree that securing the ladder matters. A second person nearby is also useful if something goes wrong. Teach the HSE order of preference and say a helper is worth having.
2. **Thawing a frozen pipe: turn off the stop tap first?**
   - CCW (UK): turn off the water at the stop tap, then thaw slowly with the cold tap open.
   - American Red Cross (US): keep the tap open so running water helps melt the ice. It does not mention shutting off the supply before thawing.
   - Status: **established fact** that you should never use a naked flame and should thaw gently. **Contested** whether to isolate first. Turning the water off first limits flooding if the pipe has already split. A lesson can give the CCW order and the reason for it.
3. **Woodworm: treat with chemicals, or manage the damp?**
   - Heritage and conservation advice (Babergh council): the damp is the cause; old holes need no action; monitor for a year.
   - The commercial position that active infestations need treatment appears only in trade-site snippets I did not read. The council page itself says an active infestation "might need" treatment straight away.
   - Status: **contested** in practice. Established that frass and hole edges show activity. Present both, attributed.
4. **Rodent control: when to use poison, and are glue traps acceptable?**
   - CDC: snap traps first; no glue or live traps; bait stations only for persistent infestations.
   - EPA and HSE: consumer anticoagulants are allowed only in restricted forms. HSE says to consider other methods before anticoagulants.
   - Glue traps are largely prohibited in England under separate legislation, which I did not read (see Gates).
   - Status: **established** that non-chemical methods come first. Whether glue traps are humane is a **value** question, and their legal status differs by country.
5. **How much deposit is reasonable?**
   - California law: at most $1,000 or 10%, whichever is less.
   - Citizens Advice (England, guidance, not law): avoid deposits; if unavoidable, no more than 25%.
   - Status: **established law** for California; **guidance** in England. Do not merge the two.
6. **How long does new plaster take to dry before painting?** Dulux pages differ: up to 4 weeks on the page read, other figures in a snippet. **Contested / varies.** Follow the plasterer's and the paint maker's advice.

### (d) UK vs US differences

| Topic | UK | US |
|---|---|---|
| Ladder angle | 1-in-4, 75° (HSE/LA455) | about one-quarter of working length (29 CFR 1926.1053(b)(5)(i)); the "4-to-1 rule" |
| Height above landing | 1 m (three rungs) | 3 feet (0.9 m) |
| Top of stepladder | don't work on the top three steps without a handhold | "The top or top step of a stepladder shall not be used as a step." |
| Legal status for householders | WAHR 2005 bind work, not DIY | OSHA binds employers, not DIY |
| Tap fault | washer (compression) or ceramic-disc cartridge | "faucet washers and gaskets"; cartridge taps too |
| Toilet fault | push-button cistern and flush valve leaks (UU, about 80% of reported leaks); overflow pipe drip | worn flapper; dye test; replace the flapper at least every 5 years |
| Plug fuse | fused BS 1363 plug, 3 A or 13 A | no fused plug |
| Paint names and VOC | "emulsion"; statutory VOC label in g/l | "latex"; EPA guidance on VOCs (US labelling law not researched) |
| Pests | woodworm, clothes moths; CRRU stewardship; HSE biocides | termites; EPA 2008 rodenticide restrictions; state pesticide agencies |
| Chimney | HETAS: sweep at least once a year, twice for wood | CSIA/NFPA 211: inspect at least once a year |
| Gas | Gas Safe registration mandatory for anyone doing gas work as a business, competence for everyone (corrected at synthesis, see "The gas-work law, stated exactly"); annual service advised | licensing varies by state (not researched here) |
| Doorstep cancellation | 14 days, off-premises contracts over £42; urgent repairs you called for are excluded | 3 business days, $25+ at home or $130+ elsewhere; emergency and requested repairs excluded; states may add more (California: 5 days if 65 or over) |
| Services law | CRA 2015 implied terms: reasonable care and skill, price, time | state law; FTC guidance |
| Checking a trader | Trading Standards approved lists, TrustMark, competent person schemes, trade associations | state or county licence lookup, proof of insurance, home builders' association |
| Deposits | guidance only (Citizens Advice: at most 25%) | some states cap them by law (California: $1,000 or 10%) |
| Liens | not researched | mechanic's liens; lien releases; preliminary notices (California) |

### (e) Safety-critical notes for drafters

- **Ladders:** give the numbers exactly: 75°, 1 in 4, 1 m or 3 feet above the landing, top three rungs, 6 m from power lines, and the 30-minute guide. Say that HSE and OSHA rules are written for workplaces and that most injuries happen at home (D'Souza 2007). Do not publish a UK injury figure until a primary source is found.
- **Before drilling:** detectors miss cables that aren't carrying current. Turn the power off. Send wiring zones to the electricity lesson.
- **Masks:** FFP and N95 masks do not protect against solvent vapour. A beard defeats the fit. Methylene chloride strippers should be used outdoors.
- **Batteries:** use the original charger, stop using a swollen battery, don't leave it charging unattended once charged, and don't cover chargers.
- **Plug fuses:** replace with the same rating only. Never "upgrade" a fuse. Never open a plug that is in the socket.
- **RCD or breaker that keeps tripping:** after one reset attempt, stop and call an electrician. Do not tape or hold a breaker on. (That last instruction is common sense and not quoted from any source I read; check it against the electricity part.)
- **Radiators and boilers:** bleed only when the system is cool, and repressurise to the maker's figure (Vaillant: 1 to 1.5 bar cold). Boiler repairs are for Gas Safe engineers.
- **Frozen pipes:** never use a naked flame or blowtorch. Know where the stop tap is.
- **Rodent clean-up:** do not sweep or vacuum droppings. Air the room, wear gloves, soak with disinfectant for 5 minutes, and bag the waste twice.
- **Poisons:** keep bait in tamper-resistant stations away from children and pets. Never use an outdoor pesticide indoors. Avoid foggers.
- **Chimneys and gas:** service and sweep annually. Do not block ventilation needed by flueless or open-flue gas appliances when draught proofing (EST).
- **Hiring:** never sign blank papers or sign over an insurance cheque, and never pay by wire, gift card or cash. The CCR urgent-repairs exclusion means a trader you called out in an emergency is not covered by the 14-day cancellation right. Additional work sold on that same visit still is.

### (f) Gates (need a primary read before a lesson states them)

1. **UK ladder injury figures.** The about 6,000 admissions and about 48,000 A&E attendances credited to RoSPA were seen only in snippets. Find a RoSPA or NHS primary source (for example Hospital Episode Statistics, ICD-10 code W11) or leave UK figures out.
2. **WAHR 2005 reg 3(3)(b)** and householders who control a tradesperson's work. Read HSE's guidance on domestic clients before saying anything beyond "the Regulations govern work, not your own DIY".
3. **LA455 page 7 and 8 content** (inspection, product standards EN 131) and the HSE web guide pages 7 and 8: not read.
4. **OSHA respiratory protection standard Table 1** (assigned protection factors): not read. Do not give an APF for N95.
5. **Eye protection standards** (EN 166 in the UK, ANSI Z87.1 in the US): not read. Advise safety glasses in general terms only.
6. **UK cistern mechanics** (siphon, flush valve, float or fill valve): no source read. Needs a manufacturer's or water company's page.
7. **Plunging a sink and removing a trap; chemical drain cleaners:** no primary source read.
8. **Sticking doors, silicone sealant, wallpaper, sanding old paint:** no primary source read.
9. **VOC Regulations 2012 revised text** (post-Brexit amendments): only the "as made" version of regs 3 to 5 and Sch 2 was read.
10. **US paint labelling or VOC law for consumers:** not researched. Don't claim a US equivalent of the UK g/l label.
11. **NFPA 211 itself:** quoted here only as CSIA quotes it. Attribute the annual inspection rule to CSIA, citing NFPA 211, or read the standard.
12. **CPSC lithium-ion and ladder safety centre pages:** blocked. The US lithium-ion figures are unverified.
13. **The USFA dryer fire figure** (about 2,900 a year): snippet only.
14. **The EPA 2008 rodenticide decision document** and **CRRU pack size limits:** not read. Cite the EPA restrictions page and HSE instead.
15. **Glue traps in England** (the Glue Traps (Offences) Act 2022): not read. Needed before any UK statement on glue traps.
16. **Wasp nests:** no official source read. Needs a council, BPCA or NHS source before a lesson says "don't disturb, call a professional".
17. **CRA 2015 ss. 54, 56, 57** (remedies index, price reduction, liability that cannot be excluded): not read.
18. **Section 75 of the Consumer Credit Act 1974:** stated here only through Citizens Advice.
19. **TrustMark's "Government Endorsed" status:** stated by TrustMark and Citizens Advice. No government source read.
20. **US state licensing thresholds** (including the current California threshold) and **any state's lien law other than California:** not read.
21. **Electrical Safety First's list of appliances by fuse rating:** the page read and an older page (snippet) disagree. Teach "follow the manufacturer".
22. **Hantavirus in the UK:** not researched. Frame the CDC clean-up advice as US guidance that is also good practice anywhere.

### (g) Not read (strings for the build-time blocklist)


*The part's own "Not read" list below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*

- INDG455
- American Ladder Institute
- Which? Trusted Traders
- Consumer Reports
- This Old House
- Better Business Bureau
- National Pest Management Association
- Glue Traps (Offences) Act
- ANSI Z87.1
- EN 166
- EN 131
- Trade Association Forum
- LABC Front Door
- Registered Competent Person Electrical
- Construction Skills Certification Scheme
- Total Exposure Assessment Methodology
- Buy Safe, Be Safe
- Warm Homes Plan
- Get Water Fit
- Guild of Master Chimney Sweeps
- National Association of Chimney Sweeps
- Association of Professional Independent Chimney Sweeps
- Chimney Fire Safety Week
- Home Accident Surveillance System
- Hospital Episode Statistics
- Moulton Niguel
- Spartanburg Water
- Wessex Water
- Anglian Water
- Consumer Credit Act

---

## Part C: Work reserved to registered or licensed trades, and what a householder may lawfully do

Researcher C. All sources read live on 25 September 2026 unless stated. Plain-text extractions are in the scratchpad `hr/raw/` folder under the short names given. [V] marks words copied from text I extracted myself; [T] marks words from a summarising fetch tool; "snippet only" marks something seen only in a search result, which is not a finding.

A general caution for the whole part: this is the area where a lesson is most likely to be wrong, because the rule changes at every border. England and Wales share one statutory instrument but no longer share its electrical rules; Scotland and Northern Ireland have separate systems; and in the US the rule changes by state, by county and by city. Nothing below should reach a lesson without the jurisdiction attached to it.

---

### UK: England and Wales, building regulations

#### C1. The Building Regulations 2010 (SI 2010/2214), regulation 3 (meaning of building work)
URL: https://www.legislation.gov.uk/uksi/2010/2214/regulation/3 (raw: `br_reg3`)
Read: full text of regulation 3 and its amendment notes, HTML extraction.
Version: legislation.gov.uk states [V] "Section 3 is up to date with all changes known to be in force on or before 25 September 2026", with changes that may come into force later.

Establishes:
- Reg 3(1) defines "building work" as, among other things, (a) erection or extension of a building; (b) [V] "the provision or extension of a controlled service or fitting in or in connection with a building"; (c) material alteration of a building or controlled service or fitting; (e) cavity wall insulation; (f) underpinning.
- Reg 3(2): an alteration is "material" if at any stage it would leave the building or a controlled service or fitting non-compliant with a "relevant requirement" where it previously complied, or more unsatisfactory where it already did not comply.
- Reg 3(3) lists the relevant requirements: Part A (structure), B1, B3, B4, B5 (fire), Part M (access) and, in England from 1 October 2024, Part T (toilet accommodation). This is why removing a loadbearing wall or a chimney breast is building work: it touches Part A.

#### C2. The Building Regulations 2010, regulation 12 (giving notice), England and Wales versions
URL: https://www.legislation.gov.uk/uksi/2010/2214/regulation/12 (raw: `br_reg12`)
Read: full text of both the England version and the Wales version, with amendment notes.
Version: [V] "Section 12 is up to date with all changes known to be in force on or before 23 September 2026". Outstanding changes are listed, none to reg 12(6A).

Establishes:
- Reg 12(2): a person intending to carry out building work must either give the authority a building notice (reg 13) or apply for building control approval with full plans (reg 14).
- Reg 12(6): no notice is needed where the work consists only of (a) work in column 1 of Schedule 3 carried out by the person in column 2 (a competent person scheme member), (b) work described in Schedule 4, or (c) in England, work in Schedule 3A inspected by a third-party certifier appointed before work starts.
- **Reg 12(6A), England only.** Where Part P applies, notice is required where the work consists of [V] "(a) the installation of a new circuit; (b) the replacement of a consumer unit; or (c) any addition or alteration to existing circuits in a special location." Inserted from 6 April 2013 by SI 2012/3119.
- Reg 12(9), England: "special location" means (a) within a room containing a bath or shower, the space around a bath tap or shower head, extending vertically from the finished floor to 2.25 metres (or to the shower head if higher), and horizontally 0.6 metres from the edge of the bath or shower tray, or 1.2 metres from the centre of the shower head where there is no tray; or (b) [V] "a room containing a swimming pool or sauna heater."
- **Wales version:** reg 12(6)(c) and 12(6A) are shown as omitted (dotted lines). The Welsh text keeps only routes (a) Schedule 3 and (b) Schedule 4. The extent note reads [V] "This version of this provision applies to Wales only".
- Reg 12(8): emergency repairs where prior notice is impracticable: give a building notice [V] "as soon as reasonably practicable after commencement of the work."

#### C3. The Building Regulations 2010, Schedule 4 (work needing no notice), England and Wales versions
URL: https://www.legislation.gov.uk/uksi/2010/2214/schedule/4 (raw: `br_sch4`)
Read: full text, both versions; the pandoc extraction dropped some bracketed paragraphs, so paragraphs 1 to 3 were re-read from the raw HTML.
Version: [V] "SCHEDULE 4 is up to date with all changes known to be in force on or before 26 September 2026".

Establishes:
- **England**, para 1(a) to (e) are omitted (the minor electrical items). Remaining non-notifiable items relevant to a householder include: replacing parts of an existing fixed building service that are not a combustion appliance (1(f)); replacing an external door where not more than 50% of its internal face is glazed (1(h)); replacing a toilet with one using no more water, a washbasin, sink or bidet, a fixed bath, a shower, a rainwater gutter or downpipe, provided there is no work to underground drainage and nothing to the water or drainage system that may prejudice health or safety (1(j)); replacing parts of, or adding output or control devices to, an existing cold water supply (1(k)); a hot water storage vessel not exceeding 15 litres (1(l)); loft insulation installed solely as such (1(m)); insulation to suspended timber floors (para 3A).
- **Wales**, para 1(a) to (e) are present: [V] "(a) replacing any fixed electrical equipment which does not include the provision of (i) any new fixed cabling, or (ii) a consumer unit; (b) replacing a damaged cable for a single circuit only;" re-fixing enclosures; mechanical protection; main or supplementary equipotential bonding.
- **Wales**, para 2: work which [V] "(a) is not in a kitchen, or a special location; (b) does not involve work on a special installation; and (c) consists of (i) adding light fittings and switches to an existing circuit, or (ii) adding socket outlets and fused spurs to an existing ring or radial circuit."
- **Wales**, para 3: telephone and extra-low voltage communications wiring not in a special location; prefabricated equipment sets with plug and socket connections.
- Para 4 definitions (Wales): "special installation" means [V] "an electric floor or ceiling heating system, an outdoor lighting or electric power installation, an electricity generator, or an extra-low voltage lighting system which is not a pre-assembled lighting set bearing the CE marking"; "special location" is defined by the bath, shower, pool and sauna zones of BS 7671:2008 (17th edition).

What this means, stated carefully: in **England** since 6 April 2013 only three kinds of electrical work are notifiable (new circuit, consumer unit replacement, additions or alterations in a special location); **kitchens and gardens are not special locations** in England. In **Wales** the pre-2013 list survives: work in a kitchen, in a special location or on a special installation (including outdoor power and lighting) is notifiable unless it is one of the minor items in para 1(a) to (e).

#### C4. The Building Regulations 2010, Schedule 3 (self-certification schemes)
URL: https://www.legislation.gov.uk/uksi/2010/2214/schedule/3 (raw: `br_sch3`)
Read: full table, from raw HTML (amendment notes stripped by me).
Version: [V] "up to date with all changes known to be in force on or before 23 September 2026".

Establishes (column 1 work, column 2 person):
- Item 1: installation of a heat-producing gas appliance (not a masonry chimney): [V] "A person, or an employee of a person, who is a member of a class of persons approved in accordance with regulation 3 of the Gas Safety (Installation and Use) Regulations 1998." That is the Gas Safe Register.
- Item 2: oil-fired appliances, oil storage tanks and connecting pipes: APHC, Blue Flame, BESCA, Certsure, NAPIT, OFTEC.
- Item 3: solid fuel appliances other than biomass: includes HETAS and OFTEC.
- Item 4: heating or hot water system or its controls: Gas Safe class, or the oil, solid fuel and multi-trade schemes.
- Item 8: [V] "Installation of fixed low or extra-low voltage electrical installations in dwellings": Blue Flame, Certsure, NAPIT, OFTEC (and others struck through).
- Item 9: electrical work as a necessary adjunct to other work by the registered person.
- Item 10: replacement window, rooflight, roof window or door in an existing dwelling: Assure, Blue Flame, CERTASS, Certsure, Fensa, NAPIT.
- Item 12: sanitary conveniences, sinks, basins, baths, showers or bathrooms in a dwelling, not involving shared or underground drainage.
- Item 16: replacement roof coverings: NAPIT or the National Federation of Roofing Contractors.

#### C5. The Building Regulations 2010, Schedule 1 Part P, and regulations 18 and 20
URLs: https://www.legislation.gov.uk/uksi/2010/2214/schedule/1 (raw `br_sch1`), /regulation/18 (`br_reg18`), /regulation/20 (`br_reg20`)
Read: Part P and Part G3 text from Schedule 1; full text of regs 18 and 20.
Version: Schedule 1 up to date to 23 September 2026 (outstanding Part L changes only); reg 18 up to date to 21 September 2026.

Establishes:
- **P1**: [V] "Reasonable provision shall be made in the design and installation of electrical installations in order to protect persons operating, maintaining or altering the installations from fire or injury." It applies to low and extra-low voltage installations in or attached to a dwelling, common parts serving dwellings (not lift supplies), buildings supplied from a dwelling's source, and gardens supplied from a dwelling.
- Part P therefore applies to **all** electrical installation work in a dwelling, notifiable or not. Notification is a separate question (reg 12 and Schedule 4).
- Reg 20(3): the competent person must, not more than 30 days after completion, give the occupier a copy of the certificate and give the authority notice or the certificate. Reg 20(5): the certificate is [V] "evidence (but not conclusive evidence)" of compliance.
- Reg 18: where unauthorised building work was carried out on or after 11 November 1985, the owner may apply for a **regularisation certificate**; the authority may require the owner to lay open the work for inspection, make tests and take samples (18(3)); the certificate is evidence but not conclusive evidence (18(6)).

#### C6. Approved Document P, Electrical safety: dwellings, 2013 edition (for use in England)
URL: https://assets.publishing.service.gov.uk/media/5a802da7ed915d74e622ceed/BR_PDF_AD_P_2013.pdf; GOV.UK landing page https://www.gov.uk/government/publications/electrical-safety-approved-document-p (raw: `adp`)
Read: full text (about 4,900 words), pdftotext. GOV.UK landing page read via the content API; it lists this 2013 edition as current, with no later edition.
Version: [V] "2013 edition, for use in England" [my comma for their dash]; took effect 6 April 2013. It applies also to "excepted energy buildings" in Wales. Its technical reference is BS 7671:2008 incorporating Amendment No 1:2011 (the 17th edition), not the current edition of BS 7671.

Establishes:
- Main changes 2013: [V] "The range of electrical installation work that is notifiable ... has been reduced", and a non-registered installer may use a registered third-party certifier.
- Para 1.1: installations "should be designed and installed in accordance with BS 7671:2008 incorporating Amendment No 1:2011". BS 7671 is the route to compliance the approved document names; the legal duty is P1.
- Para 1.6: when altering, only the new work must meet current standards; no obligation to upgrade the existing installation unless the new work affects its safety or the existing installation cannot safely carry the new work.
- Para 2.2: Part P covers the dwelling, outside fixtures, garden lighting and pond pumps, sheds, detached garages and greenhouses.
- Para 2.5: notifiable work is what reg 12(6A) sets out. Diagram 2 shows the 600 mm and 2.25 m zone.
- **Para 2.7**: [V] "All other electrical installation work is not notifiable, namely additions and alterations to existing installations outside special locations, and replacements, repairs and maintenance anywhere." (I have replaced their dash with a comma.)
- Para 2.8: installing a built-in cooker is not notifiable unless a new cooker circuit is needed; connecting a gate to an existing isolator is not notifiable, but a new circuit to the isolator is.
- Para 3.1: notifiable work must be certified by one of three routes: [V] "a. Self-certification by a registered competent person. b. Third-party certification by a registered third-party certifier. c. Certification by a building control body."
- Para 3.5 to 3.7: a non-registered installer may appoint a registered third-party certifier **before work begins**, notify it within 5 days of completion.
- Para 3.8: [V] "If an installer is not a registered competent person and has not appointed a registered third-party certifier, then before work begins the installer must notify a building control body." This is the householder's DIY route in England.
- Para 3.9 to 3.12: the building control body decides the inspection and testing needed, may contract a specialist, and issues a completion certificate.
- **Para 3.13**: [V] "Non-notifiable electrical installation work, like notifiable work, should be designed and installed, and inspected, tested and certificated in accordance with BS 7671." Para 3.14: local authorities can take enforcement action against unsafe non-notifiable work.
- Front matter: [V] "If building work does not comply with the Building Regulations, the building owner may be served with an enforcement notice."

#### C7. GOV.UK, "Building regulations approval" (guide)
URL: https://www.gov.uk/building-regulations-approval (via https://www.gov.uk/api/content/building-regulations-approval; raw `gov_building-regulations-approval`)
Read: all parts. Updated 24 January 2025.

Establishes:
- Approval may be needed to [V] "replace fuse boxes and connected electrics", "change electrics near a bath or shower", "replace windows and doors", "install or replace a heating system", "add extra radiators to a heating system", and to install a bathroom involving plumbing.
- No approval needed for [V] "most repairs, replacements and maintenance work (except heating systems, oil tanks, fuse boxes and glazing units)" and [V] "new power and lighting points, or changes to existing circuits (except around baths and showers)". This summary is correct for England but **not for Wales**, where kitchen and outdoor work stays notifiable (C3, C8). The page covers both nations under one heading.
- [V] "Building regulations approval is different from planning permission. You might need both."
- Penalties: the person doing the work [V] "could be prosecuted and fined"; the building control body "could make you pay to fix faulty work"; without approval you will not have certificates you may need to sell.
- A competent person gives [V] "a certificate within 8 weeks of completion". Note: reg 20(3) says 30 days for the scheme member to give the certificate; the two are not the same number (see Gates).
- Building notice: [V] "You can start work 2 days after your notice has been submitted". Regularisation is from a local authority only, and [V] "Only work carried out after 11 November 1985 can be approved in this way."
- Choice of building control body: the local council or a [V] "private registered building control approver" in England or Wales (the Building Safety Act 2022 regime). Higher-risk buildings (at least 7 storeys or 18 m with 2 or more residential units) go to the Building Safety Regulator.

#### C8. GOV.UK, "Competent person scheme: current schemes and how schemes are authorised"
URL: https://www.gov.uk/guidance/competent-person-scheme-current-schemes-and-how-schemes-are-authorised (raw `gov_competent-person-scheme...`)
Read: full text. Updated 17 September 2026.

Establishes:
- A competent person scheme lets an installer [V] "self-certify certain types of building work ... instead of getting building regulations approval." Schemes are authorised by MHCLG.
- Current schemes (full names as listed): ATTMA, APHC, Assure Certification, Blue Flame Certification, British Board of Agrément, BESCA, Capita Gas Registration and Ancillary Services Limited (Gas Safe Register), Certass, **"Certsure LLP trading as NICEIC"**, Elmhurst Airtightness Scheme, Fensa, HETAS, Installation Assurance Authority, **NAPIT Registration Limited**, National Federation of Roofing Contractors (CompetentRoofer), OFTEC.
- Electrical work in dwellings: BESCA, Blue Flame Certification, Certsure, NAPIT, OFTEC.
- Gas: [V] "*The GSR is not technically a competent person scheme, but in practice its installers have the same responsibilities for complying with building regulations."
- Electrical scheme members appear on the Electrical Competent Person Register.
- **ELECSA is not named on this list.** The brief asked me to name it; the current primary list names Certsure (trading as NICEIC) and NAPIT. A lesson should use the GOV.UK list, not a remembered one.

#### C9. Welsh Government, "Building regulations: electrics", and Approved Document P (Wales), 2006 edition incorporating 2010 amendments
URLs: https://www.gov.wales/building-regulations-electrics (raw `wal_electrics`); https://www.gov.wales/approved-document-p-electrical-safety-dwellings (page dated first published and last updated 3 April 2017, with an amendment slip of September 2013) and the PDF https://www.gov.wales/sites/default/files/publications/2019-05/building-regulations-guidance-part-p-electrical-safety.pdf (raw `wal_adp_pdf`)
Read: the guidance page in full; the approved document's front matter, Section 0 (notification, Tables 1 and 2 and the additional notes) in full, other sections by search only.
Version: [V] "2006 edition incorporating 2010 amendments", "For use in Wales". It cites BS 7671:2001 as amended.

Establishes:
- gov.wales: [V] "you do not need to tell them about repairs, replacements and maintenance work or extra power points or lighting points or other alterations to existing circuits (except in a kitchen or bathroom, or outdoors)."
- gov.wales, DIY route: [V] "You should make a Building Regulations application to Building Control if the electrician you employ ... is not registered as a competent person ... or if you do the work yourself." Contact building control **before** starting.
- gov.wales, minor works: replacing any electrical fitting; adding a fused spur (not in a kitchen, bathroom or outdoors); repair or maintenance; bonding; extra-low voltage cabling. [V] "If you do the work yourself you may wish to engage a qualified electrician to check it for you."
- AD P (Wales) para 0.4 note: kitchen is [V] "a room or part of a room which contains a sink and food preparation facilities"; in open-plan areas, as a guide, 3 m from the edge of the sink.
- Table 1 (work that need not be notified) and Table 2 (special locations: bath or shower, pools, saunas; special installations: electric floor or ceiling heating, outdoor lighting or power, solar PV, small generators, extra-low voltage lighting not pre-assembled). Additional notes: (a) notifiable jobs include new circuits and extensions of circuits in kitchens and special locations; (b) replacement, repair and maintenance generally not notifiable even there; (c) [V] "Consumer unit replacements are, however, notifiable."; (j) a socket outlet on an external wall is notifiable; (m) fitting or replacing cookers and electric showers is not notifiable unless a new circuit is needed; (n) new central heating control wiring is notifiable.
- The gov.wales guidance page opens with [V] "you will have to follow new rules": it is an old page that still reads as if 2005 were recent. Useful for the rule, not for dates.

#### C10. Building Act 1984, sections 35 and 36
URLs: https://www.legislation.gov.uk/ukpga/1984/55/section/35 (`ba_s35`), /section/36 (`ba_s36`)
Read: full text of both sections with amendment notes.
Version: s35 up to date to 24 September 2026; s36 up to date to 25 September 2026.

Establishes:
- s35(1), as substituted by the Building Safety Act 2022: [V] "A person who contravenes a provision of building regulations, or a requirement imposed by virtue of any such provision, commits an offence." s35(4): on indictment, up to two years' imprisonment or a fine or both; on summary conviction, imprisonment up to the maximum summary term for either-way offences or a fine; plus a daily fine for continuing default. In force for England from 2023 and for Wales fully from 1 July 2026.
- s36(1): the building control authority may by notice require the owner to pull down or remove contravening work or alter it to comply. s36(3): if not done in 28 days, the authority may do it and recover its expenses.
- **s36(4): a section 36 notice may not be given after [V] "10 years" from completion of the work.** The words were substituted by the Building Safety Act 2022 s39(3) (England from 2023; Wales in full from 1 July 2026). Before that the period was 12 months (my knowledge, not read in the pre-2023 text: see Gates).

#### C11. Law Society, TA6 Property Information Form (6th edition, 2025): explanatory notes for sellers and buyers
URL: https://www.lawsociety.org.uk/topics/property/ta6-6th-edition-explanatory-notes (raw `ta6_notes`)
Read: full text. Dated 13 October 2025; reflects the Law Society's understanding [V] "as of 1 September 2025". The form itself not read.

Establishes:
- Questions 5.1 and 5.2 deal with planning permission, building regulations and competent person certificates. Questions 11.1 and 11.2 with electrical installation work and certificates.
- [V] "From 1 January 2005, all electrical installation work must follow building regulations." The notes say building regulations [V] "have been different in England and Wales since 31 July 2014."
- Most electrical work requires [V] "a building control completion certificate", "the installer's Building Regulations Compliance Certificate, or" "the BS7671 Electrical Installation Certificate".
- 11.3: an EICR [V] "is not a legal requirement for the sale of property in England and Wales."
- On buying: buyers may need approvals and completion certificates for alteration or fitting of glazing, pipes, cables and gas or electrical equipment, or evidence the work was done by registered competent persons.

#### C12. The Electrical Safety Standards in the Private Rented Sector and Social Rented Sector (England) Regulations 2020 (SI 2020/312), regulation 3
URL: https://www.legislation.gov.uk/uksi/2020/312/regulation/3 (`ll_reg3`)
Read: regulation 3(1) and (2). No known outstanding effects.

Establishes: a landlord must ensure every electrical installation is inspected and tested by a qualified person before the tenancy starts and at regular intervals, meaning [V] "at intervals of no more than 5 years", or sooner if the last report requires. The title now includes the social rented sector (amended). England only.

---

### UK: gas (Great Britain and Northern Ireland)

#### C13. The Gas Safety (Installation and Use) Regulations 1998 (SI 1998/2451), regulations 3 and 36
URLs: https://www.legislation.gov.uk/uksi/1998/2451/regulation/3 (`gs_reg3`), /regulation/36 (`gs_reg36`)
Read: full text of reg 3; reg 36 definitions and 36(3).
Version: [V] "There are currently no known outstanding effects" for either regulation. Extent of reg 3: England, Wales and Scotland.

Establishes:
- **Reg 3(1)**: [V] "No person shall carry out any work in relation to a gas fitting or gas storage vessel unless he is competent to do so." This applies to everyone, including a householder.
- Reg 3(2): employers and self-employed persons in control of the work must ensure 3(1) is complied with.
- **Reg 3(3)**: [V] "no employer shall allow any of his employees to carry out any work in relation to a gas fitting or service pipework and no self-employed person shall carry out any such work, unless the employer or self-employed person, as the case may be, is a member of a class of persons approved for the time being by the Health and Safety Executive". This is the registration duty. **Its words reach employers and the self-employed; they do not reach a householder working on their own home.**
- Reg 3(4): 3(3) does not apply to (a) replacing a hose or regulator on a portable or mobile space heater, or (b) replacing a hose connecting a refillable cylinder to installation pipework.
- Reg 3(7): no person shall falsely pretend to be a member of the approved class.
- Reg 36(3)(a): a landlord shall ensure each appliance and flue is checked for safety within 12 months of installation and at intervals of not more than 12 months (with reg 36A allowing some flexibility on timing); 36(3)(c) a record is kept. "Lease" here means a lease for less than 7 years or a periodic tenancy (36(1)).

#### C14. HSE, L56: Safety in the installation and use of gas systems and appliances. Approved Code of Practice and guidance, 5th edition (2018)
URL: https://www.hse.gov.uk/pubns/priced/l56.pdf (raw `l56`)
Read: copyright page on legal status; regulation 2 and 3 ACOP and guidance paragraphs 52 to 93 in full; paragraphs 120 to 121; glossary entry "gas engineer". Other parts by search only.
Version: [V] "L56 (Fifth edition) Published 2018", revised for SI 2018/139.

Establishes the precise position on DIY gas work, which is the point of confusion the brief names:
- Para 52 (guidance to reg 2(1)): [V] "For the purposes of GSIUR, 'work' includes do-it-yourself activities, work undertaken as a favour for friends and relatives, and work for which there is no expectation of reward or gain". [V] "This means that anyone carrying out such work must have the necessary competence, as required by regulation 3(1). However, membership of an HSE-approved class of persons (under regulation 3(3)) is required only by businesses carrying out gas-fitting work."
- Para 83 (guidance to reg 3(1) to (2)): [V] "do-it-yourself gas engineers and those performing favours for friends and relatives all need to have the required competence."
- **Para 81 is Approved Code of Practice text, not guidance**: [V] "Gas work should only be undertaken: (a) by a person who has successfully completed an industry-recognised training course followed by assessment of competence"; or (b) a currently or previously registered person who has proved competence through a certification scheme; or (c) at premises outside the regulations, a person with an appropriate full training course and assessment.
- Legal status of ACOP (copyright page): [V] "the Code has a special legal status. If you are prosecuted for breach of health and safety law, and it is proved that you did not follow the relevant provisions of the Code, you will need to show that you have complied with the law in some other way or a Court will find you at fault."
- Para 85: competence is [V] "a combination of practical skill, training, knowledge and experience".
- Para 93: [V] "At the time of publication of this edition of the ACOP, the only body with such approval is the Gas Safe Register".
- Para 121: the ban on using a source of ignition when searching for a gas escape (reg 6(5)) [V] "extends to householders and other members of the general public."

So, precisely: in Great Britain it is **not** unlawful as such for a householder who is not Gas Safe registered to do gas work on their own home; the registration duty in reg 3(3) binds businesses. It **is** unlawful for anyone, householder included, to do gas work without being competent (reg 3(1)), and the ACOP's measure of competence is industry-recognised training followed by assessment. A lesson that says "it is illegal to do any gas work yourself" overstates the law; a lesson that says "you may legally do your own gas work" misleads, because the competence test is one almost no householder meets. Both HSE and Gas Safe advise against DIY (C15, C16).

#### C15. HSE, "Domestic gas: frequently asked questions" and "Gas safety: home owners"; HSE "Gas Safe Register" page
URLs: https://www.hse.gov.uk/gas/domestic/faqs.htm (`hse_faq`), https://hse.gov.uk/gas/domestic/faqownerocc.htm (`hse_ownerocc`), https://www.hse.gov.uk/gas/domestic/newschemecontract.htm (`hse_gsr`)
Read: the home-owner FAQ in full; the landlord and tenant FAQ sections by search; the Gas Safe Register page in full.

Establishes:
- [V] "Anyone employed to work on gas appliances in domestic premises must be a Gas Safe registered engineer and competent in that area of gas work. The gas engineer's competencies are clearly marked on the back of the engineer's Gas Safe Register ID card." Note the word "employed".
- [V] "HSE strongly advises that all gas appliances, flues and pipework should be installed, regularly maintained and serviced at least annually by a Gas Safe registered engineer."
- [V] "It is illegal for anyone to use a gas appliance if they suspect it is unsafe."
- Suspected leak: call the National Gas Emergency number 0800 111 999, open doors and windows, shut off at the meter control valve if you know where it is.
- Moving a bayonet-fitted cooker temporarily to clean behind it is not "work"; [V] "Any other type of installation/reinstallation is regarded as gas work and must be carried out by a Gas Safe registered engineer." (That sentence sits in the landlord section, as item 5 of HSE's tips on tenants' own appliances, not the tenant section; corrected at Stage 4, lesson 10, 2026-09-26.)
- [V] "Every year around 7 people die from gas-related carbon monoxide (CO) poisoning." (HSE, undated figure.)
- HSE Gas Safe page: Gas Safe Register covers natural gas and LPG work in [V] "Great Britain, Northern Ireland, the Isle of Man and Guernsey"; launched 1 April 2009, replacing CORGI; run by Capita Gas Registration and Ancillary Services Ltd under a concession from HSE. ID card: [V] "The front of the card has a photograph, a registration number and an expiry date and the reverse shows the different categories of work that the engineer is qualified to undertake, eg cookers, boilers, gas fires."

#### C16. Gas Safe Register, "Don't DIY when it comes to gas appliances" (home improvements)
URL: https://www.gassaferegister.co.uk/gas-safety/home-gas-safety/home-improvements/ ; live site returned HTTP 403 to curl, so read from Internet Archive capture 20251023004454 (raw `gsr_diy_ia`).
Read: full page text of the capture.

Establishes:
- [V] "By law, anyone carrying out work on gas appliances and fittings as part of their business must be competent and registered with us." This matches reg 3(3) exactly: "as part of their business".
- Advice: [V] "Don't DIY with gas appliances, always use a Gas Safe registered engineer"; ask to see the ID card.
- [V] "It is illegal for someone who is not Gas Safe registered to fit a gas appliance or do other gas work and then have the work checked by a Gas Safe registered engineer. Both parties would be breaking the law." This is Gas Safe's statement; I did not find its legal basis in reg 3 as it applies to a householder (see Gates).
- What a consumer may do: [V] "you can perform the tasks set out in the user's instructions, (provided by the appliance manufacturer) that are intended for the user to carry out. This would not be a breach of the law." The consumer may replace or adjust a component designed to be operated or replaced by the consumer, for example a cooker control knob, but should not disturb gas-carrying components or anything affecting combustion.

#### C17. The Gas Safety (Installation and Use) Regulations (Northern Ireland) 2004 (SR 2004/63), regulation 3
URL: https://www.legislation.gov.uk/nisr/2004/63/regulation/3 (`ni_gas3`)
Read: full text of reg 3. No known outstanding effects.

Establishes: the NI regulation mirrors GB reg 3: 3(1) competence for all; 3(3) employers and self-employed must be members of a class approved by [V] "the Executive" (HSENI); 3(4) the same hose and regulator exceptions. With C15 (Gas Safe covers NI), the practical answer is that Gas Safe registration applies in Northern Ireland too, under the NI regulations. I did not read an HSENI page confirming the approval (see Gates).

---

### UK: Scotland

#### C18. The Building (Scotland) Regulations 2004 (SSI 2004/406): regulation 5, Schedule 3, and the regulation 2 definition of "house"
URLs: https://www.legislation.gov.uk/ssi/2004/406/regulation/5 (`sc_reg5`), /schedule/3 (`sc_sch3`), /regulation/2 (`sc_reg2`)
Read: reg 5 in full; Schedule 3 in full (types 1 to 26 with exceptions); reg 2 definition of "house" from raw HTML.
Version: [V] "There are currently no known outstanding effects" for reg 5 and Schedule 3.

Establishes:
- Reg 5: work of a kind in Schedule 3 [V] "shall meet the standards required by regulations 8 to 12 but shall not, subject to the exceptions and conditions, require a building warrant." Exempt from a warrant is not exempt from the standards.
- Schedule 3, **type 1**: [V] "Any work to or in a house." Exceptions include work increasing floor area, demolition or alteration of the roof, external walls or elements of structure, underpinning, work adversely affecting a separating wall, change in the method of wastewater discharge, and work (other than types 3 to 26) to a house with a storey at more than 4.5 m.
- "House" (reg 2): [V] "a dwelling on one or more storeys, either detached or forming part of a building from all other parts of which it is divided only vertically". **A flat is not a house**, so type 1 does not cover flats.
- Type 22: extra-low voltage installations (not exceeding 50 V ac or 120 V dc) not connected to a higher-voltage supply.
- Type 24 (condition B, "no worse than at present"): replacement of a fitting or equipment by another of the same general type, including a sanitary facility, gutter, solid fuel appliance, [V] "electrical fixture", ventilation fan, kitchen fitments. Exceptions: any door, window or rooflight; [V] "Any oil firing or gas fired boiler."
- Type 20: a door, window or rooflight when the work includes replacing the frame, is listed among work not requiring a warrant, subject to condition A (it must meet the standards).
- Type 6: work on a fixed combustion appliance installation is exempt, except solid fuel over 50 kW, oil over 45 kW, gas over 70 kW net input, any work on a chimney, flue pipe or constructional hearth, and oil tanks over 90 litres.

#### C19. Scottish Government, Building standards technical handbook 2022: domestic, clauses 0.5 and 4.5
URLs: https://www.gov.scot/publications/building-standards-technical-handbook-2022-domestic/0-general/0-5-buildings-work-services-fittings-equipment-not-requiring-warrant/ (`sc_hb05`); .../4-safety/4-5-electrical-safety/ (`sc_hb45`)
Read: clause 0.5 explanation and table in full; standard 4.5 and its introductory clauses.
Version: handbook dated 1 June 2022, [V] "applies to a building warrant submitted on or after 1 June 2022 and to building work which does not require a warrant commenced from that date." I did not check whether a later handbook has superseded it (see Gates).

Establishes:
- 0.5.1: type 1 [V] "means much more work to or in houses does not need a warrant", listing examples including [V] "electrical work", an en-suite bathroom, a central heating system. Exception example: [V] "work adversely affecting a separating wall (e.g. installing recessed electrical sockets)".
- [V] "types 1 and 2 permit virtually any work to be carried out to 1 or 2 storey houses".
- Standard 4.5: every building must be designed and constructed so that the electrical installation does not [V] "threaten the health and safety of the people in, and around, the building" or "become a source of fire". Guidance: installations should follow BS 7671:2008; [V] "electrical installation work should be inspected and tested by persons who possess sufficient technical knowledge, relevant practical skills and experience".

#### C20. mygov.scot, "Approved certification"; and Scottish Government, "Regulation of electricians in Scotland: research report", Appendix 3 (Pye Tait, published 7 June 2019)
URLs: https://www.mygov.scot/approved-certification (`mygov_cert`); https://www.gov.scot/publications/regulation-electricians-scotland/pages/10/ (`sc_elec_app3`)
Read: both in full.

Establishes:
- Certification [V] "only applies to work that needs a building warrant." [V] "Using an approved certifier is optional". Approved certifiers of construction certify electrical installation, drainage, heating and plumbing; they work for an "approved body" listed on the Scottish Government Certification Register.
- Pye Tait appendix: for [V] "'Rewiring', 'Wiring to artificial lighting' or 'Electrical work associated with new boiler (large)', a building warrant is required for flats and buildings over three storeys, while houses up to two storeys are exempt." Where a warrant is needed, the work must be certified as compliant with BS 7671.
- The same appendix's summary of England ("all electrical work involving ... alterations to existing circuits ... has to be reported") is wrong against reg 12(6A) and AD P para 2.7. A government-published report can misstate the English rule; draft from the primary.
- The certifier scheme names (SELECT, NICEIC) appear only in search snippets, not in anything I read; mygov.scot names no schemes.

#### C21. IET, "Part P: Scotland and Northern Ireland"
URL: https://electrical.theiet.org/bs-7671/building-regulations/part-p-scotland-and-northern-ireland/ (`iet_scotni`)
Read: full short page.

Establishes: Scottish requirements sit in standard 4.5 (electrical safety) and 4.6 (electrical fixtures, domestic); [V] "Part P electrical self-certification schemes in England & Wales do not apply to work in Scotland." It says Northern Ireland has Technical Booklet E 2005 supporting the Building Regulations (Northern Ireland) 2000; that is an old reference (see C22).

---

### UK: Northern Ireland

#### C22. The Building Regulations (Northern Ireland) 2012 (SR 2012/192), contents; Electrical Safety First, "Building regulations" (Northern Ireland tab); NI Department of Finance and nidirect pages
URLs: https://www.legislation.gov.uk/nisr/2012/192/contents (`ni_br_contents`); https://www.electricalsafetyfirst.org.uk/find-an-electrician/building-regulations/northern-ireland/ (`esf_ni`); https://www.finance-ni.gov.uk/articles/building-regulations-northern-ireland (`dof_br`); https://www.nidirect.gov.uk/articles/how-apply-building-regulations-approval (`nid_apply`)
Read: the contents list of the 2012 Regulations (not the text of each Part); ESF page in full; DoF and nidirect pages in full (short).

Establishes:
- The 2012 NI Regulations' Parts are: A interpretation, B materials, C site and moisture, D structure, E fire, F fuel and power, G sound, H stairs, J solid waste, K ventilation, L combustion appliances and fuel storage, M broadband infrastructure, N drainage, **P "Sanitary appliances, unvented hot water storage systems and reducing the risk of scalding"**, R access, V glazing. **There is no Part on electrical safety**, and **"Part P" in Northern Ireland means something else entirely.**
- ESF: [V] "There are currently no statutory requirements for domestic electrical installation work in Northern Ireland." and [V] "At the present time Northern Ireland has no equivalent statutory requirement." ESF [V] "strongly recommends that you engage a competent registered electrician".
- DoF: district councils enforce; building control officers [V] "may also serve a contravention notice". nidirect: [V] "You must tell the council in your area about building work you want to do." Neither page mentions electrical work.
- A search-result summary claimed Part P applies in NI; that is contradicted by the primary contents list and by ESF. Snippet only, and wrong.

---

### UK: other notifiable work, in brief (from C4, C7, C8, C18)
- **Replacement windows and doors** (England and Wales): building work; either a scheme member (Fensa, CERTASS, Assure, Blue Flame, Certsure, NAPIT) or building control. A replacement external door with not more than 50% glazing is in Schedule 4 and not notifiable. Scotland: replacing a door or window including the frame is type 20 (no warrant, must meet standards).
- **Boilers and heating** (E and W): heat-producing gas appliance by the Gas Safe class (Sch 3 item 1); oil (OFTEC and others, item 2); solid fuel (HETAS and others, item 3); heating or hot water system or controls (item 4). GOV.UK lists "install or replace a heating system" and "add extra radiators" as needing approval.
- **Unvented hot water cylinders**: Part G3(3) requires safety devices on a hot water storage vessel; a small vessel not over 15 litres is Schedule 4. Who may install a larger unvented system is set out in Approved Document G, which I did not read (Gates).
- **Drainage**: Schedule 4 excludes any work to underground drainage; bathroom installations by a scheme member exclude shared or underground drainage. Part H itself not read.
- **Structural alterations, including removing a chimney breast or a loadbearing wall**: material alteration under reg 3(2) to (3) because Part A is a relevant requirement; in Scotland, alteration of an element of structure is an exception to type 1 and needs a warrant.
- **Planning is separate**: [V] "Building regulations approval is different from planning permission. You might need both." (GOV.UK). Permitted development rules were not read.
- **Party Wall etc. Act 1996**: relevant where work cuts into a party wall (for example some chimney breast removals). Not read; mention only as a pointer, if at all.

---

### US

#### C23. International Residential Code (ICC), section R105 (permits; work exempt from permit)
URL tried: https://codes.iccsafe.org/content/IRC2024V2.0/chapter-1-scope-and-administration and an Internet Archive capture of the 2021 edition.
Read: **not read.** The ICC site is rendered by script (21 words extracted) and WebFetch returned HTTP 403; the archive capture was also empty. Nothing about R105 may be stated from this research.

#### C24. California: Business and Professions Code sections 7044 and 7048; CSLB Industry Bulletin 24-07
URLs: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7048 (`ca_7048`), ...sectionNum=7044 (`ca_7044`); https://www.cslb.ca.gov/Resources/IndustryBulletins/2024/AB%202622%20Implementation.FINAL.pdf (`cslb_ab2622`)
Read: both sections in full; the CSLB bulletin in full (English text).
Versions: 7048 [V] "Amended by Stats. 2025, Ch. 67, Sec. 12. (AB 1170) Effective January 1, 2026." 7044 amended by SB 944, effective 1 January 2017. Bulletin dated 31 December 2024.

Establishes:
- **7048(a)**: the contractors' licensing chapter does not apply to work on one project [V] "if the aggregate contract price for labor, materials, and all other items is less than one thousand dollars ($1,000), that work or operation being considered of casual, minor, or inconsequential nature, and the work or operation does not require a building permit." 7048(c): the exemption is lost if the person advertises as a contractor or employs another person on the work.
- CSLB bulletin: from 1 January 2025 AB 2622 (Carrillo, Chapter 240, Statutes of 2024) raised the minor work exemption from $500 to $1,000, [V] "but there is a catch: the work cannot require a permit, and the unlicensed person cannot employ anyone for the project."
- So the brief's framing ("licence required for jobs of $1,000 or more") is incomplete: below $1,000 a licence is still required if the job needs any permit or the worker employs anyone.
- **7044(a)(1)**: the chapter does not apply to [V] "An owner who builds or improves a structure on his or her property" where none of the improvements are intended or offered for sale and the owner personally does all the work (or the owner's wage-paid employees do). 7044(a)(3): a homeowner improving their principal residence, where the work is done before sale, they have resided there 12 months before completion, and they have not used the exemption on more than two structures more than once in three years. 7044(b)(1): sale or offer within one year after completion creates a rebuttable presumption the work was for sale.
- These sections concern contractor licensing only. Whether a California homeowner may pull an electrical or plumbing permit is a local building department matter, not read.

#### C25. Texas: TDLR, "Exemptions to Electrician Licensing"; Texas Occupations Code chapter 1301 (Plumbing License Law), TSBPE unofficial plain-view text, June 2023
URLs: https://www.tdlr.texas.gov/electricians/exemptions.htm (`tx_exempt`); https://tsbpe.texas.gov/wp-content/uploads/documents/TSBPE_PlumbingLicenseLaw(PlainView)_June2023.pdf (`tx_plaw`)
Read: TDLR page in full; Plumbing License Law sections 1301.002(7), 1301.051, 1301.052 in full, table of contents. The official Texas statutes site (statutes.capitol.texas.gov) returns a script-only shell to curl, and Justia returned 403, so section 1305.003 itself was **not read**; I have TDLR's description of it.
Version: TDLR page undated. The plumbing text is marked [V] "JUNE 20, 2023 (UNOFFICIAL VERSION)".

Establishes:
- TDLR: those who do electrical work on [V] "a dwelling by a person who owns and resides in the dwelling (1305.003(a)(6) )" are not required by the state to be licensed. And: [V] "*NOTE: Municipal or regional regulations may override these exemptions, as outlined in Sec. 1305.201 of the Texas Electrical Safety and Licensing Act."
- **1301.051**: [V] "A property owner is not required to be licensed under this chapter to perform plumbing in the property owner's homestead."
- 1301.002(7): "plumbing" includes piping used to [V] "supply, distribute, circulate, or recirculate water, other liquid, or gas", so the homestead exemption from the state plumbing licence extends to gas piping in the owner's homestead as a matter of the licensing statute.
- 1301.052: further exemptions for certain rural or unplatted property outside municipalities or in small municipalities, except plumbing in connection with new construction, repair or remodelling.
- None of this removes permit and inspection requirements, which are local. "No state general contractor licence in Texas" is snippet only.

#### C26. Florida Statutes (2026), sections 489.103(7) and 489.503(6)
URLs: http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/Sections/0489.103.html (`fl_489103`); ...0489.503.html (`fl_489503`)
Read: 489.103(7) in full including the disclosure statement items 1 to 12 (item 12 truncated in my extract); 489.503(6)(a) to (c).
Version: [V] "The 2026 Florida Statutes".

Establishes:
- **489.103(7)(a)1**: exempt are [V] "Owners of property when acting as their own contractor and providing direct, onsite supervision themselves of all work not performed by licensed contractors", when building or improving one-family or two-family residences [V] "for the occupancy or use of such owners and not offered for sale or lease". **Sale or lease, or offering, within 1 year after completion creates a presumption the work was for sale or lease.**
- 489.103(7)(b): the exemption does not cover anyone employed by or contracted to the owner acting as a contractor; the owner may not delegate supervision except to a licensed person within scope.
- 489.103(7)(c): the owner [V] "must personally appear and sign the building permit application" and satisfy local requirements proving understanding of the disclosure statement. Violations: the permitting agency shall withhold final approval, revoke the permit or pursue action.
- Disclosure statement (selected): item 3, the owner-builder is [V] "the responsible party of record on a permit"; item 7, the owner may be liable for injuries to unlicensed workers and [V] "My homeowner's insurance may not provide coverage for those injuries"; item 8, unlicensed workers must be the owner's employees, with tax withholding and workers' compensation.
- **489.503(6)(a)** (electrical contracting): exempt is [V] "An owner of property making application for permit, supervising, and doing the work in connection with the construction, maintenance, repair, and alteration of and addition to a single-family or duplex residence for his or her own use and occupancy and not intended for sale". Proof of sale or lease of more than one such structure within 1 year is prima facie evidence of construction for sale. 489.503(6)(c): the owner must personally appear and sign the permit application.

#### C27. New York City: Department of Buildings, "Project Requirements for Owner: Residential and Community Facilities"
URL: https://www.nyc.gov/site/buildings/property-or-business-owner/project-requirements-owner-residential.page (`nyc_res`)
Read: full page. Undated.

Establishes:
- Work exempt from permit under NYC Administrative Code §28-105.4.5, including ordinary plumbing work (§28-105.4.4) and minor alterations and ordinary repairs (§28-105.4.2). Exempt from permit is not exempt from licensing.
- [V] "AC 28-105.4.4 lists work considered ordinary maintenance and repair, including allowable replacement/relocation of plumbing, gas piping, equipment and components, which must be performed by a Licensed Master Plumber."
- [V] "Electrical work including new installation, alteration, or repair of electric wiring, wiring apparatuses, appliances or equipment requires a separately submitted electrical permit and shall be performed by a New York City licensed electrical contractor".
- The page offers no homeowner route for plumbing, gas or electrical wiring. New York State outside the city: not read.

#### C28. Washington State: RCW 19.28.261; L&I form F500-094-000, Property Owner Electrical Work Permit Application (07-2026)
URLs: https://app.leg.wa.gov/RCW/default.aspx?cite=19.28.261 (`wa_rcw`); https://lni.wa.gov/forms-publications/F500-094-000.pdf (`wa_form`)
Read: RCW 19.28.261(1) to (5)(a); the form's instructions and affidavit.

Establishes:
- RCW 19.28.261(1): no licence or certified electrician is required [V] "in order to do electrical work at his or her residence or farm or place of business or on other property owned by him or her unless: (a) The electrical work is on the construction of a new building intended for rent, sale, or lease; or (b) The electrical work is on property that is offered for sale within 12 months after obtaining the property."
- Form: [V] "In Washington, only licensed electrical contractors employing certified electricians may perform electrical work. Property owners ... may apply for an exemption from these requirements by completing this application and signing the affidavit below before beginning electrical work". Permit valid 1 year. Some cities inspect instead of L&I.
- This is a clear example of a homeowner exemption that is **a permit, not a free pass**: the owner applies, signs an affidavit and is inspected.

#### C29. Gas in the US: Columbia Gas of Ohio, "Safe appliance installation"; plus C25 and C27
URL: https://www.columbiagasohio.com/safety/home-safety/appliance-safety/safe-appliance-installation (`colgas`)
Read: full page.

Establishes: [V] "For your safety, a qualified professional should perform all work on natural gas lines and equipment inside the home." [V] "Have qualified professionals install natural gas appliances to make sure they're properly connected. Never attempt this yourself!" [V] "If you have flexible appliance connectors, do not reuse them." The utility says "qualified", not "licensed". Legal position: NYC requires a Licensed Master Plumber for gas piping (C27); Texas exempts a homestead owner from the state plumbing licence, which covers gas piping (C25). No general US rule was read.

---

### Why the rules exist: figures read

#### C30. NFPA Research, "Home fires caused by electrical distribution and lighting equipment", Richard Campbell, February 2022
URL: https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Electrical/osElectricalDistLighting.pdf (`nfpa_edl`)
Read: key findings and page 1 in full.

Establishes: US fire departments responded to an estimated average of [V] "32,620 home fires involving electrical distribution and lighting equipment per year in 2015–2019" [the dash is NFPA's]; these caused an estimated average of 430 civilian deaths and 1,070 civilian injuries a year, and [V] "$1.3 billion in direct property damage each year" (the body text on the same page says "$1.3 million": an internal inconsistency; use billion from the key findings, or omit). Wiring and related equipment accounted for 68% of these fires. The report does **not** attribute any share to DIY work.

#### C31. Electrical Safety First, "Advice for DIY-ers" and "DIY and electrics"
URLs: https://www.electricalsafetyfirst.org.uk/guidance/advice-for-you/diyers/ (`esf_diyers`); https://www.electricalsafetyfirst.org.uk/guidance/safety-around-the-home/diy-and-electrics/ (`esf_diy`)
Read: both pages in full.

Establishes: [V] "In a survey Electrical Safety First carried out with 1,000 electricians about their experiences fixing DIY projects: More than 30% had reports of electric shocks caused by incompetent DIY-ers. 15% reported that DIY had caused an electrical fire." The survey is undated on the page and is of electricians' reports, not a measure of how often DIY causes shocks or fires. The "almost half of severe shocks are caused by DIY" figure appeared only in a search summary (snippet only).

#### C32. Electrical Safety First, "Building regulations" pages (England, Wales, Scotland and Northern Ireland tabs)
URLs: .../building-regulations/england/ (`esf_eng`), /wales/ (`esf_wales`), /northern-ireland/ (`esf_ni`)
Read: full text (the tabs share one page body).

Establishes: electrical work must either be reported to building control or done by a registered electrician; a registered electrician's customer receives [V] "an Electrical Installation Certificate or Minor Work Certificate that confirms that the work meets BS 7671" and [V] "a Building Regulations Compliance Certificate". ESF also says [V] "By law, all homeowners and landlords must be able to prove that all electrical installation work meets Part P, or they will be committing a criminal offence." That sentence goes beyond the primaries I read: s35 makes contravening the regulations an offence; I found no duty to "be able to prove" compliance. Do not repeat it.

#### C33. Department of the Treasury Office of Economic Policy, Council of Economic Advisers and Department of Labor, "Occupational Licensing: A Framework for Policymakers", July 2015
URL: https://obamawhitehouse.archives.gov/sites/default/files/docs/licensing_report_final_nonembargo.pdf (`wh2015`)
Read: title page, and the passages on scale, quality and electricians, by search and surrounding context. Not read in full.

Establishes: [V] "about 25 percent of today's U.S. workforce is in an occupation licensed at the State level, up from less than 5 percent in the early 1950s". On quality: [V] "Overall, the empirical research does not find large improvements in quality or health and safety from more stringent licensing. In fact, in only two out of the 12 studies was greater licensing associated with quality improvements." On electricians: research found stricter requirements [V] "did not significantly affect the severity of injuries suffered among electricians", and that oral examination or experience requirements were [V] "associated with fewer per capita electricians." The report also recognises licensing's aims of quality and health and safety, and recommends targeting restrictions at [V] "legitimate public health and safety" concerns.

---

### (a) What this part says the field considers essential
1. **Know which jurisdiction you are in before you know the rule.** England, Wales, Scotland and Northern Ireland differ on electrical work; US rules differ by state and city.
2. **Two separate questions: "must the work comply?" and "must someone be told?"** In England and Wales Part P applies to all electrical work in a dwelling; only some is notifiable. In Scotland, work that needs no warrant must still meet the standards (reg 5).
3. **The legal routes for notifiable electrical work in England**: a registered competent person, a registered third-party certifier appointed before work starts, or notice to building control before work starts (AD P 3.1, 3.5, 3.8).
4. **Always notifiable in England**: new circuit, consumer unit replacement, additions or alterations in a bathroom zone or a room with a pool or sauna. **Additionally notifiable in Wales**: extending circuits in a kitchen, outdoors or on special installations.
5. **Gas**: competence is required of everyone; registration is required of businesses; HSE and Gas Safe advise every householder to use a Gas Safe engineer and check the card, including the categories on the back.
6. **Evidence matters when you sell**: certificates (competent person certificate, completion or regularisation certificate, EIC or Minor Works Certificate) are asked for on TA6.
7. **US homeowner exemptions are real but conditional**: own home, own hands, often owner-occupied, often with a permit and inspection, and often lost if the property is sold or let within a year.

### (b) Common misconceptions (each tied to the source that corrects it)
- **"Kitchen electrical work needs a registered electrician or building control."** Wrong in England since 6 April 2013 (reg 12(6A); AD P 2.7); right in Wales (Sch 4 Wales para 2; gov.wales).
- **"Part P means you can't do any electrical work yourself."** Wrong: England and Wales both allow DIY notifiable work by notifying building control before starting (AD P 3.8; gov.wales), and non-notifiable work needs no notice at all (AD P 2.7).
- **"Non-notifiable work doesn't have to meet any standard."** Wrong: P1 applies to all work; AD P 3.13 says it should be inspected, tested and certified to BS 7671; councils can enforce (3.14).
- **"It's illegal for a householder to do any gas work."** Overstated: reg 3(3) registration binds employers and the self-employed; L56 para 52 says registration [V] "is required only by businesses". But reg 3(1) competence binds everyone, and ACOP para 81 sets that bar at industry-recognised training and assessment.
- **"You can legally do your own gas work, so it's fine."** Misleading for the same reason; HSE and Gas Safe both advise against (C15, C16).
- **"Part P applies in Northern Ireland."** Wrong: NI's Part P is sanitary appliances and unvented hot water; there is no electrical Part (C22). Seen in a search summary.
- **"Part P self-certification schemes cover Scotland."** Wrong (IET, C21). Scotland uses building warrants and optional approved certifiers.
- **"In Scotland all rewiring needs a warrant."** Wrong for houses (type 1); right for flats (Pye Tait appendix; handbook 0.5).
- **"The council has only 12 months to act on non-compliant work."** Out of date: s36(4) now gives 10 years (Building Safety Act 2022 amendment).
- **"California lets unlicensed handymen do any job under $1,000."** Wrong since 2025: not if the job needs a permit or the handyman employs anyone (B&P 7048; CSLB 24-07).
- **"No permit needed in NYC means I can do it myself."** Wrong: permit-exempt ordinary plumbing must still be done by a Licensed Master Plumber (NYC DOB).
- **ELECSA listed as a current Part P scheme.** Not on the GOV.UK list read on 25 September 2026.

### (c) Contested questions
- **Should DIY electrical work be allowed at all?** Value question. The UK and Washington State answer yes, with notification or a permit; New York City answers no for wiring. Safety bodies (ESF, C31, C32) press for registered electricians; the counter-position (home owners' liberty and cost) I did not read in any source's own words. Established fact: the rules differ; which is better is contested.
- **The scope of Part P, 2005 to 2013.** Established fact that England narrowed notifiable work in 2013 (AD P 2013 "Main changes") and Wales did not (C2, C3). The arguments for and against, including the review that led to 2013, were **not read**; a lesson may report the change but not characterise the debate until a source is read.
- **Homeowner exemptions in the US.** Established fact that they exist in the forms read (TX, FL, WA, CA licensing). Whether they are wise is a value question.
- **Occupational licensing.** The 2015 federal report (C33) finds little evidence that stricter licensing improves quality or safety in most studies, and costs for workers and consumers; it still endorses licensing targeted at health and safety. Trade and safety bodies' case for licensing electricians and plumbers was read only in ESF's consumer advice form. The Institute for Justice and FTC material the brief names was **not read**. How established: contested; empirical findings are specific to the studies cited.
- **Gas Safe's "both parties would be breaking the law" statement** (C16) versus the text of reg 3 and L56 para 52. Contested interpretation; I could not tie it to a provision for a householder.

### (d) UK nations and US states compared

| Place | Electrical work by a householder | Gas work by a householder | Main primary read |
|---|---|---|---|
| England | Allowed. Notifiable (new circuit, consumer unit, bathroom zone, pool or sauna room) needs building control notice before starting, or a third-party certifier appointed before starting. All work must meet P1. | Not barred by registration duty (businesses only); competence required (reg 3(1)); HSE advises Gas Safe | SI 2010/2214 reg 12(6A); AD P 2013; GSIUR reg 3; L56 |
| Wales | Allowed. Notifiable also includes kitchen, outdoor and special installation work; notify before starting | As England (GSIUR extends to Wales) | SI 2010/2214 reg 12 and Sch 4 (Wales versions); AD P Wales 2006/2010 |
| Scotland | No warrant for most work in a house (1 or 2 storeys, type 1); warrant needed for rewiring in a flat; standard 4.5 always applies | As England (GSIUR extends to Scotland) | SSI 2004/406 reg 5, Sch 3; handbook 2022 |
| Northern Ireland | No statutory building regulation for domestic electrical work (ESF; no electrical Part in the 2012 Regulations) | NI 2004 Regs reg 3 mirrors GB; Gas Safe covers NI | SR 2012/192 contents; SR 2004/63 reg 3 |
| California | State contractor licence rules exempt an owner doing own work on own property not for sale (B&P 7044); permits local, not read | Not read | B&P 7044, 7048 |
| Texas | No state electrician licence needed for work on a dwelling you own and live in (TDLR, citing 1305.003(a)(6)); cities may override | Homestead owner exempt from state plumbing licence, and "plumbing" includes gas piping (1301.051, 1301.002(7)); permits local | TDLR page; Plumbing License Law (unofficial 2023) |
| Florida | Owner may act as own electrical contractor on own single-family or duplex home, personally applying for the permit (489.503(6)) | Not read specifically | Fla. Stat. 489.103(7), 489.503(6) (2026) |
| New York City | Licensed electrical contractor required for wiring work | Licensed Master Plumber for gas piping, even permit-exempt work | NYC DOB owner page |
| Washington State | Owner may do own work with a Property Owner Electrical Work Permit and inspection; lost if sold within 12 months of acquiring | Not read | RCW 19.28.261; L&I F500-094-000 |

### (e) Safety-critical and legal-accuracy notes for drafters
1. **Every rule gets its jurisdiction in the same sentence.** "In England, ..." not "In the UK, ...". The GOV.UK guide (C7) covers England and Wales in one summary that is only right for England on electrics; do not copy its list without saying so.
2. **Lessons give general information, not legal advice.** Say so where the lesson discusses the law, and point learners to the named primary or to their building control body, local building department or state licensing board.
3. **Do not say "illegal" for DIY gas in Great Britain without the precise wording.** Suggested framing: the law requires anyone working on gas to be competent, and businesses to be Gas Safe registered; the official guidance for householders is to use a Gas Safe engineer. Keep the permitted user tasks (those in the manufacturer's user instructions) distinct from gas work.
4. **Gas leak action**: HSE's steps are call 0800 111 999, open doors and windows, turn off at the meter if you know where it is; no ignition sources (reg 6(5), L56 para 121). UK number only; US learners should be told to follow their utility's instructions.
5. **Dates and edition numbers drift.** AD P (England) is still the 2013 edition and cites BS 7671:2008+A1:2011; the Welsh AD P is 2006 incorporating 2010 amendments; the Scottish handbook read is 2022. The current edition of BS 7671 itself was not read. Do not state an edition of BS 7671 as current from this research.
6. **Certificates**: a scheme member's compliance certificate is due to the occupier within 30 days of completion (reg 20(3)); GOV.UK says 8 weeks. Quote the regulation if a number is needed.
7. **Enforcement numbers**: s35 penalties and the s36 10-year window are for England and Wales, with Wales commencement from 1 July 2026. Do not apply them to Scotland or NI.
8. **US**: never say "homeowners can do their own electrical work in the US". Say it depends on the state and city, give one or two named examples with their conditions, and tell the learner to ask the local building department before starting.
9. **Statistics**: the NFPA figure is for US home fires involving electrical distribution and lighting equipment, not DIY; the ESF figure is a survey of electricians. Neither measures the risk of DIY work as such.

### (f) Gates: claims that need a primary read before a lesson states them
1. IRC section R105 (permits required; work exempt from permit): not read at all.
2. Texas Occupations Code 1305.003(a)(6) and 1305.201 in the official text (only TDLR's description read); whether TSBPE's functions have moved to TDLR; whether Texas has any state general contractor licence.
3. Whether a later Scottish domestic technical handbook (after June 2022) has replaced the one read, and whether its clause 0.5 wording is unchanged.
4. HSENI confirmation that Gas Safe Register is the approved class under the NI 2004 Regulations reg 3(3).
5. Gas Safe's claim that DIY work later checked by a registered engineer makes "both parties" law-breakers (Gas Safe's words, C16): find the legal basis or do not state it.
6. The previous s36(4) period (12 months) and the transitional rule for work completed before the 10-year limit took effect (SI 2023/993 reg 7 was named, not read).
7. Approved Document G on unvented hot water systems (who may install them); Approved Document J; Part H drainage specifics.
8. The Party Wall etc. Act 1996, and planning permitted development, if a lesson says more than "separate from building regulations".
9. Scottish approved certifier scheme names (SELECT, NICEIC): read the Scottish Government Certification Register or scheme pages.
10. California local permit rules for owner-occupants doing electrical or plumbing work; New York State outside NYC; Massachusetts (not attempted).
11. The 2013 Part P review and the arguments for and against: read a primary (consultation or response) before characterising it.
12. Institute for Justice and FTC positions on occupational licensing.
13. The current edition and amendment of BS 7671 (18th edition and its amendments) before naming it as current.
14. TA6 form question numbers from the form itself (only the explanatory notes read).
15. The ESF "almost half of severe electric shocks are caused by DIY" figure (snippet only).

### (g) Not read


*The part's own "Not read" list below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*
Strings suitable for a whole-word, case-sensitive blocklist. I have left off names of sources I did read (for example "Approved Document P", "Gas Safe Register", "L56", "BS 7671" on its own, which the read primaries name).

- International Residential Code
- IRC
- R105
- National Electrical Code
- NFPA 70
- International Plumbing Code
- Uniform Plumbing Code
- International Fuel Gas Code
- IFGC
- Approved Document G
- Approved Document J
- Approved Document H
- Approved Document A
- Party Wall etc. Act 1996
- Planning Portal
- Technical Booklet E
- BS 7671:2018
- 18th Edition
- ELECSA
- SELECT
- Institute for Justice
- License to Work
- Federal Trade Commission
- Electrical Safety Foundation International
- ESFi
- HSENI
- Certification Register
- Electrical Competent Person Register
- Competent Persons Register
- Texas Occupations Code 1305.003
- Health and Safety Code 19825

---

## Part D: Safety hazards in the home a DIYer meets

Researcher's scope note. This part covers prevention and the house side of six hazards: asbestos,
lead paint, carbon monoxide, electric shock and electrical fire, smoke alarms (briefly), and the
lesser hazards a DIYer meets (silica dust, solvent fumes, radon, mould). The first-aid response to
electric shock, electrical burns and carbon monoxide poisoning is already taught in First Aid and
CPR: lesson 2 teaches "power off before you touch" and carbon monoxide's signs with "get outside
and call from there"; lesson 10 teaches electrical burns (every one to 999 or A&E); lesson 14
repeats the CO response (do not go in after them; the National Gas Helpline 0800 111 999; Poison
Help in the US) and ends by saying this course "can assume you know carbon monoxide's signs and why
every room with a burning appliance needs an alarm". So this course should not re-teach symptoms
or the rescue; it should teach where the sources are, what keeps them safe (servicing, flues,
alarms, isolation) and what not to disturb.

All sources below were fetched live on 25 September 2026 with the scratchpad fetch helper (curl
plus pandoc or pdftotext) unless marked otherwise. "Wayback" means an Internet Archive capture,
with its capture ID. [V] marks wording copied from text I extracted. Nothing here came from
WebFetch except where marked [T] (in the end, no WebFetch output was usable: both NFPA pages
rendered empty).

---

### 1. Asbestos

#### D1. HSE, "Asbestos: FAQs"
https://www.hse.gov.uk/asbestos/faq.htm
Read: full text (about 5,400 words), direct fetch. Page stamp "Updated 2025-09-04".

- Health: HSE says asbestos is responsible for [V] "over 5000 deaths every year"; lists
  mesothelioma, asbestos-related lung cancer, asbestosis and diffuse pleural thickening; symptoms
  take [V] "anywhere between 15-60 years" to develop; the effect is cumulative.
- Ban date as HSE puts it here: asbestos was used [V] "until 1999, when it was banned". (This page
  gives 1999 only; the 1985 blue/brown date comes from UKHSA, D4.)
- Where it is found in a home (answer to "I have just bought a property"): any building [V] "built
  or refurbished before the year 2000"; list: asbestos cement products (pipes, flues, roofs), lagging
  on pipes and boilers, water tanks and toilet cisterns, asbestos insulating board (AIB, which
  [V] "closely resembles typical plasterboard"), loose asbestos in ceiling and wall cavities,
  sprayed coatings, [V] "textured decorative coatings (commonly referred to as Artex)", floor tiles,
  textiles and composites.
- The law in a private home ("What is the law concerning asbestos in domestic properties?"): the
  general duties in s.3(1) of the Health and Safety at Work etc Act 1974 protect householders from
  risks from work done in their homes; where the work involves asbestos, the Control of Asbestos
  Regulations 2012 also apply, in particular regs 11, 15 and 16. [V] "In owner-occupied domestic
  properties, the owners are not legally responsible for risks to contractors from asbestos, as the
  owners themselves are not engaged in any work activity."
- What a householder should do ("I think I may have asbestos in my home"): [V] "Do not try to
  repair or remove any asbestos materials yourself if you have not had any training for non-licensed
  asbestos work." Seek advice from the council's environmental health officer. If in good condition
  and unlikely to be damaged, [V] "it is often best to leave them where they are"; check its
  condition from time to time. Slight damage can sometimes be sealed or enclosed, but only with
  training. Sprayed coatings, lagging/insulation and AIB [V] "should only be removed by a contractor
  licensed by HSE". Tell any builder about known asbestos before work starts. [V] "HSE strongly
  encourages the use of trained professionals to repair or remove ACMs."
- Disposal: ACMs [V] "need to be legally disposed of as hazardous waste"; not with household waste;
  contact the local authority. Elsewhere on the page (for workers): double-wrap, red inner bag with
  asbestos labels, clear outer bag; intact AC sheets and textured-coated boards [V] "should not be
  broken up into smaller pieces".
- Context: "The presence of asbestos alone should not be a cause for concern" (answer on buildings
  people work in) [V].

#### D2. HSE, "Introduction to asbestos safety" (8-part guide): parts 1, 2, 6, 8 read
https://www.hse.gov.uk/asbestos/introduction/index.htm ; .../why-and-where.htm ;
.../deciding.htm ; .../relevant-law.htm
Read: full text of those four pages, direct fetch. Page stamp "Updated: 2021-03-01" on parts 1 and
6 (this may be a template date; treat as the date shown).

- Part 1: [V] "Asbestos is the greatest cause of work-related deaths in Great Britain. Around 5,000
  people die every year". [V] "Buildings constructed after 2000 are unlikely to contain asbestos."
  Activities that disturb it include [V] "drilling into a wall". [V] "When asbestos is in good
  condition and not disturbed the risk of exposure is extremely low."
- Part 1, "Members of the public and homeowners": contractors working in your home have a legal
  duty to protect you from their activities; owner-occupiers are not legally responsible for risks
  to contractors. Duty to manage covers non-domestic premises and the "common parts" of
  multi-occupancy domestic premises (purpose-built flats), not the inside of a private home.
- Part 2: you cannot see, smell or feel fibres; if you come across material you think may contain
  asbestos [V] "stop work immediately". Since 1999 using asbestos in construction or refurbishment
  has been illegal. Asbestos can be hidden, e.g. in cavity walls.
- Part 6 (licensing tiers, written for employers but the clearest official statement of what counts
  as low-risk): non-licensed examples include [V] "cleaning up small quantities of asbestos dust and
  debris", [V] "drilling textured decorative coatings to install fixtures or fittings",
  encapsulating asbestos in good condition. Notifiable non-licensed: AC products [V] "where the
  material will be substantially damaged or broken up"; large-scale removal of textured coatings by
  steaming or gelling. Licence required: any work on sprayed asbestos; [V] "most repair or any
  removal of asbestos insulation, for example lagging on pipes"; [V] "most work on asbestos
  insulating boards".
- Part 8 (relevant law): reg 4 duty to manage covers non-domestic premises; [V] "In people's homes,
  the duty to manage asbestos under regulation 4 of the Control of Asbestos Regulations does not
  apply but COSHH will." Landlords of domestic premises have HSW Act general duties to tenants.

#### D3. HSE, "Asbestos essentials task sheets" (index)
https://www.hse.gov.uk/asbestos/essentials/index.htm
Read: index page only (list of sheet titles), direct fetch. Individual sheets not read.

- Series for [V] "building, maintenance and allied trades on how to safely carry out non-licensed
  work". Sheets relevant to a home: A9 drilling holes in AC; A10 cleaning debris from guttering on
  an AC roof; A14 removing AC sheets, gutters and dismantling a small AC structure; A15 removing an
  AC water cistern; A26 drilling through textured coatings; A27 screws through textured coatings;
  A28 [V] "Removing textured coating from a small area, for example 1m²"; A29 clean-up after
  collapse of a textured-coated ceiling; EM1 what to do if you accidentally disturb asbestos; EM9
  disposal.
- Use: it shows the task-level methods exist and are written for trained workers. It does not by
  itself say a householder may do these tasks; D1 says not without training.

#### D4. UK Health Security Agency, "Asbestos: general information" (GOV.UK)
https://www.gov.uk/government/publications/asbestos-properties-incident-management-and-toxicology/asbestos-general-information
Read: full body, via GOV.UK content API. Public updated 15 May 2025 (note on page: format updated 4
March 2024, no significant content change).

- Types: serpentine (chrysotile, white) and amphiboles (crocidolite blue, amosite brown and
  others). Amphiboles [V] "are more hazardous to health than chrysotile (white)"; all forms are
  carcinogenic (IARC).
- Ban dates, this is the source for them: [V] "the importation of blue and brown asbestos has been
  banned in the UK since 1985. This ban was extended to include white asbestos in 1999." Note the
  precise wording: an importation ban (1985), extended (1999). HSE (D1, D2) says "banned in 1999"
  for use in construction.
- Intact materials [V] "pose very little risk"; [V] "Caution should be taken when doing DIY work in
  buildings containing asbestos."
- Children: not shown to be more susceptible per dose, but because of the long latency they have a
  greater lifetime risk of mesothelioma.
- If exposed: do not shake or brush fibres off; wet-wipe with a damp cloth using a gentle patting
  action; remove contaminated clothing (not over the head) and bag it; ask the local authority about
  disposal. (House-side decontamination advice, useful for the "if you have already disturbed it"
  box.)

#### D5. HSE, "Mesothelioma statistics for Great Britain, 2026" (July 2026) and "Asbestos-related disease statistics, Great Britain 2026" (July 2026)
https://www.hse.gov.uk/statistics/assets/docs/mesothelioma.pdf ;
https://www.hse.gov.uk/statistics/assets/docs/asbestos-related-disease.pdf
Read: summary pages and contents of both (pdftotext), not the annexes.

- [V] "There were 2,146 mesothelioma deaths in Great Britain in 2024", down from 2,255 in 2023 and
  below the 2011 to 2020 average of 2,508. 1,771 male, 375 female. Over 70% of deaths are in people
  over 75. Men who worked in the building industry remain most at risk.
- Asbestos-related disease report summary: around 5,000 deaths per year including mesothelioma,
  lung cancer and asbestosis; a similar number of lung cancer deaths to mesothelioma; 503 deaths in
  2024 mentioning asbestosis (excluding those also mentioning mesothelioma). Current statistics
  [V] "reflect the legacy of past working conditions"; the latest two years [V] "suggest overall
  numbers may now be starting to reduce."
- Use for a lesson: the scale is real and occupational in origin; the home DIYer's risk is from
  disturbing material, not from its presence.

#### D6. Control of Asbestos Regulations 2012 (SI 2012/632), legislation.gov.uk
https://www.legislation.gov.uk/uksi/2012/632/contents/made ; regulation 3
Read: contents page and regulation 3 (as made), direct fetch. Regulations 4, 11, 15, 16 not read
in the text (known only via HSE's description in D1 and D2).

- Reg 3(1): the Regulations apply to a self-employed person as to an employer and employee. That,
  with HSE's statements in D1/D2, is the basis for saying they bind work, not a householder doing
  their own DIY. The householder is not a dutyholder; a contractor in your home is.

#### D7. GOV.UK, "Asbestos in your home" (local transaction)
https://www.gov.uk/asbestos-in-home
Read: full content via API (it is a council-finder, about 50 words). Updated 24 September 2026.

- [V] "Get information about asbestos and its disposal from your local council." [V] "Available in
  England and Wales only". So disposal routes are council by council; Scotland and Northern Ireland
  need their own councils' pages (not read).

#### D8. US EPA, "Protect Your Family from Exposures to Asbestos"
https://www.epa.gov/asbestos/protect-your-family-exposures-asbestos
Read: full text, direct fetch. "Last updated on June 25, 2026".

- Identification: [V] "Generally, you can't tell whether a material contains asbestos simply by
  looking at it, unless it is labeled. If in doubt, treat the material as if it contains asbestos
  and leave it alone." Sampling [V] "can be more hazardous than leaving the material alone. Taking
  samples yourself is not recommended." If materials are undamaged and won't be disturbed [V] "you
  do not need to have your home tested for asbestos."
- [V] "If you think there may be asbestos in your home, don't panic."
- Homeowner Do's and Don'ts: leave undamaged material alone; limit access to damaged areas; have
  removal and major repair done by trained people; [V] "It is highly recommended that sampling and
  minor repair also be done by a trained and accredited asbestos professional." Don't dust, sweep
  or vacuum debris; don't saw, sand, scrape or drill; never use a power stripper on asbestos
  flooring; [V] "When asbestos flooring needs replacing install new floor covering over it, if
  possible."
- Repair = sealing (encapsulation) or covering (enclosure); removal is for remodelling or extensive
  damage; [V] "Improper removal may actually increase your and your family's exposure".
- Legal point: [V] "Federal law does not require persons who inspect, repair or remove
  asbestos-containing materials in detached single-family homes to be trained and accredited;
  however, some states and localities do require this."
- Hiring: use separate firms for inspection and removal to avoid a conflict of interest; written
  contract; what a good contractor does (wetting, sealing off the area, HVAC off, HEPA vacuum,
  never a regular vacuum, no breaking into small pieces).

#### D9. US EPA, "EPA Actions to Protect the Public from Exposure to Asbestos"
https://www.epa.gov/asbestos/epa-actions-protect-public-exposure-asbestos
Read: full text, direct fetch. "Last updated on January 21, 2026".

- 1989 rule (54 FR 29460, 12 July 1989): EPA [V] "attempted to ban most asbestos-containing
  products"; most of it [V] "was overturned in 1991 by the Fifth Circuit Court of Appeals". What
  remains banned under TSCA: corrugated paper, rollboard, commercial paper, specialty paper,
  flooring felt, and new uses begun after 25 August 1989 (40 CFR 763 subpart I).
- Other bans: under the Clean Air Act, spray-applied surfacing (1973, 1978) and friable pipe/block
  insulation (1975); CPSC banned asbestos in artificial fireplace embers and wall patching
  compounds in 1977 (16 CFR 1304, 1305).
- March 2024 final rule on chrysotile (see D10). November 2024: Part 2 risk evaluation (legacy
  uses). EPA's own caveat worth quoting: [V] "EPA's risk finding does not mean that every person
  with asbestos-containing material in their house or school will suffer adverse health effects.
  If asbestos is present in the insulation in an older building and the asbestos-containing
  insulation is not disturbed, the asbestos does not present a risk".

#### D10. US EPA, "Risk Management for Asbestos, Part 1: Chrysotile Asbestos"
https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/risk-management-asbestos-part-1-chrysotile-asbestos
Read: full text, direct fetch. "Last updated on May 5, 2026". The Federal Register final rule
itself not read.

- [V] "In March 2024, EPA announced a ban of ongoing uses of chrysotile asbestos". Chrysotile is
  [V] "the only known form of asbestos imported, processed or distributed for use in the United
  States". Phase-outs: import for chlor-alkali banned immediately with facility conversions over 5
  to 12 years; most sheet gaskets 2 years; oilfield brake blocks, aftermarket automotive brakes and
  linings, other vehicle friction products and other gaskets 6 months after the effective date.
- The page says nothing about litigation. Search snippets only (not read, not findings): trade and
  advocacy sites report that the rule was challenged in the Fifth Circuit, held in abeyance in 2025
  while the new EPA leadership reconsidered it, and argued in 2026. A lesson should say "EPA
  finalised a ban in March 2024" and not describe its current legal status without a primary read.
- Relevance to a householder: the 2024 rule addresses products still in commerce, not asbestos
  already in houses. A US lesson should not imply that the ban made old materials safe or that it
  requires removal.

#### D11. 40 CFR 61.141 (Asbestos NESHAP definitions), eCFR
https://www.ecfr.gov/api/versioner/v1/full/2026-09-01/title-40.xml?part=61&section=61.141
Read: the definition of "Facility" only, via eCFR API.

- [V] "Facility means any institutional, commercial, public, industrial, or residential structure
  ... but excluding residential buildings having four or fewer dwelling units". This is why the
  federal demolition and renovation asbestos rules generally do not reach a single-family home; state
  and local rules fill the gap, and they vary.

#### D12. CPSC, "Asbestos in the Home" (consumer guide)
https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Asbestos-in-the-Home
Read: nothing. Live URL returns 403 to curl; the Wayback capture (20251219083812) is CPSC's "Page
not found". The guide appears to have been removed. Do not cite it.

---

### 2. Lead paint

#### D13. 40 CFR Part 745 Subpart E (Residential Property Renovation), eCFR, as at 1 September 2026
https://www.ecfr.gov/api/versioner/v1/full/2026-09-01/title-40.xml?part=745&subpart=E
Read: whole subpart fetched (about 10,600 words); searched and read §745.82 (applicability), the
§745.83 definition of minor repair and maintenance, §745.85(a)(3) prohibited practices, and the
pamphlet provision.

- Applicability, §745.82(a): [V] "This subpart applies to all renovations performed for
  compensation in target housing and child-occupied facilities". The words "for compensation" are
  why a homeowner working on their own home is outside it. (Target housing is defined in subpart F,
  §745.103; pre-1978 is from EPA's pages, D14.)
- Minor repair and maintenance (the thresholds): activities [V] "that disrupt 6 square feet or less
  of painted surface per room for interior activities or 20 square feet or less of painted surface
  for exterior activities where none of the work practices prohibited or restricted by §
  745.85(a)(3) are used and where the work does not involve window replacement or demolition of
  painted surface areas." Jobs in the same room within 30 days count as one job.
- Prohibited and restricted practices, §745.85(a)(3): [V] "(i) Open-flame burning or torching of
  painted surfaces is prohibited." (ii) High-speed machines (sanding, grinding, power planing,
  needle gun, abrasive blasting, sandblasting) prohibited unless shrouded with a HEPA vacuum
  attachment. [V] "(iii) Operating a heat gun on painted surfaces is permitted only at temperatures
  below 1,100 degrees Fahrenheit."
- The pre-renovation pamphlet: [V] "Renovate Right: Important Lead Hazard Information for Families,
  Child Care Providers and Schools". Amended 12 November 2024 (89 FR 89457).
- Note: the rule does not use the phrase "dry sanding"; "dry sanding is prohibited" is not a
  statement of the rule. The rule restricts power sanding without HEPA shrouds; EPA's DIY advice
  (D15) and the UK leaflets (D19, D20) say to sand wet.

#### D14. US EPA, "Lead Renovation, Repair and Painting Program"
https://www.epa.gov/lead/renovation-repair-and-painting-program
Read: full text, direct fetch. "Last updated on June 17, 2026".

- [V] "In 1978, the federal government banned the sale of lead-based paint for use in homes".
  [V] "Approximately three-quarters of the homes in the United States built before 1978 still
  contain some lead-based paint." Children can live safely in them if paint is in good condition
  and surfaces are kept clean.
- The rule requires [V] "anyone paid to perform work that disturbs painted surfaces in homes,
  childcare facilities and preschools built before 1978" to be certified. [V] "In general, the RRP
  Rule does not apply to homeowners doing RRP projects in their own pre-1978 homes. However, it
  does apply if you rent all or part of your home, operate a childcare center in your home or if
  you buy, renovate and sell homes for profit (i.e., a house flipper)."
- EPA recommends homeowners hire a lead-safe certified contractor. 14 states plus one Tribe run
  their own authorised programmes (listed). National Lead Information Center 1-800-424-5323.
- Test kits: an EPA-recognised kit [V] "when used by a trained professional, can reliably determine
  that regulated lead-based paint is not present by virtue of a negative result." (Note the
  qualifier "trained professional".)

#### D15. US EPA, "Lead-Safe Renovations for DIYers"
https://www.epa.gov/lead/lead-safe-renovations-diyers
Read: full text, direct fetch. "Last updated on August 20, 2026". Linked PDFs ("Steps to LEAD Safe
Renovation, Repair and Painting", "Renovate Lead-Safe Fact Sheet") not read.

- Seven practices: determine if lead-based paint is present; set up safely; protect yourself;
  minimise dust; leave the work area clean; control waste; clean one more time.
- Determine: find the build year; pre-1978 may have lead paint, [V] "the older your home, the more
  likely"; EPA recommends a certified inspector or risk assessor; [V] "If you are unable to determine
  the age of your home, it's safest to assume the area you are renovating has lead-based paint".
- Set up: remove furnishings, plastic sheeting on floors, seal doors, airlock if needed, turn off
  forced-air heating and cooling and cover vents, close windows.
- Protect: [V] "A disposable N-100 certified respirator"; disposable coveralls, hat, shoe covers,
  eye protection, gloves; wash hands and face at every break; wash work clothes separately; no
  eating, drinking or smoking in the work area.
- Minimise dust: mist before sanding, scraping, drilling, cutting; wet-dry sandpaper; HEPA vacuum;
  [V] "Low-temperature heat gun (under 1,100 degrees Fahrenheit)"; chemical strippers (follow the
  label; some contain hazardous substances); power tools with HEPA attachments.
- Waste: most residential renovation waste is [V] "solid, non-hazardous waste" (routine residential
  maintenance), but check state and local rules. Final clean: mop, HEPA-vacuum, wet-wipe until
  cloths come away clean; optional dust-lead test by a certified technician.

#### D16. US EPA, "Renovate Right" landing page
https://www.epa.gov/lead/renovate-right-important-lead-hazard-information-families-child-care-providers-and-schools
Read: landing page only (about 500 words). The pamphlet PDF itself not read. "Last updated on June
15, 2026". Current version dated September 2011.

#### D17. US EPA, "Hazard Standards and Clearance Levels for Lead in Paint, Dust and Soil (TSCA Sections 402 and 403)"
https://www.epa.gov/lead/hazard-standards-and-clearance-levels-lead-paint-dust-and-soil-tsca-sections-402-and-403
Read: full text, direct fetch. "Last updated on December 19, 2025". Federal Register final rule not
read.

- [V] "In October 2024, EPA finalized stronger requirements". The dust-lead hazard standard (now
  called the dust-lead reportable level) went from 10 µg/ft² on floors and 100 µg/ft² on sills to
  [V] "any reportable level as analyzed by a laboratory recognized by EPA's National Lead Laboratory
  Accreditation Program", [V] "in recognition of the fact that there is no level of lead in blood
  that has been found to be safe for children."
- Post-abatement dust-lead action levels (formerly clearance levels): floors 10 to 5 µg/ft²; sills
  100 to 40; troughs 400 to 100. EPA recommends abatement at or above the action levels; below them
  but above reportable, best practices (HEPA vacuuming, damp cleaning).
- Relevance: this is a professional-assessment rule; a Foundation lesson needs only the principle
  (no safe level for children; clean-up standards got stricter in 2024) and should not teach the
  numbers as DIY targets.

#### D18. CDC, "CDC Updates Blood Lead Reference Value" and "Recommended Actions Based on Blood Lead Level" (clinical guidance)
https://www.cdc.gov/lead-prevention/php/news-features/updates-blood-lead-reference-value.html
(Wayback 20260919024350); https://www.cdc.gov/lead-prevention/hcp/clinical-guidance/index.html
(Wayback 20260914110553)
Read: full text of both via Wayback (CDC returns 403 to curl). Page dates shown: 25 August 2026
and 21 August 2025.

- [V] "As of October 28, 2021, CDC uses a blood lead reference value (BLRV) of 3.5 micrograms per
  deciliter (µg/dL)", updated from 5.0. It is the 97.5th percentile of US children aged 1 to 5
  (NHANES 2015 to 2018). [V] "It is not a health-based standard or a toxicity threshold."
- [V] "No safe level of lead in children has been identified." Low levels are linked to reduced
  IQ, attention and academic achievement.
- Clinical page: actions for BLL at or above 3.5 µg/dL; notes that BLLs below 5 may not trigger a
  HUD environmental investigation (HUD's rule itself not read).

#### D19. Defra, "Advice on lead paint in older homes" (leaflet PB10973), GOV.UK
https://www.gov.uk/government/publications/advice-on-lead-paint-in-older-homes ; PDF
https://assets.publishing.service.gov.uk/media/66324e4269098ded31fca7fc/withdrawn-pb10973-leadpaintleaflet.pdf
Read: full leaflet (about 780 words, pdftotext) and the GOV.UK record via API. First published 1
April 2013 on GOV.UK. **Withdrawn 26 April 2024**: [V] "This page has been withdrawn because it's
out of date." No replacement is linked.

- Dates as Defra gave them: [V] "up until the mid-1960s, lead was used to make some kinds of paint
  – for windows, doors and other woodwork as well as for some metal items, like radiators. A few
  minor uses continued until the 1980s." Guide: a home [V] "built before the 1960s" with original
  coats may have lead; thick paintwork is another clue.
- Advice: overcoat sound paint; for removal, use liquid (solvent or caustic) strippers; if using a
  hot-air gun, don't burn the paint, [V] "make sure your gun is set below 450°C"; moisten and use
  waterproof abrasive paper, [V] "don't use dry sandpaper"; mask with an EN143 P2 filter; keep
  children and pregnant women out; wash clothes separately.
- Status for drafters: it is the only UK government householder leaflet found and it is withdrawn.
  It can be cited as historical guidance, with the withdrawal stated, not as current government
  advice.

#### D20. British Coatings Federation, "Lead in painted surfaces: Repainting and removal. Guidance for the general public" (HS032, version 2.2, October 2025)
https://cdn.ymaws.com/coatings.org.uk/resource/resmgr/webpage_files/technical_publications/health&safety/hs_032_lead_in_painted_surfa.pdf
Read: full document (about 2,700 words), pdftotext. (Note: the task brief's title "Safe removal of
lead paint" did not turn up; this is the BCF's current public guidance. The BCF's PaintSafe web
page returned 403.)

- Dates as the BCF gives them: [V] "Lead pigments were taken out of most paints in the 1960s, and
  lead pigments and driers (at very low levels) were completely removed from decorative paints by
  1992. Surfaces painted before the 1990s could contain significant levels of lead." In its Do's
  list: test if [V] "renovating an old house (Pre-1995)".
- Do's: test; consider a professional decorator; contain the work area; keep dust to an absolute
  minimum; [V] "Use chemical stripper or wet abrasive paper"; mask, gloves, overalls; HEPA vacuum
  and wet-wipe; bag outer clothes and shoes.
- Don'ts: [V] "Remove paint if it is in a sound condition, especially if the lead paint is not the
  top layer – overcoating is the safest option"; let bystanders stay; [V] "Use dry abrasive paper or
  techniques"; [V] "Use blow lamps or gas torches to strip the paint"; create fumes by
  over-heating; burn lead-containing waste.
- Test kits: a positive means lead is present, but [V] "a negative reading should not be relied upon
  to show the absence of lead"; if you think lead could be present, get a professional test. The
  BCF notes (inconsistently within the same document) that kits are sold at DIY stores and that
  the main DIY outlets no longer stock them as a regular item.
- Hot-air gun: soften only, [V] "Take care that the paint does not burn"; gives no temperature
  (unlike Defra's 450°C).
- It points readers to the Defra leaflet as [V] "The UK government's official advice", without
  noting that the leaflet has been withdrawn.
- Children and pregnancy: keep them out of the work area; children absorb lead mostly by
  swallowing.

#### D21. UKHSA, "Lead: general information" (GOV.UK)
https://www.gov.uk/government/publications/lead-properties-incident-management-and-toxicology/lead-general-information
Read: full body via API. Updated 31 October 2024.

- [V] "the sale of lead paint was banned in the UK from 1992." Children [V] "may be exposed to lead
  in soils, dusts, and flakes of old paint" through hand-to-mouth behaviour. Pregnant women, infants
  and young children are particularly sensitive; effects in children include lower IQ and
  behavioural problems. Concerns: GP or NHS 111.

#### D22. Control of Lead at Work Regulations 2002 (SI 2002/2676), regulation 3; HSE "Working safely with lead"
https://www.legislation.gov.uk/uksi/2002/2676/regulation/3/made ; https://www.hse.gov.uk/lead/index.htm
Read: regulation 3 (as made) in full; HSE index page (a menu of links, 62 words). Rest not read.

- Reg 3: duties fall on employers and apply to the self-employed; employers owe a like duty, so far
  as reasonably practicable, to others affected by their work. So a paid decorator stripping lead
  paint in your home is covered; you, doing your own, are not. HSE's lead pages are for employers
  and workers.

#### Who says which date for UK lead paint (summary)
| Claim | Source |
|---|---|
| Lead used in some paints "until the mid-1960s"; homes "built before the 1960s" at risk; minor uses into the 1980s | Defra leaflet (withdrawn 2024), D19 |
| Lead pigments out of "most paints in the 1960s", completely removed from decorative paints "by 1992"; test if pre-1995 | BCF HS032 (2025), D20 |
| "sale of lead paint was banned in the UK from 1992" | UKHSA (2024), D21 |
| US: sale for residential use banned 1978; RRP covers pre-1978 homes | EPA, D14 |

---

### 3. Carbon monoxide

#### D23. The Smoke and Carbon Monoxide Alarm (England) Regulations 2015 (SI 2015/1693), regulation 4, as amended
https://www.legislation.gov.uk/uksi/2015/1693/regulation/4
Read: regulation 4 in full, current revised text (showing amendments F1 to F4). The amending
instrument is SI 2022/707, The Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022 (in
force 1 October 2022). Stage 4 note, lesson 11 (2026-09-26): this entry first said "SI 2022/578",
which is an unrelated leasehold instrument; the live page's amendments F1 to F6 all cite SI
2022/707, and F7 and F8 cite SI 2026/325 (reg 4(4) only).

- Reg 4(1)(a)(i): a smoke alarm [V] "on each storey of the premises on which there is a room used
  wholly or partly as living accommodation".
- Reg 4(1)(a)(ii): a carbon monoxide alarm [V] "in any room of the premises which is used wholly or
  partly as living accommodation and contains a fixed combustion appliance other than a gas
  cooker".
- Reg 4(1)(b): checked in working order on the day a new tenancy begins. Reg 4(1)(c): after a
  report made on or after 1 October 2022 by a tenant, an alarm found faulty must be repaired or
  replaced. Reg 4(2): a bathroom or lavatory counts as living accommodation.
- England only; applies to landlords of specified tenancies. It says nothing about owner-occupiers.

#### D24. DLUHC/MHCLG, "Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022: guidance for landlords and tenants" (GOV.UK record)
https://www.gov.uk/government/publications/smoke-and-carbon-monoxide-alarms-explanatory-booklet-for-landlords
Read: GOV.UK summary and change history via API; the Q&A booklet itself not read. Updated 29 July
2022.

- New requirements in the social rented sector (smoke and CO) and new CO requirements in the private
  rented sector [V] "come into force on 1 October 2022".

#### D25. Approved Document J: Combustion appliances and fuel storage systems (2010 edition incorporating 2010, 2013 and 2022 amendments), England
https://www.gov.uk/government/publications/combustion-appliances-and-fuel-storage-systems-approved-document-j ;
PDF https://assets.publishing.service.gov.uk/media/6336e58be90e0772dc9651a2/ADJ_2022.pdf
Read: requirement J3, the summary of changes, and paragraphs 2.34 to 2.36 and 3.43 to 3.45
(pdftotext of the whole 38,000-word document; searched, those passages read). GOV.UK record
updated 30 September 2022.

- Requirement J3 as Approved Document J prints it: [V] "Where a fixed combustion appliance is provided, appropriate provision shall
  be made to detect and give warning of the release of carbon monoxide." Applies only to fixed
  combustion appliances in dwellings. This is AD J's reprint, not the statute's wording; the
  Building Regulations 2010's own J3 is recorded in "Stage 4 note, lesson 11 (2026-09-26)" at the
  end of this file, and a lesson quoting J3 as law quotes that.
- History from the document: J3 and CO alarms for new or replacement **solid fuel** appliances came
  in with the 2010 edition; the 2022 amendments extended the guidance to **gas and oil**, [V] "in
  effect on 1 October 2022" (GOV.UK record). England only.
- Para 3.43: [V] "Where a new or replacement fixed gas burning appliance (excluding gas appliances
  used solely for cooking) is installed in a dwelling, a carbon monoxide alarm should be provided in
  the room where the appliance is located." Para 2.34 says the same for solid fuel.
- Paras 2.35 and 3.44: alarms should comply with [V] "BS EN 50291-1:2018" and be battery-powered
  for the alarm's working life, with an end-of-life warning; mains-wired Type A alarms (not plug-in)
  with a sensor-failure warning are an alternative.
- Paras 2.36 and 3.45, siting: in the same room, on the ceiling at least 300mm from any wall, or on
  a wall as high as possible (above doors and windows) but not within 150mm of the ceiling; and
  between 1m and 3m horizontally from the appliance.
- The key line for the contested question: [V] "Provision of a carbon monoxide alarm should not be
  regarded as a substitute for the correct installation and regular servicing of combustion
  appliances."

#### D26. Scottish Government, "Fire and smoke alarms: the law" (factsheet), sections "What each home needs" and "Where and what to buy"
https://www.gov.scot/publications/fire-and-smoke-alarms-in-scottish-homes/ ;
.../pages/where-and-what-to-buy/
Read: those two sections in full, direct fetch. First published 21 October 2020; last updated 14
August 2024. The Tolerable Standard Guidance itself not read.

- [V] "Every home in Scotland must have interlinked fire alarms." Owner's responsibility (all
  tenures). Each home: a smoke alarm in the living room or most-used room; one in every hallway and
  landing; a heat alarm in the kitchen; all ceiling-mounted and interlinked.
- CO: [V] "If you have a carbon-fuelled appliance like a boiler, open fire or wood burner, you must
  also have a carbon monoxide detector in the same room. This does not need to be linked to the
  smoke alarms. Gas cookers and hobs do not need a carbon monoxide detector."
- What to buy: sealed tamper-proof long-life lithium battery alarms (fit yourself) or mains-wired
  (fitted by a qualified electrician, replaced every 10 years); battery CO alarms must have a sealed
  battery for their lifespan; replaceable-battery alarms don't meet the standard. Standards: smoke
  BS EN14604:2005, heat BS 5446-2:2003, CO [V] "British Kitemark EN 50291-1". Says one named smart
  alarm system does not meet the standard (it is not a heat alarm under BS 5839-6:2019). The page
  does not give the 2022 date on these pages; the change history shows February 2022 updates on
  "timescales" (the in-force date of February 2022 is not stated in what I read: gate).

#### D27. HSE, "Gas safety: Carbon monoxide awareness frequently asked questions"
https://www.hse.gov.uk/gas/domestic/co.htm
Read: full text, direct fetch. Page stamp 2026-02-10, though it still cites NHS Direct on 0845
4647, a number that has not operated for years; treat the page as old content re-stamped.

- [V] "According to the HSE statistics every year around 7 people die from CO poisoning caused by
  gas appliances and flues that have not been properly installed, maintained or that are poorly
  ventilated." (HSE's statistics source not read.)
- Warning signs of incomplete combustion at the appliance (house-side, not first aid): [V] "yellow
  or orange rather than blue flames (except fuel effect fires or flueless appliances which display
  this colour flame)"; [V] "soot or yellow/brown staining around or on appliances"; pilot lights
  that frequently blow out; increased condensation inside windows.
- Servicing: any combustion appliance (gas, oil, wood, coal) should be [V] "serviced and maintained
  by a competent person and the chimney is regularly swept."
- If you think an appliance is spilling CO: call the National Gas Emergency Service 0800 111 999;
  switch off the appliance and shut off the gas at the meter control valve; open doors and windows.
  (First Aid lesson 14 already gives the number; the house-side step here is shutting the appliance
  and meter valve.)

#### D28. CPSC, "Non-Fire Carbon Monoxide Deaths Associated with the Use of Consumer Products: 2022 Annual Estimates" (John Topping, May 2026)
https://www.cpsc.gov/s3fs-public/Non-Fire-Carbon-Monoxide-Deaths-Associated-with-the-Use-of-Consumer-Products-2022-Annual-Estimates.pdf
Read: executive summary and introduction (pdftotext of the 51-page report). Staff report, not
reviewed or approved by the Commission.

- 2022: an estimated [V] "274 unintentional, non-fire CO poisoning deaths associated with the use of
  consumer products". Engine-driven tools 107 (39%), of which 93 generators; heating systems 76
  (28%); 64% of deaths from exposure in a home location (including detached garages, campers,
  sheds, tents).
- 2020 to 2022 average: 238 deaths per year; [V] "more than half (59%) of the deaths occurring
  during the four cold months of November, December, January, and February."
- 2012 to 2022: a statistically significant upward trend, peaking in 2022; generators alone about
  892 deaths since 2012 (41%).
- Mechanism: CO binds haemoglobin with about 250 times oxygen's affinity; rapidly rising levels
  from engine exhaust can cause [V] "rapid incapacitation and loss of consciousness, which prevent
  exposed individuals from leaving the hazardous environment."

#### D29. CPSC, "Carbon Monoxide" safety education centre page
https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center
Read: full text via Wayback 20260908150612 (CPSC blocks curl).

- [V] "one portable generator can produce the same amount of carbon monoxide as hundreds of cars."
  More than 200 US deaths a year from non-fire consumer-product CO, more than 100 linked to portable
  generators.
- Generators: [V] "Never use portable generators inside homes or garages, even if doors and windows
  are open. Use generators outside only, at least 20 feet away from homes with exhaust facing
  away."
- Alarms: battery or battery-backup CO alarms [V] "on every level of the home and outside sleeping
  areas. Interconnected CO alarms are best".
- The page lists recent CPSC warnings to stop using particular combination smoke/CO detectors and
  plug-in gas/CO detectors sold online that fail to alert. (Relevant to buying: a cheap unlisted
  alarm may not work.)

#### D30. CDC, "Carbon Monoxide Poisoning Basics"
https://www.cdc.gov/carbon-monoxide/about/index.html
Read: full text via Wayback 20260920191925. Page date 12 January 2026.

- [V] "Each year, more than 400 Americans die from unintentional CO poisoning not linked to fires,
  more than 100,000 visit an emergency department, and more than 14,000 are hospitalized." (CDC's
  400 counts all non-fire CO deaths, including vehicles; CPSC's 238 to 274 counts consumer products
  under its jurisdiction. They are different scopes, not a contradiction.)
- House-side advice: battery or battery-backup CO detectors near every sleeping area; check
  batteries when clocks change; replace the detector [V] "following the manufacturer's instructions
  or every 5 years"; have heating system, water heater and any gas, oil or coal appliances serviced
  by a qualified technician every year; horizontal vent pipes should slope slightly up toward the
  outdoors; [V] "Never heat your house with a gas oven"; have the chimney checked or cleaned every
  year; never burn charcoal indoors; generators more than 20 feet from windows, doors and vents;
  never run a vehicle in an attached garage even with the door open.

#### D31. NCSL, "Carbon Monoxide Detector Requirements, Laws and Regulations"
https://www.ncsl.org/environment-and-natural-resources/carbon-monoxide-detector-requirements-laws-and-regulations
Read: introduction and the first dozen rows of the state table, direct fetch. No page date seen in
the body text.

- [V] "Most states have adopted requirements mandating the use of carbon monoxide detectors. These
  requirements may come from statute, regulation or code requirement." Variation: many require
  them in multifamily dwellings, some only where there is a fossil-fuel appliance, some only on
  sale or renovation; some states rely on the International Residential Code (13 listed); several
  leave codes to local jurisdictions. Examples: California requires owners of every single-family
  dwelling to maintain a CO device; Colorado on sale or transfer where there is a fuel-burning
  appliance, fireplace or attached garage; Illinois within 15 feet of every sleeping room.
- NCSL's own caveat: [V] "may not be reflective of all requirements"; homeowners should contact
  their state or local housing department. A lesson should say "most states require them, and the
  details vary", not give a state count.

#### D32. CPSC portable generator standard: status from the Federal Register
Federal Register API search, CPSC documents matching "portable generators", newest first:
https://www.federalregister.gov/api/v1/documents.json (query shown in method notes);
CPSC Regulatory Agenda, 14 August 2026 (document 2026-16614)
Read: the API result excerpts only (titles, abstracts, the agenda excerpt), not the full notices.

- The agenda (information accurate as of November 2025) lists [V] "Safety Standard for Portable
  Generators" under "Final Rule Stage" (RIN 3041-AC36). So as of that agenda there was no final
  mandatory federal CO standard for portable generators. A supplemental proposed rule appeared on
  20 April 2023 (search result title only).
- Voluntary standards UL 2201 and ANSI/PGMA G300 are known to me only from search snippets (CPSC
  staff's 2022 finding that compliance was minimal): not read; gate.

---

### 4. Electric shock and electrical fire

#### D33. Home Office/MHCLG, "Detailed analysis of fires and response times to fires attended by fire and rescue services, England, year ending March 2026" (19 August 2026), and data table FIRE0602
https://www.gov.uk/government/statistics/detailed-analysis-of-fires-england-year-ending-march-2026 ;
https://assets.publishing.service.gov.uk/media/6a7c8fde154113c988fd98ae/FIRE0602.xlsx
Read: the statistical release sections 4 and 5 (causes; smoke alarms) via API; FIRE0602 opened
and the 2025/26 accidental dwelling fire row and detailed ignition sources extracted.
(Stage 4 note, lesson 06: the publisher is MHCLG alone, not the Home Office. The landing page reads
[V] "From: Ministry of Housing, Communities and Local Government", and the release says [V] "All
fire-related Ministerial responsibilities moved from the Home Office to the Ministry of Housing,
Communities and Local Government (MHCLG) on 1 April 2025." Cite it as MHCLG's. The GOV.UK "Fire
safety in the home" guide, D35, is still the Home Office's.)

- 23,795 accidental dwelling fires in England in 2025/26; 27% caused by [V] "'misuse of equipment
  or appliances'"; cooking appliances 42% of accidental dwelling fires but 11% of fatalities;
  smoking materials 7.6% of fires but 27% of fatalities.
- From FIRE0602a (my arithmetic from the published counts): "Electrical distribution" 3,410
  (14.3%), of which "Wiring, cabling, plugs" 2,497 (10.5%) and "Apparatus - batteries, generators"
  885; "Other electrical appliances" 2,739 (11.5%), led by tumble dryers 579 and washing machines
  409. Electrical distribution plus other electrical appliances is 6,149, about 26% of accidental
  dwelling fires, **excluding** cooking appliances (9,928), which the table does not split by fuel.
  Fatalities (FIRE0602b, 161 accidental dwelling fire deaths): electrical distribution 3, other
  electrical appliances 13.
- Smoke alarms in dwelling fires: no alarm present in 23% of dwelling fires and 24% of related
  deaths; present but failed to operate 19%; the leading failure reasons were fire products not
  reaching the detector and fire in an area not covered (66% together), i.e. siting and coverage.
- So a lesson can say "in England, faults and misuse involving electrical wiring, plugs and
  appliances, not counting cookers, start about a quarter of accidental house fires". The larger
  "almost half" figure that circulates (see D34) depends on counting electric cooking; it is not in
  what I read from the Home Office.

#### D34. Electrical Safety First (ESF), "Advice for DIY-ers"; "Socket-outlets usage and safety"; "Facts and figures"
https://www.electricalsafetyfirst.org.uk/guidance/advice-for-you/diyers/ ;
https://www.electricalsafetyfirst.org.uk/guidance/safety-around-the-home/overloading-sockets/ ;
https://www.electricalsafetyfirst.org.uk/what-we-do/facts-and-figures/
Read: full text of the three pages, direct fetch. No page dates shown. The socket calculator is
JavaScript and did not render. ESF's research reports ("How Safe Is Your Home 2025", 404) and its
RCD and statistics pages (404 at the tried URLs) not read. ESF is a charity that campaigns; its
figures come from its own surveys unless it says otherwise.

- DIY survey: of 1,000 electricians surveyed, [V] "More than 30% had reports of electric shocks
  caused by incompetent DIY-ers" and [V] "15% reported that DIY had caused an electrical fire". The
  commonest mistakes: [V] "cutting through power leads, drilling into wiring, or trying to repair an
  electrical item while it is switched on." (Survey date not given on the page.)
- Advice: [V] "Any electrical work should be left to competent professionals." Always use an RCD
  or plug-in RCD; shut off the power for DIY close to electrics; check leads and plugs on power
  tools; use a cable detector before drilling; cables in walls run horizontally or vertically from
  accessories (ESF's shorthand for the "safe zones": see Common misconceptions).
- ESF's test that the power is off, for non-electrical DIY: [V] "plug an appliance in or try
  switching on lights." (Contrast with HSE's proving-dead standard for electrical work, D36.)
- Part P: work in bathrooms or a new circuit must be done or signed off by a registered competent
  electrician; much work is "notifiable". (Belongs to another part's regulatory lesson; noted
  only.)
- Sockets: most extension leads are 13A, some older ones and cable reels 10A or less; don't
  daisy-chain extension leads; cable reels rated as low as 3 or 4A when wound, so unwind fully and
  use one with a thermal cut-out. Warning signs: burn marks, buzzing or crackling, fuses blowing,
  breakers tripping, hot to touch. RCD in the consumer unit, or an RCD plug if none. Smoke/heat
  alarms: [V] "Test alarms at least once a month. Replace them every ten years".
- Periodic inspection (EICR) recommended at least every 10 years for an owner-occupied home, 5
  years or change of occupancy for rentals (ESF recommendation, not a legal statement on this page).
- Facts page: describes a dashboard built on the Home Office dataset; no figures in the text.
- Search snippet only (not a finding): an ESF page says "almost half of all domestic fires are
  caused by electricity" and a 2013 survey that almost half of severe shocks come from DIY mistakes.

#### D35. GOV.UK (Home Office), "Fire safety in the home" (accessible version), in "Make your home safe from fire"
https://www.gov.uk/government/publications/make-your-home-safe-from-fire/fire-safety-in-the-home-accessible-version
Read: full body via API. Updated 25 May 2022.

- [V] "Faulty electrics (appliances, wiring and overloaded sockets) cause around 4,000 fires in the
  home across the country every year."
- Smoke alarms: [V] "Test your smoke alarms at least monthly."; vacuum every six months; a ten-year
  alarm is replaced whole every ten years; mains alarms need a qualified electrician and still need
  testing.
- Electrics: one plug per socket where possible; high-powered appliances like washing machines on
  a socket of their own; know the amp limit of adaptors and leads; plug fuse examples (TV 3A,
  vacuum cleaner 5A); danger signs [V] "scorch marks, hot plugs and sockets, fuses that blow or
  circuit-breakers that trip for no obvious reasons, or flickering lights."

#### D36. HSE, "Electricity at work: Safe working practices" (HSG85, third edition, 2013)
https://www.hse.gov.uk/pubns/priced/hsg85.pdf
Read: whole PDF extracted; "Proving dead" paragraphs 53 to 55 and the locking-off paragraphs read.
(HSE GS38 at the tried URL returned 404; not read.)

- Para 53: having isolated, [V] "check that the parts to be worked on or near really are dead".
- Para 54, the source for the limits of a non-contact tester: for low voltages use proprietary
  two-pole voltage detectors, test lamps, or voltmeters with insulated probes and fused leads.
  [V] "The use of multimeters, which can be set to the wrong function, is not recommended for
  proving dead on low-voltage systems, neither is the use of non-contact devices such as 'volt
  sticks'".
- Para 55: [V] "It will be necessary to test the instrument before and after use", e.g. with a
  proving unit. This is the prove-test-prove sequence.
- Locking off: breakers locked OFF with a safety lock; lockable blanks for empty fuse ways.
- For the lesson: this is workplace guidance and the course is not teaching electrical work. Its
  use is to explain why a household "volt stick" or pen tester's silence is not proof a wire is
  dead, and why a DIYer who is not doing electrical work isolates at the consumer unit and does not
  rely on a light switch.

#### D37. NFPA, "Home Fires Caused by Electrical Distribution and Lighting Equipment" (Richard Campbell, February 2022)
https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Electrical/osElectricalDistLighting.pdf
Read: key findings and first two pages (pdftotext). The NFPA "Home Electrical Fires" report at the
old URL is 404; not read.

- 2015 to 2019 annual averages: [V] "32,620 home fires involving electrical distribution and
  lighting equipment per year"; 430 civilian deaths; 1,070 injuries; $1.3 billion direct property
  damage (the body text on page 1 says "$1.3 million", an evident typo against the key findings).
- Wiring and related equipment: 68% of these fires and 42% of deaths. Commonest origins: bedroom
  16%, attic or ceiling 11%, wall assembly or concealed space 8%. 23% occurred between midnight and
  8 a.m. but caused 52% of deaths. Concealed wiring faults can burn for a prolonged period before
  detection. Aluminium wiring connections deteriorate; CPSC recommends a qualified electrician
  repair or replace it (per NFPA; CPSC source not read).
- Data are now seven years old; flag the period whenever used.

#### D38. CPSC, "Electrocutions Associated With Consumer Products: 2011-2020" (Hanway, Massie, Seebruck, November 2023)
https://www.cpsc.gov/s3fs-public/Electrocutions-2011-to-2020.pdf
Read: executive summary and Table 5 (product categories), pdftotext.

- [V] "an estimated average of 100 electrocution fatalities associated with consumer products per
  year over the 3-year period from 2018 through 2020". Nearly nine times as many male as female
  victims; more victims aged 45 to 64 than population share would predict. Fractal ("Lichtenberg")
  wood burning emerged as a major source.
- Table 5 reported deaths 2011 to 2020 include: appliance 66, fractal wood burning 65, pole 31,
  ladder 22 (ladders contacting power lines), pool/hot tub 19, electrical box/outlet 16, extension
  cord 11, power tool 9. (The categories listed that are relevant to DIY: ladders near overhead
  lines, outlets, cords, power tools.)
- Caveat: incidents associated with a product [V] "were not necessarily caused by the product."

#### D39. CPSC, news release 89-031, "Easily Installed Device Protects Family Against Electrocution" (28 May 1989), and CPSC memorandum "Economic Considerations: GFCIs" (Karels, 10 March 2003)
https://www.cpsc.gov/Newsroom/News-Releases/1989/Easily-Installed-Device-Protects-Family-Against-Electrocution
(Wayback 20260311171701); https://www.cpsc.gov/s3fs-public/ecgfci.pdf
Read: full text of both.

- 1989 release: a GFCI [V] "shuts down the power in milliseconds" if current leaks to ground,
  [V] "whereas circuit breakers and fuses function primarily to prevent the home wiring system from
  causing a fire." Code-compliant new homes then required GFCIs in bathrooms, basements, garages,
  outdoors and kitchen countertop receptacles within six feet of the sink; homes built before 1973
  can be upgraded with GFCI breakers or receptacles.
- 2003 memo: average 196 consumer-product residential electrocutions a year 1995 to 1999; about 47%
  in scenarios GFCI protection could address; an earlier UL study found GFCIs 81% to 95% effective
  in preventing electrocution deaths. Estimate: 75 to 88 deaths a year averted by extending GFCIs to
  other circuits.

#### D40. ESFi, "Ground Fault Circuit Interrupters: Preventing Electrocution Since 1971/1973"
https://www.esfi.org/ground-fault-circuit-interrupters-preventing-electrocution-since-1973/
Read: text via Wayback 20251123184045 (live site 403). Infographic text only; no method.

- Claims [V] "81% drop in electrocutions" and [V] "95% drop in electrocutions caused by consumer
  products" since GFCIs; 47% of current electrocutions preventable with proper GFCI protection;
  NEC timeline: 1971 outdoor receptacles, 1975 bathrooms, 1978 garages.
- A search snippet of a later ESFi version gives 80% and 93%. The drop is an association over
  decades (wiring, appliance standards and other changes also contributed). A lesson may say CPSC
  and ESFi credit GFCIs with a large share of the fall; it should not state a causal percentage.

---

### 5. Smoke alarms (maintenance only)

#### D41. U.S. Fire Administration (FEMA), "Smoke alarms"
https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/smoke-alarms/
Read: full text, direct fetch. "Page last reviewed: Sept. 21, 2026".

- [V] "Test smoke alarms every month and replace 9-volt smoke alarm batteries at least once every
  year." [V] "They need to be replaced 10 years from the manufacture date." Same for hardwired
  alarms with backup batteries.

#### D42. NFPA, "Smoke Alarms in U.S. Home Fires" fact sheet (from Ahrens, September 2015)
https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/Fact-sheets/SmokeAlarmsFactSheet.pdf
Read: full fact sheet. Data 2009 to 2013 (old).

- Three in five home fire deaths occurred where there were no smoke alarms (38%) or no working
  ones (21%). Where alarms were present but did not operate, 46% had missing or disconnected
  batteries (nuisance alarms the leading reason) and 24% dead batteries. Hardwired alarms operated
  94% of the time, battery-only 80%. Interconnected alarms sounded more often. Use for the
  principle (why testing and not disconnecting matter), not for current figures. UK equivalents:
  D33 (2025/26), D35.

(The NFPA smoke-alarm and CO web pages returned empty shells to curl, Wayback and WebFetch; not
read.)

---

### 6. Other hazards a DIYer meets

#### D43. HSE, "Cancer and construction: Silica" and "Silicosis: causes and risk controls"
https://www.hse.gov.uk/construction/healthrisks/cancer-and-construction/silica-dust.htm ;
https://www.hse.gov.uk/lung-disease/silicosis.htm
Read: full text of both, direct fetch.

- Silica is in most rocks, sand and clay (sandstone over 70%, granite 15 to 30%) and in bricks,
  tiles, concrete and mortar. Cutting, drilling, grinding and polishing make respirable crystalline
  silica, [V] "too fine to see with normal lighting". [V] "Silica is the biggest risk to
  construction workers after asbestos." HSE-commissioned estimates: over 500 construction worker
  deaths in 2005.
- Silicosis is irreversible and continues to develop after exposure stops; acute silicosis follows
  very high short exposures. RCS also causes COPD and is linked to lung cancer.
- For a householder: cutting a paving slab, chasing a brick wall or cutting concrete tiles makes the
  same dust; wet cutting or on-tool extraction and a proper mask (details are on HSE's construction
  dust pages, not read) are the controls.

#### D44. OSHA, "Silica, Crystalline" (overview)
https://www.osha.gov/silica-crystalline
Read: overview menu page only (about 380 words; highlights list). Standards and Table 1 not read.

- Confirms OSHA's construction standard and "Table 1" task controls and a 2026 OSHA-NIOSH hazard
  alert on engineered-stone countertops. Nothing citable for a householder beyond the fact that the
  hazard is regulated for workers.

#### D45. US EPA, "Volatile Organic Compounds' Impact on Indoor Air Quality"
https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality
Read: full text, direct fetch. "Last updated on June 23, 2026".

- Sources include [V] "paints, paint strippers and other solvents". Indoor levels of several
  organics average 2 to 5 times outdoors; [V] "During and for several hours immediately after certain
  activities, such as paint stripping, levels may be 1,000 times background outdoor levels."
- Advice: increase ventilation; if a label says use in a well-ventilated area, go outdoors or use
  an exhaust fan, otherwise open windows; buy only what you will use; don't bin leftovers,
  use household hazardous waste collection.
- Methylene chloride: in paint strippers, adhesive removers, aerosol spray paints; [V] "converted to
  carbon monoxide in the body". The page still advises using such products outdoors or with good
  ventilation. It does not mention EPA's 2019 ban on consumer sale of methylene chloride paint
  removers or the 2024 rule (not read). Drafters should not repeat this page's methylene chloride
  paragraph as current US law without a primary read; see Gates.

#### D46. US EPA, "Health Risk of Radon"
https://www.epa.gov/radon/health-risk-radon
Read: full text, direct fetch. "Last updated on June 24, 2026". "A Citizen's Guide to Radon" (the
URL tried was 404) not read.

- [V] "Radon is the number one cause of lung cancer among non-smokers, according to EPA estimates.
  Overall, radon is the second leading cause of lung cancer. Radon is responsible for about 21,000
  lung cancer deaths every year. About 2,900 of these deaths occur among people who have never
  smoked." Best estimate 21,000 with uncertainty range 8,000 to 45,000 (2003 assessment based on
  BEIR VI).
- Surgeon General: on 13 January 2005 Dr Richard H. Carmona issued a national health advisory
  urging Americans to test their homes (EPA's account; the advisory itself not read).
- Action level: the risk tables say "Fix your home" at 4 pCi/L (150 Bq/m³) and above, and
  [V] "Consider fixing between 2 and 4 pCi/L (75-150 Bq/m³)". Average indoor level 1.3 pCi/L;
  average outdoor 0.4. At 4 pCi/L, about 7 in 1,000 never-smokers and about 62 in 1,000 smokers
  could get lung cancer over a lifetime.

#### D47. UKradon (UKHSA), "What is radon?", "Radon Action Level and Target Level", "UK maps"
https://www.ukradon.org/information/whatisradon ; https://www.ukradon.org/information/level ;
https://www.ukradon.org/information/ukmaps
Read: full text of the first two; maps page text only. No page dates shown.

- Radon is a colourless, odourless radioactive gas from uranium in all rocks and soils. Average UK
  home 20 Bq/m³; below 100 Bq/m³ individual risk [V] "remains relatively low".
- [V] "UK Health Security Agency recommends that radon levels should be reduced in homes where the
  average is more than 200 becquerels per metre cubed (200 Bq m⁻³)." Measured with two detectors
  (bedroom and living room) over three months. Target level 100 Bq/m³; between 100 and 200,
  consider reducing, especially with a smoker or ex-smoker in the home.
- Maps: the darker the area, the greater the chance of a high level, but not all buildings in dark
  areas are high. (UK deaths per year from radon not stated in what I read.)

#### D48. MHCLG, DHSC and UKHSA, "Understanding and addressing the health risks of damp and mould in the home" (GOV.UK guidance, updated 1 April 2026, applies to England)
https://www.gov.uk/government/publications/damp-and-mould-understanding-and-addressing-the-health-risks-for-rented-housing-providers/understanding-and-addressing-the-health-risks-of-damp-and-mould-in-the-home--2
Read: key messages and the cleaning paragraph (the page was reached via the old NHS "damp and mould"
URL, which now redirects here). Written for rented housing providers.

- [V] "Damp and mould primarily affect the airways and lungs, but they can also affect the eyes and
  skin. The respiratory effects of damp and mould can cause serious illness and, in the most severe
  cases, death". Everyone is vulnerable; people with certain health conditions, children and older
  adults are at greater risk. It names the death of two-year-old Awaab Ishak in December 2020.
- Cleaning: mould can be removed from hard surfaces with an appropriate product and left to dry;
  [V] "Mould and mildew products should be used in preference to bleach, for health and safety
  reasons"; mouldy carpets and soft furnishings may have to go; tenants can remove condensation and
  very small amounts of mould, [V] "larger areas of mould should only be addressed by qualified
  professionals." (Another part covers damp; this is the health line only.)

---

### (a) What this part says the field considers essential

1. **Leave it alone if it is sound.** Every asbestos authority read (HSE, UKHSA, EPA) and both UK
   lead sources (Defra, BCF) put "undisturbed and in good condition, leave it (or paint over it)"
   first. The hazard is created by disturbing it: drilling, sanding, scraping, cutting, breaking.
2. **Assume by date.** UK: any building built or refurbished before 2000 may contain asbestos
   (HSE). US: EPA says you cannot tell by looking; treat as asbestos if in doubt. Lead: US pre-1978
   (EPA); UK dates differ by source (1960s, 1992, pre-1995 test advice), so a UK lesson should give
   the range and the sources.
3. **Asbestos is a stop-work material for a householder.** HSE: don't repair or remove it without
   non-licensed-work training; licensed contractors only for sprayed coatings, lagging and AIB;
   dispose as hazardous waste through the council. EPA: sampling and even minor repair are best done
   by accredited professionals; federal law doesn't require it for single-family homes but some
   states do.
4. **Lead paint: wet methods, containment, no burning.** Both countries agree: no open flame or
   blowlamp; heat gun only low (US rule: below 1,100°F for contractors; Defra: below 450°C); no dry
   sanding (UK leaflets; EPA's DIY advice by implication: mist and wet-sand); keep children and
   pregnant women out; clean with HEPA and wet wipes. In the US the RRP rule binds paid work only.
5. **Carbon monoxide: service, ventilate, alarm, in that order.** Approved Document J says in terms
   that an alarm is not a substitute for correct installation and regular servicing. Annual
   servicing of fuel-burning appliances and chimney sweeping (HSE, CDC). Know the appliance warning
   signs (lazy yellow flames, soot, staining, pilot lights going out). Alarms to BS EN 50291 in the
   room with the appliance (UK), or on every level and outside sleeping areas (CPSC). Generators
   outdoors only, 20 feet away (CPSC, CDC). Never a gas oven for heating (CDC).
6. **Electricity: isolate at the consumer unit, prove dead properly, RCD/GFCI protection.** The
   common DIY accidents are drilling into cables, cutting leads, and working on live items (ESF).
   Cable detector before drilling. HSE: prove dead with a two-pole detector and prove the tester
   before and after; not with a volt stick or multimeter. RCD (UK) and GFCI (US) protection cut
   shock deaths; overcurrent devices protect wiring from fire, not people from shock (CPSC 1989).
7. **Warning signs of an electrical fire risk**: scorch marks, hot plugs or sockets, buzzing or
   crackling, fuses blowing, breakers tripping for no reason, flickering lights (GOV.UK, ESF).
   Don't overload extension leads; don't daisy-chain; unwind cable reels.
8. **Smoke alarms**: test monthly, replace the whole alarm at 10 years (USFA, GOV.UK, ESF). Siting
   and coverage failures, not dead batteries, were the leading reason alarms failed to operate in
   English dwelling fires in 2025/26 (Home Office).
9. **Dust and fumes**: silica dust from cutting masonry is the biggest construction health risk
   after asbestos (HSE); ventilate for solvents and strippers (EPA); test for radon where maps or US
   guidance suggest it (UKHSA 200 Bq/m³ action level; EPA 4 pCi/L).

### (b) Common misconceptions (only ones a source names)

- "If you find asbestos you must have it removed." Sources: HSE FAQ (D1: often best left in place);
  EPA (D8: [V] "don't panic"; leave undamaged material alone). EPA also says sampling it yourself
  can be more hazardous than leaving it.
- "The asbestos ban means old asbestos is no longer a risk" / "a risk finding means everyone with
  asbestos at home will be harmed." EPA (D9) rejects the second directly; HSE (D5) shows deaths are
  still around 5,000 a year from past exposures.
- "A negative home lead test kit means there is no lead." BCF (D20): a negative reading should not
  be relied on. EPA (D14) qualifies reliability to a trained professional using a recognised kit.
- "Dry sandpaper is fine on old paint." Defra (D19) and BCF (D20) say explicitly not to.
- "A carbon monoxide alarm means I don't need the boiler serviced." Approved Document J (D25): an
  alarm [V] "should not be regarded as a substitute for the correct installation and regular
  servicing".
- "Running a generator in the garage with the door open is safe." CPSC (D29) and CDC (D30): never,
  even with doors and windows open. CDC: the same for a car in an attached garage.
- "A volt stick showing nothing means the wire is dead." HSE HSG85 (D36) says non-contact devices
  are not recommended for proving dead.
- "Circuit breakers and fuses protect you from shock." CPSC (D39): they function primarily to stop
  the wiring causing a fire; the GFCI protects people.
- "Replaceable-battery alarms are fine" (Scotland). Scottish Government (D26): they don't meet the
  standard because sensors degrade and batteries get removed.
- "Bleach is the thing for mould." UK government guidance (D48): mould and mildew products in
  preference to bleach.
- Possible misconception inside a source, to avoid repeating: ESF (D34) states it [V] "is required
  that cables buried in walls are installed either horizontally or vertically from electrical
  accessories". That is a simplification of the wiring regulations' "safe zones" and does not hold
  for all cables or all old houses; a lesson should say cables are often run straight up, down or
  across from sockets and switches, and a detector is still needed. (BS 7671 not read: gate.)

### (c) Contested questions

1. **Should a householder remove small amounts of asbestos cement (a garage roof sheet, a
   cistern) themselves?**
   - Against (HSE, D1): do not repair or remove any asbestos material without training for
     non-licensed work; HSE [V] "strongly encourages the use of trained professionals". EPA (D8):
     removal [V] "must be done only by a trained and accredited asbestos professional".
   - For, or at least permissive: in law, owner-occupiers doing their own work are outside CAR 2012
     (D1, D2, D6); HSE classes some AC work as non-licensed and publishes task sheets for it (D3);
     US federal law does not require training for single-family homes (D8, D11); many councils
     accept householder-bagged AC waste (not read; council-specific).
   - Status: the law is established fact (it permits); whether it is advisable is a value judgement
     on which every official source read says no without training. A lesson should state both.
2. **Must a householder test for lead before sanding old paint?**
   - EPA (D15): find the build year; recommends a certified inspector; if you can't find out, assume
     lead. BCF (D20): test if pre-1995, with the caution that kits can give false negatives.
     Defra (withdrawn, D19): the age of the home is a good guide; overcoat sound paint.
   - Not a legal duty for DIY in either country (D13, D14, D22). The practical consensus is
     "assume lead in older paint and work wet, or test professionally". Established: no legal duty;
     contested only on whether a DIY kit is good enough (BCF and EPA say a negative is not proof).
3. **Is a CO alarm a substitute for servicing?** No source read says yes; ADJ (D25) says no in
   terms, and CDC and HSE put annual servicing first. Established.
4. **Where should a CO alarm go: in the appliance room (UK) or near sleeping areas/every level
   (US)?** Different national standards, not a dispute: ADJ and the Scottish standard fix it to the
   appliance room 1 to 3m away; CPSC and CDC to sleeping areas and every level. A lesson should give
   each country's rule; a UK reader with a boiler and bedrooms upstairs may reasonably want both.
5. **How much of the UK's house-fire problem is "electrical"?** ESF (snippet) says almost half;
   the Home Office table (D33) gives about a quarter for electrical distribution plus non-cooking
   appliances, with cooking (42% of all accidental dwelling fires, fuel unsplit) the difference.
   Definitional, not factual; say what is counted.
6. **How much of the fall in US electrocutions is due to GFCIs?** ESFi (D40) gives 81 to 95% drops
   since 1971; CPSC (D39) gives GFCI effectiveness of 81 to 95% from a UL study and estimates about
   half of residual electrocutions are GFCI-addressable. The decline is established; the share owed
   to GFCIs is an estimate.
7. **Radon: act at 4 pCi/L (US, about 150 Bq/m³) or 200 Bq/m³ (UK)?** Different national action
   levels; EPA also says consider action from 2 pCi/L (75 Bq/m³), UKHSA's target is 100 Bq/m³.
   Established fact that they differ; the choice of threshold is a policy judgement.

### (d) UK vs US differences

| Topic | UK | US |
|---|---|---|
| Asbestos ban | Import of blue/brown banned 1985, white 1999 (UKHSA); use in building illegal since 1999 (HSE); buildings pre-2000 may contain it | 1989 EPA ban mostly overturned 1991; five product types plus new uses remain banned; March 2024 EPA chrysotile rule (status in court not read) |
| Asbestos law and the householder | CAR 2012 binds work; owner-occupier doing own DIY not a dutyholder; licensed contractors for sprayed, lagging, AIB | Federal law doesn't require training for single-family homes; NESHAP excludes buildings of 4 or fewer units; states vary |
| Asbestos waste | Hazardous waste via the council (England and Wales GOV.UK finder) | Contractor bags and disposes under federal/state rules; homeowner rules vary by state |
| Lead paint dates | 1960s to 1992 depending on source; test if pre-1995 (BCF) | Pre-1978 |
| Lead rules | No householder rule; CLAW 2002 binds employers and self-employed; Defra leaflet withdrawn 2024 | RRP rule binds paid work in pre-1978 homes (6/20 sq ft minor-repair thresholds, no open flame, heat gun below 1,100°F); homeowner exempt unless renting, childcare or flipping |
| Heat gun | Defra: below 450°C (withdrawn); BCF: don't let it burn | Below 1,100°F (about 593°C) |
| Mask | EN143 P2 (Defra) | N-100 respirator (EPA) |
| CO alarm law | England: landlords, every room with a fixed combustion appliance except a gas cooker (2022); ADJ: new or replacement fixed appliance, same room (solid fuel 2010, gas/oil 2022); Scotland: every home with a carbon-fuelled appliance | State by state (NCSL); many require near sleeping rooms |
| CO alarm standard | BS EN 50291-1 | UL 2034 (not read) |
| CO alarm siting | Appliance room, ceiling 300mm from wall, 1 to 3m from appliance | Every level and outside sleeping areas (CPSC); near every sleeping area (CDC) |
| Gas emergency | National Gas Emergency Service 0800 111 999 | Leave, call from outside (utility/911; not read in this part) |
| Shock protection | RCD in consumer unit or RCD plug | GFCI receptacle or breaker; NEC required outdoors 1971, bathrooms 1975, garages 1978 (ESFi) |
| Plugs | Fused plugs (3A, 5A, 13A); 13A extension leads | No plug fuses; not covered by a read source |
| Smoke alarms | Test monthly, replace at 10 years; Scotland: interlinked, sealed or mains, heat alarm in kitchen; England: landlord one per storey | Test monthly, replace 10 years from manufacture, 9-volt batteries yearly |
| Radon action level | 200 Bq/m³ (target 100) | 4 pCi/L (150 Bq/m³); consider 2 to 4 |
| Units | Bq/m³, metres, °C | pCi/L, feet, °F |

### (e) Safety-critical notes for drafters

1. Do not tell a UK reader they may remove asbestos cement, textured coating or floor tiles
   themselves because the law allows it. HSE's advice is not to without training; state the legal
   position and the advice together. Never suggest breaking up AC sheets, sanding Artex, or
   vacuuming suspected debris with a household vacuum (EPA: never a regular vacuum; HSE: don't break
   up).
2. Don't teach Artex removal by steaming or scraping as a DIY task. HSE classes large-scale removal
   of textured coatings as notifiable non-licensed work.
3. Lead: no open flame, no dry sanding, no power sanding without HEPA extraction, no burning waste;
   keep children and pregnant women out; clothes off and bagged; wash before eating. Give the heat
   gun limit with the source and unit (US rule 1,100°F; Defra 450°C, withdrawn).
4. CO: the lesson should never present an alarm as the protection. Order: correct installation by a
   registered engineer, annual servicing, flue and chimney kept clear, ventilation not blocked, then
   an alarm. Never block air vents to stop draughts (ADJ context; not directly quoted here: the
   ventilation sections of ADJ were not read, so state it only if another part's source supports
   it). Never use a portable generator, barbecue, camping stove or gas oven for heat indoors.
5. First aid is not re-taught: refer back to First Aid lessons 2, 10 and 14 for CO symptoms, the
   rescue and electrical burns.
6. Electricity: "Switch off at the consumer unit, lock or tape the breaker, and check with a tester
   you have just proved on a known live source" is professional practice (HSG85). For a DIYer doing
   non-electrical work near cables, ESF's lower bar (plug something in or try the lights) is what
   ESF actually says. A lesson must not imply that a volt stick proves dead. It must not teach
   electrical installation work; Part P/notifiable work belongs to the regulations lesson.
7. Before drilling: use a cable and pipe detector; don't drill directly above, below or beside
   sockets and switches. (Detector limitations not sourced here.)
8. Ladders near overhead lines appear in CPSC electrocution data (22 deaths 2011 to 2020); the
   ladder part should cross-reference.
9. Generators: 20 feet (about 6m) from the house, exhaust away (CPSC); this is a US figure.
10. Radon and mould: this course gives the health line only. For mould, larger areas are for
    professionals (UK guidance); use mould products rather than bleach.
11. Dates on HSE pages are unreliable as content dates (the CO FAQ is stamped 2026 but cites a dead
    NHS Direct number). Prefer the legislation and dated statistics.

### (f) Gates (need a primary read before a lesson states them)

1. The current legal status of EPA's March 2024 chrysotile rule (Fifth Circuit litigation,
   abeyance, any reconsideration). Read the court docket or the Federal Register before saying
   anything beyond "EPA finalised a ban in March 2024".
2. Scotland's in-force date for the interlinked alarm and CO standard (widely given as 1 February
   2022) and the Tolerable Standard Guidance chapters 16 and 17. The pages read do not state it.
3. UL 2034 as the US CO alarm standard, and UL 217 for smoke alarms: named by no source read.
4. Portable generator voluntary standards (UL 2201, ANSI/PGMA G300) and CPSC's 2022 compliance
   finding: snippet only.
5. EPA's 2019 ban on consumer sale of methylene chloride paint removers and the 2024 TSCA rule
   (the EPA VOC page read predates or omits them).
6. HSE's source for "around 7 people die" from gas-appliance CO each year (D27): statistical
   source not read.
7. UK annual radon lung cancer deaths (often given as about 1,100): not read.
8. BS 7671 "safe zones" for cables in walls, before any lesson describes where cables run.
9. Any NFPA smoke alarm or CO guidance or current home electrical fire figures (NFPA web pages did
   not render; the read NFPA reports cover 2009 to 2013 and 2015 to 2019).
10. Individual HSE asbestos essentials sheets (A14, A15, A28 and EM9) before describing any method.
11. Council-level asbestos disposal rules (England and Wales via GOV.UK finder; Scotland and
    Northern Ireland not read); US state homeowner asbestos removal rules (no state read).
12. "Renovate Right" pamphlet contents (only the landing page read) and HUD's Lead Safe Housing
    Rule.
13. ESF's "almost half of domestic fires are caused by electricity" and its 2013 DIY shock survey:
    snippet only.
14. The Gas Safe Register's own CO and servicing advice (site returned 403 and has no Wayback
    capture of the tried URL).
15. Surgeon General 2005 radon advisory text (only EPA's account read).

### (g) Not read (blocklist strings; whole-word, case-sensitive)


*The part's own "Not read" list below is superseded by the combined `unread:` line at the top of this file, which drops strings that another part read (see "The `unread:` line is the build's enforcement").*

Works or pages cited or named above but not read in this part. None of these strings occurs in the
title of a source I did read.

- Asbestos in the Home
- Asbestos: are you at risk?
- L143
- Current Best Practices for Preventing Asbestos Disease Among Brake and Clutch Repair Workers
- ADAO
- Asbestos Disease Awareness Organization
- Texas Chemistry Council
- Safe removal of lead paint
- HS034
- PaintSafe
- Steps to LEAD Safe Renovation
- Renovate Lead-Safe Fact Sheet
- Lead Safe Housing Rule
- HUD Guidelines for the Evaluation and Control of Lead-Based Paint Hazards in Housing
- Tolerable Standard Guidance
- UL 2034
- UL 217
- UL 2201
- PGMA G300
- NFPA 720
- NFPA 72
- Home Electrical Fires
- How Safe Is Your Home
- GS38
- BS 7671
- BS EN 50292
- A Citizen's Guide to Radon
- BEIR VI
- Iowa Radon Lung Cancer Study
- Fatal Incidents Associated with Non-Fire Carbon Monoxide Poisoning from Engine-Driven Generators
- Gas Safe Register
- Electrical Safety Standards in the Private Rented Sector

Notes on the list: "Gas Safe Register" is named on the HSE page I read (D27) but the Register's own
site was not read; if another part read it, drop this string. "Renovate Right" is deliberately
not on the list because I read the EPA landing page of that title; the pamphlet's contents remain
a gate (f12). "Control of Lead at Work Regulations 2002" and "Control of Asbestos Regulations 2012"
are not listed: I read regulation 3 of each (and CAR's contents), though not their operative
duties.

---

## Gate closures, lesson 01 (2026-09-25)

Read at drafting by the lesson 1 drafter, curl with a browser User-Agent and an HTML stripper,
on 25 September 2026.

**G-N1, the callout's two numbers: closed.** Both re-read on the networks' own live pages today.
- National Gas, "Emergency Contacts", https://www.nationalgas.com/emergency-contacts, read in
  full: [V] "Smell gas or suspect a leak? Call 0800 111 999 * (24 hours a day – free to call)."
- Cadent Gas, "What to do if you smell gas", https://cadentgas.com/smell-gas, read in full (a first
  request returned HTTP 429; the second returned the page): [V] "you should call us immediately on
  0800 111 999* at any time of the day or night." The steps quoted in Part A §4 are unchanged.
- SSE Airtricity Gas Supply NI, "In an Emergency", https://www.sseairtricitygasni.com/in-an-emergency/,
  read in full: [V] "phone the 24-hour Northern Ireland Gas Emergency Service on 0800 002 001."
  The page also says [V] "Do no turn on or off any electrical switches, including door entry
  systems." (sic, "Do no").
Both numbers match the callout. No change.

**G-W8, the gas emergency control valve: closed, for Cadent's network.** Cadent Gas, "Locating
your meter and turning off the gas", https://cadentgas.com/locating-your-meter-and-turning-off-the-gas,
read in full.
- Where the meter may be: "In a garage", "At the back of your house", "Under the stairs", "In the
  kitchen", "Or outside the front or side of your house" (a list on the page); in buildings with
  several homes, [V] "the meter can also be in various places around the home or in communal areas,
  but will usually be inside."
- Meter boxes: [V] "To access the meter you will need a key to open the door to the gas meter box."
- The valve: [V] "Open your gas meter box and locate the red tap handle near to the pipe. This is
  the emergency control valve (ECV). This handle will be aligned with the pipe; to switch off the
  supply you should turn it either 90 degrees to the left or 90 degrees to the right (a quarter
  turn clockwise or anti-clockwise). The gas supply is now off. Don’t turn it back on until
  advised it’s safe to do so."
- [V] "In your home it’s really important to know where to find your gas meter because this is
  where you will turn off the gas supply if advised to do so, or in a gas emergency."
Scope: one network's guide to the meters on its network. It describes the valve as Cadent's page
does; the course has not read other networks' guides, and a lesson says "Cadent describes".

**G-W5, water near electrics: closed with Electrical Safety First's current flood page.**
Electrical Safety First, "Electrical safety after a flood",
https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/electrical-safety-after-a-flood/,
read in full. Written for flooding, and it names a burst pipe as a case of clean-water damage.
- [V] "Switch off the electricity supply at the consumer unit/ fusebox, only if it is safe to do so."
- [V] "Seek professional advice from a registered electrician if there is any sign of water inside
  the consumer unit/ fusebox or any signs of arcing or overheating."
- [V] "Keep away from any exposed wiring as it may still be live."
- [V] "Do not attempt any electrical repairs or connection of temporary supplies yourself – always
  use a registered electrician."
- [V] "If the water damage to the electrics is relatively minor and caused by clean water (e.g. a
  burst water pipe or tank), the electrician may need to just dry out cables and replace any
  accessories affected by the water such as socket-outlets, switches, and plugs."
- The page does not say what makes the consumer unit safe to reach. The lesson keeps the course's
  plain reading, labelled as the course's: don't stand in water or touch anything wet to reach it.

**Re-read, no gate:** the Gas Safety (Installation and Use) Regulations 1998, regulation 3, whole
regulation, https://www.legislation.gov.uk/uksi/1998/2451/regulation/3: text as recorded in "The
gas-work law, stated exactly"; the page still shows no known outstanding effects.

**G-N4, photographs: not closed for lesson 1.** Wikimedia Commons searched; the stopcock files
found are not UK stop taps and a licence check could not be completed. Fallback: no photograph.

---

## Gate closures, lesson 03 (2026-09-25)

Read by the lesson 3 drafter on 2026-09-25, curl with a browser User-Agent plus pandoc (GOV.UK
pages through the content API; the SI through legislation.gov.uk's XML). Every [V] below was
string-checked against the extracted text on the day.

### G-W3 closed: plunging a sink, taking off a trap, chemical drain cleaners

**WaterSafe, "How do you unblock a sink with standing water in it?"**
https://www.watersafe.org.uk/advice/common_plumbing_questions1/drainage/how-to-unblock-sink/
Read: full text. No date shown. The same register as the stop tap page (Part A §1), run for the
water industry. Its wording is partly American ("faucet", "channel lock pliers", "P-trap"). It
says nothing about chemical drain cleaners, for or against.
- Order on the page: scoop out standing water; look for visible debris and pull it out by hand
  wearing rubber gloves; very hot water; a plunger; baking soda and vinegar; a plumber's snake
  (drain auger); take the trap off; then a plumber.
- "Before attempting to unclog the drain, remove as much standing water as possible." [V]
- "If you see any obstructions, wear rubber gloves and try to pull them out by hand." [V]
- Hot water: "Heat a couple of litres of water until it’s very hot but not boiling (boiling water can damage PVC pipes)." [V]
- Plunger: "If your sink has two basins, use a wet rag to plug the unclogged side." [V] "Position a sink plunger (flat-bottomed) over the clogged drain to form a seal." [V] "Pump the plunger up and down about 5 to 10 times." [V] Then check, and repeat if necessary.
- Baking soda and vinegar: one cup of each, covered, "for around 15 to 60 minutes" [V], then hot (not boiling) water.
- Snake: push in until you feel resistance, rotate, pull out slowly.
- Trap: "Place a bucket under the P-trap to catch water and debris." [V] "Use channel lock pliers to loosen the nuts on both sides of the trap." [V] Remove it, clean it with a brush or running water, "Reattach the P-trap and tighten the nuts." [V], run water.
- "If the water still backs up, the clog might be deeper in the plumbing system, requiring professional assistance." [V]
- The opening paragraph carries an em dash; quote around it, not through it.

**Poison Control (National Capital Poison Center, US), "What’s in drain cleaner and what happens if you drink it?"**
https://www.poison.org/articles/whats-in-drain-cleaner
Read: full text. No publication date extracted. Written by a pharmacist and certified specialist
in poison information.
- "Since many drain cleaners contain highly concentrated corrosive chemicals, they must be used with great caution." [V]
- Prevention tips: "Wear protective gear when using drain cleaners, including goggles and rubber gloves." [V] "Pour drain cleaners carefully and close to the drain to avoid splashing." [V] "Keep drain cleaner containers tightly closed, clean, and away from sight and reach of children." [V]
- Contents: enzymatic cleaners use bacteria and enzymes; non-enzymatic ones are acidic or alkaline. "Common acidic ingredients in non-enzymatic drain cleaners include sulfuric and hydrochloric acids. Common alkali ingredients in drain cleaners include sodium and potassium hydroxide." [V] "Some drain cleaners generate heat when the contents are mixed together and poured down a drain." [V]
- Splash-back: "injury can occur when a drain cleaner splashes back from the drain area. This can happen if the drain cleaner is poured from too high up, or if too much product is poured into a completely blocked drain." [V]
- Baking soda and vinegar, which WaterSafe recommends: "Since drains are not airtight, the carbon dioxide gas can escape from through drain cover, so the gas generally does not build up enough pressure to release clogged drain contents." [V] (the page's own wording, "escape from through") and "the combination of baking soda and vinegar is unlikely to be strong enough to melt away tough drain clogs due to oil and grease." [V]
- Exposure: webPOISONCONTROL or "call your poison center at 1-800-222-1222" [V]. (The number First Aid lesson 14 teaches as Poison Help.)

**Poison Control (National Capital Poison Center, US), "Top tips for a safe spring cleaning"**
https://www.poison.org/articles/spring-cleaning
Read: full text.
- "Always read the directions for use on cleaning product labels to avoid poisoning or injury." [V]
- "Never mix household cleaning products. Doing so can result in poisonous fumes and serious breathing problems." [V]
- "mixing an acid toilet bowl cleaner with bleach will result in the formation of irritating chlorine fumes that might cause serious breathing problems." [V]
- "Ammonia should never be mixed with chlorine or bleach products. This can release a highly irritating gas known as chloramine." [V]
- "Strong alkalis are in products such as oven cleaners, lye (caustic soda or sodium hydroxide), and drain cleaners." [V]
- A case on the page: a 2-year-old "was splashed in the face with a lye drain cleaner when someone poured it into a sink full of water." [V]
- "Ventilate your work area well, especially small spaces such as bathrooms, by opening a window or door and running an exhaust fan." [V]

**UKHSA, "Sodium hydroxide: general information"** (Compendium of chemical hazards), updated 28
November 2024.
https://www.gov.uk/government/publications/sodium-hydroxide-properties-uses-and-incident-management/sodium-hydroxide-general-information
Read: full text via the GOV.UK content API.
- "It is also commonly known as caustic soda and soda lye." [V] Used in "various household products including de-scalers and drain cleaners." [V]
- "Low level exposure from the correct use of household products that contain sodium hydroxide would not be expected to cause adverse health effects." [V]
- "Sodium hydroxide containing products in the home should be stored in an appropriate container and kept out of the reach of children." [V]
- Skin and eye first aid are on the page and are First Aid lesson 10's, not this course's.

No UK official page read on mixing cleaners. CDC's "Never mix bleach with ammonia or other
cleaners." (Part A §6) is the US mould page and is already recorded.

### Re-read at drafting (thresholds, statutory guidance, service standards)

**Approved Document H, 2015 edition.** GOV.UK's collection page still lists the 2015 PDF as the
current edition (checked 2026-09-25). Section 1 re-read. Additions to Part A §2:
- Para 1.5: "To prevent the water seal from being broken by the pressures which can develop in the system the branch discharge pipes should be designed as described in paragraphs 1.7 to 1.25." [V]
- Para 1.6 in full: "If a trap forms part of an appliance the appliance should be removable. All other traps should be fitted directly after the appliance and should be removable or be fitted with a cleaning eye." [V]
- Table 1 footnotes: the seal may be 50 mm only on flush-grated wastes without plugs on spray tap basins, and 38 mm where some appliances discharge to a gully.
- Para 1.33: ventilated stacks may end inside a building with air admittance valves.

**Thames Water, "Blockages and blocked drains"** re-read. **Correction to Part B §3:** the "48 hours
... 72 hours" line sits under "What about blockages outside my home?", after reporting a drain
"leaking sewage and endangering wildlife or the environment" [V]. It is not stated as the
attendance time for every blockage. Also on the page:
- "If you think you have a blockage within your drains or sewer, we advise you contact a plumber." [V]
- Signs of a blockage: "You find it hard to flush your toilet." [V] "Your sink or bath empties very slowly." [V] "You notice a bad smell coming from your drains." [V]
- "Sewers are only designed to take water from toilets, sinks, baths and showers along with human waste and toilet tissue. Everything else should be put in the bin." [V]
- "We repair and clean the pipes that carry wastewater from your street to our treatment works. Property owners are responsible for the pipes in the homes and the ones connecting to our sewers." [V]
- "Remember the three Ps: pee, poo and (toilet) paper – nothing else should be flushed!" [V] (the page's spaced dash; a lesson splits the quotation around it).
- It may be the company's "if we have public sewers in the area and at least one of the following applies" [V]: the problem is outside the property boundary, or more than one property is having problems.

**City of Portland, "Fats, Oil, and Grease"** re-read. Beyond Part A §2: "Don't run water over dishes, pans, fryers, or griddles to wash oil and grease down the drain." [V] "Small bits of food stick with FOG to pipes, causing additional build-up." [V] Tips: a sink strainer; pour grease into cans and bin them once hard; wipe pots and pans with dry paper towels before rinsing.

**Thames Water, "Don’t feed the fatberg"** re-read. Beyond Part A §2: fats and oils "can congeal and combine with other waste over time to form fatbergs – solid masses that block pipes" [V] (the page's spaced dash; do not quote across it). The survey is described on the page as "New research carried out by Thames Water" [V]. (Stage 4 note, lesson 04: the same page also says "New research commissioned by Thames Water" [V], and its footnote gives the pollster: Opinion Matters, 2,501 adults (18+) in London, Oxfordshire, Wiltshire, Berkshire, Surrey and Buckinghamshire, data collected 29.10.2025 to 06.11.2025; the 61% and 31% are for "this past month". Cite it as commissioned, never as run by the company itself.)
- Signs it is in your home include "Your neighbours aren't having problems with their drains" [V] and "Your upstairs facilities are impacted but downstairs is working - this suggests an internal blockage" [V].
- "Property owners are responsible for the pipes in the homes and the ones connecting to our sewers." [V]
- "Take chemicals, solvents, engine oil and paint to your local refuse or recycling site" [V].

**ASHI, "Plumbing System"** re-read. Beyond Part A §2:
- "Homeowners may notice an odor in a bathroom that is rarely used or in the basement." [V] "The problem could be that the trap in the bathtub or a basement floor drain that has dried out and the sewer gas is seeping out. Water can be poured into the drain to refill the trap." [V] It adds that it could also be a damaged pipe behind a wall or in the attic, a plumber's repair.
- "Be sure to occasionally run water in fixtures (tubs, sinks, showers, floor drains, etc.)." [V]
- "Don’t pour grease, fat, coffee grounds or other food products down the drain." [V]

**City of Superior, "Sewer Smarts and Plumbing Basics"** re-read. Beyond Part A §2:
- "This trap seal prevents sewage system odors, gases, and vermin (mice, insects, etc.) from entering the living or work space." [V]
- House traps: "In Superior, they are prohibited by building code." [V]
- Floor drains: "To prevent sewer gases from coming up through the drain, add a half a gallon of water to your floor drain at least once a month." [V]

**WRc, "After Fine to Flush, what happens next?"** re-read. Beyond Part A §2:
- "WRc fully supports the proposed ban on wet wipe containing plastic fibres" [V], and adds that
  it "won’t solve the whole problem though, as products such as baby wipes and cleaning wipes made from non-plastic materials may not disintegrate to a level that is harmless to our sewers as they are designed to be robust." [V]
- It is restarting flushability testing of plastic-free moist toilet tissue, against a standard it
  expects in a draft ISO standard. (Stage 4 note, lesson 04: the article expects that draft "in
  2025", so it was written in 2024; its words are that WRc "is working with retailers and
  manufacturers to recommence flushability testing". No later status read, so a lesson says WRc
  "said it was working to restart" testing, not that it is restarting now.)

**The Water Report** re-read, dated 1 October 2023: "But confusion among users for reasons that ranged from a blanket belief that all wipes were now safe to flush to failure to follow instructions accompanying the Fine to flush logo that only one wipe should be flushed at a time." [V] It names the scheme's developers as "Water UK and the Water Research Centre" [V].

**City of Superior**, one more line used: "A sink trap remains filled with water so that sewer gases can’t enter the room." [V] **Approved Document H** para 1.31: "Ventilating pipes open to outside air" [V]. (Stage 4 note, lesson 04: this is the opening of para 1.31's first sentence, "...should finish at least 900mm above any opening", not a heading; headed paragraphs in AD H take the form "1.29 Ventilation of discharge stacks – To prevent...".)

**SI 2025/1218** re-read in full on legislation.gov.uk: made 18 November 2025, in force 19 May 2027
(reg 1(2), 18 months after making). Reg 1(3): extends to England and Wales, applies to England only.
Reg 3(1): "A person may not, in the course of a business, supply or offer to supply wet wipes containing plastic to an end user in England." [V] Exemptions for registered pharmacies, medical
use and supply to businesses and local authorities (regs 5 to 7). It regulates supply; it says
nothing about what a householder flushes.

---

## Gate closures, lesson 05 (2026-09-25)

Read by the lesson 5 drafter on 2026-09-25, curl with a browser User-Agent plus pandoc for HTML
pages and pdftotext for PDFs. Every [V] below was string-checked against the extracted text on the
day. Sites that refused automated reading are named with what they returned.

### G-E5 closed: a step-by-step for resetting a tripped circuit, one UK and one US source (plus a second of each)

**UK. National Grid Electricity Distribution, "What to do during a power cut"**
https://powercuts.nationalgrid.co.uk/power-cut-advice/what-to-do (page title "National Grid - What
to do"). Read: full text. No date shown. A distribution network operator, writing for its own
customers about power cuts. The page does not name the areas it covers, and this course did not
read a page that does.
- "First, check to see if it's a power cut or a problem with your fuses. Speak to your neighbours, or during the night, check the street lights. You'll soon know whether it's a power cut or not." [V]
- "Find your fuse box and check that the trip switch is set to 'On' (It's the biggest switch and is usually red). If it's in the 'Off' position, turn off anything plugged into the sockets (or pull out the plugs) and turn the switch to 'On'. If the power doesn't come back on, you can call our Contact Centre 24/7/365" [V] (no full stop after "24/7/365" on the page).
- "Turn off or unplug any sensitive and expensive electrical equipment." [V] (in a power cut, against surges)
- "Power cut? Call 105" [V] (a button on the page).
- Scope: the page does not say what to do if the switch trips again, and does not distinguish a
  main switch from an RCD. "It's the biggest switch and is usually red" is the network's own
  description, not a standard. A lesson quotes it as National Grid's and says it is one network's
  description.

**UK, second source. SSEN (Scottish and Southern Electricity Networks), "What to do during a power cut"**
https://www.ssen.co.uk/power-cuts-emergencies/what-to-do-during-a-power-cut/ (redirected from
/Powercuts/whattodo/). Read: full text. A distribution network operator; the page does not name
its areas.
- "If everyone has power and you don’t, check your fuse box to see if any switches are in the ‘off’ position and check if your meter has a display, if it does, this means power is coming into your property." [V]
- "Complete a full reset of your fuse box by turning OFF the main larger switches and then all your smaller switches. Repeat the process by turning ON the larger switches first, then turn the smaller switches on one by one. This reset can help identify if there is an internal issue." [V]
- "If you have checked with your neighbours and reset your internal switches and still have no power, report it to us on our Power Track site" and "call us on 105" [V].
- "Just give us a call on 105 for free on landline or mobile." [V]

**G-N1: 105 re-read today** on both pages above. It is the UK power cut number; the lesson prints
it only as the number for a power cut, not for a tripped switch.

**US. Southern California Edison (SCE), "How do I reset my circuit breakers?"** (Help Center)
https://www.sce.com/customer-service-center/help-center/outages/general/reset-circuit-breakers
Read: full text. No date shown. A California electric utility, writing for its customers.
- "If a circuit in your home overloads or shorts, the breaker will trip and cut power. This helps prevent fire and possible electrocution." [V]
- Steps, numbered on the page:
  1. "Turn off light switches and unplug appliances in all rooms that have lost power." [V]
  2. "Find your circuit breaker box and open the cover. Inside you’ll see the circuit breakers – small switches that may be labeled "kitchen," "bathroom" etc." [V] ("open the cover" here means the panel door in front of the switches; the page gives no instruction to remove anything. The page's spaced dash: quote around it.)
  3. "Find the tripped breaker – it’s the one that’s in the "off" position, or the middle position between "on" and "off."" [V] (spaced dash again)
  4. "If it isn’t already, move the switch to the full "off" position, then back to "on." This should clear any overload and return power to the room." [V]
  5. "If the breaker trips again, it could be for a number of reasons: too many lamps and appliances plugged in; a damaged cord or plug; a short-circuit in a receptacle, switch, or fixture; or faulty wiring. Be sure to identify and fix problems." [V]
- Notes and warnings: "If a breaker trips repeatedly, reset it only when you've corrected the problem. You can also call an electrician." [V] "Most tripped breakers show an orange flag when a breaker is in the tripped position." [V] "If your home has fuses instead of circuit breakers, follow the same steps for finding the blown fuse. Make sure to replace it with a new one of the same amperage." [V] "When resetting a breaker, use only one hand. Stand to the side to avoid electrical arcing if the breaker should malfunction." [V] "Working with electrical systems is potentially dangerous. If you're unsure of your abilities, or about any aspect of the job, call an electrician." [V]
- For the drafter: SCE's "Be sure to identify and fix problems" covers the receptacle, switch,
  fixture and wiring causes it has just listed. Fixing those is wiring, which this course does not
  teach (OUTLINE decision 7). A lesson quotes SCE's steps 1 to 4 and its warnings, and for step 5
  keeps the householder to the plug-in causes (too much plugged in, a damaged cord or plug) and
  sends the rest to an electrician, saying that is the course's line. It never presents SCE's
  sentence as permission to open anything.

**US, second source. SCE, "A Step-by-Step Guide to Safely Resetting Your Breakers"** (Energized by
Edison, Shulie Tornel, published June 08, 2022)
https://energized.edison.com/stories/a-step-by-step-guide-to-safely-resetting-your-breakers
Read: full text. The same utility's news site; the same five steps in other words.
- "Resetting a circuit breaker is simple if you know how and will restore power to the room or rooms affected if there isn’t an outage or problem in the wiring." [V]
- "Some homes may have multiple electrical panels located outside or within the home." [V]
- "Breaker Trips Again: If the circuit breaker trips again, it could be for several reasons: too many lamps and appliances plugged into the circuit; a damaged cord or plug; a short-circuit in a receptacle, switch or fixture; or faulty wiring or circuit breakers." [V]
- "Troubleshooting: Hire a qualified, licensed electrical contractor to troubleshoot the issue and perform repairs." [V]

**Not read:** Electrical Safety First's RCD page (the old URL now redirects to its home-buyers page,
which is the checklist Part A §3 recorded), UK Power Networks' "What are trip switches" and SP Energy
Networks' power-cut page (both 403). No source read gives the "plug back in one at a time" method
for finding a faulty appliance, so a lesson does not teach it as a step. What the sources do give
is: unplug or switch off before resetting (National Grid, SCE), and a device that "keeps tripping"
(ESF FAQ) or "trips repeatedly" (SCE) goes to an electrician. (Stage 4 note, lesson 05: this line
formerly read "reset once, and a second trip means a fault (ESF FAQ, SCE)". No source says "once"
or "a second trip"; SCE's step 5 says a second trip "could be" an overload among other causes.)

**The 30 mA figure (G-E1): closed from HSE, for workplaces.** HSE, *Electrical safety and you: A
brief guide*, INDG231(rev1), first published 04/12, reprinted 08/13,
https://www.hse.gov.uk/pubns/indg231.pdf. Read: full text (6 pages), pdftotext. Written for work.
- "An RCD is a device which detects some, but not all, faults in the electrical system and rapidly switches off the supply." [V]
- "The best place for an RCD is built into the main switchboard or the socket outlet, as this means that the supply cables are permanently protected. If this is not possible, a plug incorporating an RCD or a plug-in RCD adaptor can also provide additional safety." [V]
- "RCDs for protecting people have a rated tripping current (sensitivity) of not more than 30 milliamps (mA)." [V]
- Its list: "an RCD is a valuable safety device, never bypass it;" [V] "if it trips, it is a sign there is a fault – check the system before using it again;" [V] (spaced dash; quote around it) "the RCD has a test button to check that its mechanism is free and functioning – you should use this regularly." [V]
- The leaflet's status: "Following the guidance is not compulsory, unless specifically stated, and you are free to take other action." [V]
- **Still not closed:** a UK test interval (HSE says "regularly", no number; ESF's three months is
  still snippet only), so the fallback stands: the maker's instructions say how often. And a UK
  account of how an RCD detects a fault: HSE's "detects some, but not all, faults" is all that was
  read, so the mechanism stays CPSC's, given for the GFCI.
- 30 mA and CPSC's 0.006 A (6 mA) measure different things (CPSC's is the smallest difference a
  GFCI can detect; HSE's the ceiling on a people-protecting RCD's rated tripping current), and
  neither source attributes its figure to a standard. Never set side by side as equivalent. (Stage 4
  note, lesson 05: formerly "different standards' figures", which no source read says.)

**G-E4 (current NEC GFCI locations): not closed.** NFPA's code text needs an account; ESFi's live
site returned 403 before (Part A); the search results were manufacturers' and trade blogs. Fallback:
CPSC's list, labelled as CPSC's, stopping at 2005, and "the code applies as each state adopts it".

### Re-read at drafting

**CPSC, "GFCIs Fact Sheet" (Document 099)**, https://www.cpsc.gov/s3fs-public/099_0.pdf, re-read in
full. Additions to Part A §3:
- "A GFCI constantly monitors current flowing through a circuit. If the current flowing into the circuit differs by a very small amount (as little as 0.006 amperes) from the returning current, the GFCI interrupts power faster than a blink of an eye to prevent a lethal dose of electricity." [V] (line breaks joined)
- "GFCIs are designed to operate before the electricity can affect your heartbeat." [V] (the PDF's OCR prints "GFCls" with a lower-case L; quoted with the capital I)
- The example: "A bare wire inside an appliance touches its metal case. The case is then charged with electricity. If you touch the appliance with one hand while another part of your body is touching a grounded metal object, such as a water faucet, you will get shocked." [V]
- The receptacle GFCI "protects against ground-faults for whatever is plugged into the outlet and other electrical outlets further "down stream" in the branch circuit." [V]
- Test every GFCI "After installation", "At least once a month", "After a power failure", "According to the manufacturer's instructions." [V] Without instructions: "Plug a lamp into the outlet and turn the lamp on." "Press the GFCI's test button. Did the light go out? If not, the GFCI is not working or has not been correctly installed. Contact a qualified electrician to correct the wiring and/or replace the defective GFCI." "Press the reset button. Did the light come back on? If not, replace the GFCI." [V]
- Also: portable GFCI protection "With electric tools (drills, saws, sanders, etc.) for do-it-yourself work in and around the house" [V].
- "The GFCI is designed to protect people from severe or fatal electric shocks but because a GFCI detects ground faults, it can also prevent some electrical fires" [V].

**CPSC Publication 5133 (AFCIs)**, re-read in full; every quotation in Part A §3 matches. One more:
"By the time a fuse or circuit breaker opens a circuit to defuse these conditions, a fire may already have begun." [V]

**Electrical Safety First, "Plugs and fuses usage and safety"** (G-E7). The URL in Part B §3 now
redirects to https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/.
Read: full text. Its fuse examples re-read, so a lesson may give them as ESF's:
- "The fuse inside a UK plug is a safety device to protect you. It will 'blow' if an electrical appliance or extension lead draws too much current, either because of an overload or a fault." [V]
- "The blown fuse cuts off the electricity, stopping the cable and appliance from overheating and causing a fire." [V]
- "If you have to replace a fuse, replace it only with another of the same rating. A standard UK plug is usually fitted with a 3A or 13A fuse." [V]
- "3A – Table lamp, standard lamp, television, video, computer, soldering iron." [V] "13A – Washing machine, dishwasher, fridge, freezer, power drill, vacuum cleaner, microwave, kettle, toaster, iron." [V] (spaced dashes; quote around them)
- "Manufacturers have now standardised plug fuse ratings to be either 3A or 13A. But 5A fuses are still used in some older equipment and are available to buy." [V]
- "Only remove the cover when the plug is out of the socket first." [V] "The fuse is the correct size and meets British Standard BS 1362 – it will be marked on the fuse body. Check manufacturer's instructions if you are not sure which fuse to use." [V]
- "Don't ignore burn marks, ‘arcing’ (buzzing or crackling) sounds, fuses blowing, circuit-breakers tripping, or if it feels hot to touch." [V] "Unplug and contact the retailer, manufacturer, or a qualified repair technician." [V]
- "If you don’t have RCD protection, use an RCD plug on the socket where the product is plugged in." [V]
- Periodic inspection "at least every 10 years for an owner-occupied home" [V]; "for tenanted properties, every 5 years or at each change of occupancy, whichever is sooner" [V] (ESF's recommendation).
- GOV.UK's 5A vacuum cleaner example (D35) and ESF's 13A for a vacuum cleaner disagree; the lesson
  teaches "the rating the maker specifies" and gives neither list as a rule.

**Electrical Safety First, "Socket-outlets usage and safety"** (D34), now at
https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/overloading-sockets/.
Read: full text; the calculator did not render.
- "Most extension leads are rated at 13A but some older ones and many cable reels may be only 10A or less." [V]
- "plugging an extension lead into another extension lead as this could cause the plug in the wall socket to overheat." [V]
- Cable reels: "It's important they are fitted with a thermal-cutout." "Make sure they are fully unwound if you need the full current rating." "The current rating is typically as low as 3 or 4A when wound." [V]

**Electrical Safety First, "FAQ for Electrical Safety"**, now at
https://www.electricalsafetyfirst.org.uk/safety-advice/your-questions-answered/ (the RCD FAQ URL in
Part B §3 redirects here). Re-read:
- "If the RCD in your fusebox keeps tripping, there is likely to be a fault that needs investigating - either with a particular appliance or the wiring itself." [V] (the page's hyphen)
- "You should get a registered electrician to investigate and they will be able to advise you on a solution and carry out any work required." [V]
- "If you notice anything unusual - for example, burn marks on plugs and sockets, sounds of ‘arcing’ (buzzing or crackling), fuses blowing or circuit-breakers tripping - get a registered electrician to check your electrics as soon as possible." [V]

**SI 2020/312, regulation 3**, re-read in full on legislation.gov.uk; no known outstanding effects.
Reg 3(1)(b) and (2)(a): inspected and tested "at intervals of no more than 5 years" [V]; reg
3(1)(c) (amended) before the tenancy starts; reg 3(3)(b): a copy of the report to "each existing
tenant of the residential premises within 28 days of the inspection and test" [V]. Reg 3(2A), added
by amendment, lets a landlord show "all reasonable steps". England.

---

## Gate closures, lesson 02 (2026-09-25)

Read by the lesson 2 Stage 4 fixer on 25 September 2026, curl with a browser User-Agent and an HTML
stripper, whole regulation each time. Every [V] below was string-checked against the extracted text
on the day.

**G-W4, the 7 m guaranteed minimum pressure: closed, for England and Wales, from the regulations
themselves.** Ofwat's page is still unread; the standard is now stated from the statute, not from
WaterSafe. The Water Supply and Sewerage Services (Customer Service Standards) Regulations 2008,
SI 2008/594, revised text on legislation.gov.uk, both pages showing "no known outstanding effects".
- Regulation 17G (England), https://www.legislation.gov.uk/uksi/2008/594/regulation/17G, versions
  from 1 April 2017 and 2 July 2025 (amended by SI 2025/662). Heading "Pressure standard", extent
  E+W. Reg 17G(1): [V] "An English water wholesaler must maintain, in a communication pipe serving
  premises supplied with water, a minimum water pressure of seven metres static head (the “MW
  pressure”)". Reg 17G(2)(a): the English service provider [V] "must pay the customer £50" when the
  pressure failure conditions are met. Reg 17G(3): the pressure falls below the MW pressure [V] "for
  an hour or more", other than in connection with necessary works or because of drought, and does so
  again within [V] "the period of 28 days" beginning on the day of the first failure. Reg 17G(5)(a):
  no payment once payments [V] "totalling £250" have been made to the customer in the same financial
  year; 17G(5)(b) and (c) add a three-month claim rule where the company could not identify the
  customer, and exceptions for industrial action and third parties' acts. Reg 17G(6)(a):
  "communication pipe" means [V] "the part of a service pipe between an English wholesaler’s water
  main and the boundary of the street in which the water main is laid"; (b) gives a variant for
  premises abutting the street, with a stopcock near the boundary.
- Regulation 10 (Wales), https://www.legislation.gov.uk/uksi/2008/594/regulation/10, as amended
  1 April 2017. Heading "Pressure standard". Reg 10(1): [V] "A Welsh water undertaker must maintain,
  in a communication pipe serving premises supplied with water, a minimum water pressure of seven
  metres static head." Reg 10(2): two occasions in 28 days each lasting one hour or longer, and the
  undertaker [V] "must, except in the circumstances described in paragraph (3), pay the customer
  £25." Reg 10(3): not for necessary works or drought. Reg 10(5)(a): no payment where one has already
  been made [V] "in respect of another such failure in the same financial year" (so at most one a
  financial year). Reg 10(6)(a) defines "communication pipe" in the same words for a Welsh undertaker.
- Scope: England and Wales only. Scotland and Northern Ireland not read. The regulations measure in
  the communication pipe, which is the company's side of the boundary; nothing in them concerns a tap
  inside the home. WaterSafe's "7 metres static head (0.7 bar)" matches the statutory figure.

## Stage 4 note, lesson 04 (2026-09-25)

The lesson 04 reviewer ("Water out: traps, vents and blocked drains") re-fetched every primary the
lesson cites with curl (browser User-Agent) on 2026-09-25; the fixer re-fetched the Thames Water
release, UGA Circular 1082, Poison Control's drain-cleaner page, ASHI, WaterSafe and Approved
Document H 2015 the same day. Corrections made in place above, each marked "Stage 4 note, lesson
04": UGA's septic line (hire a professional), the Thames Water survey's provenance (commissioned,
Opinion Matters), WRc's restart of testing (written in 2024, no later status), and Approved Document
H para 1.31 (not a heading). Also:

- **UKHSA, sodium hydroxide:** gives no advice on goggles, gloves, ventilation, pouring or mixing.
  It says correct use of household products is not expected to cause harm, and gives storage
  advice for "Sodium hydroxide containing products" (not caustic products in general). Every
  condition on using a drain cleaner in this course is Poison Control's (US).
- **Approved Document H 2015:** Table 1 is titled "Minimum trap sizes and seal depths" [V]; para
  1.3's 25 mm applies "Under working and test conditions" [V], a performance condition, not a rule
  that a trap may never fall below 25 mm. Approved Documents are "for the purpose of providing
  practical guidance" [V] (front matter, reviewer's read).
- **City of Superior:** attributes its stack definition to "The Universal Plumbing Code (UPC)" [V];
  its floor-drain reason is preventing sewer gas, not that the drain is forgotten.
- **Thames Water, blockages:** the owner's responsibility for "the ones connecting to our sewers"
  sits beside the company's "may be our responsibility" cases (outside the property boundary, or
  more than one property affected); quote the one with the other.

Verified strings, checked against the live primary on 2026-09-25 (reviewer; the first three of the
new ones also by the fixer):
- WaterSafe: "A natural and chemical-free way to break up clogs is by using baking soda and vinegar" [V]. "If your sink has two basins, use a wet rag to plug the unclogged side." [V] "for around 15 to 60 minutes" [V] "Place a bucket under the P-trap to catch water and debris." [V] "Reattach the P-trap and tighten the nuts" [V] "If the water still backs up, the clog might be deeper in the plumbing system, requiring professional assistance." [V]
- Poison Control, drain cleaner: "Liquid drain cleaners contain potentially poisonous acidic or basic compounds, enzymes, and bacteria that are effective in clearing clogged drains." [V] (the page's "bottom line"). "Pour drain cleaners carefully and close to the drain to avoid splashing." [V] "injury can occur when a drain cleaner splashes back from the drain area. This can happen if the drain cleaner is poured from too high up, or if too much product is poured into a completely blocked drain." [V] Of drain cleaners that heat up: "The heat helps melt grease" [V] (reviewer).
- Poison Control, spring cleaning: "Never mix any cleaning chemicals since it might lead to a potentially dangerous chemical reaction." [V] Vinegar is named there as a mild acid and lye drain cleaners as strong alkalis.
- ASHI: "Flush the garbage disposal and bathroom sinks monthly by adding one pot of hot water, then a half cup of baking soda followed by one cup of vinegar." [V] "glub, glub, glub" [V] (analogy for why drains need air; nothing on the page about gurgling drains). "a damaged pipe behind a wall or in the attic" [V], given as "also possible", not as a next step.
- UKHSA: "commonly known as caustic soda and soda lye" [V]; "would not be expected to cause adverse health effects." [V]; "Sodium hydroxide containing products in the home should be stored in an appropriate container and kept out of the reach of children." [V]
- CDC (Internet Archive capture 20260923211319): "Never mix bleach with ammonia or other cleaners." [V]
- Approved Document H 2015: "should retain a minimum seal of 25mm of water or equivalent" [V]; "should be removable or be fitted with a cleaning eye" [V]; fn 2 to Table 1: "Where these appliances discharge directly to a gully the depth of seal may be reduced to not less than 38mm." [V] (covers dishwashers too).
- Thames Water, blockages: "we advise you contact a plumber." [V] "even the ones labelled ‘flushable’" [V]; 48 hours in normal weather and 72 when exceptionally busy, under "What about blockages outside my home?".
- Thames Water, fatberg release: "one of the leading causes of blockage-related internal flooding" [V]; up to 75,000 blockages, up to £40 million, 28% (20,000+); milk (61%), meat juices (31%) "this past month"; a quarter (25%) on wipes.
- Portland: "gets thick and sticky when it cools." [V] "doesn't break down in water, separates from other liquids, and sticks to pipes" [V].
- WRc: "based primarily on messaging" [V]; "flushable products are not the real problem for sewer networks." [V]; operated by Water UK since 2019, ended at the beginning of March 2024; WIS 4-02-06.
- SI 2025/1218: made 18 November 2025; in force 19 May 2027; reg 1(3) extends to England and Wales, applies to England only; reg 3(1) as recorded above; exemptions regs 5 to 7.
- UGA Circular 1082 (reviewed June 2021): "Hire a professional to pump your septic tank to prevent backup." [V] "every 3 - 7 years" [V].

## Stage 4 note, lesson 01 (2026-09-25)

Lines the lesson 01 Stage 4 reviewer read live on 2026-09-25 (curl with a browser User-Agent, HTML
stripped) that Part A §1 did not record, re-read by the fixer the same day by the same method. Each
string below was matched in the extracted text.

**WSSC Water, "Find and Operate Your Home's Main Water Valve"** (Part A §1; the page says it was last
modified 24 April 2026). Additions:
- Lever handles: "Slowly turn level handle valves ¼ turn, until the handle is not parallel with the pipe. It should stop at a ¼ turn." [V] ("level" is the page's typo for "lever"; quote from "until" or paraphrase.)
- After closing the main valve: "Open a tub or sink faucet (hot and cold) on the highest level of the home to relieve pressure, and watch that spout to ensure that water has stopped flowing." [V] "Then continue to open faucets throughout the home to drain-down as needed." [V] "If draining down the home, be sure to de-energize the water heater and boiler where applicable by shutting off power to electric water heaters and any type of boiler." [V] This is WSSC's advice to its own customers, and the only US burst-pipe-type order this course read; no US agency's order was read.
- The outside valve, in full: "please call a registered master plumber or WSSC Water at 301-206-4002 to work this valve. WSSC Water charges fees to turn water service on and off." [V] "Customers must agree to have these charges billed to their water and sewer accounts before scheduling this service." [V] It describes a scheduled, charged service for WSSC's own customers, not an emergency response and not other utilities' practice.
- Meters: some are "underground within a “pit” at or near the property line or right-of-way" [V]. The page doesn't say the outside valve is "often" in a pit; Part B's comparison table's "often in a meter pit" overstates it.
- House types: "Crawl-space plus a basement – the shut-off valve may be where the water enters the basement; in some older homes, the shut-off may be inside the crawl space." [V] (the page's spaced dash; don't quote across it). "Crawl-space with no basement" and "Slab-on-grade construction": near the water heater or under the kitchen sink, "but anywhere is possible." [V]
- Sprinklers: "Unless it is a sprinkler pipe that is leaking, you should only shut off the plumbing supply and leave the sprinkler piping charged/live." [V]

**WaterSafe, "How can I locate my internal stop tap"** (Part A §1). Additions:
- "If you over tighten or use excessive force you may damage the stop tap." [V] (the reason WaterSafe gives for "never force it").
- "You should be able to operate the valve yourself." [V]

**Re-read live by the lesson 01 reviewer, 2026-09-25** (curl with a browser User-Agent and HTML
strip, or pdftotext; each string matched in the extracted text). Recorded so later lessons can rely on
the date:
- National Gas, emergency-contacts: "Smell gas or suspect a leak? Call 0800 111 999 * (24 hours a day – free to call)." [V] "Turn off the meter at the control handle unless the meter is in the cellar." [V]
- Cadent, smell-gas: "you should call us immediately on 0800 111 999* at any time of the day or night." [V] "Open doors and windows to ventilate the property. Turn off the gas at the mains tap. This can usually be located near the gas meter and has a handle that can be turned 90 degrees. If the gas leak is in a cellar or basement, do not enter and instead evacuate the building." [V] Among its Don'ts: "Turn any power or light switches on or off." [V]
- Cadent, locating-your-meter-and-turning-off-the-gas: the ECV passage as Part A §4 records it [V]; "To access the meter you will need a key to open the door to the gas meter box." [V]
- SSE Airtricity Gas Supply NI, in-an-emergency: "phone the 24-hour Northern Ireland Gas Emergency Service on 0800 002 001" [V]; "Turn off the gas supply at the meter, unless the meter is located in a cellar or basement – in which case, do not enter." [V]; "Do no turn on or off any electrical switches, including door entry systems." [V] (the page's typo). SSE Airtricity is one of Northern Ireland's gas suppliers, not the only one.
- legislation.gov.uk, SI 1998/2451 reg 3: extent "E+W+S"; 3(1) "No person shall carry out any work in relation to a gas fitting or gas storage vessel unless he is competent to do so." [V]; "no known outstanding effects".
- legislation.gov.uk, SR 2004/63 reg 3 (N.I.): 3(1) "A person shall not carry out any work in relation to a gas fitting or gas storage vessel unless he is competent to do so." [V]; approval under 3(3) is "by the Executive"; no known outstanding effects.
- HSE L56 (fifth edition, 2018): para 52, "'work' includes do-it-yourself activities" [V] and "membership of an HSE-approved class of persons (under regulation 3(3)) is required only by businesses carrying out gas-fitting work." [V]; para 83 and ACOP para 81(a) as the gas-law section records them.
- HSE, faqownerocc.htm: "HSE strongly advises that all gas appliances, flues and pipework should be installed, regularly maintained and serviced at least annually by a Gas Safe registered engineer." [V] Its leak steps: "Shut off the gas supply at the meter control valve (if you know where it is)" [V], with no cellar condition. It says nothing about switches.
- Gas Safe Register, home-improvements page, Wayback 20251023004454: "Don’t DIY with gas appliances, always use a Gas Safe registered engineer" [V]; "you can perform the tasks set out in the user’s instructions, (provided by the appliance manufacturer) that are intended for the user to carry out. This would not be a breach of the law." [V]; "e.g., a cooker tap control knob" [V].
- Met Office, frozen-or-burst-pipes: the burst order, the electrics sentence and the six-monthly check as Part A §1 records them [V].
- CCW, both pages: as Part A §1 and Part B §3 record them [V].
- ESF: after-a-flood, rcds-explained, plugs-and-fuses and FAQ strings as the lesson 01 gate closure and Part A §3 record them [V].
- CPSC 5133 (R042012) and release 89-031 (Wayback 20260311171701): as recorded [V], including "function primarily to prevent the home wiring system from causing a fire." The CPSC 5133 instruction is about installing AFCIs; the live-panel fact is the reason it gives, not general advice about panels.
- HSE HSG85 (third edition, 2013) para 54: "neither is the use of non-contact devices such as ‘volt sticks’" [V].
- Con Edison: "Leave immediately and take others with you." [V] "Call 911 or 1-800-752-6633." [V] "Don’t light a match, smoke, flip a switch, ring a doorbell, or touch appliances or electronics, including your phone." [V] SoCalGas: "IMMEDIATELY EVACUATE THE AREA and call us from a safe location" [V]; "DO NOT turn electrical appliances or lights on or off" [V]. Atmos: "If you suspect a leak, call 911 and Atmos Energy from a safe distance" [V]; no switch advice in the extracted text, so "every source says don't touch a switch" is not true of Atmos or of HSE's page.
- Approved Document H 2015: "Under working and test conditions traps should retain a minimum seal of 25mm of water or equivalent." [V] (the qualifier is "working and test", not "working" alone); para 1.29 "discharge stacks should be ventilated" [V].
- ASHI: "Vent piping allows air into the system so drains flow easily." [V] Goodlife Centre: "Plumbing = water in and water out." [V] UGA Circular 1082, "Reviewed June 2021": "label switches if needed." [V]

## Gate closures, lesson 06 (2026-09-25)

Read by the lesson 6 drafter on 2026-09-25, curl with a browser User-Agent plus pandoc (HTML) or
pdftotext (PDF); Internet Archive captures through the `id_` raw form. Every [V] below was
string-checked against the extracted text on the day. The draft passed 100 measured minutes and
was split at the heating / hot water seam (lesson 6, "Heating: boilers, radiators and furnaces";
the hot water half held for the orchestrator), so some items below are used by that second half.

### G-W7 closed: boiler pressure for other makes, and repressurising

**Worcester Bosch, *System Filling Guide*** (https://www.worcester-bosch.co.uk/files/news/System_filling_guide.pdf),
linked from the pressure FAQ in Part A §5. Eight pages; the file carries "03/05/2016". Read: full
text. A maker's guide for its own boilers.
- "A sealed system relies on an operating pressure of between 1 and 1.5 bar to deliver heating and hot water at a consistently comfortable and reliable level." [V] (the layout splits it across a diagram; the words are in this order)
- Three filling methods "depending on which the installer has fitted": an external filling link ("A looped hose method"), a keyed filling link and a keyless filling link, the last two "found beneath and to the right of the boiler". [V for the quoted words]
- "Watch the gauge closely as the system fills. It may fill quite quickly so be ready to shut off the link when the needle is between 1 and 1.5 bar." [V]
- "If the pressure is or rises above 1.5 bar. Bleed a radiator until the pressure gauge returns to between 1 and 1.5 bar." [V] (sic, full stop after "bar")
- If refilling is needed "on a very regular basis, a plumber should be called to check for leaks in pipes or more likely, radiator valves." [V]
- It also gives a customer service number for a spare filling key; not used and not re-read.

**Ideal Heating, "Topping up the pressure on your Ideal Boiler"** (https://idealheating.com/tips-and-advice/topping-up-boiler-pressure).
Read: full text. A maker, about its own boilers.
- "The following guidance is intended for combi boilers where the filling loop or filling controls are clearly identifiable underneath or built into the boiler." [V]
- System and heat-only boilers with an external filling loop: "contact your installer or a suitably qualified heating engineer for assistance." [V]
- "A central-heating system can need repressurising once or twice a year without this indicating a boiler fault." [V] Small losses when air leaves by automatic air vents, when radiators are bled, through heating and cooling, and through tiny amounts at valves and joints.
- "The pressure gauge measures the pressure within the whole central-heating circuit, not just the boiler." [V]
- "It becomes more likely that there is a fault when the pressure drops repeatedly over a period of days or weeks, falls to zero, or requires frequent topping up." [V]
- "Switch the boiler off and allow the heating system to cool. The system pressure should be checked and adjusted while the boiler is cold." [V]
- "The normal cold operating pressure is between 1.0 and 1.5 bar." [V]
- "Only continue if you can clearly identify the correct filling controls. Do not operate unidentified valves underneath the boiler." [V]
- "Open them gradually, as the pressure may rise quickly." [V]; at about 1.0 to 1.5 bar cold, return the valves; "Leaving a filling valve partially open may cause the system pressure to continue rising." [V]
- "The pressure may rise slightly while the heating is operating. This is normal" [V]
- Contact Ideal if "The pressure drops repeatedly over days or weeks" [V], falls to zero, needs topping up more than once or twice a year, rises too quickly, will not increase, or water leaks from the boiler. Contact the installer or "local Gas Safe engineer" [V] for an external loop, a removed hose, controls you can't identify, leaks from radiators or pipework, or recent work.
- "We recommend checking your system for visible leaks, weeping valves or wet patches along pipework regularly." [V]
- The page footer carries a gas-leak line ("ventilate your home, shut off the gas, and call 0800 111 999"); not used.

**Baxi, "What should my boiler pressure be set at?"** (https://www.baxi.co.uk/help-and-advice/faqs/what-should-my-boiler-pressure-be-set-at).
Read: full text. A maker, about its own boilers.
- "The normal operating water pressure for your boiler and central heating system is between 1.0 and 2.0 bar." [V]
- "If the pressure drops below 1.0 bar, you need to repressurise it." [V]
- When heating, the needle "should not go higher than about 2.5 bar" [V]; if too high, a safety valve discharges water; bleeding radiators may bring it down.
- **So the makers differ:** Worcester Bosch, Vaillant and Ideal give 1 to 1.5 bar cold; Baxi gives 1.0 to 2.0 as its normal operating range. The lesson says so and sends the reader to their own boiler's manual.

**Worcester Bosch pressure FAQ and bleed page, Vaillant bleed page: re-read on the live pages.**
Text as recorded in Part A §5 and Part B §3. Additional [V] lines from Vaillant's "How to bleed a
radiator":
- "While this typically affects unvented systems more frequently, it can - and will - happen to every home heating system at some point." [V] (not used; the page's spaced hyphens)
- "wait approximately 1 hour (or 2 hours to be cautious)" [V]; "All thermostat valves need to be open." [V]
- "For reference, it looks like a small, round hole with a little square inside." [V]
- "A quarter to half a turn should be sufficient to open the valve enough for air to escape." [V]
- "Don't close the valve too tight, otherwise you might damage it." [V]
- "Air will naturally rise as it is lighter than water, so bleed all radiators in the ground floor before heading upstairs if you have a multi-story property." [V]
- "If you have to repeatedly bleed radiators, then discuss this with your installer when the boiler is serviced as there may be an underlying problem." [V]
- FAQ: "Additionally, the oxygen in the air in the system causes corrosion which can result in leaking and debris in your radiators." [V]
- Worcester Bosch bleed page: "Keep the radiator key turned until water starts to flow steadily and then turn the radiator key clockwise to close the valve." [V]

**Vaillant, "Why is my radiator not working?"** (https://www.vaillant.co.uk/advice/heating-tips/home-advice/why-is-my-radiator-not-working/).
Read: full text. Used only for: if the entire radiator isn't heating and shows no sign of trapped
air, check the valve setting; a valve "blocked by sludge or limescale" [V] is for a professional
heating engineer. **Not used, and a drafter should not use it:** its pressure paragraph calls the
gauge a display of "the level of water pressure being sent to the boiler from the mains" [V] and
says the correct level "is usually set at 1 bar" [V], which conflicts with Vaillant's own bleed page.

**Vaillant, "Hot water tank temperature"** (https://www.vaillant.co.uk/advice/heating-tips/home-advice/hot-water-tank-temperature/).
Read: full text. Used only for vented and unvented cylinders:
- A vented cylinder "is fed by a cold water storage tank (usually in the loft or airing cupboard)." [V]
- An unvented one: "The water in the tank is fed directly from the cold water mains. It doesn’t require a cold water storage tank." [V]
- **Not used:** its 60°C to 65°C recommendation and "below 50°C" legionella line (a maker's figures on a health question; HSE is the source used), and its statement that tanks "are now required by law to be fitted with a thermostat" [V], which cites no provision.

**Vaillant, "What is a tundish?"** (https://www.vaillant.co.uk/advice/heating-tips/home-advice/what-is-a-tundish/).
Read: full text. About unvented systems.
- "A tundish is a device placed close to the pressure release valve that allows people to see if water has escaped the system due to excessive water pressure." [V]
- "It is important to call a qualified boiler engineer if your tundish is dripping. This is a sign that either there is a fault with the pressure release valve or water pressure in the system is rising too high." [V]
- **Not used:** "it is illegal to make adjustments to a boiler system without proper training, as determined by the Local Authority Building Control" [V] (no provision cited; it would contradict the gas-law convention if repeated) and its building-regulations detail (the document it names is on the unread line).

### G-W1 closed for one maker: the T&P valve and tank flushing

**A. O. Smith, *Residential Gas Water Heaters, Direct Vented Gas Models: Installation and Operating Manual*, 326940-001**
(https://assets.aosmith.com/damroot/Original/10001/326940.pdf), PDF created May 2014 (code 1404).
Read: the sections on thermal expansion, the temperature-pressure relief valve and its test,
temperature regulation, maintenance, and draining, refilling and flushing; the rest searched. A
maker's manual for its own heaters; not a general rule.
- "The purpose of a temperature-pressure relief valve is to prevent excessive temperatures and pressures in the storage tank." [V]
- "It is recommended that the temperature-pressure relief valve be checked to ensure it is in operating condition at least once a year." [V] Elsewhere: "The T&P valve must be manually operated at least once a year." [V]
- Warnings: "water may be extremely hot" [V]; "Use care when operating valve as the valve may be hot." [V]
- If the valve fails to reset "and continues to release water, immediately close the cold water inlet to the water heater and drain the water heater" [V], and replace the valve.
- "Excessive water pressure is the most common cause of temperature-pressure relief valve leakage. Excessive water system pressure is most often caused by “thermal expansion” in a “closed system.”" [V] "The T&P valve is not intended for the constant relief of thermal expansion." [V] An expansion tank "must be installed on all closed systems"; "Contact a plumbing service agency or your retail supplier regarding the installation of a thermal expansion tank." [V]
- "Do not plug, block, or cap the discharge line." [V]
- "It is recommended that the tank be drained and flushed every 6 months to remove sediment which may build up during operation." [V]
- "FOR YOUR SAFETY AND SATISFACTORY OPERATION, IT IS RECOMMENDED THAT THIS HEATER BE CHECKED ONCE A YEAR BY A COMPETENT SERVICE PERSON." [V]
- Temperature: "The preferred starting point is 120°F at the “HOT” setting." [V] "Important: Adjusting the thermostat past the 120°F mark on the temperature dial will increase the risk of scald injury." [V]
- The manual prints a burn-time table credited to a 1978 CPSC memorandum; its figures differ from CPSC 5098's and **are not used** (the lesson keeps to CPSC 5098 alone).

### G-W6 partly closed: mixing valves, one US maker's mention

A. O. Smith's manual (above): "Valves for reducing the point-of-use temperature by mixing cold and
hot water are available (see Figure 8). Also available are inexpensive devices that attach to
faucets to limit hot water temperatures. Contact a licensed plumber or the local plumbing
authority." [V] No UK source on thermostatic mixing valves was read; the gate stays open for the UK.

### Filters: a maker's method, and ENERGY STAR re-read

**ENERGY STAR, "Maintenance Checklist"**, re-read live. As Part A §5, and the sentence after the
filter line: "Inspect, clean, or change air filters once a month in your central air conditioner, furnace, and/or heat pump. Your contractor can show you how to do this." [V]

**Carrier, "Furnace Filter Replacement: The How & Why of Changing Furnace Filters"**
(https://www.carrier.com/us/en/residential/hvac-resources/furnaces/changing-furnace-filters/).
Read: full text. A US furnace maker's page, with product promotion; used only for the method.
- Buy a filter "that matches the size required by your unit." [V]
- Steps: locate it (blower compartment or the duct into the furnace); turn the system off at the thermostat or the power switch on the outside of the cabinet; open the access panel; note the arrow; "Air should flow from the ductwork into the furnace." [V]; slide it out; fit the new one with the arrows the same way, "toward the blower motor" [V]; close the panel; power on.
- Its intervals ("about every three months", 1-inch filters about monthly) are Carrier's; the lesson uses DOE's and ENERGY STAR's.

### Re-read at drafting

- **CPSC 5098** re-read (PDF): text as Part A §1. Also: "The majority of injuries and deaths involving tap water scalds are to the elderly and children under the age of five." [V] The check: "hold a candy or meat thermometer under faucet for most accurate reading first thing in the morning or at least two hours after water use." [V] Gas water heaters: "call your local gas company for instructions." [V] Electric: "Call your local electric company to adjust the thermostat." [V] (the sheet is in two columns; pdftotext interleaves them, and the words read in column order)
- **HSE, "Legionella and landlords' responsibilities"** re-read live, full text. Beyond Part A §1:
  - "Legionnaires' disease is a potentially fatal form of pneumonia caused by the inhalation of small droplets of contaminated water containing legionella. All man-made hot and cold water systems are likely to provide an environment where legionella can grow." [V]
  - "The risks from hot and cold water systems in most residential settings are generally considered to be low owing to regular water usage and turnover." [V]
  - "For most domestic hot and cold water systems, temperature is the most reliable way of ensuring the risk of exposure to legionella bacteria is minimised" [V] (the sentence continues after a spaced dash: "keep the hot water hot, cold water cold and keep it moving." [V])
  - "The risk is further lowered where instantaneous water heaters (for example combi boilers and electric showers) are installed because there is no water storage." [V]
  - Tenants should "not adjust the temperature setting of the calorifier" [V] and should "inform you as the landlord if the hot water is not heating properly or there are any other problems with the system" [V].
  - Empty properties: "outlets on hot and cold water systems should be used at least once a week to maintain a degree of water flow and minimise the chances of stagnation." [V] "consideration should be given to implementing a suitable flushing regime or other measures such as draining the system if it is to remain vacant for long periods." [V]
  - "Health and safety law does not require landlords to obtain or produce a ‘legionella test certificate’." [V]
  - Scope: the page is written for landlords in Great Britain and says nothing about owner-occupiers.
- **Energy Saving Trust, "Boilers"** (capture 20260919232017) and **"The most economical ways to use your central heating"** (capture 20260417064839), re-read from the captures. Also: "Heating and hot water accounts for over half of what you spend in a year on energy bills" [V]; the room thermostat "turns the heating on until the room reaches the temperature you’ve set. Once it reaches the set temperature, it turns the heating off until the temperature drops again." [V]; "room thermostats need a free flow of air" [V]; the boiler's dial "sets the temperature of the water that’s pumped from the boiler through the radiators to heat your home. This is known as the boiler flow temperature." [V] The TRV scale line carries a spaced en dash ("0 – 6"); the lesson paraphrases it.
- **DOE Energy Saver captures** 20250102062644, 20250102062920, 20241215045250, 20250102084025 re-read: text as Part A §1 and §5.
- **Gas Safety (Installation and Use) Regulations 1998, regulation 3**, re-read on legislation.gov.uk: 3(1) and 3(3) as recorded in "The gas-work law, stated exactly".

### G-N4, one photograph

**Wikimedia Commons, "File:Radiator sleutel.jpg"** (https://commons.wikimedia.org/wiki/File:Radiator_sleutel.jpg),
by Sil10napel, own work, 11 August 2020, licence **CC BY-SA 4.0**, checked through the Commons API
on 25 September 2026. It shows a radiator bleed valve with a square recess and the key beside it.
Viewed; no brand visible. (A public-domain photo of a key alone, "File:Radiator bleedscrew.jpg",
was also checked and not used.)

### Gates left open

G-W10 (EST savings in pounds): left out. G-L11 (the building regulations document on unvented hot
water): not read, not named. No US tank water heater page from DOE could be read.

## Stage 4 note, lesson 07 (2026-09-25)

Lesson 7, "Heating: boilers, radiators and furnaces", Stage 4 Tier A. The reviewer re-read these
live (curl with a browser User-Agent, pandoc or pdftotext) or from the named Internet Archive `id_`
capture on 2026-09-25 and string-checked each [V] against the extracted text. The fixer adds them
here so the lesson's quotations match SOURCES.

**A correction: DOE's litre conversion is wrong.** DOE's archived "Tankless or Demand-Type Water
Heaters" (capture 20250102084025) prints "2–5 gallons (7.6–15.2 liters) per minute" [V as printed].
5 US gallons is about 18.9 litres (15.2 litres is 4 gallons; 1 US gallon is 3.785 litres). The
lesson gives the gallons as DOE's and the litres as the course's own conversion, "about 7.6 to 19
litres"; 41 gallons is about 155 litres by the same conversion. The Part A §1 line above keeps DOE's
text as printed.

- **Worcester Bosch pressure FAQ** (live): "When the heating system is cool, the pressure should be between 1 and 1.5 bar" [V]; "water has been lost from the system and must be replaced" [V]; "(about 2.75 bar or more)" [V]; "If pressure rises by more than 1 bar when the heating is up to temperature then the expansion vessel may require repressurising. This will require a service engineer." [V]; "The pressure in the system will usually require topping up once or twice a year." [V]; "If you are having to repressurise your heating system much more frequently, please contact your installer." [V]
- **Worcester Bosch *System Filling Guide*** (file dated 03/05/2016, pages 6 and 7): "A sealed system relies on an operating pressure of between 1 and 1.5 bar to deliver heating and hot water at a consistently comfortable and reliable level." [V]; "Watch the gauge closely as the system fills. It may fill quite quickly so be ready to shut off the link when the needle is between 1 and 1.5 bar." [V]; "If the pressure is or rises above 1.5 bar. Bleed a radiator until the pressure gauge returns to between 1 and 1.5 bar." [V]; for the keyed and keyless links, "Remove the bottom panel by pulling the catch down and then pulling the panel forward and down to remove." [V]
- **Worcester Bosch bleed page** (live): "colder at the top than at the bottom" [V]; "could mean that sludge has built up in your radiator and you might need your system cleaned." [V]; "Turn off your heating system and wait for the radiators to cool" [V]; "Keep the radiator key turned until water starts to flow steadily and then turn the radiator key clockwise to close the valve." [V]; "Boiler pressure can be lost when bleeding radiators." [V] The page says nothing about bleeding again and again; that point is Vaillant's alone.
- **Ideal, "Topping up the pressure"** (live): "The following guidance is intended for combi boilers where the filling loop or filling controls are clearly identifiable underneath or built into the boiler." [V]; "The system pressure should be checked and adjusted while the boiler is cold." [V]; "The normal cold operating pressure is between 1.0 and 1.5 bar." [V]; "Only continue if you can clearly identify the correct filling controls. Do not operate unidentified valves underneath the boiler." [V]; "Open them gradually, as the pressure may rise quickly." [V]; "The pressure gauge measures the pressure within the whole central-heating circuit, not just the boiler." [V]; "It becomes more likely that there is a fault when the pressure drops repeatedly over a period of days or weeks, falls to zero, or requires frequent topping up." [V]; "The pressure drops repeatedly over days or weeks" [V]; "Step 6. Vent (Bleed) all the radiators" [V] (seven steps in all: bleeding, then checking the pressure again, comes before switching back on); "We recommend checking your system for visible leaks, weeping valves or wet patches along pipework regularly." [V] Ideal also says "System and heat-only boilers may use an external filling loop" (reviewer's reading of the live page).
- **Baxi** (live): "The normal operating water pressure for your boiler and central heating system is between 1.0 and 2.0 bar." [V] (no mention of cold or hot); "If the pressure drops below 1.0 bar, you need to repressurise it." [V]; "should not go higher than about 2.5 bar" [V].
- **Vaillant bleed page** (live): "Air will naturally rise as it is lighter than water" [V]; "particularly towards the top of the radiator where the air is likely to end up lodged" [V]; "wait approximately 1 hour (or 2 hours to be cautious)" [V]; "All thermostat valves need to be open." [V]; "For reference, it looks like a small, round hole with a little square inside." [V]; "A quarter to half a turn should be sufficient to open the valve enough for air to escape." [V]; "Don't close the valve too tight, otherwise you might damage it." [V]; "The boiler should read between 1 to 1.5 bar of pressure when the central heating is cold." [V]; "If you have to repeatedly bleed radiators, then discuss this with your installer when the boiler is serviced as there may be an underlying problem." [V]; "the oxygen in the air in the system causes corrosion which can result in leaking and debris in your radiators" [V].
- **Vaillant, "Why is my radiator not working?"** (live): "If the entire radiator is not getting hot and showing no signs of trapped air, you should then check the valve on your radiator" [V]; "blocked by sludge or limescale" [V]; "call a professional heating engineer" [V].
- **Vaillant, "Hot water tank temperature"** (live): "fed by a cold water storage tank (usually in the loft or airing cupboard)" [V]; "The water in the tank is fed directly from the cold water mains. It doesn’t require a cold water storage tank." [V]
- **EST "Boilers"** (capture 20260919232017): "Combi boilers don’t use a hot water cylinder" [V]; "System boilers have a separate water cylinder to store hot water." [V]; "have two extra header tanks to store cold water, usually installed in the loft if there is one." [V]; "The flue is made of plastic. If it’s made of metal, it’s unlikely to be a condensing boiler." [V]; "over half of what you spend in a year on energy bills" [V]; condensing boilers "capture and reuse more of the heat from gases that normally escape in the boiler's flue" [V] (reviewer's string; the page's apostrophe style not re-checked by the fixer, so the lesson paraphrases it). The page gives no year and no geography for the energy-bills figure.
- **EST heating page** (capture 20260417064839): "turning up your room thermostat won’t make your home heat any faster!" [V]; "turns the heating on until the room reaches the temperature you’ve set. Once it reaches the set temperature, it turns the heating off until the temperature drops again." [V]; "For most people, this is between 18°C and 21°C." [V]; "work by sensing the air temperature around them. If the room is warmer than the setting on the TRV, the valve will close a little." [V]; "This reduces the volume of hot water flowing into the radiator." [V]; the lowest TRV setting "will reduce the volume of hot water flowing into the radiator" [V]; "sets the temperature of the water that’s pumped from the boiler through the radiators" [V]. EST describes a TRV in terms of flow, not as a target temperature.
- **DOE "Furnaces and Boilers"** (capture 20250102062644): "Furnaces heat air and distribute the heated air through the house using ducts. Boilers heat water, and provide either hot water or steam for heating." [V]; "An AFUE of 90% means that 90% of the energy in the fuel becomes heat for the home" [V]; "which can be as much as 35% of the energy for output of the furnace when ducts are located in the attic, garage, or other partially conditioned or unconditioned space." [V]; "should be provided by a heating system professional" [V]; "Furnace heat exchangers mix combustion gases with house air when they leak" [V]; "an important safety reason to have them inspected" [V]; 56% to 70%; 98.5%.
- **DOE heat pump pages** (captures 20250102062920 and 20241231180018): "Do not set back the heat pump's thermostat if it causes the backup heating to come on." [V]; "Backup heating systems, such as electric resistance or electric strip heaters, are usually more expensive to operate because they are less efficient." [V] (the next sentence on the same page: DOE does give the reason); "You should have a professional technician service your heat pump at least once a year." [V]; "Clean or change filters every 3 months or as recommended by the manufacturer or installer." [V]; "up to 75% compared to electric resistance heating" [V].
- **DOE air conditioner** (capture 20241215045250): "every month or two during the cooling season" [V].
- **DOE tankless** (capture 20250102084025): "2–5 gallons (7.6–15.2 liters) per minute" [V as printed; conversion wrong, above]; "41 gallons or less" [V]; "24%–34%" [V]; "Read your owner's manual for specific maintenance recommendations." [V]
- **ENERGY STAR checklist** (live): "Check all gas (or oil) connections, gas pressure, burner combustion and heat exchanger." [V]; "Inspect, clean, or change air filters once a month in your central air conditioner, furnace, and/or heat pump. Your contractor can show you how to do this." [V]
- **Carrier, furnace filters** (live): "matches the size required by your unit" [V]; "Remove the blower cabinet door or duct-mounted access panel to access the current filter." [V]; "Air should flow from the ductwork into the furnace." [V]; "The arrows should point toward the blower motor." [V]
- **SI 1998/2451 reg 3** (legislation.gov.uk, extent E+W+S): 3(1) "No person shall carry out any work in relation to a gas fitting or gas storage vessel unless he is competent to do so." [V]; 3(3) binds employers and self-employed persons, who must be "a member of a class of persons approved for the time being by the Health and Safety Executive" [V].
- **HSE "Gas safety: home owners"** (live): "HSE strongly advises that all gas appliances, flues and pipework should be installed, regularly maintained and serviced at least annually by a Gas Safe registered engineer." [V]
- **Wikimedia Commons, File:Radiator sleutel.jpg** (Commons API): Artist Sil10napel; Credit "Own work"; LicenseShortName "CC BY-SA 4.0"; AttributionRequired "true"; DateTimeOriginal 2020-08-11. The caption now links the file page and the licence.
- Not re-read at this review: L56 paragraphs and the Gas Safe capture (cited as recorded above).

## Stage 4 note, lesson 05 (2026-09-25)

The lesson 05 reviewer ("Electricity: what trips, and why") re-fetched every primary the lesson
cites with curl (browser User-Agent) plus pandoc or pdftotext on 2026-09-25; the fixer re-fetched
HSE INDG231, CPSC 099, the ESF FAQ, ESF's home-buyers page and ESF's DIY address the same day and
string-matched the lines below.

New strings, each checked live:
- HSE, INDG231(rev1), the RCD list, the item after "if it trips, it is a sign there is a fault": "if it trips frequently and no fault can be found in the system, consult the manufacturer of the RCD" [V]
- ESF, FAQ (https://www.electricalsafetyfirst.org.uk/safety-advice/your-questions-answered/), "Can an RCD fail?": "RCDs can be regularly checked using the test button on the device. If this doesn't work, you should get a registered electrician to investigate." [V]
- ESF, FAQ: "If, for example, your fusebox does not have RCD protection, it would be recommended that you upgrade your fusebox so that it meets the latest standard, but it is not urgent." [V]
- CPSC 099, of the GFCI circuit breaker: "Protects against both a ground fault and a circuit overload" [V]; of the NEC: it "may be adopted into law by states, counties or local jurisdictions" [V].
- ESF, home-buyers page (the old "RCDs Explained" address), the sentence after "require upgrading.": "An EICR will tell you if yours is still safe or not." [V] The page expands EICR as "Electrical Installation Condition Report (EICR)" [V].

Corrections:
- **CPSC 099 is not undated.** Its footer reads "092010" above "Pub. 099", probably a September
  2010 revision code (compare 5133's "R042012"); the sheet doesn't say. Corrected in place in Part A
  §3.
- **ESF's DIY page has moved.** https://www.electricalsafetyfirst.org.uk/guidance/advice-for-you/diyers/
  now redirects to https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/diy-ers/.
  Cite the new address.
- **"Reset once, and a second trip means a fault" is not the sources' rule.** Corrected in place in
  "Gate closures, lesson 05". NGED and SSEN say nothing about a repeat trip. SCE's step 5 says a
  second trip "could be" an overload, a damaged cord or plug, a short or faulty wiring; its repeat
  rule is for a breaker that "trips repeatedly". ESF's is for an RCD that "keeps tripping". HSE's
  "if it trips, it is a sign there is a fault" is about any trip, in a workplace, and is followed by
  the frequent-trip item above. What a lesson can support: a trip that comes back with the load
  still off rules out SCE's plug-in causes and goes to an electrician; a device that keeps tripping
  goes to an electrician. The synthesis's "after one reset" ("Safety-critical guidance", item 2) is this
  course's own rule and is labelled so wherever a lesson uses it.
- **6 mA and 30 mA are not "different standards' figures"** in any source read. Corrected in place.
- **SCE's "open the cover" is undefined on both SCE pages.** The gloss "the panel door in front of
  the switches" in the lesson 05 gate closure is the drafter's reading, not [V]; a lesson gives it as
  this course's reading.

## Stage 4 note, lesson 08 (2026-09-25)

The lesson 08 reviewer ("Hot water: scalds, legionella and the tank") re-fetched CPSC 5098 (PDF,
sheet code "009611 032012"), HSE "Legionella and landlords' responsibilities" (live page), A. O.
Smith 326940-001 (PDF, 48 pp.), Vaillant "What is a tundish?", UGA Circular 1082, ASHI "Plumbing
System" and EST "Boilers" (capture 20260919232017) with curl (browser User-Agent) plus pdftotext or
pandoc on 2026-09-25. The fixer string-matched the lines below against the same extracts.

New strings, each checked against the primary text:
- CPSC 5098, in its "Furnace heater" paragraph (water heated by a furnace or on-line system): "If you live in an apartment, contact the building manager to discuss possible options for lowering your tap water temperature." [V]
- HSE, landlords page, its typical low-risk example: "hot water is fed from instantaneous heaters or low volume water heaters (supplying outlets at 50°C)" [V]
- HSE, landlords page: "Testing for legionella should not be confused with temperature monitoring, which is a reliable method for confirming the water system is under control." [V]
- HSE, landlords page: "Health and safety law does not require landlords to obtain or produce a 'legionella test certificate'." [V] (HSE uses single curly quotes)
- A. O. Smith 326940-001, p. 14: "In addition to using lowest possible temperature setting that satisfies demand of application, a mixing valve should be installed at the water heater (see Figure 8) or at hot water taps to further reduce system water temperature." [V]
- A. O. Smith, T&P valve discharge pipe requirements (installation section, p. 16): "Must terminate a maximum of 6” above a floor drain or external to the building." [V]; "Shall not be plugged or blocked." [V]; danger label: "Keep clear of temperature-pressure relief valve discharge." [V]
- A. O. Smith, closed water systems and thermal expansion: devices "such as pressure-reducing valves, check valves, and back flow preventers" [V] "cause the water system to be a closed system" [V]; "As water is heated, it expands (thermal expansion). In a closed system, the volume of water will increase when heated. As the volume of water increases, there will be a corresponding increase in water pressure due to thermal expansion." [V]
- A. O. Smith: "Children, the elderly and the disabled and are at highest risk of scald injury." [V, sic]
- A. O. Smith: "When leaving your home for extended periods (e.g., vacations etc.) turn the temperature dial to its lowest setting." [V] (context only)

Checked absent: A. O. Smith's manual does not mention legionella anywhere. It offers mixing valves
only as a scald measure. CPSC 5098 does not mention legionella; HSE's landlords page does not mention
scalds.

Corrections:
- **Mixing valves are not a sourced resolution of scald against legionella.** Part A's item 2 ("usually
  resolved in practice by storing hot and blending down at the tap") and Part A item 15 are this
  file's commentary; no source read says so, in either country, and G-W6's partial closure (one US
  maker's scald paragraph) does not support it. A lesson may say only what A. O. Smith says, for its
  own heaters, and that the course read nothing on whether a mixing valve answers legionella.
- **A. O. Smith's read level** now adds the T&P valve's installation requirements and Figure 8, and
  the closed-system and thermal-expansion paragraphs.

## Stage 4 note, lesson 06 (2026-09-25)

Verified live on 25 September 2026 by the lesson 6 reviewer (curl, browser User-Agent, pandoc or
pdftotext) and re-checked by the fixer against the saved copies; the SI 2020/312 Schedule 1 and
regulation 2 re-read live by the fixer.

- **D33 is MHCLG's** (corrected in place above). FIRE0602 "Data - fires", 2025/26 accidental
  dwelling fires, checked by script: "Electrical distribution" 3,410 = "Wiring, cabling, plugs"
  2,497 + "Apparatus - batteries, generators" 885 + "Heating equipment - Power Source" 28.
  "Cooking appliances" 9,928 includes "Cooker incl. oven" 6,324, "Ring/hot plate (separate
  appliance)" 1,150, "Microwave oven" 873, "Grill/Toaster" 822, "Deep fat fryer" 173, barbecues,
  camping stoves and other cooking appliances; electric kettles sit under "Other electrical
  appliances". Release: [V] "cooking appliances were the largest specified ignition category for
  accidental dwelling fires, accounting for 42% of these fires".
- **SI 2020/312** (legislation.gov.uk, no known outstanding effects). Reg 3(1): [V] "A landlord who
  grants or intends to grant a specified tenancy must—". Reg 3(1)(c): [V] "ensure every electrical
  installation in the residential premises is inspected and tested by a qualified person before the
  specified tenancy commences." Reg 3(2)(a) [V] "at intervals of no more than 5 years"; 3(2)(b) an
  earlier date where the most recent report requires it. Reg 3(3)(b): [V] "supply a copy of that
  report to each existing tenant of the residential premises within 28 days of the inspection and
  test;". Reg 3(3)(e)(i): a copy to [V] "any new tenant under a specified tenancy of premises to
  which the report relates before that tenant occupies those premises". Reg 2: a "specified
  tenancy" is a tenancy of residential premises in England which grants the right to occupy as an
  [V] "only or main residence", [V] "provides for payment of rent (whether or not a market rent)",
  and is not of a description in Schedule 1. **Schedule 1** (as amended by SI 2025/1043 from
  1.11.2025): para 1 (private registered providers) omitted; para 2 [V] "A tenancy under the terms of
  which the occupier shares any accommodation with the landlord or a member of the landlord’s
  family." ("amenity" includes a toilet, personal washing facilities, a kitchen or a living room);
  para 3 a long lease or [V] "grants a right of occupation for a term of 7 years or more."; para 4
  student halls of residence; para 5 hostels and refuges; para 6 care homes; para 7 hospitals and
  hospices; para 8 accommodation provided under a duty on a relevant NHS body; para 9 (inserted
  2025) a moveable structure, vehicle or vessel. C12's read level now includes reg 2, reg 3(3) and
  Schedule 1.
- **ESF, "Plugs and fuses usage and safety"**, under "Check plugs and sockets" (the same two
  sentences are on "Socket-outlets usage and safety"): [V] "Don't ignore burn marks, ‘arcing’
  (buzzing or crackling) sounds, fuses blowing, circuit-breakers tripping, or if it feels hot to
  touch." then [V] "Unplug and contact the retailer, manufacturer, or a qualified repair
  technician." The ESF FAQ sends almost the same list to [V] "a registered electrician". So no
  ESF page splits the signs between appliance and wiring; the split lessons 5 and 6 use is the
  course's own reading. Also on the plugs page: [V] "As a general guide, plugs for appliances rated
  from 700-3000 watts (the maximum rating of a wall socket) should be fitted with a 13-amp fuse
  (coloured brown)." and [V] "A good rule of thumb is that fuses are rated according to the power
  rating of the appliance."
- **ESF, "Socket-outlets usage and safety"**: [V] "The rating should be clearly marked on the front
  for cable reels and on the back or underside of extension leads. If not, refer to the
  manufacturer’s instructions." The page offers a "socket overload calculator" (it needs
  JavaScript and did not render); no ESF page read gives a method for adding up a lead's load by
  hand. ESF says nothing about the thermal cut-out beyond [V] "It's important they are fitted with
  a thermal-cutout."
- **ESF "RCDs Explained" address** now 301-redirects to
  https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/home-buyers/ (H1 "Home
  buyers"; the HTML title tag still says "RCDs Explained"). On it: [V] "Don’t rely on the standard
  home survey as this will not cover electrical safety."; [V] "crackling sounds from light
  switches, light fittings, or socket-outlets."; [V] "Cracking or burn marks around light fittings
  should be checked by a registered electrician."
- **GOV.UK "Fire safety in the home"** (D35): the page says [V] "Applies to England"; the warning
  signs sit in [V] "Keep your eyes peeled for signs of dangerous or loose wiring such as scorch
  marks, hot plugs and sockets, fuses that blow or circuit-breakers that trip for no obvious
  reasons, or flickering lights." Its "around 4,000 fires" gives no year, data source or
  definition. Its vacuum-cleaner example is [V] "a vacuum cleaner a 5amp plug".
- **NFPA, Campbell 2022** (D37), page 2: [V] "Electrical failures or malfunctions were a factor
  contributing to the ignition of nearly four out of every five (80 percent)" of these fires. The
  report gives contributing factors, not who installed or last worked on the equipment.

## Stage 4 note, lesson 08, second pass (2026-09-25)

Read live on 2026-09-25 by the lesson 08 second-pass reviewer (curl, browser User-Agent, HTML
stripped by script); each string below copied from that extract.

**HSE, "Scalding and burning"** (https://www.hse.gov.uk/healthservices/scalding-burning.htm), page
dated "Updated 2024-11-14". Read: full text. Linked from HSE's landlords page under "Related
content". **Scope: health and social care settings in Great Britain, not private homes**; it says
the CQC is the relevant regulator for CQC-registered providers in England. This closes G-W6's UK
half for those settings only.
- "The health and social care sector often provides care and services for individuals who may be vulnerable to risks from hot water or surfaces." [V]
- "The risk of scalding or burning should also be assessed in community facilities such as hostels, or staffed and sheltered housing, where vulnerable people may be at risk." [V]
- "Any precautions taken should not introduce other risks, for example from legionella bacteria." [V]
- "Where vulnerable people are at risk from scalding during whole body immersion, water temperatures must not exceed 44°C." [V]
- "Where storage and distribution temperatures are being used to control legionella (above 60ºC and 50ºC respectively), or high temperatures might otherwise be achieved, baths and showers should be fitted with thermostatic mixer valves (TMVs) to ensure water temperatures do not exceed 44ºC." [V] (HSE's page uses the ordinal sign º in this sentence and the degree sign ° in the one above)
- "While the risk from basins is much lower, as there is no full body immersion, if someone is assessed as being vulnerable to the risk of scalding at basins, adequate controls on output temperature (such as TMVs) should be in place." [V]

**HSE, "Legionella and landlords' responsibilities"**, re-read live, two further strings:
- "The practical and proportionate application of health and safety law to landlords of domestic rental properties is that while there is a duty to assess the risk from exposure to legionella to ensure the safety of their tenants, this does not require an in-depth, detailed assessment." [V]
- "However, if a tenant were to contract Legionnaires' disease from the water system in their home, the landlord may be liable to prosecution under HSWA." [V]

**CPSC 5098**, re-read (PDF, sheet code "009611 032012"), its closing paragraph, in column order:
- "Never take hot water temperature for granted. Always hand-test before using, especially when bathing infants and young children. Leaving a child unsupervised in the bathroom, even if only for a second, could cause serious injuries. Your presence at all times is the best defense against accidents and scalding to infants and young children." [V]

## Gate closures, lesson 10 (2026-09-25)

Read by the lesson 10 drafter ("Carbon monoxide, smoke and the alarms that warn you") on
25 September 2026: curl with a browser User-Agent plus pandoc (HTML) or pdftotext (PDF); GOV.UK
pages through the content API; Internet Archive captures through the `id_` raw form (gunzipped).
Every [V] below was string-checked against the extracted text on the day.

### Re-read at drafting: the alarm law, England

**The Smoke and Carbon Monoxide Alarm (England) Regulations 2015 (SI 2015/1693), regulation 4**,
https://www.legislation.gov.uk/uksi/2015/1693/regulation/4, read in full, revised text. The page
shows [V] "There are currently no known outstanding effects for The Smoke and Carbon Monoxide Alarm
(England) Regulations 2015, Section 4." Extent shown as E+W; the instrument is England's (its title).
- 4(1): [V] "A relevant landlord in respect of a specified tenancy must ensure that—"
- 4(1)(a)(i): [V] "a smoke alarm is equipped on each storey of the premises on which there is a room used wholly or partly as living accommodation;"
- 4(1)(a)(ii): [V] "a carbon monoxide alarm is equipped in any room of the premises which is used wholly or partly as living accommodation and contains a [F2fixed combustion appliance other than a gas cooker]" (the brackets and "F2" are the site's amendment markers; a lesson quotes the words without them). Without the markers: [V, markers removed] "a carbon monoxide alarm is equipped in any room of the premises which is used wholly or partly as living accommodation and contains a fixed combustion appliance other than a gas cooker".
- 4(1)(b): checks that each prescribed alarm [V] "is in proper working order on the day the tenancy begins if it is a new tenancy".
- 4(1)(c): after a tenant's report made on or after 1 October 2022, an alarm found not in proper working order [V] "is repaired or replaced".
- 4(2): [V] "a bathroom or lavatory is to be treated as a room used as living accommodation."
- 4(4): [V] "“room” includes a hall or landing".
- **Correction to D23:** the amending instrument is **SI 2022/707** (the live page's textual
  amendments F1 to F6, all in force 1.10.2022), not "SI 2022/578". Words in reg 4(4) were also
  omitted from 1 May 2026 by SI 2026/325 (Renters' Rights Act consequential amendments); the
  omissions do not touch 4(1) or 4(2). "Relevant landlord" and "specified tenancy" are defined
  elsewhere in the Regulations, which were not re-read; a lesson says "a landlord of a tenancy the
  Regulations cover".

**Approved Document J (2010 edition incorporating 2010, 2013 and 2022 amendments)**, the PDF at
https://assets.publishing.service.gov.uk/media/6336e58be90e0772dc9651a2/ADJ_2022.pdf (pdftotext),
and the GOV.UK record (content API; organisation now "Ministry of Housing, Communities and Local
Government"). Read: requirement J3 and its limit, the "Main changes made by the 2022 amendments",
and paragraphs 2.34 to 2.36, 3.43 to 3.45 and 4.30 to 4.32. The ventilation sections are still
unread (G-L11 stays open).
- J3, as AD J reprints it (not the statute's words; see "Stage 4 note, lesson 11"): [V] "Where a fixed combustion appliance is provided, appropriate provision shall be made to detect and give warning of the release of carbon monoxide."
- [V] "Requirement J3 applies only to fixed combustion appliances located in dwellings."
- 2022 changes: [V] "Guidance has been added in support of requirement J3 “Warning of release of carbon monoxide” on the provision of carbon monoxide alarms where gas burning appliances and oil burning appliances are installed."
- 2.34: [V] "Where a new or replacement fixed solid fuel appliance is installed in a dwelling, a carbon monoxide alarm should be provided in the room where the appliance is located."
- 3.43: [V] "Where a new or replacement fixed gas burning appliance (excluding gas appliances used solely for cooking) is installed in a dwelling, a carbon monoxide alarm should be provided in the room where the appliance is located."
- 4.30: [V] "Where a new or replacement fixed oil burning appliance is installed in a dwelling, a carbon monoxide alarm should be provided in the room where the appliance is located."
- 3.44 (2.35 and 4.31 the same): [V] "Carbon monoxide alarms should comply with BS EN 50291-1:2018 and be powered by a battery designed to operate for the working life of the alarm." [V] "The alarm should incorporate a warning device to alert users when the working life of the alarm is due to pass." Mains-powered Type A alarms [V] "with fixed wiring (not plug-in types) may be used as an alternative, provided they are fitted with a sensor failure warning device."
- 3.45 (2.36 and 4.32 the same): [V] "The carbon monoxide alarm should be located in the same room as the appliance:" then [V] "on the ceiling at least 300mm from any wall or, if it is located on a wall, as high up as possible (above any doors and windows) but not within 150mm of the ceiling; and" then [V] "between 1m and 3m horizontally from the appliance."
- The note after each: [V] "Provision of a carbon monoxide alarm should not be regarded as a substitute for the correct installation and regular servicing of combustion appliances." The same note names a BS EN installation standard that is on the unread line; it is not named in a lesson.
- GOV.UK record: [V] "These amended provisions and guidance come into effect on 1 October 2022." **Correction to D25:** the record's words are "come into effect", not "in effect".

### G-Z2 closed: Scotland's in-force date

**The Housing (Scotland) Act 1987 (Tolerable Standard) (Extension of Criteria) Order 2019 (SSI
2019/8)**, https://www.legislation.gov.uk/ssi/2019/8/made (as made, read whole) and
https://www.legislation.gov.uk/ssi/2019/8/article/1 (revised). No known outstanding effects.
- Art 2 inserts into section 86(1) of the 1987 Act: [V] "(j)has satisfactory equipment installed for detecting, and for giving warning of, fire or suspected fire;" and [V] "(k)has satisfactory equipment installed for detecting, and for giving warning of, carbon monoxide present in a concentration that is hazardous to health,”." (the missing space after "(j)" and "(k)" is the site's rendering).
- Art 1 as made: in force [V] "1 February 2021". Art 1 as amended: [V] "comes into force on 1 February [F12022]", with [V] "F1Word in art. 1 substituted (28.1.2021) by The Housing (Scotland) Act 1987 (Tolerable Standard) (Extension of Criteria) Amendment Order 2021 (S.S.I. 2021/46), arts. 1, 2" and [V] "I1Art. 1 in force at 1.2.2022". So the criteria took effect on **1 February 2022**.
- The Scottish Government's own guidance chapters on the standard remain unread (their title is on the unread line).

**Scottish Government, "Fire and smoke alarms: the law"** (D26), sections "What each home needs"
and "Where and what to buy", re-read live; last updated 14 August 2024.
- [V] "Every home in Scotland must have interlinked fire alarms."
- [V] "Interlinked alarms means if one goes off, they all go off"
- [V] "It is the property owner’s responsibility for meeting the standard."
- [V] "one smoke alarm in the living room or the room you use most", [V] "one smoke alarm in every hallway and landing", [V] "one heat alarm in the kitchen"; [V] "All smoke and heat alarms should be attached to the ceiling and be interlinked."
- [V] "If you have a carbon-fuelled appliance like a boiler, open fire or wood burner, you must also have a carbon monoxide detector in the same room. This does not need to be linked to the smoke alarms."
- [V] "Gas cookers and hobs do not need a carbon monoxide detector."
- [V] "sealed battery alarms: these must be sealed tamper-proof units and have long-life lithium batteries which can last up to 10 years - you can fit these alarms yourself" (the page's spaced hyphen; a lesson splits the quotation around it).
- [V] "mains-wired alarms: these are cheaper than battery alarms but must be fitted by a qualified electrician"
- [V] "If you also need a carbon monoxide alarm and it is battery-operated, it must have a sealed battery for the duration of its lifespan."
- [V] "Replaceable batteries cannot be used because the sensors in the alarm degrade over time and so will not be able to detect heat or smoke."
- [V] "There have been several tragedies over the years where alarms failed because their batteries expired, or people have removed them."
- [V] "There is no list of approved suppliers or fitters. We cannot endorse or recommend specific products or suppliers."
- CO standard: [V] "carbon monoxide detector British Kitemark EN 50291-1".

### Re-read at drafting: US alarm law

**NCSL, "Carbon Monoxide Detector Requirements, Laws and Regulations"** (D31), re-read live: the
introduction, the note, and the rows for California, Illinois, Massachusetts, Minnesota, New York
and Texas.
- [V] "Most states have adopted requirements mandating the use of carbon monoxide detectors. These requirements may come from statute, regulation or code requirement."
- [V] "may not be reflective of all requirements" and [V] "please contact your state or local housing department."
- NCSL's California row: [V] "Requires the owner of every single family dwelling, hotel and motel dwelling units and all other existing dwelling units intended for human occupancy to maintain a carbon monoxide device in the unit." The statute (below) adds a condition that this summary leaves out.

**California Health and Safety Code section 17926**,
https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=17926.,
read in full (as amended by Stats. 2014, ch. 298).
- 17926(a): [V] "An owner of a dwelling unit intended for human occupancy shall install a carbon monoxide device, approved and listed by the State Fire Marshal pursuant to Section 13263, in each existing dwelling unit having a fossil fuel burning heater or appliance, fireplace, or an attached garage, within the earliest applicable time period as follows:" with (a)(1) single-family dwellings [V] "on or before July 1, 2011."
- 17926(b): [V] "With respect to the number and placement of carbon monoxide devices, an owner shall install the devices in a manner consistent with building standards applicable to new construction for the relevant type of occupancy or with the manufacturer’s instructions, if it is technically feasible to do so."
- The building standards 17926(b) refers to were not read.

**Minnesota Statutes 2025, section 299F.51** (https://www.revisor.mn.gov/statutes/cite/299F.51),
read in full, and **299F.50** (definitions), read in full.
- 299F.51 subd. 1(a): [V] "Every single-family dwelling and every dwelling unit in a multifamily dwelling must have an approved and operational carbon monoxide alarm installed within ten feet of each room lawfully used for sleeping purposes."
- Subd. 4: [V] "No person shall remove batteries from, or in any way render inoperable, a required carbon monoxide alarm."
- Subd. 6: [V] "A first violation of this section shall not result in a penalty, but is punishable by a safety warning. A second or subsequent violation is a petty misdemeanor."
- 299F.50 subd. 5: [V] '"Approved carbon monoxide alarm" means a device meant for the purpose of detecting carbon monoxide that is certified by a nationally recognized testing laboratory to conform to the latest Underwriters Laboratories Standards (known as UL2034 standards).' (straight double quotes in the source; set here in single quotes) This is a statute naming the standard (G-Z3's fallback condition); the standard itself remains unread.

### G-G3: HSE's "around 7", checked against the table HSE links

**HSE, "Gas safety - Carbon monoxide awareness frequently asked questions"** (D27), re-read live
in full (page stamp 2026-02-10).
- [V] "Carbon monoxide (CO) is a colourless, odourless, tasteless, poisonous gas produced by incomplete burning of carbon-based fuels, including gas, oil, wood and coal."
- [V] "Carbon-based fuels are safe to use. It is only when the fuel does not burn properly that excess CO is produced, which is poisonous."
- [V] "According to the HSE statistics every year around 7 people die from CO poisoning caused by gas appliances and flues that have not been properly installed, maintained or that are poorly ventilated."
- The four signs, unchanged from D27: [V] "yellow or orange rather than blue flames (except fuel effect fires or flueless appliances which display this colour flame)"; [V] "soot or yellow/brown staining around or on appliances"; [V] "pilot lights that frequently blow out"; [V] "increased condensation inside windows".
- The signs are introduced as ones [V] "which indicate incomplete combustion is occurring and may result in the production of CO".
- [V] "Carbon monoxide can be produced by any combustion appliance, including those that burn fossil fuels eg oil, wood and coal."
- [V] "If you have one of these appliances you should make sure that it is serviced and maintained by a competent person and the chimney is regularly swept."
- Spilling appliance: [V] "Call the National Gas Emergency Service on 0800 111 999"; [V] "Switch off the appliance and shut off the gas supply at the meter control valve"; [V] "Open all doors and windows to ventilate the room".

**HSE, "Gas safety in the home: FAQs"** (Part B §6; live title "Domestic gas: frequently asked questions"), re-read live; the CO alarm, servicing and
landlord passages read (the page was searched, not read whole).
- [V] "HSE strongly recommends the use of CO alarms as one useful precaution to give advance warning of CO in a property. Importantly alarms should not be regarded as a replacement for regular maintenance and safety checks by a Gas Safe registered engineer."
- [V] "Before purchasing a CO alarm, always ensure it complies with British Standard EN 50291 and carries a British or European approval mark, such as a Kitemark."
- [V] "Every year around 7 people die from gas-related carbon monoxide (CO) poisoning. HSE strongly advises that gas appliances and/or flues are regularly checked for safety at least once every 12 months."
- The page prices CO alarms; the price is undated and not used.

**HSE, RIDGAS, "Gas-related incidents reported under RIDDOR in Great Britain"**,
https://www.hse.gov.uk/statistics/assets/docs/ridgas.xlsx, the gas table on the statistics page
the CO FAQ links as "HSE statistics". Read: Contents, Notes and Table 1 in full. [V] "Date
published: 20 November 2025".
- Table 1, fatalities from carbon monoxide poisoning, Great Britain: 2020/21 **1**; 2021/22 **3**;
  2022/23 **2**; 2023/24 (revised) **2**; 2024/25 (provisional) **1**. All gas fatalities: 3, 5, 5,
  5, 2. CO poisoning incidents: 67, 51, 63, 84, 92. Non-fatal CO casualties: 88, 63, 85, 122, 133.
- Note b: Table 1 counts incidents notifiable under RIDDOR regulation 11(1), a duty on [V] "certain conveyors of gas (including LPG)"; [V] "The statistics published have been confirmed by HSE as an accurate representation of the number of people who have died as a result of a domestic gas incident." [V] "Suicides and cases of self-harm are not RIDDOR reportable as there is no accident causing the death or injury."
- Note 4: 2020/21 and 2021/22 [V] "are potentially affected by the impacts of the coronavirus pandemic."
- **Finding:** the table HSE's FAQ links gives 1 to 3 carbon monoxide deaths a year in Great Britain
  for 2020/21 to 2024/25, not "around 7". The FAQ gives no year for its figure. The course found no
  HSE source for "around 7"; a lesson attributes it to the FAQ, undated, and sets the table beside
  it with its scope (RIDDOR regulation 11(1) reports, piped and bottled gas).

### Re-read at drafting: CPSC and CDC

**CPSC, "Non-Fire Carbon Monoxide Deaths Associated with the Use of Consumer Products: 2022 Annual
Estimates"** (D28), PDF re-read: executive summary, introduction, "National Estimates" and "By
Product Category" sections, and Table 1 (2012 to 2022).
- [V] "CPSC has records from 182 reported incidents resulting in an estimated 274 unintentional, non-fire CO poisoning deaths associated with the use of consumer products under the CPSC’s jurisdiction."
- [V] "Sixty-four percent of the estimated 274 CO deaths in 2022 resulted from CO exposure in a home location."
- [V] "with more than half (59%) of the deaths occurring during the four cold months of November, December, January, and February." (2020 to 2022)
- Scope: [V] "This report does not include CO poisoning deaths involving products outside CPSC’s jurisdiction, incidents where the CO gas resulted from a fire, was solely from a motor vehicle, or was directly work related; and the report also does not include deaths that were suicides or otherwise intentional in nature." Completeness of the 2022 data: 90%, by the report's own measure; later years excluded as incomplete.
- Table 1, 2022 estimates: Engine-Driven Tools 107 (generators 71 gasoline, 5 LP, 17 unspecified fuel = 93; other engine-driven tools 13); Heating Systems 76; Multiple Products 33; Charcoal/Charcoal Grills 18; Ranges or Ovens 16; Grills, Camp Stoves 11; Water Heaters 9; Other Products 4 (these sum to 274). The table notes that figures may not add because of rounding.
- [V] "In 2022, such devices included charcoal/charcoal grills (an estimated 18 deaths) and gas ranges (16 deaths)." (devices "not specifically designed for heating purposes" known or suspected to have been used for heating an enclosed space)
- [V] "However, EDTs powered by gasoline engines may not emit an irritating exhaust smoke, even though they produce large amounts of CO, even in locations where sufficient oxygen is available for combustion."
- [V] "natural and LP gas appliances may emit potentially lethal amounts of CO without any irritating fumes to alert potential victims to the danger."
- [V] "sudden extreme hypoxia can result in rapid incapacitation and loss of consciousness, which prevent exposed individuals from leaving the hazardous environment." and CO combines with haemoglobin [V] "with an affinity about 250 times that of oxygen".

**CPSC, "Carbon Monoxide Information Center"** (D29), re-read from capture 20260908150612 (the live
page returned 403).
- [V] "More than 200 people in the United States die every year from accidental non-fire related CO poisoning associated with consumer products. More than 100 of those deaths are linked to portable generators."
- [V] "one portable generator can produce the same amount of carbon monoxide as hundreds of cars."
- [V] "Never use portable generators inside homes or garages, even if doors and windows are open. Use generators outside only, at least 20 feet away from homes with exhaust facing away."
- [V] "Install battery-operated CO alarms or CO alarms with battery backup on every level of the home and outside sleeping areas. Interconnected CO alarms are best; when one sounds, they all sound."
- The page lists three recent CPSC warnings to stop using particular combination smoke and CO detectors and plug-in gas and CO detectors; a lesson reports them without the product names.

**CDC, "Carbon Monoxide Poisoning Basics"** (D30), re-read from capture 20260920191925 (live page
403); page dated 12 January 2026.
- [V] "Each year, more than 400 Americans die from unintentional CO poisoning not linked to fires, more than 100,000 visit an emergency department, and more than 14,000 are hospitalized."
- [V] "Install battery-operated or battery back-up CO detectors near every sleeping area in your home."
- [V] "Replace your CO detector following the manufacturer's instructions or every 5 years."
- [V] "Have your heating system, water heater, and any other gas, oil, or coal burning appliances serviced by a qualified technician every year."
- [V] "Horizontal vent pipes for appliances, such as a water heater, should go up slightly as they go toward outdoors, as shown below. This prevents CO from leaking if the joints or pipes aren't fitted tightly."
- [V] "Never heat your house with a gas oven."
- [V] "Have your chimney checked or cleaned every year. Chimneys can be blocked by debris, which can cause CO to build up inside your home or cabin."
- [V] "Never burn charcoal indoors."
- [V] "Never use a portable gas camp stove indoors."
- [V] "Never use a generator inside your home or garage, even if doors and windows are open."
- [V] "Only use generators outside, more than 20 feet away from any windows, doors, and vents."
- [V] "When using a generator, use a battery-powered or battery backup CO detector in your home."
- [V] "Never run your car or truck inside a garage that is attached to a house, even with the garage door open."

### Re-read at drafting: smoke alarms and the fire figures

**MHCLG, "Detailed analysis of fires and response times to fires attended by fire and rescue
services, England, year ending March 2026"** (D33), 19 August 2026, release text via the GOV.UK
content API: the introduction and section 5 ("Smoke alarm function") read in full. The GOV.UK
record lists one organisation, the Ministry of Housing, Communities and Local Government.
- [V] "All fire-related Ministerial responsibilities moved from the Home Office to the Ministry of Housing, Communities and Local Government (MHCLG) on 1 April 2025."
- [V] "fires where a smoke alarm was not present accounted for 23% (6,026) of all dwelling fires and 24% (44) of all dwelling fire-related fatalities"
- [V] "dwelling fires where a smoke alarm failed to operate accounted for 19%, virtually unchanged (0.3 percentage points) on the previous year"
- [V] "Fires where a smoke alarm was present but either did not operate or did not raise the alarm accounted for 29% of all dwelling fires (19% and 10% respectively) in the year ending March 2026, similar to previous years."
- [V] "‘fire products did not reach detector(s)’" and [V] "‘fire in area not covered by system’" [V] "accounted for 66% of all failure to operate reasons for smoke alarms in dwelling fires."
- Footnote 10: [V] "Fire products did not reach detectors(s) can be where the smoke alarms present were poorly sited (for example not on the floor of origin) so the smoke did not reach the detector."
- Table 5.1 (source FIRE0704), reasons the alarm did not operate, share of dwelling fires: missing battery 1.8%; defective battery 3.1%; other act preventing alarm from operating 2.6%; fire products did not reach detector(s) 49%; fire in area not covered by system 17%; faulty system or incorrectly installed 2.4%; other 24% ("Other" includes "alerted by other means", "system damaged by fire", "other" and "don't know"). Casualty column not used.
- [V] "It shows that a smoke alarm was present and raised the alarm (functioned as intended) in 48% of dwelling fires, 38% of fire-related fatalities and 51% of non-fatal casualties in the year ending March 2026."
- The release now computes the likelihood of dying with and without a working alarm on a five-year average (its "Background" note).

**Fire Kills, "Detection"** (https://firekills.campaign.gov.uk/detect/), re-read live in full. The
page names no department.
- [V] "In more than a third of fires in the home, smoke did not reach a smoke alarm in time to raise the alert and warn the household of the danger." (no year or data source given)
- [V] "Make sure you have at least one on every level of your home and test them at least monthly."
- [V] "Do not put smoke alarms in or near kitchens or bathrooms where smoke or steam can set them off by accident."
- [V] "Never disconnect or take the batteries out of your alarm if it goes off by mistake unless you are replacing them."
- [V] "If it doesn’t sound, you need to replace the battery, or possibly the alarm itself."
- [V] "If it is a ten-year sealed battery alarm, you will need to replace the alarm itself every ten years."
- [V] "you are around 11 times more likely to die in a fire if you do not have any working smoke alarms"

**GOV.UK (Home Office), "Fire safety in the home" (accessible version)**, updated 25 May 2022 (the
record still lists the Home Office), re-read via the content API.
- [V] "You’re around 8 times more likely to die in a fire if you do not have a working smoke alarm in your home."
- [V] "Vacuum your smoke alarms every six months to remove dust."
- [V] "Test them by pressing the button until the alarm sounds."
- Mains-powered alarms: [V] "They need to be installed by a qualified electrician and, like battery alarms, they do require testing."
- [V] "If it is difficult for you to fit smoke alarms yourself contact your local fire and rescue service for help."
- So the government's figure for the added risk without a working alarm is "around 8 times" in the 2022 guide and "around 11 times" on the Fire Kills page today; neither gives the years behind it.

**USFA, "Smoke alarms"** (D41), re-read live; [V] "Page last reviewed: Sept. 21, 2026". The
9-volt line now extracts cleanly (Part B §6's "garbled" note no longer applies).
- [V] "Installing smoke alarms in every bedroom, outside each separate sleeping area, and on every level of a home" (the sentence continues after a spaced dash; quote no further)
- [V] "They need to be replaced 10 years from the manufacture date."
- [V] "Test smoke alarms every month and replace 9-volt smoke alarm batteries at least once every year."
- [V] "Never take the battery out of your smoke alarm while cooking!"; then [V] "Open a window or door and press the “hush” button.", [V] "Wave a towel at the alarm to clear the air.", [V] "Move the entire alarm several feet away from the kitchen or bathroom."
- [V] "Disabling a smoke alarm or removing the battery can be a deadly mistake."

**NFPA, "Smoke Alarms in U.S. Home Fires"** fact sheet (D42, Ahrens, data 2009 to 2013), re-read.
- [V] "Almost half (46%) of the smoke alarms had missing or disconnected batteries. Nuisance alarms were the leading reason for disconnected smoke alarms."
- [V] "Dead batteries caused one-quarter (24%) of the smoke alarm failures."
- [V] "Three of every five home fire deaths resulted from fires in homes with no smoke alarms (38%) or no working smoke alarms (21%)."

**NFPA, "Smoke Alarms at Home"** tip sheet (©NFPA 2018), re-read: alarms [V] "should be at least 10
feet (3 meters) from the stove" is split by layout as "They should be / at least 10 feet (3 meters)
from the stove."; a lesson quotes only "at least 10 feet (3 meters) from the stove".

### Re-read at drafting: chimneys, ventilation, dryers

- **HETAS** (Part B §6), live: [V] "HETAS encourage having your chimney swept at least twice a year when burning wood and at least once a year when burning smokeless fuels." [V] "between April 2021 and March 2022 there were 2,608 chimney fires in England, which is a 16% decrease from the previous year." [V] "HETAS recommends that chimney sweeping is best carried out by a HETAS Approved Chimney Sweep." [V] "Always ask to see identification before a sweep carries out any work."
- **CSIA, "Homeowner Resources"** (Part B §6), live: [V] "Chimneys, fireplaces, and vents shall be inspected at least once a year for soundness, freedom from deposits, and correct clearances. Cleaning, maintenance, and repairs shall be done if necessary." (CSIA quoting NFPA 211); of gas: [V] "the chimney can become non-functional from bird nests or other debris blocking the flue."
- **Energy Saving Trust, "Draught proofing"** (capture 20260916151311): [V] "You must not block fixed ventilation openings needed for flueless or open-flue gas heaters." [V] "Good ventilation is still essential, so you shouldn’t block vents, chimneys or airflow needed for safety and air quality."
- **USFA, *Clothes Dryer Fire Safety*** (Part B §6), re-read: [V] "Clean the lint filter before and after each cycle." [V] "Make sure that the outdoor vent covering opens when the dryer is operating." [V] "Have your dryer installed and serviced by a professional." The flyer gives no date and no figure.

### Gates left open

G-Z3 (the US alarm standards themselves; Minnesota's statute names one), G-R6 (no dryer-fire
figure), G-R7 (NFPA 211 only as CSIA quotes it), G-E8 (no NFPA web guidance), G-L11 (AD J's
ventilation sections). G-N4: no photograph sought for this lesson; it carries one SVG chart drawn
from MHCLG's Table 5.1. Wales and Northern Ireland alarm law: not read.

## Gate closures, lesson 09 (2026-09-25)

Read at drafting by the lesson 9 drafter ("Gas: the smell, the valve, the law and the engineer") on
25 September 2026 (the session ran past midnight into the 26th; every page below was fetched on the
25th), curl with a browser User-Agent and pandoc (HTML) or pdftotext (PDF); Internet Archive
captures through the `id_` raw form. Every [V] below was string-checked against the extracted text.
The draft passed 100 measured minutes (135) and was split at the natural seam between the leak and
the law: lesson 9 is now "Gas: the smell and the valve", and the second half, "Gas: the law and the
engineer", is held for the orchestrator. Both halves use the strings below.

### G-N1: the gas emergency numbers, re-read on the networks' own pages

- **Cadent, "What to do if you smell gas"**, https://cadentgas.com/smell-gas, full text: [V] "you
  should call us immediately on 0800 111 999* at any time of the day or night." Its Do's are as
  Part A §4 records them. Its Don'ts now extract in full: [V] "Turn any power or light switches on or
  off." [V] "Light any sort of flame within the property." [V] "Use any appliances that could cause a
  spark." Also: [V] "Once you're safe, call the National Gas Emergency Service number on 0800 111
  999*." (the asterisk is the page's footnote mark; a lesson quotes the words without it) [V] "If you
  smell gas outside your home, you should call the National Gas Emergency Service number on 0800 111
  999* as soon as possible. Refrain from lighting any naked flames in the area and wait for an
  emergency gas engineer to attend and investigate the problem." [V] "The number operates 24/7 and is
  free to call." Loss of smell: [V] "Follow the advice from our partner SmellTaste, a charity for
  people with smell and taste disorders."
- **Cadent, "Locating your meter and turning off the gas"**, re-read: the ECV passage and the meter
  box key as the lesson 01 gate closure records them.
- **National Gas, "Emergency Contacts"**, https://www.nationalgas.com/emergency-contacts, full text:
  [V] "Smell gas or suspect a leak?" [V] "these emergency guidelines apply to all gas users" (twice on
  the page). Its list, [V] each line: "Do not smoke or light matches." "Do not turn electrical
  switches on or off." "Open doors and windows." "Turn off the meter at the control handle unless the
  meter is in the cellar." "Call the National Gas Emergency number (0800 111 999)." Struck pipes: [V]
  "If you or your builders have hit a gas pipe, call the National Gas Emergency Service on 0800 111
  999 – day or night." (the page's spaced dash; quote "day or night" alone) and [V] "or if a pipeline
  is struck (even if no gas leak has occurred)". The page also gives HSE's Gas Safety Advice Line,
  0800 300 363.
- **SSE Airtricity Gas Supply NI, "In an Emergency"**, full text: [V] "phone the 24-hour Northern
  Ireland Gas Emergency Service on 0800 002 001." Its steps, in order, [V]: "Turn off the gas supply
  at the meter, unless the meter is located in a cellar or basement – in which case, do not enter."
  (spaced dash; quote only up to "basement") "If there is a smell of gas in the cellar or basement,
  you should evacuate the building." "Extinguish all naked flames and do not smoke or strike any
  matches." "Open doors and windows for ventilation." "Check gas appliances to see if the gas has been
  left on unlit or that a pilot is out." "Do no turn on or off any electrical switches, including door
  entry systems." (sic) Then [V] "Call 0800 002 001 (Northern Ireland Gas Emergency number). Never
  leave it to anyone else to call the Emergency number and make sure you allow immediate access to an
  engineer."
- **HSE, "Gas safety: home owners"**, https://www.hse.gov.uk/gas/domestic/faqownerocc.htm, full text
  re-read. As C15 and the Stage 4 note for lesson 01 record, plus: [V] "The gas engineer's
  competencies are clearly marked on the back of the engineer's Gas Safe Register ID card." [V]
  "Importantly alarms should not be regarded as a replacement for regular maintenance and safety
  checks by a Gas Safe registered engineer." Checking an engineer: the Register's 'Find an Engineer'
  and 'Check an Engineer' services, [V] "By inputting the licence number from the engineers ID card.
  Consumers will be able to see pictures of the registered engineers and details of their
  qualifications." and a text service. [V] "All Gas Safe registered engineers carry ID cards which
  tell you which appliances they are qualified to work on." HSE's Gas Safety Advice Line: [V] "open
  between 9.00am and 5 .30 pm Monday to Thursday and 9.00am to 5.00pm on Friday (excluding bank
  holidays). To contact the Gas Safety Advice Line freephone 0800 300 363." (the page's spacing in
  "5 .30"; a lesson gives the hours in its own words). The page also prints the Register's freephone
  number; that is not the Register's own page and the lesson doesn't print it.

### US utility leak guidance, re-read (four utilities)

- **Con Edison, "Gas Safety"**, full text: [V] "Leave immediately and take others with you. If the
  leak is outside, move to a safe spot far away." [V] "Call 911 or 1-800-752-6633." [V] "Even if the
  odor isn’t very strong, you should still leave the area immediately, taking others, and then call.
  Don’t assume someone else has already called." [V] "Don’t light a match, smoke, flip a switch, ring
  a doorbell, or touch appliances or electronics, including your phone. Doing so can produce sparks
  that might cause the gas to explode." Signs: [V] "See a white cloud, bubbles in water, blowing dust,
  dying plants." [V] "Hear a roar, hiss, or whistle." Odorant: [V] "Since natural gas doesn’t actually
  smell like anything, a chemical called mercaptan is added to help you detect a leak." ("rotten
  eggs" is its comparison.) Odour fade, [V]: "If a natural gas leak occurs underground, the
  surrounding soil may cause odor fade such that the odorant may not be detected by smell in the
  atmosphere." [V] "If you suspect a gas leak but can’t smell it, you should still find a phone away
  from the area and call 911 or 1-800-75-CONED (1-800-752-6633)." Detectors: [V] "most carbon monoxide
  detectors do not detect combustible gasses. Be sure to check the label." (The page also describes
  gas leak detectors for sale; not used, decision 10.)
- **SoCalGas, "Natural Gas Leaks"**, full text, stamped [V] "Tue, 07/23/2024": [V] "IMMEDIATELY
  EVACUATE THE AREA and call us from a safe location"; [V] "Call 911 promptly from a safe location if
  there is damage resulting in a natural gas leak that may endanger life, cause bodily harm, cause
  property damage". Signs: [V] "dirt/water blowing into the air, a dry patch of grass"; [V] "If you
  hear unusual sounds like hissing or whistling". Can't smell it: diminished sense of smell, odour
  fatigue, [V] "You have a physical condition such as a common cold, sinus condition or allergies",
  tobacco, alcohol and some medications, masking odours, odour fade. Odour fade: [V] "Sometimes
  physical and/or chemical processes can cause a loss of odorant in natural gas, making it
  undetectable by smell." More likely [V] "In new, steel pipe that has been recently manufactured or
  hasn’t been used for odorized natural gas before"; [V] "In natural gas piping systems using higher
  gas pressure, and when natural gas flow is limited or intermittent"; [V] "In the presence of rust,
  mill scale, moisture, air, cutting oil, pipe thread compound, liquids, condensates, and other
  substances". [V] "Because of the possibility of odor fade, it's important to not rely only on your
  sense of smell to be alerted to a natural gas leak." Its don't list, [V]: "DO NOT smoke or light a
  match, candle or create any other flame." "DO NOT turn electrical appliances or lights on or off,
  operate motorized equipment or vehicles, or use any device that could cause a spark." "DO NOT
  attempt to control the leak or repair a damaged pipe or meter."
- **Atmos Energy, "Recognizing a leak"**, full text: [V] "If you suspect a leak, call 911 and Atmos
  Energy from a safe distance at our toll-free emergency number 866.322.8667." [V] "Do not assume
  someone else will report the leak." [V] "If you suspect a natural gas leak, leave the area
  immediately! From a safe distance call 911 and Atmos Energy's 24-hour toll-free emergency number".
  Still no switch advice in the extracted text.
- **Columbia Gas of Ohio, "Safe appliance installation"** (C29), full page: the three C29 strings
  unchanged, and [V] "Contact a qualified professional if you notice any change with your appliances,
  like no heat or overheating from your furnace/boiler, a yellow flame or the presence of soot around
  a burner on your gas stove, or your furnace or hot water heater fan often kicking on and off".

### Statutes and HSE's code, re-read live

- **SI 1998/2451 reg 3**, legislation.gov.uk, whole regulation, extent E+W+S, [V] "There are
  currently no known outstanding effects for The Gas Safety (Installation and Use) Regulations 1998,
  Section 3." 3(1), 3(3), 3(4) and 3(7) exactly as "The gas-work law, stated exactly" records them.
  Also read: 3(2) (employers and self-employed persons in control of the work must ensure 3(1) is
  met), 3(5), 3(6) and 3(8) (vehicles, vessels, caravans).
- **SI 1998/2451 reg 6**, https://www.legislation.gov.uk/uksi/1998/2451/regulation/6, whole
  regulation, no known outstanding effects: 6(5) [V] "No person searching for an escape of gas shall
  use any source of ignition."
- **SI 1998/2451 reg 36**, https://www.legislation.gov.uk/uksi/1998/2451/regulation/36, definitions
  and (3) to (6), no known outstanding effects, extent E+W+S: 36(3)(a) a landlord shall [V] "ensure
  that each appliance and flue to which that duty extends is checked for safety within 12 months of
  being installed and at intervals of not more than 12 months since it was last checked for safety";
  36(3)(c) the record; 36(6)(a) [V] "a copy of the record made pursuant to the requirements of
  paragraph (3)(c) above is given to each existing tenant of premises to which the record relates
  within 28 days of the date of the check". "Lease" means [V] "a lease for a term of less than 7
  years", [V] "a tenancy for a periodic term", or a statutory tenancy arising from either.
- **SR 2004/63 reg 3 (N.I.)**, whole regulation, no known outstanding effects: as the lesson 01 Stage
  4 note records; 3(3) approval [V] "by the Executive"; 3(4) the same two hose exceptions.
- **HSE, L56** (fifth edition, 2018), re-read from the PDF: paragraphs 52, 81, 83 and 85 and the
  legal-status passage exactly as "The gas-work law, stated exactly" records them. Also read and used:
  - Para 55: [V] "‘Installation of a gas appliance (or other gas fitting)’ will be work for the
    purpose of these regulations even where the connection is made by a bayonet fitting or other
    self-sealing connector (the connection of such a fitting being just one part of the installation)."
  - Para 90: [V] "Information on the scope of work a Gas Safe registered engineer is competent to
    perform may be obtained from the engineer’s certificate of competence (issued under the
    certification scheme referred to in the following paragraphs or from the Gas Safe Register)."
  - Para 91: [V] "In addition to ensuring competence, all gas engineering businesses, including
    self-employed gas engineers, are (subject to the limited exceptions in regulation 3(4)) required to
    be in membership of a class of persons approved by HSE, whether they carry out such work as their
    main or part activity."
  - Para 93: [V] "the only body with such approval is the Gas Safe Register".
  - Para 121: [V] "This prohibition extends to householders and other members of the general public."
  - Para 82 (the training's scope, including asbestos and associated services) and para 84 (employers'
    duty) read, not used.
- **HSE, "Gas Safe Register"** (newschemecontract.htm), full text: the card and cover strings as C15
  records them, and [V] "Under the Gas Safety (Installation and Use) Regulations 1998 for a gas
  engineering business to legally undertake gas work that is within the scope of the Regulations they
  must be on the Gas Safe Register."
- **HSE, "Domestic gas: frequently asked questions"**, re-read, landlord and tenant sections by
  search: [V] "Free-standing cookers connected by a flexible connector (bayonet fitting), are not
  considered to be 'readily movable', but can be moved, temporarily, eg to clean the space they
  normally occupy; this type of activity is not regarded as 'work' within the meaning of these
  Regulations." (HSE's straight quotes) [V] "Any other type of installation/reinstallation is regarded
  as gas work and must be carried out by a Gas Safe registered engineer". The tenant section prints a
  specimen letter asking the landlord to show the safety check record.
- **NYC DOB owner page** (C27), full page: the C27 strings unchanged.
- **Texas Plumbing License Law**, TSBPE unofficial plain-view text, [V] "JUNE 20, 2023 (UNOFFICIAL
  VERSION)": 1301.002(7) and 1301.051 as C25 records them; 1301.052 read. The official statutes site
  (statutes.capitol.texas.gov, OC.1301) returned a 250 KB page with no statute text in it (a script
  shell), so the official text is still unread.

### The Gas Safe Register's pages, from the Internet Archive

The live site returned HTTP 403 again.
- **"Don't DIY when it comes to gas appliances"**, capture **20251023004454** (`id_`, gzip), full page
  text re-read. The C16 strings unchanged. Also [V]: "When your engineer visits, you should ask to see
  their Gas Safe ID card which confirms they’re appropriately qualified to safely carry out the work in
  question." [V] "Check where your gas pipes are located - make sure you don’t accidentally hit them
  during DIY work" (a spaced hyphen; quote from "don’t") [V] "Don’t block or cover air vents and
  flues". Other trades: [V] "If the work required only involves the replacement of a non-gas component,
  such as a water circulating pump or central heating control valve, housed within the boiler’s
  decorative casing, the work could be undertaken by another competent tradespersons e.g.
  plumber/electrician." (sic) and it would not need a Gas Safe registered engineer provided nobody
  breaks a combustion chamber seal, disturbs a gas-carrying component or disturbs a module that
  controls combustion. The consumer's limit: [V] "However, you should not do anything that involves
  disturbing the gas carrying components (such as the gas supply pipe) or that could affect the
  combustion process". Casings: [V] "These cases can usually be removed by the consumer e.g., can be
  lifted off or are hinged panels and do not need to be unscrewed." [V] "A decorative case can be
  removed safely by the consumer or anybody else, remembering to follow any manufacturer’s
  instructions and warning labels and making sure you have safely isolated any electrical parts." [V]
  "If removing the case involves undoing a number of screws, this normally means it is a functional
  case and it should not be removed by the consumer or a person who is not Gas Safe registered." For
  guidance it points to the maker's instructions, helpline and website.
- **"Concerns & Reporting Illegal Gas Work"**, capture **20260221055602**
  (https://www.gassaferegister.co.uk/gas-safety/concerns-reporting-illegal-gas-work/), full page text,
  first read by this drafter (the synthesis names it but recorded only the two-thirds line): [V]
  "Approximately two thirds of illegal gas work inspected by the Register has been found to be unsafe."
  [V] "Using an illegal gas worker could invalidate the warranty on your boiler and may invalidate your
  home insurance." The page gives no year or count for the two-thirds figure. **Not used:** [V] "If
  anyone is doing gas work in the United Kingdom, Isle of Man, Guernsey or Jersey and they are not Gas
  Safe registered, they could be working illegally." It is the Register's statement, hedged
  ("could"), and "anyone" goes beyond regulation 3(3); like the "both parties" line, a lesson would
  attribute it or leave it out.

### Gates

- **G-N1**: closed for this lesson (above). **G-W8**: closed at lesson 01, re-read.
- **G-G1** (the legal basis for "both parties"): not closed. Regulation 3 re-read whole, and L56
  paragraphs 52 to 55 and 81 to 93; no provision found that says it of a competent householder. The
  fallback is used: the line is quoted in the second half as the Register's, with the course saying it
  could not match it to a provision.
- **G-G2** (HSENI's approval): not closed. Fallback: Northern Ireland's regulation 3 mirrors Great
  Britain's; HSE says the Register covers Northern Ireland; "HSENI" not named.
- **G-G3** ("around 7"): used in the second half as HSE states it, undated; the lesson 10 gate
  closure above has since read the RIDGAS table.
- **G-G4**: the lessons name Great Britain and Northern Ireland only.
- **G-N4** (a licensed photograph of a UK meter and its valve): not closed. Wikimedia Commons searched;
  the two open-licence meter photographs found (geograph 1900635 and 1900623, CC BY-SA 2.0, Ashley
  Dace) show museum meters with no emergency control valve. Fallback: no photograph.

## Gate closures, lesson 12 (2026-09-25)

Read by the lesson 12 drafter ("Ladders and working at height") on 25 September 2026: curl with a
browser User-Agent plus pandoc (HTML) or pdftotext (PDF); the eCFR versioner API (XML, current to
24 September 2026); the PubMed E-utilities API; the Internet Archive `id_` raw form for the MMWR
page. Every [V] below was string-checked against the extracted text on the day. **The lesson
passed 100 measured minutes and was split at drafting**: the file on disk carries leaning ladders
(whose rules, whether to use one, the numbers, securing, the pre-use check); the second half,
"Stepladders, and what the ladder injury figures count", was handed to the orchestrator unfiled.
Both halves cite only what is below or already in Part B §2.

### HSE, "Safe use of ladders and stepladders" (Part B §2), pages 1 to 7 re-read live

Pages 1 to 6 re-read in full; **page 7, "Inspecting the condition of ladders", read in full for
the first time** (G-H3, inspection half). Page 8 (product standards) not read. The sub-page
addresses are now `when-how-to-use-ladders-safely.htm`, `how-to-check-ladder-is-safe-before-use.htm`,
`types-of-ladder.htm`, `where-ladders-should-be-used.htm`, `securing-ladders-used-for-access.htm`
and `inspecting-condition-of-ladders.htm` under https://www.hse.gov.uk/work-at-height/ladders/.
Everything Part B §2 records was found as recorded. Added:
- Page 1: [V] "Ladders and stepladders are not banned under health and safety law." [V] "ladders can be a sensible and practical option for low-risk, short-duration tasks, although they should not automatically be your first choice." [V] "There are simple, sensible precautions you should take to stay safe when using portable leaning ladders and stepladders in the workplace."
- Page 2: [V] "Short duration is not the deciding factor in establishing whether use of a ladder is acceptable" (the sentence continues after a spaced en dash: [V] "you must have first considered risk."). [V] "As a guide, if your task would require staying up a leaning ladder or stepladder for more than 30 minutes at a time, it is recommended you use alternative equipment." [V] "eg where the ladder will be level and stable, and can be secured (where it is reasonably practicable to do so)."
- Page 3 (pre-use check): done [V] "at the beginning of the working day" and [V] "after something has changed"; the stiles [V] "not bent or damaged, as the ladder could buckle or collapse"; the feet [V] "if they are missing, worn or damaged the ladder could slip", and check them [V] "when moving from soft/dirty ground (eg dug soil, loose sand/stone, a dirty workshop) to a smooth, solid surface (eg paving slabs)"; the rungs [V] "if they are bent, worn, missing or loose, the ladder could fail"; [V] "If you spot any of the above defects, do not use the ladder and tell the person in charge of the work."
- Page 4, leaning ladders: [V] "To help make sure the ladder angle is at the safest position to work from" (then a hyphen and the 1-in-4 sentence Part B records); [V] "make sure your belt buckle (or navel) stays within the stiles"; [V] "Don’t work off the top three rungs. Try to make sure that the ladder extends at least 1 metre or three rungs above where you are working"; [V] "Avoid holding items when climbing (consider using a tool belt)"; [V] "Don’t work within 6 m horizontally of any overhead power line, unless it has been made dead or it is protected with insulation." [V] "Use a non-conductive ladder (eg fibreglass or timber) for any electrical work"; [V] "Maintain three points of contact when climbing and wherever possible at the work position."; [V] "a strong upper resting point"; [V] "do not rest it against weak upper surfaces such as glazing or plastic gutters".
- Page 4, telescopic: [V] "Be aware of the potential for trapping fingers between the closing sections." [V] "If you are in any doubt, do not use them."
- Page 4, stepladders: [V] "Don’t stand and work on the top three steps (including a step forming the very top of the stepladder) unless there is a suitable handhold"; [V] "such as side-on drilling through solid materials (eg bricks or concrete)"; [V] "Otherwise, use a more suitable type of access equipment"; [V] "two feet and one hand, or when both hands need to be free for a brief period, two feet and the body supported by the stepladder"; the no-handhold tasks [V] "to put a box on a shelf, hang wallpaper, or install a smoke detector on a ceiling", where the decision [V] "needs to be justified", weighing the height of the task, a handhold before and after, light work, side loading, overreaching and whether the stepladder can be tied.
- Page 5: [V] "Use proprietary levelling devices, not ad-hoc packing such as bricks, blocks, timbers etc"; surfaces [V] "clean (no oil, moss or leaf litter)"; for the public, [V] "as a last resort, a person standing guard at the base".
- Page 6: the four securing options, each [V]: "Tie the ladder to a suitable point, making sure both stiles are tied"; "Where this is not practical, secure the ladder with an effective ladder stability device"; "If this is not possible, securely wedge the ladder (eg wedge the stiles against a wall)"; "If you cannot achieve any of these options, foot the ladder. Footing is the last resort". Access: [V] "extend at least 1 m above the landing point to provide a secure handhold".
- Page 7: [V] "Detailed visual inspections are the responsibility of the employer." They are done [V] "at fixed intervals and recorded"; pre-use checks [V] "do not need to be recorded". The inspection list: damaged or worn feet; twisted, bent or dented stiles; cracked, worn, bent or loose rungs; missing or damaged tie rods; cracked or damaged welded joints, loose rivets or damaged stays.

### The Ladder Association and HSE, LA455 (Part B §2), the whole PDF

The PDF at the URL Part B gives, read whole, and the landing page. Footer [V] "LA455 - Version 1,
Rev 1, 09/26." The text matches HSE's web guide almost word for word. Added:
- Scope, p. 1: [V] "This guidance is for employers on the simple, sensible precautions they should take to keep people safe when using portable leaning ladders and stepladders in the workplace." [V] "It will also be useful for employees and their representatives."
- HSE's foreword: [V] "Falls when working at height remain the most common kind of workplace fatality, accounting for around a quarter of all worker deaths and 8% of all non-fatal injuries every year, with many involving a fall off a ladder." (GB workplaces, undated; not used.)
- The angle, p. 4: [V] "make sure the ladder angle is at 75°" then a spaced en dash, then [V] "you should use the 1-in-4 rule (ie one unit out for every four units up".
- [V] "don’t work off the top three rungs, and try to make sure that the ladder extends at least 1 m (three rungs) above where you are working".
- Figure 4 caption, p. 5: [V] "Correct" then a spaced en dash, then [V] "use of a stand-off device to ensure a strong resting point. Do not rest a ladder against weak upper surfaces such as glazing or plastic gutters. Follow the manufacturer’s instructions." The figure (rendered with pdftoppm and looked at) shows the device fitted at the top of the ladder, bearing on the wall below the gutter.
- Securing, p. 9: [V] "Footing is the last resort."
- Condition, p. 10: [V] "Detailed visual inspections are the responsibility of the employer."
- The "Product Standards" box on p. 11 names a standard that is on the unread line; the lesson does not name it (G-H3's product-standard half stays open).

### Work at Height Regulations 2005, regulation 3, re-read live

https://www.legislation.gov.uk/uksi/2005/735/regulation/3, revised text, read whole. [V] "There are
currently no known outstanding effects for The Work at Height Regulations 2005, Section 3."
Extent E+W+S.
- 3(1)(a): [V] "in Great Britain".
- 3(2): the requirements on an employer apply [V] "in relation to work" by an employee or [V] "by any other person under his control, to the extent of his control."
- 3(3): they also apply to a [V] "relevant self-employed person" (words substituted from 1.10.2015 by SI 2015/1637), and [V] "to any person other than a self-employed person" (with words inserted by the same Order) [V] "in relation to work by a person under his control, to the extent of his control."
- 3(6)(ba): "relevant self-employed person" means one who conducts an undertaking of a prescribed description under section 3(2) of the 1974 Act.
- Nothing in regulation 3 reaches a householder's own DIY, as Part B found.

### HSE, "Work at height: Frequently asked questions" (new)

https://www.hse.gov.uk/work-at-height/faqs.htm, read in full.
- [V] "Work at height means work in any place where, if precautions were not taken, a person could fall a distance liable to cause personal injury."
- Working platforms can be almost any surface, including [V] "the treads of a stepladder".
- [V] "They place duties on employers, and those who control any work at height activity (such as facilities managers or building owners who may contract others to work at height)."
- Towers: [V] "You need to be competent to build, inspect, use and dismantle a tower".
- **G-H2 stays open.** The FAQ's "building owners who may contract others" is about control of work, and does not say whether a householder who hires a tradesperson is one. The lesson says the course didn't settle it.

### OSHA, 29 CFR 1926.1053, the whole section (Part B §2)

eCFR versioner API, title 29 current to 24 September 2026, section 1926.1053, paragraphs (a)(1) to
(a)(27) and (b)(1) to (b)(22) read whole. **Correction to Part B:** paragraph (b) has 22 clauses,
not 17, and (b)(21) is the rule on hands. Added:
- (a)(1)(ii): a non-self-supporting ladder's load test is applied [V] "when the ladder is placed at an angle of 75" then "1/2" (a fraction in the XML) [V] "degrees from the horizontal". The lesson gives it as 75½ degrees, unquoted.
- (b)(5)(i) whole: [V] "Non-self-supporting ladders shall be used at an angle such that the horizontal distance from the top support to the foot of the ladder is approximately one-quarter of the working length of the ladder (the distance along the ladder between the foot and the top support)."
- (b)(7): [V] "Slip-resistant feet shall not be used as a substitute for care in placing, lashing, or holding a ladder that is used upon slippery surfaces".
- (b)(15): [V] "Ladders shall be inspected by a competent person for visible defects on a periodic basis and after any occurrence that could affect their safe use."
- (b)(16): defective portable ladders marked or tagged with [V] "“Do Not Use” or similar language" and withdrawn until repaired.
- (b)(18): [V] "Ladder repairs shall restore the ladder to a condition meeting its original design criteria, before the ladder is returned to use."
- (b)(20): [V] "When ascending or descending a ladder, the user shall face the ladder."
- (b)(21): [V] "Each employee shall use at least one hand to grasp the ladder when progressing up and/or down the ladder."
- (b)(22): [V] "An employee shall not carry any object or load that could cause the employee to lose balance and fall."

### OSHA QuickCard, "Portable Ladder Safety" (Part B §2), re-read

pdftotext, OSHA 3246-10N-05. Added: [V] "Always inspect the ladder prior to using it." [V] "Look
for overhead power lines before handling a ladder." (after "Avoid electrical hazards!" and a spaced
en dash). [V] "Avoid using a metal ladder near power lines or exposed energized electrical
equipment." [V] "Do not use a self-supporting ladder (e.g., step ladder) as a single ladder or in a
partially closed position." The top-three-rungs line is still broken across the diagram; paraphrase
only.

### RoSPA (Part B §2), re-read

- "Garden safety": [V] "Use ladders on stable, level ground and have proper positioning (1:4 ratio/ 75 degree angle)"; [V] "While on ladders, maintain three points of contact and avoid overreaching".
- **"Neil" (case study, dated 12/09/2019): correction to Part B.** The sentence Part B quotes as "should have been a two-person job" continues: [V] "It should have been a two-person job with somebody holding the ladder." The cut removed the half that says what he meant by a second person (footing, which HSE ranks last). A lesson quotes the whole sentence.

### The injury papers (Part B §2), re-read

- **D'Souza 2007**, abstract (PubMed efetch), as Part B records, plus: [V] "Ladder-related injuries per 100,000 people rose almost 27% during the 16-year study period." Admission is [V] "8.5%" and transfer [V] "1.4%", together [V] "Nearly 10%".
- **Barbat 2020**, abstract, as Part B records: [V] "the majority of cases occurred in home settings".
- **Wakim 2022**, abstract, as Part B records; ladder-related lumbar fractures 2010 to 2018 an estimated 31,053, after floors (80,054) and stairs or steps (48,274).
- **Socias 2014** (capture 20260907020506, read whole): **a scope precision to Part B.** The fall-height finding is for nonfatal, work-related, ED-treated ladder falls in 2011 where the height was documented: [V] "Fall height was documented for 82 of 113 fatalities and an estimated 11,400 of 34,000 nonfatal ED-treated LFIs" and [V] "For nonfatal LFIs, nearly 90% were from heights <16 feet (<4.9 m) and fall heights of 6–10 feet (1.8–3.0 m) were most common". [V] "Head injuries were implicated in about half of fatal injuries (49%)". The "43%" sentence cites Rockett and colleagues (US injury mortality 2000 to 2009), which was not read. NIOSH's steps for employers: [V] "plan the work to reduce or eliminate the need for using ladders by applying safety-in-design and constructability principles to finish as much of the work as possible on the ground"; [V] "provide alternative, safer equipment for extended work at elevation, such as aerial lifts, supported scaffolds, or mast climbing work platforms".
- **CPSC, injuries in 2020** (Table F), re-read: "Ladders, stools" 227,000 ED-treated and 633,000 medically attended, as recorded.
- **CPSC, hazard screening report, 65 and over**, re-read: [V] "Persons 65 and older account for half (79) of all ladder deaths." **Precision:** in Table 1 the 79 sits in the column headed "Deaths 2000"; the injury columns are 2002. [V] "This population accounts for 16% of emergency-room treated injuries involving ladders, but represent 39% of those hospitalized for ladder-related injuries."

### CPSC, electrocutions 2011 to 2020 (Part D D38), re-read

Executive summary, the scope rules and Table 5. **Correction to D38 and to the synthesis
("Safety-critical guidance", item 4):** Table 5's row is headed only [V] "Ladder", with 22 for
2011 to 2020. Nothing in the text read says the 22 were ladders touching power lines. What the
report says of scope: [V] "Incidents involving a product under CPSC jurisdiction that comes into
contact with an electrical source, such as power lines or household current (e.g., a drill or power
saw cutting into an electrical wire) were considered in scope." Work-related incidents were out of
scope, and [V] "the electrocution incidents CPSC staff associated with a consumer product for
purposes of this report were not necessarily caused by the product." A lesson says 22 electrocutions
were reported under "Ladder", gives the scope rule, and does not say what the ladders touched.

### Gates

- **G-H1** (a UK ladder-injury figure): not closed; not re-searched, on the orchestrator's
  instruction that none could be sourced. Fallback written: the lessons say the course found no
  primary source, give no RoSPA snippet figures, and label every figure US.
- **G-H2**: open (above). Fallback: the Regulations govern work, not your own DIY; the lesson says
  the hiring case wasn't settled.
- **G-H3**: inspection half closed (HSE page 7; LA455 section 10). Product-standard half open; no
  standard named.
- **G-H5** (CPSC's ladder safety centre): not closed. The live page returned 403 and the Internet
  Archive has no capture of either address tried. Fallback: CPSC's dated reports only.
- **G-N4**: no photograph sought; lesson 12 carries one SVG schematic drawn from HSE's and OSHA's
  numbers.

## Gate closures, lesson 11 (2026-09-25)

Read by the lesson 11 drafter ("Tools, dust and fumes: a small kit used safely") on the night of
25 to 26 September 2026: curl with a browser User-Agent plus pandoc (HTML) or pdftotext (PDF);
the NIOSH page through an Internet Archive `id_` capture. Every [V] below was string-checked
against the extracted text. PDF extractions carry stray spaces inside words ("f ingers", "sa w");
the [V] strings below give the words without them.

### Re-read at drafting: OSHA 3080, *Hand and Power Tools*, 2002 (Revised)

https://www.osha.gov/sites/default/files/publications/osha3080.pdf, re-read in full 25 September
2026 (pdftotext). US workplace guidance, written for employers and employees.
- [V] "The greatest hazards posed by hand tools result from misuse and improper maintenance."
- [V] "If a chisel is used as a screwdriver, the tip of the chisel may break and fly off, hitting the user or other employees."
- [V] "If a wooden handle on a tool, such as a hammer or an axe, is loose, splintered, or cracked, the head of the tool may fly off and strike the user or other employees."
- [V] "If the jaws of a wrench are sprung, the wrench might slip."
- [V] "If impact tools such as chisels, wedges, or drift pins have mushroomed heads, the heads might shatter on impact, sending sharp fragments flying toward the user or other employees."
- [V] "Knives and scissors must be sharp; dull tools can cause more hazards than sharp ones." (The scope is knives and scissors; the booklet gives no reason.)
- The five basic rules: [V] "Keep all tools in good condition with regular maintenance." [V] "Use the right tool for the job." [V] "Examine each tool for damage before use and do not use damaged tools." [V] "Operate tools according to the manufacturers’ instructions." [V] "Provide and use properly the right personal protective equipment."
- Hand tools at work: [V] "Appropriate personal protective equipment such as safety goggles and gloves must be worn to protect against hazards that may be encountered while using hand tools."
- Power tools: [V] "Keep all people not involved with the work at a safe distance from the work area." [V] "Loose clothing, ties, or jewelry can become caught in moving parts." [V] "Remove all damaged portable electric tools from use and tag them: “Do Not Use.”" (plus the precautions Part B §1 already records).
- Grinders: [V] "Always use eye or face protection." Abrasive wheels: [V] "The employee should never stand in the plane of rotation of the wheel as it accelerates to full operating speed."
- Noise: [V] "Noise is another hazard associated with pneumatic tools." and hearing protection with noisy tools such as jackhammers.

### HSE, *Construction dust*, CIS36 (Revision 3), first published 06/13, revised 03/20

https://www.hse.gov.uk/pubns/cis36.pdf, read in full 26 September 2026 (pdftotext). Written for
employers ([V] "This sheet tells employers what they need to know to prevent or adequately control
construction dust risks."), with advice for safety representatives and workers. [V] "Following the
guidance is not compulsory, unless specifically stated, and you are free to take other action."
- [V] "Construction dust is not just a nuisance; it can seriously damage your health and some types can eventually even kill."
- Three types: silica dust, created when working on silica-containing materials [V] "like concrete, mortar and sandstone"; wood dust, [V] "created when working on softwood, hardwood and wood-based products like MDF and plywood"; and [V] "other ‘general’ dust", the most common including gypsum (eg in plasterboard), limestone, marble and dolomite. (The sheet's list items are joined to their labels by spaced dashes; quote the words after them.)
- Risk factors: [V] "the more enclosed a space, the more the dust will build up."
- Controls, in order: stop or reduce the dust, [V] "Use different materials, less powerful tools or other work methods."; water, [V] "enough water supplied at the right levels for the whole time that the work is being done", and [V] "Just wetting the material beforehand does not work."; on-tool extraction to an H, M or L class unit, [V] "Don’t just use a general commercial vacuum."; then RPE, [V] "Remember: RPE is the last line of protection."
- RPE: the general level for construction dust is an APF of 20; [V] "Anyone using tight-fitting masks also needs to be clean shaven." Table 2: APF 20, [V] "FFP3 disposable mask or half mask with P3 filter".
- Other controls: limiting the number of people near the work; enclosing the work to stop dust escaping.
- Table 1 rows used: [V] "Occasional short-duration drilling with hand-held rotary power tools" (a dust collector or cordless extraction on the drill for smaller bits, or on-tool extraction; otherwise RPE with an APF of 20); "Sanding wood with power tools": eliminate by [V] "Using ‘pre-finished’ materials", control by on-tool extraction to an H or M class unit and RPE with an APF of 20; "Cutting concrete kerbs, blocks and paving with a cut-off saw": water suppression and RPE with an APF of 20.

### HSE, *Wood dust: Controlling the risks*, WIS23 (Revision 3), first published 11/12, revised 06/22

https://www.hse.gov.uk/pubns/wis23.pdf, read 26 September 2026 (pdftotext): pages 1 to 3 and 6 to
7 (the risks, the law, RPE). Written for woodworking employers.
- [V] "All wood dust is a substance hazardous to health because it can cause serious non-reversible health problems, including:" asthma; dermatitis; and irritation to the eyes, nose and throat.
- [V] "Hardwood dust can also cause a rare type of nasal cancer."
- [V] "The biggest risk is from fine dust, as you can breathe this deep into your lungs where it will do the most damage."
- [V] "Do not use compressed airlines or dry sweeping, particularly on clothing, as these will just create dust clouds and redistribute the dust." Clean-up vacuum equipment of at least dust class M.
- Dust respirators are not suitable [V] "against gases or vapours (eg from paint spraying) as they will not provide any protection."
- [V] "Nuisance dust masks do not filter out wood particles and hence provide no protection against wood dust, so they should not be used."
- [V] "Facial hair or glasses tend to lift the respirator off the face and permit inward leakage of contaminated air." For a worker with facial hair, a hood or helmet should be considered. An APF of at least 20; suitable disposables [V] "are often described as FFP3".

### Re-read at drafting: HSE's dust masks, silica and silicosis pages

- **"All you need to know about disposable dust masks"** (Part B §1), re-read in full 25 September
  2026. The full sentences behind Part B's lines: [V] "FFP1, FFP2 and FFP3 respirators can reduce the amount of dust you breathe by factors of 4, 10 and 20 respectively." [V] "A respirator that depends on face fit is useless if you have a beard or thick beard stubble." Beyond Part B's lines: [V] "The only way you can know if the seal is good enough is by having a proper respirator fit test. At present this is also the only way of meeting legal requirements." [V] "You should carry out a pre-use check every time you put on your respirator." [V] "then hold the mask in place and breathe in or out sharply. You should readjust the respirator if you detect any leakage around your face or your glasses steam up when you breathe out." [V] "FFP1, FFP2 and FFP3 are designed to filter out dust only. They must not be used where there is an oxygen-deficient atmosphere or harmful gases and vapours." Nuisance mask packaging may say [V] "This product does not provide respiratory protection". The page points to e-COSHH guidance due [V] "in autumn 2005".
- **"Cancer and construction: Silica"** (D43), re-read 25 September 2026: [V] "Some of this dust is fine enough to get deep into your lungs." Silica is a major constituent of [V] "bricks, tiles, concrete and mortar".
- **"Silicosis: causes and risk controls"** (D43), re-read 25 September 2026: [V] "The effect continues to develop after exposure has stopped and is irreversible."

### OSHA silica: the overview page and 29 CFR 1926.1153

- **OSHA, "Silica, Crystalline"**, https://www.osha.gov/silica-crystalline, the overview text read
  26 September 2026 (more than D44's menu): respirable crystalline silica is [V] "very small particles at least 100 times smaller than ordinary sand you might find on beaches and playgrounds" and it [V] "is created when cutting, sawing, grinding, drilling, and crushing stone, rock, concrete, brick, block, and mortar". (The two phrases sit either side of a spaced dash on the page.) Diseases: [V] "Silicosis, an incurable lung disease that can lead to disability and death"; lung cancer; COPD; kidney disease.
- **29 CFR 1926.1153** (construction), https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1153,
  read 26 September 2026: paragraphs (a) to (f), with Table 1. Federal; binds employers. Table 1,
  row (ii), handheld power saws (any blade diameter): [V] "Use saw equipped with integrated water delivery system that continuously feeds water to the blade"; respirator none outdoors for 4 hours or less a shift, APF 10 over 4 hours; APF 10 either way [V] "When used indoors or in an enclosed area". Housekeeping, (f)(1) and (f)(2): no dry sweeping or dry brushing, and no compressed air for cleaning, where it could contribute to exposure, with the stated exceptions.

### G-H4 partly closed: OSHA's assigned protection factors (29 CFR 1910.134)

https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134, read 26 September 2026:
the definitions, paragraph (d)(3)(i)(A) with Table 1 and its notes, and paragraph (g)(1). Federal;
binds employers. Table 1: an air-purifying half mask has an APF of 10, and note 3 says [V] "This APF category includes filtering facepieces, and half masks with elastomeric facepieces." Note 2: [V] "The assigned protection factors in Table 1 are only effective when the employer implements a continuing, effective respirator program as required by this section (29 CFR 1910.134), including training, fit testing, maintenance, and use requirements." (g)(1)(i)(A): an employer shall not permit tight-fitting respirators to be worn by employees who have [V] "Facial hair that comes between the sealing surface of the facepiece and the face or that interferes with valve function". Appendix D (voluntary use) returned 403 and was not read. Eye protection standards stay unread: eye protection in general terms only.

### NIOSH, "Find Filtering Facepiece Respirators on the Certified Equipment List"

Live page 403; re-read from capture 20260923185140 (`id_`), page dated Feb. 18, 2025. Beyond Part
B's N95 line: [V] "FFRs are air-purifying respirators that protect by filtering particles out of the air the user is breathing." [V] "For your FFR to work as effectively as possible, you must wear it correctly." Donning instructions are in or on the respirator's packaging.

### G-R3 closed: EPA's methylene chloride rules, as EPA summarises them

US EPA, "Risk Management for Methylene Chloride",
https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/risk-management-methylene-chloride,
[V] "Last updated on March 6, 2026", read in full 25 September 2026. The Federal Register texts of
the rules were not read.
- March 2019 final rule to prohibit the manufacture (including import), processing and distribution of methylene chloride for consumer paint and coating removal, [V] "because of the acute fatalities that have resulted from exposure to the chemical in consumer paint and coating removal". After 22 November 2019, distribution in commerce, including to and by retailers, is prohibited for that use.
- [V] "EPA is encouraging all consumers to stop using methylene chloride products that they may have already purchased for paint and coating removal." [V] "Please consult your state and local government solid waste agencies to obtain proper disposal instructions for leftover or unused paint and coating removal products."
- April 2024 final rule: [V] "Prohibits manufacturing, processing and distribution of methylene chloride for all consumer uses." and [V] "Consumer paint and coating removal was prohibited in 2019."
- EPA's VOC page (D45, re-read 25 September 2026, "Last updated on June 23, 2026") still says [V] "Use products that contain methylene chloride outdoors when possible; use indoors only if the area is well ventilated." and [V] "methylene chloride is converted to carbon monoxide in the body and can cause symptoms associated with exposure to carbon monoxide." Also: [V] "go outdoors or in areas equipped with an exhaust fan to use it. Otherwise, open up windows to provide the maximum amount of outdoor air possible." [V] "buy only as much as you will use right away" [V] "Do not simply toss these unwanted products in the garbage can." No UK rule on methylene chloride was read.

### Re-read at drafting: London Fire Brigade, Bosch, ESF, HSE and EPA asbestos

- **LFB, "Batteries and chargers"** (Part B §1), re-read 25 September 2026: [V] "Always use the charger that came with your phone, tablet, e-cigarette or mobile device." [V] "Never cover chargers or charging devices" [V] "it's best not to leave your phone plugged in overnight". If a battery swells: [V] "Stop charging immediately", [V] "Turn off the device", [V] "Do not remove the casing or tamper with the equipment", [V] "Contact the manufacturer or certified technician". (Part B's "contact the manufacturer" now reads "or certified technician".) **LFB, "E-bikes and e-scooters"**: [V] "Many of these fires happen in homes while batteries are charging."
- **Bosch DIY** (Part B §1), re-read 25 September 2026: [V] "If there is insufficient grounding, for example, due to insulating footwear, or if you are standing on a conductor, it won’t be possible to detect live cables." [V] "The device needs to be moved over the same place several times to detect whether there is something behind the wall." [V] "for your own safety, after detection you should switch off the power supply completely before you start drilling." [V] "Nothing was detected and you’re good to go." Rings, bracelets, watches and phones away; the other hand flat on the wall about 20 to 30 cm away.
- **ESF, "Advice for DIY-ers"** (D34), re-read 25 September 2026: [V] "The most common mistakes people make when attempting to undertake DIY were cutting through power leads, drilling into wiring, or trying to repair an electrical item while it is switched on." [V] "For any DIY near electrical wiring or power supplies, switch off the power at your fuseboard and, where possible, only use battery-powered tools." [V] "To test that the power is off before beginning non-electrical DIY, plug an appliance in or try switching on lights." [V] "Use an RCD or plug-in RCD." [V] "Check leads and plugs on power tools." [V] "If you see signs of damage (for example, frayed wires) get the equipment professionally repaired before using it or get it replaced."
- **HSE, "Introduction to asbestos safety"** parts 1 and 2 (D2), re-read 25 September 2026: [V] "Buildings constructed after 2000 are unlikely to contain asbestos." [V] "drilling into a wall" [V] "stop work immediately" (written as a duty on people at work).
- **EPA, "Protect Your Family from Exposures to Asbestos"** (D8), re-read 26 September 2026: [V] "Don't saw, sand, scrape, or drill holes in asbestos-containing materials."

### Gates left open

G-E3 (BS 7671's edition and "safe zones": not read; the lesson uses the fallback wording and
attributes ESF's "required" line to ESF). G-H5 (CPSC's lithium-ion page not attempted; London's
figure only, labelled London, and no US battery figure). G-H4's eye-protection standards (general
terms only). OSHA 1910.134 Appendix D (403). G-N4: no photograph sought.

## Stage 4 note, lesson 09 (2026-09-26)

Lesson 9, "Gas: the smell and the valve", Tier B review (reviewers F and P) and fix pass. Every page
below was re-read live on 26 September 2026 by reviewer F and again by the fixer, curl with a
browser User-Agent and pandoc; every [V] was string-matched in the extracted text.

**Correction to the lesson 09 gate closure.** SoCalGas's odour-fade list has **four** bullets, not
three. The fourth, [V]: "The design and construction of the customer’s gas piping systems, such as
pipe length and/or diameters". Its footnote also says [V] "certain pipeline and soil conditions can
cause odor fade", so soil is not Con Edison's alone.

### New strings

- **Cadent, "What to do if you smell gas"** (https://cadentgas.com/smell-gas): [V] "Always wait
  until the gas engineer has given you the all-clear before returning inside your property." [V]
  "The engineer will require entry to the property in order to make it safe for you." [V] "They
  will also send out an emergency gas engineer from your local distribution network who will ensure
  steps are taken to make the situation safe."
- **Cadent's area, on Cadent's own homepage** (https://cadentgas.com/): [V] "We are the UK’s largest
  gas distribution network, bringing gas to 11 million homes and businesses. We manage a network of
  more than 82,000 miles of pipes, most of them underground, which transport gas throughout the North
  West, West Midlands, East Midlands, East of England and North London." So Scotland and North
  Yorkshire are not on Cadent's network, and the Wirral (North West) is. Other networks' pages (SGN,
  NGN, Wales & West) were not read: guessed URLs returned 404 or a script shell.
- **National Gas, "Emergency Contacts"** (https://www.nationalgas.com/emergency-contacts): [V] "If
  you smell gas, call the National Gas Emergency Service on 0800 111 999." [V] "While National Gas is
  responsible for the gas National Transmission System, these emergency guidelines apply to all gas
  users." Its meter line is about where the meter is, and says nothing of evacuating: [V] "Turn off
  the meter at the control handle unless the meter is in the cellar." (no "basement").
- **SoCalGas, "Emergency Preparedness"** (https://www.socalgas.com/safety/emergency-information/emergency-preparedness,
  "Submitted ... Tue, 07/16/2024"), full text: [V] "In the event of an earthquake or other emergency,
  turn off your natural gas meter if you smell natural gas, hear natural gas leaking or see other
  signs of a leak-- and ONLY if it is safe to do so." [V] "If you turn off natural gas to the meter,
  leave it off. Don't turn it back on yourself." The page is earthquake preparedness and also tells
  customers to keep a wrench by the meter; no lesson teaches the method (decision 6). What it shows
  is that US utilities do not all give the same meter advice, so the lesson defers to the reader's
  own utility.
- **Atmos Energy, "Recognizing a leak"**: [V] "The sense of smell for most people is a highly
  reliable indicator of a natural gas release." [V] "In certain rare situations, the odor intensity
  can be diminished by physical and/or chemical processes, such as when gas passes through certain
  soil conditions."
- **Con Edison, "Gas Safety"**, its full odour-fade list, [V] each line: "Adsorption, absorption, and
  oxidation." "Newly-installed metal, or sometimes plastic, piping (utility or customer)." "Size,
  length, and configuration of the piping." "The presence of rust, moisture, or other substances in
  the pipe." "Gas composition, pressure, and/or flow." and the underground-soil line the gate closure
  records. Its odorant comparison is [V] "many people compare to the smell of rotten eggs" ("many",
  not "most").
- **Phoenix Energy NI, "In an Emergency"** (https://phoenixenergyni.com/safety-environment/in-an-emergency),
  first read here. Phoenix is a Northern Ireland gas network company ("our engineer"). Its numbered steps, [V]: "Call the
  gas emergency team 0800 002 001 (24 hrs a day 365 days a year)"; "Turn off the gas supply at the
  meter, unless the meter is located in a cellar or basement in which case do not enter"; "If there
  is a smell of gas in the cellar or basement you should evacuate the building"; "Extinguish all
  naked flames and do not smoke or strike any matches"; "Open doors and windows for ventilation";
  "Do no turn on or off any electrical switches including door entry systems" (sic); "Check gas
  appliances to see if the gas has been left on unlit or that a pilot is out"; "Never leave it to
  anyone else to call the emergency line"; "Make sure you allow immediate access to our engineer".
  This confirms 0800 002 001 on the network's own page. SSE Airtricity's page also opens with the
  number: [V] "If you smell gas or you are worried about gas safety, phone the 24-hour Northern
  Ireland Gas Emergency Service on 0800 002 001." then [V] "Follow the steps below:".

### Re-confirmed unchanged (reviewer F's verified-strings list)

Cadent's smell-gas Do's and Don'ts, its outside-smell line, "Once you're safe", "The number
operates 24/7 and is free to call." and the SmellTaste line; Cadent's meter page (ECV, quarter turn,
"Don’t turn it back on until advised it’s safe to do so.", the meter-box key); National Gas's five
lines and struck-pipe lines; SSE Airtricity's steps and "Never leave it to anyone else to call the
Emergency number and make sure you allow immediate access to an engineer."; HSE faqownerocc's three
lines (no "switch" on the page); Con Edison's leave, call, "Don’t assume", don't-list, signs,
mercaptan, underground soil, can't-smell-it and detector lines; SoCalGas's leak page (stamped Tue,
07/23/2024), its evacuate, 911, signs, can't-smell, odour-fade and don't-list lines; Atmos's call,
"Do not assume" and leave lines (no "switch", "flame" or "window" on the page); SI 1998/2451 reg 3
(no outstanding effects) and reg 6(5). Phone numbers 0800 111 999 and 0800 002 001 match the
networks' pages; 911 is correct for all three US utilities.

## Gate closures, lesson 18 (2026-09-26)

Lesson 18, "Damp inside: condensation, mould, ventilation and rising damp" (the OUTLINE's lesson 14
under the old numbering). Every source below was re-read on 26 September 2026 with curl and a
browser User-Agent; the text was extracted to plain text and every [V] string here is copied from
that extraction. Nothing on the unread line was opened or cited.

### G-W9: fallback written (Awaab's Law not named)

The GOV.UK guidance (Part A §6, D48) was re-read in full through the GOV.UK content API
(`public_updated_at` 2026-04-01; first published 2023-09-07; about 16,500 words). A search of the
whole body for "Awaab's Law", "Hazards in Social Housing" and the HHSRS review outcome finds none of
them: the page names Awaab Ishak and the inquest, not the law that followed. No primary on Awaab's
Law was read, so the gate stays open and the lesson writes G-W9's fallback: Awaab's Law is not
named, and no time limit for a landlord's repair is given. **Do not repeat** the page's own
sentence "While there is currently no legal requirement to undertake remedial work within a
specific period of time", in its "Homes must be fit to live in" paragraph: it is on a page updated
in April 2026, and it may not describe social housing in England since the rules the gate names;
this course has not read them either way.

### GOV.UK, "Understanding and addressing the health risks of damp and mould in the home" (Part A §6, D48), re-read

The rising damp definition, in full. SOURCES Part A §6 recorded only its first sentence; the
paragraph goes on, and both further sentences matter to the dispute: [V] "Rising damp is moisture
from the ground that rises up through parts of the buildings in contact with the ground (walls and
floors); it is usually found in older properties and is often misdiagnosed. It can be identified
through visual inspection; however chemical testing is the most appropriate way of confirming it.
Often it is due to defective damp proof courses and membranes."

- Condensation damp's definition is followed by [V] "This is the most common form of damp."
- [V] "Irrespective of the type of damp (condensation, penetrating, rising or traumatic), landlords
  are legally responsible for addressing damp and mould" (a statement about England, in guidance
  for landlords; the course did not read the statutes it lists).
- [V] "Moisture from normal occupant activities, such as showering, drying laundry and cooking,
  builds up in the air around a home if it cannot be removed."
- [V] "If a dwelling is inadequately ventilated, moisture in the air cannot escape the building and
  is therefore more likely to cause condensation."
- [V] "Homes that are insufficiently insulated and heated are more prone to the build-up of moisture
  and condensation on the inside of external walls and windows."
- [V] "Simply removing surface mould will not prevent the damp and mould from reappearing."
- Hidden mould continues: [V] "Caution should be exercised when disturbing potential sites of mould
  growth. For example, removal of carpets or wallpaper can lead to a significant release of mould
  spores."
- [V] "Landlords should not assume they will be able to diagnose the problem themselves in all
  instances and should seek guidance from an appropriately qualified professional to avoid
  misdiagnosis of the cause or causes."
- Removing mould: [V] "Before doing so, it is advisable for tenants or the landlord to photograph
  the area affected by mould and (if possible) draw around it to preserve a record, which may be
  helpful to identify the source of mould and plan remedial action." [V] "Regardless of the extent
  of mould, the person removing the mould should wear protective equipment, such as a mask, gloves
  and goggles, in order to avoid contact with mould spores or cleaning products." [V] "Doors should
  be shut to help prevent mould spores from being spread to other areas of the house, but windows
  should be left open during and after the clean up activity." [V] "Absorbent materials such as
  carpets, soft furnishings and ceiling tiles may have to be thrown away if they become mouldy"
- [V] "Tenant management of condensation and small amounts of mould should not be a substitute for
  assessing and addressing the underlying issue, which should always be the priority."
- The no-blame paragraph continues after the "lifestyle choices" sentence: [V] "It is unavoidable
  that everyday tasks, such as cooking, bathing, washing and drying laundry will contribute to the
  production of indoor moisture." and [V] "the fundamental cause of damp and mould will be due to
  building deficiencies, inadequate ventilation, inadequate heating and/or poor energy efficiency,
  not tenants’ normal domestic activities". Then: [V] "Tenants cannot be expected to reduce moisture
  levels if their home does not enable them to do so."
- The tenant list, from the ventilation checklist: [V] "leaving a gap between furniture and external
  walls, using extractor fans in kitchens and bathrooms, closing internal doors when they cook or
  shower, covering pans when cooking, drying laundry outdoors (if possible) and opening windows
  periodically".
- Ventilation: [V] "Trickle vents should be controllable by the tenant, rather than permanently
  open, as this may encourage tenants to block them." [V] "Installing windows is classified as
  controlled building work and should be undertaken by someone competent to do so" [V] "Existing air
  bricks should be kept clear and free of debris and obstruction." Extractors and MVHR systems
  [V] "should be regularly inspected and maintained by qualified professionals".
- Energy efficiency: [V] "Energy efficient homes are easier for tenants to heat and therefore
  typically less prone to developing damp and mould, provided that ventilation is adequate." and
  [V] "some energy efficiency interventions may reduce overall ventilation rates".

### US EPA, "A Brief Guide to Mold, Moisture and Your Home" (Part A §6), re-read

Live page, "Last updated on February 18, 2026". The biocide sentence SOURCES records is followed at
once by its qualifier, which a lesson quoting the first half must carry: [V] "There may be
instances, however, when professional judgment may indicate its use (for example, when
immune-compromised individuals are present)." Then: [V] "Never mix chlorine bleach solution with
other cleaning solutions or detergents that contain ammonia because toxic fumes could be produced."
[V] "Dead mold may still cause allergic reactions in some people, so it is not enough to simply kill
the mold, it must also be removed."

- [V] "If you clean up the mold, but don't fix the water problem, then, most likely, the mold
  problem will come back."
- [V] "Scrub mold off hard surfaces with detergent and water, and dry completely." [V] "Do not paint
  or caulk moldy surfaces."
- [V] "If the water and/or mold damage was caused by sewage or other contaminated water, then call
  in a professional who has experience cleaning and fixing buildings damaged by contaminated water."
  [V] "If you have health concerns, consult a health professional before starting cleanup."
- What to wear: [V] "Gloves, goggles, N-95 respirator." [V] "Long gloves that extend to the middle
  of the forearm are recommended." [V] "Goggles that do not have ventilation holes are
  recommended." EPA says "you may want to wear" the respirator; it is not put as a must.
- Hidden mould: [V] "removal of wallpaper can lead to a massive release of spores if there is mold
  growing on the underside of the paper"
- Condensation: [V] "Condensation can be a sign of high humidity." [V] "Cover cold surfaces, such as
  cold water pipes, with insulation."
- Renters, the exact words: [V] "Report all plumbing leaks and moisture problems immediately to your
  building owner, manager, or superintendent." and [V] "In cases where persistent water problems are
  not addressed, you may want to contact local, state, or federal health or housing authorities."
  EPA does not say "in writing".
- Health: [V] "Molds can also cause asthma attacks in people with asthma who are allergic to mold."
  [V] "Research on mold and health effects is ongoing."

### CDC, mould page (Part A §6), re-read from the same capture

Internet Archive capture 20260923211319 of cdc.gov/mold-health/about/index.html. The page's own
title is "Mold", and it is dated "September 26, 2024" on the page. Its humidity line carries em
dashes in the original; quote only [V] "no higher than 50%". Also: [V] "CDC does not recommend mold
testing." [V] "Wear rubber boots, rubber gloves, and goggles during cleanup." [V] "Exposure to damp
and moldy environments may cause a variety of health effects, or none at all." The bleach-solution
and never-mix lines match Part A §6.

### University of Minnesota Extension, "Controlling moisture problems in your home" (Part A §6), re-read

Live (https://extension.umn.edu/moisture-and-mold-indoors/do-you-have-too-much-moisture-your-home),
authors Diane H. Corrin, Richard Stone and Patrick Huelman, "Reviewed in 2023". The page gives the
reason for its low winter figure, which Part A §6 did not record: [V] "Relative humidity is the
amount of moisture in the air at a given temperature." [V] "Generally, in cold winter conditions,
the relative humidity levels need to be low to prevent condensation and potential damage to the
house’s structure, as well as to discourage mold growth, which can cause allergies and respiratory
problems." The target sentence in full: [V] "Keeping the relative humidity at 25% (winter) to 50%
(summer) is generally considered healthy and comfortable for people, and better for the house." (It
does not itself say "in a cold climate"; that is Part A's description of a Minnesota source.) And:
[V] "In winter, temporarily open windows just a little to allow warm, moist air to leave the home
and allow cold, dry air to come in."

### DOE Energy Saver, "Air Sealing Your Home" and "Whole-House Ventilation" (Part A §6), re-read as archived

Captures confirmed: "Whole-House Ventilation" is 20250102092834 and "Air Sealing Your Home" is
20241231180120. The air-sealing page gives the reason leakage is a poor ventilator: [V] "During cold
or windy weather, too much air may enter the house. When it's warmer and less windy, not enough air
may enter, which can result in poor indoor air quality." The ventilation page's opening sentence has
spaced double hyphens in the original; quote only [V] "require mechanical ventilation to maintain
indoor air quality".

### Property Care Association, "Rising Damp Advice" (Part A §6), re-read

Live, full text. Further [V] lines, in the trade body's own words:
- [V] "Without a proper investigation (ideally with a qualified damp specialist) it is impossible to
  advise what the exact cause of your issue is."
- [V] "Most types of masonry used in the walls of buildings will allow some water movement by
  capillary action; however, this is usually controlled by a physical barrier or damp proof course.
  If this physical barrier is absent, has broken down or is damaged then it is often possible to
  install a remedial damp proof course (DPC) to control water rising from the ground."
- On bridging: [V] "removing the ‘bridge’ should hopefully be sufficient to control the capillary
  rise of moisture in the wall."
- [V] "Water rising from the ground often introduces contaminating salts into the walls and plaster
  coats."
- Self-description: [V] "The Property Care Association (PCA®) is the trade body representing
  specialists across the UK who can be trusted to help resolve problems affecting buildings such as
  rising damp"

### RICS Property Journal, Cooper and Thompson, 2020 (Part A §6), re-read

Live, full text. Standfirst: [V] "Although long understood to be a problem by practitioners, rising
damp could benefit from greater academic investigation". The article's pull quote attributes the
"cash cow" framing to Howell ([V] "Howell argued that rising damp was simply a myth used by
surveyors as a cash cow"); it is the article's summary of his argument, not his words, so a lesson
does not use it to describe the sceptics. The Sellers quotation matches Part A §6.

### The Architects' Journal, 26 June 2009 (Part A §6), re-read

Live, full text. Howell's words, which Part A §6 marked "[V, as quoted]" without recording:
[V] "If you build a brick pillar and stand it in a tray of water, the bricks in the water will get
wet, but the water doesn’t rise by capillary action" and [V] "Cement-based and most lime-based
mortars will not allow water to go through." Blackett-Ord in full on injection and renders:
[V] "they are ineffective and grossly expensive" and, of cement-based internal renders, [V] "For
most historic buildings this is extremely damaging and irreversible." Terry Brown's second
paragraph: [V] "Of course there is no reason why inherited conventional wisdom shouldn’t be
challenged." Boniface's words were given in an interview with NBS Learning Channels, as the AJ
reports.

### Joint Position Statement 2022 (Part A §6), re-read

The IHBC copy of the PDF, pdftotext, 15 pages. Two corrections to Part A §6: the salts and
resistance-meter item is **section 3 ("Understanding moisture-related building defects"), item 9**,
not section 2; and **the words "rising damp" do not appear anywhere in the statement's text**. It
takes no position on how common rising damp is or whether any treatment works. Further [V] lines:
- Scope: [V] "This document is aimed at those providing consultancy advice or surveys to owners and
  buyers of a building"
- Section 5 item 1: [V] "Provide a holistic diagnosis that identifies and deals with causes, rather
  than focusing on symptoms."
- Section 5 item 2: [V] "Recognise how to deal with the obvious defects first (including, for
  example, matters such as ventilation, ground levels and lifestyle). Then, allow a period for
  monitoring and natural evaporation, and reassess before moving on to other treatments."
- The declared-interest wording in the explanatory notes: [V] "any remedy specified by the surveyor
  or contractor does not contain a product, treatment or process that will benefit the surveyor or
  their firm financially without declaring this to the client."
- Section 2 item 15 lists the measuring methods a surveyor should know, among them [V] "gravimetric
  moisture analysis", [V] "gas-carbide meters" and [V] "electrical resistance meters". The statement
  does not say how any of them works.

### Energy Saving Trust, "Draught proofing" (Part B §6)

Not re-fetched (the live site refuses automated readers); used only as recorded in Part B §6 and
the lesson 10 gate closures (capture 20260916151311), including [V] "Good ventilation is still
essential, so you shouldn’t block vents, chimneys or airflow needed for safety and air quality."

### Gates left open

G-W9 (above). G-N4: no photograph sought; the lesson has no image. G-L11 (Approved Document F on
ventilation and the building regulations on trickle vents themselves): not read; the trickle-vent
rule is given only as GOV.UK states it. G-W10: no savings figures.

## Gate closures, lesson 17 (2026-09-26)

Read by the lesson 17 drafter ("Keeping water out: roof, gutters, ground and walls"; OUTLINE's
lesson 13 before the renumbering) on 26 September 2026: curl with a browser User-Agent plus pandoc
(HTML) or pdftotext (PDF); the GOV.UK content API; the Internet Archive `id_` raw form for Historic
England, whose live site returned 403. Every [V] below was string-checked against the extracted text
on the day. No gate in OUTLINE's table belonged to this lesson; what follows is the re-reading of the
Part A §6 and §7, Part B §5 and §6 and Part D D1 and D3 sources at drafting, and three sources read
for the first time (Historic England's maintenance pages, HSE's roof work page, HSE's ladder page 4 re-read).

### GOV.UK, "Understanding and addressing the health risks of damp and mould in the home" (Part A §6), re-read live

Content API: first published 7 September 2023, updated 1 April 2026. Everything Part A §6 records was
found, with one difference: **the live text now ends the condensation definition with [V] "This is
the most common form of damp."** Part A §6 recorded "Condensation is one of the most common causes of
damp and mould in homes."; that sentence was not re-searched. Added, [V]:
- "Penetrating damp is water that gets into the building from outside due to defects in the walls, roofs, windows or floors." (unchanged)
- "Traumatic damp can also originate from outside the property, for example from another building or from environmental flooding."
- "There may be multiple causes, for example traumatic or penetrating dampness may exacerbate condensation dampness."
- The external checks, in full: "damaged or blocked pipes, gutters or downpipes"; "broken seals around windows or ill-fitting windows that do not close fully"; "visible structural or facade defects, such as cracks in render or the foundation, missing or broken roof finishes"; "bridged (compromised) damp proof course".
- "Landlords should not assume they will be able to diagnose the problem themselves in all instances and should seek guidance from an appropriately qualified professional to avoid misdiagnosis of the cause or causes."
- "Repairing the source of water intrusion, such as fixing leaking pipes, blocked gutters, defective roofs, faulty damp proof courses, flood damage and other structural deficiencies can therefore be effective in removing the source of moisture and reducing risk of damp and mould, and also in avoiding more expensive repairs later (such as rot treatment)."
- "the fundamental cause of damp and mould will be due to building deficiencies, inadequate ventilation, inadequate heating and/or poor energy efficiency, not tenants’ normal domestic activities"

### University of Minnesota Extension, "Moisture in basements: causes and solutions" (Part A §6), re-read live

https://extension.umn.edu/moisture-and-mold-indoors/moisture-basements-causes-and-solutions. Read:
full text. Authors John Carmody, Brent Anderson and Richard Stone; no date shown. Everything Part A §6
records was found. Added, [V]:
- "Without proper grading, gutters and downspouts, some of this water flows into the basement."
- "There are just three sources of moisture:" then "Liquid water from rain or ground-water.", "Interior moisture sources such as humidifiers, unvented clothes dryers, bathrooms and cooking, as well as the moisture in concrete after construction.", "Exterior humid air that enters the basement and condenses on cooler surfaces."
- Symptoms listed include "Water trickling out of walls.", "Standing water on floor.", "Saturated base of concrete block walls; a ring of dampness." and "Condensation on cold walls and floor in summer."
- "In the summertime, basement windows may be opened for fresh air. If the outside air is warm and humid, it will condense on the cool basement wall and floor surfaces. Many homeowners see this moisture and believe they are experiencing basement wall leakage, when in fact the accumulated moisture is from condensation."
- "If the ground around a foundation is level or slopes toward the house, water is directed into the basement. The soil next to the house is often backfilled without proper compaction and later settles."
- "Place earth around the house so that it slopes away from the foundation wall a minimum of 1 inch per foot for at least 6 feet."
- "Missing gutters and downspouts cause rainwater to be directed toward the foundation perimeter." The downspout lines in full: "A downspout without an extender or splash block is worse than no downspout at all. It is depositing the huge volume of rainwater from the roof in a single concentrated location near the basement."
- On regrading: "Sloping the grade away from the house, which may require hauling fill to the site, is very important."
- "The best way to approach any building problem is to first do the things that are easy and low-cost."
- "Dehumidification can be used as a means of reducing the symptoms of humidity and odor in a basement, but it is not a permanent or complete solution."
- "It is appealing to solve a basement moisture problem with a membrane or coating on the inside." and "The water is still there, however, and eventually, these systems deteriorate or simply move the water to another pathway into the basement."
- "Evaluate gutters, downspouts and surface grading: The recommended approach after removing interior moisture sources is to evaluate the gutters, downspouts and surface grading around the house. These should be corrected first and may solve the problem."
- The step-by-step process, [V]: "Control interior moisture sources.", "If summertime, don't ventilate with outside air.", "Correct grading, gutter and downspout system.", "Provide an interior or exterior drainage system."
- "Installing an exterior drainage system at an existing building is the most costly, but also the most effective water control approach. This requires digging up the area around the foundation and rebuilding it similar to a new house installation."
The page gives no test for telling condensation from leakage beyond the season and the symptoms
above. It is written for Minnesota basements (it says "most basements in Minnesota are connected to
the rest of the house").

### University of Georgia, Circular 1082 (Part A §7, Part B §6), re-read live

Full text, pdftotext; still "Reviewed June 2021". Everything recorded was found. Added: under Roof &
Attic, a line to inspect the roof surface, shingles, eaves and soffits and "repair as needed" (not
quoted: the extraction carries a ligature); under Yard, clear dead plants and shrubs from the house and
trim branches that overhang the roof; under Basement / Crawl Space, check that the sump pump and floor
drain work. [V] "Check flashing around the chimney, plumbing vent, skylight, and other joints to ensure it is securely fastened; repair as needed." The checklist says who does a job only where it says "hire a professional" or "you may want to"; it gives no method for cleaning a gutter or checking flashing.

### Historic England, "Maintaining an Older Home" and "Maintenance Checklist" (new)

https://historicengland.org.uk/advice/your-home/looking-after-your-home/maintenance/ and
.../maintenance/maintenance-checklist/. The live site returned 403. Read: full page text of Internet
Archive captures **20230824101706** (maintenance) and **20230824101753** (checklist), the latest
captures; the pages may have changed since August 2023. Historic England is the public body for
England's historic environment, and the pages are written for owners of older homes. [V]:
- "The most important thing is to stop damp from getting into your home. You need to check roof coverings, gutters, downpipes and drains regularly to make sure they're working properly. A leaky roof is the most obvious issue, but damp from overflowing gutters or badly ventilated spaces can also cause timbers to rot, plaster to flake off, and bricks to crumble."
- "For example, in many older houses hard-to-access gutters, particularly if they're hidden from view, can get forgotten."
- "Occasional: These are carried out following severe weather or unforeseen events and need to concentrate on those parts of a building where water could get in easily"
- Checklist: "The following is not an exhaustive list but it covers the most critical elements:"
- Gutters: "Inspect and clear any debris at least every autumn and preferably more often"; "Are there any leaking joints?"; "Does rainfall cascade over the gutter from the roof?"; "Does the water pool in any one area?"; "Do the gutters slope correctly towards outlets?"
- Rainwater pipes: "Inspect when it is raining and note leakages"; "Clear any blockages"; "Check rear side of pipes with a mirror and look for cracks and corrosion"; "Are pipes securely fixed to the wall?"; "Are there any signs of staining or algae growth, or any washed-out mortar joints, on the wall behind the pipe?"
- Pitched roofs: "Inspections should be carried out twice a year and after storms or high winds"; "Debris on the ground will give an indication of roof problems"; "Are there any loose, slipped, broken or missing slates or tiles?"; "Is there a lot of moss? This could block gutters and damage slates and tiles"; "Look for signs of dampness on ceilings as a possible indication of roof leaks"
- Flashings: "Are all flashings fixed into the wall?"; "Ensure that flashings are dressed down and have not been blown or moved away from the surface of the wall"
- Drainage gullies: "Inspections should be carried out every autumn and preferably more often"; "Check that drainage gullies are free from silt, debris, vegetation and other objects"; "Make sure that all gully inlets are covered by a grating"
- Maintenance plan: "Think of the building as a whole, including its interior and the surrounding site. Consider such issues as surface water drainage or the proximity of trees."
- Base of wall: "Check to ensure that ground levels are at least 150mm below the level of any known damp-proof course or 150mm below internal floor levels"; "Ensure that vents are not obstructed"; "Remove plants and vegetation abutting and growing on the building"
- Exterior walls: "Look for defects in stonework, brickwork and rendering"
The pages give no method for clearing a gutter or a pipe, and say nothing about who should do it or
how to reach it.

### Property Care Association, "Rising Damp Advice" (Part A §6), re-read live

Full text. Everything recorded was found. Added, [V]: the common causes list opens "Moisture by-passing over the damp proof course with higher ground levels around the base of the property, eg. installation of patio a planting area" (sic); "Where the cause of rising damp is due to the bridging over the damp proof course, i.e. raised ground levels, bridging plaster render, or debris in the cavity; then removing the ‘bridge’ should hopefully be sufficient to control the capillary rise of moisture in the wall." The PCA is the damp-proofing trade body.

### RICS, Historic England and PCA, Joint Position Statement 2022 (Part A §6), re-read live

Full text, pdftotext. Everything recorded was found. The definition's two closing sentences together, [V]: "Traditional construction absorbs moisture but allows it to evaporate when conditions become drier. This is in contrast to modern construction, which relies on impermeable barriers to prevent moisture entering the fabric." Added, [V]: "This is in contrast to modern construction, which relies on impermeable barriers to prevent moisture entering the fabric."; the report should cover "The importance of regular building maintenance and how a lack of even basic maintenance can lead to problems arising. This is especially important and relevant to roofs, gutters, hidden gutters, rainwater disposal and changes in external ground levels."; a surveyor documents changes to materials, "(e.g. retrofitting or use of impermeable mortars in repointing and rendering)".

### Babergh and Mid Suffolk District Councils, "Wood-boring insects" (Part B §5), re-read live

Full text. Everything recorded was found. [V]: "This damp is typically caused by the addition of inappropriate, modern materials to a historic building." "The most common cause of damp in old buildings is impermeable outer finishes" (then a spaced hyphen) "such as cement render, or modern paints. If these materials are present, an insect infestation may persist until they are replaced with breathable alternatives." The page is a council heritage page about historic buildings.

### US EPA, "Termites: How to Identify and Control Them" (Part B §5), re-read live

Full text; "Last updated on October 21, 2025". [V]: "After construction, keep the soil around the foundation dry through proper grading and drainage (including maintenance of gutters and downspouts)." "Do not pile or store firewood or wood debris next to the house."

### US EPA, "A Brief Guide to Mold, Moisture and Your Home" (Part A §6), renters line re-read

[V] "Renters: Report all plumbing leaks and moisture problems immediately to your building owner, manager, or superintendent."

### HSE, "Roof work" (new)

https://www.hse.gov.uk/construction/safetytopics/roofwork.htm. Read: full text; "Last updated
2026-06-05". Construction guidance for Great Britain, written for those who manage or do roof work.
[V]: "All work on roofs is highly dangerous, even if a job only takes a few minutes. Proper precautions are needed to control the risk."; "Those carrying out the work must be trained, competent and instructed in use of the precautions required."; "High risk: almost one in five deaths in construction work involve roof work. Some are specialist roofers, but many are just repairing and cleaning roofs."; "Main causes: the main causes of death and injury are falling from roof edges or openings, through fragile roofs and through fragile rooflights."; "Falls from roof edges occur on both commercial and domestic projects and on new build and refurbishment jobs."; "all roofs should be treated as fragile until a competent person has confirmed they are not." The "almost one in five" is not dated or sourced on the page.

### HSE, "Asbestos: FAQs" (Part D D1) and "Asbestos essentials task sheets" (Part D D3), re-read live

FAQ "Updated 2025-09-04"; index "Updated 2025-09-19". [V] FAQ: "Asbestos may be part of any commercial or domestic building which was built or refurbished before the year 2000."; the list includes "asbestos cement products (pipes, flues, roofs etc)"; "Do not try to repair or remove any asbestos materials yourself if you have not had any training for non-licensed asbestos work."; "it is often best to leave them where they are"; "Work involving some lower risk asbestos-containing materials (eg asbestos cement products and textured decorative coatings, among others) can be carried out if a risk assessment demonstrates that the control limit will not be exceeded" (in the answer on non-licensed work, which is about work by trained workers); "ACMs need to be legally disposed of as hazardous waste. This should not be mixed with normal household waste." Index, titles only, [V]: "A10. Cleaning debris from guttering on an asbestos cement (AC) roof"; "A14. Removing asbestos cement (AC) sheets, gutters, etc. and dismantling a small AC structure"; **new**: "A21. Removing asbestos-containing bituminous products, such as roofing felt, gutter linings or damp-proof courses". The sheets themselves were not read.

### HSE, "Safe use of ladders and stepladders", page 4 (types of ladder), re-read live

[V] "have a strong upper resting point (ie do not rest it against weak upper surfaces such as glazing or plastic gutters)"; the 30-minute guide on page 2, re-read, unchanged.

## Gate closures, lesson 18 (2026-09-26), addendum

Further lines from the same 26 September re-reads (see "Gate closures, lesson 18" above), used in
the lesson's paraphrase.

- EPA: [V] "If there has been a lot of water damage, and/or mold growth covers more than 10 square
  feet, consult EPA's Mold Remediation in Schools and Commercial Buildings." (the guide is named, not
  read); [V] "If you choose to hire a contractor (or other professional service provider) to do the
  cleanup, make sure the contractor has experience cleaning up mold." [V] "Absorbent or porous
  materials, such as ceiling tiles and carpet, may have to be thrown away if they become moldy."
- GOV.UK: [V] "Mould can be removed from hard surfaces with an appropriate cleaning product and
  should be left to dry completely." [V] "Product guidance should be followed during application to
  protect those undertaking the work and the tenants living in the home."
- GOV.UK's internal checks include [V] "consistently high relative humidity, as assessed using a
  moisture meter or environmental monitors".
- EPA, the hygrometer sentence in full: [V] "Relative humidity can be measured with a moisture or
  humidity meter, a small, inexpensive ($10-$50) instrument available at many hardware stores."
- The Architects' Journal, Terry Brown's first sentence in full: [V] "It’s right to question the
  diagnostic skills of commercial damp proofing firms, but to state categorically there is no such
  thing as rising damp undermines a whole litany of rules of brickwork detailing I’ve adhered to all
  my professional life."

## Stage 4 note, lesson 09, second pass (2026-09-26)

Re-read live on 26 September 2026 with curl (browser User-Agent) and pandoc; each [V] string-matched
in the extracted text. Used in lesson 9 as these US utilities' advice to their own customers; no
product is named. No British page on gas detectors was read.

- **Con Edison, "Gas Safety"**, under "Gas Leak Detectors": [V] "A slow gas leak may not produce
  enough scent to be detectable, and even large leaks may not be detected by people with a weak
  sense of smell. A gas leak detector can give you peace of mind and help keep you and your
  neighbors safe by sounding an alarm before natural gas reaches the explosive range."
- **Atmos Energy, "Recognizing a leak"**: [V] "In addition, residential methane detectors are
  commercially available and can provide an additional ability to detect the presence of gas."

## Stage 4 note, lesson 11 (2026-09-26)

Recorded by lesson 11's Stage 4 fixer ("Carbon monoxide and the alarms that warn you"). The
reviewer re-read these live or from the recorded captures on 26 September 2026; the fixer re-read
the three legislation pages and the RIDGAS workbook the same day (curl with a browser User-Agent).

**Corrections made elsewhere in this file:** D23's amending instrument corrected in place to SI
2022/707 (SI 2022/578 is "The Leasehold Reform (Ground Rent) (Business Lease Notices) Regulations
2022"); D25's and "Gate closures, lesson 10"'s "J3" lines marked as Approved Document J's reprint,
not the statute; HSE's faqs.htm title corrected to "Domestic gas: frequently asked questions" at
Part B §6 and in the lesson 10 gate closures.

**The Building Regulations 2010 (SI 2010/2214), Schedule 1, Part J, requirement J3**,
https://www.legislation.gov.uk/uksi/2010/2214/schedule/1, revised text (page and data.xml; no
textual amendments recorded against Part J). This is the statute's wording, which differs from AD
J's reprint:
- J3: [V] "Where a combustion appliance is provided, appropriate provision having regard to the design and location of the appliance shall be made to detect and give early warning of the release of carbon monoxide at levels harmful to persons."
- Limit: [V] "Requirement J3 applies only to fixed combustion appliances located in dwellings."

**RIDDOR 2013 (SI 2013/1471), regulation 11(1)**, https://www.legislation.gov.uk/uksi/2013/1471/regulation/11:
- [V] "Where a conveyor of flammable gas through a fixed pipe distribution system, or a filler, importer or supplier (except by retail) of a refillable container containing liquefied petroleum gas, receives notification of the death, loss of consciousness or taking to hospital of a person because of an injury arising in connection with that gas, that person must—" (then notify HSE without delay and report within 14 days).

**HSE RIDGAS** (published 20 November 2025): Table 1 CO fatalities, Great Britain, 2020/21 1;
2021/22 3; 2022/23 2; 2023/24r 2; 2024/25p 1. Note b: [V] "this places a duty on certain conveyors
of gas (including LPG), to notify HSE of an incident involving a fatal or major injury that has
occurred as a result of the distribution or supply of flammable gas (mainly piped gas but also
includes bottled LPG)." [V] "The statistics published have been confirmed by HSE as an accurate
representation of the number of people who have died as a result of a domestic gas incident."
Note 4: [V] "Numbers for 2020/21 and 2021/22 are potentially affected by the impacts of the
coronavirus pandemic."

**Approved Document J (PDF)**, strings confirmed: [V] "Where a new or replacement fixed gas burning
appliance (excluding gas appliances used solely for cooking) is installed in a dwelling, a carbon
monoxide alarm should be provided in the room where the appliance is located."; [V] "on the ceiling
at least 300mm from any wall or, if it is located on a wall, as high up as possible (above any doors
and windows) but not within 150mm of the ceiling; and"; [V] "between 1m and 3m horizontally from the
appliance."; [V] "with fixed wiring (not plug-in types) may be used as an alternative, provided they
are fitted with a sensor failure warning device."; [V] "Provision of a carbon monoxide alarm should
not be regarded as a substitute for the correct installation and regular servicing of combustion
appliances." GOV.UK record: [V] "These amended provisions and guidance come into effect on 1 October
2022."

**SI 2015/1693 reg 4** (revised): 4(1)(a)(ii), 4(1)(b), 4(2) and 4(4) strings as in "Gate closures,
lesson 10"; 4(1)(c) in full: [V] "where, following a report made on or after 1st October 2022 by a
tenant or by their nominated representative to the landlord, a prescribed alarm is found not to be
in proper working order, the alarm is repaired or replaced." Amendments F1 to F6: SI 2022/707; F7
and F8: SI 2026/325.

**HSE co.htm** (stamp 2026-02-10): the "around 7" sentence, the four signs, the servicing sentence
and the three spillage steps as in "Gate closures, lesson 10". The page's "HSE statistics" link
targets statistics/tables/index.htm, whose "Gas Safety" entry is RIDGAS.

**HSE "Domestic gas: frequently asked questions"** (faqs.htm): [V] "Every year around 7 people die
from gas-related carbon monoxide (CO) poisoning."; [V] "HSE strongly advises that gas appliances
and/or flues are regularly checked for safety at least once every 12 months."; the CO alarm and
EN 50291 strings as in "Gate closures, lesson 10".

**SSI 2019/8 and the Scottish Government factsheet** (last updated 14 August 2024): art 2 (k), art 1
as amended by SSI 2021/46 (1 February 2022), and the factsheet's "same room", "does not need to be
linked", "Gas cookers and hobs", "sealed battery", "British Kitemark EN 50291-1", "property owner’s
responsibility" and "no list of approved suppliers" strings all as in "Gate closures, lesson 10".

**Minnesota Statutes 2025**, 299F.51 subd. 1(a) and subd. 4, and 299F.50 subd. 5 (UL2034), as in
"Gate closures, lesson 10". The statute does not say where the ten feet is measured from; subd. 5's
exceptions are for multifamily dwellings only.

**California H&S Code 17926**: (a) [V] "approved and listed by the State Fire Marshal pursuant to
Section 13263"; (b) ends [V] "or with the manufacturer’s instructions, if it is technically feasible
to do so." 17926.1(a): [V] "shall maintain carbon monoxide devices in that dwelling unit consistent
with this section and Section 17926."

**CPSC CO page** (capture 20260908150612): the product warnings are two combination smoke and CO
detectors (failure to warn of smoke and fire) and one plug-in natural gas and CO detector (failure
to alert to CO). **CDC** (capture 20260920191925): under "Reducing risk", [V] "Install
battery-operated or battery back-up CO detectors near every sleeping area in your home." is listed
first; CDC ranks no steps and does not define "indoors". CDC's count is [V] "not linked to fires";
it does not itself say that it includes cars (its list of sources names cars and trucks).

**NCSL, HETAS, CSIA, EST, CPSC 2022 report**: every string the lesson quotes, as in "Gate closures,
lesson 10" and Part D.

## Stage 4 note, lesson 12 (2026-09-26)

Recorded by lesson 12's Stage 4 fixer ("Smoke alarms: where they go, and why they stay silent").
The reviewer re-read each page live on 26 September 2026 (curl with a browser User-Agent; GOV.UK
through the content API, then pandoc or pdftotext); the fixer string-matched every line below in
those saved copies the same day and re-counted FIRE0602 by script. No correction to earlier entries.

**MHCLG, "Detailed analysis of fires ... year ending March 2026"** (D33), section 5:
- [V] "As for all years since the year ending March 2011, the most common category of smoke alarm failure in dwelling fires involving any victims^([11]) was ‘other’ (including ‘alerted by other means’, ‘system damaged by fire’, ‘other’ and ‘don’t know’)"
- Footnote 10 in full: [V] "Fire products did not reach detectors(s) can be where the smoke alarms present were poorly sited (for example not on the floor of origin) so the smoke did not reach the detector." (note "can be": the footnote gives an example, not a definition)
- Table 5.1, second column, "Casualties" (dwelling fires with any casualty; note 1: [V] "Includes all non-fatal casualties and fire-related fatalities"): missing battery 7.2%; defective battery 8.7%; other act preventing alarm from operating 13%; fire products did not reach detector(s) 8.7%; fire in area not covered by system 10%; faulty system / incorrectly installed 13%; other 39%. (Fires column, already recorded: 1.8, 3.1, 2.6, 49, 17, 2.4, 24.) Battery reasons in the casualty column 15.9%, siting reasons 18.7%: the course's addition.

**FIRE0602, "Data - fires"**, 2025/26, accidental dwelling fires (total 23,795), by detailed source
of ignition, with MHCLG's category: Cooker incl. oven 6,324 (Cooking appliances); Wiring, cabling,
plugs 2,497 (Electrical distribution); Smoking materials 1,819; Ring/hot plate (separate appliance)
1,150 (Cooking appliances); Apparatus - batteries, generators 885 (Electrical distribution); Microwave
oven 873 (Cooking appliances); Candles 844; Grill/Toaster 822 (Cooking appliances); Tumble dryer 579
(Other electrical appliances); Heater/Fire 466 (Space heating appliances); Washing machine 409 (Other
electrical appliances). So the tumble dryer is **not** the commonest non-cooker appliance source; it
is the commonest outside MHCLG's cooking appliances and electrical distribution categories.

**Fire Kills, "Detection"** (Part B §6), live:
- [V] "The ideal position is on the ceiling, in the middle of a room, and on the hallway and landing, so you can hear an alarm throughout your home and so they protect your escape routes."
- [V] "For extra safety, fit smoke alarms in the bedrooms too" (followed on the page by a spaced en dash; a lesson ends the quotation before it)
- [V] "Heat alarms can be placed in a kitchen so you may consider installing one there."
- [V] "Consider fitting smoke alarms in the most used rooms (including bedrooms) and a heat alarm in the kitchen."
- [V] "Having more smoke alarms in more places in your home increases your protection"
- The page names no department and no nation. GOV.UK's "Fire safety in the home" (D35) is marked as applying to England only (national_applicability), so the two are "England's official advice", not "the UK advice".

**USFA, "Smoke alarms"** (D41), page last reviewed 21 September 2026:
- [V] "Put smoke alarms on the ceiling or high on the wall."
- [V] "Only qualified electricians should install hardwired smoke alarms."
- [V] "Your city, county or state may require a specific type of alarm. Please check with your local fire marshal for information on what type of alarm you need."
- [V] "Smoke alarms should be interconnected."

**NFPA, "Smoke Alarms in U.S. Home Fires"** (D42; Ahrens, September 2015, data 2009 to 2013):
- Chart A (fires): [V] "Fire too small to operate" 12%; [V] "Present but did not operate" 8%. Chart B (deaths): the same two categories at 1% and 21%.
- The reasons list is headed [V] "In fires in which the smoke alarms were present but did not operate". Its categories: missing or disconnected battery 46%, dead or discharged battery 24%, unclassified 9%, hardwired power failure 7%, lack of cleaning 6%, defective unit 5%, [V] "Improper installation or placement" 3%. It has no category for smoke that did not reach the alarm. Neither NFPA nor MHCLG compares the two counts.

**Scottish Government, "Fire and smoke alarms: the law"** (D26): the mains-wired line continues,
after a spaced en dash, with [V] "these should be replaced every 10 years". Not used in a lesson:
the open-plan rule, one alarm [V] "no more than 7.5 metres from any point in the room".

## Stage 4 note, lesson 10 (2026-09-26)

Re-read live on 26 September 2026 with curl (browser User-Agent, no personal data in any header)
and pandoc or pdftotext, by reviewer F and, for the statutes and the phone numbers, by the fixer the
same day. Each [V] string-matched in the extracted text.

- **Correction to C15.** HSE's bayonet-cooker line and "Any other type of
  installation/reinstallation ..." sit in the **landlord** section of "Domestic gas: frequently
  asked questions", as items 4 and 5 of HSE's tips on tenants' own appliances, not in the tenant
  section. [V] "Free-standing cookers connected by a flexible connector (bayonet fitting), are not
  considered to be 'readily movable', but can be moved, temporarily, eg to clean the space they
  normally occupy; this type of activity is not regarded as 'work' within the meaning of these
  Regulations." The tenant section has the specimen letter and names form LGSR1.
- **HSE, L56 (5th edn, 2018).** Legal-status page, the sentence before the one C14 records: [V]
  "You may use alternative methods to those set out in the Code in order to comply with the law."
  Para 83, the sentence after "do-it-yourself gas engineers ...": [V] "The level and range of
  competence should match the full extent of work done, but needs only to be sufficient for and
  relevant to that work." Para 91: [V] "all gas engineering businesses, including self-employed gas
  engineers, are (subject to the limited exceptions in regulation 3(4)) required to be in membership
  of a class of persons approved by HSE, whether they carry out such work as their main or part
  activity." Para 93 is dated to the edition: [V] "At the time of publication of this edition of the
  ACOP, the only body with such approval is the Gas Safe Register". Para 94: [V] "Regulation 3
  extends to work on portable or mobile space heaters, eg LPG cabinet heaters". Para 95: people
  covered by the reg 3(4) exceptions [V] "need to have the required competence and ensure that they
  follow instructions, eg given by the gas supplier/appliance manufacturer, as appropriate."
- **HSE, "Gas Safe Register"** (newschemecontract.htm): [V] "Under the Gas Safety (Installation and
  Use) Regulations 1998 for a gas engineering business to legally undertake gas work that is within
  the scope of the Regulations they must be on the Gas Safe Register."
- **HSE, "Gas safety: home owners"** (faqownerocc.htm), re-read by the fixer 26 September 2026
  (gate G-N1 for the helpline): [V] "If in any doubt you can ring Gas Safe Register 0800 408 5500 or
  check their website to see if the engineer is registered." [V] "By inputting the licence number
  from the engineers ID card. Consumers will be able to see pictures of the registered engineers and
  details of their qualifications. This information can also be sent through as a picture message
  to a mobile phone by calling the freefone helpline on 0800 408 5500." The same page offers a text
  route (the business registration number or the engineer's seven-digit licence number to 85080);
  not used in a lesson. Advice Line 0800 300 363 and its hours unchanged.
- **Gas Safe Register, "Don't DIY" (capture 20251023004454):** [V] "Working with gas can be
  dangerous, so it’s crucial that you never try to fix, fit or move appliances like your boiler or
  cooker yourself." Also [V] "Never try to remove or repair a gas appliance yourself".
- **SI 1998/2451, reg 34** (live, no known outstanding effects): [V] "(1) The responsible person
  for any premises shall not use a gas appliance or permit a gas appliance to be used if at any time
  he knows or has reason to suspect that it cannot be used without constituting a danger to any
  person." [V] "(2) For the purposes of paragraph (1) above, the responsible person means the
  occupier of the premises, the owner of the premises and any person with authority for the time
  being to take appropriate action in relation to any gas fitting therein."
- **SI 1998/2451, reg 36** (live, no known outstanding effects): "relevant premises" are those
  occupied for residential purposes under [V] "a licence" as well as a lease; "lease" includes [V]
  "a lease for a term of less than 7 years" and [V] "a tenancy for a periodic term". Reg 36(7): [V]
  "Where there is no relevant gas appliance in any room occupied or to be occupied by the tenant in
  relevant premises, the landlord may, instead of ensuring that a copy of the record referred to in
  paragraph (6) above is given to the tenant, ensure that there is displayed in a prominent position
  in the premises ... a copy of the record".
- **SI 1998/2451, reg 3(4)** re-read live, unchanged: [V] "The requirements of paragraph (3) above
  shall not apply in respect of" the two hose and regulator replacements.
- **SI 1998/2451, introduction:** made [V] "in exercise of the powers conferred on him by sections
  15(1), (2), (4)(a), (5), (6)(b) and 82(3)(a) of ... the Health and Safety at Work etc. Act 1974".
- **Health and Safety at Work etc. Act 1974, s 53(1)** (live; the page lists outstanding changes to
  the Act, none read as touching this definition): [V] "“self-employed person” means an individual
  who works for gain or reward otherwise than under a contract of employment, whether or not he
  himself employs others;"
- **Interpretation Act 1978, s 11** (live, no known outstanding effects): [V] "Where an Act confers
  power to make subordinate legislation, expressions used in that legislation have, unless the
  contrary intention appears, the meaning which they bear in the Act."
- **Texas Occupations Code s 1301.551** (TSBPE unofficial June 2023 text, reviewer F): requires a
  municipality of more than 5,000 inhabitants to regulate plumbing by ordinance and to require a
  permit before plumbing, apart from listed minor replacements. Not used in a lesson (no string
  recorded); lesson 22 may use it after re-reading.
- **Use in lesson 10:** applying s 53 through s 11 to a paid occasional favour (the £60 case) is the
  course's reading, labelled as such; no source read applies reg 3(3) to that case in terms.

## Stage 4 note, lesson 14 (2026-09-26)

Recorded by lesson 14's Stage 4 fixer ("Before you drill: cables, pipes and what's in the wall").
The reviewer re-read each page live on 26 September 2026 (curl with a browser User-Agent, then pandoc
or pdftotext); the fixer re-fetched ESF and Bosch the same day and string-matched the two new lines.
No correction to earlier entries; D8 already carries EPA's "Generally,", which lesson 14 had dropped.

**Electrical Safety First, "Advice for DIY-ers"** (D34), live:
- [V] "A quality cable detector can help track buried cables before you start work. Remember it is required that cables buried in walls are installed either horizontally or vertically from electrical accessories like socket-outlets or switches." (ESF is a UK charity: the requirement is scoped to UK homes; nothing read covers US walls, G-E3)
- [V] "fuseboard (consumer unit)"
- [V] "The most common mistakes people make when attempting to undertake DIY were cutting through power leads, drilling into wiring, or trying to repair an electrical item while it is switched on."
- [V] "Any electrical work should be left to competent professionals."
- [V] "For any DIY near electrical wiring or power supplies, switch off the power at your fuseboard and, where possible, only use battery-powered tools. To test that the power is off before beginning non-electrical DIY, plug an appliance in or try switching on lights."

**Bosch DIY, "How to drill without any nasty surprises"** (Part B §1), live:
- [V] "If the light turns yellow, the result is inconclusive and you need to check the spot again."
- [V] "This is especially important when looking for power lines" (of the hand on the wall, "around 20–30 cm away from the detection device")
- [V] "Green? Nothing was detected and you’re good to go."
- [V] "To ensure the device can find the power supply, switch on electrical items such as a light or vacuum cleaner. A cable must have a current in order to be picked up by the device." (Bosch names no circuit; "the circuits likely to be in that wall" is the course's reading)

**Other strings the reviewer verified live the same day** (no change to their entries):
- EPA (last updated 25 June 2026): [V] "Generally, you can't tell whether a material contains asbestos simply by looking at it, unless it is labeled. If in doubt, treat the material as if it contains asbestos and leave it alone."; [V] "Don't saw, sand, scrape, or drill holes in asbestos-containing materials."; [V] "Taking samples yourself is not recommended."; wetting appears only in the contractor list, [V] "Applies a wetting agent to the asbestos material with a hand sprayer".
- HSE asbestos introduction: [V] "Buildings constructed after 2000 are unlikely to contain asbestos."; [V] "drilling into a wall"; part 2, [V] "stop work immediately". HSE FAQ: [V] "Asbestos may be part of any commercial or domestic building which was built or refurbished before the year 2000."
- CPSC 5133: [V] "working within electrical panel boxes that are usually electrically live, even with the main circuit breakers turned off". HSG85 para 54: [V] "the use of non-contact devices such as ‘volt sticks’".
- CIS36: [V] "Occasional short-duration drilling with hand-held rotary power tools"; [V] "Otherwise use RPE* with an APF of 20"; Table 2, APF 20, [V] "FFP3 disposable mask or half mask with P3 filter".
- WIS23: [V] "When cleaning up, use vacuum equipment that meets at least the dust class M (medium hazard)"; [V] "Do not use compressed airlines or dry sweeping". Written for wood dust at work; applying it to plaster and brick dust is the course's reading.
- HSE silica: [V] "bricks, tiles, concrete and mortar". HSE dust masks: [V] "You should carry out a pre-use check every time you put on your respirator."
- **Struck gas pipe:** only National Gas (GB) was read on a struck pipe. For Northern Ireland and the US no page on a pipe hit inside a house was read; lesson 14 labels following lesson 9's steps as the course's reading, and quotes SoCalGas's [V] "DO NOT attempt to control the leak or repair a damaged pipe or meter." (Part A §4).

## Stage 4 note, lesson 13 (2026-09-26)

Re-read live on 2026-09-26 by lesson 13's Stage 4 reviewer (curl with a browser User-Agent, then
pdftotext or pandoc; NIOSH's page from Internet Archive capture 20260923185140, the live page returning
403), and the key strings checked again by the fixer against the same extracts. Recorded so lesson 13's
new quotations have a [V] entry, and so later lessons state the methylene chloride rules precisely.

- **EPA, "Risk Management for Methylene Chloride"** (last updated 6 March 2026): [V] "In March 2019, EPA issued a final rule to prohibit the manufacture (including import), processing, and distribution of methylene chloride for consumer paint and coating removal."; [V] "because of the acute fatalities that have resulted from exposure to the chemical in consumer paint and coating removal"; [V] "After November 22, 2019, all persons are prohibited from manufacturing (including importing), processing, and distributing in commerce, including distribution to and by retailers, methylene chloride for consumer paint and coating removal."; [V] "EPA is encouraging all consumers to stop using methylene chloride products that they may have already purchased for paint and coating removal."; [V] "Please consult your state and local government solid waste agencies to obtain proper disposal instructions for leftover or unused paint and coating removal products."; [V] "Prohibits manufacturing, processing and distribution of methylene chloride for all consumer uses."; [V] "Consumer paint and coating removal was prohibited in 2019."; [V] "In April 2024, EPA finalized prohibitions and workplace protections under the Toxic Substances Control Act (TSCA)". **Nothing on the page addresses a consumer's use of a tin already owned beyond "encouraging ... to stop using".** So the rules, as EPA summarises them, prohibit supply (manufacture, processing, distribution), not use: never write that methylene chloride is "banned" or that using an old tin is prohibited.
- **EPA, "Volatile Organic Compounds' Impact on Indoor Air Quality"** (last updated 23 June 2026): [V] "Concentrations of many VOCs are consistently higher indoors (up to ten times higher) than outdoors."; [V] "During and for several hours immediately after certain activities, such as paint stripping, levels may be 1,000 times background outdoor levels."; [V] "Health effects may include:" (the list includes eye, nose and throat irritation, and [V] "Headaches, loss of coordination and nausea"; EPA doesn't call these short-term); [V] "go outdoors or in areas equipped with an exhaust fan to use it. Otherwise, open up windows to provide the maximum amount of outdoor air possible."; [V] "Use products that contain methylene chloride outdoors when possible; use indoors only if the area is well ventilated." The two EPA pages still differ on use.
- **OSHA 3080** (2002 Revised): [V] "This booklet is designed to present to employees and employers a summary of the basic safety procedures"; [V] "Never yank the cord or the hose to disconnect it from the receptacle."; [V] "Disconnect tools when not using them, before servicing and cleaning them, and when changing accessories such as blades, bits, and cutters." The booklet does not define "disconnect" and **does not mention batteries anywhere**: taking out a cordless tool's battery is the course's reading, labelled as such.
- **HSE CIS36** (Revision 3): [V] "the more enclosed a space, the more the dust will build up. However, do not assume that dust levels will be low when working outside with high-energy tools" (quote both halves; the lesson splits around the source's sentence break); [V] "enclosing the work to stop dust escaping. Use sheeting or temporary screens"; [V] "general mechanical ventilation to remove dusty air from the work area (eg in enclosed spaces such as indoors)"; [V] "The general level for construction dust is an APF of 20. This means the wearer only breathes one twentieth of the amount of dust in the air"; [V] "(ie H (High) M (Medium) or L (Low) Class filter unit)", and Table 1's rows ask for [V] "an H or M Class extraction unit"; Table 2, for longer-duration work, [V] "Powered RPE such as a TH2 powered hood/helmet". RPE is respiratory protective equipment.
- **HSE WIS23** (Revision 3): [V] "an assigned protection factor (APF) of at least 20"; [V] "facial hair tight-fitting respirators are not appropriate as the hair can prevent the respirator sealing to the face, so a hood/helmet should be considered".
- **HSE, "All you need to know about disposable dust masks"**: [V] "At present this is also the only way of meeting legal requirements." (of fit testing). FFP2's factor is 10, below the factor of 20 CIS36 and WIS23 set for construction and wood dust, so the course offers FFP3 for those jobs (OUTLINE's lesson 13 objective corrected the same day).
- **NIOSH FFR CEL page** (capture 20260923185140): besides the donning instructions, it links an infographic that [V] "Explains donning and doffing your FFR, the user seal check and gives tips for a good fit". Not read.
- **29 CFR 1926.1153**, Table 1 row (ii), handheld power saws, any blade diameter: [V] "Use saw equipped with integrated water delivery system that continuously feeds water to the blade"; [V] "Operate and maintain tool in accordance with manufacturer's instructions to minimize dust emissions"; indoors or in an enclosed area, APF 10 at any duration. (f): [V] "The employer shall not allow dry sweeping or dry brushing where such activity could contribute to employee exposure", with exceptions where wet sweeping, HEPA-filtered vacuuming or other methods are not feasible.
- **LFB, "Batteries and chargers"**: [V] "Contact the manufacturer or certified technician" (keep "certified"). LFB's "Turn off the device" is written for devices; applying it to a detached tool pack is the course's reading.

## Stage 4 note, lesson 16 (2026-09-26)

Re-read live on 26 September 2026 with curl (browser User-Agent, no personal data in any header)
and pdftotext, by the Tier A reviewer and, for the Socias capture, the two CPSC PDFs, the D'Souza
abstract, LA455, the QuickCard and the Scottish page, by the fixer the same day. Each [V]
string-matched in the extracted text.

- **Socias 2014, "43% of fatal falls"** (capture 20260907020506). [V] "Falls remain a leading cause
  of unintentional injury mortality nationwide, and 43% of fatal falls in the last decade have
  involved a ladder (1)." Reference 1 is Rockett and colleagues, "Leading causes of unintentional
  and intentional injury mortality: United States, 2000–2009" (not read). Read as the sentence reads
  (all US fatal falls), the figure can't be squared with the ladder death counts this file holds
  (NIOSH's 113 work deaths in 2011; CPSC's 79 as "half" of ladder and step stool deaths in 2000),
  which run to hundreds a year. **Not used in any lesson**; lesson 16 cut it at Stage 4 (OUTLINE
  lesson 16, note of this date).
- **Socias, scope of the fall-height finding.** [V] "Fall height was documented for 82 of 113
  fatalities and an estimated 11,400 of 34,000 nonfatal ED-treated LFIs" (about a third, the
  course's arithmetic). Limitations: [V] "A preferable denominator to understand LFI risk would be
  workers who used ladders in 2011". Counts of injured workers are not a risk per use.
- **D'Souza 2007 abstract** (PubMed 17478268): [V] "cases of nonfatal ladder-related injuries
  treated in U.S. emergency departments (EDs) from 1990 through 2005 were selected using NEISS ladder
  product codes". The codes are not listed, so whether step stools were in or out is not known from
  the abstract. [V] "ladder product codes".
- **CPSC, hazard screening report, 65 and over** (hazard_older.pdf): the category is [V] "Ladders
  and step stools" (NEISS codes 618, 620, 688, 711, 4032, 4033). Its "half (79) of all ladder deaths",
  the 16% and the 39% are for ladders and step stools together.
- **CPSC 2020 estimates**: injuries [V] "related to, but not necessarily caused by, a consumer
  product". Methods: NEISS [V] "cannot estimate the number of product-related injuries that are
  treated outside hospital EDs in facilities, such as doctors’ offices and medical clinics"; the
  Injury Cost Model [V] "can estimate the proportion of medically attended injuries treated in places
  other than an ED". So "medically attended" adds treatment outside emergency departments.
- **LA455** (Ver 1 Rev 1 09/26), section 09, p. 8: [V] "Stepladders should not be used to access
  another level, unless they have been specifically designed for this." No mention of stairs in
  LA455 or HSE's ladder pages (reviewer's search).
- **OSHA QuickCard 3246**: [V] "Do not use the top step/rung of a ladder as a step/rung unless it
  was designed for that purpose." (Advice; OSHA's rule (b)(13) has no such exception.) Not used.
- **HSE FAQ**: [V] "nor does it include walking up and down a permanent staircase in a building."
- **HSE, "Types of ladder and using them safely"**: [V] "Check all four stepladder feet are in
  contact with the ground and the steps are level". Page 2: [V] "As a guide, if your task would
  require staying up a leaning ladder or stepladder for more than 30 minutes at a time, it is
  recommended you use alternative equipment." That shorter spells meet the guide is the course's
  reading, labelled as such in lessons 15 and 16.
- **Scottish Government, "Fire and smoke alarms: the law", "Installation of alarms"**
  (https://www.gov.scot/publications/fire-and-smoke-alarms-in-scottish-homes/pages/installation-of-alarms/):
  [V] "Smoke and heat alarms should be fitted as per manufacturer’s guidance." [V] "If you have
  asbestos in your ceiling, you do not need to disturb this to install interlinked alarms. Instead,
  you can attach battery operated alarms using a firm adhesive, such as a mounting adhesive glue or
  sticky pads." [V] "If you have any doubt about asbestos and installing fire alarms in your home,
  you might want to seek specialist advice before doing so." Landing page, re-read: [V] "Every home
  in Scotland must have interlinked fire alarms." [V] "All smoke and heat alarms should be attached
  to the ceiling and be interlinked."
