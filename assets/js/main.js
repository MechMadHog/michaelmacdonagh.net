/* /assets/js/main.js */

/* ----------------------------------------
   Year in footer
---------------------------------------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ----------------------------------------
   Thumb picker
---------------------------------------- */
function pickThumb(p) {
  const t = p && p.thumb ? String(p.thumb).trim() : "";
  return t || null; // return null if no explicit thumb set
}

/* ----------------------------------------
   Tag labels
---------------------------------------- */
const TAG_LABELS = {
  "accessibility": "Accessibility",
  "algorithm": "Algorithm",
  "animation": "Animation",
  "api": "API",
  "calculator": "Calculator",
  "canvas": "Canvas",
  "cards": "Cards",
  "catalog": "Catalog",
  "converter": "Converter",
  "crud": "CRUD",
  "css-art": "CSS Art",
  "cyberpunk": "Cyberpunk",
  "datetime": "Date/Time",
  "design": "Design",
  "docs": "Docs",
  "dom": "DOM",
  "education": "Education",
  "ecommerce": "eCommerce",
  "engine": "Engine",
  "fetch-app": "Fetch App",
  "finance": "Finance",
  "food": "Food",
  "form": "Form",
  "gallery": "Gallery",
  "game": "Game",
  "generator": "Generator",
  "grid": "CSS Grid",
  "guide": "Guide",
  "health": "Health",
  "interaction": "Interaction",
  "landing-page": "Landing Page",
  "layout": "Layout",
  "leader-board": "Leader Board",
  "logic": "Logic",
  "mapping": "Mapping",
  "marketing": "Marketing",
  "math": "Math",
  "media": "Media",
  "menu": "Menu",
  "moderation": "Moderation",
  "music": "Music",
  "music-app": "Music App",
  "parser": "Parser",
  "portfolio": "Portfolio",
  "randomness": "Randomness",
  "recursion": "Recursion",
  "regex": "Regex",
  "resume": "Resume",
  "retro": "Retro",
  "search": "Search",
  "shopping-cart": "Shopping Cart",
  "skate": "Skate",
  "sorting": "Sorting",
  "sports": "Sports",
  "spreadsheet": "Spreadsheet",
  "star-wars": "Star Wars",
  "state": "State",
  "storage": "Storage",
  "table": "Table",
  "tool": "Tool",
  "tribute": "Tribute",
  "typography": "Typography",
  "ui": "UI",
  "utility": "Utility",
  "validator": "Validator",
  "visual": "Visual",
  "react": "React",
  "jquery": "jQuery",
  "bootstrap": "Bootstrap",
  "timer": "Timer",
  "editor": "Editor",
  "audio": "Audio"
};


/* TIP: add new items to the END; we reverse below to show latest first. */
const ALL_PROJECTS = [
  /* === Responsive Web Design (20) === */
  { 
    title: "Stoic Philosophers Photo App",
    thumb: "/assets/images/thumbs/fcc-rwd-1.1.png",
    subtitle: "Cat Photo App → Themed photo gallery",
    blurb: "Figure/figcaption, object-fit, responsive images, BEM-ish class structure.",
    href: "https://codepen.io/Mike-MacDonagh/pen/yyYMrMM",
    repo: null,
    tags: ["gallery","ui","layout"]
  },
  { 
    title: "Mac’s Wrap Shack",
    thumb: "/assets/images/thumbs/fcc-rwd-1.2.png",
    subtitle: "Café Menu → Burrito bar menu",
    blurb: "Definition lists, typographic hierarchy, price alignment, utility spacing.",
    href: "https://codepen.io/Mike-MacDonagh/pen/raOybGY",
    repo: null,
    tags: ["menu","ui","food"]
  },
  { 
    title: "Colored Markers Set",
    thumb: "/assets/images/thumbs/fcc-rwd-1.3.png",
    subtitle: "Colored Markers → Expanded CSS set",
    blurb: "Gradients, box-shadows, border-radius, pseudo-elements for accents.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVmymK",
    repo: null,
    tags: ["css-art","visual","animation"]
  },
  { 
    title: "Replicant Registration",
    thumb: "/assets/images/thumbs/fcc-rwd-1.4.png",
    subtitle: "Registration Form → Blade Runner reskin",
    blurb: "Accessible form patterns, grouped inputs, theming tokens, focus states.",
    href: "https://codepen.io/Mike-MacDonagh/pen/azvwyQq",
    repo: null,
    tags: ["form","ui","cyberpunk"]
  },
  { 
    title: "What Kind of Metal Head Are You?",
    thumb: "/assets/images/thumbs/fcc-rwd-1.png",
    subtitle: "Survey Form → Branded personality form",
    blurb: "Semantic HTML, accessible labels, validation patterns, required fields.",
    href: "https://codepen.io/Mike-MacDonagh/pen/ByoZwao",
    repo: null,
    tags: ["form","ui","accessibility"]
  },
  { 
    title: "Mondrian Grid",
    thumb: "/assets/images/thumbs/fcc-rwd-2.1.png",
    subtitle: "Painting → CSS Grid composition",
    blurb: "Named grid areas, fractional units, gap control, minimal palette.",
    href: "https://codepen.io/Mike-MacDonagh/pen/pvjwYVY",
    repo: null,
    tags: ["css-art","grid","visual"]
  },
  { 
    title: "Skateboarding Photo Gallery",
    thumb: "/assets/images/thumbs/fcc-rwd-2.2.png",
    subtitle: "Flex Gallery → Responsive skate set",
    blurb: "Flex-wrap, aspect-ratio, hover states, responsive columns.",
    href: "https://codepen.io/Mike-MacDonagh/pen/RNWZrBe",
    repo: null,
    tags: ["gallery","ui","skate"]
  },
  { 
    title: "My CV in HTML/CSS",
    thumb: "/assets/images/thumbs/fcc-rwd-2.3.png",
    subtitle: "Nutrition Label → CV layout",
    blurb: "Print-friendly CSS, columns, semantic sections, icon list patterns.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVvWwZ",
    repo: null,
    tags: ["resume","layout","typography"]
  },
  { 
    title: "Hunter’s Diagnostic Checklist",
    thumb: "/assets/images/thumbs/fcc-rwd-2.4.png",
    subtitle: "Accessibility Quiz → Themed checklist",
    blurb: "ARIA, keyboard order, input grouping, validation messaging.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVvWwZ",
    repo: null,
    tags: ["accessibility","form","ui"]
  },
  { 
    title: "Rodney Mullen – The Godfather of Skate",
    thumb: "/assets/images/thumbs/fcc-rwd-2.png",
    subtitle: "Tribute Page → Skate legend profile",
    blurb: "Typographic rhythm, responsive layout, media blocks, anchors.",
    href: "https://codepen.io/Mike-MacDonagh/pen/JoYWqdV",
    repo: null,
    tags: ["tribute","design","skate"]
  },
  { 
    title: "Calories In vs Out (Guide)",
    thumb: "/assets/images/thumbs/fcc-rwd-3.1.png",
    subtitle: "Balance Sheet → Themed guide",
    blurb: "Pseudo-selectors, callouts, definition patterns, data lists.",
    href: "https://codepen.io/Mike-MacDonagh/pen/YPyEjwb",
    repo: null,
    tags: ["guide","health","layout"]
  },
  { 
    title: "The Dented Helmet (Boba Fett)",
    thumb: "/assets/images/thumbs/fcc-rwd-3.2.png",
    subtitle: "Cat Painting → CSS helmet art",
    blurb: "Pure CSS shapes, transforms, layering, composition.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVQNQg",
    repo: null,
    tags: ["css-art","visual","star-wars"]
  },
  { 
    title: "Star Wars Dejarik Holo-Chess",
    thumb: "/assets/images/thumbs/fcc-rwd-3.3.png",
    subtitle: "Piano → Themed grid board",
    blurb: "Advanced CSS Grid, custom properties, layout algorithms.",
    href: "https://codepen.io/Mike-MacDonagh/pen/VYvxzeq",
    repo: null,
    tags: ["css-art","grid","star-wars"]
  },
  { 
    title: "Yolked / Bear-Mode Docs",
    thumb: "/assets/images/thumbs/fcc-rwd-3.png",
    subtitle: "Technical Documentation → Fitness docs",
    blurb: "Sticky sidebar nav, in-page anchors, code blocks, scroll-margin.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVRjgM",
    repo: null,
    tags: ["docs","ui","layout"]
  },
  { 
    title: "Go With The Flow (Desert Scene)",
    thumb: "/assets/images/thumbs/fcc-rwd-4.1.png",
    subtitle: "City Skyline → CSS desert scene",
    blurb: "Layered backgrounds, gradients, keyframe flicker.",
    href: "https://codepen.io/Mike-MacDonagh/pen/KwdxVLM",
    repo: null,
    tags: ["css-art","visual","animation"]
  },
  { 
    title: "QOTSA Magazine Spread",
    thumb: "/assets/images/thumbs/fcc-rwd-4.2.png",
    subtitle: "CSS Grid Magazine → Album layout",
    blurb: "Editorial grid, baseline-ish rhythm, image crops, display type.",
    href: "https://codepen.io/Mike-MacDonagh/pen/raOZZYL",
    repo: null,
    tags: ["design","grid","music"]
  },
  { 
    title: "Plumbus Landing Page",
    thumb: "/assets/images/thumbs/fcc-rwd-4.png",
    subtitle: "Product Landing Page → Parody product site",
    blurb: "Hero layout, pricing table, embedded video, form handling (HTML).",
    href: "https://codepen.io/Mike-MacDonagh/pen/xbwayEj",
    repo: null,
    tags: ["landing-page","marketing","ui"]
  },
  { 
    title: "Vinyl Record Spinner",
    thumb: "/assets/images/thumbs/fcc-rwd-5.1.png",
    subtitle: "Ferris Wheel → CSS record animation",
    blurb: "Transform rotate, animation timing, compositing for smoothness.",
    href: "https://codepen.io/Mike-MacDonagh/pen/JoYmJmo",
    repo: null,
    tags: ["animation","css-art","music"]
  },
  { 
    title: "Jack-o’-Lantern (Flicker)",
    thumb: "/assets/images/thumbs/fcc-rwd-5.2.png",
    subtitle: "Penguin → CSS pumpkin art",
    blurb: "Keyframes, glow layering, CSS filters, transform-origin.",
    href: "https://codepen.io/Mike-MacDonagh/pen/myeQwqe",
    repo: null,
    tags: ["css-art","animation","visual"]
  },
  { 
    title: "Personal Portfolio Webpage",
    thumb: "/assets/images/thumbs/fcc-rwd-5.png",
    subtitle: "Personal Portfolio Page → Final portfolio build",
    blurb: "CSS Grid, Flexbox, sticky nav, responsive media queries, utility classes.",
    href: "https://codepen.io/Mike-MacDonagh/pen/bNVOrxK",
    repo: null,
    tags: ["portfolio","ui","layout"]
  },

  /* === JavaScript Algorithms & Data Structures (In Progress) === */
  { 
    title: "CRT Pyramid Console",
    thumb: "/assets/images/thumbs/fcc-jsads-1.1.png",
    subtitle: "Pyramid Generator → Retro console",
    blurb: "Loops, string building, <pre> spacing, inputs (range/text), toggles.",
    href: "https://codepen.io/Mike-MacDonagh/pen/qEOvBap",
    repo: null,
    tags: ["generator","ui","retro"]
  },
  { 
    title: "Handwritten Copybook Gradebook",
    thumb: "/assets/images/thumbs/fcc-jsads-1.2.png",
    subtitle: "Gradebook App → Text parsing to grades",
    blurb: "Split/map, conditional logic, running totals, DOM rendering.",
    href: "https://codepen.io/Mike-MacDonagh/pen/wBKZGym",
    repo: null,
    tags: ["education","tool","parser"]
  },
  { 
    title: "Echoes Beyond the Rift",
    thumb: "/assets/images/thumbs/fcc-jsads-1.3.png",
    subtitle: "Role-Playing Game → Themed JS RPG",
    blurb: "Finite state, locations array, RNG events, modal, UI grid.",
    href: "https://codepen.io/Mike-MacDonagh/pen/jEbgZmy",
    repo: null,
    tags: ["game","state","ui"]
  },
  { 
    title: "Lightbulb Switch",
    thumb: "/assets/images/thumbs/fcc-jsads-1.4.png",
    subtitle: "Random Background → SVG bulb toggle",
    blurb: "Class toggle, switch/case, DOM style updates, event listeners.",
    href: "https://codepen.io/Mike-MacDonagh/pen/XJXrMGp",
    repo: null,
    tags: ["ui","interaction","dom"]
  },
  { 
    title: "Health App Tracker",
    thumb: "/assets/images/thumbs/fcc-jsads-1.5.png",
    subtitle: "Calorie Counter → Expanded tracker",
    blurb: "Regex sanitize, NodeList loops, computed totals, TDEE targets.",
    href: "https://codepen.io/Mike-MacDonagh/pen/RNrwKgP",
    repo: null,
    tags: ["health","calculator","regex"]
  },
  { 
    title: "Philosophy Duel",
    thumb: "/assets/images/thumbs/fcc-jsads-1.6.png",
    subtitle: "Rock–Paper–Scissors → Best-of-5 duel",
    blurb: "RNG, comparison helpers, score state, reset flow.",
    href: "https://codepen.io/Mike-MacDonagh/pen/bNENBBZ",
    repo: null,
    tags: ["game","logic","state"]
  },
  { 
    title: "JJ & Derek Mixtape Player",
    thumb: "/assets/images/thumbs/fcc-jsads-1.7.png",
    subtitle: "Music Player → Custom tracks + UI",
    blurb: "Audio API, preloading metadata, playlist UI, skin/theming.",
    href: "https://codepen.io/Mike-MacDonagh/pen/dPGGjRZ",
    repo: null,
    tags: ["music-app","ui","media"]
  },
  { 
    title: "Palindrome Checker",
    thumb: "/assets/images/thumbs/fcc-jsads-1.png",
    subtitle: "Palindrome Checker → Base validator",
    blurb: "Regex normalization, string reverse, DOM updates, a11y live region.",
    href: "https://codepen.io/Mike-MacDonagh/pen/qEbZBaR",
    repo: null,
    tags: ["validator","regex","dom"]
  },
  { 
    title: "CRT Date Utility",
    thumb: "/assets/images/thumbs/fcc-jsads-2.1.png",
    subtitle: "Date Formatter → Terminal-style tool",
    blurb: "Intl APIs, UNIX/ISO formats, live updates, typewriter effect.",
    href: "https://codepen.io/Mike-MacDonagh/pen/RNraPar",
    repo: null,
    tags: ["utility","datetime","ui"]
  },
  { 
    title: "HABS Roster Cards",
    thumb: "/assets/images/thumbs/fcc-jsads-2.2.png",
    subtitle: "Football Team Cards → Hockey roster",
    blurb: "Card templates, filters, CDN images w/ fallbacks, badges.",
    href: "https://codepen.io/Mike-MacDonagh/pen/RNrRjvQ",
    repo: null,
    tags: ["cards","sports","ui"]
  },
  { 
    title: "Mixtape Maker",
    thumb: "/assets/images/thumbs/fcc-jsads-2.3.png",
    subtitle: "To-Do App → Playlist builder",
    blurb: "CRUD, localStorage, search filter, map/join templating.",
    href: "https://codepen.io/Mike-MacDonagh/pen/pvgNprM",
    repo: null,
    tags: ["crud","music-app","storage"]
  },
  { 
    title: "Decimal → Binary Converter",
    thumb: "/assets/images/thumbs/fcc-jsads-2.4.png",
    subtitle: "Decimal to Binary → Futuristic translator",
    blurb: "Recursion, input sanitary checks, call-stack demo animation.",
    href: "https://codepen.io/Mike-MacDonagh/pen/LEGWaPr",
    repo: null,
    tags: ["converter","recursion","ui"]
  },
  { 
    title: "RomaNumeral Converter",
    thumb: "/assets/images/thumbs/fcc-jsads-2.png",
    subtitle: "Roman Numeral Converter → Imperial reskin",
    blurb: "Value/symbol map, loop + subtraction rules, error messaging.",
    href: "https://codepen.io/Mike-MacDonagh/pen/ZYQeZBm",
    repo: null,
    tags: ["converter","algorithm","mapping"]
  },
  { 
    title: "Comment Moderation Terminal",
    thumb: "/assets/images/thumbs/fcc-jsads-3.1.png",
    subtitle: "Spam Filter → Regex troll detector",
    blurb: "Regex categories, scoring, highlights, heat mapping.",
    href: "https://codepen.io/Mike-MacDonagh/pen/ogbWBPV",
    repo: null,
    tags: ["moderation","regex","tool"]
  },
  { 
    title: "Mixtape Sorter",
    thumb: "/assets/images/thumbs/fcc-jsads-3.2.png",
    subtitle: "Number Sorter → Track sorting",
    blurb: "Bubble/Selection/Insertion, localeCompare, swap loops.",
    href: "https://codepen.io/Mike-MacDonagh/pen/XJXgdPX",
    repo: null,
    tags: ["sorting","algorithm","music-app"]
  },
  { 
    title: "D&D Dice Lab",
    thumb: "/assets/images/thumbs/fcc-jsads-3.3.png",
    subtitle: "Statistics Calculator → Dice engine",
    blurb: "Dice parsing (XdY+Z), mean/median/mode, variance/SD, DC/crit.",
    href: "https://codepen.io/Mike-MacDonagh/pen/PwZjgjZ",
    repo: null,
    tags: ["calculator","math","game"]
  },
  { 
    title: "Budget Tracker",
    thumb: "/assets/images/thumbs/fcc-jsads-3.4.png",
    subtitle: "Spreadsheet → Finance grid app",
    blurb: "Regex formula engine, range expansion, operator precedence, A–J×30, localStorage.",
    href: "https://codepen.io/Mike-MacDonagh/pen/LEGzPxY",
    repo: null,
    tags: ["spreadsheet","finance","regex"]
  },
  { 
    title: "Telephone Number Validator",
    thumb: "/assets/images/thumbs/fcc-jsads-3.png",
    subtitle: "Telephone Validator → Regex formats",
    blurb: "Pattern matching US formats, error states, event handling, reset flow.",
    href: "https://codepen.io/Mike-MacDonagh/pen/zxrPrEE",
    repo: null,
    tags: ["validator","regex","form"]
  },

  { 
    title: "Vans Storefront",
    thumb: "/assets/images/thumbs/fcc-jsads-4.1.png",
    subtitle: "Shopping Cart → Product grid + totals",
    blurb: "DOM delegation, subtotal/tax/total, image CDN, fullscreen zoom, :has() collapse.",
    href: "https://codepen.io/Mike-MacDonagh/pen/yyePoMO",
    repo: null,
    tags: ["shopping-cart","ecommerce","ui"]
  },
  { 
    title: "Mouse Maze",
    thumb: "/assets/images/thumbs/fcc-jsads-4.2.png",
    subtitle: "Platformer Game → Emoji canvas engine",
    blurb: "Canvas, AABB collisions, portals, multi-room map, HUD, mobile D-pad.",
    href: "https://codepen.io/Mike-MacDonagh/pen/myVpmxJ",
    repo: null,
    tags: ["game","canvas","engine"]
  },
  { 
    title: "Slot Machine",
    thumb: "/assets/images/thumbs/fcc-jsads-4.3.png",
    subtitle: "Dice Game → Slot Machine",
    blurb: "Math.random, face rendering, scoring rules, stateful credits, modular functions.",
    href: "https://codepen.io/Mike-MacDonagh/pen/zxrpXaZ",
    repo: null,
    tags: ["game","randomness","state"]
  },
  { 
    title: "Cash Register",
    thumb: "/assets/images/thumbs/fcc-jsads-4.png",
    subtitle: "Cash Register → Penny-safe change maker",
    blurb: "Greedy algorithm, cents math, drawer map, OPEN/CLOSED/INSUFFICIENT states.",
    href: "https://codepen.io/Mike-MacDonagh/pen/dPGJEWa",
    repo: null,
    tags: ["algorithm","finance","calculator"]
  },
  { 
    title: "Neon Index - Cyberpunk Media Fetch",
    thumb: "/assets/images/thumbs/fcc-jsads-5.1.png",
    subtitle: "Authors Page → Wikipedia media index",
    blurb: "REST fetch, async/await, filters, shuffle, load-more, modular rendering.",
    href: "https://codepen.io/Mike-MacDonagh/pen/jEWZbRQ",
    repo: null,
    tags: ["api","fetch-app","catalog"]
  },
  { 
    title: "fCC Projects Checklist",
    thumb: "/assets/images/thumbs/fcc-jsads-5.2.png",
    subtitle: "Forum Leaderboard → Latest Projects table",
    blurb: "Async/await, nested JSON destructuring, map/join templating, relative time.",
    href: "https://codepen.io/Mike-MacDonagh/pen/QwyQgXZ",
    repo: null,
    tags: ["leader-board","api","table"]
  },
  { 
    title: "Pokémon API Search",
    thumb: "/assets/images/thumbs/fcc-jsads-5.png",
    subtitle: "RPG Creature Search App → Pokémon API Search",
    blurb: "fetch + async/await, JSON parsing, dynamic DOM, cleared types per query.",
    href: "https://codepen.io/Mike-MacDonagh/pen/ZYQrJmW",
    repo: null,
    tags: ["api","fetch-app","search"]
  },

  /* === Front End Development Libraries (5) === */
  { 
    title: "Random (Simpsons) Quote Machine",
    thumb: "/assets/images/thumbs/fcc-fel-1.png",
    subtitle: "Random Quote Machine → Simpsons-themed app",
    blurb: "React 17 app with local state, quote/author render, bright Simpsons UI and cartoon styling.",
    href: "https://codepen.io/Mike-MacDonagh/pen/KwVjwzy",
    repo: null,
    tags: ["react","randomness","ui"]
  },
  { 
    title: "Markdown Previewer",
    thumb: "/assets/images/thumbs/fcc-fel-2.png",
    subtitle: "Markdown Previewer → Live GitHub-flavored editor",
    blurb: "React app using Marked library with split-view layout, GFM + line breaks, accessible theme.",
    href: "https://codepen.io/Mike-MacDonagh/pen/KwVOPrL",
    repo: null,
    tags: ["react","tool","editor"]
  },
  { 
    title: "Drum Machine",
    thumb: "/assets/images/thumbs/fcc-fel-3.png",
    subtitle: "Drum Machine → Interactive arcade soundboard",
    blurb: "React 17 app with keyboard triggers, real-time playback, grid layout, and tactile button feedback.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaKYVOX",
    repo: null,
    tags: ["react","audio","interaction"]
  },
  { 
    title: "JavaScript Calculator",
    thumb: "/assets/images/thumbs/fcc-fel-4.png",
    subtitle: "JavaScript Calculator → jQuery + Bootstrap UI",
    blurb: "Chained operation logic, AC/CE keys, keyboard input, Bootstrap styling, and FCC compliance.",
    href: "https://codepen.io/Mike-MacDonagh/pen/YPqKyRj",
    repo: null,
    tags: ["calculator","jquery","bootstrap"]
  },
  { 
    title: "25 + 5 Pomodoro Clock",
    thumb: "/assets/images/thumbs/fcc-fel-5.png",
    subtitle: "25 + 5 Clock → Focus timer with Redux-style state",
    blurb: "State machine timer with pause/resume, audio alert, animated ring, full a11y + keyboard support.",
    href: "https://codepen.io/Mike-MacDonagh/pen/MYygaZe",
    repo: null,
    tags: ["timer","react","state"]
  },

  /* === Data Visualization with D3 (5) === */
  { 
    title: "Global GDP Bar Chart",
    thumb: "/assets/images/thumbs/fcc-d3dv-1.png",
    subtitle: "US GDP Bar-Chart → D3 SVG bars",
    blurb: "External JSON fetch, scaled x/y axes, SVG <rect> bars, hover tooltip, and FCC hooks (#title, #tooltip, #x-axis, #y-axis).",
    href: "https://codepen.io/Mike-MacDonagh/pen/qEZqvLP",
    repo: null,
    tags: ["d3","data-viz","chart"]
  },
  { 
    title: "Cycling Doping Scatterplot",
    thumb: "/assets/images/thumbs/fcc-d3dv-2.png",
    subtitle: "Doping Scatterplot → Year vs time",
    blurb: "D3 scales for paired data, colored categories, legend and gridlines, interactive tooltip, and FCC-compliant circle/tooltip IDs.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaKmgwN",
    repo: null,
    tags: ["d3","data-viz","chart","sports"]
  },
  { 
    title: "Global Temperature Heat Map",
    thumb: "/assets/images/thumbs/fcc-d3dv-3.png",
    subtitle: "Surface Temperature Heat Map → Variance grid",
    blurb: "Color-mapped month/year grid, custom cool-to-warm scale, dense SVG cells with hover highlight, and full FCC legend/axis tests.",
    href: "https://codepen.io/Mike-MacDonagh/pen/MYymvdj",
    repo: null,
    tags: ["d3","data-viz","visual"]
  },
  { 
    title: "US Education Choropleth",
    thumb: "/assets/images/thumbs/fcc-d3dv-4.png",
    subtitle: "US Education Choropleth → County map",
    blurb: "TopoJSON-driven US county map, education percentage color gradient, legend, hover tooltip with county + attainment, FCC mapping IDs.",
    href: "https://codepen.io/Mike-MacDonagh/pen/QwNvOBB",
    repo: null,
    tags: ["d3","data-viz","map"]
  },
  { 
    title: "Video Game Sales Treemap",
    thumb: "/assets/images/thumbs/fcc-d3dv-5.png",
    subtitle: "Game Sales Tree Map → Hierarchical layout",
    blurb: "Hierarchical treemap sized by sales, category color coding, hover tooltips, and FCC legend/data-* bindings for all tiles.",
    href: "https://codepen.io/Mike-MacDonagh/pen/vEGZjxZ",
    repo: null,
    tags: ["d3","data-viz","visual"]
  }
];



/* Safety net: strip any stray 'codepen' or 'fcc' tags if they ever appear */
ALL_PROJECTS.forEach(p => p.tags = (p.tags || []).filter(t => t !== "codepen" && t !== "fcc"));

/* === Latest-first ordering === */
const PROJECTS = [...ALL_PROJECTS].reverse();

/* ----------------------------------------
   Projects page: filters + show-more
---------------------------------------- */
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
        ${
          thumb
            ? `<img
                 src="${thumb}"
                 alt="${alt}"
                 loading="lazy"
                 width="640"
                 height="360"
                 class="card-img-top object-fit-cover"
               />`
            : `<div class="no-thumb-placeholder"></div>`
        }
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

/* ----------------------------------------
   Boot (safe on any page)
---------------------------------------- */
(function initProjects() {
  // tiny CSS helpers (safe to inject)
  const css = `
    .ratio { position: relative; width: 100%; }
    .ratio::before { display: block; padding-top: calc(100% / (16/9)); content: ""; }
    .ratio > * { position: absolute; inset: 0; }
    .object-fit-cover { object-fit: cover; width: 100%; height: 100%; }
    .badge-accent { background: #ffd84a; color: #111; }
    .no-thumb-placeholder { background: var(--bs-secondary-bg, #f1f3f5); width: 100%; height: 100%; }
    .tag.is-active { outline: 2px solid currentColor; }
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

/* ----------------------------------------
   Home page: render 4-project preview
   (latest first) if #home-projects exists
---------------------------------------- */
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
