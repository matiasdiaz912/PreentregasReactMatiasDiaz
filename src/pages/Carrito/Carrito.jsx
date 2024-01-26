import React, { useContext, useState , useEffect} from 'react'
import "./Carrito.css"
import { CartContext } from '../../../context/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMinus, faTrash} from '@fortawesome/free-solid-svg-icons';

const Carrito = () => {

  const {carrito, cantidadTotal, setCarrito, setProductosCarrito} = useContext(CartContext)

  const [cantidad, setCantidad] = useState(carrito)

  useEffect(() => {
    const nuevaCantidad = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    setProductosCarrito(nuevaCantidad)
  }, [carrito])

  const deleteCart = () =>{
    setCarrito([])
    setProductosCarrito(0)
  }

  const eliminarProducto = (indexProducto) => {
    const newCart = [...carrito]
    newCart.splice(indexProducto, 1)
    setCarrito(newCart)
  }

  const restarCantidad = (index) =>{
    const newQuantity = [...cantidad]
    if( newQuantity[index].cantidad === 1 ){
      newQuantity.splice(index, 1)
    }else{
      newQuantity[index].cantidad--
    }
    setCarrito(newQuantity)

  }


  useEffect(() => {
    document.title = "Carrito"
  })
      

  return (
    <div className='carrito'>
        <h1 style={{textAlign: "start", marginLeft: 200}}>Carrito</h1>
         

        {

          carrito.length === 0 ? <h1>El carrito esta vacio :(</h1> : <section className='miCarritoNombres'>
            <h2>Imagen</h2>
            <h2>Nombre</h2>
            <p>Marca</p>
            <p >Precio</p>
            <p>Cantidad</p>
              </section>
        }

        {
          carrito.map((item, index) =>{
            return(
              <section key={item.id} className='miCarrito'>
              <img className='image' src={item.image} alt={item.title} />
              <h1 className='title'>{item.title}</h1>
              <p className='brand'>{item.brand}</p>
              <p className='price'>${item.price}</p>
               <p> {cantidad[index].cantidad} Unidades</p>
              <div>
            <FontAwesomeIcon onClick={() => restarCantidad(index)} className='iconsCart' icon={faMinus}/> 
            <FontAwesomeIcon onClick={() => eliminarProducto(index)} icon={faTrash } className="iconsCart" />
              </div>
          </section>
              )
            })
        }

        {
         carrito.length === 0 || <section className='miCarritoCuenta'>
        <h2>Precio Final: ${cantidadTotal}</h2>
        <button>Comprar</button>

        <article>
          <button onClick={deleteCart} className='eliminarCarrito'>Eliminar Carrito</button>
        </article>
      </section>
        }

      
      </div>

  )
}

export default Carrito