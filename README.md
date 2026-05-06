# full-but-thirsty-site

Website messaging, SEO, and conversion assets for Full but Thirsty.

## What's in this repo
- `site/index.html`: conversion-focused homepage copy + SEO metadata + schema + lead form structure.
- `site/assets/css/main.css`: lightweight style layer focused on readability and fast rendering.
- `site/assets/js/analytics.js`: baseline GA4/dataLayer events and lead attribution helpers (UTM + referrer capture).
- `site/robots.txt`: crawler guidance and sitemap declaration.
- `site/sitemap.xml`: canonical URL index for search engines.
- `SEO_ACTION_PLAN.md`: implementation roadmap for ongoing SEO and conversion work.

## Local preview
From repository root:

```bash
python3 -m http.server 8000 --directory site
``` 

Then open `http://localhost:8000`.

## Kajabi implementation note
If your production site is in Kajabi, mirror the updated copy/structure/metadata/tracking patterns from `site/index.html` and `site/assets/js/analytics.js` in your Kajabi page editor and custom code blocks.
