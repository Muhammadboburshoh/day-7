import userEvent from "@testing-library/user-event";
import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "light")

  useEffect(() => {

    window.localStorage.setItem("theme", theme)

  },[
    theme,
  ])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeProvider,
  ThemeContext,
}