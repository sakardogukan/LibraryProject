import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./styles/theme"
import AppRouter from "./router/AppRouter"
import { GlobalStyles } from "./styles/Global.styles"
import { useThemeContext } from "./context/ThemeContext"
import AuthContextProvider from "./context/AuthContext"

function App() {
  const { myTheme } = useThemeContext()
  const themes = myTheme === "light" ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
