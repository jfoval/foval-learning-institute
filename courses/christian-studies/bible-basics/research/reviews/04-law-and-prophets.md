# Reviews: The Bible, What It Is and How to Read It — 04-law-and-prophets

Append-only. Newest at the bottom.

## Lesson 4, "Covenant made, covenant enforced" — Stage 4 round 1, 2026-09-06

Five reviewers in fresh context: depth (Part 1), fact-check, neutrality (Part 3 and 3.7), voice
(style guide, 4.5, 4.6), pedagogy (Part 4).

**Verdict: not clean for publish.** Fifty findings, eleven blocking. This is the best-*researched*
draft in the course, and it is the worst for regression: **six blocking findings are items already
resolved earlier in this same course**, and one is a wording error that `SOURCES.md` records as
found and fixed two lessons ago. Lesson 3's review concluded that "the drafter is not reading the
resolved findings from previous lessons before drafting the next one." Lesson 4 is the proof.

The Isaiah 7:14 section is the strongest standpoint writing in the course so far and must survive
the revision almost untouched. The Deuteronomy 28 against Amos 4 mechanism is the best teaching in
the course, and it rests on a contested dating the lesson states as settled.

### Environment note, which constrains this round and the next eight

The session's network policy blocks `labs.bible.org`, `sefaria.org`, `biblegateway.com`,
`oyc.yale.edu`, `commons.wikimedia.org`, `newadvent.org`, `youtube.com` and `en.wikipedia.org` at
the proxy, from curl and from the fetch tool alike. So the `curl` recipe in 4.7 and in `SOURCES.md`
line 163 **does not work in this environment**. What does work: `raw.githubusercontent.com`, and web
search. NET, JPS 1917, Brenton, the Sefaria commentary exports and the public-domain confessional
texts were verified against mirrors on raw GitHub and cross-checked against the wordings this course
already verified from the bible.org API in lessons 2, 4 and 11. Items reachable by neither route are
marked **unverified in this environment** below rather than passed, and are the fact-check debt this
round leaves behind.

### BLOCKING

**L4-B1. The self-check prints its own answer in plain body text, for the fourth lesson running.**
Line 159: "Now do verse 19 yourself before reading on." Line 161, the next visible line: "Here's my
answer. It isn't renewed..." On a phone the answer is the next thing on screen. This is L1-V3,
lesson 2's line 254 and L3-B1 in the same shape, caught independently by four of the five reviewers.
It sits on the only gap in the only worked example that has one, and on objective 1's single
unaided performance. Compounded: the prompt is effectively a yes/no, and "And if it isn't"
pre-announces the answer, so even a reader who stops is not predicting anything (the L3-P5 class).

**L4-B2. The lesson's central mechanism rests on a contested dating asserted as settled, and the
lesson then denies in writing that it depends on it.** Line 185 hedges once, correctly: "Every
prophet had it, **or the tradition behind it**, in his bones." Every other statement drops the hedge:
"the prophets never stopped reading it" (101), "He is reading the treaty's penalty clause aloud"
(185), "pointing at the last line of a contract his hearers had signed" (254), the SVG's "Amos is
reading the covenant's own terms back to Israel" (251), and Q5's "Deuteronomy 28:41 **had already
named** captivity" (54). Then line 359: "a question this lesson deliberately left alone... **nothing
above depends on how you answer it**." That is false, and it is L3-N4's flagged phrasing verbatim
one lesson later.

On the majority critical view the Deuteronomic corpus is seventh-century, Amos preached around 760,
and the dependence runs the other way: Deuteronomy 28 and Amos draw on a shared stock of covenant
sanctions, with Deuteronomy 28's curse sequence closer to first-millennium neo-Assyrian treaty
curses than to the second-millennium Hittite ones the lesson cites. `SOURCES.md` contested question
2 classes Pentateuch dating as **argued**. This is the hunted defect in its most consequential form
yet: the three-way sort is applied with real care where the anticipated objection is Jewish
(295, 319, 322) and dropped entirely where the anticipated objection is a critical scholar's.

**L4-B3. "Every item in Amos's list is in Deuteronomy's" is false against the lesson's own block
quote, and the chart is built to conceal it.** Line 254 makes the universal claim. Line 213 quotes
Amos 4:11, "I overthrew some of you the way God overthrew Sodom and Gomorrah"; Deuteronomy 28 has no
Sodom sanction (29:23 does, a different chapter). The SVG's right column has five rows for six
quoted items, silently dropping 4:11. Separately the chart **uses 28:38 twice** (row 1 "little
harvest", row 4 "locusts") and **28:22 twice** (row 3 "blight, mildew", row 5 "disease, sword") to
manufacture a six-to-six match, so six rows are drawn from four distinct verses. Deuteronomy 28:38 is
one clause about locusts eating the seed and cannot also be the source for Amos 4:6's famine; the
`<desc>` compounds it by naming that item "famine", and Q2's explanation treats 28:38 as a locust
verse, so the chart contradicts the quiz.

**L4-B4. Every data label and every connector in the chart disappears on the dark theme, and the
validator cannot see it.** Lines 226 and 234, `<g font-size="11" fill="#0f2a4a">`, wrap eleven
labels; line 241, `<g stroke="#8b1e2d">`, wraps five connector lines. `scripts/build.mjs` matches
fills on `<text>`, not on a `<g>` wrapper, so all sixteen are invisible to `npm run validate`.
`styles.css` sets `--bg: #0c1220` in dark mode, giving roughly 1.3:1 for the labels and 1.9:1 for
the lines. What survives in dark mode is the frame and the punchline with the entire content gone.
Third SVG contrast failure in this course the linter could not see (L1-V2, L3-B5).
Separately every label is font-size 10, 11 or 12 against the 15 floor, and in a `0 0 360 330`
viewBox at 360px phone width (content box 328px, scale 0.911) they render at **9.1 to 10.9px**. The
two-column layout cannot survive legible type; the fix is a redraw, not a font bump.

**L4-B5. The chart completes exercise part 1 and prints its own conclusion before the reader is
asked the question.** The chart prints every pairing the exercise asks the learner to make, and its
footer prints the finding ("Five sanctions have already fallen. One remains") which line 254 then
delivers a second time as prose. Exercise part 1 concedes it: "the chart above will help, but do it
from the text". `OUTLINE.md` convention 6 requires practice on a passage the lesson did not cover;
both passages are quoted in full in the body. Objective 3's only practice is transcription. Same
class as L2-B1 (a diagram supplying the answer to its own assessment) and L3-V7.

**L4-B6. Two objectives are stated, modelled and tested cold, and a third block of teaching has no
objective at all. Fourth lesson running.** Objective 2 (near and far horizons) is taught at 277,
modelled once, and practised by no predict, no checkpoint and no exercise part, then tested cold in
Q2 and Q3. Objective 3 never puts a wrong reading in front of the learner outside the quiz.
Objective 4's Isaiah 53 half has a callout, no practice and no quiz item. This is L1-D4, L2-B4 and
L3-B4 a fourth time.
Worse: `OUTLINE.md`'s own fourth objective, "state the range of views on how the Old Testament
relates to the New in each view's own terms", was **dropped from the frontmatter while its 370 words
of teaching shipped** (133 to 145). It carries contested question 5, which lesson 2's fix record
explicitly handed to lesson 4, and it has no objective, no predict, no checkpoint, no exercise part
and no quiz item. Its one concrete application is deferred to lesson 7. It is the largest block of
teaching in the lesson with zero assessment, and at 400 words with no payoff it is the only stretch
that reads as padding under 1.3.

**L4-B7. Six sources are presented as authorities that `SOURCES.md` records as unopened or read only
in summary.** Ryrie (line 139, source 13; SOURCES 262 "the book not opened"), Gentry and Wellum
(141, source 14; SOURCES 263 "Book not opened"), Blaising and Bock (141, source 15; SOURCES 264
"Book not opened"), Mendenhall (92, source 5; SOURCES 255 "the article itself not opened"),
Westminster (123, source 11; SOURCES 261 "fetched as summaries", fact-check to confirm against a
printed edition), Radak (307, source 24; SOURCES 269 "read via summary", and the lesson's footnote
says "read at Sefaria (Hebrew)"). Go Deeper compounds it with an unsourced superlative about an
unopened book: Gentry and Wellum's opening chapters "are the clearest map of the frameworks section
above". The *content* checks out in every case, so this is a sourcing-integrity problem rather than
an error, which is the class `BACKLOG.md` names as the worst.

**L4-B8. The Tanakh is quoted from the copyrighted JPS, against 4.7.** Line 297 and source 20 quote
*Tanakh: The Holy Scriptures* (JPS 1985, gender-sensitive edition 2023) for Isaiah 7:14. 4.7 requires
**JPS 1917**, which is public domain, and `SOURCES.md` line 163 records the exact trap and the v3
API recipe that avoids it. This is the passage in the course where the Jewish reading is most
load-bearing, so it is the worst place to be quoting a text the institute's CC-BY-SA licence cannot
carry. Same class as L1-B1, which forced the whole course off the ESV.

**L4-B9. The quiz fails 4.3 as measured: two of six items use a case not in the text.** Q4 restates
line 131 (the parapet, same verse, same fix). Q5 restates line 254 and its key verse is printed in
the chart. Q6 is line 319 chopped into four options, and checkpoint 321 has already run the same
sort on the same verse. Q1 is misconception 3 (line 335) with Leviticus 11 substituted for shellfish.
Only Q2 (Joel) and Q3 (Hosea 11:1) are fresh. L1-P1, L2-B3 and L3-B6 a fourth time.
Shape tells: Q3, Q4 and Q5 each stack three, with the key the only option that hedges, the only one
without an absolute, and the only one that performs the method. Q2's option C carries the item's only
absolute ("the prophets never spoke about literal plagues in their own day") and hands a free
elimination. Option *lengths* are levelled much better than lesson 3's, which is real progress; the
drafter has learned to level length and not yet to level shape.

**L4-B10. Zero in-body links, against four direct "open this passage" commands and about twenty
passage citations.** The file's only three Markdown links are in Go deeper and Sources. Line 348 says
"in your own Bible", which concedes the defect and blocks the whole exercise for anyone without one.
Eleven of the 27 source entries name a free website (Sefaria, oyc.yale.edu, newadvent, opc.org,
ellopos) and give no address, so the lesson's own method, which depends on the reader checking Rashi
and Ibn Ezra, gives them one link to one verse. L1-V5 and L3-V6 a fourth time. Note the validator
does **not** warn here, because the Go Deeper links satisfy its check, so this passes
`npm run validate` and still fails 4.5.

**L4-B11. `minutes: 65` against a measured 115 to 155.** Four reviewers measured independently and
landed at 100 to 120, 115 to 125, 134 to 159 and 135 to 155. The arithmetic is self-evidently wrong
as shipped: the exercise's own headnote claims 35 of the 65, leaving 30 minutes for 7,100 words plus
13 minutes of video, five passages of external reading, six hidden blocks, free recall and a
six-item quiz with 630 words of explanations. The worst single estimate is inside the exercise:
"the others ten each" for a task that means scanning three chapters of Exodus for a law the New
Testament never mentions and then writing three comparative paragraphs.

### Facts wrong

**L4-F1. Brenton is misquoted, in the direction that favours the course's own reading.** Line 297
gives the Septuagint as "behold, **the** virgin shall conceive in the womb". Brenton reads "behold,
**a** virgin shall conceive in the womb". The definite article is the whole force of Matthew 1:23's
"The virgin", quoted fourteen lines later, so the alteration strengthens the Christian case with a
word Brenton does not carry. **`SOURCES.md` line 266 carries the same altered wording** and must be
fixed at source or lesson 11 inherits it. If the lesson wants the article it must argue it from the
Greek (ἡ παρθένος) and say so.

**L4-F2. "Note the present tense in both: she is already pregnant" is false against the course's own
Bible.** Line 297. NET reads "this young woman **is about to conceive**", an imminent future; JPS
1917 reads "shall conceive", also future. Only the 1985/2023 JPS the lesson should not be quoting
says "is with child". Once L4-B8 is fixed the sentence is wrong about both texts, and it collapses
the contrast the paragraph is built on, since the Septuagint is then offered as the *future*-tense
reading against a present tense that no longer exists. Rashi says the opposite in the same breath,
on הרה at 7:14: "This is actually the future, as we find concerning Manoah's wife."

**L4-F3. The Rashi quotation at Isaiah 53:3 is not what Rashi says.** Line 326 and source 26 give
"characterizes all Israel as a single entity". The Judaica Press text Sefaria carries reads "he
**mentions all Israel as one man**", and cites 44:1 as well as 44:2. The substance the lesson draws
is right; the quoted string is in no edition found. **`SOURCES.md` line 271 carries the same invented
wording.**

**L4-F4. The Hayes *riv* quotation is used for the reverse of what it says.** Line 263, after
arguing that **Amos 5:21 to 24** is a lawsuit: "Hayes flags the form in Hosea and Isaiah **as well**:
'he's now the first to couch his charge in the form of this formal *riv*, or lawsuit.'" In lecture 17
that sentence is about **Hosea**, and its point is that Hosea is *the first* to use the form, which
on her account excludes Amos, the prophet the lesson has just applied it to. "As well" inverts her
claim into corroboration. The pronoun "he's" has no antecedent anywhere in the lesson. Hayes locates
the *riv* at Hosea 4:1 to 3, which is the passage the lesson's own checkpoint uses without crediting
her. The quotation is also **not recorded in `SOURCES.md`**, which logs from lecture 17 only "the
*riv* (lawsuit) form".
On the substance: Amos 5:21 to 24 has neither summons nor witnesses, and the classic *riv* passages
(Micah 6:1 to 8, Hosea 4:1 to 3, Isaiah 1:2 to 20) have both. The lesson's own checkpoint and
exercise use the genuine cases; the body's example is the odd one out.

**L4-F5. Isaiah 8:8 is made to say the opposite of what it says.** Lines 295 and 317: Immanuel comes
back at 8:8 "as the reason Judah will survive" and is "invoked at 8:8 over the whole land". NET 8:8
is the Assyrian flood reaching Judah's neck; whether the outspread wings are the invader's or God's
is argued, that the verse sits inside the judgment oracle is not. 8:10 does carry the reassurance,
and line 311 rests on 8:10 alone, correctly.

**L4-F6. "Three words" is five.** Line 177: Fee and Stuart's chapter title "says it in three words:
'Enforcing the Covenant in Israel'". The parallel claim about "THINK ORACLES" being two words is
correct.

**L4-F7. Exercise task 1 cannot be done as set.** Line 348 assigns Deuteronomy 28:15 to 24 and asks
the learner to match every Amos sanction to its Deuteronomy verse. The locusts of Amos 4:9 are at
28:38 and 28:42, outside the assigned reading. A learner who does exactly what they are told fails
the task and blames themselves.

**L4-F8. The predict answer claims 28:15 to 24 contains locusts.** Line 196, "almost nobody thinks
of... locusts. The list below has all of them." 28:15 to 24 has blight and mildew, drought and
disease, and no locusts; only the bullet list, which silently jumps to 28:38 to 42, has them.

**L4-F9. Amos 4:7 is bulleted as carrying the refrain.** Lines 208 to 215 say the list is one "each
closed with the same refrain" and bullet 4:7. In the NET the drought refrain closes **4:8**. The SVG
gets this right ("4:7-8 rain withheld"), so the prose contradicts the chart.

**L4-F10. Two video running times are asserted without support.** "Six animated minutes" (168) and
"Seven minutes" (272). `SOURCES.md` line 276 records both videos verified "by YouTube oEmbed", which
returns title and channel and **no duration**. Lesson 9 hit this exact wall and its recorded
resolution was to say "long" rather than print a figure. Both IDs do resolve to BibleProject videos
with the titles given. **Unverified in this environment.**

**L4-F11. Q6's explanation settles what the lesson's own checkpoint calls argued.** Line 63 says
options A and B are "matters of record" and that "Jews and Christians agree on what each says",
where option B glosses *parthenos* as "meaning virgin". Checkpoint 321 says the opposite, and says
it well: what the translators meant by it is argued, and Hayes calls it a mistranslation. The quiz
asserts agreement where the body has just documented disagreement, in the direction that favours the
course's position.

**L4-F12. Two non-NET wordings in prose describing NET passages.** Line 112, checkpoint answer, "the
nations left as **thorns**": NET Judges 2:3 reads "They will **ensnare** you and their gods will
**lure you away**"; "thorns in your sides" is ESV/KJV, and the stem two lines above correctly says
"snare". Line 82, "his **treasured people among the nations**": NET Exodus 19:5 reads "my **special
possession out of all the nations**"; "treasured possession" is ESV, and the preposition shifts the
sense from *chosen out of* to *treasured while among*.

**L4-F13. Deuteronomy 28:21 is truncated mid-clause without an ellipsis.** Line 201 ends "until he
has completely removed you from the land"; NET continues "you are about to possess". The cut turns a
promise about a land not yet entered into a bare removal.

**L4-F14. Untagged and unfootnoted scripture.** Line 265 quotes Hosea 6:6 as "I want mercy and not
sacrifice" with neither a marker nor a `(NET)` tag. The wording is correct NET and the references
(Matthew 9:13 and 12:7) are right. Mark 7:19 at line 119 shares marker [9] with Matthew 5:17 and only
Matthew carries the tag.

**L4-F15. Isaiah 7:14 and 7:16 are block-quoted with verse 15 dropped and no ellipsis or note**
(289 to 291).

**L4-F16. Mendenhall's citation lacks the issue number** (vol. 17, no. 3, September 1954), and the
page range is given as 49 to 76 by the University of Chicago Press record against the lesson's 50
to 76.

**L4-F17. Matthew 2:15 in quiz Q3's stem is ESV/NIV wording, in an item whose whole subject is what
Matthew's quotation says.** Line 28 prints "Out of Egypt I called my son". NET Matthew 2:15 reads:
"In this way what was spoken by the Lord through the prophet was fulfilled: **'I called my Son out
of Egypt.'**" Word order and capitalisation both differ. NET Hosea 11:1 reads "and **I summoned my
son out of Egypt**", so the stem's wording matches *neither* verse, which blunts the item's own point
that Matthew and Hosea are the same sentence read two ways. Conversion debris of the L2-F1 class, in
a quiz stem. Fix: quote Matthew as the NET has him and give Hosea's own wording alongside, which
makes the colleague's objection sharper rather than weaker.

**L4-F18 (raised, then withdrawn; recorded so it is not "fixed" by mistake later).** Isaiah 7:14's
opening clause was challenged during this round: the lesson prints "For this reason **the Lord**
himself will give you a confirming sign", and a web search of Biblia's NET returns "For this reason
**the sovereign master** himself". **The lesson is correct.** "The sovereign master" is **NET1**
(1996/2005), which rendered *Adonai* that way and *tseva'ot* as "the LORD who commands armies";
**NET2 (2019)**, the edition this course cites, changed both to "the Lord" and "the Lord of Heaven's
Armies". Two independent mirrors agree with the lesson verbatim, and the whole-book diagnostic
confirms the edition: in Isaiah, "Heaven's Armies" 62 hits, "sovereign master" 0, "who commands
armies" 0. Biblia's online NET is the older text. **Do not "correct" this verse.**
One cheap fix it does argue for: Isaiah 7:14 hangs off footnote **1**, which cites the NET
generically, while footnote **17** is the one that names the 2nd edition. Since NET1 and NET2 differ
at exactly this verse, footnote 1 should name the 2nd edition too, or the next reader repeats the
search and reaches the wrong conclusion.

### Neutrality (3.1, 3.2, 3.3, 3.7)

Perspectives checked: Jewish (Tanakh as Tanakh, JPS 1917 against the 1985/2023 NJPS, Rashi, Ibn Ezra,
Radak, Rashi on 53 and Targum Jonathan, Justin's Trypho as a Christian-authored construction, the
halakhic reality of the 613 including Nachmanides' *hassagot* and the Behag's rival enumeration,
mitzvot inoperable without the Temple, Oral Torah, and the Orthodox/Conservative/Reform difference
over binding ritual mitzvot); dispensationalist and covenant theologian; Catholic and Orthodox;
other Protestants the "range" omits (Lutheran law and gospel and the three uses, Anglican Article
VII, Anabaptist, theonomy, New Covenant Theology); critical scholar (Mendenhall against McCarthy and
the first-millennium Assyrian parallels, Wellhausen on the legal corpora, Deuteronomy 28 against
Amos, redaction in Amos); conservative evangelical inerrantist (what has been conceded on *almah*,
Kaiser's single-meaning position, Motyer and Young on the sign to the house of David); lay devotional
reader (the 3.3 irony check lesson 3 failed).

**L4-N1** is L4-B2.

**L4-N2. The range of Christian proposals is Reformed evangelicalism plus one medieval Catholic used
as a historical exhibit. Third recurrence.** Line 119 promises "the real range". Grepped: "Catholic",
"Orthodox", "Catechism", "Lutheran", "Anabaptist", "patristic" and "church fathers" appear **zero
times**. What is given is Aquinas handed straight to Westminster, Westminster, Fee and Stuart,
covenant theology (Westminster again), Ryrie, Gentry and Wellum, Blaising and Bock. One confessional
family. A Catholic reader will notice that the threefold division the lesson calls "the oldest and
most widespread Christian tool" is **current magisterial teaching** (*Catechism* 1961 to 1974 on the
Old Law) presented as a Presbyterian instrument with a medieval provenance; an Anglican that Article
VII states the same division in a confession never named; a Lutheran that law and gospel and the
three uses, one of the two great Protestant answers to this exact question, is absent entirely.
L2-N6 and L3-N7/N10 for the third time, and lesson 2's fix pass already established the precedent
and fetched the sources (`SOURCES.md` 160, 188, 344).

**L4-N3. The Christian reading of Isaiah 7:14 is made without a single named Christian exegete,
while the Jewish reading gets four. 3.7's other half fails.** The Jewish section quotes Rashi, Ibn
Ezra and Radak with dates and places, plus Trypho, plus Hayes. The Christian section (315 to 317)
names nobody and quotes nobody, then closes "we should stop saying it is", which is a rebuke to
fellow Christians delivered in the teacher's voice while the tradition being rebuked is never allowed
to state its case. Missing: the lexical argument (no instance of *almah* in the Hebrew Bible
demonstrably denotes a married woman; Rebekah is *almah* at Genesis 24:43 and *betulah* at 24:16);
the plural address of 7:13 to "the house of David" against the singular of 7:11, which is the
standard conservative argument that the sign exceeds Ahaz; and 7:11's "deep as Sheol or high as
heaven" as a sign meant to be extraordinary. Named primary sources run 5 to 0.
3.7: "a lesson that softens the faith's case fails as surely as one that asserts a contested claim
as settled."

**L4-N4. Hayes is the closing authority inside "The Jewish reading", fusing critical method with
Judaism for the fourth time.** Line 309. "Teaching from the critical side" is an improvement on
lessons 1 and 2, but the placement still makes a historical-critical verdict the capstone of a
section headed "The Jewish reading". Hayes is not a spokesperson for Rashi, Ibn Ezra and Radak, and
her "mistranslation" verdict is a philological judgement of a kind the medieval commentators did not
make in those terms. L1-N4, L2-N8, L3-N9. Separately line 92 has her "teaching the Hebrew Bible at
Yale"; she retired in 2023 and `SOURCES.md` 168 instructs "who taught". Lessons 1 and 3 comply; third
recurrence. Go Deeper's "a critical scholar who never asks you to believe or disbelieve" is the same
conflation again.

**L4-N5. The 613 are handled as devotion and never as halakhah, and the Jewish reader is spoken for
rather than heard.** Line 87 "the arithmetic itself is a small sermon"; line 149 "not a burden tallied
but a treasure inventoried... they hear the wrong question being asked about the right book". Three
problems. (a) The halakhic reality is absent: that the count is disputed inside the tradition
(Nachmanides' *hassagot*, the Behag's enumeration, Ibn Ezra's own doubt that the number is more than
homiletical), that a large proportion of the 613 are inoperable without the Temple, and that the
operative category is halakhah worked out through the Oral Torah rather than a list. (b) The reader
is spoken for, in the drafter's voice, with no Jewish source behind the sentence, and Psalms 19 and
119 are invoked as "Israel's own voice" and neither is quoted. This is L3-N9, resolved one lesson
earlier by quoting JPS 1917 with a Sefaria link. (c) "A Jewish reader" is a monolith: line 163's flat
"Both verses are commandments; both are kept" is Orthodox practice, and a Reform reader would not
recognise it as a description of what they believe, which is 3.2 failing.

**L4-N6. Q1's explanation attaches a heresy label to a position serious Christians hold.** Line 18:
"Option A is Marcion's move in modern dress." Option A is "The whole Old Testament law was abolished
at the cross". Classical dispensationalism does teach that the Mosaic law as a code terminated and
that the believer stands under the law of Christ; New Covenant Theology holds something close. The
lesson has just said at 145 that all four frameworks are reasonable. Marcion's actual claim was that
the Old Testament's God is a different God, which is a different thing. The misconception section at
333 handles this well and the quiz contradicts it.

**L4-N7. Q3 grades one side of contested question 5 correct and marks a mainstream evangelical
position wrong without naming it.** Option B ("Scripture cannot read a verse in a way its author
never intended") is a compressed but recognisable statement of the single-meaning position, which is
Kaiser's published view and is what a dispensationalist's second *sine qua non* is meant to produce.
The lesson grades it incorrect without ever naming it as a position. A dispensationalist reader is
told at 145 that his framework is reasonable and at 36 that its hermeneutic gets the answer wrong.
L2-B5 recurring, in the covenant direction, in a quiz key.

**L4-N8. The Hittite treaty parallel is given as settled, in the direction that favours an early
date.** Lines 92 to 103 hedge on completeness ("The form is not exact. It is recognisable") and not
on identification. The competing position, that the closest parallels for the curse section are the
first-millennium neo-Assyrian vassal treaties (Esarhaddon's succession treaty against Deuteronomy 28
is the standard comparison), is not mentioned, in a lesson whose method is to label what is argued
and whose treaty argument does load-bearing work for L4-B2's mechanism.

**L4-N9. Mild irony aimed one way only (3.3), the lesson 3 tic returning without its counterweight.**
"Verse 8 is quoted on posters" (350) is L3-N13's "a different story from the one on the bookmark",
which lesson 3 answered with an explicit counterweight ("None of that is a sneer at the bookmark").
Also line 263, "the reader who wants to may hear Christianity or modern secular justice in it", which
dismisses by construction rather than by argument and quietly writes off Amos 5:24's long use in the
civil rights tradition without engaging whether that is a legitimate far-horizon application. Line
256 "Now the oracle everyone quotes" and line 74's "quoting Leviticus at their neighbours while
eating shrimp" are the same register. Line 165's "rummaging in it" talks down to the reader the
lesson has just described.

**L4-N10. Trypho is a Christian author's Jewish interlocutor**, and line 309 rests "The Jewish reading
has been stated, in those terms, for as long as there have been Christians to state it to" on Justin's
literary construction. One clause fixes it. (Worth using: Trypho's own candidate is Hezekiah, which
is Radak's, so the loop closes.)

### Depth (Part 1)

**L4-D1. Ten researched items gathered and unused.** In order of cost:
1. **Köstenberger and Patterson's hermeneutical triad.** `SOURCES.md` 14 names it as the
   graduate-level check on the genre lessons; lesson 3's fix record deferred it with the words
   "Recorded for the lesson 4 draft". **It did not land**, in body, sources or Go Deeper. It is also
   the natural spine here: history (the treaty world, 734 BC), literature (oracle and lawsuit form),
   theology (what the covenant is for) is the triad, and the lesson performs all three unnamed.
2. **Beale's observation** that the Old Testament authors did not exhaustively grasp what they wrote,
   recorded in contested question 5 as **the point all four frameworks agree on**. Unused, which
   makes the Isaiah 7:14 case weaker than the research supports: the fuller sense is argued as the
   course's own faith reading when the research records it as common ground.
3. **Jeremiah 31:31 to 33**, listed in source 9 and never quoted, though proposal 2's entire test
   turns on what the new covenant renews. `SOURCES.md` 193 records the NET wording as already
   verified for lesson 2.
4. **Longman and Dillard**, assigned by `OUTLINE.md` 79. Entirely absent, not even in Go Deeper, in a
   lesson that sends the learner into Deuteronomy 28, Amos 4 and 5, Micah 6 and three chapters of
   Exodus with no way to get their bearings.
5. ***The Jewish Study Bible*** note on Isaiah 7:14, assigned by `OUTLINE.md` 79 as "the Jewish
   reading in its own words". Unused, after being added to Go deeper as the fix for exactly this in
   lessons 1, 2 and 3. The medieval commentators are a good substitute for the historic reading and
   not for how Jews read the verse now, which is what objective 4 asks for.
6. **Duvall and Hays** used more weakly than the research supports: assigned for "crossing the river,
   the width of the covenant difference", annotated "best for: a teachable procedure", and appearing
   only in Go Deeper. The covenant difference between Sinai and the reader is the widest river in the
   Bible and is this lesson's subject; the law half offers two proposals and no steps.
7. **Hayes's lecture on biblical law** (the three legal corpora) unused, so the law half carries no
   critical-side voice at all while the prophets half is built on Hayes throughout. A learner sent to
   Exodus 21 to 23 is never told they are opening a distinct legal collection.
8. **Deuteronomy 29:1 and the Moab setting**, recorded at `SOURCES.md` 191 as the correction to
   lesson 2's L2-F6 and fetched at Stage 1 *for lesson 4*. Unused: the lesson presents Exodus 20 and
   Deuteronomy 28, 30 and 31 as one treaty document and never says Deuteronomy is a renewal delivered
   forty years later on the plains of Moab, which is both the researched correction and the fact that
   makes the treaty-form argument stronger, since Deuteronomy is where the form is most complete.
9. **Maimonides' first positive commandment** and **Rav Hamnuna's gematria** from the same Makkot
   passage, both recorded, both unused; either would give the 613 predict a specific detail.
10. **JPS 1917 on Sefaria** with the exact API recipe at `SOURCES.md` 163. Unused; see L4-B8.

**L4-D2** is the second half of L4-B6 (the frameworks section).

**L4-D3** is L4-F4 (Amos 5:21 to 24 called a lawsuit).

**L4-D4. The near and far horizon rule is not usable on a passage the lesson never covered.** Line
277 states the rule and supplies one decision procedure: "the New Testament is the Christian's guide
to where it is." That answers nothing for the ninety-five percent of oracles the New Testament never
quotes, which is the proportion the lesson itself gives. Compare the law half, which hands over two
named tests. The three steps the lesson performs on Isaiah 7 and never writes down: fix the near
horizon from the text's own time markers; ask whether a New Testament writer takes it up and what
pattern he reads; and, if none does, the far horizon is not yours to assert. The third is the
discipline the lesson teaches everywhere and never states.

**L4-D5** is L4-N8.

**L4-D6. The Jewish reading of the law is stated at full strength and shown with nothing.** See
L4-N5(b). The Isaiah 7:14 section three pages later shows exactly how to do it.

**L4-D7. The exercise has three written tasks, a five-item free recall, and not one model answer.**
"Then check" (354) with nothing to check against. Part 3 is the hardest task in the lesson and
carries objective 1's real transfer. Lesson 2 was faulted for two missing answers and lesson 3 for
four; both were fixed with `:::checkpoint` blocks after the exercise, because the renderer will not
nest blocks.

**L4-D8** is L4-B10. **L4-D9** is L4-B11. **L4-D10** is L4-N4.

**L4-D11. Go Deeper has five entries where 1.2 asks for two to four**, and one of them describes an
unopened book. Cutting that entry fixes both.

### Voice (style guide, 4.5, 4.6)

Em dashes **0**, en dashes **0**, banned AI vocabulary **0** (all 55 grepped, three false positives:
"testament" only ever in "Old/New Testament", "highlight" never as a verb, "transform" absent),
banned sentence shapes **0** for the named strings, hedging habits **0**, salesy vocabulary **0**,
exclamation marks in teacher prose **0**. Four lessons running on the em dash.

**L4-V1. Contractions run 1 in 249, against the course's fixed 1 in 55.** 24 in 5,979 words of
teacher prose. Lesson 3 runs 81 in 4,450 and was recorded as the repair; lesson 2 was faulted at 1 in
5,400. This is 4.5 times sparser than the range, so it is a regression, not a repair; reaching the
range needs about 85 more. **The frontmatter is at zero: 1,596 words of quiz stems, options and
explanations contain not one contraction**, and six explanations averaging 107 words each with none
is the most machine-sounding block in the file. Worst stretches, all carrying the hardest content:
the Jewish-reading paragraph (149), the four frameworks (135 to 141), the whole of "Two horizons",
and the Christian-reading case (317).

**L4-V2. Seven "Here is / Here's" openers**, six of them section or paragraph openers (66, 92, 161,
193, 277, 315, 319). Course trajectory L1 six, L2 five, L3 zero after its fix, **L4 seven**. The
repair reversed.

**L4-V3. Twelve paragraphs end on a compressed one-line moral**, double lessons 2 and 3 (78, 103,
155, 165, 185, 263, 265, 268, 331, 335, 337, 341). Keep two: 185 (the crystal-ball beat earns it) and
335 (it is the argument compressed, not a flourish). 268 is the exact class lesson 3 was faulted for
("once you can see it you'll see it everywhere"). 337's "Think oracles." reuses a Fee and Stuart
quotation as the lesson's own punchline 156 lines after quoting it properly.

**L4-V4. Six learner-facing headings in pipeline vocabulary**, fourth recurrence: "## Worked example
1/2/3", "## Practice", ":::exercise Do it now", and "Here is the mechanism" in the body. Lesson 3's
fix pass established the pattern ("David and Goliath, read three times"; "## Now do it yourself, on
Jacob and Esau") and lesson 4 did not read it.

**L4-V5. Six unsourced superlatives** (84, 123, 175, 196, 256, 279). 84 and 279 are also sales.

**L4-V6. Three rhetorical-question openers** (109, 143, 265) where the guide allows one. Keep 109; a
real student asks it.

**L4-V7. The figure is never referred to in the text**, against 4.5, and its caption honestly concedes
that the Treaty of Kadesh is a **parity** treaty while the section argues from the **suzerain-vassal**
form, so the one artefact shown is the form the argument is not about. It is not decoration; it is
adjacent evidence next to a claim it does not support.

**L4-V8. The Hosea checkpoint (267) buries its question behind a 95-word quotation**, about 18 phone
lines before the reader learns what to do with it, and the hidden answer then refers back to five
details inside it.

**L4-V9. The lawsuit form is given three incompatible ways in one lesson**: "summons, charge,
evidence, verdict" (263), "summons, charge, sanction" (268), and "summons, witnesses, charge, verdict"
(350). **Witnesses are examined in the exercise and never taught** in the prophetic section; they
appear only in the treaty section. Micah 6:1 to 2 does call the mountains as witnesses, so the
exercise is right and the teaching is incomplete. The exercise's own glosses collide: "the summons
(who is called to hear?)" and "the witnesses (who is asked to listen?)" are the same question twice.

**L4-V10. The 613 predict is a cost-free trivia guess** with no reasoning path, the L1 "how many
books?" class. Replace with a predict the reader can reason toward that also seeds the Amos section:
which of Deuteronomy 28's two sections is longer, blessings or curses, and by how much (14 verses
against 54).

**L4-V11. Video 2's caption makes it prerequisite to the Micah exercise** ("worth watching before you
try"), against 4.5's "videos are supplementary", and it points at the real gap in L4-V9.

**L4-V12. Ten read-aloud failures**, worst first: "Here is the mechanism, and it's the part I most
want you to see for yourself" (193); "We hold a view, and the course says so once here" (145), which
is the most important sentence in the section written in the third person about itself; "That is the
whole lesson" (78); "the most useful thing you can carry into any page of Leviticus" (84); "That is
the difference between reading the law and rummaging in it" (165); the 62-word sentence at 74; "the
hardest case in the book" (279); the three-sentence rhythm at 103; "Think oracles" (337); and the
55-word free-recall sentence at 354, which is five demands in one breath and is unreadable aloud.

**L4-V13. Five wall paragraphs at phone width**: 317 (130 words structured "First... Second...
Third... Fourth, and this is the heart of it", with the most important sentence buried at word 95);
263 (190 words, the longest in the lesson, carrying the *riv* form, the Hayes quotations, three Amos
cross-references and Leviticus 23); 149 (145 words, zero contractions); 354; and 109.

**L4-V14. Predict 195's answer telegraphs** by naming blight, mildew and locusts before the list
arrives. **L4-V15. Checkpoint 267's answer elaborates past its own prompt**, adding "you can hear the
Ten Commandments in it", a fourth thing the learner was not asked for.

### Pedagogy (Part 4)

**L4-P1** is L4-B6. **L4-P2** is L4-B1. **L4-P3** is L4-B5. **L4-P4** is L4-B9. **L4-P5** is L4-D7.
**L4-P6** is the shape-tell half of L4-B9. **L4-P11** is L4-B11. **L4-P14** is L4-B10.

**L4-P7. The outline's spaced review did not ship.** `OUTLINE.md` 81 specifies "the covenants
(lesson 2); the basic rule (lesson 3), now applied to a prophet's own audience". What shipped is two
mentions in prose. The five covenants are never retrieved: the lesson works Sinai and the new covenant
for 8,000 words without once asking the learner to place them among the five they learned. **The basic
rule is never stated in the body at all**; a learner meets it for the first time in the Connections
paragraph, after the practice, or in Q3's explanation. 4.2: spacing is retrieval, not mention.

**L4-P8. Objective 1's practice sits 180 lines after its teaching**, behind two prophets tasks. The
law half ends at 169; exercise part 3, its only real practice, is at 352. A learner who has spent
forty minutes on Amos and Isaiah since is not practising, they are recovering.

**L4-P9. The exercise never interleaves**, because every part announces which tool to use. The one
skill the lesson does not practise is the one a reader needs: given a passage, decide *which* question
this is. Lesson 2's and lesson 3's fixes both added a mixed part; lesson 4 has no equivalent. This is
the cheapest fix in the review and the course has needed it three times.

**L4-P10. Objective 4 bundles four performances**, two of which are never assessed. Nowhere does the
learner have to *produce* the Jewish reading of anything, which is the objective's leading verb, and
**Isaiah 53 is in the objective, taught in a callout, and neither practised nor tested**.

**L4-P12. Split candidate: yes, and the lesson marks its own seam.** After the Biblical Law video
(169), before `## What a prophet was` (171), whose first line is "Now the other half." Part A (law)
is about 2,805 words and holds objective 1; Part B (prophets) is about 3,300 to 3,700 and holds
objectives 2, 3 and 4. Nearly even, which is unusual. Part A would need its objective actually
practised (which L4-B6's fix supplies), the frameworks used rather than stated, and a closing that
hands off; Part B would need the treaty form and Deuteronomy 28 re-established in two or three
sentences and its own opening hook. Note the seam costs more here than in lesson 3, because the
lesson's thesis *is* the join. Third lesson in a row to hit it.

**L4-P13. Two named misconceptions are the author's, and four a beginner actually holds are
missing.** "The near horizon is the only horizon" (341) is framed by the lesson itself as "a critical
scholar's reading"; no beginner arrives holding it. It is misconception 1 pointed the other way, and
it is the L3-P6 finding recurring. Keep the paragraph, which is good and is 3.7 running in the
direction a drafter never polices, but move it into "Two horizons" as the mirror of the rule and stop
calling it a thing people get wrong.
Missing, in order of how often a beginner holds it: **"the law was an unbearable burden the Jews
groaned under, and Jesus freed them from it"** (the lesson argues against it beautifully at 149 and
never names it, so a reader who holds it does not know they have been contradicted); **"the Old
Testament God is wrath, the New Testament God is love"** (the likeliest reaction to 2,000 words of
covenant curses; Marcion appears in one clause under a different heading); **"the Ten Commandments
are obviously a different kind of law from the rest"** (taught against at 125, never named); and
**"prophecy is a code to be decoded against the newspaper"** (distinct from "prophecy means
prediction", and it is what Q2 tests, so a quiz item tests a misconception the list does not name).

### For the assessments folder, which is still empty (4.4)

Recorded here so lesson 4's contribution is not lost when the assessments are built. Three item
types this lesson uniquely supplies: the sabbath discrimination item below, which is the only case
where the two Christian proposals give opposite verdicts and so cannot be answered by reciting
either; an unlabelled-passage item interleaving lessons 3, 4 and 5, asking for each of four passages
whether the first question is *what kind of writing is this*, *what did its first hearers hear*, or
*is this stipulation renewed*; and a three-way sort applied to a claim from a different lesson.
Project: take one prophetic oracle the course has not worked (Micah 6, Habakkuk 1, Malachi 3) and
produce a reading that states the near horizon first with the situation sourced, traces every
sanction or charge to the covenant text it comes from, says whether a far horizon is claimed and on
whose authority, and labels every claim established, argued, or held by faith. Applied exercise: two
200-word replies, one to the shellfish objection and one to a post arguing Joel's locusts are
helicopters, both graded on whether a principle is shown rather than a verdict given.
**Gap worth naming for the course:** nothing yet assesses the ideological Turing test as a skill the
learner can *perform*, which is what 3.7 leans on hardest. Lesson 4 is where it is taught.

### What is working, and must survive the revision

- **Worked example 3, Isaiah 7:14, entire.** The best-built worked example in the course. It grants
  the near horizon before making the Christian case, lets Rashi, Ibn Ezra and Radak speak in their
  own words with dates and places, quotes Trypho so the Jewish reading is not made to look modern,
  quotes Hayes calling the Greek a mistranslation without flinching, and then says in the teacher's
  own voice: "That is a faith reading. It is not what the Hebrew obviously means, and we should stop
  saying it is." The three-way sort at 319 and "If either can't, tell us." Do not soften a word of
  it; the fix for L4-B2 should be built to this template.
- **The Isaiah 53 callout**: Rashi's textual reason given, Isaiah 41 to 49 cited as its root ("a
  reading with roots in the text, not a dodge"), Targum Jonathan quoted to show the tradition is not
  one voice, and "We do not hold that only a hostile reader could miss it."
- **The Septuagint checkpoint (321)**, the best-designed self-check in the lesson: it asks the learner
  to sort a sentence rather than recall a fact, and names "proves" as the word doing too much work.
- **The Deuteronomy 28 against Amos 4 mechanism**, once L4-B2, B3, B5, F7 and F8 are fixed. It is a
  real mechanism drawn from texts actually fetched in the NET at Stage 1, and it makes "prophecy
  means prediction" collapse on its own rather than by assertion.
- **The Fee and Stuart percentages handled honestly**: "They give no source for the figures and
  neither will I; treat them as an experienced reader's rough count rather than a measurement. But
  even if the real numbers were double, the picture would stand." That is 2.4 in the teacher's voice
  and it is why the new Q5's option D can be a distractor at all.
- **Hayes's hedge at 103**, "no one passage contains all of the elements... enough of them scattered
  around to suggest it as a model", followed by "That is the honest strength of the claim." L4-B2's
  fix should extend this sentence rather than replace it.
- **Both proposals given with their weaknesses admitted**: "the text of Leviticus doesn't come with
  those labels", "The reasoning is good. It is still reasoning, not reading", and the note that the
  covenant test needs a whole New Testament in hand.
- **Line 145's labelled standpoint paragraph**, "We hold a view... A Christian may reasonably hold any
  of the four." This is the fix for L2-B5 landing correctly.
- **The Jewish-reading section's refusal of the lesson's own framing** on its own behalf: "they hear
  the wrong question being asked about the right book", followed by "We do not share that reading."
- **Quiz Q2 (Joel) and Q3 (Hosea 11:1) as cases.** Both fresh, both conversations a learner will
  actually have. Q3 is the hardest and best item in the course so far; only its option set changes.
- **The key spread B, D, A, C, B, D**: all four indices used, no run, no repeat of the previous item,
  and the first lesson in this course to put keys on D at all, which closes the free-elimination leak
  found at L2-B3. Option lengths are levelled far better than lesson 3's (Q2's spread is 15
  characters across four options). Whatever the drafter did differently, keep doing it.
- **The misconception section**, especially "The near horizon is the only horizon", which runs the
  correction in the direction a Christian drafter is least likely to police, and the shellfish
  answer's concession that "the sorting is done to keep the laws people already wanted to keep... is
  a fair challenge to any particular reader".
- **Q4's two-halves structure** and its explanation crediting Westminster's general-equity clause
  against a distractor built on Westminster's own category.
- **The figure's caption**, which carries credit, licence, institution and date and honestly declares
  the Kadesh treaty a parity treaty. The caption is right; only the text reference is missing.
- **Video 1's caption**: "Watch it after this section, not instead of it; the video does not cover the
  range of Christian proposals." That is how a 4.5 video caption should read.
- **The SVG's dashed-line convention**, which encodes fallen against not-yet by dash pattern and
  restates it in words rather than resting on colour. The one thing the chart gets right; carry it
  into the redraw.
- **All 27 footnotes are cited from the body.** No orphans, no dangling sources, better than lesson 1
  managed.

### Verified correct, so it does not get "fixed" later by mistake

Every NET quotation except the truncations at F12 and F13 and the open question at F17: Leviticus
19:18 to 19; Amos 5:21 to 24; Deuteronomy 28:15, 21, 22, 23 to 24, 38, 41, 42; Deuteronomy 30:19;
Amos 4:6, 7, 9, 10, 11, 12 and the refrain; Isaiah 7:9, 7:16; Isaiah 8:3 to 4, 8:18; Matthew 1:23;
Matthew 5:17; Mark 7:19; Galatians 5:14; Hosea 4:1 to 3; Matthew 9:13. Every verse reference in the
body. Aquinas ST I-II q. 99 a. 4 verbatim with honest ellipses. **Westminster 19.3 to 19.5 confirmed
against the text, so `SOURCES.md` line 261's open item can be closed**: "All which ceremonial laws
are now abrogated, under the New Testament"; "as a body politic... which expired together with the
State of that people; not obliging... further than the general equity thereof may require"; "The
moral law does forever bind all." Justin Martyr *Dialogue* 67 verbatim. Rashi on Isaiah 7:14 verbatim,
and his gloss ("she is a young girl, and she never prophesied, yet in this instance, Divine
inspiration shall rest upon her"). Ibn Ezra on 7:14 verbatim. Targum Jonathan on 52:13 verbatim.
Fee and Stuart's chapter titles, "THINK ORACLES", and the percentages including the tail most quoters
drop ("in our time"). Hayes lecture 8's six elements and both hedge clauses; lecture 16's "anthologies
of oracles", "an attack on empty piety" and "in accompaniment to social injustice"; lecture 17's 734,
Tiglath-Pileser, and Judah refusing the alliance. Makkot 23b's 613, 365 and 248. Amos dated by 1:1 to
Uzziah and Jeroboam. Hittite treaties c. 1500 to 1200 BC. Kadesh c. 1259 BC from Hattusa, and the
Commons file, uploader (Iocanus) and CC BY 3.0 licence. The 734 crisis. "A few decades later" for the
Assyrian exile (Amos c. 760 to 750, Samaria 722). Leviticus 11:1 to 2 addressing "the Israelites", so
Q1 option D's rebuttal is right. Deuteronomy 22:8's parapet. Galatians 5:14, Romans 13:9, Matthew
22:39 and James 2:8 all renewing Leviticus 19:18. 1 Peter 2:9. Deuteronomy 31:9 to 13. Leviticus 23.
Amos 2:6 to 8, 5:10 to 12, 8:4 to 6. Isaiah 41 to 49 calling Israel "my servant". Zero em dashes,
zero en dashes.

### Unverified in this environment, and left as fact-check debt

The two BibleProject running times (oEmbed returns no duration, and youtube.com is blocked). Hayes's
prophet-versus-diviner quotation at 177 and her "mistranslation" quotation at 309, both recorded in
`SOURCES.md` from the transcripts but not re-fetched (oyc.yale.edu blocked). Radak's Hebrew
(corroborated by secondary sources for substance; no direct quotation is made in the lesson). The
alt text of the Kadesh photograph against the photograph itself (Commons blocked).

### Pattern for the pipeline

Six blocking findings here are recurrences of items already resolved **in this same course**: L4-B1
repeats L1-V3 and L3-B1; L4-B10 repeats L1-V5 and L3-V6; L4-V4 repeats L1-V8 and L3-V4; L4-D7 repeats
L3-V9; L4-B5 repeats L2-B1 and L3-V7; L4-B4 repeats L3-B5. L4-F12 reintroduces ESV debris of the
class `SOURCES.md` records as found and fixed at lesson 2's Stage 4. L4-D1.1 is an item lesson 3's fix
record explicitly assigned to this draft. Lesson 3's review already concluded the drafter is not
reading the previous lesson's resolutions before drafting; **this is the confirmation, and the Stage 3
command should load the previous lesson's "Resolutions applied" block into context before drafting.**
Two build-script items: `scripts/build.mjs` should warn on `fill="#` and `stroke="#` appearing on a
`<g>` wrapper as well as on `<text>`, which would have caught L4-B4 and lesson 3's bug both; and the
no-links-in-body check is satisfied by links in Go Deeper and Sources, so a lesson with zero links in
its teaching prose passes validation, which is L4-B10 going unseen.

### Resolutions applied, 2026-09-06

Applied in a single fix pass on `lessons/04-law-and-prophets.md`, with corrections made in
`research/SOURCES.md` so later lessons do not inherit them. `npm run validate` exits 0 and **this
lesson's warning is gone** (the seven undersized SVG labels); no new warning appears for this lesson
or any other. Zero em dashes and zero en dashes. Frontmatter parses; six quiz items, each still a
mapping with q, four options, answer and explain; 22 block openers and 22 closers. Body grew from
about 7,100 words to about 11,400, all of it required by findings above.

**Blocking.**

- **L4-B1.** The unhidden answer is gone. The verse-19 task and its model answer are now a single
  `:::predict`, so the prompt and the answer arrive one at a time. The prompt no longer telegraphs
  ("Is the law of mixed kinds renewed anywhere in the New Testament, and what does Fee and Stuart's
  second half say about a stipulation that isn't?"), and the hidden body now ends by naming what the
  test did **not** do, which is the judgement the learner still has to make.
- **L4-B2.** The dating assumption is disclosed at full strength in its own subsection, "What this
  argument assumes, and what it doesn't", built to the template of the Isaiah 7:14 sort as the
  reviewers recommended. It gives the critical position (Deuteronomy seventh-century, so Amos cannot
  have been reading it, and the shared-stock explanation the Assyrian and Aramaic parallels support),
  the conservative reply ("essentially Mosaic" with later updating), and then separates the strong
  form of the lesson's own argument from the working form, saying plainly that the strong form needs
  the conservative dating and the working form does not. It closes with the three-way sort. The
  payoff sentence at the old line 185 now reads "He is reading the covenant's penalty clause aloud",
  the SVG's subtitle no longer asserts what Amos was reading, and **"nothing above depends on how you
  answer it" is deleted**, replaced by a paragraph saying what does depend on it. Q5's explanation
  now says "the covenant" rather than "Deuteronomy 28:41 had already named".
- **L4-B3.** "Every item" is gone. The prose now says nearly every item, and the exception is turned
  into the better teaching point: Amos 4:11's Sodom has no counterpart in Deuteronomy 28 and does
  have one at **29:23**, which shows Amos working inside a whole sanctions tradition rather than
  quoting one chapter. The chart carries a sixth row and a two-line footnote saying so. **The
  double-used verses are gone**: Amos 4:6's hunger is now paired with 28:17 and 28:48, which are
  hunger curses, and 28:38 and 28:42 carry the locusts alone. 28:17 and 28:48 are quoted in the
  bullet list so the pairing is checkable.
- **L4-B4.** The chart is redrawn. viewBox 360 to **344**, one column instead of two, every label at
  font-size 15 or 16, which renders at **14.3 to 15.3px on a 360px phone** against 9.1 to 10.9px
  before. **No fill or stroke is hardcoded anywhere and no `<g>` wrapper carries one**: everything is
  `var(--navy)`, `var(--oxblood)` or `var(--text-2)`. `font-family` is now `inherit`. The fallen and
  not-yet distinction is still carried by a dash pattern *and* by the words "fallen" and "not yet" in
  every row, so nothing rests on colour. The `<desc>` was rewritten to match what is drawn, including
  the Amos 4:11 exception. Widest label is about 292 units in a 344 viewBox, so nothing overflows.
- **L4-B5.** The chart no longer does the learner's work. Its footer no longer prints the finding;
  that line is now the answer to a **new `:::predict` placed before the chart**, which asks which
  sanction has nothing opposite it and what the reader expects Amos to say next. **Exercise task 1
  was re-pointed at fresh passages**: Deuteronomy 28:25 to 37 against Amos 5:11, 7:1 to 6 and 8:9 to
  10, none of which is in the chart or the body, and it now asks the learner to find the one item
  that has no counterpart, which is the same skill the body just modelled. "The chart above will
  help" is gone.
- **L4-B6.** Every objective now has teaching, practice before the quiz, and a quiz item.
  **`OUTLINE.md`'s dropped fourth objective is restored** as objective 2, and the frameworks section
  now has a `:::checkpoint` on Ezekiel 40 to 48 that makes the learner state both readings and
  identify which part of the disagreement is argued, so the section that carries contested question 5
  is no longer 400 words with nothing behind it. Objective 5 (formerly 4) was split so that stating a
  reading in its holder's terms and sorting a dispute are separately assessable, and **new Q6 tests
  the Turing test as a performance**, which nothing in the course did before. Objective 3 gets a new
  exercise task on Micah 5:1 to 6, an oracle the lesson never works, with a model answer.
- **L4-B7.** Every unopened source now says so in its own entry: Ryrie, Gentry and Wellum, Blaising
  and Bock, Mendenhall, Steymans and Weinfeld, the Formula of Concord, and Radak, whose footnote now
  reads "read via an English summary of the Hebrew, not from the Hebrew itself" and from whom no
  wording is quoted. **The unsourced superlative about an unopened book is gone**: Gentry and Wellum
  no longer appear in Go deeper, replaced by Longman and Dillard (which the outline assigned and the
  lesson lacked) and Köstenberger and Patterson. Ryrie's essentials are also reordered to his own
  order, deriving the Israel-church distinction from the literal hermeneutic. Westminster's footnote
  now records that the wording was confirmed at this pass.
- **L4-B8.** The Tanakh is quoted from **JPS 1917** with a Sefaria link, and source 20 says why the
  1985 and 2023 editions are not used. Psalm 19:8 is also quoted in JPS 1917 in the Jewish-reading
  section, which fixes L4-D6 at the same time.
- **L4-B9.** Four of six quiz items replaced with fresh cases. **Q1** is the sabbath, which is the
  only case where the two Christian proposals give opposite verdicts, so it cannot be answered by
  reciting either. **Q4** is Deuteronomy 25:4 and Paul's ox, the wrinkle case the law half never had,
  where "renewed" turns out not to mean "repeated". **Q5** is Elijah's drought at 1 Kings 17:1, which
  puts a prophetic function inside a narrative and so interleaves with lesson 3. **Q6** is the Isaiah
  53 Turing test. Q2 keeps its stem and options with its one absolute removed from option C. Q3 keeps
  its stem, fixed for the NET (see L4-F17), and its options rebuilt so that two of them concede the
  near horizon in the key's own words, with the new option B misfiling the far horizon as "history
  establishes", which is the error this course watches for in its own direction and which no previous
  distractor tested. Every option was levelled for length and shape; the key is longest in one item
  by a single character. **Keys now spread 2, 3, 0, 1, 2, 1**: all four indices used, no run, no
  repeat of the previous item.
- **L4-B10.** Eighteen in-body links added, so every "open this passage" instruction is reachable and
  the exercise works without a Bible to hand: Leviticus 19, Exodus 19, Deuteronomy 31, Deuteronomy 28,
  Judges 2, Exodus 21 to 23, the two Deuteronomy 28 curse ranges, Amos 4, Hosea 4, Isaiah 7, Micah 6,
  Micah 5, Deuteronomy 28:25 to 37 and the three fresh Amos passages, plus Sefaria for JPS 1917 and
  for the three commentators, the *Catechism* on the Old Law, the Thirty-Nine Articles, the
  Westminster Confession, Aquinas, Justin Martyr, and the Hayes lectures by number.
- **L4-B11.** `minutes` 65 to **145**, at the top of the reviewers' measured range and matching
  lesson 3's calibration for a lesson of this weight. The exercise's own headnote no longer claims
  ten minutes for the Exodus 21 to 23 task; it says twenty-five and notes that finding a law is part
  of the work.

**Facts.** F1 Brenton now reads "a virgin", with a sentence saying the definite article in Matthew
1:23 comes from the Greek article and not from Brenton's English, and **`SOURCES.md` corrected at
source**. F2 the false "present tense in both" claim is gone; the lesson now says both the NET and
JPS 1917 read the conception as still ahead, which is true and is also Rashi's reading, now cited.
F3 Rashi on 53:3 now reads "mentions all Israel as one man" with 44:1 and 44:2, corrected in the
lesson and in `SOURCES.md`. F4 the Hayes *riv* quotation is attributed to **Hosea** and to her claim
that Hosea was the first to use the form; Amos 5:21 to 24 is now described as the charge and verdict
of a covenant suit whose full form appears elsewhere, and the four parts of the *riv* are stated once
and used consistently, which also fixes V9. F5 Isaiah 8:8 is dropped from both sentences; the
Immanuel point now rests on 8:10 alone, as line 311 already did correctly. F6 "three words" is now
"four words". F7 exercise task 1 was replaced entirely, so the impossible assignment is gone.
F8 the curse-list predict now points at both ranges and its answer no longer claims 28:15 to 24
contains locusts. F9 the Amos bullet is now "4:7 to 8" and the prose says the refrain closes each of
five units, matching the chart. F10 both video running times are cut, following lesson 9's recorded
resolution, since oEmbed returns no duration. F11 Q6 was replaced, so the explanation that settled an
argued question is gone. F12 both ESV survivals fixed: "ensnare you and their gods will lure you
away" (Judges 2:3) and "my special possession out of all the nations" (Exodus 19:5), the latter now
quoted at length rather than paraphrased. F13 Deuteronomy 28:21 is quoted whole, including "you are
about to possess". F14 the Hosea 6:6 quotation now carries footnote 9 with Matthew 9:13 and 12:7.
F15 the Isaiah 7:14 and 7:16 quotation now says verse 15 is left out and why. F16 Mendenhall's
citation carries the issue number and the 49 to 76 range. **F17 Matthew 2:15 fixed in Q3's stem to
the NET's "I called my Son out of Egypt", with Hosea's own "I summoned my son out of Egypt" given
alongside so the colleague's objection is sharper.** F18 was withdrawn (see above); Isaiah 7:14 was
correct, and source 1 now names the second edition and records why the edition matters at that verse.

**Neutrality.** N2 the range now reaches outside Reformed evangelicalism: the *Catechism* on the Old
Law is quoted and linked with the point that the threefold division is current magisterial teaching
and not a medieval curiosity; Article VII of the Thirty-Nine Articles is named as the same division
in a confession; and the Lutheran three uses of the law are given as a third way of putting the
question, one that asks what a law does rather than what it is. N3 the Christian reading of Isaiah
7:14 now has four numbered parts with real arguments, including **the shift of address at 7:13 from
Ahaz to "family of David"**, which is textual and checkable in the NET as printed, and Beale's
common-ground observation about what the Old Testament writers did not exhaustively grasp. "We should
stop saying it is" now reads "Christians should stop claiming it is", so the sentence states the
course's position without disciplining the reader in the second person. N4 Hayes is out of "The
Jewish reading" and into her own short subsection, "How a critical scholar reads it", which says
explicitly that the critical reading and the Jewish reading agree about Ahaz and reach that
agreement by different routes and that neither is a spokesperson for the other; "teaching the Hebrew
Bible at Yale" is now "who taught", and Go deeper no longer says she never asks you to believe or
disbelieve. N5 the 613 section is rewritten: the enumeration is named as disputed inside the
tradition (Nachmanides, the *Halakhot Gedolot*, Ibn Ezra), a large share of the commandments are
noted as inoperable without the Temple, halakhah and the Oral Torah are named as the working
category, Orthodox, Conservative and Reform practice are distinguished, and **Psalm 19:8 is quoted in
JPS 1917** so the tradition speaks rather than being spoken for. "They hear the wrong question" is
now "many will tell you it's the wrong question". N6 the Marcion label is gone from Q1, which was
replaced; the misconception section now handles Marcion under "The Old Testament God is wrath", where
it belongs, and names his actual claim. N7 the single-meaning position is named in Q3's explanation
as one serious evangelicals hold, with the lesson saying why it doesn't follow it rather than marking
it simply wrong. N8 the treaty-parallel argument now has its own paragraph giving Weinfeld, Steymans
and the Sefire treaties, saying the question is argued, saying it bears on dating, and saying what
both sides agree on. N9 the one-way irony is gone: "quoted on posters" survives only inside the
exercise where it earns its place, "the reader who wants to may hear modern secular justice in it" is
cut, and "rummaging in it" is replaced. N10 Trypho is now identified as Justin's own construction,
with the observation that nobody invents an objection nobody is making and that Trypho's candidate is
Hezekiah, which is Radak's.

**Depth.** All ten unused research items are now used or deliberately declined: **Köstenberger and
Patterson's triad** is in Go deeper with the point that the lesson performs all three parts;
**Beale** is cited in the Christian reading; **Jeremiah 31:31 to 33 is quoted** in the new covenants
predict, so proposal 2's test rests on a text rather than a reference; **Longman and Dillard** are in
Go deeper with the reason (the lesson sends the reader into six books they may not know);
***The Jewish Study Bible*** is in Go deeper alongside the medieval commentators, with the point that
it shows how Jews read the passage now rather than in the twelfth century; **Hayes's lecture on
biblical law** is named in Go deeper as the critical account of the law the lesson only gestures at;
**Deuteronomy 29:1 and the Moab setting** are quoted, which makes the treaty-form argument stronger
because a renewal is when the whole agreement is read out again, and 29:23 now does real work in the
Sodom correction; **Maimonides' first positive commandment** is in the 613 callout. Duvall and Hays
remain in Go deeper only, and the frameworks section now earns its length through the Ezekiel
checkpoint rather than by adding a procedure the lesson does not use. D4 the near-and-far rule now
has **three numbered steps**, including the one the lesson performed everywhere and never wrote down:
if no New Testament writer takes the passage up, the far horizon is not yours to assert. D7 the
exercise now has **four model answers in two `:::checkpoint` blocks** after it, and the free-recall
list is a bulleted list of six items rather than a 55-word sentence, ending "Then check against the
lesson". D11 Go deeper is five entries; one was cut and two added, which is over 1.2's range of two
to four, and the judgement made was that a lesson sending readers into six unfamiliar biblical books
plus a contested treaty argument needs the orientation more than it needs the ceiling.

**Voice and pedagogy.** All seven "Here is / Here's" openers are gone; the one remaining instance is
inside the NET text of Isaiah 7:16. Twelve one-line morals reduced to the two the reviewer said to
keep. All six pipeline-vocabulary headings renamed after their content ("Leviticus 19:18 and 19:19,
sorted three ways"; "Amos, with the penalty clause open"; "Isaiah 7:14, near and far"; "Now do it
yourself, on Amos, Micah, and four passages out of order"; ":::exercise Four tasks"). The six
unsourced superlatives are rewritten. Two of the three rhetorical-question openers are gone and the
one a real student asks is kept. The **figure is now referred to in the text** ("Look at the tablet
above before you read on"), and its caption turns the parity-treaty mismatch into the teaching rather
than conceding it in a subordinate clause. The Hosea checkpoint now **puts its question first** and
the quotation second. The 613 predict is replaced by one with a reasoning path (which section of
Deuteronomy 28 is longer, and by how much, which also seeds the Amos section), and the 613 material
moves to a `:::callout`. Predict 195 no longer telegraphs its own list. Checkpoint 267 no longer
elaborates past its prompt. The wall paragraphs are broken up, and the Christian-reading case is now
four short paragraphs rather than one block with its best sentence at word 95. **P7 the outline's
spaced review now ships**: the five covenants are retrieved in a predict before the treaty form, and
lesson 3's basic rule is stated in full at the head of "Two horizons" and then used, rather than
appearing for the first time in Connections. **P8** objective 1's practice moved to the law half,
where it belongs, as its own exercise with a model answer, 180 lines earlier than before. **P9** the
exercise now interleaves: a new fourth task gives four passages out of order and asks only which
question to ask first, deliberately mixing lesson 3's genre question with this lesson's two. **P13**
"The near horizon is the only horizon" moved out of the misconceptions into "Two horizons" as the
mirror of the rule, and four misconceptions a beginner actually holds were added: the law as an
unbearable burden, the wrath-and-love contrast, the Ten Commandments as obviously a different kind of
law, and prophecy as a code to be decoded against the newspaper.

**Split.** The seam is marked with an HTML comment after the Biblical Law video, per BACKLOG 7b,
recording what each half carries and what each would need to stand alone. Not renumbered. Not held.

### Deliberately not fixed, with reasons

- **The split itself.** Third lesson in a row to hit it. 7b is settled and says mark the seam and do
  the renumbering once, before publish, when every seam is known. Note for whoever does it that this
  seam costs more than lesson 2's or lesson 3's, because the lesson's thesis *is* the join between
  law and prophets, so Part B needs a real opening rather than a cross-reference. The suggested hook
  is in the seam comment.
- **The two BibleProject running times.** Cut rather than corrected, because youtube.com is blocked
  in this environment and oEmbed does not return duration. Restore them when a session can reach
  YouTube; lesson 9 made the same call.
- **Hayes's prophet-versus-diviner and "mistranslation" quotations.** Both are recorded in
  `SOURCES.md` from the transcripts and neither could be re-fetched here (oyc.yale.edu blocked). Kept
  as recorded, and flagged as fact-check debt above.
- **Radak's Hebrew.** Still read via summary. The lesson quotes nothing from him and the footnote now
  says so, which is as far as this pass can honestly go.
- **The alt text of the Kadesh photograph.** Commons is blocked, so the description could not be
  checked against the image. Unchanged and flagged.
- **Fee and Stuart's chapter 10 title.** `SOURCES.md` gives it two ways in two places and both
  lessons assert theirs. Recorded at source for whoever next opens the book; not resolvable here.
- **Köstenberger and Patterson beyond one Go deeper entry.** The triad's real payoff is across
  lessons 3 to 7 rather than inside one, and lesson 4 is already at 145 minutes.
- **`scripts/build.mjs` blind spots.** Two are now confirmed by this lesson: a fill or stroke on a
  `<g>` wrapper is invisible to the SVG check, and the no-links-in-body check is satisfied by links
  in Go deeper and Sources, so a lesson with zero links in its teaching prose passes validation. Both
  belong in the build script rather than a lesson fix pass. **Recorded under "Requests for the shared
  files" below.**

### Requests for the shared files

This session owns `courses/christian-studies/bible-basics/**` only. These belong to whoever holds
`scripts/`, `docs/` and `curriculum/`.

1. **`scripts/build.mjs`: warn on `fill="#` and `stroke="#` on a `<g>` element**, not only on
   `<text>`. Lesson 4 had sixteen hardcoded values on three `<g>` wrappers, all invisible to the
   linter, and the whole content of its chart disappeared on the dark theme. This is the third such
   bug in this course that the validator could not see.
2. **`scripts/build.mjs`: the no-links check should ignore links inside `## Sources` and
   `## Go deeper`.** 4.5 asks for links in the teaching prose. Lesson 4 had zero links in its body
   and passed validation because its Go deeper entries carried three.
3. **`scripts/build.mjs`: consider warning when a lesson's `minutes` is implausible against its own
   word count and media.** Every lesson reviewed so far has understated it by a third to a half, and
   the value feeds the learner's cumulative hours on the site.
4. **`docs/CONTENT_PIPELINE.md` and `.claude/commands/draft-lesson.md`: Stage 3 should load the
   previous lesson's "Resolutions applied" block before drafting.** Six of lesson 4's eleven blocking
   findings are items already resolved earlier in this same course. Lesson 3's review predicted this
   and lesson 4 confirmed it.
5. **`docs/EDITORIAL_STANDARDS.md` 4.7: the `curl labs.bible.org` recipe does not work in every
   environment.** Some sessions block every scripture host at the proxy. The mirrors that do work are
   now recorded in this course's `SOURCES.md`; if the policy is meant to be followable everywhere,
   4.7 should say what to do when the API is unreachable rather than leaving each session to
   rediscover it.

---
