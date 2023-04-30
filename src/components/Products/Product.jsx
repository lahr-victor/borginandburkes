// PACKAGE IMPORTS
import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoMdCart } from 'react-icons/io';

// VALUE IMPORTS
import CartContext from '../../contexts/cartContext';

// VALUE EXPORTS
/* eslint react/prop-types: 0 */
export default function Product({
  productId,
  title,
  image,
  price,
}) {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  function handleCart(id) {
    const MIN_QTY = 1;

    const alreadyOnCart = shoppingCart.items.find((item) => item.productId === id);

    if (alreadyOnCart) {
      const add = shoppingCart.items.map(
        (item) => {
          if (item.productId === id) {
            return ({ ...item, qty: item.qty + MIN_QTY });
          }
          return ({ ...item });
        },
      );
      const sum = add.reduce((accumulator, object) => accumulator + (object.price * object.qty), 0);

      setShoppingCart({ ...shoppingCart, items: add, total: sum });
      return;
    }

    const product = {
      productId,
      title,
      price,
      qty: MIN_QTY,
    };

    // eslint-disable-next-line no-console
    console.log(shoppingCart.items);
    const updt = [...shoppingCart.items, product];
    const sum = updt.reduce((accumulator, object) => accumulator + (object.price * object.qty), 0);

    setShoppingCart({ ...shoppingCart, items: updt, total: sum });
  }

  return (
    <ProductContainer>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>
        {price}
        <CartButton type="button" onClick={() => handleCart(productId)}>
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
