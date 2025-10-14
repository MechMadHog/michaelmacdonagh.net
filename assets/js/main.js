/* /assets/js/main.js */

/* ---- Year in footer */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- Project data (tags are lowercase keywords; no 'codepen') */
const projects = [
  /* === Responsive Web Design (20) === */
  {
    title: "Personal Portfolio Webpage",
    subtitle: "Responsive Web Design — Final",
    blurb: "Pulled everything together: grid, responsive, sticky nav, glow effects.",
    href: "https://codepen.io/Mike-MacDonagh/pen/bNVOrxK",
    repo: null,
    tags: ["html","css","ui"],
    thumb: null,
  },
  {
    title: "What Kind of Metal Head Are You?",
    subtitle: "Survey Form",
    blurb: "Semantic form structure, accessible labels, validation.",
    href: "https://codepen.io/Mike-MacDonagh/pen/ByoZwao",
    repo: null,
    tags: ["html","css","ui"],
    thumb: null,
  },
  {
    title: "Stoic Philosophers Photo App",
    subtitle: "Cat Photo App → themed",
    blurb: "Styled image app; groundwork for personal theming.",
    href: "https://codepen.io/Mike-MacDonagh/pen/yyYMrMM",
    repo: null,
    tags: ["html","css","ui"],
    thumb: null,
  },
  {
    title: "Mac’s Wrap Shack",
    subtitle: "Café Menu → Burrito Bar",
    blurb: "Structured a realistic menu with clean CSS styling.",
    href: "https://codepen.io/Mike-MacDonagh/pen/raOybGY",
    repo: null,
    tags: ["html","css","ui","food"],
    thumb: null,
  },
  {
    title: "Colored Markers Set",
    subtitle: "Colored Markers → expanded",
    blurb: "Gradients, shadows, CSS styling basics.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVmymK",
    repo: null,
    tags: ["html","css","art"],
    thumb: null,
  },
  {
    title: "Replicant Registration",
    subtitle: "Registration Form → Blade Runner",
    blurb: "Thematic forms with consistent brand and accessibility.",
    href: "https://codepen.io/Mike-MacDonagh/pen/azvwyQq",
    repo: null,
    tags: ["html","css","ui","cyberpunk"],
    thumb: null,
  },
  {
    title: "Rodney Mullen – The Godfather of Skate",
    subtitle: "Tribute Page",
    blurb: "Strong typographic rhythm, imagery, and hierarchy.",
    href: "https://codepen.io/Mike-MacDonagh/pen/JoYWqdV",
    repo: null,
    tags: ["html","css","design","skate"],
    thumb: null,
  },
  {
    title: "Mondrian Grid",
    subtitle: "Painting → CSS Grid",
    blurb: "Minimalist grid composition in pure CSS.",
    href: "https://codepen.io/Mike-MacDonagh/pen/pvjwYVY",
    repo: null,
    tags: ["html","css","art"],
    thumb: null,
  },
  {
    title: "Skateboarding Photo Gallery",
    subtitle: "Flex Gallery",
    blurb: "Flexbox gallery with responsive scaling.",
    href: "https://codepen.io/Mike-MacDonagh/pen/RNWZrBe",
    repo: null,
    tags: ["html","css","ui","skate"],
    thumb: null,
  },
  {
    title: "My CV in HTML/CSS",
    subtitle: "Nutrition Label → CV",
    blurb: "Typography, layout, and resume structure in code.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVvWwZ",
    repo: null,
    tags: ["html","css","ui"],
    thumb: null,
  },
  {
    title: "Hunter’s Diagnostic Checklist",
    subtitle: "Accessibility Quiz → themed",
    blurb: "Accessibility patterns and form controls.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVvWwZ",
    repo: null,
    tags: ["html","css","ui","accessibility"],
    thumb: null,
  },
  {
    title: "Yolked / Bear-Mode Docs",
    subtitle: "Technical Documentation",
    blurb: "Multi-column docs layout, sticky sidebar nav.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVRjgM",
    repo: null,
    tags: ["html","css","ui","docs"],
    thumb: null,
  },
  {
    title: "Calories In vs Out (Guide)",
    subtitle: "Balance Sheet → themed",
    blurb: "Data layout using pseudo-selectors and clear hierarchy.",
    href: "https://codepen.io/Mike-MacDonagh/pen/YPyEjwb",
    repo: null,
    tags: ["html","css","ui","health"],
    thumb: null,
  },
  {
    title: "The Dented Helmet (Boba Fett)",
    subtitle: "Cat Painting → CSS art",
    blurb: "Shapes built with CSS; intermediate design work.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVQNQg",
    repo: null,
    tags: ["html","css","art","starwars"],
    thumb: null,
  },
  {
    title: "Star Wars Dejarik Holo-Chess",
    subtitle: "Piano → themed CSS layout",
    blurb: "Advanced grid layout with creative theming.",
    href: "https://codepen.io/Mike-MacDonagh/pen/VYvxzeq",
    repo: null,
    tags: ["html","css","ui","starwars"],
    thumb: null,
  },
  {
    title: "Plumbus Landing Page",
    subtitle: "Product Landing Page",
    blurb: "Hero, pricing, forms, embedded video.",
    href: "https://codepen.io/Mike-MacDonagh/pen/xbwayEj",
    repo: null,
    tags: ["html","css","ui","parody"],
    thumb: null,
  },
  {
    title: "Go With The Flow (Desert Scene)",
    subtitle: "City Skyline → CSS scene",
    blurb: "Layering, backgrounds, gradients.",
    href: "https://codepen.io/Mike-MacDonagh/pen/KwdxVLM",
    repo: null,
    tags: ["html","css","art"],
    thumb: null,
  },
  {
    title: "QOTSA Magazine Spread",
    subtitle: "CSS Grid Magazine → album layout",
    blurb: "Magazine-style grid & typography.",
    href: "https://codepen.io/Mike-MacDonagh/pen/raOZZYL",
    repo: null,
    tags: ["html","css","design","music"],
    thumb: null,
  },
  {
    title: "Vinyl Record Spinner",
    subtitle: "Ferris Wheel → animation",
    blurb: "CSS animations, transforms, rotating vinyl.",
    href: "https://codepen.io/Mike-MacDonagh/pen/JoYmJmo",
    repo: null,
    tags: ["html","css","art","animation","music"],
    thumb: null,
  },
  {
    title: "Jack-o’-Lantern (Flicker)",
    subtitle: "Penguin → CSS art",
    blurb: "CSS transforms + glow effects.",
    href: "https://codepen.io/Mike-MacDonagh/pen/myeQwqe",
    repo: null,
    tags: ["html","css","art","animation"],
    thumb: null,
  },

  /* === JavaScript Algorithms & Data Structures (built only) === */
  {
    title: "Palindrome Checker",
    subtitle: "JS challenge",
    blurb: "Normalize text via regex and check reverse equality; a11y result.",
    href: "https://codepen.io/Mike-MacDonagh/pen/qEbZBaR",
    repo: null,
    tags: ["js","tool","regex"],
    thumb: null,
  },
  {
    title: "Retro CRT Pyramid Console",
    subtitle: "Pyramid Generator (JS 1.1)",
    blurb: "Loops, strings, DOM buttons, <pre> spacing, height slider, char input, inverted toggle—80s/90s CRT vibe.",
    href: "https://codepen.io/Mike-MacDonagh/pen/qEOvBap",
    repo: null,
    tags: ["js","ui","retro"],
    thumb: null,
  },
  {
    title: "Handwritten Copybook Gradebook",
    subtitle: "Gradebook App",
    blurb: "Parse text to scores; conditional grading; themed copybook UI.",
    href: "https://codepen.io/Mike-MacDonagh/pen/wBKZGym",
    repo: null,
    tags: ["js","ui","tool","education"],
    thumb: null,
  },
  {
    title: "Echoes Beyond the Rift",
    subtitle: "Role-Playing Game",
    blurb: "State management, locations array, 4-button grid UI, simple modal.",
    href: "https://codepen.io/Mike-MacDonagh/pen/jEbgZmy",
    repo: null,
    tags: ["js","game","ui"],
    thumb: null,
  },
  {
    title: "Lightbulb Switch",
    subtitle: "Random Background Changer → SVG bulb",
    blurb: "Switch logic + class toggling; visual on/off effect.",
    href: "https://codepen.io/Mike-MacDonagh/pen/XJXrMGp",
    repo: null,
    tags: ["js","ui"],
    thumb: null,
  },
  {
    title: "Health App Tracker",
    subtitle: "Calorie Counter",
    blurb: "Regex input cleaning; live totals; hydration; exercise add-back; fast toggle; TDEE targets.",
    href: "https://codepen.io/Mike-MacDonagh/pen/RNrwKgP",
    repo: null,
    tags: ["js","tool","regex","health"],
    thumb: null,
  },
  {
    title: "Rock Paper Scissors",
    subtitle: "Best of 5 Click Duel",
    blurb: "Round logic, helpers, DOM updates, score state & reset.",
    href: "https://codepen.io/Mike-MacDonagh/pen/bNENBBZ",
    repo: null,
    tags: ["js","game"],
    thumb: null,
  },
  {
    title: "JJ & Derek Mixtape Player",
    subtitle: "Music Player",
    blurb: "5 original tracks via CDN; preloading; CRT neon skin.",
    href: "https://codepen.io/Mike-MacDonagh/pen/dPGGjRZ",
    repo: null,
    tags: ["js","ui","music"],
    thumb: null,
  },
  {
    title: "Roman Numeral Converter",
    subtitle: "Converter utility",
    blurb: "Value/symbol map loop; clear invalid/low/high handling; imperial theme.",
    href: "https://codepen.io/Mike-MacDonagh/pen/ZYQeZBm",
    repo: null,
    tags: ["js","tool","math"],
    thumb: null,
  },
  {
    title: "Retro Date Utility",
    subtitle: "Date Formatter",
    blurb: "ISO, UNIX, weekday, locale formats; terminal-style boot/flicker.",
    href: "https://codepen.io/Mike-MacDonagh/pen/RNraPar",
    repo: null,
    tags: ["js","tool","ui"],
    thumb: null,
  },
  {
    title: "HABS Roster Cards",
    subtitle: "Football Team Cards → Hockey",
    blurb: "Player cards with filters, captain badge, CDN images & fallbacks.",
    href: "https://codepen.io/Mike-MacDonagh/pen/RNrRjvQ",
    repo: null,
    tags: ["js","ui","sports"],
    thumb: null,
  },
  {
    title: "Mixtape Playlist Maker",
    subtitle: "To-Do App → tracks",
    blurb: "Add/edit/delete with localStorage; search filter; Spotify-style skin.",
    href: "https://codepen.io/Mike-MacDonagh/pen/pvgNprM",
    repo: null,
    tags: ["js","ui","music","tool"],
    thumb: null,
  },
  {
    title: "Decimal → Binary Converter",
    subtitle: "Number Translator",
    blurb: "Recursive converter; input sanitization; call-stack animation demo.",
    href: "https://codepen.io/Mike-MacDonagh/pen/LEGWaPr",
    repo: null,
    tags: ["js","tool","math"],
    thumb: null,
  },
  {
    title: "Comment Moderation Terminal",
    subtitle: "Spam Filter → Troll Detector",
    blurb: "Regex-based toxicity scoring + highlight; CRT console theme.",
    href: "https://codepen.io/Mike-MacDonagh/pen/ogbWBPV",
    repo: null,
    tags: ["js","tool","regex","ui"],
    thumb: null,
  },
  {
    title: "Mixtape Sorter",
    subtitle: "Number Sorter → strings",
    blurb: "Bubble/Selection/Insertion on real tracks via `localeCompare`.",
    href: "https://codepen.io/Mike-MacDonagh/pen/XJXgdPX",
    repo: null,
    tags: ["js","tool","music"],
    thumb: null,
  },
  {
    title: "D&D Dice Lab",
    subtitle: "Statistics Calculator → dice",
    blurb: "Parse 3d6 / 1d20+5; mean/median/mode, range, variance, SD; crit/DC rates.",
    href: "https://codepen.io/Mike-MacDonagh/pen/PwZjgjZ",
    repo: null,
    tags: ["js","tool","math","game"],
    thumb: null,
  },
  {
    title: "Budget Tracker",
    subtitle: "Spreadsheet → finance app",
    blurb: "Regex formula engine with range expansion & precedence; A–J × 30 grid; seeded Income/Expenses/Summary; localStorage.",
    href: "https://codepen.io/Mike-MacDonagh/pen/LEGzPxY",
    repo: null,
    tags: ["js","tool","finance","regex","ui"],
    thumb: null,
  },
];

/* ---- Safety net: ensure 'codepen' never slips in */
projects.forEach(p => {
  p.tags = (p.tags || []).filter(t => t !== "codepen");
});

/* ---- Helpers */
const grid = document.getElementById("projects"); // should be a .row
if (!grid) {
  console.warn("[projects] #projects container not found");
}

/* Make a Bootstrap badge from a tag */
function badge(tag) {
  const labelMap = {
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
    // (intentionally no 'codepen')
  };
  const label = labelMap[tag] || tag;
  const isAccent = tag === "js"; // accent badge for JS examples (kept)
  return `<span class="badge ${isAccent ? "badge-accent" : "text-bg-light"}">${label}</span>`;
}

/* Card column (Bootstrap) */
function makeCard(p) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6";
  col.dataset.tags = p.tags.join(" ");

  col.innerHTML = `
    <article class="card h-100">
      ${p.thumb ? `<img src="${p.thumb}" class="card-img-top" alt="${p.title} thumbnail">` : ""}
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

/* Render a list of projects into the grid */
function render(list) {
  if (!grid) return;
  grid.innerHTML = "";
  const frag = document.createDocumentFragment();

  if (!list || list.length === 0) {
    const empty = document.createElement("div");
    empty.className = "col-12";
    empty.innerHTML = `
      <div class="alert alert-secondary text-center mb-0">
        No projects match this filter yet.
      </div>
    `;
    frag.appendChild(empty);
  } else {
    list.forEach((p) => frag.appendChild(makeCard(p)));
  }

  grid.appendChild(frag);
}

/* Initial render */
render(projects);

/* ---- Tag filtering (buttons: .btn[data-tag]) */
const tagButtons = Array.from(document.querySelectorAll('[data-tag]')).filter(
  (el) => el.tagName === "BUTTON" || el.classList.contains("btn")
);

/* Remove any 'codepen' filter button if it exists */
document.querySelectorAll('[data-tag="codepen"]').forEach(btn => btn.remove());

let active = "all";

/* Set active button UI */
function setActiveButton(btn) {
  tagButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
}

/* Apply filter and render (guard ?tag=codepen → all) */
function applyFilter(tag) {
  const normalized = (tag || "all").toLowerCase() === "codepen" ? "all" : (tag || "all");
  const list = normalized === "all" ? projects : projects.filter((p) => p.tags.includes(normalized));
  render(list);
}

/* Try reading tag from URL (?tag=js or #tag=js) */
function initialTagFromURL() {
  const u = new URL(window.location.href);
  const q = u.searchParams.get("tag");
  if (q) return q.toLowerCase();
  const hash = u.hash.startsWith("#tag=") ? u.hash.slice(5) : null;
  return hash ? hash.toLowerCase() : null;
}

/* Hydrate initial state */
(function initFilters() {
  const initial = initialTagFromURL();
  const candidates = Array.from(document.querySelectorAll('[data-tag]'));
  const findBtn = (t) => candidates.find((b) => (b.dataset.tag || "").toLowerCase() === t);

  const safeInitial = initial === "codepen" ? "all" : initial;
  const btnToActivate =
    (safeInitial && findBtn(safeInitial)) ||
    candidates.find((b) => b.classList.contains("is-active")) ||
    candidates[0];

  if (btnToActivate) {
    setActiveButton(btnToActivate);
    applyFilter(btnToActivate.dataset.tag);
  } else {
    applyFilter("all");
  }
})();

/* Click + keyboard (Enter/Space) support */
tagButtons.forEach((btn) => {
  const activate = () => {
    setActiveButton(btn);
    applyFilter(btn.dataset.tag);
    const u = new URL(window.location.href);
    if ((btn.dataset.tag || "all") === "all") u.searchParams.delete("tag");
    else u.searchParams.set("tag", btn.dataset.tag);
    history.replaceState({}, "", u.toString());
  };
  btn.addEventListener("click", activate);
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  });
});

/* Tiny scroll helper */
document.addEventListener(
  "scroll",
  () => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 6);
  },
  { passive: true }
);
