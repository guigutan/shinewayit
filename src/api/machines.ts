import { apiRequest } from './client'
import type { Machine, MachineListMeta, MachinePayload } from '@/types/machine'

interface DataResponse<T> { data: T }
interface MachineListResponse extends DataResponse<Machine[]> { meta: MachineListMeta }

export interface MachineFilters {
  page: number
  pageSize: number
  search: string
  area: string
  status: '' | '0' | '1'
}

export const listMachines = async (filters: MachineFilters): Promise<MachineListResponse> => {
  const query = new URLSearchParams({ page: String(filters.page), pageSize: String(filters.pageSize) })
  if (filters.search) query.set('search', filters.search)
  if (filters.area) query.set('area', filters.area)
  if (filters.status) query.set('status', filters.status)
  return apiRequest<MachineListResponse>(`/api/admin/machines?${query}`)
}

export const createMachine = async (payload: MachinePayload): Promise<Machine> => {
  const response = await apiRequest<DataResponse<Machine>>('/api/admin/machines', {
    method: 'POST', body: JSON.stringify(payload),
  })
  return response.data
}

export const updateMachine = async (machineId: number, payload: MachinePayload): Promise<Machine> => {
  const response = await apiRequest<DataResponse<Machine>>(`/api/admin/machines/${machineId}`, {
    method: 'PUT', body: JSON.stringify(payload),
  })
  return response.data
}

export const deactivateMachine = async (machineId: number): Promise<void> => {
  await apiRequest<void>(`/api/admin/machines/${machineId}`, {
    method: 'DELETE', body: JSON.stringify({ operator: 'shinewayit' }),
  })
}
