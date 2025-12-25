# @xstate/vue

用 `@xstate/vue`。 把 `state.value` 当成 **唯一 UI 状态源**。

`@xstate/vue` 本质就是：帮你在 setup() 里创建 actor，并把 snapshot 变成响应式

| 概念     | 含义                             |
| -------- | -------------------------------- |
| machine  | **状态机定义（纯配置，不运行）** |
| actor    | **运行中的状态机实例**           |
| snapshot | **当前状态快照（只读）**         |
| send     | **向 actor 发送事件**            |

## useMachine

```ts
import { useMachine } from '@xstate/vue'
import { feedbackMachine } from './feedbackMachine'

export default {
  setup() {
    const { snapshot, send } = useMachine(feedbackMachine)

    return {
      snapshot,
      send,
    }
  },
}
```



| 返回值   | 含义                                         |
| -------- | -------------------------------------------- |
| snapshot | 当前状态State（value + context + status 等） |
| send     | 发送事件                                     |
| actorRef | actor 引用（进阶用）                         |