# path

```js
const path = require('path')
```

path的方法支持相对路径、绝对路径字符串。以下都是合法的：

```js
./index.js
../index.js
../
```

`path`默认使用的是当前系统上的path规则。

在Mac上解析：

```js
path.basename('C:\\temp\\myfile.html'); //  C:\temp\myfile.html
```

我们可以指定路径按什么方式进行解析：

- win32

win32方式只支持`\`方式的路径

```js
path.win32.basename('C:\\temp\\myfile.html') // myfile.html
```

- posix

posix方式只支持`/`方式的路径

```js
path.posix.basename('C:\\temp\\myfile.html') // C:\temp\myfile.html
```



## basename()

- 获取路径中的文件名

```js
path.basename('/a/b/c.js')
// c.js

```

- 指定后缀，可以去除文件名中的后缀

```js
console.log(path.basename('/a/b/c.js', '.js'));
```



## dirname()

获取路径的目录

```js
path.dirname('/a/b/c.js')
// /a/b
```



## extname()

- 获取扩展名：

```js
path.extname('/a/b/c.js')
// .js
```

- 如果有多个 **.** 返回最后一个

```js
path.extname('/aaaa/bbbb/cccc/index.html.ccc.ddd.aaa')
//.aaa
```

- 如果没有扩展名返回空

```js
path.extname('/a/b/c') //''
```

- 如果只有一个`.`，则返回`.`

```js
path.extname('/a/b/c.')// .
```

- 扩展名必须在第一个字符之后，否则将视为文件名

```js
path.extname('.gitignore') //''
```

```js
path.extname('.env.local')// '.local'
```





## join()

把多个路径片段拼接成一个规范路径，会自动处理多余的 `/`。

```js
path.join('/user', 'local', 'bin')
// /user/local/bin
```

它会自动处理：

```js
path.join('/user/', '/local/', 'bin') // /user/local/bin
```

```js
path.join('/foo','/cxk','/ikun','../') // /foo/cxk/
```



## resolve()

把一组路径片段解析成一个**绝对路径**

- 如果没有提供绝对路径，resolve 会自动以当前工作目录为起点。

```js
path.resolve('a', 'b')

path.resolve(process.cwd(), 'a', 'b')//与上述代码效果相同
```



::: tip resolve算法

1. 从右往左开始处理参数

2. 一旦遇到绝对路径，停止向左拼接

3. 如果都不是绝对路径，则以 `process.cwd()` 为起点

4. 最终规范化路径（处理 `.` 和 `..`）

```js
path.resolve('/a', 'b', 'c')// /a/b/c
path.resolve('a', '/b', 'c')// /b/c
```



:::

## parse()

解析路径为对象：

```js
path.parse('/a/b/c.js')
```

得到：

```js
{
  root: '/',
  dir: '/a/b',
  base: 'c.js',
  ext: '.js',
  name: 'c'
}

```



## format()

和 `parse` 相反，把对象转回路径。

## sep

路径分隔符

```js
console.log(path.sep);
```

