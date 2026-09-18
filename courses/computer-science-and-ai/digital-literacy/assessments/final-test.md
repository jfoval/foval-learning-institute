---
title: Final test
pass_mark: 0.8
minutes: 50
quiz:
  # --- What understanding does and does not predict; threat modelling (L1) ---
  - q: >-
      In 2015 four researchers asked 28 people to draw the internet. The people who drew layered
      pictures named about four parties who could see their data; the single-box people named about
      two and a half. What did the same study find about what those people actually did?
    options:
      - No direct relationship was found between technical background and the protective actions people took
      - The layered group took more precautions as well, which is the straightforward case for teaching how the machinery works
      - The layered group took fewer precautions, because understanding how much was visible made them fatalistic about it
      - The study measured only what people perceived, so nothing about behaviour follows from it either way
    answer: 0
    explain: >-
      Knowing more predicted perceiving more and did not predict doing more, and the authors looked
      for the relationship rather than failing to ask. The second option is what almost everybody
      assumes, and it is the assumption lesson 1 exists to remove. The third invents a result the
      study does not report. The fourth is wrong on the facts: the behaviour question was asked,
      which is exactly what makes a null finding worth something.
  - q: >-
      A man who runs a small joinery business will not use a password manager. "Nobody is going to
      break into an account with nine hundred pounds behind it," he says. He is neither careless nor
      stupid. Which single belief, if it changed, would change his behaviour on its own?
    options:
      - That the afternoon it takes to set one up is a larger cost than the protection it would buy him
      - That a password manager concentrates everything behind one password, which is a worse failure than the one it prevents
      - That attackers choose their targets, so being of no interest to anybody is itself a defence
      - That the passwords he already uses are long enough that nobody is going to guess them
    answer: 2
    explain: >-
      His reasoning is sound and his picture is wrong in one place: most credential attack chooses
      nobody at all. A stolen list is replayed against hundreds of services at near-zero cost per
      account, so being unimportant keeps you off a shortlist that was never drawn up. The first and
      second options are objections he did not make. The fourth is the closest wrong answer, because
      strength is not what the attack turns on: the attacker already has the password.
  # --- Paths, absolute against relative, the tree (L2) ---
  - q: >-
      What is the difference between an absolute path and a relative path?
    options:
      - An absolute path names a file and a relative path names the directory that a file is sitting in
      - An absolute path starts at the root, so it means the same thing from anywhere; a relative one starts from where you are standing
      - An absolute path is the form the operating system works in, and a relative path is the shorthand people type instead
      - An absolute path survives a directory above it being renamed, and a relative path is the one that breaks
    answer: 1
    explain: >-
      The whole difference is the starting point, which is why an absolute path survives being
      written down and handed to somebody else and a relative one does not. The first invents a
      distinction that does not exist. The third is false in both halves. The fourth is the
      attractive wrong answer, because both kinds break on a rename: an absolute path breaks when a
      directory above the file is renamed, and a relative one breaks when the rename is above the
      point it starts from.
  - q: >-
      A photographer keeps her work under `shoots`, one directory per client, with `raw` and
      `edited` inside each. She is standing in `shoots/kelso-wedding/edited` and wants to name
      `shoots/tarbert-farm/raw/0012.dng`. Which relative path does it?
    options:
      - "`./tarbert-farm/raw/0012.dng`, since the single dot means the directory she is standing in"
      - "`shoots/tarbert-farm/raw/0012.dng`, since that is the address with the leading slash taken off"
      - "`../tarbert-farm/raw/0012.dng`, since one `..` takes her out of the directory she is in"
      - "`../../tarbert-farm/raw/0012.dng`, since she is two levels below the directory both branches share"
    answer: 3
    explain: >-
      She is two levels below `shoots`, so two `..` take her back up to it before she can go down
      the other branch. One `..` lands her in `kelso-wedding`, which has no `tarbert-farm` inside it.
      The single dot looks inside `edited`. And the fourth-named form is a relative path too, written
      without a leading slash, so it would work only if she were standing in whatever directory
      contains `shoots`, which she is not.
  - q: >-
      The same photographer renames `shoots` to `client-work`. Which of her written-down addresses
      still work?
    options:
      - Both kinds break, because renaming a directory changes the position of everything underneath it
      - The relative ones all survive, because they never mentioned `shoots`, and every absolute one breaks
      - The relative ones between two places inside the subtree survive; every absolute one that ran through `shoots` breaks
      - Neither kind is affected, because a rename changes only a label and the files have not moved anywhere
    answer: 2
    explain: >-
      The rename changed one directory's name and touched no file. An absolute address that spelled
      out `shoots` now names something that is not there. A relative address from one place inside
      the tree to another place inside the same subtree never said the word and is unharmed. The
      second option is half right and too confident, since a relative path that climbs above the
      renamed directory and comes back down does break. The first is wrong about what a rename does,
      and the fourth forgets that a name is what an address is made of.
  # --- Extensions, plain against rich text, the missing file (L3) ---
  - q: >-
      What does a file's extension actually determine?
    options:
      - Which program the system offers to open it with, and nothing whatever about the contents
      - What is inside the file, because the system writes the contents in the format the name asks for
      - Nothing at all, which is the argument for hiding extensions and letting the system decide
      - Whether the file can be opened, because a file with no extension has nothing to open it with
    answer: 0
    explain: >-
      The extension is a claim, and the system uses it to decide which program to hand the file to.
      It is not checked against the contents, which is what makes the claim capable of being false,
      by accident or on purpose. The second option has the causation backwards. The third overshoots,
      since the extension determines something real and consequential. The fourth is false: a file
      with no extension opens perfectly well once you say what should open it.
  - q: >-
      Somebody cannot find a report they wrote three weeks ago. Searching for a phrase from inside
      it returns nothing, and they are certain of the phrase. Which conclusion is justified?
    options:
      - The file has been deleted, because a content search covers everything on the machine
      - It was renamed, which is the one cause of a missing file that defeats a search on the contents
      - It is inside a program's own storage, which is the part of the tree that a search cannot reach
      - Nothing is ruled out, but two causes become less likely and the two the index cannot reach become more likely
    answer: 3
    explain: >-
      A failed search moves the odds and settles nothing. An ordinary document in the home directory
      would usually be found by a content search, so a genuine failure pushes you towards the file
      not being on this machine today or never having been saved at all. The first treats a partial
      index as a complete one. The second is wrong, since a rename leaves the contents indexed. The
      third states as certain the one cause whose honest answer is "sometimes", depending on whether
      the program keeps ordinary files or one large database.
  - q: >-
      An attachment arrives named `statement.pdf.exe`. The recipient's machine is hiding known
      extensions. What do they see, what does the system see, and what kind of attack is this?
    options:
      - They see the full name and the system sees a document, so nothing has happened until they install something
      - They see `statement.pdf`, the system sees a program, and the attack is on the name, which is the thing no route can check for them
      - They see `statement.pdf`, the system sees a program, and the party attacked is whoever hosted the file they were sent
      - They see `statement.exe`, the system sees a document, and the mismatch between the two is what a scanner is for
    answer: 1
    explain: >-
      Hiding known extensions removes exactly the part of the name that decides what happens on a
      double click, so the reader sees a document and the system runs a program. And this is the same
      attack as a look-alike domain and a look-alike package name: a name is a claim made by whoever
      chose it, and none of the three install routes can check whether the thing you were pointed at
      is the thing you meant. The third names a party from the install chain that this attack does not
      touch. The first and fourth each get the display or the system's reading the wrong way round.
  # --- Working directory and navigation (L4) ---
  - q: >-
      You are in your home directory. You run `cd Documents`, then `cd ..`, then `cd Documents`,
      then `cd ~`. Where are you at the end, and how many times did the working directory change?
    options:
      - In your home directory, and it changed four times, because every one of the four commands moved you
      - In your home directory, and it changed three times, because the last command asked for where you already were
      - In `Documents`, and it changed four times, because the last command returns you to the directory you had opened
      - In `Documents`, and it changed three times, because the second and third commands cancel each other out
    answer: 0
    explain: >-
      Home to `Documents` is one, back up is two, down again is three, and `~` is the fourth, since
      you were in `Documents` and `~` means your home directory. The three-times answer comes from
      reading the last command as doing nothing, which it is not, because the third command had
      already moved you somewhere else. The two options ending in `Documents` both misread `~`, which
      means home wherever you happen to be standing.
  - q: >-
      You are standing in your home directory and `ls Documents` prints a list of names. You then run
      `cd Documents` and, without leaving, type `ls Documents` again. What happens?
    options:
      - The same list as before, because the argument spells out the same directory both times
      - An empty listing, because you are already inside the directory you are asking about
      - An error saying it cannot be found, unless there happens to be a `Documents` inside `Documents`
      - A listing of where you are now, because `ls` ignores an argument that names the current directory
    answer: 2
    explain: >-
      `Documents` is a relative address, so it means "a `Documents` inside wherever I am standing",
      and you are now inside `Documents`. The first option is the mistake this item exists to catch:
      the same typed argument named two different places, because the standing point moved underneath
      it. The second and fourth both assume `ls` knows what you meant, which is the assumption a
      terminal never makes.
  # --- Command grammar and error diagnosis (L5) ---
  - q: >-
      "A reader gets back exactly this, and nothing else: `zsh: command not found: pythn3`. What
      failed, and what is the one thing the message rules out?"
    options:
      - The program started and could not find the file it was given, which rules out a spelling mistake in the command
      - The program ran and stopped on an error inside itself, which rules out the file having been missing
      - The system found the program and declined to run it, which rules out the program being absent
      - The shell could not find a program by that name, which rules out any problem with the file being acted on
    answer: 3
    explain: >-
      The name at the front is the shell speaking, which means no program ever started, so nothing
      was ever looked for and the file is not in question. The first and second describe the other
      two categories, both of which require the program to have been found first. The third is the
      fourth category, a permission refusal, which says the file was found and then declined.
  - q: >-
      "A reader gets back: `/usr/bin/python3: can't open file '/home/ana/hello.py': [Errno 2] No such
      file or directory`. They are certain `hello.py` exists. What is the fault, and what proves it?"
    options:
      - The program is not installed, which the full path at the front of the line is reporting
      - They are standing somewhere other than where they think, proved by the address inside the quotation marks
      - The file itself is damaged, which is what the error number at the end is there to report
      - The file is not marked as readable, which is what the words "can't open" are reporting
    answer: 1
    explain: >-
      Python started, which the full path at the front shows, so the program is fine. The address in
      the quotation marks is where Python actually went looking, and comparing it with `pwd` puts the
      fault in front of you. The first misreads the strongest evidence that the program was found.
      The third invents a meaning for an error number. The fourth is the fourth category again, which
      reports itself differently and explicitly.
  - q: >-
      A traceback ends with `NameError: name 'prnt' is not defined` and has three lines above it
      naming a file, a line number and a piece of text. A colleague says to read the last line and
      ignore the rest. What does that cost?
    options:
      - The file and the line number, which are the only parts saying where to go and which copy ran
      - Nothing at all, since the last line is the only part of a traceback that names the mistake
      - The category of the fault, which is what the lines above the last one are carrying
      - The chance to find out whether the program was ever found, which the last line does not report
    answer: 0
    explain: >-
      The last line gives the category and the upper lines give the location, including the file by
      its full address, which is how you find out which of two copies just ran. The second is the
      habit this item is about. The third has it backwards. The fourth is wrong because a traceback
      exists only when the program was found, read and run, so that question is already settled.
  # --- Streams, pipes, permission (L6) ---
  - q: >-
      A directory holds forty files. `grep -li deposit *.txt` prints the names of the text files
      containing the word. What does `grep -li deposit *.txt | wc -l` produce, and what is written
      to disk?
    options:
      - The names and then a count, plus a temporary file holding the names while they are handed over
      - Nothing on the screen, and a file holding the count, because the count is what the pipe collected
      - A single number, the count of matching files, and nothing whatever is written to disk
      - A single number, the count of lines containing the word across all forty files, and nothing is written
    answer: 2
    explain: >-
      The pipe hands `grep`'s output straight to `wc` as it is produced, so the names never reach the
      screen and never become a file. And `-l` on `grep` makes it print one line per matching file
      rather than one per matching line, so the number counts files. The first invents a temporary
      file, and only `>` and `>>` write. The fourth is the plausible miscount, and it is what you
      would get without `grep`'s `-l`. The second describes a redirect rather than a pipe.
  - q: >-
      A learner saves three working lines into `count.sh` with a text editor on a Mac, types
      `./count.sh`, and gets `permission denied`. What has happened, and what does the message rule
      out?
    options:
      - The shell could not find `count.sh`, which is the reason the dot and the slash are needed at all
      - The script has an error inside it, and the shell is reporting that as a refusal to carry on
      - The account does not have the right to run programs, which is a setting on the machine rather than the file
      - The file was found and is not marked as runnable, which rules out both a missing program and a missing file
    answer: 3
    explain: >-
      This is a fourth category, distinct from the three in lesson 5: the file was located and the
      system declined to run it, because a text editor makes documents and a document is not marked
      executable. The first describes what happens without the `./`, which is a different message
      entirely. The second would require the script to have started. The third is the misreading
      worth naming, since this is about one file rather than about one person. Note that inside Git
      Bash on Windows the same script may run straight away, because a file whose contents begin with
      `#!` counts as executable there.
  # --- Name to page, and where a failure sits (L7) ---
  - q: >-
      Put the first two steps between typing an address and seeing a page in the right relation to
      each other.
    options:
      - The connection opens first, and the name is translated into an address along the way by the machines carrying it
      - The name is translated into an address in a round trip of its own, which finishes before the connection opens
      - The name and the connection are one step, because the address is simply what the name turns out to be
      - The connection opens to the name itself, and the translation is done at the far end by the service
    answer: 1
    explain: >-
      The lookup is a separate round trip that completes and then drops out, and nothing below it is
      guided by the name server. That ordering is what makes the lookup a party of its own, and it is
      why encryption on the connection does not cover it. The other three each fold the two steps
      together in a different way, and each one loses the party that knows which names you asked for.
  - q: >-
      A site will not load on somebody's laptop and loads on their phone over mobile data. On the
      laptop, a name lookup returns an address, and a route trace gets an answer from the first hop
      and then asterisks to the limit. What have they established?
    options:
      - That the site is down, because the trace could not reach the far end of the path
      - That their laptop's networking has failed, because a trace that stops has nowhere left to go
      - That the name resolved and their own router is reachable, and the asterisks establish nothing further
      - That the fault sits at their internet provider, because that is where the trace stopped answering
    answer: 2
    explain: >-
      Two rungs are confirmed and the asterisks are not evidence, because plenty of machines are
      configured not to announce themselves, which is why an ordinary trace to a working site is full
      of them. The first is contradicted by the phone. The second is contradicted by hop one
      answering. The fourth is the tempting overread, and the trace cannot support it because a silent
      hop and a broken hop look identical.
  - q: >-
      Somebody reports that a command "does not work" and that a website "does not work", and asks
      why the same two words cover both. What do the two diagnoses actually have in common?
    options:
      - In both, the visible symptom is reported by the only layer that can see it, so you walk the steps and ask at each one whether it succeeded
      - Both are cleared by restarting, because a restart is what clears the stale state behind either of them
      - Both are usually caused by whatever sits furthest from the person typing, so the far end is where to start
      - Neither can be diagnosed without knowing what the layer below was doing at the time
    answer: 0
    explain: >-
      A shell reports that it could not find a program, because that is all it can see, and a browser
      reports that nothing came back, for the same reason. In both cases the habit is the same: name
      the steps and ask at each one whether it worked, which is why lesson 5's three error categories
      and lesson 7's ladder are the same skill on different subjects. The second is folklore. The
      third reverses the useful order and is usually wrong. The fourth is false, since the point of
      walking the steps is that each one can be asked about on its own.
  # --- What HTTPS, a VPN and a private window each hide (L8) ---
  - q: >-
      A woman shares a laptop with two flatmates and does not want them to see which sites she
      visited. Which tool addresses that, and what does it leave untouched?
    options:
      - A VPN, which takes the destinations away from anybody watching and leaves the browser's own history alone
      - HTTPS, which encrypts the connection and leaves the flatmates able to see the domain but not the page
      - None of the three, because anything done on a shared machine is visible to anyone else who uses it
      - A private window, which keeps that session off the machine and leaves the site, her provider and the network untouched
    answer: 3
    explain: >-
      This is the one worry a private window genuinely answers, because the worry is about her own
      disk and so is the tool. The VPN option gets the tool wrong, since a VPN changes who sees the
      destination on the way out and writes history to the laptop exactly as before. The HTTPS option
      confuses encryption in transit with what is stored locally. The fourth-named refusal is too
      quick, and it throws away the honest, narrow use the tool has.
  - q: >-
      A man on a hotel's wireless network does not know who runs it and does not want them to see
      which sites he reaches. Which tool addresses that, and what has he actually changed?
    options:
      - A private window, since the hotel cannot see a session that the browser is not recording anywhere
      - A VPN, which takes the destinations away from the hotel and hands them to the VPN company instead
      - HTTPS on its own, since an encrypted connection leaves the hotel with nothing at all about where he went
      - None of the three, since a network you do not control can see everything that crosses it
    answer: 1
    explain: >-
      This is the use a consumer VPN is genuinely for, and the honest statement of it is a swap rather
      than a removal: the hotel now sees one encrypted connection to a company he chose, and that
      company sees what the hotel used to. The private window option confuses a statement about his
      disk with a statement about the network. The HTTPS option is wrong in its last clause, since
      HTTPS hides what he read and not which domain he reached. The refusal ignores that choosing who
      sees is itself worth something.
  - q: >-
      A reader follows a link to a page that is a perfect copy of her bank, with a valid certificate
      and a closed padlock, and types her password. Which of the three tools would have prevented
      this, and what did the padlock certify?
    options:
      - HTTPS would have, and the padlock certified that the domain in the bar belongs to the bank
      - A VPN would have, and the padlock certified that the certificate was issued to a real company
      - None of them, and the padlock certified only that the connection to that domain was encrypted
      - A private window would have, and the padlock certified that nothing had been stored on her machine
    answer: 2
    explain: >-
      All three tools worked exactly as designed and none of them touches this. HTTPS delivered the
      password to the attacker in excellent confidentiality, a private window would have declined to
      keep the attacker's cookie, and a VPN would have changed the address the attacker saw it arrive
      from. What catches it is reading the domain leftwards from the first single slash. The other
      three each attribute to the padlock a claim about identity or safety it has never made.
  # --- The chain of trust in an install (L9) ---
  - q: >-
      Name the four parties you trust when you install a program.
    options:
      - Whoever wrote it, whoever built it into what you downloaded, whoever hosts it, and whoever told you where to find it
      - Whoever wrote it, whoever sold it to you, whoever certified it as safe, and whoever supports it afterwards
      - Whoever wrote it, whoever signed the build, whoever scanned it for malware, and whoever reviewed it for the store
      - The developer, the operating system, the antivirus product, and the network the file came over
    answer: 0
    explain: >-
      Four separate people who fail in four different ways, and the fourth is the one almost nobody
      lists and the one no route can check, because no route knows what you meant. The other three
      each replace that fourth party with a checking party, which is the mistake the frame exists to
      prevent: every one of those checks runs downstream of how you came to be on that download page,
      and runs correctly on the wrong software.
  - q: >-
      An installer is signed and the machine raises no warning. Which of the four parties does that
      cover, and what is the next question worth asking?
    options:
      - All four of them, since a signature is the mechanism the whole chain was built around
      - The host, and part of the builder, and the next question is whose key it actually is
      - The author alone, since the signing key is something only the author of the code can hold
      - None of them, since a signature is a claim and a claim cannot establish anything by itself
    answer: 1
    explain: >-
      A signature says this build came from the holder of that key, which means nobody altered it in
      transit and the server did not swap it. It says nothing about whether the code is hostile, and
      nothing about how you came to be on that page. So the useful next question is whose key it is:
      the project you meant, or a company you have never heard of. The first is the belief this
      section exists to remove. The third is false, since a builder or a distributor commonly signs.
      The fourth throws away a real and checkable guarantee.
  # --- Password guidance and the ladder (L10) ---
  - q: >-
      The United States guidance on passwords was revised in August 2025. What does its password
      section require of a service, and where does that section live?
    options:
      - "NIST SP 800-63B-4, section 5.1.1.2: at least eight characters, mixed character types, and a change every ninety days"
      - "NIST SP 800-63B-4, section 3.1.1.2: at least fifteen characters for a single-factor password, no composition rules, and no periodic expiry"
      - "NIST SP 800-63B-4, section 3.1.1.2: at least eight characters for any password, with composition rules left to each service to decide"
      - "NIST SP 800-63B-4, section 3.1.3.3: at least fifteen characters, with a change required whenever there is evidence of compromise"
    answer: 1
    explain: >-
      Revision 4 renumbered the section from 5.1.1.2 to 3.1.1.2 and raised the floor, and it forbids
      composition rules and periodic expiry outright while requiring a change on evidence of
      compromise. The first quotes the previous revision at its old number. The third keeps eight,
      which now applies only to a password used inside multi-factor authentication. The fourth names
      the section on out-of-band authentication over the telephone network, which is where SMS is
      designated restricted.
  - q: >-
      Two people have the same twenty accounts. One uses a long unique generated password on every
      account and has no second factor anywhere. The other reuses one password everywhere and has an
      authenticator app on all twenty. Who is in better shape against the attack that actually
      reaches ordinary people?
    options:
      - The first, because a breach at any one service then tells the attacker nothing about any other
      - The second, because a second factor means a stolen password is not enough on its own
      - Neither of them, since twenty accounts is more than anybody can defend properly either way
      - The second, because a code from an app cannot be relayed to the real site by a fake page
    answer: 0
    explain: >-
      The attack that runs against everybody is a stolen list replayed across hundreds of services,
      and unique passwords turn one company's breach into one company's problem. The second option is
      a true sentence answering a different question: that person has also guaranteed their one
      password is in a breach list by now, so every account rests on the second factor alone. The
      third is a counsel of despair. The fourth is false, since an app code can be relayed in real
      time, which is why it sits below the top rung.
  - q: >-
      A man has a passkey on his bank and nothing else configured. His bank's recovery flow sends a
      code to the email address he opened in 2011, which has a reused password and no second factor.
      Where is the account's real security level?
    options:
      - At the passkey, because that is the strongest thing standing between an attacker and the account
      - Somewhere between the two, because an attacker would have to work through both of the routes
      - At the email account, because an account is exactly as strong as the weakest way into it
      - At the bank's own fraud monitoring, because that is what would actually stop a transfer leaving
    answer: 2
    explain: >-
      The passkey is doing nothing an attacker needs to defeat, because there is a route that does not
      pass through it, and that route is a second front door with weaker locks. The first is how people
      measure their own security, by looking at the strongest thing they have. The second treats two
      alternative routes as though both were required. The fourth changes the subject to somebody
      else's control, which is worth having and is not what was asked.
  # --- The structure of a con, and recovery (L11) ---
  - q: >-
      A message arrives with perfect spelling, the real company's logo, the reader's actual name, and
      a link to a domain with a valid certificate and a closed padlock. A delivery fee is owed and the
      parcel returns to sender in 24 hours. What is the verdict, and on what?
    options:
      - Probably genuine, because every signal people are told to check has come back clean
      - All three structural parts are present, and the verdict does not rest on any of the tells, which are cheap to fix
      - Unknown, because with the usual tells all clean there is nothing left on which to form a judgement
      - A con, because a padlock on a message from a delivery company is itself the thing to be suspicious of
    answer: 1
    explain: >-
      Contact you did not initiate, pressure with a deadline, and an action that is hard to reverse,
      because a card payment takes the money and the details. None of the tells entered the reasoning,
      which is the point: they are decoration an attacker can correct, and the structure is what the
      con is. The first treats clean signals as evidence of honesty. The third gives up too early. The
      fourth turns lesson 8 into a new piece of folklore.
  - q: >-
      A woman gets a text from her child's school about a trip closing at five, with a link to pay a
      deposit. The school really does send these, and all three structural parts are present. What
      does she do, and what makes the answer work whatever the message turns out to be?
    options:
      - Study the message closely for tells, since a school is a plausible sender and the details will decide it
      - Ignore it, since a message with all three parts present has told her what it is
      - Reply to the message and ask the school to confirm that it really did send it
      - Do the thing by a route she already had, so that she never has to decide whether the message was real
    answer: 3
    explain: >-
      If it was genuine she pays the same deposit a minute later through the school's own app or
      website, and if it was not she finds out by the absence of any such trip. The judgement is
      replaced by a procedure, which works the same whether she is sharp or tired. The first is the
      judgement the attacker is paying to defeat. The second would flag genuine messages constantly,
      which is how a rule gets abandoned inside a fortnight. The third asks the sender to vouch for
      itself.
  - q: >-
      Somebody has typed their password into a fake page and realises a minute later. Why does
      changing the password come before signing out of every session, when signing out is what
      removes the attacker?
    options:
      - Because changing it shuts the way back in, so that signing out afterwards leaves nothing to return with
      - It does not, and signing out first is correct, because that is the step which removes the attacker now
      - Because a password change ends every open session by itself, which makes the second step unnecessary
      - Because an attacker cannot do anything until the next sign-in, so open sessions are not the urgent part
    answer: 0
    explain: >-
      Close the entrance before you clear the room. Sign out first and the attacker, who still has the
      password, simply signs back in, and you have spent your one clean minute on something they undid
      for nothing. The third is why step two exists at all, since a password change does not reliably
      end sessions already open. The fourth is false and dangerous, because a session already open is
      the attacker working now.
  # --- What makes a copy a backup (L12) ---
  - q: >-
      State the property that makes a copy a backup.
    options:
      - It is held by a different company from the one holding the original, so that one failure cannot take both
      - It is encrypted and kept offline, which is what the official ransomware guidance asks for
      - A mistake on the original cannot reach it, and the only way to know you have one is to restore from it
      - There are at least three of it, on at least two kinds of storage, with one of them somewhere else
    answer: 2
    explain: >-
      Both halves of that sentence do work, and everything else is a consequence rather than a rule.
      The fourth option is the familiar numbered mnemonic, and it is a packaging of the property: hold
      the property and you can derive the numbers, hold only the numbers and you cannot say which of
      your copies counts. The first and second each name one way of achieving the property and mistake
      it for the property itself.
  - q: >-
      A man keeps his accounts in a folder that syncs to a laptop, a desktop and a phone, all on one
      account. His provider keeps 30 days of versions. He last opened the 2023 subfolder fourteen
      months ago. What is his actual position on those 2023 files?
    options:
      - Three copies and a version history behind them, which is more protection than most people have
      - Two backups and a working copy, since a phone is a different kind of device from the two computers
      - Protected, because version history will restore anything inside the plan's window as soon as he notices
      - One copy in three places, and the version window closed long ago on anything that went wrong, so his exposure is total
    answer: 3
    explain: >-
      One mistake on the account reaches all three devices, so the count is a count and not a property.
      And a 30-day window only helps with damage noticed inside it: a file nobody has opened for
      fourteen months can pass through the whole window quietly and come out with the good version
      gone. The first and second both mistake the count for the property. The third is the quiet limit
      the lesson exists to name.
  # --- Across the course: the dating convention ---
  - q: >-
      Four claims. "82% of phishing sites were served over HTTPS in the second quarter of 2021."
      "Dropbox keeps 30 days of versions on its Basic plan, read on 18 September 2026." "Most VPN
      services misdescribe their own limits." "Workforce phishing-resistant authenticator use was
      14.0% as of January 2025." Which is the odd one out, and why does it matter?
    options:
      - The first, because a quarter is too coarse a period for a figure that changes as fast as this one
      - The third, because it carries no date, so nobody can say whether it is still true or what it was measured against
      - The second, because the date something was read is not the same thing as the date it was published
      - The fourth, because one vendor's figure should not be dated as though it had been a census
    answer: 1
    explain: >-
      It is the only one with nothing to anchor it, and the honest version is a count from a particular
      evaluation in a particular year: sixteen products looked at closely in 2021, twelve of which
      described themselves inaccurately or too broadly. Without the year and the number it becomes a
      standing complaint about an industry, which is a different and weaker kind of claim. The other
      three each name a real limitation of a dated figure, and a limitation you can state is exactly
      what a date buys you.
---

This test covers lessons 1 to 12. Lesson 13's two items are not here yet, and this file gets them
when that lesson is written; until then the pass mark applies to what is here.

Most items put a case to you that no lesson worked, because the question is whether you can use the
course rather than whether you remember it. Three of them need more than one lesson at once: one
pairs lesson 5's error categories with lesson 7's failure ladder, because they are the same
diagnostic habit on different subjects; one pairs lesson 8's padlock with lesson 11's structural
reading of a message; and one pairs lesson 3's extensions with lesson 9's chain of trust.

The last item is about the course's own convention rather than about any one lesson. Every figure
here is written with its year inside the sentence, and the item asks you to notice a claim that
is not.

The wrong answers are not invented. Every one of them is a misconception named somewhere in the
course, or a true sentence answering a question that was not asked, which is the commoner and harder
failure. If a distractor looks reasonable to you, the lesson that names it is the one to go back to.

Pass mark is 80 per cent. If you do not reach it, the useful thing is not the score but the pattern.
Look at which lessons your wrong answers came from, and reread those rather than the whole course.
