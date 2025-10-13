# unplugin-auto-import

> `unplugin-auto-import` 是 antfu主导开发的一个开源项目。

## 安装

```shell
pnpm install -D unplugin-auto-import
```

## 配置


:::code-group

```ts [范本]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 你要自动导入的库
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          axios: [
            ['default', 'axios'] // import axios from 'axios' -> 自动导入成全局变量 axios
          ]
        }
      ],
      // 自动生成类型声明文件，方便 TS 提示
      dts: 'src/types/auto-imports.d.ts',

      // 生成 ESLint 配置，避免 eslint 报未定义
      eslintrc: {
        enabled: true, // 默认 false
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    })
  ]
})
```



```ts [结果]
<script setup lang="ts">
// 不需要 import { ref } from 'vue'
const count = ref(0)

// 不需要 import { useRouter } from 'vue-router'
const router = useRouter()

// 不需要 import axios from 'axios'
axios.get('/api/test').then(res => console.log(res))
</script>
```

:::


### **imports**

用于指定要自动导入的库或模块，支持数组、对象、函数等形式。可以用来自动导入常用的库，如 vue、vue-router、pinia 等。

**配置示例：**

```ts
AutoImport({
  imports: [
    'vue',               // 自动导入 Vue（包括 `ref`、`reactive`、`computed` 等）
    'vue-router',        // 自动导入 vue-router
    'pinia',             // 自动导入 pinia
    {
      axios: [           // 可以指定别名
        ['default', 'axios'] // axios 默认导入为 axios
      ]
    }
  ]
})
```

- **axios**：表示你要自动导入 axios 库。
- **['default', 'axios']**：告诉插件，当导入 axios 时，**默认导入的模块（default）** 需要被重命名为 axios。
- 他就相当于手动写了如下语句：

```ts
import axios from 'axios';  // 手动导入 axios
```



### dirs

指定要扫描的目录。插件会自动扫描这些目录下的文件，导入文件中所有导出的函数或变量。



- 支持传入一个目录，或者多个目录。
- 支持递归扫描文件夹。



**配置示例：**

```ts
AutoImport({
  dirs: [
    'src/utils',         // 自动导入 src/utils 下所有导出的内容
    'src/composables'    // 自动导入 src/composables 下的所有内容
    'src/hook/usePage.ts'//自动引入单个文件
  ]
})
```

::: warning 避免多个文件使用默认导出

如果你的 utils 目录下有多个文件，并且这些文件都存在 **默认导出**（export default），那么在配置 unplugin-auto-import 时会遇到一些问题，因为每个文件的默认导出会被当作全局变量自动导入，可能导致命名冲突。

最简单的方式是避免在 utils 中使用多个默认导出。你可以改为 **命名导出**，然后使用 unplugin-auto-import 自动导入。

:::

### dts

自动生成 TypeScript 类型声明文件。这个选项可以为自动导入的内容生成一个 .d.ts 文件，提升 TypeScript 的代码提示和类型检查。



- 默认情况下，它会生成在 src/auto-imports.d.ts 文件。
- 你可以自定义路径和文件名。

配置示例：

```ts
AutoImport({
  dts: 'src/auto-imports.d.ts' // 自动生成类型声明文件
})
```

### eslintrc

生成 ESLint 配置，避免eslint出现未定义的全局变量警告。当启用时，插件会自动生成一个 .eslintrc-auto-import.json 文件。



- enabled: 是否启用 ESLint 配置生成。
- filepath: ESLint 配置文件的保存路径。
- globalsPropValue: ESLint 不会再警告你这些全局变量的使用，即使你没有在文件顶部显式地 import 

配置示例：

```ts
AutoImport({
  eslintrc: {
    enabled: true, // 启用 ESLint 配置
    filepath: './.eslintrc-auto-import.json', // 配置文件保存路径
    globalsPropValue: true, // 设置全局变量值为 true
  }
})
```

**unplugin-auto-import** 插件会在启用 eslintrc 配置项时，自动生成一个 .eslintrc-auto-import.json 文件，并且 ESLint 会自动读取这个文件。

### resolvers

用于自定义解析和自定义库的导入方式。

**unplugin-vue-components**中内置了常见库的Resolver，我们可以直接引入：

```ts
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

AutoImport({
  resolvers: [
    AntDesignVueResolver() // 自动导入 Ant Design Vue 组件
  ]
})
```

AntDesignVueResolver 是 unplugin-vue-components 插件提供的一个解析器，用于在**JS环境**中 自动导入 Ant Design Vue 组件，

```ts
// 不需要手动写：
import { ElMessage } from 'element-plus'

// 直接使用：
ElMessage.success('Hello')
```



:::warning 

- `AutoImport` 的 `resolvers`：**解析“函数/API”**，用于**自动导入 JS/TS 逻辑**。
- `Components` 的 `resolvers`：**解析“组件”**，用于**自动导入 Vue 组件**。
- 内置Resolver都来自unplugin-vue-components

::: 

## 实现Resolver

resolver接受一个参数name表示JS中使用的变量名



```ts
//name：待解析的名称
type ResolverFunction = (name: string) => Awaitable<string | ResolverResult | ImportExtended | null | undefined | void>;
type Resolver = ResolverFunction | ResolverResultObject;
interface ResolverResult {
  as?: string;
  name?: string;
  from: string;
}

```



```ts
import type { AutoImportResolver } from 'unplugin-auto-import/types'

/**
 * 自动导入 tdesign-vue-next 里所有 *Plugin 的具名导出
 * 例：MessagePlugin / DialogPlugin / NotifyPlugin …
 */
export function tdesignPluginResolver(): AutoImportResolver {
  return {
    type: 'component',          // 任意值即可，插件内部不区分
    resolve(name: string) {
      // 只处理后缀为 Plugin 的标识符
      if (name.endsWith('Plugin')) {
        return {
          from: 'tdesign-vue-next',
          name,                 // 从tdesign-vue-next导出的成员名
        }
      }
      return undefined
    },
  }
}
```

任意 `.vue` 或 `.ts` 文件直接写：

```ts
MessagePlugin.success('操作成功')
DialogPlugin.confirm({ title: '确认删除？' })
```

运行后顶部会自动插入：

```ts
import { MessagePlugin, DialogPlugin } from 'tdesign-vue-next'
```



