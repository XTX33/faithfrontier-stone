---
layout: default
title: "Active Case Digest"
permalink: /cases/active/
description: "Live litigation tracker for the Faith Frontier Ecclesiastical Trust."
hero_panel: false
hide_hero: true
show_breadcrumbs: true
---

<section class="section-block cases-active-intro">
  <div class="container">
    <p class="section-eyebrow">Live litigation</p>
    <h1 class="section-heading">Active Case Digest</h1>
    <p class="section-lead">
      Essential highlights from active Faith Frontier cases. Click through for full docket records.
    </p>
  </div>
</section>

<section class="section-block cases-active-list">
  <div class="container">
    {% assign active_cases = site.cases | where: "status", "active" | sort: "filed_date" | reverse %}
    {% if active_cases.size == 0 %}
      <p>No cases are flagged as active right now. Check back soon.</p>
    {% else %}
      <div class="active-cases-grid">
        {% for case in active_cases %}
        <article class="active-case-card">
          <header>
            <p class="case-docket">{{ case.primary_docket | default: case.short_title }}</p>
            <h2><a href="{{ case.url | relative_url }}">{{ case.title }}</a></h2>
            <p class="case-meta">
              {{ case.court }}{% if case.status %} • {{ case.status | capitalize }}{% endif %}
            </p>
          </header>
          {% if case.overview %}
            <p class="case-overview">{{ case.overview | truncatewords: 30 }}</p>
          {% endif %}
          <footer>
            <a class="btn btn-ghost btn--sm" href="{{ case.url | relative_url }}">Full docket →</a>
          </footer>
        </article>
        {% endfor %}
      </div>
    {% endif %}
  </div>
</section>
