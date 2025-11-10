# Array

## constructor

```ts
new Array()
new Array(length)
new Array(element0, element1, ..., elementN)
```

- 无参数：创建空数组

  ```ts
  const arr = new Array()
  console.log(arr) // []
  ```

  

- 传入一个数字参数：创建指定长度的“稀疏数组”

  ```ts
  const arr = new Array(3)
  console.log(arr)      // [ <3 empty items> ]
  console.log(arr.length) // 3
  
  ```

  

- 传入多个参数：创建并初始化数组

  ```ts
  const arr = new Array(1, 2, 3)
  console.log(arr) // [1, 2, 3]
  ```

  

## Array.of 

根据一组参数创建一个新的数组实例

```ts
Array.of(element0[, element1[, ...[, elementN]]])
```



```ts
Array.of(1, 2, 3)
// → [1, 2, 3]

Array.of(7)
// → [7]

Array.of()
// → []

```



:::warning  与 `Array()` 的区别

`Array()` 在参数为一个数字时会创建“空洞数组”，而 `Array.of()` 总是把参数当作元素值。

```ts
Array(7)     // 创建一个长度为7的空数组（稀疏数组）
Array.of(7)  // 创建一个包含单个元素 7 的数组

```

:::

## Array.isArray

判断一个值是否为数组

```ts
Array.isArray(value)
```





## Array.from

用于**从类数组对象或可迭代对象创建一个新的数组实例**

```ts
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

### Params

- [`arrayLike`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from#arraylike)

  想要转换成数组的类数组或可迭代对象。

- `mapFn` <Badge text="可选" />

  调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 `mapFn` 的返回值增加到数组中。使用以下参数调用该函数：

  ​	`element`数组当前正在处理的元素。

  ​	`index`数组当前正在处理的元素的索引。

- `thisArg` <Badge text="可选" />

   可选执行 `mapFn` 时用作 `this` 的值。

### Use

- 把类数组对象转成真正的数组

  ```ts
  Array.from('abc')    // ['a', 'b', 'c']
  Array.from(new Set([1, 2, 3])) // [1, 2, 3]
  
  const divs = document.querySelectorAll('div')
  const arr = Array.from(divs)
  arr.forEach(div => console.log(div))
  
  ```

- `Array.from(arrayLike, mapFn)`

  ```ts
  Array.from([1, 2, 3], x => x * 2)
  // → [2, 4, 6]
  ```

  