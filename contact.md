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
    <div class="row g-4 align-items-start">
      <!-- Form -->
      <div class="col-12 col-lg-7">
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
          <!-- optional subject -->
          <input type="hidden" name="_subject" value="Website contact from michaelmacdonagh.net">
          <!-- spam honeypot (leave empty) -->
          <div class="visually-hidden" aria-hidden="true">
            <label for="website">Website</label>
            <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
          </div>
          <!-- redirect after submit (optional) -->
          <!-- <input type="hidden" name="_next" value="{{ '/contact/thanks/' | relative_url }}"> -->
          <!-- consent -->
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="yes" id="consent" required>
            <label class="form-check-label" for="consent">
              I’m happy for you to contact me regarding this enquiry.
            </label>
            <div class="invalid-feedback">Please confirm you’re OK with a reply.</div>
          </div>
          <button type="submit" class="btn btn-primary">Send message</button>
          <p class="small text-muted mt-2 mb-0">Powered by Formspree. I don’t share your details.</p>
        </form>
      </div>
      <!-- Direct contact + icons -->
      <div class="col-12 col-lg-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h6 mb-3">Prefer email or DM?</h2>
            <p class="mb-3">
              <i class="fa-solid fa-envelope me-2" aria-hidden="true"></i>
              <a href="mailto:michael@mechmadhog.com?subject=Hi%20Mike!" class="text-decoration-none">michael@mechmadhog.com</a>
            </p>
            <h3 class="h6 text-muted mb-2">Social</h3>
            <div class="d-flex gap-2">
              <a href="https://linkedin.com/in/michaelmacdonagh/" class="social" aria-label="LinkedIn" target="_blank" rel="me noopener">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/MechMadHog" class="social" aria-label="GitHub" target="_blank" rel="me noopener">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://codepen.io/Mike-MacDonagh" class="social" aria-label="CodePen" target="_blank" rel="me noopener">
                <i class="fa-brands fa-codepen"></i>
              </a>
              <a href="https://www.behance.net/mikemacdonagh" class="social" aria-label="Behance" target="_blank" rel="me noopener">
                <i class="fa-brands fa-behance"></i>
              </a>
            </div>
            <hr class="my-4">
            <p class="small text-muted mb-0">
              Tip: include any links, deadlines, or attachments context so I can help faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
