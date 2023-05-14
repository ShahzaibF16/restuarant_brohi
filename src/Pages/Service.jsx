import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import serviceImage1 from '../Assets/service_1.jpg';
import serviceImage2 from '../Assets/service_2.jpg';
import serviceImage3 from '../Assets/service_3.jpg';

const Services = () => {
  return (
    <div className="services">
      <Container>
        <h2 className="text-center font-weight-bold mb-5">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="service-card mb-4">
              <Card.Img variant="top" src={serviceImage1} />
              <Card.Body>
                <Card.Title className="font-weight-bold mb-3">Bar B.Q</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur aliquam nisi, id bibendum leo facilisis id.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card mb-4">
              <Card.Img variant="top" src={serviceImage2} />
              <Card.Body>
                <Card.Title className="font-weight-bold mb-3">Cooked on Wood</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur aliquam nisi, id bibendum leo facilisis id.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card mb-4">
              <Card.Img variant="top" src={serviceImage3} />
              <Card.Body>
                <Card.Title className="font-weight-bold mb-3">Fresh Meat</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur aliquam nisi, id bibendum leo facilisis id.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
