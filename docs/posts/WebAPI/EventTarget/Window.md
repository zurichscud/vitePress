# Window

`Window` 接口是浏览器中最顶层的全局对象接口，代表一个浏览器窗口或 `<iframe>`。它继承自 **`EventTarget`**



## Event



### resize

类型：`Event`

**`resize`** 事件在文档视图（窗口）调整大小时触发。

```ts
addEventListener("resize", (event) => {});

onresize = (event) => {};
```





## Properties

| 属性                                     | 类型        | 说明                                    |
| ---------------------------------------- | ----------- | --------------------------------------- |
| `window.document`                        | `Document`  | 当前文档对象                            |
| `window.innerWidth` / `innerHeight`      | `number`    | 视口宽高，包括滚动条                    |
| `window.outerWidth` / `outerHeight`      | `number`    | 浏览器窗口整体宽高，包括边框和工具栏    |
| `window.screen`                          | `Screen`    | 屏幕信息，如宽高、色深                  |
| `window.location`                        | `Location`  | 当前 URL 相关信息                       |
| `window.navigator`                       | `Navigator` | 浏览器信息，如 userAgent、平台等        |
| `window.history`                         | `History`   | 历史记录控制，如 `back()` / `forward()` |
| `window.localStorage` / `sessionStorage` | `Storage`   | 本地存储与会话存储                      |
| `window.console`                         | `Console`   | 调试输出                                |



## Methods

| 方法                                         | 说明                       |
| -------------------------------------------- | -------------------------- |
| `alert(message)`                             | 弹出提示框                 |
| `confirm(message)`                           | 弹出确认框                 |
| `prompt(message, default)`                   | 弹出输入框                 |
| `open(url, name, specs)`                     | 打开新窗口                 |
| `close()`                                    | 关闭当前窗口（脚本打开的） |
| `setTimeout(fn, ms)` / `setInterval(fn, ms)` | 定时器                     |
| `clearTimeout(id)` / `clearInterval(id)`     | 清除定时器                 |
| `requestAnimationFrame(fn)`                  | 下一帧执行回调，用于动画   |
| `scrollTo(x, y)` / `scrollBy(dx, dy)`        | 滚动窗口                   |