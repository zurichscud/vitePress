# every

`Array.prototype.every()` 方法用于测试数组中的每个元素是否都能通过指定的测试函数。它会依次对数组中的每个元素执行回调函数，直到某个元素不符合条件为止，返回 `false`；如果所有元素都符合条件，则返回 `true`。

## 语法

```ts
every(callbackFn)
every(callbackFn, thisArg)
```

## Params

`callbackFn`：对每个元素执行的函数，返回 `true` 或 `false`，表示元素是否符合条件。

- `element`：当前处理的元素。
- `index`：当前元素在数组中的索引。
- `array`：调用 `every()` 的数组本身。

`thisArg`：可选。执行回调时作为 `this` 的值。

## Return

如果所有数组元素都符合条件，返回 `true`。

如果有一个元素不符合条件，立即返回 `false`

## Example

**检查数组中的所有元素是否都大于10**：

```ts
function isBigEnough(element) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

**检查数组是否是另一个数组的子集**：

```ts
const isSubset = (array1, array2) => array2.every(element => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```