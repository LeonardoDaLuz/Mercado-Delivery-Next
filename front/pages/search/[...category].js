import { Caroulsel } from 'components/Home/Carousel';
import { ProductCarousel } from 'components/Home/ProductCarousel';
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { storeWrapper } from 'store';
import { carregarImagensCarousel } from 'store/actions/carousel';
//import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { loadMoreProducts } from '@actions/products';
import DefaultHeaderAndFooter from '../../layouts/DefaultHeaderAndFooter';
import { useRouter } from 'next/router';
import prettyJSONStringify from '../../utils/prettyJSONStringify';
import { combinePathWithQuery2 } from '../../utils/combinePathWithQuery';
import { useEffect, useRef } from 'react';
import { Container, ListaDeProdutos } from 'components/SearchProducts/styles';
import SidebarCategories from '../../components/SearchProducts/SidebarCategories';

const Title = styled.h1`
  color: green;
`;


function Search() {


  const router = useRouter();
  const query = router.query;
  let path = router.asPath;

  console.log('path', path)
  const products = useSelector(rootState => rootState.products[combinePathWithQuery2(path, query)] || []);


  const listaDeProdutosElem = useRef(null);


  useEffect(() => {

    ligarInfiniteLoader();

    return desligaInfiniteLoader;

  }, [path, query])

  async function ligarInfiniteLoader() {

    let tries = 5;
    while (listaDeProdutosElem.current.clientHeight < window.innerHeight && tries > 0) { //Faz com que mais produtos sejam carregados até que preencha a tela toda.

      tries--;
      await loadMoreProducts(path, query, 12); //Aqui, o location.pathname é usado pois este path é usado na especificação da busca na api.
      await window.waitForSeconds(0.5);
    }

    window.onscroll = infiniteLoadOnScroll;
  }

  function desligaInfiniteLoader() {
    window.onscroll = null;
  }

  async function infiniteLoadOnScroll(e) { //carrega mais produtos a medida que dá scroll (infinite loader)
    if (window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {
      await loadMoreProducts(path, query, 12);
    }
  }

  let produtoCards = products.map((p, index) => {
    return <ProductCard product={p} key={index} />
  })


  return (
    <Container>
      <SidebarCategories />
      <ListaDeProdutos ref={listaDeProdutosElem}>

        {produtoCards}

      </ListaDeProdutos>
    </Container>

  );

}

Search.getLayout = (page) => {
  return (
    <DefaultHeaderAndFooter>
      {page}
    </DefaultHeaderAndFooter>
  )
}

export const getStaticProps = storeWrapper.getStaticProps((store) => {
  return async (context) => {

    return {
      props: {}, // will be passed to the page component as props
    }
  }
})

export async function getStaticPaths(context) {
  return {
    paths: [
    ],
    fallback: 'blocking'
  }
}


export default Search
