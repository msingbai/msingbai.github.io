const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const themeConfig = require("./config/themeConfig.js");

const { penName, title } = require("./common/info");

module.exports = {
      extendsMarkdown: md => {
        md.use(require('markdown-it-mathjax3'))
        md.linkify.set({ fuzzyEmail: false }) // 可选，用于禁用模糊电子邮件链接
    },
  // 使用npm包主题 vuepress-theme-vdoing
  theme: "vdoing",
  // 仓库地址
  base: "/",
  head,
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4"], // 支持 h2、h3、h4 标题
    plugins:['markdown-it-mathjax3'],
    externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' }
  },
  // 多语言支持
  locales: {
    "/": {
      lang: "zh-CN",
      title: penName + title,
      description:
        "标签页标题",
    },
  },
  plugins,
  themeConfig,
};