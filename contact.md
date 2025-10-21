---
layout: default
title: Contact
permalink: /contact/
---

<section class="py-5 page-min">
  <div class="container">
    <header class="mb-4 text-center">
      <h1 class="mb-2">Contact</h1>
      <p class="text-muted mb-0">Quick replies. Clear handovers. No drama.</p>
    </header>
    <div class="mb-4">
      <div class="card border-0 shadow-sm mx-auto" style="max-width: 720px;">
        <div class="card-body">
          <p class="mb-2 fw-semibold text-center">Two sites. Two purposes.</p>
          <ul class="list-unstyled mb-0 small">
            <li class="mb-1">
              <strong>michaelmacdonagh.net</strong> · formal portfolio — CV, certifications, project write-ups.
            </li>
            <li>
              <a href="https://mechmadhog.com/" class="text-decoration-none">mechmadhog.com</a>
              · informal site (coming soon) — experiments, artwork, comedy and blogging my interests &amp; adventures.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <form action="https://formspree.io/f/xblzyjdn" method="POST" class="needs-validation" novalidate>
          <!-- name -->
          <div class="mb-3">
            <label for="name" class="form-label">Your name</label>
            <input type="text" name="name" id="name" class="form-control" autocomplete="name" required>
            <div class="invalid-feedback">Please enter your name.</div>
          </div>
          <!-- email -->
          <div class="mb-3">
            <label for="email" class="form-label">Your email</label>
            <input type="email" name="_replyto" id="email" class="form-control" inputmode="email" autocomplete="email" required>
            <div class="invalid-feedback">A valid email helps me reply.</div>
          </div>
          <!-- message -->
          <div class="mb-3">
            <label for="message" class="form-label">Your message</label>
            <textarea name="message" id="message" rows="6" class="form-control" required></textarea>
            <div class="invalid-feedback">Please add a short message.</div>
          </div>
          <input type="hidden" name="_subject" value="Website contact from michaelmacdonagh.net">
          <div class="visually-hidden" aria-hidden="true">
            <label for="website">Website</label>
            <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="yes" id="consent" required>
            <label class="form-check-label" for="consent">
              I’m happy for you to contact me regarding this enquiry.
            </label>
            <div class="invalid-feedback">Please confirm you’re OK with a reply.</div>
          </div>
          <button type="submit" class="btn btn-primary">Send message</button>
          <p class="small text-muted mt-2 mb-0">
            Prefer email? <a href="mailto:michael@mechmadhog.com?subject=Hi%20Mike!" class="text-decoration-none">michael@mechmadhog.com</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

