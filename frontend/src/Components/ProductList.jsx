import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import { ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2 className="my-4">Product List</h2>
          <ListGroup>
            {products.map((product) => (
              <ListGroupItem key={product._id}>
                {product.name} - RS. {product.price}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
