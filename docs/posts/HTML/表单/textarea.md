# textarea

## 基本用法

```html
<form>
  <label for="desc">描述：</label>
  <textarea id="desc" name="desc" rows="4" cols="30">
默认内容
  </textarea>
</form>

```

- **不是自闭合标签**

- 默认值写在 **开始标签和结束标签之间**

- `name` 决定是否参与表单提交

## 默认行为

- **支持多行输入**
- **Enter 键：换行（不会提交表单）**
- 可手动拖拽改变高度（浏览器默认行为）
- 文本会保留换行符 `\n`

## 常用属性

| 属性        | 作用           |
| ----------- | -------------- |
| rows        | 可见行数       |
| cols        | 可见列数       |
| placeholder | 占位提示       |
| maxlength   | 最大长度       |
| minlength   | 最小长度       |
| required    | 必填           |
| readonly    | 只读           |
| disabled    | 禁用（不提交） |

rows和cols一般不使用，会使用CSS调整文本框的宽高

