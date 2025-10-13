import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mjs";
import markdown from "./markdown.js";
import { local, algolia } from "./plugins/search.js";
import nav from "./nav.js";
// https://vitepress.dev/reference/site-config

const base = "/vitePress/";// GitHub Pages 子路径配置
export default defineConfig({
  title: "文档库",
  base,
  rewrites: {
    'posts/:pkg/(.*)': ':pkg/(.*)'
  },
  head: [
    [
      "link",
      { rel: 'icon', type: 'image/png', href: (base + '/logo.png') }//动态引用
    ],
  ],
  cleanUrls: true,
  description: "A VitePress SiteA",
  ignoreDeadLinks: true,
  markdown,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    outline: "deep",
    logo: "/logo.png",
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
