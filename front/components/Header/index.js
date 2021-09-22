import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import assets from '/assets';
import { carregarCarrinho } from '/store/actions/carrinho';

//import './style.css';
import { Header, ContainerLg, NavbarLogo, SearchBar, Sandwich, Carrinho, Teste, MenuPrincipal } from './styles';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Sidebar from '../Sidebar';
import BarraCategorias from '../BarraCategorias';


function Header_({ history, location }) {

    const router = useRouter();
    const dispatch = useDispatch();
    const carrinhoState = useSelector(rootState => rootState.carrinho);
    let query = new URLSearchParams(router.query);
    let teste = 'asdasd';

    useEffect(() => {
        dispatch(carregarCarrinho());
    }, [])

    function buscaSubmit(e) {
        e.preventDefault();
        let query = new URLSearchParams(router.query);
        let formData = new FormData(e.target);
        query.set('busca', formData.get('busca'));
        history.push('/SearchProducts?' + query);
    }

    return (
        <>
            <Header>

                <ContainerLg>
                    <Row>
                        <Link href='/' passHref>
                            <NavbarLogo href="/" passHref></NavbarLogo>
                        </Link>
                        <SearchBar onSubmit={buscaSubmit}>
                            <input type='text' name="busca" />
                            <ButtonOutline type='submit'>Buscar</ButtonOutline>
                        </SearchBar>
                        <Sandwich id="sidebar-toogler">
                        </Sandwich>
                        <MenuPrincipal>
                            <li>Crie sua conta</li>
                            <li>Entre</li>
                            <li>Compras</li>
                            <li className="d-block">
                                <Carrinho id="carrinho" href="#">
                                    <div className="quantidade">{quantosProdutosTemNoCarrinho(carrinhoState)}</div>
                                    <div className="custo">R$ {custoTotalNoCarrinho(carrinhoState)}</div>

                                </Carrinho>
                            </li>
                        </MenuPrincipal>
                    </Row>
                </ContainerLg>
            </Header>
            <Sidebar tooglerId='sidebar-toogler' />
            <BarraCategorias />
        </>
    );
}

function quantosProdutosTemNoCarrinho(carrinho) {

    let qty = 0;
    for (var key in carrinho.produtos) {
        qty += carrinho.produtos[key].quantidade;
    }
    return qty;
}

function custoTotalNoCarrinho(carrinho) {
    
    let custo = 0;

    for (var key in carrinho.produtos) {
        let prod = carrinho.produtos[key];
        custo += (parseFloat(prod.data.price) * parseInt(prod.quantidade));
    }
    return custo.toFixed(2);
}


export default Header_;
