import { Link } from "react-router-dom"
import "./NavButtons.css"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import CartWidget from "../cartWidget/CartWidget"
import { darkModeContext } from "../../../../context/darkModeContext"
import BurguerMenu from "../BurguerMenuComponent/BurguerMenu"

const NavButtons = () => {

    const {cambiarColor, changeBackground} = useContext(darkModeContext)

  return (
    <div className="botonesDeNav">

    <Link to={"/registrarme"}>
        <button className="accountButtons">Registrarme</button>
    </Link>
    <Link to={"/login"}>
        <button className="accountButtons">Iniciar sesion</button>
    </Link>
    <button onClick={cambiarColor} title="Cambiar a modo oscuro" className={`darkMode${changeBackground ? 'Activado' : 'Desactivado' } icons`}>
        <FontAwesomeIcon icon={faMoon} />
    </button>
    <button onClick={cambiarColor} className={`sunMode${changeBackground ? 'Desactivado' : 'Activado'} icons`}>
        <FontAwesomeIcon icon={faSun} />
    </button>
    <CartWidget />
    <BurguerMenu />

    </div>
  )
}

export default NavButtons