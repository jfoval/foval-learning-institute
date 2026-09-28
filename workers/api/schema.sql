-- Foval Learning Institute: accounts, learner state, friends.
-- Shares the D1 database with the feedback Worker. Feedback keeps its own table and its
-- own write-only Worker; nothing here can read it.
--
-- Times are milliseconds since the epoch, stored as INTEGER, so they compare and merge
-- against the browser's own values without parsing. The exceptions are the human-readable
-- audit columns on users, which nothing merges.

-- A username and a password. The email is kept on record so John can answer a reset
-- request (see workers/api/README.md, "Password resets"); nothing is ever mailed to it by
-- this Worker, and it is not checked, so it is not unique.
--
-- The password never reaches this Worker. The browser stretches it with PBKDF2-SHA256,
-- 600,000 rounds, salted with the username, and sends the 32-byte result (the "key").
-- The Worker stores SHA-256(pw_salt + key). A copy of this table therefore costs an
-- attacker 600,000 rounds per password guess, the same as if the Worker had done the
-- stretching, while the Worker spends microseconds of CPU. docs/AUTH_OPTIONS.md.
CREATE TABLE IF NOT EXISTS users (
  id            TEXT PRIMARY KEY,
  username      TEXT NOT NULL UNIQUE,      -- lowercase, [a-z0-9_], 3 to 20
  email         TEXT NOT NULL DEFAULT '',
  pw_salt       TEXT NOT NULL,
  pw_hash       TEXT NOT NULL,
  failed_logins INTEGER NOT NULL DEFAULT 0,
  locked_until  INTEGER NOT NULL DEFAULT 0,
  created_at    TEXT NOT NULL DEFAULT (datetime('now')),
  last_seen_at  TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Only the SHA-256 of the session token is stored, so a copy of this table is not a
-- set of live sessions.
CREATE TABLE IF NOT EXISTS sessions (
  token_hash   TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at   INTEGER NOT NULL,
  expires_at   INTEGER NOT NULL,
  last_used_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions (user_id);
CREATE INDEX IF NOT EXISTS sessions_expiry ON sessions (expires_at);

-- A one-time reset code, written by `npm run reset-code` when John answers a request.
-- Stored as SHA-256, one per user, forty-eight hours, five attempts.
CREATE TABLE IF NOT EXISTS reset_codes (
  user_id    TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  code_hash  TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  attempts   INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS profiles (
  user_id        TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  display_name   TEXT NOT NULL DEFAULT '',
  hours_per_week INTEGER NOT NULL DEFAULT 5,
  updated_at     INTEGER NOT NULL DEFAULT 0
);

-- One row per lesson a learner has touched, updated in place. A whole course is eight
-- writes, not eight hundred, which is what keeps this inside D1's free write budget.
CREATE TABLE IF NOT EXISTS lesson_progress (
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course  TEXT NOT NULL,
  lesson  TEXT NOT NULL,
  done    INTEGER NOT NULL DEFAULT 0,
  score   REAL,
  at      INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, course, lesson)
);

CREATE TABLE IF NOT EXISTS review_items (
  user_id  TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  item_key TEXT NOT NULL,                 -- "<course>/<lesson>/<question index>"
  ease     REAL NOT NULL DEFAULT 2.5,
  interval INTEGER NOT NULL DEFAULT 1,
  due      INTEGER NOT NULL,
  reps     INTEGER NOT NULL DEFAULT 0,
  lapses   INTEGER NOT NULL DEFAULT 0,
  last     INTEGER,                       -- 1 right, 0 wrong, NULL never answered
  PRIMARY KEY (user_id, item_key)
);
CREATE INDEX IF NOT EXISTS review_due ON review_items (user_id, due);

CREATE TABLE IF NOT EXISTS study_sessions (
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  day     TEXT NOT NULL,                  -- YYYY-MM-DD, the learner's own local day
  count   INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, day)
);

-- Friends. A request is one row; accepting it deletes the request and writes the
-- friendship both ways, so "who are my friends" is one indexed lookup.
CREATE TABLE IF NOT EXISTS friend_requests (
  from_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  to_id   TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  at      INTEGER NOT NULL,
  PRIMARY KEY (from_id, to_id)
);
CREATE INDEX IF NOT EXISTS friend_requests_to ON friend_requests (to_id);

CREATE TABLE IF NOT EXISTS friends (
  user_id   TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  friend_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  since     INTEGER NOT NULL,
  PRIMARY KEY (user_id, friend_id)
);

-- A cheer on a lesson a friend finished. Private: only the person cheered sees it, and
-- nothing counts them publicly. One per friend per lesson.
CREATE TABLE IF NOT EXISTS cheers (
  from_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  to_id   TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course  TEXT NOT NULL,
  lesson  TEXT NOT NULL,
  at      INTEGER NOT NULL,
  seen    INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (from_id, to_id, course, lesson)
);
CREATE INDEX IF NOT EXISTS cheers_to ON cheers (to_id, at);

-- Support requests from the Help page: password resets, reports, questions. John works them
-- from #/admin. Status is 'open' or 'closed'; the note is his, never shown to the learner.
CREATE TABLE IF NOT EXISTS tickets (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  at        INTEGER NOT NULL,
  kind      TEXT NOT NULL,                -- 'reset' | 'report' | 'question' | 'other'
  username  TEXT NOT NULL DEFAULT '',
  email     TEXT NOT NULL,
  message   TEXT NOT NULL DEFAULT '',
  status    TEXT NOT NULL DEFAULT 'open',
  note      TEXT NOT NULL DEFAULT '',
  closed_at INTEGER
);
CREATE INDEX IF NOT EXISTS tickets_status ON tickets (status, at);

-- Page views, counted by the site itself: one row per UTC day per page, no cookies, no IP,
-- nothing about who. A "visit" is the first page of a browser tab's session. Each view is one
-- row write, so the Worker stops counting for the day at a ceiling (TRAFFIC_DAILY_CAP) and
-- leaves the rest of D1's 100,000 daily writes to accounts.
CREATE TABLE IF NOT EXISTS traffic (
  day    TEXT NOT NULL,                   -- YYYY-MM-DD, UTC
  path   TEXT NOT NULL,                   -- the app route, with usernames replaced
  views  INTEGER NOT NULL DEFAULT 0,
  visits INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, path)
);
