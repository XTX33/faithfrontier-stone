# COMPREHENSIVE RESPONSIVE AUDIT REPORT

Generated: 2025-12-21T15:47:20.404Z

## SUMMARY

- Inline max-widths: 10
- Hardcoded widths in CSS: 17
- Container issues: 12
- Missing media queries: 11

## INLINE MAX-WIDTH ISSUES

### cases\index.md:27
**Current:** `1100px`
**Recommendation:** Use `max-width: min(1100px, 95vw)` or clamp
**Context:** `== HERO SECTION ==================== -->
<div class="cases-hero">
  <div class...`

### cases\index.md:69
**Current:** `1100px`
**Recommendation:** Use `max-width: min(1100px, 95vw)` or clamp
**Context:** `>

<!-- ==================== MAIN CONTENT ==================== -->
<div class...`

### index.md:33
**Current:** `900px`
**Recommendation:** Use `max-width: min(900px, 95vw)` or clamp
**Context:** `"section" style="background: var(--emerald-600); color: white;">
    <div class...`

### PERFORMANCE_GUIDE.md:32
**Current:** `600px`
**Recommendation:** Use `max-width: min(600px, 95vw)` or clamp
**Context:** `/path/to/image-800.jpg 800w,
               /path/to/image-1200.jpg 1200w"
  d...`

### _essays\2025-11-10-geneva-bible-scroll.md:37
**Current:** `820px`
**Recommendation:** Use `max-width: min(820px, 95vw)` or clamp
**Context:** `-size: 0.9rem;
    text-align: center;
  }

  /* Wrapper */
  .ff-geneva-sc...`

### _essays\2025-11-10-geneva-bible-scroll.md:147
**Current:** `768px`
**Recommendation:** Use `max-width: min(768px, 95vw)` or clamp
**Context:** `;
    border-bottom: 1px solid #c9b89a;
    max-width: 85%;
  }

  /* Respo...`

### _includes\case-resources.html:270
**Current:** `768px`
**Recommendation:** Use `max-width: min(768px, 95vw)` or clamp
**Context:** `adius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.7...`

### _internal\THEME-QUICK-REFERENCE.md:136
**Current:** `640px`
**Recommendation:** Use `max-width: min(640px, 95vw)` or clamp
**Context:** ````

## Responsive Breakpoints

```css
/* Mobile first - default styles are...`

### _internal\THEME-QUICK-REFERENCE.md:137
**Current:** `900px`
**Recommendation:** Use `max-width: min(900px, 95vw)` or clamp
**Context:** `/* Mobile first - default styles are mobile */
@media (max-width: 640px) { /* P...`

### _pages\cases.md:18
**Current:** `500px`
**Recommendation:** Use `max-width: min(500px, 95vw)` or clamp
**Context:** `arch" id="case-search" placeholder="Search cases by title, docket, or court..." ...`

## HARDCODED CSS WIDTHS

### assets\css\cases-index.css:47
**Value:** `800px`
**Recommendation:** Add responsive breakpoints

### assets\css\cases.css:85
**Value:** `500px`
**Recommendation:** Add responsive breakpoints

### assets\css\components.css:358
**Value:** `200px`
**Recommendation:** Add responsive breakpoints

### assets\css\home.css:112
**Value:** `520px`
**Recommendation:** Add responsive breakpoints

### assets\css\main.css:1391
**Value:** `200px`
**Recommendation:** Add responsive breakpoints

### assets\css\main.css:1497
**Value:** `400px`
**Recommendation:** Add responsive breakpoints

### assets\css\premium-header.css:56
**Value:** `1400px`
**Recommendation:** Add responsive breakpoints

### assets\css\premium-hero.css:85
**Value:** `1200px`
**Recommendation:** Add responsive breakpoints

### assets\css\premium-hero.css:166
**Value:** `700px`
**Recommendation:** Add responsive breakpoints

### assets\css\premium-hero.css:262
**Value:** `1200px`
**Recommendation:** Add responsive breakpoints

### assets\css\stewardship-resources.css:30
**Value:** `700px`
**Recommendation:** Add responsive breakpoints

### assets\css\stewardship-resources.css:38
**Value:** `800px`
**Recommendation:** Add responsive breakpoints

### assets\css\stewardship-resources.css:97
**Value:** `1200px`
**Recommendation:** Add responsive breakpoints

### assets\css\stewardship-resources.css:259
**Value:** `800px`
**Recommendation:** Add responsive breakpoints

### assets\css\stewardship-resources.css:294
**Value:** `800px`
**Recommendation:** Add responsive breakpoints

### assets\css\stewardship-resources.css:327
**Value:** `800px`
**Recommendation:** Add responsive breakpoints

### assets\css\theme.css:97
**Value:** `180px`
**Recommendation:** Add responsive breakpoints

## CONTAINER ISSUES

### _essays\2025-10-11-tiller-earth.md:186
**Issue:** Container without max-width
**Context:** `-- markdownlint-disable MD033 -->
<div class="ff-archive">
  <section class="s...`

### _essays\2025-10-11-tiller-earth.md:210
**Issue:** Container without max-width
**Context:** `n>
        </div>
      </div>
    </div>
  </section>

  <section class="...`

### _essays\2025-11-10-revelations.md:22
**Issue:** Container without max-width
**Context:** `ledge."
  — Psalm 19:1–2
---

<section class="section section-purpose" aria-...`

### _essays\2025-11-10-revelations.md:38
**Issue:** Container without max-width
**Context:** `iv>
</section>

<section class="section section-alt section-themes" aria-labe...`

### _essays\2025-11-10-revelations.md:187
**Issue:** Container without max-width
**Context:** `div>
</section>

<section class="section section-connections" aria-label="How...`

### _essays\2025-11-10-revelations.md:251
**Issue:** Container without max-width
**Context:** `on>

<section class="section section-alt section-purpose-revealed" aria-label=...`

### _essays\2025-11-10-revelations.md:315
**Issue:** Container without max-width
**Context:** `iv>
</section>

<section class="section section-call-to-action" aria-label="W...`

### _internal\THEME-QUICK-REFERENCE.md:55
**Issue:** Container without max-width
**Context:** `ow-md           /* Medium shadow */
```

## Common Component Classes

### C...`

### _internal\THEME-QUICK-REFERENCE.md:86
**Issue:** Container without max-width
**Context:** `iv class="card">...</div>
</div>
```

### Sections
```html
<section class=...`

### _internal\THEME-QUICK-REFERENCE.md:193
**Issue:** Container without max-width
**Context:** `<aside class="hero-side-panel">...</aside>
  </div>
</section>
```

### Car...`

### _pages\active-cases.md:12
**Issue:** Container without max-width
**Context:** `de_hero: true
show_breadcrumbs: true
---

<section class="section-block case...`

### _pages\active-cases.md:22
**Issue:** Container without max-width
**Context:** `et records.
    </p>
  </div>
</section>

<section class="section-block cas...`

## MISSING MEDIA QUERIES

### assets\css\base.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\cases.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\components.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\home.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\layout.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\main.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\print.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\responsive-enhancements.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\theme.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\utilities.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

### assets\css\variables.css
**Issue:** Has max-width but no tablet breakpoint (@media max-width: 768px)

## RECOMMENDED RESPONSIVE STANDARDS

```css
/* Content Containers */
.container { max-width: min(1200px, 95vw); }
.container-narrow { max-width: min(900px, 92vw); }
.reading-width { max-width: min(65ch, 90vw); }

/* Breakpoints */
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 640px) { /* Mobile */ }
```

