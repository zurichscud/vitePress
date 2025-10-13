# File



```ts
interface File extends Blob {
  /** 文件名（包含后缀） */
  readonly name: string

  /** 最后修改时间戳（毫秒数） */
  readonly lastModified: number
}

/** File 构造函数的定义 */
declare var File: {
  prototype: File

  /**
   * 创建一个 File 对象
   * @param fileBits 构成文件内容的片段（字符串、ArrayBuffer、Blob 等）
   * @param fileName 文件名
   * @param options  配置项：type / lastModified
   */
  new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File
}

/** File 构造函数的配置 */
interface FilePropertyBag extends BlobPropertyBag {
  lastModified?: number
}


```

```ts
const input = document.querySelector<HTMLInputElement>('#fileInput')!
input.addEventListener('change', () => {
  const file = input.files?.[0]
  if (file) {
    console.log(file.name) // 文件名
    console.log(file.size) // 文件大小（字节）
    console.log(file.type) // MIME 类型
    console.log(file.lastModified) // 最后修改时间戳
  }
})

```

## constructor

> 在前端，通常不会自己创建File实例，而是用户选择文件后，由input元素生成File实例

Blob对象可以直接转为File对象

```ts
const file =new File(new Blob())
```

