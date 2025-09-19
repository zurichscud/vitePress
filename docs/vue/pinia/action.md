# action

Action 相当于组件中的method

## 定义action

可以通过 `defineStore()` 中的 `actions` 属性来定义，**并且它们也是定义业务逻辑的完美选择。**

```ts
export const useCounterStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})
```

类似getter，action 也可通过 `this` 访问**整个 store 实例**，并支持**完整的类型标注(以及自动补全✨)**。**不同的是，`action` 可以是异步的**，你可以在它们里面 `await` 调用任何 API，以及其他 action！

## 调用action

### setup API

```vue
<script setup>
const store = useCounterStore()
// 将 action 作为 store 的方法进行调用
store.randomizeCounter()
</script>
<template>
  <!-- 即使在模板中也可以 -->
  <button @click="store.randomizeCounter()">Randomize</button>
</template>
```

### option API

如果你不喜欢使用组合式 API，你也可以使用 `mapActions()` 辅助函数将 action 属性映射为你组件中的方法。

```ts
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  methods: {
    // 访问组件内的 this.increment()
    // 与从 store.increment() 调用相同
    ...mapActions(useCounterStore, ['increment'])
    // 与上述相同，但将其注册为this.myOwnName()
    ...mapActions(useCounterStore, { myOwnName: 'increment' }),
  },
}
```



## 访问其他 store 的 action

想要使用另一个 store 的话，那你直接在 *action* 中调用就好了：

```ts
import { useAuthStore } from './auth-store'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    preferences: null,
    // ...
  }),
  actions: {
    async fetchUserPreferences() {
      const auth = useAuthStore()
      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      } else {
        throw new Error('User must be authenticated')
      }
    },
  },
})
```



## 私有方法

将方法声明在store外部即可创建私有方法，只供store内部使用。

因为 `this` 在 `actions` 里就是当前 store 实例，所以action函数可以直接访问 `this.state`。 但是私有方法的this并不是state，我们可以将 state传入私有方法：

```ts
function _formatId(id: string, state: { id: string }) {
  console.log('old id:', state.id)
  return id.trim().toUpperCase()
}

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
  }),
  actions: {
    setId(id: string) {
      this.id = _formatId(id, this)
    }
  }
})

```

