import React from 'react';
import { ListGroup, ListGroupItem, Button, Container, Row, Col } from 'react-bootstrap';

const Cart = ({ cartItems, onRemove }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2 className="my-4">Cart</h2>
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroupItem key={index}>
                {item.product.name} - {item.quantity}
                <Button
                  variant="danger"
                  size="sm"
                  className="float-right"
                  onClick={() => onRemove(index)}
                >
                  Remove
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
