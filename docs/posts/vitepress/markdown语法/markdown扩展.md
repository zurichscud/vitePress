---
outline: deep
---

# markdown 扩展

在 VitePress 中，每个 Markdown 文件都被编译成一个 Vue 组件。这意味着可以在 Markdown 中使用任何 Vue 功能，包括动态模板、使用 Vue 组件或通过添加 `<script>` 标签为页面的 Vue 组件添加逻辑。

## 标题锚点

标题会自动应用锚点。可以使用 `markdown.anchor` 选项配置锚点的渲染。

要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：

```md
# 使用自定义锚点 {#my-anchor}
```

这允许将标题链接为 `#my-anchor`，而不是默认的 `#标题名称`。

## frontmatter

前言，markdown 文件开头都可以编写 yaml 格式的[frontmatter](./frontmatter.md)

```md
---
title: Blogging Like a Hacker
lang: en-US
---
```

## 转义

使用 v-pre 可以对模板语法进行转义

<span v-pre>{{1+1}}</span>

默认情况下，代码块是受到保护的，都会自动使用 v-pre 包装，因此内部不会处理任何 Vue 语法。要在代码块内启用 Vue 插值语法，可以在代码语言后附加 -vue 后缀，例如 js-vue：

````md
实际渲染的结果为 Hello 2

```js-vue
Hello {{ 1 + 1 }}

```
````

## 自定义容器 {#custom-containers}

### 默认标题 {#default-title}

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### 自定义默认标题

可以自定义默认标题的显示文字

```ts
// config.ts
export default defineConfig({
  // ...
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  // ...
});
```

### 自定义标题 {#custom-title}

可以通过在容器的 "type" 之后附加文本来设置自定义标题。设置了自定义标题将不再显示默认标题

**输入**

````md
::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码

```js
console.log("Hello, VitePress!");
```

:::
````

**输出**

::: danger STOP
危险区域，请勿继续
:::

::: details 点我查看代码

```js
console.log("Hello, VitePress!");
```

:::

## 代码块

### 代码组

输入

````md
::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

```sh [yarn (pnp)]
$ yarn add -D vitepress vue
```

```sh [bun]
$ bun add -D vitepress
```

:::
````

输出

::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

```sh [yarn (pnp)]
$ yarn add -D vitepress vue
```

```sh [bun]
$ bun add -D vitepress
```

:::

### 行高亮

输入

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

输出

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行之外，还可以指定多个单行、多行，或两者均指定：

- 多行：例如 `{5-8}`、`{3-10}`、`{10-17}`
- 多个单行：例如 `{4,7,9}`
- 多行与单行：例如 `{4,7-13,16,23-27,40}`

### “增减”样式 {#colored-diffs-in-code-blocks}

在某一行添加 `// [!code --]` 或 `// [!code ++]` 注释将会为该行创建 diff，同时保留代码块的颜色。

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!!code --]
      msg: 'Added' // [!!code ++]
    }
  }
}
```
````

**输出**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### “错误”和“警告” {#errors-and-warnings-in-code-blocks}

在某一行添加 `// [!code warning]` 或 `// [!code error]` 注释将会为该行相应的着色。

**输入**

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!!code error]
      msg: 'Warning' // [!!code warning]
    }
  }
}
```
````

**输出**

```js
export default {
  data() {
    return {
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

### 导入代码文件

可以通过下面的语法来从现有文件中导入代码片段：

```md
<<< @/filepath
```

此语法同时支持[行高亮](https://vitepress.dev/zh/guide/markdown#line-highlighting-in-code-blocks)：

```md
<<< @/filepath{highlightLines}
```

也可以像这样在大括号内(`{}`)指定语言：

```md
<<< @/snippets/snippet.cs{c#}

<!-- 带行高亮: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#}
```

输入

```md
<<< @/snippets/demo.ts {7}
```

输出

<<< @/snippets/demo.ts {7}
