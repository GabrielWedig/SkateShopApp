import { createContext, useContext, useState } from 'react'

interface User {
  id: string
  email: string
}

interface ContextProps {
  user: User | null
  isAdmin: boolean
  isLogged: boolean
  setUser: (user: User) => void
}

interface ProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext<ContextProps>({} as ContextProps)

export const UserContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const isAdmin = user?.email === 'admin'
  const isLogged = !!user

  return (
    <UserContext.Provider
      value={{
        user,
        isAdmin,
        isLogged,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
