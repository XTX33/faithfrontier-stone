# Batch PDF Upload - Quick Start Guide

## 🚀 Easiest Way to Upload Multiple PDFs

This guide shows you the **fastest method** for uploading batches of court documents to FaithFrontier.

---

## Method 1: Automated Batch Upload (Recommended)

### Step 1: Name Your Files

Include the **docket number** in each filename. The system will automatically route files to the correct case.

**Supported formats:**
- Federal: `1-25-cv-15641-document.pdf`
- NJ Superior: `ATL-L-002794-25-motion.pdf`
- NJ Appellate: `A-000313-25-brief.pdf`

**Examples:**
```
ATL-L-002794-25-motion-for-relief-2025-11-15.pdf
1-25-cv-15641-RMB-order-2025-12-01.pdf
A-000313-25-appellate-brief.pdf
```

**Optional: Include dates in filename** (YYYYMMDD or YYYY-MM-DD)
```
20251115-ATL-L-002794-25-motion.pdf
2025-11-15-ATL-L-002794-25-motion.pdf
```

---

### Step 2: Validate Your Files (Optional but Recommended)

```bash
cd faithfrontier
node scripts/batch-upload-helper.js ~/Downloads
```

This will:
- ✓ Check if PDFs are valid
- ✓ Detect docket numbers
- ✓ Match files to cases
- ✓ Suggest standardized filenames
- ⚠️ Warn about unmatched files

**Example output:**
```
[1/3] ATL-L-002794-25-motion.pdf
✓ Valid PDF (245KB)
✓ Matched: ATL-L-002794-25 → atl-l-002794-25
ℹ Suggested: 2025-11-15_Motion_motion-for-relief.pdf
```

---

### Step 3: Copy to Inbox

**Option A: Using the helper script (easiest)**
```bash
node scripts/batch-upload-helper.js --copy ~/Downloads
```

**Option B: Manual copy**
```bash
cp ~/Downloads/*.pdf _inbox/
```

**Option C: Windows PowerShell**
```powershell
Copy-Item C:\Users\YourName\Downloads\*.pdf -Destination _inbox\
```

---

### Step 4: Commit and Push

```bash
git add _inbox/
git commit -m "intake: batch upload of court filings"
git push
```

**That's it!** GitHub Actions will automatically:
1. Process all PDFs
2. Rename with standardized format
3. Move to correct case folders
4. Update docket YAML files
5. Create a pull request for review

---

### Step 5: Review and Merge

1. Wait 1-2 minutes for GitHub Actions to complete
2. Go to your repository's Pull Requests tab
3. Review the automated PR titled "chore(docket): intake PDFs"
4. Check the changes look correct
5. Merge the PR

**Done!** Your PDFs are now published on FaithFrontier.org

---

## Method 2: Quick Manual Upload (For Single Files)

### For urgent single-file uploads:

```bash
# 1. Copy directly to case folder
cp document.pdf cases/atl-l-002794-25/filings/2025-11-15_Motion_document.pdf

# 2. Add docket entry
cat >> _data/docket/atl-l-002794-25.yml << 'EOF'
- id: 2025-11-15-motion-document
  date: 2025-11-15
  type: Motion
  title: Motion for Relief from Judgment
  file: /cases/atl-l-002794-25/filings/2025-11-15_Motion_document.pdf
EOF

# 3. Commit and push
git add cases/ _data/
git commit -m "add: motion for relief"
git push
```

---

## Method 3: Web Upload (Coming Soon)

A web form for non-technical users is planned. Status: Worker deployment needed.

---

## Troubleshooting

### ❌ "No docket number detected"

**Problem:** Filename doesn't contain a recognizable case number.

**Solutions:**
- Add docket number to filename: `ATL-L-002794-25-document.pdf`
- Or file will go to `cases/unassigned/filings/` for manual sorting

### ❌ "Docket found but not mapped"

**Problem:** Docket number in filename isn't in `_data/cases-map.yml`

**Solution:** Add mapping:
```bash
echo "ATL-L-004567-25: atl-l-004567-25" >> _data/cases-map.yml
git add _data/cases-map.yml
git commit -m "map: add new case docket"
```

### ❌ "Invalid PDF"

**Problems:**
- File is corrupted
- File is too small (< 1KB)
- Wrong file type

**Solution:** Re-download or re-export the PDF

---

## Tips for Faster Batch Processing

### 1. **Use consistent filenames**
```
# Good
ATL-L-002794-25-motion-for-relief.pdf
ATL-L-002794-25-order-granting-motion.pdf

# Will work but require more processing
random-name-123.pdf
document (1).pdf
```

### 2. **Include dates when known**
```
2025-11-15-ATL-L-002794-25-motion.pdf
```
System will extract: `2025-11-15` as filing date

### 3. **Use descriptive keywords**
```
ATL-L-002794-25-motion-summary-judgment.pdf  → Type: Motion
ATL-L-002794-25-order-denying-motion.pdf     → Type: Order
ATL-L-002794-25-brief-in-support.pdf         → Type: Brief
```

### 4. **Batch multiple cases together**
```
_inbox/
  ATL-L-002794-25-motion.pdf
  ATL-L-002869-25-complaint.pdf
  A-000313-25-brief.pdf
```
One commit processes all cases!

---

## Filename Convention (Applied Automatically)

The system will rename your files to:
```
YYYY-MM-DD_Type_description.pdf
```

**Examples:**
- `2025-11-15_Motion_motion-for-relief.pdf`
- `2025-12-01_Order_order-granting-motion.pdf`
- `2025-11-20_Brief_brief-in-support.pdf`

---

## Quick Reference

| Task | Command |
|------|---------|
| Validate PDFs | `node scripts/batch-upload-helper.js <folder>` |
| Copy to inbox | `node scripts/batch-upload-helper.js --copy <folder>` |
| Manual copy | `cp <folder>/*.pdf _inbox/` |
| Commit & push | `git add _inbox/ && git commit -m "intake: batch" && git push` |
| Check status | Visit GitHub Actions tab in repository |

---

## Advanced: Custom Case Mapping

If you have a consolidated case with multiple docket numbers:

**Edit `_data/cases-map.yml`:**
```yaml
ATL-22-002292: barber-nj-pcr-2022
ATL-22-002313: barber-nj-pcr-2022  # Same case, different docket
```

Now files with either docket number go to the same case folder.

---

## Questions?

- Check `DOCKET-SYSTEM.md` for full system documentation
- Review `DOCKET-REPAIR-GUIDE.md` if files aren't showing up
- Run `node scripts/batch-upload-helper.js --help` for tool options

---

## Summary: Fastest Workflow

```bash
# 1. Name files with docket numbers
# 2. Validate (optional)
node scripts/batch-upload-helper.js ~/Downloads

# 3. Copy to inbox
node scripts/batch-upload-helper.js --copy ~/Downloads

# 4. Push
git add _inbox/ && git commit -m "intake: batch" && git push

# 5. Review PR and merge
# Done!
```

**Total time: ~2 minutes** ⚡
