/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { IoMdCart } from 'react-icons/io';

export default function Product({
  productId,
  title,
  price,
  shoppingCart,
  setShoppingCart,
}) {
  function handleCart(id) {
    const MIN_QTY = 1;

    const alreadyOnCart = shoppingCart.items.find((item) => item.productId === id);

    if (alreadyOnCart) {
      const add = shoppingCart.items.map(
        (item) => {
          if (item.productId === id) {
            // eslint-disable-next-line max-len
            return ({ ...item, qty: item.qty + MIN_QTY, price: item.price + (item.price / item.qty) });
          }
          return ({ ...item });
        },
      );
      const sum = add.reduce((accumulator, object) => accumulator + object.price, 0);

      setShoppingCart({ ...shoppingCart, items: add, total: sum });
      return;
    }

    const product = {
      productId,
      title,
      price,
      qty: MIN_QTY,
    };

    //  console.log(shoppingCart.items);
    const updt = [...shoppingCart.items, product];
    // eslint-disable-next-line max-len

    const sum = updt.reduce((accumulator, object) => accumulator + (object.price * object.qty), 0);

    setShoppingCart({ ...shoppingCart, items: updt, total: sum });
  }

  return (
    <ProductsContainer>
      <p>{title}</p>
      <p>
        R$&nbsp;
        {price}
        <CartButton onClick={() => handleCart(productId)}>
          <IoMdCart />
        </CartButton>
      </p>
    </ProductsContainer>
  );
}

const CartButton = styled.button`
cursor:pointer;
`;

const ProductsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: blue;
`;
