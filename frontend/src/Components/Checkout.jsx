import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Form } from 'react-bootstrap';

const Checkout = ({ cartItems, onConfirm }) => {
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    onConfirm();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2 className="my-4">Checkout</h2>
          <Card>
            <Card.Header>Order Summary</Card.Header>
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <ListGroupItem key={index}>
                  {item.product.name} - {item.quantity} x ${item.product.price.toFixed(2)} = ${(
                    item.product.price * item.quantity
                  ).toFixed(2)}
                </ListGroupItem>
              ))}
              <ListGroupItem>
                <strong>Total: ${getTotalAmount()}</strong>
              </ListGroupItem>
            </ListGroup>
          </Card>
          <Form onSubmit={handleConfirm} className="mt-4">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" required />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-3">
              Confirm Purchase
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
