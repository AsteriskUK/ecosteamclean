/* =========================================================
   Ecologics Cleaning — blog engine
   Seed posts (hard-coded) merged with admin posts (localStorage).
   Renders listing (blog.html) and single post (post.html?id=slug).
   ========================================================= */

const POSTS_KEY = "esc_posts";

/* ---------- Seed articles ---------- */
const SEED_POSTS = [
  {
    slug: "how-often-should-you-clean-your-carpets",
    image: "assets/photos/hero.jpg",
    title: "How Often Should You Really Clean Your Carpets?",
    category: "Carpet Care",
    author: "The Ecologics Team",
    date: "2026-07-28",
    read: 6,
    excerpt: "Vacuuming isn't enough. Here's the professional guide to how often carpets need a deep steam clean — by room, household and lifestyle.",
    body: `
<p>Your carpet is the single largest air filter in your home. It traps dust, pollen, pet dander and everyday grime — and just like any filter, it eventually clogs. Vacuuming handles the surface, but it can't reach the dirt bonded deep in the fibres. That's where professional hot-water extraction steam cleaning comes in.</p>
<h2>The general rule</h2>
<p>Most carpet manufacturers recommend a professional deep clean <strong>every 12 months</strong> to keep warranties valid. But the right frequency depends on how your home is actually used.</p>
<ul class="bul">
  <li><strong>Every 6 months</strong> — homes with pets, young children, or allergy sufferers.</li>
  <li><strong>Every 12 months</strong> — average family homes with normal foot traffic.</li>
  <li><strong>Every 3–6 months</strong> — high-traffic hallways, stairs and commercial spaces.</li>
</ul>
<h2>Signs your carpet is overdue</h2>
<p>Don't just watch the calendar — watch your carpet. Book a clean sooner if you notice:</p>
<ul class="bul">
  <li>Traffic lanes that stay grey no matter how much you vacuum.</li>
  <li>A musty or lingering smell, especially in humid weather.</li>
  <li>Increased sneezing, coughing or allergy flare-ups indoors.</li>
  <li>Stains that have started to reappear (wicking) after spot cleaning.</li>
</ul>
<blockquote>A regularly steam-cleaned carpet can last 5–10 years longer than a neglected one — protecting one of the biggest soft furnishings you own.</blockquote>
<h2>Why steam beats DIY</h2>
<p>Rental machines simply can't match the water temperature and suction of professional truck-mounted or industrial equipment. Too much water and too little extraction is the number one cause of mould, shrinkage and that "it smelled worse afterwards" problem. Professionals get the fibres clean <em>and</em> dry.</p>
<p>Ready to refresh your carpets? <a class="inline" href="../contact.html">Get a free no-obligation quote</a> and we'll recommend the right schedule for your home.</p>`
  },
  {
    slug: "remove-red-wine-stain-from-carpet",
    image: "assets/photos/svc-stain-removal.jpg",
    title: "How to Remove a Red Wine Stain From Carpet (Before It Sets)",
    category: "Stain Removal",
    author: "The Ecologics Team",
    date: "2026-07-15",
    read: 5,
    excerpt: "Spilled red wine? Don't panic — and don't scrub. Follow this step-by-step emergency method to stop the stain setting for good.",
    body: `
<p>Red wine on a light carpet is every host's nightmare — but acting fast makes all the difference. The golden rule: <strong>blot, never rub.</strong> Rubbing pushes pigment deeper into the fibres and spreads the stain.</p>
<h2>What to do in the first 5 minutes</h2>
<ul class="bul">
  <li><strong>Blot</strong> up as much wine as possible with a clean white cloth or paper towel, working from the outside in.</li>
  <li><strong>Dilute</strong> with a little cold water — never hot, which can set the tannins.</li>
  <li>Blot again. Repeat until no more colour transfers to the cloth.</li>
</ul>
<h2>A safe home solution</h2>
<p>Mix one tablespoon of washing-up liquid and one tablespoon of white vinegar into two cups of warm water. Apply to the stain with a cloth, blot gently, then rinse with cold water and blot dry. Test on a hidden area first.</p>
<blockquote>Skip the salt-and-white-wine myths. They can bleach or damage certain carpet dyes and often make professional removal harder.</blockquote>
<h2>When to call the professionals</h2>
<p>Older, dried or repeat stains bond chemically to the fibre and need targeted treatment. Our technicians use eco-friendly stain-specific solutions and hot-water extraction that lifts pigment without harsh bleach. If your DIY attempt has left a shadow, <a class="inline" href="../services/stain-removal.html">our stain removal service</a> can usually rescue it.</p>`
  },
  {
    slug: "eco-friendly-cleaning-why-it-matters",
    image: "assets/photos/blog-eco.jpg",
    title: "Eco-Friendly Steam Cleaning: Why It's Better for Your Home",
    category: "Eco Cleaning",
    author: "The Ecologics Team",
    date: "2026-06-30",
    read: 7,
    excerpt: "Non-toxic doesn't mean less powerful. Here's how green steam cleaning protects your family, pets and the planet — without cutting corners.",
    body: `
<p>Conventional carpet cleaning often relies on harsh detergents that leave chemical residue behind — the very residue that then attracts dirt faster and can irritate sensitive skin and lungs. Eco-friendly steam cleaning takes a different route.</p>
<h2>How it works</h2>
<p>Superheated water does the heavy lifting. High-temperature steam breaks down grease, kills dust mites and sanitises fibres <strong>without</strong> a cocktail of synthetic chemicals. Where a cleaning agent is needed, we use plant-based, biodegradable solutions certified safe for homes.</p>
<h2>The benefits stack up</h2>
<ul class="bul">
  <li><strong>Safer for your family</strong> — no toxic fumes or residue where children and pets play.</li>
  <li><strong>Better indoor air</strong> — steam removes allergens rather than masking them with fragrance.</li>
  <li><strong>Kinder to fabrics</strong> — gentler on natural fibres like wool and silk.</li>
  <li><strong>Lower environmental impact</strong> — less water waste and no harmful runoff.</li>
</ul>
<blockquote>Green cleaning isn't a compromise. Steam reaches temperatures that sanitise on contact — often more hygienic than chemical-heavy alternatives.</blockquote>
<h2>Our promise</h2>
<p>Every Ecologics clean uses non-toxic, pet- and child-safe methods as standard. <a class="inline" href="../about.html">Learn more about our approach</a> or <a class="inline" href="../contact.html">book a green clean today</a>.</p>`
  },
  {
    slug: "end-of-tenancy-cleaning-checklist",
    image: "assets/photos/blog-tenancy.jpg",
    title: "The Complete End of Tenancy Cleaning Checklist (Get Your Deposit Back)",
    category: "End of Tenancy",
    author: "The Ecologics Team",
    date: "2026-06-18",
    read: 8,
    excerpt: "Moving out? Deposit disputes are almost always about cleaning. Use this landlord-approved checklist to leave nothing to chance.",
    body: `
<p>According to deposit protection schemes, cleaning is the <strong>number one cause</strong> of end-of-tenancy disputes. The good news: it's entirely avoidable with a thorough, room-by-room approach.</p>
<h2>Kitchen</h2>
<ul class="bul">
  <li>Degrease the oven, hob, extractor and splashbacks.</li>
  <li>Clean inside and behind the fridge, freezer and appliances.</li>
  <li>Descale the sink and taps; wipe all cupboards inside and out.</li>
</ul>
<h2>Bathrooms</h2>
<ul class="bul">
  <li>Remove limescale from tiles, glass, taps and shower heads.</li>
  <li>Sanitise the toilet, bath and basin; polish mirrors.</li>
  <li>Clear and wipe extractor fans and skirting.</li>
</ul>
<h2>Living areas & bedrooms</h2>
<ul class="bul">
  <li>Steam clean carpets and rugs — landlords notice traffic lanes immediately.</li>
  <li>Wipe skirting boards, doors, switches and radiators.</li>
  <li>Clean windows, sills and interior glass.</li>
</ul>
<blockquote>Carpets are the detail most tenants underestimate. A professional steam-clean receipt is powerful evidence in any deposit dispute.</blockquote>
<h2>Save yourself the stress</h2>
<p>Our <a class="inline" href="../services/end-of-tenancy.html">end of tenancy service</a> follows a landlord-approved checklist and includes professional carpet cleaning — so you can hand back the keys with confidence.</p>`
  },
  {
    slug: "keep-upholstery-looking-new",
    image: "assets/photos/svc-upholstery-cleaning.jpg",
    title: "5 Ways to Keep Your Upholstery Looking New for Longer",
    category: "Upholstery",
    author: "The Ecologics Team",
    date: "2026-06-02",
    read: 5,
    excerpt: "A good sofa is an investment. These five simple habits keep the fabric fresh, the colours rich and the springs supported for years.",
    body: `
<p>Sofas and armchairs take a daily beating — body oils, spills, sunlight and pets all take their toll. A little maintenance goes a long way toward protecting your investment.</p>
<h2>1. Vacuum weekly</h2>
<p>Use the upholstery attachment to lift crumbs and dust before they grind into the weave. Don't forget under the cushions.</p>
<h2>2. Rotate and plump cushions</h2>
<p>Even wear keeps cushions from sagging on one side and helps the fabric age uniformly.</p>
<h2>3. Deal with spills immediately</h2>
<p>Blot — never rub — and avoid soaking the fabric. The faster you act, the less chance a stain has to set.</p>
<h2>4. Keep it out of direct sun</h2>
<p>UV light fades upholstery over time. Rearrange or use blinds to protect fabrics near windows.</p>
<h2>5. Book a professional clean yearly</h2>
<ul class="bul">
  <li>Removes deep-set oils and allergens a vacuum can't reach.</li>
  <li>Restores colour and texture.</li>
  <li>Extends the life of the fabric and padding.</li>
</ul>
<blockquote>Fabric-safe steam cleaning refreshes upholstery without over-wetting — the key to fast drying and no watermarks.</blockquote>
<p>Time to revive your sofa? Explore our <a class="inline" href="../services/upholstery-cleaning.html">upholstery cleaning service</a>.</p>`
  },
  {
    slug: "how-long-does-carpet-take-to-dry",
    image: "assets/photos/svc-rug-cleaning.jpg",
    title: "How Long Does Carpet Take to Dry After Steam Cleaning?",
    category: "Carpet Care",
    author: "The Ecologics Team",
    date: "2026-05-20",
    read: 4,
    excerpt: "One of the most common questions we get. Here's what affects drying time — and how the pros keep it fast.",
    body: `
<p>After a professional hot-water extraction clean, most carpets are dry within <strong>4 to 6 hours</strong>, and touch-dry much sooner. Several factors affect the exact time.</p>
<h2>What affects drying time</h2>
<ul class="bul">
  <li><strong>Carpet type</strong> — thick, plush and wool carpets hold more moisture than low-pile synthetics.</li>
  <li><strong>Ventilation</strong> — open windows and moving air dramatically speed things up.</li>
  <li><strong>Humidity and season</strong> — damp winter days extend drying; summer speeds it.</li>
  <li><strong>Equipment</strong> — powerful extraction removes most of the water on the spot.</li>
</ul>
<h2>How to speed it up</h2>
<ul class="bul">
  <li>Open windows or run fans to circulate air.</li>
  <li>Keep the heating on a low, steady setting.</li>
  <li>Avoid walking on the carpet until it's dry to prevent re-soiling.</li>
</ul>
<blockquote>Beware "no-dry-time" claims — they usually mean less water and less deep cleaning. Proper extraction cleans deeper and still dries in hours.</blockquote>
<p>Our technicians use high-powered extraction to minimise drying time. <a class="inline" href="../services/carpet-cleaning.html">See our carpet cleaning service</a> for details.</p>`
  },
];

/* ---------- Data helpers ---------- */
function getAdminPosts() {
  try { return JSON.parse(localStorage.getItem(POSTS_KEY) || "[]"); }
  catch (e) { return []; }
}
function getAllPosts() {
  const admin = getAdminPosts();
  const seedFiltered = SEED_POSTS.filter(sp => !admin.some(ap => ap.slug === sp.slug));
  return [...admin, ...seedFiltered].sort((a, b) => new Date(b.date) - new Date(a.date));
}
function getPostBySlug(slug) { return getAllPosts().find(p => p.slug === slug); }

function fmtDate(iso) {
  try { return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }
  catch (e) { return iso; }
}

const POST_ICONS = {
  "Carpet Care": "rug", "Stain Removal": "spray", "Eco Cleaning": "leaf",
  "End of Tenancy": "key", "Upholstery": "sofa", "Commercial": "building",
  "Deep Cleaning": "home", "Rug Cleaning": "sparkle",
};
function iconFor(cat) { return (window.ESC && window.ESC.ICON[POST_ICONS[cat] || "leaf"]) || ""; }

/* ---------- Render blog listing ---------- */
function renderBlogList(mountId, limit) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  let posts = getAllPosts();
  if (limit) posts = posts.slice(0, limit);
  const P = (window.ESC && window.ESC.P) || (x => x);
  mount.innerHTML = posts.map((p, i) => `
    <article class="post-card" data-reveal>
      <a href="${P('post.html')}?id=${encodeURIComponent(p.slug)}" class="post-thumb" aria-label="${p.title}">
        <span class="cat">${p.category}</span>
        ${p.image ? `<img class="photo" src="${P(p.image)}" alt="${p.title}" loading="lazy">` : iconFor(p.category)}
      </a>
      <div class="post-body">
        <div class="post-meta"><span>${fmtDate(p.date)}</span><span>${p.read || 5} min read</span></div>
        <h3><a href="${P('post.html')}?id=${encodeURIComponent(p.slug)}">${p.title}</a></h3>
        <p>${p.excerpt}</p>
        <a class="svc-link" href="${P('post.html')}?id=${encodeURIComponent(p.slug)}">Read article ${window.ESC.ICON.arrow}</a>
      </div>
    </article>`).join("");
  // re-init reveal for freshly added nodes
  if (window.__reveal) window.__reveal();
}

/* ---------- Render single post ---------- */
function renderSinglePost(mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const params = new URLSearchParams(location.search);
  const slug = params.get("id");
  const post = slug && getPostBySlug(slug);
  const P = (window.ESC && window.ESC.P) || (x => x);

  if (!post) {
    mount.innerHTML = `<div class="wrap section center"><h1 class="h-lg">Article not found</h1>
      <p class="lead mt-2">That post may have moved. <a class="inline" href="${P('blog.html')}">Back to the blog</a>.</p></div>`;
    return;
  }
  document.title = `${post.title} — Ecologics Cleaning`;

  // related
  const related = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 3);
  const relHtml = related.map(p => `
    <article class="post-card" data-reveal>
      <a href="${P('post.html')}?id=${encodeURIComponent(p.slug)}" class="post-thumb"><span class="cat">${p.category}</span>${p.image ? `<img class="photo" src="${P(p.image)}" alt="${p.title}" loading="lazy">` : iconFor(p.category)}</a>
      <div class="post-body">
        <div class="post-meta"><span>${fmtDate(p.date)}</span><span>${p.read||5} min read</span></div>
        <h3><a href="${P('post.html')}?id=${encodeURIComponent(p.slug)}">${p.title}</a></h3>
      </div>
    </article>`).join("");

  mount.innerHTML = `
    <div class="page-hero">
      <div class="wrap">
        <div class="crumbs"><a href="${P('index.html')}">Home</a>${window.ESC.ICON.arrow}<a href="${P('blog.html')}">Blog</a>${window.ESC.ICON.arrow}<span>${post.category}</span></div>
        <span class="pill" style="background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.2);color:#d9f5e6">${post.category}</span>
        <h1 style="margin-top:1rem;max-width:22ch">${post.title}</h1>
        <p style="margin-top:1rem">By ${post.author || 'The Ecologics Team'} · ${fmtDate(post.date)} · ${post.read||5} min read</p>
      </div>
    </div>
    <div class="section">
      <div class="wrap">
        <div class="article">
          ${post.image ? `<img class="photo-wide" src="${P(post.image)}" alt="${post.title}">` : ''}
          <p class="lead">${post.excerpt}</p>
          ${post.body}
          <div class="cta-band" style="margin-top:2.5rem">
            <div class="cta-flex">
              <div><h2 class="h-md" style="color:#fff">Book your eco steam clean</h2><p>Free quotes · fully insured · non-toxic & pet-safe.</p></div>
              <a class="btn btn-white btn-lg" href="${P('contact.html')}">Get a Free Quote ${window.ESC.ICON.arrow}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section bg-soft">
      <div class="wrap">
        <div class="section-head"><h2 class="h-lg">Keep reading</h2></div>
        <div class="blog-grid">${relHtml}</div>
      </div>
    </div>`;
  if (window.__reveal) window.__reveal();
}

window.ESC_BLOG = { SEED_POSTS, getAllPosts, getPostBySlug, getAdminPosts, POSTS_KEY, renderBlogList, renderSinglePost, fmtDate };
