# state

## 定义state

在 Pinia 中，state 被定义为一个返回初始状态的函数。这使得 Pinia 可以同时支持服务端和客户端。

```ts
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})
```

## 定义TS

```ts
interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

const useStore = defineStore('storeId', {
  state: (): State => {
    return {
      userList: [],
      user: null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
```

## 访问state

### Setup API

默认情况下，你可以通过 `store` 实例访问 state，直接对其进行读写。

```ts
const store = useStore()

store.count++
```

:::warning 注意

新的属性**如果没有在 `state()` 中被定义**，则不能被添加。它必须包含初始状态。例如：如果 `secondCount` 没有在 `state()` 中定义，我们无法执行 `store.secondCount = 2`。

:::

::: tip setup store

因为 setup 写法返回的就是你定义的内容，Pinia 不会再帮你 unwrap。

##



:::

### Option API

如果你不能使用组合式 API，但你可以使用 `computed`，`methods`，...，那你可以使用 `mapState()` 辅助函数将 state 属性映射为只读的计算属性：

```ts
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // 可以访问组件中的 this.count
    // 与从 store.count 中读取的数据相同
    ...mapState(useCounterStore, ['count'])
    // 与上述相同，但将其注册为 this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'count',
      // 你也可以写一个函数来获得对 store 的访问权
      double: store => store.count * 2,
    }),
  },
}
```

##

## 重置 state

可以通过调用 store 的 `$reset()` 方法将 state 重置为初始值。

```ts
const store = useStore()
store.$reset()
```

:::tip setup store

在 Setup Stores中，不能直接调用 `$reset()` 方法重置store，您需要创建自己的 `$reset()` 方法：

```ts
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    count.value = 0
  }

  return { count, $reset }
})
```

##



:::



## 变更 state

### 直接修改

在setup API中可以通过 `store` 实例访问 state，直接对其进行读写。

```ts
countStore.num++
```





### $patch修改

调用 `$patch` 方法。它允许你用一个 `state` 的补丁对象在同一时间批量修改多个属性：

```ts
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})//同名的state会被替换，其他state保持不变
```



不过，用这种语法的话，有些变更真的很难实现或者很耗时：任何集合的修改（例如，向数组中添加、移除一个元素或是做 `splice` 操作）都需要你创建一个新的集合。因此，`$patch` 方法也接受一个函数来组合这种难以用补丁对象实现的变更。

```ts
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

### 通过action修改

直接创建一个action修改state

## 替换 `state`

你**不能完全替换掉** store 的 state，因为那样会破坏其响应性。但是，你可以 *patch* 它。

```ts
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })
```

