import ItemListContainer from "../componentes/itemListContainer/ItemListContainer"
import useGetProducts from "../Custom Hooks/GetProducts"

const Home = () => {

  const {Products} = useGetProducts()

  return (
   <div>
     <ItemListContainer Products={Products}/>
   </div>
  )
}

export default Home