---
source: courses/computer-science-and-ai/digital-literacy/lessons/08-the-padlock-the-vpn-and-the-private-window.md
written_by: Claude, by hand, from the lesson text
checked: >-
  Every figure and claim below appears in the lesson and traces to the lesson's own numbered
  sources. Nothing has been added that the lesson does not say. The course is in a neutral school
  with no standpoint to preserve. Fact-checked in a fresh-context subagent against the lesson on
  2026-09-18: verdict PASS WITH NITS. Four nits, all fixed: the quoted figure's contributor,
  PhishLabs, was dropped; 167,128 sessions had been rounded and stated as exact; "the next one"
  over-specified where the 90 percent finding sits in the report; and the sign-off ran two S1
  turns together. Both quotations were verbatim on the first pass.
about: >-
  About six minutes. Haley opens, because the engine gives the first turn to the second voice.
  Hosts are John (S1, the Charon voice) and Haley (S2, the Aoede voice). Eighth episode for
  Digital Literacy. Covers what the padlock certifies, the measured belief gap on private
  browsing, and what a VPN moves rather than removes. Leaves out the domain-reading rule worked
  in full and the three-way table, and says so in the sign-off.
speakers: 2
approx_minutes: 6
---

S2: Welcome in. This is the Foval Learning Institute podcast, where the two of us talk a lesson through. I'm Haley.

S1: And I'm John. Today we're in Digital Literacy, on the lesson called The padlock, the VPN and the private window.

S1: Three tools an ordinary person is most likely to have an opinion about. And they're also the three most often used against a problem they don't touch.

S2: What do they have in common?

S1: Each of them acts at exactly one point on the path from the last lesson. Not at all of it. Not at the internet. At one point. And every misconception in this lesson, including the ones with numbers attached, is somebody applying a tool where it doesn't reach.

S2: Start with the padlock. What does it actually say?

S1: One thing. The connection between your device and whatever domain is in the address bar is encrypted. That's the whole claim.

S2: And what does it not say?

S1: It says nothing about who owns that domain, or whether they're honest, or whether the page is safe. The certificate behind a phishing padlock is what's called domain validated, which means something proved control of the domain name. Not that a company exists. Not that it's the company it says it is.

S2: Anybody who registers a domain controls it.

S1: Including somebody who registered secure dash barclays dash login dot com this morning.

S2: Do we know how common that is?

S1: We do, and the number is uncomfortable. The Anti Phishing Working Group's quarterly reports carry a series on this, contributed by PhishLabs, and the report for the second quarter of twenty twenty one says, and I'm quoting, after peaking in late twenty twenty, the percentage of phishing sites protected by SSL dropped to eighty two percent in the second quarter of twenty twenty one.

S2: Dropped to eighty two.

S1: Dropped to. And the finding in the same report that actually explains the world is this one. Ninety percent of the certificates used in phishing were free, domain validated certificates.

S2: So it costs the attacker nothing.

S1: It costs nobody anything, and that's the mechanism. A signal anybody can produce for nothing can't tell you who they are.

S2: All right. The private window. What does it do?

S1: When you close it, that browser doesn't keep the session's history, cookies or form data on that device. That's the claim and it's true. It's a statement about your own disk.

S2: And what doesn't it touch?

S1: The site you visited. Your internet provider. Your employer's network. An advertiser. And malware, which it has no relationship with at all.

S2: You said there were numbers on this one.

S1: There are, and they're the reason the section exists. Habib and seven colleagues published a study in twenty eighteen that instrumented three years of real browsing from four hundred and fifty one participants, a hundred and sixty seven thousand one hundred and twenty eight sessions, and surveyed five hundred and thirty two people against fourteen true or false statements.

S2: Give me the worst one.

S1: The statement was, private browsing prevents my browser from sending any cookies to websites. That's false. Among people who actually use private browsing, twenty four percent and twenty six percent in the two populations answered it correctly.

S2: About a quarter.

S1: About a quarter, and these are users, not bystanders. Thirty nine percent of both populations answered the anonymity statement incorrectly.

S2: And is there one that's actually dangerous?

S1: One, and it's the only one with a physical consequence. Five percent of the online panel and twelve percent of the observed browsers expected private browsing to protect them from malware and hacking.

S2: That's somebody opening an attachment in a private window because they think the window is a container.

S1: And it is not a container. A file downloaded in a private window lands on the disk exactly like any other file.

S2: Right. The VPN.

S1: A VPN builds an encrypted tunnel from your device to a company's server, and your traffic comes out of that server. So your router, your provider, a cafe's network, all of them stop seeing which sites you reached.

S2: That sounds like a win.

S1: It's a real thing. But then the tunnel ends, and this is the part the advertising tends to leave out. The VPN company now sees everything your provider used to see. Which sites, when, how often, from an account you paid for with a card in your name.

S2: So you haven't removed a party.

S1: You've swapped one for another and chosen which one it is. That's worth something, and it isn't anonymity.

S2: Did anybody check the marketing?

S1: Consumer Reports did, in December twenty twenty one, with a team from the University of Michigan. They screened fifty one services and evaluated sixteen in depth. Twelve of the sixteen either inaccurately represented their products or made hyperbolic or overly broad claims.

S2: And the other four?

S1: Described their limits accurately, and the lesson names them, because a count like that isn't a verdict on an industry. Mullvad, IVPN, Mozilla VPN and TunnelBear.

S2: Anything else from that report worth carrying?

S1: One phrase. Military grade encryption is treated as a red flag by security professionals, because it doesn't mean anything. There's no such grade.

S2: So where does all this land?

S1: On a phishing site with a perfect padlock. Every tool working exactly as designed, and none of them touching it. Encryption delivered the password to the attacker in excellent confidentiality.

S2: And what would have caught it?

S1: Reading the domain, which the lesson teaches properly and we can't do out loud. We've also skipped the table that runs one browsing session three ways, which is the thing that actually shows you how little changes.

S2: Read the whole thing at Foval Learning Institute dot org. We'll see you next time.
