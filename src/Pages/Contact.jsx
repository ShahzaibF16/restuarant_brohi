import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'

function Contact() {
  return (
    <Container className='mt-4 mb-4 justify-center'>
      <Row>
        <h2 style={{textAlign:'center'}}>Contact Us</h2>
        <Col md={4}>
        </Col>
        <Col md={4} className='form_col mt-4 mb-4'>
          <Form className='form_ins'>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='btn_dark' type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={4}>
        </Col>
      </Row>

    </Container>
  );
}

export default Contact;