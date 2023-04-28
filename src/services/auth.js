import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  return (body) => {
    axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body)
      .then((res) => {
        const { token, name, userType } = res.data;
        localStorage.setItem('user', JSON.stringify({ token, name, userType }));
        navigate('/');
      })
    // eslint-disable-next-line no-alert
      .catch((err) => alert(err.response.data));
  };
}
