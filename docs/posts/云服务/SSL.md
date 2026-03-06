## SSL证书

如果需要使用HTTPS，则需要购买SSL证书。因为数字证书由CA签发，需要维护成本

## SSL证书类型

不同证书的价格也不相同

### 单域名证书

只保护一个域名。

例如证书：

```sh
example.com
```

只能访问：

```
https://example.com
```

`https://www.example.com`无法访问

### 多域名证书

一个证书保护多个域名。每加一个域名要重新签发

```HTTP
example.com
www.example.com
api.example.com
admin.example.com
```

### 通配符证书

```
*.example.com
```

可以保护：

```http
www.example.com
api.example.com
admin.example.com
img.example.com
```

但不能保护：

```http
example.com
```

如果要同时支持：

```
example.com
*.example.com
```

证书里需要写两个。

## Let’s Encrypt

**Let’s Encrypt** 是一个 **免费自动化的 SSL/TLS 证书颁发机构（CA，Certificate Authority）**。它的目标是：**让整个互联网默认使用 HTTPS 加密通信**。

**Let’s Encrypt** 支持注册所有类型的SSL证书

ACME协议是由 Let’s Encrypt 推出的自动化 SSL 证书管理协议，我们只需要使用`acme.sh`即可自动化托管证书，`acme.sh`支持自动续签

1. 安装`acme.sh`

```sh
curl https://get.acme.sh | sh
```

2. 配置环境变量

```
alias acme.sh=~/.acme.sh/acme.sh
```

```sh
source ~/.bashrc
```

3. 验证`acme.sh`是否安装成功

```sh
acme.sh -v
```

4. 第一次需要注册账户邮箱。账号信息将保存在本地

```sh
acme.sh --register-account -m your@email.com
```

```sh
[Fri Mar  6 01:53:23 PM CST 2026] Account key creation OK.
[Fri Mar  6 01:53:24 PM CST 2026] No EAB credentials found for ZeroSSL, let's obtain them
[Fri Mar  6 01:53:25 PM CST 2026] Registering account: https://acme.zerossl.com/v2/DV90
[Fri Mar  6 01:53:32 PM CST 2026] Registered
[Fri Mar  6 01:53:32 PM CST 2026] ACCOUNT_THUMBPRINT='xxxxx'
```

5. 更改申请方

6. ```
   acme.sh --set-default-ca --server letsencrypt
   ```

6. 配置DNS-API

> 通配符证书只能使用DNS-API

域名解析平台具体执行命令参考：https://github.com/acmesh-official/acme.sh/wiki/dnsapi

对于腾讯云，配置API秘钥即可： https://console.cloud.tencent.com/cam/capi 

```sh
export Tencent_SecretId="<Your SecretId>"
export Tencent_SecretKey="<Your SecretKey>"
```

配置的API秘钥将会保存在`~/.acme.sh/account.conf`

7. 验证域名并生成证书

```
acme.sh --issue --dns dns_tencent -d example.com -d *.example.com
```

等待DNS验证，如果出现如下消息，说明SSL证书已申请成功

```sh
[Fri Mar  6 04:11:13 PM CST 2026] Your cert is in: /root/.acme.sh/zurichscud.site_ecc/zurichscud.site.cer
[Fri Mar  6 04:11:13 PM CST 2026] Your cert key is in: /root/.acme.sh/zurichscud.site_ecc/zurichscud.site.key
[Fri Mar  6 04:11:13 PM CST 2026] The intermediate CA cert is in: /root/.acme.sh/zurichscud.site_ecc/ca.cer
[Fri Mar  6 04:11:13 PM CST 2026] And the full-chain cert is in: /root/.acme.sh/zurichscud.site_ecc/fullchain.cer
```

| 文件                | 用途                   |
| ------------------- | ---------------------- |
| zurichscud.site.key | 私钥                   |
| zurichscud.site.cer | 数字证书               |
| ca.cer              | 中级 CA                |
| fullchain.cer       | 完整证书链（Nginx 用） |

7. 部署到NGINX

默认生成的证书都会放在安装目录下：~/.acme.sh/。然而，不要在服务器中直接引用该目录下的证书文件，也不要手动将证书文件拷贝到具体的 web 服务器中，因为手动拷贝会导致之后的证书更新流程无法完全自动化。

正确的方式是使用 acme.sh 的安装证书命令，这样 acme.sh 会自动将证书文件拷贝到指定的目录中，并记录下拷贝命令。在之后的自动更新过程中，acme.sh 会执行该拷贝步骤，从而实现证书更新流程的完全自动化。

```sh
mkdir -p /etc/nginx/ssl
```

```sh
acme.sh --install-cert \
-d example.com \
--key-file /etc/nginx/ssl/example.com.key \
--fullchain-file /etc/nginx/ssl/example.com.pem \
--reloadcmd "nginx -s reload"
```

```sh
Fri Mar  6 04:17:09 PM CST 2026] The domain 'zurichscud.site' seems to already have an ECC cert, let's use it.
[Fri Mar  6 04:17:09 PM CST 2026] Installing key to: /etc/nginx/ssl/zurichscud.site.key
[Fri Mar  6 04:17:09 PM CST 2026] Installing full chain to: /etc/nginx/ssl/zurichscud.site.pem
[Fri Mar  6 04:17:09 PM CST 2026] Running reload cmd: nginx -s reload
[Fri Mar  6 04:17:09 PM CST 2026] Reload successful
```



更换服务器时，需要把整个目录迁移：

```sh
~/.acme.sh/
```

