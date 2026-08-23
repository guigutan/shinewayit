import { apiRequest } from './client'

export interface Product {
  ProductID: number
  ProductCode: string
  ProductName: string
  ShortName: string | null
  Specification: string | null
  CycleSeconds: number
  Cavities: number
  Status: number
}
export type ProductPayload = Omit<Product, 'ProductID'>
export interface PlanningMachine { MachineID: number; MachineNO: string; ShortName: string | null; Area: string; Status: number }
export interface Schedule {
  ScheduleID: number; MachineID: number; MachineNO: string; Area: string; ProductID: number | null
  ProductCode: string | null; ProductName: string | null; ShortName: string | null; CycleSeconds: number | null
  Cavities: number | null; StartTime: string; Note: string | null; CreateUser: string | null
}
export interface SchedulePayload { MachineID: number; ProductID: number | null; StartTime: string; Note: string | null }
export interface ImportedSchedule { MachineNO: string; ProductCode: string | null; StartTime: string; Note: string | null }
export interface BulkImportResult { total: number; inserted: number; updated: number }
interface Data<T> { data: T }

export const listProducts = async () => (await apiRequest<Data<Product[]>>('/api/admin/planning/products')).data
export const createProduct = async (payload: ProductPayload) => (await apiRequest<Data<Product>>('/api/admin/planning/products', { method: 'POST', body: JSON.stringify(payload) })).data
export const updateProduct = async (id: number, payload: ProductPayload) => (await apiRequest<Data<Product>>(`/api/admin/planning/products/${id}`, { method: 'PUT', body: JSON.stringify(payload) })).data
export const deactivateProduct = async (id: number) => apiRequest<void>(`/api/admin/planning/products/${id}`, { method: 'DELETE' })
export const importProducts = async (rows: ProductPayload[]) => (await apiRequest<Data<BulkImportResult>>('/api/admin/planning/products/import', { method: 'POST', body: JSON.stringify({ rows }) })).data
export const listPlanningMachines = async () => (await apiRequest<Data<PlanningMachine[]>>('/api/admin/planning/machines')).data
export const listSchedules = async (start: string, end: string, area: string) => {
  const query = new URLSearchParams({ start, end, area })
  return (await apiRequest<Data<Schedule[]>>(`/api/admin/planning/schedules?${query}`)).data
}
export const createSchedule = async (payload: SchedulePayload) => (await apiRequest<Data<Schedule>>('/api/admin/planning/schedules', { method: 'POST', body: JSON.stringify(payload) })).data
export const updateSchedule = async (id: number, payload: SchedulePayload) => (await apiRequest<Data<Schedule>>(`/api/admin/planning/schedules/${id}`, { method: 'PUT', body: JSON.stringify(payload) })).data
export const deleteSchedule = async (id: number) => apiRequest<void>(`/api/admin/planning/schedules/${id}`, { method: 'DELETE' })
export const importSchedules = async (rows: ImportedSchedule[]) => (await apiRequest<Data<BulkImportResult>>('/api/admin/planning/schedules/import', { method: 'POST', body: JSON.stringify({ rows }) })).data
