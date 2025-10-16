---
layout: default
title: Home
---

<!-- HERO -->
<section class="py-5 text-center" style="background: var(--bg);">
  <div class="container">
    <img src="{{ '/assets/images/logo.png' | relative_url }}" alt="Logo" class="mb-3" style="height: 80px;">
    <h1 class="display-5 fw-bold mb-3">Mike MacDonagh</h1>
    <p class="lead mx-auto" style="max-width: 760px;">
      Support-focused developer who turns chaos into clean, documented systems.
      I troubleshoot, fix broken processes, and build lightweight tools that keep teams moving.
    </p>
    <div class="d-flex gap-2 justify-content-center mt-3">
      <a href="mailto:michael@mechmadhog.com" class="btn btn-primary">Contact Me</a>
      <a href="{{ '/assets/docs/michael-macdonagh-cv-sept-2025.pdf' | relative_url }}" class="btn btn-outline-secondary">Download CV</a>
    </div>
  </div>
</section>

<!-- SNAPSHOT -->
<section class="py-4 border-top border-bottom" style="background: var(--bg-elev);">
  <div class="container">
    <div class="row g-3 text-center">
      <div class="col-12 col-md-4">
        <div class="small text-uppercase text-muted">Base</div>
        <div class="fw-semibold">Mullingar, Ireland</div>
      </div>
      <div class="col-12 col-md-4">
        <div class="small text-uppercase text-muted">Experience</div>
        <div class="fw-semibold">10+ years across support & web</div>
      </div>
      <div class="col-12 col-md-4">
        <div class="small text-uppercase text-muted">Focus</div>
        <div class="fw-semibold">Support Ops · Docs · Light Dev · AI</div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT I DO -->
<section class="py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="h3 mb-3 text-center">What I Do</h2>
        <p class="mx-auto" style="max-width: 70ch;">
          I keep internal systems tidy and usable: triaging bugs, grooming backlogs, writing practical user guides,
          and shipping small tools (web/automation) that remove friction. I’m comfortable digging through
          SharePoint/Teams setups, documenting processes, and training AI assistants to handle routine queries—
          so people get answers faster.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- EXPERIENCE HIGHLIGHTS -->
<section class="py-5">
  <div class="container">
    <h2 class="h3 mb-4 text-center">Experience Highlights</h2>
    <div class="row g-4 justify-content-center">
      <div class="col-md-6">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start">
              <h3 class="h5 mb-2">Freelance Developer & Digital Consultant</h3>
              <span class="badge text-bg-light">2015 – Present</span>
            </div>
            <div class="text-muted small mb-2">Mechmadhog · Collabs: Avaz & Digital Assist</div>
            <ul class="mb-0">
              <li>Delivered client websites; handled hosting, domains, email & SSL.</li>
              <li>Theme/dev work in HTML/CSS/JS; WordPress migrations & maintenance.</li>
              <li>Process & tooling advice; light UX, SEO enhancements, analytics reporting.</li>
              <li>Docs & handovers so clients can self-serve confidently.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start">
              <h3 class="h5 mb-2">Junior Power Apps Developer</h3>
              <span class="badge text-bg-light">Dec 2019 – Sept 2025</span>
            </div>
            <div class="text-muted small mb-2">EirEvo (formerly Evros Technology Group)</div>
            <ul class="mb-0">
              <li>Internal application support for SharePoint, Teams & line-of-business tools.</li>
              <li>Built/maintained documentation (user guides, environment setup, SOPs).</li>
              <li>Backlog management via DevOps & Autotask; triage bugs & enhancements.</li>
              <li>Facilitated standups, knowledge-shares; trained/configured support AI agents.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS GALLERY (Home preview: 4 items) -->
<section class="py-5">
  <div class="container">
    <h2 class="h3 text-center mb-3">Projects</h2>

    <!-- 4 cards injected by /assets/js/main.js -->
    <div id="home-projects" class="row g-4"></div>

    <div class="text-center mt-3">
      <a class="btn btn-outline-primary" href="{{ '/projects/' | relative_url }}">See more</a>
    </div>
  </div>
</section>

<!-- LATEST POSTS -->
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="h3 text-center mb-4">Latest Writing</h2>
    {% for post in site.posts limit:3 %}
      <div class="mb-4 mx-auto" style="max-width: 880px;">
        <h4 class="mb-1"><a href="{{ post.url | relative_url }}" class="text-decoration-none">{{ post.title }}</a></h4>
        <div class="text-muted small mb-2">{{ post.date | date: "%B %d, %Y" }}</div>
        <p class="mb-0">{{ post.excerpt }}</p>
      </div>
    {% endfor %}
    <div class="text-center mt-3">
      <a href="{{ '/blog' | relative_url }}" class="btn btn-outline-secondary">Read the Blog</a>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="py-5 text-center border-top">
  <div class="container">
    <h2 class="h4 mb-2">Let’s make your systems quieter and your team faster.</h2>
    <p class="text-muted mb-3">Quick responses. Clear handovers. No drama.</p>
    <div class="d-flex gap-2 justify-content-center">
      <a class="btn btn-primary" href="mailto:michael@mechmadhog.com">Email Me</a>
      <a class="btn btn-outline-secondary" href="https://www.linkedin.com/in/michaelmacdonagh/" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
</section>
