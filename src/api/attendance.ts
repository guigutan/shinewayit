import { apiRequest } from './client'

export interface AttendanceFilters { name:string; workCode:string; hrNumber:string; startDate:string; endDate:string; page:number; pageSize:number }
export interface AttendanceRow { userNO:string|null; userName:string|null; hrNumber:string; logTime:string }
export interface AttendanceMeta { page:number; pageSize:number; total:number; pageCount:number }
export const listAttendance=(filters:AttendanceFilters)=>apiRequest<{data:AttendanceRow[];meta:AttendanceMeta}>(`/api/attendance?${new URLSearchParams(Object.entries(filters).map(([key,value])=>[key,String(value)]))}`)
