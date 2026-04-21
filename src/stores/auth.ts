// src/stores/auth.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User, LoginCredentials } from '../types/index'
import directusApi from '../api/directus'

const TOKEN_KEY = 'directus_access_token'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)   // 新增
  const isAuthenticated = ref(false)
  const loading = ref(false)

  // 初始化认证状态（从 localStorage 恢复并验证）
  const initAuth = async (): Promise<void> => {
    const storedToken = localStorage.getItem(TOKEN_KEY)
    if (!storedToken) {
      return
    }

    token.value = storedToken
    loading.value = true

    try {
      // 验证 token 并获取用户信息（指定需要返回的字段）
      const response = await directusApi.get('/users/me', {
        params: { fields: ['id', 'email', 'first_name', 'last_name', 'role'] }
      })
      user.value = response.data.data
      isAuthenticated.value = true

      console.log('initAuth user:', user.value)  // 调试用，可删除

    } catch (error) {
      // token 无效，清除本地存储
      localStorage.removeItem(TOKEN_KEY)
      token.value = null
      refreshToken.value = null
      isAuthenticated.value = false

      console.error('Token validation failed:', error)

    } finally {
      loading.value = false
    }
  }

  // 登录
  const login = async (credentials: LoginCredentials): Promise<void> => {
    loading.value = true
    try {
      const response = await directusApi.post('/auth/login', {
        email: credentials.email,
        password: credentials.password,
      })

      const accessToken = response.data.data.access_token
      const refreshTokenValue = response.data.data.refresh_token  // 获取 refresh_token
      
      // 存储 token
      token.value = accessToken
      refreshToken.value = refreshTokenValue
      localStorage.setItem(TOKEN_KEY, accessToken)

      // 获取用户信息（指定需要返回的字段）
      const userResponse = await directusApi.get('/users/me', {

        //  params: {  fields: ['*'] }
        params: { fields: ['id', 'email', 'first_name', 'last_name', 'role'] }
        
      })

      console.log(userResponse)

      user.value = userResponse.data.data
      isAuthenticated.value = true

    } catch (error: any) {
      console.log("登录catch")
      console.log(error)

      // 清除状态
      token.value = null
      refreshToken.value = null
      localStorage.removeItem(TOKEN_KEY)
      isAuthenticated.value = false
     
      throw error      

    } finally {
      loading.value = false
    }
  }

  // 登出
  const logout = async (): Promise<void> => {
    loading.value = true
    try {
      // 调用 Directus 登出接口，需要提供 refresh_token
      if (token.value && refreshToken.value) {
        await directusApi.post('/auth/logout', {
          refresh_token: refreshToken.value
        }, {
          headers: { Authorization: `Bearer ${token.value}` }
        })
      }
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // 清除本地状态
      token.value = null
      refreshToken.value = null
      user.value = null
      isAuthenticated.value = false
      localStorage.removeItem(TOKEN_KEY)
      loading.value = false
    }
  }

  // 监听 401 事件，自动登出
  if (typeof window !== 'undefined') {
    window.addEventListener('auth:unauthorized', () => {
      logout()
    })
  }

  return {
    user,
    token,
    refreshToken,
    isAuthenticated,
    loading,
    initAuth,
    login,
    logout,
  }
})