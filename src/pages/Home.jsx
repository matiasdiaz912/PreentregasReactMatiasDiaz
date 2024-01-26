import { useContext, useEffect } from "react"
import Category from "../componentes/itemListContainer/Categories/Category"
import ItemListContainer from "../componentes/itemListContainer/ItemListContainer"
import useGetProducts from "../Custom Hooks/GetProducts"
import { NavContext } from "../../context/NavContexts"

const Home = () => {

  const {Products} = useGetProducts("Productos")
  const {openMenu} = useContext(NavContext)

  useEffect(() => {
    document.title = "Inicio"
  }, [])

  return (
   <div>
     <Category open={openMenu}/>

     <section style={{position: "relative", marginTop: "10px"}}>
     <img style={{width: "100vw", height: "30vh"}} src="multimedia\img\blackFridaySection.jfif" alt="Fondo para promocionar el Black Friday" />
     <h2 style={{color: "white", position: "absolute", top: "40%", left: "30%", fontSize: "2.5em"}}>Black Friday - 30% de Descuento </h2>
     </section>

     <h1 style={{textAlign: "center", margin: "30px 0"}}>Productos</h1>
     <ItemListContainer Products={Products}/>
   </div>
  )
}

export default Home