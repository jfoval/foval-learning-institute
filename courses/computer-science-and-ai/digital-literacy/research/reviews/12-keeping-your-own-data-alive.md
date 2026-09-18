# Reviews: Digital Literacy lesson 12, "Keeping your own data alive"

## 2026-09-18 — Lesson 12 — depth, fact-check, neutrality, pedagogy, cold-start, voice, Tier A

**STATUS: REVIEWED AND APPLIED, same session.** Came back **not ready**: two criticals, nine majors.
All closed below. Tier A was right (`sensitive_domain: false`, no standpoint, `prerequisites: []`).
The reviewer fetched both primary sources independently of `research/SOURCES.md`, which is how the
first critical was found.

### The two criticals

**L12-01 the CISA quotation was truncated and labelled verbatim, and I was the one who truncated
it.** The sentence continues "...delete or encrypt accessible backups **to make restoration
impossible unless the ransom is paid.**" The lesson closed the quotation with a full stop inside the
marks and no ellipsis, and footnote 2 asserted it was verbatim. **The same truncation was in
`research/SOURCES.md`**, put there by my own Stage 1 pass earlier the same day, under the same
label. I re-fetched the page and confirmed it before changing anything.

This is the repo's own recorded failure mode, a quotation attributed to a body in words it did not
write, and it is worth being clear about how it happened: **the dropped clause is not adverse.**
Nothing about cutting it helped the lesson's argument, which is exactly why neither the drafting nor
the Stage 1 write-up caught it. It is also the better teaching, because it names the motive. Both
files are corrected, and the SOURCES entry now records the trim and its correction rather than
quietly fixing it.

**L12-02 the restore exercise could lose a real file if followed exactly.** Three holes in a step the
reader performs on a file they have just said they would miss. The safe copy was only checked to
*exist*, so a reader who copies a cloud placeholder or an already-damaged file and then deletes the
original loses it, in a lesson whose entire thesis is that an unopened copy is not verified. The
lesson never said to avoid a synced or shared file, so step 3 would propagate the deletion to every
device and to colleagues, which is the mechanism the previous exercise had just taught. And on
Windows and macOS the deletion goes to a bin, from which a reader can drag it back in ten seconds,
having tested nothing, and conclude their backup works.

**Closed:** the exercise now excludes shared and synced files by name; step 3 is opening the safe
copy and confirming it is really the file, with an instruction not to proceed until it is done;
step 4 says what "delete" does on each system and that emptying the bin is what makes the test real;
and a new final step has the reader open the restored file, check the version, and only then delete
the safe copy. This was the finding worth the whole review.

### The majors

**L12-03** the withdrawal overclaimed. One CISA page is not "the official guidance" (NCSC, NIST and
ACSC also publish on backups and none was read) and one search is not "the places it does appear".
SOURCES said the narrow and correct thing and the lesson widened it. **Closed**, and it now says
outright that this is not proof the claim is false. **L12-04** the predict block answered "partly"
to a question whose stem asks only whether a mistake on the original could reach the copy; for an
always-connected drive the answer is plainly yes, and forty lines later CISA is quoted saying so.
**Closed. L12-05** "a restore exercises all five at once" is false of the one-file restore the
lesson prescribes, which does not test the selection for anything else, and the lesson's own quiz
said so twice. **Closed** with the honest count, four of five, for that file. **L12-06** the body
cited "standards 2.2" at a learner, the only occurrence of institute governance jargon in body text
anywhere in the repo, and misstated what 2.2 says. **Closed. L12-07** four load-bearing terms taught
nowhere in lessons 1 to 11: sync client, ransomware, object lock, and corruption, the last of which
carried a quiz key. **Third consecutive occurrence** of this defect. **Closed**, with the sync client
now named off lesson 2's own phrase, and object lock framed as advice written for organisations
rather than for the reader. **L12-08** the lesson quoted retention figures from a page it never
linked, in a lesson built on going and reading the page. **Closed. L12-09** the five-part
decomposition of a backup system is the outline's frame and appears in no source; it is now marked
as this course's carving, the way lesson 11 marks its three-part account of a con. **L12-10** no
operating-system callout in a machine-touching lesson; folded into the exercise rewrite, which is a
better place for it than a separate callout. **L12-11** one predict and one checkpoint against four
exercises, with nothing in the two hardest sections, and the sync demonstration placed *after* its
own explanation, against the outline's first standing convention. **Closed** with a predict before
the mechanism and a checkpoint on what a green tick has actually proved.

### Moderates and minors

**L12-12** quiz 5 had two defensible answers, which is L9-19 again; the distractor is now false
against the documented tiers. **L12-13** "costs an hour" for a photo-library export is probably wrong
and would leave a reader who budgeted an hour worse off than one told the truth. **L12-14** an
unsourced claim about drive batches, replaced by the point the bullet was actually making.
**L12-15** the spaced review named two of lesson 3's five causes where the outline asked for the
count and the contrast; **it omitted cause five, a file never saved at all**, which is the one where a
reader is likeliest to assume the backup has it and where it definitively cannot. Now named.
**L12-16** lessons 2 and 3 both hand this lesson something by name and it took neither; both now
taken. **L12-17** "in an email to yourself" as a safe-copy destination fails on attachment size for
exactly the files the lesson says matter, is often the same company, and hands a private file to a
service one lesson before lesson 13. **L12-22** an ambiguity against lesson 2's teaching about
`Desktop`.

### What passed, so nobody rechecks it

**Both primary sources verified by independent fetch.** Every Dropbox retention window is exact with
the plan names as Dropbox writes them, the permanently-deleted statement and the add-on note are
both there, and decision 5 is obeyed exactly: the figures carry the provider's name and the date
read inside the sentence a learner sees. Three of the four CISA quotations are verbatim and the
fourth is L12-01. **The renaming claim really is absent from CISA's guide**: the reviewer searched
the fetched page for "renam" and the only hit is a Wireshark filter in the detection section. So the
lesson's factual assertion was right and only its scope overreached.

**Gates and hazards obeyed.** No "3-2-1" anywhere, no surname from the `unread:` line, and the sync
mechanism demonstrated and uncited exactly as decision 4 specifies.

**The quiz was the cleanest in this course on shape, and the new automated check passes for the
right reasons.** Option-length spreads of 3 to 6 characters, all four answer positions used, no
adjacent repeat, and the key the sole longest in **zero** of six items. Every stem executes correctly
against its own model answer. No item reuses a person or number from the body.

**Zero shared 9-grams against all eleven other lessons**, run by hand because the repeated-passage
check is off on a drafting course. After lesson 9 and lesson 11 both failed on exactly that gap,
this one is clean.

**The organising sentence holds** and is the outline's verbatim. **Neutrality passes**, and the
Dropbox treatment reads as citation rather than endorsement: it is introduced as one provider's
page, immediately followed by a reminder that the numbers are that provider's and today's, and the
exercise says "your own provider, not this lesson's example". **The phone passage satisfies decision
6** in the placement the outline itself specifies.

### One for the queue

`research/reviews/course-wide.md` carries a table of every dated figure by lesson, which the feedback
loop works from. **Lesson 12's Dropbox rows belong in it**, and so do lessons 8 to 11's figures,
which have accumulated over this session and are not there yet.
