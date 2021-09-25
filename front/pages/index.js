import { Caroulsel } from 'components/Home/Carousel';
import { ProductCarousel } from 'components/Home/ProductCarousel';
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { storeWrapper } from 'store';
import { carregarImagensCarousel } from 'store/actions/carousel';
//import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { loadMoreProducts } from '@actions/products';
import DefaultHeaderAndFooter from '../layouts/DefaultHeaderAndFooter';

const Title = styled.h1`
  color: green;
`;

const Index = ({ teste }) => {

  const counter = useSelector(rootState => rootState.product.title)
  const state = useSelector(rootState => rootState.products);

  return (
    <div>

      <Caroulsel />
      <ProductCarousel title='Ofertas do Dia' path='' query={{offer: 'day'}} /><br />
      <ProductCarousel title='Ofertas da Semana' path='' query={{offer: 'week'}} /><br />
      <ProductCarousel title='Ofertas do Mês' path='' query={{offer: 'month'}} /><br />

    </div>
  )
}

Index.getLayout = (page) => {
  return (
    <DefaultHeaderAndFooter>
      {page}
    </DefaultHeaderAndFooter>
  )
}

export const getStaticProps = storeWrapper.getStaticProps((store) => {
  return async (context) => {

    await store.dispatch(carregarImagensCarousel());
    await store.dispatch(loadMoreProducts('', {offer: 'day'}, 12))
    await store.dispatch(loadMoreProducts('', {offer: 'week'}, 12))
    await store.dispatch(loadMoreProducts('', {offer: 'month'}, 12))

    return {
      props: {}, // will be passed to the page component as props
    }
  }
})


export default Index
