# RouteLocationNormalizedLoadedGeneric

当路由已经完全解析并加载完毕时的标准化路由结构。

**Normalized（标准化）**：表示路由参数、路径、query 都经过解析与编码处理。

**Loaded（已加载）**：所有匹配的异步组件（`component: () => import(...)`）都已加载完毕。

| 对象                                       | 阶段       | 说明                                        |
| ------------------------------------------ | ---------- | ------------------------------------------- |
| `RouteLocationRaw`                         | 输入阶段   | 你传给 `router.push()` 的对象               |
| `RouteLocationNormalizedGeneric`           | 解析阶段   | Vue Router 内部解析路径后得到的中间态       |
| **`RouteLocationNormalizedLoadedGeneric`** | 已加载阶段 | 当前激活的路由对象（`useRoute()` 的返回值） |

## Extends

[`RouteLocationNormalizedGeneric`](https://router.vuejs.org/api/interfaces/RouteLocationNormalizedGeneric.html)



## Properties

| 属性名               | 类型                     | 说明                                                       |
| -------------------- | ------------------------ | ---------------------------------------------------------- |
| **`fullPath`**       | `string`                 | 完整路径，包含 query 和 hash，例如 `/case/edit?id=1#form`  |
| **`hash`**           | `string`                 | URL 的 hash 部分（以 `#` 开头）                            |
| **`matched`**        | `RouteLocationMatched[]` | 当前路由匹配到的所有路由记录（每个记录都包含已加载的组件） |
| **`meta`**           | `RouteMeta`              | 合并后的 meta 信息，来自所有匹配路由记录                   |
| **`name`**           | `RouteRecordNameGeneric` | 路由名称（如果定义了 `name`）                              |
| **`params`**         | `RouteParamsGeneric`     | 动态路由参数对象，例如 `/user/:id` → `{ id: '123' }`       |
| **`path`**           | `string`                 | 路径部分（不含 query 和 hash），例如 `/case/edit`          |
| **`query`**          | `LocationQuery`          | URL 查询参数，例如 `?a=1&b=2` → `{ a: '1', b: '2' }`       |
| **`redirectedFrom`** | `RouteLocationGeneric    | undefined`                                                 |

```ts
/case/edit/123?tab=info#top
```

那么 `useRoute()`（或 `router.currentRoute.value`）得到的对象大致是：

```ts
{
  fullPath: "/case/edit/123?tab=info#top",
  hash: "#top",
  path: "/case/edit/123",
  name: "case-edit",
  params: { id: "123" },
  query: { tab: "info" },
  meta: { title: "编辑案件" },
  matched: [
    { path: "/case", components: { default: CaseLayout } },
    { path: "edit/:id", components: { default: CaseEdit } }
  ],
  redirectedFrom: undefined
}

```

### fullPath

 Inherited from[`RouteLocationNormalizedGeneric`](https://router.vuejs.org/api/interfaces/RouteLocationNormalizedGeneric.html).[`fullPath`](https://router.vuejs.org/api/interfaces/RouteLocationNormalizedGeneric.html#fullpath)

### redirectedFrom

 Inherited from[`_RouteLocationBase`](https://router.vuejs.org/api/interfaces/RouteLocationBase.html).[`redirectedFrom`](https://router.vuejs.org/api/interfaces/RouteLocationBase.html#redirectedfrom)

```ts
 redirectedFrom : RouteLocationGeneric | undefined
```

当前路由若由重定向产生，则记录原始目标路由；否则为 `undefined`

```ts
const route = useRoute()
const router = useRouter()

// 登录成功后
if (route.redirectedFrom) {
  router.push(route.redirectedFrom.fullPath)
} else {
  router.push('/')
}

```

```ts
router.afterEach((to, from) => {
  if (to.redirectedFrom)
    console.log(`重定向自: ${to.redirectedFrom.fullPath}`)
})

```

