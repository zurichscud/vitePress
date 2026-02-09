# yarn

## 配置文件

### .yarnrc

Yarn V1使用的是类ini语法，value如果是字符串需要使用**双引号**包裹，否则会导致当前key不生效：

```ini
registry "https://registry.npmmirror.com"
electron_mirror "https://registry.npmmirror.com/-/binary/electron/"
electron_builder_binaries_mirror "https://registry.npmmirror.com/-/binary/electron-builder-binaries/"
```

.yarnrc仅支持yarn v1



### yarn.yml

**Yarn v2+ **使用 `.yarnrc.yml`（YAML 格式）：

```yaml
npmRegistryServer: "https://registry.npmmirror.com"
enableGlobalCache: true
```





## 镜像

- 查看镜像

```sh
yarn config get registry
# 默认镜像源：https://registry.yarnpkg.com
```

- 在项目`.yarnrc`中配置镜像源【项目级】

```ini [.yarnrc]
registry "https://registry.npmmirror.com"
```

- 命令行配置镜像源【全局级】

该命令将更改 **当前登录用户** 的配置文件

``` sh
yarn config set registry https://registry.npmmirror.com
```





## 命令

yarn命令与npm命令不完全相同



### 查看pkg所有的版本

```sh
yarn info <pkg> versions
```



### 查看pkg最新的版本

```sh
yarn info <pkg> version
```



