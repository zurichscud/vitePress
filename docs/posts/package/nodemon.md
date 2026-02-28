# nodemon

**nodemon** 是一个用于 Node.js 开发阶段的工具，它可以在检测到文件变化时，**自动重启 Node 服务**。

## 安装



```js
npm install -g nodemon
```

## 使用

```js
nodemon index.js
```

它等价于，文件一旦自动重新执行：

```js
node index.js
```

nodemon支持运行TS文件而不需要编译成JS，但是他是依赖于`ts-node`，因此你需要先安装`ts-node`

```sh
nodemon index.ts
```

建议使用tsx运行ts，而不是nodemon
