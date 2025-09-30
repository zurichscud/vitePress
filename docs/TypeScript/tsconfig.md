# tsconfig

`tsconfig.json` 是 **TypeScript 配置文件**，用来告诉编译器（`tsc`）如何编译项目。通常放在项目根目录。

当你运行 `tsc file.ts`，如果项目里没有 `tsconfig.json`，会使用默认配置

## include

指定 **需要编译的文件或目录**，即：将TS语法编译成JS的文件和目录。

默认值：`["**/*"]`（除了 `exclude` 指定的）。

```json
{
  "include": [
    "**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
  ]
}

```





## exclude

指定 **不需要编译的文件或目录**。

默认值：

```json
["node_modules", "bower_components", "jspm_packages"]
```

示例：

```json
{
  "exclude": [
    "dist",            // 编译结果目录
    "node_modules",    // 依赖
    "**/*.spec.ts"     // 所有测试文件
  ]
}
```





## compilerOptions



| 选项                | 默认值                                                       | 说明                                                         |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `target`            | `ES3`                                                        | 生成 JS 的语法版本                                           |
| `module`            | `CommonJS`                                                   | 生成的模块格式                                               |
| `moduleResolution`  | `classic`（当 module=AMD/UMD/System/ES6 时）  `node`（当 module=CommonJS 时） | 模块解析策略                                                 |
| `lib`               | 根据 `target` 推断： - `ES3` → `["lib.d.ts", "dom.d.ts"]`  - `ES5` → `["es5", "dom", "scripthost"]`  - `ES2015+` → 对应版本的标准库 + DOM | 加载的内置声明库，提供类型检查能力                           |
| `jsx`               | `preserve`                                                   | 不会自动转 JSX，交给后处理工具（如 Babel、Vite）             |
| `declaration`       | `false`                                                      | 生成 `.d.ts`，通常用于TS库开发者                             |
| `sourceMap`         | `false`                                                      | 生成 `.map`                                                  |
| `esModuleInterop`   | `false`                                                      | 不自动兼容 CommonJS 导入                                     |
| `skipLibCheck`      | `false`                                                      | 默认检查所有 `node_modules` 的声明文件，项目大会很慢，所以常手动设 `true` |
| `allowJs`           | `false`                                                      | 允许编译 `.js` 文件                                          |
| `checkJs`           | `false`                                                      | 允许检查 `.js` 文件，配合 JSDoc 使用时可开                   |
| `resolveJsonModule` | `false`                                                      | 默认不允许 `import xxx from './file.json'`                   |





| 选项        | 作用                 | 示例                                   |
| ----------- | -------------------- | -------------------------------------- |
| `baseUrl`   | 相对路径解析基准     | `"./"`                                 |
| `paths`     | 别名映射             | `"paths": { "@/*": ["src/*"] }`        |
| `typeRoots` | 声明包查找目录       | 默认 `node_modules/@types`，可自定义   |
| `types`     | 加载哪些类型声明文件 | `["node", "jest"]`（减少全局类型污染） |



- 严格类型选项

| 选项                  | 默认值  | 作用                                              |
| --------------------- | ------- | ------------------------------------------------- |
| `strict`              | `false` | 打开全部严格检查（等价打开多项）                  |
| `noImplicitAny`       | `false` | 禁用隐式 any                                      |
| `strictFunctionTypes` | `false` | 函数参数类型必须严格匹配                          |
| `strictBindCallApply` | `false` | 检查 `bind`、`call`、`apply` 的参数是否正确。     |
| `noImplicitThis`      | `false` | 禁用 `this` 推断为 `any`                          |
| `strictNullChecks`    | `false` | 是否允许`null` / `undefined` 赋值给其他类型的变量 |
| `alwaysStrict`        | `false` | 生成的 JS 文件自动加 `use strict`                 |

:::tip

如果直接设置strict=true则，严格类型选项都将设置为true

:::

- 输出

| 选项                                | 作用                         | 备注                |
| ----------------------------------- | ---------------------------- | ------------------- |
| `outDir`                            | 输出目录                     | 如 `"dist"`         |
| `rootDir`                           | 源码根目录                   | 影响目录结构保持    |
| `declaration`                       | 生成 `.d.ts`                 | 做库必开            |
| `emitDeclarationOnly`               | 只生成声明不生成 JS          | 可与打包器配合      |
| `sourceMap`                         | 生成 `.map`                  | 调试用              |
| `inlineSources` / `inlineSourceMap` | 内联源码/映射                | 产物自包含，体积↑   |
| `removeComments`                    | 移除注释                     | 看需求              |
| `importsNotUsedAsValues`            | 未作为值使用的 import 的处理 | `remove`/`preserve` |
| `noEmit`                            | 只做类型检查不产出文件       |                     |
| `noEmitOnError`                     | 有错就不产出                 |                     |



## 示例

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "jsxImportSource": "vue",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "lib": ["esnext", "dom"],
    "types": ["vite/client"],
    "noEmit": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "noImplicitAny": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  },
  "include": [
    "**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "node_modules/tdesign-vue-next/global.d.ts"
  ],
  "compileOnSave": false
}
```

