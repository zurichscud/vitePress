# web 服务器

`http` 是 **Node.js 内置核心模块**，用来创建 HTTP 服务器和发送 HTTP 请求，是很多 Web 框架（如 Express）的底层基础。

## createServer

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.write('hello')
  res.end()
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000')
})
```

| 参数 | 类型                 | 说明               |
| ---- | -------------------- | ------------------ |
| req  | http.IncomingMessage | 请求对象（可读流） |
| res  | http.ServerResponse  | 响应对象（可写流） |

### req

`req` 请求，是一个 **可读流**。**`req` 流中读取到的数据，就是请求体（Request Body）**。

```js
req.url        // 请求路径。包含查询参数（query string），但不包含域名和协议。
req.method     // 请求方法
req.headers    // 请求头
```

```js
let body = ''
req.on('data', chunk => {
  body += chunk
})

req.on('end', () => {
  console.log(body)
})
```



### res

`res`响应， 是一个 **可写流**

```js
res.write()       // 写入响应体
res.end()         // 结束响应
res.setHeader()   // 设置响应头
res.statusCode = 404  // 设置状态码
```

`res.end`用于告诉服务器：响应数据发送完了，可以关闭这次请求了。

```js
res.end('hello')
```

等价于：

```js
res.write('hello')
res.end()
```



### 路由系统



```js
const http = require('node:http'); // 引入 http 模块
const url = require('node:url'); // 引入 url 模块

// 创建 HTTP 服务器，并传入回调函数用于处理请求和生成响应
http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true); // 解析请求的 URL，获取路径和查询参数

  if (req.method === 'POST') { // 检查请求方法是否为 POST
    if (pathname === '/post') { // 检查路径是否为 '/post'
      let data = '';
      req.on('data', (chunk) => {
        data += chunk; // 获取 POST 请求的数据
        console.log(data);
      });
      req.on('end', () => {
        res.setHeader('Content-Type', 'application/json'); // 设置响应头的 Content-Type 为 'application/json'
        res.statusCode = 200; // 设置响应状态码为 200
        res.end(data); // 将获取到的数据作为响应体返回
      });
    } else {
      res.setHeader('Content-Type', 'application/json'); // 设置响应头的 Content-Type 为 'application/json'
      res.statusCode = 404; // 设置响应状态码为 404
      res.end('Not Found'); // 返回 'Not Found' 作为响应体
    }
  } else if (req.method === 'GET') { // 检查请求方法是否为 GET
    if (pathname === '/get') { // 检查路径是否为 '/get'
      console.log(query.a); // 打印查询参数中的键名为 'a' 的值
      res.end('get success'); // 返回 'get success' 作为响应体
    }
  }
}).listen(98, () => {
  console.log('server is running on port 98'); // 打印服务器启动的信息
});

```

