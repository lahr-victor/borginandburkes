// PACKAGE IMPORTS
import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoMdCart } from 'react-icons/io';

// VALUE IMPORTS
import CartContext from '../../contexts/cartContext';

// VALUE EXPORTS
/* eslint react/prop-types: 0 */
export default function Product({
  id,
  title,
  image,
  price,
}) {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  function addToCart() {
    const MIN_QTY = 1;

    const alreadyOnCart = shoppingCart.items.find((item) => item.id === id);
    if (alreadyOnCart) {
      const updatedItems = shoppingCart.items.map((item) => {
        if (item.id === id) {
          return ({
            ...item,
            qty: item.qty + MIN_QTY,
            price: item.price,
          });
        }
        return ({ ...item });
      });

      setShoppingCart({
        items: updatedItems,
      });
    } else {
      const newItem = {
        id,
        title,
        qty: MIN_QTY,
        price,
      };

      setShoppingCart({
        items: [...shoppingCart.items, newItem],
      });
    }
    // eslint-disable-next-line no-console
    console.log(shoppingCart);
  }

  return (
    <ProductContainer>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>
        {price}
        <CartButton type="button" onClick={() => addToCart()}>
          <IoMdCart />
        </CartButton>
      </p>
    </ProductContainer>
  );
}

// STYLED COMPONENTS
const CartButton = styled.button`
cursor:pointer;
`;

const ProductContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: blue;
`;
