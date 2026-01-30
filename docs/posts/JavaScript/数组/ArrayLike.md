# ArrayLike

一个对象如果同时具备这些特征，通常就被叫做伪数组：

1. 有 **`length` 属性**
2. 属性名是 **从 0 开始的数字索引**



```ts
const arrLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
```



## 常见伪数组

### arguments

```ts
function test() {
  console.log(arguments)
}
test(1, 2, 3)
```

### DOM 获取的节点集合

返回的是 `NodeList`（伪数组）

```ts
document.querySelectorAll('div')
const divs = document.getElementsByTagName('div') // HTMLCollection
```

