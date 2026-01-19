# z-index

CSS **`z-index`** 属性设置定位元素及其后代元素或 flex 项目的 Z 轴顺序。z-index 较大的重叠元素会覆盖较小的元素。

`z-index` 属性可以被设置为关键字 `auto` 或 `<integer>`。

z-index就是一个元素在屏幕`Z轴`上的堆叠顺序。`z-index`值越大在`Z轴`上就越靠上，也就是离屏幕观察者越近

其子级层叠上下文的 `z-index` 值只在父级中才有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元

## 层叠上下文

文档中的层叠上下文由满足以下任意一个条件的元素形成：

- `position` + `z-index`（非 auto）
- transform !== none
- opacity < 1
- filter
- flex / grid 子项 + z-index



## auto

默认值。盒子不会创建一个新的局部层叠上下文。盒子在当前层叠上下文的层叠等级是 `0`。

效果：不参与数值比较，**按 DOM 顺序绘制**，后面的元素会盖住前面的

## `<integer>`

`z-index` 决定的是 **元素在「同一个层叠上下文（stacking context）」里的前后顺序**。

z-index只在同一层叠上下文中才有可比性

盒子在当前层叠上下文的层叠等级就是`<integer>`的值。盒子还会创建一个局部层叠上下文。这意味着该元素的后代元素不会和该元素的外部元素比较 `z-index`。

```css
z-index: auto;  /* 默认 */
z-index: 0;
z-index: 1;
z-index: 999;
z-index: -1;

```

