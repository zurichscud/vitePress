# DOM样式

## style

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

## class

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



## classList

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

