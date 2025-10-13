import { generateSidebar } from "./utils.js";

const autoSidebar = generateSidebar("docs/posts", {
  collapsible: true,       // 可折叠
  collapsed: false,        // 默认展开
  exclude: ["assets", "images", "public", ".DS_Store"]  // 排除的目录
});
// console.log('[ autoSidebar ]-4', JSON.stringify(autoSidebar))
export default autoSidebar;