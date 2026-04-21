<template>
  <div class="home-container">
    <div class="home-card">
      <h1>欢迎回来！</h1>
      
      <div v-if="authStore.user" class="user-info">
        <div class="avatar">
          {{ userInitial }}
        </div>
        <div class="info">
          <p><strong>姓名：</strong> {{ userName }}</p>
          <p><strong>邮箱：</strong> {{ authStore.user.email || '未设置' }}</p>
          <p><strong>角色ID：</strong> {{ authStore.user.role || '未分配' }}</p>
        </div>
      </div>

      <button @click="handleLogout" :disabled="authStore.loading">
        {{ authStore.loading ? '登出中...' : '登出' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const userName = computed(() => {
  if (!authStore.user) return '用户'
  const { first_name, last_name, email } = authStore.user
  if (first_name && last_name) return `${first_name} ${last_name}`
  if (first_name) return first_name
  // 安全获取 email 前缀
  return email ? email.split('@')[0] : '用户'
})

const userInitial = computed(() => {
  if (!authStore.user) return 'U'
  const { first_name, email } = authStore.user
  if (first_name) {
    return first_name.charAt(0).toUpperCase()
  }
  // 安全获取 email 首字母
  return email && email.length > 0 ? email.charAt(0).toUpperCase() : 'U'
})

const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.home-card {
  background: white;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  text-align: left;
}

.avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.info p {
  margin: 8px 0;
  color: #555;
}

button {
  width: 100%;
  padding: 12px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(220, 53, 69, 0.4);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>