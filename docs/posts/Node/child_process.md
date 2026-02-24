# child_process

`child_process` 是 **Node.js 内置模块**，用于在当前 Node 进程中创建子进程，执行shell命令。

```js
const cp = require('child_process')
```

## 可执行文件

```js
execFile('node', ['-v'])
```

操作系统会：

1. 在当前目录找 `node`
2. 去 `PATH` 环境变量里找
3. 在 Windows 上自动尝试补全扩展名

例如：

```js
node
→ node.exe
→ node.cmd
→ node.bat
```

在 Windows 中，真正被执行的是：

```js
node.exe
```

不同操作系统的可执行文件类型不同：

```js
.COM;.EXE;.BAT;.CMD;...
```

在 **macOS（本质是类 Unix 系统）** 里，“可执行文件”不像 Windows 那样依赖扩展名（`.exe`、`.bat`），而是依赖：文件权限 + 文件类型

```js
/bin/ls
/usr/bin/node
/usr/bin/git
```

因为 Unix 系统从设计之初就是：

> 一切皆文件

只要：

- 文件格式正确
- 有执行权限

系统就能运行。

例如`mkdir`是一个真实存在的可执行文件：

```sh
which mkdir
/bin/mkdir
```

node也是一个真实存在的可执行文件：

```js
which node
/Users/zurichscud/.nvm/versions/node/v22.18.0/bin/node
```



## exec/execSync()

执行一条完整的 shell 命令。详细点说，就是通过 shell 执行“命令字符串”

特点：

- 会开启 shell
- 结果一次性返回
- 有最大缓冲区限制（默认 1MB）
- 适合执行小命令



```js
 exec('node -v',(err,stdout,stderr)=>{
    if(err){
        return  err
    }
    console.log(stdout.toString())
 })

```

配有同步方法：`execSync`

```js
const nodeVersion  = execSync('node -v')
console.log(nodeVersion.toString("utf-8"))
```

`exec`的底层通过`execFile`实现

## execFile/execFileSync()

`execFile` 直接执行“可执行文件”。

- 示例一

```js
const { execFile } = require('child_process');

execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

//node是可执行文件，系统会在 PATH 环境变量里查找它。
```

- 示例二

```js
execFile(path.resolve(process.cwd(),'./bat.cmd'),null,(err,stdout)=>{
    console.log(stdout.toString())
})
```

`execFile`底层通过`spawn`实现

 `exec`和`execFile`的区别：

|            | exec     | execFile |
| ---------- | -------- | -------- |
| 参数形式   | 字符串   | 数组     |
| 谁解析参数 | shell    | 操作系统 |
| 是否安全   | 容易注入 | 更安全   |



## spawn/spawnSync()

`spawn`适合流式输出

```js
//              命令      参数  options配置
const {stdout} = spawn('netstat',['-an'],{})

//返回的数据用data事件接受
stdout.on('data',(steram)=>{
    console.log(steram.toString())
})

```

特点：

- 不会开启 shell（默认）
- 数据流式返回
- 没有缓冲区限制
- 更底层、更高性能

## fork()

用于启动另一个 Node 进程，并且可以通信。

```js [index.js]
const {fork} = require('child_process')

const testProcess = fork('./test.js')

testProcess.send('我是主进程')

testProcess.on("message",(data)=>{
    console.log('我是主进程接受消息111：',data)
})
```



```js [test.js]
process.on('message',(data)=>{

    console.log('子进程接受消息：',data)
})

process.send('我是子进程')
```

