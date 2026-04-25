<!-- src/components/TabBar.vue -->
<template>
  <div class="tab-bar">
    <div class="tab-list">
      <div v-for="tab in tabs" :key="tab.key" class="tab-item" :class="{ active: activeTabKey === tab.key }" @click="$emit('updateActiveKey', tab.key)">
        <span>{{ tab.label }}</span>
        <span v-if="tabs.length > 1" class="tab-close" @click.stop="$emit('closeTab', tab.key)">×</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  tabs: { key: string; label: string; component: Component }[]
  activeTabKey: string
}>()

defineEmits<{
  (e: 'updateActiveKey', key: string): void
  (e: 'closeTab', key: string): void
}>()
</script>

<style scoped>
.tab-bar {
   background:  #3085BB;  
  /* border-bottom: 1px solid #df1436; */
  padding-left: 20PX;
}
.tab-list {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 4px;
}
.tab-item {
  padding: 5px;
  font-size: 14px;
  cursor: pointer; 
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px; 

   background-color: #f0f2f6;
   color: #c2c1c1;
  border-radius: 5px 5px 0 0;

}
.tab-item.active { 
  color: #2c6e9e;
  font-weight: bold;  
}
.tab-close {
  font-size: 18px;
  color: #94a3b8;
}
.tab-close:hover {
  color: #e53e3e;
}
@media (max-width: 768px) {
  .tab-bar {
    padding-left: 8px;
  }
}
</style>