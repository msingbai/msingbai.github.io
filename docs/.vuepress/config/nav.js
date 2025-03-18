const frontend = require("../nav/frontend");
const backend = require("../nav/backend");
const projects = require("../nav/projects");
const tools = require("../nav/tools");
const more = require("../nav/more");

module.exports = [
  { text: "首页", link: "/" },
  { text: "随笔", link: "/speak/" },
  frontend,
  backend,
  tools,
  { text: "读吧", link: "/read/" },
  projects,
  more,
];
