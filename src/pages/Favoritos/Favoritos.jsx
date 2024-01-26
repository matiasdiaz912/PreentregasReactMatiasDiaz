import React from 'react'
import { useContext } from 'react'
import { favoriteContext } from '../../../context/FavoritesContext'
import { Link } from 'react-router-dom'
import { darkModeContext } from '../../../context/darkModeContext'
import "./Favoritos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHeart} from '@fortawesome/free-solid-svg-icons';


const Favoritos = () => {

  const {favorito} = useContext(favoriteContext)
  const {brandThemes,titleThemes} = useContext(darkModeContext)

  return (
    <main className="favoriteContainer">

    <section className='favoriteContent'>
      <h1 className='favoriteTitle'>Favoritos</h1>
      <FontAwesomeIcon className='favoriteIcon' icon={faHeart}/>
    </section>
 
    <section className='favoritesProducts' >
      {
        favorito.map((item) =>{
          return(
            <article className='favoriteProducts__each' key={item.id}>
                 <Link className="sinEstilos" to={`/item/${item.id}`}>
                   <img className="favorites--image" src={item.image} alt={item.title} />
                   <p className="favorite--brands--products">{item.brand}</p>
                   <h2 className="favorite--title--products">{item.title}</h2>
                   <p className="favorites--price--products">${item.price}</p>
                  </Link>
        </article>
          )
        })
      }

       </section>
    </main>
  )
}

export default Favoritos