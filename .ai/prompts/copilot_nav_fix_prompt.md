# Copilot Task — Fix Broken Mobile Nav Drawer (faithfrontier)

You are refactoring the mobile navigation drawer for a static/Jekyll site.

## Goal
- Mobile: nav items are inside a **drawer** (off-canvas) with backdrop overlay.
- Desktop: horizontal nav visible and aligned.
- No layout regressions; no duplicate menus.
- Accessibility: keyboard + screen readers behave correctly.

## Constraints
- Do not add heavy frameworks.
- Prefer plain JS + semantic HTML.
- Keep styles scoped; avoid global breaking changes.

## Files to edit (only if needed)
- "_includes/header.html","assets/css/main.css","assets/js/main.js"

## Required implementation details
1) **Toggle button**
   - button type=button class=nav-toggle aria-expanded=false aria-controls=mobile-drawer
   - Updates aria-expanded on open/close.

2) **Backdrop overlay**
   - position: fixed; inset: 0;
   - Click backdrop closes drawer.

3) **Drawer panel**
   - position: fixed; top: 0; right: 0; height: 100dvh; width: min(90vw, 360px);
   - Uses transform: translateX(100%) when closed; translateX(0) when open.

4) **Z-index/stacking-context hardening**
   - Avoid putting drawer under elements with transforms; place overlay + drawer as direct children of body or the highest layout container.
   - Use a consistent high z-index on overlay + drawer.

5) **A11y & behavior**
   - ESC closes drawer.
   - When open: lock page scroll; restore on close.
   - Initial focus moves into drawer; focus is trapped while open OR at minimum returns to toggle on close.
   - Use WAI-ARIA dialog pattern semantics if the drawer is modal (recommended).

## Output required
- Provide a minimal diff-like patch for each edited file.
- Explain why each change fixes the symptom (overlay behind content, drawer not opening, scroll bleed, focus loss).
- Ensure the desktop menu remains unchanged.
