/* eslint-disable no-console */
// PACKAGE IMPORTS
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// VALUE EXPORTS
export default function ProductRegistrationPage() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { REACT_APP_API_URL } = process.env;
  const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
  const userType = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).userType : 'user';

  function validateAccess() {
    if (userType !== 'admin') {
      // eslint-disable-next-line no-alert
      alert('Please sign in as administrator to register a product!');
      navigate('/');
    }
  }

  function registerProduct(event) {
    event.preventDefault();
    setIsLoading(true);
    const body = {
      title: form.title,
      description: form.description,
      image: form.image,
      price: form.price,
    };
    axios.post(
      `${REACT_APP_API_URL}/products/`,
      body,
      { headers: { Authorization: `Bearer ${token}` } },
    )
      .then(() => {
        navigate('/');
        setIsLoading(false);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response.data);
        setIsLoading(false);
      });
  }

  function handleForm(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  useEffect(() => {
    validateAccess();
  }, []);

  return (
    <Container>
      <form onSubmit={registerProduct}>
        <input
          name="title"
          type="text"
          placeholder="Título"
          value={form.title}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <input
          name="description"
          type="text"
          placeholder="Descrição"
          value={form.description}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <input
          name="image"
          type="text"
          placeholder="Imagem"
          value={form.image}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <input
          name="price"
          type="number"
          step="0.01"
          min="0"
          placeholder="Preço"
          value={form.price}
          onChange={handleForm}
          disabled={isLoading}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
        >
          Registrar Produto
        </button>
      </form>
    </Container>
  );
}

// STYLED COMPONENTS
const Container = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
