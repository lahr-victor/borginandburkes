import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CartContext from '../../contexts/cartContext';

export default function OrderDetails() {
  const { orderIdentifier, setOrderDetails, orderDetails } = useContext(CartContext);

  function getOrderById() {
    const userData = JSON.parse(localStorage.getItem('user'));
    const config = { headers: { Authorization: `Bearer ${userData.token}` } };

    const promise = axios.get(`${process.env.REACT_APP_API_URL}/orders/${orderIdentifier}`, config);
    promise.then((res) => setOrderDetails(res.data));
    promise.catch((err) => alert(err.response.data));
  }

  useEffect(() => {
    getOrderById();
    console.log(orderDetails);
  }, [orderDetails]);

  return (
    <OrderContainer>
      <OrderIdentifier>
        <p>Pedido</p>
        <p>#132546</p>
      </OrderIdentifier>
      <OrderProducts>
        <ProductTitleQty>
          <p>Velas Venenosas</p>
          <p>
            1x
          </p>
        </ProductTitleQty>
        <ProductPrice>
          <p>R$ 15,98</p>
        </ProductPrice>
      </OrderProducts>
      <OrderTotal>
        <p>Total</p>
        <p>R$ 15,98</p>
      </OrderTotal>
    </OrderContainer>
  );
}

const OrderContainer = styled.div`
margin-top: 105px;
`;

const OrderIdentifier = styled.div``;

const OrderProducts = styled.div``;

const OrderTotal = styled.div``;

const ProductTitleQty = styled.div``;

const ProductPrice = styled.div``;
