---
title: Final test
pass_mark: 0.8
minutes: 70
quiz:
  # --- What understanding does and does not predict; threat modelling (L1) ---
  - q: >-
      Lesson 1 reported two results that sit awkwardly together. What is the second one, the one that
      argues against the obvious case for a course like this?
    options:
      - Technical background did not predict the protective actions people actually took
      - People with technical training named fewer parties who could see their data, because they knew which ones did not matter in practice
      - People with technical training were more likely to abandon a precaution once they understood how narrow its protection really was
      - The study never asked what anybody did, so the question of behaviour was left entirely open by it
    answer: 0
    explain: >-
      Knowing more predicted noticing more, and it did not predict doing more. The second option
      reverses the first result, which was that layered pictures named about four parties against
      about two and a half. The third invents a mechanism the study does not report. The fourth is
      wrong on the facts, and it matters that it is: the behaviour question was asked, and that is
      what makes a null answer worth anything at all.
  - q: >-
      A man runs the email account for a village cricket club. There's no money in it, no members'
      details beyond a fixtures list, and he says, reasonably, that nobody has any use for it. Which
      question from lesson 1 does his plan not contain, and what does adding it change?
    options:
      - How likely is it that they will try, which would show him that automated attempts are continuous rather than unlikely
      - How much trouble am I willing to go to, which would show him that the protections worth having here are cheap
      - What can this account be used for by somebody who doesn't care whose it is, which makes it a resource rather than a target
      - How bad would it be if they succeeded, which would show him that a club account matters more to its members than he thinks
    answer: 2
    explain: >-
      His answers to the five questions are all correct and all small, because every one of them asks
      what an attacker would want from *him*. The sixth question asks what the account can be used
      for, and a mail account that can send mail can send a great deal of spam to people who trust
      the club's name. The first and fourth are questions his plan does contain and answers honestly.
      The second is real and comes after the threat is named, not instead of naming it.
  # --- Paths, absolute against relative, the tree (L2) ---
  - q: >-
      What makes an address absolute rather than relative?
    options:
      - It names a file rather than naming the directory the file is sitting inside
      - It is the form the machine works in, where a relative address is a shorthand that has to be expanded before anything can use it
      - It survives a rename of any directory above it, where a relative address is the one that breaks when a name changes
      - It starts at the root, so it means the same thing wherever you happen to be standing
    answer: 3
    explain: >-
      The starting point is the whole difference, which is why you can write an absolute address down
      and hand it to somebody else. The first invents a distinction that doesn't exist. The second is
      false in both halves. The third has it backwards: absolute addresses are the ones that break
      when a directory above the file is renamed, and a relative address written from inside the
      subtree survives that rename, because `..` means the parent whatever the parent is called.
  - q: |-
      A translator runs `ls -R` in her `jobs` directory and gets this:

      ```
      jobs/:
      bellweather   corrigan   dunmore

      jobs/bellweather:
      source   delivered

      jobs/corrigan:
      source   delivered   queries

      jobs/dunmore:
      source
      ```

      She is standing in `jobs/corrigan/queries` and wants to name a file called `notes.txt` inside
      `jobs/dunmore/source`. Which relative address does it?
    options:
      - "`./dunmore/source/notes.txt`"
      - "`../dunmore/source/notes.txt`"
      - "`../../dunmore/source/notes.txt`"
      - "`jobs/dunmore/source/notes.txt`"
    answer: 2
    explain: >-
      She's two levels below `jobs`, so two `..` take her up to it before she can go back down. One
      `..` puts her in `corrigan`, which has no `dunmore` in it. The single dot looks inside
      `queries`. And the last one is a relative address too, written with no leading slash, so it
      would work only from whatever directory contains `jobs`, which isn't where she is.
  - q: |-
      The same translator has three addresses written in a notebook:

      1. `/Users/mara/jobs/corrigan/source/brief.pdf`
      2. `../../dunmore/source/notes.txt`, written from `jobs/corrigan/queries`
      3. `../source/glossary.txt`, written from `jobs/corrigan/queries`

      She renames `jobs` to `translation-work`. Which of the three still work, standing where they
      were written?
    options:
      - None of them, because renaming a directory changes the position of everything underneath it
      - Only the first, because an absolute address is the only kind that does not depend on anything else
      - Two and three, because neither of them ever spells out the name that changed
      - Only the third, because it is the only one that stays inside a single directory
    answer: 2
    explain: >-
      The rename touched one name and moved no file. The absolute address spells out `jobs`, so it now
      names something that isn't there. Both relative addresses climb with `..`, which means the
      parent whatever it's called, so neither of them ever said the word. The fourth option is the
      near miss: address two climbs two levels and comes back down, and it survives anyway, because
      the part it names on the way down was never renamed.
  - q: >-
      What does a file's extension determine?
    options:
      - Which program the system offers when you open it, and nothing else
      - What the file contains, because a program writing a file has to write the format its name claims
      - Nothing whatever, which is the reason most systems now hide extensions rather than showing them
      - Whether the file can be opened at all, because a file with no extension gives the system nothing to work from
    answer: 0
    explain: >-
      The extension is a claim, and the system uses it to pick a program. Nothing checks the claim
      against the contents, which is what lets it be false, by accident or on purpose. The second has
      the causation backwards. The third goes too far, since the extension decides something real.
      The fourth is simply untrue: a file with no extension opens perfectly well once you say what
      should open it.
  - q: >-
      A charity treasurer keeps the accounts in a synced folder. On her laptop the file is there and
      opens. Signed in to the same account in a browser on the library computer, the file isn't
      listed at all, and a search there finds nothing. Which of the five causes fits, and what is the
      giveaway?
    options:
      - It was saved to a default location she never chose, and the giveaway is that she can open it on the laptop without ever having gone looking for it
      - It was moved or renamed at some point, and the giveaway is that one machine's copy has an address the other's does not
      - It is in a synced directory that isn't currently synced, and the giveaway is that the two views disagree while both are working correctly
      - It was never given a location at all, and lives only inside the spreadsheet program's unsaved state
    answer: 2
    explain: >-
      Two machines are showing different things, and neither is broken: the sync client on the laptop
      hasn't sent that file up, so the server has nothing to show the library computer and nothing to
      index. The first and second would both leave the file on the server, where a search would find
      it. The fourth is ruled out by the file opening on the laptop, which means it exists somewhere
      with an address.
  - q: >-
      A teacher wants a grammar checker. A colleague sends a link; the page offers
      `grammarfix-setup.exe`, and her machine is hiding known extensions, so the download shows as
      `grammarfix-setup`. She runs it and it works. Which two things happened, in the course's terms?
    options:
      - Nothing dangerous, because a program that installs and works is a program that did what it said
      - The name hid what the system would do with the file, and the party who told her where to go was her colleague, which no route can check
      - The name hid what the system would do with the file, and the party who failed was whoever hosted it, since the host served the file she got
      - Her machine checked the publisher on her behalf when it ran, so the only open question is whether the colleague meant well
    answer: 1
    explain: >-
      Hiding known extensions takes away the part of the name that decides what happens, and the
      fourth party in the chain, the one who told her where to look, was a colleague rather than
      anything a store or a package manager could vet. The first is the "I'll run it and see" belief,
      and a hostile program that failed to work would be a failed one. The third names a party that
      may well have behaved perfectly. The fourth invents a check: running it raised no warning, and
      an absent warning is narrow news about the file rather than news about who made it.
  # --- Working directory and navigation (L4) ---
  - q: >-
      You're in your home directory. You run `cd projects`, then `cd ../music`, then `cd ..`. Where
      are you, and how many times did the working directory change?
    options:
      - Home, and it changed three times
      - In `projects`, and it changed twice, because the third command undoes the second
      - In `music`, and it changed three times, because the last command has nowhere above it to go
      - Home, and it changed twice, because the second command is one move rather than two
    answer: 0
    explain: >-
      Each of the three commands moved you. `cd ../music` is one command and one change, from
      `projects` up to home and back down into `music`, and then `cd ..` takes you from `music` to
      home. The fourth option gets the destination right by an argument that miscounts. The second
      and third each lose track of where the middle command landed.
  - q: >-
      A man is standing in `~/Documents/invoices`. He runs `ls ..` and sees a list of names, none of
      which is `invoices`. What's the most likely explanation?
    options:
      - The listing is of the directory above him and `invoices` has been renamed since he entered it
      - "`ls` does not list the directory you are standing in when you ask about its parent"
      - He is not where he thinks he is, and the list he is reading belongs to somewhere else
      - The names beginning with a dot are hidden, and `invoices` is one of them
    answer: 2
    explain: >-
      `ls ..` lists the parent, and if he really were inside `~/Documents/invoices` the parent would
      be `Documents` and `invoices` would be in it. `pwd` settles it in one command. The first is
      possible and far less likely, and it would also mean he can no longer be where he thinks. The
      second invents a behaviour. The fourth is wrong because `invoices` has no leading dot.
  # --- Command grammar and error diagnosis (L5) ---
  - q: >-
      A reader types a command and gets back one line and nothing else, `bash: tracrt: command not
      found`. What has failed, and what does that message rule out?
    options:
      - The program started and then could not find what it was told to work on, which rules out a spelling mistake
      - The shell found no program of that name, which rules out any problem with what the command was pointed at
      - The system found the program and refused to run it, which rules out the program being missing from the machine
      - The program ran and stopped on something it did not understand, which rules out the file being in the wrong place
    answer: 1
    explain: >-
      The name at the front is the shell speaking, which means no program ever started and nothing was
      ever looked for. So the arguments aren't in question, and the two candidates are a typo and a
      program that isn't installed. The first and fourth both describe failures that require the
      program to have been found. The third is the fourth category, a refusal, which announces itself
      quite differently.
  - q: >-
      A reader is standing in `/Users/mira/2026` and runs a script she wrote. She gets
      `/usr/bin/python3: can't open file '/Users/mira/2026/receipts.py': [Errno 2] No such file or
      directory`. She is certain `receipts.py` exists. What does the message establish?
    options:
      - That the file is damaged, which is what the error number at the end reports
      - That Python is not installed at that address, which is why it could not start
      - That she is not allowed to read the file, which is what "can't open" means here
      - That Python started, looked in the directory she is standing in, and the file is somewhere else
    answer: 3
    explain: >-
      The full path at the front shows Python was found and started, and the address in the quotation
      marks is exactly where it looked, which is where she's standing. So the file exists somewhere
      that isn't here. The first invents a meaning for an error number. The second reads the evidence
      that the program was found as evidence that it wasn't. The third is the fourth category again,
      which reports itself as a refusal rather than as a failure to find.
  - q: >-
      A reader's script stops with four lines. The last reads `ZeroDivisionError: division by zero`.
      The three above it name a file, a line number, and the text of that line. Which line does she
      need, and what is the general shape of the rule?
    options:
      - All four, because the category is on the last line and the position is on the ones above it
      - Only the last, because it is the one that names what actually went wrong
      - Only the ones above, because the last line repeats what the third already showed her
      - Only the file name, because the same script may exist in more than one place
    answer: 0
    explain: >-
      The last line is the category and the upper lines are the location, and she wants both: what
      kind of fault, and which line of which file to open. The second is the habit this item is
      about. The third discards the name of the fault. The fourth is a true and useful observation,
      about which copy just ran, offered as though it were the whole answer.
  # --- Streams, pipes, permission (L6) ---
  - q: >-
      A directory holds twelve files ending `.csv` and nothing else. What does `ls *.csv | head -3 |
      wc -l` print, and what lands on disk?
    options:
      - Twelve, and nothing is written to disk
      - Three, plus a file holding the three names that were passed along
      - Nothing on screen, and a file holding the number
      - Three, and nothing is written to disk
    answer: 3
    explain: >-
      `ls` produces twelve lines, `head -3` passes on the first three and drops the rest, and `wc -l`
      counts what reaches it, which is three. The first forgets that a stage in the middle can throw
      work away. The second adds a temporary file that nothing in the line asks for: only `>` and
      `>>` write anything. The third describes a redirect, and there isn't one here.
  - q: >-
      A man copies a colleague's working script onto his own Mac from a memory stick, types
      `./tidy.sh`, and gets `zsh: permission denied: ./tidy.sh`. What has happened?
    options:
      - The memory stick was formatted for another system, so the file arrived unreadable and the shell is reporting that it cannot make sense of the contents
      - The shell could not find the script, and the dot and slash are what would fix that
      - The file was found and is not marked as runnable, which is a fourth kind of failure and has nothing to do with him
      - His account is not permitted to run programs he did not install, which is a setting on the machine
    answer: 2
    explain: >-
      The file was located and the system declined to run it, which is neither of the two failures in
      lesson 5 and is why the execute bit is worth knowing about. Copying commonly loses it. The
      first is ruled out by the shell being able to name the file back to him. The second describes
      what happens without the dot and slash, which is a different message. The fourth reads a
      statement about one file as a statement about one person.
  # --- Name to page, and where a failure sits (L7) ---
  - q: >-
      What is the relation between the name lookup and the connection?
    options:
      - They are one step, because the address is what the name turns out to mean
      - The lookup is a round trip of its own and finishes before the connection opens
      - The connection opens first and the name is translated along the way by the machines carrying it
      - The connection is opened to the name, and the far end does the translating when it arrives
    answer: 1
    explain: >-
      The lookup completes and then drops out, and nothing below it is guided by the name server.
      That is what makes whoever answers your names a party in their own right, and it is why
      encryption on the connection leaves the lookup untouched. The other three each fold the two
      steps together, and every one of them loses that party.
  - q: >-
      A woman's smart television can't reach a streaming service. Her laptop, on the same home
      Wi-Fi, reaches it in a second. What has the comparison ruled out, and where does it point?
    options:
      - It rules out her provider and points at the service having blocked the television's account
      - It rules out the router and points at the name lookup, which the two devices do separately
      - It rules out her whole home network and points at the cable between the router and the television
      - It rules out the router, the provider, the route and the service, and points at the television itself
    answer: 3
    explain: >-
      Both devices share the router, the provider and the path, and both are asking for the same
      service, so everything they have in common is working. What they don't share is the device and
      its software, which is where the fault has to be. The first and third keep looking at parts the
      laptop has just proved are fine. The second names a real difference between devices and then
      stops one step short of the conclusion.
  - q: >-
      A man says a command "doesn't work" and that a website "doesn't work", and cannot see why
      anybody would want more detail than that. What is the single habit that answers both?
    options:
      - Name the steps, then ask at each one whether it succeeded, because each layer reports only what it can see
      - Start at the far end, since the part furthest from you is the part you have least control over
      - Restart the machine, since a stale state is the commonest cause of both
      - Compare with a second machine, which is the only way to get evidence about anything on a network
    answer: 0
    explain: >-
      A shell says it could not find a program because that is all it can see, and a browser says
      nothing came back for the same reason. In both cases the symptom is reported by the only layer
      in a position to report it, so you walk the steps. The second reverses a useful order. The
      third is folklore. The fourth names a genuinely good technique and overstates it into the only
      one.
  # --- What HTTPS, a VPN and a private window each hide (L8) ---
  - q: >-
      A freelancer is working on a client's office Wi-Fi and would rather the client's IT department
      couldn't see that she's been reading job adverts. Which tool fits, and what exactly has she
      changed?
    options:
      - A private window, because the adverts then leave no trace of having been read
      - HTTPS, because an encrypted connection leaves the office with no way to tell where she went
      - None of them, because a network you do not run can see everything that crosses it
      - A VPN, which takes the destinations away from the office network and gives them to the VPN company
    answer: 3
    explain: >-
      This is the case a consumer VPN is genuinely for, and the honest description is a swap: the
      office sees one encrypted connection to a company she picked, and that company sees what the
      office used to. The first is about her own disk and the office network never looked there.
      The second is wrong in its second half, since HTTPS hides what she read and not which domain
      she reached. The third throws away the fact that choosing who sees is worth something.
  - q: >-
      A man is buying a present on the family tablet and doesn't want the shop turning up in the
      address bar's suggestions when his wife uses it tomorrow. Which tool fits, and what does it
      leave alone?
    options:
      - HTTPS, which keeps the page contents off the device, leaving only the address behind
      - A private window, which keeps the session off the tablet and leaves the shop, the provider and the network untouched
      - A VPN, which hides where he went from everybody on the way out, and leaves the tablet's own record of where he went exactly as it was
      - None of them, because anything done on a shared device is available to anyone else who uses it
    answer: 1
    explain: >-
      This is the narrow, honest use of a private window: the worry is about what's left on a shared
      machine, and so is the tool. The first misdescribes what HTTPS does, which is about the
      connection rather than about storage. The third gets the tool wrong and then correctly says it
      leaves the tablet's record alone, which is why it fails. The fourth is too quick, and it
      discards the one thing that does work here.
  - q: >-
      A woman pays a bill on a café's Wi-Fi and worries the café's owner can read her card details as
      they go past. What's already true, and what would each of the three tools add?
    options:
      - The owner can read them, and only a VPN closes it, because it is the only tool that encrypts anything
      - The owner cannot read them, because HTTPS is already doing that job, and none of the three adds anything to this particular worry
      - The owner can read them unless she uses a private window, which is the tool that stops a network on the way keeping a copy of what crossed it
      - The owner cannot read them, because a café network carries traffic without ever being able to inspect it
    answer: 1
    explain: >-
      HTTPS encrypts the contents between her and the site, and that has been true in every column of
      the table all along, which is why "what you read" never changes between an ordinary window, a
      private one and a tunnel. A VPN would hide which site she went to from the café, which is a
      different worry and not this one. The first and third both hand this job to a tool that doesn't
      do it. The fourth reaches the right answer by a false reason: a network certainly can inspect
      what crosses it, and encryption is why there's nothing to read.
  # --- The chain of trust in an install (L9) ---
  - q: >-
      Which set names the four parties you trust when you install a program?
    options:
      - Who wrote it, who sold it, who certified it as safe, and who provides support afterwards
      - Who wrote it, who signed the build, who scanned it for malware, and who reviewed it for the store
      - The developer, the operating system it runs on, the antivirus product, and the network it arrived over
      - Who wrote it, who built it, who hosts it, and who told you where to find it
    answer: 3
    explain: >-
      Four people, four different ways of failing, and the fourth is the one almost nobody writes down
      and the one no route can check, because no route knows what you meant to install. The other
      three each swap that fourth party for a checking party, which is the exact mistake the frame
      exists to prevent: every check below it runs correctly on the wrong software.
  - q: >-
      A nurse installs a PDF tool from her hospital's own software centre, which builds and signs
      what it distributes. Which of the four parties is she still trusting without any check having
      been made for her?
    options:
      - Whoever hosts it, since a hospital's internal server is no better run than anybody else's
      - Whoever told her where to find it, since her employer chose this tool rather than her
      - Whoever built it, since a signature says only that a key was used and not that the build was watched
      - Whoever wrote the code, since nothing in the arrangement is an audit of what the program does
    answer: 3
    explain: >-
      This is the party the strongest route still cannot cover. The hospital hosts the file and built
      and signed it, which covers two parties properly, and it chose the tool, which covers the
      fourth in the only sense that matters, since she didn't arrive by way of a search result. What
      nobody did is read the code. The first and second name parties the arrangement genuinely does
      cover. The third is a true sentence about signatures in general, and not about this one.
  # --- Password guidance and the ladder (L10) ---
  - q: >-
      Where does the current United States password guidance live, and what does it require?
    options:
      - "SP 800-63B-4, section 3.1.1.2: fifteen characters as a single factor, no composition rules, no periodic expiry"
      - "SP 800-63B-4, section 5.1.1.2: eight characters, a mixture of character types, and a change every ninety days"
      - "SP 800-63B-4, section 3.1.3.3: fifteen characters, with a forced change whenever there is evidence of compromise"
      - "SP 800-63B-4, section 3.1.1.2: eight characters for any password, with each service free to set its own composition rules"
    answer: 0
    explain: >-
      Revision 4 renumbered the password section from 5.1.1.2 to 3.1.1.2 and raised the single-factor
      floor to fifteen. The second keeps the old number and attaches rules to it that the previous
      revision had already dropped: composition requirements and periodic expiry were advised against
      in 2017, so that option is folklore rather than an older standard. The third names the section
      on authentication over the telephone network, where SMS is designated restricted. The fourth
      keeps eight, which now applies only inside multi-factor authentication.
  - q: >-
      A man finds out that a gym he left in 2019 was breached, and that the password he used there is
      the one he still uses for his email. He changes the gym password. What has he achieved, and
      what has he not?
    options:
      - Nothing useful either way, since he left the gym in 2019 and the account behind that password has not mattered to him for years
      - He has closed the account that was breached, and left open every other account where that password was used, including the one that recovers the rest
      - He has closed the breached account and made the email safe as well, since the attacker would have to work out that the two were connected
      - He has closed the breached account, and the remaining risk is that the gym is breached a second time
    answer: 1
    explain: >-
      The attack doesn't guess: it takes the pair and tries it everywhere, and no attacker has to work
      out that two accounts are connected when a program can simply try. So the account that needs
      changing most is the email, which is also the route back into everything else. The first
      dismisses the only account that still matters. The third assumes an attacker who thinks rather
      than one who runs a list. The fourth worries about the one place the password no longer works.
  - q: >-
      A woman has an authenticator app on her council tax account. The same account's "forgotten your
      password" page asks for her mother's maiden name and the street she grew up on. Where does the
      account's real level sit?
    options:
      - At the authenticator app, which is the strongest thing an attacker would have to get past
      - Between the two, since an attacker cannot know in advance which route is open to them
      - At the recovery questions, because an account is as strong as the weakest way into it
      - At the council's own fraud checks, which are what would catch a fraudulent change of address
    answer: 2
    explain: >-
      The app is defending a door that an attacker need not use, and the answers to both questions are
      facts about her rather than secrets, available to anybody who knows where she grew up, which
      often includes somebody she has deliberately stopped trusting. The first is how people measure
      their own security, by the strongest thing they have. The second treats two alternative routes
      as though both had to be forced. The fourth moves the subject to somebody else's controls.
  # --- The structure of a con, and recovery (L11) ---
  - q: >-
      A text arrives about an unpaid road toll of £2.99, with a link, and says the charge doubles
      after midnight. The spelling is perfect, the agency's logo is right, it uses the reader's name,
      and the link's certificate is valid. What is the verdict, and on what?
    options:
      - Unknown, because with all the usual signals clean there is nothing left on which to judge it
      - All three parts are there, and none of the clean signals entered the reasoning, because every one of them is cheap for a sender to fix
      - Probably genuine, because a sender who has gone to the trouble of getting the spelling, the logo, the name and the certificate right is usually the real one
      - A con, because a real agency would not put a deadline on a sum as small as this one
    answer: 1
    explain: >-
      Contact she didn't start, a deadline, and a payment, which takes both the money and the card
      details. The tells never came into it, which is the point of reading structure instead: they're
      decoration, and the structure is what the con actually is. The first gives up at exactly the
      moment the method starts working. The third treats effort as evidence of honesty. The fourth
      replaces one piece of folklore with another.
  - q: >-
      A bookkeeper is part-way through an email thread she started with a supplier the firm has used
      for years. A reply arrives in that thread, from the right address, attaching the invoice she
      asked for, with new bank details and no deadline of any kind. How does the three-part reading
      go, and what follows?
    options:
      - Three parts present, so the structure has given her the verdict and she should not pay
      - Part one fails and there is no pressure either, so the structure gives her nothing, and she confirms the bank details by a route she already had
      - No parts are present, so the reading has cleared the message and she can pay the invoice to the new details as asked
      - Part three alone is present, which is not enough to act on, so she pays and watches the account
    answer: 1
    explain: >-
      This is the case the three-part reading is built to miss, and lesson 11 names it: she started
      the contact, and an invoice she was expecting needs no pressure at all. So the frame is silent,
      and the move still covers it, because ringing the supplier on the number she already had costs
      a minute whether the invoice is real or not. The first misreads the frame. The third and fourth
      both take the frame's silence as permission, which is the thing to avoid.
  - q: >-
      A man gave his password to a convincing page. He changed it within the minute, signed out of
      every session, and checked that the recovery address was still his. A week later his accountant
      is still receiving copies of his mail. What did he miss, and why does it survive what he did?
    options:
      - A forwarding rule in his mail settings, which keeps working however often the password changes
      - A second factor enrolled by somebody else, which is why the sessions came back
      - Nothing; a copy already taken cannot be recalled and the week's mail was taken before he acted
      - The recovery phone number, which he did not check and which is the usual way a break is made permanent
    answer: 0
    explain: >-
      A rule that quietly forwards everything is a setting rather than a session, so it outlives every
      password change, and it's the quiet step almost nobody knows to check. The second and fourth are
      both real steps in the procedure and neither would produce this symptom: an enrolled factor
      affects signing in, and the recovery number would show up as an attempt to take the account
      rather than as a steady copy. The third is the belief that makes people stop looking.
  # --- What makes a copy a backup (L12) ---
  - q: >-
      What makes a copy a backup?
    options:
      - It is held by a company other than the one holding the original
      - There are three of it, on two kinds of storage, with one of them held somewhere other than the building you are in
      - It is encrypted and disconnected, which is what the official guidance on ransomware asks organisations to maintain
      - A mistake on the original cannot reach it, and you have restored from it
    answer: 3
    explain: >-
      Both halves of that do work, and every other rule is a consequence of it rather than a
      substitute for it. The second is a numbered rule this course doesn't teach, and the reason is
      that it packages the property: hold the property and you can work the numbers out, hold the
      numbers and you still can't say which of your copies counts. The first and third each name one
      way of getting the property and mistake it for the property.
  - q: >-
      A photographer keeps her archive on an external drive that stays plugged into her desktop, and
      a second copy on a network drive in the same room that the desktop writes to nightly. She has
      never restored from either. What has she got?
    options:
      - Two backups, since the copies sit on two separate devices, bought at different times, that will not fail on the same day as each other
      - One backup and one working copy, the network drive being the backup because it is written to on a schedule
      - Nothing that meets the definition, since anything the desktop can write to is something a mistake on the desktop can reach
      - Two backups and one untested restore, which is a reporting problem rather than a problem with the copies
    answer: 2
    explain: >-
      Both copies are reachable from the machine, so a deletion, a bad save or a program damaging
      files can travel to both, and neither has ever been restored from, so neither half of the
      definition is met. Independent failure of the hardware is real and is a different property from
      reach. The second mistakes a schedule for the thing a schedule cannot provide. The fourth
      treats an untested restore as paperwork, when it is the only test there is.
  # --- Across the course: the dating convention ---
  - q: >-
      Four claims, one of which carries no date. "82% of phishing sites were served over HTTPS in the
      second quarter of 2021." "Dropbox keeps 30 days of versions on its Basic plan, read on 18
      September 2026." "Most VPN services describe their own limits inaccurately." "Phishing-resistant
      authenticator use stood at 14.0% of users as of January 2025." Which is it, and what does the
      missing date cost?
    options:
      - The third, and the cost is that the reader cannot tell which products were looked at or whether the claim has since been retested
      - The third, and the cost is that a claim about an industry needs a source more than a claim about one company does
      - The third, and the cost is that an undated claim is more likely to be false than one whose author was willing to say when it was measured
      - The third, and the cost is that the reader cannot check it, which is true of every claim in the list
    answer: 0
    explain: >-
      All four options spot the same claim, so the question is what a date is actually for. It fixes
      a figure to a moment and a measurement, and the honest version here is a count: sixteen products
      examined closely in 2021, twelve of which described themselves inaccurately or too broadly.
      Without that, "most" has no denominator and no expiry. The second is about sourcing rather than
      dating. The third is false, since an undated claim can be perfectly true and simply unusable.
      The fourth is true of every claim and therefore tells you nothing about this one.
---

This test covers lessons 1 to 12. Lesson 13's two items are not here yet, and this file gets them
when that lesson is written; until then the pass mark applies to what is here.

Almost every item puts a case to you that no lesson worked: a different person, different files,
different numbers. That is deliberate, and it is the whole point. A test you could pass by
recognising sentences from the lessons would measure whether you read them, and this course has
spent thirteen lessons arguing that reading is the weakest evidence there is.

Three items need more than one lesson at once. One pairs lesson 5's error categories with lesson 7's
failure ladder, because they are the same diagnostic habit on different subjects. One pairs lesson
3's hidden extension with lesson 9's chain of trust. And one asks about a message that lesson 11's
own three-part reading is built to miss, which is a harder question than the one the frame answers.

The last item is about the course's own convention rather than about any one lesson. Every figure
here carries its year inside the sentence, and the item asks what that is for.

The wrong answers are mostly misconceptions this course names, or true sentences answering a
question that was not asked, which is the commoner and harder failure. A few are there because the
reasoning behind them is the reasoning to unlearn. If a distractor looks reasonable to you, the
lesson that names it is the one to go back to.

Pass mark is 80 per cent. If you do not reach it, the useful thing is not the score but the pattern.
Look at which lessons your wrong answers came from, and reread those rather than the whole course.
