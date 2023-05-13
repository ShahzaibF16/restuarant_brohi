import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import eventImage1 from '../Assets/2022-02-13.jpg';
import eventImage2 from '../Assets/2022-04-10.jpg';

const EventsSection = () => {
  return (
    <div className="events-section">
      <Container>
        <h2 className="text-center font-weight-bold mb-5">Upcoming Events</h2>
        <Row>
          <Col md={6} className="mb-4">
            <div className="event-image-wrapper">
              <Image src={eventImage1} className="event-image" />
              <div className="event-overlay">
                <div className="event-details">
                  <h3 className="event-title">Desi Food Festival</h3>
                  <p className="event-date">May 20, 2023</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="event-image-wrapper">
              <Image src={eventImage2} className="event-image" />
              <div className="event-overlay">
                <div className="event-details">
                  <h3 className="event-title">BBQ Night</h3>
                  <p className="event-date">June 17, 2023</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventsSection;
