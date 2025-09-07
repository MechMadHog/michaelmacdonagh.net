---
layout: default
title: Projects
permalink: /projects/
---

<section class="py-5 page-min">
  <div class="container">

    <!-- Header -->
    <header class="mb-4 text-center">
      <h1 class="mb-2">Projects</h1>
      <p class="text-muted mb-0">Selected work and learning pieces. Filter by tag.</p>
    </header>

    <!-- Filters (wired to /assets/js/main.js) -->
    <div class="filters d-flex flex-wrap gap-2 justify-content-center mb-4" aria-label="Project filters">
      <button class="btn btn-sm btn-outline-secondary is-active tag" data-tag="all">All</button>
      <button class="btn btn-sm btn-outline-secondary tag" data-tag="html">HTML</button>
      <button class="btn btn-sm btn-outline-secondary tag" data-tag="css">CSS</button>
      <button class="btn btn-sm btn-outline-secondary tag" data-tag="js">JS</button>
      <button class="btn btn-sm btn-outline-secondary tag" data-tag="design">Design</button>
      <button class="btn btn-sm btn-outline-secondary tag" data-tag="fcc">FreeCodeCamp</button>
      <button class="btn btn-sm btn-outline-secondary tag" data-tag="codepen">CodePen</button>
    </div>

    <!-- Grid populated by main.js -->
    <div id="projects" class="row g-4"></div>

    <!-- (Optional) tiny fallback if JS is off -->
    <noscript>
      <div class="alert alert-secondary">Enable JavaScript to see the projects grid.</div>
    </noscript>

  </div>
</section>
