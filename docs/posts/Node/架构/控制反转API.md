# 控制反转API

## 安装与配置

`Inversify` 是一个用于 TypeScript 和 JavaScript 的轻量级依赖注入（DI）库，`reflect-metadata` 则是它依赖的一个库，用于支持 TypeScript 中的装饰器和元数据功能。结合使用这两个库，可以轻松实现基于装饰器的依赖注入。

```js
npm i inversify reflect-metadata
```

然后，确保在 TypeScript 项目中启用装饰器和反射元数据，编辑你的 `tsconfig.json`：

```json [tsconfig.json]
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```





## 创建IOC容器

```js
import { Container } from "inversify";

const container = new Container();
```

## 依赖注入

首先，我们定义 `Engine` 接口和它的实现类 `GasEngine`：

```ts
// Engine.ts
export interface Engine {
  start(): string;
}

@injectable()  // 使用 @injectable 装饰器标记该类可以被注入
export class GasEngine implements Engine {
  start(): string {
    return "Gas engine started!";
  }
}
```

然后，定义 `Car` 类，它依赖于 `Engine`：

```js
// Car.ts
import { Engine } from './Engine';
import { injectable, inject } from "inversify";

@injectable()  // 使用 @injectable 装饰器标记该类可以被注入
export class Car {
  private engine: Engine;

  constructor(@inject("Engine") engine: Engine) {  // 使用 @inject 装饰器注入 Engine 依赖
    this.engine = engine;
  }

  startCar() {
    console.log(this.engine.start());  // 调用引擎的 start 方法
  }
}
```

- `@injectable()`：给类打上“可注入”标记。告诉容器，这个类是允许被容器实例化的。
- `@inject("Engine")`：将 `Engine` 类型的依赖注入到 `Car` 类中。这里 `@inject` 装饰器的参数 `"Engine"` 是在容器中用来标识依赖的标识符。



## 依赖注册与绑定


### bind

在IOC容器中存在如下的数据结构，用于存储标识符和实现类之间的绑定关系

```js
Map<ServiceIdentifier, Binding[]>
```

- ServiceIdentifier：标识符，支持`string`，`symbol`，`class`
- Binding：相关实现

---

- 使用`class`

```ts
container.bind(Car).toSelf();
```

::: tip 标识符为什么可以使用class？

因为 **类本身就是一个运行时存在的唯一标识符**，构造函数本身就是一个对象（函数对象），适合作为标识符

:::

- 使用`string`

```js
container.bind("Engine").to(GasEngine);
```



- 同一个标识符可以绑定多个实现。

```js
container.bind(Weapon).to(Sword)
container.bind(Weapon).to(Gun)
```



### to

```js
container.bind(接口标识符).to(具体实现类)
```

```js
container.bind("Engine").to(GasEngine);
```



### toSelf

标识符和实现类相同

```js
container.bind(Car).toSelf()
```

等价于：

```js
container.bind(Car).to(Car)
```

## 创建实例

### get

`container.get()` 是 Inversify 里**真正触发实例创建**的方法。

```js
container.get(Key)
```

- Key：ServiceIdentifier，在IOC容器中注册的标识符

```js
// 从容器获取 Car 实例并启动
const myCar = container.get<Car>(Car);
```
