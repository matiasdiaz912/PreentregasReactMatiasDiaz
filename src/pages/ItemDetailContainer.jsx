import { useParams } from "react-router-dom"
import { GetProductsById } from "../componentes/itemContainer/ItemListContainer"

const ItemDetailContainer = () => {

  const {id} = useParams()

  const {producto} = GetProductsById(id)

  return (
    <div> 
      <div style={{width: "300px", height: "300px", marginBottom: "20px", border:"solid gray 1px"}} key={item.id}>
  
    <img style={{height: "150px"}} src={producto.thumbnail} alt="" />
    <h1>{producto.title}</h1>
    <p>{producto.description}</p>
    <button>Buy Now</button>
</div>
</div>
  )
}

export default ItemDetailContainer