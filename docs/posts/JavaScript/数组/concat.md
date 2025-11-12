# concat  <Badge text="无副作用" />

合并数组或值



## Grammar

```ts
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* … ,*/ valueN)
```



## Params

- `valueN` 可以是：
  - 单个元素（如数字、字符串、对象等）
  - 另一个数组（会被“展开”一层）

- 如果省略了所有 `valueN` 参数，则 `concat` 会返回调用此方法数组的一个浅拷贝

## Return

返回 **一个新数组**，包含原数组和所有传入的项。

## Example

```ts
const a = [1, 2]
const b = [3, 4]
const c = a.concat(b)

console.log(c) // [1, 2, 3, 4]
console.log(a) // [1, 2] 原数组未改变

```

