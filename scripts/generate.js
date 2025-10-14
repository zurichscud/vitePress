import { globby } from "globby"
import fs from 'fs';
import path from 'path';

async function getAllPagesPaths() {
    const paths = await globby(["**.md"], { ignore: ["**/node_modules/**", "**/dist/**", "README.md"] })
    return paths.filter(item => item.includes("/posts"))
}


getAllPagesPaths().then(res => {
    const oldPrefix = 'docs/'
    const prefix = 'docs/posts/'
    const links = {}
    res.forEach(item => {
        links[item.slice(oldPrefix.length)] = item.startsWith(prefix) ? item.slice(prefix.length) : item
    })
    // console.log(links)
    // 要写入的内容，添加注释
    const fileContent = `// 自动生成，请勿修改
export default ${JSON.stringify(links, null, 2)};
`;

    // 写入根目录文件
    const dirPath = path.resolve(process.cwd(), 'docs', '.vitepress');
    const filePath = path.resolve(dirPath, 'links.js');
    fs.writeFileSync(filePath, fileContent, 'utf-8');

    console.log('links.js 已生成于根目录');
})