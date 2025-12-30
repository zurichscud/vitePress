# v-memo

## 基本语法

`v-memo` 用来 **缓存一整块模板**，当你指定的依赖数据都没变化时，Vue 会 **直接复用上一次的渲染结果**，连子组件都不更新。

```vue
<div v-memo="[valueA, valueB]">
  ...
</div>
```

当组件重新渲染，如果 `valueA` 和 `valueB` 都保持不变，这个 `<div>` 及其子项的所有更新都将被跳过。实际上，甚至虚拟 DOM 的 vnode 创建也将被跳过，因为缓存的子树副本可以被重新使用。

`v-memo` 传入空依赖数组 (`v-memo="[]"`) 将与 `v-once` 效果相同。



value通常是响应式数据

## **与 `v-for` 一起使用**

`v-memo` 仅用于性能至上场景中的微小优化，应该很少需要。最常见的情况可能是有助于渲染海量 `v-for` 列表 (长度超过 1000 的情况)：

```vue
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
  <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  <p>...more child nodes</p>
</div>
```

当组件的 `selected` 状态改变，默认会重新创建大量的 vnode，尽管绝大部分都跟之前是一模一样的。`v-memo` 用在这里本质上是在说“**只有当该项的被选中状态改变时才需要更新**”。这使得每个选中状态没有变的项能完全重用之前的 vnode 并跳过差异比较。注意这里 memo 依赖数组中并不需要包含 `item.id`，因为 Vue 也会根据 item 的 `:key` 进行判断。

当 `selected` 从 `2 → 3` 时

| item.id | selected=2 | selected=3 | 是否更新 |
| ------- | ---------- | ---------- | -------- |
| 1       | false      | false      | ❌        |
| 2       | true       | false      | ✅        |
| 3       | false      | true       | ✅        |

::: warning 

当搭配 `v-for` 使用 `v-memo`，确保两者都绑定在同一个元素上。**`v-memo` 不能用在 `v-for` 内部。**

:::
