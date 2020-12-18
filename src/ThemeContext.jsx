import { createContext } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

  return (
    <ThemeContext.Provider value={"dark"}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeProvider,
  ThemeContext,
}