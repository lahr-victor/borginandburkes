// PACKAGE IMPORTS
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SignInPage from '../pages/signIn/SignInPages';
import SignUpPage from '../pages/signUp/SignUpPages';

// VALUE EXPORTS
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
