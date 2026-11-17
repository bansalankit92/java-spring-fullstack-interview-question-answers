/* Prep Cards: read the guide one card at a time.
   Data comes from content/data.json (built by build.mjs). Progress lives in localStorage only. */
(function () {
  "use strict";

  // ---------- state (localStorage) ----------
  var KEY = "prepcards.v1";
  var st = load();
  function load() {
    var d = { read: {}, bm: [], last: null, plan: { type: "2w", done: {} }, crash: {}, theme: null };
    try {
      var r = JSON.parse(localStorage.getItem(KEY) || "null");
      if (r && typeof r === "object") {
        Object.assign(d, r);
        d.plan = Object.assign({ type: "2w", done: {} }, r.plan || {});
        d.plan.done = d.plan.done || {};
        d.read = d.read || {}; d.bm = Array.isArray(d.bm) ? d.bm : []; d.crash = d.crash || {};
      }
    } catch (e) { /* storage blocked: run without saving */ }
    return d;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* ignore */ } }

  // ---------- helpers ----------
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function plain(md) {
    return md.replace(/```mermaid[\s\S]*?```/g, " ").replace(/```\w*/g, " ").replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/<[^>]+>/g, " ").replace(/[#>*_`|\\]/g, " ").replace(/\s+/g, " ").trim();
  }
  var toastT;
  function toast(msg) { var t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, 2400); }
  function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }

  // ---------- data ----------
  var DATA, CARDS, DECKS, DECK = {}, ORDER = {}, TEXT = {};
  var main = $("#main");

  fetch("content/data.json", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (d) {
      DATA = d; CARDS = d.cards; DECKS = d.decks;
      DECKS.forEach(function (dk) {
        DECK[dk.id] = dk;
        ORDER[dk.id] = [].concat.apply([], dk.chapters.map(function (c) { return c.ids; }));
      });
      setupMarkdown();
      route();
    })
    .catch(function () {
      main.innerHTML = '<p class="note">Could not load the cards. Run <code>npm run build</code> in the app folder, then reload.</p>';
    });

  // ---------- markdown, code and diagrams ----------
  function setupMarkdown() {
    if (!window.marked) return;
    marked.use({
      gfm: true,
      renderer: {
        code: function (code, lang) {
          if (code && typeof code === "object") { lang = code.lang; code = code.text; }
          lang = (lang || "").trim().split(/\s+/)[0];
          if (lang === "mermaid") return '<pre class="mermaid" data-src="' + esc(code) + '">' + esc(code) + "</pre>";
          return '<pre><code class="' + (lang ? "language-" + esc(lang) : "") + '">' + esc(code) + "</code></pre>";
        }
      }
    });
  }
  function md(text) {
    if (!text) return "";
    if (!window.marked) return "<p>" + esc(text).replace(/\n\n/g, "</p><p>") + "</p>";
    return marked.parse(text);
  }
  function enhance(el) {
    $$("pre code", el).forEach(function (b) { if (window.hljs && !b.dataset.hl) { b.dataset.hl = "1"; try { hljs.highlightElement(b); } catch (e) { /* ignore */ } } });
    $$("table", el).forEach(function (t) { if (!t.parentElement.classList.contains("tw")) { var w = document.createElement("div"); w.className = "tw"; t.replaceWith(w); w.appendChild(t); } });
    $$("a[href^='http']", el).forEach(function (a) { a.target = "_blank"; a.rel = "noopener"; });
    $$("pre > code", el).forEach(function (code) { addCodeTools(code.parentElement); });
    var ms = $$("pre.mermaid:not([data-processed])", el);
    if (ms.length && window.mermaid) {
      try { mermaid.run({ nodes: ms, suppressErrors: true }).catch(function () {}); } catch (e) { /* ignore */ }
    }
  }
  // Diagrams fit the card (so swiping always moves cards). Tap one to see it full screen at its real size.
  var zoom = $("#zoom"), zoomBody = $("#zoomBody");
  function openZoom(svg) {
    var natural = parseFloat(svg.style.maxWidth) || (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width) || 0;
    zoomBody.innerHTML = svg.outerHTML;
    var big = zoomBody.querySelector("svg");
    big.removeAttribute("width"); big.style.maxWidth = "none";
    // 80% of natural size keeps text readable (~13px) while showing more; never smaller than the screen.
    var screenW = document.documentElement.clientWidth - 32;
    if (natural) big.style.width = Math.max(Math.round(natural * 0.8), screenW) + "px";
    zoom.hidden = false; $("#zoomClose").focus();
  }
  function closeZoom() { zoom.hidden = true; zoomBody.innerHTML = ""; }
  $("#zoomClose").addEventListener("click", closeZoom);
  // Each code block gets "Wrap" and "Copy" buttons. Wrap is one setting for all code, remembered.
  function addCodeTools(pre) {
    if (!pre || pre.parentElement.classList.contains("code-wrap")) return;
    var box = document.createElement("div"); box.className = "code-wrap";
    pre.replaceWith(box); box.appendChild(pre);
    var tools = document.createElement("div"); tools.className = "code-tools";
    tools.innerHTML = '<button type="button" data-act="wrap" aria-pressed="' + !!st.wrap + '">Wrap</button><button type="button" data-act="copy">Copy</button>';
    box.appendChild(tools);
  }
  document.addEventListener("click", function (e) {
    var dia = e.target.closest("pre.mermaid");
    if (dia && dia.querySelector("svg") && !e.target.closest("#zoom")) { openZoom(dia.querySelector("svg")); return; }
    var b = e.target.closest(".code-tools button"); if (!b) return;
    if (b.dataset.act === "wrap") {
      st.wrap = !st.wrap; save(); applyWrap();
    } else {
      var text = b.closest(".code-wrap").querySelector("code").textContent;
      var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1500); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { toast("Copy is blocked here. Long-press to select the code."); });
      else toast("Copy is not supported here. Long-press to select the code.");
    }
  });
  function applyWrap() {
    document.body.classList.toggle("wrap-code", !!st.wrap);
    $$(".code-tools [data-act='wrap']").forEach(function (b) { b.setAttribute("aria-pressed", String(!!st.wrap)); });
  }
  applyWrap();

  // ---------- theme ----------
  var darkMQ = window.matchMedia("(prefers-color-scheme: dark)");
  function isDark() { var t = document.documentElement.getAttribute("data-theme"); return t ? t === "dark" : darkMQ.matches; }
  function applyTheme() {
    if (st.theme) document.documentElement.setAttribute("data-theme", st.theme); else document.documentElement.removeAttribute("data-theme");
    var dark = isDark();
    $("#hl-light").disabled = dark; $("#hl-dark").disabled = !dark;
    var tb = $("#themeBtn"), label = dark ? "Switch to light mode" : "Switch to dark mode";
    tb.setAttribute("aria-label", label); tb.title = label;
    tb.innerHTML = dark
      ? '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
      : '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
    if (window.mermaid) mermaid.initialize({ startOnLoad: false, theme: dark ? "dark" : "default", securityLevel: "strict", fontFamily: "Plus Jakarta Sans, system-ui, sans-serif" });
  }
  function rerenderDiagrams() {
    $$("pre.mermaid[data-processed]").forEach(function (p) { p.removeAttribute("data-processed"); p.textContent = p.dataset.src; });
    var nodes = $$("pre.mermaid");
    if (nodes.length && window.mermaid) mermaid.run({ nodes: nodes, suppressErrors: true }).catch(function () {});
  }
  $("#themeBtn").addEventListener("click", function () { st.theme = isDark() ? "light" : "dark"; save(); applyTheme(); rerenderDiagrams(); });
  darkMQ.addEventListener && darkMQ.addEventListener("change", function () { if (!st.theme) { applyTheme(); rerenderDiagrams(); } });
  applyTheme(); // right away, so the saved theme shows before (or without) the cards loading

  // ---------- router ----------
  window.addEventListener("hashchange", route);
  function route() {
    if (!DATA) return;
    var parts = location.hash.replace(/^#\/?/, "").split("/").map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
    var a = parts[0], b = parts[1], c = parts[2];
    if (a === "c" && CARDS[b]) { var ids = ORDER[CARDS[b].d]; return openReader(ids, ids.indexOf(b), DECK[CARDS[b].d].title, "#/d/" + CARDS[b].d, true); }
    if (a === "day" && DATA.plans[b]) {
      var day = DATA.plans[b].days[+c - 1];
      if (day && day.ids.length) return openReader(day.ids, 0, "Day " + c + " · " + DATA.plans[b].label, "#/plan", false);
    }
    if (a === "bm") { var bm = st.bm.filter(function (id) { return CARDS[id]; }); if (bm.length) return openReader(bm, 0, "Bookmarks", "#/", false); }
    closeReader();
    if (a === "d" && DECK[b]) return show("topics", function () { renderDeck(b); });
    if (a === "plan") return show("plan", renderPlan);
    if (a === "revise") { if (b === "top") V.f = "top"; return show("revise", renderRevise); }
    show("topics", renderHome);
  }
  function show(tab, fn) {
    $$(".tabs a").forEach(function (l) { if (l.dataset.tab === tab) l.setAttribute("aria-current", "page"); else l.removeAttribute("aria-current"); });
    fn();
    window.scrollTo(0, 0);
  }

  // ---------- home ----------
  function readCount(ids) { var n = 0; ids.forEach(function (id) { if (st.read[id]) n++; }); return n; }
  function planKey() { return DATA.plans[st.plan.type] ? st.plan.type : Object.keys(DATA.plans)[0]; }
  function planToday() {
    var key = planKey(), p = key && DATA.plans[key];
    if (!p) return null;
    var done = st.plan.done[key] || [];
    for (var i = 0; i < p.days.length; i++) if (done.indexOf(i + 1) < 0) return { p: p, d: p.days[i] };
    return { p: p, d: p.days[p.days.length - 1] };
  }
  function renderHome() {
    var last = st.last && CARDS[st.last] ? st.last : ORDER[DECKS[0].id][0];
    var lc = CARDS[last], today = planToday();
    var totalRead = Object.keys(st.read).filter(function (id) { return CARDS[id]; }).length;
    main.innerHTML =
      '<div class="search"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
      '<input id="q" type="search" placeholder="Search: saga, caching, top 5…" autocomplete="off" aria-label="Search all cards"></div>' +
      '<div id="results" class="results" hidden></div>' +
      '<div id="homeBody" style="display:grid;gap:22px">' +
        '<div><p class="label">Pick up where you stopped</p><div class="pair">' +
          '<a class="tile primary" href="#/c/' + encodeURIComponent(last) + '"><span class="k">Continue reading</span><span class="v">' + esc(lc.t) + '</span><span class="s">' + esc(DECK[lc.d].title) + "</span></a>" +
          (today ? '<a class="tile" href="#/plan"><span class="k">Today · Day ' + today.d.n + '</span><span class="v">' + esc(today.d.label) + '</span><span class="s">' + esc(today.p.label) + " plan</span></a>" : "") +
        "</div></div>" +
        '<div class="pair">' +
          '<a class="tile" href="#/revise"><span class="k">Crash revision</span><span class="v">' + DATA.crash.length + ' flashcards</span><span class="s">Say it out loud, then flip</span></a>' +
          '<a class="tile" href="#/bm"><span class="k">Bookmarks</span><span class="v">' + st.bm.length + ' saved</span><span class="s">' + (st.bm.length ? "Read them in one go" : "Tap the bookmark icon while reading") + "</span></a>" +
        "</div>" +
        '<div><p class="label">Topics · ' + totalRead + " of " + Object.keys(CARDS).length + " cards read</p>" +
        groupsHTML() + "</div>" +
        '<div><p class="label">Your progress</p><p class="note" style="margin-bottom:10px">Progress is saved only in this browser. Export it to move to another phone or laptop.</p>' +
        '<div class="tools"><button class="chip" type="button" id="exportBtn">Export progress</button>' +
        '<button class="chip" type="button" id="importBtn">Import progress</button><input class="hidden-file" type="file" id="importFile" accept="application/json,.json">' +
        '<button class="chip" type="button" id="resetBtn">Reset progress</button></div></div>' +
        '<p class="note">Free and open source. Every card comes from the guide on <a href="' + esc(DATA.repo.replace(/\/blob\/.*$/, "")) + '">GitHub</a>. Found a mistake or want to add an answer? Open a pull request.</p>' +
      "</div>";
    var q = $("#q"), timer;
    q.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(function () { runSearch(q.value); }, 120); });
    $("#exportBtn").addEventListener("click", exportProgress);
    $("#importBtn").addEventListener("click", function () { $("#importFile").click(); });
    $("#importFile").addEventListener("change", importProgress);
    var armed = false;
    $("#resetBtn").addEventListener("click", function () {
      if (!armed) { armed = true; this.textContent = "Tap again to reset everything"; return; }
      // Reset clears progress but keeps settings (theme, code wrap).
      st = { read: {}, bm: [], last: null, plan: { type: st.plan.type, done: {} }, crash: {}, theme: st.theme, wrap: st.wrap, area: st.area }; save(); applyWrap(); toast("Progress reset"); renderHome();
    });
  }

  // Topic lists grouped by area (System design, Backend, Frontend, AI…), in the order of decks.json.
  function groupsHTML() {
    var groups = [], byName = {};
    DECKS.forEach(function (d) {
      var g = d.group || "Topics";
      if (!byName[g]) { byName[g] = { name: g, decks: [] }; groups.push(byName[g]); }
      byName[g].decks.push(d);
    });
    return groups.map(function (g) {
      return '<section class="group"><h2 class="group-title">' + esc(g.name) + '</h2><div class="decks">' + g.decks.map(function (d) {
        var ids = ORDER[d.id], r = readCount(ids);
        return '<a class="deck" href="#/d/' + d.id + '"><b>' + esc(d.title) + '</b><span class="count">' + r + "/" + ids.length + '</span><span class="meta">' + esc(d.blurb) + '</span><span class="bar"><i style="width:' + (ids.length ? Math.round(100 * r / ids.length) : 0) + '%"></i></span></a>';
      }).join("") + "</div></section>";
    }).join("");
  }

  // ---------- search ----------
  function buildIndex() {
    if (TEXT.ready) return;
    Object.keys(CARDS).forEach(function (id) {
      var c = CARDS[id], raw = plain(c.md);
      TEXT[id] = { t: c.t.toLowerCase(), c: (c.c || "").toLowerCase(), b: raw.toLowerCase(), raw: raw };
    });
    Object.defineProperty(TEXT, "ready", { value: true });
  }
  // Escape text and wrap matches in <mark>, without matching inside HTML entities.
  function highlight(text, re) {
    return String(text).split(re).map(function (part, k) { return k % 2 ? "<mark>" + esc(part) + "</mark>" : esc(part); }).join("");
  }
  function runSearch(raw) {
    var qv = raw.trim().toLowerCase(), box = $("#results"), body = $("#homeBody");
    if (qv.length < 2) { box.hidden = true; body.hidden = false; return; }
    buildIndex();
    box.hidden = false; body.hidden = true;
    var words = qv.split(/\s+/).filter(Boolean), hits = [];
    Object.keys(TEXT).forEach(function (id) {
      var x = TEXT[id], score = 0;
      for (var i = 0; i < words.length; i++) {
        var w = words[i], inT = x.t.indexOf(w) >= 0, inC = x.c.indexOf(w) >= 0, inB = x.b.indexOf(w) >= 0;
        if (!inT && !inC && !inB) return;
        score += (inT ? 10 : 0) + (inC ? 3 : 0) + (inB ? 1 : 0);
      }
      if (x.t.indexOf(qv) >= 0) score += 15;
      hits.push({ id: id, s: score });
    });
    hits.sort(function (a, b) { return b.s - a.s; });
    if (!hits.length) { box.innerHTML = '<p class="note">No card matches "' + esc(raw.trim()) + '". Try fewer words, like "lock" or "kafka".</p>'; return; }
    var re = new RegExp("(" + words.map(function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")", "ig");
    box.innerHTML = '<p class="label">' + hits.length + " cards</p>" + hits.slice(0, 40).map(function (h) {
      var c = CARDS[h.id], x = TEXT[h.id], at = x.b.indexOf(words[0]), from = Math.max(0, at - 50);
      var snip = at >= 0 ? (from ? "…" : "") + x.raw.slice(from, at + 90) + "…" : x.raw.slice(0, 120) + "…";
      return '<a class="result" href="#/c/' + encodeURIComponent(h.id) + '"><small>' + esc(DECK[c.d].title) + (c.c && c.c !== DECK[c.d].title ? " · " + esc(c.c) : "") + "</small><b>" +
        highlight(c.t, re) + "</b><span>" + highlight(snip, re) + "</span></a>";
    }).join("");
  }

  // ---------- deck page ----------
  function renderDeck(id) {
    var d = DECK[id], ids = ORDER[id], r = readCount(ids);
    var firstUnread = ids.filter(function (x) { return !st.read[x]; })[0] || ids[0];
    var n = 0;
    main.innerHTML = '<a class="back" href="#/">← All topics</a>' +
      '<div class="deck-head"><h1>' + esc(d.title) + '</h1><p style="margin:0;color:var(--muted)">' + esc(d.blurb) + "</p></div>" +
      '<a class="tile primary" href="#/c/' + encodeURIComponent(firstUnread) + '"><span class="k">' + (r ? "Continue" : "Start reading") + '</span><span class="v">' + r + " of " + ids.length + ' cards read</span><span class="s">Swipe through one card at a time</span></a>' +
      '<div style="display:grid;gap:8px">' + d.chapters.map(function (ch) {
        if (ch.ids.length === 1 && d.chapters.length > 1) { // a one-card chapter is just a row, no fold-out
          var only = ch.ids[0]; n++;
          return '<div class="chapter"><a class="card-row solo" href="#/c/' + encodeURIComponent(only) + '"><span class="n">' + n + '</span><span class="t">' + esc(CARDS[only].t) + '</span><span class="tick' + (st.read[only] ? " on" : "") + '" aria-label="' + (st.read[only] ? "Read" : "Not read") + '">✓</span></a></div>';
        }
        var cr = readCount(ch.ids), open = d.chapters.length === 1 || ch.ids.indexOf(firstUnread) >= 0;
        return '<details class="chapter"' + (open ? " open" : "") + '><summary><span class="ct">' + esc(ch.t) + '</span><span class="cc">' + cr + "/" + ch.ids.length + '</span></summary><div class="card-list">' +
          ch.ids.map(function (cid) {
            n++;
            return '<a class="card-row" href="#/c/' + encodeURIComponent(cid) + '"><span class="n">' + n + '</span><span class="t">' + esc(CARDS[cid].t) + '</span><span class="tick' + (st.read[cid] ? " on" : "") + '" aria-label="' + (st.read[cid] ? "Read" : "Not read") + '">✓</span></a>';
          }).join("") + "</div></details>";
      }).join("") + "</div>";
  }

  // ---------- reader ----------
  var R = { ids: [], i: 0, target: null, title: "", back: "#/", deckMode: false, open: false };
  var unmarked = {}; // cards the user un-marked this session: swiping past them must not mark them read again
  function autoRead(id) { if (id && !unmarked[id] && !st.read[id]) { st.read[id] = Date.now(); save(); } }
  var track = $("#track"), scrollT;
  function openReader(ids, start, title, back, deckMode) {
    var same = R.open && R.ids === ids;
    R.title = title; R.back = back; R.deckMode = deckMode;
    if (!same) {
      R.ids = ids;
      track.innerHTML = ids.map(function (_, k) { return '<section class="slide" data-k="' + k + '" aria-roledescription="card"></section>'; }).join("");
    }
    var i = Math.max(0, Math.min(ids.length - 1, start));
    if (!R.open) { $("#reader").hidden = false; document.body.style.overflow = "hidden"; R.open = true; }
    // Render now (don't wait for an animation frame, which browsers pause in background tabs), then re-align once layout settles.
    track.scrollLeft = i * track.clientWidth; setIndex(i);
    requestAnimationFrame(function () { if (R.open && R.i === i) track.scrollLeft = i * track.clientWidth; });
  }
  function closeReader() {
    if (!R.open) return;
    if (R.i === R.ids.length - 1) autoRead(R.ids[R.i]); // reached the end of the list
    R.open = false; $("#reader").hidden = true; document.body.style.overflow = ""; track.innerHTML = ""; R.ids = [];
  }
  function cardHTML(id) {
    var c = CARDS[id], d = DECK[c.d];
    return '<article class="card-in"><p class="eyebrow">' + esc(d.title) + (c.c && c.c !== d.title ? " · " + esc(c.c) : "") + "</p><h2>" + esc(c.t) + '</h2><div class="md">' + md(c.md) + "</div>" +
      '<p class="src"><a href="' + esc(DATA.repo + "/" + c.src) + '">Open this answer on GitHub</a></p></article>';
  }
  function ensure(k) {
    var s = track.children[k];
    if (!s || s.dataset.r) return;
    s.dataset.r = "1"; s.innerHTML = cardHTML(R.ids[k]); enhance(s);
  }
  function setIndex(i) {
    R.i = i; R.target = null; [i, i + 1, i - 1].forEach(ensure);
    var id = R.ids[i];
    $("#rTitle").innerHTML = esc(R.title) + " · <b>" + (i + 1) + " / " + R.ids.length + "</b>";
    $("#rProg").style.width = (100 * (i + 1) / R.ids.length) + "%";
    $("#bmBtn").setAttribute("aria-pressed", st.bm.indexOf(id) >= 0 ? "true" : "false");
    var rd = !!st.read[id];
    $("#readBtn").setAttribute("aria-pressed", rd ? "true" : "false");
    $("#readBtn").textContent = rd ? "Read ✓" : "Mark as read";
    $("#prevBtn").disabled = i === 0; $("#nextBtn").disabled = i === R.ids.length - 1;
    st.last = id; save();
    if (R.deckMode) history.replaceState(null, "", "#/c/" + encodeURIComponent(id));
  }
  track.addEventListener("scroll", function () {
    clearTimeout(scrollT);
    scrollT = setTimeout(function () {
      if (!R.open) return;
      var i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== R.i && i >= 0 && i < R.ids.length) {
        if (i > R.i) autoRead(R.ids[R.i]);
        setIndex(i);
      }
    }, 80);
  });
  function step(dlt) {
    var from = R.target != null ? R.target : R.i; // quick repeated taps keep moving
    var i = Math.min(R.ids.length - 1, Math.max(0, from + dlt));
    R.target = i;
    var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: i * track.clientWidth, behavior: smooth ? "smooth" : "auto" });
  }
  $("#prevBtn").addEventListener("click", function () { step(-1); });
  $("#nextBtn").addEventListener("click", function () { step(1); });
  $("#closeReader").addEventListener("click", function () { go(R.back); });
  $("#readBtn").addEventListener("click", function () {
    var id = R.ids[R.i];
    if (st.read[id]) { delete st.read[id]; unmarked[id] = true; } else { st.read[id] = Date.now(); delete unmarked[id]; }
    save(); setIndex(R.i);
  });
  $("#bmBtn").addEventListener("click", function () {
    var id = R.ids[R.i], k = st.bm.indexOf(id);
    if (k >= 0) st.bm.splice(k, 1); else st.bm.push(id);
    save(); setIndex(R.i); toast(k >= 0 ? "Removed from bookmarks" : "Bookmarked");
  });
  document.addEventListener("keydown", function (e) {
    if (!zoom.hidden) { if (e.key === "Escape") closeZoom(); return; }
    if (!R.open || /input|textarea|select/i.test((e.target.tagName || ""))) return;
    if (e.key === "ArrowRight") step(1); else if (e.key === "ArrowLeft") step(-1); else if (e.key === "Escape") go(R.back);
  });
  window.addEventListener("resize", function () { if (R.open) track.scrollLeft = R.i * track.clientWidth; });

  // ---------- plan ----------
  function renderPlan() {
    var keys = Object.keys(DATA.plans);
    st.plan.type = planKey();
    var t = st.plan.type, p = DATA.plans[t], done = st.plan.done[t] || (st.plan.done[t] = []);
    var today = planToday(), week = null, html = "";
    p.days.forEach(function (d) {
      if (d.week && d.week !== week) { week = d.week; html += '<p class="week">' + esc(week) + "</p>"; }
      var isDone = done.indexOf(d.n) >= 0, cid = "day-" + t + "-" + d.n;
      html += '<div class="day' + (isDone ? " done" : "") + (today && today.d === d ? " today" : "") + '">' +
        '<input type="checkbox" id="' + cid + '" data-n="' + d.n + '"' + (isDone ? " checked" : "") + ">" +
        '<label class="dn" for="' + cid + '">Day ' + d.n + "</label>" +
        '<span class="dl"><span>' + esc(d.label) + "</span>" + (d.extra ? "<small>" + esc(d.extra) + "</small>" : "") + "</span>" +
        (d.ids.length ? '<a class="mini" href="#/day/' + t + "/" + d.n + '">' + d.ids.length + (d.ids.length > 1 ? " cards" : " card") + "</a>" : "<span></span>") + "</div>";
    });
    main.innerHTML =
      '<div><h1 style="font-size:26px">Study plan</h1><p style="margin:4px 0 0;color:var(--muted)">Tick a day when you finish it. Open its cards from the button on the right.</p></div>' +
      '<div class="seg" role="group" aria-label="Plan length">' + keys.map(function (k) { return '<button type="button" data-plan="' + k + '" aria-pressed="' + (k === t) + '">' + esc(DATA.plans[k].label) + "</button>"; }).join("") + "</div>" +
      '<div class="plan-sum"><div><b>' + done.length + " / " + p.days.length + '</b> <span style="color:var(--muted)">days done</span></div><span style="color:var(--muted);font-size:13px">' + esc(p.hours) + "</span></div>" +
      '<div class="bar" style="height:7px"><i style="width:' + (100 * done.length / p.days.length) + '%"></i></div>' +
      '<div class="days">' + html + "</div>";
    $$(".seg button").forEach(function (b) { b.addEventListener("click", function () { st.plan.type = b.dataset.plan; save(); renderPlan(); }); });
    $$(".day input").forEach(function (cb) {
      cb.addEventListener("change", function () {
        var n = +cb.dataset.n, arr = st.plan.done[t], k = arr.indexOf(n);
        if (cb.checked && k < 0) arr.push(n);
        if (!cb.checked && k >= 0) arr.splice(k, 1);
        save(); renderPlan();
        if (cb.checked) toast("Day " + n + " done. Commit it as day-" + String(n).padStart(2, "0"));
      });
    });
  }

  // ---------- revise (crash course) ----------
  var V = { f: "todo", deck: "all", i: 0, flipped: false, shuffle: false, list: [] };
  // Areas split flashcards by deck group: Backend (incl. system design, production), Frontend, AI.
  var AREAS = [["all", "All areas"], ["be", "Backend"], ["fe", "Frontend"], ["ai", "AI"]];
  function curArea() { var a = st.area; return AREAS.some(function (x) { return x[0] === a; }) ? a : "all"; }
  function areaOf(deckId) {
    var g = (DECK[deckId] && DECK[deckId].group) || "";
    if (g === "Frontend") return "fe";
    if (g === "AI and LLMs") return "ai";
    if (g === "Interview day") return "iv";
    return "be";
  }
  function inArea(deckId) { var a = curArea(); return a === "all" || areaOf(deckId) === a; }
  function revList() {
    var top = DATA.top20 || [];
    var l = DATA.crash.filter(function (x) {
      if (!CARDS[x.id]) return false;
      if (!inArea(x.d)) return false;
      if (V.deck !== "all" && x.d !== V.deck) return false;
      if (V.f === "todo") return st.crash[x.id] !== "known";
      if (V.f === "top") return top.indexOf(x.id) >= 0;
      if (V.f === "bm") return st.bm.indexOf(x.id) >= 0;
      return true;
    });
    if (V.shuffle) l = l.map(function (x) { return [Math.random(), x]; }).sort(function (a, b) { return a[0] - b[0]; }).map(function (p) { return p[1]; });
    return l;
  }
  function renderRevise(keepList) {
    if (!keepList) { V.list = revList(); V.i = 0; V.flipped = false; }
    if (V.i >= V.list.length) V.i = 0;
    var pool = DATA.crash.filter(function (x) { return CARDS[x.id] && inArea(x.d); });
    var known = pool.filter(function (x) { return st.crash[x.id] === "known"; }).length;
    var decksWith = DECKS.filter(function (d) { return inArea(d.id) && pool.some(function (x) { return x.d === d.id; }); });
    var area = curArea();
    var chip = function (f, label) { return '<button class="chip" type="button" data-f="' + f + '" aria-pressed="' + (V.f === f) + '">' + label + "</button>"; };
    var x = V.list[V.i], card;
    if (!x) {
      card = '<div class="flash"><p class="eyebrow">Nothing here</p><h2>' + (V.f === "bm" ? "Bookmark cards while you read" : V.f === "todo" ? "You know every card in this filter" : "No cards match") + '</h2><p class="hint">Change the filter above to see more cards.</p></div>';
    } else {
      card = '<div class="flash" id="flash" role="button" tabindex="0" aria-live="polite" aria-label="' + esc(x.t) + (V.flipped ? ", answer shown" : ", tap to show the answer") + '"><p class="eyebrow">' + esc(DECK[x.d].title) + "</p><h2>" + esc(x.t) + "</h2>" +
        (V.flipped
          ? '<div class="md"><p><b>In one line:</b></p>' + md(x.one) + '</div><div class="say"><span class="say-label">Say this in the interview</span><div class="md">' + md(x.say) + "</div></div>" +
            '<a href="#/c/' + encodeURIComponent(x.id) + '" id="fullLink">Read the full card →</a>'
          : '<p class="hint">Say your answer out loud first. Then tap the card to check it.</p>') + "</div>";
    }
    main.innerHTML =
      '<div><h1 style="font-size:26px">Crash revision</h1><p style="margin:4px 0 0;color:var(--muted)">One topic at a time. Read the title, answer out loud, then flip.</p></div>' +
      '<div class="seg" role="group" aria-label="Area">' + AREAS.map(function (a) { return '<button type="button" data-area="' + a[0] + '" aria-pressed="' + (a[0] === area) + '">' + a[1] + "</button>"; }).join("") + "</div>" +
      '<div class="chips">' + chip("todo", "Not known yet") + chip("all", "All") + chip("top", "Top 20") + chip("bm", "Bookmarked") +
      '<button class="chip" type="button" id="shuf" aria-pressed="' + V.shuffle + '">Shuffle</button>' +
      '<select class="chip" id="revDeck" aria-label="Topic"><option value="all">All topics</option>' +
      decksWith.map(function (d) { return '<option value="' + d.id + '"' + (V.deck === d.id ? " selected" : "") + ">" + esc(d.title) + "</option>"; }).join("") + "</select></div>" +
      '<div class="rev-stat"><span>' + (V.list.length ? V.i + 1 : 0) + " / " + V.list.length + "</span><span>" + known + " of " + pool.length + " known" + (area === "all" ? "" : " in " + AREAS.filter(function (a) { return a[0] === area; })[0][1]) + "</span></div>" +
      card +
      (x ? '<div class="rev-actions"><button class="big again" type="button" id="againBtn">Revise again</button><button class="big got" type="button" id="gotBtn">I know this</button></div>' : "");
    if (x) enhance(main);
    $$(".chips [data-f]").forEach(function (b) { b.addEventListener("click", function () { V.f = b.dataset.f; renderRevise(); }); });
    $$("[data-area]").forEach(function (b) { b.addEventListener("click", function () { st.area = b.dataset.area; save(); V.deck = "all"; renderRevise(); }); });
    $("#shuf").addEventListener("click", function () { V.shuffle = !V.shuffle; renderRevise(); });
    $("#revDeck").addEventListener("change", function () { V.deck = this.value; renderRevise(); });
    var f = $("#flash");
    if (f) {
      var flip = function () { V.flipped = !V.flipped; renderRevise(true); var n = $("#flash"); if (n) n.focus(); };
      // Taps on links, Wrap/Copy buttons or diagrams inside the card must not flip it.
      var inner = function (t) { return t.closest("a, button, pre.mermaid"); };
      f.addEventListener("click", function (e) { if (!inner(e.target)) flip(); });
      f.addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && !inner(e.target)) { e.preventDefault(); flip(); } });
    }
    if (x) {
      $("#gotBtn").addEventListener("click", function () { rate("known"); });
      $("#againBtn").addEventListener("click", function () { rate("again"); });
    }
  }
  function rate(v) {
    var x = V.list[V.i]; if (!x) return;
    st.crash[x.id] = v; save(); V.flipped = false;
    if (V.f === "todo" && v === "known") V.list.splice(V.i, 1); else V.i = (V.i + 1) % V.list.length;
    renderRevise(true);
  }

  // ---------- export / import ----------
  function exportProgress() {
    var blob = new Blob([JSON.stringify(st, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "prep-cards-progress.json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    toast("Progress file downloaded");
  }
  function importProgress(e) {
    var file = e.target.files && e.target.files[0]; if (!file) return;
    var r = new FileReader();
    r.onload = function () {
      try {
        var o = JSON.parse(r.result);
        Object.assign(st.read, o.read || {});
        (o.bm || []).forEach(function (id) { if (st.bm.indexOf(id) < 0) st.bm.push(id); });
        Object.assign(st.crash, o.crash || {});
        var od = (o.plan && o.plan.done) || {};
        Object.keys(od).forEach(function (k) { st.plan.done[k] = Array.from(new Set((st.plan.done[k] || []).concat(od[k]))); });
        save(); toast("Progress imported"); renderHome();
      } catch (err) { toast("That file is not a Prep Cards progress file"); }
    };
    r.readAsText(file);
  }
})();
