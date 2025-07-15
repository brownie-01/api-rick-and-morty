import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import './App.css'

function App() {

  return (
    <>
    <Nav />
    {/* Outlet muestra el componente asociado a la ruta actual (homePage, charactersPage) */}
    <Outlet />
    </>
  )
}

export default App
