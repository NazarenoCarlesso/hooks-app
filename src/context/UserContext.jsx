import { createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo' }}>
      {children}
    </UserContext.Provider>
  )
}
