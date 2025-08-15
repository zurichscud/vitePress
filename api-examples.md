---
outline: deep
---

# 在 Markdown 使用 Vue

在 VitePress 中，每个 Markdown 文件都被编译成 HTML，而且将其作为 Vue 单文件组件处理。这意味着可以在 Markdown 中使用任何 Vue 功能，包括动态模板、使用 Vue 组件或通过添加 `<script>` 标签为页面的 Vue 组件添加逻辑。

## template

每个 Markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 Vite 流程管道。这意味着可以在文本中使用 Vue 的插值语法.模板语法需要在标签内才能生效

```html
<span>{{1+1}}</span>
```

<span>{{1+1}}</span>

## script&style

Markdown 文件中的根级 `<script>` 和 `<style>` 标签与 Vue SFC 中的一样，包括 `<script setup>`、`<style module>` 等。这里的主要区别是没有 `<template>` 标签：所有其他根级内容都是 Markdown。另请注意，所有标签都应放在 frontmatter **之后**

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:


`useData()` 为我们提供了所有的运行时数据，以便我们根据不同条件渲染不同的布局。我们可以访问的另一个数据是当前页面的 frontmatter。通过利用这个数据，可以让用户单独控制每个页面的布局。例如，用户可以指定一个页面是否使用特殊的主页布局

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## useData

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## useData

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter（前言）

<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).


## 转义

<span v-pre>{{1+1}}</span>

### 代码块不转义

默认情况下，代码块是受到保护的，都会自动使用 v-pre 包装，因此内部不会处理任何 Vue 语法。要在代码块内启用 Vue 插值语法，可以在代码语言后附加 -vue 后缀，例如 js-vue：

```js-vue
Hello {{ 1 + 1 }}
```