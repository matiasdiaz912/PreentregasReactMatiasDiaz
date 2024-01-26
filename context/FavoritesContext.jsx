import { createContext, useState } from "react";

export const favoriteContext = createContext()

const FavoriteContextProvider = ({children}) =>{

    const[favorito, setFavorito] = useState([])
    
    const agregarAFavoritos = (products, item, index) =>{
        const buscarEnFavoritos = favorito.find(prod => prod.id === item.id)
        if(buscarEnFavoritos){
            favorito.splice(index, 1)
        }else{
            const favoritoEnCarrito = products.find(prod => prod.id === item.id)
            favorito.push(favoritoEnCarrito)
        }
        setFavorito(favorito)
    }

    

    return(
        <favoriteContext.Provider value={{favorito, agregarAFavoritos}}>
            {children}
        </favoriteContext.Provider>
    )
}

export default FavoriteContextProvider