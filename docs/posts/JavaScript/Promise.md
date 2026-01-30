# Promise



## Methods

### resolve



### reject



### race



### all

`Promise.all` 用来**并发执行多个 Promise**，并在**全部成功**时一次性拿到结果；**只要有一个失败就立刻失败**。

```ts
const res = await Promise.all([p1, p2, p3])
```

返回值特点：

1. 顺序 **固定**

和完成先后无关，只和形参的**传入顺序**有关

```ts
const p1 = Promise.resolve(1)
const p2 = new Promise(r => setTimeout(() => r(2), 1000))

const res = await Promise.all([p2, p1])
// res === [2, 1]

```

2. 全成功才成功

```ts
Promise.all([
  Promise.resolve(1),
  Promise.reject('error'),
  Promise.resolve(3),
])
.catch(err => {
  // 直接进这里，后面的结果不会再等
})

```

3. 不是 Promise 也可以

非 Promise 会被当成 `Promise.resolve(value)`

```ts
await Promise.all([1, 2, Promise.resolve(3)])
// => [1, 2, 3]

```



示例：

```ts
const [user, order, config] = await Promise.all([
  getUser(),
  getOrder(),
  getConfig(),
])
```



### allSettled



### any

只要有一个成功就成功

```ts
Promise.any([
  Promise.reject('a'),
  Promise.resolve('ok'),
])
.then(res => {
  // res === 'ok'
})

```

