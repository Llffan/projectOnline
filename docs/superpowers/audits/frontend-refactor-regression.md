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

### Fixed-layout scan

- Scanned `src/css` and `src/css_en` for fixed minimum widths, oversized widths, and large positional offsets.
- Replaced 42 repeated `max-width: 2000px` declarations in country pages with `var(--site-wide-max-width, 2000px)`.
- Kept dropdown minimum widths and image/content maximum widths where they describe desktop presentation; mobile dropdown rules already override them.
- Added mobile stacking and minimum-width resets to the tax-planning and domestic-trademark form layouts.
- Added shared mobile Link navigation rules for all Chinese and English service Link components; desktop language-specific styles remain in their existing files.
