import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import sliderImage1 from '../Assets/slider_1.jpg';
import sliderImage2 from '../Assets/slider_2.jpg';
import sliderImage3 from '../Assets/slider_4.jpg';

const SliderSection = () => {
  return (
    <div className="slider-section">
      <Container>
        <Row>
          <Col>
            <Carousel
            >
              <Carousel.Item>
                <Row>
                  <Col md={4}>
                    <img src={sliderImage1} alt="Slider Image 1" className="img-fluid" />
                  </Col>
                  <Col md={4}>
                    <img src={sliderImage2} alt="Slider Image 2" className="img-fluid" />
                  </Col>
                  <Col md={4}>
                    <img src={sliderImage3} alt="Slider Image 3" className="img-fluid" />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col md={4}>
                    <img src={sliderImage2} alt="Slider Image 2" className="img-fluid" />
                  </Col>
                  <Col md={4}>
                    <img src={sliderImage3} alt="Slider Image 3" className="img-fluid" />
                  </Col>
                  <Col md={4}>
                    <img src={sliderImage1} alt="Slider Image 1" className="img-fluid" />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SliderSection;
