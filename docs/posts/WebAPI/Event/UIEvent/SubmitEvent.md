# SubmitEvent

| 属性     | 说明                                                   |
| -------- | ------------------------------------------------------ |
| 接口     | `SubmitEvent`（继承自 `Event` → `UIEvent` → `Event`）  |
| 事件类型 | `submit`                                               |
| 触发场景 | 表单被提交时触发（点击提交按钮或调用 `form.submit()`） |

## type

```ts
submit
```





## Properties

| 属性        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| `submitter` | 返回触发提交的按钮元素 (`HTMLButtonElement` 或 `HTMLInputElement`)，如果通过 `form.submit()` 调用则为 `null` |