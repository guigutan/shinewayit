<!-- src/components/TopBar.vue -->
<template>
  <header class="top-bar">

    <div class="left-area">
      <button class="hamburger" @click="$emit('toggleMobileMenu')">☰</button>
      <span class="system-title"></span>
    </div>

    <div class="right-area">
      <div class="user-greeting">您好，{{ userName }} {{ userEmployeeId ? `[${userEmployeeId}]` : '' }}<span class="logout-btn" @click="$emit('logout')" :disabled="loading"> {{ loading ? '退出登录中...' : '退出登录' }}</span> </div>            
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
  background:  #3085BB;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
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
   color:white;
}
.right-area {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
}
.user-greeting {
   color: white;
}
.logout-btn {
  padding-left: 15px;
  color: rgb(241, 104, 212);
  border: none;   
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
.logout-btn:hover:not(:disabled) {
   color: rgb(196, 43, 163);
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