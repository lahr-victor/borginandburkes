/* eslint-disable react/jsx-no-constructed-context-values */
// PACKAGE IMPORTS
import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// VALUE IMPORTS
import CartContext from './contexts/cartContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OrderDetails from './pages/orders/OrdersDetails';
import ProductsPage from './pages/products/ProductsPage';
import ProductRegistrationPage from './pages/product-registration/ProductRegistrationPage';
import SignInPage from './pages/signIn/SignInPages';
import SignUpPage from './pages/signUp/SignUpPages';
import UserNameContext from './contexts/userNameContext';

// VALUE EXPORTS
export default function App() {
  const [shoppingCart, setShoppingCart] = useState(
    {
      items: [],
    },
  );
  const [orderIdentifier, setOrderIdentifier] = useState();
  const [orderDetails, setOrderDetails] = useState([]);
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    useMemo(() => (
      <CartContext.Provider value={
        {
          shoppingCart,
          setShoppingCart,
          orderIdentifier,
          setOrderIdentifier,
          orderDetails,
          setOrderDetails,
        }
      }
      >
        <UserNameContext.Provider value={{ userName, setUserName }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/order-details" element={<OrderDetails />} />
              <Route path="/product-registration" element={<ProductRegistrationPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserNameContext.Provider>
      </CartContext.Provider>
    ), [
      shoppingCart,
      setShoppingCart,
      orderIdentifier,
      setOrderIdentifier,
      orderDetails,
      setOrderDetails,
      userName,
    ])
  );
}
