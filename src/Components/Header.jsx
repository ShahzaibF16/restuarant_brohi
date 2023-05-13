import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container, Navbar, Nav, Fluid } from 'react-bootstrap';
import '../Assets/Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg" fixed="top" className="header-container">
      <Container fluid>
        <Navbar.Brand className=''>
          <Link to="/" className="logo">
            Desi Balochi Food
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={handleMenuToggle}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className={isOpen ? 'show' : ''}>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/services" className="nav-link">Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav-link">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/gallery" className="nav-link">Gallery</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
