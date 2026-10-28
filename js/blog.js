/* =========================================================
   Ecologics Cleaning — blog engine
   Seed posts (hard-coded) merged with admin posts (localStorage).
   Renders listing (blog.html) and single post (post.html?id=slug).
   ========================================================= */

const POSTS_KEY = "esc_posts";

/* ---------- Seed articles ---------- */
const SEED_POSTS = [
  {
    slug: "eco-cleaning-myths-costing-you-time-and-money",
    image: "assets/photos/blog-eco.jpg",
    title: "5 Eco-Cleaning Myths That Are Actually Costing You Time (and Money)",
    category: "Eco Cleaning",
    author: "The Ecologics Team",
    date: "2026-09-24",
    read: 6,
    excerpt: "Does eco-friendly mean less effective? Not at all. We bust five common green-cleaning myths and explain what actually makes a clean work, so you can save time, money and effort.",
    body: `
<p>There is a stubborn idea that eco-friendly and effective do not go together. That if a cleaning product is gentle, it must be weaker, slower or more expensive, and that real cleaning needs strong chemicals. It is an easy belief to hold, but it is often wrong, and it can lead people to spend more time and money than they need to.</p>
<p>Let us go through the five most common myths, one at a time.</p>

<h2>Myth 1: "Eco-friendly means it will not really work"</h2>
<p>This is the big one, and it is understandable. Some budget "green" products on supermarket shelves really are watery and disappointing. But the product is only half the story. What cleans a carpet is a combination of heat, moisture, agitation and extraction, and the cleaning solution is just one part of that.</p>
<p>Professional steam cleaning is a good example. Hot water does much of the heavy lifting, which is why it can be so effective with gentle, non-toxic products. The result depends on the equipment and technique, not on how harsh the chemicals are.</p>

<h2>Myth 2: "Chemical cleaners are more thorough because they are stronger"</h2>
<p>Strength and thoroughness are not the same thing. Strong detergents often work by breaking dirt apart, but if they are not fully rinsed out, they leave a sticky film. That film attracts new dirt, so a carpet can look dull again within weeks.</p>
<p>A clean that rinses thoroughly, with nothing left behind to attract dirt, often stays cleaner for longer, even though it felt gentler at the time.</p>

<h2>Myth 3: "Green cleaning takes longer, so it is less convenient"</h2>
<p>For DIY spot cleaning with natural ingredients such as vinegar, this can sometimes be true. A natural approach may need an extra few minutes compared with a harsh chemical on a tough mark. But professional eco cleaning is not slower. A typical home carpet clean takes a couple of hours, and carpets are usually dry within 4 to 6 hours. You do not need to stay out of the house for days or open every window to clear a chemical smell.</p>

<h2>Myth 4: "Regular products are fine to use around children and pets"</h2>
<p>Many household cleaning products carry warnings for a reason. Children and pets spend more time at floor level than adults, and they touch surfaces and then touch their faces. That is one of the strongest arguments for choosing non-toxic products, especially for carpets, sofas and mattresses where people sit and sleep.</p>
<p>If you have young children or animals, ask any cleaner exactly what they use, and whether it is suitable for use around them.</p>

<h2>Myth 5: "You have to choose between eco-friendly and getting your deposit back"</h2>
<p>This comes up a lot with end of tenancy cleans, where tenants worry that a gentler approach will not satisfy a landlord. In reality a landlord cares about the result: clean carpets, a spotless oven, no limescale and fresh-smelling rooms. A thorough steam clean with no chemical residue and no heavy fragrance delivers exactly that. Our <a class="inline" href="end-of-tenancy-cleaning-checklist.html">end of tenancy checklist</a> shows what to cover.</p>

<h2>What actually makes a clean effective?</h2>
<ul class="bul">
  <li><strong>The right method for the surface.</strong> Carpets, wool rugs and sofas all need different approaches.</li>
  <li><strong>Heat and extraction.</strong> Dirt has to be removed from the fabric, not just moved around.</li>
  <li><strong>Proper rinsing.</strong> Anything left behind will attract dirt.</li>
  <li><strong>Experience.</strong> Knowing when to be gentle, and when a stain needs targeted treatment.</li>
</ul>

<h2>Where eco cleaning has limits</h2>
<p>It is only fair to say that no method is perfect. Very old, set-in stains, dye damage and heavily worn fibres cannot always be fixed, however you clean. A good cleaner will be honest about that before they start, and it does not depend on whether they use harsh chemicals.</p>

<h2>Bonus myths worth knowing about</h2>
<h3>"Vinegar and bicarbonate of soda clean everything"</h3>
<p>Both are useful, inexpensive and good in the right place. But they are not universal. Vinegar is acidic and can damage natural stone, some wood finishes and certain fabrics. Bicarbonate is mildly abrasive. And mixing them mostly neutralises both, so you get less cleaning power than you expect. Natural does not automatically mean right for every surface.</p>
<h3>"Steam cleaning damages carpets"</h3>
<p>Done properly, it does not. Problems arise when too much water or heat is used, or when the wrong method is applied to a delicate fibre. A professional adjusts temperature and moisture for the carpet, which is why the machine and the person using it both matter.</p>
<h3>"If it smells strongly, it must be clean"</h3>
<p>A strong smell usually just means strong fragrance. Real cleanliness smells of nothing much at all.</p>
<h3>"DIY always works out cheaper"</h3>
<p>Not always. If you rent a machine, buy products, give up a day and still end up with damp carpet and a half-removed stain, it may cost more in the long run. For a big job, a professional can be better value.</p>

<h2>How to judge a cleaning company</h2>
<ul class="bul">
  <li>Do they explain what they use, and why?</li>
  <li>Do they give you a clear quote before starting?</li>
  <li>Are they insured?</li>
  <li>Do they use professional equipment rather than rental-grade machines?</li>
  <li>Do they have real reviews you can read? You can see ours on our <a class="inline" href="../reviews.html">customer reviews page</a>.</li>
</ul>

<h2>Think about the whole cost</h2>
<p>The cheapest option is not always the most economical. A poor clean that leaves residue means you pay again sooner. A good clean lasts longer, helps carpets and furniture last longer, and means you do not pay for a replacement ahead of time. When you compare, think about the result and the lifetime of what you are cleaning, not just the price on the day.</p>

<h2>Frequently asked questions</h2>
<h3>Is eco-friendly cleaning more expensive?</h3>
<p>Not necessarily. The cost depends on the size of the job and the condition of the carpet or furniture, not on whether the products are gentle.</p>
<h3>Does eco cleaning remove tough stains?</h3>
<p>Often, yes, particularly with heat, extraction and a stain-specific treatment. Very old or set stains may not come out completely, and an honest cleaner will say so up front.</p>

<h2>The takeaway</h2>
<p>Eco-friendly cleaning has a reputation for being the compromise option, good for the planet but a step down in results. When it is done properly, that is simply not true. You get a thorough clean, a healthier home and less residue.</p>
<p>Ready to see the difference yourself? <a class="inline" href="../contact.html">Get a free, no-obligation quote</a>, or learn more about our <a class="inline" href="../services/carpet-cleaning.html">eco-friendly carpet cleaning</a>.</p>
`
  },
  {
    slug: "why-your-curtains-need-cleaning-too",
    image: "assets/photos/svc-curtain-mattress-cleaning.jpg",
    title: "The Cleaning Job Everyone Forgets: Why Your Curtains Need Attention Too",
    category: "Curtain Care",
    author: "The Ecologics Team",
    date: "2026-09-10",
    read: 6,
    excerpt: "Curtains collect dust, cooking smells and pollen, yet they are rarely cleaned. Here is how often to clean them, what to check on the label, and how on-site steam cleaning works.",
    body: `
<p>Carpets get vacuumed. Sofas get a quick go-over. But when did you last clean your curtains? They are one of the largest areas of fabric in any room, they hang in the same spot for years, and they quietly collect everything in the air. Most of us never think about them until we notice the smell or the dust.</p>
<blockquote>The short answer: most curtains benefit from a proper clean about once a year, and more often in kitchens, homes with pets, or if anyone has allergies.</blockquote>

<h2>What collects on curtains?</h2>
<ul class="bul">
  <li><strong>Dust and pet hair.</strong> Fabric holds on to airborne dust. You often see it when you open or close the curtains and it drifts into the light.</li>
  <li><strong>Pollen and outdoor pollution,</strong> particularly if you open windows in spring and summer.</li>
  <li><strong>Cooking smells and grease,</strong> especially in open-plan kitchens and dining rooms.</li>
  <li><strong>Smoke or vape residue,</strong> and other odours that settle into fabric.</li>
  <li><strong>Condensation and damp,</strong> which can cause mildew marks along windowsills and the lower edges.</li>
  <li><strong>Sunlight.</strong> It does not collect on curtains, but it fades and weakens fabric over time, so keeping them clean helps you notice damage early.</li>
</ul>

<h2>Why it matters</h2>
<p>Dusty curtains can make a room feel stuffy and look tired. For anyone who is sensitive to dust or pollen, cleaning them regularly is a sensible way to keep dust levels down, though it does not replace medical advice. And clean curtains simply look better. Colours are brighter and the fabric hangs more crisply.</p>

<h2>How often should curtains be cleaned?</h2>
<ul class="bul">
  <li><strong>Every 3 to 6 months:</strong> vacuum or shake out lightly, using a soft brush attachment on low suction.</li>
  <li><strong>Every 6 to 12 months:</strong> a deeper clean, depending on the fabric, the room and how much dust there is.</li>
  <li><strong>More often</strong> in kitchens, near busy roads, in homes with smokers or pets, or if anyone has allergies.</li>
</ul>

<h2>Check the label first</h2>
<p>Curtain fabrics vary enormously, and the wrong method can cause shrinkage, colour loss or damage to linings.</p>
<ul class="bul">
  <li><strong>Machine washable</strong> curtains are usually simple, but check the temperature, and whether the lining and header tape can be washed too.</li>
  <li><strong>Dry-clean only</strong> labels usually apply to heavy, lined, interlined or delicate fabrics such as velvet or silk.</li>
  <li><strong>No label?</strong> Test a hidden corner first, or ask a professional.</li>
</ul>
<p>Taking large or heavy curtains down is also awkward, and re-hanging them without creases takes time.</p>

<h2>On-site steam cleaning</h2>
<p>One option is to have curtains cleaned where they hang. Our on-site method uses fabric-safe, low-moisture steam, so there is no need to take them down. It removes dust, odours and stale smells, and the curtains are back in place the same day. It is especially useful for heavy, lined or hard-to-remove curtains. See our <a class="inline" href="../services/curtain-mattress-cleaning.html">curtain and mattress cleaning</a> service.</p>

<h2>Do not forget the mattress</h2>
<p>Bedrooms are where fabric and dust build up most. We also clean mattresses in all sizes, which removes dust, sweat marks and odours. For more on the benefits of professional cleaning in the home, see our guide to <a class="inline" href="eco-friendly-cleaning-why-it-matters.html">why eco-friendly steam cleaning matters</a>.</p>

<h2>Simple habits that help</h2>
<ul class="bul">
  <li>Vacuum curtains regularly with the soft brush attachment</li>
  <li>Open windows on dry days to keep air circulating and cut down damp</li>
  <li>Keep curtains away from radiators where you can</li>
  <li>Shake them out outdoors occasionally, if the fabric allows</li>
  <li>Wash or clean them before storing, if you swap them seasonally</li>
</ul>

<h2>A quick guide to curtain fabrics</h2>
<ul class="bul">
  <li><strong>Cotton and cotton blends:</strong> usually washable, but may shrink. Check the label and use a cool wash if in doubt.</li>
  <li><strong>Polyester:</strong> generally hard-wearing and easy to care for.</li>
  <li><strong>Linen:</strong> creases easily, and can shrink. Often best cleaned gently.</li>
  <li><strong>Velvet and heavy fabrics:</strong> usually dry clean only, or professional cleaning. They are heavy and awkward to handle.</li>
  <li><strong>Silk and delicate fabrics:</strong> prone to water marks and fading. Professional care is safest.</li>
  <li><strong>Lined and interlined curtains:</strong> the layers can shrink at different rates, so they are rarely suitable for a machine wash.</li>
  <li><strong>Blackout curtains:</strong> the coating can be damaged by washing, so check the label.</li>
  <li><strong>Voiles and nets:</strong> light and easy to wash, but they can yellow and tangle. Wash them gently and hang them back while damp.</li>
</ul>

<h2>How to clean washable curtains at home</h2>
<ul class="bul">
  <li><strong>Check the label.</strong> Follow the temperature and cycle it recommends.</li>
  <li><strong>Remove hooks and any weights</strong> before washing, if you can.</li>
  <li><strong>Shake or vacuum off loose dust</strong> first. It helps the wash work better.</li>
  <li><strong>Wash on a gentle cycle,</strong> with the drum no more than half full, using a mild detergent.</li>
  <li><strong>Do not over-spin.</strong> It creases the fabric and can damage the lining.</li>
  <li><strong>Re-hang while slightly damp,</strong> so the weight of the fabric pulls out creases. Or dry them as the label says.</li>
  <li><strong>Iron on a suitable setting,</strong> if the fabric calls for it, and check the label first.</li>
</ul>

<h2>The bedroom: curtains, mattresses and bedding</h2>
<p>Bedroom fabrics work hard while you sleep. Curtains, mattresses, pillows and duvets all collect dust and body moisture. A simple routine helps:</p>
<ul class="bul">
  <li>Wash bedding regularly, following the labels</li>
  <li>Air the mattress by pulling back the covers when you get up</li>
  <li>Vacuum the mattress surface now and then using the upholstery attachment</li>
  <li>Have curtains and mattresses professionally cleaned about once a year</li>
  <li>Open windows daily to reduce humidity</li>
</ul>
<p>Our <a class="inline" href="../services/curtain-mattress-cleaning.html">curtain and mattress cleaning</a> covers single, double, king and super-king mattresses.</p>

<h2>Blinds, nets and other window dressings</h2>
<p>Roller blinds, Roman blinds and nets all collect dust and sometimes condensation marks. Dust them regularly with a soft brush or the vacuum's soft attachment, and check the care label before washing or wiping them.</p>

<h2>A spring clean checklist for soft furnishings</h2>
<ul class="bul">
  <li>Curtains and nets: wash, or arrange a professional clean</li>
  <li>Mattresses: air, vacuum and arrange a deep clean</li>
  <li>Sofas and chairs: vacuum and deep clean, and wash throws and covers</li>
  <li>Carpets and rugs: deep clean, particularly after winter. See <a class="inline" href="how-often-should-you-clean-your-carpets.html">how often to clean your carpets</a></li>
  <li>Cushions and pillows: wash or air, following the labels</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>Will cleaning shrink my curtains?</h3>
<p>It can if the wrong method is used. That is why checking the label, or choosing a low-moisture steam method that does not soak the fabric, matters.</p>
<h3>Do you need to take the curtains down?</h3>
<p>Not with on-site steam cleaning. We clean them in place.</p>
<h3>How long does it take?</h3>
<p>This depends on the number and size of curtains. We will give you a clear idea when we quote.</p>
<h3>Can I steam clean my curtains myself?</h3>
<p>A handheld steamer can freshen some fabrics, but it is easy to leave water marks or damage linings and coatings. Professional on-site cleaning uses controlled, low-moisture steam and is safer for lined or delicate curtains.</p>
<h3>Why do my curtains smell musty?</h3>
<p>Usually damp from condensation, cooking residue or stored moisture. Airing the room helps, but if the smell persists the fabric itself probably needs cleaning.</p>
<p>If your curtains are overdue, <a class="inline" href="../contact.html">ask us for a free, no-obligation quote</a>. We cover Bromsgrove, Birmingham and the wider West Midlands.</p>
`
  },
  {
    slug: "how-often-should-you-clean-your-carpets",
    image: "assets/photos/hero.jpg",
    title: "How Often Should You Really Clean Your Carpets?",
    category: "Carpet Care",
    author: "The Ecologics Team",
    date: "2026-07-28",
    read: 9,
    excerpt: "Vacuuming alone is not enough. Here is a realistic cleaning schedule for carpets, what changes it for pets, children and allergies, and the signs it is time to book a professional clean.",
    body: `
<p>Ask ten people how often carpets should be cleaned and you will get ten different answers. The honest answer is that it depends on who lives in your home, how it is used and what the carpet is made of. This guide gives you a realistic schedule you can actually stick to, and explains what changes it.</p>
<blockquote>The short answer: vacuum busy areas at least twice a week, and have your carpets professionally deep cleaned about once a year. Homes with pets, young children or allergy sufferers usually benefit from every six months.</blockquote>

<h2>Why vacuuming alone is not enough</h2>
<p>A good vacuum is the most important thing you can do for a carpet, and regular vacuuming really does extend its life. But a vacuum is designed to lift loose, dry dust from the surface. It cannot do much about what sinks deeper into the pile and the backing over time.</p>
<ul class="bul">
  <li><strong>Body oils and cooking residue</strong> are sticky. They bind to fibres, attract more dirt and cause the dull, grey look of high-traffic lanes.</li>
  <li><strong>Fine grit</strong> works its way to the base of the pile. Each footstep grinds it against the fibres, which wears the carpet down faster than you would expect.</li>
  <li><strong>Dust, pet dander and allergens</strong> settle deep in the carpet where ordinary vacuuming struggles to reach them.</li>
  <li><strong>Spills and odours</strong> that were never fully removed stay in the fibres and can return on a damp day.</li>
</ul>
<p>Hot-water extraction, often called steam cleaning, flushes all of this out with heat, water and powerful suction, which is why it is the method most carpet manufacturers and professional cleaners recommend for a periodic deep clean.</p>

<h2>A simple cleaning schedule</h2>
<ul class="bul">
  <li><strong>Every day or two:</strong> vacuum hallways, kitchens and any other high-traffic areas, especially if you wear shoes indoors or have pets.</li>
  <li><strong>Once or twice a week:</strong> vacuum bedrooms, living rooms and stairs. Go slowly. Several slow passes pick up far more than one quick one.</li>
  <li><strong>As soon as it happens:</strong> blot spills. Do not wait until the weekend.</li>
  <li><strong>Every few months:</strong> move furniture and vacuum underneath and along the edges, where dust gathers unnoticed.</li>
  <li><strong>Every 12 months:</strong> a professional hot-water extraction clean for a typical household.</li>
  <li><strong>Every 6 months:</strong> for homes with pets, babies and toddlers, smokers, or anyone with dust or pet allergies.</li>
</ul>

<h2>What changes the answer</h2>
<h3>Pets</h3>
<p>Hair, dander, muddy paws and the occasional accident all end up in the carpet. Pet households benefit from more frequent deep cleaning, and from treating accidents quickly so the odour does not become established.</p>
<h3>Children</h3>
<p>Crawling babies and playing children spend hours at carpet level. Spills, crumbs and sticky hands mean carpets in family homes get soiled faster than in adult-only households.</p>
<h3>Allergies and asthma</h3>
<p>If anyone in the home is sensitive to dust or allergens, a regular deep clean combined with frequent vacuuming can help keep the amount of dust in the carpet down. It will not replace medical advice, but it is a sensible part of keeping a home comfortable.</p>
<h3>Shoes, entrances and light colours</h3>
<p>Homes where shoes stay on, carpets close to the front door and pale colours all show soil sooner. Light carpets look dirty earlier, even though they are no more soiled than darker ones.</p>
<h3>Rental and holiday properties</h3>
<p>If you let a property, cleaning between tenancies protects your investment and keeps the next tenant happy. See our guide to the <a class="inline" href="end-of-tenancy-cleaning-checklist.html">end of tenancy cleaning checklist</a>.</p>

<h2>Signs your carpets are overdue</h2>
<ul class="bul">
  <li>Dull, grey or matted lanes where people walk most often</li>
  <li>A musty or stale smell, especially in warm or damp weather</li>
  <li>A gritty feel underfoot, even after vacuuming</li>
  <li>Increased sneezing or itchy eyes indoors</li>
  <li>Visible stains, or spots that keep reappearing after cleaning</li>
  <li>It has been more than a year, or you have just finished building work or moved in</li>
</ul>

<h2>Looking after carpets between professional cleans</h2>
<ul class="bul">
  <li><strong>Use doormats</strong> at every entrance, and consider a shoes-off rule. Most of the soil in a carpet is walked in.</li>
  <li><strong>Blot, never rub</strong>, when you spot clean. Rubbing spreads the stain and damages the pile.</li>
  <li><strong>Avoid over-wetting.</strong> Too much water or too much detergent can leave residue that attracts dirt, and carpet that stays damp for too long can develop a musty smell.</li>
  <li><strong>Rotate furniture</strong> occasionally so one area does not take all the wear.</li>
  <li><strong>Check the care instructions or warranty.</strong> Some carpet manufacturers expect periodic professional cleaning, so keep your paperwork.</li>
</ul>

<h2>What a professional clean involves</h2>
<p>At Ecologics Cleaning we start with an inspection of the carpet and the problem areas, then vacuum thoroughly to lift loose soil. Eco-friendly pre-treatment loosens grease and ground-in dirt, before hot-water extraction flushes dirt and moisture out together. We finish by grooming the pile and using air movers to speed up drying, which is usually within 4 to 6 hours. Our products are non-toxic and pet-safe. You can read more about our <a class="inline" href="../services/carpet-cleaning.html">carpet cleaning service</a>.</p>

<h2>How your carpet type affects the schedule</h2>
<p>Not all carpets age in the same way, and what is right for one may be wrong for another.</p>
<ul class="bul">
  <li><strong>Wool</strong> is naturally resilient and hides dirt well, but it is sensitive to heat, strong alkaline cleaners and over-wetting. It benefits from gentle, regular care rather than aggressive cleaning.</li>
  <li><strong>Synthetic carpets</strong> such as nylon and polyester are very common in homes. They are hard-wearing and generally easier to clean, although oily soil can cling to them.</li>
  <li><strong>Loop pile carpets</strong> trap grit between the loops. Use suction only rather than a rotating brush, which can snag and pull the loops.</li>
  <li><strong>Cut pile and saxony carpets</strong> show footprints and vacuum marks, which is purely cosmetic, but they can look grubby sooner in busy rooms.</li>
  <li><strong>Pale or natural-coloured carpets</strong> show soiling earlier and usually need to be cleaned a little more often.</li>
</ul>

<h2>A room-by-room guide</h2>
<ul class="bul">
  <li><strong>Hallways, stairs and landings:</strong> the busiest areas of the house. They take the most wear, so vacuum them most often and expect them to need a deep clean first.</li>
  <li><strong>Living rooms:</strong> family life happens here. Spills, snacks, pets and visitors all add up.</li>
  <li><strong>Bedrooms:</strong> less traffic, but dust, skin cells and mites collect, particularly around the bed. Worth including in your annual clean.</li>
  <li><strong>Children's rooms and playrooms:</strong> play, spills and sticky fingers mean these often need attention sooner.</li>
  <li><strong>Dining areas:</strong> food and drink accidents are common. Treat spills at once and plan on a deep clean at least once a year.</li>
  <li><strong>Home offices:</strong> chair castors wear a path into the carpet. A mat under the chair helps.</li>
</ul>

<h2>When is the best time to book?</h2>
<p>You can have carpets cleaned at any time of year, but some moments make more sense than others.</p>
<ul class="bul">
  <li><strong>Spring:</strong> after the winter months of mud and wet coats, and with windows open to help the carpet dry.</li>
  <li><strong>Before guests or an event,</strong> such as Christmas, a party or a family gathering.</li>
  <li><strong>After redecorating or building work,</strong> when dust and plaster settle into the pile.</li>
  <li><strong>Before or after moving,</strong> when rooms are empty and everything is easier to reach.</li>
  <li><strong>After a spill, a pet accident or a flood-type event,</strong> as soon as safely possible.</li>
</ul>
<p>If you are planning to change the furniture layout, clean first, while the room is clear.</p>

<h2>Common mistakes to avoid</h2>
<ul class="bul">
  <li><strong>Cleaning only the visible stain.</strong> A freshly cleaned patch can look obviously cleaner than the carpet around it, which makes the rest look worse. Cleaning a whole area evenly gives a better result.</li>
  <li><strong>Using too much product.</strong> More detergent does not mean a cleaner carpet. The extra residue attracts dirt.</li>
  <li><strong>Over-wetting.</strong> Soaking the carpet can reach the underlay, slow drying and cause smells.</li>
  <li><strong>Walking on it too soon.</strong> Shoes on damp carpet push dirt straight back in.</li>
  <li><strong>Ignoring edges and stairs,</strong> where dirt collects and cleaners often rush.</li>
  <li><strong>Leaving it too long.</strong> Soil that is allowed to build up for years is harder to remove completely.</li>
</ul>

<h2>The real cost of putting it off</h2>
<p>Grit and soil wear the fibres down, and worn carpet cannot be restored. Regular cleaning is much cheaper than replacing carpet early, and it keeps rooms fresher in the meantime. It is also one of the easiest ways to make a room feel clean and cared for without redecorating.</p>

<h2>Frequently asked questions</h2>
<h3>Can you steam clean carpets too often?</h3>
<p>Done properly, a deep clean is not harmful, but there is no benefit in doing it more often than your home needs. The main risk is over-wetting, which is why a professional machine with strong suction is better than a light-duty rental.</p>
<h3>Is a rental machine as good as a professional clean?</h3>
<p>Rental machines can work for a small spot, but they generally have less power and heat, and it is easy to use too much water and leave detergent behind. That residue can make carpets get dirty faster.</p>
<h3>How long should I wait before walking on a cleaned carpet?</h3>
<p>You can usually walk on it carefully once the surface is touch-dry, but it is best to avoid shoes until it is fully dry. Our guide to <a class="inline" href="how-long-does-carpet-take-to-dry.html">how long carpet takes to dry</a> explains what affects drying time.</p>
<h3>Do carpets need cleaning if nobody wears shoes inside?</h3>
<p>Less often, but still regularly. Dust, skin cells, pet hair and crumbs all end up in the carpet, whether or not shoes come indoors.</p>
<h3>Will cleaning make my carpet wear out faster?</h3>
<p>No. Cleaning carried out properly removes the abrasive grit that wears carpet down, so it generally helps carpet last longer. The risks come from over-wetting, harsh chemicals or the wrong method for the fibre.</p>
<h3>What is the quickest way to freshen a carpet between cleans?</h3>
<p>Vacuum slowly, open windows to let in fresh air, and deal with any odours at the source. If something smells, find out why rather than covering it up.</p>
<p>If you are not sure when your carpets were last cleaned, <a class="inline" href="../contact.html">ask us for a free, no-obligation quote</a>. We cover Bromsgrove, Birmingham and the wider West Midlands.</p>
`
  },
  {
    slug: "remove-red-wine-stain-from-carpet",
    image: "assets/photos/svc-stain-removal.jpg",
    title: "How to Remove a Red Wine Stain From Carpet (Before It Sets)",
    category: "Stain Removal",
    author: "The Ecologics Team",
    date: "2026-07-15",
    read: 7,
    excerpt: "Spilled red wine? Do not panic and do not scrub. This step-by-step guide shows what to do in the first minutes, what to use, what to avoid and when to call in a professional.",
    body: `
<p>Red wine on a light carpet is every host's nightmare, but a spill is not necessarily a permanent stain. The first few minutes matter most. Acting quickly and calmly gives you a very good chance of getting most or all of it out.</p>
<blockquote>The golden rule: blot, never rub. Rubbing pushes the pigment deeper into the fibres and spreads the stain across a larger area.</blockquote>

<h2>Why red wine stains so stubbornly</h2>
<p>Red wine contains natural pigments and tannins that cling to carpet fibres. Wool and nylon are especially prone to absorbing colour. The longer wine sits, the more it bonds with the fibre, and heat can fix it even further. That is why speed, and the right kind of water, make such a difference.</p>

<h2>What you will need</h2>
<ul class="bul">
  <li>Clean white cloths or plain kitchen paper (coloured cloths can transfer dye)</li>
  <li>Cold water in a spray bottle or small bowl</li>
  <li>Washing-up liquid (a clear, mild one)</li>
  <li>White vinegar</li>
  <li>Bicarbonate of soda, for older marks</li>
</ul>

<h2>Step by step: the first 5 minutes</h2>
<ul class="bul">
  <li><strong>Blot straight away.</strong> Press a clean cloth onto the spill and lift. Work from the outside of the stain towards the centre so it does not spread.</li>
  <li><strong>Remove any pooled wine.</strong> If the spill is large, scoop up the liquid first with a spoon, then blot.</li>
  <li><strong>Dilute with cold water.</strong> Lightly spray or dab the area. Use cold water, never hot. Heat can set the stain.</li>
  <li><strong>Blot again</strong> with a fresh part of the cloth. Repeat until little colour transfers.</li>
</ul>

<h2>A gentle home solution</h2>
<p>If a mark remains, mix one tablespoon of washing-up liquid and one tablespoon of white vinegar into two cups of warm water. Test it on a hidden spot first, such as inside a wardrobe or under furniture. Dab it onto the stain with a cloth, working from the edge in, then blot with cold water and press dry with a clean towel.</p>
<p>Avoid soaking the carpet. A damp patch that takes a long time to dry can leave a ring or a musty smell, which is a problem of its own.</p>

<h2>If the stain has dried</h2>
<p>Dried wine is harder, but not hopeless. Lightly dampen the area with cold water, then sprinkle a thin layer of bicarbonate of soda and leave it for a few hours. Vacuum it up, then treat the remaining mark with the washing-up liquid and vinegar solution above. You may need to repeat this more than once.</p>

<h2>What not to do</h2>
<ul class="bul">
  <li><strong>Do not rub or scrub.</strong> It damages the pile and spreads the stain.</li>
  <li><strong>Do not use hot water, steam or a hairdryer</strong> on a stain that is still there. Heat can set it permanently.</li>
  <li><strong>Be careful with bleach or hydrogen peroxide.</strong> They can strip the dye from the carpet itself and leave a pale patch that is worse than the original mark.</li>
  <li><strong>Do not put down more white wine as a cure.</strong> It adds liquid and rarely helps, and salt can leave marks that complicate professional removal.</li>
  <li><strong>Do not use too much detergent.</strong> Soap left in the carpet attracts dirt and the area may re-soil quickly.</li>
</ul>

<h2>When to call a professional</h2>
<p>It is worth calling in a professional when:</p>
<ul class="bul">
  <li>The stain is old, dried, or has been treated several times already</li>
  <li>The carpet is wool, silk or another delicate fibre</li>
  <li>The spill is large and has soaked through to the underlay</li>
  <li>You have tried a home method and a mark or colour change remains</li>
</ul>
<p>Our team uses eco-friendly, stain-specific treatments followed by hot-water extraction, which lifts pigment out of the fibres without harsh bleach. We can also help with wine on sofas and rugs. See our <a class="inline" href="../services/stain-removal.html">stain removal service</a>, or our <a class="inline" href="../services/upholstery-cleaning.html">upholstery cleaning</a> for fabric furniture.</p>

<h2>Why the first minutes matter so much</h2>
<p>When wine lands on carpet, it spreads sideways and soaks down at the same time. The longer it sits, the more it reaches the backing and underlay, and the harder it is to get out. Quick blotting removes the liquid before it can sink in, which is why people who act within minutes often get a much better result than those who deal with it the next morning.</p>

<h2>A 60-second red wine emergency kit</h2>
<p>It is worth keeping a few things together where you can reach them, particularly if you entertain at home.</p>
<ul class="bul">
  <li>A roll of white kitchen paper or a stack of plain white cloths</li>
  <li>A small spray bottle of cold water</li>
  <li>A mild washing-up liquid</li>
  <li>White vinegar</li>
  <li>A small tub of bicarbonate of soda</li>
</ul>

<h2>Red wine on other surfaces</h2>
<h3>On a rug</h3>
<p>The same principles apply: blot, dilute with cold water, and avoid scrubbing. Many rugs are made of wool or silk, which need extra care, and some dyes can run when wet. If it is a valuable or delicate rug, it is safer to get advice before using any cleaning product. See our <a class="inline" href="../services/rug-cleaning.html">rug cleaning service</a>.</p>
<h3>On a sofa or fabric chair</h3>
<p>Blot gently, and avoid soaking the fabric because the padding underneath holds moisture. Check the care label (W, S, WS or X) before using any liquid. For fabric labelled X, use a dry method only. Our guide to <a class="inline" href="keep-upholstery-looking-new.html">keeping upholstery looking new</a> explains the codes.</p>
<h3>On leather</h3>
<p>Wipe quickly with a clean, damp cloth and dry it. Do not use household cleaners or vinegar on leather, which can damage the finish. For marks that stay, speak to a specialist.</p>

<h2>How other common spills compare</h2>
<ul class="bul">
  <li><strong>Coffee and tea:</strong> blot, dilute with cold water and treat with a little washing-up liquid solution. Tannins behave like those in wine.</li>
  <li><strong>Fruit juice:</strong> similar to wine. Act quickly because the sugar and dyes can set.</li>
  <li><strong>Grease and oil:</strong> blot, then use a little washing-up liquid, which is designed to break down fats.</li>
  <li><strong>Pet urine:</strong> blot well, and treat the area so the odour does not linger. Odours can return if the underlay was soaked.</li>
  <li><strong>Ink and make-up:</strong> these can be stubborn. Test carefully before trying anything, or call a professional.</li>
</ul>
<p>Our <a class="inline" href="../services/stain-removal.html">stain removal service</a> covers all of these, as well as pet urine, vomit and odours.</p>

<h2>Preventing the next accident</h2>
<ul class="bul">
  <li>Serve red wine and dark drinks on hard floors, or from a tray, where you can</li>
  <li>Use sturdy, wide-based glasses, and keep full glasses away from the edge of tables</li>
  <li>Have a plan: tell guests where the cloths are, so spills get dealt with immediately</li>
  <li>Ask about a stain-protection treatment after a professional clean. It helps liquids sit on the surface for longer, which gives you more time to blot</li>
</ul>

<h2>Common myths about wine stains</h2>
<ul class="bul">
  <li><strong>"Pour white wine on it."</strong> It adds more liquid and does not reliably help.</li>
  <li><strong>"Cover it with salt."</strong> Salt can absorb a little liquid, but it can leave residue and does not remove the pigment.</li>
  <li><strong>"Use hot water."</strong> Heat can fix the stain into the fibres.</li>
  <li><strong>"Bleach will sort it out."</strong> Bleach can remove the carpet's colour as well as the stain.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>Does salt really remove red wine?</h3>
<p>Salt can absorb some liquid from a fresh spill, but it is not a reliable stain remover and can leave residue. Blotting and diluting with cold water works better.</p>
<h3>Can red wine be removed from a wool carpet?</h3>
<p>Often yes, but wool is delicate and sensitive to strong chemicals and heat. Gentle blotting and cold water are the safest start. For anything stubborn, a professional with experience in natural fibres is the sensible choice.</p>
<h3>What if the stain comes back after drying?</h3>
<p>This is called wicking, where wine deep in the carpet rises to the surface as it dries. It usually means some wine remained in the backing or underlay. A professional extraction clean can reach deeper than a cloth can.</p>
<h3>Can I use hydrogen peroxide on a red wine stain?</h3>
<p>Some people do, but it can bleach coloured carpets and should not be used on wool. If you decide to try it, test on a hidden area first. A gentler method is safer for most carpets.</p>
<h3>How long can a red wine stain be treated?</h3>
<p>The sooner the better, but older stains are not always permanent. Professional treatment can sometimes remove or reduce marks that have been there for weeks or months, although results depend on the fibre and what has been tried.</p>
<p>If a stain will not shift, <a class="inline" href="../contact.html">get in touch for a free, no-obligation quote</a>. We cover Bromsgrove, Birmingham and the West Midlands.</p>
`
  },
  {
    slug: "eco-friendly-cleaning-why-it-matters",
    image: "assets/photos/blog-eco.jpg",
    title: "Eco-Friendly Steam Cleaning: Why It's Better for Your Home",
    category: "Eco Cleaning",
    author: "The Ecologics Team",
    date: "2026-06-30",
    read: 7,
    excerpt: "What eco-friendly steam cleaning actually means, how it works, why it can be a better choice for homes with children and pets, and the questions to ask any cleaner before you book.",
    body: `
<p>"Eco-friendly" is a phrase that gets used a lot, and not always carefully. For a cleaning company it should mean something specific: how the work is done, what is used, and what is left behind in your home afterwards. This guide explains what eco-friendly steam cleaning is, why it matters, and what to look for when you are choosing a cleaner.</p>
<blockquote>In short: steam cleaning relies mainly on heat, water and suction to lift dirt out of carpets and fabric, so it needs far fewer harsh chemicals, and leaves far less residue behind, than many traditional methods.</blockquote>

<h2>What is steam cleaning?</h2>
<p>Steam cleaning, properly called hot-water extraction, works in three stages. A cleaning solution loosens the dirt. Hot water is then sprayed into the carpet or fabric under pressure to dislodge it. Finally, powerful suction pulls the water back out, taking the dirt with it. Heat is what does much of the work, which means the cleaning solution can be gentler.</p>

<h2>Why it matters in your home</h2>
<h3>Less chemical residue</h3>
<p>Strong detergents that are not fully rinsed out can stay in the carpet. That residue is sticky, so it attracts new dirt, and carpets cleaned this way can look grubby again quickly. A clean that rinses thoroughly leaves fewer traces behind.</p>
<h3>Better for children and pets</h3>
<p>Children and pets spend their time at floor level, and crawling babies and animals put their hands and paws everywhere. Using non-toxic, pet-safe products means you do not have to keep everyone out of the room for long, or worry about what they are touching.</p>
<h3>A fresher, less chemical-smelling home</h3>
<p>Heavily perfumed or solvent-based cleaners can leave a strong smell that lingers for days. A good eco-friendly clean should leave the room smelling neutral and fresh.</p>
<h3>A lighter footprint</h3>
<p>Fewer harsh chemicals going down the drain is better for the environment. Cleaning your carpets regularly also helps them last longer, which means fewer carpets and sofas end up in landfill.</p>

<h2>Does eco-friendly cleaning work as well?</h2>
<p>Yes, when it is done properly. The effectiveness comes from the process, not from the strength of the chemicals: hot water, the right solution for the fabric, enough agitation and strong extraction. Professional equipment makes a big difference. Domestic and rental machines have far less power.</p>
<p>It is also honest to say that no method works miracles. Very old, set-in stains, dye damage and wear cannot always be reversed, whatever method is used. A good cleaner will tell you what to expect before they start.</p>

<h2>What it is good for</h2>
<ul class="bul">
  <li><strong>Carpets</strong> in family homes, bedrooms and offices</li>
  <li><strong>Sofas and upholstered furniture,</strong> using fabric-safe, low-moisture methods</li>
  <li><strong>Rugs, curtains and mattresses,</strong> where gentler products are particularly important</li>
  <li><strong>Pet odours,</strong> where the aim is to neutralise the smell at source rather than mask it</li>
  <li><strong>End of tenancy and deep cleans,</strong> where a thorough and residue-free clean matters</li>
</ul>

<h2>Questions to ask any cleaner</h2>
<ul class="bul">
  <li><strong>What products do you use,</strong> and are they safe for children and pets?</li>
  <li><strong>What method do you use,</strong> and how much water is left in the carpet afterwards?</li>
  <li><strong>How long will it take to dry?</strong> A professional clean should usually dry within hours rather than days.</li>
  <li><strong>Are you insured?</strong> It is a reasonable thing to ask, and you should get a clear answer.</li>
  <li><strong>Do you give a quote before starting?</strong> Be wary of cleaners who will not.</li>
</ul>

<h2>How we work at Ecologics</h2>
<p>We use hot-water extraction with eco-friendly, non-toxic, pet-safe products. We inspect the carpet or fabric first, choose the gentlest effective method, and finish by grooming the pile and speeding up drying. We are fully insured and offer free, no-obligation quotes. You can read more on our <a class="inline" href="../services/carpet-cleaning.html">carpet cleaning</a> and <a class="inline" href="../services/upholstery-cleaning.html">upholstery cleaning</a> pages.</p>

<h2>What is actually in cleaning products?</h2>
<p>Most cleaning products are built from a few types of ingredient. Surfactants help water lift oil and dirt, solvents dissolve grease, builders soften water and boost cleaning, and fragrances add a smell. Strong products often rely on a lot of these, and on high concentrations. The trouble is that whatever is not rinsed away stays behind in the fabric.</p>
<p>An eco-friendly approach turns that around. Use only what is needed, choose products designed to be gentler on people and the environment, and rely on heat, water and extraction to do the work.</p>

<h2>Fragrance is not the same as clean</h2>
<p>It is common to think that a strong smell means a thorough clean, but a lot of that smell is simply added fragrance, and some people find it irritating. A properly clean room tends to smell of very little, or just fresh air. If your carpets smell strongly of perfume days after a clean, that is worth noticing.</p>

<h2>Spotting greenwashing</h2>
<p>Because "eco" and "green" are not tightly regulated words, it pays to be sceptical. Watch for:</p>
<ul class="bul">
  <li><strong>Vague claims</strong> such as "natural" or "eco" with nothing to back them up</li>
  <li><strong>"Chemical-free"</strong> claims. Everything, including water, is a chemical, so the phrase is meaningless. A better claim is "non-toxic" or "low-toxicity", with some explanation</li>
  <li><strong>No information</strong> about what is used or why</li>
  <li><strong>Green imagery</strong> (leaves and a pretty logo) instead of facts</li>
</ul>
<p>Good cleaners will happily tell you what they use and answer questions about it.</p>

<h2>Water use: an honest look</h2>
<p>Steam cleaning does use water, and being honest about that matters. A professional machine uses water efficiently by recovering most of what it sprays, and a single deep clean is more sustainable than replacing a carpet or sofa years early. Over a few years, looking after what you own tends to be the greener choice.</p>

<h2>Longer life means less waste</h2>
<p>Carpets, rugs and sofas are large and hard to recycle. Every year you add to the life of one is a year less of landfill, and a year before you have to buy another. Regular, gentle cleaning helps fabrics last, which is as much a part of "eco-friendly" as the products themselves.</p>

<h2>Who benefits most?</h2>
<ul class="bul">
  <li><strong>Families with babies and toddlers,</strong> who spend a lot of time on the floor</li>
  <li><strong>Pet owners,</strong> whose animals walk, lie and play on carpets and furniture</li>
  <li><strong>People with allergies or sensitivities,</strong> who may be bothered by strong cleaning smells</li>
  <li><strong>Offices and businesses,</strong> where staff and visitors share the same space. See our <a class="inline" href="../services/commercial-cleaning.html">commercial cleaning</a> service</li>
  <li><strong>Landlords and tenants,</strong> who want a thorough, residue-free result before handing over keys</li>
</ul>

<h2>A few eco-friendly habits for your own cleaning</h2>
<ul class="bul">
  <li>Use less product than you think you need, and rinse well</li>
  <li>Clean spills straight away so you do not need stronger products later</li>
  <li>Use microfibre cloths, which clean well with water alone on many surfaces</li>
  <li>Ventilate rooms rather than masking smells with sprays</li>
  <li>Never mix cleaning products. Some combinations, such as bleach with other cleaners, produce dangerous fumes</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>Is steam cleaning safe for babies and pets?</h3>
<p>With non-toxic, pet-safe products and proper extraction, yes. It is still sensible to keep young children and pets off the carpet until it is dry.</p>
<h3>Is steam cleaning suitable for wool carpets?</h3>
<p>Often, but wool needs care with temperature and products. A professional will adjust the method, and should test an inconspicuous area first.</p>
<h3>Does eco-friendly cleaning cost more?</h3>
<h3>Is eco-friendly cleaning always natural?</h3>
<p>Not necessarily. "Natural" and "safe" are different things. What matters is how a product behaves in your home and how it is used.</p>
<h3>How do I know a cleaner is really eco-friendly?</h3>
<p>Ask what products they use, and why they are chosen. A cleaner who can explain this in plain language is a good sign.</p>
<p>It does not have to. The price depends on the size of the job and the condition of the carpet, not on whether the products are gentle. <a class="inline" href="../contact.html">Ask for a free quote</a> and compare.</p>
`
  },
  {
    slug: "end-of-tenancy-cleaning-checklist",
    image: "assets/photos/blog-tenancy.jpg",
    title: "The Complete End of Tenancy Cleaning Checklist (Get Your Deposit Back)",
    category: "End of Tenancy",
    author: "The Ecologics Team",
    date: "2026-06-18",
    read: 7,
    excerpt: "A room-by-room end of tenancy cleaning checklist for tenants and landlords: what to clean, in what order, the areas that are most often missed, and how to document the result.",
    body: `
<p>Moving out is stressful enough without worrying about your deposit. Cleaning is one of the most common reasons for disputes at the end of a tenancy, and it is usually the details that are missed, rather than the obvious jobs. This checklist walks through the property room by room, in a sensible order.</p>
<blockquote>The standard to aim for: the property should be returned in the same condition as at the start of the tenancy, allowing for fair wear and tear. Your tenancy agreement and check-in inventory are your reference points.</blockquote>

<h2>Before you start</h2>
<ul class="bul">
  <li><strong>Read your tenancy agreement</strong> for cleaning obligations, and any wording about carpets or professional cleaning.</li>
  <li><strong>Find your check-in inventory.</strong> Compare the starting condition with the way the property looks now.</li>
  <li><strong>Gather supplies</strong> or book a professional clean. Do not forget ladders or a step stool for high surfaces.</li>
  <li><strong>Clear the property of belongings first.</strong> It is much easier to clean empty rooms.</li>
  <li><strong>Work top to bottom,</strong> and do carpets last.</li>
</ul>

<h2>Kitchen</h2>
<p>The kitchen is where most deductions come from.</p>
<ul class="bul">
  <li>Oven, hob, grill and extractor: remove grease and burnt-on food, and clean the racks and trays</li>
  <li>Inside and outside of the fridge and freezer: defrost, wipe, and leave doors ajar</li>
  <li>Inside and outside of cupboards and drawers, including handles</li>
  <li>Microwave, dishwasher and washing machine: filters, seals, and detergent drawers</li>
  <li>Sink, taps and drain: remove limescale and residue</li>
  <li>Worktops, splashbacks, tiles and grout</li>
  <li>Floor, including under and behind appliances if you can move them</li>
</ul>

<h2>Bathroom</h2>
<ul class="bul">
  <li>Descale the bath, shower, taps and showerhead</li>
  <li>Clean the toilet: inside the bowl, under the rim, the cistern and the base</li>
  <li>Wash tiles and grout, and treat any mould or mildew</li>
  <li>Clean mirrors, cabinets and shelves, inside and out</li>
  <li>Clean the extractor fan cover and any vents</li>
  <li>Wash the floor and the edges where it meets the wall</li>
</ul>

<h2>Bedrooms and living areas</h2>
<ul class="bul">
  <li>Dust ceilings, light fittings, picture rails and corners for cobwebs</li>
  <li>Wipe skirting boards, door frames, doors and light switches</li>
  <li>Clean inside wardrobes and built-in storage</li>
  <li>Wipe radiators, including behind and between the fins</li>
  <li>Clean windows, sills and frames, inside, and outside where you can safely reach</li>
  <li>Remove marks from walls where it is possible to do so without damaging the paint</li>
</ul>

<h2>Floors and carpets</h2>
<p>Carpets are usually cleaned last, once everything else is finished. Vacuum thoroughly and treat any stains. Many landlords and letting agents expect carpets to be professionally cleaned, and some tenancy agreements say so explicitly, so check yours. A professional hot-water extraction clean also helps remove the odours and dust that build up over a tenancy. Keep any receipt as proof. See our <a class="inline" href="../services/carpet-cleaning.html">carpet cleaning</a> and <a class="inline" href="../services/end-of-tenancy.html">end of tenancy cleaning</a> pages.</p>

<h2>The areas most often missed</h2>
<ul class="bul">
  <li>The top of kitchen cupboards and wardrobes</li>
  <li>Inside the oven door, between the glass panes</li>
  <li>Washing machine drawer and the door seal</li>
  <li>Grout lines and shower screens</li>
  <li>Light switches, door handles and plug sockets</li>
  <li>Window tracks and sills</li>
  <li>Balconies, patios, outbuildings and communal areas that you were responsible for</li>
</ul>

<h2>Document everything</h2>
<p>When you have finished, photograph every room, including the inside of the oven and the carpets. Date-stamped photos can be valuable if there is a disagreement later. Ask for a joint check-out inspection if you can, and keep a copy of any report.</p>

<h2>Cleaning yourself or booking a professional</h2>
<p>You can certainly do an end of tenancy clean yourself, but it takes time, and it is easy to run short on the last day of a move. A professional team will work through the property methodically and bring the right equipment for ovens, carpets and limescale. If you decide to book, make sure you agree exactly what is included, and keep the receipt.</p>

<h2>A simple timeline</h2>
<h3>Two weeks before you leave</h3>
<ul class="bul">
  <li>Re-read your tenancy agreement and inventory</li>
  <li>Decide whether you will clean yourself or book a professional</li>
  <li>Book any carpet cleaning, as slots fill up at busy times of year</li>
  <li>Start decluttering, so that rooms are easier to clean</li>
</ul>
<h3>The week before</h3>
<ul class="bul">
  <li>Deep clean the oven, fridge and other appliances</li>
  <li>Clean inside cupboards, wardrobes and drawers as you empty them</li>
  <li>Descale taps, showers and the kettle</li>
  <li>Wash curtains, if they belong to you, and any soft furnishings that are part of the property</li>
</ul>
<h3>On moving-out day</h3>
<ul class="bul">
  <li>Remove the last of your belongings and rubbish</li>
  <li>Dust, wipe and clean from top to bottom</li>
  <li>Vacuum floors and carpets, and mop hard floors</li>
  <li>Take final photographs and meter readings</li>
  <li>Return keys, and keep proof that you did</li>
</ul>

<h2>Walls, marks and paint</h2>
<p>Walls often pick up scuffs, fingerprints and the marks left by furniture or picture hooks. Gently wipe marks with a barely damp cloth and a little mild detergent, testing in a corner first. Be careful with matt paint, which can mark easily if you rub. Do not repaint unless your landlord agrees. If you have put up shelves or pictures, check your agreement on whether you need to repair holes.</p>

<h2>Gardens, balconies and outbuildings</h2>
<p>If you have exclusive use of a garden, balcony or shed, make sure it is tidy. Remove rubbish, sweep patios and paths, clear any pet waste, and make sure bins are empty. These areas are often forgotten until the last minute.</p>

<h2>Deposits and what to expect</h2>
<p>In England, deposits for assured shorthold tenancies must be held in a government-approved protection scheme. If you and your landlord disagree about deductions, the scheme provides a free dispute resolution service. The more evidence you have, such as photos, the inventory and receipts, the stronger your position. For the details that apply to you, check the guidance on gov.uk or from your protection scheme.</p>
<p>The most common reasons for deductions are dirty ovens, stained or smelly carpets, limescale in bathrooms, and general lack of cleaning. Those are exactly the areas to focus on.</p>

<h2>DIY or professional: which is better?</h2>
<ul class="bul">
  <li><strong>DIY</strong> saves money if you have the time, the tools and a manageable property. The risk is running out of time or energy on the last day.</li>
  <li><strong>Professional</strong> costs more, but it is faster, uses proper equipment for ovens, carpets and limescale, and leaves you free to focus on moving.</li>
  <li><strong>A mixture</strong> works well for many people: clean the property yourself and book a professional for the carpets and perhaps the oven, which tend to be the hardest jobs.</li>
</ul>

<h2>For landlords and letting agents</h2>
<p>Cleaning between tenancies helps a property rent faster and makes check-in inspections smoother. A consistent clean, with before and after photographs, protects you and gives the next tenant the right start. We can also help with commercial and rental properties, so see our <a class="inline" href="../services/commercial-cleaning.html">commercial cleaning</a> page.</p>

<h2>Frequently asked questions</h2>
<h3>Do I have to get the carpets professionally cleaned?</h3>
<p>It depends on your tenancy agreement. Some require it, and others only require that the property is returned clean. If you are unsure, ask your landlord or letting agent, and keep proof if you do book a clean.</p>
<h3>What is fair wear and tear?</h3>
<p>This means the normal ageing of a property through everyday use, such as slightly worn carpet in a hallway. It is different from damage or dirt that a tenant should have cleaned. Deposit protection schemes publish guidance on the difference.</p>
<h3>Should I clean before or after my belongings go?</h3>
<p>After. Clean empty rooms, so that nothing gets dirty again while you move out.</p>
<h3>Do I need to clean the oven?</h3>
<p>Yes. It is one of the most common causes of deductions. Clean the racks, trays, door and glass, as well as the inside of the oven.</p>
<h3>What if the property was not clean when I moved in?</h3>
<p>Your check-in inventory and photographs are the evidence. You are generally expected to return the property in the same condition, allowing for fair wear and tear.</p>
<h3>Can I do a part-clean and book a professional for the rest?</h3>
<p>Yes. Many tenants clean the property themselves and book a professional for carpets, which is a sensible way to balance cost and effort.</p>
<p>If you would rather hand it over, <a class="inline" href="../contact.html">ask us for a free, no-obligation quote</a>. We cover Bromsgrove, Birmingham and the West Midlands.</p>
`
  },
  {
    slug: "keep-upholstery-looking-new",
    image: "assets/photos/svc-upholstery-cleaning.jpg",
    title: "5 Ways to Keep Your Upholstery Looking New for Longer",
    category: "Upholstery",
    author: "The Ecologics Team",
    date: "2026-06-02",
    read: 7,
    excerpt: "Five habits that keep sofas and chairs fresh for years: regular vacuuming, rotating cushions, treating spills fast, protecting from sun and body oils, and knowing your fabric care code.",
    body: `
<p>A good sofa is one of the biggest purchases in a home, and also one of the hardest-working. It is sat on, slept on, leaned against and spilled on every day. With a few simple habits you can keep it looking fresh far longer, and avoid replacing it before you need to.</p>
<blockquote>The five habits: vacuum regularly, rotate and plump cushions, deal with spills quickly, protect the fabric from sun and body oils, and follow the care code on the label.</blockquote>

<h2>1. Vacuum regularly</h2>
<p>Dust, crumbs and grit settle into the seams and under the cushions. If they are left there, they act like sandpaper, wearing the fabric every time someone sits down. Vacuum the whole sofa once a week using the soft brush attachment, including under and between the cushions, and the sides and back. Pet owners will want to do it more often.</p>

<h2>2. Rotate and plump the cushions</h2>
<p>Most people have a favourite spot, and that cushion ends up flattened, shiny and worn long before the others. Turn and swap loose cushions every week or two, and plump back cushions regularly. This spreads wear evenly and helps the sofa keep its shape. Always follow the manufacturer's guidance for cushions that are not reversible.</p>

<h2>3. Treat spills quickly</h2>
<p>With fabric, the first minute counts for more than the best cleaning product.</p>
<ul class="bul">
  <li><strong>Blot, do not rub.</strong> Press a clean, dry white cloth onto the spill to absorb it.</li>
  <li><strong>Work from the outside in</strong> to stop the stain spreading.</li>
  <li><strong>Avoid soaking.</strong> Too much water can reach the padding and leave rings or a damp smell.</li>
  <li><strong>Test first.</strong> Try any cleaning solution on a hidden area before you use it.</li>
  <li><strong>Avoid harsh household products,</strong> which can discolour fabric.</li>
</ul>
<p>For tougher marks, read about our <a class="inline" href="../services/stain-removal.html">stain removal service</a>.</p>

<h2>4. Protect it from sun, body oils and pets</h2>
<ul class="bul">
  <li><strong>Sunlight</strong> fades colours over time. If your sofa sits by a window, use curtains or blinds during the brightest part of the day.</li>
  <li><strong>Body oils and sweat</strong> darken fabric where we rest our heads and arms. Throws or washable arm covers help a lot, and they are easy to launder.</li>
  <li><strong>Pets</strong> bring hair, dander and claws. A washable throw on their favourite spot protects the fabric underneath.</li>
  <li><strong>Heat sources</strong> such as radiators and fires can dry out and damage some materials, particularly leather.</li>
</ul>

<h2>5. Know your fabric code, and clean it properly</h2>
<p>Most upholstery has a care label, usually under a cushion, with a letter code. It tells you which cleaning methods are safe:</p>
<ul class="bul">
  <li><strong>W</strong> means water-based cleaners are suitable.</li>
  <li><strong>S</strong> means solvent-based dry cleaners only.</li>
  <li><strong>WS</strong> means either method can be used.</li>
  <li><strong>X</strong> means vacuum only. No liquids at all.</li>
</ul>
<p>Using the wrong method is one of the most common causes of permanent damage, so check the label before you try anything. If it is missing, or you are not sure, ask a professional.</p>

<h2>How often should upholstery be professionally cleaned?</h2>
<p>As a guide, every 12 to 24 months for a typical household, and more often for sofas that are heavily used, or in homes with pets, young children or allergies. A deep clean lifts the body oils, dust and dirt that vacuuming cannot reach, and restores colour and texture. Our fabric-safe, low-moisture steam method means sofas and chairs are usually dry within a few hours. See our <a class="inline" href="../services/upholstery-cleaning.html">upholstery cleaning service</a>.</p>

<h2>What about leather?</h2>
<p>Leather needs a different approach. Dust it regularly, wipe spills straight away, keep it away from heat and direct sun, and use a conditioner suitable for your type of leather. We offer leather cleaning and conditioning, and we are happy to advise.</p>

<h2>A quick guide to common upholstery fabrics</h2>
<ul class="bul">
  <li><strong>Cotton and linen:</strong> soft and breathable, but they absorb liquid quickly and can shrink or mark. Always check the label, and test first.</li>
  <li><strong>Polyester and microfibre:</strong> hard-wearing and often easier to look after, though oily marks can be tricky.</li>
  <li><strong>Velvet:</strong> beautiful, but it crushes and marks easily. It usually needs careful, low-moisture cleaning, and often a specific method.</li>
  <li><strong>Wool and wool blends:</strong> durable and naturally resilient, but they are sensitive to heat and strong chemicals.</li>
  <li><strong>Chenille and textured weaves:</strong> can snag on claws and rough handling, and can hold dust in the texture.</li>
  <li><strong>Leather and faux leather:</strong> need their own care routine and should never be treated like fabric.</li>
</ul>

<h2>A guide for pet owners</h2>
<p>Pets love sofas, and sofas show it. Hair, dander, claws and the occasional accident all take their toll.</p>
<ul class="bul">
  <li>Use a rubber glove or a pet-hair brush to lift fur before vacuuming</li>
  <li>Give your pet their own washable blanket on the sofa, and wash it often</li>
  <li>Trim claws to reduce snags</li>
  <li>Deal with accidents quickly, by blotting and then treating the area so the smell does not linger</li>
  <li>Have the sofa deep cleaned more often, to remove oils and odours</li>
</ul>

<h2>Common problems and what helps</h2>
<h3>Water rings and marks</h3>
<p>These often appear after someone has spot cleaned with too much water. The mark is the edge of the wet area, where dirt has been pushed out and dried. The fix is usually to clean the whole panel evenly, rather than just the spot.</p>
<h3>Greasy arms and headrests</h3>
<p>Body oils and hair products darken fabric over time. Regular vacuuming and throws help, and a professional clean removes the build-up that is already there.</p>
<h3>Odours</h3>
<p>Smells from pets, food, smoke or damp sit in the padding as well as the fabric. Airing the room and sunlight help, but a steam clean that reaches into the fabric is more effective. See our <a class="inline" href="../services/stain-removal.html">stain and odour removal</a> work.</p>
<h3>Flattened or faded cushions</h3>
<p>Rotating cushions helps prevent this. Once fabric has faded, though, cleaning will not restore the original colour, so protecting it early is worth the effort.</p>

<h2>A simple refresh routine between cleans</h2>
<ul class="bul">
  <li>Weekly: vacuum the surface, seams and under the cushions</li>
  <li>Weekly or fortnightly: rotate and plump the cushions, and wash throws and covers</li>
  <li>Monthly: take a look at the arms, headrest and other hotspots, and spot clean marks early</li>
  <li>Each season: open windows and let the room air properly</li>
</ul>

<h2>Dining chairs, headboards and other soft furnishings</h2>
<p>Do not forget the other upholstered items in your home. Dining chair seats collect food and drink, headboards collect hair oils, and armchairs are used just as much as sofas. They can all be included in a professional clean, usually at the same visit.</p>

<h2>Frequently asked questions</h2>
<h3>Can you clean any fabric?</h3>
<p>We clean most common fabrics including cotton, polyester, microfibre and wool blends, and we offer leather cleaning. We always test first and choose the safest method for the label code.</p>
<h3>Will cleaning remove old stains?</h3>
<p>We can often reduce or remove them, but very old or set-in stains are harder, and we will be honest about what is realistic before we start.</p>
<h3>How soon can I use my sofa afterwards?</h3>
<p>Most upholstery is touch-dry within a couple of hours and fully dry the same day, depending on the fabric and ventilation.</p>
<h3>Can I use a carpet cleaner on my sofa?</h3>
<p>Only if the label allows it, and if the machine has an upholstery tool and strong suction. Many household carpet machines leave too much water in the padding.</p>
<h3>Is it worth cleaning an old sofa?</h3>
<p>Often, yes. A clean can freshen the fabric and remove odours, which may extend the life of a sofa that is otherwise in good condition. It cannot repair tears or worn padding.</p>
<p>Curious about your own sofa? <a class="inline" href="../contact.html">Request a free, no-obligation quote</a>. We cover Bromsgrove, Birmingham and the West Midlands.</p>
`
  },
  {
    slug: "how-long-does-carpet-take-to-dry",
    image: "assets/photos/svc-rug-cleaning.jpg",
    title: "How Long Does Carpet Take to Dry After Steam Cleaning?",
    category: "Carpet Care",
    author: "The Ecologics Team",
    date: "2026-05-20",
    read: 7,
    excerpt: "Most carpets are dry within a few hours after steam cleaning, but not always. Here is what affects drying time, how to speed it up and what to do if your carpet still feels damp.",
    body: `
<p>One of the first questions people ask before booking a carpet clean is: how long until I can use the room again? It is a fair question. Nobody wants to tiptoe around a damp carpet for days. The good news is that professional hot-water extraction leaves carpets far drier than most people expect.</p>
<blockquote>The short answer: with professional hot-water extraction, carpets are usually dry in around 4 to 6 hours. Thicker carpets, humid weather and poor ventilation can add to that.</blockquote>

<h2>Why professional cleaning dries faster</h2>
<p>The key is extraction. Steam cleaning does not just wet the carpet. A powerful machine sprays hot water into the pile and then pulls most of it straight back out, along with the dirt. The more moisture that is removed on the day, the less there is left to dry.</p>
<p>DIY and rental machines usually have far less suction, so they leave much more water behind. That is why a rental clean can leave carpet damp for a day or more. After our own cleans we also groom the pile and use air movers to speed up drying.</p>

<h2>What affects drying time</h2>
<ul class="bul">
  <li><strong>Carpet type and pile.</strong> Short, tight synthetic carpets dry more quickly than deep, dense or wool carpets, which hold more moisture.</li>
  <li><strong>The underlay.</strong> Thick or foam underlay can slow drying if water reaches it.</li>
  <li><strong>Ventilation.</strong> Fresh air carries moisture away. A closed room dries much slower than one with open windows.</li>
  <li><strong>Humidity and temperature.</strong> Dry, warm conditions help. Damp, cold weather slows everything down.</li>
  <li><strong>How dirty the carpet was.</strong> Heavily soiled carpets may need more passes, which means more moisture in the pile.</li>
  <li><strong>Room size and heating.</strong> A large room with heating on dries faster than a cold, enclosed space.</li>
</ul>

<h2>How to speed up drying</h2>
<ul class="bul">
  <li><strong>Open windows and doors</strong> if the weather allows, to keep air moving.</li>
  <li><strong>Use fans.</strong> Placing a fan or two to blow across the carpet makes a big difference.</li>
  <li><strong>Turn on the heating</strong> or a dehumidifier in cold or damp weather.</li>
  <li><strong>Keep foot traffic off</strong> until the surface is touch-dry. Walking on damp carpet pushes dirt back in.</li>
  <li><strong>Remove shoes</strong> and use clean socks or bare feet if you have to walk across the room.</li>
  <li><strong>Put furniture back with care.</strong> Wait until the carpet is dry, or place foil or plastic tabs under furniture legs to prevent rust or colour transfer.</li>
</ul>

<h2>Is it normal for carpet to feel damp?</h2>
<p>Yes. A slightly cool, damp feeling in the first few hours is perfectly normal after a deep clean, particularly in thicker carpet. If you press a clean white cloth onto the carpet and it comes away dry, it is ready to walk on.</p>

<h2>When to be concerned</h2>
<p>A carpet that is still properly wet after 24 hours deserves attention. If carpet stays wet for too long, it can develop a musty smell. Use fans and ventilation, and if it does not improve, contact the cleaner who did the work. Tell them what you have noticed, because they will want to put it right.</p>

<h2>Things that do not help</h2>
<ul class="bul">
  <li><strong>Using a hair dryer or heater very close to the carpet.</strong> It can scorch fibres and is not an efficient way to dry a whole room.</li>
  <li><strong>Covering the carpet</strong> with plastic or towels. This traps moisture.</li>
  <li><strong>Walking on it with shoes</strong> to "check". This can leave marks and spread any moisture.</li>
</ul>

<h2>A typical drying timeline</h2>
<p>Every home and every carpet is different, but this gives you a rough idea of what to expect after a professional clean.</p>
<ul class="bul">
  <li><strong>Straight after cleaning:</strong> the carpet feels cool and slightly damp, but not wet. There should be no squelching underfoot.</li>
  <li><strong>After 1 to 2 hours:</strong> the surface starts to feel drier, particularly with good airflow.</li>
  <li><strong>After 4 to 6 hours:</strong> most carpets are dry or very nearly dry.</li>
  <li><strong>The next morning:</strong> fully dry in nearly all cases, even for thicker carpets in cooler conditions.</li>
</ul>

<h2>Seasonal differences</h2>
<h3>In summer</h3>
<p>Warm, dry air means faster drying. Open windows and a little breeze often get you there in a few hours.</p>
<h3>In winter</h3>
<p>Cold and damp air slows drying down. Turn the heating on, use fans, and use a dehumidifier if you have one. Keeping windows closed in damp weather can actually make things slower.</p>

<h2>Preparing before the clean to help drying</h2>
<ul class="bul">
  <li><strong>Clear the room</strong> as much as you can, so the cleaner can reach every area and air can circulate.</li>
  <li><strong>Vacuum first</strong> if you are able to. Less loose soil means less cleaning, and less moisture needed.</li>
  <li><strong>Plan your day.</strong> Booking a morning appointment gives the carpet the whole day to dry before the evening.</li>
  <li><strong>Make sure the heating works</strong> and the windows can be opened.</li>
  <li><strong>Tell the cleaner</strong> about anything unusual, such as underfloor heating, a carpet that is laid over a damp area, or a pet that needs to stay in the room.</li>
</ul>

<h2>Why over-wetting causes problems</h2>
<p>When carpet is soaked, water can travel down into the underlay and the backing. These areas dry slowly. Moisture that stays for too long can cause a musty smell, and in some cases marks that reappear on the surface as it dries. A professional machine with strong suction avoids most of this by removing as much water as it puts in.</p>

<h2>How can you tell if a carpet is fully dry?</h2>
<ul class="bul">
  <li>Press a clean white cloth or paper towel firmly onto the carpet. If it comes away dry, the surface is dry.</li>
  <li>Press your hand flat onto the carpet for a few seconds. It should not feel cool or damp.</li>
  <li>Check thick areas, such as along walls and under furniture, which dry more slowly.</li>
  <li>Sniff for any musty smell, which suggests moisture is still present underneath.</li>
</ul>

<h2>Room-by-room drying tips</h2>
<ul class="bul">
  <li><strong>Stairs:</strong> keep them clear if you can, and use the other staircase or avoid them entirely until dry.</li>
  <li><strong>Bedrooms:</strong> ventilate well. Close the door on any room you do not want people using.</li>
  <li><strong>Hallways:</strong> these are used all the time, so consider cleaning when people are out for the day.</li>
  <li><strong>Basements and rooms with little airflow:</strong> use dehumidifiers or fans to help.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>Can I sleep in the room the same day?</h3>
<p>In most cases the carpet will be dry or nearly dry by evening. For a bedroom, ventilate as much as possible, and if the carpet is still damp it may be more comfortable to wait.</p>
<h3>Will pets be safe on the carpet?</h3>
<p>Our cleaning solutions are non-toxic and pet-safe. Even so, it is sensible to keep pets off damp carpet until it has dried, partly to avoid paw prints and partly to prevent them licking damp fibres.</p>
<h3>Does wool carpet take longer to dry?</h3>
<p>Often it does. Wool holds more moisture than most synthetic fibres, so we adjust the method and use low-moisture techniques where we can.</p>
<h3>Can I put furniture back straight away?</h3>
<p>It is best to wait until the carpet is dry. If you must move furniture back sooner, use foil or plastic tabs under the legs, and avoid placing anything heavy on damp carpet.</p>
<h3>Why does my carpet smell after cleaning?</h3>
<p>A faint damp smell can be normal while it dries and usually fades within a few hours. If it persists after a day, increase ventilation and contact your cleaner.</p>
<h3>Does underfloor heating help or hurt?</h3>
<p>It can speed up drying, but tell your cleaner about it in advance so they can plan the cleaning method for your carpet and underlay.</p>
<p>Want to know what to expect for your own carpets? See our <a class="inline" href="../services/carpet-cleaning.html">carpet cleaning service</a> or <a class="inline" href="../contact.html">ask for a free quote</a>.</p>
`
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
/* Seed posts have their own static pages (blog/<slug>.html) so search & AI can index them;
   posts created in the admin CMS still open via post.html?id=<slug>. */
function postUrl(p, P) {
  return SEED_POSTS.some(sp => sp.slug === p.slug)
    ? P("blog/" + p.slug + ".html")
    : P("post.html") + "?id=" + encodeURIComponent(p.slug);
}
function getPostBySlug(slug) { return getAllPosts().find(p => p.slug === slug); }

function fmtDate(iso) {
  try { return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }
  catch (e) { return iso; }
}

const POST_ICONS = {
  "Carpet Care": "rug", "Stain Removal": "spray", "Eco Cleaning": "leaf",
  "End of Tenancy": "key", "Upholstery": "sofa", "Commercial": "building",
  "Deep Cleaning": "home", "Rug Cleaning": "sparkle", "Curtain Care": "bed",
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
      <a href="${postUrl(p, P)}" class="post-thumb" aria-label="${p.title}">
        <span class="cat">${p.category}</span>
        ${p.image ? `<img class="photo" src="${P(p.image)}" alt="${p.title}" loading="lazy">` : iconFor(p.category)}
      </a>
      <div class="post-body">
        <div class="post-meta"><span>${fmtDate(p.date)}</span><span>${p.read || 5} min read</span></div>
        <h3><a href="${postUrl(p, P)}">${p.title}</a></h3>
        <p>${p.excerpt}</p>
        <span class="svc-link" aria-hidden="true">Read article ${window.ESC.ICON.arrow}</span>
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
  const slug = params.get("id") || document.body.getAttribute("data-slug");
  const post = slug && getPostBySlug(slug);
  const P = (window.ESC && window.ESC.P) || (x => x);

  if (!post) {
    mount.innerHTML = `<div class="wrap section center"><h1 class="h-lg">Article not found</h1>
      <p class="lead mt-2">That post may have moved. <a class="inline" href="${P('blog.html')}">Back to the blog</a>.</p></div>`;
    return;
  }
  if (!document.body.getAttribute("data-slug")) document.title = `${post.title} — Ecologics Cleaning`;

  // related
  const related = getAllPosts().filter(p => p.slug !== post.slug).slice(0, 3);
  const relHtml = related.map(p => `
    <article class="post-card" data-reveal>
      <a href="${postUrl(p, P)}" class="post-thumb"><span class="cat">${p.category}</span>${p.image ? `<img class="photo" src="${P(p.image)}" alt="${p.title}" loading="lazy">` : iconFor(p.category)}</a>
      <div class="post-body">
        <div class="post-meta"><span>${fmtDate(p.date)}</span><span>${p.read||5} min read</span></div>
        <h3><a href="${postUrl(p, P)}">${p.title}</a></h3>
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
