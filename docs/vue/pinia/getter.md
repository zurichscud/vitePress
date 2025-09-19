# getter

Getter 完全等同于 store 的 state 的computed。

## 定义getter

可以通过 `defineStore()` 中的 `getters` 属性来定义它们。**推荐**使用箭头函数，并且它将接收 `state` 作为第一个参数：

```ts
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
```

大多数时候，getter 仅依赖 state。不过，有时它们也可能会使用其他 getter。因此，即使在使用常规函数定义 getter 时，我们也可以通过 `this` 访问到**整个 store 实例**，**但(在 TypeScript 中)必须定义返回类型**。这是为了避免 TypeScript 的已知缺陷，**不过这不影响用箭头函数定义的 getter，也不会影响不使用 `this` 的 getter**。

```ts
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // 自动推断出返回类型是一个 number
    doubleCount(state) {
      return state.count * 2
    },
    // 返回类型**必须**明确设置
    doublePlusOne(): number {
      // 整个 store 的 自动补全和类型标注 ✨
      return this.doubleCount + 1
    },
  },
})
```

## 向 getter 传递参数

*Getter* 只是幕后的**计算**属性，所以不可以向它们传递任何参数。你可以通过action实现

## 访问getter

### option store

Pinia 在处理 `getters` 时，做了一层封装：

- 内部确实是 `computed`，但是对外暴露时，把 `.value` 自动“解包”了。
- 在你访问 `store.doubleCount` 时，Pinia 拦截了属性读取，自动帮你返回 `getter.value`。
- 所以在 store 上访问 getter，得到的就是 **直接的值**，而不是 `Ref`。

:::code-group 

```ts [count.ts]
export const useCountStore = defineStore('count', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
```

```ts [使用时]
const store = useCountStore()

console.log(store.doubleCount) // 0 ✅ 直接就是 number
```



:::

### setup store

因为 setup 写法返回的就是你定义的内容，Pinia 不会再帮你 unwrap。

:::code-group

```ts [使用]
console.log(store.doubleCount.value) // 需要 .value
```

```ts [countStore]
export const useCountStore = defineStore('count', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  return { count, doubleCount }
})

```



:::

## 访问其他 store 的 getter

想要使用另一个 store 的 getter 的话，那就直接在 *getter* 内使用就好

```ts
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```

