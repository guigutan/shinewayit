<!-- src/components/TopBar.vue -->
<template>
  <header class="top-bar">
    <div class="left-area">
      <button class="hamburger" @click="$emit('toggleMobileMenu')">☰</button>
      <span class="system-title">生产制造运营管理系统</span>
    </div>
    <div class="right-area">
      <div class="user-greeting">您好，{{ userName }} {{ userEmployeeId ? `[${userEmployeeId}]` : '' }}</div>
      <button class="logout-btn" @click="$emit('logout')" :disabled="loading">
        {{ loading ? '登出中...' : '登出' }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  userName: string
  userEmployeeId: string
  loading: boolean
}>()

defineEmits<{
  (e: 'toggleMobileMenu'): void
  (e: 'logout'): void
}>()
</script>

<style scoped>
.top-bar {
  background: white;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9ecef;
}
.left-area {
  display: flex;
  align-items: center;
  gap: 16px;
}
.hamburger {
  display: none;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
.system-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e2a3a;
}
.right-area {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
}
.user-greeting {
  color: #2c3e50;
}
.logout-btn {
  background: #ef4444;
  border: none;
  padding: 6px 16px;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
.logout-btn:hover:not(:disabled) {
  background: #dc2626;
}
.logout-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .right-area {
    gap: 8px;
    font-size: 12px;
  }
}
</style>