import { useEffect, useState } from "react"
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../../firebase/Firebase"
import { useParams } from "react-router-dom"

 const useGetProducts = (collectionName = "Productos", categoria) => {

    const {categorie} = useParams()

    const [Products, setProducts] = useState([])
    const [Title, setTitle] = useState("")

    useEffect(() => {
      
       const getCollection = collection(db, collectionName)
      const changeCategory = categoria ? query(getCollection, where("category", "==", categoria)) : getCollection


      
       getDocs(changeCategory).then(items =>{
         let allProducts = items.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setProducts(
          allProducts
        )

        setTitle(
          allProducts[0].category
        )
      })

    }, [categorie])
    

  return { Products, Title }
}

export default useGetProducts
