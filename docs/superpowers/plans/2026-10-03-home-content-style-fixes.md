# 首页内容与样式缺陷修复实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 修复十洲通 Vue 前端首页及主要导航链路中的移动端布局、错误路由、轮播配置、数据文案、中英文一致性和无障碍问题，并通过构建与浏览器验收。

**Architecture:** 保留现有 Vue 组件和路由结构，先修复共享导航与首页组件，再集中整理内容数据，最后进行中英文页面和响应式回归。移动端采用现有 `mobile-menu-btn` / `mobile-open` 设计补齐 CSS，不引入新的 UI 框架或重做页面架构。

**Tech Stack:** Vue 3、Vue Router 4、Vite、Element Plus、SCSS/CSS、GSAP、现有 CUA 浏览器验收。

## Global Constraints

- 不新增依赖，不替换现有路由体系。
- 中文路由继续使用 `/company/*`、`/secretary/*`、`/bank/*`、`/notary/*`、`/ip/*`；英文路由继续使用现有 `/company_en/*`、`/secretary_en/*` 和 `/en/*` 约定。
- 所有宣传数字必须由业务方确认后写入，未确认时使用保守、可验证的文案。
- 桌面端保持现有视觉方向；移动端必须在 375px、768px 两个宽度下无横向滚动。
- 修改后必须通过 `npm run build`，并在浏览器检查首页、英文首页、秘书服务入口和移动端导航。

---

### Task 1: 修复共享导航路由与激活状态

**Files:**
- Modify: `src/components/homeView/top/Top2.vue:66-80, 220-240`
- Modify: `src/components/common/Top.vue`（如存在相同秘书菜单配置）
- Modify: `src/components_en/homeView/top/Top2.vue`（核对英文对应路由）
- Modify: `src/router/index.js:287-292`（仅核对，不改变正确的 `/secretary/hk-msb`）
- Test: 浏览器导航 smoke test

**Interfaces:**
- 导航菜单必须指向已注册的 Vue Router path。
- 秘书导航激活判断必须接收以 `/` 开头的完整路径。

- [ ] **Step 1: 修正 MSB 路由**
  - 将 `/secretary/msb` 改为 `/secretary/hk-msb`。
  - 将路由映射表中的 `/secretary/msb` 同步改为 `/secretary/hk-msb`。
  - 检查英文菜单是否应使用 `/secretary_en/hk-msb`。
- [ ] **Step 2: 修正秘书导航激活判断**
  - 将 `route.path.startsWith('secretary/hk-annual')` 改为 `route.path.startsWith('/secretary')` 或等价的明确判断。
  - 不要影响银行、公司、公证、知识产权导航的激活状态。
- [ ] **Step 3: 验证路由**
  - 打开“秘书服务 → 香港 MSB 牌照”，确认 URL 为 `/secretary/hk-msb` 且页面正常渲染。
  - 打开 `/secretary/hk-annual`、`/secretary/change`、`/bank/hk/personal`，确认只有对应一级导航高亮。
  - 检查控制台不再出现 `No match found`。

### Task 2: 完成移动端导航布局

**Files:**
- Modify: `src/css/homeView/top/Top2.css`
- Modify: `src/css/common/Top.css`
- Modify: `src/components/homeView/top/Top2.vue`
- Modify: `src/components/common/Top.vue`（如使用同一套移动菜单）
- Test: 375px、500px、768px 浏览器截图与滚动检查

- [ ] **Step 1: 定义移动端 CSS 规则**
  - 在 `max-width: 768px` 下隐藏桌面横向布局，显示 `.mobile-menu-btn`。
  - 为按钮补充尺寸、三条线、打开状态和 `:focus-visible` 样式。
  - `.links` 默认隐藏，`.links.mobile-open` 显示为全宽/定宽抽屉。
  - 下拉菜单取消 `min-width: 500px/700px`，改为 `width: 100%`、单列布局、可滚动高度。
  - 调整 Logo、导航字号、间距，保证视口不产生横向滚动。
- [ ] **Step 2: 补充交互可访问性**
  - 给菜单按钮增加 `aria-label`、`aria-expanded`。
  - 点击导航后关闭菜单，并对键盘焦点提供可见反馈。
- [ ] **Step 3: 响应式验收**
  - 在 375px、500px、768px 打开首页和英文首页。
  - 验收无横向滚动；汉堡按钮可见；菜单可打开、关闭；下拉项可点击。
  - 在桌面宽度下验收原有横向导航、hover 下拉和 sticky 行为不回归。

### Task 3: 修复轮播配置和首屏可读性

**Files:**
- Modify: `src/components/homeView/content/Content1.vue:8-12`
- Modify: `src/components_en/homeView/content/Content1.vue:8-12`
- Modify: `src/css/homeView/content/Content1.css`
- Modify: `src/css/homeView/top/Top2.css`
- Test: 控制台日志、桌面/移动截图

- [ ] **Step 1:** 将 `indicator-position="inside"` 改为 Element Plus 支持的 `none` 或 `outside`。
- [ ] **Step 2:** 为首屏文字区域增加稳定渐变遮罩；移动端减少标题字号、段落行宽和牌照条宽度，保证 CTA 可见。
- [ ] **Step 3:** 验证自动切换、左右切换、触摸滑动和自定义指示器，确认控制台不再出现 `indicatorPosition` 警告。

### Task 4: 统一首页统计数据和中文文案

**Files:**
- Modify: `src/components/homeView/content/Content4.vue:79-97`
- Modify: `src/components_en/homeView/content/Content4.vue:79-97`
- Modify: `src/components/homeView/content/Content5.vue:7,133-143`
- Modify: `src/components_en/homeView/content/Content5.vue:7,133-143`
- Modify: `src/components/homeView/content/Content3.vue`
- Test: DOM 文案检查、业务数据复核

- [ ] **Step 1:** 确认从业年限、海外公司数量、银行账户数量和长期客户数量；未确认时改为保守表述。
- [ ] **Step 2:** 统一统计初始值和动画结束值，避免从 `1/100/10/10` 跳到 `10/2000/1120/1520`。
- [ ] **Step 3:** 将“超过60多个”改为“超过60个”或“覆盖60多个”；将“案子进度”改为“项目进度”。
- [ ] **Step 4:** 修正香港银行开户段落，使标题与内容都指向香港账户服务。
- [ ] **Step 5:** 中英文统计顺序、数量、单位一一对应；英文 `1 Years` 改为 `1 Year`。

### Task 5: 改善首页卡片信息密度和交互语义

**Files:**
- Modify: `src/components/homeView/content/Content2.vue`
- Modify: `src/components/homeView/content/Content3.vue`
- Modify: `src/components/homeView/content/Content4.vue`
- Modify: 对应 `src/css/homeView/content/Content2.css`, `Content3.css`, `Content4.css`
- Modify: 中英文对应首页组件
- Test: 键盘操作和移动端阅读检查

- [ ] **Step 1:** 将卡片摘要控制在 1–2 行桌面、3–4 行移动端，详细说明移入详情页。
- [ ] **Step 2:** 将 `div @click="router.push(...)"` 改为 `<router-link :to="...">`，保留视觉样式和动画。
- [ ] **Step 3:** 统一标题、摘要、CTA 的高度层级，测试长中文标题和英文标题不发生布局跳动。

### Task 6: 补齐图片替代文本和语言本地化

**Files:**
- Modify: `src/components/homeView/**`
- Modify: `src/components_en/homeView/**`
- Test: `alt` 扫描、英文 DOM 快照

- [ ] **Step 1:** Logo 使用“十洲通 / SHI ZHOU TONG”；服务卡片、银行 Logo 使用对应名称；纯装饰背景保留空 alt。
- [ ] **Step 2:** 英文侧边工具栏改为 `WeChat`、`Back to top`，清理英文页残留中文 UI 文案。
- [ ] **Step 3:** 使用键盘 Tab 检查 Logo、导航、轮播控制、卡片和侧边工具栏。

### Task 7: 构建、回归和发布前检查

**Files:**
- Modify: 相关源码文件
- Test: 构建、浏览器回归、控制台日志

- [ ] **Step 1:** 运行 `npm run build`，确认构建成功且没有路由/轮播运行时警告。
- [ ] **Step 2:** 回归 `/`、`/en`、`/secretary/hk-msb`、`/secretary/hk-annual`、`/bank/hk/personal`、`/notary/hague`、`/ip/patent`。
- [ ] **Step 3:** 在 375px、768px、1440px 检查无横向滚动、文字裁切和按钮遮挡。
- [ ] **Step 4:** 检查控制台中的 `No match found`、`Invalid prop`、`Failed to resolve` 和图片加载失败。
- [ ] **Step 5:** 按导航、响应式、内容与无障碍拆分提交，提交前检查 `git diff`。

## 验收标准

- 首页和英文首页在 375px、768px、1440px 下没有横向滚动。
- 秘书服务菜单所有链接均能打开，`/secretary/hk-msb` 不再出现路由警告。
- 轮播使用合法 Element Plus 配置，控制台没有 `indicatorPosition` 警告。
- 首页统计数字只有一套经过确认的数据，初始值与动画结束值一致。
- 中文文案无明显语义重复、标题与内容错配；英文页无 `1 Years` 和残留中文 UI 文案。
- 信息性图片有有效 `alt`，卡片可用键盘访问。
- `npm run build` 成功，主要页面回归通过。

## 风险与回滚

- 业务数字未确认时，不直接发布大幅增长后的统计值；优先采用保守文案。
- 移动端导航 CSS 会影响共享详情页，必须同时回归中文和英文详情页。
- 卡片由 `div` 改为 `router-link` 可能改变默认样式，需要用 CSS 重置链接样式保持现有视觉。
- 若响应式重构范围过大，先修复导航、首屏和横向溢出，再拆分卡片视觉重构。
