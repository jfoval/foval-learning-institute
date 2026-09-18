---
title: The padlock, the VPN and the private window
minutes: 145
objectives:
  - Say exactly what the padlock in the address bar certifies, what it has never certified, and why that makes it useless as a safety signal
  - Place each of the three tools on lesson 7's path, saying which party it changes something for and which parties it leaves untouched
  - Take a worry off your own security plan and say which of the three tools addresses it, and say so honestly when none of them does
  - Read a security product's claims and sort them into measurable, unmeasurable, and false
  - Find the registered domain in a web address by reading leftwards from the first single slash, and say why reading it the other way is what makes a fake convincing
quiz:
  - q: A reader is sent to `https://account.royalmail.com.delivery-fee-uk.net/pay`, sees a padlock, and pays. Where was she, and what had the padlock told her?
    options:
      - At `royalmail.com`, and the padlock had confirmed the certificate was genuine
      - At `delivery-fee-uk.net`, and the padlock had said only that the link was safe
      - At `com.delivery-fee-uk.net`, and the padlock had said nothing about any of it
      - At `delivery-fee-uk.net`, and the padlock had said only that it was encrypted
    answer: 3
    explain: Read leftwards from the single slash, past the ending `net` and one word further to `delivery-fee-uk`, and you are at `delivery-fee-uk.net`, which is D. Everything to the left of it, `royalmail.com` included, was chosen by whoever registered it. The padlock was telling the truth about the connection to that domain and had never claimed anything else. A reads the address left to right, which is the whole trap. B gets the domain right and then has the padlock making a safety claim it does not make. C stops one word short and treats an ending as the name.
  - q: A man opens a private window on his work laptop, on his employer's Wi-Fi, and reads about a competitor's job vacancies. He is worried about four things. Which one is the private window no help with at all?
    options:
      - Whether anything about the visit is left on the laptop for IT to find later
      - Whether his employer's network can tell which sites he reached this morning
      - Whether the job site sees a cookie from the browsing he did there last week
      - Whether that browser will offer the job site's address the next time he types
    answer: 1
    explain: The employer's network sits on the far side of the browser and the window reaches nothing beyond the device, so B is the one it does nothing about, and it is the one that would actually cost him his job. A, C and D are all on the device, and all three are genuinely changed. C is worth being exact about, because a private window does not send the ordinary cookie jar, so last week's cookie is not offered and the site cannot match him by it.
  - q: Somebody signs in to her bank over a café's open Wi-Fi with a consumer VPN running. What has the VPN actually changed about that session?
    options:
      - The café network sees a connection to the VPN company and not to the bank
      - The bank no longer knows who is signing in, since her address is hidden
      - Her traffic is now encrypted, where it would otherwise have been readable
      - Nothing at all changed, because the bank was already using HTTPS throughout
    answer: 0
    explain: The VPN moves the visible far end of the first stretch, so the café sees traffic going to the VPN company and stops seeing which sites she reached, which is A. B is the claim the Consumer Reports evaluation ran into repeatedly, and it is wrong here for a plain reason, since she signs in with her own credentials and the bank knows precisely who she is. C credits the VPN with encryption that HTTPS was already providing between her and the bank. D goes too far the other way, because HTTPS hid the contents and never hid the destination, and the destination is exactly what moved.
  - q: A woman gets an unexpected message about a parcel, thinks it looks off, and opens it in a private window "to be safe". What has she protected herself from?
    options:
      - Any tracking the page does, because a private window blocks it entirely
      - Most of it, since the page cannot reach anything outside the private session
      - Nothing that the message could actually do to her or to her machine
      - The download, because a private window will not save files to the computer
    answer: 2
    explain: A private window governs what the browser keeps afterwards, and nothing she was afraid of lives there, so the honest answer is C. This is the one misconception in the lesson with a safety consequence, and it has been measured, because 12% of one of the 2018 study's two populations expected private browsing to protect them from malware and hacking. A overstates it, since the page can still set cookies and track her while the session is open. B invents an isolation the window does not provide. D is wrong on the plain facts, because a file downloaded in a private window lands on the disk like any other.
  - q: A woman says, "I don't want my sister seeing what I looked at on the family laptop." Which of the three tools addresses that worry, and why?
    options:
      - A VPN, because it hides the destinations from anybody watching the connection
      - HTTPS, because the contents of every page are unreadable to anyone but you
      - None of them, because a shared machine is a problem of accounts rather than tools
      - A private window, because what it keeps on that machine is the whole of the worry
    answer: 3
    explain: The worry names a person with physical access to the same machine, and the thing she would read is the history on its disk, which is the one place a private window operates, so it is D. A and B both defend the connection, and the sister is not on the connection, she is in the house. C is a good instinct and a better long-term answer, but it is not true that no tool touches this, because it is the one worry in the whole lesson that a private window straightforwardly answers.
  - q: A VPN's product page says it uses "military-grade encryption", has "no logs", and is "audited". How should those three claims be sorted?
    options:
      - The first is empty marketing, the second is a promise, the third is checkable
      - All three are unmeasurable, since a buyer cannot verify anything a vendor says
      - All three are measurable, since each names something a tester could examine
      - The first two are checkable and the third depends on who performed the audit
    answer: 0
    explain: The phrase "military-grade" describes no particular thing, and it is the one the Consumer Reports evaluation of 2021 singles out as a red flag for exactly that reason; "no logs" describes something happening inside a company that a customer cannot observe, so it is a promise you either trust or do not; and an audit either exists as a published document or it does not, which makes A the sorting that holds. B gives up too early on the one claim you can actually go and check. C treats a phrase with no content as a measurement. D has the first two and the third the wrong way round.
---

Take the drawing you made in lesson 7, the second one, the one with the parties in it. You are going to need it, and this lesson is going to ask you to mark it up rather than draw it again.

:::exercise Fill the table before you read the answer
Take 10 minutes. Copy these three rows onto paper.

Imagine one ordinary browsing session: you look up a medical symptom, on a laptop, at home, on your own connection.

Now run that same session three ways, and for each way write down four things: what your internet provider can tell, what the site can tell, what is left on the laptop afterwards, and what your employer's network would see if you did it at work instead.

**Row one:** an ordinary window.
**Row two:** a private window.
**Row three:** through a consumer VPN.

Twelve boxes. Fill in all twelve, including the ones you're unsure about, and put a mark beside any you guessed at. Come back to the marked ones at the end, because those are the ones this lesson was written for.
:::

Most people's three rows come out looking very different from one another. When you see the filled-in version later on, the striking thing is how much of it is the same words repeated, and the handful of boxes that do differ are the only places any of these tools does anything at all.

## Three tools, and one question to ask all of them

The padlock, the private window and the VPN are the three security tools an ordinary person is most likely to have an opinion about. They are also the three most often used against a problem they do not touch.

First, three words, because lesson 1 promised you this lesson would say what they mean and lessons 2 to 7 haven't.

**Encryption** is scrambling something so that only the intended reader can unscramble it. Anyone carrying it in between sees the scrambled version and can do nothing with it.

**HTTPS** is the web's own way of asking for and sending pages, with encryption on top. The `s` is the encryption, and the padlock, where your browser still shows one, is the sign that it's in use.

**A cookie** is a small note a site asks your browser to keep and hand back on the next visit. It's how a site knows you're the same visitor as last week, and it's what keeps you signed in.

Now, the thing the three tools have in common, and it's the whole lesson. **Each of them acts at exactly one point on the path you drew in lesson 7.** Not at all of it, not at "the internet", at one point. Every misconception in this lesson, including the measured ones with numbers attached, is somebody applying a tool at a point it doesn't reach.

So there is one question to ask of each tool, and you already have the diagram to ask it against:

**Which party on the path does this change something for, and which parties does it leave exactly as they were?**

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 360" role="img" aria-labelledby="tools-title tools-desc" style="width:100%;height:auto;font-family:inherit">
  <title id="tools-title">Which parties each of the three tools changes something for</title>
  <desc id="tools-desc">Lesson 7's path down the left, with three vertical bars to the right. Each bar covers exactly the parties that tool changes something for. Your device, with the name lookup branching off it and finishing first, then your router, your internet provider, the networks in between, a delivery network, and on a dashed last segment the service itself, which is usually never contacted at all. The private window bar covers your device and nothing else. The HTTPS bar covers your router, your internet provider and the networks in between, and stops at both ends, because the name lookup happened before the connection opened and because the two ends of an encrypted connection are the two parties who can read it. The VPN bar covers the name lookup, your router, your internet provider and the networks in between, and at its foot sits the VPN company, a party the path did not have before, which now sees what the internet provider used to see.</desc>
  <text x="263" y="28" font-size="15" font-weight="700" fill="var(--navy, #0f2a4a)">HTTPS</text>
  <text x="328" y="28" font-size="15" font-weight="700" fill="var(--gold, #b08d2a)">private</text>
  <text x="407" y="28" font-size="15" font-weight="700" fill="var(--oxblood, #8b1e2d)">VPN</text>
  <rect x="280" y="138" width="16" height="108" rx="8" fill="var(--navy, #0f2a4a)" opacity="0.85"/>
  <rect x="348" y="46" width="16" height="24" rx="8" fill="var(--gold, #b08d2a)"/>
  <rect x="416" y="86" width="16" height="160" rx="8" fill="var(--oxblood, #8b1e2d)" opacity="0.85"/>
  <circle cx="424" cy="266" r="6" fill="var(--oxblood, #8b1e2d)"/>
  <text x="440" y="298" font-size="15" font-weight="700" text-anchor="end" fill="var(--oxblood, #8b1e2d)">The VPN company</text>
  <text x="440" y="316" font-size="15" text-anchor="end" fill="var(--text-2, #4a5260)">replaces your provider</text>
  <line x1="26" y1="58" x2="26" y2="272" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <line x1="26" y1="272" x2="26" y2="318" stroke="var(--text-2, #4a5260)" stroke-width="2" stroke-dasharray="5 5"/>
  <path d="M 28 68 C 32 90, 56 98, 80 98" fill="none" stroke="var(--text-2, #4a5260)" stroke-width="2"/>
  <circle cx="90" cy="98" r="5" fill="var(--text-2, #4a5260)"/>
  <text x="104" y="103" font-size="15" fill="var(--text-2, #4a5260)">Your name lookups</text>
  <text x="44" y="124" font-size="15" fill="var(--text-2, #4a5260)">and this one finishes first</text>
  <circle cx="26" cy="58" r="7" fill="var(--gold, #b08d2a)"/>
  <text x="44" y="63" font-size="15" font-weight="700" fill="var(--text, #111418)">Your device</text>
  <circle cx="26" cy="152" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="157" font-size="15" font-weight="700" fill="var(--text, #111418)">Your router</text>
  <circle cx="26" cy="192" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="197" font-size="15" font-weight="700" fill="var(--text, #111418)">Your internet provider</text>
  <circle cx="26" cy="232" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="237" font-size="15" font-weight="700" fill="var(--text, #111418)">The networks in between</text>
  <circle cx="26" cy="272" r="6" fill="var(--navy, #0f2a4a)"/>
  <text x="44" y="277" font-size="15" font-weight="700" fill="var(--text, #111418)">A delivery network</text>
  <circle cx="26" cy="318" r="7" fill="var(--oxblood, #8b1e2d)"/>
  <text x="44" y="323" font-size="15" font-weight="700" fill="var(--text, #111418)">The service itself</text>
  <text x="44" y="341" font-size="15" fill="var(--text-2, #4a5260)">usually never contacted at all</text>
</svg>

Three bars, three different lengths, and each one covers exactly the parties that tool changes something for.

The private window is the short one. It covers your device and stops there, because your device is all it is about.

HTTPS covers the three parties in the middle. It stops short of the branch, because the name lookup finished before the connection opened and is not inside it, and it stops short of the far end, because the two ends of an encrypted connection are the two parties who can read it.

The VPN covers the branch and the middle, and then there is a party at the foot of it that was not on lesson 7's path at all. That party is the whole of the VPN section below, and it is the part the advertising tends to leave out.

Now take the three in turn.

## What the padlock certifies

When you see the padlock, one thing has been established: **the connection between your device and whatever domain is in the address bar is encrypted.** That is it. That is the whole claim.

Work through the path with that in hand.

Your router, your provider and the networks in between now carry traffic they cannot read. They can still tell that you connected, when, and how much.

**What they can tell about *where* is not the same for all three**, and lesson 7 settled it. Your router and your provider can name the domain, because on most home connections your provider answered the name lookup as well. The networks in between are where lesson 7 left them: an address, and one address at a delivery network answers for thousands of sites. They cannot tell what you asked for or what came back.

The name lookup is untouched, because it happened before the connection opened and it is not inside it. Whoever answered your names still knows which names you asked for.

The delivery network and the service can read everything, because they are the far end. Encryption between two parties is not a secret from either of them.

So HTTPS changed what the *middle* can read, and it changed nothing whatever about who the *ends* are.

### Which is why the padlock is finished as a safety signal

The certificates behind phishing padlocks are **domain-validated** ones, and that is the term the research uses.[1] What domain validation means is that something proved control of the domain name. Not that a company exists, not that it's the company it says it is, not that it's honest. It proved it controls `example.com`, and it got a certificate for `example.com`.

There are stricter kinds, which check more, and this course hasn't researched how common they are. It doesn't need to, because the point stands either way: the padlock looks identical whichever kind is behind it, so it can't be the thing you read.

Anybody who registers a domain controls it. Including somebody who registers `secure-barclays-login.com` this morning.

The numbers are exactly as bad as that suggests. The Anti-Phishing Working Group's quarterly reports carry a series contributed by PhishLabs on this, and the report for the second quarter of 2021 says in its own words: "After peaking in late 2020, the percentage of phishing sites protected by SSL dropped to 82 percent in 2Q 2021."[1] Eighty-two percent, in the quarter where it had *fallen*. A second contributor to the same report, Axur, put its own regional figure at 70 percent against that 82 worldwide.

And the finding in the same report that actually explains the world is this one: **90 percent of the certificates used in phishing were free, domain-validated certificates.**[1]

That is the mechanism. The 90% is the part to hold on to. Whatever a padlock once cost in money or effort, the certificates behind nine in ten phishing sites that quarter were free ones, available to anybody, including the person building a copy of your bank. A signal anybody can produce for nothing can't tell you who they are.

:::predict Before reading on: if the padlock tells you nothing about who owns the site, what in the address bar does?
The domain name, and only the domain name. But you have to read it in the right direction, and the direction is backwards.

An address opens with `https://`, which is a double slash and not the one you want. **Find the first *single* slash after that, and read leftwards from it.** You're looking for the registered name, and you find it by going left past the ending until you have collected one ordinary word.

Two of them, side by side.

`https://www.barclays.co.uk/personal` reads back from the single slash as: `uk`, an ending. `co`, still an ending, because `co.uk` is how the United Kingdom organises its names. `barclays`, an ordinary word, stop. **`barclays.co.uk`.** That's the bank.

`https://www.barclays.co.uk.secure-barclays-login.com/login` reads back as: `com`, an ending. `secure-barclays-login`, an ordinary word, stop. **`secure-barclays-login.com`.** Somebody registered that this morning, and they own every character to the left of it, which is why your bank's real address is sitting inside it untouched. Read this one left to right and you'd swear you were at Barclays by the third word.

That's why the direction matters, and it's the single most useful reading habit in the whole course. Lesson 11 is built on it.
:::

**"But my browser does not show a padlock any more."** Go and look at your own address bar rather than take anybody's word for it, including this lesson's. What browsers display here has been changing, and the direction of the change is away from a mark that says the connection is fine and towards a warning that appears only when it is not. That is the useful half of the signal. The absence of a warning still tells you about the connection and still tells you nothing whatever about who owns the site, which is the point of this section either way. **This course has not researched which browser changed what, or when**, so treat the paragraph as a reason to go and look rather than as a fact to remember.

## What a private window does

A private window, incognito, InPrivate, whatever your browser calls it, is the tool with the widest gap between what it does and what people think it does. That gap has been measured, and the measurement is the reason this section exists.

**What it does:** when you close the window, that browser does not keep the session's history, cookies or form data on that device. That is the claim, and it is true.

**Where it acts:** the gold dot. Your device. It is a statement about your own disk.

**What it does not touch:** the site you visited, which sees the same visit it would have seen; your internet provider, which carries the same traffic; your employer's network, if you're on it; an advertiser, who identifies you by a good deal more than one cookie; and malware, which it has no relationship with at all.

:::exercise Open one, and watch what it keeps
Take 2 minutes. Do this before you read the numbers below, because the numbers are about people who never did it.

1. Open a private window and visit two sites you have never visited before. Anything will do.

2. Close the private window entirely, not just the tab.

3. Open your browser's ordinary history and look for those two sites. They are not there, which is the promise being kept.

4. Now, in the same history, look at what *is* there from today. Everything you did in an ordinary window, on a machine anyone in your house can open. That is the thing a private window is actually for.
:::

Now the measurement. Habib and seven colleagues published a study in 2018 that did two things at once. It instrumented three years of real browsing from 451 participants, 167,128 sessions in total. And it surveyed 532 people against fourteen true-or-false statements about private browsing, drawn from two quite different places: 305 from an online task marketplace, and 227 from that same group of observed browsers. **Where two numbers appear below, the online panel comes first and the observed browsers second.**[2]

The behaviour first, because it is not what people assume. **Private browsing occurred in 4% of observed sessions.** Among those participants, 41% used it at least once. And the commonest activity inside a private session was not the one everybody jokes about: logging into a service accounted for 38% of private sessions, general browsing 37%, searches 33%, and adult content 24%. Adult content was the dominant reason for only 18% of users, and 22% of users had no dominant use at all.

Now the beliefs. These are from the paper's Table 6, and they are stated as the percentage of people *who use private browsing* who answered a false statement correctly. So the rest either believed it or did not know.

- "Private browsing prevents my browser from sending any cookies to websites": **24% and 26% correct.** 22% of both actively believed it.
- "Private browsing clears all my browsing history from my computer after I close the window": **27% and 42% correct.**
- "Private browsing allows me to browse the web anonymously": **51% and 52% correct**, with the paper reporting **39% of both populations answering it incorrectly.**
- "Private browsing causes the information I send to websites to be encrypted": **55% and 50% correct.**
- "Private browsing does not allow my internet provider to see which websites I visited": **66% and 69% correct**, and among people who don't use private browsing at all, only 38% and 33%.

Read the first one again. About a quarter of the people using this feature could correctly say what it does about cookies. These are users, not bystanders.

And then the one that matters most, because it is the only one on the list with a physical consequence:

**5% of the online panel, and 12% of the observed browsers, expected private browsing to protect them from malware and hacking.**[2]

That is somebody opening a suspicious attachment in a private window because they believe the window is a container. It is not a container. A file downloaded in a private window lands on the disk exactly like any other file, and a page that attacks the browser attacks the same browser.

The authors also note that browsers' own private-mode landing pages, the paragraph you see when you open the window, do little to correct any of this.[2] Which means a lesson that simply repeats the landing page has failed before it started, and it is why this one gives you the diagram instead.

:::checkpoint Somebody says: "I always use a private window for online banking, to be safe." What is actually happening, and is it a good idea or a bad one?
What is happening is that the session's cookies and history are not kept on the machine afterwards. Nothing else changes. The bank sees the same customer, the connection is encrypted by HTTPS either way, and the provider carries the same traffic.

Is it a good idea? It's a small, real one. Signing in to a service, of which banking is one, was the commonest thing people did inside a private window in that study, at 38% of private sessions, and the honest use of it isn't secrecy but hygiene on a shared or borrowed machine. On your own laptop it buys you almost nothing.

The bad version of the same habit is the person in the next section, who thinks the window is doing the protecting rather than the bank's own encryption and their own password. When that person is handed a link in a message, they will open it in a private window and feel safer. That is the 12%.
:::

## What a consumer VPN does

A VPN builds an encrypted tunnel from your device to a company's server, and your traffic comes out of that company's server and goes on to its destination.

Follow what that does to the path.

Your router and your internet provider, and a café's network if you are in a café, now see one thing: an encrypted connection to the VPN company. They stop seeing which sites you reached, because the destinations are inside the tunnel. Your name lookups ordinarily go through the tunnel as well, which is why the oxblood bar in the figure covers the branch that the navy one doesn't. (That last detail is how these products are normally built rather than something this course has researched, so if it matters to you, check what your own one says it does.)

Then the tunnel ends, and this is the part the advertising tends to leave out. **The VPN company now sees everything your provider used to see.** Which sites, when, how often, from an account you paid for with a card in your name. You have not removed a party from the path. You have swapped one for another and chosen which one it is.

That is not nothing. Choosing is worth something, and there are three purposes where it is the right tool:

- **An untrusted local network.** A café, a hotel, an airport. You do not know who runs it and a VPN means you do not need to.
- **Keeping a destination from your internet provider**, if that is a worry you can actually name.
- **Changing your apparent country**, which is a real capability with real uses.

And there is a long list of things it does not do, all of them things people buy it for: it does not make you anonymous to a service you sign in to, it does not stop advertisers identifying you, it does not stop phishing, and it does not stop malware.

### How the marketing measured up when somebody checked

In December 2021, Consumer Reports' Digital Lab published an evaluation of consumer VPNs done with a team from the University of Michigan.[3] They screened 51 VPN services on Windows 10 and evaluated 16 of them in depth.

:::predict Before the counts: of the sixteen they looked at closely, how many do you think described their own limits accurately?
Four.

If you guessed higher, the useful thing to notice is why the guess felt safe. Nothing on a VPN's page is obviously a lie, and most of the twelve were not lying. They were making claims too broad to be true of any product of that kind, which is a different failure and a harder one to see, because the sentence reads as though somebody measured something.

If you guessed lower, hold onto the four. They are the reason this is a count and not a complaint about an industry.
:::

The findings, all of them from that 2021 evaluation and all of them counts rather than rates:

- **12 of the 16 either inaccurately represented their products or made hyperbolic or overly broad claims.**
- **8 of 16** had current third-party security audits of the core product.
- **6 of 16** had reproducible builds.
- **4 of 16** mentioned internal audits.
- **One** was still shipping PPTP, a protocol from the 1990s.

Four of the sixteen described their own limits accurately, and they are worth naming because the point of a count like this is that it is not a verdict on an industry: **Mullvad, IVPN, Mozilla VPN and TunnelBear.**[3]

The report also picks out a phrase, and it is worth carrying with you: **"military-grade encryption" is treated as a red flag by security professionals because it does not mean anything.** There is no such grade. Whatever encryption sits behind the phrase, HTTPS is already scrambling the contents between you and the site, for nothing. What a tunnel adds isn't stronger scrambling. It's hiding the destination from your provider, and that's a different job. And the report makes the broader point plainly: advertisers and governments identify people by a great many means that have nothing to do with the address a VPN changes.

None of that is a verdict on an industry, and it shouldn't be read as one. Sixteen products were looked at closely in 2021, twelve described themselves inaccurately or too broadly, and four described their limits accurately. What it does say is that the promise the category is usually sold on is anonymity, and anonymity isn't the thing the tool provides.

A VPN is a good answer to a small, nameable question. It's a bad answer to "I want to be private", and the reason is that the sentence never says private from whom.

## The two worked cases

### One session, three ways

Your table from the start of the lesson, filled in.

| | Ordinary window | Private window | Through a VPN |
|---|---|---|---|
| **Your internet provider can tell** | which sites, not what you read | the same | that you connected to the VPN company, and no more |
| **The site can tell** | everything it normally would | the same, minus a returning cookie | the same, from a different address |
| **Left on the laptop** | history, cookies, form data | nothing from that session | history, cookies, form data |
| **Your employer's network** | which sites, not what you read | the same | that you connected to the VPN company |

Four rows, and look at how much of the table is the word "same".

Count the boxes that differ from the ordinary column and you get five out of eight. Which five is the lesson.

**The private window changes two**, and both are about your own machine: what is left on the laptop, and whether the site is handed a cookie from the last time you were there. That is the whole of its reach.

**The VPN changes three**, and all three are one fact restated: your provider, your employer's network and the site itself. Each of them used to see where you went or where you came from, and now each of them sees the VPN company instead.

So two tools and two ideas between them. One is about your disk. The other is about who sees the destination on the first stretch.

And nothing in any column changed what you read, in any row. That was HTTPS the whole time, working identically in all three.

**Everything else in the table is HTTPS**, which was already working in all three columns and is why "what you read" appears in none of them.

### A phishing site with a perfect padlock

Now the case that makes the whole lesson matter.

A message arrives about a payment that did not go through. The link goes to `secure-barclays-login.com`. The page is a pixel-perfect copy of the bank. The certificate is valid. The padlock is there, closed, unremarkable. The connection is properly encrypted.

Every technical signal the folklore names is present and correct.

Work through what each tool did:

**HTTPS worked perfectly.** It encrypted the connection between the reader and `secure-barclays-login.com`, so nobody in the middle could read the password as it went past. It delivered the password to the attacker in a condition of excellent confidentiality.

**A private window would have changed nothing**, except that the attacker's cookie would not have been kept afterwards, which is no comfort at all once the password has gone.

**A VPN would have changed nothing**, except that the attacker would have seen the connection arriving from the VPN company's address rather than the reader's own.

Three tools, all working exactly as designed, and none of them touches this. What would have caught it is reading the domain backwards from the single slash, past the ending and one word further, which gives `secure-barclays-login.com`, and that isn't the bank.

Lesson 11 is about the shape of that message and about what to do in the ten minutes after you have clicked. This is the technical half of it, and the reason it belongs here rather than there is that the padlock is the specific thing that made the page convincing.

## What people get wrong

**"The padlock means the site is safe."** It means the connection to that domain is encrypted. In the second quarter of 2021, 82% of phishing sites had one, and 90% of the certificates behind them were free.[1] The padlock and the danger are not in tension; they never were measuring the same thing.

**"HTTP sites are the dangerous ones."** This was once a rough and useful rule, because a site that could not be bothered with a certificate was often a site that could not be bothered with anything. It stopped being useful when certificates became free and automatic, which is the same change that put a padlock on four phishing sites in five. Saying *when* a rule stopped working is better than either repeating it or banning it.

**"Incognito hides me."** From your own device's history, yes. From the site, your provider, your employer's network and an advertiser, no. 39% of both populations in the 2018 study answered incorrectly when asked whether it made them anonymous.[2]

**"Incognito protects me from viruses."** This is the one with a consequence, held by 5% of one of the 2018 study's two populations and 12% of the other.[2] A private window is not a sandbox, not a virtual machine and not an antivirus. A file you download in it is a file on your computer.

**"A VPN makes me anonymous."** It moves which company can see your destinations. If you sign in to something, you have told that something exactly who you are, from inside the tunnel, and the tunnel has no opinion about it.

**"Military-grade encryption."** Not a thing. Consumer Reports' 2021 evaluation names it as a red flag precisely because it means nothing, and a product page that leans on it is telling you something about its marketing rather than its cryptography.[3]

**"These tools stack up, so using all three makes me pretty safe."** Three tools that act at three different points do not compound into general safety, because the gaps between them are not covered by any of them. Look again at the figure: nothing in it touches your password, your accounts, the software you install, or a message that persuades you to do something. Those are lessons 9, 10 and 11, and they are where most of what actually happens to people lives.

:::callout On a phone, and what changes
All three exist on a phone and all three do the same job. Two differences are worth knowing.

A private tab on a phone browser is the same local promise, and the promise is still about that browser. Plenty of what you do on a phone happens outside a browser altogether, in an app that opened the link itself, and nothing the browser does reaches any of that.

And a VPN on a phone is usually granted permission across the whole device rather than one program, so it can carry traffic from your other apps too. That's more reach than the desktop case, which makes the question of which company you're handing it to a larger question rather than a smaller one.

Neither of those two paragraphs comes from the research behind this lesson, which was done on desktop machines and says so. They're here because the course teaches the desktop model on purpose and owes you a sentence about the difference, not because it has measured it.
:::

## Practice

:::exercise Run your own security plan against the three tools
Take 25 minutes. Get out the one-page security plan you wrote in lesson 1.

1. Copy out every worry on it as a list, one per line. If the plan had four things worth protecting, you should have at least four lines and probably more.

2. Get out the drawing from lesson 7, the one with the parties in it, and mark it up. Draw the three bars on it yourself, from memory if you can and from this lesson's figure if not. Then, beside each worry on your list, write which of the three tools touches it, and name the party on your own drawing that it changes something for. If you cannot point at a party, the answer is none.

3. Count how many lines say "none". For most people it is most of them, and that is the finding, not a failure of the exercise. Write the number down.

4. For three of the "none" lines, write which lesson of this course looks like it will address them. The course has thirteen lessons and you have the titles.

5. Last, and this is the one to be honest about: find any line where you had previously assumed one of these tools was helping, and write down what you actually believed and what you now think. Keep the page. Lesson 13 asks for it again.
:::

:::exercise Sort a product page's claims
Take 20 minutes. Find the product page of any consumer VPN. Any one, chosen however you like.

1. Copy out every claim it makes about what the product does for you. Aim for ten. Marketing pages are generous with these.

2. Sort each into one of three piles. **Measurable:** somebody outside the company could go and check it, like whether a published third-party audit exists. **Unmeasurable:** it describes something happening inside the company that a customer cannot observe, like a no-logs promise. **False or empty:** it says something untrue, or it says nothing at all, like "military-grade".

3. Count the piles. Then compare your counts with the Consumer Reports figures from 2021 in this lesson, which were 12 of 16 describing themselves inaccurately or too broadly, and 8 of 16 with a current external audit.

4. Write one sentence naming the specific question this product would be a good answer to, if any. If you cannot write that sentence, that is the answer to whether you should buy it.
:::

## Connections

Lesson 7 gave you the path, and this is the first thing you've done with it. Every claim above was checked against the figure rather than against an intuition, which is a habit worth carrying into lessons 9 to 13, because all five of them hang off the same drawing.

Lesson 1 gave you the security plan, and the first exercise above is the first time it has been tested. The number of lines that came back "none" is the honest measure of what these three tools are for.

Lesson 9 is about installing software, which is the question of what you are trusting when something arrives on your machine. Notice that none of the three bars in the figure goes anywhere near it.

Lesson 11 is about recognising a con, and it inherits the padlocked phishing site above as its best example. The reading habit from the predict block, finding the first single slash and reading leftwards past the ending, is the one thing from this lesson you should be able to do in your sleep.

Lesson 13 asks what services keep about you. The parties this lesson could not hide you from are the ones that lesson is about.

## Go deeper

- **[Habib and colleagues, "Away From Prying Eyes: Analyzing Usage and Understanding of Private Browsing"](https://www.usenix.org/system/files/conference/soups2018/soups2018-habib-prying.pdf)** (2018), free from the symposium. Table 6 is the one to look at. Read it for how the questions were worded, because half the interest is in how carefully a true-or-false statement has to be written before an answer means anything.
- **[The APWG's quarterly Phishing Activity Trends Report](https://docs.apwg.org/reports/apwg_trends_report_q2_2021.pdf)**, free, one PDF a quarter. This is the 2021 one the padlock figures come from. Read it for the shape of the thing rather than the totals: it is a count of attacks by sector and by target, published four times a year, and watching one number move across four quarters teaches more about the subject than any single quarter's figure.
- **Consumer Reports' 2021 evaluation of VPN services**, done with the University of Michigan. Worth finding and reading in full if you are actually considering buying one, because the per-product detail is the useful part and this lesson only has the counts. **This course's research file records no link for it**, so search for it by name rather than trusting a link from anywhere, which is advice this lesson has earned the right to give.

## Sources

1. Anti-Phishing Working Group, [*Phishing Activity Trends Report, 2nd Quarter 2021*](https://docs.apwg.org/reports/apwg_trends_report_q2_2021.pdf). The section contributed by PhishLabs was opened and read. Supplies the quoted sentence about the percentage of phishing sites protected by SSL dropping to 82 percent in 2Q 2021, which is verbatim; the finding that 90 percent of certificates used in phishing that quarter were free domain-validated certificates; and Axur's separate regional figure of 70 percent against 82 worldwide. **An earlier draft of this course's research recorded "over 90% by 2023" from a search summary. That figure does not appear anywhere in the quarterly series and is not printed in this lesson**; the correction is recorded in `research/SOURCES.md`. The rest of the APWG series is read at search-summary level only and nothing else from it is used here.
2. Hana Habib, Jessica Colnago, Vidya Gopalakrishnan, Sarah Pearman, Jeremy Thomas, Alessandro Acquisti, Nicolas Christin and Lorrie Faith Cranor, "Away From Prying Eyes: Analyzing Usage and Understanding of Private Browsing", *Symposium on Usable Privacy and Security*, 2018, pages 159 to 169. Read in full, including Tables 3, 5 and 6. Supplies the two data sources (three years of instrumented browsing from 451 participants over 167,128 sessions, and a survey of 305 and 227 participants against fourteen true-or-false statements); the 4% of sessions and 41% of participants; the breakdown of what private sessions are used for; every percentage in the beliefs list, which are the shares of private-browsing *users* answering each false statement correctly; the 39% of both populations answering the anonymity statement incorrectly; the 12% and 5% expecting protection from malware and hacking; and the authors' observation about browsers' own private-mode landing pages. One note on the author list, because the build's citation check works on surnames and this is the first case in the repo to need it. One of these authors also co-wrote a paper on password managers that this course read only at summary level and did not open, so that surname sits in `research/SOURCES.md`'s `unread:` line. The line carries an exemption for this lesson, written `Pearman (except 08)`, and the entries on both sides say which work is which. This paper was read in full and is cited in full.
3. Consumer Reports Digital Lab, evaluation of consumer VPN services, published December 2021, with a team from the University of Michigan. Read in full. Supplies the screening of 51 services on Windows 10 and the 16 evaluated in depth; the counts of 12 of 16 inaccurately representing their products or making hyperbolic or overly broad claims, 8 of 16 with current third-party audits of the core product, 6 with reproducible builds, 4 mentioning internal audits, and one shipping 1990s-era PPTP; the naming of Mullvad, IVPN, Mozilla VPN and TunnelBear as the four that described their limits accurately; the treatment of "military-grade encryption" as a meaningless phrase and a red flag; and the point that advertisers and governments identify people by means unrelated to the IP address a VPN changes. A 2025 conference paper on VPN providers' threat claims was identified during research and not opened, so nothing here rests on it.
4. Ruogu Kang, Laura Dabbish, Nathaniel Fruchter and Sara Kiesler, "'My Data Just Goes Everywhere': User Mental Models of the Internet and Implications for Privacy and Security", *Symposium on Usable Privacy and Security*, 2015. Read in full. Not cited in the body of this lesson, and listed because lesson 7's path, which this lesson marks up throughout, is built on it.
