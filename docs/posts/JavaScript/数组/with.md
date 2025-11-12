# with  <Badge text="无副作用" />

用于**创建数组的一个修改副本**。它不会改变原数组，而是返回一个新的数组。

## Grammar

```ts
arrayInstance.with(index, value)
```



## Params

- index <Badge text="支持负数" />

要修改的数组索引（从 0 开始）

- value


要分配给指定索引的任何值。

## Return

一个全新的数组，其中 `index` 索引处的元素被替换为 `value`。

## Example

```ts
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

