import { useState, useEffect } from "react"
import {getDocs, collection} from "firebase/firestore"
import { db } from "../../firebase/Firebase"

const useGetCategories = () => {

    const[category, setCategory] = useState([])


    useEffect(() => {
     
        const getCategories = collection(db, "Categories")

        getDocs(getCategories).then(item =>{
            const categorie = item.docs.map(items => ({id: items.id, ...items.data()}))
            setCategory(
                categorie[0].Categories
            )
        })

    }, [])
  
    return{ category }
}

export default useGetCategories