/* =========================================================
   Ecologics Cleaning — service detail page renderer
   Each services/<slug>.html sets data-slug; this fills it in.
   ========================================================= */

const SERVICE_DETAILS = {
  "carpet-cleaning": {
    icon: "rug",
    title: "Carpet Cleaning",
    tagline: "Deep steam carpet cleaning that lifts what vacuuming leaves behind",
    intro: "Your carpets work hard — trapping dust, allergens and daily grime. Our hot-water extraction steam cleaning reaches deep into the fibres to remove embedded dirt, revive traffic lanes and sanitise, all without harsh chemicals.",
    points: ["Hot-water extraction (steam) deep clean", "Traffic-lane & high-use area revival", "Dust-mite & allergen removal", "Pet-safe, non-toxic solutions", "Fast drying — usually 4–6 hours", "Optional stain & odour protection"],
    include: [
      { h: "Pre-inspection & vacuum", p: "We assess fibre type and problem areas, then thoroughly vacuum to lift loose soil." },
      { h: "Pre-treatment", p: "Eco-friendly solutions are applied to break down grease, stains and ground-in dirt." },
      { h: "Hot-water extraction", p: "High-temperature steam and powerful suction flush dirt and moisture out together." },
      { h: "Grooming & fast-dry", p: "We groom the pile for an even finish and use air movers to speed drying." },
    ],
    faqs: [
      { q: "How long does carpet cleaning take?", a: "A typical 3-bed home takes 1.5–3 hours depending on carpet type and soiling. Carpets are usually dry within 4–6 hours." },
      { q: "Will it get rid of pet smells?", a: "Yes — our treatments neutralise odours at the source rather than masking them. Severe cases may need a dedicated odour treatment." },
      { q: "Is it safe for wool carpets?", a: "Absolutely. We adjust temperature and solutions to suit delicate natural fibres like wool." },
    ],
  },
  "upholstery-cleaning": {
    icon: "sofa",
    title: "Upholstery Cleaning",
    tagline: "Sofas, chairs and soft furnishings refreshed and sanitised",
    intro: "Upholstery absorbs body oils, spills, dust and odours over years of use. Our fabric-safe steam cleaning gently lifts the grime, revives colour and texture, and leaves your furniture hygienically fresh — with minimal drying time.",
    points: ["Sofas, armchairs, dining chairs & headboards", "Fabric-safe low-moisture steam", "Body-oil, spill & odour removal", "Colour & texture revival", "Leather cleaning & conditioning available", "Fast drying, no watermarks"],
    include: [
      { h: "Fabric test & inspection", p: "We identify the fabric type and test in a hidden area to choose the safest method." },
      { h: "Pre-treatment", p: "Targeted eco solutions loosen oils, stains and embedded soil." },
      { h: "Steam extraction", p: "Controlled-moisture steam cleaning lifts dirt without over-wetting the padding." },
      { h: "Finish & dry", p: "We groom fibres and speed-dry so your furniture is usable again quickly." },
    ],
    faqs: [
      { q: "Can you clean all fabric types?", a: "We clean most fabrics including cotton, polyester, microfibre and wool blends, plus leather. We always test first." },
      { q: "How soon can I use my sofa?", a: "Most upholstery is touch-dry within a couple of hours and fully dry the same day." },
      { q: "Do you remove stains?", a: "We tackle most common stains. Older or set-in stains are treated with specialist solutions for the best possible result." },
    ],
  },
  "stain-removal": {
    icon: "spray",
    title: "Stain & Odour Removal",
    tagline: "Targeted treatment for stubborn stains and lingering smells",
    intro: "Wine, coffee, pet accidents, grease or mystery marks — some stains just won't budge with DIY methods. Our technicians use stain-specific, eco-friendly treatments and professional extraction to lift what's left behind and neutralise odours at the source.",
    points: ["Red wine, coffee, tea & juice", "Pet urine, vomit & odours", "Grease, oil & food stains", "Ink, cosmetics & dye marks", "Odour neutralisation (not masking)", "Safe for carpets & upholstery"],
    include: [
      { h: "Stain identification", p: "Different stains need different chemistry — we identify the type to choose the right treatment." },
      { h: "Targeted pre-treatment", p: "Specialist eco solutions break the bond between the stain and the fibre." },
      { h: "Agitation & dwell", p: "We work the solution in and allow it to lift the stain without damaging the fabric." },
      { h: "Extraction & rinse", p: "Hot-water extraction flushes the stain and residue away for a clean finish." },
    ],
    faqs: [
      { q: "Can every stain be removed?", a: "Most can be dramatically improved or removed. Some dyes, bleach marks and very old stains are permanent, but we'll always give an honest assessment first." },
      { q: "Do you treat pet odours?", a: "Yes. We neutralise odour-causing bacteria rather than covering them with fragrance, for a genuinely fresh result." },
      { q: "Is it safe for my kids and pets?", a: "Completely. All our stain treatments are non-toxic and residue-free once dry." },
    ],
  },
  "end-of-tenancy": {
    icon: "key",
    title: "End of Tenancy Cleaning",
    tagline: "Landlord-approved deep cleans to help secure your full deposit",
    intro: "Moving out is stressful enough. Our thorough end-of-tenancy service follows a landlord and letting-agent approved checklist — including professional carpet steam cleaning — so you can hand back the keys with confidence and protect your deposit.",
    points: ["Full property deep clean", "Professional carpet steam cleaning included", "Kitchen degrease & appliance clean", "Bathroom descale & sanitise", "Landlord/agent approved checklist", "Ideal for tenants, landlords & agents"],
    include: [
      { h: "Kitchen", p: "Oven, hob, extractor, cupboards, sink and appliances degreased and sanitised." },
      { h: "Bathrooms", p: "Limescale removed, tiles, glass and sanitaryware deep cleaned and polished." },
      { h: "Living & bedrooms", p: "Carpets steam cleaned, skirtings, doors, switches and interior windows wiped down." },
      { h: "Final detail", p: "We check against the move-out standard so nothing gets missed on inspection." },
    ],
    faqs: [
      { q: "Does it include carpet cleaning?", a: "Yes — professional carpet steam cleaning is included, which is one of the most common causes of deposit deductions." },
      { q: "Do you offer a re-clean guarantee?", a: "If your agent flags anything cleaning-related after our visit, get in touch and we'll put it right." },
      { q: "How far in advance should I book?", a: "We recommend booking as soon as your move-out date is confirmed, especially at month-end when demand is high." },
    ],
  },
  "rug-cleaning": {
    icon: "sparkle",
    title: "Rug & Area Rug Cleaning",
    tagline: "Gentle, expert care for wool, silk and delicate rugs",
    intro: "Area rugs deserve specialist attention. Whether it's a treasured wool runner, a delicate silk piece or a hard-wearing synthetic rug, we tailor our steam cleaning to the fibre — reviving colours, lifting dirt and protecting the weave.",
    points: ["Wool, silk, cotton & synthetic rugs", "Colour revival & fibre protection", "Gentle fibre-specific steam cleaning", "Dust, allergen & dust-mite removal", "Fringe & edge care", "Stain & odour treatment available"],
    include: [
      { h: "Fibre assessment", p: "We identify the rug's material and construction to choose a safe, effective method." },
      { h: "Deep dusting", p: "Loose, embedded soil is removed before any moisture is introduced." },
      { h: "Gentle steam clean", p: "Fibre-appropriate steam cleaning lifts dirt while protecting delicate weaves and dyes." },
      { h: "Controlled drying", p: "Rugs are dried carefully to prevent shrinkage, browning or colour bleed." },
    ],
    faqs: [
      { q: "Can you clean antique or oriental rugs?", a: "Yes, we take extra care with valuable and delicate rugs, adjusting our approach to protect the fibres and colours." },
      { q: "Will the colours run?", a: "We test for colourfastness first and use controlled methods to prevent bleeding." },
      { q: "Do you clean rugs in my home?", a: "Most rugs can be cleaned on-site. Get in touch and we'll advise on the best approach for yours." },
    ],
  },
  "curtain-mattress-cleaning": {
    icon: "bed",
    title: "Curtain & Mattress Cleaning",
    tagline: "Fresh, allergen-free curtains and mattresses — cleaned in place",
    intro: "Curtains and mattresses quietly collect dust, dust mites, sweat, dead skin and odours you never see. Our on-site steam cleaning deep-cleans and sanitises both — no need to take your curtains down or send a mattress away — leaving them hygienically fresh and allergen-free.",
    points: ["On-site curtain steam cleaning (no need to take down)", "Single, double, king & super-king mattresses", "Dust-mite, allergen & bacteria removal", "Sweat stain & odour treatment", "Fabric-safe, low-moisture steam", "Ideal for allergy & asthma sufferers"],
    include: [
      { h: "Inspection & test", p: "We check the fabric and mattress type and test our method in a discreet area first." },
      { h: "Pre-treatment", p: "Eco-friendly solutions target stains, odours and built-up grime." },
      { h: "Steam sanitising", p: "High-temperature steam kills dust mites and bacteria while lifting dirt." },
      { h: "Deodorise & dry", p: "We neutralise odours and speed-dry so everything is usable again quickly." },
    ],
    faqs: [
      { q: "Do you take the curtains down to clean them?", a: "No — we steam clean curtains while they're still hanging, so there's no taking down or rehanging for you to worry about." },
      { q: "Why should I have my mattress cleaned?", a: "Mattresses harbour dust mites, dead skin and sweat that trigger allergies and odours. Regular steam cleaning keeps your bed hygienic and genuinely fresh." },
      { q: "How soon can I use my mattress again?", a: "With our low-moisture steam method, mattresses are typically dry and ready to use within a few hours." },
    ],
  },
  "deep-cleaning": {
    icon: "home",
    title: "Deep Cleaning",
    tagline: "Full-house deep cleans — kitchen, bathroom, washroom and every room",
    intro: "Sometimes a home needs more than a regular tidy. Our full-house deep clean is a top-to-bottom reset covering the kitchen, bathrooms, washroom and every room in between — every surface, corner and forgotten detail, using eco-friendly products that are safe for your family and pets.",
    points: ["Full-house top-to-bottom clean", "Kitchen deep clean & degrease", "Bathroom & washroom sanitise & descale", "Carpet & upholstery steam cleaning", "Skirtings, doors, switches & sills", "Non-toxic, family- & pet-safe products"],
    include: [
      { h: "Kitchen", p: "Worktops, cupboards, sink, hob, extractor and appliance exteriors degreased and sanitised." },
      { h: "Bathrooms & washroom", p: "Limescale removed; tiles, glass, toilet, basin and bath deep cleaned and polished." },
      { h: "Living areas & bedrooms", p: "Carpets, rugs and upholstery steam cleaned; surfaces, skirtings and sills wiped down." },
      { h: "Finishing touches", p: "Switches, handles, doors and details cleaned for a truly finished feel." },
    ],
    faqs: [
      { q: "What does a full-house deep clean include?", a: "Every room — kitchen, bathrooms, washroom, living areas and bedrooms — cleaned top to bottom, including the build-up that day-to-day cleaning doesn't reach." },
      { q: "How long does it take?", a: "It depends on property size and condition, but expect a half to full day for a thorough job. We'll estimate when we quote." },
      { q: "Are the products safe?", a: "Yes — we use non-toxic, eco-friendly products throughout, safe for children and pets." },
    ],
  },
  "commercial-cleaning": {
    icon: "building",
    title: "Commercial Cleaning",
    tagline: "Spotless, professional spaces with flexible scheduling",
    intro: "First impressions matter. We keep offices, hotels, gyms, restaurants and retail spaces looking their best — with carpet and upholstery steam cleaning and deep cleans scheduled around your business, including evenings and weekends.",
    points: ["Offices, retail, hospitality & gyms", "Carpet & upholstery steam cleaning", "Out-of-hours & weekend scheduling", "One-off or regular contracts", "Fully insured & DBS-checked team", "Eco-friendly, low-disruption methods"],
    include: [
      { h: "Site survey & quote", p: "We assess your space and needs, then build a plan and quote around your schedule." },
      { h: "Flexible scheduling", p: "Work is carried out at times that suit you — before opening, after hours or weekends." },
      { h: "Professional clean", p: "Carpets, upholstery and hard surfaces cleaned to a high, consistent standard." },
      { h: "Ongoing support", p: "One-off deep cleans or a regular contract — whatever keeps your space at its best." },
    ],
    faqs: [
      { q: "Can you work outside business hours?", a: "Yes — we regularly clean before opening, after closing and at weekends to avoid disrupting your operation." },
      { q: "Do you offer regular contracts?", a: "We offer both one-off cleans and flexible recurring contracts. We'll tailor a schedule to your needs." },
      { q: "Are you insured for commercial premises?", a: "Yes, we're fully insured and our team is DBS-checked and trained." },
    ],
  },
};

function renderServiceDetail() {
  const slug = document.body.getAttribute("data-slug");
  const d = SERVICE_DETAILS[slug];
  const mount = document.getElementById("service-mount");
  if (!d || !mount) return;
  const I = window.ESC.ICON;
  document.title = `${d.title} — Ecologics Cleaning`;

  const otherServices = window.ESC.SERVICES.filter(s => s.slug !== slug).slice(0, 3);

  mount.innerHTML = `
  <div class="page-hero">
    <div class="wrap">
      <div class="crumbs"><a href="../index.html">Home</a>${I.arrow}<a href="../services.html">Services</a>${I.arrow}<span>${d.title}</span></div>
      <div class="split" style="align-items:center">
        <div>
          <span class="eyebrow on-dark">${I[d.icon]} Service</span>
          <h1 class="mt-2">${d.title}</h1>
          <p class="lead mt-2" style="color:#cbdcea">${d.tagline}</p>
          <div class="hero-cta" style="margin-top:1.6rem">
            <a class="btn btn-white btn-lg" href="../contact.html?service=${encodeURIComponent(d.title)}">Get a Free Quote</a>
            <a class="btn btn-outline btn-lg" href="tel:${window.ESC.CONFIG.phoneRaw}">${I.phone} Call Us</a>
          </div>
        </div>
        <div class="media-frame" style="max-width:420px;margin-left:auto">
          <img class="photo" src="../assets/photos/svc-${slug}.jpg" alt="${d.title} by Ecologics Cleaning">
        </div>
      </div>
    </div>
  </div>

  <section class="section">
    <div class="wrap">
      <div class="split">
        <div data-reveal>
          <span class="eyebrow">Overview</span>
          <h2 class="h-lg mt-2">What's included</h2>
          <p class="lead mt-2">${d.intro}</p>
          <div class="pill-list mt-3">${d.points.map(p => `<span class="pill">${p}</span>`).join("")}</div>
        </div>
        <div class="grid" data-reveal>
          ${d.include.map((it, i) => `
            <div class="feature" style="background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:1.2rem 1.3rem">
              <span class="fi">${I.check}</span>
              <div><h4>${it.h}</h4><p>${it.p}</p></div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-soft">
    <div class="wrap">
      <div class="section-head" data-reveal><span class="eyebrow">Good to know</span><h2 class="h-lg mt-2">Frequently asked questions</h2></div>
      <div class="faq wrap-tight">
        ${d.faqs.map(f => `
          <details class="acc" data-reveal>
            <summary>${f.q}<span class="pm">${I.plus}</span></summary>
            <div class="acc-body">${f.a}</div>
          </details>`).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="cta-band" data-reveal>
        <div class="cta-flex">
          <div><h2 class="h-lg">Book your ${d.title.toLowerCase()}</h2><p class="lead mt-2" style="color:#cbdcea">Free quotes · fully insured · non-toxic & pet-safe.</p></div>
          <a class="btn btn-white btn-lg" href="../contact.html?service=${encodeURIComponent(d.title)}">Get a Free Quote ${I.arrow}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-soft">
    <div class="wrap">
      <div class="section-head" data-reveal><span class="eyebrow">Explore more</span><h2 class="h-lg mt-2">Other services</h2></div>
      <div class="cards">
        ${otherServices.map(s => `
          <a class="svc-card" data-reveal href="${s.slug}.html">
            <div class="svc-ic">${I[s.icon]}</div>
            <h3>${s.name}</h3>
            <p>${s.blurb}</p>
            <span class="svc-link">Learn more ${I.arrow}</span>
          </a>`).join("")}
      </div>
    </div>
  </section>`;

  window.__reveal && window.__reveal();
}
document.addEventListener("DOMContentLoaded", () => setTimeout(renderServiceDetail, 0));
