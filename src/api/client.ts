interface ApiErrorBody { error?: string }

export class ApiError extends Error {
  public readonly status: number

  public constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export const apiRequest = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const headers = new Headers(init?.headers)
  const saved = localStorage.getItem('shineway_session')
  if (saved) {
    try {
      const token = (JSON.parse(saved) as { token?: string }).token
      if (token) headers.set('Authorization', `Bearer ${token}`)
    } catch {
      localStorage.removeItem('shineway_session')
    }
  }
  if (init?.body) headers.set('Content-Type', 'application/json')
  const response = await fetch(path, { ...init, headers })
  if (!response.ok) {
    const body = await response.json().catch(() => ({})) as ApiErrorBody
    throw new ApiError(body.error ?? `请求失败（${response.status}）`, response.status)
  }
  if (response.status === 204) return undefined as T
  return response.json() as Promise<T>
}
