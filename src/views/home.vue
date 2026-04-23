<template>
  <div class="app" :class="{ 'sidebar-collapsed': isCollapsed }">
    <!-- 移动端遮罩层 -->
    <div v-if="mobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu"></div>

    <Sidebar
      :isCollapsed="isCollapsed"
      :expandedKeys="expandedKeys"
      :menuItems="menuItems"
      :mobileMenuOpen="mobileMenuOpen"
      :isTabActive="isTabActive"
      @toggleCollapse="toggleCollapse"
      @toggleExpand="toggleExpand"
      @openTab="openTab"
    />

    <main class="main">

      <TopBar
        :userName="userName"
        :userEmployeeId="userEmployeeId"
        :loading="authStore.loading"
        @toggleMobileMenu="toggleMobileMenu"
        @logout="handleLogout"
      />

      <TabBar
        :tabs="tabs"
        :activeTabKey="activeTabKey"
        @updateActiveKey="activeTabKey = $event"
        @closeTab="closeTab"
      />

      <MainContent :currentComponent="currentComponent" :activeTabKey="activeTabKey" />
      
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { menuItems } from '../config/menu'
import type { MenuItem } from '../config/menu'
import Sidebar from '../components/Sidebar.vue'
import TopBar from '../components/TopBar.vue'
import TabBar from '../components/TabBar.vue'
import MainContent from '../components/MainContent.vue'

const router = useRouter()
const authStore = useAuthStore()

// 侧边栏状态
const isCollapsed = ref(false)
const expandedKeys = ref<string[]>([])
const mobileMenuOpen = ref(false)

// 标签页状态
const tabs = ref<{ key: string; label: string; component: any }[]>([])
const activeTabKey = ref<string>('')

// 用户信息
const userName = computed(() => {
  if (!authStore.user) return '用户'
  const { first_name, last_name, email } = authStore.user
  if (first_name && last_name) return `${first_name} ${last_name}`
  if (first_name) return first_name
  return email ? email.split('@')[0] : '用户'
})
const userEmployeeId = computed(() => {
  if (!authStore.user?.email) return ''
  return authStore.user.email.split('@')[0]
})

// 辅助函数
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  if (isCollapsed.value) expandedKeys.value = []
}
const toggleExpand = (key: string) => {
  if (expandedKeys.value.includes(key)) {
    expandedKeys.value = expandedKeys.value.filter(k => k !== key)
  } else {
    expandedKeys.value.push(key)
  }
}
const isTabActive = (key: string) => activeTabKey.value === key

const openTab = (item: MenuItem) => {
  const existing = tabs.value.find(tab => tab.key === item.key)
  if (existing) {
    activeTabKey.value = existing.key
  } else {
    tabs.value.push({ key: item.key, label: item.label, component: item.component })
    activeTabKey.value = item.key
  }
  if (window.innerWidth < 768) closeMobileMenu()
}
const closeTab = (key: string) => {
  const idx = tabs.value.findIndex(tab => tab.key === key)
  if (idx === -1) return
  if (activeTabKey.value === key) {
    if (tabs.value.length > 1) {
      const newIdx = idx === 0 ? 1 : idx - 1
      activeTabKey.value = tabs.value[newIdx].key
    } else {
      const defaultMenu = menuItems.find(m => m.key === 'func-map')
      if (defaultMenu) openTab(defaultMenu)
      return
    }
  }
  tabs.value.splice(idx, 1)
}
const currentComponent = computed(() => {
  const active = tabs.value.find(tab => tab.key === activeTabKey.value)
  return active ? active.component : null
})

// 初始化默认标签页
const initDefaultTab = () => {
  const funcMapMenu = menuItems.find(m => m.key === 'func-map')
  if (funcMapMenu && tabs.value.length === 0) openTab(funcMapMenu)
}
initDefaultTab()

// 移动端控制
const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
const closeMobileMenu = () => { mobileMenuOpen.value = false }

// 登出
const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
/* 全局布局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #f0f2f6;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 150;
  cursor: pointer;
}
/* 折叠时影响侧边栏内部样式（已在 Sidebar 组件中处理，此处确保全局类） */
.app.sidebar-collapsed .sidebar {
  width: 72px;
}
@media (max-width: 768px) {
  .mobile-overlay {
    display: block;
  }
}
</style>