# CSS变量

CSS 变量一般指 **CSS 自定义属性（Custom Properties）**，用 `--` 开头，配合 `var()` 使用。

## 定义

声明一个自定义属性，属性名需要以两个减号（`--`）开始，属性值则可以是任何有效的 CSS 值。和其他属性一样，自定义属性也是写在规则集之内的，如下：

```css
:root {
  --main-color: #409eff;
  --gap: 12px;
  --font-size: 14px;
}

```

## 使用变量

使用一个局部变量时用 [`var()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/var) 函数包裹以表示一个合法的属性值：

```css
.button {
  color: var(--main-color);
  margin: var(--gap);
  font-size: var(--font-size);
}

```

支持兜底值：

```css
color: var(--text-color, #333);
```



## 作用域

### 继承

自定义属性会继承。这意味着如果在一个给定的元素上，没有为这个自定义属性设置值，在其父元素上的值会被使用。

通常的最佳实践是定义在根伪类 [`:root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Selectors/:root) 下，这样就可以在 HTML 文档的任何地方访问到它了

### 就近原则

子元素优先使用最近定义的变量。

```css
:root {
  --color: red;
}

.box {
  --color: blue;
}

.box .item {
  color: var(--color); /* blue */
}

```

