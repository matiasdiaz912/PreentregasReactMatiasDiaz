import { useEffect, useState } from "react"
import { callAPI } from "../callApis/CallApis" 


 const useGetProducts = () => {

    const [Products, setProducts] = useState([])

    useEffect(() => {

        callAPI()
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(`Error ${err}`))

    },[])
    

  return { Products }
}

export default useGetProducts
