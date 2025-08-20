---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="py-5 text-center bg-dark text-white">
  <div class="container">
    <img src="/assets/images/logo.png" alt="Logo" class="mb-3" style="height: 80px;">
    <h1 class="display-4 fw-bold">Hi, I'm Mike</h1>
    <p class="lead">Developer • Designer • Creator of Mech Mad Hog</p>
    <a href="/projects" class="btn btn-primary btn-lg mt-3">View My Projects</a>
  </div>
</section>

<!-- About Section -->
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="mb-4 text-center">About Me</h2>
    <div class="mx-auto" style="max-width: 768px;">
      <p>I'm a developer with a passion for building clean, functional websites using modern tools like Jekyll, Bootstrap, and Font Awesome. Whether I'm designing interfaces or writing code, I focus on simplicity and usability.</p>
      <p>My nickname "Mech Mad Hog" is an anagram of my name, given to me in boarding school — it's stuck ever since.</p>
      <div class="text-center">
        <a href="/about" class="btn btn-outline-secondary mt-3">Read More</a>
      </div>
    </div>
  </div>
</section>

<!-- Projects Preview -->
<section class="py-5">
  <div class="container">
    <h2 class="mb-4 text-center">Featured Projects</h2>
    <div class="row justify-content-center">
      <!-- Project Cards -->
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Project Name</h5>
            <p class="card-text">Brief description of the project and what makes it interesting.</p>
            <a href="/projects" class="btn btn-sm btn-primary">View Projects</a>
          </div>
        </div>
      </div>
      <!-- Repeat this card for more projects -->
    </div>
  </div>
</section>

<!-- Resources Section -->
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="mb-4 text-center">Resources</h2>
    <p class="text-center">Tools, guides, and notes I've curated to help developers and creatives.</p>
    <div class="text-center">
      <a href="/resources" class="btn btn-outline-primary">Explore Resources</a>
    </div>
  </div>
</section>

<!-- Blog Preview -->
<section class="py-5">
  <div class="container">
    <h2 class="mb-4 text-center">Latest Blog Posts</h2>
    {% for post in site.posts limit:3 %}
      <div class="mb-4">
        <h4><a href="{{ post.url }}" class="text-decoration-none">{{ post.title }}</a></h4>
        <p class="text-muted">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt }}</p>
      </div>
    {% endfor %}
    <div class="text-center">
      <a href="/blog" class="btn btn-outline-secondary">Read the Blog</a>
    </div>
  </div>
</section>

<!-- Contact CTA -->
<section class="py-5 bg-dark text-white">
  <div class="container text-center">
    <h2 class="mb-3">Get in Touch</h2>
    <p>If you’d like to collaborate or just say hi, feel free to reach out.</p>
    <a class="btn btn-light" href="mailto:michael@mechmadhog.com">Send Me an Email</a>
  </div>
</section>
