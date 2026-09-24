---
title: From an address to a page
minutes: 115
audio: https://pub-f7bdc2ace9904917a8238f1557b7f247.r2.dev/computer-science-and-ai/digital-literacy/07-from-an-address-to-a-page.mp3
objectives:
  - Say in order what happens between typing a web address and seeing a page, naming every party that takes part
  - Run a name lookup and a route trace on a domain you chose, and read what comes back
  - Work out from a described symptom which step failed, and say what you would check next
  - Name three parties who can tell which site you visited, and say why the networks in between usually cannot
quiz:
  - q: A reader cannot reach a site on her laptop. It loads on her phone, which is on mobile data rather than the house Wi-Fi. What does that comparison rule out, and what does it point at?
    options:
      - It rules out the site being down, and points at her laptop's own browser
      - It rules out her laptop, and points at the site having blocked her account
      - It rules out the site being down, and points at something on the house's path
      - It rules out the whole network, and points at the address being mistyped
    answer: 2
    explain: The phone reached the site, so the site is up, and the phone took a different network and usually a different name service, so the difference lives somewhere on the house's path, which is C. A jumps to the browser, which this comparison does not test either way, since the two devices run the same browser from the same company but separate copies of it on different systems. B invents an account block, which would follow her to the phone. D contradicts itself, since something clearly worked.
  - q: A friend says her request "goes off to the site, and the name service tells it where to go on the way". What is out of order in that, and why does the order matter?
    options:
      - The name server is contacted after the site, to confirm the address that answered
      - The lookup finishes before the connection opens, so nothing guides it on the way
      - The router answers the lookup itself, so no name server is involved from a house
      - Nothing is out of order, and the two steps happen in the order she described
    answer: 1
    explain: The lookup is a round trip of its own and it finishes before any connection to the site is opened, so nothing is steering the request as it travels, which is B. The order is what lets you count the parties, because whoever answered the lookup is not on the path to the site at all and has to be counted separately. A reverses it further, since an address has to exist before anything can be asked for. C describes a router that forwards the question rather than answers it, and the chain still ends somewhere outside the house. D keeps a picture in which the parties cannot be told apart, which is the single box drawing in a different form.
  - q: You run the same name lookup twice, half a minute apart, and the number beside the address has gone down from 145 to 115. What are you watching?
    options:
      - One kept copy of the answer ageing, which is the same copy handed to you twice
      - The site shortening how long its answer may be kept, between your two lookups
      - A second name server answering, which keeps a shorter count than the first one
      - The lookup running more slowly this time, which is what that number reports
    answer: 0
    explain: The number is a time to live, the seconds an answer may be kept before it has to be fetched again, and a count that carries on downwards rather than starting over means the same kept copy answered both times, which is A and is why a change to a site's address takes a while to reach everybody. B would need the site to have edited its own record inside thirty seconds, and would show a different number rather than a lower one. C would ordinarily hand you a fresh count near its full value. D confuses the time to live with the query time, which is a separate line and is measured in milliseconds.
  - q: A route trace prints four machines and then rows of asterisks all the way to the end, and yet the site loads perfectly in a browser. What should you conclude?
    options:
      - The route is broken after the fourth machine and the browser found another
      - The trace reached its limit of hops before it could arrive at the far end
      - The site is refusing the trace deliberately, which is worth worrying about
      - Some machines along the way decline to answer the trace, which is ordinary
    answer: 3
    explain: A trace depends on machines choosing to announce themselves, and plenty are configured not to, so silence is about policy rather than about the path, which is D. A is contradicted by the page loading perfectly well. B has it backwards, because the limit is where the printing stopped rather than why the rows went quiet, and a trace that is still being answered prints an address on every line until it arrives. C singles out the site when the quiet machines are in the middle of the path.
  - q: A neighbour says his home Wi-Fi is private because it has a password on it. What does the password actually decide?
    options:
      - Who can join the local network, and nothing about the path after that
      - Whether his internet provider can see the addresses he asks for
      - Whether the sites he visits can tell which house the request came from
      - How much of what he sends is scrambled between the house and the site
    answer: 0
    explain: The password governs admission to the network in the house, and every party after the router is untouched by it, which is A. B is wrong in the direction that matters, since the provider is on the far side of the router. C describes something the password does not control either way. D is about encryption, which is lesson 8's subject and is decided by the site rather than by the Wi-Fi.
  - q: Somebody tells you that a transit network in the middle of the country "can see everything you browse". Using this lesson, what is the most accurate correction?
    options:
      - It sees nothing at all, since the traffic is only passing through its cables
      - It sees the names, because the name travels with the request from end to end
      - It sees addresses, and one address can serve thousands of different websites
      - It sees everything, and the only answer is to stop using that network entirely
    answer: 2
    explain: A network in the middle handles traffic addressed to a number, and a single delivery network address commonly answers for thousands of sites, so knowing where your traffic went is a long way from knowing what you read, which is C. A overcorrects, since the addresses and the timing are real and so is who you are. B describes the name lookup, which is a separate round trip made before the connection opens and is not repeated inside it. D treats a real limit as total exposure, and you did not choose that network and cannot avoid it.
---

Before you read another line, do this. It takes two minutes and it won't work afterwards.

:::exercise Draw the internet
Take 2 minutes. Paper, or a blank note, whichever is nearer.

1. Draw the internet. However you picture it. There's no right answer and nobody is going to see it.

2. Now draw what happens when you visit a website. Put yourself in it somewhere.

3. Keep it. The last exercise in this lesson asks you to draw it again, and the difference between the two is the only evidence that any of this worked.
:::

Four researchers, in work published in 2015, asked twenty-eight people to do exactly that, with paper and a pen, and then talk through what they had drawn.[1] Seventeen were ordinary users and eleven had technical training.

**Fourteen of the twenty-eight drew a single box.** You send a request in, an answer comes back, and there is nothing in between. Thirteen of those fourteen were the ordinary users.

That picture isn't stupid. It's a perfectly reasonable summary of what you can see. The trouble is what it can't hold: the people with layered pictures named about four parties who could see their data, and the single-box people named about two and a half, and the authors' explanation is the sentence this lesson exists for.

**You can't worry about something your picture doesn't contain.**

So this lesson is about putting the parties into your picture. Not because worry is good, but because in lesson 1 you wrote a security plan, and a plan can only defend against threats you can name.

## The ladder, top down

Start where you already are. This lesson works downwards, from the thing you did to the machinery underneath, rather than upwards from cables and signals, because the top of that ladder is the only end you've ever touched. So: you type `wikipedia.org` and press return.

**One. The name has to become an address.** `wikipedia.org` is a name for humans. The machinery underneath works on numeric addresses, so something has to translate, and that something is the **Domain Name System**, DNS. Your machine asks a name server, and the answer comes back as an address. **That is a round trip of its own, and it is finished before step two starts.** Nothing below is guided by the name server on the way; it hands over an address and drops out.

**Two. A connection is opened to that address.** Your request leaves your machine, goes to your router, goes to your internet provider, and from there crosses some number of other networks until it reaches a machine that answers to that address. You did not choose the route in between, and for most of its length neither did the far end, although a large service does choose which networks it buys from and where it puts its copies.

**Three. A request is sent and a response comes back.** Your browser asks for a particular page. The far end replies with the page, or with an error code saying why not.

**Four. And then it happens again, dozens of times.** The page you asked for is a skeleton. It names images, fonts, scripts, advertising, analytics, and each of those is a fresh trip, often to a different company. A single ordinary page can touch a dozen organisations, most of which you've never heard of and none of which you asked for.

Notice how little of that is what you think of as "the website".

## Who is actually in the path

The same journey, drawn as a list of parties, because the parties are the part that matters for the rest of the course.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 376" role="img" aria-labelledby="path-title path-desc" style="width:100%;height:auto;font-family:inherit">
  <title id="path-title">Who is in the path between you and a page</title>
  <desc id="path-desc">A lookup drawn as a side branch, and then the connection drawn as a line. Off to the side, reached from your device by a round trip that goes out and comes back: whoever answers your names, which is your provider or your browser's own, and this round trip finishes before the line below begins. The line itself runs through five more parties in order. Your device, the browser you typed into. Your router, which everything in the house shares. Your internet provider, which carries it all and sees every destination. The networks in between, which see an address and not which site. A delivery network, which is a copy much nearer than the company. And, on a dashed last segment because it is often never contacted at all, the service itself.</desc>
  <line x1="28" y1="40" x2="28" y2="298" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <line x1="28" y1="298" x2="28" y2="344" stroke="var(--text-2, #4a5260)" stroke-width="2" stroke-dasharray="5 5"/>
  <path d="M 30 50 C 34 78, 62 88, 90 88" fill="none" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="88,83 100,88 88,93" fill="var(--text-2, #4a5260)"/>
  <path d="M 92 100 C 58 102, 36 84, 30 64" fill="none" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <polygon points="28,50 22,62 34,61" fill="var(--text-2, #4a5260)"/>
  <circle cx="104" cy="92" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="124" y="88" font-size="16" font-weight="700" fill="var(--text, #111418)">Whoever answers your names</text>
  <text x="124" y="106" font-size="15" fill="var(--text-2, #4a5260)">your provider, or your browser's own</text>
  <text x="44" y="130" font-size="15" fill="var(--text-2, #4a5260)">this round trip finishes before the line below begins</text>
  <circle cx="28" cy="40" r="7" fill="var(--gold, #b08d2a)"/>
  <text x="48" y="36" font-size="16" font-weight="700" fill="var(--text, #111418)">Your device</text>
  <text x="48" y="54" font-size="15" fill="var(--text-2, #4a5260)">the browser you typed into</text>
  <circle cx="28" cy="160" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="48" y="156" font-size="16" font-weight="700" fill="var(--text, #111418)">Your router</text>
  <text x="48" y="174" font-size="15" fill="var(--text-2, #4a5260)">everything in the house shares it</text>
  <circle cx="28" cy="206" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="48" y="202" font-size="16" font-weight="700" fill="var(--text, #111418)">Your internet provider</text>
  <text x="48" y="220" font-size="15" fill="var(--text-2, #4a5260)">carries it all, sees every destination</text>
  <circle cx="28" cy="252" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="48" y="248" font-size="16" font-weight="700" fill="var(--text, #111418)">The networks in between</text>
  <text x="48" y="266" font-size="15" fill="var(--text-2, #4a5260)">they see an address, not which site</text>
  <circle cx="28" cy="298" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="48" y="294" font-size="16" font-weight="700" fill="var(--text, #111418)">A delivery network</text>
  <text x="48" y="312" font-size="15" fill="var(--text-2, #4a5260)">a copy much nearer than the company</text>
  <circle cx="28" cy="344" r="7" fill="var(--oxblood, #8b1e2d)"/>
  <text x="48" y="340" font-size="16" font-weight="700" fill="var(--text, #111418)">The service itself</text>
  <text x="48" y="358" font-size="15" fill="var(--text-2, #4a5260)">often never contacted at all</text>
</svg>

:::predict Before reading on: of those seven, how many can tell that you visited a particular site? Count them, then check.
Six of the seven, and the exception is not the one people guess.

Your device knows, obviously. Your router carries both the lookup and the request. Whoever answers your names knows which names you asked for. Your provider carries everything you send, and on most home connections it answered the lookup as well, so it knows twice over. The delivery network knows, because it is the machine that actually handed you the page. And the service knows, because you arrived.

**The networks in between are the exception**, and the reason is in the figure. They see an address, not a name. One address at a delivery network commonly answers for thousands of different sites, so a network in the middle can say your traffic went to that machine and cannot say which of those thousands you were reading. That is the answer to the fourth objective of this lesson, and it's a narrower comfort than it sounds, because the parties at both ends of that stretch know perfectly well.

The exception most people expect to find is encryption, and it is not in this list because it does not remove a party from the path. It changes what they can read. That is lesson 8, and it is a much narrower promise than it sounds.
:::

Seven parties, and you have a relationship with exactly one of them.

Lesson 8 takes this same picture and marks which parts are hidden from whom, which is a different question and is the one people usually mean when they ask whether something is private.

## Why a failure looks like something else

The mechanism worth carrying away is not a diagram of seven boxes. It's a division of labour.

**Each step knows only its own job and trusts the one below it to deliver.** The name lookup doesn't know what a page is. The connection doesn't know what a name is. The browser doesn't know which cables the response came over.

That's why the system works at scale: nobody has to understand the whole of it, and any part can be replaced without telling the others. And it is why **a failure at one step produces a symptom at another that looks unrelated.** A name that will not resolve and a server that is down both show you a browser page saying it could not reach the site. The browser is reporting the only thing it can see, which is that nothing came back.

So the way to diagnose anything on a network is to walk the ladder and ask, at each rung, did this step work? That is what the next two commands are for.

## Two commands, on your own machine

You have a terminal now, and you know how to read what comes back from a command. Here are the two worth knowing.

### Name to address

`dig` asks the name system a question and shows you the answer.

```
$ dig +short wikipedia.org
208.80.153.224
```

That's the short form. The long form, `dig wikipedia.org`, prints considerably more, and three parts of it are worth finding:

```
;; ANSWER SECTION:
wikipedia.org.		145	IN	A	208.80.153.224

;; Query time: 27 msec
;; SERVER: 192.168.4.1#53
```

The **answer section** has the address. The number beside it, `145` here, is a **time to live**: how many seconds this answer may be kept before it has to be asked for again.

That number is the one worth watching, because it's the only place in the output where you can see a cache with your own eyes. Run the same lookup again half a minute later and it will have gone *down* rather than started over. Run it seven times in ten seconds and you can watch it count. On the machine this lesson was written on it read 107, 99, 97, 95, 93, 90.[2] Nothing about the name changed in those ten seconds. What you are watching is one kept copy of the answer ageing somewhere between you and the place that is authoritative for the name, and when the count reaches zero the next asker pays for a fresh lookup. It's also why a change to a site's address takes a while to reach everybody.

The **query time** is how long this particular answer took to come back, and it is worth being exact about what it does and does not show. `dig` does not read your own system's cache. It sends a real query to the machine on the `SERVER` line every time, so you pay that round trip on every run and the number stays roughly level: those same seven runs took 26, 29, 32, 30, 25, 25 and 29 milliseconds.[2] If you ever do see `0 msec`, it means the machine answering is your own, which is a different arrangement from the one described here. **The cache is real, and the time to live is where you see it. The query time is not.**

The **server** line is the machine that answered this query, and on most home connections it is your own router, which then asked somebody else. Unless that was changed, the chain ends at your internet provider. That is the party drawn off to the side in the figure above, and it is the one most people have never thought about.

Be careful how far you carry it, though, because `dig` is only telling you about your operating system's resolver and **your browser may not be using it.** Firefox has sent its own lookups to a resolver it chose, rather than to the one your machine is configured with, by default for users in the United States since February 2020.[4] `dig` cannot see that and cannot tell you about it, because it knows nothing about your browser. So the honest reading of the server line is "this is who answers when my operating system asks", which is not always who answers when you type into the address bar.

:::callout If `dig` is not there, and what Windows gives you instead
`dig` comes with macOS. On Debian and Ubuntu it is usually not installed and neither is `traceroute`; they live in the `dnsutils` package, called `bind9-dnsutils` on newer systems, and the `traceroute` package, and your system's software installer will fetch both.

In Git Bash on Windows `dig` is usually absent and `nslookup` is there instead. It will give you the two things you most need:

```
nslookup wikipedia.org
```

Read that answer the same way, a name, an address, and the server that told you. **What it will not give you is the time to live or a query time.** Neither is in the default output at all, so the countdown described above is not there to watch.

To get at it, add `-debug`, which Microsoft's own documentation describes as showing "more information about the packet sent to the server and the resulting answer":[3]

```
nslookup -debug wikipedia.org
```

That prints the whole answer packet rather than the summary, and the time to live is in there on a line beginning `ttl =`. That last detail is reported rather than documented, so treat what your own machine prints as the authority on it.
:::

### The route

A route trace sends packets with a deliberately short life and collects the complaints, which gives you a list of the machines along the way. Each machine that takes your packet and passes it on is one **hop**, and a trace prints one line per hop.

On macOS and Linux it is `traceroute`. On Windows it is `tracert`, which does work in Git Bash, but **its flags are not the same ones** and copying the line below will strand you. `tracert` counts hops with `-h` rather than `-m`. It has no `-q` at all, because it always sends three probes to each hop, so its output has three time columns rather than one. And it takes `-w` in **milliseconds** rather than seconds, so `-w 1` asks every machine on the path to answer inside a thousandth of a second and every one of them fails to.[3] The Windows form of the command below is:

```
tracert -h 12 -w 1000 wikipedia.org
```

This one was run from the machine this lesson was written on.[2] Every address after hop one has been replaced with a description, because together they identify a particular home connection:

```
$ traceroute -m 12 -w 1 -q 1 wikipedia.org
traceroute to wikipedia.org (208.80.153.224), 12 hops max
 1  192.168.4.1  3.820 ms
 2  <the provider's first machine>  5.517 ms
 3  <inside the provider's network>  6.232 ms
 4  <inside the provider's network>  15.254 ms
 5  *
 6  *
 7  *
```

The asterisk rows carried on to the twelfth hop, where the limit stopped it. The sample is cut at seven so that it fits the page.

Read it from the top. Hop one is the router in the house, at a `192.168.` address. Three ranges are set aside for private networks, `10.`, `172.16.` through `172.31.`, and `192.168.`, and home routers usually sit in the last of them, so yours will probably look similar. If yours starts with `10.` instead, nothing is wrong. Hops two, three and four are inside the internet provider. Then it goes quiet.

**The asterisks are the most instructive part of the output, and they do not mean the path is broken.** They mean those machines chose not to announce themselves, which many are configured not to do. The page loads perfectly. What you've learned is real: the first four rungs of the ladder are where you thought they were, and after that the path is somebody else's business.

:::predict You run the same trace twice, five minutes apart, and the middle of it is different the second time. What does that tell you?
That nobody is steering the whole of it. The route is decided hop by hop by each machine in turn, according to what it knows about the network at that moment, and it can change between one request and the next.

A large service does make choices about part of it. It buys transit from particular networks and it decides where to put its copies, which shapes the last stretch of the path. What neither of you has any say over is the middle.

Which is the point about the path that matters for the rest of the course: **you did not choose the middle of it, and it is not the same every time.** That is why the answer to "who can see this" is never a list of named companies. It is "whoever is on the path today", and the only durable defence is not caring, because what you sent was unreadable to them. Lesson 8 is about exactly that.
:::

## Working out which rung failed

Now the diagnosis, on the case everybody meets.

**"The site does not load on my laptop, but it works on my phone."**

Most people conclude the laptop is broken. You can do much better, because you know what the two devices do and don't share.

The phone, on mobile data, is on **a different network**, with a **different route**, and usually a **different name server**. It is the same browser company, the same site, and the same person typing. So the comparison has already ruled out a great deal: the site is up, and your typing is fine.

Walk the ladder on the laptop.

**Did the name resolve?** Run `dig` on the domain. If it returns an address, that rung is fine. If it returns nothing, the fault is at the top, and the commonest causes are a name server that is unwell and an answer that was kept too long.

**Did the connection open?** Run the route trace. If hop one fails, the trouble is between you and your own router, and that one is solid, because hop one is a machine in your house that ought to answer.

Past hop one, be careful, because this is where the rows of asterisks from earlier in this lesson meet the diagnosis and the two can be made to disagree. **Asterisks on their own are not a fault**, since plenty of machines are configured not to announce themselves, and a trace to a perfectly healthy site is often full of them. What is worth something is a **comparison**: run the same trace to a site that does load, from the same machine, and see where each one stops. If the good trace runs past the point where the bad one stops, you have learned something about the path. If both stop in the same place, you have learned about which machines answer traces, and nothing at all about your problem.

**Did the response arrive with a complaint?** If the page loads and says something like 403 or 500, everything below has worked perfectly and the site is telling you about itself.

That's three questions and two commands, and it turns "the internet is broken" into a sentence with a subject in it.

:::checkpoint A colleague says a site "works at home and not in the office". Name the rungs that differ between those two places, and the one that does not.
**Different:** the local network and its router, the internet provider, the route, and almost certainly the name server, since an office usually runs its own or is given one. An office may also filter deliberately, which is a fifth difference and is not a fault.

**The same:** the site. So, as with the phone, the comparison rules out the far end before you have run anything.

The extra rung in an office is worth naming out loud, because it is the answer nine times out of ten and it isn't a technical fault at all. Somebody decided that site should not load here.
:::

## What people get wrong

**"The internet is a place I send things to."** The single box from the study at the top. There are at least seven parties, you've a relationship with one, and the rest are in the path whether you think about them or not.

**"The website is a computer somewhere and I am talking to it."** Mostly you are talking to a copy held much nearer than the company itself, and your page is pulling pieces from several other companies at the same time. "Which computer am I talking to" usually has more than one answer.

**"Home Wi-Fi is safe because it has a password."** What the participants in the study actually said was that their home network was *safer than public Wi-Fi*, because of its password and its settings.[1] That's a comparison rather than a verdict, and as a comparison it's fair. The trouble starts when it's heard as one, so it's worth being exact about what the password actually does. It decides **who may join the network inside your house**. Everything from your router onwards, which is six of the seven parties in the figure, is entirely untouched by it. A password on your Wi-Fi is a lock on your front door, and the postal system is unaffected.

**"My internet provider just carries the data."** It carries the data, and on most home connections it also answers your name lookups, which means it sees the *name* of every site you ask for and not only the address. Those are two different kinds of knowing and the second is much the more revealing, because a name is the site and an address often is not.

Be careful about the next step, though, which is the one people take without noticing. Seeing is not the same as keeping. Whether a provider records what it saw, and for how long, varies by company, by contract and by country, and this course has not read the research that would let it tell you what yours does. What's certain is that the name is available to it. What happens to it afterwards is a question you'd have to ask.

**"If the site is slow, my connection is slow."** It might be. It might also be one of a dozen other companies whose script the page is waiting on, or a name lookup that is timing out, or a copy that is further away than usual. "Slow" is a symptom at the top of the ladder and its cause is usually further down.

## Practice

:::exercise Run the two commands on somewhere you actually go
Take 20 minutes. Use a site you visit most days rather than the one in this lesson.

1. Run the short name lookup on your domain and write down the address it returns.

2. Run the long form. Find the answer section, the number beside the address, and the server line. Write down all three, and say in one sentence what the server line tells you about who answers your operating system's name lookups. On Windows use the `-debug` form from the callout above, because the plain output has neither of the numbers you need.

3. Run that same lookup twice more, about thirty seconds apart, and write down the number beside the address each time. Say in one sentence what the change in that number tells you, and what it would have meant if it had gone back up to where it started.

4. Run the route trace. Write down how many hops answered before the first asterisk, and what the first hop's address is.

5. Run the trace a second time, a few minutes later, and note whether anything changed.

6. Answer in writing: which of the seven parties in the figure have you now seen evidence of with your own eyes?
:::

:::exercise Draw it again, and count who can see you
Take 15 minutes. Get out the drawing you made before you started reading.

1. Draw both of them again, the internet and what happens when you visit a website, without looking at the first pair.

2. Now put the two pairs side by side. Write down every party that is in the second pair and not the first.

3. With the lesson closed, list three parties who can tell that you visited the site you chose. Be specific: not "hackers", but a named kind of party.

4. Name the one party that cannot tell which site it was, and say in a sentence why not. Then say what it *can* tell.

5. Go back to the security plan you wrote in lesson 1. Add any party from this lesson that your plan had no room for. That is Kang's finding happening to you rather than to somebody in a study.
:::

## Connections

Lesson 6 gave you the habit this lesson runs on: type a command, read what comes back, work out what it means. The two commands here are the first time you've pointed that habit at something outside your own machine.

Lesson 8 takes the figure above and marks it up. Now that you can name the parties, the question "what does encryption hide, and from whom" has somewhere to land, and so does the more interesting version: which of your worries do none of the three popular tools touch at all?

Lesson 11 needs one idea from here: a link goes somewhere, and the somewhere is a name, and a name is not the thing it looks like.

Lesson 13 needs the party count. When you ask what a service holds about you, this lesson is why the honest answer includes companies you never chose.

Lesson 1's security plan gains named parties, which is the whole of what this lesson does for it.

## Go deeper

- **[Kang, Dabbish, Fruchter and Kiesler, "My Data Just Goes Everywhere"](https://www.usenix.org/system/files/conference/soups2015/soups15-paper-kang.pdf)** (2015), free from the symposium. Read it for the drawings and the quotations. The participants describe the internet in their own words and it is the best argument I know for why this lesson exists.
- **[MDN, "How does the Internet work?"](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)**, free and under a Creative Commons licence. Mozilla's own beginner's account of the same machinery, working upwards from cables and switches to routers and providers, which is the opposite order from this lesson. Read it for the half this lesson deliberately left out, and for the distinction between the internet and the web.
- **Your own browser's developer tools.** Press F12, or Command, Option and I on a Mac, open the Network tab, and reload a page you use. Every row is one of the trips described in step four above. Counting the companies on a news site is a five-minute exercise that does more than another thousand words here would.

## Sources

1. Ruogu Kang, Laura Dabbish, Nathaniel Fruchter and Sara Kiesler, "'My Data Just Goes Everywhere': User Mental Models of the Internet and Implications for Privacy and Security", *Symposium on Usable Privacy and Security*, 2015, pages 39 to 46. Read in full. Supplies the drawing method, the 28 participants split 17 lay and 11 technical, the finding that 14 drew a simple single-box internet of whom 13 were lay users, the comparison of how many parties each group named (about 4 against about 2.56), and the belief about home Wi-Fi. That belief is **comparative in the paper**, that a home network is safer than public Wi-Fi because of its password and its settings, and this lesson states it that way; an earlier draft inherited a trimmed absolute form. The date is the year of publication, which is the only date the citation carries; the paper's fieldwork dates are not repeated here because they were not read.
2. Checked on the machine this lesson was written on, macOS, September 2026. `dig +short wikipedia.org` returned `208.80.153.224`. The long form reported a time to live of 145 seconds and a server on the local network. **Run seven times over about ten seconds, the time to live counted down 107, 99, 97, 95, 93, 90 and the query times were 26, 29, 32, 30, 25, 25 and 29 milliseconds**, never zero and never falling: `dig` queries the configured server on every run rather than reading the operating system's cache, which is why the countdown and not the query time is where the cache is visible. An earlier draft of this lesson claimed the second query time is "often reported as `0 msec`", which is false on the setup described here and was corrected on 19 September 2026. `traceroute -m 12 -w 1 -q 1 wikipedia.org` answered for four hops and then returned asterisks to the twelfth, where the limit stopped it, while the site loaded normally in a browser. Every address after hop one in the sample above is replaced with a description, because together they identify a particular home connection.
3. Microsoft, "nslookup", "nslookup set debug" and "tracert", learn.microsoft.com. Read 19 September 2026. Supplies the `nslookup -debug` form and the sentence quoted from it about showing more information about the packet and the answer, which is verbatim; and the whole of the `tracert` flag warning, namely that hops are set with `/h` (which also works as `-h`), that the timeout `/w` is in milliseconds with a default of 4000, that there is no `-q` or `-m`, and that the documented example output carries three time columns per hop. That the default `nslookup` output contains neither a time to live nor a query time is from the same pages, which document no such fields. The `ttl =` line inside debug output is **not** in the documentation and is marked in the lesson as reported rather than documented.
4. Mozilla, "Firefox continues push to bring DNS over HTTPS by default for US users", blog.mozilla.org, 25 February 2020. Read 19 September 2026. Supplies the single claim it is cited for: that Firefox began sending lookups to a resolver of its own by default for users in the United States from that date, rather than to the one the operating system is configured with. It is cited because it falsifies "unless you changed a setting", which an earlier draft of this lesson said.
