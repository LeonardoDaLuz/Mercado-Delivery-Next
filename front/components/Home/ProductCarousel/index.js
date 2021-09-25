import { OfertasDoDiaContainer } from "./styles";
import React, { useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { carregarImagensCarousel } from "../../../store/actions/carousel";
import { bindActionCreators } from "redux";
import { CenterContainer } from "../../../globalStyleds";
import { loadHome } from '@actions/home';
import Slider from 'react-slick';
import { ProductCard } from "./ProductCard";
import { loadMoreProducts } from '@actions/products';
import { combinePathWithQuery, combinePathWithQuery2 } from "../../../utils/combinePathWithQuery";

function ProductCarousel_({ title, path, query}) {

    const dispatch = useDispatch();
    const allProducts = useSelector(rootState => rootState.products);

    useEffect(() => {
        dispatch(loadMoreProducts(path, query, 12));
    }, [])

    let produtos = allProducts[combinePathWithQuery2(path, query)];
    produtos = produtos === undefined ? [] : produtos;

    if (produtos.length < 3)
        return <></>

    const settings = {
        dots: false,
        infinite: produtos.length < 5 ? false : true,
        slidesToShow: (produtos.length > 4 ? 5 : produtos.length),
        variableWidth: false,
        autoplay: false,
        adaptativeHeight: false,
        pauseOnHover: true,

    }

    return (

        <OfertasDoDiaContainer>
            <h2>{title}</h2>
            <Slider {...settings}>
                {produtos.map((product, index) =>
                    <ProductCard key={index} product={product} />
                )}
            </Slider>
        </OfertasDoDiaContainer>
    )
}




export const ProductCarousel = ProductCarousel_;