# InputEvent

```ts
EventTarget
 └─ Event
     └─ UIEvent
         └─ InputEvent

```



## type

| 事件名  | 说明                               |
| ------- | ---------------------------------- |
| `input` | **值发生变化时立即触发（最常用）** |



## Properties

### data

本次输入的字符

删除 / 粘贴 / 撤销时为 `null`

```ts
输入 a   → "a"
删除    → null
粘贴    → null

```

### inputType

描述“**输入行为的类型**”：

| 值                      | 含义     |
| ----------------------- | -------- |
| `insertText`            | 普通输入 |
| `deleteContentBackward` | 退格     |
| `deleteContentForward`  | Delete   |
| `insertFromPaste`       | 粘贴     |
| `insertFromDrop`        | 拖拽     |
| `insertLineBreak`       | 回车     |
| `historyUndo`           | 撤销     |
| `historyRedo`           | 重做     |





### isComposing

是否处于 **输入法组合状态**

中文输入非常重要

```ts
if (e.isComposing) return

```

