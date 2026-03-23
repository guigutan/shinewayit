
<script setup>
import { ref, onMounted } from 'vue'
// 表单数据
const form = ref({
  username: '',
  password: ''
})

// 加载状态
const isLoading = ref(false)

// 初始化：读取本地存储的用户名（记住用户逻辑）
onMounted(() => {
  const savedUser = localStorage.getItem('shinewayit_username')
  if (savedUser) {
    form.value.username = savedUser
  }
})

// 登录处理逻辑
const handleLogin = async () => {
  // 基础校验
  if (!form.value.username.trim()) {
    ElMessage.error('请输入用户名')
    return
  }
  if (!form.value.password.trim()) {
    ElMessage.error('请输入密码')
    return
  }

  isLoading.value = true

  try {
    // 👉 替换为你的真实登录接口
    console.log('登录参数：', form.value)
    await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟接口延迟

    // 记住用户：保存用户名到本地存储
    localStorage.setItem('shinewayit_username', form.value.username)

    ElMessage.success('登录成功！')
    // 登录成功后跳转：router.push('/home')
    router.push('/Homes')

  } catch (error) {
    ElMessage.error('登录失败：用户名或密码错误')
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped src="./login.css"></style>

<template>
  <div class="login-container">
    <div class="login-card">
      <!-- 左侧登录表单区 -->
      <div class="login-form-section">
        <h2 class="form-title">请登录</h2>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <!-- 用户名输入框 -->
          <div class="input-group">
            <input
              type="text"
              v-model="form.username"
              placeholder="用户"
              class="form-input"
              required
            />
          </div>

          <!-- 密码输入框 -->
          <div class="input-group">
            <input
              type="password"
              v-model="form.password"
              placeholder="密码"
              class="form-input"
              required
            />
          </div>

          <!-- 忘记密码链接 -->
          <div class="forgot-password">
            <a href="javascript:;">忘记密码?</a>
          </div>

          <!-- 登录按钮 -->
          <button type="submit" class="login-btn" :disabled="isLoading">
            {{ isLoading ? '登录中...' : '登录' }}
          </button>
        </form>
      </div>

      <!-- 右侧宣传区 -->
      <div class="login-banner-section">
        <h2 class="banner-title">兴晖IT管理后台</h2>
        <p class="banner-desc">登录后，开始我们一天的牛马工作吧</p>
        <button class="register-btn">注册</button>
      </div>
    </div>
  </div>
</template>
