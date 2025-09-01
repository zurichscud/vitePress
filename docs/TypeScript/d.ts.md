# 声明文件（.d.ts）

TypeScript 编译时要知道变量、函数、类的类型，但有些情况源码里没有类型信息：

**引入的库是 JavaScript 写的**（比如 `lodash`），没有类型。

很多 JS 库没有自带 TS 类型，但社区会提供类型声明包：
 比如 `lodash` 的类型在 `@types/lodash` 里：

一般不会手写，除非写库或声明全局变量，第三方类型通常以`@types`开头



## declare

1. 声明变量 / 常量

```ts
declare const VERSION: string;
declare let count: number;
declare var window: Window;
```

用于告诉 TS 在全局已经存在这些变量，编译时不报错。

2. 声明函数

```ts
declare function alert(message?: any): void;
declare function sum(a: number, b: number): number;
```

- 只声明函数签名，不实现逻辑。

- 常见于第三方库的 `.d.ts`。



3. 声明模块（最常用）

用于告诉 TS：当你 `import xxx from 'xxx.vue'` 时，类型是什么。

```ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

```

```ts
declare module 'lodash' {
  export function cloneDeep<T>(value: T): T;
}
```



## 手写类型库

```ts [express.d.ts]
declare module 'express' {
  // 定义 express 相关类型
  export type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;
  
  export interface Request {
    body: any;
    params: { [key: string]: string };
    query: { [key: string]: string };
    // 其他常用属性可以继续扩展...
  }

  export interface Response {
    send: (body: any) => this;
    status: (code: number) => this;
    json: (data: any) => this;
    // 其他常用方法可以继续扩展...
  }

  export interface NextFunction {
    (): void;
  }

  export interface Express {
    get: (path: string, handler: RequestHandler) => void;
    listen: (port: number, callback: () => void) => void;
    use: (middleware: RequestHandler) => void;
  }

  export function express(): Express;
}

```

```ts
// 导入express模块
import express from 'express';

// 创建一个express应用实例
const app = express();

// 设置一个路由，响应根路径的GET请求
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 监听端口3000，启动服务器
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

```

```ts
const express = require('express');
const app = express();
const router = express.Router();

// 使用路由器来定义路由
router.get('/', (req, res) => {
  res.send('Hello from the Router!');
});

app.use('/router', router); // 将路由器挂载到应用路径上

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```



```ts
interface Express {
  (): App;                    // 可调用部分
  Router: () => Router;       // 属性部分
  //这样写也可以Router(): Router
}
```

表示这个函数同时具有一个名为 `Router` 的属性，该属性本身也是一个函数，调用后会返回类型为 `Router` 的对象

## 声明默认导出

如果模块有默认导出，你可以使用 `declare` 来声明默认导出的类型：

:::code-group

```ts [myModule.js]
// myModule.js
module.exports = function myFunction(message) {
  console.log(message);
};

```

```ts [myModule.d.ts]
// myModule.d.ts
declare module 'myModule' {
  const myFunction: (message: string) => void;
  export default myFunction;
}

```



:::



## 声明模块的其他类型（如常量、对象等）

