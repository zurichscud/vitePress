# copyWithin   <Badge text="副作用" />

 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

## Grammar

```ts
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
```

**`copyWithin(target)`**

- 作用：将数组[0,...]复制至指定位置

**`copyWithin(target, start)`**

- 作用：将数组从 `start` 索引开始的部分复制到目标位置 `target`。目标位置会覆盖原有元素。

**`copyWithin(target, start, end)`**

- 作用：将数组从 `[start,end)`的部分复制到目标位置 `target`，目标位置会覆盖原有元素。

::: tip

copyWithin不会改变数组的长度，这意味着如果`target+[start,end)`大于数组长度的部分将被截断

:::

## Params

**target** (必选)

- 目标位置，指定要开始替换元素的索引位置。索引从 0 开始，负值表示从数组末尾算起。
- 如果 `target` 大于或等于数组长度，什么也不做。

**start** (可选)

- 起始位置，指定要复制的元素序列的起始位置。
- 如果省略，默认为 0。
- 负值表示从数组末尾开始算起。

**end** (可选)

- 结束位置，指定要复制的元素序列的结束位置（不包括该位置的元素）。
- 如果省略，默认为数组的长度。
- 负值表示从数组末尾开始算起。



## Return

改变后的数组。

## Example

```ts
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

