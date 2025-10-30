# RouteLocation

“标准化后的路由对象”，也就是 Vue Router 内部真正使用的结构。

> `RouteLocationRaw` = 输入（原始地址）
>  `RouteLocation` = 输出（解析结果）

使用router.resolve可以将`RouteLocationRaw` ->`RouteLocation`



## Properties

| 字段             | 说明                        | 类型                       | 来源                               |
| ---------------- | --------------------------- | -------------------------- | ---------------------------------- |
| `fullPath`       | 完整路径，包括 query/hash   | string                     | 拼接 path + query + hash           |
| `path`           | 规范化后的路径              | string                     | 基于 `path` 或 `name` 解析生成     |
| `name`           | 路由名称                    | string \| undefined        | 如果 RouteRecordRaw 有 name 则带上 |
| `params`         | 动态参数                    | Record<string, any>        | 补全了缺失的参数                   |
| `query`          | 查询参数                    | Record<string, any>        | 补全默认空对象                     |
| `hash`           | hash                        | string                     | 补全默认空字符串                   |
| `matched`        | 匹配的路由记录数组          | RouteRecord[]              | 解析匹配的 RouteRecordRaw          |
| `meta`           | meta 信息                   | Record<string, any>        | 从 matched 合并而来                |
| `redirectedFrom` | 重定向来源                  | RouteLocation \| undefined | 如果有 redirect                    |
| `href`           | 可用于 `<a>` 标签的完整路径 | string                     | fullPath 编码后的结果              |