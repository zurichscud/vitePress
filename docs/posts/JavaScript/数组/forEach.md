# forEach

**`forEach()`** 方法是 JavaScript 数组的一个迭代方法，它会对数组中的每个元素执行指定的回调函数。以下是这个方法的关键点总结

## 语法

```ts
forEach(callbackFn)
forEach(callbackFn, thisArg)
```



- **同步执行**：`forEach()` 是同步的，不会等待异步操作（例如 `Promise`）。

```ts
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// 期望的输出：14
// 实际的输出：0
```

- 对于稀疏数组的空元素，forEach不会执行callback

```ts
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
```

- **不能中断循环**：无法通过 `break` 或 `return` 跳出 `forEach()` 循环。如果需要提前退出，应该使用 `for` 循环或其他方法。

## Params

**callbackFn**：为每个元素执行的回调函数，接受三个参数：

- `currentValue`：当前元素的值。
- `index`：当前元素的索引。
- `array`：调用 `forEach()` 的数组本身。

**thisArg**：可选。指定执行回调时 `this` 的值。



## Return

**无返回值**：与 `map()` 等方法不同，`forEach()` 总是返回 `undefined`，不能进行链式调用。

## Use

- 典型用法：用于遍历数组并对每个元素执行某些操作。

- 不适合做返回值收集（如果需要返回新数组，应该用 `map()`）。

- 适用于简单的副作用操作，如打印日志、修改外部变量等。

## Example

