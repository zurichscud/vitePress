# MouseEvent

## MouseEvent



### type

| 事件类型      | 说明                         |
| ------------- | ---------------------------- |
| `click`       | 鼠标单击（按下 + 抬起）      |
| `dblclick`    | 鼠标双击                     |
| `mousedown`   | 鼠标按下                     |
| `mouseup`     | 鼠标抬起                     |
| `mousemove`   | 鼠标移动时触发               |
| `mouseover`   | 鼠标进入元素时触发（会冒泡） |
| `mouseout`    | 鼠标离开元素时触发（会冒泡） |
| `mouseenter`  | 鼠标进入元素时触发（不冒泡） |
| `mouseleave`  | 鼠标离开元素时触发（不冒泡） |
| `contextmenu` | 右键点击触发菜单             |

### Other Properties


| 属性                                          | 说明                               |
| --------------------------------------------- | ---------------------------------- |
| `clientX` / `clientY`                         | 相对于浏览器可视区域的鼠标坐标     |
| `screenX` / `screenY`                         | 相对于屏幕的坐标                   |
| `button`                                      | 哪个鼠标键被点击（0:左,1:中,2:右） |
| `buttons`                                     | 当前按下的鼠标按钮组合             |
| `ctrlKey` / `shiftKey` / `altKey` / `metaKey` | 是否按下对应修饰键                 |



## WheelEvent

### Class

```ts
Event
 └─ UIEvent
     └─ MouseEvent
         └─ WheelEvent
```

### type

| 属性     | 说明                                |
| -------- | ----------------------------------- |
| 事件类型 | `wheel`                             |
| 触发场景 | 鼠标滚轮滚动、触控板滚动            |
| 事件对象 | `WheelEvent`（继承自 `MouseEvent`） |

```ts
document.addEventListener('wheel', (event) => {
  console.log(event.deltaX, event.deltaY); // 滚动距离
  console.log(event.deltaMode);            // 单位
});
```





### Other Properties

| 属性        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| `deltaX`    | 水平方向滚动量，正值表示向右滚动，负值表示向左滚动           |
| `deltaY`    | 垂直方向滚动量，正值表示向下滚动，负值表示向上滚动           |
| `deltaZ`    | Z 轴滚动量，一般很少使用，默认 0                             |
| `deltaMode` | 滚动单位，枚举值：0 = 像素 (`DOM_DELTA_PIXEL`)1 = 行 (`DOM_DELTA_LINE`)2 = 页 (`DOM_DELTA_PAGE`) |



## PointerEvent

鼠标指针事件

