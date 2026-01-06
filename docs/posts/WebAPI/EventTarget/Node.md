# Node

**DOM 树完全由 Node 对象组成**，每一个节点都是 `Node` 的实例或继承自 `Node` 的对象。可以是Document、Element、Text、Comment。



## Class

### Element
元素节点

### Text

文本节点

```ts
EventTarget <- Node <- Text
```

```html
<div>Hello <span>World</span></div>
```

```ts
DIV
 ├── Text("Hello ")
 └── SPAN
      └── Text("World")

```

### Comment

```ts
EventTarget <- Node <- Comment
```

**`Comment`** 接口表示标记中的文本注释；虽然这些注释通常不会在页面上显示出来，但它们可以在源代码视图中被查看和阅读。

```html
<div>
  <!-- 这是一个注释 -->
  <span>文本</span>
</div>

```



## Properties

### textContent

- 类型：string
- 定义：渲染前的原始文本

```ts
box.textContent;  // "\n  Hello\n  World\n"
```





### parentNode

`parentNode`表示一个表示当前节点的父节点的。可能是 `Element`、`Document`、`DocumentFragment`



### parentElement

返回当前节点的父元素节点，如果该元素没有父节点，或者父节点不是一个 DOM [`元素`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)，则返回 `null`。





### childNodes

[`Node`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node) 接口的 **`childNodes`** 只读属性返回一个实时的 [`NodeList`](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList)，其中包含给定元素的所有子[节点](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)，第一个子节点的索引为 `0`。子节点包括元素节点、文本节点和注释节点。



## Methods

### removeChild

```ts
removeChild(child)
```

- child：`Node`，从 DOM 中删除的子节点。

```html
<div id="parent">
  <div id="child"></div>
</div>
```

```ts
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```





### insertBefore

```ts
parent.insertBefore(newNode, referenceNode)
```

- `newNode`：要插入的节点
- `referenceNode`：参考节点（插在它**前面**）
- Return：`newNode`

```ts
const ref = document.querySelector('.item')
parent.insertBefore(newEl, ref)
```



### appendChild

**`appendChild()`** 方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 `appendChild()` 只会将它从原先的位置移动到新的位置

```ts
parent.appendChild(child)
```

作用：

- 把 `child` 放到 `parent` 的 **子节点末尾**
- 返回被追加的那个 `child`

