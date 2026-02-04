# series

## id

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## emphasis

`emphasis` 是 **ECharts 里控制“高亮 / 强调态”的配置**。

当鼠标 hover、axisPointer 命中、或被程序 highlight 时，这个 series / 数据项“长什么样”

当鼠标 hover 到某一条线时的表现：

```ts
focus?: 'none' | 'self' | 'series'
```

| 值           | 效果                      |
| ------------ | ------------------------- |
| none（默认） | 所有 series 都一样        |
| self         | 只高亮当前数据项          |
| series       | 高亮整条 series，其它变淡 |



## label

`label` 就是 **ECharts 里“文字标注系统”**。

### 只显示

```ts
label: {
  show: true
}
```

### formatter

```ts
label: {
  formatter: '{b}: {@[2]}'
}
```

| 写法      | 含义                          |
| --------- | ----------------------------- |
| `{a}`     | series 名                     |
| `{b}`     | data 名（category / product） |
| `{c}`     | 当前值                        |
| `{d}`     | 百分比（饼图专用）            |
| `{@[n]}`  | dataset 第 n 列               |
| `{@列名}` | dataset 指定列名              |

## 空数据

在一个系列中，可能一个横坐标对应的取值是“空”的，将其设为 0 有时并不能满足我们的期望--空数据不应被其左右的数据连接。

在 ECharts 中，我们使用字符串 `'-'` 表示空数据，这对其他系列的数据也是适用的。

使用`undefined`和`null`也可以表示

```ts
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [0, 22, '-', 23, 19],
      type: 'line'
    }
  ]
};
```

