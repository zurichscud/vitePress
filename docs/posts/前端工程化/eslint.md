# eslint

```sh
pnpm i -D eslint
```



eslint默认只支持JS语法检查，检查其他语法需要安装插件

https://www.cnblogs.com/guangzan/p/14057876.html

## rules

0：忽略，1：警告，2：报错





## plugins





## settings

`import/extensions` 告诉 `eslint-plugin-import`：

在解析模块路径时，**这些后缀名是可以省略的**，插件会依次尝试补全它们。

```ts
settings: {
  'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
}
```

假设你有如下代码：

```js
import utils from './utils';
```

- 如果 `settings['import/extensions']` 只包含了 `.ts`，
- 那么插件会尝试查找 `./utils.ts`，而不是只找 `./utils.js`。
