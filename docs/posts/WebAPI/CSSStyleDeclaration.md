# CSSStyleDeclaration

**`CSSStyleDeclaration`** 接口表示一个对象，它是一个 CSS 声明块，CSS 属性键值对的集合。它暴露了样式信息和各种与样式相关的方法和属性。

CSSStyleDeclaration对象可以通过`getComputedStyle`获取，将 `CSSStyleDeclaration` 对象作为一个**只读**的接口。

也可以直接通过`el.style`获取

## Methods

### getPropertyValue

 **按“CSS 属性名”取值**

获取CSS属性值

虽然可以直接获取CSS属性值，但是对于CSS变量，我们只能使用`getPropertyValue`获取

```ts
const el = document.querySelector('.box')
const style = getComputedStyle(el)

style.getPropertyValue('font-size')   // '16px'
style.getPropertyValue('line-height') // '24px'
style.getPropertyValue('--main-color') // #409eff
```



### setProperty

修改CSS属性。

虽然可以直接修改CSS属性值，但是对于CSS变量，JS 属性名不能带 `--`，你只能使用`setProperty`操作

```ts
style.setProperty(propertyName, value, priority);
```

- *`propertyName`* 是一个 string ，代表被更改的 CSS 属性。



```css
el.style.setProperty('width', '100px')
el.style.setProperty('--size', '20px')
```



