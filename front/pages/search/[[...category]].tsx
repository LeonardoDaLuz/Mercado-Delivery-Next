import { ProductCarousel } from 'components/Home/ProductCarousel';
import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { storeWrapper } from 'store';
//import styles from '../styles/Home.module.css'
import { loadMoreProducts, Product } from '@slices/productsSlice';
import DefaultHeaderAndFooter from '../../layouts/DefaultHeaderAndFooter';
import { useRouter } from 'next/router';
import prettyJSONStringify from '../../utils/prettyJSONStringify';
import { combinePathWithQuery2 } from '../../utils/combinePathWithQuery';
import { EffectCallback, ReactElement, useEffect, useRef } from 'react';
import { Container, ListaDeProdutos } from 'components/Search/styles';
import SidebarCategories from '../../components/Search/SidebarCategories';
import waitForSeconds from '../../utils/waitForSeconds';
import ProductCard from '../../components/Search/ProductCard';
import { LoadingMessage } from '../../components/Search/styles';
import { AppState } from 'store';
import { GetStaticPaths } from 'next';
import { loadCategories } from '@slices/categoriesSlice';



function Search() {


  const router = useRouter();
  const dispatch = useDispatch();
  const query = router.query;

  /* existe um bug no next onde ele não pega a query inteira no primeiro render, então é preciso fazer este workaround: */

  const urlSearchParams = new URLSearchParams(router.asPath.split("?").pop()); //

  if (urlSearchParams.get('menorPreco'))
    query['menorPreco'] = urlSearchParams.get('menorPreco')!;

  if (urlSearchParams.get('maiorPreco'))
    query['maiorPreco'] = urlSearchParams.get('maiorPreco')!;

  if (urlSearchParams.get('sort'))
    query['sort'] = urlSearchParams.get('sort')!;


  if (urlSearchParams.get('q'))
    query['q'] = urlSearchParams.get('q')!;

  /* ------  */

  const categoryArrayPath = router.query['category'] as string[];

  let categoryPathString = categoryArrayPath ? '/' + categoryArrayPath.join('/') : '';

  const { products, status } = useSelector((rootState: AppState) => ({
    products: rootState.products.searchs[combinePathWithQuery2(categoryPathString, query)]?.found || [],
    status: rootState.products.status
  }));

  const listaDeProdutosElem = useRef<HTMLElement | null>(null);


  useEffect(() => {

    //console.log('categoryPathString', categoryPathString)
    //console.log('query', query)

    return ligarInfiniteLoader();

  }, [router.asPath]) //somente reseta o loader quando a url muda.

  function ligarInfiniteLoader() {

    (async () => {
      let tries = 5;
      while (listaDeProdutosElem.current!.clientHeight < window.innerHeight + 1000 && tries > 0) { //Faz com que mais produtos sejam carregados até que preencha a tela toda.

        tries--;
        await dispatch(loadMoreProducts(categoryPathString, query, 12)); //Aqui, o location.pathname é usado pois este path é usado na especificação da busca na api.
        await waitForSeconds(0.5);
      }

      let loading = false;

      window.onscroll = async (e) => { //carrega mais produtos a medida que dá scroll (infinite loader)

        if (!loading && window.pageYOffset > document.body.clientHeight - window.innerHeight - 600) {
          loading = true;
          await dispatch(loadMoreProducts(categoryPathString, query, 12));
          loading = false;
        }
      };


    })();

    function desligaInfiniteLoader() {
      window.onscroll = null;
    }

    return desligaInfiniteLoader;
  }

  let content: JSX.Element[] | JSX.Element = [];


  if (products) {
    if (products.length > 0)
      content = products.map((p: Product, index: number) => {
        return (<ProductCard product={p} key={index} />)
      });
    else {
      content = <div>Não foram encontrados resultados...</div>
    }
  } else {
    if (status == "LOADING") {
      content = <LoadingMessage>Carregando...</LoadingMessage>
    }
  }

  return (
    <Container>
      <SidebarCategories />
      < ListaDeProdutos ref={listaDeProdutosElem} >
        {content}
      </ ListaDeProdutos>
    </ Container>

  );

}

Search.getLayout = (page: ReactElement) => {
  return (
    <DefaultHeaderAndFooter>
      {page}
    </ DefaultHeaderAndFooter>
  )
}

export const getServerSideProps = storeWrapper.getServerSideProps((store) => {
  return async (context) => {

    const categoryArrayPath = context.query['category'] as string[];

    let categoryPathString = categoryArrayPath ? '/' + categoryArrayPath.join('/') : '';
    
    await store.dispatch(loadMoreProducts(categoryPathString, context.query, 36)); //Aqui, o location.
    await store.dispatch(loadCategories());
    return {
      props: {}, // will be passed to the page component as props
    }
  }
})


export default Search
