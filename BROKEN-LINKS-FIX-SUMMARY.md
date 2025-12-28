# Broken PDF Links - Fixed (ATL-DC-007956-25 and All Cases)

## Issue
- Discovery interrogatories file was named "proceeding-documents.pdf" (generic)
- YAML docket entries used relative paths instead of absolute URLs
- 52+ broken links across all case dockets

## Resolution

### 1. Renamed Discovery File
**Before:** `20251027-proceeding-documents.pdf`  
**After:** `20251027-discovery-interrogatories-admissions.pdf`

Location: `cases/atl-dc-007956-25/docket/` and `cases/atl-dc-007956-25/filings/`

### 2. Fixed All Docket File Paths
Converted 52 relative paths to absolute URLs across 9 docket files:

**Before (relative):** `20250328-gottheimer-letter.pdf`  
**After (absolute):** `/cases/atl-dc-007956-25/docket/20250328-gottheimer-letter.pdf`

### 3. Scripts Created
- **`scripts/fix-case-007956-links.js`** - Case-specific renaming and fixes
- **`scripts/fix-all-docket-paths.js`** - Batch fix all docket YAML files

## Verification
`
node scripts/check-pdf-links.js
`
Result: Broken links reduced from 52 to 1 (unrelated case)

## Files Changed
- 9 docket YAML files updated with absolute paths
- 1 PDF renamed to descriptive title
- All ATL-DC-007956-25 links now working

## Case ATL-DC-007956-25 Status
✅ All discovery documents properly linked  
✅ File names descriptive and accurate  
✅ Ready for public sharing
