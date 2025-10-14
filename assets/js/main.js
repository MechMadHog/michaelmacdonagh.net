/* /assets/js/main.js */

/* ---- Year in footer */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== Tag labels (single source of truth) ===== */
const TAG_LABELS = {
  js: "JS",
  html: "HTML",
  css: "CSS",
  design: "Design",
  ui: "UI",
  tool: "Tool",
  game: "Game",
  art: "CSS Art",
  music: "Music",
  sports: "Sports",
  regex: "Regex",
  finance: "Finance",
  math: "Math",
  education: "Education",
  parody: "Parody",
  retro: "Retro",
  starwars: "Star Wars",
  skate: "Skate",
  docs: "Docs",
  health: "Health",
  food: "Food",
  cyberpunk: "Cyberpunk",
};

/* TIP: add new items to the END; we reverse below to show latest first. */
const ALL_PROJECTS = [
  /* === Responsive Web Design (20) === */
  { title:"Personal Portfolio Webpage", thumb: "/assets/img/thumbs/fcc-rwd-5.png", subtitle:"Responsive Web Design - Final", blurb:"Pulled everything together: grid, responsive, sticky nav, glow effects.", href:"https://codepen.io/Mike-MacDonagh/pen/bNVOrxK", repo:null, tags:["html","css","ui"] },
  { title:"What Kind of Metal Head Are You?", thumb: "/assets/img/thumbs/fcc-rwd-1.png", subtitle:"Survey Form", blurb:"Semantic form structure, accessible labels, validation.", href:"https://codepen.io/Mike-MacDonagh/pen/ByoZwao", repo:null, tags:["html","css","ui"] },
  { title:"Stoic Philosophers Photo App", thumb: "/assets/img/thumbs/fcc-rwd-1.1.png", subtitle:"Cat Photo App → themed", blurb:"Styled image app; groundwork for personal theming.", href:"https://codepen.io/Mike-MacDonagh/pen/yyYMrMM", repo:null, tags:["html","css","ui"] },
  { title:"Mac’s Wrap Shack", thumb: "/assets/img/thumbs/fcc-rwd-1.2.png", subtitle:"Café Menu → Burrito Bar", blurb:"Structured a realistic menu with clean CSS styling.", href:"https://codepen.io/Mike-MacDonagh/pen/raOybGY", repo:null, tags:["html","css","ui","food"] },
  { title:"Colored Markers Set", thumb: "/assets/img/thumbs/fcc-rwd-1.3.png", subtitle:"Colored Markers → expanded", blurb:"Gradients, shadows, CSS styling basics.", href:"https://codepen.io/Mike-MacDonagh/pen/EaVmymK", repo:null, tags:["html","css","art"] },
  { title:"Replicant Registration", thumb: "/assets/img/thumbs/fcc-rwd-1.4.png", subtitle:"Registration Form → Blade Runner", blurb:"Thematic forms with consistent brand and accessibility.", href:"https://codepen.io/Mike-MacDonagh/pen/azvwyQq", repo:null, tags:["html","css","ui","cyberpunk"] },
  { title:"Rodney Mullen – The Godfather of Skate", thumb: "/assets/img/thumbs/fcc-rwd-2.png", subtitle:"Tribute Page", blurb:"Strong typographic rhythm, imagery, and hierarchy.", href:"https://codepen.io/Mike-MacDonagh/pen/JoYWqdV", repo:null, tags:["html","css","design","skate"] },
  { title:"Mondrian Grid", thumb: "/assets/img/thumbs/fcc-rwd-2.1.png", subtitle:"Painting → CSS Grid", blurb:"Minimalist grid composition in pure CSS.", href:"https://codepen.io/Mike-MacDonagh/pen/pvjwYVY", repo:null, tags:["html","css","art"] },
  { title:"Skateboarding Photo Gallery", thumb: "/assets/img/thumbs/fcc-rwd-2.2.png", subtitle:"Flex Gallery", blurb:"Flexbox gallery with responsive scaling.", href:"https://codepen.io/Mike-MacDonagh/pen/RNWZrBe", repo:null, tags:["html","css","ui","skate"] },
  { title:"My CV in HTML/CSS", thumb: "/assets/img/thumbs/fcc-rwd-2.3.png", subtitle:"Nutrition Label → CV", blurb:"Typography, layout, and resume structure in code.", href:"https://codepen.io/Mike-MacDonagh/pen/EaVvWwZ", repo:null, tags:["html","css","ui"] },
  { title:"Hunter’s Diagnostic Checklist", thumb: "/assets/img/thumbs/fcc-rwd-2.4.png", subtitle:"Accessibility Quiz → themed", blurb:"Accessibility patterns and form controls.", href:"https://codepen.io/Mike-MacDonagh/pen/EaVvWwZ", repo:null, tags:["html","css","ui","accessibility"] },
  { title:"Yolked / Bear-Mode Docs", thumb: "/assets/img/thumbs/fcc-rwd-3.png", subtitle:"Technical Documentation", blurb:"Multi-column docs layout, sticky sidebar nav.", href:"https://codepen.io/Mike-MacDonagh/pen/EaVRjgM", repo:null, tags:["html","css","ui","docs"] },
  { title:"Calories In vs Out (Guide)", thumb: "/assets/img/thumbs/fcc-rwd-3.1.png", subtitle:"Balance Sheet → themed", blurb:"Data layout using pseudo-selectors and clear hierarchy.", href:"https://codepen.io/Mike-MacDonagh/pen/YPyEjwb", repo:null, tags:["html","css","ui","health"] },
  { title:"The Dented Helmet (Boba Fett)", thumb: "/assets/img/thumbs/fcc-rwd-3.2.png", subtitle:"Cat Painting → CSS art", blurb:"Shapes built with CSS; intermediate design work.", href:"https://codepen.io/Mike-MacDonagh/pen/EaVQNQg", repo:null, tags:["html","css","art","starwars"] },
  { title:"Star Wars Dejarik Holo-Chess", thumb: "/assets/img/thumbs/fcc-rwd-3.3.png", subtitle:"Piano → themed CSS layout", blurb:"Advanced grid layout with creative theming.", href:"https://codepen.io/Mike-MacDonagh/pen/VYvxzeq", repo:null, tags:["html","css","ui","starwars"] },
  { title:"Plumbus Landing Page", thumb: "/assets/img/thumbs/fcc-rwd-4.png", subtitle:"Product Landing Page", blurb:"Hero, pricing, forms, embedded video.", href:"https://codepen.io/Mike-MacDonagh/pen/xbwayEj", repo:null, tags:["html","css","ui","parody"] },
  { title:"Go With The Flow (Desert Scene)", thumb: "/assets/img/thumbs/fcc-rwd-4.1.png", subtitle:"City Skyline → CSS scene", blurb:"Layering, backgrounds, gradients.", href:"https://codepen.io/Mike-MacDonagh/pen/KwdxVLM", repo:null, tags:["html","css","art"] },
  { title:"QOTSA Magazine Spread", thumb: "/assets/img/thumbs/fcc-rwd-4.2.png", subtitle:"CSS Grid Magazine → album layout", blurb:"Magazine-style grid and typography.", href:"https://codepen.io/Mike-MacDonagh/pen/raOZZYL", repo:null, tags:["html","css","design","music"] },
  { title:"Vinyl Record Spinner", thumb: "/assets/img/thumbs/fcc-rwd-5.1.png", subtitle:"Ferris Wheel → animation", blurb:"CSS animations, transforms, rotating vinyl.", href:"https://codepen.io/Mike-MacDonagh/pen/JoYmJmo", repo:null, tags:["html","css","art","animation","music"] },
  { title:"Jack-o’-Lantern (Flicker)", thumb: "/assets/img/thumbs/fcc-rwd-5.2.png", subtitle:"Penguin → CSS art", blurb:"CSS transforms and glow effects.", href:"https://codepen.io/Mike-MacDonagh/pen/myeQwqe", repo:null, tags:["html","css","art","animation"] },

  /* === JavaScript Algorithms & Data Structures (built only) === */
  { title:"Palindrome Checker", thumb: "/assets/img/thumbs/fcc-jsads-1.png", subtitle:"JS challenge", blurb:"Normalize text via regex and check reverse equality; a11y result.", href:"https://codepen.io/Mike-MacDonagh/pen/qEbZBaR", repo:null, tags:["js","tool","regex"] },
  { title:"Retro CRT Pyramid Console", thumb: "/assets/img/thumbs/fcc-jsads-1.1.png", subtitle:"Pyramid Generator (JS 1.1)", blurb:"Loops, strings, DOM buttons, pre spacing, height slider, char input, inverted toggle (CRT vibe).", href:"https://codepen.io/Mike-MacDonagh/pen/qEOvBap", repo:null, tags:["js","ui","retro"] },
  { title:"Handwritten Copybook Gradebook", thumb: "/assets/img/thumbs/fcc-jsads-1.2.png", subtitle:"Gradebook App", blurb:"Parse text to scores; conditional grading; themed copybook UI.", href:"https://codepen.io/Mike-MacDonagh/pen/wBKZGym", repo:null, tags:["js","ui","tool","education"] },
  { title:"Echoes Beyond the Rift", thumb: "/assets/img/thumbs/fcc-jsads-1.3.png", subtitle:"Role-Playing Game", blurb:"State management, locations array, 4-button grid UI, simple modal.", href:"https://codepen.io/Mike-MacDonagh/pen/jEbgZmy", repo:null, tags:["js","game","ui"] },
  { title:"Lightbulb Switch", thumb: "/assets/img/thumbs/fcc-jsads-1.4.png", subtitle:"Random Background Changer → SVG bulb", blurb:"Switch logic with class toggling; visual on/off effect.", href:"https://codepen.io/Mike-MacDonagh/pen/XJXrMGp", repo:null, tags:["js","ui"] },
  { title:"Health App Tracker", thumb: "/assets/img/thumbs/fcc-jsads-1.5.png", subtitle:"Calorie Counter", blurb:"Regex input cleaning; live totals; hydration; exercise add-back; fast toggle; TDEE targets.", href:"https://codepen.io/Mike-MacDonagh/pen/RNrwKgP", repo:null, tags:["js","tool","regex","health"] },
  { title:"Rock Paper Scissors", thumb: "/assets/img/thumbs/fcc-jsads-1.6.png", subtitle:"Best of 5 Click Duel", blurb:"Round logic, helpers, DOM updates, score state and reset.", href:"https://codepen.io/Mike-MacDonagh/pen/bNENBBZ", repo:null, tags:["js","game"] },
  { title:"JJ & Derek Mixtape Player", thumb: "/assets/img/thumbs/fcc-jsads-1.7.png", subtitle:"Music Player", blurb:"5 original tracks via CDN; preloading; CRT neon skin.", href:"https://codepen.io/Mike-MacDonagh/pen/dPGGjRZ", repo:null, tags:["js","ui","music"] },
  { title:"Roman Numeral Converter", thumb: "/assets/img/thumbs/fcc-jsads-2.png", subtitle:"Converter utility", blurb:"Value/symbol map loop; clear invalid/low/high handling; imperial theme.", href:"https://codepen.io/Mike-MacDonagh/pen/ZYQeZBm", repo:null, tags:["js","tool","math"] },
  { title:"Retro Date Utility", thumb: "/assets/img/thumbs/fcc-jsads-2.1.png", subtitle:"Date Formatter", blurb:"ISO, UNIX, weekday, locale formats; terminal-style boot/flicker.", href:"https://codepen.io/Mike-MacDonagh/pen/RNraPar", repo:null, tags:["js","tool","ui"] },
  { title:"HABS Roster Cards", thumb: "/assets/img/thumbs/fcc-jsads-2.2.png", subtitle:"Football Team Cards → Hockey", blurb:"Player cards with filters, captain badge, CDN images and fallbacks.", href:"https://codepen.io/Mike-MacDonagh/pen/RNrRjvQ", repo:null, tags:["js","ui","sports"] },
  { title:"Mixtape Playlist Maker", thumb: "/assets/img/thumbs/fcc-jsads-2.3.png", subtitle:"To-Do App → tracks", blurb:"Add, edit, delete with localStorage; search filter; Spotify-style skin.", href:"https://codepen.io/Mike-MacDonagh/pen/pvgNprM", repo:null, tags:["js","ui","music","tool"] },
  { title:"Decimal → Binary Converter", thumb: "/assets/img/thumbs/fcc-jsads-2.4.png", subtitle:"Number Translator", blurb:"Recursive converter; input sanitization; call-stack animation demo.", href:"https://codepen.io/Mike-MacDonagh/pen/LEGWaPr", repo:null, tags:["js","tool","math"] },
  { title:"Comment Moderation Terminal", thumb: "/assets/img/thumbs/fcc-jsads-3.1.png", subtitle:"Spam Filter → Troll Detector", blurb:"Regex-based toxicity scoring and highlight; CRT console theme.", href:"https://codepen.io/Mike-MacDonagh/pen/ogbWBPV", repo:null, tags:["js","tool","regex","ui"] },
  { title:"Mixtape Sorter", thumb: "/assets/img/thumbs/fcc-jsads-3.2.png", subtitle:"Number Sorter → strings", blurb:"Bubble, Selection, Insertion on real tracks via localeCompare.", href:"https://codepen.io/Mike-MacDonagh/pen/XJXgdPX", repo:null, tags:["js","tool","music"] },
  { title:"D&D Dice Lab", thumb: "/assets/img/thumbs/fcc-jsads-3.3.png", subtitle:"Statistics Calculator → dice", blurb:"Parse 3d6 / 1d20+5; mean, median, mode, range, variance, SD; crit/DC rates.", href:"https://codepen.io/Mike-MacDonagh/pen/PwZjgjZ", repo:null, tags:["js","tool","math","game"] },
  { title:"Budget Tracker", thumb: "/assets/img/thumbs/fcc-jsads-3.4.png", subtitle:"Spreadsheet → finance app", blurb:"Regex formula engine with range expansion and precedence; A–J x 30 grid; seeded Income/Expenses/Summary; localStorage.", href:"https://codepen.io/Mike-MacDonagh/pen/LEGzPxY", repo:null, tags:["js","tool","finance","regex","ui"] },
];

/* Safety net: strip any stray 'codepen' or 'fcc' tags if they ever appear */
ALL_PROJECTS.forEach(p => p.tags = (p.tags || []).filter(t => t !== "codepen" && t !== "fcc"));

/* === Latest-first ordering === */
const PROJECTS = [...ALL_PROJECTS].reverse();

/* ====== Projects page: filters + show-more ====== */
const INITIAL_VISIBLE = 4;
const STEP_VISIBLE = 4;

let currentTag = "all";
let currentFiltered = [];
let visibleCount = INITIAL_VISIBLE;

const grid = document.getElementById("projects");
const showMoreBtn = document.getElementById("show-more");
const filtersEl = document.getElementById("filters");

/* Build filter buttons from TAG_LABELS */
function buildFilterButtons() {
  if (!filtersEl) return [];

  filtersEl.innerHTML = "";

  // 'All' first
  const allBtn = document.createElement("button");
  allBtn.className = "btn btn-sm btn-outline-secondary is-active tag";
  allBtn.dataset.tag = "all";
  allBtn.textContent = "All";
  filtersEl.appendChild(allBtn);

  // Sorted by label
  const entries = Object.entries(TAG_LABELS).sort((a, b) => a[1].localeCompare(b[1]));
  for (const [key, label] of entries) {
    const btn = document.createElement("button");
    btn.className = "btn btn-sm btn-outline-secondary tag";
    btn.dataset.tag = key;
    btn.textContent = label;
    filtersEl.appendChild(btn);
  }

  return Array.from(filtersEl.querySelectorAll('[data-tag]'))
    .filter(el => el.tagName === "BUTTON" || el.classList.contains("btn"));
}

function badge(tag) {
  const label = TAG_LABELS[tag] || tag;
  const isAccent = tag === "js";
  return `<span class="badge ${isAccent ? "badge-accent" : "text-bg-light"}">${label}</span>`;
}

function makeCard(p) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6";
  col.dataset.tags = p.tags.join(" ");

  const thumb = pickThumb(p);
  const alt = `${p.title} thumbnail`;

  col.innerHTML = `
    <article class="card h-100">
      <div class="ratio ratio-16x9">
        <img
          src="${thumb}"
          alt="${alt}"
          loading="lazy"
          width="640"
          height="360"
          class="card-img-top object-fit-cover"
          onerror="this.onerror=null;this.src='${DEFAULT_THUMB}';"
        />
      </div>
      <div class="card-body d-flex flex-column">
        <div class="d-flex flex-wrap gap-1 mb-2">
          ${p.tags.map(badge).join("")}
        </div>
        <h3 class="h5 mb-1">${p.title}</h3>
        <p class="small text-muted mb-2">${p.subtitle}</p>
        <p class="mb-3">${p.blurb}</p>
        <div class="mt-auto d-flex gap-2">
          <a class="btn btn-sm btn-primary" href="${p.href}" target="_blank" rel="noopener">View Project</a>
          ${p.repo ? `<a class="btn btn-sm btn-outline-secondary" href="${p.repo}" target="_blank" rel="noopener">Source</a>` : ""}
        </div>
      </div>
    </article>
  `;
  return col;
}

function renderLimited(list) {
  if (!grid) return; // not on Projects page
  grid.innerHTML = "";
  const frag = document.createDocumentFragment();
  const slice = list.slice(0, visibleCount);

  if (slice.length === 0) {
    const empty = document.createElement("div");
    empty.className = "col-12";
    empty.innerHTML = `
      <div class="alert alert-secondary text-center mb-0">
        No projects match this filter yet.
      </div>
    `;
    frag.appendChild(empty);
  } else {
    slice.forEach((p) => frag.appendChild(makeCard(p)));
  }

  grid.appendChild(frag);

  if (showMoreBtn) {
    const hasMore = list.length > visibleCount;
    showMoreBtn.classList.toggle("d-none", !hasMore);
  }
}

function filterByTag(tag) {
  const t = (tag || "all").toLowerCase();
  if (t === "codepen" || t === "fcc") return [...PROJECTS]; // legacy guard
  return t === "all" ? [...PROJECTS] : PROJECTS.filter(p => p.tags.includes(t));
}

function setActiveButton(btn, group) {
  group.forEach((b) => b.classList.toggle("is-active", b === btn));
}

function applyFilter(tag) {
  currentTag = (tag || "all").toLowerCase();
  if (currentTag === "codepen" || currentTag === "fcc") currentTag = "all";
  currentFiltered = filterByTag(currentTag);
  visibleCount = INITIAL_VISIBLE;
  renderLimited(currentFiltered);
}

function initialTagFromURL() {
  const u = new URL(window.location.href);
  const q = (u.searchParams.get("tag") || "").toLowerCase();
  if (q === "codepen" || q === "fcc") return "all";
  if (q) return q;
  const hash = u.hash.startsWith("#tag=") ? u.hash.slice(5).toLowerCase() : null;
  if (hash === "codepen" || hash === "fcc") return "all";
  return hash || null;
}

/* ---- Boot (works safely on any page) ---- */
(function initProjects() {
  // tiny CSS helpers (safe to inject)
  const css = `
    .ratio { position: relative; width: 100%; }
    .ratio::before { display: block; padding-top: calc(100% / (16/9)); content: ""; }
    .ratio > * { position: absolute; inset: 0; }
    .object-fit-cover { object-fit: cover; width: 100%; height: 100%; }
    .badge-accent { background: #ffd84a; color: #111; }
  `;
  const s = document.createElement("style");
  s.appendChild(document.createTextNode(css));
  document.head.appendChild(s);

  // If we're on the Projects page, filtersEl exists
  const tagButtons = buildFilterButtons();
  if (tagButtons.length) {
    const initial = initialTagFromURL() || "all";
    const btnToActivate =
      tagButtons.find(b => (b.dataset.tag || "").toLowerCase() === initial) || tagButtons[0];

    if (btnToActivate) setActiveButton(btnToActivate, tagButtons);
    applyFilter(initial);

    // Wire button clicks + keyboard
    tagButtons.forEach((btn) => {
      const activate = () => {
        setActiveButton(btn, tagButtons);
        applyFilter(btn.dataset.tag);
        const u = new URL(window.location.href);
        if ((btn.dataset.tag || "all") === "all") u.searchParams.delete("tag");
        else u.searchParams.set("tag", btn.dataset.tag);
        history.replaceState({}, "", u.toString());
      };
      btn.addEventListener("click", activate);
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
    });

    // Show more
    if (showMoreBtn) {
      showMoreBtn.addEventListener("click", () => {
        visibleCount += STEP_VISIBLE;
        renderLimited(currentFiltered);
      });
    }
  }
})();

/* ---- Home page: render 4-project preview (latest first) if #home-projects exists ---- */
(function renderHomePreview() {
  const homeGrid = document.getElementById("home-projects");
  if (!homeGrid) return; // not on home page

  // Latest-first list already computed in PROJECTS
  const preview = PROJECTS.slice(0, 4);
  const frag = document.createDocumentFragment();
  preview.forEach((p) => frag.appendChild(makeCard(p)));
  homeGrid.innerHTML = "";
  homeGrid.appendChild(frag);
})();
