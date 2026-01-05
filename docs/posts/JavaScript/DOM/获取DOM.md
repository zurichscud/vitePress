# DOM操作

 **Document Object Model**

DOM相关的操作都在`window.document`上

## DOM树

```html
    <div class="box">
      what is <strong>dom</strong>?
    </div>
```

TextNode文本节点`what is`、`?`

ElementNode元素节点：`<strong>dom</strong>`



## 获取DOM

| 方法                   | 含义               | 返回值         |
| ---------------------- | ------------------ | -------------- |
| getElementById         | 根据id获取DOM      | Element        |
| getElementsByClassName |                    | HTMLCollection |
| getElementsByTagName   | 根据标签名获取DOMs | HTMLCollection |
| querySelector          |                    | Element        |
| querySelectorAll       |                    | NodeList       |





## 从已有元素向下查找

```ts
const container = document.querySelector('.container')
const item = container.querySelector('.item')
```

- **不会从 document 全局查**
- 性能更好
- 作用域更安全

## DOM 关系获取（兄弟 / 父子）



## DOM属性

![image-20251230220610773](./assets/image-20251230220610773.png)

- 属性可以重新赋值
