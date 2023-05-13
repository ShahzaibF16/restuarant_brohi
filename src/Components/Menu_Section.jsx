import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import dish1 from '../Assets/dish_1.jpg';
import dish2 from '../Assets/dish_2.jpg';
import dish3 from '../Assets/dish_3.jpg';

const MenuSection = () => {
  return (
    <div className="menu-section">
      <Container>
        <h2 className="text-center font-weight-bold mb-5">Featured Dishes</h2>
        <Row>
          <Col md={4}>
            <Card className="menu-card mb-4">
              <div className="menu-card-image-wrapper">
                <Card.Img variant="top" src={dish1} />
                <div className="menu-card-overlay">
                  <Button variant="light" className="menu-card-button">Order Now</Button>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="font-weight-bold mb-1">Chicken Karahi</Card.Title>
                <p className="text-muted mb-3">Served with naan</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="menu-card mb-4">
              <div className="menu-card-image-wrapper">
                <Card.Img variant="top" src={dish2} />
                <div className="menu-card-overlay">
                  <Button variant="light" className="menu-card-button">Order Now</Button>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="font-weight-bold mb-1">Beef Biryani</Card.Title>
                <p className="text-muted mb-3">Served with raita</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="menu-card mb-4">
              <div className="menu-card-image-wrapper">
                <Card.Img variant="top" src={dish3} />
                <div className="menu-card-overlay">
                  <Button variant="light" className="menu-card-button">Order Now</Button>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="font-weight-bold mb-1">Lamb Chops</Card.Title>
                <p className="text-muted mb-3">Served with mint sauce</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuSection;