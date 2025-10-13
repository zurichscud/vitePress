# FormData

`FormData` 是浏览器提供的一个 **Web API 接口**，用于构造一组表示表单字段及其值的键值对，**主要用于发送 `multipart/form-data` 类型的 HTTP 请求**

:::warning

发送FormData类型的数据，浏览器会自动帮我设置**`Content-Type:multipart/form-data`**，不需要我们手动设置

:::

```ts
interface FormData {
  /** 添加一个字段（如果 key 已存在，不会删除旧值，而是追加） */
  append(name: string, value: string | Blob, fileName?: string): void

  /** 删除指定字段（所有同名字段都会被删掉） */
  delete(name: string): void

  /** 获取指定字段的第一个值 */
  get(name: string): FormDataEntryValue | null

  /** 获取指定字段的所有值 */
  getAll(name: string): FormDataEntryValue[]

  /** 判断是否存在某个字段 */
  has(name: string): boolean

  /** 设置字段的值（会替换掉同名的所有值） */
  set(name: string, value: string | Blob, fileName?: string): void

  /** 遍历所有字段 */
  forEach(
    callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void,
    thisArg?: any
  ): void
}

/** 构造函数 */
declare var FormData: {
  prototype: FormData
  new (form?: HTMLFormElement): FormData
}

/** FormData 的值类型：字符串 or 文件 */
type FormDataEntryValue = string | File

```

## constructor

```ts
const form = document.querySelector('form');
const formData = new FormData(form);
```



## append

```ts
append(name: string, value: string | Blob, fileName?: string): void
```

- 形参

| 参数       | 类型           | 说明                                                    |
| ---------- | -------------- | ------------------------------------------------------- |
| `name`     | string         | 字段名（对应 `<input name="xxx">`）                     |
| `value`    | string \| Blob | 字段值；可以是字符串或任何 `Blob`（含 `File`）          |
| `filename` | string         | **可选**，仅当 `value` 是 `Blob` 时生效；显式指定文件名 |

- 示例

```ts
const fd = new FormData();
fd.append('username', 'tom');          // 普通文本
fd.append('avatar', fileInput.files[0]); // 文件（File 是 Blob 的子类）
```

如果传入 `File`，会自动带上 `file.name`。

如果传入 `Blob`，默认文件名是 `"blob"`，可以手动传入 `fileName`。

## 发送

```ts
fetch('/upload', {
  method: 'POST',
  body: formData // 不需要设置 Content-Type，浏览器会自动设置
});
```

