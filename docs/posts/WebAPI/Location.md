# Location

## Properties

```ts
https://example.com:8080/path/page.html?name=tom&age=18#section1
```



### href

整个 URL

```ts
https://example.com:8080/path/page.html?name=tom&age=18#section1
```



### protocol

包含 URL 对应协议的一个[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)，最后有一个":"。

```ts
"https:"
```



### host

包含了域名的一个[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)，可能在该串最后带有一个":"并跟上 URL 的端口号。

```ts
location.host      // "example.com:8080"
```



### hostname

包含 URL 域名

```ts
location.hostname  // "example.com"
```



### port

- 类型：String

端口号

```ts
location.port      // "8080"
```

### search

```ts
location.search // "?name=tom&age=18"
```



### hash

包含块标识符的[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)，开头有一个 `#`。

```ts
location.hash// "#section1"
```





## Methods

### assign

加载给定 URL 的内容资源到这个 Location 对象所关联的对象上。

### reload

重新加载来自当前 URL 的资源。他有一个特殊的可选参数，类型为 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/API/Boolean)，该参数为 true 时会导致该方法引发的刷新一定会从服务器上加载数据。如果是 `false`或没有制定这个参数，浏览器可能从缓存当中加载页面。

### replace

用给定的 URL 替换掉当前的资源。与 `assign()` 方法不同的是用 `replace()`替换的新页面不会被保存在会话的历史 [`History`](https://developer.mozilla.org/zh-CN/docs/Web/API/History)中，这意味着用户将不能用后退按钮转到该页面。



## 与a标签的关系

`<a>` 标签和 Location 本质上操作的是同一件事：浏览器地址栏（URL），只是入口不同、控制能力不同。

```ts
<a href="/detail?id=1">详情</a>
```

用户点击后，浏览器内部会做三步：

1. 读取 `href`
2. 把 `href` 赋值给 `location.href`
3. 浏览器执行页面跳转

```ts
location.href = '/detail?id=1' //<a> 是 location 的“UI 封装”
```



- `<a>`：声明式导航（给用户点）

- **`location`：命令式导航（给 JS 用）**

- **最终都会改变 `location`，触发浏览器导航行为**