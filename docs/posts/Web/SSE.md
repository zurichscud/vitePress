# SSE

Server-Sent Events（SSE）是一种在客户端和服务器之间实现单向事件流的机制，允许服务器主动向客户端发送事件数据。

在 SSE 中，可以使用自定义事件（Custom Events）来发送具有特定类型的事件数据。

## SSE优势

- **自动重连**：浏览器原生支持断线重连。
- **轻量**：比 WebSocket 简单得多，不需要复杂的握手过程。
- **兼容性好**：在现代浏览器中原生支持。
- **更适合 AI 场景**：现在的 **ChatGPT/LLM 逐字生成回答**，几乎全是靠 SSE 实现的。

## 数据要求

每个事件的发送数据遵循以下格式：

```js
[字段名]: [字段值]\n
```

- 每个字段以 **`字段名: 字段值`** 的形式定义。

- 每个字段后必须跟上 **换行符**（`\n`）。

- 每个事件结束后，需要有 **两个换行符**（`\n\n`）表示事件的结束。

- 字段名区分大小写，不能有空格。

每个事件都可以包含以下字段：

- `event`: 指定事件的类型（可以自定义名称）。

- `data`: 传输的数据。可以是任何有效的文本格式（JSON、字符串、数字等），但需要注意将数据正确地格式化为文本形式。

- `id`: 可选，设置事件的 ID。

- `retry`: 可选，指定客户端重新连接的时间（毫秒）。

```js
event: update\n
id: 1001\n
data: {"status": "success", "message": "Data updated successfully"}\n
retry: 5000\n\n
```



默认事件：如果没有指定 `event` 字段，事件的类型默认为 `message`。你可以直接使用 `onmessage` 或 `addEventListener('message', ...)` 来处理这些事件。



## 实例

服务器通过发送特殊的HTTP响应头，告知客户端它会使用SSE推送数据。

```js
app.get('/sse',(req,res)=>{
    res.setHeader('Content-Type', 'text/event-stream')
    res.status(200)
    setInterval(() => {
        res.write('event: test\n')
        res.write('data: ' + new Date().getTime() + '\n\n')
    }, 1000)
})

```



```js
const sse = new EventSource('http://localhost:3000/sse')
sse.addEventListener('test', (event) => {
    console.log(event.data)
})
```

## SSE中断

在 **Server-Sent Events (SSE)** 中，服务器无法直接主动“中断”或关闭连接，因为SSE是单向通信流，客户端通过持久化的 HTTP 连接接收来自服务器的数据。

### 服务器端中断连接

由于 `EventSource` 在连接异常断开时会默认尝试**自动重连**，如果你只是简单地关闭 Socket，浏览器会认为网络出错了并再次发起请求。

```js
res.end();//并不能终止连接，客户端会自动重连
```

**推荐做法**：先向客户端发送一个特定的“结束”事件，由客户端主动关闭连接。

- 服务端

```js
res.write('event: close\n');
res.write('data: {"message": "Stream finished"}\n\n');
res.end();
```

- 客户端：

```js
eventSource.addEventListener('close', (e) => {
    console.log('服务端通知：任务已完成，准备关闭连接');
    eventSource.close(); // 彻底切断，不再重连
  });
```



### 客户端中断连接

在客户端，可以通过调用 `EventSource` 实例的 `.close()` 方法来显式地关闭连接。

```js
<script>
  const eventSource = new EventSource('/events');

  eventSource.onmessage = function(event) {
    console.log("收到数据:", event.data);
  };

  // 主动关闭连接
  setTimeout(() => {
    eventSource.close();
    console.log("连接已关闭");
  }, 10000);  // 10秒后关闭连接
</script>
```

调用 `eventSource.close()` 后，连接将被关闭，服务器将不再向客户端发送任何数据，且 `EventSource` 会触发 `onerror` 事件。

### 客户端重试机制

当客户端检测到连接中断或错误时，浏览器会自动根据服务器发送的 **`retry`** 字段（如果有）来进行重试。默认情况下，客户端会每 3 秒重新尝试连接。
