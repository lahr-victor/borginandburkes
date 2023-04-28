import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Logo>
          Borgin &  Burkes
        </Logo>
      </HeaderLogo>
      <HeaderMenu>
        <Link to="/sign-in">Entre</Link>
        ou
        <Link to="/sign-up">Cadastre-se</Link>
      </HeaderMenu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
`;

const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: #151515;
`;

const Logo = styled.p`
    color: #F9F9F9;
    font-family: 'Libre Baskerville';
    font-style: italic;
    font-weight: 400;
    font-size: 35px;    
`;

const HeaderMenu = styled.div`
    height: 35px;
    background-color: #3A3A3A;
    color: #f9f9f9;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    gap:5px;
    padding:10px;
    font-size:15px;
    line-height: 18px;
    a {
      color: #f9f9f9;
      padding-top:0px;
      font-size:15px;
    }
`;
