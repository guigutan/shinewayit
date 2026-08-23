import dayjs from 'dayjs'

export type DateRangePreset = 'today' | 'week' | 'month' | 'current-month'

export const dateRangePresets: Array<{ key: DateRangePreset; label: string }> = [
  { key: 'today', label: '当天' },
  { key: 'week', label: '一周' },
  { key: 'month', label: '最近一个月' },
  { key: 'current-month', label: '当前自然月' },
]

export const dateRangeFor = (preset: DateRangePreset) => {
  const today = dayjs()
  if (preset === 'today') return { startDate: today.format('YYYY-MM-DD'), endDate: today.format('YYYY-MM-DD') }
  if (preset === 'week') return { startDate: today.subtract(6, 'day').format('YYYY-MM-DD'), endDate: today.format('YYYY-MM-DD') }
  if (preset === 'month') return { startDate: today.subtract(1, 'month').format('YYYY-MM-DD'), endDate: today.format('YYYY-MM-DD') }
  return { startDate: today.startOf('month').format('YYYY-MM-DD'), endDate: today.endOf('month').format('YYYY-MM-DD') }
}
