// 百度统计，请去该官网获取自己的代码，这样就能统计谁访问你的网站
// function 可以使用 tab 键缩进，不会导致页面上有多个空格
// const baidutj = `var _hmt = _hmt || [];
//     (function() {
//     var hm = document.createElement("script");
//     hm.src = "https://hm.baidu.com/hm.js?6278805df8085230968e4b768fb072b5";
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(hm, s);
// })();`;
//上面的代码是gitpage的直接页面，改成自己的域名
const baidutj = `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?bcc11538ff03f0eb1d91514cde84e172";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`;


module.exports = baidutj;
