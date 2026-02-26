# zlib

`zlib` 是 **Node.js 内置的压缩模块**，用于对数据进行 **压缩和解压**，底层基于 Gzip/Deflate 算法实现。

在后端开发中，它常用于：

- HTTP 响应压缩（提升性能）
- 文件压缩
- 数据传输优化
- 日志归档

## 3种风格

### Callback

```js
const zlib = require('zlib')

zlib.gzip('hello world', (err, buffer) => {
  console.log(buffer)
})
```

### Sync

```js
const zlib = require('zlib')

const result = zlib.gzipSync('hello world')
console.log(result)
```



### Stream

用于处理大文件。这是生产环境最推荐方式（不会占用大量内存）。

```js
const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())//gzipStream
  .pipe(fs.createWriteStream('output.txt.gz'))
```

## gzip

`gzip`常用于文本文件的压缩，因为文本文件中存在大量重复的结构

### 压缩

```js
const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('a.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('a.txt.gz'))
```



### 解压

```js
const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('a.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('a.txt'))
```

### 应用

例如一个 100KB 的文本文件，压缩后可能只剩 20KB ~ 40KB，传输时间显著减少，网络带宽占用更低。

浏览器具备自动解压gzip文件的能力。

浏览器请求时会带：

```js
Accept-Encoding: gzip, br
```

服务器如果启用 gzip：

```js
Content-Encoding: gzip
```

浏览器会自动解压。

| 文件类型    | 压缩效果                      |
| ----------- | ----------------------------- |
| .html       | 很好                          |
| .css        | 很好                          |
| .js         | 很好                          |
| .json       | 很好                          |
| .txt        | 很好                          |
| .jpg / .png | 几乎没效果,图片本身已经压缩过 |
