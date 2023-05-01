// PACKAGE IMPORTS
import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// VALUE IMPORTS
import CartContext from './contexts/cartContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductsPage from './pages/products/ProductsPage';
import SignInPage from './pages/signIn/SignInPages';
import SignUpPage from './pages/signUp/SignUpPages';

// VALUE EXPORTS
export default function App() {
  const [shoppingCart, setShoppingCart] = useState(
    {
      items: [],
    },
  );

  return (
    useMemo(() => (
      <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    ), [shoppingCart, setShoppingCart])
  );
}
