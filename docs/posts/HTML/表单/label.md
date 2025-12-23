# label

`<label>` 是 **HTML 表单里用来描述表单控件含义的标签**，主要作用是提升**可用性、可访问性（a11y）**，以及扩大可点击区域。

## 两种绑定方式

### 方式一：使用 `for` + `id`

```html
<label for="username">用户名</label>
<input id="username" type="text" />
```

规则：

- `label.for` 必须等于控件的 `id`
- 一个 `id` 只能被一个控件使用

效果：

- 点击“用户名” → 输入框获得焦点



### 方式二：包裹控件（隐式关联）

```html
<label>
  用户名
  <input type="text" />
</label>

```

- `label` 内的第一个可关联控件自动绑定
- 适合 **结构简单** 的场景
- 不适合多个控件、复杂布局



## label 能关联哪些元素？

- `input`（除 `type="hidden"`）
- `textarea`
- `select`
- `button`
- `output`
- `meter`
- `progress`

❌ 不能关联：

- `div`
- `span`
- 自定义组件（除非内部是真实表单控件）

## 最佳实践

```html
<label >
  <input type="checkbox" />
  我已阅读并同意
</label>
```

