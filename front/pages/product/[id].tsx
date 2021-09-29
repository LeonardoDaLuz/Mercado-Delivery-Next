import { Component, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, storeWrapper } from 'store';

//Sub Components
import { BreadCumbs } from '@components/Product/BreadCumbs';
import { AdminOptions } from '@components/Product/AdminOptions';
import { PhotoFrame } from '@components/Product/PhotoFrame';
import BuyFrame from '@components/Product/BuyFrame';
import { ProductDescription } from '@components/Product/ProductDescription';
//Others
import { loadProduct, deleteProduct } from '@slices/productSlice';
//import './style.css';
import { Container, Row } from '@globalStyleds';
import { LogRender } from '@utils/logRender';
import { useRouter } from 'next/router';
import DefaultHeaderAndFooter from '../../layouts/DefaultHeaderAndFooter';

function Product() {

  const dispatch = useDispatch();
  const produto: any = useSelector((rootState: AppState ) => rootState.product);
  const router = useRouter();
  const id = router.asPath.split('/').pop()!;

  useEffect(() => {
    dispatch(loadProduct(id));
  }, []);

  return (
    <Container>
      <Row>
        <BreadCumbs product={produto}/>
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

Product.getLayout = (page: ReactElement) => {
  return (
    <DefaultHeaderAndFooter>
      {page}
    </DefaultHeaderAndFooter>
  )
}

export const getStaticProps = storeWrapper.getStaticProps((store) => {
  return async (context) => {

     await store.dispatch(loadProduct(context.params?.id as any));

    return {
      props: {}, // will be passed to the page component as props
    }
  }
})

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '606d1ab6a0df091220a423c3'}}
    ],
    fallback: true
  }
}

export default Product;
