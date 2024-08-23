import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
