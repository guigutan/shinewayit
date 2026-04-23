// src/config/menu.ts
import type { Component } from 'vue'
import DashboardPanel from '../views/panels/DashboardPanel.vue'
import CapacityPanel from '../views/panels/CapacityPanel.vue'
import LinePanel from '../views/panels/LinePanel.vue'
import UserMgtPanel from '../views/panels/UserMgtPanel.vue'
import RolePanel from '../views/panels/RolePanel.vue'

export interface MenuItem {
  key: string
  label: string
  icon: string
  component: Component
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  { key: 'func-map', label: '功能地图', icon: '🗺️', component: DashboardPanel },
  { key: 'capacity', label: '产能利用率工序', icon: '📈', component: CapacityPanel },
  { key: 'line-attr', label: '产线属性维护', icon: '⚙️', component: LinePanel },
  {
    key: 'user-mgt',
    label: '用户管理',
    icon: '👥',
    component: UserMgtPanel,
    children: [
      { key: 'user-list', label: '用户列表', icon: '📋', component: UserMgtPanel },
      { key: 'role-list', label: '角色管理', icon: '🔑', component: RolePanel }
    ]
  }
]