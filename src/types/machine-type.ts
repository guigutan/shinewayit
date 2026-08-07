export interface MachineType {
  Stype: string
  DisplayName: string
  Status: number
  OrderBy: number
  MachineCount: number
  IconMime: string | null
  IconUpdatedAt: string | null
  IconUrl: string | null
  CreateTime: string
  UpdateTime: string
}

export interface MachineTypePayload {
  Stype: string
  DisplayName: string
  Status: number
  OrderBy: number
}
