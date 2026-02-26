# stream

## 流的类型

### Readable可读流

能“流出数据”的流。



### Writable 可写流

能“接收数据”的流。



### Transform 

有的流可读可写

```js
文件 → 可读流 → Transform → 可写流
```

```js
const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())//gzipStream
  .pipe(fs.createWriteStream('output.txt.gz'))
```





## createReadStream

**以流的方式读取文件**，而不是一次性全部读入内存。适合读取大文件。

```js
import fs from 'fs'

const stream = fs.createReadStream('./big.txt', {
  encoding: 'utf-8'
})

stream.on('data', chunk => {
  console.log('读取一块数据:', chunk.toString())
})

stream.on('end', () => {
  console.log('读取完成')
})

stream.on('error', err => {
  console.error(err)
})
```

`chunk`是每次读取到Buffer块，如果将其保存在内存中，本质上和`readFile`没有区别。

```js
const chunks = []

stream.on('data', chunk => {
  chunks.push(chunk)
})

stream.on('end', () => {
  const buffer = Buffer.concat(chunks)
  console.log(buffer.length)
})
```

::: tip 流的设计哲学

流不是为了“保存数据”。流是为了：

- 处理数据

- 转发数据

- 计算数据

- 写入数据

- 发送数据

:::

| 事件       | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| `data`     | **流读取到一块数据时被触发**。每次会尝试读取相同大小的数据块（64KB） |
| `end`      | 数据读完                                                     |
| `error`    | 出错                                                         |
| `close`    | 流关闭                                                       |
| `readable` | 可以手动调用 read() 读取                                     |

## createWriteStream

**以流的方式写入文件**（适合大文件 / 持续写入）。

```js
import fs from 'fs'

const writeStream = fs.createWriteStream('./a.txt')

writeStream.write('hello\n')
writeStream.write('world\n')
writeStream.end()
```

| 事件     | 说明                   |
| -------- | ---------------------- |
| `drain`  | 缓冲区清空，可以继续写 |
| `finish` | 调用 end() 后写入完成  |
| `error`  | 出错                   |
| `close`  | 流关闭                 |
| `pipe`   | 被可读流 pipe 时触发   |
| `unpipe` | 解除 pipe 时触发       |



## pipe

`pipe()` 是 **流（Stream）之间的数据传输方法**。

> 把一个可读流的数据，自动传给一个可写流。

```js
const writable=readable.pipe(writable)
```

pipe的返回值是**目标流**（即形参`writable`），方便进行链式调用

```js
const result = readable.pipe(writable)
result === writable
```

