# slice    <Badge text="无副作用" />

**提取数组的一部分**并返回一个**新数组**，不会修改原数组。类似Python的切片

## 语法

```ts
slice()          // 无参数
slice(start)     // 仅指定起始索引
slice(start, end)// 指定起始和终止索引
```

## Params

- **start**  <Badge text="支持负数" />

开始位置（包含该索引）

- **end**：  <Badge text="支持负数" />

结束位置（**不包含该索引**）

## Return

含有被提取(切片)元素的新**数组**。

## Example

```ts
const arr = [10, 20, 30, 40, 50]

// 从索引 1 到 3（不包括 3）
console.log(arr.slice(1, 3)) // [20, 30]

// 从索引 2 到末尾
console.log(arr.slice(2)) // [30, 40, 50]

// 复制整个数组
console.log(arr.slice()) // [10, 20, 30, 40, 50]

// 使用负索引
console.log(arr.slice(-2)) // [40, 50]
console.log(arr.slice(1, -1)) // [20, 30, 40]
```

