# curl

`curl` 是一个**命令行工具**，用来**发 HTTP / HTTPS 请求、下载或上传数据**，前端、后端、运维都会天天用到它。

## cURL格式

一个完整的请求具有请求头，请求体，地址。

使用cURL格式可以直接表示一个请求，非常方便：

```sh
zurichscud@zurichscuddeMacBook-Air ~ % curl 'https://dev-iclaim.y9net.cn/claims-business/app/case/checkLawyerAssigned/358' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: zh-CN,zh;q=0.9' \
  -H 'Authorization: eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImY5YjI0NDU1LTFmMTItNGVlNi1hYjgzLTM4ZjNhNDkwMzg1ZiJ9.PTiN-i0Bry8t06ywnB6fsADusDpWRhIQOvPBvZFX4DY50ifNDL6T0XlXV7tta8SPetaFhGvwGFx_UJxQediLpA' \
  -H 'Connection: keep-alive' \
  -H 'Origin: http://localhost:3002' \
  -H 'Referer: http://localhost:3002/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: cross-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"'
```

```sh
{"msg":"操作成功","code":200,"data":true}
```

## 使用curl

我们可以直接在终端中使用 **curl** 调用接口。常见的接口调试工具也支持直接导入 **cURL** 命令；在浏览器中，同样可以将已有的网络请求一键复制为 **cURL** 格式，方便复现和调试。