# legend

图例是图表中对内容区元素的注释、用不同形状、颜色、文字等来标示不同数据列，通过点击对应数据列的标记，可以显示或隐藏该数据列。图例虽然不是图表中的主要信息、却是了解图表信息的钥匙。

## data

```ts
legend: {
  data: ['2024', '2025'],
}
```

- 显示每个 `series.name` 
- 点击可 **显示 / 隐藏** 对应 series
- 多折线、多柱状图必备

:::warning

`legend.data` 要和 `series.name` 对得上

:::

## 位置 & 布局

```ts
legend: {
  top: 10,
  left: 'center',
  orient: 'horizontal', // horizontal | vertical
}
```

```ts
legend: {
  right: 10,
  top: 'middle',
  orient: 'vertical',
}

```

## 图标类型

```ts
legend: {
  icon: 'circle', // rect | roundRect | triangle | diamond | pin | arrow | none
}
```

## 默认选中 / 关闭

```ts
legend: {
  selected: {
    '2024': true,
    '2025': false,
  },
}
```

