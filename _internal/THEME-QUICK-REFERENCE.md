# Faith Frontier Theme - Quick Reference

## Most Common Variables

### Colors
```css
--ff-primary          /* Emerald green - buttons, links */
--ff-secondary        /* Brass/gold - accents, highlights */
--ff-surface          /* Background color */
--ff-surface-alt      /* Card/panel background */
--ff-text             /* Primary text */
--ff-text-muted       /* Secondary text */
--ff-highlight        /* Emphasis/cream color */
```

### Spacing
```css
--space-sm            /* 12px - tight spacing */
--space-md            /* 16px - default */
--space-lg            /* 24px - comfortable */
--space-xl            /* 32px - section breaks */
--space-2xl           /* 48px - major sections */
```

### Typography
```css
--text-sm             /* Small text */
--text-base           /* Body text (16px) */
--text-lg             /* Slightly larger */
--text-xl             /* 20px */
--text-2xl            /* 24px - subheadings */
--text-3xl            /* 32px - headings */

--fw-normal           /* 400 */
--fw-semibold         /* 600 */
--fw-bold             /* 700 */
--fw-extrabold        /* 800 */
```

### Layout
```css
--container           /* 1140px max width */
--container-pad       /* Responsive side padding */
--radius-sm           /* 10px */
--radius-md           /* 12px */
--radius-lg           /* 16px */
--shadow-base         /* Standard shadow */
--shadow-md           /* Medium shadow */
```

## Common Component Classes

### Containers
```html
<div class="container">...</div>
<div class="container--narrow">...</div>  <!-- 900px -->
<div class="container--text">...</div>    <!-- 720px -->
```

### Buttons
```html
<a class="btn btn-main" href="...">Primary Action</a>
<a class="btn btn-ghost" href="...">Secondary</a>
<button class="btn--sm">Small</button>
```

### Cards
```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Grids
```html
<div class="grid--auto">
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

### Sections
```html
<section class="section-block">
  <div class="container">
    <p class="section-eyebrow">Label</p>
    <h2 class="section-heading">Title</h2>
    <p class="section-lead">Lead paragraph</p>
  </div>
</section>
```

## Utility Classes

### Spacing
```html
<div class="mt-lg mb-xl">...</div>        <!-- margin top/bottom -->
<div class="py-md px-lg">...</div>        <!-- padding vertical/horizontal -->
<div class="gap-md">...</div>             <!-- grid/flex gap -->
```

### Typography
```html
<p class="text-center text-lg font-bold">...</p>
<p class="text-muted">...</p>
<span class="uppercase tracking-wider">...</span>
```

### Display
```html
<div class="flex items-center justify-between">...</div>
<div class="grid grid--3">...</div>
```

## Light Mode vs Dark Mode

### Default (Dark)
```html
<!-- Automatically uses dark theme -->
<body>...</body>
```

### Light Mode
```html
<!-- Add light-mode class -->
<div class="light-mode">...</div>
<!-- OR -->
<div class="ff-home">...</div>
```

## Responsive Breakpoints

```css
/* Mobile first - default styles are mobile */
@media (max-width: 640px) { /* Phone */ }
@media (max-width: 900px) { /* Tablet */ }
@media (min-width: 901px) { /* Desktop */ }
```

## Custom Styling Example

```html
<style>
  .my-component {
    background: var(--ff-surface-alt);
    padding: var(--space-lg);
    border-radius: var(--radius-md);
    border: 1px solid var(--ff-primary);
    box-shadow: var(--shadow-base);
  }
  
  .my-component h2 {
    color: var(--ff-highlight);
    font-size: var(--text-2xl);
    font-weight: var(--fw-bold);
    margin-bottom: var(--space-md);
  }
  
  .my-component:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
</style>

<div class="my-component">
  <h2>Custom Component</h2>
  <p>Using theme variables</p>
</div>
```

## Common Patterns

### Hero Section
```html
<section class="hero hero--home">
  <div class="container hero-grid">
    <div class="hero-main">
      <p class="hero-eyebrow">Eyebrow</p>
      <h1>Main Heading</h1>
      <p class="hero-lead">Lead paragraph</p>
      <div class="hero-actions">
        <a class="btn btn-main" href="...">CTA</a>
      </div>
    </div>
    <aside class="hero-side-panel">...</aside>
  </div>
</section>
```

### Card Grid
```html
<div class="container">
  <div class="card-grid">
    <article class="card">...</article>
    <article class="card">...</article>
    <article class="card">...</article>
  </div>
</div>
```

### Case Listing
```html
<div class="container cases-index">
  <div class="case-list">
    <article class="case-card">
      <h2><a href="...">Case Title</a></h2>
      <div class="case-meta">
        <div><strong>Court:</strong> ...</div>
        <div><strong>Status:</strong> ...</div>
      </div>
      <p class="case-overview">...</p>
    </article>
  </div>
</div>
```

## Tips

1. **Always use variables** instead of hardcoded values
2. **Semantic names** preferred: `var(--ff-primary)` not `var(--emerald-600)`
3. **Component classes** before utilities
4. **Light mode** requires explicit class: `.light-mode` or `.ff-home`
5. **Responsive** is mobile-first by default

## File Locations

- **Variables**: `/assets/css/_variables.css`
- **Components**: `/assets/css/_components.css`
- **Layout**: `/assets/css/_layout.css`
- **Case Styles**: `/assets/css/_cases.css`
- **Master Theme**: `/assets/css/theme.css`

## Import in Page Front Matter

```yaml
---
layout: default
title: "Page Title"
stylesheet: /assets/css/theme.css  # Or omit (loaded by default)
---
```

For home page (light mode):
```yaml
---
layout: default
title: "Home"
stylesheet: /assets/css/home.css
---
```
