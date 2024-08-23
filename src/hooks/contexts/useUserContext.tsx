import { jwtDecode, JwtPayload } from 'jwt-decode'
import { createContext, useContext, useState } from 'react'

interface Token extends JwtPayload {
  email: string
  name: string
  isAdmin: string
}

interface User {
  id: string
  email: string
  name: string
  isAdmin: boolean
}

interface ContextProps {
  user: User | null
  isAdmin: boolean
  isLogged: boolean
  signIn: (token: string) => void
  signOut: () => void
}

interface ProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext<ContextProps>({} as ContextProps)

export const UserContextProvider = ({ children }: ProviderProps) => {
  const getUser = () => {
    const token = sessionStorage.getItem('token')
    return token ? fillUser(jwtDecode<Token>(token)) : null
  }

  const fillUser = (decoded: Token) => ({
    id: decoded.sub ?? '',
    name: decoded.name,
    email: decoded.email,
    isAdmin: decoded.isAdmin === 'True'
  })

  const [user, setUser] = useState<User | null>(getUser())

  const signIn = (token: string) => {
    sessionStorage.setItem('token', token)
    const decoded = jwtDecode<Token>(token)
    setUser(fillUser(decoded))
  }

  const signOut = () => {
    sessionStorage.removeItem('token')
    setUser(null)
  }

  const isAdmin = user?.isAdmin ?? false
  const isLogged = !!user

  return (
    <UserContext.Provider
      value={{
        user,
        isAdmin,
        isLogged,
        signIn,
        signOut
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
