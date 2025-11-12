# for...in

`for...in` 用于 **遍历对象的可枚举属性**（键），或者数组的**索引**【数组的键就是索引】。它和 `for...of` 最大的区别是，`for...in` 遍历的是 **键**，而不是值。

## Grammar

```ts
for (const key in object) {
  // key 是属性名或数组索引（string 类型）
}
```

`for...in` 会遍历对象自身的可枚举属性 **以及** 原型链上可枚举的属性



## Example

#### 1. 遍历对象

```ts
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
}
// 输出：
// a 1
// b 2
// c 3
```

#### 2. 遍历数组

```ts
const arr = [10, 20, 30];

for (const index in arr) {
  console.log(index, arr[index]);
}
// 输出：
// 0 10
// 1 20
// 2 30
```

#### 3.只想遍历自身属性

```ts
for (const key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(key);
  }
}
// 输出：
// childProp
```

