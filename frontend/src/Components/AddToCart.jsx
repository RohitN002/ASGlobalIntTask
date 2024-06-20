import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AddToCart = ({ onAdd }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    const product = products.find((product) => product._id === selectedProduct);
    onAdd({ product, quantity });
    setSelectedProduct('');
    setQuantity(1);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="my-4">Add To Cart</h2>
          <Form>
            <Form.Group controlId="formProductSelect">
              <Form.Label>Product</Form.Label>
              <Form.Control
                as="select"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">Select Product</option>
                {products.map((product) => (
                  <option key={product._id} value={product._id}>
                    {product.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddToCart} className="mt-3">
              Add to Cart
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddToCart;
