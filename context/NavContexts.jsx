import { createContext, useState } from "react"

export const NavContext = createContext()

const NavContextsProvider = ({children}) => {

    const [openMenu, setOpenMenu] = useState(false)

    const abrirMenu = () => {
      return(
       setOpenMenu(!openMenu)
      )
  }

  return(
       <NavContext.Provider value={{openMenu, abrirMenu}}>
            {children}
        </ NavContext.Provider>
  )
  
 
}

export default NavContextsProvider