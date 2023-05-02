import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../contexts/cartContext';
import UserNameContext from '../contexts/userNameContext';

export function useSignUp() {
  const navigate = useNavigate();

  return (body) => {
    axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
      .then(() => navigate('/sign-in'))
      // eslint-disable-next-line no-alert
      .catch((err) => alert(err.response.data));
  };
}

export function useSignIn() {
  const navigate = useNavigate();
  const { setUserName } = useContext(UserNameContext);

  return (body) => {
    axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body)
      .then((res) => {
        const { token, name, userType } = res.data;
        localStorage.setItem('user', JSON.stringify({ token, name, userType }));
        setUserName(JSON.parse(localStorage.getItem('user')));
        navigate('/');
      })
      // eslint-disable-next-line no-alert
      .catch((err) => alert(err.response.data));
  };
}

export function useAddOrder() {
  const navigate = useNavigate();
  const { setOrderIdentifier } = useContext(CartContext);

  return (body, config) => {
    axios.post(`${process.env.REACT_APP_API_URL}/orders`, body, config)
      .then((res) => {
        setOrderIdentifier(res.data.insertedId);
        navigate('/order-details');
      })
      // eslint-disable-next-line no-alert
      .catch((err) => alert(err.response.data));
  };
}
