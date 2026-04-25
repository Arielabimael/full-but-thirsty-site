# SEO & Conversion Growth Plan for Full but Thirsty

## Assumptions (flagged)
- The repository currently contains only high-level project documentation and does **not** yet include page templates, HTML, routing, analytics scripts, or deployment config.
- Because page code is not present, this plan focuses on implementation-ready SEO and conversion requirements that should be applied as soon as templates/pages are added.

## Goal
Increase qualified organic traffic and conversion rate by improving:
1. Search visibility (technical + on-page SEO)
2. Click-through rate from search results
3. On-page clarity and trust
4. Lead capture conversion

---

## Priority 1: Technical SEO baseline (must-have)

### 1) Indexing controls
- Add `robots.txt` with:
  - Allow rules for public pages
  - Disallow rules for private/admin paths
  - `Sitemap:` declaration
- Add `sitemap.xml` (or dynamic sitemap generation) for all canonical URLs.
- Ensure each page returns correct canonical URL and no duplicate parameter URLs are indexed.

### 2) Core metadata on every indexable page
Each page should have:
- Unique `<title>` aligned to search intent
- Unique meta description focused on user outcome
- Canonical tag
- Open Graph + Twitter metadata
- Correct language and viewport tags

Suggested homepage metadata pattern:
- **Title:** "Full but Thirsty | [Primary Outcome] for [Audience]"
- **Meta description:** "[Audience] use Full but Thirsty to [core outcome] without [pain point]. See how it works and get started."

### 3) Structured data
Implement JSON-LD where relevant:
- `Organization` (required baseline)
- `WebSite` with `SearchAction` (if site search exists)
- `Product` or `Service` (for offer pages)
- `FAQPage` (only for visible Q&A content)

### 4) Performance standards
Set targets:
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

Apply:
- Compress/next-gen images
- Lazy-load below-the-fold media
- Preload key fonts and hero image
- Reduce render-blocking scripts
- Defer non-critical JS

---

## Priority 2: Homepage messaging clarity (conversion + SEO)

For above-the-fold homepage section, enforce this structure:
1. **Audience:** who this is for
2. **Offer:** what you provide
3. **Outcome:** measurable or concrete result
4. **CTA:** one primary action

Recommended hero formula:
- **H1:** Outcome-first, specific statement
- **Subhead:** How it works + who benefits + differentiation
- **Primary CTA:** action-oriented (e.g., "Get My Plan", "See Pricing", "Book a Demo")
- **Secondary CTA:** lower-friction (e.g., "See Examples")

Trust blocks to include early on page:
- Real testimonials (no fabrication)
- Known logos/partners (if real)
- Clear proof points (case studies, before/after, numbers with source)

---

## Priority 3: Landing page and offer-page structure

Each landing page should map to **one intent** and **one primary CTA**.

Recommended block order:
1. Outcome-driven headline
2. Problem agitation (brief)
3. Solution explanation (3-step, skimmable)
4. Offer details (what's included)
5. Proof (testimonials/case snippets)
6. Objection handling (FAQ)
7. CTA section (repeat)

Copy rules:
- Use specific outcomes, not generic promises
- Replace jargon with plain language
- Keep paragraphs short and scannable
- Button copy should describe next step, not "Submit"

---

## Priority 4: Internal linking and content hierarchy

- Use one clear H1 per page.
- Use H2/H3 to map semantic structure around topics users search.
- Add contextual internal links from blog/resources pages to money pages.
- Build topic clusters:
  - Pillar page for core topic
  - Supporting pages for long-tail queries
  - Internal links back to pillar + conversion page

Anchor text guidance:
- Descriptive and intent-aligned (avoid "click here")

---

## Priority 5: Lead capture & analytics instrumentation

### Lead capture
- Add a persistent lead capture mechanism (e.g., footer form or sticky CTA).
- Reduce form friction:
  - Ask only essential fields
  - Show clear value exchange near form
  - Reinforce privacy and response expectations

### Analytics/tracking
Implement baseline events in GA4 (or equivalent):
- `view_landing_page`
- `click_primary_cta`
- `submit_lead_form`
- `start_checkout` / `book_call`
- `scroll_50_percent`

Also:
- Add UTM consistency rules for campaigns
- Ensure conversion events are marked as key events
- Build funnel view: Landing -> CTA click -> Form start -> Form submit

---

## 30-Day execution roadmap

### Week 1
- Implement robots, sitemap, canonicals, metadata baseline
- Set up Search Console + GA4 event plan
- Fix obvious page speed bottlenecks

### Week 2
- Rewrite homepage hero + first CTA section
- Add trust/proof section
- Improve information hierarchy (H1/H2, section naming)

### Week 3
- Refactor top 2 landing pages to one-goal structure
- Improve lead form UX and button copy
- Add FAQ content based on sales objections

### Week 4
- Publish 2 intent-focused supporting pages
- Add internal links from support pages to offer page
- Run A/B test on primary CTA copy

---

## Success metrics
Track weekly:
- Organic impressions (Search Console)
- Organic CTR for top pages
- Average position for target queries
- Landing page conversion rate
- Lead form completion rate
- Core Web Vitals pass rate

Decision rule:
- If impressions rise but CTR is flat -> improve titles/meta
- If CTR rises but conversions are flat -> improve offer clarity + CTA + proof
- If rankings stall -> expand topical depth + internal links + quality backlinks

---

## Immediate next implementation items for this repo
Because page-level files are not yet present, implement these first once templates exist:
1. Shared SEO component for title/description/canonical/OG tags
2. Shared JSON-LD component (Organization + page-specific schema)
3. Global analytics event helpers
4. Reusable CTA + lead form components with consistent tracking

