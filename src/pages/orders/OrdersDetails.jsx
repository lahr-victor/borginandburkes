import React from 'react';
import styled from 'styled-components';

export default function OrderDetails() {
  return (
    <OrderContainer>
      <OrderIdentifier>
        <p>Pedido</p>
        <p>#132546</p>
      </OrderIdentifier>
      <OrderProducts>
        <ProductTitleQty>
          <p>Velas Venenosas</p>
          <p>1x</p>
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
