# Reviews: Digital Literacy lesson 7, "From an address to a page"

## 2026-09-18 — Lesson 07 — depth, fact-check, neutrality, pedagogy, cold-start, voice, media, Tier A

**STATUS: APPLIED, 2026-09-19.** All twenty-five findings are addressed in the lesson; what was
done to each is recorded under "How each finding was closed" at the foot of this file. Four of them
changed what the lesson claims rather than how it reads, and those are the ones to re-check if
anything downstream looks wrong: the time-to-live rewrite (L7-01), the figure's topology (L7-02),
the Windows commands (L7-03) and the answer to objective four (L7-07 with L7-08).

The review below is kept as written, unedited, because it is the record of what was wrong.

**Reviewer:** one fresh-context subagent, briefed with what the six previous reviews of this course
established about this drafter. Executed on this macOS host: `dig` seven times over ten seconds,
`traceroute`, `curl`, an `rsvg-convert` render of the SVG, `npm run taught`, `npm run minutes`,
`npm run validate` (exit 0). Windows claims checked against Microsoft Learn, not executed.

**Verdict: not ready.** Three criticals, seven majors, eight moderates, seven minors. The reviewer's
own summary is that the lesson is well built and its mechanism is the best in the course so far, and
that what is wrong is concentrated in the executed claims and in the figure's topology.

### Criticals

1. **L7-01 the query-time claim is false, and an exercise step and a quiz item both rest on it.**
   The lesson says a second lookup is "often reported as `0 msec`, because the answer was kept
   nearby". Executed seven times in ten seconds: 26, 29, 32, 30, 25, 25, 29 msec. Never 0, never
   lower. `dig` does not read the OS cache; it sends a fresh query to the configured resolver every
   time, so the round trip is paid on every run. It reports `0 msec` only when the resolver is on
   `127.0.0.1`, which is not the setup the lesson describes. **The cache is observable and the
   lesson is one column away from it:** across those seven runs the TTL counted down 107, 99, 97,
   95, 93, 90. That is the cached copy ageing, and it is the honest demonstration. Rewrite the
   paragraph around the countdown, rebuild quiz 3 on it, and change Practice step 3 to ask for two
   TTLs rather than two query times.
2. **L7-02 the figure puts the name resolver on the path, contradicting the body's own step one,
   and lesson 8 inherits it.** The SVG draws seven parties on one continuous line with "Whoever
   answers your names" as rung 4, between the provider and the transit networks. The body teaches
   that the lookup is a separate round trip completing *before* the connection opens. The unbroken
   line says the request travels through the resolver on its way to the service, which is the
   mechanism the lesson exists to replace. Second, smaller error in the same figure: the line runs
   unbroken to "The service itself" when the body's own teaching is that a delivery-network copy
   usually answers and the origin is never contacted. **Fix:** break the resolver off the spine as a
   side branch off "Your device" with a return arrow, labelled as happening first; dash or bracket
   the final segment. Both survive lesson 8's overlay better than the current straight line.
3. **L7-03 the Windows reader cannot do Practice steps 2, 3 or 4.** Default non-interactive
   `nslookup` prints Server, Address, Name, Address, with **no TTL and no elapsed-time field at
   all**, so step 2 is two thirds impossible and step 3 wholly impossible. Worse, the lesson gives
   `traceroute -m 12 -w 1 -q 1` and says "in Git Bash `tracert` also works" without giving the
   Windows form: `tracert` uses `-h` for hops, has no `-q`, and takes `-w` in **milliseconds**, so a
   reader copying the flags sets a one-millisecond timeout and every hop times out. The working form
   is `tracert -h 12 -w 1000 wikipedia.org`. Third lesson running to strand the Windows reader.

### Majors

4. **L7-04 footnote 3 cites the unread networking text, which the outline explicitly forbade.** No
   banned surname appears and the footnote is candid, but the outline says the top-down sequencing
   is "used as a pedagogical choice and **not cited**". Removing the names does not make it a read
   source, and the sentence it supports is a factual claim about how the field teaches. Delete the
   footnote and own the choice in the lesson's own voice.
5. **L7-05 "unless you changed a setting" is false for a large share of readers.** Firefox has sent
   lookups to its own resolver by default for US desktop users since 2020, so a reader who changed
   nothing does not have their provider answering their browser's lookups, and `dig` cannot tell
   them which they are because it queries the OS resolver and knows nothing about the browser.
6. **L7-06 "holds a list of every site you asked for by name"** asserts retention as established.
   Answering a query means the provider *sees* the name; whether it *holds a list* varies by
   provider, contract and jurisdiction, is nowhere in SOURCES, and invites a picture of a durable
   dossier. A Part 3.1 classification problem rather than a bias failure.
7. **L7-07 the predict block contradicts itself, and objective 4 has no answer anywhere.** The block
   answers "six of the seven, and the exception is not the one people guess", then says the delivery
   network "usually knows too", so the answer to its own question is seven. Objective 4 promises
   "one who cannot" and the lesson never supplies one, then tells the reader an incomplete answer is
   fine. Either drop that half of the objective and let lesson 8 own it, or answer it.
8. **L7-08 "the networks in between" cannot tell which site you visited**, only which address, and
   the lesson's own delivery-network teaching is why: one address often serves thousands of sites.
   The party count and the CDN paragraph undercut each other one screen apart.
9. **L7-09 every quiz item is drawn from the body's own examples; none requires transfer.** Option
   shapes are the best this drafter has produced and need no work. Objective 1 is not retrieved at
   all and objective 4 is not retrieved at all. The checkpoint's office case is the one genuinely
   new scenario in the lesson and is not quizzed.
10. **L7-10 quiz 4's explanation is falsified by the reader's own output.** It says a hop limit
    "ends the trace rather than filling it with asterisks"; the executed command printed four hops
    and then eight asterisk rows, ending because it hit the limit.

### Moderates and minors, in brief

L7-11 `192.168.` called "the range reserved for private networks" when there are three, and the
lesson's own unredacted trace used a `10.` one. L7-12 "nobody at either end chose the route" against
the fact that a large service does choose its transit and its copy locations. L7-13 Kang's Wi-Fi
belief is comparative ("safer than public Wi-Fi ... and settings") and the lesson states it
absolute, having inherited the trimmed form from SOURCES. L7-14 three printed outputs are not what
the commands produce, including a trace sample cut at hop 7 with no note. L7-15 the party-list
exercise points at the figure on the same page, so it is recognition rather than retrieval. L7-16
quiz 1's explanation contradicts the body about the browser. L7-17 quiz 3's "cannot account for a
time shorter than light allows" is wrong: light covers about 300 km in a millisecond. L7-18 "That is
the fourth party" has the wrong antecedent. L7-19 the study is dated to its publication year with no
fieldwork dates. L7-20 Go deeper has one real resource and one activity. L7-21 "hop" is never
defined. L7-22 the two drawing exercises do not line up, one asking for two drawings and the other
for one. L7-23 one "Here is" opener and four compressed morals. L7-24 `dig` and `traceroute` are not
installed by default on Debian or Ubuntu and the lesson gives no package names. L7-25 the redaction
note says public addresses were replaced when the replaced ones were private.

### What passed, so nobody rechecks it

No em dash, no en dash, no `sudo`, no banned word or sentence shape, no surname from the `unread:`
line. **Contractions: 25 in 3,018 body words, the first lesson in this course not to fail that
check.** Quiz option shapes measured clean: lengths 63 to 80, spread 1 to 7 per item, all four
indices used, no adjacent repeat, key longest in two items by 3 and 0 characters. **The SVG is well
made**: rendered at 840px and inspected, no text overlaps anything, the longest label reaches about
277px against 376px available, row pitch 46px against 15 and 16px type, every font-size on the
`<text>` element, no `<g>`, no blank line inside the `<svg>`, every token present in the stylesheet
with dark values, and the `<desc>` matching all seven labels. Its problem is what it asserts, not
how it is drawn. Depth passes all three tests. `npm run minutes` 105, matching frontmatter.
**Neutrality passed**: the internet-provider passage is stated as fact rather than insinuation, and
the one flag on it is L7-06's classification problem.


---

## How each finding was closed, 2026-09-19

Applied in one pass. `npm run validate` exits 0, `npm run minutes` reports 115 against a frontmatter
that now says 115, and the figure was rendered at 840px and inspected again.

### The three criticals

**L7-01, the query-time claim.** The paragraph is rebuilt on the time to live, which is what the
reviewer's own seven runs actually showed. The lesson now prints the countdown (107, 99, 97, 95, 93,
90) and the query times beside it (26, 29, 32, 30, 25, 25, 29), says plainly that `dig` does not read
the operating system's cache and sends a real query every time, and ends on the distinction: the
cache is real, the time to live is where you see it, the query time is not. `0 msec` is kept in one
sentence as what it genuinely means, a resolver on your own machine. Quiz 3 is rebuilt on the
countdown from 145 to 115, which also disposes of L7-17, since the wrong claim about the speed of
light was in the old item's explanation. Practice step 3 now asks for the number beside the address
twice rather than two query times, and asks what it would have meant if it had gone back up.

**L7-02, the figure.** Redrawn. "Whoever answers your names" is off the spine entirely, as a side
branch from "Your device" with an out-and-back pair of arrows and the caption "this round trip
finishes before the line below begins". The spine is now six parties, and its last segment, from the
delivery network to the service, is **dashed**, with the service's sub-label changed to "often never
contacted at all". The body's step one gained the matching sentence, that the lookup is a round trip
of its own, finished before step two starts, and that the name server hands over an address and drops
out rather than guiding anything. The `<desc>` was rewritten to match all seven labels and the branch.
Lesson 8 inherits a figure that now says what the body says.

**L7-03, the Windows reader.** The `dig` callout is now a Windows callout. It says outright that the
default `nslookup` output carries neither a time to live nor a query time, gives `nslookup -debug` as
the form that does, quotes Microsoft's own description of that option, and marks the `ttl =` line
inside it as reported rather than documented, which is the same honesty the lesson 5 callout uses for
`winpty`. The trace section now gives the Windows form in full, `tracert -h 12 -w 1000 wikipedia.org`,
and says why each flag differs: `-h` not `-m`, no `-q` because it always sends three probes, and `-w`
in milliseconds, so the lesson's own `-w 1` would time out every hop. Practice step 2 points Windows
readers at the `-debug` form. The same callout closes L7-24 with the Debian and Ubuntu package names,
`dnsutils` (or `bind9-dnsutils`) and `traceroute`, with no `sudo` in the lesson.

### The seven majors

**L7-04.** Footnote 3 is deleted and the source with it. The top-down order is now owned in the
lesson's own voice: it works downwards because the top is the only end the reader has ever touched.

**L7-05.** The server-line paragraph now says `dig` reports the operating system's resolver and that
the browser may not be using it, citing Mozilla's February 2020 announcement that Firefox sends its
own lookups to a resolver it chose by default for users in the United States. "Unless you changed a
setting" is gone from the lesson; "on most home connections" replaces it everywhere.

**L7-06.** "Holds a list of every site you asked for by name" is replaced. The lesson now says the
provider *sees* the name rather than only the address, that seeing is not keeping, that what is kept
varies by company, contract and country, and that this course has not read the research that would
settle it. The claim it makes is the one it can support.

**L7-07.** Objective 4 is answered rather than dropped. It now reads "name three parties who can tell
which site you visited, and say why the networks in between usually cannot", and the predict block
supplies the answer: six of the seven can, and the exception is the networks in between. The
self-contradiction is gone, because the delivery network is now counted with the six where it belongs.

**L7-08.** Fixed by the same change, and it is now the lesson's point rather than its inconsistency.
The figure's sub-label reads "they see an address, not which site", and the predict block explains it
with the lesson's own delivery-network teaching: one address answers for thousands of sites.

**L7-09.** Two quiz items are replaced. Quiz 2 was the "computer in California" item, drawn straight
from the body; it is now an ordering item that retrieves objective 1 and the corrected figure, built
on a wrong statement a friend makes rather than on a line from the lesson. Quiz 6 was a "why does
this happen" item about the division of labour, which is not one of the four objectives; it is now a
transfer item on objective 4, correcting somebody's claim that a transit network "can see everything
you browse". Answer indices are now 2, 1, 0, 3, 0, 2: all four used, no adjacent repeat, key not the
longest in either new item.

**L7-10.** Quiz 4's explanation no longer claims a hop limit ends a trace rather than filling it with
asterisks. It now says the limit is where the printing stopped rather than why the rows went quiet,
which is what the reviewer's own output showed. The trace sample gained a line saying the asterisks
carried on to the twelfth hop and the sample is cut at seven to fit the page, which is L7-14.

### The moderates and minors

**L7-11.** All three private ranges are named, with the note that a `10.` address at hop one is not a
fault. **L7-12.** "Nobody at either end chose the route" is now "nobody is steering the whole of it",
with a paragraph saying a large service does buy transit from particular networks and choose where
its copies sit, and that what neither end controls is the middle. Step two of the ladder carries the
same qualification. **L7-13.** Kang's Wi-Fi belief is restored to its comparative form, safer than
public Wi-Fi because of its password and settings, and the lesson says a comparison heard as a verdict
is where the trouble starts. Source 1 records the trimming that caused it. **L7-14.** Closed with
L7-10. **L7-15.** The party-list step now says "with the lesson closed". **L7-16.** Quiz 1's
explanation no longer claims the browser is the one thing the two devices do not share; it says the
comparison does not test the browser either way. **L7-17.** Closed with L7-01. **L7-18.** "That is
the fourth party" is now "the party drawn off to the side in the figure above", which is both the
right antecedent and the right topology. **L7-19.** The study is introduced as "in work published in
2015" and source 1 says the date is the publication year and that the fieldwork dates were not read.
**L7-20.** Go deeper gains MDN's "How does the Internet work?", free and Creative Commons licensed,
chosen because it works bottom-up from cables and is therefore the half this lesson deliberately left
out. **L7-21.** A hop is defined where the trace is introduced. **L7-22.** The closing exercise now
asks for both drawings again and for the two *pairs* side by side, matching the opening exercise.
**L7-23.** Both "Here is" openers are gone. **L7-24.** Closed with L7-03. **L7-25.** The redaction
note now says every address after hop one was replaced, which is what happened, and source 2 says the
same.

### Two things worth knowing for the next lesson

The frontmatter tripped the YAML parser once, on `B has it backwards: the limit is`, a colon and a
space inside an unquoted `explain`. That is `docs/QUEUE.md` item 5 happening for the eighth time in
this course, and the two-second fix needed the line number, which `js-yaml` had and the build threw
away.

`npm run validate` also caught an SVG label at font-size 14, under the 15 the media rule sets for
phone legibility. The caption on the new branch was the only one, and it is 15 now.
