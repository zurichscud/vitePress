# RouteRecordRaw

它用来**定义单个路由记录（Route Record）**，也就是我们在 `routes` 配置数组中写的每一项的类型。

```ts
export interface RouteRecordRaw {
  path: string
  name?: RouteRecordName
  redirect?: RouteRecordRedirectOption
  alias?: string | string[]
  children?: RouteRecordRaw[]
  meta?: Record<string | number | symbol, unknown>
  component?: RawRouteComponent
  components?: Record<string, RawRouteComponent>
  props?: boolean | Record<string, any> | ((to: RouteLocationNormalized) => Record<string, any>)
  beforeEnter?: NavigationGuardWithThis<undefined> | NavigationGuardWithThis<undefined>[]
  caseSensitive?: boolean
  pathToRegexpOptions?: PathToRegexpOptions
}

```



## Properties

| 字段                  | 类型                            | 说明                                                 |
| --------------------- | ------------------------------- | ---------------------------------------------------- |
| `path`                | `string`                        | 路由路径（必须）。支持动态参数 `/user/:id`。         |
| `name`                | `string`                        | 命名路由（可选），方便使用 `router.push({ name })`。 |
| `component`           | `Component`                     | 对应要渲染的单个视图组件。                           |
| `components`          | `Record<string, Component>`     | 用于命名视图（多个 `<router-view name="...">`）。    |
| `redirect`            | `string | object | (to) => ...` | 重定向。                                             |
| `alias`               | `string | string[]`             | 路径别名，类似副路径。                               |
| `children`            | `RouteRecordRaw[]`              | 子路由。                                             |
| `meta`                | `Record<string, any>`           | 路由元信息，可自定义字段（如 `title`, `icon` 等）。  |
| `props`               | `boolean | object | function`   | 控制如何把路由参数传入组件 props。                   |
| `beforeEnter`         | `NavigationGuard`               | 路由独享守卫。                                       |
| `caseSensitive`       | `boolean`                       | 是否区分路径大小写。                                 |
| `pathToRegexpOptions` | `object`                        | 控制路径匹配的正则配置。                             |



```ts
const routes: RouteRecordRaw[] = [
  {
    path: '/user',
    component: () => import('@/layouts/UserLayout.vue'),
    children: [
      {
        path: 'list', // 实际路径为 /user/list
        name: 'UserList',
        component: () => import('@/views/user/List.vue'),
      },
      {
        path: ':id',
        name: 'UserDetail',
        component: () => import('@/views/user/Detail.vue'),
        props: true, // 自动把 route.params 作为 props 传入组件
      },
    ],
  },
]

```

