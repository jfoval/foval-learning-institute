# Working in `site/`

The static site. Everything a learner sees.

    index.html                the app shell; `window.FOVAL_API` gates the account features
    assets/app.js             the router, the pages, progress, quizzes, certificates
    assets/styles.css         the palette and the layout. Both themes are defined here
    data/courses.js           GENERATED. The index: every course and lesson without lesson HTML
    data/content/<id>.js      GENERATED. One course's rendered lessons, quizzes and assessments,
                              fetched when a reader opens that course
    courses/<id>/...          GENERATED at deploy, not committed. A plain HTML reading copy of
                              every course and lesson, for search engines and shared links
    sitemap.xml               GENERATED at deploy, not committed
    robots.txt                points crawlers at the sitemap
    sw.js                     the service worker. Its cache name is stamped by the build
    manifest.webmanifest      the PWA manifest

## Rules

1. **Plain HTML, CSS and JS. No framework and no build step.** Keep it that way. This is deliberate,
   not neglect: it has to run fast on a cheap phone, it has to be hostable anywhere, and anyone
   should be able to read the whole thing. No bundler, no transpiler, no npm package in the browser.
   `scripts/build.mjs` is the only thing that generates anything, and it generates data and plain
   pages, not code.
2. **`site/data/` is generated** by `scripts/build.mjs` from `courses/`, `curriculum/core-path.yaml`
   and `curriculum/TAXONOMY.md`. Never edit it by hand. Run `npm run build` and commit it when you
   publish content; CI fails if the committed output is behind the sources. Never commit the
   output of `npm run build:drafts`, which includes unpublished courses. `site/courses/` and
   `sitemap.xml` are also generated but git-ignored: the deploy workflow builds them.
3. **Check anything visual in both themes at phone and desktop width before merging.** There is no
   theme toggle: the site follows `prefers-color-scheme`, so a colour that is only checked in one
   theme is a colour that is only half checked. `npm run shots` renders the four combinations.
4. **Colours come from the tokens in `styles.css`**, in both blocks. A hardcoded hex in a chart or a
   component is a bug in the dark theme by construction, and the lesson linter fails the build on
   one. Two tokens to know about: `--line-strong` and `--navy` are byte-identical in both themes,
   so a chart that uses the pair to distinguish two things distinguishes nothing. `--muted` and
   `--gold-text` are the small-text and gold-as-words colours and clear 4.5:1 on white; `--gold`
   itself does not, so it is for rules, borders and seals, never for running text.
5. **Assets are cache-busted by content hash** at build time, and the service worker's cache name
   and precache list are stamped with them. If you add an asset that `index.html` references,
   add it to the `stamped` map in `scripts/build.mjs` too, or a deploy will be invisible to anyone
   who has visited before. That cost an afternoon once. Course content files carry their hash in
   the index, so they need nothing extra.
6. **The browser is the source of truth for learner progress**, and the site works with no network
   and no account. Nothing may become account-only that works today without one.
7. **Never a colour alone.** Right and wrong in a quiz are a word as well as a border. The lesson
   list follows the article in the DOM and is placed by the grid, so reading order is content
   first. Every page change moves focus to `<main>`.
8. **A lesson URL is two URLs.** `/#/course/<id>/lesson/<lesson>` is the app, with the quiz and
   progress. `/courses/<id>/<lesson>/` is the static reading copy, canonical for search, which
   links into the app. Both come from the same build; neither is hand-edited.

## Previewing

    npm run build && npm run serve     # then http://localhost:4173

`npm run icon` re-renders the PNG icons from `assets/icon.svg` (iOS ignores an SVG touch icon).

## Two live constraints

- **Two links still point into the public GitHub repo** via the `REPO` constant in `assets/app.js`:
  "Report a problem" on every lesson, and "editorial standards" on the About page. Both 404 the day
  the repo goes private. See `docs/PLATFORM_ROADMAP.md`.
- **`window.FOVAL_API` in `index.html` is deliberately empty.** The accounts Worker is written and
  tested but not deployed; while this is empty the site behaves exactly as it does now, with no
  sign-in link and no network calls. Setting it before the Worker is deployed gives every visitor a
  broken sign-in page.
