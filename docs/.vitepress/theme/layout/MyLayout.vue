<script setup lang="ts">
import Comment from "../components/Comment.vue";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

const { Layout } = DefaultTheme;

const { page } = useData();

console.log(page);
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comment />
    </template>
  </Layout>
</template>

<style scoped></style>
