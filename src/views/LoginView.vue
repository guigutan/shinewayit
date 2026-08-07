<script setup lang="ts">
import { ref } from 'vue';import { useRouter } from 'vue-router';import { login } from '@/api/auth'
const UserNO=ref('');const Password=ref('');const error=ref('');const busy=ref(false);const router=useRouter()
const submit=async()=>{busy.value=true;error.value='';try{await login(UserNO.value,Password.value);await router.push('/')}catch(e){error.value=e instanceof Error?e.message:'登录失败'}finally{busy.value=false}}
</script>
<template><main class="login-page"><form class="login-card" @submit.prevent="submit"><div class="brand__mark">S</div><h1>Shineway 管理中心</h1><p>请使用工号和密码登录</p><label>工号<input v-model="UserNO" required autofocus></label><label>密码<input v-model="Password" type="password" required></label><div v-if="error" class="form-error">{{error}}</div><button class="button button--primary" :disabled="busy">{{busy?'登录中…':'登录'}}</button></form></main></template>
