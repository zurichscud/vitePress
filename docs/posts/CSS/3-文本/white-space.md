# white-space

这个属性指定了两件事：

- 空白字符是否[合并](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/white-space#合并空白字符)，以及如何合并。
- 是否换行，以及如何换行。

## values

### normal

- 连续空格会合并成一个

- 遇到容器边界会自动换行

- 忽略多余的换行符

```ts
white-space: normal;
```



### nowrap

- 连续空格合并

- **不自动换行**

- 一行显示，超出容器会溢出

```ts
white-space: nowrap;
```

## 示例

### 控制表格中的换行

:::code-group

```html
<table>
  <tr>
    <td></td>
    <td>拆分后非常长的内容</td>
    <td class="nw">未拆分非常长的内容</td>
  </tr>
  <tr>
    <td class="nw">white-space:</td>
    <td>normal</td>
    <td>nowrap</td>
  </tr>
</table>
```

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
  text-align: center;
}
.nw {
  white-space: nowrap;
}
```





:::

