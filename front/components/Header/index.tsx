import React, { ReactEventHandler, useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import assets from '@assets';
import { carregarCarrinho } from '@slices/chartSlice';

//import './style.css';
import { Header, ContainerLg, NavbarLogo, SearchBar, Sandwich, Carrinho, Teste, MenuPrincipal } from './styles';
import { Row, Col, ButtonOutline, HorizontalFlexList_Lg } from '@globalStyleds';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Sidebar from '../Sidebar';
import BarraCategorias from '../BarraCategorias';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';
import Login from '@components/Login';
import { getUrlPathWithoutQuery } from '@utils/routerUtility';
import { AppState } from '@store';
import { logoutThunk } from '@slices/userSlice';


function Header_() {

    const user = useSelector((rootState: AppState) => rootState.user);
    const carrinhoState = useSelector((rootState: AppState) => rootState.carrinho);

    const router = useRouter();
    const routerPath = getUrlPathWithoutQuery(router);
    const dispatch = useDispatch();

    const buscaTxt = new URLSearchParams(router.asPath.split('?').pop()).get('q');
    const [buscaState, setBuscaState] = useState(buscaTxt);


    useEffect(() => {

        if (user.token)
            dispatch(carregarCarrinho(user.token));

    }, [user.token])

    function buscaSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let formData = new FormData(e.target as HTMLFormElement);
        let searchedText = formData.get('busca');
        router.push('/search?q=' + searchedText);
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
                            <input type='text' name="busca" onChange={(e) => setBuscaState(e.target.value)} value={buscaState || ''} />
                            <ButtonOutline type='submit'>Buscar</ButtonOutline>
                        </SearchBar>
                        <Sandwich id="sidebar-toogler">
                        </Sandwich>
                        <MenuPrincipal>
                            <li>Crie sua conta</li>
                            <li>Compras</li>
                            <li>
                                {(user.status !== 'LOGGED' &&
                                    <Link href={combinePathWithQuery2(routerPath, { ...router.query, login: 'true' })}>Entrar</Link>
                                ) ||
                                    <a href='#' onClick={() => dispatch(logoutThunk())}>Sair</a>
                                }
                            </li>

                            <li className="d-block">
                                <Link href="/mychart">
                                    <Carrinho id="carrinho" href="#">
                                        <div className="quantidade">{quantosProdutosTemNoCarrinho(carrinhoState)}</div>
                                        <div className="custo">R$ {custoTotalNoCarrinho(carrinhoState)}</div>

                                    </Carrinho>
                                </Link>
                            </li>
                        </MenuPrincipal>
                    </Row>
                </ContainerLg>
            </Header>
            <Sidebar tooglerId='sidebar-toogler' />
            <BarraCategorias />
            <Login />
        </>
    );
}

function quantosProdutosTemNoCarrinho(carrinho: any) { //jogar isso no util depois

    let qty = 0;
    for (var key in carrinho.produtos) {
        qty += carrinho.produtos[key].quantidade;
    }
    return qty;
}

export function custoTotalNoCarrinho(carrinho: any) {

    let custo = 0;

    for (var key in carrinho.produtos) {
        let prod = carrinho.produtos[key];
        custo += (parseFloat(prod.data.price) * parseInt(prod.quantidade));
    }
    return custo.toFixed(2);
}


export default Header_;
