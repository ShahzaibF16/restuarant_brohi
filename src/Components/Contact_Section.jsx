import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../Components/ContactForm';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <Container>
        <h2 className="text-center font-weight-bold mb-5">Contact Us</h2>
        <Row>
          <Col md={6} className="mb-4">
            <ContactForm />
          </Col>
          <Col md={6}>
            <p className="text-muted mb-3">Get in touch with us to book a table or for any other inquiries.</p>
            <p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i> 123 Main Street, City, Country</p>
            <p className="mb-2"><i className="fas fa-phone-alt mr-2"></i> (123) 456-7890</p>
            <p className="mb-2"><i className="fas fa-envelope mr-2"></i> info@desibalochifood.com</p>
            <p className="mb-0"><i className="fas fa-clock mr-2"></i> Monday - Saturday: 11AM - 10PM</p>
            <p className="mb-0"><i className="fas fa-clock mr-2"></i> Sunday: Closed</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
