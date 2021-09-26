import { CarrouselContainer, SlideFoto } from "./styles";
import React, { useEffect, useRef } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { carregarImagensCarousel } from "store/slices/carouselSlice"; 
import { bindActionCreators } from "redux";

function Caroulsel() {

    const carousel = useSelector(rootState => rootState.carousel);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carregarImagensCarousel());
    }, [])

   // console.log(carousel);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        variableWidth: false,
        autoplay: true,
    }

    let slideFotos = carousel.images.map((image, index) => <SlideFoto key={index}><img src={"http://localhost:3001/" + image.path} /></SlideFoto>)

    return (
        <CarrouselContainer>
            <Slider {...settings} style={{ width: '100%' }}>
                {slideFotos}
            </Slider>
        </CarrouselContainer>
    )
}


export default Caroulsel;