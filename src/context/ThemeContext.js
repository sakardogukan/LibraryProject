// Theme Context

import { createContext, useContext, useState } from "react"

//! 1- Theme Context oluşturulması:
const ThemeContext = createContext()

//! 2- Sarmalayıcı (Provider) Componenet:
const ThemeContextProvider = ({ children }) => {

    // local State
    const [myTheme, setMyTheme] = useState("light")
    const values = { myTheme, setMyTheme }

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    )
}

//! 3- Consuming custom hook:
export const useThemeContext = () => {
    return useContext(ThemeContext)
}

export default ThemeContextProvider
