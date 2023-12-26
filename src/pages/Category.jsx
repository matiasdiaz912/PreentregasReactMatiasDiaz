
import { useParams } from "react-router-dom"
 import ItemListContainer from "../componentes/itemListContainer/ItemListContainer"
 import { useGetProductsByCategories } from "../Custom Hooks/GetProductsByCategory"

const Category = () => {
    const {id} = useParams()

  const {categories} = useGetProductsByCategories(id)

  return (
    <div>
        <ItemListContainer Products={categories}/>
    </div>
  )
}

export default Category