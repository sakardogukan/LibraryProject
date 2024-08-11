// Auth Context

import { createContext, useContext, useEffect, useState } from "react"

//! 1- Theme Context oluşturulması:
const AuthContext = createContext()

//! 2- Sarmalayıcı (Provider) Componenet:
const AuthContextProvider = ({ children }) => {
  // local State
  const [user, setUser] = useState(
    sessionStorage.getItem("user") || false
  )
  
  const values = { user, setUser }

  useEffect(() => {
    sessionStorage.setItem("user", user)
  }, [user])

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

//! 3- Consuming custom hook:
export const useAuthContext = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider
