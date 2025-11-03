# ProgressEvent

`ProgressEvent` 是一种用于表示在网络请求（包括上传和下载）过程中进度的事件类型。它扩展自 `Event` 类型，并增加了与进度相关的属性。对于 `onprogress` 事件，我们关心的是它的 `loaded` 和 `total` 属性。

```ts
interface ProgressEvent<T = any> extends Event {
  readonly lengthComputable: boolean;
  readonly loaded: number;
  readonly total: number;
  readonly target: T;
}
```



## Properties

### loaded

已上传的字节数（上传进度的当前值）。该值是一个 `number` 类型，表示已上传的数据大小。

### total

总字节数，即要上传的文件的大小。该值是一个 `number` 类型，表示文件的总大小。

### lengthComputable

是否可以计算进度。如果为 `true`，则可以根据 `loaded` 和 `total` 计算上传进度；如果为 `false`，则无法计算进度。