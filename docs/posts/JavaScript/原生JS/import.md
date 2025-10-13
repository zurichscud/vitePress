# import

## import.meta

`import.meta` 是一个内置在 **ES Module（ESM）** 中的特殊元对象（meta object），它提供了关于当前模块的元信息。这个对象只在 **ES 模块** 中可用，在 CommonJS（`require`/`module.exports`）中是没有的。

### url

获取当前模块 URL

- 浏览器环境

在浏览器中，`import.meta` 最常见的用途是获取当前模块的 URL：

```ts
console.log(import.meta.url);//https://example.com/js/app.js
```

- Node环境

从 **Node.js 12+** 开始支持 ES 模块（需配置 `"type": "module"` 或使用 `.mjs` 文件），`import.meta` 也可用：

```ts
// file.mjs
console.log(import.meta.url);//file:///Users/yourname/project/file.mjs
```



### 其他元数据

import.meta中可以存在其他的非标准字段，具体取决于运行的环境，例如在Vite中，存在vite独有的元数据信息：import.meta.env

## import()表达式

虽然 `import` 是关键字，但  `import()` 是一个特殊的表达式，看起来像函数调用，但并不是一个函数。

返回 Promise对象，resolve出来的值是该模块的模块对象，包含模块的所有导出：

```ts
const mod = await import('./utils.js');
const add=mod.default//默认导出
const format=mod.format//具名导出
```

- 可用于**条件加载**、**懒加载**、**CommonJS 中加载 ES 模块**。
- **不是普通函数**，不能 `const fn = import; fn()`，会报错。