/* Google reviews block (homepage). Pulls the live rating, count and latest reviews from
   /api/reviews (Netlify function -> Google Places API). If that isn't available the block still shows
   the rating summary and a link to Google, so it is never empty. */
(function () {
  const mount = document.getElementById("gReviews");
  if (!mount) return;
  const FALLBACK = { rating: 5.0, count: 64, plus: true };
  const GMAPS = mount.getAttribute("data-gmaps") || "https://www.google.com/maps";
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const stars = (n) => "★★★★★".slice(0, Math.round(n)) + "☆☆☆☆☆".slice(0, 5 - Math.round(n));
  const GLOGO = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#4285F4" d="M23 12.27c0-.8-.07-1.56-.2-2.3H12v4.35h6.17a5.27 5.27 0 0 1-2.29 3.46v2.87h3.7c2.17-2 3.42-4.94 3.42-8.38z"/><path fill="#34A853" d="M12 23c3.1 0 5.7-1.03 7.58-2.8l-3.7-2.87c-1.03.69-2.35 1.1-3.88 1.1-2.98 0-5.5-2.01-6.4-4.72H1.78v2.96A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.6 13.71a6.6 6.6 0 0 1 0-4.2V6.55H1.78a11 11 0 0 0 0 9.9l3.82-2.74z"/><path fill="#EA4335" d="M12 5.58c1.69 0 3.2.58 4.39 1.72l3.29-3.29C17.7 2.15 15.1 1 12 1A11 11 0 0 0 1.78 6.55L5.6 9.5C6.5 6.8 9.02 5.58 12 5.58z"/></svg>';

  function summary(rating, count, plus, url) {
    return `<div class="gr-summary"><span class="gr-g">${GLOGO} Google</span>
      <span class="gr-score">${Number(rating).toFixed(1)}</span><span class="gr-stars" aria-label="${Number(rating).toFixed(1)} out of 5 stars">${stars(rating)}</span>
      <span class="gr-based">Based on ${count}${plus ? "+" : ""} Google reviews</span>
      <a class="btn btn-outline btn-sm" href="${esc(url || GMAPS)}" target="_blank" rel="noopener">Read all reviews on Google ↗</a></div>`;
  }
  function card(v) {
    let t = v.text || ""; if (t.length > 240) t = t.slice(0, t.lastIndexOf(" ", 237)) + "…";
    const who = v.authorUrl ? `<a href="${esc(v.authorUrl)}" target="_blank" rel="noopener">${esc(v.author)}</a>` : esc(v.author);
    return `<article class="gr-card"><div class="gr-head">${v.photo ? `<img src="${esc(v.photo)}" alt="" width="40" height="40" loading="lazy" referrerpolicy="no-referrer">` : ""}
      <div><strong>${who}</strong><small>${esc(v.when)}</small></div><span class="gr-g">${GLOGO}</span></div>
      <div class="gr-stars" aria-label="${v.rating} out of 5 stars">${stars(v.rating)}</div>${t ? `<p>${esc(t)}</p>` : ""}</article>`;
  }
  function setHeading(rating, count, plus) {
    const r = document.getElementById("gr-rating"), c = document.getElementById("gr-count");
    if (r) r.textContent = Number(rating).toFixed(1) + " out of 5";
    if (c) c.textContent = count + (plus ? "+" : "");
  }
  function show(d, live) {
    const rating = d.rating || FALLBACK.rating, count = d.count || FALLBACK.count, plus = live ? false : FALLBACK.plus;
    setHeading(rating, count, plus);
    mount.innerHTML = summary(rating, count, plus, d.url) +
      (d.reviews && d.reviews.length ? `<div class="gr-grid">${d.reviews.map(card).join("")}</div><p class="gr-attr">Reviews from Google Maps, shown as published.</p>` : "");
  }
  show(FALLBACK, false);
  fetch("/api/reviews", { headers: { Accept: "application/json" } })
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((d) => { if (d && d.rating) show(d, true); })
    .catch(() => {});
})();
