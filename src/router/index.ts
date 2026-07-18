import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import MachinesView from '@/views/MachinesView.vue'
import PlaceholderView from '@/views/PlaceholderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: AdminLayout,
    children: [
      { path: '', name: 'dashboard', component: DashboardView, meta: { title: '工作台' } },
      { path: 'machines', name: 'machines', component: MachinesView, meta: { title: '机台管理' } },
      { path: 'collection', name: 'collection', component: PlaceholderView, meta: { title: '采集配置' } },
      { path: 'reports', name: 'reports', component: PlaceholderView, meta: { title: '报表中心' } },
      { path: 'users', name: 'users', component: PlaceholderView, meta: { title: '用户与权限' } },
      { path: 'settings', name: 'settings', component: PlaceholderView, meta: { title: '系统设置' } },
    ],
  }],
})

router.afterEach((to) => {
  document.title = `${String(to.meta.title ?? '管理中心')} · Shineway`
})

export default router
