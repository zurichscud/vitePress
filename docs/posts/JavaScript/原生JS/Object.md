# Object

## keys

返回自身可枚举属性的键名数组（不含 Symbol）。

``` ts
keys(o: object): string[];
```

## values

`Object.values(obj)` 会返回对象自身 **可枚举属性** 的 **值**，以数组形式返回。

```ts
values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];
```

```ts [示例]
const obj = { a: 1, b: 2, c: 3 };

const values = Object.values(obj);
console.log(values); // [1, 2, 3]

```



## entries

`Object.entries(obj)` 会返回一个二维数组，每个元素是 `[key, value]`

```ts
entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];
```

```ts [示例]
const obj = { a: 1, b: 2, c: 3 };

const entries = Object.entries(obj);
console.log(entries); 
// [['a', 1], ['b', 2], ['c', 3]]

```





## assign

```ts
  assign<T, U>(target: T, source: U): T & U;
```

