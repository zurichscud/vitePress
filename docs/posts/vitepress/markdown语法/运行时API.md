# 运行时 API {#runtime-api}

VitePress 提供了几个内置的 API 来让你访问应用程序数据。VitePress 还附带了一些可以在全局范围内使用的内置组件。

辅助函数可从 `vitepress` 全局导入，通常用于自定义主题 Vue 组件。但是，它们也可以在 `.md` 页面内使用，因为 markdown 文件被编译成 Vue [单文件组件](https://cn.vuejs.org/guide/scaling-up/sfc.html)。

以 `use*` 开头的方法表示它是一个 [Vue 3 组合式 API](https://cn.vuejs.org/guide/introduction.html#composition-api) 函数，只能在 `setup()` 或 `<script setup>` 中使用。

## `useData` <Badge type="info" text="composable" />

返回特定页面的数据。返回的对象具有以下类型：

```ts
interface VitePressData<T = any> {
  /**
   * 站点级元数据
   */
  site: Ref<SiteData<T>>;
  /**
   * .vitepress/config.js 中的 themeConfig
   */
  theme: Ref<T>;
  /**
   * 页面级元数据
   */
  page: Ref<PageData>;
  /**
   * 页面 frontmatter
   */
  frontmatter: Ref<PageData["frontmatter"]>;
  /**
   * 动态路由参数
   */
  params: Ref<PageData["params"]>;
  title: Ref<string>;
  description: Ref<string>;
  lang: Ref<string>;
  isDark: Ref<boolean>;
  dir: Ref<string>;
  localeIndex: Ref<string>;
}

interface PageData {
  title: string;
  titleTemplate?: string | boolean;
  description: string;
  relativePath: string;
  filePath: string;
  headers: Header[];
  frontmatter: Record<string, any>;
  params?: Record<string, any>;
  isNotFound?: boolean;
  lastUpdated?: number;
}
```

**示例：**

```vue
<script setup>
import { useData } from "vitepress";

const { theme } = useData();
</script>

<template>
  <h1>{{ theme.footer.copyright }}</h1>
</template>
```

## `useRoute` <Badge type="info" text="composable" />

返回具有以下类型的当前路由对象：

```ts
interface Route {
  path: string;
  data: PageData;
  component: Component | null;
}
```

## `useRouter` <Badge type="info" text="composable" />

返回 VitePress 路由实例，以便可以以编程方式导航到另一个页面。

```ts
interface Router {
  /**
   * 当前路由
   */
  route: Route;
  /**
   * 导航到新的 URL
   */
  go: (to?: string) => Promise<void>;
  /**
   * 在路由更改前调用。返回 `false` 表示取消导航
   */
  onBeforeRouteChange?: (to: string) => Awaitable<void | boolean>;
  /**
   * 在页面组件加载前（history 状态更新后）调用。返回 `false` 表示取消导航
   */
  onBeforePageLoad?: (to: string) => Awaitable<void | boolean>;
  /**
   * 在页面组件加载后（页面组件实际更新前）调用
   */
  onAfterPageLoad?: (to: string) => Awaitable<void>;
  /**
   * 在路由更改后调用
   */
  onAfterRouteChange?: (to: string) => Awaitable<void>;
}
```

## `withBase` <Badge type="info" text="helper" />

- **Type**: `(path: string) => string`

将配置的 [`base`](./site-config#base) 追加到给定的 URL 路径。另请参阅 [Base URL](../guide/asset-handling#base-url)。

## `$frontmatter` <Badge type="info" text="template global" />

在 Vue 表达式中直接访问当前页面的 [frontmatter](../guide/frontmatter) 数据。

```md
---
title: Hello
---

# {{ $frontmatter.title }}
```

## `$params` <Badge type="info" text="template global" />

在 Vue 表达式中直接访问当前页面的[动态路由参数](../guide/routing#dynamic-routes)。

```md
- package name: {{ $params.pkg }}
- version: {{ $params.version }}
```
