# Frontend Refactor Regression

## 2026-10-03

### Build

- `npm run build` passed after the shared service shell, hero, content container, and motion changes.
- Existing Vite SVG optimizer warnings about `removeViewBox` remain; they do not fail the build.

### Route smoke checks

The development server returned HTTP 200 and the Vue app rendered content for these routes:

| Route | Result | Checks |
| --- | --- | --- |
| `/bank/hk/constructions` | Pass | Hero, content sections, navigation, footer, toolbar |
| `/en/bank/hk/constructions` | Pass | Hero, content sections, navigation, footer, toolbar |
| `/secretary/hk-msb` | Pass | Hero, service content, FAQ, navigation, footer |
| `/secretary_en/hk-msb` | Pass | Hero, service content, FAQ, navigation, footer |

At the available browser viewport (1280px), all four routes reported `document.body.scrollWidth <= innerWidth`; no horizontal overflow was detected.

### Follow-up

- Repeat the same route checks at 1440px, 1024px, 768px, and 390px using a viewport-capable browser runner before marking the page-group regression step complete.
