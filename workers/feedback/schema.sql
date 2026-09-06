CREATE TABLE IF NOT EXISTS feedback (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  course      TEXT NOT NULL,
  lesson      TEXT NOT NULL,
  clarity     INTEGER,
  struggled   TEXT NOT NULL DEFAULT '',
  improve     TEXT NOT NULL DEFAULT '',
  site        TEXT NOT NULL DEFAULT '',
  client_at   TEXT,
  received_at TEXT NOT NULL DEFAULT (datetime('now')),
  triaged     INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS feedback_lesson ON feedback (course, lesson);
CREATE INDEX IF NOT EXISTS feedback_untriaged ON feedback (triaged, received_at);
