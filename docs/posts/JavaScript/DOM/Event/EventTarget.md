# EventTarget

`EventTarget` 是一个 **接口**，提供添加、移除和派发事件的方法。很多浏览器对象都继承了它，比如：

- DOM 元素（`HTMLElement`、`SVGElement` 等）
- `Document`
- `Window`
- `XMLHttpRequest`

也就是说，只要对象是 `EventTarget`，它就可以监听事件并触发事件。



## addEventListener

```ts
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```

- type：事件类型
- listener：事件处理函数：参见事件处理函数

`addEventListener()` 的工作原理是将实现 [`EventListener`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener) 的函数或对象添加到调用它的 [`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 上的指定事件类型的事件侦听器列表中。如果要绑定的函数或对象已经被添加到列表中，该函数或对象不会被再次添加。

当使用 `addEventListener()` 时，如果 `options` 参数不同，那么你可以在相同的 `type` 上多次添加相同的监听



## removeEventListener

**`removeEventListener()`** 方法可以删除使用 [`EventTarget.addEventListener()`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法添加的事件。

```ts
removeEventListener(type, listener);
removeEventListener(type, listener, options);
removeEventListener(type, listener, useCapture);
```



移除事件监听时，`removeEventListener()` **必须**传入与添加时**相同的 `type` 和 `listener` 引用**。`options` 中，**只有 `capture`（或旧写法 `useCapture`）会参与匹配**。其他选项（如 `passive`、`once` 等）**不会影响移除**。因此：

- 同一 `type` + 同一 `listener`，只要 **`capture` 不同**，就会被当作**不同的监听器**，可以同时存在。
- 调用 `removeEventListener()` 时，**`capture` 必须与添加时一致**，否则无法移除。

```ts
element.addEventListener("mousedown", handleMouseDown, true);
```

```ts
element.removeEventListener("mousedown", handleMouseDown, false); // 失败
element.removeEventListener("mousedown", handleMouseDown, true); // 成功
```
