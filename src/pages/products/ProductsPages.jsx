import React, { useContext } from 'react';
import styled from 'styled-components';
import Product from '../../components/Products/Product';
import CartContext from '../../contexts/cartContext';

export default function ProductsPage() {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);

  /*
  Retirar a constante "productList" abaixo e fazer adições apropriadas após poder
  fazer requisições para o backend.
  Exemplo:

  const [productList, setProductList] = useState(null);

  async function getProducts(){
    try{
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/`);
      setProductList(response.data);
    } catch (erro) {
      alert(erro.response.data.message);
    }
  }

  useEffect(()=>{
    getProducts();
  },[])

  */
  const productList = [
    {
      productId: '6449b455a561bd505016f1f9',
      title: "Orc's Breath",
      price: 10,
    },
    {
      productId: '012938sdfjnasd0ohasidhjoa',
      title: "Dryad's Tear",
      price: 2999,
    },
    {
      productId: 'apfmndsofn9i192hbdba8sbdas',
      title: 'Crystal Stone',
      price: 40,
    },
    {
      productId: '345n14051562hcas9dn8asdasodh',
      title: 'Wondrous Seed',
      price: 60,
    },
  ];

  return (
    <ProductsContainer>
      {productList?.map(({ productId, title, price }) => (
        <Product
          key={productId}
          productId={productId}
          title={title}
          price={price}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      ))}
      <Product />
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 105px;
  justify-content: center;
`;
