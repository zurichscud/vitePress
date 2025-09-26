# Array

## reduce

```ts
arr.reduce(callback, initialValue?)
```

- **callback** 是一个函数，接受四个参数：
  1. `accumulator`（累加器/累计值）
  2. `currentValue`（当前元素值）
  3. `currentIndex`（当前元素索引，可选）
- **initialValue** 可选，表示accumulator的初始值。如果没有提供，第一次迭代时使用数组的第一个元素作为初始值。

```ts
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10

```

示例：

:::code-group

```ts [累加求和]
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10

```



```ts [将数组转为对象]
const fruits = ['apple', 'banana', 'orange'];

const fruitObj = fruits.reduce((acc, cur) => {
  acc[cur] = cur.length;
  return acc;
}, {} as Record<string, number>);

console.log(fruitObj);
// { apple: 5, banana: 6, orange: 6 }

```

```ts [扁平化数组]
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, cur) => acc.concat(cur), [] as number[]);
console.log(flat); // [1, 2, 3, 4, 5]

```





:::
