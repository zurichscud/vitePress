# updateAxisPointer

 **在坐标轴指示器（axisPointer）变化时，拿到当前指向的值，并联动更新图表其他部分**。

## 触发

如果设置了

```ts
tooltip: {
  trigger: 'axis',
}
```

只要鼠标在图表上横向移动，就会不断触发 `updateAxisPointer`

## 监听

```ts
myChart.on('updateAxisPointer', function (event) {
  console.log(event)
})

```

## event

`event.axesInfo`是最关键的数据。`axesInfo`是一个数组。**因为一次 axisPointer 更新，可能同时影响“多条轴”**，所以 `axesInfo` 必须是数组。

一次鼠标移动，可能：

- 命中 **x 轴**
- 同时命中 **y 轴**
- 甚至命中 **多个 grid 里的轴**

```ts
{
  axesInfo: [
    {
      axisDimension: 'x',
      axisIndex: 0,
      value: 3,
      seriesDataIndices: [
        {
          seriesIndex: 0,
          dataIndex: 3
        }
      ]
    }
  ]
}

```

| 字段              | 含义                                    |
| ----------------- | --------------------------------------- |
| axisDimension     | x / y                                   |
| axisIndex         | 第几个轴                                |
| value             | **当前 axisPointer 在该 x 轴上的index** |
| seriesDataIndices | 命中的 series / dataIndex               |



| 指向年份 | xAxisInfo.value |
| -------- | --------------- |
| 2012     | 0               |
| 2013     | 1               |
| 2014     | 2               |
| 2015     | 3               |

```vue
<script setup lang="ts">
import type { EChartsOption } from 'echarts'

defineOptions({
  name: 'ChartUnsigned',
})
const value = ref(1)
const chartRef = ref()

const chartOptions = ref<EChartsOption>({
  legend: {},
  tooltip: {
    trigger: 'axis',
    showContent: false,
  },
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
      ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
    ],
  },
  xAxis: { type: 'category' },
  yAxis: { gridIndex: 0 },
  grid: { top: '55%' },
  series: [
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' },
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' },
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' },
    },
    {
      type: 'line',
      smooth: true,
      seriesLayoutBy: 'row',
      emphasis: { focus: 'series' },
    },
    {
      type: 'pie',
      id: 'pie',
      radius: '30%',
      center: ['50%', '25%'],
      emphasis: {
        focus: 'self',
      },
      label: {
        formatter: '{b}: {@2012} ({d}%)',
      },
      encode: {
        itemName: 'product',
        value: '2012',
        tooltip: '2012',
      },
    },
  ],
})

function updateAxisPointer(event: any) {
  const xAxisInfo = event.axesInfo[0]
  if (xAxisInfo) {
    const dimension = xAxisInfo.value + 1
    const oldSeries = chartOptions.value.series[4]
    oldSeries.label.formatter = `{b}: {@${dimension}} ({d}%)`
    oldSeries.encode = {
      value: dimension,
      tooltip: dimension,
    }
  }
}
</script>

<template>
  <div>
    <VChart ref="chartRef" :option="chartOptions" class="h-[500px]" @update-axis-pointer="updateAxisPointer"></VChart>
  </div>
</template>

<style scoped></style>

```

