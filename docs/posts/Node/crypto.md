# crypto



## AES

- 加密

```js
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)

let encrypted = cipher.update('hello', 'utf8', 'hex')
encrypted += cipher.final('hex')

console.log(encrypted)
```



- 解密

```js
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)

let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')

console.log(decrypted)
```



## RSA

- 生成秘钥对

```js
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
})
```



- 公钥加密

```js
const data = 'hello world'

const encrypted = crypto.publicEncrypt(
  publicKey,
  Buffer.from(data)
)

console.log('加密后：', encrypted.toString('base64'))
```



- 私钥解密

```js
const decrypted = crypto.privateDecrypt(
  privateKey,
  encrypted
)

console.log('解密后：', decrypted.toString())
```





- 签名

```js
const sign = crypto.createSign('RSA-SHA256')
sign.update('data')

const signature = sign.sign(privateKey, 'hex')
```



- 验签

```js
const verify = crypto.createVerify('RSA-SHA256')
verify.update('data')

console.log(verify.verify(publicKey, signature, 'hex'))
```

## Hash

```js

const crypto = require('node:crypto');

// 要计算哈希的数据
let text = '123456';

// 创建哈希对象，并使用 MD5 算法
const hash = crypto.createHash('md5');

// 更新哈希对象的数据
hash.update(text);

// 计算哈希值，并以十六进制字符串形式输出
const hashValue = hash.digest('hex');

console.log('Text:', text);
console.log('Hash:', hashValue);

```

