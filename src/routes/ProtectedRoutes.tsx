import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../hooks'

export const ProtectedRoutes = () => {
  const { isLogged } = useUserContext()
  return isLogged ? <Outlet /> : <Navigate to="/" />
}
