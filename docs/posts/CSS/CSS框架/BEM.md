# BEM

**BEM = Block · Element · Modifier**是一套**解决 CSS 命名混乱、样式耦合、难维护**的问题的规范。

## 基本概念

### Block

**独立、可复用的整体**

- 有明确语义
- 不依赖父级、不依赖标签
- 只用 class 选择器

```css
.block
```



### Element

**Block 的组成部分，脱离 Block 没意义**

- 必须属于某个 Block
- 不体现层级关系，只体现“属于谁”

```css
.block__element
```



### Modifier

**状态 / 样式变化 / 行为变化**

- 不能单独存在
- 必须和原 block / element 一起用

```css
.block--modifier
.block__element--modifier
```



## Example

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

```css
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```





## With SCSS

```css
.card {
  // block

  &__header {}
  &__body {}
  &__footer {}

  &--primary {}
  &--danger {}

  &__button {
    &--disabled {}
  }
}

```

## FAQ

## .block--modifier的意义

首先，由于在同一个 DOM 节点上可以混合多个块和元素，我们需要确保修饰符只影响它所属的块。假设我们有一个菜单项元素和一个按钮混合在一起。在 HTML 中，这种结构由以下标记表示：

```css
<div class="menu__item button"></div>
```

在这种情况下，给它们添加 `.active` 修饰符会影响两者。

```css
<div class="menu__item button active"></div>
```

这三个都位于同一个 DOM 节点上，因此我们无法区分是指 `menu__item.active` 还是 `button.active`。而在前缀情况下，命名 `button--active` 明确表示这仅影响按钮。

另一个点是 CSS 特异性。组合选择器比单个类选择器更具特异性（意味着更重要）。这意味着当你用父级块代码重新定义它们时可能会遇到问题。

```css
<div class="header">
    <button class="button active">
</div>
```

如果你已经在代码中有了 `.button.active` 选择器，那么重新定义的 `.header .button` 的特异性将与修饰符组合选择器的特异性完全相同，这使得你依赖于 CSS 规则声明的顺序。而如果你使用前缀修饰符，你可以始终确信级联选择器 `.header .button` 将会覆盖 `.button--active` 修饰符