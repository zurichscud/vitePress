# some

`Array.prototype.some()` 方法用于测试数组中是否至少有一个元素满足提供的条件函数。只要有一个元素使得该条件函数返回 `true`，就会立即返回 `true`；否则，返回 `false`。它不会修改原数组。

## 语法

```ts
array.some(callbackFn, thisArg)
```

- 如果 `callbackFn` 对某个元素返回 `true`，`some()` 会立即停止并返回 `true`。
- 如果所有元素都未满足条件，返回 `false`。
- 对稀疏数组（即存在空槽的数组），`some()` 不会检查这些空槽。
- 不会修改原数组，但 `callbackFn` 可以修改数组的元素。

::: warning

如果数组为空，`some()` 会直接返回 `false`。

`some()` 类似于数学中的“存在量词（∃）”，用于测试数组中是否存在满足特定条件的元素。

:::

## Params

**callbackFn**：一个用于测试数组元素的函数，返回值为 `true` 或 `false`。该函数接收三个参数：

- `element`：当前数组元素
- `index`：元素的索引
- `array`：调用 `some()` 的数组本身

**thisArg**（可选）：在 `callbackFn` 中使用的 `this` 值。

## Return

**`true`**：如果至少有一个元素满足条件（`callbackFn` 返回 `true`）。

**`false`**：如果没有元素满足条件。

## Example

**检查是否有大于 10 的元素**：

```ts
const arr = [5, 8, 12, 3];
const result = arr.some(x => x > 10); // 返回 true
```

**使用箭头函数检查是否包含特定元素**：

```ts
const fruits = ["apple", "banana", "cherry"];
const hasBanana = fruits.some(fruit => fruit === "banana"); // 返回 true
```

**检查是否有真值（如 `1`, `"true"`, `true`）**：

```ts
const values = [0, null, false, "true"];
const hasTruthy = values.some(value => Boolean(value)); // 返回 true
```