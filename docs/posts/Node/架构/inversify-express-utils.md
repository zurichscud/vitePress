# inversify-express-utils

`inversify-express-utils` 是基于 **InversifyJS** 的一个扩展库，用来把依赖注入（IoC）和 **Express** 无缝整合起来。

> 它让你可以用“类 + 装饰器”的方式写 Express 接口，并自动通过 Inversify 做依赖注入。

## 创建express

```js
const server = new InversifyExpressServer(container);
```

它会：

1. 扫描所有 `@controller`
2. 从 container 里解析依赖
3. 自动注册到 Express
4. 返回一个配置好的 Express 实例

```js
import 'reflect-metadata';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

const container = new Container();

// 依赖绑定
container.bind(UserService).toSelf();

// 创建服务器
const server = new InversifyExpressServer(container);

//中间件编写在这儿
server.setConfig(app => {
    app.use(express.json()) //接受json
})
const app = server.build();
app.listen(3000);
```



::: tip 最佳实践

`server.build()` 确实返回 Express 实例，但是也已经创建完成了controller。我们希望中间件是在创建controller之前就注册好，因此建议使用

```js
server.setConfig(app => {
    app.use(express.json()) //接受json
})
const app = server.build();
```

而不是

```js
const app = server.build();
app.use(express.json())
```

:::

## 创建Controller

- 非IOC创建路由

```js
app.get('/user', (req, res) => {
  res.send('hello');
});
```

- IOC创建路由

```js
import { controller, httpGet , httpPost } from 'inversify-express-utils'
import { inject } from 'inversify'
import { UserService } from './service'
import type { Request, Response } from 'express'

@controller('/user') //路由
export class UserController {

    constructor(
        @inject(UserService) private readonly userService: UserService, //依赖注入
    ) { }

    @httpGet('/index') //get请求
    public async getIndex(req: Request, res: Response) {
        console.log(req?.user.id)
        const info = await this.userService.getUserInfo()
        res.send(info)
    }

    @httpPost('/create') //post请求
    public async createUser(req: Request, res: Response) {
        const user = await this.userService.createUser(req.body)
        res.send(user)
    }
}
```

| 装饰器          | 作用       |
| --------------- | ---------- |
| `@controller()` | 定义控制器 |
| `@httpGet()`    | GET 请求   |
| `@httpPost()`   | POST 请求  |

写了`@controller('/user')`就相当于也写了`@injectable()`