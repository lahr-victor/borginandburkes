/* eslint-disable react/jsx-no-constructed-context-values */
// PACKAGE IMPORTS
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SignInPage from './pages/signIn/SignInPages';
import SignUpPage from './pages/signUp/SignUpPages';
import ProductsPage from './pages/products/ProductsPages';
import CartContext from './contexts/cartContext';
import OrderDetails from './pages/orders/OrdersDetails';
import UserNameContext from './contexts/userNameContext.js';

// VALUE EXPORTS
export default function App() {
  const [shoppingCart, setShoppingCart] = useState(
    {
      items: [],
      total: 0,
    },
  );
  const [orderIdentifier, setOrderIdentifier] = useState();
  const [orderDetails, setOrderDetails] = useState([]);
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <CartContext.Provider value={
      {
        shoppingCart,
        setShoppingCart,
        orderIdentifier,
        setOrderIdentifier,
        orderDetails,
        setOrderDetails,
      }
   }>
      <UserNameContext.Provider value={{ userName, setUserName }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/order-details" element={<OrderDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserNameContext.Provider>
    </CartContext.Provider>
  );
}
