import fs from "fs";
import path from "path";

/**
 * 读取指定路径并生成VitePress sidebar配置
 * @param {string} dirPath - 要扫描的目录路径
 * @param {Object} options - 配置选项
 * @param {boolean} options.useFrontmatter - 是否使用frontmatter中的title
 * @param {string[]} options.exclude - 要排除的文件或目录
 * @param {boolean} options.collapsible - 是否可折叠
 * @param {boolean} options.collapsed - 默认是否折叠
 * @param {string} options.docsRoot - docs根目录路径，用于计算正确的链接
 * @returns {Array} sidebar配置数组
 */
export function generateSidebar(dirPath, options = {}) {
  const {
    useFrontmatter = false,
    exclude = ["assets", "images", "public"],
    collapsible = true,
    collapsed = false,
    docsRoot = null,
  } = options;

  // 检查目录是否存在
  if (!fs.existsSync(dirPath)) {
    console.warn(`目录不存在: ${dirPath}`);
    return [];
  }

  const items = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  // 排序：目录在前，文件在后，然后按名称排序
  const sortedEntries = entries
    .filter(
      (entry) => !exclude.includes(entry.name) && !entry.name.startsWith(".")
    )
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name, "zh-CN");
    });

  for (const entry of sortedEntries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // 处理目录
      const subItems = generateSidebar(fullPath, options);
      if (subItems.length > 0) {
        items.push({
          text: entry.name,
          collapsible,
          collapsed,
          items: subItems,
        });
      }
    } else if (entry.name.endsWith(".md")) {
      // 文件名或markdown中提取的标题
      const title =
        path.basename(entry.name, ".md") || getTitleFromFile(fullPath, useFrontmatter);
      // 生成相对于docs目录的链接
      let link;
      if (docsRoot) {
        const relativePath = path.relative(docsRoot, fullPath);
        link = "/" + relativePath.replace(/\\/g, "/").replace(".md", "");
      } else {
        // 如果没有提供docsRoot，尝试自动检测
        const relativePath = path.relative(process.cwd(), fullPath);
        if (relativePath.startsWith("docs/")) {
          link =
            "/" +
            relativePath.substring(5).replace(/\\/g, "/").replace(".md", "");
        } else {
          link = "/" + relativePath.replace(/\\/g, "/").replace(".md", "");
        }
      }

      items.push({
        text: title,
        link: link,
      });
    }
  }

  return items;
}

/**
 * 从Markdown文件中提取标题
 * @param {string} filePath - 文件路径
 * @param {boolean} useFrontmatter - 是否使用frontmatter中的title
 * @returns {string|null} 文件标题
 */
function getTitleFromFile(filePath, useFrontmatter) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    if (useFrontmatter) {
      // 尝试从frontmatter中提取title
      const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const titleMatch = frontmatter.match(
          /title:\s*['"]?([^'"]*?)['"]?\s*$/m
        );
        if (titleMatch) {
          return titleMatch[1].trim();
        }
      }
    }

    // 从第一个一级标题中提取
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) {
      return h1Match[1].trim();
    }

    return null;
  } catch (error) {
    console.warn(`读取文件失败: ${filePath}`, error.message);
    return null;
  }
}

/**
 * 为指定目录生成完整的sidebar配置
 * @param {string} docsPath - docs目录路径
 * @param {Object} config - 配置对象，键为路径前缀，值为选项
 * @returns {Object} 完整的sidebar配置对象
 */
export function generateSidebarConfig(docsPath, config = {}) {
  const sidebarConfig = {};
  const docsRoot = path.resolve(docsPath);

  for (const [pathPrefix, options = {}] of Object.entries(config)) {
    const fullPath = path.join(
      docsPath,
      pathPrefix.replace(/^\//, "").replace(/\/$/, "")
    );
    const items = generateSidebar(fullPath, { ...options, docsRoot });

    if (items.length > 0) {
      sidebarConfig[pathPrefix] = [
        {
          text: options.groupTitle || path.basename(pathPrefix),
          items: items,
        },
      ];
    }
  }

  return sidebarConfig;
}

/**
 * 自动扫描docs目录并生成sidebar配置
 * @param {string} docsPath - docs目录路径
 * @param {Object} globalOptions - 全局配置选项
 * @returns {Object} 自动生成的sidebar配置
 */
export function autoGenerateSidebar(docsPath, globalOptions = {}) {
  const entries = fs.readdirSync(docsPath, { withFileTypes: true });
  const config = {};
  const docsRoot = path.resolve(docsPath);

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith(".")) {
      const pathPrefix = `/${entry.name}/`;
      config[pathPrefix] = {
        groupTitle: entry.name,
        docsRoot,
        ...globalOptions,
      };
    }
  }

  return generateSidebarConfig(docsPath, config);
}

const sidebar = autoGenerateSidebar("./docs", {
  // useFrontmatter: true,
  collapsible: true,
  collapsed: false,
});

export default sidebar;
