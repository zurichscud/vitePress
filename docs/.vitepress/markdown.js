import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default {
    container: {
        tipLabel: "提示",
        warningLabel: "警告",
        dangerLabel: "危险",
        infoLabel: "信息",
        detailsLabel: "详细信息",
    },
    config(md) {
        md.use(groupIconMdPlugin)   // 解析 ```ts [foo.ts]
    }
};