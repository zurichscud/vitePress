# url

`url` 是 Node.js 内置模块，用来**解析、构造、格式化 URL**。



## parse（已不推荐）

```js
const url = require('url')
const parsed = url.parse('https://example.com?a=1', true)//true → query 会被自动解析成对象
console.log(parsed.query)
```

```js
{a:'1'}
```

```js
const url = require('url')
const parsed = url.parse('https://example.com?a=1&a=2', true)
console.log(parsed.query)
```

```js
{
  a: ['1', '2']
}
```



## URL（现代写法）

用于创建URL对象

```js
const { URL } = require('url')
const myURL = new URL('https://www.example.com:8080/path/index.html?name=zhangsan#top')
console.log(myURL)
```



```js
console.log(myURL.href)       // 完整 URL
console.log(myURL.protocol)   // https:
console.log(myURL.host)       // www.example.com:8080
console.log(myURL.hostname)   // www.example.com
console.log(myURL.port)       // 8080
console.log(myURL.pathname)   // /path/index.html
console.log(myURL.search)     // ?name=zhangsan
console.log(myURL.hash)       // #top
console.log(myURL.searchParams) //URLSearchParams 实例
```

如果要操作url的query参数，建议通过`myURL.searchParams`获取URLSearchParams 实例再进行操作，操作与WebAPI完全相同，这也是推荐使用URL的原因。
