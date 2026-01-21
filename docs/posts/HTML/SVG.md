# SVG



SVG（**Scalable Vector Graphics，可缩放矢量图形**）是一种基于 **XML** 的图形格式，主要用于在网页中描述**二维矢量图形**。

## SVG 常见图形元素

SVG是由多个图形绘制而成的，在SVG根目录下可以存在多个子元素

| 元素         | 作用         |
| ------------ | ------------ |
| `<rect>`     | 矩形         |
| `<circle>`   | 圆           |
| `<ellipse>`  | 椭圆         |
| `<line>`     | 线           |
| `<polyline>` | 折线         |
| `<polygon>`  | 多边形       |
| `<path>`     | 任意复杂路径 |

## 引入SVG

### 直接写在 HTML

```html
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

优势：可以直接用 CSS / JS 控制

### 作为图片使用

```html
<img src="icon.svg" />
```

内部元素无法用 CSS / JS 控制。因此SVG的样式无法修改，
