# Accounts: what goes in front of D1

*Written 2026-09-06 for John. Nothing has been built. This is the decision that has to be made
first, because it is the one that is expensive to reverse.*

## The situation

Roadmap Phase 2 wants one thing: sign in on any device and your progress follows you. Content stays
static on Pages. Only learner state moves to a backend.

The backend question is already answered. There is a Cloudflare account, a deployed Worker and a D1
database (`workers/feedback/`), proven end to end on the live site. D1 is a real SQL database and it
is enough for profiles, lesson progress, review items and study sessions.

What Cloudflare does not give us is authentication. Nothing in the platform turns an email address
into a session cookie. That is the gap, and there are four ways to fill it.

**Correction to the old plan:** the backlog once said accounts were blocked on a Supabase
free-tier project slot. That stopped being true when the project moved to Cloudflare. Nothing is
blocked. It just has not been built. See `docs/DECISIONS.md` §11.

## The constraints that decide it

1. **Free.** Not "free tier that gets expensive". Free at a thousand learners and free at fifty
   thousand.
2. **Small on a cheap phone.** The site is plain HTML, CSS and JS with no framework and no build
   step, deliberately, because that is what is fast on a $60 Android. An auth SDK that ships 200 KB
   of JavaScript to the browser fails this on its own.
3. **No vendor that forces a rewrite later.** If the vendor changes its pricing or disappears, we
   should be able to keep the learner accounts.
4. **Cloudflare's free limits are now enforced, not advisory.** Since 1 September 2026 D1 queries on
   the Workers Free plan fail once the daily caps are hit: 5 million rows read a day, 100,000 rows
   written a day, 5 GB stored. Workers Free allows 100,000 requests a day and **10 ms of CPU per
   request**. That CPU number turns out to decide more than it looks like it should.

## Option A: write it in the Worker

Extend the Worker we already have. Sessions are opaque random tokens in a D1 table, handed to the
browser as an HttpOnly, Secure, SameSite cookie. Sign-in by Google uses the standard OAuth
authorization code flow, which is a redirect and one `fetch`. Sign-in by email uses a six-digit code
mailed to the learner and checked against a short-lived row. Roughly 400 lines of code we own.

**For.** Nothing ships to the browser but `fetch` calls, so the client payload is zero. No vendor at
all. No monthly bill. The tables are ours in our own database. It reuses a Worker and a D1 instance
that already work.

**Against.** We own security-critical code: token entropy, session rotation and expiry, CSRF on the
callback, rate limiting the code endpoint, and not leaking whether an email is registered. This is
well-trodden ground and the recipes are public, but a mistake here is worse than a mistake anywhere
else in the codebase. It also needs a test suite that a static site currently does not have.

Worth knowing: Lucia, the library everyone used for exactly this, was deprecated in March 2025 and
turned into a reference implementation, because its author concluded that writing sessions yourself
is easier than adapting a library. That is a point in this option's favour, from someone with no
reason to argue for it.

## Option B: Better Auth inside the Worker

Better Auth is the open-source library that replaced Lucia. It now has a first-class D1 dialect, and
it does email and password, magic links, email codes and Google out of the box.

**For.** The security decisions are made by people who do this full time. It covers every sign-in
method the roadmap asks for on day one. MIT licensed, self-hosted, tables in our D1, so leaving means
deleting a dependency rather than migrating users.

**Against, and this is the sharp one.** Better Auth hashes passwords with scrypt in pure JavaScript,
which costs about 80 to 100 ms of CPU. The Workers Free limit is 10 ms. Email and password sign-up
fails on the free plan. There is an open issue about it and a workaround (supply a custom hash
function backed by the runtime's native scrypt), but native scrypt at sane parameters is still tens
of milliseconds. In practice, Better Auth with passwords means the Workers Paid plan at $5 a month.
Secondary concerns: it is a fast-moving dependency, a session-expiry bug was open as recently as
January 2026, and using its client SDK would put a framework-shaped library on a page that has
deliberately avoided one. We would use plain `fetch` instead.

## Option C: a hosted auth vendor (Clerk, Auth0, Firebase, WorkOS)

**For.** Fastest to a working sign-in button. Security is somebody else's job. Good free tiers today:
Auth0 advertises 25,000 monthly active users free.

**Against.** The learner accounts live in their system, so leaving is a migration, not a deletion,
which is exactly constraint 3. The client SDKs are large, which is exactly constraint 2. And free
tiers move: Auth0 restructured its pricing in 2023 and tripled its overage rate. Betting a free
institute's account system on somebody else's free tier is the kind of decision that looks fine for
two years.

## Option D: go back to Supabase for auth

Keep D1 for nothing, or split learner state across two backends. Either way it reopens the free-tier
project-slot problem in 8b that the move to Cloudflare had already solved, and it puts a second
vendor in the path of every sign-in. There is no reason to do this now.

## What I recommend

**Option A, shipping Google sign-in and email codes first, and treating email and password as a
later addition.**

The reasoning is the CPU limit. Passwords are the only sign-in method that needs deliberately
expensive computation, and expensive computation is the one thing the free plan will not sell us.
Every other method is cheap:

| Method | CPU per sign-in | Money | Needs an account somewhere |
|---|---|---|---|
| Google | negligible, one redirect and one fetch | $0 | a Google Cloud OAuth client, free |
| Six-digit email code | negligible | $0 up to 3,000 mails a month | an email sending account, free tier |
| Email and password | 50 to 100 ms, over the free limit | $5/month for Workers Paid | none |

So the honest sequencing is: build the session layer and the sync, put Google and email codes on it,
and add passwords when there is a reason to pay $5 a month. A learner who wants to sign in on their
phone and their laptop is fully served by the first two. The roadmap's promise, progress following
you between devices, is met.

If it turns out I am wrong about how long Option A takes, Option B is the fallback and the schema
does not change, because Better Auth would be writing to the same D1.

**One design note that follows from the D1 limits.** 100,000 row writes a day is the binding number,
not storage. Progress should be one row per learner per course, updated in place, rather than one row
per event. Review items are the high-churn table, so they get batched: the browser stays the source
of truth, and it flushes to D1 on a timer and on sign-out, not on every answered card. That also
keeps the site working with no network, which it does today and should keep doing.

## What this needs from John before anything gets built

1. **Pick an option.** A, B, or something else.
2. **Passwords now or later.** Later is free. Now is $5 a month for the Workers Paid plan.
3. **Two free accounts to create, if the answer is A or B.** A Google Cloud project for the OAuth
   client ID, and an email sender. Resend's free tier is 3,000 mails a month; MailChannels is 100 a
   day. Cloudflare's own email sending went to public beta in April 2026 at $0.35 per thousand,
   which for this volume is pennies but is not zero. All three need John to sign up; I will not
   create accounts.

Also worth saying plainly: `wrangler` is **not** authenticated in the agent session this was written
in, and the network policy here blocks `workers.dev` and the live site. Whoever builds this can write
and test the Worker locally, but the deploy needs a session with Cloudflare credentials.

## The schema, which is the same under A and B

```sql
users          (id, email, email_verified, name, created_at, last_seen_at)
identities     (user_id, provider, provider_user_id)      -- google, email
sessions       (id, user_id, created_at, expires_at, last_used_at)
login_codes    (email, code_hash, expires_at, attempts)   -- email sign-in, short lived
profiles       (user_id, display_name, hours_per_week)
lesson_progress(user_id, course, lesson, done, score, updated_at)
review_items   (user_id, item_key, ease, interval, due, reps, lapses, last)
study_sessions (user_id, day, count)
```

This is the Phase 2 table list from the roadmap, plus the three tables that authentication itself
needs. The browser's `localStorage` shape in `site/assets/app.js` already maps onto it one for one,
which was the point of writing it that way.

**Merge on sign-in, so a signed-out learner loses nothing:** union of completed lessons, the higher
score per lesson, and per review item the later `due` with the higher `reps`. Signing in is never
allowed to delete local progress; it can only add to it.
