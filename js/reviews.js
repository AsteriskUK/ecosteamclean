/* Google reviews (static copy). Reviews live in data/google-reviews.json — real Google reviews, copied as
   published. To refresh: update that file (rating, count, new reviews) and re-run `node tools/prerender.mjs`.
   #gReviews data-featured="Name|Name|…" shows just those; data-all="1" shows every review. */
(function () {
  const mount = document.getElementById("gReviews");
  if (!mount) return;
  const GMAPS = mount.getAttribute("data-gmaps") || "https://www.google.com/maps";
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const stars = (n) => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
  const GLOGO = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#4285F4" d="M23 12.27c0-.8-.07-1.56-.2-2.3H12v4.35h6.17a5.27 5.27 0 0 1-2.29 3.46v2.87h3.7c2.17-2 3.42-4.94 3.42-8.38z"/><path fill="#34A853" d="M12 23c3.1 0 5.7-1.03 7.58-2.8l-3.7-2.87c-1.03.69-2.35 1.1-3.88 1.1-2.98 0-5.5-2.01-6.4-4.72H1.78v2.96A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.6 13.71a6.6 6.6 0 0 1 0-4.2V6.55H1.78a11 11 0 0 0 0 9.9l3.82-2.74z"/><path fill="#EA4335" d="M12 5.58c1.69 0 3.2.58 4.39 1.72l3.29-3.29C17.7 2.15 15.1 1 12 1A11 11 0 0 0 1.78 6.55L5.6 9.5C6.5 6.8 9.02 5.58 12 5.58z"/></svg>';
  const FALLBACK = { rating: 5.0, count: 66, url: GMAPS, reviews: [] };

  function summary(d, showAllLink) {
    return `<div class="gr-summary"><span class="gr-g">${GLOGO} Google</span>
      <span class="gr-score">${Number(d.rating).toFixed(1)}</span><span class="gr-stars" aria-label="${Number(d.rating).toFixed(1)} out of 5 stars">★★★★★</span>
      <span class="gr-based">Based on ${d.count} Google reviews</span>
      ${showAllLink ? `<a class="btn btn-primary btn-sm" href="reviews.html">Read all ${d.count} reviews</a>` : ""}
      <a class="btn btn-outline btn-sm" href="${esc(d.url || GMAPS)}" target="_blank" rel="noopener">View on Google ↗</a></div>`;
  }
  function card(v) {
    const paras = String(v.text).split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join("");
    return `<article class="gr-card"><div class="gr-head"><span class="gr-av" aria-hidden="true">${esc(v.name.trim().charAt(0).toUpperCase())}</span>
      <div><strong>${esc(v.name)}</strong><small>Google review</small></div><span class="gr-g">${GLOGO}</span></div>
      <div class="gr-stars" aria-label="${v.rating} out of 5 stars">${stars(v.rating)}</div><div class="gr-text">${paras}</div></article>`;
  }
  function setHeading(d) {
    const r = document.getElementById("gr-rating"), c = document.getElementById("gr-count");
    if (r) r.textContent = Number(d.rating).toFixed(1) + " out of 5";
    if (c) c.textContent = d.count;
  }
  fetch("data/google-reviews.json", { headers: { Accept: "application/json" } })
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .catch(() => FALLBACK)
    .then((d) => {
      setHeading(d);
      const all = mount.getAttribute("data-all") === "1";
      let list = d.reviews || [];
      if (!all) {
        const feat = (mount.getAttribute("data-featured") || "").split("|").filter(Boolean);
        list = feat.map((n) => list.find((v) => v.name === n)).filter(Boolean);
      }
      mount.innerHTML = summary(d, !all) + (list.length ? `<div class="gr-grid">${list.map(card).join("")}</div>` : "") +
        `<p class="gr-attr">Reviews from Google Maps, shown as published${all ? ` — ${d.withComments || list.length} of our ${d.count} reviews include a written comment` : ""}.</p>`;
    });
})();
