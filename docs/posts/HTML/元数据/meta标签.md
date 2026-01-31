# meta标签



HTML 里的 **`meta` 元数据**，一句话概括就是：**给“浏览器 / 搜索引擎 / 第三方服务”看的页面信息，不直接展示给用户**。

## charset

字符编码

```html
<meta charset="UTF-8" />
```

## http-equiv

目前不知道有啥用

### 自动刷新

```html
<meta http-equiv="refresh" content="3;url=/login" />
```

3s后跳转到指定地址



## name

如果设置了 [`name`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/meta#name) 属性，`<meta>` 元素提供的是文档级别（*document-level*）的元数据，应用于整个页面。

请参考标准元数据名称



## content

此属性包含 [`http-equiv`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/meta#http-equiv) 或 [`name`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/meta#name) 属性的值，具体取决于所使用的值。content存在多个值则使用逗号分隔。

