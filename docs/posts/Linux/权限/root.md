# root

超级管理员，root用户拥有系统最大的权限

普通用户在HOME目录中是不受限制的，一旦出了HOME目录，普通用户仅有只读和执行的权限。无修改权限



## whoami

查看当前用户名

```sh
whoami
```



## su

> switch user

切换用户

``` sh
su [-] [用户名]
```

- `-`：加载环境变量
- 用户名不写，默认是root



- exit可以退出登录回到上一个用户

- root用户切换至其他用户不需要密码，但是其他用户切换至root用户需要输入密码



## sudo

root用户具有最大权限，不建议长期使用root用户。`sudo` 是在当前用户下，以**管理员权限**执行某条命令的工具，意思是 *“临时借用超级用户权限”*。

```sh
sudo mkdir /demo
```

普通用户使用`sudo`需要有sudo认证：

切换至root用户，执行`visudo`，vim会自动打开`/etc/sudoers`

在文件的最后添加：

```sh
lai ALL=(ALL)    NOPASSWD:ALL
```

此后该用户便可以使用`sudo`执行命令了