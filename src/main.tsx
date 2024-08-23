import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { UserContextProvider } from './hooks'

const element = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(element)

root.render(
  <UserContextProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </UserContextProvider>
)
