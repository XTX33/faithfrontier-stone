# Premium Header - Quick Reference

## 🎯 Key Features

**Center-Aligned Logo** that shrinks smoothly on scroll  
**Glassmorphism** backdrop with frosted glass effect  
**Smooth Animations** using cubic-bezier easing  
**Mobile Drawer** with elegant slide-in navigation  
**Fully Accessible** with ARIA and keyboard support

## 📐 Logo Sizes

| Screen Size | Default | Scrolled |
|-------------|---------|----------|
| Desktop (1025px+) | 48px | 36px |
| Tablet (769-1024px) | 48px | 36px |
| Mobile (480-768px) | 40px | 32px |
| Small (<480px) | 36px | 32px |

## 🎨 CSS Classes

```css
/* States */
.premium-header              /* Base header */
.premium-header.is-scrolled  /* After 50px scroll */
.premium-header.is-loaded    /* After page load */

/* Brand */
.premium-brand               /* Logo container */
.premium-brand__mark         /* Logo icon */
.premium-brand__wordmark     /* Logo text */

/* Navigation */
.premium-nav                 /* Nav container */
.premium-nav.is-open         /* Mobile nav open */
.premium-nav__link           /* Nav link */
.premium-nav__link--highlight /* Featured link */

/* Mobile */
.premium-nav-toggle          /* Hamburger button */
.premium-nav-overlay         /* Backdrop */
```

## ⚙️ Configuration

### Scroll Threshold
```javascript
// In premium-header.js
const SCROLL_THRESHOLD = 50; // pixels
```

### Transition Speed
```css
/* In premium-header.css */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Blur Amount
```css
backdrop-filter: blur(20px) saturate(180%);
```

## 🔧 Quick Customization

### Change Header Background
```css
.premium-header {
  background: rgba(5, 13, 28, 0.85); /* Dark blue-black */
}
```

### Adjust Brass Accent
```css
border-bottom: 1px solid rgba(212, 165, 116, 0.15);
```

### Modify Hover Effect
```css
.premium-brand:hover {
  transform: scale(1.02); /* Subtle scale up */
}
```

## 📱 Responsive Behavior

- **Desktop (1025px+)**: Horizontal navigation, center logo
- **Tablet (≤1024px)**: Mobile drawer, center logo  
- **Mobile (≤768px)**: Smaller logo, full-width drawer
- **Tiny (≤480px)**: Icon only, no wordmark

## ♿ Accessibility

- ✅ ARIA labels on all interactive elements
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus indicators (2px brass outline)
- ✅ Screen reader announcements
- ✅ Reduced motion support

## 🚀 Performance

- RAF-optimized scroll handling
- Passive event listeners
- CSS-only animations
- Debounced resize (150ms)
- No layout thrashing

## 🎯 Files Changed

```
✅ _includes/header.html           # Premium markup
✅ assets/css/premium-header.css   # Header styles
✅ assets/css/theme.css            # Import added
✅ assets/js/premium-header.js     # Interactions
✅ _includes/scripts.html          # Script included
```

## 🐛 Quick Debug

```javascript
// Check if script loaded
console.log(document.querySelector('.premium-header'));

// Check scroll class
console.log(document.querySelector('.premium-header').classList);

// Test mobile nav
document.querySelector('.premium-nav-toggle').click();
```

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |

---

**Quick Start**: No configuration needed! Just deploy and it works.  
**Full Docs**: See `PREMIUM_HEADER_GUIDE.md`
