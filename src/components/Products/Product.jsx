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
  }

  return (
    <ProductContainer>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
      <CartButton type="button" onClick={() => addToCart()}>
        <IoMdCart />
      </CartButton>
    </ProductContainer>
  );
}

// STYLED COMPONENTS
const ProductContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
padding-bottom: 0px;
padding-left: 30px;
padding-right: 30px;
  h2 {
    font-weight: 700;
    font-size: 16px;
    color: #1C1C1C;
    margin-bottom: 10px;
    width: 125px;
    height: 40px;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
  }
  img {
    width: 125px;
    height: 125px;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 100px;
    border: solid 2px #3A3A3A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
  p {
    font-weight: 600;
    font-size: 14px;
    color: #1C1C1C;
  }
`;

const CartButton = styled.button`
cursor:pointer;
background-color: #E5E5E5;
color: #1C1C1C;
font-size: 30px;
`;
