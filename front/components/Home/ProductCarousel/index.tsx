import { OfertasDoDiaContainer } from "./styles";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from 'react-slick';
import { ProductCard } from "./ProductCard";
import { loadMoreProducts } from '@slices/productsSlice';
import { combinePathWithQuery2 } from "@utils/combinePathWithQuery";
import { AppState } from "@store";
import { ParsedUrlQuery } from 'querystring';

function ProductCarousel_({ title, path, query }: { title: string, path: string, query: ParsedUrlQuery }) {

    const dispatch = useDispatch();
    const produtos = useSelector((rootState: AppState) => rootState.products.searchs[combinePathWithQuery2(path, query)]?.found || []);

    useEffect(() => {
        dispatch(loadMoreProducts(path, query, 12));
    }, [])


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