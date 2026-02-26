# fs

```js
const fs = require('fs')
```

## 三种风格

Node.js 中 `fs` 模块一共有 **三种调用风格**，本质上只是“异步写法不同”。

### err-first callback

```js
const fs = require('fs')

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
```

特点：

- 异步
- 使用回调函数
- 容易产生“回调地狱”

### promise

```js
const { readFile } = require('fs/promises')

readFile('./test.txt', 'utf8')
  .then(console.log)
  .catch(console.error)
```

特点：

- 异步
- 返回 Promise
- 可配合 async/await

### Sync 风格（同步）

所有 API 都有一个 `Sync` 版本。

```js
const fs = require('fs')

try {
  const data = fs.readFileSync('./test.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}
```

特点：

- 同步（阻塞线程）
- 会卡住整个 Node 进程
- 适合脚本 / CLI
- 不适合服务器

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

**读取目录内容**（列出某个文件夹下的文件和子目录）。

```js
const fs = require('fs')

fs.readdir('./src', (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(files)
})
// [ 'index.js', 'utils.js', 'config', 'assets' ]
```



## stat

获取文件的详细信息对象（大小、时间、类型等）

```js
const fs = require('fs')

fs.stat('./index.js', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats)
})
```

返回的是一个 `Stats` 对象，包含：

```js
Stats {
  dev: 16777234,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 38044441,
  size: 256,
  blocks: 8,
  atimeMs: 1771980734845.9387,
  mtimeMs: 1771924156894.1602,
  ctimeMs: 1771980733162.3064,
  birthtimeMs: 1771915476724.8386
}
```

| 字段            | 你的值   | 含义             | 是否常用   | 说明                       |
| --------------- | -------- | ---------------- | ---------- | -------------------------- |
| **dev**         | 16777234 | 设备 ID          | ⭐ 很少     | 文件所在的磁盘编号         |
| **mode**        | 33188    | 文件类型 + 权限  | ⭐⭐ 常用    | 包含文件类型和 rwx 权限    |
| **nlink**       | 1        | 硬链接数量       | ⭐⭐ 有用    | 有多少文件名指向这个 inode |
| **uid**         | 501      | 所属用户 ID      | ⭐⭐ 偶尔    | 文件所有者                 |
| **gid**         | 20       | 所属组 ID        | ⭐⭐ 偶尔    | 文件所属用户组             |
| **rdev**        | 0        | 设备文件 ID      | ❌ 几乎不用 | 仅字符/块设备有意义        |
| **blksize**     | 4096     | 文件系统块大小   | ❌ 很少     | 一块多少字节               |
| **ino**         | 38044441 | inode 编号       | ⭐⭐ 有用    | 文件真正的身份 ID          |
| **size**        | 256      | 文件大小（字节） | ⭐⭐⭐ 常用   | 文件实际大小               |
| **blocks**      | 8        | 占用磁盘块数     | ❌ 很少     | 实际占用块数量             |
| **atimeMs**     | 时间戳   | 最后访问时间     | ⭐⭐ 常用    | 被读取的时间               |
| **mtimeMs**     | 时间戳   | 最后修改时间     | ⭐⭐⭐ 常用   | 内容被修改时间             |
| **ctimeMs**     | 时间戳   | 状态变更时间     | ⭐⭐ 常用    | 权限/重命名修改            |
| **birthtimeMs** | 时间戳   | 创建时间         | ⭐⭐ 常用    | 文件创建时间               |
