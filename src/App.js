import "./App.css"
import HEADER from "./Companintis/Header/header.jsx"
import LOGIN from "./Companintis/Login/login.jsx"
import FOOTER from "./Companintis/Footer/footer.jsx"

function App() {
  return (
    <>
      <HEADER/>
      <LOGIN />
      <FOOTER>
        <p>Abdusattor</p>
      </FOOTER>
    </>
  )
}

export default App

/* const elementH1 = react.createElement("DIV", {}, null)
const elementDiv = react.createElement("DIV", {}, [elementH1])
 */