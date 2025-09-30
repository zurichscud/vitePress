# prettier

## JS/TS配置

### key

| 字段（key）    | 推荐值 / 常见值 | 说明与可选值                                                 |
| -------------- | --------------- | ------------------------------------------------------------ |
| semi           | `false`         | 句末是否加分号。`true` 强制加分号，`false` 不加分号。        |
| singleQuote    | `true`          | 字符串是否统一用单引号。`true` 单引号，`false` 双引号。      |
| quoteProps     | `"as-needed"`   | 对象属性何时加引号。`"as-needed"` / `"consistent"` / `"preserve"`。 |
| trailingComma  | `"es5"`         | 多行结构末尾逗号。`"none"` / `"es5"` / `"all"`。             |
| bracketSpacing | `true`          | 对象字面量括号内是否留空格。`{ foo: bar }` vs `{foo: bar}`。 |
| arrowParens    | `"avoid"`       | 箭头函数单个参数是否强制括号。`"avoid"` 省略，`"always"` 强制。 |
| printWidth     | `100`           | 换行阈值，列数。常见 80 / 100 / 120。                        |
| tabWidth       | `2`             | 缩进空格数。常见 2 / 4。                                     |
| useTabs        | `false`         | 是否使用 Tab 缩进。`true` 用 Tab，`false` 用空格。           |
| endOfLine      | `"lf"`          | 换行符。`"lf"` / `"crlf"` / `"auto"`（按文件原样）。         |

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

### 解释

- `trailingComma` 

  直译叫“尾逗号”或“拖尾逗号”，它控制 **在多行数组、对象、函数参数等场景里，最后一个元素后面是否加逗号**。

Prettier 给了 3 个可选值，区别只看一眼代码就明白：

| 取值     | 示例（对象）      | 行为说明                                                     |
| -------- | ----------------- | ------------------------------------------------------------ |
| `"none"` | `{ a: 1, b: 2 }`  | 永远不加尾逗号。                                             |
| `"es5"`  | `{ a: 1, b: 2, }` | 在 **ES5 语法允许** 的地方加尾逗号（对象、数组）。函数参数等 ES2017 才支持的场景不加。 |
| `"all"`  | `{ a: 1, b: 2, }` | 只要换行就加尾逗号，包括函数参数、导入、导出、元组等 **所有合法位置**。 |

```ts
// trailingComma: "none"
const foo = {
  name: 'Alice',
  age: 18
}

// trailingComma: "es5"
const foo = {
  name: 'Alice',
  age: 18,
}

// trailingComma: "all"  （函数参数也加）
function bar(
  name: string,
  age: number,
) {}
```



