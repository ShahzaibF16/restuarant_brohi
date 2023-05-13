import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <Container className='p-2'>
        <Row>
          <Col md={6}>
            <h2 className="font-weight-bold mb-4">Who We Are</h2>
          </Col>
          <Col md={6}>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla vel risus sit amet dignissim. In hac habitasse platea dictumst. Suspendisse potenti. Nam rhoncus metus eget enim vestibulum bibendum. Sed tempor, massa quis hendrerit tincidunt, nunc augue bibendum justo, auctor pretium turpis ante ac ante.</p>
            <p className="mb-4">Nam sed convallis eros. Etiam posuere, ex ut eleifend posuere, augue magna facilisis tortor, vel dapibus libero nulla at leo. Nam varius mauris sed orci feugiat faucibus. Fusce vel ipsum id orci varius rutrum. Nulla facilisi. Integer pharetra, dolor vel dapibus blandit, lorem metus consectetur sapien, vitae pretium nisl augue a eros.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhoWeAre;
