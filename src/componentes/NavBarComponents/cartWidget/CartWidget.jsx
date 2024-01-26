import "./cartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {productosCarrito} = useContext(CartContext)


  return (
    <>
      <Link to={"/carrito"} title="Carrito" className="cart">
        <FontAwesomeIcon icon={faShoppingCart}/>
        <h2> {productosCarrito}</h2>
      </Link>
    </>
  )
}

export default CartWidget