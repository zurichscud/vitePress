# DOM操作

DOM相关的操作都在`window.document`上



## 获取DOM

| 方法                   | 含义               | 返回值         |
| ---------------------- | ------------------ | -------------- |
| getElementById         | 根据id获取DOM      | Element        |
| getElementsByClassName |                    | HTMLCollection |
| getElementsByTagName   | 根据标签名获取DOMs | HTMLCollection |
| querySelector          |                    | Element        |
| querySelectorAll       |                    | NodeList       |

## documentElement

获取文档的根元素

```ts
console.log(document.documentElement) // <html>...</html>
```



## querySelector()

```ts
const el = document.querySelector('.box')
```

- 支持 **任意 CSS 选择器**
- 返回 **第一个匹配元素或 `null`**
- 实际项目最常用



## querySeletctorAll()

```ts
const els = document.querySelectorAll('.item')
```

- 支持 **任意 CSS 选择器**
- 返回 **NodeList（静态）**,表示所有满足的元素

- 可直接使用 `forEach`



## 从已有元素向下查找

```ts
const container = document.querySelector('.container')
const item = container.querySelector('.item')
```

- **不会从 document 全局查**
- 性能更好
- 作用域更安全

## DOM 关系获取（兄弟 / 父子）

- 父节点

```ts
el.parentNode
el.parentElement
```

- 子节点

```ts
el.children        // 元素节点（推荐）
el.childNodes     // 所有节点（包含文本）
```

- 兄弟节点

```ts
el.previousElementSibling
el.nextElementSibling
```

