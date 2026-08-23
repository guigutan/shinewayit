<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { can } from '@/api/auth'
import { createProduct, deactivateProduct, importProducts, listProducts, updateProduct, type Product, type ProductPayload } from '@/api/planning'
import { downloadExcelTemplate, excelCell, excelText, readExcelSheet } from '@/utils/excel'

const products = ref<Product[]>([]), search = ref(''), loading = ref(false), error = ref(''), editing = ref<Product | null>(null), open = ref(false)
const importInput = ref<HTMLInputElement | null>(null), importing = ref(false), importMessage = ref('')
const blank = (): ProductPayload => ({ ProductCode: '', ProductName: '', ShortName: null, Specification: null, CycleSeconds: 60, Cavities: 1, Status: 1 })
const form = ref<ProductPayload>(blank())
const filtered = computed(() => products.value.filter(item => `${item.ProductCode}${item.ProductName}${item.ShortName ?? ''}${item.Specification ?? ''}`.toLowerCase().includes(search.value.toLowerCase())))
const load = async () => { loading.value = true; error.value = ''; try { products.value = await listProducts() } catch (e) { error.value = e instanceof Error ? e.message : '产品数据加载失败' } finally { loading.value = false } }
const showForm = (item?: Product) => { editing.value = item ?? null; form.value = item ? { ProductCode: item.ProductCode, ProductName: item.ProductName, ShortName: item.ShortName, Specification: item.Specification, CycleSeconds: item.CycleSeconds, Cavities: item.Cavities, Status: item.Status } : blank(); open.value = true }
const save = async () => { error.value = ''; try { if (editing.value) await updateProduct(editing.value.ProductID, form.value); else await createProduct(form.value); open.value = false; await load() } catch (e) { error.value = e instanceof Error ? e.message : '保存失败' } }
const deactivate = async (item: Product) => { if (!confirm(`确定停用产品“${item.ProductName}”吗？历史排产不会受影响。`)) return; await deactivateProduct(item.ProductID); await load() }
const hourly = (item: Product) => Math.round(3600 / item.CycleSeconds * item.Cavities * 100) / 100
const importExcel = async (event: Event) => {
  const input = event.target as HTMLInputElement, file = input.files?.[0]
  input.value = ''
  if (!file) return
  importing.value = true; error.value = ''; importMessage.value = ''
  try {
    const { sheet, headers } = await readExcelSheet(file)
    const rows: ProductPayload[] = []
    sheet.eachRow((row, index) => {
      if (index === 1) return
      const ProductCode = excelText(excelCell(row, headers, ['产品编码', 'ProductCode']))
      const ProductName = excelText(excelCell(row, headers, ['产品名称', 'ProductName']))
      if (!ProductCode && !ProductName) return
      const CycleSeconds = Number(excelText(excelCell(row, headers, ['基本加工时间（秒）', '基本加工时间', 'CycleSeconds'])))
      const Cavities = Number(excelText(excelCell(row, headers, ['一模多穴（pcs）', '一模多穴', 'Cavities'])))
      if (!ProductCode || !ProductName || !Number.isFinite(CycleSeconds) || CycleSeconds <= 0 || !Number.isInteger(Cavities) || Cavities <= 0) throw new Error(`第 ${index} 行产品编码、产品名称、基本加工时间或一模多穴无效`)
      const status = excelText(excelCell(row, headers, ['状态', 'Status']))
      rows.push({ ProductCode, ProductName, ShortName: excelText(excelCell(row, headers, ['产品简称', '简称', 'ShortName'])) || null, Specification: excelText(excelCell(row, headers, ['规格型号', 'Specification'])) || null, CycleSeconds, Cavities, Status: ['0', '停用'].includes(status) ? 0 : 1 })
    })
    if (!rows.length) throw new Error('没有读取到产品；请使用产品批量导入模板')
    const result = await importProducts(rows)
    importMessage.value = `产品导入完成：新增 ${result.inserted}，更新 ${result.updated}，共 ${result.total} 条`
    await load()
  } catch (e) { error.value = e instanceof Error ? e.message : '产品批量导入失败' }
  finally { importing.value = false }
}
const downloadTemplate = () => downloadExcelTemplate({ sheetName: '产品信息', fileName: '产品信息批量导入模板.xlsx', headers: ['产品编码','产品名称','产品简称','规格型号','基本加工时间（秒）','一模多穴（pcs）','状态'], example: ['A001','示例产品','产品A','100×50',60,1,1] })
onMounted(load)
</script>

<template><div>
  <section class="summary-strip"><div><span>产品总数</span><strong>{{products.length}}</strong><small>项</small></div><div><span>启用产品</span><strong>{{products.filter(x=>x.Status).length}}</strong><small>项</small></div><div><span>产能参数</span><strong>秒 / pcs</strong><small>自动换算</small></div><button v-if="can('products',true)" class="button button--primary" @click="showForm()">＋ 新增产品</button></section>
  <section class="card machine-card"><header class="machine-card__header"><div><span class="eyebrow">PRODUCT MASTER</span><h2>产品信息</h2><p>基础加工时间与一模多穴共同决定产品标准产能。</p></div><div v-if="can('products',true)" class="planning-import-actions"><input ref="importInput" type="file" accept=".xlsx" hidden @change="importExcel"/><button class="button button--ghost" type="button" @click="downloadTemplate">下载导入模板</button><button class="button button--dark" type="button" :disabled="importing" @click="importInput?.click()">{{importing?'导入中…':'批量导入'}}</button></div></header>
    <div class="filter-bar"><label class="search-field"><span>⌕</span><input v-model="search" placeholder="搜索编码、名称或规格" /></label></div>
    <div v-if="importMessage" class="notice">{{importMessage}}</div><div v-if="error" class="notice notice--error">{{error}}</div><div class="table-wrap"><table><thead><tr><th>产品编码</th><th>产品名称</th><th>简称</th><th>规格型号</th><th>基本加工时间</th><th>一模多穴</th><th>小时标准产量</th><th>状态</th><th class="align-right">操作</th></tr></thead><tbody>
      <tr v-if="loading"><td colspan="9" class="table-state">正在读取产品数据…</td></tr><tr v-else-if="!filtered.length"><td colspan="9" class="table-state">暂无产品信息</td></tr>
      <tr v-for="item in filtered" v-else :key="item.ProductID"><td><strong>{{item.ProductCode}}</strong></td><td>{{item.ProductName}}</td><td>{{item.ShortName||'—'}}</td><td>{{item.Specification||'—'}}</td><td>{{item.CycleSeconds}} s</td><td>{{item.Cavities}} pcs</td><td><strong>{{hourly(item)}}</strong> pcs</td><td><span class="status-pill" :class="item.Status?'status-pill--on':'status-pill--off'">{{item.Status?'启用':'停用'}}</span></td><td class="align-right"><button v-if="can('products',true)" class="text-button" @click="showForm(item)">编辑</button><button v-if="item.Status&&can('products',true)" class="text-button text-button--danger" @click="deactivate(item)">停用</button></td></tr>
    </tbody></table></div></section>
  <div v-if="open" class="dialog-layer"><button class="dialog-scrim" @click="open=false"/><aside class="machine-dialog"><header class="machine-dialog__header"><div><span class="eyebrow">PRODUCT</span><h2>{{editing?'编辑产品':'新增产品'}}</h2></div><button class="icon-button" title="关闭" @click="open=false">×</button></header><form class="machine-form" @submit.prevent="save"><section class="form-section"><h3>产品资料与产能参数</h3><div class="form-grid"><label>产品编码 <b>*</b><input v-model.trim="form.ProductCode" required maxlength="80" /></label><label>产品名称 <b>*</b><input v-model.trim="form.ProductName" required maxlength="160" /></label><label>产品简称<input v-model.trim="form.ShortName" maxlength="80" /></label><label>规格型号<input v-model.trim="form.Specification" maxlength="200" /></label><label>基本加工时间（秒）<b>*</b><input v-model.number="form.CycleSeconds" required type="number" min="0.01" step="0.01" /></label><label>一模多穴（pcs）<b>*</b><input v-model.number="form.Cavities" required type="number" min="1" step="1" /></label><label>状态<select v-model.number="form.Status"><option :value="1">启用</option><option :value="0">停用</option></select></label></div></section><footer class="machine-dialog__footer"><button type="button" class="button button--ghost" @click="open=false">取消</button><button class="button button--primary">保存产品</button></footer></form></aside></div>
</div></template>
<style scoped>.machine-card__header{display:flex;align-items:center;justify-content:space-between;gap:18px}.planning-import-actions{display:flex;align-items:center;justify-content:flex-end;gap:8px;flex-wrap:wrap}@media(max-width:720px){.machine-card__header{align-items:flex-start;flex-direction:column}.planning-import-actions{justify-content:flex-start}}</style>
