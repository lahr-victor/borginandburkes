import React from 'react';
import styled from 'styled-components';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

//  OBS: Trocar a primeira <div></div> que fecha a <p>Protudos</p> por <Link to=""></Link>
//  quando rota de produtos estiver pronta

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>Produtos</p>
      </div>
      <div>
        <ShoppingCart />
      </div>
    </FooterContainer>
  );
}

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
