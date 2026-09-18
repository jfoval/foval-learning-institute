---
title: From an address to a page
minutes: 105
objectives:
  - Say in order what happens between typing a web address and seeing a page, naming every party that takes part
  - Run a name lookup and a route trace on a domain you chose, and read what comes back
  - Work out from a described symptom which step failed, and say what you would check next
  - Name three parties who can see which sites you visit, and one who cannot
quiz:
  - q: A reader cannot reach a site on her laptop. It loads on her phone, which is on mobile data rather than the house Wi-Fi. What does that comparison rule out, and what does it point at?
    options:
      - It rules out the site being down, and points at her laptop's own browser
      - It rules out her laptop, and points at the site having blocked her account
      - It rules out the site being down, and points at something on the house's path
      - It rules out the whole network, and points at the address being mistyped
    answer: 2
    explain: The phone reached the site, so the site is up, and the phone took a different network and usually a different name service, so the difference lives somewhere on the house's path, which is C. A jumps to the browser without testing it, and the browser is the one thing both devices do not share. B invents an account block, which would follow her to the phone. D contradicts itself, since something clearly worked.
  - q: Somebody says a website is "a computer in California that I am talking to". What is the most useful correction?
    options:
      - The company owns many computers, so it is several computers rather than one
      - The page usually comes from a nearer copy, and it pulls in several companies
      - The computer is real and the distance is what makes a page slow to arrive
      - It is a computer somewhere, and where it sits is a detail nobody needs to know
    answer: 1
    explain: Most pages are served from a copy held much closer than the company's own machines, and most pages also fetch things from several other companies, which is B and is what changes who can see what. A corrects the count and leaves the picture unchanged. C keeps the single distant machine and explains slowness with it. D waves the question away, and the whole lesson is that the detail decides what you can worry about.
  - q: A name lookup returns an address in a fraction of a millisecond, far faster than any answer could travel. What has happened?
    options:
      - The answer was held nearby from a previous lookup, so nothing travelled
      - The name service is unusually close, which is why the answer came back fast
      - The lookup failed and the browser used an address it had guessed instead
      - The address was already inside the request, so no lookup was needed at all
    answer: 0
    explain: Answers are kept for a while after they are fetched, so a repeat lookup is answered locally and no request leaves the machine, which is A and is why a stale answer can outlive a change. B cannot account for a time shorter than light allows. C invents a guess no resolver makes. D describes something the browser never has, since the name is what you typed.
  - q: A route trace prints four machines and then rows of asterisks all the way to the end, and yet the site loads perfectly in a browser. What should you conclude?
    options:
      - The route is broken after the fourth machine and the browser found another
      - The trace reached its limit of hops before it could arrive at the far end
      - The site is refusing the trace deliberately, which is worth worrying about
      - Some machines along the way decline to answer the trace, which is ordinary
    answer: 3
    explain: A trace depends on machines choosing to announce themselves, and plenty are configured not to, so silence is about policy rather than about the path, which is D. A is contradicted by the page loading perfectly well. B is worth checking and is not what silence means, since reaching a hop limit ends the trace rather than filling it with asterisks. C singles out the site when the quiet machines are in the middle of the path.
  - q: A neighbour says his home Wi-Fi is private because it has a password on it. What does the password actually decide?
    options:
      - Who can join the local network, and nothing about the path after that
      - Whether his internet provider can see the addresses he asks for
      - Whether the sites he visits can tell which house the request came from
      - How much of what he sends is scrambled between the house and the site
    answer: 0
    explain: The password governs admission to the network in the house, and every party after the router is untouched by it, which is A. B is wrong in the direction that matters, since the provider is on the far side of the router. C describes something the password does not control either way. D is about encryption, which is lesson 8's subject and is decided by the site rather than by the Wi-Fi.
  - q: Why does a failure in one step so often produce a symptom that looks like a different problem?
    options:
      - Because the steps run at the same time, so a failure lands in an arbitrary place
      - Because each step knows only its own job and reports only what it can see
      - Because browsers hide the real error to avoid alarming people unnecessarily
      - Because the steps are ordered differently depending on the site being asked for
    answer: 1
    explain: The division of labour is the whole design, because the name lookup knows nothing about the page and the connection knows nothing about the name, so each one reports its own small failure and the reader sees something that seems unrelated, which is B. A misdescribes an ordered sequence as simultaneous. C blames the browser for a structural fact. D invents a reordering that does not happen.
---

Before you read another line, do this. It takes two minutes and it won't work afterwards.

:::exercise Draw the internet
Take 2 minutes. Paper, or a blank note, whichever is nearer.

1. Draw the internet. However you picture it. There's no right answer and nobody is going to see it.

2. Now draw what happens when you visit a website. Put yourself in it somewhere.

3. Keep it. The last exercise in this lesson asks you to draw it again, and the difference between the two is the only evidence that any of this worked.
:::

In 2015 four researchers asked twenty-eight people to do exactly that, with paper and a pen, and then talk through what they had drawn.[1] Seventeen were ordinary users and eleven had technical training.

**Fourteen of the twenty-eight drew a single box.** You send a request in, an answer comes back, and there is nothing in between. Thirteen of those fourteen were the ordinary users.

That picture isn't stupid. It's a perfectly reasonable summary of what you can see. The trouble is what it can't hold: the people with layered pictures named about four parties who could see their data, and the single-box people named about two and a half, and the authors' explanation is the sentence this lesson exists for.

**You can't worry about something your picture doesn't contain.**

So this lesson is about putting the parties into your picture. Not because worry is good, but because in lesson 1 you wrote a security plan, and a plan can only defend against threats you can name.

## The ladder, top down

Start where you already are, which is a deliberate choice: the standard way to teach this subject works downwards from what the learner already does rather than upwards from cables, and this lesson borrows that order.[3] So: you type `wikipedia.org` and press return.

**One. The name has to become an address.** `wikipedia.org` is a name for humans. The machinery underneath works on numeric addresses, so something has to translate, and that something is the **Domain Name System**, DNS. Your machine asks a name server, and the answer comes back as an address.

**Two. A connection is opened to that address.** Your request leaves your machine, goes to your router, goes to your internet provider, and from there crosses some number of other networks until it reaches a machine that answers to that address. Nobody at either end chose the route in between.

**Three. A request is sent and a response comes back.** Your browser asks for a particular page. The far end replies with the page, or with an error code saying why not.

**Four. And then it happens again, dozens of times.** The page you asked for is a skeleton. It names images, fonts, scripts, advertising, analytics, and each of those is a fresh trip, often to a different company. A single ordinary page can touch a dozen organisations, most of which you've never heard of and none of which you asked for.

Notice how little of that is what you think of as "the website".

## Who is actually in the path

Here is the same journey drawn as a list of parties, because the parties are the part that matters for the rest of the course.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 356" role="img" aria-labelledby="path-title path-desc" style="width:100%;height:auto;font-family:inherit">
  <title id="path-title">Who is in the path between you and a page</title>
  <desc id="path-desc">Seven parties in order, top to bottom, connected by a line. Your device, the browser you typed into. Your router, which everything in the house shares. Your internet provider, which carries every request and sees every destination. Whoever answers your name lookups, which is usually your provider unless you changed it. The networks in between, which neither end chose. A content delivery network, which is usually a copy much nearer than the company itself. And the service itself, which is often the last party to hear from you rather than the first.</desc>
  <line x1="24" y1="36" x2="24" y2="312" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <circle cx="24" cy="36" r="7" fill="var(--gold, #b08d2a)"/>
  <text x="44" y="32" font-size="16" font-weight="700" fill="var(--text, #111418)">Your device</text>
  <text x="44" y="50" font-size="15" fill="var(--text-2, #4a5260)">the browser you typed into</text>
  <circle cx="24" cy="82" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="78" font-size="16" font-weight="700" fill="var(--text, #111418)">Your router</text>
  <text x="44" y="96" font-size="15" fill="var(--text-2, #4a5260)">everything in the house shares it</text>
  <circle cx="24" cy="128" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="124" font-size="16" font-weight="700" fill="var(--text, #111418)">Your internet provider</text>
  <text x="44" y="142" font-size="15" fill="var(--text-2, #4a5260)">carries it all, sees every destination</text>
  <circle cx="24" cy="174" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="170" font-size="16" font-weight="700" fill="var(--text, #111418)">Whoever answers your names</text>
  <text x="44" y="188" font-size="15" fill="var(--text-2, #4a5260)">your provider, unless you changed it</text>
  <circle cx="24" cy="220" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="216" font-size="16" font-weight="700" fill="var(--text, #111418)">The networks in between</text>
  <text x="44" y="234" font-size="15" fill="var(--text-2, #4a5260)">neither end chose them</text>
  <circle cx="24" cy="266" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="262" font-size="16" font-weight="700" fill="var(--text, #111418)">A delivery network</text>
  <text x="44" y="280" font-size="15" fill="var(--text-2, #4a5260)">a copy much nearer than the company</text>
  <circle cx="24" cy="312" r="7" fill="var(--oxblood, #8b1e2d)"/>
  <text x="44" y="308" font-size="16" font-weight="700" fill="var(--text, #111418)">The service itself</text>
  <text x="44" y="326" font-size="15" fill="var(--text-2, #4a5260)">often the last to hear from you</text>
</svg>

:::predict Before reading on: of those seven, how many can tell that you visited a particular site? Count them, then check.
Six of the seven, and the exception is not the one people guess.

Your device knows, obviously. Your router carries the request. Your provider carries it and, unless you changed a setting, also answered the name lookup, so it knows twice over. Whoever answers your names knows which names you asked for. The networks in between see traffic going to an address. The service itself knows, because you arrived.

**The delivery network is the one that varies**, and it usually knows too, because it is the machine that actually handed you the page.

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

The **answer section** has the address. The number beside it, `145` here, is how many seconds this answer may be kept before it should be asked for again, which is why a change to a site's address takes a while to reach everybody.

The **query time** is how long it took. When you run the same lookup twice, the second is often reported as `0 msec`, because the answer was kept nearby and nothing travelled at all.

The **server** line is the machine that answered, and on most home connections it is your own router, which then asked somebody else. If you've never changed it, the chain ends at your internet provider. That is the fourth party in the figure above, and it's the one most people have never thought about.

:::callout If `dig` is not there
`dig` comes with macOS and most Linux systems. In Git Bash on Windows it's usually absent, and `nslookup` is there instead and does the same job with different output:

```
nslookup wikipedia.org
```

Read its answer the same way: a name, an address, and the server that told you.
:::

### The route

A route trace sends packets with a deliberately short life and collects the complaints, which gives you a list of the machines along the way.

On macOS and Linux it is `traceroute`. On Windows it is `tracert`, and in Git Bash `tracert` also works.

Here is a real one, run from the machine this lesson was written on.[2] The public addresses have been replaced, because they are somebody's home connection:

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

Read it from the top. Hop one is the router in the house, at a `192.168.` address, which is the range reserved for private networks, and which is why yours will look similar. Hops two, three and four are inside the internet provider. Then it goes quiet.

**The asterisks are the most instructive part of the output, and they do not mean the path is broken.** They mean those machines chose not to announce themselves, which many are configured not to do. The page loads perfectly. What you've learned is real: the first four rungs of the ladder are where you thought they were, and after that the path is somebody else's business.

:::predict You run the same trace twice, five minutes apart, and the middle of it is different the second time. What does that tell you?
That nobody is steering. The route is decided hop by hop by each machine in turn, according to what it knows about the network at that moment, and it can change between one request and the next.

Which is the point about the path that matters for the rest of the course: **you did not choose it, the site did not choose it, and it is not the same every time.** That is why the answer to "who can see this" is never a list of named companies. It is "whoever is on the path today", and the only durable defence is not caring, because what you sent was unreadable to them. Lesson 8 is about exactly that.
:::

## Working out which rung failed

Now the diagnosis, on the case everybody meets.

**"The site does not load on my laptop, but it works on my phone."**

Most people conclude the laptop is broken. You can do much better, because you know what the two devices do and don't share.

The phone, on mobile data, is on **a different network**, with a **different route**, and usually a **different name server**. It is the same browser company, the same site, and the same person typing. So the comparison has already ruled out a great deal: the site is up, and your typing is fine.

Walk the ladder on the laptop.

**Did the name resolve?** Run `dig` on the domain. If it returns an address, that rung is fine. If it returns nothing, the fault is at the top, and the commonest causes are a name server that is unwell and an answer that was kept too long.

**Did the connection open?** Run the route trace. If hop one fails, the trouble is between you and your own router. If hop one works and nothing after it does, the trouble is at or just past your provider.

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

**"Home Wi-Fi is safe because it has a password."** The participants in the 2015 study said this, and it's worth being exact about what the password does.[1] It decides **who may join the network inside your house**. Everything from your router onwards, which is six of the seven parties in the figure, is entirely untouched by it. A password on your Wi-Fi is a lock on your front door, and the postal system is unaffected.

**"My internet provider just carries the data."** It carries the data, and unless you changed a setting it also answers your name lookups, which means it holds a list of every site you asked for by name. Those are two different kinds of knowing and the second is the more revealing.

**"If the site is slow, my connection is slow."** It might be. It might also be one of a dozen other companies whose script the page is waiting on, or a name lookup that is timing out, or a copy that is further away than usual. "Slow" is a symptom at the top of the ladder and its cause is usually further down.

## Practice

:::exercise Run the two commands on somewhere you actually go
Take 20 minutes. Use a site you visit most days rather than the one in this lesson.

1. Run the short name lookup on your domain and write down the address it returns.

2. Run the long form. Find the answer section, the number beside the address, and the server line. Write down all three, and say in one sentence what the server line tells you about who answers your name lookups.

3. Run the same lookup a second time and compare the query time. Write down both numbers.

4. Run the route trace. Write down how many hops answered before the first asterisk, and what the first hop's address is.

5. Run the trace a second time, a few minutes later, and note whether anything changed.

6. Answer in writing: which of the seven parties in the figure have you now seen evidence of with your own eyes?
:::

:::exercise Draw it again, and count who can see you
Take 15 minutes. Get out the drawing you made before you started reading.

1. Draw the internet again, without looking at the first one.

2. Now put the two side by side. Write down every party that is in the second drawing and not the first.

3. List three parties who can tell that you visited your chosen site. Be specific: not "hackers", but a named kind of party from the figure.

4. Name one party who cannot tell. This is harder than it sounds, and it's the question lesson 8 answers properly, so an incomplete answer here is the right kind of incomplete.

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
- **Your own browser's developer tools.** Press F12, or Command, Option and I on a Mac, open the Network tab, and reload a page you use. Every row is one of the trips described in step four above. Counting the companies on a news site is a five-minute exercise that does more than another thousand words here would.

## Sources

1. Ruogu Kang, Laura Dabbish, Nathaniel Fruchter and Sara Kiesler, "'My Data Just Goes Everywhere': User Mental Models of the Internet and Implications for Privacy and Security", *Symposium on Usable Privacy and Security*, 2015, pages 39 to 46. Read in full. Supplies the drawing method, the 28 participants split 17 lay and 11 technical, the finding that 14 drew a simple single-box internet of whom 13 were lay users, the comparison of how many parties each group named (about 4 against about 2.56), and the belief that home Wi-Fi is safe because it has a password.
2. Checked on the machine this lesson was written on, macOS, September 2026. `dig +short wikipedia.org` returned `208.80.153.224`; the long form reported a query time of 27 milliseconds, a time-to-live of 145 seconds, and a server on the local network; and `traceroute -m 12 -w 1 -q 1 wikipedia.org` answered for four hops and then returned asterisks to the limit while the site loaded normally in a browser. The public addresses in the sample above are replaced with descriptions, because they belong to a particular home connection.
3. This lesson takes its top-down order, starting at what the reader already does and working downwards, from the standard undergraduate networking text's first chapter. That is a choice about teaching sequence rather than a claim taken from the book, and the book is in this course's `unread:` line, so nothing here is attributed to it and its authors are not named.
