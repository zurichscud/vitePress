# fs

```js
const fs = require('fs')
```



## readFile

```js
import fs from 'fs'

fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
```





## writeFile



- 默认覆盖写入（flag:'w'）

如果 **文件不存在** —— ✅ 会自动创建文件。

```js
await fs.writeFile('./a.txt', 'hello')
```



- 追加写入

```js
await fs.writeFile('./a.txt', 'world', { flag: 'a' })
```



## createReadStream

**以流的方式读取文件**，而不是一次性全部读入内存。适合读取大文件。

```js
import fs from 'fs'

const stream = fs.createReadStream('./big.txt', {
  encoding: 'utf-8'
})

stream.on('data', chunk => {
  console.log('读取一块数据:', chunk)
})

stream.on('end', () => {
  console.log('读取完成')
})

stream.on('error', err => {
  console.error(err)
})
```

`chunk`是每次读取到块，如果将其保存在内存中，本质上和`readFile`没有区别。

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

| 事件       | 说明                     |
| ---------- | ------------------------ |
| `data`     | 有数据块可读时触发       |
| `end`      | 数据读完                 |
| `error`    | 出错                     |
| `close`    | 流关闭                   |
| `readable` | 可以手动调用 read() 读取 |

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

## link

创建硬链接

```js
const fs = require('fs')
fs.link('./src/demo4.js', './src/demo4.js.copy', (err) => {
  if (err) throw err;
  console.log('成功！');
});
```



## symlink

创建软链接。软链接里的路径是“相对于软链接文件所在目录”解析的。为了稳妥软链接请使用绝对路径

```js
const path = require('path');
const fs = require('fs');

const target = path.resolve(__dirname, 'src/demo4.js');
const link = path.resolve(__dirname, 'src/demo4-symlink.js');

fs.symlink(target, link, err => {
  if (err) throw err;
});

```



## unlink

删除文件

```js
import fs from 'fs'

fs.unlink('./a.txt', err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('删除成功')
})
```





## mkdir

创建文件夹，如果开启 `recursive` 可以递归创建多个文件夹

```js
fs.mkdir('path/test/ccc', { recursive: true },(err)=>{

})
```



## rm

删除文件夹 如果开启`recursive` 递归删除全部文件夹

```js
fs.rm('path', { recursive: true },(err)=>{

})

```

::: tip

如果目录非空，但是没有开启递归删除，删除时将会报错

```js
await fs.rm('./not-empty-dir')
// Error: ENOTEMPTY: directory not empty
```



:::





## rename

重命名文件 第一个参数原始名称 第二个参数新的名称

```js
fs.renameSync('./test.txt','./test2.txt')
```



## watch

用于监听文件系统（文件、文件夹）变化

```js
import fs from 'fs'

fs.watch('./a.txt', (eventType, filename) => {
  console.log('事件类型:', eventType)
  console.log('文件名:', filename)
})
```

监听目录时：目录内文件变化也会触发，`filename` 是变化的文件名

| 值     | 含义                       |
| ------ | -------------------------- |
| rename | 文件被重命名 / 删除 / 创建 |
| change | 文件内容发生变化           |



::: tip 删除会触发两次`rename`

“重命名”本质上是：删除旧文件 + 创建新文件。所以在监听时，rename会触发两次。

```js
//a.txt->b.txt
rename a.txt
rename b.txt
```

:::



::: tip watch的不可靠性

Node 是跨平台的，但是在不同的系统上watch具有不同的表现，例如：

```js
const watcher = fs.watch('./test.js', (eventType, filename) => {
  console.log(eventType, filename)
})
```

在MacOS上使用watch监听文件时，如果修改文件名，监听仍然有效，但是在其他系统上，监听可能会失效，因此构建工具通常不使用`watch`，而是使用`chokidar`

:::



## readdir



## stat
