# Content

`<Content />` 组件显示渲染的 markdown 内容。在[创建自己的主题时](../guide/custom-theme)很有用。

```vue
<template>
  <h1>Custom Layout!</h1>
  <Content />
</template>
```

我们往往通过覆盖Content中的样式，实现自定义markdown渲染

```html
<Content id="page-content" :class="['markdown-main-style', { 's-card': frontmatter.card }]" />
```



```scss
:deep(.markdown-main-style) {
  // 标题
  div > {
    h1 {
      font-size: 2rem;
      text-align: center;
      border-bottom: 1px dashed var(--main-color-bg);
      padding-bottom: 1rem;
      .header-anchor {
        &::before {
          display: none;
        }
      }
    }
    //...
  }
```

