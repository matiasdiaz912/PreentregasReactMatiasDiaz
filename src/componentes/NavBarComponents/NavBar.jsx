import "./navBar.css"
import CartWidget from "./cartWidget/CartWidget"
import  {Link}  from "react-router-dom"
import useGetProductsByCategory from "../../Custom Hooks/GetProductsByCategory"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarComponent = () => {

 const {category} = useGetProductsByCategory()

  return (
    <div className="laNav">
       
     <Navbar expand="lg" className="laNav">
      <Container fluid>
        <Link to={"/"}><img className="laNav--img" src="https://scontent.faep32-1.fna.fbcdn.net/v/t39.30808-6/301378598_824933562252678_3334689963030426542_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeENgY-kLpajL4Rn7A5WiUgXs7qS9w3OqfGzupL3Dc6p8fWu-rWqYWtqTPsdwNKhM0c&_nc_ohc=4NP4XIQVAE4AX93I4ue&_nc_ht=scontent.faep32-1.fna&oh=00_AfBSeP8r4ML_HC18E-wPpdFjI-AnRRApKUp98PFfMeAb7w&oe=65897F9F" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Proceso</Nav.Link>
            <Nav.Link>Cursos</Nav.Link>
            <Nav.Link>Mas Informacion</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">  
            {
              category.map((item, index) =>{
                return(
                
                  <NavDropdown.Item key={index}>
                     <Link to={`/category/${item}`}>{item}</Link> 
                  </NavDropdown.Item>
                    
                )
              })
            }         
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CartWidget />

    </div>
  )
}

export default NavBarComponent