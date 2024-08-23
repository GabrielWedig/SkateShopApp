export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
}

export interface RegisterUserRequest {
  name: string
  email: string
  password: string
}
