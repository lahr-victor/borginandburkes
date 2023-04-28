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
    const quantity = 1;

    const alreadyOnCart = shoppingCart.items.find((item) => item.productId === id);

    if (alreadyOnCart) {
      console.log(`${title} is already on cart. Adding one more.`);
    }

    console.log(`${title} added to cart.`);

    const product = {
      productId,
      title,
      price,
      qty: quantity,
    };

    //  console.log(shoppingCart.items);
    const updatedCart = [...shoppingCart.items, product];
    // eslint-disable-next-line max-len

    const sum = updatedCart.reduce((accumulator, object) => accumulator + object.price, 0);

    setShoppingCart({ ...shoppingCart, items: updatedCart, total: sum });
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
