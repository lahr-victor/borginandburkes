import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdLogout } from 'react-icons/md';
import UserNameContext from '../../contexts/userNameContext';

export default function Header() {
  const { userName, setUserName } = useContext(UserNameContext);

  function logout() {
    const body = {};
    axios.post(
      `${process.env.REACT_APP_API_URL}/logout`,
      body,
      { headers: { Authorization: `Bearer ${userName.token}` } },
    )
      .then(() => {
        setUserName(undefined);
        localStorage.clear();
      })
      // eslint-disable-next-line no-alert
      .catch((err) => alert(err.response.data));
  }

  return (
    <HeaderContainer>
      <HeaderLogo>
        <Logo>
          Borgin &  Burkes
        </Logo>
      </HeaderLogo>
      {userName
        ? (
          <HeaderMenu>
            <div>
              <p>
                Olá,
                {' '}
                {userName.name}
              </p>
            </div>
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <MdLogout onClick={logout} />
          </HeaderMenu>
        ) : (
          <HeaderMenu>
            <div>
              <Link to="/sign-in">Entre</Link>
              ou
              <Link to="/sign-up">Cadastre-se</Link>
            </div>
          </HeaderMenu>
        )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
    top: 0;
    left: 0;
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
    gap:20px;
    padding:10px;
    font-size:15px;
    line-height: 18px;
    div {
      display:flex;
      gap: 5px;
    }
    a {
      color: #f9f9f9;
      padding-top:0px;
      font-size:15px;
    }
`;
