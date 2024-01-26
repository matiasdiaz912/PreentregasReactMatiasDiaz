import { Link, useParams } from "react-router-dom"
import useGetProducts from "../../Custom Hooks/GetProducts"
import "./Categories.css"
import { useContext, useEffect, useState } from "react"
import { darkModeContext } from "../../../context/darkModeContext"


const ProductsByCategory = () => {
    
    const {categorie} = useParams()
   
    const {titleThemes, cardThemes, brandThemes} = useContext(darkModeContext)
    
    const {Products, Title} = useGetProducts("Productos", categorie)
      
    useEffect(() => {
        document.title = Title
    })

return(

   <div className={cardThemes}>

        <h1>{Title}</h1>

        <div className="categoriesContainer">
    {
            Products.map(item => {
                return(
                    <div key={item.id} className="category--card">
                        <Link className="sinEstilos" to={`/item/${item.id}`}>
                        <img className="allProducts--image" src={item.image} alt="" />
                        <p className={brandThemes}>{item.brand}</p>
                        <h2 className={titleThemes}>{item.title}</h2>
                        <p className="allProducts--price">${item.price}</p>
                        </Link>
                    </div>
                )
            })
        }

        </div>
    
   </div>
)
}

export default ProductsByCategory