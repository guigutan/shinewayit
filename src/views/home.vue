<template>
  <div class="app" :class="{ 'sidebar-collapsed': isCollapsed }">
    <!-- 移动端遮罩层 -->
    <div v-if="mobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu"></div>

    <!-- 侧边栏 -->
    <aside class="sidebar" :class="{ 'mobile-open': mobileMenuOpen }">
      <div class="sidebar-header">
        <div class="logo" v-show="!isCollapsed">
          <span class="logo-icon">K</span>
          <span class="logo-text">KAIZHONG</span>
        </div>
        <div class="logo-icon-only" v-show="isCollapsed">K</div>
        <button class="collapse-btn" @click="toggleCollapse">
          {{ isCollapsed ? '☰' : '◀' }}
        </button>
      </div>

      <ul class="menu">
        <template v-for="item in menuItems" :key="item.key">
          <li v-if="!item.children" class="menu-item" :class="{ active: isTabActive(item.key) }" @click="openTab(item)">
            <span class="menu-icon">{{ item.icon }}</span>
            <span class="menu-label" v-show="!isCollapsed">{{ item.label }}</span>
          </li>
          <li v-else class="menu-parent" :class="{ expanded: expandedKeys.includes(item.key) }">
            <div class="menu-item" @click="toggleExpand(item.key)">
              <span class="menu-icon">{{ item.icon }}</span>
              <span class="menu-label" v-show="!isCollapsed">{{ item.label }}</span>
              <span class="expand-icon" v-show="!isCollapsed">{{ expandedKeys.includes(item.key) ? '▼' : '▶' }}</span>
            </div>
            <ul class="sub-menu" v-show="expandedKeys.includes(item.key) && !isCollapsed">
              <li v-for="child in item.children" :key="child.key" class="menu-item sub-item" :class="{ active: isTabActive(child.key) }" @click="openTab(child)">
                <span class="menu-icon">{{ child.icon }}</span>
                <span class="menu-label">{{ child.label }}</span>
              </li>
            </ul>
          </li>
        </template>
      </ul>

      <!-- 侧边栏底部已完全移除 -->
    </aside>

    <!-- 主内容区 -->
    <main class="main">
      <header class="top-bar">
        <div class="left-area">
          <button class="hamburger" @click="toggleMobileMenu">☰</button>
          <span class="system-title">生产制造运营管理系统</span>
        </div>
        <div class="right-area">
          <div class="user-greeting">您好，{{ userName }} {{ userEmployeeId ? `[${userEmployeeId}]` : '' }}</div>
          <button class="logout-btn" @click="handleLogout" :disabled="authStore.loading">
            {{ authStore.loading ? '登出中...' : '登出' }}
          </button>
        </div>
      </header>

      <div class="tab-bar">
        <div class="tab-list">
          <div v-for="tab in tabs" :key="tab.key" class="tab-item" :class="{ active: activeTabKey === tab.key }" @click="activeTabKey = tab.key">
            <span>{{ tab.label }}</span>
            <span v-if="tabs.length > 1" class="tab-close" @click.stop="closeTab(tab.key)">×</span>
          </div>
        </div>
      </div>

      <div class="content-view">
        <keep-alive>
          <component :is="currentComponent" :key="activeTabKey" />
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, markRaw, type Component, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// ---------- 菜单数据结构 ----------
interface MenuItem {
  key: string
  label: string
  icon: string
  component: Component
  children?: MenuItem[]
}

// 定义表格数据行的类型
interface TableRow {
  lineName: string
  lineCode: string
  equipNo: string
  purchaseDate: string
  workCenter: string
  workshopCode: string
  areaDesc: string
  andonCode: string
  localPrint: boolean
}

// 定义查询表单的类型
interface QueryForm {
  lineName: string
  lineCode: string
  equipNo: string
  workCenter: string
  factory: string
  workshopCode: string
  areaDesc: string
  andonCode: string
}

// ---------- 产线属性维护面板 ----------
import { defineComponent } from 'vue'

const LinePanel = markRaw(defineComponent({
  name: 'LinePanel',
  data() {
    return {
      query: {
        lineName: '',
        lineCode: '',
        equipNo: '',
        workCenter: '',
        factory: '',
        workshopCode: '',
        areaDesc: '',
        andonCode: ''
      } as QueryForm,
      tableData: [
        { lineName: '产线A', lineCode: 'LINE001', equipNo: 'E001', purchaseDate: '2023-01-01', workCenter: 'WC01', workshopCode: 'WS01', areaDesc: '装配区', andonCode: 'AD001', localPrint: true },
        { lineName: '产线B', lineCode: 'LINE002', equipNo: 'E002', purchaseDate: '2023-02-01', workCenter: 'WC02', workshopCode: 'WS02', areaDesc: '测试区', andonCode: 'AD002', localPrint: false },
      ] as TableRow[]
    }
  },
  computed: {
    filteredData(): TableRow[] {
      const q = this.query
      return this.tableData.filter(item => {
        return (!q.lineName || item.lineName.includes(q.lineName)) &&
               (!q.lineCode || item.lineCode.includes(q.lineCode)) &&
               (!q.equipNo || item.equipNo.includes(q.equipNo)) &&
               (!q.workCenter || item.workCenter.includes(q.workCenter)) &&
               (!q.workshopCode || item.workshopCode.includes(q.workshopCode)) &&
               (!q.areaDesc || item.areaDesc.includes(q.areaDesc)) &&
               (!q.andonCode || item.andonCode.includes(q.andonCode))
      })
    }
  },
  methods: {
    handleSearch() {
      // 查询逻辑（已通过计算属性自动过滤）
    },
    handleReset() {
      this.query = {
        lineName: '', lineCode: '', equipNo: '', workCenter: '',
        factory: '', workshopCode: '', areaDesc: '', andonCode: ''
      }
    }
  },
  template: `
    <div class="panel">
      <div class="action-bar">
        <button class="btn-primary">修改</button>
        <button class="btn-primary">保存</button>
        <button class="btn-default">产线条码化</button>
        <button class="btn-default">打印</button>
        <button class="btn-default">导出</button>
      </div>

      <div class="query-form">
        <div class="form-row">
          <div class="form-item">
            <label>产线/机台名称：</label>
            <input type="text" v-model="query.lineName" placeholder="请输入" />
          </div>
          <div class="form-item">
            <label>产线/机台编码：</label>
            <input type="text" v-model="query.lineCode" placeholder="请输入" />
          </div>
          <div class="form-item">
            <label>主设备号：</label>
            <input type="text" v-model="query.equipNo" placeholder="请输入" />
          </div>
          <div class="form-item">
            <label>工作中心编码：</label>
            <input type="text" v-model="query.workCenter" placeholder="请输入" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-item">
            <label>工厂：</label>
            <input type="text" v-model="query.factory" placeholder="请输入" />
          </div>
          <div class="form-item">
            <label>车间编码：</label>
            <input type="text" v-model="query.workshopCode" placeholder="请输入" />
          </div>
          <div class="form-item">
            <label>区域描述：</label>
            <input type="text" v-model="query.areaDesc" placeholder="请输入" />
          </div>
          <div class="form-item">
            <label>安灯编码：</label>
            <input type="text" v-model="query.andonCode" placeholder="请输入" />
          </div>
        </div>
        <div class="form-actions">
          <button class="btn-search" @click="handleSearch">查询</button>
          <button class="btn-reset" @click="handleReset">清空</button>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>序号</th>
              <th>产线/机台名称</th>
              <th>产线/机台编码</th>
              <th>主设备号</th>
              <th>购置日期</th>
              <th>工作中心编码</th>
              <th>车间编码</th>
              <th>区域描述</th>
              <th>安灯编码</th>
              <th>是否本地打印</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in filteredData" :key="idx">
              <td>{{ idx + 1 }}</td>
              <td>{{ item.lineName }}</td>
              <td>{{ item.lineCode }}</td>
              <td>{{ item.equipNo }}</td>
              <td>{{ item.purchaseDate }}</td>
              <td>{{ item.workCenter }}</td>
              <td>{{ item.workshopCode }}</td>
              <td>{{ item.areaDesc }}</td>
              <td>{{ item.andonCode }}</td>
              <td>{{ item.localPrint ? '是' : '否' }}</td>
            </tr>
            <tr v-if="filteredData.length === 0">
              <td colspan="10" class="no-data">暂无数据</td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          第 1 页 / 共 1 页  <span class="total">共 {{ filteredData.length }} 条数据</span>
        </div>
      </div>
    </div>
  `
}))

// 其他面板组件
const DashboardPanel = markRaw(defineComponent({
  name: 'DashboardPanel',
  template: `<div class="panel"><h2>功能地图</h2><p>欢迎使用生产制造运营管理系统。</p></div>`
}))

const CapacityPanel = markRaw(defineComponent({
  name: 'CapacityPanel',
  template: `<div class="panel"><h2>产能利用率工序</h2><p>展示各工序的产能利用率数据。</p></div>`
}))

const UserMgtPanel = markRaw(defineComponent({
  name: 'UserMgtPanel',
  template: `<div class="panel"><h2>用户管理</h2><p>用户列表、权限配置等。</p></div>`
}))

const RolePanel = markRaw(defineComponent({
  name: 'RolePanel',
  template: `<div class="panel"><h2>角色管理</h2><p>角色权限分配。</p></div>`
}))

// 菜单配置
const menuItems: MenuItem[] = [
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

// ---------- 状态管理 ----------
const router = useRouter()
const authStore = useAuthStore()

const isCollapsed = ref(false)
const expandedKeys = ref<string[]>([])
const mobileMenuOpen = ref(false)
const tabs = ref<{ key: string; label: string; component: Component }[]>([])
const activeTabKey = ref<string>('')

// 用户信息相关计算属性
const userName = computed(() => {
  if (!authStore.user) return '用户'
  const { first_name, last_name, email } = authStore.user
  if (first_name && last_name) return `${first_name} ${last_name}`
  if (first_name) return first_name
  return email ? email.split('@')[0] : '用户'
})

const userEmployeeId = computed(() => {
  if (!authStore.user?.email) return ''
  return authStore.user.email.split('@')[0]
})

// 辅助函数
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  if (isCollapsed.value) expandedKeys.value = []
}

const toggleExpand = (key: string) => {
  if (expandedKeys.value.includes(key)) {
    expandedKeys.value = expandedKeys.value.filter(k => k !== key)
  } else {
    expandedKeys.value.push(key)
  }
}

const isTabActive = (key: string) => activeTabKey.value === key

const openTab = (item: MenuItem) => {
  const existing = tabs.value.find(tab => tab.key === item.key)
  if (existing) {
    activeTabKey.value = existing.key
  } else {
    tabs.value.push({ key: item.key, label: item.label, component: item.component })
    activeTabKey.value = item.key
  }
  if (window.innerWidth < 768) closeMobileMenu()
}

const closeTab = (key: string) => {
  const idx = tabs.value.findIndex(tab => tab.key === key)
  if (idx === -1) return
  if (activeTabKey.value === key) {
    if (tabs.value.length > 1) {
      const newIdx = idx === 0 ? 1 : idx - 1
      activeTabKey.value = tabs.value[newIdx].key
    } else {
      const defaultMenu = menuItems.find(m => m.key === 'func-map')
      if (defaultMenu) openTab(defaultMenu)
      return
    }
  }
  tabs.value.splice(idx, 1)
}

const currentComponent = computed(() => {
  const active = tabs.value.find(tab => tab.key === activeTabKey.value)
  return active ? active.component : null
})

// 初始化默认标签页（产线属性维护）
const initDefaultTab = () => {
  const lineMenu = menuItems.find(m => m.key === 'line-attr')
  if (lineMenu && tabs.value.length === 0) {
    openTab(lineMenu)
  }
}
initDefaultTab()

// 移动端控制
const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
const closeMobileMenu = () => { mobileMenuOpen.value = false }

// 登出功能
const handleLogout = async () => {
  await authStore.logout()
  router.push('/login')
}

const onResize = () => {
  if (window.innerWidth >= 768 && mobileMenuOpen.value) mobileMenuOpen.value = false
}
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #f0f2f6;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}

/* 侧边栏 */
.sidebar {
  width: 260px;
  background: #ffffff;
  border-right: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
  transition: width 0.2s;
  z-index: 100;
  flex-shrink: 0;
  overflow-y: auto;
  box-shadow: 2px 0 8px rgba(0,0,0,0.02);
}

.app.sidebar-collapsed .sidebar {
  width: 72px;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  border-bottom: 1px solid #edf2f7;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-icon {
  font-size: 24px;
  font-weight: bold;
  color: #2c6e9e;
}
.logo-text {
  font-size: 16px;
  font-weight: 600;
  color: #1a2c3e;
}
.logo-icon-only {
  font-size: 24px;
  font-weight: bold;
  color: #2c6e9e;
  text-align: center;
  width: 100%;
}

.collapse-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #5a6874;
  padding: 4px 8px;
  border-radius: 4px;
}
.collapse-btn:hover {
  background: #f1f5f9;
}

.menu {
  flex: 1;
  padding: 16px 8px;
  list-style: none;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 8px;
  color: #334155;
  transition: all 0.2s;
  margin-bottom: 2px;
}
.menu-item:hover {
  background: #f1f5f9;
  color: #1e293b;
}
.menu-item.active {
  background: #e6f0fa;
  color: #2c6e9e;
  font-weight: 500;
}
.menu-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}
.menu-label {
  font-size: 14px;
  white-space: nowrap;
}
.expand-icon {
  margin-left: auto;
  font-size: 12px;
}
.sub-menu {
  list-style: none;
  padding-left: 40px;
}
.sub-item {
  margin: 2px 0;
  padding: 8px 12px;
}

/* 折叠时隐藏文字 */
.app.sidebar-collapsed .menu-label,
.app.sidebar-collapsed .expand-icon,
.app.sidebar-collapsed .logo-text {
  display: none;
}
.app.sidebar-collapsed .menu-item {
  justify-content: center;
  padding: 10px 0;
}
.app.sidebar-collapsed .sub-menu {
  display: none;
}

/* 主内容区 */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

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

/* 标签页栏 */
.tab-bar {
  background: white;
  border-bottom: 1px solid #e9ecef;
  padding-left: 16px;
}
.tab-list {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 4px;
}
.tab-item {
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
}
.tab-item.active {
  border-bottom-color: #2c6e9e;
  color: #2c6e9e;
  font-weight: 500;
}
.tab-close {
  font-size: 18px;
  color: #94a3b8;
}
.tab-close:hover {
  color: #e53e3e;
}

.content-view {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

/* 面板样式 */
.panel {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.action-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.btn-primary, .btn-default, .btn-search, .btn-reset {
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
.btn-primary {
  background: #2c6e9e;
  color: white;
}
.btn-default {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
}
.btn-search {
  background: #2c6e9e;
  color: white;
  margin-right: 8px;
}
.btn-reset {
  background: #e2e8f0;
}
.query-form {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}
.form-item {
  flex: 1;
  min-width: 180px;
}
.form-item label {
  display: block;
  font-size: 13px;
  margin-bottom: 4px;
  color: #4b5563;
}
.form-item input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
.form-actions {
  text-align: right;
}
.table-wrapper {
  overflow-x: auto;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.data-table th, .data-table td {
  border: 1px solid #e2e8f0;
  padding: 10px 12px;
  text-align: left;
}
.data-table th {
  background: #f8fafc;
  font-weight: 600;
}
.no-data {
  text-align: center;
  color: #94a3b8;
  padding: 32px;
}
.pagination {
  margin-top: 16px;
  text-align: right;
  font-size: 13px;
  color: #4b5563;
}
.total {
  margin-left: 16px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    transition: transform 0.2s;
    height: 100%;
    z-index: 200;
  }
  .sidebar.mobile-open {
    transform: translateX(0);
  }
  .hamburger {
    display: block;
  }
  .right-area {
    gap: 8px;
    font-size: 12px;
  }
  .form-item {
    min-width: 100%;
  }
  .mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 150;
    cursor: pointer;
  }
}
</style>