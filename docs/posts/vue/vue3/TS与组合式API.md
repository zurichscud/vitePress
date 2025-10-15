# TS与组合式API

## 为组件的 props 标注类型

```ts
<script setup lang="ts">
const props = defineProps<{
  foo: string
  bar?: number
}>()
</script>
```

这被称之为“基于类型的声明”。编译器会尽可能地尝试根据类型参数推导出等价的运行时选项。

## withDefaults

```ts
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

## 为组件的 emits 标注类型

在 `<script setup>` 中，`emit` 函数的类型标注也可以通过运行时声明或是类型声明进行：

```vue
<script setup lang="ts">
// 运行时
const emit = defineEmits(['change', 'update'])

// 基于选项
const emit = defineEmits({
  change: (id: number) => {
    // 返回 `true` 或 `false`
    // 表明验证通过或失败
  },
  update: (value: string) => {
    // 返回 `true` 或 `false`
    // 表明验证通过或失败
  }
})

// 基于类型
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

// 3.3+: 可选的、更简洁的语法
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
</script>
```

## 为响应式数据标注类型

ref 会根据初始化时的值推导其类型：

```ts
import { ref } from 'vue'

// 推导出的类型：Ref<number>
const year = ref(2020)

// => TS Error: Type 'string' is not assignable to type 'number'.
year.value = '2020'
```

在调用 `ref()` 时传入一个泛型参数，来覆盖默认的推导行为：

```ts
// 得到的类型：Ref<string | number>
const year = ref<string | number>('2020')

year.value = 2020 // 成功！
```

```ts
const double = computed<number>(() => {
  // 若返回值不是 number 类型则会报错
})
```

```ts
import { reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 指引' })
```

## 为 provide / inject 标注类型

```ts
const foo = inject<string>('foo', 'bar') // 类型：string
```

## 为模板引用标注类型

为了获取导入组件的实例类型，我们需要先通过 `typeof` 获取其类型，然后使用 TypeScript 的内置 `InstanceType` 工具提取其实例类型：

```vue
<script setup lang="ts">
import { useTemplateRef } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

type FooType = InstanceType<typeof Foo>
type BarType = InstanceType<typeof Bar>

const compRef = useTemplateRef<FooType | BarType>('comp')
</script>

<template>
  <component :is="Math.random() > 0.5 ? Foo : Bar" ref="comp" />
</template>
```



## 为自定义全局属性添加类型 <Badge text="未成功" type="warning" />



[官方文档](https://cn.vuejs.org/guide/typescript/options-api.html#augmenting-global-properties)

通过 [`app.config.globalProperties`](https://cn.vuejs.org/api/application.html#app-config-globalproperties) 声明的属性我们可以为其添加类型

Vue 暴露了一个被设计为可以通过 [TypeScript 模块扩展](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)来扩展的 `ComponentCustomProperties` 接口：

```ts
import axios from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $translate: (key: string) => string
  }
}
```

为了利用模块扩展的优势，你需要确保将扩展的模块放在 [TypeScript 模块](https://www.typescriptlang.org/docs/handbook/modules.html) 中。 也就是说，该文件需要包含至少一个顶级的 `import` 或 `export`，即使它只是 `export {}`。如果扩展被放在模块之外，它将覆盖原始类型，而不是扩展!



```ts
// 不工作，将覆盖原始类型。
declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}
```



```ts
// 正常工作。
export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}
```
