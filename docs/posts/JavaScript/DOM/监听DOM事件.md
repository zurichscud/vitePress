# 监听DOM事件

一个元素可以绑定多个事件处理器，甚至是对于完全相同的事件。尤其是相互独立的代码模块出于不同的目的附加事件处理器。（比如，一个网页同时有着广告模块和统计模块同时监听视频播放。）

## 注册事件处理函数

### **事件处理属性（Event Handler Property）**

在DOM元素的命名格式为：`onxxx`

```ts
onclick
```

- `onxxx` 是一个 **可读写属性**，在任何时刻都可以读写

- 值必须是 **函数 或 null**

- 浏览器在事件触发时，会自动调用这个函数

- 该方式只能注册一个处理函数

- 如果需要移除处理函数，只需要将事件处理函数置为空

::: warning

由于事件处理函数可以被任意的读写，因此很有可能在后面的代码覆盖

:::

### addEventListener

::: tip 推荐使用 `addEventListener()` 来注册一个事件监听器

- 它允许为一个事件添加多个监听器。特别是对库、JavaScript 模块和其他需要兼容第三方库/插件的代码来说，这一功能很有用。
- 相比于 `onXYZ` 属性绑定来说，它提供了一种更精细的手段来控制 `listener` 的触发阶段。（即可以选择捕获或者冒泡）。

:::

## 移除事件处理函数

### 事件处理属性

```ts
dom.onclick=null
```

### removeEventListener

参见EventType>removeEventListener





## 事件处理函数

`listener` 必须是一个实现了 [`EventListener`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener) 接口的对象，或者是一个[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions)。

### EventListener

所谓“实现了 `EventListener` 接口”，本质就是**对象上有一个 `handleEvent` 方法**：

```ts
const listenerObj = {
  handleEvent(e) {
    console.log(e.type)
  }
}

el.addEventListener('click', listenerObj)
el.removeEventListener('click', listenerObj)
```



### Callback

回调函数本身具有与 `handleEvent()` 方法相同的参数和返回值；也就是说，回调接受一个参数：一个基于 [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 的对象，描述已发生的事件，并且它不返回任何内容。





### this

this始终指向当前的DOM对象，this的优势：获取得到的DOM变量，后续可能会变null，但是这不会影响this的指向

- 普通函数

  ```ts
  const btn = document.querySelector('#btn');
  
  btn.addEventListener('click', function(event) {
    console.log(this);       // btn 元素本身
    console.log(event.target); // 触发事件的元素
  });
  
  ```

1. **this** → 当前注册事件的 DOM 元素，也就是 `EventTarget`

2. **event.target** → 实际触发事件的元素（可能是子元素）



- 箭头函数

```ts
btn.addEventListener('click', (event) => {
  console.log(this); // 取决于外层作用域
  console.log(event.target); // 触发事件的元素
});

```

- 箭头函数没有自己的 `this`，它会继承外层作用域的 `this`

- 所以通常 **不推荐用箭头函数** 直接访问事件目标元素的 `this`，用 `event.currentTarget` 替代

![image-20260104224440358](./assets/image-20260104224440358.png)

![image-20260104224513822](./assets/image-20260104224513822.png)

![image-20260104224812036](./assets/image-20260104224812036.png)

![image-20260104223413191](./assets/image-20260104223413191.png)