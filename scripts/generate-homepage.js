import fs from 'fs';
import path from 'path';

/**
 * 获取目录下的第一个markdown文件作为入口链接
 * @param {string} dirPath - 目录路径
 * @returns {string|null} 第一个markdown文件的相对路径
 */
function getFirstMarkdownFile(dirPath) {
    try {
        const files = fs.readdirSync(dirPath);

        // 先查找直接在目录下的markdown文件
        const mdFiles = files.filter(file => file.endsWith('.md'));
        if (mdFiles.length > 0) {
            return mdFiles[0];
        }

        // 如果没有直接的markdown文件，递归查找子目录
        const subDirs = files.filter(file => {
            const fullPath = path.join(dirPath, file);
            return fs.statSync(fullPath).isDirectory();
        });

        for (const subDir of subDirs) {
            const subDirPath = path.join(dirPath, subDir);
            const subFile = getFirstMarkdownFile(subDirPath);
            if (subFile) {
                return path.join(subDir, subFile);
            }
        }

        return null;
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
        return null;
    }
}

/**
 * 统计目录下的markdown文件数量
 * @param {string} dirPath - 目录路径
 * @returns {number} markdown文件数量
 */
function countMarkdownFiles(dirPath) {
    let count = 0;

    try {
        const files = fs.readdirSync(dirPath);

        for (const file of files) {
            const fullPath = path.join(dirPath, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                count += countMarkdownFiles(fullPath);
            } else if (file.endsWith('.md')) {
                count++;
            }
        }
    } catch (error) {
        console.error(`Error counting files in ${dirPath}:`, error);
    }

    return count;
}

/**
 * 生成分类描述
 * @param {string} category - 分类名称
 * @returns {string} 分类描述
 */
function getCategoryDescription(category) {
    const descriptions = {
        'CSS': 'CSS样式与布局相关技术文档',
        'JavaScript': 'JavaScript核心语法与API文档',
        'nuxt': 'Nuxt.js全栈框架开发指南',
        'package': '常用npm包使用说明与配置',
        'TypeScript': 'TypeScript类型系统与高级特性',
        'vitepress': 'VitePress静态站点生成器文档',
        'vue': 'Vue.js框架开发文档与最佳实践',
        '前端工程化': '前端开发工具链与工程化配置',
        '百科': '前端开发相关知识百科'
    };

    return descriptions[category] || `${category}相关技术文档`;
}

/**
 * 获取分类图标
 * @param {string} category - 分类名称
 * @returns {string} 图标emoji
 */
function getCategoryIcon(category) {
    const icons = {
        'CSS': '🎨',
        'JavaScript': '⚡',
        'nuxt': '🚀',
        'package': '📦',
        'TypeScript': '🔷',
        'vitepress': '📚',
        'vue': '💚',
        '前端工程化': '🔧',
        '百科': '📖'
    };

    return icons[category] || '📄';
}

/**
 * 生成首页特性配置
 * @returns {Array} 特性配置数组
 */
function generateHomepageFeatures() {
    const docsPath = path.resolve(process.cwd(), 'docs', 'posts');
    const features = [];

    try {
        const categories = fs.readdirSync(docsPath).filter(item => {
            const fullPath = path.join(docsPath, item);
            return fs.statSync(fullPath).isDirectory();
        });

        for (const category of categories) {
            const categoryPath = path.join(docsPath, category);
            const firstFile = getFirstMarkdownFile(categoryPath);
            const fileCount = countMarkdownFiles(categoryPath);

            if (firstFile) {
                const link = `/${category}/${firstFile.replace('.md', '')}`;
                const icon = getCategoryIcon(category);
                const description = getCategoryDescription(category);

                features.push({
                    icon: icon,
                    title: category,
                    details: `${description} (${fileCount}篇文档)`,
                    link: link
                });
            }
        }

        // 按分类名称排序
        features.sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));

    } catch (error) {
        console.error('Error generating homepage features:', error);
    }

    return features;
}

/**
 * 更新首页配置
 */
function updateHomepage() {
    const indexPath = path.resolve(process.cwd(), 'docs', 'index.md');

    try {
        // 读取当前首页内容
        let content = fs.readFileSync(indexPath, 'utf-8');

        // 生成新的特性配置
        const features = generateHomepageFeatures();

        // 构建新的特性部分
        const featuresYaml = features.map(feature =>
            `  - icon: ${feature.icon}\n    title: ${feature.title}\n    details: ${feature.details}\n    link: ${feature.link}`
        ).join('\n');

        // 替换features部分
        const featuresRegex = /features:\s*\n(?:  - .*\n?)*/;
        const newFeaturesSection = `features:\n${featuresYaml}\n`;

        if (featuresRegex.test(content)) {
            content = content.replace(featuresRegex, newFeaturesSection);
        } else {
            // 如果没有features部分，在文档末尾添加
            content = content.replace(/---\s*$/, `\n${newFeaturesSection}---`);
        }

        // 写回文件
        fs.writeFileSync(indexPath, content, 'utf-8');

        console.log('首页已更新');
        console.log(`生成了 ${features.length} 个分类链接:`);
        features.forEach(feature => {
            console.log(`  ${feature.icon} ${feature.title} -> ${feature.link}`);
        });

    } catch (error) {
        console.error('Error updating homepage:', error);
    }
}

// 执行更新
updateHomepage();
