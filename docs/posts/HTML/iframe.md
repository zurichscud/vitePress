# iframe

`<iframe>` 是 在当前页面中嵌入另一个页面 的标签，本质就是“页面里的页面”。

## src

```html
<iframe src="https://example.com"></iframe>
```

## name

使用name为iframe命名，我们可以动态控制iframe中显示的src

```html
<div style="display:flex; gap:16px;">
  <!-- 左侧菜单 -->
  <div>
    <a href="page1.html" target="contentFrame">页面一</a><br />
    <a href="page2.html" target="contentFrame">页面二</a><br />
    <a href="page3.html" target="contentFrame">页面三</a>
  </div>

  <!-- 右侧内容区 -->
  <iframe
    name="contentFrame"
    style="width:600px; height:400px; border:1px solid #ccc;"
  ></iframe>
</div>

```

我们也可以默认加载一个页面：

```html
<iframe name="contentFrame" src="page1.html"></iframe>
```





## width/height

```html
<iframe src="..." width="800" height="600"></iframe>
```

推荐使用CSS控制：

```html
<iframe src="..." style="width:100%; height:100vh"></iframe>
```



## frameborder

iframe默认自带边框

```html
<iframe frameborder="0"></iframe>
```

::: danger

已废弃，不推荐

:::

使用CSS可以去除边框

```css
iframe {
  border: none;
}
```



## 应用



### 网页嵌入广告

广告商通过链接的形式告知开发者，开发者可以在自己的网页中内嵌iframe的形式获得收入



