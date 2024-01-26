import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {CartContext} from "../../../../context/CartContext"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemCount.css"
import { useGetProductsById } from "../../../Custom Hooks/GetProductsById";

const ItemCount = () => {

  const { id } = useParams()

  const { Product } = useGetProductsById(id)

    const {quantity, setQuantity, actualizarCarrito, reject} = useContext(CartContext)


    const addQuantity = () =>{
        setQuantity(quantity + 1)
      }
    
      const subtractQuantity = () =>{
        quantity !== 0 && setQuantity(quantity - 1) 
      }

    //   useEffect(() => {
    //     setQuantity(0)
    // }, [id])

  return (
    <>

    <div className="cantidad">
        <h3>Cantidad: {quantity}</h3>
        <p className={`${reject ? 'alerta' : 'noMostrar'}`} >Para enviar al carrito debe ingresar al menos 1 unidad</p>
        <FontAwesomeIcon onClick={subtractQuantity} className="icons" icon={faMinus}/>
        <FontAwesomeIcon onClick={addQuantity} className="icons" icon={faPlus}/>
   </div>
        <button className={"countAgregar"} onClick={() => actualizarCarrito(Product, quantity)}>Agregar Al Carrito</button>
    </>
  )
}

export default ItemCount