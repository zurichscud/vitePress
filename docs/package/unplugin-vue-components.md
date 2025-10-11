# unplugin-vue-components



## 安装



```sh
pnpm install -D unplugin-auto-import
```



## 配置





## 实现Resolver

由于 unplugin-vue-components 插件本身并没有内置对 **TDesign** 的解析器支持，你可以手动配置按需导入。

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        (name) => {
          // 如果组件名以 "T" 开头
          if (name.startsWith('T')) {
            return {
              name: name.slice(1), // 去掉 "t" 前缀
              from: 'tdesign-vue-next', // 从自定义库导入
            }
          }
        }
      ]
    })
  ]
})
```



