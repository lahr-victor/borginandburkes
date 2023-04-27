import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

export default function ShoppingCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Cart onClick={handleShow}>
        <p>Carrinho</p>
      </Cart>
      <ReactModal
        isOpen={show}
        onRequestClose={handleClose}
      >
        <ModalWidow>
          <CartTitle>Carrinho de compras:</CartTitle>
          <ul>
            <ShoppingCartItem>
              <LeftElements>
                <p>Velas Venenosas</p>
                <p>x1</p>
                <PlusMinusItem>
                  <FaMinusCircle />
                  <FaPlusCircle />
                </PlusMinusItem>
              </LeftElements>
              <RightElements>
                <p>R$ 15,98</p>
                <FaTrashAlt />
              </RightElements>
            </ShoppingCartItem>
          </ul>
          <button type="button" onClick={handleClose}>
            <p>Finalizar</p>
          </button>
          <AddMore type="button" onClick={handleClose}>
            <p>Adicionar mais produtos</p>
          </AddMore>
        </ModalWidow>
      </ReactModal>
    </>
  );
}

const ShoppingCartItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    p{
        font-family: 'Lora';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }
`;
const LeftElements = styled.div``;
const PlusMinusItem = styled.div``;
const RightElements = styled.div``;

const Cart = styled.button`
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`;

const AddMore = styled.button`
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`;

const ModalWidow = styled.div`
    display: flex;
    flex-direction: column;
`;

const CartTitle = styled.p`
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
`;
