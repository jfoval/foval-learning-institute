# Backlog and Handoff

*Last updated 2026-09-08. Read this first in a new session, after `CLAUDE.md`. It is the single list
of what is in flight, what is next, and what John has asked for that isn't built yet. Keep it
current: when something ships, move it to `docs/CHANGELOG.md` and delete it here. That rule was
ignored for weeks and this file reached 1,063 lines, most of it history; it was cut back to the live
work on 2026-09-08 and the settled parts are in the changelog.*

## 0. Work that is not on `main` is not done

The live site serves `main`. A platform session on 2026-09-06 left thirteen commits on a branch
while John refreshed his browser wondering why a layout fix had not appeared. That is the whole
lesson. `CLAUDE.md` rule 11 is the rule; this is the reminder at the top of the page you read first.

Merge when `npm run validate` exits 0 and anything visual has been checked in both themes at phone
and desktop width. `git pull --rebase origin main` first: content sessions push there too, and on
2026-09-06 two of them did while a third was mid-merge.

**Two process rules that came out of real failures, both still binding:**

- **Content sessions commit to `main` and pull first. Do not open a branch for lesson work.** On
  2026-09-06 two sessions gave Logic lessons 2 to 8 a full Stage 4 cycle each, on `main` and on a
  branch, and diverged for nine hours without either noticing. Main's versions were kept, not
  because they were longer (the branch's were) but because **main's session could reach primary
  sources and the branch's container could not**. Its lesson 8 built a teaching point on Robinson's
  ecological correlation as +0.619 when the true figure is negative, because the 2009 IJE reprint
  typesets minus signs faintly enough that text extraction drops them. *Length is not quality, and a
  review that cannot reach the sources is not a fact-check.* The alternative text survives as the
  tag `superseded/logic-stage4-alt-2026-09-06`.
- **Update this file in the same commit as the work, not at the end of the session.** A session that
  dies mid-task should leave the next one a true picture. If you launch subagents, write down what
  they are reviewing before you launch them.

## 1. What the institute is building, and the three ways into it

John's model, stated 2026-09-08. Everything in this file serves it, and no doc should contradict it.

1. **The Foval Core** (`#/path`) is **the way through all of the knowledge**: every course the
   institute teaches, in the order it should be taken. 174 courses, 25 terms of seven. There is no
   elective tier any more; a course worth putting on the map is worth telling a learner when to
   take it. `curriculum/core-path.yaml` is the source of truth and `npm run validate` fails if a
   course is on the map and not on the path, or the other way round.
2. **The courses** (`#/courses`, and `#/map` for the full 174) are there for anyone to take whatever
   they want, in any order. Every course stands alone.
3. **A questionnaire** builds a path shaped to the person: their age, goals, time, and what they
   already know. Not started; the spec is §9.

**The tradeoff on point 1 was made deliberately.** Until 2026-09-08 the Core was a curated 52-course
general-education spine of about two years, and the other 122 courses were marked `elective` with no
ordering at all, so a learner who wanted Data Analysis or Project Management had no idea what came
before it. John chose to place everything. The cost is that the Core is no longer a two-year
programme, and the docs now say so. Do not quietly reintroduce an elective tier.

## 2. THE MARCHING ORDER. Work this queue top to bottom.

Reset by John, 2026-09-08, after he looked at the site and said the quiet part: Bible Basics and
Logic and Argument are solid and were worth what they cost, and *"outside of that the other live
courses I think they need significant improvement. Like writing clearly is kinda a joke. super low
quality and not much of anything honestly."* He is right, and the numbers say how right:

> Bible Basics averages **13,160 words a lesson**. Logic and Argument averages **9,380**. Clear
> Writing averages **452**, Algebra **444**, Python **464**. Those three are not weak lessons. They
> are placeholders that have been live for months with a `minutes: 20` label on 400 words.

1. ~~**The honesty pass.**~~ **DONE 2026-09-08.** All four parts, in one session.
   - **`minutes:` is now measured, not guessed, and the measurement is a script.**
     `npm run minutes` (`scripts/reading-time.mjs`) reports every lesson and `--write` fixes the ones
     that are materially out. **31 of 51 were rewritten.** How to Learn Anything was understated by
     20 to 30 minutes a lesson, Bible Basics lesson 11 by 80 (75 claimed for 14,908 words), and the
     three stub courses were overstated by up to five times: 30 minutes claimed for 274 words. The
     model and its calibration are documented in the script's header; the short version is that the
     reading rate was solved for from the values a human had already measured by hand during Stage 4
     (110 wpm for a course read with a Bible open, 140 for everything else), and an exercise costs
     per numbered step rather than a flat figure, because "rewrite this sentence" and "open your bank
     statements and categorise a month" are not the same three minutes.
   - **Images: 294 MB down to 2.8 MB.** Ten Bible Basics figures hotlinked full-size Wikimedia
     originals, including a **256 MB** Google Art Project scan of Rembrandt's *Prodigal Son* and the
     6.7 MB Treaty of Kadesh. They now use the `/thumb/.../960px-` form. Three figures were left
     alone because their originals are already smaller than the thumbnail would be; the rule is to
     measure rather than convert blindly.
   - **Bible Basics lesson 1's four sub-legible SVG labels** are at font-size 15.
   - **All ten SVG token collisions** are fixed, not just lessons 7 and 8. See §14.

2. **Clear Writing, rebuilt.** T1, four stubs, and the course about writing well is the worst-written
   thing on the site. **A rebuild, not an improvement.** Do not run Stage 4 on the existing stubs;
   replacing them is cheaper than reviewing them.
   - ~~**Stage 1 research.**~~ **DONE 2026-09-08**, in `research/SOURCES.md`. The spine is the
     reader-expectation tradition: Gopen and Swan's seven structural principles (read in full, quoted
     verbatim, including their own caveat that none of them is a rule) and Williams' characters-as-
     subjects and actions-as-verbs. The concrete rules come from GOV.UK, which is written for a country
     where "1 in 6 adults in England have very poor literacy skills", and the US federal plain-language
     guide, which also supplies the thing no popular writing course teaches: **how to test your writing
     on a real reader**, with paraphrase testing needing only six to nine people.
   - **The Strunk gap was found and closed in the same session, and what it turned up is the best thing
     in the file.** The first draft of SOURCES.md quoted *The Elements of Style* only through Pullum, who
     is attacking it: defect 10 exactly, sitting on the course's own contested question. **Strunk's 1918
     original is public domain**, so there was no excuse, and reading it moved the question. Strunk
     states the "do not discard the passive" qualification himself. He chooses between active and passive
     on what the paragraph is about, which is the topic-position principle seventy-two years before Gopen
     and Swan named it. And the three sentences Pullum calls misdiagnosed passives are introduced by
     Strunk as examples of "some such perfunctory expression as *there is*, or *could be heard*", not as
     passives at all. Meanwhile the *none* rule and the anti-*which* rule, two of Pullum's strongest
     hits, are **absent from 1918** and so belong to White. The organisational failure Pullum documents
     is real; the charge that Strunk could not tell a passive from an adjective is not, on this evidence.
     **The lesson should show the whole episode as a worked example of the course's own method.**
   - **Two gaps still open, and each blocks one lesson.** (a) **Sommers (1980) has not been read**; the
     free copy is a scanned JSTOR image with no extractable text, and it is the load-bearing source for
     the editing lesson. (b) **No primary peer-reviewed critique of readability formulas was reachable**;
     do not cite that critique to a source nobody opened. White's 1959 revision is also still unread and
     in copyright, which leaves open the question of what he changed.
   - **Status stays `published` while it is rebuilt**, because the build ships only published courses and
     setting it to `drafting` would delete a live course from the site. `.claude/commands/research-course.md`
     now carries this exception so the next rebuild does not trip on it.
   - **Next: Stage 2, the outline**, to about nine lessons. SOURCES.md ends with the essential sequence
     the outline should follow and says what the current four lessons do not cover: characters and
     actions, topic and stress position, document shape, and testing.

   *Also fixed in passing:* four `course.yaml` files showed learners a level vocabulary the map does not
   use ("Beginner", "All levels" against the map's Foundation/Core/Advanced). All seven courses now
   agree with their row in TAXONOMY.md.

3. **Personal Finance lessons 7 to 10, plus its two assessments.** The cheapest completion on the
   board, because Stages 1 and 2 are done: `research/OUTLINE.md` specifies all four lessons, the
   test blueprint and the project, and `assessments/` does not exist yet. Lesson 6 is the last one
   drafted.

4. **Algebra Essentials, rebuilt.** T5, five stubs. Procedural course: two lessons a session is
   allowed, the fact-check is executed rather than fetched, and the neutrality pass is skipped with
   a line in REVIEWS.md saying why.

5. **Python Basics, rebuilt.** T6, six stubs. Same treatment as Algebra.

6. **Then down the Core in order.** Term 1's remaining three are Reading Well, Digital Literacy and
   Using AI Effectively; Term 2 is the whole "running yourself" block. Start each with `/new-course`.

**Podcasts run alongside, not after.** See §3.

**The three stub courses stay live while they are rebuilt.** John's call, 2026-09-08, asked directly.
Taking them down would drop the site from seven courses to four and hole the first terms of the
Core for weeks. The honesty pass at item 1 is what makes leaving them up defensible, because the
thing that is untrue about them today is the `minutes:` label, not the prose. Do not re-open this.

### Stage 4 was overkill and has been cut. Read this before you review anything.

John asked directly whether there were review steps that were overkill. There were. Changed
2026-09-08 in `.claude/commands/review-lesson.md`, `docs/CONTENT_PIPELINE.md`, and `CLAUDE.md` rules
2 and 3:

- **Stage 4 is one reviewer by default, not five.** This was already known and never acted on: §8
  has recorded since Bible Basics lesson 6 that one subagent doing all five passes in its own fresh
  context ran about **100k tokens** and found everything the five-agent version found on the same
  lesson. Five agents cost **600k to 900k**. That is now Tier B, for sensitive domains under
  standards 3.4, standpoint courses, and lessons a Tier A review sent back for heavy rewriting.
- **The neutrality pass is skipped on lessons with no contested claims**, with one line in REVIEWS.md
  recording the call. Auditing "solve for x" for ideological balance is money spent on nothing.
- **On procedural courses the fact-check is executed, not fetched.** Run the code, work the
  arithmetic.
- **The second full review pass is no longer the default.** It runs on a trigger, not out of caution.
- **A stub is replaced, not reviewed.**
- **Two lessons a session is allowed on procedural courses.**

Not cut, because each caught something nothing else would have: the fresh context, the adversarial
fact-check, the en-dash and em-dash sweep, reading every SVG by eye, measuring quiz option shapes,
and full Tier B on anything contested.

Across the ~33 lessons left in items 2 to 5 that is roughly 25M subagent tokens down to about 5M.

### The status table, which is the answer to "is everything up to par"

Keep this current.

| Course | Term | Status | Lessons | Avg words | Through Stage 4 | Assessments | Podcasts |
|---|---|---|---|---|---|---|---|
| How to Learn Anything | T1 | live, **at standard** | 8 | 7,220 | 8 | 2 | **8 of 8** |
| Logic and Argument | T1 | live, **at standard** | 10 | 9,380 | 10 | 2 | **0 of 10 (owed)** |
| Bible Basics | T8 | live, **at standard** | 12 | 13,160 | 12 | 2 | 1 of 12 (**11 owed**) |
| Personal Finance | T2 | live, **half built** | 6 of 10 | 5,430 | 6 | **0 of 2** | none |
| Clear Writing | T1 | live, **stub** | 4 | **452** | 0 | 0 | none |
| Algebra Essentials | T5 | live, **stub** | 5 | **444** | 0 | 0 | none |
| Python Basics | T6 | live, **stub** | 6 | **464** | 0 | 0 | none |

*Updated 2026-09-08.* Fifty-one lessons live, nine with audio. The three stubs are 15 of those 51
lessons and about 2 percent of the site's words.

## 3. Podcasts: the standing parallel track

- **Engine: Gemini 3.1 Flash TTS on fal** (`fal-ai/gemini-3.1-flash-tts`), multi-speaker, $0.05 per
  1,000 characters in, about $0.30 to $0.50 an episode. It replaced VibeVoice 7B on 2026-09-08 after
  John listened to both, and every episode that existed was re-rendered from its existing
  fact-checked script and re-uploaded over the same R2 key, so no lesson frontmatter changed. Cost:
  $2.96 for the nine, plus $0.32 for the first test render. `FAL_KEY` lives in `.env.local`
  (git-ignored) and `scripts/podcast.mjs` reads it automatically.
- **The hosts are John (Charon) and Haley (Aoede), and this is SETTLED.** John was asked directly on
  2026-09-08 and said keep them and render the backlog. Changing a host voice means re-rendering
  every episode in the institute, because the hosts have to sound the same everywhere. Do not
  re-open.
- **What is owed: Logic's ten episodes and Bible Basics' eleven.** Nine of the fifty-one live lessons
  have audio. Those twenty-one are the whole backlog right now, because they are the only settled
  lessons without audio. **A lesson gets its episode only once its content has settled**, so the
  three stub courses get theirs after they are rebuilt and Personal Finance after 7 to 10 are
  drafted. Rendering audio for a lesson that is about to be replaced pays for it twice.
- **How to run one:** `/make-podcast <lesson>` does the whole flow; `node scripts/podcast.mjs plan
  <lesson>` says where any episode stands. Guards are deliberate: dry-run by default, no render
  without a `checked:` fact-check entry in the script frontmatter, a $2 cost cap without `--force`,
  and upload verifies the public URL answers before anything is stamped.
- **R2:** bucket `foval-audio`, public at `https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev`,
  objects at `<school>/<course>/<lesson>.mp3`. Scripts are content and live in git at
  `courses/<school>/<course>/podcast/<id>.script.md`; MP3s go to git-ignored `audio-out/` and R2.
- **Reasoning behind the engine choice** is in `docs/PODCAST_OPTIONS.md`, which evaluates all four
  routes by name. John pushed back twice that the research was not deep enough and was right both
  times.

## 4. Where the 2026-09-08 sessions left things

**Nothing is in flight. Working tree clean, `npm run validate` green: 174 courses on the path, 7
courses, 51 lessons built.** Three things shipped on 2026-09-08 and all are live.

1. **The podcast engine moved to Gemini** and all nine existing episodes were re-rendered. §3.
2. **Bible Basics published.** Twelve lessons through Stage 4, both assessments.
3. **Stage 4 cut to one reviewer, the marching order reset, the whole map placed on the Core, and
   `#/map` built.** §1, §2, and the changelog.
4. **The honesty pass, queue item 1.** Reading times measured and rewritten in 31 lessons, 294 MB of
   hotlinked images down to 2.8 MB, and every SVG defect on the site cleared. §2 item 1.

**Start at §2 item 2: Clear Writing, rebuilt.** Item 1, the honesty pass, closed on 2026-09-08.

The site's only remaining validator warnings, sixteen of them, are all in the three stub courses:
fifteen lessons with no links in the body and one lesson flagged as too short at 243 words. Bible
Basics, Logic and Argument, How to Learn Anything and Personal Finance are warning-free.

### Open items Bible Basics left behind, none of them blocking

*Items 3 to 5 were queue item 1 and are closed. Item 2 is the only one still open.*

1. ~~**The strongest King James Only position.**~~ **CLOSED 2026-09-08.** Written from primary
   sources: Riplinger's *Hazardous Materials* chapter 31, free on her own publisher's site, for the
   argument that the originals are gone and every printed Greek and Hebrew edition is corrupt so
   preservation must be in the English, and her reading of Psalm 12:6-7 in which the "furnace of
   earth" is translation itself. Her own chapter list attacks the Trinitarian Bible Society's Greek
   text and the Majority Text, which is the documentary proof that this is a third position hostile
   to the other two rather than a stronger form of them. Three cautions are in `research/SOURCES.md`:
   no primary Ruckman text is freely available and the lesson rests nothing on him; "double
   inspiration" could not be traced to an originator and is not attributed; and the Jack Hyles sermon
   usually cited for this position does not actually make the argument.
2. **Fee and Stuart's *How to Read the Bible Book by Book*** is characterised in lesson 12 from the
   publisher's description. It is the pattern the course project asks learners to use, so someone
   should open it and confirm the four headings.
3. ~~**Lesson 1's four sub-legible SVG labels**, and the `--line-strong`/`--navy` collisions.~~
   **CLOSED 2026-09-08**, along with the same collision in lessons 2 and 6.
4. ~~**Full-size Wikimedia originals hotlinked.**~~ **CLOSED 2026-09-08.** 294 MB to 2.8 MB.
5. ~~**Reading times never audited.**~~ **CLOSED 2026-09-08.** Measured by `npm run minutes` and
   rewritten in 31 of 51 lessons.

### One correction worth keeping for its general lesson

Lesson 11 described the Orthodox Study Bible's Old Testament as a revised New King James Version,
following the producing academy's website. The book's own printed introduction says close to the
opposite: Rahlfs's Greek was the basis, with Brenton and the NKJV as further sources. Both are
official statements and the lesson now prints both without resolving them. **A publisher-side web
page is not the same source as the book's own front matter**, and this course had been treating them
as interchangeable.

## 5. Two validator bugs fixed 2026-09-08, both hiding real defects

Worth knowing because it changes what you can trust `npm run validate` to catch.

- **The SVG checks matched only on the `<text>` tag.** `font-size` and `fill` inherit, so a chart
  could put every size on a `<g>` wrapper and pass clean with 24 labels between 8.5 and 11 units,
  while other lessons were flagged for the same defect. Bible Basics lesson 10 was doing this. The
  check now walks the tag tree and resolves what each `<text>` actually inherits.
- **The answers-in-plain-prose check looked only eight lines ahead** and did not know the phrasing
  "before you read my answer". It fired on six lessons doing it correctly and missed two that really
  were printing the answer in plain prose. It now scans to the next heading and knows more phrasings.

## 6. Lesson splits: SETTLED. Do not re-open with John.

**John's instruction, 2026-09-06:** "I want lessons and courses to be as long as they need to be to
do what they should do. Splitting doesn't concern me that much but makes sense you don't want an
individual lesson to go on forever. Do what you think is best."

The standing rule, which needs no further approval:

1. Split a lesson when it holds two ideas that each stand alone with a natural stopping point
   between them, which is the test standard 1.3 already sets. Do not split on length alone; 1.3 has
   no ceiling and tells reviewers never to flag length by itself.
2. Do not renumber as you go. Mark each seam with an HTML comment saying where it falls and what
   each half would need, and record it here.
3. Do the renumbering **once**, as a required step before the course goes to `status: published`.
   Rename the files, rewrite every "lesson N" reference in the lessons, OUTLINE.md and SOURCES.md,
   then grep for pointers to lessons that no longer exist.
4. While doing that pass, switch prose references from numbers to titles where it reads naturally.
   "The genre lesson" survives any reordering; "lesson 3" does not.

The reasoning is in `docs/CHANGELOG.md` under 2026-09-06.

## 7. Scripture licensing: SETTLED. Do not re-open.

The ESV **may not be quoted in any work published under a Creative Commons licence**, which this
repo is, and its free allowance **excludes Bible reference works**, which a course on how to read
the Bible arguably is. Bible Basics had been quoting it under a permission that does not exist.

Policy is Editorial Standards **4.7**: **NET Bible by default** (no verse cap for non-commercial use,
no exclusion for openly licensed works or reference works, and its translators' notes are worth
teaching from), JPS 1917 for the Tanakh or when describing how Jews read a passage, Brenton for the
Septuagint, KJV where the familiar wording is the subject, short comparative snippets from
copyrighted versions where comparing renderings is the teaching, and a note that our own open licence
does not extend to quoted scripture. **The 500-verse running count is gone. If a plan ever requires
counting again, the plan is wrong.**

One consequence: the NET renders Isaiah 7:14 as "this young woman", not "virgin". Lesson 4 keeps the
NET as its voice, says plainly that many English Bibles read "virgin", and rests the Christian
reading on the Septuagint's *parthenos* and Matthew's use of it, which is where it already rested.

## 8. How the pipeline behaves in practice

*The live handoff is §4, above. This section is the accumulated craft knowledge: what a
Stage 4 cycle costs, how to run one, what this drafter gets wrong repeatedly, and what the linter
can and cannot catch. It is worth reading before you review a lesson. The course-by-course work
orders that used to live here have been deleted: Logic and Argument and Bible Basics are both
published, and their lesson-by-lesson history is in each course's `research/REVIEWS.md`.*

### Two things worth reusing, learned on lesson 6

- **Check that SOURCES.md actually covers the lesson's domain before drafting it.** Lesson 6 was
  drafted for a 3.4-sensitive domain (tax) with no tax research in the file, and the neutrality
  audit traced the lesson's worst finding directly to that gap. Running Stage 1 on the gap first
  costs far less than the rewrite it prevents.
- **The one-agent-per-lesson pattern works and is cheaper than five separate agents.** One
  subagent doing all five passes in its own fresh context ran about 100k tokens for a lesson and
  found everything the five-agent version found on the same lesson, because the passes share the
  reading. **This is now the default**, and it sat in this file unacted-on for two courses' worth of
  reviews before anyone changed the command. If you measure something like this again, change the
  command in the same commit.

Already fixed course-wide: nine argument displays in lessons 4, 5 and 7 that rendered with the
conclusion swallowed into the last premise (lesson 2's three remain, in its fix pass); SVG fills
tokenised.

### What a Stage 4 cycle costs

**Tier A, the default since 2026-09-08: about 100k tokens** for one reviewer in a fresh context
doing every applicable pass, plus the fix pass. **Tier B, five reviewers in parallel: 600k to 900k**,
producing 30 to 45 findings. Tier B is for sensitive domains, standpoint courses, and lessons a Tier
A pass sent back for heavy rewriting; see `.claude/commands/review-lesson.md`. Rate limits are the
real constraint and are shared across sessions; two parallel sessions is the ceiling before they
starve each other.

### How to run one (this works; earlier attempts stalled)

Tier A: one subagent that reads the standards, the style guide, SOURCES.md, the course's REVIEWS.md
and the "Defects this drafter repeats" list below, runs every applicable pass, and returns findings.
Then consolidate into REVIEWS.md with finding IDs, apply the fixes, and append "Resolutions applied"
including what you chose not to fix and why.

Tier B: the same, but launch the five reviewers **in a single message with
`run_in_background: false`** so the orchestrator blocks until they return. Backgrounding them makes
the orchestrator end its turn and lose the work.

### Defects this drafter repeats, confirmed across seventeen lessons in two courses

1. **Research gathered at Stage 1 and never used.** The largest category every time. Named textbooks
   uncited, verified passages unquoted, explicit SOURCES.md instructions dropped. Lesson 2 of Bible
   Basics had eleven such items.
2. **Citing sources that were never read.** Logic lesson 2 cites Hurley and Copi as authorities while
   SOURCES.md records neither chapter was opened. The worst class, because it is an integrity
   problem rather than an error.
3. **Diagrams that contradict the lesson.** One taught the misconception its own quiz punished; one
   put a ninth-century-BC object below fifth-century-BC events in a timeline; one was drawn on three
   different scales while its caption claimed one.
4. **Self-checks that print their own answer** in plain body text instead of hiding it behind
   `:::predict` or `:::checkpoint`. **Found in eight consecutive Bible Basics lessons**, usually
   signalled by "Now do it yourself" or "Here's mine". Lesson 12 still has one, unreviewed. The
   compounding form is a block whose *stem* states the thing it then asks for.
5. **Quiz items answerable by option shape alone**: the key being the only hedged option, the only
   one without an absolute, the only one that applies the method, or the longest. Measure it, do not
   eyeball it: at lesson 8 the key was the longest option in five of six items, so "pick the longest"
   scored 83% against a 70% pass mark, and at lesson 7 the key was the only unhedged option in four of
   six. **The old note that Bible Basics never uses answer index 3 is now wrong**, since lessons 6, 7
   and 8 all use it; check the spread rather than assuming either way. Target after a fix pass: option
   lengths within about 15 characters, all four indices used, no adjacent repeat, and at least two
   options per item carrying no absolute.
6. **Contested claims asserted as settled** in the direction that favours the course's position.
7. **Voice tics**: "Here is" section openers, paragraphs ending on a compressed one-line moral,
   pipeline vocabulary in learner-facing headings ("worked example", "the mechanism", "Do it now").
8. **`minutes` understating real load** by a third to two thirds. Measured every time so far, and
   the 2026-09-08 pass found one out by a factor of three (lesson 12 claimed 45 minutes for a lesson
   that asks the reader to read three whole books and write a fortnight's plan).
9. **Quotations trimmed of the qualifier that carries the other side's case.** Added 2026-09-08 after
   three instances in one session: Ehrman's "none of your cherished doctrines appears to be in real
   danger" with "(at least the variations that we know about)" removed; Chicago's Article XIX quoted
   for its first denial with the second, "nor can inerrancy be rejected without grave consequences",
   dropped; the Society for Old Testament Study quoted for "too long to be a parable" while the
   premise that opens its paragraph, "granted that the book is not a historical narrative", was left
   out. **Each of these cut in the direction that helped the lesson's argument.** When you quote a
   source that disagrees with the course, read the whole paragraph and quote its shape, not its
   convenient half.
10. **Positions described in the words of the people who oppose them**, usually because the only
   sources in the file are the critiques. Bible Basics lesson 11 had three at once, one of them
   attributed to a scholar who has published against the view it was attached to. The tell is a
   footnote pointing at a book written *against* the position it is being used to describe. If the
   research file has no primary statement of a view, either get one or say in the lesson that the
   course has not read one; do not summarise from the opposition.
11. **Charts that pass the validator by putting their attributes where it does not look.** Every
   `font-size` on a `<g>` wrapper rather than on the `<text>` elements. Not deliberate, but the
   effect was 24 illegible labels shipping clean. The checker now resolves inheritance, so this
   specific route is closed; the general lesson is that a green `npm run validate` on a chart means
   less than opening the page.
12. **Assessments specified in `research/OUTLINE.md` and never written**, while a lesson refers to
   them as though they exist. Bible Basics lesson 12 pointed at the course project in four places,
   naming a book list and a format, and the file did not exist. Before publishing a course, open its
   `assessments/` directory and its outline side by side.

### What the linter now catches, so reviewers need not

`scripts/build.mjs` lints every lesson including drafts. Findings fail the build on a published
course and warn with "[draft: fix before publishing]" on a draft. It checks: em dashes; ESV
quotations; frontmatter that does not parse and quiz items that lost their question or options;
**quiz questions, options and explanations that did not parse as text** (added 2026-09-06, see
below); SVG text and shape fills hardcoded dark; SVG labels under font-size 15; bodies with no
links; and argument displays whose conclusion line would be folded into the previous premise.

### What the linter still cannot catch, so reviewers must

Recorded across five Stage 4 cycles. **Do not trust `npm run validate` on any of these.**

- **Five distinct routes past the SVG checks**, because they match `fill=` and `font-size=` only as
  attributes on `<text>`: a themed `fill="#ffffff"` (lesson 3); a `fill` on a `<g>` wrapper (4 and 5);
  an inline `<style>` block (6); a `style` attribute on the `<svg>` root (7); and a `font-size`
  attribute on a `<g>` wrapper (8), where it reported 15 of 43 undersized labels. **Read every SVG by
  eye.** The working pattern is bible-basics lesson 8: no `<g>`, every size an attribute, `xmlns`,
  `var(--token, #literal)` fills, a `<desc>`, and every row named in text so nothing depends on colour.
- **En dashes.** Line 139 checks U+2014 only. Lesson 6 shipped forty and lesson 8 nine, past a clean
  validate. Grep for U+2013 as well; the course convention is " to ".
- **`minutes`.** Never sanity-checked, and understated in every lesson so far.
- **Block bodies that collapse.** `:::predict`, `:::checkpoint`, `:::callout` and `:::exercise` bodies
  are parsed with `breaks: false`, so **single newlines inside a block render as one run-on
  paragraph**; six blocks across lessons 4, 7 and 8 were shipping as 160 to 290-word walls. Blank
  lines are required. A body opening `367. It's a letter` becomes `<ol start="367">`. Note
  `:::figure` and `:::video` are the opposite case: they use `parseInline` and must stay one
  paragraph. Poetry has the same root cause and needs two trailing spaces per line (see lesson 5).

**Fixed in the linter 2026-09-06, so it no longer needs watching:** a quiz option written as an
unquoted YAML value containing a colon parsed as a mapping, the frontmatter still parsed, and the
site rendered it through `String()`, so the learner saw the literal text `[object Object]`. **A
published lesson had shipped that way** (How to Learn Anything, lesson 3, question 3); it is fixed
and `site/data/courses.js` rebuilt. A sweep of all 50 lessons with quizzes found only that one and a
Bible Basics draft. `checkQuizTypes` now catches the class, and `explain` is checked only when
present, because the four pre-standards courses omit it.

## 9. Personalised learning path from a questionnaire (not started)

A third way in, alongside the Foval Core and free choice. Spec:

- **Questionnaire** at `#/plan`: age band; what they want out of it (be well-read / practical skills / faith / career / all of it); time per week; current strengths and gaps (self-rated across the 15 schools, three levels); a few life-goal prompts (start a business, understand the Bible, be a better thinker, manage money, get healthier, be more self-reliant); how they like to learn (reading, listening, doing).
- **Engine:** a scoring table from answers to school weights, then a path assembled from `curriculum/core-path.yaml` plus TAXONOMY courses: always starts with How to Learn Anything and one thinking-tools course; weights the rest by goals; respects prerequisites; sizes each term to the time budget. Deterministic and explainable: the page shows *why* each course is there. Phase 1 can be client-side JS; Phase 3 could use Claude to write the rationale text.
- **Attach to profile:** the plan is saved (localStorage now; Supabase profile in Phase 2) as the learner's active path; the Path page then shows *their* path with the same progress dots, "next up", and time estimates; "switch to the Core" and "rebuild my plan" buttons.
- Data file: `curriculum/planner.yaml` with the question list and weights, so it's editable without touching code.

## 10. Accomplishments page, sharing, and credentials (not started)

- **Achievements page** at `#/achievements`: a clean, screenshot-friendly layout (fixed max width about 600px, the Keystone Arch mark, the learner's name, courses completed with dates, lessons, hours, retention score, streak, certificates). Designed so a plain screenshot looks like a credential: generous margins, no UI chrome, the institute name and URL in a footer line.
- **Share buttons:** copy link, share to X/LinkedIn/Facebook via their share URLs, "copy as image" using a canvas render of the card (html-to-image via cdnjs, or an SVG template rendered to PNG). Native share on phones via `navigator.share`.
- **Verifiable certificates** need Phase 2 (accounts) so a certificate ID can be looked up at `/verify/<id>`; until then the share page is self-attested and says so.
- **Accreditation:** documented in `docs/PLATFORM_ROADMAP.md` Phase 3. Realistic path: Open Badges 3.0 issuance, LinkedIn "Add to profile" fields, employer or institution partnerships, and rigorous public assessments. Formal accreditation as a degree-granting institution is a multi-year regulatory process; revisit when there are learners and a track record. Research options for a certificate mark that is honest ("Foval Learning Institute Certificate of Completion, not accredited credit").

## 11. Swag store and donations (not started)

- **Store:** print-on-demand with no inventory. Recommended: Fourthwall (free, creator-focused, handles fulfilment and taxes, custom domain support) or Printful connected to a simple Shopify/Big Cartel storefront. Start with three to five items using the Keystone Arch mark and the tagline: a heavyweight tee (navy, gold mark), a crewneck, a dad cap, a mug, and a bookmark or print of the crest. Design files: export the mark and lockup as high-resolution PNG/SVG from `design/crest-keystone-arch-v2.html`. Link from the footer ("Store") and a small line on the About page. John must create the store account; the agent can prepare the artwork and product copy.
- **Donate:** a `#/support` page and a footer link. Copy from John: "We're constantly using tons of tokens to expand our offerings and make updates. We'd appreciate anything you can do to pitch in if it becomes something you find valuable over time. Cheers!" Options: GitHub Sponsors (fits the open repo), Ko-fi or Buy Me a Coffee (simplest), Stripe Payment Link (lowest fees). John must create the account; then it's one link.
- **FLI ideas** (subtle, not the main thing): "FLI" reads as "fly": a light touch such as "Fly high with us" on the support page or the store, and donors as members of "the FLI Club" with a small mark on their achievements page and early access to new courses. Alternative expansions to consider for a tagline or a store line: "Faith, Learning, Ideas"; "Faith. Learning. Integrity."; "Free Learning Institute". Keep it to one or two places; the institute's name stays the main thing.

**Funding, settled 2026-09-06 over two passes.** John raised that he may want some advertising later
to keep the main site free as it grows. The old copy promised "no ads" flatly in five places,
including `VALUES.md` value 1, so it was a promise that would have had to be broken publicly.

First pass narrowed it to a data promise plus an editorial one. John then cut the data half too:
"take off the tracking promise too. No need to over promise." So **the only forward-looking promise
left about funding is the editorial one**:

- **No lesson, assessment, or review card ever carries an advertisement, sponsor slot, affiliate
  link, or paid placement.** This is Editorial Standards 4.5, not marketing copy: a sponsor beside a
  fact-checked claim changes how the claim reads, and the reader cannot tell which sentences were
  bought. It also closes the affiliate-link door, which is how this usually erodes.
- Sponsorship, if it ever happens, goes on pages that teach nothing, and is labelled.

**Deliberately no longer promised anywhere:** that nothing about a learner is tracked, profiled or
sold, and that nothing they read decides what they get shown. Those were removed on purpose, not by
oversight. Do not put them back without asking John.

**What stayed, and why it is different.** Present-tense statements of fact about how the thing works
today are not promises and were kept: "your progress is saved in this browser and never sent
anywhere" in the footer, and on the account pages, that we hold an email address and progress and
nothing else. Removing accurate disclosure would be worse than making no promise, not safer. The rule
going forward: **describe what actually happens, do not promise what will never happen.**

**Open, and it becomes real the day any advertising or analytics is added:** there is no privacy
policy anywhere in the repo or on the site. Nothing needs one today (the only thing leaving the
browser is anonymous lesson feedback, and the feedback Worker deliberately stores no IP or user
agent). An ad network or an analytics script would change that, and most ad networks set cookies
whether or not you asked them to. Worth deciding deliberately rather than discovering.

Changed together across `VALUES.md`, `EDITORIAL_STANDARDS.md` 4.5, `PLATFORM_ROADMAP.md`, the About
page, the footer and the README, so no two places contradict each other. **Nothing about ads has been
built and no decision has been made to run any.** This settles only what the institute is allowed to
do if John chooses to.

## 12. Accounts backend: NOT blocked. Corrected 2026-09-06.

**The old entry here was wrong and has been replaced.** It said accounts were blocked on a Supabase
free-tier project slot, waiting on John to delete an empty project. That stopped being true when the
project moved to Cloudflare. There is a working Cloudflare account, a deployed Worker and a D1
database (`workers/feedback/`, database `foval-feedback`), proven end to end on the live site. D1 is
a real SQL database and it is enough for profiles, lesson progress, review items and study sessions.
Nothing is blocked. Accounts simply have not been built.

Do not go back to Supabase for this. It reopens the project-slot problem the Cloudflare move already
solved and puts a second vendor in the path of every sign-in. (The old investigation is still worth
keeping for one fact: the paused **John Project**, ref `ebkuhylfhyfretagpczf`, was confirmed empty on
2026-09-05, `auth.users` 0 rows, `storage.buckets` 0 rows, not referenced by any repo or deployment.
It is safe for John to delete whenever he wants the slot back. Nothing here needs it.)

**Decided and built, 2026-09-06.** The options and the tradeoffs are in **`docs/AUTH_OPTIONS.md`**.
John picked: write the session layer in the Worker we already have, ship Google sign-in and six-digit
email codes first, add email-and-password later. Passwords are the one method that needs the $5 a
month Workers Paid plan, because hashing costs 50 to 100 ms and Workers Free allows 10 ms of CPU.

**`workers/api/` is written and tested and NOT deployed.** 28 Worker checks and 12 browser checks
pass against a local D1. It is inert until `window.FOVAL_API` in `site/index.html` is set to the
deployed URL; while that is empty the site behaves exactly as before, with no sign-in link and no
network calls, which is what is on `main` now.

**What is left, and it needs John, because it needs credentials and two free accounts:** the deploy
steps are written out in `workers/api/README.md`. In short: apply `schema.sql` to the existing
`foval-feedback` database, create a Google OAuth client and a Resend account (both free), set four
secrets with `wrangler secret put`, `wrangler deploy`, then set `FOVAL_API`. That order matters;
setting `FOVAL_API` first gives every visitor a broken sign-in page.

**One thing to improve as soon as the site moves to Cloudflare Pages (8c):** the session token is a
bearer token in `localStorage`, not an HttpOnly cookie, because the site and the Worker are on
different origins today and third-party cookies are being phased out. Once they share an origin,
switch to an HttpOnly, Secure, SameSite=Lax cookie and delete the bearer path. It is a real security
improvement, not a tidy-up.

**One design constraint that comes out of the research and holds under any option:** since
1 September 2026 D1 free-plan queries *fail* when the daily caps are hit, and the binding cap is
**100,000 row writes a day**, not storage. So progress is one row per learner per course, updated in
place, and review items flush on a timer and on sign-out rather than on every answered card. The
browser stays the source of truth and the site keeps working with no network.

**Session note:** `wrangler` is not authenticated in the agent sessions running on Claude Code on the
web, and the network policy there blocks `workers.dev` and the live site. The Worker can be written
and tested locally in such a session, but the deploy needs credentials.

## 13. Going private: what has to move first (opened 2026-09-05)

John confirmed the codebase does not need to be public; it is only public because free GitHub Pages requires it. Value 9 has been rewritten in `docs/VALUES.md` and on the About page so "open" now promises openness about the *teaching* (sources named, disagreement shown, revisions recorded) rather than open source code. The "Content and code on GitHub" footer link is removed.

**Do not make the repo private yet.** GitHub Pages will not serve a private repo on a free account, so flipping it today takes the live site down. Order of operations: move static hosting to Cloudflare Pages (free, serves private repos, custom domain, fast HTTPS), repoint DNS, *then* flip the repo to private.

**Two site links still point into the public repo** and will 404 for visitors the moment it is private. Both are in `site/assets/app.js` via the `REPO` constant:

| What | Replace with |
|---|---|
| "Report a problem" on every lesson, opens a GitHub issue | the feedback endpoint, which already exists (see §15) |
| "editorial standards" on the About page | an on-site `#/standards` page generated from `docs/EDITORIAL_STANDARDS.md` at build time |

~~The two "full map" links~~ **done 2026-09-08**: `#/map` is a real page now, generated from
TAXONOMY.md by `scripts/build.mjs` into `window.FOVAL_MAP`, listing all 174 courses by school with
level, term and status. `#/standards` is the same job on a different file and is the last one left.

## 14. Known defects not yet fixed, course-wide

- **15 lessons have no links in the body**, against 4.5 (was 28 before the honesty pass, and 38
  before that). Every one of the fifteen is in the three stub courses, so this defect is now
  entirely inside queue items 2, 4 and 5 and gets fixed when those courses are rebuilt. Warned by
  the linter.
- ~~**SVG labels under font-size 15.**~~ **FIXED 2026-09-08.** The last four were in Bible Basics
  lesson 1 and are now 15. Nothing on the site trips this check. The standing rule when it recurs:
  raising a font size in a fixed viewBox can overflow, so widen the viewBox rather than bump
  blindly.
- **Answer leaks: the six published ones are FIXED (2026-09-06) and the lint is promoted.** All
  six in How to Learn Anything (lessons 1, 2, 3, 5 twice, 7) are `:::checkpoint` blocks now,
  and the lint fails the build on a published course. Eight remain in drafts (seven in Bible
  Basics, one in Logic 9); they warn with the draft tag and will block those courses'
  publishing, which is the point. Find them: `npm run validate | grep "prints the answer"`.
- ~~**Ten SVG token collisions.**~~ **FIXED 2026-09-08, all of them.** `--line-strong` and `--navy`
  are byte-identical in both themes (`#0f2a4a` light, `#c9d3e2` dark), and five charts across Bible
  Basics 2, 6, 7 and 8 used the pair to tell two things apart. In every case the thing on
  `--line-strong` was an axis, a spine or a legend swatch that the author had already given a grey
  literal fallback, so the fix was `--text-2` and the intent was already written down. Two charts
  needed more than a token swap, because moving them to `--text-2` would have collided with a
  category already using it: lesson 7's idealist bar and lesson 2's Acts 1 and 2 sliver are now
  outlines rather than solid blocks, which is also the better picture in both cases. Both were
  checked by eye in both themes. **The general lesson: when a chart needs a fifth treatment and the
  palette has four strong colours, an outline is the fifth, not a second grey.**
- **Five lessons still carry greys outside the palette** in SVG fills.
- ~~**Nine SVG labels run past their own viewBox and are silently clipped by the browser.**~~ Fixed
  on 6 September 2026, and the linter now holds the line. Eight were real and each took the fix its
  own shape allowed: bible-basics 02's chart and map got a wider viewBox with `max-width` widened to
  match, so the drawing keeps 1 unit to 1 pixel instead of shrinking; 05, 11, logic 09 and 12 had
  their captions wrapped onto a second line, which is what lesson 11 already did; 04's annotation
  moved to a centred line under the rows; 09's label started further left. The ninth, logic 10's
  "concession feeds the qualifier", was **never clipped at all**: it is `transform="rotate(90 ...)"`,
  so it takes up its line height across the page and not its length, and the linter was measuring it
  as if it ran left to right. The linter now projects the rotation and skips transforms it cannot
  reason about, so that false positive is gone.
- ~~**A blank line inside an `<svg>` silently truncates the chart.**~~ Found and fixed the same day.
  Markdown ends a raw HTML block at a blank line, so `marked` closed the `<svg>` early and handed
  the rest to the paragraph parser: the words still reached the built HTML, which is why nothing
  caught it, but the shapes after the blank line rendered outside the chart and never drew. It had
  taken **all ten** of bible-basics 01's labels, **thirty-nine of forty-three** in lesson 08, and
  **sixteen of twenty-five** in lesson 11, which was showing one translation out of ten. The linter
  now fails the build on a blank line inside an `<svg>`. If you write a chart, do not put blank
  lines between its groups.
- **Bible Basics lessons 9 to 12 still carry the known SVG size problems** the linter reports (9, 11
  and 12), and lesson 12 additionally has `## Worked example 1` and a "Here's mine." that prints its
  own answer, spotted while reviewing lesson 7. Those will be handled in their own Stage 4 cycles;
  they are listed here so nobody treats them as new.
- **The three placeholder courses** (Python Basics, Algebra Essentials, Writing Clearly) are live and
  have never been through the pipeline. At about 450 words a lesson they are the largest quality risk
  on the site, and they are queue items 2, 4 and 5 in §2. Personal Finance came off this list on
  2026-09-06 and is now half built rather than a placeholder.
- **`minutes:` is wrong nearly everywhere**, understated on the real courses and wildly overstated on
  the three placeholders. Queue item 1 fixes it sitewide.

## 15. Smaller items

- ~~Feedback endpoint~~ **done 2026-09-05**: Cloudflare Worker + D1, live at `https://foval-feedback.johnfoval.workers.dev`, wired into `site/index.html`. Read it with `npm run feedback`. See `docs/FEEDBACK_LOOP.md` and `workers/feedback/`.
- Four placeholder courses through the pipeline (research, outline, redraft, review) or off the site before promotion.
- Term milestones ("Foundations" etc.) on the Path page when a term is complete.
- Audio mode and "Ask this lesson" are on the roadmap (Phase 2 and 3).
- The taxonomy's `Christian standpoint` labels are now capitalised as "Christian Standpoint" everywhere the site shows them; keep that form.
- Swag store (asked by John 2026-09-06): when it exists, make shirts playing on the FLI initials, in the vein of "I'm so FLI" and "Learning to FLI". Funny but cool; keep the mark and the Caslon/Plex system so they still look like the institute.

## 16. Course requests from people (opened 2026-09-06)

Requests that came in by text message, not through the feedback form. All are now rows in
`curriculum/TAXONOMY.md` with status `planned`; none has a folder yet. A folder gets created when
research begins (`/research-course`).

| Course | School | Requested by | Why |
|---|---|---|---|
| Graphic Design Fundamentals | Literature and the Arts | M. Wesley | Wants to take it himself. First outside request for a course. |
| Statistics for Citizens (existing row, note widened) | Foundations | M. Wesley | Asked for "intro to statistics and the normal distribution". The existing course already covers averages, sampling and correlation; the note now names spread and the normal distribution explicitly so the outline has to teach the bell curve properly, including where it does not apply. |
| Computer Science Foundations | Computer Science and AI | John | Part of the "speciality technology courses" ask. Sits between How Computers Work and Data Structures and Algorithms: computation and its limits, complexity, languages and compilers, memory, concurrency. |
| Technology Leadership: CTO and CIO | Computer Science and AI | John | The other half of that ask. The executive job rather than the craft: architecture and build-vs-buy, budgets and vendors, security posture, team structure, roadmaps, talking to a board. Marked Advanced because it assumes the technical courses under it. |

**Data science basics (John).** Deliberately not a new row. The path already exists and adding a
"Data Science" course would duplicate three others: Statistics for Citizens, then Statistics and
Probability (Mathematics), then Data Analysis (Computer Science and AI), with Machine Learning
Fundamentals after it. If those four are built in that order they are the data science basics. Worth
raising with John only if he wants them bundled and labelled as one track on the Path page, which is
a packaging decision, not a new course.

**Where each sits on the Core.** Every course on the map carries a term, since the elective tier was
removed on 2026-09-08. Graphic Design Fundamentals is T23, Computer Science Foundations and
Technology Leadership are T20, and Statistics for Citizens is T5.

**Ordering.** All four are `planned` behind the queue in §2. Nothing here jumps that queue without
John saying so. Graphic Design Fundamentals is the one with a named person waiting on it, which is
the strongest reason on this list to move a course up.

## 17. Alex Hormozi as a source and as a teaching model (opened 2026-09-06)

John reads Hormozi and likes how he distils business concepts. This is a note for whoever runs
`/research-course` on Sales, Marketing, Entrepreneurship, Copywriting or Small Business Operations.
**Do not delete this when the backlog is trimmed. Copy it into each of those courses'
`research/SOURCES.md` at Stage 1.**

### What he actually is

Alex Hormozi built and sold gym businesses (Gym Launch, Prestige Labs), and with Leila Hormozi runs
[Acquisition.com](https://www.acquisition.com/), which buys stakes in founder-owned companies. He
has written [$100M Offers](https://www.amazon.com/100M-Offers-People-Stupid-Saying/dp/1737475731)
(2021), [$100M Leads](https://www.amazon.com/100M-Leads-Strangers-Stuff-Acquisition-com/dp/1737475774)
(2023) and [$100M Money Models](https://www.amazon.com/100M-Money-Models-Make-Acquisition-com/dp/1963349156)
(2025), plus a Lost Chapters volume. The books are cheap or free, and the free content is the top of
a funnel into his firm's deal flow and products. That is stated openly by him; it is a declared
interest, not a hidden one, and the courses should say so once rather than insinuate it.

### The pedagogy is the part worth taking

This is genuinely good teaching craft and most of it transfers straight into our lessons:

1. **One idea per unit, and the idea gets a name.** "Grand Slam Offer", "the value equation". A named
   idea is recallable a month later. Our lessons often teach a concept without ever naming it.
2. **A formula or checklist the learner can apply before finishing the page.** The value equation is
   dream outcome times perceived likelihood of achievement, divided by time delay times effort and
   sacrifice. Whatever else it is, it is a thing you can run your own offer through in two minutes.
3. **Before and after with real numbers.** He shows the weak version and the rebuilt version side by
   side. That is exactly what standards 4.2 asks for and what our business drafts will otherwise
   skip.
4. **Naming the common mistake explicitly** rather than only teaching the correct method.
5. **Short sentences and no throat-clearing**, which is our style guide already.

Points 1 to 4 are worth writing into `docs/STYLE_GUIDE.md` or the business courses' outlines as
requirements, independent of whether we cite him at all.

### What he is not, under standards 2.2 and 2.5

His material is a **primary source on how one successful operator thinks and what he did**. It is
not evidence that the methods cause the results. The evidence problems are ordinary and worth
stating plainly in the lesson rather than hiding:

- **Survivorship and selection.** We hear from the operator whose gyms worked. The base rate of
  people who ran the same playbook and failed is unobserved.
- **Self-reported figures**, not audited, and mostly from one sector cluster: gyms, supplements,
  agencies, and information products.
- **Frameworks, not findings.** The value equation is a useful heuristic with no measurement behind
  the multiplication. Teach it as a practitioner's model, labelled that way, not as a result.
- Standard 2.5 already covers this: "Never present a guru's claim as settled." Business advice is a
  contested-empirical domain under 3.1, so his claims get the same treatment as anyone's.

### So: cite him, and cross-check him

Use him for what he is good at, always paired with the research literature:

| Where he is used | Cross-check against |
|---|---|
| Offers, pricing, value framing | Nagle, *The Strategy and Tactics of Pricing* (the standard text); Kahneman and Tversky on framing and reference points |
| Lead generation, channels, advertising | Byron Sharp, *How Brands Grow* and the Ehrenberg-Bass work on penetration and mental availability, which pushes hard against niche-offer thinking and is the strongest opposing case |
| Sales conversations | Neil Rackham, *SPIN Selling*, one of the few sales books built on observed calls; Dixon and Adamson, *The Challenger Sale*, with the caveat that its underlying analysis has been questioned |
| Anything about entrepreneurial odds | Scott Shane, *The Illusions of Entrepreneurship*; BLS and Kauffman business survival data. This is the antidote to survivorship and belongs in the Entrepreneurship course regardless |
| Management and operations claims | Bloom and Van Reenen, the World Management Survey work, which is the actual causal evidence that management practices move performance |

**The best use of him is as a worked example of two things at once.** Teach the value equation,
apply it to a real offer, and then, in the same lesson, teach why his own results cannot tell us
whether it works. A learner who can admire a framework and still ask for the base rate has got
something out of the course that no business book gives them. That is a Foval lesson and nobody
else's.

### Next step

Nothing to build yet. When the first business course reaches Stage 1, the researcher reads at least
$100M Offers and $100M Leads in full (not summaries, per rule 1 and the repeated defect of citing
unread sources in §1), records in SOURCES.md which specific claims come from him and which come from
the research literature, and marks every Hormozi claim with what kind of claim it is under 3.1.
