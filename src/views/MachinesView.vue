<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { deactivateMachine, listMachines, type MachineFilters } from '@/api/machines'
import MachineForm from '@/components/MachineForm.vue'
import type { Machine, MachineListMeta } from '@/types/machine'

const machines = ref<Machine[]>([])
const meta = ref<MachineListMeta>({ page: 1, pageSize: 20, total: 0, pageCount: 0 })
const filters = reactive<MachineFilters>({ page: 1, pageSize: 20, search: '', area: '', status: '' })
const loading = ref(false)
const errorMessage = ref('')
const dialogOpen = ref(false)
const editingMachine = ref<Machine | null>(null)

const activeCount = computed(() => machines.value.filter((machine) => machine.Status === 1).length)
const areaCount = computed(() => new Set(machines.value.map((machine) => machine.Area)).size)

const loadMachines = async (): Promise<void> => {
  loading.value = true
  errorMessage.value = ''
  try {
    const response = await listMachines(filters)
    machines.value = response.data
    meta.value = response.meta
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '机台数据加载失败'
  } finally { loading.value = false }
}

const search = (): void => { filters.page = 1; void loadMachines() }
const resetFilters = (): void => {
  Object.assign(filters, { page: 1, search: '', area: '', status: '' })
  void loadMachines()
}
const openCreate = (): void => { editingMachine.value = null; dialogOpen.value = true }
const openEdit = (machine: Machine): void => { editingMachine.value = machine; dialogOpen.value = true }
const onSaved = (): void => { dialogOpen.value = false; void loadMachines() }
const deactivate = async (machine: Machine): Promise<void> => {
  if (!window.confirm(`确定停用机台“${machine.MachineNO}”吗？历史采集数据不会被删除。`)) return
  try { await deactivateMachine(machine.MachineID); await loadMachines() }
  catch (error) { errorMessage.value = error instanceof Error ? error.message : '停用失败' }
}
const changePage = (page: number): void => {
  if (page < 1 || page > meta.value.pageCount || page === filters.page) return
  filters.page = page
  void loadMachines()
}
onMounted(() => void loadMachines())
</script>

<template>
  <div>
    <section class="summary-strip">
      <div><span>当前结果</span><strong>{{ meta.total }}</strong><small>台机台</small></div>
      <div><span>本页启用</span><strong>{{ activeCount }}</strong><small>运行配置</small></div>
      <div><span>区域覆盖</span><strong>{{ areaCount }}</strong><small>个区域</small></div>
      <button class="button button--primary" @click="openCreate"><span>＋</span> 新增机台</button>
    </section>

    <section class="card machine-card">
      <header class="machine-card__header">
        <div><span class="eyebrow">MACHINE DIRECTORY</span><h2>机台档案</h2><p>维护设备基础资料及采集连接参数。</p></div>
      </header>
      <form class="filter-bar" @submit.prevent="search">
        <label class="search-field"><span>⌕</span><input v-model="filters.search" placeholder="搜索编号、名称或 IP" /></label>
        <input v-model="filters.area" class="filter-input" placeholder="区域，例如：一楼" />
        <select v-model="filters.status" class="filter-input">
          <option value="">全部状态</option><option value="1">启用</option><option value="0">停用</option>
        </select>
        <button class="button button--dark" type="submit">查询</button>
        <button class="button button--ghost" type="button" @click="resetFilters">重置</button>
      </form>
      <div v-if="errorMessage" class="notice notice--error">{{ errorMessage }}</div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>机台</th><th>区域 / 类型</th><th>品牌型号</th><th>连接地址</th><th>顺序</th><th>状态</th><th>更新时间</th><th class="align-right">操作</th></tr></thead>
          <tbody>
            <tr v-if="loading"><td colspan="8" class="table-state">正在读取机台数据…</td></tr>
            <tr v-else-if="machines.length === 0"><td colspan="8" class="table-state">没有符合条件的机台</td></tr>
            <tr v-for="machine in machines" v-else :key="machine.MachineID">
              <td><div class="machine-identity"><span>{{ machine.MachineNO.slice(0, 2).toUpperCase() }}</span><div><strong>{{ machine.MachineNO }}</strong><small>{{ machine.ShortName || machine.FullName || '未设置名称' }}</small></div></div></td>
              <td><strong>{{ machine.Area }}</strong><small class="cell-subtitle">{{ machine.Stype }}</small></td>
              <td>{{ [machine.Brand, machine.Model].filter(Boolean).join(' / ') || '—' }}</td>
              <td><code>{{ machine.IpAddr || '未配置' }}{{ machine.PortNum ? `:${machine.PortNum}` : '' }}</code></td>
              <td>{{ machine.OrderBy ?? 0 }}</td>
              <td><span class="status-pill" :class="machine.Status === 1 ? 'status-pill--on' : 'status-pill--off'">{{ machine.Status === 1 ? '启用' : '停用' }}</span></td>
              <td><small>{{ machine.UpdateTime }}</small></td>
              <td class="align-right table-actions">
                <button class="text-button" @click="openEdit(machine)">编辑</button>
                <button v-if="machine.Status === 1" class="text-button text-button--danger" @click="deactivate(machine)">停用</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer class="pagination">
        <span>共 {{ meta.total }} 条，第 {{ meta.page }} / {{ Math.max(meta.pageCount, 1) }} 页</span>
        <div><button :disabled="meta.page <= 1" @click="changePage(meta.page - 1)">上一页</button><button :disabled="meta.page >= meta.pageCount" @click="changePage(meta.page + 1)">下一页</button></div>
      </footer>
    </section>
    <MachineForm :open="dialogOpen" :machine="editingMachine" @close="dialogOpen = false" @saved="onSaved" />
  </div>
</template>
