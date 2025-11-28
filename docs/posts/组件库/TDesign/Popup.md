# Popup



## 实现 <Badge text="猜测" />

```vue
<script setup lang="ts">
interface Props {
  attach?: string
  content?: string
}
defineOptions({
  name: 'MyPopup',
})
withDefaults(defineProps<Props>(), {
  attach: 'body',
  content: '',
})
// TODO:popup定位暂未实现
</script>

<template>
  <!-- 默认插槽 -->
  <!-- Vue 子组件 继承透传（attrs 传递） -->
  <slot />

  <!-- 内容插槽 -->
  <teleport :to="attach">
    <div class="my-popup">
      <slot name="content" />
    </div>
  </teleport>
</template>

<style scoped></style>

```

