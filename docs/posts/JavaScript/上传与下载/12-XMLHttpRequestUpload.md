# XMLHttpRequestUpload

- **`progress`**: 当文件上传过程中，`progress` 事件会触发，你可以使用它来获取上传进度。
- **`load`**: 当文件上传完成时，`load` 事件会触发。
- **`error`**: 如果上传过程中发生错误，会触发 `error` 事件。
- **`abort`**: 如果上传被中止，会触发 `abort` 事件。



```ts
// 监听文件上传进度
xhr.upload.onprogress = function (event) {
  if (event.lengthComputable) {
    const percent = (event.loaded / event.total) * 100;
    console.log(`Upload progress: ${percent.toFixed(2)}%`);
    // 更新进度条的 UI
    document.getElementById('progress-bar')!.style.width = `${percent}%`;
  }
};
```

