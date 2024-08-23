import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../hooks'

export const AdminRoutes = () => {
  const { isAdmin } = useUserContext()
  return isAdmin ? <Outlet /> : <Navigate to="/" />
}
