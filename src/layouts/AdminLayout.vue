<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const menuItems = [
  { label: '工作台', to: '/', icon: '▦', ready: true },
  { label: '机台管理', to: '/machines', icon: '▣', ready: true },
  { label: '采集配置', to: '/collection', icon: '⌁', ready: false },
  { label: '报表中心', to: '/reports', icon: '▥', ready: false },
  { label: '用户与权限', to: '/users', icon: '♙', ready: false },
  { label: '系统设置', to: '/settings', icon: '⚙', ready: false },
] as const

const route = useRoute()
const sidebarOpen = ref(false)
const pageTitle = computed(() => String(route.meta.title ?? '管理中心'))
</script>

<template>
  <div class="admin-shell">
    <button v-if="sidebarOpen" class="sidebar-scrim" aria-label="关闭导航" @click="sidebarOpen = false" />
    <aside class="sidebar" :class="{ 'sidebar--open': sidebarOpen }">
      <div class="brand">
        <div class="brand__mark">S</div>
        <div><strong>SHINEWAY</strong><span>企业管理中心</span></div>
      </div>
      <div class="sidebar__section-label">管理导航</div>
      <nav class="sidebar__nav">
        <RouterLink
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          class="nav-item"
          :class="{ 'nav-item--active': route.path === item.to }"
          @click="sidebarOpen = false"
        >
          <span class="nav-item__icon">{{ item.icon }}</span><span>{{ item.label }}</span>
          <small v-if="!item.ready">预留</small>
        </RouterLink>
      </nav>
      <div class="sidebar__footer">
        <div class="status-dot" />
        <div><strong>系统运行正常</strong><span>Shineway API · 7003</span></div>
      </div>
    </aside>

    <main class="main-area">
      <header class="topbar">
        <div class="topbar__title">
          <button class="menu-button" aria-label="打开导航" @click="sidebarOpen = true">☰</button>
          <div><span>Shineway / 管理中心</span><h1>{{ pageTitle }}</h1></div>
        </div>
        <div class="operator">
          <div class="operator__avatar">管</div>
          <div><strong>系统管理员</strong><span>内部管理账号</span></div>
        </div>
      </header>
      <section class="page-content"><RouterView /></section>
    </main>
  </div>
</template>
