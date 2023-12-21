import  axios from "axios"

export async function callAPI(){
   return  await axios.get(`https://dummyjson.com/products`)
}

export async function callAPIById(id){
   return  await axios.get(`https://dummyjson.com/products/${id}`)
}





