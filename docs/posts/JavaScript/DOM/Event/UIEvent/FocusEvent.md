# FocusEvent

## Class

```ts
Event
 └─ UIEvent
     └─ FocusEvent

```



## event.type

| 事件类型   | 说明                       |
| ---------- | -------------------------- |
| `focus`    | 元素获得焦点（**不冒泡**） |
| `blur`     | 元素失去焦点（**不冒泡**） |
| `focusin`  | 元素获得焦点（**会冒泡**） |
| `focusout` | 元素失去焦点（**会冒泡**） |



## Properties

| 属性            | 说明                              |
| --------------- | --------------------------------- |
| `relatedTarget` | 焦点从哪个元素来 / 将要去哪个元素 |

```ts
input1.addEventListener('blur', (e) => {
  console.log(e.relatedTarget); // 下一个获得焦点的元素
});

```

