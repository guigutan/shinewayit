const rawText = (value: unknown): string => {
  if (value && typeof value === 'object') {
    if ('text' in value) return String(value.text ?? '').trim()
    if ('result' in value) return String(value.result ?? '').trim()
  }
  return String(value ?? '').trim()
}

export const excelText = (value: unknown): string => rawText(value)

export const readExcelSheet = async (file: File) => {
  const { default: ExcelJS } = await import('exceljs')
  const workbook = new ExcelJS.Workbook()
  await workbook.xlsx.load(await file.arrayBuffer())
  const sheet = workbook.worksheets[0]
  if (!sheet) throw new Error('Excel 中没有工作表')
  const headers = new Map<string, number>()
  sheet.getRow(1).eachCell((cell, column) => headers.set(rawText(cell.value), column))
  return { sheet, headers }
}

export const excelCell = (row: any, headers: Map<string, number>, names: string[]): unknown => {
  for (const name of names) {
    const column = headers.get(name)
    if (column) return row.getCell(column).value
  }
  return ''
}

const pad = (value: number) => String(value).padStart(2, '0')
const formatDateTime = (date: Date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`

export const excelDateTime = (value: unknown): string => {
  if (value instanceof Date) return formatDateTime(value)
  if (typeof value === 'number') {
    const milliseconds = Math.round((value - 25569) * 86_400_000)
    const date = new Date(milliseconds)
    return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`
  }
  const normalized = rawText(value).replaceAll('/', '-').replace('T', ' ')
  if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) return `${normalized} 00:00:00`
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(normalized)) return `${normalized}:00`
  return normalized
}

export const downloadExcelTemplate = async (options: {
  sheetName: string
  fileName: string
  headers: string[]
  example: Array<string | number>
}) => {
  const { default: ExcelJS } = await import('exceljs')
  const workbook = new ExcelJS.Workbook()
  const sheet = workbook.addWorksheet(options.sheetName)
  sheet.addRow(options.headers)
  sheet.addRow(options.example)
  sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } }
  sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF287B6D' } }
  sheet.views = [{ state: 'frozen', ySplit: 1 }]
  sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: options.headers.length } }
  sheet.columns.forEach(column => { column.width = 18 })
  const buffer = await workbook.xlsx.writeBuffer()
  const url = URL.createObjectURL(new Blob([new Uint8Array(buffer)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }))
  const link = document.createElement('a')
  link.href = url
  link.download = options.fileName
  link.click()
  URL.revokeObjectURL(url)
}
