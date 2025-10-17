# CSS特性



## CSS继承性

某些 CSS 属性会 **自动从父元素继承到子元素**， 即使子元素没有显式设置这些属性。

常见的可继承属性：

| 分类       | 可继承属性                                                   | 说明                 |
| ---------- | ------------------------------------------------------------ | -------------------- |
| **文本类** | `color`、`font-family`、`font-size`、`font-style`、`font-weight`、`letter-spacing`、`word-spacing`、`line-height`、`text-align`、`text-indent`、`text-transform`、`visibility` | 常见的文字样式会继承 |
| **列表类** | `list-style`、`list-style-type`、`list-style-position`、`list-style-image` | 列表样式会继承       |
| **表格类** | `caption-side`、`border-collapse`                            | 表格标题与边框样式   |
| **光标类** | `cursor`                                                     | 鼠标样式可继承       |



合理利用继承性：

如果需要调整某些子元素中的文字效果，我们可以直接在父元素中设置，而不必使用关系选择器(>)精确定位设置文本样式