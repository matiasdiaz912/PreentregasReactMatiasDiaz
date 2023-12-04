import "./navBar.css"
import CartWidget from "./cartWidget/CartWidget"

const NavBarComponent = () => {
  return (
    <div className="laNav">
        <div className="logo">
        <img className="laNav--img" src="https://scontent.faep32-1.fna.fbcdn.net/v/t39.30808-6/301378598_824933562252678_3334689963030426542_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeENgY-kLpajL4Rn7A5WiUgXs7qS9w3OqfGzupL3Dc6p8fWu-rWqYWtqTPsdwNKhM0c&_nc_ohc=uDIVUqF6YM8AX_v_XCg&_nc_ht=scontent.faep32-1.fna&oh=00_AfBReNexBR9247QNPeO9uQaWtqMDd1F801ccR9JKEst4jQ&oe=656FCA5F" alt="" />
        </div>

      <ul>
        <li>Sobre Mi</li>
        <li>Proceso</li>
        <li>Cursos</li>
        <li>Mas Informacion</li>
      </ul>

      <CartWidget />
    </div>
  )
}

export default NavBarComponent