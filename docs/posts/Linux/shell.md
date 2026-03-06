# shell

Shell 是操作系统的**命令解释器**，本质作用是：

- 接收你输入的命令
- 解析并调用系统内核执行
- 返回执行结果

常见的 Shell 有：

- bash（最常用）
- zsh（macOS 默认）
- sh（POSIX 标准简化版）



Shell 启动时会 **读取环境变量并创建自己的运行环境**。



## 配置文件

Shell 配置文件本质上是用来 **控制 shell 启动时的运行环境**，也就是帮你提前设置好一些变量、别名、路径或脚本逻辑，让你打开终端就能用。

- zsh

```sh
~/.zshrc
```

- bash

```sh
~/.bashrc
```

---



- 编辑配置文件

```sh
vim ~/.bashrc
```

- 重新加载配置文件，让配置立即生效

```sh
source ~/.bashrc
```
- source的等价写法

```sh
. ~/.bashrc
```



## 环境变量

在配置文件中可以添加环境变量

```sh
export JAVA_HOME=/usr/local/java
export PATH=$PATH:$JAVA_HOME/bin
```



## 快捷命令（别名）

alias 是 Shell 的快捷命令机制。

```sh
alias 新命令=真实命令
```

```sh
alias acme.sh=~/.acme.sh/acme.sh
```

