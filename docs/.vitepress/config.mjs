import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mjs";
import { local, algolia } from "./plugins/search.js";
import nav from "./nav.js";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档库",
  base: "/vitePress/", // GitHub Pages 子路径配置
  logo: "/logo.png",
  description: "A VitePress SiteA",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    outline: "deep",
    outlineTitle: "目录",
    lastUpdated: {
      text: "最后更新于",
    },
    sidebar,
    search: local,
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/zurichscud/vitePress" },
    ],
  },
});
