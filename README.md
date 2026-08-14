# EcoSteam Clean

Marketing website for **EcoSteam Clean** — eco-friendly steam cleaning for carpets, upholstery, rugs, curtains & whole homes across London & the Home Counties.

Self-contained static site (HTML + CSS + vanilla JS). No build step, no server, no dependencies to install.

## Structure

```
index.html            Home (kinetic hero, bento services, before/after slider, sticky process)
services.html         Services overview
services/*.html       8 service detail pages (data-driven)
about.html            About
contact.html          Quote / contact form (mailto + saved locally)
blog.html             Blog listing
post.html             Single article (?id=slug)
admin.html            PIN-protected CMS (blog posts + quote requests)
privacy.html, terms.html
css/styles.css        Design system ("Eco-Luxe": forest + acid-lime, Bricolage Grotesque)
js/site.js            Shared header/footer, nav, interactions
js/blog.js            Blog engine (seed posts + localStorage)
js/service-detail.js  Service page content + renderer
js/admin.js           Admin CMS logic
assets/photos/        Imagery (Pexels, free for commercial use)
```

## Run locally

Any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Before launch — replace placeholders

- **Contact details** in `js/site.js` (`CONFIG`): phone, email, WhatsApp, service area
- **Admin PIN** in `js/admin.js` (`ADMIN_PIN`)
- **Social links** (currently `#`)
- **Privacy / Terms** are templates — have them reviewed
- Fonts load from Google Fonts (needs internet)

## Admin

`admin.html` — PIN-gated panel to create/edit/delete blog posts and view quote requests. All data is stored in the browser's `localStorage` (no backend).
