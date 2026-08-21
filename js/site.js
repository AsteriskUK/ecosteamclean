/* =========================================================
   Ecologics Cleaning — shared site logic
   Injects header + footer, handles nav, forms, animations.
   Self-contained. Placeholders marked CONFIG below.
   ========================================================= */

const CONFIG = {
  brand: "Ecologics Cleaning",
  domain: "ecologicscleaning.co.uk",
  phoneDisplay: "0800 274 0077",
  phoneRaw: "08002740077",
  email: "info@ecologicscleaning.co.uk",
  areaShort: "Bromsgrove · Birmingham",
  areaLong: "Bromsgrove, Birmingham & the West Midlands",
  hours: "Mon–Sun · 8am – 8pm",
  whatsapp: "",   // set a mobile number (e.g. 447XXXXXXXXX) to show the WhatsApp button
  // Registered address (used in footer + schema)
  addr1: "Unit 21 Buntsford Drive",
  city: "Bromsgrove",
  region: "Worcestershire",
  postcode: "B60 3AJ",
  country: "GB",
};

/* ---------- Path helper (works from root and /services/) ---------- */
const ROOT = (function () {
  return document.body.getAttribute("data-root") || "";
})();
function P(path) { return ROOT + path; }

/* ---------- Icon set (inline SVG) ---------- */
const ICON = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/></svg>',
  spray: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"/><path d="M9 11V7a2 2 0 0 1 2-2h1V3"/><path d="M12 3h3M19 5h.01M21 8h.01M19 11h.01"/></svg>',
  sofa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="M2 11a2 2 0 0 1 2 2v3h16v-3a2 2 0 1 1 4 0v0M2 11a2 2 0 0 1 4 0v2"/><path d="M4 18v2M20 18v2"/></svg>',
  rug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M3 16h18M7 4v16M17 4v16"/></svg>',
  curtain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M4 3v18c3.5-1 5-3.5 5-6.5C11.5 15 13 12 13 9s-2-5-5-6"/><path d="M20 3v18c-3.5-1-5-3.5-5-6.5C12.5 15 11 12 11 9s2-5 5-6"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v11M3 12h18v6M21 18v-6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3"/><path d="M8 12V9"/></svg>',
  water: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5S5 10 5 14a7 7 0 0 0 14 0c0-4-7-11.5-7-11.5z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.5 12.5 8-8M17 7l2 2M15 9l1.5 1.5"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/></svg>',
  clock2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/><path d="M21 10h-5a2 2 0 0 0 0 4h5"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2zm5.4 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.5-4-4.7-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2 1.3 2.3 1.4.2.1.4 0 .5-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.3.1.5.2.5.4.1.2.1.8-.1 1.4z"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1c.3-1.2.3-3.8.3-3.8s0-2.6-.3-3.8zM10 15V9l5 3-5 3z"/></svg>',
};

/* ---------- Logo mark ---------- */
const LOGO = `<svg class="logo-mark" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect width="48" height="48" rx="13" fill="url(#lg)"/>
  <g class="lm-steam" stroke="#fff" stroke-width="1.6" stroke-linecap="round">
    <path class="s1" d="M21 12.5c-1.3-1.5-1.3-2.9 0-4.4"/>
    <path class="s2" d="M27 12.5c1.3-1.5 1.3-2.9 0-4.4"/>
  </g>
  <path class="lm-drop" d="M24 13c-1.1 3.2-6.2 7.4-6.2 12a6.2 6.2 0 0 0 12.4 0C30.2 20.4 25.1 16.2 24 13z" fill="#fff"/>
  <path d="M24 35c4.3 0 6.7-2.3 7.2-5M24 35c-4.3 0-6.7-2.3-7.2-5" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".6"/>
  <defs><linearGradient id="lg" x1="0" y1="0" x2="48" y2="48"><stop stop-color="#16a36b"/><stop offset="1" stop-color="#2fd0c4"/></linearGradient></defs>
</svg>`;

/* ---------- Service list (single source of truth) ---------- */
const SERVICES = [
  { slug: "carpet-cleaning", name: "Carpet Cleaning", icon: "rug", tag: "Most popular", blurb: "Hot-water extraction steam cleaning that lifts deep dirt, allergens & traffic lanes." },
  { slug: "upholstery-cleaning", name: "Upholstery Cleaning", icon: "sofa", tag: "", blurb: "Sofas, armchairs & dining chairs refreshed with fabric-safe steam and rapid drying." },
  { slug: "rug-cleaning", name: "Rug Cleaning", icon: "sparkle", tag: "", blurb: "Wool, silk & synthetic rugs gently restored — colours revived, fibres protected." },
  { slug: "curtain-mattress-cleaning", name: "Curtain & Mattress Cleaning", icon: "bed", tag: "", blurb: "On-site steam cleaning for curtains and mattresses — removes dust mites, allergens & odours." },
  { slug: "deep-cleaning", name: "Deep Cleaning", icon: "home", tag: "Full house", blurb: "Full-house deep cleans covering kitchen, bathroom, washroom and every room in between." },
  { slug: "stain-removal", name: "Stain & Odour Removal", icon: "spray", tag: "", blurb: "Wine, pet, coffee & grease stains tackled with targeted, eco-friendly treatments." },
  { slug: "end-of-tenancy", name: "End of Tenancy Cleaning", icon: "key", tag: "Deposit-back", blurb: "Landlord-approved deep cleans that help you get your full deposit returned." },
  { slug: "commercial-cleaning", name: "Commercial Cleaning", icon: "building", tag: "", blurb: "Offices, hotels, gyms & retail kept spotless with flexible out-of-hours schedules." },
];

/* ---------- Areas served (location landing pages) ---------- */
const AREAS = [
  { slug: "bromsgrove", name: "Bromsgrove", file: "carpet-cleaning-bromsgrove.html" },
  { slug: "birmingham", name: "Birmingham", file: "carpet-cleaning-birmingham.html" },
];

/* ---------- Build header ---------- */
function buildHeader() {
  const active = document.body.getAttribute("data-page") || "";
  const svcDrop = SERVICES.map(s =>
    `<a href="${P('services/' + s.slug + '.html')}"><span class="di">${ICON[s.icon]}</span>${s.name}</a>`
  ).join("");
  const areaDrop = AREAS.map(a =>
    `<a href="${P('areas/' + a.file)}"><span class="di">${ICON.pin}</span>Cleaning in ${a.name}</a>`
  ).join("");

  return `
  <div class="topbar">
    <div class="wrap">
      <div class="topbar-left">
        <a href="tel:${CONFIG.phoneRaw}">${ICON.phone} ${CONFIG.phoneDisplay}</a>
        <a href="mailto:${CONFIG.email}">${ICON.mail} ${CONFIG.email}</a>
        <span style="display:inline-flex;align-items:center;gap:.4rem">${ICON.clock} ${CONFIG.hours}</span>
      </div>
      <div class="topbar-right">
        <span style="display:inline-flex;align-items:center;gap:.4rem">${ICON.pin} ${CONFIG.areaShort}</span>
        <a class="soc" href="#" aria-label="Facebook">${ICON.fb}</a>
        <a class="soc" href="#" aria-label="Instagram">${ICON.ig}</a>
      </div>
    </div>
  </div>
  <header class="site-header" id="siteHeader">
    <div class="wrap nav">
      <a class="brand" href="${P('index.html')}">
        ${LOGO}
        <span>${CONFIG.brand}<small>Eco Cleaning Services</small></span>
      </a>
      <nav aria-label="Primary">
        <ul class="nav-links">
          <li><a href="${P('index.html')}" class="${active==='home'?'active':''}">Home</a></li>
          <li class="has-drop">
            <a href="${P('services.html')}" class="${active==='services'?'active':''}">Services ${ICON.chev}</a>
            <div class="drop">${svcDrop}</div>
          </li>
          <li class="has-drop">
            <a href="${P('areas/' + AREAS[0].file)}" class="${active==='areas'?'active':''}">Areas ${ICON.chev}</a>
            <div class="drop">${areaDrop}</div>
          </li>
          <li><a href="${P('about.html')}" class="${active==='about'?'active':''}">About</a></li>
          <li><a href="${P('blog.html')}" class="${active==='blog'?'active':''}">Blog</a></li>
          <li><a href="${P('contact.html')}" class="${active==='contact'?'active':''}">Contact</a></li>
        </ul>
      </nav>
      <div class="nav-actions">
        <a class="btn btn-ghost" href="tel:${CONFIG.phoneRaw}">${ICON.phone} Call</a>
        <a class="btn btn-primary" href="${P('contact.html')}">Get a Free Quote</a>
        <button class="burger" id="burger" aria-label="Open menu"><span></span></button>
      </div>
    </div>
  </header>
  <div class="overlay" id="overlay"></div>
  <aside class="mobile-nav" id="mobileNav" aria-label="Mobile">
    <button class="m-close" id="mClose" aria-label="Close menu">${ICON.x}</button>
    <a class="m-link" href="${P('index.html')}">Home</a>
    <a class="m-link" href="${P('services.html')}">Services</a>
    <div class="m-sub">${SERVICES.map(s=>`<a href="${P('services/'+s.slug+'.html')}">${s.name}</a>`).join("")}</div>
    <a class="m-link" href="${P('areas/'+AREAS[0].file)}">Areas we cover</a>
    <div class="m-sub">${AREAS.map(a=>`<a href="${P('areas/'+a.file)}">Cleaning in ${a.name}</a>`).join("")}</div>
    <a class="m-link" href="${P('about.html')}">About</a>
    <a class="m-link" href="${P('blog.html')}">Blog</a>
    <a class="m-link" href="${P('contact.html')}">Contact</a>
    <a class="btn btn-primary btn-lg" style="margin-top:1.4rem" href="${P('contact.html')}">Get a Free Quote</a>
    <a class="btn btn-ghost" style="margin-top:.7rem" href="tel:${CONFIG.phoneRaw}">${ICON.phone} ${CONFIG.phoneDisplay}</a>
  </aside>`;
}

/* ---------- Build footer ---------- */
function buildFooter() {
  const y = new Date().getFullYear();
  const svcLinks = SERVICES.slice(0, 6).map(s => `<a href="${P('services/'+s.slug+'.html')}">${s.name}</a>`).join("");
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="${P('index.html')}">${LOGO}<span style="color:#fff">${CONFIG.brand}<small>Eco Cleaning Services</small></span></a>
          <p>Eco-friendly steam carpet, upholstery & deep cleaning across ${CONFIG.areaLong}. Non-toxic, family- and pet-safe, and fully insured.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook">${ICON.fb}</a>
            <a href="#" aria-label="Instagram">${ICON.ig}</a>
            <a href="#" aria-label="WhatsApp">${ICON.wa}</a>
            <a href="#" aria-label="YouTube">${ICON.yt}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          ${svcLinks}
        </div>
        <div class="footer-col">
          <h4>Areas we cover</h4>
          ${AREAS.map(a => `<a href="${P('areas/' + a.file)}">Cleaning in ${a.name}</a>`).join("")}
          <h4 style="margin-top:1.4rem">Company</h4>
          <a href="${P('about.html')}">About Us</a>
          <a href="${P('blog.html')}">Blog & Tips</a>
          <a href="${P('contact.html')}">Contact</a>
          <a href="${P('admin.html')}">Admin</a>
        </div>
        <div class="footer-col">
          <h4>Get in touch</h4>
          <ul class="footer-contact">
            <li>${ICON.phone}<a href="tel:${CONFIG.phoneRaw}">${CONFIG.phoneDisplay}</a></li>
            <li>${ICON.mail}<a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>
            <li>${ICON.pin}<span>${CONFIG.areaLong}</span></li>
            <li>${ICON.building}<span>${CONFIG.addr1}, ${CONFIG.city}, ${CONFIG.postcode}</span></li>
            <li>${ICON.clock}<span>${CONFIG.hours}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${y} ${CONFIG.brand}. All rights reserved.</span>
        <span style="display:flex;gap:1.2rem;flex-wrap:wrap">
          <a href="${P('privacy.html')}">Privacy Policy</a>
          <a href="${P('terms.html')}">Terms</a>
          <a href="#">Fully insured · DBS-checked team</a>
        </span>
      </div>
    </div>
    <div class="footer-watermark" aria-hidden="true">Ecologics</div>
  </footer>
  <div class="fab">
    ${CONFIG.whatsapp && !/[xX]/.test(CONFIG.whatsapp) ? `<a class="wa" href="https://wa.me/${CONFIG.whatsapp}" aria-label="WhatsApp" target="_blank" rel="noopener">${ICON.wa}</a>` : ""}
    <a class="call" href="tel:${CONFIG.phoneRaw}" aria-label="Call us">${ICON.phone}</a>
  </div>`;
}

/* ---------- Nav behaviour ---------- */
function initNav() {
  const burger = document.getElementById("burger");
  const mClose = document.getElementById("mClose");
  const overlay = document.getElementById("overlay");
  const open = () => document.body.classList.add("nav-open");
  const close = () => document.body.classList.remove("nav-open");
  burger && burger.addEventListener("click", open);
  mClose && mClose.addEventListener("click", close);
  overlay && overlay.addEventListener("click", close);
  document.querySelectorAll(".mobile-nav a").forEach(a => a.addEventListener("click", close));

  const header = document.getElementById("siteHeader");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Scroll reveal ---------- */
let _revealIO;
function initReveal() {
  if (!("IntersectionObserver" in window)) { document.querySelectorAll("[data-reveal]").forEach(e => e.classList.add("in")); return; }
  _revealIO = _revealIO || new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) { setTimeout(() => e.target.classList.add("in"), (i % 4) * 80); _revealIO.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll("[data-reveal]:not(.in)").forEach(e => _revealIO.observe(e));
}
window.__reveal = initReveal;

/* ---------- Animated counters ---------- */
function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = parseFloat(el.getAttribute("data-count"));
      const suffix = el.getAttribute("data-suffix") || "";
      let cur = 0; const step = target / 45;
      const tick = () => { cur += step; if (cur >= target) { el.textContent = target.toLocaleString() + suffix; } else { el.textContent = Math.floor(cur).toLocaleString() + suffix; requestAnimationFrame(tick); } };
      tick(); io.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
}

/* ---------- Quote / contact form: mailto + localStorage ---------- */
const LEADS_KEY = "esc_leads";
function saveLead(lead) {
  try {
    const leads = JSON.parse(localStorage.getItem(LEADS_KEY) || "[]");
    leads.unshift(lead);
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  } catch (e) { /* storage unavailable */ }
}
function initForms() {
  document.querySelectorAll("form[data-quote]").forEach(form => {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());
      const lead = {
        id: "L" + Date.now(),
        date: new Date().toISOString(),
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        service: data.service || "General enquiry",
        postcode: data.postcode || "",
        message: data.message || "",
        status: "new",
      };
      // keep a local copy so the admin panel still shows submissions
      saveLead(lead);

      const showOk = () => {
        const ok = form.querySelector(".form-ok");
        if (ok) { ok.classList.add("show"); ok.scrollIntoView({ behavior: "smooth", block: "center" }); }
        form.reset();
      };
      const mailtoFallback = () => {
        const subject = `New quote request — ${lead.service}`;
        const body =
          `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\n` +
          `Service: ${lead.service}\nPostcode: ${lead.postcode}\n\nMessage:\n${lead.message}\n\n— Sent from ${CONFIG.domain}`;
        window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      };

      // Submit to Netlify Forms (AJAX). Falls back to opening the user's
      // email client if the POST isn't accepted (e.g. previewing off-Netlify).
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(fd).toString(),
      })
        .then(res => { showOk(); if (!res.ok) mailtoFallback(); })
        .catch(() => { showOk(); mailtoFallback(); });
    });
  });
}

/* ---------- Cursor spotlight (dark sections) ---------- */
function initSpotlight() {
  if (window.matchMedia("(hover: none)").matches) return;
  const dot = document.createElement("div");
  dot.className = "spotlight";
  document.body.appendChild(dot);
  const darkSel = ".hero, .page-hero, .cta-band, .bg-forest, .site-footer, .ba-wrap";
  let raf;
  window.addEventListener("pointermove", (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const over = e.target.closest && e.target.closest(darkSel);
      dot.style.opacity = over ? "1" : "0";
    });
  }, { passive: true });
}

/* ---------- Magnetic buttons ---------- */
function initMagnetic() {
  if (window.matchMedia("(hover: none)").matches) return;
  document.querySelectorAll(".magnetic").forEach(el => {
    const strength = 0.35;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

/* ---------- Before / After slider ---------- */
function initBeforeAfter() {
  document.querySelectorAll(".ba-wrap").forEach(wrap => {
    const set = (clientX) => {
      const r = wrap.getBoundingClientRect();
      let pct = ((clientX - r.left) / r.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      wrap.style.setProperty("--ba", pct + "%");
    };
    let dragging = false;
    const start = (e) => { dragging = true; set((e.touches ? e.touches[0] : e).clientX); };
    const move = (e) => { if (dragging) set((e.touches ? e.touches[0] : e).clientX); };
    const end = () => { dragging = false; };
    wrap.addEventListener("pointerdown", start);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerup", end);
    // click anywhere to jump
    wrap.addEventListener("click", (e) => set(e.clientX));
  });
}

/* ---------- Scroll progress + parallax ---------- */
function initScrollFx() {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.innerHTML = "<span></span>";
  document.body.appendChild(bar);
  const fill = bar.firstElementChild;
  const par = document.querySelectorAll("[data-parallax]");
  let ticking = false;
  const update = () => {
    ticking = false;
    const st = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.transform = `scaleX(${h > 0 ? Math.min(1, st / h) : 0})`;
    if (window.innerWidth > 1040) {
      par.forEach(el => {
        const sp = parseFloat(el.getAttribute("data-parallax")) || 0;
        el.style.transform = `translate3d(0, ${st * sp}px, 0)`;
      });
    }
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header-mount");
  const f = document.getElementById("site-footer-mount");
  if (h) h.innerHTML = buildHeader();
  if (f) f.innerHTML = buildFooter();
  initNav();
  initReveal();
  initCounters();
  initForms();
  initSpotlight();
  initMagnetic();
  initBeforeAfter();
  initScrollFx();
});

/* re-init interactions after dynamic content injection */
window.__esInteract = () => { initMagnetic(); initBeforeAfter(); };

/* expose for other scripts */
window.ESC = { CONFIG, ICON, SERVICES, AREAS, P, LOGO };
