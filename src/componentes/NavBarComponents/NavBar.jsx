import "./navBar.css"
import Search from "./SearchComponent/Search";
import BurguerMenu from "./BurguerMenuComponent/BurguerMenu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../../../context/NavContexts";
import NavButtons from "./BotonesNav/NavButtons";

const NavBarComponent = () => {

  const {openMenu} = useContext(NavContext)
  
//  const {category} = useGetProductsByCategory()

  return (
    <div className={`laNav${openMenu ? 'Open' : ''}`}>
      <Link to={"/"}>
        <img src="multimedia\img\marketLogo-removebg-preview.png" alt="" />
      </Link>
        <Search />
        <NavButtons />
    </div>
  )
}

export default NavBarComponent