import { globby } from "globby"
import fs from "fs"
import path from "path"

/**获取所有md文件的路径 */
export async function getAllPagesPaths() {
    const paths = await globby(["**.md"], { ignore: ["**/node_modules/**", "**/dist/**", "README.md"] })
    return paths.filter(item => item.includes("/posts"))
}

/**
 * 将路径转换为链接
 * @param {string[]} paths - 文件路径数组
 * @returns {string[]} 链接数组
 */
function pathsToLinks(paths) {
    return paths.map(item => {
        //1.去掉docs/posts/
        const link = item.replace("docs/posts/", "")
        return link
    })
}

/**
 * 提取文件名中的数字前缀
 * @param {string} filename - 文件名
 * @returns {number|null} 提取的数字，如果没有则返回 null
 */
function extractNumberPrefix(filename) {
    const match = filename.match(/^(\d+)[.-]/)
    return match ? parseInt(match[1], 10) : null
}

/**
 * 移除文件名中的数字前缀
 * @param {string} filename - 文件名
 * @returns {string} 移除数字前缀后的文件名
 */
function removeNumberPrefix(filename) {
    return filename.replace(/^\d+[.-]/, '')
}


/**
 * 递归生成目录的 sidebar 配置
 * @param {string} dirPath - 目录路径
 * @param {Object} options - 配置选项
 * @param {string[]} options.exclude - 要排除的文件或目录名
 * @param {boolean} options.collapsible - 是否可折叠
 * @param {boolean} options.collapsed - 默认是否折叠
 * @returns {Array} sidebar 配置数组
 */
function generateSidebarItems(dirPath, options = {}) {
    const {
        exclude = ["assets", "images", "public", ".DS_Store"],
        collapsible = true,
        collapsed = false
    } = options

    if (!fs.existsSync(dirPath)) {
        console.warn(`目录不存在: ${dirPath}`)
        return []
    }

    const items = []
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    // 排序：目录在前，文件在后，然后按数字前缀排序，最后按名称排序
    const sortedEntries = entries
        .filter(entry => !exclude.includes(entry.name) && !entry.name.startsWith("."))
        .sort((a, b) => {
            // 首先按类型排序：目录在前，文件在后
            if (a.isDirectory() && !b.isDirectory()) return -1
            if (!a.isDirectory() && b.isDirectory()) return 1

            // 提取数字前缀
            const numA = extractNumberPrefix(a.name)
            const numB = extractNumberPrefix(b.name)

            // 如果都有数字前缀，按数字排序
            if (numA !== null && numB !== null) {
                return numA - numB
            }

            // 如果只有一个有数字前缀，有数字的排在前面
            if (numA !== null && numB === null) return -1
            if (numA === null && numB !== null) return 1

            // 都没有数字前缀，按名称排序
            return a.name.localeCompare(b.name, "zh-CN")
        })

    for (const entry of sortedEntries) {
        const fullPath = path.join(dirPath, entry.name)

        if (entry.isDirectory()) {
            // 处理目录
            const subItems = generateSidebarItems(fullPath, options)
            if (subItems.length > 0) {
                items.push({
                    text: removeNumberPrefix(entry.name),
                    collapsible,
                    collapsed,
                    items: subItems
                })
            }
        } else if (entry.name.endsWith(".md")) {
            // 处理 Markdown 文件
            const title = path.basename(entry.name, ".md")
            const displayTitle = removeNumberPrefix(title)

            // 生成相对于 docs 目录的链接
            const relativePath = path.relative(path.resolve("docs"), fullPath)
            const link = "/" + relativePath.replace(/\\/g, "/").replace(".md", "")

            items.push({
                text: displayTitle,
                link: link
            })
        }
    }

    return items
}

/**
 * 自动生成完整的 sidebar 配置
 * @param {string} postsDir - posts 目录路径，默认为 "docs/posts"
 * @param {Object} globalOptions - 全局配置选项
 * @returns {Object} 完整的 sidebar 配置对象
 */
export function generateSidebar(postsDir = "docs/posts", globalOptions = {}) {
    const sidebarConfig = {}
    const postsPath = path.resolve(postsDir)

    if (!fs.existsSync(postsPath)) {
        console.warn(`Posts 目录不存在: ${postsPath}`)
        return {}
    }

    const entries = fs.readdirSync(postsPath, { withFileTypes: true })

    for (const entry of entries) {
        if (entry.isDirectory() && !entry.name.startsWith(".")) {
            const categoryPath = path.join(postsPath, entry.name)
            const items = generateSidebarItems(categoryPath, globalOptions)

            if (items.length > 0) {
                // 为每个主要分类创建 sidebar 配置
                const pathPrefix = `/${entry.name}/`
                sidebarConfig[pathPrefix] = [
                    {
                        text: entry.name,
                        items: items
                    }
                ]
            }
        }
    }

    return sidebarConfig
}

/**
 * 获取指定分类的 sidebar 配置
 * @param {string} category - 分类名称
 * @param {Object} options - 配置选项
 * @returns {Array} 该分类的 sidebar 配置
 */
export function getSidebarForCategory(category, options = {}) {
    const categoryPath = path.resolve(`docs/posts/${category}`)
    return generateSidebarItems(categoryPath, options)
}
