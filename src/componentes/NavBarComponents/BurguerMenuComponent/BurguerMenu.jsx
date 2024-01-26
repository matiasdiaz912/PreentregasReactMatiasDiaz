import { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faX, faMessage, faHeart, faTag, faGear, faBox } from '@fortawesome/free-solid-svg-icons';
import "./BurguerMenu.css"
import { Link } from 'react-router-dom';
import { NavContext } from '../../../../context/NavContexts';
import useGetCategories from '../../../Custom Hooks/GetCategories';

const BurguerMenu = () => {

   const {category} = useGetCategories()

    const {openMenu, abrirMenu} = useContext(NavContext)
    const [desplazarCategorias, setDesplazarCategorias] = useState(false)

    const categoryButton = () =>{
        setDesplazarCategorias(!desplazarCategorias)
    }

    return (
            
        <div className={`burger-menu-${openMenu ? 'open' : 'closed'}`}>
            <div className='burgerImage'>
                <img onClick={abrirMenu} src="multimedia\img\burguerMenu.png" alt="" />
            </div>
            <div onClick={abrirMenu} className={`close-window-${openMenu ? 'open' : 'closed'}`}>
                 <FontAwesomeIcon icon={faX} />
            </div>
                 <div className={`burgerMenu-inside-${openMenu ? 'open' : 'closed'}`}>
                        <ul>
                            <Link className='sacar-estilos' to={"/"}>
                            <button className='burgerButtons'>
                             <FontAwesomeIcon icon={faHouse} />
                             <li>Inicio</li>
                            </button>    
                            </Link>

                            <button className='burgerButtons'>
                            <FontAwesomeIcon icon={faMessage} />
                            <li>Notificaciones</li>
                            </button>

                            
                            <Link to={"/favoritos"} className='burgerButtons'>
                            <FontAwesomeIcon icon={faHeart} />
                            <li>Favoritos</li>
                            </Link>
                            
                            <button onClick={categoryButton} className='burgerButtons'>
                                <div className='botonCategorias'>
                                <FontAwesomeIcon icon={faBox} />
                                <li>Categorias</li>
                                </div>

                            <ul className={`categoryList${desplazarCategorias ? 'Activada' : 'Desactivada'}`}>
                            {
                                category.map((item, index) =>{
                                    return(
                                        <Link className='sinEstilos' style={{color: "white", fontSize: "0.8em"}} to={`/category/${item}`} key={index}>
                                            <li>{item}</li>
                                        </Link>
                                    )
                                })
                            }
                            </ul>

                            </button>
                            <button className='burgerButtons'>
                            <FontAwesomeIcon icon={faTag} />
                            <li>Ofertas</li>
                            </button>
                            <button className='burgerButtons'>
                            <FontAwesomeIcon icon={faGear} />
                            <li>Ajustes</li>
                            </button>
                        </ul>
                </div>
            
         </div>

    )
}

export default BurguerMenu