import { Component } from 'react';
import Link from "next/link";
import configs from '@configs';
import moveElementFromTo from '@utils/moveElementFromTo';
import { ProductLink, AdicionarRemoverDoCarrinho, Price, OffPrice, ProdutoCard_, OfferTag } from './styles';
import { Row } from '@globalStyleds';
import { adicionarProdutoAoCarrinho } from '/store/slices/chartSlice';

import assets from '../../../assets';
import { OfferTagSVG3 } from './OfferTagSvg3';
import { howManyOfTheseWereAddedToTheCart } from '../../../utils/chartUtility';
import { useDispatch, useSelector } from 'react-redux';

function ProdutoCard({ product, index }) {

    const carrinho = useSelector(rootState => rootState.carrinho);
    const dispatch = useDispatch();

    let addedQuantity = howManyOfTheseWereAddedToTheCart(carrinho, product._id);

    function RemoverDoCarrinho(e) { dispatch(adicionarProdutoAoCarrinho(product._id, -1)); animarAdicao(e, -1) }

    function AdicionarAoCarrinho(e) { dispatch(adicionarProdutoAoCarrinho(product._id, 1)); animarAdicao(e) }

    let offerEnabled = product.offer.enabled;

    let now = new Date();
    let offerStarts = new Date(product.offer.time_range.starts);
    let offerEnds = new Date(product.offer.time_range.ends);

    if (isNaN(offerStarts.getTime()) ||
        isNaN(offerEnds.getTime()) ||
        !(now.getTime() > offerStarts.getTime() && now.getTime() < offerEnds.getTime()) ||
        product.price < product.offer.off_price
    ) {
        offerEnabled = false;
    }


    return (
        <ProdutoCard_ key={index}>
            <Link href={'/product/' + product._id} passHref>
                <ProductLink>
                    <img src={configs.imgsPath + product.imgs[0]} />
                </ProductLink>
            </Link>
          <h5>{product.title}</h5>
            {offerEnabled &&
                <Row>
                    {product.offer.enabled &&
                        <OfferTagSVG3 product={product} />
                    }

                    <OffPrice>
                        <div>R$ {(product.price).toFixed(2).replace('.', ',')}</div>
                        <div>{product.offer.off_price.toFixed(2).replace('.', ',')}</div>
                    </OffPrice>
                </Row>
            }
            {!offerEnabled && //casos em que o preço em oferta for maior que o preço normal, exibirá o preço normal, como se não houvesse oferta
                <Price>
                    <div>{product.price.toFixed(2).replace('.', ',')}</div>
                </Price>
            }
            <AdicionarRemoverDoCarrinho>
                <button disabled={addedQuantity < 1} onClick={RemoverDoCarrinho}
                >-</button>
                <div>{addedQuantity}</div>
                <button onClick={AdicionarAoCarrinho}>+</button>
            </AdicionarRemoverDoCarrinho>
        </ProdutoCard_>
    );
}

async function animarAdicao(e, dir = 1) {
    let img = e.target.parentElement.parentElement.querySelector("img");
    let carrinho = document.querySelector("#carrinho");
    moveElementFromTo(img, img, carrinho, dir);
}


export default ProdutoCard;