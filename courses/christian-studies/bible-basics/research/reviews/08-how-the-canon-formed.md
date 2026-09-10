# Reviews: The Bible, What It Is and How to Read It — 08-how-the-canon-formed

Append-only. Newest at the bottom.

## Lesson 8, "How the canon formed" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context. **Verdict: not clean for publish.** About eighty findings, twenty-one
blocking. **Fourteen of the blocking findings are defects already resolved earlier in this same
course**, and one of them was fixed in **lesson 1** and returns here in the one lesson where it does
the most damage.

Two things about this lesson are better than anything the course has produced so far and must not be
lost in the rewrite. **Its scripture handling is the cleanest in the course**: four NET quotations,
four verified verbatim against both mirrors, four carrying the tag, zero ESV survivals, and no
scripture in the quiz at all, so lesson 7's untagged-quiz-quotation defect does not recur. And **it
avoids the Jamnia trap entirely**, telling the Jewish-canon story from the Sirach prologue, Josephus,
Luke 24:44 and *Bava Batra* without once reaching for the discredited "council of Jamnia". The
misconception list is also complete against the outline for the second lesson running, and for the
first time the drafter's recorded bias did not show in it.

Against that, the two worst structural numbers in the course to date: **six of six quiz items are
lookups**, and **one quiz item does not render at all**.

### BLOCKING

**L8-B1. Quiz item 5 renders as four options reading `[object Object]`, and `npm run validate` passes
it. A FIFTH route past the validator, and the first to defeat the quiz check.** Lines 42 to 49. Each
option begins `Orthodoxy: `, `Apostolic origin: `, `Use in worship: `, `Catholicity: ` unquoted, so
YAML parses every entry as a **mapping rather than a string**. `site/assets/app.js` renders options
through `esc()`, which is `String(s ?? "")`, so the learner sees four identical lines of
`[object Object]`. **Confirmed independently by running the file through `js-yaml` and the site's own
`esc`.** `scripts/build.mjs` has a guard written for this class of bug but it tests only that
`options` is an array of length 2 or more, which this passes.
**A sweep of all 50 lessons in the repo with quizzes found one other instance, and it is live:**
`courses/learning-and-mind/how-to-learn-anything/lessons/03-retrieval-practice.md`, Q3 option C, in a
course with `status: published`. That file is outside this course's ownership and has been left
untouched; it is filed as shared-file request 12 below.

**L8-B2. "Membership was assumed." The exact claim `SOURCES.md` forbids in bold, in the one lesson
where it is load-bearing.** Line 88: "not which books belonged, but which order to copy them in.
**Membership was assumed.**" Line 90: "the list was Jewish and **settled** before Christians did
anything with it."
`SOURCES.md` 41: "**Do not write that this proves membership was already fixed:** whether the Jewish
canon's boundaries were closed by this period is genuinely argued (Barton, *Oracles of God*; Lim;
McDonald), and the rabbinic sources themselves record disputes over whether Ecclesiastes, Song of
Songs and Esther 'defile the hands' (m. Yadayim 3:5)." `REVIEWS.md` 68 is L1-N1, the same words, and
336 records it fixed **in lesson 1**. None of Barton, Lim, McDonald or m. Yadayim 3:5 appears in this
lesson. Caught by four of five reviewers.
Why it is worse here than it was in lesson 1: **a closed first-century Hebrew canon is the premise
the Protestant case at line 287 rests on**, so asserting it as settled 200 lines earlier means the
reader arrives at the argument with it already won, in a section where they will not connect the two.

**L8-B3. The two-model map excludes both traditions the lesson exists to be fair to, and omits the
Catholic argument that actually bites.** Line 245, "Two live positions, each in its own terms": Kruger
(recognition) and McDonald (community determination). Both Western, both post-Reformation. The
Catholic and Orthodox answer, that a canon presupposes an authority competent to recognise one and
that no canon is reachable without it, is nowhere in the lesson. That is the argument a Catholic
leads with, and **Kruger's self-authenticating model exists in large part as the Protestant answer to
it**, so the lesson gives the answer while never stating the question. Q6's key then frames the whole
dispute as "recognised or made canonical", which leaves the third position no place to stand. 3.2 and
3.7, in the lesson whose second half is titled "Why Catholic and Orthodox Bibles have more books".

**L8-B4. The Orthodox case is never made, against the lesson's own objective 2.** Objective 2 promises
"each tradition's case in terms its own members would accept". Worked example 2 gives "A Catholic
reader makes this case, in their own terms" and "A Protestant reader makes this case, in their own
terms". **There is no Orthodox equivalent anywhere.** Orthodoxy gets one descriptive paragraph, a book
list, a synod, a jurisdictional caveat, and its difference is framed as an absence ("there is no
Orthodox equivalent of Trent's single defining decree") rather than a different ecclesiology. On the
timeline it appears **once**, at the bottom, dated 1672.
Compounding: line 277 introduces Orthodoxy's own word inside the phrase "The Greek term for **the
extra books**", using the Protestant baseline label in the very sentence that hands Orthodoxy its own
term, fourteen lines after the callout that calls that move "the quickest way to fail the test".

**L8-B5. The Council of Florence is missing, and the timeline draws its absence as a dashed
1,100-year gap.** The lesson goes Jerome (c. 405) to Trent (1546) with "That is why the question was
still open a thousand years later". **Florence, *Cantate Domino*, 4 February 1442, listed the full
canon with the deuterocanonical books in it: a general council, seventy-five years before Luther,
whose list Trent repeats.** Innocent I sent Exsuperius a similar list in 405. Without Florence, the
lesson's own rebuttal at 305 ("Trent defined; Luther set apart") is an assertion; with it, it is a
demonstration. 3.3: include the facts a well-informed opponent would insist on.

**L8-B6. "The edges settle: 200 to 400" is false for half the church, in the direction that favours
the course.** Line 114 heading and line 116. The **Peshitta**, the standard Syriac New Testament from
the early fifth century, has **22 books** and omits 2 Peter, 2 and 3 John, Jude and Revelation; those
five arrived only in the Philoxenian (508) and Harklean (616), and **the Church of the East has never
received Revelation**. The lesson knows canons still vary, and says so at 277 about the **Old**
Testament, where the variation suits the section's argument. It does not say it about the New
Testament, where it would complicate the course's position. Second-hand, from reference works.

**L8-B7. The lesson's opening move is refuted by its own later evidence, sixty lines on, and nobody
noticed.** Line 60 opens with 2 Peter 3:15 to 16; line 62: "Inside the New Testament itself, one set
of Christian writings is already being treated as Scripture by another." Line 119 then lists **2
Peter** among Eusebius's disputed books, line 116 lists it among "the edges", and Q1's own explanation
names it as one of the live disputes. 2 Peter is the New Testament book whose date is most widely
doubted, and the critical mainstream puts it in the second century, **which is McDonald's position
exactly**: that "Scripture" language about Christian writings is a second-century development. So the
lesson's framing move depends on the one thing it later concedes is contested, in its first
paragraph. The fix costs the argument almost nothing and turns the weakest opening into the most
honest one.

**L8-B8. Marcion as negative proof is a live dispute stated as settled.** Line 100: "You can't cut
down a collection that doesn't exist. Marcion is negative evidence that by the 140s the churches were
already reading a wider set." **Von Campenhausen** argued there was no normative collection of new
writings before Marcion and that the lists are a response to him. **Harnack**, who argued the lesson's
side, granted in part that the church "did not react to Marcion by creating the first canon" but may
have reflected for the first time on what it already had. A live minority (BeDuhn, Klinghardt,
Vinzent) argues Marcion's gospel is prior to canonical Luke. Bruce, the lesson's own authority here,
structures his book as Marcion then "The Catholic Response". Web search only.

**L8-B9. Bruce is the lesson's neutral referee in a dispute he is a party to, and is made the
authority for five facts `SOURCES.md` does not record him supporting.** Note 5 credits Bruce with
Marcion's dating, the three tests, **the absence of canon business from Nicaea's records**, the
recognition thesis, and **the doubt that an "Alexandrian canon" existed**; note 11 adds "Augustine
present at Hippo per Bruce". `SOURCES.md` 19 records only his thesis, two chapter titles and the three
tests, and the lesson 8 draft block does not list him as consulted. Note 5 is the most-used citation
in the lesson, at five call sites.
Separately, **Bruce is an evangelical Protestant whose stated thesis is the recognition model this
course holds**, and he is used unattributed at line 295 to report a consensus that "takes one old
argument away from the Catholic side". That is L7-B5's shape, whose resolution established that a
scholar's commitments must be disclosed where he is cited approvingly.
And the Alexandrian-canon claim is reported one-sidedly: **the argument that dissolved it is
Sundberg's**, the same Sundberg the lesson cites at note 8, and Sundberg's conclusion was that in the
first century **neither** community had a closed list. The lesson reports the half that costs the
Catholic side an argument and suppresses the half that costs the Protestant side the premise it
asserted at line 90.

**L8-B10. The self-check prints its own answer in plain body text, hitting both flagged phrases.
Eighth lesson running.** Line 289 "**Now do the next step before I do**"; line 291, the next visible
line, "**Here's mine.**" L1-V3, lesson 2's line 254, L3-B1, L4-B1, L5-B1, L6-B1, L7-B1. The fix has
been written into this course seven times. This instance destroys **the only place in the body where
the learner runs objective 2's reasoning on a case the lesson has not already resolved**, and the
Jude/1 Enoch move is the intellectual high point of the lesson.

**L8-B11. Six of six quiz items are lookups.** Q1 is answered by worked example 1 entire and by the
SVG's own labels; Q2 by 271 to 275 and five rows of the SVG; Q3 by 293 verbatim and twice more at 93
and 132; Q4 by the sort printed at 239 and 295; Q5 by 108, 220 and 243, **and by the checkpoint at
219, which asks the same question in nearly the same words**; Q6 by 251 paraphrased. Three of the six
are additionally answered inside a `:::predict` or `:::checkpoint` hidden body, so the learner is
handed the answer twice before the quiz. Lesson quizzes are open book. 4.3 requires at least half to
be fresh application. Lesson 7's record was five of six.
**The date-recall risk lands too**: Q1 is discriminated by pairing "180" with Irenaeus and "about 325"
with Eusebius, and Q2 by pairing 1534 with Luther and 1546 with Trent. A learner who memorised the
timeline and read nothing else answers both, and neither item requires explaining how anything formed.

**L8-B12. The key is the longest option in five of six items.** Measured: Q1 +15, Q2 +25, Q3 +19,
Q5 +2, Q6 +38; spreads 13 to 45 characters. "Pick the longest" scores 83% against a 70% pass mark.
Lesson 7's fix pass reached spreads of 4 to 11 with the key longest in one item, and the neutrality
reviewer explicitly asked that the levelling not be broken. It was broken one lesson later, and worse
than lesson 7 started.
**The absolutes half is genuinely improved and must be preserved**: the key is the only option
carrying no absolute in **one** of six, against four of six at lesson 7. **Key indices 1, 3, 0, 2, 1,
3, all four used, no adjacent repeat. Keep them exactly.**

**L8-B13. Two distractors invent facts about named historical figures, in a history lesson.** Q5
option A, "Irenaeus condemned its teaching on repentance as heretical"; option D, "Athanasius says it
was known only in Rome and rejected everywhere in the East". The explain field admits the first
("Option A invents a condemnation"). 4.3 wants the mistakes a half-understanding learner would make,
not fabricated attributions a learner may half-remember as true. **Tertullian really did reject the
Shepherd**, in *De Pudicitia* 10, calling it "the shepherd of the adulterers", which is a true fact
and a better distractor. Also: **"catholicity" appears in this lesson only inside a wrong quiz
option**, a technical term the body never uses or defines.

**L8-B14. The learner never applies the three criteria to any book whose answer is not printed.** The
criteria appear once, at line 243, in a single 90-word sentence with each criterion's answer attached
in the same clause. Then the checkpoint at 219 asks which criterion excluded the Shepherd (already
answered at 108 and 243), and Q5 asks it a third time. **One book, three times, answer pre-printed.**
No borderline book is worked: Hebrews is named five times and the lesson never says why it was
disputed, 1 Clement never appears, the Didache appears only inside two lists. 1.1.3.

**L8-B15. Objective 3 is taught at 700 words, never modelled, never practised, tested cold by a
lookup. Eighth lesson running.** "Compare the two scholarly models and say what they agree on." The
lesson *states* both and never shows a reader comparing them on a case, which is what "compare" means
as a performance. No exercise part touches them. Q6's key is line 251 rewritten. `REVIEWS.md` 1978
already recorded for the course that nothing assesses a comparison as a performable skill, and lesson
7's fix for the same defect is 200 lines up in this file and was not reused.
**Objective 1 bundles three separately testable performances** (Jewish canon, New Testament canon,
Nicaea) and the first is untaught as a skill, unpractised and untested: no quiz item touches Sirach,
Josephus, *Bava Batra*, Luke 24:44 or the Tanakh's three parts. **Objective 2 bundles two**, and its
second half, the Turing-test performance, is tested nowhere.
**Taught against no objective at all, six items**: the mechanism at 70 to 72 (which sets a falsifiable
prediction and never cashes it out), the three tests, Marcion as negative evidence, the Muratorian
dating dispute, the Apocrypha-versus-deuterocanonical word rule (framed explicitly as a skill), and
the 2 Maccabees 12 purgatory point.

**L8-B16. Half the lesson has no learner-facing block, and objectives 2 and 3 live entirely inside
that half.** The last block closes at 221; the exercise opens at 319. Between them, **2,975 words,
49% of the teaching prose**, carrying worked example 1, the three tests, both scholarly models, the
standpoint paragraph, both videos, the whole Catholic and Orthodox section, worked example 2, and all
six misconceptions. Five of the six blocks sit in the first 22% of the body. L7-B16 was 2,968 words
and 35%; this is worse.

**L8-B17. The exercise has no model answers, two of its three parts are answered by the body, and
part 1 names evidence that is not where it says it is.** Eighth lesson with no model answers; the fix
has been written into this course seven times.
**(a)** Part 2 asks for a Catholic paragraph and a Protestant paragraph; the body prints both in full
at 285 and 287. **(b)** Part 1's table is printed twice already, at 122 and 128 to 130 and again in
sources 9 and 10. **(c)** Two of its ten books cannot be resolved from the assigned text: the lesson's
own Eusebius paragraph never says what he does with **Hebrews**, and the **Wisdom of Solomon** is in
the Muratorian Fragment, not in Eusebius. **(d)** The three labels offered cannot express the answer,
because the lesson's own line 122 puts the Shepherd and the Apocalypse of Peter in a **fourth**
category. This is L7-B12 repeating in all four of its parts.

**L8-B18. Eusebius has four categories, not three, and the misconception section leans on the one the
lesson dropped.** Lines 118 and 122 give recognised, disputed, rejected. The fourth is the heretical
forgeries, **and that is where the Gospels of Peter, Thomas and Matthias sit**. Line 303 then argues
against "the lost gospels were suppressed" with "Eusebius names the rejected books in the open" and
cites [9], but the books the lesson listed as rejected are the Shepherd, Barnabas and the Didache,
not the lost gospels. The argument needs the category the lesson omitted. Calling the *nothoi*
"rejected" also flattens Eusebius's own "recognized by many".

**L8-B19. Three deuterocanonical quotations from the NRSVue, a copyrighted translation 4.7 does not
permit, carrying the substance of two sections.** Lines 78 (Sirach prologue), 283 (2 Maccabees 7:9)
and 297 (2 Maccabees 12:44, **with no version tag at all**). 4.7 permits four departures from the NET
and this is none of them. Brenton 1851 is the specified public-domain Septuagint and covers all three;
`SOURCES.md` source 1 already records that the KJV Apocrypha was to hand on Wikisource. **Brenton was
fetched at this pass and all three verify**, and the switch strengthens the Sirach paragraph because
Brenton also carries "in the eight and thirtieth year coming into Egypt, when Euergetes was king",
which is the lesson's own basis for 132 BC. **Note the wording changes: Brenton reads "superfluous and
vain", not the NRSVue's "superfluous and foolish".**

**L8-B20. All 43 SVG labels render below the 14px floor, and the validator sees 15 of them.** Line
144, `<g font-size="13" fill="var(--text)">`, covers **28 `<text>` elements that carry no size of
their own**; the other 15 carry 12 or 11. At viewBox width 420 and a 328px content column the scale
is 0.781, so the three sizes render at **10.15, 9.37 and 8.59px**. Nothing in the chart reaches the
floor and nothing can at that viewBox width.
**On the reviewers' disagreement, for the record:** two called this a fifth evasion route and one
called it the second route recurring. Both are right about the facts and the honest description is
that it is **one mechanism, attribute inheritance from a `<g>` wrapper, defeating a second check**:
lessons 4 and 5 used it for `fill`, lesson 8 uses it for `font-size`. That matters because shared-file
request 11, filed at lesson 7, asked only for `style` attributes to be parsed; it needs widening.
Also missing against the working pattern: **no `xmlns`**, and the timeline spine and its dashed break
use `stroke="var(--line)"` with no literal fallback, which is **1.39:1 in light mode and 1.44:1 in
dark** against a 3:1 floor. The axis of the chart is effectively invisible in both themes.

**L8-B21. `minutes: 50` against a measured 105 to 150 without the videos and about 230 with them.**
Four reviewers measured independently and converged: 105 to 118, 120 to 150, 131 to 150, and "41
minutes of prose before any of it". The lesson assigns Athanasius's Festal Letter 39 plus Eusebius
3.25 (about 1,700 words of NPNF English) and a twenty-cell table, 2 Maccabees 7 (42 verses) plus
Hebrews 11:32 to 38 and two paragraphs each of which must pass a sneer test, a timeline from memory,
and **two videos the lesson instructs the learner to watch**, one of them a full Yale lecture. Eighth
lesson running.

### Facts wrong

**L8-F1. Source note 25 claims a fetch that cannot have happened. FOURTH lesson running.** Line 365,
"read via the bible.org API". Both `labs.bible.org` and `netbible.org` are 403 at this proxy,
confirmed by curl at this pass. `SOURCES.md` records the identical line at L5-B3, L6-F2 and L7-F1, and
the lesson 7 entry says in bold that draft-time source notes must say where a text actually came from.
Compounding: **the lesson 8 draft block in `SOURCES.md` records no scripture fetch at all.**

**L8-F2. Eusebius's *History* was substantially written before Nicaea, and the lesson's Nicaea
argument leans on the later date.** Line 229: "Around 325, Eusebius, who sat at Nicaea, writes his own
history... A man who had just watched an emperor settle the canon would not list the open questions."
Burgess's three-edition analysis, now the stable consensus, finds editions of about 313, 316 and 324,
with Book 3 most likely in the first. **The argument survives and is arguably strengthened by the
correction**: Eusebius revised as late as 324 or 325 and left 3.25 standing, having had every chance
to add "as the great council decreed". Web search only.

**L8-F3. Marcion was himself the shipowner, and his father was a bishop.** Line 100, "a shipowner's
son named Marcion". Rhodon and Tertullian call **Marcion** *nauclerus*; the tradition makes him the
son of the bishop of Sinope, who expelled him. Both halves are inverted, and the dropped detail is
worth more than the one kept, because it makes Marcion an insider dispute rather than an outside
attack.

**L8-F4. Ware is downgraded, and a pipeline instruction is left in a learner-facing Sources block.**
Ware's sentence is "**most** Orthodox scholars at the present day, following the opinion of Athanasius
and Jerome, consider that the Deutero-Canonical Books, although part of the Bible, stand on a lower
footing". The lesson writes "many" and adds "though not all agree", which no source supports and which
weakens the authority it is citing. `SOURCES.md` 223 records Ware as **not re-read at draft time,
"from the drafter's recollection"**, so an unopened book is the authority for **the only substantive
Orthodox theological claim in the lesson**. Note 21 ends "the fact-check should confirm the page",
which is a to-do shipped to learners.

**L8-F5. Neither Muratorian date the lesson gives matches its own source.** Line 112 and the SVG both
give "about 180 to 200". Metzger's headnote to the translation the lesson cites at note 7 says "the
list itself is dated to about 170", and the standard range runs **c. 170 to 200**. The lesson silently
drops the early end, in the section headed "The New Testament core by about 180" where the Fragment is
the third witness for that date.

**L8-F6. The Muratorian dating dispute is resolved by editorial preference, in the course-favourable
direction.** Line 112 gives Sundberg and Hahneman one clause each with no argument stated, then two
assessors who both land on the date that favours the course, then "I'd teach it as 'probably about 180
to 200, disputed'". 3.1(2) forbids resolving a contested empirical question by editorial preference.
**Rothschild's 2022 critical edition is in the sources and never in the body**, and it is on the side
the lesson argues against.

**L8-F7. The chart dates a c. 391 quotation to c. 405.** SVG lines 190 to 193 attach Jerome's "not to
give authority" to the Vulgate at c. 405; the phrase is from the preface to the books of Solomon,
which the body dates to c. 391.

**L8-F8. The chart gives Orthodoxy a Trent-shaped decree that the prose then takes away.** SVG lines
210 to 213 and the `<desc>` state as flat fact that the Synod of Jerusalem declared the books "genuine
parts of Scripture". Line 277 immediately qualifies it as a regional synod binding where received,
with no Orthodox equivalent of Trent. In a lesson about giving each tradition its own terms, the
graphic misrepresents the only non-Western tradition it depicts.

**L8-F9. The timeline is not a timeline, and its one proportional device asserts that it is.** Every
event is spaced 50 units apart regardless of interval: 132 BC to AD 95 is 227 years, 1534 to 1546 is
12, and both get 50. Then a dashed axis break labelled "about 1,100 years" is drawn, and **an axis
break is a claim that the rest of the axis is to scale**. Line 217 then tells the reader to read a
five-century spread off it.

**L8-F10. The body identifies chart marks by colour alone.** Line 217, "The gold dot is... The red dot
is Nicaea". 4.6. And `--oxblood` renders pink (`#d9737f`) in dark mode, so "the red dot" is wrong for
half of all readers, while the ordinary marks are navy circles with **gold strokes**, so "the gold
dot" is not unambiguous in light mode either.

**L8-F11. The transmarina clause is single-manuscript and the body makes it load-bearing without
saying so.** Line 134. Source note 11 discloses it; the body does not, and the section's conclusion
rests on it.

**L8-F12. Luther's New Testament is missing entirely.** The lesson's business is who moved which
books, and it runs an explicit Catholic Turing test, and never mentions that Luther moved **Hebrews,
James, Jude and Revelation** to the end of his New Testament and left them out of the numbering. It
gets nothing wrong; it omits the thing a Catholic reader raises first. The facts: September Testament
1522, all four kept, moved, unnumbered; the general preface said they "have from ancient times had a
different reputation"; the "epistle of straw" phrase was in **that general preface, not the preface to
James**, and was **dropped from every edition after 1537**. The point cuts both ways, which is why it
belongs in: he did not remove them, no Lutheran Bible since has, and he was applying Eusebius's own
category of disputed books.

**L8-F13. McDonald's publisher is wrong in three places** (lines 249, 335, 354, and `SOURCES.md` 19):
the 2007 third edition of *The Biblical Canon* is **Hendrickson**, not Baker.

**L8-F14. Jerome did not translate four of the books the lesson credits to his Vulgate.** Line 271,
"His Vulgate, finished around 405, kept the books anyway." He translated Tobit and Judith hastily and
did **not** translate Wisdom, Sirach, Baruch or 1 and 2 Maccabees at all; those travelled with his
text in their Old Latin form.

**L8-F15. Smaller ones.** Eusebius names Revelation in **both** the accepted and the rejected lists
(3.25.9), and quoting both is stronger evidence for the indecision the lesson argues than quoting one.
Line 108 calls the Wisdom of Solomon "an Old Testament book" where line 267 lists it among the
Apocrypha. Line 134's "matching the later Catholic canon" should be "close to", since the African
list's "two books of Esdras" is read by some as including 1 Esdras, which Trent excluded. Line 78's
"Around 132 BC ... wrote a preface" gives an arrival date as a writing date, against outline
convention 3. The Da Vinci Code line is quoted verbatim from a book `SOURCES.md` records as confirmed
only through secondary summaries, and the novel has lowercase "emperor".

### Voice and media

Zero em dashes, zero banned vocabulary, mean sentence length 19.4 and median 17, both inside the
style guide's band. Against that:
**Contraction density is the stiffest in the course.** Body **1 in 104** (1 in 85 excluding Sources)
against a house band of 1 in 42 to 52. **Quiz frontmatter: 0 real contractions in 1,541 words**, every
apostrophe a possessive. Sixth consecutive lesson where the quiz block is stiffer than the body.
**Nine en dashes**, invisible to the validator, and the file **contradicts itself**: line 365 already
writes "2 Peter 3:15 to 16" and "Jude 14 to 15" correctly while lines 60, 289 and 364 write the same
references with en dashes. One en dash is inside an SVG label.
**Four pipeline headings** ("Worked example 1", "Worked example 2", "Practice", `:::exercise Do it
now`), sixth and seventh recurrence, all four in forms lessons 5, 6 and 7 already settled replacements
for. **"The mechanism" three times** in body text, removed from lesson 7 one lesson ago. **Three
"Here's" openers** and **five "Now the" openers**, eight of 62 paragraph openings.
**Seventeen of 62 paragraphs (27%) end on a compressed one-line moral**, against lesson 7's 23% and
lesson 6's four. The densest run is five consecutive paragraphs in the misconceptions section, which
turns a list into a drumbeat. Four earn their place and should survive, "Suppressed texts don't get
catalogued by the suppressors" foremost. Add four structural signpost enders on top of that.
**Eight unsourced superlatives**, worst being line 267's "The early church's Bible was overwhelmingly
the Greek one", which is a substantive historical claim carrying a superlative **with no footnote at
all**, in the paragraph that sets up the entire Catholic case.
**Two in-body links** in a 6,100-word lesson, both inside the exercise, **none in the teaching body**,
against fourteen open-this instructions and ten named-and-unlinked scholars. Every URL the fix needs
is already in `SOURCES.md` or named in prose in the Sources block. Line 321 names BibleGateway in
words and does not link it. Lesson 7 shipped 54.
**The figure's alt text asserts what the body denies**: it says the Fragment lists "the books of the
New Testament", and line 110 says what it omits is as telling as what it includes, and line 108 says
it lists an Old Testament book. **Two `:::video` blocks stacked with no prose between them**, one
printing an unverified running time (fourth lesson to do so; oEmbed returns no duration) and the other
printing none, and **the second video is never referred to in the running text**.
**Eight paragraphs over 120 words**, worst being 277 at 180 words, which is the entire Orthodox
section in one block and the only place Orthodoxy gets its own voice.

### Misconceptions: complete for the second lesson running, and this time the bias did not show

All five outline items shipped, and the drafter **added a sixth of his own that cuts at the course's
own evidence**: "The Muratorian Fragment proves the canon was closed by 200", closing "Don't overstate
your best evidence; the other side will notice." The two a Protestant reader least enjoys, "Rome added
books at Trent" and "The Protestant canon is the original one", are both present, and the second gives
both sides' claim in their own words and refuses to adjudicate. **This is the first lesson in the
course where the drafter's recorded bias did not show in this section.**
Missing are four the lesson argues against and the quiz tests but the list never names: **"Luther cut
seven books out"** (Q2's entire stem), **"the criteria were arbitrary"** (Q5's entire stem), **"a New
Testament allusion proves a book is Scripture"** (worked example 2 exists to refute it), and
**"Protestants never had the Apocrypha"** (refuted twice, and the one a Protestant reader is likeliest
to hold).

### Split seam

**Before `## Why Catholic and Orthodox Bibles have more books` (line 263).** Objectives 1, 3 and 4
belong to half A and objective 2 entirely to half B; the mechanism at 70 to 72 is half A's spine and
half B never uses it; half A's argument is complete at 261 and half B opens cold and restarts the
chronology at 391; the quiz already sorts almost cleanly (Q1, Q4, Q5, Q6 to A; Q2, Q3 to B). **The
timeline has a literal 1,100-year dashed gap drawn through its middle, so the seam is already on the
page as a picture.** Half A about 4,300 words, half B about 3,100. Half B needs its own opening
passage, and Hebrews 11:35 with 2 Maccabees 7 would be a stronger opening than it is a mid-lesson
example. Per BACKLOG 7b: mark, do not renumber.

### What is working, and must survive the revision

- **The cleanest scripture handling in the course.** Four NET quotations, four verified verbatim
  against both mirrors, four tagged, zero untagged, zero ESV survivals, and no scripture in the quiz,
  so L7-F9 does not recur. **Do not let a fix pass touch these four.**
- **Jamnia and Laodicea are both absent.** The lesson tells the Jewish-canon story from the Sirach
  prologue, Josephus, Luke 24:44 and *Bava Batra*, and never reaches for the discredited council.
- **Worked example 1 (Nicaea) is the best piece of historical argument in the course**: four dated
  witnesses in order, each with its inference stated, then the move at 237 from "this is false" to
  "this is the wrong *kind* of story". Keep the structure intact.
- **The Trent vote tally is correctly omitted with a disclosure** (source 18). First time in this
  course a disputed secondary figure has been dropped at draft time rather than at Stage 4.
- **Free recall is present** (exercise part 3): closed-page, quantity-specified, self-checkable.
  Lesson 7 shipped with none. Keep it verbatim and keep it last.
- **The three-way sort is performed twice in full**, at 239 and 295, with all three labels including
  **"we hold by faith"**, which lesson 7 lacked entirely. And 295's admission that the collapse of the
  Alexandrian-canon argument leaves the Catholic side its **stronger** argument is genuinely
  even-handed writing.
- **Line 253's faith declaration**, "we believe the church received these books because they were
  God's word, not that they became God's word by being received. That's a faith commitment stated as
  one", immediately followed by granting that a critical scholar can accept every date on the
  timeline. Only "and once" goes, because the view is asserted eleven times before it.
- **The callout at 313 to 315** on Apocrypha and deuterocanonical, entire. It is the only place in the
  course that states the ideological Turing test as a rule of writing.
- **Exercise part 2's closing line**: "If you can't write the paragraph for the side you don't belong
  to without a sneer in it, you haven't understood that side yet." Keep verbatim.
- **The predicts at 80 and 118** are the best-shaped blocks in the lesson: neither stem states any
  part of its own answer, and 118's "If you guessed any of the Gospels, notice that" converts a wrong
  guess into teaching.
- **The Hippo detail at 134**, that the council asked Rome to confirm its own list, with the inference
  drawn. Evidence and inference in two sentences. It needs the manuscript hedge, not removal.
- **Line 132's honesty**, that the first document with our exact New Testament does not have our exact
  Old Testament, planted and paid off 160 lines later at 293, and the payoff cuts against the course.
- **The Muratorian dating dispute is given with four scholars named and the course's own best evidence
  argued against**, and misconception 6 says so out loud.
- **Athanasius is refused as a referee** (293): "He's a witness that the question was still being
  settled, not a referee who settled it."
- **The Ethiopian Orthodox turn at 291**, using 1 Enoch to show that "what the church has always read"
  has a different answer in different places. It cuts against the lesson's own side.
- **No hardcoded hex fills or strokes outside `var()` fallbacks**, and `font-family:inherit` on the
  root. **Do not strip the literal fallbacks**; they match lesson 6's sanctioned pattern.
- **No poetry anywhere**, so the trailing-space workaround does not apply and must not be added.
- **Bruce's chapter numbers are correct.** Two reviewers doubted them and one checked: ch. 12 is "The
  Muratorian Fragment" and ch. 17 is "Athanasius and After". Leave them.
- **Sinaiticus and Vaticanus are absent, correctly**, since `OUTLINE.md` assigns them to lesson 9.

### Unverified in this environment

Every scripture, patristic and reference host is 403 at the proxy, so the patristic texts were routed
through third-party GitHub mirrors: reliable for catching a wrong wording, which is what they did, but
a claim turning on a single word should be reconfirmed when egress allows. Not verified at all: the
Muratorian figure's file path and licence; both video links and both running times; Luther's 1534
heading in either language; Schnabel's JETS article and Verheyden's essay; **Bruce, Kruger, McDonald
and Ware as books, none of which was opened for this lesson or for the course**; the Da Vinci Code
quotation; the 1826 Bible Society decision; the Hippo and Carthage canon text and the transmarina
clause; Ware's page number; Eusebius's edition history; and the Marcion scholarship.

### Requests for the shared files (items 1 to 11 stand; these are new)

12. **DONE, 2026-09-06.** `scripts/build.mjs` now asserts that every quiz option is a string, and the
    published lesson has been fixed and the site data rebuilt. The check lives in `checkQuizTypes`,
    called from the lint pass for every lesson (drafts warn, published courses fail the build) and
    from the assessments path, which the lint pass does not walk. Verified by reintroducing the defect
    in a draft and in a published lesson and confirming one message each and the right exit code.
    Original request follows.
    **`scripts/build.mjs` must assert that every quiz option is a string.** Its guard currently tests
    only that `options` is an array of length 2 or more, so an unquoted option containing a colon
    parses as a mapping and reaches the learner as `[object Object]`. One line: `typeof o === "string"`
    for each option, plus the same check on `q` and `explain`.
    **This is not hypothetical and it is not confined to this course.** A sweep of all 50 lessons with
    quizzes found a second instance in a **published** course:
    `courses/learning-and-mind/how-to-learn-anything/lessons/03-retrieval-practice.md`, Q3 option C,
    which is rendering `[object Object]` to learners now. That file is outside this course's
    ownership and has not been touched; it needs a one-line quoting fix by whoever owns it.
13. **Widen request 11.** It asked for `style` attributes on `<svg>` and `<g>` to be parsed. Lesson 8
    shows the same mechanism defeating the **size** check through a plain `font-size` **attribute** on
    a `<g>`, so 28 of 43 undersized labels were invisible. Five instances across six lessons, now
    defeating two different checks by four different syntaxes, is the case for replacing the regex
    checks with a render-time measurement rather than patching them a fifth time.

### Resolutions applied, 2026-09-06

Rewritten in full. `minutes` 50 to **130**, objectives four to **six**, in-body links 2 to **22**,
four of six quiz items replaced and the other two levelled, and the quiz block's contraction density
brought from 1 in 116 to **1 in 53 against a body at 1 in 51**, which is the first time in this course
the quiz has not read stiffer than the lesson around it. `npm run validate` exits 0 with no warning on
this lesson. Zero em dashes and zero en dashes.

**L8-B1, the unrenderable quiz item.** Fixed by replacement, and the finding turned out to be bigger
than the lesson. The item is gone; every option in the new quiz is a plain string, checked by parsing
the frontmatter and asserting the type rather than by eye. **The repo-wide sweep found one other
instance in a published course**, which was left untouched (it is outside this course's ownership) and
filed as shared-file request 12 and as a standalone task for whoever owns that course.

**L8-B2, "membership was assumed".** Gone, and replaced with what `SOURCES.md` 41 actually asked for:
*m. Yadayim* 3:5 on whether Ecclesiastes and the Song of Songs "defile the hands", and Barton, Lim and
McDonald named as holding the Writings were still open. The section now says out loud that **a closed
first-century Hebrew canon is the premise the Protestant case later in the lesson rests on**, so the
reader meets the weakness of the course's own strongest argument before the argument arrives rather
than never.

**L8-B3 and L8-B4, the missing traditions.** The two-model section is now three, with the **ecclesial
account** given in its own terms and the question it answers put before Kruger's answer to it,
including the sharp form ("a fallible collection of infallible books"). The Orthodox case now has its
own paragraph beginning "An Orthodox reader makes the case in their own terms", with the liturgical
argument, the Quinisext ratification, the reason there is no Orthodox Trent, and the observation that
both Western sides are arguing inside a frame Orthodoxy does not use. *Anagignoskomena* is introduced
as **the Orthodox term** rather than as "the Greek term for the extra books", and the callout now
carries all three words.

**L8-B5, Florence.** Added, with Innocent I's 405 list alongside it, and the timeline's dashed
thousand-year gap is now bridged by a Florence entry and a Quinisext entry. Trent's paragraph no
longer opens "The Catholic Church answered Luther", which was the Protestant framing in the author's
voice, and the misconception at 305 now names Florence as the evidence.

**L8-B6, the Peshitta.** The heading is now "The edges settle **in the West and in Alexandria**", and a
flagged paragraph gives the twenty-two-book Syriac New Testament, the Philoxenian and Harklean
supplements, and the Church of the East's never receiving Revelation, closing "they settled where this
course's ancestors were standing".

**L8-B7, the opening.** The 2 Peter caveat is now the second paragraph of the lesson: 2 Peter is one
of the disputed books, its date is argued, and if it is late the passage shows a second-century church
doing this, **which is what one of the models in the lesson predicts**. It cost the argument almost
nothing and it is now the most honest paragraph on the page.

**L8-B8 and the Marcion facts.** He is now the shipowner and the bishop's son, the church at Rome
excommunicated him rather than "threw him out", and what his edit proves is given as an argument with
Harnack, von Campenhausen and Harnack's own concession, rather than as a settled inference.

**L8-B9, Bruce.** Note 5 now says in bold that the research file records only his thesis, two chapter
titles and the three tests, and marks the other four claims "as standardly reported" rather than as
his. The body discloses that he is an evangelical Protestant and that the recognition thesis is his,
before his tests are used. The Alexandrian-canon paragraph now gives **both halves of Sundberg's
conclusion**, and says plainly that taken whole it costs the Catholic side an argument and the
Protestant side its premise.

**L8-B10, the self-check.** "Now do the next step before I do" and "Here's mine" are gone; the Jude
step is a `:::checkpoint` whose stem does not state its own answer. Eighth lesson, eighth time.

**L8-B11 to L8-B13, the quiz.** Q3, Q4, Q5 and Q6 replaced with cases the body does not work: the
Orthodox and Catholic answers about Psalm 151 and 3 Maccabees, a hypothetical second-century papyrus
read through two models, the Apocalypse of Peter run through the three tests, and the "Trent added
nothing" sentence sorted three ways. Q1 and Q2 kept as the two the lesson exists to arm the reader
for, with their distractors rebuilt: **Q2's stem is now the strong Catholic claim** (Florence, before
Luther, your list is the innovation) rather than the strawman "Luther cut them out", and its key
concedes the history and locates the real disagreement. **Both invented attributions are gone.**
Keys stay **1, 3, 0, 2, 1, 3**; option spreads are now **5 to 16 characters** against 13 to 45; the
key is longest in **none** of the six against five of six; and no item has the key as its only
unhedged option.

**L8-B14, the criteria.** Each test now has its own paragraph with the mechanism, and a `:::checkpoint`
runs all three on **1 Clement and Hebrews**, neither of which the lesson settles. The model answer's
point is the one the lesson had been missing: the criteria are not a checklist where three passes
admit, they are three considerations weighed against each other, and Hebrews is the case where two
outvoted one over two centuries.

**L8-B15 and L8-B16, objectives and the dead half.** Six objectives, with the old objective 1 split in
two and the criteria and the sorting each given their own. Four new blocks sit in what was the empty
half: the three-models predict is now inside the section, the Thomas predict replaces the flat
misconception, the Jude checkpoint, and the exercise's own model-answer checkpoint. The longest run
without a learner-facing block is now under 900 words.

**L8-B17, the exercise.** Four tasks, three model answers behind a checkpoint. Task 1's label set is
now **four labels, because three would not cover it**, and the two books that could not be resolved
from the assigned texts (Hebrews and the Wisdom of Solomon) are cut. Task 2 says "without looking back
at this lesson" and then asks the learner to compare and mark where theirs is weaker, which turns
transcription into the Turing test performed. Task 3 is the interleaved sort, six claims unlabelled,
**two of which carry claims of more than one kind**. Task 4 is free recall, extended from the timeline
alone to the tests and the three models.

**L8-B18, Eusebius's fourth category.** Restored, with the Gospels of Peter, Thomas and Matthias named
in it, and Revelation now noted as appearing in **both** the recognised and rejected lists. The "lost
gospels were suppressed" misconception now works, because it points at the category that actually
holds those texts.

**L8-B19, the NRSVue.** All three quotations replaced with **Brenton**, fetched and verified at this
pass. The Sirach paragraph gained from it, because Brenton also carries the Euergetes line that is the
basis for the 132 BC date, and the date is now given as **his arrival** rather than the writing.
2 Maccabees 12:44 changes wording: "superfluous and **vain**", not "foolish".

**L8-B20, the chart.** Redrawn at viewBox `0 0 344 1060`. **No `<g>` wrapper**, so every size is an
attribute the validator can see: 35 labels at 15 and 17 at 16, rendering at 14.3 and 15.3px on a
328px column. `xmlns` added, the spine and ticks moved to `var(--line-strong)` with a literal fallback,
Nicaea marked with a **square** and Athanasius with a **ring** so the running text no longer identifies
them by colour, Jerome redated to c. 391 to 405, the Synod of Jerusalem relabelled "a regional synod,
binds where received", the Muratorian entry carrying both dates, and Florence, Quinisext and 1826
added. The dashed axis break is gone and the caption says the spacing is not proportional, which
removes the one place the graphic claimed a scale it did not keep.

**L8-B21, minutes.** 50 to **130**, with both videos explicitly placed outside the lesson clock in
their captions, which also removes the unverified "about fifty minutes".

**Facts.** L8-F1: note 25 now says what actually happened, and the false bible.org line is gone for
the fourth time in this course. L8-F2: Eusebius's editions are given, and the Nicaea argument now
turns on the stronger point that he **revised after the council and left 3.25 standing**. L8-F3:
Marcion corrected. L8-F4: Ware quoted as he wrote it, "most" restored, and the to-do deleted from the
Sources block. L8-F5: the Muratorian range is now 170 to 200, per Metzger's own headnote. L8-F6: the
Sundberg and Hahneman case is stated at strength, Rothschild is in the body, "I'd teach it as" is gone,
and the section ends by saying what would settle it. L8-F7 and L8-F8: chart dates and the Jerusalem
label corrected. L8-F9 and L8-F10: scale claim removed, colour-only identification removed. L8-F11:
the single-manuscript hedge is in the body. L8-F12: Luther's New Testament is now a paragraph, with the
1537 detail and the point that it cuts both ways. L8-F13: Hendrickson. L8-F14: Jerome's actual
translation work stated. L8-F15: the small ones all applied.

**Two rendering bugs found during the fix pass, neither of which any reviewer could see.** Block
bodies are parsed with `breaks: false`, so **single newlines inside a `:::checkpoint` collapse into one
run-on paragraph**; three of lesson 8's model answers were 160 to 290-word walls for that reason.
Checking the rest of the course found the same defect in **lesson 4 (one block) and lesson 7 (two)**,
all now fixed. And a checkpoint body opening `367. It's a letter from Athanasius` renders as
`<ol start="367">` with the sentence as a list item; that opening is reworded. Both are recorded in
`SOURCES.md`, with the note that `:::figure` and `:::video` are the opposite case, since they use
`parseInline` and must stay one paragraph.

**Misconceptions.** All six kept, including the one the drafter added against the course's own
evidence, and **four added**: "Luther cut seven books out", "Protestants never had the Apocrypha",
"the criteria were arbitrary", and "a New Testament allusion proves a book is Scripture". A fifth
covers the models, since the reader arrives holding one and assuming it is the plain reading.

### Deliberately not fixed, with reasons

- **The lesson was not split**, only seamed at the point both the depth and neutrality reviewers
  identified, per BACKLOG 7b. `minutes: 130` therefore describes the whole lesson.
- **The Ware claim stays second-hand**, quoted accurately and disclosed as unopened. Opening the book
  is not possible in this environment, and the Orthodox case no longer depends on it, since the new
  Orthodox paragraph rests on liturgical practice and conciliar reception instead.
- **Sinaiticus and Vaticanus are still absent**, correctly: the outline assigns them to lesson 9, and
  the fact-checker confirmed their absence here is not an omission.
- **The two videos were kept**, both outside the clock. Cutting one would have removed the critical
  side's own advocate, which outline convention 8 requires.
- **Florence, the Peshitta, Luther's 1522 numbering, Eusebius's edition history and the Marcion
  scholarship all rest on standard reference accounts**, not on fetched primary texts, because every
  relevant host is blocked here. Each is marked as such in its source note rather than passed silently.
