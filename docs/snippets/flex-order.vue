<script setup></script>

<template>
  <div class="button-group">
    <button class="btn">取消</button>
    <button class="btn">重置</button>
    <button class="btn primary">确定</button>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
}
.primary {
  order: -1;
}
</style>
