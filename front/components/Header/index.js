import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import assets from '/assets';
import { carregarCarrinho } from '/store/actions/carrinho';
import { quantosProdutosTemNoCarrinho, custoTotalNoCarrinho } from '@analyzers/carrinho';

//import './style.css';
import { Header, ContainerLg, NavbarLogo, SearchBar, Sandwich, Carrinho, Teste, MenuPrincipal } from './styles';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Sidebar from '../Sidebar';
import BarraCategorias from '../BarraCategorias';


function Header_({ history, location }) {

    const router = useRouter();
    const dispatch = useDispatch();
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
                                <div className="quantidade">{quantosProdutosTemNoCarrinho()}</div>
                                <div className="custo">R$ {custoTotalNoCarrinho()}</div>

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

export default Header_;
