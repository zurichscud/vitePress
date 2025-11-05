# indexOf

**`indexOf()`** 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。

## Garmmar

```ts
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```



## Params

- searchElement

  数组中要查找的元素。

- fromIndex  <Badge text="可选"/>

  开始搜索的索引（从零开始）

## Return

首个被找到的元素在数组中的索引位置; 若没有找到则返回 **-1**。

## Example

```ts
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

