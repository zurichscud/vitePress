# table-layout

**table-layout** 定义了用于表格的单元格、行和列的算法。



## auto

不可控的表格布局

### 基本语法

默认情况下，大多数浏览器使用自动表格布局算法。表格及其单元格的宽度会根据内容自动调整大小。

```css
table {
  width: 250px;
  table-layout: auto;
}
```

特点：

1. **列宽自动计算**：浏览器会根据每列内容的最小宽度和表格总宽度来调整列宽。
2. **表格渲染慢一些**：浏览器需要先读完所有行内容，计算每列宽度，再渲染。

### column width

 在`auto`模式下指定`td`的`width`并没有任何效果

- 对 `white-space: normal`：可以换行 → 最小宽度 = **最长连续不可拆分字符序列宽度**

- 对 `white-space: nowrap`：不换行 → 最小宽度 = **整行文字宽度**

```ts
列宽=max(当前列的所有单元格的最小宽度)
```



### table width

`width` 定义的是 **表格的目标宽度**，不是硬性限制，

浏览器在渲染表格时，会先根据 **每列内容的最小宽度** 计算列宽，然后再尝试 **把表格填充到指定宽度**

**情况 A：内容总最小宽度 < table 宽度**

```ts
table {
  width: 500px;
  table-layout: auto;
}

```

- 每列最小宽度总和 = 300px

- 表格目标宽度 = 500px

- 浏览器会 **按比例拉伸列**（内容多的列可能宽一点）

- 结果：表格刚好填满 500px，总体宽度生效

**情况 B：内容总最小宽度 > table 宽度**

- 每列最小宽度总和 = 600px
- 表格目标宽度 = 500px
- **表格会被撑开到最小宽度总和** → 仍然超过 500px

```ts
table 宽度 = max(所有列最终宽度之和,指定的width)
```





## fixed

### 基本语法

1. **表格宽度固定**：表格宽度由 `table` 的 `width` 决定

2. **内容不影响列宽**：即使内容很长，列宽也不会自动撑开，超出部分会溢出，可配合：

```css
td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

3. **渲染快**：浏览器不需要先扫描整个表格



示例：

```css
table {
  width: 250px;
  table-layout: fixed;
}
td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

效果：

- 表格严格按 250px 宽度显示
- 长内容不会撑开表格，显示省略号

### column width

列宽按以下顺序计算：

1. 如果 `<col>` 或 `<td>` 指定宽度，用指定值
2. 剩余宽度平均分配给没有指定宽度的列

fixed模式下，**内容完全不参与计算**，与width有关，但是列 width 是“比例参与者”，不是裁决者，它们只是参与分配，决定权在 table

- **先锁定 table 总宽度 = 300px**
- **找出所有“明确指定 width 的列”**
- **计算剩余空间**
- **把剩余空间分配给未指定 width 的列**

### table width

:::warning **`table-layout: fixed` 但不设置 `table width` → 等同于 auto**

原因：

- fixed 的“固定分配”前提是 **表格总宽度已知**
- 如果 table 没有宽度，浏览器只能回退到内容驱动(auto)

:::

table width 永远是最终上限

```ts
table {
  width: 250px;
  table-layout: fixed;
}
```

- 表格宽度严格 = 250px
- 列宽按规则固定分配（按 `td` 宽度或平均）
- 内容溢出可以配合 `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` 处理
- 这种情况下，**width 真正控制表格宽度**，不会被内容撑开

