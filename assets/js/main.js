/* /assets/js/main.js */

// ---- Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Project data (tags are lowercase keywords)
const projects = [
  {
    title: "Retro CRT Pyramid Console",
    subtitle: "Pyramid Generator (JS 1.1)",
    blurb:
      "Loops, strings, DOM buttons, <pre> spacing, height slider, character input, inverted toggle — 80s/90s CRT vibe.",
    href: "https://codepen.io/Mike-MacDonagh/pen/qEOvBap",
    repo: null,
    tags: ["js", "fcc", "codepen"],
    thumb: null,
  },
  {
    title: "Personal Portfolio Webpage",
    subtitle: "Responsive Web Design (final)",
    blurb:
      "Pulled everything together: grid, responsive, sticky nav, glow effects.",
    href: "https://codepen.io/Mike-MacDonagh/pen/bNVOrxK",
    repo: null,
    tags: ["html", "css", "fcc", "codepen"],
    thumb: null,
  },
  {
    title: "Rodney Mullen Tribute",
    subtitle: "Layout & hierarchy",
    blurb:
      "Strong typographic rhythm and imagery; clean content structure.",
    href: "https://codepen.io/Mike-MacDonagh/pen/JoYWqdV",
    repo: null,
    tags: ["html", "css", "design", "fcc", "codepen"],
    thumb: null,
  },
  {
    title: "Yolked / Bear-Mode Docs",
    subtitle: "Technical Documentation",
    blurb: "Multi-column layout, sticky sidebar, documentation structure.",
    href: "https://codepen.io/Mike-MacDonagh/pen/EaVRjgM",
    repo: null,
    tags: ["html", "css", "fcc", "codepen"],
    thumb: null,
  },
];

// ---- Helpers
const grid = document.getElementById("projects"); // should be a .row
if (!grid) {
  console.warn("[projects] #projects container not found");
}

/** Make a Bootstrap badge from a tag */
function badge(tag) {
  const labelMap = { js: "JS", html: "HTML", css: "CSS", fcc: "FCC", design: "Design", codepen: "CodePen" };
  const label = labelMap[tag] || tag;
  const isAccent = tag === "js"; // accent badge for JS examples
  return `<span class="badge ${isAccent ? "badge-accent" : "text-bg-light"}">${label}</span>`;
}

/** Card column (Bootstrap) */
function makeCard(p) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6";
  col.dataset.tags = p.tags.join(" ");

  col.innerHTML = `
    <article class="card h-100">
      ${p.thumb ? `
        <img src="${p.thumb}" class="card-img-top" alt="${p.title} thumbnail">
      ` : ""}
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

/** Render a list of projects into the grid */
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

// Initial render
render(projects);

// ---- Tag filtering (buttons: .btn[data-tag])
const tagButtons = Array.from(document.querySelectorAll('[data-tag]')).filter(
  (el) => el.tagName === "BUTTON" || el.classList.contains("btn")
);

let active = "all";

/** Set active button UI */
function setActiveButton(btn) {
  tagButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
}

/** Apply filter and render */
function applyFilter(tag) {
  active = tag || "all";
  const list =
    active === "all" ? projects : projects.filter((p) => p.tags.includes(active));
  render(list);
}

/** Try reading tag from URL (?tag=js or #tag=js) */
function initialTagFromURL() {
  const u = new URL(window.location.href);
  const q = u.searchParams.get("tag");
  if (q) return q.toLowerCase();
  const hash = u.hash.startsWith("#tag=") ? u.hash.slice(5) : null;
  return hash ? hash.toLowerCase() : null;
}

// Hydrate initial state
(function initFilters() {
  const initial = initialTagFromURL();
  const btnToActivate =
    initial && tagButtons.find((b) => (b.dataset.tag || "").toLowerCase() === initial)
      ? tagButtons.find((b) => (b.dataset.tag || "").toLowerCase() === initial)
      : tagButtons.find((b) => b.classList.contains("is-active")) || tagButtons[0];

  if (btnToActivate) {
    setActiveButton(btnToActivate);
    applyFilter(btnToActivate.dataset.tag);
  } else {
    applyFilter("all");
  }
})();

// Click + keyboard (Enter/Space) support
tagButtons.forEach((btn) => {
  const activate = () => {
    setActiveButton(btn);
    applyFilter(btn.dataset.tag);
    // Reflect selection in URL (query param) without reload
    const u = new URL(window.location.href);
    if (btn.dataset.tag === "all") {
      u.searchParams.delete("tag");
    } else {
      u.searchParams.set("tag", btn.dataset.tag);
    }
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


// Tiny scroll helper
  document.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 6);
  }, { passive: true });
