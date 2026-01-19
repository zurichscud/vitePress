# cursor

在鼠标指针悬停在元素上时显示相应样式。

```css
cursor: auto;
```



## enum

| 值        | 说明           | 示例                                        |
| --------- | -------------- | ------------------------------------------- |
| `default` | 默认箭头       | <span style="cursor:default">default</span> |
| `auto`    | 浏览器自动判断 | <span style="cursor:auto">auto</span>       |
| `none`    | 隐藏鼠标指针   | <span style="cursor:none">none</span>       |



| 值              | 说明                            | 示例                                                |
| --------------- | ------------------------------- | --------------------------------------------------- |
| `pointer`       | 小手，表示可点击（按钮 / 链接） | <span style="cursor:pointer">pointer</span>         |
| `text`          | 文本选择光标                    | <span style="cursor:text">text</span>               |
| `move`          | 可移动                          | <span style="cursor:move">move</span>               |
| `help`          | 帮助                            | <span style="cursor:help">help</span>               |
| `progress`      | 进度                            | <span style="cursor:progress">progress</span>       |
| `cell`          | 指示单元格可被选中              | <span style="cursor:cell">cell</span>               |
| `crosshair`     | 交叉指针，通常指示位图中的框选  | <span style="cursor:crosshair">crosshair</span>     |
| ``not-allowed`` | 不能执行                        | <span style="cursor:not-allowed">not-allowed</span> |
| `grab`          | 可抓取                          | <span style="cursor:grab">grab</span>               |
| `zoom-in`       | 放大                            | <span style="cursor:zoom-in">zoom-in</span>         |
| `zoom-out`      | 缩小                            | <span style="cursor:zoom-out">zoom-out</span>       |

## 自定义光标

使用 URL，并提供一个关键字值作为备用

```ts
cursor: url(hand.cur), pointer;
```

- **必须有兜底值**

- 建议尺寸 ≤ `32x32`

- 支持 `.cur`、`.png`

