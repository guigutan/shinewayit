<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { listReport, type ReportRow, type ReportType } from '@/api/reports'

const pad = (value: number) => String(value).padStart(2, '0')
const now = new Date()
const filters = reactive({
  type: 'leave' as ReportType,
  name: '',
  workCode: '',
  startDate: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-01`,
  endDate: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate())}`,
})
const reports = [
  { value: 'leave', label: '请假单' },
  { value: 'group-leave', label: '请假单（多人）' },
  { value: 'group-overtime', label: '加班申请单（多人）' },
  { value: 'travel', label: '出差申请单' },
  { value: 'sign-card', label: '签卡单' },
] as const
const labels: Record<string, string> = {
  requestId: '流程编号', workCode: '工号', name: '姓名', hireDate: '入职日期',
  startDate: '开始日期', startTime: '开始时间', endDate: '结束日期', endTime: '结束时间',
  days: '共计天', hours: '共计时', minutes: '共计分', leaveType: '请假类型', reason: '事由',
  remark: '备注', destination: '出差地点', signDate: '签卡日期', scheduleTime: '排班时间',
  signTime: '签卡时间', attendanceStatus: '考勤状态', signCategory: '签卡类别', makeupType: '补卡类型',
  createdAt: '创建时间', currentNode: '当前节点',
}
const preferred = ['workCode', 'name', 'hireDate', 'startDate',
  'startTime', 'endDate', 'endTime', 'signDate', 'scheduleTime', 'signTime', 'attendanceStatus', 'signCategory', 'makeupType', 'days',
  'hours', 'minutes', 'leaveType', 'destination', 'reason', 'remark', 'createdAt', 'currentNode', 'requestId']
const rows = ref<ReportRow[]>([])
const loading = ref(false)
const exporting = ref(false)
const searched = ref(false)
const errorMessage = ref('')
const columns = computed(() => preferred.filter((key) => rows.value.some((row) => key in row)))
const showTotals = computed(() => ['leave', 'group-leave', 'group-overtime'].includes(filters.type))
const total = (key: 'days' | 'hours' | 'minutes') => rows.value.reduce((sum, row) => sum + (Number(row[key]) || 0), 0)

watch(() => filters.type, () => { rows.value = []; searched.value = false; errorMessage.value = '' })

const search = async () => {
  if (!filters.startDate || !filters.endDate) { errorMessage.value = '日期范围为必填项'; return }
  if (filters.startDate > filters.endDate) { errorMessage.value = '开始日期不能晚于结束日期'; return }
  loading.value = true; searched.value = true; errorMessage.value = ''
  try { rows.value = (await listReport(filters)).data }
  catch (error) { errorMessage.value = error instanceof Error ? error.message : '报表查询失败' }
  finally { loading.value = false }
}

const exportExcel = async () => {
  if (!rows.value.length) return
  exporting.value = true
  try {
    const { default: ExcelJS } = await import('exceljs')
    const workbook = new ExcelJS.Workbook()
    const report = reports.find((item) => item.value === filters.type)
    const sheet = workbook.addWorksheet(report?.label ?? '报表')
    sheet.columns = columns.value.map((key) => ({ header: labels[key] ?? key, key, width: key === 'reason' ? 35 : 20 }))
    rows.value.forEach((row) => sheet.addRow(Object.fromEntries(columns.value.map((key) => [key, row[key] ?? '']))))
    if (showTotals.value) {
      const summary: Record<string, string | number> = { workCode: '合计' }
      for (const key of ['days', 'hours', 'minutes'] as const) if (columns.value.includes(key)) summary[key] = total(key)
      const summaryRow = sheet.addRow(summary); summaryRow.font = { bold: true }
    }
    sheet.views = [{ state: 'frozen', ySplit: 1 }]
    sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } }
    sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF3C91D0' } }
    sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: columns.value.length } }
    const buffer = await workbook.xlsx.writeBuffer()
    const url = URL.createObjectURL(new Blob([new Uint8Array(buffer)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }))
    const link = document.createElement('a'); link.href = url
    link.download = `${report?.label ?? '报表'}_${filters.startDate}_${filters.endDate}.xlsx`; link.click(); URL.revokeObjectURL(url)
  } finally { exporting.value = false }
}
</script>

<template>
  <section class="card report-card">
    <header class="machine-card__header"><div><span class="eyebrow">REPORT CENTER</span><h2>报表查询</h2><p>按日期和人员条件查询业务数据，并可导出 Excel。</p></div></header>
    <form class="filter-bar report-filter" @submit.prevent="search">
      <label><span>报表</span><select v-model="filters.type" class="filter-input"><option v-for="item in reports" :key="item.value" :value="item.value">{{ item.label }}</option></select></label>
      <label><span>用户姓名</span><input v-model.trim="filters.name" class="filter-input" placeholder="完整姓名"></label>
      <label><span>用户工号</span><input v-model.trim="filters.workCode" class="filter-input" placeholder="完整工号"></label>
      <label><span>开始日期 *</span><input v-model="filters.startDate" class="filter-input" type="date" required></label>
      <label><span>结束日期 *</span><input v-model="filters.endDate" class="filter-input" type="date" required></label>
      <button class="button button--dark" type="submit" :disabled="loading">{{ loading ? '查询中…' : '查询' }}</button>
      <button class="button button--export" type="button" :disabled="loading || exporting || !rows.length" @click="exportExcel">{{ exporting ? '导出中…' : '导出 Excel' }}</button>
    </form>
    <div v-if="errorMessage" class="notice notice--error">{{ errorMessage }}</div>
    <div class="report-summary">查询结果：<strong>{{ rows.length }}</strong> 条</div>
    <div class="table-wrap"><table><thead><tr><th v-for="key in columns" :key="key">{{ labels[key] ?? key }}</th></tr></thead>
      <tbody><tr v-if="loading"><td :colspan="Math.max(columns.length, 1)" class="table-state">正在读取数据…</td></tr><tr v-else-if="searched && !rows.length"><td :colspan="Math.max(columns.length, 1)" class="table-state">没有符合条件的数据</td></tr><tr v-for="(row, index) in rows" v-else :key="index"><td v-for="key in columns" :key="key" :class="{ 'report-reason': key === 'reason' }">{{ row[key] ?? '—' }}</td></tr></tbody>
      <tfoot v-if="showTotals && rows.length"><tr><td v-for="key in columns" :key="key"><strong v-if="key === 'workCode'">合计</strong><strong v-else-if="key === 'days'">{{ total('days') }}</strong><strong v-else-if="key === 'hours'">{{ total('hours') }}</strong><strong v-else-if="key === 'minutes'">{{ total('minutes') }}</strong><span v-else>—</span></td></tr></tfoot>
    </table></div>
  </section>
</template>

<style scoped>.report-card{overflow:hidden}.report-filter{align-items:end;flex-wrap:wrap}.report-filter label{display:grid;gap:5px;color:#57708c;font-size:10px}.button--export{border-color:#8fc5ea;color:#2878b4;background:#eff8ff}.report-summary{padding:14px 28px;color:#637b96;font-size:12px}.report-reason{min-width:220px;max-width:420px;white-space:normal;line-height:1.5}tfoot td{border-top:2px solid #9bc8ef;background:#edf7ff;color:#245b88}</style>
