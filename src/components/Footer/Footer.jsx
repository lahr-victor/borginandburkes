/* eslint-disable no-console */
// PACKAGE IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// VALUE IMPORTS
import ShoppingCart from '../ShoppingCart/ShoppingCart';

// VALUE EXPORTS
export default function Footer() {
  const user = localStorage.getItem('user');
  const userType = user ? JSON.parse(user).userType : 'user';

  return (
    <FooterContainer>
      <div>
        <Link to="/">
          <p>Produtos</p>
        </Link>
      </div>
      <div>
        {
          userType === 'admin' ? (
            <Link to="/product-registration">
              <p>Registrar</p>
            </Link>
          ) : <ShoppingCart />
        }
      </div>
    </FooterContainer>
  );
}

// STYLED COMPONENTS
const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background-color: #1a1a1a;
  p {
    font-family: "Lora";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #f2f2f2;
  }
`;
