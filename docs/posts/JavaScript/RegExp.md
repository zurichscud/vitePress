# RegExp

```ts
/ab+c/i; //字面量形式
new RegExp("ab+c", "i"); // 首个参数为字符串模式的构造函数
new RegExp(/ab+c/, "i"); // 首个参数为常规字面量的构造函数
```



## Constructors

### 字面量创建

```ts
const regex1 = /\w+/;

console.log(regex1);
// Expected output: /\w+/
```





### 构造函数

```ts
const regex2 = new RegExp("\\w+");
console.log(regex2);
// Expected output: /\w+/

```



```ts
console.log(regex1 === regex2);
// Expected output: false
```





## Methods

### test

[`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 实例的 **`test()`** 方法使用正则表达式在指定字符串中执行搜索。如果存在匹配，则返回 `true`, 否则返回 `false`。