import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import CartContext from '../../contexts/cartContext';

export default function ShoppingCart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const MIN_QTY = 1;

  function increaseQty(id) {
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
  }

  function removeFromCart(id) {
    const filter = shoppingCart.items.filter((object) => object.productId !== id);
    const sum = filter.reduce((acc, object) => acc + (object.price * object.qty), 0);
    setShoppingCart({ ...shoppingCart, items: filter, total: sum });
  }

  function decreaseQty(id) {
    const query = shoppingCart.items.find((item) => item.productId === id);

    if (query.qty <= MIN_QTY) {
      removeFromCart(id);
      return;
    }

    const red = shoppingCart.items.map(
      (item) => {
        if (item.productId === id) {
          return ({ ...item, qty: item.qty - MIN_QTY });
        }
        return ({ ...item });
      },
    );
    const sum = red.reduce((accumulator, object) => accumulator + (object.price * object.qty), 0);

    setShoppingCart({ ...shoppingCart, items: red, total: sum });
  }

  return (
    <>
      <Cart onClick={handleShow}>
        <p>Carrinho</p>
      </Cart>
      <ReactModal isOpen={show} onRequestClose={handleClose}>
        <ModalWidow>
          <CartTitle>Carrinho de compras:</CartTitle>
          <ul>
            {shoppingCart.items.length > 0
              ? shoppingCart.items.map((object) => (
                <ShoppingCartItem key={object.productId}>
                  <LeftElements>
                    <p>{object.title}</p>
                    <p>
                      x
                      {object.qty}
                    </p>
                    <PlusMinusItem>
                      <FaMinusCircle onClick={() => decreaseQty(object.productId)} />
                      <FaPlusCircle onClick={() => increaseQty(object.productId)} />
                    </PlusMinusItem>
                  </LeftElements>
                  <RightElements>
                    <p>
                      R$&nbsp;
                      {object.price}
                    </p>
                    <FaTrashAlt onClick={() => removeFromCart(object.productId)} />
                  </RightElements>
                </ShoppingCartItem>
              )) : <p>Não há produtos no carrinho ainda.</p>}
          </ul>
          <Total>
            <p>Total</p>
            <p>
              R$&nbsp;
              {shoppingCart.total}
            </p>
          </Total>
          <ShoppingCartBottomMenu>
            <Finalizar type="button" onClick={handleClose}>
              <p>Finalizar</p>
            </Finalizar>
            <Close type="button" onClick={handleClose}>
              <Voltar>Adicionar mais produtos</Voltar>
            </Close>
          </ShoppingCartBottomMenu>
        </ModalWidow>
      </ReactModal>
    </>
  );
}

const Voltar = styled.p`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #1C1C1C;
`;

const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  font-family: "Lora";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

const ShoppingCartBottomMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Finalizar = styled.button`
  background-color: #3a3a3a;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 254px;
  height: 45px;
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  color: #f9f9f9;
`;

const ShoppingCartItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const LeftElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PlusMinusItem = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
`;

const RightElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;

const Cart = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

const Close = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  margin-top: 15px;
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const ModalWidow = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartTitle = styled.p`
  font-family: "Lora";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 20px;
`;
