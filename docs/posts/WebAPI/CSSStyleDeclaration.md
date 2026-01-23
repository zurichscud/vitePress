# CSSStyleDeclaration

**`CSSStyleDeclaration`** 接口表示一个对象，它是一个 CSS 声明块，CSS 属性键值对的集合。它暴露了样式信息和各种与样式相关的方法和属性。

CSSStyleDeclaration对象可以通过`getComputedStyle`获取，将 `CSSStyleDeclaration` 对象作为一个**只读**的接口。

也可以直接通过`el.style`获取

## Methods

### getPropertyValue

 **按“CSS 属性名”取值**

```ts
const el = document.querySelector('.box')
const style = getComputedStyle(el)

style.getPropertyValue('font-size')   // '16px'
style.getPropertyValue('line-height') // '24px'
style.getPropertyValue('--main-color') // #409eff
```



### setProperty

```ts
style.setProperty(propertyName, value, priority);
```

- *`propertyName`* 是一个 [`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) ，代表被更改的 CSS 属性。



```css
el.style.setProperty('width', '100px')
el.style.setProperty('--size', '20px')
```



