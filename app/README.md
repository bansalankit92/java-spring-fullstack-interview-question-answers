# Prep Cards

Live: **https://interviewprep.ankitbansal.dev/**

A small web app to study this guide on your phone: **search, pick a topic, swipe one card at a time.**
It also has the study plans (2 weeks, 1 month, 2 months) and a crash-revision mode with flashcards.

- No framework and no npm packages. Plain HTML, CSS and JavaScript.
- Libraries load from a CDN: [marked](https://marked.js.org) (markdown), [highlight.js](https://highlightjs.org) (code) and [Mermaid](https://mermaid.js.org) (diagrams).
- Progress (read cards, bookmarks, plan days, revision) is saved in the browser's `localStorage`. Use **Export / Import progress** on the home screen to move it to another device.

## How it works

1. `build.mjs` reads `../README.md` and `../docs/**/*.md` (the list is in `decks.json`).
2. It splits each file into cards at its headings, rewrites links so they open other cards, and pulls out:
   - revision flashcards from **"In one line"** + **"Say this in the interview"**,
   - the study plans and the top 20 list from the README tables.
3. It writes everything to `dist/` (`dist/content/data.json` + the app files).

The markdown in `docs/` stays the only source. Write or fix an answer, push, and the app shows it after the next deploy.

## Run locally

```bash
cd app
npm run dev        # builds, then serves dist/ on http://localhost:5173
```

Node 18 or newer. Nothing to install.

## Deploy on Vercel

1. Import the GitHub repo in Vercel.
2. Set **Root Directory** to `app`.
3. Keep **"Include files outside the root directory in the Build Step"** turned on (it is on by default). The build needs `../docs` and `../README.md`.
4. Framework preset: **Other**. Build and output settings come from `vercel.json` (`node build.mjs` → `dist`).
5. Deploy. Every push to `master` redeploys with the latest answers.

## Deploy on Dokploy (Docker)

`app/Dockerfile` builds the cards with Node, then serves `dist/` with nginx (`app/nginx.conf`).

1. Create an application from the GitHub repo.
2. Build type: **Dockerfile**.
3. Docker File: `app/Dockerfile`. Docker Context Path: `.` (the repo root, because the build reads `docs/` and `README.md`).
4. Add your domain with Container Port **80** (nginx also listens on **3000**, Dokploy's default, so either works).
   If you see "Bad Gateway", the domain's Container Port does not match: set it to 80.
5. Turn on auto deploy, so every push rebuilds with the latest answers.

Test it locally the same way:

```bash
docker build -f app/Dockerfile -t prep-cards .   # run from the repo root
docker run -p 8080:80 prep-cards                  # http://localhost:8080
```

`app/Dockerfile.dockerignore` keeps `.git` and build output out of the image.

## Security note

Card markdown is turned into HTML without a sanitizer. That is fine because the only content is this repo's own markdown.
If you ever load markdown from other people (for example pull requests you have not reviewed), add a sanitizer such as DOMPurify first.

## Change what is shown

Edit `decks.json`:

| Field | Meaning |
|---|---|
| `path` | Markdown file, relative to the repo root |
| `level` | Split at headings up to this level (`2` = each `##` is a card, `3` = each `###` too) |
| `chapterFromFile` | Use the file title as the chapter (used for case studies) |
| `only` / `skip` | Include or leave out `##` sections by their title |
| `splitBold` | In these chapters, each line like `**12. Title**` starts a new card (used for stream problems) |
| `linkAliases` | Send a link to an app screen instead of a card |

## Files

| File | What it does |
|---|---|
| `index.html` | Page shell, tab bar, reader |
| `styles.css` | Look and layout (light and dark) |
| `app.js` | Routing, search, swipe reader, plan, revision, progress |
| `build.mjs` | Markdown → cards → `dist/content/data.json` |
| `decks.json` | Which files become which topics |
| `serve.mjs` | Tiny local server for `dist/` |
| `vercel.json` | Build settings for Vercel |
| `Dockerfile`, `nginx.conf`, `Dockerfile.dockerignore` | Docker image for Dokploy or any Docker host |
