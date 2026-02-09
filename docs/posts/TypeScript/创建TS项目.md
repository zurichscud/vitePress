# 创建TS项目

每一个TS项目都应该有typescript依赖：

```sh
pnpm add typescript 
```



创建`tsconfig.json`：

```sh
tsc --init
```



编译TS文件：

```sh
tsc index.ts
```

编译TS文件后，同位置会出现相同名字的JS文件



## 查看TS Server 日志

VSCode 使用 `tsserver` 运行 TypeScript，你可以开启日志：

1. 打开命令面板（Cmd+Shift+P / Ctrl+Shift+P）
2. 输入并选择：`TypeScript: Open TS Server Log`



