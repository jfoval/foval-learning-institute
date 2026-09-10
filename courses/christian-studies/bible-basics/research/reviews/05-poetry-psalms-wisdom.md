# Reviews: The Bible, What It Is and How to Read It — 05-poetry-psalms-wisdom

Append-only. Newest at the bottom.

## Lesson 5, "Reading poetry, the Psalms, and wisdom" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context. **Verdict: not clean for publish.** About sixty findings, nineteen
blocking.

Two things are true at once and both matter. The **Proverbs half is the best teaching in the course
so far**, and the **quiz is the best-built in the course** on every axis previous reviews measured:
all six items use cases the body never works, option lengths are levelled to within 5 to 15
characters, and keys spread A, B, C, B, C, D with all four indices used and no run. Against that,
**eight of the blocking findings are items already resolved earlier in this same course**, and one
whole class of defect (ESV debris) is concentrated in the quiz that is otherwise the best in the
course. Lesson 5 was drafted after lesson 4's fix pass had already written the fix for four of them.

The two findings that no previous review would have caught are both arithmetic: a sentence that is
false on the lesson's own numbers, and a chart that omits exactly the data that would refute it.

### BLOCKING

**L5-B1. The self-check prints its own answer in plain body text, for the fifth lesson running, in
the exact wording lesson 4 was faulted for.** Line 191 "Write your answer before reading on"; line
193, the next visible line, "Here is mine." Caught independently by all five reviewers. Worse than
any previous instance: **line 186 defines the fourth element as "deliverance (the actual petition)"
and line 191's own prompt calls verses 3 and 4 "the petition"**, so the question hands over the
answer word before asking for it. L1-V3, lesson 2's line 254, L3-B1, L4-B1.

**L5-B2. Every poem in a lesson about paired lines renders on the site as prose.** `scripts/build.mjs`
line 17 sets `marked` with `breaks: false`, and `site/assets/styles.css` line 67 sets no
`white-space` on `blockquote`. Verified by running marked with the project's own options: two
quoted poetic lines come out as one `<p>` with a soft newline, which HTML collapses to a space.
So Psalm 13 entire, Psalm 19:1 to 2, Proverbs 26:4 to 5, Psalm 137, Proverbs 22:6 and Ecclesiastes
1:2 all reach the learner as run-on prose, in the lesson that teaches "ask what the second line
adds". **This is course-wide** (lesson 6 has 23 quoted poetic lines, lesson 4 has 11, lesson 2 has
5), and lesson 5 has 43, the most in the course. Two fixes: a lesson-local one, two trailing spaces
per poetic line, which was tested and does emit `<br>`; and a proper one in the shared files, a
`:::verse` block plus `white-space: pre-line`, filed below.

**L5-B3. Six ESV wordings in the quiz, none tagged, in the lesson whose research file predicted
exactly this.** `SOURCES.md` line 246: "**ESV text** of every verse quoted in lesson 5 was fetched
from BibleGateway at draft time", with the standing instruction to re-fetch in the NET. **The body
was converted and the quiz was not.** Verified against NET2:

| Item | Lesson (ESV) | NET |
|---|---|---|
| Q1 option B | "the God of my salvation" (Ps 88:1) | "O Lord God who delivers me" |
| Q2 stem | "A slack hand causes poverty, but the hand of the diligent makes rich" | "The one who is lazy becomes poor, but the one who works diligently becomes wealthy" |
| Q3 stem | "break forth into singing... trees of the field shall clap their hands" | "will give a joyful shout before you... all the trees in the field will clap their hands" |
| Q4 stem | "the dead know nothing, and they have no more reward" | "the dead do not know anything; they have no further reward" |
| Q6 stem | "I will extol you, O LORD, for you have drawn me up" / "turned for me my mourning into dancing" | "I will praise you, O Lord, for you lifted me up" / "Then you turned my lament into dancing" |
| Q6 option C | "he will not be moved" (Ps 30:6) | "I will never be shaken" |

Q3 is worst: its whole point is a botanical objection to a rendering ("trees of the field", "break
forth into singing") the learner's own Bible does not carry. Q6 asks the learner to classify a psalm
**from wording they will not find when they open it**. Also in the body: **Proverbs 16:3 quoted in
the NIV** ("your plans will succeed"; NET "your plans will be established") with no version named;
Proverbs 10:1 and 15:1 given in ESV/KJV wording hedged as "in most translations", which is a dodge
in a course with one Bible; and Psalm 59:7 "swords in their lips", which is ESV and is not in the
NET at all (the image is at 55:21 and 57:4). **Footnote 1 claims the quotations were "read via the
bible.org API"**, which `SOURCES.md` contradicts and the six survivals disprove.

**L5-B4. "More of Israel's prayer book is complaint than praise" is false on the lesson's own
numbers, and the chart is drawn so the reader cannot check it.** Line 157. Fee and Stuart's point,
correctly quoted, is that laments are the largest *type*. Add the lesson's own lists: thanksgiving
16, hymns of praise 16, salvation-history 5, celebration and affirmation 28, wisdom 8, trust 10.
That is 83 non-lament psalms against "more than sixty" laments, and 65 of them are praise of one
kind or another. **The chart's own footer concedes the problem**: "hymns and celebration psalms are
not counted there", so the two largest praise categories are precisely the two the bar chart omits.
A chart that omits the data that would refute the sentence it illustrates is the L2-B1 class with a
truth problem on top, and the overstatement runs in the direction of the paragraph's pastoral point.

**L5-B5. The psalm-type scheme is a list of numbers with no diagnostic criteria, and the one tool
that makes classification possible appears for the first time in a quiz answer.** Lines 122 to 130
give seven types as names plus psalm numbers. Nothing says what makes a psalm a lament rather than a
thanksgiving, or what "enthronement" means. Q6 then asks the learner to classify Psalm 30 cold, and
its `explain` supplies Fee and Stuart's five thanksgiving elements for the first time in the lesson.
That five-element pattern, worked on Psalm 138, is in `SOURCES.md` line 240 and never reaches the
body. Objective 2 says "classify a psalm by type"; the transfer test fails on the lesson's largest
section. **Compounding it, both classification items are lookups**: line 124 lists Psalm 88 among
the individual laments and line 197 states its whole content, which is Q1's key; line 125 lists
Psalm 30 among the individual thanksgivings, which is Q6's key. Quizzes are open book
(`app.js` sets "Closed book" only for `isTest`).

**L5-B6. Four of the lesson's own objective-halves are taught, modelled and tested cold. Fifth
lesson running** (L1-D4, L2-B4, L3-B4, L4-B6). Imagery (objective 1b) has teaching and Q3 and no
practice. Classification (2b) has a bare list and no practice. **Job (4a) has teaching and neither
practice nor a quiz item**, and the learner never reads a line of Job except 42:7 quoted in the
body. The imprecatory psalms (4c) have a quiz item and no practice, on the hardest material in the
lesson. Objective 4 also bundles three separate performances and promises "read one of each as what
it is", which is unperformable as shipped, since two of the three books are never opened. That is
L4-P10 one lesson later. Objective 3 is the only complete chain in the lesson and is the model the
others should be rebuilt to.

**L5-B7. "Vengeance is mine, I will repay, says the Lord" is attributed to Deuteronomy 32:35, and
the course's own Bible does not read that way there.** Line 281 calls it "a command... which
Deuteronomy 32:35 gives to Israel". NET Deuteronomy 32:35: "**I will get revenge and pay them back**
at the time their foot slips." The quoted words are Paul's at Romans 12:19, which the lesson then
correctly block-quotes four lines later. Two errors compound: a wording the course's Bible does not
carry, and "a command given to Israel" for what is God speaking about the nations inside the Song of
Moses. Q5's explanation repeats it. **This is the sentence the whole answer to the lesson's hardest
objection rests on.**

**L5-B8. Twelve of the chart's thirteen labels vanish on the dark theme, and the validator sees
two.** Line 134, `<g font-size="11" fill="#333">`, wraps six type names, five numbers and the in-bar
label. `scripts/build.mjs` matches `fill` and `font-size` on `<text>`, not on a `<g>` wrapper, so
eleven labels defeat **both** checks; `npm run validate` reports one `#fff` fill and two undersized
labels when the real counts are twelve and thirteen. `styles.css` sets `--bg: #0c1220` in dark mode,
so `#333` on that is about 1.45:1 and the chart's entire content disappears while the bars remain.
Line 137's `fill="#fff"` sits on the oxblood bar, which flips to `#d9737f` in dark mode, about
3.2:1, so the headline number goes too. Sizes: title 12, labels 11, footnote 9 in a `0 0 360 230`
viewBox render at **10.9, 10.0 and 8.2px** on a 360px phone against the 14px floor. No `<desc>`.
**Fourth SVG contrast failure in this course the linter could not see** (L1-V2, L3-B5, L4-B4).
Also the laments bar is drawn at exactly 60 while its label says "more than 60", which is L3-F4,
whose recorded fix was to draw at the floor **and say so in the caption**.

**L5-B9. Zero in-body links, and the lesson's first line is an unlinked instruction to open a
Bible.** Line 60, "Open a Bible to Proverbs 26". The file's only two Markdown links are in Go deeper
and Sources, which is exactly the condition that satisfies the validator's no-links check. Seven
further "open this passage" commands are unlinked (94, 159, 199, 211, 314, 316, 318), so every
practice task in the lesson is blocked for a reader without a Bible to hand, which line 159 concedes
("in your own Bible"). L1-V5, L3-V6, L4-B10, fifth time, and the build-script blind spot was already
filed as a shared-file request at lesson 4.

**L5-B10. Contractions: effectively zero in the body and zero in the frontmatter.** Eight matches in
6,822 body words, and **six of the eight are "what's more" inside Kugel's quoted formula** and one
is inside a quoted objection, so teacher prose contains **one real contraction**. The frontmatter has
**zero in 1,685 words**. Course band is lesson 3's 1 in 55 to lesson 4's post-fix 1 in 63. Lesson 4
was called a regression at 1 in 249; this is several times sparser again and is the worst in the
course. Six quiz explanations averaging 108 words with no contraction is the most machine-sounding
block in the file, and it is the exact block lesson 4 was faulted for.

**L5-B11. `minutes: 45` against a measured 105 to 140.** Four reviewers measured independently:
105 to 119, 117 to 140, 122, and 134. The lesson asks for about 75 to 90 verses of external reading
(Psalm 22 entire, Psalm 42 entire, Psalm 1, Ecclesiastes 1:1 to 11, Proverbs 3:1 to 10, Amos 5) plus
13 minutes of video plus three written exercise tasks. Against the course's calibration this is the
largest proportional gap yet, larger than lesson 4's before it was reset.

**L5-B12. The Psalter's Catholic and Orthodox life is absent, and every psalm number in the lesson
is wrong in their Bibles.** Grepped: "Catholic" 0, "Orthodox" 0, "Divine Office" 0, "Liturgy" 0,
"monastic" 0. Line 112 says the Psalter "is the prayer book of the synagogue as much as of the
church" and then shows no church praying it: not the Rule of St Benedict's weekly Psalter, not the
four-week Liturgy of the Hours, not the Orthodox twenty kathismata (the whole Psalter weekly, twice
weekly in Lent). These are not rival theories; they are the lesson's own thesis, practised for
fifteen hundred years. Fourth recurrence of L2-N6 / L3-N7 / L4-N2.
**And in the Greek and Vulgate numbering, Hebrew 11 to 113 = LXX 10 to 112, so every psalm this
lesson sends a reader to is off by one**: 13 → 12, 22 → 21, 30 → 29, 42 → 41, 51 → 50, 88 → 87,
109 → 108, 137 → 136. Lesson 1 already taught the LXX numbering at Psalm 9/10 and this lesson drops
it, in the lesson that tells the reader to go and look verses up.

**L5-B13. Protestant-canon figures stated as settled, and the deuterocanonical wisdom books are
absent from a lesson about biblical wisdom.** Line 112, "a collection of 150 prayers and songs":
the Greek and Slavonic Psalter carries **Psalm 151**, and **11Q5, the manuscript in the lesson's own
photograph two lines later, contains Psalm 151 in Hebrew**. Line 205, "Three Old Testament books are
usually classed as wisdom": in a Catholic or Orthodox Bible the Wisdom books are a named section of
five to seven including **Sirach** and the **Wisdom of Solomon**, both grepped and absent. Third
recurrence of L1-N5 and L3-N6, whose fix instruction was "wherever a number is attached". It also
costs real teaching: Sirach is the closest ancient analogue to Proverbs, and **Wisdom 3:1 is the
answer another canon supplies to exactly the problem quiz Q4 poses from Ecclesiastes 9:5**.

**L5-B14. The Jewish reader: one subordinate clause of living practice, the Tanakh quoted from a
Christian translation, and the tradition enlisted rather than heard.** The sharpest test in this
lesson and the lesson does not take it.
(a) Line 112 is the only mention of Jewish use, and everything downstream is Christian, including
Fee and Stuart's "precisely in the ways they functioned for Israel **in the first place**", past
tense. Nothing on how Jews pray these psalms **now**: Ashrei three times daily, Hallel at the
festivals, Kabbalat Shabbat, the Psalm of the Day, Psalm 30 at shacharit, psalms in a house of
mourning.
(b) **4.7 breach at line 255**, which characterises what a Jewish community reads at Sukkot by
quoting the NET's "everything is futile". That is a Christian translation's rendering of *hevel*
used to describe a Jewish liturgical act. JPS 1917 reads "all is vanity". This is where L3-N12 said
the rule bites and where L4-B8 was fixed.
(c) The tradition is spoken for: line 255 tells the tradition what its practice means, with
**Wikipedia** as the only source behind a claim about living practice, which is what L2-N8 was
faulted for. The book is called "Ecclesiastes" inside the Jewish paragraph where the tradition's word
is **Kohelet** (outline convention 5).
(d) **No Jewish reading of Job or the wisdom books anywhere.** *b. Bava Batra* 15a, where the rabbis
debate whether Job existed at all or is a *mashal*, bears directly on line 244's flat "Job is a
dialogue with a frame", and this course already cites Bava Batra 14b in lesson 1. *m. Yadayim* 3:5,
already in `SOURCES.md` line 41 and already used in lesson 1, records the real dispute over whether
Kohelet "defiles the hands", which is the honest correction to line 303's "that he is there on
purpose is not argued".
(e) **Psalm 22 is handed to the learner christologically with no label**: exercise part 1 says "If
you know where Jesus quoted the first line, note that too." Psalm 22 is, after Isaiah 53, the most
disputed passage between Jews and Christians, and the lesson gives the prompt and no three-way sort,
one lesson after lesson 4's Isaiah 7:14 section was praised for doing the opposite.
(f) Hebrew versification: the superscription is verse 1 in a Hebrew Bible, so "Read Psalm 13:1 to 2"
sends a JPS reader to the wrong lines, and Psalm 51:5 is 51:7 there.

**L5-B15. The imprecatory section grades the largest church's own liturgical practice as a
misconception, and states the objection only in a form nobody holds.** Line 305 lists "the violent
psalms should be skipped" as a misconception; Q5 option A defines that position as holding the
psalms "record an older and lower stage of religion". **The 1971 Liturgy of the Hours omits Psalms
58, 83 and 109 entirely and excises the imprecatory verses of others, including 137:7 to 9.** That is
the settled official practice of the Psalter's largest living Christian use, and its stated reason is
pastoral, not developmental, so no Catholic would recognise option A as their view. Separately,
**C. S. Lewis's *Reflections on the Psalms*** calls the spirit of the cursing psalms "devilish" while
insisting they are still Scripture; that is the best-known Christian treatment of the problem and it
is absent, so the lesson offers only endorsement and tearing the page out, both marked wrong. 3.7
asks for objections at full strength, and the strong objection survives the lesson's answer: granting
that the psalm is prayer, hyperbole, covenantal and handed to God, it still asks God to bless the man
who kills babies, and the lesson then invites the reader to pray it.

**L5-B16. The exercise has three written tasks and no model answers, and two of the three give away
what they ask for.** Fifth lesson (L2 two missing, L3-V9 four, L4-D7 all). Line 314 says "Then find
the turn. **It is sharp, and it comes with a change of audience:**" and quotes 22:22, so the task is
to find a turn the instruction has already located and quoted. Exercise part 2 sends the learner to
Proverbs 3:1 to 10, and the callout at 236 has already quoted 3:9 to 10 and delivered the reading.
`OUTLINE.md` convention 6 requires practice on a passage the lesson did not cover.

**L5-B17. Contested claims asserted as settled, five of them, each in the direction that favours the
course's position.** The hunted defect.
(a) **"The epilogue has the last word"** (253, 303) and, in **Q4's key**, "a framed book whose
epilogue has the last word". That the book has a frame is well attested. That the frame *governs*
rather than endorses is the contested question, and Michael Fox's reading (the frame narrator
presents Qohelet approvingly) is the standing counter-position. Resolved by editorial preference, in
a quiz key, in the direction that neutralises Ecclesiastes 9:5.
(b) **Manufactured consensus**: "Both readings agree on the thing that matters for you... a single
line of the Teacher is not where you settle a doctrine" (253). On Provan's reading, which the same
paragraph reports, Qohelet's voice *is* the book's teaching. Attributing to a named scholar an
agreement that dissolves his position is a 3.2 failure.
(c) **"Counter-voices"** as a section heading (240) and "the canon's own defence against turning
wisdom into a slot machine" (242) state the Longman side of the disagreement the lesson reports
eleven lines later, in the lesson's own voice, as the reason the book is canonical. "That he is
there on purpose is not argued" (303) is contradicted by m. Yadayim 3:5.
(d) **"Paul's instruction and the psalm are the same instruction"** (287), and "That is the whole
logic of the imprecatory psalms" (281). A theological synthesis asserted as an observation, and it
is the sentence carrying the answer to the lesson's hardest objection. `SOURCES.md` records only the
weaker claim that these psalms "do not contradict Jesus' teaching"; the *because* clause at 287 is
the drafter's and is attributed to Fee and Stuart by placement.
(e) **"It is the verdict of the book of Job"** (234). Job 42:7 says the friends have "not spoken
about me what is right"; reading that as a verdict about *genre misuse* is an interpretation, and
substantial readings locate the fault in their theology of God instead.
(f) **"survives translation better than almost any other poetry in the world"** (301), an unsourced
superlative contradicted by the course's own research: the Psalm 9/10 acrostic, verified at
`SOURCES.md` 170 and taught in lesson 1, is invisible in English.

**L5-B18. The critical scholar: Mowinckel dropped, the superscriptions silently deleted, Ecclesiastes
undated.** Mowinckel appears once, in footnote 7, never in the body, though the same footnote records
that Hayes lecture 21 covers "form criticism from Gunkel and Mowinckel". The lesson takes Gunkel's
**labels** and drops his **thesis**, that each *Gattung* has a *Sitz im Leben* in Israel's cult, and
with it Mowinckel's claim that most psalms are temple liturgy rather than private devotion, which is
the direct counter-position to the lesson's own reading rule at 114. It even prints Mowinckel's
category name, "the enthronement psalms", without him.
**The superscriptions are deleted from every psalm quotation and the deletion is disclosed only in
the Sources block** (337), while line 165 says "Here is the whole psalm" of a Psalm 13 that has had
its heading removed, which in Hebrew is verse 1. Whether "of David" means authorship, dedication or
a later liturgical note is the standing question, and the lesson decides it by excision, in the
direction that makes a psalm a private prayer. Psalm 88's superscription names Heman the Ezrahite
and sits inside the psalm Q1 is about.
Ecclesiastes gets no date, no 1:1 "son of David, king in Jerusalem", no Solomonic persona and no
mention of the near-consensus post-exilic dating.

**L5-B19. The lesson 1 forward reference is dangling.** `01-finding-your-way-around.md` line 239:
"Who the servant is has been argued between Jews and Christians for two thousand years, and **lesson
5 takes it up**." Grepped lesson 5: "Isaiah 53" appears **zero** times. The material landed in lesson
4's callout, which is where L1-N8's resolution should now point.

### Facts wrong

**L5-F1. Psalm 42's refrain occurs three times, not twice, and the checkpoint stops one verse
short.** Line 199 sends the reader to "all eleven verses" and line 200 answers "the turn happens
twice". Verified in NET2: the refrain stands identically at **42:5, 42:11 and 43:5**, and **Psalm 43
has no superscription**, which is the main evidence that 42 and 43 were one psalm. Reading both
makes the checkpoint's own point ("the turn is not a switch that stays flipped") far stronger.

**L5-F2. Psalm 88's verse count is double-covered.** Q1's stem says it "opens with a cry, complains
for eighteen verses"; the psalm is **18 verses in total**. Also Q1's key understates what it drops:
against Fee and Stuart's six elements, Psalm 88 lacks trust and assurance as well as praise.

**L5-F3. Psalm 30 does not end where Q6 says.** The stem says it "ends with" 30:11; the psalm ends
at **30:12**, "I will always give thanks to you", which is the testimony element and strengthens the
key.

**L5-F4. Psalm 137 verse 7 is itself an imprecation**, so "after six verses of grief, the last two"
(267) miscounts a nine-verse psalm the lesson relies on three lines later.

**L5-F5. The corporate-lament list drops Psalm 94** (124) and is given without the hedge the
individual list carries.

**L5-F6. Elihu is missing, and he is the failure case for the lesson's own rule.** Line 244: "you
cannot read any speech in Job as 'what the Bible teaches' without asking who is speaking and what God
says about them at the end." Job 32 to 37 is Elihu, and 42:7 names only Eliphaz "and your two
friends", so the rule returns no verdict on a sixth of the book. L1-D2 established that a rule taught
with no failure case is memorised rather than usable; this one is free and inside the lesson's text.

**L5-F7. The acrostics are missing**, and they are the counter-example to L5-B17(f). Psalms 9-10, 25,
34, 37, 111, 112, 119, 145 and Lamentations are alphabetic acrostics, the one formal feature that does
not survive translation at all. **Lesson 1 already worked Psalms 9 and 10 as a broken acrostic** and
`SOURCES.md` 170 records it as verified.

**L5-F8. "Lesson 9 returns to it"** (117) is false as the course stands: no lesson mentions 11Q5 or
the Psalms Scroll outside lesson 5, and `OUTLINE.md` sends lesson 9 to the Great Isaiah Scroll.

**L5-F9. The Ecclesiastes liturgy sentence over-generalises its source and misplaces the festival.**
The lesson says "by other communities on Shemini Atzeret"; `SOURCES.md` 245 names only "Yemenites,
Italians, some Sephardim, and the mediaeval French Jewish rite". Shemini Atzeret is a distinct
festival following Sukkot, so "at Sukkot... on Shemini Atzeret" is self-contradictory. Ashkenazim
themselves read it on Shemini Atzeret in years when no Shabbat falls in Chol HaMoed.

**L5-F10. Three Fee and Stuart quotations run longer than the research record supports** (209, 224,
234), and **the Kugel paraphrase goes beyond the formula `SOURCES.md` authorised** ("quote only the
formula"), giving a four-verb mechanism attributed to a book the research records as not opened.
The substance of the Kugel expansion is independently supported; the attribution is the problem.

**L5-F11. Small claims beyond the record**: "thirty-nine chapters of poetry" in Job; *hebel*'s
"literal sense is vapour or breath"; "In the Hebrew Bible it is called Tehillim"; "*hesed*" as the
word behind the NET's "faithfulness" at Psalm 13:5; 11Q5 "roughly nine centuries" before the
Masoretic codices, which is closer to a thousand years; both video running times; and the *hebel*
count of 37, which several commentaries give as 38.

**L5-F12. A statistic sourced to a YouTube animation.** Line 73 attributes "about a third of the
whole Bible" is poetry to the BibleProject video, in parentheses, unfootnoted, and the sentence
around it is about the Old Testament, so the denominator switches mid-sentence. 2.2 does not accept
an animation as the source for a proportion, and Fee and Stuart's own figures are in `SOURCES.md`
line 11 and unused.

### Depth: researched and unused

Fee and Stuart's **thanksgiving elements worked on Psalm 138** (the exact material L5-B5 needs);
their **three worked parallelism examples**, Isaiah 44:22, Hosea 7:14 and Obadiah 21, which would
supply ready-made practice for objective 1 and would give **synthetic parallelism** the example it
completely lacks (it is defined once in a parenthesis and never shown, practised or tested); the
**fuller hymn lists** (66, 100, 111, 114, 149; 33, 103, 113, 117, 145 to 147), which the chart footer
claims do not exist; the **full lament lists**; Fee and Stuart's **other three Proverbs guidelines**,
where Go deeper advertises "the four guidelines" and the lesson gives one; their **Psalm 3 worked
lament**; **Longman and Dillard**, assigned by `OUTLINE.md` and absent from body, Sources and Go
deeper, which is L4-D1.4 verbatim one lesson later; **Hayes lecture 20** on wisdom, so the Psalms
half carries a critical voice and the wisdom half carries none, which is L4-D1.7 with the halves
swapped; and the **BibleProject "Metaphor" video**, verified at draft time and parked in Go deeper
rather than embedded at the imagery section it was researched for.
Correct behaviour to record: Athanasius's *Letter to Marcellinus* and the NET note on Proverbs 22:6
are recorded as "Not obtained" and neither is cited. And **the lesson does not attribute Proverbs
22:6 to Fee and Stuart**, which `SOURCES.md` warns against; it gives its own reasoning and then says
they make the same point from 16:3. Clean separation, and it must survive the L5-B3 fix.

### Voice and pedagogy

Four "Here is" openers (92, 104, 165, 193), including "Here is the mechanism under all of this",
which is the 1.2 element name in learner-facing prose. Five pipeline-vocabulary headings. Ten to
eighteen paragraphs ending on a compressed one-line moral, depending on how strictly counted, where
lesson 4 was told to keep two. Six unsourced superlatives. Three rhetorical-question openers where
one is allowed; keep line 242's, which a real student asks. Eleven wall paragraphs over 100 words,
worst at 253 (174 words), 224 (174) and 244 (150). Four sentences over 90 words. Psalm 13 is analysed
by verse number and quoted **without verse numbers**, giving eleven back-references into an
unnumbered block on a phone. Exercise part 1 says "mark in the margin", which assumes a printed
Bible. **No free-recall step before the quiz**, and this is the only lesson in the course without
one. The figure is never referred to in the text and its caption teaches lesson 9's subject, so it is
close to decorative in a lesson that shows parallelism visually nowhere. Q6 option C rests on Psalm
30:6, a line the stem does not quote, so an inline reader cannot evaluate it. The same fake-
parallelism distractor template appears in Q2, Q3 and Q4, which hands a free elimination once
spotted. **Five of six keys are the moderate option**, with every distractor closing on an absolute,
so a learner who has read nothing scores 5/6 against a 70 percent pass mark: the drafter has learned
to level length and position and not yet to level stance.

### Split seam

Yes, and the lesson names it in words: line 205 opens "Now to the other half of the lesson." Part A
(poetry and the Psalms) and Part B (wisdom, Job, Ecclesiastes) are about 3,400 words each. One
complication all three reviewers who looked at it noted: **the Psalm 137 section sits in Part B and
belongs to Part A's material**, so a clean split needs it moved up. Fourth lesson in a row to hit
this.

### What is working, and must survive the revision

- **The opening**, Proverbs 26:4 and 5 side by side with a predict that makes the reader choose
  before any teaching, and an answer that turns the contradiction into the lesson's whole thesis.
  The best opening in the course since lesson 3's.
- **The Kugel correction of Lowth** (88 to 92): the classic taxonomy taught, then the standing
  objection to it, labelled as an argument, with a usable habit as the outcome. **Footnote 5 discloses
  that the book was not opened**, which is the L4-B7 defect handled correctly and unprompted.
- **The Proverbs teaching entire** (203 to 234), especially the wrinkle at 226: the reader's own best
  objection ("a convenient way to explain away the verses that do not come true") answered from
  inside the canon with Job's friends and Job 42:7. Objective 3 is the only complete
  teach-practise-test chain in the lesson and is the template for rebuilding the others.
- **The Longman and Provan paragraph** (253), minus its last sentence. Two friends reading the same
  book in opposite ways, with the course's own textbook's authors split one each way.
- **The Psalm 42 checkpoint**, "the turn in a lament is not a switch that stays flipped".
- **The Psalm 137 section's refusal to make itself comfortable**: "I will not pretend this makes the
  verse comfortable. It does not, and it is not meant to." The anti-presentism at 277 to 279, placing
  the psalm on lesson 2's timeline and naming the siege practice behind verse 9, is 3.3 done properly.
- **The Sukkot paragraph's generosity**, once its translation and sourcing are fixed.
- **The whole quiz is application**: six items, six cases the body does not work. First lesson in the
  course to manage 6/6 against 4.3's "at least half".
- **The option sets are the best-levelled in the course** (spreads of 5 to 15 characters, key longest
  in one item of six) and **keys spread A, B, C, B, C, D**, all four indices, no run. Whatever
  produced that discipline must be kept and extended to stance.
- **The explanations teach the wrong answers**, crediting distractors for the half they get right.
- **Nobody is told who wrote a psalm.** Given how easily this lesson could have said "David wrote
  Psalm 13", the restraint is deliberate and should be kept when the superscription paragraph is
  added.
- **Every body quotation is verbatim NET2**, verified word for word by two reviewers independently:
  Proverbs 26:4 to 5, 22:6, 3:9 to 10; Psalm 19:1 to 2, Psalm 13 entire, 42:11, 22:1, 22:22, 51:5,
  137:1 and 8 to 9; Ecclesiastes 1:2 and 12:13; Job 42:7 and 15:20; Romans 12:19; Psalm 114:4. **The
  ESV survivals are in the quiz and in three incidental paraphrases, not in the body.** Do not
  "correct" the body.
- **All five outline misconceptions shipped, plus a sixth.** First complete misconception list in
  this course.
- **No sneering at any tradition and no strawman of a critical position anywhere.** The failures
  toward Jewish, Catholic, Orthodox and critical readers here are failures of **omission**, which is
  a different and more tractable problem than lessons 3 and 4 had.
- **Zero em dashes, zero en dashes, zero banned vocabulary.** Fifth lesson running.

### Unverified in this environment

Both BibleProject running times and video IDs (youtube.com blocked). The Psalms Scroll photograph,
its alt text and the "nine centuries" caption claim (Commons blocked). Hayes's lecture 21 quotations
(oyc.yale.edu blocked; recorded in `SOURCES.md` from the transcript). Fee and Stuart's page-level
wordings, including the three over-long quotations at L5-F10. Lowth 1753, Kugel 1981 and Gunkel 1933
beyond what search confirms. The *hebel* count of 37 against 38.

### Resolutions applied, 2026-09-06

Applied in a single fix pass on `lessons/05-poetry-psalms-wisdom.md`, with corrections in
`research/SOURCES.md` so later lessons do not inherit them, and one one-word fix in
`lessons/01-finding-your-way-around.md`. `npm run validate` exits 0 and **this lesson's two warnings
are gone**. Zero em dashes and zero en dashes. Frontmatter parses; six quiz items, each a mapping
with q, four options, answer and explain; 15 block openers and 15 closers. Body grew from about
6,800 words to about 10,300.

**Blocking.**

- **L5-B1.** The unhidden answer is gone. The Psalm 13 gap is now a single `:::predict`, and **the
  giveaway is out of the stem**: it no longer calls verses 3 and 4 "the petition" before asking which
  elements they are, and it asks for three things (the elements, the request, the stakes) rather than
  one. "Here is mine" is gone.
- **L5-B2.** Every poetic line in every block quotation now ends with two trailing spaces, so marked
  emits `<br>` and the poems render as lines. Verified by running marked with the project's own
  options. 44 lines fixed; the nine without trailing spaces are attribution lines, which should not
  carry a break. **The general fix belongs in the shared files and is filed below**, because lesson 6
  has 23 affected lines and every lesson that quotes poetry has some.
- **L5-B3.** All six ESV wordings in the quiz replaced with NET 2nd edition and tagged, plus the NIV
  Proverbs 16:3 in the body, which now gives the NET wording **and says that Fee and Stuart quote it
  in the NIV**, and the two "in most translations" paraphrases at Proverbs 10:1 and 15:1, which are
  now quoted directly from the NET. Psalm 59:7's "swords in their lips", which is ESV and is not in
  the NET at all, is replaced by Psalm 57:4's "tongues are sharp swords", which is. Footnote 1 no
  longer claims a bible.org API fetch and now lists every passage quoted including the quiz.
  **`SOURCES.md` corrected at source**, with the original entry kept so the error is traceable, and
  its stale verse count deleted.
- **L5-B4.** The false sentence is gone. The lesson now says lament is the largest *single* type,
  larger than any one kind of praise, and then says explicitly that the praise categories added
  together outnumber it, so the Psalter is not mostly complaint. **The chart now draws the two
  categories it previously omitted**, hymns of praise (16) and celebration and affirmation (28), so
  the reader can check the claim on the picture, and the caption says the laments bar is drawn at the
  floor of 60 because the source gives no exact number.
- **L5-B5.** Each of the seven types now carries a **test the reader can apply** rather than a bare
  list of numbers: is the trouble present, is it past, is there an occasion at all, and so on. **Fee
  and Stuart's five thanksgiving elements are now taught in the body**, worked on Psalm 138 as they
  work them, so Q6 no longer grades against a pattern introduced in its own answer. The lesson names
  the tense test as the one the reader will use most. **Both lookup items are gone**: Q1 and Q6 were
  replaced with psalms the body does not classify.
- **L5-B6.** Every objective now has teaching, practice and a quiz item. Imagery gets a new
  `:::checkpoint` on Psalm 18:2's seven images. Classification gets the tests above plus the fresh
  Psalm 6 item. **Job gets a `:::checkpoint`** on Job 15:20 in Eliphaz's mouth, which also carries the
  Elihu failure case. The imprecatory psalms get the new Psalm 137 predict and a rewritten Q5.
  Objective 4 was split into two so that Job and Ecclesiastes are one objective and the imprecatory
  psalms another, and objective 5 now asks the learner to state the **strongest objection** and how
  Christians have answered it differently, which is what the lesson now teaches.
- **L5-B7.** Deuteronomy 32:35 is quoted in the NET ("I will get revenge and pay them back"), the
  familiar wording is attributed to **Paul at Romans 12:19** where it belongs, and "which Deuteronomy
  32:35 gives to Israel" as a command is gone. **"Paul's instruction and the psalm are the same
  instruction" is gone**, replaced by "our reading of the connection is... That's a reading, not
  something the psalm says about itself." Q5's explanation no longer says "what Deuteronomy 32:35 and
  Romans 12:19 require".
- **L5-B8.** The chart is redrawn: viewBox 360 to **344**, one column, every label font-size 15 or 16
  rendering at **14.3 to 15.3px** on a 360px phone against 8.2 to 10.9px before. **No `<g>` carries a
  fill or a font-size and no fill or stroke is hardcoded anywhere**; the `#fff` in-bar label is gone
  because every count now sits in the label outside its bar. A `<desc>` was added and
  `aria-labelledby` names both title and desc. `font-family` is `inherit`.
- **L5-B9.** Ten in-body links added, so every "open this passage" instruction is reachable,
  beginning with the lesson's own first line. Sefaria links for both JPS 1917 quotations; the Hayes
  lectures are linked by number in Go deeper.
- **L5-B10.** Contractions raised from one real instance to **126** in the body, and the quiz
  frontmatter, which had zero in 1,685 words, now carries them throughout its explanations.
- **L5-B11.** `minutes` 45 to **125**, inside the reviewers' measured range of 105 to 140 and matching
  the course's calibration. The exercise's per-task times are stated.
- **L5-B12.** A new paragraph gives the Psalter's living liturgical use in three traditions: the
  synagogue (Ashrei three times daily, Hallel at the festivals, the psalm of the day, Psalm 30 at
  shacharit), the Rule of St Benedict and the four-week Liturgy of the Hours, and the Orthodox twenty
  kathismata. **And the numbering warning is now given before the reader is sent to look anything
  up**: the Greek and Latin psalters run one lower from about Psalm 10 to 147, so this lesson's
  Psalm 51 is their Psalm 50.
- **L5-B13.** "150 in the Hebrew numbering, which Protestant and most modern Catholic Bibles follow",
  with **Psalm 151** named and the observation that 11Q5, the manuscript in the lesson's own
  photograph, carries it in Hebrew. "Three books in a **Protestant** Old Testament", with **Sirach and
  the Wisdom of Solomon** named as the two more that Catholic and Orthodox Bibles carry, and Sirach
  identified as the closest ancient relative Proverbs has. **Wisdom of Solomon 3:1 is now named in
  Q4's explanation** as the answer another canon gives to the problem Ecclesiastes 9:5 poses. The
  YouTube-sourced "about a third" proportion is replaced by Fee and Stuart's figure from
  `SOURCES.md`, with a footnote saying no exact poetry figure is asserted.
- **L5-B14.** The Jewish reader is heard rather than described. **Psalm 19:8 is quoted in JPS 1917**
  with a Sefaria link, as what praying the psalms sounds like from inside the tradition whose book it
  first was. **Ecclesiastes 1:2 is quoted in JPS 1917** in the Sukkot paragraph, which fixes the 4.7
  breach of characterising a Jewish liturgical act by quoting a Christian translation. The book is
  called **Kohelet** there. ***m. Yadayim* 3:5** is cited for the rabbis' own dispute over whether it
  belonged, which replaces "that he is there on purpose is not argued" with something true and more
  interesting. **The Psalm 22 exercise item now carries the three-way sort**: what history
  establishes, that a Jewish reader reads it as complete without a second fulfilment, and what we
  hold by faith, on the model of lesson 4's Isaiah 7:14. Hebrew versification is explained in the new
  superscription callout.
- **L5-B15.** The imprecatory section now states the objection at full strength in its own
  subsection: grant every mitigation, and the psalm still asks God to bless the man who kills babies.
  **C. S. Lewis's "devilish"** is given, and **the Liturgy of the Hours' omission of Psalms 58, 83 and
  109 and of 137:7 to 9** is named with its actual pastoral reason. The lesson says which side it
  takes and that Christians who pray the Psalter daily have landed differently. **Q5 option A was
  rewritten** so it states the omission position as its holders state it rather than as "an older and
  lower stage of religion", and its explanation says outright that a reader who omits these psalms is
  not being unfaithful. The misconception entry was rewritten to match.
- **L5-B16.** Two `:::checkpoint` blocks of model answers now follow the exercise, covering all four
  tasks. **Exercise task 1 no longer locates and quotes the turn it asks the reader to find**, and
  task 2 was moved from Proverbs 3:1 to 10 to **3:1 to 8**, so it no longer sends the learner to
  verses the Proverbs 3 checkpoint has already worked and concluded.
- **L5-B17.** All six contested claims are now labelled. The Ecclesiastes frame: the lesson states
  that what the frame *does* with the voice is the live question, names **Michael Fox** with Provan on
  the other side, and says "we read the frame as governing, and you should know we hold that rather
  than found it". **Q4's key no longer turns on the contested half**; it reads "who is speaking comes
  first". The manufactured consensus is gone, replaced by a narrower statement of what both readings
  actually share. The heading "the counter-voices" is now "and what they do to Proverbs", and the
  claim is attributed to Longman as the reading this course takes. "It is the verdict of the book of
  Job" is now "that's how we read Job 42:7", with a parenthesis conceding that readers differ over
  whether the friends' fault was their theology or their misuse of a form. The translation superlative
  is replaced by a whole short section on the acrostics, which is the honest counter-example.
- **L5-B18.** A new paragraph gives **Gunkel's second half and Mowinckel**: that each *Gattung* had a
  *Sitz im Leben* in the cult, that Mowinckel read most psalms as liturgy before private devotion,
  that this is where "enthronement psalms" comes from, that it is argued, and that it **cuts against
  the lesson's own reading rule**, which is said out loud. **A new `:::callout` on the
  superscriptions** explains what they are, that this lesson omits them, that they are verse 1 in
  Hebrew, and that "of David" may mean author, collection or dedication, so the lesson no longer
  decides that question by silence. Ecclesiastes now gets 1:1 and 1:12's Solomonic voice, the Persian
  loanwords, the majority Persian or Hellenistic date and the traditional attribution, handed to
  lesson 10.
- **L5-B19.** Lesson 1's dangling forward reference is repointed from lesson 5 to **lesson 4**, where
  the Isaiah 53 material actually landed. One word.

**Facts.** F1 the checkpoint now sends the reader to **Psalm 42 and 43 together**, names the third
refrain at 43:5 and Psalm 43's missing superscription as the evidence they are one psalm, and points
out that stopping at 42:11 misses the resolution. F2 Psalm 88's count corrected and Q1 replaced. F3
Q6 replaced. F4 "after seven verses, six of grief and one already asking God to remember what Edom
did". F5 Psalm 94 restored to the corporate laments, in the lesson and at source. F6 **Elihu is now
in the Job checkpoint**, as the case where the rule returns nothing. F7 **the acrostics have their own
section**, using Psalm 119 and lesson 1's Psalm 9/10 case. F8 the false "lesson 9 returns to it" is
gone with the figure. F9 the Sukkot sentence now names the rites the source names and no longer
implies Shemini Atzeret falls within Sukkot. F10 the three over-long Fee and Stuart quotations are
trimmed to the fragments the research records, and **the Kugel paraphrase is attributed to standard
summaries** rather than to a book footnote 6 now states was not opened. F11 the claims beyond the
record are cut or hedged: the *hebel* count now says some commentaries give thirty-eight; "thirty-nine
chapters" is now "chapters 3 to 41"; the 11Q5 caption went with the figure. F12 the video-sourced
statistic is replaced.

**Media.** The Psalms Scroll figure is **removed**, because it taught nothing about reading poetry,
was never referred to in the text, and its caption's substance belonged to lesson 9 and was unsourced
here. Both video running times are cut, following lesson 4's and lesson 9's recorded resolution,
since YouTube is unreachable in this environment. The poetry video's title is corrected to
BibleProject's own, "How to Read Biblical Poetry".

**Voice and pedagogy.** All four "Here is" openers gone; the one remaining instance is mid-sentence.
All five pipeline-vocabulary headings renamed after their content ("Psalm 13, read badly and then
well"; "Proverbs 22:6, the verse that has hurt the most parents"; "Now do it yourself, on Psalm 22,
Ecclesiastes, Psalm 1, and four passages out of order"; ":::exercise Four tasks"). The one-line
morals are cut to two. The six unsourced superlatives are gone. Two of the three rhetorical-question
openers are gone. The wall paragraphs are broken up and the four sentences over 90 words are split.
**Psalm 13 is now quoted with verse numbers**, so the eleven back-references have something to point
at. **A targeted free-recall step was added** before the exercise, which this lesson was the only one
in the course to lack. **The exercise now interleaves**: a new fourth task gives four passages out of
order and asks only which question to ask first, mixing lesson 3's genre question with this lesson's
two. Exercise task 1 no longer says "mark in the margin". Q6's option C no longer rests on a verse the
stem does not quote. **The fake-parallelism distractor template**, which appeared in three items, now
appears once. **Five of six keys were the moderate option**; the replacements give at least two
options in each item the key's own hedging shape, and the absolutes are stripped from the distractors.
Keys now spread **2, 3, 1, 0, 2, 3**: all four indices, no run, no adjacent repeat. Two misconceptions
were added, "Job's friends are quoting Scripture, so their speeches are what the Bible teaches" and
"David wrote the Psalms and they're his diary", and the "violent psalms" entry was rewritten.

### Deliberately not fixed, with reasons

- **The split.** Marked with an HTML comment per BACKLOG 7b, and **the Psalm 137 section was moved up
  above the seam**, where its material belongs, which was the one thing three reviewers said a clean
  split would need. Not renumbered, not held. Fourth lesson in a row.
- **Both BibleProject running times, and the Psalms Scroll image.** Cut rather than corrected, because
  YouTube and Commons are blocked in this environment. Restore the run-times when a session can reach
  YouTube; the image belongs in lesson 9 if anywhere.
- **Fee and Stuart's page-level wordings and Hayes's lecture 21 quotations.** Recorded in
  `SOURCES.md` from the draft-time reading, not re-openable here. Kept as recorded and listed as
  fact-check debt.
- **The *hebel* count.** The lesson now says thirty-seven by Fee and Stuart's count and notes that
  some commentaries give thirty-eight, which is as far as this pass can honestly go without the book.
- **A visual diagram of parallelism.** Two reviewers asked for one, and it is the right idea for this
  lesson. Not done, because the chart slot was spent on repairing the psalm-type chart's truth
  problem, and because the trailing-space fix now makes the poems render as lines, which delivers most
  of the benefit. Recorded for a later pass.
- **Longman and Dillard beyond one Go deeper entry**, and Alter beyond one. Both were added; a fuller
  use belongs where the books are actually the subject.

### Requests for the shared files (added to the list from lesson 4, which is still open)

6. **`site/assets/styles.css` and `scripts/build.mjs`: poetry does not render as poetry.** `marked` is
   configured with `breaks: false` and `blockquote` has no `white-space`, so every quoted psalm,
   proverb and oracle in this course renders as a prose run-on. Lesson 5 works around it with trailing
   double spaces on 44 lines, which is fragile and invisible in the source. The real fix is a
   `:::verse` block in `renderBlocks` plus `white-space: pre-line`, and it would serve lessons 2, 4, 5,
   6, 9 and 10 at once. **This is the highest-value shared-file item of the six**, because it is the
   only one that changes what a learner actually sees.
7. **A lint rule for scripture quoted without a translation tag.** Two lessons running have carried
   ESV and NIV wordings inside quotation marks with no `(NET)` and no version named. A check for a
   `>` block or a quoted phrase followed by a verse reference without a translation tag would catch
   the class mechanically, which is worth more than catching each instance in review.

---
