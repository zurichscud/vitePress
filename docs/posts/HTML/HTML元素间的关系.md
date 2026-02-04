# HTML元素间的关系

## 父子关系（Parent / Child）

**直接嵌套**形成的关系。

```html
<ul>
  <li>苹果</li>
  <li>香蕉</li>
</ul>

```

只能隔一层才算父子：

- `<ul>` 是父元素

- `<li>` 是子元素

## 祖先 / 后代关系（Ancestor / Descendant）

```html
<div class="box">
  <ul>
    <li>内容</li>
  </ul>
</div>

```

- `<div>` 是 `<li>` 的祖先

- `<li>` 是 `<div>` 的后代

## 兄弟关系（Sibling）

```html
<h1>标题</h1>
<p>第一段</p>
<p>第二段</p>
```

