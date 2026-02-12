# os

```js
const os = require('os')
```

## type()

操作系统名称

```js
os.type()
```



```ts
Darwin
Windows_NT
Linux
```



## platform()

当前操作系统平台

> 常使用该方法判断操作系统

```js
os.platform()
```

| 系统    | 返回值                                         |
| ------- | ---------------------------------------------- |
| macOS   | darwin                                         |
| Windows | win32 （Windows 返回的是 `win32`（历史原因）） |
| Linux   | linux                                          |


## release()

返回操作系统的版本

```js
os.release() //25.2.0
```



## homedir()

返回用户目录

```js
os.homedir() // /Users/zurichscud
```



## arch()

返回cpu的架构 

```js
os.arch()
```



可能的值为：

```js
x64
arm64
ia32
```



## cpus()

返回一个数组，每个元素代表一个逻辑 CPU 核心。

```js
os.cpus()
```



```js
[
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 33178110, nice: 0, sys: 15729850, idle: 89279670, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 29995190, nice: 0, sys: 13480610, idle: 94947820, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 23647150, nice: 0, sys: 10216710, idle: 104842260, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 19122050, nice: 0, sys: 7606830, idle: 112240250, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 14900520, nice: 0, sys: 5806690, idle: 118452630, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 11626690, nice: 0, sys: 4530730, idle: 123152210, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 11089140, nice: 0, sys: 3190160, idle: 125158680, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 8006860, nice: 0, sys: 2412670, idle: 129037290, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 6442880, nice: 0, sys: 1916600, idle: 131125980, irq: 0 }
  },
  {
    model: 'Apple M4',
    speed: 2400,
    times: { user: 5668110, nice: 0, sys: 1656760, idle: 132184220, irq: 0 }
  }
]
```

CPU 核心数：

```js
console.log(os.cpus().length)
```

