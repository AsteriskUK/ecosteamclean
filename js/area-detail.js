/* =========================================================
   EcoSteam Clean — location (area) landing page renderer
   Each areas/<file>.html sets data-slug; this fills it in.
   Unique copy per town for local SEO (no thin duplicates).
   ========================================================= */

const AREA_DETAILS = {
  derby: {
    name: "Derby", county: "Derbyshire", pcArea: "DE", central: "DE1",
    districts: [
      ["DE1", "City centre"], ["DE3", "Mickleover"],
      ["DE21", "Chaddesden · Spondon · Oakwood"], ["DE22", "Allestree · Mackworth · Darley Abbey"],
      ["DE23", "Normanton · Littleover · Sunny Hill"], ["DE24", "Alvaston · Allenton · Sinfin"],
    ],
    intro: "Eco-friendly carpet, upholstery and steam cleaning across Derby — from the DE1 city centre out to Chaddesden, Allestree, Mickleover, Littleover and Alvaston. Non-toxic, pet- and child-safe, and fully insured, with carpets typically dry in just a few hours.",
    faqs: [
      { q: "Which parts of Derby do you cover?", a: "All of the DE postcodes across the city — DE1, DE3 and DE21–DE24 — plus the surrounding Derbyshire towns. If you're not sure, just pop your postcode in with your quote request and we'll confirm." },
      { q: "Do you offer free quotes in Derby?", a: "Yes — free, no-obligation quotes and an optional free on-site demonstration anywhere in Derby, with no cancellation fees." },
      { q: "How soon can you visit?", a: "We regularly have same-week availability across Derby, including evenings and weekends to fit around your schedule." },
    ],
  },
  lincoln: {
    name: "Lincoln", county: "Lincolnshire", pcArea: "LN", central: "LN1",
    districts: [
      ["LN1", "City centre · Uphill · Cathedral quarter"], ["LN2", "Ermine · Nettleham Road"],
      ["LN3", "Cherry Willingham · Fiskerton"], ["LN4", "Branston · Washingborough · Heighington"],
      ["LN5", "Bracebridge · Waddington"], ["LN6", "Birchwood · North Hykeham · Skellingthorpe"],
    ],
    intro: "Eco-friendly carpet, upholstery and steam cleaning across Lincoln — from the LN1 Cathedral quarter and Uphill down to Bracebridge, Birchwood, North Hykeham and Washingborough. Non-toxic, pet- and child-safe, fully insured, and gentle on delicate fibres.",
    faqs: [
      { q: "Which parts of Lincoln do you cover?", a: "The full LN1–LN6 area across the city, plus the wider Lincolnshire villages nearby. Send your postcode with your enquiry and we'll confirm straight away." },
      { q: "Are your products safe for older or listed homes?", a: "Yes. We use gentle, non-toxic steam methods that suit period properties and delicate natural fibres common around Lincoln's older streets." },
      { q: "Do you offer end-of-tenancy cleans in Lincoln?", a: "We do — landlord-approved end-of-tenancy cleans including professional carpet cleaning, ideal for the city's large student and rental market." },
    ],
  },
  telford: {
    name: "Telford", county: "Shropshire", pcArea: "TF", central: "TF3",
    districts: [
      ["TF1", "Wellington · Leegomery · Donnington"], ["TF2", "Oakengates · Priorslee · St Georges"],
      ["TF3", "Town centre · Stirchley · Brookside"], ["TF4", "Dawley · Lawley · Horsehill"],
      ["TF6", "Rural — Bratton · Admaston"], ["TF7", "Madeley · Sutton Hill · Ironbridge"],
    ],
    intro: "Eco-friendly carpet, upholstery and steam cleaning across Telford — from the TF3 town centre to Wellington, Oakengates, Dawley, Madeley and Ironbridge. Non-toxic, pet- and child-safe, fully insured, and powered by heat rather than harsh chemicals.",
    faqs: [
      { q: "Which parts of Telford do you cover?", a: "All of the TF postcodes across the town — TF1–TF7 — and out into the surrounding Shropshire areas. Add your postcode to your quote request and we'll confirm." },
      { q: "Can you work around my job?", a: "Absolutely — we offer evening and weekend slots across Telford, plus flexible out-of-hours cleaning for local businesses." },
      { q: "Do you clean rugs and stairs too?", a: "Yes — stairs, landings, area rugs, curtains and mattresses are all part of what we do throughout Telford, not just room carpets." },
    ],
  },
};

function renderAreaDetail() {
  const slug = document.body.getAttribute("data-slug");
  const d = AREA_DETAILS[slug];
  const mount = document.getElementById("area-mount");
  if (!d || !mount) return;
  const I = window.ESC.ICON, C = window.ESC.CONFIG;

  const services = window.ESC.SERVICES;

  mount.innerHTML = `
  <div class="page-hero">
    <div class="wrap">
      <div class="crumbs"><a href="../index.html">Home</a>${I.arrow}<a href="../areas/${window.ESC.AREAS[0].file}">Areas</a>${I.arrow}<span>${d.name}</span></div>
      <span class="kicker on-dark">${I.pin} ${d.county} · ${d.pcArea} postcodes</span>
      <h1 class="mt-2">Carpet &amp; Upholstery Cleaning in <span class="accent">${d.name}</span></h1>
      <p class="lead mt-2" style="color:#b8d4c6">${d.intro}</p>
      <div class="hero-actions" style="margin-top:1.6rem">
        <a class="btn btn-primary btn-lg magnetic" href="../contact.html?service=${encodeURIComponent('Cleaning in ' + d.name)}">Get a free quote</a>
        <a class="btn btn-outline btn-lg" href="tel:${C.phoneRaw}">${I.phone} Call us</a>
      </div>
    </div>
  </div>

  <section class="section">
    <div class="wrap">
      <div class="section-head" data-reveal>
        <span class="kicker">Areas covered</span>
        <h2 class="h-lg mt-2">Every ${d.pcArea} postcode across ${d.name}</h2>
        <p class="lead mt-2">Wherever you are in ${d.name}, our insured technicians bring professional steam equipment and eco-friendly, non-toxic solutions to your door.</p>
      </div>
      <div class="cards">
        ${d.districts.map(([code, area]) => `
          <div class="svc-card" data-reveal>
            <div class="svc-ic">${I.pin}</div>
            <h3>${code}</h3>
            <p>${area}</p>
          </div>`).join("")}
      </div>
    </div>
  </section>

  <section class="section bg-soft">
    <div class="wrap">
      <div class="section-head" data-reveal>
        <span class="kicker">Our services in ${d.name}</span>
        <h2 class="h-lg mt-2">What we clean in ${d.name}</h2>
      </div>
      <div class="cards">
        ${services.map(s => `
          <a class="svc-card" data-reveal href="../services/${s.slug}.html">
            <div class="svc-ic">${I[s.icon]}</div>
            <h3>${s.name}</h3>
            <p>${s.blurb}</p>
            <span class="svc-link">Learn more ${I.arrow}</span>
          </a>`).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="cta-band" data-reveal>
        <span class="blob b1"></span><span class="blob b2"></span>
        <div class="cta-flex">
          <div><h2 class="h-lg">Book your ${d.name} clean</h2><p class="lead mt-2">Free quotes &amp; free on-site demos across ${d.name} (${d.pcArea}). Fully insured · non-toxic · pet-safe.</p></div>
          <a class="btn btn-primary btn-lg magnetic" href="../contact.html?service=${encodeURIComponent('Cleaning in ' + d.name)}">Get a free quote ${I.arrow}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-soft">
    <div class="wrap">
      <div class="section-head" data-reveal><span class="kicker">Good to know</span><h2 class="h-lg mt-2">${d.name} cleaning — FAQs</h2></div>
      <div class="faq wrap-tight">
        ${d.faqs.map(f => `
          <details class="acc" data-reveal>
            <summary>${f.q}<span class="pm">${I.plus}</span></summary>
            <div class="acc-body">${f.a}</div>
          </details>`).join("")}
      </div>
    </div>
  </section>`;

  window.__reveal && window.__reveal();
  window.__esInteract && window.__esInteract();
}
document.addEventListener("DOMContentLoaded", () => setTimeout(renderAreaDetail, 0));
