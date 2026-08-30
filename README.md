# O7 Digital Group Holding — Premium Astro + React mockup

## What this is
A complete visual direction for the Holding, deliberately separated from o7digital.com (the operating / consulting brand).

### Core positioning
- Holding first, agency second.
- Corporate hierarchy + product portfolio + international footprint.
- Dark premium technology aesthetic, not a classic agency template.
- Pure CSS/SVG visual system: fast, no stock photography dependency.
- React used only for interactive pieces, keeping Astro output lightweight.

## Structure
- `src/pages/index.astro` — full homepage
- `src/components/HeroVisual.jsx` — interactive network/globe hero
- `src/components/GlobalNetwork.jsx` — interactive geographic footprint
- `src/components/Nav.astro` — navigation
- `src/styles/global.css` — complete art direction and responsive system
- `preview.html` — standalone zero-install browser preview

## Run locally
```bash
npm install
npm run dev
```

## Codex implementation notes
1. Keep **O7 Digital Group Holding** visually/corporately distinct from **O7 Digital Consulting**.
2. Do not turn the hero into a photo carousel. The network/globe is a group-level identity device.
3. Replace the provisional O7 monogram with the official SVG logo if one exists.
4. Keep sections and spacing generous; no dense Bootstrap-style service cards.
5. If business units are not separate legal entities, label them `GROUP BUSINESS UNIT` / `GROUP ECOSYSTEM`, not subsidiaries.
6. Preserve `prefers-reduced-motion` if additional animations are added.
7. Add EN/FR/ES routing later with Astro i18n rather than duplicating pages manually.
8. SEO metadata should target corporate/group intent, not cannibalize o7digital.com service keywords.

## Suggested next pages
- `/group` — governance, vision, structure
- `/companies` — operating companies / business units
- `/technology` — proprietary platforms and R&D
- `/infrastructure` — enterprise technology and managed IT
- `/international` — footprint and markets
- `/contact` — corporate / partnership enquiries
