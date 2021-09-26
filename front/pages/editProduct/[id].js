import { useCallback, useEffect, useState } from 'react';
import NoSSR from 'react-no-ssr';
//Sub Components
import { BreadcumbsSelector } from '/components/EditProduct/BreadCumbsSelector';
import { PhotoFrame } from '/components/EditProduct/PhotoFrame';
import BuyFrame from '/components/EditProduct/BuyFrame';
import { ProductDescription } from '/components/EditProduct/ProductDescription';
//Others
import { loadProduct, updateProduct } from '/store/slices/productSlice'
import { resetProductList } from '/store/slices/productsSlice.js';
import produce from 'immer';
import { useFormik } from 'formik';
import { nestedPropertySeletor } from '../../utils/nestedPropertySelector';
import { Row, Container } from '../../globalStyleds';
import { Options } from '/components/EditProduct/Options';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import DefaultHeaderAndFooter from '../../layouts/DefaultHeaderAndFooter';
import Script from 'next/script';
import fixNextRouterQuery from '../../utils/fixNextRouterQuery';
import waitFor from '../../utils/waitFor';

function EditProduct() {

    const produto = useSelector((rootState) => rootState.product);
    const dispatch = useDispatch();
    const router = useRouter();


    //const urlSearchParams = new URLSearchParams(router.asPath.split("?").pop()); //

    // fixNextRouterQuery(router);

    const query = router.query;

    const [draftProduct, setDraftProductState] = useState({

        title: '',
        categories: [],
        description: '',
        imgs: [],
        price: 0,
        stock: 1,
        offer: {
            time_range: {
                starts: 0,
                ends: 0
            },
            off_price: 0,
            enabled: false
        },
    });

    const [draftStatus, setDraftStatus] = useState('empty');

    useEffect(() => {
        if (router.query['id']) {
            setDraftStatus('Loading...');
            dispatch(loadProduct(query['id']));
        }
    }, [router.asPath]);


    useEffect(() => {
        if (draftStatus === 'Loading...')
            setDraftStatus('Loaded...');

        setDraftProductState({ ...produto });
    }, [produto]); //Quando o produto é carregado a partir do servidor, isto é copiado para um rascunho do produto, que é onde os dados serão alterados.


    let handleChanges = (e) => {

        setDraftStatus('modified');

        console.log("porra", e.target.name, e.target.value, draftProduct);
        setDraftProductState(produce(draftProduct, (draftState) => {
            switch (e.target.type) {
                case 'date':
                    nestedPropertySeletor(draftState, e.target.name).set(e.target.value + "T00:00:00.000Z");
                    break;
                default:
                    nestedPropertySeletor(draftState, e.target.name).set(e.target.value);
            }

        }));

    };

    const changeBreadcumb = (index, newValue) => {
        setDraftStatus('modified');

        setDraftProductState(produce(draftProduct, (draftState) => {
            draftState.categories[index] = newValue;
            draftState.categories.length = index + 1;

        }));
        // console.log(draftProduct.categories);
    }

    const pushImages = (e, images) => {
        e.preventDefault();
        setDraftStatus('modified');
        setDraftProductState(produce(draftProduct, (draftState) => {
            draftState.imgs.push(...images);
        }));
    }

    const removeImage = (e, image) => {
        e.preventDefault();
        setDraftStatus('modified');
        setDraftProductState(produce(draftProduct, (draftState) => {
            let index = draftState.imgs.indexOf(image);
            if (index !== -1) {
                draftState.imgs.splice(index, 1);
            }
        }));
    }

    const discardChanges = (e) => {
        e.preventDefault();
        router.push('/product/' + produto._id);
    }

    const saveChanges = (e) => {
        e.preventDefault();

        // console.log(draftProduct);

        setDraftStatus('Saving...')

        dispatch(updateProduct(
            draftProduct,
            () => { setDraftStatus('Saved'); router.push('/product/' + produto._id); dispatch(resetProductList()); },
            () => { setDraftStatus('Save failure'); }
        ));
    }


    let childProps = { draftProduct, product: produto, produto: draftProduct, draftStatus, handleChanges, changeBreadcumb, pushImages, removeImage, saveChanges, discardChanges } //produto está redundante apenas para manter compatibilidade por enquanto 


    return (

        <Container>
            <Script src='/ckeditor/build/ckeditor.js' strategy="beforeInteractive" /> {/*A dependencia do ckeditor é necessaria ser carregada, porem isso só funciona numa PAGE, logo não pude usar isso dentro do script do componente que vai renderizar a descrição do produto */}
            <NoSSR>
                <Row>
                    <BreadcumbsSelector {...childProps} />
                    <Options {...childProps} />
                </Row>
                <form onSubmit={saveChanges}>
                    <Row>
                        <PhotoFrame   {...childProps} product={draftProduct} />
                        <BuyFrame   {...childProps} />
                        <ProductDescription  {...childProps} />
                    </Row>
                </form>
            </ NoSSR>
        </Container >

    );

}

EditProduct.getLayout = (page) => {
    return (
        <DefaultHeaderAndFooter>
            {page}
        </DefaultHeaderAndFooter>
    )
}

export default EditProduct;



