# 创建Node项目

## 方式一

```sh
pnpm init
```

执行后会进入交互模式，让你填写：

- package name
- version
- description
- entry point
- author
- license

完成后会自动生成 `package.json`。



## 方式二

如果不想交互，直接用默认值：

```sh
pnpm init -y
```

会生成一个最基础的 `package.json`：

```json
{
  "name": "当前文件夹名",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```



## node运行JS文件

```
node demo.js
```

