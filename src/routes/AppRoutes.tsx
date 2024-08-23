import { Routes, Route } from 'react-router-dom'
import { Admin, Home, Login } from '../pages'
import { ProtectedRoutes } from './ProtectedRoutes'
import { BaseLayout } from './BaseLayout'
import { AdminRoutes } from './AdminRoutes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<p>Not Found!</p>} path="*" />
        <Route element={<AdminRoutes />}>
          <Route element={<Admin />} path="/admin" />
        </Route>
        <Route element={<ProtectedRoutes />}>
          {/* <Route element={<Admin />} path="/admin" /> */}
        </Route>
      </Route>
    </Routes>
  )
}
