# npm

## .npmrc

npm的配置文件

value如果是字符串是不需要使用双引号包裹的

```ini
registry=https://registry.npmmirror.com/
strict-ssl=false
save-exact=true
cache=/path/to/npm-cache

```

- **优先级**：项目目录 `.npmrc` > 用户目录 `~/.npmrc` > 全局配置 `/etc/npmrc`。

:::警告

`.npmrc` **不是 npm 私有**的，它的**网络、证书、认证**配置可能**间接污染 Yarn / pnpm**，在多管理器仓库里，**务必给每个工具显式提供自己的配置文件**，避免“幽灵配置”。

:::

