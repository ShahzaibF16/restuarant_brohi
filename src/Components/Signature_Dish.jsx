import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import dishImage from '../Assets/signature.jpg';

const SignatureDish = () => {
  return (
    <div className="signature-dish">
      <Container>
        <Row>
          <Col md={6}>
            <div className="dish-image-wrapper">
              <Image src={dishImage} className="dish-image" />
            </div>
          </Col>
          <Col md={6}>
            <h2 className="font-weight-bold mb-4">Signature Dish</h2>
            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non odio non est sodales malesuada at ac libero. Integer laoreet, libero eu consequat dapibus, nisi sapien lobortis tellus, sed auctor ipsum ex vel turpis. In at massa in libero pellentesque dictum. Fusce eget nunc eros.</p>
            <p className="mb-0"><i className="fas fa-utensils mr-2"></i>Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="mb-0"><i className="fas fa-utensil-spoon mr-2"></i>Serving Size: 2-4</p>
            <p className="mb-0"><i className="fas fa-stopwatch mr-2"></i>Cook Time: 30 minutes</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignatureDish;
