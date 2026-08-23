import { apiRequest } from './client'

export interface OaSyncResult {
  total:number
  inserted:number
  updated:number
  skippedInactive:number
  skippedInvalid:number
}

export const syncOaUsers=async()=>(
  await apiRequest<{data:OaSyncResult}>('/api/admin/users/sync-oa',{method:'POST'})
).data
