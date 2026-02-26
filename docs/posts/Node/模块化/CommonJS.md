# CommonJS

在 Node.js 中，默认使用的模块系统就是 CommonJS。

## 导出

- 导出单个

```js
module.exports = value
```



- 导出多个

```js
exports.a = 1
exports.b = 2
```







## 导入

````js
const obj = require('./a.js')
````



## 原理

Node 在加载文件时，会自动给你包一层函数：

```js
(function (exports, require, module, __filename, __dirname) {
  // 你的代码
})
```

