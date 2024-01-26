import { BrowserRouter, Routes, Route } from "react-router-dom"
 import Home from "../pages/Home"
 import ItemDetailContainer from "../pages/ItemDetailContainer"
import NavBarComponent from "../componentes/NavBarComponents/NavBar"
import FooterComponent from "../componentes/FooterComponent/Footer"
import Login from "../pages/LoginComponent/login"
import SignUp from "../pages/SignUpComponent/SignUp"
import { useContext } from "react"
import { darkModeContext } from "../../context/darkModeContext"
import "./mainRouter.css"
import ProductsByCategory from "../pages/Categories/Categories"
import Carrito from "../pages/Carrito/Carrito"
import Favoritos from "../pages/Favoritos/Favoritos"


const MainRouter = () => {

  const {changeBackground} = useContext(darkModeContext)


  return (
    <div className={`darkMode${changeBackground ? 'Activate' : 'Desactivate' }`}>
    <BrowserRouter>
     <NavBarComponent />
     <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registrarme" element={<SignUp />}/>
        <Route path="/category/:categorie" element={<ProductsByCategory />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/favoritos" element={<Favoritos />}/>
    </Routes>

      <FooterComponent />
    </BrowserRouter>
    </div>
  )
}

export default MainRouter