import { useEffect, useState } from 'react'
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/Firebase"

export const useGetProductsById = (id) => {

   const[Product, setProduct] = useState({})
   const [Title, setTitle] = useState("")

    useEffect(() => {

      const traerDocument = doc(db, "Productos", id)
      
      getDoc(traerDocument).then(item =>{
        setProduct(
          {id: item.id, ...item.data()}
        )
        setTitle(
          item.data().title
        )
      })
    }, [id])


  return(
    {Product, Title}
  ) 
  
}

