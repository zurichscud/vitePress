# BOM

BrowerObject Model，浏览器模型，提供了浏览器相关的操作

## URL 的解析算法

**所有“URL 型属性”都遵循同一套解析规则**：

1. 是否是 **完整协议 URL**
2. 是否是 `//` 协议相对
3. 是否是 `/` 根路径
4. 否则 → **相对当前路径**

```ts
// 当前：https://a.com/user/list

window.open('/a')     // https://a.com/a
window.open('a')      // https://a.com/user/a
window.open('../a')   // https://a.com/a

```



## window

### open

```ts
const newWin = window.open(url, target, features)
```

- url：要打开的地址，可为空（先开空白页）

```ts
window.open('https://www.baidu.com')
```

- target

| 值        | 说明                        |
| --------- | --------------------------- |
| `_blank`  | 新窗口 / 新标签（**默认**） |
| `_self`   | 当前页面                    |
| `_parent` | 父窗口                      |
| `_top`    | 顶层窗口                    |
| `name`    | 指定窗口名（可复用）        |

- features

```ts
window.open(
  '/print',
  '_blank',
  'width=800,height=600,top=100,left=100'
)
```

- Return：`Window` 对象

```ts
const win = window.open(...)
```

### close

关闭窗口

```ts
window.close()
```

### setTimeout

```ts
let timerId

function start() {
    if (timerId) {
        return
    }
    timerId = setInterval(() => {
        console.clear()
        console.log(new Date().toLocaleString())
    }, 1000)
}

function stop() {
    clearInterval(timerId)
    timerId = null
}

start()

setTimeout(() => {
    stop()
}, 10000)
```



### clearTimeout





### setInterval



### clearInterval

清除轮询器



### alert



### confirm









## 同源策略

浏览器不允许跨域操作

```ts
const newWin=window.open('https://www.baidu.com')
```

```ts
newWin.open('/detail')
//Uncaught SecurityError: Failed to read a named property 'open' from 'Window': Blocked a frame with origin "chrome://new-tab-page" from accessing a cross-origin frame.
```



