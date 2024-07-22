const nav = [
  // 首页
  { text: "Home", link: "/" },
  // 示例
  { text: "Examples", link: "/markdown-examples" },
  // spring-boot-demo
  {
    text: "spring-boot-demo",
    items: [
      { text: "demo1", link: "/spring-boot-demo/demo-1" },
      { text: "demo2", link: "/spring-boot-demo/demo-2" },
      { text: "demo3", link: "/spring-boot-demo/demo-3" },
    ],
  },
  //
  {
    text: "go-demo",
    items: [
      { text: "demo1", link: "/go-demo/demo-1" },
      { text: "demo2", link: "/go-demo/demo-2" },
      { text: "demo3", link: "/go-demo/demo-3" },
    ],
  },
  //
  {
    text: "vue-demo",
    items: [
      { text: "demo1", link: "/vue-demo/demo-1" },
      { text: "demo2", link: "/vue-demo/demo-2" },
      { text: "demo3", link: "/vue-demo/demo-3" },
    ],
  },
  //
  {
    text: "react-demo",
    items: [
      { text: "demo1", link: "/react-demo/demo-1" },
      { text: "demo2", link: "/react-demo/demo-2" },
      { text: "demo3", link: "/react-demo/demo-3" },
    ],
  },
  //
  {
    text: "node-demo",
    items: [
      { text: "demo1", link: "/node-demo/demo-1" },
      { text: "demo2", link: "/node-demo/demo-2" },
      { text: "demo3", link: "/node-demo/demo-3" },
    ],
  },
];

const sidebar = [
  {
    text: "Examples",
    items: [
      { text: "Markdown Examples", link: "/markdown-examples" },
      { text: "Runtime API Examples", link: "/api-examples" },
    ],
  },
  {
    text: "spring boot demo",
    items: [
      {
        text: "Markdown Examples",
        link: "/spring-boot-demo/第01期：Java 环境安装",
      },
      { text: "Runtime API Examples", link: "/api-examples" },
    ],
  },
];

export { nav, sidebar };
