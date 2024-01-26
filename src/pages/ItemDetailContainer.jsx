import { useParams } from "react-router-dom"
import { useGetProductsById } from "../Custom Hooks/GetProductsById"
import "./itemDetail.css"
import { useEffect, useState } from "react"
import ItemCount from "../componentes/NavBarComponents/cartWidget/itemCount"

const ItemDetailContainer = () => {


   const { id } = useParams()

  const { Product, Title } = useGetProductsById(id)

  useEffect(() => {
    document.title = Title
  }, [])


  return (
    <div className="onlyCard">

      <img src={Product.image} alt="" />
       <div className="infoCard">
        <p className="product--brand">{Product.brand}</p>
        <h1 className="product--title">{Product.title}</h1>
        <p className="product--price">${Product.price}</p>
        <ItemCount />
      </div>
    </div>
  )
}

export default ItemDetailContainer