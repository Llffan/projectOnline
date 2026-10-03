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

### Shared CSS consolidation follow-up

- English tokens, service shell, hero, content, and Link styles now import the canonical files in src/css/common; 193 duplicate lines removed.
- Fixed a self-reference in --site-wide-max-width introduced by the earlier bulk replacement; its value is 2000px.
- Reopened Task 5 CSS convergence: legacy page rules still duplicate shared rules and may override them. Four-viewport checks remain pending; build results alone do not prove responsive completion.

### Four-viewport content measurements

Measured actual browser viewport widths with Playwright, including nested content scroll widths rather than only document width.

| Routes | 1440 | 1024 | 768 | 390 |
| --- | --- | --- | --- | --- |
| /secretary/hk-msb and /secretary_en/hk-msb | No measured internal overflow | No measured internal overflow | No measured internal overflow | No measured internal overflow |
| /bank/hk/constructions and /en/bank/hk/constructions | No measured internal overflow | No measured internal overflow | Intro overflow detected | Content and intro overflow detected |

- Removed duplicate root, card, and title rules from six MSB, annual-review, and tax-filing CSS files. English 28px headings remain through a custom property.
- Fixed MSB mobile content stacking, condition-card box sizing, image sizing, and long-text wrapping. Before correction, the English 390px content card had client width 366px and scroll width 612px; after correction no measured internal overflow remained.
- Company-account content overflow still requires correction. Screenshots and interaction checks remain pending; these measurements do not constitute full visual acceptance.

### Bank content follow-up verification

After the bank mobile corrections, all 24 combinations of six core routes and four viewport widths returned rendered service content with no measured horizontal overflow in `.content_box`, `.intro`, `.text`, and `.title`.

- Routes: `/bank/hk/constructions`, `/en/bank/hk/constructions`, `/bank/hk/personal`, `/en/bank/hk/personal`, `/secretary/hk-msb`, `/secretary_en/hk-msb`.
- Widths: 1440, 1024, 768, 390px.
- Removed duplicated Construction Bank content container/title declarations, and migrated both personal-account content roots to shared service styles because they reuse the bank CSS.
- Fixed mobile grid stacking, image margins, card sizing, and specificity conflicts; account-maintenance and service-advantage cards use one column on small screens.
- Fixed GSAP context scope in both AnimatedSection components to pass the DOM element (`root.value`). A real scroll traversal confirmed personal-page content visibility and opacity 1.
- Latest build exited 0. Earlier invalid-scope warnings were corrected; an external jsDelivr font request failed once during verification.
- This supersedes the bank overflow failures above. Full homepage migration, visual/interaction acceptance for every planned page, and template-field work remain incomplete.

### Homepage registration and bank-section migration

- Migrated Content3 in both languages to SectionHeading, FeatureCard, and AnimatedSection for its introduction; removed its unmanaged IntersectionObserver animation code.
- Removed old Content2 observers that attempted to observe a Vue SectionHeading instance, causing a mounted-hook TypeError. Both languages now use AnimatedSection while preserving carousel initialization.
- Fixed FeatureCard slot rendering to avoid generating an empty extra heading, and added keyboard focus/Enter navigation for linked cards.
- At 390px, both homepages rendered four bank cards, no extra FeatureCard content heading, and body width equaled viewport width.
- Keyboard Enter on the first bank card navigated from `/` to `/bank/hk/constructions` and from `/en` to `/en/bank/hk/constructions`; the test collected no pageerror events.
- Latest production build exited 0. Content1, Content4, Content5 and full visual regression remain pending.

### Homepage service and advantage sections

- Migrated Content4 and Content5 in both languages to AnimatedSection and FeatureCard, removing their unmanaged observers and GSAP code.
- Added shared useCountUp with reduced-motion handling and observer/animation-frame cleanup. Equal initial/final counts no longer create intervals that never terminate.
- Eight browser checks (two languages, four widths) rendered five service cards and four advantage cards, expected counts 1/100/10/10 and 40/60/50/30, and visible content after scrolling. No pageerror events were collected.
- Latest build exited 0. English homepage body scroll width at 768px was 930px, while each Content1–5 container measured 768px; the remaining document-level overflow is unresolved. Other measured body widths matched the viewport.
- Full hero migration and complete visual/interaction regression remain pending.
