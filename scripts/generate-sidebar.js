import links from '../docs/.vitepress/links.js';
import fs from 'fs';
import path from 'path';

/**
 * 提取文件名中的数字前缀
 * @param {string} filename - 文件名
 * @returns {number|null} 提取的数字，如果没有则返回 null
 */
function extractNumberPrefix(filename) {
    const match = filename.match(/^(\d+)[.-]/);
    return match ? parseInt(match[1], 10) : null;
}

/**
 * 移除文件名中的数字前缀
 * @param {string} filename - 文件名
 * @returns {string} 移除数字前缀后的文件名
 */
function removeNumberPrefix(filename) {
    return filename.replace(/^\d+[.-]/, '');
}

/**
 * 基于 links.js 生成侧边栏配置
 * @returns {Object} 侧边栏配置对象
 */
function generateSidebarFromLinks() {
    const sidebarConfig = {};
    const categoryMap = new Map();

    // 遍历所有链接，按分类组织
    Object.entries(links).forEach(([fullPath, shortPath]) => {
        // fullPath 格式: "posts/TypeScript/tsconfig.md"
        // shortPath 格式: "TypeScript/tsconfig.md"

        const pathParts = shortPath.split('/');
        const category = pathParts[0]; // 主分类，如 "TypeScript"

        if (!categoryMap.has(category)) {
            categoryMap.set(category, new Map());
        }

        const categoryItems = categoryMap.get(category);

        // 构建嵌套结构
        let currentLevel = categoryItems;
        const pathSegments = pathParts.slice(1); // 去掉主分类

        // 处理子目录
        for (let i = 0; i < pathSegments.length - 1; i++) {
            const segment = pathSegments[i];
            if (!currentLevel.has(segment)) {
                currentLevel.set(segment, new Map());
            }
            currentLevel = currentLevel.get(segment);
        }

        // 添加文件
        const filename = pathSegments[pathSegments.length - 1];
        if (filename && filename.endsWith('.md')) {
            const title = filename.replace('.md', '');
            const displayTitle = removeNumberPrefix(title);
            const link = '/' + shortPath.replace('.md', '');

            currentLevel.set(filename, {
                text: displayTitle,
                link: link,
                isFile: true
            });
        }
    });

    // 转换 Map 结构为 VitePress 侧边栏格式
    function convertMapToSidebarItems(map) {
        const items = [];
        const entries = Array.from(map.entries());

        // 排序：目录在前，文件在后，然后按数字前缀排序
        entries.sort(([nameA, valueA], [nameB, valueB]) => {
            const isFileA = valueA.isFile;
            const isFileB = valueB.isFile;

            // 目录在前，文件在后
            if (!isFileA && isFileB) return -1;
            if (isFileA && !isFileB) return 1;

            // 提取数字前缀进行排序
            const numA = extractNumberPrefix(nameA);
            const numB = extractNumberPrefix(nameB);

            if (numA !== null && numB !== null) {
                return numA - numB;
            }
            if (numA !== null && numB === null) return -1;
            if (numA === null && numB !== null) return 1;

            return nameA.localeCompare(nameB, 'zh-CN');
        });

        entries.forEach(([name, value]) => {
            if (value.isFile) {
                // 文件项
                items.push({
                    text: value.text,
                    link: value.link
                });
            } else {
                // 目录项
                const subItems = convertMapToSidebarItems(value);
                if (subItems.length > 0) {
                    items.push({
                        text: removeNumberPrefix(name),
                        collapsible: true,
                        collapsed: false,
                        items: subItems
                    });
                }
            }
        });

        return items;
    }

    // 为每个主分类生成侧边栏配置
    categoryMap.forEach((categoryItems, category) => {
        const pathPrefix = `/${category}/`;
        const items = convertMapToSidebarItems(categoryItems);

        if (items.length > 0) {
            sidebarConfig[pathPrefix] = [
                {
                    text: category,
                    items: items
                }
            ];
        }
    });

    return sidebarConfig;
}

// 生成侧边栏配置
const sidebarConfig = generateSidebarFromLinks();

// 生成文件内容
const fileContent = `// 自动生成，请勿修改
export default ${JSON.stringify(sidebarConfig, null, 2)};
`;

// 写入文件
const dirPath = path.resolve(process.cwd(), 'docs', '.vitepress');
const filePath = path.resolve(dirPath, 'sidebar.js');
fs.writeFileSync(filePath, fileContent, 'utf-8');

console.log('sidebar.js 已生成');
console.log('生成的分类数量:', Object.keys(sidebarConfig).length);
console.log('分类列表:', Object.keys(sidebarConfig));
