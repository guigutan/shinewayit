export interface Machine {
  MachineID: number
  MachineNO: string
  ShortName: string | null
  FullName: string | null
  Brand: string | null
  Model: string | null
  Detail: string | null
  Area: string
  Stype: string
  OutDate: string | null
  Status: number
  MacAddr: string | null
  IpAddr: string | null
  PortNum: number | null
  OrderBy: number | null
  trCount: number | null
  tdCount: number | null
  colIndex: number | null
  tempItem: string | null
  tempOneToMany: number
  CreateUser: string | null
  CreateTime: string
  UpdateUser: string | null
  UpdateTime: string
}

export interface MachinePayload {
  MachineNO: string
  ShortName: string | null
  FullName: string | null
  Brand: string | null
  Model: string | null
  Detail: string | null
  Area: string
  Stype: string
  OutDate: string | null
  Status: number
  MacAddr: string | null
  IpAddr: string | null
  PortNum: number | null
  OrderBy: number
  trCount: number
  tdCount: number
  colIndex: number
  tempItem: string | null
  tempOneToMany: number
  operator: string
}

export interface MachineListMeta {
  page: number
  pageSize: number
  total: number
  pageCount: number
}
