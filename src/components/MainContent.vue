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
/* 面板样式（由于面板内样式在全局或组件内已定义，这里仅确保容器样式） */
:deep(.panel) {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
:deep(.action-bar) {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
:deep(.btn-primary), :deep(.btn-default), :deep(.btn-search), :deep(.btn-reset) {
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
:deep(.btn-primary) {
  background: #2c6e9e;
  color: white;
}
:deep(.btn-default) {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
}
:deep(.btn-search) {
  background: #2c6e9e;
  color: white;
  margin-right: 8px;
}
:deep(.btn-reset) {
  background: #e2e8f0;
}
:deep(.query-form) {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}
:deep(.form-row) {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}
:deep(.form-item) {
  flex: 1;
  min-width: 180px;
}
:deep(.form-item label) {
  display: block;
  font-size: 13px;
  margin-bottom: 4px;
  color: #4b5563;
}
:deep(.form-item input) {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
:deep(.form-actions) {
  text-align: right;
}
:deep(.table-wrapper) {
  overflow-x: auto;
}
:deep(.data-table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
:deep(.data-table th), :deep(.data-table td) {
  border: 1px solid #e2e8f0;
  padding: 10px 12px;
  text-align: left;
}
:deep(.data-table th) {
  background: #f8fafc;
  font-weight: 600;
}
:deep(.no-data) {
  text-align: center;
  color: #94a3b8;
  padding: 32px;
}
:deep(.pagination) {
  margin-top: 16px;
  text-align: right;
  font-size: 13px;
  color: #4b5563;
}
:deep(.total) {
  margin-left: 16px;
}
@media (max-width: 768px) {
  .content-view {
    padding: 16px;
  }
  :deep(.form-item) {
    min-width: 100%;
  }
}
</style>