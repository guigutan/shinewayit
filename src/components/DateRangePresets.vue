<script setup lang="ts">
import { dateRangePresets, type DateRangePreset } from '@/utils/date-range'

defineProps<{ active: DateRangePreset | null }>()
const emit = defineEmits<{ select: [preset: DateRangePreset] }>()
</script>

<template><div class="date-preset-control" role="group" aria-label="快速选择日期范围"><button v-for="item in dateRangePresets" :key="item.key" type="button" :class="{active:item.key===active}" @click="emit('select',item.key)">{{item.label}}</button></div></template>

<style scoped>.date-preset-control{display:flex;align-items:center;gap:3px;padding:3px;border:1px solid #d5e1de;border-radius:7px;background:#f4f8f7;white-space:nowrap}.date-preset-control button{height:32px;padding:0 9px;border:0;border-radius:5px;background:transparent;color:#64756f;font-size:10px;cursor:pointer}.date-preset-control button:hover{background:#fff;color:#286f63}.date-preset-control button.active{background:#287b6d;color:#fff;box-shadow:0 1px 3px rgba(20,70,61,.2)}@media(max-width:600px){.date-preset-control{width:100%;overflow-x:auto}.date-preset-control button{flex:1}}</style>
