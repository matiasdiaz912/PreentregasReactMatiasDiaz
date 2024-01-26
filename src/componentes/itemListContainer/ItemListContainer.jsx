import { Link } from "react-router-dom"
import "./itemList.css"
import React, { useContext, useState } from "react"
import { darkModeContext } from "../../../context/darkModeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { favoriteContext } from "../../../context/FavoritesContext"


function ItemListContainer ({Products}) {

    const {cardThemes,brandThemes,titleThemes} = useContext(darkModeContext)
    const {favorito, agregarAFavoritos} = useContext(favoriteContext)

    // let button = React.createElement("button", null, "Asi se crea un boton en react por detras")

return (
  <div className={cardThemes}>
        {
            Products.map((item, index) => index <= 11 && <div key={item.id} className={"allProducts--card"}>
                        <FontAwesomeIcon onClick={() => agregarAFavoritos(Products, item)} className="heart" icon={faHeart}/>
                        <Link className="sinEstilos" to={`/item/${item.id}`}>
                        <img className="allProducts--image" src={item.image} alt="" />
                        <p className={brandThemes}>{item.brand}</p>
                        <h2 className={titleThemes}>{item.title}</h2>
                        <p className="allProducts--price">${item.price}</p>
                        </Link>
                    </div>
                )
            }
        

  </div>
)}

export default ItemListContainer


