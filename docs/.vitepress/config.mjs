import { defineConfig } from "vitepress";
import { autoGenerateSidebar } from "./tools.mjs";
import { local, algolia } from "./plugins/search.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档库",
  logo: "/logo.png",
  description: "A VitePress SiteA",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "VitePress", link: "/vitepress/markdown基础" },
      { text: "Nuxt", link: "/nuxt/基础" },
    ],
    outline: "deep",
    outlineTitle: "目录",

    sidebar: autoGenerateSidebar("./docs", {
      // useFrontmatter: true,
      collapsible: true,
      collapsed: false,
    }),
    search: local,
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
