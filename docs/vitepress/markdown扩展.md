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

Markdown 文件中的根级 `<script>` 和 `<style>` 标签与 Vue SFC 中的一样，包括 `<script setup>`、`<style module>` 等。

这里的主要区别是没有 `<template>` 标签：所有其他根级内容都是 Markdown。另请注意，所有标签都应放在 frontmatter **之后**


`useData()` 为我们提供了所有的运行时数据，以便我们根据不同条件渲染不同的布局。

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

我们可以访问的另一个数据是当前页面的 frontmatter。通过利用这个数据，可以让用户单独控制每个页面的布局。例如，用户可以指定一个页面是否使用特殊的主页布局

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'
const { site, theme, page, frontmatter } = useData()
</script>



:::danger 警告

避免在 Markdown 中使用 `<style scoped>`

在 Markdown 中使用时，`<style scoped>` 需要为当前页面的每个元素添加特殊属性，这将显著增加页面的大小。当我们需要局部范围的样式时 `<style module>` 是首选。

:::

## useData

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter（前言）

<pre>{{ frontmatter }}</pre>

## 转义

## v-pre

使用v-pre可以对模板语法进行转义

<span v-pre>{{1+1}}</span>

### 代码块不转义

默认情况下，代码块是受到保护的，都会自动使用 v-pre 包装，因此内部不会处理任何 Vue 语法。要在代码块内启用 Vue 插值语法，可以在代码语言后附加 -vue 后缀，例如 js-vue：

```js-vue
Hello {{ 1 + 1 }}
```

## 使用组件

可以直接在 Markdown 文件中导入和使用 Vue 组件。

### 在 Markdown 中导入组件

如果一个组件只被几个页面使用，建议在使用它们的地方显式导入它们。这使它们可以正确地进行代码拆分，并且仅在显示相关页面时才加载：

```vue
<script setup>
import CustomComponent from '../../components/CustomComponent.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />

## More docs

...
```

### 注册全局组件

如果一个组件要在大多数页面上使用，可以通过自定义 Vue 实例来全局注册它们。

:::warning 重要

确保自定义组件的名称包含连字符或采用 PascalCase。否则，它将被视为内联元素并包裹在 `<p>` 标签内

:::



### 在标题中使用组件 ⚡

可以在标题中使用 Vue 组件，但请注意以下语法之间的区别：

| Markdown            | 输出的 HTML                         | 被解析的标题  |
| :------------------ | :---------------------------------- | :------------ |
| ` # text <Tag/> `   | `<h1>text <Tag/></h1>`              | `text`        |
| ` # text `<Tag/>` ` | `<h1>text <code><Tag/></code></h1>` | `text <Tag/>` |

被 `<code>` 包裹的 HTML 将按原样显示，只有未包裹的 HTML 才会被 Vue 解析。

