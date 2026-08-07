<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { createMachineType, deactivateMachineType, listMachineTypes, updateMachineType, uploadMachineTypeIcon } from '@/api/machine-types'
import type { MachineType, MachineTypePayload } from '@/types/machine-type'

const items = ref<MachineType[]>([])
const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const editingCode = ref<string | null>(null)
const form = reactive<MachineTypePayload>({ Stype: '', DisplayName: '', Status: 1, OrderBy: 0 })

const load = async (): Promise<void> => {
  loading.value = true
  errorMessage.value = ''
  try { items.value = await listMachineTypes() }
  catch (error) { errorMessage.value = error instanceof Error ? error.message : '设备类型加载失败' }
  finally { loading.value = false }
}
const reset = (): void => {
  editingCode.value = null
  Object.assign(form, { Stype: '', DisplayName: '', Status: 1, OrderBy: 0 })
}
const edit = (item: MachineType): void => {
  editingCode.value = item.Stype
  Object.assign(form, { Stype: item.Stype, DisplayName: item.DisplayName, Status: item.Status, OrderBy: item.OrderBy })
}
const save = async (): Promise<void> => {
  if (!form.Stype.trim() || !form.DisplayName.trim()) { errorMessage.value = '请填写类型编码和显示名称'; return }
  saving.value = true
  try {
    if (editingCode.value) {
      await updateMachineType(editingCode.value, { DisplayName: form.DisplayName.trim(), Status: form.Status, OrderBy: form.OrderBy })
    } else {
      await createMachineType({ ...form, Stype: form.Stype.trim(), DisplayName: form.DisplayName.trim() })
    }
    reset()
    await load()
  } catch (error) { errorMessage.value = error instanceof Error ? error.message : '保存失败' }
  finally { saving.value = false }
}
const uploadIcon = async (item: MachineType, event: Event): Promise<void> => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return
  if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)) { errorMessage.value = '仅支持 PNG、JPEG、WebP 或 GIF 图片'; return }
  if (file.size > 2_000_000) { errorMessage.value = '图片不能超过 2MB'; return }
  try { await uploadMachineTypeIcon(item.Stype, file); await load() }
  catch (error) { errorMessage.value = error instanceof Error ? error.message : '图标上传失败' }
}
const deactivate = async (item: MachineType): Promise<void> => {
  if (!window.confirm(`确定停用设备类型“${item.DisplayName}”吗？已有机台数据不会删除。`)) return
  try { await deactivateMachineType(item.Stype); await load() }
  catch (error) { errorMessage.value = error instanceof Error ? error.message : '停用失败' }
}
onMounted(() => void load())
</script>

<template>
  <div class="type-layout">
    <section class="card type-editor">
      <span class="eyebrow">MACHINE TYPE</span><h2>{{ editingCode ? '编辑设备类型' : '新增设备类型' }}</h2>
      <form class="type-form" @submit.prevent="save">
        <label>类型编码 <b>*</b><input v-model="form.Stype" maxlength="30" :disabled="Boolean(editingCode)" placeholder="例如：Brother" /></label>
        <label>显示名称 <b>*</b><input v-model="form.DisplayName" maxlength="100" placeholder="例如：兄弟加工中心" /></label>
        <label>显示顺序<input v-model.number="form.OrderBy" type="number" /></label>
        <label>状态<select v-model.number="form.Status"><option :value="1">启用</option><option :value="0">停用</option></select></label>
        <div class="type-form__actions"><button v-if="editingCode" type="button" class="button button--ghost" @click="reset">取消</button><button class="button button--primary" :disabled="saving">{{ saving ? '保存中…' : '保存类型' }}</button></div>
      </form>
    </section>
    <section class="card type-list">
      <header><div><span class="eyebrow">TYPE DIRECTORY</span><h2>设备类型与机台图标</h2></div><span>{{ items.length }} 种类型</span></header>
      <p v-if="errorMessage" class="notice notice--error">{{ errorMessage }}</p>
      <div v-if="loading" class="table-state">正在读取设备类型…</div>
      <div v-else class="type-grid">
        <article v-for="item in items" :key="item.Stype" class="type-item">
          <div class="type-icon"><img v-if="item.IconUrl" :src="item.IconUrl" :alt="`${item.DisplayName}图标`" /><span v-else>无图</span></div>
          <div class="type-item__body"><div><strong>{{ item.DisplayName }}</strong><code>{{ item.Stype }}</code></div><small>{{ item.MachineCount }} 台机台 · 顺序 {{ item.OrderBy }}</small><span class="status-pill" :class="item.Status ? 'status-pill--on' : 'status-pill--off'">{{ item.Status ? '启用' : '停用' }}</span></div>
          <div class="type-item__actions"><label class="text-button upload-button">更换图标<input type="file" accept="image/png,image/jpeg,image/webp,image/gif" @change="uploadIcon(item, $event)" /></label><button class="text-button" @click="edit(item)">编辑</button><button v-if="item.Status" class="text-button text-button--danger" @click="deactivate(item)">停用</button></div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.type-layout{display:grid;grid-template-columns:320px 1fr;gap:18px;align-items:start}.type-editor{position:sticky;top:104px;padding:25px}.type-editor h2,.type-list h2{margin:5px 0 20px}.type-form{display:grid;gap:14px}.type-form label{color:#52615d;font-size:11px;font-weight:600}.type-form label b{color:#d06558}.type-form input,.type-form select{width:100%;margin-top:6px;padding:9px 10px;border:1px solid #dce3e1;border-radius:7px;background:#fbfcfc}.type-form__actions{display:flex;justify-content:flex-end;gap:8px}.type-list{overflow:hidden}.type-list>header{padding:25px 28px 5px;display:flex;justify-content:space-between}.type-list>header>span{color:#6f7d79;font-size:11px}.type-grid{padding:15px 20px 24px;display:grid;gap:10px}.type-item{display:grid;grid-template-columns:82px 1fr auto;gap:15px;align-items:center;padding:14px;border:1px solid #dfe6e3;border-radius:12px}.type-icon{width:82px;height:72px;display:grid;place-items:center;overflow:hidden;border-radius:10px;background:#edf3f1;color:#8a9692;font-size:10px}.type-icon img{width:100%;height:100%;object-fit:contain}.type-item__body>div{display:flex;gap:8px}.type-item__body code{padding:2px 6px;border-radius:5px;background:#eef3f1;font-size:10px}.type-item__body small{display:block;margin:7px 0;color:#6f7d79}.type-item__actions{display:flex;gap:4px}.upload-button{cursor:pointer}.upload-button input{display:none}@media(max-width:900px){.type-layout{grid-template-columns:1fr}.type-editor{position:static}.type-item{grid-template-columns:65px 1fr}.type-item__actions{grid-column:1/-1;justify-content:flex-end}}
</style>
