---
layout: page
permalink: /news/
title: News
description: >
  Press coverage, talks, awards, and news from the Nyerges Lab.
nav: true
nav_order: 5
---

<style>
  .news-item { padding: 1.25rem 0; border-bottom: 0.5px solid rgba(128,128,128,0.18); }
  .news-item:last-child { border-bottom: none; }
  .news-item .date { font-family: var(--font-mono, monospace); font-size: 0.78rem; color: #888; letter-spacing: 0.5px; text-transform: uppercase; margin: 0 0 0.3rem; }
  .news-item h3 { margin: 0 0 0.45rem; font-size: 1.15rem; line-height: 1.4; font-weight: 500; }
  .news-item h3 a { text-decoration: none; color: inherit; }
  .news-item h3 a:hover { color: #0F6E56; }
  .news-item .blurb { font-size: 0.93rem; line-height: 1.6; margin: 0 0 0.45rem; color: #444; }
  .news-item .more { font-size: 0.85rem; }
  .news-item .more a { color: #0F6E56; text-decoration: none; }
  .news-item .more a:hover { text-decoration: underline; }
  .news-cat { display: inline-block; font-size: 0.7rem; letter-spacing: 0.5px; text-transform: uppercase; color: #888; margin-left: 0.6rem; padding: 0.1rem 0.5rem; border: 0.5px solid rgba(128,128,128,0.3); border-radius: 3px; vertical-align: middle; }
  @media (prefers-color-scheme: dark) {
    .news-item .blurb { color: #bbb; }
    .news-item h3 a:hover { color: #5DCAA5; }
    .news-item .more a { color: #5DCAA5; }
  }
</style>

<div class="news-list">
{% assign sorted = site.news | sort: "date" | reverse %}
{% for item in sorted %}
  <div class="news-item">
    <div class="date">{{ item.date | date: "%B %-d, %Y" }}{% if item.category %}<span class="news-cat">{{ item.category }}</span>{% endif %}</div>
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    <div class="blurb">{{ item.content | strip_html | truncatewords: 50 }}</div>
    <div class="more"><a href="{{ item.url | relative_url }}">Continue reading &rarr;</a></div>
  </div>
{% endfor %}
</div>
