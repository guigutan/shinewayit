<!-- src/components/Sidebar.vue -->
<template>
  <aside class="sidebar" :class="{ 'mobile-open': mobileMenuOpen }">
    <div class="sidebar-header">
      <div class="logo" v-show="!isCollapsed">
        <!-- <span class="logo-icon">S</span> -->
        <span class="logo-text">数据管理中心</span>
      </div>
      <!-- <div class="logo-icon-only" v-show="isCollapsed">S</div> -->
      <button class="collapse-btn" @click="$emit('toggleCollapse')">
        {{ isCollapsed ? '☰' : '«' }}
      </button>
    </div>

    <ul class="menu">
      <template v-for="item in menuItems" :key="item.key">
        <li v-if="!item.children" class="menu-item" :class="{ active: isTabActive(item.key) }" @click="$emit('openTab', item)">
          <span class="menu-icon">{{ item.icon }}</span>
          <span class="menu-label" v-show="!isCollapsed">{{ item.label }}</span>
        </li>
        <li v-else class="menu-parent" :class="{ expanded: expandedKeys.includes(item.key) }">
          <div class="menu-item" @click="$emit('toggleExpand', item.key)">
            <span class="menu-icon">{{ item.icon }}</span>
            <span class="menu-label" v-show="!isCollapsed">{{ item.label }}</span>
            <span class="expand-icon" v-show="!isCollapsed">{{ expandedKeys.includes(item.key) ? '📍' : '📌' }}</span>
          </div>
          <ul class="sub-menu" v-show="expandedKeys.includes(item.key) && !isCollapsed">
            <li v-for="child in item.children" :key="child.key" class="menu-item sub-item" :class="{ active: isTabActive(child.key) }" @click="$emit('openTab', child)">
              <span class="menu-icon">{{ child.icon }}</span>
              <span class="menu-label">{{ child.label }}</span>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </aside>
</template>

<script setup lang="ts">

import type { MenuItem } from '../config/menu'

defineProps<{
  isCollapsed: boolean
  expandedKeys: string[]
  menuItems: MenuItem[]
  mobileMenuOpen: boolean
  isTabActive: (key: string) => boolean
}>()

defineEmits<{
  (e: 'toggleCollapse'): void
  (e: 'toggleExpand', key: string): void
  (e: 'openTab', item: MenuItem): void
}>()
</script>




<style scoped>
.sidebar {
  width: 260px;
  background: #3085BB;
 
  border-right: 1px solid #e6e8ec;
  display: flex;
  flex-direction: column;
  transition: width 0.2s;
  z-index: 100;
  flex-shrink: 0;
  overflow-y: auto;
  box-shadow: 2px 0 8px rgba(0,0,0,0.02);
}
.sidebar-header {
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
  padding: 20px 16px;
  border-bottom: 1px solid #e6e8ec;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;  
}
.logo-icon {
  font-size: 16px;
  font-weight: bold;
  color: #2c6e9e;
}
.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: white; 
}
.logo-icon-only {
  font-size: 24px;
  font-weight: bold;
  color: #2c6e9e;
  text-align: center;
  width: 100%;
}
.collapse-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}
.collapse-btn:hover {
  background: #f1f5f9;
}
.menu {
  flex: 1;
  padding: 16px 8px;
  list-style: none;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 8px;
 color: white;
  transition: all 0.2s;
  margin-bottom: 2px;
}
.menu-item:hover {
  background: #f1f5f9;
  color: #1e293b;
}
.menu-item.active {
  background: #e6f0fa;
  color: #2c6e9e;
  font-weight: 500;
}
.menu-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}
.menu-label {
  font-size: 14px;
  white-space: nowrap;
}
.expand-icon {
  margin-left: auto;
  font-size: 12px;
}
.sub-menu {
  list-style: none;
  padding-left: 40px;
}
.sub-item {
  margin: 2px 0;
  padding: 8px 12px;
}
/* 折叠隐藏文字 */
.app.sidebar-collapsed .menu-label,
.app.sidebar-collapsed .expand-icon,
.app.sidebar-collapsed .logo-text {
  display: none;
}
.app.sidebar-collapsed .menu-item {
  justify-content: center;
  padding: 10px 0;
}
.app.sidebar-collapsed .sub-menu {
  display: none;
}
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    transition: transform 0.2s;
    height: 100%;
    z-index: 200;
  }
  .sidebar.mobile-open {
    transform: translateX(0);
  }
}
</style>