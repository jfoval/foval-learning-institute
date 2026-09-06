-- Foval Learning Institute: accounts and learner state.
-- Shares the D1 database with the feedback Worker. Feedback keeps its own table and its
-- own write-only Worker; nothing here can read it.
--
-- Times are milliseconds since the epoch, stored as INTEGER, so they compare and merge
-- against the browser's own values without parsing. The exceptions are the human-readable
-- audit columns on users, which nothing merges.

CREATE TABLE IF NOT EXISTS users (
  id             TEXT PRIMARY KEY,
  email          TEXT NOT NULL UNIQUE,
  email_verified INTEGER NOT NULL DEFAULT 0,
  name           TEXT NOT NULL DEFAULT '',
  created_at     TEXT NOT NULL DEFAULT (datetime('now')),
  last_seen_at   TEXT NOT NULL DEFAULT (datetime('now'))
);

-- One row per way a learner can sign in. Signing in with Google and with an email code
-- at the same address lands on the same user, because users.email is unique.
CREATE TABLE IF NOT EXISTS identities (
  provider         TEXT NOT NULL,          -- 'google' | 'email'
  provider_user_id TEXT NOT NULL,
  user_id          TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at       TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (provider, provider_user_id)
);
CREATE INDEX IF NOT EXISTS identities_user ON identities (user_id);

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

-- Six-digit sign-in codes. One live code per address; asking for a new one replaces it.
-- The code is stored as an HMAC under AUTH_SECRET, not in the clear.
CREATE TABLE IF NOT EXISTS login_codes (
  email      TEXT PRIMARY KEY,
  code_hash  TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  attempts   INTEGER NOT NULL DEFAULT 0,
  sent_at    INTEGER NOT NULL,
  window_at  INTEGER NOT NULL,            -- start of the current send-rate window
  sent_count INTEGER NOT NULL DEFAULT 1
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
