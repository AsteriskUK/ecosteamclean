/* =========================================================
   EcoSteam Clean — Admin CMS
   PIN-gated. Manage blog posts + view quote leads.
   All data lives in localStorage (self-contained, no server).
   ========================================================= */

const ADMIN_PIN = "2580"; // change me
const SESSION_KEY = "esc_admin_ok";

/* ---------- Auth ---------- */
function isAuthed() { return sessionStorage.getItem(SESSION_KEY) === "1"; }
function login(pin) {
  if (pin === ADMIN_PIN) { sessionStorage.setItem(SESSION_KEY, "1"); return true; }
  return false;
}
function logout() { sessionStorage.removeItem(SESSION_KEY); location.reload(); }

/* ---------- Slug ---------- */
function slugify(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 70);
}

/* ---------- Posts CRUD (localStorage) ---------- */
function loadPosts() {
  try { return JSON.parse(localStorage.getItem("esc_posts") || "[]"); } catch (e) { return []; }
}
function savePosts(arr) { localStorage.setItem("esc_posts", JSON.stringify(arr)); }

function upsertPost(post) {
  const posts = loadPosts();
  const idx = posts.findIndex(p => p.slug === post.slug);
  if (idx >= 0) posts[idx] = post; else posts.unshift(post);
  savePosts(posts);
}
function deletePost(slug) {
  savePosts(loadPosts().filter(p => p.slug !== slug));
}

/* ---------- Leads ---------- */
function loadLeads() {
  try { return JSON.parse(localStorage.getItem("esc_leads") || "[]"); } catch (e) { return []; }
}
function saveLeads(arr) { localStorage.setItem("esc_leads", JSON.stringify(arr)); }
function setLeadStatus(id, status) {
  const leads = loadLeads(); const l = leads.find(x => x.id === id); if (l) l.status = status; saveLeads(leads);
}
function deleteLead(id) { saveLeads(loadLeads().filter(l => l.id !== id)); }

/* Simple text -> HTML (double newline = paragraph) */
function textToHtml(text) {
  if (/<[a-z][\s\S]*>/i.test(text)) return text; // already HTML
  return text.split(/\n{2,}/).map(p => `<p>${p.trim().replace(/\n/g, "<br>")}</p>`).join("\n");
}

function fmtDate(iso) {
  try { return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }); }
  catch (e) { return iso; }
}
function fmtDateTime(iso) {
  try { return new Date(iso).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }); }
  catch (e) { return iso; }
}

window.ESC_ADMIN = {
  isAuthed, login, logout, slugify, loadPosts, savePosts, upsertPost, deletePost,
  loadLeads, setLeadStatus, deleteLead, textToHtml, fmtDate, fmtDateTime,
  categories: ["Carpet Care", "Stain Removal", "Eco Cleaning", "End of Tenancy", "Upholstery", "Deep Cleaning", "Rug Cleaning", "Commercial"],
};
