# 前端重构基线审计

日期：2026-10-03  
项目：十洲通商业项目（Vue 3 + Vite）  
审计范围：`src/router/index.js`、`src/views/`、`src/views_en/`、`src/components/`、`src/components_en/`、`src/css/`、`src/css_en/`

## 当前工程基线

| 项目 | 结果 |
| --- | --- |
| 技术栈 | Vue 3.5、Vue Router 4、Vite 7、Element Plus 2.11、GSAP 3.13 |
| 路由总数 | 202 |
| 中文组件/视图/样式 | 221 / 100 / 302 |
| 英文组件/视图/样式 | 216 / 100 / 300 |
| 构建命令 | `npm run build` |
| 自动化测试 | `package.json` 未配置 `test` 脚本 |

当前代码提交基线为 `f16ac1c`。本阶段新增审计文档，不改变页面运行逻辑。

## 路由分组

| 页面组 | 路由特征 | 第一批验收路径 |
| --- | --- | --- |
| 首页 | `/`、`/en` | `/`、`/en` |
| 公司注册 | `/company/*`、`/company_en/*` | 后续迁移 |
| 秘书服务 | `/secretary/*`、`/secretary_en/*` | `/secretary/hk-msb`、`/secretary_en/hk-msb` |
| 个人开户 | `/bank/{region}/personal`、部分 `/en/bank/*` | `/bank/hk/personal`、`/en/bank/hk/personal` |
| 公司开户 | `/bank/{region}/{bank}`、英文对应路径 | `/bank/hk/constructions`、`/en/bank/hk/constructions` |
| 公证/IP | `/notary/*`、`/ip/*`、`/intellectual/*` | 后续迁移 |

英文入口并非统一前缀：公司注册使用 `/company_en`，秘书服务使用 `/secretary_en`，其他页面部分使用 `/en/*`。重构必须保留现有 URL。

## 公共结构

- `src/App.vue` 负责 `router-view` 和全局 `src/components/SideToolbar.vue`。
- 详情页普遍使用 `src/components/common/Top.vue` 或 `src/components_en/common/Top.vue`。
- 首页使用 `src/components/homeView/top/Top2.vue`、英文对应组件及 `Bottom1.vue`。
- 首页 Content1 至 Content5 在中英文目录各维护一份。
- 银行详情页大量使用 `*_content1.vue`、`*_content2.vue`，并分别维护中英文组件和 CSS。
- 银行、公司、秘书、IP、认证目录均存在领域公共组件，如 `Link.vue`、`ChooseUs.vue`、`MaintenanceGuide.vue`。

## 扫描结果和风险

| 扫描项 | 命中量 | 需要关注的问题 |
| --- | ---: | --- |
| `min-width: <数字>px` | 39 | 可能撑宽移动端页面 |
| `width: <四位及以上数字>px` | 96 | 固定容器需区分内容宽度和图片宽度 |
| `position: absolute` | 997 | 结构布局可能绑定到绝对坐标 |
| `gsap.` | 1877 | 动画入口分散 |
| `ScrollTrigger` | 406 | 需要检查路由卸载时清理和重复注册 |

这些命中不等于全部缺陷。图片、logo 和装饰可以保留固定尺寸；迁移只处理导致溢出、遮挡或重复维护的结构规则。

## 首批页面检查点

### 首页

- 1440/1024px：导航、下拉菜单、轮播、五个内容区和页脚完整。
- 768px：导航与内容区不重叠，统计区允许换行。
- 390px：菜单可展开关闭，轮播文字不被覆盖，卡片单列显示。
- 中英文页面的统计数字、标题、CTA 均可见。

### 香港个人开户

- 1440/390px：Top、首屏、联系入口、说明区、Bottom 均完整。
- 手机端无横向滚动，图片与文字按单列排列。
- 首屏动画结束后文字保持可见，滚动动画只触发一次。
- 刷新、前进和后退后内容不保持透明。

### 香港公司开户

- 与个人开户比较 Top、首屏、内容区和底部间距。
- 手机端检查银行 logo、步骤内容、联系入口和底部溢出。
- 记录现有动画作为后续共享模板的参考。

### 秘书服务样例

- 检查公共 Top、Banner、正文、图片和页脚。
- 重点记录固定宽度正文、表格和绝对定位装饰。

## 第一阶段结论

1. 项目适合渐进式重构，不适合一次性替换全部页面。
2. 首页、个人开户和公司开户应作为首批页面，原因是入口重要且中英文、动画、样式重复明显。
3. 导航、侧边工具栏、页脚和标题区应先稳定接口，再迁移银行和服务详情页。
4. 响应式应先建立容器、间距和断点令牌，避免继续向数百个样式文件追加重复媒体查询。
5. GSAP/ScrollTrigger 需要统一初始化和销毁，避免路由切换后出现透明内容或重复触发器。

## 验证命令

```powershell
npm run build
git status --short
```

预期：构建成功；本阶段只新增本审计文档。

