import { createContext, useState } from "react";

export const darkModeContext = createContext()


const DarkModeContextProvider = ({children}) => {

    const [changeBackground, setChangeBackground] = useState(false)
    const {sun, setSun} = useState(false)

    const cambiarColor = () =>{
        return(
            setChangeBackground(!changeBackground)
        )
    }
      
      const changeToLight = () =>{
        return(
          setSun(!sun)
        )
       }

       const cardThemes = changeBackground ? 'cambiarColor' : 'container'
       const titleThemes = changeBackground ? "allProducts--title__dark" : "allProducts--title"
       const brandThemes = changeBackground ? "allProducts--brand__dark" : "allProducts--brand"
    


  return (
    <darkModeContext.Provider value={{changeBackground, cambiarColor, changeToLight, titleThemes,cardThemes,brandThemes}}>
        {children}
    </darkModeContext.Provider>
  )
}

export default DarkModeContextProvider