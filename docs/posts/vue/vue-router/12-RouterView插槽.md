# RouterView 插槽

RouterView 组件暴露了一个插槽，可以用来渲染路由组件：

```vue
<router-view v-slot="{ Component }">
  <component :is="Component" />
</router-view>
```

上面的代码等价于不带插槽的 `<router-view />`，但是当我们想要获得其他功能时，插槽提供了额外的扩展性。

## KeepAlive & Transition

当在处理 [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html) 组件时，我们通常想要保持路由组件活跃，而不是 RouterView 本身。为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内：

```vue
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
```

类似地，插槽允许我们使用一个 [Transition](https://vuejs.org/guide/built-ins/transition.html) 组件来实现在路由组件之间切换时实现过渡效果：

```vue
<router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
```

我们也可以在 Transition 组件内使用 KeepAlive 组件：

```vue
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```

## 传递 props 和插槽

我们可以利用其插槽给路由组件传递 props 或插槽：

```vue
<router-view v-slot="{ Component }">
  <component :is="Component" some-prop="a value">
    <p>Some slotted content</p>
  </component>
</router-view>
```

实践中通常不会这么做，因为这样会导致所有路由组件**都使用相同的 props 和插槽**。

## 过渡效果

上面的用法会对所有的路由使用相同的过渡。如果你想让每个路由的组件有不同的过渡，你可以将[元信息](https://router.vuejs.org/zh/guide/advanced/meta.html)和动态的 `name` 结合在一起，放在`<transition>` 上：

```ts
const routes = [
  {
    path: '/custom-transition',
    component: PanelLeft,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/other-transition',
    component: PanelRight,
    meta: { transition: 'slide-right' },
  },
]
```

```vue
<router-view v-slot="{ Component, route }">
  <!-- 使用任何自定义过渡和回退到 `fade` -->
  <transition :name="route.meta.transition || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
```

强制在复用的视图之间进行过渡：

```vue
<router-view v-slot="{ Component, route }">
  <transition name="fade">
    <component :is="Component" :key="route.path" />
  </transition>
</router-view>
```

