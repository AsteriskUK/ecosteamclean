/* Generates blog/<slug>.html for every seed article in js/blog.js (static, indexable pages).
   Run:  node tools/make-blog-pages.mjs  then  node tools/prerender.mjs */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const BASE = "https://ecologicscleaning.co.uk";
const src = readFileSync(new URL("../js/blog.js", import.meta.url), "utf8");
const posts = new Function("window", "localStorage", src.replace(/window\.ESC_BLOG[\s\S]*$/, "") + "; return SEED_POSTS;")({ ESC: {} }, { getItem: () => null });
const tpl = readFileSync(new URL("../post.html", import.meta.url), "utf8");
const esc = (x) => x.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
mkdirSync(new URL("../blog/", import.meta.url), { recursive: true });
for (const p of posts) {
  const url = `${BASE}/blog/${p.slug}.html`, img = `${BASE}/${p.image}`;
  const title = `${p.title} — Ecologics Cleaning`;
  const ld = [
    { "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.excerpt, image: img, datePublished: p.date, dateModified: p.date, mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Ecologics Cleaning", url: BASE + "/" },
      publisher: { "@type": "Organization", name: "Ecologics Cleaning", url: BASE + "/", logo: { "@type": "ImageObject", url: BASE + "/assets/favicon.png" } } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE + "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: BASE + "/blog.html" },
      { "@type": "ListItem", position: 3, name: p.title, item: url } ] },
  ];
  const head = `<link rel="canonical" href="${url}">
<meta property="og:site_name" content="Ecologics Cleaning">
<meta property="og:type" content="article">
<meta property="og:locale" content="en_GB">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(p.excerpt)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="article:published_time" content="${p.date}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(p.excerpt)}">
<meta name="twitter:image" content="${img}">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
`;
  let h = tpl
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(p.excerpt)}">`)
    .replace('<link rel="preconnect" href="https://fonts.googleapis.com">', head + '<link rel="preconnect" href="https://fonts.googleapis.com">')
    .replace('href="css/', 'href="../css/').replace('src="js/site.js"', 'src="../js/site.js"').replace('src="js/blog.js"', 'src="../js/blog.js"')
    .replace('data-root=""', `data-root="../" data-slug="${p.slug}"`);
  writeFileSync(new URL(`../blog/${p.slug}.html`, import.meta.url), h);
  console.log(p.slug);
}
