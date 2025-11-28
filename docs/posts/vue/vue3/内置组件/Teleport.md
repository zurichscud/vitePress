# Teleport

`<Teleport>` 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。

## 为什么需要Teleport

有时我们可能会遇到这样的场景：一个组件模板的一部分在逻辑上从属于该组件，但从整个应用视图的角度来看，它在 DOM 中应该被渲染在其他地方，甚至在整个 Vue 应用外部。

这类场景最常见的例子就是全屏的模态框。理想情况下，我们希望触发模态框的按钮和模态框本身的代码是在同一个单文件组件中，因为它们都与组件的开关状态有关。但这意味着该模态框将与按钮一起渲染在应用 DOM 结构里很深的地方。这会导致该模态框的 CSS 布局代码很难写。

试想下面这样的 HTML 结构：

```vue
<div class="outer">
  <h3>Tooltips with Vue 3 Teleport</h3>
  <div>
    <MyModal />
  </div>
</div>
```

接下来我们来看看 `<MyModal>` 的实现：

```vue
<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
```

当在初始 HTML 结构中使用这个组件时，会有一些潜在的问题：

- `position: fixed` 能够相对于浏览器窗口放置有一个条件，那就是不能有任何祖先元素设置了 `transform`、`perspective` 或者 `filter` 样式属性。也就是说如果我们想要用 CSS `transform` 为祖先节点 `<div class="outer">` 设置动画，就会不小心破坏模态框的布局！
- 这个模态框的 `z-index` 受限于它的容器元素。如果有其他元素与 `<div class="outer">` 重叠并有更高的 `z-index`，则它会覆盖住我们的模态框。

## 基本用法

`<Teleport>` 提供了一个更简单的方式来解决此类问题，让我们不需要再顾虑 DOM 结构的问题。

### to

`<Teleport>` 接收一个 `to` prop 来指定传送的目标。`to` 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。这段代码的作用就是告诉 Vue“把以下模板片段**传送到 `body`** 标签下”。

```vue
<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
```

### disabled

在某些场景下可能需要视情况禁用 `<Teleport>`。

```vue
<Teleport :disabled="isMobile">
  ...
</Teleport>
```





## 组件效果

通过浏览器的开发者工具，在 `<body>` 标签下找到模态框元素：

`<Teleport>` **只是改变渲染位置，而不改变组件间的逻辑结构**。Vue 的组件树依旧保持不变，因此：

- 子组件仍然属于原来的父组件
-  依然可以正常接收 props
-  事件冒泡依然会触发到父组件
-  依旧可以正常使用 `v-model`、`provide/inject`、`ref` 等

```vue
<template>
  <button @click="show = true">打开</button>

  <Teleport to="body">
    <Dialog v-if="show" @close="show = false" />
  </Teleport>
</template>
```

虽然 `Dialog` 最终挂载到了 `<body>` 下，但逻辑仍然在当前组件内部处理：点击关闭按钮触发 `close` 事件 → 父组件设置 `show = false` → 弹窗消失

## Teleport导致的样式失效

### 1. Scoped CSS的作用机制

当 `<style scoped>` 生效时，Vue 会给当前组件 DOM **自动添加一个唯一的 data 属性**（比如 `data-v-xxxx`），并在 CSS 选择器后附加这个标记，使样式只作用当前组件：

```vue
<div class="btn" data-v-1234></div>
```



```css
/*before*/
.btn {...}

/*after*/
.btn[data-v-1234] { ... }
```

### 2.:deep原理

原选择器：`.t-button__text` 本身必须带有 `data-v-1234`

```css
.t-button__text[data-v-1234] {
  color: red;
}
```

添加了`:deep`：查找带有 `data-v-1234` 的父元素下的 .t-button__text

```css
[data-v-1234] .t-button__text {
  color: red;
}
```

所以 `:deep()` 的关键作用是：**把作用域标记移动到选择器前面，从而覆盖子组件内部结构**



### 3. Teleport特性

Teleport会将其内容**物理移动到**目标容器（如`body`），导致：

- 被移动的元素**失去**原始组件的`data-v-xxx`属性
- 元素不在组件的DOM树内，`:deep()`无法穿透到组件外部

```css
/*选择器失效，因为已被移动至body*/
[data-v-1234] .t-button__text {
  color: red;
}
```

### 4.`:global`

`:global()` 的作用是 **在 `<style scoped>` 中声明全局样式**，让这个选择器不再受作用域属性（如 `data-v-xxxx`）的限制。

```css
/* 在 scoped 下 */
:global(.t-button) {
  font-size: 14px;
}
```

```css
.t-button {
  font-size: 14px;
}
```

:::danger 谨慎使用全局覆盖，避免样式污染

如果要使用`:global`，通常会为使用teleport的组件添加一个自定义样式，防止影响该组件在其他地方的正常样式

:::code-group

```css
:global(.category-cascader .t-cascader__menu) {
  width: 300px;
}
```

```html
<t-cascader
  v-model="categoryId"
  class="category-cascader"
  :options="categoryList"
  placeholder="请选择目标文件夹"
  clearable
  :keys="{ value: 'categoryId', label: 'categoryName', children: 'children' }"
>
</t-cascader>
```

:::

:::

## 多个 Teleport 共享目标

一个可重用的 `<Modal>` 组件可能同时存在多个实例。对于此类场景，多个 `<Teleport>` 组件可以将其内容挂载在同一个目标元素上，而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上，但都在目标元素中。

```vue
<Teleport to="#modals">
  <div>A</div>
</Teleport>
<Teleport to="#modals">
  <div>B</div>
</Teleport>
```

```vue
<div id="modals">
  <div>A</div>
  <div>B</div>
</div>
```

