# EventEmitter

- **发布者（Publisher）**：负责发布消息，但不知道谁会接收

- **订阅者（Subscriber）**：负责接收自己感兴趣的消息

- **事件通道 / 中间件（Event Bus / Message Broker）**：调度中心

```js
const EventEmitter = require('events')
//创建调度中心
const bus = new EventEmitter()
```

::: tip

订阅者如果需要收到消息，则必须在发布前就订阅

:::

## 订阅

- `on` → 订阅事件，每次触发都会执行回调

```js
bus.on('login', (user) => {
  console.log(`${user} 登录了`)
})
```

- `once` → 只执行一次

```js
bus.once('login', user => console.log('只执行一次', user))

```



## 发布

```js
bus.emit('login', '赖')
```

- `emit` → 发布事件，参数会传给回调函数，参数列表可以多个

- 可以同时有多个订阅者监听同一个事件



## 取消订阅

```js
function handler(user) {
  console.log('handler:', user)
}

bus.on('login', handler)

// 移除订阅
bus.off('login', handler)
```



## extends

所有需要使用发布订阅模式的class，都可以实现 `EventEmitter` 接口

```js
process.on('hello', (arg) => {
  console.log(arg);//'word'
})
process.emit('hello', 'world')
```

