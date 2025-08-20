---
layout: default
title: Blog
permalink: /blog/
---

# Blog

<ul class="list-unstyled">
  {% for post in site.posts %}
    <li class="mb-3">
      <h5><a href="{{ post.url }}">{{ post.title }}</a></h5>
      <small class="text-muted">{{ post.date | date: "%B %d, %Y" }}</small>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
