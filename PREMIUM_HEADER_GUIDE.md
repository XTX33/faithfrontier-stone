# Premium Header System

## Overview

A luxury-brand-inspired header with center-aligned logo that smoothly scales on scroll. Inspired by Apple, high-end fashion brands, and premium web experiences.

## Features

### Visual Design
- ✨ **Glassmorphism Effect**: Frosted glass backdrop with subtle blur
- 🎯 **Center-Aligned Branding**: Logo and wordmark centered for maximum impact
- 📐 **Smooth Scaling**: Logo shrinks elegantly on scroll (48px → 36px desktop)
- 🎨 **Subtle Gradient Overlay**: Brass-tinted gradient on hover
- 💫 **Smooth Transitions**: All animations use cubic-bezier easing

### Behavior
- 📜 **Scroll Detection**: Changes state after 50px scroll
- 🔄 **Optimized Performance**: Uses `requestAnimationFrame` for smooth animations
- 📱 **Mobile Drawer**: Elegant slide-in navigation on mobile
- ⌨️ **Keyboard Accessible**: Full ARIA support and keyboard navigation
- 🎭 **Active State**: Current page highlighted in navigation

### Technical
- 🚀 **Fixed Positioning**: Stays at top while scrolling
- 🎪 **z-index 9999**: Ensures header stays above all content
- 📦 **Body Padding**: Automatic compensation for fixed header
- 🎬 **CSS-only Animations**: No JavaScript required for scroll effects
- ♿ **WCAG AA Compliant**: Focus indicators and screen reader support

## File Structure

```
faithfrontier/
├── _includes/
│   └── header.html                 # Premium header markup
├── assets/
│   ├── css/
│   │   ├── premium-header.css     # Header styles
│   │   └── theme.css              # Imports premium-header.css
│   └── js/
│       └── premium-header.js      # Scroll & nav interactions
└── _includes/
    └── scripts.html               # Includes premium-header.js
```

## Implementation

### 1. HTML Structure

```html
<header class="premium-header">
  <div class="premium-header__inner">
    <a class="premium-brand" href="/">
      <div class="premium-brand__logo">
        <img class="premium-brand__mark" src="logo-mark.svg" />
        <span class="premium-brand__wordmark">
          <!-- SVG wordmark -->
        </span>
      </div>
    </a>
    
    <nav class="premium-nav">
      <!-- Navigation links -->
    </nav>
  </div>
</header>
```

### 2. CSS Classes

#### Header States
- `.premium-header` - Base header
- `.premium-header.is-scrolled` - Applied after scrolling 50px
- `.premium-header.is-loaded` - Applied after page load

#### Brand Elements
- `.premium-brand` - Clickable logo container
- `.premium-brand__mark` - Logo icon (48px → 36px)
- `.premium-brand__wordmark` - Logo text (48px → 36px)

#### Navigation
- `.premium-nav` - Navigation container
- `.premium-nav__list` - Navigation list
- `.premium-nav__link` - Individual nav links
- `.premium-nav__link--highlight` - Featured link (e.g., "Stewardship Resources")
- `.premium-nav.is-open` - Mobile nav open state

#### Mobile
- `.premium-nav-toggle` - Hamburger button
- `.premium-nav-toggle__bar` - Hamburger lines
- `.premium-nav-overlay` - Backdrop overlay
- `.premium-nav__close` - Close button

### 3. JavaScript API

```javascript
// Automatically initialized on page load
// No manual initialization required

// The script handles:
// - Scroll detection (50px threshold)
// - Header state changes
// - Mobile navigation
// - Smooth scrolling
// - Active page highlighting
```

## Customization

### Adjust Scroll Threshold

In `premium-header.js`:
```javascript
const SCROLL_THRESHOLD = 50; // Change to desired pixel value
```

### Modify Logo Sizes

In `premium-header.css`:
```css
/* Default size */
.premium-brand__mark {
  width: 48px;
  height: 48px;
}

/* Scrolled size */
.premium-header.is-scrolled .premium-brand__mark {
  width: 36px;
  height: 36px;
}
```

### Change Transition Speed

```css
.premium-brand__mark {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Adjust Glassmorphism

```css
.premium-header {
  background: rgba(5, 13, 28, 0.85); /* Adjust alpha for transparency */
  backdrop-filter: blur(20px) saturate(180%); /* Adjust blur amount */
}
```

### Modify Gradient Overlay

```css
.premium-header::before {
  background: linear-gradient(
    180deg,
    rgba(212, 165, 116, 0.03) 0%,  /* Brass tint */
    transparent 100%
  );
}
```

## Responsive Breakpoints

### Desktop (1025px+)
- Full horizontal navigation
- Center-aligned logo
- Logo: 48px default → 36px scrolled

### Tablet (769px - 1024px)
- Mobile drawer navigation
- Center-aligned logo
- Logo: 48px default → 36px scrolled

### Mobile (480px - 768px)
- Mobile drawer navigation
- Center-aligned logo
- Logo: 40px default → 32px scrolled

### Small Mobile (< 480px)
- Wordmark hidden
- Icon only
- Logo: 36px default → 32px scrolled

## Performance Optimizations

1. **RequestAnimationFrame**: Scroll handling uses RAF for 60fps animations
2. **Passive Event Listeners**: Scroll events marked as passive
3. **Will-Change**: CSS property hints for browser optimization
4. **Debounced Resize**: Window resize events debounced to 150ms
5. **CSS Transitions Only**: No JavaScript animation loops

## Accessibility Features

1. **ARIA Labels**: All interactive elements properly labeled
2. **ARIA Expanded**: Toggle button states announced
3. **ARIA Current**: Active page link marked
4. **Keyboard Navigation**: Full keyboard support
5. **Focus Indicators**: Visible focus outlines (2px brass)
6. **Escape Key**: Closes mobile navigation
7. **Focus Management**: Automatic focus when opening/closing nav
8. **Reduced Motion**: Respects `prefers-reduced-motion` setting

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

### Fallbacks
- `backdrop-filter` with `-webkit-` prefix for Safari
- `rgba()` background for browsers without backdrop support

## Testing Checklist

- [ ] Logo scales smoothly on scroll
- [ ] Header changes state at 50px scroll
- [ ] Mobile navigation opens/closes correctly
- [ ] Escape key closes mobile nav
- [ ] Current page highlighted
- [ ] All links keyboard accessible
- [ ] Focus indicators visible
- [ ] Smooth scrolling works
- [ ] Responsive at all breakpoints
- [ ] Print styles hide navigation
- [ ] Reduced motion respected

## Comparison to Old Header

### Before (site-header)
- Left-aligned logo
- Static size
- Simple sticky positioning
- Basic mobile menu
- Limited animations

### After (premium-header)
- Center-aligned logo
- Dynamic scaling on scroll
- Glassmorphism effects
- Elegant mobile drawer
- Smooth cubic-bezier transitions
- Better accessibility
- Active state indicators
- Optimized performance

## Migration Notes

### Backward Compatibility

The old `.site-header` class remains in `theme.css` for any pages still using it. Both can coexist during migration.

### How to Switch

1. ✅ Already updated in `_includes/header.html`
2. ✅ CSS imported in `theme.css`
3. ✅ JavaScript included in `_includes/scripts.html`
4. No additional changes needed!

### Removing Old Header (Optional)

Once confirmed working, you can remove:
- Old `.site-header` styles from `theme.css` (lines 21-70)
- Old `nav.js` if no longer needed

## Troubleshooting

### Logo not centering
- Check `.premium-header__inner` has `justify-content: center`
- Ensure no conflicting absolute positioning

### Logo not shrinking on scroll
- Verify JavaScript is loaded (check console)
- Check `.is-scrolled` class is added to header
- Confirm scroll threshold is being met (50px)

### Mobile nav not opening
- Verify JavaScript is loaded
- Check for console errors
- Ensure overlay is being created

### Blur effect not working
- Check browser support for `backdrop-filter`
- Verify background has alpha transparency
- Try increasing blur amount

## Future Enhancements

- [ ] Add search bar integration
- [ ] Implement mega menu for complex navigation
- [ ] Add notification badge system
- [ ] Create dark/light mode toggle
- [ ] Add breadcrumb integration
- [ ] Implement sticky sub-navigation

## Credits

Inspired by:
- Apple.com navigation
- Luxury fashion brand headers (Gucci, Prada)
- High-end hospitality websites
- Premium e-commerce experiences

---

**Last Updated**: 2025-12-21  
**Maintained By**: Design System Team  
**Version**: 1.0.0
