# Smart Case Resources System - Implementation Summary

**Created:** December 20, 2025  
**Purpose:** Professional conditional display of case notes and evidence folders

---

## Overview

A comprehensive system for intelligently displaying case-related resources (notes, evidence) only when they contain actual content. Empty folders are completely hidden to avoid placeholder clutter and maintain a clean, professional appearance.

## Problem Solved

**Before:**
- Empty notes/ and evidence/ folders showed placeholder messages or broken links
- Cluttered UI with "no content available" messages
- Unprofessional appearance when case resources weren't populated
- Manual maintenance required to show/hide sections

**After:**
- Folders only appear when they contain files
- Clean, professional cards with file listings
- Expandable/collapsible interface
- Zero maintenance - automatically detects content
- Beautiful file metadata display

---

## Files Created/Modified

### New Files

1. **`_includes/case-resources.html`** (300+ lines)
   - Smart resource detection using Jekyll static_files
   - Conditional rendering (only shows when content exists)
   - Expandable folder cards with file listings
   - Complete styling and JavaScript included

2. **`_includes/case-card.html`** (80 lines)
   - Reusable case card component
   - Used in cases index grid
   - Displays case metadata, status, tags
   - Responsive design

3. **`assets/css/cases-index.css`** (450+ lines)
   - Complete styling for /cases/ page
   - Hero section, stats, filters
   - Case card grid
   - Responsive breakpoints
   - Well-documented sections

4. **`cases/index.md`** (NEW - 250 lines, clean)
   - Removed 200+ lines of inline CSS
   - Well-documented structure
   - Uses external stylesheet
   - Client-side filtering
   - Multiple case sections (active, pending, closed)

### Modified Files

5. **`_layouts/case-enhanced.html`**
   - Added `{% include case-resources.html %}` before AI analysis section
   - Resources now appear after docket entries
   - Clean integration with existing layout

### Backup Files

6. **`cases/index.md.backup`** (15KB)
   - Original index.md preserved
   - Can be restored if needed

---

## How It Works

### Resource Detection

```liquid
{%- comment -%} Get files from notes and evidence directories {%- endcomment -%}
{% assign notes_files = site.static_files 
   | where_exp: "file", "file.path contains notes_path" 
   | where_exp: "file", "file.extname != ''" %}

{% assign evidence_files = site.static_files 
   | where_exp: "file", "file.path contains evidence_path" 
   | where_exp: "file", "file.extname != ''" %}

{%- comment -%} Only render if files exist {%- endcomment -%}
{% if notes_count > 0 or evidence_count > 0 %}
  <!-- Render resources section -->
{% endif %}
```

**Key Features:**
- Uses Jekyll's `site.static_files` to detect actual files
- Filters by directory path
- Excludes empty files (must have extension)
- Completely conditional - nothing renders if empty

### UI Components

**Resource Folder Card:**
```
┌─────────────────────────────────────┐
│ 📄 Research Notes          3 files ▼│  ← Header (clickable)
├─────────────────────────────────────┤
│ • Case_Analysis.pdf       PDF  ↗   │  ← File list (expandable)
│ • Timeline_Notes.md       MD   ↗   │
│ • Strategy_Memo.docx      DOCX ↗   │
└─────────────────────────────────────┘
```

**Features:**
- Icon-based folder identification
- File count badge
- Expandable/collapsible content
- File type indicators (PDF, MD, DOCX, etc.)
- Date stamps (when available)
- External link indicators
- Hover effects

### Folder Structure

```
cases/
  ├── barber-nj-pcr-2022/
  │   ├── filings/          ← Always visible (required)
  │   ├── notes/            ← Shows only if contains files
  │   ├── evidence/         ← Shows only if contains files
  │   └── docket.yml
  ├── atl-l-002794-25/
  │   ├── filings/
  │   ├── notes/            ← Hidden if empty
  │   ├── evidence/         ← Hidden if empty
  │   └── docket.yml
  └── index.md
```

---

## Technical Implementation

### Jekyll Liquid Logic

**Path Construction:**
```liquid
{% assign slug = page.url | split:'/' | last | default: page.slug %}
{% assign case_path = 'cases/' | append: slug %}
{% assign notes_path = case_path | append: '/notes' %}
{% assign evidence_path = case_path | append: '/evidence' %}
```

**File Filtering:**
```liquid
{% assign notes_files = site.static_files 
   | where_exp: "file", "file.path contains notes_path" 
   | where_exp: "file", "file.extname != ''" %}
```

**Conditional Display:**
```liquid
{% if notes_count > 0 %}
  <!-- Show notes folder -->
{% endif %}
```

### CSS Architecture

**Variable-Based Theming:**
```css
.resource-folder {
  background: var(--color-surface-alt, #2a2826);
  border: 1px solid var(--color-border, #3a3835);
  color: var(--color-text, #f9fafb);
}
```

**Smooth Transitions:**
```css
.resource-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.resource-folder.is-open .resource-content {
  max-height: 1000px;
}
```

### JavaScript Interaction

**Toggle Functionality:**
```javascript
header.addEventListener('click', function() {
  const isOpen = folder.classList.contains('is-open');
  
  if (isOpen) {
    folder.classList.remove('is-open');
    content.hidden = true;
  } else {
    folder.classList.add('is-open');
    content.hidden = false;
  }
});
```

---

## Case Index Improvements

### Before (Old index.md)

- **15,087 bytes** of inline CSS
- 476 lines total
- Difficult to maintain
- CSS mixed with content
- Hard to read/edit

### After (New index.md)

- **12,356 bytes** total (18% smaller)
- 250 lines of clean content
- 0 lines of inline CSS
- Well-documented sections
- Easy to maintain
- External stylesheet: `assets/css/cases-index.css`

### New Features

1. **Client-Side Filtering:**
   - Status filter (active/pending/closed)
   - Court filter (dynamic from case data)
   - Search across title, docket, description
   - Real-time updates

2. **Organized Sections:**
   - Hero with statistics
   - "Why This Matters" cards
   - Active cases section
   - Pending cases section
   - Closed cases section
   - Transparency statement

3. **Responsive Design:**
   - Mobile-first approach
   - Breakpoints at 768px and 480px
   - Grid columns adjust automatically
   - Touch-friendly controls

---

## Usage Examples

### Adding Notes to a Case

```bash
# Add a research note
echo "# Case Analysis" > cases/barber-nj-pcr-2022/notes/research.md

# Resource folder will automatically appear on case page
# No configuration needed!
```

### Adding Evidence

```bash
# Add evidence file
cp evidence.pdf cases/barber-nj-pcr-2022/evidence/

# Evidence folder will automatically appear
# File will be listed with metadata
```

### Checking What Will Display

```bash
# List files in notes folder
ls cases/barber-nj-pcr-2022/notes/

# If folder has files → will show on case page
# If folder is empty → completely hidden
```

---

## Integration Points

### Case Layout Integration

The resource display integrates seamlessly into the case-enhanced.html layout:

```html
<!-- Docket Entries -->
<section class="case-section docket">
  ...docket display...
</section>

<!-- Case Resources (auto-displayed when present) -->
{% include case-resources.html %}

<!-- AI Analysis (optional) -->
{% include case-analysis.html %}
```

**Position:** Between docket entries and AI analysis
**Behavior:** Only renders if files exist
**Styling:** Matches case page design system

### Cases Index Integration

The index page uses the case-card.html include:

```liquid
{% for case in site.cases %}
  {% include case-card.html case=case %}
{% endfor %}
```

**Features:**
- Consistent card design
- Automatic metadata extraction
- Responsive grid layout
- Filter-compatible attributes

---

## Benefits

### For Users

1. **Clean Experience:** No clutter from empty folders
2. **Professional Appearance:** Only show content when available
3. **Easy Discovery:** Clear file listings with metadata
4. **Quick Access:** Direct links to resources
5. **Visual Hierarchy:** Icons and cards organize information

### For Developers

1. **Zero Configuration:** Automatic detection of files
2. **No Manual Updates:** Add files, they appear automatically
3. **Reusable Components:** Includes work anywhere
4. **Maintainable:** External CSS, documented code
5. **Extensible:** Easy to add new resource types

### For Site Performance

1. **Reduced HTML:** Only render what's needed
2. **External CSS:** Cacheable stylesheet
3. **Smart Loading:** No unnecessary DOM elements
4. **Clean Markup:** Semantic HTML structure

---

## Customization

### Adding New Resource Types

To add a new resource type (e.g., "transcripts"):

1. **Create folder:** `cases/{slug}/transcripts/`
2. **Add detection logic to case-resources.html:**
   ```liquid
   {% assign transcripts_path = case_path | append: '/transcripts' %}
   {% assign transcripts_files = site.static_files 
      | where_exp: "file", "file.path contains transcripts_path" %}
   {% assign transcripts_count = transcripts_files | size %}
   ```
3. **Add display section:**
   ```liquid
   {% if transcripts_count > 0 %}
     <div class="resource-folder" data-folder="transcripts">
       <!-- Copy notes structure, update labels -->
     </div>
   {% endif %}
   ```

### Changing Folder Icons

Edit the SVG in case-resources.html:

```html
<svg width="24" height="24" viewBox="0 0 24 24">
  <!-- Update path data for new icon -->
</svg>
```

### Styling Adjustments

All styles are in the `<style>` block of case-resources.html:

```css
.resource-folder {
  background: var(--your-color);
  /* Adjust as needed */
}
```

Or add to theme.css for global changes.

---

## Testing

### Test Empty Folders

```bash
# Ensure empty folders are hidden
mkdir cases/test-case/notes
# Should NOT show on case page

# Add file
echo "test" > cases/test-case/notes/README.md
# Should NOW show on case page
```

### Test Multiple Files

```bash
# Add multiple files
touch cases/test-case/notes/file{1..5}.md
# Should show "5 files" count
# Should list all 5 in expandable section
```

### Test File Types

```bash
# Various extensions
touch cases/test-case/evidence/doc.pdf
touch cases/test-case/evidence/photo.jpg
touch cases/test-case/evidence/data.csv
# Should show file type badges (PDF, JPG, CSV)
```

---

## Troubleshooting

### Resources Not Showing Up

**Symptom:** Added files but folder not appearing

**Checks:**
1. File is in correct directory: `cases/{slug}/notes/` or `cases/{slug}/evidence/`
2. File has an extension (`.md`, `.pdf`, etc.)
3. Jekyll site was rebuilt after adding files
4. File is not in `.gitignore`

**Solution:**
```bash
# Rebuild Jekyll
bundle exec jekyll build

# Check static files detection
bundle exec jekyll build --verbose | grep static_files
```

### Expandable Not Working

**Symptom:** Clicking folder doesn't expand

**Checks:**
1. JavaScript loaded (check browser console)
2. No JavaScript errors
3. `.resource-folder` class exists
4. `.resource-header` and `.resource-content` present

**Solution:** Check browser console for errors, ensure script runs after DOM ready

### Styling Issues

**Symptom:** Resources look broken or unstyled

**Checks:**
1. CSS variables defined in theme
2. Styles not overridden by other CSS
3. Browser supports CSS custom properties

**Solution:** Add fallback colors or check CSS specificity

---

## Future Enhancements

Potential improvements:

- [ ] File size display
- [ ] Download all as ZIP
- [ ] Preview modal for PDFs/images
- [ ] Sort files by name/date/type
- [ ] Search within resources
- [ ] Batch file upload interface
- [ ] Version history for files
- [ ] Access control per file type
- [ ] Integration with document management system

---

## Related Documentation

- **[_layouts/case-enhanced.html](_layouts/case-enhanced.html)** - Complete case layout
- **[_includes/case-analysis.html](_includes/case-analysis.html)** - AI analysis display
- **[DOCKET-SYSTEM.md](DOCKET-SYSTEM.md)** - Docket management
- **[cases/index.md](cases/index.md)** - Cases landing page

---

## Conclusion

The Smart Case Resources System provides a professional, zero-configuration solution for displaying case-related files. It eliminates placeholder clutter, maintains clean UI, and requires no manual maintenance.

Key achievements:
- ✅ Automatic file detection
- ✅ Conditional rendering (no empty states)
- ✅ Professional card-based UI
- ✅ Expandable file listings
- ✅ Complete metadata display
- ✅ Responsive design
- ✅ Clean code architecture
- ✅ Well-documented system

The system follows the same philosophy as the workflow fix: **optional features should enhance, not clutter—only show what's actually there**.
