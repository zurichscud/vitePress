# URL

## createObjectURL

将 **`Blob` 或 `File`** 对象生成一个临时的 **内存地址**，以 URL 形式给出，可以直接在浏览器里访问。

```ts
const url = URL.createObjectURL(object: Blob | MediaSource | File): string
```

- 返回值

一个临时的 **blob URL**，格式类似：

```txt
blob:https://example.com/4f6e2b9f-1c3a-4c2e-bd7a-1234567890ab
```

## revokeObjectURL

生成的 URL 会占用内存，使用完必须调用：

```ts
URL.revokeObjectURL(url);
```

不然浏览器会一直占用内存。
