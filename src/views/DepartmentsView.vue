<script setup lang="ts">
import { onMounted,ref } from 'vue';import { apiRequest } from '@/api/client';import { can } from '@/api/auth'
interface D{ID:number;DepartmentName:string;UserCount:number}const rows=ref<D[]>([]);const load=async()=>{rows.value=(await apiRequest<{data:D[]}>('/api/admin/departments')).data};
const add=async()=>{const n=prompt('部门名称');if(n){await apiRequest('/api/admin/departments',{method:'POST',body:JSON.stringify({DepartmentName:n})});await load()}}
const edit=async(d:D)=>{const n=prompt('部门名称',d.DepartmentName);if(n){await apiRequest(`/api/admin/departments/${d.ID}`,{method:'PUT',body:JSON.stringify({DepartmentName:n})});await load()}}
const remove=async(d:D)=>{if(confirm(`确定删除“${d.DepartmentName}”？`)){try{await apiRequest(`/api/admin/departments/${d.ID}`,{method:'DELETE'});await load()}catch(e){alert(e instanceof Error?e.message:'删除失败')}}};onMounted(load)
</script>
<template><div class="card machine-card"><div class="resource-header"><div><span class="eyebrow">ORGANIZATION</span><h2>部门管理</h2></div><button v-if="can('departments',true)" class="button button--primary" @click="add">新增部门</button></div><table><thead><tr><th>ID</th><th>部门名称</th><th>人数</th><th>操作</th></tr></thead><tbody><tr v-for="d in rows" :key="d.ID"><td>{{d.ID}}</td><td>{{d.DepartmentName}}</td><td>{{d.UserCount}}</td><td><button v-if="can('departments',true)" class="text-button" @click="edit(d)">编辑</button><button v-if="can('departments',true)" class="text-button text-button--danger" @click="remove(d)">删除</button></td></tr></tbody></table></div></template>
