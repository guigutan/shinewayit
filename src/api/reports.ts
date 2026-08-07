import { apiRequest } from './client'
export type ReportType='leave'|'group-leave'|'group-overtime'|'travel'|'sign-card'
export interface ReportFilters{type:ReportType;name:string;workCode:string;startDate:string;endDate:string}
export type ReportRow=Record<string,string|number|null>
export const listReport=(filters:ReportFilters)=>apiRequest<{data:ReportRow[]}>(`/api/reports?${new URLSearchParams({...filters})}`)
