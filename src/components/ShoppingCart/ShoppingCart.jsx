import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

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
          <p>Carrinho de compras:</p>
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
