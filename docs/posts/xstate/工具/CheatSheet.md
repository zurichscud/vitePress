# CheatSheet

**`on` = 外部事件驱动的状态变化**
 **`invoke` = 进入状态后自动运行的“内部 Actor”**

`on` 用来声明：

> **“当状态处于当前节点，并且收到某个事件时，该怎么反应”**

`invoke` 用来声明：

> **“进入这个状态后，自动启动一个 Actor，并管理它的生命周期”**

**`on` 和 `invoke` 可以同时存在，且互不冲突：**

- `invoke`：**进入状态时自动启动**
- `on`：**状态存活期间随时响应外部事件**

```ts
loading: {
  invoke: {
    src: 'fetchData',
    onDone: { target: 'success' },
    onError: { target: 'error' },
  },
  on: {
    CANCEL: {
      target: 'idle',
    },
  },
}

```

1️⃣ 进入 loading 状态
2️⃣ 立即启动 invoke（fetchData Actor）
3️⃣ loading 状态处于激活状态

- 可以接收外部事件（CANCEL）
- 等待 invoke 完成（done / error）

