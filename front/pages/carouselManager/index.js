import DefaultHeaderAndFooter from '/layouts/DefaultHeaderAndFooter';
import { useEffect, useState } from 'react';
import { ButtonFlat, CenterContainer } from '/globalStyleds';
import { DeleteImage, GerenciarImagensCarousel, ImgCardLi, LoadIndicator } from '/components/CarouselManager/styles';
import { carregarImagensCarousel, uploadImagensCarousel, removeImageCarousel } from '@actions/carousel'
import configs from "@configs";
import { useDispatch, useSelector } from 'react-redux';

function CarouselManager() {

    const carousel = useSelector(rootState => rootState.carousel);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carregarImagensCarousel());
    }, [])

    function openFileSelectDialog(e, callback) {
        var elemento = document.createElement("input");
        elemento.type = "file";
        elemento.setAttribute('multiple', "");
        elemento.onchange = callback;
        elemento.click();
    }

    function filesUpload(e) {

        dispatch(uploadImagensCarousel(e));

    }

    //<input type="file" name="files" accept=".jpg,.jpeg,.png"multiple onChange={handleInput} />
    //{configs.imgsPath + produto.img}
    return (
        <CenterContainer>            
            <GerenciarImagensCarousel>
                <ImageCardList images={carousel.images} removeImage={removeImageCarousel} />
                {carousel.status === "loading" &&
                    <LoadIndicator />
                }
                <ButtonFlat style={{ margin: "10px auto", display: "block" }} onClick={(e) => openFileSelectDialog(e, filesUpload)}>Adicionar imagem</ButtonFlat>

            </GerenciarImagensCarousel>
        </CenterContainer>
    )
}

function ImageCardList({ images, removeImage }) {

    let imageCards = images.map(image => (<ImagemCard key={image._id} image={image} removeImage={removeImage}></ImagemCard>))

    return (
        <ul>
            {imageCards}
        </ul>
    );
}

function ImagemCard({ image, removeImage }) {

    const dispatch = useDispatch();

    return (
        <ImgCardLi waiting={image.status=='deleting'}>
            <img src={configs.imgsPath + image.path} />
            <DeleteImage onClick={(e) => { dispatch(removeImage(image._id)) }}></DeleteImage>

        </ImgCardLi>
    );
}

CarouselManager.getLayout = (page) => {
    return (
      <DefaultHeaderAndFooter>
        {page}
      </DefaultHeaderAndFooter>
    )
}
  
export default CarouselManager;