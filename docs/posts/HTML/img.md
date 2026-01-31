# img

img是行内块元素

## src

图片路径

```html
<img src="/images/avatar.png" alt="用户头像">
```

## alt

图片描述

功能：

- SEO优化：利于搜索引擎爬虫获取图片的信息

- 图片加载失败时，显示的图片信息

## width&height

```html
<img src="a.jpg" width="200" height="100">
```

- 如果没有指定图片的宽高。图片默认宽高是原始图片的宽高。

- 如果只设置图片的宽或高，图片的宽高比将保持不变，因此通常不会同时设置图片的宽和高，造成比例的失调

- 通常会使用CSS控制图片的宽高

```css
img {
  width: 200px;
  height: auto; /* 保持比例 */
}
```



## 调试

如果图片是以img标签展示，那么右键时会出现保存图片的选项

如果图片是以background-img展示，那么右键无法出现保存图片的选项
