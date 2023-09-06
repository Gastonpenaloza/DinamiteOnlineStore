import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartWidget from './CartWidget';

const NavBar = () => {

  const cartContext = useContext(CartContext);


  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img
              alt="logo"
              src={Logo}
              width="120"
              height="120"
              className="d-inline-block align-top"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Productos/Remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos/Jeans">Jeans</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos/Camperas">Camperas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Productos/Camisas">Camisas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/Carrito" className="iconAndNumber">
              <FontAwesomeIcon icon={faCartShopping} />
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;