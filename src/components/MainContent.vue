<!-- src/components/MainContent.vue -->
<template>
  <div class="content-view">
    <keep-alive>
      <component :is="currentComponent" :key="activeTabKey" />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  currentComponent: Component | null
  activeTabKey: string
}>()
</script>

<style scoped>
.content-view {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

/* 基础面板容器样式 */
:deep(.panel) {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .content-view {
    padding: 16px;
  }
}
</style>