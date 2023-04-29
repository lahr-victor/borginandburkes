/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CartContext from '../../contexts/cartContext';

export default function OrderDetails() {
  const {
    orderIdentifier, setOrderDetails, orderDetails, setShoppingCart,
  } = useContext(CartContext);
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
    setShoppingCart(
      {
        items: [],
        total: 0,
      },
    );
  }, []);

  return (
    <OrderOuterContainer>
      <OrderInnerContainer>
        <OrderIdentifier>
          <div>
            <p>Pedido</p>
            {orderDetails && orderDetails.length > 0 ? (
              <p>
                #
                {orderDetails[INITIAL_VALUE]._id}
              </p>
            ) : <p />}
          </div>
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
                    {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
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
              {orderDetails[INITIAL_VALUE].total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          ) : <p />}
        </OrderTotal>
      </OrderInnerContainer>
    </OrderOuterContainer>
  );
}

const OrderOuterContainer = styled.div`
display: flex;
justify-content: center;
`;

const OrderInnerContainer = styled.div`
margin-top: 105px;
display: flex;
flex-direction: column;
`;

const OrderIdentifier = styled.div`
display: flex;
justify-content: center;
div{
  margin-top: 30px;
  margin-bottom: 20px;
}
p{
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;}
`;

const OrderProducts = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;`;

const OrderTotal = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
p{
font-family: 'Lora';
font-style: normal;
font-weight: 600;
font-size: 16px;
}`;

const ProductTitleQty = styled.div`
display: flex;
flex-direction: column;
`;

const ProductPrice = styled.div``;
