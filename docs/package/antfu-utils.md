# @antfu/utils

> 提供 TypeScript + ESM 友好的、轻量级的通用工具函数（utility functions），类似于一个“现代化的 lodash-lite”。

```sh
pnpm i  @antfu/utils
```

## 1. `Awaitable<T>`

```ts
type Awaitable<T> = T | PromiseLike<T>;
```

### ✅ 含义

代表一个值可以是同步的，也可以是异步（Promise）的。这个在定义“既支持直接返回值又支持返回 Promise”的函数时非常实用。

### 💡 示例

```ts
async function loadData(): Promise<string> {
  return 'ok';
}

function getCachedData(): string {
  return 'cached';
}

function processData(fn: () => Awaitable<string>) {
  // 可以 await 无论是否 Promise
  Promise.resolve(fn()).then(console.log);
}

processData(loadData);
processData(getCachedData);
```

👉 无论传入的是同步函数还是异步函数，类型都能自动兼容。

------

## 2. `Nullable<T>`

```ts
type Nullable<T> = T | null | undefined;
```

### ✅ 含义

表示一个值可能为 `null` 或 `undefined`。

### 💡 示例

```ts
let name: Nullable<string>;

name = 'Zurich';
name = null;
name = undefined;
```

在 Vue / React 等环境里很常见，比如 props、可能为空的 DOM 节点引用等。

------

## 3. `Arrayable<T>`

```ts
type Arrayable<T> = T | Array<T>;
```

### ✅ 含义

允许一个变量既可以是单个元素，也可以是元素数组。

### 💡 示例

```
function toArray<T>(input: Arrayable<T>): T[] {
  return Array.isArray(input) ? input : [input];
}

toArray('hello');     // ['hello']
toArray(['hi', 'yo']); // ['hi', 'yo']
```

------

## 4. `Fn<T>`

```
type Fn<T = void> = () => T;
```

### ✅ 含义

泛用的函数类型定义，代表一个无参数的函数，返回类型为 `T`（默认 `void`）。

### 💡 示例

```ts
const log: Fn = () => console.log('Hello');
const getId: Fn<number> = () => Math.random();
```

常用在回调函数、hook、事件函数的泛型定义中。

------

## 5. `Constructor<T>`

```ts
type Constructor<T = void> = new (...args: any[]) => T;
```

### ✅ 含义

代表一个可以用 `new` 调用的构造函数，其实例类型为 `T`。

### 💡 示例

```ts
function createInstance<T>(Ctor: Constructor<T>): T {
  return new Ctor();
}

class User { name = 'Antfu' }

const u = createInstance(User); // ✅ u: User
```

常用于依赖注入（DI）、工厂模式、Vue 组件构造器等。

------

## 6. `ElementOf<T>`

```ts
type ElementOf<T> = T extends (infer E)[] ? E : never;
```

### ✅ 含义

如果 `T` 是一个数组类型，则提取它的元素类型。否则为 `never`。

### 💡 示例

```ts
type A = ElementOf<string[]>;       // string
type B = ElementOf<number[][]>;     // number[]
type C = ElementOf<null>;           // never
```

这个在做类型推导时特别有用，比如提取泛型数组中元素的类型。