// Auth Context

import { createContext, useContext, useState } from "react"

//! 1- Theme Context oluşturulması:
const AuthContext = createContext()

//! 2- Sarmalayıcı (Provider) Componenet:
const AuthContextProvider = ({ children }) => {
  // local State
  const [user, setUser] = useState(false)
  const values = { user, setUser }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

//! 3- Consuming custom hook:
export const useAuthContext = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider
