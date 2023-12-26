import { Link } from "react-router-dom"
import "./itemList.css"


function ItemListContainer ({Products}) {


return (
  <div className="container">
  
        {
            Products.map(item => {
                return(
                    <div key={item.id} className="card">
                        <Link style={{color: "black", textDecoration: "none", marginLeft: 5, marginTop: 10}} to={`/item/${item.id}`}>
                         <img src={item.thumbnail} alt="" />
                        <h2>{item.title}</h2>
                        <p>{item.brand}</p>
                        <p>${item.price}</p>
                        <p>{item.description}</p>
                        </Link>
                        <button>Buy</button>
                    </div>
                )
            })
        }

  </div>
)}

export default ItemListContainer


// export const GetProductsById = (id = 1) => {

//   const [producto, setProducto] = useState([])
  
//    useEffect(() => {
//        callAPIById(id)
//         .then(res => setProducto(res.data))
//         .catch(error => `Hubo un error ${error}`) 
    
//    }, [])

//    return{producto}

//   }

