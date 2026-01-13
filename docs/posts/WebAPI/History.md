# History

## Properties

### length

接口的 **`length`** 只读属性返回一个表示会话历史中的条目数量（包括当前加载的页面）的整数。

例如，对于在新标签页中加载的页面，此属性返回 `1`。

### scrollRestoration

[`History`](https://developer.mozilla.org/zh-CN/docs/Web/API/History) 接口的 **`scrollRestoration`** 属性允许 web 应用显式设置在历史导航（如前进或后退）时的默认滚动位置恢复行为。

## Methods

### back

使浏览器在会话历史中后退一页。它的效果与调用 [`history.go(-1)`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/go) 相同。如果没有上一页，此方法调用不执行任何操作。

此方法是[异步](https://developer.mozilla.org/zh-CN/docs/Glossary/Asynchronous)的。请添加一个监听器来监听 [`popstate`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event) 事件，以便确定导航何时完成。

```ts
window.history.back()
```



### forward

使浏览器在会话历史中向前移动一页。它的调用效果与 [`history.go(1)`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/go) 相同。此方法是[异步](https://developer.mozilla.org/zh-CN/docs/Glossary/Asynchronous)的。请添加一个监听器来监听 [`popstate`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event) 事件，以便确定导航何时完成。

```ts
window.history.forward()
```



### go

`go()`方法从会话历史记录中加载特定页面。你可以使用它在历史记录中前后移动，具体取决于`delta`参数的值。

```ts
window.history.go(delta);
```

