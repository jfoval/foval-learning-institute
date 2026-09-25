# Pipeline briefs for this course's Stage 3 and Stage 4

Kept so any session can run the lessons the same way, adapted on 2026-09-25 from
`health-and-body/first-aid/research/pipeline-briefs.md`. Each lesson: one drafting subagent (DRAFT
brief), two fresh-context reviewers F and P in parallel (REVIEW brief), one fixer in a third context
(FIX brief). Findings files live in the session's scratchpad and do not survive it; the lesson's
review file in `reviews/` is the record.

**Before a lesson is drafted, check its gates** in OUTLINE "Stage 1 gates". Lesson 7 waits for G6 and
G27; lesson 9 waits for G28. Every other gate has a written fallback, and the drafter either closes the
gate or writes the fallback, never neither.

---

## Drafting brief: Personal Safety, Stage 3

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/personal-safety`. You are drafting ONE lesson (number given
in your task). Other agents may be working on other lessons in the same tree: never touch any file
outside the one lesson file you are writing, except SOURCES.md as the gate rule below allows. Do not
commit, do not run git add. Do not edit OUTLINE.md, build.mjs or anything else.

## Read first, in full, in this order
1. `.claude/commands/draft-lesson.md` (the whole thing, especially "Defects this drafter repeats":
   read your draft against it before you finish).
2. `docs/EDITORIAL_STANDARDS.md` (Part 3 closely: this is a sensitive domain) and `docs/STYLE_GUIDE.md`.
3. `courses/CLAUDE.md` (lesson format, block grammar).
4. The course's `course.yaml`, then `research/OUTLINE.md`: "How many lessons", "What is deliberately
   left out", the **sixteen decisions** (they bind you), the "Stage 1 gates" table, then your lesson's
   section and the ones either side, then "Neutrality notes".
5. `research/SOURCES.md`: the synthesis at the top (through "Suggested lesson sequence"), including
   the access problems, the unread-line notes, the reconciliations and the safety-critical guidance;
   then **every Part and section your lesson's outline section cites, read in full**. The file is long
   (43k words); read the parts you need, but read them fully, not by grep snippets. The `<!-- unread:
   -->` line binds you: nothing named there is cited, and a gate that is not closed is not relied on.
6. Run `npm run taught courses/practical-life-and-self-reliance/personal-safety` and read what earlier
   courses taught. Build on them by name ("First Aid and CPR lesson 1", "Personal Finance lesson 10",
   "Mental Fitness lesson 4") and reteach nothing OUTLINE decision 13 assigns elsewhere. Open First Aid
   lessons 1, 2 and 16 before any lesson that touches bystanders, the call or support.
7. Every lesson of this course already in `lessons/` (for connections, the conventions they settled,
   and to avoid repeating their examples, figures, places and phrasing).
8. The two most recent review files in `research/reviews/`, and `reviews/course-wide.md` if it exists.

## Gates first
For each gate your lesson depends on, either close it (read the source in a browser or with curl, and
append a dated "Gate closures, lesson NN" section to the end of SOURCES.md with the read level, the
URL or capture ID, and any quotation marked [V]; remove any unread entry it clears) or write the
fallback exactly as OUTLINE gives it. **Every phone number, opening time and service name you print is
re-read on the service's own page on the day you draft (gate G5)**, and the date goes in SOURCES. Say
in your reply which gates you closed and which fallbacks you wrote.

## Hard requirements
- File: `courses/practical-life-and-self-reliance/personal-safety/lessons/NN-slug.md` (slug from the
  outline title, short, lowercase, hyphens).
- **The safety callout** from OUTLINE decision 4, byte for byte, directly after the opening
  paragraph(s). Copy it from OUTLINE (or from lesson 1 once it exists). Lessons 14 and 15 also carry
  the crisis callout from decision 4, byte for byte, at the point of use.
- **Content notes before, never after** (decision 7), in the standard form, for sexual violence,
  domestic abuse and homicide figures, with the lines gate G8 settled and a "skip to" heading. **Lesson
  7 opens with the helplines and the monitoring warning in its first screen.** Lesson 11's first
  paragraph says where responsibility lies and that freezing is involuntary, before any resistance
  evidence.
- **Jurisdictions named exactly** (decision 2): "England and Wales", "Scotland", "Great Britain" only
  where the source is GB, "Northern Ireland" as different again, a named US state or the Model Penal
  Code labelled. Never "the UK" unless the source covers the UK. Where jurisdictions differ, a table or
  an "In England and Wales / In Scotland / In the US" set, never interleaved. No figures merged across
  countries or measures.
- **Every figure carries source, year, measure, geography and whose harm** (decision 3). One figure,
  one source. Single-year swings never taught as rates. Lifetime and annual labelled. "Current" always
  dated.
- **Every piece of advice carries its label in the prose** (decision 5): tested; sensible, untested;
  contested; practitioner opinion. The course's own inferences say they are the course's (decision 12).
- **The law is general information, labelled at every point of use** with OUTLINE decision 9's
  sentence. Legal examples and exercises ask which questions a court would ask, never whether someone
  would be guilty. Statutes are quoted from the live page (gate G12). Judges only "as quoted by the CPS"
  or "as quoted in the Jury Manual". After force: rights and "get a lawyer's advice", nothing more.
- **Readers who have been harmed** (decision 7): never "irrational"; never what anyone should have
  done; scenarios written forward, not backward; men as well as women as people at risk; nobody who
  complied, resisted or froze chose wrongly; no offender described by race, ethnicity, religion,
  class, dress or accent; the B20 alcohol and drugging figures not used; the Hotline gun page's tip,
  tactics and "500 percent" never reproduced (gate G4); the Lamplugh "half of all burglaries" line,
  password advice and alarm technique never reproduced.
- **Objectives use page-testable verbs only** (decision 1). **No exercise** asks a reader to practise a
  strike, release or hold; to rehearse a confrontation, follow or watch a stranger; to call or text an
  emergency number, helpline or police to practise; to force a lock, door or window; to walk a route at
  night or on the phone to test it; to look into another person's phone or accounts; to write a
  domestic abuse safety plan anywhere it could be found; or to record anyone without consent. The only
  role-play allowed is lesson 8's, seated, words only, with a stop word. Write the limits into the
  exercise itself.
- **No products, no weapons guidance, no technique, no popular numbers** (decision 10).
- **No mechanism from general knowledge** (decision 11): where SOURCES gives none, give the finding and
  say the source gives no mechanism.
- **Contested questions** (decision 8): each side in its own terms and its proponents' own words where
  SOURCES has them; advocacy quoted as position, not fact; funding stated without insinuation; the
  course's voice adopts no side on a value question.
- Every required element of standards 1.2; 2 to 3 `:::predict`, at least 2 `:::checkpoint`, at least one
  `:::exercise` with a timing that opens "Take NN minutes" (digits), one worked example with a gap.
- Footnote markers `[1]` on checkable claims and a `## Sources` section. Each source entry states its
  read level **copied from SOURCES.md** in plain words, names the section read, and for an Internet
  Archive read gives the capture ID, with the SOURCES part and section only in an HTML comment
  (`<!-- SOURCES Part B B14 -->`).
- **Quotation marks only around text you copied out of SOURCES.md's own [V] quotations** (or a gate
  closure you recorded). Your summary of a source is your sentence. Keep every hedge and scope ("may",
  "associated with", "in one sample", "abstract only"). Run `npm run quotes
  courses/practical-life-and-self-reliance/personal-safety` and fix anything it flags. A quotation
  keeps its author's punctuation, including a spaced en dash; your own prose never has one.
- Links in the teaching prose where a source is quoted (not only in Go deeper); use the URLs recorded in
  SOURCES. No photographs or drawings of attacks, victims, weapons, injuries or techniques (decision
  14). Video only if you watched it in full and recorded it in SOURCES.
- No em dashes, no spaced en dashes in your prose, nothing from the banned list. Contractions at roughly
  5 to 8 per 1,000 body words. Bold under about 25 spans per 1,000 words, key terms only. Internal
  pipeline words ("SOURCES", "Part C", "gate G6", "the research file") never appear in learner-facing
  text; say "this course read the abstract only".
- Quiz: 4 to 6 items, at least half application with new cases (no people, places or numbers from the
  body), each law or safety item naming its jurisdiction or correct everywhere the course covers, **no
  item asking what a victim should have done** (decision 16), option lengths within about 15
  characters, all four positions used, no adjacent repeat, explanations naming distractors by content,
  never by position. **Keys chosen by script**: compare against every earlier lesson's sequence in this
  course; no earlier sequence shared in more than three positions, no run of three consecutive
  positions shared, and not a rotation or shift of any earlier sequence.
- `minutes:` from `npm run minutes` (use its measured value; edit the number by hand).
- A self-check never prints its own answer in body text.
- Charts (optional, only if one teaches better than prose): inline SVG per the rules in
  `.claude/commands/review-lesson.md` (no `<g>`, every size an attribute ≥ 15, viewBox near 420, no
  blank lines inside, `var(--token, #literal)` fills, a `<desc>`), drawn only from numbers in SOURCES,
  with source, year and population in the title or caption. OUTLINE names the candidate per lesson.

## Measured patterns, carried over from First Aid and CPR as general drafting defects
First Aid's reviews of lessons 1 to 10 found these in two or more lessons each. None is medical; each
will happen here unless you look for it:
- **A rule applied outside its scope.** A source's sentence applied to people, places or situations it
  was not written for. Here the traps are obvious and many: NICE NG10 is for health and care staff;
  ICAT was tested on police; EAAA on first-year university women and acquaintance rape; Möller's sample
  was women at one Stockholm clinic; the WIDE comparison is against no security at all; Florida's
  statute is Florida's; s.76's householder and retreat subsections are England and Wales only.
- **A grade, source or year attached to the wrong sentence.** A figure moved from the sentence it
  belongs to onto a neighbouring claim, or a trial's result attached to the programme's later version.
- **"Every body says" when one does.** "Police in both countries advise..." when only the Met's page was
  read; "every official source" when SOURCES says "every official source read". Check each symmetric
  claim against each source's own text.
- **A mechanism called absent when a source gives one** (or supplied when none does). Tseloni gives
  forced entries; Pease gives later advantage of opportunities; Roelofs gives a parasympathetic brake.
- **Cross-references that claim what an earlier lesson does not say.** Open the earlier lesson (this
  course's or another course's) and find the sentence before you write "as lesson N showed".
- **Quiz items that replay the body's own cases.** New people, new places, new numbers.
- **Primary text paraphrased that SOURCES does not record.** If you read a statute section, a helpline
  page or a report beyond what SOURCES holds, list it with its URL in your reply, and the fixer appends
  a dated "Gate closures, lesson NN" section to SOURCES.
- **A quotation quoted by its reassuring half**, or an unquoted lead-in that drops its hedge.
- **A predict block that asks what the sentence above it said.**
- **Places reused.** Build the used list by script before you name a town, and use none on it:

      grep -ohE "\b(in|In|at|from|near|outside|to) [A-Z][a-z]+( [A-Z][a-z]+)?" \
        courses/practical-life-and-self-reliance/personal-safety/lessons/*.md \
        courses/health-and-body/first-aid/lessons/*.md | awk '{print $2, $3}' | sort | uniq -c

  Read the output by eye (it catches non-places too) and say in your reply which places you used.
  Never attach a crime figure to a named small town.

## Before you finish
Run `npm run validate` (check the exit code; warnings about other courses are not yours) and fix every
line that names your file. Re-read your draft against the defect list and the measured patterns above.
Then reply with: the file path, word count, measured minutes, the quiz key sequence, the SOURCES
sections used, the gates you closed and the fallbacks you wrote, the places you used, anything you were
unsure of, and any place where the lesson wanted something SOURCES did not have (and what you did
instead).

## Course conventions settled so far
- Fifteen lessons, numbered as in OUTLINE "How many lessons, and why", with named seams in lessons 13
  and 14. Cross-references use those numbers and titles.
- The advice labels (tested; sensible, untested; contested; practitioner opinion) are introduced in
  lesson 1 and used in the prose of every later lesson without re-teaching.
- Record new conventions here as lessons land.

---

- **Set by lesson 1 (2026-09-25):** a short paragraph after the safety callout may explain a clause
  or two. **Content note form:** may name several consecutive sections; its lines cover **every
  jurisdiction the course names** (orchestrator, 2026-09-25, after lessons 2 and 3's reviews): Victim
  Support (England and Wales), Victim Support Scotland, Victim Support NI, VictimConnect (US, with
  its "currently physically safe" condition), and where the section is about sexual violence the
  Rape Crisis lines and RAINN, all exactly as SOURCES' "Gate closures G6, G27, G28" gives them,
  each with a `[n]` marker; never "the course did not find a line" for a nation G6 covers; plus lesson 7 by its title, "Domestic abuse and stalking"; it ends "You can
  skip to "<heading>"". **Lesson 7 is always referred to by title**, to survive renumbering.
  **Advice labels** are written into the sentence ("sensible, untested, in this course's labels").
  **Sources entries:** a bold "**Read: …**" copied from SOURCES and an HTML comment
  `<!-- SOURCES Part A F-1 -->`, or `<!-- lesson NN gate closure GX -->` for facts read at drafting.
  **Authors by surname only** unless SOURCES gives the full name. **Accepted manuscripts are
  paraphrased, not quoted.** **Charts:** viewBox 420 wide, bars labelled directly, source and year
  inside the chart. **The US homicide rate is 5.9 per 100,000 (CDC, 2024)**, not SOURCES R-1's 6.8
  (2023). Contractions have been running high (8.8 in lesson 1): keep to the 5 to 8 band.

- **Found twice in lesson 1's reviews (2026-09-25), so a standing rule:** the course's order of
  options (avoid, leave, talk, comply or resist, get away) is for a threatening encounter and is
  **never** presented next to, or as covering, abuse by a partner, ex-partner or family member. No
  sentence may imply "just leave", or that abuse follows from the victim's choices. "Domestic abuse
  and stalking" is described as the services' help and safety planning. Read every mention of it
  as a survivor would.

## Stage 4 review brief: Personal Safety (Tier B, split, two reviewers)

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/personal-safety`. You are one of two reviewers of one lesson,
each in a fresh context. **You report; you do not edit anything in the repo.** Write your findings to
the scratch file named in your task, then reply with a short summary (verdicts per pass and the count
of findings by severity).

A sensitive domain several times over (crime, gender and family, race, law, guns) under standards 3.4,
and one where the reader may have been harmed or be in danger now. Assume the lesson contains errors
and find them. **Every helpline number, every statute quotation, every figure's source and year, and
every jurisdiction label are the things to check first, against the primary itself, not against
SOURCES** (OUTLINE decisions 2, 3, 9 and 15).

## Read first
- `.claude/commands/review-lesson.md` (the passes and the traps; you run the passes assigned below).
- `.claude/commands/draft-lesson.md`, the whole "Defects this drafter repeats" list, and the "Measured
  patterns" list in this file's drafting brief.
- `docs/EDITORIAL_STANDARDS.md` (Part 3 closely), `docs/STYLE_GUIDE.md`.
- The course's `research/OUTLINE.md` (the sixteen decisions bind the lesson; the gates table; then this
  lesson's section; the neutrality notes) and `research/SOURCES.md` (the sections the lesson cites,
  read in full, plus the synthesis at the top, the unread line and its notes, any "Gate closures"
  sections at the end).
- The earlier review files in `research/reviews/` (what got found before, so you check for repeats).
- The lesson itself.

## Reviewer F: facts, neutrality, safety
1. **Fact-check** every number, name, date, quotation, read level, jurisdiction label, statute section
   and helpline against SOURCES.md. String-match every quotation against SOURCES (a quotation not in
   SOURCES or a gate closure is a finding). Check every unquoted lead-in for a dropped hedge or scope
   (defect 19): "abstract only", "one sample", "associated with", "as quoted by", "as archived". Check
   every read-level statement against SOURCES (defect 22) and ask what it licenses. For each
   mechanistic claim in the course's own voice, ask which source it came from (OUTLINE decision 11).
   Check nothing on the unread line or behind an open gate is cited or named (decision 6), including
   the slips the build cannot see ("police.uk" without "www.", Stanko named, Wright and Decker named,
   Grayson and Stein's sample sizes). **Redo every sum, percentage and "one in N" by hand** and say
   that you did. **Re-read on the live page, today, every phone number and service name the lesson
   prints, and every statute it quotes** (curl with a browser User-Agent, or the legislation site);
   where SOURCES gives a capture ID or a PMC id for a primary the lesson leans on, fetch it and check the
   lesson against the primary too; SOURCES can carry trims (defect 26). Record each claim checked with a
   verdict.
2. **Neutrality**: sort contested and value claims (3.1); Turing test each position; count citations,
   last words, who is explained versus quoted, and whose errors are in the misconception list, across
   the whole lesson; loaded language (decision 8's terms); omitted facts. **Read the lesson three more
   ways and report each:** as someone it describes who was harmed (does any sentence imply they should
   have done otherwise, or that their fear or their freeze was a failing? decision 7); as a man at risk
   (is he present, and served by the lines?); and, for lessons 13 and 14, as a gun-rights reader and as a
   gun-control reader (decision 15). Name the perspectives you checked against.
3. **Safety**: the safety callout present and byte-identical (run `npm run validate` and look for this
   file; compare with OUTLINE decision 4 by eye too, until the build check exists), and the crisis
   callout in lessons 14 and 15; content notes placed before the material with working "skip to"
   headings; in lesson 7, the lines and the monitoring warning in the first screen and "just leave"
   nowhere; every place a reader might take description as instruction they cannot safely carry out
   from a page (a technique, a tactic, a legal conclusion about their own case); every exercise within
   decision 1; no product, weapon guidance or popular number (decision 10); the law labelled at every
   point of use (decision 9); nothing from the Hotline gun page or the Lamplugh lines decision 7 bars
   (search for "drunk", "500", "half of all burglaries", "passwords").

## Reviewer P: depth, pedagogy, cold start, voice and media
1. **Depth**: specificity, expert and transfer tests per section; required elements of 1.2; padding.
   Does each data section serve a decision a reader makes, or has it become a statistics course
   (OUTLINE, "must not read as a statistics course")?
2. **Pedagogy**: objectives testable from a page (decision 1); worked examples before problems; one
   worked example with a gap; jurisdictions in a table or set, never interleaved (decision 2); every
   piece of advice carrying its label (decision 5); exercises real and within decision 1; predict and
   checkpoint blocks placed well and not spoiled by their headings or by the sentence above them.
   **Quiz: measure option lengths** (report the character counts), key positions, adjacent repeats,
   absolutes; check items don't reuse the body's own people, places or numbers; each law or safety item
   names its jurisdiction or is right everywhere the course covers, and none asks what a victim should
   have done (decision 16); at least half application; read each explanation against the option its key
   selects; no distractor named by position; the key sequence checked by script against every earlier
   lesson of this course under the drafting brief's rule. Execute every stem against its model answer.
   Trace every "if you got X, you did Y" backwards. Redo every sum.
3. **Cold start**: run `npm run taught courses/practical-life-and-self-reliance/personal-safety`, read the
   lesson as someone who has done exactly those courses and the earlier lessons of this one, walk every
   instruction literally, and flag every assumed term (a legal term of art, "prevalence", "stepped-wedge",
   "odds ratio", "tonic immobility"), institution or habit never explained. Check every "as First Aid
   lesson N taught" against that lesson.
4. **Voice and media**: em and en dashes, banned words and shapes (quote line numbers), contractions per
   1,000 body words (band 5 to 8), bold spans per 1,000 (over 25 is a finding), bolded paragraph
   openers, one-line morals, pipeline talk in learner prose; the tone toward a reader who is frightened
   or has been harmed (warm, plain, never brisk about harm); `minutes:` against `npm run minutes`; links
   in teaching prose; every chart against SOURCES' numbers and its population label; **open every SVG
   and read it**; build with `npm run build:drafts` if available and open the page.

## Findings format
Numbered with your letter (F1, F2... or P1, P2...), each with severity [critical/major/minor], the quoted
passage with its line number, the problem, the evidence, and a specific fix (replacement text where you
can). A wrong helpline, a wrong jurisdiction on a legal rule, a technique written as instruction, and a
sentence that puts responsibility on a victim are always critical. End with your verdicts per pass.

---

## Fix brief: Personal Safety, Stage 4 fix pass and voice checks

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/practical-life-and-self-reliance/personal-safety`. You apply two reviewers' findings to one
lesson, in a context that neither wrote nor reviewed it. Touch only: the lesson file, its review file
`research/reviews/<lesson-id>.md` (create it), and `research/reviews/course-wide.md` if it needs an
entry (**if it exists, append a dated section with one small edit; never create it over an existing
file or rewrite it**: on 2026-09-24 two First Aid fixers ran at once and the second recreated the file
over the first's four notes). SOURCES.md only as below. Do not commit or git add. Do not touch any
other file (other agents work in this tree).

## Read first
`.claude/commands/review-lesson.md` ("After the review"), the "Defects this drafter repeats" list in
`.claude/commands/draft-lesson.md` and the "Measured patterns" in this file's drafting brief,
`docs/STYLE_GUIDE.md`, `templates/REVIEWS.md`, the course's `research/OUTLINE.md` (the sixteen decisions
and this lesson's section), the SOURCES.md sections the lesson cites, an earlier review file in
`reviews/` for the shape (First Aid's if this course has none yet), the lesson, and both findings files.

## Do
1. Write the review file: a dated entry "## YYYY-MM-DD — Lesson NN — Stage 4, two reviewers in parallel,
   Tier B (split)" (that header's dash is the template's and is allowed in review files), naming
   reviewers F (facts, neutrality, safety) and P (depth, pedagogy, cold start, voice and media), their
   verdicts, and every finding with its ID in one or two lines.
2. Apply every finding you agree with. Verify a factual finding against SOURCES.md (and the primary
   where the reviewer fetched it; **for a helpline or a statute, fetch it yourself**) before applying it;
   if a reviewer is wrong, decline it and say why. Rewrite generic passages with specifics from SOURCES;
   never add a fact that is not in SOURCES or a recorded gate closure. Keep the safety callout and, in
   lessons 14 and 15, the crisis callout byte-identical (decision 4); keep every jurisdiction label
   (decision 2), every figure's labels (decision 3), every advice label (decision 5) and every legal
   point-of-use label (decision 9). A fix that removes a hedge or a label is not a fix.
3. Then the voice checks, in the same pass: dashes and banned words; bold to key terms (under 25 per
   1,000 body words); contractions in the 5 to 8 band; two or three `:::predict`, a `:::checkpoint` after
   each hard idea, one worked example with a gap; every `[n]` has a footnote; read the opening, and read
   every scenario once more as the person in it would.
4. After any quiz edit, read each explanation against the option its key now selects. Re-measure option
   lengths. Re-check the key sequence by script against every earlier lesson of this course.
5. `npm run minutes` and set `minutes:` to the measured value for this file. `npm run validate` and
   check its exit code; fix every line naming this file. `npm run quotes
   courses/practical-life-and-self-reliance/personal-safety` and fix anything for this lesson.
6. Append "### Resolutions applied" to the review entry: each finding fixed or declined with a reason,
   and the final measures (words, minutes, bold and contraction densities, quiz key sequence and
   option-length spread, places used). "**Status after review:** clean" or "needs second pass".
7. Reply with a 6-line summary, including anything a later lesson, the course-wide file, or the
   drafting brief's "Course conventions" should know.

## When a finding is in SOURCES.md too
If a reviewer shows that `research/SOURCES.md` itself carries the error (a trimmed quotation, a misread
figure, a claim about a source that the source does not make, a helpline number that has changed),
correct SOURCES.md first, then the lesson (drafting defect 26). Verify against the primary text before
editing. Edit SOURCES.md only by appending a dated "Stage 4 note, lesson NN (date)" section at the end
of the file, or with small targeted replacements, never by rewriting the file, because other fixers may
be editing other entries at the same time. List the SOURCES corrections in the review file.
