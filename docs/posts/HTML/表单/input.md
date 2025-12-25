# input

## 属性

### type

| type                         | 描述                    |
| ---------------------------- | ----------------------- |
| text                         | 单行文本（默认）        |
| password                     | 密码文本，输入隐藏      |
| email                        | 邮箱，浏览器会校验格式  |
| number                       | 数值，支持 min/max/step |
| url                          | URL 格式校验            |
| tel                          | 电话号码（不强制校验）  |
| checkbox                     | 多选框                  |
| radio                        | 单选按钮                |
| hidden                       | 隐藏域，不显示在页面    |
| file                         | 文件上传                |
| date / time / datetime-local | 日期/时间选择           |
| color                        | 颜色选择                |
| range                        | 滑块选择数值            |

### value

输入的值

### placeholder

占位符

### maxlength

输入文本长度

## type=submit/reset

```html
<input type="submit" value="提交" />
<input type="reset" value="重置" />
```

- **submit / reset** 功能同 `<button>`

- 不在 form 中，只是普通按钮

## type=password

```html
<input type="password" name="pwd" value="123456" />
```

提交结果（POST 或 GET）：

```html
pwd=123456
```



浏览器只是隐藏显示，并不会加密或做安全处理，数据依然明文传输

| 属性      | 说明           |
| --------- | -------------- |
| value     | 初始值或当前值 |
| minlength | 最小长度       |
| maxlength | 最大长度       |
| required  | 必填           |
| pattern   | 正则校验       |

## type=radio

### 默认行为

`<input type="radio">` 用于**单选**，在一组选项中只能选择一个

```html
<form>
  <label>
    <input type="radio" name="gender" value="male" /> 男
  </label>
  <label>
    <input type="radio" name="gender" value="female" /> 女
  </label>
</form>

```

- **`name` 相同表示属于同一组**

- `value` 是提交时的值

- 点击某个 radio：该项变为选中，同组其他项自动取消选中

### 默认选中

```html
<input type="radio" name="pay" value="alipay" checked />
```

- `checked` 表示默认选中

- 同一组**只能有一个 `checked` 生效**

## type=checkbox

 用于 **多选**

### 基本用法

```html
<form>
  <label>
    <input type="checkbox" name="hobby" value="music" />
    音乐
  </label>
  <label>
    <input type="checkbox" name="hobby" value="sport" />
    运动
  </label>
</form>
```

- 可以同时选中多个
- `value` 是提交值
- `name` 决定提交字段名

### 默认行为

- 点击：
  - 未选中 → 选中
  - 已选中 → 取消选中
- **互不影响**（即使 name 相同）

### 默认选中

```html
<input type="checkbox" checked />
```

- `checked` 表示默认勾选

- 可以给多个 checkbox 同时加 `checked`

### 表单提交行为

- 单个checkbox

```html
<input type="checkbox" name="agree" value="yes" />
```

提交的信息：

```ts
agree=yes //勾选时提交
//未勾选则不提交该字段
```

- 多个checkbox

```html
<input type="checkbox" name="fruit" value="apple" checked />
<input type="checkbox" name="fruit" value="banana" checked />
```

提交的信息：

```ts
fruit=apple&fruit=banana
```

