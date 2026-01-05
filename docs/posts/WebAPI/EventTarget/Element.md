# Element



## Class

```ts
EventTarget
    └── Node
        └── Element
```



## Properties

###  innerHTML

- 类型：string
- 定义：渲染前的HTML 内容

```html
    <div id="box">
      Hello
      <span style="color: red">World</span>
    </div>
```

```ts
box.innerHTML

/*
      Hello
      <span style="color: red">World</span>
*/
```



### outerHTML

- 定义：渲染前，包含自身的 HTML

```ts
box.outerHTML
/*
<div id="box">
      Hello
      <span style="color: red">World</span>
    </div>
    */
```

### children

- 类型：HTMLCollection

该元素的所有“元素子节点”。**只包含元素节点（Element）**，不包含：**文本节点**、**注释节点**。

:::code-group

```html
<div id="box">
  文本
  <span></span>
  <!-- 注释 -->
  <p></p>
</div>

```

```ts
const box = document.getElementById('box')!
box.children.length // 2
box.children[0].tagName // 'SPAN'
box.children[1].tagName // 'P'
```



:::

### previousElementSibling

- 类型：Element

**`previousElementSibling`** 返回当前元素在其父元素的子元素节点中的前一个Element【同级前】，如果该元素已经是第一个元素节点，则返回 `null`, 该属性是只读的。

```html
<ul>
  <li>苹果</li>
  <li id="target">香蕉</li>
  <li>橘子</li>
</ul>

```

```ts
const target = document.getElementById('target')!
const prev = target.previousElementSibling

console.log(prev?.textContent) // 苹果
```



### nextElementSibling

- 类型：Element

**`nextElementSibling`** 返回当前元素在其父元素的子元素节点中的后一个Element【同级后】，如果该元素已经是最后一个元素节点，则返回 `null`, 该属性是只读的。

```ts
const target = document.getElementById('target')!
const next = target.nextElementSibling

console.log(next?.textContent) // 橘子
console.log(target.previousElementSibling.innerText);//橘子，本质上还是HTMLElement，可以使用innerText。

```



## Methods

### remove

`remove` 指的是将自己(当前节点) **从文档树中移除**。

```ts
const el = document.querySelector('.box')
el.remove()
```

