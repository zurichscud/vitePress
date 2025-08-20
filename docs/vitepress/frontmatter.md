---
deepline: deep

---

# frontmatter



## 定义frontmatter数据

VitePress 支持在所有 Markdown 文件中使用 YAML frontmatter，并使用 [gray-matter](https://github.com/jonschlinkert/gray-matter) 解析。frontmatter 必须位于 Markdown 文件的顶部 (在任何元素之前，包括 `<script>` 标签)，并且需要在三条虚线之间采用有效的 YAML 格式。例如：



```
---
title: Docs with VitePress
editLink: true
---
```



还可以定义自己的 frontmatter 数据，以在页面上的动态 Vue 表达式中使用。

## 访问 frontmatter 数据

frontmatter 数据可以通过特殊的 `$frontmatter` 全局变量来访问：

下面的例子展示了应该如何在 Markdown 文件中使用它：



```
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content
```

还可以使用 [`useData()`](https://vitepress.dev/zh/reference/runtime-api#usedata) 辅助函数在 `<script setup>` 中访问当前页面的 frontmatter。
