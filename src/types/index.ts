// src\types\index.ts

export interface User {
  id: string
  email: string
  first_name: string | null
  last_name: string | null
  role: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  data: {
    access_token: string
    expires: number
    refresh_token: string
  }
}

export interface UserResponse {
  data: User
}