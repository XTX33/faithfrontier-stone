# Spotify Music Player Integration

## Overview
Faith Frontier now features a floating Spotify music player accessible on all pages. The player allows visitors to listen to curated music while browsing the site.

## Features

### User Experience
- **Floating Button**: Green Spotify button in bottom-right corner
- **Expandable Player**: Click to reveal full Spotify playlist embed
- **Persistent Playback**: Music continues playing while navigating between pages
- **Collapsible**: Close with X button or ESC key
- **State Memory**: Player remembers if you had it open/closed (localStorage)

### Technical Features
- **Responsive Design**: Mobile-optimized layout
- **Dark Mode Support**: Adapts to user's color scheme preference
- **Accessibility**: ARIA labels, keyboard controls, reduced motion support
- **No Dependencies**: Pure CSS/JavaScript implementation
- **Performance**: Lazy-loaded iframe, smooth animations

### Design
- Spotify brand green (#1DB954)
- Rounded, modern UI with shadows
- Smooth slide-up animation
- Hover effects and transitions
- Professional typography

## Playlist
**URL**: https://open.spotify.com/playlist/2JOI5fYMltyGdNCuh8H2s1

The playlist features music aligned with Faith Frontier's mission of spiritual growth and community building.

## Content Disclaimer

**Important**: Faith Frontier does not endorse any political views expressed in the music featured in this playlist.

### Contact Policy
If you hear content that conflicts with our mission, please contact: **dTb33@PM.me**

We will:
1. **Listen** to your concerns thoughtfully
2. **Consider** removing the artist or song from the playlist
3. **Provide pastoral guidance** on why content may remain if appropriate

Our theme: **Darkness to light**

## Technical Implementation

### Files
- `_includes/spotify-player.html` - Player component
- `_layouts/default.html` - Integrated into all pages

### Code Structure
```html
<div id="spotify-player-container">
  <button id="spotify-toggle">...</button>
  <div id="spotify-player-content">
    <iframe src="spotify-embed-url"></iframe>
    <div class="spotify-disclaimer">...</div>
  </div>
</div>
```

### JavaScript Features
- Toggle expand/collapse
- LocalStorage persistence
- Keyboard shortcuts (ESC to close)
- State management across page loads

### CSS Architecture
- Fixed positioning (bottom-right)
- Z-index: 9999 (stays on top)
- Flexbox for layout
- CSS animations with reduced-motion support
- Media queries for mobile responsiveness

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled
- Requires iframe support for Spotify embed

## Future Enhancements
- [ ] Volume control
- [ ] Playlist selection dropdown
- [ ] Minimize to compact mode
- [ ] Integration with site theme switcher
- [ ] Custom track recommendations

## Maintenance

### Updating Playlist
To change the playlist, update the iframe `src` URL in `_includes/spotify-player.html`:

```html
<iframe 
  src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID?utm_source=generator&theme=0"
  ...
>
```

### Styling Customization
All styles are in `_includes/spotify-player.html` within the `<style>` tag. Key variables:
- Primary color: `#1DB954` (Spotify green)
- Position: `bottom: 20px; right: 20px`
- Width: `380px` (desktop), `calc(100vw - 20px)` (mobile)

## Accessibility
- Screen reader friendly (ARIA labels)
- Keyboard navigable (Tab, ESC)
- High contrast text
- Focus indicators
- Reduced motion support

---

**Deployed**: December 28, 2025  
**Version**: 1.0  
**Status**: ✅ Active on all pages
