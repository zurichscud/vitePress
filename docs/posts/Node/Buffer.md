# Buffer

`Buffer` 是 **Node.js 用来操作二进制数据的对象**。Buffer的本质是一段连续的字节内存

> Buffer = 内存中的一段“字节数组”

## 创建Buffer

```js
const buf = Buffer.from('hello')
console.log(buf)
```

```js
<Buffer 68 65 6c 6c 6f>
```

| 字符 | ASCII | 十六进制 |
| ---- | ----- | -------- |
| h    | 104   | 68       |
| e    | 101   | 65       |
| l    | 108   | 6c       |
| l    | 108   | 6c       |
| o    | 111   | 6f       |

1个16进制位=4bit

```js
1 hex = 4 bit
2 hex = 8 bit = 1 byte = 1字节 = 1B
```

```js
1 KB = 1024 Byte
```

在UTF-8中：

- 一个中文 = 3 个字节

- 一个英文 = 1 个字节

```js
'你好'.length  // 2
Buffer.from('你好').length  // 6
```



## 常见API

| 方法       | 作用       |
| ---------- | ---------- |
| toString() | 转成字符串 |
| length     | 字节长度   |
| slice()    | 切片       |
| write()    | 写入数据   |
| copy()     | 复制       |
| equals()   | 比较       |

## Buffer与Stream

Stream 传输的单位就是 Buffer。

```js
fs.createReadStream('file.txt')
```

读取的数据就是一块一块的Buffer

