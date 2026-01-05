# HTMLElement

`HTMLElement` 是所有 HTML 元素对应 JS 对象的基类接口

## Properties

###  innerHTML

- 类型：string
- 定义：渲染前的HTML 内容

```html
    <div id="box">
      Hello
      <span style="color: red">World</span>
    </div>
```

```ts
box.innerHTML

/*
      Hello
      <span style="color: red">World</span>
*/
```



### outerHTML

- 定义：渲染前，包含自身的 HTML

```ts
box.outerHTML
/*
<div id="box">
      Hello
      <span style="color: red">World</span>
    </div>
    */
```



### innerText

- 类型：string
- 定义：渲染后的不含标签的纯文本（会受CSS样式影响，因为已经渲染）

```ts
box.innerText;    // "Hello World"
```

### textContent

- 类型：string
- 定义：渲染前的原始文本

```ts
box.textContent;  // "\n  Hello\n  World\n"
```





| 属性 / 方法                  | 说明           |
| ---------------------------- | -------------- |
| `style`                      | 行内样式对象   |
| `className`                  | class 字符串   |
| `classList`                  | class 操作集合 |
| `hidden`                     | 是否隐藏       |
| `offsetWidth / offsetHeight` | 布局尺寸       |
| `offsetTop / offsetLeft`     | 相对定位       |
| `getBoundingClientRect()`    | 位置信息       |



## Methods

| 方法                | 说明           |
| ------------------- | -------------- |
| `getAttribute()`    | 获取 HTML 属性 |
| `setAttribute()`    | 设置 HTML 属性 |
| `removeAttribute()` | 移除属性       |
| `hasAttribute()`    | 是否存在       |
