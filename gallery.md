---
layout: gallery
title: Gallery
nav_order: 2
---

<p>Click each image for more details</p>
  {% for post in site.posts %}
  {% if post.tags contains 'gallery' %}
  {% if post.preview %}
  <div class="picture-container">
  {% picture gallery {{ post.preview }} --link {{ post.url }}%}
  <div class="overlay-text">{{ post.title }}, taken on {{ post.date | date: "%B %d, %Y" }}</div>
  </div>
  {% endif %}
  {% endif %}
  {% endfor %}
