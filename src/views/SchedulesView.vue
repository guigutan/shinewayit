<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { can } from '@/api/auth'
import { createSchedule, deleteSchedule, importSchedules, listPlanningMachines, listProducts, listSchedules, updateSchedule, type ImportedSchedule, type PlanningMachine, type Product, type Schedule, type SchedulePayload } from '@/api/planning'
import { downloadExcelTemplate, excelCell, excelDateTime, excelText, readExcelSheet } from '@/utils/excel'

const isoDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`
const date = ref(isoDate()), area = ref('一楼'), machines = ref<PlanningMachine[]>([]), products = ref<Product[]>([]), schedules = ref<Schedule[]>([])
const loading = ref(false), error = ref(''), editingId = ref<number | null>(null), importing = ref(false), importMessage = ref('')
const importInput = ref<HTMLInputElement | null>(null)
const form = ref<SchedulePayload>({ MachineID: 0, ProductID: null, StartTime: `${date.value}T08:00`, Note: null })
const areas = computed(() => [...new Set(machines.value.map(item => item.Area))])
const visibleMachines = computed(() => machines.value.filter(item => item.Area === area.value))
const dateStart = computed(() => new Date(`${date.value}T00:00:00`).getTime())
const dayEnd = computed(() => dateStart.value + 86_400_000)
const color = (id: number | null) => id === null ? '#82908c' : ['#17766e','#2f6fa3','#b47920','#9b4d5d','#6b5ca5'][id % 5]
const timeline = (machineId: number) => {
  const all = schedules.value.filter(item => item.MachineID === machineId).sort((a,b)=>a.StartTime.localeCompare(b.StartTime))
  const before = all.filter(item => new Date(item.StartTime.replace(' ','T')).getTime() < dateStart.value).at(-1)
  const today = all.filter(item => { const time = new Date(item.StartTime.replace(' ','T')).getTime(); return time >= dateStart.value && time < dayEnd.value })
  const points = before ? [before, ...today] : today
  return points.map((item,index) => { const rawStart = new Date(item.StartTime.replace(' ','T')).getTime(); const start = Math.max(rawStart,dateStart.value); const nextRaw = points[index+1] ? new Date(points[index+1]!.StartTime.replace(' ','T')).getTime() : dayEnd.value; const end = Math.min(nextRaw,dayEnd.value); return { ...item, left:(start-dateStart.value)/864_000, width:Math.max((end-start)/864_000,.6), startsBefore:rawStart<dateStart.value } })
}
const load = async () => { loading.value=true; error.value=''; try { schedules.value=await listSchedules(date.value,date.value,area.value) } catch(e){ error.value=e instanceof Error?e.message:'排产加载失败' } finally{loading.value=false} }
const resetForm = () => { editingId.value=null; form.value={MachineID:visibleMachines.value[0]?.MachineID??0,ProductID:null,StartTime:`${date.value}T08:00`,Note:null} }
const save = async () => { error.value=''; try { if(editingId.value) await updateSchedule(editingId.value,form.value); else await createSchedule(form.value); resetForm(); await load() } catch(e){error.value=e instanceof Error?e.message:'保存排产失败'} }
const edit = (item:Schedule) => { editingId.value=item.ScheduleID; form.value={MachineID:item.MachineID,ProductID:item.ProductID,StartTime:item.StartTime.replace(' ','T').slice(0,16),Note:item.Note} }
const remove = async(item:Schedule)=>{if(!confirm(`删除 ${item.MachineNO} 在 ${item.StartTime} 的排产点？`))return;await deleteSchedule(item.ScheduleID);if(editingId.value===item.ScheduleID)resetForm();await load()}
const importExcel = async (event:Event) => {
  const input=event.target as HTMLInputElement,file=input.files?.[0];input.value='';if(!file)return
  importing.value=true;error.value='';importMessage.value=''
  try{const {sheet,headers}=await readExcelSheet(file);const rows:ImportedSchedule[]=[]
    sheet.eachRow((row,index)=>{if(index===1)return;const MachineNO=excelText(excelCell(row,headers,['机台编码','MachineNO'])),StartTime=excelDateTime(excelCell(row,headers,['开始时间','StartTime']));const ProductCode=excelText(excelCell(row,headers,['产品编码','ProductCode']))||null
      if(!MachineNO&&!StartTime&&!ProductCode)return;if(!MachineNO||!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(StartTime))throw new Error(`第 ${index} 行机台编码或开始时间无效`);rows.push({MachineNO,ProductCode,StartTime,Note:excelText(excelCell(row,headers,['备注','Note']))||null})})
    if(!rows.length)throw new Error('没有读取到排产点；请使用机台排产批量导入模板')
    const result=await importSchedules(rows);importMessage.value=`排产导入完成：新增 ${result.inserted}，更新 ${result.updated}，共 ${result.total} 条`;await load()
  }catch(e){error.value=e instanceof Error?e.message:'机台排产批量导入失败'}finally{importing.value=false}
}
const downloadTemplate=()=>downloadExcelTemplate({sheetName:'机台排产',fileName:'机台排产批量导入模板.xlsx',headers:['机台编码','开始时间','产品编码','备注'],example:['C1',`${date.value} 08:00:00`,'A001','示例；产品编码留空表示停产']})
watch([date,area],()=>{resetForm();void load()})
onMounted(async()=>{try{[machines.value,products.value]=await Promise.all([listPlanningMachines(),listProducts()]);if(!areas.value.includes(area.value))area.value=areas.value[0]??'';resetForm();await load()}catch(e){error.value=e instanceof Error?e.message:'基础数据加载失败'}})
</script>

<template><div class="planning-page">
  <section class="planning-toolbar"><div><span class="eyebrow">MACHINE SCHEDULE</span><h2>机台排产时间线</h2><p>一个排产点从设定时刻持续生效，直到该机台出现下一个排产点。</p><div v-if="can('schedules',true)" class="schedule-import-actions"><input ref="importInput" type="file" accept=".xlsx" hidden @change="importExcel"/><button class="button button--ghost" type="button" @click="downloadTemplate">下载导入模板</button><button class="button button--dark" type="button" :disabled="importing" @click="importInput?.click()">{{importing?'导入中…':'批量导入'}}</button></div></div><label>排产日期<input v-model="date" type="date" /></label><label>楼层 / 区域<select v-model="area"><option v-for="item in areas" :key="item">{{item}}</option></select></label></section>
  <div v-if="importMessage" class="notice">{{importMessage}}</div><div v-if="error" class="notice notice--error">{{error}}</div>
  <div class="planning-grid"><form v-if="can('schedules',true)" class="schedule-editor" @submit.prevent="save"><header><h3>{{editingId?'编辑排产点':'新增排产点'}}</h3><button v-if="editingId" type="button" class="text-button" @click="resetForm">取消编辑</button></header><label>机台<select v-model.number="form.MachineID" required><option :value="0" disabled>请选择机台</option><option v-for="item in visibleMachines" :key="item.MachineID" :value="item.MachineID">{{item.MachineNO}}</option></select></label><label>开始时间<input v-model="form.StartTime" type="datetime-local" required /></label><label>生产产品<select v-model="form.ProductID"><option :value="null">停产 / 排空</option><option v-for="item in products.filter(x=>x.Status)" :key="item.ProductID" :value="item.ProductID">{{item.ProductCode}} · {{item.ShortName||item.ProductName}}</option></select></label><label>备注<textarea v-model.trim="form.Note" rows="3" maxlength="255" placeholder="可选"></textarea></label><button class="button button--primary" :disabled="!form.MachineID">{{editingId?'保存修改':'添加排产点'}}</button><p class="editor-tip">选择“停产 / 排空”后，该时刻起标准产量为 0。</p></form>
    <section class="timeline-panel"><div class="timeline-hours"><span class="machine-axis">机台</span><span v-for="hour in [0,4,8,12,16,20,24]" :key="hour" :style="{left:`calc(150px + (100% - 150px) * ${hour/24})`}">{{String(hour).padStart(2,'0')}}:00</span></div><div v-if="loading" class="table-state">正在生成时间线…</div><div v-else-if="!visibleMachines.length" class="table-state">该区域暂无机台</div><div v-for="machine in visibleMachines" v-else :key="machine.MachineID" class="timeline-row"><div class="timeline-machine"><strong>{{machine.MachineNO}}</strong><small>{{machine.ShortName||'未命名'}}</small></div><div class="timeline-track"><button v-for="item in timeline(machine.MachineID)" :key="item.ScheduleID" class="timeline-segment" :class="{'timeline-segment--empty':item.ProductID===null}" :style="{left:`${item.left}%`,width:`${item.width}%`,background:color(item.ProductID)}" :title="`${item.StartTime} · ${item.ProductCode||'停产'}${item.Note?' · '+item.Note:''}`" @click="edit(item)"><span>{{item.ProductCode||'停产'}}</span><small v-if="!item.startsBefore">{{item.StartTime.slice(11,16)}}</small></button></div></div>
    <footer class="schedule-events"><h3>当日排产点</h3><div v-if="!schedules.filter(x=>x.StartTime.startsWith(date)).length" class="empty-inline">当天没有新增排产点，机台继续沿用此前排产。</div><div v-for="item in schedules.filter(x=>x.StartTime.startsWith(date))" :key="item.ScheduleID" class="event-row"><time>{{item.StartTime.slice(11,16)}}</time><strong>{{item.MachineNO}}</strong><span :style="{borderColor:color(item.ProductID)}">{{item.ProductCode||'停产 / 排空'}}</span><small>{{item.Note}}</small><button v-if="can('schedules',true)" class="text-button" @click="edit(item)">编辑</button><button v-if="can('schedules',true)" class="text-button text-button--danger" @click="remove(item)">删除</button></div></footer></section>
  </div>
</div></template>
<style scoped>.schedule-import-actions{display:flex;align-items:center;gap:8px;margin-top:12px}.schedule-import-actions .button{min-height:36px;padding:7px 11px}@media(max-width:620px){.schedule-import-actions{align-items:stretch;flex-direction:column}}</style>
