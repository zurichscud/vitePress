# store

Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，**它承载着全局状态**。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有**三个概念**，[state](https://pinia.vuejs.org/zh/core-concepts/state.html)、[getter](https://pinia.vuejs.org/zh/core-concepts/getters.html) 和 [action](https://pinia.vuejs.org/zh/core-concepts/actions.html)，我们可以假设这些概念相当于组件中的 `data`、 `computed` 和 `methods`。

```ts
import { defineStore } from 'pinia'

//  `defineStore()` 的返回值的命名是自由的
// 但最好含有 store 的名字，且以 `use` 开头，以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})
```

## 定义store

### Option Store

与 Vue 的选项式 API 类似，我们也可以传入一个带有 `state`、`actions` 与 `getters` 属性的 Option 对象

```
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

你可以认为 `state` 是 store 的数据 (`data`)，`getters` 是 store 的计算属性 (`computed`)，而 `actions` 则是方法 (`methods`)。

### Setup Store

```ts
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
```

在 *Setup Store* 中：

- `ref()` 就是 `state` 属性
- `computed()` 就是 `getters`
- `function()` 就是 `actions`

注意，要让 pinia 正确识别 `state`，你**必须**在 setup store 中返回 **`state` 的所有属性**。这意味着，你不能在 store 中使用**私有**属性。不完整返回会影响 [SSR](https://pinia.vuejs.org/zh/cookbook/composables.html) ，开发工具和其他插件的正常运行。

Setup store 比 [Option Store](https://pinia.vuejs.org/zh/core-concepts/#option-stores) 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何[组合式函数](https://cn.vuejs.org/guide/reusability/composables.html#composables)。不过，请记住，使用组合式函数会让 SSR 变得更加复杂。

Setup store 也可以依赖于全局**提供**的属性，比如路由。任何[应用层面提供](https://vuejs.org/api/application.html#app-provide)的属性都可以在 store 中使用 `inject()` 访问，就像在组件中一样：

```ts
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'

export const useSearchFilters = defineStore('search-filters', () => {
  const route = useRoute()
  // 这里假定 `app.provide('appProvided', 'value')` 已经调用过
  const appProvided = inject('appProvided')

  // ...

  return {
    // ...
  }
})
```

:::warning WARNING

不要返回像 `route` 或 `appProvided` (上例中)之类的属性，因为它们不属于 store，而且你可以在组件中直接用 `useRoute()` 和 `inject('appProvided')` 访问。

:::

## 使用store

```ts
<script setup>
import { useCounterStore } from '@/stores/counter'
// 在组件内部的任何地方均可以访问变量 `store` ✨
const store = useCounterStore()
</script>
```

请注意，`store` 是一个用 `reactive` 包装的对象，这意味着不需要在 getters 后面写 `.value`。就像 `setup` 中的 `props` 一样，**我们不能对它进行解构**：

```ts
<script setup>
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

const store = useCounterStore()
// ❌ 下面这部分代码不会生效，因为它的响应式被破坏了
const { name, doubleCount } = store
name // 将会一直是 "Eduardo" //
doubleCount // 将会一直是 0 //
setTimeout(() => {
  store.increment()
}, 1000)
// ✅ 而这一部分代码就会维持响应式
// 💡 在这里你也可以直接使用 `store.doubleCount`
const doubleValue = computed(() => store.doubleCount)
</script>
```

## useStore

每次某个 store 第一次被 `useXxxStore()` 调用时，这个store才会被初始化加载至内存中。

多次调用 `useXxxStore()` 并不会创建多个相同的store。store在第一次调用 `useXxxStore()` 就已经创建好。



## 从 Store 解构

为了从 store 中提取属性时保持其响应性，你需要使用 `storeToRefs()`。它将为每一个响应式属性创建引用。当你只使用 store 的状态而不调用任何 action 时，它会非常有用。请注意，你可以直接从 store 中解构 action，因为它们也被绑定到 store 上：

```ts
<script setup>
import { storeToRefs } from 'pinia'
const store = useCounterStore()
// `name` 和 `doubleCount` 都是响应式引用
// 下面的代码同样会提取那些来自插件的属性的响应式引用
// 但是会跳过所有的 action 或者非响应式（非 ref 或者 非 reactive）的属性
const { name, doubleCount } = storeToRefs(store)
// 名为 increment 的 action 可以被解构
const { increment } = store
</script>
```

## TS

Store本质上是一个响应式对象（`reactive` 包裹的）。每一个store实例都存在如下属性：

| 属性/方法      | 类型                                       | 说明                | 备注                                |
| -------------- | ------------------------------------------ | ------------------- | ----------------------------------- |
| **$id**        | `string`                                   | store 的唯一 id     | 定义时传入的第一个参数              |
| **$state**     | `object`                                   | 整个 state 对象     | 可整体替换，也能解构出 state        |
| **$patch**     | `(partialState | (state) => void) => void` | 部分/批量修改 state | 推荐用于批量更新                    |
| **$reset**     | `() => void`                               | 重置 state 为初始值 | **仅 Option Store** 默认有          |
| **$subscribe** | `(callback, options?) => () => void`       | 订阅 state 变化     | 返回取消订阅函数                    |
| **$onAction**  | `(callback, after?, error?) => () => void` | 订阅 action 调用    | 可在 action 前后执行逻辑            |
| **$dispose**   | `() => void`                               | 手动销毁 store 实例 | 一般用于测试或动态创建的 store      |
| Action         | function                                   | 同名                | store中定义的action都将直接挂载在此 |
| Getter         | ComputedRefImpl                            | 同名                | store中定义的getter都将直接挂载在此 |
| State          | RefImpl                                    | 同名                | store中定义的state都将直接挂载在此  |



## 生命周期钩子

生命周期钩子只能在setup store中使用。

store 的 `onMounted` **依赖于第一个调用它的组件**

```ts
export const useCountStore = defineStore('count', () => {
  onMounted(() => {
    console.log('store onMounted')
  })

  return {}
})
```

- `onMounted` 必须依赖于 **当前组件的生命周期上下文**。
- Store 本身不是组件，它没有挂载过程。
- 如果你在组件外部调用 `useCountStore()`（比如在模块顶层），此时没有 `setup` 上下文，`onMounted` 也就不会生效。

```ts
// MyComponent.vue
<script setup lang="ts">
import { useCountStore } from '@/stores/count'

const store = useCountStore()

onMounted(() => {
  console.log('component mounted')
})
</script>

```

- 组件挂载时 → `onMounted` 会执行

- Store 里的 `onMounted`，如果调用发生在组件 `setup` 内部，同样会挂到这个组件的生命周期上，也会执行

## 初始化store

### setup store

如果只是想在 **store 创建时**做一些初始化逻辑，不需要用 `onMounted`，直接写在 `defineStore` 里面就行：

```ts
// stores/count.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('count', () => {
  const count = ref(0)

  // ✅ 初始化逻辑（store 一创建就会执行）
  console.log('store initialized')

  function increment() {
    count.value++
  }

  return { count, increment }
})

```

```ts
// 只要调用 useCountStore()，初始化逻辑就会运行
const store = useCountStore()
```

### option store

在action中定义初始化的逻辑，然后调用
