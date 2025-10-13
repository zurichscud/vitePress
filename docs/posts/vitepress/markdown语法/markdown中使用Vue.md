---
tag: 666
---

# markdown 中使用 Vue

## template

每个 Markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 Vite 流程管道。这意味着可以在文本中使用 Vue 的插值语法.模板语法需要在标签内才能生效

输入

```html
<span>{{1+1}}</span>
```

输出
<span>{{1+1}}</span>

## script&style

Markdown 文件中的根级 `<script>` 和 `<style>` 标签与 Vue SFC 中的一样，包括 `<script setup>`、`<style module>` 等。

::: warning
避免在 Markdown 中使用 `<style scoped>`

在 Markdown 中使用时，`<style scoped>` 需要为当前页面的每个元素添加特殊属性，这将显著增加页面的大小。当我们需要局部范围的样式时 `<style module>` 是首选。
:::

## useData

`useData()` 为我们提供了所有的运行时数据，以便我们根据不同条件渲染不同的布局。

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>
```

<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

### theme

- 输入

```html
<pre>{{ theme }}</pre>
```

- 输出

类型：ThemeConfig

### page

- 输入

```HTML
<pre>{{ page }}</pre>
```

- 输出

```js
{
  "title": "markdown 中使用 Vue",
  "description": "",
  "frontmatter": {},
  "headers": [],
  "relativePath": "vitepress/markdown语法/markdown中使用Vue.md",
  "filePath": "vitepress/markdown语法/markdown中使用Vue.md",
  "lastUpdated": null
}
```

### frontmatter

我们可以访问的另一个数据是当前页面的 frontmatter。通过利用这个数据，可以让用户单独控制每个页面的布局。例如，用户可以指定一个页面是否使用特殊的主页布局

- 输入

```html
<pre>{{ frontmatter }}</pre>
```

- 输出

```JS
{
  "tag": 666
}
```

## 使用组件

可以直接在 Markdown 文件中导入和使用 Vue 组件。

### 在 Markdown 中导入组件

如果一个组件只被几个页面使用，建议在使用它们的地方显式导入它们。这使它们可以正确地进行代码拆分，并且仅在显示相关页面时才加载：

```vue
<script setup>
import CustomComponent from "../../components/CustomComponent.vue";
</script>

# Docs This is a .md using a custom component

<CustomComponent />

## More docs ...
```

### 注册全局组件

如果一个组件要在大多数页面上使用，可以通过自定义 Vue 实例来全局注册它们。

:::warning 重要

确保自定义组件的名称包含连字符或采用 PascalCase。否则，它将被视为内联元素并包裹在 `<p>` 标签内

:::

### 在标题中使用组件 ⚡

可以在标题中使用 Vue 组件，但请注意以下语法之间的区别：

| Markdown                      | 输出的 HTML                           | 被解析的标题    |
| :---------------------------- | :------------------------------------ | :-------------- |
| `# text <Badge/>`             | `<h1>text <Badge/></h1>`              | `text`          |
| `# text`<Badge text="hello"/> | `<h1>text <code><Badge/></code></h1>` | `text <Badge/>` |

被 `<code>` 包裹的 HTML 将按原样显示，只有未包裹的 HTML 才会被 Vue 解析。
