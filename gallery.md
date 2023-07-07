---
layout: default
title: Gallery
nav_order: 2
---

  {% for post in site.posts %}
  {% if post.tags contains 'gallery' %}
  {% if post.preview %}
  <div class="picture-container">
  {% picture gallery {{ post.preview }} --link {{ post.url }}%}
  <div class="overlay-text">{{ post.title }}</div>
  </div>
  {% endif %}
  {% endif %}
  {% endfor %}
