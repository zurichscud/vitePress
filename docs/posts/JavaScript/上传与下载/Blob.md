# Blob

二进制大对象 (Binary Large Object)，可以看作是一个**不可变的二进制数据块**，例如：图片、音频、视频、文档，甚至是任意字节数据。

## ts

```ts
interface Blob {
  /** 二进制数据的大小，单位字节（B） */
  readonly size: number

  /** MIME 类型，例如 "text/plain"、"image/png" */
  readonly type: string

  /** 截取指定范围的内容，返回一个新的 Blob */
  slice(start?: number, end?: number, contentType?: string): Blob

  /** 将内容读取为字符串 */
  text(): Promise<string>

  /** 将内容读取为 ArrayBuffer */
  arrayBuffer(): Promise<ArrayBuffer>

  /** 将内容读取为 ReadableStream */
  stream(): ReadableStream<Uint8Array>
}

/** Blob 构造函数的类型 */
declare var Blob: {
  prototype: Blob
  new (blobParts?: BlobPart[], options?: BlobPropertyBag): Blob
}

/** BlobPart 可以是字符串、ArrayBuffer、TypedArray、DataView、Blob */
type BlobPart = BufferSource | Blob | string

/** 构造 Blob 时的配置 */
interface BlobPropertyBag {
  type?: string // MIME 类型
  endings?: 'transparent' | 'native'
}

```



## constructor

构造Blob：

```ts
const blob = new Blob(parts?: BlobPart[], options?: BlobPropertyBag)
```

**`parts`**: 一个数组，每个元素可以是：

- `ArrayBuffer`
- `TypedArray`
- `DataView`
- `Blob`
- `DOMString`（字符串）

**`options`**:

- `type`: MIME 类型（如 `text/plain`, `image/png`）

```ts
const blob = new Blob(['Hello World'], { type: 'text/plain' })
console.log(blob.size) // 11
console.log(blob.type) // "text/plain"
```

File是Blob的子类，因此可以直接传入Blob的构造函数，将File对象转为Blob对象

```ts
const file=new File(['hello'])
cnst blob=new Blob(file)
```

## slice

```ts
slice(start?: number, end?: number, contentType?: string): Blob;
```

- 形参

| 参数名        | 类型     | 说明                                                 |
| ------------- | -------- | ---------------------------------------------------- |
| `start`       | `number` | 起始字节位置（可选，默认为 0）                       |
| `end`         | `number` | 结束字节位置（不包含该字节，可选，默认为 Blob 大小） |
| `contentType` | `string` | 新 Blob 的 MIME 类型（可选，默认与原 Blob 相同）     |

- 返回值

返回一个新的 `Blob` 对象，包含指定范围的字节数据。

- 示例

```ts
const blob = new Blob(['Hello, world!'], { type: 'text/plain' });

const sliced = blob.slice(0, 5); // 截取前5个字节

const reader = new FileReader();
reader.onload = () => {
  console.log(reader.result); // 输出 "Hello"
};
reader.readAsText(sliced);
```

::: warning 注意

- `slice()` 是**非破坏性**的，原 Blob 不会被修改。

- 如果 `start` 或 `end` 是负数，会被当作从末尾开始计算（类似数组 slice）。

:::

# BlobPart

```ts
type BlobPart = BufferSource | Blob | string
```





# BufferSource

包含 `ArrayBuffer` 和 `TypedArray`（如 `Uint8Array`, `Int16Array` 等）。

用来存储二进制数据。

```ts
const buffer = new Uint8Array([72, 101, 108, 108, 111]) // "Hello"
const blob = new Blob([buffer], { type: "text/plain" })
```

