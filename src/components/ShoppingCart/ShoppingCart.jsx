import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

export default function ShoppingCart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [total, setTotal] = useState(0);
  const shoppingCartItems = [
    {
      productId: '6449b455a561bd505016f1f9',
      title: "Orc's Breath",
      price: 10,
      quantity: 6,
    },
    {
      productId: '012938sdfjnasd0ohasidhjoa',
      title: "Dryad's Tear",
      price: 2999,
      quantity: 1,
    },
    {
      productId: 'apfmndsofn9i192hbdba8sbdas',
      title: 'Crystal Stone',
      price: 40,
      quantity: 2,
    },
    {
      productId: '345n140512hcas9dn8asdasodh',
      title: 'Wondrous Seed',
      price: 60,
      quantity: 4,
    }];

  function calculoTotal(array) {
    let sum = 0;
    array.forEach((element) => {
      sum += Number(element.price);
    });
    setTotal(sum);
  }

  useEffect(() => {
    calculoTotal(shoppingCartItems);
  }, []);

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
            {
                shoppingCartItems.map(
                  (object) => (
                    <ShoppingCartItem key={object.productId}>
                      <LeftElements>
                        <p>{object.title}</p>
                        <p>
                          x
                          {object.quantity}
                        </p>
                        <PlusMinusItem>
                          <FaMinusCircle />
                          <FaPlusCircle />
                        </PlusMinusItem>
                      </LeftElements>
                      <RightElements>
                        <p>
                          R$&nbsp;
                          {object.price}
                        </p>
                        <FaTrashAlt />
                      </RightElements>
                    </ShoppingCartItem>
                  ),
                )
            }
          </ul>
          <Total>
            <p>Total</p>
            <p>
              R$&nbsp;
              {total}
            </p>
          </Total>
          <ShoppingCartBottomMenu>
            <Finalizar type="button" onClick={handleClose}>
              <p>Finalizar</p>
            </Finalizar>
            <Close type="button" onClick={handleClose}>
              <p>Adicionar mais produtos</p>
            </Close>
          </ShoppingCartBottomMenu>
        </ModalWidow>
      </ReactModal>
    </>
  );
}

const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: 'Lora';
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
    background-color: #3A3A3A;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    width: 254px;
    height: 45px;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    color: #F9F9F9;;
`;

const ShoppingCartItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;
    font-family: 'Lora';
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
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
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
    margin-bottom: 20px;
`;
