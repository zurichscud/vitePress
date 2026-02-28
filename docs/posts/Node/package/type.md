# type

## commonjs

node.js的默认模块解析方式，使用 `require/module.exports`。

## module

模块解析方式使用ESM方式

```json
{
  "type": "module"
}
```

将有如下的变化

### 支持 `import` 和 `export`

在JS文件中你可以使用 ES Module 的导入导出方式，而不再需要 `require()` 和 `module.exports`。

```
// 使用 import/export
import { something } from './module.js';
export default myFunction;
```

### 文件扩展名

由于 ESM 不像 CommonJS 那样自动推断文件扩展名，ESM 需要明确指定文件的扩展名。例如，导入模块时必须写上 `.js`（或者其他支持的扩展名）。

```js
// 错误：
import { something } from './module'; // 会报错，缺少扩展名

// 正确：
import { something } from './module.js';
```

### 全局变量

在 ESM 中，`__dirname` 和 `__filename` 等 Node.js 内置变量无法直接使用。如果需要类似的功能，可以使用 `import.meta.url`。



### 顶级await

在 ESM 中，`await` 可以在顶层直接使用，无需放在 `async` 函数中。

```
// 顶级 await
const data = await fetchData();
```

## TS相关说明

如果 Node.js 需要使用 TypeScript，建议不要在 `package.json` 中设置 `"type": "module"`。

因为 TypeScript 文件会被编译成 JavaScript 并在运行时执行，而运行时的模块解析方式会根据 `package.json` 中的配置来决定。如果使用 ESM 模块，路径需要明确写出 `.js` 后缀，例如 `./car.js`，否则无法正确解析。然而，在 TypeScript 项目中，这种做法可能会引起混淆。通常，我们更倾向于使用 CommonJS 来进行模块解析，这样可以避免在代码中显式地写出 `.js` 后缀。
