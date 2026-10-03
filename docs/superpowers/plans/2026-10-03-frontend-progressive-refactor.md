# 前端网站渐进式重构实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在保留现有业务路由和页面内容的前提下，重构公共布局、样式体系和核心页面结构，使网站具备稳定的响应式能力，并降低中英文页面和银行详情页的维护成本。

**Architecture:** 采用渐进式迁移，不更换 Vue 3、Vue Router、Element Plus、GSAP 和 Vite。先建立共享设计令牌与布局组件，再迁移首页、个人/公司开户和高频服务页；旧页面在迁移完成前继续可用，按页面组逐步替换，避免全站一次性重写。

**Tech Stack:** Vue 3、Vue Router 4、Element Plus、GSAP、原生 CSS/Sass、Vite。

## Global Constraints

- 保留现有路由地址、中文/英文入口和业务文案含义。
- 不新增 UI 框架，不引入运行时 CSS-in-JS，不改变现有构建工具链。
- 所有新布局必须支持 1440px、1024px、768px、390px 四个视口宽度。
- 页面动画必须支持 `prefers-reduced-motion: reduce`，减少动态效果对用户的影响。
- 每个页面组迁移后单独提交，提交前必须执行 `npm run build`。
- 旧页面未迁移完成前不得删除原组件和样式文件。

---

### Task 1: 建立重构基线与页面迁移清单

**Files:**
- Create: `docs/superpowers/audits/frontend-refactor-baseline.md`
- Modify: `docs/superpowers/plans/2026-10-03-frontend-progressive-refactor.md`（仅在执行过程中勾选完成项）
- Inspect: `src/router/index.js`
- Inspect: `src/components/`
- Inspect: `src/components_en/`
- Inspect: `src/views/`
- Inspect: `src/views_en/`
- Inspect: `src/css/`
- Inspect: `src/css_en/`

**Interfaces:**
- Produces: 页面分组、路由清单、公共组件候选清单，以及每组迁移的验收 URL。

- [x] **Step 1: 导出实际路由清单**

运行：

```powershell
rg -n "path:|component:" src/router/index.js
```

将结果整理为首页、开户、公司注册、秘书服务、公证/IP、其他详情页六组，并记录中文和英文对应路径。

- [x] **Step 2: 标记公共结构和重复实现**

运行：

```powershell
rg -n "Top2|SideToolbar|Footer|gsap|ScrollTrigger|min-width|position:\s*absolute" src/components src/components_en src/css src/css_en
```

在基线文档中记录每个重复结构的文件位置和迁移优先级。

- [x] **Step 3: 定义首批迁移页面**

首批页面固定为：

```text
/
 /en
 /bank/hk/personal
 /en/bank/hk/personal
 /bank/hk/company
 /en/bank/hk/company
```

基线文档为每个 URL 记录桌面端截图检查点、移动端检查点、主要内容区和当前已知问题。

- [x] **Step 4: 建立基线检查**

运行：

```powershell
npm run build
git status --short
```

Expected: 构建成功；基线文档提交为：

```text
docs: record frontend refactor baseline
```

---

### Task 2: 建立共享设计令牌和响应式布局基础

**Files:**
- Create: `src/css/common/tokens.css`
- Create: `src/css_en/common/tokens.css`
- Modify: `src/main.js`
- Modify: `src/css/common/Top.css`
- Modify: `src/css_en/common/Top.css`
- Modify: `src/css/homeView/HomeView.css`
- Modify: `src/css_en/homeView/HomeView.css`

**Interfaces:**
- Produces: 全站可使用的 CSS 自定义属性、`.site-container`、`.section-spacing`、统一断点和 reduced-motion 规则。
- Consumes: 现有全局样式加载顺序和 Top/HomeView 的布局约定。

- [x] **Step 1: 编写令牌文件**

在两个语言目录分别定义相同的结构令牌，中文和英文只允许存在字体差异：

```css
:root {
  --site-max-width: 1200px;
  --site-gutter: 24px;
  --site-gutter-mobile: 16px;
  --section-gap: 96px;
  --section-gap-mobile: 56px;
  --brand-color: #1677ff;
  --text-color: #1f2937;
  --muted-color: #6b7280;
  --border-color: #e5e7eb;
  --radius-card: 12px;
}

@media (max-width: 767px) {
  :root {
    --section-gap: var(--section-gap-mobile);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [x] **Step 2: 在 `src/main.js` 中按现有顺序引入 tokens**

保证 tokens 在页面 CSS 之前加载，避免覆盖现有页面的必要规则。

- [x] **Step 3: 增加统一容器和间距工具类**

在公共样式中加入：

```css
.site-container {
  width: min(100% - 2 * var(--site-gutter), var(--site-max-width));
  margin-inline: auto;
}

.section-spacing {
  padding-block: var(--section-gap);
}

@media (max-width: 767px) {
  .site-container {
    width: min(100% - 2 * var(--site-gutter-mobile), var(--site-max-width));
  }
}
```

- [x] **Step 4: 替换首页和公共导航中的硬编码容器值**

只替换与容器宽度、左右留白和区块间距相关的值；保留页面视觉上有业务含义的图片尺寸和装饰定位。

- [x] **Step 5: 验证四个视口**

运行：

```powershell
npm run build
```

使用浏览器检查 `/` 和 `/en` 在 1440、1024、768、390 像素下没有横向滚动条，提交：

```text
refactor: add shared responsive design tokens
```

---

### Task 3: 重构共享导航、页脚和侧边工具栏

**Files:**
- Modify: `src/components/homeView/top/Top2.vue`
- Modify: `src/components_en/homeView/top/Top2.vue`
- Modify: `src/css/homeView/top/Top2.css`
- Modify: `src/css_en/homeView/top/Top2.css`
- Modify: `src/components/common/Top.vue`
- Modify: `src/components_en/common/Top.vue`
- Modify: `src/css/common/Top.css`
- Modify: `src/css_en/common/Top.css`
- Inspect/modify: 侧边工具栏实际组件及对应中英文样式文件

**Interfaces:**
- Produces: `site-header` 的统一导航 API、可访问的移动菜单、统一语言切换和返回顶部行为。
- Consumes: Task 2 的 `--site-*` 令牌。

- [ ] **Step 1: 统一导航数据结构**

在中英文 Top2 组件中将菜单整理成相同的数据字段：

```js
{
  label: '菜单文字',
  route: '/target',
  children: []
}
```

路由判断统一使用当前路由的完整路径匹配，避免通过字符串截断导致菜单高亮错误。

- [ ] **Step 2: 统一移动菜单交互**

移动端使用一个按钮控制 `isMenuOpen`，按钮必须包含：

```html
<button
  type="button"
  :aria-expanded="isMenuOpen"
  aria-controls="site-navigation"
>
```

菜单打开时禁止页面横向滚动，点击路由后恢复关闭状态，按 Escape 关闭菜单。

- [ ] **Step 3: 统一可访问性和焦点样式**

为导航链接、菜单按钮、语言切换和返回顶部按钮补充可见 `:focus-visible` 样式；图片补充准确的 `alt` 文本。

- [ ] **Step 4: 合并重复的移动端布局规则**

中英文 CSS 使用相同的断点、容器和菜单定位规则，只有字体族、字号差异保留在语言文件中。

- [ ] **Step 5: 验证导航行为**

检查以下路径：

```text
/
/en
/bank/hk/personal
/en/bank/hk/personal
/secretary/hk-msb
```

验证桌面菜单、移动菜单、当前项高亮、语言切换、返回顶部和键盘操作，提交：

```text
refactor: unify responsive site navigation
```

---

### Task 4: 抽离首页和开户页的共享内容区组件

**Files:**
- Create: `src/components/common/SectionHeading.vue`
- Create: `src/components/common/FeatureCard.vue`
- Create: `src/components/common/AnimatedSection.vue`
- Create: `src/components_en/common/SectionHeading.vue`
- Create: `src/components_en/common/FeatureCard.vue`
- Create: `src/components_en/common/AnimatedSection.vue`
- Modify: `src/components/homeView/content/Content1.vue` through `Content5.vue`
- Modify: `src/components_en/homeView/content/Content1.vue` through `Content5.vue`
- Modify: `src/components/bank_personal/hk/Personal_content1.vue`
- Modify: `src/components/bank_personal/hk/Personal_content2.vue`
- Modify: `src/components_en/bank_personal/hk/Personal_content1.vue`
- Modify: `src/components_en/bank_personal/hk/Personal_content2.vue`
- Modify: `src/css/homeView/content/*.css`
- Modify: `src/css/bank_personal/hk/*.css`
- Modify: corresponding `src/css_en` files

**Interfaces:**
- `SectionHeading.vue`: props `title: string`, `subtitle?: string`, `align?: 'left'|'center'`.
- `FeatureCard.vue`: props `title: string`, `description?: string`, `icon?: string`; emits no events.
- `AnimatedSection.vue`: props `once?: boolean`, `y?: number`; exposes a wrapper slot and creates a GSAP ScrollTrigger only when motion is enabled.

- [ ] **Step 1: 抽离静态标题和卡片模板**

先保持现有 DOM class 名称，在组件内部映射现有标题、描述和插槽，确保页面 CSS 可逐步迁移。

- [ ] **Step 2: 统一动画入口**

将开户页标题、描述和滚动内容区的 GSAP 初始化收敛到 `AnimatedSection.vue` 或同等共享 composable；组件卸载时调用 `ctx.revert()`，避免路由切换后触发旧节点动画。

- [ ] **Step 3: 迁移首页内容区**

Content1 至 Content5 按区块逐个替换标题、卡片和统计数字的重复结构，保留现有业务文案和图片资源。

- [ ] **Step 4: 迁移个人开户中英文页面**

确保首屏加载动画、滚动进入动画、加载失败时的静态可见内容和 reduced-motion 行为一致。

- [ ] **Step 5: 验证内容区**

运行：

```powershell
npm run build
```

浏览器检查首页、个人开户中英文页面；确认首屏文字不会长期透明、滚动触发只执行一次、刷新和前进后退均可正常显示，提交：

```text
refactor: extract shared content sections and motion
```

---

### Task 5: 迁移公司开户和高频服务页面模板

**Files:**
- Inspect/modify: `src/views/bank_company/`
- Inspect/modify: `src/views_en/bank_company/`
- Inspect/modify: `src/components/bank_company/`
- Inspect/modify: `src/components_en/bank_company/`
- Inspect/modify: `src/css/bank_company/`
- Inspect/modify: `src/css_en/bank_company/`
- Inspect/modify: `src/views/secretary/`
- Inspect/modify: `src/views_en/secretary/`
- Modify: `src/router/index.js` only when迁移组件需要保持现有路由映射

**Interfaces:**
- Produces: 个人开户、公司开户、秘书服务页面可以共享相同的 Banner、标题区、内容区和联系入口布局。
- Consumes: Task 2 的设计令牌和 Task 4 的共享内容组件。

- [ ] **Step 1: 选择页面模板字段**

为银行/服务详情页统一以下字段：

```js
{
  title,
  subtitle,
  heroImage,
  sections: [{ title, body, image, reversed }],
  contactLabel,
  contactRoute
}
```

- [ ] **Step 2: 迁移香港公司开户中英文页面**

先迁移与个人开户结构最接近的香港公司开户页面，确保公司开户原有加载动画与个人开户保持相同入口和清理逻辑。

- [ ] **Step 3: 迁移秘书服务高频页面**

按访问频率迁移香港秘书、税务申报、海外年审等页面；每迁移一类服务保留旧 URL，不改变页面元信息和主要文案。

- [ ] **Step 4: 收敛详情页 CSS**

将重复的固定宽度、区块间距、标题样式和移动端媒体查询迁移到共享样式；页面特有的银行 logo、步骤图和价格卡片继续保留在页面 CSS。

- [ ] **Step 5: 验证页面组**

至少检查：

```text
/bank/hk/company
/en/bank/hk/company
/secretary/hk-msb
/en/secretary/hk-msb
```

验证 1440、1024、768、390 像素下无内容溢出，提交：

```text
refactor: migrate core service pages to shared templates
```

---

### Task 6: 清理重复样式并建立回归检查

**Files:**
- Modify: `src/css/**/*.css`
- Modify: `src/css_en/**/*.css`
- Modify: `src/components/**/*.vue`
- Modify: `src/components_en/**/*.vue`
- Create: `docs/superpowers/audits/frontend-refactor-regression.md`

**Interfaces:**
- Produces: 旧重复样式清理记录、页面回归清单和最终构建结果。
- Consumes: 前五个任务已经迁移的页面组。

- [ ] **Step 1: 扫描未迁移的固定布局**

运行：

```powershell
rg -n "min-width:\s*[0-9]+px|width:\s*[0-9]{4,}px|left:\s*-?[0-9]{3,}px|right:\s*-?[0-9]{3,}px" src/css src/css_en
```

逐项判断是业务图片/装饰尺寸还是会影响小屏布局的容器规则；只删除后者。

- [ ] **Step 2: 扫描中英文重复样式**

对照 `src/css` 和 `src/css_en`，将完全相同的布局规则移入共享公共 CSS，语言文件只保留字体和语言特有排版。

- [ ] **Step 3: 删除已迁移页面的死样式**

以页面组件引用的 class 为依据删除死样式；每次删除后立即运行构建，避免一次删除造成难以定位的回归。

- [ ] **Step 4: 执行构建和路由回归**

运行：

```powershell
npm run build
npm run dev
```

浏览器逐项检查：

```text
/
/en
/bank/hk/personal
/en/bank/hk/personal
/bank/hk/company
/en/bank/hk/company
/secretary/hk-msb
/en/secretary/hk-msb
```

- [ ] **Step 5: 记录回归结果并提交**

回归文档必须记录每个路径在四种视口下的结果、已知构建警告和截图位置，提交：

```text
chore: remove migrated frontend duplication and record regression checks
```

---

## 验收标准

- 首批核心页面在 390px 宽度下无横向滚动，导航可展开、关闭和键盘操作。
- 中英文首页、个人开户和公司开户的公共布局、动画入口和响应式断点一致。
- 页面路由地址、语言切换和主要内容文案保持兼容。
- 页面切换后没有残留 ScrollTrigger、透明内容或重复动画。
- `npm run build` 成功。
- 迁移页面不再依赖会导致小屏溢出的固定容器宽度。
- 每个迁移阶段有独立提交和可回滚边界。



