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

### Homepage hero carousel follow-up

- Both Content1 components now use useHeroCarousel for slide entrance motion and drag handling. Vue owns event listeners; GSAP context reverts on unmount. Removed duplicated manual event registration and initial hidden styles.
- Corrected hero content sizing: horizontal offsets now bound both edges rather than adding an offset to a 100% width. Copyright text wraps and the footer uses the mobile layout at 768px.
- Measured both homepage routes at 1440, 1024, 768 and 390px: body, both slide containers, slide content and copyright text showed no horizontal overflow.
- Visual inspection at 390x667 identified oversized English hero text and consultation-widget overlap with the next-slide arrow. Mobile typography and arrow placement were corrected. Title and CTA bounds are visible below the navigation and within the viewport.
- Browser interaction verified slide 1 -> slide 2 using the arrow, then slide 2 -> slide 1 using a mouse drag. Reduced-motion reload returned heading opacity 1; eight homepage visits produced no pageerror events.
- Screenshot: output/playwright/home-en-390-hero.png. Production build passed; the existing removeViewBox optimizer warning remains.
- Corrected the plan's nonexistent company and English secretary route examples to the routes in the router. Full navigation/history regression and service template data fields remain pending.

### Shared service hero and overseas annual-review content (2026-10-04)

- Added ServiceHero with title, subtitle, heroImage, description paragraphs, imageAlt and language fields. It accepts optional contactLabel/contactRoute; existing pages keep their contact navigation unchanged. Uses the canonical AnimatedSection and CSS rather than a duplicated English component.
- Migrated 12 Chinese/English heroes: Construction Bank, Hong Kong personal accounts, MSB, Hong Kong annual review, overseas annual review and tax filing. Script comparison against the previous Git version confirmed all 12 titles, subtitles, paragraphs and image paths were preserved.
- Removed ten unreferenced hero stylesheets. Shared styles retain language-dependent font sizes, introduce semantic h1 headings and allow hero height to grow with long translations.
- 48 route/width combinations (12 routes x 1440/1024/768/390px) showed no hero content overflow or clipping. Overseas annual-review body overflow was separately detected at 390px (583px Chinese / 664px English document width) and then corrected.
- Overseas annual-review content now uses shared section-container/title/mobile rules and six managed AnimatedSection wrappers. Removed unmanaged GSAP selectors, refs and handlers; FAQ state and business data remain.
- After correction, eight overseas annual-review route/width checks returned document width equal to viewport width and no internal overflow for .content_box, .intro, .text, .title or .advantage. FAQ class changed from faq-answer to faq-answer expanded and back; no pageerror events occurred.
- Screenshot: output/playwright/service-overseas-en-390-content.png. Production build passed after the CSS deletions and content migration; pre-existing removeViewBox warnings remain.
- Task 5 Step 1 is still incomplete: the sections[{title, body, image, reversed}] schema and its real page consumers remain to be implemented. The hero portion is implemented, but this does not establish completion of the full template or global regression.
- Additional runtime checks: all 12 heroes returned opacity 1 in reduced-motion mode; a Vue Router transition from English personal accounts to overseas annual review and browser Back restored the personal-account heading with opacity 1 and no pageerror events.

### Shared service sections (2026-10-04)

- Added ServiceSection with title, body (paragraph array), image, imageAlt and reversed fields. Ten Chinese/English introductions now render sections data: Construction Bank, personal accounts, MSB, Hong Kong annual review and overseas annual review. Tax filing retains its specialized list content.
- Compared migrated section data against Git HEAD: all ten titles, paragraphs and image paths were preserved. Removed eight duplicate introduction CSS blocks, retaining the bank-image contain sizing through shared custom properties.
- 40 route/width checks in reduced-motion mode returned no introduction overflow, document width equal to viewport width, and column stacking at 768/390px. Each check scrolled to the section and waited for lazy-loaded images before measuring.
- Mounted the real shared components in the browser to verify their contracts: reversed=true rendered row-reverse at 1440px and column at 390px; two body entries produced two paragraphs. Optional contactLabel/contactRoute rendered the expected link and Enter navigated to /en/bank/hk/personal. Temporary mounts were unmounted afterward.
- Task 5 Step 1 now has implemented and consumed hero/section interfaces for every specified field. This does not complete all page migrations or global regression; existing Hong Kong annual-review and tax-filing content animations still need lifecycle cleanup.
- Screenshot: output/playwright/service-section-en-390.png.

### Managed section animation lifecycle (2026-10-04)

- Reproduced a lifecycle leak before editing: SPA navigation from Hong Kong annual review to tax filing and back to personal accounts left 39 ScrollTrigger entries pointing to disconnected DOM nodes.
- Added useSectionMotion to scope GSAP selectors to the current DOM root, skip setup for reduced-motion, and revert the context on unmount. Hong Kong annual-review and tax-filing content use it in both languages; explicit DOM queries now use the scoped root.
- AnimatedSection uses the same composable. Its English component forwards attributes and its slot to the canonical component through a Vue wrapper; a direct SFC re-export was rejected after runtime checks showed missing slots.
- Final fresh SPA checks waited for each actual route's heading and content to mount. Trigger totals followed the current page (36 annual review, 5 tax filing, 2 personal accounts, 7 overseas annual review); disconnected trigger count stayed zero across all eight transitions in both languages. No pageerror events occurred.
- Six normal-motion routes (Chinese/English annual review, tax filing and personal accounts) displayed their introductory content after scrolling into view. Four reduced-motion annual-review/tax-filing checks created zero triggers.
- Final production build passed. External Source Han Serif CSS intermittently returned ERR_CONNECTION_CLOSED in this browser session; fallback fonts rendered. This is an existing dependency issue to consider during final visual regression.
- Duplicate scan found 216 identical Chinese/English CSS pairs and 84 differing pairs. This is an inventory, not a completed cleanup; Task 6 Step 2 remains open.

### Identical CSS consolidation and regression (2026-10-04)

- Reviewed 216 identical Chinese/English stylesheet pairs: moved 213 rule-bearing pairs into src/css/common/pages with forwarding imports, and removed three comment-only pairs (six empty stylesheets) plus their six Vue imports. The manifest css-shared-layout-manifest.json records tracked paths, shared targets or removedEmpty, and hashes of the original normalized content.
- Verified original-content hashes against Git HEAD and forwarding targets before consolidation. The 213 retained shared files preserve their original rules; the three removed pairs contained only comments. The sole asset url uses the unchanged @ alias. No original imports needed rebasing.
- Browser checks exposed an import-order dependency: equal-specificity desktop grid rules overrode mobile rules on cold Chinese routes. The cards remained four narrow columns, producing 2–6px internal overflow. Shared mobile selectors now include their actual section ancestry and explicitly set one grid column for advantage/process grids. The same shared rules cover annual review and tax filing.
- Final layout checks below used reduced-motion mode and measured document width plus hero, content-container, title, intro and text scroll widths. Zero failures in 56 combinations and zero pageerror events. These layout checks do not by themselves establish normal-animation or complete visual acceptance.
- Final production build exited 0; the pre-existing removeViewBox optimizer warning remains. Screenshots for each 390px route use output/playwright/css-shared-<route with slashes replaced by hyphens>-390.png.
- 84 differing stylesheet pairs remain to inspect for shared layout versus language-specific typography. Task 6 Step 2 remains open for that work.

| Route | 1440px | 1024px | 768px | 390px |
| --- | --- | --- | --- | --- |
| / | No overflow | No overflow | No overflow | No overflow |
| /bank/hk/constructions | No overflow | No overflow | No overflow | No overflow |
| /bank/hk/personal | No overflow | No overflow | No overflow | No overflow |
| /en | No overflow | No overflow | No overflow | No overflow |
| /en/bank/hk/constructions | No overflow | No overflow | No overflow | No overflow |
| /en/bank/hk/personal | No overflow | No overflow | No overflow | No overflow |
| /secretary_en/hk-annual | No overflow | No overflow | No overflow | No overflow |
| /secretary_en/hk-msb | No overflow | No overflow | No overflow | No overflow |
| /secretary_en/overseas-annual | No overflow | No overflow | No overflow | No overflow |
| /secretary_en/tax-filing | No overflow | No overflow | No overflow | No overflow |
| /secretary/hk-annual | No overflow | No overflow | No overflow | No overflow |
| /secretary/hk-msb | No overflow | No overflow | No overflow | No overflow |
| /secretary/overseas-annual | No overflow | No overflow | No overflow | No overflow |
| /secretary/tax-filing | No overflow | No overflow | No overflow | No overflow |

### Navigation regression follow-up (2026-10-04)

- Normal-motion interaction checks confirmed homepage slide switching, keyboard account-card routing and FAQ expansion/collapse, but exposed that both homepage menus ignored Escape. This contradicted the earlier Task 3 completion marks.
- Added useNavigationMenu for all four header components: shared menu state, aria-controls refs, Escape closure and focus restoration, body-scroll restoration, fullPath navigation cleanup, resize closure, and listener cleanup on unmount. Shared focus-visible styles apply to links and buttons. Homepage scroll/logo handling now responds to resize in both languages; the Chinese logo is a home link.
- Five named routes (/, /en, /bank/hk/personal, /en/bank/hk/personal, /secretary/hk-msb) passed keyboard opening, Escape closure with solid focus outline and restored focus, desktop resize closure, and navigation scroll restoration. Both homepages also close the menu when clicking their current-page Home link. A separate check awaited the destination URL for every Home link; all five destinations matched href.
- Final 56 layout combinations were rerun after menu and empty-style cleanup; no measured overflow remained. Final build exited 0. The final manifest audit verified 432 historical content hashes, 426 forwarding targets, 213 canonical stylesheets and three removed empty pairs.
- Reopened Task 3 Steps 1, 4 and 5: existing headers still contain duplicated static menu markup/data and language-specific layout files. Corrected menu interaction is verified, but the unified navigation API and full desktop/highlight/language-switch regression are not yet complete. Other remaining plan items stay open.
