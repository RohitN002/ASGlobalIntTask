import React, { useState, useEffect } from 'react';
import { getSales } from '../api';
import { Form, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchSales = async () => {
      const sales = await getSales();
      setSales(sales);
    };
    fetchSales();
  }, []);

  const handleFilter = async () => {
    const sales = await getSales(startDate, endDate);
    setSales(sales);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2 className="my-4">Sales</h2>
          <Form inline>
            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mr-2"
              />
            </Form.Group>
            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mr-2"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleFilter} className="mt-3">
              Filter
            </Button>
          </Form>
          <ListGroup className="mt-4">
            {sales.map((sale) => (
              <ListGroupItem key={sale._id}>
                {new Date(sale.date).toLocaleDateString()} -{' '}
                {sale.products.map((p) => `${p.product.name} (${p.quantity})`).join(', ')}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Sales;
