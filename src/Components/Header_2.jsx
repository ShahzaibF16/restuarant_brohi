import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo_2.png'


function Header_2() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/"><img src={Logo} width={'80px'}/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-auto">
                        <Nav.Link >
                            <Link to='/about'>About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/services'>Services</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/gallery">Gallery</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/contact'>Contact</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header_2;