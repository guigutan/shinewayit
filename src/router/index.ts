import { createRouter, createWebHistory } from 'vue-router';
// 导入你的页面组件（如登录、首页）
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';


// 定义路由规则
const routes = [
{ path: '/', redirect: '/login' },
{ path: '/login', component: Login },
{ path: '/home', component: Home, meta: { requireAuth: true } }
];

// 创建路由实例
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), // Vite 环境变量
routes
});

// 导出路由实例
export default router;