# map    <Badge text="无副作用" />

`Array.prototype.map()` 方法是 JavaScript 数组的一个常用方法，它用于通过提供的回调函数将原数组的每个元素映射为一个新数组。



## 语法

```ts
array.map(callbackFn, thisArg)
```

- map方法不会改变数组的数量

## Params

- `callbackFn`：在每个元素上调用的函数，它接受三个参数：
  1. `element`：当前正在处理的元素。
  2. `index`：当前元素的索引。
  3. `array`：原始数组本身。
- `thisArg`（可选）：执行回调函数时使用的 `this` 值。

## Return

`map()` 方法返回一个新数组，每个元素是回调函数的返回值。

## Example

1. **平方数组元素**：

   ```ts
   const numbers = [1, 4, 9];
   const roots = numbers.map((num) => Math.sqrt(num));
   console.log(roots);  // [1, 2, 3]
   ```

2. **重新格式化数组中的对象**：

   ```ts
   const kvArray = [
     { key: 1, value: 10 },
     { key: 2, value: 20 },
     { key: 3, value: 30 },
   ];
   const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
   console.log(reformattedArray);  // [{1: 10}, {2: 20}, {3: 30}]
   ```

3. **数字翻倍**：

   ```ts
   const numbers = [1, 4, 9];
   const doubles = numbers.map((num) => num * 2);
   console.log(doubles);  // [2, 8, 18]
   ```

