# Router

## Properties

### currentRoute

当前正在激活的路由信息（即你现在所在的页面路由）。

```ts
readonly currentRoute: ShallowRef<RouteLocationNormalizedLoadedGeneric>;
```

当路由变化（如 `router.push()`）时，`currentRoute.value` 会自动更新。

| 对比项   | `router.currentRoute.value`                        | `useRoute()`                                              |
| -------- | -------------------------------------------------- | --------------------------------------------------------- |
| 来源     | 来自 `router` 实例                                 | 来自 Composition API 注入                                 |
| 类型     | `ShallowRef<RouteLocationNormalizedLoadedGeneric>` | `RouteLocationNormalizedLoadedGeneric`（已自动 `.value`） |
| 响应式   | 需要 `.value`                                      | 自动响应更新                                              |
| 常用场景 | 在 `store` 或逻辑函数中使用                        | 在组件 `setup()` 内使用                                   |

### listening



### options

```ts
readonly options: RouterOptions;
```

Original options object passed to create the Router

## Methods

### addRoute

用来在应用运行时向路由器中添加新的路由配置。你可以动态注册新的顶级路由；或者在已有路由下添加**子路由**。

```ts
addRoute(parentName:RouteRecordRaw, route:string): () => void;
```

| 参数名       | 类型             | 说明                                                   |
| ------------ | ---------------- | ------------------------------------------------------ |
| `route`      | `RouteRecordRaw` | 路由配置对象（结构与 `routes` 数组中定义的路由相同）   |
| `parentName` | `string`（可选） | 已存在的父路由名称，若提供则新路由会作为它的子路由添加 |

- 添加顶层路由

```ts
import { useRouter } from 'vue-router'

const router = useRouter()

router.addRoute({
  path: '/about',
  name: 'About',
  component: () => import('@/views/About.vue'),
})

```

- 添加子路由

```ts
{
  path: '/user',
  name: 'User',
  component: () => import('@/views/User.vue'),
}

router.addRoute('User', {
  path: 'profile',
  name: 'UserProfile',
  component: () => import('@/views/UserProfile.vue'),
})

```

return：

`addRoute()` 返回的函数可用于移除该路由：

```ts
const removeAdminRoute = router.addRoute({
  path: '/admin',
  name: 'Admin',
  component: () => import('@/views/Admin.vue'),
})

// 后续想删除该路由
removeAdminRoute()

```





### getRoutes

```ts
getRoutes(): RouteRecordNormalized[];
```





### back

**`router.back()`** 用来让浏览器 **返回到上一个历史记录页面**，等价于手动点击浏览器的「后退」按钮。

```ts
back(): void
```



### afterEach

```ts
afterEach(guard): () => void;
```



### beforeEach

```ts
beforeEach(guard): () => void;
```



### beforeResolve

**`beforeResolve()`** 用来注册一个“全局解析守卫”。 当导航即将被确认（所有的 `beforeEach`、`beforeEnter`、`beforeRouteEnter` 都成功后），且 **异步组件、异步路由都已经解析完毕** 时执行。

```ts
beforeResolve(guard): () => void;
```



### clearRoutes

清空路由表中的所有记录

```ts
clearRoutes(): void;
```

### forward

**`router.forward()`** 用于让浏览器**前进到历史记录中的下一页**，等价于调用：router.go(1)

### go

支持路由的前进和后退

```ts
go(delta): void;
```

### hasRoute

判断给定的路由名是否存在

```ts
hasRoute(name): boolean;
```

### install

**`install()`** 是 Vue 插件规范中的一个固定方法。当你调用 `app.use(router)` 时，Vue 会自动执行 `router.install(app)`。

```ts
install(app): void;
```

### isReady

**`router.isReady()`** 返回一个 Promise，当路由器完成**第一次导航**（即初始路由解析）后，Promise 才会 **resolve（成功）**。

```ts
isReady(): Promise<void>

```

```ts
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },
  ],
})

const app = createApp(App)
app.use(router)

// 等路由准备好再挂载应用
router.isReady().then(() => {
  app.mount('#app')
})

```

### onError

**`router.onError()`**
 用来注册一个**全局错误监听函数**，当路由导航（跳转）过程中出现**未被捕获的异常**时， Vue Router 就会调用这个函数。

```ts
onError(handler): () => void;
```

handler参数：

```ts
(error: any, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded): any;
```

```ts
router.onError((error, to) => {
  NProgress.done()
  console.error('路由错误', error.message)
  console.log('错误路由：', to)
})
```



### push

```ts
router.push(to: RouteLocationRaw): Promise<void | NavigationFailure | undefined>
```



### removeRoute

Remove an existing route by its name.

### replace

**`router.replace()`** 用于**导航到一个新的 URL**，但它会**替换掉当前的历史记录项**（不会新增历史记录）。

```ts
replace(to:RouteLocationRaw): Promise<void | NavigationFailure | undefined>;
```





### resolve

resolve作用是：**解析任意一个“目标路由位置（RouteLocationRaw）”，并返回一个完整的路由对象**，就像是提前“计算”跳转结果一样。

```ts
router.resolve(to: RouteLocationRaw, currentLocation?: RouteLocationNormalizedLoaded): RouteLocation
```

| 参数              | 类型                            | 说明                       |
| ----------------- | ------------------------------- | -------------------------- |
| `to`              | `RouteLocationRaw`              | 目标路由位置               |
| `currentLocation` | `RouteLocationNormalizedLoaded` | 当前路由（可选，一般省略） |
