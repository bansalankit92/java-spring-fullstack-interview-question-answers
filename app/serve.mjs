// Tiny local server for dist/ (no dependencies). Usage: node serve.mjs [port]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), "dist");
const PORT = Number(process.argv[2]) || 5173;
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".webmanifest": "application/manifest+json" };

http.createServer((req, res) => {
  let url;
  try { url = decodeURIComponent(new URL(req.url, "http://x").pathname); }
  catch { res.writeHead(400); return res.end("Bad request"); }
  let file = path.normalize(path.join(DIST, url === "/" ? "index.html" : url));
  const rel = path.relative(DIST, file);
  const inside = rel && !rel.startsWith("..") && !path.isAbsolute(rel);
  if (!inside || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(DIST, "index.html");
  res.writeHead(200, { "Content-Type": (TYPES[path.extname(file)] || "application/octet-stream") + "; charset=utf-8" });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`Interview Prep 2026 on http://localhost:${PORT}`));
