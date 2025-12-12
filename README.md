# FaithFrontier - A Public Trust for Justice, Faith, and Civic Integrity
### Repository for **faithfrontier.org**
Copyright (c) 2025 Faith Frontier Ecclesiastical Trust & Devon Tyler Barber. All rights reserved.

FaithFrontier is a faith-guided public trust dedicated to integrity, transparency, and civic accountability. This repository powers the public site, case archives, and oversight tooling while preserving protected ecclesiastical content.

---

## Mission & Scope
- Maintain transparent public-interest case records.
- Publish essays and civic commentary rooted in theology and ethics.
- Provide carefully governed automation for intake, verification, and analysis workflows.

---

## Repository Structure
```
_cases/              # Case summaries and metadata (Markdown)
cases/               # Normalized public-facing case folders with filings
assets/cases/        # Binary filings, exhibits, envelopes, media
_essays/             # Protected essays and narratives
_articles/, articles/ # Long-form content and features
_layouts/, _includes/ # Jekyll templates (MIT-licensed code)
assets/css/, assets/js/ # Stylesheets and scripts (MIT-licensed code)
assets/images/       # Logos, seals, diagrams (trademark governed)
scripts/             # Automation utilities (MIT-licensed code)
```

---

## Local Development
```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

Production build:
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

---

## Deployment
- GitHub Pages deploys from the `main` branch.
- Domain: **faithfrontier.org** (CNAME -> `xtx33.github.io`).
- Ensure DNS A-records follow GitHub's guidance if apex hosting is required.

---

## Legal & Trust Framework
FaithFrontier content falls into two distinct categories:

1. **Source Code - Open use under the MIT License**  
   Templates, CSS/JS, workflows, and automation scripts fall under [`LICENSE`](./LICENSE).

2. **Creative, legal, and theological content - Restricted use**  
   Essays, metadata, branding, and case narratives are protected under [`CONTENT_LICENSE.md`](./CONTENT_LICENSE.md), [`TRADEMARK_NOTICE.md`](./TRADEMARK_NOTICE.md), and [`DISCLAIMER.md`](./DISCLAIMER.md).

### Required Legal References
- [`LICENSE`](./LICENSE): MIT license for code only.
- [`CONTENT_LICENSE.md`](./CONTENT_LICENSE.md): Ecclesiastical license for all non-code works.
- [`TRADEMARK_NOTICE.md`](./TRADEMARK_NOTICE.md): Protection for FaithFrontier marks, logos, seals, and visual theology.
- [`DISCLAIMER.md`](./DISCLAIMER.md): Reliance, liability, and public-trust usage boundaries.

Every contribution must preserve these boundaries. Do **not** treat essays, case records, metadata, or imagery as open-source material; obtain written approval before republishing any protected work.

---

## Directory-Level Enforcement
- `_cases/`, `_articles/`, `_essays/`, `_manifesto/`, `_pages/`, `_posts/`, `_trust/`: Markdown narratives governed by `CONTENT_LICENSE.md`.
- `cases/`, `assets/cases/`: Filings and exhibits. Public-record PDFs remain public domain, but FaithFrontier's summaries and organization remain protected.
- `assets/images/`: Logos and artwork subject to `TRADEMARK_NOTICE.md`.
- `_layouts/`, `_includes/`, `assets/css/`, `assets/js/`, `scripts/`, workflows: MIT-licensed code covered by `LICENSE`.

When adding new material, identify whether it is code or content, apply the appropriate license, and reference the governing document where necessary.

---

## AI-Assisted Analysis
Optional tooling in `scripts/` leverages OpenAI APIs. Configure credentials via `.github/SETUP-OPENAI.md` and review `QUICKSTART-GENERATE-ANALYSIS.md` plus `ANALYSIS-SYSTEM.md` before running any automation. Outputs remain subject to the disclaimer and content-license rules.

---

## Disclaimer
Nothing in this repository constitutes legal advice. Review [`DISCLAIMER.md`](./DISCLAIMER.md) for the full statement before relying on any analysis or narrative.

---

## Contributions
- Code contributions are welcome; keep them MIT-compatible.
- Content updates require approval to preserve accuracy, privacy, and ecclesiastical governance.

Questions, permissions, or coordination requests: **[info@tillerstead.com](mailto:info@tillerstead.com)**
