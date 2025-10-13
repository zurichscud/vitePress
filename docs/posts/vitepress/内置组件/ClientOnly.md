# ClientOnly

`<ClientOnly />` 组件仅在客户端渲染其插槽。

由于 VitePress 应用程序在生成静态构建时是在 Node.js 中服务器渲染的，因此任何 Vue 使用都必须符合通用代码要求。简而言之，确保仅在 beforeMount 或 mounted 钩子中访问 Browser/DOM API。

如果正在使用或演示对 SSR 不友好的组件 (例如，包含自定义指令)，可以将它们包装在 `ClientOnly` 组件中。

```vue-html
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```

- 相关文档：[SSR 兼容性](../guide/ssr-compat)
