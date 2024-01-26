import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [quantity, setQuantity] = useState(1)

    const [productosCarrito, setProductosCarrito] = useState(0)

    const [carrito, setCarrito] = useState([])

    const [reject, setReject] = useState(false)
  
    
    const actualizarCarrito = (producto, cantidad) =>{
      const nuevoitem = {...producto, cantidad}
      const nuevoCarrito = [...carrito]

      setProductosCarrito(quantity + productosCarrito)
      setQuantity(0)
      
      const compararProductos = nuevoCarrito.find(prod => prod.id === producto.id) 
      
      if(compararProductos && quantity !== 0){
        compararProductos.cantidad += cantidad
        setReject(false)
      }else if(quantity === 0){
        setReject(true)
      }else{
        carrito.push(nuevoitem)
        setReject(false)
      }
      setCarrito(carrito)
    }

     const cantidadTotal = carrito.reduce((acc, ite) => acc + ite.cantidad * ite.price, 0)



  return (
    <CartContext.Provider value={{ reject, quantity ,setQuantity, productosCarrito, actualizarCarrito, carrito, setCarrito, cantidadTotal, setProductosCarrito}}>
         {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider