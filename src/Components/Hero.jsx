import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bannerImage from '../Assets/pexels-min-an-1482803.jpg';
import '../App.css'


const HeroBanner = () => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="overlay"></div>
      <Container className='hero_text'>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center align-items-start">
            <h1 className="text-white font-weight-bold mb-4">Discover the Delicious Taste of Desi Balochi Food</h1>
            <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla vel risus sit amet dignissim. In hac habitasse platea dictumst. Suspendisse potenti. Nam rhoncus metus eget enim vestibulum bibendum.</p>
            <Button variant="outline-light">Explore Our Menu</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
