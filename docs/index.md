---
home: true
# heroImage: https://symbol-node.oss-cn-shanghai.aliyuncs.com/blog/basic/background.jpg
heroText: 迷新白
tagline: “无论发生了什么，所发生的都是一切可能中对我最好的那一种”
# actionText: 立刻进入 →
# actionLink: /web/
# bannerBg: custom #custom自定义 # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
pageClass: vdoing-index-class
bannerBg: https://cdn.jsdelivr.net/gh/msingbai/blog_img@main/blog/basic/TheGleaners.jpg


features: # 可选的
  - title: 笔记
    details: Vue框架等技术笔记
    link: /frontend/ # 可选
    imgUrl: https://cdn.jsdelivr.net/gh/msingbai/blog_img@main/blog/basic/stickers.png
    imgStyle: "width: 35% ;height: 35%"
  - title: 文字
    details: 一些记录生活的文字
    link: /speak/
    imgUrl: https://cdn.jsdelivr.net/gh/msingbai/blog_img@main/blog/basic/speak.png
    imgStyle: "width: 35% ;height: 35%"
  - title: 阅读
    details: 一些阅读轨迹
    link: /read/
    imgUrl: https://cdn.jsdelivr.net/gh/msingbai/blog_img@main/blog/basic/read.png
    imgStyle: "width: 35% ;height: 35%"
# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: detailed
---

<!-- 小熊猫 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->

<ClientOnly>
  <IndexBigImg />
</ClientOnly>
<WebInfo />