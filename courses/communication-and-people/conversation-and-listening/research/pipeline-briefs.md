# Pipeline briefs for this course's Stage 3 and Stage 4

Kept so any session can run the lessons the same way, adapted on 2026-09-26 from
`practical-life-and-self-reliance/car-basics/research/pipeline-briefs.md` and Personal Safety's, for
a course that is a standards 3.4 domain (psychology, with gender, culture, autism and political
dialogue inside it). Each lesson: one drafting subagent (DRAFT brief), a fresh-context review (REVIEW
brief: **Tier A**, one reviewer, for lessons 1, 2, 3, 4, 6, 7, 8, 10, 12, 13 and 17; **Tier B
split**, reviewers F and P in parallel, for lessons 5, 9, 11, 14, 15 and 16; OUTLINE decision 14),
and one fixer in a further context (FIX brief). Findings files live in the session's scratchpad and
do not survive it; the lesson's review file in `reviews/` is the record. A course-wide neutrality
audit runs once all seventeen lessons exist, before the course is published.

**Before a lesson is drafted, check its gates** in OUTLINE "Stage 1 gates". **G1 must be attempted
before lesson 9 is drafted** (the Weger papers, Kluger et al. 2024, the Itzchakov PSPB papers and the
four-lab preprint, read in a browser); if it cannot be closed, the lesson is drafted to G1's fallback
and a `docs/QUEUE.md` line names what stayed unread. **G3 (the Gino integrity check) must be run
before lesson 6 or lesson 16 relies on Huang et al. 2017's reason for audit or on Yeomans et al.
2020.** G7 (the crisis numbers) is re-read on the day lessons 10 and 11 are drafted. Every other gate
has a written fallback, and the drafter either closes the gate or writes the fallback, never neither.

**Before lesson 10 is drafted,** the orchestrator adds a build check in `scripts/build.mjs` that
lessons `10-` and `11-` of `conversation-and-listening` carry the Mental Fitness crisis callout word
for word (OUTLINE decision 5), the same shape as Personal Safety's `CRISIS_PS` check, so the first
draft is checked by the build rather than by eye.

---

## Course conventions settled so far

Read this section first. It binds every lesson, and it grows as lessons land: a fixer who learns
something a later lesson needs adds a dated bullet at the end.

- Record new conventions below as lessons land, each as a dated bullet.

---

## Drafting brief: Conversation and Listening, Stage 3

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/communication-and-people/conversation-and-listening`. You are drafting ONE lesson (number
given in your task). Other agents may be working on other lessons in the same tree: never touch any
file outside the one lesson file you are writing, except SOURCES.md as the gate rule below allows. Do
not commit, do not run git add. Do not edit OUTLINE.md, build.mjs or anything else.

## Read first, in full, in this order
1. `.claude/commands/draft-lesson.md` (the whole thing, especially "Defects this drafter repeats":
   read your draft against it before you finish).
2. `docs/EDITORIAL_STANDARDS.md` (Part 3 closely: this is a sensitive domain) and
   `docs/STYLE_GUIDE.md`.
3. `courses/CLAUDE.md` (lesson format, block grammar).
4. This file's "Course conventions settled so far", above. It binds you.
5. The course's `course.yaml`, then `research/OUTLINE.md`: "How many lessons", "What is deliberately
   left out", the **twenty decisions** (they bind you), the "Stage 1 gates" table, then your lesson's
   section and the ones either side, then "Neutrality notes".
6. `research/SOURCES.md`: the synthesis at the top (through "Suggested lesson sequence"), including
   the access problems, the quotation-mark convention ([V], [V-OCR], [V-abstract], [T], snippet
   only), the boundaries, the contested questions, the safety-critical guidance and the unread line;
   then **every Part and section your lesson's outline section cites, read in full**. The file is long
   (about 59k words); read the parts you need, fully, not by grep snippets. The `<!-- unread: -->`
   line binds you: nothing named there is cited, and a gate that is not closed is not relied on.
7. Run `npm run taught courses/communication-and-people/conversation-and-listening` and read what
   earlier courses taught. Build on them by name and reteach nothing OUTLINE decision 7 assigns
   elsewhere. **Open the earlier lesson and find the sentence before you write "as lesson N
   showed".** Lessons 10 and 11: open Mental Fitness lesson 1 and Personal Safety lessons 7 and 11
   first. Lessons 8 and 16: open Logic and Argument lesson 7. Lessons 6, 7, 9 and 12: open Mental
   Fitness lesson 2.
8. Every lesson of this course already in `lessons/` (for connections, the conventions they settled,
   and to avoid repeating their examples, figures, names and phrasing).
9. The two most recent review files in `research/reviews/`, and `reviews/course-wide.md` if it
   exists. If this course has none yet, read Personal Safety's `reviews/course-wide.md`: most of its
   notes are about drafting defects in a sensitive domain that are not specific to its subject.

## Gates first
For each gate your lesson depends on, either close it (read the source in a browser or with curl,
and append a dated "Gate closures, lesson NN" section to the end of SOURCES.md with the read level,
the URL, and any quotation marked [V]; remove any unread entry it clears) or write the fallback
exactly as OUTLINE gives it. **Several Stage 1 failures were Cloudflare blocking curl, not paywalls:
try a browser before you fall back.** **Every crisis number and service wording you print is re-read
on the service's own page on the day you draft (G7)**, and the date goes in SOURCES. **Every [V-OCR]
quotation you use is checked against the page image (G4).** Say in your reply which gates you closed
and which fallbacks you wrote.

## Hard requirements
- File: `courses/communication-and-people/conversation-and-listening/lessons/NN-slug.md` (slug from
  the outline title, short, lowercase, hyphens).
- **Lessons 10 and 11 only: the crisis callout**, byte for byte, directly after the opening
  paragraph(s). It is the build's `CRISIS` text (OUTLINE decision 5); copy it from there or from
  Mental Fitness lesson 1, never retype it. No other lesson carries it; where another lesson meets
  distress, one sentence points to lesson 11 and to Mental Fitness lesson 1, "Where ordinary ends".
- **Every finding carries its evidence label in the prose** (decision 2: replicated; one group's
  programme; single study; failed to replicate, corrected or retracted; contested; observed in
  recordings; practitioner advice; and "this course's reading" wherever the lesson concludes
  something no single source states).
- **The course's question in the sentence** (decision 3): finding or advice; who was studied or who
  advises; the setting; and, for an effect, what it was compared with (decision 4). Medicine,
  negotiation, therapy and crisis-line findings name their setting where they are used (decision
  10).
- **Effect sizes as Mental Fitness lesson 2 taught them** (decision 4): the conversion table labelled
  as the course's arithmetic; a correlation never as a percentage improvement or a cause.
- **Contested questions** (decision 12): both positions in their proponents' own words, what would
  settle it, no verdict; count citations, last words and whose errors are in the misconception list
  before you call a block balanced (defect 14). Where SOURCES has no primary statement of a side, say
  the course has not read one.
- **Practitioner scripts labelled** with their profession and goal (decision 9); the shared moves
  taught, the scripts never presented as how friends should talk; nothing taught as persuasion
  (decision 8).
- **Language** (decision 13): women and men as the studies code them, averages as averages; never a
  national character; "autistic people", no "suffers from"; advocacy bodies' advice as theirs; no
  side on any political issue, and example topics without a party signal.
- **No mechanism from general knowledge** (decision 11): where SOURCES records one, it is its authors';
  where it records none, say the sources read give no settled explanation.
- **No counselling, risk assessment or safety planning, anywhere** (decision 5), including checkpoint
  answers and quiz explanations. "Ask directly" is the services' advice; the evidence is "not found to
  increase suicidal thinking in research, screening and clinical settings", and no study tested
  friends.
- **The Gino co-authorships** (decision 17): Huang et al. statistics from the corrected results (G2);
  nothing about Francesca Gino beyond a primary record (G3); Yeomans et al. 2020 only if G3 found no
  notice.
- **Exercises inside decision 1's five kinds**, with the limits written into each: consent before any
  recording; nobody identifiable in the journal; no crisis role-play; no covert technique or test; no
  diagnosing anyone; the stranger exercise optional. End the body with a short **"For your journal"**
  paragraph naming what this lesson adds to the observation journal or the project.
- Every required element of standards 1.2; 2 to 3 `:::predict`, at least 2 `:::checkpoint`, at least
  one `:::exercise` with a timing that opens "Take NN minutes" (digits), one worked example with a
  gap; a "What people get wrong" section; Connections; Go deeper (two to four specific items).
- Footnote markers `[1]` on checkable claims and a `## Sources` section. Each source entry states its
  read level **copied from SOURCES.md** in plain words ("the abstract only"; "the full text"; "the
  author's copy"; "an OCR of the scanned chapter, checked against the page image") and names the
  section or page read, with the SOURCES part and section only in an HTML comment
  (`<!-- SOURCES Part C §2.3 -->`, or `<!-- lesson NN gate closure G1 -->` for facts read at
  drafting). A paper known only through another is cited "as reported by" that paper.
- **Quotation marks only around text you copied out of SOURCES.md's own [V] quotations** (or a gate
  closure you recorded); [V-OCR] only after G4; [T] only after it is re-got. Your summary of a source
  is your sentence. Keep every hedge and scope ("abstract only", "in one sample", "may generalize",
  "as quoted by", "the authors argue"). Popular books and talks: one sentence at most per quotation,
  a handful per lesson (decision 16). Run `npm run quotes
  courses/communication-and-people/conversation-and-listening` and fix anything it flags. A quotation
  keeps its author's punctuation, including a dash; your own prose never has an em dash or a spaced en
  dash.
- Links in the teaching prose where a source is quoted (not only in Go deeper); use the URLs recorded
  in SOURCES' "Best existing free resources" and each Part's (e). Never link the Janusik and
  Rouillard compilation, the Columbia reprint of Nichols and Stevens, or third-party uploads of
  Gilovich 1998 or Bloom 2017 (link PubMed or the DOI).
- Media under decision 19: charts only from figures SOURCES records, with source, year and sample in
  the caption; no photographs of faces or bodies as "body language" examples; no stock photos, no AI
  images; video from YouTube only, checked (G18).
- No em dashes, no spaced en dashes in your prose, nothing from the banned list. Contractions at
  roughly 5 to 8 per 1,000 body words (write them in the first draft; defect 15). Bold under about 25
  spans per 1,000 words, key terms only. Internal pipeline words ("SOURCES", "Part C", "gate G1", "the
  research file", "decision 7", "Tier B") never appear in learner-facing text; say "this course read
  only the abstract" or "this course didn't find a published critique".
- Quiz: 4 to 6 items, at least half application with new cases (no people, places or numbers from the
  body), option lengths within about 15 characters, all four positions used, no adjacent repeat,
  explanations naming distractors by content, never by position; **no item on a contested question
  whose key is one side**, and no item in lesson 11 whose key assesses risk. **Keys chosen by script**
  under decision 18's rule.
- **Names and places** (decision 18): first names only for invented people, never reused within the
  course; before using any name or place, run `grep -rlw "<name>" courses | grep -v
  "conversation-and-listening/research"` and use it only if the output is empty.
- `minutes:` from `npm run minutes` (use its measured value; edit the number by hand). If it passes
  90, cut from the lesson's "Cut first if long" list, in order; if still past 90, say so in your reply.
- A self-check never prints its own answer in body text.
- Charts: inline SVG per the rules in `.claude/commands/review-lesson.md` (no `<g>`, every size an
  attribute of at least 15, viewBox near 420, no blank lines inside, `var(--token, #literal)` fills, a
  `<desc>`), drawn only from numbers in SOURCES.

## Measured patterns, carried over from Personal Safety, Mental Fitness and Car Basics
Each was found in two or more lessons of those courses. None is specific to their subjects; each will
happen here unless you look for it:
- **A finding applied outside its population or setting.** The traps here: Stivers' timing is polar
  questions in informal talk; Roberts and Francis's 600 to 800 ms is English, lab-rated, request
  acceptances; Templeton is Dartmouth undergraduates in same-gender pairs; Huang is online text chats
  between strangers; Heritage is 20 family physicians in two US areas; Singh Ospina and Langewitz are
  clinics with a clock; Kardas, Epley and Schroeder are US and UK samples from one network; Bolger and
  Amarel are female students; Feng 2014 is vignettes; Akechi is 40 students; Trevisan is self-declared
  diagnoses on a forum; Dazzi is research, screening and clinical settings, not friends.
- **A read level or a caveat attached to the wrong sentence.** Weger 2010 and 2014 are abstracts
  unless G1 closed; Kluger et al. 2024 is an abstract; the Itzchakov PSPB papers are abstracts; the
  HBR studies are the HBR article's account; Gottman 1998 is OCR; Derber is secondhand.
- **"Every source says" when one does.** "The services agree" is true of asking directly and not
  keeping a plan secret; it is not true of every wording (988 and Samaritans phrase things
  differently). Check each symmetric claim against each source's own text.
- **A statistic from a review stated as the primary's.** Itzchakov and Bodie 2026's secondary figures
  (G14); Tamir and Mitchell's 30 to 40% (G16); Beckman's 18 seconds (G5).
- **A quotation quoted by its reassuring half, or a lead-in that drops its hedge.** Heritage's "may
  generalize"; Samaritans' "can protect" restated as fact; Zenger and Folkman's data described as a
  study; Carney's statement trimmed of what survives (felt power).
- **Cross-references that claim what an earlier lesson does not say.** Open it and find the sentence.
- **Quiz items that replay the body's own cases.** New people, new numbers, new settings.
- **Primary text paraphrased that SOURCES does not record.** If you read a paper or a service page
  beyond what SOURCES holds, list it with its URL in your reply; it goes into a dated "Gate closures,
  lesson NN" section of SOURCES.
- **A predict block that asks what the sentence above it said.**
- **A misconception list that names only one side's errors** on a contested question.

## Before you finish
Run `npm run validate` (check the exit code; warnings about other courses and audio debt are not
yours) and fix every line that names your file, including every unread-line error. Re-read your draft
against the defect list, the measured patterns and the conventions above. Search your draft for
"always", "never", "everyone", "people", "research shows", "studies show", "proven", "men", "women",
"autistic", "culture" and each country name, and check each against decisions 2, 3, 12 and 13. Then
reply with: the file path, word count, measured minutes, the quiz key sequence, the SOURCES sections
used, the gates you closed and the fallbacks you wrote, every service page and number you re-read
(with the date), the names and places you used, anything you cut and why, anything you were unsure
of, and any place where the lesson wanted something SOURCES did not have (and what you did instead).

---

## Stage 4 review brief, Tier A: Conversation and Listening (one reviewer; lessons 1, 2, 3, 4, 6, 7, 8, 10, 12, 13, 17)

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/communication-and-people/conversation-and-listening`. You are the reviewer of one lesson, in a
fresh context. **You report; you do not edit anything in the repo.** Write your findings to the
scratch file named in your task, then reply with a short summary (verdicts per pass and the count of
findings by severity).

A standards 3.4 domain (psychology). Assume the lesson contains errors and find them. **Every
figure's population, setting and comparison, every read level, every evidence label and every
quotation are the things to check first** (OUTLINE decisions 2, 3, 4, 15 and 16).

## Read first
- `.claude/commands/review-lesson.md` (the passes and the traps).
- `.claude/commands/draft-lesson.md`, the whole "Defects this drafter repeats" list, and the
  "Measured patterns" list in this file's drafting brief.
- This file's "Course conventions settled so far".
- `docs/EDITORIAL_STANDARDS.md` (Part 3 closely), `docs/STYLE_GUIDE.md`.
- The course's `research/OUTLINE.md` (the twenty decisions bind the lesson; the gates table; this
  lesson's section, including its tier and neutrality line; the neutrality notes) and
  `research/SOURCES.md` (the sections the lesson cites, read in full, plus the synthesis at the top,
  the unread line, any "Gate closures" sections at the end).
- The earlier review files in `research/reviews/`.
- The lesson itself.

## The passes
1. **Facts.** Check every number, name, date, quotation, sample, read level and evidence label against
   SOURCES, and string-match every quotation against SOURCES' [V] text or a recorded gate closure.
   Where SOURCES gives a free full text (PMC, an author's copy, a service page) for a claim the lesson
   leans on, fetch it and check the lesson against the primary; SOURCES can carry trims. Redo every
   sum, percentage and effect-size conversion by hand and say that you did. Check each unquoted
   lead-in for a dropped hedge or scope. Check nothing on the unread line or behind an open gate is
   cited or named, including the slips the build can't see (Beckman's 18 seconds as a finding; the
   Blades or Polihronis meta-analyses; Mehrabian's samples; Kalla and Broockman; Derber quoted;
   "15.6%"; the 30 to 40%). For each mechanism in the course's voice, ask which source it came from
   (decision 11).
2. **Neutrality.** Every lesson in this course gets this pass (rule 6). Sort each contested or value
   claim (3.1); Turing-test each position; count citations, last words, who is explained against who
   is merely quoted, and whose errors are in the misconception list; check decision 13's language;
   check that every finding names its population and that no US or UK sample is written as "people".
   For the lessons OUTLINE marks "full neutrality pass", name the perspectives you checked against
   (the lesson's section lists them where it has them: lesson 3, a reader who values listening as a
   social skill for getting on, in Carnegie's sense; lesson 4, Headlee and a self-disclosure
   researcher; lesson 7, Bloom and Zaki; lesson 10, the hold-back tradition and the advice
   researchers, and a reader from a culture Feng studied; lesson 12, a depth researcher, a small-talk
   defender and a reader who values privacy; lesson 17, Headlee, Murphy, Duhigg and Carnegie). For
   "light" lessons, check the culture lines and write one line for the rest.
3. **Safety.** No counselling, risk assessment or safety planning anywhere (decision 5); lesson 10
   carries the crisis callout byte-identical (the build checks it; confirm by eye), and no other lesson
   except 11 carries it; where the lesson meets distress, the pointer to lesson 11 and Mental Fitness
   lesson 1 is present; every exercise inside decision 1, with its limits written in (consent before
   recording, nobody identifiable, no covert technique, no diagnosing, the stranger exercise optional);
   every place a reader might take a description as an instruction to act on someone else.
4. **Depth and pedagogy**: specificity, expert and transfer tests per section; required elements of
   1.2; objectives testable from a page; worked examples before problems, one with a gap; evidence
   labels and the course's question in the prose; predicts that ask for a real prediction; quiz items
   with new cases, keys by the rule; the "For your journal" paragraph.
5. **Cold start**: read the lesson as someone who has done exactly the courses `npm run taught` lists
   and the earlier lessons of this one. Flag every term never explained ("transition-relevance
   place", "dispreferred", "backchannel", "d", "r", "preregistered", "meta-analysis", "confederate",
   "person-centred"), and check every "as Mental Fitness lesson 2 showed" or "as Logic and Argument
   lesson 7 taught" against that lesson. Walk every exercise literally, as a reader with a partner or a
   journal, and flag any step that would need someone's consent the lesson didn't ask for.
6. **Voice and media**: em and en dashes, banned words and shapes (quote line numbers), contractions
   per 1,000 body words (band 5 to 8), bold per 1,000 (over 25 is a finding), one-line morals, pipeline
   talk in learner prose; `minutes:` against `npm run minutes` (over 90 is a finding unless the drafter
   gave a reason); links in teaching prose; every chart against SOURCES' numbers; **open every SVG and
   read it**; build with `npm run build:drafts` and open the page.

## Findings format
Numbered (R1, R2...), each with severity [critical/major/minor], the quoted passage with its line
number, the problem, the evidence, and a specific fix (replacement text where you can). **Always
critical:** a wrong or altered crisis number or callout; anything that teaches risk assessment,
counselling or safety planning; a contested question closed in the lesson's voice; a finding stated
as universal where its population was one country's students and the claim is about a group of
people (gender, culture, autism, age); a quotation not in SOURCES or a gate closure; a citation to
anything on the unread line. End with your verdicts per pass.

---

## Stage 4 review brief, Tier B split: lessons 5, 9, 11, 14, 15 and 16 (two reviewers, F and P)

As the Tier A brief, but two reviewers run in parallel, each in a fresh context, and neither edits
anything. **Reviewer F** runs passes 1, 2 and 3 (facts, neutrality, safety), and the neutrality pass
is the full audit under standards 3.5, naming the perspectives checked (each lesson's section in
OUTLINE lists them). **Reviewer P** runs passes 4, 5 and 6 (depth and pedagogy, cold start, voice and
media). Findings are numbered F1... and P1....

**Each reviewer writes its own file**, `research/reviews/<lesson-id>.F.md` and `<lesson-id>.P.md`,
and the orchestrator merges them into `<lesson-id>.md` before the fix pass. On lesson 15 both wrote
the one file at once and Reviewer P's nineteen findings were overwritten, so "append, never
overwrite" is not enough when two agents race.

Additionally, Reviewer F:
- **Lesson 5 (interruption and gender):** re-reads Anderson and Leaper 1998 (eScholarship) for every
  d the lesson prints and its definition level; checks Zimmerman and West's 46 of 48 and "98%"
  against the scan (G4); checks that the group-size figure is not used (D2); checks Singh Ospina's and
  Langewitz's figures against PMC; checks that no sentence says what men or women do as individuals,
  and that the women-first-author moderator is reported without insinuation. Perspectives: a
  dominance-tradition scholar, a conversational-style scholar, a woman regularly talked over at work,
  a man told he interrupts, a high-involvement speaker, a person who stammers.
- **Lesson 9 (active listening):** checks each study's read level (G1's state), what its "active
  listening" condition contained and what it was compared with; checks that Kluger's r̄ is never
  given as a cause or a percentage; re-reads Bodie et al. 2015 and Itzchakov and Bodie 2026 from
  Bodie's site; checks the Gottman quotations against the page image (G4) and that no recantation is
  claimed; counts citations and last words on each side of contested questions 1 and 2. Perspectives:
  an Itzchakov and Kluger programme researcher, a sceptical communication scholar, a Gottman-tradition
  couples researcher, a PREP author, a counsellor who teaches reflective listening.
- **Lesson 11 (suicide):** re-reads, today, the callout against the build constant and every number
  and service wording on the services' own pages (988lifeline.org, 988.ca, samaritans.org,
  lifeline.org.au, findahelpline.com, bethe1to.com, ruok.org.au, mentalhealthfirstaid.org); checks
  the 988 steps word for word; checks Dazzi et al. 2014's sentence and design against the Cambridge
  full text, and that nothing on the unread line is cited unless G8 closed; checks that "no study
  tested friends" is present; searches the lesson, its exercises, checkpoints and quiz explanations for
  anything that assesses risk (method, plan, timing, access, "how serious"), counsels, or safety-plans;
  checks the pointers to Personal Safety lessons 7 and 11 against those lessons' own sections, and
  that the secrecy difference is attributed service by service with the course's reading labelled.
  Perspectives: someone who has had suicidal thoughts and was asked, someone who found being asked
  intrusive, a crisis-line volunteer, a clinician cautious about lay helpers, a reader outside the
  four countries the callout names.
- **Lesson 14 (body language):** checks Mehrabian's two sentences on kaaj.com and that no design
  detail of the 1967 papers appears (G6); re-reads DePaulo et al. 2003's eye-contact and
  gaze-aversion figures and the Global Deception Research Team's percentages (PMC); checks the
  base-rate arithmetic by hand; checks that the Reid manual is quoted through Denault et al., not
  characterised, and GAO is attributed as reported; checks the face debate for balance (Barrett and
  Keltner each in their own words) and that Cuddy's published defence is acknowledged as unread, not
  dismissed. Perspectives: a basic-emotion researcher, a constructionist, a police interviewer trained
  in behavioural cues, a deception researcher, a power-posing researcher who defends felt-power
  effects, a reader from a culture where looking away is respectful.
- **Lesson 15 (culture, autism, age, hearing):** re-reads Rossano et al.'s figures against the OCR
  and page image (G4), Akechi et al. (PLoS ONE), Trevisan et al. (PMC), Crompton 2020 (PMC) and the
  2025 registered report's abstract and opening (Nature), and RNID's and STAMMA's pages today; checks
  G12's state and that 2020 is never cited alone; checks decision 13's language line by line; checks
  that no community is characterised beyond what was measured, and that Hall's and Hofstede's own case
  is said to be unread rather than supplied from critics. Perspectives: an autistic adult, a
  social-deficit researcher, a double-empathy researcher, a reader who grew up in Japan and one who
  grew up in Finland, an older reader, a reader who is deaf or hard of hearing.
- **Lesson 16 (disagreement):** checks G3's state and that the receptiveness recipe appears only if
  it closed; checks G11's state and that Kalla and Broockman appear only if it closed; re-reads
  Retraction Watch's page and Baron et al. 2025's author PDF for every figure; checks that the
  organisations are described in their own words and that the example topics carry no party signal;
  searches for any sentence that implies which side of any political issue is right. Perspectives: a
  reader on the political left, a reader on the political right, someone who holds that dialogue with
  certain views legitimises harm, a Braver Angels or Essential Partners practitioner, a political
  scientist sceptical of small effects.

---

## Fix brief: Conversation and Listening, Stage 4 fix pass and voice checks

Repo: `/Users/johnfoval/Desktop/Foval Learning Institute`. Course:
`courses/communication-and-people/conversation-and-listening`. You apply the reviewer's (or both
reviewers') findings to one lesson, in a context that neither wrote nor reviewed it. Touch only: the
lesson file, its review file `research/reviews/<lesson-id>.md` (create it), and
`research/reviews/course-wide.md` if it needs an entry (**if it exists, append a dated section with
one small edit; never create it over an existing file or rewrite it**: on 2026-09-24 two First Aid
fixers ran at once and the second recreated the file over the first's four notes). SOURCES.md only as
below. Do not commit or git add. Do not touch any other file (other agents work in this tree).

## Read first
`.claude/commands/review-lesson.md` ("After the review"), the "Defects this drafter repeats" list in
`.claude/commands/draft-lesson.md` and the "Measured patterns" in this file's drafting brief, this
file's "Course conventions settled so far", `docs/STYLE_GUIDE.md`, `templates/REVIEWS.md`, the
course's `research/OUTLINE.md` (the twenty decisions and this lesson's section), the SOURCES.md
sections the lesson cites, an earlier review file in `reviews/` for the shape (Personal Safety's if
this course has none yet), the lesson, and the findings file or files.

## Do
1. Write the review file: a dated entry "## YYYY-MM-DD — Lesson NN — Stage 4, Tier A" or "Tier B
   (split)" (that header's dash is the template's and is allowed in review files), naming the
   reviewer(s), their verdicts, and every finding with its ID in one or two lines.
2. Apply every finding you agree with. Verify a factual finding against SOURCES.md (and the primary
   where the reviewer fetched it; **for a crisis number, a service's wording or a figure the lesson
   leans on, fetch it yourself**) before applying it; if a reviewer is wrong, decline it and say why.
   Rewrite generic passages with specifics from SOURCES; never add a fact that is not in SOURCES or a
   recorded gate closure. Keep the crisis callout byte-identical in lessons 10 and 11; keep every
   evidence label, every population and setting, every comparison, every read level and every
   attribution. A fix that removes a hedge or a label is not a fix. A fix never adds counselling, risk
   assessment or a verdict on a contested question.
3. Then the voice checks, in the same pass: dashes and banned words; bold to key terms (under 25 per
   1,000 body words); contractions in the 5 to 8 band; two or three `:::predict`, a `:::checkpoint`
   after each hard idea, one worked example with a gap; every `[n]` has a footnote; read the opening,
   and walk every exercise once more as a reader with a journal and a willing partner.
4. After any quiz edit, read each explanation against the option its key now selects. Re-measure
   option lengths. Re-check the key sequence by script against every earlier lesson of this course
   under decision 18's rule, value shifts included.
5. `npm run minutes` and set `minutes:` to the measured value for this file. If it passes 90, cut from
   the lesson's "Cut first if long" list before adding anything. `npm run validate` and check its exit
   code; fix every line naming this file. `npm run quotes
   courses/communication-and-people/conversation-and-listening` and fix anything for this lesson.
6. Append "### Resolutions applied" to the review entry: each finding fixed or declined with a reason,
   and the final measures (words, minutes, bold and contraction densities, quiz key sequence and
   option-length spread, names and places used). "**Status after review:** clean" or "needs second
   pass".
7. Reply with a 6-line summary, including anything a later lesson, the course-wide file, or this
   file's "Course conventions" should know.

## When a finding is in SOURCES.md too
If a reviewer shows that `research/SOURCES.md` itself carries the error (a trimmed quotation, a
misread figure, a claim about a source that the source does not make, a number that has changed),
correct SOURCES.md first, then the lesson. Verify against the primary text before editing. Edit
SOURCES.md only by appending a dated "Stage 4 note, lesson NN (date)" section at the end of the file,
or with small targeted replacements, never by rewriting the file, because other fixers may be editing
other entries at the same time. List the SOURCES corrections in the review file.
