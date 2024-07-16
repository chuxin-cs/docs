import { defineConfig } from "vitepress";
import { nav, sidebar } from "./themeConfig";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  lang: "en-US",
  title: "My Awesome Project",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/chuxin-cs" }],
  },
});
