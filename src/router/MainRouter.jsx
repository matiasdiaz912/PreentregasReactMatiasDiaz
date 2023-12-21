import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Category from "../pages/Category"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import NavBarComponent from "../componentes/NavBarComponents/NavBar"

const MainRouter = () => {
  return (
    <BrowserRouter>
     <NavBarComponent/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category/:id" element={<Category />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainRouter