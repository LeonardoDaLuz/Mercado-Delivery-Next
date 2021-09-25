import { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeWrapper } from 'store';

//Sub Components
import { BreadCumbs } from '/components/Product/BreadCumbs';
import { AdminOptions } from '/components/Product/AdminOptions';
import { PhotoFrame } from '/components/Product/PhotoFrame';
import BuyFrame from '/components/Product/BuyFrame';
import { ProductDescription } from '/components/Product/ProductDescription';
//Others
import { loadProduct, deleteProduct } from '@actions/product'
//import './style.css';
import { Container, Row } from '../../globalStyleds';
import { LogRender } from '../../utils/logRender';
import { useRouter } from 'next/router';
import DefaultHeaderAndFooter from '../../layouts/DefaultHeaderAndFooter';

function Product({ match }) {

  const dispatch = useDispatch();
  const produto = useSelector(rootState => rootState.product);
  const router = useRouter();
  const id = router.asPath.split('/').pop();

  useEffect(() => {
   // dispatch(loadProduct(id));
  }, []);

  //LogRender({ produto }, "Produto");
  return (
    <Container>
      <Row>
        <BreadCumbs product={produto} />
        <AdminOptions product={produto} />
      </Row>
      <div style={{ clear: 'both' }} />
      <Row>
        <PhotoFrame product={produto} />
        <BuyFrame product={produto} />
        <ProductDescription product={produto} />
      </Row>
    </Container >
  );

}

Product.getLayout = (page) => {
  return (
    <DefaultHeaderAndFooter>
      {page}
    </DefaultHeaderAndFooter>
  )
}

export const getStaticProps = storeWrapper.getStaticProps((store) => {
  return async (context) => {
    //console.log('params: ', context.params)
     await store.dispatch(loadProduct(context.params.id));

    return {
      props: {}, // will be passed to the page component as props
    }
  }
})

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { id: '606d5ab6a0df091220a423c3'}}
    ],
    fallback: true
  }
}

export default Product;
