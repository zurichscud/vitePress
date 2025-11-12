 # findIndex

**`findIndex()`** 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

## Grammar

```ts
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```



## Params

- `callbackFn:ArrayCallbackFn<boolean>`

  为数组中的每个元素执行的函数。它应该返回一个真值以指示已找到匹配元素，否则返回一个假值。

- thisArg

  执行 `callbackFn` 时用作 `this` 的值。

## Return

数组中第一个满足测试条件的元素的索引。否则返回 `-1`。

## Example

```ts
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]

const index = users.findIndex((user) => user.id === 2)
console.log(index) // 1

```



## findLastIndex

`findIndex`的反向查找

```ts
const arr = [5, 12, 50, 130, 44, 12]

const index = arr.findLastIndex(el => el === 12)
console.log(index) // 5  （最后一个 12 的索引）

```

