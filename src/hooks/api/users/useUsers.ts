import {
  LoginRequest,
  LoginResponse,
  RegisterUserRequest,
  useRequest
} from '..'
import { useUserContext } from '../..'

export const useUsers = () => {
  const { post } = useRequest('users')
  const { signIn } = useUserContext()

  const login = async (request: LoginRequest): Promise<void> => {
    const { data } = await post<LoginResponse>('login', request)
    signIn(data.token)
  }

  const register = async (request: RegisterUserRequest): Promise<void> => {
    const { data } = await post<LoginResponse>('', request)
    signIn(data.token)
  }

  return {
    login,
    register
  }
}
