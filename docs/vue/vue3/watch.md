# watch

侦听器，用于监听响应式数据

```ts
watch(
  source,                     // 监听的对象/数组/getter
  (newVal, oldVal, onCleanup) => {}, // 回调函数
  { immediate: true, deep: true }     // 配置项
)
```

- Val：监听源
- callback：回调函数
- options：可选项

## 监听Ref

###  监听ref创建的基本数据类型

对于基本数据类型的ref直接监听即可

```vue
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

// 监听单个 ref
watch(count, (newVal, oldVal) => {
  console.log(`count 变化: ${oldVal} -> ${newVal}`)
})
</script>

```

### 监听ref创建的引用数据类型

```ts
watch(obj, (newVal, oldVal) => {
  console.log('对象变化:', newVal, oldVal)
}, { deep: true })

```

- 要监听对象内部属性的改变（如 `obj.value.a = 2`），必须加上 `deep: true`。
- 如果不加 `deep: true`，只会在 `obj.value` **整体替换** 时触发。



## 监听Reactive

监视reactive定义的数据，默认开启了深度监视，无法通过`deep:false`关闭。

reactive是Proxy对象，由于newValue和oldValue的地址一样，因此值一样

```ts
const person=reactive({name:'lai',age:12})
watch(person,(val,oldVal)=>{})
```



## 监听 getter

常用于监听响应式对象的某个字段。推荐使用这种方式，性能更好，避免了整个对象的深度遍历。

```vue
<script setup>
import { reactive, watch } from 'vue'

const user = reactive({
  name: '小李',
  age: 20,
})

// 只监听 age
watch(
  () => user.age,
  (newAge, oldAge) => {
    console.log(`年龄变化: ${oldAge} -> ${newAge}`)
  }
)
</script>

```

```ts
watch(() => state.value.age, (newVal, oldVal) => {
  console.log('age 变化:', oldVal, '->', newVal)
})
```





## 监听数组

可以一起监听上述三种类型组成的数组

```vue
<script setup>
import { ref, watch } from 'vue'

const firstName = ref('张')
const lastName = ref('三')

watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  console.log(`姓名变化: ${oldFirst}${oldLast} -> ${newFirst}${newLast}`)
})
</script>

```

## 停止监听

`watch` 会返回一个停止函数，可以手动停止监听：

``` vue
<script setup>
import { ref, watch } from 'vue'

const msg = ref('hi')

const stop = watch(msg, (newVal) => {
  console.log('msg 变化:', newVal)
})

// 2 秒后停止监听
setTimeout(() => {
  stop()
}, 2000)
</script>

```

## option

### immediate

默认值为`false`

```ts
<script setup>
import { ref, watch } from 'vue'

const num = ref(5)

watch(
  num,
  (newVal, oldVal) => {
    console.log('立即执行:', newVal, oldVal)
  },
  { immediate: true }
)
</script>

```

### flush

在 Vue3 里，`watch` 和 `watchEffect` 的回调默认是 **异步执行** 的，执行时机可以通过 `flush` 配置：

- pre：**在组件更新之前** 执行回调

数据变化 → `watch` 回调执行 → 组件渲染更新

- post：**在组件更新之后** 执行回调

 数据变化 → 组件渲染更新 → `watch` 回调执行

## onCleanup

**`onCleanup`**，是 `watch` / `watchEffect` 回调里的第三个参数。它的作用是：**在下次副作用函数执行之前，或者侦听器被停止之前，执行清理逻辑**。

> `onCleanup` = **“在下次执行前把上一次的副作用收拾干净”**。

```ts
const count = ref(0)

watch(count, (newVal, oldVal, onCleanup) => {
  const timer = setInterval(() => {
    console.log('定时任务:', newVal)
  }, 1000)

  onCleanup(() => {
    clearInterval(timer) // 避免内存泄漏
    console.log('清理定时器')
  })
})

```

