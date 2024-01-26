import { useState } from 'react'
import MainRouter from './router/MainRouter'
import NavContextsProvider from '../context/NavContexts'
import DarkModeContextProvider from '../context/darkModeContext'
import CartContextProvider from '../context/CartContext'
import FavoriteContextProvider from '../context/FavoritesContext'

function App() {


  return (
    <>
    <NavContextsProvider>
      <DarkModeContextProvider>
        <CartContextProvider>
          <FavoriteContextProvider>
             <MainRouter />
          </FavoriteContextProvider>
        </CartContextProvider>
      </DarkModeContextProvider>
    </NavContextsProvider>
    </>
  )
}

export default App
