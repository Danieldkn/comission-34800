import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Cartwidget from '../Cartwidget/Cartwidget';

// import 'Menu.css'
const Menu = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' className={({isActive})=> isActive ? 'bg-red'  : ''}>React-Bootstrap</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/categoria/gorras'>Gorras</Link>
                    <Link to='/categoria/remeras'>Remeras</Link>
                    {/* <Nav.Link href="#" as to='/detail'>Gorras</Nav.Link> */}
                    {/* <Nav.Link href="#pricing">Remeras</Nav.Link> */}                   
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Carrito</Nav.Link>
                    <Link to="/cart">
                        <Cartwidget />
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu