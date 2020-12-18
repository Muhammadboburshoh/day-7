import "./footer.css"

import {ThemeContext} from "../../ThemeContext"
import { useContext } from "react"

function Footer ({ children }) {

  const theme = useContext(ThemeContext)

  return (
    <footer className={theme}>
      {children}
      <p>&copy; Copyright 2020</p>
    </footer>
  )
}

export default Footer