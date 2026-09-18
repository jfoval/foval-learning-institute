/* The load-bearing behaviour of `npm run taught` is the negative half: an earlier course that is
   not written teaches nothing, and must be reported as such rather than silently omitted. Omitting
   it is how Python Basics came to assume a terminal on the strength of Digital Literacy, a Term 1
   course that does not exist. */
import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const TAUGHT = path.join(REPO, "scripts", "taught.mjs");

function tree() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "foval-taught-"));
  fs.mkdirSync(path.join(root, "curriculum"), { recursive: true });
  fs.writeFileSync(path.join(root, "curriculum", "core-path.yaml"), `terms:
  - title: One
    courses:
      - { id: "early", school: "foundations", title: "Early Course" }
      - { id: "ghost", school: "foundations", title: "Ghost Course" }
  - title: Two
    courses:
      - { id: "target", school: "foundations", title: "Target Course" }
      - { id: "later", school: "foundations", title: "Later Course" }
`);
  const mk = (id, lessons) => {
    const d = path.join(root, "courses", "foundations", id);
    fs.mkdirSync(path.join(d, "lessons"), { recursive: true });
    fs.writeFileSync(path.join(d, "course.yaml"), `id: ${id}\nschool: foundations\nstatus: published\n`);
    for (const [n, title, obj] of lessons)
      fs.writeFileSync(path.join(d, "lessons", `0${n}-l.md`), `---\ntitle: ${title}\nobjectives:\n  - ${obj}\n---\n\n## A section\n\nBody.\n`);
  };
  mk("early", [[1, "Early lesson", "Do the early thing"]]);
  mk("target", []);
  mk("later", [[1, "Later lesson", "Do the later thing"]]);
  // "ghost" is on the path with no folder at all: planned, never scaffolded.
  return root;
}

const run = (root, ...a) => spawnSync(process.execPath, [TAUGHT, ...a], { env: { ...process.env, FOVAL_ROOT: root }, encoding: "utf8" }).stdout;

test("objectives from earlier courses are listed", () => {
  const out = run(tree(), "target");
  assert.ok(/Do the early thing/.test(out), out);
});

test("a later course on the path is never listed as taught", () => {
  const out = run(tree(), "target");
  assert.ok(!/Do the later thing/.test(out), out);
});

test("an earlier course that does not exist is named, and says to assume none of it", () => {
  const out = run(tree(), "target");
  assert.ok(/ASSUME NONE OF IT/.test(out), out);
  assert.ok(/Ghost Course/.test(out), out);
  assert.ok(/1 earlier course\(s\) not written/.test(out), out);
});

test("--headings adds section titles", () => {
  const out = run(tree(), "target", "--headings");
  assert.ok(/sections: A section/.test(out), out);
});
