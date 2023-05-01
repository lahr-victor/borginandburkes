// PACKAGE IMPORTS
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// VALUE IMPORTS
import Product from '../../components/Products/Product';

// VALUE EXPORTS
export default function ProductsPage() {
  const { REACT_APP_API_URL } = process.env;
  const [products, setProducts] = useState([]);

  function retrieveProducts() {
    axios.get(`${REACT_APP_API_URL}/products`)
      .then((response) => {
        // eslint-disable-next-line no-console
        setProducts(response.data);
      })

      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response.data);
      });
  }

  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <ProductsContainer>
      {products.map((product) => (
        <Product
          // eslint-disable-next-line no-underscore-dangle
          key={product._id.toString()}
          // eslint-disable-next-line no-underscore-dangle
          id={product._id.toString()}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </ProductsContainer>
  );
}

// STYLED COMPONENTS
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 105px;
  margin-bottom: 70px;
  justify-content: center;
  overflow: scroll;
`;
