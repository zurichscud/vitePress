# Table

## Props

### **rowKey**

| 类型   | 默认值 | 必传 |
| ------ | ------ | ---- |
| string | id     | 是   |

唯一标识一行数据的字段名，来源于 `data` 中的字段。如果是字段嵌套多层，可以设置形如 `item.a.id` 的方法

### **bordered**

| 类型    | 默认值 | 必传 |
| ------- | ------ | ---- |
| boolean | false  | 否   |

是否显示表格边框

### **cellEmptyContent**

单元格数据为空时呈现的内容。

| 类型                     | 默认值 | 必传 |
| ------------------------ | ------ | ---- |
| String / Slot / Function | -      | 否   |

### **columns**


| 类型                        | 默认值 | 必传 |
| --------------------------- | ------ | ---- |
| `Array<PrimaryTableCol<T>>` | []     | 否   |

列配置，泛型 T 指表格数据类型



### data

| 类型       | 默认值 | 必传 |
| ---------- | ------ | ---- |
| `Array<T>` | []     | 否   |

数据源，泛型 T 指表格数据类型。

### **empty**
| 类型                       | 默认值 | 必传 |
| -------------------------- | ------ | ---- |
| `String / Slot / Function` | `''`   | 否   |

空表格呈现样式，支持全局配置 `GlobalConfigProvider`。

### **height**
| 类型              | 默认值 | 必传 |
| ----------------- | ------ | ---- |
| `String / Number` | -      | 否   |

表格高度，超出后会出现滚动条。示例：`100`, '30%', `'300'`。值为数字类型，会自动加上单位 px。

### **hover**

| 类型      | 默认值  | 必传 |
| --------- | ------- | ---- |
| `Boolean` | `false` | 否   |

是否显示鼠标悬浮状态

### **loading**

| 类型                        | 默认值      | 必传 |
| --------------------------- | ----------- | ---- |
| `Boolean / Slot / Function` | `undefined` | 否   |

加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态。

### **loadingProps**

| 类型                    | 默认值  | 必传 |
| ----------------------- | ------- | ---- |
| `Partial<LoadingProps>` | `false` | 否   |

### **maxHeight**
| 类型              | 默认值 | 必传 |
| ----------------- | ------ | ---- |
| `String / Number` | -      | 否   |


表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px

### **pagination**



| 类型              | 默认值 | 必传 |
| ----------------- | ------ | ---- |
| `PaginationProps` | -      | 否   |

分页配置，值为空则不显示。

## Expose

```ts
 BaseTableInstanceFunctions
```

### **refreshTable**

全部重新渲染表格

### **scrollColumnIntoView**

```ts
(colKey: string)=>void
```

横向滚动到指定列，呈现在可视范围内

### **scrollToElement**

```ts
(params: ComponentScrollToElementParams)
```

纵向滚动到指定行。

```ts
scrollToElement({ index: 100, top: 80, time: 200, behavior: 'smooth' })
```

