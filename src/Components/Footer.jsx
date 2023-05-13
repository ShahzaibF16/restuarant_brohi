import React from 'react';
import { Container, Row, Col, Nav, Image, Form, Button } from 'react-bootstrap';
import logo from '../Assets/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <Nav className="flex-column">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Menu</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-center">
            <Image src={logo} alt="Logo" className="logo mb-3" />
            <div className="social-media-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Sign up for our newsletter</h5>
            <Form className="mb-3">
              <Form.Group controlId="formBasicEmail" className="mb-0">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
            <Button variant="primary">Subscribe</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-muted text-center mb-0">© 2023 Desi Balochi Food</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
