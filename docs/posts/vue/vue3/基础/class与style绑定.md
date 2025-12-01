# Class与Style绑定

数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。因为 `class` 和 `style` 都是 attribute，我们可以和其他 attribute 一样使用 `v-bind` 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 `class` 和 `style` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。

## Class

### Object

```vue
<div :class="{ active: isActive }"></div>
```

上面的语法表示 `active` 是否存在取决于数据属性 `isActive` 的真假值

你可以在这个object中写多个字段来操作多个 class。此外，`:class` 指令也可以和一般的 `class` attribute 共存。

```vue
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```

渲染结果：

```vue
<div class="static active"></div>
```

### `Array<string>`

我们可以给 `:class` 绑定一个数组来渲染多个 CSS class：

```ts
const activeClass = ref('active')
const errorClass = ref('text-danger')
```

```vue
<div :class="[activeClass, errorClass]"></div>
```

渲染结果：

```vue
<div class="active text-danger"></div>
```

使用三元表达式：

```vue
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

### `Array<Object>`

```vue
<div :class="[{ [activeClass]: isActive }, errorClass]"></div>
```



## Style

### Object

`:style` 支持绑定 JavaScript 对象值

```vue
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

### `Array<Object>`

```vue
<div :style="[baseStyles, overridingStyles]"></div>
```

### 自动前缀

当你在 `:style` 中使用了需要[浏览器特殊前缀](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)的 CSS 属性时，Vue 会自动为他们加上相应的前缀。Vue 是在运行时检查该属性是否支持在当前浏览器中使用。如果浏览器不支持某个属性，那么将尝试加上各个浏览器特殊前缀，以找到哪一个是被支持的。

## 在组件标签上使用class

### 唯一根元素

对于只有一个根元素的组件，当你使用了 `class` attribute 时，这些 class 会被添加到根元素上并与该元素上已有的 class 合并。

```vue
<!-- 子组件模板 -->
<p class="foo bar">Hi!</p>
```

在使用时添加一些 class：

```vue
<!-- 在使用组件时 -->
<MyComponent class="baz boo" />
```

渲染出的 HTML 为：

```vue
<p class="foo bar baz boo">Hi!</p>
```

### 多个根元素

如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class。你可以通过组件的 `$attrs` 属性来指定接收的元素：

```vue
<!-- MyComponent 模板使用 $attrs 时 -->
<p :class="$attrs.class">Hi!</p>
<span>This is a child component</span>
```

```vue
<MyComponent class="baz" />
```

这将被渲染为：

```vue
<p class="baz">Hi!</p>
<span>This is a child component</span>
```

