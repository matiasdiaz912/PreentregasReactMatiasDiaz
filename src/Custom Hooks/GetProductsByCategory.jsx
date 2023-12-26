import { useState, useEffect } from "react"
import { callAPIByCategories, callAPIByCategory } from "../callApis/CallApis"


const useGetProductsByCategory = () => {
    const[category, setCategory] = useState([])

    useEffect(() => {
        callAPIByCategory()
        .then(res => setCategory(res.data))
    }, [])
  
    return{ category }
}


export const useGetProductsByCategories = (id) => {
        const[categories, setcategories] = useState([])

        useEffect(() => {
                callAPIByCategories(id)
                .then(rest => setcategories(rest.data.products))
            }, [id])
        
            return{ categories }
        }
        
 export default useGetProductsByCategory