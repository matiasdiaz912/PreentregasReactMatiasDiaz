import "./navBar.css"
import CartWidget from "./cartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBarComponent = () => {
  return (
    <div className="laNav">
       
        <Link to={"/"} className="logo">
        <img className="laNav--img" src="https://scontent.faep32-1.fna.fbcdn.net/v/t39.30808-6/301378598_824933562252678_3334689963030426542_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeENgY-kLpajL4Rn7A5WiUgXs7qS9w3OqfGzupL3Dc6p8fWu-rWqYWtqTPsdwNKhM0c&_nc_ohc=4NP4XIQVAE4AX93I4ue&_nc_ht=scontent.faep32-1.fna&oh=00_AfBSeP8r4ML_HC18E-wPpdFjI-AnRRApKUp98PFfMeAb7w&oe=65897F9F" alt="" />
        </Link>

      <ul>
        <Link to={"/"}>Home</Link>
        <li>Proceso</li>
        <li>Cursos</li>
        <li>Mas Informacion</li>
      </ul>

      <CartWidget />
    </div>
  )
}

export default NavBarComponent