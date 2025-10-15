# CSS

## 行内样式表

也称内联样式表，直接在 HTML 标签内部 使用 style 属性定义样式。

```html
<p style="color: red; font-size: 18px;">这是一段文字</p>
```






## 内部样式表

在 **HTML 文件的 `<head>` 标签中** 使用 `<style>` 标签编写样式。

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>

```





## 外部样式表

将样式写在 **独立的 `.css` 文件** 中，然后通过 `<link>` 引入。

```html
<link rel="stylesheet" href="style.css">
```

```css [style.css]
p {
  color: green;
  font-size: 18px;
}

```

