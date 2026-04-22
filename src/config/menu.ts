// src/config/menu.ts
import { markRaw, type Component } from 'vue'
import { defineComponent } from 'vue'

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

// 产线属性维护面板
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
    handleSearch() {},
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
          <div class="form-item"><label>产线/机台名称：</label><input type="text" v-model="query.lineName" placeholder="请输入" /></div>
          <div class="form-item"><label>产线/机台编码：</label><input type="text" v-model="query.lineCode" placeholder="请输入" /></div>
          <div class="form-item"><label>主设备号：</label><input type="text" v-model="query.equipNo" placeholder="请输入" /></div>
          <div class="form-item"><label>工作中心编码：</label><input type="text" v-model="query.workCenter" placeholder="请输入" /></div>
        </div>
        <div class="form-row">
          <div class="form-item"><label>工厂：</label><input type="text" v-model="query.factory" placeholder="请输入" /></div>
          <div class="form-item"><label>车间编码：</label><input type="text" v-model="query.workshopCode" placeholder="请输入" /></div>
          <div class="form-item"><label>区域描述：</label><input type="text" v-model="query.areaDesc" placeholder="请输入" /></div>
          <div class="form-item"><label>安灯编码：</label><input type="text" v-model="query.andonCode" placeholder="请输入" /></div>
        </div>
        <div class="form-actions">
          <button class="btn-search" @click="handleSearch">查询</button>
          <button class="btn-reset" @click="handleReset">清空</button>
        </div>
      </div>
      <div class="table-wrapper">
        <table class="data-table">
          <thead><tr><th>序号</th><th>产线/机台名称</th><th>产线/机台编码</th><th>主设备号</th><th>购置日期</th><th>工作中心编码</th><th>车间编码</th><th>区域描述</th><th>安灯编码</th><th>是否本地打印</th></tr></thead>
          <tbody>
            <tr v-for="(item, idx) in filteredData" :key="idx">
              <td>{{ idx + 1 }}</td><td>{{ item.lineName }}</td><td>{{ item.lineCode }}</td><td>{{ item.equipNo }}</td><td>{{ item.purchaseDate }}</td>
              <td>{{ item.workCenter }}</td><td>{{ item.workshopCode }}</td><td>{{ item.areaDesc }}</td><td>{{ item.andonCode }}</td><td>{{ item.localPrint ? '是' : '否' }}</td>
            </tr>
            <tr v-if="filteredData.length === 0"><td colspan="10" class="no-data">暂无数据</td></tr>
          </tbody>
        </table>
        <div class="pagination">第 1 页 / 共 1 页  <span class="total">共 {{ filteredData.length }} 条数据</span></div>
      </div>
    </div>
  `
}))

// 其他面板
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