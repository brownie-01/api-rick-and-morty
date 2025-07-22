import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import './App.css'
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Nav />
    {/* Outlet muestra el componente asociado a la ruta actual (homePage, charactersPage) */}
    <Outlet />
    <Footer />
    </>
  )
}

export default App
