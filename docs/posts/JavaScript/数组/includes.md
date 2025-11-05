# includes

**判断一个元素是否存在于数组或字符串中**的方法

## TS

```ts
includes(searchElement: T, fromIndex?: number): boolean;
```



## Params

- [`searchElement`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#searchelement)

  需要查找的值。

- [`fromIndex` 可选](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#fromindex)

  **正值索引**：如果 `fromIndex` 是正数，那么搜索会从数组的这个索引位置开始。

  **负值索引**：如果 `fromIndex` 是负数，它会从数组的末尾开始计算。例如，如果 `fromIndex` 是 -1，它会从数组的最后一个元素开始搜索。



## Return

找到 `searchElement` 值，则该值为 `true`。

## 示例

```ts
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

```ts
const fruits = ['apple', 'banana', 'orange']
fruits.includes('apple') // ✅ true
```

