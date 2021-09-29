import Caroulsel from 'components/Home/Carousel';
import { ProductCarousel } from 'components/Home/ProductCarousel';
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { AppState, storeWrapper } from 'store';
import { carregarImagensCarousel } from 'store/slices/carouselSlice';
//import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { loadMoreProducts } from '@slices/productsSlice';
import DefaultHeaderAndFooter from '../layouts/DefaultHeaderAndFooter';
import { ReactElement } from 'react';


const Index = () => {

  //const counter = useSelector((rootState: AppState) => rootState.product.title)
  //const state = useSelector((rootState: AppState) => rootState.products);

  return (
    <div>

      <Caroulsel />
      <ProductCarousel title='Ofertas do Dia' path='' query={{offer: 'day'}} /><br />
      <ProductCarousel title='Ofertas da Semana' path='' query={{offer: 'week'}} /><br />
      <ProductCarousel title='Ofertas do Mês' path='' query={{offer: 'month'}} /><br />

    </div>
  )
}

Index.getLayout = (page: ReactElement) => {
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
