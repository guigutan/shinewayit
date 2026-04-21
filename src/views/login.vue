<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Directus 登录</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">用户名</label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            placeholder="请输入用户名"
            :disabled="authStore.loading"
          />
        </div>
        
        <div class="form-group">
          <label for="password">密码</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="请输入密码"
            :disabled="authStore.loading"
          />
        </div>

        <button type="submit" :disabled="authStore.loading">
          {{ authStore.loading ? '登录中...' : '登录' }}
        </button>

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

// 将用户名转换为完整邮箱：如果未包含@则添加 @123.com
const toEmail = (input: string): string => {
  if (input.includes('@')) {
    return input
  }
  return `${input}@123.com`
}

// 错误消息映射（英文 -> 中文）
const translateErrorMessage = (originalMessage: string): string => {
  const messageMap: Record<string, string> = {
    'Invalid user credentials.': '用户名或密码错误，请重新输入',
    'User not found': '用户不存在',
    'Email not verified': '邮箱未验证，请先验证邮箱',
    'Password too weak': '密码强度不足',
    'Token expired': '登录已过期，请重新登录',
    'Invalid token': '无效的令牌，请重新登录',
  }
  // 如果映射表中有对应的中文，返回中文；否则返回原始消息
  return messageMap[originalMessage] || originalMessage
}

const handleLogin = async () => {
  errorMessage.value = ''
  
  const email = toEmail(username.value)
  
  try {
    await authStore.login({
      email: email,
      password: password.value,
    })
    router.push('/home')
  } catch (error: any) {
    // 获取后端返回的错误消息
    let originalMsg = '登录失败，请检查网络连接或用户名密码是否正确'
    if (error.response?.data?.errors) {
      originalMsg = error.response.data.errors[0]?.message || originalMsg
    } else if (error.message) {
      originalMsg = error.message
    }
    // 转换为中文
    errorMessage.value = translateErrorMessage(originalMsg)
    console.error('Login error:', error)
  }
}
</script>

<style scoped>
/* 样式完全保持不变 */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  margin-top: 15px;
  padding: 10px;
  background: #fee;
  color: #c33;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
}
</style>