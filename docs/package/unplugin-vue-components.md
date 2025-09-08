# unplugin-vue-components





## 手动实现Resolver

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
          // 如果组件名以 "My" 开头，自动导入我的自定义库
          if (name.startsWith('My')) {
            return {
              name: name.slice(2), // 去掉 "My" 前缀
              from: 'my-ui-library', // 从自定义库导入
            }
          }
        }
      ]
    })
  ]
})
```



