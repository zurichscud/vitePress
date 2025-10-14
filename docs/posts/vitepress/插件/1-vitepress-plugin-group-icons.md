# vitepress-plugin-group-icons

让 VitePress 代码块顶部出现文件名/标题栏

## 安装

```sh
npm i -D vitepress-plugin-group-icons
```

## 配置

- 注册插件

```ts [.vitepress/config.ts]
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

export default {
  markdown: { config: (md) => md.use(groupIconMdPlugin) },
  vite: { plugins: [groupIconVitePlugin()] },
};
```

- 导入样式

```ts [.vitepress/theme/index.ts]
import DefaultTheme from "vitepress/theme";
import "virtual:group-icons.css"; // ← 必须显式引入
export default { extends: DefaultTheme };
```

## 用法

````md
```ts [文件名]

```
````
