// Estimating how wide a string will draw, without a browser.
//
// The build lints SVG labels for running past their own viewBox, which the browser then
// clips silently. Node cannot measure text, and a flat "characters times font size"
// guess is wrong by enough to produce false alarms on a check that can fail a build.
// So: real advance widths, in units of 1/1000 em, for Arial and Helvetica metrics.
//
// The catch, and the reason FONT_SPREAD exists: the SVGs ask for `system-ui`, which is a
// different typeface on every platform. Segoe UI, SF Pro, Roboto and DejaVu Sans are not
// the same width. Measured across all 252 labels in this repo against Chromium on Linux
// (DejaVu Sans), the true width ran between 0.97 and 1.13 times the Arial estimate. So a
// label can fit on a Mac and be clipped on Android, and a check worth having has to lint
// for the wide end. Arial is the narrow end; multiply by FONT_SPREAD for the wide end.
const W = {
  " ": 278, "!": 278, '"': 355, "#": 556, $: 556, "%": 889, "&": 667, "'": 191,
  "(": 333, ")": 333, "*": 389, "+": 584, ",": 278, "-": 333, ".": 278, "/": 278,
  ":": 278, ";": 278, "<": 584, "=": 584, ">": 584, "?": 556, "@": 1015,
  "[": 278, "\\": 278, "]": 278, "^": 469, _: 556, "`": 333,
  "{": 334, "|": 260, "}": 334, "~": 584,
  A: 667, B: 667, C: 722, D: 722, E: 667, F: 611, G: 778, H: 722, I: 278, J: 500,
  K: 667, L: 556, M: 833, N: 722, O: 778, P: 667, Q: 778, R: 722, S: 667, T: 611,
  U: 722, V: 667, W: 944, X: 667, Y: 667, Z: 611,
  a: 556, b: 556, c: 500, d: 556, e: 556, f: 278, g: 556, h: 556, i: 222, j: 222,
  k: 500, l: 222, m: 833, n: 556, o: 556, p: 556, q: 556, r: 333, s: 500, t: 278,
  u: 556, v: 500, w: 722, x: 500, y: 500, z: 500,
};
for (let d = 0; d <= 9; d++) W[String(d)] = 556;

// The widest common system default runs about 13% wider than Arial for mixed text.
export const FONT_SPREAD = 1.13;

const ENTITIES = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&apos;": "'", "&nbsp;": " " };

export function estimateTextWidth(text, fontSize, bold = false) {
  const s = String(text).replace(/&[a-z]+;|&#\d+;/gi, m => ENTITIES[m.toLowerCase()] ?? "x");
  let units = 0;
  for (const ch of s) units += W[ch] ?? 556;
  // Arial Bold runs a little wider than regular; 4% covers it without over-flagging.
  return (units / 1000) * fontSize * (bold ? 1.04 : 1);
}
