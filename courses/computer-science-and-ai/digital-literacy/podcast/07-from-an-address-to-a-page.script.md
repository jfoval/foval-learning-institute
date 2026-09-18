---
source: courses/computer-science-and-ai/digital-literacy/lessons/07-from-an-address-to-a-page.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Every figure and claim below appears in the lesson and traces to the lesson's own numbered
  sources. Nothing has been added that the lesson does not say. The course is in a neutral school
  with no standpoint to preserve. Fact-checked in a fresh-context subagent against the lesson on
  2026-09-18: verdict PASS WITH NITS. Three nits, all fixed in this file before any render: the
  name lookup was listed as a rung on the path when the lesson draws it as a side branch finishing
  first, which is the exact error lesson 7's own Stage 4 review had corrected; "the only place you
  can see a cache" dropped the lesson's "in the output"; and an aside about an earlier draft of
  the lesson was citation apparatus read aloud.
about: >-
  About six minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Seventh episode for
  Digital Literacy. Covers the parties in the path, the time-to-live as the visible cache, and
  what the asterisks in a route trace mean. Leaves out the diagnosis walkthrough and both
  commands' Windows forms, and says so in the sign-off.
speakers: 2
approx_minutes: 6
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called From an address to a page.

S1: And it starts by asking you to draw something. Draw the internet. However you picture it.

S2: That sounds like a trick.

S1: It isn't, and four researchers did exactly that in work published in twenty fifteen. Twenty eight people, paper and a pen, then talk me through what you drew. Seventeen were ordinary users and eleven had technical training.

S2: And what did they draw?

S1: Fourteen of the twenty eight drew a single box. You send a request in, an answer comes back, and there's nothing in between. Thirteen of those fourteen were the ordinary users.

S2: That's most of them.

S1: It is, and the lesson is careful here. That picture isn't stupid. It's a perfectly reasonable summary of what you can actually see. The trouble is what it can't hold. The people with layered pictures named about four parties who could see their data. The single box people named about two and a half.

S2: So the picture limits the worry.

S1: That's the sentence the whole lesson is built on. You can't worry about something your picture doesn't contain.

S2: All right. So what's actually in the path?

S1: Seven parties, and you have a relationship with exactly one of them. Off to the side first, before anything else happens, whoever answers your name lookups. Then the line itself. Your device. Your router. Your internet provider. The networks in between. A delivery network, which is usually a copy of the site held much nearer than the company itself. And then the service.

S2: Wait. Whoever answers my name lookups. What is that?

S1: When you type a name like wikipedia dot org, the machinery underneath doesn't work on names. It works on numbers. So something has to translate, and that's a round trip of its own. It finishes before the connection to the site opens at all.

S2: So it's not on the way. It's before the way.

S1: Exactly that, and the lesson draws it that way deliberately. It's off to the side with an arrow going out and coming back. Because if you draw it as a rung on the path, you've taught the wrong mechanism.

S2: Now, of those seven, how many can tell that I visited a particular site?

S1: Six.

S2: And the one that can't?

S1: The networks in the middle. And the reason is good. They see an address, not a name. One address at a delivery network commonly answers for thousands of different sites, so a network in the middle can say your traffic went to that machine. It cannot say which of those thousands you were reading.

S2: That's a narrower comfort than it sounds.

S1: It's exactly as narrow as it sounds, because the parties at both ends of that stretch know perfectly well.

S2: Now, the lesson has you run two commands. What do you actually see?

S1: The first one asks the name system a question. And there's a number in the answer that's worth more than anything else on the screen. It's called a time to live, and it's how many seconds that answer may be kept before it has to be asked for again.

S2: Why does that number matter?

S1: Because it's the only place in that output where you can see a cache with your own eyes. Run the same lookup seven times over about ten seconds, and on the machine this lesson was written on it counted down. A hundred and seven, ninety nine, ninety seven, ninety five, ninety three, ninety.

S2: Going down, not starting over.

S1: Going down. Nothing about the name changed in those ten seconds. What you're watching is one kept copy of the answer ageing somewhere between you and the place that's authoritative for the name. When it hits zero, the next person to ask pays for a fresh lookup.

S2: And this is why a change to a website's address takes a while to reach everybody.

S1: That's it exactly.

S2: Now, I'd have guessed the cache would show up in how fast the answer came back.

S1: So would most people, and the lesson is blunt about it. That command does not read your machine's cache. It sends a real query to the server every single time. Those same seven runs took twenty six, twenty nine, thirty two, thirty, twenty five, twenty five and twenty nine milliseconds.

S2: Flat.

S1: Flat. So the cache is real, the time to live is where you see it, and the query time is not.

S2: The second command traces the route. What comes back?

S1: Four machines, and then rows of asterisks all the way down. And the page loads perfectly the whole time.

S2: That looks broken.

S1: It looks broken and it isn't, and the asterisks are the most instructive part of the output. They mean those machines chose not to announce themselves, which many are configured not to do. It's about policy, not about the path.

S2: So what have you actually learned from it?

S1: That the first few rungs are where you thought they were, and after that the path is somebody else's business. And here's the part that matters for the rest of the course. Run it twice, five minutes apart, and the middle of it can be different.

S2: Nobody's steering.

S1: Nobody's steering the whole of it. A large service does choose which networks it buys from and where it puts its copies. What neither of you controls is the middle. So the answer to who can see this is never a list of named companies. It's whoever is on the path today.

S2: Which means the only defence is what?

S1: Not caring, because what you sent was unreadable to them. And that's the next lesson.

S2: We've left a good deal out here.

S1: We have. The lesson walks you through diagnosing a real failure, the case where a site loads on your phone and not your laptop, and it gives both commands in their Windows forms, which are genuinely different and will strand you if you guess. None of that fits in six minutes.

S2: Read the whole thing at Foval Learning Institute dot org. We'll see you next time.
