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
                // 确保链接使用正斜杠（在 Windows 上 path.join 会返回反斜杠）
                const link = `/${category}/${firstFile.replace('.md', '')}`.replace(/\\/g, '/');

                features.push({
                    title: category,
                    details: `${fileCount}篇文档`,
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
            `  - title: ${feature.title}\n    details: ${feature.details}\n    link: ${feature.link}`
        ).join('\n');

        // 替换features部分 - 使用更精确的正则表达式
        // 匹配从 features: 开始到文档结束的 --- 之前的所有内容
        const featuresRegex = /features:[\s\S]*?(?=\n---)/;
        const newFeaturesSection = `features:\n${featuresYaml}\n`;

        if (featuresRegex.test(content)) {
            content = content.replace(featuresRegex, newFeaturesSection);
        } else {
            // 如果没有features部分，在文档末尾添加
            const closingRegex = /\n---\s*$/;
            if (closingRegex.test(content)) {
                content = content.replace(closingRegex, `\n${newFeaturesSection}\n---`);
            } else {
                content += `\n${newFeaturesSection}\n---`;
            }
        }

        // 写回文件
        fs.writeFileSync(indexPath, content, 'utf-8');

        console.log('首页已更新');
        console.log(`生成了 ${features.length} 个分类链接:`);
        features.forEach(feature => {
            console.log(`  📄 ${feature.title} -> ${feature.link}`);
        });

    } catch (error) {
        console.error('Error updating homepage:', error);
    }
}

// 执行更新
updateHomepage();
