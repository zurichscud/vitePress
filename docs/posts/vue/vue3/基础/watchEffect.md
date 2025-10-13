# watchEffect

副作用侦听器。和 `watch` 类似，`watchEffect` 也会监听响应式数据的变化。区别在于：**`watchEffect` 不需要你显式指定数据源，回调里用到的响应式数据都会被自动追踪**。更像是 **“立即执行的副作用函数”**。

## 基本语法

```ts
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => {
  console.log('count 变化:', count.value)//每次 count.value 改变时，都会重新执行。
})
```

传入watchEffect的函数会立即执行一次

## onCleanup

`watchEffect` 的回调函数也支持一个 `onCleanup` 参数

```ts
watchEffect((onCleanup) => {
  const timer = setInterval(() => {
    console.log('副作用执行')
  }, 1000)

  // 在副作用重新执行前清理
  onCleanup(() => {
    clearInterval(timer)
    console.log('清理副作用')
  })
})

```

## 停止监听

```ts
const stop = watchEffect(() => {
  console.log('running...')
})

setTimeout(() => {
  stop() // 停止监听
}, 3000)

```

## 应用

### 快速建立响应式副作用

```ts
watchEffect(() => {
  document.title = `count: ${count.value}`
})

```

### 自动请求数据

```ts
const userId = ref(1)

watchEffect(async () => {
  const res = await fetch(`/api/user/${userId.value}`)
  console.log(await res.json())
})

```

