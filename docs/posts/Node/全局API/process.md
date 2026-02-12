# process

`process`是全局变量无需显式导入模块

## EventEmitter

process 继承了 `EventEmitter`，可以订阅官方指定的event。



## arch

返回操作系统 CPU 架构

```js
process.arch
os.arch()
```



## argv

`process.argv` 是 Node 里用来获取 **命令行参数** 的数组。

假设你执行：

```sh
node demo.js a b c
```

```js
console.log(process.argv)
```

输出会类似：

```js
[
  '/usr/local/bin/node',   // 0：Node 可执行文件路径
  '/Users/xxx/demo.js',    // 1：当前执行文件路径
  'a',                     // 2：第一个参数
  'b',
  'c'
]
```

也就是说：

- `argv[0]` 是 node 路径
- `argv[1]` 是脚本路径
- `argv[2]` 开始才是你真正传的参数

## env

获取操作系统中所有的环境变量。比如系统路径、用户名、端口号、执行模式等等。

```ts
process.env
```

得到一个对象：

```js
{
  PATH: "...",
  HOME: "...",
  NODE_ENV: "development"
}
```

我们可以直接修改这些环境变量，只影响当前 Node 进程，不会影响系统环境变量

> 相当于`process.env`是一个系统的拷贝

在运行Node脚本时，我们也可以传入环境变量，这也会被`process.env`读取到：

```sh
NODE_A=111 node index.js
```





## cwd()

获取Node当前的工作目录

```ts
console.log(process.cwd())
///Users/zurichscud/Developer/ts-demo
```



## exit()

结束当前进程

```ts
process.exit()
```



## kill()

kill用来杀死一个进程，接受一个参数进程id可以通过process.pid 获取

```js
process.kill(process.pid)
```





