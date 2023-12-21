import { Link } from "react-router-dom"
import { callAPI, callAPIById } from "../../products/products"
import { useEffect, useState } from "react"


function ItemContainer () {
  const [productos, setProductos] = useState([])
   
  useEffect(() => {
      callAPI()
       .then(res => setProductos(res.data.products))
       .catch(error => `Hubo un error ${error}`) 
   
  }, [])

return (
  <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", width: "100vw"}}>
  {/* <div>
      <h1>{greeting}</h1>
  </div> */}
  
      {
          productos.map(item => {
              return(
                  <div style={{width: "300px", height: "300px", marginBottom: "20px", border:"solid gray 1px"}} key={item.id}>
                      <Link to={`/category/:${item.id}`}>
                      <img style={{height: "150px"}} src={item.thumbnail} alt="" />
                      </Link>                        <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <button>Buy Now</button>
                  </div>
              )
          })

      }
  </div>
)}

export default ItemContainer


export const GetProductsById = (id = 1) => {

  const [producto, setProducto] = useState([])
  
   useEffect(() => {
       callAPIById(id)
        .then(res => setProducto(res.data))
        .catch(error => `Hubo un error ${error}`) 
    
   }, [])

   return{producto}

  }

