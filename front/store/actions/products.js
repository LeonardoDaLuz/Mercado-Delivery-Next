import { combinePathWithQuery2 } from '../../utils/combinePathWithQuery'
import {
    CARREGA_MAIS_PRODUTOS_START,
    CARREGA_MAIS_PRODUTOS_SUCCESS,
    CARREGA_MAIS_PRODUTOS_FAILURE,
    RESETA_LISTA_PRODUTOS,
    RESET_PRODUCT_LIST,
} from '../types'



export const loadMoreProducts = (path, query, quantity) => {
    return async (dispatch, getState) => {
        //se usar o location.search ou o URLSearchParams ele começa ou não com '?', então este trecho normaliza esta diferença.
        /*
                if (path.charAt(path.length - 1) === '?') {
                    path = path.replace('?', '')
                }
        
                if (path[path.length - 1] !== "/")
                    path += "/";
        
                query = query.toString();
                if (!query.startsWith('?'))
                    query = '?' + query;*/

        let currentLoadedProducts = getState().products[combinePathWithQuery2(path, query)];

        if (currentLoadedProducts === undefined)
            currentLoadedProducts = [];

        const slicesFrom = currentLoadedProducts.length;

        //Montando a url de pesquisa q será interpretada pelo backend.
        let url = "http://localhost:3001" + "/search"+combinePathWithQuery2(path + '/' + slicesFrom + "/" + (slicesFrom + quantity), query);

        //fazendo as requisições e a emissão os actions.
        await dispatch({ type: CARREGA_MAIS_PRODUTOS_START, payload: url });

        const response = await fetch(url);

        try {
            const data = await response.json();
            dispatch({ type: CARREGA_MAIS_PRODUTOS_SUCCESS, payload: { data, path, query }, url });
        } catch (err) {
            dispatch({ type: CARREGA_MAIS_PRODUTOS_FAILURE, payload: { error: err.message, status: response.status }, url });
        }
    }
}

export const reloadProductList = (path, query, quantidade) => {
    return async (dispatch, getState) => {
        dispatch({ type: RESETA_LISTA_PRODUTOS });
        dispatch(loadMoreProducts(path, query, quantidade));
    }
}

export const resetProductList = (path, query, quantidade) => {
    return async (dispatch, getState) => {
        dispatch({ type: RESET_PRODUCT_LIST });
    }
}


