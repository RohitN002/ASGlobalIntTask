import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';
import AddToCart from './Components/AddToCart';
import Cart from './Components/Cart';
import Sales from './Components/Sales';
import Checkout from './Components/Checkout';

import { addSale } from './api';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handleCheckout = async () => {
    const sale = {
      products: cartItems.map((item) => ({ product: item.product._id, quantity: item.quantity })),
    };
    await addSale(sale);
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Billing Software</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Products</Nav.Link>
              <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/sales">Sales</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={
            <>
              <AddToCart onAdd={handleAddToCart} />
              <Cart cartItems={cartItems} onRemove={handleRemoveFromCart} />
              <Button variant="success" as={Link} to="/checkout" className="mt-3">
                Proceed to Checkout
              </Button>
            </>
          } />
          <Route path="/sales" element={<Sales />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} onConfirm={handleCheckout} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
