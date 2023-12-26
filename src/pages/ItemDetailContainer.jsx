import { useParams } from "react-router-dom"
import {useGetProductsById} from "../Custom Hooks/GetProductsById"
import "./itemDetail.css"

const ItemDetailContainer = () => {

    const {id} = useParams()

     const { Product } = useGetProductsById(id)
     console.log(Product);
    

  return (
    <div className="onlyCard">
  
    <img  src={Product.thumbnail} alt="" />
    <div className="infoCard">
    <h1>{Product.title}</h1>
    <p>{Product.brand}</p>
    <p>{Product.description}</p>
    <p className="price">${Product.price}</p>
    <button>Buy Now</button>

    </div>
    </div>
  )
}

export default ItemDetailContainer