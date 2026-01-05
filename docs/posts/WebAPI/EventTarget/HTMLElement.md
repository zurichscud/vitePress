# HTMLElement

`HTMLElement` 是所有 HTML 元素对应 JS 对象的基类接口

## Properties

| 属性 / 方法                  | 说明           |
| ---------------------------- | -------------- |
| `style`                      | 行内样式对象   |
| `className`                  | class 字符串   |
| `classList`                  | class 操作集合 |
| `hidden`                     | 是否隐藏       |
| `offsetWidth / offsetHeight` | 布局尺寸       |
| `offsetTop / offsetLeft`     | 相对定位       |
| `getBoundingClientRect()`    | 位置信息       |


### innerText

- 类型：string
- 定义：渲染后的不含标签的纯文本（会受CSS样式影响，因为已经渲染）

```ts
box.innerText;    // "Hello World"
```




### style

我们可以通过dom.style获取元素的内联样式得到样式对象。对象中的所有样式属性均可以被修改。

```ts
const el = document.getElementById('box')

// 单个属性
el.style.color = 'red'
el.style.fontSize = '16px'

// 注意 JS 属性名和 CSS 属性名不同
el.style.backgroundColor = 'blue' // background-color → backgroundColor
```

- 当给样式赋值为空字符串时，相当于删除内联样式
- 当给样式的赋值不合法时，赋值语句无效，不会报错
- CSS的短横线命名需要使用驼峰代替

我们也可以使用`getComputedStyle(dom)`获取元素的计算属性，但是这是只读的，无法被修改。

### className

class由于和JS中的class关键字重名，因此修改DOM的class属性时需要使用`className`

```html
<div id="box" class="container active"></div>
```

```ts
const el = document.getElementById('box')
console.log(el.className) // "container active"
```

 设置 class：

```ts
el.className = 'new-class another-class'
```



### classList

`el.classList` 是 **操作元素 class 的现代 API**，比 `className` 更灵活、语义清晰，也更安全。它提供了一系列方法来增删切换 class，不需要手动拼接字符串。

| 方法                          | 说明                 | 示例                                           |
| ----------------------------- | -------------------- | ---------------------------------------------- |
| `add(class1, class2…)`        | 添加一个或多个 class | `el.classList.add('new', 'big')`               |
| `remove(class1, class2…)`     | 删除一个或多个 class | `el.classList.remove('active')`                |
| `toggle(class[, force])`      | 有就删，没有就加     | `el.classList.toggle('hidden')`                |
| `contains(class)`             | 检查 class 是否存在  | `el.classList.contains('active') // true`      |
| `replace(oldClass, newClass)` | 替换 class           | `el.classList.replace('container', 'wrapper')` |

```ts
const el = document.getElementById('box')

// 添加
el.classList.add('active')

// 删除
el.classList.remove('container')

// 切换
el.classList.toggle('hidden')       // 有就删，没有就加
el.classList.toggle('hidden', true) // 强制添加
el.classList.toggle('hidden', false)// 强制删除

// 判断
if (el.classList.contains('active')) {
  console.log('active 存在')
}

// 替换
el.classList.replace('active', 'inactive')

```



## Methods

### getAttribute

**`getAttribute()`** 返回元素上一个指定的属性值。如果指定的属性不存在，则返回 `null` 或 `""` （空字符串）

```ts
let attribute = element.getAttribute(attributeName);
```

- `attribute` 是一个包含 `attributeName` 属性值的字符串。
- `attributeName` 是你想要获取的属性值的属性名称。

### setArrtibute

**`setAttribute()`** 方法用于设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。

```ts
setAttribute(name, value)
```

- [`name`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute#name)

  一个用于指定要设置的属性的名称的字符串。当在 HTML 文档中的 HTML 元素上调用 `setAttribute()` 方法时，该方法会将其属性名称自动转换为全小写形式。

- [`value`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute#value)

  一个包含要赋给属性的值的字符串。任何指定的非字符串值都会自动转换为字符串。

  对于布尔属性，只要它们出现在元素中，就会被视为是 `true`。你应该将 `value` 设置为空字符串（`""`）或属性的名称（不带前导或尾随空格）。

```ts
//<button>你好，世界</button>
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");//按钮处于禁用状态
```



### removeAttribute



### hasAttribute

