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

```ts
addRoute(parentName, route): () => void;
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

