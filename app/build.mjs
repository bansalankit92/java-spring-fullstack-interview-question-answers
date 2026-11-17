#!/usr/bin/env node
// Builds dist/ from the guide's markdown files. No dependencies.
//   node build.mjs
// Reads ../README.md and ../docs/**.md (configured in decks.json), splits them into cards,
// rewrites links so they open cards inside the app, and writes dist/content/data.json.
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APP = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(APP, "..");
const DIST = path.join(APP, "dist");
const cfg = JSON.parse(fs.readFileSync(path.join(APP, "decks.json"), "utf8"));
const STATIC = ["app.js", "styles.css", "icon.svg", "manifest.webmanifest", "og-image.png"]; // index.html is templated below
const SITE = "https://interviewprep.ankitbansal.dev/";
const TINY = 160; // a section with less text than this is merged into the next card

// ---------- helpers ----------
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8").replace(/\r\n/g, "\n");
const cleanTitle = (t) => t.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\\(.)/g, "$1").replace(/[*`]/g, "").trim();
// Same anchor rules as GitHub, so README links match card anchors.
function slug(h) {
  return h.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[*`]/g, "").trim().toLowerCase()
    .replace(/[^\p{L}\p{N}_\- ]/gu, "").replace(/ /g, "-");
}
function plain(md) {
  return md.replace(/```mermaid[\s\S]*?```/g, " ").replace(/```\w*/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ").replace(/[#>*_`|\\]/g, " ").replace(/\s+/g, " ").trim();
}
function scanHeadings(lines) {
  const heads = [], seen = {};
  let fence = false;
  lines.forEach((l, i) => {
    if (/^\s*(```|~~~)/.test(l)) { fence = !fence; return; }
    if (fence) return;
    const m = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(l);
    if (!m) return;
    const s = slug(m[2]), n = seen[s] || 0;
    seen[s] = n + 1;
    heads.push({ i, level: m[1].length, text: cleanTitle(m[2]), slug: n ? `${s}-${n}` : s });
  });
  return heads;
}

// ---------- split one source file into cards ----------
function cardsFromSource(src, deck, used) {
  const rel = src.path;
  const lines = read(rel).split("\n");
  const heads = scanHeadings(lines);
  const h1 = heads.find((h) => h.level === 1);
  const fileTitle = h1 ? h1.text : path.basename(rel, ".md");
  const stem = path.basename(rel, ".md").toLowerCase();
  const L = src.level;
  const bounds = heads.filter((h) => h.level >= 2 && h.level <= L);
  const sections = [{ head: null, from: h1 ? h1.i + 1 : 0, to: bounds.length ? bounds[0].i : lines.length }];
  bounds.forEach((b, k) => sections.push({ head: b, from: b.i + 1, to: k + 1 < bounds.length ? bounds[k + 1].i : lines.length }));

  const raw = [];
  let top = null;
  for (const s of sections) {
    if (s.head && s.head.level === 2) top = s.head;
    const topTitle = s.head ? top && top.text : null;
    if (src.only && !(topTitle && src.only.includes(topTitle))) continue;
    if (src.skip && topTitle && src.skip.includes(topTitle)) continue;
    const md = lines.slice(s.from, s.to).filter((l) => !/^\[←/.test(l.trim())).join("\n").trim();
    const startLine = s.head ? s.head.i : s.from;
    raw.push({
      title: s.head ? s.head.text : src.chapterFromFile ? "Overview" : fileTitle,
      chapter: src.chapterFromFile ? fileTitle : L >= 3 && topTitle ? topTitle : fileTitle,
      md,
      anchors: heads.filter((h) => h.level > 1 && h.i >= startLine && h.i < s.to).map((h) => h.slug),
      key: s.head ? s.head.slug : "overview",
    });
  }

  // Merge tiny sections (like a heading with one intro line) into the next card of the SAME chapter.
  // A tiny section that ends a chapter is added to the previous card of that chapter instead.
  const merged = [];
  let pending = null;
  raw.forEach((c, k) => {
    const next = raw[k + 1];
    if (!plain(c.md)) { // heading with no text: never a card, but keep its anchors for links
      if (next) { pending = pending || { md: [], anchors: [] }; pending.anchors.push(...c.anchors); }
      else if (merged.length) merged[merged.length - 1].anchors.push(...c.anchors);
      return;
    }
    const isTiny = plain(c.md).length < TINY;
    if (isTiny && (!next || next.chapter !== c.chapter)) {
      const prev = merged[merged.length - 1];
      if (prev && prev.chapter === c.chapter && !pending) {
        const heading = c.key === "overview" ? "" : `### ${c.title}\n\n`;
        if (c.md) prev.md += `\n\n${heading}${c.md}`;
        prev.anchors.push(...c.anchors);
        return;
      }
    }
    if (isTiny && next && next.chapter === c.chapter) {
      pending = pending || { md: [], anchors: [] };
      if (c.md) pending.md.push(c.md);
      pending.anchors.push(...c.anchors);
      return;
    }
    if (pending) {
      c.md = [...pending.md, c.md].join("\n\n");
      c.anchors = [...pending.anchors, ...c.anchors];
      pending = null;
    }
    merged.push(c);
  });

  // Optional: split numbered bold problems ("**12. Title**" on its own line) into their own cards.
  let finalCards = merged;
  if (src.splitBold) {
    finalCards = [];
    for (const c of merged) {
      if (!src.splitBold.includes(c.chapter)) { finalCards.push(c); continue; }
      const parts = [{ title: c.title, md: [], anchors: c.anchors, key: c.key }];
      let fence = false;
      for (const l of c.md.split("\n")) {
        if (/^\s*```/.test(l)) fence = !fence;
        const m = !fence && /^\*\*(\d+)\.\s+(.+?)\*\*\s*$/.exec(l);
        if (m) { parts.push({ title: `${m[1]}. ${cleanTitle(m[2])}`, md: [], anchors: [], key: `${c.key}-p${m[1]}` }); continue; }
        parts[parts.length - 1].md.push(l);
      }
      parts.forEach((p, k) => {
        const md = p.md.join("\n").trim();
        if (k === 0 && plain(md).length < TINY && parts.length > 1) { parts[1].anchors = p.anchors; parts[1].md.unshift(md); return; }
        finalCards.push({ title: p.title, chapter: k === 0 ? c.chapter : c.title, md: k === 0 ? md : p.md.join("\n").trim(), anchors: p.anchors, key: p.key });
      });
    }
  }

  return finalCards.map((c) => {
    let id = `${deck.id}.${stem}.${c.key}`.slice(0, 120), n = 2;
    while (used.has(id)) id = `${deck.id}.${stem}.${c.key}-${n++}`;
    used.add(id);
    return { id, deck: deck.id, chapter: c.chapter, title: c.title, md: c.md, anchors: c.anchors, rel, srcKey: c.key, fileTitle };
  });
}

// ---------- build ----------
const used = new Set();
const allCards = [];
const decksOut = [];
for (const deck of cfg.decks) {
  const cards = deck.sources.flatMap((s) => cardsFromSource(s, deck, used));
  allCards.push(...cards);
  const chapters = [];
  for (const c of cards) {
    let ch = chapters[chapters.length - 1];
    if (!ch || ch.t !== c.chapter) { ch = { t: c.chapter, ids: [] }; chapters.push(ch); }
    ch.ids.push(c.id);
  }
  decksOut.push({ id: deck.id, group: deck.group || "", title: deck.title, blurb: deck.blurb, count: cards.length, chapters });
}

// anchor map: "docs/kafka.md#kafka-message-ordering" -> card id
const anchorMap = new Map(), firstCard = new Map();
for (const c of allCards) {
  if (!firstCard.has(c.rel)) firstCard.set(c.rel, c.id);
  for (const a of c.anchors) if (!anchorMap.has(`${c.rel}#${a}`)) anchorMap.set(`${c.rel}#${a}`, c.id);
}

let external = 0;
function resolveLink(fromRel, url) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(url)) return { href: url };
  const [p, a = ""] = url.split("#");
  const target = p ? path.posix.normalize(path.posix.join(path.posix.dirname(fromRel), p)) : fromRel;
  const alias = (cfg.linkAliases || {})[`${target}${a ? "#" + a : ""}`];
  if (alias) return { href: alias };
  if (target.endsWith(".md")) {
    const id = a ? anchorMap.get(`${target}#${a}`) : firstCard.get(target);
    if (id) return { href: `#/c/${encodeURIComponent(id)}`, id };
    if (target === cfg.readme && /plan/.test(a)) return { href: "#/plan" };
  }
  external++;
  return { href: `${cfg.repoUrl}/${target}${a ? "#" + a : ""}` };
}
function rewrite(fromRel, md) {
  return md.replace(/(!?)\[((?:[^\[\]]|\[[^\]]*\])*)\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, bang, text, url, title = "") => {
    if (bang) {
      if (/^[a-z]+:/i.test(url)) return all;
      const t = path.posix.normalize(path.posix.join(path.posix.dirname(fromRel), url));
      return t.startsWith("docs/images/") ? `![${text}](content/images/${path.posix.basename(t)}${title})` : all;
    }
    return `[${text}](${resolveLink(fromRel, url).href}${title})`;
  });
}

// revision items: "In one line" + "Say this in the interview"
function extractOne(md) {
  const m = /\*\*In one line:\*\*\s*([\s\S]*?)(?:\n\s*\n|$)/.exec(md);
  return m ? m[1].trim() : null;
}
function extractSay(md) {
  const m = /\*\*Say this in the interview:?\*\*:?[ \t]*\n+((?:>.*(?:\n|$))+)/.exec(md);
  return m ? m[1].split("\n").map((l) => l.replace(/^>\s?/, "")).join("\n").trim() : null;
}
const crash = [];
const byFile = new Map();
for (const c of allCards) {
  if (!byFile.has(c.rel)) byFile.set(c.rel, []);
  byFile.get(c.rel).push(c);
}
const fromFileSrc = new Set(cfg.decks.flatMap((d) => d.sources.filter((s) => s.chapterFromFile).map((s) => s.path)));
// A topic's "In one line" and "Say this" can land in different cards when a long
// section is split at its ### headings. Pair a card that has only the one-liner with
// the next card in the same chapter that has only the "Say this" block.
let pending = null;
for (const c of allCards) {
  if (fromFileSrc.has(c.rel)) continue;
  const one = extractOne(c.md), say = extractSay(c.md);
  if (pending && (pending.c.rel !== c.rel || pending.c.chapter !== c.chapter || one)) pending = null;
  if (one && say) crash.push({ id: c.id, t: c.title, d: c.deck, one: rewrite(c.rel, one), say: rewrite(c.rel, say) });
  else if (one) pending = { c, one };
  else if (say && pending) {
    const p = pending.c;
    crash.push({ id: p.id, t: p.title, d: p.deck, one: rewrite(p.rel, pending.one), say: rewrite(c.rel, say) });
    pending = null;
  }
}
for (const rel of fromFileSrc) {
  const cards = byFile.get(rel) || [];
  const first = cards[0];
  const sayCard = cards.find((c) => /say this in the interview/i.test(c.title));
  const one = first && extractOne(first.md);
  if (one && sayCard) {
    const say = sayCard.md.split("\n").map((l) => l.replace(/^>\s?/, "")).join("\n").trim();
    crash.push({ id: first.id, t: first.fileTitle, d: first.deck, one: rewrite(rel, one), say: rewrite(rel, say) });
  }
}

// plans and top 20 from README
function linksIn(fromRel, text) {
  const ids = [];
  for (const m of text.matchAll(/\[(?:[^\[\]]|\[[^\]]*\])*\]\(([^)\s]+)\)/g)) {
    const r = resolveLink(fromRel, m[1]);
    if (r.id && !ids.includes(r.id)) ids.push(r.id);
  }
  return ids;
}
function parsePlans() {
  const rel = cfg.readme, lines = read(rel).split("\n");
  const keys = { "2-week plan": "2w", "1-month plan": "1m", "2-month plan": "2m" };
  const plans = {}, top20 = [];
  let cur = null, week = null, inTop = false;
  for (const l of lines) {
    let m = /^###\s+(.+?)\s*$/.exec(l);
    if (m) { cur = keys[m[1]] ? (plans[keys[m[1]]] = { label: m[1].replace(" plan", ""), hours: "", days: [] }) : null; week = null; continue; }
    if (/^##\s/.test(l)) { cur = null; inTop = /^##\s+Top 20/.test(l); continue; }
    if (inTop && (m = /^\|\s*\d+\s*\|(.*)\|\s*$/.exec(l))) { top20.push(...linksIn(rel, m[1]).filter((id) => !top20.includes(id))); continue; }
    if (!cur) continue;
    if (!cur.hours && (m = /About \*\*(.+?)\*\*/.exec(l))) cur.hours = m[1];
    if ((m = /^\*\*Week (\d+):\s*(.+?)\*\*\s*$/.exec(l))) { week = `Week ${m[1]} · ${m[2]}`; continue; }
    if ((m = /^\|\s*(\d+)\s*\|(.*)\|\s*$/.exec(l))) {
      const cols = m[2].split("|").map((s) => s.trim());
      cur.days.push({ n: +m[1], week, label: plain(cols[0]), extra: plain(cols[1] || ""), ids: linksIn(rel, m[2]) });
    }
  }
  return { plans, top20 };
}
const { plans, top20 } = parsePlans();

// ---------- write ----------
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, "content", "images"), { recursive: true });
for (const f of STATIC) fs.copyFileSync(path.join(APP, f), path.join(DIST, f));
const imgDir = path.join(ROOT, "docs", "images");
if (fs.existsSync(imgDir)) for (const f of fs.readdirSync(imgDir)) fs.copyFileSync(path.join(imgDir, f), path.join(DIST, "content", "images", f));

const cardsOut = {};
for (const c of allCards) cardsOut[c.id] = { d: c.deck, c: c.chapter, t: c.title, md: rewrite(c.rel, c.md), src: `${c.rel}${c.srcKey === "overview" ? "" : "#" + c.srcKey.replace(/-p\d+$/, "")}` };
const data = { v: Date.now(), repo: cfg.repoUrl, decks: decksOut, cards: cardsOut, crash, plans, top20 };
fs.writeFileSync(path.join(DIST, "content", "data.json"), JSON.stringify(data));

// index.html: fill in SEO placeholders and a crawlable topic list (the app replaces it once cards load).
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const today = new Date().toISOString().slice(0, 10);
const repoHome = cfg.repoUrl.replace(/\/blob\/.*$/, "");
const staticHome = `<section class="static-home">
        <h1>Interview prep, one card at a time</h1>
        <p>${allCards.length} cards in simple English: system design, microservices, Java, Spring Boot, Kafka, frontend and AI. Each answer has a real-life story, a diagram where it helps and a line you can say in the interview.</p>
${[...new Set(decksOut.map((d) => d.group || "Topics"))].map((g) => `        <section class="group"><h2 class="group-title">${esc(g)}</h2><div class="decks">
${decksOut.filter((d) => (d.group || "Topics") === g).map((d) => `          <a class="deck" href="#/d/${d.id}"><b>${esc(d.title)}</b><span class="count">${d.count}</span><span class="meta">${esc(d.blurb)}</span></a>`).join("\n")}
        </div></section>`).join("\n")}
        <p class="note" id="loading">Loading cards…</p>
        <noscript><p class="note">This app needs JavaScript. You can read every answer on <a href="${esc(repoHome)}">GitHub</a>.</p></noscript>
      </section>`;
// Cache-busting: a new deploy always loads the matching CSS and JS, never an old cached copy.
const hashOf = (f) => crypto.createHash("sha256").update(fs.readFileSync(path.join(APP, f))).digest("hex").slice(0, 10);
const html = fs.readFileSync(path.join(APP, "index.html"), "utf8")
  .replace('href="styles.css"', `href="styles.css?v=${hashOf("styles.css")}"`)
  .replace('src="app.js"', `src="app.js?v=${hashOf("app.js")}"`)
  .replace("<!--BUILD:STATIC-HOME-->", () => staticHome) // function form: "$" in content is never a pattern
  .replaceAll("__SITE__", SITE)
  .replaceAll("__BUILD_DATE__", today)
  .replaceAll("__CARD_COUNT__", String(allCards.length));
fs.writeFileSync(path.join(DIST, "index.html"), html);
fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);
fs.writeFileSync(path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>\n</urlset>\n`);

const kb = Math.round(fs.statSync(path.join(DIST, "content", "data.json")).size / 1024);
console.log(`Built ${allCards.length} cards in ${decksOut.length} decks (${kb} KB).`);
for (const d of decksOut) console.log(`  ${d.title.padEnd(28)} ${String(d.count).padStart(4)} cards, ${d.chapters.length} chapters`);
console.log(`Revision cards: ${crash.length}. Top 20 linked: ${top20.length}. Plans: ${Object.entries(plans).map(([k, p]) => `${k}=${p.days.length} days`).join(", ")}.`);
console.log(`Links that open GitHub (not a card): ${external}.`);
