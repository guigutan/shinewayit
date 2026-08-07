<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { createMachine, updateMachine } from '@/api/machines'
import { listMachineTypes } from '@/api/machine-types'
import type { Machine, MachinePayload } from '@/types/machine'
import type { MachineType } from '@/types/machine-type'

const props = defineProps<{ open: boolean; machine: Machine | null }>()
const emit = defineEmits<{ close: []; saved: [machine: Machine] }>()

const emptyForm = (): MachinePayload => ({
  MachineNO: '', ShortName: null, FullName: null, Brand: null, Model: null, Detail: null,
  Area: '一楼', Stype: '', OutDate: null, Status: 1, MacAddr: null, IpAddr: null,
  PortNum: null, OrderBy: 0, trCount: 0, tdCount: 0, colIndex: 0, tempItem: null,
  tempOneToMany: 1, operator: 'shinewayit',
})

const form = reactive<MachinePayload>(emptyForm())
const saving = ref(false)
const errorMessage = ref('')
const machineTypes = ref<MachineType[]>([])
const isEditing = computed(() => props.machine !== null)

const resetForm = (): void => {
  const machine = props.machine
  Object.assign(form, machine ? {
    MachineNO: machine.MachineNO, ShortName: machine.ShortName, FullName: machine.FullName,
    Brand: machine.Brand, Model: machine.Model, Detail: machine.Detail, Area: machine.Area,
    Stype: machine.Stype, OutDate: machine.OutDate, Status: machine.Status, MacAddr: machine.MacAddr,
    IpAddr: machine.IpAddr, PortNum: machine.PortNum, OrderBy: machine.OrderBy ?? 0,
    trCount: machine.trCount ?? 0, tdCount: machine.tdCount ?? 0, colIndex: machine.colIndex ?? 0,
    tempItem: machine.tempItem, tempOneToMany: machine.tempOneToMany, operator: 'shinewayit',
  } : emptyForm())
  errorMessage.value = ''
}
watch(() => [props.open, props.machine] as const, async ([open]) => {
  resetForm()
  if (!open) return
  try {
    machineTypes.value = await listMachineTypes(true)
    if (!form.Stype && machineTypes.value[0]) form.Stype = machineTypes.value[0].Stype
  } catch {
    errorMessage.value = '设备类型加载失败，请先检查设备类型管理'
  }
}, { immediate: true })

const normalize = (): MachinePayload => {
  const nullable = (value: string | null): string | null => value?.trim() || null
  return {
    ...form, MachineNO: form.MachineNO.trim(), ShortName: nullable(form.ShortName),
    FullName: nullable(form.FullName), Brand: nullable(form.Brand), Model: nullable(form.Model),
    Detail: nullable(form.Detail), Area: form.Area.trim(), Stype: form.Stype.trim(),
    MacAddr: nullable(form.MacAddr), IpAddr: nullable(form.IpAddr), tempItem: nullable(form.tempItem),
  }
}

const submit = async (): Promise<void> => {
  if (!form.MachineNO.trim() || !form.Area.trim() || !form.Stype.trim()) {
    errorMessage.value = '请填写机台编号、区域和设备类型'
    return
  }
  saving.value = true
  errorMessage.value = ''
  try {
    const payload = normalize()
    const saved = props.machine
      ? await updateMachine(props.machine.MachineID, payload)
      : await createMachine(payload)
    emit('saved', saved)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存失败'
  } finally { saving.value = false }
}
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="dialog-layer">
      <button class="dialog-scrim" aria-label="关闭" @click="emit('close')" />
      <section class="machine-dialog" role="dialog" aria-modal="true">
        <header class="machine-dialog__header">
          <div><span class="eyebrow">MACHINE PROFILE</span><h2>{{ isEditing ? '编辑机台' : '新增机台' }}</h2></div>
          <button class="icon-button" aria-label="关闭" @click="emit('close')">×</button>
        </header>
        <form class="machine-form" @submit.prevent="submit">
          <div class="form-section">
            <h3>基本信息</h3>
            <div class="form-grid">
              <label>机台编号 <b>*</b><input v-model="form.MachineNO" maxlength="50" /></label>
              <label>简称<input v-model="form.ShortName" maxlength="100" /></label>
              <label class="form-grid__wide">完整名称<input v-model="form.FullName" maxlength="200" /></label>
              <label>区域 <b>*</b><input v-model="form.Area" maxlength="30" /></label>
              <label>设备类型 <b>*</b><select v-model="form.Stype">
                <option value="" disabled>请选择设备类型</option>
                <option v-for="type in machineTypes" :key="type.Stype" :value="type.Stype">{{ type.DisplayName }}（{{ type.Stype }}）</option>
              </select></label>
              <label>品牌<input v-model="form.Brand" maxlength="50" /></label>
              <label>型号<input v-model="form.Model" maxlength="50" /></label>
              <label>出厂日期<input v-model="form.OutDate" type="date" /></label>
              <label>启用状态<select v-model.number="form.Status"><option :value="1">启用</option><option :value="0">停用</option></select></label>
            </div>
          </div>
          <div class="form-section">
            <h3>连接与采集</h3>
            <div class="form-grid">
              <label>IP 地址<input v-model="form.IpAddr" maxlength="50" placeholder="192.168.100.101" /></label>
              <label>端口<input v-model.number="form.PortNum" type="number" min="1" max="65535" /></label>
              <label>MAC 地址<input v-model="form.MacAddr" maxlength="50" /></label>
              <label>显示顺序<input v-model.number="form.OrderBy" type="number" /></label>
              <label>读取数量<input v-model.number="form.trCount" type="number" min="0" /></label>
              <label>写入数量<input v-model.number="form.tdCount" type="number" min="0" /></label>
              <label>列索引<input v-model.number="form.colIndex" type="number" min="0" /></label>
              <label>一对多系数<input v-model.number="form.tempOneToMany" type="number" min="1" /></label>
              <label class="form-grid__wide">临时项目<input v-model="form.tempItem" maxlength="255" /></label>
              <label class="form-grid__wide">备注<textarea v-model="form.Detail" maxlength="512" rows="3" /></label>
            </div>
          </div>
          <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
          <footer class="machine-dialog__footer">
            <button type="button" class="button button--ghost" @click="emit('close')">取消</button>
            <button type="submit" class="button button--primary" :disabled="saving">{{ saving ? '正在保存…' : '保存机台' }}</button>
          </footer>
        </form>
      </section>
    </div>
  </Teleport>
</template>
