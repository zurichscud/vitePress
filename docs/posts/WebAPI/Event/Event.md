# Event

**`Event`** 接口表示在 [`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 上出现的事件。

`Event` 接口是所有事件对象的基础接口，表示 DOM 中发生的事件。所有的事件（比如 `click`、`input`、`keydown`）都会创建一个 `Event` 对象，作为事件处理函数的参数传入。

```ts
element.addEventListener('click', (event: Event) => {
  console.log(event.type); // "click"
});
```



## Properties

| 属性               | 描述                                                  |
| ------------------ | ----------------------------------------------------- |
| `type`             | 事件类型，比如 `"click"`、`"keydown"`                 |
| `target`           | 触发事件的元素（EventTarget 类型）                    |
| `currentTarget`    | 当前正在处理事件的元素（与 `this` 相同）              |
| `bubbles`          | 是否冒泡（布尔值）                                    |
| `cancelable`       | 是否可以取消（布尔值）                                |
| `defaultPrevented` | 是否调用了 `preventDefault()`                         |
| `isTrusted`        | 事件是否由用户操作触发（true）还是由脚本触发（false） |
| `timeStamp`        | 事件创建的时间戳（毫秒）                              |

### type

事件类型



### target

- 类型：`EventTarget`

触发事件的DOM元素



### bubbles

- 类型：Boolean

事件是否允许冒泡



### cancelable

- 类型：Boolean

该事件是否可取消默认行为。

## Methods

| 方法                         | 描述                                               |
| ---------------------------- | -------------------------------------------------- |
| `preventDefault()`           | 阻止事件的默认行为                                 |
| `stopPropagation()`          | 阻止事件冒泡                                       |
| `stopImmediatePropagation()` | 阻止事件冒泡，并阻止同一元素上其他事件处理函数执行 |

### preventDefault





### stopPropagation





### stopImmediatePropagation



## class

```ts
Event
 ├─ UIEvent
 │   ├─ FocusEvent
 │   └─ MouseEvent
 │       └─ PointerEvent
 ├─ KeyboardEvent
 ├─ InputEvent
 └─ CustomEvent
```


