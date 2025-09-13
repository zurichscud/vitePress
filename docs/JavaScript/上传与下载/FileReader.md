# FileReader

```ts [简化声明]
interface FileReader extends EventTarget {
  readonly readyState: number
  readonly result: string | ArrayBuffer | null
  readonly error: DOMException | null

  onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
  onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
  onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
  onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
  onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
  onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null

  abort(): void
  readAsArrayBuffer(blob: Blob): void
  readAsBinaryString(blob: Blob): void   // 已废弃
  readAsDataURL(blob: Blob): void
  readAsText(blob: Blob, encoding?: string): void
}

```

## constructor

使用FileReader需要实例化

```ts
const fr=new FileReader()
```



## result

调用FileReader方法读取的结果将存于result属性中。

:::tip 提示

读取是异步的，只有在FileReader的事件中才可以真正得到result

:::

## readAsText

把Blob读取为文本字符串。

```ts
const reader = new FileReader()
reader.onload = () => console.log(reader.result) // string
reader.readAsText(file)

```





## readAsDataURL

把Blob读取为 Base64 Data URL（常用于图片预览）

```ts
const reader = new FileReader()
reader.onload = () => {
  const img = document.querySelector('img')!
  img.src = reader.result as string
}
reader.readAsDataURL(file)

```

## readAsArrayBuffer

把Blob读取为 `ArrayBuffer`，适合处理二进制文件。

```ts
const reader = new FileReader()
reader.onload = () => {
  const buffer = reader.result as ArrayBuffer
  console.log(new Uint8Array(buffer))
}
reader.readAsArrayBuffer(file)

```



## abort

取消读取。

## event

`loadstart`：开始读取

`progress`：读取中（可获取进度）

`load`：读取成功

`error`：读取失败

`abort`：被取消

`loadend`：读取完成（不管成功失败都会触发）

## 应用

### 缩略图

```ts
/* 响应式数据 */
const fileInput = ref<HTMLInputElement>();
const thumbs = ref<string[]>([]);          // 缩略图 dataURL 数组

/* 选择文件 */
function onFileChange() {
  const files = Array.from(fileInput.value?.files ?? []);
  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = e => {
      thumbs.value.push(e.target!.result as string);
    };
    reader.readAsDataURL(file);
  });
}
```



### 文本预览



