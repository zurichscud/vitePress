# filter

符合条件的元素将被从数组中过滤出来

## 语法

```ts
array.filter(callbackFn, thisArg)
```

- 该方法对数组中的每个元素依次执行 `callbackFn`，并构建一个新的数组，包含所有符合条件的元素。

- 对于稀疏数组（有空槽的数组），`filter()` 会跳过空槽，不会调用 `callbackFn`。

## Params

**callbackFn**：必选。对数组中的每个元素执行的函数，返回一个布尔值。如果返回 `true`，该元素会被包含在新的数组中；如果返回 `false`，该元素会被过滤掉。

- **element**：当前正在处理的元素。
- **index**：当前元素在数组中的索引（可选）。
- **array**：原数组本身（可选）。

**thisArg**：可选。执行 `callbackFn` 时用作 `this` 的值。



## Return

返回一个新的数组，包含所有通过 `callbackFn` 条件测试的元素。如果没有任何元素通过测试，则返回空数组。



## Example

**筛选大于等于 10 的数字：**

```ts
const numbers = [12, 5, 8, 130, 44];
const filtered = numbers.filter(value => value >= 10);
console.log(filtered); // [12, 130, 44]
```

**根据条件筛选水果：**

```ts
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
const result = fruits.filter(fruit => fruit.includes("ap"));
console.log(result); // ['apple', 'grapes']
```