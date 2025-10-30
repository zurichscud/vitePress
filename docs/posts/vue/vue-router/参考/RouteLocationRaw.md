# RouteLocationRaw

`RouteLocationRaw` 是一个 **类型别名**，用于描述**所有可以作为导航目标（路由跳转参数）**的类型。

“Raw” = 原始的、未经处理的路由输入。

```ts
export declare type RouteLocationRaw = string | RouteLocationPathRaw | RouteLocationNamedRaw;
```

## string

直接跳到某个路径

```ts
router.push('/home')
router.push('about')
```







## RouteLocationPathRaw

基于 `path` 的对象形式

```ts
interface RouteLocationPathRaw {
  path: string
  query?: LocationQueryRaw
  hash?: string
}
```



## RouteLocationNamedRaw

使用命名路由跳转

```ts
interface RouteLocationNamedRaw {
  name?: RouteRecordName
  params?: RouteParamsRaw
  query?: LocationQueryRaw
  hash?: string
}
```

