# Reviews: The Bible, What It Is and How to Read It — 03-genre-first-and-narrative

Append-only. Newest at the bottom.

## Lesson 3, "Genre first" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context: depth (Part 1), fact-check, neutrality (Part 3 and 3.7), voice
(style guide, 4.5 and 4.6), pedagogy (Part 4). **Verdict: not clean for publish, and the strongest
draft in the course so far.** Both worked examples are genuinely worked, the Gideon example is the
best sustained teaching in either course, every footnote is cited from the body (which lesson 1
could not say), contractions are fixed (81 in 4,450 words of teacher prose, against lesson 2's one
in 5,400), and there are no em dashes.

It fails in three ways that matter. Two are third-time recurrences: **a self-check that prints its
own answer in plain prose** (L1-V3, lesson 2's line 254, now here at 157/159) and **an objective
stated, modelled, never practised, then tested cold** (L1-D4, L2-B4, now objective 1). Two are new
and structural: the lesson **contradicts the textbook it names as its authority** on its own second
worked example, and **four of six SVG labels vanish in the dark theme** in a way `npm run validate`
cannot see. And the recurring standpoint error is here in five places.

### BLOCKING

**L3-B1. The best retrieval moment in the lesson prints its own answer, for the third lesson
running.** Line 157: "Now do the next step yourself. Go back to 1 Samuel 9:2 and 10:23... Write one
sentence on what the chapter is saying about Saul before David ever arrives." Line 159, the next
visible line: "Here's mine. Israel asked for a king to..." On a phone the answer is the next thing
on screen. The lesson uses `:::predict` and `:::checkpoint` correctly four times elsewhere, so this
is an oversight, not a misunderstanding. It sits on objective 2, and the six-lookup derivation is
the most valuable piece of work in the lesson. Caught independently by the depth, voice and pedagogy
reviewers. **Compounded by L3-P2**: the predict at line 151 has already printed the conclusion of
that same task ("the question is not David against Goliath but David against Saul"), so the lookups
were doing no work even before the answer appeared.

**L3-B2. The Gideon section contradicts Fee and Stuart, and the BibleProject video it embeds two
paragraphs earlier, without saying so.** The lesson says of the reading that Gideon was faithless:
"Both are adding a sentence the narrator didn't write." Fee and Stuart, 4th ed. ch. 5, use this
exact passage as their worked example of **misappropriation** and take the opposite view: "the
narrator is pointing out that God saved Israel through Gideon **despite his lack of trust in God's
word**. It is yet another account of God's mercy, not a method of finding God's will!" The
BibleProject *Plot* video says the same. So the second position the lesson dismisses as a reader's
over-correction is the position of the textbook it calls its authority, argued from plot context,
which is principle 9's "implicitly, by clearly implying it". The lesson has to either engage that or
stop calling it an addition.

**L3-B3. Fee and Stuart's list of narrative errors is wrong in the lesson and wrong in
`SOURCES.md`, and the entry it omits is the one that names this lesson's own example.** The 4th
edition lists **nine**: allegorizing, decontextualizing, selectivity, moralizing, personalizing,
**misappropriation**, **false appropriation**, false combination, redefining. "Extracanonical
authority" appears nowhere in the 4th-edition text; it is from an earlier edition and reached
`SOURCES.md` line 150 through the summaries the file itself flags. The lesson uses four of nine in
one parenthesis. **Misappropriation is the fleece.** **False appropriation is "if the Bible records
it, the Bible recommends it".** Both are missing. `SOURCES.md` must be corrected at source or
lesson 6, which also reads narrative, inherits it.

**L3-B4. Objective 1 is never practised, and the basic rule is never once used.** The rule is quoted
at line 84, glossed for three paragraphs ("Read that twice, because it's doing a lot of work"), and
then no worked example, no predict, no checkpoint, no exercise part and no quiz item applies it to a
passage. Q4's stem says "Applying the basic rule and the three levels" and its key exercises only
the levels. A rule stated, admired, and never used is exactly what 1.1's transfer test exists to
catch. This is L1-D4 and L2-B4 a third time.

**L3-B5. Four of six SVG labels disappear in the dark theme, and the validator cannot see it.**
`site/assets/styles.css` flips `--navy` to `#c9d3e2`, `--line-strong` to `#c9d3e2`, `--oxblood` to
`#d9737f` and `--text-2` to `#aab4c3` in dark mode. So `fill="#ffffff"` on the navy rect gives white
on `#c9d3e2`, about **1.3:1**; on the line-strong rect, **1.3:1**; on oxblood, **2.5:1**; and
`var(--text-2)` on a hardcoded `#d9d9d9` rect gives **1.6:1**. `scripts/build.mjs` line 141 only
looks for hardcoded *dark* text fills, so `#ffffff` sails through. Separately, all six labels are
under the font-size 15 floor (four at 14, two at 13) and render at **7.1 to 7.7px** on a 360px
phone; at this 600-unit viewBox even font-size 15 only reaches 8.2px, so the fix is a redraw, not a
font bump.

**L3-B6. Two quiz items fail 4.3, and the key is the longest option in four of six.** Q5 is recall
of the fourth misconception paragraph thirty lines above it, and it is the only item testing
objective 1. Q6 quizzes 2 Samuel 11:27, the body's flagship worked case, with the same verse number
and the same fix, which is L1-P1 and L2-B3 verbatim. Measured option lengths make the key longest in
Q1, Q4, Q5 and Q6 and tied-longest in Q2. Q4 and Q5 stack three tells each: longest, only option
without an absolute, only option that performs the method. Key spread 1, 3, 0, 2, 1, 0 is
acceptable and a real improvement (all four indices used, no run), but index 3 is used once.
Also: **not one of the six items tests a case where the narrator *does* evaluate**, so the quiz
trains "the text is silent, go elsewhere" as a rule instead of the habit of looking.

### Facts wrong

**L3-F1. ESV debris, the exact lesson-2 failure mode.** Line 159 quotes Israel asking for a king to
"go out before us and fight our battles" (paraphrasing 8:20). NET 1 Samuel 8:20 reads "Our king will
judge us and lead us and fight our battles." "Go out before us" is ESV/KJV, and it is inside
quotation marks. The middle-level argument leans on a phrase the course's own Bible does not carry.

**L3-F2. The Judges refrain, again.** The Jephthah checkpoint gives it as "in those days there was
no king and everyone did what was right in his own eyes". NET Judges 17:6 and 21:25 both read "In
those days Israel had no king. Each man did what he considered to be right." `SOURCES.md` line 183
records this exact wording as an ESV survival found and fixed at lesson 2's Stage 4, and lesson 2
now carries the NET form. Lesson 3 reintroduces it.

**L3-F3. The NET forecloses the Jephthah reading the checkpoint opens.** The checkpoint offers the
minority reading that the daughter was dedicated to lifelong service rather than killed. NET Judges
11:39 reads "**She died a virgin. Her tragic death** gave rise to a custom in Israel." A learner who
follows the reference in the course's own Bible finds the reading contradicted on the page with no
explanation. The Hebrew is what the minority reading works from; the NET has translated
interpretively, and saying so is a better teaching moment than the hedge. Same checkpoint: "whatever
first comes out of his door" should be "whoever", which is what NET 11:31 has.

**L3-F4. The chart draws exactly what the prose says it exceeds.** The caption says the narrative
block is "over two-fifths"; the rect is `width="180"` inside `width="450"`, which is exactly 40.0
percent. The SVG title and the in-bar label both say "over 40%". Everything else in the chart is
right: 450/600 is exactly 75 percent, 180/600 is exactly 30 percent, and the second bar is correctly
aligned under the first bar's Old Testament segment.

**L3-F5. "The next five lessons" is off by one.** The construction excludes this lesson, so the next
five are 4 to 8, and lesson 8 is the canon lesson. The genre run is 3 to 7, which the Connections
section states correctly.

**L3-F6. The Schindler alt text describes a posture the picture does not have.** "who bends to look
down at him". Goliath stands fully upright, spear raised in his right hand, with a ranked crowd of
Philistine warriors behind him, which the alt text omits entirely.

**L3-F7. Untagged and unlisted scripture.** Esther 4:14 is quoted verbatim from the NET in quiz Q4's
stem with no `(NET)` tag and no entry in Sources [3]. So is the 1 Samuel 8:20 fragment. Sources [3]
lists "Judges 6:17-27", a range including 6:25-26 which the lesson never uses. Quiz Q6 says David's
act "displeased the LORD" where the body, a hundred lines earlier, quotes the NET's "upset the
Lord".

**L3-F8. Small imprecisions.** Chicago Article XIII is "the topical arrangement of **materials**",
not "material" (`SOURCES.md` line 66 has the same slip). David is sent with roasted grain and loaves
for his brothers and ten cheeses for their commanding officer, not "bread and cheese for his
brothers". Eliab is angry and accuses David of "pride and deceit" (17:28); "mocked" is wrong.
Principle 5 is "Many (if not most)", not "Most". Samson has one marriage, not "marriages". Go Deeper
says Hayes "wants you to see", where `SOURCES.md` line 157 instructs "who taught" because she
retired in 2023, and lesson 1 already complies.

### Neutrality (3.1, 3.2, 3.3, 3.7)

Perspectives checked: Jewish (Tanakh, Nevi'im Rishonim, Rashi, the Judges 13 haftarah, JPS and
Alter's translations); Catholic (*Catechism* 115 to 119 on the four senses, *Dei Verbum* 12);
Orthodox (patristic and typological exegesis as normal practice, Scripture read in the Church);
critical scholar (Alter, Hayes, Collins, Ehrman, Enns, Noth's Deuteronomistic History, the LXX/MT
problem in 1 Samuel 17 to 18, Sternberg on the narrator); sceptic (Samson and David as legend,
2 Samuel 21:19); conservative evangelical inerrantist (what has been quietly conceded, and whether
Chicago has been over-read); covenant vs dispensational (not load-bearing here).

**L3-N1. "God is the hero" is a faith claim doing duty as a literary rule.** The standpoint section
says "*We hold by faith* that God is the hero of all these stories **in more than a literary
sense**", which concedes the metaphysical half and keeps the literary half as established. The body
has already asserted the literary half flatly: "The tenth principle isn't a pious gloss we add
afterwards; the narrator built it into the climax." The lesson's own text shows why that will not
hold: it says of Esther that this is "God's providence with his name never mentioned". A book that
never names God is not evidence that God is its hero at the literary level. Recurring must-fix from
lessons 1 and 2, in its purest form.

**L3-N2. "Scholars establish... that Hebrew narrators evaluate rarely and explicitly" is a contested
literary position, and Alter is recruited against his own argument.** Three problems in one
sentence. "The Old Testament is mostly narrative" contradicts the lesson's own 40 percent. "Rarely
and explicitly" is the contested point, and the "explicitly" half is load-bearing for everything
downstream. Sternberg's *Poetics of Biblical Narrative* argues the narrator evaluates constantly
through arrangement, repetition and dialogue; Alter's whole method is that reticence is a
*technique* for conveying judgement, not an absence of it. The lesson then names Alter as the
friendly witness ("much of what this lesson teaches about narrative craft he would recognise") and
does not mention that his category for the David material is "historicized prose fiction".

**L3-N3. The Gideon silence is asserted as total, and everyone who disagrees is described as
inventing text.** "The silence is total"; "Both are adding a sentence the narrator didn't write."
The narrow claim (nothing refers back to *the fleece*) is fair. The wide one is not. Judges 8:27, in
the same Gideon cycle, is an explicit narratorial verdict: he makes an ephod, Israel prostitutes
itself to it, and "It became a snare to Gideon and his family" (NET). Webb (NICOT), Block (NAC),
Klein and Exum all read the narrator as evaluating Gideon negatively by literary means, and several
are conservative evangelicals, so this is a mainstream evangelical commentary tradition dismissed in
the author's voice. Pairs with L3-B2.

**L3-N4. "Nothing in this lesson depends on it" is not true of 1 Samuel 17.** The lesson chose the
single most textually contested chapter in Samuel and built its middle level on one narrator
designing chapters 16 and 17 as a sequence. Omitted: Codex Vaticanus lacks roughly half of MT
1 Samuel 17 to 18 including 17:12-31 and 17:55-58; in the MT Saul asks whose son David is at
17:55-58, one chapter after David has been his armour-bearer at 16:21-23; and 2 Samuel 21:19 in the
Hebrew credits the killing of Goliath to Elhanan. **Note for the fix pass:** NET 2 Samuel 21:19
already reads "killed **the brother of** Goliath", harmonising to 1 Chronicles 20:5, so the prose
must not assert what the course's own Bible contradicts. That is itself the better teaching point.

**L3-N5. Allegorical and moral reading are listed as misreadings, and no Catholic, Orthodox or
patristic reading is named anywhere in the lesson.** "Catholic", "Orthodox", "patristic", "typology"
and "the Fathers" appear nowhere; the words were grepped. The two errors named are the second and
third of the four senses the *Catechism* formally teaches (115 to 119, with Cassian's couplet
quoted approvingly) and that Orthodox exegesis takes from the Fathers as normal practice. Direct
recurrence of L2-N9, resolved in lesson 2 one day earlier with "reading Joseph as a figure of Christ
is old, standard in the church fathers, and normal in Orthodox and Catholic reading today". The
asymmetry is what a Catholic or Orthodox reader will feel: the lesson keeps a figural reading for
itself (the "top level", "the whole plan of God") and calls the Fathers' version a standard
misreading.

**L3-N6. "The Old Testament" with numbers attached, including inside the SVG.** "Over 40 percent of
the Old Testament", "three-quarters of the bulk of the Bible", the bar labels "Old Testament, about
75%" and "New, 25%", and the chart's own `<title>`, which is what a screen reader gets. Both figures
are Protestant-canon figures, and the deuterocanon is disproportionately narrative (Tobit, Judith,
1 and 2 Maccabees, the additions to Esther and Daniel), so both move. Direct recurrence of L1-N5,
whose fix instruction was "including the diagram".

**L3-N7. One recoverable meaning, and "three books, one order", where the three books are three
evangelical books.** Osborne (IVP), Vanhoozer (Zondervan), Duvall and Hays (Zondervan) are one
constituency, and their unanimity is presented as settling a question. Vanhoozer's book exists
because the question is contested; his opponents are Gadamer, Ricoeur, Derrida, Fish and
reception history. A Catholic reader adds *Dei Verbum* 12, which requires the authors' intention
**and** reading within the living Tradition. A critical scholar says that for most Old Testament
narrative "the author" is a composite. The same overreach runs through the lesson's own voice about
the narrator's mind: "The narrator means you to feel", "it's not there by accident", "it was never
the reason the chapter was written", "The chapter would rather you noticed who saves", and the
recovered intention is the theocentric one every time.

**L3-N8. The Deuteronomistic History is dropped on a beginner as a shelf label, and the refrain the
lesson uses to fix Jephthah is the hypothesis's own main exhibit.** Go Deeper says "the lectures on
the Deuteronomistic History (Joshua through Kings)" with no explanation. It is Noth's 1943
hypothesis, refined by Cross and the Göttingen school, and it is the most consequential critical
claim about exactly the books this lesson reads. The "no king in those days" refrain is widely read
as a later pro-monarchic editor's frame; the lesson uses it as one narrator's designed evaluation.
**Lesson 2's fix record explicitly assigned this to lesson 3 and lesson 10, and lesson 3 did not
take it.**

**L3-N9. The Jewish reader is spoken for, not heard, and a quiz key is graded on a taxonomy the
Tanakh does not share.** "Where we differ is in where we think the top level ends" frames the Jewish
reading as the Christian one with a section removed; the objection is to whether the Tanakh has that
three-storey architecture at all. Lesson 2 got this right ("the story of Ruth is complete in the
Tanakh without Jesus in it, and they'll be reading well") and lesson 3 regresses. No Jewish reading
practice is named anywhere: not Rashi or Radak, not midrash on David and Goliath, not that Judges 13
is the haftarah for parashat Naso, not JPS or *The Jewish Study Bible*. Concretely, Q3's explanation
says "1 Kings is narrative about a prophet, not a prophetic oracle", but in the Tanakh Joshua,
Judges, Samuel and Kings **are** the Nevi'im Rishonim, the Former Prophets, which lesson 1 taught.

**L3-N10. The Genesis 1 "range" is evangelical inerrantists only.** The paragraph advertises an open
question and gives four answers from one constituency. Absent: the critical reading, which
`SOURCES.md` already carries from Hayes's lecture 2 (a Priestly text read against *Enuma Elish*),
and the Jewish reading, where Rashi's grammatical argument that 1:1 is a dependent clause gives the
JPS "When God began to create". Same defect as L2-N6, and worse here because the sentence advertises
a range.

**L3-N11. The Chicago Statement is used for more latitude than it grants.** The quotation is
accurate and its use is legitimate. But ICBI's 1982 Chicago Statement on Biblical Hermeneutics,
Article XXII, denies that "generic categories which negate historicity may rightly be imposed on
biblical narratives which present themselves as factual", and the 1978 Article XII denies that
scientific hypotheses about earth history may be used to overturn Scripture on creation and the
flood. Those are why many signatories reject the framework and temple-text readings the lesson lists
as available to someone who holds to Chicago. This is the inerrantist check running the other way,
and it is the one direction a drafter never polices.

**L3-N12. 4.7: no breach in the worked examples, one place where the rule bites.** The auditor's
ruling, and it stands: quoting 1 Samuel, 2 Samuel and Judges from the NET while teaching a Christian
course how to read its own Old Testament is exactly what the NET default is for, every quotation
carries `(NET)`, and Sources [3] carries the Biblical Studies Press notice. Do not change that. The
rule bites in "Where the course stands", where the lesson says "A Jewish reader reads 1 Samuel 17 as
a story in the Tanakh" and rests that on NET renderings the tradition does not use ("the Lord of
Heaven's Armies" for YHWH Tseva'ot). Lesson 2 drew the line in the same place and used JPS 1917 for
the Tanakh-as-Tanakh passage.

**L3-N13 (language, 3.3).** A running mild irony aimed one way only, at lay devotional culture and
never at the scholar: "a different story from the one on the bookmark", "A graduation card quotes
Esther 4:14", "the popular reading has filled it with approval". Quiz Q3 puts a sermon title in a
preacher's mouth that no preacher would write ("mock them until God proves you right"), which fails
3.2's requirement that a corrected position be one an adherent recognises. "The strictest evangelical
view" and "the most conservative statement of the doctrine" are the author's adjectives for someone
else's position.

### Voice (style guide, 4.5, 4.6)

Em dashes: **zero**, confirmed, including en dashes. Banned AI vocabulary: **zero**, all 55 terms
grepped, three false positives. Contractions: **81 in 4,450 words of teacher prose, 1 in 55**, which
is the fixed range and a real repair.

**L3-V1. The title carries the tic the style guide names by example.** "Genre first: the reading
rule **that changes everything**, and how to read narrative." The guide's own illustration of the
one-line-moral tic is "And that changes everything", and this is the string the learner sees on the
course page, in the sidebar and in the browser tab. It is also a promise of outcome.

**L3-V2. Six paragraphs end on a compressed one-line moral,** matching lesson 2's count exactly:
the title; "you'll read every story in the Bible differently" (promissory, same class as lesson 2's
flagged "so that you never again read a verse without knowing where it lives"); "will make this
stick"; "The chapter would rather you noticed who saves" (personifies the chapter, and restates the
line above it with more drama); "Three books, one order"; "you'll spend more time in story than in
anything else".

**L3-V3. Three "Here is" openers,** down from six and five but not gone: "Here's the problem",
"Here they are", "Here's the wrinkle" (which promises a wrinkle instead of stating it), plus the
blocking "Here's mine" at L3-B1.

**L3-V4. Pipeline vocabulary in four learner-facing headings:** "## Worked example 1:", "## Worked
example 2:", "## Practice", and ":::exercise Do it now:". These are 1.2 element names and a style
guide section heading, not things a teacher says. Flagged as L1-V8, again in lesson 2, recurring.

**L3-V5. Banned sentence shapes.** "The question is never literal or not. It's what kind of writing"
is "not X, it's Y" with a full stop. "the genre question comes first, it's real, and it's not
settled" is an empty triad. "No verdict, no comment, no later reference" is a rhythm triad for one
fact. "So what happens to 'face your giants'?" is a second rhetorical-question opener where the
guide allows one; the allowed one is line 62, which earns itself. **Keep** the five "not X but Y"
constructions where the negation *is* the misconception being demolished (L1-V6 precedent), and keep
"a story reports, and reporting is not recommending".

**L3-V6. Zero in-body links,** against four direct commands to open a passage: "Open 1 Samuel 17",
five more references at line 157, "Open Judges 6", and "Read Genesis 25:19-34 and Genesis 27". The
validator flags it. This is L1-V5 and lesson 2's finding a third time, and here it blocks four
chapters of required reading. The Chicago Statement is quoted twice with no address; source [11] and
Go Deeper both say "free, with transcripts" and give none, which is L1-V5 verbatim.

**L3-V7. The exercise prints its own finding.** Part 2 tells the reader to count ticks and dashes,
then immediately says "You'll find the dashes outnumber the ticks by a wide margin, and you may find
the ticks are hard to locate at all." The surprise is the whole point of the count.

**L3-V8. Line 189 pre-empts the predict at 191.** "and the text doesn't tell him off" is stated
before the block that asks the reader to guess whether it does.

**L3-V9. The exercise has four written tasks and no model answers at all,** including part 4,
explicitly labelled "the hard one", which carries objective 4. Lesson 2 was faulted for two.

**L3-V10. The SVG.** Scale is **correct and better than its caption claims**: both bars start at
`x=0`, 450 units means "the Old Testament" in both, so the comparison is geometrically valid and
narrative is 180/600 = 30 percent of the whole, matching the title's "roughly three-tenths". No
L1-V1 defect. What is wrong: the dark-theme contrast (L3-B5); the label sizes (L3-B5); the caption
identifying bars **by colour alone** ("the oxblood section", "the top bar's navy"), which 4.6
forbids; "over two-fifths" against a rect drawn at exactly two-fifths (L3-F4); no `<desc>`, so a
screen-reader user gets a 33-word run-on `<title>` and nothing else, `role="img"` having hidden every
child `<text>`; and a 150-unit viewBox height that renders the bars at 22px and 16px on a phone.
`role="img"` and `aria-labelledby` are correctly formed.

**L3-V11. The two long block quotes do not work at phone width.** Judges 6:36-40 is 162 words, about
23 phone lines of indented secondary-colour prose with no break, and the analysis afterwards refers
back to four separate details inside it. 1 Samuel 17:45-47 is 128 words.

**L3-V12. Eleven read-aloud failures**, worst first: the title; "the most-used introduction to
reading the Bible" (unsourced superlative, the exact lesson-2 flag); "Everything downstream depends
on it"; "Let me say plainly which kind of claim each part of this lesson is"; "it's doing a lot of
work"; "will save you from most of the misreadings in this lesson"; "once you can see it you'll see
it everywhere"; "the top bar's navy"; the 34-word Connections sentence; the 62-word Alter sentence;
"The first example was a story most people read on the wrong level."

**L3-V13. Six manual-sounding zero-contraction paragraphs**, worst being the 162-word Jephthah
checkpoint answer, the longest paragraph in the lesson carrying the hardest content.

### Pedagogy (Part 4)

Two premises in the brief were wrong and are corrected here for future reviews. **The site does
render option letters**: `site/assets/app.js:351` emits `<b class="opt-letter">${"ABCDEF"[oi]}.</b>`
before every option, and line 443 does the same in review mode, so "Option A" in an `explain` is
safe and every letter in this lesson maps correctly. **Options are not shuffled**: the only
`shuffle` in `app.js` is used for the spaced-repetition queue, never for `q.options`, so key
position is a genuine leak.

**L3-P1** is L3-B4 (objective 1 never practised). **L3-P2**: the predict at 151 gives away the
answer to the harder task at 157, so even before L3-B1 the lookups did no work. **L3-P3** is L3-B1.

**L3-P4. Interleaving is blocked.** All four exercise parts run on one case. Lesson 2's fix added a
mixed part across four unrelated passages; lesson 3 has no equivalent.

**L3-P5. Predict 2 is effectively a yes/no and the framing telegraphs "no".** It survives as a
pretest because the silence is the point, but it costs the learner nothing.

**L3-P6. Two misconceptions are missing, and both are more common than the fourth entry given.**
(a) **Personalising**, "the story is about me". The lesson *opens* on it ("name the Goliath in your
life") and then gives the single most common misreading of biblical narrative in the English-speaking
church nine words inside a subordinate clause of another misconception. (b) **"If God blessed them,
he approved of what they did."** Outcome as approval is a stronger and different error from "records
it means recommends it", it is what two quiz items turn on, and it is what the Gideon example is
built to kill. It is taught in the prose and never named. Meanwhile the fourth entry given
("Genesis 1 must be read as one particular genre") is not a belief a beginner holds; it is
misconception 1 aimed at a chapter, and it is what the weak Q5 recalls.

**L3-P7. `minutes: 45` understates by about eighty minutes.** Component measurement: 25 to 27 for
4,925 words of dense expository prose with block quotations; 5.5 + 5.2 for the two videos; 10 for
1 Samuel 17 (the lesson's own estimate); 5 to 6 for the six middle-level lookups plus a written
sentence; 6 to 8 for Judges 6; 8 for the four predict and checkpoint blocks; 15 for Genesis 25 and
27 (the lesson's own estimate); 4 + 10 to 12 + 5 + 4 for the four exercise parts, where part 2 means
marking and counting every sentence of 62 verses; 6 to 8 for free recall of the rule, the levels and
ten principles; 10 to 12 for six stems with four long options and roughly 600 words of explanations.
**Honest total 115 to 130.** Against the course's own calibration, lesson 1 is 5,493 words at 70 and
lesson 2 is 8,747 at 90. Lesson 3 has fewer words than either and **four chapters of external
reading** plus two videos.

### Split candidate (1.3): yes, and both reviewers found a seam

The title says it: one rule, and one genre. **Part A**, genre is the first interpretive decision:
the opening, the recipe, Fee and Stuart's method, the basic rule, the order-of-questions paragraph,
why narrative comes first with the chart, video 1, and the two genre misconceptions. **Part B**, how
to read Old Testament narrative: the three levels, the ten principles, description and prescription,
the narrator's evaluations, both worked examples, both checkpoints, the exercise, and the two
narrative misconceptions.

The depth reviewer put the seam after "You can't ask what a text meant to its first readers until
you know what kind of text they thought they were reading", before `## Why narrative comes first`.
The pedagogy reviewer put it one section later, after the chart paragraph, before `## What a
biblical story is doing`, so that Part A keeps the chart that motivates Part B. **The pedagogy seam
is the better one**: it leaves Part A at about 30 to 35 minutes with objective 1 finally practised,
and Part B at 75 to 85. Both reviewers note the split fixes L3-B4 as a side effect, because Part A
is thin precisely because its objective has a rule stated and never used.

The blocker is the same as lesson 2's: a split renumbers the course and every cross-reference in the
other eleven lessons, and lesson 3 itself carries four forward references. **This is now the second
lesson in a row to hit it, and it should go to John as one question about the course rather than two
about lessons.**

### What is working, and must survive

The Gideon worked example, all of it: choosing a case where the text genuinely does not condemn,
naming the wrinkle out loud, and closing with "That's a question the story doesn't settle, and I
won't pretend it does", which is 2.4 in the teacher's own voice and the best line in the lesson. The
2 Samuel 11:27 paragraph, the cleanest statement of the narrator's-voice mechanism anywhere in the
course. The Chicago Statement paragraph, which makes the faith's own case at full strength instead
of asserting it, and which handles its misconception even-handedly in both directions in one
sentence ("some who think they're being faithful by ignoring genre, and some who think genre-first
reading is a liberal invention"). Quiz Q5's option D, which marks "Genesis 1 is settled among
scholars as a poem" wrong and says the genre is argued, policing the direction a drafter is least
likely to police. Exercise part 2, the tick-and-dash count, the best-designed practice in the course
so far because the learner discovers the ratio instead of being told it. The Jephthah checkpoint's
willingness to name a minority reading and say it is a minority reading. The chart's shared-scale
construction, which is genuinely correct. Quiz Q3 as an item. The opening question, "Who is the hero
of that chapter?", the best opening in the course. Four correctly hidden self-checks. No sneering,
no em dashes, no banned vocabulary, no orphan footnotes, and the figure is referred to in the text
as 4.5 requires.

### Pattern for the pipeline

Four findings here are recurrences of items already resolved elsewhere **in this same course**:
L3-N6 repeats L1-N5, L3-N5 repeats L2-N9, L3-N9 partly repeats L2-N8, and L3-B1 repeats L1-V3 and
lesson 2's line 254. L3-N8 is a handoff lesson 2's fix pass explicitly assigned to lesson 3, and
lesson 3 did not take it. L3-F2 reintroduces an ESV survival that `SOURCES.md` records as found and
fixed one lesson earlier. **The drafter is not reading the resolved findings from previous lessons
before drafting the next one.** That is a Stage 3 process fix worth more than any single item above.
Two more: `scripts/build.mjs` should warn on `fill="#ffffff"` inside `<text>` (white-on-flipped-token
is now the second SVG contrast bug in this course, and the validator sees neither), and `SOURCES.md`
line 150's error list must be corrected before lesson 6 is reviewed.

### Resolutions applied, 2026-09-06

Applied in a single fix pass on `lessons/03-genre-first-and-narrative.md`, with corrections made in
`research/SOURCES.md` and `research/OUTLINE.md` so later lessons do not inherit them.
`npm run validate` exits 0 and **both of this lesson's warnings are gone** (the six undersized SVG
labels and the no-links-in-the-body warning); no new warning appears for this lesson or any other.
Zero em dashes and zero en dashes. Frontmatter parses; six quiz items, each still a mapping with q,
four options, answer and explain. Body grew from about 5,000 words to about 8,900, all of it
required by findings above.

**Blocking.**

- **L3-B1.** The unhidden answer is gone. The middle-level task and its model answer are now a single
  `:::predict` block, so the prompt and the answer arrive one at a time, and the answer sits behind a
  button. **L3-P2 fixed with it**: the earlier predict now asks for the bottom and top levels only
  and says explicitly "We'll come to the middle level in a moment, and you'll work that one out for
  yourself", so the six lookups do real work instead of confirming a conclusion already printed.
- **L3-B2 and L3-N3.** The Gideon section no longer contradicts its own authority in silence. It
  names **misappropriation** as Fee and Stuart's own term for the popular reading, quotes their
  actual position (God saved Israel through Gideon *despite* his lack of trust), says the
  BibleProject video agrees, and says in the teacher's voice that the textbook is harder on Gideon
  than this lesson is. "Both are adding a sentence the narrator didn't write" is gone. The two
  readings are now weighed rather than dismissed: the approval reading "has nothing at all to work
  with", the condemnation reading "has a good deal", with **Judges 8:27 quoted** ("It became a snare
  to Gideon and his family") and Webb and Block named as conservative evangelical commentators who
  read the cycle as critique. The narrow claim survives and is stated as narrow: the fleece itself is
  never approved, condemned or mentioned again, and arguing from chapter 8 back to chapter 6 is an
  inference from the whole story that a reader should own as one. The predict answer now says "no
  reference to the fleece" rather than "the silence is total". The video caption says it "reaches a
  firmer verdict on Gideon than this lesson does".
- **L3-B3.** All **nine** errors are now given, in Fee and Stuart's own order and with one-clause
  glosses, including the two that were missing and that matter most here: misappropriation and false
  appropriation, which between them are "if the Bible records it, the Bible recommends it".
  "Extracanonical authority" is gone from the lesson and **corrected at source in `SOURCES.md`**,
  with a note that it came from an earlier edition through secondary summaries.
- **L3-B4 and L3-P1.** Objective 1 now has practice, and the basic rule is now used three times
  instead of admired once. A new subsection, "Using the rule, twice", works the rule as a boundary
  test on Philippians 4:13 and then hands the learner Jeremiah 29:11 in a `:::checkpoint`. Objective
  1 was rewritten to say "and **use** Fee and Stuart's basic rule as a boundary test on a passage",
  and the replacement Q5 tests it on a fresh case. Both worked instances end by naming what the rule
  did **not** do, which is the misreading the new Q4 explanation warns about.
- **L3-B5.** The chart is redrawn. viewBox narrowed from 600 to 344 so labels render larger, not
  smaller: every label is now font-size 15 to 17 and renders at **14 to 16px on a 360px phone**,
  against 7.1 to 7.7px before. **No text sits inside a bar any more**, so there is no white-on-token
  text left; every label is `var(--text-2, #4a5260)` outside the bars with a colour swatch beside it,
  which also fixes the identify-by-colour-alone problem. Rect fills are `var(--navy)`,
  `var(--navy-soft)` with a `var(--navy)` stroke, and `var(--oxblood)`. Verified by screenshot at
  400px width in **both** light and dark emulation: all four segments and all six labels are legible
  in both. A `<desc>` was added and `aria-labelledby` now names title and desc, so a screen-reader
  user gets the chart's content rather than a 33-word run-on title.
- **L3-B6.** Q5 and Q6 replaced with fresh cases, Q1, Q2, Q3 and Q4 rebuilt or repaired.
  **Q5** is now Joshua 10:12-14, a prose report that stops to quote two lines of poetry and names its
  source, which tests the order of the questions without recycling the Genesis 1 paragraph or
  importing the creation debate. **Q6 is now 2 Samuel 6, Uzzah**, which is the discrimination item the
  quiz did not have: a case where the narrator *does* evaluate, so the quiz stops training "the text
  is silent" as a rule. Every option in every item was levelled for length so the key is no longer
  the longest, and every "always", "only", "never", "must" and "settled" tell was removed from the
  distractors or given to the key's neighbours. Q1's two dead distractors are replaced (one now
  swaps Samson for Deborah, which is the real half-corrected error, and its explanation teaches that
  the warm material about Deborah is a character's song rather than the narrator's verdict). Q2's two
  implausible options are replaced, and its new option B is a genuinely careful wrong answer that the
  explanation credits for the half it gets right. **Keys now spread 1, 3, 0, 2, 3, 1**: all four
  indices used, index 3 twice, no run, no repeat of the previous item.
- **L3-B7 (links).** Thirteen in-body links added: 1 Samuel 17, 1 Samuel 8 to 10, 1 Samuel 16,
  2 Samuel 11, Judges 6, Judges 11, Genesis 25:19-34 and Genesis 27, all at Bible Gateway in the NET
  so every "open this" instruction is reachable; plus the Chicago Statement, *Dei Verbum* 12, the
  *Catechism* on the four senses, Sefaria for the JPS verse, the two Hayes lectures by number, the
  two BibleProject companion videos, and *The Jewish Study Bible*.

**Facts.**

- **L3-F1.** "Go out before us" is gone. The predict answer now quotes the NET, "judge us and lead us
  and fight our battles" (1 Samuel 8:20), and the argument runs on "lead us", which the NET supports.
- **L3-F2.** The Judges refrain is now "each man did what he considered to be right" (Judges 17:6 and
  21:25, NET), matching the NET and matching lesson 2's corrected form.
- **L3-F3.** The Jephthah checkpoint now says outright that the NET renders 11:39 "She died a
  virgin", so the reader's own Bible settles on the page a question the minority reading treats as
  open, and turns that into a teaching point about translation decisions pointing forward to lesson
  11. "Whatever first comes out of his door" is now "whoever", matching NET 11:31.
- **L3-F4.** The bar is drawn at exactly 40 percent and the labels now read "40 percent or more".
  The caption says explicitly that Fee and Stuart give no exact number, so the bar is drawn at the
  floor, and warns the reader not to read a precision off a picture the source did not supply.
  "Over two-fifths" and "the top bar's navy" are gone.
- **L3-F5.** "The next five lessons" is now "the next four lessons".
- **L3-F6.** New alt text: Goliath "towers over him upright with a spear raised in one hand and a
  crowd of Philistine warriors ranked behind". The caption now says "lithograph" rather than "colour
  lithograph", with the discrepancy recorded in source 9.
- **L3-F7.** Esther 4:14 is now listed in source 3 as quoted, along with every other quotation in the
  lesson including the quiz stems; the 1 Samuel 8:20 fragment carries its `(NET)` tag; the Judges
  6:17-27 range is corrected to the verses actually used; Q6 no longer says "displeased the LORD".
- **L3-F8.** Article XIII now reads "materials", corrected in the lesson and in `SOURCES.md`. David
  carries "roasted grain and loaves" for his brothers and "ten cheeses for their commanding officer".
  Eliab is "angry with him and accuses him of pride", not mocking. Principle 5 is "Many, if not most".
  Samson's "marriages" is now singular in the Q1 explanation. Go Deeper says Hayes "taught".

**Neutrality.**

- **L3-N1.** The standpoint section now separates the two halves explicitly: that 1 Samuel 17 puts
  God at the centre is on the page and any reader can see it; that the same holds of *every*
  biblical narrative "is not something the texts can be made to show, and Esther, which never names
  God, is the case that proves it". It names the tenth principle as "a confession about the whole
  book, held by faith, and then applied as a reading rule". In the body, "the narrator built it into
  the climax" is now "the climax of **this chapter**".
- **L3-N2.** Rewritten as a three-way sort. What scholars establish is now only that Hebrew narrative
  is spare. How much the silence is doing is given as argued, with **Sternberg named as the
  counter-position** and Alter's reticence given as a *technique* rather than an absence. Alter's own
  "historicized prose fiction" is disclosed, with the note that it is not this course's view and is a
  reason to argue with him.
- **L3-N4.** A new paragraph gives the text-critical complication at full strength: the shorter Greek
  text of 1 Samuel 17 to 18, Saul's question at 17:55-58 against 16:21-23, and Elhanan at 2 Samuel
  21:19. **The Elhanan point is stated the only honest way**, since NET 21:19 already reads "the
  brother of Goliath": the lesson says so, names it as a translation decision following 1 Chronicles
  20:5, and says the reader should know about it rather than discover it. The section then says what
  holding the conservative view costs: "the confidence with which I said 'the narrator set this up'"
  assumes one designing mind behind chapters 16 and 17. "Nothing in this lesson depends on it" is
  gone.
- **L3-N5.** A full paragraph now follows the errors list: Origen, Gregory of Nyssa and Augustine;
  Cassian's four senses; the *Catechism* at 115 to 118, linked; Orthodox liturgical reading. It says
  the objection is to allegory that replaces the plain sense rather than resting on it, that the
  fathers said the literal sense comes first too, and that the difference from a Catholic or Orthodox
  reader "is a difference inside the church, not a difference between reading well and reading
  badly". Moralising is named as Cassian's third sense "under a less friendly name". The point is
  carried into the exercise: the model answer for the allegorising item repeats the care.
- **L3-N6.** "Protestant Old Testament" wherever a number is attached, in the prose, in the two bar
  labels, and in the SVG's `<desc>`. A new sentence names Tobit, Judith, 1 and 2 Maccabees and the
  additions to Esther and Daniel and says narrative's share goes **up**, not down, in a Catholic or
  Orthodox Bible.
- **L3-N7.** A new paragraph gives the fair version: authorial meaning is "a position rather than a
  fact, and it is argued", with Gadamer, Ricoeur and reader-response named, *Dei Verbum* 12 linked
  for the Catholic qualification, and the critical objection that most Old Testament narrative has no
  single author to recover. It closes "you should know we hold it rather than found it". The four
  mind-reading sentences are softened to reading claims ("The chapter is built so that you feel the
  size of the giant"; "That detail is not there by accident"), and "The chapter would rather you
  noticed who saves" is cut.
- **L3-N8.** A new paragraph teaches the Deuteronomistic History as Noth's hypothesis, says the
  refrain the lesson used on Jephthah is one of its main exhibits, states the conservative reply,
  says plainly that "the narrator of Judges" assumes the second view and what changes if the first is
  right, and hands the argument to lesson 10. The Go Deeper entry now says these are the lectures
  "where you will meet the Deuteronomistic History as an argument rather than a label".
- **L3-N9 and L3-N12.** The Jewish reader paragraph is rewritten. It places 1 Samuel among the Former
  Prophets, the Nevi'im Rishonim, names midrash, Rashi and Radak, and **quotes 1 Samuel 17:47 in JPS
  1917 with a Sefaria link** (new source 12), which is where 4.7's rule bites. It ends by saying the
  three-level scheme "is ours and not a neutral description" and that a Jewish reader "does not read
  the Tanakh as a book missing its last act. They read it as complete." Q3's explanation now says the
  genre ruling holds "by the categories this lesson uses" and notes that the Jewish arrangement calls
  Kings prophecy in a different sense. *The Jewish Study Bible* added to Go Deeper.
- **L3-N10.** The Genesis 1 paragraph now reaches outside evangelicalism: the critical reading as a
  priestly text against *Enuma Elish*, and Rashi's dependent clause giving the JPS "When God began to
  create".
- **L3-N11.** A new paragraph gives Chicago's limits alongside its latitude: the 1982 Hermeneutics
  statement's Article XXII and the 1978 Article XII, with the conclusion that "Chicago is not a
  licence to reclassify whatever you find awkward". "The strictest evangelical view" and "the most
  conservative statement" are replaced by "drafted by nearly three hundred evangelical leaders as the
  reference statement of that doctrine".
- **L3-N13.** Q3's strawman sermon title is replaced with a real one that a preacher would actually
  write, and its explanation now says "this sermon is not stupid, which is why it is the example". A
  new sentence closes the Gideon section: "None of that is a sneer at the bookmark. People reach for
  these lines because they want God to say something to them personally, which is the right instinct."

**Depth (the researched-and-unused hunt).** Added and now cited from the body: **Chicago Article
XIII's "reporting of falsehoods"**, inside the description/prescription callout, which is the
inerrantists' own statement making this lesson's argument; **Duvall and Hays's fifth step**, with
"consult the biblical map" restored, flagged as the step to hold on to, and then named twice where
the lesson performs it (principle 6, and the fleece checkpoint); **Alter's reticence**, attached to
the 2 Samuel 11:27 paragraph where the lesson was already teaching it unnamed; **John 21:25**,
quoted against principle 7, which is the passage `SOURCES.md` assigned to exactly that idea;
**Hayes's verified "It's a library" quotation** in place of the unattributed phrase; **Longman and
Dillard** added to Go Deeper as the answer to a real gap, since the lesson sends the reader into four
chapters of Judges and Samuel with no way to get their bearings in a book they have not read;
**Hayes's lecture numbers**, 12 and 13, per `OUTLINE.md` convention 8; **the two BibleProject
companion videos with real URLs**. Every one of the ten principles now has a gloss or an example, so
"apply the ten principles" is no longer a promise against a list where half the items have never
done anything. "The most-used introduction to reading the Bible" is rescoped to "the standard first
book on the subject in evangelical colleges and seminaries", and the three-step order is labelled in
source 1 as this course's summary rather than a formula quoted from the book.

**Voice and pedagogy.** The **title** is now "Genre first: what kind of writing is this, and how to
read a story", so the string the learner sees no longer carries the tic the style guide names by
example; `OUTLINE.md`'s heading updated to match. All six one-line morals are gone, including "The
chapter would rather you noticed who saves" and the two promissory closings. **All "Here is" openers
are gone**, count now zero. Pipeline vocabulary is out of every heading: the worked examples are
"David and Goliath, read three times" and "Gideon's fleece, and the silence that gets read as a yes",
"## Practice" is now "## Now do it yourself, on Jacob and Esau", and the exercise is named after its
parts. The banned shapes at "The question is never literal or not", the empty triad at "it's real",
and the rhythm triad "No verdict, no comment, no later reference" are rewritten; the second
rhetorical-question opener is gone and the one at "Who is the hero of that chapter?" is kept, as is
"So may a Christian ask God for a sign?", which the guide allows because a real student asks it.
Contractions now run 183 in the body. The eleven read-aloud failures are rewritten, including the
62-word Alter sentence and the 34-word Connections sentence. The **Judges 6 block quote is split in
two** at the seam, with the "as you promised" observation moved between the halves so the analysis
sits next to its evidence; the 1 Samuel 17 speech is split at "cut off your head" so the two clauses
the worked example turns on are not buried at the end of an eighteen-line block. **The exercise no
longer prints its own finding**: part 2 ends at "Count both", and the tick-and-dash result moved into
a hidden checkpoint. **Line 189's pre-emption is fixed**: the predict now sits *before* the popular
reading, and the popular reading says "nobody in the text objects" rather than announcing the answer.
**The exercise has model answers**, three `:::checkpoint` blocks after it covering parts 1 and 2,
part 4, and part 5, since the renderer will not nest blocks. **A fifth exercise part was added for
interleaving**, a mixed set of four short cases to be sorted among the nine errors and deliberately
not done in order, which is the fix lesson 2 got and lesson 3 lacked. **Two misconceptions were
added**: "The story is about me", which is personalising and which the lesson's own opening paragraph
sets up, and "If God blessed them, he approved of what they did", which is outcome read as verdict
and is what two quiz items turn on. Predict 2 is sharpened from a yes/no to "write down what you
expect... and where in the next chapter you expect to find it", so the learner commits to a
prediction before discovering there is nothing there.

**`minutes` 45 to 150.** The pedagogy reviewer measured 115 to 130 against the 5,000-word draft. The
fixes took the body to about 8,900 words, which adds roughly twenty minutes of reading, and added a
checkpoint, an exercise part and three model-answer blocks, which add about fifteen more. Components:
47 reading; 11 two videos; 10 1 Samuel 17; 8 the 1 Samuel 8 to 16 lookups; 7 Judges 6; 15 Genesis 25
and 27; 12 the five predict and checkpoint blocks; 28 the five exercise parts, of which part 2 alone
is ten; 7 free recall; 12 the quiz with its explanations. **The number was set to what the lesson
actually costs rather than to what looks reasonable**, because lesson 2's record shows the opposite
choice being made and regretted in the same paragraph.

### Deliberately not fixed, with reasons

- **Splitting the lesson in two. This is the one thing that needs John, and it is now urgent.**
  `minutes: 150` is two and a half times 1.3's one-sitting guidance, and the fix pass made it worse
  rather than better, because every blocking finding asked for more teaching and more practice rather
  than less. Both reviewers found a seam independently. The depth reviewer put it after "You can't
  ask what a text meant to its first readers until you know what kind of text they thought they were
  reading"; the pedagogy reviewer put it one section later, after the proportions chart, so Part A
  keeps the chart that motivates Part B. **The pedagogy seam is the better one**, and it is now even
  cleaner than when they found it, because the new "Using the rule, twice" subsection gives Part A
  its own worked example, its own checkpoint and its own quiz item, which is exactly what it was
  missing. The split would give a Part A of about 2,600 words and 40 minutes with objective 1
  properly taught and tested, and a Part B of about 6,300 words and 110 minutes. It was not done
  because it renumbers the course and every cross-reference in the other eleven lessons, and because
  lesson 3 itself carries four forward references. **This is the second lesson in a row to hit it.
  It should go to John as one decision about the course, not two about lessons.**
- **A third bar on the chart for the Gospels and Acts.** L3-D3 is right that Fee and Stuart's two
  figures do not on their own establish that narrative is the largest kind of writing in the Bible,
  because they cover the Old Testament only. The prose now says so and adds that the Gospels and Acts
  are narrative too, so the real share is larger. A third bar was not drawn, because the only figures
  available are chapter counts and the first two bars are drawn from a claim about bulk. Mixing the
  two units in one picture would be exactly the kind of false precision the caption now warns
  against. A verified bulk figure for New Testament narrative would let this be drawn properly, and
  it is not in `SOURCES.md`.
- **Köstenberger and Patterson's hermeneutical triad.** `SOURCES.md` names it as the graduate-level
  check on the genre lessons and it is still unused. One more Go Deeper entry would have made six on
  a lesson already at 150 minutes, and the triad's real payoff is across lessons 3 to 7 rather than
  inside one. Recorded for the lesson 4 draft.
- **Fee and Stuart's three-step method, verified.** Source 1 now says the three-step order is this
  course's summary of how the book works rather than a formula quoted from it, which is honest, but
  it is a downgrade rather than a verification. Whoever next has the book open should check whether
  ch. 1 states it as a method.
- **Sternberg cited rather than read.** He is named as the counter-position on narrator evaluation
  from the reviewer's report, with the book and its publisher and year in source 10, but nothing of
  his is quoted and the book was not opened at this pass. Same for Webb, Block, Klein and Exum on the
  Gideon cycle, who are named without page references.
- **Alter's "historicized prose fiction".** Widely attributed and used in the lesson as his
  self-description, but not verified against a page of the revised edition at this pass. Flag for the
  next fact-check.
- **`scripts/build.mjs` does not warn on `fill="#ffffff"` inside `<text>`.** This lesson's dark-theme
  bug was invisible to the validator, and it is the second SVG contrast failure in this course that
  the linter could not see. The fix belongs in the build script, not in a lesson fix pass, and it
  would catch the same defect in the eight other lessons still carrying SVG warnings. Recorded for
  the backlog.
- **The other eight bible-basics lessons' SVG warnings.** Nine lessons in this course still warn on
  undersized SVG labels or hardcoded dark fills. Lesson 3 is now clean and its chart is the working
  pattern (narrow viewBox, labels outside the bars with swatches, `var()` fills, a `<desc>`), but
  fixing the rest is a separate pass and would have buried this one.

---
