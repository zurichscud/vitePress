# for...of...

遍历 **可迭代对象**（iterable），比如数组、字符串、Map、Set 等。它比传统的 `for` 或 `for...in` 更直观，也避免了 `for...in` 遍历对象时会遍历到原型链上的属性的问题。

## Grammar

```ts
for (const item of iterable) {
  // 对 item 进行操作
}
```

- `iterable`：任何可迭代对象（有 `[Symbol.iterator]` 方法的对象）

- `item`：`for...of` 循环得到的 `item` 是 **数组元素的浅拷贝**，不是原数组本身。

```ts
const array=[
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
]

for (let item of array) {
    if(item.name==='apples')
        {
           item.quantity=999
        }
}
```

输出结果：

```ts
[
  { name: "apples", quantity: 999 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
]
```

---

```ts
const array=[1,2,3]

for (let item of array) {
    item=666
}
```

输出结果：

```ts
const array = [1, 2, 3];

for (let item of array) {
    item = 666;
}

console.log(array); // [1, 2, 3]

```



## Example

#### 1. 遍历数组

```ts
const arr = [10, 20, 30];

for (const num of arr) {
  console.log(num);
}
// 输出：10 20 30
```

#### 2. 遍历字符串

```ts
const str = "hello";

for (const char of str) {
  console.log(char);
}
// 输出：h e l l o
```

#### 3. 遍历 Set

```ts
const set = new Set([1, 2, 3]);

for (const val of set) {
  console.log(val);
}
// 输出：1 2 3
```

#### 4. 遍历 Map

```ts
const map = new Map([['a', 1], ['b', 2]]);

for (const [key, value] of map) {
  console.log(key, value);
}
// 输出：a 1  b 2
```