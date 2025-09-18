# setup store

store 的 `onMounted` **依赖于第一个调用它的组件**

## 生命周期钩子

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

