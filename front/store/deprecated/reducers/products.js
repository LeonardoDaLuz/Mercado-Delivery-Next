import {
    CARREGA_PRODUTO_START,
    CARREGA_PRODUTO_SUCCESS,
    CARREGA_PRODUTO_FAILURE,
    LIKE_PRODUTO_START,
    LIKE_PRODUTO_SUCCESS,
    LIKE_PRODUTO_FAILURE,
    CARREGA_MAIS_PRODUTOS_START,
    CARREGA_MAIS_PRODUTOS_SUCCESS,
    CARREGA_MAIS_PRODUTOS_FAILURE,
    RESETA_LISTA_PRODUTOS,
    RESET_PRODUCT_LIST
} from '../types'
import { HYDRATE } from 'next-redux-wrapper';
import produce from 'immer';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';

const initialState = {
    status: 'IDLE',
    loadingStarted: null,
    mainSearch: [],
    currentProduct: {
        _id: '',
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
        }
    
    }
};

const products = produce((draftState, action) => {

    const payload = action.payload;

    switch (action.type) {
        case HYDRATE:
            Object.keys(action.payload.products).forEach((key) => {
               // draftState[key] = action.payload.products[key];
            })
            break;
        case CARREGA_MAIS_PRODUTOS_START:
            draftState.status = "LOADING";
            break;
        case CARREGA_MAIS_PRODUTOS_SUCCESS:
            const currentKey = combinePathWithQuery2(payload.path, payload.query);
            let previousProductList = draftState[currentKey];
            previousProductList = previousProductList === undefined ? [] : previousProductList;
            draftState[currentKey] = previousProductList.concat(payload.data);
            draftState.status = 'SUCCESS';
            break
        case CARREGA_MAIS_PRODUTOS_FAILURE:
            draftState.status = 'FAILURE';
        case RESETA_LISTA_PRODUTOS:
            draftState.mainSearch = [];
            break;
        case RESET_PRODUCT_LIST:
            Object.keys(draftState.mainSearch).forEach(key=>draftState.mainSearch[key]=[]);
            break;
        default:
            return draftState;
    }
}, initialState);

export default products;