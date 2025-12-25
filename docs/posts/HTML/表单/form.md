# form

## 提交（submit）行为

###  点击 `type="submit"` 的按钮

```html
<form action="/submit" method="post">
  <button type="submit">提交</button>
</form>
```

- 收集表单内 **所有有 name 的表单控件**

- 按 `method` 指定的方式（`GET` / `POST`）

- 向 `action` 指定的地址发送请求

- **页面会刷新 / 跳转**

::: tip

如果 `action` 为空或未写：则提交到 **当前页面 URL**

:::

### 在输入框中按 Enter 键

等价于点击第一个 submit 按钮



## submit默认行为

提交表单并刷新页面

```html
<form action="/search">
  <input name="q" value="vue" />
</form>
```

提交后的URL：

```ts
/search?q=vue
```

- method` 默认是 `GET

- 表单项必须有 `name` 才会被提交

## 重置（reset）**行为**

```html
<button type="reset">重置</button>
```

- 将表单字段恢复为：`value` 属性的初始值或空值

- **不会触发 submit**

