# Pipeline briefs for this course's Stage 3 and Stage 4

Kept so any session can run the lessons the same way, adapted on 2026-09-25 from
`practical-life-and-self-reliance/personal-safety/research/pipeline-briefs.md` and
`health-and-body/first-aid/research/pipeline-briefs.md`. Each lesson: one drafting subagent (DRAFT
brief), a fresh-context review (REVIEW brief: Tier A, one reviewer, for most lessons; Tier B split,
reviewers F and P in parallel, for lessons 7, 13 and 16), and one fixer in a further context (FIX
brief). Findings files live in the session's scratchpad and do not survive it; the lesson's review
file in `reviews/` is the record.

**Before a lesson is drafted, check its gates** in OUTLINE "Stage 1 gates". Lesson 5 waits for G-E5.
Lesson 16's second half ("Does licensing make work safer?") waits for G-L3 and G-N2; if they don't
close, lesson 16 is drafted as its seam's first half only. Lesson 1 needs G-N1 for the callout's two
numbers. Every other gate has a written fallback, and the drafter either closes the gate or writes the
fallback, never neither.

---

## Course conventions settled so far

Read this section first. It binds every lesson, and it grows as lessons land: a fixer who learns
something a later lesson needs adds a dated bullet at the end.

- **Seventeen lessons**, numbered and titled as in OUTLINE "How many lessons, and why", with named seams
  in lessons 5, 12, 13 and 16 (lesson 2's fired on 2026-09-25). Cross-references use the number and
  the title ("lesson 7, Gas: the smell, the valve, the law and the engineer"), so a split is a
  find-and-replace.

- **The safety callout, byte for byte, on every lesson, directly after the opening paragraph(s).** The
  build may enforce it as `HOME_REPAIR_SAFETY` (OUTLINE decision 4), so no word of it changes in a
  lesson. Copy it from here or, once it exists, from lesson 1:

      :::callout Before you pick up a tool
      This course is education, not a trade qualification, and not legal advice about your own home. It teaches no gas work and no wiring. If you smell gas in Great Britain, open doors and windows, turn the gas off at the meter if you can do it safely (not if the meter is in a cellar or basement), and call 0800 111 999; in Northern Ireland the number is 0800 002 001. In the US, leave straight away and call 911 or your gas utility once you're outside. In either country, don't light a flame or touch an electrical switch. Isolate the water or power before you open anything up, and if a breaker, RCD or GFCI keeps tripping, leave it off and call an electrician. Which jobs the law leaves to a registered or licensed trade differs between England, Wales, Scotland, Northern Ireland and each US state, and it changes.
      :::

  The callout's body is one line in the file (no line breaks inside it), and the two numbers are
  re-read on the networks' own pages when lesson 1 is drafted (gate G-N1). A short paragraph after the
  callout may explain one clause where the lesson needs it. It never replaces the lesson's own
  teaching: lesson 7 gives each country's full leak steps.

- **The gas law, exactly as SOURCES settles it** (OUTLINE decision 6). In Great Britain, **registration
  binds those who do gas work as a business** (reg 3(3) of the Gas Safety (Installation and Use)
  Regulations 1998: employers and the self-employed; L56 para 52, membership "is required only by
  businesses"), and **competence binds everyone**, householders included (reg 3(1); L56 paras 52 and
  83, "do-it-yourself gas engineers ... all need to have the required competence"; the ACOP at para 81
  sets competence at an industry-recognised course followed by assessment). So never write "it's
  illegal to do your own gas work", and never write "you may legally do your own gas work". **Every
  householder is told plainly to use a Gas Safe registered engineer**, as HSE's and the Register's
  advice, and the job label is "Call someone". What a householder may do is what the appliance's user
  instructions give the user (Gas Safe, archived). **Gas Safe's "both parties would be breaking the
  law" line is attributed to Gas Safe in the sentence ("Gas Safe says ..."), or left out.** It is never
  in the course's voice. Northern Ireland: its own 2004 Regulations mirror Great Britain's; "HSENI" is
  not named. The US: no general rule; a utility's "qualified professional", New York City's Licensed
  Master Plumber, Texas's homestead exemption (which covers gas piping in the licensing statute),
  each labelled.

- **The UK and the US side by side, and neither called wrong** (decision 3). Where official advice
  differs (gas leaks, thawing pipes, CO alarm siting, radon levels, ladder numbers, cancellation,
  deposits), each country's advice is given as its authorities give it, in a table or an "In the UK /
  In the US" set, never interleaved, and never "the UK gets this right" or "US advice is stricter". A
  reader is never handed the other country's emergency steps. Where no source gives the reason for a
  difference, the lesson says so and supplies none. Names and units both at first use in each lesson.
  "Mould" in the course's prose; "mold" only inside US quotations and titles.

- **Jurisdictions named exactly** (decision 2). "England", "Wales", "Scotland", "Northern Ireland" for
  building regulations and electrical work; "England and Wales" only where both versions agree, never
  for notifiable electrical work; "Great Britain" for the 1998 gas Regulations and the Work at Height
  Regulations; "the UK" only where the source covers the UK. US rules are federal (named as federal)
  or a named state or city. **Never "in the US you can do your own wiring".**

- **Wiring is explained, not taught** (decision 7). The course explains which electrical work the law
  lets a householder do in each UK nation and in the five US places read, and teaches the procedure for
  none of it: no socket, switch, light fitting, consumer unit or proving-dead method, anywhere, in the
  lesson body, an exercise, a checkpoint answer or a quiz explanation. The householder's hands stop at
  the front of the consumer unit or panel: switching, resetting, the test buttons, plug fuses of the
  same rating, plug-in RCDs. Keep both standing facts wherever electricity comes up: the panel is
  "usually electrically live, even with the main circuit breakers turned off" (CPSC 5133), and HSE does
  not recommend non-contact "volt sticks" for proving dead (HSG85 para 54). Where the law allows a job
  (non-notifiable work in England), say so plainly and give the course's reason for not teaching it
  (a page can't check the work) as the course's own scope decision, not as a claim that the work is
  unlawful or that doing it is wrong.

- **Law and advice together** (decision 8). Where the law allows a householder more than the advice
  does (gas in Great Britain, asbestos, lead paint, ladders, DIY electrics in England), the legal
  position and the advice sit in adjacent sentences, law first and labelled as general information,
  then the advice with its source; the job label follows the advice.

- **The law is general information, every time** (decision 9). At every passage that states a legal
  rule: "This is general information, not legal advice. The rules differ between England, Wales,
  Scotland and Northern Ireland, and between US states and cities, and they change." No sentence tells
  a reader what they may lawfully do in their own case. Quote statutes from the live page.

- **The job labels** (decision 5), written into the sentence, not as badges: **Yours**; **Yours, on
  conditions** (and name the condition); **Call someone**. And the course's question, in every rule:
  **law or advice, whose, and where?**

- **No product endorsements** (decision 10). No brand, model, tool, alarm, detector, filler, paint, pest
  product or retailer is recommended or linked for purchase. Makers' pages are cited for their own
  products and labelled ("Worcester Bosch, about its own boilers, gives ..."), and their figures are
  never the course's figures ("check your boiler's manual"). Alarms are described by the standard the
  law names, not by make. Schemes are described with how to check membership on the scheme's own site;
  TrustMark "describes itself as" government endorsed. No affiliate links, no prices from memory.

- **Boundaries** (decision 14), each by name and never retaught:
  **First Aid and CPR**: lesson 2 ("power off before you touch"; the call), lesson 10 (electrical
  burns), lesson 14 (CO poisoning, the signs, the response, 0800 111 999, Poison Help). This course
  teaches where hazards come from and what keeps them away; no symptoms, no rescue. Lesson 8 refines
  First Aid lesson 14's "every room with a burning appliance needs an alarm" line by jurisdiction,
  as a refinement, after opening that lesson and reading the sentence.
  **Personal Safety**: lesson 5 owns what deters burglary (WIDE), the doorstep con and the call-back
  rule. This course keeps the contract (quotes, deposits, cancellation, licence checks) and points to
  lesson 5 for the pressure pattern. Fitting locks is not taught (gate G-N3).
  **Personal Finance Fundamentals**: lesson 8 ("Handing off what you cannot absorb") owns insurance;
  lesson 10 ("Defending it") owns scams and the payment rail. This course says only that illegal gas
  work "may invalidate your home insurance" (Gas Safe), CCW's "photograph the damage", and Citizens
  Advice on card payment, each with the pointer.
  **Cooking Fundamentals** lesson 4 keeps kitchen hygiene; fats down the sink are this course's.
  **Emergency Preparedness**, **Tools and Making Things**, **Energy** and **Car Basics** as OUTLINE
  decision 14 says.

- **Readers who rent, and blame** (decision 15). No sentence implies damp or mould is the occupant's
  fault; GOV.UK's no-blame statement comes before any behavioural tip. Exercises that change anything
  say "if it's your home to repair, or your landlord agrees".

- **Exercises** stay inside OUTLINE decision 1's list, with the limits written into the exercise.

- Record new conventions below as lessons land, each as a dated bullet.

- **2026-09-25: the course is seventeen lessons.** Lesson 2 passed its seam and split into lesson 2,
  "Water in: supply, leaks and frozen pipes", and lesson 3, "Taps and toilets"; every later OUTLINE
  lesson moved up by one (Water out is 4, Electricity 5, Gas 7, CO and alarms 8, Who may do what 16,
  Hiring 17). OUTLINE and this file use the new numbers; "Gate closures, lesson NN" headings already
  in SOURCES.md keep the numbers they were written under.

- **2026-09-25: where the general-information label goes** (decision 9, settled at lesson 1's Stage 4,
  following Personal Safety's pattern). The full sentence ("This is general information, not legal
  advice. The rules differ between England, Wales, Scotland and Northern Ireland, and between US
  states and cities, and they change.") goes **once in the lesson's opening** (after the callout), **at
  the top of each H2 section that states law**, and **in the exercise** where the exercise asks about
  law. After the first, those places carry the short form, "This is general information, not legal
  advice.", because the build flags a 25-word passage repeated within a lesson (2026-09-25). It does **not** go at every mention, in an H3 under an H2 that already carries it, in a hidden
  checkpoint or predict answer, or in a quiz explanation; a quiz item on the law says "as general
  information" in its stem instead, as Personal Safety's do. A misconception that concerns the law points
  back to the labelled section rather than restating the rule. So a lesson that states law gives it
  its own H2 (lesson 1: "Gas and the law, in brief") rather than an H3 inside a practical section.
  The within-lesson 25-word duplicate check in `build.mjs` warns on the repeated sentence; that
  warning is expected under this convention until the check exempts the label.

---

## Drafting brief: Home Repair and Maintenance, Stage 3

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/home-repair`. You are drafting ONE lesson (number given in
your task). Other agents may be working on other lessons in the same tree: never touch any file
outside the one lesson file you are writing, except SOURCES.md as the gate rule below allows. Do not
commit, do not run git add. Do not edit OUTLINE.md, build.mjs or anything else.

## Read first, in full, in this order
1. `.claude/commands/draft-lesson.md` (the whole thing, especially "Defects this drafter repeats":
   read your draft against it before you finish).
2. `docs/EDITORIAL_STANDARDS.md` and `docs/STYLE_GUIDE.md`.
3. `courses/CLAUDE.md` (lesson format, block grammar).
4. This file's "Course conventions settled so far", above. It binds you.
5. The course's `course.yaml`, then `research/OUTLINE.md`: "How many lessons", "What is deliberately
   left out", the **eighteen decisions** (they bind you), the "Stage 1 gates" table, then your lesson's
   section and the ones either side, then "Neutrality notes".
6. `research/SOURCES.md`: the synthesis at the top (through "Suggested lesson sequence"), including the
   access problems, the gas-law section, the unread-line notes and the safety-critical guidance; then
   **every Part and section your lesson's outline section cites, read in full**. The file is long (56k
   words); read the parts you need, but read them fully, not by grep snippets. The `<!-- unread: -->`
   line binds you: nothing named there is cited, and a gate that is not closed is not relied on.
7. Run `npm run taught courses/practical-life-and-self-reliance/home-repair` and read what earlier
   courses taught. Build on them by name ("First Aid and CPR lesson 14", "Personal Safety lesson 5",
   "Personal Finance lesson 8") and reteach nothing OUTLINE decision 14 assigns elsewhere. **Open the
   earlier lesson and find the sentence before you write "as lesson N showed".**
8. Every lesson of this course already in `lessons/` (for connections, the conventions they settled,
   and to avoid repeating their examples, figures, places and phrasing).
9. The two most recent review files in `research/reviews/`, and `reviews/course-wide.md` if it exists.

## Gates first
For each gate your lesson depends on, either close it (read the source in a browser or with curl, and
append a dated "Gate closures, lesson NN" section to the end of SOURCES.md with the read level, the URL
or capture ID, and any quotation marked [V]; remove any unread entry it clears) or write the fallback
exactly as OUTLINE gives it. **Every phone number you print is re-read on the service's own page on the
day you draft (gate G-N1)**, and the date goes in SOURCES. **Every statute, regulation or threshold you
state is re-read on the live legislation page** (legislation.gov.uk, eCFR, leginfo, the state's own
site), and you read the whole section once, not only the lines SOURCES recorded. Say in your reply
which gates you closed and which fallbacks you wrote.

## Hard requirements
- File: `courses/practical-life-and-self-reliance/home-repair/lessons/NN-slug.md` (slug from the
  outline title, short, lowercase, hyphens).
- **The safety callout**, byte for byte, directly after the opening paragraph(s) (conventions above).
- **The gas law** exactly as the conventions state it, wherever gas work comes up in any lesson.
- **Jurisdictions named exactly**; **UK and US side by side, neither called wrong**; differences in a
  table or an "In the UK / In the US" set; no figures merged across countries.
- **Every rule carries law or advice, whose, and where** (decision 5), and every job its label. Where
  the law allows more than the advice, both, together, law first (decision 8).
- **The law is general information at every point of use** with decision 9's sentence. Legal examples
  and exercises ask which rule applies in a named place and what to ask the local body.
- **No wiring procedure and no gas work, anywhere** (decisions 6 and 7), including in checkpoint
  answers and quiz explanations.
- **Every figure carries source, year, geography and what it counts** (decision 11). Old data with their
  years. Scope stated where two figures look like they conflict (CDC's 400 against CPSC's 274).
- **No mechanism and no method from general knowledge** (decision 13): where SOURCES gives none, give
  the finding and say the source gives no mechanism, or no method, and where to find one (the maker's
  instructions; a WaterSafe plumber).
- **No products** (decision 10). **No blame** (decision 15). **Exercises inside decision 1**, with the
  limits written into each exercise.
- Every required element of standards 1.2; 2 to 3 `:::predict`, at least 2 `:::checkpoint`, at least one
  `:::exercise` with a timing that opens "Take NN minutes" (digits), one worked example with a gap. End
  the body with a short "For your plan" paragraph naming what this lesson adds to the project.
- Footnote markers `[1]` on checkable claims and a `## Sources` section. Each source entry states its
  read level **copied from SOURCES.md** in plain words, names the section read, and for an Internet
  Archive read gives the capture ID, with the SOURCES part and section only in an HTML comment
  (`<!-- SOURCES Part C C13 -->`, or `<!-- lesson NN gate closure G-E5 -->` for facts read at drafting).
  Withdrawn and archived sources say so in the entry (Defra's leaflet, "withdrawn April 2024"; DOE
  Energy Saver, "as archived", never a live link).
- **Quotation marks only around text you copied out of SOURCES.md's own [V] quotations** (or a gate
  closure you recorded). Your summary of a source is your sentence. Keep every hedge and scope ("about",
  "in most cases", "abstract only", "as archived", "may"). Run `npm run quotes
  courses/practical-life-and-self-reliance/home-repair` and fix anything it flags. A quotation keeps
  its author's punctuation, including a dash; your own prose never has an em dash or a spaced en dash.
  Split around a source's spaced dash rather than reproducing it.
- Links in the teaching prose where a source is quoted (not only in Go deeper); use the URLs recorded
  in SOURCES. Never link energy.gov/energysaver, INDG455, Defra's withdrawn leaflet as current, CPSC's
  removed asbestos guide, This Old House or Which?.
- Photographs only under decision 16 and gate G-N4: an open licence you checked on the file page, the
  credit and licence in the caption. No stock photos, no AI images, no photographs of injuries.
- No em dashes, no spaced en dashes in your prose, nothing from the banned list. Contractions at roughly
  5 to 8 per 1,000 body words. Bold under about 25 spans per 1,000 words, key terms only. Internal
  pipeline words ("SOURCES", "Part C", "gate G-E5", "the research file", "decision 7") never appear in
  learner-facing text; say "this course read the abstract only" or "this course didn't find an official
  step-by-step".
- Quiz: 4 to 6 items, at least half application with new cases (no people, places or numbers from the
  body), each law or emergency item naming its jurisdiction or correct everywhere the course covers,
  **no item whose correct answer is gas work beyond the user instructions, a wiring step or anything
  decision 1 bars** (decision 18), option lengths within about 15 characters, all four positions used,
  no adjacent repeat, explanations naming distractors by content, never by position. **Keys chosen by
  script**: all four positions used, no adjacent repeat, not identical to or a pure shift of any
  earlier lesson's sequence in this course, and no shared run of four at offsets 0 or ±1 (the rule
  First Aid and Personal Safety settled on after tighter rules ran out of sequences).
- `minutes:` from `npm run minutes` (use its measured value; edit the number by hand).
- A self-check never prints its own answer in body text.
- Charts (optional, only if one teaches better than prose): inline SVG per the rules in
  `.claude/commands/review-lesson.md` (no `<g>`, every size an attribute ≥ 15, viewBox near 420, no blank
  lines inside, `var(--token, #literal)` fills, a `<desc>`), drawn only from numbers in SOURCES, with
  source, year and scope in the title or caption. OUTLINE names the candidate per lesson. A value you
  computed (a subtraction, a share) is labelled as the course's arithmetic.

## Measured patterns, carried over from First Aid and Personal Safety as general drafting defects
Each was found in two or more lessons of those courses. None is specific to their subjects; each will
happen here unless you look for it:
- **A rule applied outside its scope.** Here the traps are many: WSSC's "Every home was required to have
  a main water shut-off valve" is about its own service area; LA455 and OSHA are for workplaces;
  Worcester Bosch's 1 to 1.5 bar is its own sealed systems'; CDC's rodent clean-up is written against a
  US virus; the RRP rule binds paid work; AD P is England's; Approved Document H is England's; the
  federal report studied US licensing; ESF's survey is of electricians.
- **A grade, source or year attached to the wrong sentence.** NFPA's 2015 to 2019 averages are not
  "current"; CPSC's GFCI list stops at 2005; the older-adult ladder data are 1997 to 2002.
- **"Every body says" when one does.** "Water companies advise ..." when only Thames Water was read;
  "every official source" when SOURCES says "every official source read". Check each symmetric claim
  against each source's own text.
- **A mechanism called absent when a source gives one** (or supplied when none does). CPSC gives the
  GFCI's; the PCA gives capillary action; Con Edison gives sparks; the JPS gives salts and meters.
- **Cross-references that claim what an earlier lesson does not say.** Open the earlier lesson (this
  course's or another course's) and find the sentence before you write "as lesson N showed".
- **Quiz items that replay the body's own cases.** New people, new places, new numbers.
- **Primary text paraphrased that SOURCES does not record.** If you read a statute, a maker's manual or a
  service page beyond what SOURCES holds, list it with its URL in your reply, and it goes into a dated
  "Gate closures, lesson NN" section of SOURCES.
- **A quotation quoted by its reassuring half**, or an unquoted lead-in that drops its hedge (EPA's
  "in most cases, you can handle the job yourself"; ESF's "not necessarily"; EPA's test-kit reliability
  "when used by a trained professional").
- **A predict block that asks what the sentence above it said.**
- **Places reused.** Build the used list by script before you name a town, and use none on it:

      grep -ohE "\b(in|In|at|from|near|outside|to) [A-Z][a-z]+( [A-Z][a-z]+)?" \
        courses/practical-life-and-self-reliance/home-repair/lessons/*.md \
        courses/practical-life-and-self-reliance/personal-safety/lessons/*.md \
        courses/health-and-body/first-aid/lessons/*.md | awk '{print $2, $3}' | sort | uniq -c

  Read the output by eye (it catches non-places too) and say in your reply which places you used. Prefer
  a region or a kind of house ("a 1930s semi in the English Midlands") to a named small town.

## Before you finish
Run `npm run validate` (check the exit code; warnings about other courses and audio debt are not yours)
and fix every line that names your file. Re-read your draft against the defect list, the measured
patterns and the conventions above. Search your draft for "illegal", "legal", "must", "UK" and "US" and
check each against decisions 2, 6, 8 and 9. Then reply with: the file path, word count, measured
minutes, the quiz key sequence, the SOURCES sections used, the gates you closed and the fallbacks you
wrote, every statute and phone number you re-read (with the date), the places you used, anything you
were unsure of, and any place where the lesson wanted something SOURCES did not have (and what you did
instead).

---

## Stage 4 review brief, Tier A: Home Repair and Maintenance (one reviewer; lessons other than 7, 13, 16)

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/home-repair`. You are the reviewer of one lesson, in a fresh
context. **You report; you do not edit anything in the repo.** Write your findings to the scratch file
named in your task, then reply with a short summary (verdicts per pass and the count of findings by
severity).

Not a standards 3.4 domain, but a practical, safety-critical course that states law in two countries
and four UK nations. Assume the lesson contains errors and find them. **Every legal statement, phone
number, threshold and safety step is checked against the primary itself, not against SOURCES** (OUTLINE
decisions 2, 6, 7, 9, 17).

## Read first
- `.claude/commands/review-lesson.md` (the passes and the traps).
- `.claude/commands/draft-lesson.md`, the whole "Defects this drafter repeats" list, and the "Measured
  patterns" list in this file's drafting brief.
- This file's "Course conventions settled so far".
- `docs/EDITORIAL_STANDARDS.md`, `docs/STYLE_GUIDE.md`.
- The course's `research/OUTLINE.md` (the eighteen decisions bind the lesson; the gates table; this
  lesson's section; the neutrality notes) and `research/SOURCES.md` (the sections the lesson cites, read
  in full, plus the synthesis at the top, the unread line and its notes, any "Gate closures" sections at
  the end).
- The earlier review files in `research/reviews/`.
- The lesson itself.

## The passes
1. **Facts and law.** Check every number, name, date, quotation, read level and jurisdiction against
   SOURCES, and string-match every quotation against SOURCES' [V] text or a recorded gate closure.
   **Re-read on the live page, today, every phone number, statute, regulation and threshold the lesson
   states** (legislation.gov.uk; eCFR; the state site; the network's own page; curl with a browser
   User-Agent or a browser). Redo every sum and conversion by hand and say that you did. Check each
   unquoted lead-in for a dropped hedge. Check nothing on the unread line or behind an open gate is cited
   or named, including the slips the build can't see (an edition of BS 7671 named as current; ESF's
   "almost half"; the 30 mA figure; a UK ladder-injury figure; "12 months" for s36; the gas valve's
   colour). For each mechanism or method in the course's voice, ask which source it came from (decision
   13).
2. **Safety.** The callout present and byte-identical (compare with this file's conventions by eye until
   the build check exists); no wiring procedure and no gas work anywhere, including checkpoint answers
   and quiz explanations; the gas law exactly as the conventions state it; the panel-is-live and
   volt-stick facts where electricity comes up; the law and the advice together where they differ; every
   exercise within decision 1, with its limits written in; no UK step given to a US reader or the
   reverse in anything that could be acted on in an emergency; every place a reader might take a
   description as an instruction they can't safely carry out from a page.
3. **Neutrality**, where the lesson has contested or value claims (lessons 6, 12, 15 at least): sort each
   claim (3.1), Turing-test each position, check language and omitted facts, and check that neither
   country's advice is called wrong and no trade body is endorsed or suspected in the course's voice.
   Where the lesson has none, write the one line the review-lesson command asks for.
4. **Depth and pedagogy**: specificity, expert and transfer tests per section; required elements of 1.2;
   objectives testable from a page; worked examples before problems, one with a gap; the job labels and
   "law or advice, whose, where" in the prose; predicts that ask for a real prediction; quiz items with
   new cases, jurisdictions named, keys by the rule; the "For your plan" paragraph.
5. **Cold start**: read the lesson as someone who has done exactly the courses `npm run taught` lists and
   the earlier lessons of this one. Walk every instruction literally, as a householder with the tool in
   their hand, and flag every term, part or habit never explained (a "cleaning eye", "special location",
   "AFUE", "TRV", "notifiable"). Check every "as First Aid lesson N taught" against that lesson.
6. **Voice and media**: em and en dashes, banned words and shapes (quote line numbers), contractions per
   1,000 body words (band 5 to 8), bold per 1,000 (over 25 is a finding), one-line morals, pipeline talk
   in learner prose; `minutes:` against `npm run minutes`; links in teaching prose; every photograph's
   licence checked on its file page; every chart against SOURCES' numbers; **open every SVG and read
   it**; build with `npm run build:drafts` and open the page.

## Findings format
Numbered (R1, R2...), each with severity [critical/major/minor], the quoted passage with its line
number, the problem, the evidence, and a specific fix (replacement text where you can). **Always
critical:** a wrong emergency number; a gas-law statement that says householder DIY is illegal, or that
it is lawful without the competence requirement; a wiring or gas procedure; a UK step for a US reader or
the reverse in an emergency; a legal rule with the wrong jurisdiction; a volt stick or a switched-off
main breaker presented as making anything safe. End with your verdicts per pass.

---

## Stage 4 review brief, Tier B split: lessons 7, 13 and 16 (two reviewers, F and P)

As the Tier A brief, but two reviewers run in parallel, each in a fresh context, and neither edits
anything. **Reviewer F** runs passes 1, 2 and 3 (facts and law, safety, neutrality); **Reviewer P** runs
passes 4, 5 and 6 (depth and pedagogy, cold start, voice and media). Findings are numbered F1... and
P1....

Additionally:
- **Lesson 7:** F reads regulation 3 of the 1998 Regulations, L56 paras 52, 81, 83 and 85, and HSE's
  home-owner page live, and checks every sentence about who may do gas work against them. F searches the
  lesson for "illegal", "legal", "law", "both parties" and "must" and verdicts each.
- **Lesson 13:** F re-reads HSE's asbestos FAQ, EPA's asbestos and lead pages, the RRP rule's §745.82 and
  §745.85(a)(3), and the BCF's HS032, and checks that every legal statement sits beside its advice
  (decision 8), that no method for asbestos work appears, and that Defra's figures carry the withdrawal.
- **Lesson 16: the full neutrality audit** (standards 3.5). F sorts every claim (established, contested
  empirical, value), Turing-tests each position **as a licensing proponent** (an electrician, a trade
  body), **as a deregulation proponent** (a free-market economist; someone kept out of a trade by
  licensing costs), and **as a householder who does their own work**, and reports each reading. F counts
  citations, last words, who is quoted and who is only explained, and whose errors sit in the
  misconception list, across the whole lesson; checks that the federal report's own endorsement of
  targeted licensing is reported beside its findings; checks that the course's scope decision on wiring
  is not presented as a side; and names the perspectives checked. Every statute and threshold re-read
  live.

---

## Fix brief: Home Repair and Maintenance, Stage 4 fix pass and voice checks

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/home-repair`. You apply the reviewer's (or both reviewers')
findings to one lesson, in a context that neither wrote nor reviewed it. Touch only: the lesson file,
its review file `research/reviews/<lesson-id>.md` (create it), and `research/reviews/course-wide.md` if
it needs an entry (**if it exists, append a dated section with one small edit; never create it over an
existing file or rewrite it**: on 2026-09-24 two First Aid fixers ran at once and the second recreated
the file over the first's four notes). SOURCES.md only as below. Do not commit or git add. Do not touch
any other file (other agents work in this tree).

## Read first
`.claude/commands/review-lesson.md` ("After the review"), the "Defects this drafter repeats" list in
`.claude/commands/draft-lesson.md` and the "Measured patterns" in this file's drafting brief, this file's
"Course conventions settled so far", `docs/STYLE_GUIDE.md`, `templates/REVIEWS.md`, the course's
`research/OUTLINE.md` (the eighteen decisions and this lesson's section), the SOURCES.md sections the
lesson cites, an earlier review file in `reviews/` for the shape (Personal Safety's if this course has
none yet), the lesson, and the findings file or files.

## Do
1. Write the review file: a dated entry "## YYYY-MM-DD — Lesson NN — Stage 4, Tier A" or "Tier B
   (split)" (that header's dash is the template's and is allowed in review files), naming the
   reviewer(s), their verdicts, and every finding with its ID in one or two lines.
2. Apply every finding you agree with. Verify a factual finding against SOURCES.md (and the primary
   where the reviewer fetched it; **for a phone number, a statute or a threshold, fetch it yourself**)
   before applying it; if a reviewer is wrong, decline it and say why. Rewrite generic passages with
   specifics from SOURCES; never add a fact that is not in SOURCES or a recorded gate closure. Keep the
   safety callout byte-identical; keep every jurisdiction label, every figure's labels, every job label,
   every "law or advice" attribution and every point-of-use legal label. A fix that removes a hedge or a
   label is not a fix. A fix never adds a wiring or gas procedure.
3. Then the voice checks, in the same pass: dashes and banned words; bold to key terms (under 25 per
   1,000 body words); contractions in the 5 to 8 band; two or three `:::predict`, a `:::checkpoint` after
   each hard idea, one worked example with a gap; every `[n]` has a footnote; read the opening, and walk
   every instruction once more as a householder with the tool in their hand.
4. After any quiz edit, read each explanation against the option its key now selects. Re-measure option
   lengths. Re-check the key sequence by script against every earlier lesson of this course.
5. `npm run minutes` and set `minutes:` to the measured value for this file. `npm run validate` and check
   its exit code; fix every line naming this file. `npm run quotes
   courses/practical-life-and-self-reliance/home-repair` and fix anything for this lesson.
6. Append "### Resolutions applied" to the review entry: each finding fixed or declined with a reason,
   and the final measures (words, minutes, bold and contraction densities, quiz key sequence and
   option-length spread, places used). "**Status after review:** clean" or "needs second pass".
7. Reply with a 6-line summary, including anything a later lesson, the course-wide file, or this file's
   "Course conventions" should know.

## When a finding is in SOURCES.md too
If a reviewer shows that `research/SOURCES.md` itself carries the error (a trimmed quotation, a misread
figure, a claim about a source that the source does not make, a number that has changed), correct
SOURCES.md first, then the lesson. Verify against the primary text before editing. Edit SOURCES.md only
by appending a dated "Stage 4 note, lesson NN (date)" section at the end of the file, or with small
targeted replacements, never by rewriting the file, because other fixers may be editing other entries
at the same time. List the SOURCES corrections in the review file.
