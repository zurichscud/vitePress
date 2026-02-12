# cross-env

`cross-env` 是一个用来**跨平台设置环境变量**的工具。

它解决的问题只有一个：Windows 和 mac / Linux 设置环境变量的语法不一样。

## 安装

```sh
npm install -D cross-env
```



## 为什么需要它？

在 Posix 里可以这样写：

```sh
NODE_ENV=development node index.js
```

但在 Windows（cmd）里不行，必须写成：

```sh
set NODE_ENV=development && node index.js
```

这就导致 package.json 里的 scripts 在不同系统会报错。

## 使用

让你在任何系统都可以统一写：

```js
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development node index.js",
    "prod": "cross-env NODE_ENV=production node index.js"
  }
}
```



```js
console.log(process.env.NODE_ENV)
```

