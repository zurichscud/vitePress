# computed

## 基础用法

- 第一次`get`计算属性，`get`方法将执行一次，并会将计算得到的结果存入**缓存**，后续将从缓存读取。computed比使用method的性能更好
- 只有计算属性关联的属性发生了变化，`get` 才会被再次调用

::: code-group

```vue [示例1]
<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('黎世')
const lastName = ref('苏')

// 计算属性：自动依赖 firstName 和 lastName
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})
</script>

<template>
  <div>{{ fullName }}</div>
</template>

```

```vue [示例2]
<script setup lang="ts">
import { reactive, computed } from 'vue'

const user = reactive({
  firstName: '黎世',
  lastName: '苏'
})

const fullName = computed(() => `${user.firstName} ${user.lastName}`)
</script>

```



:::

## 可读可写的计算属性

computed默认是readonly，有时候需要“反向设置值”，可以传入一个对象，包含 `get` 和 `set`：

```ts
<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('黎世')
const lastName = ref('苏')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(value: string) {
    const parts = value.split(' ')
    firstName.value = parts[0] || ''
    lastName.value = parts[1] || ''
  }
})

// 修改 fullName 会自动分解到 firstName 和 lastName
fullName.value = '小明 Lee'
</script>

```

## TS

- 类型自动推导

```ts
import { ref, computed } from 'vue'

const count = ref(10)

// TS 会自动推导类型
const squared = computed(() => count.value * count.value)
// squared 的类型是 ComputedRef<number>

```

- 显式声明类型

```ts
const squared = computed<number>(() => count.value * count.value)
```

