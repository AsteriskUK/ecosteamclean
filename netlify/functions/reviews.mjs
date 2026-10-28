/* Live Google reviews for the homepage, straight from the Google Places API (New).
   No third-party widget, no subscription. Needs two Netlify environment variables:
     GOOGLE_PLACES_API_KEY   (required)  - a Google Cloud API key restricted to "Places API (New)"
     GOOGLE_PLACE_ID         (optional)  - found automatically from the business name if omitted
   The response is cached at Netlify's edge for 24h, so Google is called about once a day. */
let memo = null; // { at, body } - warm-instance cache
const DAY = 24 * 60 * 60 * 1000;
const QUERY = "Ecologics Cleaning Solutions Limited Bromsgrove";

async function findPlaceId(key) {
  const r = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": key, "X-Goog-FieldMask": "places.id" },
    body: JSON.stringify({ textQuery: QUERY, regionCode: "GB" }),
  });
  if (!r.ok) throw new Error("search " + r.status);
  const j = await r.json();
  if (!j.places || !j.places[0]) throw new Error("place not found");
  return j.places[0].id;
}

export default async () => {
  const json = (obj, status = 200, cache = "no-store") =>
    new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", "Cache-Control": cache } });
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return json({ error: "not_configured" }, 503);
  if (memo && Date.now() - memo.at < DAY) return json(memo.body, 200, "public, max-age=3600, s-maxage=86400");
  try {
    const id = process.env.GOOGLE_PLACE_ID || (await findPlaceId(key));
    const r = await fetch(`https://places.googleapis.com/v1/places/${id}?languageCode=en-GB`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews" },
    });
    if (!r.ok) throw new Error("details " + r.status);
    const p = await r.json();
    const body = {
      rating: p.rating || null,
      count: p.userRatingCount || null,
      url: p.googleMapsUri || null,
      reviews: (p.reviews || []).map((v) => ({
        rating: v.rating,
        text: (v.text && v.text.text) || (v.originalText && v.originalText.text) || "",
        when: v.relativePublishTimeDescription || "",
        author: (v.authorAttribution && v.authorAttribution.displayName) || "Google user",
        authorUrl: (v.authorAttribution && v.authorAttribution.uri) || null,
        photo: (v.authorAttribution && v.authorAttribution.photoUri) || null,
      })),
    };
    memo = { at: Date.now(), body };
    return json(body, 200, "public, max-age=3600, s-maxage=86400");
  } catch (e) {
    return json({ error: "upstream", detail: String(e.message || e) }, 502);
  }
};

export const config = { path: "/api/reviews" };
