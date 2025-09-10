# infer 关键字



## infer

「infer 关键词」只出现在 **条件类型（conditional type）** 的 **extends 子句** 中，用来「**声明一个类型变量**」，让 TypeScript 在推导类型时把**待匹配位置上的具体类型**捕获下来，供后续使用。

```ts
type Elem<T> = T extends (infer U)[] ? U : never;

type A = Elem<number[]>;      // number
type B = Elem<(string|boolean)[]>; // string | boolean
type C = Elem<Date>;          // never   （不是数组，匹配失败）
```





## 待匹配模式

「待匹配模式」就是 **extends 右侧** 那个**带类型占位符（含 infer）的结构**，它用来**“描述你想从目标类型里拆出什么形状”**。

```ts
T extends 待匹配模式 ? 真分支 : 假分支
```

- **T** 是实际传进来的类型（要拆的东西）
- **待匹配模式** 是**带 infer 的结构模板**，它**必须和 T 的结构对上**才能匹配成功

```ts
type GetPromiseValue<T> =
  T extends Promise<infer V>     // ← 这里 `Promise<infer V>` 就是“待匹配模式”
    ? V
    : never;
```

- 模式：`Promise<infer V>`
- `infer V`相当于起了一个临时变量名V。匹配成功后会将匹配成功的类型赋给
