# ImageViewer

## Props



### images
图片数组
| 类型              | 默认值 | 必传 |
| :---------------- | :----- | :--- |
| `Array<string\|ImageInfo\|File>` | [] | N    |

```ts
interface ImageInfo {
  /** 主图，可以是 URL 字符串，也可以是 File 对象 */
  mainImage: string | File

  /** 缩略图，可选 */
  thumbnail?: string | File

  /** 是否允许下载，可选 */
  download?: boolean

  /** 是否是 SVG，可选 */
  isSvg?: boolean
}
```

```ts
['img_url_1', 'img_url_2']
```

```ts
[{ thumbnail: 'small_image_url', mainImage: 'big_image_url', download: false }]
```



### attach

| 类型              | 默认值   | 必传 |
| :---------------- | :------- | :--- |
| String / Function | `'body'` | N    |

指定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：`AttachNode`。

### **closeBtn**

关闭按钮

| 类型              | 默认值 | 必传 |
| :---------------- | :----- | :--- |
| Boolean /Slot/ Function | true | N    |



### **closeOnEscKeydown**

按下 ESC 时是否触发图片预览器关闭事件

| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| Boolean | true   | N    |

### **closeOnOverlay**

是否在点击遮罩层时，触发预览关闭

| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| Boolean | false   | N    |

### **draggable**

是否允许拖拽调整位置。

| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| Boolean | mode=modal 时，默认不允许拖拽；mode=modeless 时，默认允许拖拽   | N    |


### index
当前预览图片所在的下标。支持语法糖 v-model:index

| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| Number | 0   | N    |

### mode

- modal：非窗口模式预览，适合多个图片预览
- modeless：窗口模式预览，适合单个图片预览

| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| `'modal'\|'modeless'` | `modal`   | N    |

### showOverlay

是否显示遮罩层。

| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| Boolean | mode=modal 时，默认显示；mode=modeless 时，默认不显示   | N    |

### title
预览标题
| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| String / Slot / Function | -   | N    |

### visible

隐藏/显示预览。支持语法糖 v-model 或 v-model:visible

| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| Boolean | false   | N    |

### zindex
层级
| 类型    | 默认值 | 必传 |
| :------ | :----- | :--- |
| Number | 2600   | N    |

## Events

### close

关闭时触发，事件参数包含触发关闭的来源：关闭按钮、遮罩层、ESC 键

```ts
(context: { trigger: 'close-btn' | 'overlay' | 'esc'; e: MouseEvent | KeyboardEvent })
```



### download

自定义预览图片下载操作，url为图片链接

```ts
(url: string | File)
```



### index-change

预览图片切换时触发，`context.prev` 切换到上一张图片，`context.next` 切换到下一张图片

```ts
(index: number, context: { trigger: 'prev' | 'next' | 'current' })
```

