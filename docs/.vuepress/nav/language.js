// golang导航栏
module.exports = {
  text: "语言",
  link: "/language/",
  items: [
    {
      text: "Java",
      link: "/java/",
    },
    {
      text: "前端",
      link: "/frontend/",
      items: [
        { text: "Vue", link: "/vue/" },
        { text: "VuePress", link: "/vuepress/" },
      ],
    },
  ],
};
