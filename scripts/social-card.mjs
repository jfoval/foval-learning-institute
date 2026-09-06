// Generate the social share card (og:image) at site/assets/media/social-card.png.
//
//   npm run card
//
// Link previews (iMessage, X, Facebook, Slack) read og:image from index.html. Without
// one they grab whatever large image they find first, which was a quiz screenshot.
// Uses the Chrome already installed on this machine, like scripts/screenshots.mjs.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "site", "assets", "media", "social-card.png");
const POSTER = path.join(ROOT, "site", "assets", "media", "hero-poster.jpg");

let chromium;
try {
  ({ chromium } = await import("playwright-core"));
} catch {
  console.error("playwright-core is not installed. Run `npm install` in the repo root and try again.");
  process.exit(1);
}

// The Keystone Arch mark, as in the site header.
const MARK = `<svg viewBox="0 0 120 120" width="110" height="110"><path d="M14 100 V62 A46 46 0 0 1 106 62 V100 H90 V62 A30 30 0 0 0 30 62 V100 Z" fill="#fff"/><rect x="8" y="100" width="104" height="8" fill="#fff"/><g stroke="#0f2a4a" stroke-width="1.6" fill="none"><path d="M71.5 34.3 L77.6 19.5 M48.5 34.3 L42.4 19.5 M81.2 40.8 L92.5 29.5 M38.8 40.8 L27.5 29.5 M87.7 50.5 L102.5 44.4 M32.3 50.5 L17.5 44.4 M14 62 H30 M90 62 H106 M14 81 H30 M90 81 H106"/></g><polygon points="50.1,10.9 69.9,10.9 65,36.5 55,36.5" fill="#b08d2a" stroke="#0f2a4a" stroke-width="2"/><path d="M56.5 16 H65.5 V19 H59.5 V22 H63.5 V24.8 H59.5 V31 H56.5 Z" fill="#0f2a4a"/></svg>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400&family=IBM+Plex+Sans:wght@500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; position: relative; overflow: hidden; background: #0f2a4a; }
  img.bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,42,74,.78) 0%, rgba(15,42,74,.92) 100%); }
  .inner { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px; text-align: center; color: #fff; }
  h1 { font-family: "Libre Caslon Text", serif; font-weight: 400; font-size: 68px; letter-spacing: .01em; }
  .rule { width: 130px; height: 3px; background: #b08d2a; }
  .tag { font-family: "Libre Caslon Text", serif; font-size: 30px; color: #d9bd6b; }
  .sub { font-family: "IBM Plex Sans", sans-serif; font-size: 21px; color: rgba(255,255,255,.85); }
</style></head><body>
  <img class="bg" src="file://${POSTER}">
  <div class="scrim"></div>
  <div class="inner">
    ${MARK}
    <h1>Foval Learning Institute</h1>
    <div class="rule"></div>
    <div class="tag">Faith. Knowledge. Life. Free for everyone.</div>
    <div class="sub">Real courses, real sources, no accounts, no cost.</div>
  </div>
</body></html>`;

const tmp = path.join(os.tmpdir(), `foval-card-${process.pid}.html`);
fs.writeFileSync(tmp, html);

const launch = { channel: process.env.CHROME_CHANNEL || "chrome" };
if (process.env.CHROME_PATH) { delete launch.channel; launch.executablePath = process.env.CHROME_PATH; }

const browser = await chromium.launch(launch);
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
  await page.goto(`file://${tmp}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: OUT });
  console.log(`wrote ${path.relative(ROOT, OUT)}`);
} finally {
  await browser.close();
  fs.unlinkSync(tmp);
}
