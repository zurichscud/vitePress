# pnpm

## .npmrc

pnpm 的专属配置就是 **`.npmrc` 的“超集”** ——文件名叫 **`.npmrc`**，但**只有 pnpm 认识**的字段，npm/yarn 会直接忽略。

```ini
# 传统 npm 配置
registry=https://registry.npmmirror.com
//registry.npmmirror.com/:_authToken=${NPM_TOKEN}

# 只有 pnpm 认识的“专属”配置
shamefully-hoist=true
auto-install-peers=true
node-linker=hoisted
```

## 命令

pnpm与npm命令不完全相同
