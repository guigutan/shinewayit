import { apiRequest } from './client'
import type { MachineType, MachineTypePayload } from '@/types/machine-type'

interface DataResponse<T> { data: T }

export const listMachineTypes = async (active = false): Promise<MachineType[]> => {
  const response = await apiRequest<DataResponse<MachineType[]>>(`/api/machine-types?active=${active}`)
  return response.data
}

export const createMachineType = async (payload: MachineTypePayload): Promise<MachineType> => {
  const response = await apiRequest<DataResponse<MachineType>>('/api/machine-types', {
    method: 'POST', body: JSON.stringify(payload),
  })
  return response.data
}

export const updateMachineType = async (stype: string, payload: Omit<MachineTypePayload, 'Stype'>): Promise<MachineType> => {
  const response = await apiRequest<DataResponse<MachineType>>(`/api/machine-types/${encodeURIComponent(stype)}`, {
    method: 'PUT', body: JSON.stringify(payload),
  })
  return response.data
}

export const deactivateMachineType = async (stype: string): Promise<void> => {
  await apiRequest<void>(`/api/machine-types/${encodeURIComponent(stype)}`, { method: 'DELETE' })
}

export const uploadMachineTypeIcon = async (stype: string, file: File): Promise<MachineType> => {
  const base64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',', 2)[1] ?? '')
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
  const response = await apiRequest<DataResponse<MachineType>>(`/api/machine-types/${encodeURIComponent(stype)}/icon`, {
    method: 'PUT', body: JSON.stringify({ mime: file.type, base64 }),
  })
  return response.data
}
