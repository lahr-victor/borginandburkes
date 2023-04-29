/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CartContext from '../../contexts/cartContext';

export default function OrderDetails() {
  const { orderIdentifier, setOrderDetails, orderDetails } = useContext(CartContext);
  const INITIAL_VALUE = 0;

  function getOrderById() {
    const userData = JSON.parse(localStorage.getItem('user'));
    const config = { headers: { Authorization: `Bearer ${userData.token}` } };

    const promise = axios.get(`${process.env.REACT_APP_API_URL}/orders/${orderIdentifier}`, config);
    promise.then((res) => setOrderDetails([res.data]));
    // eslint-disable-next-line no-alert
    promise.catch((err) => alert(err.response.data));
  }

  useEffect(() => {
    getOrderById();
    console.log(orderDetails);
  }, []);

  function tally() {
    orderDetails[INITIAL_VALUE].items.map(
      (item) => console.log(item.title),
    );
  }

  return (
    <OrderContainer>
      <OrderIdentifier>
        <p>Pedido</p>
        {orderDetails && orderDetails.length > 0 ? <p>{orderDetails[INITIAL_VALUE]._id}</p> : <p />}
      </OrderIdentifier>
      {orderDetails && orderDetails.length > 0
        ? orderDetails[INITIAL_VALUE].items.map(
          (item) => (
            <OrderProducts key={item.productId}>
              <ProductTitleQty>
                <p>{item.title}</p>
                <p>
                  {item.qty}
                  x
                </p>
              </ProductTitleQty>
              <ProductPrice>
                <p>
                  R$
                  {' '}
                  {item.price}
                </p>
              </ProductPrice>
            </OrderProducts>
          ),
        )
        : <p />}
      <OrderTotal>
        <p>Total</p>
        {orderDetails.length > 0 ? (
          <p>
            R$
            {' '}
            {orderDetails[INITIAL_VALUE].total}
          </p>
        ) : <p />}
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
