# How to add a computer configuration offer page

This repository currently contains strategy docs, not page templates. Use this implementation spec to add a **Computer Configuration** page that is clear, SEO-friendly, and conversion-focused.

## 1) Define the conversion goal first
Primary goal for this page:
- Capture a qualified lead for a custom computer configuration consultation.

Primary CTA examples:
- `Get My Custom Build Plan`
- `Book a Configuration Call`

## 2) Add a page with outcome-first messaging
Use this structure in the page template:

1. **H1 (Outcome):**
   - "Get a Computer Configuration That Fits Your Work and Budget"
2. **Subhead (Audience + offer + differentiation):**
   - "Tell us your software, performance goals, and budget. We deliver a tailored parts/spec recommendation with zero guesswork."
3. **Primary CTA button** above the fold.
4. **Trust section** (real proof only):
   - Real customer quotes
   - Real example builds
   - Clear turnaround time

## 3) Add SEO basics on the page
For the new route/page, include:
- Unique `<title>`: `Computer Configuration Services | Full but Thirsty`
- Meta description aligned to intent:
  - `Get a custom computer configuration based on your workload, software, and budget. Receive a tailored build plan and clear next steps.`
- One H1 only.
- Internal links from homepage and relevant offer pages.

## 4) Add lead capture form fields (low friction)
Use only essential fields:
- Name
- Email
- Primary use case (Gaming, Video Editing, 3D, Office, Other)
- Budget range
- Optional: Current issues with existing machine

Form UX requirements:
- Show value near form: what they receive and when.
- Add privacy reassurance.
- Use CTA text like `Send My Build Requirements` (avoid generic `Submit`).

## 5) Track conversion events
Instrument analytics events:
- `view_computer_configuration_page`
- `click_computer_configuration_cta`
- `start_computer_configuration_form`
- `submit_computer_configuration_form`

Mark form submission as a key conversion event in GA4.

## 6) Add a short FAQ to reduce friction
Suggested FAQs:
- "How quickly will I receive my recommendation?"
- "Can you optimize for a fixed budget?"
- "Do you recommend upgrades or full rebuilds?"
- "Can you work with specific brands?"

## 7) Acceptance checklist
- Page clearly states audience, offer, outcome, and next step.
- Primary CTA appears above the fold and at least once below the fold.
- Metadata and heading hierarchy are implemented.
- Form submission is tracked.
- Internal links point users to this page from high-traffic pages.
