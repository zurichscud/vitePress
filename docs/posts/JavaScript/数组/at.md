# at

**`at()`** 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。



## Garmmar

```ts
at(index)
```



## Params

- index

要返回的数组元素的索引（从零开始）



## Return

返回数组中与给定索引匹配的元素

- 如果是**原始类型**（number、string、boolean 等）

修改返回值**不会影响原数组**，因为它们是值拷贝。

```
const arr = [1, 2, 3];
let item = arr.at(1); // 2
item = 10;
console.log(arr); // [1, 2, 3] ✅ 原数组不变
```

- 如果是**引用类型**（对象、数组等）

修改返回的元素**会影响原数组**，因为它们指向同一个引用。

```
const arr = [{ a: 1 }, { b: 2 }];
const item = arr.at(1);

item.b = 99;
console.log(arr); // [{ a: 1 }, { b: 99 }] ❗ 原数组被修改
```