# util

## types

判断相关的库

```ts
const util = require('util')

console.log(util.types.isStringObject('foo'));//判断是否是String()创建的
```

| 方法 / 类型判断              | 参数示例                            | 说明                                   |
| ---------------------------- | ----------------------------------- | -------------------------------------- |
| `isDate(value)`              | `new Date()`                        | 判断是否 Date 对象                     |
| `isMap(value)`               | `new Map()`                         | 判断是否 Map                           |
| `isSet(value)`               | `new Set()`                         | 判断是否 Set                           |
| `isRegExp(value)`            | `/abc/`                             | 判断是否正则                           |
| `isPromise(value)`           | `Promise.resolve()`                 | 判断是否 Promise 对象                  |
| `isAsyncFunction(value)`     | `async () => {}`                    | 判断是否异步函数                       |
| `isGeneratorFunction(value)` | `function* () {}`                   | 判断是否生成器函数                     |
| `isNativeError(value)`       | `new Error()`                       | 判断是否原生 Error                     |
| `isBoxedPrimitive(value)`    | `new String('a')` / `new Number(1)` | 判断是否包装类型（对象包装的基本类型） |
| `isTypedArray(value)`        | `new Uint8Array()`                  | 判断是否 TypedArray                    |
| `isProxy(value)`             | `new Proxy({}, {})`                 | 判断是否 Proxy 对象                    |

## promisify

把 Node 风格回调函数（err-first）转换为 Promise：

```js
import fs from 'fs'
import util from 'util'

const readFileAsync = util.promisify(fs.readFile)

async function main() {
  const data = await readFileAsync('./test.txt', 'utf8')
  console.log(data)
}

main()
```





## callbackify



把 Promise 函数变成回调函数（不常用）：与promiseify效果相反



## Node风格Callback

回调函数的第一个参数总是 **错误对象**，后面的参数才是成功数据。

```js
function callback(err, data) {
  if (err) {
    // 处理错误
    return
  }
  // 正常处理 data
}
```

