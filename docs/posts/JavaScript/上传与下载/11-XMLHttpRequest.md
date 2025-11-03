# XMLHttpRequest

`XMLHttpRequest` 是一种用于在浏览器中与服务器进行交互的 API，通常用于实现异步请求。它允许网页与服务器交换数据并更新页面，而无需重新加载整个页面。这种方式被广泛应用于实现 AJAX（Asynchronous JavaScript and XML）技术，使网页能够动态加载数据。

## 基本使用

1. **创建 XMLHttpRequest 对象：**

   ```
   const xhr = new XMLHttpRequest();
   ```

2. **设置请求方式与 URL：**
    你可以通过 `open` 方法指定请求类型（GET、POST 等）和请求的 URL。

   ```
   xhr.open('GET', 'https://api.example.com/data', true);  // true 表示异步
   ```

3. **发送请求：**
    使用 `send()` 方法发送请求。如果是 POST 请求，可以传递数据。

   ```
   xhr.send();
   ```

4. **处理响应：**
    可以通过监听 `onreadystatechange` 或 `load` 事件来处理响应。响应的状态码可以通过 `xhr.status` 获取，响应内容可以通过 `xhr.responseText` 或 `xhr.response` 获取。

   ```
   xhr.onreadystatechange = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
           console.log(xhr.responseText);  // 响应的文本内容
       }
   };
   ```



```ts
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('Response:', JSON.parse(xhr.responseText));
    } else {
        console.error('Request failed with status', xhr.status);
    }
};

xhr.onerror = function() {
    console.error('Request failed');
};

xhr.send();

```

# Properties

在 TypeScript 中，`XMLHttpRequest` 的类型定义是通过内置的 `lib.dom.d.ts` 文件提供的

`readyState: number`
 表示请求的当前状态。可以是以下值：

- `0`：请求未初始化
- `1`：服务器连接已建立
- `2`：请求已接收
- `3`：请求处理中
- `4`：请求完成

`status: number`
 HTTP 响应的状态码（如 `200` 表示成功，`404` 表示未找到，`500` 表示服务器错误）。

`statusText: string`
 返回的 HTTP 响应状态文本。

`responseText: string`
 返回的响应文本内容，通常是字符串。

`responseXML: Document | null`
 如果响应是 XML 格式，返回解析后的 XML 文档，否则返回 `null`。

`onreadystatechange: (() => void) | null`
 `readyState` 变化时触发的回调函数。

`onload: (() => void) | null`
 当请求成功完成时调用的回调函数。

`onerror: (() => void) | null`
 当请求失败时调用的回调函数。

`timeout: number`
 请求的超时时间，单位是毫秒。

`withCredentials: boolean`
 是否发送跨域请求时包含凭证（如 Cookie、Authorization 标头等）。

### status

```ts
status:number
```

服务器响应的 HTTP 状态码。这个状态码是一个三位数的数字，表示请求的结果。

### responseText

```ts
 responseText:string
```



`responseText` **只在 `responseType` 为 `""` 或 `"text"` 时有效**，否则会抛出错误。



### response

```ts
response:any
```

`response` 根据 `responseType` 自动解析为对应类型。

```ts
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data', true);

// 设置返回类型为 JSON
xhr.responseType = 'json';

xhr.onload = function () {
  console.log(xhr.response);       // 自动解析为 JavaScript 对象
  console.log(xhr.responseText);   // ❌ 报错：responseText 不可用
};

xhr.send();
```



## Methods

`open(method: string, url: string, async?: boolean, user?: string, password?: string): void`
 设置请求的 HTTP 方法、URL 和是否异步。

`send(body?: any): void`
 发送请求，如果是 `POST` 请求，可以传递请求体数据。

`setRequestHeader(header: string, value: string): void`
 设置请求头。

`abort(): void`
 中止当前请求。



## TS

```ts
declare class XMLHttpRequest {
  readyState: number;
  status: number;
  statusText: string;
  responseText: string;
  response: any;
  responseXML: Document | null;
  onreadystatechange: (() => void) | null;
  onload: (() => void) | null;
  onerror: (() => void) | null;
  timeout: number;
  withCredentials: boolean;
  
  open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
  send(body?: any): void;
  setRequestHeader(header: string, value: string): void;
  abort(): void;
}

```

