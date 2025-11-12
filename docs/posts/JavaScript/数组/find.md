# find



## Grammar

```ts
find(callbackFn)
find(callbackFn, thisArg)
```



## Params

- `callbackFn:ArrayCallbackFn<boolean>`

  为数组中的每个元素执行的函数。它应该返回一个[真值](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)来表示已经找到了匹配的元素。

- thisArg

  执行 `callbackFn` 时用作 `this` 的值。



## Return

数组中第一个满足所提供测试函数的元素的值，否则返回 `undefined`。

## Example

```ts
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

## findLast

`find`的反向查找

```ts
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

// 库存低时返回 true
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
```

