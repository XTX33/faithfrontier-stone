# Case Resources System - Quick Reference

## ✅ What Was Implemented

**Smart resource display system** that only shows notes and evidence folders when they contain actual files. No empty placeholder clutter!

## 📦 Files Created

| File | Purpose |
|------|---------|
| `_includes/case-resources.html` | Smart folder detection and display |
| `_includes/case-card.html` | Reusable case card for index |
| `assets/css/cases-index.css` | Clean external stylesheet |
| `cases/index.md` | Clean, documented cases page |

## 🎯 How It Works

### Automatic Detection

```
cases/barber-nj-pcr-2022/
  ├── notes/              ← Empty folder
  │   └── (no files)      ✗ Hidden on case page
  │
  ├── evidence/           ← Has files
  │   ├── photo1.jpg      ✓ Shows on case page
  │   └── document.pdf    ✓ Listed in expandable card
  │
  └── filings/            ← Always shown (docket system)
```

### User Experience

**Before adding files:**
```
┌─────────────────────────┐
│ Case Page               │
│                         │
│ [Docket Entries]        │
│                         │  ← No placeholder clutter!
│ [AI Analysis]           │
└─────────────────────────┘
```

**After adding files:**
```
┌─────────────────────────┐
│ Case Page               │
│                         │
│ [Docket Entries]        │
│                         │
│ ┌─────────────────────┐ │  ← Automatically appears!
│ │📄 Notes    3 files▼ │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │🔍 Evidence 2 files▼ │ │
│ └─────────────────────┘ │
│                         │
│ [AI Analysis]           │
└─────────────────────────┘
```

## 📝 Usage

### Adding Notes

```bash
# Just add files to notes/ folder
echo "# Research" > cases/my-case/notes/analysis.md
cp memo.pdf cases/my-case/notes/

# Resource card appears automatically on case page!
```

### Adding Evidence

```bash
# Just add files to evidence/ folder
cp photo.jpg cases/my-case/evidence/
cp document.pdf cases/my-case/evidence/

# Evidence card appears automatically!
```

### No Configuration Needed

- No front matter updates
- No layout changes
- No manual toggles
- Just add files → they appear!

## 🎨 Features

### Resource Cards

- **Expandable/Collapsible** - Click to show/hide files
- **File Count Badge** - Shows number of files
- **File Type Indicators** - PDF, MD, DOCX, JPG, etc.
- **Date Stamps** - When file was modified
- **Direct Links** - Click to open in new tab
- **Icons** - Visual folder identification

### Cases Index

- **Clean Layout** - No inline CSS (moved to external file)
- **Client-Side Filtering** - By status, court, search term
- **Responsive Grid** - Adapts to screen size
- **Case Cards** - Reusable component
- **Statistics** - Live counts of active/pending/closed

## 📊 File Reduction

| File | Before | After | Change |
|------|--------|-------|--------|
| `cases/index.md` | 15,087 bytes | 12,356 bytes | -18% |
| Lines of code | 476 (200+ CSS) | 250 (0 CSS) | -47% |

**Result:** Cleaner, more maintainable codebase

## 🔧 Customization

### Change Folder Names

Edit `_includes/case-resources.html`:

```liquid
{% assign notes_path = case_path | append: '/research' %}  ← Change folder name
{% assign evidence_path = case_path | append: '/exhibits' %} ← Change folder name
```

### Add New Folder Type

Copy a folder section in `case-resources.html` and update:
1. Path variable
2. File detection
3. Display section
4. Icon and labels

### Styling

All styles in `_includes/case-resources.html` under `<style>` tag:

```css
.resource-folder {
  background: var(--your-color);
  /* Customize here */
}
```

## ✨ Benefits

### For Site Visitors

- ✅ Clean, professional appearance
- ✅ No "coming soon" or "no files" messages
- ✅ Easy file discovery
- ✅ Quick access to resources

### For Site Maintainers

- ✅ Zero configuration required
- ✅ No manual updates needed
- ✅ Just drop files in folders
- ✅ Automatic detection
- ✅ Clean codebase

## 🐛 Troubleshooting

### Files Not Showing

**Problem:** Added files but folder not appearing

**Solution:**
```bash
# Rebuild Jekyll
bundle exec jekyll build

# Verify files exist
ls cases/my-case/notes/

# Check file has extension
file cases/my-case/notes/myfile.md
```

### Folder Always Shows Even When Empty

**Problem:** Empty folder still displaying

**Cause:** Hidden files (like `.DS_Store`) count as files

**Solution:**
```bash
# Remove hidden files
find cases/ -name ".DS_Store" -delete

# Add to .gitignore
echo ".DS_Store" >> .gitignore
```

## 📚 Documentation

- **Complete Guide:** [_internal/CASE-RESOURCES-SYSTEM.md](_internal/CASE-RESOURCES-SYSTEM.md)
- **Case Layout:** [_layouts/case-enhanced.html](_layouts/case-enhanced.html)
- **Docket System:** [DOCKET-SYSTEM.md](DOCKET-SYSTEM.md)

## 🎉 Quick Win

The best part? **You don't need to do anything special!**

Just add files to your case folders and they'll automatically appear on the case page. Remove files and the folders disappear. Zero maintenance, maximum professionalism.

---

**Philosophy:** "Only show what's actually there" - same as the workflow fix for API keys!
