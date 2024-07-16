import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  lang: "en-US",
  title: "My Awesome Project",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      {
        text: "spring-boot-demo",
        items: [
          { text: "demo1", link: "/markdown-examples/demo-1" },
          { text: "demo2", link: "/markdown-examples/demo-2" },
          { text: "demo3", link: "/markdown-examples/demo-3" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/chuxin-cs" }],
  },
});
