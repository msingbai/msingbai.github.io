const baidutj = require("../common/baidutj.js");
const googletj = require("../common/googletj.js");

// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  [
    "link",
    {
      rel: "shortcut icon",
      href: "https://cdn.jsdelivr.net/gh/msingbai/blog_img@main/blog/basic/candle-withback.png",
    },
  ], //favicons，资源放在public文件夹
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_3114978_qe0b39no76.css",
    },
  ], // 阿里在线矢量库
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }], // 解决 Chrome 网站统计不准确问题

  // [
  //   "noscript",
  //   {},
  //   '<meta http-equiv="refresh" content="0; url=https://www.youngkbt.cn/noscript/"><style>.theme-vdoing-content { display:none }',
  // ], // 私密文章模块需要

  [
    "meta",
    {
      name: "keywords",
      content:
        "迷新白的Blog,前端,Vue,社区发现(Community Dection),高等数学。记录生活和技术的成长",
    },
  ],
  [
    "meta",
    {
      name: "google-site-verification",
      content: "JfM7Cg2a2jlGXV2PfkH7sIRWZmcTa1aDCOHMaQH2UuE",
    },
  ],
  ["meta", { name: "baidu-site-verification", content: "code-OBocxvg8ja" }],
  ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色

  // 下面四个 script 是 demo-block 插件用到，但是因为导航栏兼容问题，不再使用
  // ['script', { src: 'https://unpkg.zhimg.com/react/umd/react.production.min.js' }],
  // ['script', { src: 'https://unpkg.zhimg.com/react-dom/umd/react-dom.production.min.js' }],
  // ['script', { src: 'https://unpkg.zhimg.com/vue/dist/vue.min.js' }],
  // ['script', { src: 'https://unpkg.zhimg.com/@babel/standalone/babel.min.js' }],
  // Twikoo 评论系统
  //   [
  //     "script",
  //     {
  //       src: "https://fastly.jsdelivr.net/npm/twikoo@1.4.18/dist/twikoo.all.min.js",
  //     },
  //   ],

  // 百度统计 js
  ["script", {}, baidutj],
  [
    "script",
    {
      async: "async",
      // src: "https://www.googletagmanager.com/gtag/js?id=G-Q9XQS90GYB",
      src: "",
    },
  ],
  // 谷歌统计 js
  ["script", {}, googletj],
  [
    "script",
    {
      async: "async",
      // src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1725717718088510",
      src: "",
      crossorigin: "anonymous",
    },
  ], // 网站关联Google AdSense 与 html格式广告支持
];
