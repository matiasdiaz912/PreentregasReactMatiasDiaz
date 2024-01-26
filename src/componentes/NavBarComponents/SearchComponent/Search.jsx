import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Search.css"

const Search = () => {

    
  return (
    <div className="barraBusqueda">
          <input type="text" placeholder="Buscar Productos..." />
          <button>
           <FontAwesomeIcon icon={faSearch}/>
            </button>
    </div>
  )
}

export default Search