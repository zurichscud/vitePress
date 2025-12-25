# select

## 基本语法

```html
<form action="/submit" method="post">
  <label for="fruit">选择水果：</label>
  <select id="fruit" name="fruit">
    <option value="apple">苹果</option>
    <option value="banana">香蕉</option>
    <option value="orange">橙子</option>
  </select>
  <button type="submit">提交</button>
</form>
```

- **name**：提交表单时的字段名

- **value**：提交时的值（可选，没写则提交文本内容）



## 默认行为

### 单选

- 默认情况下 `<select>` 是单选的
- 只能选择一个 `<option>`

### **默认选中**

- 第一个 `<option>` 默认被选中
- 或者在 `<option selected>` 上显式指定

### 多选

```html
<select name="fruits" multiple size="3">
  <option value="apple">苹果</option>
  <option value="banana">香蕉</option>
  <option value="orange">橙子</option>
</select>
```

- **multiple** 属性：允许多选

- **size** 属性：显示几个可见行【？】

提交时选中的每一项都会作为数组发送：

```html
fruits=apple&fruits=orange
```

### 禁用

````html
<option value="grape" disabled>葡萄</option>
````

