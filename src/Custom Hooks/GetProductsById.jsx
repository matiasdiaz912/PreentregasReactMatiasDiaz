import { useEffect, useState } from 'react'
import { callAPIById } from '../callApis/CallApis'

export const useGetProductsById = (id) => {

   const[Product, setProduct] = useState({})

    useEffect(() => {
        callAPIById(id)
        .then(res => setProduct(res.data))
    }, [])


  return(
    {Product}
  ) 
  
}

