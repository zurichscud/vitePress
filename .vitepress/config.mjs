import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "哈哈哈",
  description: "A VitePress SiteA",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown基础" },
    ],
    logo: "/logo.png",

    sidebar: [
      {
        text: "vitepress",
        items: [
          { text: "Markdown基础", link: "/markdown基础" },
          { text: "Markdown扩展", link: "/markdown扩展" },
          { text: "frontmatter", link: "/frontmatter" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
