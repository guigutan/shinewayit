// src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/home.vue'),
      meta: { requiresAuth: true },
    },
  ],
})



// 全局路由守卫（1、未登录时访问 /home 会自动跳转到 /login  2、已登录时访问 /login 会自动跳转到 /home  3、根路径 / 自动重定向到 /home）      
router.beforeEach(async (to) => {
  const authStore = useAuthStore()
  
  // 等待认证初始化完成
  if (!authStore.isAuthenticated && authStore.loading) {
    await new Promise((resolve) => {
      const unsubscribe = setInterval(() => {
        if (!authStore.loading) {
          clearInterval(unsubscribe)
          resolve(null)
        }
      }, 50)
    })
  }

  const requiresAuth = to.meta.requiresAuth

  if (requiresAuth && !authStore.isAuthenticated) {
    return '/login'
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    return '/home'
  } else {
    return true
  }
})



export default router