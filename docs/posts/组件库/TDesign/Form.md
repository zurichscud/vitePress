# Form



## Props

### **rules**

```ts
FormRules<FormData>
```

```ts
type FormRules<T extends Data = any> = { [field in keyof T]?: Array<FormRule> }
```

### **resetType**

```ts
restType:String='empty'
```

重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值。可选项：empty/initial

### colon

- 类型：Boolean

- 默认值：false

是否在表单标签字段右侧显示冒号

## Expose

```ts 
FormInstanceFunctions
```



### **clearValidate**

```ts
(fields?: Array<keyof FormData>)=>void
```

清空校验结果。可使用 fields 指定清除部分字段的校验结果，fields 值为空则表示清除所有字段校验结果。

```ts
clearValidate(['email'])
```

### **reset**

```ts
(params?: FormResetParams<FormData>)=>void
```

重置表单，表单里面没有重置按钮`<button type="reset" />`时可以使用该方法，默认重置全部字段为空，该方法会触发 `reset` 事件。

```ts
interface FormResetParams<FormData> { type?: 'initial' | 'empty'; fields?: Array<keyof FormData> }
```

- 如果表单属性 `resetType='empty'` 或者 `reset.type='empty'` 会重置为空；
- 如果表单属性 `resetType='initial'` 或者 `reset.type='initial'` 会重置为表单初始值。

```ts
reset({ type: 'initial', fields: ['name', 'age'] })
```

:::tip

使用该方法清空表单，不会触发校验结果

:::

### validate

```ts
(params?: FormValidateParams)=>Promise<FormValidateResult<FormData>>
```

校验函数，包含错误文本提示等功能。泛型 `FormData` 表示表单数据 TS 类型。

```ts [FormValidateParams]
interface FormValidateParams {
  fields?: Array<string>
  showErrorMessage?: boolean
  trigger?: ValidateTriggerType
}
```

- **fields**：校验字段，默认全字段校验

- **trigger**：触发校验的范围，默认触发全范围校验

  `blur` 表示只触发校验规则设定为 `trigger='blur'` 的字段

- **showErrorMessage**：表示校验结束后是否显示错误文本提示，默认显示。
- **Return**：返回值为 true 表示校验通过；如果校验不通过，返回值为校验结果列表。



### validateOnly

```ts
(params?: Pick<FormValidateParams, 'fields' | 'trigger'>)=>Promise<FormValidateResult<FormData>>
```

纯净的校验函数，仅返回校验结果，不对组件进行任何操作。使用方法同`validate`



## FormRule

### 内置校验方法

| 名称       | 类型             | 描述                                                         |
| :--------- | :--------------- | :----------------------------------------------------------- |
| boolean    | Boolean          | 内置校验方法，校验值类型是否为布尔类型，示例：`{ boolean: true, message: '数据类型必须是布尔类型' }` |
| date       | Boolean / Object | 内置校验方法，校验值是否为日期格式，示例：`{ date: { delimiters: '-' }, message: '日期分隔线必须是短横线（-）' }`。TS 类型：`boolean \| IsDateOptions` `interface IsDateOptions { format: string; strictMode: boolean; delimiters: string[] }`。 |
| email      | Boolean / Object | 内置校验方法，校验值是否为邮件格式，示例：`{ email: { ignore_max_length: true }, message: '请输入正确的邮箱地址' }`。TS 类型：`boolean \| IsEmailOptions` `import { IsEmailOptions } from 'validator/es/lib/isEmail'`。 |
| enum       | Array            | 内置校验方法，校验值是否属于枚举值中的值。示例：`{ enum: ['primary', 'info', 'warning'], message: '值只能是 primary/info/warning 中的一种' }`。TS 类型：`Array<string>` |
| idcard     | Boolean          | 内置校验方法，校验值是否为身份证号码，示例：`{ idcard: true, message: '请输入正确的身份证号码' }` |
| len        | Number / Boolean | 内置校验方法，校验值固定长度，如：len: 10 表示值的字符长度只能等于 10 ，中文表示 2 个字符，英文为 1 个字符。示例：`{ len: 10, message: '内容长度不对' }`。 如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length === 10, message: '内容文本长度只能是 10 个字' }` |
| max        | Number / Boolean | 内置校验方法，校验值最大长度，如：max: 100 表示值最多不能超过 100 个字符，中文表示 2 个字符，英文为 1 个字符。示例：`{ max: 10, message: '内容超出' }`。 如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length <= 10, message: '内容文本长度不能超过 10 个字' }` 如果数据类型数字（Number），则自动变为数字大小的比对 |
| min        | Number / Boolean | 内置校验方法，校验值最小长度，如：min: 10 表示值最多不能少于 10 个字符，中文表示 2 个字符，英文为 1 个字符。示例：`{ min: 10, message: '内容长度不够' }`。 如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length >= 10, message: '内容文本长度至少为 10 个字' }`。 如果数据类型数字（Number），则自动变为数字大小的比对 |
| number     | Boolean          | 内置校验方法，校验值是否为数字（1.2 、 1e5 都算数字），示例：`{ number: true, message: '请输入数字' }` |
| pattern    | String / Object  | 内置校验方法，校验值是否符合正则表达式匹配结果，示例：`{ pattern: /@qq.com/, message: '请输入 QQ 邮箱' }`。TS 类型：`RegExp \| string` |
| required   | Boolean          | 内置校验方法，校验值是否已经填写。该值为 true，默认显示必填标记，可通过设置 `requiredMark: false` 隐藏必填标记 |
| telnumber  | Boolean          | 内置校验方法，校验值是否为手机号码，校验正则为 `/^1[3-9]\d{9}$/`，示例：`{ telnumber: true, message: '请输入正确的手机号码' }` |
| url        | Boolean / Object | 内置校验方法，校验值是否为网络链接地址，示例：`{ url: { protocols: ['http','https','ftp'] }, message: '请输入正确的 Url 地址' }`。TS 类型：`boolean \| IsURLOptions` `import { IsURLOptions } from 'validator/es/lib/isURL'`。 |
| whitespace | Boolean          | 内置校验方法，校验值是否为空格。示例：`{ whitespace: true, message: '值不能为空' }` |


### 自定义校验函数

`validate`属性设置一个函数可以自定义校验函数

```ts
// 校验器函数类型：返回布尔值或 Promise
type CustomValidator = (val: ValueType) =>
  | CustomValidateResolveType
  | Promise<CustomValidateResolveType>

// 校验结果可返回：boolean 或 对象
type CustomValidateResolveType = boolean | CustomValidateObj

// 自定义返回对象类型
interface CustomValidateObj {
  result: boolean // 校验结果
  message: string // 提示文案
  type?: 'error' | 'warning' | 'success' // 校验类型（可选）
}

// 被校验的值类型，单独声明一个 ValueType，后期可根据业务细化类型，例如：ValueType = string
type ValueType = any

```

- 校验函数支持异步调用

```ts
{
  validator: (val) => {
    if (!val) {
      return {
        result: false,
        message: '此字段不能为空',
        type: 'error',
      }
    }
    return true
  }
}
```

- 常规校验

```ts
{ validator: (val) => val.length > 0, message: '请输入内容'}
```

### trigger


| 名称    | 类型                | 默认值 | 描述         | 必传 |
| :------ | :------------------ | :----- | :----------- | :--- |
| trigger | ValidateTriggerType | change | 校验触发方式 | N    |


```ts [ValidateTriggerType]
type ValidateTriggerType = 'blur' | 'change' | 'submit' | 'all'
```

| 字面量     | 含义               |
| ---------- | ------------------ |
| `'blur'`   | 失去焦点触发校验   |
| `'change'` | 值改变时触发校验   |
| `'submit'` | 提交表单时触发校验 |
| `'all'`    | 所有方式均触发     |
### message

| 名称    | 类型   | 默认值 | 描述                                       | 必传 |
| :------ | :----- | :----- | :----------------------------------------- | :--- |
| message | String | -      | 校验未通过时呈现的错误信息，值为空则不显示 |      |
