import { reactive } from 'vue'
import { apiRequest } from './client'

export interface SessionUser { UserID:number; UserNO:string; UserName:string|null }
export interface Permission { ModuleKey:string; CanView:boolean|number; CanEdit:boolean|number }
const saved=localStorage.getItem('shineway_session')
let initial:{token?:string;user?:SessionUser}|null=null
if(saved)try{initial=JSON.parse(saved)}catch{localStorage.removeItem('shineway_session')}
export const auth=reactive<{token:string;user:SessionUser|null;permissions:Permission[]}>({token:initial?.token??'',user:initial?.user??null,permissions:[]})
export const login=async(UserNO:string,Password:string)=>{const r=await apiRequest<{data:{token:string;user:SessionUser}}>('/api/auth/login',{method:'POST',body:JSON.stringify({UserNO,Password})});auth.token=r.data.token;auth.user=r.data.user;localStorage.setItem('shineway_session',JSON.stringify(r.data));await loadPermissions()}
export const loadPermissions=async()=>{if(!auth.token)return;const r=await apiRequest<{data:Permission[]}>('/api/admin/my-permissions');auth.permissions=r.data}
export const logout=async()=>{try{await apiRequest('/api/auth/logout',{method:'POST'})}finally{auth.token='';auth.user=null;auth.permissions=[];localStorage.removeItem('shineway_session')}}
export const can=(key:string,edit=false)=>{const p=auth.permissions.find(x=>x.ModuleKey===key);return Boolean(edit?p?.CanEdit:p?.CanView)}
