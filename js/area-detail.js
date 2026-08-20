/* =========================================================
   EcoSteam Clean — location (area) landing page renderer
   Each areas/<file>.html sets data-slug; this fills it in.
   Unique copy per town for local SEO (no thin duplicates).
   ========================================================= */

const AREA_DETAILS = {
  bromsgrove: {
    name: "Bromsgrove", county: "Worcestershire", pcArea: "B", central: "B60",
    districts: [
      ["B60", "Town centre · Aston Fields · Stoke Prior"], ["B61", "Catshill · Lickey End · Sidemoor"],
      ["B45", "Rubery · Rednal · Lickey"], ["B48", "Alvechurch · Hopwood"],
      ["B62 · B63", "Halesowen (nearby)"], ["B96 · B97", "Redditch (nearby)"],
    ],
    intro: "Eco-friendly carpet, upholstery and steam cleaning right here in Bromsgrove — our home town. From the B60 town centre and Aston Fields out to Catshill, Lickey End, Rubery and Alvechurch. Non-toxic, pet- and child-safe, fully insured, and carpets typically dry in just a few hours.",
    faqs: [
      { q: "Which parts of Bromsgrove do you cover?", a: "All of the B60 and B61 postcodes across the town, plus nearby B45 Rubery, B48 Alvechurch and out towards Redditch and Droitwich. We're a local Bromsgrove business, so we're often just minutes away." },
      { q: "Do you offer free quotes in Bromsgrove?", a: "Yes — free, no-obligation quotes and an optional free on-site demonstration anywhere in Bromsgrove, with no cancellation fees." },
      { q: "How soon can you visit?", a: "As we're based in Bromsgrove, we usually have same-week (often next-day) availability locally, including evenings and weekends." },
    ],
  },
  birmingham: {
    name: "Birmingham", county: "West Midlands", pcArea: "B", central: "B1",
    districts: [
      ["B1", "City centre"], ["B13", "Moseley"],
      ["B14", "Kings Heath · Druids Heath"], ["B15", "Edgbaston"],
      ["B17", "Harborne"], ["B29", "Selly Oak · Bournbrook"],
      ["B30", "Bournville · Stirchley"], ["B31", "Northfield · Longbridge"],
    ],
    intro: "Eco-friendly carpet, upholstery and steam cleaning across Birmingham — from the B1 city centre through Edgbaston, Harborne and Moseley down to Selly Oak, Bournville, Kings Heath and Northfield. Non-toxic, pet- and child-safe, fully insured, and just a short drive from our Bromsgrove base.",
    faqs: [
      { q: "Which parts of Birmingham do you cover?", a: "We cover the B postcodes across the city, with a strong focus on south and central Birmingham — Selly Oak, Bournville, Northfield, Kings Heath, Edgbaston, Harborne, Moseley and the city centre. Send your postcode with your quote and we'll confirm." },
      { q: "Are you a Birmingham-based company?", a: "We're based just outside the city in Bromsgrove, which keeps our overheads (and your prices) low while still reaching Birmingham quickly — especially the southern suburbs." },
      { q: "Do you clean rugs, stairs, curtains and mattresses too?", a: "Yes — stairs, landings, area rugs, curtains and mattresses are all part of what we do across Birmingham, not just room carpets." },
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
