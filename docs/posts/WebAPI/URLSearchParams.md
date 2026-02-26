# URLSearchParams

**URLSearchParams** 是一个用于处理 URL 查询字符串（query string）的 **标准 Web API 类**。

它在：

- 浏览器
- Node.js
- Deno
- Bun

都是一致的行为。

**URLSearchParams** 是一个：专门为 query 设计的数据结构，支持迭代。支持存储重复的key

## constructor

```js
const params = new URLSearchParams('a=1&b=2')
```



## get

返回第一个值。

```js
const params = new URLSearchParams('a=1&a=2')
params.get('a')//'1'
```

如果不存在，则返回`null`

```js
const params = new URLSearchParams('a=1&a=2')
params.get('b')//null
```





## getAll

返回所有值组成的数组。

- 同一个key单个值

```js
const params = new URLSearchParams('a=1')

console.log(params.getAll('a')) //['a']
```

- 同一个key对个值

```js
const params = new URLSearchParams('a=1&a=2')
params.getAll('a')//['1', '2']
```



## set

覆盖原有值。

```js
const params = new URLSearchParams('a=1&a=2')
params.set('a', '100')//a='100'
```



## append

```js
params.append('a', '200')
```

不会覆盖，会新增：

```js
a=100&a=200
```

## delete

删除所有 a。

```js
params.delete('a')
```

## toString

```js
params.toString() //a=1&b=2
```

