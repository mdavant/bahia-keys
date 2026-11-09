import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../src/App";
import { pageMeta } from "../src/content";
import fs from "node:fs";
import path from "node:path";
const shell = fs.readFileSync("dist/index.html", "utf8");
const escape = (text: string) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
const domain = process.env.VITE_SITE_URL?.replace(/\/$/, "");
for (const url of [...Object.keys(pageMeta), "/404"]) {
  const meta = pageMeta[url] || {
    title: "Page introuvable",
    description: "Retrouvez Bahia Keys, conciergerie locative à Oran.",
  };
  let html = shell
    .replace(
      "<!--app-html-->",
      renderToString(
        <StaticRouter location={url}>
          <App />
        </StaticRouter>,
      ),
    )
    .replace(
      /<title>.*?<\/title>/,
      `<title>${escape(meta.title)} — Bahia Keys</title>`,
    )
    .replace(
      /(<meta name="description" content=")[^"]*/,
      `$1${escape(meta.description)}`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*/,
      `$1${escape(meta.title)} — Bahia Keys`,
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*/,
      `$1${escape(meta.description)}`,
    );
  if (domain) {
    html = html
      .replace(
        "</head>",
        `<link rel="canonical" href="${escape(domain + url)}"/><meta property="og:url" content="${escape(domain + url)}"/></head>`,
      )
      .replace(
        'content="/media/oran-panorama.webp"',
        `content="${escape(domain)}/media/oran-panorama.webp"`,
      );
  }
  const dest =
    url === "/"
      ? "dist/index.html"
      : url === "/404"
        ? "dist/404.html"
        : path.join("dist", url, "index.html");
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
}
fs.writeFileSync(
  "dist/robots.txt",
  domain
    ? `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`
    : "User-agent: *\nDisallow: /\n",
);
if (domain)
  fs.writeFileSync(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(
      pageMeta,
    )
      .map((url) => `<url><loc>${escape(domain + url)}</loc></url>`)
      .join("")}</urlset>`,
  );
console.log(
  "8 pages pré-rendues. SEO : " +
    (domain ? "domaine configuré" : "indexation désactivée en préproduction"),
);
