# file-saver

## install

```ts
npm install file-saver
```



## 基本用法

```ts
declare module 'file-saver' {
  export function saveAs(data: Blob | File, filename?: string, disableAutoBOM?: boolean): void;
}
```



```ts
import { saveAs } from 'file-saver'

// 1️⃣ 保存 Blob
const blob = new Blob(['Hello World'], { type: 'text/plain;charset=utf-8' })
saveAs(blob, 'hello.txt')

// 2️⃣ 保存 File 对象
const file = new File(['Hello File'], 'myfile.txt', { type: 'text/plain' })
saveAs(file)
```



## 与axios结合使用

```ts
import axios from 'axios'
import { saveAs } from 'file-saver'

async function downloadFile() {
  const response = await axios.get('/api/file/download', { responseType: 'blob' })
  saveAs(response.data, '文件.txt')
}

```

