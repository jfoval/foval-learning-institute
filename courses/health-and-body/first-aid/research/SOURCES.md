# Sources: First Aid and CPR

<!-- unread: Darley, Latan, Latane, medicalistes, semicyuc, 223-6, Highlights of the 2025 Guidelines, Lavonas, Singletary, Hartford, Welling, Kauvar, Norii, citizenAID, Fatal posture, Mullins, Saver, Bad Samaritan, First Aid Manual, ANZCOR, TOXBASE, StatPearls, EuReCa, Böttiger, NG41, Emerade, PDAPS, Peng Yu -->

*Stage 1 research, 2026-09-24. Written before any lesson is drafted, by four researchers working
in parallel, each in a fresh context, each on one part of the subject (Parts A to D below), and
brought together here. For each source: what it is good for, what it establishes, and exactly how
much of it was read. All dates read are 2026-09-24.*

**This is a safety-critical course and a sensitive domain (medicine, standards 3.4).** A wrong
number in a lesson could hurt someone. Every lesson gets the neutrality audit and the five-reviewer
Stage 4, and every number goes through the fact-check against the guideline text, not against this
file. This file is where the drafter finds which text to check against.

**How to read the quotation marks.** All four parts mark quotations one of three ways: **[V]**,
copied from text the researcher extracted directly (curl and an HTML stripper, pdftotext, the
GOV.UK content API, or an Internet Archive capture); **[V-img]** (Part C only), a recommendation
table that the AHA/Red Cross 2024 guideline publishes only as an image, transcribed by eye from the
archived image, which **must be re-read against the image before the wording reaches a lesson**;
and **[T]**, returned by the WebFetch summarising tool, which is a small model and must be
re-checked (Part D has a handful from the GAO report; no other part used it). Nothing from a
search-result snippet is in quotation marks anywhere in this file. Where a part says "snippet
only", nothing from that item may be stated in a lesson as a finding.

**Four access problems shaped this research, and a drafter inherits them.**

1. **The AHA blocks automated readers.** ahajournals.org and cpr.heart.org return Cloudflare
   challenges. Every AHA 2025 guideline part and the AHA/American Red Cross 2024 First Aid
   guideline were read from **Internet Archive captures** of the AHA's own web versions, with
   snapshot IDs given in each part. Two recommendation boxes on those web pages look like web copy
   errors (Part A, sources S3 and S4) and must be checked against the Circulation PDF in a browser.
   The AHA "Highlights of the 2025 Guidelines" PDF could not be read at all (on the unread line).
2. **The 2025 ERC chapters are subscription-walled at the publisher** (403 at
   resuscitationjournal.com and sciencedirect.com, and no Wayback capture). Parts A and C read the
   typeset publisher PDFs of ERC 2025 Adult BLS, Special Circumstances and First Aid, and Part C
   read part of ERC 2021 First Aid, **from third-party hosts** (sofia.medicalistes.fr and
   semicyuc.org). That is not a paywall workaround in the sense the brief forbids (the files were
   posted openly by third parties, and nobody bypassed a block), but the provenance is not the
   publisher's, and a copy on a third-party server can differ from the version of record. **So
   those chapters are on the unread line by article number** (110771 Adult BLS, 110753 Special
   Circumstances, 110752 First Aid) **and by host name, and ERC 2021 First Aid by its first
   author.** A lesson may not cite them until someone has checked each quoted line against the
   publisher's page in an ordinary browser and removed the entry. Until then, the **RCUK 2025
   guidelines, read in full from resus.org.uk, are the citable European source**: they are the
   official UK adaptation of the ERC chapters and quote them. The ERC's own lay book, *The ERC
   Guidelines 2025 on Resuscitation for Everyone* (erc.edu, read in full, direct), is also
   citable. Both ERC chapters have errata dated 21 September 2026 (111314, 111316) that nobody has
   read.
3. **ILCOR's 2025 First Aid and BLS CoSTRs were read from ilcor.org's own PDFs**, which are the
   accepted manuscripts (the First Aid one is headed "CONFIDENTIAL" and dated March 2025), not the
   typeset Circulation articles. Wording could differ slightly. Quote them with that caveat, or
   re-read the published version first.
4. **Public pages lag the 2025 guidelines**, and a drafter who quotes the first page a search
   returns will teach 2021 advice. The St John Ambulance pages were clinically reviewed on 28 April
   2025, six months before RCUK 2025. The NHS pages are older still in places (the child choking
   page is from October 2024 and still shows two-finger chest thrusts; the cuts page still says
   elevate). The old NHS first aid and CPR URLs now redirect to St John Ambulance. The American Red
   Cross burns page changed during 2026 (Part B 4.1). **Teach from the guideline; use a public page
   for wording only when it agrees with the guideline, and say so where a well-known page does
   not.**

**The `unread:` line is the build's enforcement.** It matches words, case-sensitively, in lesson
files. What each entry blocks, and why:

- **Darley, Latan, Latane**: the 1968 bystander experiments ("Latan" because the build's word match stops at the accented letter, so it catches "Latané"; "Latane" catches the unaccented spelling). The famous 85% and 31% figures reached Part
  D only as a search snippet; the paper is closed access and PubMed has no abstract. A lesson may
  describe the bystander effect from Fischer 2011 (abstract read) and the Kitty Genovese correction
  from Manning 2007 and the New York Times 2016 (both read), but may not name the 1968 study or
  give its numbers until someone reads it.
- **110771, 110753, 110752, medicalistes, semicyuc, Zideman, 111314, 111316**: the ERC chapters
  above, and their errata. **Djakow**: ERC 2025 Paediatric Life Support chapter, not obtained;
  read through the RCUK adaptation.
- **223-6**: French Code pénal Article 223-6, read from a mirror because Légifrance blocked the
  script. Recheck on Légifrance, then remove the entry.
- **Highlights of the 2025 Guidelines**: the AHA summary PDF (403).
- **Lavonas**: the AHA 2023 toxicology focused update (read only as absorbed into AHA 2025 Part
  10). **Part 12**: AHA 2025 Resuscitation Education Science (abstract only, COR/LOE not seen).
  **Singletary**: ILCOR 2020 First Aid CoSTR (the ILCOR 2020 heatstroke CoSTR page was read on
  costr.ilcor.org and may be cited by its own title).
- **Hartford, Welling, Kauvar, Norii**: tourniquet and choking papers seen only as citations.
  **citizenAID**: homepage only. **Bad Samaritan**: Kaufman's database, entries not loaded.
- **Fatal posture, Mullins**: the anaphylaxis posture case series behind the RCUK 2021 "do not
  stand up" advice (Pumphrey 2003 is a letter with no abstract). Cite RCUK 2021, MHRA 2023 and NHS
  for the posture advice, and Pumphrey 2000 (abstract read) for the fatal-reaction timings.
- **Saver**: "Time is brain" 2006, the source of the 1.9 million neurons a minute figure. A lesson
  may give the ASA's figure attributed to the ASA.
- **First Aid Manual**: the UK voluntary aid societies' manual, 11th edition 2021; only its
  catalogue record was seen, and no contents. **Scientific Advisory Council**: the American Red
  Cross guideline database (TLS failure) and its note on ABC vs CAB.
- **ANZCOR, TOXBASE, StatPearls, EuReCa, Böttiger, NG41, Emerade, PDAPS, Peng Yu**: named in the
  parts, not read.

**Not on the line, deliberately.** The AHA/American Red Cross 2024 First Aid guideline: Part A
lists it as unread, but Parts B and C read it in full from Wayback captures (Part B snapshot
20260502024223, Part C 20260329073336), so it is citable, with the [V-img] caveat on the
recommendation tables. Blewer 2018, Hasselqvist-Ax 2015, Wissenberg 2013 and the other studies read
at abstract level: a lesson may cite what the abstract says and nothing more. The NHS, St John,
British Red Cross and American Red Cross pages: read in full, dated in the parts.

**Boundaries with other Core courses, settled here so no lesson re-opens them.**
- **Cooking Fundamentals** (T3, earlier this term) lesson 2 teaches kitchen fire prevention and a
  one-line first response to a burn, and points here. **This course owns burn first aid.** Part B
  found that the American Red Cross burns page changed from "20 minutes" to "5 to 20 minutes"
  during 2026; the Cooking line that depended on the old wording has already been fixed and
  committed in another session, so nothing here touches it. The burns lesson here teaches the
  US/UK difference properly (Part B 4.1).
- **Strength and Fitness** (T3) teaches when to stop exercising (chest discomfort, the exertional
  rhabdomyolysis signs) and says "Treating anybody. That's First Aid and CPR, later this term."
  **This course owns what a bystander does when someone collapses while exercising**: the athlete
  who pants or has a brief seizure-like episode at the start of a cardiac arrest (Part A 2.1) is a
  good worked example for the recognition lesson and a natural cross-reference. It does not
  re-teach exercise screening.
- **Mental Fitness** (T2, published) owns anxiety, low mood and the evidence on treatments. This
  course gives only the ERC 2025 first-aid response to someone with suicidal thoughts (ask
  directly, stay, get help; 988 in the US, Samaritans 116 123 in the UK) and points there.
- **Emergency Preparedness** and **Wilderness Survival** (T24) own disaster kits, grid-down care,
  remote-area evacuation and wilderness medicine. This course teaches heat, cold, bites and stings
  at the level of a bystander who can call an ambulance.
- **Habits and Addiction** (T10) owns addiction. This course owns recognising an opioid overdose
  and giving naloxone.
- **Medical Literacy** (T10) owns reading a study in general. This course teaches the one reading
  skill it needs on the way: what COR 1, COR 2b, "strong" and "weak, very low certainty" mean,
  because a learner who meets a guideline table needs it.

---

## The first things Stage 1 found, and they shape the course

1. **The guidelines changed in October 2025, and most public pages have not caught up.** AHA 2025,
   ERC 2025, RCUK 2025 and ILCOR 2025 were all published between 21 and 27 October 2025. The
   changes a lay learner will notice: **the AHA now teaches 5 back blows then 5 abdominal thrusts
   for a choking adult** (COR 1, LOE B-NR), so the US and UK finally teach the same sequence (Part
   B 2.2); **the AHA dropped two-finger infant compressions** for one hand or two thumbs (Part A
   2.3); **ERC and RCUK now tell you to call for any unresponsive person before checking
   breathing**, because dispatchers recognise most arrests (Part A 2.2); ERC and RCUK withdrew the
   COVID modifications; ILCOR withdrew its 2020 "suggest against" suction anti-choking devices and
   now makes no recommendation either way. A course written from memory, or from the first search
   result, would teach the 2020 answers. **Quarantine every guideline-dependent instruction** in a
   lesson with the guideline and year beside it, so the 2030 update can be applied without
   rewriting the teaching.
2. **The core adult CPR numbers are settled and identical everywhere** (Part A 2.3): 100 to 120
   compressions a minute, 5 to 6 cm (2 to 2.4 in) deep, full recoil, minimal pauses, 30:2 for the
   trained and willing, continuous compressions otherwise, AED as soon as it arrives. **This is
   Established, and the course should say so plainly.** The differences are at the edges, and
   they are real.
3. **The US and UK/Europe differ in about thirty specific places** (the table below), almost all
   in children, choking technique detail, burns, shock position, anaphylaxis and aspirin dose.
   Neither side is wrong: most differences are weak recommendations on very low certainty
   evidence, resolved differently for teachability. **The course teaches both where they differ,
   says which country's advice the learner will be trained in, and never picks one silently.**
4. **The evidence behind most first aid is weak, and the guidelines say so.** ILCOR grades nearly
   every first aid recommendation "weak, very low certainty"; the AHA grades tourniquets COR 1 on
   observational data; all fracture advice in the AHA 2024 guideline is expert opinion (C-EO)
   because no first aid studies exist. That is a teaching opportunity, not an embarrassment:
   calibrated confidence is part of what the institute teaches (standards 2.4). **The single
   strongest finding for a lay rescuer is that doing something beats doing nothing**: bystander
   CPR is associated with two to three times the survival (Hasselqvist-Ax 2015, adjusted OR 2.15),
   harm to someone given CPR who was not in arrest is under 2%, and no one in the UK has
   successfully sued anyone who helped.
5. **Most cardiac arrests happen at home** (73.4% US, 70 to 80% UK), so the first rescuer is
   usually family, and at home the sex gap in bystander CPR disappears (Blewer 2018). The fears
   that stop people (liability, touching a stranger's chest, hurting them) bite hardest in public.
   Part D argues, and the Red Cross's own long course agrees, that the course should open with the
   bystander and the call, not with anatomy.
6. **The course is not a certificate and cannot be one.** Every body that certifies requires a
   hands-on skills check (AHA Heartsaver, Red Cross, HSE's "strongly recommends" direct
   observation). But a certificate is a workplace instrument: nobody needs one to help, and ILCOR
   2025 now suggests self-directed digital training is a reasonable route for lay people when a
   class is not available. The course says both things, early and once, and every CPR and choking
   lesson ends by pointing at a class and at a free practice tool (BHF RevivR, RCUK Lifesaver).

---

## What each part holds, and which lessons it serves

- **Part A, resuscitation.** AHA 2025 Adult BLS, Pediatric BLS, Special Circumstances and Systems
  of Care; ILCOR 2025 BLS CoSTR; ERC 2025 Adult BLS (third-party copy, see above); RCUK 2025 Adult
  BLS, Paediatric BLS, executive summary, epidemiology, first aid and special circumstances; RCUK
  CPR and the law; St John, BHF and American Red Cross CPR pages; CARES 2025; FDA and DHSC on
  naloxone; twenty study abstracts (compression-only trials, Kitamura 2010 on children, bystander
  CPR and survival, disparities, harms of CPR, TV CPR). Serves the recognition, CPR, breaths, AED,
  children and drowning, and recovery-position and overdose lessons.
- **Part B, choking, bleeding and injury.** AHA/ARC 2024 First Aid (full, Wayback); AHA 2025 FBAO
  sections; ILCOR 2025 First Aid CoSTR; RCUK 2025 First Aid and choking algorithms; RCUK's July
  2026 statement on suction devices; NHS, St John, British and American Red Cross pages on each
  injury; Stop the Bleed course slides and FAQ; ProtectUK PAcT kits; the British Burn Association
  first aid guideline; NICE NG232 on head injury; Dubois and Esculier 2020 (PEACE and LOVE);
  Richey 2007 on tourniquet history; tourniquet and choking study abstracts. Serves choking,
  bleeding and shock, burns and small injuries, and bones, head and spine.
- **Part C, medical emergencies.** AHA/ARC 2024 First Aid, the medical sections, with the
  recommendation tables transcribed from images; ILCOR 2025 First Aid; ERC 2025 First Aid
  (third-party copy) and RCUK 2025 First Aid; RCUK 2021 anaphylaxis; MHRA 2023 on auto-injectors;
  device leaflets (EpiPen 3 seconds, Jext 10 seconds); FDA on neffy; NHS, St John, BRC, BHF,
  Epilepsy Action, Epilepsy Foundation, CDC, Asthma + Lung UK, Diabetes UK, ADA pages; ASA on
  BE-FAST; Aroor 2017. Serves heart attack and stroke, anaphylaxis and asthma, seizures, diabetes
  and poisoning, and heat and cold.
- **Part D, the bystander, the law and resources.** The order the canonical courses teach in (Red
  Cross, AHA Heartsaver, HSE L74 syllabus, St John DR ABC); what the call-taker needs (911.gov,
  NHS, AML and what3words from two NHS ambulance trusts, 112 from the European Commission); The
  Circuit, PulsePoint, GoodSAM; the bystander literature (Fischer 2011, Philpot 2020, Manning 2007,
  the New York Times 2016); surveys of why people do not act; Good Samaritan law (California
  statute, the three US duty-to-assist states, the federal Cardiac Arrest Survival Act, RCUK's
  law booklet, the SARAH Act 2015, the French penal code as contrast); training and skill decay
  (ILCOR 2025 EIT, Riggs 2019, Bobrow 2011); workplace rules (OSHA 1910.151, HSE L74);
  resources and verified videos. Serves the first lesson, the last lesson, and every lesson's Go
  deeper section.

---

## Canonical textbooks

First aid has no university textbook in the sense Cooking or Logic does. Its canonical texts are
the **guidelines** (below) and the **course manuals** the certifying bodies publish from them. None
of the manuals was read beyond its contents, and the course is built from the guidelines, which is
what the manuals are built from too.

- **American Red Cross, *First Aid/CPR/AED Participant's Manual*, r.25 (2025)**. Store page read
  (Part D, D1): consistent with ILCOR 2025 and the 2025 AHA/Red Cross guidelines; topic order:
  recognising an emergency, emergency action steps, cardiac arrest, heart attack, CPR, chain of
  survival, AED, choking, sudden illness, other injuries, plus inhaler, auto-injector, splinting,
  tourniquet and naloxone. The 2016 edition's contents were read from the Internet Archive
  catalogue (D2): basics, then cardiac emergencies and choking, then illnesses and injuries. Best
  for: the US course's sequence. Not read beyond that.
- **American Red Cross, *Responding to Emergencies: Comprehensive First Aid/CPR/AED***, sample
  chapters and table of contents read in full (D3). The long course opens with "If Not You …
  Who?" (the bystander), then the emergency action steps, then disease transmission and the law,
  and only then the body. Best for: the evidence that the field puts the bystander and the law
  first.
- **AHA, *Heartsaver First Aid CPR AED Student Workbook***, 2011 contents from the Internet
  Archive catalogue (D7): first aid basics, medical, injury, environmental, then CPR and AED last.
  The 2025 edition exists; contents not seen.
- **St John Ambulance, St Andrew's First Aid and the British Red Cross, *First Aid Manual*, 11th
  edition (DK, 2021)**, the UK voluntary aid societies' manual that HSE L74 names as the standard.
  Catalogue record only; **on the unread line.** A pirated copy exists online and was not used.
  The St John and British Red Cross web pages, read in full, are its public face.

## University syllabi consulted

There are no university syllabi for lay first aid. The equivalents, which fix what a first course
covers and in what order, are the certifying bodies' course outlines and the UK's statutory
workplace syllabus:

- **HSE, *First aid at work*, L74, 3rd edition 2013, amended 2024** (D9, full, direct). Appendix 6
  gives the **Emergency First Aid at Work** content in order: the first aider's role, assessing the
  situation, the unconscious casualty (including seizure), CPR and AED, choking, wounds and
  bleeding, shock, minor injuries. Appendix 5 (**First Aid at Work**, three days) adds fractures and
  spinal injury, chest injuries, burns, eye injuries, poisoning, anaphylaxis, and recognising heart
  attack, stroke, epilepsy, asthma and diabetes. Appendix 7, the annual refresher, keeps only
  assessment, unconscious, CPR, bleeding and shock: the field's own statement of what matters
  most. Certificates last three years; practical skills "should be assessed by direct
  observation".
- **AHA Heartsaver First Aid CPR AED** (D6, Wayback): about 3 hours online plus 2 hours of skills,
  an "OSHA-compliant" completion card, and a hands-on session with an instructor required for the
  online route.
- **Stop the Bleed** (Part B S17): lay course v2.0 slides read in full; about 90 minutes; direct
  pressure, packing and tourniquet, taught as Alert, Bleeding, Compress.
- **The primary survey as each tradition teaches it** (Part D 1.4, 1.5): Check, Call, Care
  (American Red Cross), DR ABC (St John), Check, Call, CPR (ERC's Kids Save Lives). The same order
  in three sets of words.

## Primary sources

The guidelines are the primary sources. Each is described in its part with the sections read.

- **ILCOR 2025 CoSTRs**: BLS (Part A S6, full, manuscript PDF), First Aid (Part B S5, Part C S2,
  full, manuscript PDF), Education, Implementation and Teams (Part D D41, Wayback, recommendation
  sections). ILCOR does the systematic reviews; every national body builds on them. Its strength
  and certainty gradings are the honest statement of how much is known.
- **AHA 2025 Guidelines for CPR and ECC**: Part 7 Adult BLS, Part 6 Pediatric BLS (with the AAP),
  Part 10 Special Circumstances (partial), Part 4 Systems of Care (partial). Class of
  recommendation (COR 1, 2a, 2b, 3: No Benefit, 3: Harm) and level of evidence (A, B-R, B-NR, C-LD,
  C-EO) are given for every recommendation quoted.
- **2024 AHA and American Red Cross Guidelines for First Aid** (Circulation 2024;150:e519-e579).
  The current US first aid guideline; there is no 2025 first aid part (Part B 0). Prose read in
  full; recommendation tables are images (Part C's [V-img]).
- **RCUK 2025 Guidelines** (published 27 October 2025): Adult BLS, Paediatric BLS, First Aid,
  Special Circumstances, Epidemiology, executive summary. Read in full, direct. The citable
  UK and European source while the ERC chapters are unverified.
- **ERC 2025 Guidelines** (Resuscitation 215 Suppl 1): on the unread line pending a check against
  the publisher, as explained above. **ERC lay book 2025**: read in full, citable.
- **Statutes**: California Health and Safety Code 1799.102; 12 V.S.A. 519 (Vermont); Minn. Stat.
  604A.01; R.I. Gen. Laws 11-56-1; 42 U.S.C. 238q (Cardiac Arrest Survival Act); OSHA 29 CFR
  1910.151; Social Action, Responsibility and Heroism Act 2015. All read in full, direct (Part D 3).
- **Registries**: CARES 2025 national report (US, full, direct); RCUK's epidemiology chapter for
  UK OHCAO figures (the registry report itself not read).

## Expert bodies and official guidance

| Body | What it is | How to use it |
|---|---|---|
| ILCOR | International committee that runs the systematic reviews | The evidence grade behind every claim |
| American Heart Association | US guideline writer for CPR; co-author of the US first aid guideline | US numbers and COR/LOE |
| American Red Cross | Co-author of the 2024 first aid guideline; largest US trainer | US public wording; its web pages sometimes lag or differ (Part B) |
| European Resuscitation Council | European guideline writer | Through RCUK and the lay book until the chapters are verified |
| Resuscitation Council UK | UK adaptation of ERC; standard for HSE courses | UK numbers, choking and CPR algorithms, the law booklet |
| St John Ambulance, British Red Cross, St Andrew's | UK voluntary aid societies, authors of the First Aid Manual | UK public wording (pages reviewed April 2025, check against RCUK 2025) |
| NHS | Public health pages | UK public wording; some pages lag (nosebleed, cuts, child choking) |
| American College of Surgeons | Stop the Bleed | Bleeding control course and slides |
| British Burn Association | UK burns specialists | 20 minutes within 3 hours, the UK burns standard |
| MHRA | UK medicines regulator | Auto-injector advice (carry two, lie down, second dose at 5 minutes) |
| American Stroke Association | AHA division | BE-FAST as its public message since 2025/26 |
| HSE, OSHA | Workplace regulators | What certification is and is not |

---

## What the field considers essential

The ideas an expert would say a course on this must cover, in the order they build. The order is
the field's own (Part D 1, HSE Appendix 6 and 7, Red Cross *Responding to Emergencies*), adjusted
so that the skill that saves the most lives comes early.

1. **You are the first responder, and doing something is better than nothing.** Why people freeze
   (the bystander effect, real for individuals but weaker in dangerous emergencies, Fischer 2011),
   what actually happens in public (someone intervened in 90.9% of filmed conflicts, Philpot 2020),
   and what does not stop people once they know the facts: legal risk (3 US suits over giving CPR
   in thirty years, Murphy 2020; no reported successful UK claim, RCUK) and harm (under 2% injured
   among people given CPR who were not in arrest).
2. **Scene safety, then the call.** Danger first (St John: "Before approaching the casualty,
   always make sure the area is safe."). The emergency number (911; 999 or 112; 112 across the
   EU), speakerphone, what the call-taker needs (location first), and the dispatcher as a coach.
   ERC and RCUK 2025: call for any unresponsive person, then assess breathing while it connects.
3. **Recognising cardiac arrest.** Unresponsive and not breathing normally. Agonal gasping is a
   sign of arrest, not of life (present in 40 to 60%). A brief seizure-like episode can be the
   start of an arrest. Lay rescuers do not check a pulse. When in doubt, start.
4. **Chest compressions.** 100 to 120 a minute, 5 to 6 cm, full recoil, minimal pauses, heel of the
   hand on the lower half of the breastbone, arms straight, swap every two minutes. Why each
   number (depth for perfusion, the 6 cm cap for injury, recoil for refilling). Rib fractures in
   about 55% of real CPR are not a sign of failure.
5. **Breaths, and when they matter.** 30:2 for the trained and willing; compression-only for the
   untrained or unwilling; why breaths matter more in children, drowning and overdose (hypoxic
   arrests). The trial evidence (Hüpfl 2010 RR 1.22 for dispatcher-guided compression-only) and
   its limits (the trials predate the overdose era).
6. **The AED.** Anyone can use one; turn it on and follow the prompts; pads on bare skin; nobody
   touches during analysis and shock; restart compressions at once. Survival falls with every
   minute to the first shock (6% a minute in the AHA's data, 3 to 6% in ERC's). An AED will not
   shock a heart that does not need it. Where AEDs are (The Circuit, PulsePoint).
7. **Children and infants.** Breaths first in the UK and Europe (5 rescue breaths), compressions
   first in the US; one third of chest depth (about 5 cm child, 4 cm infant); infant technique
   (two thumbs in the UK; one hand or two thumbs in the US since 2025); AED with paediatric pads
   or mode, adult if that is all there is.
8. **The unresponsive person who is breathing.** The recovery position, who it is for (not agonal
   breathing, not trauma), how, and checking breathing continuously. Opioid overdose and naloxone.
9. **Choking.** Mild (coughing, let them cough) vs severe (cannot cough, speak or breathe). 5 back
   blows then 5 abdominal thrusts, repeated, for adults and children over one; chest thrusts for
   infants, late pregnancy and people too large to encircle; CPR if they become unresponsive; no
   blind finger sweeps; medical review after thrusts.
10. **Life-threatening bleeding.** Firm direct pressure; a manufactured tourniquet for limb bleeding
    pressure will not control, high and tight, not over a joint, never loosened by the bystander;
    packing for junctional wounds. Recognise shock.
11. **Burns.** Cool running water at once (20 minutes UK, 5 to 20 minutes US), within 3 hours;
    remove jewellery; cover with cling film laid on; no ice, butter or toothpaste; which burns go to
    hospital; chemical and electrical burns.
12. **Heart attack and stroke.** Recognition including the atypical presentations; call first;
    aspirin for suspected heart attack in an alert adult who is not allergic; no aspirin for
    suspected stroke; FAST (and BE-FAST in the US); note the time; do not wait for it to pass.
13. **Anaphylaxis and asthma.** Adrenaline auto-injector first, outer thigh; second dose at five
    minutes; lie down, do not stand; antihistamines are not the treatment. Asthma: sit up, reliever,
    the puff schedule, and the person's own plan.
14. **Seizures, low blood sugar, fainting and poisoning.** Protect, time, do not restrain, nothing
    in the mouth, side after; when to call. Fast sugar for a conscious hypoglycaemic person, nothing
    by mouth if not fully awake. Physical counter-pressure for fainting. Call a poison centre, do
    not induce vomiting.
15. **Injuries to bones, head and spine.** Support a fracture as found; cold and protection for
    sprains (and the RICE to PEACE and LOVE argument); head injury red flags (NICE NG232); no
    collars by first aiders, keep the person still, airway first.
16. **Heat and cold.** Heatstroke is cooled first (cold-water immersion is the gold standard), then
    transported; heat exhaustion recovers within 30 minutes; hypothermia is handled gently and
    rewarmed without rubbing; frostbite is not rubbed and not thawed if it may refreeze.
17. **Keeping the skill.** Skills decay within three months (Riggs 2019); practise with feedback;
    where to train; what a certificate is for.

## Common misconceptions

Each is sourced in the part named. The course should name and correct every one of them somewhere.

| Misconception | Correction | Where |
|---|---|---|
| CPR usually works, as on television | TV shows 67 to 75% survival; real survival to discharge is 10.5% (US CARES 2025), 9.5% at 30 days (England) | A 6 |
| Gasping means they are breathing | Agonal gasping is a sign of cardiac arrest | A 2.1 |
| Check for a pulse first | Lay rescuers should not; accuracy is 47 to 73% | A 2.1 |
| Breaking ribs means you did it wrong | Rib fractures occur in about 55% of CPR | A 2.8 |
| An AED can restart a flat line | AEDs treat VF and pulseless VT; they will not shock asystole or a normal rhythm | A 6 |
| You need training to use an AED | Anyone can; signage should say so | A 2.5 |
| You will be sued | 3 US suits over giving CPR in 30 years; no successful UK claim | D 3 |
| Someone else will help; 38 people watched Kitty Genovese die | The 38-witness story was false (NYT 2016); in real public conflicts someone helps 9 times in 10, but do not assume | D 2 |
| You need a certificate to help | Certificates are for employers | D 5 |
| Hands-only is the recommended way since COVID | COVID modifications withdrawn in 2025 (ERC/RCUK); trained rescuers give breaths | A 2.12 |
| Blow hard | Just enough to make the chest rise, about one second | A 6 |
| Tilt the head back for a nosebleed | Lean forward and pinch the soft part 10 to 15 minutes | B 3.8 |
| Butter, toothpaste or ice on a burn | Cool running water; greases hold heat; ice damages skin | B 4.5 |
| Pressure points stop bleeding | ILCOR strongly against; pulses return within 20 to 40 seconds | B 3.3 |
| Loosen a tourniquet now and then | Never, for a bystander; clinicians remove it | B 3.4 |
| Tourniquets cost the limb | No amputations solely from tourniquets in the combat series; no increase in the civilian review | B 3.4 |
| Hold a choking baby upside down | Not effective | B 2.6 |
| Finger-sweep the throat | Harmful (AHA COR 3: Harm) | B 2.5 |
| If they can move it, it is not broken | Only an X-ray rules it out | B 6.1 |
| Never move someone with a neck injury, whatever happens | Move for danger, the airway or CPR | B 8 |
| Store a knocked-out tooth in water | Harmful; milk, saliva, cling film or saline solution | B 9.2 |
| A seizing person can swallow their tongue | They cannot | C 6 |
| Hold them down; put something in their mouth | Both harmful | C 6 |
| Make someone sick after a poisoning | Do not; ipecac is abandoned | C 9 |
| Give a sugary drink to anyone who collapses | Never anything by mouth if not fully awake | C 7 |
| Antihistamine first, EpiPen if it gets worse | Adrenaline first, even if in doubt | C 4 |
| Stand up and walk it off after adrenaline | Lie down; standing has preceded deaths | C 4 |
| It is just indigestion | An indigestion feeling is a listed heart attack symptom | C 3 |
| Wait and see if the stroke passes | Call even if symptoms go away | C 2 |
| Alcohol warms you; rub frostbite | Both harmful | C 11 |
| Suck out snake venom | Harmful | B 14, C 12 |

---

## Contested questions and the positions on each

Classification follows standards 3.1. Most first aid questions are **contested empirical**: the
evidence is thin, and the bodies weigh it differently, often for teachability rather than for any
difference in the data. A few are **value** questions. Each part gives the full case; the summary
here is for the outline.

1. **Should lay rescuers give breaths to adults?** (Contested empirical; Part A 5A, Part D 3.)
   *Compression-only:* the dispatcher-instruction RCTs (Rea 2010, Svensson 2010) and their
   meta-analysis (Hüpfl 2010, RR 1.22, NNT 41) favour or equal compression-only; more people act
   when the message is simple (Japan: bystander CPR 34.6% to 47.3% as compression-only spread);
   mouth-to-mouth is a barrier. *Breaths:* oxygen runs out; asphyxial and overdose arrests (1 in 6
   to 1 in 3 US arrests, AHA) need ventilation; recent observational data favour breaths; the RCTs
   predate the overdose era. *Where it stands:* ILCOR, AHA, ERC all say compressions for everyone,
   breaths for the trained, able and willing (weak, very low certainty). Both beat nothing
   (Established).
2. **Five rescue breaths first for children (UK/Europe) or compressions first (US)?** (Contested
   empirical with a value element; A 5C.) ERC: paediatric arrest is usually hypoxic, so oxygen
   first. AHA: compressions first delays breaths by only about 6 seconds and one sequence for all
   ages is easier to teach. Both admit the evidence is minimal. Kitamura 2010 settles that breaths
   matter for non-cardiac child arrests, not the order.
3. **Drowning: breaths or compressions first?** (Contested empirical; A 5D.) ILCOR 2025 now says
   compressions first for lay people and breaths first for trained, duty-to-respond rescuers; UK
   lay material still leads with 5 breaths for anyone trained. No comparative human evidence.
4. **Back blows or abdominal thrusts first for a choking adult?** (Contested empirical, now
   largely resolved; B 13.1.) For back blows: the only large cohort (Dunne 2024, 709 cases)
   associates them with more relief and fewer injuries; thrusts have caused aortic dissection and
   gastric rupture; one sequence for all ages. For thrusts first (the older AHA teaching): higher
   airway pressure. The AHA moved to back blows first in 2025, candidly citing consistency as a
   reason.
5. **Suction anti-choking devices (LifeVac, Dechoker).** (Contested empirical; B 2.7.) For:
   registry and manikin data show high relief rates. Against: the data are self-reported,
   industry-assisted or simulated; fetching a device could delay proven manoeuvres. ILCOR, AHA
   (2b) and RCUK (July 2026) make no recommendation either way; standard techniques come first.
6. **Tourniquets for lay people, and improvised ones.** (Established for manufactured tourniquets
   in life-threatening limb bleeding, on observational evidence; contested for improvised; B 3.4,
   13.3, 13.4.) The history matters: a century of "tourniquet as last resort" from misuse in the
   Civil War and world wars (Richey 2007), reversed by Iraq and Afghanistan (Kragh 2009: 90% vs
   10% survival when applied before shock) and civilian cohorts (Teixeira 2018, adjusted OR 5.86).
   ILCOR still grades its recommendation weak, very low certainty.
7. **Passive leg raising for shock.** (Contested empirical; B 5, 13.6.) AHA: only without trauma,
   2b, effects temporary; St John and the British Red Cross still raise the legs, including for
   bleeding.
8. **Burn cooling time.** (Contested empirical on duration; Established that cooling helps; B 4.1.)
   UK: 20 minutes within 3 hours (NHS, BBA, St John, BRC). US: 5 to 20 minutes (AHA/ARC 2024,
   American Red Cross since 2026). ILCOR: no duration can be recommended; watch small children
   for over-cooling.
9. **Ice and anti-inflammatories for sprains (RICE vs PEACE and LOVE).** (Contested empirical;
   B 6.2.) Cold reduces pain but has not been shown to speed recovery; PEACE and LOVE (an editorial,
   not a guideline) argues against ice and NSAIDs in the first days; the NHS recommends ibuprofen.
10. **Cervical collars.** (Established that lay first aiders should not use them; B 8.) AHA COR 3:
    Harm; ILCOR weak against; the reversal of immobilise-everyone is itself a good lesson in how
    practice follows evidence late.
11. **Aspirin by bystanders for chest pain.** (Contested empirical on strength and dose; value on
    the bystander's role; C 3.) Every body endorses encouraging an alert, non-allergic adult with
    cardiac-sounding chest pain to chew aspirin, but the US grades it 2b ("may encourage", and wait
    if uncertain), the dose is 162 to 325 mg (US), 150 to 500 mg (ERC 2025) or 300 mg (UK), and no
    study has measured the risk in the first aid setting (aortic dissection, bleeding). All frame it
    as assisting self-administration, never as the bystander dosing someone.
12. **FAST or BE-FAST.** (Contested empirical; C 2.) BE-FAST catches posterior strokes FAST misses
    (14.1% missed vs 4.4% in Aroor 2017, retrospective, one centre); FAST is better remembered in
    the ASA's own 2025 randomised online study (unpublished). The AHA/ARC 2024 guideline names
    FAST; the American Stroke Association's public message switched to BE-FAST in 2025/26; the UK
    uses FAST; ILCOR and ERC find no evidence to prefer either.
13. **Anaphylaxis: second-dose timing and posture.** (Contested in weight, not direction; C 4.)
    UK/Europe: second dose at 5 minutes, lie flat; US: second dose if no response and EMS more than
    5 to 10 minutes away, no posture recommendation. The posture advice rests on fatal case series.
14. **Oxygen by first aiders.** (Contested empirical; C 14.) ERC/RCUK: trained first aiders may
    titrate oxygen. AHA/ARC: usefulness unknown, harmful above 92% in COPD, no benefit in stroke.
    Outside this course's scope for practice; mentioned only so a learner knows why guidance
    differs.
15. **Seizure: on the side during or after the convulsions?** (Contested in detail; C 6.) US
    bodies turn during; UK after. Both aim at the airway without restraint.
16. **Cooling for classic heatstroke in older people.** (Contested empirical; C 10.) Immersion is
    the gold standard for exertional heatstroke; ILCOR makes no recommendation for classic
    heatstroke; UK lay pages teach wet sheets and fanning.
17. **Should the law impose a duty to rescue?** (Value; D contested 1.) Vermont, Minnesota, Rhode
    Island and France impose a minimal duty, satisfied by calling for help; the common-law tradition
    (England, most US states) imposes none. Describe, do not prescribe.
18. **Is online-only training enough?** (Contested empirical; D contested 2.) ILCOR 2025 suggests
    self-directed digital training is comparable for lay skill acquisition (weak, very low
    certainty); HSE insists on in-person assessment; skills decay either way.
19. **Should lay people be taught mouth-to-mouth at all?** (Contested empirical with a value
    element; D contested 3.) The British Red Cross teaches the public hands-only; St John, RCUK and
    AHA teach breaths to the trained.
20. **AED on infants.** (Largely settled; A 5E.) Use the best device available; adult if nothing
    else. The bodies differ only on wording and the 8-year or 25 kg threshold.

## US vs UK/Europe differences

Where the major guidelines, and the public pages built on them, give different instructions. Every
row is sourced in the part named. "US" means AHA 2025 or AHA/ARC 2024 unless stated; "UK/Europe"
means RCUK 2025 (adapting ERC 2025) unless stated.

| Topic | US | UK / Europe | Part |
|---|---|---|---|
| Emergency number | 911 | 999 or 112 (UK); 112 across the EU | D 1.5 |
| When to call | Recognise arrest, then call and start CPR (speakerphone) | Call for any unresponsive person, then check breathing while it connects | A 2.2 |
| First-step slogan | Check, Call, Care (Red Cross) | DR ABC (St John); Check, Call, CPR (ERC) | D 1 |
| Child CPR sequence | Compressions first | 5 rescue breaths first | A 2.4 |
| Child ratio, lay | 30:2 one rescuer, 15:2 two | 15:2 if trained in paediatric BLS, else 30:2 (after 5 breaths) | A 2.4 |
| Infant compressions | One hand or two thumbs; two fingers removed (2025) | Two-thumb encircling | A 2.3 |
| Paediatric age boundary | Until puberty | 0 to 18; "when in doubt, use adult" | A 2.4 |
| AED on small children | Attenuator under 8 years; adult AED may be considered (2b) | Paediatric mode under 25 kg; adult mode if none; front-back pads | A 2.5 |
| Casualty on a bed | Firm surface if it does not delay CPR | Do not move to the floor; push deeper (St John page still says move) | A 2.3 |
| Drowning, lay | Breaths and compressions; trained may start with breaths (2b) | Trained: 5 breaths first (RCUK first aid, BHF); ILCOR 2025: lay compressions first | A 2.9 |
| Naloxone access | OTC 4 mg nasal spray since 2023 | Prescription-only; supplied without prescription by named services (2015, nasal 2019, widened 2024) | A 2.11 |
| Naloxone wording | CPR first; naloxone must not delay it | ERC: start CPR and give nasal naloxone; RCUK: "if you are trained" | A 2.11 |
| Outcome figures | CARES survival to discharge 10.5% (2025) | England 30-day survival 9.5%; definitions differ | A 3 |
| AED registry | PulsePoint (app, community by community) | The Circuit (national, visible to 999 handlers) | D 1.5 |
| Caller location | Street address | AML sent automatically; what3words as fallback | D 1.5 |
| Adult choking | 5 back blows, 5 abdominal thrusts, repeat (new 2025) | "Up to" 5 and "up to" 5, repeat | B 2.2 |
| Infant chest thrusts | Heel of one hand (AHA 2025); ARC web page still two fingers | Two-thumb encircling (RCUK 2025); NHS and BRC pages still two fingers | B 2.6 |
| Unconscious choking child | CPR starting with compressions | CPR starting with 5 rescue breaths | B 2.5 |
| Medical check after thrusts | Not a numbered AHA recommendation | Explicit | B 2.2 |
| Tourniquet placement | 2 to 3 inches above (Stop the Bleed) | 5 to 7 cm above (RCUK) | B 3.4 |
| Tourniquet, who | Guideline has no training condition; ARC page says "(if trained)" | Anyone, as soon as pressure fails; PAcT kits for untrained use | B 3.4 |
| Pressure points | "Uncertain" (2b) | ILCOR: strongly against | B 3.3 |
| Elevating a bleeding limb | Not in guideline | Not in RCUK; still on the NHS cuts page | B 3.3 |
| Burn cooling | 5 to 20 minutes | 20 minutes, within 3 hours | B 4.1 |
| Ice on burns | Wrapped ice for superficial burns if no water (2b) | No ice | B 4.1 |
| Burn covering | Clean dry non-adherent dressing | Cling film laid on, not wrapped | B 4.2 |
| Chemical burn irrigation | At least 15 minutes | At least 20 minutes (BBA); about 1 hour (NHS) | B 4.4 |
| Shock position | Legs up 6 to 12 in only if no trauma (2b) | Legs up (St John, BRC), except suspected leg, hip or pelvic fracture | B 5 |
| Cold on a sprain | 20 to 30 minutes per application (AHA); 20 max (ARC) | 20 max (NHS, SJA); 10 max (BRC) | B 6.2 |
| Nosebleed | Pinch 10 to 15 minutes; help after 15 | 10 to 15 (NHS); 3 × 10, 999 after 30 (SJA) | B 3.8 |
| Head injury painkillers | Not advised (ARC page) | Paracetamol at home after a minor injury (NHS) | B 7 |
| Tooth storage | Salt solution, ORS, cling film ranked above milk | Milk or saliva | B 9.2 |
| Stroke mnemonic | FAST in the guideline; BE-FAST in the ASA's public message since 2025/26 | FAST | C 2 |
| Aspirin dose | 162 to 325 mg, COR 2b | 300 mg (UK); 150 to 500 mg (ERC 2025) | C 3 |
| Second adrenaline dose | If no response and EMS more than 5 to 10 min away (2b) | At 5 minutes if no improvement, other thigh | C 4 |
| Anaphylaxis posture | Not addressed | Lie flat, legs raised; sit only for breathing; never stand | C 4 |
| Nasal adrenaline | neffy (FDA 2024) | EURneffy (MHRA 2025) | C 4 |
| Asthma reliever | "As needed", spacer preferred | 1 puff every 30 to 60 s up to 10 (blue); AIR/MART 1 every 1 to 3 min up to 6 | C 5 |
| Seizure, side position | During the seizure | After convulsions stop | C 6 |
| Hypoglycaemia threshold | Below 70 mg/dL; 15-15 rule | Below 4 mmol/L; 15 to 20 g | C 7 |
| Oxygen | Usefulness unknown | Trained first aiders may titrate | C 14 |
| Heatstroke, public pages | Cold water or ice bath if possible (CDC/NIOSH) | Wet sheet and fanning (NHS, SJA); immersion in RCUK 2025 | C 10 |
| Snakebite | No pressure immobilisation (pit vipers) | Adder: immobilise, no pressure dressing; Australia differs | C 12 |
| Crisis line | 988 | Samaritans 116 123 | C 13 |
| Good Samaritan law | State statutes; federal AED immunity; 3 duty-to-assist states | No statute; no duty to rescue; SARAH 2015 (England and Wales); France: criminal duty to assist | D 3 |
| Workplace training | OSHA "adequately trained"; Red Cross card 2 years | HSE EFAW 1 day, FAW 3 days, certificate 3 years | D 5 |

---

## Best existing free resources (to link, not duplicate)

All YouTube URLs below were verified by oEmbed on 2026-09-24 (title and channel). **None was
watched.** Before a lesson embeds one, someone must watch it and confirm it matches 2025 guidance;
the infant videos in particular may show the two-finger technique the AHA removed in 2025.

**Practice tools (the course should point at these in every CPR lesson)**
- BHF **RevivR**, https://www.bhf.org.uk/revivr : free 15-minute course that uses a cushion and the
  phone camera for feedback on compressions (D, R6).
- RCUK **Lifesaver**, https://www.resus.org.uk/public-resource/how-we-save-lives/lifesaver-learning/lifesaver :
  interactive film with four scenarios (D, R7).
- ACS **Stop the Bleed** interactive course, https://www.stopthebleed.org/training/online-course/
  (D, R14); in-person skills sessions through stopthebleed.org.
- British Red Cross and American Red Cross **First Aid apps** (D, R10, R11).

**Videos by lesson** (full lists in each part)
- CPR, adult: AHA "How to save a life: Hands-Only CPR", https://www.youtube.com/watch?v=QOWB1hYAjZc ;
  AHA "Learn Hands-Only CPR", https://www.youtube.com/watch?v=EluCCYOdkVw ; American Red Cross
  "How to Perform Hands-Only CPR", https://www.youtube.com/watch?v=6eRwgM2Pa4o ; RCUK "Become
  ResusReady", https://www.youtube.com/watch?v=fC3cRr8xVpo .
- AED: RCUK "Defib Dani", https://www.youtube.com/watch?v=7aX1EwkC1yY ; American Red Cross "How to
  Use an AED on an Adult", https://www.youtube.com/watch?v=in8j2Q2z3HE .
- Children: RCUK child CPR, https://www.youtube.com/watch?v=I3pHjgiaYew ; RCUK baby CPR,
  https://www.youtube.com/watch?v=oKE9IG7LERg (both August 2026, post-2025 guidance).
- Recovery position: St John Ambulance, https://www.youtube.com/watch?v=GmqXqwSV3bo (2016; check).
- Naloxone: CDC, https://www.youtube.com/shorts/KX4jv_p8Cyc (US product).
- Choking: St John "First Aid Training: Choking", https://www.youtube.com/watch?v=HGBBu4zr8sM ;
  American Red Cross adult choking, https://www.youtube.com/watch?v=8R3RWC-xx1I ; infant videos in
  Part B 10 need checking for technique.
- Bleeding: ACS "How To STOP THE BLEED", https://www.youtube.com/watch?v=7LEqWoK_aS0 ; British Red
  Cross heavy bleeding, https://www.youtube.com/watch?v=L6jjyikFwmA .
- Burns: British Red Cross, https://www.youtube.com/watch?v=dQozahCH8IE .
- Stroke: NHS Act FAST, https://www.youtube.com/watch?v=2p0rUIKkX50 ; AHA "B.E. F.A.S.T. to spot a
  stroke", https://www.youtube.com/watch?v=C8EO3SM0Y_w .
- Heart attack: American Red Cross, https://www.youtube.com/watch?v=Z5QJ7tz2OTc ; BHF,
  https://www.youtube.com/watch?v=bw_Vv2WRG-A .
- Anaphylaxis: MHRA auto-injector campaign, https://www.youtube.com/watch?v=K4GRcY3QIl8 ; British
  Red Cross, https://www.youtube.com/watch?v=zRSxAL-twdc .
- Asthma: Asthma + Lung UK, https://www.youtube.com/watch?v=pt53nH_dX1Y .
- Seizures: Epilepsy Action CARE, https://www.youtube.com/watch?v=MgpkYo1jNWw ; Epilepsy Foundation
  Stay Safe Side, https://www.youtube.com/watch?v=XyDHG02phs0 .
- Heat, cold, diabetes, poisoning, fainting: St John Ambulance series (Part C 16); the heatstroke
  one teaches wet sheets, not immersion.

**Rejected uploads** (re-uploads by unofficial channels, or unverifiable) are listed in Parts A, B
and C so nobody links them by accident.

**Where to find a hands-on class** (D 5): US, American Red Cross (redcross.org/take-a-class) and
AHA Find a Course (cpr.heart.org); UK, British Red Cross free workshops (which say plainly they give
no qualification) and St John Ambulance; Europe, national resuscitation councils and World Restart a
Heart (16 October).

## Safety-critical guidance

What a competent instructor would never leave out, and so what every relevant lesson must carry.

- **Your safety first.** Check for danger before approaching (traffic, electricity, fire, water,
  violence). Do not enter water unless trained; reach or throw. Turn off power before touching
  someone in contact with electricity.
- **Call early.** Speakerphone. The dispatcher will coach you. Do not hang up until told.
- **If in doubt, start CPR.** Harm to someone not in arrest is rare; failing to act when needed is
  the worst outcome.
- **Never put anything in the mouth** of a seizing, unresponsive or not-fully-awake person: no
  fingers, no food, no drink, no sugar.
- **Never finger-sweep blindly** for a choking object.
- **Never loosen a tourniquet** once on; note the time.
- **Adrenaline first** in anaphylaxis, even if in doubt; lie down; call.
- **No aspirin for suspected stroke**, no aspirin for under-16s (UK St John), none for anyone
  allergic.
- **Do not induce vomiting** after a poisoning; call a poison centre (US 1-800-222-1222) or 111/999.
- **Heatstroke is cooled before transport** where that can be done; nothing by mouth if confused.
- **The course is education, not certification and not personal medical advice.** Say once per
  course (standards 2.5), and point to a hands-on class in every lesson that teaches a physical
  skill.
- **The law sections are general information, not legal advice**, and vary by state and country
  (Part D 3).
- **Emotional aftermath.** ERC and RCUK 2025 note rescuers may need support after a resuscitation;
  the course should say so without dwelling on it.

## Open concerns about scope

1. **Size.** The field's own content (HSE FAW three days, Red Cross *Responding to Emergencies*
   six parts) is more than a Foundation course can hold at the institute's depth. The outline has
   to choose. The suggested sequence below keeps everything the HSE annual refresher treats as
   core (assessment, unconscious casualty, CPR, bleeding, shock) and treats environmental and
   minor injuries more briefly. Fifteen lessons is the honest estimate; twelve is possible only by
   merging lessons that would each run well past an hour.
2. **Two countries' instructions double some lessons.** Children's CPR, choking, burns and
   anaphylaxis each carry a real US/UK difference. Teaching both costs words but is the promise the
   course description makes ("where they differ"). The drafter should use a two-column table or a
   short "In the US / In the UK" pair rather than interleaving the two through the prose.
3. **The guidance is moving.** The ERC chapters have errata dated three days before this research;
   the American Red Cross burns page changed during 2026; the ASA changed its stroke mnemonic
   during 2025/26; the UK asthma advice split for AIR/MART inhalers in 2024. Every lesson should
   date its guideline claims, and `docs/QUEUE.md` should carry a standing item to re-check the
   course when ILCOR publishes its next CoSTR.
4. **Access.** The AHA and ERC publisher sites block scripts. Before publishing, someone with a
   browser should (a) check the two suspect AHA web boxes against the Circulation PDF, (b) check
   every ERC quote against the publisher and clear the unread entries, and (c) re-read the [V-img]
   table transcriptions. None of this needs John; it needs a browser.
5. **Images.** A course on physical skills needs pictures (hand position, recovery position, back
   blows, tourniquet placement, AED pads). Standards 4.5 forbid AI imagery and require real,
   licensed images. The guidelines' own figures are copyrighted. Wikimedia Commons has CC-licensed
   first aid photographs and diagrams; the outline stage should search it per lesson and, where it
   has nothing good, embed the verified official videos instead of drawing something.
6. **The outcomes promise more than a web course can deliver.** course.yaml says a learner will
   "give hands-only and full CPR at the recommended rate and depth" and "clear choking". A reader
   can learn the numbers and the sequence, and rehearse compressions on a cushion (RevivR's
   method), but cannot be shown to meet the depth without a manikin. The outline should word the
   objectives honestly (state, sequence, rehearse, decide) and leave competence to the class the
   course points to. The course description already says so.
7. **Sensitive topics inside the course.** Suicidal thoughts (ERC 2025 added it to first aid),
   opioid overdose, and resuscitation decisions (DNACPR, which the RCUK law booklet says a
   bystander should respect if it becomes known) all touch Mental Fitness, Habits and Addiction
   and medical ethics. Keep each to what a bystander does and point onward.
8. **"Aligned to Red Cross / AHA guidance"** in the TAXONOMY note undersells the course
   description, which also names ERC, RCUK and ILCOR. Left as is; worth widening when the course
   publishes.

## Suggested lesson sequence (for Stage 2 to confirm)

Fifteen lessons, ordered by the field's own sequence (bystander, call, unconscious casualty, CPR,
choking, bleeding, then injuries and illness) and by lives saved.

1. **The first minutes.** Why people freeze and what the evidence says about bystanders (Fischer
   2011, Philpot 2020, the Genovese correction); your safety first; the call (numbers, location,
   speakerphone, the dispatcher as coach); consent; the law in the US and UK, labelled as not
   legal advice. (Parts D 1 to 3.)
2. **Recognising cardiac arrest and pushing on the chest.** Unresponsive and not breathing
   normally; agonal gasping; the athlete who pants; no pulse check; hands-only CPR with every
   number and the reason for it; switching; when to stop. (A 2.1 to 2.3, 2.6, 2.8.)
3. **Breaths, and what CPR can and cannot do.** 30:2 and how to give a breath; the compression-only
   evidence and its limits; survival figures, TV myths, rib fractures, disparities. (A 2.4, 3, 5, 6.)
4. **The defibrillator and the chain of survival.** How an AED works and why minutes matter; pads,
   bras and modesty; where AEDs are (The Circuit, PulsePoint); volunteer apps. (A 2.5, D 1.5.)
5. **Children, babies and drowning.** The US/UK difference in sequence and ratio; infant technique;
   paediatric pads; drowning as a hypoxic arrest. (A 2.3 to 2.5, 2.9.)
6. **Breathing but not awake.** The recovery position; opioid overdose and naloxone; fainting and
   counter-pressure; pregnancy. (A 2.7, 2.10, 2.11; C 8.)
7. **Choking.** Mild and severe; 5 and 5; infants; pregnancy and large bodies; self-rescue; when
   they go unresponsive; suction devices. (B 2.)
8. **Severe bleeding and shock.** Pressure, tourniquets, packing, haemostatic dressings; the
   tourniquet history; shock and the leg-raise disagreement; embedded objects. (B 3, 5.)
9. **Burns and small injuries.** Cooling (the 20-minute and 5-to-20-minute rules), covering, when to
   go to hospital, chemical and electrical burns; nosebleeds; eye injuries; knocked-out teeth;
   amputated parts. (B 4, 3.8, 9.)
10. **Bones, joints, head and spine.** Fractures as found; RICE to PEACE and LOVE; head injury red
    flags (NICE NG232); spinal injury without collars. (B 6 to 8.)
11. **Heart attack and stroke.** Recognition, atypical symptoms, call first; aspirin (the dose
    table, the 2b grade, the stroke exception); FAST and BE-FAST. (C 2, 3.)
12. **Anaphylaxis and asthma.** Adrenaline first, two devices, 5 minutes, lie down; device
    differences; nasal adrenaline; asthma puffs and plans. (C 4, 5.)
13. **Seizures, low blood sugar and poisoning.** Protect, time, side; when to call; the 15 to 20 g
    rule; poison centres and not inducing vomiting; carbon monoxide. (C 6, 7, 9.)
14. **Heat, cold, bites and stings.** Heat exhaustion vs heatstroke and cold-water immersion;
    hypothermia and frostbite; bee stings and snakebite. (C 10 to 12.)
15. **Staying ready.** Skill decay and practice with feedback; what a certificate is and where to
    get one; mental-health first aid and suicidal thoughts (ERC 2025), pointing to Mental Fitness;
    how the guidelines are made and changed, and how to read a new one. (D 4, 5; C 13.)

A course-end test and a project (for example, a household emergency card and a timed walk-through
of a simulated call and five minutes of cushion compressions using RevivR's feedback) belong in the
outline.

---


## First Aid and CPR, Stage 1 research, Part A: Resuscitation (adult, child and infant basic life support for lay rescuers)

Stage 1 research notes for "First Aid and CPR". Researcher: Part A. Read date for every source: 2026-09-24.

Quote marks: [V] = copied from text I extracted myself (curl + HTML strip, or pdftotext). [T] = returned by WebFetch (none used in the end; every WebFetch attempt in this area was blocked with 403 or a TLS error). Nothing below is quoted from a search snippet.

### 0. Access problems, stated up front

- **AHA (ahajournals.org and cpr.heart.org) blocks automated access** (Cloudflare challenge and "Sorry, you have been blocked"). The AHA 2025 guideline parts were read from Internet Archive captures of the cpr.heart.org guideline pages (snapshot IDs given per source). These pages reproduce the Circulation text and the COR/LOE tables. Two places on those web pages show what look like **copy errors in the web version** (a recommendation box that repeats text from another section): see S3 (in-water breaths box) and S4 (telecommunicator recognition box). A fact-checker should confirm those two boxes against the Circulation PDF in a browser.
- **ERC chapters on resuscitationjournal.com and sciencedirect.com return 403 / JavaScript challenges**, and none of the key 2025 ERC chapters is in the Wayback Machine. I read the **publisher PDFs (Elsevier typeset, "R E S U S C I T A T I O N 215 (2025)")** of ERC Adult BLS, ERC Special Circumstances and ERC First Aid from a third-party host (sofia.medicalistes.fr). PubMed lists these chapters as "© 2025 European Resuscitation Council. Published by Elsevier B.V. All rights reserved", i.e. they are free to read on the publisher site but not openly licensed. I have not reproduced them beyond short quotes. **John should know this is how they were read; a fact-checker should confirm each quote against the publisher page in an ordinary browser.** The ERC Paediatric Life Support 2025 chapter was not obtainable in PDF; I relied on the RCUK 2025 Paediatric BLS guideline (an official adaptation that quotes the ERC chapter) and on ERC's own layperson book.
- The AHA "Highlights of the 2025 Guidelines" PDF: 403 by curl and WebFetch; the Wayback capture of the highlights page returns "Page Not Found". **Not read.**
- The Red Cross Scientific Advisory Council guideline database (guidelines.redcross.org): TLS handshake failure. **Not read.**
- The old NHS CPR URL (nhs.uk/tests-and-treatments/first-aid/cpr/ and nhs.uk/conditions/first-aid/cpr/) now **301-redirects to St John Ambulance** (sja.org.uk/first-aid-advice/cpr/). There is no longer an NHS-authored CPR page at that address. I read the St John page instead.

### 1. Sources

Claim classes used below: **E** = Established, **CE** = Contested empirical, **V** = Value.

**S1.** Kleinman ME, Buick JE, Huber N, et al., Drennan IR. Part 7: Adult Basic Life Support: 2025 American Heart Association Guidelines for CPR and ECC. *Circulation* 2025;152(suppl 2):S448–S478. doi:10.1161/CIR.0000000000001369. URL read: Wayback 20251026225858 of https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support . READ LEVEL: Wayback (20251026225858), full, direct.

**S2.** Joyner BL, Dewan M, Bavare A, et al., Raymond TT. Part 6: Pediatric Basic Life Support: 2025 AHA and American Academy of Pediatrics Guidelines. *Circulation* 2025;152(suppl 2):S424–S447. doi:10.1161/CIR.0000000000001370 (copublished in *Pediatrics*). URL: Wayback 20251026203140 of cpr.heart.org/.../pediatric-basic-life-support . READ LEVEL: Wayback (20251026203140), full, direct.

**S3.** Cao D, Arens AM, Chow SL, et al., McBride ME. Part 10: Adult and Pediatric Special Circumstances of Resuscitation: 2025 AHA Guidelines. *Circulation* 2025;152(suppl 2):S578–S672. doi:10.1161/CIR.0000000000001380. URL: Wayback 20251027153841 of cpr.heart.org/.../adult-and-pediatric-special-circumstances-of-resuscitation . READ LEVEL: Wayback (20251027153841), partial (Top 10, Cough CPR, Drowning 11.1 to 11.7, High-consequence respiratory pathogens, Pregnancy 19.3, Opioid overdose 21.11). Note: on this web page the "In-Water Breaths" recommendation box (11.2) contains text about "artifact-filtering algorithms" that clearly belongs elsewhere; the supportive text below it is about in-water breaths. Treat the 11.2 COR/LOE as unverified.

**S4.** Dezfulian C, Cabañas JG, Buckley JR, et al., Girotra S. Part 4: Systems of Care: 2025 AHA Guidelines. *Circulation* 2025;152(suppl 2):S353–384. doi:10.1161/CIR.0000000000001378. URL: Wayback 20260208194135 of cpr.heart.org/.../systems-of-care . READ LEVEL: Wayback (20260208194135), partial (Top 10, Public Access Naloxone, Community Initiatives, Telecommunicator Recognition, T-CPR Instructions). Note: the "Telecommunicator Recognition" recommendation 1 on the web page repeats the naloxone liability text word for word; probably a web copy error.

**S5.** AHA Part 8: First Aid (2020 AHA and American Red Cross Focused Update/Guidelines for First Aid), cpr.heart.org first-aid page. Wayback 20201124213749. READ LEVEL: Wayback, partial (Positioning the ill or injured only). Used only for the AHA's last position I could read on the recovery position. The **2024 AHA/Red Cross First Aid guideline (Circulation 2024, PMID 39540278) was not read.**

**S6.** Bray JE, Smyth MA, Perkins GD, et al.; ILCOR BLS Task Force. Basic Life Support: 2025 ILCOR Consensus on Science With Treatment Recommendations. *Circulation* 2025;152(16_suppl_1):S34–S71 (and *Resuscitation*). URL: https://ilcor.org/uploads/BLS-2025-COSTR-Full-Chapter.pdf (120-page manuscript version, "© 2025 American Heart Association, Inc., European Resuscitation Council, and International Liaison Committee on Resuscitation"). READ LEVEL: full, direct (pdftotext); I read every "Treatment Recommendations" statement and the compression-only section closely, the rest skimmed.

**S7.** Smyth MA, van Goor S, Hansen CM, et al., Perkins GD. European Resuscitation Council Guidelines 2025 Adult Basic Life Support. *Resuscitation* 2025;215 Suppl 1:110771. doi:10.1016/j.resuscitation.2025.110771. Publisher PDF via https://sofia.medicalistes.fr/spip/IMG/pdf/european_resuscitation_council_guidelines_2025_adult_basic_life_support.pdf . READ LEVEL: full, direct (publisher PDF, third-party host; see section 0).

**S8.** Lott C, Karageorgos V, Abelairas-Gomez C, et al., Deakin CD. ERC Guidelines 2025 Special Circumstances in Resuscitation. *Resuscitation* 2025;215 Suppl 1:110753. Publisher PDF, same host. READ LEVEL: partial (summary of changes table, drowning concise guideline and evidence section, opioid section). **PubMed shows an erratum: Resuscitation 2026;228:111314 (21 Sep 2026). Not read; check it does not touch drowning or opioids.**

**S9.** Djärv T, et al. ERC Guidelines 2025 First Aid. *Resuscitation* 2025;215 Suppl 1:110752. Publisher PDF, same host. READ LEVEL: partial (changes table, recovery position, opioid overdose sections).

**S10.** European Resuscitation Council. "The ERC Guidelines 2025 on Resuscitation for Everyone" (layperson book, file gl2025_layperson_book_ipdf-v11-e.pdf, 66 pages, PDF created 10 Dec 2025). https://www.erc.edu/media/p5ymaeej/gl2025_layperson_book_ipdf-v11-e.pdf . READ LEVEL: full, direct for adult BLS, paediatric and special circumstances pages; rest skimmed.

**S11.** Resuscitation Council UK. 2025 Resuscitation Guidelines: Adult basic life support (Smith CM, Rogers J, Klaassen B, Perkins G, et al.), published 27 October 2025. https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines . READ LEVEL: full, direct. (RCUK 2025 exists; it adapts ERC 2025 for the UK and is implemented in courses from January 2026.)

**S12.** RCUK 2025 Paediatric basic life support guidelines (adapting Djakow J et al., ERC PLS 2025, *Resuscitation* 215 Suppl 1:110767), published 27 October 2025. https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines . READ LEVEL: full, direct for key points, PBLS, AED and drowning sections.

**S13.** RCUK 2025 Executive summary of the main changes since the 2021 guidelines, published 27 October 2025. https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/executive-summary-main-changes-2021-guidelines . READ LEVEL: full, direct.

**S14.** RCUK 2025 Epidemiology of cardiac arrest guidelines, published 27 October 2025 (UK data: OHCAO registry England 2024, Scotland, Wales, NI; The Circuit). https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/epidemiology-cardiac-arrest-guidelines . READ LEVEL: full, direct (OHCA section).

**S15.** RCUK 2025 First aid guidelines and Special circumstances guidelines, both published 27 October 2025 (…/first-aid-guidelines, …/special-circumstances-guidelines). READ LEVEL: partial (recovery position, opioid, drowning, pregnancy).

**S16.** RCUK. CPR, AEDs and the law (originally 2000, revised 2010, reviewed 2017). PDF https://www.resus.org.uk/sites/default/files/2020-05/CPR%20AEDs%20and%20the%20law%20%285%29.pdf . READ LEVEL: full, direct (skimmed for liability passages).

**S17.** St John Ambulance. How to do CPR (clinically reviewed 28/04/2025, Dr Lynn Thomas). https://www.sja.org.uk/first-aid-advice/cpr/ (target of the old NHS URL). READ LEVEL: full, direct.

**S18.** British Heart Foundation. How to do CPR. https://www.bhf.org.uk/how-you-can-help/how-to-save-a-life/how-to-do-cpr . No last-updated date shown. READ LEVEL: full, direct.

**S19.** American Red Cross. CPR Steps. https://www.redcross.org/take-a-class/cpr/performing-cpr/cpr-steps . No date shown. READ LEVEL: full, direct.

**S20.** CARES (Cardiac Arrest Registry to Enhance Survival). CARES Survival Report, All Agencies/National Data, Date of Arrest 01/01/2025 to 12/31/2025, Non-Traumatic Etiology (dated April 20, 2026). https://mycares.net/sitepages/uploads/2026/CARES%202025%20Non-Traumatic%20National%20Survival%20Report.pdf ; plus CARES 2025 Metrics Summary (…/uploads/2026/CARES%202025%20Metrics%20Summary.pdf) and the 2024 report (dated April 21, 2025). READ LEVEL: full, direct.

**S21.** FDA press release, "FDA Approves First Over-the-Counter Naloxone Nasal Spray", March 29, 2023. https://www.fda.gov/news-events/press-announcements/fda-approves-first-over-counter-naloxone-nasal-spray . READ LEVEL: full, direct.

**S22.** Department of Health and Social Care (UK). Widening the availability of naloxone. Published 23 April 2025, last updated 12 September 2025. https://www.gov.uk/government/publications/widening-the-availability-of-naloxone/widening-the-availability-of-naloxone . READ LEVEL: full, direct.

Studies (all **abstract only**, via PubMed efetch, unless stated):
- **S23.** SOS-KANTO study group. *Lancet* 2007;369:920-6. PMID 17368153.
- **S24.** Svensson L, et al. Compression-only CPR or standard CPR in OHCA. *NEJM* 2010;363:434-42. PMID 20818864.
- **S25.** Rea TD, et al. CPR with chest compression alone or with rescue breathing. *NEJM* 2010;363:423-33. PMID 20818863.
- **S26.** Hüpfl M, Selig HF, Nagele P. Chest-compression-only versus standard CPR: a meta-analysis. *Lancet* 2010;376:1552-7. PMID 20951422.
- **S27.** Kitamura T, et al. Conventional and chest-compression-only CPR by bystanders for children. *Lancet* 2010;375:1347-54. PMID 20202679.
- **S28.** Iwami T, et al. Dissemination of chest compression-only CPR and survival. *Circulation* 2015;132:415-22. PMID 26048093.
- **S29.** Hasselqvist-Ax I, et al. Early CPR in OHCA. *NEJM* 2015;372:2307-15. PMID 26061835.
- **S30.** Wissenberg M, et al. National initiatives, bystander intervention and survival (Denmark). *JAMA* 2013;310:1377-84. PMID 24084923.
- **S31.** Kragholm K, et al. Bystander efforts and 1-year outcomes. *NEJM* 2017;376:1737-47. PMID 28467879.
- **S32.** Blewer AL, et al. Gender disparities among adult recipients of bystander CPR in the public. *Circ Cardiovasc Qual Outcomes* 2018;11:e004710. PMID 30354377.
- **S33.** Garcia RA, et al. Racial and ethnic differences in bystander CPR for witnessed cardiac arrest. *NEJM* 2022;387:1569-78. PMID 36300973.
- **S34.** Ringh M, et al. Mobile-phone dispatch of laypersons for CPR. *NEJM* 2015;372:2316-25. PMID 26061836.
- **S35.** White L, et al. Dispatcher-assisted CPR: risks for patients not in cardiac arrest. *Circulation* 2010;121:91-7. PMID 20026780.
- **S36.** Haley KB, et al. Frequency and consequences of bystander CPR on patients not in arrest. *Prehosp Emerg Care* 2011;15:282-7. PMID 21250928.
- **S37.** Williamson F, et al. Does delivering chest compressions to patients not in cardiac arrest cause unintentional injury? A systematic review. *Resusc Plus* 2024;20:100828. PMID 39649704.
- **S38.** Van Wijck SFM, et al. Rib fractures and other injuries after CPR: systematic review and meta-analysis. *Eur J Trauma Emerg Surg* 2024;50:1331-46. PMID 38206442.
- **S39.** Hellevuo H, et al. Deeper chest compression, more complications? *Resuscitation* 2013;84:760-5. PMID 23474390.
- **S40.** Couper K, et al. COVID-19 in cardiac arrest and infection risk to rescuers: a systematic review. *Resuscitation* 2020;151:59-66. PMID 32325096.
- **S41.** Diem SJ, Lantos JD, Tulsky JA. CPR on television: miracles and misinformation. *NEJM* 1996;334:1578-82. PMID 8628340.
- **S42.** Portanova J, et al. It isn't like this on TV. *Resuscitation* 2015;96:148-50. PMID 26296584.

### 2. What to teach, topic by topic

#### 2.1 Recognising cardiac arrest

- **Criteria (E, all bodies agree):** unresponsive plus absent or abnormal breathing. AHA S1 §6.1 rec 1 (COR 1, LOE C-LD): "If an adult is unconscious/unresponsive, with absent or abnormal breathing (ie, only gasping), the lay rescuer should assume the person is in cardiac arrest." [V]
- **Lay rescuers do not check a pulse (E).** AHA pediatric S2 §7.1 rec 1 (COR 1, C-LD): lay rescuers "should not check for a pulse." [V] Evidence cited: lay pulse palpation accuracy 47% at 5 s and 73% at 10 s; health professionals 78%. Health professionals: pulse check no more than 10 s (S1 §6.1 rec 2).
- **Agonal breathing (E).** AHA S1: "Agonal breathing is characterized by slow, irregular gasping respirations that are ineffective for ventilation." [V] Present "in up to 40% to 60% of OHCA" (S1). ERC S7 gives 30 to 60%, most common at onset, and notes it "is associated with improved outcomes" (so it is a reason to act fast, not a sign of life). Lay words for it (ERC S7): gasping, barely or occasionally breathing, moaning, sighing, gurgling, noisy, groaning, snorting, heavy or laboured breathing.
- **New in ERC/RCUK 2025: panting and open eyes in athletes.** ERC S7 Table 1: "Early after the onset of cardiac arrest, athletes may display a near normal or panting breathing pattern." [V]
- **Seizure-like activity (E).** ERC S7: "A short period of seizure-like activity may occur at the onset of cardiac arrest. Once the seizure stops, assess breathing." [V] In one study 4.3% (149/3502) of OHCAs had seizure-like activity; these patients were younger and more likely to survive (44% vs 16%). ERC layperson book S10: "Do not confuse cardiac arrest with seizure!" [V]
- **Check time.** Pediatric (RCUK S12, trained rescuer): assess breathing and signs of life "for no longer than 10 s" [V]. Red Cross S19: check breathing "for no more than 10 seconds" [V]. St John S17 still teaches "Look, listen, and feel for up to 10 seconds for normal breathing." [V] ERC/RCUK adult 2025 no longer specify a 10-second breathing check for lay adults; they tell you to call first and assess breathing while the call connects (see 2.2).
- **When in doubt, act (E/V).** RCUK S11: "If there is any doubt, assume cardiac arrest and start CPR." [V]

#### 2.2 Calling for help, speakerphone, dispatcher CPR

- **ERC/RCUK 2025 change (the biggest lay change): call for any unresponsive person, before confirming breathing.** RCUK S11: "Call 999 for any unresponsive person. Rescuers no longer need to confirm abnormal breathing before calling. Initiate the call first, then assess breathing while waiting for the call to be answered." [V] ERC reasoning: an ILCOR scoping review found most arrests are first recognised by the dispatcher, not the bystander (S7).
- **AHA 2025:** identify arrest, then a lone responder "should activate the emergency response system first, then immediately begin CPR" (S1 §6.2 rec 2, COR 1, B-NR); with a mobile phone, call and start CPR at once (rec 3, COR 1, C-LD). AHA notes a large observational study (N=17,461) found no survival difference between CPR-before-call and CPR-after-call.
- **Speakerphone:** ERC/RCUK and AHA all advise the hands-free speaker so compressions and the call happen together.
- **No phone, alone (ERC S7):** shout for help and assess breathing; "If you think no-one will come to help, then you will have to leave the person to alert the local emergency service. Do this as quickly as possible." [V] ERC says there is no evidence on how long to do CPR before leaving.
- **Children, single rescuer:** RCUK S12: calling and starting CPR is prioritised over fetching an AED.
- **Dispatcher CPR works (E for association, low-certainty evidence).** ERC S7: dispatch-assisted CPR vs none, survival to discharge OR 1.67 (95% CI 1.39 to 2.0), favourable neurological survival OR 2.21. ILCOR S6 (2019/2024): dispatch centres should give CPR instructions (strong recommendation, very low-certainty evidence) and dispatchers should give chest-compression-only instructions for adults (strong recommendation, low-certainty evidence, unchanged from 2017). AHA S4 T-CPR rec 1 (COR 1, LOE A): adult T-CPR should advise compression-only CPR; rec 3 (COR 1, C-LD): T-CPR for infants and children should advise conventional CPR with breaths.
- **Wording matters:** ERC S7: changing "Do you want to do CPR" to "We need to do CPR" increased CPR being performed.
- **UK/Europe numbers:** 999 or 112 in the UK; 112 in Europe; 911 in the US.

#### 2.3 Chest compressions

| Item | AHA 2025 (S1, S2) | ERC/RCUK 2025 (S7, S11, S12) |
|---|---|---|
| Rate | 100 to 120/min (adult COR 2a, B-NR; child/infant COR 2a, C-LD) | 100 to 120/min |
| Adult depth | "at least 2 inches, or 5 cm" and avoid "greater than 2.4 inches, or 6cm" (COR 1, B-NR) [V] | "at least 5 cm, but not more than 6 cm" [V] |
| Child depth | at least one third of AP chest diameter, about 2 in (5 cm) (COR 2a, C-LD) | at least one third of AP dimension; adolescents 5 to 6 cm; never more than 6 cm at any age |
| Infant depth | one third, about 1.5 in (4 cm) | one third (no cm figure given in S12) |
| Hand position, adult | heel of one hand on centre of chest, "the lower half to lower third of the sternum", other hand on top (COR 1, C-LD); may consider dominant hand on sternum (2b) | heel of hand on "lower half of the sternum ('in the centre of the chest')", interlock fingers, arms straight, shoulders over chest [V] |
| Infant technique | **NEW 2025:** 1-hand (heel of one hand) or 2 thumb-encircling hands; 2-finger technique eliminated (COR 1, B-NR) | two-thumb encircling (S12, S10) |
| Child technique | 1 or 2 hands (2b, C-LD) | one or two hands |
| Recoil | allow complete recoil, do not lean (2a, C-LD) | same |
| Pauses | minimise; child pauses under 10 s (S2 COR 1) | minimise; CCF at least 60% (ILCOR) |
| Surface | firm surface, supine, if it does not delay compressions (2a); torso at about rescuer's knee level (COR 1, B-NR, new) | firm surface best, but **do not move a person from a bed to the floor**: compress deeper on the mattress (S7, S11) |

- ILCOR S6 2024: "We suggest performing chest compressions on a firm surface when possible" and in hospital "we suggest against moving a patient from a bed to floor" (weak, very low certainty).
- **Conflict to flag:** St John S17 says "if they are on a bed, and if it is safe for you to do so, move them to the floor." [V] RCUK/ERC 2025 say the opposite for lay rescuers. AHA prefers a firm surface "when feasible and does not delay chest compressions."
- **Clothing:** ERC S7 allows displacing or removing garments to find the landmark; BHF S18 says thin clothing need not be removed for compressions, but must be for pads.
- **Obesity:** same technique (AHA S1 COR 1; ERC new in 2025, standard 30:2); may need more force.

#### 2.4 Breaths, ratios, compression-only

- **Adult ratio 30:2 (E).** ILCOR S6: "We suggest a compression-ventilation ratio of 30:2 compared with any other compression-ventilation ratio in adult patients in cardiac arrest (weak recommendation, very low–certainty evidence)." [V] AHA S1 §8.4 (2a, B-NR).
- **Breath technique:** about 1 second each, enough to make the chest visibly rise; avoid excessive ventilation. AHA advises "a regular rather than a deep breath" for the rescuer. If the chest does not rise after 2 attempts, consider airway obstruction and go back to compressions (ERC S7, St John S17).
- **Who should give breaths (adults):**
  - ILCOR S6 (2025, unchanged from 2017): "We recommend that chest compressions be performed for all adults in cardiac arrest (good practice statement). We suggest that bystanders who are trained, able, and willing, give chest compressions with rescue breaths for adults in cardiac arrest (weak recommendation, very low–certainty evidence)." [V]
  - AHA S1: all lay rescuers compress (COR 1, B-NR); trained lay rescuers may add breaths (COR 2a, **B-R**, upgraded evidence level).
  - ERC/RCUK: trained, able and willing give 30:2; otherwise continuous compressions.
- **Children:** conventional CPR with breaths is recommended. AHA S2 §7.2 rec 1 (COR 1, B-NR); compression-only if unable or unwilling (2a, B-NR). ERC/RCUK: dispatchers should encourage breaths "in children of all ages" and compression-only if unwilling (S12).
- **Pediatric sequence and ratio: a clear US vs UK/Europe difference.**
  - AHA: start with compressions (C-A-B) for children too (COR 2b, C-LD); ratio 30:2 single rescuer, 15:2 two rescuers (2a, C-EO).
  - ERC/RCUK: **five initial rescue breaths first**, then compressions; 15:2 if trained in paediatric BLS, otherwise 30:2. RCUK S12: "Ambulance service call handlers should use a 30:2 ratio for CPR instructions with 5 initial rescue breaths for untrained bystanders or bystanders trained only in adult BLS." [V] Infants: mouth-to-mouth-and-nose.
- **"Puberty" vs "18":** AHA uses child guidelines until signs of puberty (breast development in females, axillary hair in males). ERC/RCUK define paediatric as 0 to 18, "infant" under 1, "child" 1 to 12, "adolescent" 13 to 18, and say "when in doubt, use directions for adults" (S10).

#### 2.5 AEDs

- **Anyone can use one (E).** RCUK S11: "Anyone can use an Automated External Defibrillator (AED)." [V] Signage should say no training is needed.
- **Steps (ERC S7):** switch on (some turn on when opened), follow prompts, pads on bare chest, continue CPR while pads go on if there is a second person, nobody touches during analysis or shock, restart compressions immediately after the shock or if no shock is advised. Semi-automatic devices need the button pressed; fully automatic ones shock on their own.
- **CPR until the AED is ready, then no extra delay (E).** ERC S7: "Defibrillation should not be delayed to provide additional CPR." [V] AHA S1 §9.2: CPR until a defibrillator is applied (COR 1).
- **Pad positions:** anterior-lateral is standard (right pad below the right clavicle beside the sternum, left pad mid-axillary below the armpit); anterior-posterior is the alternative. ILCOR S6 2025: follow the manufacturer's placement (good practice statement). AHA: pad diameter above 8 cm for adults.
- **Bras and women (E for the disparity; low evidence on bras).** ILCOR S6: "There is insufficient evidence to guide the routine removal of a bra, but it may not always be necessary to remove a bra for defibrillation. Pads must be placed on bare skin in the correct position, which may be possible by adjusting the bra's position rather than removing it (good practice statement)." [V] A swine study found no arcing or burning when pads went over an underwire (conference abstract, cited in S1). ERC S7: "Rescuers should not be concerned about exposing the persons chest to apply defibrillation pads. They should prioritise life-saving interventions over concerns for modesty." [V]
- **Time matters (E).** AHA S1 (ARREST registry): first-shock success 93% within 6 minutes, 75% if delayed beyond 16 minutes; "Every minute of delay to first shock was associated with a 6% decreased probability of survival to discharge." [V] ERC S7: each minute of delay means 3 to 6% lower probability of survival to discharge. **Discrepancy:** the ERC layperson book S10 says "Each minute of delay in getting to defibrillation reduces the probability of survival by 10%." [V] That is the older popular figure; the guideline chapter's 3 to 6% is the one to teach.
- **AED on children and infants (difference in wording):**
  - AHA S2: attach "as soon as possible using a pediatric attenuator and pediatric pads if available" (Top 10); attenuator recommended under 8 years (COR 1, C-LD); if none, an adult AED "may be considered" (COR 2b, C-EO). Unattenuated AEDs deliver 120 to 360 J, but reports show safe, effective use; AEDs misclassify pediatric shockable rhythms only 2 to 4% of the time. Largest pads that fit with 1 to 2 cm separation.
  - ERC/RCUK S12: paediatric mode for all under 25 kg (about 8 years); "If the AED does not have instructions for children, use it in standard adult mode." [V] Under 25 kg use front-back (anteroposterior) placement.
- **Drowning:** CPR with breaths before the AED (see 2.9).
- **Locked cabinets:** ILCOR S6: "We advise against using locked cabinets for public access defibrillator storage (good practice statement)." [V] Theft or vandalism under 2% (ERC S7); half of first responder injuries getting AEDs came from breaking glass.
- **Public access defibrillation:** ILCOR (via S3/S6): implement PAD programmes (strong recommendation, low-certainty evidence). **Registries:** The Circuit (UK national registry, visible to 999 call handlers and at "Defib Finder"): by mid-June 2025, 108,584 AEDs registered and 218,493 deployments or attempted deployments (S14). **PulsePoint (US):** I did not read a PulsePoint source; do not teach specifics without one.
- **Volunteer responder apps (CE, promising).** Ringh 2015 (S34): bystander CPR 62% vs 48% with mobile-phone dispatch of trained volunteers. ERC S7 cites a stepped-wedge trial where survival rose from 26% to 39% in home arrests. AHA S4: summoning apps "reasonable" (2a, B-NR); survival effects inconsistent.
- **Drones, pocket AEDs, wearables:** research only (ERC S7; ILCOR "Urgent evaluation" of ultraportable AEDs).

#### 2.6 Continuing, switching, stopping

- **Switch compressors about every 2 minutes (E).** AHA S1 §7.2 rec 4 (2a, B-R): switch "approximately every 2 min (or after about 5 cycles of compressions and ventilation at a ratio of 30:2)" [V]; compression depth starts to fall after 90 to 120 s. St John S17: swap every one to two minutes. ILCOR S6 (2023): "We recommend monitoring for fatigue in all rescuers performing CPR (good practice statement)." [V]
- **When to stop (lay rescuer):** St John S17: until help takes over, the person shows signs of life and breathes normally, or you are too exhausted. RCUK S12 (child): "Do not interrupt CPR unless there are clear signs of life, or you are instructed to do so by the AED." [V]

#### 2.7 Recovery position

- **Who:** unresponsive (or reduced responsiveness) but breathing normally and not needing CPR. ERC S9: "Place adults and children with decreased level of responsiveness who do NOT meet the criteria for CPR into a lateral (side-lying) recovery position" and "In cases of agonal breathing or trauma, do NOT move the person into the recovery position." [V] (RCUK S15 identical.)
- **How (ERC S9):** legs straight; near arm out at a right angle (straight or bent: an RCT in volunteers found no difference, so either); far hand against the near cheek; bend the far knee; roll towards you; hip and knee at right angles; tilt head back; check breathing regularly. RCUK S12 (child): check breathing continuously or at least every minute.
- **Side preference:** the ERC 2025 text I read gives **no left or right preference** (it says roll the person "towards you"). The brief's "ERC's side preference" could not be confirmed. Left side is specified only for pregnancy (uterine displacement, see 2.10).
- **Evidence (ERC S9):** an ILCOR scoping review found 34 studies, mostly healthy volunteers; in children it was associated with fewer hospitalisations; one observational study favoured semi-recumbent over lateral in opioid overdose.
- **AHA view:** the last AHA text I could read (S5, 2020 First Aid): "If a person is unresponsive and breathing normally, it may be reasonable to place him or her in a lateral side-lying recovery position." [V] (Class 2b, LOE C-LD), with a different technique: extend one arm above the head and roll so the head rests on it, then bend both legs. The 2025 AHA BLS parts I read (S1, S2) do not mention the recovery position. **AHA/Red Cross 2024 First Aid not read**, so the current AHA wording is unconfirmed.
- AHA S3 adds a physical point: "Effective CPR cannot be performed in the recovery (lateral decubitus) position." [V]

#### 2.8 Safety of rescuer and casualty

- **Harm to someone not in arrest is low (E).** White 2010 (S35): of 247 non-arrest patients given dispatcher-guided compressions, 12% had discomfort, 2% (6) had injuries likely or possibly from CPR, 2% (5) a fracture, none visceral injury. Haley 2011 (S36): 1 of 72 (1.4%) possible CPR injury. Williamson 2024 SR (S37): 1031 patients, 5 studies, under 1% injured, no deaths attributable to compressions, very low certainty. ILCOR/ERC: lay people should start CPR "without concerns of harm to patients not in cardiac arrest" (good practice statement). AHA S1: "The benefit of providing CPR for someone in cardiac arrest far outweighs any risk associated with providing chest compressions to someone who is not." [V]
- **Injuries in people who are in arrest are common (E).** Van Wijck 2024 SR (S38): 74 studies, 16,629 patients; any CPR injury 60%, rib fractures pooled 55% (95% CI 48 to 62); more with mechanical CPR (RR 1.36). Hellevuo 2013 (S39): injuries more frequent when mean depth exceeded 6 cm (49% vs about 27%), "by and large not fatal". This supports both "broken ribs are not a sign of failure" and the 6 cm upper limit. BHF S18: "A broken rib or other injury can be treated." [V]
- **Harm to rescuer is low.** ERC S7: "The risk of infection to rescuers performing CPR is low" and "The risk of harm to rescuers, from accidental shock during AED use, is low." [V]
- **PPE:** AHA S1 rec 5 (2a, C-LD): reasonable to use PPE "when immediately available"; a 2023 SR found no difference in CPR quality (17 manikin studies) but more fatigue. Donning delays CPR by 30 to 60 s in simulation (S3).
- **Psychological aftermath (new in ERC/RCUK 2025, V/E):** rescuers may benefit from support. BHF S18 links support pages.

#### 2.9 Drowning

- **Why it differs (E):** hypoxic arrest. AHA S3: "Cardiac arrest following drowning is most often due to a hypoxic mechanism, whereas sudden cardiac arrest, particularly in adults, is more likely to occur with fully oxygenated blood." [V] Initial shockable rhythms only 2 to 12% (AHA) or under 10% (ERC).
- **Do not enter the water unless trained (E/V):** ERC S8 and RCUK S15: reach or throw a flotation aid.
- **Order of actions, by who you are (this is where the bodies now largely converge):**
  - ILCOR S6 (2025, new): "We recommend a compression-first strategy (CAB) for laypeople providing resuscitation for adults in cardiac arrest caused by drowning (good practice statement). Health care professionals and those trained and with a duty to respond to drowning (eg, lifeguards) should consider providing rescue breaths/ventilation first (ABC) before chest compressions (good practice statement)." [V]
  - ERC S8: first responders and EMS start with 5 ventilations; "For simplicity, untrained bystanders should start with chest compressions whilst trained first aid providers should consider ventilations" [V].
  - RCUK S15 first aid: trained first aiders or lifeguards give five rescue breaths, then standard CPR. BHF S18: "if you are trained and feel comfortable to do so, administer 5 rescue breaths" [V] before 30:2.
  - RCUK/ERC children: standard PBLS with five rescue breaths as soon as safe (S12).
  - AHA S3 (2025, from the 2024 focused update): CPR with breaths and compressions should be given after removal from water (COR 1, B-NR); compression-only reasonable if unwilling or untrained (adults 2a, children 2b); trained rescuers "may" start with breaths (2b, C-EO); CPR with breaths before AED (COR 1, B-NR). Evidence: in one study of 919 drowning arrests, early AED application was associated with worse neurological outcome (aOR 0.42), possibly by delaying CPR.
- **In-water breaths:** only trained rescuers with flotation (ILCOR weak recommendation, very low certainty). AHA S3: death rate 44% when breathing support interrupts the drowning process vs 93% once it progresses to cardiac arrest.

#### 2.10 Pregnancy

- **Manual left uterine displacement while compressing on the back (E, low evidence).** AHA S3 §19.3 rec 4 (COR 1, C-LD): when fundal height is at or above the umbilicus. RCUK S15: "Above 20 weeks gestation... Manual left uterine displacement in maternal cardiac arrest is preferred over the lateral tilt, due to the practicalities of delivering chest compressions." [V] Resuscitative delivery aims to be complete by 5 minutes (a hospital intervention, not lay). For choking in late pregnancy, chest thrusts not abdominal thrusts (S1 §10.3).

#### 2.11 Opioid overdose and naloxone

- **What a bystander does (AHA S3 2025):** call, give CPR with breaths if unresponsive and not breathing normally (COR 1, B-NR); give naloxone to someone in respiratory arrest with a pulse (trained rescuers COR 1); do not delay CPR or the call for naloxone (COR 1, C-EO); naloxone in cardiac arrest only if it does not interfere with CPR (2b). Key sentence: "Opioid antagonists are extremely unlikely to benefit an adult or child in cardiac arrest who is not receiving CPR and do not reverse VF." [V] AHA explicitly notes its CPR-first advice "differs from that of the prescribing information for naloxone or nalmefene." [V] Observe in a health care setting after response (recurrent respiratory depression is possible because the opioid can outlast naloxone). US products: naloxone and nalmefene; intranasal nalmefene prescription only.
- **ERC S9 First Aid (2025, new):** "If the person is unresponsive and not breathing normally, start CPR and call your local emergency number (112)" and "Administer intra-nasal naloxone, or if you are trained, use an intramuscular naloxone autoinjector." [V] Recognition: slow, irregular or absent breathing, extreme drowsiness, pinpoint pupils. ERC S8 (ALS level): evidence "not sufficient to recommend administration of an opioid-antagonist (e.g. naloxone) for cardiac arrest caused by opioid poisoning." [V]
- **RCUK S15:** "Administer naloxone if you are trained." [V] (More conditional than the ERC text.)
- **US legal status (E):** FDA S21, March 29, 2023: approved "Narcan, 4 milligram (mg) naloxone hydrochloride nasal spray for over-the-counter (OTC), nonprescription, use – the first naloxone product approved for use without a prescription." [V] AHA S4 (Public Access Naloxone): policies should allow possession, use and liability immunity (COR 1, B-NR); distribution programmes beneficial (2a, B-NR); "An estimated 1 in 6 to 1 in 3 OHCAs are related to an overdose" [V]; evidence on mortality ecological and mixed.
- **UK legal status (E), correcting the brief:** naloxone remains **prescription-only** in the UK ("pharmacies cannot sell it over the counter"), but listed services can supply it without a prescription. DHSC S22: 2015 regulations let drug treatment services supply it; "The regulations were amended in February 2019 to include nasal naloxone" [V]; December 2024 regulations widened supply to police, prisons, probation, nurses, midwives, pharmacists, paramedics and others, with a registration route still being set up. "Anyone can use available naloxone to save a life in an emergency." [V] Products: Prenoxad (intramuscular injection) and Nyxoid (nasal spray, licensed 14 and over); a 1.26 mg nasal spray is licensed 18 and over. So the brief's "2019 change allowing more services to supply" is really the 2019 addition of nasal naloxone; the widening of suppliers was 2024.

#### 2.12 COVID-era modifications

- **Withdrawn in Europe/UK (E).** ERC S7 Table 1: COVID-19 BLS modifications "been removed... COVID-19 patients should be treated as any other patients. Modifications to CPR are no longer required." [V]
- **AHA:** the 2025 Part 10 section on high-consequence respiratory pathogens "supersede[s]" the 2020 and 2022 interim COVID guidance (S3); it is aimed at teams (PPE, N95). For lay rescuers AHA 2025 says PPE is reasonable when immediately available.
- **Stale public messaging:** BHF S18 still says "Hands-only CPR is very effective and is the recommended way to give CPR since the Covid-19 pandemic." [V] That is out of step with RCUK 2025, which recommends 30:2 for trained rescuers. Flag this for learners who meet BHF material.

### 3. Evidence on outcomes

- **US (CARES, S20), arrests in 2025 (n=140,144, non-traumatic, EMS-treated):** survival to hospital discharge **10.5%**; with good neurological function (CPC 1 or 2) 8.3%. Public setting 20.9%; home 8.9%; nursing home 4.5%. Bystander-witnessed 16.1%; unwitnessed 4.3%. Shockable initial rhythm 29.0%; non-shockable 6.4%. Bystander CPR (excluding nursing home/healthcare events) 42.5% of cases, survival 12.9% vs 7.7% without. Bystander AED use in non-healthcare settings 2.5% of cases, survival 32.9%. Utstein bystander group (bystander-witnessed and shockable) 33.3%. 2024 figures (report dated April 21, 2025) were almost identical: 10.5% survival, 41.7% bystander CPR. AHA S1 quotes the 2024 figures (10.5%, 8.2% good neurological outcome, bystander CPR 47.7% when nursing homes are included, bystander AED 7.9%).
- **Pediatric US (S2, CARES 2022):** survival 17.3% adolescents, 14.7% children, 6.6% infants. CARES 2025 infants under 1 (from the 2024 report, n=1525): 5.8%.
- **UK (S14, OHCAO etc.):** about 115,000 OHCAs reported per year, resuscitation attempted in about 43,000. Bystander CPR England 72.6%, Scotland 62.6%, Wales 64.3%, Northern Ireland 41.5%. Bystander AED use 8 to 10%. 30-day survival England 9.5%, Scotland 9.6%, Northern Ireland 6.5%; Utstein group about 29 to 30%. Paediatric OHCA about 750 to 800 per year; England 30-day survival 13.2%. Hot spots are more deprived, urban and ethnically diverse. **Definitions differ from CARES** (30-day survival vs survival to discharge, and different denominators), so compare with care.
- **Europe (ERC layperson book S10, from the ERC Epidemiology chapter which I did not read directly):** incidence of EMS-treated OHCA 55 per 100,000; bystander CPR 58% (range 13% to 82%); bystander AED use 2.6% to 59%; survival "10% or less". EuReCa itself not read.
- **Effect of bystander CPR (E for association; causation inferred, not proven by RCT):**
  - Hasselqvist-Ax 2015 (S29), Sweden, 30,381 witnessed OHCAs 1990 to 2011: 30-day survival 10.5% with CPR before EMS vs 4.0% without; adjusted OR 2.15 (95% CI 1.88 to 2.45).
  - Wissenberg 2013 (S30), Denmark 2001 to 2010: bystander CPR rose from 21.1% to 44.9% after national initiatives (mandatory school CPR, driving-licence CPR, dispatcher CPR, AED placement); 30-day survival rose from 3.5% to 10.8%. The authors say causality "remains uncertain".
  - Kragholm 2017 (S31): bystander CPR associated with less brain damage or nursing home admission at 1 year (HR 0.62).
  - RCUK S11: "Bystander CPR and use of an AED increase the chances of survival by two to four-fold." [V]
- **Compression-only vs conventional, adults (CE):**
  - SOS-KANTO 2007 (S23): 4068 witnessed arrests; any bystander CPR better than none (5.0% vs 2.2% favourable outcome); compression-only did better than conventional in some subgroups; adjusted OR 2.2 for compression-only.
  - Svensson 2010 (S24) RCT of dispatcher instructions, 1276 patients: 30-day survival 8.7% vs 7.0%, P=0.29.
  - Rea 2010 (S25) RCT, 1941 patients: survival to discharge 12.5% vs 11.0%, P=0.31; trends favouring compression-only in cardiac-cause and shockable subgroups.
  - Hüpfl 2010 (S26) meta-analysis of 3 RCTs: 14% vs 12%, RR 1.22 (95% CI 1.01 to 1.46), NNT 41; 7 observational cohorts: no difference (RR 0.96).
  - Iwami 2015 (S28), Japan 2005 to 2012: nationwide spread of compression-only CPR raised any-bystander-CPR from 34.6% to 47.3%, and survival with good neurological outcome attributable to bystander CPR per 10 million rose from 9.0 to 43.6.
  - Counterweight: AHA S1 cites "numerous observational studies and 1 large secondary analysis of an RCT" showing better outcomes with breaths, and ROC data showing ventilation during 30:2 pauses is often ineffective; AHA S4 notes the adult RCTs "largely predate the rise in overdose-associated OHCA". ILCOR's lay-rescuer evidence (without dispatcher help) is 3 observational studies, very low certainty, no new studies since 2017.
- **Children (E that breaths matter for non-cardiac causes):** Kitamura 2010 (S27), 5170 Japanese children: in non-cardiac arrests aged 1 to 17, conventional CPR gave better favourable neurological outcome than compression-only (7.2% vs 1.6%, OR 5.54); in cardiac-cause arrests no difference; compression-only still better than nothing; infants did uniformly poorly (1.7%).
- **Disparities (E for the association):**
  - Blewer 2018 (S32), ROC 2011 to 2015, 19,331 OHCAs: in public, 39% of women vs 45% of men received bystander CPR (men OR 1.27); at home no difference (35% vs 36%).
  - Garcia 2022 (S33), CARES 2013 to 2019, 110,054 witnessed OHCAs: Black and Hispanic people less likely to receive bystander CPR at home (38.5% vs 47.4%, aOR 0.74) and in public (45.6% vs 60.0%, aOR 0.63), in every neighbourhood type and income stratum.
  - CARES 2025 metrics (S20): public bystander CPR 46.2% for women vs 48.8% for men; public AED use 11.7% vs 13.4%.
  - AHA S1 links the female public-AED gap to exposing the chest and fear of accusation; RCUK S14 reports UK hot spots in deprived, diverse areas and fewer public AED deployments with deprivation.

### 4. US vs UK/Europe differences (Part A)

1. **When to call:** ERC/RCUK 2025: call for any unresponsive person, then check breathing. AHA 2025: recognise arrest (unresponsive plus absent or gasping breathing), then call and start CPR. In practice both say speakerphone and start at once.
2. **Child sequence:** ERC/RCUK give 5 initial rescue breaths first. AHA starts with compressions (C-A-B) for children as for adults.
3. **Child ratio for lay rescuers:** ERC/RCUK 15:2 only if trained in paediatric BLS, otherwise 30:2 (with the 5 breaths). AHA 30:2 for one rescuer, 15:2 for two.
4. **Infant compressions:** AHA 2025 removed the two-finger technique and allows 1-hand or two-thumb encircling. ERC/RCUK recommend two-thumb encircling.
5. **Paediatric age boundary:** AHA uses puberty; ERC/RCUK use 0 to 18 with "if in doubt, treat as adult".
6. **AED for small children:** AHA attenuator under 8 years, adult AED "may be considered" if none (2b). ERC/RCUK paediatric mode under 25 kg (about 8 years), otherwise use adult mode, with front-back pads under 25 kg.
7. **Bed vs floor:** ERC/RCUK: do not move from bed to floor, push deeper. AHA prefers a firm surface when it does not delay CPR and adds knee-level positioning. St John (UK) still says move to the floor if safe.
8. **Drowning:** ILCOR 2025 aligns everyone for lay people (compressions first) but UK/European lay material (BHF, RCUK first aid) still leads with 5 breaths for anyone "trained"; AHA only says trained rescuers "may" start with breaths.
9. **Naloxone:** US OTC 4 mg nasal spray since 2023; UK prescription-only with supply without prescription by named services (2015, nasal 2019, widened 2024). AHA says CPR before naloxone; ERC first aid says start CPR and give nasal naloxone; RCUK says give naloxone "if you are trained".
10. **Emergency numbers:** 911 (US); 999 or 112 (UK); 112 (EU).
11. **Registries and outcome definitions:** CARES survival to discharge (10.5%) vs UK OHCAO 30-day survival (about 9.5% England); UK bystander CPR rates look much higher (60 to 73%) than CARES (42.5%) but definitions and denominators differ.
12. **AED registries:** The Circuit (UK) is national and visible to 999 handlers; US has app-based systems such as PulsePoint (not verified here).

### 5. Contested questions

**A. Should untrained or trained lay rescuers give breaths to adults?**
- *Compression-only side:* the RCTs of dispatcher instructions (Rea, Svensson) and their meta-analysis (Hüpfl: RR 1.22, NNT 41) favour or equal compression-only; it gets more people to act (Japan dissemination data); mouth-to-mouth is a barrier; pauses for breaths cut compression time. ILCOR and AHA T-CPR recommend compression-only instructions (AHA COR 1, LOE A).
- *Breaths side:* oxygen falls as CPR goes on; asphyxial and overdose arrests (now 1 in 6 to 1 in 3 US OHCAs per AHA S4) need ventilation; recent observational data and a secondary RCT analysis favour breaths; the RCTs predate the overdose era. ILCOR/AHA/ERC therefore suggest breaths for those "trained, able, and willing" (weak, very low certainty).
- Status: CE. Both are far better than nothing (E).

**B. Compression-only CPR for children.** Kitamura shows breaths matter for non-cardiac arrests; AHA and ERC both recommend breaths (COR 1) with compression-only as fallback. Some small studies of school-aged children show similar outcomes (AHA S2). Mostly settled in favour of breaths; residual CE.

**C. Five initial breaths for children (ERC/RCUK) vs compressions first (AHA).** ERC: paediatric arrest is usually hypoxic, so oxygen first. AHA: one pediatric study found C-A-B delayed breaths only 5.74 s, and a single sequence for all ages is easier to teach (LOE C-LD, 2b). Both sides admit the evidence is minimal. CE with a strong teaching-simplicity V component.

**D. Drowning order.** Hypoxic mechanism argues for breaths first; ILCOR 2025 decided simplicity wins for laypeople (compressions first) while duty-to-respond rescuers consider breaths first. No direct comparative human evidence either way. CE.

**E. AED on infants.** Adult-dose shocks exceed 2 to 4 J/kg, but case reports show safe use and it is the only treatment for VF. All bodies say use the best device available; the disagreement is only about wording and the weight/age cut-off. Mostly settled.

**F. Pulse checks for lay people.** Removed for lay rescuers by every body (lay accuracy 47 to 73%). Settled (E).

**G. "Look, listen and feel".** Still used by St John and in ERC/RCUK PBLS for trained rescuers (look for chest movement, listen and feel for airflow); gone from ERC/RCUK adult lay steps in favour of "call, then assess breathing with the call handler". Not an evidence dispute so much as a teaching choice (V).

**H. Mechanical CPR and head-up CPR.** Not for lay rescuers. AHA: routine mechanical CPR not recommended (3: No Benefit, B-R); ILCOR 2025 suggests against head-up CPR outside trials.

**I. How many minutes per delay?** ERC chapter 3 to 6% survival loss per minute to defibrillation; AHA 6% (ARREST); ERC's own lay book 10%. Teach "every minute counts" with the guideline figure.

### 6. Myths experts correct

1. **"CPR usually works, like on TV."** TV shows portrayed 75% immediate survival and 67% apparent discharge (Diem 1996, S41) and 69.6% immediate survival in Grey's Anatomy and House (Portanova 2015, S42). Real OHCA survival to discharge is 10.5% in the US (S20) and about 9.5% at 30 days in England (S14).
2. **"An AED can restart a flatline."** ERC S7: for "asystole and a normal rhythm, no shock is advised." AEDs treat VF and pulseless VT (only about 18% of US OHCAs start shockable, CARES S20). ERC S10: "The rescuer cannot deliver a shock in error: the AED will not discharge if it does not detect appropriate conditions." [V]
3. **"I'll be sued."** RCUK S16: "there have been no reported cases in which someone has successfully sued anyone who came to help them in an emergency situation." [V] England and Wales also have the Social Action, Responsibility and Heroism Act 2015 (named in S16; Act itself not read). US: AHA S4 recommends liability immunity for naloxone use; US Good Samaritan laws were not researched in Part A.
4. **"I'll hurt them / I must be sure first."** Serious harm to people not in arrest is rare (S35 to S37); AHA: benefit "far outweighs any risk". RCUK S11: "No greater harm can occur than failing to act when someone requires CPR and defibrillation." [V]
5. **"Breaking ribs means you did it wrong."** Rib fractures occur in about 55% of people who receive CPR (S38); BHF S18 says keep going. Depths over 6 cm do raise injury rates (S39), which is why the upper limit exists.
6. **"Check the pulse first."** Lay rescuers should not (S2 COR 1).
7. **"Always tilt the head and blow first."** Adults: compressions first everywhere (ILCOR 2025, weak, very low certainty). Only children (ERC/RCUK) and drowning for trained rescuers start with breaths.
8. **"Gasping means they're breathing / wait until the heart stops completely."** Agonal gasping is a sign of arrest (S1, S7); waiting costs survival.
9. **"Blow hard."** Guidelines say just enough to make the chest rise over about 1 s; excessive ventilation causes gastric inflation and lowers cardiac output (S1). BHF S18 still says "blow hard for a second" [V]: flag as imprecise.
10. **"Hands-only is the recommended way since COVID."** COVID modifications were withdrawn by ERC/RCUK 2025 (S7); BHF S18 still carries the older line.
11. **"Sniff check."** I found no use of this term in any source read. Not taught; do not include without a source.
12. **"You need training to use an AED."** RCUK S11: anyone can use one; signage should say no training is needed.

### 7. Videos (all verified via YouTube oEmbed on 2026-09-24; duration and publish date from the watch page)

Recommended (official channels, current or still accurate):
- RCUK, "How to give CPR to a child (1-18 years)", https://www.youtube.com/watch?v=I3pHjgiaYew , channel ResusCouncilUK, 131 s, published 2026-08-04. (Post-2025 guidance; UK child method.)
- RCUK, "How to give CPR to a baby (0-1 year)", https://www.youtube.com/watch?v=oKE9IG7LERg , ResusCouncilUK, 139 s, 2026-08-04.
- RCUK, "Become ResusReady with CPR training (full version)", https://www.youtube.com/watch?v=fC3cRr8xVpo , ResusCouncilUK, 184 s, 2024-10-02.
- RCUK, "Defib Dani: Learn to use a defibrillator", https://www.youtube.com/watch?v=7aX1EwkC1yY , ResusCouncilUK, 81 s, 2023-10-24 (Urdu and Welsh versions also exist: n05-fRSUyFc, pr0B6tBXZhs).
- AHA, "Official 2012 Hands-Only CPR Instructional Video", https://www.youtube.com/watch?v=zSgmledxFe8 , channel handsonlycpr (@cpr), 69 s, 2012-05-31. Old but the two steps are unchanged.
- AHA, "How to save a life: Hands-Only CPR", https://www.youtube.com/watch?v=QOWB1hYAjZc , American Heart Association, 633 s, 2023-11-09.
- AHA, "Infant CPR", https://www.youtube.com/watch?v=01jpBkoQr4Y , American Heart Association, 30 s, 2024-01-11. **Check it does not show two-finger compressions** (removed by AHA in 2025); not watched.
- American Red Cross, "How to Perform Hands-Only CPR", https://www.youtube.com/watch?v=6eRwgM2Pa4o , American Red Cross, 170 s, 2023-02-02.
- American Red Cross, "How to Use an AED on an Adult", https://www.youtube.com/watch?v=in8j2Q2z3HE , American Red Cross, 179 s, 2024-08-12.
- BHF, "Hands-Only CPR (British Heart Foundation TV advert)" (Vinnie Jones), https://www.youtube.com/watch?v=O92KL1mw77c , British Heart Foundation, 40 s, 2018-05-10.
- BHF RevivR stories: "Krystalla & Lee's Story", https://www.youtube.com/watch?v=JCDOaPMSxFY (182 s, 2024-02-01); "Harry's Story", https://www.youtube.com/watch?v=hnL4HBQwcJI (176 s, 2024-02-01); "Donna's Story", https://www.youtube.com/watch?v=EnNfRqCdbWY (123 s, 2025-01-17). All British Heart Foundation channel.
- St John Ambulance, "The Recovery Position - First Aid Training", https://www.youtube.com/watch?v=GmqXqwSV3bo , St John Ambulance, 152 s, 2016-08-25.
- CDC, "How to Use Naloxone Nasal Spray", https://www.youtube.com/shorts/KX4jv_p8Cyc , Centers for Disease Control and Prevention (CDC), 30 s, 2024-04-18 (US product).

Checked and **not recommended as primary** (not the organisation's own channel, or unverifiable): VKGzXUB9FQs (Milwaukee Journal Sentinel), _zJQUUj2Oo8 (ABC 7 Chicago), AWEHRyeQLkw (News4JAX), yYvAIW1zJcM (Hollywood+), mPHD90X4ZJI and yuyVvJ4NUG0 (commercial trainers, 2021 guidelines), 0zOaAA5i340 (UNIT9, 2013); m71yc5m8V38 (oEmbed 403, could not verify). None of these videos was watched; content accuracy against 2025 guidance is unchecked.

### 8. Headline findings

- All five bodies agree on the core adult numbers: 100 to 120 compressions per minute, 5 to 6 cm (2 to 2.4 in), full recoil, minimal pauses, 30:2 if trained and willing, continuous compressions if not, AED as soon as it arrives (E).
- ERC/RCUK 2025's main lay change: call for any unresponsive person first, then check breathing with the call handler; panting and open eyes in athletes can still be arrest; COVID modifications withdrawn.
- AHA 2025's main lay changes: no more two-finger infant compressions (1-hand or two-thumb), AED with attenuator "as soon as possible" for children, compressions with the torso at the rescuer's knee level, naloxone built into the BLS algorithms.
- Children: breaths matter (Kitamura 2010); the US starts with compressions, the UK/Europe with 5 rescue breaths.
- Drowning: ILCOR 2025 says compressions first for laypeople, breaths first for trained duty-to-respond rescuers; UK lay material still leads with 5 breaths for anyone trained.
- US OHCA survival to discharge is 10.5% (CARES 2025, 140,144 arrests); England 30-day survival 9.5%; bystander CPR roughly doubles survival in observational data (Sweden OR 2.15).
- Women in public and Black and Hispanic people in the US are less likely to receive bystander CPR (Blewer 2018, Garcia 2022).
- Harm to people wrongly given CPR is rare (under 2%); rib fractures in real arrests are common (about 55%) and not a sign of failure; no one in the UK has been successfully sued for helping.

### 9. Not read (cited or relevant, but not read by me)

- AHA 2025 Highlights document ("Highlights").
- AHA 2025 Part 1 Executive Summary ("Exec summary AHA").
- AHA/Red Cross 2024 Guidelines for First Aid, PMID 39540278 ("2024 first aid").
- AHA 2024 focused update on drowning (AHA/AAP) ("2024 drowning update"); read only as absorbed into Part 10.
- AHA 2023 focused update on poisoning/opioids (Lavonas et al.) ("2023 toxicology update").
- AHA 2010 guidelines removal of "look, listen, feel" ("2010 C-A-B change").
- ERC Guidelines 2025 Paediatric Life Support chapter itself (read via RCUK adaptation and ERC lay book) ("ERC PLS 2025").
- ERC Guidelines 2025 Executive Summary, Epidemiology, and Systems Saving Lives chapters ("ERC exec/epi/systems").
- ERC Special Circumstances erratum, Resuscitation 2026;228:111314 ("SC erratum").
- ILCOR 2025 PLS and First Aid CoSTR chapters ("ILCOR PLS/FA").
- EuReCa ONE/TWO/THREE papers ("EuReCa").
- UK OHCAO registry annual report itself (numbers taken from RCUK S14) ("OHCAO report").
- Social Action, Responsibility and Heroism Act 2015 text ("SARAH Act").
- US Good Samaritan statutes ("Good Samaritan US").
- PulsePoint and GoodSAM sources ("PulsePoint").
- Red Cross Scientific Advisory Council guidelines database, TLS failure ("Red Cross database").
- AHA Hands-Only CPR web page, Cloudflare block ("Hands-Only page").
- Full texts of all studies S23 to S42 (abstracts only) ("study full texts").

---

## First Aid and CPR, Stage 1 research, Part B: choking, bleeding and injury

Researcher notes, read date 2026-09-24. Everything marked [V] was copied from text I extracted myself (curl plus an HTML or PDF text extractor). No WebFetch text is quoted anywhere in this file, so there are no [T] quotes. Search snippets were used only to find pages; nothing below rests on a snippet.

### 0. What exists in 2025/2026, and what I could read

- **AHA 2025 Guidelines for CPR and ECC** (Circulation, 21 to 22 October 2025) exist. Part 7 (Adult BLS) and Part 6 (Pediatric BLS, with the AAP) contain the choking (FBAO) recommendations. Read in full via Internet Archive captures of cpr.heart.org (ahajournals.org returns 403 to scripts).
- **There is no AHA/Red Cross 2025 first aid part.** cpr.heart.org's First Aid Guidelines page (Wayback 20260704110846) lists the 2024 AHA and American Red Cross Guidelines for First Aid as current, then 2020, 2019, 2015. The 2024 document is the current US first aid guideline. Read in full.
- **ILCOR 2025 First Aid CoSTR** exists (Circulation 2025;152:S250-S282; also Resuscitation). Read in full from ilcor.org's PDF, which is headed "CONFIDENTIAL" and appears to be the accepted manuscript, not the typeset article. Wording should be rechecked against the published version before a lesson quotes it.
- **ERC Guidelines 2025 First Aid** exists (Djärv T et al., Resuscitation 2025;215 Suppl 1:110752; PubMed lists an erratum, Resuscitation 2026;228:111316, dated 21 September 2026, which I have not read). Full text is subscription only and returned 403: **abstract only**. Its content is available through the **RCUK 2025 First Aid Guidelines**, which cite the ERC chapter as their source and were read in full. Important: the ERC 2025 First Aid abstract lists its trauma topics as cervical spinal motion restriction, life-threatening bleeding, open chest wounds, concussion and amputated body parts. **Burns, fractures, sprains, nosebleeds, dental avulsion and eye injury are not topics in the 2025 ERC/RCUK first aid chapter.** For those, UK practice rests on NHS, St John Ambulance, British Red Cross and British Burn Association pages.
- **ERC 2021 First Aid (Zideman et al.)**: not open access, not read.

### 1. Sources read

S1. Hewett Brumberg EK, Douma MJ, Alibertis K, et al. 2024 American Heart Association and American Red Cross Guidelines for First Aid. Circulation 2024;150(24):e519-e579. doi:10.1161/CIR.0000000000001281. Read as the AHA web version at cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines via Wayback 20260502024223. **Full, direct (Wayback 20260502024223).** COR/LOE given below per recommendation.

S2. Kleinman ME, Buick JE, Huber N, et al. Part 7: Adult Basic Life Support: 2025 AHA Guidelines for CPR and ECC. Circulation 2025;152:S448-S478. Read at cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support. **Full, direct (Wayback 20260920001857).** Section 10 (Adult FBAO).

S3. Joyner BL Jr, Dewan M, Bavare A, et al. Part 6: Pediatric Basic Life Support: 2025 AHA and AAP Guidelines. Circulation 2025;152:S424-S447. Read at cpr.heart.org/.../pediatric-basic-life-support. **Full, direct (Wayback 20260917094944).** FBAO section.

S4. AHA newsroom, "Updated CPR guidelines tackle choking response, opioid-related emergencies and a revised Chain of Survival", 22 October 2025. newsroom.heart.org. **Full, direct.**

S5. Djärv T, Douma MJ, Carlson JN, et al. First Aid: 2025 ILCOR Consensus on Science With Treatment Recommendations. Circulation 2025;152:S250-S282. Read as ilcor.org/uploads/FA-2025-COSTR-Full-Chapter.pdf (manuscript marked CONFIDENTIAL). **Full, direct.** GRADE strengths given below.

S6. Olasveengen TM, Mancini ME, Perkins GD, et al. Adult Basic Life Support: 2020 ILCOR CoSTR. Resuscitation 2020;156:A35-A79. PMC7576327. **Partial, direct (FBAO section only).**

S7. Resuscitation Council UK, First Aid Guidelines (2025), authors Klaassen B, Thomas L, Barraclough N, Gilronan C, Mellett-Smith A, Rogers J, Hamilton-Bower I, Benson Clarke A. Published 27 October 2025. resus.org.uk/professional-library/2025-resuscitation-guidelines/first-aid-guidelines. **Full, direct.** Cites ERC 2025 First Aid as its reference.

S8. Resuscitation Council UK, Paediatric Life Support (basic and advanced) guidelines 2025, published 27 October 2025. **Partial, direct (FBAO section).**

S9. RCUK Adult choking algorithm 2025 and Paediatric choking algorithm 2025 (PDFs from resus.org.uk/sites/default/files/2025-10/). **Full, direct.**

S10. RCUK, "RCUK's position on the use of suction-based airway clearance devices in choking individuals". Page states "Reviewed and updated July 2026". **Full, direct.**

S11. ERC, "The ERC Guidelines 2025 on Resuscitation for Everyone" (lay brochure), erc.edu/media/p5ymaeej/gl2025_layperson_book_ipdf-v11-e.pdf. **Full, direct** (first aid pages 52 to 61; thin on trauma).

S12. Djärv T, Rogers J, Semeraro F, et al. European Resuscitation Council Guidelines 2025 First Aid. Resuscitation 2025;215 Suppl 1:110752. **Abstract only.**

S13. NHS pages, all read full, direct: "Cuts and grazes" (last reviewed 2 April 2026); "Burns and scalds" (31 March 2026); "Acid and chemical burns" (5 June 2024); "Sprains and strains" (23 April 2024); "Head injury and concussion" (29 May 2025); "Nosebleed" (5 December 2023); "Knocked-out tooth" (6 February 2025); "Broken arm or wrist" (26 May 2023); "How to stop a child from choking" (28 October 2024). Note: nhs.uk/conditions/first-aid/ now redirects to St John Ambulance's first aid advice pages, and there is no NHS adult choking page (404).

S14. St John Ambulance (England) first aid advice pages, all "Clinically reviewed: 28/04/2025" (Dr Lynn Thomas), i.e. before the October 2025 ERC/RCUK guidelines. Read full, direct: choking; baby-choking; severe-bleeding; life-threatening-bleed; burns-and-scalds; severe-burn; chemical-burn; electrocution; shock; spinal-injury; fractures-and-broken-bones; sprains-and-strains; head-injury; nosebleed; eye-injury.

S15. British Red Cross "learn first aid" pages (redcross.org.uk/first-aid/learn-first-aid/...): choking; bleeding-heavily; burns; broken-bone; strains-and-sprains; head-injury; and the babies-and-children choking-baby page. **Full, direct.** No last-updated date shown.

S16. American Red Cross "learn first aid" pages (redcross.org/take-a-class/resources/learn-first-aid/...): adult-child-choking; infant-choking; bleeding-life-threatening-external; shock; head-neck-spinal-injury; muscle-bone-joint-injury; nosebleeds; burns. **Full, direct** (live pages, 2026-09-24). The old URLs adult-choking, child-choking and bleeding return HTTP 410. Also the burns page as captured in **Wayback 20260117094816**, for comparison.

S17. ACS Stop the Bleed: stopthebleed.org home, /about/, /about/faq/, /get-trained/. **Full, direct.** And "STOP THE BLEED® Course" lay presentation v2.0, © 2019 ACS (PDF created January 2023), stopthebleed.org/media/omalhrif/lay-public-stop-the-bleed-presentation-pdf.pdf. **Full, direct.**

S18. ProtectUK (Counter Terrorism Policing / NaCTSO): "Standards for Public Access Trauma (PAcT) First aid kits: equipment" and "First aid provisions". **Full, direct.** No date shown.

S19. Kragh JF Jr, Walters TJ, Baer DG, et al. Survival with emergency tourniquet use to stop bleeding in major limb trauma. Ann Surg 2009;249(1):1-7. **Abstract only.**

S20. Teixeira PGR, Brown CVR, Emigh B, et al. Civilian prehospital tourniquet use is associated with improved survival in patients with peripheral vascular injury. J Am Coll Surg 2018;226(5):769-776. **Abstract only.**

S21. Scerbo MH, Holcomb JB, Taub E, et al. The trauma center is too late. J Trauma Acute Care Surg 2017;83(6):1165-1172. **Abstract only.**

S22. Richey SL. Tourniquets for the control of traumatic hemorrhage: a review of the literature. World J Emerg Surg 2007;2:28. PMC2151059. **Full, direct.** (Historical section used.)

S23. Dunne CL, Cirone J, Blanchard IE, et al. Evaluation of basic life support interventions for foreign body airway obstructions: a population-based cohort study. Resuscitation 2024;201:110258. **Abstract only.**

S24. Dunne CL, Viguers K, Osman S, et al. A 2-year prospective evaluation of airway clearance devices in foreign body airway obstructions. Resusc Plus 2023;16:100496. **Abstract only.**

S25. Dunne CL, Mannani N, Cirone J, et al. Comparison of foreign body airway obstruction interventions among laypersons: a simulation-based, crossover, randomized controlled trial. Resusc Plus 2025;26:101156. **Abstract only.**

S26. Tian S, Wang Y, Zhang J. Evolution of guidelines for the management of foreign body airway obstruction from 2005 to 2025. World J Emerg Med 2026;17(4):370-372. PMC13395594. **Full, direct.** A secondary letter; used only for the history of AHA's pre-2020 wording, and it contains at least one error (it attributes ILCOR's 2020 wording to "AHA 2020").

S27. Dubois B, Esculier JF. Soft-tissue injuries simply need PEACE and LOVE. Br J Sports Med 2020;54(2):72-73. **Full, direct (Wayback 20241221192948;** bjsm.bmj.com returns 403). An editorial, not a guideline.

S28. NICE NG232, Head injury: assessment and early management, published 18 May 2023. Recommendations chapter. **Partial, direct (sections 1.1 to 1.3 and "Terms used").**

S29. British Burn Association, First Aid Clinical Practice Guidelines, Stiles K and Goodwin N, April 2018. britishburnassociation.org PDF. **Full, direct.**

### 2. Choking (foreign-body airway obstruction, FBAO)

#### 2.1 Recognition: mild versus severe

- AHA 2025 adult (S2, §10.1 synopsis): mild or partial obstruction "often present with coughing and difficulty breathing" [V]; severe or complete obstruction presents "with weak or absent coughing, inability to speak, changes in color (cyanosis), and altered level of consciousness" [V]. AHA 2025 paediatric (S3): mild is "the patient is coughing and making sounds" and severe is "the patient cannot make sounds" [V]. Established.
- RCUK 2025 (S7): "Suspect choking if a person is suddenly unable to speak or cough, particularly if eating." [V] Ask "Are you choking?" The RCUK algorithm (S9) splits on "Effective cough?" YES = mild (encourage cough, keep checking), NO = severe.
- Mild: let them cough and watch. AHA 2025 adult rec 3 (COR 1, LOE C-EO): "For adults with mild FBAO, the person should be allowed to clear the airway by coughing while being observed for signs of severe airway obstruction." [V] Paediatric equivalent is COR 1, C-LD. Rationale: "Coughing can produce high airway pressures" [V].

#### 2.2 Conscious adult with severe obstruction: the big 2025 change

**AHA 2025 (S2, §10.1), the change John asked me to verify:**
- Rec 1, COR 1, LOE B-NR: "For adults with severe FBAO, repeated cycles of 5 back blows (slaps) followed by 5 abdominal thrusts should be performed until the object is expelled or the person becomes unresponsive." [V]
- Rec 2, COR 1, C-EO: "Rescuers should activate the emergency response system for adults with severe FBAO." [V]
- Evidence stated: "There are no RCTs comparing the efficacy or safety of different interventions for FBAO" [V]. A cohort of 709 (Dunne 2024, S23) "showed back blows were associated with improved rates of FBAO relief and fewer injuries compared to abdominal thrusts" [V]. Case reports of fatal injuries from abdominal thrusts "including aortic dissection and gastric rupture" [V]. And, candidly: "The recommendation for alternating sets of 5 back blows and 5 abdominal thrusts is based on the value of consistency with existing infant and pediatric guidelines that use this approach." [V]
- AHA's own press release (S4) says: "Choking guidance for adults was not included in the previous guidelines, and earlier guidance for children called for performing abdominal thrusts only." [V] So the 2020 AHA guidelines had no adult FBAO recommendation; the older AHA teaching (2005/2010, per the secondary letter S26) was abdominal thrusts in rapid sequence. Treat the pre-2020 detail as secondary.
- **Answer to the brief's question: yes. From October 2025 the AHA teaches 5 back blows then 5 abdominal thrusts, repeated, for adults and children over 1 year. US and UK now teach the same sequence for conscious adults.**

**American Red Cross (S16, adult/child choking page, live):** 5 back blows, then 5 abdominal thrusts, repeat "until the person can cough, cry or speak or becomes unresponsive" [V]. The Red Cross has taught 5-and-5 for longer than the AHA (the page does not date this; I did not find a source for the year, so do not state one).

**RCUK 2025 (S7), adult choking, verbatim steps [V]:**
- "Encourage the person to cough."
- "If the person is unable to cough or the cough becomes ineffective, give up to five back blows."
- "If back blows are ineffective, give up to five abdominal thrusts."
- "If choking has not been relieved after five abdominal thrusts, call 999 and continue alternating five back blows with five abdominal thrusts until choking is relieved, or the person becomes unresponsive."
- "Do NOT use blind finger sweeps to try and remove a foreign body from the mouth or airway."
- "Any person successfully treated for choking with abdominal thrusts or chest compressions should be evaluated by a healthcare practitioner since complications and injuries may occur."

Differences worth teaching: UK says "up to" five (stop as soon as it clears); the RCUK text places the 999 call after the first failed cycle, but the RCUK algorithm (S9) shows "Call ambulance service/resuscitation team" as soon as the obstruction is judged severe, with "Single rescuer, use speaker function if on mobile phone". AHA says activate EMS for any severe FBAO (COR 1). The medical-review-after-thrusts line is explicit in RCUK/ERC and in ILCOR's framing; I did not find it as a numbered AHA 2025 recommendation.

**Technique detail (for lesson text):**
- St John Ambulance (S14): "Cough it out", "Hit it out", "Squeeze it out"; back blows with the heel of the hand between the shoulder blades while the person leans forward; abdominal thrusts with a fist "between their belly button and the bottom of their chest" [V], "pull sharply inwards and upwards" [V]; check the mouth after each blow and thrust.
- American Red Cross (S16) adds: bend them so "the upper body is parallel to the ground" [V] for back blows; locate the navel with two fingers and put the thumb side of the fist above it.

#### 2.3 Special adults: pregnancy, large body size, wheelchair

- AHA 2025 (S2 §10.3): if the rescuer cannot encircle the abdomen, "repeated cycles of 5 back blows (slaps) followed by 5 chest thrusts" (COR 1, C-EO) [V]; same for "adults in the late stages of pregnancy" (COR 1, C-EO) [V]. The supportive text mentions wheelchairs as a case where abdominal thrusts may be impossible.
- American Red Cross (S16): chest thrusts if too large to reach around or "obviously pregnant or known to be pregnant" [V]; wheelchair: kneel behind, remove armrests if necessary, chest thrusts if abdominal thrusts are difficult, removing the person from the chair "As a last resort" [V].
- RCUK 2025 First Aid text (S7) does not address pregnancy or obesity. Not found in the UK sources I read.

#### 2.4 Self-rescue

- American Red Cross (S16): call 911 even if you cannot speak ("the open line will cause the dispatcher to send help" [V]), give yourself abdominal thrusts, or press your abdomen against "the back of a chair or a railing" [V], avoiding sharp edges. No AHA 2025 or RCUK recommendation on self-rescue found. Evidence status: expert advice only (no source I read cites data).

#### 2.5 Unresponsive choking person

- AHA 2025 (S2 §10.2): rec 1 (COR 1, C-LD) start CPR "beginning with chest compressions" and activate EMS [V]; rec 2 (COR 1, C-EO) remove any visible foreign body when opening the airway to give breaths; rec 3 (COR **3: Harm**, C-LD): "Blind finger sweeps should not be performed for adults with FBAO." [V] Rationale: "Chest compressions can provide sufficient airway pressure to expel a foreign body." [V]
- RCUK (S7): "If the person becomes unresponsive, start CPR and ensure 999 has been called." [V]
- Paediatric difference: RCUK (S8) says for an unconscious child "Start CPR immediately with five rescue breaths" [V]; AHA 2025 paediatric (S3) says start CPR "beginning with chest compressions (rescuers should not perform pulse check)" [V]. This is the general US/UK difference in paediatric CPR (compressions first versus 5 rescue breaths first) showing up in choking. Hand to Part A/C for consistency.

#### 2.6 Infants (under 1 year) and children

- AHA 2025 paediatric (S3), all COR 1, LOE C-LD: infants, "repeated cycles of 5 back blows alternating with 5 chest thrusts" [V]; children, "repeated cycles of 5 back blows alternating with 5 abdominal thrusts" [V]; "Abdominal thrusts are not recommended in infants, given the potential to cause abdominal organ injury." [V] Blind sweeps: COR 3: Harm.
- **Infant chest thrust technique differs three ways across current sources:**
  - AHA 2025 (S3): "The heel of hand technique for chest thrusts is now recommended for infants with severe FBAO" [V], because it gives greater depth than the old 2-finger technique. Press release (S4): "using the heel of one hand" [V].
  - RCUK 2025 (S8) and St John (S14): "Use the two-thumb encircling technique to perform chest thrusts as advised for chest compressions, but compressing the sternum more sharply." [V]
  - NHS (S13, reviewed October 2024), British Red Cross (S15) and the live American Red Cross infant page (S16): two fingers in the centre of the chest just below the nipple line. The American Red Cross page gives depth "about 1 ½ inches" [V]. So the American Red Cross web page has not caught up with the AHA 2025 heel-of-hand change, and the NHS and British Red Cross pages have not caught up with RCUK's two-thumb technique. A lesson should teach the current guideline for each side and say that some public pages still show two fingers.
- Infant positioning: face down along the forearm or thigh, head lower than the body, head supported (all sources). British Red Cross (S15) explains head-down helps because babies commonly choke on liquids.
- NHS child choking page (S13) says: "It doesn’t matter which order you do them in. If one method doesn’t work, try the other method." [V] This conflicts with every guideline read (all say back blows first). Flag: do not teach "any order".
- St John (S14): "All babies who have received chest thrusts should be seen in hospital." [V] NHS (S13): "Even if the object has come out, get medical help." [V]
- Myth: holding a baby upside down by the feet. British Red Cross (S15): "No. This is not effective." [V] American Red Cross (S16) says the same for children.

#### 2.7 Anti-choking suction devices (LifeVac, Dechoker)

- ILCOR 2020 (S6): "We suggest against the routine use of suction-based airway clearance devices (weak recommendation, very-low-certainty evidence)." [V] Evidence then: a single case series of 9 adults.
- ILCOR 2025 (S5): the FBAO topic moved to the First Aid Task Force; an evidence update found 17 new publications; "Airway clearance devices are increasing in prevalence. Currently, there are no treatment recommendations regarding these devices. An updated SysRev is warranted." [V] The 2020 treatment recommendations are reprinted **without** the suction-device line. So ILCOR has withdrawn its "suggest against" and now has no recommendation either way. Also reprinted: back slaps first (weak, very low certainty), abdominal thrusts if back slaps fail (weak, very low), manual extraction of visible items (weak), against blind finger sweeps (weak), chest thrusts in unconscious patients (weak), bystanders act as soon as possible (weak).
- AHA 2025: adults, COR 2b, LOE C-LD: "Effectiveness and safety of suction-based airway clearance devices have not been established in adults with FBAO. There is insufficient evidence to make a recommendation." [V] Paediatric (COR 2b, C-LD): same, with the note that the only paediatric evidence comes "from voluntary reporting to an industry-sponsored registry" [V].
- RCUK (S8): "RCUK and ERC are unable to make a recommendation for or against the use of suction-based devices" [V]. RCUK position statement (S10, updated July 2026): "RCUK makes no recommendation for or against the use of suction-based airway clearance devices whilst awaiting the findings of an updated ILCOR systematic review." [V] and "established choking treatments for adults and children should be prioritised" [V].
- Evidence in favour (all low level): Dunne 2023 (S24), industry-assisted recruitment of self-reporting users: LifeVac last intervention before relief in 151 of 157 cases; possible adverse events including one oesophageal perforation that could not be attributed. Dunne 2025 (S25): simulation RCT, 132 laypeople on a manikin: relief at one minute 86% LifeVac, 62% Dechoker, 49% abdominal thrusts. Manikin data, not patients.
- Classification: **Contested empirical.** No guideline body recommends for or against as of 2026; all say use back blows and thrusts first.

### 3. Life-threatening external bleeding

#### 3.1 Recognition

- AHA/ARC 2024 (S1 §9.1): life-threatening bleeding recognised by "pooling of blood on the ground, blood that is rapidly flowing or spurting from the wound, bleeding that continues despite direct manual pressure, or bleeding that results in systemic symptoms" [V]. "Uncontrolled bleeding is the most important preventable cause of death in 35% of trauma patients" [V].
- American Red Cross (S16) gives a lay yardstick: life-threatening when the blood present equals "about half of what a soda can contains" [V], less in a small child.
- St John (S14): a life-threatening bleed is "extreme bleeding likely to cause death in minutes" [V]; signs include blood pumping, not slowed by pressure, soaking "through bandage after bandage" [V].

#### 3.2 Direct pressure first

- AHA/ARC 2024 (S1), "First Aid for Severe External Bleeding": rec 1 COR 1, C-LD: "Direct manual pressure should be applied to achieve initial control of external bleeding." [V]
- ILCOR (2020 rec reprinted in 2025, S5): "We recommend that first aid providers use direct manual compression compared with the use of external compression devises or pressure dressings/bandages for severe life-threatening external bleeding (strong recommendation, very low–certainty evidence)." [V] (the "devises" typo is in the source).
- RCUK 2025 (S7): "Apply firm, direct manual pressure to any bleeding injury site." [V]
- Once controlled: pressure dressing (AHA COR 2b C-LD; RCUK "Once bleeding is under control, apply a pressure dressing." [V]).

**Conflict on soaked dressings (small but real):**
- American Red Cross (S16): "Do not remove the original gauze pad and do not stack multiple gauze pads." [V] (you may put one more pad on top and replace that).
- NHS (S13): "If blood comes through the bandage or cloth, apply another bandage or cloth on top" [V].
- St John (S14, severe bleeding): "If blood comes through the dressing, remove it and reapply pressure with a new dressing" [V]. British Red Cross (S15): "Remove the item and replace with a fresh one" [V].
- No guideline I read (AHA 2024, ILCOR, RCUK) addresses this. Contested practice; the lesson should say the point is continuous firm pressure on the bleeding point, and note the difference.

#### 3.3 Elevation and pressure points: dropped by the guidelines, still on some UK pages

- Pressure points. AHA/ARC 2024 (S1): rec 4, COR 2b, C-LD: "The utility of indirect manual pressure (ie, pressure points) for bleeding control is uncertain." [V] Supportive text: no studies in people with life-threatening bleeding; in volunteers, distal pulses returned "in a median of 40 seconds after brachial artery occlusion and 20 seconds of femoral artery occlusion" [V]. ILCOR (S5, 2020 rec): "We recommend against the use of pressure points compared with the use of direct pressure by first aid providers for severe, life-threatening external bleeding (strong recommendation, very low–certainty evidence)." [V] Note the US guideline says "uncertain" while ILCOR says "recommend against": a difference in strength, same direction.
- Elevation. Neither AHA/ARC 2024, ILCOR 2025 nor RCUK 2025 recommends elevating a bleeding limb. **But NHS "Cuts and grazes" (S13, reviewed April 2026) still says:** "If the wound is on your hand or arm, raise it above your head. If the wound is on your lower limb, lie down and raise it above the level of your heart." [V] I found no guideline statement explicitly against elevation in the sources read; ILCOR's 2025 PICO on pressure devices does not include elevation. Classify as: elevation is not in current resuscitation-council guidance; an NHS page still gives it. Do not call it harmful without a source.

#### 3.4 Tourniquets

**Current recommendations:**
- AHA/ARC 2024 (S1), "Life-Threatening Extremity Bleeding That Is Not Controlled by Direct Pressure": rec 1 COR 1, B-NR: "For life-threatening extremity bleeding, a tourniquet should be applied and tightened until the bleeding stops." [V] Rec 2 COR 2a, C-LD: "A commercial tourniquet is probably superior to an improvised tourniquet." [V] Rec 3 COR 2a, C-EO: "If an improvised tourniquet is used, it is reasonable for the tourniquet to be at least 2 in width." [V]
- AHA supportive text: lower mortality with prehospital placement; "In 2 observational studies including 255 people with prehospital tourniquet application by police, EMS personnel, and laypeople, no person had decreased limb function attributed to tourniquet use." [V]; a systematic review found no increase in amputation and low nerve palsy rates; windlass tourniquets "appear to be appropriate for use in children as young as 2 years of age" [V]; "Narrow tourniquets cause more pain and tissue damage and are less effective than wider tourniquets." [V]; "Some training may be required" [V].
- ILCOR (S5): 2020 recs retained after a 2025 evidence update of 29 new articles: "We suggest that first aid providers use a tourniquet in comparison with direct manual pressure alone for severe, life-threatening external bleeding that is amenable to the application of a tourniquet (weak recommendation, very low–certainty evidence)." [V] and tourniquet rather than haemostatic dressing where amenable (weak, very low). Evidence summary: "reduced in-hospital mortality and a lower incidence of shock when tourniquets are used" [V]; commercial beats improvised because they "achieve better arterial occlusion and are simpler to apply" [V]. Children (2021 recs): suggest a manufactured windlass tourniquet (weak, very low); for limbs too small, direct pressure with or without a haemostatic dressing (good practice statement).
- RCUK 2025 (S7): "Apply a tourniquet as soon as possible for life-threatening extremity bleeding that is not controlled by direct manual pressure" [V]; "Place the tourniquet around the traumatised limb 5-7cm above the injury, but not over a joint." [V]; "Tighten the tourniquet until the bleeding slows and stops. This may be painful for the person." [V]; "Write the time the tourniquet was applied." [V]; "Do not release the tourniquet. It should only be released by a healthcare professional." [V]; a second tourniquet above the first may be needed.
- Stop the Bleed lay course v2.0 (S17): "Apply 2 to 3 inches above wound", "Do not place over the elbow or knee", "Tighten tourniquet until bleeding stops", "Do NOT remove the tourniquet", "Can be applied over clothes", "Tourniquets HURT" [V, each]. Lists CoTCCC-recommended models (CAT Gen 6/7, SAM-XT, SOFTT-Wide, RMT, TMT, TX2, TX3). Children: "In all but the extremely young child, the same tourniquet used for adults can be used in children." [V]
- St John (S14): place "close to and above the injury. If you can place it below the elbow or knee, this is best. It should never be placed on a joint." [V]; tighten strap so you "should not be able to get three fingers under the band" [V], then twist the rod until bleeding stops.
- American Red Cross web page (S16): "Apply direct pressure and a tourniquet (if trained) for life-threatening bleeding on a limb." [V] Note the "(if trained)" qualifier; AHA/ARC 2024 guideline text does not require training.

**Placement numbers across sources** (for the lesson): 5 to 7 cm (RCUK), 2 to 3 inches, about 5 to 7.5 cm (ACS Stop the Bleed), "close to and above" (St John), never over a joint (all three). Consistent enough to teach "a hand's width or less above the wound, not on a joint".

**Evidence history, established vs contested:**
- Military: Kragh 2009 (S19, abstract): Baghdad combat support hospital, 2006, 232 casualties with 428 tourniquets on 309 limbs. Use when shock was absent "was strongly associated with survival (90% vs. 10%; P < 0.001)" [V]; prehospital application mortality 11% vs 24% for ED application (P = 0.05); 5 patients indicated but not given a tourniquet had 0% survival; transient nerve palsy in 4 (1.7%); "No amputations resulted solely from tourniquet use." [V]
- Civilian: Teixeira 2018 (S20, abstract): 11 Texas Level I centres, 1,026 peripheral vascular injuries, 181 with prehospital tourniquets; adjusted OR for survival 5.86 (95% CI 1.41 to 24.47); delayed amputation 1.1% vs 1.1%. Scerbo 2017 (S21, abstract): Houston, 306 patients; tourniquet placed only at the trauma centre had 4.5-fold adjusted odds of death from haemorrhagic shock compared with prehospital placement (OR 4.5, 95% CI 1.23 to 16.4). Both observational and retrospective: association, not proof.
- Historical reluctance (Richey 2007, S22, full): the Civil War produced surgeons who decried tourniquets because frightened soldiers misused them; in the First World War Tuffier recommended ambulance crews remove any tourniquet they found; the Second World War US Army review found frequent misuse; Richey argues the blanket admonition never to leave a tourniquet on beyond the prehospital phase "is most likely the source of the modern day hesitancy to utilize tourniquets in any manner" [V]. The reversal came from Iraq and Afghanistan data and TCCC doctrine, then the Hartford Consensus (2013, after Sandy Hook; Jacobs LM et al., abstracts not read, see Not read) and the White House-convened Stop the Bleed campaign (S17 /about/: initiated by "a federal interagency workgroup convened by the National Security Council Staff, The White House" [V], led by ACS COT). "Tourniquet as a last resort" as a phrase: I did not find it in a source I read; do not attribute it.
- Classification: tourniquets for life-threatening limb bleeding by lay people: **Established** in guidelines (AHA COR 1, B-NR), though ILCOR grades its own recommendation weak with very low certainty because the data are observational. A lesson should say both.

**Improvised tourniquets:**
- AHA/ARC 2024: commercial "probably superior" (2a); if improvised, at least 2 inches wide (2a, C-EO). Simulation studies favour commercial.
- ILCOR (S5): commercial preferred over improvised (evidence update); no recommendation specific to improvised use beyond that.
- RCUK 2025 (S7): does not mention improvised tourniquets.
- St John (S14): improvise with a triangular bandage, scarf or tie plus a pen, fork or Tourni-Key as the rod, or a belt, "following the instruction of Ambulance control" [V] if no haemostatic dressing or tourniquet is available.
- Stop the Bleed course lists "Improvised tourniquets?" only as an FAQ heading (S17); its content was not in the slides.
- Classification: **Contested empirical** (whether an untrained bystander's improvised tourniquet helps or merely delays pressure). Consensus direction: pressure first; commercial if available; improvised only as a fallback, wide not narrow.

**"Don't remove the tourniquet":** RCUK and Stop the Bleed say do not release; this is correct advice for the bystander (it is removed or converted by clinicians). Richey (S22) shows the older myth ran the other way ("remove it" or "loosen it periodically"). St John (S14): "Once a tourniquet is applied it should not be loosened as the bleeding will start again." [V]

#### 3.5 Haemostatic dressings and wound packing

- AHA/ARC 2024 (S1): rec 2, COR 2a, C-LD: "A hemostatic dressing can be useful as adjunctive therapy to improve the effectiveness of direct manual pressure." [V] Evidence: an ED RCT of 160 limb stab wounds, bleeding stopped in under 5 minutes in 51.2% with haemostatic dressing plus pressure vs 32.5% with pressure alone.
- ILCOR (S5, 2020 recs, evidence update 2025 found 5 more studies supporting them): "We suggest that first aid providers use a hemostatic dressing with direct pressure as opposed to direct pressure alone for severe, life-threatening external bleeding (weak recommendation, very low–certainty evidence)." [V]; no one brand preferred.
- RCUK 2025 (S7): "Apply a standard or ideally a haemostatic dressing directly to the bleeding injury, then apply firm direct pressure, which may require at some sites the dressing to be packed into the wound. In the absence of any first aid dressings, any clean material can be utilised in this way" [V]. RCUK key point: "an escalating approach with manual direct pressure and, thereafter, haemostatic dressing and/or tourniquets." [V]
- **Wound packing:** AHA/ARC 2024 mentions it only in its Top 10 take-home messages: "apply direct pressure followed by application of a tourniquet or wound packing if the location of the wound is amenable" [V]. It is not a numbered recommendation in §9.1 of the version I read. The American Red Cross web page (S16): "Use wound packing (if trained) for life-threatening bleeding from the scalp, neck, shoulder, groin, and back or from a limb if no tourniquet is available." [V] Stop the Bleed (S17): "If bleeding is from a deep wound, pack gauze tightly into the wound until it stops the bleeding; hold pressure until help arrives" [V]; packing sites include "Neck, armpits, and groin" [V]. St John (S14): haemostatic dressing for "the head, neck, chest or abdomen" [V], hold "for a minimum of five minutes" [V]. Classification: **Established** as a taught skill, but its evidence base for lay people is thin and indirect (Contested empirical on effect size).

#### 3.6 Embedded objects

All sources agree: do not pull it out; pad or press around it (NHS, St John, both Red Crosses). American Red Cross: tourniquet if needed "above the embedded object" [V].

#### 3.7 UK public-access bleed control

- ProtectUK (S18): "the Department of Health and Social Care and the National Counter Terrorism Security Office recommend the adoption of Public Access Trauma (PAcT) First Aid Kits." [V] They are "designed to be used by ANY person, regardless of their level of first aid training" [V]. Standard contents: 4 sets of PPE, 2 shears, **4 large trauma wound dressings, 2 woven triangular bandages, 2 tourniquets**, 2 CPR face shields, 2 marker pens, 2 tourniquet memoire cards. **No haemostatic dressing in the specified PAcT kit.**
- British Red Cross (S15) describes PAcT kits and says to follow the 999 operator's instructions "exactly" [V]; its heavy bleeding steps are pressure, call 999, keep pressure, and it does not describe tourniquet use itself.
- citizenAID: homepage fetched but content was generic; not usable as a source. See Not read.
- US: Stop the Bleed FAQ (S17): courses usually free, most under 90 minutes, hands-on "applying direct pressure, packing a wound, and using a tourniquet" [V]; "Bleeding emergencies can claim a life in 3-5 minutes" [V]; ACS says over 5 million trained. Three actions, taught as the ABCs: Alert (call 911), Bleeding (find it), Compress (pressure, packing, tourniquet).

#### 3.8 Nosebleed

- AHA/ARC 2024 (S1 §9.11): rec 1, COR 1, C-LD: "A person experiencing epistaxis should sit with their head slightly forward with their nostrils pinched for 10 to 15 minutes." [V] Rec 2 (COR 1, C-EO): seek care if it does not stop "after 15 minutes of continuous manual pressure" [V] or they become lightheaded. Anticoagulants/antiplatelets/clotting disorders: seek care unless bleeding has stopped (2a). Ice: "The usefulness of cryotherapy (ice) for managing epistaxis in the first aid setting is unknown." (2b, C-LD) [V]. Pinch the "lower third or soft portion of the nose" [V]; lean forward so blood does not enter the airway or stomach.
- ILCOR (S5): cryotherapy scoping review 2021: "There was insufficient evidence to support a good practice statement." [V]
- NHS (S13): sit, lean forward, "pinch your nose just above your nostrils for 10 to 15 minutes" [V]; go to A&E if it lasts longer than 10 to 15 minutes, after a head blow, weak or dizzy, difficulty breathing. Ice on the bridge "may help" but "the evidence to show it works is not very strong" [V].
- St John (S14): pinch for 10 minutes, repeat up to "two further periods of 10 minutes" [V]; 999 if severe or lasting "more than 30 minutes" [V].
- **Timing difference:** AHA/ARC and NHS: 10 to 15 minutes, seek help after 15; St John: up to 3 × 10 minutes, emergency help after 30. Not a guideline-level conflict (RCUK/ERC 2025 have no nosebleed section).
- Myth, head back: St John: "Do not tell them to lean their head back as this could cause the blood to trickle down the back of their throat and block the airway." [V] American Red Cross gives the same reason for leaning forward.

### 4. Burns

#### 4.1 Cooling: duration is a genuine US/UK difference

- ILCOR (S5, 2021 recs, not updated in 2025): "We recommend the immediate active cooling of thermal burns using running water as a first aid intervention for adults and children (strong recommendation, very low–certainty evidence)." [V] "Because no difference in outcomes could be demonstrated with the different cooling durations studied, a specific duration of cooling cannot be recommended." [V] Young children being cooled should be watched for excessive cooling (good practice statement).
- AHA/ARC 2024 (S1 §9.8): cool immediately, preferably clean running water (COR 1, B-NR); monitor preadolescent children for hypothermia (COR 1, C-LD); "It may be reasonable to cool thermal burns for 5 to 20 minutes." (COR 2b, B-NR) [V]; if no clean running water, "it may be reasonable to cool superficial burns (with the skin intact) with ice wrapped in cloth" (2b, C-LD) [V], limited in supportive text to 10 minutes. Supportive: a meta-analysis of 7 observational studies, 11,383 people, found immediate cooling reduced need for further care; "the ideal cooling duration is unknown" [V].
- NHS (S13): "Hold the burn or scald under cool running water for 20 minutes. Do this as soon as possible, within 3 hours of it happening." [V]
- British Burn Association (S29): "Cool the burn immediately with cool running tap water for 20 minutes and within 3 hours of injury" [V]; "Do not ... Use ice or iced water to cool burns" (bulleted); "Cool the burn but warm the patient" [V].
- St John (S14): "at least 20 minutes or until the pain feels better" [V]. British Red Cross (S15): "at least 20 minutes" [V].
- American Red Cross live page (S16, read 2026-09-24): "Place the burn site under clean, cool, running water for 5-20 minutes" [V]. **The January 2026 Wayback capture of the same page (20260117094816) said "for 20 minutes" and "Never use ice, ice water, or a freezing compress to cool a burn." [V]; both lines have since been replaced.** The live FAQ still says "Should I use ice to cool the burn? No. Use water. Ice may further damage the skin." [V]
- **Flag for the repo:** Cooking Fundamentals lesson 2 (courses/practical-life-and-self-reliance/cooking-fundamentals/lessons/02-how-heat-gets-into-food.md, around line 297) says the Red Cross gives "the same 20 minutes" and quotes the "Never use ice" line from the January 2026 capture. The live American Red Cross page now says 5 to 20 minutes and no longer carries that sentence. The lesson's citation is to the capture, so it is not false, but it describes a page that has changed. Worth a note in docs/QUEUE.md by whoever owns that course.
- Summary: UK = 20 minutes, within 3 hours (NHS, BBA, St John, British Red Cross). US = 5 to 20 minutes (AHA/ARC 2024, American Red Cross). ILCOR = no duration can be recommended. RCUK/ERC 2025 First Aid: no burns section. Classification of duration: **Contested empirical.** Cooling itself: **Established.**

#### 4.2 After cooling

- Remove jewellery and tight items promptly (AHA COR 1, C-EO; NHS; BBA; St John: "before the area begins to swell" [V]); do not remove anything stuck to the burn (NHS, St John, both Red Crosses).
- Cover: UK sources say cling film laid on, not wrapped (NHS: "Do not wrap the cling film around it." [V]; BBA: loose longitudinal strips, not on the face; St John: discard the first two turns; plastic bag for a hand or foot). AHA/ARC 2024: loosely cover with a clean cloth or non-adherent dry dressing (2b, C-EO); American Red Cross page: leave uncovered unless EMS is delayed, then a clean dressing "or plastic wrap" [V]. For small partial-thickness burns managed at home after cooling, AHA 2b B-R: petrolatum, petrolatum-based antibiotic ointment, honey or aloe vera with a non-adherent dressing. Note the UK "no creams" message (NHS "do not put any creams, oils or butter on burns or scalds" [V]) is about first aid before assessment, while the AHA item is for small burns being managed at home after cooling. Different moments, not a direct contradiction, but a lesson must make the distinction clear.
- Blisters: do not burst (NHS, St John). Plasters/sticky dressings: no (NHS, both Red Crosses).
- Pain relief: OTC analgesics reasonable (AHA 2a, B-NR; NHS paracetamol or ibuprofen).

#### 4.3 When to get care

- AHA/ARC 2024 rec COR 1, B-NR: full-thickness burns, or partial-thickness larger than the person's palm, or on "face, hands, feet, or genitals" [V] should be evaluated promptly. Smoke inhalation signs (facial burns, difficulty breathing, singed nasal hairs, soot) activate EMS (COR 1, C-EO). ABA burn-centre referral thresholds cited in the text: over 10% body surface (5% in children).
- NHS (S13): 999 or A&E if very large or deep; on face, genitals or bottom; or caused by acid, chemical or electricity. NHS 111 if unsure; "Call 111 if you need advice for a child under 5 years old." [V]
- British Red Cross: always seek advice for a baby or child.

#### 4.4 Chemical and electrical burns

- Chemical, skin. AHA/ARC 2024 §8.2: immediate decontamination (COR 1, B-NR); "skin exposed to caustic chemical should be irrigated with running water for at least 15 minutes" (COR 1, B-NR) [V] unless local or chemical-specific guidance differs; brush off dry chemical first (2a); remove contaminated clothing and jewellery; EMS for respiratory or systemic symptoms or large exposures. Exceptions such as hydrofluoric acid and phenol noted.
- NHS (S13): call 999; "Put the affected area under cool or lukewarm running water or pour lots of water over it for about 1 hour." [V] BBA (S29): irrigate "for at least 20 minutes" [V] and continue until pain decreases or specialist assessment; do not neutralise. St John: flood "until the ambulance arrives" [V]; "Never attempt to neutralise acid or alkali burns unless you are trained to do so." [V]
- **Duration range for chemical burns: 15 minutes minimum (AHA/ARC, American Red Cross) to about 1 hour (NHS).** All agree: start at once, lots of running water, protect yourself, do not neutralise.
- Eye chemical exposure: AHA/ARC 2024 §8.3: irrigate immediately (COR 1, B-NR) with "a copious amount of tap water for 15 minutes" (COR 1, C-LD) [V]; St John: "at least 20 minutes" [V].
- Electrical: make sure the power is off before touching (American Red Cross; St John, which also describes breaking contact with a dry wooden object if the supply cannot be turned off). Cool the burn (American Red Cross "at least 15 minutes" [V]; BBA 20 minutes within 3 hours). American Red Cross: "Even a small electrical burn can mean significant internal injuries." [V]; be ready for CPR and an AED. NHS: electrical burns go to A&E.

#### 4.5 Burn myths (with sources)

- Butter, cream, toothpaste: British Red Cross (S15): "No. Butter, cream or toothpaste will not cool the area." [V] and oils "retain heat" [V]; toothpaste's menthol gives only a superficial feeling of cooling. American Red Cross: greasy substances "seal in the heat" [V]. NHS: "do not put any creams, oils or butter on burns or scalds" [V].
- Ice: BBA and St John say no ice; American Red Cross FAQ says no ice; AHA/ARC 2024 allows ice wrapped in cloth for superficial burns only when clean running water is unavailable (2b). Nuance to teach: running water first; ice directly on a burn is wrong; the AHA fallback is narrow.
- Cold bath or whole-body cold shower: British Red Cross says focus water on the burn, avoid whole-body cold baths (hypothermia).

### 5. Shock

- AHA/ARC 2024 (S1 §5.2): rec 1 (2a, C-LD) supine if alert; rec 2 (2a, C-LD) recovery position if at risk of airway obstruction or cannot be watched; rec 3 (2b, C-LD): "If there is no evidence of trauma or injury (eg, simple fainting, shock from nontraumatic bleeding, sepsis, dehydration), raising the feet about 6 to 12 in (≈30°–45°) from supine position may be reasonable while awaiting the arrival of EMS." [V]; rec 4 (2b, C-EO) return to supine if leg raising causes pain or worse symptoms. Evidence: passive leg raise effects on vital signs "were temporary, and not all studies show this effect" [V]; arrhythmias and hypoxia have occurred in unstable patients moved into the position.
- ILCOR 2025 (S5): "Optimal position for shock" is listed under "Topics Not Included in the 2025 Review" [V]; last looked at in 2020. I did not read the ILCOR 2020 wording (Not read).
- American Red Cross page (S16) follows the 2024 guideline: raise feet 6 to 12 inches only "if there is no evidence of trauma or injury" [V]; maintain body temperature; "Do not give the person anything to eat or drink" [V]; reassure.
- **UK pages differ:** St John shock page (S14): "Raise their legs, supporting them on a chair." [V] with no trauma exception on that page; St John's severe bleeding page tells you to raise the legs of a bleeding casualty; St John fractures page: do not raise the legs if a leg, pelvis or hip is suspected broken. British Red Cross (S15, bleeding page): "lie them down and lift their feet higher than the rest of their body" [V]. RCUK 2025 First Aid has no shock-position section; its ABCDE lists shock signs (fast or slow heart rate; pale, cool or clammy skin; dizziness or confusion) in the ERC lay brochure (S11).
- **Difference:** US guideline: leg raising only without trauma (weak). UK charity pages: leg raising for shock including from bleeding. Classification: **Contested empirical.**
- Signs of shock (St John, American Red Cross): pale, cold, clammy skin; sweating; fast weak pulse; fast shallow breathing; grey-blue lips; nausea; restlessness or confusion; thirst.

### 6. Fractures, sprains and strains

#### 6.1 Fractures

- AHA/ARC 2024 (S1 §9.7): **no published first aid studies found; all recommendations C-EO.** Rec 1 (COR 1): open fracture with severe bleeding, follow the bleeding recommendations. Rec 2 (COR 1): "If a fractured extremity is blue, purple, or pale, the emergency response system should be activated immediately." [V] Rec 3 (2a): splinting "can be useful to reduce pain, reduce risk for further injury, and facilitate transport" [V]. Rec 4 (2b): treat a deformed limb "in the position found unless straightening the fracture is necessary to facilitate safe and prompt transport" [V]. Rec 5 (2b): cover open wounds with a clean dressing.
- British Red Cross (S15): support above and below the injury with hands, cushion or clothing; "Never attempt to put dislocations back in place" [V]. St John (S14): hold the joint above and below; remove rings and watches; pad; sling for arms, broad-fold bandages for legs; 999 for open fractures, long bones, suspected back, neck or pelvis. NHS broken arm (S13): towel as a sling; ice pack wrapped "for up to 20 minutes every 2 to 3 hours" [V]; remove jewellery.
- Movement test myth: British Red Cross and American Red Cross both say being able to move or stand on a limb does not rule out a fracture; only an X-ray can.

#### 6.2 Sprains and strains: RICE, PRICE, POLICE, PEACE & LOVE

- AHA/ARC 2024 (S1 §9.6): rec 1 (COR 1, C-EO): avoid painful activity, seek medical attention. Rec 2 (2a, C-LD): "apply cold (such as with ice and water surrounded by a damp cloth) to an acute sprain or strain for pain and swelling. Cold application should be limited to 20 to 30 minutes per application without direct contact on the skin" [V]. Supportive: cold improves pain but "has not been demonstrated to improve function or time to recovery" [V]; best cooling from a bag of ice and water in a damp cloth; experts suggest 20 to 30 minutes, 3 to 4 times daily. Rec 3 (2b, C-LD): compression wrap for comfort after ankle sprain, without compromising circulation; compression "did not reduce swelling or pain" in recovery in a systematic review [V].
- ILCOR (S5, 2019 rec, evidence update 2025 found no new studies): "We suggest either application of a compression bandage or no application of a compression bandage for adults with an acute closed ankle joint injury (weak recommendation, very low–certainty evidence)." [V]
- NHS (S13): PRICE for the first 2 to 3 days (Protection, Rest, Ice "for up to 20 minutes every 2 to 3 hours" [V], Compression, Elevate); avoid heat, alcohol and massage for the first couple of days; paracetamol first, ibuprofen gel, then ibuprofen tablets if needed.
- St John (S14): RICE (Rest, Ice max 20 minutes, Comfortable support, Elevate); paracetamol or ibuprofen, no aspirin under 16.
- British Red Cross (S15): RICE; but "Apply the ice pack to the injury for no more than 10 minutes. Anything over 10 minutes can cause further damage." [V]
- American Red Cross (S16): cold pack in a thin towel "for no more than 20 minutes" then wait 20 minutes [V]; heat for an acute injury "is a myth" [V].
- **Ice duration across sources: 10 minutes max (British Red Cross), 20 minutes max (St John, NHS, American Red Cross), 20 to 30 minutes (AHA/ARC guideline).** A lesson should give the guideline range and say sources differ; never ice directly on skin.
- PEACE & LOVE (S27), an editorial by two physiotherapists, not a guideline: acronyms evolved "from ICE to RICE, then on to PRICE and POLICE" [V]. PEACE (first days): Protect, Elevate, Avoid anti-inflammatories, Compress, Educate. LOVE (after): Load, Optimism, Vascularisation, Exercise. On NSAIDs: "Standard of care for soft-tissue injuries should not include anti-inflammatory medications." [V] On ice: "there is no high-quality evidence on the efficacy of ice for treating soft-tissue injuries" [V] and it "could potentially disrupt inflammation" [V]. Rest should be minimised; protection 1 to 3 days.
- **NSAIDs debate:** NHS (S13) recommends ibuprofen gel and, if needed, tablets for sprains; St John offers ibuprofen; AHA 2024 does not address NSAIDs for sprains; Dubois and Esculier argue against routine anti-inflammatories. Classification: **Contested empirical** (short-term pain relief vs possible impaired healing). Ice for sprains: **Contested empirical** (helps pain, no shown benefit to recovery).

### 7. Head injury and concussion

- AHA/ARC 2024 (S1 §9.5; the web version mislabels the table "First Aid for Presyncope"): rec 1, COR 1, B-NR: "A person with signs and symptoms of a concussion should be immediately removed from activity (play/sports) and not allowed to return to activity until evaluated by a health care professional." [V] Rec 2, COR 1, C-EO: EMS for signs of severe head injury "such as loss of consciousness, worsening headache, vomiting, altered mental status, seizures, visual changes, swelling, or deformities of the scalp" [V]. "To date, there is no validated scoring system for concussion identification in the first aid setting." [V]
- RCUK 2025 (S7): suspect concussion with thinking or memory difficulty, physical symptoms (headache, vision change, dizziness, nausea or vomiting, seizures, light or noise sensitivity), emotional or behavioural change; "Remove the person from physical activities." [V]; refer to a healthcare professional.
- NHS (S13) call 999 if, after hitting their head, someone: has been knocked out and not woken; cannot stay awake; has a seizure; "has fallen from a height of more than 1 metre or 5 stairs" [V]; vision or hearing problems; black eye without hitting the eye; clear fluid from ears or nose; bleeding from ears or bruising behind ears; new numbness or weakness; problems walking, balance, understanding, speaking or writing; high-speed injury; a head wound with something in it or a dent; a bruise, swelling or large cut and under 1 year old; changed behaviour. NHS 111 if vomiting, dizzy, on blood thinners, or intoxicated. At home: an adult should stay with them "for at least the first 24 hours" [V]; no contact sport "for at least 3 weeks" [V]; you do not need to keep them awake if tired; paracetamol for headache.
- NICE NG232 (S28), 1.2.2: remote advice services should send an emergency ambulance for: unconsciousness or lack of full consciousness; any focal neurological deficit; suspected complex skull fracture or penetrating injury; any seizure; a high-energy head injury; or no other safe transport. 1.2.3 lists ED referral triggers including any loss of consciousness now recovered, amnesia, persistent headache, "any vomiting episodes since the injury" [V], previous brain surgery, bleeding or clotting disorders, anticoagulant or antiplatelet treatment "(except aspirin monotherapy)" [V], intoxication, safeguarding concerns, irritability or altered behaviour in under-5s. "High-energy head injury" includes "a fall from a height of more than 1 m or more than 5 stairs" [V], pedestrian struck, ejection, diving accident, high-speed collision, bicycle collision. NICE 1.2.1 says sources like St John Ambulance should encourage anyone with concerns after a head injury "to seek immediate medical advice" [V].
- **Painkiller difference:** American Red Cross (S16): "Can I give them painkillers for their headache? No. Painkillers are not advised because they can mask the signs and symptoms of a serious head injury." [V] NHS (S13): paracetamol for headaches after a minor head injury at home. St John and British Red Cross: cold compress for swelling; British Red Cross: cold "for up to 20 minutes" [V]. Classification: practice difference, the NHS advice applies after assessment or where no red flags are present.
- British Red Cross and St John: seek medical advice if over 65, previous brain injury or surgery, on blood thinners, drinking or on drugs, or no one to look after them.

### 8. Suspected spinal injury

- AHA/ARC 2024 (S1 §9.4), intended for the general public: rec 1 (COR 1, C-EO): have the person "remain as still as possible (unless safety considerations warrant movement)" [V] and activate EMS. Rec 2 (COR **3: Harm**, C-LD): "We recommend against routine spinal immobilization for patients with penetrating trauma (eg, gunshot or knife wounds)." [V] Rec 3 (COR 3: Harm, C-LD): "We recommend against the routine use of rigid cervical collars and long spine boards for spinal immobilization by first aid providers." [V] Background: immobilisation practices "have been driven more by legal considerations and unproven theories than by concrete scientific or clinical evidence" [V]; deadoption by EMS "have not been associated with an increase in disabling spinal cord injuries" [V]; penetrating-trauma immobilisation associated with increased mortality. §5.1 rec 5 (positioning): a responsive, normally breathing injured person with a suspected neck, back, hip or pelvic injury "should be left in the position in which they were found ... unless the area is unsafe" [V].
- ILCOR 2025 (S5): new scoping review of 66 studies; collars reduce neck movement "but lead to impaired respiratory and swallowing function as well as increased intracranial pressure" [V]; 5 studies found no difference in spinal cord injuries before and after spinal motion restriction protocols; self-extrication plus collar gave the least neck motion in simulated vehicle extrication. Retained 2015 treatment recommendation: "We suggest against the use of cervical collars by first aid providers (weak recommendation, very low–certainty evidence)." [V] Task force: selective use by trained first aid providers (ski patrols, lifeguards) under existing protocols is not precluded.
- RCUK 2025 (S7): suspect after falls or dives from height, crush by machinery or heavy object, road traffic or sporting accident. "Minimise movement of the neck. If the person is awake and alert, encourage them to self-maintain their neck in a comfortable, stable position." [V] "Never force an uncooperative person into any position" [V]. Unresponsive on their back: kneel behind the head and use "the head or trapezius squeeze technique to maintain a neutral in-line position" [V]; "Airway opening, if required, always has priority over in-line immobilisation" [V]; jaw thrust. Face down: check airway; if it must be opened, log-roll with helpers keeping the neck in line. Specialised responders may use collars under their protocols.
- St John (S14, April 2025): manual head support in neutral, with rolled blankets either side; "no matter how long it takes" [V]; jaw thrust if unresponsive; spinal recovery position if the airway cannot be maintained. American Red Cross (S16): tell them not to move; keep children in car seats; do not remove a helmet unless CPR is needed.
- Myth, "never move someone with a neck injury no matter what": every source makes exceptions: scene danger (AHA, St John, American Red Cross), the airway (RCUK: airway has priority), CPR (American Red Cross, ERC lay brochure "Do not move the person unless they are in an unsafe situation" [V]). Unforced self-positioning by an alert person is now encouraged (RCUK).
- Classification: collars by lay people, **Established** that they are not recommended (US COR 3: Harm; ILCOR weak against). Manual stabilisation technique details (head squeeze vs trapezius squeeze): expert consensus.

### 9. Eye injuries and knocked-out teeth (brief)

#### 9.1 Eye

- AHA/ARC 2024 (S1 §9.10): seek immediate care for high-velocity injuries (grinding, nailing, machinery), penetrating injury, irregular pupil, bleeding or vision loss after trauma (COR 1, C-LD); persistent foreign-body sensation (COR 1, C-LD); contact-lens-related sensation, remove the lens and seek care (COR 1, C-LD); do not rub (COR 1, C-EO); tape a hard shield or "paper cup, or plastic cup over the eye" [V] to stop touching (COR 1, C-EO); for low-energy foreign bodies (dust, eyelash), tears or tap-water or eye-wash irrigation (2a, C-EO).
- St John (S14): embedded or large object, do not remove, cover the eye, get help; chemical splash, "at least 20 minutes" [V] under gently running water, protect the other eye.

#### 9.2 Knocked-out (avulsed) tooth

- AHA/ARC 2024 (S1 §9.9): permanent teeth only; "primary teeth (also known as deciduous teeth or baby teeth) are not typically replanted" [V]. Rinse briefly "(<10 seconds)" [V] and attempt to replant (COR 1, C-EO); seek dental care at once and bring the tooth (COR 1). If not replanted: first choice Hanks Balanced Salt Solution, oral rehydration salt solution, propolis, pre-prepared rice water, or wrap in cling film (2a, C-LD); second, cow's milk or the person's saliva (2b, C-LD); third, another person's saliva, probiotic media, egg white, almond milk (2b, C-EO); "An avulsed permanent tooth should not be stored in tap water." (3: Harm, C-LD) [V]. Storing in the mouth risks choking in young or confused people.
- ILCOR (S5, 2020 rec, 2025 update): HBSS, propolis, ORS or cling film suggested over cow's milk (weak, very low); milk over tap water, buttermilk, castor oil, turmeric or saline (weak, very low); "storage in a cooler temperature favored viability" [V] for most media.
- NHS (S13): hold by the crown, not the root; rinse gently "in milk, saline or saliva" [V]; try to put it back, bite on a clean cloth; otherwise milk or saliva; emergency dentist; "Do not put a baby tooth back in as it could damage the tooth growing underneath." [V]
- US/UK: NHS names milk or saliva as the storage; AHA/ILCOR rank cling film and ORS above milk. Milk remains an acceptable, widely available choice in both.

#### 9.3 Amputated part (ILCOR 2025 new)

- ILCOR 2025 good practice statements (S5): retrieve and transport amputated parts "as soon as possible, preferably to the same health care facility as the injured person" [V]; cool "without freezing" [V] by wrapping in a moist clean cloth or gauze in a watertight bag, then cooling. RCUK 2025 (S7) adds: bag inside another bag with ice or ice water, no direct ice contact, label with name and time.

### 10. Videos (all verified by YouTube oEmbed on 2026-09-24; title and channel as oEmbed returned them)

Choking:
- https://www.youtube.com/watch?v=HGBBu4zr8sM : "First Aid Training: Choking", St John Ambulance (@stjohnambulanceorg). Embedded on SJA's current choking page. UK adult.
- https://www.youtube.com/watch?v=oswDpwzbAV8 : "What to do if Your Baby is Choking - First Aid Training - St John Ambulance", St John Ambulance. Check whether it shows two-finger chest thrusts (older technique) before using.
- https://www.youtube.com/watch?v=gtbUB1XPW_o : "The Chokeables: How to save a choking baby - St John Ambulance", St John Ambulance. Awareness piece.
- https://www.youtube.com/watch?v=WeY4KJUnfMc : "First aid for someone who is choking | First aid training online | British Red Cross", British Red Cross.
- https://www.youtube.com/watch?v=5U_6OYPJ5aw : "First Aid: Choking BSL version", British Red Cross.
- https://www.youtube.com/watch?v=z-3IAG_974o : "Baby first aid: Choking | First aid training online | British Red Cross", British Red Cross. Likely two-finger technique; check.
- https://www.youtube.com/watch?v=8R3RWC-xx1I : "What to Do When an Adult is Choking (Responsive)", American Red Cross (@redcross). US adult 5-and-5.
- Rejected: 41N54YuR3h4 ("St. John Ambulance - 2.5: Choking - Adult") is posted by a personal channel "A. Ryan", not St John. X9BtHyaYIaM ("How to Treat a Choking Baby ... St John Ambulance") is posted by "Faculty of Nursing Minia", a re-upload. WmGRp84tPM8 is Canadian Red Cross (reputable, but Canada, not US/UK). GCxxvi4gJME (American Red Cross instructor material) returned 403 from oEmbed: unverified.

Bleeding:
- https://www.youtube.com/watch?v=7LEqWoK_aS0 : "How To STOP THE BLEED® | ACS", American College of Surgeons. The three techniques; embedded on stopthebleed.org.
- https://www.youtube.com/watch?v=w--RrBo5oGg : "What You Learn in a STOP THE BLEED Course", American College of Surgeons.
- https://www.youtube.com/watch?v=Qx_f7BrYsN8 : "What's in an ACS Stop the Bleed Kit? (Public Kit)", American College of Surgeons.
- https://www.youtube.com/watch?v=xms1_nE9H9w : "STOP THE BLEED Is the "CPR of Bleeding" | STOP THE BLEED® Month 2023 | ACS", American College of Surgeons.
- https://www.youtube.com/watch?v=L6jjyikFwmA : "First aid for someone who is bleeding heavily | First aid training online | British Red Cross", British Red Cross.
- https://www.youtube.com/watch?v=_kwhgKy2vNE : "Everyday First Aid  Bleeding heavily BSL version", British Red Cross.

Burns:
- https://www.youtube.com/watch?v=dQozahCH8IE : "First aid for someone who has a burn or scald | First aid training online | British Red Cross", British Red Cross.

Other: the NHS nosebleed video is hosted on Brightcove (video id 5712761714001), not YouTube; not verified by oEmbed. Also https://www.youtube.com/watch?v=iEXKlzxjXak : "First Aid for Choking Victims of All Ages", The Children's Hospital of Philadelphia (reputable US hospital; check the infant technique before use).

### 11. Headline findings

- **AHA changed choking in October 2025.** Adults and children over 1: repeated cycles of 5 back blows then 5 abdominal thrusts (COR 1, B-NR), replacing abdominal thrusts only. The US and UK now teach the same sequence. Infants: 5 back blows and 5 chest thrusts, never abdominal thrusts; AHA now uses the heel of one hand for infant chest thrusts, RCUK the two-thumb encircling technique, and many public pages still show two fingers.
- **Suction anti-choking devices: no recommendation either way.** ILCOR dropped its 2020 "suggest against" in 2025; AHA (2b) and RCUK (updated July 2026) say evidence is insufficient and standard techniques come first.
- **Bleeding: direct pressure first, then a manufactured tourniquet for life-threatening limb bleeding** (AHA COR 1, B-NR; ILCOR weak, very low certainty), or a haemostatic dressing or wound packing where a tourniquet will not go. Pressure points are out (ILCOR strong against; AHA "uncertain"). Elevation is absent from current guidelines, though the NHS cuts page still advises it.
- **Tourniquet evidence** runs from Kragh 2009 (combat) to civilian cohorts (Teixeira 2018, Scerbo 2017): observational but consistent, with low limb-loss and nerve-injury rates. The old reluctance traces to misuse in the Civil War and world wars and to blanket "remove it" advice.
- **Burn cooling time is a real US/UK split:** UK 20 minutes within 3 hours; AHA/ARC 5 to 20 minutes; ILCOR says no duration can be recommended. The American Red Cross web page changed from 20 minutes to 5 to 20 minutes during 2026, which affects a line in Cooking Fundamentals lesson 2.
- **Spinal injury:** lay first aiders should not use collars (AHA COR 3: Harm; ILCOR weak against). Keep the person still, use manual stabilisation if unresponsive, and let the airway come first.
- **Shock position differs:** AHA/ARC allow leg raising only without trauma (2b); St John and British Red Cross pages still raise the legs, including for bleeding.
- **ERC/RCUK 2025 First Aid has no burns, fracture, sprain, nosebleed, eye or tooth sections**, so UK teaching on those rests on NHS and charity pages, which were mostly reviewed before October 2025 and disagree on small numbers (ice for 10 vs 20 minutes, nosebleed 10 to 15 vs 30 minutes).

### 12. US versus UK/Europe differences

| Topic | US (AHA/ARC 2024-2025, American Red Cross) | UK/Europe (RCUK/ERC 2025, NHS, SJA, BRC) |
|---|---|---|
| Adult choking | 5 back blows then 5 abdominal thrusts, repeated (new 2025) | "Up to" 5 then "up to" 5, repeated; call 999 after first failed cycle (text) or at once (algorithm) |
| Infant chest thrusts | Heel of one hand (AHA 2025); ARC web still two fingers, about 1.5 in | Two-thumb encircling (RCUK 2025, SJA); NHS and BRC pages still two fingers |
| Unconscious choking child | CPR starting with compressions, no pulse check | 5 rescue breaths, then CPR |
| Medical check after abdominal thrusts | Not a numbered AHA 2025 rec | Explicit (RCUK/ERC 2025) |
| Tourniquet wording | "(if trained)" on ARC web page; guideline has no training condition | For anyone, as soon as possible if pressure fails (RCUK); PAcT kits for untrained use |
| Tourniquet placement | 2 to 3 inches above the wound (Stop the Bleed) | 5 to 7 cm above (RCUK); "close to and above", below elbow or knee best (SJA) |
| Haemostatic dressing | 2a adjunct to pressure | "ideally a haemostatic dressing" (RCUK); none in the specified PAcT kit |
| Pressure points | "Uncertain" (2b) | ILCOR strong against |
| Elevation of bleeding limb | Not recommended in guideline | Not in RCUK; still on NHS cuts page |
| Burn cooling | 5 to 20 minutes | 20 minutes, within 3 hours |
| Ice for burns | Wrapped ice for superficial burns if no water (2b) | No ice (BBA, SJA) |
| Chemical burn irrigation | At least 15 minutes | About 1 hour (NHS); at least 20 minutes (BBA) |
| Shock position | Legs up 6 to 12 in only if no trauma | Legs up (SJA, BRC), except suspected leg, hip or pelvic fracture (SJA) |
| Sprain cold | 20 to 30 min per application (AHA); 20 min max (ARC) | 20 min max (NHS, SJA); 10 min max (BRC) |
| Nosebleed | 10 to 15 min pinch; help after 15 | 10 to 15 min (NHS); up to 3 × 10 min, 999 after 30 (SJA) |
| Head injury painkillers | Not advised (ARC web page) | Paracetamol for headache at home (NHS) |
| Tooth storage | HBSS, ORS, cling film ranked above milk | Milk or saliva (NHS) |

### 13. Contested questions, each side in its proponents' terms

1. **Back blows first or abdominal thrusts first (adults).** For back blows first: the only large cohort (Dunne 2024, 709 cases) associates back blows with more relief and no injuries; abdominal thrusts have caused aortic dissection and gastric rupture; one sequence for all ages is easier to teach (AHA 2025 names consistency as a reason). For thrusts first (the older AHA position): abdominal thrusts generate more airway pressure, and a delay spent on blows could cost time. Both sides agree the evidence is observational and very low certainty; ILCOR and AHA now side with back blows first.
2. **Suction devices.** For: registry and simulation data show high relief rates, and laypeople learned LifeVac more easily than thrusts on a manikin (Dunne 2025). Against, or not yet: data are self-reported, industry-assisted or manikin-based; possible harms such as oropharyngeal injury; risk that fetching a device delays proven manoeuvres. All councils now: no recommendation, standard techniques first.
3. **Tourniquets for lay people.** For: military and civilian cohorts show lower mortality with early prehospital use and very little limb loss; death from limb bleeding happens in minutes. Caution: ILCOR grades the evidence very low certainty; misplacement, loose application (which can increase venous bleeding) and use when pressure would have sufficed. Guidelines resolve this as "pressure first; tourniquet when pressure fails or cannot be maintained".
4. **Improvised tourniquets.** For: better than nothing when no commercial device exists; a wide band with a windlass can occlude flow. Against: simulation studies show lower occlusion rates, narrow ones injure; improvising takes time away from pressure. AHA: commercial "probably superior", improvised at least 2 inches wide.
5. **Haemostatic dressings.** For: ED RCT (51% vs 33% stopped under 5 min) and ILCOR evidence update support them. Against: indirect evidence, cost, not in the UK PAcT kit specification; ILCOR prefers a tourniquet where one can be applied.
6. **Passive leg raising in shock.** For: it transiently improves blood pressure and cardiac output in hypotensive people; low cost. Against: effects are temporary and inconsistent, and arrhythmia and hypoxia have been seen in unstable patients; possible harm with unrecognised trauma. AHA: only without trauma, 2b.
7. **Ice on sprains.** For: reduces pain (RCT of 74 patients), and oedema compared with heat. Against: no shown benefit to function or recovery time; Dubois and Esculier argue it may impair repair.
8. **NSAIDs for soft-tissue injury.** For: NHS recommends ibuprofen gel then tablets; effective analgesia. Against: PEACE & LOVE argues inflammation is part of healing and anti-inflammatories should not be standard care.
9. **Cervical collars.** For (limited, trained responders): reduce neck range of motion; ILCOR leaves room for ski patrol and lifeguards. Against: impaired breathing and swallowing, raised intracranial pressure, discomfort and pressure ulcers, no drop in spinal cord injury where collars were abandoned; AHA COR 3: Harm for routine lay use.
10. **Burn cooling duration.** 20-minute side (BBA, NHS): gold standard in UK burns services, the meta-analysis of cooling benefit. 5-to-20 side (AHA/ARC): ILCOR could not show a difference by duration; long cooling risks hypothermia in children. Nobody disputes cooling itself.

### 14. Myths experts correct (with source)

- Tip the head back for a nosebleed: wrong; lean forward (St John, American Red Cross, AHA/ARC 2024, NHS).
- Butter, cream, toothpaste on burns: wrong (British Red Cross, American Red Cross, NHS).
- Ice on a burn: wrong as first aid (BBA, St John, American Red Cross FAQ); AHA allows wrapped ice only for superficial burns when no clean water exists.
- Pressure points stop bleeding: not supported; ILCOR strong recommendation against; pulses return within 20 to 40 seconds in volunteers (AHA/ARC 2024).
- Loosen a tourniquet now and then, or remove it: wrong for a bystander; leave it on for clinicians (RCUK, Stop the Bleed, St John). Historical origin in Richey 2007.
- Tourniquets always cost the limb: not supported (Kragh 2009: no amputations solely from tourniquets; AHA 2024: systematic review found no increase in amputation).
- Sucking out snake venom: "The use of suction to treat snake bites is potentially harmful." (AHA/ARC 2024 §7.4, COR 3: Harm) [V]; RCUK 2025: "never try to suck out the venom" [V]. Tourniquets for snakebite also potentially harmful (AHA). (Snakebite belongs to another part; noted because the brief asked.)
- Never move a person with a neck injury, whatever happens: wrong; move for danger, airway or CPR (AHA 2024, RCUK 2025).
- Hold a choking baby upside down by the feet: wrong (British Red Cross, American Red Cross).
- Blind finger sweeps: harmful (AHA 2025 COR 3: Harm; ILCOR; RCUK).
- If they can move the limb it isn't broken: wrong (British Red Cross, American Red Cross).
- Heat on a fresh sprain helps: "No. This is a myth." (American Red Cross) [V].
- Store a knocked-out tooth in tap water: harmful (AHA/ARC 2024 COR 3: Harm).
- Keep a person with a head injury awake: NHS says "you or your child do not need to stay awake if you're tired" [V] (for a minor injury at home).

### 15. Not read

- [Not read: ERC 2025 First Aid full text] Djärv T et al., Resuscitation 2025;215 Suppl 1:110752. Abstract only; subscription (403). Content taken via RCUK 2025 adaptation.
- [Not read: ERC 2025 First Aid erratum] Resuscitation 2026;228:111316 (21 September 2026). Content unknown; check whether it changes any number above.
- [Not read: ERC 2021 First Aid] Zideman DA et al., Resuscitation 2021;161:270-290. Not open access.
- [Not read: ERC 2025 Adult BLS] Smyth MA et al., Resuscitation 2025;215 Suppl 1:110771 (choking section). RCUK adaptations read instead.
- [Not read: ILCOR 2025 published version] Circulation 2025;152:S250-S282 typeset text; the ilcor.org manuscript was read.
- [Not read: ILCOR 2020 First Aid CoSTR] Singletary EM et al., 2020 (shock position, bleeding SysRev wording).
- [Not read: Hartford Consensus] Jacobs LM et al., Bull Am Coll Surg 2013;98:14-16 and J Am Coll Surg 2013;217:947-953 (abstract empty in PubMed).
- [Not read: Welling 2006 tourniquets] Welling DR et al., J Am Coll Surg 2006;203:106-115 (no abstract returned).
- [Not read: Kauvar 2018 civilian tourniquet review] J Trauma Acute Care Surg 2018;84:819-825.
- [Not read: Couper 2020 FBAO review] Resuscitation 2020;156:174-181.
- [Not read: Norii MOCHI 2024] Resuscitation 2024;199:110198.
- [Not read: TCCC tourniquet guidance] CoTCCC guidelines (only the device list in the Stop the Bleed slides was read).
- [Not read: citizenAID guidance] citizenaid.org homepage fetched but carried no usable clinical content; the citizenAID pocket guide and app were not read.
- [Not read: DoD Stop the Bleed] dodstopthebleed.org.
- [Not read: NICE spinal injury NG41] referenced by NG232 for immobilisation.
- [Not read: AHA 2025 Part 10 special circumstances] for drowning or trauma cross-references.
- [Not read: 2022 burns cooling meta-analysis] the one cited by AHA (7 studies, 11,383 people) and by UK burns networks.
- [Not read: ANZCOR 9.1.3 burns] fetched (HTTP 200) but not processed.

---

## First Aid and CPR, Stage 1 research, Part C: Medical emergencies a bystander meets

Stage 1 research notes for "First Aid and CPR". Researcher: Part C. All sources read 2026-09-24.

Conventions: [V] = text I extracted myself (curl + HTML strip, or pdftotext) and copied exactly. [V-img] = recommendation table published only as an image in the AHA/ARC 2024 guideline; I downloaded the image from the Wayback capture and transcribed it by reading it, so a fact-checker should re-read the image before any wording reaches a lesson. No WebFetch text is quoted anywhere (WebFetch returned 403 on every journal page I tried), so there are no [T] quotes. Working files are in `scratchpad/fa/partC/` and `scratchpad/fa/` (aha24.html, ahatabs/, erc25fa.pdf, ilcor_fa25.pdf).

Quote caveat: in some [V] quotes I typed straight apostrophes where the source uses curly ones (e.g. Epilepsy Foundation "Don’t", "can’t"); words and other punctuation are as extracted.

Claim classes: **Established** (guideline bodies agree, evidence or firm consensus), **Contested empirical** (bodies or studies disagree on a factual question), **Value** (a judgement about risk, scope or who should act).

---

### 1. Sources and what I actually read

#### Primary guidelines

**S1. AHA and American Red Cross 2024 Guidelines for First Aid.** Hewett Brumberg EK, Douma MJ, et al. Circulation 2024;150:e519–e579 (published online 14 November 2024). DOI 10.1161/CIR.0000000000001281. ahajournals.org returned 403 to curl and WebFetch. Read via Wayback snapshot `web.archive.org/web/20260329073336/https://www.ahajournals.org/doi/10.1161/CIR.0000000000001281`. READ LEVEL: full, direct (Wayback 20260329073336) for all prose, including Top 10 take-home messages and Recommendation-Specific Supportive Text for every Part C topic. The recommendation tables (COR/LOE) are images. I read the images for: Positioning for shock (T15), Oxygen (T16), Asthma (T18), Stroke adults (T19), Chest pain (T21), Anaphylaxis (T22), Seizures (T23), Hypoglycemia (T24), Hypothermia (T32), Frostbite (T33). The images for Presyncope (T25), Snake bite (T29), Heatstroke (T34), Oral rehydration (T35), Chemical skin (T37) and eye (T38) were not archived (Wayback 404), so for those topics I have the supportive text only, not the recommendation wording or COR/LOE. The document says it supersedes the 2015 guidelines and the 2019 and 2020 focused updates.

**S2. ILCOR 2025 International Consensus on First Aid Science With Treatment Recommendations.** Djärv T (chair), Douma MJ, et al. Published Circulation 2025;152(16), 21 October 2025, DOI 10.1161/CIR.0000000000001358 (not read at publisher, 403). READ LEVEL: full, direct, from ILCOR's own PDF `https://ilcor.org/uploads/FA-2025-COSTR-Full-Chapter.pdf` (106 pp; header "CONFIDENTIAL", PDF metadata dated 25 March 2025, so this is the accepted manuscript, not the typeset article; wording could differ slightly from the published version). Also read the supplementary Table S1 `https://ilcor.org/uploads/FA-2025-Supplementary-Table-S1.pdf` (full, direct).

**S3. ERC Guidelines 2025 First Aid.** Djärv T, Rogers J, Semeraro F, et al. Resuscitation 2025;215 Suppl 1:110752. DOI 10.1016/j.resuscitation.2025.110752. Publisher sites (resuscitationjournal.com, sciencedirect.com) returned 403; no Wayback capture existed. READ LEVEL: full, direct, but from a third-party-hosted copy of the published PDF at `https://sofia.medicalistes.fr/spip/IMG/pdf/european_resuscitation_council_guidelines_2025_first_aid.pdf` (typeset article, "© 2025 European Resuscitation Council. Published by Elsevier B.V."). FLAG: re-verify every ERC 2025 wording against the publisher version before teaching. Also read the official ERC lay summary "The ERC Guidelines 2025 on Resuscitation for Everyone" `https://www.erc.edu/media/p5ymaeej/gl2025_layperson_book_ipdf-v11-e.pdf` (full, direct; First Aid chapter pp 52 to 61).

**S4. ERC Guidelines 2021: First aid.** Zideman DA, Singletary EM, et al. Resuscitation 2021;161:270–290. DOI 10.1016/j.resuscitation.2021.02.013. READ LEVEL: partial (the "concise guidelines" sections for aspirin, anaphylaxis, hypoglycaemia, heatstroke), direct, from a third-party copy at `https://semicyuc.org/wp-content/uploads/2021/09/RCP-Guias-ERC-2021-08-Primeros-auxilios-Resuscitation-2021.pdf`. Same flag as S3. Used only to say what changed in 2025.

**S5. Resuscitation Council UK, 2025 Resuscitation Guidelines: First Aid.** `https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/first-aid-guidelines`. Published 27 October 2025. READ LEVEL: full, direct. This is the UK adaptation of S3, with UK-specific changes (999, aspirin 300 mg, anaphylaxis posture wording).

**S6. RCUK, Emergency treatment of anaphylaxis: Guidelines for healthcare providers, May 2021.** PDF `https://www.resus.org.uk/sites/default/files/2021-05/Emergency%20Treatment%20of%20Anaphylaxis%20May%202021_0.pdf` and "Introduction and summary of key changes" `.../2021-04/Anaphylaxis%20Summary%20Document.pdf`. READ LEVEL: summary full, direct; main guideline partial (section 2 pathophysiology on posture, section 8.6 prescribing, 8.8 education), direct. Written for healthcare providers, not lay first aiders.

**S7. ILCOR CoSTR, First Aid Cooling Techniques for Heat Stroke and Exertional Hyperthermia**, 2019 November (the 2020 CoSTR). `https://costr.ilcor.org/document/first-aid-cooling-techniques-for-heat-stroke-and-exertional-hyperthermia`. READ LEVEL: full, direct.

**S8. ILCOR 2022 CoSTR summary** `https://ilcor.org/uploads/2022_ILCOR-CoSTR.pdf`. READ LEVEL: partial (Table 36, EvUp on oral dilution), direct.

#### UK public and charity pages (all full, direct unless stated)

- **S9. NHS, Symptoms of a stroke** `https://www.nhs.uk/conditions/stroke/symptoms/` (last reviewed 12 September 2024).
- **S10. NHS, Heart attack** `https://www.nhs.uk/conditions/heart-attack/` (the /symptoms and /treatment URLs redirect here; last reviewed 31 March 2026).
- **S11. NHS, Anaphylaxis** `https://www.nhs.uk/conditions/anaphylaxis/` (last reviewed 21 June 2023; review was due 21 June 2026, so possibly overdue).
- **S12. NHS, Asthma** `https://www.nhs.uk/conditions/asthma/` (asthma-attack URL redirects here; last reviewed 7 April 2025).
- **S13. NHS, What to do if someone has a seizure (fit)** `https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/` (last reviewed 19 December 2023). Also NHS Epilepsy `https://www.nhs.uk/conditions/epilepsy/` (6 March 2025) and NHS Febrile seizures `https://www.nhs.uk/conditions/febrile-seizures/` (21 June 2023).
- **S14. NHS, Low blood sugar (hypoglycaemia)** `https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/`.
- **S15. NHS, Fainting** `https://www.nhs.uk/conditions/fainting/` (17 August 2026).
- **S16. NHS, Poisoning** `https://www.nhs.uk/conditions/poisoning/` (12 June 2025); NHS Carbon monoxide poisoning `https://www.nhs.uk/conditions/carbon-monoxide-poisoning/` (16 December 2025).
- **S17. NHS, Heat exhaustion and heatstroke** `https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/` (28 May 2026); NHS Hypothermia `https://www.nhs.uk/conditions/hypothermia/` (9 June 2023); NHS Frostbite `https://www.nhs.uk/conditions/frostbite/` (9 June 2025); NHS Snake bites `https://www.nhs.uk/conditions/snake-bites/` (17 July 2026).
- **S18. St John Ambulance first aid advice** (each "clinically reviewed" 25 or 28 April 2025): heart attack `https://www.sja.org.uk/first-aid-advice/heart-attack/`, stroke `/stroke/`, anaphylaxis `/anaphylaxis/`, seizure `/seizure/`, asthma attack `/asthma-attack/`, diabetes `/diabetes/`, fainting `/fainting/`, poisoning `/poisoning/`, heatstroke `/heatstroke/`, heat exhaustion `/heat-exhaustion/`, hypothermia `/hypothermia/`, frostbite `/frostbite/` (all under `https://www.sja.org.uk/first-aid-advice/`).
- **S19. British Red Cross** heart attack `https://www.redcross.org.uk/first-aid/learn-first-aid/heart-attack`, stroke `/stroke`, diabetic emergency `/diabetic-emergency` (no page dates shown).
- **S20. British Heart Foundation, Heart attack** `https://www.bhf.org.uk/informationsupport/conditions/heart-attack`.
- **S21. Epilepsy Action, Tonic-clonic seizures (first aid section)** `https://www.epilepsy.org.uk/info/first-aid/tonic-clonic-convulsive-seizures-first-aid` (published April 2026) and First aid hub `https://www.epilepsy.org.uk/info/first-aid`.
- **S22. Asthma + Lung UK, Asthma attacks** `https://www.asthmaandlung.org.uk/conditions/asthma/asthma-attacks`.
- **S23. Diabetes UK, Hypos** `https://www.diabetes.org.uk/about-diabetes/looking-after-diabetes/complications/hypos`.
- **S24. MHRA Drug Safety Update, "Adrenaline auto-injectors (AAIs): new guidance and resources for safe use"**, 27 June 2023, `https://www.gov.uk/drug-safety-update/adrenaline-auto-injectors-aais-new-guidance-and-resources-for-safe-use` (via GOV.UK content API). Also the superseded 2014 article `https://www.gov.uk/drug-safety-update/adrenaline-auto-injector-advice-for-patients` and DHSC "Using emergency adrenaline auto-injectors in schools" 20 September 2017 `https://www.gov.uk/government/publications/using-emergency-adrenaline-auto-injectors-in-schools` (summary paragraph only).
- **S25. UK product leaflets (emc):** EpiPen PIL `https://www.medicines.org.uk/emc/files/pil.4289.pdf` (leaflet "last revised in July 2026"); Jext 300 PIL `https://www.medicines.org.uk/emc/files/pil.5748.pdf` (revised September 2023).
- **S26. Anaphylaxis UK news:** EURneffy approval (24 July 2025) `https://anaphylaxis.org.uk/nasal-adrenaline-spray-approved-uk/`; 1 mg approval (30 June 2026) `https://www.anaphylaxis.org.uk/lower-dose-eurneffy-approved-by-mhra/`.
- **S27. Samaritans** `https://www.samaritans.org/how-we-can-help/contact-samaritan/` (116 123 only).

#### US pages

- **S28. American Stroke Association, Stroke Symptoms** `https://www.stroke.org/en/about-stroke/stroke-symptoms`. 403 to curl; read via Wayback 20260919053155. Full, Wayback.
- **S29. AHA Newsroom, "Stroke warning sign acronyms drive 911 calls, F.A.S.T. leads in symptom recall for public"**, 30 January 2025 `https://newsroom.heart.org/news/stroke-warning-sign-acronyms-drive-911-calls-f-a-s-t-leads-in-symptom-recall-for-public`. Full, direct. (Reports an unpublished conference abstract, ISC 2025 WMP31.)
- **S30. AHA Newsroom, "Knowing stroke signs can save a life when every minute counts"**, 1 May 2026 `https://newsroom.heart.org/news/knowing-stroke-signs-can-save-a-life-when-every-minute-counts`. Full, direct.
- **S31. AHA, Warning Signs of a Heart Attack** `https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack`. Wayback 20260921133040.
- **S32. American Red Cross, Heart attack** `https://www.redcross.org/take-a-class/resources/learn-first-aid/heart-attack`. Wayback 20260414033047.
- **S33. CDC, First Aid for Seizures** `https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html` (page dated May 15, 2024). Wayback 20260915105552.
- **S34. Epilepsy Foundation, First Aid for Seizures, Stay Safe Side** `https://www.epilepsy.com/recognition/first-aid-resources`. Wayback 20260826112324.
- **S35. American Diabetes Association, Hypoglycemia** `https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose`. Partial (key points box), direct.
- **S36. CDC/NIOSH, Heat-related illnesses** `https://www.cdc.gov/niosh/heat-stress/about/illnesses.html`. Wayback 20260920095527. National Weather Service, Heat Cramps, Exhaustion, Stroke `https://www.weather.gov/safety/heat-illness` (full, direct).
- **S37. America's Poison Centers home page** `https://poisoncenters.org/` (full, direct; number and 53 centres only). 988 Lifeline home page (Wayback 20260918053817; number only).
- **S38. US labels (DailyMed):** EpiPen/EpiPen Jr SPL, Viatris, setid 7560c201-9246-487c-a13b-6295db04274a (published Feb 12, 2025); neffy SPL, ARS, setid a1758142-a905-401d-8961-05829f51023a (Apr 14, 2026). openFDA Drugs@FDA: neffy NDA214697 original approval 2024-08-09; Baqsimi NDA210134 original approval 2019-07-24. FDA press release "FDA Approves First Nasal Spray for Treatment of Anaphylaxis", August 9, 2024 `https://www.fda.gov/news-events/press-announcements/fda-approves-first-nasal-spray-treatment-anaphylaxis` (full, direct).

#### Studies (abstract level)

- **S39. Aroor S, Singh R, Goldstein LB.** BE-FAST: Reducing the proportion of strokes missed using the FAST mnemonic. Stroke 2017;48:479–481. PMID 28082668. Abstract only.
- **S40. Pumphrey RS.** Lessons for management of anaphylaxis from a study of fatal reactions. Clin Exp Allergy 2000;30:1144–50. PMID 10931122. Abstract only.
- **S41. Höjer J, et al. (AACT/EAPCCT).** Position paper update: ipecac syrup for gastrointestinal decontamination. Clin Toxicol 2013;51:134–9. PMID 23406298. Abstract only.
- **S42. Morgan AJ, Ross A, Reavley NJ.** Systematic review and meta-analysis of Mental Health First Aid training. PLoS One 2018;13:e0197102. PMID 29851974. Abstract only.

---

### 2. Stroke

**What to do (Established, all bodies):** recognise with a scale, call the emergency number at once, note the time symptoms started, do not give food or drink, stay and monitor.

- AHA/ARC 2024 (S1), Stroke in Adults table [V-img]: "If stroke is suspected, the EMS system should be activated immediately." COR 1, LOE B-NR. Use of "a stroke recognition scale such as the Face, Arms, Speech, Time (FAST) or Cincinnati Prehospital Stroke Scale is recommended" COR 1, LOE B-NR. Measuring capillary glucose if available and not delaying EMS: COR 2a, C-EO (hypoglycaemia is a common stroke mimic). Supportive text [V]: the 2020 ILCOR review evaluated "9 different screening tools reported in 19 observational studies" and FAST "was the only tool intended for administration by laypeople". The figure reproduced in S1 is the ASA "Spot a stroke F.A.S.T." poster (2020).
- Children (S1): FAST is "not validated" in children; paediatric stroke can present as headache, vomiting, altered mental state or seizure, especially under 1 year. No first aid paediatric tool exists.
- ILCOR 2025 (S2), unchanged 2020 recommendation, evidence update found no new relevant articles: stroke scales for adults, strong recommendation, low-certainty evidence; suggests FAST, MASS, CPSS or LAPSS (weak, low); scales with glucose (MASS, LAPSS) when glucose measurement is available, FAST or CPSS when not.
- ERC 2025 (S3) [V]: "Use a stroke assessment scale to decrease the time to recognition and call for help." The evidence section says neither ILCOR review "could find evidence supporting the use of one scale over another" and lists BE-FAST, FAST and CPSS as suitable.
- UK practice: NHS (S9) [V] "The easiest way to remember these symptoms is the word FAST. This stands for: face, arms, speech and time to call 999." NHS also says to call 999 even if symptoms stopped within the last 24 hours and "Do not drive yourself to A&E." RCUK 2025 (S5) names FAST. SJA (S18) and BRC (S19) teach FAST. SJA [V]: "Do not give them anything to eat or drink because it may be hard for them to swallow." NHS relaunched Act FAST in November 2024 (first major update since 2009; from search results and the NHS YouTube upload, not read in full).

**BE-FAST versus FAST (Contested empirical, and a live change in the US):**
- US position changed between January 2025 and 2026. S29 (30 January 2025) [V]: "The American Stroke Association, a division of the American Heart Association, currently utilizes the F.A.S.T. acronym." By 2026 the ASA symptoms page (S28, Wayback 19 Sept 2026) teaches "B.E. F.A.S.T." (Balance loss, Eye/vision changes, Face drooping, Arm weakness, Speech difficulty, Time to call 911), and the May 2026 Stroke Month release (S30) tells the public to "Learn B.E. F.A.S.T. to spot a stroke." I did not find the announcement of the switch or its date. Note for the course: the AHA/ARC 2024 first aid guideline (S1) still names FAST; the ASA's public message now says BE-FAST. UK bodies (NHS, Stroke Association per NHS link, RCUK, SJA, BRC) all say FAST.
- Case for BE-FAST (its proponents' terms): FAST misses posterior circulation strokes. Aroor 2017 (S39): of 736 ischaemic stroke patients at one US centre (2014), 14.1% had no FAST symptom at presentation; of these 42% had gait imbalance or leg weakness and 40% visual symptoms; adding these cut the proportion missed to 4.4%. The authors say revision of public education "may be warranted" only "if validated in a prospective study". S29 notes posterior circulation strokes are about 20% of ischaemic strokes.
- Case for FAST: memorability. The ASA-sponsored randomised online study (S29; 1,900 participants, April to May 2024; unpublished abstract, not peer reviewed) found intention to call 911 rose from about 70% to 90% with either acronym and did not differ; recall of the F, A and S symptoms was higher for F.A.S.T. (70% vs 50% immediately; 50% vs 40% at 30 days). Specificity falls as signs are added (dizziness and vision problems have many benign causes); I did not read a study quantifying this, so do not teach a number.
- ILCOR and ERC take no side (no evidence one scale beats another).

**Aspirin in suspected stroke (Established as practice; Value on emphasis):** no guideline I read recommends that a bystander give aspirin for suspected stroke. The aspirin recommendations (Section 3) are restricted to chest pain. A stroke may be a bleed; aspirin is withheld until imaging. NHS and SJA say nothing by mouth for stroke. I found no single lay-guideline sentence saying "do not give aspirin for stroke", so a lesson should phrase it as "no guideline recommends it, and stroke can be a bleed", citing the scope of the chest-pain recommendations.

**Time of onset / "wait and see" myth:** ASA (S28) [V] "Check the time so you'll know when the first symptoms appeared." and "Call 911 even if the symptoms go away." NHS says the same for 999. ASA: TIAs precede "about 15% of strokes". S30 says "nearly 2 million brain cells die every minute a stroke goes untreated" (ASA figure, 1.9 million on S28). Classify the brain-cell figure as an advocacy estimate (it derives from Saver 2006, not read).

**Oxygen in stroke:** S1 table T16 [V-img]: "It is not beneficial to administer oxygen over room air in the first aid setting for adults experiencing acute stroke." COR 3: No Benefit, LOE B-R. ERC and RCUK 2025: give oxygen only if trained and there are signs of hypoxia.

---

### 3. Heart attack (acute chest pain)

**Recognition (Established):** chest pain or pressure, often spreading to arm(s), neck, jaw, back or stomach; breathlessness; sweating; nausea; light-headedness. Atypical presentations: S1 [V] "some people such as women, people who have diabetes, and older people may experience other symptoms, including dyspnea; pain or discomfort in the back, neck, jaw, or stomach; sweating; nausea; or lightheadedness." ERC 2025 (S3) cites the European Society of Cardiology: a quarter of women report jaw pain, nausea or shortness of breath instead of classic symptoms; people with diabetes may have epigastric pain or breathlessness. NHS (S10) lists "feeling like you have indigestion". American Red Cross (S32) says women may have symptoms "for hours, days or even weeks" before and dismiss them. This is the evidence against the "it's just indigestion" myth.

**Call first (Established):** S1 table T21 [V-img] "In adults with acute chest pain, the emergency response system should be activated to initiate transport to the closest ED by EMS." COR 1, LOE C-LD. Supportive text: EMS transport cuts treatment delay, and "In 1 study, ≈1 in 300 patients with chest pain transported to the ED by private vehicle had a cardiac arrest en route." [V] NHS, BHF, ARC: do not drive yourself.

**Aspirin: what each body says**

| Body | Wording (summary) | Dose | Strength |
|---|---|---|---|
| AHA/ARC 2024 (S1) | first aid providers "may encourage alert adults experiencing nontraumatic chest pain to chew and swallow aspirin (162–325 mg), unless the person experiencing pain has a known aspirin allergy or has been advised by a health care professional not to take aspirin." [V-img, same text also in Top 10 message 3, V] | 162 to 325 mg | COR 2b, LOE B-NR |
| AHA/ARC 2024 (S1) | "If there is any uncertainty that aspirin should be taken, it is reasonable to wait for EMS arrival without administration of aspirin." [V-img] | | COR 2b, C-EO |
| American Red Cross page (S32) | assist a person who is awake, can follow commands, can chew or swallow "and are allowed to have aspirin" to take "two to four low-dose (81-mg) aspirin tablets (162 to 324 mg) or one regular-strength (325-mg) aspirin tablet" [V] | 162 to 325 mg | lay page |
| ILCOR 2025 (S2) | 2019 recommendation unchanged: "we suggest the early administration of aspirin as a first aid intervention compared with late, in-hospital, administration of aspirin" [V] | none stated | weak, very low certainty |
| ERC 2025 (S3) | "Encourage and assist a person with cardiac sounding chest pain in self-administering 150–500 mg of chewable aspirin as soon as possible whilst awaiting transport to hospital (but not to adults with known aspirin allergy)." [V] | 150 to 500 mg | guideline |
| ERC 2021 (S4) | 150 to 300 mg chewable; do not give for "chest pain of unclear or traumatic aetiology"; contraindications included severe asthma and known GI bleeding [V, third-party copy] | 150 to 300 mg | |
| RCUK 2025 (S5) | "self-administering 300 mg of aspirin (ideally chewable or dissolvable) as soon as possible, whilst awaiting emergency assistance (but not to adults with a known aspirin allergy)." [V] | 300 mg | UK adaptation |
| NHS (S10) | "Take aspirin (300mg) if you have any – do not give aspirin to someone who has an aspirin allergy." [V] | 300 mg | lay |
| SJA (S18) | "Give them one aspirin tablet (300mg) and ask them to chew it slowly." and not if under 16 or allergic [V] | 300 mg | lay |
| BRC (S19) | may "offer the person an aspirin tablet to chew slowly"; "should not take more than 300mg in one dose" [V] | up to 300 mg | lay |
| BHF (S20) | "take 300mg aspirin if you have it and you're not allergic" [V] | 300 mg | lay |

Notes:
- The brief's "300 mg UK NHS chew slowly": the current NHS page (reviewed 31 March 2026) says "Take aspirin (300mg)" with no "chew slowly"; "chew it slowly" is St John Ambulance and BRC wording.
- The AHA background text says "162 to 324 mg" while the recommendation says "162–325 mg": both appear in S1. The difference is 4 × 81 mg vs one 325 mg US tablet.
- Framing differs: AHA/ARC and ERC/RCUK frame it as encouraging or assisting self-administration ("encourage", "assist ... in self-administering"), not the bystander dosing someone. Classify as **Value** (scope of a lay first aider) that happens to be consistent across bodies.
- ERC widened the range to 150 to 500 mg in 2025 (Table 1 of S3 does not list aspirin as a change; the dose change is visible by comparing S3 with S4).
- Under-16 exclusion: SJA says do not give to under 16s (Reye's syndrome concern, not stated on page); the guidelines speak only of adults.
- Evidence (S1 supportive text): two observational studies, 2,122 patients with MI, higher survival with early aspirin (median 1.6 h from pain onset) than late (3.5 h), no difference in complications; "no study has evaluated the risks of aspirin administration in the first aid setting." ILCOR 2025 (S2) evidence update found none relevant but noted one study of increased bleeding in chest pain patients given aspirin and/or clopidogrel who turned out to have type A aortic dissection. S2 Table S1 lists aortic aneurysm or dissection as a knowledge gap, and the minimal effective dose as unknown.

**Contested (aspirin by bystanders):**
- For: cheap, time-critical, low complication rate, ILCOR and every major body endorse it for suspected cardiac chest pain in an alert adult without allergy.
- Against or cautious: the evidence is observational, from health professionals, not first aid; the harm case is chest pain that is not MI (aortic dissection, bleeding risk, anticoagulant users, a stroke presenting with chest symptoms); AHA/ARC therefore make it COR 2b and say waiting is reasonable if in doubt. ERC 2021 had excluded chest pain "of unclear" origin; 2025 drops that phrase and uses "cardiac sounding".
- Do not delay calling for aspirin: every source puts calling first.

**Other points:** assist with own GTN (nitroglycerin) spray or tablets (ERC, RCUK, NHS, SJA, BRC, ARC). Position: sitting on the floor, knees bent, back supported (NHS, SJA, BRC). Oxygen: S1 says the AHA does not recommend oxygen in health care settings for ACS patients who are not hypoxic.

---

### 4. Anaphylaxis

**Recognition (Established):** sudden airway (throat or tongue swelling, hoarse voice, stridor), breathing (wheeze, fast breathing, persistent cough) or circulation (faint, pale or blue, cold clammy skin, confusion, collapse) problems, often with skin signs, after exposure to a trigger. ERC 2025 lists stridor, wheeze, flushing, hives, cold clammy skin, faintness, abdominal pain, vomiting, diarrhoea, recent exposure. ILCOR (S2) keeps the 2010 good practice statement that first aid providers "should not be expected to recognize the signs and symptoms of anaphylaxis without repeated episodes of training and encounters with victims of anaphylaxis" [V]. MHRA 2023 (S24) [V]: AAIs "should be used without delay if anaphylaxis is suspected, even if in doubt about the severity of the event".

**Adrenaline (Established):**
- S1 table T22 [V-img]: self-administer autoinjector COR 1, B-NR; "A first aid provider should assist a person experiencing anaphylaxis to use their autoinjector if assistance is required." COR 1, C-EO; call EMS COR 1, C-EO; repeat dose "may be considered" if no response to the first dose and "arrival of EMS will exceed 5 to 10 minutes" COR 2b, B-NR. Supportive text: 7% to 18% of people with anaphylaxis need more than one dose; about 500 to 1000 US deaths a year.
- ILCOR 2025 (S2): 2015 recommendation unchanged, "We suggest a second dose of epinephrine be administered by autoinjector to adults and children with severe anaphylaxis whose symptoms are not relieved by an initial dose (weak recommendation, very low–certainty evidence)." [V]
- ERC 2025 (S3): IM adrenaline via autoinjector into the outer thigh, 0.15 mg ages 1 to 5, 0.3 mg ages 6 to 12, 0.5 mg adults (WAO dosing 0.01 mg/kg to max 0.5 mg); "Give a second dose of adrenaline, if symptoms persist 5 min after administration." [V] If no autoinjector, "use a device for intranasal administration." RCUK 2025 (S5): second dose after five minutes "ideally in the opposite leg." [V]
- UK public: NHS (S11) [V] "If your symptoms have not improved after 5 minutes, use a 2nd adrenaline auto-injector." MHRA 2023 (S24) [V] "use your second AAI if you haven't improved after 5 minutes". The superseded MHRA 2014 advice said 5 to 15 minutes (S24, 2014 article).
- So: US AHA/ARC 5 to 10 minutes and conditional on EMS delay; UK and Europe 5 minutes flat.

**Carry two (Established in UK/Europe; US recommends two in kits):** MHRA 2023 [V] "prescribers should prescribe 2 AAIs" and "you should always carry 2 AAIs at all times"; NICE "following advice from MHRA" (S6 section 8.6). NHS (S11) "carry 2 adrenaline auto-injectors with you at all times". AHA/ARC 2024 first aid kit table lists epinephrine autoinjector "Minimum 1, recommended 2 doses" [V]. Anaphylaxis UK says the same two-device rule applies to EURneffy (S26).

**Device technique:**
- Outer thigh, through clothing: EpiPen US label (S38) [V] "Place the orange needle end against the outer thigh, through clothing if needed." Jext PIL (S25): "designed to inject through the clothes".
- Hold times differ by device: EpiPen (US label, S38) [V] "Hold the EpiPen or EpiPen Jr auto-injector in place for a full 3 seconds following activation (count slowly 1, 2, 3)." EpiPen UK PIL (S25, revised July 2026) [V] "Hold firmly against thigh for 3 seconds." Jext (S25, revised Sept 2023) [V] "Hold the injector firmly in place against the thigh for 10 seconds (a slow count to 10) then remove." then massage 10 seconds. EpiPen was formerly 10 seconds (brief says so; I did not read an older label, so treat "formerly 10 s" as unverified). Lesson line: follow the instructions printed on the device.
- Emerade: MHRA recalled Emerade 150 (March 2020) and 500 (May 2020) and issued a Class 1 recall of Emerade 300 and 500 in May 2023 for potential device failure (GOV.UK search results list, titles and dates only). MHRA 2023 names the UK products as "Epipen or Jext". Treat Emerade as not currently an option to teach; not verified further.

**Posture (Established in UK/Europe; lighter in US):**
- RCUK 2021 (S6) [V]: "Changes in posture from supine to standing or sitting upright have been associated with cardiovascular collapse and death during anaphylaxis." Keeping the patient flat, with or without legs raised, "will maximise venous return"; those with mainly breathing problems may prefer semi-recumbent; pregnant patients on the left side. Cited: Pumphrey 2003 "Fatal posture in anaphylactic shock" (J Allergy Clin Immunol 112:451–2; title only, a letter, no abstract; this is the "empty ventricle" paper) and Mullins 2016. Pumphrey 2000 (S40, abstract): UK register, about 20 fatal reactions a year, median time to arrest 30 min food, 15 min venom, 5 min iatrogenic; adrenaline given before arrest in only 14% of fatal cases.
- MHRA 2023 (S24) [V]: "if you're not already lying down, lie down flat and raise your legs (if you're pregnant, lie on your left side)"; "stay lying down even if you feel better"; "if you struggle to breathe, you can gently sit up - don't change position suddenly"; "do not stand up even if someone encourages you to".
- NHS (S11) [V] "Lie down – you can raise your legs, and if you're struggling to breathe, raise your shoulders or sit up slowly" and "Do not stand or walk at any time, even if you feel better."
- ERC 2025 (S3) concise [V] "Ensure that the person remains in a seated or lying position." Evidence text: supine with raised legs, or sitting with legs stretched if breathing problems, "(expert opinion)". RCUK 2025 (S5) [V] lying down "unless there are breathing difficulties, in which case they may sit up with their legs extended."
- SJA (S18): lie down with legs raised; sit up if breathing difficulties.
- AHA/ARC 2024: no posture recommendation in the anaphylaxis section.
- Evidence class: expert opinion built on case series (Pumphrey). Contested only in weight, not direction.

**Antihistamines (Established as not first line):** RCUK 2021 (S6 summary) [V] "Antihistamines are considered a third-line intervention and should not be used to treat Airway/Breathing/Circulation problems during initial emergency treatment." Corticosteroids no longer advised for routine emergency treatment. AHA/ARC 2024 bee sting text: antihistamines for local itching only.

**Nasal adrenaline (new since 2024):**
- US: FDA approved neffy (epinephrine nasal spray) 9 August 2024 for patients at least 30 kg (S38; FDA release, openFDA NDA214697). The current label (S38) adds neffy 1 mg for 15 to under 30 kg and says a second dose in the same nostril with a new device "starting 5 minutes after the first dose" [V]. FDA based approval on pharmacokinetic studies in 175 healthy adults, not in anaphylaxis (FDA release).
- UK: MHRA approved EURneffy 2 mg on 18 July 2025 (date from search snippet; Anaphylaxis UK article dated 24 July 2025 confirms approval, not the day) for 30 kg or more; 1 mg for children aged 4 and over weighing 15 to 30 kg approved by June 2026, expected on prescription late 2026 (S26).
- ERC 2025: intranasal device if no autoinjector. AHA/ARC 2024 said intranasal forms were not available in the US or Canada when the guideline was written.

**Schools:** from 1 October 2017 schools in England may buy spare AAIs without prescription for pupils at risk whose own device is unavailable or not working (S24, DHSC guidance). A 2021 GOV.UK news item said AAIs "could become available in public places" (title only).

---

### 5. Asthma attack

- AHA/ARC 2024 (S1, T18) [V-img]: assist a person with asthma who is having difficulty breathing with their own prescribed bronchodilators, COR 1, B-R; inhaler with spacer or nebulizer preferred to inhaler alone, 2a, B-R; improvised spacer (500 mL plastic bottle or 150 mL paper cup) if no commercial one, 2a, B-R. Supportive text: salbutamol causes no clinically significant change in heart rate, blood pressure or potassium.
- ILCOR 2025 (S2): 2015 recommendation unchanged, trained first aid providers assist with a bronchodilator (weak, very low). 2022 scoping review found no significant harm from bronchodilators even in undifferentiated breathing problems.
- UK dosing: NHS (S12) [V] "sit up straight" and for a blue reliever "take 1 puff every 30 to 60 seconds until you feel better, up to a maximum of 10 puffs." Call 999 if worse at any time, not better after the maximum, or no inhaler; if no better after 10 minutes and no ambulance, repeat. Asthma + Lung UK (S22) the same.
- **New in UK (2024 onward):** people on AIR (anti-inflammatory reliever) or MART inhalers follow a different attack plan. NHS (S12) [V]: "take 1 puff every 1 to 3 minutes until you feel better, up to a maximum of 6 puffs." Asthma + Lung UK the same. SJA says its 10-puff advice "is not for patients on a Maintenance and Reliever Therapy (MART) plan." NHS also says people "should not be given a blue reliever inhaler to use on its own". Teach: follow the person's own action plan; the 10-puff rule is for a blue salbutamol reliever.
- US: no lay puff count found in S1; the AHA text is "as needed".

---

### 6. Seizures

**AHA/ARC 2024 (S1, T23) [V-img]:**
1. Activate EMS for first-time seizure; lasting more than 5 minutes; more than 1 seizure without return to baseline between; in water; with injury, breathing difficulty or choking; infant under 6 months; pregnancy; or no return to baseline within 5 to 10 minutes after the seizure stops. COR 1, C-LD.
2. Minimise injury "by helping the person to the ground, placing the person on their side in the recovery position, and clearing the area around them." COR 1, C-EO.
3. Stay with the person. COR 1, C-EO.
4. Febrile seizure: antipyretics are "not effective for stopping a seizure or preventing a subsequent febrile seizure." COR 3: No Benefit, B-R.
5. "The person having the seizure should not be restrained." COR 3: Harm, C-EO.
6. "Nothing should be put in the mouth and no food, liquids, or oral medicines should be given to a person who is experiencing a seizure or who has decreased responsiveness after a seizure." COR 3: Harm, C-EO.
Supportive text [V]: seizures usually stop within 1 to 2 minutes; febrile seizures affect 2% to 4% of children, mostly 6 months to 2 years; "Although swallowing the tongue will not occur, people can aspirate blood, saliva, food, or other items during a seizure and the postictal period."

**UK (S13, S21, S18):** NHS: only move if in danger, cushion head, loosen tight neckwear, "turn them on to their side after their convulsions stop", note start and finish time, nothing in the mouth "including your fingers". Call 999 if first seizure, longer than usual or more than 5 minutes if unknown, not regaining consciousness or repeated, seriously injured, difficulty breathing. NHS Epilepsy page adds 3 or more seizures in 24 hours. Epilepsy Action (S21) CARE steps and the same criteria plus "three or more seizures in the past 24 hours"; [V] "Do not hold the person down or put anything in their mouth". SJA adds: call if unresponsive more than 10 minutes after the seizure; filming the seizure can aid diagnosis.

**US–UK difference (Contested in detail, small):** when to turn the person on their side. CDC (S33) and Epilepsy Foundation (S34, "Stay. Safe. Side.") and AHA/ARC say turn onto the side during the seizure (mouth to the ground); NHS and Epilepsy Action say after the jerking stops. Both agree on the recovery position once convulsions stop.

**Tongue myth (Established correction):** Epilepsy Foundation (S34) [V] "Don't worry – a person can't swallow their tongue during a seizure." Also AHA text above. CDC: do not put anything in the mouth, "This can hurt their teeth or jaw." CDC also: do not give mouth-to-mouth during the seizure.

**Febrile seizures:** NHS (S13) usually 2 to 3 minutes, rarely over 10, ages 6 months to 6 years; call 999 if first, over 5 minutes, breathing difficulty, one-sided, sleepy over 1 hour after, or more than 1 in 24 hours. NHS [V] "do not try to lower your child's temperature by undressing them or sponging them with cold water". SJA seizure page conflicts for small children [V]: "Try to cool them by taking off bedding and strip them of a single layer of clothing, but make sure they don't get cold." Flag this UK inconsistency; AHA/ARC evidence (antipyretics do not prevent seizures) sides with not fussing over temperature.

**Rescue medication (Value, scope):** NHS and Epilepsy Action: many people have a care plan with emergency medicine (buccal midazolam is common in the UK; not named on pages read) to be given only by someone trained who follows the plan. Epilepsy Foundation: "Rescue medicines can be given if prescribed by a healthcare professional." CDC: call 911 for a person with diabetes who loses consciousness, or pregnancy.

---

### 7. Hypoglycaemia

- AHA/ARC 2024 (S1, T24) [V-img]: awake and able to swallow, encourage oral glucose, COR 1, C-LD; activate EMS if unable to swallow, has a seizure, or "does not improve within 10 minutes of oral glucose administration", COR 1, C-EO; glucose tablets preferred over gel or dietary sugar, 2a, B-NR; dietary sugars as alternative, 2a, C-LD; children awake but unwilling: slurry of granulated sugar and water under the tongue, 2b, C-LD; "Oral glucose should not be administered to people who are not awake or not able to swallow." COR 3: Harm, C-EO. Supportive text: "≥20 g oral glucose" restores glucose; Table 8 lists foods with at least 15 g simple sugar (1 tablespoon sugar or honey, 6 to 8 oz juice or non-diet soda, 15 to 25 jellybeans).
- ILCOR 2025 (S2): unchanged. Glucose tablets for conscious adults and children, strong recommendation, low-quality evidence (2015). Dietary sugars if no tablets, weak. Oral (swallowed) glucose, strong, very low certainty; against buccal alone, weak; oral plus buccal gel if no tablet; sublingual for uncooperative children, weak. Evidence update: most recover after 15 to 20 g.
- ERC 2025 (S3) and RCUK 2025 (S5): glucose or dextrose tablets 15 to 20 g by mouth if awake and able to swallow; alternatives "a handful of sugary sweets or 50–100 ml of fruit juice or sugar containing soda"; repeat if not improving after 15 min; child uncooperative: half a teaspoon (2.5 g) sugar under the tongue; unresponsive, no oral sugar; glucagon if prescribed and trained (injection or nasal).
- US 15-15 rule: ADA (S35) "Use the 15/15 rule of 15g fast-acting carbs/15 minutes". Hypoglycaemia below 70 mg/dL (US) or 4 mmol/L (UK).
- UK: NHS (S14) small glass of juice or sugary drink, 5 glucose tablets, 4 large jelly babies or 2 tubes of gel; check after 10 to 15 minutes. Diabetes UK (S23) 15 to 20 g, retest after 10 to 15 minutes. Unconscious: nothing by mouth, recovery position, glucagon if available and you know how, call 999 if no glucagon or no recovery in 10 minutes, or if they have been drinking alcohol (NHS).
- Glucagon products: nasal glucagon (Baqsimi) FDA approved 24 July 2019 (openFDA). In the UK, Diabetes UK (S23) says only one glucagon injection kit (GlucaGen Hypo Kit) is available and the Ogluo pen was discontinued September 2025; Baqsimi did not appear on emc search on the read date. Do not tell UK learners nasal glucagon is available without checking.
- BRC (S19) [V]: giving sugar to someone whose blood sugar is actually high "is unlikely to do any harm" (the classic "if in doubt give sugar" logic, conscious people only).
- Unconscious person of unknown cause: no sugar or anything by mouth (AHA COR 3: Harm; ERC; NHS). Established.

---

### 8. Fainting (presyncope and syncope)

- ILCOR 2025 (S2), 2019 recommendations unchanged after evidence update: [V] "We recommend the use of any type of physical counter-pressure maneuver by individuals with acute symptoms of presyncope due to vasovagal or orthostatic causes in the first aid setting (strong recommendation, low-certainty and very low–certainty evidence)." Lower-body manoeuvres preferred over upper-body and abdominal (weak, very low).
- AHA/ARC 2024 (S1) supportive text (table image not archived): first goal is a safe position to prevent injury (injuries in about 30% of syncope ED admissions, severe in about 5%); meta-analysis of 11 trials, PCMs cut syncope risk by about 50%; squatting with leg crossing beat handgrip in one small study; PCMs not advocated for cardiac causes and may delay care. Table 9 of S1 lists the manoeuvres (not read, image).
- Shock position, T15 [V-img]: for fainting with no trauma, "raising the feet about 6 to 12 in (≈30°–45°) from supine position may be reasonable while awaiting the arrival of EMS" COR 2b, C-LD; return to flat if it causes pain or worse symptoms.
- NHS (S15): if about to faint, lie down with legs raised or sit with head between knees; cross legs while standing or rock on toes; clench fists. If fainted and breathing normally, lay on back and raise legs; if more than 28 weeks pregnant, on the side. Call 999 if someone "is not breathing", "cannot be woken up within 1 minute", "has not fully recovered or has difficulty with speech or movement", has chest pain or palpitations, "has seriously hurt themselves before or after fainting", is having a seizure, or fainted while exercising or lying down [V] (corrected 2026-09-24, Stage 4 lesson 2: the earlier list here dropped the first and third items). Otherwise: "Non-urgent advice: See a GP if: you have fainted" [V]; the page does not mention NHS 111. ERC 2025 dropped presyncope from scope (Table 1).

---

### 9. Poisoning

- **Call for advice:** US Poison Help 1-800-222-1222 (53 accredited centres, America's Poison Centers, S37; also in S1 table: Canada 1-844-764-7669). UK: 999 if unconscious, not breathing, seizing, severe breathing difficulty; otherwise NHS 111 if unsure (S16). TOXBASE is the UK National Poisons Information Service database for health professionals (from the brief; not read).
- **Do not induce vomiting (Established):** NHS [V] "do not try to make someone sick if you think they've swallowed something harmful – they could choke and stop breathing"; SJA "Do not try to make them vomit." Ipecac: AACT/EAPCCT 2013 (S41) "The routine administration of ipecac at the site of ingestion or in the emergency department should definitely be avoided." (abstract, [V]).
- **Nothing to eat or drink vs dilution (Contested, small):** NHS and SJA: do not give anything to eat or drink. ILCOR 2010, restated in the 2022 evidence update (S8) [V]: "Administration of a diluent in first aid may be considered if a caustic substance has been ingested, if advised to do so by a healthcare provider. (weak recommendation, very low–certainty evidence". ILCOR 2025 lists oral dilution among topics not reviewed since 2020. Reconciled line: do not give drinks unless a poison centre or health professional tells you to.
- **Activated charcoal:** NHS lists "a charcoal drink" as hospital treatment. I did not read a current first aid guideline statement on bystander charcoal; say "given in hospital, not a first aid measure" and cite NHS only.
- **Chemical in eye or on skin (AHA/ARC 2024 supportive text):** remove contaminated clothing, irrigate with large amounts of running water; observational study: irrigation within 10 minutes for at least 15 minutes reduced full-thickness burns; brush off dry powder before water; eye: 15 minutes of continuous irrigation appeared effective; call poison centre. (Table wording not read.)
- **Carbon monoxide (NHS S16):** colourless, odourless; headache, dizziness, nausea, weakness, confusion, breathlessness; symptoms better outside the building. Stop appliance, go outside, get advice, 999 if breathing difficulty, confusion, unconscious. Rescuer safety first. CO alarms in rooms with fuel-burning appliances.
- **Opioids** belong to Part A or another part; ERC and AHA both now include naloxone.

---

### 10. Heat illness

**Heat exhaustion vs heatstroke (Established):** heat exhaustion: sweating, pale clammy skin, headache, dizziness, nausea, cramps, thirst, normal mental state; should improve within 30 minutes of cooling and fluids (NHS S17). Heatstroke: altered mental state (confusion, agitation, seizure, collapse), very high temperature (ERC: core above 40 °C; NWS: above 103 °F), skin may be hot and dry or still sweating.

**Cooling heatstroke:**
- ILCOR 2020 (S7) [V]: "We recommend immediate active cooling using whole body (neck down) water immersion techniques (1-26°C; 33.8-78.8°F) until a core body temperature of less than 39°C (102.2°F) is reached (weak recommendation, very low certainty evidence)." Any other active cooling if immersion is unavailable. For classic (non-exertional) heatstroke in adults and all heatstroke in children: no recommendation for or against a specific technique. Technical remark: colder water associated with faster cooling; justification: if no core temperature, continue immersion until symptoms resolve "or for a reasonable amount of time, such as 15 minutes". ILCOR 2025 lists heatstroke cooling as not re-reviewed since 2020 (EvUp 2022).
- AHA/ARC 2024 (S1) supportive text [V]: "There was no significant difference in the rate of body temperature reduction across water temperatures of 2 to 26° C (36° F–79° F), indicating that the act of immersion, rather than water temperature, is most important." Note this conflicts with ILCOR's technical remark that colder water cooled faster. Recommendation table not archived.
- ERC 2025 (S3) concise [V]: "Use whole body (neck down) cold water (1 to 26 °C) immersion until the core temperature falls below 39 °C"; alternatives include tarp-assisted cooling oscillation (TACO), ice sheets, ice packs, fan, cold shower, cooling vests, mist and fan; if no core temperature "continue cooling for 15 min or until neurological symptoms resolve, whichever is first"; [V] "Remember: cool first, transfer second." Active cooling "if core temperature >40 °C". FLAG: the ERC evidence section says immersion "at 1 to 6 °C" (probably a typo for 1 to 26) and lists "ice water immersion (15 °C)" oddly; re-check against publisher before citing. It also gives a target cooling rate of 0.15 °C per minute for exertional heatstroke survival without complications.
- RCUK 2025 (S5): "The gold standard is to use whole-body (neck down) cold water (1-26°C) immersion until the core temperature falls below 39°C."
- UK lay pages lag: NHS (S17) [V] "Wrap the person in a cool, wet sheet, or fan them or sponge them down with cold water while you wait for help to arrive." SJA similar, plus cold packs to armpits and neck. CDC/NIOSH (S36): "With a cold water or ice bath, if possible", then wet skin, cold cloths, fanning, ice to head, neck, armpits, groin. NWS (S36): cool cloths or bath; fans may heat people when heat index is above the high 90s °F; [V] "Do NOT give fluids." for heatstroke.

**Contested:** immersion vs other methods for classic heatstroke in older people (heat waves): ILCOR makes no recommendation; immersion is impractical and evidence comes from young athletes and recruits. Water temperature: ILCOR says colder is faster, AHA says temperature does not matter within 2 to 26 °C. Measuring core (rectal) temperature is outside most lay first aid.

**Heat exhaustion and fluids:** NHS: move to a cool place, remove unnecessary clothing, plenty of water or isotonic sports drink or oral rehydration salts, spray or sponge and fan, cold packs in armpits or neck; better within 30 minutes. AHA/ARC 2024 supportive text (ILCOR 2023 reviews): carbohydrate-electrolyte drinks (4% to 9% glucose) gave the highest net fluid balance; all beverages except beer were equal or better than water on some end points. CDC/NIOSH (S36) [V] "Avoid salt tablets." (under heat cramps). SJA: "drink to thirst".

---

### 11. Cold: hypothermia and frostbite

**Hypothermia (AHA/ARC 2024, T32) [V-img]:**
- Protect from further heat loss: move to warm place, remove saturated clothing, passive rewarming with blankets, active rewarming if available. COR 1, B-R.
- If cannot be moved: insulate from ground, cover head and neck, wind shield with plastic or foil plus dry insulating layer. COR 1, C-LD.
- Decreased responsiveness, confusion, mumbling, pallor, cyanosis, frozen skin: activate EMS while rewarming. COR 1, C-EO.
- Cold stress or mild hypothermia, alert and able to swallow: "it is recommended to provide high-calorie foods or drinks." COR 1, C-EO.
- Body-to-body rewarming not better than other active methods (3: No Benefit, C-LD); small glove or boot heat packs ineffective as sole method (3: No Benefit, C-EO).
- "Heat sources, rubbing, and massage should not be applied to the extremities of a person with hypothermia." COR 3: Harm, B-NR.
- Warm shower or warm water immersion potentially harmful with decreased responsiveness (after drop, hypotension, falls, drowning). COR 3: Harm, C-LD.
- NHS (S17): warm non-alcoholic drink and sugary food if fully awake; do not use a hot bath, hot water bottle or heat lamp; do not rub limbs; do not give alcohol. SJA: warm room to about 25 °C; foil blanket; do not give your own clothes. ERC 2025: insulation, wind protection, gentle wet clothing removal, ground insulation. Handle gently (ERC special circumstances, not read; the "rough handling triggers VF" teaching is in the ERC Special Circumstances chapter, not verified here).
- Myth: alcohol warms you. NHS and SJA both say do not give alcohol; SJA [V] "it will make hypothermia worse".

**Frostbite (AHA/ARC 2024, T33) [V-img]:**
- "The preferred method for warming frostbitten tissue is clean lukewarm water immersion at 37°C to 40°C (99°F–104°F)." COR 1, C-LD.
- "Frostbitten tissue should be rewarmed at the earliest opportunity, as long as there is no risk of refreezing." COR 1, C-LD.
- Otherwise rewarm in warm room air or against the person's own warm skin; seek prompt medical attention; remove rings and constricting items; core rewarming first for moderate to severe hypothermia; avoid walking on frozen feet; loose bulky dry dressings between digits (all COR 1); ibuprofen may be reasonable (2b, C-EO); do not debride blisters (3: No Benefit).
- NHS: do not rub; no fire, radiator, hot water bottle or heat lamp; warm (not hot) water; paracetamol for pain, no aspirin for under 16s. SJA: water "around 40°C". NHS does not mention refreezing; the AHA does.
- Myth: rub frostbite with snow or hands. Corrected by NHS, SJA, AHA ("rubbing" is COR 3: Harm for hypothermic extremities).

---

### 12. Bites and stings (brief)

- **Bee and wasp stings (S1 supportive text):** remove a honeybee stinger quickly; plucking vs scraping made no difference to wheal size; venom delivery continues while the stinger is in (up to about 30 to 60 seconds). Cold packs and oral analgesics for local pain; antihistamine or topical steroid for itch has evidence only from mosquito bites. About 60 US deaths a year from stings, mostly anaphylaxis. Stings to the eye itself need medical care.
- **Snakes:** AHA/ARC 2024 (S1 supportive text, North America only): seek prompt care; minimise exertion; remove rings; no ice, no suction (with or without incision), no electric shock, no tourniquet; pressure immobilisation "not currently recommended for use in North America" because more than 95% of bites are from pit vipers with cytotoxic venom. ERC 2025 and RCUK 2025 (adder, the UK's only venomous snake): keep calm, immobilise the limb, remove tight items; [V, RCUK] "Do not apply a pressure dressing, ice, heat, or use tourniquets." and "Do not cut the wound and never try to suck out the venom." ERC notes elapid bites with non-swelling neurotoxic venom "may benefit from pressure immobilisation" (the Australian practice; ANZCOR guideline not read). NHS (S17): keep still, lie in the recovery position, paracetamol not aspirin or ibuprofen, photograph from a distance, do not try to catch or kill it. ILCOR 2025 lists pressure immobilisation as not reviewed since 2021.

---

### 13. Mental health crisis and suicidal thoughts (brief)

- ERC 2025 (S3) added "Suicidal thoughts" (new since 2021, Table 1). Concise guidance: ask "Are you alright?", ask directly about suicidal thoughts and plans (how, where, when), summarise their feelings back, give hope; if concrete threats or plans, tell them you are getting help and call the emergency number. Evidence text: about 720,000 suicide deaths a year worldwide; two meta-analyses show Mental Health First Aid training raises knowledge and reduces stigma, but a Cochrane review could not show long-term effects; talking through suicidal ideas "may decrease the risk of suicide"; five principles (calm, safety, self and community efficacy, connectedness, hope).
- RCUK 2025 (S5): same, and if no warning signs, encourage professional support "(e.g. GP, suicide hotline such as Samaritans)".
- Morgan 2018 (S42): 18 trials, 5,936 participants; small to moderate gains in knowledge (d 0.31 to 0.72), confidence and intentions; small stigma reductions; small increase in help given (d = 0.23); quality of help unclear.
- ILCOR: I found no mental health or suicide topic in the ILCOR 2025 First Aid CoSTR (S2) nor in the AHA/ARC 2024 guideline (S1). The brief's "ILCOR's inclusion of mental health first aid training" is not supported by what I read; the inclusion is ERC's. Correct this in the lesson plan.
- Lines: US 988 Suicide and Crisis Lifeline (call or text 988; S37). UK and Ireland Samaritans 116 123, free from landlines and mobiles (S27).
- Asking directly about suicide does not plant the idea: commonly taught; ERC supports "talking through" but I did not read a primary study on this. Classify as Contested empirical until a source is read.

---

### 14. Oxygen and pulse oximetry by first aiders (contested)

- AHA/ARC 2024 (T16) [V-img]: usefulness of oxygen for breathlessness or hypoxia in first aid "is unknown" (2b, C-LD); no benefit in stroke (3: No Benefit, B-R); potentially harmful to give oxygen to a person with known COPD above a saturation of 92% (3: Harm, C-LD). Take-home message 10: do not give oxygen above 92% in known COPD.
- ILCOR 2025 (S2) good practice statements: trained providers titrate to 88% to 92% in confirmed COPD; do not withhold high flow if saturation below 88%; pulse oximetry should not replace physical assessment.
- ERC 2025 and RCUK 2025: if trained, give oxygen to someone breathless or cyanosed, titrate to 94% to 98% (88% to 92% in COPD). This is more permissive than AHA/ARC.
- Pulse oximeters overestimate saturation in people with darker skin (S1: Black patients had almost 3 times the frequency of missed hypoxaemia). Established.

---

### 15. Drowning prevention (pointer only)

ERC 2025 and RCUK 2025: untrained people should not enter the water; reach or throw a flotation aid from land; call for help. ERC: drowning is the fourth leading cause of death in children aged 5 to 14 in Europe; about 300,000 drowning deaths a year worldwide, children under five nearly a quarter. Resuscitation detail belongs to Part A.

---

### 16. Reputable free videos (all verified 2026-09-24 via YouTube oEmbed; title and channel as returned)

| Topic | URL | Title (oEmbed) | Channel |
|---|---|---|---|
| Stroke, UK | https://www.youtube.com/watch?v=2p0rUIKkX50 | Face or Arm or Speech, at the first sign, it's Time to call 999 \| Act FAST \| NHS | NHS |
| Stroke, UK BSL | https://www.youtube.com/watch?v=SY14OSblksQ | When Stroke Strikes Act F.A.S.T. \| NHS \| BSL version | UK Health Security Agency |
| Stroke, US | https://www.youtube.com/watch?v=C8EO3SM0Y_w | B.E. F.A.S.T. to spot a stroke | American Heart Association |
| Stroke, first aid | https://www.youtube.com/watch?v=PhH9a0kIwmk | What To Do If Someone Has A Stroke, Signs & Symptoms - First Aid Training - St John Ambulance | St John Ambulance |
| Heart attack, UK | https://www.youtube.com/watch?v=gDwt7dD3awc | Heart Attack Symptoms & How to Treat a Heart Attack - First Aid Training - St John Ambulance | St John Ambulance |
| Heart attack, UK | https://www.youtube.com/watch?v=bw_Vv2WRG-A | What is a heart attack | British Heart Foundation |
| Heart attack, US | https://www.youtube.com/watch?v=Z5QJ7tz2OTc | How to Help Someone Experiencing a Heart Attack | American Red Cross |
| Anaphylaxis, UK regulator | https://www.youtube.com/watch?v=K4GRcY3QIl8 | MHRA Adrenaline Auto Injector Safety Campaign | MHRAgovuk |
| Anaphylaxis, UK | https://www.youtube.com/watch?v=zRSxAL-twdc | Severe allergic reaction and anaphylaxis: first aid steps and key action | British Red Cross |
| Asthma, UK | https://www.youtube.com/watch?v=pt53nH_dX1Y | What to do during an asthma attack \| Asthma + Lung UK | Asthma + Lung UK |
| Seizure, UK | https://www.youtube.com/watch?v=MgpkYo1jNWw | What to do when someone has a tonic-clonic seizure: CARE | Epilepsy Action |
| Seizure, US | https://www.youtube.com/watch?v=XyDHG02phs0 | #StaySafeSide: Michael's Basketball Team Learns Seizure First Aid | Epilepsy Foundation |
| Seizure, UK | https://www.youtube.com/watch?v=Ovsw7tdneqE | What To Do If Someone Has A Seizure - First Aid Training - St John Ambulance | St John Ambulance |
| Diabetic emergency | https://www.youtube.com/watch?v=L06DNMRcy98 | What To Do If Someone Is Having A Diabetic Emergency - First Aid Training - St John Ambulance | St John Ambulance |
| Fainting | https://www.youtube.com/watch?v=ddHKwkMwNyI | Fainting Causes & Treatment - First Aid Training - St John Ambulance | St John Ambulance |
| Poisoning | https://www.youtube.com/watch?v=b2ieb8BZJuY | How To Treat Poisoning, Signs & Symptoms - First Aid Training - St John Ambulance | St John Ambulance |
| Heatstroke | https://www.youtube.com/watch?v=jvGC_dQJUtE | How To Treat Heat Stroke, Signs & Symptoms - First Aid Training - St John Ambulance | St John Ambulance |
| Heat exhaustion | https://www.youtube.com/watch?v=R6VdoV8dZRc | How To Treat Heat Exhaustion, Signs & Symptoms - First Aid Training - St John Ambulance | St John Ambulance |
| Frostbite | https://www.youtube.com/watch?v=e3eimijVeLw | How to Treat Frostbite - First Aid Training - St John Ambulance | St John Ambulance |

Caveats: I verified that each video exists and its title and channel; I did not watch them. The SJA heatstroke video will teach wet sheet and fanning, not immersion. The AHA B.E. F.A.S.T. video reflects the 2026 ASA message, not the 2024 AHA/ARC guideline wording. Avoid the "NHS Stroke Awareness: Act Fast Campaign Ad" upload (1Hg4VglrAp4): it is posted by an agency channel (HereandNow365), not NHS.

---

### Headline findings

1. The current US first aid guideline is still the AHA/American Red Cross 2024 guideline (Circulation, 14 Nov 2024); ILCOR's 2025 First Aid CoSTR changed nothing in Part C topics (every medical-emergency recommendation was carried forward after evidence updates). ERC 2025 and RCUK 2025 (27 Oct 2025) are the newest European and UK texts.
2. Aspirin for suspected heart attack is endorsed everywhere for alert adults without allergy, but the dose and firmness differ: US 162 to 325 mg, COR 2b, "may encourage", wait if uncertain; ERC 2025 150 to 500 mg (up from 150 to 300 mg in 2021); UK RCUK/NHS/SJA/BHF 300 mg. No guideline recommends aspirin for suspected stroke.
3. Stroke: FAST is the UK standard and the scale named in AHA/ARC 2024; the American Stroke Association switched its public message to B.E. F.A.S.T. between January 2025 and 2026, despite its own January 2025 study finding F.A.S.T. better remembered. ILCOR and ERC find no evidence to prefer one scale.
4. Anaphylaxis: adrenaline in the outer thigh first; second dose at 5 minutes in UK/Europe vs "5 to 10 minutes if EMS is delayed" in AHA/ARC; carry two (MHRA); lie flat, sit only if breathing is hard, never stand (RCUK 2021, MHRA 2023, NHS); antihistamines are third line. Hold times: EpiPen 3 seconds, Jext 10 seconds. Nasal adrenaline is now licensed (FDA Aug 2024; MHRA July 2025, children 15 to 30 kg by June 2026).
5. Heatstroke: whole-body cold-water immersion (1 to 26 °C) until below 39 °C, or 15 minutes if no thermometer, "cool first, transfer second" (ILCOR 2020, ERC/RCUK 2025, AHA text). UK NHS and SJA lay pages still teach wet sheets and fanning.
6. UK asthma advice now splits: blue reliever 1 puff every 30 to 60 s up to 10; AIR/MART inhalers 1 puff every 1 to 3 min up to 6.
7. Hypoglycaemia: 15 to 20 g glucose tablets preferred (strong recommendation), recheck at 10 to 15 minutes, call if not improving within 10 to 15 minutes; never anything by mouth if not fully awake.
8. Mental health first aid and suicide crisis are an ERC 2025 addition, not an ILCOR or AHA/ARC topic.

### US vs UK/Europe differences (Part C)

| Topic | US (AHA/ARC 2024, US bodies) | UK / Europe |
|---|---|---|
| Emergency number | 911; Poison Help 1-800-222-1222 | 999 or 112 (UK), 112 (EU); NHS 111 for advice |
| Stroke mnemonic | Guideline: FAST or CPSS. ASA public message since 2025/26: B.E. F.A.S.T. | FAST (NHS, RCUK, SJA, BRC); ERC lists BE-FAST, FAST, CPSS as suitable |
| Aspirin dose | 162 to 325 mg (2 to 4 × 81 mg or 1 × 325 mg), COR 2b | ERC 150 to 500 mg; UK 300 mg ("chew slowly" SJA/BRC) |
| Anaphylaxis repeat dose | if no response and EMS more than 5 to 10 min away (2b) | after 5 min if no improvement (ERC, RCUK, MHRA, NHS), opposite thigh (RCUK) |
| Anaphylaxis posture | not addressed in AHA/ARC 2024 | lie flat, legs raised, sit only for breathing, never stand (RCUK 2021, MHRA 2023) |
| Nasal adrenaline | neffy, FDA 9 Aug 2024 | EURneffy, MHRA 2025; ERC: use if no autoinjector |
| Seizure side position | turn on side during seizure (CDC, EF, AHA) | on side after convulsions stop (NHS, Epilepsy Action) |
| Seizure call criteria | adds infant under 6 months, pregnancy, in water (AHA; CDC) | adds 3 or more seizures in 24 h (NHS, Epilepsy Action); unresponsive over 10 min (SJA) |
| Asthma puffs | "as needed", spacer preferred | 1 puff every 30 to 60 s up to 10 (blue); AIR/MART 1 puff every 1 to 3 min up to 6 |
| Hypoglycaemia units | below 70 mg/dL; 15-15 rule (ADA) | below 4 mmol/L; 15 to 20 g; nasal glucagon not evidently available in UK |
| Oxygen by first aiders | usefulness unknown; harmful above 92% in COPD | if trained, titrate 94 to 98% (88 to 92% COPD) |
| Snake bite | no pressure immobilisation in North America | adder: immobilise, no pressure dressing; Australia elapids: pressure immobilisation |
| Heatstroke lay advice | CDC/NIOSH: cold water or ice bath if possible | NHS/SJA: wet sheet, sponge, fan; RCUK 2025: immersion is gold standard |
| Suicide line | 988 | Samaritans 116 123 |

### Contested questions, each side in its proponents' terms

1. **Should a bystander give aspirin?** For: mortality benefit of early aspirin in MI, low complication rate, every guideline endorses it (ILCOR weak, very low certainty). Against or cautious (AHA/ARC COR 2b, ILCOR knowledge gaps): no first-aid-setting safety data; harm if the pain is aortic dissection or the person has bleeding risk; if uncertain, wait for EMS. Framing everywhere is assisting self-administration.
2. **FAST or BE-FAST?** BE-FAST: catches posterior strokes FAST misses (14.1% missed vs 4.4%, Aroor 2017, retrospective single centre). FAST: easier to remember, same 911 intent (ASA 2025 randomised online study, unpublished), fewer false alarms; ILCOR finds no evidence to prefer either.
3. **Oxygen by first aiders.** ERC/RCUK: trained first aiders with pulse oximetry can titrate safely and help hypoxic people. AHA/ARC: no first-aid-setting evidence of benefit, harm in COPD and no benefit in stroke.
4. **Two auto-injectors.** UK/MHRA: 7% to 18% need a second dose and devices fail or misfire, so carry two. Critics (not read; cost and adherence arguments are common) are not represented in what I read; AHA/ARC kit standard "minimum 1, recommended 2".
5. **Antihistamines in anaphylaxis.** RCUK: third line, never for airway, breathing or circulation problems; they delay adrenaline. Their residual role: skin symptoms after stabilisation.
6. **Cooling in classic heatstroke.** Immersion is fastest and ILCOR/ERC/RCUK call it gold standard for exertional heatstroke. For elderly classic heatstroke ILCOR makes no recommendation; lay UK pages teach wet sheets and fanning, which are practical at home. Water temperature: ILCOR says colder is faster; AHA says temperature within 2 to 26 °C does not matter.
7. **Sugar for an unconscious person of unknown cause.** Settled: no (AHA COR 3: Harm; ERC; NHS). The only live question is sublingual sugar in a responsive but uncooperative child (ILCOR weak yes).
8. **Posture in anaphylaxis.** UK/Europe: flat is safer, based on fatal case series (Pumphrey). Evidence is expert opinion; the practical tension is breathlessness, resolved by "sit up slowly, lie down again when you can".
9. **Seizure: side position during or after convulsions.** US bodies turn during; UK after. Both aim at airway protection without restraint.
10. **Febrile seizure cooling.** NHS: do not undress or sponge. SJA: remove a layer of clothing. AHA/ARC: antipyretics do not stop or prevent febrile seizures.
11. **Oral dilution for swallowed caustics.** NHS/SJA: nothing by mouth. ILCOR (2010, unchanged): may be considered if a health professional advises it.

### Myths experts correct (with source)

- "A person having a seizure can swallow their tongue." Epilepsy Foundation (S34); AHA/ARC 2024 supportive text.
- "Hold the person down / put something in their mouth." AHA/ARC 2024 COR 3: Harm for both; NHS; Epilepsy Action; CDC.
- "Make them vomit after a poisoning / give syrup of ipecac." NHS; SJA; AACT/EAPCCT 2013 ipecac position paper.
- "Rub frostbite (with snow or hands)." NHS; SJA; AHA/ARC 2024 (no rubbing or massage of hypothermic extremities, COR 3: Harm).
- "Alcohol warms you up." NHS hypothermia and frostbite; SJA ("it will make hypothermia worse").
- "Take salt tablets in the heat." CDC/NIOSH "Avoid salt tablets."
- "It's just indigestion." NHS lists an indigestion-like feeling as a heart attack symptom; AHA/ARC and ARC on atypical symptoms in women, diabetics and older people.
- "Wait and see if the stroke passes." ASA "Call 911 even if the symptoms go away."; NHS call 999 if signs in the last 24 hours even if stopped.
- "Stand up and walk it off after an EpiPen." MHRA "do not stand up even if someone encourages you to"; NHS "Do not stand or walk at any time, even if you feel better."
- "Antihistamine first, EpiPen if it gets worse." RCUK 2021: antihistamines third line; MHRA: use the AAI even if in doubt.
- "Suck out snake venom / cut / tourniquet." AHA/ARC 2024; ERC 2025; RCUK 2025; NHS.
- "Give a sugary drink to anyone who collapses." AHA/ARC 2024 COR 3: Harm for oral glucose if not awake or cannot swallow.

### Not read

- Pumphrey 2003 "Fatal posture": title only (J Allergy Clin Immunol 2003;112:451–2, PMID 12897756); letter, no abstract.
- Mullins 2016 Australian anaphylaxis fatalities: citation only.
- AHA/ARC 2024 tables for Presyncope (T25), Snake bite (T29), Heatstroke (T34), Oral rehydration (T35), Chemical skin (T37) and eye (T38): images not archived.
- AHA/ARC 2024 at publisher (ahajournals.org): 403; read via Wayback only.
- ILCOR 2025 First Aid CoSTR as published in Circulation (read ILCOR's March 2025 manuscript PDF instead).
- ERC 2025 First Aid and ERC 2021 First aid at publisher: 403; read via third-party copies. ERC 2025 Special Circumstances (hypothermia handling, anaphylaxis, poisoning): not read.
- 2020 ILCOR First Aid CoSTR (Singletary, Circulation 2020;142:S284): not read directly (heatstroke CoSTR read on costr.ilcor.org).
- American Family Physician 2026 summary of the AHA/ARC guidelines (Nelson M, 2026;113:287–290): title only.
- Stroke Association UK symptoms page: 403, not read.
- Epilepsy Action status epilepticus page, buccal midazolam guidance: not read.
- MHRA EURneffy approval notice itself (the 18 July 2025 date is from a search snippet; Anaphylaxis UK confirms approval by 24 July 2025).
- Emerade current UK status: recall titles only.
- Older EpiPen label with 10-second hold: not read.
- ANZCOR snakebite pressure immobilisation guideline: not read.
- CDC heat pages (403; NIOSH page read via Wayback instead). CDC hypoglycemia page: 403, not read.
- American Red Cross seizure, poisoning pages: Wayback 404, not read.
- heart.org women heart attack page: 403, not read (warning-signs page read via Wayback).
- Saver 2006 "Time is brain" (source of 1.9 million neurons per minute): not read.
- TOXBASE: not read (professional database).
- Cochrane review of Mental Health First Aid cited by ERC: not read.
- Any study on whether asking about suicide increases risk: not read.
- NHS Act FAST 2024 campaign press release (england.nhs.uk): snippet only.

---

## First Aid and CPR, Stage 1 research, Part D: the bystander, the law, the order of actions, and teaching resources

Researcher notes for First Aid and CPR, Stage 1. Read date for everything below: 2026-09-24 unless
stated. Working files (extracted text) are in `scratchpad/fa/partD/`.

Read-level key: "full, direct" = I extracted the text myself (curl or pdftotext). "full, fetch tool"
= WebFetch summary. "abstract only" = PubMed abstract via E-utilities, extracted directly.
"Wayback (id)" = Internet Archive capture. "snippet only" = search result snippet, nothing from it
may be taught as a finding. Quotes marked [V] were copied from text I extracted; [T] came back
through WebFetch and must be rechecked.

Claim classes: **E** = Established, **CE** = Contested empirical, **V** = Value.

---

### 1. The field's own sequence: how the canonical courses order the material

#### 1.1 American Red Cross

- **Source D1.** American Red Cross, *First Aid/CPR/AED Participant's Manual* r.25, store page.
  https://www.redcross.org/store/first-aid-cpr-aed-participants-manual/754200.html . Read level:
  full, direct (product description only; the manual itself not read).
  - An r.25 edition exists and states its care steps are consistent with the 2025 ILCOR CoSTR and
    "the 2025 American Heart Association and American Red Cross Guidelines for CPR and First Aid"
    [V]. Its description lists topics in this order: recognizing an emergency, the emergency
    action steps, recognizing cardiac arrest, signs of a heart attack, giving CPR, the cardiac
    chain of survival, AED use, choking, sudden illness, other life-threatening injuries; plus
    asthma inhaler, epinephrine auto-injector, splinting, tourniquet and naloxone. (E, for what the
    course covers.)
- **Source D2.** Internet Archive catalogue record, *American Red Cross First Aid/CPR/AED
  Participant's Manual* (StayWell, 2016), 169 pp.
  https://archive.org/details/americanredcross0000unse_y4z9 . Read level: catalogue metadata
  only (contents note), direct via archive.org metadata API.
  - Contents in order: Part 1 First aid basics (Before giving care; Checking an injured or ill
    person). Part 2 First aid for cardiac emergencies and choking (Cardiac emergencies; Choking).
    Part 3 First aid for common illnesses and injuries (Sudden illness; Traumatic injuries;
    Environmental injuries and illnesses). Appendices: Emergency moves; Special first aid
    situations; Signs and symptoms in children; Injury prevention.
- **Source D3.** American Red Cross, *Responding to Emergencies: Comprehensive First Aid/CPR/AED*,
  textbook sample PDF (created April 2017, 44 pp).
  https://www.redcross.org/content/dam/redcross/training-services/course-fact-sheets/RTE-Textbook-Sample.pdf
  Read level: full, direct (table of contents and sample chapters only).
  - The long Red Cross course opens with the bystander, not the body: Chapter 1 "If Not You …
    Who?" (types of emergencies, your role, preparing, incident stress); Chapter 2 "Responding to
    an Emergency" (the emergency action steps); Chapter 3 "Before Giving Care" (preventing disease
    transmission, legal considerations, reaching and moving a person). Then Part Two Assessment
    (the human body; checking the person), Part Three Life-threatening emergencies (cardiac,
    breathing, bleeding, shock), Part Four Injuries, Part Five Medical emergencies, Part Six
    Special situations (water, paediatric and older adult, childbirth, disaster and wilderness).
    This is the clearest evidence that the field itself puts "why people do not act" and "the law
    and consent" at the very start. (E)
- **Source D4.** American Red Cross, "Check, Call, Care: 3 Emergency Actions Steps".
  https://www.redcross.org/take-a-class/resources/articles/the-three-cs-of-first-aid-check-call-care
  Read level: full, direct.
  - "First, CHECK the scene for safety. Keeping yourself safe will help you take care of others.
    Then, obtain consent and check the person to determine the nature of their illness or injury."
    [V]
  - "Once 911 has been called, put the dispatcher on speaker phone." [V]
  - "Finally, CARE for the person according to their condition and your level of training." [V]
- **Source D5.** American Red Cross, "First Aid Steps".
  https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps . Read
  level: full, direct.
  - Step 1: check scene safety, form an initial impression, obtain consent, use PPE. Step 2, if
    the person appears unresponsive: check responsiveness, breathing, life-threatening bleeding
    using "shout-tap-shout", "for no more than 10 seconds" [V]. Step 3A: if not responding, not
    breathing or only gasping, or life-threatening bleeding, call 9-1-1 and get equipment "or tell
    someone to do so" [V]. For a responsive person, interview using "SAM" (signs and symptoms,
    allergies, medications and medical conditions). The page describes Red Cross certification as
    "a two-year certification" [V]. (E, as Red Cross teaching.)
  - Also noted on D4: a link reading "Learn why the American Red Cross uses ABC and considers CAB
    problematic from the Red Cross Scientific Advisory Council" [V]. I did not follow it. It sits
    oddly against AHA compressions-first teaching; flag for Part A/B to check before any lesson
    says the Red Cross and AHA agree on sequence.

#### 1.2 American Heart Association Heartsaver

- **Source D6.** AHA, "Heartsaver First Aid CPR AED Course Options". Wayback 20260422003426 of
  https://cpr.heart.org/en/courses/heartsaver-first-aid-cpr-aed-course-options (live site blocks
  automated access). Read level: Wayback, direct.
  - Three formats (blended, classroom, self-guided with a simulation station) "result in the same
    AHA Course Completion Card" [V]. Designed "for anyone with little or no medical training who
    needs an OSHA-compliant course completion card" [V]. Times: blended about 3 h online plus about
    2 h skills; the self-guided route about 2 h plus 1 h skills session. For the online path,
    "students must complete hands-on skills session with an AHA BLS or Heartsaver Instructor" [V].
- **Source D7.** Internet Archive catalogue record, *Heartsaver First Aid CPR AED Student
  Workbook* (AHA, 2011), https://archive.org/details/heartsaverfirsta0000unse . Read level:
  catalogue metadata only.
  - Contents: First aid basics, Medical emergencies, Injury emergencies, Environmental
    emergencies, CPR and AED, Conclusion, Summary. Note the AHA puts CPR last in the first aid
    workbook; the Red Cross puts cardiac emergencies second. A 2025-guidelines edition of the
    workbook is on sale (retailer page, lifesaversinc.com, product 25-1184) but I did not see its
    contents; a search snippet says it adds opioid-associated emergencies (snippet only).

#### 1.3 UK: the voluntary aid societies' First Aid Manual and the HSE syllabus

- **Source D8.** *First Aid Manual*, 11th edition (DK, 1 July 2021, 296 pp), authorised by St John
  Ambulance, St Andrew's First Aid and the British Red Cross. Google Books record via WebFetch
  (https://books.google.com/books/about/First_Aid_Manual_11th_Edition.html?id=oNAnEAAAQBAJ).
  Read level: full, fetch tool (record only). **Table of contents not obtained.** A retailer
  snippet says the first three chapters cover the first aider's role, managing the situation and
  assessing the casualty (snippet only). I found no legitimate open copy of the contents; one
  pirated copy exists and I did not use it.
- **Source D9.** HSE, *First aid at work: The Health and Safety (First-Aid) Regulations 1981.
  Guidance on Regulations*, L74, 3rd edition 2013, amended 2018 and 2024 (page updated
  2024-02-06). https://www.hse.gov.uk/pubns/books/l74.htm ; PDF
  https://www.hse.gov.uk/pubns/priced/l74.pdf . Read level: full, direct (PDF).
  - **Appendix 6, EFAW content** (the order the UK workplace syllabus uses) [V, paraphrased list]:
    understand the role of the first-aider (preventing cross infection, recording incidents, use of
    equipment); "assess the situation and circumstances in order to act safely, promptly and
    effectively in an emergency" [V]; unconscious casualty (including seizure); CPR and AED;
    choking; wounded and bleeding; shock; minor injuries (small cuts, grazes, bruises, minor burns
    and scalds, small splinters).
  - **Appendix 5, FAW** adds: bone, muscle and joint injuries including suspected spinal injury;
    chest injuries; burns and scalds; eye injuries; sudden poisoning; anaphylactic shock; and
    recognising major illness (heart attack, stroke, epilepsy, asthma, diabetes).
  - **Appendix 7, suggested annual refresher**: assess the situation; unconscious (including
    seizure); CPR; wounded and bleeding; shock.
  - Para 61: training should follow "current guidelines published by the Resuscitation Council
    (UK)" and "the current edition of the first-aid manual of the Voluntary Aid Societies" [V].
  - Para 62: blended learning is accepted, but "HSE strongly recommends that elements of the
    syllabus requiring practical demonstration of first-aid administration should be assessed by
    direct observation" [V].
  - Para 74: "All first-aid training certificates, whether FAW, EFAW or some other appropriate
    training, are valid for three years." [V] FAW requalification is a two-day course.
  - Para 75: HSE "strongly recommends that first-aiders undertake annual refresher training" but it
    is "not mandatory" [V].
- **Source D10.** HSE, First aid at work FAQs. https://www.hse.gov.uk/firstaid/faqs.htm . Read
  level: full, direct.
  - FAW is a "three-day" course and EFAW "one-day" [V]; FAW may be run over "a minimum of three
    days and maximum of ten weeks" [V].
  - "Health and safety legislation does not require you to have an automated external
    defibrillator (AED) in your workplace." [V] AED training "is now an integral part of the
    syllabus for FAW and EFAW courses" [V].
  - An "appointed person" need not be trained: "Appointed persons are not first-aiders and should
    not attempt to give first aid for which they have not been trained." [V]

#### 1.4 The primary survey as the UK teaches it

- **Source D11.** St John Ambulance, "How to do the primary survey (DR ABC)", clinically reviewed
  28/04/2025. https://www.sja.org.uk/get-advice/first-aid-advice/how-to/how-to-do-the-primary-survey/
  Read level: full, direct.
  - DR ABC: Danger, Response, Airway, Breathing, Circulation. "Before approaching the casualty,
    always make sure the area is safe." [V] Response: kneel, gently shake shoulders, ask "Are you
    OK?" Life-threatening bleeding "must be dealt with before moving on to the airway" [V].
    Breathing check "for no more than 10 seconds" [V]; about half of casualties gasp in the first
    minutes of cardiac arrest ("agonal gasping"), which "is not normal breathing" [V]. If
    unresponsive and not breathing normally: call 999 or 112, start CPR, "Ask a helper to find and
    bring a defibrillator (AED)." [V] Then secondary (top-to-toe) survey.
- **Source D12.** British Red Cross, "Unresponsive and not breathing".
  https://www.redcross.org.uk/first-aid/learn-first-aid/unresponsive-and-not-breathing . Read
  level: full, direct.
  - The British Red Cross public teaching is simpler than SJA's: shake shoulders, shout for help,
    tilt head and check breathing, call 999, push "hard and fast at a rate of 2 pushes per second"
    [V]. No rescue breaths in this public sequence. "If you are on your own, call 999 before you
    start chest compressions." [V] Noisy, irregular breathing or gasping means start compressions.
    This is a real UK-internal difference: SJA and RCUK teach 30:2 for the trained, BRC teaches
    hands-only to the public. (E)

#### 1.5 What the 2025 guidelines say about the first minute

- **Source D13.** AHA 2025 Part 7, Adult Basic Life Support (Circulation 2025;152 suppl 2).
  Text as saved at `scratchpad/fa/aha25_bls.txt` (downloaded by the Part A researcher from
  cpr.heart.org); I read the "Initiation of Resuscitation: Lay Rescuer" table and supporting
  text directly. Read level: partial, direct (that section).
  - Rec 2, COR 1, LOE B-NR: "After identifying an adult in cardiac arrest, a lone responder should
    activate the emergency response system first, then immediately begin CPR, beginning with chest
    compressions." [V]
  - Rec 3, COR 1, LOE C-LD: "a lone rescuer with a mobile phone should activate the emergency
    response system and immediately begin CPR" [V].
  - Supporting text: "Use of the 'hands-free' speaker feature on most cell phones, when and where
    available, can help with near-simultaneous activation of emergency response and initiation of
    CPR." [V] Activation also enables "possible notification of other lay rescuers via
    crowd-sourced applications" [V].
  - Rec 5, COR 2a, LOE C-LD: PPE reasonable "When immediately available" [V]; the text warns
    donning PPE "may delay the initiation of CPR" [V].
- **Source D14.** ERC Guidelines 2025 Adult Basic Life Support (Smyth et al., Resuscitation
  2025;215:110771). PDF saved at `scratchpad/fa/partA/erc_bls.pdf` by Part A; I read the
  "Alerting the emergency services" sections directly. Read level: partial, direct.
  - "If you have a mobile phone, activate speaker mode, call the local emergency number without
    delay. Assess breathing while you wait for the call to be answered." [V]
  - Rationale: "most cardiac arrests are initially recognised by the dispatcher during the call,
    rather than by bystanders at the scene" [V], so callers "should not delay contacting the
    emergency services to confirm the presence of abnormal breathing" [V].
  - **What changed:** ERC 2025 moves the call earlier than the older DRSABCD ordering: for any
    unresponsive person, call first (on speaker) and assess breathing while the call connects.
    ERC's public slogan is "Check–Call–CPR" (Source D30). (E as guidance.)
- **Source D15.** 911.gov, "Calling 911". Wayback 20260907153825 of
  https://www.911.gov/calling-911/ (live site returned 403). Read level: Wayback, direct.
  - Call-takers may ask for "The location of the emergency, including the street address", "The
    phone number you are calling from", "The nature of the emergency" and details such as "a
    description of injuries or symptoms" [V]. "Many 911 centers can tell you exactly what to do
    until help arrives, such as providing step-by-step instructions to aid someone who is choking
    or needs first aid or CPR. Do not hang up until the call-taker instructs you to do so." [V]
- **Source D16.** NHS, "When to call 999".
  https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/ . Read
  level: full, direct.
  - The call handler will want "the location of the emergency (for example, the postcode or any
    landmarks)", "what has happened", "your contact number" [V]. While waiting: turn on lights, open
    curtains, hazard lights in a car, "call 999 again if the person's condition changes" [V], lock
    away pets, gather medicines. NHS 111 is for when you are "not sure if you need to call 999" [V].
- **Source D17.** South Central Ambulance Service NHS FT, "999".
  https://www.scas.nhs.uk/what-we-do/999-emergency/ . Read level: full, direct.
  - The first things call takers ask: "if the patient is breathing and conscious" and "your
    location" [V]. "It's a good idea to download the location-finder app What3Words. This helps us
    find your exact location if you don't know the full address or are in a large open space." [V]
- **Source D18.** South East Coast Ambulance Service NHS FT, FOI response 220805 on AML and W3W
  (2023). https://www.secamb.nhs.uk/wp-content/uploads/2023/08/220805-FOI-AML-W3W-references-.pdf
  Read level: full, direct.
  - **Advanced Mobile Location (AML)**: "AML is not an app; it does not require any action from the
    caller as it is built into most modern smartphones." [V] (punctuation corrected 2026-09-24
    against the rendered PDF, p. 4: a semicolon, not a comma.) Accuracy "generally around or below
    30meters but can be as low as 5 meters" [V], versus a cell-tower radius "of around 3000 meter"
    [V]. It arrives within about 25 seconds.
  - **what3words**: call handlers can send an SMS "FINDME" link; "There is no need for them to
    download the W3W app." [V]
  - **Verdict on the brief's question:** yes, UK NHS ambulance services use what3words (SCAS and
    SECAmb confirmed from their own documents), but AML already sends the phone's location
    automatically. The what3words vendor claim that most UK emergency services use it (search
    snippet: "85%") is a vendor figure, snippet only. Teach: stay on the line, give an address or
    landmark; the service may locate your phone automatically; what3words is a fallback when you
    cannot say where you are. (E)
- **Source D19.** European Commission, "112 - the EU's emergency phone number".
  https://digital-strategy.ec.europa.eu/en/policies/112 . Read level: full, direct.
  - "112 is the European emergency phone number, available everywhere in the EU, free of charge."
    [V] It works "from fixed and mobile phones" [V]; it runs "alongside existing national emergency
    numbers" [V]; Denmark, Estonia, Finland, Malta, the Netherlands, Portugal, Romania and Sweden
    use 112 as their only number. 112 became the single European number in 1991.
  - UK: SJA (D11) and RCUK (D37) both instruct "999 or 112". Ofcom page blocked (bot wall), so I
    have no UK regulator text; the two clinical bodies suffice for teaching "999 or 112 in the UK".
- **Source D20.** The Circuit, Resuscitation Council UK page.
  https://www.resus.org.uk/public-resource/defibrillation/circuit . Read level: full, direct.
  - The Circuit is "the national defibrillator network" [V]; if an AED is not registered,
    "ambulance service call handlers won't know it exists when that 999 call is made" [V]. "Over
    110,000 defibrillators are registered on The Circuit" [V]. Led by BHF with RCUK, SJA, AACE, NHS
    England, Save a Life Cymru. Public lookup at defibfinder.uk, which states it "is not intended
    for use in an emergency" [V]: in an emergency you call 999 and the call handler directs you.
- **Source D21.** PulsePoint, "PulsePoint Respond". https://www.pulsepoint.org/pulsepoint-respond .
  Read level: full, direct.
  - App users "trained in CPR and willing to assist" can be "notified if someone nearby is in
    cardiac arrest" [V]; the app "directs these rescuers to the exact location of nearby AEDs" [V].
    Public CPR Responders are "only notified of nearby cardiac arrest events occurring in public
    places" [V]; agency-registered responders also get home events. It must be integrated with the
    local dispatch centre, so coverage is community by community.
- **GoodSAM** (https://www.goodsamapp.org/, read full, direct): a commercial dispatch platform
  including "Crowdsourced resuscitation - alerting nearby trained responders and locating the
  nearest AED" [V]. RCUK's Lifesaver page says completing its four scenarios lets you "sign up to
  be a GoodSAM volunteer cardiac responder" [V] (resource R7).
- **ILCOR** (Source D41), EIT 6302, 2020 recommendation unchanged in 2025: citizens near a
  suspected OHCA who are willing to be notified by smartphone app or text alert "should be
  notified (strong recommendation, very low–certainty evidence)" [V]. (E as recommendation; the
  survival evidence is CE: an AHA 2025 Part 4 search summary says bystander CPR rose universally
  when alerts were accepted but survival effects were inconsistent, snippet only, since I did not
  read Part 4.)

---

### 2. Why bystanders do not act

#### 2.1 The classic experiment and its myth

- **Source D22-a.** Darley JM, Latané B. Bystander intervention in emergencies: diffusion of
  responsibility. J Pers Soc Psychol 1968;8(4):377-383. doi:10.1037/h0025589. PMID 5645600.
  **Not read**: PubMed has no abstract and the paper is closed access. The widely quoted figures
  (85% helped when they believed they were alone, 31% when they believed four others could hear a
  seizure over an intercom) come from a search snippet only and must be verified against the paper
  before a lesson uses them.
- **Source D23.** Manning R, Levine M, Collins A. The Kitty Genovese murder and the social
  psychology of helping: the parable of the 38 witnesses. Am Psychol 2007;62(6):555-562.
  doi:10.1037/0003-066X.62.6.555. Read level: abstract only.
  - "there is no evidence for the presence of 38 witnesses, or that witnesses observed the murder,
    or that witnesses remained inactive" [V]. The authors separate "the robust bystander research
    tradition" from the story, which "has become a modern parable" [V]. (E)
- **Source D24.** McFadden RD. "Winston Moseley, 81, Killer of Kitty Genovese, Dies in Prison."
  New York Times, 4 April 2016. Wayback 20161212182133 (URL
  nytimes.com/2016/04/05/nyregion/winston-moseley-81-killer-of-kitty-genovese-dies-in-prison.html).
  Read level: Wayback, direct.
  - The Times on its own 1964 story: "the portrayal of 38 witnesses as fully aware and unresponsive
    was erroneous" [V]; "The article grossly exaggerated the number of witnesses and what they had
    perceived. None saw the attack in its entirety." [V] "There were two attacks, not three. And
    afterward, two people did call the police. A 70-year-old woman ventured out and cradled the
    dying victim in her arms until they arrived." [V] (E)

#### 2.2 What the pooled and real-world evidence says

- **Source D25.** Fischer P, Krueger JI, Greitemeyer T, et al. The bystander-effect: a
  meta-analytic review on bystander intervention in dangerous and non-dangerous emergencies.
  Psychol Bull 2011;137(4):517-537. doi:10.1037/a0023304. Read level: abstract only.
  - Over 7,700 participants, 105 effect sizes; overall g = -0.35 (others present reduces an
    individual's helping). "The bystander effect was attenuated when situations were perceived as
    dangerous" [V], when perpetrators were present and when costs were physical. **Corrected
    2026-09-24 (Stage 4 note, lesson 1):** the abstract does not give an explanation of its own; it
    says "This pattern of findings is consistent with the arousal-cost-reward model, which proposes
    that dangerous emergencies are recognized faster and more clearly as real emergencies, thereby
    inducing higher levels of arousal and hence more helping." [V] Recognition is the model's
    proposed route, running through arousal, not a finding. The abstract says nothing about
    responsibility or about assigning tasks.
    Bystanders also reduce the effect when they are a source of support, e.g. when not strangers.
    (E for the individual-level effect; the size in real medical emergencies is CE.)
- **Source D26.** Philpot R, Liebst LS, Levine M, Bernasco W, Lindegaard MR. Would I be helped?
  Cross-national CCTV footage shows that intervention is the norm in public conflicts. Am Psychol
  2020;75(1):66-75. doi:10.1037/amp0000469. Postprint:
  https://eprints.lancs.ac.uk/id/eprint/134891/ . Read level: full, direct (postprint).
  - 219 CCTV clips of real public conflicts in the UK, the Netherlands and South Africa. "at least
    one bystander intervened in 90.9% of the situations, with an average of 3.76 interveners per
    video" [V]. No significant difference between countries. More bystanders raised the chance
    that someone helped: "each additional bystander increasing the odds that a victim receives help
    by factor 1.1" [V].
  - **Caveat for the lesson:** these are aggressive conflicts, not collapses. The finding
    reconciles with Darley and Latané: each individual is less likely to act in a crowd, but the
    crowd as a whole usually produces a helper. It does not show that someone will start CPR. (E
    for conflicts; application to cardiac arrest is CE.)

#### 2.3 Why people say they would not do CPR

- **Source D27.** Coons SJ, Guy MC. Performing bystander CPR for sudden cardiac arrest:
  behavioral intentions among the general adult population in Arizona. Resuscitation
  2009;80(3):334-340. Read level: abstract only.
  - Mailed survey, n=370 urban and 385 rural. "More than 50% of respondents reported being willing
    to perform CPR on a stranger and over 80% reported being willing to perform CPR on a family
    member." [V] Reasons for unwillingness "were relatively evenly divided among the five reasons
    listed" [V] (the five reasons are not named in the abstract; full text needed).
- **Source D28.** Uny I, Angus K, Duncan E, Dobbie F. Barriers and facilitators to delivering
  bystander CPR in deprived communities: a systematic review. Perspect Public Health
  2023;143(1):43-53. PMC9912310. Read level: abstract only.
  - Barriers "more acute in deprived communities: the risk to personal safety in administering CPR;
    the fear of legal consequences; and the lack of community cohesion" [V]. Little evidence that
    willingness itself is lower in deprived communities.
- **Source D29.** British Heart Foundation press releases. Read level: full, direct.
  - 2025 Heart Month (YouGov, among people living with a partner):
    https://www.bhf.org.uk/what-we-do/news-from-the-bhf/news-archive/2025/february/fear-of-causing-harm-would-prevent-couples-from-giving-lifesaving-cpr
    "Around half of people (51 per cent) who live with their partner said the fear of causing harm
    would make them reluctant to give cardiopulmonary resuscitation" [V]; 57% would not feel
    confident using a defibrillator.
  - 2024 Heart Month (Censuswide):
    https://www.bhf.org.uk/what-we-do/news-from-the-bhf/news-archive/2024/february/heart-month-launch-
    "Nearly half of UK adults (43 per cent) have never learnt CPR" [V]; "only 40 per cent of
    respondents could pick the correct first step of CPR" [V] (safety and checking response).
    Charity-commissioned polls: treat as indicative (CE), not as population estimates.
- **Source D30.** ERC Guidelines 2025 layperson brochure ("ERC Guidelines 2025", Dec 2025).
  https://www.erc.edu/media/p5ymaeej/gl2025_layperson_book_ipdf-v11-e.pdf (text extracted by
  Part A at `scratchpad/fa/erc_lay.txt`; I read the Systems, Education and Ethics sections
  directly). Read level: partial, direct.
  - Ethics chapter: the public should be told about "local 'Duty to Help' regulations and 'Good
    Samaritan' laws" [V] and health systems should support bystanders with "the emotional toll of
    being involved in resuscitation" [V].
  - Education chapter: training is "the ideal time to address barriers or hesitancy that rescuers
    might experience (due to fear or lack of confidence)" [V].

#### 2.4 The sex gap

- **Source D31.** Blewer AL, McGovern SK, Schmicker RH, et al. Gender disparities among adult
  recipients of bystander CPR in the public. Circ Cardiovasc Qual Outcomes 2018;11(8):e004710.
  PMC6209113. Read level: abstract only.
  - ROC registry 2011-2015, 19,331 OHCAs. In public: 39% of women vs 45% of men received bystander
    CPR; OR for men 1.27 (95% CI 1.05-1.53). At home: 35% vs 36%, no significant difference. (E
    for North American registry data.)
- **Source D32.** Perman SM, Shelton SK, Knoepke C, et al. Public perceptions on why women receive
  less bystander CPR than men in out-of-hospital cardiac arrest. Circulation
  2019;139(8):1060-1068. PMC6386169. Read level: abstract only (full text fetched; I used the
  abstract).
  - US online survey (Mechanical Turk), n=548. Themes: "(1) sexualization of women's bodies; (2)
    women are weak and frail and therefore prone to injury; and (3) misperceptions about women in
    acute medical distress" [V]; conclusion cites "fears about inappropriate touching, accusations
    of sexual assault, and fear of causing injury" [V]. These are perceptions of why, not measured
    causes. (CE)
  - Teaching point supported by the guidelines already read: hand position is the centre of the
    chest; AED pads go on bare skin. Whether a lesson should say "you may need to remove or cut a
    bra" is for Part A/B to confirm from AHA/ERC AED text.
- AHA 2025 Part 12 lists "disparities accordingly related to gender, race, socioeconomic status,
  and language" as reviewed (Source D35, abstract only).

---

### 3. Good Samaritan law (not legal advice)

Every lesson on this must carry a plain "this is general information, not legal advice; the law
varies by state and country" line.

#### 3.1 United States

- **Source D33.** Murphy TW, Windermere S, Morris T, Slish J, Holtzman L, Becker TK. Risk and
  ROSC: legal implications of bystander CPR. Resuscitation 2020;151:99-102.
  doi:10.1016/j.resuscitation.2020.03.017. PMID 32259608. Read level: abstract only.
  - Westlaw search of jury verdicts, settlements and appellate opinions in all 50 states,
    1989-2019. Of 506 cases reviewed, 170 directly related to CPR; "167 were due to inadequate or
    untimely bystander CPR. Three cases alleging harm due to providing CPR were identified." [V]
    The abstract speaks of "'Good Samaritan' statutes in all 50 states" [V].
  - **Caution (corrected 2026-09-24, Stage 4 note, lesson 1):** the abstract does not say who the
    defendants were. It records that defendant demographics, "level of training of CPR provider"
    and "relationship to patient" were collected, but reports none of them, and it frames the
    dataset as "cases brought against bystanders" [V]. The 167 were cases "due to inadequate or
    untimely bystander CPR" [V], and inadequate CPR is CPR that was given; the AHA News story (D34)
    says 74 of the 167 negligence cases "were ruled in favor of the person who administered CPR"
    [V], so many of those defendants had given CPR. The earlier line here, that the 167 were
    "mostly suits against people or organisations with a duty", had no source and is withdrawn.
    What is supported: suits claiming that giving CPR itself did harm were rare (3 in the 30-year
    search); most CPR litigation found alleged that CPR was absent, inadequate or late; and the
    authors conclude that "The likelihood of litigation is significantly higher in cases with
    bystander CPR absent or delayed" [V]. Do not say "suits over giving CPR are very rare": the 167
    include suits over CPR that was given badly or late. (E for the count; any reading of who was
    sued is unsupported.)
- **Source D34-news.** AHA News, "Worried about legal risk of doing CPR? Inaction is riskier", 13
  Nov 2019 (Resuscitation Science Symposium abstract of the same study). Wayback 20260904170700.
  Read level: Wayback, direct.
  - "more than $620 million has been issued as settlement or punitive damages for delays in CPR,
    while only about $120,000 has been paid as damages for performing it" [V]. "Of those cases, 167
    involved alleged negligence, of which 74 were ruled in favor of the person who administered
    CPR. Three cases alleged battery, and two of those went in favor of the person administering
    CPR." [V] "Every state has 'Good Samaritan' laws" [V].
  - The news story and the published abstract describe the 167 cases slightly differently; the
    lesson should cite the published paper's numbers and mark the dollar figures as from the
    conference abstract.
- **Source D35-CA.** California Health and Safety Code §1799.102 (as amended Stats. 2009, ch. 77).
  https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1799.102
  Read level: full, direct.
  - (b)(2): "no person who in good faith, and not for compensation, renders emergency medical or
    nonmedical care or assistance at the scene of an emergency shall be liable for civil damages
    resulting from any act or omission other than an act or omission constituting gross negligence
    or willful or wanton misconduct." [V] Emergency departments are excluded from "the scene of an
    emergency". A worked example of the three usual conditions: good faith, no pay, not grossly
    negligent. (E)
- **Duty-to-assist states** (primary statutes, read full, direct):
  - **Vermont**, 12 V.S.A. §519 (1968): a person who knows another "is exposed to grave physical
    harm shall, to the extent that the same can be rendered without danger or peril to himself or
    herself or without interference with important duties owed to others, give reasonable
    assistance" [V], unless others are already helping; civil immunity unless grossly negligent;
    wilful violation "shall be fined not more than $100.00" [V].
    https://legislature.vermont.gov/statutes/section/12/023/00519
  - **Minnesota**, Minn. Stat. §604A.01 subd. 1: same duty; "Reasonable assistance may include
    obtaining or attempting to obtain aid from law enforcement or medical personnel." [V] Violation
    is "a petty misdemeanor" [V]. Subd. 2 gives immunity unless "willful and wanton or reckless".
    https://www.revisor.mn.gov/statutes/cite/604A.01
  - **Rhode Island**, R.I. Gen. Laws §11-56-1 (1984): duty to "give reasonable assistance" [V];
    petty misdemeanor, up to six months or $500.
    https://webserver.rilegislature.gov/Statutes/TITLE11/11-56/11-56-1.htm
  - Note for teaching: in all three, calling for help counts or is the obvious minimum; none
    requires you to put yourself in danger. **Corrected 2026-09-24 (Stage 4 note, lesson 1):** only
    Minnesota's text mentions getting aid ("may include"). All three have a danger clause (re-read
    today, direct): Minnesota, "to the extent that the person can do so without danger or peril to
    self or others" [V]; Rhode Island, "to the extent that he or she can do so without danger or
    peril to himself or herself or to others" [V]. Vermont's and Rhode Island's say nothing about
    calling, so that a call is the minimum there is this researcher's reading, not the statutes'
    words. Other states have narrower duties (for example to
    report crimes); I did not survey them. Professor Zachary Kaufman's "Bad Samaritan Laws"
    database (https://www.zacharykaufman.com/projects/bad-samaritan-laws/) lists over 200 such
    laws worldwide; its entries load by script and I did not read them.
- **Source D36.** Cardiac Arrest Survival Act (Public Health Improvement Act, Pub. L. 106-505,
  title IV, §404, 13 Nov 2000), 42 U.S.C. §238q. https://www.law.cornell.edu/uscode/text/42/238q
  Read level: full, direct.
  - (a): "any person who uses or attempts to use an automated external defibrillator device on a
    victim of a perceived medical emergency is immune from civil liability for any harm resulting
    from the use or attempted use of such device" [V]. (b) excludes "willful or criminal misconduct,
    gross negligence, reckless misconduct" [V] and professionals acting in scope.
  - (c)(1)(B): it supersedes state law "only to the extent that the State has no statute or
    regulations" giving such immunity [V], i.e. it is a floor where states are silent. (E)
- **Overdose Good Samaritan laws.** US GAO, *Drug Misuse: Most States Have Good Samaritan Laws and
  Research Indicates They May Have Positive Effects*, GAO-21-248, 29 March 2021.
  https://www.gao.gov/products/gao-21-248 . Read level: full, fetch tool (curl blocked).
  - As of 2021, "48 jurisdictions (47 states and D.C.) have enacted both Good Samaritan and
    Naloxone Access laws" [T]; these protect people who call for help for an overdose from certain
    drug charges. The count may have changed since 2021; PDAPS (pdaps.org) holds the longitudinal
    dataset and I did not read it. Do not teach a current number without rechecking. (E for the
    2021 figure; current count unverified.)
- **Consent** (Red Cross D4, D5): obtain consent from a responsive person. For an unresponsive
  person the Red Cross RTE glossary includes "Implied consent" (the sample PDF defines it on the
  glossary page; I saw the headword but not a clean definition, so rely on the RCUK text below for
  wording).

#### 3.2 United Kingdom

- **Source D37.** Resuscitation Council UK, *Cardiopulmonary resuscitation, automated
  defibrillators and the law*, April 2018 (first published 2000; revised 2010; reviewed 2017 by
  an original author and a legal specialist). Page:
  https://www.resus.org.uk/library/publications/publication-cpr-aeds-and-law ; PDF
  https://www.resus.org.uk/sites/default/files/2020-05/CPR%20AEDs%20and%20the%20law%20%285%29.pdf .
  Read level: full, direct (pp. 1-13 closely; remainder skimmed).
  - Headline 6: "The courts have always looked benevolently on those who have gone to the
    assistance of others." [V]
  - On lawsuits: "Although there have been a few cases in the UK when a claim for damages has been
    brought against a member of the public or a first aider who has attempted resuscitation, there
    have been no reported cases in which someone has successfully sued anyone who came to help them
    in an emergency situation." [V] Executive summary: "To date, there has been no reported
    successful claim to this effect." [V]
  - No duty to rescue: "In the UK, there is no legal obligation for others to help a person in need
    of resuscitation, provided they were not the cause of the person needing help." [V] But "once a
    bystander volunteers to help, they are then considered to have a duty of care to assist the
    person as far as they are able." [V]
  - Liability only if the rescuer left the person worse off; "In the case of a cardiac arrest, this
    would be virtually impossible, since without intervention death is inevitable." [V]
  - Consent: defences of "implied consent" and "necessity" [V]; Mental Capacity Act 2005 s.5
    (England and Wales, age 16+) "may also add weight" [V]; Scotland uses "wrongful interference
    with the person" [V] and the Adults with Incapacity (Scotland) Act 2000; Northern Ireland
    relies on common-law necessity (MCA (NI) 2016 not then in force).
  - SARAH 2015: "it has been criticised by prominent members of the legal profession who state that
    it adds nothing to the protection already provided by existing common law" [V]. The sentence
    continues (added 2026-09-24): "and that it may, in fact, erode the protection that already
    exists. Experience with the interpretation of the Act is lacking" [V].
  - Implied consent for lay rescuers (added 2026-09-24, executive summary): "While the defence of
    implied consent may not be as clear-cut if the rescuer isn’t medically qualified, the defence of
    necessity may be available, provided the rescuer acts reasonably in the circumstances. For
    instance, it would be reasonable to carry out CPR and use an AED if no healthcare professionals
    were available." [V] Necessity is defined there as "that the treatment is given in the best
    interests of the patient" [V]. Scotland (p. 12): the Adults with Incapacity (Scotland) Act 2000
    procedure "is unlikely to be practicable in cases where cardiac resuscitation is necessary" [V].
  - Duty-of-care exceptions (p. 4 and p. 9, added 2026-09-24): after the no-duty sentence, "there
    are circumstances in which certain professionals, and people who have a particular relationship
    with the collapsed person, would be considered to have a duty of care" [V]; p. 9 lists a doctor
    or nurse with a patient in their care, ambulance staff dispatched, and "A trained responder or
    first aider in a workplace setting because they have willingly taken on this role as part of
    their employment" [V].
  - If a DNACPR or advance decision to refuse treatment becomes known, "it should be respected" [V].
    **Context (added 2026-09-24, Stage 4 note, lesson 1):** the passage (p. 12, "Advance
    decisions") is about "legally binding advance decisions to refuse treatment" under the Mental
    Capacity Act 2005 ss. 24 to 26 (England and Wales), and says first that "in the real world,
    it’s very unlikely that a rescuer acting in an emergency would be aware of any such advance
    decision" [V]. Full sentence: "However, if it became known that an advance decision to refuse
    treatment (ADRT) or a do not attempt cardiopulmonary resuscitation (DNACPR) recommendation were
    in place, then it should be respected." [V] The booklet gives no instruction for a rescuer who
    is unsure; nothing read says "if unsure, start CPR" about a DNACPR. Never quote the last clause
    without the rarity and the formal-document context.
  - An unqualified person should defer if "a professional rescuer were present" [V]. Full clause
    (added 2026-09-24): "it wouldn’t be reasonable for an unqualified person to act if a
    professional rescuer were present or arrived at the scene and offered to help. A bystander may
    continue to help but this would usually be under the supervision of a healthcare professional
    at the scene." [V]
- **Source D38.** RCUK, "FAQs: Basic Life Support (CPR)".
  https://www.resus.org.uk/professional-library/faqs/faqs-basic-life-support-cpr . Read level:
  full, direct.
  - "It is very unlikely that someone in the UK who acted in good faith when trying to help another
    person would be held legally liable for an adverse outcome. No such action has ever been
    brought against someone who performed CPR" [V].
  - **Discrepancy to flag:** the FAQ says no action has "ever been brought"; the RCUK law booklet
    (D37) says "a few cases" have been brought but none succeeded. Teach the booklet's wording (no
    reported successful claim). The same FAQ also says the HSE onshore first aid syllabus does not
    extend to defibrillators, which L74 (D9) and the HSE FAQ (D10) now contradict: the FAQ looks
    outdated on that point.
  - FAQ also: "it is far better to use the adult CPR sequence for the resuscitation of a child than
    to do nothing" [V].
- **Source D39.** Social Action, Responsibility and Heroism Act 2015 (c. 3), as enacted.
  https://www.legislation.gov.uk/ukpga/2015/3/contents/enacted . Read level: full, direct (ss.
  1-5).
  - s.1: applies when a court, considering negligence or breach of statutory duty, "is determining
    the steps that the person was required to take to meet a standard of care" [V].
  - s.4 Heroism: "The court must have regard to whether the alleged negligence or breach of
    statutory duty occurred when the person was acting heroically by intervening in an emergency to
    assist an individual in danger." [V]
  - s.5(1): "This Act extends to England and Wales only." [V] So Scotland and Northern Ireland rely
    on common law alone. (E)
- The BHF "CPR and the law" page URL I tried returns 404; RCUK's old "cpr-and-law" public page also
  404s. The booklet (D37) is the live authoritative text.

#### 3.3 France, as the contrast

- **Source D40-FR.** Code pénal, Article 223-6 (version in force; text via code-penal.fr mirror
  and Zachary Kaufman's site; Légifrance itself blocked automated access). Read level: full,
  direct (mirror). Légifrance ID LEGIARTI000037289588.
  - Para 2: "Sera puni des mêmes peines quiconque s'abstient volontairement de porter à une
    personne en péril l'assistance que, sans risque pour lui ou pour les tiers, il pouvait lui
    prêter soit par son action personnelle, soit en provoquant un secours." [V] The "same
    penalties" are those in para 1: "cinq ans d'emprisonnement et de 75 000 euros d'amende" [V];
    raised to seven years and €100,000 where the person in danger is under fifteen.
  - Key teaching point: calling for help ("en provoquant un secours") satisfies the duty, and there
    is no duty where acting would put you or others at risk. Before a lesson quotes this, recheck
    against Légifrance directly.

---

### 4. Does training work, and how fast does it fade

- **Source D41.** ILCOR, Greif R, Cheng A, et al. Education, Implementation, and Teams: 2025
  ILCOR CoSTR. Circulation 2025;152(suppl 1):S205-S249. doi:10.1161/CIR.0000000000001359
  (copublished in Resuscitation). Wayback 20260430180745 of the ahajournals full text. Read level:
  Wayback, direct (recommendation sections read; evidence tables skimmed).
  - EIT 6404, 2025: "We recommend the use of CPR feedback devices during resuscitation training for
    health care professionals and laypersons (strong recommendation, moderate-certainty evidence)."
    [V] (New/strengthened in 2025; 2020 was a weak "suggest".)
  - EIT 6406, 2025: "We suggest the use of either instructor-led training or self-directed digital
    training for the acquisition of CPR or AED skills in lay adults and high-school–aged (>10 years
    of age) children (weak recommendation, very low–certainty evidence)." [V] And "We suggest
    self-directed digital training be used when instructor-led training is not accessible, or when
    quantity over quality of CPR training is needed" [V]. "There was insufficient evidence to make a
    recommendation on game-in-film, virtual reality, computer programs, online tutorials or
    app-based training" [V]. Justification: "any form of CPR/AED training is likely to improve
    knowledge, confidence and willingness in simulated settings, but this may not translate to
    real-life situations" [V]; "Cost-effectiveness analysis favored digital self-directed training"
    [V].
  - EIT 6304 willingness, 2025 good practice statement: encourage "easy access to BLS courses, raise
    awareness about cardiac arrest ... and utilize training, public outreach, and social media to
    increase laypersons' willingness to perform CPR" [V]. The 2020 statement (unchanged from 2010)
    stands: training should include "recognizing gasping or abnormal breathing as a sign of cardiac
    arrest" [V]; those unwilling or unable to ventilate should "continue compression-only CPR" [V].
  - EIT 6105: "We recommend BLS training for likely rescuers of populations at high-risk of
    out-of-hospital cardiac arrest (strong recommendation, low- to moderate-certainty evidence)."
    [V] (2022, kept.)
  - EIT 6306, 2025: "community initiatives to promote BLS implementation should be endorsed and
    supported (good practice statement)" [V]; effects on survival "did not clearly favor the
    intervention" [V].
  - EIT 6408 spaced learning: SysRev 2020, evidence update 2022, not re-reviewed for 2025.
- **Source D42.** Yeung J, Djarv T, Hsieh MJ, et al. Spaced learning versus massed learning in
  resuscitation: a systematic review. Resuscitation 2020;156:61-71. Read level: abstract only.
  - 17 studies; 15 favoured spaced learning; "overall certainty of evidence was rated as very low"
    [V]; "insufficient data to examine the effectiveness of spaced learning on laypeople" [V].
- **Source D43.** Riggs M, Franklin R, Saylany L. Associations between CPR knowledge,
  self-efficacy, training history and willingness to perform CPR and CPR psychomotor skills: a
  systematic review. Resuscitation 2019;138:259-272. Read level: abstract only.
  - 34 studies, 35,421 lay participants. "Skills deteriorated within 3 months, then plateaued from
    3 to 6 months." [V] "knowledge was not associated with skill level" [V]. Authors suggest
    refreshers every 3 to 6 months, "although this timeframe needs further validation" [V]. (CE on
    the interval; E that skills decay.)
- **Source D44.** Roppolo LP, Pepe PE, et al. Prospective, randomized trial of the effectiveness
  and retention of 30-min layperson training for CPR and AEDs: The American Airlines Study.
  Resuscitation 2007;74(2):276-285. Read level: abstract only.
  - 30-minute training was "either equivalent or superior" [V] to the multi-hour Heartsaver-AED
    course at 6 months; 84% still performed CPR adequately overall, 93% compressions adequately, 93%
    used the AED correctly.
- **Source D45.** Bobrow BJ, Vadeboncoeur TF, Spaite DW, et al. The effectiveness of ultrabrief and
  brief educational videos for training lay responders in hands-only CPR. Circ Cardiovasc Qual
  Outcomes 2011;4(2):220-226. Read level: abstract only.
  - RCT, n=336. "Twelve (23.5%) controls did not even attempt CPR, which was true of only 2
    subjects (0.7%...)" [V] among those who watched very short videos. Relevant to our course: a
    short video changes whether people try at all.
- **Source D46.** Hasselqvist-Ax I, Riva G, Herlitz J, et al. Early cardiopulmonary resuscitation
  in out-of-hospital cardiac arrest. N Engl J Med 2015;372:2307-2315. Read level: abstract only.
  - Sweden 1990-2011, 30,381 witnessed OHCAs. 30-day survival 10.5% with CPR before EMS vs 4.0%
    without; adjusted OR 2.15 (95% CI 1.88-2.45). Observational. (E that the association is strong;
    CE on exact causal size.)
- **Source D47.** Wissenberg M, Lippert FK, Folke F, et al. Association of national initiatives
  to improve cardiac arrest management with rates of bystander intervention and patient survival
  after OHCA. JAMA 2013;310(13):1377-1384. Read level: abstract only.
  - Denmark 2001-2010: bystander CPR rose "from 21.1% ... in 2001 to 44.9% ... in 2010" [V];
    30-day survival 3.5% to 10.8%. National initiatives included mandatory CPR training in
    elementary schools and with driving licences (named in the paper's background; the abstract
    does not list them, so check full text). "a causal relationship remains uncertain" [V].
- **Source D48.** Anderson ML, Cox M, Al-Khatib SM, et al. Rates of CPR training in the United
  States. JAMA Intern Med 2014;174(2):194-201. PMC4279433. Read level: abstract only.
  - 13.1 million trained in one year (2010-11); county median training rates 0.51% (lowest
    tertile) to 6.81% (highest); lower in the South, rural areas, poorer counties and counties with
    more Black and Hispanic residents.
- **Source D35.** AHA 2025 Part 12: Resuscitation Education Science. Donoghue AJ, et al.
  Circulation 2025;152(16 suppl 2):S719-S750. doi:10.1161/CIR.0000000000001374. Read level:
  abstract only (full text blocked by Cloudflare, no Wayback capture found).
  - New or revised topics: feedback devices, rapid-cycle deliberate practice, gamified learning,
    VR/AR, blended learning, "alternative objects for lay rescuer chest compression training" [V],
    opioid overdose training, disparities, school children, and "barriers or facilitators to lay
    rescuer willingness" [V]. **The COR/LOE for these must be read before any lesson cites AHA on
    training.**
- **ERC 2025 Education chapter** (Greif R et al., Resuscitation 2025;215 suppl 1:110739): full
  text blocked; I read only the ERC's own lay summary (D30). That summary: "introducing the concept
  as early as 4 years of age and incorporating annual resuscitation training thereafter in
  schools" [V]; recommends "hands-on CPR training using manikins during short teaching sessions,
  followed, when possible, with brief annual refresher training" [V]; endorses spaced learning and
  rapid cycle deliberate practice.

#### 4.1 CPR in schools

- **US.** Eason CM, Frey G, Adams WM, et al. CPR/AED training state requirements for US high school
  students and athletic coaches. J Public Health Manag Pract 2025;31(6):E379-E386. Read level:
  abstract only. As of 31 Dec 2024: "84% of states require students to have CPR/AED training" [V]
  (43 of 51 jurisdictions including DC, as graduation requirements: 34 require both students and
  coaches, 9 students only); 2 states have no requirement for either. (E as of end-2024.)
- **England.** DfE, *Relationships Education, Relationships and Sex Education (RSE) and Health
  Education*, statutory guidance (first published 25 June 2019, statutory from September 2020;
  current version for introduction 1 September 2026).
  https://www.gov.uk/government/publications/relationships-education-relationships-and-sex-education-rse-and-health-education
  Read level: full, direct (PDF, first aid sections). Primary: "How to make a clear and efficient
  call to emergency services if necessary, including the importance of reporting incidents rather
  than filming them." [V] Secondary: "Life-saving skills, including how to administer CPR." [V] and
  "The purpose of defibrillators, when one might be needed and who can use them." [V] (The
  2020 start date comes from the 2019 guidance history on the page; I did not read the 2019
  version itself.)
- **Kids Save Lives.** Böttiger BW, Van Aken H. Kids save lives: training school children in CPR
  worldwide is now endorsed by the WHO. Resuscitation 2015;94:A5-7. Read level: title and citation
  only (no abstract). The ERC brochure (D30) describes it as schoolchildren receiving "annual CPR
  training, focusing on the ERC-promoted BLS approach: Check–Call–CPR" [V], "Children can begin
  learning to call for help as early as age 4, progressing to training in chest compressions by
  ages 10 to 12, and use AEDs between ages 13 and 16" [V]. World Restart a Heart: "Between 2018
  and 2023 ... more than 12 million people were trained" [V] (ERC's own figure).

---

### 5. Certification, and where to get hands-on training

- **US workplace rule.** OSHA 29 CFR 1910.151(b):
  https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.151 . Read level: full,
  direct. "In the absence of an infirmary, clinic, or hospital in near proximity to the workplace
  which is used for the treatment of all injured employees, a person or persons shall be adequately
  trained to render first aid. Adequate first aid supplies shall be readily available." [V] OSHA
  itself does not name a course; providers sell "OSHA-compliant" cards (D6). Red Cross
  certification lasts two years (D5); AHA Heartsaver issues a course completion card (D6; validity
  period not stated on the page I read).
- **UK workplace rule.** HSE L74 (D9): certificates valid three years; EFAW one day, FAW three
  days; blended learning allowed but practical skills should be assessed in person; annual
  refresher recommended, not required. HSE stopped approving training providers in 2013 (L74
  amendment note).
- **The key teaching point: you do not need a certificate to help.** Evidence: AHA 2025 Part 7 Rec
  1 (COR 1, B-NR): "All lay rescuers should provide chest compressions for adults with presumed
  cardiac arrest." [V] (D13). RCUK law booklet: an untrained layperson "would be justified in using
  one [an AED] in an emergency when a more qualified person is not available" [V] (D37). ILCOR
  (D41) suggests digital self-directed training where classes are not accessible. Certificates
  matter for jobs, not for the right to help. (E)
- **Where to find classes.**
  - US: Red Cross classes (redcross.org/take-a-class); AHA "Find a Course" (cpr.heart.org; the
    site blocks bots so I could not read the finder page; the course options page D6 was read via
    Wayback). ACS Stop the Bleed skills sessions via stopthebleed.org class search (D50).
  - UK: British Red Cross free workshops for adults (19+) and youth (10-19): "These free
    workshops do not give you a first aid qualification, but equip you with basic skills" [V]
    (https://www.redcross.org.uk/first-aid/learn-first-aid, full, direct). St John Ambulance
    "Free first aid awareness sessions" appear in its site navigation (not read further). BHF
    RevivR online (D49).
  - Europe: ERC promotes courses through national resuscitation councils and World Restart a Heart
    (16 October, European Restart a Heart Day since 2013 per D30).

---

### 6. Verified free resources

YouTube links verified with the oEmbed endpoint on 2026-09-24 (title and channel returned).
Content currency not checked against 2025 guidance unless stated; every video should be watched
before a lesson links it.

| # | Resource | URL | Owner | What it teaches | Length / notes | Check |
|---|---|---|---|---|---|---|
| R1 | Learn Hands-Only CPR | https://www.youtube.com/watch?v=EluCCYOdkVw | American Heart Association | Hands-only CPR for adults | Length not returned by oEmbed | oEmbed OK |
| R2 | Hands-Only CPR Woman | https://www.youtube.com/watch?v=C6bCbFnPu4Y | American Heart Association | Same, female presenter | | oEmbed OK |
| R3 | RCP Usando Solo Las Manos (Spanish, male, short) | https://www.youtube.com/watch?v=3iPaX1-JS5M | AHA | Spanish hands-only CPR | AHA page says 01:00 | oEmbed OK |
| R4 | RCP Usando Solo Las Manos, mujer | https://www.youtube.com/watch?v=7sABky-6Ve0 | AHA | Spanish | AHA page says 01:34 | oEmbed OK |
| R5 | Hands-Only CPR Mandarin (man / woman) | https://www.youtube.com/watch?v=TrNvELe8p-8 ; https://www.youtube.com/watch?v=f0cj51DfDuI | AHA | Mandarin | 01:34 each per AHA page | oEmbed OK |
| R6 | RevivR | https://www.bhf.org.uk/revivr ; promo https://www.youtube.com/watch?v=ykUKn1NSuhE | British Heart Foundation | Free interactive CPR course: "In just 15 minutes" [V], uses a cushion and the phone camera for "real time feedback on your chest compression" [V], a simulated 999 call, AED use; issues a certificate | 15 min | Page full, direct; oEmbed OK |
| R7 | Lifesaver | https://www.resus.org.uk/public-resource/how-we-save-lives/lifesaver-learning/lifesaver ; intro https://www.youtube.com/watch?v=RaHKEqe91A0 | Resuscitation Council UK | Interactive film, "four action-packed scenarios" [V]; browser, iPhone and Android; links to GoodSAM sign-up | Launched 2013, updated 2017 and 2020 (search snippet) | Page full, direct; oEmbed OK |
| R8 | e-Lifesaver | https://www.resus.org.uk/public-resource/how-we-save-lives/lifesaver-learning/e-lifesaver | RCUK | Page fetched; content not examined | | Page exists |
| R9 | BRC "Unresponsive and not breathing" animation and film | https://www.youtube.com/watch?v=6Gj8ohfBUEs ; https://www.youtube.com/watch?v=gDmy0of0XAk ; recovery-position animation https://www.youtube.com/watch?v=N5LMOMsGq0s | British Red Cross | Hands-only sequence (see D12) | | oEmbed OK |
| R10 | British Red Cross First Aid app, and Baby and Child First Aid app | https://www.redcross.org.uk/first-aid/first-aid-apps | British Red Cross | "over 20 first aid skills" [V], works offline, videos and quizzes | Free | Page full, direct |
| R11 | American Red Cross First Aid app | https://www.redcross.org/get-help/how-to-prepare-for-emergencies/mobile-apps.html | American Red Cross | Videos, quizzes, step-by-step advice, English/Spanish toggle | Free | Page full, direct |
| R12 | How to do CPR on an Adult | https://www.youtube.com/watch?v=BQNNOh8c8ks | St John Ambulance | Adult CPR demonstration | About 4 min per snippet; **may predate 2021/2025 guidance, check** | oEmbed OK |
| R13 | St John Ambulance first aid advice | https://www.sja.org.uk/first-aid-advice/ | SJA | Topic pages (DR ABC etc.). Note: https://www.nhs.uk/tests-and-treatments/first-aid/ now redirects here | | Redirect observed directly |
| R14 | ACS Stop the Bleed Interactive Course | https://www.stopthebleed.org/training/online-course/ ; video https://www.youtube.com/watch?v=w--RrBo5oGg | American College of Surgeons | Free online version of the classroom lecture, "three methods of bleeding control" [V]; certificate requires an in-person Skills-Only Course | | Page full, direct; oEmbed OK |
| R15 | Epilepsy Action seizure first aid | https://www.epilepsy.org.uk/info/firstaid/what-to-do | Epilepsy Action (UK) | Seizure first aid | Page fetched, content not examined (Part B/C territory) | Page exists |
| R16 | Asthma + Lung UK, asthma attacks | https://www.asthmaandlung.org.uk/conditions/asthma/asthma-attacks | Asthma + Lung UK | Asthma attack steps | Fetched, not examined | Page exists |
| R17 | 911.gov / NHS 999 pages | D15, D16 | US National 911 Program; NHS | What the call-taker asks | | Read |

Not usable: Epilepsy Foundation (US) first aid page blocked by Cloudflare; AHA Hands-Only CPR
page readable only via Wayback; AHA kiosks ("more than 30 Hands-Only CPR Kiosks" [V]) noted but
not a teaching resource.

---

### 7. How often people meet these emergencies (what to teach first)

- **US.** AHA "CPR Facts and Stats", Wayback 20260919101819 of
  https://cpr.heart.org/en/resources/cpr-facts-and-stats . Read level: Wayback, direct.
  - "More than 350,000 cardiac arrests occur outside of the hospital each year." [V] OHCA location:
    "homes/residences (73.4%), followed by public settings (16.3%), and nursing homes (10.3%)" [V].
    "among the over 356,000 OHCA that occurred, 40.2% received bystander CPR" [V] (2023 Heart
    Disease and Stroke Statistics). Survival to discharge 9.1% for EMS-treated non-traumatic adult
    OHCA (2021 data). About "10,000 cardiac arrests in the workplace each year" [V] (attributed by
    AHA to OSHA; I did not trace the OSHA report).
- **UK.** RCUK 2025 Guidelines, "Epidemiology of cardiac arrest", published 27 October 2025.
  https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/epidemiology-cardiac-arrest-guidelines
  (text saved by Part A; read directly). Read level: full, direct.
  - "approximately 115,000 out-of-hospital cardiac arrests reported to the ambulance services in
    the UK each year" [V]; ambulance services "attempt resuscitation in around 43,000 people each
    year" [V]. "70-80% occur at home" [V]. Bystander CPR: England 72.6%, Scotland 62.6%, Wales
    64.3%, Northern Ireland 41.5%. Bystander AED use 8 to 10%. 30-day survival: England 9.5%,
    Scotland 9.6%, NI 6.5%.
  - **Number drift:** BHF pages variously say "over 40,000" (RevivR page) and "more than 30,000"
    (2024 and 2025 press releases) UK OHCAs a year; RCUK's The Circuit page says "over 30,000";
    RCUK's 2018 law booklet says around 30,000 resuscitation attempts in England. These count
    different things (all arrests vs EMS-attempted resuscitations; UK vs England). The lesson
    should use the RCUK 2025 figures and say which count it is.
  - BHF 2024 release: "around 80 per cent of out-of-hospital cardiac arrests happening in the home"
    [V].
- **Europe.** ERC 2025 lay brochure (D30): incidence of EMS-treated OHCA "55 per 100,000
  inhabitants" [V]; "70% of cardiac arrests occur in private locations" [V]; survival averages 7.5%
  (range 3.1% to 35% by country); 17 countries have first responder systems.
- **What this argues for sequencing:** most arrests happen at home, to someone the rescuer knows,
  and at home the sex gap disappears (D31). The first person there is usually family. So lesson 1
  should be recognition, calling, and hands-only CPR on a loved one, with the stranger-in-public
  case (where fears of liability and touching bite) second. AED use is rare (about 9% in England)
  but is the biggest lever where it happens. (V judgement, grounded in E data.)

---

### Headline findings

1. The field's own courses put the bystander first: the Red Cross long course opens with "If Not
   You … Who?", then the emergency action steps, then consent and the law; HSE's EFAW syllabus
   opens with the first-aider's role and scene assessment. Check, Call, Care (Red Cross), DR ABC
   (SJA) and Check, Call, CPR (ERC) are the same order in different words.
2. 2025 guidance moved the call earlier: AHA says a lone rescuer with a phone calls and starts CPR
   at once using speakerphone (COR 1); ERC 2025 says call on speaker as soon as someone is
   unresponsive and check breathing while the call connects, because dispatchers recognise most
   arrests.
3. The Kitty Genovese "38 witnesses" story is false by the New York Times' own 2016 account; the
   bystander effect is real for individuals but weaker in dangerous emergencies (Fischer 2011), and
   in real CCTV of public conflicts someone helped in 90.9% of cases (Philpot 2020).
4. Legal risk of helping is very small. US: every state has a Good Samaritan law; 30 years of US
   cases found 3 suits over giving CPR against 167 over absent or late CPR (Murphy 2020). UK: no
   reported successful claim against anyone who came to help (RCUK), no general duty to rescue,
   SARAH 2015 in England and Wales. Vermont, Minnesota and Rhode Island impose a duty to give
   reasonable assistance, which calling for help can satisfy; France makes failing to help
   (including failing to call) a crime.
5. Fear of hurting the person is the most-cited UK barrier (51% in a 2025 BHF poll); in public,
   women are less likely than men to get bystander CPR (39% vs 45%), and the public attributes this
   to fears about touching and injury.
6. Training works but decays: skills fall within 3 months (Riggs 2019); ILCOR 2025 now strongly
   recommends feedback devices in training and weakly suggests instructor-led or self-directed
   digital training as equivalent routes for laypeople; very short videos make people far more
   likely to try (Bobrow 2011).
7. You do not need a certificate to help. Certificates are workplace instruments: OSHA 1910.151
   requires "adequately trained" people where no clinic is near; HSE certificates last 3 years;
   Red Cross 2 years.
8. Most cardiac arrests are at home (70-80% UK, 73.4% US), so the first rescuer is usually family.

### US vs UK/Europe differences (this area)

- Number: 911 (US); 999 or 112 (UK); 112 throughout the EU alongside national numbers.
- Mnemonic: Check, Call, Care (Red Cross) and AHA's call-then-compress for lone rescuers; DR ABC /
  DRSABCD primary survey (UK, Australia); Check, Call, CPR (ERC).
- Location: US call-taker asks for street address; UK phones send AML location automatically and
  some NHS ambulance services use what3words as a fallback.
- AED locators: PulsePoint (US, dispatch-integrated, community by community); The Circuit (UK
  national register used by 999 call handlers; defibfinder.uk for the public, not for
  emergencies); GoodSAM (UK and elsewhere).
- Law: US state Good Samaritan statutes plus federal AED immunity (42 USC 238q) and overdose
  Good Samaritan laws; a few US states impose a duty to assist. UK: no Good Samaritan statute, no
  duty to rescue, SARAH 2015 in England and Wales only, common-law necessity everywhere. France and
  much of continental Europe: a criminal duty to assist (Art. 223-6), satisfied by calling help.
- Workplace: OSHA gives a general "adequately trained" rule; HSE prescribes EFAW (1 day) and FAW (3
  days) content and a 3-year certificate.
- Schools: most US states require CPR for high school graduation (84% as of end-2024); England made
  CPR and defibrillator awareness statutory in secondary health education from 2020; ERC calls for
  mandatory school training from age 4.
- Public teaching of breaths: BRC teaches hands-only to the public; SJA and RCUK teach 30:2 for the
  trained; AHA teaches hands-only for untrained and breaths for trained (COR 2a).

### Contested questions

1. **Should the law impose a duty to rescue? (V)**
   - For: supporters of duty-to-assist laws (e.g. the Vermont and Minnesota legislatures; Kaufman's
     "Bad Samaritan" advocacy) argue a minimal duty, limited to what is safe and satisfied by
     calling for help, states a moral floor, nudges hesitant bystanders, and costs nothing to the
     law-abiding. France has had such a duty in its penal code for decades.
   - Against: the common-law tradition (as RCUK summarises it, no obligation to help unless you
     caused the danger) holds that compelled virtue is not virtue, that criminal duties are
     vague ("reasonable assistance") and rarely enforced, and that fear of prosecution could make
     scenes more crowded, not better. Critics of SARAH 2015 add that statutes may "erode the
     protection that already exists" [V, D37].
2. **Is online-only training enough? (CE)**
   - For: ILCOR 2025 finds self-directed digital training comparable to instructor-led for lay
     skill acquisition (weak, very low certainty), cheaper, and repeatable; ultra-short videos raise
     attempt rates (Bobrow); BHF RevivR gives camera-based feedback.
   - Against: HSE "strongly recommends" in-person assessment of practical skills; ILCOR found
     insufficient evidence for apps, games and VR specifically; skills decay within 3 months
     regardless; simulated confidence "may not translate to real-life situations" [V, D41].
3. **Should lay people be taught mouth-to-mouth at all? (CE, with a V element)**
   - For breaths: AHA 2025 (COR 2a) says trained lay rescuers should give breaths because outcomes
     may be better; RCUK notes children and drowning victims arrest from lack of oxygen, where
     compression-only "will be much less effective" [V, D38]; SJA teaches 30:2.
   - For hands-only teaching: simpler messages raise the number who act (Japan dissemination cited
     in AHA 2025); reluctance to give mouth-to-mouth is a known barrier; BRC teaches the public
     compressions only. Most agree: if you cannot or will not give breaths, keep compressing.
4. **How often should lay people retrain? (CE)** HSE suggests annual refreshers within a 3-year
   certificate; Riggs et al. suggest every 3 to 6 months; ERC suggests brief annual refreshers;
   spaced-learning evidence is very low certainty and thin for laypeople.
5. **Do bystander-alert apps save lives or only raise CPR rates? (CE)** ILCOR keeps a strong
   recommendation on very low certainty evidence; survival gains appear mainly in dense areas with
   high alert acceptance (per Part 4 search snippet, not read).

### Myths experts correct

- **"You will be sued."** US: 3 suits over giving CPR in 30 years found, against 167 over failing
  or delaying it (Murphy 2020, D33); UK: no reported successful claim (RCUK, D37).
- **"Someone else will help / 38 people watched Kitty Genovese die."** False as told (NYT 2016,
  D24; Manning 2007, D23); in real public conflicts someone helps 9 times in 10 (Philpot 2020,
  D26). But do not assume: take charge and give people jobs.
- **"You need a certificate to help."** AHA: all lay rescuers should give compressions (COR 1);
  RCUK: untrained use of an AED is justified. Certificates are for employers.
- **"You might make it worse."** In cardiac arrest, RCUK: making things worse is "virtually
  impossible, since without intervention death is inevitable" [V, D37]; AHA 2025: compressions on
  an unconscious person not in arrest have "not been associated with serious harm" [V, D13].
- **"You must give mouth-to-mouth or it is not CPR."** Compression-only CPR is accepted for the
  untrained or unwilling (ILCOR, AHA, BRC).
- **"Look up the nearest defibrillator on a website."** defibfinder.uk says it is not for
  emergencies; call 999 and the call handler directs you (D20).
- **"Download what3words or they will not find you."** UK phones send AML location automatically;
  what3words is a fallback and the call handler can text a link (D18).

### Not read (cite only after reading)

- Darley & Latané 1968 JPSP full text (85%/31% figures: snippet only). Short title: *Darley 1968*.
- Latané & Darley 1968 "Group inhibition of bystander intervention" JPSP 10(3):215-221. *Latané 1968*.
- Manning, Levine & Collins 2007 full text (abstract only). *Manning 2007*.
- Fischer et al. 2011 full text (abstract only). *Fischer 2011*.
- Coons & Guy 2009 full text: the five named reasons for unwillingness. *Coons 2009*.
- Perman et al. 2019 full text (abstract used). *Perman 2019*.
- Murphy et al. 2020 full text; AHA RSS 2019 abstract behind the dollar figures. *Murphy 2020*.
- AHA 2025 Part 12 Resuscitation Education Science full text and COR/LOE (blocked). *AHA Part 12*.
- AHA 2025 Part 4 Systems of Care (PMC13003348 fetched but not read). *AHA Part 4*.
- ERC 2025 Education for Resuscitation full chapter (blocked). *ERC Education 2025*.
- ERC 2025 Systems Saving Lives full chapter. *ERC Systems 2025*.
- First Aid Manual 11th edition table of contents. *FAM 11 contents*.
- AHA Heartsaver 2025 student workbook contents. *Heartsaver 2025 TOC*.
- American Red Cross r.25 manual contents. *ARC r.25 TOC*.
- Red Cross Scientific Advisory Council note on ABC vs CAB (linked from D4). *ARC ABC note*.
- GAO-21-248 full report (WebFetch summary only); PDAPS overdose dataset. *GAO 2021*, *PDAPS*.
- Kaufman Bad Samaritan Laws database entries. *Kaufman database*.
- Légifrance primary text of Art. 223-6 (read via mirror). *Légifrance 223-6*.
- Böttiger & Van Aken 2015 Kids Save Lives editorial. *KSL 2015*.
- Wissenberg 2013 full text (list of Danish initiatives). *Wissenberg 2013*.
- Yeung 2020 spaced learning, Riggs 2019, Roppolo 2007, Bobrow 2011, Hasselqvist-Ax 2015,
  Anderson 2014, Uny 2023, Blewer 2018, Eason 2025: abstracts only. *(each by first author/year)*.
- Peng Yu case (China): the Washington International Law Journal article blocked; not used. *Peng Yu*.
- Ofcom 112/999 page (blocked). *Ofcom 112*.
- OSHA source for "10,000 workplace cardiac arrests". *OSHA 10,000*.
- StatPearls "Good Samaritan Laws" (bot wall). *StatPearls GSL*.
- Epilepsy Foundation (US) seizure first aid (blocked). *Epilepsy Foundation*.

---

## Gate closures, lesson 2

*2026-09-24, by the lesson 2 drafter. Append-only. Quotation marks here are [V]: copied from text
extracted directly (curl and an HTML stripper for RCUK; the Part A researcher's saved extractions
for the ERC lay book and AHA Part 7, which are the same files Parts A and D quote from).*

**G1 (ERC 2025 chapters): not closed, and not needed for lesson 2.** The ERC chapters (110771 and
the rest) stay on the unread line. The outline's fallback asks whether **RCUK 2025's adult BLS
text** carries the panting athlete and the seizure-like episode. It does, so lesson 2 teaches both
from RCUK, cites no ERC chapter, and drops the 4.3% figure and the "We need to do CPR" wording
study as the fallback says.

- **RCUK 2025 Adult basic life support guidelines** (S11), re-read today in full, direct, from
  https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines
  (published 27 October 2025). Passages used by lesson 2:
  - Key points: "Recognition of cardiac arrest can be challenging." [V] "If a person is found
    unresponsive, call 999 as soon as possible. Ideally, this should be carried out by a bystander,
    but if no one else is available you should make the call yourself before assessing whether
    breathing is normal." [V] "The ambulance service call handler will be able to assist you if you
    are uncertain." [V]
  - Changes for 2025: "The ambulance service call handler will be able to assist you in identifying
    abnormal breathing, if needed." [V] "Exercise is a common precipitant of cardiac arrest. The
    2021 guidelines emphasised descriptions of slow or laboured breathing as indicators of abnormal
    breathing. For 2025, we recognise that early after the onset of cardiac arrest, athletes may
    display a near-normal or panting breathing pattern." [V] Added for 2025: "The role of the
    ambulance service call handler is critical to early recognition of cardiac arrest and
    initiation of CPR." [V]
  - The public steps, headed "3 steps to save a life": Check ("Is it safe to approach?", "Is the
    person conscious?"), Call ("Call 999 immediately if they are unresponsive.", "Assess
    breathing.") and CPR ("Start CPR immediately if they are unresponsive with abnormal breathing."
    and "As soon as an AED is available, attach it and follow the AED instructions.") [V].
  - Recognising cardiac arrest: "Suspect cardiac arrest in any person who is unresponsive." [V]
    "Slow, laboured breathing, as well as other abnormal patterns such as agonal gasping or panting,
    must be recognised as signs of cardiac arrest." [V] "A short period of seizure-like activity
    may occur at the onset of cardiac arrest. Once the seizure stops, assess breathing." [V]
  - Alerting the ambulance service: "If you have a mobile phone, activate the speaker function and
    call 999 without delay." [V] "If you are alone and do not have a mobile phone, or there is no
    mobile phone network/satellite connection, you can shout for help and then continue to assess
    breathing." [V] "If you think no one will come to help, then you will have to leave the person
    and call 999. Do this as quickly as possible." [V] "If they remain unresponsive and are not
    breathing normally when you return from summoning help, immediately start CPR." [V]
  - Role of call handlers: "Once cardiac arrest is recognised, ambulance service call handlers
    should provide CPR instructions to all callers." [V] "The ambulance service call handler should
    assume the caller does not know how to perform CPR and provide chest-compression-only
    instructions." [V] "Once CPR is underway, the ambulance service call handler should ask if there
    is an “AED” or “defibrillator” at the scene." [V] If none is at the scene and more than one
    bystander is present, call handlers "should guide bystanders to the nearest AED" [V].
- **RCUK 2025 First aid guidelines** (S15), recovery position section re-read today, direct:
  "In cases of agonal breathing or trauma, do NOT move the person into the recovery position." [V]
  (This confirms Part A's note that the RCUK text is identical to ERC's here, so lesson 2 cites
  RCUK.)
- **ERC lay book** (S10, D30), *The ERC Guidelines 2025 on Resuscitation for Everyone*, pages 21 to
  22, "The 3 Cs", from the Part A extraction (hyphenation at line ends removed): "One of the biggest
  barriers to a bystander stepping in to help is when the victim seems to be breathing." [V] "They appear to be
  gasping, moaning, sighing, gurgling, groaning, snorting, or struggling to breathe. This is not
  breathing!" [V] "Cardiac arrest victims who were in the middle of vigorous exercise or play,
  where cardiac arrests can happen, may appear to be breathing heavily, and their eyes are often
  open." [V] "Brief, seizure-like movements are often seen in younger cardiac arrest victims and
  can make recognition of cardiac arrest difficult." [V] "Cardiac arrests are not always recognised
  by bystanders on scene. In fact, most often, it is the emergency medical service (EMS) operator
  on the phone who does." [V] The dispatcher "may start by asking: “Is the person conscious?” “Are
  they breathing normally?”" [V]
- **AHA 2025 Part 7, Adult BLS** (S1, D13), §6.1 and §6.2 supportive text, from the Part A saved
  text of Wayback 20251026225858: "Recognition by lay rescuers is, therefore, based primarily on
  level of consciousness and respiratory effort rather than using a pulse check." [V] "Agonal
  breathing is described by lay rescuers with a variety of terms including abnormal breathing,
  snoring respirations, and gasping." [V] Agonal breathing "diminishes the longer a person is in
  cardiac arrest" [V] and "is cited as a common reason for lay rescuers to misdiagnose a patient as
  not being in cardiac arrest" [V]. On the call: "Given that most lay rescuers will likely have
  mobile phones with hands-free options, it is possible for lay rescuers to provide CPR and
  activate the emergency response system at nearly the same time." [V] "Alternatively, a second
  lay rescuer can be instructed to call 911." [V] "Our recommendation values the practical
  considerations of timely emergency medical response dispatch and the availability and value of
  remote assistance to improve the quality of CPR." [V] The "hands-free" speaker sentence is in
  Part D 1.5 (D13). Note for the fact-checker: the pulse-check sentence "should not check for a
  pulse" (COR 1, C-LD) and the 47% and 73% accuracy figures are in **Part 6, Pediatric BLS** (S2),
  recommendation 1 of the lay-rescuer section and its supportive text; the adult Part 7 says only
  the sentence above. Lesson 2 attributes each to its own part.

**G2 (AHA telecommunicator recognition box): not closed; fallback used.** Lesson 2 gives no AHA
recommendation for call-taker recognition. It cites AHA Part 4's T-CPR recommendation 1 (COR 1,
LOE A, compression-only instructions for adults), which is a different box from the suspect one.

**G4 (videos): not closed.** Nobody has watched the AHA 2012 Hands-Only video or RCUK's "Become
ResusReady" film against 2025 guidance, so lesson 2 embeds neither and links neither.

**G5 (ILCOR manuscripts): fallback used.** Lesson 2 paraphrases ILCOR's dispatch-CPR
recommendation with its strength and certainty and no quotation marks.

**G15 (Red Cross on ABC and CAB): fallback used.** Lesson 2 says what the Red Cross's read pages
teach and makes no claim that the Red Cross and the AHA agree or disagree on sequence.

## Gate closures, lesson 3

*2026-09-24, by the lesson 3 drafter. Append-only. Quotation marks here are [V]: copied from text
extracted directly today (curl and an HTML stripper for RCUK, St John, the BHF and the American Red
Cross; curl of the Internet Archive captures named below for the AHA; PubMed efetch for the
abstracts). Defect 26 applied: every source lesson 3 rests on was re-opened at its primary rather
than taken from Part A's summary, and three of Part A's summaries needed correcting (below).*

**G1 (ERC 2025 chapters): not closed, not needed.** Lesson 3 cites RCUK 2025 for every European
instruction. Two things the outline attributes to ERC are therefore handled from other sources:
larger bodies (AHA 2025 and RCUK 2025 Special circumstances, below) and clothing (RCUK 2025 carries
the same sentence Part A gave from ERC).

**G4 (videos): not closed.** Nobody has watched the American Red Cross "How to Perform Hands-Only
CPR" or the AHA "How to save a life: Hands-Only CPR" against 2025 guidance. Lesson 3 embeds neither
and links the organisations' own pages instead.

**G5 (ILCOR manuscripts): fallback used.** Lesson 3 paraphrases ILCOR 2025 BLS on firm surfaces, on
beds in hospital and on monitoring rescuer fatigue, with strength and certainty and no quotation
marks. The ILCOR EIT 2025 feedback-device sentence it quotes is from the typeset *Circulation* text
(Part D, D41, Wayback 20260430180745), not a manuscript.

**G16 (images): closed for one image, two rejected.** Checked on Wikimedia Commons today through
the API (licence metadata) and by viewing each image:

- `Cardiopulmonary Resuscitation Adult.jpg`, a line drawing from a US Army Corps of Engineers
  Illinois Waterway Visitor Center brochure (source given on Commons as an Internet Archive capture
  of mvr.usace.army.mil, 2004), **public domain** (US federal work), 400 × 413 px, undated.
  https://upload.wikimedia.org/wikipedia/commons/d/de/Cardiopulmonary_Resuscitation_Adult.jpg .
  **Technique checked against 2025 guidance for posture only:** the rescuer kneels beside a person
  lying on their back on the floor, arms straight, shoulders above the hands, both hands one on top
  of the other in the centre of the chest. That matches RCUK 2025 ("Keep your arms straight."
  "Position your shoulders vertically above the person’s chest.") and AHA 2025's kneeling and
  knee-level recommendation. The drawing is too small to show whether the fingers are interlocked
  or exactly where on the breastbone the heel sits, and its date is unknown, so **lesson 3 uses it
  for posture only and its caption says so**. Used.
- `NASA astronaut Jessica Meir practices cardiopulmonary resuscitation (CPR) (jsc2025e070047).jpg`,
  public domain (NASA, 21 August 2025). Viewed: the rescuer is standing, the manikin is strapped to
  a raised board at about waist height with a second person's hands on its chest, in a spaceflight
  simulation. It shows the opposite of the knee-level position AHA 2025 recommends. **Rejected.**
- `Chest compressions.gif`, CC BY 3.0 (Bangkok Hospital Phuket, extracted by Mikael Häggström,
  2017), described on Commons as compressions "at 100 per minute" on a manikin. Not examined frame by
  frame. **Not used.**

**Primary re-reads for lesson 3**

- **AHA 2025 Part 7, Adult BLS** (S1), Wayback 20251026225858, re-read today, §6.2, §7.1 to §7.3
  and the obesity section in full:
  - §7.1 rec 1 (COR 1, B-NR): "In adult cardiac arrest, rescuers should perform chest compressions
    with the patient’s torso at approximately the level of the rescuer’s knees whenever possible."
    [V] Rec 2 (COR 1, C-LD): the heel of one hand on "the center (middle) of the person’s chest (the
    lower half to lower third of the sternum)" and the other on top "so that the hands are
    overlapped" [V]. Rec 3 (COR 1, C-EO): "resuscitation should generally be conducted where the
    person is found, as long as high-quality CPR can be administered safely and effectively." [V]
    Rec 4 (2a, C-LD): "it is preferred to perform CPR on a firm surface and with the person in the
    supine position, when feasible and does not delay chest compressions." [V] Rec 5 (2b, C-LD):
    dominant hand on the sternum may be considered.
  - §7.1 supportive text: "Multiple simulated cross-over RCTs have shown that kneeling on the floor
    or in the bed next to the manikin resulted in improved chest compression depth compared to
    standing in adult populations." [V] "Two studies specifically evaluating height found that when
    the manikin torso was no more than 10 cm below the rescuer’s knee this was associated with
    improved chest compression depth." [V] On hand position, 2 of 3 small studies (57 patients)
    found better physiological measures over the lower third of the sternum, with no difference in
    outcomes; "Radiographic studies show the left ventricle is typically located inferior to the
    internipple line, corresponding with the lower half of the sternum." [V] "However, hand
    placement inferior to the internipple line may result in compression over the xiphoid, which may
    be less effective." [V] On moving the person: "Importantly, delay in initiation of chest
    compressions is associated with worse outcomes. In a study of telephone-assisted CPR during
    OHCA, delays to CPR due to patient repositioning occurred in 41% of cases, most commonly due to
    physical limitations of the rescuer." [V] "Odds of survival to hospital discharge was
    significantly lower in the group with delayed chest compressions." [V] "A firm surface improves
    the likelihood of adequate chest compression depth." [V]
  - §7.2 synopsis: "Chest compressions are required for forward flow during cardiac arrest and
    pauses in chest compressions have been shown to result in an almost immediate drop in coronary
    perfusion pressure, which is associated with reduced likelihood of ROSC." [V] Rec 4 (2a, B-R):
    switch compressors "approximately every 2 min" [V]. Supportive: "Chest compression depth begins
    to decrease after 90 to 120 seconds of CPR, although compression rates do not decrease
    significantly over that time window." [V] "A randomized trial using manikins found no
    difference in the percentage of high-quality compressions when rotating every 1 minute compared
    with every 2 minutes." [V]
  - §7.3 rec 1 (COR 1, B-NR): "During manual CPR, rescuers should perform chest compressions to a
    depth of at least 2 inches, or 5 cm, for an average adult while avoiding excessive chest
    compression depths (greater than 2.4 inches, or 6cm)" [V]. Rec 2 (2a, B-R): audiovisual
    feedback devices reasonable. Rec 3 (2a, B-NR): "it is reasonable for rescuers to perform chest
    compressions at a rate of 100 to 120/min." [V] Rec 4 (2a, C-LD): "It can be beneficial for
    rescuers to allow complete chest wall recoil for adults in cardiac arrest, such as by not
    leaning on the chest between compressions." [V] Rec 5 (2b, C-EO): compression and recoil times
    approximately equal.
  - §7.3 synopsis: "Although there are numerous retrospective observational studies, there is a
    paucity of prospective studies or randomized trials specifically examining CPR quality
    targets." [V] "Further, evidence suggests interactions between CPR components (eg, rate and
    depth) confound studying them in isolation." [V]
  - §7.3 supportive: a 2020 ILCOR scoping review of 12 studies, over 10,700 patients: "Several
    studies found improved survival to hospital discharge when compression depth was at least 5 cm,
    compared to less than 4 cm." [V, reference numbers removed] "Observational research has
    suggested reduced survival with chest compressions of excessive depth (greater than 6cm)." [V,
    reference numbers removed] On rate, three studies of over 13,700 patients "suggested improved
    survival to hospital discharge with compression rates of 100 to 119/min, compared with lower or
    higher rates." [V, reference numbers removed] "One randomized trial found no difference in
    survival between chest compression rates of 100 and 120/min." [V, reference number removed] In
    one study, return of circulation was better at 121 to 140 a minute (n = 222), but "the writing
    group placed higher value on survival compared with ROSC when making this recommendation." [V]
    On recoil: "Porcine study data suggest decreased coronary perfusion with rescuers leaning on the
    chest." [V, reference number removed]
  - **Obesity section.** Rec 1 (COR 1, C-LD): "CPR for adults with obesity who are in cardiac arrest
    should be provided by using the same techniques as for the nonobese patient." [V] **Web copy
    error:** the box's second row (2a, C-LD) repeats the third row's text word for word ("It may be
    reasonable for rescuers to increase the force of compressions to achieve adequate depth ..."),
    and the third row is graded 2b, C-EO, so the grade of the "more force" recommendation is
    uncertain on this capture. Lesson 3 gives the more-force point from the supportive text with no
    grade. Synopsis: compressions can be difficult "due to increased chest wall thickness,
    requiring greater force to achieve the recommended depth." [V, reference number removed] "The
    physical demands of performing CPR on an adult patient with obesity can lead to faster rescuer
    fatigue, highlighting the need for close monitoring to switch rescuers." [V] Supportive: "During
    OHCA in which an adult patient with obesity is found in a bed, the time required to move the
    patient must be carefully considered to avoid delays in chest compression initiation." [V]
    "Rescuers may need to increase force of compressions to achieve adequate depth of compressions
    when compressions are performed on inflated mattresses or for adults with obesity." [V,
    reference number removed]
  - §6.2 rec 5 (2a, C-LD): "When immediately available, it is reasonable for rescuers to use PPE
    during CPR for adult cardiac arrest." [V] Supportive: "Rescuers must be aware, however, that the
    process of donning PPE may delay the initiation of CPR, and use of PPE has the potential to
    adversely affect CPR performance and increase rescuer fatigue." [V, reference number removed] A
    2023 meta-analysis found no change in CPR performance across 17 manikin studies, and worse
    fatigue scores in two pooled studies. §6.1 supportive (confirming Part A's quote): "The benefit of
    providing CPR for someone in cardiac arrest far outweighs any risk associated with providing
    chest compressions to someone who is not." [V] §6.2 supportive: "Providing manual chest
    compressions for an unconscious patient not in cardiac arrest has not been associated with
    serious harm, as demonstrated in several observational studies." [V, reference numbers removed]
- **AHA 2025 Part 10, Special Circumstances** (S3), Wayback 20251027153841, pregnancy section (§19.3
  in Part A's numbering) re-read in full today. Rec 4 (COR 1, C-LD): "Manual left lateral uterine
  displacement should be provided in conjunction with chest compressions for a pregnant patient in
  cardiac arrest when the fundal height is at or above the umbilicus." [V] Synopsis: "The growing
  uterus can cause position-dependent aortocaval compression when the pregnant person is supine."
  [V] "Compression of the inferior vena cava leads to a decrease in preload, stroke volume, and
  cardiac output, which must be overcome to enable adequate blood flow." [V, reference number
  removed] Supportive: "Manual left lateral uterine displacement (Figure 6) alleviates aortocaval
  compression while allowing the patient to remain in a supine position during the resuscitation."
  [V] A meta-analysis of 8 simulation crossover trials found better compression technique on a
  supine manikin than on a left lateral tilt. The recommendations in this section are written for
  resuscitation teams (resuscitative delivery, airway management, IV access); **Figure 6 was not
  seen**, and no lay-rescuer version of the displacement is described in the text read.
- **RCUK 2025 Adult basic life support guidelines** (S11), re-read today, direct. Key points: "The
  risk of harm from CPR is low. Rescuers should not be concerned that they will cause serious injury
  if the person is not in cardiac arrest." [V] High-quality chest compressions, in full: "Start
  chest compressions as soon as possible." "Place the heel of one hand on the lower half of the
  sternum (“in the centre of the chest”)." "If you are unable to adequately visualise the sternum
  due to clothing, it is reasonable to displace or remove such garments so you can identify the
  correct anatomic landmark." "Place the heel of your other hand on top of the first hand."
  "Interlock your fingers of the hands to ensure that pressure is not applied over the ribs." "Keep
  your arms straight." "Position your shoulders vertically above the person’s chest." "Compress to
  a depth of at least 5 cm, but not more than 6 cm." "Compress the chest at a rate of 100–120 min-1
  with as few interruptions as possible." "Allow the chest to recoil completely after each
  compression; avoid leaning on the chest." "CPR is most effective when performed on a firm
  surface. However, rescuers should not move a person from a ‘soft’ surface, e.g. a bed, to the
  floor. Start CPR on the bed and, if needed, compress the chest deeper to compensate for the soft
  mattress." [V, each] Safety: "Lay people should start CPR for presumed cardiac arrest without
  concerns about harm to people not in cardiac arrest." "The risk of infection to rescuers performing
  CPR is low." "The risk of physical injury to the rescuer from performing CPR is low." [V, each]
  The adult BLS text says nothing about swapping rescuers or about larger bodies.
- **RCUK 2025 Special circumstances guidelines** (S15), re-read today, direct, "Resuscitation in
  obese patients" and "Cardiac arrest in pregnancy": obese patients get standard resuscitation with
  no deviation from standard BLS (the sentence contains a spaced dash, so lessons paraphrase it).
  "Consider pregnancy in any collapsed woman of childbearing age." [V] "Above 20 weeks gestation,
  relieve aortocaval compression as early as possible and maintain it throughout resuscitation.
  Manual left uterine displacement in maternal cardiac arrest is preferred over the lateral tilt,
  due to the practicalities of delivering chest compressions." [V] Like the AHA's, the rest of the
  section is written for hospital teams.
- **St John Ambulance, "How to do CPR"** (S17), clinically reviewed 28/04/2025, re-read today,
  direct: "Start chest compressions. Ideally, this should be on a firm surface. For example, if they
  are on a bed, and if it is safe for you to do so, move them to the floor." [V] "Lean forwards so
  your shoulders are over your hands, keep your arms straight and press down hard, to a depth of
  about 5-6cm before releasing the pressure and allowing the chest to come back up." [V] Continue
  until help takes over, signs of life and normal breathing, "you are too exhausted to continue. If
  there is a helper, you should swap every one to two minutes, but try to minimise interruptions to
  chest compressions" [V], or a defibrillator is ready.
- **British Heart Foundation, "How to do CPR"** (S18), re-read today, direct, undated: "press down
  smoothly and firmly at a rate of 2 per second. Try pushing to the beat of Stayin’ Alive by the Bee
  Gees." [V] "Sometimes minor injuries can occur, such as a cracked rib, but you should continue to
  give CPR to help save their life." [V] "A broken rib or other injury can be treated." [V]
  "Unfastening a thick coat will help but you do not need to remove any thin clothing to do CPR.
  Clothing does however need to be removed to attach a defibrillator." [V] "Usually, it’s best to
  press harder rather than softer." [V] "If you press too softly then your compressions won’t be
  effective." [V] "Keep giving CPR until emergency services arrive, the person regains consciousness
  or until you are too exhausted to continue. If there is somebody else with you ask them to take
  turns giving CPR." [V] "When a person is in cardiac arrest their heart stops pumping blood, which
  means their brain gets no oxygen." [V] "CPR keeps the heart pumping blood around the body until
  emergency help arrives." [V] The page also says the target is "one third of the chest depth (or 5
  to 6 centimetres)" [V].
- **American Red Cross, "CPR Steps"** (S19), re-read today, direct, undated: "Place the person on
  their back on a firm, flat surface" [V]; "Body position: Shoulders directly over hands; elbows
  locked" [V]; "Compression depth: At least 2 inches" [V]; "Allow chest to return to normal position
  after each compression" [V]; "Minimize interruptions to chest compressions to less than 10
  seconds." [V]

**Abstracts re-read today (PubMed efetch), and three corrections to Part A 2.8**

- **White L et al. 2010** (S35), *Circulation* 121:91-7, abstract. Prospective cohort, King County,
  Washington, June 2004 to January 2007. Of 1700 dispatcher CPR instructions, 762 were for people
  not in arrest, 313 of whom received compressions; 247 had complete follow-up. "12% (29 of 247)
  experienced discomfort, and 2% (6 of 247) sustained injuries likely or possibly caused by
  bystander CPR. Only 2% (5 of 247) suffered a fracture, and no patients suffered visceral organ
  injury." [V]
- **Haley KB et al. 2011** (S36), *Prehosp Emerg Care* 15:282-7, abstract. Retrospective review,
  one US county's EMS records, March 2003 to February 2009: 672 bystander CPR incidents, 77 (11.5%)
  not arrests, 72 evaluable for injury. "One patient (1.4%) had an injury that was documented in the
  medical record as possibly CPR-related: rhabdomyolysis." [V] **Correction to Part A:** the one
  injury was rhabdomyolysis, not a fracture; and 53% of the 72 were admitted to intensive care,
  so these were not well people. Conclusion: "Short-duration bystander CPR caused injury in less
  than 2% of victims." [V]
- **Williamson F et al. 2024** (S37), *Resusc Plus* 20:100828, abstract. Systematic review, five
  observational studies, 1031 patients. "No deaths directly attributable to chest compressions were
  reported, but 61 (6 %) died before discharge due to underlying conditions. In total, 9 (<1%)
  experienced injuries, including rib fractures and different internal bleedings, and 24 (2 %)
  reported symptoms such as chest pain. Evidence was of very low certainty due to risk of bias and
  imprecision." [V] **Correction to Part A:** the under 1% includes rib fractures and internal
  bleeding; Part A's "under 1% injured" is right but did not say what the injuries were.
- **Van Wijck SFM et al. 2024** (S38), *Eur J Trauma Emerg Surg* 50:1331-46, abstract. 74 studies,
  16,629 patients who had CPR for non-traumatic arrest. "Any CPR-related injury was documented in
  60% (95% confidence interval [95% CI] 49-71) patients. Rib fractures emerged as the most common
  injury, with a pooled prevalence of 55% (95% CI 48-62)." [V] Mechanical CPR risk ratio 1.36 against
  manual.
- **Hellevuo H et al. 2013** (S39), *Resuscitation* 84:760-5, abstract. 170 adults, **in-hospital**
  arrests, Tampere University Hospital, 2009 to 2011, depth measured by the defibrillator's
  accelerometer; injuries from autopsy, CT or chest X-ray. "Injuries were found in 36% of male and
  23% of female patients. Among male patients CPR-related injuries were associated with deeper mean
  - and peak compression depths (p<0.05). No such association was observed in women. The frequency
  of injuries in mean compression depth categories <5, 5-6 and >6 cm, was 28%, 27% and 49%
  (p=0.06)." [V] Conclusion: the injuries "were by and large not fatal." [V] **Correction to Part
  A:** the 49% against about 27% comparison was not statistically significant across all patients
  (p = 0.06); the significant association was in men only, and none was found in women. It supports
  the 6 cm cap as a caution, not as a proof, and the AHA's own stated reason for the cap is reduced
  survival in observational research (above).

**Training and practice sources used by lesson 3** (already in Part D, not re-read): ILCOR EIT 2025
(D41) "We recommend the use of CPR feedback devices during resuscitation training for health care
professionals and laypersons (strong recommendation, moderate-certainty evidence)." [V]; Riggs 2019
(D43, abstract) "Skills deteriorated within 3 months, then plateaued from 3 to 6 months." [V]; BHF
RevivR (R6) and RCUK Lifesaver (R7).

---

## Stage 4 note, lesson 1

*2026-09-24, by the lesson 1 fix pass. Append-only. Checked against the primaries the reviewers
saved: the PubMed abstracts (Murphy 2020, Fischer 2011, Manning 2007), the RCUK law booklet PDF's
extracted text, and the Minnesota and Rhode Island statutes re-fetched today.*

Entries corrected in place, each marked "Stage 4 note, lesson 1":

- **D33 Murphy 2020.** The caution that the 167 cases were "mostly suits against people or
  organisations with a duty" had no source and is withdrawn. The three are claims that giving CPR
  did harm; the 167 claimed CPR was inadequate or untimely, which includes CPR that was given. The
  abstract does not say who the defendants were. The summary lines elsewhere in this file ("3 suits
  over giving CPR against 167 over absent or late CPR", Headline findings and Myths) should be
  read as "3 suits alleging harm from giving CPR against 167 alleging it was inadequate or late".
- **D25 Fischer 2011.** "Explained by" recognition was the arousal-cost-reward model's proposal,
  which the abstract says the findings are "consistent with"; it runs through arousal. The
  abstract says nothing about responsibility.
- **D37 RCUK law booklet.** Added the DNACPR passage's context (legally binding advance decisions,
  and "very unlikely" a rescuer would know of one), the implied-consent qualifier for rescuers who
  are not medically qualified, the duty-of-care exceptions, Scotland's position, the second half of
  the SARAH criticism ("erode"), and the full "professional rescuer" clause.
- **Duty-to-assist statutes.** Only Minnesota mentions getting aid. All three have a danger
  clause (Minnesota's and Rhode Island's wording added from today's re-read).

**Philpot 2020 postprint** (D26, full, direct), p. 14: the authors themselves draw the
reconciliation between the laboratory and the footage, distinguishing "responsibility diffusion
and mechanical helping potential" and saying that "while additional numbers may reduce the
individual helping propensity, it can provide a larger pool from which help-givers may be sourced"
[V]. D26's "Caveat" line attributes the reconciliation to this file; it is the authors'.

**Manning 2007** (D23, abstract): the parable sentence in full is "the story itself has become
a modern parable, the telling of which has served to limit the scope of inquiry into emergency
helping" [V]. It does not say the story is told because it illustrates a finding.

## Browser gate closures (2026-09-24)

A browser pass over the OUTLINE's Stage 1 gates, in an ordinary browser (the built-in browser
pane), on 2026-09-24. Nobody signed in to anything; no bot check, paywall or sign-in was bypassed;
the one cookie banner acted on (cpr.heart.org) was answered "Reject All". [V] here means copied
from the page's own text (extracted from the rendered page, whitespace normalised, and on the
resuscitationjournal.com and ahajournals.org pages en dashes in number ranges shown as hyphens). [V-img]
here means a recommendation table published as an image on the publisher's own site and read by
eye from a clear, full-size rendering; each was legible without doubt. Where a quote below differs
from an earlier quote in this file, the earlier text is left as it was and the difference is
stated here.

**Unread entries this pass clears** (for whoever commits the lesson that needs them; this section
does not edit the unread line): `110771`, `110753`, `110752`, `111314`, `111316`, `Zideman`,
`Djakow`, `Part 12`, `Scientific Advisory Council`, and the host names `medicalistes` and
`semicyuc` (the chapters they hosted are now checked against the publisher, so a citation should
name the publisher version and never the third-party host). Still unread: `223-6` (G9), `Darley`,
`Latan`, `Latane` (G8), `PDAPS`, and the rest of the line.

### G1. ERC 2025 chapters and errata: CLOSED

All three chapters are free to read in full at the publisher (resuscitationjournal.com) in an
ordinary browser. Every ERC quote in Parts A and C was searched for in the publisher's text.

**ERC 2025 Adult BLS (110771).** https://www.resuscitationjournal.com/article/S0300-9572(25)00283-7/fulltext
(reached from doi.org/10.1016/j.resuscitation.2025.110771). READ LEVEL: full, direct, publisher.
No erratum is linked from the page.
- Found word for word: the panting-athlete sentence (line 815); the seizure-like activity sentences
  (816); "If you think no-one will come to help..." (825); "Defibrillation should not be delayed to
  provide additional CPR." (869); "Rescuers should not be concerned about exposing the persons
  chest to apply defibrillation pads. They should prioritise life-saving interventions over
  concerns for modesty." (871; "persons" without an apostrophe is the publisher's); both
  rescuer-risk sentences (900); "is associated with improved outcomes" (814); "COVID-19 patients
  should be treated as any other patients. Modifications to CPR are no longer required." (930).
  The words before that last quote read, as printed: "BLS modifications for COVID-19 been removed
  from the BLS guideline." [V] (the missing "have" is the publisher's).
- **Correction to line 1000:** the quote "asystole and a normal rhythm, no shock is advised." cuts
  a parenthesis. The publisher reads "For other heart rhythms (including asystole and a normal
  rhythm), no shock is advised." [V] Quote it whole.
- Numbers confirmed against the publisher: agonal breathing "observed in 30-60 % of cardiac
  arrests" [V]; seizure-like activity "3502 OHCAs identified 149 (4.3 %)" [V] and "more likely to
  survive to hospital discharge (44 % vs. 16 %; p < 0.05)" [V]; "3-6 % lower probability of
  survival to discharge" per minute of delay to defibrillation [V]; locked cabinets "a low risk of
  theft, missing AEDs or vandalism was reported (<2%)" [V] and "half of all injuries sustained while
  accessing an AED were incurred when attempting to break glass" [V]; volunteer responders "62 % vs
  48 %" and "survival increased from 26 % to 39 %" [V]; the lay words for agonal breathing are as
  line 814 lists them.
- "We need to do CPR" (line 828) is in the publisher text: "Modifying the statement "Do you want
  to do CPR" to "We need to do CPR" increased the number of cases where CPR was actually peformed"
  [V] ("peformed" is the publisher's typo).
- Also [V], useful for lessons 2 and 3: "Lay people should commence CPR for presumed cardiac arrest
  without concerns of harm to patients not in cardiac arrest." and "most cardiac arrests are
  initially recognised by the dispatcher during the call, rather than by bystanders at the scene."
  Line 898 attributes the first to "ILCOR/ERC"; it is ERC's wording. It is not in the typeset
  ILCOR BLS 2025 CoSTR (see G5).

**ERC 2025 Special Circumstances (110753).** https://www.resuscitationjournal.com/article/S0300-9572(25)00265-5/fulltext .
READ LEVEL: partial (drowning, opioid and hypothermia passages searched), direct, publisher.
- Found word for word: "For simplicity, untrained bystanders should start with chest compressions
  whilst trained first aid providers should consider ventilations" (line 910; the sentence goes on
  ", since the time to ventilation is critical in restoring cardiac arrest in drowned victims." [V]);
  "Existing evidence is not sufficient to recommend administration of an opioid-antagonist (e.g.
  naloxone) for cardiac arrest caused by opioid poisoning." [V] (line 923). Also [V]: "CPR should
  start with 5 ventilations." and "In drowning, an initial shockable rhythm is present in less than
  10 % of cases".
- The "rough handling triggers VF" teaching was searched for and not found in this chapter's text.
  That planned-around item stays planned around.

**Erratum 111314** (Corrigendum, Resuscitation 228, November 2026).
https://www.resuscitationjournal.com/article/S0300-9572(26)02361-0/fulltext . READ LEVEL: full.
"The authors regret that there were errors in Figures 5 (page 9) and 14 (page 25)." [V] The
corrected figures are images. In the chapter, Figure 5 is "Emergency treatment of accidental
hypothermia." [V] and Figure 14 is "Initial management of critically buried avalanche victim." [V]
**It does not touch drowning or opioids.** Lesson 15 should not reproduce or describe the ERC
hypothermia figure from any copy other than the publisher's current page.

**ERC 2025 First Aid (110752).** https://www.resuscitationjournal.com/article/S0300-9572(25)00264-3/fulltext .
READ LEVEL: full, direct, publisher.
- All seventeen quoted ERC First Aid passages in Parts A and C were found word for word: the two
  recovery-position sentences (889), both naloxone sentences (923), stroke scale (1589) and "could
  find evidence supporting the use of one scale over another", the aspirin sentence with
  "150–500 mg" (1620), "use a device for intranasal administration." and the second-dose sentence
  (1652), "Ensure that the person remains in a seated or lying position." and "(expert opinion)"
  (1667), the sugary sweets and juice alternative (1720), the heatstroke immersion sentence, "continue
  cooling for 15 min or until neurological symptoms resolve, whichever is first", "Remember: cool
  first, transfer second." and "if core temperature >40 °C" (1757), and "may decrease the risk of
  suicide" (1798).
- Anaphylaxis doses by age are in the concise guideline [V]: "0.15 mg for children aged 1-5 years",
  "0.3 mg for children aged 6-12 years", "0.5 mg for adults".
- The FLAG at line 1757 stands: the publisher's own evidence text also reads "whole body (from the
  neck down) water immersion at 1 to 6 °C" [V] and lists "ice water immersion (15 °C)" [V], while
  the concise guideline says 1 to 26 °C. These are in the version of record, not a copy artefact.
  Teach the concise guideline's 1 to 26 °C and do not quote the evidence sentence. Cooling rate
  [V]: "A cooling rate of ≥0.15 °C /min has been shown to be associated with survival without
  medical complications for exertional heat stroke."
- Confirmed [V]: "About 720,000 people die worldwide from suicide every year." and "According to
  the European Society of Cardiology, a quarter of women report jaw pain, nausea or shortness of
  breath instead of the classic symptoms". The suicidal-thoughts concise guidance is as line 1798
  summarises it; its steps read [V]: "Ask the individual "Are you alright?" "How do you feel and
  why?"", "Ask if the person has suicidal thoughts and plans (How? Where? When?).", "If the person
  has made concrete threats or plans for suicide, tell them you are going to ask for help, and call
  your emergency number (112).", "Give hope."

**Erratum 111316** (Corrigendum, Resuscitation 228, November 2026).
https://www.resuscitationjournal.com/article/S0300-9572(26)02363-4/fulltext . READ LEVEL: full.
It changes one sentence on page 19: "Naloxone is not effective once cardiac arrest has occurred."
becomes [V] "Naloxone is probably not effective once cardiac arrest occurred. However, this should
be investigated in a large clinical trial." and adds a reference (Grunau B et al., Resusc Plus
2025;22:100906). No quote in this file uses the old sentence. A lesson that says naloxone does
not help once the heart has stopped must say "probably".

**ERC 2021 First Aid (Zideman).** https://www.resuscitationjournal.com/article/S0300-9572(21)00066-6/fulltext .
READ LEVEL: partial (aspirin), direct, publisher. Line 1621 confirmed [V]: "encourage and assist
the casualty in the self-administration of 150-300 mg chewable aspirin", "Do not administer
aspirin to adults with chest pain of unclear or traumatic aetiology", and "contraindications such
as severe asthma or known gastrointestinal bleeding".

**ERC 2025 Paediatric Life Support (Djakow).** https://www.resuscitationjournal.com/article/S0300-9572(25)00279-5/fulltext .
READ LEVEL: partial (summary of changes table), direct, publisher. The 2025 column [V]: "The
two-thumbs encircling technique for chest compressions in infants is recommended for all
situations." and "Chest thrusts in infants should be performed using the two-thumbs encircling
technique." (the 2021 column had two-finger compressions for a single rescuer and two-finger chest
thrusts). This is the European basis for rejecting the two-finger videos under G4.

### G2. The two AHA web boxes: CLOSED

Both were copy errors in the archived web page, not in the guideline.

**Part 10 §11.2, In-Water Breaths.** Checked in the Circulation article
(https://www.ahajournals.org/doi/10.1161/CIR.0000000000001380, table image tab15) and on the live
cpr.heart.org page, which now shows the right box. [V-img, and V on cpr.heart.org]
"Recommendation for In-Water Breaths for Adults and Children": COR **2b**, LOE **C-LD**, "It may be
reasonable for appropriately trained rescuers to provide in-water breaths to an unresponsive adult
or child who has drowned if it does not compromise their own safety." The "artifact-filtering"
text is gone from the live page. The 44% against 93% death-rate sentence in line 914 is in the
supportive text beneath it [V].

**Part 4, Telecommunicator Recognition of Cardiac Arrest.** Checked in the Circulation article
(https://www.ahajournals.org/doi/10.1161/CIR.0000000000001378, table image tab05). [V-img]
"Recommendations for Telecommunicator Recognition of Cardiac Arrest":
1. COR **1**, LOE **C-LD**: "If the patient is unresponsive with abnormal, agonal, or absent
   breathing, the telecommunicator should assume that the patient is in cardiac arrest."
2. COR **1**, LOE **C-EO**: "Telecommunicators should determine the location of the event before
   questioning to identify OHCA, to allow for simultaneous dispatching of EMS response."

Note for anyone using cpr.heart.org: on 2026-09-24 the live "Part 4: Systems of Care" page
(https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/systems-of-care) displays
the Pediatric Advanced Life Support text under the Part 4 title (its abstract begins "The American
Heart Association and the American Academy of Pediatrics provide these pediatric advanced life
support guidelines"). Cite Part 4 from Circulation, not from that page.

### G3. AHA/Red Cross 2024 first aid tables: CLOSED

The Circulation article (https://www.ahajournals.org/doi/10.1161/CIR.0000000000001281) opens in
full in a browser. Its recommendation tables are images on the publisher's site, numbered tab01 to
tab51; the numbers match Part C's T-numbers. Each was opened at full size and read against Part
C. [V-img] throughout.

**The ten transcribed tables all match Part C** (T15, T16, T18, T19, T21, T22, T23, T24, T32,
T33): every quoted phrase and every COR and LOE is as Part C gives it. Omissions and one
misattribution, none of which changes a quote:
- T18 (asthma): the improvised spacer sizes are not in the table. They are in the supportive
  text [V]: "Improvised spacers made with a 500-mL (≈16 oz) plastic cold drink bottle or a 150-mL
  (≈5 oz) disposable paper cup appear to provide drug delivery similar to that achieved with
  commercial spacer devices" (reference numbers removed). Line 1685 puts them in the table
  summary.
- T24 (hypoglycaemia) rec 5 covers children "who are awake but unwilling or unable to swallow
  glucose"; line 1718 has only "unwilling".
- T32 (hypothermia) has ten recommendations; line 1769 lists eight. Missing: rec 3, COR 1, C-LD
  (when using rewarming devices, follow the manufacturer's instructions, "place insulation between
  the heat source and skin, and frequently monitor for burns and pressure injury"), and rec 6,
  COR 2a, C-LD (the hypothermia wrap through damp, not saturated, clothing for a person with
  decreased responsiveness who cannot be moved to a warm place).
- T33 (frostbite): recs 3 to 8 are COR 1 as line 1783 says; their LOE is C-LD for recs 3 and 4 and
  C-EO for recs 5 to 8.

**The six tables that were never archived** can now be quoted with a grade:
- **T25 Presyncope.** 1 (C-LD): "If a person experiences signs or symptoms of presyncope
  (including pallor, sweating, lightheadedness, visual changes, and weakness) of vasovagal or
  orthostatic origin, that person should maintain or assume a safe position such as assisted
  sitting or lying down." 2a (C-LD): "Once the person with presyncope is in a safe position, it can
  be beneficial for that person to use physical PCMs to avoid syncope." 2b (C-LD): "Lower-body PCMs
  may be preferable to upper-body and abdominal PCMs in first aid for presyncope." 2b (C-EO): "If
  no improvement occurs within 1 to 2 minutes, if syncope occurs, or if symptoms worsen or reoccur,
  the first aid provider should activate emergency services." 3: No Benefit (C-EO): "The use of
  PCMs is not recommended when symptoms of a heart attack or stroke accompany presyncope."
- **T29 Snake Bite in North America.** 1 (C-EO): "Emergency services should be activated for any
  person bitten by a venomous or possibly venomous snake." 2a (C-LD): "It is reasonable to rest and
  immobilize the bitten extremity and minimize exertion by the person who was bitten if it does not
  delay access to emergency medical care." 2a (C-EO): "It is reasonable to remove rings and other
  constricting objects from the bitten extremity." 3: No benefit (C-LD): "Application of ice to a
  snakebite wound is of unproven benefit and may be harmful in some situations." 3: Harm (C-LD),
  four separate rows: suction, electric shock, tourniquets, and "The use of pressure immobilization
  bandaging to treat snake bites is potentially harmful."
- **T34 Exertional Hyperthermia and Heatstroke.** 1 (C-EO): "For people with exertional
  hyperthermia or heatstroke, first aid providers should move the individual from the hot
  environment, remove excess clothing, limit exertion, and provide cool liquids if the person is
  able to swallow." 1 (C-EO): "For people with heatstroke (heat illness with altered mental
  status), first aid providers should activate emergency services." 2a (C-LD): "For adults with
  heatstroke, it is reasonable to initiate immediate active cooling by using whole-body (neck-down)
  cool- to cold-water immersion for 15 minutes or until neurological symptoms resolve (whichever
  occurs first)." 2a (C-LD): adults, other active cooling "including commercial ice packs, cold
  showers, ice sheets and towels, cooling vests and jackets, and evaporative, fanning, or a
  combination of techniques when water immersion is not available." The same two for children are
  2a, C-EO. 2b (C-EO): "It may be reasonable for first aid providers, who are trained and willing,
  to measure core temperature during active cooling for heatstroke. The target core temperature to
  cool until is 39°C (102.2°F)."
- **T35 Oral Rehydration for Exertional Dehydration.** 1 (C-LD): "In the absence of shock,
  confusion, or inability to swallow, first aid providers should assist or encourage individuals
  with exertional dehydration to orally rehydrate with any available rehydration drink or potable
  water." 2a (B-R): "It is reasonable to choose 4% to 9% carbohydrate-electrolyte drink over potable
  water, 0% to 3.9% carbohydrate-electrolyte drinks, coconut water, or low-fat cow's milk, if each
  is readily available."
- **T37 Chemical Exposure to the Skin.** 1 (B-NR): "Immediate skin decontamination is recommended
  after a chemical exposure." 1 (B-NR): "Unless otherwise recommended by local guidelines or
  chemical-specific information, skin exposed to caustic chemical should be irrigated with running
  water for at least 15 minutes." 1 (C-LD): "It can be beneficial to follow local guidelines, follow
  chemical-specific procedures, or consult a regional poison center when assisting a person with
  chemical exposures." (printed as COR 1 despite 2a-style wording). 1 (C-EO): "Contaminated
  clothing, jewelry, and other surrounding material should be removed from the area of a chemical
  exposure." 1 (C-EO): "EMS should be called when a person with chemical exposure has respiratory
  symptoms, systemic symptoms, or large chemical exposures." 2a (C-LD): "It is reasonable to brush
  off any dry chemical before irrigation with water."
- **T38 Chemical Exposure to the Eye.** 1 (B-NR): "Decontamination by irrigation should be
  performed immediately after chemical exposure to the eyes." 1 (C-LD): "Unless otherwise
  recommended by local guidelines, irrigation with a copious amount of tap water for 15 minutes
  should be performed." 1 (C-EO): "When providing first aid for chemical eye injury, first aid
  providers should avoid contaminating other individuals, areas, or the other eye with the caustic
  substance." 2a (B-NR): "Eye irrigation with normal saline, Ringer's lactate solution, or a
  commercial eye wash solution if immediately available is reasonable." 2a (C-LD): "It is
  reasonable for individuals with ocular exposure to industrial chemicals to adhere to local
  guidelines or recommendations from a poison center."

### G4. Videos: PARTLY CLOSED

Method, stated so nobody reads more into it: each YouTube watch page was opened in the browser;
title, channel, length, publish date and description come from the page's own player data. I
cannot hear audio. With the video muted I drew still frames at chosen timestamps (every 5 to 10
seconds, then closer around the technique) and read them, including burned-in captions and
on-screen text. YouTube's caption files came back empty, so no transcript was read. A verdict below
rests on what the frames show; it is not a claim that the whole video was watched.

- **AHA "Infant CPR" (01jpBkoQr4Y)**, 30 s, published 2024-01-11, no captions. Frames at 12 to 14 s
  show the rescuer compressing the manikin's sternum with the fingertips of one hand (two fingers).
  **Two-finger technique. Do not embed** (AHA 2025 removed it). There is still no US infant embed.
- **St John Ambulance "What to do if Your Baby is Choking" (oswDpwzbAV8)**, 107 s, published
  2016-09-07. On-screen cards at 60 to 63 s [V, on-screen text]: "USING TWO FINGERS", "IN LINE WITH
  THE ARMPIT", "UP TO FIVE CHEST THRUSTS", with two fingers on the chest. **Do not embed.**
- **British Red Cross "Baby first aid: Choking" (z-3IAG_974o)**, 265 s, published 2024-07-11
  (chapters in the description: 0:00 story, 0:39 step-by-step, 3:53 key steps). Caption at 165 s
  [V, on-screen text]: "Place two fingers in the middle of their chest just below the nipples",
  shown with two fingers; the key-steps card at 240 s shows the same. **Do not embed.**
- **CHOP "First Aid for Choking Victims of All Ages" (iEXKlzxjXak)**, 318 s, published 2023-01-06.
  Infant chest thrusts (166 to 180 s, label "(Center of chest)") and unresponsive-infant compressions
  (196 s, caption "Give 30 chest compressions before checking for the object") are done with the
  fingertips of one hand. **Do not embed for infants.** The adult and child parts were not checked
  against 2025 in detail.
- **RCUK "How to give CPR to a baby (0-1 year)" (oKE9IG7LERg)**, 139 s, published 2026-08-04;
  description [V]: "The guidance in this video is aligned to the 2025 UK Resuscitation Guidelines."
  At 76 s [V, on-screen text]: "Thumbs can be placed side by side or stacked on top of one another",
  subtitle "encircling the chest and fingers on the baby's back." **Two-thumb encircling; current;
  the preferred UK embed for lesson 6.** Its summary card reads: "Check for a response", "Call 999 on
  speakerphone", "Give five rescue breaths", "Start two thumb chest compressions", "If trained,
  alternate compressions and breaths at a ratio of 15:2, otherwise do 30:2", "Continue until the
  ambulance service arrives or the baby shows signs of life".
- **RCUK "How to give CPR to a child (1-18 years)" (I3pHjgiaYew)**, 131 s, published 2026-08-04,
  same "aligned to the 2025 UK Resuscitation Guidelines" line. Frames show the call on speakerphone,
  five rescue breaths, then compressions; summary card: "Start one hand chest compressions, or use
  two hands for larger children", and the same 15:2 or 30:2 line. **Current; embeddable.** Two slips
  on its cards: the last line says "or the baby shows signs of life", and the end card points to
  "www.resus.org.uk/baby-cpr". A caption should give the child page instead.
- **St John Ambulance "How to do CPR on an Adult" (BQNNOh8c8ks)**, 235 s, published 2016-08-26.
  Its description opens with the pandemic modification [V]: "In the event of a pandemic, do not put
  your face near the casualty's." and ends that paragraph "Give chest-compression-only CPR." (ERC
  and RCUK 2025 withdrew these modifications.) Frames show "PUSH DOWN 5 TO 6CM", "GIVE THEM 30 CHEST
  COMPRESSIONS", "AT A RATE OF 100-120 BEATS PER MINUTE"; recap cards misspell "RECUE BREATHS". The
  frames could not show whether the 999 call comes before the breathing check, which is the 2025
  change. **Do not embed as the primary adult CPR video.**
- **St John Ambulance "The Recovery Position" (GmqXqwSV3bo)**, 152 s, published 2016-08-25. The
  frames are mostly the trainer talking to camera, with a knee bend and the roll; no legible
  on-screen text on arm or hand placement. **Not closed**: the technique detail needs the audio.
- **Not opened this pass:** the BHF Vinnie Jones advert (O92KL1mw77c), the St John heatstroke video
  (jvGC_dQJUtE), and every other listed video. The OUTLINE's rules for those stand.

### G5. ILCOR 2025 manuscripts against the typeset Circulation text: CLOSED, with three corrections

Both typeset CoSTRs open in full at ahajournals.org: First Aid
(https://www.ahajournals.org/doi/10.1161/CIR.0000000000001358) and Basic Life Support
(https://www.ahajournals.org/doi/10.1161/CIR.0000000000001364; the DOI was not in this file).

**ILCOR BLS 2025:** every [V] quote in Part A is word for word in the typeset text: the bra good
practice statement (871), locked cabinets (877), 30:2 (853), compressions for all adults and breaths
for the trained, able and willing (856), monitoring for fatigue (884), drowning CAB/ABC (909), firm
surface and bed to floor (846).

**ILCOR First Aid 2025:** the quotes at lines 1201, 1230 (pressure points), 1238 (tourniquet and its
two evidence phrases), 1265, 1283, 1293 (both), 1349, 1370 (both), 1386, 1392 (both), 1619
(aspirin; the full sentence begins "For adults with nontraumatic chest pain,"), 1651, 1731 and 1332
are word for word in the typeset text. Three corrections:
1. **Line 1218 (direct pressure) is incomplete and misdated.** The typeset text reads "Treatment
   Recommendation (2021) We recommend that first aid providers use direct manual compression
   compared with the use of external compression devises or pressure dressings/bandages for severe
   life-threatening external bleeding from an extremity (strong recommendation, very low-certainty
   evidence)." [V] Part B omitted "from an extremity" and called it a 2020 recommendation. The
   "devises" typo is in the typeset text too.
2. **Line 1647 (recognising anaphylaxis) quotes the manuscript's wording.** The typeset text reads
   "First aid providers should not be expected to recognize the signs and symptoms of anaphylaxis
   without repeated episodes of training and encounters with persons with anaphylaxis (good
   practice statement)." [V] Not "victims of anaphylaxis".
3. **Line 1230 dates the pressure-points recommendation 2020;** the typeset text places it under
   "Treatment Recommendation (2021)" with the direct-pressure one.

The ILCOR 2020 heatstroke CoSTR (line 1755) and the ILCOR 2020 suction line (1200) are not 2025
chapters and were not rechecked.

### G6. Cuts and grazes: CLOSED

**AHA/Red Cross 2024, T42 "First Aid for Superficial Wounds"** [V-img]: 1 (C-EO) "Superficial wounds
and abrasions should be thoroughly irrigated until there is no obvious debris or foreign matter in
the wound." 1 (C-EO) "A superficial wound caused by an animal or human bite or with contamination
with human or animal saliva should be evaluated in a medical facility as soon as possible." 2a
(B-R) "It is reasonable to use running tap water or sterile saline solutions for wound irrigation
instead of antiseptic agents such as povidone-iodine." 2a (B-R) "It is reasonable to cover clean
superficial wounds and abrasions with an occlusive dressing to promote wound healing." 2a (C-EO)
"If a person with superficial wound or abrasion develops redness, swelling, foul-smelling wound
drainage, increased pain, or fever, it is reasonable to remove the dressing, inspect the wound, and
obtain medical care."

**NHS "Cuts and grazes"** (https://www.nhs.uk/conditions/cuts-and-grazes/, "Page last reviewed:
02 April 2026"). READ LEVEL: full, direct. Cleaning [V]: "Clean the wound by rinsing it with bottled
or tap water, or by using sterile wipes." Covering [V]: "Remove the gauze or cloth and put on a
sterile dressing or a plaster." Get urgent help (GP or 111) if, among others [V], "a cut is
swollen, red and getting more painful or pus is coming out of it", or "you were bitten by a person
or a wild or stray animal". Call 999 or go to A&E if [V] "you have a cut and cannot stop the
bleeding", or "the blood comes out in spurts and is bright red and hard to control". The elevation
sentence at line 1231 is still on the page word for word. Lesson 10's cleaning, covering and
infection lines can now be taught from both sources.

### G7. AHA/Red Cross 2024 on the recovery position: CLOSED

T14 "Positioning of the Ill or Injured Person for First Aid" [V-img], eight rows. The two that
matter for lesson 7: 1 (C-LD) "If a person requires CPR or rescue breathing (ie, is unresponsive
with absent or abnormal breathing), the first aid provider should position the person supine and
follow the CPR algorithm." and 2a (C-LD) "It is reasonable to position a person with decreased
alertness of nontraumatic cause who is breathing normally in a recovery (side-lying) position."
Also 1 (C-EO): a responsive, normally breathing injured person whose injury "suggests a neck, back,
hip, or pelvic injury" should be left in the position found unless the area is unsafe.
Supportive text [V]: "The recovery position may reduce the risk for airway obstruction, facilitate
drainage of airway secretions, and reduce the risk of aspiration in a person with a decreased level
of responsiveness, particularly if the airway cannot be closely monitored by a first aid provider."
and "However, the recovery position is associated with delayed recognition of respiratory arrest
and delayed initiation of chest compressions." The guideline gives no step-by-step technique; its
Figure 1, "The recovery position.", is a drawing of a person on their side with the lower arm
stretched out beyond the head, the upper hand under the cheek, and the upper leg bent at hip and
knee. So the AHA's current position is 2a, 2024, and replaces "the last AHA wording this course
read, from 2020".

### G9. French penal code Art. 223-6: NOT CLOSED

https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037289588 showed "Performing security
verification" (a bot check). Not attempted further. The OUTLINE's fallback applies.

### G10. Overdose Good Samaritan laws: CLOSED (product page)

https://www.gao.gov/products/gao-21-248 ("Published: Mar 29, 2021"). READ LEVEL: the product page's
Fast Facts and Highlights in full, direct; the 57-page PDF not opened. Part D's [T] quote is word for
word on the page [V]: "GAO found that 48 jurisdictions (47 states and D.C.) have enacted both Good
Samaritan and Naloxone Access laws." It continues [V]: "Kansas, Texas and Wyoming do not have a Good
Samaritan law for drug overdoses but have a Naloxone Access law." Fast Facts [V]: "These laws
protect people from certain criminal penalties if they call 911 to save an overdose victim." The
laws "vary in the types of drug offenses that are exempt from prosecution" [V]. PDAPS not read; the
count is as of 2021.

### G11. AHA 2025 Part 12 (education): CLOSED for the three topics

https://www.ahajournals.org/doi/10.1161/CIR.0000000000001374 opens in full. [V-img]
- Feedback devices: COR 1, LOE A, "Feedback devices are recommended for use during CPR training for
  lay rescuers." (and the same, COR 1, LOE A, for health care professionals).
- Alternative objects: COR 2b, C-LD, "The usefulness of alternative objects to train laypeople in
  chest compressions, when compared to a manikin, is not well established."
- Blended learning (the nearest thing to online training; Part 12 has no separate online-only
  table): COR 2b, B-NR, "A blended learning educational approach may be considered for teaching
  guideline-based life support courses."
- Also, for lesson 16's refresher advice: COR 1, B-R, "It is recommended to implement booster
  sessions when utilizing a massed learning approach for resuscitation training." and COR 2a, B-R,
  "It is reasonable to use a spaced learning approach in place of a massed learning approach for
  resuscitation training."

### G12. Murphy 2020: NOT CLOSED

https://www.resuscitationjournal.com/article/S0300-9572(20)30130-1/abstract shows the abstract and
"Log in, subscribe or purchase for full access." Paywalled; not pursued. No dollar figures.

### G14. AHA's revised Chain of Survival: CLOSED

Circulation Part 4, Figure 2, "Updated 2025 Chain of Survival." [V-img]: six links, in order,
"Recognition and Emergency Activation", "High-Quality CPR", "Defibrillation", "Advanced
Resuscitation", "Post-Cardiac Arrest Care", "Recovery and Survivorship". Top 10 message 2 [V]: "We
present a simplified Chain of Survival meant to be applied to pediatric and adult cardiac arrest."
And [V]: "The Chain of Survival is intended to be applied to both adult and pediatric in- and
out-of-hospital cardiac arrest, though the details vary in each application."

### G15. Red Cross on ABC and CAB: CLOSED

"A-B-C vs. C-A-B", https://www.redcross.org/take-a-class/resources/articles/abc-vs-cab (linked from
Check, Call, Care). "Date Published: July 15, 2024"; the text ends "Approved June 2020". READ LEVEL:
full, direct. [V]: "Based on the above evidence, the ARC Scientific Advisory Council recommends
teaching the A-B-C approach for assessment in all emergencies. For adult cardiac arrest and sudden
pediatric arrests, the correct resuscitation sequence is compressions first, followed by breaths if
the rescuer is trained and able. For hypoxic adult arrests and other pediatric arrests, the
preferred sequence is airway and breathing first and then compressions." And [V]: "We do not
recommend nor teach the mnemonic C-A-B as this sequence only applies to adult non-hypoxic cardiac
arrest victims." So: for an adult in cardiac arrest the Red Cross and the AHA do the same thing
(compressions first); they differ on the mnemonic (A-B-C for assessment), and the Red Cross puts
airway and breaths first for "other pediatric arrests" and hypoxic adult arrests.

### Gates not attempted this pass

G8 (Darley and Latané, closed access), G13 (needs nothing), G16 (images), G17 (optional).

### Errors found in this file, in one list

1. Line 1000: the ERC asystole quote cuts a parenthesis (G1).
2. Line 898: "without concerns of harm to patients not in cardiac arrest" is ERC's wording, not
   ILCOR's (G1, G5).
3. Line 1218: the ILCOR direct-pressure recommendation omits "from an extremity" and is dated 2020;
   it is 2021 (G5).
4. Line 1230: the ILCOR pressure-points recommendation is 2021, not 2020 (G5).
5. Line 1647: the ILCOR anaphylaxis good practice statement says "persons with anaphylaxis", not
   "victims of anaphylaxis" (G5).
6. Line 1685: the improvised spacer sizes are AHA supportive text, not table wording (G3).
7. Line 1718: T24 rec 5 is "unwilling or unable to swallow", not only "unwilling" (G3).
8. Line 1769: T32 has ten recommendations, not eight (G3).

Not an error: Part C's flag at line 1757 (1 to 6 °C) reflects the version of record, not the
third-party copy (G1).

## Stage 4 note, lesson 2 (2026-09-24)

Corrections found by lesson 2's reviewers and checked against the saved primaries:

- **NHS "Fainting" (S15; Part C 8).** The call-999 list in Part C 8 left out "is not breathing" and
  "has not fully recovered or has difficulty with speech or movement" (a stroke sign), and shortened
  "has seriously hurt themselves before or after fainting" to "injury". The page's advice for a
  faint with none of those is "See a GP if: you have fainted" [V]; it does not mention NHS 111.
  Corrected in place. NHS 111 comes from "When to call 999" (D16), "you're not sure if you need to
  call 999" [V], and from the NHS carbon monoxide page (S16): "Call NHS 111 if: you think you might
  have symptoms of carbon monoxide poisoning" [V]; "Call 999 or go to A&E if" exposed and "finding it
  hard to breathe", "have suddenly become confused", "have lost consciousness", "are feeling weak",
  "have chest or muscle pain" [V]. Its "go outside" is advice to the person who may have been
  exposed, not to a rescuer.
- **SECAmb FOI (D18).** The rendered PDF (p. 4) reads "AML is not an app; it does not require any
  action from the caller" with a semicolon; the extraction lost it. Corrected in place.
- **AHA pulse check (S1, S2).** The COR 1 "should not check for a pulse" is Part 6, paediatric,
  and scoped to "any infant or child" [V]. Part 7 (adult) has no graded recommendation on a lay
  pulse check; its supportive text says lay recognition is "based primarily on level of
  consciousness and respiratory effort rather than using a pulse check" [V].
- **ERC lay book (S10), stop condition.** Adult CPR is "repeated until EMS are on scene and able to
  take over" [V] (p. 24); the heart-attack page says "Continue until professional help arrives,
  takes over, or instructs" [V].
- **St John primary survey (D11), response.** "If the casualty opens their eyes, or gives another
  gesture, they are responsive. If they do not respond to you in any way, they are unresponsive" [V],
  after asking "'Are you OK?', 'Can you open your eyes?'" [V]: the eyes open in answer to you.
